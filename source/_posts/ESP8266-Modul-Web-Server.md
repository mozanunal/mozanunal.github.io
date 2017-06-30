title: |
  ESP8266 Modulü Web Server
tags:
  - Arduino Projeleri
  - ESP8266
  - Arduino Wifi Modulü
  - internet of Things
categories:
  - IOT Projeleri
author: Mehmet Ozan Ünal
date: 2015-03-12 00:49:00
---
**Merhaba arkadaşlar,**

Bugünkü yazımda ESP8266 modüllerinden bahsetmek istiyorum. Bu modül seri port üzerinden haberleşen wifi modülü. Fiyatı yaklaşık 5 $ özelliklerini gördüğünüz fiyatından çok daha fazlasını hakkettiğini göreceksiniz. Özelliklerine geçecek olursak;  
<!-- more -->  
*   <span style="border: 0px; margin: 0px; outline: 0px; padding: 0px;"><span style="font-family: inherit;">802.11 b/g/n desteği</span></span>

*   <span style="border: 0px; margin: 0px; outline: 0px; padding: 0px;"><span style="font-family: inherit;">Wi-Fi Direct (P2P) Desteği</span></span>

*   <span style="border: 0px; margin: 0px; outline: 0px; padding: 0px;"><span style="font-family: inherit;">Dahili TCP/IP protokol yığını</span></span>

*   <span style="border: 0px; margin: 0px; outline: 0px; padding: 0px;"><span style="font-family: inherit;">+19,5dBm çıkış gücü (802.11b modunda)</span></span>

*   <span style="border: 0px; margin: 0px; outline: 0px; padding: 0px;"><span style="font-family: inherit;">Kaçak akım < 10uA</span></span>

*   <span style="border: 0px; margin: 0px; outline: 0px; padding: 0px;"><span style="font-family: inherit;">Dahili düşük güç tüketimine sahip 32-bit'lik işlemci</span></span>

*   <span style="border: 0px; margin: 0px; outline: 0px; padding: 0px;"><span style="font-family: inherit;">SDIO 1.1/2.0, SPI ve UART desteği</span></span>

*   <span style="border: 0px; margin: 0px; outline: 0px; padding: 0px;"><span style="font-family: inherit;">STBC, 1x1 MIMO, 2x1 MIMO</span></span>

*   <span style="border: 0px; margin: 0px; outline: 0px; padding: 0px;"><span style="font-family: inherit;">Uyanma ve veri paketi alma süresi < 2ms</span></span>

*   <span style="border-image-outset: initial; border-image-repeat: initial; border-image-slice: initial; border-image-source: initial; border-image-width: initial; border: 0px; margin: 0px; outline: 0px; padding: 0px;"><span style="font-family: inherit;">Stand-by durumunda güç tüketimi < 1mW</span></span>

