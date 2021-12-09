title: '[TR] SimpleCV ile Görüntü İşlemeye Giriş'
tags:
  - Image Processing
  - SimpleCV
categories:
  - Signal Processing
  - Image Processing
author: Mehmet Ozan Ünal
date: 2016-05-01 20:23:00
---
**Herkese Merhabalar,**  
Görüntü işleme hızla popülerleşen ve gittikçe daha fazla üzerine projeler geliştirilen ve hatta hayatımızda kullandığımız araç gereçlerde kullanılan bir alan olmaya başladı. Bu durumda bir sürü insan bu konu üzerine bir şeyler yapmak istiyor fakat daha kurulum aşamasında veya kaynak yetersizliğinden dolayı bu ilgilerinden vazgeçiyorlar. Bu sorun için önerebileceğim bir çözüm var. SimpleCV!  

[https://simplecv.org/download/](https://simplecv.org/download/)  

![](https://2.bp.blogspot.com/-A3EQ_sYxKKk/VxNvyqTmt-I/AAAAAAAAZq4/piY02JIgXGUKU1iHwuqo3Kgev-zUjXvFACK4B/s640/Capture.PNG)

SimpleCV görüntü işlemeyle alakalı paketlerin bir arada toplandığı bir python paketler bütünüdür. yukarıdaki linkten kurulum dosyasını indirip sadece bir kaç tık ile kurabilirsiniz.  
SimpleCV ile yüklediğimiz paketler ise şöyle:

![](https://4.bp.blogspot.com/-RzFG56nj0Bw/VyX8xjlS35I/AAAAAAAAZwY/o1BjczDB6IQlTLjJkDZf6By0s515sV64gCK4B/s640/Capture.PNG)

Görüldüğü gibi Python'un bile yüklü olmasına gerek yok ihtiyacımız olan tüm paketler bir kaç tık ile yükleniyor. Aşağıda basit bir SimpleCV kodu bulunmakta aynı zamanda aşağıdaki linklerden dökümantasyona ve örneklere bakabilirsiniz.  
[https://simplecv.readthedocs.io/en/latest/](https://simplecv.readthedocs.io/en/latest/)  
[https://examples.simplecv.org/en/latest/](https://examples.simplecv.org/en/latest/)  

SimpleCV fonksiyonları ve kullanımları:

```python
#Reading an image
Image(’lenna.png’)

#Converting the image to RGB colorspace
img.toRGB()

#Converting the image to BGR colorspace
img.toBGR()

#Converting the image to HLS colorspace
img.toHLS()

#Converting the image to HSV colorspace
img.toHSV()

#Converting the image to XYZ colorspace
img.toXYZ()

#Converting the image to GRAY colorspace
img.toGray()

#Create a new, empty OpenCV bitmap
img.getEmpty(channels)

#Full copy of the  image
img.copy()

#Resize the image
img.resize(x,y)

#Invert image
img.invert()

#Horizontally mirror an image
img.flipHorizontal()

#Vertically mirror an image
img.flipVertical()

#Stretch  filter  on a greyscale image
img.stretch(thresh low, thresh high)

#Binary threshold
img.binarize(thresh, maxv, blocksize, p)

#Mean color of the  image
img.meanColor()

#Finds the FeatureSet strongest corners first
img.findCorners(maxnum, minquality, mindistance)

#Blobs are continuous light regions
img.findBlobs(threshval, minsize, maxsize, threshblocksize, threshconstant)

#Finding the location of a known object
findHaarFeatures(self,  cascade, scale factor, min neighbors, use canny)

#Uploading the Image to Imgur or Flickr
img.upload(dest,api key, api secret,verbose)

#Smooth the image
img.smooth(algorithm name, aperature, sigma, spatial sigma, grayscale)

#Draw a circle on the Image
img.drawCircle(ctr, rad, color, thickness)

#Draw a line
img.drawLine(pt1, pt2, color, thickness)

#Size of image
img.size()

#Split the image into a series of image chunks
img.split(cols, rows)

#Images of R,G,B channels are recombined into a single image
img.mergeChannels(r,b,g)

#Apply a color correction curve in HSL space
img.applyHLSCurve(hCurve, lCurve, sCurve)

#Apply a color correction curve in RGB space
img.applyRGBCurve(rCurve, gCurve, bCurve)

#Applies Intensity to all three color channels
img.applyIntensityCurve(curve)

#Returns Image of the string
img.toString()

#Split the channels of an image into RGB
img.splitChannels(grayscale)

#Returns image representing the distance of each pixel from a given color tuple
img.colorDistance(color)

#Apply morphological erosion to a image
img.erode(iterations)

#Apply morphological dilation to a image
img.dilate(iterations)

#Histogram equalization on the image
img.equalize()

#Applies erosion operation followed by a morphological dilation
img.morphOpen()

#The difference between the morphological dilation and
img.morphGradient()

#the morphological gradient 1D 
#histogram(numpy array) of intensity for pixels in the image
img.histogram(numbins)

#The histogram of the hue channel for the image
img.hueHistogram(bins)

#Returns the peak hue values histogram of hues
img.huePeaks(bins)

#Add two images
img.add(other)

#Subtract two images Or two images
img.sub(other) img.  or  (other)

#Image division operation taking two images as input
img.div(other)

#Raises every array element in image array to a power
img.pow(other)

#Finds 2d and 1d barcodes in the image
img.findBarcode(zxing path)

#Finds line segments in the image
img.findLines(threshold,  minlinelength,maxlinegap, cannyth1, cannyth2)


#Finds a chessboard within that image
img.findChessboard(dimensions,  subpixel)

#Canny edge detection method
img.edges(t1, t2)

#function rotates an image around a specific point
img.rotate(angle, fixed, point, scale)


#return a shear-ed image from the cornerpoints
img.shear(cornerpoints)

#Function for warp performs an affine rotation
img.transformPerspective(rotMatrix)

#Returns the RGB value for a particular image pixel
img.getPixel(x, y)

#Returns a single row of RGB values from the  image
img.getHorzScanline(row)

#Returns a single column of gray values from the  image
getVertScanlineGray(column)

#Returns a single row of gray values from the  image
getHorzScanlineGray(row)

#Crops the image based on parameters
img.crop(x , y, w, h, centered)

#Returns the selected region.
img.regionSelect(x1, y1, x2, y2  )

#Clears out the entire image
img.clear()

#Draws the string on the image at the specified coordinates.
img.drawText(text , x , y , color, fontsize)

#Draw a rectangle on the image
img.drawRectangle(x,y,w,h,color,width,alpha)

#Shows the current image
img.show(type)

#Push a new drawing layer onto the back of the layer stack
img.addDrawingLayer(layer)

#Insert a new layer into the layer stack at the specified index

img.insertDrawingLayer(layer,  index)
Remove a layer from the layer stack based on the layer’s index
img.removeDrawingLayer(index)

#Return a drawing layer based on the index
img.getDrawingLayer(index)

#Returns the gray value for a particular image pixel
img.getGrayPixel( x, y)

#Returns a single column of RGB values from the  image
img.getVertScanline(column)

#Remove all of the drawing layers
img.clearLayers()

#Return the array of DrawingLayer objects
img.layers()

#Return all DrawingLayer objects as a single DrawingLayer.
img.mergedLayers()

#Render all of the layers onto the current image
img.applyLayers(indicies)

#automatically adjust image size to match the display size
img.adaptiveScale(resolution,fit=True)

#Combine two images as a side by side images
img1.sideBySide(img2, side, scale)

#Generate a binary mask of the image based on a range of rgb values
createBinaryMask(self,color1,color2)

#Make the canvas larger but keep the image the same size
img.embiggen(size, color, pos)

#The white areas of the mask will be kept and the black areas removed
img.applyBinaryMask(mask,bg  color)

#Generate a grayscale or binary mask image based either on a hue or an RGB triplet
img.createAlphaMask(hue, hue lb,hue ub)

#Apply a function to every pixel and return the  result
img.applyPixelFunction(theFunc)

#Calculate the integral image and return it as a numpy  array
img.integralImage(tilted)

#Convolution performs a shape change on an image.
img.convolve(,kernel,center)

#Function searches an image for a template image
img.findTemplate(template image, threshold, method)

#Return any text it can find using OCR on the image
img.readText()

#extract perfect circles from the image
img.findCircle(canny,thresh,distance)

#Attempts to perform automatic white balancing
img.whiteBalance(method)

#Apply a LUT (look up table) to the pixels in a image
img.applyLUT(rLUT,bLUT,gLUT)

#Finds keypoints in an image and returns them as the raw keypoints
img. getRawKeypoints(thresh,flavor, highQuality, forceReset)

#Method does a fast local approximate nearest neighbors (FLANN) calculation between two sets of feature vectors
img. getFLANNMatches(sd,td

#Calculates keypoints for both images, determines the keypoint correspondences
img.drawKeypointMatches(template, thresh, minDist,width)

#Match a template image with another image using SURF keypoints.
img.findKeypointMatch(template, quality,minDist,minMatch)

#This method finds keypoints in an image and returns them as a feature  set
img.findKeypoints(min quality, flavor,highQuality)

#Returns the colors in the palette of the image
img.getPalette(bins,hue)

#Takes in the palette from another image and attempts to apply it to this image
img.rePalette(palette,hue)

#returns the visual representation (swatches) of the palette in an image
img.drawPaletteColors(size,horizontal,bins,hue)

#The method then goes through and replaces each pixel with the centroid of the clutsters found by k-means
img.palettize(bins,hue)

#Palettization and behaves similar to the fndBlobs
img.findBlobsFromPalette(palette selection, minsize, maxsize)

#Method uses the color palette to generate a binary image
img.binarizeFromPalette(palette selection)

#Returns the RAW DFT transform of an image
img.rawDFTImage(grayscale)

#Method applies a simple band pass DFT filter
img.bandPassFilter(xCutoffLow, xCutoffHigh, yCutoffLow, yCutoffHigh,grayscale)

#Skeletonization of the image smartThreshold uses a method
img.skeletonize(radius)

#graph cut, to automagically generate a grayscale mask image
img.smartThreshold(mask, rect)

#It takes a image converts it to grayscale, and applies a threshold
img.smartFindBlobs(mask,rect,thresh level)

#This method is same as Paint bucket tool in image manipulation program
img.floodFill(points,tolerance,color,lower,upper,fixed range)

#Returns Image where the values similar to the seed pixel have been replaced by the input color
img.floodFillToMask(points,tolerance,color,lower,upper,fixed  range,mask)

#A featureset of blobs form the Mask Image
img.findBlobsFromMask(mask,threshold, minsize, maxsize )

#Returns the log value of the magnitude image of the DFT transform
img.getDFTLogMagnitude(grayscale)

#Apply an arbitrary filter to the DFT of an image
img.applyDFTFilter(flt,grayscale)

#Applies a high pass DFT filter
img.highPassFilter(xCutoff,yCutoff,grayscale)

#Applies a low pass DFT  filter
img.lowPassFilter(xCutoff,yCutoff,grayscale)

#InverseDFT(raw dft image) DFT is applied on image using gaussian lowpass filter
img.applyUnsharpMask(boost,dia,grayscale)

#Performs an optical flow calculation and attempts to find motion between two subsequent frames
img.findMotion(previous frame, window, method, aggregate)

#Creates a butterworth filter of 64x64 pixels, resizes it to fit the image
img.applyButterworthFilter(dia, order,highpass,grayscale)

#Creates a gaussian filter of 64x64 pixels, resizes it to fit image
img.applyGaussianFilter(dia, highpass, grayscale)

```