title: |
  8051 Entegresi İle Assembly Programlamaya Giriş 
tags:
  - Elektronik
  - Mikroişlemciler
  - '8051'
  - Arm cortex m3
  - Assembly
categories:
  - Elektronik
  - Mikroişlemciler
author: Mehmet Ozan Ünal
date: 2015-11-05 05:25:00
---

**Herkese Merhabalar,**  
       Bu yazdımda ilk mikroişlemcilerden biri olan 8051 mikrokontrolcüsü üzerinden assembly dili ve mikroişlemci nedir nasıl çalışır bu konulara giriş yapmak istiyorum. Başlamadan önce benim de kullanacağım 8051 entegresi simülasyon programını önermek istiyorum. Programın ismi EdSim51\. İlkönce mikroişlemcilerle alakalı temel bir kaç kavramla başlayalım.  
<!-- more -->  
**ROM(Read Only Memory):** Temel olarak, belli bir miktarda bilginin kalıcı olarak yazıldığı bellektir**.** Bilgi saklamak için  
**EEPROM:** ROM'un yeniden yazılabilir halidir.  
**RAM(Random Access Memory):** Bilgi saklamak için elektriğe ihtiyaç duyar. CPU veri işlemek için kullandığı bellek tipi RAM'dir.  
**Registers:** CPU registerları verileri geçici olarak saklamak için kullanılır. 8051 entegresinde bir tane data çeşidi vardır. O da 8 bittir. Eğer 8 bitten büyük datalarla işlem yapılmak istenirse data 8 bitlik parçalara ayrılmalıdır. 8051'de en çok kullanılar registerlar aşağıdaki gibidir.  

*   A (accumulator) : Lojik ve numeric işlemleri gerçekleştirmede kullanılır 
*   R0, R1, R2, R3, R4, R5, R6 : Genel amaçlı registerlar
*   DTPR (data pointer) : low ve high olmak üzere 2 bytedan oluşur bu sayede 16 bitlik veri saklanır.
*   PC (program counter) : Programın Kod hafızasındaki kaçıncı işlemde olduğunu tutar
*   PSW (Program Status Word) : Aşağıda tekrar değineceğim
*   Stack Pointer Register: Yine 8 bitlik stackin en üzerindeki adresi gösteren registerdır. 

## **1.8051 Entegresi Bazı Assembly Komutları ve Örnekleri**

### MOV Komutu:
Bir registera veri yüklemek için kullanılır.
Kullanımı şöyledir:
<div>MOV data yüklenecek register, yüklenecek data</div>

<div>MOV A,#51H</div>

<div>A registerına 51 hexadecimal sayısı yükleniştir.</div>

<div># bir sayı olduğunu görtermek için kullanılmıştır.  
51 yüklenecek hexadecimal sayımız. Değeri 5x16+1=81  
H sayının hexadecimal olduğunu göstermek için kullanılır. Binary için B, Decimal için D kullanılır.  
Eğer hexadecimal sayısı harfle baslıyorsa başına 0 koyulur.</div>

<div>Aşağıdaki kod grubunu çalıştırdığımızda simülasyon programımızın son görüntüsü aşağıdaki gibi olacaktır.</div>

<div>MOV A,#51H     </div>

<div>

<div>MOV R1,#0FFH  </div>

<div>MOV R2,#3BH  </div>

</div>

