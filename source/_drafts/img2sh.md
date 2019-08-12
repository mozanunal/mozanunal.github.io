---
title: 'Show Images Directly on Terminal: img2sh'
tags:
  - linux
  - yazilim
  - bash script
  - ubuntu
categories:
  -  Coding
date: 2019-08-10 23:17:07
---


# Img2sh

Hello there,

*In this post, I want to tell a brief story of how I have created a tool named img2sh. It is also my first python package which is published over PyPI. In this very post, I will try to answer questions like:
How is it developed?
What are the challenges?
How should a package created and deployed over PyPI?
Let's continue!*

Img2sh is a tool to show images directly on terminal. For colored images 256 xterm color support is required. This script basically resize the image with antialliasing and quantized its colors to xterm color pallette. [Github repostory of the project can be reached from here](https://github.com/mozanunal/img2sh) 

## Demo

Testing the package is super easy. Install using pip and run.

```bash
pip install img2sh --user
img2sh demo.jpeg
```

Result:
 
![](https://user-images.githubusercontent.com/13440502/52919655-aa89d400-3315-11e9-8c4a-7a7e057b8fa4.png) 

**Interactive mode**

```bash
img2sh demo.jpeg -w 80 -i

q: quit z: zoom+ x: zoom- c: reset 
arrow keys for navigation 
cmd: q
```

![](https://user-images.githubusercontent.com/13440502/59120360-e34dc780-895d-11e9-8b2a-1d7ea5b25fe4.gif)



For detailed usage arguments:

```bash
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

## Story

As it can be understood from its name, img2sh is a python app to show images directly in the terminal. I think it could be helpful when connected over ssh to a server with no desktop environment. The images can be examined quickly on the terminal screen.
While the tool was developed, the followings are the challenges I have encountered with.

### Images

In digital word, images are made of pixels. Pixel is the smallest part of the image which can contain only one color. Variety of the pixel is changed with the 

![](/images/pixel.png)

### Colors in terminal 
How coloring mechanism works in the terminal should be figured out.

http://jafrog.com/2013/11/23/colors-in-terminal.html

![](/images/colorcodes.png)

### Parsing commandline arguments

How should the command line arguments be parsed? Actually it is quite easy with python. Let's examine the next code block:

```
import argparse

parser = argparse.ArgumentParser(
    description='Show images directly on terminal.')
parser.add_argument("Image", help="the directory of the image which will be opened")
parser.add_argument(
    "-w", "--width",
    help="image width on the terminal",
    type=int
)
parser.add_argument(
    "-i", "--interactive",
    default=False, action='store_true',
    help="open image in interactive mode",
)

args = parser.parse_args()
```

After the initialization, arguments can be used with commands like `args.width`. The arguments can be configured as mandotory or optional and the type of the argument also be specified. This package is pretty usefull and standart package which is widely used most of the python projects.s


### Image formats

For further imporement in the project, it should be solved that how different image formats can handle. Furtunately, Pillow package can handle various kinds of image formats such as jpeg, png, tiff. This packet can provide pixel values for different image types using same get_pixel method interface. However, the problem is the dimension of the color values are representing. At standart jpeg a pixel value is represented with 24 bits which are 3 bytes. Each byte value represent different color channel Red, Blue and Green. Png differs with alpha channel. At PNG images, colours are created with 4 bytes. Red, Blue, Green and Alpha. Alpha is the transparency channel of the image. So the dimension of the pixel is diffrent. But this problem is easily solved in findNearestColor function. In this functions the dimension of the pixel is handled.

![](/images/apple.jpeg)

### Setup.py

How to create a setup.py file which support also entry point and can be executed without python shell

```python
from setuptools import setup, find_packages

with open('requirements.txt') as f:
    requirements = f.read().splitlines()

setup(
    name='img2sh',
    version=__import__('img2sh').__version__,
    install_requires=requirements,
    description=(
        'Show images directly on terminal using Xterm colors.'
    ),
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    author="Mehmet Ozan Unal",
    author_email='mehmetozanunal@gmail.com',
    maintainer="Mehmet Ozan Unal",
    maintainer_email='mehmetozanunal@gmail.com',
    license="MIT",
    packages=find_packages(),
    platforms=["all"],
    url='https://github.com/mozanunal/img2sh',
    classifiers=[
        'Development Status :: 4 - Beta',
        'Operating System :: OS Independent',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: BSD License',
        'Programming Language :: Python',
        'Programming Language :: Python :: Implementation',
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Topic :: Software Development :: Libraries'
    ],
    entry_points={
        'console_scripts': ['img2sh=img2sh.cli:main'],
    },
)
```

MANIFEST.in
```sh
include README.md
include requirements.txt
include LICENCE
```

https://python-packaging.readthedocs.io/en/latest/everything.html

### Uploading python package

How should a python packages create and upload to PyPI server

```
python setup.py sdist bdist_wheel
twine upload --repository-url https://upload.pypi.org/legacy/ dist/*
```

### Optimazing performance
How can be the performance of the tool optimized?

v1

```python
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

```python
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


```bash
# for v1
real 0m2,618s
user 0m2,519s
sys 0m0,080s

# for v2
real 0m1,690s
user 0m1,892s
sys 0m0,417s
```
By the way, here is some of the upcoming challenges are all helps appreciated.


Thank you for your interests. See you later...


## Acknowledges
This package is developed using:
- [Pillow](https://pillow.readthedocs.io/en/stable/installation.html)
- [colored](https://gitlab.com/dslackw/colored)
