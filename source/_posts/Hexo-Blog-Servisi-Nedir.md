title: Hexo Blog Servisi Nedir
author: Mehmet Ozan Ünal
tags:
  - blog
  - hexo.io
  - static site generator
  - hexo
categories:
  -  Coding
date: 2017-07-27 10:48:00
---
Herkese merhabalar,

Beni takip ediyorsanız farketmişsinizdir çok yakın zamanda blogumu baştan sona değiştirdim. Bunu yapmamın sebebi önceden blogger kullanıyordum fakat bir süre sonra bazı özellikleri yetersiz gelmeye başladı. Daha çok özelleştirilebilir ve farklı eklentileri destekleyen bir blog yönetim aracına ihtiyacım olduğuna karar verdim ve araştırmaya koyuldum. Karşıma ilk çıkanlar en popüler olanlardı tabi ki fakat biraz daha ayrıntılı araştırınca hexo.io buldum. Kendisi şu anda kullandığım blog aracı. Temel olarak node.js tabanlı bir statik site generator. İnanılmaz bir eklenti ve tema desteği var. Benim için tercih sebebi yapan neydi diye sorarsanız 2 şeyi sayabilirim: Markdown desteği olması ve github pages üzerinden host edilebilmesi. Markdown yazılarınızı kolayca biçimlendirmenizi sağlayan bir servis. Kolaylığına öyle alıştım ki yazmam gereken herhangi bir yazıda onu arıyorum. Daha sonrasında kategori, yorum olaylarını desteklemesi ve arama motorları için kolayca rss feed, site map oluşturabilmem hoşuma giden diğer özellikler oldu.

![](/images/hexo.png)

Peki özellikleri bunlar fakat nasıl kullabılır bu hexo. Bloggerı kullandıysanız belki başlarda zorluk yaşayabilirsiniz fakat onun kadar hazır bir sistem değil malaesef. Bilgisayarınızda nodejs kurulu olmalı. Nodejs servera gerek yok ama hexo onun üzerine yazılmış ve markdown dosyalarından statik html dosyalar oluşturuyor. Oluşturulmuş dosyaları host etmeniz yeterli bir nodejs servera ihtiyacınız yok.

hexo.io Kullanım Klavuzu

#### Blog oluşturma

```sh
npm install hexo-cli -g
hexo init blog
cd blog
npm install
hexo server
```
Yaralı eklentiler

Admin eklentisi kolayca içerik oluşturmak ve oluşturulmuş içeriği yönetmek için.
```sh
npm install hexo-admin --save
```

Rss eklentisi
```sh
npm install hexo-generator-feed --save
```

Blog içi arama
```sh
npm install hexo-generator-json-content --save
```

Github pages deployer
```sh
npm install hexo-deployer-git --save
```

Site haritası çıkarma, yorum eklentileri, google analytics eklenlentileri de yararli eklentiler arasinda sayilabilir

Blog ayarlarını özelleştirme

Blog ayarları blogun oluşturulduğu klasördeki _config.yml özelleştirilerek yapılıyor. Blog adı, dili, teması, dağıtım ayarları hepsi buradan bir text editor yardımıyla ayarlanıyor.

#### İçerik oluşturma

İçerik Markdown dili kullanılarak oluşturuluyor. Farklı giriş şekillerini de destekliyor. Sadece gerekli javascript yorumlayıcısını kurmak gerek.

**Temanızı seçin ve özelleştirin**

Temanızı değiştirmek için temanın git deposunu blogunuzun klasörünün ‘themes’ klasörüne kopyalayabilirsiniz. Temanın ayarlarını da onun _config.yml üzerinden değiştirebilirsiniz.

**Yorum ayarlarını açma**

Ben yorum için disqus kullanıyorum. Disqus kullanmanın kolay yolu onu destekleyen bir tema bulup onu ayarlamak. Disqus’a kaydolup bir kullanıcı adı alıp sitenizle eşleştirmeniz mümkün bu konuda kolayca bilgi bulabilirsiniz.

**İçeriğinizi dağıtın**

Github hesabınıza gidin ve <username>.github.io şeklinde bir kod deposu oluşturun. _config.yml dosyasını aşağıdaki gibi değiştirin.

```sh
deploy:
  type: git
  repo: https://github.com/username/username.github.io
```
Aşağıdaki kod ile ilkönce içeriği oluşturup sonra github pages üzerinden dağıtabilirsiniz. Bütün kategorileriniz sayfalarınız, yazılarınız statik html dosyaları olarak oluşturulup dağıtılacaktır.

```sh
hexo generate
hexo deploy
```

Github pages kendi linkinizden görüntülemek için aşağıyı takip edebilirsiniz.

[godady - gihub.pages - hexo configure tutorial](https://medium.com/@kswanie21/how-to-set-up-godaddy-domain-with-github-pages-a9300366c7b)

[further info please refer here](https://help.github.com/articles/using-a-custom-domain-with-github-pages/)