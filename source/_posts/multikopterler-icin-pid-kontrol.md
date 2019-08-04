title: |
  Multikopterler için PID kontrol
tags:
  - Elektronik Devreler ve Teorik Yazılar
  - Hava Araçları
  - Multikopter uçuş prensibi
  - Multikopterler için PID
  - PID kontrol
  - Quadcopter uçuş prensibi
categories:
  - Drone
author: Mehmet Ozan Ünal
date: 2015-07-29 15:44:00
---
**Herkese Merhabalar,**  

Bu yazımda PID kontrol algoritmalarından bahsetmek istiyorum. Bu yazıyı yazmamın 2 sebebi var. PID algoritmaları hakkında bir çok yazı okudum fakat coğu akademik ve karmaşık yazılar. Benim amacım anlaşılırlığı ve ayrıntıyı dengeli bir şekilde maximum değerlerinde kullanmak. İkincisi ise bu algoritmanın özel olarak multikopterlerde kullanımını basit bir şekilde açıklayan bir yazıya rastlamadım. Bu yüzden bu yazıyı yazmaya karar verdim.  

Bir otopilotun en temel 2 bileşeni hava aracının yönelimini tespit eden IMU sensörü ve PID algoritmasıdır. IMU sensörü içinde bir kaç sensör barındırır ve amacı hava aracının 3 boyutlu uzaydaki yönelimini bulmaktır. IMU konusundan [bu yazımda bahsetmiştim](https://mozanunal.blogspot.com.tr/2014/11/imu-aclarnn-3-boyutlu-olarak.html). PID algoritmasının görevi ise temel olarak şöyledir: Yönelimi (3 eksendeki yere göre açılar) sensörler üzerinden alır, istenen açıları da kullanıcıdan alır. Bu ikisi arasındaki farkı en düşük seviyeye düşürmeyi amaçlar. İşte PID algoritmasının görevi bu farkı minimuma indirmek için gerekli motor hız değerlerini hesaplamaktır.  

![](https://2.bp.blogspot.com/-LzboAq8GOtw/VgsVNq8Ad7I/AAAAAAAAN7g/6TktCiuDiJ0/s400/PID-feedback-loop-v1.png)


Multikopterler için her 3 için ayrı ayrı PID kontrol algoritmaları uygulanır. İstenilen değer ile şu anki değerin farkı alınarak hata elde edilir. PID algoritması bu hata değerlerine uygulandıktan sonra motorların çıkış değerleri hesaplanır. Sonra bu verilen çıkış hata değişkenini bulmak üzere tekrar girişe yönlendirilir. Böylece döngü tamamlanmış olur. PID,  Proportional, Integral ve Derivative olmak üzere 3 farklı algoritmanın uygulanmasıyla elde edilir. Örnekle açıklamak gerekirse: Multikopterimizin pitch açısı için kullnılan PID kontrol algoritmasını ele alalım. **P algoritması**ndan gelen değer, multikopterimizin şu anki pitch açısı ile kontrol edenin istediği pitch açısı arasındaki farka yani anlık hataya bağlıdır. **I algoritması**ndan gelen değer, pitch açısının geçmiş hatalarının toplamına bağlıdır. D algoritmasından gelen değer ise gelecek açı hatalarının tahminine bağlıdır.  

![](https://www.pcbheaven.com/wikipages/images/pidtheory_1313344224.png)

**Bu algoritmalardan elde edilen değerler belli katsayılarla(Kp, Ki, Kd) çarpılarak son çıkış değişkeni elde edilir. Bu katsayılara PID katsayıları denir. PID tuning olayı bu katsayıların uygun stabiliteyi sağlayacak şekilde ayarlanmasıdır.  **Simdi bu 3 PID algoritmasının nasıl çalıştığını daha ayrıntılı inceleyelim.  

**Proportional**  
Proportional, ana kontrol algoritmamızdır. Diğer katsayılar 0 olsa bile sadece bu algoritmayla (stabilite düşük de olsa) hover yapabilir. Proportional, hava aracımızın şu anki açı hatasını baz alarak ilerler. Basitçe anlatmak gerekirse Kp katsayısı ne kadar yüksek olursa multikopter o kadar fazla kendini düzeltmeye çalışır. Eğer olması gerekenden yüksek Kp katsayısı seçilirse kendini fazla düzeltecek ve "overshoot" denen kavram ortaya çıkacaktır. Multikopter oldukça fazla duyarlı olacak ve yüksek frekansta titremeye başlayacaktır.  

![](https://www.pcbheaven.com/wikipages/images/pidtheory_1313333018.jpg)

**Integral**  
Integral, geçmiş hataların toplamını baz alarak ilerleyen algoritmadır. P genellikle hatayı yok etmek için tek başına yeterli değildir. Basitçe, istenen I değeri hataların zamanla çarpılıp toplanmasıyla elde edilir. Yani hatanın sayısal integrali hesaplanmış olur. I algoritması sayesinde multikopterimizin tam istediğimiz değere gelme özelliği artar fakat aynı zamanda istenilen değere gelme zamanı artar. Özellikle düzensiz rüzgarda ve ağırlık merkezi bozukluğu, tribulans gibi olumsuz etkenleri yok etmek için oldukça yararlıdır. Ki katsayısı artırıldığında daha yumuşak ve daha az agresif bir uçuş karakteristiği elde edilir. Yüksek Ki yine titreşimlere neden olur ama daha düşük frekanstadır böylece Kp'den kaynaklanan sorundan ayrılabilir.  

![](https://www.pcbheaven.com/wikipages/images/pidtheory_1313341391.jpg)

**Derivative**  
D parametresi gelecek hata tahminini baz alan bir parametredir. Etkisini ise istenilen açı değeri ile şuanki açı değeri arasındaki bir yay olarak düşünebiliriz. Görevi şokları absorbe ederek sonradan oluşabilecek hataları, "overshootları" baştan engellemektir. Bazı uçuş kontrolcüler bu parametreyi kullanmaz(Örnek: KK 2.0).  

**PID Tuning İpuçları**  

Ayarlamaya P parametresinden başlanır. P parametresini ayarlamak için düşük bir değerden başlanır ve titreşim ve osilasyonlar görmeye başlayana kadar artırılır. Düşük frekanstaki osilasyonları Ki parametresine, Yüksek frekanstakiler is genellikle Kp veya Kd bağlıdır. Eğer aracınızda titreşimler görüyorsanız Kp parametresini azaltmak için acele etmeyin. İlk olarak Kd parametresini artırmayı deneyebilirsiniz.  

Akrobasi modu için;  

*   Birazcık yüksek P
*   Birazcık düşük I
*   D artırılır.

Yumuşak akıcı uçuş için;  

*   Birazcık düşük P
*   Birazcık yüksek I
*   D azaltılır.

Son olarak farklı PID ayarlarının stabiliteye etkisi hakkında açıklayıcı bir video göz atmanızı tavsiye ederim. Tekrar görüşmek üzere.  

{% youtube  YNzqTGEl2xQ %}