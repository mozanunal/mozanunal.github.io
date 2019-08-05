title: |
  ESP8266 ile Kişisel Meteoroloji İstasyonu
tags:
  - Elektronik
  - Arduino
  - Dht11
  - ESP8266
  - Html
  - MQ135
  - Yağış sensörü
categories:
  - Elektronik
  - IOT
author: Mehmet Ozan Ünal
date: 2015-09-30 02:51:00
---
**Herkese Merhabalar,**

Bugünkü yazımda ESP8266 Wifi modülünün kullanımına yönelik yaptığım uygulamayı anlatacağım. Bu modülü daha önceki [şu yazımda](https://mozanunal.com/2015/03/esp8266-modulu-html-server/) anlatmıştım. Ucuz fiyatına rağmen çok yetenekli bir modül. O yazımda ESP8266 Access Point olarak kullanılmıştı.Bu yazımdaki uygulamamda, hali hazırda var olan wifi ağına da bağlanabilecek. Bu sayede wifi olan yerlerde direk wifi üzerinden verilere ulaşılabilinirken, wifi çekmediği yerlerde ESP8266'nın kendi oluşturduğu Access Point üzerinden ulaşabilecek. Bilgilere istersek web browser üzerinden direk IP adresini yazarak, istersek aşağıda linkini verdiğim kendi yazdığım android programını kullanarak ulaşabileceğiz.  

Temel olarak proje şu şekilde çalışıyor: ESP8266 gerekli ayarlarda başlatılır. Belli aralıklarla Sıcaklık- Nem, Yağış ve CO2 sensöründen veri alınır. Daha sonra ESP üzerinde oluşturulan http server güncellenir.  
<!-- more -->  

**Kodlar**

[Kodları ve gerekli 2 kütüphaneyi bu linkten indirebilirsiniz.](https://drive.google.com/file/d/0B5j__Lyt9ozbTnpTSnFqMXN0ZmM/view?usp=sharing)

**Malzemeler ve Bağlantılar**

Arduino Nano  
DHT11 sıcaklık ve nem sensörü
Yağmur sensörü
MQ135 Gaz sensörü
3.3v-5v Logic Conventer
ESP8266
2 Adet Diyot

ESP8266 3.3 volt ile çalışıyor fakat arduinonun pinleri 5 volt giriş çıkış veriyor. Bu sorunun çözmek için Logic Conventer kullandım. Arduino Nano'nun 3.3 Volt pininden çok yüksek güç çekilemiyor bu yüzden ESP8266'yı direk bu pinden besleyemedim onun yerine.5 volt pininden çıkış aldım araya 2 adet diyot bağladım. Diyotlar voltajı 0.7'şer volt düşüyor. Bu sayede ESP'nin üzerindeki voltaj  3.6 volt oluyor. Bu voltajda ESP sorunsuz çalıştı. *Zaman sorunundan dolayı böyle pratik bir çözüm yaptım, benim tavsiyem uygun güç değerinde 3.3 volt bir regülatör almanızdır.*

**DHT11-Arduino**

VCC-> 5V
GND-> GND
OUT-> D4

**MQ135-Arduino**


VCC-> 5V
GND-> GND
A0-> A1

**Yağmur Sensörü-Arduino**

VCC-> 5V
GND-> GND
A0-> A3

**ESP8266**

VCC->5 volt ama 2 diyot üzerinden
GND-> GND
RX-> D11
TX-> D10
CH_PD->  3.3 V

Logic Conventer üzerinden

![](https://3.bp.blogspot.com/-UsQPPk3G-MI/VgnJI9pRNrI/AAAAAAAAN30/7GegSuJOKME/s720/IMG_20150925_212341.jpg)

![](https://2.bp.blogspot.com/-oiJYi4TyoMw/VgnJIzmC2wI/AAAAAAAAN30/7WTyKCPeXfs/s720/IMG_20150925_212313.jpg)

![](https://2.bp.blogspot.com/-7MZxz-XQeTY/VgnJI1fHQaI/AAAAAAAAN30/v7xnKD6yuRY/s720/IMG_20150925_212355.jpg)

Bu ekran alıntıları evimde hali hazırda varolan wifi bağlı iken aldığım verilere aittir.

![](https://3.bp.blogspot.com/-ftOtLZRfSes/VgnJo1gLsVI/AAAAAAAAN38/AckuZXojd20/s720/Screenshot_2015-09-21-03-29-17.png)

![](https://1.bp.blogspot.com/-6ZQQErWn0kk/VgnJo0T65TI/AAAAAAAAN38/XBIjLV4sOSs/s720/Screenshot_2015-09-21-03-28-56.png)

[Android programını buradan indirebilirsiniz.](https://drive.google.com/file/d/0B5j__Lyt9ozbR3dLVTI1aUluaDQ/view?usp=sharing)

ESP8266 wifi bulamadığı zaman kendi bağlantı noktası kurar ve o wifi üzerinden verileri alabiliriz. Bu ekran görüntüleri ise wifi olmadığı bir yerdeki kullanımına aittir.

![](https://2.bp.blogspot.com/-bvwApOI45EQ/VgnJo8LjAmI/AAAAAAAAN38/zZT_0rPKcj0/s720/Screenshot_2015-09-21-03-32-30.png)

![](https://3.bp.blogspot.com/--MXnSlm1V-w/VgnJo5ZT8eI/AAAAAAAAN38/MdtZNLbApng/s720/Screenshot_2015-09-21-03-32-20.png)

**Kutunun Yapılışından Fotoğraflar**

İstasyona uygun kolay yapılabilecek bir kutu yapmaya karar verdim. Kutu gerekli idi çünkü yağmur sensörü yağmura temas etmeli fakat diğer sensörler ve arduino suyla temas etmemeli. Bir diğer sıkıntı ise gaz sensörünün gaz ölçümü için havayı ısıtması. Bu sensörün de sıcaklık sensöründen yalıtılması gereklidir. Bu sorunları çözmek için gaz sensörü kabın altında bıraktım bu sayede hem diğer sensörleri etkilemeyecek hem de yağmur yağarsa yağmurdan korunacak. Yağmur sensörü de kutunun üst tarafına monte ettim.

Açıkca söylemek gerekirse kutum çok da güzel bir kutu olmadı ama benim deneme sürecim boyunca işimi görmeme yetti. Kutu konusunu geliştirmem gerektiğimin farkındayım ama :)

Tekrar görüşmek üzere...

![](https://4.bp.blogspot.com/-RGH6ITJsFyE/VgnKily7kAI/AAAAAAAAN4I/9hpkiDRVoGI/s720/IMG_20150927_051714.jpg)

![](https://4.bp.blogspot.com/-UT7zNRBiyOo/VgnKij25wkI/AAAAAAAAN4I/5KahfdHf-9M/s720/IMG_20150927_051020.jpg)

![](https://2.bp.blogspot.com/-sFqrsX7Z2AY/VgnKilp7m9I/AAAAAAAAN4I/qVjUq3gUgAc/s720/IMG_20150927_051025.jpg)

![](https://3.bp.blogspot.com/-XlJhaF-ukVg/VgnKisqzSSI/AAAAAAAAN4I/v0GvktwQYxc/s720/IMG_20150927_052253.jpg)

![](https://2.bp.blogspot.com/-Hi9uNCDzUZA/VgnKivThhwI/AAAAAAAAN4I/p0qCZvtBTo8/s720/IMG_20150927_052257.jpg)

**Kullanımdan Fotoğraflar**

![](https://2.bp.blogspot.com/-i-Hnpx085Y0/VgnKqjbYhGI/AAAAAAAAN4Q/hdOeMIs6FyA/s720/IMG_20150927_052636.jpg)

![](https://3.bp.blogspot.com/-8fMHQZUC4BY/VgnKqnuVNtI/AAAAAAAAN4Q/JnbNiOKbmWU/s720/IMG_20150927_052610.jpg)

![](https://4.bp.blogspot.com/-6lK1r9Lwnqo/VgnKqnbjVWI/AAAAAAAAN4Q/Fvf8tIzwfd0/s720/IMG_20150927_092540.jpg)

![](https://4.bp.blogspot.com/-Que5jw7wr_M/VgnKqm2KyCI/AAAAAAAAN4Q/gyI_bqgkNDI/s720/IMG_20150927_052528.jpg)

![](https://4.bp.blogspot.com/-GMjB4GNfzxA/VgnKqnih3_I/AAAAAAAAN4Q/_8x55IdwthM/s720/IMG_20150927_092548.jpg)