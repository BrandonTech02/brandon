---
sidebar_position: 4
title: 3-4 Preparing GStreamer Plugins for Yocto Compilation
---

# Preparing `gst-plugins-bad` Project for Yocto Compilation
## Project Cloning
Clone the project,
```bash
git clone https://github.com/yourskc/gst-plugins-bad.git
```

:::tip

If you intent to modify the project,
1. Fork the repository
2. Set the commit ID corresponding to your copy

:::

Next, checkout the appropriate branch:
```bash
git checkout RCAR-GEN3e/1.16.3
git branch
```

Next, copy `gstequirectangular.c` and `gstequirectangular.h` under **gst/geometrictransform/** and paste it from the development project `gst-plugins-bad-dev` into the corresponding directory in `gst-plugins-bad`.

Next, uncomment the `#define GST_RENESAS` definition line in the source program.

Commit and push using the command below:
```bash
git commit -m "comment"
git push
```

Get the commit ID from the the [Github Page](https://github.com/yourskc/gst-plugins-bad/tree/RCAR-GEN3/1.6.3).

The previous project in section 3-3 is build with **Meson Build**, while this project is build with **GNU Automake**

The build commands are shown below:
```bash
./autogen.sh
make
```

:::warning

If you would like to build the project, you should compile in Ubuntu version **20.04**.

:::

:::tip

If you wish to add more new functions, you should modify the `equirectangular.c` and `equirectangular.h` files.

:::