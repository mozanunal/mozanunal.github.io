title: |
  STM32 Mikroişlemci Dünyasına Giriş
tags:
  - Arm cortex m3
  - stm32
  - stm32cubemx
  - stm32f103c8t6
categories:
  - Mikroişlemciler
author: Mehmet Ozan Ünal
date: 2016-11-08 15:53:00
---
**Herkese Merhabalar,**  
Bu yazımda yeni bir alana hızlıca bir giriş yapıyorum. Zaman zaman projelerimizde 8 bitlik atmel veya pic işlemcilerin beklentiyi karşılamadığı oluyor. Böyle durumlar için ST Microelectronics firmasının STM32 isimli 32 bitlik işlemcilerini önerebilirim. 32 Bit işlemciler için en çok kaynak bulanabilecek işlemci takip ettiğim kadarıyla. ST firması çoğu gelişitme aracını da ücretsiz olarak sağlıyor. Bu yazıda tanıtacağım kartlar Arm Cortex M3 mimarisi tabanlı geliştirme kartlarıdır. Peki bu çekirdeği neden seçtim? Bir cümleyle özetlemek gerekirse 8 bitlik islemcilere bariz üstünlük sağlayan ve projelerin pek çoğu için yeterli özelliklere sahip olan en uygun fiyatlı işlemci. Geliştirme kartı olmadan sadece işlemci 1 - 2 dolar gibi çok iyi bir fiyata sahip. Özelliklerine aşağıdan ulaşabilirsiniz.  

