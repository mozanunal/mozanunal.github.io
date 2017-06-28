title: |
  PIC İçin In Circuit Serial Programming(ICSP)
tags:
  - Mikroişlemciler
  - ICSP
  - In Circuit Serial Programing
  - Pic programlama
categories:
  - Mikroişlemciler
author: Mehmet Ozan Ünal
date: 2015-01-31 20:34:00
---
**Herkese Merhabalar,**

Bugünkü yazımda ICSP olarak kısaltıllan "In Circuit Serial Programing"ten bahsedeceğim. Türkçeye devre içerisinde programlama olarak çevrilebilir. Oldukça avantajlı bir programlama şeklidir. Özellikle Pic programlarken sıkça kullanılır. Devresi hazır hale getirilmiş lehimlenmiş Picleri bu yöntem ile devreden sökmeden programlayabiliriz.PIC KIT 2, ICSP
<a name="more"></a>programlama için en  çok kullanılan modullerden biridir. Ben de onu kullandım, kullandığım Pic ise PIC16f877a'dır. Bağlantılar ise okla işaretletli yönden diğer tarafa doğru şu şekildedir;  

1.  MCRL(VPP)
2.  VDD
3.  GND
4.  ICSPDAT/PGD
5.  ICSPCLK/PGK
6.  Auxiliary

Programınızı pic için geliştirilmiş bir dilde yazmanız gerekiyor. Seçeneklerinizden bazıları, Pic C, Pic Basic Pro, Assembly, Mikro C. Bu yazdığımız programı derleyip .hex formatına çeviriyoruz. Başka bir program kullanarak da derlediğimiz .hex formatındaki dosyaları Pic'e aktarıyoruz.

**Önemli not:** Hazır oluşturulmuş bir devredeki Pic programlayacaksanız devrenin çektiği akıma dikkat etmeniz gerekli. Çünkü PIC KIT 2(ve ya benzeri programlayıcılar) verebileceği maximum akım çok yüksek değildir. Ortak Gnd'li harici beslemeler sorunumuzu çözecektir.  

[![](https://4.bp.blogspot.com/-FmqLU_RH8kY/VM0OHwE9FcI/AAAAAAAAHFA/OqDQcrAnHN4/s1600/IMG_20150131_143722.jpg)](http://4.bp.blogspot.com/-FmqLU_RH8kY/VM0OHwE9FcI/AAAAAAAAHFA/OqDQcrAnHN4/s1600/IMG_20150131_143722.jpg)

[![](https://4.bp.blogspot.com/-Lr_LSh2gtJE/VM0OH-cx7RI/AAAAAAAAHFA/oSeESXYR2oQ/s1600/IMG_20150131_143751.jpg)](http://4.bp.blogspot.com/-Lr_LSh2gtJE/VM0OH-cx7RI/AAAAAAAAHFA/oSeESXYR2oQ/s1600/IMG_20150131_143751.jpg)