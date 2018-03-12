title: |
  DIY Bluetooth Speaker
tags:
  - bluetooth speaker
  - diy bluetooth speaker
  - pam8610
categories:
  - Elektronik
  - Analog
date: 2016-12-05 21:23:00
---
**Merhaba Arkadaşlar,**

Bu projemde nasıl elimizde kalan fazla hoparlörleri bluetooth speakera dönüştürebileceğinizden bahsedeceğim. Geçen yaz bir arkadaşımın 5 +1 ses sisteminin kuvvetlendirici kutusu yanmış böyle olunca da hoparlörler boşa çıkmış ben de bir projede kullanırım diyerek kenara ayırdım. Aklıma sonradan bunları bluetooth hoparlöre dönüştürmek geldi. Direk ses cihazı olarak görünen bluetooth ses alıcılarını araştırmaya başladım. Bir kaç model bulsam da yaklaşık 10 W olan bu hoparlörleri sürecek kadar güç çıkışı vermiyorlardı. Bu nedenle projeye bir de kuvvetlendirici ekledim. Kuvvetlendirici  olarak PAM8610 seçtim. Kendisi bir class D güç kuvvetlendiricisi yani en verimli olanlarından. Yüksek verini sayesinde çok az enerji ısıya dönüşüyor ve soğutucu metal parçaya vb ihtiyaç duymuyor. Yaptığım proje ile bu hoparlörleri, bluetooth üzerinden ya da doğrudan kablo ile ses çıkışlarına bağlanabilecek duruma getirmiş oluyorum.
<!-- more -->  
Toparlamak gerekirse proje için gerekli malzemeler:
*   1 veya 2 adet hoparlör
*   Pam8610 ses kuvvetlendirici
*   Bluetooth ses alıcı
*   3.5 mm ses kablosu
*   Breadboard güç kartı olarak satılan DC 12 v girişi olan, usb, 5v ve 3.3v çıkışı olan kartlardan.
*   Hepsini içine koyacağımız kutu

İlk olarak görüldüğü gibi PAM8610 üzerine bağlantıları yaptım. Direk ses jack'a lehimlemek hiç uygun bir yöntem olmasa da elimde dişisinden olmadığı için başka çarem yoktu. Projeyi yapmak isteyen arkadaşlara almalarını tavsiye ediyorum. Hoparlörlere bağlantı kablosu olarak da düz kablo kullandım. Bu nedenle elektriksel gürültüden etkilenebiliyor onları da en kısa zamanda değiştirmeyi planlıyorum. Ama yakınlarında bir PC adaptörü gibi yüksek elektriksel gürültü üreten şeyler olmadığı sürece ses kalitesi oldukça iyi.