[![](http://2.bp.blogspot.com/-0Zj0pppdHE8/VQCjOubYydI/AAAAAAAAH3A/4q0DLzISFEw/s1600/pr_01_2666_max.jpg)](http://2.bp.blogspot.com/-0Zj0pppdHE8/VQCjOubYydI/AAAAAAAAH3A/4q0DLzISFEw/s1600/pr_01_2666_max.jpg)
Modülümüz yaygın tüm wifi protokollerini destekliyor, yerel ağdan ve internet üzerinden yapabileceğimiz binlerce çeşit uygulama için oldukça elverişli. Üzerinde 32 bitlik işlemci mevcut. 19.5 dBm çıkış gücüne sahip, full güç ile çalıştırılırsa antensiz 400 metreden fazla antenli ise 4km'den fazla uzaklıktan sinyal alınabildiği test edilmiş bu fiyat ve bu boyutta bir modül için rakamlar çok iyi.[Buradan ](https://www.youtube.com/watch?v=7BYdZ_24yg0) mesafe testi videosunu izleyebilirsiniz. Boyut konusuna gelecek olursak boyutları 2.1 cmX 1.3 cm, üzerinde dahili PCB anten bulunuyor.  
[![](http://2.bp.blogspot.com/-8cWa4VYZzDg/VQCj86vmvSI/AAAAAAAAH3g/l68Z0gksycU/s1600/IMG_20150311_214258.jpg)](http://2.bp.blogspot.com/-8cWa4VYZzDg/VQCj86vmvSI/AAAAAAAAH3g/l68Z0gksycU/s1600/IMG_20150311_214258.jpg)

**Internet of Things**

Esp8266'nın özellikleri böyle fakat biz ne için kullanacağız. 1999 yılında ortaya atılan son yıllarda ise popülerleşen bir kavram var, "Internet of Things" yani Türkçesi" Nesnelerin İnterneti" kavramı, insanlar dışında diğer eşyaların da (buz dolabı, ocak, klima, evin kapısı...) bir iletişim ağına sahip olup, birbiriyle haberleşmesi. İşte bu küçük wifi modülleri bu noktada devreye giriyor. Kullanımları basit, düşük maliyetli, enerji tüketimleri düzenlenebilir olan bu modüller, kolayca herhangi bir eşyamızı "Online" hale getirebilir, bilgisayar telefon gibi herhangi bir ağa bağlanabilen aletlerle kontrol edebilen şeylere dönüştürebilir. </span><span style="line-height: 20px;">"Online" eşyalarımızı haberleştirerek daha akıllı, daha efektif hale getirebilir.Aynı zamanda </span><span style="line-height: 20px;">hali hazırda var olan wifi ağlarını kullanmaları modullerin entegre edilebilirliğini artırıyor.</span><span style="line-height: 20px;"> </span></div>

<div><span style="line-height: 20px;"><span style="font-family: inherit;">Bu yazıda Esp8266 modülünün kullanımına sadece bir giriş yapacağız, modülümüzle HTML sayfası oluşturup, bilgisayarımızdan bağlanacağız. M</span></span>odülümüzün kullanımına gelecek olursak pin dizilimi aşağıdaki gibidir.</div>

[![](http://3.bp.blogspot.com/-JsP0i89OKhA/VQChGI9uh3I/AAAAAAAAH1I/4BA5rtCIZNs/s1600/ESP8266-Pinout-300x124.png)](http://3.bp.blogspot.com/-JsP0i89OKhA/VQChGI9uh3I/AAAAAAAAH1I/4BA5rtCIZNs/s1600/ESP8266-Pinout-300x124.png)

<div class="separator" style="clear: both; text-align: left;">Bizim yapacağımız bağlantılar ise şu şekilde olmalıdır.</div>

<div class="separator" style="clear: both; text-align: left;">VCC---> Arduino 3.3 V</div>

<div class="separator" style="clear: both; text-align: left;">GND---> Arduino GND</div>

<div class="separator" style="clear: both; text-align: left;">RX----->Serial 1 TX</div>

<div class="separator" style="clear: both; text-align: left;">TX----->Serial 1 RX</div>

<div class="separator" style="clear: both; text-align: left;">CH_PD> Arduino 3.3 V</div>

[![](http://1.bp.blogspot.com/-r1JDCcLaMMM/VQCjDjUq--I/AAAAAAAAH2o/v6Ff_kvRWhA/s1600/IMG_20150311_214231.jpg)](http://1.bp.blogspot.com/-r1JDCcLaMMM/VQCjDjUq--I/AAAAAAAAH2o/v6Ff_kvRWhA/s1600/IMG_20150311_214231.jpg)

<div class="" style="clear: both; text-align: left;"><span style="color: red;">Önemli Uyarı: Bu modül 3.3 volt ile çalışmaktadır ve rx tx pini de 5 volta dayanıklı değildir. Ben bu projede Arduino DUE kullandığım için problem yaşamadım fakat diğer Arduino modellerinin 5 voltlukları kullanılacağı zaman level shifter entegrelerine ihtiyaç duyulur.</span></div>

Arduino kodu aşağıdadır eğer başka bir Arduino ile kullanacaksanız "Serial1" yerine "SoftwareSerial" kullanmanızı öneririm.  

{% codeblock lang:cpp %}

#include <Wire.h>  
#define DEBUG true 

void setup()
{
  Serial.begin(9600);// Arduino-Pc haberleşmesi Debug için kullanacağım 
  Serial1.begin(9600); // Arduinoyu Esp8266 bağladığımız serial port
 
  sendData("AT+RST\r\n",2000,DEBUG); // reset
  sendData("AT+CWMODE=3\r\n",1000,DEBUG); //  MOde olarak access point seçilir
  sendData("AT+CIFSR\r\n",1000,DEBUG); // Modulün ip adresi alınır
  sendData("AT+CIPMUX=1\r\n",1000,DEBUG); // birden fazla bağlantıya izin ver
  sendData("AT+CIPSERVER=1,80\r\n",1000,DEBUG); // Port= 80 yapılır
}
int sayi=0;

void loop()
{
  if(Serial1.available()) 
  {
    if(Serial1.find("+IPD,"))
    {
      delay(300);
      int connectionId = Serial1.read()-48; // 48 çıkarılır çünkü char to int fönüşümü yapmamız gerek
                                           // ASCCI table da 0 sayısı 48 ile ifade edilir yani:
                                           // '0' - 48 = 0
                                           // '1' - 48 = 1
     
     String webpage = "<head><meta http-equiv=""refresh"" content=""10""></head>";
     webpage+="<h1>Esp8266 Html Testi</h1><h2>";
     webpage+= "mozanunal.blogspot.com";
     webpage+="</h2>";
     
     String cipSend = "AT+CIPSEND=";
     cipSend += connectionId;
     cipSend += ",";
     cipSend +=webpage.length();
     cipSend +="\r\n";

     sendData(cipSend,1000,DEBUG);
     sendData(webpage,1000,DEBUG);
     
     String closeCommand = "AT+CIPCLOSE="; 
     closeCommand+=connectionId; 
     closeCommand+="\r\n";
     
     sendData(closeCommand,3000,DEBUG);
    }
  }
}
 
String sendData(String command, const int timeout, boolean debug)
{
    String response = "";
    
    Serial1.print(command); // send the read character to the esp8266
    
    long int time = millis();
    
    while( (time+timeout) > millis())
    {
      while(Serial1.available())
      {
        
        // The esp has data so display its output to the serial window 
        char c = Serial1.read(); // read the next character.
        response+=c;
      }  
    }
    
    if(debug)
    {
      Serial.print(response);
    }
    
    return response;
}
{% endcodeblock %}

Esp8266yı Acces Point olarak kullanıyoruz. Yani bizim için wifi ağı kurar kodu yükledikten sonra ağa bağlanın.
<div class="separator" style="clear: both; text-align: center;">[![](http://1.bp.blogspot.com/-EdZgWilDZtk/VQCjNmKFV8I/AAAAAAAAH2w/1ZTj8e8Wf34/s1600/Ads%C4%B1z.png)](http://1.bp.blogspot.com/-EdZgWilDZtk/VQCjNmKFV8I/AAAAAAAAH2w/1ZTj8e8Wf34/s1600/Ads%C4%B1z.png)
Serial porttan gelen veriler bu şekilde olmalıdır. Problem yaşadığımızda buradan kontrol edip DEBUG yapabiliriz.

<div class="separator" style="clear: both; text-align: center;">[![](http://4.bp.blogspot.com/-tDyK2lSjhek/VQCjNuaYx9I/AAAAAAAAH3Y/COVr9yYsBA8/s1600/Ekran%2BAl%C4%B1nt%C4%B1s%C4%B1.PNG)](http://4.bp.blogspot.com/-tDyK2lSjhek/VQCjNuaYx9I/AAAAAAAAH3Y/COVr9yYsBA8/s1600/Ekran%2BAl%C4%B1nt%C4%B1s%C4%B1.PNG)</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://1.bp.blogspot.com/-Dvq-XS96TbQ/VQCjOGtZoKI/AAAAAAAAH24/CIrEF322myo/s1600/dsaxsxa.PNG)](http://1.bp.blogspot.com/-Dvq-XS96TbQ/VQCjOGtZoKI/AAAAAAAAH24/CIrEF322myo/s1600/dsaxsxa.PNG)</div>

Programımızın çıktısı bu şekilde olacaktır.

<div class="separator" style="clear: both; text-align: center;">[![](http://1.bp.blogspot.com/-fm6ua2D2Vhw/VQCjNuHYpEI/AAAAAAAAH20/w_Ug81UodNA/s1600/Ekran%2BAl%C4%B1nt%C4%B1s%C4%B1sdsd.PNG)](http://1.bp.blogspot.com/-fm6ua2D2Vhw/VQCjNuHYpEI/AAAAAAAAH20/w_Ug81UodNA/s1600/Ekran%2BAl%C4%B1nt%C4%B1s%C4%B1sdsd.PNG)</div>

String halinde Arduino'ya yüklediğimiz HTML dosyasını modül wifi ağında paylaşır.

[![](http://3.bp.blogspot.com/-oIKUVAjNGOU/VQCjObKuQfI/AAAAAAAAH28/SILnkiEBwRs/s1600/fhrfg.PNG)](http://3.bp.blogspot.com/-oIKUVAjNGOU/VQCjObKuQfI/AAAAAAAAH28/SILnkiEBwRs/s1600/fhrfg.PNG)