---
title: '[TR] Kamera ile Fare Kontrolü'
tags:
  - 'C#'
  - Image Processing
  - EmguCV
  - opencv
  - finger counter
  - kamera ile fare kontrolü
  - kamera mause
  - parmak sayma
categories:
  - Signal Processing
  - Image Processing
author: Mehmet Ozan Ünal
date: 2014-10-10 01:24:00
---
**Herkese Merhabalar!**

Bu yazımda Kamera ile Fare Kontrolü projemden bahsetmek istiyorum. Bu proje aslında bir görüntü işleme projesidir. Eli filtrelerle tespit edip fare gibi kullanmak amaçlanmıştır. El açılınca tıklama sağlanır, tıklama olayı çok hassas değil maalesef arka arkaya çok tıklama yapabiliyor. Biraz daha uzaktan kontrol edilirse gezinme olayı da daha hassas olabilir.

Program C# dilinde Emgucv kütüphanesiyle yazılmıştır. Algoritmasına gelecek olursak, Hsv ve Ycbcr renk uzaylarında "skin detection" algoritmaları uygulanmıştır. Bu sayede el "counter" olarak tespit edilmiştir. Merkezi kullanılarak farenin gitmesi  
gereken koordinantlar belirlenmiştir. "convexity defects" methodu kullanılarak da parmak sayısı belirlenmiştir. 5\. parmakta pek hassas olarak çalışamamasına rağmen diğer parmakları rahat bir şekilde sayılmasını sağlamaktadır.


Kamera ile fare kontrolü
{% youtube j4wf-MfYmjo %} 

Parmak Sayıcı
{{< youtube id="skS8qayIxWw" >}}

Convexity Defects Method
![](https://4.bp.blogspot.com/-a6ZMx0rHttY/VDb5CwYV-0I/AAAAAAAAEb4/6-qXnFxRwAo/s1600/Ekran%2BAl%C4%B1nt%C4%B1s%C4%B1.PNG)


