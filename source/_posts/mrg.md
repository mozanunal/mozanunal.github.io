title: '[TR] Manyetik Rezonans Görüntüleme'
tags:
  - Manyetik Rezondans Görüntüleme, MRG, MRI
categories:
   - Electronics
author: Mehmet Ozan Ünal
date: 2020-04-26 03:44:00
---

# Manyetik Rezonans Görüntüleme


## 1.Giriş

Normalde vücudumuz RF enerjisine duyarsızdır. Önce veri kaynağımız olan
 protonların RF enerjisi ile uyarılır hale getirilmesi gerekir. Bunun için hasta çok
 güçlü bir manyetik alan içerisine yerleştirilir. Bu manyetik etkiyle protonlar
 manyetik alana uygun şekilde dizilir ve uyarılmaya hazır hale gelirler.
 Kesit alınacak bölgeye RF enerjisi gönderilir. Protonlar bu enerjiyi alır ve
 enerjinin miktarına göre konumlarından saparlar. RF enerjisi kesilir. Protonlar eski konumlarına dönerler. Bu dönüş sürecinde aldıkları enerjiyi bir sinyal şeklinde yayarlar. Bu sinyal kayıt edilerek seçilen alanın Hidrojen yoğunluğuyla alakalı bilgi edinilmiş olur.

### Tarihi

Manyetik Rezonans görüntüleme klasik görüntüleme yöntemleri arasında en son icat edilendir. Eş zamanlı olarak 2 fizikçi tarafından 1947 yılında keşfedilmiştir( Felix Bloch - Edward Mills Purcell). İlk resim 1973 yılında Paul Lauterbur tarafından yapılmıştır. İlk klinik görüntülemeler 1977 yılında yapılmıştır. 2010 yılı itibariyle dünyada toplam 4000 MR Tarayıcı kullanılmaktadır [1].

![](/images/mri/image1.png)
<center>Şekil 1: İlk MR makinesi prototipleri</center>


![](/images/mri/image2.png)

<center>Şekil 2: İlk Tüm vücut MR prototibi dizaynı</center>

## 2. Atomik Partiküller ve Magnetizma

**Radyo Frekans:**

Osilasyon frekansı 3kHz- 300GHz olan elektromanyetik dalgalara radyo frekans adı verilir.

**Manyetik Alan:**

Hidrojen atomu, çekirdeğinin tek protondan ibaret olması nedeniyle güçlü manyetik
 alana sahiptir. İnsan vücudunda bol miktarda bulunan bu çekirdek sinyal kaynağı olarak
 Idealdir.

**Spin** :

Atomik ve subatomik partiküllerin açısal momentumu.

MRG Hidrojen atomunun manyetik özelliklerini kullanarak çalışır. Hidrojen atomunda bulunan proton normal şartlarda rastgele spinde döner. Fakat yüksek manyetik alan altında bütün Hidrojen atomlarının spinleri aynı yöne getirilir.

**Devinim** (Presesyon), manyetik alan altında sabit manyetik alan altında açısal momentuma sahip anatomik parçacıkların yaptığı harekete denir. Bu yapılan hareketin frekansı manyetik alana ve taneciğin gyromagnetic oranına bağlıdır.

![](/images/mri/image3.png)

<center>Şekil 3: Devinim hareketinin gösterimi</center>

![](/images/mri/image4.png)

<center>Şekil 4: Farklı elementler için gyromagnetic oranlar</center>

![](/images/mri/image5.jpg)

<center>Şekil 5: Negatif gyrometrik sabiti olan parçacıkların spin yönü ile manyetik moment yönü birbirine zıttır. [2]</center>

Protonların presesyonlarının frekansı, manyetik alanın gücü ile doğru orantılıdır.
 Presesyon, manyetik rezonans olayının temelidir. Protonları etkileyebilmek için önce
 onları manyetik alan içerisine koyarak presesyon yaptırmak gerekir. Ancak bu durumdaki
 protonlar dışarıdan gönderilecek presesyon frekansındaki bir radyo dalgasıyla (RF) rezonansa
 girebilirler [3]. Bu rezonans frekansına Larmor frekansı denir ve gyrometric oran ile manyatik alanın çarpımıyla hesaplanır.

