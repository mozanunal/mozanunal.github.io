---
title: Kurulabilir Python Modulü Oluşturma
tags:
  - python
  - pip
  - modül oluşturma
  - setup.py
categories:
  -  Coding
---

Python paketi oluşturma


Paketimizin iskeleti aşağıdaki gibi olmalıdır. Örneğin modulümüzün ismi "my module" olsun:

```
mymodule/
	mymodule/
		__init__.py
		mymodulepart1.py
		mymodulepart2.py
		...
	setup.py
	
```

Modulümüzü istediğimiz yapıda oluşturduktan sonra "setup.py" dosyamızı oluşturuyoruz. Burada gerekli dosyalar da xxx

```python
from setuptools import setup

setup(name='funniest',
	version='0.1',
	description='My test module',
	url='https://github.com/xxxx/xxxx',
	author='Moz',
	author_email=mehmetozanunal@gmail.com',
	license='MIT',
	packages=['mymodule'],
	install_requires=[
		'xxxx',
        'yyyy',
        'zzzz'
	],
	zip_safe=False)
```


Oluşturulan paketi bu komutlar ile kurabiliriz. 
```sh
pip install .
pip install -e .
```

Referanslar:
https://python-packaging.readthedocs.io/en/latest/everything.html

