title: |
  SDR ile Uçakların Yayınlarından Yerlerini Tespit Etmek
tags:
  - Adsb
  - Hava Araçları
  - Sdr ile uçak takibi
  - Software Defined Radio
categories:
  - İşaret İşleme
author: Mehmet Ozan Ünal
date: 2015-01-09 23:35:00
---
<div class="separator" style="clear: both; text-align: left;">**Merhabalar!**</div>

<div class="separator" style="clear: both; text-align: left;">      Bugünkü yazımda SDR ile uçaklardan veri alıp onları haritada takip etmeyi anlatacağım. Bunun için gerekli olan yazılımlar ADSBsharp ve ADSBScope yazılımlarıdır. Ben donanım olarak 10 $ Çin'den aldığım SDR'yi kullandım. Anten olarak ise 5 TL'lik TV anteni kullandık. Bu anten tabi ki bu iş için uygun anten değil. Çalışacağımız frekans 1090 Mhz benim antenimle sadece yakın çevredeki uçaklardan veri almak mümkün. En kısa zamanda antenlerle ilgili bir yazı yayınlayacağım o zamana kadar [şurayı inceleyebilirsiniz](http://www.rtl-sdr.com/adsb-aircraft-radar-with-rtl-sdr/). Yapacağımız iş temel olarak söyle: Uçaklar uçarken koordinantları,</div>

<!-- more -->rotaları vb şeklinde ADSB diye kısaltılan bir bilgilendirme dataları yollayarak uçarlar. Bizim SDR ile yaptığımız şey 1090 Mhz sinyalleri alıp onları decode etmek. Decode işlemi için ADSBSharp (RTL 1090 alternatifidir.) yazılımını kullanabilirsiniz. Daha sonra decode edilen data port üzerinden başka bir programa aktarılır. Bu program ile elde edilen veriler bir arayüze aktarılır ve uçak harita üzerinde gösterilir. Haritada gösterme işi için ADSBScope yazılıımını kullandım. Aşağıda yazılımların nasıl kullanıldığını anlatığım videoyu paylaşıyorum 2 adet fotoğrafla beraber. Görüşmek üzere...  
[![](http://4.bp.blogspot.com/-SBM-XSakGQE/VLAnPSDAnPI/AAAAAAAAGe0/JKv8mQje2nM/s1600/IMG_20150109_132230.jpg)](http://4.bp.blogspot.com/-SBM-XSakGQE/VLAnPSDAnPI/AAAAAAAAGe0/JKv8mQje2nM/s1600/IMG_20150109_132230.jpg)
[![](http://3.bp.blogspot.com/-2Vmt6m8HMmM/VLAnN_-hWDI/AAAAAAAAGes/KOlYMCRzRS8/s1600/IMG_20150109_132253.jpg)](http://3.bp.blogspot.com/-2Vmt6m8HMmM/VLAnN_-hWDI/AAAAAAAAGes/KOlYMCRzRS8/s1600/IMG_20150109_132253.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[<iframe allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" width="320" height="266" src="https://www.youtube.com/embed/cFplwsrKnus?feature=player_embedded" frameborder="0"></a></div></iframe>](https://www.youtube.com/watch?v=cFplwsrKnus)</div>