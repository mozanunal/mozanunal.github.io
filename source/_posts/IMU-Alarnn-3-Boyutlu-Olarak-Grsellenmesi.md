title: |
  IMU Açılarının 3 Boyutlu Olarak Görsellenmesi
tags:
  - Arduino Projeleri
  - Hava Araçları
  - Arduino
  - IMU Açılarının 3 Boyutlu Olarak Görsellenmesi
  - IMU nedir
  - Inertial measurement unit
  - mpu6050
categories:
  - Otonom Hava Araçları
author: Mehmet Ozan Ünal
date: 2014-11-07 14:15:00
---
**Herkese Merhabalar!**  
Bu yazımda size hava araçlarının en temel elektronik ekipmanı olan IMU modullerinden bahsetmek istiyorum. IMU modullerinin hayati önem taşımasının sebebi, modüllerin yönelim açılarını hesaplamak için kullanılmasıdır. En büyük yolcu uçağından, roketten en küçük bir quadrokoptere kadar tüm hava araçları stabil ve sağlıklı bir uçuş için bu modullerden birine sahip olmalıdırlar.  
<!-- more -->  
IMU ingilizcedeki "Inertial Mesurament Unit" kelime grubunun kısaltılmış halidir. IMU ile bir cismin uzaydaki 3 boyutlu yönelimi bulunabilir. 3 boyutlu yönelimi anlatmanın  en kolay yolu Euler Açılarını kullanmaktır. Havacılık sektöründe sıklıkla Euler açılarının özelleşmiş bir versiyonu olan "Yaw, Pitch, Roll" açıları kullanılmaktadır.  

[![](http://2.bp.blogspot.com/-n9G38M4slSU/VFxIzRYinOI/AAAAAAAAE-4/ZKWB6syUwrs/s1600/rotations1.gif)](http://2.bp.blogspot.com/-n9G38M4slSU/VFxIzRYinOI/AAAAAAAAE-4/ZKWB6syUwrs/s1600/rotations1.gif)

Bir nesnenin uzaydaki yönelimini bulmak için 3 temel sensör kullanılır. Bunlar ivmeölçer, gyro ve magnometredir. Bu üç sensörün bir arada kullanılmasının nedeni şudur: İvme ölçer ile Pitch ve Roll açısı tespit edilebilir fakat hareket anında gürültü oluşur ve doğru bilgi elde edilemez, Gyro ise 3 eksendeki açısal hızları verir. Eğer ilk açı bilinmiyorsa sadece gyro ile şu anki açılar hesaplanamaz, sadece açısal hız üzerinden açısal açı değişimi hesaplanabilir. Gyronun ikinci kötü özelliği ise "Drift" özelliğidir. Gyro sabit durun bir cisimde bile küçük de olsa açısal hızlar hesaplar. Bu nedenle sadece Gyroya bağlı sistemlerde hesaplanan açılar yavaş yavaş kayar. Bunu engellemek için bazı filtreler kullanılır. Bu filtrelerin amacı Gyro üzerinden verileri alıp ivme ölçer üzerinden bu verileri düzeltmektir. Böylece drift engellenmiş olur ve sadece ivmeölçere bağlı olunmadığı için hareket halindeki gürültü sonuçlardan kurtulunmuş olur. Fakat ivmeölçer sadece pitch ve roll açılarını hesaplayabildiği için yaw eksenine referans olamaz. Yaw eksenine referans olması için kullanılan modül magnometredir. Bu sayede değişik algoritmalar ve filtreler kullanılarak gyro üzerinden hesaplanan açısal değişimler, pitch ve roll eksenlerinde ivmeölçer, yaw ekseninde ise magnometre tarafından düzeltilerek yönelim açılarının hesaplanması sağlanır.  

Yaw, Pitch, Roll açıları yani Euler açıları bazı durumlarda 3 boyutlu yönelimi açıklamada yetersiz kalır. Özetlemek gerekirse rotasyonlar sonucu eğer eksenler üst üste gelirse özgürlük derecesi kaybı yaşanır. Rotasyon da 2 boyutlu uzaya sıkışmak zorunda kalır. Bu duruma Gimbal Lock denir. Gimbal Lock kavramının açıklandığı şu videoyu izleyebilirsiniz.  

<center>{% youtube zc8b2Jo7mno %}</center>

İşte bu gimbal lock sorunu ortadan kaldırmak için 3 boyutlu yönelimi göstermek için yeni yöntemler bulunmuştur. Bunlardan başlıcaları "Quaternion " ve " Direction Cosine Matrix" yöntemleridir. Artık yönelimi göstermek için 3 açı yerine "Quaternion"da 4 değişkenli bir vektör ve "Direction Cosine Matrix"te 3x3'lük bir matris ve çok daha karışık algoritmalar kullanılır. IMU sensörlerin beraber çalışması için kullanılan bazı algoritmaları aşağıda kısa bilgilerle birlikte yazacağım.

Complementary Filter: Sabit bir ağırlıklı ortalama oranıyla gyro verileri ile referans verilerin ortalaması alınması yöntemidir. En basit algoritmadır. Genelde hobi amaçlı ve işin mantığını kavrama amaçlı uygulamalarda kullanılır.

Kalman Filter: Karmaşık bir algoritması vardır değişken ağırlıklı ortalama oranıyla hesaplama yapar, bu oranı hesaplamak için çok farklı yöntemler kullanabilir.

Mahony Madwick Filter: 3 sensörden alınan verilerle quaternion hesaplamak için kullanılan filtredir.

Direction Cosine Matrix: Basitçe yönelim vektörü ile 3 koordinat ekseni arasındaki açıların kosinüslerinden oluşan matristir.

Ben de bu anlattıklarımı somutlaştırmak adına İmu açılarının 3 boyutlu görsellenmesi üzerine bir proje yaptım. Bu projede ne yazık ki Imu değerlerini kendim hesaplamadım FreeIMU kütüphanesini kullandım. Görselleme Gimbal Lock sorunundan açınmak için Quaternion kullanılarak yapıldı. Sensör olarak MPU6050 sensörünü kullandım. İçinde 3 eksen gyro ve 3 eksen ivme ölçer bulundurmakta. 3 boyutlu görselleme için processing programa dilinde yazılan bir uygulamayı kullandım.

<a href="https://drive.google.com/file/d/0B5j__Lyt9ozbeUVqNHNkOFQyNjQ/view?usp=sharing">Projenin kaynak kodunu buradan indirebilirsiniz.</a>

<center>{% youtube 91m5zdq_KBs %}</center>
