---
title: '[TR] Arduino Due Osiloskop'
tags:
  - Arduino Due Osiloskop
  - Electronics
  - Arduino
  - 'C#'
  - 'C# Osiloskop'
categories:
  - Electronics
  - Arduino
author: Mehmet Ozan Ünal
date: 2015-05-02 01:38:00
---
**Merhaba Arkadaşlar,**  

Bugün size Arduino Due ile yaptığım osiloskop bahsedeceğim. Arduino Dueyi seçmemin bir kaç nedeni var tabi. Arduino Duede standart Arduinoların 8 bitlik Atmega işlemcilerinden farklı olarak 32 bitlik Arm Cortex M3 var. Bu işlemcinin 84 Mhzlik saat hızı bu proje için elverişli kılıyor.  

Osiloskop projesine başlarken amacım Due ile mümkün olan en yüksek örnekleme hızlı osiloskobu yapmaktı. İlk olarak arduinonun standart AnalogRead() fonksiyonunu denedim. Bir örnek alma süresi 40 uS kadar sürdü. Daha sonra [bu bağlantıyı](https://frenki.net/2013/10/fast-analogread-with-arduino-due/) buldum ve oradaki ayarları Duenin ADCsine uyguladım. Osiloskobun son kodu aşağıdaki gibidir. Bu kod sayesinde ADClere direk registerlar.

üzerinden ulaşıyoruz. Arduinonun fonksiyonunda her analog değer alma işleminde ilkönce ADC'yi açıyor, okuduktan sonra ise kapatıyor. Bu kodda ise ADCyi FREE RUN modunda kullanmış oluyoruz. Bu sayede bir örnekleme ortalama 1 uS sürüyor yani 1 Mega Sample Per Second (MSa/s) bir osiloskop yapmış olduk.  


```cpp
unsigned long start_time;
unsigned long stop_time;
unsigned long values[1000];

void setup() {        
  Serial.begin(9600);  
  ADC->ADC_MR |= 0x80;  //FREE RUN Adc moda geçilir.
  ADC->ADC_CHER = 0x80; //A0 pinini enable yap
}

void loop() {
  unsigned int i;
    
  start_time = micros();
  for(i=0;i<1000;i++){
    while((ADC->ADC_ISR & 0x80)==0); // örnekleme yapılana kadar bekle
    values[i]=ADC->ADC_CDR[7]; //değeri al
  }
  stop_time = micros();

  Serial.print("Total time: ");
  Serial.println(stop_time-start_time); 
  Serial.print("Average time per conversion: ");
  Serial.println((float)(stop_time-start_time)/1000);

  Serial.print("$, ");
  for(i=0;i<1000;i++) {
    Serial.print(values[i]);
    Serial.print(",");
  }
  Serial.println();
  delay(2000);
}
```

Osiloskop arayüzünü ise C# dilini kullanarak yazdım. Osiloskop için kullunanılan [bu kütüphaneyi](https://www.oscilloscope-lib.com/) kullandım. Arayüzden görüntüler de aşağıdadır.  

**Osilopkop denemeleri**  

![](https://1.bp.blogspot.com/-2hqhgXgLpO4/VUPq3PCaeNI/AAAAAAAAKXU/MFt7t_qRvxw/s1600/Ekran%2BAl%C4%B1nt%C4%B1s%C4%B1.PNG)

**Com port seçiminin yapıldığı pencere**

![](https://3.bp.blogspot.com/-qjoGyPZkfbo/VUPq3Oa3GDI/AAAAAAAAKXQ/U3Z8rgQdx3E/s1600/Ekran%2BAl%C4%B1nt%C4%B1s%C4%B12.PNG)