title: |
  DIY RC Kumanda Yapımı
tags:
  - Arduino Projeleri
  - Joystick
  - Arduino RC kumanda
  - NRF24L01
categories:
  - Arduino Projeleri
author: Mehmet Ozan Ünal
date: 2015-11-15 14:30:00
---
**Herkese Merhabalar,**  
        Bu yazımda arduino kullanarak nasıl basit, ucuz ve işlevli bir RC kumanda yapabileceğimizi anlatacağım. Yapacağımız RC kumanda ile istediğiniz türde aracı, istediğiniz kadar kanalla kontrol etmeniz mümkün. Benim uygulamamda 2 adet 2 eksen joystick ve 1 potansiyometre bulunuyor. Yani 5 kanallı örnek bir uygulama yaptım. Öncelikle malzemelerden başlayalım.  

1.  Arduino Nano
2.  Nrf24l01
3.  1 adet 10k potansiyometre
4.  1 adet 10k direnç
5.  2 adet 2 eksen joystick modulü

<a name="more"></a>  

Bu malzemelerle beraber toplam maliyetimiz 7- 8 dolar civarı oluyor. Maximum kullanım mesafesi ise 30 40 metre civarında hobi uygulamarına göre oldukça yeterli bir mesafe elde ediyoruz.  

<div class="separator" style="clear: both; text-align: center;">[![](http://2.bp.blogspot.com/-xDp3AViitVk/Vke9Wz-_7GI/AAAAAAAAOuI/s6nGyovNDrY/s320/IMG_20151110_225602.jpg)](http://2.bp.blogspot.com/-xDp3AViitVk/Vke9Wz-_7GI/AAAAAAAAOuI/s6nGyovNDrY/s1600/IMG_20151110_225602.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://1.bp.blogspot.com/-pCi8LTweGqI/Vke9WyHH_BI/AAAAAAAAOuI/F4XsoNq_j8w/s320/IMG_20151110_225557.jpg)](http://1.bp.blogspot.com/-pCi8LTweGqI/Vke9WyHH_BI/AAAAAAAAOuI/F4XsoNq_j8w/s1600/IMG_20151110_225557.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">Bağlantılara gelecek olursak nrf24 modülü SPI ile çalışıyor. Arduino'nun uygun SPI pinlerine bağlıyoruz. Şemasını kolayca bulabilirsiniz. Joystick modulleri için de bir tanesi için 2 analog giriş olmak üzere Arduino Nanonun toplam 4 tane analog giriş pinin kullanıyoruz. Potansiyometrenin kullanımı için de 1 adet analog giriş pini kullanıyoruz.</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://2.bp.blogspot.com/--vbgxgEg-Rk/Vke9W-L-3ZI/AAAAAAAAOuI/XKbVFCQj6V0/s320/IMG_20151110_225607.jpg)](http://2.bp.blogspot.com/--vbgxgEg-Rk/Vke9W-L-3ZI/AAAAAAAAOuI/XKbVFCQj6V0/s1600/IMG_20151110_225607.jpg)[![](http://2.bp.blogspot.com/-Lsd05A9Lnpo/Vke9W7Wzv6I/AAAAAAAAOuI/4vMP73gnhPA/s320/IMG_20151110_225613.jpg)](http://2.bp.blogspot.com/-Lsd05A9Lnpo/Vke9W7Wzv6I/AAAAAAAAOuI/4vMP73gnhPA/s1600/IMG_20151110_225613.jpg)</div>

Kumandanın koduyla alakalı olarak değinmek istediğim bir kaç nokta var. Baştaki ayarlarda nrf ile ilgili ayarlar yapılıyor. Bu modülle alakalı bir kaç önemli nokta şöyle:  

1.  Kanal seçimi çok önemli 2.4 ghz çok kullanılan bir frekans ve uygun kanal seçilmezse çok gürültü olabilir. Kanal taraması için arduino kodları var, doğru kanalı bulmak için onlardan yararlanabilirsiniz.
2.  Nrf24 modülü 3.3 volt ile çalışıyor. Fakat çektiği yüksek akım sebebiyle Arduino Nanonun 3.3 V pininden beslemesi biraz riskli. Onun yerine 5V pininin voltajını 2 diyot yardımıyle düşürüp öyle besledim. Harici bir regülatör bağlamak çok daha akla yatkın bir çözüm olacaktır tabi :)
3.  Payload size 10 olarak belirledim. Nedeni 5 adet integer verisi yollamam 2*5=10 byte göndermem gerekiyor. Normalde bir paket 32 byte fakat 10 byte ile sınırlandırarak rf modulünüzün performansını artırabilirsiniz.

<div>Başta belirlediğim ID sayesinde farklı birden fazla ID belirleyerek, birden fazla sayıda aracı kontrol edebilirsiniz. Max angle 12 veya  datatosend[2]=-1*(analogRead(3)-500)*Max_angle/500; gibi satırlar tamamen kullanıma örnek olması amacıyla konmuştur. Yapmanız gereken sadece joysticklerden veya potansiyometreden aldığınız veriyi nasıl göndermek isterseniz o şekile çevirip "datatosend" array elemanlarına eşitlemektir. İstediğiniz türde aracı veya çok fazla farklı kanalı bu şekilde rahatça kontrol edebilirsiniz.</div>

**Kumanda Kodu**  
{% codeblock lang:cpp %}
#include <SPI.h>  
#include <RF24.h>  
#include "nRF24L01.h"  

RF24 radio(7,8);  
int ID=1;  
int Max_angle=12;  
void setup()  
{  
    radio.begin();  
    radio.setPayloadSize(10);  
    radio.setChannel(80);  
    radio.openWritingPipe(0xF0F0F0F0F0);  
    radio.openReadingPipe(1,0xF0F0F0F0AA);  
    radio.startListening();  
}  

void loop()  
{  
  int datatosend[5];  
  datatosend[0]=ID;  
  datatosend[1]=(analogRead(0)-500)*2;  
  datatosend[2]=-1*(analogRead(3)-500)*Max_angle/500;  
  datatosend[3]=(analogRead(4)-500)*Max_angle/500;  
  datatosend[4]=-1*(analogRead(1)-500)*Max_angle/500;  
  datatosend[5]=(analogRead(2)-500)*Max_angle/500;  
  radio.stopListening();  
  radio.write( datatosend, sizeof(datatosend) );  
  radio.startListening();  
  delay(50);  
}  
{% endcodeblock %}

Aşağıdaki kod is**e RC verilerini almak için gerekli fonksiyondur** değiken boyutlarını ayarlayarak channel sayısını artırabilirsiniz. Tabi ki bu kodu kontrol edeceğiniz aracın koduna eklemeniz gerekmektedir.  

{% codeblock lang:cpp %}
void Rc_Update()  
{  
  int incomingdata[6]={0,0,0,0,0,0};  
  radio.read( incomingdata, sizeof(incomingdata) );  
  if(incomingdata[0]==ID)  
  {  
    ch_1=incomingdata[1];  
    ch_2=incomingdata[2];  
    ch_3=incomingdata[3];  
    ch_4=incomingdata[4];  
    ch_5=incomingdata[5];  
  }  
  Serial.print("RC=");  
  Serial.print(ch_1);  
  Serial.print(",");  
  Serial.print(ch_2);  
  Serial.print(",");  
  Serial.print(ch_3);  
  Serial.print(",");  
  Serial.print(ch_4);  
  Serial.print(",");  
  Serial.print(ch_5);  
  Serial.println();  
}
{% endcodeblock %}
