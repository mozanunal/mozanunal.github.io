---
title: '[TR] Processing ile Android Telefonda Uygulama Geliştirme'
tags:
  - Android Programlama ve Oyun
  - Processing
  - Android Processing IDE
  - Processing Android
categories:
  -  Coding
author: Mehmet Ozan Ünal
date: 2014-11-09 06:27:00
---

**Herkese Merhabalar!**

![](primitives3D.png)

Processing dili son yıllarda Arduino ile popülerleşmeye başlayan görsel
programlama dilidir. Hızlı prototipleme için geliştirilmiştir Arduinoya görsel
arayüz hazırlama için sıklıkla kullanılmaktadır. Processing Windows, Linux,
Android, Mac her platformda çalışmaktadır. Kendi program geliştirme arayüzü
bulunmaktadır. Bu programlama diliyle kolay bir şekilde 2D, 3D görsel
uygulamalar yapılabilir.

Ben bugünkü yazımda nasıl Android telefonda Android için nasıl Processing
diliyle görsel uygulama yapılacağını anlatacağım. Öncelikle Google Playden
uygulama geliştirmek için gerekli IDE'yi(geliştirme ortamını) indiriyoruz. Bir
çok çeşit geliştirme ortamı var fakat ben APDE uygulamasını tercih ettim. Bu
uygulama ile processing kodu yazıp onu derleyip telefon üzerinde
deneyebiliyoruz.

![](Screenshot_2014-11-07-16-41-05.png)

APDE programını Android telefonumuza indirip kuruyoruz.

![](Screenshot_2014-11-07-16-40-57.png)

![](Screenshot_2014-11-07-16-41-13.png)

Program kurulunca açıp sağ üst köşedeki butondan "new sketch" seçebilirsiniz.
Yeni bir sketch açtıktan sonra aşağıdaki fonksiyonları yazabilirsiniz. Bu
fonksiyonlar Processing dilinin temel fonksiyonları ve her sketchte var olur.
Ayarla alakalı kodlar "setup" kısmına, her zaman dönecek kodlar ise "draw"
kısmına yazılır.

![](Screenshot_2014-11-07-16-07-00.png)

İlk uygulamamızı yazmaya hazırız. İlk önce setup kısmında pencere büyüklüğümüzü
ayarladık. Draw kısmına ise sürekli dönecek kodu yazıyoruz. Bu kodda
dokunduğumuz yere bir elips çizmesini istemiş oluyoruz. 

![](Screenshot_2014-11-07-16-19-46.png)

Çalıştırma tuşuna basıyoruz. 

![](Screenshot_2014-11-07-16-17-32.png)

Programımızı bir .apk dosyası haline getirip telefonumuza yükleyecek.

![](Screenshot_2014-11-07-16-17-36.png)

İlk programımızdan görüntüler.

![](Screenshot_2014-11-07-16-18-58.png)

![](Screenshot_2014-11-07-16-19-08.png)

   Processing ile 3  boyutlu uygulama yapmak da mümkün, aşağıda bir küp çizmek
için gerekli kodu görebilirsiniz. Ayrıca camera değişkenlerini mouseX ve mouseY
değerlerine atayarak dokunmatik ekrana dokunma ile küpü görüş açısı
değiştirilir.

![](Screenshot_2014-11-07-16-40-02.png)

Daha karmaşık şekilleri çizmek için ise vertex ile çizim gibi yöntemler
kullanılır. Processing dili Opengl destekli olduğu için çoğu opengl fonksiyonu
kullanılabilir. Oldukça güçlü olan bu kütüphane ile sayısız ve karmaşık bir çok
görsel uygulama yapılabilir.

![](Screenshot_2014-11-07-16-34-53.png)

![](Screenshot_2014-11-07-16-33-36.png)
