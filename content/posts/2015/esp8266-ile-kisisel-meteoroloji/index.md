---
title: '[TR] ESP8266 ile Kişisel Meteoroloji İstasyonu'
tags:
  - Electronics
  - Arduino
  - Dht11
  - ESP8266
  - Html
  - MQ135
  - Yağış sensörü
categories:
  - Electronics
  - IoT
author: Mehmet Ozan Ünal
date: 2015-09-30 02:51:00
---

**Herkese Merhabalar,**

Bugünkü yazımda ESP8266 Wifi modülünün kullanımına yönelik yaptığım uygulamayı
anlatacağım. Bu modülü daha önceki
[şu yazımda](https://mozanunal.com/2015/03/esp8266-modulu-html-server/)
anlatmıştım. Ucuz fiyatına rağmen çok yetenekli bir modül. O yazımda ESP8266
Access Point olarak kullanılmıştı.Bu yazımdaki uygulamamda, hali hazırda var
olan wifi ağına da bağlanabilecek. Bu sayede wifi olan yerlerde direk wifi
üzerinden verilere ulaşılabilinirken, wifi çekmediği yerlerde ESP8266'nın kendi
oluşturduğu Access Point üzerinden ulaşabilecek. Bilgilere istersek web browser
üzerinden direk IP adresini yazarak, istersek aşağıda linkini verdiğim kendi
yazdığım android programını kullanarak ulaşabileceğiz.

Temel olarak proje şu şekilde çalışıyor: ESP8266 gerekli ayarlarda başlatılır.
Belli aralıklarla Sıcaklık- Nem, Yağış ve CO2 sensöründen veri alınır. Daha
sonra ESP üzerinde oluşturulan http server güncellenir.

**Kodlar**

[Kodları ve gerekli 2 kütüphaneyi bu linkten indirebilirsiniz.](https://drive.google.com/file/d/0B5j__Lyt9ozbTnpTSnFqMXN0ZmM/view?usp=sharing)

**Malzemeler ve Bağlantılar**

Arduino Nano\
DHT11 sıcaklık ve nem sensörü Yağmur sensörü MQ135 Gaz sensörü 3.3v-5v Logic
Conventer ESP8266 2 Adet Diyot

ESP8266 3.3 volt ile çalışıyor fakat arduinonun pinleri 5 volt giriş çıkış
veriyor. Bu sorunun çözmek için Logic Conventer kullandım. Arduino Nano'nun 3.3
Volt pininden çok yüksek güç çekilemiyor bu yüzden ESP8266'yı direk bu pinden
besleyemedim onun yerine.5 volt pininden çıkış aldım araya 2 adet diyot
bağladım. Diyotlar voltajı 0.7'şer volt düşüyor. Bu sayede ESP'nin üzerindeki
voltaj  3.6 volt oluyor. Bu voltajda ESP sorunsuz çalıştı. _Zaman sorunundan
dolayı böyle pratik bir çözüm yaptım, benim tavsiyem uygun güç değerinde 3.3
volt bir regülatör almanızdır._

**DHT11-Arduino**

VCC-> 5V GND-> GND OUT-> D4

**MQ135-Arduino**

VCC-> 5V GND-> GND A0-> A1

**Yağmur Sensörü-Arduino**

VCC-> 5V GND-> GND A0-> A3

**ESP8266**

VCC->5 volt ama 2 diyot üzerinden GND-> GND RX-> D11 TX-> D10 CH_PD->  3.3 V

Logic Conventer üzerinden

![](IMG_20150925_212341.jpg)

![](IMG_20150925_212313.jpg)

![](IMG_20150925_212355.jpg)

Bu ekran alıntıları evimde hali hazırda varolan wifi bağlı iken aldığım verilere
aittir.

![](Screenshot_2015-09-21-03-29-17.png)

![](Screenshot_2015-09-21-03-28-56.png)

[Android programını buradan indirebilirsiniz.](https://drive.google.com/file/d/0B5j__Lyt9ozbR3dLVTI1aUluaDQ/view?usp=sharing)

ESP8266 wifi bulamadığı zaman kendi bağlantı noktası kurar ve o wifi üzerinden
verileri alabiliriz. Bu ekran görüntüleri ise wifi olmadığı bir yerdeki
kullanımına aittir.

![](Screenshot_2015-09-21-03-32-30.png)

![](Screenshot_2015-09-21-03-32-20.png)

**Kutunun Yapılışından Fotoğraflar**

İstasyona uygun kolay yapılabilecek bir kutu yapmaya karar verdim. Kutu gerekli
idi çünkü yağmur sensörü yağmura temas etmeli fakat diğer sensörler ve arduino
suyla temas etmemeli. Bir diğer sıkıntı ise gaz sensörünün gaz ölçümü için
havayı ısıtması. Bu sensörün de sıcaklık sensöründen yalıtılması gereklidir. Bu
sorunları çözmek için gaz sensörü kabın altında bıraktım bu sayede hem diğer
sensörleri etkilemeyecek hem de yağmur yağarsa yağmurdan korunacak. Yağmur
sensörü de kutunun üst tarafına monte ettim.

Açıkca söylemek gerekirse kutum çok da güzel bir kutu olmadı ama benim deneme
sürecim boyunca işimi görmeme yetti. Kutu konusunu geliştirmem gerektiğimin
farkındayım ama :)

Tekrar görüşmek üzere...

![](IMG_20150927_051714.jpg)

![](IMG_20150927_051020.jpg)

![](IMG_20150927_051025.jpg)

![](IMG_20150927_052253.jpg)

![](IMG_20150927_052257.jpg)

**Kullanımdan Fotoğraflar**

![](IMG_20150927_052636.jpg)

![](IMG_20150927_052610.jpg)

![](IMG_20150927_092540.jpg)

![](IMG_20150927_052528.jpg)

![](IMG_20150927_092548.jpg)
