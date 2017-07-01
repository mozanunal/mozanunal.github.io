title: |
	Arduino Gimbal Kontrol Kartı
tags: [Arduino Gimbal,arduino mpu6050,Arduino Projeleri,Hava Araçları,Imu gimbal stabilizasyonu]
categories:
  - Arduino Projeleri
author: Mehmet Ozan Ünal
date: 2015-07-04 03:30:00
---

**Herkese Merhabalar,**  
     Daha önce kolay bulunabilecek malzemelerden nasıl gimbal yapılabileceğinden bahsetmiştim ([O yazıya buradan ulaşabiliriniz](http://mozanunal.blogspot.com.tr/2015/06/2-eksenli-servo-gimbal-yapm.html)). Kontrol kartını sonra anlatacağım demiştim. Veee bu yazımda arduino ve MPU6050 sensörü kullanarak nasıl bir gimbal kontrol kartı yapabileceğimizden bahsedeceğim. Bu kart sayesinde gimbalin yere göre açısını kontrol edebileceğiz. Yere göre açısının sabit kalmasını da kontrol kartı üzerindeki IMU sensörü ile sağlayacağız([Ayrıntılı bilgi için tıklayınız](http://mozanunal.blogspot.com.tr/2014/11/imu-aclarnn-3-boyutlu-olarak.html)). Kontrol kartı saniyede 100 değer okuyup servo PWM değerlerini ona göre güncelliyor. Bu sayede oldukça yüksek çözünürlüklü her türlü seviyede kullanılabilecek bir kontrol kartı yapmış oluyoruz. Ayrıca başa koyduğum ayar parametreleri sayesinde her boyutta ve çeşitte servo gimbale kolayca uyumlu hale getirilebilir. Kontrol kartının tanıtım videosu aşağıdadır.  

<div class="separator" style="clear: both; text-align: center;"><iframe allowfullscreen="" class="YOUTUBE-iframe-video" data-thumbnail-src="https://i.ytimg.com/s_vi/MnfJcTREYPo/default.jpg?sqp=CPSu3KwF&amp;rs=AOn4CLDzz10bna-4pjdEvnk6cjxNblSg4w" frameborder="0" height="266" src="https://www.youtube.com/embed/MnfJcTREYPo?feature=player_embedded" width="320"></iframe></div>

<!-- more -->      Bağlantılara gelecek olursak MPU6050 I2C pinlerinden arduinoya bağlanıyor. Gnd pini gndye, Vcc pini ise 3.3 volta bağlanıyor. Çalışma voltajı 3.3 volt olduğu için. Servoların sinyal pinlerini ayarlardan seçtiğimiz dijital pinlere bağlıyoruz. Servoların beslemesi eğer küçük servolar ise arduino üzerinden eğer yüksek akım çeken servolarsa harici olarak yapabilirsiniz. Fakat harici besleme yaparsanız arduino ve güç kaynağının topraklarını eşitlemeyi unutmayın.  

////////////////////Ayarlar////////////////  
//pitch  
int p_pin=8;  
int p_neturalpos=90;  
int p_gain=1;  
int p_min=30;  
int p_max=150;  
int p_reverse=0;  
//roll  
int r_pin=9;  
int r_neturalpos=90;  
int r_gain=1;  
int r_min=30;  
int r_max=150;  
int r_reverse=0;  

///////////////////////////////////////////////  
Bunlar, koddaki ayar parametreleri, çeşitli gimballere kolay adapte edilebilmesi içindir. İlk pozisyonunu, en düşük, en yüksek servo açılarını, kazancını bu parametrelerle kontrol edeceğiz. Kazanç ise kontrol kartındaki açı değişimlerinin servoya kaçla çarpılarak yansıtılacağının parametresidir."Reverse" değişkeni "1" veya "0" yapılarak yönün ters çevirilmesi sağlanabilir. Benim gimbalim için "Pitch" eksenini ters yapmam gerekmişti.  

<div style="text-align: center;">**Sistemin Fotoğrafları**</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://2.bp.blogspot.com/-tPAYzOfRh8Y/VZbhzOoEt3I/AAAAAAAAMsw/lg5YNJs2Gl4/s320/IMG_20150703_170713.jpg)](http://2.bp.blogspot.com/-tPAYzOfRh8Y/VZbhzOoEt3I/AAAAAAAAMsw/lg5YNJs2Gl4/s1600/IMG_20150703_170713.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://4.bp.blogspot.com/-SGgaLhyZB5o/VZbhyrpIPvI/AAAAAAAAMss/fUO7DeUM9gA/s320/IMG_20150703_170813.jpg)](http://4.bp.blogspot.com/-SGgaLhyZB5o/VZbhyrpIPvI/AAAAAAAAMss/fUO7DeUM9gA/s1600/IMG_20150703_170813.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">**Projenin full kaynak kodu:**</div>

#include <I2Cdev.h>  
#include <MPU60X0.h>  
#include <EEPROM.h>  
#include "DebugUtils.h"  
#include "CommunicationUtils.h"  
#include "FreeIMU.h"  
#include <Wire.h>  
#include <SPI.h>  
#include <Servo.h>  
////////////////////Ayarlar////////////////  
//pitch  
int p_pin=8;  
int p_neturalpos=90;  
int p_gain=1;  
int p_min=30;  
int p_max=150;  
int p_reverse=0;  
//roll  
int r_pin=9;  
int r_neturalpos=90;  
int r_gain=1;  
int r_min=30;  
int r_max=150;  
int r_reverse=0;  

///////////////////////////////////////////////  
Servo pitchservo;  
Servo rollservo;  
int p_angle=90;  
int r_angle=90;  
int raw_values[9];  
float ypr[3]; // yaw pitch roll  
float val[9];  

FreeIMU my3IMU = FreeIMU();  

void setup() {  
  Serial.begin(115200);  
  pitchservo.attach(p_pin);  
  rollservo.attach(r_pin);  
  Wire.begin();  
  delay(5);  
  my3IMU.init();  
  delay(5);  
}  

void loop() {  

  my3IMU.getYawPitchRoll(ypr);  
  Serial.print("Yaw: ");  
  Serial.print(ypr[0]);  
  Serial.print(" Pitch: ");  
  Serial.print(ypr[1]);  
  Serial.print(" Roll: ");  
  Serial.print(ypr[2]);  
  Serial.println("");  

  p_angle=p_neturalpos+ypr[1]*p_gain;  
  if(p_angle>p_max){  
    p_angle=p_max;  
  }  
  if(p_angle<p_min){  
    p_angle=p_min;  
  }  
  if(p_reverse=1){  
    p_angle=180-p_angle;  
  }  
  pitchservo.write(p_angle);  

  r_angle=r_neturalpos+ypr[2]*r_gain;  
  if(r_angle>r_max){  
    r_angle=r_max;  
  }  
  if(r_angle<r_min){  
    r_angle=r_min;  
  }  
  if(r_reverse=1){  
    r_angle=180-r_angle;  
  }  
  rollservo.write(r_angle);  

  delay(10);  
}