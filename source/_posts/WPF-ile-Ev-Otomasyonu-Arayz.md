title: |
  WPF ile Ev Otomasyonu Arayüzü
tags:
  - 'C#'
  - Arduino
  - ESP8266
  - Meteoroloji İstasyonu
categories:
  - IOT Projeleri
author: Mehmet Ozan Ünal
date: 2016-06-09 04:45:00
---
**Herkese Merhabalar,**  
Bu yazımda .NET platformunun bir teknolojisi olan WPF kullanarak ev otomasyonu kontrol paneli yapmayı anlatacağım. Yaptığım bu projenin başlıca işlevi şudur; 5 farklı sensörden bulunulan ortamın sıcaklığı, nemi, zehirli gaz durumu, ortamda canlı olup olmadığı, ortamda yağış olup olmadığı Arduino yardımıyla alınır ve bu sensor dataları C# arayüzünde gösterilir. Eğer onay kutusu işaretlenirse istenmeyen bir durumda (gaz sızıntısı, eve hırsız girmesi, yağmur için kurulabilir.) program uyarı olarak girilen adrese bir adet mail gönderir.  
[](https://drive.google.com/file/d/0B5j__Lyt9ozbVTRIOVFVcVVWX3c/view?usp=sharing)  
<!-- more -->[  
](https://drive.google.com/file/d/0B5j__Lyt9ozbVTRIOVFVcVVWX3c/view?usp=sharing)[Projenin Arduino ve C# kaynak kodunu buradan indirebilirsiniz.](https://drive.google.com/file/d/0B5j__Lyt9ozbVTRIOVFVcVVWX3c/view?usp=sharing)  

<div class="separator" style="clear: both; text-align: left;">![](https://lh4.googleusercontent.com/h6zopN9hrG0cvtWZ8ey-28mNdDhZrpygcpb3Zr1bLuQA9-fV8eQoTozPqC23fJpte95Cny8ZAzwx2Lj3-rNNJ3oQwUcqN57ZjgtYj9uxJPosYuixJUOekPfV54urzY_s_3r01_rDu-4)</div>

<div class="separator" style="clear: both; text-align: left;">**Malzemeler**</div>

*   Arduino
*   DHT11 Nem ve Sıcaklık Sensörü
*   MQ135 Gaz Sensörü
*   Yağış Sensörü
*   Röle Modulü
*   PIR Sensörü
*   ESP8266 Wifi Modulü
<div class="separator" style="clear: both; text-align: left;">**Kutu**</div>
![](https://lh3.googleusercontent.com/PpiOeVShgIbRUDmpnN0Qrsyrr-4W3A3x1EzGwCO3gvibmuxxu6V9gBzDyPvW2H6VD8qBzmbdKHjnxmZTbzx-URJfFWXkY6WYUCXlfNcqkYGopwOqBA8qmwrdUPYQah6viX7FIkIrwAo)

[![](https://lh4.googleusercontent.com/pbsrsoYFGuK86B23anEGLtWCxV27I1yGcnZzKxpvH52rDN1f9rHsIxOFAQR0P_2-09sgQHscSDsn-jMFysfDcZGpNteTRWIIfk8mni8etO1UvhhlHdhFN1hxJZIq__5Ja-V5PK_kMkg)](https://lh4.googleusercontent.com/pbsrsoYFGuK86B23anEGLtWCxV27I1yGcnZzKxpvH52rDN1f9rHsIxOFAQR0P_2-09sgQHscSDsn-jMFysfDcZGpNteTRWIIfk8mni8etO1UvhhlHdhFN1hxJZIq__5Ja-V5PK_kMkg)

<div class="separator" style="clear: both; text-align: left;">**Arduino Kodu**</div>

![](https://lh4.googleusercontent.com/xSrNzUUQvtxuvZtZ-Jh102etI-Fdqe1EXa4FKyAOEQ4TXPrzchkO0_r4ki0Vg2EKRBC1sGGHMK36amIMXa8u3JwZ8itz7Bjn2Wvt6RB7dd7sCrTh1z1nCDAjEF-KY6EakzLxvC2fJlo)

<div class="separator" style="clear: both; text-align: left;">**Alternatif Arduino Kodu ESP8266 Kullanarak**</div>

![](https://lh6.googleusercontent.com/JhbIL0qIxwERIsRAtc9VSf5-HcJYsmAq795A-l3cYFJxVHfOuDMIObbhIFMw_NznFL_4ZAKJP_8klmhLgX_5mI7YtI7SU8tn1K1u0ovbsz4Grj7WhEAG8gy4CXyj9jqyH0UlBp-hwoc)

**WPF Application**

![](https://lh5.googleusercontent.com/CNuGy1C6bTUTGmk8c3ew-F2SPe9lZT0CyP1KbHlUxAIMGUZA2Qne0K0GQteZrdRtGljd4DCWXOGARLIChgI0GiHRxjNVGVpp6S0SxI9aEWxdiFHmPa-KOGPpRulzJqOoV6CG-08A-QQ)

<div class="separator" style="clear: both; text-align: left;">**Serialden Data Almayla Alakalı Fonksiyonlar**</div>

<div class="separator" style="clear: both; text-align: left;">![](https://lh5.googleusercontent.com/Jy6Wk3TC8pXVGTd_f1zrrFYg6p6KkbKJf9fUSr-htN6sWGDfrCgVrcHq3kJrJlgMqw0Lw0ItDa312-cF-USOSWx-wwhVx9txeSuk9kfcEo0CFxd5K2Q43FSQIA2i1l8X2n9jebVKPPE)</div>

<div class="separator" style="clear: both; text-align: left;">**Gelen Datayı Parçalara Ayırıp Görüntüleme Fonksiyonları**</div>

<div class="separator" style="clear: both; text-align: left;">![](https://lh5.googleusercontent.com/7Ie_uNQlZ2tD2GgkWOHqZJC_ag3ZJspPP1g82FVnHd7RXXVK2TRQb9dunTgLdOt3cJyQGb6Tc3DZhJe626krlIuAEsMi4OABCSCdHaaLx-QJ3SU4Q14u7rsv6I0qWBVUwRlTyt77K2M)</div>

<div class="separator" style="clear: both; text-align: left;">**Mail Gönderme Fonksiyonları**</div>

<div class="separator" style="clear: both; text-align: left;">![](https://lh4.googleusercontent.com/ya3aFG0C1zF7V1kxDw_Di_FJJT0f1_UF-mxYduzzfKgBgxEW5rFdqJTqSAoF8paI3_XlGeJhShgJUjQH27DPJ2kRKp1HRiNcIis5T3dHq7B5_TMpdJ8DllH3ogsyWyNUrnAqOK9n-rk)</div>

<div class="separator" style="clear: both; text-align: left;">**Mail Gönderince Arayüzün Durumu**</div>

[![](https://lh4.googleusercontent.com/-cyZehDdFgkA5GAlMYuMCpBSoJt3asIJK9fa3PBRoW6022qtOtVqGj4U9YGP5A8IlEXPXTmbbj_2eopPWKRY_TvSLyutdoK5TNepbB5T00HzWxUnNfyHnfo3MkVPCn27tcauKNi2qrA)](https://lh4.googleusercontent.com/-cyZehDdFgkA5GAlMYuMCpBSoJt3asIJK9fa3PBRoW6022qtOtVqGj4U9YGP5A8IlEXPXTmbbj_2eopPWKRY_TvSLyutdoK5TNepbB5T00HzWxUnNfyHnfo3MkVPCn27tcauKNi2qrA)