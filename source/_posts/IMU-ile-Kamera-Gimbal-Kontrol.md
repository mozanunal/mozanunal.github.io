title: |
  IMU ile Kamera Gimbalı Kontrolü
tags:
  - Arduino Projeleri
  - Hava Araçları
  - mpu6050
  - arduino servo kontrol
  - gimbal kontrol
  - IMU
categories:
  - Otonom Hava Araçları
author: Mehmet Ozan Ünal
date: 2014-10-18 18:22:00
---
**Herkese Merhabalar!**  
 Bu projemin amacı MPU6050 ile hesaplanan pitch ve roll açıları ile 2 eksenli bir gimbalı kontrol etmek. MPU6050 açılarını hesaplamak için FreeIMU kütüphanesini kullandım. [Buradan indirebilirsiniz](http://www.varesano.net/projects/hardware/FreeIMU). Aldığım açılar belli bir değerden büyükse servoların açılarını kademeli olarak azalttım veya artırdım.<!-- more -->Bu sayede gimbal, MPU6050yi eğdiğim yönde dönmüş oldu. Projemin tanıtım videosunu aşağıdan izleyebilirsiniz.


<center>{% youtube MQi57R7bO8M %}</center>

Arkadaşlar projemin Arduino kodunu da paylaşıyorum.

{% codeblock lang:cpp %}
#include <I2Cdev.h>
#include <MPU60X0.h>
#include <EEPROM.h>

//#define DEBUG
#include “DebugUtils.h”
#include “CommunicationUtils.h”
#include “FreeIMU.h”
#include <Wire.h>
#include <SPI.h>
#include <Servo.h>
int raw_values[9];
Servo myservo1;
int pos1 = 90;
Servo myservo2;
int pos2 = 90;
float ypr[3]; // yaw pitch roll
float val[9];

// Set the FreeIMU object
FreeIMU my3IMU = FreeIMU();

void setup() {
  Serial.begin(115200);
  Wire.begin();
  myservo1.attach(9);
  myservo2.attach(8);
  delay(5);
  my3IMU.init(); // the parameter enable or disable fast mode
  delay(5);
}

void loop(){  
  my3IMU.getYawPitchRoll(ypr);
  Serial.print(“Yaw: “);
  Serial.print(ypr[0]);
  Serial.print(“ Pitch: “);
  Serial.print(ypr[1]);
  Serial.print(“ Roll: “);
  Serial.print(ypr[2]);
  Serial.println(“”);
    
  if(ypr[1]>20)
  {
    if(pos1<150)
    {
    pos1=pos1+2;
    myservo1.write(pos1);
    delay(15);
    }
  }
  else if(ypr[1]<-20)
  {
    if(pos1>30)
    {
    pos1=pos1-2;
    myservo1.write(pos1);
    delay(15);
    }
  }
  if(ypr[2]>20)
  {
    if(pos2>30)
    {
    pos2=pos2-2;
    myservo2.write(pos2);
    delay(15);
    }
  }
  if(ypr[2]<-20)
  {
    if(pos2<150)
    {
    pos2=pos2+2;
    myservo2.write(pos2);
    delay(15);
    }
  }
  delay(15);
}
{% endcodeblock %}