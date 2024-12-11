---
sidebar_position: 2
title: 3-1 Generating Remap Files
---

# Generating Remap Mapping Files
The aim is to develop a GStreamer filter that transform fisheye image into corrected single-angle or equirectangular images. This transformation requires reading a set of X, Y mapping tables to reposition each point, known as remap maps.

For two sets A and B, the mapping function is 

![Remap Function](../img/remap_function.png)

for every element *b* in *B*, *b = f(a)*, f is the mapping function

For image mapping, it is denoted as
```
g(x,y) = f(h(x,y))
``` 

*remap()* function can be utilized if the platform support **OpenCV**, or else, for GStreamer it can be achieved using image filter element.

---
## Moil Image Generator
The **Moil Image Generator** website offer an online interface that we can get the X,Y map files used on GStreamer command.

First, input the camera settings and any additional parameters. Then, press the "Start" button to begin the generation process. A zip file will be downloaded; click "Keep" when the browser prompts a security warning. Decompress the zip file before use. If you generate maps other than Equirectangular, rename them to EquimatX and EquimatY before using them with the Gstreamer command.

The website URL: http://140.112.12.82/moilmapgen