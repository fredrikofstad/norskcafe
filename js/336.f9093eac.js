"use strict";(self["webpackChunknorskcafe"]=self["webpackChunknorskcafe"]||[]).push([[336],{336:(e,t,o)=>{o.r(t),o.d(t,{startStatusTap:()=>c});var r=o(993),s=o(534),n=o(185);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const c=()=>{const e=window;e.addEventListener("statusTap",()=>{(0,r.gv)(()=>{const t=e.innerWidth,o=e.innerHeight,c=document.elementFromPoint(t/2,o/2);if(!c)return;const a=(0,s.a)(c);a&&new Promise(e=>(0,n.c)(a,e)).then(()=>{(0,r.bN)(async()=>{a.style.setProperty("--overflow","hidden"),await(0,s.s)(a,300),a.style.removeProperty("--overflow")})})})})}},534:(e,t,o)=>{o.d(t,{a:()=>u,c:()=>m,g:()=>i,s:()=>h});var r=o(185);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const s="ION-CONTENT",n="ion-content",c=".ion-content-scroll-host",a=`${n}, ${c}`,l=e=>e.tagName===s,i=async e=>l(e)?(await new Promise(t=>(0,r.c)(e,t)),e.getScrollElement()):e,u=e=>e.closest(a),h=(e,t)=>{if(l(e)){const o=e;return o.scrollToTop(t)}return Promise.resolve(e.scrollTo({top:0,left:0,behavior:"smooth"}))},m=(e,t,o,r)=>{if(l(e)){const s=e;return s.scrollByPoint(t,o,r)}return Promise.resolve(e.scrollBy({top:o,left:t,behavior:r>0?"smooth":"auto"}))}}}]);
//# sourceMappingURL=336.f9093eac.js.map