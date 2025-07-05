---
title: '[TR] Star Wars BB-8 Robot Yapımı'
tags:
  - Electronics
  - Arduino
  - arduino servo kontrol
  - bluetooth kontrol
  - DIY BB-8 Droid
  - Star Wars BB-8
categories:
  - Electronics
  - Arduino
author: Mehmet Ozan Ünal
date: 2016-01-21 03:26:00
---

**Herkese Merhabalar,**\
Bu seferki projem Star Warsa son film ile katılan BB-8 isimli droidin bir
benzerini yapmak. Bu fikir aklıma nereden geldi derseniz. Son filmdeki en
sempatik ve ilgi çekici karakterin BB-8 olduğunu düşünüyorum. Tabi ilk aklıma
gelen nasıl çalıştığı... Farklı fikirler yürütürken kendimi bu droidi nasıl
yaparım diye tasarımlar yaptığım bir projenin içinde buluverdim. Elle tutulur
tasarımlar ortaya çıkmaya başlayınca malzemelerimi topladım ve projeye başladım.
Proje oldukça uzun ve daha çok mekanik bir proje bu yüzden 2 parçaya ayırdım
kalanını ne zaman bitiririm bilmiyorum. Şu an devam edemiyorum çünkü lipo
pillerim bitti ve şarj aletini malesef istanbulda unutmuşum. Neyse projemize
geçelim.

Gerekli malzemeler 2 tane yüksek torklu, 1 tane daha düşük torklu 360 derece
dönebilen servo, bir Arduino Nano, Bluetooth Modulü, Motor sürücü modüller bir
Android Cep Telefonu kontrol için, mekanik kısım için kalın ataçlar ve bir adet
dünya küre modeli (ana gövdemiz olarak).

![](bb8-droid-star-wars-3d-fx-960x818.jpg)

Kabaca planladığım mekanik dizayn aşağıdaki gibi. açıklamak gerekirse "artı"
şeklindeki mekanizmamız droidin kontrol edildiği ve tüm motoların bulunduğu yer.
Ana küreye sadece kenarlardan motorlar aracılığıyla bağlı alt kısmına ise bir
ağırlık bağlı metal bir parça olabilir ama kesinlikle bir disk olmasını
öneririm. Benim bağladığım parça stabiliteye hiç iyi etki etmedi. Bu ağırlık
sayesinde yan motorlar döndüğünde ağırlığın dönmesi daha zor olduğundan
dışarıdaki küre dönmeye başlıyor bu sayede robotumuz ilerliyor. Üçüncü bir
motorumuz ise o ağırlığı kendi ekseni etrafında döndürüyor. Momentumun
korunumundan ağırlık kendi ekseni etrafında dönmeye başladığı anda küremiz de
ters yönde kendi etrafında dönüyor. Kafa için ise mıknatıs kullanmayı
düşünüyorum ama onları bölüm 2'de anlatacağım.

![](IMG_20160120_151534.jpg)

Projemin şu anki halinin kısa bir tanıtım videosu :

{{< youtube id="WhfsFlYk2us" >}}

Yapılışına geçecek olursak ilk önce model küremizi yerinden çıkarıp dışındaki
harita kısmını soyuyoruz. Sonra ortadan ikiye ayırıyoruz. Maket bıçağı
yardımıyla kolayca yapılabilecek bir işlem.

![](IMG_20160117_221948.jpg)

![](IMG_20160117_221951.jpg)

2 adet 360 derece dönebilen servomuzu delikli pertinanks üzerine sabitliyoruz.
Sağlamlığından emin olmak için plastik kelepçe kullanabiliriz. Servonun uçlarına
kalın bir atacı şekillendirip takıyoruz. Penseyle küre kenarına göre
şekillendirip bant ve sıcak silikon kullanarak kürenin kenarlarına
sabitliyoruz. 

![](IMG_20160118_001624.jpg)

![](IMG_20160118_001633.jpg)

Ben devremi küçük bir pertinanks üzerine lehimledim. Devrede 1 adet Arduino
Nano, 1 adet Bluetooth Modulü (HC-06), 1 adet motor sürücü devresi (Servolardan
birini kontrol etmek için gerekli oldu 360 derece dönmesi için modifiye edince)
ve yanlardaki 2 adet servoya da doğrudan bağlantı var. Devremi sabitlemeden önce
pertinanksın altına ağırlığı taşıyacak bu sefer daha küçük bir servo sabitledim.
Sabitlemek için plastik kelepçe bant kullandım. Sonra da devremi yukarı
sabitledim.

![](IMG_20160118_001646.jpg)

![](IMG_20160118_003855.jpg)

![](IMG_20160118_003845.jpg)

![](IMG_20160118_003913.jpg)

![](IMG_20160118_023758.jpg)

![](IMG_20160118_023838.jpg)

Ağırlık olarak aşağıdaki kilit mekanizmasını kullandım ataç kullanarak onu alt
taraftaki servoya monte ettim. Ama ağırlığımızın disk şeklinde olması gerekiyor
sonraki versiyonda değiştireceğim.

![](IMG_20160118_135546.jpg)

En son olarak pili de ekleyince kürenin içinin son görüntüsü aşağıdaki gibi
oldu. Bundan sonra tek yapmam gereken kendi yazdığım android programını
çalıştırıp küreyi kapatıp BB-8 Droidimizi denemek. Kodları ve Android programı
2\. bölümde paylaşacağım. Tekrar görüşmek üzere.

![](IMG_20160118_164133.jpg)

![](IMG_20160118_164141.jpg)
