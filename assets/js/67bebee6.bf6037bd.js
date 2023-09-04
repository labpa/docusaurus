"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3686],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=A(e,["components","mdxType","originalType","parentName"]),g=u(n),k=r,p=g["".concat(s,".").concat(k)]||g[k]||m[k]||l;return n?a.createElement(p,i(i({ref:t},d),{},{components:n})):a.createElement(p,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var A={};for(var s in t)hasOwnProperty.call(t,s)&&(A[s]=t[s]);A.originalType=e,A[g]="string"==typeof e?e:r,i[1]=A;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>A,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={},i="Datenbank",A={unversionedId:"Datenbanken/Datenbanken",id:"Datenbanken/Datenbanken",title:"Datenbank",description:"Datenbankdesign",source:"@site/docs/Datenbanken/Datenbanken.md",sourceDirName:"Datenbanken",slug:"/Datenbanken/",permalink:"/docusaurus/Datenbanken/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Datenbanken/Datenbanken.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Essen im Netz",permalink:"/docusaurus/CSharp/Essen-im-Netz"},next:{title:"SQL - Structured Query Language",permalink:"/docusaurus/Datenbanken/SQL"}},s={},u=[{value:"Datenbankdesign",id:"datenbankdesign",level:2},{value:"Phasen des Datenbankentwurfs",id:"phasen-des-datenbankentwurfs",level:2},{value:"Entity Relationship Modell (ER-Modell / ERM)",id:"entity-relationship-modell-er-modell--erm",level:2},{value:"Begriffe",id:"begriffe",level:2},{value:"Entity-Relationship-Diagramm (ER-Diagramm)",id:"entity-relationship-diagramm-er-diagramm",level:2},{value:"Kardinalit\xe4ten",id:"kardinalit\xe4ten",level:2},{value:"1:1",id:"11",level:3},{value:"1:n",id:"1n",level:3},{value:"m:n",id:"mn",level:3},{value:"Umsetzung in ein Datenbankschema",id:"umsetzung-in-ein-datenbankschema",level:2},{value:"\xdcberf\xfchrung in ein relationales Modell",id:"\xfcberf\xfchrung-in-ein-relationales-modell",level:2},{value:"Zusammenhang relationalem Modell und ER-Modell",id:"zusammenhang-relationalem-modell-und-er-modell",level:2},{value:"Transformationsregeln",id:"transformationsregeln",level:2}],d={toc:u},g="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(g,(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datenbank"},"Datenbank"),(0,r.kt)("h2",{id:"datenbankdesign"},"Datenbankdesign"),(0,r.kt)("h2",{id:"phasen-des-datenbankentwurfs"},"Phasen des Datenbankentwurfs"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(3729).Z,width:"1615",height:"1120"})),(0,r.kt)("h2",{id:"entity-relationship-modell-er-modell--erm"},"Entity Relationship Modell (ER-Modell / ERM)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Grundlagen f\xfcr einen Datenbankentwurf"),(0,r.kt)("li",{parentName:"ul"},"Planung f\xfcr Aufbau und Funktionen der Datenbankstruktur"),(0,r.kt)("li",{parentName:"ul"},"Standard f\xfcr die Datenmodellierung"),(0,r.kt)("li",{parentName:"ul"},"Typisierung von Objekten, ihrer relationalen Beziehungen unterienander und der \xfcber sie zu f\xfchrenden Attribute")),(0,r.kt)("h2",{id:"begriffe"},"Begriffe"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Beschreibung"),(0,r.kt)("th",{parentName:"tr",align:null},"Typ"),(0,r.kt)("th",{parentName:"tr",align:null},"Darstellung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Entit\xe4ten:"),"individuell identifizierbare Objekte der Wirklichkeit"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Entit\xe4tstyp:"),"Typisierung gleicher Entit\xe4ren"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Alt text",src:n(8079).Z,width:"437",height:"214"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Beziehungen:")," Verkn\xfcpfungen/Zusammenh\xe4nge zwischen zwei oder mehreren Entit\xe4ten"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Beziehungstyp:")," Typisierung gleichartiger Beziehungen"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Alt text",src:n(1577).Z,width:"523",height:"220"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Eigenschaften:")," Merkmal, Kennzeichen, Informationsdetail, das einem konkreten Objekt zugeordnet ist"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribut:")," Typisierung gleichartiger Eigenschaften"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Alt text",src:n(3177).Z,width:"404",height:"188"}))))),(0,r.kt)("h2",{id:"entity-relationship-diagramm-er-diagramm"},"Entity-Relationship-Diagramm (ER-Diagramm)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"grafische Darstellung von Entit\xe4tstypen und Beziehungstypen"),(0,r.kt)("li",{parentName:"ul"},"Vielzahl unterscheidlicher Notationen"),(0,r.kt)("li",{parentName:"ul"},"Beispiel:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"+ Chen-Notation von Peter Chen, 1976\n")),(0,r.kt)("img",{alt:"Alt text",src:n(1292).Z,width:"1379",height:"469"}))),(0,r.kt)("h2",{id:"kardinalit\xe4ten"},"Kardinalit\xe4ten"),(0,r.kt)("h3",{id:"11"},"1:1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jede Entit\xe4t aus der ersten Entit\xe4tsmenge kann mit ",(0,r.kt)("strong",{parentName:"li"},"h\xf6chstens einer")," Entit\xe4t aus der zweiten Entit\xe4tsmenge in Beziehung stehen, und umgekehrt")),(0,r.kt)("h3",{id:"1n"},"1:n"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jede Entit\xe4t aus der ersten Entit\xe4tsmenge kann mit ",(0,r.kt)("strong",{parentName:"li"},"beliebig vielen")," Entit\xe4ten aus der zweiten Entit\xe4tsmenge in Beziehung stehen. Jede Entit\xe4t aus der zweiten Entit\xe4tsmenge kann mit ",(0,r.kt)("strong",{parentName:"li"},"h\xf6chstens einer")," Entit\xe4t aus der ersten Entit\xe4tsmenge in Beziehung stehen")),(0,r.kt)("h3",{id:"mn"},"m:n"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jede Entit\xe4t aus der Ersten Entit\xe4tsmenge kann mit ",(0,r.kt)("strong",{parentName:"li"},"beliebig vielen")," Entit\xe4ten aus der zweiten Entit\xe4tsmenge in Beziehung stehen, und umgekehrt.\n",(0,r.kt)("img",{alt:"Alt text",src:n(1813).Z,width:"1379",height:"469"}))),(0,r.kt)("h2",{id:"umsetzung-in-ein-datenbankschema"},"Umsetzung in ein Datenbankschema"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Erkennen und Zusammenfassen von Entit\xe4ten zu Entit\xe4tstypen durch Abstraktion",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Beispiel: Alle Mitarbeiter werden zum Entit\xe4tstyp Mitarbeiter Zusammengefasst"))),(0,r.kt)("li",{parentName:"ul"},"Erkennen und Zusammenfassen von Beziehungen zwischen je zwei Objekten zu einem Beziehungstyp"),(0,r.kt)("li",{parentName:"ul"},"Bestimmung der Kardinalit\xe4ten, d.h. der H\xe4ufigkeit des Auftretens")),(0,r.kt)("h2",{id:"\xfcberf\xfchrung-in-ein-relationales-modell"},"\xdcberf\xfchrung in ein relationales Modell"),(0,r.kt)("p",null,"Die \xdcberf\xfchrung einer Entity-Relationship-Modells in das Relationen-Modell basiert im Wesentlichen auf den folgenden Abbildungen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Entit\xe4tstyp -> Relation"),(0,r.kt)("li",{parentName:"ul"},"Beziehungstyp -> Fremdschl\xfcssel",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"im Falle eines n:m-Beziehungstyps -> zus\xe4tzliche Relation"))),(0,r.kt)("li",{parentName:"ul"},"Attribut -> Attribut")),(0,r.kt)("h2",{id:"zusammenhang-relationalem-modell-und-er-modell"},"Zusammenhang relationalem Modell und ER-Modell"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Relationales Modell"),(0,r.kt)("th",{parentName:"tr",align:null},"Beschreibung"),(0,r.kt)("th",{parentName:"tr",align:null},"ER-Modell"),(0,r.kt)("th",{parentName:"tr",align:null},"ER-Diagramm"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Relationenname"),(0,r.kt)("td",{parentName:"tr",align:null},"Name der Tabelle"),(0,r.kt)("td",{parentName:"tr",align:null},"Name des Entit\xe4tstyps"),(0,r.kt)("td",{parentName:"tr",align:null},"Name im Rechteck")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Attribut"),(0,r.kt)("td",{parentName:"tr",align:null},"Spalte einer Tabelle"),(0,r.kt)("td",{parentName:"tr",align:null},"Attribut"),(0,r.kt)("td",{parentName:"tr",align:null},"Oval")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Relationenschema"),(0,r.kt)("td",{parentName:"tr",align:null},"Menge von Attributen"),(0,r.kt)("td",{parentName:"tr",align:null},"Entit\xe4tstypen"),(0,r.kt)("td",{parentName:"tr",align:null},"Rechteck mit Ovalen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tupel"),(0,r.kt)("td",{parentName:"tr",align:null},"Zeile einer Tabelle"),(0,r.kt)("td",{parentName:"tr",align:null},"Entit\xe4t"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Relation"),(0,r.kt)("td",{parentName:"tr",align:null},"Menge von Zeilen"),(0,r.kt)("td",{parentName:"tr",align:null},"Entit\xe4tsmengen"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"transformationsregeln"},"Transformationsregeln"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Regel 1:")," Jeder Entit\xe4tstyp wird als Tabelle dargestellt. Jede Tabelle ben\xf6tigt einen Prim\xe4rschl\xfcssel."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Regel 2:")," Jede n:m-Beziehung wird durch eine eigene Tabelle dargestellt."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Regel 3:")," Jede 1:n- und 1:1-Beziehung ",(0,r.kt)("strong",{parentName:"li"},"mit")," eigenen Attributen wird wie bei Regel 2 durch eine eigene Tabelle dargestellt."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Regel 4a:")," Jede 1:n-Beziehung ",(0,r.kt)("strong",{parentName:"li"},"ohne")," eigene Attribute wird so dargestellt, dass der Prim\xe4rschl\xfcssel der 1-Entit\xe4tstyps Fremdschl\xfcssel des n-Entit\xe4tstyps wird"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Regel 4b:")," Jede 1:1-Beziehung ",(0,r.kt)("strong",{parentName:"li"},"ohne")," eigene Attribute wird so dargstellt, dass der Prim\xe4rschl\xfcssel des ersten Entit\xe4tstyps beim zweiten Entit\xe4tstyp Prim\xe4r- und Fremdschl\xfcssel zugleich wird."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Regel 4c:")," Sind Regel 4a oder 4b nicht anwendbar, dann wird f\xfcr die Beziehung eine gesonderte Tabelle angelegt.")))}m.isMDXComponent=!0},3177:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Attribut-92ad957cd289f40ba9db9f29525d841c.png"},1577:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Beziehungstyp-4a2f478b30a0e5ce480c2f863dd1a0a0.png"},1292:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Chen-1037b8a46cccca448545fb8c46cec112.png"},8079:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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QAACNQkUTQwRNRozBCAAAQhYQwBRs8aVVAQCEIAABCwRtaINkGl4EIAABCCQBgFLRC0NNOQJAQhAIAYB3rVjwIueFFGLzo6UtQjwMNM2IACBnAggajmBp1gIQAACEEiegCGixqt98q4lRwhAAALlI2CIqJUPPDWGAAQgYC+B/AYqaYjax/379+//8ccf2+svagYBCEAAAsYQ8EpoGqLGl69TcHV+7z0pVIYsIaBJQLfd68bTLJZoBSaAqBXYefFNpyuIz5AcIAABkwggaiZ5A1sgAAEIQCAWAUQtFj4S+wlcddVV6tJLL40NZu+991aTJk1SXbp0iZ1X3AxmzZqljjzySPXpp58qk+yKWy/SQ8BGAsaJGhNixW5mRRS1f//9V73++uvqiy++UKNGjWrjAF1RC8rHm/Gvv/6qhgwZol566SXnz2+//bbaeeednX+LmA8dOtT594knnqhuvvlm1b59+5oNI0y5SbSurMtLwmbyKA8B40StPOjtrGmaopbGC8+XX36pxObJkyerK6+8Ul1yySWRRE0nnzRELWy5cVtd1uXFtZf05SNgmKil0W2Vz6l51tgrajqjjPRtrd+mvKOiOKKmk08aoha23Li845QnnpDQENcI0kOgDgHDRA1fFZ2AeaJWn2icTtqbc9h8kpp+DFtu3PYVpzxjX1kzMiyjYuK6uPDp0xA1Dl8XvllEr0BSoha+AwifQmoZp5OOI2rRCa+cMin7de3Jujxdu4gHAZfA6aefru64446FlUqlcxAV3VkDDl8HkSzA79EkQjnrU+7uRzOmH80cqSXVBLIWmazLS4pT3XyiNvZMjKOQsATSGKkhamG9YFH8NEXNuwvRXf+qVCrqvffeUw8++KB66623lMRZb7311B577KEOPfRQdcABB6i11157JcJLly5VZ5xxhho/fnxN8l5BrrX7MWw+3sLE7k8++UQ9++yzatq0ac5xgd9++82JstVWW6n+/furgw46SO27776qY8eOsex3E7usmpqaHFZSvlvewIED1eGHH64aGxsj8xozZowaPXq0uvbaa518pS1cdNFFqqGh/vuwl+8+++yjJk6cqLp27er40j1K4fpjlVVWUc8995y69957HW6LFy92WO22225qxIgRqnfv3oHlWfS4UZUqBBA1mkWiBLIUtZNOOkmdf/756v77769Zhx122EHddtttaqeddmqNE1aMkha1GTNmOLsspXMOCiJwt9xyi3M+zhWHsPZLGXPnznWE/KmnnqpbZN++fdWNN96odt9990jlTZ8+XR1yyCGO2PznP/9RDz30kNpoo43qlnnfffc5giRByhY7pa5+UTvvvPOU/O+xxx6rml+HDh3Uqaee6rQJ+TehnASMEzVmAordELMSteHDh6vff/9dPfPMM04HJiMzEbDly5erqVOnqtdee60VpJz/evjhh9Xmm2/u/O2ff/5RTzzxhJo3b576/PPPnd8kyKho8ODBzr+7d++uDjvsMLX66quv1Ll6D1+HzUfyFduOO+44R2QkuKPKfv36qVVXXVXJBpJXX321dRQlcbbeemv16KOPqm233TaS/b/88otz3s0VtM0228wZkUm+EmSb/htvvNFqk/wu04zuubkw9fzzzz/V8ccf75QlfpH/F9/UChJ/5MiRzki7Z8+e6vHHH2+tp1fUDj74YNWuXTvndwmS56677qr+/vtvh5eM1t1wyimnqOuvv77NiLPYTxbW6xIwTtR0DSeemQSyEjW39kcffbQz5eUKlvy9paVFvfjii+rkk09u7ajHjRvndOz+oLNGpHP4WicfEWGxwR1piH3XXHONWnfddVcyS+z/8MMPnVGH21nXmsrTKdc7EjrhhBOcMtdff/2VyhThk6nCe+65x/m7vDTcfvvtbYQhqDyxXQ6Ln3XWWU4+MiK97LLLHMGuFj777DNn2vObb75pU6aXu5t2wIABauzYsWr77bdvHUnKYXB5STnnnHNa/S2j29NOO42pSDO7iVStQtRSxbsi8xINP5M4fF3rKip/JydrTrIu1q1btzZelM5VhEze2iXI9Natt96q1lprrZXiBnXSEjkpUZPRozs1J2tAsna0ySabtLV9xVmuJ5980hktxrH/r7/+cgTmzjvvbDMS8hf8/fffK3lJECGVacgpU6Y463veoMPLK1QyIpQ0G2+8cdUnTQTwzDPPdH4TYZJ1UDf4/S2C9sADD7SOML0Zir/lAL1MScvUp8SV/+7Ro0cWTzhlGEQgP1ErUUdvkL9TNyVLUfN3gv7KffTRR85GkZ9++qnmnY06nXRSovb88887U51z5sxRRxxxhLN2VC94xaGW0AfZ711/k7Wtp59+Wu24445Vi5VpRhmtCTeZmpSt0TIlGFbUvFOKklamiA888MA2ZcrI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"},3729:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Phasenmodell-7417ca6c69552876d67451c134619fe8.png"},1813:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/m-n-5f131171d85eb4733a263a8fcf669fc6.png"}}]);