![](/images/mri/image6.png)

<center>Şekil 6: Farklı elemenletlerin MR görüntülemede oluşturdukları duyarlılık oranları [4]</center>

![](/images/mri/image7.png)

<center>Şekil 7: Larmor frekenası formulü</center>

Rezonans durumdaki Hidrojenler uyarıldıktan sonra geri eski durumlarına dönerlerken bir manyetik alanlarındaki değişimden dolayı bir sinyal yayarlar. Bu duruma relaksasyon denir. Bu uyarılma ve devamındaki zayıflarma esnasında sırasıyla aşağıdaki olaylar olur [2].

- Devinim durumundaki hidrojen atomları toplam manyeyik alan B0 manyetik alanı yönünde olacak şekilde hizalanmışlardır. Toplam net manyetik alan longitutunal (Z) düzlemde yukarı doğrudur. Transverse (X-Y) düzlemde ise toplam net manyetik alan sıfırdır.
- Sistem B0 manyetik alanın dik olacak bir B1 manyetik alanına sahip olan RF palslar ile uyarılır.
- Uyarılan sistemde net manyetik alan longitutunal düzlem sıfır olmuştur. Bu arada hidrojen atomları infaz durumuna geçer ve Z ekseni etrafında aynı fazda dönmeye başlarlar. Bu da transverse ekseninde sürekli dönen bir net manyetizasyon oluşturur.
- Uyarmayı yapan B1 manyetik alanı kaldırılır. Sistem eski haline dönmeye başlar. Bu olaya Free Induction Decay adı verilir. Sistemin relaksasyonu sırasında longitutional manyetik alanın eski halin gönmesine T1 relaksasyonu, transverse düzlemdeki dönmekte olan net manyetizasyonun tekrar sıfır olmasına ise T2 relaksasyonu denir.

MR görüntüleme de bu iki relaksasyonun süreleri arasında yorumlar yaparak dokular hakkında bilgi edinilmeye çalışılır.

![](/images/mri/image8.png)

<center>Şekil 8: Relaksasyon sırasında toplam manyatik alanın zamana göre değişimi, Free Inductıon Decay</center>

## 3. Faraday Indüksiyon Akımı Sinyal Kaydı

Faraday kanununa göre bir devrede indüklenen emk, devreden geçen manyetik akının zamana göre türevi ile doğru orantılıdır. Bu ifade şöyle yazılabilir [5]:
 ![](/images/mri/image7.1.png)

 ε: İndüklenen emk (Volt)
 Φ: Manyetik akı (Weber)
 t: Zaman (saniye)
 N sarımlı bir bobinde oluşan emk

![](/images/mri/image7.2.png)

Telin Doğrusal Hareketi
 B manyetik alanına dik yönde v hızıyla hareket eden, l uzunluğundaki telin uçları arasında indüklenen emk
 ![](/images/mri/image7.3.png)
 Telin Dairesel Hareketi
 B manyetik alanına dik yönde w açısal hızıyla hareket eden, l uzunluğundaki telin uçları arasında indüklenen emk
 ![](/images/mri/image7.5.png)

Manyetik rezonans görüntülemede faraday yasasından yola çıkararak çeşitli dizaynlar yapılmaktadır. Gradyan magnetlerden manyetik alan elektrik ile değişken olarak indüklenmesi ve vücuttan yapılan radyo dalgaları ışımalarınının rf sargılar ile alınması da bu prensibe dayanarak tasarlanır.

## 4. MRG Enstrümanyasyon

![](/images/mri/image9.png)

<center>Şekil 9:MR Enstrümantasyonu genel bakış [6]</center>

Sistem temel olarak aşağıdaki kompenentlerden oluşur.

**Birincil Magnetler:** Birincil magnetler güçlü manyetik alanı üretmekten sorumludur. Statik güçte bir manyetik alan üretirler. Seviyeleri 1 Tesladan 3 Teslaya kadar değişebilmektedir. Bu kadar güçlü manyetik alana ulaşabilmek için genelde süper iletken kullanılır. Sürekli açık durumda bırakılırlar sadece bakım olacağı zaman bu magnetler manyetik alan üretmeyi bıraktırılır. 2000lerin başından bu yana 1.5 Teslalık magnetlerin yerini 3 Teslalık magnetler aldı [6].

