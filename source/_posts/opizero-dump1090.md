title: '[TR] Orange Pi Zero Üzerinde Dump1090 Çalıştırmak'
tags:
  - Software Defined Radio
  - sdr
  - dump1090
  - orangepizero
categories:
  - Signal Processing
  - DSP
date: 2018-08-20 15:14:07
---

**Herkese merhabalar,**
Bugünkü yazımda dump1090 programını nasıl bir orange pi zero üzerinde çalıştırabiliriz ondan bahsedeceğim. Bildiğiniz gibi dump1090 sdr kullanarak uçakların adsb yayınlarını çözmeye yarayan bir kod parçası. Bu projeyi gerçekleştirdiğim mini pc olarak orange pi zero seçmemin sebebi ise maliyeti ve kompaklığı. 5-10 dolara satın alınabiliniyor ve boyutları gerçekten küçük.

![](/images/1534768337583.png)

## Rtlsdr Sürücüsünün Kurulması
Ben orange pi zeroyu armbian işletim sistemi ve mainline kernel ile kullanıyorum. Sistemde uname -a çalıştırdığımda aldığım çıktı aşağıdaki gibi:
```sh
Linux orangepizero 3.4.113-sun8i #16 SMP PREEMPT Tue Jun 13 14:15:57 CEST 2017 armv7l armv7l armv7l GNU/Linux
```

İlk olarak rtlsdr orange pi ile sorunsuz çalıştırmalıyız bunun için gerekli kütüphaneleri kuruyoruz.

```sh
sudo apt install librtlsdr-dev
sudo apt install rtl-sdr
```

Sonra linux kernerlındaki generic dvb sürücülerini reaktifleştirmemiz gerekli. Aşağıdaki komut ile değişiklik yapacağımız dosyayı açıyoruz.
```sh
nano /etc/modprobe.d/rtl-sdr-blacklist.conf
```
Aşağıdaki satırları açtığımız dosyaya ekleyelim. Burada yapığımız şey aslında şu. Normalde bu cihazlar bilgisayardan tv izlemek için kullanılıyor. Bu driver da linux kernelında zaten var. Eklediğimiz satırlar driverı etkisiz hale getiriyor. Driver olarak cihazı, rtlsdr olarak kullanmak için yazılmış driverı aktif olarak kullanabilmemizi sağlıyor.

```sh
blacklist dvb_usb
blacklist dvb_core
blacklist dvb_usb_rtl2832u
blacklist dvb_usb_rtl28xxu
blacklist e4000
blacklist rtl2832
```

Rtlsdr çalışıp çalışmadığını `rtl_test` komutu ile test edebiliriz.

### Dump1090 kurulumu ve kullanım

Dump1090 kurmak çok basit. Bir adet paket gerekli devamında git üzerinden çekip `make` ile derliyoruz.

```sh
sudo apt install pkg-config
git clone https://github.com/antirez/dump1090
cd dump1090
make
```

Çalıştırmak için genelde aşağıdaki satırı kullanıyorum.

```sh
./dump1090 --net --interactive --aggressive
```

![](/images/1534768674064.png)

Bu komut ile web arayüzünü aktifleştirmiş oluyoruz ve interaktif bir terminal çıktımız oluyor. "aggressive" ile de daha düşük isabet ile tespit etse de arayüzlerde çıktı vermesini istemiş oluyoruz.
Orange pi ipsini bulmak için ifconfig komutu kullanılabilir. Web arayüzüne de üzerinden `opizeroip:8080` üzerinden ulaşabiliriz. Rtlsdr ile gelen anteni $lambda/4$ uzunlukta keserek daha verimli sonuçlar elde edebilirsiniz. 1090 Mhz için anten boyu 69mm olmalıdır. Ben açık alanda yaklaşık 250 km uzaklıktan veri almayı başardım. Böyle küçük bir kurulum ile bu kadar büyük bir uzaklıktan veri alabilmek gerçekten oldukça keyifliydi. Tekrar görüşmek üzere...

![](/images/dump1090_1.jpg)


