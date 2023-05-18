---
title: Coolest C Trick
date: 2020-03-30 23:45:00
tags: [Programming,C-iterator,--> operator]
categories:
  -  Coding
author: Mehmet Ozan Ünal
---

Hello Everyone,

Just a quick post here...

Today I have seen a code snippet which makes me quite happy. 

```cpp
#include <stdio.h>
int main()
{
    int x = 10;
    while (x --> 0) // x goes to 0
    {
        printf("%d ", x);
    }
}
```
The the output of this is:
```
9 8 7 6 5 4 3 2 1 0
```

It was a little suprising for me at first sight.
I thought that what the hell is `-->` operator.
After then I understand that it is actually `x--` and `>`. X compared with 0 (cheked if it is bigger than 0) and then it is decremented by 1.
Therefore, this loop can be decoded to this:
```cpp
    while (x > 0) // x goes to 0
    {
        x = x - 1;
        printf("%d ", x);
    }
```
After the mistery solved, I still like this approach. I am planning to use it in my code.

Hope to see you soon, again.