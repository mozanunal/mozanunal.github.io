title: |
  C# Gerçek Zamanlı Grafik Çizme Programı
tags:
  - 'C#'
  - 'Arduino C#'
  - arayüz
  - Arduino grafik
  - 'C# gerçek zamanlı grafik'
  - 'C# grafik'
  - 'C# realtime graphs'
  - Com Port
  - Serial Port
  - zedgraph
categories:
  -  Coding
author: Mehmet Ozan Ünal
date: 2014-05-27 05:17:00
---
**Herkese Merhabalar!**  
[Programın kaynak koduna buradan ulaşabilirsiniz.](https://github.com/mozanunal/serialPortGrapher)  
İkinci yazımda C# ile gerçek zamanlı grafik çizdirme uygulamasından bahsedeceğim. Bu uygulamada C# programlama dili ve Microsoft Visual Studio 2010 kullanılmıştır. C# ile grafik çizmemize olanak sağlayan zed graph kütüphanesinden yararlanılmıştır.[Bu kütüphaneyi buradan indirebilirsiniz](https://zedgraph.sourceforge.net/index.html). Sistemin genel algoritmasına bakarsak şöyle çalışır; seri porttan veri okunur, veri aralardaki virgüllere göre parse edilip labellera aktarılır, Eklenen "Timer" öğesi ile timerın her periyodunda zaman belirten labela geçen zaman kadar eklenir böylece kaçıncı saniye olduğu tutulur, aynı zamanda timerın her bir periyodunda x değerleri zaman, y değerleri data noktaları olmak üzere grafiğe bir nokta eklenir. Şimdi çalışma şeklini daha ayrıntılı bir şekilde inceleyelim.  

Mikrodenetleyici-bilgisayar iletişimi projelerinde olmazsa olmazlardan biri Seri porttan veri okumaktır. Bu sayede mikrodenetleyici ile iletişim kurabiliriz ve veri alışverişinde bulunabiliriz. Aynı zamanda bilgisayar kontrollü robotikte de komut vermek için  kullanılır. C# üzerinden serial port programı yazma işlemi oldukça kolaylaştırılmıştır. Seri port öğesi eklenir ve ayarları yapılır. Buradaki ayarlar veri transfer hızı hangi Com Portun okunacağının ayarı v.b. "Save to text" özelliği de gelen veriyi saklayıp sonra tekrar inceleme imkanı sunar.Asıl konumuz bu olmadığı için çok ayrıntıya girmiyorum zaten kolayca örnekleri bulunabilir.  

![](https://3.bp.blogspot.com/-OpTteyKRPkw/U4JijZMfddI/AAAAAAAAACo/Rw1kmXUUXNY/s720/Ekran+Al%C4%B1nt%C4%B1s%C4%B1.PNG)

İkinci kısım seri porttan alınan verinin uygun şekilde parçalandığı ve labellara aktarıldığı bölümdür. Bunun için "Display Text" isimli bir fonksiyon yazılmıştır. Bu fonksiyon ile gelen verinin her satırının şekli 
```
$,data1,data2,data3
```

olarak belirlenmiştir. Fonksiyonun algoritması şu şekildedir; gelen verinin ilk harfi "\$" değilse veriyi işlemez, eğer ilk harfi oysa virgül sayısına bakar(Stringin içinden belli bir karakteri arama fonksiyonu kullanılmıştır.), eğer o da 3'e eşit ise gelen veriyi virgüllere göre parçalar ve ilk kısım hariç("$") kalan veriyi, tek tek 3 ayrı labela aktarır böylece gelen data1, data2, data3 ayrı labellara aktarılmış olur.  
![](https://3.bp.blogspot.com/-igLoVYnnakU/U4JtR9fQCeI/AAAAAAAAADU/xnl9DY_IYns/s720/4.PNG)

Grafik çizdirme kısmına geçmeden önce grafiği çizen timerı açan ve kapatan 2 butondan bahsedeyim. Bunlar sayesinde grafik çizdirme başlatılır ve durdurulur. Yani butonların tıklama "event"lerinde sadece `timer1.enable=true;` ve `timer1.enable=false` kodu vardır.(Tabi ayrı ayrı birinde true olan diğerinde false olan )

![](https://2.bp.blogspot.com/-g9su7CqID_0/U4JtS_cz0fI/AAAAAAAAADI/nbJVSsGaQP8/s720/Ekran+Al%C4%B1nt%C4%B1s%C4%B1565.PNG)
Resimde altta eklediğimiz SeriPort ve timer1 öğesini görebilirsiniz. "FileDiaglog" öğeleri ise text dosyasına kaydetmek için ve bir text dostasını seri porttan yollamak için kullanılır.

ilk önce grafiğin ayarlarından başlayalım. Grafiğe bir çizim alanı yanı "pane" ekleyelim. Çizdiğimiz her şeyi hangi "pane"e çizdiğimizi belirtmek zorundayız. Eksenlere isim koymamız ve daha bir sürü ayar yapmamız mümkün ama ben karışıklık yaratmamak adına sade bir grafik tercih ettim. ZedGraph kütüphanesi yapabileceğiniz diğer ayarlar ile çok farklı grafikler çizdirme imkanı sunar. Grafiğin altını doldurma, nokta grafiği, sütun ve daire grafiği gibi çeşit ve renk opsiyonları mevcuttur. Bu çeşitlerin bazılarına [buradan](https://zedgraph.sourceforge.net/samples.html) ulaşabilirsiniz.

![](https://2.bp.blogspot.com/-BnQhYNdpYpY/U4PawOllbuI/AAAAAAAAADo/1qVUP9OzlL0/s720/Ekran+Al%C4%B1nt%C4%B1s%C4%B1.PNG)

Grafik ayarlarında önemli bir yerlerden biri de "Point pair list"in ve "Line item"ın belirlenmesidir. Çizilecek her eğri için birer tane bunlardan belirlenmelidir. "RolingPointPairList" seçilmesinin sebebi ise "rolling" olduğunda en fazla seçilen kadar(burada en fazla 40 nokta çifti) noktanın hafızada saklaması böylece bir süre sonra biriken noktaların bilgisayarda yavaşlama meydana getirmesinin engellenmesidir. Belli aralıklarla zaten grafik üstüne sağ tıklanarak resim olarak kaydetme opsiyonu da mevcuttur.

![](https://1.bp.blogspot.com/-hAOgV5UrDXo/U4JtR8Rk6eI/AAAAAAAAAC4/A-FNsqx61S0/s720/3.PNG)

Gelelim grafiği çizdirme kısmına. İlk önce grafiğe bir "Timer" öğesi eklenir ve periyodu 1000 ms(1 saniye) olarak belirlenir. Bu tamamen opsiyoneldir ne kadarlık zaman aralıklarında grafiğimize nokta eklenmesi istendiğine bağlıdır.İlk 3 satırdaki kodlar ile bir labelda şu anki saniyenin tutulması sağlanır(Zaman bizim x koordinatımız olduğu için anlık olarak kulanılması gereklidir). Sonraki kısımlar ise grafiğe nokta eklenmesi algoritmasıdır. Gelen verileri yukarıda parçalayıp labellara aktarmıştık burda ise o labellar ve zaman labelı kullanılarak nokta çifleri elde edilir. Nokta çiftleri, nokta listelerine aktarılır sonra bunlar birleştirilerek eğri çizilir. `myCurveOne = myPane.AddCurve(null, listPointsOne, Color.Blue, SymbolType.Circle) ` bu satır ile eğrinin hangi "pane"e çizileceği, rengi, noktaların gösteren sembol (yuvarlak,yıldız,kare), eğrinin altının dolu-boş olacağı belirlenir.  En alt kısımda grafik yenilerek yeni eğrinin çizilmesi graifğin gördüğümüz yerinin eğrimize paralel olarak uygun şekilde yer değiştirmesi sağlanır. Böylece Bilgisayara hiç değmeden grafiğin takibi otomatik olarak yapılmış olur.  

![](https://3.bp.blogspot.com/-9A-D0jYFs-A/U4JtRxN2SNI/AAAAAAAAAC8/0UROIHsdApY/s720/5.PNG)

Aşağıda programımızın son hali bulunmaktadır. En kısa zamanda videosunu eklemeye çalışacağım. Görselleme, telemetri projelerinde ve bilgisayarla kontrol projelerinde en önemli noktalardan biridir(ya da pid, sensor test ederken). Programımız da bu ihtiyaca yönelik yazılmıştır. Arduino ve ya pic ile (ya da seri porttan haberleşebilen tüm işlemciler) rahatlıkla çalışabilecek bir uygulamadır. C# ile yapılan gerçek zamanlı (real time) uygulama eksikliğinden bu konuyu yapma ihtiyacı hissettim. Ben bu konuyu araştırırken bu uygulamayı gerçek zamanlı yapan ve sonra nasıl yapıldığını anlatan bir kaynak bulamamıştım.Umarım bu bilgiler işinize yarar. Paylaşımlarınızda kaynak belirtirseniz çok iyi olur :). Tekrar görüşmek üzere...  

![](https://4.bp.blogspot.com/-u9gyY6u78Ks/U4PnbJauzrI/AAAAAAAAAD4/hAhFH7f7JPo/s720/Ekran+Al%C4%B1nt%C4%B1s%C4%B12.PNG)

**Not: Sonradan programın derlenmiş halini de paylaştım indirmek isterseniz [buradaki yazıma](https://mozanunal.com/2014/12/serial-port-grapher/) gitmeniz yeterli olacaktır.**
