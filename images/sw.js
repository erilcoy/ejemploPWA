if(!self.define){let e,i={};const o=(o,r)=>(o=new URL(o+".js",r).href,i[o]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=i,document.head.appendChild(e)}else e=o,importScripts(o),i()})).then((()=>{let e=i[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let s={};const c=e=>o(e,t),d={module:{uri:t},exports:s,require:c};i[t]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(n(...e),s)))}}define(["./workbox-dffe52ba"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"ejemplo.png",revision:"337f801d8c65d3e11bd793cb98d1a86c"},{url:"icono.png",revision:"4dbfe58bd10afdd7a949a2983e138468"},{url:"pwa.jpg",revision:"7c674c9f587c558f1277d6c046bcee53"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map