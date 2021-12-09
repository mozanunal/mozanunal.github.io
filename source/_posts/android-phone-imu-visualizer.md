title: '[TR] Android Phone IMU Visualizer'
tags:
  - Android Phone IMU Visualizer
  - Android Programlama ve Oyun
  - Android programming. Android IMU
  - Processing IMU
  - Processing UDP
categories:
  -  Coding
author: Mehmet Ozan Ünal
date: 2015-05-18 06:23:00
---
**Hi,**  

I usually write my blog in Turkish but at this project i decided to write it in English. Because I cannot find any successful tutorial about this issue. I took e-mails or contacts from different countries about my projects if they are unusual so i am going to write some of my article in English.  

At this project, visualization of android device with IMU sensors will be explained.The orientation of an android device will be shown at PC. Android camera and PC communicate with each other with a WI- FI connection. I wrote 2 program for this project. First one is android app ([can download from here](https://drive.google.com/file/d/0B5j__Lyt9ozbNG9SdVBOOVowTjg/view?usp=sharing)). Second one is visualizer program for PC. At android app IMU angles of the  
<!-- more -->Android phone are sent to PC by using UDP network protocol. After you install the app write your PC's IP to this program. Also you can change the using port.  

![](https://3.bp.blogspot.com/-G-J9t8jfIME/VVlD7XUMQYI/AAAAAAAALCI/jJMdZmSw2cU/s720/Screenshot_2015-05-18-04-42-20.png)

PC program is written in Processing 2\. Program firstly take the IMU angles from android phone over wifi connection. Then update the 3 dimensional shape on the screen by this data. To use my processing code Processing UDP library must be downloaded.

Consequently, needs for this project:  

*   Android device
*   [Open Android IMU App](https://drive.google.com/file/d/0B5j__Lyt9ozbNG9SdVBOOVowTjg/view)
*   Processing 2 for PC
*   Processing UDP Library
*   [This code for Processing](https://drive.google.com/file/d/0B5j__Lyt9ozbcXc1b1dDbXQ1Vms/view?usp=sharing)

Finally, it is a video of presentation of my project. I hope you enjoy this.  

{% youtube tVQa2StKkoc %}
