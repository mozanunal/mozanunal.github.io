---
title: '[TR] DIY Raspberry Pi Laptop'
tags:
  - Electronics
  - Arduino
  - Raspberry Pi 2 Projeleri
  - Raspberry Pi Laptop
categories:
  - Electronics
  - Arduino
date: 2015-09-17 01:20:00
---

**Herkese Merhabalar,**\
       Bu yazımda Raspberry Pi 2 kartını kullanarak kendim için yaptığım laptop
projesinden bahsetmek istiyorum. Kendime düşük maliyetli gündelik işlerimi
halletmek için taşınabilir bir bilgisayar almaya karar vermiştim fakat neden
kendim yapmak yerine satın alayım dedim ve bu projeye başladım. Malzemelerin
çoğunu yurt dışından aldım ve bana toplam maliyeti 110$ kadar oldu.\
Projemin tanıtım videosunu izleyebilirsiniz. Yazının devamında ise Raspberry Pi
laptopun yapılışını adım adım öğrenebilirsiniz.

<div class="separator" style="clear: both; text-align: center;"><iframe allowfullscreen="" class="YOUTUBE-iframe-video" data-thumbnail-src="https://i.ytimg.com/vi/Ys97-3S9MQo/0.jpg" frameborder="0" height="266" src="https://www.youtube.com/embed/Ys97-3S9MQo?feature=player_embedded" width="320"></iframe></div>

