---
title: '[TR] Arduino Joystick Kontrol'
tags:
  - Electronics
  - Arduino
  - Arduino
  - Arduino Joystick Kontrol
  - Full Source code avaible
  - Joystick
categories:
  - Electronics
  - Arduino
author: Mehmet Ozan Ünal
date: 2014-10-29 00:21:00
---

**Herkese Merhabalar!**\
Bugünkü yazımda Arduino ile Joystick Kontrol projemden bahsetmek istiyorum. Bu
projede, 2 eksenli bir joystick ile 2 eksenli bir gimbalı kontrol ettim.
Kontrolcü olarak Arduino Nano kullandım. Bütün Arduino çeşitleri kullanılabilir
Nanoyu küçük olduğu ve usb üzerinden kolay programlanabildiği için tercih ettim.

Breadboard üzerine basit bir devre kurdum. Arduinonun standart servo
kütüphanesini kullanarak kodu yazdım. Joystickten veri almak için Arduinonun
analaog giriş pinlerini kullandım. Analog girişler 1 veya 0 dan farklı değerler
okumak için kullanılır. Mesela 10 bitlik bir analog girişten 0-1024 arası
değerler okunabilir. Aşağıda bağlantılar ve kaynak kodunu paylaşıyorum. Tekrar
görüşmek üzere.

**Bağlantılar**

Arduino nano güç için usb üzerinden bilgisayara bağlıservolar;

- kırmızı kablo> Arduino 5V
- siyah kablo> GND
- sarı kablo> Dijital pin 8 ve 9
- Joystick modulün;
- GND> Arduino GND
- 5V> Arduino 5V
- X Axis> Analog pin 4
- Y Axis> Analog pin 5

**Programın arduino kodu:**

```cpp
#define X_AXIS    A4    
#define Y_AXIS    A5  
#include <Servo.h>   

int  Xvalue;   
int  Yvalue;  

Servo myservo1;    
double pos1 = 90;  
Servo myservo2;    
double pos2 = 90;  

void setup()     
{  
delay(5);  
myservo1.attach(9);  
myservo2.attach(8);  
Serial.begin(9600);   

} 

void loop() 
{  
Xvalue = analogRead (X_AXIS);   
Serial.print (Xvalue );  
Yvalue = analogRead (Y_AXIS);  
Serial.print (Yvalue);  

if(Xvalue<200)  
{  
  if(pos1<150)  
  {  
  pos1=pos1+2;  
  myservo1.write(pos1);   
  delay(15);    
  }  
}  
else if(Xvalue>800)  
{  
  if(pos1>150)  
  {  
  pos1=pos1-2;  
  myservo1.write(pos1);   
  delay(15);    
  }  
}  

if(Yvalue>800)  
{  
  if(pos2>20)  
  {  
  pos2=pos2-2;  
  myservo2.write(pos2);   
  delay(15);    
  }
}  
else if(Yvalue<200)  
{  
  if(pos2<160)  
  {  
  pos2=pos2+2;  
  myservo2.write(pos2);   
  delay(15);    
  }  
}  
}
```
