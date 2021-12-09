title: '[TR] Bataryalar için Sabit Akım Deşarj Devresi Yapımı'
tags:
  - Electronics Devreler ve Teorik Yazılar
  - Düşük Voltaj Koruma Devresi
  - Sabit Akım Kaynağı
categories:
  - Electronics
  - Analog
author: Mehmet Ozan Ünal
date: 2015-08-05 15:08:00
---
**Herkese Merhabalar,**  

Batarya kapasite testi için çeşitli yöntemler geliştirilmiştir. Bunlardan ilk akıla geleni bataryanın uçlarına sabit direnç bağlayıp çekilen akım ve zaman üzerinden kapasite hesabı yapmaktır. Fakat bataryaların zamanla deşarj oldukça voltajı azalır bu da akımın değişmesine yol açacaktır. Bu sorunu çözmek için ise deşarj esnasında mümkün olduğunca çok voltaj örneklenerek anlık akım hesaplanıp interpolasyon yöntemleriyle kapasiteye ulaşılabilir. Fakat bu sıkıntıları aşmak için ikinci bir ölçüm yöntemi vardır; Sabit akım deşarj devresi.  

Sabit akım deşarj devresi bataryadan sabit akım çekerek deşarj olmasını sağlar. Bu sayede doğrudan akımın çekildiği toplam zaman tutularak pilin kapasitesi kolayca hesaplanır. Devremize geçecek olursak gerekli malzemeler;  

*   Irfz44N mosfet
*   lt1001 ya da lm358 opamp
*   9 voltluk pil
*   0.5 volt en az 1W direnç
*   100k (büyüklüğü çok kritik değil)
*   Diyot (benimkiyle aynı değerleri almak için 1N914)

Devreyi açıklamak gerekirse; 9 voltluk pil opampı sürmek ve referans voltajını oluşturmak için kullanılır. R2 direnci ve diyot sayesinde referans gerilimi oluşturulur. Referans gerilimi R1direncinin voltajına eşit olur böylece Vref / R1 = I akımı mosfet üzerinden dolayısıyla bataryadan çekilen akım olmuş olur. Bu yüzden Vref gerilimi sabit olmalıdır ki akım da sabit olsun. Bir diyot üzerinden akım geçirirken (diyota göre değişmekle birlikte)  üzerinde 0.7 civarı voltaj düşümü yaşanır. Üzerinden geçen akım değiştikçe bu değer çok olmamakla birlikte değişir. Bu değerin etkisi ihmal edilebilecek seviyededir.  

![](https://1.bp.blogspot.com/-pBlrI4-Ue6s/VcDK8mgNBFI/AAAAAAAAM6A/uZ1J1A-n3go/s720/Capture0.JPG)

Bu devre standart voltajı 3.7 volt civarı olan lithium ion veya li po bataryaların testi için tasarlanmıştır. O voltajda bir batarya tam dolu iken 4.2 volt boş iken ise 3 volt civarında voltaja sahiptir. Aşağıda bataryanın voltajı 4.2 volttan 3 volta giderken akım grafiğini bulabilirsiniz. Bataryadan çekilen akım 965 mA seviyesindedir. Neredeyse hiç değişmez.  

![](https://2.bp.blogspot.com/--e9hAYwYo-8/VcGiFw9bw6I/AAAAAAAAM6Y/huYk6_wz41E/s720/Capture.JPG)

Bunun nedeni aşağıda görüldüğü gibi diyotun uçları arasındaki gerilimin de sabit olmasıdır.  

![](https://3.bp.blogspot.com/-UhmDvixo9xw/VcDK9wJqbrI/AAAAAAAAM5g/9r4T00zF80E/s720/Capture5.JPG)

Bu devrenin sıkıntılı yanlarından biri mosfet üzerinde çok fazla voltaj düşümü olmasıdır. Bu da mosfetin aşırı derecede ısınmasına yol açar. Bu sorun için mosfete ilave olarak kocaman bir heat sink takılması gerekir. Yine de tehlikeli olabilir devreyi yapacaklar için tavsiyem devre çalışmakta iken mosfete dokunmamalarıdır.

![](https://2.bp.blogspot.com/-giXh4Sp-5yQ/VcDK9P3Sy0I/AAAAAAAAM5c/MMIaNP1OgIs/s720/Capture3.JPG)

Dikkat edeceğimiz bir diğer nokta ise 9 voltluk pilden çekilen akım. R2 direnci yüksek tutularak 9 voltluk pilden çekilen akım azaltılır. Devrenin ömrü uzatılır.  

![](https://1.bp.blogspot.com/-ypKD-3LarxM/VcDK-Fb28CI/AAAAAAAAM5k/iL3HE5C0Y1k/s720/Capture6.JPG)