title: '[TR] Gerçek Zamanlı Obje Takibi(EmguCv ile)'
tags:
  - 'C#'
  - Image Processing
  - EmguCV
  - Obje Takibi
  - Object Tracking
categories:
  - Signal Processing
  - Image Processing
date: 2014-09-29 15:54:00
---
**Herkese Merhabalar!**

Bu yazımda sizlere EmguCv kütüphanesi ile yazdığım görüntü işleme uygulaması hakkında bilgi vermek istiyorum. Uygulamada ortamdan farklı bir renkte olan nesneyi rengine göre filtre edip onu gerçek zamanlı olarak takip etme amaçlanmıştır. Geliştirme ortamı olarak Microsoft Visual Studio, dil olarak C# programlama
<!-- more -->dili kullanılmıştır.  
Programın genel algoritmasına gelirsek, şöyle özetleyebiliriz;

1.  Görüntü kameradan RGB formatında alınıp başka bir renkli resim görüntüleme yöntemi olan HSV formatına dönüştürülmüştür.
2.  HSV filtresi için uygun değerler test edilip bulunmuştur ve renk filtesi uygunlanmıştır.
3.  Renk filtresinden kalan gürültüler erode ve dilate morfolojik operatörleriyle azaltılmıştır.
4.  Counter Analysis ile görüntü "counter"lara ayrılmıştır. Sadece "counter" alanı belli bir değerden büyük olan "counter"lar dikkat alınmıştır. Bu sayede son kalan gürültüler de engelenmiştir.

Projemin tanıtım videosuna aşağıdan ulaşabilirsiniz. Kodlar videoda gösterilmektedir. Tekrar görüşmek üzere...  

<center> {% youtube f5z8jH1rByw %} </center>