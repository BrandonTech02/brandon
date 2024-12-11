---
sidebar_position: 3
title: 2-3 Yocto Project Build
---

# Yocto Project Build
Start and enter a container,
```bash
docker start my_container_for_20.04
docker exec -it my_container_for_20.04 /bin/bash
```

According to the [Linux Startup Guide](http://140.112.12.82/docu-moil-renesas/assets/files/LinuxStartUpGuide-v3.0.6-a054b3a83140c44a03d92433b163ee18.pdf), additional packages need to be installed inside the Docker container by using the command below:
```bash
$ sudo apt-get update
$ sudo apt-get install gawk wget git-core diffstat unzip texinfo gcc-multilib \
build-essential chrpath socat cpio python python3 python3-pip python3-pexpect \
xz-utils debianutils iputils-ping libsdl1.2-dev xterm p7zip-full libyaml-dev \
libssl-dev bmap-tools
```

Install additional packages such as Cmake and Meson that may be used later:
```bash
sudo apt update
sudo apt install software-properties-common

sudo apt-add-reporitory 'deb https://apt.kitware.com/ubuntu/ bionic main'
sudo apt update
sudo apt install cmake

sudo apt install meson ninja-build
```

Please follow the **previous tutorial** to prepare the Renesas RZ/G2L board for Yocto build step by step.

Please note that **each time**, we enter the container, it's necessary to run the code below to set the environment variables.
```bash
cd <work dir> 
TEMPLATECONF=$PWD/meta-renesas/meta-rzg2l/docs/template/conf/ source poky/oe-init-build-env build
```

There are some choices for the build option, it's recommended to use the most complete build option as below to start the Yocto build.
```bash
MACHINE=smarc-rzg2l bitbake core-image-qt
```

After finishing the Yocto Build, check the output directory as shown below:
```bash
cd build/tmp/deploy/images/smarc-rag2l/
```

The output of the build are
```bash
core-image-qt-smarc-rzg2l.wic.gz
core-image-qt-smarc-rzg2l.wic.bmap
```

Exit from the Docker container and copy the output file into the SD card using the command below:
```bash
sudo bmaptool copy core-image-qt-smarc-rzg2l.wic.gz /dev/sda
```

After that, remove the SD card, insert it to RZ/G2L and boot up. Now you can click on the Qt Demo items or open the terminal then input some Linux commands for test.



