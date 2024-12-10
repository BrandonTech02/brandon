---
sidebar_position: 2
---

import styles from "../css/styles.module.css";

# Renesas RZ/G2L
<h2 className={styles.heading}>About</h2>
This is an embedded system that has low power consumption. Various products can be developed based on this embedded system.

## Board Setup
To setup this **Renesas RZ/G2L board**, a linux image must be prepared to run on the board.

By following the guide provided below, you can learned about how to boot up, reset, connection of the USB, HDMI and Ethernet.<br></br>
[RZ/G2L EVK - Quick Start Guide](http://140.112.12.82/docu-moil-renesas/assets/files/QuickStartGuide-26b513b9db237fee0615c5b4cf68cab7.pdf)

The packages that needed to be installed are in the following link:<br></br>
[Renesas VLP Packages](https://www.renesas.com/en/products/microcontrollers-microprocessors/rz-mpus/rzg-linux-platform/rzg-marketplace/verified-linux-package/rzg-verified-linux-package)

These packages need to be extract inside the **/work** directory by using the command below.
```bash
tar xzvf rzg.tar.gz
```

The **/rzg** folder is then reopen inside the container that you created in the tutorial before.

Check the user that exist inside the github by using the following code:
```bash
git config --global --list
```
:::tip

If the username and email not exist or incorrect, you can use the following code to modify it:
```bash
git config --global user.name <"your-username">
git config --global user.email <"you@example.com">
```
:::

Next, make a new directory name `yocto` under the **/rzg** directory.
```bash
mkdir yocto
``` 
and move to the directory.
```bash
cd yocto
```

Next, download and extract the following zip files into the **/rzg/yocto/** directory:

RZ/G Verified Linux Package zip file
```
RTK0EF0045Z0021AZJ-v3.0.6-update3.zip
```

RZ MPU Graphics Library zip file
```
RTK0EF0045Z0021AZJ-v3.0.6-update3.zip
```

RZ MPU Video Codec Library zip file
```
RTK0EF0045Z15001ZJ-v1.2.2_EN.zip
```

Check the working directory to confirm the working contents by using the following command:
```bash
ls -l
```

Make sure that all the packages are extracted successfully.
```
extra
meta-gplv2
meta-openembedded
meta-qt5
meta-renesas
meta-rz-features
meta-virtualization
poky
```

Since the VLP packages you downloaded previously is the older version, you need to patch it into the new update3 using the following command: (This is all done under the **/rzg/yocto/** directory)
```bash
patch -p1 < ../RTK0EF0045Z0021AZJ-v3.0.6-update3/vlpg306-to-vlpg306update3.patch
```
Next, add the following patch files of the GStreamer and the Qt Toolkits into the **/rzg/yocto/** directory. The download links are provided below:

[Download 0001](https://m11158002.github.io/moil-renesas/assets/files/0001-gstreamer-moil-plugin-91a25cd4d16fc479aefd2aa853466770.patch) 

[Download 0002](https://m11158002.github.io/moil-renesas/assets/files/0002-fix_qtsmarthome_url-db1d20dcf1b5af60dc7034e78271ddc2.patch)

Apply the following patch files inside the same directory:
```bash
patch -p1 < ../extra/0001-rz-common-recipes-debian-buster-glibc-update-to-v2.2.patch
patch -p1 < ../extra/0001-rz-common-linux-update-linux-kernel-to-the-latest-re.patch
patch -p1 < ../extra/0001-rz-common-gst-plugins-bad-Depending-bayer2raw-if-lay.patch
```
Apply a patch file to add the GStreamer Moil Plugin.
```bash
patch -p1 < 0001-gstreamer-moil-plugin.patch
```
Apply a patch file to fix the Qt Smart Home URL.
```bash
patch -p1 < 0002-fix_qtsmarthome_url.patch
```
:::Important

When applying the patch files of the **GStreamer Moil Plugin** and the **Qt Smart Home URL**, **remove** the `.patch` and **press** `TAB` to correct the command.

:::

Next, initialize a build using the oe-init-build-env script in Poky and set environment variable TEMPLATECONF to the below path:
```bash
TEMPLATECONF=$PWD/meta-renesas/meta-rzg2l/docs/template/conf/ source poky/oe-init-build-env build
```

Next, add necessary layers for AI application to build/conf/bblayers.conf (configration file for layers).
```bash
bitbake-layers add-layer ../meta-rz-features/meta-rz-graphics
bitbake-layers add-layer ../meta-rz-features/meta-rz-codecs
bitbake-layers add-layer ../meta-qt5
```

Next, download the `downloads.tar.gz` on your PC using the link below.

[Download Link](http://192.168.113.104/rz/)

Then, you can transfer your files from your PC onto the Ubuntu OS by using the following command: ( Please replace the `user`and `ip-address`with the PC that you running on )
```bash
scp .\downloads.tar.gz user@ip-address:/home/user/work/rzg/yocto/build
```

After done transferring, extract the `downloads.tar.gz` using the following command:
```bash
tar xzvf downloads.tar.gz
```

Next, run the following command to build the weston image.
```bash
MACHINE=smarc-rzg2l bitbake core-image-weston
```

Add these lines of code into the `local.conf` located inside the **/rzg/build/conf/local.conf**
```bash
QT_DEMO = "1"

DL_DIR = "${TOPDIR}/../downloads"
SSTATE_DIR = "${TOPDIR}/../sstate-cache"

IMAGE_INSTALL_append = " kernel-module-uvcvideo "
EXTRA_IMAGE_FEATURES_append = " ssh-server-openssh "

IMAGE_INSTALL_append = " curl graphviz "
IMAGE_INSTALL_append = " gst-instruments gst-shark"
PACKAGECONFIG_append_pn-gstreamer1.0 = " tracer-hooks "
```

Next, the `lsblk` command can be used to check the usb device connected to the port of the PC.

If the USB disk have already mounted, you need to use the command:
```bash
sudo umount 
```
to unmount the USB to ensure clean install of the build file into the SD card.

To mount the build file into the SD Card, you use the command:
```bash
sudo bmaptool copy core-image-weston-smarc-rzg2l.wlc.gz /dev/sda
```

The guide on how to manage the packages is in the following link:<br></br>
[Packages Managing Guide](https://m11158002.github.io/moil-renesas/docs/note/renesas/rzg)
