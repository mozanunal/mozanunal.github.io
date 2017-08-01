title: Bitcoin Madencileri için Online Dashboard
author: Mehmet Ozan Ünal
tags:
  - IOT
  - wemos
  - esp8266
  - bitcoin mining
categories:
  - IOT Projeleri
date: 2017-07-30 15:50:00
---
**Herkes merhabalar,**

Bitcoin son dönemlerin popüler konularından birisi. Aslında genel olarak crypto currency son zamanlarda çok popüler. Peki nedir bu kavramlar? Crypto currency güvenliği şifreleme teknojileriyle sağlanan sanal para birimleridir. Her gün bir yeni bir tür crypto currency ortaya çıkıyor. Bunlar arasında en geçerli olanı ise bitcoin. Sanırım popülerliği en eskilerinden biri olmasından ve anlık olarak üretimi sınırlayabilen ilki olmasından geliyor. Bahsetmek istediğim 3. kavram ise bit coin mining: Yüksek hesaplama gücü kullanarak bitcoin üretebilmeniz mümkün. Bitcoin alışverişlerinin geçerli olması için bir şifre ile onaylanması gerekiyor. Bu şifreyi de bir hash çözerek oluşturuyorsunuz ve bunun karşılığında sistem sizi bitcoin ile ödüllendiriyor. Bu amaçla bir sürü insan sağlan ekran kartları alıp bitcoin tarlaları kurdular ve bu işten para kazanıyorlar. Tabi aklınıza, bitcoinin dünyaya katkısı nedir ya da ne kadar riskli, yatırım yapılır mı? gibi türlü türlü farklı açılardan sorular gelebilir. Ama malesef ben bu konuda uzman değilim ve daha nedir sorusuna bile tam olarak cevap vermek çok zor.

Neyse konuyu biraz fazla dağıttım bu yazının konusu aslında bunlar değil. Konuma dönecek olursam; bitcoin mining işini kolaylaştıran sistem var, adı Nice Hash. Programını kuruyorsunuz ve bilgisayarınızın hesaplama gücünü satarak para kazanıyorsunuz. Arka planda o crypto currency'lerden en karlı olanı "mine" ediyor. Size de ona göre bir para ödüyor tabi bitcoin olarak. Bir arkadaşım da bu mining işine girdi. Projemin asıl amacı ona anlık olarak kazandığı parayı gösterebilecek bir sistem yapmaktı. Proje böyle başladı yani :). Bu projede kapsamında yaptığım; gerçek zamanlı olarak bu programın web apisini kullanarak bir miner'ın kazandığı parayı ve o andaki bitcoin kurunu çekip 1 inchlik oled ekranda gösteren bir sistem. 

![btc1](/images/btc1.jpg)



Bu proje ESP8266 modülleri kullanarak gerçekleştirildi. Bildiğiniz üzere minik bir wifi modulü. Bitcoin idnizi girerek yazdığım kodu derlerseniz direk olarak bilgilerinize ulaşabilirsiniz. ESP8266 minik bir oled ekranı kontrol ederek aldığı anlık kur datasını, kullanıcının toplam bitcoinini ve dolar karşılığını gösterecek şekilde bir program geliştirildi. ESP8266 olarak wemos d1 mini modullerinden kullandım. I2C pinlerini Oled ekrana den gelecek şekilde bir pertinanks oluşturdum uygun pinleri de lehimleyerek shield haline getirmiş oldum.  Yukarıdaki fotoğrafta ESP8266 tamamen shieldın altına gizlenmiş halde bu sayede sistem baya toplanmış oldu tek parça bir görüntü kazandı.

<!-- more -->

{% youtube s9yCTyRUi5U %}


