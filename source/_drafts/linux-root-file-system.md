---
title: Linux Dosya Sistemi Yapısı?
tags:
  - rootfs
  - linux
  - file system
  - dosya sistemi
categories:
  - Linux ve Programlama
---

**Herkese Merhabalar,**
Linux programlama ilk başladığım zaman en ilginç gelen özelliklerinden biri root dosya sistemi olmuştu. Bilmeyenler için hemen özetleyeyim; Linux tabanlı işletim sistemlerinde sistemdeki her şey dosyadır. Çalıştırabileceğimiz uygulamalar veya saklamak istediğimiz şeylerin dosya olması anormal değil tabi ki. **Her şey** kelime grubunu gerçek anlamıyla kullanıştım. Linuxta bilgisayar bağlı lan tüm aygıtlar( serial, ses giriş çıkışları, yazıcı, joystick) ya da tüm bağlantılar (ethernet, wifi), prosesler,  açma kapatmadan sorumlu olan şeyler bile dosyalardan oluşmaktadır. Tüm bunları içeren dosya sistemine de kök dosya sistemi denir. Bu dosya sisteminde linuxun çalışması için gerekli bütün dosyalar bu sistemde bulunur. Genel olarak şunları bölümleri şunlardır.

**/bin**
Açılış sırasında normal kullanıcılar tarafından kullanılabilecek komutlar (muhtemelen açılıştan sonra).

**/sbin**
Bin gibi, ancak komutlar normal kullanıcılara yönelik değildir, ancak gerekirse bunları kullanabilirler. / sbin genellikle normal kullanıcıların varsayılan yolunda değil, ancak kök varsayılan yolundadır.

**/etc**
Konfigürasyon dosyaları makineye özgüdür.

**/root**
Kullanıcı kökü için ana dizin. Bu genellikle sistemdeki diğer kullanıcılar tarafından erişilebilir değildir

**/lib**
Kök dosya sistemi üzerindeki programlar tarafından ihtiyaç duyulan paylaşılan kütüphaneler.

**/lib/modules**
Yüklenebilir çekirdek modülleri, özellikle felaketlerden kurtulma işlemi sırasında sistemi önyüklemek için gerekli olanlar (ör. Ağ ve dosya sistemi sürücüleri).

**/dev**
Aygıt dosyaları. Bunlar, sistemdeki çeşitli aygıtlarla kullanıcı arabirimine yardımcı olan özel dosyalardır.

**/tmp**
Geçici dosyalar. Adından da anlaşılacağı gibi, çalışan programlar genellikle geçici dosyaları burada saklamaktadır.


**/boot**
Önyükleme yükleyicisi tarafından kullanılan dosyalar, örneğin LILO veya GRUB. Çekirdek görüntüleri genellikle kök dizinde değil, burada saklanır. Birçok çekirdek görüntüsü varsa, dizin kolayca kolayca büyüyebilir ve ayrı bir dosya sisteminde tutmak daha iyi olabilir. Başka bir sebep, çekirdek görüntülerinin bir IDE diskinin ilk 1024 silindiri içerisine girdiğinden emin olmaktır. Çoğu durumda bu 1024 silindir sınırı artık doğru değil. Modern BIOS'lar ve daha sonraki LILO sürümleri (LInux YÜKLEYİCİ) ile 1024 silindir sınırı mantıksal blok adresleme (LBA) ile iletilebilir. Daha fazla bilgi için lilo kılavuz sayfasına bakın.

**/mnt**
Sistem yöneticisi tarafından geçici bağlar için montaj noktası. Programların / mnt'e otomatik olarak bağlanmaları beklenmemektedir. / mnt, alt dizinlere bölünebilir (ör. / mnt / dosa bir MS-DOS dosya sistemi kullanan disket sürücüsü olabilir ve / mnt / exta bir ext2 dosya sistemiyle aynı olabilir).

**/proc**
** /usr**
** /var**
**/home**
Diğer dosya sistemleri için puan takın. Her ne kadar / proc gerçekte herhangi bir diskte bulunmuyorsa da, burada hala belirtilmiştir. Bu bölümdeki / proc hakkında daha sonra bölümüne bakın.
