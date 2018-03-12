title: |
  Star Wars BB-8 Robot Yapımı Bölüm 1
tags:
  - Elektronik
  - Arduino
  - arduino servo kontrol
  - bluetooth kontrol
  - DIY BB-8 Droid
  - Star Wars BB-8
categories:
  - Elektronik
  - Arduino
author: Mehmet Ozan Ünal
date: 2016-01-21 03:26:00
---
**Herkese Merhabalar,**  
Bu seferki projem Star Warsa son film ile katılan BB-8 isimli droidin bir benzerini yapmak. Bu fikir aklıma nereden geldi derseniz. Son filmdeki en sempatik ve ilgi çekici karakterin BB-8 olduğunu düşünüyorum. Tabi ilk aklıma gelen nasıl çalıştığı... Farklı fikirler yürütürken kendimi bu droidi nasıl yaparım diye tasarımlar yaptığım bir projenin içinde buluverdim. Elle tutulur tasarımlar ortaya çıkmaya başlayınca malzemelerimi topladım ve projeye başladım. Proje oldukça uzun ve daha çok mekanik bir proje bu yüzden 2 parçaya ayırdım kalanını ne zaman bitiririm bilmiyorum. Şu an devam edemiyorum çünkü lipo pillerim bitti ve şarj aletini malesef istanbulda unutmuşum. Neyse projemize geçelim.  

<!-- more -->  
Gerekli malzemeler 2 tane yüksek torklu, 1 tane daha düşük torklu 360 derece dönebilen servo, bir Arduino Nano, Bluetooth Modulü, Motor sürücü modüller bir Android Cep Telefonu kontrol için, mekanik kısım için kalın ataçlar ve bir adet dünya küre modeli (ana gövdemiz olarak).  

