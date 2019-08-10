title: |
  Bakış Açısı Tabanlı 3 Boyutlu Görüş
tags:
  - 3D görüş
  - 3D view
  - Image Processing
  - Opencv 3 boyutlu görme
  - Processing
categories:
  - Signal Processing
  - Image Processing
author: Mehmet Ozan Ünal
date: 2014-12-09 18:13:00
---

**Herkese Merhabalar,**

Bu yazımda size uzun zamandır üzerinde araştırmalar yaptığım ve bir şeyler üretmek istediğim 3 boyutlu görme konusunda yaptığım programdan bahsedeceğim. Bu program sayesinde ekstra hiç bir ekipman kullanmadan 2 boyutlu bilgisayar ekranını 3 boyutlu görme uygulamasını gerçekleştirebileceğimiz bir şeye dönüştürüyoruz. Bunu nasıl yapıyor diye soracak olursanız görüntü işleme sayesinde!. Programda webcam üzerinden yüz tespiti yapılıyor ve ekrana nereden baktığı tespit ediliyor. Hesaplanan bu açı daha sonra kullandığım 3 boyut kütüphanesi olan OpenGL'in kamerasını ayarlamak için kullanılıyor. böylece ekrana bakış yönünüze göre değişen bir 3D görme uygulaması hazırlanmış oluyor.

Programın tanıtım videosu aşağıdadır. Çizdiğim grafikler çok iyi değil malesef bu konuda çok bilgili olmadığımdan. Programın çalışma mantığını anlatmak için küpün arkasına webcamden aldığım görüntüyü koydum. Açının tam olarak nasıl değiştiğini anlatmak için. Tekrar görüşmek  üzere...

{% youtube Pb9_X_5Tr4k %}