![](/images/mri/image10.png)

<center>Şekil 10: Birincil magnetin oluşturduğu manyetik alanın formulü</center>

Yukarıdaki eşitlikte görüldüğü gibi elde edilen magnetik güç akımın karesi ve direncin çarpımı ile orantılıdır. Isı kaybını önlemek için tellerin dirençleri mümkün olduğunca düşük tutulur. Bu süperiletken kullanmayı zorunlu hale getiren etkendir. Bilinen bazı materyaller çok düşük sıcaklıklarda neredeyse 0 dirence kadar düşerler. MRG'de bu teller bir kaç yüz amperi taşıyabilir durumda olmalıdırlar. Niobium ve aluminyom alaşımı bir madde ile bu sağlanabilir. Manyetik alanın homojenliği bu magnet için çok önemlidir. MR makinlerine yıllık yapılan bakımda süperiletkenliği sağlamak için kullanılan soğuk gaz yıllık olarak yenilenir. Magnetlerin dışına yerleştirilen magnetik alan önleyiciler ile bu manyetik alanın dışarıya etkisi sıfırlanmaya çalışılır. Bu kalkan olarak çelik karbon tabanlı pasif zayıflatıcılar ya da tes yönde manyetik alan üreten aktif zayıflatıcılar kullanılır.

![](/images/mri/image11.png)

<center>Şekil 11: MR makinesinin 2D kesitinde birincil magnetlerin yeri [1]</center>

**Gradyan Magnetler:**

Üç düzlemde yerleştirilmiş bu bobinler sayesinde hastanın pozisyonu değiştirilmeden her üç düzlemde de kesit alınabilir. MR sırasında çıkan yüksek sesten bu bobinler sorumludur. Z ekseninde kullanılan sarglarda 2 ayrı sargı manyetik alanı z eksenin lineer olarak değiştirilebilecek şekilde yerleştirilmiştir. X ve Y ekseninde ise (saddle coin) belirtilen eksenlere dik yönde sarım yapılacak şekide sarımlar sisteme eklenmiştir.

![](/images/mri/image12.png)

<center>Şekil 12: X,Y ve Z ekseninde gradyan magnetler</center>

Manyetik alan gradienti manyetik alan değişiminin uzaklık değişimine oranı olarak tanımlanır.

![](/images/mri/image13.png)

<center>Şekil 13: Gradyanın Formulü [7]</center>

Gradyan Sargılar güçlü PWM kuvvetlendiriciler ile sürülürler. Anlık olarak 2500 V ve 1000 A gibi değeler görebilirler. Böyle durumlarda iç sıcaklıkları 55 - 60 dereceye kadar ulaşabilir. Bu nedenle gradyan sargıları soğutabilmek için MR cihazlarında gerekli üniteler bulunur.

![](/images/mri/image14.png)

<center>Şekil 14: Gradyan sargılar soğutma sistemleri [7]</center>

**Radyo Frekans Bobinleri:**

İki temel görevi vardır. Birincisi manyetik alan altındaki Hidrojen atomlarını uyararak spinlerini değiştirmlerini sağlamak ikinci olarak RF salınımı yaptığında salınan RF enerjisini toplamak için anten görevi görerek görüntünün oluşturulmasını sağlamak. Pulse sekansı oluşturarak belli bir bölgenin aktifleştirilip ölçülmesini sağlar. Genelde bir dizi radya frekans bobinleri bir arada kullanılır. Bu sayede pozisyonun alıcıya etkisindeki farklılıklar kompanze edilmeye çalışılır.

![](/images/mri/image15.png)

<center>Şekil 15: RF sargı giriş devresi örneği</center>

Çevre gürültülerden etkilenmemesi için ve o frekans kanalına kilitlemek için rf sargısının çıkışında aynı frekansta referans clock üretilmelidir. Bunu yapabilmek için kapasitans ve endüktans tabanlı devreler kullanılabilir. Fres frekansında sinyal üretmek için gerekli kapasite ve endüktans değeleri aşağıdaki formüle göre hesaplanabilir.

![](/images/mri/image15.1.png)