<div class="separator" style="clear: both; text-align: center;">[![](http://3.bp.blogspot.com/-q5ImmWp3rkU/Vp1jyATyPvI/AAAAAAAAX6Q/9W5wpFykyQw/s400/bb8-droid-star-wars-3d-fx-960x818.jpg)](http://3.bp.blogspot.com/-q5ImmWp3rkU/Vp1jyATyPvI/AAAAAAAAX6Q/9W5wpFykyQw/s1600/bb8-droid-star-wars-3d-fx-960x818.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">Kabaca planladığım mekanik dizayn aşağıdaki gibi. açıklamak gerekirse "artı" şeklindeki mekanizmamız droidin kontrol edildiği ve tüm motoların bulunduğu yer. Ana küreye sadece kenarlardan motorlar aracılığıyla bağlı alt kısmına ise bir ağırlık bağlı metal bir parça olabilir ama kesinlikle bir disk olmasını öneririm. Benim bağladığım parça stabiliteye hiç iyi etki etmedi. Bu ağırlık sayesinde yan motorlar döndüğünde ağırlığın dönmesi daha zor olduğundan dışarıdaki küre dönmeye başlıyor bu sayede robotumuz ilerliyor. Üçüncü bir motorumuz ise o ağırlığı kendi ekseni etrafında döndürüyor. Momentumun korunumundan ağırlık kendi ekseni etrafında dönmeye başladığı anda küremiz de ters yönde kendi etrafında dönüyor. Kafa için ise mıknatıs kullanmayı düşünüyorum ama onları bölüm 2'de anlatacağım.</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://4.bp.blogspot.com/-b5P8trn9JeE/Vp_6RzoE0GI/AAAAAAAAX9s/fQAinUFhFQQ/s320/IMG_20160120_151534.jpg)](http://4.bp.blogspot.com/-b5P8trn9JeE/Vp_6RzoE0GI/AAAAAAAAX9s/fQAinUFhFQQ/s1600/IMG_20160120_151534.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">Projemin şu anki halinin kısa bir tanıtım videosu :</div>

<div style="text-align: center;"><iframe allowfullscreen="" class="YOUTUBE-iframe-video" data-thumbnail-src="https://i.ytimg.com/vi/WhfsFlYk2us/0.jpg" frameborder="0" height="266" src="https://www.youtube.com/embed/WhfsFlYk2us?feature=player_embedded" width="320"></iframe></div>

<div class="separator" style="clear: both; text-align: center;">Yapılışına geçecek olursak ilk önce model küremizi yerinden çıkarıp dışındaki harita kısmını soyuyoruz. Sonra ortadan ikiye ayırıyoruz. Maket bıçağı yardımıyla kolayca yapılabilecek bir işlem.</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://3.bp.blogspot.com/-r1tKW2J6HGk/Vp1kCPzNPxI/AAAAAAAAX6Y/NwDdTX8-yiM/s320/IMG_20160117_221948.jpg)](http://3.bp.blogspot.com/-r1tKW2J6HGk/Vp1kCPzNPxI/AAAAAAAAX6Y/NwDdTX8-yiM/s1600/IMG_20160117_221948.jpg)[![](http://1.bp.blogspot.com/-XZH8pqKOHQI/Vp1kCN7JaWI/AAAAAAAAX6Y/rbj_kJBJ-Bw/s320/IMG_20160117_221951.jpg)](http://1.bp.blogspot.com/-XZH8pqKOHQI/Vp1kCN7JaWI/AAAAAAAAX6Y/rbj_kJBJ-Bw/s1600/IMG_20160117_221951.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">2 adet 360 derece dönebilen servomuzu delikli pertinanks üzerine sabitliyoruz. Sağlamlığından emin olmak için plastik kelepçe kullanabiliriz. Servonun uçlarına kalın bir atacı şekillendirip takıyoruz. Penseyle küre kenarına göre şekillendirip bant ve sıcak silikon kullanarak kürenin kenarlarına sabitliyoruz. </div>

<div class="separator" style="clear: both; text-align: center;">[![](http://3.bp.blogspot.com/-lXZyDJQNE_w/Vp1kCEIMaiI/AAAAAAAAX6Y/Heot9nDBbW4/s320/IMG_20160118_001624.jpg)](http://3.bp.blogspot.com/-lXZyDJQNE_w/Vp1kCEIMaiI/AAAAAAAAX6Y/Heot9nDBbW4/s1600/IMG_20160118_001624.jpg)[![](http://3.bp.blogspot.com/-mkn92VB1V7k/Vp1kCH1EGWI/AAAAAAAAX6Y/FTB42BCysa0/s320/IMG_20160118_001633.jpg)](http://3.bp.blogspot.com/-mkn92VB1V7k/Vp1kCH1EGWI/AAAAAAAAX6Y/FTB42BCysa0/s1600/IMG_20160118_001633.jpg)</div>

<div style="text-align: center;"> Ben devremi küçük bir pertinanks üzerine lehimledim. Devrede 1 adet Arduino Nano, 1 adet Bluetooth Modulü (HC-06), 1 adet motor sürücü devresi (Servolardan birini kontrol etmek için gerekli oldu 360 derece dönmesi için modifiye edince) ve yanlardaki 2 adet servoya da doğrudan bağlantı var. Devremi sabitlemeden önce pertinanksın altına ağırlığı taşıyacak bu sefer daha küçük bir servo sabitledim. Sabitlemek için plastik kelepçe bant kullandım. Sonra da devremi yukarı sabitledim.</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://2.bp.blogspot.com/-YW3IzJys4Ak/Vp1kCOmGuxI/AAAAAAAAX6Y/wKt5nVtEBzE/s320/IMG_20160118_001646.jpg)](http://2.bp.blogspot.com/-YW3IzJys4Ak/Vp1kCOmGuxI/AAAAAAAAX6Y/wKt5nVtEBzE/s1600/IMG_20160118_001646.jpg)[![](http://3.bp.blogspot.com/-PKPHFaZ6uA4/Vp1kCHPDvhI/AAAAAAAAX6Y/DSyG4hhOnuA/s320/IMG_20160118_003855.jpg)](http://3.bp.blogspot.com/-PKPHFaZ6uA4/Vp1kCHPDvhI/AAAAAAAAX6Y/DSyG4hhOnuA/s1600/IMG_20160118_003855.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://3.bp.blogspot.com/-1m_RAK_CuJU/Vp1kCPhZptI/AAAAAAAAX6Y/Pq1Q-mz6KF8/s320/IMG_20160118_003845.jpg)](http://3.bp.blogspot.com/-1m_RAK_CuJU/Vp1kCPhZptI/AAAAAAAAX6Y/Pq1Q-mz6KF8/s1600/IMG_20160118_003845.jpg)[![](http://4.bp.blogspot.com/-oqaSx2aNMb0/Vp1kCL-AliI/AAAAAAAAX6Y/ENmBpqumG8U/s320/IMG_20160118_003913.jpg)](http://4.bp.blogspot.com/-oqaSx2aNMb0/Vp1kCL-AliI/AAAAAAAAX6Y/ENmBpqumG8U/s1600/IMG_20160118_003913.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://1.bp.blogspot.com/-yvFu_G0CxLc/Vp1kCANSENI/AAAAAAAAX6Y/9QL8XK-2iYo/s320/IMG_20160118_023758.jpg)](http://1.bp.blogspot.com/-yvFu_G0CxLc/Vp1kCANSENI/AAAAAAAAX6Y/9QL8XK-2iYo/s1600/IMG_20160118_023758.jpg)[![](http://1.bp.blogspot.com/-ncK_2oC2PB4/Vp1kCMm7BbI/AAAAAAAAX6Y/8CSHHVy_568/s320/IMG_20160118_023838.jpg)](http://1.bp.blogspot.com/-ncK_2oC2PB4/Vp1kCMm7BbI/AAAAAAAAX6Y/8CSHHVy_568/s1600/IMG_20160118_023838.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">Ağırlık olarak aşağıdaki kilit mekanizmasını kullandım ataç kullanarak onu alt taraftaki servoya monte ettim. Ama ağırlığımızın disk şeklinde olması gerekiyor sonraki versiyonda değiştireceğim.</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://2.bp.blogspot.com/-ZA5UByM2NXA/Vp1kCD4KvrI/AAAAAAAAX6Y/M-e1wb9cjiI/s320/IMG_20160118_135546.jpg)](http://2.bp.blogspot.com/-ZA5UByM2NXA/Vp1kCD4KvrI/AAAAAAAAX6Y/M-e1wb9cjiI/s1600/IMG_20160118_135546.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">En son olarak pili de ekleyince kürenin içinin son görüntüsü aşağıdaki gibi oldu. Bundan sonra tek yapmam gereken kendi yazdığım android programını çalıştırıp küreyi kapatıp BB-8 Droidimizi denemek. Kodları ve Android programı 2\. bölümde paylaşacağım. Tekrar görüşmek üzere.</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://2.bp.blogspot.com/-KIgAXjQ5ILI/Vp1kCNJNC0I/AAAAAAAAX6Y/5Socb0yLw6M/s320/IMG_20160118_164133.jpg)](http://2.bp.blogspot.com/-KIgAXjQ5ILI/Vp1kCNJNC0I/AAAAAAAAX6Y/5Socb0yLw6M/s1600/IMG_20160118_164133.jpg)[![](http://3.bp.blogspot.com/-_llVrNzBwF4/Vp1kCEgscTI/AAAAAAAAX6Y/YBCzVpnL9M8/s320/IMG_20160118_164141.jpg)](http://3.bp.blogspot.com/-_llVrNzBwF4/Vp1kCEgscTI/AAAAAAAAX6Y/YBCzVpnL9M8/s1600/IMG_20160118_164141.jpg)</div>