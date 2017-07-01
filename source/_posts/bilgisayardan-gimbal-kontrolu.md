title: |
  Bilgisayardan Gimbal Kontrolü
tags:
  - Arduino Projeleri
  - 'C#'
  - Hava Araçları
  - 'Arduino C#'
  - Bilgisayardan Kontrol
  - gimbal
categories:
  - Arduino Projeleri
date: 2014-10-21 02:47:00
---
**Herkese Merhabalar!**  
Bugün size bilgisayardan gimbal kontrolü projemden bahsedeceğim. Bu projedeki amacım C# ile yazdığım bir arayüzde gimbali kontrol etmek. Gimbal ve bilgisayar arasında haberleşmeyi sağlaması ve servoları kontrol etmesi için bir arduino yerleştirdim. C# arayüzünün görevi, tıkladığım butonlara göre arduinoya "serial port" üzerinden gönderilecek karakteri değiştirmesidir.  
<!-- more -->Arduino da serial porttan aldığı karaktere göre servoları yönetir.  

Bilgisayardan Gimbal Kontrolü

<center>{% youtube Z61XZI12bS0 %}</center>


Arayüz programını C# kodlarının bu proje için örnek kısımlar aşağıdaki gibidir.
{% codeblock lang:csharp %}
private void timer1_Tick(object sender, EventArgs e)
{
  serialPort1.Write(label1.Text);
}

private void connect_Click(object sender, EventArgs e)
{
  timer1.Enabled=true;
  try
  {
    serialPort1.Open();

  }
  catch (Exception hata)
  {
    MessageBox.Show(“Hata:” + hata.Message);
  }
}

private void button5_Click(object sender, EventArgs e)
{
  label1.Text = “O”;
}

private void button1_MouseUp(object sender, MouseEventArgs e)
{
  label1.Text = “O”;
}

private void button3_MouseUp(object sender, MouseEventArgs e)
{
  label1.Text = “O”;
}

private void button4_MouseUp(object sender, MouseEventArgs e)
{
  label1.Text = “O”;
}

private void button2_MouseUp(object sender, MouseEventArgs e)
{
  label1.Text = “O”;
}

private void button1_MouseDown(object sender, MouseEventArgs e)
{
  label1.Text = “A”;
}

private void button3_MouseDown(object sender, MouseEventArgs e)
{
  label1.Text = “B”;
}

private void button4_MouseDown(object sender, MouseEventArgs e)
{
  label1.Text = “C”;
}

private void button2_MouseDown(object sender, MouseEventArgs e)
{
  label1.Text = “D”;
}
{% endcodeblock %}


