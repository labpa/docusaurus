"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[686],{3905:(e,t,A)=>{A.d(t,{Zo:()=>p,kt:()=>C});var n=A(7294);function r(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function a(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function i(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?a(Object(A),!0).forEach((function(t){r(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):a(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function l(e,t){if(null==e)return{};var A,n,r=function(e,t){if(null==e)return{};var A,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||(r[A]=e[A]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(r[A]=e[A])}return r}var g=n.createContext({}),o=function(e){var t=n.useContext(g),A=t;return e&&(A="function"==typeof e?e(t):i(i({},t),e)),A},p=function(e){var t=o(e.components);return n.createElement(g.Provider,{value:t},e.children)},s="mdxType",E={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var A=e.components,r=e.mdxType,a=e.originalType,g=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=o(A),k=r,C=s["".concat(g,".").concat(k)]||s[k]||E[k]||a;return A?n.createElement(C,i(i({ref:t},p),{},{components:A})):n.createElement(C,i({ref:t},p))}));function C(e,t){var A=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=A.length,i=new Array(a);i[0]=k;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var o=2;o<a;o++)i[o]=A[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,A)}k.displayName="MDXCreateElement"},9792:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>E,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var n=A(7462),r=(A(7294),A(3905));const a={},i="Datenbank",l={unversionedId:"Datenbanken/Datenbanken",id:"Datenbanken/Datenbanken",title:"Datenbank",description:"Datenbankdesign",source:"@site/docs/Datenbanken/Datenbanken.md",sourceDirName:"Datenbanken",slug:"/Datenbanken/",permalink:"/docusaurus/Datenbanken/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Datenbanken/Datenbanken.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Essen im Netz",permalink:"/docusaurus/CSharp/Essen-im-Netz"},next:{title:"JavaScript",permalink:"/docusaurus/JavaScript/"}},g={},o=[{value:"Datenbankdesign",id:"datenbankdesign",level:2},{value:"Phasen des Datenbankentwurfs",id:"phasen-des-datenbankentwurfs",level:2},{value:"Begriffe",id:"begriffe",level:2},{value:"Transformationsregeln",id:"transformationsregeln",level:2}],p={toc:o},s="wrapper";function E(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datenbank"},"Datenbank"),(0,r.kt)("h2",{id:"datenbankdesign"},"Datenbankdesign"),(0,r.kt)("h2",{id:"phasen-des-datenbankentwurfs"},"Phasen des Datenbankentwurfs"),(0,r.kt)("h2",{id:"begriffe"},"Begriffe"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Beschreibung"),(0,r.kt)("th",{parentName:"tr",align:null},"Typ"),(0,r.kt)("th",{parentName:"tr",align:null},"Darstellung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Entit\xe4ten:"),"individuell identifizierbare Objekte der Wirklichkeit"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Entit\xe4tstyp:"),"Typisierung gleicher Entit\xe4ren"),(0,r.kt)("td",{parentName:"tr",align:null},"![Alt text]",(0,r.kt)("img",{alt:"Alt text",src:A(8079).Z,width:"437",height:"214"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Beziehungen:")," Verkn\xfcpfungen/Zusammenh\xe4nge zwischen zwei oder mehreren Entit\xe4ten"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Beziehungstyp:")," Typisierung gleichartiger Beziehungen"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Alt text",src:A(1577).Z,width:"523",height:"220"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Eigenschaften:")," Merkmal, Kennzeichen, Informationsdetail, das einem konkreten Objekt zugeordnet ist"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Attribut:")," Typisierung gleichartiger Eigenschaften"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Alt text",src:A(3177).Z,width:"404",height:"188"}))))),(0,r.kt)("h2",{id:"transformationsregeln"},"Transformationsregeln"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Regel 1:")," Jeder Entit\xe4tstyp wird als Tabelle dargestellt. Jede Tabelle ben\xf6tigt einen Prim\xe4rschl\xfcssel"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Regel 2:"))))}E.isMDXComponent=!0},3177:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/Attribut-92ad957cd289f40ba9db9f29525d841c.png"},1577:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/Beziehungstyp-4a2f478b30a0e5ce480c2f863dd1a0a0.png"},8079:(e,t,A)=>{A.d(t,{Z:()=>n});const n="data:image/png;base64,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QAACNQkUTQwRNRozBCAAAQhYQwBRs8aVVAQCEIAABCwRtaINkGl4EIAABCCQBgFLRC0NNOQJAQhAIAYB3rVjwIueFFGLzo6UtQjwMNM2IACBnAggajmBp1gIQAACEEiegCGixqt98q4lRwhAAALlI2CIqJUPPDWGAAQgYC+B/AYqaYjax/379+//8ccf2+svagYBCEAAAsYQ8EpoGqLGl69TcHV+7z0pVIYsIaBJQLfd68bTLJZoBSaAqBXYefFNpyuIz5AcIAABkwggaiZ5A1sgAAEIQCAWAUQtFj4S+wlcddVV6tJLL40NZu+991aTJk1SXbp0iZ1X3AxmzZqljjzySPXpp58qk+yKWy/SQ8BGAsaJGhNixW5mRRS1f//9V73++uvqiy++UKNGjWrjAF1RC8rHm/Gvv/6qhgwZol566SXnz2+//bbaeeednX+LmA8dOtT594knnqhuvvlm1b59+5oNI0y5SbSurMtLwmbyKA8B40StPOjtrGmaopbGC8+XX36pxObJkyerK6+8Ul1yySWRRE0nnzRELWy5cVtd1uXFtZf05SNgmKil0W2Vz6l51tgrajqjjPRtrd+mvKOiOKKmk08aoha23Li845QnnpDQENcI0kOgDgHDRA1fFZ2AeaJWn2icTtqbc9h8kpp+DFtu3PYVpzxjX1kzMiyjYuK6uPDp0xA1Dl8XvllEr0BSoha+AwifQmoZp5OOI2rRCa+cMin7de3Jujxdu4gHAZfA6aefru64446FlUqlcxAV3VkDDl8HkSzA79EkQjnrU+7uRzOmH80cqSXVBLIWmazLS4pT3XyiNvZMjKOQsATSGKkhamG9YFH8NEXNuwvRXf+qVCrqvffeUw8++KB66623lMRZb7311B577KEOPfRQdcABB6i11157JcJLly5VZ5xxhho/fnxN8l5BrrX7MWw+3sLE7k8++UQ9++yzatq0ac5xgd9++82JstVWW6n+/furgw46SO27776qY8eOsex3E7usmpqaHFZSvlvewIED1eGHH64aGxsj8xozZowaPXq0uvbaa518pS1cdNFFqqGh/vuwl+8+++yjJk6cqLp27er40j1K4fpjlVVWUc8995y69957HW6LFy92WO22225qxIgRqnfv3oHlWfS4UZUqBBA1mkWiBLIUtZNOOkmdf/756v77769Zhx122EHddtttaqeddmqNE1aMkha1GTNmOLsspXMOCiJwt9xyi3M+zhWHsPZLGXPnznWE/KmnnqpbZN++fdWNN96odt9990jlTZ8+XR1yyCGO2PznP/9RDz30kNpoo43qlnnfffc5giRByhY7pa5+UTvvvPOU/O+xxx6rml+HDh3Uqaee6rQJ+TehnASMEzVmAordELMSteHDh6vff/9dPfPMM04HJiMzEbDly5erqVOnqtdee60VpJz/evjhh9Xmm2/u/O2ff/5RTzzxhJo3b576/PPPnd8kyKho8ODBzr+7d++uDjvsMLX66quv1Ll6D1+HzUfyFduOO+44R2QkuKPKfv36qVVXXVXJBpJXX321dRQlcbbeemv16KOPqm233TaS/b/88otz3s0VtM0228wZkUm+EmSb/htvvNFqk/wu04zuubkw9fzzzz/V8ccf75QlfpH/F9/UChJ/5MiRzki7Z8+e6vHHH2+tp1fUDj74YNWuXTvndwmS56677qr+/vtvh5eM1t1wyimnqOuvv77NiLPYTxbW6xIwTtR0DSeemQSyEjW39kcffbQz5eUKlvy9paVFvfjii+rkk09u7ajHjRvndOz+oLNGpHP4WicfEWGxwR1piH3XXHONWnfddVcyS+z/8MMPnVGH21nXmsrTKdc7EjrhhBOcMtdff/2VyhThk6nCe+65x/m7vDTcfvvtbYQhqDyxXQ6Ln3XWWU4+MiK97LLLHMGuFj777DNn2vObb75pU6aXu5t2wIABauzYsWr77bdvHUnKYXB5STnnnHNa/S2j29NOO42pSDO7iVStQtRSxbsi8xINP5M4fF3rKip/JydrTrIu1q1btzZelM5VhEze2iXI9Natt96q1lprrZXiBnXSEjkpUZPRozs1J2tAsna0ySabtLV9xVmuJ5980hktxrH/r7/+cgTmzjvvbDMS8hf8/fffK3lJECGVacgpU6Y463veoMPLK1QyIpQ0G2+8cdUnTQTwzDPPdH4TYZJ1UDf4/S2C9sADD7SOML0Zir/lAL1MScvUp8SV/+7Ro0cWTzhlGEQgP1ErUUdvkL9TNyVLUfN3gv7KffTRR85GkZ9++qnmnY06nXRSovb88887U51z5sxRRxxxhLN2VC94xaGW0AfZ711/k7Wtp59+Wu24445Vi5VpRhmtCTeZmpSt0TIlGFbUvFOKklamiA888MA2ZcrI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"}}]);