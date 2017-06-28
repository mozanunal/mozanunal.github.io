title: |
  HC-SR501 PIR Sensörü
tags:
  - Arduino Projeleri
  - HC-SR501
categories:
  - Arduino Projeleri
author: Mehmet Ozan Ünal
date: 2015-03-15 01:36:00
---
**Merhaba arkadaşlar,**  
Bugünkü yazımda bir PIR sensörü olan HC-SR501 inceleyeceğiz. PIR sensörünün açılımı Passive Infrared Sensor. Son 4- 5 yılda çok hızlı bir yayılım gösterdi bu sensörler ve insan algılayınca çalışan lambalar, otomatik el kurutma vb makinalar olarak hayatımıza girdi. Modulumüzden bahsetmeden önce PIR sensör nedir onu açıklamak istiyorum. PIR sensör ortamdaki kızılötesi ışınları ölçer.  
<a name="more"></a>
Alıcılarda çok farklı yere doğru odaklanan frensel lensi bulunur bu sayede belli bir alandaki tüm enerji ölçülmüş olur. Canlıların sıcaklığı ortalama 36 derece civarlarında olduğundan merceğin üzerine düşen kızılötesi ışınların toplam enerjisi y ir. Böylece canlı varlığı tespit edilmiş olur.  

Gelelim modülümüze. Çalışma voltajı 3.6- 20 volt arasında. Resimde gösterilen "Sensivity Adjust" tripotundan hassasiyet ayarlanıyor. Diğer trimpottan ise 0.5 -300 saniye ayarını yapabiliriz. Modül bir cisim algılayınca "Output" pininden çıkış veriyor. Test etmek için bir Arduino kodu yazdım.Koddaki yaptığım tek şey dijital veriyi okuyup ekrana seri port üzerinden bilgisayara yollatmak. Zaten sadece lamba çalıştırmak için Arduino kullanmak gereksiz olur. Bir transistör ile çıkış güçlendirilip röle sürmek daha mantıklı olacaktır.  

<div class="separator" style="clear: both; text-align: center;">[![](http://1.bp.blogspot.com/-4wSb9Iepk-I/VQSmL6O1IEI/AAAAAAAAH8s/eTZcX2He-uo/s1600/sd.PNG)](http://1.bp.blogspot.com/-4wSb9Iepk-I/VQSmL6O1IEI/AAAAAAAAH8s/eTZcX2He-uo/s1600/sd.PNG)</div>

<div class="separator" style="clear: both; text-align: left;">Benim bilgileri aldığım modulün datasheet'i de burada.</div>

http://www.mpja.com/download/31227sc.pdf  

[![](http://1.bp.blogspot.com/-ypp2WiddhQ4/VQSmP8893KI/AAAAAAAAH84/V-8_ftlvy58/s1600/IMG_20150314_214609.jpg)](http://1.bp.blogspot.com/-ypp2WiddhQ4/VQSmP8893KI/AAAAAAAAH84/V-8_ftlvy58/s1600/IMG_20150314_214609.jpg)

[![](http://3.bp.blogspot.com/-HRO1B-zMtkQ/VQSmP98vWFI/AAAAAAAAH84/gdn4NZtLZqA/s1600/IMG_20150314_214546.jpg)](http://3.bp.blogspot.com/-HRO1B-zMtkQ/VQSmP98vWFI/AAAAAAAAH84/gdn4NZtLZqA/s1600/IMG_20150314_214546.jpg)

[![](http://1.bp.blogspot.com/-RK1a2c0Culs/VQSmP0t3DtI/AAAAAAAAH84/gqlkaWfBTOA/s1600/IMG-20150314-WA0004.jpg)](http://1.bp.blogspot.com/-RK1a2c0Culs/VQSmP0t3DtI/AAAAAAAAH84/gqlkaWfBTOA/s1600/IMG-20150314-WA0004.jpg)

[![](http://3.bp.blogspot.com/-8gT-vgqA5fg/VQSmP-AsoeI/AAAAAAAAH84/ZMaN6ZmbewE/s1600/IMG_20150314_214319.jpg)](http://3.bp.blogspot.com/-8gT-vgqA5fg/VQSmP-AsoeI/AAAAAAAAH84/ZMaN6ZmbewE/s1600/IMG_20150314_214319.jpg)