<div class="separator" style="clear: both; text-align: center;">[![](https://4.bp.blogspot.com/-GrS5W6x0GFI/VgCAn2yZNwI/AAAAAAAANwE/1SnU26znSGc/s640/M3-f2.png)](http://4.bp.blogspot.com/-GrS5W6x0GFI/VgCAn2yZNwI/AAAAAAAANwE/1SnU26znSGc/s1600/M3-f2.png)</div>

<a name="more"> 
Evet özellikler güzel peki nereden nasıl başlarım diyorsanız size bir kaç önerim var.  
Bu girişi yapmak için gerekli malzemeler:
*   STM32F103C8T6 geliştirme kartı
*   Stlink (Ya da FTDI üzerinden de kod yükleyebilirsiniz ama debug yapılmıyor)      [![](https://4.bp.blogspot.com/-hcfp-zBYQYc/WCHEZYljq2I/AAAAAAAAeVw/Lj5oTgaKB2UWjjmjGKf_rQI7UQQgJlc7ACK4B/s320/IMG_20160908_143527.jpg)](http://4.bp.blogspot.com/-hcfp-zBYQYc/WCHEZYljq2I/AAAAAAAAeVw/Lj5oTgaKB2UWjjmjGKf_rQI7UQQgJlc7ACK4B/s1600/IMG_20160908_143527.jpg)   ![stlink ile ilgili görsel sonucu](data:image/jpeg;base64,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)

<div>Gerekli programlar:</div>

<div>

*   STM32CUBEMX
*   SW4STM32

</div>

</div>

<div>İlkönce malzemelerimizi inceleyelim:  
        32 bitlik arm işlemcilerin ortak özelliği genellikle çok pinli ve küçük olmaları. Bu nedenle genellikle yüzey montaj teknolojisiyle lehimleniyor. Bu yüzden eğer sabit bir tasarımınız yoksa geliştirme yapacaksanız pinlerin denemeler icin dışarı çıkarıldığı geliştirme kartları kullanmak zorundasınız. Bu kartlar sayesinde pinlere rahatça erişebilir, genellikle üzerinde bulunan regülator, RTC, USB soketleri ve JTAG soketlerinin imkanlarından yararlanabilirsiniz.  
Aşağıdaki linkten bendeki geliştirme kartının devre şemasına ulaşabilirsiniz.  

STM32F103C8T6 Geliştirme Kartı  
[https://www.openimpulse.com/blog/wp-content/uploads/wpsc/downloadables/STM32F103C8T6-Schematic-Diagram.pdf](https://www.openimpulse.com/blog/wp-content/uploads/wpsc/downloadables/STM32F103C8T6-Schematic-Diagram.pdf)  
[https://www.openimpulse.com/blog/wp-content/uploads/wpsc/downloadables/STM32F103C8T6-ARM-Development-Board-Cortex-M3-Datasheet.pdf](https://www.openimpulse.com/blog/wp-content/uploads/wpsc/downloadables/STM32F103C8T6-ARM-Development-Board-Cortex-M3-Datasheet.pdf)  
[https://www.openimpulse.com/blog/wp-content/uploads/wpsc/downloadables/MINI-STM32-Schematic-Diagram.pdf](https://www.openimpulse.com/blog/wp-content/uploads/wpsc/downloadables/MINI-STM32-Schematic-Diagram.pdf)  

Geliştirme kartının biraz anlatmam gerekirse: Ana işlemcisi STM32F103C8T6 modeli Arm Cortex M3 tabanlı bir işlemcisi var. Neredeyse bütün pinleri kolayca ulaşılabilmesi için geliştirme kartında dışarı çıkarılmış. Ayrıca bir tane 8 Mhz, bir tane de 32khz kristal bağlanmış. Usb pinleri de uygun koruma dirençleri takılarak bir usb konnektörüne bağlanmış. Buradan hem usb üzerinden güç verilebiliyor hem de uygun programla usb üzerinden bilgisayar ile haberleşebiliriz. 3 adet jumper var bunları farklı yerlere takarak usb bağlantısını kesebiliyoruz, boot0 ve boot1 pinlerini ayarlayabiliyoruz. Kolayca reset atabilmek için bir adet butonumuz var ve güç olduğuni göstermek için bir adet ledimiz var.  

1\. Adım : STM32CUBEMX Üzerinden Projenin Oluşturulması  

STM32CUBEMX ST firması tarafından geliştirilen görsel ayarlama programıdır. Bu program sayesinde işlemcimizi görsel olarak ayarlayabiliriz ve o ayarlara uygun projeyi farklı IDE seçenekleri için oluşturabiliriz. Oluşturulan projede HAL driver veya CMSIS kütüphanesi ayarlarıyla uğraşmamıza gerek kalmaz CubeMX hepsini projeye ekler.  

STM32F103C8T6 işlemcisi seçilir.  
[![](https://4.bp.blogspot.com/-1YridbzAN8Q/WCGu6t-OL5I/AAAAAAAAeTo/8Wd_6dqHGwshZLU2Pit9lZIqxbkRrmTQgCK4B/s640/Capture.PNG)](http://4.bp.blogspot.com/-1YridbzAN8Q/WCGu6t-OL5I/AAAAAAAAeTo/8Wd_6dqHGwshZLU2Pit9lZIqxbkRrmTQgCK4B/s1600/Capture.PNG)  

Bizi karşalayan ekran böyle olacaktır. Buradan kullanmak istediğiniz "Çevresel Birimleri" seçip ayarlarını yapabiliriz. Örneğin Uart birimini aktifleştirip baud rate'ini 9600 olarak seçebiliriz. Hatta Uart RX için çalışan bir DMA interrupt'ı oluşturabiliriz. Üstelik sadece bir kaç tık ile.  

[![](https://4.bp.blogspot.com/-yBZjP8YyVlo/WCGyIcOf5HI/AAAAAAAAeUY/IJeXKXymiZQcf9GjRIjQBPdoZhZPCFPQACK4B/s640/Capture2.PNG)](http://4.bp.blogspot.com/-yBZjP8YyVlo/WCGyIcOf5HI/AAAAAAAAeUY/IJeXKXymiZQcf9GjRIjQBPdoZhZPCFPQACK4B/s1600/Capture2.PNG)  

Geliştirme boardu datasheetinden alınan devre şeması. CubeMX ayarlarken burdan yararlanılır.  

[![](https://3.bp.blogspot.com/-VEiE1zM2dbY/WCGyNutB-1I/AAAAAAAAeUg/kwneERWgousz7mMdh3-PE6Gv6TqSJT4ZgCK4B/s640/Capture5.PNG)](http://3.bp.blogspot.com/-VEiE1zM2dbY/WCGyNutB-1I/AAAAAAAAeUg/kwneERWgousz7mMdh3-PE6Gv6TqSJT4ZgCK4B/s1600/Capture5.PNG)  

Kristal bağlantıları uart ve usb bağlantıları aşağıdaki gibi ayarlanmıştır.  

[![](https://1.bp.blogspot.com/-lWTIQpAgXg8/WCGyZGr1AFI/AAAAAAAAeUo/uyh12xa-a_QnxbURS9jRORhAmTKHq-_FQCK4B/s640/Capture34.PNG)](http://1.bp.blogspot.com/-lWTIQpAgXg8/WCGyZGr1AFI/AAAAAAAAeUo/uyh12xa-a_QnxbURS9jRORhAmTKHq-_FQCK4B/s1600/Capture34.PNG)  
Örneğin usb ayarları aşağıdaki gibi yapılabilir.  
[http://www.st.com/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-utilities/stsw-stm32102.html](http://www.st.com/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-utilities/stsw-stm32102.html)  
[![](https://3.bp.blogspot.com/-yAEeVkWYtLg/WCGys1cEpmI/AAAAAAAAeVI/_lCOX1LTSmg9WkQMpApXAnLaRCldtBcpQCK4B/s320/CaptureUSb.PNG)](http://3.bp.blogspot.com/-yAEeVkWYtLg/WCGys1cEpmI/AAAAAAAAeVI/_lCOX1LTSmg9WkQMpApXAnLaRCldtBcpQCK4B/s1600/CaptureUSb.PNG)[![](https://2.bp.blogspot.com/-JvAwEfLXCdc/WCGyuKqeIdI/AAAAAAAAeVQ/votFdXj-g8MEGtrRKCu5n0WF-3NfBCXsACK4B/s320/CaptureUSB2.PNG)](http://2.bp.blogspot.com/-JvAwEfLXCdc/WCGyuKqeIdI/AAAAAAAAeVQ/votFdXj-g8MEGtrRKCu5n0WF-3NfBCXsACK4B/s1600/CaptureUSB2.PNG)  

Usb kullanmak istediğimizde Clock sorunun olacağını CubeMX önceden tahmin ettiği için uyarı veriyor.  

[![](https://1.bp.blogspot.com/-mGp96RsJ6ug/WCGygOLdTAI/AAAAAAAAeUw/oH9yvyoZ3j8Vv6lf9iW45yBZJDz4pco0wCK4B/s640/Capture3.PNG)](http://1.bp.blogspot.com/-mGp96RsJ6ug/WCGygOLdTAI/AAAAAAAAeUw/oH9yvyoZ3j8Vv6lf9iW45yBZJDz4pco0wCK4B/s1600/Capture3.PNG)  

Usbye göre clock ayarları aşağıdaki gibi yapılabilir.  

[](http://1.bp.blogspot.com/-mGp96RsJ6ug/WCGygOLdTAI/AAAAAAAAeUw/oH9yvyoZ3j8Vv6lf9iW45yBZJDz4pco0wCK4B/s1600/Capture3.PNG)[![](https://4.bp.blogspot.com/-7XRyXES73Eg/WCGyhVvny4I/AAAAAAAAeU4/goZo1trR4x0IE5ABx9m1prh-ZHytUEyFwCK4B/s640/Capture6.PNG)](http://4.bp.blogspot.com/-7XRyXES73Eg/WCGyhVvny4I/AAAAAAAAeU4/goZo1trR4x0IE5ABx9m1prh-ZHytUEyFwCK4B/s1600/Capture6.PNG)  

Her şey tamamlandığına göre artık projemizi oluşturabiliriz. Bunu ise sadece "Generate Project" buttonuna basarak ve devamında istediğimiz IDE seçerek yapıyoruz. Kendisi işlemcimize uygun paketleri indirip kuruyor ve projeyi oluşturuyor.  

[![](https://2.bp.blogspot.com/-GoCwZhY_LuQ/WCGywiGAz7I/AAAAAAAAeVY/Nwmd8OwFMpIXpimu73F2XJj5uOyVp9vbwCK4B/s640/Capture122.PNG)](http://2.bp.blogspot.com/-GoCwZhY_LuQ/WCGywiGAz7I/AAAAAAAAeVY/Nwmd8OwFMpIXpimu73F2XJj5uOyVp9vbwCK4B/s1600/Capture122.PNG)  

2\. Adım : SW4STM32 IDE Üzerinden Programın Yazılması ve Karta Yüklenmesi  

Sonraki adım olarak yazılım geliştirilmesi ve kodun derlenip karta yüklenmesi veya debug edilmesi kalıyor. Ben bu aşamada SW4STM32 kullandım. Bunu kullanma sebebim açıkcası öğrenmek istemem. Çünkü bu IDE açık kaynak kodlu Eclipse IDE üzerine geliştirilmiş bir IDE ve CubeMX tarafından destekeleniyor. Alternafik olarak KEIL veya TRUE STUDIO da kullanabilirsiniz.  

[![](https://3.bp.blogspot.com/-PN7sAb1IKiU/WCHEXee6sOI/AAAAAAAAeVo/eADaxdz_ccg2xyic9-ZO5Y--UFO4S7yiACK4B/s320/IMG_20160908_143527.jpg)](http://3.bp.blogspot.com/-PN7sAb1IKiU/WCHEXee6sOI/AAAAAAAAeVo/eADaxdz_ccg2xyic9-ZO5Y--UFO4S7yiACK4B/s1600/IMG_20160908_143527.jpg)  

IDE projenin import edilmesi de çok basit ayrıntılı olarak girmek istemiyorum aşağıdaki linkleri takip ederek projeyi bu IDE'ye yükleyip yazılımınızı geliştirmeye başlayabilirsiniz.  

[http://www.openstm32.org/Importing+a+STCubeMX+generated+project](http://www.openstm32.org/Importing+a+STCubeMX+generated+project)  
[https://drive.google.com/file/d/0B5j__Lyt9ozbWVM2SWJxXzJ3NDA/view?usp=sharing](https://drive.google.com/file/d/0B5j__Lyt9ozbWVM2SWJxXzJ3NDA/view?usp=sharing)  

<div class="separator" style="clear: both; text-align: center;">[](https://4.bp.blogspot.com/-QURCFKRxdZY/WCH2wsCZKzI/AAAAAAAAeWY/haLx3KxrrjkRqqKAc7tSpByGa2j_-YAsACKgB/s1600/IMG_20161108_184301.jpg)![](https://4.bp.blogspot.com/-QURCFKRxdZY/WCH2wsCZKzI/AAAAAAAAeWY/haLx3KxrrjkRqqKAc7tSpByGa2j_-YAsACKgB/s320/IMG_20161108_184301.jpg)[![](https://1.bp.blogspot.com/-QYa1Kkb9RUU/WCH2-8_u37I/AAAAAAAAeWg/472nobu8jYQe_OidyhBQ10-IolOO0ef0gCKgB/s200/IMG_20161108_183914.jpg)](https://1.bp.blogspot.com/-QYa1Kkb9RUU/WCH2-8_u37I/AAAAAAAAeWg/472nobu8jYQe_OidyhBQ10-IolOO0ef0gCKgB/s1600/IMG_20161108_183914.jpg)</div>

Bugünlük yazım bu kadar, önerilerinizi veya sorunlarınızı paylaşabilirsiniz. Tekrar görüşmek üzere...  

</div>