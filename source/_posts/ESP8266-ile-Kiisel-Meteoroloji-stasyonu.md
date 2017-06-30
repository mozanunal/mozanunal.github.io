title: |
  ESP8266 ile Kişisel Meteoroloji İstasyonu
tags:
  - Arduino Projeleri
  - Dht11
  - ESP8266
  - Html
  - MQ135
  - Yağış sensörü
categories:
  - IOT Projeleri
author: Mehmet Ozan Ünal
date: 2015-09-30 02:51:00
---
**Herkese Merhabalar,**  
Bugünkü yazımda ESP8266 Wifi modülünün kullanımına yönelik yaptığım uygulamayı anlatacağım. Bu modülü daha önceki [şu yazımda](http://mozanunal.blogspot.com.tr/2015/03/esp8266-modulu-html-server.html) anlatmıştım. Ucuz fiyatına rağmen çok yetenekli bir modül. O yazımda ESP8266 Access Point olarak kullanılmıştı.Bu yazımdaki uygulamamda, hali hazırda var olan wifi ağına da bağlanabilecek. Bu sayede wifi olan yerlerde direk wifi üzerinden verilere ulaşılabilinirken, wifi çekmediği yerlerde ESP8266'nın kendi oluşturduğu Access Point üzerinden ulaşabilecek. Bilgilere istersek web browser üzerinden direk IP adresini yazarak, istersek aşağıda linkini verdiğim kendi yazdığım android programını kullanarak ulaşabileceğiz.  
      Temel olarak proje şu şekilde çalışıyor: ESP8266 gerekli ayarlarda başlatılır. Belli aralıklarla Sıcaklık- Nem, Yağış ve CO2 sensöründen veri alınır. Daha sonra ESP üzerinde oluşturulan http server güncellenir.  
<!-- more -->  

<div style="text-align: center;">**Kodlar**</div>

<div style="text-align: center;">[Kodları ve gerekli 2 kütüphaneyi bu linkten indirebilirsiniz.](https://drive.google.com/file/d/0B5j__Lyt9ozbTnpTSnFqMXN0ZmM/view?usp=sharing)</div>

<div style="text-align: center;">**Malzemeler ve Bağlantılar**  
Arduino Nano  

<div style="text-align: center;">DHT11 sıcaklık ve nem sensörü</div>

<div style="text-align: center;">Yağmur sensörü</div>

<div style="text-align: center;">MQ135 Gaz sensörü</div>

<div style="text-align: center;">3.3v-5v Logic Conventer</div>

<div style="text-align: center;">ESP8266</div>

<div style="text-align: center;">2 Adet Diyot</div>

<div style="text-align: center;">ESP8266 3.3 volt ile çalışıyor fakat arduinonun pinleri 5 volt giriş çıkış veriyor. Bu sorunun çözmek için Logic Conventer kullandım. Arduino Nano'nun 3.3 Volt pininden çok yüksek güç çekilemiyor bu yüzden ESP8266'yı direk bu pinden besleyemedim onun yerine.5 volt pininden çıkış aldım araya 2 adet diyot bağladım. Diyotlar voltajı 0.7'şer volt düşüyor. Bu sayede ESP'nin üzerindeki voltaj  3.6 volt oluyor. Bu voltajda ESP sorunsuz çalıştı. *Zaman sorunundan dolayı böyle pratik bir çözüm yaptım, benim tavsiyem uygun güç değerinde 3.3 volt bir regülatör almanızdır.*</div>

<div style="text-align: left;">

<div style="text-align: center;">**DHT11-Arduino**</div>

</div>

<div style="text-align: left;">

<div style="text-align: center;">VCC-> 5V</div>

</div>

<div style="text-align: left;">

<div style="text-align: center;">GND-> GND</div>

</div>

<div style="text-align: left;">

<div style="text-align: center;">OUT-> D4</div>

<div style="text-align: center;">**MQ135-Arduino**</div>

<div>

<div style="text-align: center;">VCC-> 5V</div>

</div>

<div>

<div style="text-align: center;">GND-> GND</div>

</div>

<div>

<div style="text-align: center;">A0-> A1</div>

</div>

<div style="text-align: center;">**Yağmur Sensörü-Arduino**</div>

<div>

<div style="text-align: center;">VCC-> 5V</div>

</div>

<div>

<div style="text-align: center;">GND-> GND</div>

</div>

<div>

<div style="text-align: center;">A0-> A3</div>

</div>

<div style="text-align: center;">**ESP8266**</div>

<div style="text-align: center;">VCC->5 volt ama 2 diyot üzerinden</div>

<div style="text-align: center;">GND-> GND</div>

<div style="text-align: center;">RX-> D11**</div>

<div style="text-align: center;">TX-> D10**</div>

<div style="text-align: center;"><span style="text-align: left;">CH_PD->  3.3 V</span></div>

<div style="text-align: center;"><span style="text-align: left;">  
</span></div>

<div style="text-align: center;"><span style="text-align: left;">**: </span> Logic Conventer üzerinden</div>

</div>

</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://3.bp.blogspot.com/-UsQPPk3G-MI/VgnJI9pRNrI/AAAAAAAAN30/7GegSuJOKME/s320/IMG_20150925_212341.jpg)](http://3.bp.blogspot.com/-UsQPPk3G-MI/VgnJI9pRNrI/AAAAAAAAN30/7GegSuJOKME/s1600/IMG_20150925_212341.jpg)[![](http://2.bp.blogspot.com/-oiJYi4TyoMw/VgnJIzmC2wI/AAAAAAAAN30/7WTyKCPeXfs/s320/IMG_20150925_212313.jpg)](http://2.bp.blogspot.com/-oiJYi4TyoMw/VgnJIzmC2wI/AAAAAAAAN30/7WTyKCPeXfs/s1600/IMG_20150925_212313.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[  
](http://2.bp.blogspot.com/-7MZxz-XQeTY/VgnJI1fHQaI/AAAAAAAAN30/v7xnKD6yuRY/s1600/IMG_20150925_212355.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://2.bp.blogspot.com/-7MZxz-XQeTY/VgnJI1fHQaI/AAAAAAAAN30/v7xnKD6yuRY/s320/IMG_20150925_212355.jpg)](http://2.bp.blogspot.com/-7MZxz-XQeTY/VgnJI1fHQaI/AAAAAAAAN30/v7xnKD6yuRY/s1600/IMG_20150925_212355.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">Bu ekran alıntıları evimde hali hazırda varolan wifi bağlı iken aldığım verilere aittir.</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://3.bp.blogspot.com/-ftOtLZRfSes/VgnJo1gLsVI/AAAAAAAAN38/AckuZXojd20/s320/Screenshot_2015-09-21-03-29-17.png)](http://3.bp.blogspot.com/-ftOtLZRfSes/VgnJo1gLsVI/AAAAAAAAN38/AckuZXojd20/s1600/Screenshot_2015-09-21-03-29-17.png)[![](http://1.bp.blogspot.com/-6ZQQErWn0kk/VgnJo0T65TI/AAAAAAAAN38/XBIjLV4sOSs/s320/Screenshot_2015-09-21-03-28-56.png)](http://1.bp.blogspot.com/-6ZQQErWn0kk/VgnJo0T65TI/AAAAAAAAN38/XBIjLV4sOSs/s1600/Screenshot_2015-09-21-03-28-56.png)</div>

<div class="separator" style="clear: both; text-align: center;">[Android programını buradan indirebilirsiniz.](https://drive.google.com/file/d/0B5j__Lyt9ozbR3dLVTI1aUluaDQ/view?usp=sharing)</div>

<div class="separator" style="clear: both; text-align: center;">ESP8266 wifi bulamadığı zaman kendi bağlantı noktası kurar ve o wifi üzerinden verileri alabiliriz. Bu ekran görüntüleri ise wifi olmadığı bir yerdeki kullanımına aittir.</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://2.bp.blogspot.com/-bvwApOI45EQ/VgnJo8LjAmI/AAAAAAAAN38/zZT_0rPKcj0/s320/Screenshot_2015-09-21-03-32-30.png)](http://2.bp.blogspot.com/-bvwApOI45EQ/VgnJo8LjAmI/AAAAAAAAN38/zZT_0rPKcj0/s1600/Screenshot_2015-09-21-03-32-30.png)[![](http://3.bp.blogspot.com/--MXnSlm1V-w/VgnJo5ZT8eI/AAAAAAAAN38/MdtZNLbApng/s320/Screenshot_2015-09-21-03-32-20.png)](http://3.bp.blogspot.com/--MXnSlm1V-w/VgnJo5ZT8eI/AAAAAAAAN38/MdtZNLbApng/s1600/Screenshot_2015-09-21-03-32-20.png)</div>

<div class="separator" style="clear: both; text-align: center;">**Kutunun Yapılışından Fotoğraflar**</div>

<div class="separator" style="clear: both; text-align: center;">İstasyona uygun kolay yapılabilecek bir kutu yapmaya karar verdim. Kutu gerekli idi çünkü yağmur sensörü yağmura temas etmeli fakat diğer sensörler ve arduino suyla temas etmemeli. Bir diğer sıkıntı ise gaz sensörünün gaz ölçümü için havayı ısıtması. Bu sensörün de sıcaklık sensöründen yalıtılması gereklidir. Bu sorunları çözmek için gaz sensörü kabın altında bıraktım bu sayede hem diğer sensörleri etkilemeyecek hem de yağmur yağarsa yağmurdan korunacak. Yağmur sensörü de kutunun üst tarafına monte ettim.</div>

<div class="separator" style="clear: both; text-align: center;">Açıkca söylemek gerekirse kutum çok da güzel bir kutu olmadı ama benim deneme sürecim boyunca işimi görmeme yetti. Kutu konusunu geliştirmem gerektiğimin farkındayım ama :)</div>

<div class="separator" style="clear: both; text-align: center;">Tekrar görüşmek üzere...</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://4.bp.blogspot.com/-RGH6ITJsFyE/VgnKily7kAI/AAAAAAAAN4I/9hpkiDRVoGI/s320/IMG_20150927_051714.jpg)](http://4.bp.blogspot.com/-RGH6ITJsFyE/VgnKily7kAI/AAAAAAAAN4I/9hpkiDRVoGI/s1600/IMG_20150927_051714.jpg) </div>

<div class="separator" style="clear: both; text-align: center;">[![](http://4.bp.blogspot.com/-UT7zNRBiyOo/VgnKij25wkI/AAAAAAAAN4I/5KahfdHf-9M/s320/IMG_20150927_051020.jpg)](http://4.bp.blogspot.com/-UT7zNRBiyOo/VgnKij25wkI/AAAAAAAAN4I/5KahfdHf-9M/s1600/IMG_20150927_051020.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://2.bp.blogspot.com/-sFqrsX7Z2AY/VgnKilp7m9I/AAAAAAAAN4I/qVjUq3gUgAc/s320/IMG_20150927_051025.jpg)](http://2.bp.blogspot.com/-sFqrsX7Z2AY/VgnKilp7m9I/AAAAAAAAN4I/qVjUq3gUgAc/s1600/IMG_20150927_051025.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://3.bp.blogspot.com/-XlJhaF-ukVg/VgnKisqzSSI/AAAAAAAAN4I/v0GvktwQYxc/s320/IMG_20150927_052253.jpg)](http://3.bp.blogspot.com/-XlJhaF-ukVg/VgnKisqzSSI/AAAAAAAAN4I/v0GvktwQYxc/s1600/IMG_20150927_052253.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://2.bp.blogspot.com/-Hi9uNCDzUZA/VgnKivThhwI/AAAAAAAAN4I/p0qCZvtBTo8/s320/IMG_20150927_052257.jpg)](http://2.bp.blogspot.com/-Hi9uNCDzUZA/VgnKivThhwI/AAAAAAAAN4I/p0qCZvtBTo8/s1600/IMG_20150927_052257.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">**Kullanımdan Fotoğraflar**</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://2.bp.blogspot.com/-i-Hnpx085Y0/VgnKqjbYhGI/AAAAAAAAN4Q/hdOeMIs6FyA/s320/IMG_20150927_052636.jpg)](http://2.bp.blogspot.com/-i-Hnpx085Y0/VgnKqjbYhGI/AAAAAAAAN4Q/hdOeMIs6FyA/s1600/IMG_20150927_052636.jpg)[![](http://3.bp.blogspot.com/-8fMHQZUC4BY/VgnKqnuVNtI/AAAAAAAAN4Q/JnbNiOKbmWU/s320/IMG_20150927_052610.jpg)](http://3.bp.blogspot.com/-8fMHQZUC4BY/VgnKqnuVNtI/AAAAAAAAN4Q/JnbNiOKbmWU/s1600/IMG_20150927_052610.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://4.bp.blogspot.com/-6lK1r9Lwnqo/VgnKqnbjVWI/AAAAAAAAN4Q/Fvf8tIzwfd0/s320/IMG_20150927_092540.jpg)](http://4.bp.blogspot.com/-6lK1r9Lwnqo/VgnKqnbjVWI/AAAAAAAAN4Q/Fvf8tIzwfd0/s1600/IMG_20150927_092540.jpg)[![](http://4.bp.blogspot.com/-Que5jw7wr_M/VgnKqm2KyCI/AAAAAAAAN4Q/gyI_bqgkNDI/s320/IMG_20150927_052528.jpg)](http://4.bp.blogspot.com/-Que5jw7wr_M/VgnKqm2KyCI/AAAAAAAAN4Q/gyI_bqgkNDI/s1600/IMG_20150927_052528.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://4.bp.blogspot.com/-GMjB4GNfzxA/VgnKqnih3_I/AAAAAAAAN4Q/_8x55IdwthM/s320/IMG_20150927_092548.jpg)](http://4.bp.blogspot.com/-GMjB4GNfzxA/VgnKqnih3_I/AAAAAAAAN4Q/_8x55IdwthM/s1600/IMG_20150927_092548.jpg)</div>