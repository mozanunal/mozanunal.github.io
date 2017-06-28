title: |
  Robot Kol
tags:
  - Arduino Projeleri
  - Arduino
  - arduino servo kontrol
  - Arduino Robotik Kol
  - Arduino Robotik Kontrol
  - DIY Robotic Hand
categories:
  - Arduino Projeleri
author: Mehmet Ozan Ünal
date: 2015-01-16 15:07:00
---

**Merhabalar,**  
      Bugünkü yazımda yaptığım robot koldan bahsedeceğim. Robot kolum Arduino kontrollü. Mekanik aksamında 4 adet servo kullandım. Alt kısmını 2 eksenli mini kamera gimbalinden yaptım. Kalan kısmı ise plastik bir kapı keserek yaptım. Servoları plastik parçalara vidaladım. Kullandığım servolar 9 gramlık mikro servolar. Verebilecekleri tork 1.8 kg.cm . Ben robot kola kesme şeker ve kalemtıraş gibi küçük nesneler taşıttım. Onlar için yeterli oldu. Kolun kontrolü için 2 tane 2 eksenli joystick kullandım. Arduinonun 4 analog pininden joystickleri bağladım. 4 servonun kontrolü için de 4 dijital pini kullandım. Tutma mekanizması olarak ise ataçtan bir kıskaç yaptım. Servolara güç uygulatıp sıkıştırınca esnekliği sayesinde oldukça iyi sonuç verdi. Aşağıda resimleri ve tanıtım videosu bulunmaktadır. Tekrar görüşmek üzere.  

<div class="separator" style="clear: both; text-align: center;">[<iframe allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" width="320" height="266" src="https://www.youtube.com/embed/OwPbECn37NQ?feature=player_embedded" frameborder="0"></a></div><br /><br /><br /><div class="separator" style="clear: both; text-align: center;"><a href="http://1.bp.blogspot.com/-WYcg-KdsbXU/VLj9NWN1AzI/AAAAAAAAGuc/UXAdxNfqWhA/s1600/IMG_20150115_212523.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://1.bp.blogspot.com/-WYcg-KdsbXU/VLj9NWN1AzI/AAAAAAAAGuc/UXAdxNfqWhA/s1600/IMG_20150115_212523.jpg" height="240" width="320" /></a></div><br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /><a name='more'></a><br /><div class="separator" style="clear: both; text-align: center;"><a href="http://1.bp.blogspot.com/-tdMt39Y3LUU/VLj80_wj_PI/AAAAAAAAGtk/2HoWmnjX514/s1600/IMG_20150115_210610.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://1.bp.blogspot.com/-tdMt39Y3LUU/VLj80_wj_PI/AAAAAAAAGtk/2HoWmnjX514/s1600/IMG_20150115_210610.jpg" height="320" width="240" /></a></div><br /><div class="separator" style="clear: both; text-align: center;"><a href="http://3.bp.blogspot.com/-9x2Fbq3gWqs/VLj81VMauzI/AAAAAAAAGto/lp_aGMBtQtU/s1600/IMG_20150115_210620.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://3.bp.blogspot.com/-9x2Fbq3gWqs/VLj81VMauzI/AAAAAAAAGto/lp_aGMBtQtU/s1600/IMG_20150115_210620.jpg" height="320" width="240" /></a></div><br /><div class="separator" style="clear: both; text-align: center;"><a href="http://4.bp.blogspot.com/-PxW1bFX5pFU/VLj81heA3KI/AAAAAAAAGt0/htv3W6Wvf54/s1600/IMG_20150115_210717.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://4.bp.blogspot.com/-PxW1bFX5pFU/VLj81heA3KI/AAAAAAAAGt0/htv3W6Wvf54/s1600/IMG_20150115_210717.jpg" height="320" width="240" /></a></div><br /><div class="separator" style="clear: both; text-align: center;"><a href="http://2.bp.blogspot.com/-JLOczQ5BzVU/VLj9B0cViSI/AAAAAAAAGt8/m7YCB8hxfUg/s1600/IMG_20150115_210751.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://2.bp.blogspot.com/-JLOczQ5BzVU/VLj9B0cViSI/AAAAAAAAGt8/m7YCB8hxfUg/s1600/IMG_20150115_210751.jpg" height="320" width="240" /></a></div><br /><div class="separator" style="clear: both; text-align: center;"><a href="http://3.bp.blogspot.com/-8Ja8EOaMuD8/VLj9CKMfpNI/AAAAAAAAGuA/UwnKwmirY0k/s1600/IMG_20150115_210848.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://3.bp.blogspot.com/-8Ja8EOaMuD8/VLj9CKMfpNI/AAAAAAAAGuA/UwnKwmirY0k/s1600/IMG_20150115_210848.jpg" height="320" width="240" /></a></div><br /><div class="separator" style="clear: both; text-align: center;"><a href="http://4.bp.blogspot.com/-SQ3VMxIgmrw/VLj9DesxPNI/AAAAAAAAGuM/6F9rdhLq5RA/s1600/IMG_20150115_212445.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://4.bp.blogspot.com/-SQ3VMxIgmrw/VLj9DesxPNI/AAAAAAAAGuM/6F9rdhLq5RA/s1600/IMG_20150115_212445.jpg" height="240" width="320" /></a></div><br /><div class="separator" style="clear: both; text-align: center;"><a href="http://4.bp.blogspot.com/-4KueUkTjHLs/VLj9LqZ8jaI/AAAAAAAAGuU/lLBYnnLPDes/s1600/IMG_20150115_212457.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="http://4.bp.blogspot.com/-4KueUkTjHLs/VLj9LqZ8jaI/AAAAAAAAGuU/lLBYnnLPDes/s1600/IMG_20150115_212457.jpg" height="240" width="320" /></a></div></iframe>](https://www.youtube.com/watch?v=OwPbECn37NQ)</div>