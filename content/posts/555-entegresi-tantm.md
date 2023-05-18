---
title: '[TR] 555 Entegresi Tanıtım'
tags:
  - '555'
  - 555 Entegresi Tanıtım
  - Electronics Devreler
  - Electronics Devreler ve Teorik Yazılar
categories:
  - Electronics
  - Analog
date: 2014-10-07 02:49:00
---
**Herkese Merhabalar!**  
Bu yazımda size 555 entegresini tanıtmak istiyorum. Başlamadan önce şunu da belirtmek isterim 555 entegresi benim en çok sempati duyduğum entegrelerden biridir. Bunun nedeni ise 8 bacaklı, çok basit ve küçük bir entegre olmasına rağmen çok yararlı ve kullanım alanı çok geniş bir entegre olmasıdır. İnternette 555 entegresi ile yapılan bir çok proje  
bulabilirsiniz.(örneğin ==> [https://www.instructables.com/id/47-projects-to-do-with-a-555/](https://www.instructables.com/id/47-projects-to-do-with-a-555/) ). Bu video da benim 555 entegresi hakkında tanıtım videom.  

{{< youtube id="OpG5PGl0PE4" >}}

Teknik detaylarına gelirsek, 555 entegresi aslında tek işlevi kare dalga üretmek olan bir timer devresidir. 555 entegre devresi pin bağlantıları şu şekildedir;

1. Ground: Toprak ayağı
2. Trigger: Bu bacak monostable uygulamalarında tetikleme ayağı olarak kullanılır. Alttaki karşılaştırıcının – girişine bağlanmış olan bu ayakta 1/3 Vcc altında bir gerilim olunca flip-flop un set bacağı lojik 1 olur ve dolayısıyla flip-flop un Q çıkışı lojik 1 olur.
3. Output: Çıkış ayağı
4. Reset: Bu ayak lojik 0 olunca devre reset yapar ve Q çıkışı lojik 0 olur. Reset ayağı diğer pinlere bağlı değildir.
5. Control: 2/3 Vcc gerilim alan noktaya bağlanmış olan bu ayaktaki gerilim değiştirilerek arzu edilirse zamanlama periyodu değiştirilebilir. Normalde küçük bir kapasite ile toprak hattına bağlanır.
6. Threshold: 2/3 Vcc üzerinde gerilim olduğunda flip-flop reset atar.
7. Discharge: npn transistörün kolektör ayağına bağlanmıştır. Transistör iletimde olunca (beyz gerilimi pozitif olunca) bu ayak toprak hattına bağlanır.
8. Vcc: +4.5V ile +16V arasında bir gerilim verilir.

555 entegresi Monostable ve Astable olmak üzere iki faklı çalışma ve bağlantı moduna sahiptir.