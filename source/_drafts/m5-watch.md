title: |
  DIY Smartwatch: M5 Stick C
tags:
  - M5 Stick C, smartwatch, diy smartwatch, esp32, 
categories:
  - Electronics
    - IoT

author: Mehmet Ozan Ünal
date: 2020-04-26 03:44:00
---

# DIY Smartwatch: M5 StickC

Hello everyone,


https://github.com/mozanunal/m5-stickc-watch


Today, I will introduce you with my new toy, M5Stick. It is a smart iot module with a cute case. I have bought it from china, seedstudio. This module has esp8266 as main microcontroller. It also have various sensors such as gyro, accelerometer, microphone. There is a tiny rgb lcd screen front side of the case. It is battery powered and there are 2 connection connectors for extensions. One of them is for Grove modules, the second one is the Actually it is quite well designed module, only there are some problems about power consumption which I will give detailed information.

https://m5stack.com/collections/m5-core/products/stick


I have bought this module, since I have interest in smart wearable devices, nowadays. I was looking for a module which should consist a main core with wifi connectivity and a tiny screen and buttons for interactions. While I was searching for that module, I have found m5stick via an Instagram commercial.

Let's look at technical details of this device


As I said earlier, I made an smartwatch from this module. Let me explain how:

I used PlatformIO with VSCode as ide and I have develop the firmware using Arduino framework. I should admit that it was quite easy to develop this firmware by these tools. There is also a library from m5stack company which is called m5stick. Using this library, it is even easier to program this module. In this library, module is converted to class and its peripherals are the properties of this class.


The base watch functionality handles in the main loop. Using the defines you can enable and disable different pages. It is quite easy to define new pages

I have a video for you to illustrate the functionality of the watch. Let me give you brief information about its power consumption. Everything is ok until this.

http://forum.m5stack.com/topic/1106/m5-stick-c-wont-turn-on-am-i-missing-something