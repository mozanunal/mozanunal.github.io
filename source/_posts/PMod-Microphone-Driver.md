title: PMod Microphone Driver
author: Mehmet Ozan Ünal
tags:
  - Pmod
  - xilinx
  - xillinx vivado
  - zynq
  - pmod mic
  - Microphone verilog
categories:
  - Elektronik
  - FPGA
date: 2017-07-20 23:14:00
---
**Hi** 

In this post, the Pmod microphone driver which is written in Verilog for Zynq boards is discussed. The driver is developed for Digilent Design Competition 2017. We have a project which microphone array is used. Therefore we have to get data from Pmod Mic also 5 of them should work synchronously. The microphone is sampled with an external ADC and this ADC is using basic SPI for communication. This module should be added to main FPGA code and you should make the connections required. clk/16 sample rate is succeeded for the microphone.  clk input frequency should select according to required sampling rate for the microphone. SS can be used as out enable also.  You can ask any question directly to me if you have a problem with the driver. See you...


![pmod mic](/images/pasted-0.png)

``` verilog
`timescale 1ns / 1ps

//ADCS747x 1-MSPS, 12-Bit, 10-Bit, and 8-Bit A/D Converters

module pmodMic3(
    input clk,
    input miso,
    output sck,
    output reg ss,
    output reg [15:0] out
    );
    
reg [31:0] clkCounter;
reg [15:0] outBuffer;
assign sck = clk;
initial clkCounter = 0;
initial ss = 0;


always @(posedge clk)
   begin
        if (clkCounter < 16)
            begin
                outBuffer[15-clkCounter] <= miso;
                 clkCounter = clkCounter + 32'd1;
            end
        else if (clkCounter == 16)
            begin
                out <= outBuffer;
                clkCounter = clkCounter + 32'd1;
            end
         else if (clkCounter == 17)
            begin
                clkCounter = 32'd0;
            end

    end
        
always @(negedge clk)
    begin
        if (clkCounter == 16)
          begin
            ss <= 1'b1;
          end
        else if (clkCounter == 0)
          begin
            ss <= 1'b0;
          end
    end 
    

 
endmodule
```



[Download from here](https://github.com/mozanunal/PmodMIC3_Driver)