title: |
  Pixhawk Otopilot ve Özellikleri
tags:
  - Hava Araçları
  - Otopilot
  - Ardupilot
  - Pixhawk
categories:
  - Drone
author: Mehmet Ozan Ünal
date: 2016-09-01 14:26:00
---
**Herkese Merhabalar,**  
        Uzun bir aradan sonra tekrar bir yazı hazırladım. Aslında bu yazıya çok önceden başlamıştım fakat devamını getirmemiştim şimdi tamamlayabildim ancak :). Evet bu yazımda Pixhawk isimli otopilottan bahsetmek istiyorum. Pixhawk açık kaynak kodlu Stm32 tabanlı yazılım tabanı olarak da ArduPilota dayanan bir otopilot modülü. Burada bir yorumda bulunmam gerekirse, açık kaynaklı otopilotlar arasında en başarılısı bana göre. Bu teorimi kanıtlamak için de hemen özelliklerine geçmek istiyorum.  

<!-- more -->  

<div class="separator" style="clear: both; text-align: center;">[![](https://4.bp.blogspot.com/-p4zpkVZrQWU/V8faC6OGbjI/AAAAAAAAc_U/rx-zCY8cZksKXnRpi2GC8lY-b-aB_MA_ACLcB/s640/pic-prod-pixhawk1.jpg)](https://4.bp.blogspot.com/-p4zpkVZrQWU/V8faC6OGbjI/AAAAAAAAc_U/rx-zCY8cZksKXnRpi2GC8lY-b-aB_MA_ACLcB/s1600/pic-prod-pixhawk1.jpg)</div>

<div class="separator" style="clear: both; text-align: center;"><span id="goog_1200680686"></span><span id="goog_1200680687"></span>  
</div>

*   Ana işlemcisi 32 bit Arm Cortex M4 tabanlı ST Microelectronic'in bir ürünü( STM32F427 Cortex M4 core with FPU).  Bu işlemci "NuttX Real Time Operating System" ile kullanılıyor. 

*   14 Adet PWM çıkışı bulunuyor.(Motor ve servomotor için)

*   Bordunun üzerinde Uart I2C CAN gibi çevresel birimler bulunuyor. Bunlarla çalışan herhangi bir sönsör, kontrol elemanı kolayca eklenebilir. 

*   Durum belirtlme için çok renkli LED indicator üzerinde hazır geliyor.

*   Sd kart desteği sayesinde uzun süre ve yüksek frekansta sensör verisini daha sonra incelemek için kaydedebiliyorsunuz.

*   Kritik noktalardan biri olan uçuş için gerekli sensör gurbu şöyle:

*   ST Micro L3GD20 3-axis 16-bit gyroscope

*   ST Micro LSM303D 3-axis 14-bit accelerometer / magnetometer

*   Invensense MPU 6000 3-axis accelerometer/gyroscope

*   MEAS MS5611 barometer

*   Spektrum DSM / DSM2 / DSM-X® Satellite, S.BUS uyumlu.(Kumanda haberleşmesi için)

*   Güç sistemi özellikleri:

*   Diyot kontrolcüsü "automatic failover" özelliğiyle birlikte

*   7 V yüksek akımlı servo çıkışları

*   Tüm çıkışlar yüksek akım korumalı tüm girişlerinin de  "Electro Static Discharge(ESD)" testleri yapılmış.

*   STM32F103 failsafe co-processor olarak bulunuyor. Yani ana işlemcide bir sorun olursa operasyonlar bu yedek üzerinden devam ettirilebiliyor.

Yazımın devamında Pixhawk'ın özgür dünyasını kullanarak yapılan uygulamalardan ve yapılabileceklerden bahsetmek istiyorum.  

*   Her türlü araç tipini (multikopter, helikopter, uçak, kara araçları....) destekliyor.
*   Her türlü multikopter tipini (tricopter,quadcopter, hekzacopter, koaksiyelleri...) destekliyor.
*   Optical flow, akım sensöü gibi başka otopilotlarda pek olmayan sensörleri destekliyor
*   OSD çıkışı mevcut
*   Oto paraşüt özelliği
*   Gimbal kontrolü
*   Antenna tracker desteği
*   Phyton ile ile kodun ana kısmına hiç bakmadan harici bi görev uygulaması yazıp derleyip ekleyebilme
*   Loglarını kullanarak resimlere "Geotag" yapabilme

**Pixhawk için yararlı linkler**  
[  
](https://www.blogger.com/goog_469727306)[http://dev.px4.io/](http://dev.px4.io/)  
[http://ardupilot.org/copter/](http://ardupilot.org/copter/)  
[http://ardupilot.org/copter/docs/common-table-of-contents.html](http://ardupilot.org/copter/docs/common-table-of-contents.html)  
Çoğu linkin alındığı anasayfa  

Donanımsal Kurulum linkleri  
[http://ardupilot.org/copter/docs/configuring-hardware.html](http://ardupilot.org/copter/docs/configuring-hardware.html)  
motor kurulumu, yerleşim dönme yönleri vb  
[  
](https://www.blogger.com/goog_469727340)[http://ardupilot.org/copter/docs/common-minim-osd-quick-installation-guide.html](http://ardupilot.org/copter/docs/common-minim-osd-quick-installation-guide.html)  
[https://code.google.com/p/arducam-osd/wiki/minimosd](https://code.google.com/p/arducam-osd/wiki/minimosd)  
Osd kurulum linkleri  

[http://copter.ardupilot.com/wiki/common-telemetry-landingpage/](http://copter.ardupilot.com/wiki/common-telemetry-landingpage/)  
Telemetri modül kurulum  

[http://copter.ardupilot.com/wiki/common-px4flow-overview/](http://copter.ardupilot.com/wiki/common-px4flow-overview/)  
Optical flow sensör kurulum  

[http://copter.ardupilot.com/wiki/parachute/](http://copter.ardupilot.com/wiki/parachute/)  
Oto paraşüt özelliği  

[http://copter.ardupilot.com/wiki/common-servo/](http://copter.ardupilot.com/wiki/common-servo/)  
Uzaktan servo kontrolü  

[http://copter.ardupilot.com/wiki/common-electro-permanent-magnet-gripper/](http://copter.ardupilot.com/wiki/common-electro-permanent-magnet-gripper/)  
Manyetik bırakma mekanizması  

[http://copter.ardupilot.com/wiki/common-cameras-and-gimbals/](http://copter.ardupilot.com/wiki/common-cameras-and-gimbals/)  
Otopilot ile gimbal kontrolü  

[http://copter.ardupilot.com/wiki/common-3d-mapping/](http://copter.ardupilot.com/wiki/common-3d-mapping/)  
3d maping  

<span style="color: #0000ee;"><u>[http://ardupilot.org/copter/docs/common-antenna-tracking.html](http://ardupilot.org/copter/docs/common-antenna-tracking.html)</u></span>  
Antenna Tracking özelliğini kullanma  

[http://ardupilot.org/copter/docs/common-powermodule-landingpage.html](http://ardupilot.org/copter/docs/common-powermodule-landingpage.html)  
akım sensörü  

Otopilotun Kodunu değiştirme  
<span style="color: #0000ee;"><u>[http://dev.px4.io/starting-building.html](http://dev.px4.io/starting-building.html)</u></span>  
[  
](https://www.blogger.com/goog_543916667)[http://planner.ardupilot.com/wiki/common-geotagging-images-with-mission-planner/](http://planner.ardupilot.com/wiki/common-geotagging-images-with-mission-planner/)  
"Geotagged" resimler mission plannerla.  

**Kurulum ve Ayarlar linkleri**  
[  
](https://www.blogger.com/goog_543916669)[http://copter.ardupilot.com/wiki/flying-arducopter/](http://copter.ardupilot.com/wiki/flying-arducopter/)  
ilk uçuş hakkında kapsamlı bilgi her başlığı incelemek gerekli  
az çok gerekli bütün ayarların nasıl yapılacağı anlatılmış  

[  
](https://www.blogger.com/goog_543916675)[http://copter.ardupilot.com/wiki/arducopter-parameters/](http://copter.ardupilot.com/wiki/arducopter-parameters/)  
ayarlanabilecek tüm parametreler ve ne işe yaradıkları  
[  
](https://www.blogger.com/goog_543916679)[http://copter.ardupilot.com/wiki/failsafe-battery/](http://copter.ardupilot.com/wiki/failsafe-battery/)  
battery failsafe  

[http://copter.ardupilot.com/wiki/initial-setup/](http://copter.ardupilot.com/wiki/initial-setup/)  
İlk uçuş kalibrasyonu  
[  
](https://www.blogger.com/goog_543916683)[http://planner.ardupilot.com/wiki/common-loading-firmware-onto-pixhawk/](http://planner.ardupilot.com/wiki/common-loading-firmware-onto-pixhawk/)  
Pixhawk üzerine kodu yükleme  

[http://ardupilot.org/copter/docs/common-compass-setup-advanced.html](http://ardupilot.org/copter/docs/common-compass-setup-advanced.html)  
Magnometer calibration( Çok önemli!!!)  

[http://planner.ardupilot.com/wiki/common-mission-planner-telemetry-logs/](http://planner.ardupilot.com/wiki/common-mission-planner-telemetry-logs/)  
Waypoint yükleme  

[  
](https://www.blogger.com/goog_543916695)[http://www.qgroundcontrol.org/mavlink/start](http://www.qgroundcontrol.org/mavlink/start)  
Mavlink communication protocol  

[http://dev.ardupilot.com/wiki/code-overview-adding-a-new-mavlink-message/](http://dev.ardupilot.com/wiki/code-overview-adding-a-new-mavlink-message/)  
Mavlink yeni mesaj oluşturma  
