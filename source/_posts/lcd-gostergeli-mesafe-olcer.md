title: |
  LCD Göstergeli Mesafe Ölçer
tags:
  - Elektronik
  - Arduino
  - Arduino
  - HC-SR04
  - LCD Arduino
  - Mesafe ölçer
categories:
  - Elektronik
  - Arduino
date: 2015-01-11 20:57:00
---
**Merhabalar!**

Bugünkü yazımda LCD göstergeli bir mesafe ölçerin nasıl yapılabileceğini anlatacağım. Projede Arduino, LCD modülü ve HC-SR04 modülü kullandım. Mesafe hesaplama işini "NewPing" isimli kütüphaneye yaptırdım. Bu aldığım mesafe verilerini de LCD ekrana bastırıyorum kod bu kadar basit. HC-SR04 ultrasonik mesafe hesaplama modulü. Mesafe hesabı için ses dalgalarını kullanıyor. Ses hızına göre geri dönüş süresini hesaplıyor bu sayede uzaklık hakkında bilgi sahibi olmuş oluyoruz.

![](https://2.bp.blogspot.com/-imW1-EwFBzI/VLK22y3CYhI/AAAAAAAAGjE/IiK8R_IY9rM/s1600/IMG_20150111_183709.jpg)

![](https://3.bp.blogspot.com/-QmoDFE2QbYc/VLK23M3z7hI/AAAAAAAAGjI/q0U5KHUuEiU/s1600/IMG_20150111_183748.jpg)


Uygulamanın Arduino Kodunu paylaşıyorum. Bağlantılar da kod içerisinde verilmiştir.

```cpp
/* The circuit:
 * LCD RS pin to digital pin 12
 * LCD Enable pin to digital pin 11
 * LCD D4 pin to digital pin 5
 * LCD D5 pin to digital pin 4
 * LCD D6 pin to digital pin 3
 * LCD D7 pin to digital pin 2
 * LCD R/W pin to ground
 * 10K resistor:
 * ends to +5V and ground
 * wiper to LCD VO pin (pin 3)
  */

// include the library code:
#include <LiquidCrystal.h>
#include <NewPing.h>

#define TRIGGER_PIN  7  // Arduino pin tied to trigger pin on the ultrasonic sensor.
#define ECHO_PIN     6  // Arduino pin tied to echo pin on the ultrasonic sensor.
#define MAX_DISTANCE 200 // Maximum distance we want to ping for (in centimeters). Maximum sensor distance is rated at 400-500cm.

// initialize the library with the numbers of the interface pins
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);

void setup() {
  lcd.begin(16, 2);
  lcd.print("UZAKLIK");
  Serial.begin(115200); // Open serial monitor at 115200 baud to see ping results.
}

void loop() {
  delay(1000);
  unsigned int uS = sonar.ping();
  Serial.print("Ping: ");
  Serial.print(uS / US_ROUNDTRIP_CM);
  Serial.println("cm");
  lcd.setCursor(0, 1);
  lcd.print(uS / US_ROUNDTRIP_CM);
}
```