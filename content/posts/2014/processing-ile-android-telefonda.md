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

![](https://4.bp.blogspot.com/-mWaFbWIHvPk/VF7g4rYgSxI/AAAAAAAAFHw/vbMO-hISTB4/s720/primitives3D.png)

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

![](https://1.bp.blogspot.com/-hlQ1Eg92vGE/VF46zsFwxLI/AAAAAAAAFFs/_dL3tLj1LVE/s720/Screenshot_2014-11-07-16-41-05.png)

APDE programını Android telefonumuza indirip kuruyoruz.

![](https://1.bp.blogspot.com/-VU6FFPqGpBo/VF46zIqyNjI/AAAAAAAAFFk/6doXxLIm0tQ/s720/Screenshot_2014-11-07-16-40-57.png)

![](https://3.bp.blogspot.com/-7crxNh-yPNA/VF46zz2blAI/AAAAAAAAFFw/slgn2rJgT_8/s720/Screenshot_2014-11-07-16-41-13.png)

Program kurulunca açıp sağ üst köşedeki butondan "new sketch" seçebilirsiniz.
Yeni bir sketch açtıktan sonra aşağıdaki fonksiyonları yazabilirsiniz. Bu
fonksiyonlar Processing dilinin temel fonksiyonları ve her sketchte var olur.
Ayarla alakalı kodlar "setup" kısmına, her zaman dönecek kodlar ise "draw"
kısmına yazılır.

![](https://4.bp.blogspot.com/-dOPBkYoMJzc/VF46wMlwDUI/AAAAAAAAFE4/dAn3olkNxNI/s720/Screenshot_2014-11-07-16-07-00.png)

İlk uygulamamızı yazmaya hazırız. İlk önce setup kısmında pencere büyüklüğümüzü
ayarladık. Draw kısmına ise sürekli dönecek kodu yazıyoruz. Bu kodda
dokunduğumuz yere bir elips çizmesini istemiş oluyoruz. 

![](https://2.bp.blogspot.com/-t7za1ockYGs/VF46xXIUK0I/AAAAAAAAFFI/MsUPAK8tyJY/s720/Screenshot_2014-11-07-16-19-46.png)

Çalıştırma tuşuna basıyoruz. 

![](https://2.bp.blogspot.com/-qzvRHOFDhSQ/VF46wNUwt1I/AAAAAAAAFFA/d2yl3aTsqcY/s720/Screenshot_2014-11-07-16-17-32.png)

Programımızı bir .apk dosyası haline getirip telefonumuza yükleyecek.

![](https://4.bp.blogspot.com/-Rx9j0rQ--eA/VF46wI17TGI/AAAAAAAAFE8/yQqubyDovU8/s720/Screenshot_2014-11-07-16-17-36.png)

İlk programımızdan görüntüler.

![](https://4.bp.blogspot.com/-dgdSohsd4v4/VF46wzPj3hI/AAAAAAAAFFE/RbmGhWeBYtw/s720/Screenshot_2014-11-07-16-18-58.png)

![](https://2.bp.blogspot.com/-6HZBB2mkh2I/VF46xM6qppI/AAAAAAAAFGI/uiYuHyirx-Y/s720/Screenshot_2014-11-07-16-19-08.png)

   Processing ile 3  boyutlu uygulama yapmak da mümkün, aşağıda bir küp çizmek
için gerekli kodu görebilirsiniz. Ayrıca camera değişkenlerini mouseX ve mouseY
değerlerine atayarak dokunmatik ekrana dokunma ile küpü görüş açısı
değiştirilir.

![](https://2.bp.blogspot.com/-HpviGF7XNC8/VF46yge-7BI/AAAAAAAAFFY/gK34sN2P8VM/s720/Screenshot_2014-11-07-16-40-02.png)

Daha karmaşık şekilleri çizmek için ise vertex ile çizim gibi yöntemler
kullanılır. Processing dili Opengl destekli olduğu için çoğu opengl fonksiyonu
kullanılabilir. Oldukça güçlü olan bu kütüphane ile sayısız ve karmaşık bir çok
görsel uygulama yapılabilir.

![](https://3.bp.blogspot.com/-iNg-YuAjRNE/VF46yeNq-CI/AAAAAAAAFFg/s_m58fB4oMY/s720/Screenshot_2014-11-07-16-34-53.png)

![](https://1.bp.blogspot.com/-ZCScWryq_0Y/VF46yCKIeGI/AAAAAAAAFFM/ZPa5QEpY5ec/s720/Screenshot_2014-11-07-16-33-36.png)
