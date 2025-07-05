---
title: '[TR] Lazer Haberleşmesi'
tags:
  - Electronics
  - Arduino
  - Laser Haberleşme
categories:
  - Electronics
  - Arduino
author: Mehmet Ozan Ünal
date: 2016-02-07 23:18:00
---

**Herkese Merhabalar,**

Son zamanlarda ışık ile veri aktarımına ilgi duymaktayım. Bu konuda bir şeyler
geliştirmek istiyorum. Bunun ilk aşaması olarak lazer ile haberleşme projemi
gerçekleştirdim. Bu projedeki amacım daha çok lazerin ve fotodiyotun cevap
süresi ölçmek yani maximum aktarım hızını hesaplamaktı. Aynı zamanda farklı
iletişim protokollerini denedim. İlerleyen projeler için lazerin de fotodiyotun
da yetersiz olduğunu görmüş oldum. Daha hızlı fotodiyotlarla ve ledlerle
denemelerim sürecek. Projenin bu aşamadaki haline gelirsek:

Gönderici modül basitçe bir arduino ve bir lazerden oluşuyor. Bir transistör ile
lazeri sürmeyi planlıyordum. Fakat lazer çok düşük akım çektiğini görünce
doğrudan arduinoun pinine bağladım.

![](20160205_171100.jpg)

![](20160205_171105.jpg)

Gönderici modül ise 1 fotodiot 1 direnç ve logic analyzerdan oluşuyor. Foto
diyot üzerine düşen lazer ışığına göre 1 veya 0 çıktı veriyor. Bu çıktıları
logic analyzer ile okuyup, istediğimiz iletişim protokolüne göre decode
edebiliyoruz.

![](20160205_171310.jpg)

Yukarıdaki çevre ışığının etkisini azaltmak için plastik bir kap ile kapatılmış
hali. Aşağıdaki ise kapatılmadan önceki hali.

![](20160205_171300.jpg)

Testimin sonuçları ise söyle: serial haberleşme ile maximum 19200 baud rate
kadar güvenilir bir iletişim oldu. Manchester decoding kullanarak ise 38400
baudrate kadar haberleşebildim.

![](1.png)
