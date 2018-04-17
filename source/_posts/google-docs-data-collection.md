---
title: 'En Basit IOT Bulut Sistemi: Google Forms'
tags:
  - IOT
  - google docs
  - cloud
categories:
  - Elektronik
  - IOT
date: 2018-04-17 21:24:57
---

**Herkese Merhabalar,**

Bugün basit, ilginç ve kullanışlı bir proje ile karşınızdayım. Bulut tabanlı programlar oldukça populer oldu son zamanlarda. Ben bütün ofis programı ihtiyaçlarımı google'in çevrimiçi programlarıyla karşılıyorum. Google form da anket yapmanızı sağlayan bu araçlardan biri. Bu aracın olağan kullanımı anket yapmaktır. Bu projede bambaşka bir şey için kullanacağız: IOT sistemler için basit bulut sistemi.

Şöyle ki normalde anket için yapılmış bu form sistemini IOT cihazımızdan buluta veri göndermek için kullanacağız. Bu sistem sayesinde çok fazla uğraş vermeden cihazımızı uzaktan takip edebiliyor ve verilerini izleyebiliyor olacağız. 
Hatta direk olarak excel sistemine aktarılacağı için direk oradan analiz bile edebiliriz. Birden fazla cihazlı sistemler bile kurmak mümkün görünüyor. Online olarak takip etmek istediğimiz şeyler olduğunda kullanılabilir gibi gözüküyor.

Bunu yapmamız için biraz olağan dışı işler yapmamız gerekli birazcık. Yapacağımız şeyi özetlemek istersem: Forma tarayıcı üzerinden yaptığımız işlemi IOT bir cihazdan ve "curl" kullanarak yapacağız.

![image](/images/1517782817903.png)

İlkönce yeni bir form oluşturuyoruz. Burada cihazımızdan kaç parametre alacaksak onları giriyoruz formun içine.

![image](/images/1517778831931.png)

Ben burada cihazın idsi ve wifi rssi verisini göremek istiyorum onları giriyorum sadece.

![image](/images/1517779048608.png)

Aşağıdaki gibi form linki alıp linke gidiyoruz.

![image](/images/1517779095499.png)

Chrome dev console açıp id ve rssi kutucuklarına rastgele şeyler girip kaydede basıyoruz. Bildiğiniz gibi bizim kaydede basmamız aslında bir "web request" o google serverına gidip yanıt olarak veri tabanlarına kaydediliyor. 

![image](/images/1517779408700.png)

Chrome dev console üzerinden yaptığımız "web requesti" bulup curl olarak kopyalıyoruz. Bununla tüm gerekli header parametreleriyle forma girdi yapabileceğimiz bir curl komutu oluşturmuş oluyoruz. 

![image](/images/1517780965971.png)

Mesela sürekli bulut sistemine göndermek istediğimiz bir veri var. Onu bu şekilde bulut sistemine yollayabiliriz artık. Tek yapmamız gereken basit bir "sprintf" yapmak. Aldığımız değerleri bu karışık "curl request " içinde buluyoruz ve yerine uygun string format aracını koyuyoruz("%d","%s","%f").  

![image](/images/1517781160680.png)

Gördüğünüz gibi curl komutu oldukça karmaşık. Kodun karıştırmaması için ben bir kısmını sildim yerine 3 nokta koydum. Aşağıdaki gibi formatlayarak o stringi bulut sistemine aktaracak fonksiyonu oluşturabiliriz. Bu fonksiyonu bir döngünün içine alarak 2 dakikada bir CPU sıcaklığını bulut sistemimize aktaran bir kod yazabiliriz.
```
import os, time

def sendData():
        val = os.popen("""cat /sys/class/thermal/thermal_zone*/temp""").read()
        cmd= """
        curl 'https://docs.google.com/forms/d/e/1FAIp...
        ' -H 'u729917={}&entry.676449722={}&fvv=' --compressed > /dev/null
        """.format("moz-rpi",val)
        
        os.system(cmd)


while True:
        try:
                sendData()
                time.sleep(120)
        except:
                time.sleep(120)

```

Yukarıdaki kodun çıktısı da aşağıdaki ekran alıntısındaki gibi olacaktır. Tüm verilerimiz oluşturduğumuz formun yanıtlar dökümanına aşağıdaki gibi bir formatta düşecektir. Bu noktadan sonra istediğimiz graifiği de çizdirebiliriz ya da filtreler ile verimizi işleyebiliriz. Hatta tahminler bile oluşturabiliriz. Excel oldukça zengin seçenekler sunuyor. Bu yazımım da sonuna geldik. Tekrar görüşmek üzere.

![image](/images/1523997471005.png)

