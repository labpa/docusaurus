"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[258],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,b=s["".concat(o,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[s]="string"==typeof e?e:a,l[1]=u;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},l="IP und Subnetting",u={unversionedId:"Netzwerk/Subnetting/Subnetting",id:"Netzwerk/Subnetting/Subnetting",title:"IP und Subnetting",description:"IPv4",source:"@site/docs/Netzwerk/Subnetting/Subnetting.md",sourceDirName:"Netzwerk/Subnetting",slug:"/Netzwerk/Subnetting/",permalink:"/docusaurus/Netzwerk/Subnetting/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Netzwerk/Subnetting/Subnetting.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logische Funktionen",permalink:"/docusaurus/Logische-Funktionen/"},next:{title:"Netzwerktopologien",permalink:"/docusaurus/Netzwerk/Topologien/"}},o={},p=[{value:"IPv4",id:"ipv4",level:2},{value:"Aufbau",id:"aufbau",level:3},{value:"privater IP-Bereich",id:"privater-ip-bereich",level:3},{value:"IPv6",id:"ipv6",level:2}],c={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ip-und-subnetting"},"IP und Subnetting"),(0,a.kt)("h2",{id:"ipv4"},"IPv4"),(0,a.kt)("h3",{id:"aufbau"},"Aufbau"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"eine IPv4 Adresse besteht aus 32 bit. Es sind 2^32 maximale IP-Adressen")),(0,a.kt)("h3",{id:"privater-ip-bereich"},"privater IP-Bereich"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Bereich"),(0,a.kt)("th",{parentName:"tr",align:null},"von"),(0,a.kt)("th",{parentName:"tr",align:null},"bis"),(0,a.kt)("th",{parentName:"tr",align:null},"als Netzbereich geschrieben"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A"),(0,a.kt)("td",{parentName:"tr",align:null},"10.0.0.0"),(0,a.kt)("td",{parentName:"tr",align:null},"10.255.255.255"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"B"),(0,a.kt)("td",{parentName:"tr",align:null},"172.16.0.0"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"C"),(0,a.kt)("td",{parentName:"tr",align:null},"192.168.0.0"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"ipv6"},"IPv6"))}d.isMDXComponent=!0}}]);