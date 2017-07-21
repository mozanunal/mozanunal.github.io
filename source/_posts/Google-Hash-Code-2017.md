title: |
  Google Hash Code 2017
tags:
  - Hash Code
categories:
  - Linux ve Programlama
author: Mehmet Ozan Ünal
date: 2017-09-13 02:51:00
---
**Herkese Merhabalar**,

Google bir kaç senedir tüm dünyada programlama ve algoritmalar üzerine bir yarışma düzenliyor. Bu yarışma kapsamında, yarışmanın katılımcılarına karmaşık algoritmik problemler veriliyor ve istenilen data kümeleri için yine verilen formatta sonuçlar oluşturacak algoritmalar yazılması gerekiyor. Son olarak bu sonuç dosyaları Google'ın sistemine yükleniyor ve skor hesaplanıyor. Yarışma 2 aşamadan oluşuyor 1. aşama online eleme. İkinci aşama ise ilk 30'a giren gruplar bir merkezde yarışıyor. Ben de yarışmaya 2016 ve 2017 yıllarında katıldım. Bu yazıda 2017 yılındaki online eleme sorusu ve pratik sorusu hakkında paylaşımlar yapmak istiyorum. Bu arada bu soruları 4 saat içerisinde çözememiz gerekiyor bu nedenle kodlar hızlı yazıldı hata içerebilir fakat her iki kod da google'ın sisteminde oldukça iyi puanlar alıyordu.

