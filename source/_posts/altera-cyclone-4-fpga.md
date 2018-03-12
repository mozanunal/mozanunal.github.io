---
title: Altera(Intel) Cyclone IV ile FPGA Dünyasına Giriş
tags:
  - verilog
  - altera
  - cyclone
  - quartus
categories:
  - Elektronik
  - FPGA
date: 2018-03-05 21:48:22
---

**Herkese Merhabalar,**
Son yıllarda hobi elektroniği inanılmaz bir hızla gelişti. Şüphesiz bu hızlı gelişmenin mimarı Arduino. Atmelin 8 bitlik işlemcilerini temel alarak tasarlanan bu kart ve programala dili sayesinde insanlar kolayca projeler geliştirmeye ve hobi uygulamaları yapmaya başladılar. Ama Arduinonun ve hatta daha iyi bir mikroişlemcinin de yeterli olmadığı projeler var. Böyle bir ihtiyaç doğduğunda seçenekler kendini geliştirmek isteyenler için çok sıkıntılı hale geliyor. Önceki yazılarımdan birinde STM32 öğrenmeye nasıl başlanır ve proje nasıl oluşturulur onu anlatmıştım. Bu sefer mikroişlemcinin yanı sıra bir fpga üzerine gitmek istiyorum. Mesela yüksek hesaplama gücü ve paralel işlem gerektiren proje yapmak istiyorsunuz ve fgpa öğrenmek istiyorsunuz. Nasıl başlayabilirsiniz onu anlatmak istiyorum.

