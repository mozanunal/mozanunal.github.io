title: |
  Alkış ile Lamba Kontrolü
tags:
  - Elektronik Devreler
  - Elektronik Devreler ve Teorik Yazılar
  - alkış ile lamba kontolü
  - aydınlatma projeleri
categories:
  - Elektronik
  - Analog
author: Mehmet Ozan Ünal
date: 2014-10-07 01:28:00
---
**Herkese Merhabalar!**  
         Bu yazımda size, daha önceden yapıp (lise yıllarımda), bloğa koymak icin tekrar tamir ettiğim bir projemden bahsetmek istiyorum. Projenin ismi "Alkış ile lamba kontrolü" amacı ise alkış gibi yüksek bir sesle bir röle kontrol etmek. Bu projede, röleye toplam 12 led bağlayıp aydınlatma sağlanmıştır. Devrenin teknik detaylarına gelirsek  
<!-- more -->temel mantığı şöyle;  
- mikrofondan ses sinyali alınır.  
- alınan ses opamp devrelerle yükseltilir.  
- yükseltilen sinyaller 4011 entegresinde işlenerek yüksek ses geldiğinde çıkış sağlanır.  
- sağlanan çıkışa bağlı olan transistör kontrol edilir. Yüksek ses gelirse transistör aktifleşir ve rölenin çalışmasını sağlar.  

Projenin tanıtım videosu ve devresinin çizimi aşağıdadır. Tekrar görüşmek üzere...  

<div class="separator" style="clear: both; text-align: center;">[<object class="BLOGGER-youtube-video" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" data-thumbnail-src="https://i.ytimg.com/vi/w-EO97_3_Ec/0.jpg" height="266" width="320"><param name="movie" value="https://www.youtube.com/v/w-EO97_3_Ec?version=3&amp;f=user_uploads&amp;c=google-webdrive-0&amp;app=youtube_gdata"><param name="bgcolor" value="#FFFFFF"><param name="allowFullScreen" value="true"><embed width="320" height="266" src="https://www.youtube.com/v/w-EO97_3_Ec?version=3&amp;f=user_uploads&amp;c=google-webdrive-0&amp;app=youtube_gdata" type="application/x-shockwave-flash" allowfullscreen="true"></object>](http://www.youtube.com/watch?v=w-EO97_3_Ec)</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://1.bp.blogspot.com/-BBaMnNWpwWk/VDLekKoQj1I/AAAAAAAAEX0/FdT7mk9ur0A/s1600/IMG_20141005_174701.jpg)](http://1.bp.blogspot.com/-BBaMnNWpwWk/VDLekKoQj1I/AAAAAAAAEX0/FdT7mk9ur0A/s1600/IMG_20141005_174701.jpg)</div>

<div class="separator" style="clear: both; text-align: left;">**Malzeme Listesi**</div>

<div class="separator" style="clear: both; text-align: left;">Mikrofon</div>

<div class="separator" style="clear: both; text-align: left;">2,2 k direnç</div>

<div class="separator" style="clear: both; text-align: left;">10 k trimpot</div>

<div class="separator" style="clear: both; text-align: left;">2,2 k direnç</div>

<div class="separator" style="clear: both; text-align: left;">4011 entegresi</div>

<div class="separator" style="clear: both; text-align: left;">1 m direnç</div>

<div class="separator" style="clear: both; text-align: left;">220 nf kapasitör</div>

<div class="separator" style="clear: both; text-align: left;">2,7 k direnç</div>

<div class="separator" style="clear: both; text-align: left;">1 m direnç</div>

<div class="separator" style="clear: both; text-align: left;">220 nf kapasitör</div>

<div class="separator" style="clear: both; text-align: left;">BC237 transistör</div>

<div class="separator" style="clear: both; text-align: left;">BC237 transistör</div>

<div class="separator" style="clear: both; text-align: left;">4.7 V zener diyot</div>

<div class="separator" style="clear: both; text-align: left;">100 u kapasitör</div>

<div class="separator" style="clear: both; text-align: left;">1,5 k direnç</div>

<div class="separator" style="clear: both; text-align: left;">2,2 k direnç</div>

<div class="separator" style="clear: both; text-align: left;">1N4148 diyot</div>

<div class="separator" style="clear: both; text-align: left;">12 V röle</div>