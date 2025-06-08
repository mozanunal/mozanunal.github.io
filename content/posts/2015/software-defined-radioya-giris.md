---
title: '[TR] Software Defined Radioya Giriş'
tags:
  - Software Defined Radio
  - 'SDR#'
  - SDR FM
  - SDR Nedir
categories:
  - Signal Processing
  - DSP
author: Mehmet Ozan Ünal
date: 2015-01-02 22:55:00
---

**Herkese Merhabalar!**

Bugünkü yazımda yeni bir hobimden bahsetmet istiyorum. Yeni hobim, "Software
defined radio". Bu aslında bir rf modulü, Farkı ise belli frekans aralığında
dinleme yapabilmesi. Yani bu sayede farklı frekanslardaki radyo dalgalarını alıp
inceleyebilir, çözümleyebilirsiniz. SDR hakkında deneysel bir şeyler yapmak
isterseniz en iyi yöntem bilgisayar için ucuz tv alıcılarından almak. Ben
Aliexpress sitesinden 10 $ aldım. En ucuz SDR'ler genelde **RTL2832U+R820T çip
setlidir.** Benim aldığım modül 25MHz - 1700MHz arası tarama yapabiliyor. Kendi
anteni ve kumandasıyla beraber geldi. Genelde bu modullerle gelen antenlerle
FMden başka bi şey dinleyebilmek pek mümkün olmuyor. Fakat geliştirilen uygun
antenlerle Uluslararası Uzay İstasyonundan(ISS) bile veri alabilmek mümkün.
Bunlardan kurulumdan sonra bahsedeceğim.

![](https://1.bp.blogspot.com/-Zs-kbF0uC2U/VKX6zgnujoI/AAAAAAAAGWg/DqFsmZCoRq4/s720/image.jpg)

![](https://2.bp.blogspot.com/-0hbwFHwKuKg/VKX6y4BUu6I/AAAAAAAAGWY/N18flG1Ijb0/s720/IMG_20150102_033917.jpg)

Evet gelelim kullanma kısmına. Genelde yazılım olarak SDR# Programı
kullanılıyor. Programın kullanımı oldukça kolay ve bir çok eklentisi bulunuyor.
Bu yüzden ben de SDR# seçtim. Programı
[buradan indirebilirsiniz.](https://sdrsharp.com/#download) Programın kurulumu
oldukça basit o yüzden bu kısmı geçiyorum. Kurduktan sonra Driver değişimi
yapmamız gerekiyor. Bunun için ise Zadig isimli programı kuallnabilirsiniz.
Options'tan "Show All Devices" seçilir. Daha sonra "Bulk-In,Interface(Interface
0)" seçilir. Sağ taraftaki driver olarak "WinUSB" seçilir "Reinstall Driver"
tıklanır ve uzun bir yükleme sürecinin ardından SDR# programı kullanıma
hazırdır.
![](https://2.bp.blogspot.com/-F_xCxZ75r9s/VKX3u12Ir9I/AAAAAAAAGV8/YAZKHWAr-v8/s720/9.PNG)
İlk uygulama olarak FM dinleme uygulaması yaptım çünkü ekstra anten
gerektirmiyor. Modulü denemek için ideal bir uygulama. Ayar butonuna tıklayıp
ayarları aşağıdaki gibi yapıyoruz.
![](https://1.bp.blogspot.com/-XOHN-zCrE3Q/VKX3siViEEI/AAAAAAAAGVg/OuhlpJHD7Zg/s720/1.PNG)

Radio sekmesinin altına WFM seçilir. Alttaki ayarları bu uygulama için
değiştirmeye gerek yok.

![](https://2.bp.blogspot.com/-eYoALLjPkzM/VKX3s1H_djI/AAAAAAAAGVk/GRqjeP63n9w/s720/2.PNG)

Gerekli ayarlar yapıldığında  SDR# görüntüsü bu şekilde olacak. Sinyalin yüksek
olduğu yerleri kırmızı renkten farkedebilirsiniz. Farklı kanallar ayrı ayrı
gözükecektir.

![](https://3.bp.blogspot.com/-twmiINwRyXE/VKX3wAY-ChI/AAAAAAAAGWI/AqZzk8tUxsk/s720/3.PNG)

Gelelim Sdr ile yapabileceklerinize: FM radio dinlenebilir, karasal TV yayınına
bağlanabilir, ISS den veri almak, NOAA Hava durumu uydularından veri ve resim
almak(Wxtoimg), amatör radyo bandında iletişim kurmak, uçakların koordinant
verilerini almak, GPS uydularına bağlanmak gibi uygun frekans aralığında
iletişim kurulabilir. Tabi ki uygun anten gereklidir. Bunlardan sonraki
yazılarımda bahsedeceğim. Tekrar görüşmek üzere..
