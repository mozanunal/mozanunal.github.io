---
title: '[TR] SimpleDSP: Gömülü Sistemler için DSP Kütühanesi'
tags:
  - Arduino FFT
  - Electronics
  - Arduino
  - DSP
  - Inverse FFT
  - SimpleDSP
categories:
  - Signal Processing
  - DSP
date: 2017-01-26 00:13:00
---
**Herkese Merhabalar,**  

Bu yazımda gömülü sistemler için yazdığım sayısal isaret isleme kütüphanesini tanıtacağım. Kütüphanenin tamamını "C" kullanarak ve harici bir kütüphaneye bağlı kalmadan yazmayı planlıyorum. Böylece diğer mikrokontolcülerde de rahatça kullanılabilecek. Hatta bilgisayar programlarında bile kolayca eklenip derlenebilecek şekilde projeyi tamamlamak istiyorum. Bu kütüphane kapsamında çözüm sağlamak istediğim konular şunlardır.  

*   FFT
*   ters FFT
*   Hartley transform
*   FIR filtre
*   IIR filtre
*   Basit "moving avarage", "smoothing" filtreleri

Ayrıca her fonksiyon için:  

*   Teorik olarak yapılan iş
*   Deneme, ölçüm ve filtre katsayısı hesabı için gerekli Matlab veya Octave kodu.
*   Farklı islemcilerle performansı
*   Örnek Grafikler

gibi kaynakları hazırlamayı planlıyorum. Proje tamamen açık kaynaklı olarak sürdürülecektir. [Siz de github üzerinden projenin herhangi bir aşamasına katkıda bulunabilirsiniz.](https://github.com/mozanunal/SimpleDSP/) Projenin ismini "SimpleDSP" olarak seçtim. Çünkü yapmak istediğim olay Digital Signal Processing olayını gömülü ve gerçek zamanlı sistemlerde kolaylaştırmak ve projelerde basit bir şekilde eklenebilmesini sağlamak. Şu an itibariyle FFT ve ters FFT fonksiyonlarını yazdım arduino kütüphanesi haline getirdim ve örnek kodlarını oluşturdum. Bahsettiğim ayrıntılara aşağıdan ulaşabilirsiniz.  
[https://github.com/mozanunal/SimpleDSP/wiki/FFT-IFFT](https://github.com/mozanunal/SimpleDSP/wiki/FFT-IFFT)  

![](https://3.bp.blogspot.com/-_D7YzurT3TU/WJpIRRCd2UI/AAAAAAAAgv0/hc-M_YRJfEA5VDFKkTpZ12EOfgqmDgccwCK4B/s640/Capture.PNG)

![](https://4.bp.blogspot.com/-exg_pbzTsic/WJpIRE1bRII/AAAAAAAAgvs/XX7gjJlWuhEtPyAmobVN171Lcs3hBPMJACK4B/s400/sd.PNG)
