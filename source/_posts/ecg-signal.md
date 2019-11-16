title: |
  Digital Filtering of a ECG Signal
tags:
  - 2 Eksenli Servo Gimbal
  - Arduino Gimbal
  - Electronics
  - Arduino
categories:
  - Signal Processing
  - DSP
author: Mehmet Ozan Ünal
date: 2019-11-17 02:36:00
---


   Electrocardiography (ECG) is the measurement of the bioelectrical activity during the contraction and relaxation stages of the atria and ventricles of the heart, the stimulation of the heart and the conduction of the stimulus. ECG signal has some specific waves which corresponds to particular conditions.

![](/images/ekg15.jpg)

Properties of each wave :

*   The P-wave is produced by depolarization of atrial muscle of the heart.
*   The QRS complex is produced by ventricular depolarization. Its shape, amplitude, and direction depend on the position of the heart in the chest its size relative to body mass, and the time relationship between right and left ventricular activity. An abnormal lengthening of the duration of the QRS complex suggests interference with the spread of excitation through ventricular muscle, as may occur in Purkinje failure or myocardial infarction.

*   The T-wave is produced by ventricular repolarization.
*   The P-R interval is measured from the beginning of the P wave to the beginning of the QRS complex, it represents the interval between the activation of the SA node and  the AV node. The normal P-R interval is about 0.16 second. An abnormal lengthening of the P-R interval suggests interference with conduction to the ventricles.

*   The S-T segment represents the interval between the end of the S wave and the beginning of the T wave. Normally, it indicates an isoelectric state. Its position and shape are important in the diagnosis of abnormalities of ventricular repolarization.

*   The Q-T interval is measured from the beginning of the QRS complex to the end of the T wave. It represents the time of electrical systole when the ventricular beat is generated. The normal Q-T interval is about 0.35 second.


   Three probe electrodes were connected as shown. During this process, a 9V battery was used as a source to prevent leakage current through the person to whom the electrodes were connected and the sockets to which the oscilloscopes were connected were checked. In addition, in case of any leakage, the person was allowed to separate his feet from the floor with the help of the plastic chair he was sitting during the experiment and not to be in physical contact with any person. The electrode attached to the right leg is connected to the low-potential end (ground) of the battery as shown in the figure above. The remaining two electrode terminals were connected to the negative and positive input terminals on pins 2 and 3 of the INA118.

![](/images/ekg14.jpg)

Figure 12. Scope image of  output signal of the ECG circuit.

   The output of the circuit sampled using a digital oscilloscope and then it is exported as csv file. File consists 8000 samples for 2 seconds time window which means 4 kHz sampling frequency. The raw oscilloscope output can be examined from next figure.

![](/images/ekg20.png)

Figure 13. Raw EKG Data

   First, the frequency domain components of the ekg data is examined. FFT transform is applied to data and its frequency components are plotted in the next figure. Since the nyquist theorem says that maximum frequency can be measured is the half of the sampling frequency, max frequency component is 2 kHz.

![](/images/ekg4.png)

Figure 14. 0 - 2 kHz Frequency Spectrum

   In the next figure, the plot is zoomed to  frequency components between 0 - 200 hz. As you can see from the plot, There is big noise component at 50 Hz frequency because of mains electricity. It should be filtered for cleaner ecg signal.

![](/images/ekg6.png)

Figure 15. 0 - 200 Hz Frequency Spectrum

  A digital IIR filter is designed to filter out 50 Hz frequency component. It is a Chebsyhev Type 2 filter with 16 filter coefficients. It provides -60 dB gain between 47 - 53 Hz.

![](/images/ekg3.png)

Figure 16. 50 Hz Band Stop Filter

  After the filtering, the frequency domain components are examined again. The noise component at 50 Hz is removed from the signal.

![](/images/ekg16.png)

Figure 17. Frequency Domain Result

  Time domain result of the filter can be examined on the next figure. As you can see from this figure, the components of the ecg is cleaner.

![](/images/ekg11.png)

Figure 18. Time Domain Result

   The next filter is designed to remove high frequency noise from the signal. For this purpose, a 0-200 Hz low pass filter is designed.

![](/images/ekg7.png)

Figure 19. 0 -100 Hz Low Pass Filter

![](/images/ekg8.png)

Figure 20. Time Domain Result

   Finally, A simple moving average filter is applied to signal. The next figure is the final result of our ecg project. After the filtering operations, most of the ecg components are cleaner and now it is easier to extract ecg components from the signal.

![](/images/ekg12.png)

Figure 21.. 100 Point Simple Moving Average Filtered Signal