Aşağıda ise örnek bir devre şeması eklenmiştir. Verimli bir RF sargı devresi için bahsedilen frekanstaki hassasiyet yüksek ve devrenen giriş çıkış verimleri yüksek olmalıdır. Bunu sağlamak için empadans uydurma devreleri gereklidir. Bu devreler sayesinde alınan ya da yollanan sinyal koaksiyel kablonun girişinde 50 Ohm direncine getirilmelidir. Devredeki sanal komponentlerin birbirini yok etmesi de sağlanarak bu aşamada yaşanan hassasiyet kaybı en aza indirilir.

![](/images/mri/image16.png)

<center>Şekil 16: RF sargıların elektromanteik koruyucularla kaplanması(shielding)</center>

RF sargılara gürültü oluşturabilecek bir diğer etken de sistem içerisindeki komponentlerdir. MRG makineleri içerisinde yüksek akımların geçtiği bir çok komponent içerir bu manyetik alan ve rf tarafında kirliğe sebep olur bu gürültülerin azaltıması için sistemdeki farklı komponentler sistemden elektriksel olarak yalıtılmış durumdadır. Simetrik bir dizayn izlenerek bu gürültülerin mümkün olduğunca birbirini yok etkesi de yardımcı olabiliecek yöntemlerdendir [1].

Rf sargıların hem alıcı hem verici olarak kullanılabilmesi için aşağıdaki gibi bir devreye dönüştürümelidir. DC sinya uygulanarak diyotlar aracılığıyla sargıların çalışma yönü seçilir. Diyot olarak genelde PIN diyotlar kullanılır [7].

![](/images/mri/image17.png)

<center>Şekil 17: Örnek pals sekansı. Bilgisayar sistemi hepsini senkron olarak çalışmasından sorumludur. [8]</center>

**Bilgisayar Sistemi:**

Alınan sinyal yukarıdaki gibi demodule edllir. Demodolasyon sırasında alınan sinyal 90 derece fazı kaydırılmış hali ile çarpılır çıkan sinyalde iki tane belirgin komponent olacaktır. Birincisi sinyalin base banda indilimiş hali ikinci olarak da f0 sinyalinin tam iki katındaki komponent. Sadece basebandaki sinyal istendiği için diğer sinyal alçak geçiren filtre ile gücü azaltılır. Devrenin devamında analog dijital çeviricilerle ile sinyal dijital ortama aktarılır. Genelde örnekleme frekansı 80 MHz örnekleme çözünürlüğü ise 14 bittir [8].

Alınan sinyallerin toplanıp çeşitli veri işleme ve 3 boyutlu tahmin yöntemleriyle insanın anlayabileceği görüntüler haline çevirildiği yerdir.


# Kaynakça

[1] N. & W. A. Smith, Introduction to Medical Imaging: Physics, Engineering and Clinical Applications, Cambridge: Cambridge University Press, 2010. 
[2] P. E. P. R. Bloembergen N, «Relaxation effects in nuclear magnetic resonance absorption,» _Phys Rev 1948,_ pp. 73:679-712, 1948. 
[3] O. Konez, Manyetik Rezonans Görüntüleme, İstanbul: Nobel Tıp Kitabevleri, 1995. 
[4] D. Moratal, «Medical Imaging: Principles, Detectors, and Electronics [Book Reviews],» %1 içinde _Pulse, IEEE_, 2011, p. 227. 
[5] M. E. Davison, «A Simple Proof that the Lorentz Force, Law Implied Faradays Law of Induction, when B is Time Independent, cilt 41, no. 713, p. American Journal of Physics, 1973. 
[6] P. Joseph P. Hornak, The Basics of MRI, Cornell, 1996-2018. 
[7] M. F. Allen D. Elster, «the Questions and Answers in MRI,» [Çevrimiçi]. Available: http://mriquestions.com/index.html. [Erişildi: 5 1 2019]. |
[8] Y. Wang, «MRI Instrumentation and Pulse Sequences,» %1 içinde _Medical Imaging I_, New York. 
[9] K. Inievski, Medical İmaging Priniples,Detetors and Electronics, Canada: John Wiley Sons, Inc., Hoboken, New Jersey, 2009. 