### Geliştirme Kartı Seçimi
İlkönce geliştirme kartımızdan bahsedeyim. Ben üzerinde Cyclone IV bulunan Altera(Artık Intel oldu) marka bir kart seçtim. İlk nedenim **maliyet**. Usb blasterıyla birlikte oldukça uygun fiyatlara( **22$**) alabiliyorsunuz. Fpgaler mikroişlemciler göre oldukça pahalı malzemeler o yüzden böyle bir başlangıç yapmak istedim. Diğer bir avantajı da bence geliştirme ortamının(Quartus) **daha hafif** olması ve lite sürümünde **lisans prolemi** yaşamadan kullanabilinmesidır. Xillinx fpgaleri hem ISEde hem VIVADOda kullandım.  Geliştirme ortamları oldukça ağır ve ayarlama süreçleri daha sancılı geldi bana. Tabi bu konu malesef çok tecrübeli olduğum bir konu değil. Mesela büyük ve karmaşık projelerde daha büyük kolaylıklar sağlıyor olabilir. Bir diğer dezavantaj da geliştirme kartının üzerinde 2 buton ve 1 ledden başka direk kullanabileceğimiz ekipmanlar yok. Fakat elimizde bir sürü gpio var, her türlü sensörü biraz uğraşarak bağlamamız mümkün o yüzden bu durumu büyük bir problem olarak görmüyorum.
* [Fpga Kartı](https://www.aliexpress.com/item/Free-shipping-EP4CE6-altera-fpga-board-fpga-development-board-fpga-altera-board-fpga-development-board-cyclone/32709028421.html?spm=a2g0s.9042311.0.0.VBIflb)
* [Usb Blaster](https://www.aliexpress.com/item/altera-Mini-Usb-Blaster-Cable-For-CPLD-FPGA-NIOS-JTAG-Altera-Programmer/2038559613.html?spm=a2g0s.9042311.0.0.NiCA6G)

### Bağlantılar
Fpga kartını aşağıdaki gibi bağlamalıyız. Bunun için bilgisayarımızda 2 adet usb portu olması gerekir. İlk port güç için kullanılıyor. İkinci port da jtag olarak kullanılıyor; buradan kod yükleme, debug gibi operasyonları gerçekleştirebiliriz.

![Altera Cyclone IV](/images/1517774609687.png)

Aşağıda ise geliştirme kartının pin bağlantılarını bulabilirsiniz. Bunu aliexpressden kopyaladım. Çok güvenilir bi kaynak değil ama pinleri kontrol ettim problem yok.
![pinout](/images/1517769802607.png)


### Proje oluşturma
Bu bölümde Quartus Prime kullanarak nasıl proje oluşturacağımızı anlatacağım. Aşağıdaki ekran açılış ekranı. Burdan yeni proje oluşturmayı seçiyoruz.

![Quartus Lite 17](/images/1517768578946.png)

Projemizi oluşrutulacağı dosya dizini ve ismini seçiyoruz.

![New Project Wizard](/images/1517768612762.png)

Proje tipi olarak boş proje seçiyoruz.

![Project Type](/images/1517768673693.png)

Burada Fpga kartımızın üzerindeki chipseti seçmemiz gerekir. Bu karttaki çipsetin tam ismi Cyclone IV EPCE6E22C8. Çipin üzerinden direk okuyabilirsiniz.

![Fpga Selection](/images/1517768688154.png)

Malesef Eda toolarıyla veya simülasyonla alakalı bir tecrübem olmadı henüz o yüzden boş bıraktım buraları.  
![Eda Tools](/images/1517768694911.png)

Bu proje oluşturma için son adımdı. Seçimlerimizle alakalı bir özet sayfası.

![Summary](/images/1517768702985.png)

### Hello World
Bildiğiniz gibi programlama dillerinde veya elektronik kartlarda ilk çalıştırılan koda-uygulamaya "Hello World" uygulaması denir. Biz de hello world uygulaması olarak and gate yapacağız.

Sol tarafta projedeki dosyaların ve modullerin hiyararşik dizilimini inceleyebilirsiniz. Proje geliştirme esnasında burası ile çok fazla haşır neşir olacaksınız. 
![Hierachy](/images/1517768710777.png)

Devamında projeye bir verilog dosyası ekleyebiliriz.

![New File](/images/1517768748975.png)

Oluşturulan dosya "top module" olarak seçilmelidir. Aşağıdaki verilog kodları yazıldıktan sonra üçgen mavi ok ile proje compile edilir. Peki compile aşamaları nelerdir derseniz: 
- İlkönce tariflediğimiz hardware'ın şeması oluşturulur. 
- O şema lutlar ile ve fpga üzerine uygulanabilecek hale getirilir.
- Oluşturulan yeni şema fpga üzerinde bi yerlere oturtulur. Bu işleme routing denir.
- Son olarak binary dosya oluşturulur. Sol alt kısımda görüldüğü gibi bütün işlemler yeşil olmalıdır. Yoksa kodunuzda bir problem var demektir.
![Compile Project](/images/1517770190974.png)
Bu arada kodu derlemen önce "Pin Planner" aracı kullanarak "top_module"deki giriş çıkışları gerçek pinlere bağlamak gerekir. Ben burada 2 butonu and kapısının girişlerine, ledi ise and kapısının çıkışına bağladım.
![Pin Planner](/images/1517770137749.png)
Projenin derleme raporunun bir kısmı aşağıdaki gibidir.
![Compile Report](/images/1517770103777.png)
Sonra "programmer" açılır. Usb blaster göremezse sürücülerinin güncellemesi gerekir. Eğer sürücü problemi yoksa Usb Blasterı otomatik gözükecektir.
![Programmer](/images/1517770315712.png)
![Hardware Setup](/images/1517770348265.png)
Son olarak start tuşuna bastığımızda kodu fpgaye yükleyecektir. Daha sonrasınd "key1" ve "key2" butonlarını kullanarak kodu test edebilirsiniz. Bu yazı için anlatacaklarım bu kadar. Projemizle fpga dünyasına hızlı bir giriş yapmış olduk. Hem de oldukça uygun fiyatlı bir paket ile. Umarım bu tarz cihazların kullanımı hobi elektroniğinde ve elektronik eğitiminde hızla artar. Tekrar görüşmek üzere...
![image](/images/1517774536266.png) 

https://www.altera.com/en_US/pdfs/literature/ug/ug_civgx_fpga_dev_kit.pdf



