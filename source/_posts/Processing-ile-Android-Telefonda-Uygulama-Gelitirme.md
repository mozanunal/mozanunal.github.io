title: |
  Processing ile Android Telefonda Uygulama Geliştirme
tags:
  - Android Programlama ve Oyun
  - Processing
  - Android Processing IDE
  - Processing Android
categories:
  - Linux ve Programlama
author: Mehmet Ozan Ünal
date: 2014-11-09 06:27:00
---
<div class="separator" style="clear: both; text-align: left;">**Herkese Merhabalar!**</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://4.bp.blogspot.com/-mWaFbWIHvPk/VF7g4rYgSxI/AAAAAAAAFHw/vbMO-hISTB4/s1600/primitives3D.png)](http://4.bp.blogspot.com/-mWaFbWIHvPk/VF7g4rYgSxI/AAAAAAAAFHw/vbMO-hISTB4/s1600/primitives3D.png)</div>

<div class="separator" style="clear: both; text-align: left;">Processing dili son yıllarda Arduino ile popülerleşmeye başlayan görsel programlama dilidir. Hızlı prototipleme için geliştirilmiştir Arduinoya görsel arayüz hazırlama için sıklıkla kullanılmaktadır. Processing Windows, Linux, Android, Mac her platformda çalışmaktadır. Kendi program geliştirme arayüzü bulunmaktadır. Bu programlama diliyle kolay bir şekilde 2D, 3D görsel uygulamalar yapılabilir.</div>

Ben bugünkü yazımda nasıl Android telefonda Android için nasıl Processing diliyle görsel uygulama yapılacağını anlatacağım. Öncelikle
<a name="more"></a>Google Playden uygulama geliştirmek için gerekli IDE'yi(geliştirme ortamını) indiriyoruz. Bir çok çeşit geliştirme ortamı var fakat ben APDE uygulamasını tercih ettim. Bu uygulama ile processing kodu yazıp onu derleyip telefon üzerinde deneyebiliyoruz.  

