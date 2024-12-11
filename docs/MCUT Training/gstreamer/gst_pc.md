---
sidebar_position: 3
title: 3-3 Developing GStreamer Plugins on PC
---

# Developing the `gst-plugins-bad-dev` Project on PC
GStreamer is a pipeline-based multimedia framework that connects various media processing systems to handle complex workflows.

GStreamer is a powerful and versatile tool for creating streaming media applications, but writing new plugins can be challenging.

---

## Install OpenCV
To build the gst-plugins-bad-dev-project, install OpenCV by using the command below:
```bash
sudo apt install libopencv-dev python3-opencv
```

---

## Install Moil Dev Library
Follow the instructions on the Github repository and install it on the x86_64 platform:

https://github.com/yourskc/moildev_install

---

## Install GStreamer
Install GStreamer by using the link below:
https://gstreamer.freedesktop.org/documentation/installing/index.html?gi-language=c

To install GStreamer on Ubuntu 22.04, use the command below:
```bash
sudo apt install libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio
```