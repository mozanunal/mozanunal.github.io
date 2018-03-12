title: |
  Bakış Açısı Tabanlı 3 Boyutlu Görüş Versiyon 2.00
tags:
  - 3D görüş
  - 3D view
  - Görüntü İşleme
  - Opencv 3 boyutlu görme
  - Processing
categories:
  - İşaret İşleme
  - Görüntü İşleme
author: Mehmet Ozan Ünal
date: 2015-03-31 06:55:00
---
<div class="separator" style="clear: both;">**Herkese Merhabalar,**</div>

<div class="separator" style="clear: both;">     Bu yazımda daha önce yaptığım bir uygulamanın 2\. versiyonundan bahsedeceğim. Programımı daha önce şöyle anlatmıştım: </div>

Bu program sayesinde ekstra hiç bir ekipman kullanmadan 2 boyutlu bilgisayar ekranını 3 boyutlu görme uygulamasını gerçekleştirebileceğimiz bir şeye dönüştürüyoruz. Bunu nasıl yapıyor diye soracak olursanız görüntü işleme sayesinde!.

Programda webcam üzerinden yüz tespiti yapılıyor ve ekrana nereden baktığı tespit ediliyor. Hesaplanan bu açı daha sonra kullandığım 3 boyut kütüphanesi olan OpenGL'in kamerasını ayarlamak için kullanılıyor. böylece ekrana bakış yönünüze göre değişen bir 3D görme uygulaması hazırlanmış oluyor. 

<div class="" style="clear: both;">    Bu versiyonla gelen yeniliklere gelecek olursak en büyük değişiklik artık bilgisayardan uzaklığımıza göre cisim yakınlaşıp uzaklaşıyor. Biraz da grafiklerde değişiklik yapmak istedim yaptığım performans iyileştirmesi sayesinde programın çözünürlüğü artık 720p. Eklediğim diğer şeyse Low Pass Filter. Peki nedir diyecek olursanız; sisteme eski giren verilerle şu anki verilerin ortalamasını alır(ne kadar geriden alınacağı, ne kadar ağırlıklı bir ortalama olacağı değişebilir) bu sayede daha "smooth" sonuçlar elde edilebilir.</div>

<div class="separator" style="clear: both; text-align: center;"><iframe allowfullscreen="" class="YOUTUBE-iframe-video" data-thumbnail-src="https://i.ytimg.com/vi/lJ7ofH4Y2Tk/0.jpg" frameborder="0" height="266" src="http://www.youtube.com/embed/lJ7ofH4Y2Tk?feature=player_embedded" width="320"></iframe></div>