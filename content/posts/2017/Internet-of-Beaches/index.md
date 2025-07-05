---
title: Internet of Beach
author: Mehmet Ozan Unal
tags:
  - IoT
  - Nasa Space Apps Challenge 2017
  - Electronics
  - IoT
  - IOB
categories:
  - Electronics
  - IoT
date: 2017-06-27 20:18:00
---

**Herkese Merhabalar,**

Bugünkü yazımda arkadaşlarımla katıldığım Nasa Space Apps Challenge 2017
hakkında bir paylaşımda bulunacağım. Bu hackhathon Nasa tarafından dünya
genelinde düzenleniyor. 24 saat içerinde önceden yayınlanan sorunlardan birine
çözüm bulmamız isteniyor. Tüm dünya genelinde aynı gün bu problemlere çözüm
aranıyor. Biz de Koç Üniversitesi IEEE topluluğunca organize edilen yarışmanın
İstanbul şubesinden katıldık. Öncellikle şunu söylemem gerek organizasyon
oldukça güzeldi, hiç bir aksaklık yaşanmadan çok keyifli ve eğlenceli bir 24
saat yaşadık. Burdan IEEE Koç ailesine teşekkürlerimi iletiyorum.

Yarışma hakkında konuşmaya devam edecek olursam. Yarışmanın ilk saatlerini
konuya karar verme ve 24 saat boyunca neler yapacağımızı planlayarak geçti.
Yarışmayı bir kaç senedir takip ediyoruz. Bu seneki "challenge"ları görünce
biraz şaşırdık. Çünkü genellikle yer bilimleri üzerine ve veri işleme,
anlamlandırmaya yönelik konulardı. Bizim takımımıza pek hitap etmediği için IOT
tabanlı bir şeyler yapabileceğimiz aynı zamanda mekanik, elektronik dizayn
yapabileceğimiz konular seçmeye çalıştık. Bu düşüncelerle * Let's go to the
Beach* konusunu seçtik. Bu kampsamda bulut tabanlı her bir kişinin ayrı ayrı,
kişisel UV ışın alımını takip edip ona öneriler verebilen bir sistem mimarisi
üzerine çalıştık. Sistemin ayrıntılarına yazının devamından ulaşabilirsiniz. Bu
arada projemiz birincilik ödülüne layık görüldü. Bu da beni ayrıca çok mutlu
etti. Proje ile alakalı sorunlarınız için ulaşabilirsiniz. Tekrar görüşmek üzere

> It is a project developed for Nasa Space Apps Challenge 2017. Detailed
> information can be foud from below

#### The Challenge

#### Let's go to the Beach!

Build a tool for beach-goers to monitor for hazards and to alert them of
precautionary measures for protection on their swim- and surf-filled adventures!

# Internet Of Beach

{{< youtube id="psZvnp--GZY" >}}

Satisfy your curiosity about beaches to go! IoB wristband warns you about
dangerous amounts of UV exposure with respect to your skin sensitivity, age and
how much actual radiation you received.

We designed a web application, an IOB wristband a gateway and a server. With our
web application, many information about the beach can be learned. Required
informations are taken from openweather api and are showed to users with open
board dashboard. The time of the UV exposure of the person is measured with IOT
wristband. The required informations and energy are provided from solar panel.
RGB leds warn you with processing data from the cloud. We also designed a
gateway which is shaped as a buoy and placed it to the beaches to connect IOB
wristband to cloud. More reliable data are obtained with processing all these
data in cloud.

[To view the presentation:](https://prezi.com/view/ASvj6nXuaFzoGrtXmQRu/)

[To view the full source code:](https://github.com/mozanunal/IOB)

[To view the photos and all other documents (PCBs, CAD files):](https://drive.google.com/open?id=0B_jux89UTYUUc0Y2dV9vVzhLaFE)

#### Who Are We?

We are participating the competition from
[Istanbul, TURKEY](https://www.google.com.tr/search?q=google+map+istanbul). All
of us studying at [Istanbul Technical Univercity.](https://www.itu.edu.tr/)

- Murat Gokcen
  - Aerospace Engineering
- Mehmet Ozan Unal
  - Electronics and Communication Engineering
- Emir Can Yaman
  - Aerospace Engineering
  - Electornics and Communicatin Engineering
- Ertugrul Cinar
  - Aeronautical Engineering
  - Control and Automation Engineering

It's hard to introduce everybody one by one. But in a nutshell we are enthusiast
about space, electronic, software and all flying things. Also two members of our
team joinder at 2015 Nasa Space Apps Challange Istanbul and they were selected
as People's choice with Christopher

### What is The Challange?

#### [Let's go to the Beach!](https://2017.spaceappschallenge.org/challenges/earth-and-us/lets-go-beach/details)

According to the World Health Organization [1], overexposure to sunlight can
cause harm to our skin, our eyes, and our immune systems. In fact, protecting
ourselves from UV damage, for example by using hats, sunglasses, and sunscreen,
can prevent four out of five cases of skin cancer.

Our soution covers most of challange as below.

- Predict their sun exposure
- Suggest alternative times of the day, or days when sun exposure levels are
  lower
- Warn users of presence of HABs in local beaches, and direct them to safer
  regions, where available
- Add other precautionary and safety alerts as you see fit!

### What is The Solution?

APP + IoT Band + Cloud!

![](https://i.hizliresim.com/YDZXVz.jpg)

IoT Band

![](https://i.hizliresim.com/O04Qd5.jpg)

Gateway between IoT Band and Cloud Server
![](https://i.hizliresim.com/4Py6RQ.jpg)

Cloud Server ![](https://i.hizliresim.com/JabPEB.jpg)

---

### How its Working?

![](https://i.hizliresim.com/37GyPA.jpg)

For better describition, you can watch project video.

---

### Thank you for your time

We are to happy to participate this contents. We hope we will join next year
again. By the way, you can see technologies which we used while hackathon
process.

![](https://i.hizliresim.com/oj4B0X.jpg)

I want to finish with a quote from Richard Bronson.

> Above all, we want to create something we're proud of.

[1] “Sun Protection.” Ultraviolet radiation and the INTERSUN Programme. World
Health Organization. Website Accessed March 2017\.
[https://www.who.int/uv/sun_protection/en/](https://www.who.int/uv/sun_protection/en/)
