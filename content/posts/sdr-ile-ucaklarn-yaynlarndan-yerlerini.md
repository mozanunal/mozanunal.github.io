---
title: '[TR] SDR ile Uçakların Yayınlarından Yerlerini Tespit Etmek'
tags:
  - Adsb
  - Hava Araçları
  - Sdr ile uçak takibi
  - Software Defined Radio
categories:
  - Signal Processing
  - DSP
author: Mehmet Ozan Ünal
date: 2015-01-09 23:35:00
---

**Merhabalar!**

Bugünkü yazımda SDR ile uçaklardan veri alıp onları haritada takip etmeyi anlatacağım. Bunun için gerekli olan yazılımlar ADSBsharp ve ADSBScope yazılımlarıdır. Ben donanım olarak 10 $ Çin'den aldığım SDR'yi kullandım. Anten olarak ise 5 TL'lik TV anteni kullandık. Bu anten tabi ki bu iş için uygun anten değil. Çalışacağımız frekans 1090 Mhz benim antenimle sadece yakın çevredeki uçaklardan veri almak mümkün. En kısa zamanda antenlerle ilgili bir yazı yayınlayacağım o zamana kadar [şurayı inceleyebilirsiniz](https://www.rtl-sdr.com/adsb-aircraft-radar-with-rtl-sdr/). Yapacağımız iş temel olarak söyle: Uçaklar uçarken koordinantları, rotaları vb şeklinde ADSB diye kısaltılan bir bilgilendirme dataları yollayarak uçarlar. Bizim SDR ile yaptığımız şey 1090 Mhz sinyalleri alıp onları decode etmek. Decode işlemi için ADSBSharp (RTL 1090 alternatifidir.) yazılımını kullanabilirsiniz. Daha sonra decode edilen data port üzerinden başka bir programa aktarılır. Bu program ile elde edilen veriler bir arayüze aktarılır ve uçak harita üzerinde gösterilir. Haritada gösterme işi için ADSBScope yazılıımını kullandım. Aşağıda yazılımların nasıl kullanıldığını anlatığım videoyu paylaşıyorum 2 adet fotoğrafla beraber. Görüşmek üzere...  

![](https://4.bp.blogspot.com/-SBM-XSakGQE/VLAnPSDAnPI/AAAAAAAAGe0/JKv8mQje2nM/s720/IMG_20150109_132230.jpg)


{{< youtube id="cFplwsrKnus" >}}