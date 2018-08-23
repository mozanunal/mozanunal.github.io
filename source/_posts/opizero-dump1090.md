---
title: Orange Pi Zero üzerinde Dump1090 Çalıştırmak
tags:
  - Software Defined Radio
  - sdr
  - dump1090
  - orangepizero
categories:
  - İşaret İşleme
  - DSP
date: 2018-08-20 15:14:07
---

**Herkese merhabalar,**
Bugünkü yazımda dump1090 programını nasıl bir orange pi zero üzerinde çalıştırabiliriz ondan bahsedeceğim. 
Bildiğiniz gibi dump1090 sdr kullanarak uçakların adsb yayınlarını çözmeye yarayan bir kod parçası. Bu projeyi gerçekleştirdiğim mini pc olarak orange pi zero seçememin sebebi ise maliyeti ve kompaklığı. 5-10 dolara satın alınabiliniyor ve boyutları gerçekten küçük.

![](/images/1534768337583.png)

## Rtlsdr Sürücüsünün Kurulması
Ben orange pi zeroyu armbian işletim sistemi ve mainline kernel ayarlarıyla kullanıyorum. Sistemde uname -a çalıştırdığımda aldığım çıktı aşağıdaki gibi:
```
Linux orangepizero 3.4.113-sun8i #16 SMP PREEMPT Tue Jun 13 14:15:57 CEST 2017 armv7l armv7l armv7l GNU/Linux
```

İlk olarak rtlsdr orange pi ile sorunsuz çalıştırmalıyız bunun için gerekli kütüphaneleri kuruyoruz.

```
sudo apt install librtlsdr-dev
sudo apt install rtl-sdr
```

Sonra linux kernerlındaki generic dvb sürücülerini reaktifleştirmemiz gerekli.

```
blacklist dvb_usb
blacklist dvb_core
blacklist dvb_usb_rtl2832u
blacklist dvb_usb_rtl28xxu
blacklist e4000
blacklist rtl2832
```

Rtlsdr çalışıp çalışmadığını rtl_test komutu ile test edebiliriz.

### Dump1090 kurulumu ve kullanım

Dump1090 kurmak çok basit. Bir adet paket gerekli devamında git üzerinden çekip make ile derliyoruz.

```
sudo apt install pkg-config
git clone https://github.com/antirez/dump1090
cd dump1090
make
```

Çalıştırmak için genelde aşağıdaki satırı kullanıyorum.

```
./dump1090 --net --interactive --aggressive
```

![](/images/1534768674064.png)

Bu komut ile web arayüzünü aktifleştirmiş oluyoruz ve interaktif bir terminal çıktımız oluyor. "aggressive" ile de daha düşük isabet ile tespit etse de arayüzlerde çıktı vermesini istemiş oluyoruz.
Orange pi ipsini bulmak için ifconfig komutu kullanılabilir. Web arayüzüne de üzerinden <opizeroip>:8080 üzerinden ulaşabiliriz. 


