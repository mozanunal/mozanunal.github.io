---
title: '[TR] Ayarlanabilir Taşınabilir Güç Kaynağı Yapımı'
tags:
  - Electronics Devreler ve Teorik Yazılar
  - ayarlanabilor güç kaynağı
  - mt3608
categories:
  - Electronics
  - Analog
author: Mehmet Ozan Ünal
date: 2016-03-13 01:24:00
---

**Herkese Merhabalar,**

Bugünkü yazımda nasıl basit bir şekilde bir powerbank'i ayarlanabilir güç
kaynağına dönüştürebileceğimizden bahsedeceğim. Gerekli olan malzemeler sadece
bir adet power bank ve bir adet MT3608 boost converter. Projeye başlamadan önce
boost converter nedir ondan bahsetmek istiyorum. Boost converterlar voltaj
yükseltmek için kullanılır. Kondansatör ve bobin ve diyot kullanarak bir switch
yapısı kurarlar ve bu yapı ile hem voltajı yükseltirler hem de verimleri çok
yüksek olur. Benim kulladığım modül MT3608 powerbankin pilinin çalışma voltaji
olan 3.6 volt ile beslenebiliyor. 0 28 Volt arası 2 amper çıkış alınabiliyor.
Verimi de yüzde 93 civarı. Projemize çok uygun yapıyor bu özellikler de onu. Hem
de kısa devre koruması da var. Bu da güvenlik açısından da uygun hale getiriyor.

Yapımına geçersek;

Bir power bankin icin açıyoruz ve pilin uçlarına mt3608in input pinlerini
lehimliyoruz. Kabloları çıkarmak için bir delik açabiliriz. Mt3608 modulü
kutunun dışında kalıyor onun çıkışına da 2 adet jumper lehimliyoruz. Bu sayede
kolayca breadboard üzerinde falan kullanabiliriz. Modülün üzerindeki
potansiyometreden çıkış voltajını ayarlıyoruz. Ve sonuç olarak kolayca cebimizde
taşıyabileceğimiz bir güç kaynağımız olmuş oldu. Hem de telefonumuzu şarj etmeye
de devam edebiliriz.

![](IMG_20160309_125524.jpg)

![](IMG_20160309_125551.jpg)

![](IMG_20160309_125741.jpg)

![](IMG_20160309_131250.jpg)

![](IMG_20160309_131936.jpg)

![](IMG_20160309_132051.jpg)
