(function(){"use strict";var e={5462:function(e,n,t){var r=t(5130),o=t(6768);function i(e,n){const t=(0,o.g2)("router-link"),r=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("nav",null,[(0,o.bF)(t,{to:"/"},{default:(0,o.k6)((()=>n[0]||(n[0]=[(0,o.eW)("Home")]))),_:1}),n[3]||(n[3]=(0,o.eW)(" | ")),(0,o.bF)(t,{to:"/ai"},{default:(0,o.k6)((()=>n[1]||(n[1]=[(0,o.eW)("Ai gedicht")]))),_:1}),n[4]||(n[4]=(0,o.eW)(" | ")),(0,o.bF)(t,{to:"/luister"},{default:(0,o.k6)((()=>n[2]||(n[2]=[(0,o.eW)("Audio calculator")]))),_:1})]),(0,o.bF)(r)],64)}var u=t(1241);const a={},c=(0,u.A)(a,[["render",i]]);var f=c,l=t(1387),d=t(4232);const s={class:"container-fluid"},p={class:"row"},m={class:"col-md-12"};function v(e,n,t,r,i,u){return(0,o.uX)(),(0,o.CE)("div",s,[(0,o.Lk)("div",p,[(0,o.Lk)("div",m,[(0,o.Lk)("h1",null,(0,d.v_)(t.msg),1),n[0]||(n[0]=(0,o.Lk)("p",null,[(0,o.eW)(" Deze site is gemaakt met AI (Github co-pilot) en applicatie mogelijkheden te onderzoeken met Gemini. "),(0,o.Lk)("br"),(0,o.eW)("Ook de content wordt gegenereerd door AI (Github co-pilot). Gaandewege de komende weken, maanden (nov 2024) zal de site worden uitgebreid met functionaliteiten. ")],-1))])])])}var h={name:"StartPage",props:{msg:String}};const g=(0,u.A)(h,[["render",v],["__scopeId","data-v-211deaf4"]]);var b=g;const k=[{path:"/",name:"StartPage",component:b,props:{msg:"Start Pagina"}},{path:"/ai",name:"ai",component:()=>t.e(594).then(t.bind(t,2914))},{path:"/luister",name:"luisteren",component:()=>t.e(594).then(t.bind(t,2772))}],y=(0,l.aE)({history:(0,l.LA)("/"),routes:k});var w=y;t(9313),t(323);(0,r.Ef)(f).use(w).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.1f2b941a.js"}}(),function(){t.miniCssF=function(e){return"css/about.3baab1b0.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="aitooling:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var d=f[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+i){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var s=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,r,o,i){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",t.nc&&(u.nonce=t.nc);var a=function(t){if(u.onerror=u.onload=null,"load"===t.type)o();else{var r=t&&t.type,a=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+a+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=a,u.parentNode&&u.parentNode.removeChild(u),i(c)}};return u.onerror=u.onload=a,u.href=n,r?r.parentNode.insertBefore(u,r.nextSibling):document.head.appendChild(u),u},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,null,o,i)}))},o={524:0};t.f.miniCss=function(e,n){var t={594:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var l=c(t)}for(n&&n(r);f<u.length;f++)i=u[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},r=self["webpackChunkaitooling"]=self["webpackChunkaitooling"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(5462)}));r=t.O(r)})();
//# sourceMappingURL=app.0085603b.js.map