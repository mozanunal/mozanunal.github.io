title: |
  Ses Kontrollü Robotik El
tags:
  - Electronics
  - Arduino
  - Android Programlama ve Oyun
  - Arduino
  - Android
  - Android Kontrol
  - bluetooth kontrol
  - Ses Kontrollü Robotik El
categories:
  - Electronics
  - Arduino
author: Mehmet Ozan Ünal
date: 2014-09-21 03:57:00
---
**Herkese Merhabalar!**  
Uzun bir aradan sonra bu yazımda "Ses Kontrollü Robotik El" projemden bahsetmek istiyorum. Bu proje tamamen hobi amaçlı bir projedir. Mekanik parçaları, çevreden bulduğum malzemelerden, elektronik kısmı ise çinden aldığım Arduino, HC-06 Bluetooth modulü ve 5 adet servo ile yapmaya çalıştım. Sesle kontrol işini sağlamak için ise android tabanlı bir telefon gerekmektedir. Ses kontrolü için ayrı bir modül eklemememin sebebi ise herkesin akıllı telefona sahip olduğu şu zamanda ekstra maliyetten kaçmaktır. Buradan projenin tanıtım videosunu seyredebilirsiniz. Projelerin teknik detayları yazının devamındadır.

<center>{% youtube aQ88p9DIUbE %}</center>


Robotik el uygun şekilde kesilmiş balsa ve bahçe <a name='more'></a>hortumundan oluşmaktadır. Balsanın üstüne ipler için yollar açılmıştır sonra ise vidalarla parmakları hareket ettirecek iplerin açıları düzenlenmiştir. Parmaklar balsaya ince vidalarla tutturulmuştur. Sağlamlaştırmak için ağaç tutkalı kullanılmıştır. Bahçe hortumu parmak şeklinde hareket edebilmesi için eklem yerlerinden aradaki açı yaklaşık 90 derece olacak şekilde kesilmiştir. Servonun ipi çekmesiyle parmağın hareket edeceği bir dizayn yapılmıştır.

<img src="https://3.bp.blogspot.com/-BhogfmKOs8Y/VB4KbMVdZOI/AAAAAAAAEAQ/7iZzwNRsuWU/s1600/IMG_20140804_183305.jpg" width="200" style="align-center">


Projenin genel işleyişi şu şekildedir. Android telefon sesi algılar &nbsp;ve yazdığım program sayesinde google ses tanıma sistemini kullanarak komutu algılar. Komutu yorumlayıp bluetooth ile HC-06 bluetooth modulüne aktarır. HC-06 modulü ise gelen komutları serial port üzerinden "arduino pro mini'ye aktarır. Arduino pro mini ile de 5 adet servo kontrol edilir. Tüm devre pertinanks kartın üzerine sabitlenmiş ve lehimlenmiştir. Pinler kullanılarak servolar için uygun beslemeler de devreye dahili olarak eklenip soket haline getirilmiştir.
<center>Tüm Malzemeler</center>
![Tüm Malzemeler](https://4.bp.blogspot.com/-zAdDETx12dw/VB4KbCaQRlI/AAAAAAAAEAI/0kG2fBZZOJc/s1600/Snapchat-20140828011346.jpg) 
 
<center>Son Hali</center>
![](https://4.bp.blogspot.com/-lrPg4Dxa2qo/VB4KaQSiivI/AAAAAAAAEAE/1WbCFpqnDEg/s1600/Ekran%2BAl%C4%B1nt%C4%B1s%C4%B1.PNG)