<div>![](https://1.bp.blogspot.com/-UyzZoP7m_8Y/VjineW2uopI/AAAAAAAAOm4/ySzZ6WrkOT8/s640/Ekran%2BAl%25C4%25B1nt%25C4%25B1s%25C4%25B1.PNG)
Görüldüğü gibi R1 R2 ve Accummulatora veriler yüklenmiştir.  

**ORG ve END Komutları**  
Org CPU'ya kaçıncı code memory satırıncan başlamısı gerektiğini söyleyen komuttur. Aşağıdaki gibi kullanılır.  
             ORG  0H  
             MOV  R1,#31H  
             MOV  R2, 20H  
             MOV  R3,R2  
             MOV  R4,R3  
HERE:  SJMP HERE  
             END  

**ADD Komutu**</div>

<div>Toplama komutudur kullanımı şöyledir.  
ADD Toplamın saklanacağı yer, eklenecek bilgi  
ADD A,R1  
A=A+R1 olur.  
ADD R1, A olamaz. Toplamın saklanacağı yer hep Accumlator registeri olmalıdır.  

ADD A, @R2   : R2 registerinin sakladığı adresteki ramde tutulan değer A'ya eklenir  

<div>ADD A, 05       : 05 adresindeki ramde tutulan değer A'ya eklenir.</div>

<div>ADD A, #05     : 05 sayısı A'ya eklenir.</div>

Bazı toplamalarda sonuç 255den büyük çıkabilir. Bu durumda bir eldemiz olmuş olur. Peki 8051 bu durumla nasıl başa çıkıyor. PSW registerını kullanarak tabi ki:  

**PSW Registerı**  
8 bitlik bir registerdır. Her biri ayrı bir durumu tutar.  
CY (PSW.7): Carry Flag yani eldeyi tutan bit budur. CLR C komutu ile temizlenebilir.  
AC (PSW.6); Auxiliary Carry Flag D3 bitinden D4 bitine elde olduğunda 1 olan bittir.  
F0 (PSW.5 ve PSW.1); Kullanıcının kendi tanımlayacağı şeyler için ayrılmıştır.  
RS1 and RS0 (PSW.4 ve PSW.3): Register Bank değiştirmak için kullanılır.  
OV (PSW.2): Over flow flag'tir.  
P (PSW.0): Parity Flagtır. Accumulatordaki sayı tek ise 1, çift ise 0dır.  

**SUBB komutu**  
Çıkarma işlemi komutudur.  
SUBB A,B  
A=A-B  
**MUL komutu**  
Çarpım komutudur.  
MUL AB şeklinde kullanılır arada virgül yoktur. Sadece A ve B registerları kullanılabilir.  
A=A.B  

**DIV komutu**  
Bölme komutudur.  
DIV AB şekilde kullnılır arada virgül yoktur. Sadece A ve B registerları kullanılabilir.  
A=A/B  

**Loop ve Jump komutu**  

![](https://2.bp.blogspot.com/-s3eVl_wFjZ0/VjkszPwX-jI/AAAAAAAAOn8/ZYp-ZWfsxkk/s1600/Ekran%2BAl%25C4%25B1nt%25C4%25B1s%25C4%25B1.PNG)

Loop oluşturmak için kullanılan komutlar yukarıdaki gibidir. Hepsi farklı bir koşulu kullanmak içindir. Aşağıdaki örnek kod ise kullanımlarına örnektir.  

```asm
             ORG 0H  

             MOV A, #0              ; clear A  

             MOV R1, #10           ; load counter R1 =10  

AGAIN: ADD A, # 05             ; add five to register A  

             DJNZ R1, AGAIN     ; repeat until R1=0 (10 times)  

             MOV R3, A              ; save A in R3  

             END</div>
```
s
SJMP: Program counterdan en fazla yarım byte uzaklıklarda bulunan bir yere atlamak için kullanılır.  

LJMP: Program counterdan yarım bytedan fazla uzaklıklarda bulunan bir yere atlamak için kullanılır.  

LCALL: Fonksiyon tanımlayıp çağırmak benzeri bir kullanımı vardır. Aşağıdaki örneği inceleyebilirsiniz.  

             ORG 0H  
BACK : MOV A, #55H            ; load A= 55 hex value  
             MOV P1, A                ; issue value of register A to port1  
             LCALL  DELAY        ; to call DELAY function created below  
             MOV A, #0AAH         ;load AAH hex value to A  
             MOV P1,A                  ;issue value of register A to port 1  
             LCALL DELAY         ; to call DELAY function as created below  
             SJMP BACK              ; keep doing this  
                                               ; ________ this is the delay subroutine  
             DELAY:  
             MOV R5, #0FFH         ; R5= 255 hex, the counter  
AGAIN: DJNZ R5, AGAIN       ; stay here until R5 becomes zero  
             RET                           ; return to caller  
             END</div>

## MOVX komutu
MOVX komutu harici RAM'den veri alış verişi yapmak için kullanılır.  

MOV      R0, #50H  
MOVX   A, @R0  
Bu iki satır kod ile harici RAM'deki 50H adresli yerdeki veri Accumulator registerına yüklenir.  

MOV      DTPR, #5000H  
MOVX   A, @DTPR  

DTPR registerı 16 bitliktir. Eğer 8 bitten büyük adresteki bir veriye ulaşılmak istenirse DTPR registerı kullanılabilir.  

**POP ve PUSH komutu**  
Stack işlemleri için kullanılır. Stack ilk giren datanın en son çıktığı veri yapısı çeşididir.  

```
MOV R6,#25H;
MOV R1,#12H; 
MOV R4,#OF3H; 
PUSH 06H;
PUSH 01H; 
POP 04H;
```

Bu kod şöyle çalışacaktır. 25H sayısı (R6) stack'e eklenir.  12H sayısı stack'e eklenir. 12H sayısı stackten çıkarılır.

<div>  
**XCH komutu**  
XCH A, R2 şeklinde kullanılır. A ve R2nin içeriklerini değiştirir böyle kullanıldığında.  

**MOVC komutu**  

### **Harici RAM ve ROM kullanımı**

<div>8051 ile harici ram veya romlar çalıştırılabilir. Bunun için öncelikle 8051 üzerindeki bazı pinlerin ne işe yaradığıyla başlayalım.</div>

<div>**ALE/PROG pini:** Adress Latch Enable. Harici ram erişimi sırasında kullanılır. Mandallama işlevi vardır.</div>

<div>**PSEN pini:**  Program Store Enable. Harici program hafızasından veri okunacağı zaman kullanılır. Ayrıca harici rom veya epromlara  OE giriş pini olarak da kullanılır.</div>

<div>**EA pini:** External Adress. 0 olduğu zaman mikrokontrolcü program kodunu dışarıdan alabilir.  
**RD pini:** Okuma işlemini "enable" yapmak için kullanılır.  
**WR pini:** Yazma işlemini "enable " yapmak için kullanılır.</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://1.bp.blogspot.com/-DmQjmwjLeFM/VjqdGYxkMfI/AAAAAAAAOps/kOfQ02wBFBI/s400/8051-pin-diagram1.jpg)](https://1.bp.blogspot.com/-DmQjmwjLeFM/VjqdGYxkMfI/AAAAAAAAOps/kOfQ02wBFBI/s1600/8051-pin-diagram1.jpg)</div>

**Harici Program Belleği Kullanımı**  

<div class="separator" style="clear: both; text-align: center;">[![](https://4.bp.blogspot.com/-4sFt53OMVzs/VjqnQAe1gsI/AAAAAAAAOp8/GyB_BTnFiPE/s640/fig3.JPG)](https://4.bp.blogspot.com/-4sFt53OMVzs/VjqnQAe1gsI/AAAAAAAAOp8/GyB_BTnFiPE/s1600/fig3.JPG)</div>

**Harici Veri Belleği Kullanımı**  

<div class="separator" style="clear: both; text-align: center;">[![](https://1.bp.blogspot.com/-O8yzo3TmaQc/Vjqn3O4ApAI/AAAAAAAAOqE/1VCrQw-3BGo/s640/Untitled.png)](https://1.bp.blogspot.com/-O8yzo3TmaQc/Vjqn3O4ApAI/AAAAAAAAOqE/1VCrQw-3BGo/s1600/Untitled.png)</div>

**Adres Ayrıştırma**  
Bazı durumlarda adres değerleri için yeterli bit sayısına sahip olunamayabilir. Bu soruları çözmek için adres çözücü devreler kullanılır.  

### **Paralel Uygulamalar**

### ADC-DAC Kullanımı

### Timer Uygulamaları

</div>

<div>

### **Uzun Lafın Kısası**

Aşağıdaki 2 görsel işlemci mimarisini çok iyi açıklayan 2 şema peki bize ne anlatıyorlar.  

<div class="separator" style="clear: both; text-align: center;">[![](https://4.bp.blogspot.com/-Cz2wvnB7EBc/Vjip-41saWI/AAAAAAAAOnE/c9ihppaVK0c/s640/architecture_s.jpg)](https://4.bp.blogspot.com/-Cz2wvnB7EBc/Vjip-41saWI/AAAAAAAAOnE/c9ihppaVK0c/s1600/architecture_s.jpg)</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://1.bp.blogspot.com/-pp8NbAyNGXM/Vjip-wv2UMI/AAAAAAAAOnI/NnDlcfyacUw/s640/01.gif)](https://1.bp.blogspot.com/-pp8NbAyNGXM/Vjip-wv2UMI/AAAAAAAAOnI/NnDlcfyacUw/s1600/01.gif)</div>

</div>

<div>

### 8051 Entegresi Instruction Set

<div class="separator" style="clear: both; text-align: center;">Aşağdaki linkte hepsini kullanım anlatımlarıyla beraber bulabilirsiniz. Aynı zaman da OP-Code'ları da verilmiştir.</div>

<div class="separator" style="clear: both; text-align: center;">[https://www.win.tue.nl/~aeb/comp/8051/set8051.html](https://www.win.tue.nl/~aeb/comp/8051/set8051.html)</div>

<div class="separator" style="clear: both; text-align: center;">Aşağıdaki 2 resimde ise sık kullanılan komutları açıklamalarıyla bulabilirsiniz.</div>

<div class="separator" style="clear: both; text-align: center;">[![](https://2.bp.blogspot.com/-2bs2b_ITBsk/VjjAX1OUMfI/AAAAAAAAOnc/UUajD1pycVE/s640/1.PNG)](https://2.bp.blogspot.com/-2bs2b_ITBsk/VjjAX1OUMfI/AAAAAAAAOnc/UUajD1pycVE/s1600/1.PNG)</div>

[![](https://4.bp.blogspot.com/-Tc4MjvFq0us/VjjAX1hOFYI/AAAAAAAAOng/y7t_hF5X26E/s640/2.PNG)](https://4.bp.blogspot.com/-Tc4MjvFq0us/VjjAX1hOFYI/AAAAAAAAOng/y7t_hF5X26E/s1600/2.PNG)  

</div>