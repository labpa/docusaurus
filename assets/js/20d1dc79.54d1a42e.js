"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[531],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),u=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},k="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=u(a),N=r,g=k["".concat(d,".").concat(N)]||k[N]||o[N]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[k]="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},720:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={},i="Netzwerk Wiederholung",p={unversionedId:"Netzwerk/wiederholung/wiederholung",id:"Netzwerk/wiederholung/wiederholung",title:"Netzwerk Wiederholung",description:"DHCP",source:"@site/docs/Netzwerk/wiederholung/wiederholung.md",sourceDirName:"Netzwerk/wiederholung",slug:"/Netzwerk/wiederholung/",permalink:"/docusaurus/Netzwerk/wiederholung/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Netzwerk/wiederholung/wiederholung.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OSI - Open Systems Interconnection",permalink:"/docusaurus/Netzwerk/osi/"},next:{title:"Qualit\xe4t",permalink:"/docusaurus/Qualit\xe4t/"}},d={},u=[{value:"DHCP",id:"dhcp",level:2},{value:"DHCP-Dora",id:"dhcp-dora",level:3},{value:"DHCP - APIPA",id:"dhcp---apipa",level:3},{value:"DHCP - Relay-Agent",id:"dhcp---relay-agent",level:3},{value:"Ports",id:"ports",level:2},{value:"Private IP-Bereiche",id:"private-ip-bereiche",level:2},{value:"DNS - Domain Name System",id:"dns---domain-name-system",level:2},{value:"Kabel",id:"kabel",level:2}],m={toc:u},k="wrapper";function o(t){let{components:e,...l}=t;return(0,r.kt)(k,(0,n.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"netzwerk-wiederholung"},"Netzwerk Wiederholung"),(0,r.kt)("h2",{id:"dhcp"},"DHCP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"automatisches bereitstellen von IP-Adressen"),(0,r.kt)("li",{parentName:"ul"},"IP-Grundkonfiguration"),(0,r.kt)("li",{parentName:"ul"},"Port 67 & 68"),(0,r.kt)("li",{parentName:"ul"},"Dora Prinzip  "),(0,r.kt)("li",{parentName:"ul"},"Relay-Agent"),(0,r.kt)("li",{parentName:"ul"},"DHCP-Option / APIPA (Automatic Private IP Addressing)")),(0,r.kt)("h3",{id:"dhcp-dora"},"DHCP-Dora"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:a(2643).Z,width:"568",height:"291"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"4 wichtige Schritte zum DHCP-Prozess")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Discover - Anfrage per LAN-Broadcast nach DHCP-Server",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Broadcast - 255.255.255.255"))),(0,r.kt)("li",{parentName:"ol"},"Offer - Server bietet IP-Adressen an"),(0,r.kt)("li",{parentName:"ol"},"Request - Anfordern von einem Lease / der Information"),(0,r.kt)("li",{parentName:"ol"},"Acknownledge")),(0,r.kt)("h3",{id:"dhcp---apipa"},"DHCP - APIPA"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Automatic Private IP-Adressing"),(0,r.kt)("li",{parentName:"ul"},"IP-Bereich 169.254.0.1b- 169.254.255.254 /16"),(0,r.kt)("li",{parentName:"ul"},"Bekommt der Client aus irgend welchen Gr\xfcnden keine IP-Adresse vom DHCP-Server vergibt er sich selbst eine APIPA"),(0,r.kt)("li",{parentName:"ul"},"Client selbst legt die APIPA selbst fest."),(0,r.kt)("li",{parentName:"ul"},"Client kontrolliert selbst, dass entsprechende APIPA nicht schon vergebn ist")),(0,r.kt)("h3",{id:"dhcp---relay-agent"},"DHCP - Relay-Agent"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"zwischen verschiedenen Netzen DHCP Informationen auszutauschen"),(0,r.kt)("li",{parentName:"ul"},"Wenn ein Router DHCP-Broadcast erh\xe4lt ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"-> wird es in der Regel  Verworfen"),(0,r.kt)("li",{parentName:"ul"},"-> Relay-Agent: leitet es weiter")))),(0,r.kt)("h2",{id:"ports"},"Ports"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Portnummer"),(0,r.kt)("th",{parentName:"tr",align:null},"Protokoll"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"FTP-Daten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"21"),(0,r.kt)("td",{parentName:"tr",align:null},"FTP-Steuerung")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"22"),(0,r.kt)("td",{parentName:"tr",align:null},"SSH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"23"),(0,r.kt)("td",{parentName:"tr",align:null},"Telnet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"SMTP - Simple Mail Transfer Protocol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"33"),(0,r.kt)("td",{parentName:"tr",align:null},"DNS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"67 / 68"),(0,r.kt)("td",{parentName:"tr",align:null},"DNS / DHCP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"80"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"443"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTPs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"110"),(0,r.kt)("td",{parentName:"tr",align:null},"Post Office Protocoll")))),(0,r.kt)("h2",{id:"private-ip-bereiche"},"Private IP-Bereiche"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"A"),(0,r.kt)("th",{parentName:"tr",align:null},"B"),(0,r.kt)("th",{parentName:"tr",align:null},"C"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10.0.0.0/8"),(0,r.kt)("td",{parentName:"tr",align:null},"172.16.0.0/12 - 172.31.255.255"),(0,r.kt)("td",{parentName:"tr",align:null},"192.168.0.0/16")))),(0,r.kt)("p",null,"IPv4: 127.0.0.0/8\nIpv6: ::1"),(0,r.kt)("h2",{id:"dns---domain-name-system"},"DNS - Domain Name System"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Namensaufl\xf6sung von IP-Adressen <--\x3e Domainname"),(0,r.kt)("li",{parentName:"ul"},"DNS-Hierarchie"),(0,r.kt)("li",{parentName:"ul"},"Lokal oder Internet"),(0,r.kt)("li",{parentName:"ul"},"FQDN - Fully Qualified Domain Name"),(0,r.kt)("li",{parentName:"ul"},"Top Level Domain (TLD)  ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Geo"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Organisatorische"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"de"),(0,r.kt)("td",{parentName:"tr",align:"center"},"com")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"at"),(0,r.kt)("td",{parentName:"tr",align:"center"},"net")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ch"),(0,r.kt)("td",{parentName:"tr",align:"center"},"biz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"fr"),(0,r.kt)("td",{parentName:"tr",align:"center"},"org")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"us"),(0,r.kt)("td",{parentName:"tr",align:"center"},"net")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"tv"),(0,r.kt)("td",{parentName:"tr",align:"center"},"info")))),(0,r.kt)("h2",{id:"kabel"},"Kabel"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Lichtwellenleiter"),(0,r.kt)("th",{parentName:"tr",align:null},"Metallischeleiter"),(0,r.kt)("th",{parentName:"tr",align:null},"Freiraum\xfcbertragung")))),(0,r.kt)("p",null,"Twisted Pair -> mindestens zwei isolierte adern umeinenader geschwungen werden. In modernen Kabeln verdrillt. Stecker RJ45"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Cat"),(0,r.kt)("th",{parentName:"tr",align:null},"Geschwindigkeit"),(0,r.kt)("th",{parentName:"tr",align:null},"Frequenz"),(0,r.kt)("th",{parentName:"tr",align:null},"Verwendung/Standard"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5e"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6a"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7a"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Monomode / Singlemode"),(0,r.kt)("th",{parentName:"tr",align:null},"Multimode"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kern deutlich kleiner"),(0,r.kt)("td",{parentName:"tr",align:null},"Einsatz bis zum Host")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Teurer"),(0,r.kt)("td",{parentName:"tr",align:null},"K\xfcrzere Distanzen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Laser"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"L\xe4ngere Distanz"),(0,r.kt)("td",{parentName:"tr",align:null})))))}o.isMDXComponent=!0},2643:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/DHCP-Dora-4280ad35e043a0a8fd00b3c9fedd7b44.png"}}]);