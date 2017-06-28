title: |
  SimpleDSP: FIR filtreleme özelliği eklendi
tags:
  - Arduino DSP
  - Arduino FIR
  - DSP
  - FIR filtre
  - FIR filtre dizayn
  - İşaret işleme
categories:
  - İşaret İşleme
author: ''
date: 2017-04-07 00:13:00
---
**Herkese Merhabalar,**  
Bildiğiniz gibi gömülü sistemlerde kullanılabilecek basit bir DSP kütüphanesi geliştirmeye çalışıyorum son olarak FIR filtreleme özelliğini bu kütüphaneye ekledim. FIR filtre ile alçak geçiren, yüksek geçiren, band geçiren veya durduran filtreler tasarlayabilirsiniz. FIR filtreler yapısı gereği hep stabil filtrelerdir. Bu nedenle bir kararlılık analizi gerektirmeden kullanılabilirler.  

Ayrıca wiki sayfasını kesinlikle ziyaret etmenizi tavsiye ederim orada Matlab veya Octave kullanarak nasıl filtreyi tasarlayacağınız. Filtreyi nasıl kullanacağınız ve karakteristiğini nasıl görselleyebileceğinize kadar bir çok bilgi bulunmakta. [Ziyaret etmek için tıklayın.](https://github.com/mozanunal/SimpleDSP/wiki/FIR)  

[Projenin github linkine buradan ulaşabilirsiniz.](https://github.com/mozanunal/SimpleDSP)  

<a name="more"></a>

**Arduino ile Performansı**
<div class="separator" style="clear: both; text-align: center;">[![](https://2.bp.blogspot.com/-XfgXk47zxak/WOawaTUJ0OI/AAAAAAAAiuk/2kEmqpCDCp0m3gfc1IsSw-ubLWcxtwm1wCLcB/s400/Capture.PNG)](https://2.bp.blogspot.com/-XfgXk47zxak/WOawaTUJ0OI/AAAAAAAAiuk/2kEmqpCDCp0m3gfc1IsSw-ubLWcxtwm1wCLcB/s1600/Capture.PNG)

**Örnek kod**

{% codeblock lang:cpp %}

/*This is a signal sum of 800 hz and 3.2 khz sine waves
which sampled in 10khz and 32 of this samples are  
create a data array.(input signal)  
In this example input signal is filtered with   
46 points fir filter. Filter is designed as low pass filter   
and filter coeficient calculated at Octave  
more info https://github.com/mozanunal/SimpleDSP/wiki/FIR  
*/  

#include "simpleDSP_fir.h"  

float coef[46]=  
{  
0.00113053589111100,  
0.00101072486672204,  
0.000468847235288906,  
0.000603489038578611,  
-0.00208429064928862,  
-0.00340892103405782,  
-0.00362003403497889,  
-0.00179251511006564,  
0.00229274890344763,  
0.00758093034996730,  
0.0117041456801663,  
0.0117198866352666,  
0.00550311571071171,  
-0.00673606239661105,  
-0.0215570909070923,  
-0.0326442238558300,  
-0.0325783280789586,  
-0.0155583311041979,  
0.0199164513221244,  
0.0695391190116097,  
0.123656990515743,  
0.169767912370886,  
0.196291877716615,  
0.196291877716615,  
0.169767912370886,  
0.123656990515743,  
0.0695391190116097,  
0.0199164513221244,  
-0.0155583311041979,  
-0.0325783280789586,  
-0.0326442238558300,  
-0.0215570909070923,  
-0.00673606239661105,  
0.00550311571071171,  
0.0117198866352666,  
0.0117041456801663,  
0.00758093034996730,  
0.00229274890344763,  
-0.00179251511006564,  
-0.00362003403497889,  
-0.00340892103405782,  
-0.00208429064928862,  
-0.000603489038578611,  
0.000468847235288906,  
0.00101072486672204,  
0.00113053589111100  
};  

int input[255] =  
{  
450.527,  
-101.597,  
1031.37,  
-613.161,  
-1618.03,  
-115.808,  
-866.986,  
-1567.2,  
541.587,  
618.034,  
-263.146,  
1504.41,  
1504.41,  
-263.146,  
618.034,  
541.587,  
-1567.2,  
-866.986,  
-115.808,  
-1618.03,  
-613.161,  
1031.37,  
-101.597,  
450.527,  
2000,  
450.527,  
-101.597,  
1031.37,  
-613.161,  
-1618.03,  
-115.808,  
-866.986,  
-1567.2,  
541.587,  
618.034,  
-263.146,  
1504.41,  
1504.41,  
-263.146,  
618.034,  
541.587,  
-1567.2,  
-866.986,  
-115.808,  
-1618.03,  
-613.161,  
1031.37,  
-101.597,  
450.527,  
2000,  
450.527,  
-101.597,  
1031.37,  
-613.161,  
-1618.03,  
-115.808,  
-866.986,  
-1567.2,  
541.587,  
618.034,  
-263.146,  
1504.41,  
1504.41,  
-263.146,  
618.034,  
541.587,  
-1567.2,  
-866.986,  
-115.808,  
-1618.03,  
-613.161,  
1031.37,  
-101.597,  
450.527,  
2000,  
450.527,  
-101.597,  
1031.37,  
-613.161,  
-1618.03,  
-115.808,  
-866.986,  
-1567.2,  
541.587,  
618.034,  
-263.146,  
1504.41,  
1504.41,  
-263.146,  
618.034,  
541.587,  
-1567.2,  
-866.986,  
-115.808,  
-1618.03,  
-613.161,  
1031.37,  
-101.597,  
450.527,  
2000,  
450.527,  
-101.597,  
1031.37,  
-613.161,  
-1618.03,  
-115.808,  
-866.986,  
-1567.2,  
541.587,  
618.034,  
-263.146,  
1504.41,  
1504.41,  
-263.146,  
618.034,  
541.587,  
-1567.2,  
-866.986,  
-115.808,  
-1618.03,  
-613.161,  
1031.37,  
-101.597,  
450.527,  
2000,  
450.527,  
-101.597,  
1031.37,  
-613.161,  
-1618.03,  
-115.808,  
-866.986,  
-1567.2,  
541.587,  
618.034,  
-263.146,  
1504.41,  
1504.41,  
-263.146,  
618.034,  
541.587,  
-1567.2,  
-866.986,  
-115.808,  
-1618.03,  
-613.161,  
1031.37,  
-101.597,  
450.527,  
2000,  
450.527,  
-101.597,  
1031.37,  
-613.161,  
-1618.03,  
-115.808,  
-866.986,  
-1567.2,  
541.587,  
618.034,  
-263.146,  
1504.41,  
1504.41,  
-263.146,  
618.034,  
541.587,  
-1567.2,  
-866.986,  
-115.808,  
-1618.03,  
-613.161,  
1031.37,  
-101.597,  
450.527,  
2000,  
450.527,  
-101.597,  
1031.37,  
-613.161,  
-1618.03,  
-115.808,  
-866.986,  
-1567.2,  
541.587,  
618.034,  
-263.146,  
1504.41,  
1504.41,  
-263.146,  
618.034,  
541.587,  
-1567.2,  
-866.986,  
-115.808,  
-1618.03,  
-613.161,  
1031.37,  
-101.597,  
450.527,  
2000,  
450.527,  
-101.597,  
1031.37,  
-613.161,  
-1618.03,  
-115.808,  
-866.986,  
-1567.2,  
541.587,  
618.034,  
-263.146,  
1504.41,  
1504.41,  
-263.146,  
618.034,  
541.587,  
-1567.2,  
-866.986,  
-115.808,  
-1618.03,  
-613.161,  
1031.37,  
-101.597,  
450.527,  
2000,  
450.527,  
-101.597,  
1031.37,  
-613.161,  
-1618.03,  
-115.808,  
-866.986,  
-1567.2,  
541.587,  
618.034,  
-263.146,  
1504.41,  
1504.41,  
-263.146,  
618.034,  
541.587,  
-1567.2,  
-866.986,  
-115.808,  
-1618.03,  
-613.161,  
1031.37,  
-101.597,  
450.527,  
2000,  
450.527,  
-101.597,  
1031.37,  
-613.161,  
-1618.03  
};  

FIR fir1;  

long startTime;  
long calcTime;  

void setup() {  
  Serial.begin(9600);  
  initFIR(&fir1, 46, coef);  
  Serial.print("Initiliaze finished");  

  for(int i = 0; i<255; i++)  
  {  
    startTime = micros();  
    float a ;  
    a = filtFIR(&fir1,input[i]);   
    calcTime = micros()-startTime;  
    Serial.println(a);  
    Serial.print("Total calculation time: ");  
    Serial.println(calcTime);  
  }  
}  

void loop()  
{  

} 
{% endcodeblock %}