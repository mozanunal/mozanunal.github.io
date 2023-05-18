---
title: '[TR] Android Terminal Emülatörü: Termux'
tags:
  - Android
  - Termux
categories:
  -  Coding
date: 2018-07-30 20:04:35
---

**Herkese Merhabalar,**

Benim gibi sıklıkla linuxla uğraşan bir insansanız işinize çok fazla yarıyabilecek bir araçtan bahsedeceğim. Bu Androidte çalışan terminal emülatörü **Termux**.  Termux linux kullanmaya alışık olduğumuz araçları androidde de kullanabilmemizi sağlayan bir android app aslında. Direk play store üzerinden [bu link ](https://play.google.com/store/apps/details?id=com.termux&hl=en) üzerinden yükleyebilirsiniz. Termux aynı zamanda açık kaynaklı bir proje github hesabına [buradan](https://github.com/termux) ulaşabilirsiniz. Burada android app ve bütün paketlerin kaynak kodu mevcut.

![termux ssh bağlantısı](/images/termux_ssh.jpg)

Özelliklerine gelecek olursak kendi paket yöneticilerini geliştirmişler. İsmi pkg bir sürü popüler paketi kurabilmeniz mümkün. Programa girdiğinizde direk bir bash terminal karşılıyor bizi. Burada standart bash komutlarının çoğu çalışıyor. Örneğin ls, pwd, cat, echo...

```sh
pkg list-all
```
komutu ile kurulabilecek bütün paketleri görüyoruz.
![pkg list all](/images/termux_listall.jpg)

Ben de aklıma gelen bir kaç paketi yükleyip testler yaptım. Şu and en çok ssh için kullanıyorum fakat yüklediğim diğer araçlar ise şöyle:
```sh
pkg list-installed
```
![pkg list installed](/images/termux_listinstalled.jpg)

Apt kullanır gibi direk paketleri kurabiliyorsunuz. Örneğin şu şekilde htop paketini yükledim.

![pkg kullanarak htop kurulum](/images/termux_installhtop.jpg)

Htop çalışır durumdaki hali de aşağıdaki gibi. Sanki bir linux terminaliymiş gibi bütün özellikleri kullanılabiliniyor. Ayrıca telefonunuza python, nodejs, go gibi programlama dili araçlarını kurup sanki bir mini bilgisayardaymış gibi kolaylıkla programlama yapabilirsiniz. Git, svn gibi versiyon yönetimi araçları da çalışıyor. Hatta c/c++ için gerekli derleme ve debug araçları da sorunsuz çalışır durumda (gcc, make, cmake). Denemedim ama telefon üzerinde geliştirme yapmayı bile mümkün kılacak kadar geniş kapsamı. Telefonda bu kadar güzel bir terminal görmek çok hoşuma gitti.

![htop](/images/termux_htop.jpg)

Ayrıca arayüz olarak da dokunmatik ekran için özenle dizayn edilmiş. Klavyenin üzerinden çıkan yardımcı tuş takımı oldukça kullanışlı. Ctrl içeren tuş kombinasyonlarını kolayca yapabiliyorsunuz. Ya da olmazsa olmaz tab ile otomatik tamamlama özelliğini kolayca kullanabiliyorsunuz. Siz de Termux ilk defa görüyorsanız ilk kullanım yorumlarınızı, daha önceden kullanıyorsanız ne için kullandığınızı yorumlarda paylaşırsanız çok mutlu olurum.
Özet olarak termux telefonunuza kurup mobil işlerimiz için kullanabileceğimiz güzel bir terminal emülatörü. Denemenizi tavsiye ederim.

![pkg search python](/images/termux_listpython.jpg)

