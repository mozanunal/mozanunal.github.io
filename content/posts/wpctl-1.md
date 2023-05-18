---
title: 'Wallpaper Automation Tool: WPCTL'
tags:
  - linux
  - yazilim
  - wallpaper
  - unsplash
  - bash script
  - ubuntu
categories:
  -  Coding
date: 2021-10-12 08:14:07
---

Hey,

Today I will come up with a very minimalistic wallpaper automation tool [**WPCTL**](https://github.com/mozanunal/wpctl). I spend most of my time on the computer. There are not too many options to have fun with while working on the computer. Interesting and colorful photos are one of the favorite entertainment sources for my daily routine. Therefore, I really like auto wallpaper changer programs which surprises me with different photos. I decided to use one of these programs. However, none of them is fulfiled my requirements. I want a wallpaper changer which should be like:
- It must have **beautifull image** sources
- It should be **configured easily**
- It should be **lightweight** and has **minimal dependency**
- It should work with **multi-monitor** and different **resolution** options
In a nutshell, I decided to develop a wallpaper changer script according to my requirements.

I started with the image source for my script. There is a website called *[Unsplash](https://unsplash.com/)* which is a photo sharing website. However, it has a unique feature which differ it from similar apps. It has a very nice and license free API. To keep application similar and with minimum dependency I have written it as a bash scripts. Basically, wpctl script, get image source as argument, read the monitor resolutions and contruct Unsplash url according to them. It download the images from the constructed url and set it as wallpaper using Gnome wallpaper controller. This script also can be add as crontab script. By this, your wallpaper can be changed at the frequency you want. For source there are also 4 options. Details are from readme of [Github repository](https://github.com/mozanunal/wpctl). See you!

![Example Wallpaper from Unsplash](/images/wallpaper.jpeg)

# wpctl
 
Wallpaper Control is a minimalist wallpaaper automation tool for linux based on [Unsplash](https://unsplash.com/)


## Getting Started
It is working with Unsplash Api

- Minimalist 100 lines of code zero dependency
- Auto resolution detection
- Multi monitor handling
- Tested on Ubuntu 18.04 with GNOME Desktop

### Prerequisities

```bash
sudo apt-get install wget notify-send
```

### Installing

```bash
sudo wget --quiet https://github.com/mozanunal/wpctl/releases/download/0.1.0/wpctl \
          -O /usr/local/bin/wpctl && \
          sudo chmod +x /usr/local/bin/wpctl

```

Try the application
```bash
user@user:$ wpctl
Please provide a valid wallpaper source
Usage:
wpctl <SOURCE>
       random
       daily
       collection
       topic1,topic2
user@user:$ wpctl random
--> Random is selected as source.
https://source.unsplash.com/random/1920x1080
--> From source 'random' wallpaper set. 1920 x 1080
```

Wallpapers can automatically updated using crontab. Write following command and add line according to your favorite configuration
```bash
crontab -e
```


Every hours pick a random wallpaper
```bash
0 * * * * /usr/local/bin/wpctl random
```

Every day get daily photo as wallpaper
```bash
0 10 * * * /usr/local/bin/wpctl daily
```

Every 15 mins pick a cat image as your wallpaper
```bash
*/15 * * * * /usr/local/bin/wpctl cat
```

Every 3 hours pick a blue image as your wallpaper
```bash
0 */3 * * * /usr/local/bin/wpctl blue
```


### Uninstalling

Remove binaries
```bash
sudo rm /usr/local/bin/wpctl
```

Remove picture
```bash
rm -rf $HOME/wpctl
```

## Authors

* **Mehmet Ozan Ünal**

## License

* MIT

## Acknowledgments

* [Unsplash](https://unsplash.com/)

