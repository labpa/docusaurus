"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=o(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||l;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=h;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={},i="Fahrtenbuch React App",u={unversionedId:"Praktikum/Fahrtenbuch/Fahrtenbuch",id:"Praktikum/Fahrtenbuch/Fahrtenbuch",title:"Fahrtenbuch React App",description:"Dokumentation",source:"@site/docs/Praktikum/Fahrtenbuch/Fahrtenbuch.md",sourceDirName:"Praktikum/Fahrtenbuch",slug:"/Praktikum/Fahrtenbuch/",permalink:"/docusaurus/Praktikum/Fahrtenbuch/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Praktikum/Fahrtenbuch/Fahrtenbuch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Datenbank",permalink:"/docusaurus/Praktikum/Datenbank"},next:{title:"Kontaktformular",permalink:"/docusaurus/ProjektRobotron/Projekt-Robotron"}},s={},o=[{value:"Dokumentation",id:"dokumentation",level:2},{value:"Anforderung",id:"anforderung",level:3},{value:"GUI",id:"gui",level:3},{value:"Entwurf",id:"entwurf",level:4},{value:"Zwischenstand",id:"zwischenstand",level:4},{value:"TODO",id:"todo",level:2},{value:"Funktionalit\xe4t",id:"funktionalit\xe4t",level:3},{value:"Download",id:"download",level:3},{value:"PWA - progressive web app",id:"pwa---progressive-web-app",level:3},{value:"zu verstehen",id:"zu-verstehen",level:2},{value:"useEffect",id:"useeffect",level:3},{value:"Erstellen",id:"erstellen",level:2}],p={toc:o},c="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fahrtenbuch-react-app"},"Fahrtenbuch React App"),(0,r.kt)("h2",{id:"dokumentation"},"Dokumentation"),(0,r.kt)("h3",{id:"anforderung"},"Anforderung"),(0,r.kt)("p",null,"Erstellen eines Fahrtenbuches mit React. Das Fahrtenbuch soll die Daten im local Storage des Browsers speichern.\nEingegeben werden sollen folgende Informationen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kennzeichen des Fahrzeugs"),(0,r.kt)("li",{parentName:"ul"},"Fahrer:in des Fahrzeugs"),(0,r.kt)("li",{parentName:"ul"},"Kilometerstand bei Beginn der Fahrt"),(0,r.kt)("li",{parentName:"ul"},"Kilometerstand bei Ende der Fahrt"),(0,r.kt)("li",{parentName:"ul"},"Datum der Fahrt"),(0,r.kt)("li",{parentName:"ul"},"Zweck der Fahrt")),(0,r.kt)("p",null,"Die eingegebenen Daten sollen nach eingabe in einer Liste unterhalb des Eingabeformulars ausgegeben werden.\nZus\xe4tzlich soll das Herunterladen der entstandenen Liste in Form einer JSON Datei m\xf6glich sein.\n\xdcber die M\xf6glichkeit eines Uploads soll es m\xf6glich sein JSON Dateien hochzuladen und den Inhalt ausgeben zu lassen.\nDie Eintr\xe4ge der Liste sollen sich nachtr\xe4glich einzeln l\xf6schen lassen."),(0,r.kt)("h3",{id:"gui"},"GUI"),(0,r.kt)("h4",{id:"entwurf"},"Entwurf"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(8799).Z,width:"1020",height:"720"}),"\nEingabem\xf6glichkeiten des Fahrtenbuchs"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(1801).Z,width:"1020",height:"720"}),"\nAusgabe der Liste unterhalb der Eingabe"),(0,r.kt)("h4",{id:"zwischenstand"},"Zwischenstand"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(4550).Z,width:"1915",height:"660"}),"\nZwischenstand Eingabem\xf6glichkeit mit Bootstrap"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(8133).Z,width:"1918",height:"1080"}),"\nZwischenstand Ausgabe der Liste unterhalb der Eingabe"),(0,r.kt)("h2",{id:"todo"},"TODO"),(0,r.kt)("h3",{id:"funktionalit\xe4t"},"Funktionalit\xe4t"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"enum Kennzeichen"),(0,r.kt)("li",{parentName:"ul"},"Speichern Kilometer entsprechend zu einem Nummernschild"),(0,r.kt)("li",{parentName:"ul"},"KM Ende wird als neuer KM stand gespeichert"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Bei Auswahl Nummernschild anzeige KM-Beginn automatisch aktuellen KM stand")))),(0,r.kt)("h3",{id:"download"},"Download"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PDF export")),(0,r.kt)("h3",{id:"pwa---progressive-web-app"},"PWA - progressive web app"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bedeutet das eine Anwendung eigenschaften einer Native und einer Web App vereint"),(0,r.kt)("li",{parentName:"ul"},"Erm\xf6glicht Plattformunabh\xe4ngigkeit")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download von Chrome"),(0,r.kt)("li",{parentName:"ol"},"Generate a Lighthouse report"),(0,r.kt)("li",{parentName:"ol"},"manifest.jason angepasst")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app-manifest.firebaseapp.com/"},"https://app-manifest.firebaseapp.com/"))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Icon ausgew\xe4hlt - Neue Images in passenden gr\xf6\xdfen erstellt - Entsprechende Images hochgeladen und in manifest.jason angepasst")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://imageresizer.com/de"},"https://imageresizer.com/de"))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"maskable erstellt und hochgeladen -> manifest.json")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://maskable.app/editor"},"https://maskable.app/editor"))),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn run build")),(0,r.kt)("li",{parentName:"ol"},"upload build Ordner bei Netlify")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://fahrtenbuch.netlify.app/"},"https://fahrtenbuch.netlify.app/"))),(0,r.kt)("h3",{id:""}),(0,r.kt)("h2",{id:"zu-verstehen"},"zu verstehen"),(0,r.kt)("h3",{id:"useeffect"},"useEffect"),(0,r.kt)("h2",{id:"erstellen"},"Erstellen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Zuerst wurde die React App generiert.\n",(0,r.kt)("inlineCode",{parentName:"li"},"yarn create react-app . --template typescript")),(0,r.kt)("li",{parentName:"ul"},"App Starten:\n",(0,r.kt)("inlineCode",{parentName:"li"},"yarn start"),"\nRuns the app in the development mode.\\\nOpen ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:3000"},"http://localhost:3000")," to view it in the browser.")))}d.isMDXComponent=!0},8799:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Fahrtenbuch-6b16c6ffae91b510193f7752f999965a.png"},1801:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Fahrtenbuch_Ausgabe-292941710416d5c093ec98024f38d5c3.png"},4550:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Zwischenstand-Eingabe-136e12ea6ddec084311590c3a7bb2944.png"},8133:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Zwischenstand-Liste-ea526b3ecde53f812eb97bee650d2b34.png"}}]);