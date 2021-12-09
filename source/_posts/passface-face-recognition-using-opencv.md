title: 'PassFace: Face Recognition Using OpenCV'
tags:
  - Image Processing
  - EmguCV
  - opencv
  - Eigenfaces
  - Face recognition
  - Fisgerfaces
categories:
  - Signal Processing
  - Image Processing
author: Mehmet Ozan Ünal
date: 2016-06-04 19:50:00
---
**Hi,**  
PassFace is a face recognizing program develop using EmguCV (OpenCV wrapper). It is possible to use 4 different algorithm and 3 different source(Camera, Video, Image) in this program. Most of the tryings have been made using LFW data set which have 13000 pictures of 1500 different people.Details of project can be reached below:

Source Code: [https://github.com/mozanunal/PassFace](https://github.com/mozanunal/PassFace)

{% youtube d6LI42NEZZY? %}

#### 1. Introduction

##### Definition of the Problem
In this project, a program is going to develop to recognize the faces and compare them the faces it learned and give the identity of the person. All this identifying system is going to work in real time. Main subjects in this project are image processing and machine learning. Project aim to develop some algorithm to detect faces specifically recognize the faces using pattern recognition algorithms. The number of faces and the equipment needed is going to be determined according to test of different algorithms.


##### Motivation
To detect identity of person from images is very beneficial subject. It can provide easy access to users. It can be used for detect criminals and prevent potential crimes. Also I see this subject in a lot of industrial projects and academic researches. I want to work with real world problem and problem which is not completely solved. Therefore I decided to work with this project.  

##### Difficulties of Problem

Main difficulties can be sorted like below:

*  Faces are not completely rigid objects so it is hard to recognize them.
*  The more person in database needs more and more processing power.
* Blurry images because of real time system
* The effects of ambient light
* Changes in person’s face over time

##### Data Sets

[AT&T Facedatabase](https://www.cl.cam.ac.uk/research/dtg/attarchive/facedatabase.html)

The AT&T Face Database, sometimes also referred to as ORL Database of Faces, contains ten different images of each of 40 distinct subjects. For some subjects, the images were taken at different times, varying the lighting, facial expressions (open / closed eyes, smiling / not smiling) and facial details (glasses / no glasses). All the images were taken against a dark homogeneous background with the subjects in an upright, frontal position (with tolerance for some side movement).
  

[Yale Facedatabase A](https://vision.ucsd.edu/content/yale-face-database)

also known as Yalefaces. The AT&T Face Database is good for initial tests, but it’s a fairly easy database. The Eigenfaces method already has a 97% recognition rate on it, so you won’t see any great improvements with other algorithms. The Yale Face Database A (also known as Yalefaces) is a more appropriate dataset for initial experiments, because the recognition problem is harder. The database consists of 15 people (14 male, 1 female) each with 11 grayscale images sized 320x243 [](https://lh3.googleusercontent.com/uNq7mPqspjvR267h-aZA2FS666Fl8Q8dXGhlg-Lzi7MJiNn5DkSyioK59Wj6pdA9h96bojY8L02LR-NIXIeuf0IjN-a6MYN7ufWHMOPqVbxd0hvoGcKsy0oR9jo5t85MGbfqOB9H)pixel. There are changes in the light conditions (center light, left light, right light), facial expressions (happy, normal, sad, sleepy, surprised, wink) and glasses (glasses, no-glasses).

[Labeled Faces in the Wild]()

A database of face photographs designed for studying the problem of unconstrained face recognition. The data set contains more than 13,000 images of faces collected from the web. Each face has been labeled with the name of the person pictured. 1680 of the people pictured have two or more distinct photos in the data set. The only constraint on these faces is that they were detected by the Viola-Jones face detector..  

##### Programming Environment and Libraries

Visual Studio IDE is used for project. The program is written in C# using OpenCV libraries.

#### 2. Face Recognition Algorithm

##### Face Detection

Face Detection is not the main subject of this project but to create database and to increase the face recognition performance. Opencv’s Haar Cascade Classifier function is used. In this function a haar cascade file ,which is pre learned for face detection, is used.

##### Morphologic Operations

Ambient light and the movement at faces are the challenging problems in face recognition. Therefore some morphologic operators is applied to the faces to decrease the effect of these problems. In this project equalize histogram function of opencv is used to decrease the effect of the ambient light.![](https://lh6.googleusercontent.com/3PMQmXghZyoi4dGekFhBS-QWqZDYEJpQ2o_yLXJgMEo3goTr6OqtrOSPYjtwgApKjKoAzXhFLE57R3TRDw8SWrXsod9PUCiHJXNndjoZ-Ui3P1xb0atKy0EvobLyy9cfVifzA0yT)

##### SURF Feature Extractor

![](https://lh5.googleusercontent.com/eRt6xx3RU22fZ22_-TGdan22lp2x7JiNA9De7PuYa2xLVcZIcg4hVJzvrXyzdNbocv4NuBW8QOHYYTr0NNowPys7QOScefuBrgEeoiILasaQm2v0S0P8NPxVYSiPBRoPotTP3h0p)

```csharp
if (comboBoxAlgorithm.Text == “SURF Feature Extractor”)
{
string dataDirectory=Directory.GetCurrentDirectory()+”\TrainedFaces”;
string[] files = Directory.GetFiles(dataDirectory, “*.jpeg”, SearchOption.AllDirectories);

foreach (var file in files)
{
   richTextBox1.Text += file.ToString();
   long recpoints;
   ImagesampleImage = new Image(file);
   secondImageBox.Image = sampleImage;
   using (Image modelImage = sampleImage.Convert())
   using (Image observedImage = image.Convert())
   {
       Image result = SurfRecognizer.Draw(modelImage, observedImage, out recpoints);
       //captureImageBox.Image = observedImage;
       if (recpoints > 10)
       {
           MCvFont f = new MCvFont(Emgu.CV.CvEnum.FONT.CV_FONT_HERSHEY_COMPLEX, 1.0, 1.0);
           result.Draw(“Person Recognited, Welcome”, ref f, new Point(40, 40), new Bgr(0, 255, 0));
           ImageViewer.Show(result, String.Format(“ {0} Points Recognited”, recpoints));
       }
   }
}
```

##### Eigenfaces

```csharp
else if (comboBoxAlgorithm.Text == "EigenFaces")
{
   //image._EqualizeHist();
   if (eqHisChecked.Checked == true)
   {
       image._EqualizeHist();
   }
   var result = eigenFaceRecognizer.Predict(image.Convert().Resize(100, 100, Emgu.CV.CvEnum.INTER.CV_INTER_CUBIC));
   if (result.Label != -1)
   {
       image.Draw(eigenlabels[result.Label].ToString(), ref font, new Point(face.X - 2, face.Y - 2), new Bgr(Color.LightGreen));
       label6.Text = result.Distance.ToString();
   }
}
```

##### Fisherfaces

```csharp

else if (comboBoxAlgorithm.Text == "FisherFaces")
{
   if (eqHisChecked.Checked == true)
   {
       image._EqualizeHist();
   }
   var result = fisherFaceRecognizer.Predict(image.Convert().Resize(100, 100, Emgu.CV.CvEnum.INTER.CV_INTER_CUBIC));
   if (result.Label != -1)
   {
       image.Draw(fisherlabels[result.Label].ToString(), ref font, new Point(face.X - 2, face.Y - 2), new Bgr(Color.LightGreen));
       label6.Text = result.Distance.ToString();
   }


}
```

##### Local Binary Patterns Histograms

```csharp
else if (comboBoxAlgorithm.Text == "LBPHFaces")
{
   if (eqHisChecked.Checked == true)
   {
       image._EqualizeHist();
   }
   var result = lbphFaceRecognizer.Predict(image.Convert().Resize(100, 100, Emgu.CV.CvEnum.INTER.CV_INTER_CUBIC));
   if (result.Label != -1)
   {
       image.Draw(lbphlabels[result.Label].ToString(), ref font, new Point(face.X - 2, face.Y - 2), new Bgr(Color.LightGreen));
       label6.Text = result.Distance.ToString();
   }
}
```

#### 3. PassFace Interface

##### Database Creator

A database creator is developed to make easier to implement and try different algorithm.

```csharp
Add DataBase Function


private void addDatabaseButton_Click(object sender, EventArgs e)
{
   //Take time for save filename
   string fileName = textBox1.Text+"_"+DateTime.Now.Day.ToString() + "-" + DateTime.Now.Month.ToString() + "-" + DateTime.Now.Year.ToString()
   + "-" + DateTime.Now.Hour.ToString() + "-" + DateTime.Now.Minute.ToString()+"-" + DateTime.Now.Second.ToString()+".jpeg";

   //First The faces in the Image is detected
   Image image = _capture.RetrieveBgrFrame().Resize(400, 300, Emgu.CV.CvEnum.INTER.CV_INTER_CUBIC);
   List faces = new List();
   List eyes = new List();
   long detectionTime;
   DetectFace.Detect(image, "haarcascade_frontalface_default.xml", "haarcascade_eye.xml", faces, eyes, out detectionTime);
   foreach (Rectangle face in faces)
   {
       image.ROI = face;
   }
   Directory.CreateDirectory("TrainedFaces");
   image.Resize(100, 100, Emgu.CV.CvEnum.INTER.CV_INTER_CUBIC).ToBitmap().Save("TrainedFaces\\" + fileName);
}


private void comboBoxAlgorithm_SelectedIndexChanged(object sender, EventArgs e)
{
   if (comboBoxAlgorithm.Text == "EigenFaces")
   {
       try
       {
         string dataDirectory = Directory.GetCurrentDirectory() + "\\TrainedFaces";
         string[] files = Directory.GetFiles(dataDirectory, "*.jpeg", SearchOption.AllDirectories);
         eigenTrainedImageCounter = 0;
         foreach (var file in files)
         {
               Image TrainedImage=new Image(file);
               if (eqHisChecked.Checked == true)
               {
                   TrainedImage._EqualizeHist();
               }
               eigenTrainingImages.Add(TrainedImage.Convert());
               eigenlabels.Add(fileName(file));
               eigenIntlabels.Add(eigenTrainedImageCounter);
               eigenTrainedImageCounter++;
               richTextBox1.Text += fileName(file)+"\n";
         }
          eigenFaceRecognizer= new EigenFaceRecognizer(eigenTrainedImageCounter, 3000);
          eigenFaceRecognizer.Train(eigenTrainingImages.ToArray(), eigenIntlabels.ToArray());
            
       }
       catch (Exception ex)
       {
           MessageBox.Show(ex.ToString());
           MessageBox.Show("Nothing in binary database, please add at least a face(Simply train the prototype with the Add Face Button).", "Triained faces load", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
       }
   }
   else if (comboBoxAlgorithm.Text == "FisherFaces")
   {
       try
       {
           string dataDirectory = Directory.GetCurrentDirectory() + "\\TrainedFaces";
           string[] files = Directory.GetFiles(dataDirectory, "*.jpeg", SearchOption.AllDirectories);
           fisherTrainedImageCounter = 0;
           foreach (var file in files)
           {
               Image TrainedImage = new Image(file);
               fisherTrainingImages.Add(TrainedImage.Convert());
               if (eqHisChecked.Checked == true)
               {
                   TrainedImage._EqualizeHist();
               }
               fisherlabels.Add(fileName(file));
               fisherIntlabels.Add(fisherTrainedImageCounter);
               fisherTrainedImageCounter++;
               richTextBox1.Text += fileName(file) + "\n";
           }
           fisherFaceRecognizer = new FisherFaceRecognizer(fisherTrainedImageCounter, 3000);
           fisherFaceRecognizer.Train(fisherTrainingImages.ToArray(), fisherIntlabels.ToArray());
       }
       catch (Exception ex)
       {
           MessageBox.Show(ex.ToString());
           MessageBox.Show("Nothing in binary database, please add at least a face(Simply train the prototype with the Add Face Button).", "Triained faces load", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
       }
   }
   else if (comboBoxAlgorithm.Text == "LBPHFaces")
   {
       try
       {
           string dataDirectory = Directory.GetCurrentDirectory() + "\\TrainedFaces";
           string[] files = Directory.GetFiles(dataDirectory, "*.jpeg", SearchOption.AllDirectories);
           lbphTrainedImageCounter = 0;
           foreach (var file in files)
           {
               Image TrainedImage = new Image(file);
               if (eqHisChecked.Checked == true)
               {
                   TrainedImage._EqualizeHist();
               }
               lbphTrainingImages.Add(TrainedImage.Convert());
               lbphlabels.Add(fileName(file));
               lbphIntlabels.Add(lbphTrainedImageCounter);
               lbphTrainedImageCounter++;
               richTextBox1.Text += fileName(file) + "\n";
           }
           lbphFaceRecognizer = new LBPHFaceRecognizer(1, 8, 8, 8, 123.0);
           lbphFaceRecognizer.Train(lbphTrainingImages.ToArray(), lbphIntlabels.ToArray());
       }
       catch (Exception ex)
       {
           MessageBox.Show(ex.ToString());
           MessageBox.Show("Nothing in binary database, please add at least a face(Simply train the prototype with the Add Face Button).", "Triained faces load", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
       }
   }
}

```

![](https://lh4.googleusercontent.com/560MflmHrYy5nUi4gIAQexc-Cdqfyr3GUej_g1wwa0HawxO4A7OFmOkgd0g4oBvy9An1PjiYxSM_8G0G2FS_zC2y3gWisgkr0NTikxv4oyDFL9qM6IpkupdhA7OjnUAb4cuy51Pa)

##### User Interface
As a source camera, video, single image and multi image can be selected. Different source selection is developed using opencv and .net libraries.

![](https://lh5.googleusercontent.com/6y8Sx-7a4PDYcZWv9W_COKJf9EaGKQl-_3vc6q9oo-HzQeC4CJMJoGTceeaUAC4F31mjpGs84Zrkse1viHgwCCKnRvhciz7aEjmmySR16PAD2aOGmOrLWHr6R3hO7GvV0TamI9nS)

#### 4. Future of PassFace Project

##### Algorithm Accuracy Analysis
Program designed for using different algorithms. But the comparison of these algorithms is not finished. The next step is implementing this algorithm the compare the algorithms accuracy and performance truly.
##### Performance Optimizations
For fix the performance problems, develop the program for multiple core CPUs. For better performance, develop the program to run over GPU using CUDA libraries.
##### Algorithm Optimizations
In these days, the most improved face recognition algorithms are using 3D face recognition technologies. It is based on; the 3D model of the faces are created using different 2D images. Therefore, the angle of looking and the direction of light are no longer be problem for these algorithms. The recognize operations are implementing using Neural Networks and Deep Learning Algorithms. It is planning to implement latest algorithms to increase accuracy in different conditions.

#### 5. Conclusion
In this project, the main principles of the face recognition algorithms are learned. The performances and accuracies of the algorithms are compared. A gui application is developed to create database and process images using selected algorithm.