*Yarışmada yazdığımız çözümlere yarışma sorularına ve örnek datalara [bu bağlantıdan](https://github.com/mozanunal/NOP_HashCode2017) ulaşabilirsiniz
*
![](https://i.ytimg.com/vi/BCv_7yXNuP4/maxresdefault.jpg)

#### Pratik Sorusu: Pizza

İlk soru "Pizza" sorusu. Bu soruda bir pizzayı istenilen maddelerden en az içerek şekilde parçalamamız isteniyor. Amaç pizzanın mümkün olduğunca fazla kısmını kullanmak. Pizzamız dikdörtgen ve ilk kısımda pizza sınıfı oluşturuluyor. Bunun için dosyadan ilk satır okunuyor ve bu satır, sütun ve içerik bilgisi dosyadan 'parse' edilip sınıfın özellikleri olarak bir matrise kopyalanıyor. Kodun devamında ise belirlenen özelliklerde dilimler oluşturmak üzerine. Dilim geçerli bir dilim mi? Dilim içerisindeki domates, mantar sayısı kaç şeklinde sorulara cevap veren methodlar var. Dilim hakkında verileri alan fonksiyonlar eklendikten sonra algoritmayı oluşturduk. Amacı en köşeden başlayarak gerekli dilimi oluşturduktan sonra sonraki dilime geçiyor. Daha sonra ikinci bir tur atıp genişletilebilecek dilimlere göz atıyor. Ve eğer dilim genişletilebilir durumdaysa genişletiyor pizzanın daha büyük bir kısmını kullanabilmek için. 'Commit' fonksiyonu ile de değişlikler matrise kaydediliyor. Böylece zaten kullanımda olan parçalar diğer dilimlerde kullanılamıyor. İkinci tur dolaşımda anlık olarak o dilimi 'decommit' yapıp o çevrede daha büyük bir dilim oluşturmaya çalışıyor. Son olarak başarı oranını hesaplayan bir fonksiyon var. Eğer algoritma üzerinde değişiklik yaparsanız bu fonksiyonu kullanarak performansını deneyebilirsiniz.     

```python
class pizza:
    def __init__(self, file):
        f = open(file, 'r')
        fline = f.readline()
        [R, C, L, H] = fline.split(' ')
        self.L = int(L)
        self.H = int(H)
        self.R = int(R)
        self.C = int(C)
        self.Matrix = []
        self.Matrix2 = []
        self.result = []
        self.resultS = []
        for index, line in enumerate(f):
            self.Matrix.append([])
            self.Matrix2.append([])
            for i in range(0, self.C):
                self.Matrix[index].append(line[i])
                self.Matrix2[index].append(False)

    def calculate(self):
        # print('Calculating')
        for i in range(0, self.R):
            for j in range(0, self.C):
                if self.Matrix2[i][j] is False:
                    self.trycreateSlice(i, j)
        
        for index,curSlice in enumerate(self.result):
            self.decommitResult(curSlice)
            for i in [3,2,1,0]:
                for j in [3,2,1,0]:
                    trySlice = slice(curSlice.r1, curSlice.c1, curSlice.r2 + i, curSlice.c2 + j)
                    if self.testSlice(trySlice) is True:
                        #print 'updated'
                        self.result[index].r1 = trySlice.r1
                        self.result[index].c1 = trySlice.c1
                        self.result[index].r2 = trySlice.r2
                        self.result[index].c2 = trySlice.c2
                        for i in range(trySlice.r1, trySlice.r2 + 1):
                            for j in range(trySlice.c1, trySlice.c2 + 1):
                                self.Matrix2[i][j] = True
                        break
        

    def trycreateSlice(self, r, c):
        # print(r,c),'start'
        for i in range(0, 15):
            for j in range(0, 15):
                trySlice = slice(r, c, r + i, c + j)
                if self.testSlice(trySlice) is True:
                    # print 'finded'
                    self.commitResult(trySlice)
                    break
        return (r, c)

    def testSlice(self, slice):
        test = False
        if (((slice.r2 - slice.r1 + 1) * (slice.c2 - slice.c1 + 1)) > self.H) | ((slice.r2 + 1) > self.R) | ((slice.c2 + 1) > self.C):
            # print '>boundries'
            a = 5
        else:
            tNum, mNum = self.getNumbers(slice)
            avaible = self.getAvaible(slice)
            if avaible is True:
                if(mNum >= self.L) & (tNum >= self.L):
                    test = True
            else:
                # print 'not Avaible'
                a = 5
        return test

    def getAvaible(self, slice):
        avaible = True
        for i in range(slice.r1, slice.r2 + 1):
            for j in range(slice.c1, slice.c2 + 1):
                if self.Matrix2[i][j] == True:
                    avaible = False
        return avaible

    def getNumbers(self, slice):
        tNum = 0
        mNum = 0
        for i in range(slice.r1, slice.r2 + 1):
            for j in range(slice.c1, slice.c2 + 1):
                if self.Matrix[i][j] == 'T':
                    tNum += 1
                elif self.Matrix[i][j] == 'M':
                    mNum += 1
        return tNum, mNum

    def commitResult(self, slice):
        self.result.append(slice)
        # print 'done',str(r1)+" "+str(c1)+" "+str(r2)+" "+str(c2)
        for i in range(slice.r1, slice.r2 + 1):
            for j in range(slice.c1, slice.c2 + 1):
                self.Matrix2[i][j] = True

    def decommitResult(self, slice):
        # print 'done',str(r1)+" "+str(c1)+" "+str(r2)+" "+str(c2)
        for i in range(slice.r1, slice.r2 + 1):
            for j in range(slice.c1, slice.c2 + 1):
                self.Matrix2[i][j] = False

    def convertRestultString(self):
        for slice in self.result:
            self.resultS.append(str(slice.r1) + " " + str(slice.c1) +
                           " " + str(slice.r2) + " " + str(slice.c2))    

    def printSucces(self):  
        trueC = 0
        falseC = 0
        for i in range(0, self.R):
            for j in range(0, self.C):
                if self.Matrix2[i][j] == True:
                    trueC += 1
                else:
                    falseC += 1
        print "Score: ", trueC, " / ", trueC+falseC

class slice:
    def __init__(self,r1,c1,r2,c2):
        self.r1 = r1
        self.c1 = c1
        self.r2 = r2
        self.c2 = c2


mypizza = pizza('medium.in')
# print mypizza.Matrix
# print mypizza.Matrix2
mypizza.calculate()
mypizza.convertRestultString()
s = str(len(mypizza.resultS))+"\n"
for res in mypizza.resultS:
    s += res + "\n"
file = open("medium.txt","w")
file.write(s)
file.close()


mypizza.printSucces()
```


#### Online eleme sorusu: Streaming Videos

Bu soruda ise video izleme gecikmesini azaltmak için videoları 'cache' sunuclara yerleştirmemiz isteniyor. Yüksek puan almak için toplam gecikme süresi minimum olmalı. Bu kapsam da ilk aşamada gerekli sınıflar oluşturuldu. Daha sonrasında bu sınıflar arasında bağlantılar oluşturuldu. Algoritmanın amacı herhangibir bir cache serverın bütün videoları için latency hesaplayıp sonra bunları skorlayarak bir optimizasyon yapmak. Burda tabi bağlantıları yapmak biraz zor oldu benim açımdan. Pizza sorusuyla karşılaştırınca çok daha fazla farklı sınıf olduğunu farketmişsiniz. Burda çözümü anlatmanın çok bir anlamı olmadığını düşünüyorum. Daha çok yarışma hakkında bir kaç izlenimimden bahsetmek isterim. Yarışmada farkettiğiniz üzere aslında tam olarak çözümü belli olmayan sorular soruluyor. Daha doğrusu mutlak doğru sonuç var ama onu hesaplamak imkansız bir seviyede. Yani Brute force ile neredeyse sonsuz olasılıkla karşı karşıya kaldığımız sorular soruluyor. Lütfen soruları çözerken hep onu dikkat alın. Sürekli algoritmanınızın karmaşıklığına dikkat ederek geliştirin. Ben de bu konuda yeterince tecrübeli olmadığım için bir kaç kere büyük data kümelerinde sonsuz işleme doğru giden algoritmalar yazdım. İkinci önerim ise kesinlikle verilen datalara bakarak çözümünüzü üretin. Çünkü bütün sorularda genelde 3 4 adet farklı data kümesi verilliyor ve genelde her bir data farklı bir şeyi ölçüyor. Biri için geliştirdiğiniz algoritma diğerlerine uymayabiliyor. Bugünlük bu kadar daha ayrıntılı sorularınızı her zaman sorabilirsiniz. Görüşmek üzere
```python
class scoring:
    def __init__(self,video,score):
       self.video= video
       self.score = score
    def __lt__(self, other):
         return self.score > other.score + 5 
         
class connection:
    def __init__(self,ep,cacheNum,latency):
        self.ep = ep
        self.cacheNum = cacheNum
        self.latency = latency

class video:
    def __init__(self, id , size):
        self.id = id
        self.size = size

class cache:
    def __init__(self, id , capacity):
        self.id = id
        self.capacity = capacity
        self.videos = []
        self.endpoints = []

    def addVideo(self,video):
        if self.capacity >= video.size: 
            self.videos.append(video)
            self.capacity = self.capacity - video.size
            return True
        else:
            return False
        

class endpoint:
    def __init__(self,id,latencyDataC,connectionNumber):
        self.id = id 
        self.latencyDataC= latencyDataC
        self.connections = []
        self.requests = [] 

class request:
    def __init__(self,reqNumber, videoID, endpointID,count):
        self.reqNumber = reqNumber
        self.videoID = videoID
        self.endpointID = endpointID
        self.count = count


class solver:
    def __init__(self, file):
        self.videos = []
        self.eps = []
        self.requests = []
        self.caches= []
        f = open(file, 'r')
        fline = f.readline()
        [V, E, R, C, X] = fline.split(' ')
        self.videoCount = int(V)
        for indexC in range(0,int(C)):
            c = cache(indexC, int(X))
            self.caches.append(c)
        fline = f.readline()
        for index, size in enumerate(fline.split(' ')):
            v = video(index,int(size))
            self.videos.append(v)
        for currentEpID in range(0,int(E)):
            fline = f.readline()
            [latencyDataC, connectionNumber] = fline.split(' ')
            ep = endpoint(currentEpID,int(latencyDataC),int(connectionNumber))
            self.eps.append(ep)
            for i in range(0,int(connectionNumber)):
                [cNUm,latency] = f.readline().split(' ')
                c = connection(ep,int(cNUm),int(latency))
                ep.connections.append(c)
                self.caches[int(cNUm)].endpoints.append(self.eps[currentEpID])
        for curReqId in range(0,int(R)):
            [reqVideoID,reqEpID,reqCount] = f.readline().split(' ')
            r = request(curReqId,int(reqVideoID),int(reqEpID),int(reqCount))
            self.requests.append(r)
            self.eps[int(reqEpID)].requests.append(r)


    def getvideosofcache(self,cache):
        #print "cache id:", cache,
        scoreList = []
        for i in self.videos:
            s = scoring(i,0)
            scoreList.append(s)
        for ep in cache.endpoints:
            for req in ep.requests:
                curLat = self.getlatency(cache,ep)
                score = (req.count*(ep.latencyDataC-curLat))
                #print "videoid : ", req.videoID, "ep: ", ep.id, "req count", req.count, "dc latiency: ", ep.latencyDataC, "connect latency",curLat, "puan", score)
                scoreList[req.videoID].score += score
                #print "videoid : ", req.videoID, scoreList[req.videoID].score
        scoreList.sort()
        #for a in scoreList:
            #print a.video.id, a.score, a.video.size
        return scoreList

    def getlatency(self,cache,endpoint):
        ali = 0
        for i in endpoint.connections:
            if i.cacheNum == cache.id:
                ali = i.latency
                break
        return ali

    def solve(self):
        for curCache in self.caches:
            print curCache.id
            scoreList = mysolver.getvideosofcache(curCache)
            for curVideo in scoreList:
                if curVideo.score == 0:
                    break
                curCache.addVideo(curVideo.video)
    
    def result(self):
        result = str(len(self.caches))
        for curCache in self.caches:
            result += "\n"+str(curCache.id)  
            for curVideo in curCache.videos:
                result += " "+str(curVideo.id)
        #print result 
        file = open("videos_worth_spreading.txt","w")
        file.write(result)
        file.close()  



mysolver = solver('videos_worth_spreading.in')
mysolver.solve()
mysolver.result()

```