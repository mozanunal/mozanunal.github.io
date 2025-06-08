---
title: Hash Code 2020
date: 2020-03-31 23:00:12
tags: [Hash Code, Hash Code 2020, Google Hash Code]
categories:
  -  Coding
author: Mehmet Ozan Ünal
---

**Hello Everyone,**

I want to share our solution for Google Hash Code 2020. It is the code repo of
team titanium-white for Google Hash Code 2020 Online Qualification Round. We
have writen our code in Python.

[Code can be reached from here](https://github.com/mozanunal/hashcode2020)

## Code

Basically, the problem class is the backbone of the system.

- It handles the inputs and outputs with functions `__init__` and `dump`.
- It read the input files and creates objects according to that. I think the one
  of the thing we did well is this `__init__` function. It create all the
  objects like books, libraries even if book2score dictionary.
- It also handles the solving opeartion. It iterate trough the days and get max
  predicted score from every library available. When the libraries calculating
  the max pred scores, they get the current state as input. Therefore their
  predictionsa are more accurate. After the library is selected the state is
  updated such as day, already scanned books and state of the selected library.

```python
# main.py
from library import Library, Book
import numpy as np

class Problem(object):
    def __init__(self, filename):
        print('file--', filename)
        f = open(filename)
        l = f.readline().split(' ')
        self.filename = filename
        self.nBooks, self.nLibs, self.nDays = int(l[0]), int(l[1]), int(l[2])
        self.books = [ Book(i,int(score)) for i, score in enumerate(f.readline().split(' '))]
        sumb = 0
        for b in self.books:
            sumb += b.score
        print( sumb/1000000 )
        self.book2Score = {book.id: int(book.score) for book in self.books}
        self.libs = []
        for libId in range(self.nLibs):
            l = [int(i) for i in f.readline().split(' ')]
            nBooks, nSign, nScan = l[0], l[1], l[2]
            books = [ Book(int(i), int(self.book2Score[int(i)])) for i in f.readline().split(' ') ] 
            lib = Library(libId, nBooks, nSign, nScan, books)
            self.libs.append(lib) 
        self.pri()

    def solve(self):
        t = 0
        solution = []
        readBookSet  = set()
        while t < self.nDays:
            print('-----', t)
            scoreList = []
            readBookList = []
            for lib in self.libs:
                if lib.registered == False:
                    score, curBookList = lib.predMaxScore(self.nDays - t, readBookSet)
                    scoreList.append( score )
                    readBookList.append( curBookList )
                else:
                    scoreList.append(0)
                    readBookList.append( [ ] )
            if len(scoreList) == 0:
                break
            if max(scoreList) == 0:
                break
            libIndex = scoreList.index(max(scoreList))
            self.libs[libIndex].registeredDay = t
            self.libs[libIndex].registered = True
            self.libs[libIndex].solBooks = readBookList[libIndex]
            readBookSet = readBookSet.union(readBookList[libIndex])
            solution.append(self.libs[libIndex])
            t += self.libs[libIndex].nSign
        print([(lib.id, lib.nSign, lib.registeredDay) for lib in solution])
        return solution

    def dump(self, solution):
        f = open(self.filename.replace('data/', 'out/'), 'w+')
        f.write('{}\n'.format(len(solution)))
        for lib in solution:
            books = lib.solBooks
            f.write('{} {}\n'.format(
                lib.id, len(books)
            ))
            s = ""
            for book in books:
                s+= str(book) + ' '
            s+='\n'
            f.write(s)
        f.close()



    def pri(self):
        print('------')
        print(self.nBooks, self.nLibs, self.nDays)
        #print(self.libs)
        print('------')


if __name__ == "__main__":
    p = Problem('data/a.txt')
    solution = p.solve()
    p.dump(solution)
```

The Second critical class is `Library` class. The vital function in our
implementation is predMaxScore. We are doing calculating this with
`total book score / (sign day*sign day)`. Because, during our experiments, we
saw that the sign days length is quite important especially for some datasets.
Total book score is simply if in that day the library is chosen, how much of the
books can be scanned until the end of total days. Of course these books are
selecting according to their scores and they should be not scanned before.

```python
# library.py
import operator

class Library(object):
    def __init__(self, idx, nBook, nSign, nScan, books):
        self.id = idx
        self.nBook = nBook
        self.nSign = nSign
        self.nScan = nScan
        self.books = list(reversed(sorted(books, key=operator.attrgetter('score')) ))
        self.tempBooks = self.books[:]
        self.registered = False
        self.registeredDay = None
        self.solBooks = []

    def predMaxScore(self, nDays, readBookSet):
        restDays  = nDays - self.nSign
        if restDays < 0:
            return 0, []
        unReadBooks = set([book.id for book in self.tempBooks]) - readBookSet
        newBooks = []
        for book in self.tempBooks:
            if book.id in unReadBooks:
                newBooks.append(book)
        self.tempBooks = newBooks
        sumScore = 0 
        bookCap = restDays*self.nScan
        readBooks= self.tempBooks[:bookCap]
        readBooksId=[book.id for book in self.tempBooks[:bookCap]]
        for book in readBooks:
            sumScore += book.score
        return float(sumScore)/(float(self.nSign)**2), readBooksId

    def __repr__(self):
        return "Lib[{}:{}:{}--{}]".format(self.nBook, self.nSign, self.nScan, self.books)


class Book(object):
    def __init__(self, id, score, scanned=False):
        self.id = id
        self.score = score

    def __repr__(self):
        return "Book[{}:{}]".format(self.id, self.score)
```

## Results

With these scores, we were 231th in the World and 7th in Turkey.

![](https://raw.githubusercontent.com/mozanunal/hashcode2020/master/docs/result.jpeg)

![](https://raw.githubusercontent.com/mozanunal/hashcode2020/master/docs/score.jpeg)

You can check out my posts about Hash Code 2017 and Hash Code 2018:

[https://mozanunal.com/2017/07/Google-Hash-Code-2017/](https://mozanunal.com/2017/07/Google-Hash-Code-2017/)
[https://mozanunal.com/2018/04/hash-code-2018/](https://mozanunal.com/2018/04/hash-code-2018/)

Hopefully, see you again. Thank you!
