---
sidebar_position: 2
title: 1-2 Setting up software on Ubuntu
---

# Setting up software on Ubuntu

## OpenSSH
**Step 1**: Installing the SSH Client using the code below:
```bash
sudo apt install openssh-client
```
**Step 2**: Generating private key on another laptop or PC:
```bash
ssh-keygen -t rsa
```

**Step 3**: Storing the generated key into **Github** Account:

![SSH Key](../img/SSH_Key.PNG)

## Visual Studio Code
**Step 1**: Download Visual Studio Code from the [official website](https://code.visualstudio.com/).

**Step 2**: Install **Remote - SSH** extension for controlling the mini PC remotely.

![RemoteSSH](../img/RemoteSSH.PNG)

## Docker
**Step 1**: Install **Dev Containers** extension, where it can creates individual container for different projects.

![Container](../img/Container.PNG)