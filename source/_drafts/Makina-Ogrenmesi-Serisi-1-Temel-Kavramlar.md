title: 'Makina Öğrenmesi Serisi 1: Temel Kavramlar'
author: Mehmet Ozan Unal
date: 2017-06-27 20:43:17
tags:
---
Herkese Merhabalar,
Bu yazımda yapay zeka çalışmaları ile alakalı giriş seviyesinde araştırmalarımdan edindiğim bilgileri paylaşmak istiyorum. Bu konu hakkında yazılarıma devam etmeyi de düşünüyorum. En son güzel bir uygulama yapabilecek noktaya getirip bu yazı dizisini sonlandıracağım.

Makine  Öğrenmesi

Bilgisayar bilimi ve yapay zeka (AI) alt alanlarından olan makine öğrenmesi,  öğrenebilir ve verilere dayalı tahminler üreten sistemlerin tasarımına odaklanır. Makine öğrenimi, bilgisayarların belli bir görevi yerine getirecek şekilde programlanmış olmaktan ziyade, veri tabanlı kararlar almasını ve hareket etmesini sağlar. Makine Öğrenme programları, yeni veriler ile öğrenmek ve gelişmek için tasarlanmıştır. Makine öğrenmesi, sürücüsüz arabalar, bilgisayarla görme ve konuşma tanıma sistemleri gibi uygulamalarla son yıllarda birçok teknolojik ilerlemenin merkezindedir.
Denetimli Öğrenme (Supervised Learning)
Bir programın önceden tanımlanmış bir veri kümesinde "eğitildiği" durumdur. Eğitim verilerini temel alan program, yeni veriler verildiğinde kararlarını geliştirebilir.
Denetimsiz Öğrenme (Unsupervised Learning)
Bir veri kümesi verilen bir program, o veri kümesindeki kalıpları ve ilişkileri otomatik olarak bulabilir. Sahip olduğu verileri kullanarak 
Sınıflandırma (Classification)
Sınıflandırma, bir çeşit girdi alma ve ona bir etiket atama sürecidir. Sınıflandırma sistemleri, genellikle, tahminler ayrı veya "evet veya hayır" nitelikte olduğunda kullanılır. Örnek: Birinin resmini bir erkek veya kadın sınıflandırmasına eşleme.
Regresyon (Regression)
Tahmini değer, sürekli bir spektrumda bir yere düştüğü için "evet veya hayır" etiketinden farklı olduğunda, denetlenen öğrenmenin bir başka alt kategorisi de kullanılır. Regresyon sistemleri, örneğin, "Ne kadar?" Veya "Kaç tane?" Sorusunu cevaplamak için kullanılabilir.
Karar Ağaçları (Decision Trees)
Karar ağacı, ağaç benzeri bir grafik veya karar modeli ve olası sonuçlarını kullanan bir karar destek aracıdır. Basitçe, karar ağacı bir algoritmayı görsel olarak göstermenin bir yoludur.
Deep Learning
Son zamanların çok popüler alanlarından biri olan "Deep learning" genellikle yapay sinir ağları kullanarak model oluşturur. 
http://www.derinogrenme.com/2015/07/21/derin-ogrenme-deep-learning-nedir/
Yapay Sinir Ağları (Artificial Neural Networks)
Biyolojik sinir ağlarından esinlenen yapay sinir ağları, bir model oluşturan birbirine bağlı düğümlerin bir ağıdır. Bunlar, çok sayıda girdiye dayanan fonksiyonları tahmin etmek veya yaklaşık fonksiyonlar için kullanılan istatistiksel öğrenme modelleri olarak tanımlanabilirler. Sinir ağları, genellikle standart makine öğrenme yaklaşımları için girdi hacmi çok yüksek olduğunda kullanılır.
Generative Model
In probability and statistics, a Generative Model is a model used to generate data values when some parameters are hidden. Generative models are used in Machine Learning for either modeling data directly or as an intermediate step to forming a conditional probability density function. In other terms you model p(x,y) in order to make predictions (which can be converted to p(x|y) by applying the Bayes rule) as well as to be able to generate likely (x,y) pairs, which is widely used in Unsupervised Learning. Examples of Generative Models include Naive Bayes, Latent Dirichlet Allocation and Gaussian Mixture Model.
Discriminative Model
Discriminative Models or conditional models, are a class of models used in Machine Learning to model the dependence of a variable y on a variable x. As these models try to calculate conditional probabilities, i.e. p(y|x) they are often used in Supervised Learning. Examples include Logistic Regression, SVMs and Neural Networks.
Classification
Identifying to which category an object belongs to.
Applications: Spam detection, Image recognition.
Algorithms: SVM, nearest neighbors, random forest, ... Examples
Regression
Predicting a continuous-valued attribute associated with an object.
Applications: Drug response, Stock prices.
Algorithms: SVR, ridge regression, Lasso, ... Examples
Clustering
Automatic grouping of similar objects into sets.
Applications: Customer segmentation, Grouping experiment outcomes
Algorithms: k-Means, spectral clustering, mean-shift, ... Examples
Dimensionality reduction
Reducing the number of random variables to consider.
Applications: Visualization, Increased efficiency
Algorithms: PCA, feature selection, non-negative matrix factorization. Examples
Model selection
Comparing, validating and choosing parameters and models.
Goal: Improved accuracy via parameter tuning
Modules: grid search, cross validation, metrics. Examples
Preprocessing
Feature extraction and normalization.
Application: Transforming input data such as text for use with machine learning algorithms.
Modules: preprocessing, feature extraction.
Examples

https://www.youtube.com/watch?v=xx310zM3tLs
http://neuralnetworksanddeeplearning.com/