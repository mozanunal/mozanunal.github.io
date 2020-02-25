title: |
  Micropython Mqtt Streamer
tags:
  - MPU6050
  - Mqtt
  - IOT
  - Arduino
categories:
  - Electronics
  - IOT
author: Mehmet Ozan Ünal
date: 2020-02-26 22:36:00
---


Hello everyone,

I have developed a micropython code to stream accelerometer data over mqtt. Also I have created a tool to visualize the data which is transferred from remote mqtt device which is executing micropython code.


{% youtube 5v9RwN818p8 %}

connect wifi

```python
import network
wlan = network.WLAN(network.STA_IF)
wlan.active(True)
wlan.connect('ssid', 'password')
```

wlan.ifconfig()

```python
>>> import upip
>>> dir(upip)
['__class__', '__name__', 'errno', 'gc', 'help', 'json', 'os', 'sys', 'usocket', 'ussl', 'uzlib', 'main', 'debug', 'tarfile', 'install_path', 'cleanup_files', 'gzdict_sz', 'file_buf', 'NotFoundError', 'op_split', 'op_basename', '_makedirs', 'save_file', 'install_tar', 'expandhome', 'warn_ussl', 'url_open', 'get_pkg_metadata', 'fatal', 'install_pkg', 'install', 'get_install_path', 'cleanup']
>>> upip.install("umqtt.simple")

```

I2c scanner

```python
>>> for device in devices:
...     print("Decimal address: ",device," | Hexa address: ",hex(device))
...
...
...
Decimal address:  104  | Hexa address:  0x68
```

Accelerometer Class
```python
import machine


class accel():
    def __init__(self, i2c, addr=0x68):
        self.iic = i2c
        self.addr = addr
        self.iic.start()
        self.iic.writeto(self.addr, bytearray([107, 0]))
        self.iic.stop()

    def get_raw_values(self):
        self.iic.start()
        a = self.iic.readfrom_mem(self.addr, 0x3B, 14)
        self.iic.stop()
        return a

    def get_ints(self):
        b = self.get_raw_values()
        c = []
        for i in b:
            c.append(i)
        return c

    def bytes_toint(self, firstbyte, secondbyte):
        if not firstbyte & 0x80:
            return firstbyte << 8 | secondbyte
        return - (((firstbyte ^ 255) << 8) | (secondbyte ^ 255) + 1)

    def get_values(self):
        raw_ints = self.get_raw_values()
        vals = {}
        vals["AcX"] = self.bytes_toint(raw_ints[0], raw_ints[1])
        vals["AcY"] = self.bytes_toint(raw_ints[2], raw_ints[3])
        vals["AcZ"] = self.bytes_toint(raw_ints[4], raw_ints[5])
        vals["Tmp"] = self.bytes_toint(raw_ints[6], raw_ints[7]) / 340.00 + 36.53
        vals["GyX"] = self.bytes_toint(raw_ints[8], raw_ints[9])
        vals["GyY"] = self.bytes_toint(raw_ints[10], raw_ints[11])
        vals["GyZ"] = self.bytes_toint(raw_ints[12], raw_ints[13])
        return vals  # returned in range of Int16
        # -32768 to 32767

    def val_test(self):  # ONLY FOR TESTING! Also, fast reading sometimes crashes IIC
        from time import sleep
        while 1:
            print(self.get_values())
            sleep(0.05)
```

main file

```python
from machine import I2C, Pin
import mpu6050
from umqtt.simple import MQTTClient
import time, json

i2c = I2C(scl=Pin(5), sda=Pin(4))
accelerometer = mpu6050.accel(i2c)
c = MQTTClient("umqtt_client", "iot.eclipse.org")
c.connect()

def run():
	while True:
	    c.publish( b"micropython/test/mpu6050", json.dumps(accelerometer.get_values()) )
	    time.sleep_ms(45)


run()
```

I want to also share the workflow when I am developing the micropython project. I have used uPyLoader to upload and execute the code during development.


[The code can be reached from this github repo.](https://github.com/mozanunal/micropython-mpu6050-mqtt-streamer)