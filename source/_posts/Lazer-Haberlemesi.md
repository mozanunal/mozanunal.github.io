title: |
  Lazer Haberleşmesi
tags:
  - Arduino Projeleri
  - Laser Haberleşme
categories:
  - Arduino Projeleri
author: Mehmet Ozan Ünal
date: 2016-02-07 23:18:00
---

**Herkese Merhabalar,**  
         Son zamanlarda ışık ile veri aktarımına ilgi duymaktayım. Bu konuda bir şeyler geliştirmek istiyorum. Bunun ilk aşaması olarak lazer ile haberleşme projemi gerçekleştirdim. Bu projedeki amacım daha çok lazerin ve fotodiyotun cevap süresi ölçmek yani maximum aktarım hızını hesaplamaktı. Aynı zamanda farklı iletişim protokollerini denedim. İlerleyen projeler için lazerin de fotodiyotun da yetersiz olduğunu görmüş oldum. Daha hızlı fotodiyotlarla ve ledlerle denemelerim sürecek. Projenin bu aşamadaki haline gelirsek:  

<a name="more"></a>  
       Gönderici modül basitçe bir arduino ve bir lazerden oluşuyor. Bir transistör ile lazeri sürmeyi planlıyordum. Fakat lazer çok düşük akım çektiğini görünce doğrudan arduinoun pinine bağladım.  

<div class="separator" style="clear: both; text-align: center;">[![](https://4.bp.blogspot.com/-qQdlLk1HTjA/VrTKOEJvIvI/AAAAAAAAYPk/0kfODfpYmCE/s320/20160205_171100.jpg)](https://4.bp.blogspot.com/-qQdlLk1HTjA/VrTKOEJvIvI/AAAAAAAAYPk/0kfODfpYmCE/s1600/20160205_171100.jpg)[![](https://4.bp.blogspot.com/-EpqGpVRIUnE/VrTLWM0_oBI/AAAAAAAAYPk/nAfynUH36ms/s320/20160205_171105.jpg)](https://4.bp.blogspot.com/-EpqGpVRIUnE/VrTLWM0_oBI/AAAAAAAAYPk/nAfynUH36ms/s1600/20160205_171105.jpg)</div>

Gönderici modül ise 1 fotodiot 1 direnç ve logic analyzerdan oluşuyor. Foto diyot üzerine düşen lazer ışığına göre 1 veya 0 çıktı veriyor. Bu çıktıları logic analyzer ile okuyup, istediğimiz iletişim protokolüne göre decode edebiliyoruz.  

<div class="separator" style="clear: both; text-align: center;">[![](https://3.bp.blogspot.com/-ab_G4FGMd94/VrTLwHEqjrI/AAAAAAAAYPs/iCl_KgAGAf0/s320/20160205_171310.jpg)](https://3.bp.blogspot.com/-ab_G4FGMd94/VrTLwHEqjrI/AAAAAAAAYPs/iCl_KgAGAf0/s1600/20160205_171310.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">Yukarıdaki çevre ışığının etkisini azaltmak için plastik bir kap ile kapatılmış hali. Aşağıdaki ise kapatılmadan önceki hali.</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://4.bp.blogspot.com/-S6TEoiHANvA/VrTLYZz2JXI/AAAAAAAAYPk/n2NfOTZc4yE/s320/20160205_171300.jpg)](https://4.bp.blogspot.com/-S6TEoiHANvA/VrTLYZz2JXI/AAAAAAAAYPk/n2NfOTZc4yE/s1600/20160205_171300.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">Testimin sonuçları ise söyle: serial haberleşme ile maximum 19200 baud rate kadar güvenilir bir iletişim oldu. Manchester decoding kullanarak ise 38400 baudrate kadar haberleşebildim.</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://3.bp.blogspot.com/-ljqRhccYSI4/VreridZE2DI/AAAAAAAAYRI/UxN5DVqhhqY/s640/1.PNG)](http://3.bp.blogspot.com/-ljqRhccYSI4/VreridZE2DI/AAAAAAAAYRI/UxN5DVqhhqY/s1600/1.PNG)</div>