---
sidebar_position: 1
title: 2-1 Docker
---

# Docker
## About
Docker is a software platform that allows you to build, test, and deploy applications quickly. Docker packages software into standardized units called containers that have everything the software needs to run including libraries, system tools, code, and runtime.

## Setup
The Yocto 3.1 project must be built under Ubuntu 20.04 environment, the docker image must fulfill this requirement to be able to function properly. The <a href="http://140.112.12.82/docu-moil-renesas/assets/files/LinuxStartUpGuide-v3.0.6-a054b3a83140c44a03d92433b163ee18.pdf"><strong>Linux Startup Guide</strong></a> is the main document to be followed.

The [Renesas RZ Docker Setup](https://github.com/renesas-rz/docker_setup) document shows the complete guide on how to build a docker image.

The **rzg_ubuntu-20.04** file is selected as the docker file for building. After building, the images and containers can be checked using the code below.
```bash
docker images
docker ps -a
```
Furthermore, there is a shared folder between the the container that we already have and the container outside Ubuntu 22.04 is 
```bash
~/yocto
```
The data inside the folder can be read from the outside the container. Therefore, for the subsequent operations, the Yocto Project will be built inside the container, and then will exit from the container to write into the SD card.

Below are the Docker commands that are often used:
```
docker info
docker images
docker ps                 ( only running container)
docker ps -a              ( all )
docker start my_container_for_20.04 
docker exec -it my_container_for_20.04 /bin/bash
docker rm <container>     # remove a container, stop it first 
docker rmi <image>        # remove a image
```


