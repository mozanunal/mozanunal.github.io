title: '[TR] Hash Code 2018'
tags:
  - hackhathon
  - hashcode2018
categories:
  -  Coding
date: 2018-04-08 00:45:01
---

**Herkese Merhabalar,**
Hash Code Google tarafından dünya çapında düzenlenen bir algoritma yarışmasıdır. Bu yıl itibariyle son 3 tanesine ben de katılmış bulunuyorum. Hatta geçen sene yarışma hakkında bir yazı da yazmıştım. Bu geleneği bu yıl da devam ettirmeye karar verdım. 

Bu seneki yarışmada çok başarılı olamadık derece anlamında. Ama yarışmada çalışan, puan alabilen bir çözüm sunmak bile baya zor. O nedenle ben de çözümüzü birazcık açıklamak istiyorum. Aşağıdan direk github reposunu inceleyebilirsiniz.
[Github Repo](https://github.com/mozanunal/hashcode-2018-qualificationQuestion)

![](https://i.ytimg.com/vi/BCv_7yXNuP4/maxresdefault.jpg)


Yarışmada şunu yapmamız istendi: Belli bir zamanda bir yerden bir yere gitmesi gereken yolcular var. Elimizde yolcuları taşımak üzere arabalar var. Hangi araba ne zaman nerede olacak hangi yolcuları alacak bunu optimize etmemiz isteniyor.

Aşağıdaki dosyada point ve map classı tanımlanmış. Bir de mesefa hesaplayan bir fonksiyon eklenmiş durumda.
```python

def calcStep(a,b):
    return abs(a.x - b.x ) + abs(a.y - b.y)


class Point(object):
    def __init__(self,x,y):
        self.x = x
        self.y = y

class Map(object):
    def __init__(self,R,C):
        self.R = R
        self.C = C
```

Burada "Ride" objesi tanımlanmış durumda. "Ride" için gerekli argumanlar başlangıç-bitiş noktaları ve zamanları. Bu girdilere göre bir kaç tane de daha özellik __init__ fonksiyonunda oluşturuluyor. 
```python

from mapH import *

class Ride(object):
    def __init__(self, ride_id, start_intersection, finish_intersection, earliest_start, latest_finish):
        self.id = ride_id
        self.start_intersection = start_intersection
        self.finish_intersection = finish_intersection
        self.earliest_start = earliest_start
        self.latest_finish = latest_finish
        self.stepSize = calcStep(start_intersection,finish_intersection)
        self.earliest_finish = self.earliest_start + self.stepSize
        self.latest_start =  self.latest_finish - self.stepSize
        self.status = 0

    def printRide(self):
        print "-----Ride id: ", self.id
        print "-start ", self.start_intersection.x, self.start_intersection.y
        print "-finish: ", self.finish_intersection.x, self.finish_intersection.y
        print "-start steps: ", self.earliest_start, self.latest_start
        print "-distance: ", self.stepSize
        print "-finish steps: ", self.earliest_finish, self.latest_finish
```

Aşağıdaki dosya temel işlemlerimizin yapıldığı araba objesi. Buradaki en kritik fonksiyon "findRide" fonksiyonu. Biz çözümümüzü şu şekilde tasarladık: Simulasyon benzeri bir şey çalıştırıyoruz t = 0 anından başlanarak tüm arabalara ilk konumlarına ve "Ride" durumuna göre iş atanıyor. Sonra simulasyon t = 1 anına geçiyor. Eğer boşa çıkmış araba varsa tekrar ona iş atayım sonraki t anına geçiş yapıyor. Bu şekilde zamanı simüle etmiş oluyoruz ve boşa çıkan arabaya hemen iş atanıyor. 
```python
import numpy as np
from mapH import *


class Car(object):
    def __init__(self,id):
        self.id = id
        self.currentPos = Point(0,0)
        self.rides = []
        self.willBeIdleTime = 0

    def printCar(self):
        print "-----Car id: ", self.id
        print "-pos ", self.currentPos.x, self.currentPos.y
        print "-status: ", self.status
        print "-rides", self.rides

    def findRide(self, Rides, stepNow):
        costs = []
        costs_rides = []
        for ride in Rides:
            if ride.status is 0:
                stepCost = calcStep(self.currentPos, ride.start_intersection) 
                if ( stepNow+(stepCost+ride.stepSize) ) < ride.latest_finish:
                    if (stepNow+stepCost) > ride.earliest_start: # direk al git
                        costs.append(stepCost)
                        costs_rides.append(ride)
                    else: # beklemeli cost
                        costs.append(ride.earliest_start-stepNow)
                        costs_rides.append(ride)


        if len(costs) > 0:
            darr = np.array(costs)
            selected_ride = costs_rides[darr.argmin()]
            self.rides.append(selected_ride.id)
            Rides[selected_ride.id].status = 1
            self.willBeIdleTime = stepNow+(stepCost+ride.stepSize)
        else:
            self.willBeIdleTime = 1000000
```


Son olarak ana giriş dosyamız. Bu kod ile gerekli veri verilen dataset dosyalarından okunuyor ve kurguladığımız sisteme uygun hale getirilip objeler oluşturuluyor. Daha sonrasında önceden bahsettiğim simülasyon kısmı çalıştırılıyor ve çıktıları çıkış dosyasına yazılıyor yarışma tarafından verilen formatta. Evet bu yazı için benden bu kadar. Eğer anlamadığınız merak ettiğiniz yerler var ise kodla alakalı sorabilirsiniz. Son sözlerim olarak bu yarışmayı herkese tavsiye ediyorum. Gerçekten zorlayıcı ve geliştirici bir yarışma. Süreniz 4 saat oluyor ve stres altında doğru düşünme yeteneğinizi geliştirmeniz için sizi itekliyor. Bir diğer önemli unsur da beraber çalışma. Takımınızla doğru görev paylaşımını yapmanız gerek. Bireysel çalışarak iyi sonuçlar alınabilecek bir yarışma olduğunu düşünmüyorum. Tekrar görüşmek üzere...
```python
from ride import *
from car import *
from mapH import *

#"data/c_no_hurry.in"
#"data/b_should_be_easy.in"
#"data/a_example.in"
#"data/d_metropolis.in"
FILENAME = "data/d_metropolis.in"
Rides = []
Cars = []

file = open(FILENAME)

line1 = file.readline()

# R number of rows of the grid
# C number of columns of the grid
# F number of vehicles in the fleet
# N number of rides
# B per-ride bonus for starting the ride on time
# T number of steps in the simulation

values = line1.split(" ")
number_of_rows, number_of_columns, number_of_vehicles, number_of_rides, per_ride_bonus, number_of_steps = [int(v) for v in values]

print 'number_of_rows', 'number_of_columns', 'number_of_vehicles', 'number_of_rides', 'per_ride_bonus', 'number_of_steps'
print number_of_rows, number_of_columns, number_of_vehicles, number_of_rides, per_ride_bonus, number_of_steps


id = 0
for line in file.readlines():
    x1, y1, x2, y2, start, end = [int(i) for i in line.split(" ")]
    startPoint = Point(x1, y1)
    endPoint = Point(x2, y2)
    curRide = Ride(id, startPoint, endPoint, start, end)
    #curRide.printRide()
    Rides.append( curRide )
    id = id+1

for i in range(number_of_vehicles):
    Cars.append( Car(i) )


def solve():
    for i in range(number_of_steps):
        stepNow = i
        if i % 1000 is 0:
            print "Sim step", stepNow
        for car in Cars:
            if car.willBeIdleTime <= stepNow:
                car.findRide(Rides,stepNow)

def printResult():
    print "RESULT_________"
    result=""
    for car in Cars:
        line = str(len(car.rides))
        for i in car.rides:
            line+=" "+str(i)
        line+="\n"
        result+=line
    print result
    file = open(FILENAME+ ".out","w+")
    file.write(result)
    file.close()
    print "done"


solve()
printResult()
```