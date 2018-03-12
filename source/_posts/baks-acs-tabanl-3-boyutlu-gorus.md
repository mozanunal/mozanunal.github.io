title: |
  Bakış Açısı Tabanlı 3 Boyutlu Görüş
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
date: 2014-12-09 18:13:00
---

<div class="separator" style="clear: both; text-align: left;">**Herkese Merhabalar,**</div>

<div class="separator" style="clear: both; text-align: left;">     Bu yazımda size uzun zamandır üzerinde araştırmalar yaptığım ve bir şeyler üretmek istediğim 3 boyutlu görme konusunda yaptığım programdan bahsedeceğim. Bu program sayesinde ekstra hiç bir ekipman kullanmadan 2 boyutlu bilgisayar ekranını 3 boyutlu görme uygulamasını gerçekleştirebileceğimiz bir şeye dönüştürüyoruz. Bunu nasıl yapıyor diye soracak olursanız görüntü işleme sayesinde!. Programda webcam üzerinden yüz tespiti yapılıyor ve ekrana nereden baktığı tespit ediliyor. Hesaplanan bu açı daha sonra kullandığım 3 boyut kütüphanesi olan OpenGL'in kamerasını ayarlamak için kullanılıyor. böylece ekrana bakış yönünüze göre değişen bir 3D görme uygulaması hazırlanmış oluyor.</div>

<div class="separator" style="clear: both; text-align: left;">     Programın tanıtım videosu aşağıdadır. Çizdiğim grafikler çok iyi değil malesef bu konuda çok bilgili olmadığımdan. Programın çalışma mantığını anlatmak için küpün arkasına webcamden aldığım görüntüyü koydum. Açının tam olarak nasıl değiştiğini anlatmak için. Tekrar görüşmek  üzere...</div>

<div class="separator" style="clear: both; text-align: center;">[<object class="BLOGGER-youtube-video" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" data-thumbnail-src="https://i.ytimg.com/vi/Pb9_X_5Tr4k/0.jpg" height="266" width="320"><param name="movie" value="https://www.youtube.com/v/Pb9_X_5Tr4k?version=3&amp;f=user_uploads&amp;c=google-webdrive-0&amp;app=youtube_gdata"><param name="bgcolor" value="#FFFFFF"><param name="allowFullScreen" value="true"><embed width="320" height="266" src="https://www.youtube.com/v/Pb9_X_5Tr4k?version=3&amp;f=user_uploads&amp;c=google-webdrive-0&amp;app=youtube_gdata" type="application/x-shockwave-flash" allowfullscreen="true"></object>](http://www.youtube.com/watch?v=Pb9_X_5Tr4k&feature=youtu.be)<span id="goog_1710734679"></span><span id="goog_1710734680"></span>[](https://www.blogger.com/)</div>