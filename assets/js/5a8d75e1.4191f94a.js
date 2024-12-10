"use strict";(self.webpackChunkmy_demo=self.webpackChunkmy_demo||[]).push([[3327],{8931:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"MCUT Training/renesas/renesas","title":"Renesas RZ/G2L","description":"About","source":"@site/docs/MCUT Training/renesas/renesas.md","sourceDirName":"MCUT Training/renesas","slug":"/MCUT Training/renesas/","permalink":"/brandon/docs/MCUT Training/renesas/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/MCUT Training/renesas/renesas.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Docker","permalink":"/brandon/docs/MCUT Training/renesas/docker"},"next":{"title":"Yocto Project Build","permalink":"/brandon/docs/MCUT Training/renesas/yocto-proj"}}');var a=s(4848),t=s(8453);const i={"resized-image":"resized-image_vcUt",heading:"heading_X6ZO"},o={sidebar_position:2},d="Renesas RZ/G2L",c={},l=[{value:"Board Setup",id:"board-setup",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"renesas-rzg2l",children:"Renesas RZ/G2L"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)("h2",{className:i.heading,children:"About"}),"\nThis is an embedded system that has low power consumption. Various products can be developed based on this embedded system."]}),"\n",(0,a.jsx)(n.h2,{id:"board-setup",children:"Board Setup"}),"\n",(0,a.jsxs)(n.p,{children:["To setup this ",(0,a.jsx)(n.strong,{children:"Renesas RZ/G2L board"}),", a linux image must be prepared to run on the board."]}),"\n",(0,a.jsxs)(n.p,{children:["By following the guide provided below, you can learned about how to boot up, reset, connection of the USB, HDMI and Ethernet.",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.a,{href:"http://140.112.12.82/docu-moil-renesas/assets/files/QuickStartGuide-26b513b9db237fee0615c5b4cf68cab7.pdf",children:"RZ/G2L EVK - Quick Start Guide"})]}),"\n",(0,a.jsxs)(n.p,{children:["The packages that needed to be installed are in the following link:",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.a,{href:"https://www.renesas.com/en/products/microcontrollers-microprocessors/rz-mpus/rzg-linux-platform/rzg-marketplace/verified-linux-package/rzg-verified-linux-package",children:"Renesas VLP Packages"})]}),"\n",(0,a.jsxs)(n.p,{children:["These packages need to be extract inside the ",(0,a.jsx)(n.strong,{children:"/work"})," directory by using the command below."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"tar xzvf rzg.tar.gz\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"/rzg"})," folder is then reopen inside the container that you created in the tutorial before."]}),"\n",(0,a.jsx)(n.p,{children:"Check the user that exist inside the github by using the following code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git config --global --list\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:"If the username and email not exist or incorrect, you can use the following code to modify it:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'git config --global user.name <"your-username">\ngit config --global user.email <"you@example.com">\n'})})]}),"\n",(0,a.jsxs)(n.p,{children:["Next, make a new directory name ",(0,a.jsx)(n.code,{children:"yocto"})," under the ",(0,a.jsx)(n.strong,{children:"/rzg"})," directory."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir yocto\n"})}),"\n",(0,a.jsx)(n.p,{children:"and move to the directory."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd yocto\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Next, download and extract the following zip files into the ",(0,a.jsx)(n.strong,{children:"/rzg/yocto/"})," directory:"]}),"\n",(0,a.jsx)(n.p,{children:"RZ/G Verified Linux Package zip file"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"RTK0EF0045Z0021AZJ-v3.0.6-update3.zip\n"})}),"\n",(0,a.jsx)(n.p,{children:"RZ MPU Graphics Library zip file"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"RTK0EF0045Z0021AZJ-v3.0.6-update3.zip\n"})}),"\n",(0,a.jsx)(n.p,{children:"RZ MPU Video Codec Library zip file"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"RTK0EF0045Z15001ZJ-v1.2.2_EN.zip\n"})}),"\n",(0,a.jsx)(n.p,{children:"Check the working directory to confirm the working contents by using the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ls -l\n"})}),"\n",(0,a.jsx)(n.p,{children:"Make sure that all the packages are extracted successfully."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"extra\nmeta-gplv2\nmeta-openembedded\nmeta-qt5\nmeta-renesas\nmeta-rz-features\nmeta-virtualization\npoky\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Since the VLP packages you downloaded previously is the older version, you need to patch it into the new update3 using the following command: (This is all done under the ",(0,a.jsx)(n.strong,{children:"/rzg/yocto/"})," directory)"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"patch -p1 < ../RTK0EF0045Z0021AZJ-v3.0.6-update3/vlpg306-to-vlpg306update3.patch\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Next, add the following patch files of the GStreamer and the Qt Toolkits into the ",(0,a.jsx)(n.strong,{children:"/rzg/yocto/"})," directory. The download links are provided below:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://m11158002.github.io/moil-renesas/assets/files/0001-gstreamer-moil-plugin-91a25cd4d16fc479aefd2aa853466770.patch",children:"Download 0001"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://m11158002.github.io/moil-renesas/assets/files/0002-fix_qtsmarthome_url-db1d20dcf1b5af60dc7034e78271ddc2.patch",children:"Download 0002"})}),"\n",(0,a.jsx)(n.p,{children:"Apply the following patch files inside the same directory:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"patch -p1 < ../extra/0001-rz-common-recipes-debian-buster-glibc-update-to-v2.2.patch\npatch -p1 < ../extra/0001-rz-common-linux-update-linux-kernel-to-the-latest-re.patch\npatch -p1 < ../extra/0001-rz-common-gst-plugins-bad-Depending-bayer2raw-if-lay.patch\n"})}),"\n",(0,a.jsx)(n.p,{children:"Apply a patch file to add the GStreamer Moil Plugin."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"patch -p1 < 0001-gstreamer-moil-plugin.patch\n"})}),"\n",(0,a.jsx)(n.p,{children:"Apply a patch file to fix the Qt Smart Home URL."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"patch -p1 < 0002-fix_qtsmarthome_url.patch\n"})}),"\n",(0,a.jsx)(n.div,{children:(0,a.jsxs)(n.p,{children:["When applying the patch files of the ",(0,a.jsx)(n.strong,{children:"GStreamer Moil Plugin"})," and the ",(0,a.jsx)(n.strong,{children:"Qt Smart Home URL"}),", ",(0,a.jsx)(n.strong,{children:"remove"})," the ",(0,a.jsx)(n.code,{children:".patch"})," and ",(0,a.jsx)(n.strong,{children:"press"})," ",(0,a.jsx)(n.code,{children:"TAB"})," to correct the command."]})}),"\n",(0,a.jsx)(n.p,{children:"Next, initialize a build using the oe-init-build-env script in Poky and set environment variable TEMPLATECONF to the below path:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"TEMPLATECONF=$PWD/meta-renesas/meta-rzg2l/docs/template/conf/ source poky/oe-init-build-env build\n"})}),"\n",(0,a.jsx)(n.p,{children:"Next, add necessary layers for AI application to build/conf/bblayers.conf (configration file for layers)."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bitbake-layers add-layer ../meta-rz-features/meta-rz-graphics\nbitbake-layers add-layer ../meta-rz-features/meta-rz-codecs\nbitbake-layers add-layer ../meta-qt5\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Next, download the ",(0,a.jsx)(n.code,{children:"downloads.tar.gz"})," on your PC using the link below."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"http://192.168.113.104/rz/",children:"Download Link"})}),"\n",(0,a.jsxs)(n.p,{children:["Then, you can transfer your files from your PC onto the Ubuntu OS by using the following command: ( Please replace the ",(0,a.jsx)(n.code,{children:"user"}),"and ",(0,a.jsx)(n.code,{children:"ip-address"}),"with the PC that you running on )"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"scp .\\downloads.tar.gz user@ip-address:/home/user/work/rzg/yocto/build\n"})}),"\n",(0,a.jsxs)(n.p,{children:["After done transferring, extract the ",(0,a.jsx)(n.code,{children:"downloads.tar.gz"})," using the following command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"tar xzvf downloads.tar.gz\n"})}),"\n",(0,a.jsx)(n.p,{children:"Next, run the following command to build the weston image."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"MACHINE=smarc-rzg2l bitbake core-image-weston\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Add these lines of code into the ",(0,a.jsx)(n.code,{children:"local.conf"})," located inside the ",(0,a.jsx)(n.strong,{children:"/rzg/build/conf/local.conf"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'QT_DEMO = "1"\n\nDL_DIR = "${TOPDIR}/../downloads"\nSSTATE_DIR = "${TOPDIR}/../sstate-cache"\n\nIMAGE_INSTALL_append = " kernel-module-uvcvideo "\nEXTRA_IMAGE_FEATURES_append = " ssh-server-openssh "\n\nIMAGE_INSTALL_append = " curl graphviz "\nIMAGE_INSTALL_append = " gst-instruments gst-shark"\nPACKAGECONFIG_append_pn-gstreamer1.0 = " tracer-hooks "\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Next, the ",(0,a.jsx)(n.code,{children:"lsblk"})," command can be used to check the usb device connected to the port of the PC."]}),"\n",(0,a.jsx)(n.p,{children:"If the USB disk have already mounted, you need to use the command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo umount \n"})}),"\n",(0,a.jsx)(n.p,{children:"to unmount the USB to ensure clean install of the build file into the SD card."}),"\n",(0,a.jsx)(n.p,{children:"To mount the build file into the SD Card, you use the command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo bmaptool copy core-image-weston-smarc-rzg2l.wlc.gz /dev/sda\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The guide on how to manage the packages is in the following link:",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.a,{href:"https://m11158002.github.io/moil-renesas/docs/note/renesas/rzg",children:"Packages Managing Guide"})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var r=s(6540);const a={},t=r.createContext(a);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);