#### Kod
Kodu [buradan](https://github.com/mozanunal/NiceHashDashBoard) inceleyebilirsiniz. 

#### Wifi bağlanma ve ekran ayarları

Wifi multi kullandığım için birden fazla wifi girebilirsiniz. Hangisi çevrede varsa onu kullanarak internete çıkar. Ekranın boyutu çok küçük olmasına rağmen çözünürlüğü böyle bir sisteme göre oldukça yüksek bu sayede baya hoş gözüküyor. 
```cpp
    //Setup Oled
    display.init();
    display.flipScreenVertically();
    display.setFont(ArialMT_Plain_16);
    display.setTextAlignment(TEXT_ALIGN_LEFT);
    display.clear();
    
    //Setup Wifi
    WiFiMulti.addAP( ssid_1 , pass_1);
    WiFiMulti.addAP( ssid_2 , pass_2);
    display.clear();
    display.drawString(0 , 20, "Waiting for wifi...");
    display.display();
    int xpos = 0;
    while(WiFiMulti.run() != WL_CONNECTED) {
        display.drawString(xpos ,40 , ".");
        xpos= xpos + 3;
        display.display();
        delay(500);
    }
```

#### Gerekli verilerin internetten çekilmesi

Data alma kısmında buradaki Nice Hash api dökumanından yararlandım. Bitcoin id ile http request yapıldığında geriye bir json dönüyor. Json Arduinojson library ile parçalanıp içinden gerekli bilgi çekiliyor. Verilen urlden datayı string almak için aşağıdaki fonksiyonu yazdım.

```cpp
String getJsonFromUrl(char *url)
{
    HTTPClient http;  //Declare an object of class HTTPClient
    String payload;
    http.begin(url);  //Specify request destination
    int httpCode = http.GET(); //Send the request
    Serial.print("\n Received http code ");
    Serial.println(httpCode);     
    if (httpCode > 0) //Check the returning code
    { 
      Serial.println("HTTP OK");
      payload = http.getString();   //Get the request response payload
      Serial.println(payload);      //Print the response payloa
      return payload;
    }
    else
    {
      Serial.println("HTTP ERROR");
      return "{}";
    }
    http.end();   //Close connection
}
```

##### Kur bilgisinin alınması

Yukarıdaki data alma fonksiyonu kullanılarak data string olarak çekilip json'a dönüştürülüyor. Daha sonrasında kur bilgisi aşağıdaki fonksiyon kullanılarak çekiliyor. Json parçalanıp içindeki "USD" objesinin "last" değikeni çekiliyor. Bizim için güncel bitcoin kuru. 

```cpp
double getCurrency()
{
    JsonObject& root_Currency = jsonBuffer_Currency.parseObject( getJsonFromUrl(url_Currency) );
    if (root_Currency.success()) 
    {
      double currency = root_Currency["USD"]["last"];
      return currency;
    }
    else
    {
      return 0.0;
    }
}
```


##### Kazanılan bitcoin bilgisinin alınması
Kaznılan bitcoin için [NiceHash Api](https://www.nicehash.com/?p=api) kullanılıyor. Bitcoin cüzdanı ID'si ile request yapıldığında oldukça büyük bir obje dönüyor. Aşağıdaki gibi bir parçalama işlemiyle şu ana kadar kazanılan para bitcoin olarak çekiliyor. Bitcoin değeri ile kur çarpılarak dolar karşılığı da hesaplanıyor.

```cpp
double getTotalBTC(const char *BitCoinWallet)
{     
  //Setup URLs
  strcpy( url_Balence, url_Balance_base );
  strcat( url_Balence, BitCoinWallet );
  JsonObject& root_Balance = jsonBuffer_Balance.parseObject( getJsonFromUrl(url_Balence) );
  double total_balance_btc = 0.0;
  if (root_Balance.success()) 
  {
    double balances[8];
    int algos[8];
    for (int i = 0; i<8; i++)
    {
        algos[i] = root_Balance["result"]["stats"][i]["algo"];
        const char* balchar = root_Balance["result"]["stats"][i]["balance"];
        balances[i] = strtod(balchar, NULL);
        Serial.print(balchar);
        Serial.println(balances[i]);
        total_balance_btc += balances[i];
    }
  }

  return total_balance_btc;
}
```


![Bitcoin Dashboard](/images/btc2.jpg)

#### Verilerin ekranda gösterilmesi

Çekilen veriler aşağıdaki fonksiyon yardımıyla ekranda sırasıyla gösteriliyor. Her bir frame 2 saniye ekranda durup sonraki frame geçecek şekilde bir yapı kurdum.

```cpp
void frameLoop(double currency, double totol_balance_btc, double total_balance)
{
  
  //currency
  delay(2000);
  char currency_line[30];
  dtostrf(currency,0, 2, currency_line);
  sprintf(currency_line,"%s %s", currency_line, " $");
  display.clear();
  display.drawString(0 , 0,  "1 BTC:");
  display.drawString(0 , 20, currency_line);
  display.display();


  // total dollar
  delay(2000);
  char total_balance_line[30];
  dtostrf(total_balance,0, 8, total_balance_line); 
  sprintf(total_balance_line,"%s %s", total_balance_line, " $");
  display.clear();
  display.drawString(0 , 0,  "Total:");
  display.drawString(0 , 20, total_balance_line);
  display.display();


  // total btc
  delay(2000);
  char totol_balance_btc_line[30];
  dtostrf(totol_balance_btc,0, 8, totol_balance_btc_line);
  sprintf(totol_balance_btc_line,"%s %s", totol_balance_btc_line, " BTC");
  display.clear();
  display.drawString(0 , 0,  "Total:");
  display.drawString(0 , 20, totol_balance_btc_line);
  display.display();
  
} 
```

*Şimdilik bu proje için yazacaklarım bu kadar. Ayrıntılı bilgi için mesaj atabilirsiniz. Görüşmek üzere.*