[![](http://1.bp.blogspot.com/-hlQ1Eg92vGE/VF46zsFwxLI/AAAAAAAAFFs/_dL3tLj1LVE/s1600/Screenshot_2014-11-07-16-41-05.png)](http://1.bp.blogspot.com/-hlQ1Eg92vGE/VF46zsFwxLI/AAAAAAAAFFs/_dL3tLj1LVE/s1600/Screenshot_2014-11-07-16-41-05.png)

<div class="separator" style="clear: both; text-align: left;">APDE programını Android telefonumuza indirip kuruyoruz.</div>

<center>[![](http://1.bp.blogspot.com/-VU6FFPqGpBo/VF46zIqyNjI/AAAAAAAAFFk/6doXxLIm0tQ/s1600/Screenshot_2014-11-07-16-40-57.png)](http://1.bp.blogspot.com/-VU6FFPqGpBo/VF46zIqyNjI/AAAAAAAAFFk/6doXxLIm0tQ/s1600/Screenshot_2014-11-07-16-40-57.png) [![](http://3.bp.blogspot.com/-7crxNh-yPNA/VF46zz2blAI/AAAAAAAAFFw/slgn2rJgT_8/s1600/Screenshot_2014-11-07-16-41-13.png)](http://3.bp.blogspot.com/-7crxNh-yPNA/VF46zz2blAI/AAAAAAAAFFw/slgn2rJgT_8/s1600/Screenshot_2014-11-07-16-41-13.png) </center>

Program kurulunca açıp sağ üst köşedeki butondan "new sketch" seçebilirsiniz. Yeni bir sketch açtıktan sonra aşağıdaki fonksiyonları yazabilirsiniz. Bu fonksiyonlar Processing dilinin temel fonksiyonları ve her sketchte var olur. Ayarla alakalı kodlar "setup" kısmına, her zaman dönecek kodlar ise "draw" kısmına yazılır.

<div class="separator" style="clear: both; text-align: center;">[![](http://4.bp.blogspot.com/-dOPBkYoMJzc/VF46wMlwDUI/AAAAAAAAFE4/dAn3olkNxNI/s1600/Screenshot_2014-11-07-16-07-00.png)](http://4.bp.blogspot.com/-dOPBkYoMJzc/VF46wMlwDUI/AAAAAAAAFE4/dAn3olkNxNI/s1600/Screenshot_2014-11-07-16-07-00.png)</div>

<div class="separator" style="clear: both; text-align: left;">      İlk uygulamamızı yazmaya hazırız. İlk önce setup kısmında pencere büyüklüğümüzü ayarladık. Draw kısmına ise sürekli dönecek kodu yazıyoruz. Bu kodda dokunduğumuz yere bir elips çizmesini istemiş oluyoruz. </div>

<div style="text-align: center;">[![](http://2.bp.blogspot.com/-t7za1ockYGs/VF46xXIUK0I/AAAAAAAAFFI/MsUPAK8tyJY/s1600/Screenshot_2014-11-07-16-19-46.png)](http://2.bp.blogspot.com/-t7za1ockYGs/VF46xXIUK0I/AAAAAAAAFFI/MsUPAK8tyJY/s1600/Screenshot_2014-11-07-16-19-46.png)</div>

<div class="separator" style="clear: both; text-align: left;">       Çalıştırma tuşuna basıyoruz. </div>

<div class="separator" style="clear: both; text-align: center;">[![](http://2.bp.blogspot.com/-qzvRHOFDhSQ/VF46wNUwt1I/AAAAAAAAFFA/d2yl3aTsqcY/s1600/Screenshot_2014-11-07-16-17-32.png)](http://2.bp.blogspot.com/-qzvRHOFDhSQ/VF46wNUwt1I/AAAAAAAAFFA/d2yl3aTsqcY/s1600/Screenshot_2014-11-07-16-17-32.png)</div>

<div class="separator" style="clear: both; text-align: left;">      Programımızı bir .apk dosyası haline getirip telefonumuza yükleyecek.</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://4.bp.blogspot.com/-Rx9j0rQ--eA/VF46wI17TGI/AAAAAAAAFE8/yQqubyDovU8/s1600/Screenshot_2014-11-07-16-17-36.png)](http://4.bp.blogspot.com/-Rx9j0rQ--eA/VF46wI17TGI/AAAAAAAAFE8/yQqubyDovU8/s1600/Screenshot_2014-11-07-16-17-36.png)</div>

<div class="separator" style="clear: both; text-align: left;">       İlk programımızdan görüntüler.</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://4.bp.blogspot.com/-dgdSohsd4v4/VF46wzPj3hI/AAAAAAAAFFE/RbmGhWeBYtw/s1600/Screenshot_2014-11-07-16-18-58.png)](http://4.bp.blogspot.com/-dgdSohsd4v4/VF46wzPj3hI/AAAAAAAAFFE/RbmGhWeBYtw/s1600/Screenshot_2014-11-07-16-18-58.png)[![](http://2.bp.blogspot.com/-6HZBB2mkh2I/VF46xM6qppI/AAAAAAAAFGI/uiYuHyirx-Y/s1600/Screenshot_2014-11-07-16-19-08.png)](http://2.bp.blogspot.com/-6HZBB2mkh2I/VF46xM6qppI/AAAAAAAAFGI/uiYuHyirx-Y/s1600/Screenshot_2014-11-07-16-19-08.png)</div>

   Processing ile 3  boyutlu uygulama yapmak da mümkün, aşağıda bir küp çizmek için gerekli kodu görebilirsiniz. Ayrıca camera değişkenlerini mouseX ve mouseY değerlerine atayarak dokunmatik ekrana dokunma ile küpü görüş açısı değiştirilir.  

<div style="text-align: center;">[![](http://2.bp.blogspot.com/-HpviGF7XNC8/VF46yge-7BI/AAAAAAAAFFY/gK34sN2P8VM/s1600/Screenshot_2014-11-07-16-40-02.png)](http://2.bp.blogspot.com/-HpviGF7XNC8/VF46yge-7BI/AAAAAAAAFFY/gK34sN2P8VM/s1600/Screenshot_2014-11-07-16-40-02.png)</div>

<div class="separator" style="clear: both; text-align: left;">          Daha karmaşık şekilleri çizmek için ise vertex ile çizim gibi yöntemler kullanılır. Processing dili Opengl destekli olduğu için çoğu opengl fonksiyonu kullanılabilir. Oldukça güçlü olan bu kütüphane ile sayısız ve karmaşık bir çok görsel uygulama yapılabilir.</div>

<div class="separator" style="clear: both; text-align: center;">[![](http://3.bp.blogspot.com/-iNg-YuAjRNE/VF46yeNq-CI/AAAAAAAAFFg/s_m58fB4oMY/s1600/Screenshot_2014-11-07-16-34-53.png)](http://3.bp.blogspot.com/-iNg-YuAjRNE/VF46yeNq-CI/AAAAAAAAFFg/s_m58fB4oMY/s1600/Screenshot_2014-11-07-16-34-53.png)[![](http://1.bp.blogspot.com/-ZCScWryq_0Y/VF46yCKIeGI/AAAAAAAAFFM/ZPa5QEpY5ec/s1600/Screenshot_2014-11-07-16-33-36.png)](http://1.bp.blogspot.com/-ZCScWryq_0Y/VF46yCKIeGI/AAAAAAAAFFM/ZPa5QEpY5ec/s1600/Screenshot_2014-11-07-16-33-36.png)</div>