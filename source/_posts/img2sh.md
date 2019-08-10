---
title: 'Show Images Directly on Terminal: img2sh'
tags:
  - linux
  - yazilim
  - bash script
  - ubuntu
categories:
  -  Programming
date: 2019-08-10 23:17:07
---


# Img2sh

Img2sh is a tool to show images directly on terminal.
For color images 256 xterm color support is required. This script basically resize the image with antialliasing and quantized its colors to xterm color pallette.


## Demo

Testing the package is super easy. Install and run.

```
pip install img2sh --user
img2sh demo.jpeg
```

Result:
 
![](https://user-images.githubusercontent.com/13440502/52919655-aa89d400-3315-11e9-8c4a-7a7e057b8fa4.png) 

## Demo with interactive mode

```
img2sh demo.jpeg -w 80 -i

q: quit z: zoom+ x: zoom- c: reset 
arrow keys for navigation 
cmd: q
```

![](https://user-images.githubusercontent.com/13440502/59120360-e34dc780-895d-11e9-8b2a-1d7ea5b25fe4.gif)



For detailed usage arguments:

```
$ python img2sh/cli.py --help

usage: cli.py [-h] [-w WIDTH] [-i] Image

Show images directly on terminal.

positional arguments:
  Image                 the directory of the image which will be opened

optional arguments:
  -h, --help            show this help message and exit
  -w WIDTH, --width WIDTH
                        image width on the terminal
  -i, --interactive     open image in interactive mode
  ```

## Installing

It can be easily install using pip.

```
pip install img2sh --user
```

Installing from source:

```
git clone https://github.com/mozanunal/img2sh
cd img2sh
pip install -r requirements.txt
python setup.py install
```



## Story

Hello there,

In this post, I want to tell a brief story of how I have created a tool named img2sh. It is also my first python package which is published over PyPI. In this very post, I will try to answer questions like:
How is it developed?
What are the challenges?
How should a package created and deployed over PyPI?




As it can be understood from its name, img2sh is a python app to show images directly in the terminal. I think it could be helpful when connected over ssh to a server with no desktop environment. The images can be examined quickly on the terminal screen.


*While the tool was developing, the following are the  challenges I have encountered with.*

*How coloring mechanism works in the terminal should be figured out.*

http://jafrog.com/2013/11/23/colors-in-terminal.html

*How should the command line arguments be parsed?*

*How different image formats can handle*

*How to create a setup.py file which support also entry point and can be executed without python shell*

*How should a python packages create and upload to PyPI server*

*How can be the performance of the tool optimized?*

v1

```
def findNearestColor(color, pallette):
    distances = []
    if len(color) == 3:
        (colorr, colorg, colorb) = color
    elif len(color) == 4:
        (colorr, colorg, colorb, alpha) = color
        if alpha == 0:
            return None  # pallette.index((255,255,255))
    for c in pallette:
        (cr, cg, cb) = c
        distances.append(
            (colorr-cr)**2 +
            (colorg-cg)**2 +
            (colorb-cb)**2
        )
    return distances.index(min(distances))
```

v2

```
def findNearestColor(color, pallette):
    distances = []
    if len(color) == 3:
        (colorr, colorg, colorb) = color
    elif len(color) == 4:
        (colorr, colorg, colorb, alpha) = color
        if alpha == 0:
            return None  # pallette.index((255,255,255))
    c = (colorr, colorg, colorb)
    diff = pallette - c
    diffSum = np.sum( np.square(diff), axis=1)
    return np.argmin(diffSum)

```

real 0m2,618s
user 0m2,519s
sys 0m0,080s

real 0m1,690s
user 0m1,892s
sys 0m0,417s

By the way, here is some of the upcoming challenges are all helps appreciated.


Thank you. See you later...


### Acknowledges
This package is developed using:
- [Pillow](https://pillow.readthedocs.io/en/stable/installation.html)
- [colored](https://gitlab.com/dslackw/colored)
