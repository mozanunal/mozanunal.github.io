title: '[TR] Serial Port Grapher'
tags:
  - 'C#'
  - Arduino grafik
  - 'C# gerçek zamanlı grafik'
  - 'C# grafik'
  - Serial Port
categories:
  -  Coding
date: 2014-12-23 02:59:00
---

**Herkese Merhabalar,**  
İlk yazılarımdan birinde seri port üzerinden grafik çizen bir programın C#'ta nasıl yazılabileceğini anlatmıştım([Buradan ulaşabilirsiniz](https://mozanunal.com/2014/05/c-gercek-zamanl-grafik-cizme-program/).) Bu yazımda ise programın derlenmiş ve setup haline getirilmiş halini paylaşıyorum. Fark ettim ki bir sürü insan böyle bir programa ihtiyaç duyuyormuş. Bu program sayesinde Arduinonuzdan(başka işlemciler veya boardlar da olabilir.) veya herhangi bir serial port cihazından gönderdiğiniz "string" formattındaki verilerin gerçek zamanlı  olarak grafiğini çizdirebilirsiniz. Tek dikkat etmeniz gereken gelen verinin 
```
$,data1,data2,data3, 
```
şeklinde olmasıdır aksi takdirde program gelen veriyi dikkate almaz. Programla alakalı iyi, kötü görüşlerinizi veya sorunları, bugları bana yollayabilirsiniz.  
[Programı buradan indirebiliriniz](https://drive.google.com/file/d/0B5j__Lyt9ozbU3JELTV3MWpqWFk/view?usp=sharing)  

[Programın kaynak koduna buradan ulaşabilirsiniz.](https://github.com/mozanunal/serialPortGrapher)  

![](https://1.bp.blogspot.com/-u9gyY6u78Ks/U4PnbJauzrI/AAAAAAAAAD8/niI8WWGn3Zo/s1600/Ekran%2BAl%C4%B1nt%C4%B1s%C4%B12.PNG)