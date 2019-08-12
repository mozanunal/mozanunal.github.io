---
title: Playing DOTA on Raspberry Pi using Steam Link
tags:
  - Steam Link
  - Raspberry Pi
categories:
  -  Coding
date: 2019-02-01 00:45:01
---

**Hello,**
Steam Link is software which provides support to Steam to stream screen view of the games to devices which is on same local area network. In this setup, there are 2 devices. First one is the device to run the Steam and the games which act as a server. The second one is the one which runs Steam Link and acts as a client to this server. By using this technology you can play games directly on a device which is connected to the same router. The connection is also 2 way. Thus, control devices such as keyboard, mouse and game controllers can be connected directly to the client device. 

On 3rd of December, Steam announced that the Steam Link can work on Raspberry Pi now. After I saw that, I decided to give it a try. I have tried it with my favorite game, Dota 2. Dota 2 can be played on a Raspberry Pi using Steam Link. It basically uses your computer as a game server. Actually, the PC is run the Dota 2 however it casts its screen view to another computer, which in this case is a Raspberry Pi. You can install it to your Raspberry Pi with only 2 shell commands.

In this post, installing and running the Steam Link will be discussed. Steam Link is a software which is developed to play high processing power intensive games on low processing power devices. Actually, you should already have enough system requirements for the game and this computer also should be the same local area network.

![](/images/steamlink1.jpg)

### Installation
The following link is from Steam Community website. They announced that Steam Link is officially available for Raspberry Pi. The installation process is quite easy but the basic Linux shell knowledge still is a requirement.   
https://steamcommunity.com/app/353380/discussions/0/1743353164093954254/

The first step, using curl download the required Debian installation package.

```shell
pi@rpi-:~ $ curl -#Of http://media.steampowered.com/steamlink/rpi/steamlink_1.0.7_armhf.deb
######################################################################## 100.0%
```

After downloading the package, process continues with following one line script. It is installing Steam Link Package to your Raspberry Pi.

```bash
pi@rpi-:~ $ sudo dpkg -i steamlink_1.0.7_armhf.deb
Selecting previously unselected package steamlink.
(Reading database ... 129787 files and directories currently installed.)
Preparing to unpack steamlink_1.0.7_armhf.deb ...
Unpacking steamlink (1.0.7) ...
Setting up steamlink (1.0.7) ...
Processing triggers for gnome-menus (3.13.3-9) ...
Processing triggers for desktop-file-utils (0.23-1) ...
Processing triggers for mime-support (3.60) ...
Processing triggers for hicolor-icon-theme (0.15-1) ...
Processing triggers for man-db (2.7.6.1-2) ...

```
### Game Play Demo

Some configurations are also should be done to start playing through your Raspberry Pi. However, these steps are quite easy to follow and no prior shell knowledge is required. By the way, ping is around 6 ms with ethernet connection to your router. The ping is heavily depends on your router performance and connection quality. I could not get sufficient results with WiFi connection to Raspberry Pi. Therefore I connect it to external router in order to keep the connection latency as minimum as possible.

{% youtube Oouu3DmDyM4 %}

