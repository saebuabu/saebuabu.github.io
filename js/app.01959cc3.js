(function(){"use strict";var e={5899:function(e,n,t){var r=t(5130),o=t(6768);function i(e,n){const t=(0,o.g2)("router-link"),r=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("nav",null,[(0,o.bF)(t,{to:"/"},{default:(0,o.k6)((()=>n[0]||(n[0]=[(0,o.eW)("Home")]))),_:1}),n[4]||(n[4]=(0,o.eW)(" | ")),(0,o.bF)(t,{to:"/ai"},{default:(0,o.k6)((()=>n[1]||(n[1]=[(0,o.eW)("Ai gedicht")]))),_:1}),n[5]||(n[5]=(0,o.eW)(" | ")),(0,o.bF)(t,{to:"/luister"},{default:(0,o.k6)((()=>n[2]||(n[2]=[(0,o.eW)("Audio calculator")]))),_:1}),n[6]||(n[6]=(0,o.eW)(" | ")),(0,o.bF)(t,{to:"/hydra"},{default:(0,o.k6)((()=>n[3]||(n[3]=[(0,o.eW)("Visuals")]))),_:1})]),(0,o.bF)(r),n[7]||(n[7]=(0,o.Lk)("footer",null,[(0,o.Lk)("div",{class:"footer-column"},[(0,o.Lk)("h4",null,"Abu Saebu is docent, muzikant, developer, tekstschrijver, dichter, docent en coach.")]),(0,o.Lk)("div",{class:"footer-column"},[(0,o.Lk)("a",{href:"https://www.linkedin.com/in/abusaebu/",target:"_blank"},"LinkedIn"),(0,o.Lk)("a",{href:"https://abu.saebu.nl",target:"_blank"},"abu.saebu.nl")])],-1))],64)}var a=t(1241);const u={},l=(0,a.A)(u,[["render",i]]);var c=l,s=t(1387),d=t(4232);const f={class:"container-fluid"},p={class:"row"},v={class:"col-md-12"};function h(e,n,t,r,i,a){return(0,o.uX)(),(0,o.CE)("div",f,[(0,o.Lk)("div",p,[(0,o.Lk)("div",v,[(0,o.Lk)("h1",null,(0,d.v_)(t.msg),1),n[0]||(n[0]=(0,o.Lk)("p",null," Speeltuin met nu AI gedicht tutor, audio calculator en visuals met Hydra. Onderzoek van web API en AI modellen, zoals Google AI en Hydra toegepast op creatieve toepassingen. ",-1)),n[1]||(n[1]=(0,o.Lk)("p",null,"Zowel de content als de html code, css en javascript wordt ingefluisterd door Github Co-pilot",-1)),n[2]||(n[2]=(0,o.Lk)("p",null,[(0,o.eW)("Een interessante vraag is hoe het werk van een Software Developer verandert met een alomtegenwoordige AI assistent op de achtergrond. Zal er een hogere productiviteit van de developer zijn, zullen er minder ontwikkelaars nodig zijn?"),(0,o.Lk)("br"),(0,o.eW)(" Kan veel routine werk dan door laag opgeleide developers geassisteerd door AI worden overgenomen? ")],-1))])])])}var m={name:"StartPage",props:{msg:String}};const g=(0,a.A)(m,[["render",h],["__scopeId","data-v-2047885d"]]);var b=g;const k=[{path:"/",name:"StartPage",component:b,props:{msg:"Welkom"}},{path:"/ai",name:"ai",component:()=>t.e(594).then(t.bind(t,4325))},{path:"/luister",name:"luisteren",component:()=>t.e(594).then(t.bind(t,1498))},{path:"/hydra",name:"hydra",component:()=>t.e(594).then(t.bind(t,5926))}],y=(0,s.aE)({history:(0,s.LA)("/"),routes:k});var w=y;t(9313),t(323);(0,r.Ef)(c).use(w).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var u=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(u=!1,i<a&&(a=i));if(u){e.splice(s--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.c14093b1.js"}}(),function(){t.miniCssF=function(e){return"css/about.31efc6bf.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="aitooling:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+i){u=d;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=r),e[r]=[o];var f=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,r,o,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",t.nc&&(a.nonce=t.nc);var u=function(t){if(a.onerror=a.onload=null,"load"===t.type)o();else{var r=t&&t.type,u=t&&t.target&&t.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+u+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=u,a.parentNode&&a.parentNode.removeChild(a),i(l)}};return a.onerror=a.onload=u,a.href=n,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),u=t.p+a;if(n(a,u))return o();e(r,u,null,o,i)}))},o={524:0};t.f.miniCss=function(e,n){var t={594:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),u=new Error,l=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};t.l(a,l,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],l=r[2],c=0;if(a.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(l)var s=l(t)}for(n&&n(r);c<a.length;c++)i=a[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},r=self["webpackChunkaitooling"]=self["webpackChunkaitooling"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(5899)}));r=t.O(r)})();
//# sourceMappingURL=app.01959cc3.js.map