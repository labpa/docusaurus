"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[683],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),o=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=o(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=o(t),k=r,m=p["".concat(u,".").concat(k)]||p[k]||d[k]||l;return t?a.createElement(m,s(s({ref:n},c),{},{components:t})):a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=k;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=t[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},4262:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=t(7462),r=(t(7294),t(3905));const l={},s="Java-projekt",i={unversionedId:"java/java-projekt/java-projekt",id:"java/java-projekt/java-projekt",title:"Java-projekt",description:"Entwurf",source:"@site/docs/java/java-projekt/java-projekt.md",sourceDirName:"java/java-projekt",slug:"/java/java-projekt/",permalink:"/docusaurus/java/java-projekt/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java/java-projekt/java-projekt.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Funktionen",permalink:"/docusaurus/java/funktionen"},next:{title:"Steuerrechner",permalink:"/docusaurus/java/steuerrechner/"}},u={},o=[{value:"Entwurf",id:"entwurf",level:2},{value:"Anforderung",id:"anforderung",level:2},{value:"SQL-Datenbank",id:"sql-datenbank",level:2},{value:"SQL loggen",id:"sql-loggen",level:3},{value:"Erstellen der Datenbank",id:"erstellen-der-datenbank",level:3},{value:"Benutzen der Datenbank",id:"benutzen-der-datenbank",level:3},{value:"Erstellen Tabelle Mitarbeiter",id:"erstellen-tabelle-mitarbeiter",level:3},{value:"Werte festlegen",id:"werte-festlegen",level:3},{value:"Tabelle beschreiben lassen",id:"tabelle-beschreiben-lassen",level:3},{value:"Datens\xe4tze eintragen",id:"datens\xe4tze-eintragen",level:3},{value:"Alles anzeigen lassen",id:"alles-anzeigen-lassen",level:3},{value:"Anmerkung",id:"anmerkung",level:3},{value:"PHP",id:"php",level:2},{value:"Ordner erstellen",id:"ordner-erstellen",level:3},{value:"get all",id:"get-all",level:3}],c={toc:o},p="wrapper";function d(e){let{components:n,...l}=e;return(0,r.kt)(p,(0,a.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"java-projekt"},"Java-projekt"),(0,r.kt)("h2",{id:"entwurf"},"Entwurf"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:t(4909).Z,width:"1082",height:"777"})),(0,r.kt)("h2",{id:"anforderung"},"Anforderung"),(0,r.kt)("p",null,"SQl-Datenbank"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Erstellen einer Datenbank personal"),(0,r.kt)("li",{parentName:"ul"},"Erstellen einer Tabelle Mitarbeiter",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"id als Prim\xe4rschl\xfcssel"),(0,r.kt)("li",{parentName:"ul"},"nachname varchar(50)"),(0,r.kt)("li",{parentName:"ul"},"gehalt decimal(6,2)"),(0,r.kt)("li",{parentName:"ul"},"anmerkung varchar(200)"))),(0,r.kt)("li",{parentName:"ul"},"Eintragen von 5 Datens\xe4tzen     ")),(0,r.kt)("h2",{id:"sql-datenbank"},"SQL-Datenbank"),(0,r.kt)("h3",{id:"sql-loggen"},"SQL loggen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"erstellt eine Datei im angegebenen Pfad"),(0,r.kt)("li",{parentName:"ul"},"loggt die Anweisungen")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"tee c:/dateien/log_personal.sql\n")),(0,r.kt)("h3",{id:"erstellen-der-datenbank"},"Erstellen der Datenbank"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create database personal;\n")),(0,r.kt)("h3",{id:"benutzen-der-datenbank"},"Benutzen der Datenbank"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"use database personal;\n")),(0,r.kt)("h3",{id:"erstellen-tabelle-mitarbeiter"},"Erstellen Tabelle Mitarbeiter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table mitarbeiter;\n")),(0,r.kt)("h3",{id:"werte-festlegen"},"Werte festlegen"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table Mitarbeiter( id int auto_increment primary key, nachname varchar(50), gehalt decimal(6,2), anmerkung varchar(200));\n")),(0,r.kt)("h3",{id:"tabelle-beschreiben-lassen"},"Tabelle beschreiben lassen"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"describe mitarbeiter;\n")),(0,r.kt)("h3",{id:"datens\xe4tze-eintragen"},"Datens\xe4tze eintragen"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'insert into mitarbeiter (nachname, gehalt, anmerkung) values ("Berger", 4950.20, "Statistiker");\n')),(0,r.kt)("h3",{id:"alles-anzeigen-lassen"},"Alles anzeigen lassen"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from mitarbeiter;\n")),(0,r.kt)("h3",{id:"anmerkung"},"Anmerkung"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"set autocommit = 0;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"R\xfcckg\xe4ngig machen")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"rollback;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"set autocommit = 1;\n")),(0,r.kt)("h2",{id:"php"},"PHP"),(0,r.kt)("h3",{id:"ordner-erstellen"},"Ordner erstellen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Erstellen eines Ordners Personal in -> C:/xampp/htdocs/personal"),(0,r.kt)("li",{parentName:"ul"},"f\xfcr jede Funktion brauchen wir 1 Php-Skript")),(0,r.kt)("h3",{id:"get-all"},"get all"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n//Verbinden zum Server - Datenbank personal\n$conny = new mysqli("localhost", "root", "" , "personal");\n\n//SQL erstellen\n$sql = "select * from mitarbeiter";\n\n//Statement erstellen\n$stmt = $conny->query($sql);\n\n//Stmt ausf\xfchren und Speichern ResultSet\n$zeile = $stmt->fetch_assoc();\n\n//wir erstellen ein Array\n$daten = array();\n\nwhile($zeile ==true)\n{\n    array_push($daten, $zeile);\n    \n    $zeile = $stmt->fetch_assoc();\n}\n\n$conny->close();\n\n$json = json_encode($daten);\nprint $json;\n\n//1. Zeile holen\n//Solange zeile != null\n    //Zeile dem Array $daten hinzuf\xfcgen\n    //n\xe4chste Zeile holen\n//array in einen json-Text umwandeln\n//Datenbank schlie\xdfen\n//Ausgabe $json-Text\n?>\n')))}d.isMDXComponent=!0},4909:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/entwurf_personal-93b8a5ddea1f0031baa5788ec1e30c6d.png"}}]);