<div class="separator" style="clear: both; text-align: center;">[![](https://1.bp.blogspot.com/-32Tefe5cxxQ/VfQJVHRLDKI/AAAAAAAANq0/a35hSfl8s2s/s320/IMG_20150912_123948.jpg)](https://1.bp.blogspot.com/-32Tefe5cxxQ/VfQJVHRLDKI/AAAAAAAANq0/a35hSfl8s2s/s1600/IMG_20150912_123948.jpg)</div>

**1\. Raspberry Pi Nedir?**\
      Öncelikle Raspberry Pi'dan bahsetmek istiyorum. Raspberry Pi tüm
bilgisayar bileşenlerinin bir kartta toplandığı, düşük maliyetli mini
bilgisayardır. Şu an itibariyle, en son Raspberry Pi 2 çıkmıştır ve satış fiyatı
35 dolardır.\
**2\. Neden Raspberry Pi Laptop?**\
      Raspberry pi yazılım geliştirmek için çok önemli bir portal fakat her
zaman uygun ekran klavye bulmak zor ve Raspberry Pi'ın taşınabilirliğini
azaltıyor. Ayrıca üzerinde 4 usb portu, Hdmi portu gibi giriş çıkış birimleri
bulunması sayesinde laptop yapılmaya oldukça uygun durumda. 3\. olarak düşük güç
tüketiminden söz edebiliriz. Benim sistemimin toplam güç tüketimi 7,8 watt
civarında. 3S lipo pilimden ekranla beraber yaklaşık 650 mA akım çekiyor.\
**3\. Malzemeler ve Maliyet**\
Raspberry Pi 2                     35$\
4 Gb SD Kart                       4$\
N070ICG-LD1 LCD Ekran   45$\
HDMI Kablo                        3$\
Klavyeli Tablet Kılıfı            4$\
USB WIFI Adaptörü            5$\
LM2596 Regülatör               2$\
1500 Mah 3S Lipo Pil           10$\
Fare                                     2$\
1 Metre Kablo Koruyucu       2$\
**Toplam:                             110$**

<div class="separator" style="clear: both; text-align: center;">[![](https://3.bp.blogspot.com/-R-gtqqx3Djg/VfQJihkQa7I/AAAAAAAANq8/mHuuXTTYp6E/s320/IMG_20150903_182823.jpg)](https://3.bp.blogspot.com/-R-gtqqx3Djg/VfQJihkQa7I/AAAAAAAANq8/mHuuXTTYp6E/s1600/IMG_20150903_182823.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">**Malzemelerin çoğuna yukarıdan bir bakış sadece pili değiştirdim bu fotoğraftan sonra. Aşağıda da malzemelerin bir kısmınının fotoğrafları vardır. **</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://4.bp.blogspot.com/-eOD2oDFN4k0/VfQJio0SdVI/AAAAAAAANq8/dVaLjcnmCL8/s320/IMG_20150903_182908.jpg)](https://4.bp.blogspot.com/-eOD2oDFN4k0/VfQJio0SdVI/AAAAAAAANq8/dVaLjcnmCL8/s1600/IMG_20150903_182908.jpg)</div>

<div class="separator" style="clear: both; text-align: center;"><span style="text-align: start;">**N070ICG-LD1 LCD Ekran**</span></div>

<div class="separator" style="clear: both; text-align: center;">Ekranın fiyatı 45$ aynı boyutta 20$ da ekran bulabilirsiniz fakat ben yüksek çözünürlüklü bir ekranı tercih ettim. Nedeni ise laptopumu dizi izlemek için de kullanmayı planlamam. Beklediğimden çok çok daha iyi bir ekran çıktı açıkcası :)</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://4.bp.blogspot.com/-Dj_kyMUipJA/VfQJisZseoI/AAAAAAAANq8/ezXxDCD8tiQ/s320/IMG_20150903_182848.jpg)](https://4.bp.blogspot.com/-Dj_kyMUipJA/VfQJisZseoI/AAAAAAAANq8/ezXxDCD8tiQ/s1600/IMG_20150903_182848.jpg)</div>

<div style="text-align: center;"><span style="text-align: start;">**Raspberry Pi 2** </span></div>

<div class="separator" style="clear: both; text-align: center;">[![](https://2.bp.blogspot.com/-R_Bkw6xovPI/VfQJii4lFYI/AAAAAAAANq8/3FCPmQY9NWY/s320/IMG_20150903_182839.jpg)](https://2.bp.blogspot.com/-R_Bkw6xovPI/VfQJii4lFYI/AAAAAAAANq8/3FCPmQY9NWY/s1600/IMG_20150903_182839.jpg)    [![](https://2.bp.blogspot.com/-p6EjFBHxp4Y/VfQJiuVULbI/AAAAAAAANq8/aqs710Kl1tk/s320/IMG_20150903_183244.jpg)](https://2.bp.blogspot.com/-p6EjFBHxp4Y/VfQJiuVULbI/AAAAAAAANq8/aqs710Kl1tk/s1600/IMG_20150903_183244.jpg)</div>

<div class="separator" style="clear: both; text-align: center;"><span style="text-align: start;">**Klavyeli Tablet Kılıfı  **                       </span>**1 Metre Kablo Koruyucu**</div>

<div class="separator" style="clear: both; text-align: center;">Ana mekanik parçalarım bu ikisi oldukça uygun fiyata maloldu. Laptopumun mekanik kısmı basitçe bu tablet kılıfı ve kalo koruyucu ile üzerine yaptığım kutudan oluşuyor.</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://4.bp.blogspot.com/-tZLXEaO1KC4/VfQJij-sRoI/AAAAAAAANq8/JG4ZKDFvsEw/s320/IMG_20150903_182920.jpg)](https://4.bp.blogspot.com/-tZLXEaO1KC4/VfQJij-sRoI/AAAAAAAANq8/JG4ZKDFvsEw/s1600/IMG_20150903_182920.jpg)</div>

<div class="separator" style="clear: both; text-align: center;"><span style="text-align: start;">**USB WIFI Adaptörü **</span></div>

<div class="separator" style="clear: both; text-align: center;"><span style="text-align: start;">Raspberry Pi uyumlu wifi adaptörü. Laptopumuzla internete girebilmemiz için.</span></div>

<div class="separator" style="clear: both; text-align: center;">[
](https://2.bp.blogspot.com/-R_Bkw6xovPI/VfQJii4lFYI/AAAAAAAANq8/3FCPmQY9NWY/s1600/IMG_20150903_182839.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://1.bp.blogspot.com/-9wDllKFQutM/VfQJ3vOIxCI/AAAAAAAANrI/yaYmJnTDzFw/s320/IMG_20150905_154157.jpg)](https://1.bp.blogspot.com/-9wDllKFQutM/VfQJ3vOIxCI/AAAAAAAANrI/yaYmJnTDzFw/s1600/IMG_20150905_154157.jpg)[![](https://3.bp.blogspot.com/-g_HaMldZKjk/VfQJ3mr9_CI/AAAAAAAANrI/Jjh-nEyWZeU/s320/IMG_20150905_154221.jpg)](https://3.bp.blogspot.com/-g_HaMldZKjk/VfQJ3mr9_CI/AAAAAAAANrI/Jjh-nEyWZeU/s1600/IMG_20150905_154221.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">**Mini Usb Kablosu  **                         ** LM2596 Regülatör Modulü**</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://3.bp.blogspot.com/-msg88QCwyF4/VfQJ3s3i8gI/AAAAAAAANrI/aNO1QZDK1AI/s320/IMG_20150905_154226.jpg)](https://3.bp.blogspot.com/-msg88QCwyF4/VfQJ3s3i8gI/AAAAAAAANrI/aNO1QZDK1AI/s1600/IMG_20150905_154226.jpg)[![](https://2.bp.blogspot.com/-RGHWRLZG8gA/VfQJ3gpcIfI/AAAAAAAANrI/E9lSwrjrou0/s320/IMG_20150905_154130.jpg)](https://2.bp.blogspot.com/-RGHWRLZG8gA/VfQJ3gpcIfI/AAAAAAAANrI/E9lSwrjrou0/s1600/IMG_20150905_154130.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">**LM2596 Regülatör Arka Tarafı                  **<span style="text-align: start;">**1500 Mah 3S Lipo Pil **</span></div>

<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;">

<tbody>

<tr>

<td style="text-align: center;">[![](https://4.bp.blogspot.com/-oalw0-hcRMc/VfQJijQ-iuI/AAAAAAAANq8/H3XnqNDjGA8/s320/IMG_20150903_182925.jpg)](https://4.bp.blogspot.com/-oalw0-hcRMc/VfQJijQ-iuI/AAAAAAAANq8/H3XnqNDjGA8/s1600/IMG_20150903_182925.jpg)</td>

</tr>

</tbody>

</table>

<div style="text-align: center;">**Tabi ki ses çıkışı için kulakık ve laptopumuzu kullanabilmemiz için fare. **</div>

**4\. Yapılış Aşamaları**

<div class="separator" style="clear: both; text-align: center;">**1\.** Montaja başlamadan önce devremi kurdum ve test ettim.</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://2.bp.blogspot.com/-c_n2wcFEuxQ/VfQJitzS-UI/AAAAAAAANq8/_LjKDyw19kk/s320/IMG_20150903_191838.jpg)](https://2.bp.blogspot.com/-c_n2wcFEuxQ/VfQJitzS-UI/AAAAAAAANq8/_LjKDyw19kk/s1600/IMG_20150903_191838.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://2.bp.blogspot.com/-Th1IbnE5h2I/VfQJinRCGBI/AAAAAAAANq8/oy-ghJWil64/s320/IMG_20150903_191822.jpg)](https://2.bp.blogspot.com/-Th1IbnE5h2I/VfQJinRCGBI/AAAAAAAANq8/oy-ghJWil64/s1600/IMG_20150903_191822.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://3.bp.blogspot.com/-FRkCT2jAJkc/VfQJiqAwp-I/AAAAAAAANq8/K7c820dHfAI/s320/IMG_20150903_210341.jpg)](https://3.bp.blogspot.com/-FRkCT2jAJkc/VfQJiqAwp-I/AAAAAAAANq8/K7c820dHfAI/s1600/IMG_20150903_210341.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">Farklı versiyonlar denedikten sonra çalışan prototipe ulaştıktan sonra devremi lehimledim. Devrenin son hali aşağıdaki gibidir. Basitçe açıklamak gerekirse; LCD ekran 12 volt ile çalışırken Raspberry Pi 2 5 volt ile çalışıyor bu yüzden Lm2596 regülatör modulünü kullanarak 12 voltluk voltajımız 5 volta ayarlanıyor.  Pilden devreye gelen gücü kesmek için araya bir anahtar koydum. Batarya şarj olurken anahtarı kapatıyorum bu sayede bataryadan akım çekimiyor. Ayrıca anahtar iletimde değilken LCD Driver Boardın üzerindeki DC IN jakı kullnılarak da devremi besleyebiliyorum. Batarya bittiğinde kullanmak için oldukça güzel bir çözüm oldu.</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://1.bp.blogspot.com/-1tK3scEPnvU/VfSgRI7g3iI/AAAAAAAANsc/53lyOWL06Mw/s640/Ads%25C4%25B1z.png)](https://1.bp.blogspot.com/-1tK3scEPnvU/VfSgRI7g3iI/AAAAAAAANsc/53lyOWL06Mw/s1600/Ads%25C4%25B1z.png)</div>

<div style="text-align: center;">**2\.** Aşamada Raspberry Pi 2, LCD Driver Board ve Lipp pilin montajını gerçekleştirdim. Montaj için çift taraflı bant kullandım. Ayrıca daha sonra kutumuzun bir parçasını oluşturacak bir kablo koruyucu parçası alt tarafa yerleştirdim. Klavye kablosunu ve Pil anahtarını bu kablo koruyucunun içine yerleştirdim.</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://3.bp.blogspot.com/-cslv2cYUhl8/VfSZGWLqkaI/AAAAAAAANrk/IzQ6NK09qUI/s320/IMG_20150905_160718.jpg)](https://3.bp.blogspot.com/-cslv2cYUhl8/VfSZGWLqkaI/AAAAAAAANrk/IzQ6NK09qUI/s1600/IMG_20150905_160718.jpg)[![](https://3.bp.blogspot.com/-1VydvjB2m7Q/VfSZGV7uigI/AAAAAAAANrk/ZlKe8DV5nOY/s320/IMG_20150905_160723.jpg)](https://3.bp.blogspot.com/-1VydvjB2m7Q/VfSZGV7uigI/AAAAAAAANrk/ZlKe8DV5nOY/s1600/IMG_20150905_160723.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://4.bp.blogspot.com/-pdmyBWnOYR0/VfSZnZNHjCI/AAAAAAAANrs/ldIdg21VJ1U/s320/IMG_20150905_170026.jpg)](https://4.bp.blogspot.com/-pdmyBWnOYR0/VfSZnZNHjCI/AAAAAAAANrs/ldIdg21VJ1U/s1600/IMG_20150905_170026.jpg)[![](https://3.bp.blogspot.com/-htG5Yg5TazM/VfSZndG2o6I/AAAAAAAANrs/UmdcCb3MCaQ/s320/IMG_20150905_170752.jpg)](https://3.bp.blogspot.com/-htG5Yg5TazM/VfSZndG2o6I/AAAAAAAANrs/UmdcCb3MCaQ/s1600/IMG_20150905_170752.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://3.bp.blogspot.com/--NS9jrgOfwE/VfSZ_Xh732I/AAAAAAAANr0/c2yLn1K2Nuk/s320/IMG_20150905_173301.jpg)](https://3.bp.blogspot.com/--NS9jrgOfwE/VfSZ_Xh732I/AAAAAAAANr0/c2yLn1K2Nuk/s1600/IMG_20150905_173301.jpg)[![](https://3.bp.blogspot.com/-L0VPF3u_3HU/VfSZ_fEesbI/AAAAAAAANr0/UFa3UWLMi6s/s320/IMG_20150905_173306.jpg)](https://3.bp.blogspot.com/-L0VPF3u_3HU/VfSZ_fEesbI/AAAAAAAANr0/UFa3UWLMi6s/s1600/IMG_20150905_173306.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">**3\.** Montajlar tamamlanınca elemanlarının dizilişinin son hali aşağıdaki gibi oldu. Sağlamlaştırmak için duck tape ekledim ve devremin çalışıp çalışmadığını tekrar denedim. </div>

<div class="separator" style="clear: both; text-align: center;">[![](https://3.bp.blogspot.com/-RLGVDbsgUjQ/VfSZ_UxPzHI/AAAAAAAANr0/mgYQy0GLSWg/s320/IMG_20150905_173907.jpg)](https://3.bp.blogspot.com/-RLGVDbsgUjQ/VfSZ_UxPzHI/AAAAAAAANr0/mgYQy0GLSWg/s1600/IMG_20150905_173907.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://4.bp.blogspot.com/-6gc8iD7vDho/VfSZ_SHQ4wI/AAAAAAAANr0/XtQHC_bfmbA/s320/IMG_20150905_174217.jpg)](https://4.bp.blogspot.com/-6gc8iD7vDho/VfSZ_SHQ4wI/AAAAAAAANr0/XtQHC_bfmbA/s1600/IMG_20150905_174217.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">**4\.** Çalıştığından emin olduktan sonra kutu yapımına devam ettim Kablo koruyucu plastiği Hdmi kablosu ve soketlere uygun şekilde kestim.</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://1.bp.blogspot.com/-KrLyRibAROY/VfSabevI9UI/AAAAAAAANr8/1uDccccHYEA/s320/IMG_20150905_203031.jpg)](https://1.bp.blogspot.com/-KrLyRibAROY/VfSabevI9UI/AAAAAAAANr8/1uDccccHYEA/s1600/IMG_20150905_203031.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">**5\.** Lcd Driver Boarddaki ve Raspberry Pi'daki çipler üzerine soğutucu metaller yerleştirdim. Kapalı kutuda kullanacağım için ısınma problemi olmaması konusunda emin olmaya istedim.</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://2.bp.blogspot.com/-4g8wKTH8ShU/VfSalyEDxEI/AAAAAAAANsE/MVC0UzPXDTg/s320/IMG_20150905_203440.jpg)](https://2.bp.blogspot.com/-4g8wKTH8ShU/VfSalyEDxEI/AAAAAAAANsE/MVC0UzPXDTg/s1600/IMG_20150905_203440.jpg)[![](https://4.bp.blogspot.com/-YU7jGETjX2A/VfSal67aPHI/AAAAAAAANsE/vMBswIO0ZFQ/s320/IMG_20150905_203448.jpg)](https://4.bp.blogspot.com/-YU7jGETjX2A/VfSal67aPHI/AAAAAAAANsE/vMBswIO0ZFQ/s1600/IMG_20150905_203448.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">**5\.** Ses çıkışını kutunun dışına çıkarmak için aşağıdaki gibi bir erkek bir dişi jak kullandım. Fakat daha basit bir yöntem olarak kısa kulaklık çoklayıcı kablolardan kullanabilirsiniz. Böylece birden fazla ses çıkışınız olur ve bunları lehimlemekle uğraşmanız gerekmez.</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://2.bp.blogspot.com/-d6Hyw1DwAEE/VfQJ3g-qoQI/AAAAAAAANrI/aTlXitkxoUs/s320/IMG_20150905_202620.jpg)](https://2.bp.blogspot.com/-d6Hyw1DwAEE/VfQJ3g-qoQI/AAAAAAAANrI/aTlXitkxoUs/s1600/IMG_20150905_202620.jpg)[![](https://1.bp.blogspot.com/-0YOtUekB4Vw/VfQJ3m6AWQI/AAAAAAAANrI/UpFTA7Cs3rU/s320/IMG_20150905_202613.jpg)](https://1.bp.blogspot.com/-0YOtUekB4Vw/VfQJ3m6AWQI/AAAAAAAANrI/UpFTA7Cs3rU/s1600/IMG_20150905_202613.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">**6.** Plastik bir kutunun kapağını söküp soketlere ve ekranın kablosununa uyumlu olacak şekilde kestim. Üzerine de ekranı monte ettim. Böylece kutumuz tamamlanmış oldu.</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://2.bp.blogspot.com/-TYUwwOrm73Y/VfSal_FUv-I/AAAAAAAANsE/_xgsyb5eDBw/s320/IMG_20150905_212955.jpg)](https://2.bp.blogspot.com/-TYUwwOrm73Y/VfSal_FUv-I/AAAAAAAANsE/_xgsyb5eDBw/s1600/IMG_20150905_212955.jpg)[![](https://4.bp.blogspot.com/-zQHkyyvM6O8/VfSal273H9I/AAAAAAAANsE/cjv8g5jeP3w/s320/IMG_20150905_215736.jpg)](https://4.bp.blogspot.com/-zQHkyyvM6O8/VfSal273H9I/AAAAAAAANsE/cjv8g5jeP3w/s1600/IMG_20150905_215736.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://3.bp.blogspot.com/-YPH9cF1jXc8/VfSalx1sAqI/AAAAAAAANsE/bUFxP_kAS8k/s320/IMG_20150905_215748.jpg)](https://3.bp.blogspot.com/-YPH9cF1jXc8/VfSalx1sAqI/AAAAAAAANsE/bUFxP_kAS8k/s1600/IMG_20150905_215748.jpg)[![](https://1.bp.blogspot.com/-qiYLoIREcuc/VfSalww8SII/AAAAAAAANsE/TagV3Kd_4Nk/s320/IMG_20150905_220610.jpg)](https://1.bp.blogspot.com/-qiYLoIREcuc/VfSalww8SII/AAAAAAAANsE/TagV3Kd_4Nk/s1600/IMG_20150905_220610.jpg)</div>

<div style="text-align: center;">**7\.** Kutumuz neredeyse bitti güzel görüntü için malzemeleri siyah duck tape ile bantladım. Böylece projemiz bitmiş oldu. Düşük maliyetli DIY Raspberry Pi Laptopumuz kullanıma hazır. Hdmi kablo kutunun dışından dolaşarak LCD Driver Board'a giriyor. Kablonun ekrana girdiği ucu çıkarabiliyoruz bu sayede ekran başka Hdmi Av cihazlarla kullanılabiliyor. Ayrıca Raspberry Pi'dan çıkan Hdmi kabloyu da başka ekranlara televizyona bağlayabiliyoruz. Bu da laptopumuza daha fazla fonksiyonellik katıyor. </div>

<div class="separator" style="clear: both; text-align: center;">[![](https://2.bp.blogspot.com/-1nmIjtyloP4/VfSal0E7VzI/AAAAAAAANsE/sDd_0fD3qjA/s320/IMG_20150905_223543.jpg)](https://2.bp.blogspot.com/-1nmIjtyloP4/VfSal0E7VzI/AAAAAAAANsE/sDd_0fD3qjA/s1600/IMG_20150905_223543.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://3.bp.blogspot.com/-DAwICwi5_9U/VfSbqGJD1zI/AAAAAAAANsQ/XzcW3kOLchs/s320/IMG_20150905_230332.jpg)](https://3.bp.blogspot.com/-DAwICwi5_9U/VfSbqGJD1zI/AAAAAAAANsQ/XzcW3kOLchs/s1600/IMG_20150905_230332.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://2.bp.blogspot.com/-hZ219ork5PQ/VfSbqHodVCI/AAAAAAAANsQ/VcLX9sj2M8g/s320/IMG_20150905_230427.jpg)](https://2.bp.blogspot.com/-hZ219ork5PQ/VfSbqHodVCI/AAAAAAAANsQ/VcLX9sj2M8g/s1600/IMG_20150905_230427.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">Laptopun pilden çektiği ortalama akım aşağıda gözüktüğü gibi. 1500 mAh pil ile yaklaşık 2 saat kesintisiz kullanabiliyoruz.</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://1.bp.blogspot.com/-eHS1O3Gv9J4/VfStPek73TI/AAAAAAAANss/l3KWJll-FqU/s200/IMG_20150905_163749.jpg)](https://1.bp.blogspot.com/-eHS1O3Gv9J4/VfStPek73TI/AAAAAAAANss/l3KWJll-FqU/s1600/IMG_20150905_163749.jpg)[![](https://3.bp.blogspot.com/-L7zec48A_lc/VfStPbIqcuI/AAAAAAAANss/Sp8wze46UJU/s200/IMG_20150905_163747.jpg)](https://3.bp.blogspot.com/-L7zec48A_lc/VfStPbIqcuI/AAAAAAAANss/Sp8wze46UJU/s1600/IMG_20150905_163747.jpg)</div>

<div class="separator" style="clear: both; text-align: left;">**5\. Sonuç**</div>

<div class="separator" style="clear: both; text-align: left;">      Evvet... Projemiz sol halini böylece almış oldu. 110 dolar gibi bir fiyata küçük fonksiyonel basit bir laptop elde etmiş olduk. Bir çoğunuz sorabilir biraz daha para ödeyerek bu boyutlarda bir android tableti neden tercih etmediniz diye. Açıkcası bazı alanlarda öyle bir tabletin daha işe yarar olacağını kabul ediyorum. Fakat benim Raspberry Pi üzerinde yazılım geliştirmem gerek ve bu bulabildiğim en etkili çözüm oldu. Böylece çok farklı amaçlar için Raspberry Pi kullanabiliyorum. Ayrıca Raspberry Pi 2'nin arkasındaki topluluk ve Linux'un özgür dünyasını kullanabildiğim bir laptop olması da çok büyük artılar benim için. Tekrar görüşmek üzere...</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://2.bp.blogspot.com/-Tk2vzJQi_A0/VfSbqP49GlI/AAAAAAAANsQ/W7W9NZ8H9Ok/s400/IMG_20150912_124002.jpg)](https://2.bp.blogspot.com/-Tk2vzJQi_A0/VfSbqP49GlI/AAAAAAAANsQ/W7W9NZ8H9Ok/s1600/IMG_20150912_124002.jpg)</div>
