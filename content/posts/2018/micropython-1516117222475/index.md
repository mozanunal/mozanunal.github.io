---
title: '[TR] Micropython Nedir?'
tags:
  - esp8266
  - micropython
categories:
  - Electronics
  - IoT
date: 2018-03-14 21:29:02
---

**Herkese Merhabalar,**

Bildiğiniz üzere gömülü sistemlerde programlama C ile yapılır. Bunun sebebi
makine diline en yakın dil olması bu nedenle sistem kaynaklarını az kullanarak
programlar geliştirilebilmesi ve gömülü sistemdeki donanımları kolay
programlanabilmesidir. Fakat buna rağmen işlemcilerin de güçlenmesiyle ve
ihtiyaçların da değişmesiyle farklı diller ile programlama yapabilmek için
farklı denemeler yapılmaktadır. Daha önce ESP8266 için scripting dili kullanma
denemeleri olmuştu. Bir ara Lua dili ile programlanabiliyordu. Hatta bir ara
beklediğimden çok daha popüler hale gelmişti. Lua dili bilmediğim için o
firmware test etme şansım olmadı. Fakat yakın zamanda benzer bir projenin favori
programlama dilim olan python ile de yapıldığını gördüm. ESP8266'nın python ile
programlanabildiğini görünce dayanamadım. Bu projenin ismi **micropython** ve
denediğimde micropython firmware oldukça hoşuma gitti o yüzden hakkında bir
şeyler yazmak istedim. ![upython](1516117467411.jpg) Micropython bir
**kickstarter** projesi olarak çıkmış ortaya. İlk olarak Stm32f4 boardları için
yapılmış. **Amacı mikroişlemciler üzerinde python çalıştırmak ve python shell
mantığıyla prototipleme yapabilmek.** Bildiğiniz üzere python en büyük
eksilerinden biri yüksek ram harcaması. Bu sorunu çözmek için bütün standart
python kütüphanleri micropython diye yeni bir yapıya portlanmış ve flashda ve
ramda kapladığı alan sorunları çözülmeye çalışılınmış.

Daha sonrasında işlemcilerin donanımla ile alakalı fonksiyonlarına ve çevre
birimlerine(peripheral) ulaşabilmek için işlemcilerin C SDK'leri kullanılarak
micropython driverları yazılmış. Yani **timer, adc, gpio, i2c, spi, uart** gibi
temel donanımları kullanabiliyorsunuz. Yazılan bu driverların üzerine bir de
sensör veya lcd, led driver gibi bileşenler için de driverlar yazılmış. Ortaya
geliştirme kartlarını kolayca yönetebileceğimiz sistemler çıkmış.

Benim micropytohon'ı direk satılan Pyboardlarda deneme şansım olmadı. Onun
yerine elimde bulunan ESP8266 üzerine yükledim. ESP8266 bildiğiniz üzere bir
wifi çipi. Network fonksiyonları da micropythonda bulunuyor. O yüzden ESP8266
kullanmak için biçilmiş kaftan.

https://docs.micropython.org/en/v1.9.2/esp8266/esp8266/tutorial/intro.html
Boarda firmware yüklemek için esptool gereklidir. Aşağıdaki komut ile esptool
yükleyebilirsiniz:

```sh
pip install esptool
```

![esptool](1517947480163.png)

İlk yüklemede flashın tamamen temizlenmesi tavsiye edilir. Com numarasını
değiştirmeyi unutmayın. Daha sonrasında
[buradan](https://micropython.org/download) indirilen elinizdeki ESP ile uyumlu
firmware boarda devamındaki komut ile yüklenir.

```sh
esptool --port COM3 erase_flash

esptool --port COM3 --baud 460800 write_flash --flash_size=detect 0 esp8266-20170108-v1.8.7.bin
```

Kurulumu tamamladıktan sonra putty ile aynı serial porta bağlanıyoruz. Karşımıza
python terminali çıkıyor.
https://docs.micropython.org/en/v1.9.2/esp8266/esp8266/tutorial/index.html

![image](1517947735177.png)

örnek olarak:

```python
## File operasyonları
>>> f = open('data.txt', 'w')
>>> f.write('some data')
9
>>> f.close()
```

- upython standart kütüphanesini için
  [buradan](https://docs.micropython.org/en/v1.9.2/esp8266/library/index.html#python-standard-libraries-and-micro-libraries)
  inceleyebilirsiniz.
- [cihaza özel kütüphaneler](https://docs.micropython.org/en/v1.9.2/esp8266/library/esp.html)
- Web repl kullanarak wifi üzerinden geliştirmenizi yapabilirsiniz.
  [Web repl aktifleştirmek ile alakalı ayrıntılı bilgi için](https://learn.adafruit.com/micropython-basics-esp8266-webrepl/access-webrepl)

![Web Repl](1517956338699.png)

Referanslar:

- https://docs.micropython.org/en/latest/esp8266/esp8266/quickref.html
- https://github.com/espressif/esptool
- https://docs.micropython.org/en/latest/esp8266/library/esp.html
