"use strict";(self.webpackChunkmy_demo=self.webpackChunkmy_demo||[]).push([[6274],{8964:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"MCUT Training/gstreamer/gst_pc","title":"3-3 Developing GStreamer Plugins on PC","description":"GStreamer is a pipeline-based multimedia framework that connects various media processing systems to handle complex workflows. It is a powerful and versatile tool for creating streaming media applications, but writing new plugins can be challenging.","source":"@site/docs/MCUT Training/gstreamer/gst_pc.md","sourceDirName":"MCUT Training/gstreamer","slug":"/MCUT Training/gstreamer/gst_pc","permalink":"/brandon/docs/MCUT Training/gstreamer/gst_pc","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/MCUT Training/gstreamer/gst_pc.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"3-3 Developing GStreamer Plugins on PC"},"sidebar":"tutorialSidebar","previous":{"title":"3-1 Generating Remap Files","permalink":"/brandon/docs/MCUT Training/gstreamer/remap"}}');var t=s(4848),r=s(8453);const l={sidebar_position:3,title:"3-3 Developing GStreamer Plugins on PC"},a="Developing the gst-plugins-bad-dev Project on PC",o={},d=[{value:"Install OpenCV",id:"install-opencv",level:2},{value:"Install Moil Dev Library",id:"install-moil-dev-library",level:2},{value:"Install GStreamer",id:"install-gstreamer",level:2},{value:"Basic Tutorial: Hello World",id:"basic-tutorial-hello-world",level:2},{value:"Launching GStreamer",id:"launching-gstreamer",level:2},{value:"Install Meson",id:"install-meson",level:2},{value:"Build",id:"build",level:2},{value:"Basic Test",id:"basic-test",level:2},{value:"MP4 Test",id:"mp4-test",level:2},{value:"Network Streaming Test",id:"network-streaming-test",level:2},{value:"UDP Receiver",id:"udp-receiver",level:3},{value:"Sender",id:"sender",level:3},{value:"USB Camera Test",id:"usb-camera-test",level:2},{value:"The flow of streaming a mp4 file",id:"the-flow-of-streaming-a-mp4-file",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsxs)(n.h1,{id:"developing-the-gst-plugins-bad-dev-project-on-pc",children:["Developing the ",(0,t.jsx)(n.code,{children:"gst-plugins-bad-dev"})," Project on PC"]})}),"\n",(0,t.jsx)(n.p,{children:"GStreamer is a pipeline-based multimedia framework that connects various media processing systems to handle complex workflows. It is a powerful and versatile tool for creating streaming media applications, but writing new plugins can be challenging."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"install-opencv",children:"Install OpenCV"}),"\n",(0,t.jsx)(n.p,{children:"To build the gst-plugins-bad-dev-project, install OpenCV by using the command below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install libopencv-dev python3-opencv\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"install-moil-dev-library",children:"Install Moil Dev Library"}),"\n",(0,t.jsx)(n.p,{children:"Follow the instructions on the Github repository and install it on the x86_64 platform:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/yourskc/moildev_install",children:"https://github.com/yourskc/moildev_install"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"install-gstreamer",children:"Install GStreamer"}),"\n",(0,t.jsx)(n.p,{children:"Install GStreamer by using the link below:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://gstreamer.freedesktop.org/documentation/installing/index.html?gi-language=c",children:"https://gstreamer.freedesktop.org/documentation/installing/index.html?gi-language=c"})}),"\n",(0,t.jsx)(n.p,{children:"To install GStreamer on Ubuntu 22.04, use the command below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"basic-tutorial-hello-world",children:"Basic Tutorial: Hello World"}),"\n",(0,t.jsx)(n.p,{children:"Download the example hellow world script using the link below:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://gstreamer.freedesktop.org/documentation/tutorials/basic/hello-world.html?gi-language=c",children:"https://gstreamer.freedesktop.org/documentation/tutorials/basic/hello-world.html?gi-language=c"})}),"\n",(0,t.jsx)(n.p,{children:"The script can be compiled by using the command below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gcc basic-tutorial-1.c -o basic-tutorial-1 `pkg-config --cflags --libs gstreamer-1.0`\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To test that the executable is working as expected, we will use the commands ",(0,t.jsx)(n.code,{children:"gst-inspect-1.0"})," and ",(0,t.jsx)(n.code,{children:"gst-launch-1.0"})," for testing."]}),"\n",(0,t.jsx)(n.p,{children:"References:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://gstreamer.freedesktop.org/documentation/tools/gst-launch.html?gi-language=c",children:"https://gstreamer.freedesktop.org/documentation/tools/gst-launch.html?gi-language=c"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://gstreamer.freedesktop.org/documentation/tools/gst-inspect.html?gi-language=c#",children:"https://gstreamer.freedesktop.org/documentation/tools/gst-inspect.html?gi-language=c#"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Install OpenCV Plugin for GStreamer",type:"note",children:(0,t.jsxs)(n.p,{children:["sudo apt install ",(0,t.jsx)(n.code,{children:"gstreamer1.0-opencv"})]})}),"\n",(0,t.jsx)(n.p,{children:"You can view the information of the source module, plugin and element by using the command below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gst-inspect-1.0 opencv\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gst-inspect-1.0 geometrictransform\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gst-inspect-1.0 circle\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"launching-gstreamer",children:"Launching GStreamer"}),"\n",(0,t.jsxs)(n.p,{children:["To launch ",(0,t.jsx)(n.strong,{children:"GStreamer"}),", we can use the command ",(0,t.jsx)(n.code,{children:"gst-launch-1.0"})]}),"\n",(0,t.jsx)(n.p,{children:"Examples,"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Running test video"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gst-launch-1.0 videotestsrc ! autovideosink\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Running different patterns of video"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gst-launch-1.0 videotestsrc pattern=0 ! autovideosink\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Setting the resolution of the video"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gst-launch-1.0 videotestsrc ! video/x-raw, width=1920, height=1080 ! autovideosink\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Setting the filter for the video"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gst-launch-1.0 videotestsrc ! video/x-raw, width=1920, height=1080 ! videoconvert ! circle ! videoconvert ! autovideosink\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"GStreamer Command",type:"note",children:(0,t.jsxs)(n.p,{children:["Note that the ",(0,t.jsx)(n.code,{children:"!"})," in the ",(0,t.jsx)(n.strong,{children:"GStreamer"})," command defines different pipelines where the GStreamer will run based on it."]})}),"\n",(0,t.jsx)(n.p,{children:"Example Output:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://schneide.blog/wp-content/uploads/2015/03/videotestsrc.jpg",alt:"Test Video"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"project-download-from-github",children:"Project Download From Github"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Original Project"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"https://github.com/GStreamer/gst-plugins-bad\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Modified Version"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"https://github.com/GStreamer/gst-plugins-bad-dev\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This project includes a new element named ",(0,t.jsx)(n.code,{children:"equirectagular"})," filter as a part of the ",(0,t.jsx)(n.code,{children:"gst-plugins-bad"})," geometric transform plugin. This elememt contains GStreamer code units, build instructions and test commands."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"install-meson",children:"Install Meson"}),"\n",(0,t.jsx)(n.p,{children:"Install the Meson build system by using the command below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install python3 python3-pip python3-setuptools \\\npython3-wheel ninja-build\n\npip3 install --user meson\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"meson build\nninja -C build\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After building, verify the creation of of ",(0,t.jsx)(n.code,{children:".so"})," file in:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"<workdir>/build/gst/geometrictransform\n"})}),"\n",(0,t.jsx)(n.p,{children:"Install the library locally for verification:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo cp ./build/gst/geometrictransform/libgstgeometrictransform.so /usr/lib/x86_64-linux-gnu/gstreamer-1.0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If encounter problem when building the project above,  the ",(0,t.jsx)(n.a,{href:"http://140.112.12.82/docu-moil-renesas/assets/files/libgstgeometrictransform-10f897e764ba4e6b4ea645ec621ee6e1.so",children:(0,t.jsx)(n.strong,{children:"prebuild .iso file"})})," can be downloaded."]}),"\n",(0,t.jsx)(n.p,{children:"Next, copy the .so file to your system folder,"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo cp libgstgeometrictransform.so /usr/lib/x86_64-linux-gnu/gstreamer-1.0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Check using ",(0,t.jsx)(n.code,{children:"gst-inspect-1.0"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"gst-inspect-1.0 geometrictransform\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"gst-inspect-1.0 equirectangular \n"})}),"\n",(0,t.jsxs)(n.p,{children:["Expected output:\n",(0,t.jsx)(n.img,{alt:"Meson Build Output",src:s(8170).A+"",width:"1172",height:"768"})]}),"\n",(0,t.jsx)(n.p,{children:"Reference:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Meson: ",(0,t.jsx)(n.a,{href:"https://mesonbuild.com/Quick-guide.html",children:"https://mesonbuild.com/Quick-guide.html"})]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"testing",children:"Testing"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Ensure the execution directory contains ",(0,t.jsx)(n.code,{children:"EquimatX"})," and ",(0,t.jsx)(n.code,{children:"EquimatY"})," files."]})]}),"\n",(0,t.jsx)(n.h2,{id:"basic-test",children:"Basic Test"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd test_env\ngst-launch-1.0 videotestsrc ! video/x-raw,width=1920,height=1080 ! videoconvert ! equirectangular ! videoconvert ! autovideosink\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"video test source",src:s(8680).A+"",width:"1536",height:"874"})}),"\n",(0,t.jsx)(n.h2,{id:"mp4-test",children:"MP4 Test"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'cd test_env\ngst-launch-1.0 playbin uri=file:///home/skc/gst-work/gst-plugins-bad-dev/test_env/endo01.mp4 video-sink="videoconvert ! equirectangular ! videoconvert ! autovideosink"\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"mp4 test",src:s(7580).A+"",width:"1850",height:"1053"})}),"\n",(0,t.jsx)(n.h2,{id:"network-streaming-test",children:"Network Streaming Test"}),"\n",(0,t.jsx)(n.h3,{id:"udp-receiver",children:"UDP Receiver"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gst-launch-1.0 -v udpsrc uri=udp://127.0.0.1:5000 ! application/x-rtp, media=video, payload=96, encoding-name=H264 ! rtph264depay ! avdec_h264 ! videoconvert ! autovideosink\n"})}),"\n",(0,t.jsx)(n.h3,{id:"sender",children:"Sender"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Video"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gst-launch-1.0 videotestsrc ! video/x-raw, width=1920, height=1080 ! videoconvert ! equirectangular ! videoconvert ! x264enc ! rtph264pay config-interval=10 ! udpsink host=127.0.0.1 port=5000\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Still image"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gst-launch-1.0 filesrc location=image1920.jpg ! decodebin ! imagefreeze ! videoscale ! video/x-raw,width=1920,height=1080 ! videoconvert ! equirectangular ! videoconvert ! x264enc ! rtph264pay config-interval=10 ! udpsink host=localhost port=5000\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usb-camera-test",children:"USB Camera Test"}),"\n",(0,t.jsxs)(n.p,{children:["Replace the video source with ",(0,t.jsx)(n.code,{children:"v4l2src device=/dev/video0"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gst-launch-1.0 v4l2src device=/dev/video0 ! videoscale ! video/x-raw, width=1920, height=1080 ! videoconvert ! equirectangular ! videoconvert ! x264enc ! rtph264pay config-interval=10 ! udpsink host=localhost port=5000\n"})}),"\n",(0,t.jsxs)(n.admonition,{title:"v4l2-ctl Camera Control",type:"tip",children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Installation: ",(0,t.jsx)(n.code,{children:"sudo apt-get install v4l-utils"})]}),"\n",(0,t.jsxs)(n.li,{children:["List All Camera Device: ",(0,t.jsx)(n.code,{children:"v4l2-ctl --list-devices"})]}),"\n",(0,t.jsxs)(n.li,{children:["Display Driver Information: ",(0,t.jsx)(n.code,{children:"v4l2-ctl -d /dev/video0 -D"})]}),"\n",(0,t.jsxs)(n.li,{children:["Get Camera Supported image format: ",(0,t.jsx)(n.code,{children:"v4l2-ctl -d /dev/video0 --list-formats"})," or ",(0,t.jsx)(n.code,{children:"v4l2-ctl -d /dev/video0 --list-formats-ext"})]}),"\n"]}),(0,t.jsxs)(n.p,{children:["Reference: ",(0,t.jsx)(n.a,{href:"https://medium.com/@deepeshdeepakdd2/v4l-a-complete-practical-tutorial-c520f097b590",children:"https://medium.com/@deepeshdeepakdd2/v4l-a-complete-practical-tutorial-c520f097b590"})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"usb test",src:s(2345).A+"",width:"1536",height:"874"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"the-flow-of-streaming-a-mp4-file",children:"The flow of streaming a mp4 file"}),"\n",(0,t.jsx)(n.mermaid,{value:"flowchart LR\n    A(MP4) --\x3e B(Decompression)\n    B --\x3e C(Transformation)\n    C --\x3e D(Compression)\n    D --\x3e E(Streaming)"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8170:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/Meson_build-cd446ea7cbd9977ea3b9df377acf5171.png"},2345:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/Usb-camera-output-768585d88f8dcf876416afd39f492f77.png"},7580:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/mp4test-7f4bae47d2cc504f17cd37b46fe2cead.png"},8680:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/videotestsrc-8bbd8e8c8b37b7295c7b708f46062e00.png"},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var i=s(6540);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);