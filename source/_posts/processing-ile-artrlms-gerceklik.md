title: '[TR] Processing ile Artırılmış Gerçeklik'
tags:
  - Image Processing
  - Processing
  - Artırılmış gerçeklik
  - marker tabanlı vr
  - market tabanlı ar
categories:
  - Signal Processing
  - Image Processing
date: 2015-04-25 03:03:00
---
**Merhaba Arkadaşlar,**  
Bugünkü yazımda NyARToolkit'ten bahsedeceğim. Bu toolkit sayesinde kameradan aldığımız görüntüler üzerine 3 Boyutlu nesneler yerleştirebiliyoruz. İstediğimiz 3 boyutlu grafik hatta animasyon yerleştirilebilir. Google Glass tarzı giyilebilir teknolojilerle daha yaratıcı uygulamalar yapılabilir. Simülasyon ve oyun dünyası için çeşitli uygulamalar geliştirilebilir. Hatta hologramlar yapmanın şimdilik en gerçekleştirilebilir yolu olarak gözüküyor. Toolkit bir çok programlama diliyle kullanılabiliyor. Ben Processing ile kullandım basit olduğu için. Toolkiti kullandığım şöyle bir tanıtım videosu hazırladım:  

{% youtube h2N0UAR17Og %}

Toolkiti kullanmak için gerekenler:  
  
**1.** Processing 2  
**2.** NyARToolkit Kütüphanesi(Processing içerisinden add library diyerek kurulabilir.)  
**3.** Kütüphanemizin tanıyabileceği patternlar(kendiniz de üretebilirsiniz)  
**4.** Bu kaynak kod  

```csharp
import processing.video.*;
import jp.nyatla.nyar4psg.*;
Capture cam;
MultiMarker nya_r;
MultiMarker nya_l;
PFont font=createFont("FFScala", 32);

void setup() {
  size(640,480,P3D);
  colorMode(RGB, 100);
  println(MultiMarker.VERSION);
  cam=new Capture(this,640,480);
  nya_l=new MultiMarker(this,width,height,"camera_para.dat",new NyAR4PsgConfig(NyAR4PsgConfig.CS_LEFT_HAND,NyAR4PsgConfig.TM_NYARTK));
  nya_l.addARMarker("patt.hiro",80);
  nya_r=new MultiMarker(this,width,height,"camera_para.dat",new NyAR4PsgConfig(NyAR4PsgConfig.CS_RIGHT_HAND,NyAR4PsgConfig.TM_NYARTK));
  nya_r.addARMarker("patt.kanji",80);
  cam.start();
}
int c=0;
void drawgrid()
{
  pushMatrix();
  stroke(0);
  strokeWeight(2);
  line(0,0,0,100,0,0);
  textFont(font,20.0); text("X",100,0,0);
  line(0,0,0,0,100,0);
  textFont(font,20.0); text("Y",0,100,0);
  line(0,0,0,0,0,100);
  textFont(font,20.0); text("Z",0,0,100);
  popMatrix();
}
void draw()
{
  c++;
  if (cam.available() !=true) 
  {
    return;
  }
  cam.read();
  nya_r.detect(cam);
  nya_l.detect(cam);
  background(0);
  nya_r.drawBackground(cam);
  //right
  if((nya_r.isExistMarker(0)))
  {
    nya_r.beginTransform(0);
    fill(0,0,255);
    drawgrid();
    translate(0,0,20);
    rotate((float)c/100);
    sphere(40);
    nya_r.endTransform();
  }
  //left
  if((nya_l.isExistMarker(0)))
  {
    nya_l.beginTransform(0);
    fill(0,255,0);
    drawgrid();
    translate(0,0,20);
    rotate((float)c/100);
    box(40);
    nya_l.endTransform();
  }
}
```
