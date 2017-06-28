title: |
	RF Mesafe Hesaplama Exceli
date: 2016-01-02 04:34:00
tags: [RF mesafe hesaplama,Software Defined Radio]
categories:
  - İşaret İşleme
author: Mehmet Ozan Ünal
---

<div>**Merhaba Arkadaşlar,**  
       Bugünkü yazımda bir radyo modülünün teorik olarak ne kadar uzaklıkta çalışabildiğini hesaplayan projemi paylaşacağım. Amacım haberleşme modülleri seçilirken kolayca karşılaştırmalar yapılabilecek basit bir hesaplama ortamı oluşturmaktı. Bu tarz işler için en uygun program olduğunu düşündüğüm Excel programını kullandım.  
        [Öncelikle bu hesabı anlamama şuradaki link çok yardımcı oldu](http://www.mikrodalgamuhendisi.com/index.php/rf-soru-cevap-anasayfa/90-yeni-baslayanlar-icin-iletisim-mesafesi-hesab). Öncelikle onu incelemenizi tavsiye ederim. Oradaki bilgileri kısaca özetleyecek olursam:  

<a name="more"></a>        İlk olarak mesafeyi temel olarak etkilen 2 kavram var. Birincisi vericinin çıkış gücü, ikincisi ise alıcının alış hassasiyeti. Özellikle 2\. etken sık sık önemi unutulan konulardan biri. Genelde aktarılan veri akış hızının artmasıyla alış hassasiyeti düşmektedir. Yeterli olacak minimum veri akış hızını seçmek de önemli noktalardan bir tanesidir. Çıkış gücüne anten ve kuvvetlendirici kazançları da eklenir. Bulunan bu değere toplam güç denir. Hesabımızı belirleyen bağıntı ise şöyledir:</div>

<div style="font-weight: bold; text-align: center;">**Alış Hassasiyeti < Toplam güç – Yol Zayıflaması Kaybı**</div>

<div style="text-align: left;">       Eğer burayı eşit olarak alırsak maksimum mesafeyi hesaplamış oluruz ama ideal ortam için hesaplarımızı yaptığımız için büyük bir hata payı koymanızı tavsiye ederim (gerçekçi sonuçlar için)</div>

<div style="text-align: left;">Şimdilik ben bir hata payı eklemedim çünkü donanımdan ve kullanım şeklinden ve daha bir sürü şeyden çok değişebilir. Maksimum üzerinden devam edelim. Yol zayıflamasının maksimum değerini de aşağıdaki gibi elde etmiş oluruz.</div>

<div>  

<div style="text-align: center;">Toplam güç (dBm) - Alış hassasiyeti (dBm) = Yol Zayıflaması (dB)</div>

Yol zayıflamasını kullanarak mesafe ise aşağıdaki gibi hesaplanır.  

<div style="text-align: center;">Yol Zayıflaması (dB) - 20.log10(Frekans, MHz) + 27.55 = 20.log10(Mesafe, Metre)</div>

</div>

<div>  
       **Çok önemli uyarı: Yaptığımız bu hesapla ortaya çıkan sonuç en idael koşullar için geçerlidir. Neleri hesaba katmadığımızı şöyle sıralayabiliriz:**  

*   **Öncelikle yaptığımız hesap Line of sight mesafe hesabı aradaya girebilecek hiç bir engel hesaba katılmadı. ( Dağ, ağaç, direk,)**
*   **Hesaplar boş uzay için yapıldı. Havanın etkisi ve hava olaylarının etkisi hiç hesaba katılmadı.**
*   **Yakın frekanslardaki her sinyal mesafeyi kısaltıcı etki gösterecektir.**
*   **Antenlerin yapısındaki hatalar, çevresindeki nesnelerin "radiation pattern" yapacağı gürültüler hesaba katılmadı**
*   **Anten kablolarında meydana gelebilcek kayıplar hesaba katılmadı.**

<div>**Gördüğünüz gibi bu şartlar altında burada hesaplayacağınız mesafe gerçekte elde edeceğinizden çok daha uzun olacaktır (Deneyimlerimde 10da biri 20de biri gibi mesafelerle karşı karşıya kaldım). Ama bu exceli farklı modulleri kıyaslamak için kolaylıkla kullanabilirsiniz**</div>

</div>

<div>[RF mesafe hesaplama excelinin buradan indirebilirsiniz.](https://drive.google.com/file/d/0B5j__Lyt9ozbbU83Yy1IY2g3Tm8/view?usp=sharing)</div>

<div>

<div class="separator" style="clear: both; text-align: center;">[![](http://2.bp.blogspot.com/-KnIZAPHVg0I/VocgbHgY7kI/AAAAAAAAXhU/eHC-s7cwViY/s640/Capture.PNG)](http://2.bp.blogspot.com/-KnIZAPHVg0I/VocgbHgY7kI/AAAAAAAAXhU/eHC-s7cwViY/s1600/Capture.PNG)</div>

</div>