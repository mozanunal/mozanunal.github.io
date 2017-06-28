title: |
  Yüz Tanıma ile Güvenlik (Passface)
tags:
  - 'C#'
  - Görüntü İşleme
  - face recognize
  - Passface
  - yüz tanıma
  - Yüz tanıma ile güvenlik
categories:
  - Görüntü İşleme ve Makine Öğrenmesi
author: Mehmet Ozan Ünal
date: 2014-10-14 17:39:00
---
**Herkese Merhabalar!**  
Bugünkü yazımda kendi ürettiğim bir güvenlik yazılımından bahsetmek istiyorum. Projenin amacı bir yüzü kilit olarak tanımlamak daha sonra güvenlik gerektiren yerlere sadece bu yüz algılandığında izin vermektir. Üretilen programın ismi Passface'dir(pass-word) kelimesinden esinlenilerek yapılmıştır( kelimeyle değil yüzle şifrele!). Proje yine bir görüntü işleme projesidir, şifreleyecek yüzün tespitini otomatik yapar ve daha sonra tanımlanan yüzü aramaya başlar. İlk baştaki yüz tespitini yapmak için Haar Cascade algortması kullanılmıştır.  
<a name="more"></a>Daha sonraki eşleştirme için ise "SURF Feature Detector" algoritması kullanılmıştır. Projenin tanıtım videosu aşağıdadır. Tekrar görüşmek üzere...  

<div style="text-align: center;">[Yüz Tanıma ile Güvenlik (Passface)](http://www.youtube.com/watch?v=f_9aCJRbUgE)</div>

<div class="separator" style="clear: both; text-align: center;"><object class="BLOGGER-youtube-video" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" data-thumbnail-src="https://i.ytimg.com/vi/f_9aCJRbUgE/0.jpg" height="266" width="320"><param name="movie" value="https://www.youtube.com/v/f_9aCJRbUgE?version=3&amp;f=user_uploads&amp;c=google-webdrive-0&amp;app=youtube_gdata"><param name="bgcolor" value="#FFFFFF"><param name="allowFullScreen" value="true"><embed width="320" height="266" src="https://www.youtube.com/v/f_9aCJRbUgE?version=3&amp;f=user_uploads&amp;c=google-webdrive-0&amp;app=youtube_gdata" type="application/x-shockwave-flash" allowfullscreen="true"></object></div>