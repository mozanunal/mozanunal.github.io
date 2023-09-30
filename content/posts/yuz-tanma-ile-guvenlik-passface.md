---
title: '[TR] Yüz Tanıma ile Güvenlik (Passface)'
tags:
  - 'C#'
  - Image Processing
  - face recognize
  - Passface
  - yüz tanıma
  - Yüz tanıma ile güvenlik
categories:
  - Signal Processing
  - Image Processing
author: Mehmet Ozan Ünal
date: 2014-10-14 17:39:00
---
**Herkese Merhabalar!**  
Bugünkü yazımda kendi ürettiğim bir güvenlik yazılımından bahsetmek istiyorum. Projenin amacı bir yüzü kilit olarak tanımlamak daha sonra güvenlik gerektiren yerlere sadece bu yüz algılandığında izin vermektir. Üretilen programın ismi Passface'dir(pass-word) kelimesinden esinlenilerek yapılmıştır( kelimeyle değil yüzle şifrele!). Proje yine bir görüntü işleme projesidir, şifreleyecek yüzün tespitini otomatik yapar ve daha sonra tanımlanan yüzü aramaya başlar. İlk baştaki yüz tespitini yapmak için Haar Cascade algortması kullanılmıştır. Daha sonraki eşleştirme için ise "SURF Feature Detector" algoritması kullanılmıştır. Projenin tanıtım videosu aşağıdadır. Tekrar görüşmek üzere...  

{{< youtube id="f_9acjrbuge" >}}
