---
title: Neden Favori Kod Editörüm Visual Studio Code
tags:
  - visual studio code
  - atom
  - sublime text
  - kod editör
  - text editör
categories:
  -  Coding
date: 2017-12-11 05:56:37
---

**Herkese merhabalar,**
Bir süre önce bir geliştirme ortamı olmadan sadece kod editör kullanarak proje geliştirmek istediğime karar verdim. Çünkü sık sık farklı programlama dilleri ve farklı işletim sistemlerinde programlar yazmam gerekiyordu ve hepsinde aynı platformda yapmanın daha kolay olacağını düşündüm. Bunun bana 2 temel faydası olduğunu söyleyebilirim. 1.si paket yönetimi, kodun derlemesi, test edilmesi gibi prosedürleri ide sınırlamasından kurtarmış oldum. 2. Olarak da farklı platformalarda yazarken aynı kısa yolları kullanabiliyorum aynı metin işleme operasyonları ve  yardımcı toolar ile çalışabilme imkanı kazandım. Evet.. Bu kararı verdikten sonra farklı kod editörleri sırasıyle denedim. Yaptığım araştırmalar sonunda komut satırı tabanlı olmayan en popüler 3 text editörün **Atom**, **Sublime Text** ve **Visual Studio Code** olduğunu gördüm.

![image](/images/1513011732923.png)

## Atom 
[Github](https://github.com/) tarafından desteklenen [Electron](https://electronjs.org/) ile geliştirilen, açık kaynak kodlu, 3 platformda da sorunsuz çalışan bir kod editör. Eklenti seçenekleri, tema seçenekleri inanılmaz geniş, diğer 2 editörümüzde olduğu gibi. Benim tanıyan arkadaşlarım bilirler, açık kaynak kod fikrinin içten bir destekleyicisi olduğum için içlerinden ilk denemek istediğim buydu. Ne kadar kullanışlılık konusunda ve ayarlama-özelleştime konusunda tereddütlerim olsa da bir süre kullanmaya devam ettim. Ama en büyük sorunu bence yavaş açılması ve hantallığıydı. Açıkcası bazen en ağır ide'lerden(visual studio) bile daha yavaş açılıyordu. Bir süre sonra bu sorun beni pes ettirdi ve diğer iki seçeneği de denemem için beni zorladı diyebilirim.

![Atom Logo](/images/1512971623563.png)

## Sublime Text
İkinci seçeneğim [Sublime Text](https://www.sublimetext.com/) oldu. İlk bunu denememin sebebi ise gördüğüm bir kaç incelemede diğer ikisinden daha hızlı olarak değerlendirilmesi ve temel sorunumun atomun hantallığı olmasıydı. Sublime text başlarda oldukça güzel gözüktü code highlighting, snippetları çok kullanışlı gözüküyordu ve hiç bir ayarlama yapmadan gelen ayarlarla oldukça verimli bir şekilde çalışabiliyordum. Genelde gömülü linux sistemlerde çalıştığım için o aralar çok fazla ftp sync eklentileri kullanıyordum. Sublime beni o noktada kaybetti. Eklentiler kurmaya başladığımda eklentilerin editöre direk entegre olmadığını biraz kenarda kaldığını gördüm. Debug için çok güzel şeyler bulamadım mesela. Ftp sync eklentisi oldukça kullanışsızdı ve bedava bir eklenti de değilmiş.  Açıkcası ( en son baktığımda oldukça güzel olmuştu gerçi bu eklenti) o kadar parayı kullanışsız bir eklentiye vermek istemedim ve son seçeneğime geçtim.

![Sublime Text Logo](/images/1512971731753.png)

## Visual Studio Code
İlk duyanlar genellikle bir ide olan Visual Studio ile karıştırıyorlar. Bu aslında tamamen ayrı ve açık kaynak kodlu bir proje. Electron tabanlı aynı atom gibi. Genel özellikleri itibariyle benim favori text editörüm oldu. Bu noktada şunu söylemem gerek diğer editörleri test edeli baya zaman oldu bu aralar sadece [vscode](https://code.visualstudio.com/) kullanıyorum o nedenle belki dediğim sorunlar çözülmüş olabilir onları daha çok sevenler olacaktır tabi ki ama bu benim kişisel favorim, peki neden:

* Bir kere oldukça hızlı ve görüntü, syntax hightlight, dosya yönetimi, kullanışlılık olarak oldukça iyi. Git entegresyonu ve debug entagrasyonu editörün içine gömülü olarak geliyor. Bu en sevdiğim özelliği diyebilirim. Git ile çalışmak ve yaptığın değişikleri takip etmek, yönetmek inanılmaz kolay oluyor. Debug konusunda da rakipsiz bence ve oldukça esnek. Mesela birden fazla python enviromentı yüklü bilgisayarınızda **kolayca** hangisinde debug etmek istediğinizi ayarlayabiliyorsunuz.
* Kod tamamlama motorları oldukça iyi. İde olmadığı zaman en büyük eksiklik bu oluyor bence karşımıza çıkan. Çünkü mesela visual studio veya intelij ideleri bu özellikleriyle kod yazarken işimizi çok kolaylaştırıyorlar. Vscode onlarla yarışacak düzeyde değil ama bir çok özelliği var yine de.
* Her türlü programlama ve biçimlendirme dili için eklenti bulmanız mümkün markdown, html, css. 
* Ekstra olarak ipython notebook destekliyor direk onun özelliklerini editörümüzden kullanabiliyoruz.
* Markdown veya latex dökümanlarınızı burada yazıp pdf veya html olarak derleyebiliyorsunuz.
* Ftpsync eklentisi yine oldukça kullanışlı. 
* Code snippetları kolayca entegre edebiliyorsunuz o da yazım hızınızı baya artırıyor. 
* Klavye kısa yolları tüm incelediklerimde benzer şeyleri barındırıyor ve işinizi hizlandiran kısa yollar mevcut. Benim favorim multicursor özelliği. Bu özellik ile birden fazla satırı aynı anda düzenlemek mümkün. Fonskiyonları kopyalama, yerini değiştirme, satırı aşağı yukarı kaydırma en çok kullandığım kısa yollar. Hepsini incelemek isterseniz [buraya](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf) bakmanızı öneririm. Hatta bu yazdırılabilir versiyonu çıktı alıp bir kenara koyup alışana kadar buradan bakarak kullanabilirsiniz.
* Dosyaların satır sonu formatlarlarını veya space-tab sorunlarını çözme konusunda da birebir. Tek yapmanız gereken; ctrl-alt-p yapıp yapmak istediğiniz operasyonu yazmak o size aşağıda öneriler çıkartıyor.
* Terminala ulaşmak ve birden fazla terminal ile kullanmak oldukça basit

![Vscode Logo](/images/1512971783920.png)
