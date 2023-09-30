---
title: '[TR] Alkış ile Lamba Kontrolü'
tags:
  - Electronics Devreler
  - Electronics Devreler ve Teorik Yazılar
  - alkış ile lamba kontolü
  - aydınlatma projeleri
categories:
  - Electronics
  - Analog
author: Mehmet Ozan Ünal
date: 2014-10-07 01:28:00
---
**Herkese Merhabalar!**  
Bu yazımda size, daha önceden yapıp (lise yıllarımda), bloğa koymak icin tekrar tamir ettiğim bir projemden bahsetmek istiyorum. Projenin ismi "Alkış ile lamba kontrolü" amacı ise alkış gibi yüksek bir sesle bir röle kontrol etmek. Bu projede, röleye toplam 12 led bağlayıp aydınlatma sağlanmıştır. Devrenin teknik detaylarına gelirsek temel mantığı şöyle;  
- mikrofondan ses sinyali alınır.  
- alınan ses opamp devrelerle yükseltilir.  
- yükseltilen sinyaller 4011 entegresinde işlenerek yüksek ses geldiğinde çıkış sağlanır.  
- sağlanan çıkışa bağlı olan transistör kontrol edilir. Yüksek ses gelirse transistör aktifleşir ve rölenin çalışmasını sağlar.  

Projenin tanıtım videosu ve devresinin çizimi aşağıdadır. Tekrar görüşmek üzere...  

{{< youtube id="w-EO97_3_Ec" >}}
![](https://1.bp.blogspot.com/-BBaMnNWpwWk/VDLekKoQj1I/AAAAAAAAEX0/FdT7mk9ur0A/s1600/IMG_20141005_174701.jpg)

** Malzeme Listesi**
* Mikrofon
* 2,2 k direnç
* 10 k trimpot
* 2,2 k direnç
* 4011 entegresi
* 1 m direnç
* 220 nf kapasitör
* 2,7 k direnç
* 1 m direnç
* 220 nf kapasitör
* BC237 transistör
* BC237 transistör
* 4.7 V zener diyot
* 100 u kapasitör
* 1,5 k direnç
* 2,2 k direnç
* 1N4148 diyot
* 12 V röle
