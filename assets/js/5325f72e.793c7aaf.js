"use strict";(self.webpackChunkmy_demo=self.webpackChunkmy_demo||[]).push([[2670],{2056:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"MCUT Training/renesas/docker","title":"2-1 Docker","description":"About","source":"@site/docs/MCUT Training/renesas/docker.md","sourceDirName":"MCUT Training/renesas","slug":"/MCUT Training/renesas/docker","permalink":"/brandon/docs/MCUT Training/renesas/docker","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/MCUT Training/renesas/docker.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"2-1 Docker"},"sidebar":"tutorialSidebar","previous":{"title":"Renesas","permalink":"/brandon/docs/category/renesas"},"next":{"title":"2-2 Renesas RZ/G2L","permalink":"/brandon/docs/MCUT Training/renesas/"}}');var i=s(4848),t=s(8453);const o={sidebar_position:1,title:"2-1 Docker"},a="Docker",c={},d=[{value:"About",id:"about",level:2},{value:"Files inside Directories Inside vs Outside the Container",id:"files-inside-directories-inside-vs-outside-the-container",level:3},{value:"User Accounts Inside vs Outside the Container",id:"user-accounts-inside-vs-outside-the-container",level:3},{value:"Setup",id:"setup",level:2},{value:"Step 1: Download the correct dockerfile",id:"step-1-download-the-correct-dockerfile",level:3},{value:"Step 2: Build an image",id:"step-2-build-an-image",level:3},{value:"Step 3: Start a Container using the Image",id:"step-3-start-a-container-using-the-image",level:3},{value:"Step 4: Using the container",id:"step-4-using-the-container",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"docker",children:"Docker"})}),"\n",(0,i.jsx)(n.h2,{id:"about",children:"About"}),"\n",(0,i.jsx)(n.p,{children:"Docker is a software platform that allows you to build, test, and deploy applications quickly. Docker packages software into standardized units called containers that have everything the software needs to run including libraries, system tools, code, and runtime.\n**"}),"\n",(0,i.jsx)(n.h3,{id:"files-inside-directories-inside-vs-outside-the-container",children:"Files inside Directories Inside vs Outside the Container"}),"\n",(0,i.jsxs)(n.p,{children:["When operate inside the container, the entire container file system is ",(0,i.jsx)(n.strong,{children:"isolated"})," from the host file system. You will ",(0,i.jsx)(n.strong,{children:"not"})," able to access the environment located inside the container."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Architecture of Container",src:s(9507).A+"",width:"464",height:"337"})}),"\n",(0,i.jsxs)(n.p,{children:["To access the the files inside the the docker container, you should choose a shared directory on your host machine that can be accesible from ",(0,i.jsx)(n.strong,{children:"both"})," inside and outside the container."]}),"\n",(0,i.jsx)(n.p,{children:"In this case:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Host PC environment: /home/chris/yocto"}),"\n",(0,i.jsx)(n.li,{children:"Inside docker container: /home/chris/yocto"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Shared directory",src:s(5985).A+"",width:"483",height:"425"})}),"\n",(0,i.jsx)(n.h3,{id:"user-accounts-inside-vs-outside-the-container",children:"User Accounts Inside vs Outside the Container"}),"\n",(0,i.jsx)(n.p,{children:"Users inside a docker container are different to the host users, they have different UID."}),"\n",(0,i.jsxs)(n.p,{children:["If you have to use ",(0,i.jsx)(n.code,{children:"sudo docker"})," everytime to run docker, it is highly recommended to add the user into the docker group:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo usermod -a -G docker ${USER}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Check that you are in the docker group:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"id -nG | grep docker\n"})}),"\n",(0,i.jsx)(n.p,{children:"Verify that you can run docker commands without sudo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run hello-world\n"})}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(n.p,{children:"The Yocto 3.1 project must be built under Ubuntu 20.04 environment, the docker image must fulfill this requirement to be able to function properly."}),"\n",(0,i.jsx)(n.h3,{id:"step-1-download-the-correct-dockerfile",children:"Step 1: Download the correct dockerfile"}),"\n",(0,i.jsx)(n.p,{children:"You can use the following command to download:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"wget https://raw.githubusercontent.com/renesas-rz/docker_setup/master/Dockerfile.rzg_ubuntu-20.04\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-2-build-an-image",children:"Step 2: Build an image"}),"\n",(0,i.jsxs)(n.p,{children:["Before you can use docker for BSP, a docker ",(0,i.jsx)(n.strong,{children:"image"})," need to be built."]}),"\n",(0,i.jsx)(n.p,{children:"Copy and paste the following code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'docker build --no-cache \\\n  --build-arg "host_uid=$(id -u)" \\\n  --build-arg "host_gid=$(id -g)" \\\n  --build-arg "USERNAME=$USER" \\\n  --build-arg "TZ_VALUE=$(cat /etc/timezone)" \\\n  --tag rz_ubuntu-20.04 \\\n  --file Dockerfile.rzg_ubuntu-20.04  .\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Change the ",(0,i.jsx)(n.code,{children:"--tag"})," name to whatever you want."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"After building, verify the image was created by using the following code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker images\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"REPOSITORY           TAG       IMAGE ID       CREATED          SIZE\nrz_ubuntu-20.04      latest    960cf1be32b0   57 seconds ago   1.25GB\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-3-start-a-container-using-the-image",children:"Step 3: Start a Container using the Image"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'mkdir -p /home/$USER/yocto\n\ndocker run -it \\\n  --name=my_container_for_20.04 \\\n  --volume="/home/$USER/yocto:/home/$USER/yocto" \\\n  --workdir="/home/$USER" \\\n  rz_ubuntu-20.04\n'})}),"\n",(0,i.jsx)(n.h3,{id:"step-4-using-the-container",children:"Step 4: Using the container"}),"\n",(0,i.jsx)(n.p,{children:"To show the running containers:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker ps\n"})}),"\n",(0,i.jsx)(n.p,{children:"To show all your containers (running and stopped):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker ps -a\n"})}),"\n",(0,i.jsx)(n.p,{children:"To start your container:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker start <container_name>\n"})}),"\n",(0,i.jsx)(n.p,{children:"To enter back into your running container:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker exec -it <container_name> /bin/bash\n"})}),"\n",(0,i.jsx)(n.p,{children:"To exit the container:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"exit\n"})}),"\n",(0,i.jsx)(n.p,{children:"Below are the Docker commands that are often used:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker info\ndocker images\ndocker ps                 ( only running container)\ndocker ps -a              ( all )\ndocker start my_container_for_20.04 \ndocker exec -it my_container_for_20.04 /bin/bash\ndocker rm <container>     # remove a container, stop it first \ndocker rmi <image>        # remove a image\n"})}),"\n",(0,i.jsx)(n.p,{children:"References:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"http://140.112.12.82/docu-moil-renesas/assets/files/LinuxStartUpGuide-v3.0.6-a054b3a83140c44a03d92433b163ee18.pdf",children:"Linux Startup Guide"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/renesas-rz/docker_setup",children:"Renesas RZ Docker Setup"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},9507:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/container_architecture-66f78ca0771c45ac63ce86e6dc049c24.png"},5985:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/shared_directory-2466b6bb46d02c49212f0a8cfbb7e5c3.png"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var r=s(6540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);