[![](https://4.bp.blogspot.com/-f2S3Lq16bSg/WELO09pXG6I/AAAAAAAAer8/sET_Q6mjJpo3xIpB-2IgwyV0DJZkxzjngCKgB/s320/IMG_20161202_224342.jpg)](https://4.bp.blogspot.com/-f2S3Lq16bSg/WELO09pXG6I/AAAAAAAAer8/sET_Q6mjJpo3xIpB-2IgwyV0DJZkxzjngCKgB/s1600/IMG_20161202_224342.jpg)

PAM8610 12 volt ile çalışıyor bu yüzden güç dağıtım kartının güç soketine doğrudan lehimledim. Yalnız bir ayrıntı var + terminali switchden sonraki yere lehimledim böylece sadece düğme ile kapatabiliyorum.

[![](https://3.bp.blogspot.com/-j7GlyiOF_MY/WELPCMoc9EI/AAAAAAAAesA/TanuoPHXlRYLi_UfvZ3dWg17jR2Qf43KACKgB/s320/IMG_20161202_224352.jpg)](https://3.bp.blogspot.com/-j7GlyiOF_MY/WELPCMoc9EI/AAAAAAAAesA/TanuoPHXlRYLi_UfvZ3dWg17jR2Qf43KACKgB/s1600/IMG_20161202_224352.jpg)

<div class="separator" style="clear: both; text-align: center;">Kutuyu kablolar için yanlarından deldim.</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://2.bp.blogspot.com/-7z4RbwLYiTc/WELPSqS2BHI/AAAAAAAAesI/6sPpa9CCRzcj3GZQP6mO4oLuikGG-5z8wCKgB/s320/IMG_20161202_224607.jpg)](https://2.bp.blogspot.com/-7z4RbwLYiTc/WELPSqS2BHI/AAAAAAAAesI/6sPpa9CCRzcj3GZQP6mO4oLuikGG-5z8wCKgB/s1600/IMG_20161202_224607.jpg)</div>

[![](https://2.bp.blogspot.com/-ladfTmhT8Ds/WELPSuIaGWI/AAAAAAAAesI/eDdyTfzFP1Apdu-Ee6dpzQaph7fBGKBqgCKgB/s320/IMG_20161202_224612.jpg)](https://2.bp.blogspot.com/-ladfTmhT8Ds/WELPSuIaGWI/AAAAAAAAesI/eDdyTfzFP1Apdu-Ee6dpzQaph7fBGKBqgCKgB/s1600/IMG_20161202_224612.jpg)

<div style="text-align: center;">Güç konnektörünü yukarı bakacak şekilde kutuya sabitledim bu sayede bluetooth ses alıcı direk olarak kutunun dışından usbye bağlayabileceğim.</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://2.bp.blogspot.com/-A_XucsH0OcA/WELPSlzOCOI/AAAAAAAAesI/jkm-bXEUppwAr_7j8X9TJhtF9f2yUR8VACKgB/s320/IMG_20161202_224658.jpg)](https://2.bp.blogspot.com/-A_XucsH0OcA/WELPSlzOCOI/AAAAAAAAesI/jkm-bXEUppwAr_7j8X9TJhtF9f2yUR8VACKgB/s1600/IMG_20161202_224658.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">Yukarıda bahsettiğim bağlantı şekli. Ses kablosu doğrudan bluetooth modulüne gidiyor. Usb sadece güç vermek için kullanılıyor.</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://4.bp.blogspot.com/-fcNRzr884Uw/WELPYmGbvAI/AAAAAAAAesM/hN4ewjYNSRUgnSQc-OI2o5MQw3PrR2aDACKgB/s320/IMG_20161202_224754.jpg)](https://4.bp.blogspot.com/-fcNRzr884Uw/WELPYmGbvAI/AAAAAAAAesM/hN4ewjYNSRUgnSQc-OI2o5MQw3PrR2aDACKgB/s1600/IMG_20161202_224754.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">Beslemek için gerekli 12V adaptör. Uygun güç konnektörlü olanlarından seçtim.</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://4.bp.blogspot.com/-3cnwsNu9CIg/WELPYhtPjBI/AAAAAAAAesM/BSthcp4e8_Y_doOG9OQcDZWlZ8FPePb6QCKgB/s320/IMG_20161202_225158.jpg)](https://4.bp.blogspot.com/-3cnwsNu9CIg/WELPYhtPjBI/AAAAAAAAesM/BSthcp4e8_Y_doOG9OQcDZWlZ8FPePb6QCKgB/s1600/IMG_20161202_225158.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">Bahsettiğim hoparlörlerden 2 tanesi. Güçlendirici kartımız 15x2 W çıkış verebiliyor. Stereo için uygun.</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://3.bp.blogspot.com/-lZfvLLKoOds/WELPYiebBCI/AAAAAAAAesM/HhZx4hFM5DIK3axiaCFGtngXwOR24-zawCKgB/s320/IMG_20161202_225234.jpg)](https://3.bp.blogspot.com/-lZfvLLKoOds/WELPYiebBCI/AAAAAAAAesM/HhZx4hFM5DIK3axiaCFGtngXwOR24-zawCKgB/s1600/IMG_20161202_225234.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">PAM8610 çıkışlarını </div>

<div class="separator" style="clear: both; text-align: center;">[![](https://4.bp.blogspot.com/-jqvXF7Mpp2w/WELPYoY6a1I/AAAAAAAAesM/MALOAQLU3JstFaq54KCegZtA3WXTcBc6gCKgB/s320/IMG_20161202_225352.jpg)](https://4.bp.blogspot.com/-jqvXF7Mpp2w/WELPYoY6a1I/AAAAAAAAesM/MALOAQLU3JstFaq54KCegZtA3WXTcBc6gCKgB/s1600/IMG_20161202_225352.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">Hoparlörleri evimde kullanmaya başladım bile... Yeni bir projede görüşmek üzere...</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://2.bp.blogspot.com/-IL2M0Na9VIc/WELPYh5ftyI/AAAAAAAAesM/KmcsyK-Jlts6w_wfDL3luBVEP3baDuyQQCKgB/s400/IMG_20161202_233033.jpg)](https://2.bp.blogspot.com/-IL2M0Na9VIc/WELPYh5ftyI/AAAAAAAAesM/KmcsyK-Jlts6w_wfDL3luBVEP3baDuyQQCKgB/s1600/IMG_20161202_233033.jpg)</div>