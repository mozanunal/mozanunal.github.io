title: |
  Harmonica Note Converter
tags:
  - harmonica, note conventer, music theory
categories:
  - Coding

author: Mehmet Ozan Ünal
date: 2020-04-26 03:44:00
---

# Harmonica Note Converter


Hello everyone,

Some of them is know that I am an ameteur harmonica player and I love harmonicas. I usually play diatonic harmonicas but last time I have bought a chromatic harmonica, which has quite different tone and it is hard to find music notes for it.

I am not the best at playing instruments however I am good at cosing and music theory. Thats why I decide to develop a tool to convert music notes for any instrument to notes for my harmonicas. I also create an modular structure to define new instruments.

```python
from harmonica import swan1040, diatonic_C
from song import Song

gotTheme = Song("Got Theme")
gotTheme.getFromTabs(
    diatonic_C,
"""
-6  -4  -5  +6  -6  -4  -5  +6  +5
+6  +4  +5  -5  +6  +4  -5  +5  -4
-6  -4  -5  +6  -6  -4  -5  +6  +5
+6  +4  +5  -5  +5  +4  -4
-8  +7  -4  -6  -3* -5  +6  -6
-8 +7 +6 -6 -3* -5 +5 -4 
""".replace("\t"," ").replace("+","")
)

gotTheme.exportTabs(swan1040)


gotTheme.shift(-12)
gotTheme.exportTabs(swan1040)



gotTheme.shift(+14)
```

The other feature which i implemented is tone shifting. It is possible to shift the tone of the sing which you give the system. Probably it is quite easy task for real musicians, but it is always a challenge for me. It is quite easy to implememted it with code. In that why, I can easily change the tone of the songs which I want to play with my harmonica.



```python
Got Theme
--------------
-7 -5 -6 7 -7 -5 -6 7 6 
7 5 6 -6 7 5 -6 6 -5 
-7 -5 -6 7 -7 -5 -6 7 6 
7 5 6 -6 6 5 -5 
-9 -8* -5 -7 5 -6 7 -7 
-9 -8* 7 -7 5 -6 6 -5 
--------------
--------------
Got Theme

-3 -1 -2 3 -3 -1 -2 3 2 
3 1 2 -2 3 1 -2 2 -1 
-3 -1 -2 3 -3 -1 -2 3 2 
3 1 2 -2 2 1 -1 
-5 5 -1 -3 1 -2 3 -3 
-5 5 3 -3 1 -2 2 -1 
--------------
--------------
Got Theme

-8 6 7 -7 -8 6 7 -7 -6* 
-7 -5 -6* 7 -7 -5 7 -6* 6 
-8 6 7 -7 -8 6 7 -7 -6* 
-7 -5 -6* 7 -6* -5 6 
9 -9 6 -8 -5 7 -7 -8 
9 -9 -7 -8 -5 7 -6* 6 
--------------
```

It is a video to demonstrate the tone shift feature of my code. It is quite easy to use. I suggest you to have a look in this link and test the app with following code. See you!

```
swan1040 = {
    "1": "C2",
    "1*": "C#2",
    "-1": "D2",
    "-1*": "D#2",
    "2": "E2",
    "2*": "E#2",
    "-2": "F2",
    "-2*": "F#2",
    "3": "G2",
    "3*": "G#2",
    "-3": "A2",
    "-3*": "A#2",
    "4": "C3",
    "4*": "C#3",
    "-4": "B2",
    "-4*": "B#2",
    "5": "C3",
    "5*": "C#3",
    "-5": "D3",
    "-5*": "D#3",
    "6": "E3",
    "6*": "E#3",
    "-6": "F3",
    "-6*": "F#3",
    "7": "G3",
    "7*": "G#3",
    "-7": "A3",
    "-7*": "A#3",
    "8": "C4",
    "8*": "C#4",
    "-8": "B3",
    "-8*": "B#3",
    "9": "E4",
    "9*": "E#4",
    "-9": "D4",
    "-9*": "D#4",
    "10": "G4",
    "10*": "G#4",
    "-10": "F4",
    "-10*": "F#4"
}

diatonic_C = {
    "1": "C2",
    "1*": "C#2",
    "-1": "D2",
    "-1*": "D#2",
    "2": "E3",
    "2*": "E#3",
    "-2": "G2",
    "-2*": "G#2",
    "3": "G2",
    "3*": "G#2",
    "-3": "B2",
    "-3*": "B#2",
    "4": "C3",
    "4*": "C#3",
    "-4": "D3",
    "-4*": "D#3",
    "5": "E3",
    "5*": "E#3",
    "-5": "F3",
    "-5*": "F#3",
    "6": "G3",
    "6*": "G#3",
    "-6": "A3",
    "-6*": "A#3",
    "7": "C4",
    "7*": "C#4",
    "-7": "B3",
    "-7*": "B#3",
    "8": "E4",
    "8*": "E#4",
    "-8": "D4",
    "-8*": "D#4",
    "9": "G4",
    "9*": "G#4",
    "-9": "F4",
    "-9*": "F#4",
    "10": "A4",
    "10*": "A#4",
    "-10": "C5",
    "-10*": "C#5"
}
```