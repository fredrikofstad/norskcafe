"use strict";(self["webpackChunknorskcafe"]=self["webpackChunknorskcafe"]||[]).push([[504],{33:(e,t,n)=>{
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function i(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}n.d(t,{$3:()=>f,$H:()=>M,BH:()=>W,BX:()=>ne,Bm:()=>_,C4:()=>J,CE:()=>g,CP:()=>c,DY:()=>V,Gv:()=>E,J$:()=>Z,Kg:()=>w,MZ:()=>r,Mp:()=>l,NO:()=>a,Oj:()=>s,PT:()=>O,Qd:()=>k,Ro:()=>U,SU:()=>x,TF:()=>h,Tg:()=>P,Tn:()=>b,Tr:()=>q,We:()=>z,X$:()=>u,Y2:()=>ee,ZH:()=>L,Zf:()=>$,bB:()=>F,cy:()=>p,gd:()=>y,pD:()=>i,rU:()=>D,tE:()=>o,u3:()=>ie,vM:()=>m,v_:()=>se,yI:()=>C,yL:()=>T,yQ:()=>j});const r={},s=[],o=()=>{},a=()=>!1,l=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),c=e=>e.startsWith("onUpdate:"),u=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,g=e=>"[object Map]"===I(e),m=e=>"[object Set]"===I(e),v=e=>"[object Date]"===I(e),y=e=>"[object RegExp]"===I(e),b=e=>"function"===typeof e,w=e=>"string"===typeof e,_=e=>"symbol"===typeof e,E=e=>null!==e&&"object"===typeof e,T=e=>(E(e)||b(e))&&b(e.then)&&b(e.catch),S=Object.prototype.toString,I=e=>S.call(e),$=e=>I(e).slice(8,-1),k=e=>"[object Object]"===I(e),C=e=>w(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,x=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),A=e=>{const t=Object.create(null);return n=>{const i=t[n];return i||(t[n]=e(n))}},N=/-(\w)/g,O=A(e=>e.replace(N,(e,t)=>t?t.toUpperCase():"")),R=/\B([A-Z])/g,P=A(e=>e.replace(R,"-$1").toLowerCase()),L=A(e=>e.charAt(0).toUpperCase()+e.slice(1)),D=A(e=>{const t=e?`on${L(e)}`:"";return t}),M=(e,t)=>!Object.is(e,t),V=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},j=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},F=e=>{const t=parseFloat(e);return isNaN(t)?e:t},U=e=>{const t=w(e)?Number(e):NaN;return isNaN(t)?e:t};let B;const z=()=>B||(B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const H="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",W=i(H);function q(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=w(i)?Q(i):q(i);if(r)for(const e in r)t[e]=r[e]}return t}if(w(e)||E(e))return e}const K=/;(?![^(]*\))/g,G=/:([^]+)/,X=/\/\*[^]*?\*\//g;function Q(e){const t={};return e.replace(X,"").split(K).forEach(e=>{if(e){const n=e.split(G);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function J(e){let t="";if(w(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const i=J(e[n]);i&&(t+=i+" ")}else if(E(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Y="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=i(Y);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=ne(e[i],t[i]);return n}function ne(e,t){if(e===t)return!0;let n=v(e),i=v(t);if(n||i)return!(!n||!i)&&e.getTime()===t.getTime();if(n=_(e),i=_(t),n||i)return e===t;if(n=p(e),i=p(t),n||i)return!(!n||!i)&&te(e,t);if(n=E(e),i=E(t),n||i){if(!n||!i)return!1;const r=Object.keys(e).length,s=Object.keys(t).length;if(r!==s)return!1;for(const n in e){const i=e.hasOwnProperty(n),r=t.hasOwnProperty(n);if(i&&!r||!i&&r||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function ie(e,t){return e.findIndex(e=>ne(e,t))}const re=e=>!(!e||!0!==e["__v_isRef"]),se=e=>w(e)?e:null==e?"":p(e)||E(e)&&(e.toString===S||!b(e.toString))?re(e)?se(e.value):JSON.stringify(e,oe,2):String(e),oe=(e,t)=>re(t)?oe(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],i)=>(e[ae(t,i)+" =>"]=n,e),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ae(e))}:_(t)?ae(t):!E(t)||p(t)||k(t)?t:String(t),ae=(e,t="")=>{var n;return _(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},72:(e,t,n)=>{n.d(t,{cY:()=>w,FA:()=>z,g:()=>B,dM:()=>F,u:()=>u,Uj:()=>c,p9:()=>oe,Fy:()=>T,tD:()=>Y,bD:()=>K,hp:()=>J,T9:()=>y,Tj:()=>m,yU:()=>v,XA:()=>b,mS:()=>h,Ku:()=>ae,ZQ:()=>x,sr:()=>R,zJ:()=>_,c1:()=>O,Im:()=>q,lT:()=>L,zW:()=>V,jZ:()=>A,lV:()=>P,nr:()=>D,Ov:()=>M,gE:()=>E,Am:()=>X,I9:()=>Q,P1:()=>C,eX:()=>j});const i=()=>{},r=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},s=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],l=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(1023&l))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,l=a?e[r+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,o=s?n[e.charAt(r)]:0;++r;const l=r<e.length,c=l?n[e.charAt(r)]:64;++r;const u=r<e.length,h=u?n[e.charAt(r)]:64;if(++r,null==t||null==o||null==c||null==h)throw new a;const d=t<<2|o>>4;if(i.push(d),64!==c){const e=o<<4&240|c>>2;if(i.push(e),64!==h){const e=c<<6&192|h;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l=function(e){const t=r(e);return o.encodeByteArray(t,!0)},c=function(e){return l(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=()=>h().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},p=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},g=()=>{try{return i()||d()||f()||p()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},m=e=>{var t,n;return null===(n=null===(t=g())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},v=e=>{const t=m(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},y=()=>{var e;return null===(e=g())||void 0===e?void 0:e.config},b=e=>{var t;return null===(t=g())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e){try{const t=e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e;return t.endsWith(".cloudworkstations.dev")}catch(t){return!1}}async function E(e){const t=await fetch(e,{credentials:"include"});return t.ok}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}const S={};function I(){const e={prod:[],emulator:[]};for(const t of Object.keys(S))S[t]?e.emulator.push(t):e.prod.push(t);return e}function $(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let k=!1;function C(e,t){if("undefined"===typeof window||"undefined"===typeof document||!_(window.location.host)||S[e]===t||S[e]||k)return;function n(e){return`__firebase__banner__${e}`}S[e]=t;const i="__firebase__banner",r=I(),s=r.prod.length>0;function o(){const e=document.getElementById(i);e&&e.remove()}function a(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}function l(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}function c(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{k=!0,o()},e}function u(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}function h(){const e=$(i),t=n("text"),r=document.getElementById(t)||document.createElement("span"),o=n("learnmore"),h=document.getElementById(o)||document.createElement("a"),d=n("preprendIcon"),f=document.getElementById(d)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;a(t),u(h,o);const n=c();l(f,d),t.append(f,r,h,n),document.body.appendChild(t)}s?(r.innerText="Preview backend disconnected.",f.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(f.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',r.innerText="Preview backend running in this workspace."),r.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",h):h()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function A(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(x())}function N(){var e;const t=null===(e=g())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(i){return!1}}function O(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function R(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function P(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function L(){const e=x();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function D(){return!N()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function M(){return!N()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function V(){try{return"object"===typeof indexedDB}catch(e){return!1}}function j(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}function F(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U="FirebaseError";class B extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=U,Object.setPrototypeOf(this,B.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,z.prototype.create)}}class z{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?H(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new B(i,o,n);return a}}function H(e,t){return e.replace(W,(e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`})}const W=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function K(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(G(n)&&G(s)){if(!K(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function G(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Q(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}}),t}function J(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e,t){const n=new Z(e,t);return n.subscribe.bind(n)}class Z{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=ee(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=te),void 0===i.error&&(i.error=te),void 0===i.complete&&(i.complete=te);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}}),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ee(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function te(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ne=1e3,ie=2,re=144e5,se=.5;function oe(e,t=ne,n=ie){const i=t*Math.pow(n,e),r=Math.round(se*i*(Math.random()-.5)*2);return Math.min(re,i+r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ae(e){return e&&e._delegate?e._delegate:e}},125:(e,t,n)=>{n.d(t,{h1:()=>c,uA:()=>r});var i=n(72);class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},152:()=>{},185:(e,t,n)=>{n.d(t,{a:()=>c,b:()=>u,c:()=>r,d:()=>o,f:()=>d,i:()=>l,k:()=>s,n:()=>f,q:()=>p,r:()=>h,s:()=>g});var i=n(362);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const r=(e,t)=>{e.componentOnReady?e.componentOnReady().then(e=>t(e)):h(()=>t(e))},s=e=>void 0!==e.componentOnReady,o=(e,t=[])=>{const n={};return t.forEach(t=>{if(e.hasAttribute(t)){const i=e.getAttribute(t);null!==i&&(n[t]=e.getAttribute(t)),e.removeAttribute(t)}}),n},a=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],l=(e,t)=>{let n=a;return o(e,n)},c=(e,t,n,i)=>e.addEventListener(t,n,i),u=(e,t,n,i)=>e.removeEventListener(t,n,i),h=e=>"function"===typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(e):"function"===typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e),d=(e,t,n)=>Math.max(e,Math.min(t,n)),f=(e,t)=>{if(!e){const e="ASSERT: "+t;throw(0,i.a)(e),new Error(e)}},p=e=>{if(e){const t=e.changedTouches;if(t&&t.length>0){const e=t[0];return{x:e.clientX,y:e.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},g=(e,t)=>{if(null!==e&&void 0!==e||(e={}),null!==t&&void 0!==t||(t={}),e===t)return!0;const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(const i of n){if(!(i in t))return!1;if(e[i]!==t[i])return!1}return!0}},202:()=>{},220:(e,t,n)=>{n.d(t,{LA:()=>le,Ur:()=>Be,aE:()=>rt,lq:()=>at,nU:()=>je,rd:()=>ot});var i=n(641),r=n(953);
/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof document;function o(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function a(e){return e.__esModule||"Module"===e[Symbol.toStringTag]||e.default&&o(e.default)}const l=Object.assign;function c(e,t){const n={};for(const i in t){const r=t[i];n[i]=h(r)?r.map(e):e(r)}return n}const u=()=>{},h=Array.isArray;const d=/#/g,f=/&/g,p=/\//g,g=/=/g,m=/\?/g,v=/\+/g,y=/%5B/g,b=/%5D/g,w=/%5E/g,_=/%60/g,E=/%7B/g,T=/%7C/g,S=/%7D/g,I=/%20/g;function $(e){return encodeURI(""+e).replace(T,"|").replace(y,"[").replace(b,"]")}function k(e){return $(e).replace(E,"{").replace(S,"}").replace(w,"^")}function C(e){return $(e).replace(v,"%2B").replace(I,"+").replace(d,"%23").replace(f,"%26").replace(_,"`").replace(E,"{").replace(S,"}").replace(w,"^")}function x(e){return C(e).replace(g,"%3D")}function A(e){return $(e).replace(d,"%23").replace(m,"%3F")}function N(e){return null==e?"":A(e).replace(p,"%2F")}function O(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const R=/\/$/,P=e=>e.replace(R,"");function L(e,t,n="/"){let i,r={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),r=e(s)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=z(null!=i?i:t,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:O(o)}}function D(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function M(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function V(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&j(t.matched[i],n.matched[r])&&F(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function j(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function F(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!U(e[n],t[n]))return!1;return!0}function U(e,t){return h(e)?B(e,t):h(t)?B(t,e):e===t}function B(e,t){return h(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function z(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),r=i[i.length-1];".."!==r&&"."!==r||i.push("");let s,o,a=n.length-1;for(s=0;s<i.length;s++)if(o=i[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+i.slice(s).join("/")}const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var W,q;(function(e){e["pop"]="pop",e["push"]="push"})(W||(W={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(q||(q={}));function K(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),P(e)}const G=/^[^#]+#/;function X(e,t){return e.replace(G,"#")+t}function Q(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const J=()=>({left:window.scrollX,top:window.scrollY});function Y(e){let t;if("el"in e){const n=e.el,i="string"===typeof n&&n.startsWith("#");0;const r="string"===typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=Q(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function Z(e,t){const n=history.state?history.state.position-t:-1;return n+e}const ee=new Map;function te(e,t){ee.set(e,t)}function ne(e){const t=ee.get(e);return ee.delete(e),t}let ie=()=>location.protocol+"//"+location.host;function re(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let t=r.includes(e.slice(s))?e.slice(s).length:1,n=r.slice(t);return"/"!==n[0]&&(n="/"+n),M(n,"")}const o=M(n,e);return o+i+r}function se(e,t,n,i){let r=[],s=[],o=null;const a=({state:s})=>{const a=re(e,location),l=n.value,c=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===l)return void(o=null);u=c?s.position-c.position:0}else i(a);r.forEach(e=>{e(n.value,l,{delta:u,type:W.pop,direction:u?u>0?q.forward:q.back:q.unknown})})};function c(){o=n.value}function u(e){r.push(e);const t=()=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(l({},e.state,{scroll:J()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function oe(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?J():null}}function ae(e){const{history:t,location:n}=window,i={value:re(e,n)},r={value:t.state};function s(i,s,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:ie()+e+i;try{t[o?"replaceState":"pushState"](s,"",l),r.value=s}catch(c){console.error(c),n[o?"replace":"assign"](l)}}function o(e,n){const o=l({},t.state,oe(r.value.back,e,r.value.forward,!0),n,{position:r.value.position});s(e,o,!0),i.value=e}function a(e,n){const o=l({},r.value,t.state,{forward:e,scroll:J()});s(o.current,o,!0);const a=l({},oe(i.value,e,null),{position:o.position+1},n);s(e,a,!1),i.value=e}return r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:i,state:r,push:a,replace:o}}function le(e){e=K(e);const t=ae(e),n=se(e,t.state,t.location,t.replace);function i(e,t=!0){t||n.pauseListeners(),history.go(e)}const r=l({location:"",base:e,go:i,createHref:X.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function ce(e){return"string"===typeof e||e&&"object"===typeof e}function ue(e){return"string"===typeof e||"symbol"===typeof e}const he=Symbol("");var de;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(de||(de={}));function fe(e,t){return l(new Error,{type:e,[he]:!0},t)}function pe(e,t){return e instanceof Error&&he in e&&(null==t||!!(e.type&t))}const ge="[^/]+?",me={sensitive:!1,strict:!1,start:!0,end:!0},ve=/[.+*?^${}()[\]/\\]/g;function ye(e,t){const n=l({},me,t),i=[];let r=n.start?"^":"";const s=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let t=0;t<l.length;t++){const i=l[t];let o=40+(n.sensitive?.25:0);if(0===i.type)t||(r+="/"),r+=i.value.replace(ve,"\\$&"),o+=40;else if(1===i.type){const{value:e,repeatable:n,optional:a,regexp:c}=i;s.push({name:e,repeatable:n,optional:a});const h=c||ge;if(h!==ge){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),r+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}i.push(e)}if(n.strict&&n.end){const e=i.length-1;i[e][i[e].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let i=1;i<t.length;i++){const e=t[i]||"",r=s[i-1];n[r.name]=e&&r.repeatable?e.split("/"):e}return n}function c(t){let n="",i=!1;for(const r of e){i&&n.endsWith("/")||(n+="/"),i=!1;for(const e of r)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,l=s in t?t[s]:"";if(h(l)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const c=h(l)?l.join("/"):l;if(!c){if(!a)throw new Error(`Missing required param "${s}"`);r.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=c}}return n||"/"}return{re:o,score:i,keys:s,parse:a,stringify:c}}function be(e,t){let n=0;while(n<e.length&&n<t.length){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function we(e,t){let n=0;const i=e.score,r=t.score;while(n<i.length&&n<r.length){const e=be(i[n],r[n]);if(e)return e;n++}if(1===Math.abs(r.length-i.length)){if(_e(i))return 1;if(_e(r))return-1}return r.length-i.length}function _e(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ee={type:0,value:""},Te=/[a-zA-Z0-9_]/;function Se(e){if(!e)return[[]];if("/"===e)return[[Ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a,l=0,c="",u="";function h(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function d(){c+=a}while(l<e.length)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:"("===a?n=2:Te.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state");break}else i=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function Ie(e,t,n){const i=ye(Se(e.path),n);const r=l(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf===!t.record.aliasOf&&t.children.push(r),r}function $e(e,t){const n=[],i=new Map;function r(e){return i.get(e)}function s(e,n,i){const r=!i,a=Ce(e);a.aliasOf=i&&i.record;const h=Oe(t,e),d=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(Ce(l({},a,{components:i?i.record.components:a.components,path:e,aliasOf:i?i.record:a})))}let f,p;for(const t of d){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,i="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&i+l)}if(f=Ie(t,n,h),i?i.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),r&&e.name&&!Ae(f)&&o(e.name)),Le(f)&&c(f),a.children){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],f,i&&i.children[t])}i=i||f}return p?()=>{o(p)}:u}function o(e){if(ue(e)){const t=i.get(e);t&&(i.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&i.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function c(e){const t=Re(e,n);n.splice(t,0,e),e.record.name&&!Ae(e)&&i.set(e.record.name,e)}function h(e,t){let r,s,o,a={};if("name"in e&&e.name){if(r=i.get(e.name),!r)throw fe(1,{location:e});0,o=r.record.name,a=l(ke(t.params,r.keys.filter(e=>!e.optional).concat(r.parent?r.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&ke(e.params,r.keys.map(e=>e.name))),s=r.stringify(a)}else if(null!=e.path)s=e.path,r=n.find(e=>e.re.test(s)),r&&(a=r.parse(s),o=r.record.name);else{if(r=t.name?i.get(t.name):n.find(e=>e.re.test(t.path)),!r)throw fe(1,{location:e,currentLocation:t});o=r.record.name,a=l({},t.params,e.params),s=r.stringify(a)}const c=[];let u=r;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:c,meta:Ne(c)}}function d(){n.length=0,i.clear()}return t=Oe({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>s(e)),{addRoute:s,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:a,getRecordMatcher:r}}function ke(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function Ce(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:xe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function xe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]="object"===typeof n?n[i]:n;return t}function Ae(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ne(e){return e.reduce((e,t)=>l(e,t.meta),{})}function Oe(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function Re(e,t){let n=0,i=t.length;while(n!==i){const r=n+i>>1,s=we(e,t[r]);s<0?i=r:n=r+1}const r=Pe(e);return r&&(i=t.lastIndexOf(r,i-1)),i}function Pe(e){let t=e;while(t=t.parent)if(Le(t)&&0===we(e,t))return t}function Le({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function De(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],i=(n?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const e=i[r].replace(v," "),n=e.indexOf("="),s=O(n<0?e:e.slice(0,n)),o=n<0?null:O(e.slice(n+1));if(s in t){let e=t[s];h(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Me(e){let t="";for(let n in e){const i=e[n];if(n=x(n),null==i){void 0!==i&&(t+=(t.length?"&":"")+n);continue}const r=h(i)?i.map(e=>e&&C(e)):[i&&C(i)];r.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Ve(e){const t={};for(const n in e){const i=e[n];void 0!==i&&(t[n]=h(i)?i.map(e=>null==e?null:""+e):null==i?i:""+i)}return t}const je=Symbol(""),Fe=Symbol(""),Ue=Symbol(""),Be=Symbol(""),ze=Symbol("");function He(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function We(e,t,n,i,r,s=e=>e()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=e=>{!1===e?l(fe(4,{from:n,to:t})):e instanceof Error?l(e):ce(e)?l(fe(2,{from:t,to:e})):(o&&i.enterCallbacks[r]===o&&"function"===typeof e&&o.push(e),a())},u=s(()=>e.call(i&&i.instances[r],t,n,c));let h=Promise.resolve(u);e.length<3&&(h=h.then(c)),h.catch(e=>l(e))})}function qe(e,t,n,i,r=e=>e()){const s=[];for(const l of e){0;for(const e in l.components){let c=l.components[e];if("beforeRouteEnter"===t||l.instances[e])if(o(c)){const o=c.__vccOpts||c,a=o[t];a&&s.push(We(a,n,i,l,e,r))}else{let o=c();0,s.push(()=>o.then(s=>{if(!s)throw new Error(`Couldn't resolve component "${e}" at "${l.path}"`);const o=a(s)?s.default:s;l.mods[e]=s,l.components[e]=o;const c=o.__vccOpts||o,u=c[t];return u&&We(u,n,i,l,e,r)()}))}}}return s}function Ke(e){const t=(0,i.WQ)(Ue),n=(0,i.WQ)(Be);const s=(0,i.EW)(()=>{const n=(0,r.R1)(e.to);return t.resolve(n)}),o=(0,i.EW)(()=>{const{matched:e}=s.value,{length:t}=e,i=e[t-1],r=n.matched;if(!i||!r.length)return-1;const o=r.findIndex(j.bind(null,i));if(o>-1)return o;const a=Ze(e[t-2]);return t>1&&Ze(i)===a&&r[r.length-1].path!==a?r.findIndex(j.bind(null,e[t-2])):o}),a=(0,i.EW)(()=>o.value>-1&&Ye(n.params,s.value.params)),l=(0,i.EW)(()=>o.value>-1&&o.value===n.matched.length-1&&F(n.params,s.value.params));function c(n={}){if(Je(n)){const n=t[(0,r.R1)(e.replace)?"replace":"push"]((0,r.R1)(e.to)).catch(u);return e.viewTransition&&"undefined"!==typeof document&&"startViewTransition"in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:s,href:(0,i.EW)(()=>s.value.href),isActive:a,isExactActive:l,navigate:c}}function Ge(e){return 1===e.length?e[0]:e}const Xe=(0,i.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ke,setup(e,{slots:t}){const n=(0,r.Kh)(Ke(e)),{options:s}=(0,i.WQ)(Ue),o=(0,i.EW)(()=>({[et(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[et(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&Ge(t.default(n));return e.custom?r:(0,i.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Qe=Xe;function Je(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ye(e,t){for(const n in t){const i=t[n],r=e[n];if("string"===typeof i){if(i!==r)return!1}else if(!h(r)||r.length!==i.length||i.some((e,t)=>e!==r[t]))return!1}return!0}function Ze(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const et=(e,t,n)=>null!=e?e:null!=t?t:n,tt=(0,i.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,i.WQ)(ze),o=(0,i.EW)(()=>e.route||s.value),a=(0,i.WQ)(Fe,0),c=(0,i.EW)(()=>{let e=(0,r.R1)(a);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e}),u=(0,i.EW)(()=>o.value.matched[c.value]);(0,i.Gt)(Fe,(0,i.EW)(()=>c.value+1)),(0,i.Gt)(je,u),(0,i.Gt)(ze,o);const h=(0,r.KR)();return(0,i.wB)(()=>[h.value,u.value,e.name],([e,t,n],[i,r,s])=>{t&&(t.instances[n]=e,r&&r!==t&&e&&e===i&&(t.leaveGuards.size||(t.leaveGuards=r.leaveGuards),t.updateGuards.size||(t.updateGuards=r.updateGuards))),!e||!t||r&&j(t,r)&&i||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const r=o.value,s=e.name,a=u.value,c=a&&a.components[s];if(!c)return nt(n.default,{Component:c,route:r});const d=a.props[s],f=d?!0===d?r.params:"function"===typeof d?d(r):d:null,p=e=>{e.component.isUnmounted&&(a.instances[s]=null)},g=(0,i.h)(c,l({},f,t,{onVnodeUnmounted:p,ref:h}));return nt(n.default,{Component:g,route:r})||g}}});function nt(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const it=tt;function rt(e){const t=$e(e.routes,e),n=e.parseQuery||De,o=e.stringifyQuery||Me,a=e.history;const d=He(),f=He(),p=He(),g=(0,r.IJ)(H);let m=H;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=c.bind(null,e=>""+e),y=c.bind(null,N),b=c.bind(null,O);function w(e,n){let i,r;return ue(e)?(i=t.getRecordMatcher(e),r=n):r=e,t.addRoute(r,i)}function _(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function E(){return t.getRoutes().map(e=>e.record)}function T(e){return!!t.getRecordMatcher(e)}function S(e,i){if(i=l({},i||g.value),"string"===typeof e){const r=L(n,e,i.path),s=t.resolve({path:r.path},i),o=a.createHref(r.fullPath);return l(r,s,{params:b(s.params),hash:O(r.hash),redirectedFrom:void 0,href:o})}let r;if(null!=e.path)r=l({},e,{path:L(n,e.path,i.path).path});else{const t=l({},e.params);for(const e in t)null==t[e]&&delete t[e];r=l({},e,{params:y(t)}),i.params=y(i.params)}const s=t.resolve(r,i),c=e.hash||"";s.params=v(b(s.params));const u=D(o,l({},e,{hash:k(c),path:s.path})),h=a.createHref(u);return l({fullPath:u,hash:c,query:o===Me?Ve(e.query):e.query||{}},s,{redirectedFrom:void 0,href:h})}function I(e){return"string"===typeof e?L(n,e,g.value.path):l({},e)}function $(e,t){if(m!==e)return fe(8,{from:t,to:e})}function C(e){return R(e)}function x(e){return C(l(I(e),{replace:!0}))}function A(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let i="function"===typeof n?n(e):n;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=I(i):{path:i},i.params={}),l({query:e.query,hash:e.hash,params:null!=i.path?{}:e.params},i)}}function R(e,t){const n=m=S(e),i=g.value,r=e.state,s=e.force,a=!0===e.replace,c=A(n);if(c)return R(l(I(c),{state:"object"===typeof c?l({},r,c.state):r,force:s,replace:a}),t||n);const u=n;let h;return u.redirectedFrom=t,!s&&V(o,i,n)&&(h=fe(16,{to:u,from:i}),ie(i,i,!0,!1)),(h?Promise.resolve(h):j(u,i)).catch(e=>pe(e)?pe(e,2)?e:ee(e):X(e,u,i)).then(e=>{if(e){if(pe(e,2))return R(l({replace:a},I(e.to),{state:"object"===typeof e.to?l({},r,e.to.state):r,force:s}),t||u)}else e=U(u,i,!0,a,r);return F(u,i,e),e})}function P(e,t){const n=$(e,t);return n?Promise.reject(n):Promise.resolve()}function M(e){const t=oe.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function j(e,t){let n;const[i,r,s]=st(e,t);n=qe(i.reverse(),"beforeRouteLeave",e,t);for(const a of i)a.leaveGuards.forEach(i=>{n.push(We(i,e,t))});const o=P.bind(null,e,t);return n.push(o),le(n).then(()=>{n=[];for(const i of d.list())n.push(We(i,e,t));return n.push(o),le(n)}).then(()=>{n=qe(r,"beforeRouteUpdate",e,t);for(const i of r)i.updateGuards.forEach(i=>{n.push(We(i,e,t))});return n.push(o),le(n)}).then(()=>{n=[];for(const i of s)if(i.beforeEnter)if(h(i.beforeEnter))for(const r of i.beforeEnter)n.push(We(r,e,t));else n.push(We(i.beforeEnter,e,t));return n.push(o),le(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=qe(s,"beforeRouteEnter",e,t,M),n.push(o),le(n))).then(()=>{n=[];for(const i of f.list())n.push(We(i,e,t));return n.push(o),le(n)}).catch(e=>pe(e,8)?e:Promise.reject(e))}function F(e,t,n){p.list().forEach(i=>M(()=>i(e,t,n)))}function U(e,t,n,i,r){const o=$(e,t);if(o)return o;const c=t===H,u=s?history.state:{};n&&(i||c?a.replace(e.fullPath,l({scroll:c&&u&&u.scroll},r)):a.push(e.fullPath,r)),g.value=e,ie(e,t,n,c),ee()}let B;function z(){B||(B=a.listen((e,t,n)=>{if(!ae.listening)return;const i=S(e),r=A(i);if(r)return void R(l(r,{replace:!0,force:!0}),i).catch(u);m=i;const o=g.value;s&&te(Z(o.fullPath,n.delta),J()),j(i,o).catch(e=>pe(e,12)?e:pe(e,2)?(R(l(I(e.to),{force:!0}),i).then(e=>{pe(e,20)&&!n.delta&&n.type===W.pop&&a.go(-1,!1)}).catch(u),Promise.reject()):(n.delta&&a.go(-n.delta,!1),X(e,i,o))).then(e=>{e=e||U(i,o,!1),e&&(n.delta&&!pe(e,8)?a.go(-n.delta,!1):n.type===W.pop&&pe(e,20)&&a.go(-1,!1)),F(i,o,e)}).catch(u)}))}let q,K=He(),G=He();function X(e,t,n){ee(e);const i=G.list();return i.length?i.forEach(i=>i(e,t,n)):console.error(e),Promise.reject(e)}function Q(){return q&&g.value!==H?Promise.resolve():new Promise((e,t)=>{K.add([e,t])})}function ee(e){return q||(q=!e,z(),K.list().forEach(([t,n])=>e?n(e):t()),K.reset()),e}function ie(t,n,r,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const l=!r&&ne(Z(t.fullPath,0))||(o||!r)&&history.state&&history.state.scroll||null;return(0,i.dY)().then(()=>a(t,n,l)).then(e=>e&&Y(e)).catch(e=>X(e,t,n))}const re=e=>a.go(e);let se;const oe=new Set,ae={currentRoute:g,listening:!0,addRoute:w,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:T,getRoutes:E,resolve:S,options:e,push:C,replace:x,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:f.add,afterEach:p.add,onError:G.add,isReady:Q,install(e){const t=this;e.component("RouterLink",Qe),e.component("RouterView",it),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,r.R1)(g)}),s&&!se&&g.value===H&&(se=!0,C(a.location).catch(e=>{0}));const n={};for(const r in H)Object.defineProperty(n,r,{get:()=>g.value[r],enumerable:!0});e.provide(Ue,t),e.provide(Be,(0,r.Gc)(n)),e.provide(ze,g);const i=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(m=H,B&&B(),B=null,g.value=H,se=!1,q=!1),i()}}};function le(e){return e.reduce((e,t)=>e.then(()=>M(t)),Promise.resolve())}return ae}function st(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find(e=>j(e,s))?i.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find(e=>j(e,a))||r.push(a))}return[n,i,r]}function ot(){return(0,i.WQ)(Ue)}function at(e){return(0,i.WQ)(Be)}},223:(e,t,n)=>{n.d(t,{Wp:()=>i.Wp});var i=n(461),r="firebase",s="11.10.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KO)(r,s,"app")},256:()=>{},262:(e,t)=>{t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n}},297:(e,t,n)=>{n.d(t,{P2:()=>_});const i=(e,t)=>t.some(t=>e instanceof t);let r,s;function o(){return r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a(){return s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l=new WeakMap,c=new WeakMap,u=new WeakMap,h=new WeakMap,d=new WeakMap;function f(e){const t=new Promise((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(b(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&l.set(t,e)}).catch(()=>{}),d.set(t,e),t}function p(e){if(c.has(e))return;const t=new Promise((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});c.set(e,t)}let g={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||u.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return b(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function m(e){g=e(g)}function v(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?a().includes(e)?function(...t){return e.apply(w(this),t),b(l.get(this))}:function(...t){return b(e.apply(w(this),t))}:function(t,...n){const i=e.call(w(this),t,...n);return u.set(i,t.sort?t.sort():[t]),b(i)}}function y(e){return"function"===typeof e?v(e):(e instanceof IDBTransaction&&p(e),i(e,o())?new Proxy(e,g):e)}function b(e){if(e instanceof IDBRequest)return f(e);if(h.has(e))return h.get(e);const t=y(e);return t!==e&&(h.set(e,t),d.set(t,e)),t}const w=e=>d.get(e);function _(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=b(o);return i&&o.addEventListener("upgradeneeded",e=>{i(b(o.result),e.oldVersion,e.newVersion,b(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}const E=["get","getKey","getAll","getAllKeys","count"],T=["put","add","delete","clear"],S=new Map;function I(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(S.get(t))return S.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=T.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!E.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return S.set(t,s),s}m(e=>({...e,get:(t,n,i)=>I(t,n)||e.get(t,n,i),has:(t,n)=>!!I(t,n)||e.has(t,n)}))},326:()=>{},362:(e,t,n)=>{n.d(t,{a:()=>f,b:()=>s,c:()=>r,d:()=>a,p:()=>d,s:()=>o});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
class i{constructor(){this.m=new Map}reset(e){this.m=new Map(Object.entries(e))}get(e,t){const n=this.m.get(e);return void 0!==n?n:t}getBoolean(e,t=!1){const n=this.m.get(e);return void 0===n?t:"string"===typeof n?"true"===n:!!n}getNumber(e,t){const n=parseFloat(this.m.get(e));return isNaN(n)?void 0!==t?t:NaN:n}set(e,t){this.m.set(e,t)}}const r=new i,s=e=>{try{const t=e.sessionStorage.getItem(u);return null!==t?JSON.parse(t):{}}catch(t){return{}}},o=(e,t)=>{try{e.sessionStorage.setItem(u,JSON.stringify(t))}catch(n){return}},a=e=>{const t={};return e.location.search.slice(1).split("&").map(e=>e.split("=")).map(([e,t])=>{try{return[decodeURIComponent(e),decodeURIComponent(t)]}catch(n){return["",""]}}).filter(([e])=>l(e,c)).map(([e,t])=>[e.slice(c.length),t]).forEach(([e,n])=>{t[e]=n}),t},l=(e,t)=>e.substr(0,t.length)===t,c="ionic:",u="ionic-persist-config";var h;(function(e){e["OFF"]="OFF",e["ERROR"]="ERROR",e["WARN"]="WARN"})(h||(h={}));const d=(e,...t)=>{const n=r.get("logLevel",h.WARN);if([h.WARN].includes(n))return console.warn(`[Ionic Warning]: ${e}`,...t)},f=(e,...t)=>{const n=r.get("logLevel",h.ERROR);if([h.ERROR,h.WARN].includes(n))return console.error(`[Ionic Error]: ${e}`,...t)}},400:()=>{},415:(e,t,n)=>{n.d(t,{HF:()=>$t,xI:()=>Qi,df:()=>Fn});var i=n(461),r=n(72),s=n(424);function o(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(125);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=l,u=new r.FA("auth","Firebase",l()),h=new s.Vy("@firebase/auth");function d(e,...t){h.logLevel<=s.$b.WARN&&h.warn(`Auth (${i.MF}): ${e}`,...t)}function f(e,...t){h.logLevel<=s.$b.ERROR&&h.error(`Auth (${i.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw b(e,...t)}function g(e,...t){return b(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},c()),{[t]:n}),s=new r.FA("auth","Firebase",i);return s.create(t,{appName:e.name})}function v(e){return m(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function y(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&p(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function b(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return u.create(e,...t)}function w(e,t,...n){if(!e)throw b(t,...n)}function _(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function E(e,t){e||_(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function S(){return"http:"===I()||"https:"===I()}function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,r.sr)()||"connection"in navigator))||navigator.onLine}function k(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,E(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.jZ)()||(0,r.lV)()}get(){return $()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){E(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void _("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void _("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void _("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},O=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],R=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,i,s={}){return D(e,s,async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.Am)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const c=Object.assign({method:t,headers:l},s);return(0,r.c1)()||(c.referrerPolicy="no-referrer"),e.emulatorConfig&&(0,r.zJ)(e.emulatorConfig.host)&&(c.credentials="include"),A.fetch()(await V(e,e.config.apiHost,n,a),c)})}async function D(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},N),t);try{const t=new F(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw U(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw U(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw U(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);p(e,a)}}catch(s){if(s instanceof r.g)throw s;p(e,"network-request-failed",{message:String(s)})}}async function M(e,t,n,i,r={}){const s=await L(e,t,n,i,r);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function V(e,t,n,i){const r=`${t}${n}?${i}`,s=e,o=s.config.emulator?x(e.config,r):`${e.config.apiScheme}://${r}`;if(O.includes(n)&&(await s._persistenceManagerAvailable,"COOKIE"===s._getPersistenceType())){const e=s._getPersistence();return e._getFinalTarget(o).toString()}return o}function j(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(g(this.auth,"network-request-failed")),R.get())})}}function U(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=g(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e){return void 0!==e&&void 0!==e.enterprise}class z{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return j(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t){return L(e,"GET","/v2/recaptchaConfig",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function q(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t=!1){const n=(0,r.Ku)(e),i=await n.getIdToken(t),s=Q(i);w(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:K(X(s.auth_time)),issuedAtTime:K(X(s.iat)),expirationTime:K(X(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function X(e){return 1e3*Number(e)}function Q(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.u)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function J(e){const t=Q(e);return w(t,"internal-error"),w("undefined"!==typeof t.exp,"internal-error"),w("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.g&&Z(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Z({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=K(this.lastLoginAt),this.creationTime=K(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Y(e,q(n,{idToken:i}));w(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?se(s.providerUserInfo):[],a=re(e.providerData,o),l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!l&&c,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new te(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function ie(e){const t=(0,r.Ku)(e);await ne(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function re(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function se(e){return e.map(e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(e,t){const n=await D(e,{},async()=>{const n=(0,r.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=await V(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:n};return e.emulatorConfig&&(0,r.zJ)(e.emulatorConfig.host)&&(l.credentials="include"),A.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ae(e,t){return L(e,"POST","/v2/accounts:revokeToken",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w("undefined"!==typeof e.idToken,"internal-error"),w("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):J(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){w(0!==e.length,"internal-error");const t=J(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(w(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await oe(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new le;return n&&(w("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(w("string"===typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(w("number"===typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new le,this.toJSON())}_performRefresh(){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t){w("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ue{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ee(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new te(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Y(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return G(this,e)}reload(){return ie(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ue(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ne(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,i.xZ)(this.auth.app))return Promise.reject(v(this.auth));const e=await this.getIdToken();return await Y(this,W(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:b,isAnonymous:_,providerData:E,stsTokenManager:T}=t;w(y&&T,e,"internal-error");const S=le.fromJSON(this.name,T);w("string"===typeof y,e,"internal-error"),ce(u,e.name),ce(h,e.name),w("boolean"===typeof b,e,"internal-error"),w("boolean"===typeof _,e,"internal-error"),ce(d,e.name),ce(f,e.name),ce(p,e.name),ce(g,e.name),ce(m,e.name),ce(v,e.name);const I=new ue({uid:y,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:m,lastLoginAt:v});return E&&Array.isArray(E)&&(I.providerData=E.map(e=>Object.assign({},e))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const i=new le;i.updateFromServerResponse(t);const r=new ue({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ne(r),r}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];w(void 0!==i.localId,"internal-error");const r=void 0!==i.providerUserInfo?se(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(null===r||void 0===r?void 0:r.length),o=new le;o.updateFromIdToken(n);const a=new ue({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:s}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new te(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(null===r||void 0===r?void 0:r.length)};return Object.assign(a,l),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=new Map;function de(e){E(e instanceof Function,"Expected a class definition");let t=he.get(e);return t?(E(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,he.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fe.type="NONE";const pe=fe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e,t,n){return`firebase:${e}:${t}:${n}`}class me{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ge(this.userKey,i.apiKey,r),this.fullPersistenceKey=ge("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"===typeof e){const t=await q(this.auth,{idToken:e}).catch(()=>{});return t?ue._fromGetAccountInfoResponse(this.auth,t,e):null}return ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new me(de(pe),e,n);const i=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let r=i[0]||de(pe);const s=ge(n,e.config.apiKey,e.name);let o=null;for(const c of t)try{const t=await c._get(s);if(t){let n;if("string"===typeof t){const i=await q(e,{idToken:t}).catch(()=>{});if(!i)break;n=await ue._fromGetAccountInfoResponse(e,i,t)}else n=ue._fromJSON(e,t);c!==r&&(o=n),r=c;break}}catch(l){}const a=i.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(s)}catch(l){}})),new me(r,e,n)):new me(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_e(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ye(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Te(t))return"Blackberry";if(Se(t))return"Webos";if(be(t))return"Safari";if((t.includes("chrome/")||we(t))&&!t.includes("edge/"))return"Chrome";if(Ee(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ye(e=(0,r.ZQ)()){return/firefox\//i.test(e)}function be(e=(0,r.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function we(e=(0,r.ZQ)()){return/crios\//i.test(e)}function _e(e=(0,r.ZQ)()){return/iemobile/i.test(e)}function Ee(e=(0,r.ZQ)()){return/android/i.test(e)}function Te(e=(0,r.ZQ)()){return/blackberry/i.test(e)}function Se(e=(0,r.ZQ)()){return/webos/i.test(e)}function Ie(e=(0,r.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function $e(e=(0,r.ZQ)()){var t;return Ie(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ke(){return(0,r.lT)()&&10===document.documentMode}function Ce(e=(0,r.ZQ)()){return Ie(e)||Ee(e)||Se(e)||Te(e)||/windows phone/i.test(e)||_e(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(e,t=[]){let n;switch(e){case"Browser":n=ve((0,r.ZQ)());break;case"Worker":n=`${ve((0,r.ZQ)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.MF}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,i)=>{try{const i=e(t);n(i)}catch(r){i(r)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(e,t={}){return L(e,"GET","/v2/passwordPolicy",P(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=6;class Re{constructor(e){var t,n,i,r;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:Oe,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(r=e.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,r,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsLowercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(r=a.containsUppercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new De(this),this.idTokenSubscription=new De(this),this.beforeStateQueue=new Ae(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=de(t)),this._initializationPromise=this.queue(async()=>{var n,i,r;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),null===(n=this._resolvePersistenceManagerAvailable)||void 0===n||n.call(this),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await q(this,{idToken:e}),n=await ue._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,i.xZ)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==i||!(null===o||void 0===o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ne(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,i.xZ)(this.app))return Promise.reject(v(this));const t=e?(0,r.Ku)(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(0,i.xZ)(this.app)?Promise.reject(v(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,i.xZ)(this.app)?Promise.reject(v(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(de(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ne(this),t=new Re(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new r.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await ae(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&de(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[de(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(o,this,"internal-error"),o.then(()=>{s||r(this.currentUser)}),"function"===typeof t){const r=e.addObserver(t,n,i);return()=>{s=!0,r()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if((0,i.xZ)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Le(e){return(0,r.Ku)(e)}class De{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.tD)(e=>this.observer=e)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Me={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ve(e){Me=e}function je(e){return Me.loadJS(e)}function Fe(){return Me.recaptchaEnterpriseScript}function Ue(){return Me.gapiScript}function Be(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(){this.enterprise=new He}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class He{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const We="recaptcha-enterprise",qe="NO_RECAPTCHA";class Ke{constructor(e){this.type=We,this.auth=Le(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{H(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(i=>{if(void 0!==i.recaptchaKey){const n=new z(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})}function i(t,n,i){const r=window.grecaptcha;B(r)?r.enterprise.ready(()=>{r.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(qe)})}):i(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){const e=new ze;return e.execute("siteKey",{action:"verify"})}return new Promise((e,r)=>{n(this.auth).then(n=>{if(!t&&B(window.grecaptcha))i(n,e,r);else{if("undefined"===typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let t=Fe();0!==t.length&&(t+=n),je(t).then(()=>{i(n,e,r)}).catch(e=>{r(e)})}}).catch(e=>{r(e)})})}}async function Ge(e,t,n,i=!1,r=!1){const s=new Ke(e);let o;if(r)o=qe;else try{o=await s.verify(n)}catch(l){o=await s.verify(n,!0)}const a=Object.assign({},t);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Xe(e,t,n,i,r){var s,o;if("EMAIL_PASSWORD_PROVIDER"===r){if(null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Ge(e,t,n,"getOobCode"===n);return i(e,r)}return i(e,t).catch(async r=>{if("auth/missing-recaptcha-token"===r.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const r=await Ge(e,t,n,"getOobCode"===n);return i(e,r)}return Promise.reject(r)})}if("PHONE_PROVIDER"===r){if(null===(o=e._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("PHONE_PROVIDER")){const r=await Ge(e,t,n);return i(e,r).catch(async r=>{var s;if("AUDIT"===(null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.getProviderEnforcementState("PHONE_PROVIDER"))&&("auth/missing-recaptcha-token"===r.code||"auth/invalid-app-credential"===r.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const r=await Ge(e,t,n,!1,!0);return i(e,r)}return Promise.reject(r)})}{const r=await Ge(e,t,n,!1,!0);return i(e,r)}}return Promise.reject(r+" provider is not supported.")}async function Qe(e){const t=Le(e),n=await H(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new z(n);if(null==t.tenantId?t._agentRecaptchaConfig=i:t._tenantRecaptchaConfigs[t.tenantId]=i,i.isAnyProviderEnabled()){const e=new Ke(t);e.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(e,t){const n=(0,i.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.bD)(i,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const s=n.initialize({options:t});return s}function Ye(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(de);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Ze(e,t,n){const i=Le(e);w(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(null===n||void 0===n?void 0:n.disableWarnings),o=et(t),{host:a,port:l}=tt(t),c=null===l?"":`:${l}`,u={url:`${o}//${a}${c}/`},h=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator)return w(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),void w((0,r.bD)(u,i.config.emulator)&&(0,r.bD)(h,i.emulatorConfig),i,"emulator-config-failed");i.config.emulator=u,i.emulatorConfig=h,i.settings.appVerificationDisabledForTesting=!0,(0,r.zJ)(a)?((0,r.gE)(`${o}//${a}${c}`),(0,r.P1)("Auth",!0)):s||it()}function et(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function tt(e){const t=et(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:nt(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:nt(t)}}}function nt(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function it(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _("not implemented")}_getIdTokenResponse(e){return _("not implemented")}_linkToIdToken(e,t){return _("not implemented")}_getReauthenticationResolver(e){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(e,t){return L(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ot(e,t){return M(e,"POST","/v1/accounts:signInWithPassword",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function at(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}async function lt(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends rt{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ct(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ct(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xe(e,t,"signInWithPassword",ot,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return at(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xe(e,n,"signUpPassword",st,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return lt(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t){return M(e,"POST","/v1/accounts:signInWithIdp",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="http://localhost";class dt extends rt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new dt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=o(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new dt(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return ut(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ut(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ut(e,t)}buildRequest(){const e={requestUri:ht,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",P(e,t))}async function pt(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t))}async function gt(e,t){const n=await M(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t));if(n.temporaryProof)throw U(e,"account-exists-with-different-credential",n);return n}const mt={["USER_NOT_FOUND"]:"user-not-found"};async function vt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return M(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,n),mt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends rt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new yt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new yt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return pt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return gt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return vt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new yt({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wt(e){const t=(0,r.I9)((0,r.hp)(e))["link"],n=t?(0,r.I9)((0,r.hp)(t))["deep_link_id"]:null,i=(0,r.I9)((0,r.hp)(e))["deep_link_id"],s=i?(0,r.I9)((0,r.hp)(i))["link"]:null;return s||i||n||t||e}class _t{constructor(e){var t,n,i,s,o,a;const l=(0,r.I9)((0,r.hp)(e)),c=null!==(t=l["apiKey"])&&void 0!==t?t:null,u=null!==(n=l["oobCode"])&&void 0!==n?n:null,h=bt(null!==(i=l["mode"])&&void 0!==i?i:null);w(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(s=l["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=l["lang"])&&void 0!==o?o:null,this.tenantId=null!==(a=l["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=wt(e);try{return new _t(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et{constructor(){this.providerId=Et.PROVIDER_ID}static credential(e,t){return ct._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=_t.parseLink(t);return w(n,"argument-error"),ct._fromEmailAndCode(e,n.code,n.tenantId)}}Et.PROVIDER_ID="password",Et.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Et.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Tt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It extends St{constructor(){super("facebook.com")}static credential(e){return dt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch(t){return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com",It.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $t extends St{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return dt._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return $t.credential(t,n)}catch(i){return null}}}$t.GOOGLE_SIGN_IN_METHOD="google.com",$t.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt extends St{constructor(){super("github.com")}static credential(e){return dt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch(t){return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com",kt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct extends St{constructor(){super("twitter.com")}static credential(e,t){return dt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ct.credential(t,n)}catch(i){return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com",Ct.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await ue._fromIdTokenResponse(e,n,i),s=At(n),o=new xt({user:r,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=At(n);return new xt({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function At(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt extends r.g{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Nt.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Nt(e,t,n,i)}}function Ot(e,t,n,i){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Nt._fromErrorAndOperation(e,n,t,i);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t,n=!1){const i=await Y(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return xt._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pt(e,t,n=!1){const{auth:r}=e;if((0,i.xZ)(r.app))return Promise.reject(v(r));const s="reauthenticate";try{const i=await Y(e,Ot(r,s,t,e),n);w(i.idToken,r,"internal-error");const o=Q(i.idToken);w(o,r,"internal-error");const{sub:a}=o;return w(e.uid===a,r,"user-mismatch"),xt._forOperation(e,s,i)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&p(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(e,t,n=!1){if((0,i.xZ)(e.app))return Promise.reject(v(e));const r="signIn",s=await Ot(e,r,t),o=await xt._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(o.user),o}function Dt(e,t,n,i){return(0,r.Ku)(e).onIdTokenChanged(t,n,i)}function Mt(e,t,n){return(0,r.Ku)(e).beforeAuthStateChanged(t,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",P(e,t))}function jt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",P(e,t))}function Ft(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",P(e,t))}function Ut(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",P(e,t))}new WeakMap;const Bt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bt,"1"),this.storage.removeItem(Bt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=1e3,Wt=10;class qt extends zt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ce(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);ke()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Wt):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Ht)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qt.type="LOCAL";const Kt=qt,Gt=1e3;
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(e){var t,n;const i=e.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),r=RegExp(`${i}=([^;]+)`);return null!==(n=null===(t=document.cookie.match(r))||void 0===t?void 0:t[1])&&void 0!==n?n:null}function Qt(e){const t="http:"===window.location.protocol;return`${t?"__dev_":"__HOST-"}FIREBASE_${e.split(":")[3]}`}class Jt{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(void 0===typeof window)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){var e;return!("boolean"===typeof isSecureContext&&!isSecureContext)&&("undefined"!==typeof navigator&&"undefined"!==typeof document&&(null===(e=navigator.cookieEnabled)||void 0===e||e))}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=Qt(e);if(window.cookieStore){const e=await window.cookieStore.get(t);return null===e||void 0===e?void 0:e.value}return Xt(t)}async _remove(e){if(!this._isAvailable())return;const t=await this._get(e);if(!t)return;const n=Qt(e);document.cookie=`${n}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const n=Qt(e);if(window.cookieStore){const e=e=>{const i=e.changed.find(e=>e.name===n);i&&t(i.value);const r=e.deleted.find(e=>e.name===n);r&&t(null)},i=()=>window.cookieStore.removeEventListener("change",e);return this.listenerUnsubscribes.set(t,i),window.cookieStore.addEventListener("change",e)}let i=Xt(n);const r=setInterval(()=>{const e=Xt(n);e!==i&&(t(e),i=e)},Gt),s=()=>clearInterval(r);this.listenerUnsubscribes.set(t,s)}_removeListener(e,t){const n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}}Jt.type="COOKIE";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends zt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yt.type="SESSION";const Zt=Yt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new tn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map(async e=>e(t.origin,r)),a=await en(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nn(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.receivers=[];class rn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise((o,a)=>{const l=nn("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function on(e){sn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return"undefined"!==typeof sn()["WorkerGlobalScope"]&&"function"===typeof sn()["importScripts"]}async function ln(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function cn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function un(){return an()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="firebaseLocalStorageDb",dn=1,fn="firebaseLocalStorage",pn="fbase_key";class gn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function mn(e,t){return e.transaction([fn],t?"readwrite":"readonly").objectStore(fn)}function vn(){const e=indexedDB.deleteDatabase(hn);return new gn(e).toPromise()}function yn(){const e=indexedDB.open(hn,dn);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(fn,{keyPath:pn})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(fn)?t(n):(n.close(),await vn(),t(await yn()))})})}async function bn(e,t,n){const i=mn(e,!0).put({[pn]:t,value:n});return new gn(i).toPromise()}async function wn(e,t){const n=mn(e,!1).get(t),i=await new gn(n).toPromise();return void 0===i?null:i.value}function _n(e,t){const n=mn(e,!0).delete(t);return new gn(n).toPromise()}const En=800,Tn=3;class Sn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await yn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Tn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return an()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tn._getInstance(un()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ln(),!this.activeServiceWorker)return;this.sender=new rn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&cn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yn();return await bn(e,Bt,"1"),await _n(e,Bt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>bn(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>wn(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_n(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=mn(e,!1).getAll();return new gn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),En)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Sn.type="LOCAL";const In=Sn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",P(e,t))}function kn(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",P(e,t))}function Cn(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xn="recaptcha";async function An(e,t,n){var i;if(!e._getRecaptchaConfig())try{await Qe(e)}catch(r){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(r="string"===typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){w("enroll"===t.type,e,"internal-error");const i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===qe){w((null===n||void 0===n?void 0:n.type)===xn,e,"argument-error");const i=await Nn(e,t,n);return Vt(e,i)}return Vt(e,t)},o=Xe(e,i,"mfaSmsEnrollment",s,"PHONE_PROVIDER"),a=await o.catch(e=>Promise.reject(e));return a.phoneSessionInfo.sessionInfo}{w("signin"===t.type,e,"internal-error");const s=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;w(s,e,"missing-multi-factor-info");const o={mfaPendingCredential:t.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},a=async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===qe){w((null===n||void 0===n?void 0:n.type)===xn,e,"argument-error");const i=await Nn(e,t,n);return $n(e,i)}return $n(e,t)},l=Xe(e,o,"mfaSmsSignIn",a,"PHONE_PROVIDER"),c=await l.catch(e=>Promise.reject(e));return c.phoneResponseInfo.sessionInfo}}{const t={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"},i=async(e,t)=>{if(t.captchaResponse===qe){w((null===n||void 0===n?void 0:n.type)===xn,e,"argument-error");const i=await Nn(e,t,n);return ft(e,i)}return ft(e,t)},s=Xe(e,t,"sendVerificationCode",i,"PHONE_PROVIDER"),o=await s.catch(e=>Promise.reject(e));return o.sessionInfo}}finally{null===n||void 0===n||n._reset()}}async function Nn(e,t,n){w(n.type===xn,e,"argument-error");const i=await n.verify();w("string"===typeof i,e,"argument-error");const r=Object.assign({},t);if("phoneEnrollmentInfo"in r){const e=r.phoneEnrollmentInfo.phoneNumber,t=r.phoneEnrollmentInfo.captchaResponse,n=r.phoneEnrollmentInfo.clientType,s=r.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(r,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:i,captchaResponse:t,clientType:n,recaptchaVersion:s}}),r}if("phoneSignInInfo"in r){const e=r.phoneSignInInfo.captchaResponse,t=r.phoneSignInInfo.clientType,n=r.phoneSignInInfo.recaptchaVersion;return Object.assign(r,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:e,clientType:t,recaptchaVersion:n}}),r}return Object.assign(r,{recaptchaToken:i}),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.providerId=On.PROVIDER_ID,this.auth=Le(e)}verifyPhoneNumber(e,t){return An(this.auth,e,(0,r.Ku)(t))}static credential(e,t){return yt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return On.credentialFromTaggedObject(t)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?yt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rn(e,t){return t?de(t):(w(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On.PROVIDER_ID="phone",On.PHONE_SIGN_IN_METHOD="phone";class Pn extends rt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ut(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ut(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ut(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ln(e){return Lt(e.auth,new Pn(e),e.bypassAuthState)}function Dn(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Pt(n,new Pn(e),e.bypassAuthState)}async function Mn(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Rt(n,new Pn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ln;case"linkViaPopup":case"linkViaRedirect":return Mn;case"reauthViaPopup":case"reauthViaRedirect":return Dn;default:p(this.auth,"internal-error")}}resolve(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new C(2e3,1e4);async function Fn(e,t,n){if((0,i.xZ)(e.app))return Promise.reject(g(e,"operation-not-supported-in-this-environment"));const r=Le(e);y(e,t,Tt);const s=Rn(r,n),o=new Un(r,"signInViaPopup",t,s);return o.executeNotNull()}class Un extends Vn{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const e=nn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,jn.get())};e()}}Un.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bn="pendingRedirect",zn=new Map;class Hn extends Vn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=zn.get(this.auth._key());if(!e){try{const t=await Wn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}zn.set(this.auth._key(),e)}return this.bypassAuthState||zn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Wn(e,t){const n=Gn(t),i=Kn(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function qn(e,t){zn.set(e._key(),t)}function Kn(e){return de(e._redirectPersistence)}function Gn(e){return ge(Bn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(e,t,n=!1){if((0,i.xZ)(e.app))return Promise.reject(v(e));const r=Le(e),s=Rn(r,t),o=new Hn(r,s,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qn=6e5;class Jn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ei(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Zn(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(g(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yn(e))}saveEventToCache(e){this.cachedEventUids.add(Yn(e)),this.lastProcessedEventTime=Date.now()}}function Yn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Zn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function ei(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ii=/^https?/;async function ri(e){if(e.config.emulator)return;const{authorizedDomains:t}=await ti(e);for(const i of t)try{if(si(i))return}catch(n){}p(e,"unauthorized-domain")}function si(e){const t=T(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!ii.test(n))return!1;if(ni.test(e))return i===e;const r=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new C(3e4,6e4);function ai(){const e=sn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function li(e){return new Promise((t,n)=>{var i,r,s;function o(){ai(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ai(),n(g(e,"network-request-failed"))},timeout:oi.get()})}if(null===(r=null===(i=sn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=sn().gapi)||void 0===s?void 0:s.load)){const t=Be("iframefcb");return sn()[t]=()=>{gapi.load?o():n(g(e,"network-request-failed"))},je(`${Ue()}?onload=${t}`).catch(e=>n(e))}o()}}).catch(e=>{throw ci=null,e})}let ci=null;function ui(e){return ci=ci||li(e),ci}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new C(5e3,15e3),di="__/auth/iframe",fi="emulator/auth/iframe",pi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mi(e){const t=e.config;w(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?x(t,fi):`https://${e.config.authDomain}/${di}`,s={apiKey:t.apiKey,appName:e.name,v:i.MF},o=gi.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.Am)(s).slice(1)}`}async function vi(e){const t=await ui(e),n=sn().gapi;return w(n,e,"internal-error"),t.open({where:document.body,url:mi(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pi,dontclear:!0},t=>new Promise(async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=g(e,"network-request-failed"),s=sn().setTimeout(()=>{i(r)},hi.get());function o(){sn().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{i(r)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bi=500,wi=600,_i="_blank",Ei="http://localhost";class Ti{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Si(e,t,n,i=bi,s=wi){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},yi),{width:i.toString(),height:s.toString(),top:o,left:a}),u=(0,r.ZQ)().toLowerCase();n&&(l=we(u)?_i:n),ye(u)&&(t=t||Ei,c.scrollbars="yes");const h=Object.entries(c).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if($e(u)&&"_self"!==l)return Ii(t||"",l),new Ti(null);const d=window.open(t||"",l,h);w(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Ti(d)}function Ii(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="__/auth/handler",ki="emulator/auth/handler",Ci=encodeURIComponent("fac");async function xi(e,t,n,s,o,a){w(e.config.authDomain,e,"auth-domain-config-required"),w(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.MF,eventId:o};if(t instanceof Tt){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,r.Im)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof St){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const i of Object.keys(c))void 0===c[i]&&delete c[i];const u=await e._getAppCheckToken(),h=u?`#${Ci}=${encodeURIComponent(u)}`:"";return`${Ai(e)}?${(0,r.Am)(c).slice(1)}${h}`}function Ai({config:e}){return e.emulator?x(e,ki):`https://${e.authDomain}/${$i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="webStorageSupport";class Oi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zt,this._completeRedirectFn=Xn,this._overrideRedirectResult=qn}async _openPopup(e,t,n,i){var r;E(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=await xi(e,t,n,T(),i);return Si(e,s,nn())}async _openRedirect(e,t,n,i){await this._originValidation(e);const r=await xi(e,t,n,T(),i);return on(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(E(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await vi(e),n=new Jn(e);return t.register("authEvent",t=>{w(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Ni,{type:Ni},n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Ni];void 0!==r&&t(!!r),p(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ri(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ce()||be()||Ie()}}const Ri=Oi;class Pi{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return _("unexpected MultiFactorSessionType")}}}class Li extends Pi{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Li(e)}_finalizeEnroll(e,t,n){return jt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return kn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Di{constructor(){}static assertion(e){return Li._fromCredential(e)}}Di.FACTOR_ID="phone";class Mi{static assertionForEnrollment(e,t){return Vi._fromSecret(e,t)}static assertionForSignIn(e,t){return Vi._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;w("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const i=await Ft(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return ji._fromStartTotpMfaEnrollmentResponse(i,n.user.auth)}}Mi.FACTOR_ID="totp";class Vi extends Pi{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Vi(t,void 0,e)}static _fromEnrollmentId(e,t){return new Vi(t,e)}async _finalizeEnroll(e,t,n){return w("undefined"!==typeof this.secret,e,"argument-error"),Ut(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){w(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Cn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class ji{constructor(e,t,n,i,r,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(e,t){return new ji(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let i=!1;return(Fi(e)||Fi(t))&&(i=!0),i&&(Fi(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Fi(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Fi(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var Ui="@firebase/auth",Bi="1.10.8";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wi(e){(0,i.om)(new a.uA("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xe(e)},c=new Pe(i,r,s,l);return Ye(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()})),(0,i.om)(new a.uA("auth-internal",e=>{const t=Le(e.getProvider("auth").getImmediate());return(e=>new zi(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KO)(Ui,Bi,Hi(e)),(0,i.KO)(Ui,Bi,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=300,Ki=(0,r.XA)("authIdTokenMaxAge")||qi;let Gi=null;const Xi=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Ki)return;const r=null===n||void 0===n?void 0:n.token;Gi!==r&&(Gi=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Qi(e=(0,i.Sx)()){const t=(0,i.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Je(e,{popupRedirectResolver:Ri,persistence:[In,Kt,Zt]}),s=(0,r.XA)("authTokenSyncURL");if(s&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(s,location.origin);if(location.origin===e.origin){const t=Xi(e.toString());Mt(n,t,()=>t(n.currentUser)),Dt(n,e=>t(e))}}const o=(0,r.Tj)("auth");return o&&Ze(n,`http://${o}`),n}function Ji(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}Ve({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=g("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",Ji().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Wi("Browser")},424:(e,t,n)=>{n.d(t,{$b:()=>r,Vy:()=>c});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},461:(e,t,n)=>{n.d(t,{KO:()=>ee,MF:()=>J,Sx:()=>Z,Wp:()=>Y,j6:()=>q,om:()=>W,xZ:()=>K});var i=n(125),r=n(424),s=n(72),o=n(297);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(l(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function l(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.13.2",h=new r.Vy("@firebase/app"),d="@firebase/app-compat",f="@firebase/analytics-compat",p="@firebase/analytics",g="@firebase/app-check-compat",m="@firebase/app-check",v="@firebase/auth",y="@firebase/auth-compat",b="@firebase/database",w="@firebase/data-connect",_="@firebase/database-compat",E="@firebase/functions",T="@firebase/functions-compat",S="@firebase/installations",I="@firebase/installations-compat",$="@firebase/messaging",k="@firebase/messaging-compat",C="@firebase/performance",x="@firebase/performance-compat",A="@firebase/remote-config",N="@firebase/remote-config-compat",O="@firebase/storage",R="@firebase/storage-compat",P="@firebase/firestore",L="@firebase/ai",D="@firebase/firestore-compat",M="firebase",V="11.10.0",j="[DEFAULT]",F={[c]:"fire-core",[d]:"fire-core-compat",[p]:"fire-analytics",[f]:"fire-analytics-compat",[m]:"fire-app-check",[g]:"fire-app-check-compat",[v]:"fire-auth",[y]:"fire-auth-compat",[b]:"fire-rtdb",[w]:"fire-data-connect",[_]:"fire-rtdb-compat",[E]:"fire-fn",[T]:"fire-fn-compat",[S]:"fire-iid",[I]:"fire-iid-compat",[$]:"fire-fcm",[k]:"fire-fcm-compat",[C]:"fire-perf",[x]:"fire-perf-compat",[A]:"fire-rc",[N]:"fire-rc-compat",[O]:"fire-gcs",[R]:"fire-gcs-compat",[P]:"fire-fst",[D]:"fire-fst-compat",[L]:"fire-vertex","fire-js":"fire-js",[M]:"fire-js-all"},U=new Map,B=new Map,z=new Map;function H(e,t){try{e.container.addComponent(t)}catch(n){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function W(e){const t=e.name;if(z.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;z.set(t,e);for(const n of U.values())H(n,e);for(const n of B.values())H(n,e);return!0}function q(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function K(e){return null!==e&&void 0!==e&&void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const G={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},X=new s.FA("app","Firebase",G);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.uA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw X.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J=V;function Y(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const r=Object.assign({name:j,automaticDataCollectionEnabled:!0},t),o=r.name;if("string"!==typeof o||!o)throw X.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw X.create("no-options");const a=U.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(r,a.config))return a;throw X.create("duplicate-app",{appName:o})}const l=new i.h1(o);for(const i of z.values())l.addComponent(i);const c=new Q(n,r,l);return U.set(o,c),c}function Z(e=j){const t=U.get(e);if(!t&&e===j&&(0,s.T9)())return Y();if(!t)throw X.create("no-app",{appName:e});return t}function ee(e,t,n){var r;let s=null!==(r=F[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void h.warn(e.join(" "))}W(new i.uA(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const te="firebase-heartbeat-database",ne=1,ie="firebase-heartbeat-store";let re=null;function se(){return re||(re=(0,o.P2)(te,ne,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ie)}catch(n){console.warn(n)}}}}).catch(e=>{throw X.create("idb-open",{originalErrorMessage:e.message})})),re}async function oe(e){try{const t=await se(),n=t.transaction(ie),i=await n.objectStore(ie).get(le(e));return await n.done,i}catch(t){if(t instanceof s.g)h.warn(t.message);else{const e=X.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});h.warn(e.message)}}}async function ae(e,t){try{const n=await se(),i=n.transaction(ie,"readwrite"),r=i.objectStore(ie);await r.put(t,le(e)),await i.done}catch(n){if(n instanceof s.g)h.warn(n.message);else{const e=X.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});h.warn(e.message)}}}function le(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=1024,ue=30;class he{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pe(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),r=de();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>ue){const e=me(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){h.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=de(),{heartbeatsToSend:n,unsentEntries:i}=fe(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return h.warn(t),""}}}function de(){const e=new Date;return e.toISOString().substring(0,10)}function fe(e,t=ce){const n=[];let i=e.slice();for(const r of e){const e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),ge(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ge(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class pe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await oe(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ae(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ae(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ge(e){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:e})).length}function me(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){W(new i.uA("platform-logger",e=>new a(e),"PRIVATE")),W(new i.uA("heartbeat",e=>new he(e),"PRIVATE")),ee(c,u,e),ee(c,u,"esm2017"),ee("fire-js","")}ve("")},496:(e,t,n)=>{n.d(t,{K:()=>a,a:()=>o});var i=n(725);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const r=()=>{if(void 0!==i.w)return i.w.Capacitor};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var s,o;(function(e){e["Unimplemented"]="UNIMPLEMENTED",e["Unavailable"]="UNAVAILABLE"})(s||(s={})),function(e){e["Body"]="body",e["Ionic"]="ionic",e["Native"]="native",e["None"]="none"}(o||(o={}));const a={getEngine(){const e=r();if(null===e||void 0===e?void 0:e.isPluginAvailable("Keyboard"))return e.Plugins.Keyboard},getResizeMode(){const e=this.getEngine();return(null===e||void 0===e?void 0:e.getResizeMode)?e.getResizeMode().catch(e=>{if(e.code!==s.Unimplemented)throw e}):Promise.resolve(void 0)}}},595:()=>{},626:()=>{},641:(e,t,n)=>{n.d(t,{$u:()=>me,CE:()=>sn,Df:()=>Y,EW:()=>Hn,FK:()=>Kt,Gt:()=>Ye,Gy:()=>q,Im:()=>U,K9:()=>wt,Lk:()=>hn,MZ:()=>J,OW:()=>Q,QP:()=>G,WQ:()=>Ze,Wv:()=>on,bF:()=>dn,bo:()=>x,dY:()=>m,eW:()=>mn,g2:()=>Se,h:()=>Wn,hi:()=>ye,k6:()=>C,nI:()=>$n,pM:()=>Z,qL:()=>o,sV:()=>pe,uX:()=>Zt,vv:()=>an,wB:()=>Nt});var i=n(953),r=n(33);function s(e,t,n,i){try{return i?e(...i):e()}catch(r){a(r,t,n)}}function o(e,t,n,i){if((0,r.Tn)(e)){const o=s(e,t,n,i);return o&&(0,r.yL)(o)&&o.catch(e=>{a(e,t,n)}),o}if((0,r.cy)(e)){const r=[];for(let s=0;s<e.length;s++)r.push(o(e[s],t,n,i));return r}}function a(e,t,n,o=!0){const a=t?t.vnode:null,{errorHandler:c,throwUnhandledErrorInProduction:u}=t&&t.appContext.config||r.MZ;if(t){let r=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,a))return;r=r.parent}if(c)return(0,i.C4)(),s(c,null,10,[e,o,a]),void(0,i.bl)()}l(e,n,a,o,u)}function l(e,t,n,i=!0,r=!1){if(r)throw e;console.error(e)}const c=[];let u=-1;const h=[];let d=null,f=0;const p=Promise.resolve();let g=null;function m(e){const t=g||p;return e?t.then(this?e.bind(this):e):t}function v(e){let t=u+1,n=c.length;while(t<n){const i=t+n>>>1,r=c[i],s=T(r);s<e||s===e&&2&r.flags?t=i+1:n=i}return t}function y(e){if(!(1&e.flags)){const t=T(e),n=c[c.length-1];!n||!(2&e.flags)&&t>=T(n)?c.push(e):c.splice(v(t),0,e),e.flags|=1,b()}}function b(){g||(g=p.then(S))}function w(e){(0,r.cy)(e)?h.push(...e):d&&-1===e.id?d.splice(f+1,0,e):1&e.flags||(h.push(e),e.flags|=1),b()}function _(e,t,n=u+1){for(0;n<c.length;n++){const t=c[n];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;0,c.splice(n,1),n--,4&t.flags&&(t.flags&=-2),t(),4&t.flags||(t.flags&=-2)}}}function E(e){if(h.length){const e=[...new Set(h)].sort((e,t)=>T(e)-T(t));if(h.length=0,d)return void d.push(...e);for(d=e,f=0;f<d.length;f++){const e=d[f];0,4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}d=null,f=0}}const T=e=>null==e.id?2&e.flags?-1:1/0:e.id;function S(e){r.tE;try{for(u=0;u<c.length;u++){const e=c[u];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),s(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;u<c.length;u++){const e=c[u];e&&(e.flags&=-2)}u=-1,c.length=0,E(e),g=null,(c.length||h.length)&&S(e)}}let I=null,$=null;function k(e){const t=I;return I=e,$=e&&e.type.__scopeId||null,t}function C(e,t=I,n){if(!t)return e;if(e._n)return e;const i=(...n)=>{i._d&&nn(-1);const r=k(t);let s;try{s=e(...n)}finally{k(r),i._d&&nn(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function x(e,t){if(null===I)return e;const n=Un(I),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,a,l,c=r.MZ]=t[o];e&&((0,r.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&(0,i.hV)(a),s.push({dir:e,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function A(e,t,n,r){const s=e.dirs,a=t&&t.dirs;for(let l=0;l<s.length;l++){const c=s[l];a&&(c.oldValue=a[l].value);let u=c.dir[r];u&&((0,i.C4)(),o(u,n,8,[e.el,c,e,t]),(0,i.bl)())}}const N=Symbol("_vte"),O=e=>e.__isTeleport,R=e=>e&&(e.disabled||""===e.disabled),P=e=>e&&(e.defer||""===e.defer),L=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,D=e=>"function"===typeof MathMLElement&&e instanceof MathMLElement,M=(e,t)=>{const n=e&&e.to;if((0,r.Kg)(n)){if(t){const e=t(n);return e}return null}return n},V={name:"Teleport",__isTeleport:!0,process(e,t,n,i,r,s,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:g,createComment:m}}=c,v=R(t.props);let{shapeFlag:y,children:b,dynamicChildren:w}=t;if(null==e){const e=t.el=g(""),c=t.anchor=g("");f(e,n,i),f(c,n,i);const h=(e,t)=>{16&y&&(r&&r.isCE&&(r.ce._teleportTarget=e),u(b,e,t,r,s,o,a,l))},d=()=>{const e=t.target=M(t.props,p),n=z(e,t,g,f);e&&("svg"!==o&&L(e)?o="svg":"mathml"!==o&&D(e)&&(o="mathml"),v||(h(e,n),B(t,!1)))};v&&(h(n,c),B(t,!0)),P(t.props)?(t.el.__isMounted=!1,bt(()=>{d(),delete t.el.__isMounted},s)):d()}else{if(P(t.props)&&!1===e.el.__isMounted)return void bt(()=>{V.process(e,t,n,i,r,s,o,a,l,c)},s);t.el=e.el,t.targetStart=e.targetStart;const u=t.anchor=e.anchor,f=t.target=e.target,g=t.targetAnchor=e.targetAnchor,m=R(e.props),y=m?n:f,b=m?u:g;if("svg"===o||L(f)?o="svg":("mathml"===o||D(f))&&(o="mathml"),w?(d(e.dynamicChildren,w,y,r,s,o,a),It(e,t,!0)):l||h(e,t,y,b,r,s,o,a,!1),v)m?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):j(t,n,u,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=M(t.props,p);e&&j(t,e,null,c,0)}else m&&j(t,f,g,c,1);B(t,v)}},remove(e,t,n,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:h,props:d}=e;if(h&&(r(c),r(u)),s&&r(l),16&o){const e=s||!R(d);for(let r=0;r<a.length;r++){const s=a[r];i(s,t,n,e,!!s.dynamicChildren)}}},move:j,hydrate:F};function j(e,t,n,{o:{insert:i},m:r},s=2){0===s&&i(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=e,h=2===s;if(h&&i(o,t,n),(!h||R(u))&&16&l)for(let d=0;d<c.length;d++)r(c[d],t,n,2);h&&i(a,t,n)}function F(e,t,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},h){const d=t.target=M(t.props,l);if(d){const l=R(t.props),f=d._lpa||d.firstChild;if(16&t.shapeFlag)if(l)t.anchor=h(o(e),t,a(e),n,i,r,s),t.targetStart=f,t.targetAnchor=f&&o(f);else{t.anchor=o(e);let a=f;while(a){if(a&&8===a.nodeType)if("teleport start anchor"===a.data)t.targetStart=a;else if("teleport anchor"===a.data){t.targetAnchor=a,d._lpa=t.targetAnchor&&o(t.targetAnchor);break}a=o(a)}t.targetAnchor||z(d,t,u,c),h(f&&o(f),t,d,n,i,r,s)}B(t,l)}return t.anchor&&o(t.anchor)}const U=V;function B(e,t){const n=e.ctx;if(n&&n.ut){let i,r;t?(i=e.el,r=e.anchor):(i=e.targetStart,r=e.targetAnchor);while(i&&i!==r)1===i.nodeType&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function z(e,t,n,i){const r=t.targetStart=n(""),s=t.targetAnchor=n("");return r[N]=s,e&&(i(r,e),i(s,e)),s}const H=Symbol("_leaveCb"),W=Symbol("_enterCb");function q(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pe(()=>{e.isMounted=!0}),ve(()=>{e.isUnmounting=!0}),e}const K=[Function,Array],G={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:K,onEnter:K,onAfterEnter:K,onEnterCancelled:K,onBeforeLeave:K,onLeave:K,onAfterLeave:K,onLeaveCancelled:K,onBeforeAppear:K,onAppear:K,onAfterAppear:K,onAppearCancelled:K};function X(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function Q(e,t,n,i,s){const{appear:a,mode:l,persisted:c=!1,onBeforeEnter:u,onEnter:h,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:y,onAppear:b,onAfterAppear:w,onAppearCancelled:_}=t,E=String(e.key),T=X(n,e),S=(e,t)=>{e&&o(e,i,9,t)},I=(e,t)=>{const n=t[1];S(e,t),(0,r.cy)(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},$={mode:l,persisted:c,beforeEnter(t){let i=u;if(!n.isMounted){if(!a)return;i=y||u}t[H]&&t[H](!0);const r=T[E];r&&ln(e,r)&&r.el[H]&&r.el[H](),S(i,[t])},enter(e){let t=h,i=d,r=f;if(!n.isMounted){if(!a)return;t=b||h,i=w||d,r=_||f}let s=!1;const o=e[W]=t=>{s||(s=!0,S(t?r:i,[e]),$.delayedLeave&&$.delayedLeave(),e[W]=void 0)};t?I(t,[e,o]):o()},leave(t,i){const r=String(e.key);if(t[W]&&t[W](!0),n.isUnmounting)return i();S(p,[t]);let s=!1;const o=t[H]=n=>{s||(s=!0,i(),S(n?v:m,[t]),t[H]=void 0,T[r]===e&&delete T[r])};T[r]=e,g?I(g,[t,o]):o()},clone(e){const r=Q(e,t,n,i,s);return s&&s(r),r}};return $}function J(e,t){6&e.shapeFlag&&e.component?(e.transition=t,J(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Y(e,t=!1,n){let i=[],r=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Kt?(128&o.patchFlag&&r++,i=i.concat(Y(o.children,t,a))):(t||o.type!==Xt)&&i.push(null!=a?gn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}
/*! #__NO_SIDE_EFFECTS__ */function Z(e,t){return(0,r.Tn)(e)?(()=>(0,r.X$)({name:e.name},t,{setup:e}))():e}function ee(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function te(e,t,n,o,a=!1){if((0,r.cy)(e))return void e.forEach((e,i)=>te(e,t&&((0,r.cy)(t)?t[i]:t),n,o,a));if(ne(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&te(e,t,n,o.component.subTree));const l=4&o.shapeFlag?Un(o.component):o.el,c=a?null:l,{i:u,r:h}=e;const d=t&&t.r,f=u.refs===r.MZ?u.refs={}:u.refs,p=u.setupState,g=(0,i.ux)(p),m=p===r.MZ?()=>!1:e=>(0,r.$3)(g,e);if(null!=d&&d!==h&&((0,r.Kg)(d)?(f[d]=null,m(d)&&(p[d]=null)):(0,i.i9)(d)&&(d.value=null)),(0,r.Tn)(h))s(h,u,12,[c,f]);else{const t=(0,r.Kg)(h),s=(0,i.i9)(h);if(t||s){const i=()=>{if(e.f){const n=t?m(h)?p[h]:f[h]:h.value;a?(0,r.cy)(n)&&(0,r.TF)(n,l):(0,r.cy)(n)?n.includes(l)||n.push(l):t?(f[h]=[l],m(h)&&(p[h]=f[h])):(h.value=[l],e.k&&(f[e.k]=h.value))}else t?(f[h]=c,m(h)&&(p[h]=c)):s&&(h.value=c,e.k&&(f[e.k]=c))};c?(i.id=-1,bt(i,n)):i()}else 0}}(0,r.We)().requestIdleCallback,(0,r.We)().cancelIdleCallback;const ne=e=>!!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */const ie=e=>e.type.__isKeepAlive;RegExp,RegExp;function re(e,t){return(0,r.cy)(e)?e.some(e=>re(e,t)):(0,r.Kg)(e)?e.split(",").includes(t):!!(0,r.gd)(e)&&(e.lastIndex=0,e.test(t))}function se(e,t){ae(e,"a",t)}function oe(e,t){ae(e,"da",t)}function ae(e,t,n=In){const i=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(he(t,i,n),n){let e=n.parent;while(e&&e.parent)ie(e.parent.vnode)&&le(i,t,n,e),e=e.parent}}function le(e,t,n,i){const s=he(t,e,i,!0);ye(()=>{(0,r.TF)(i[t],s)},n)}function ce(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ue(e){return 128&e.shapeFlag?e.ssContent:e}function he(e,t,n=In,r=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...r)=>{(0,i.C4)();const s=xn(n),a=o(t,n,e,r);return s(),(0,i.bl)(),a});return r?s.unshift(a):s.push(a),a}}const de=e=>(t,n=In)=>{Pn&&"sp"!==e||he(e,(...e)=>t(...e),n)},fe=de("bm"),pe=de("m"),ge=de("bu"),me=de("u"),ve=de("bum"),ye=de("um"),be=de("sp"),we=de("rtg"),_e=de("rtc");function Ee(e,t=In){he("ec",e,t)}const Te="components";function Se(e,t){return $e(Te,e,!0,t)||e}const Ie=Symbol.for("v-ndc");function $e(e,t,n=!0,i=!1){const s=I||In;if(s){const n=s.type;if(e===Te){const e=Bn(n,!1);if(e&&(e===t||e===(0,r.PT)(t)||e===(0,r.ZH)((0,r.PT)(t))))return n}const o=ke(s[e]||n[e],t)||ke(s.appContext[e],t);return!o&&i?n:o}}function ke(e,t){return e&&(e[t]||e[(0,r.PT)(t)]||e[(0,r.ZH)((0,r.PT)(t))])}const Ce=e=>e?Nn(e)?Un(e):Ce(e.parent):null,xe=(0,r.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ce(e.parent),$root:e=>Ce(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ve(e),$forceUpdate:e=>e.f||(e.f=()=>{y(e.update)}),$nextTick:e=>e.n||(e.n=m.bind(e.proxy)),$watch:e=>Rt.bind(e)}),Ae=(e,t)=>e!==r.MZ&&!e.__isScriptSetup&&(0,r.$3)(e,t),Ne={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:l,type:c,appContext:u}=e;let h;if("$"!==t[0]){const i=l[t];if(void 0!==i)switch(i){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Ae(s,t))return l[t]=1,s[t];if(o!==r.MZ&&(0,r.$3)(o,t))return l[t]=2,o[t];if((h=e.propsOptions[0])&&(0,r.$3)(h,t))return l[t]=3,a[t];if(n!==r.MZ&&(0,r.$3)(n,t))return l[t]=4,n[t];Re&&(l[t]=0)}}const d=xe[t];let f,p;return d?("$attrs"===t&&(0,i.u4)(e.attrs,"get",""),d(e)):(f=c.__cssModules)&&(f=f[t])?f:n!==r.MZ&&(0,r.$3)(n,t)?(l[t]=4,n[t]):(p=u.config.globalProperties,(0,r.$3)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:i,setupState:s,ctx:o}=e;return Ae(s,t)?(s[t]=n,!0):i!==r.MZ&&(0,r.$3)(i,t)?(i[t]=n,!0):!(0,r.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let l;return!!n[a]||e!==r.MZ&&(0,r.$3)(e,a)||Ae(t,a)||(l=o[0])&&(0,r.$3)(l,a)||(0,r.$3)(i,a)||(0,r.$3)(xe,a)||(0,r.$3)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,r.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Oe(e){return(0,r.cy)(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}let Re=!0;function Pe(e){const t=Ve(e),n=e.proxy,s=e.ctx;Re=!1,t.beforeCreate&&De(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:l,watch:c,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:_,unmounted:E,render:T,renderTracked:S,renderTriggered:I,errorCaptured:$,serverPrefetch:k,expose:C,inheritAttrs:x,components:A,directives:N,filters:O}=t,R=null;if(h&&Le(h,s,R),l)for(const i in l){const e=l[i];(0,r.Tn)(e)&&(s[i]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,r.Gv)(t)&&(e.data=(0,i.Kh)(t))}if(Re=!0,a)for(const i in a){const e=a[i],t=(0,r.Tn)(e)?e.bind(n,n):(0,r.Tn)(e.get)?e.get.bind(n,n):r.tE;0;const o=!(0,r.Tn)(e)&&(0,r.Tn)(e.set)?e.set.bind(n):r.tE,l=Hn({get:t,set:o});Object.defineProperty(s,i,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(c)for(const i in c)Me(c[i],s,n,i);if(u){const e=(0,r.Tn)(u)?u.call(n):u;Reflect.ownKeys(e).forEach(t=>{Ye(t,e[t])})}function P(e,t){(0,r.cy)(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(d&&De(d,e,"c"),P(fe,f),P(pe,p),P(ge,g),P(me,m),P(se,v),P(oe,y),P(Ee,$),P(_e,S),P(we,I),P(ve,w),P(ye,E),P(be,k),(0,r.cy)(C))if(C.length){const t=e.exposed||(e.exposed={});C.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});T&&e.render===r.tE&&(e.render=T),null!=x&&(e.inheritAttrs=x),A&&(e.components=A),N&&(e.directives=N),k&&ee(e)}function Le(e,t,n=r.tE){(0,r.cy)(e)&&(e=ze(e));for(const s in e){const n=e[s];let o;o=(0,r.Gv)(n)?"default"in n?Ze(n.from||s,n.default,!0):Ze(n.from||s):Ze(n),(0,i.i9)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function De(e,t,n){o((0,r.cy)(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Me(e,t,n,i){let s=i.includes(".")?Pt(n,i):()=>n[i];if((0,r.Kg)(e)){const n=t[e];(0,r.Tn)(n)&&Nt(s,n)}else if((0,r.Tn)(e))Nt(s,e.bind(n));else if((0,r.Gv)(e))if((0,r.cy)(e))e.forEach(e=>Me(e,t,n,i));else{const i=(0,r.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,r.Tn)(i)&&Nt(s,i,e)}else 0}function Ve(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,l=o.get(t);let c;return l?c=l:s.length||n||i?(c={},s.length&&s.forEach(e=>je(c,e,a,!0)),je(c,t,a)):c=t,(0,r.Gv)(t)&&o.set(t,c),c}function je(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&je(e,s,n,!0),r&&r.forEach(t=>je(e,t,n,!0));for(const o in t)if(i&&"expose"===o);else{const i=Fe[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const Fe={data:Ue,props:qe,emits:qe,methods:We,computed:We,beforeCreate:He,created:He,beforeMount:He,mounted:He,beforeUpdate:He,updated:He,beforeDestroy:He,beforeUnmount:He,destroyed:He,unmounted:He,activated:He,deactivated:He,errorCaptured:He,serverPrefetch:He,components:We,directives:We,watch:Ke,provide:Ue,inject:Be};function Ue(e,t){return t?e?function(){return(0,r.X$)((0,r.Tn)(e)?e.call(this,this):e,(0,r.Tn)(t)?t.call(this,this):t)}:t:e}function Be(e,t){return We(ze(e),ze(t))}function ze(e){if((0,r.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function He(e,t){return e?[...new Set([].concat(e,t))]:t}function We(e,t){return e?(0,r.X$)(Object.create(null),e,t):t}function qe(e,t){return e?(0,r.cy)(e)&&(0,r.cy)(t)?[...new Set([...e,...t])]:(0,r.X$)(Object.create(null),Oe(e),Oe(null!=t?t:{})):t}function Ke(e,t){if(!e)return t;if(!t)return e;const n=(0,r.X$)(Object.create(null),e);for(const i in t)n[i]=He(e[i],t[i]);return n}function Ge(){return{app:null,config:{isNativeTag:r.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xe=0;function Qe(e,t){return function(n,i=null){(0,r.Tn)(n)||(n=(0,r.X$)({},n)),null==i||(0,r.Gv)(i)||(i=null);const s=Ge(),a=new WeakSet,l=[];let c=!1;const u=s.app={_uid:Xe++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:qn,get config(){return s.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,r.Tn)(e.install)?(a.add(e),e.install(u,...t)):(0,r.Tn)(e)&&(a.add(e),e(u,...t))),u},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),u},component(e,t){return t?(s.components[e]=t,u):s.components[e]},directive(e,t){return t?(s.directives[e]=t,u):s.directives[e]},mount(r,o,a){if(!c){0;const l=u._ceVNode||dn(n,i);return l.appContext=s,!0===a?a="svg":!1===a&&(a=void 0),o&&t?t(l,r):e(l,r,a),c=!0,u._container=r,r.__vue_app__=u,Un(l.component)}},onUnmount(e){l.push(e)},unmount(){c&&(o(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(e,t){return s.provides[e]=t,u},runWithContext(e){const t=Je;Je=u;try{return e()}finally{Je=t}}};return u}}let Je=null;function Ye(e,t){if(In){let n=In.provides;const i=In.parent&&In.parent.provides;i===n&&(n=In.provides=Object.create(i)),n[e]=t}else 0}function Ze(e,t,n=!1){const i=In||I;if(i||Je){let s=Je?Je._context.provides:i?null==i.parent||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,r.Tn)(t)?t.call(i&&i.proxy):t}else 0}const et={},tt=()=>Object.create(et),nt=e=>Object.getPrototypeOf(e)===et;function it(e,t,n,r=!1){const s={},o=tt();e.propsDefaults=Object.create(null),st(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:(0,i.Gc)(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function rt(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:l}}=e,c=(0,i.ux)(o),[u]=e.propsOptions;let h=!1;if(!(s||l>0)||16&l){let i;st(e,t,o,a)&&(h=!0);for(const s in c)t&&((0,r.$3)(t,s)||(i=(0,r.Tg)(s))!==s&&(0,r.$3)(t,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=ot(u,c,s,void 0,e,!0)):delete o[s]);if(a!==c)for(const e in a)t&&(0,r.$3)(t,e)||(delete a[e],h=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let s=n[i];if(Vt(e.emitsOptions,s))continue;const l=t[s];if(u)if((0,r.$3)(a,s))l!==a[s]&&(a[s]=l,h=!0);else{const t=(0,r.PT)(s);o[t]=ot(u,c,t,l,e,!1)}else l!==a[s]&&(a[s]=l,h=!0)}}h&&(0,i.hZ)(e.attrs,"set","")}function st(e,t,n,s){const[o,a]=e.propsOptions;let l,c=!1;if(t)for(let i in t){if((0,r.SU)(i))continue;const u=t[i];let h;o&&(0,r.$3)(o,h=(0,r.PT)(i))?a&&a.includes(h)?(l||(l={}))[h]=u:n[h]=u:Vt(e.emitsOptions,i)||i in s&&u===s[i]||(s[i]=u,c=!0)}if(a){const t=(0,i.ux)(n),s=l||r.MZ;for(let i=0;i<a.length;i++){const l=a[i];n[l]=ot(o,t,l,s[l],e,!(0,r.$3)(s,l))}}return c}function ot(e,t,n,i,s,o){const a=e[n];if(null!=a){const e=(0,r.$3)(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,r.Tn)(e)){const{propsDefaults:r}=s;if(n in r)i=r[n];else{const o=xn(s);i=r[n]=e.call(null,t),o()}}else i=e;s.ce&&s.ce._setProp(n,i)}a[0]&&(o&&!e?i=!1:!a[1]||""!==i&&i!==(0,r.Tg)(n)||(i=!0))}return i}const at=new WeakMap;function lt(e,t,n=!1){const i=n?at:t.propsCache,s=i.get(e);if(s)return s;const o=e.props,a={},l=[];let c=!1;if(!(0,r.Tn)(e)){const i=e=>{c=!0;const[n,i]=lt(e,t,!0);(0,r.X$)(a,n),i&&l.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!o&&!c)return(0,r.Gv)(e)&&i.set(e,r.Oj),r.Oj;if((0,r.cy)(o))for(let h=0;h<o.length;h++){0;const e=(0,r.PT)(o[h]);ct(e)&&(a[e]=r.MZ)}else if(o){0;for(const e in o){const t=(0,r.PT)(e);if(ct(t)){const n=o[e],i=a[t]=(0,r.cy)(n)||(0,r.Tn)(n)?{type:n}:(0,r.X$)({},n),s=i.type;let c=!1,u=!0;if((0,r.cy)(s))for(let e=0;e<s.length;++e){const t=s[e],n=(0,r.Tn)(t)&&t.name;if("Boolean"===n){c=!0;break}"String"===n&&(u=!1)}else c=(0,r.Tn)(s)&&"Boolean"===s.name;i[0]=c,i[1]=u,(c||(0,r.$3)(i,"default"))&&l.push(t)}}}const u=[a,l];return(0,r.Gv)(e)&&i.set(e,u),u}function ct(e){return"$"!==e[0]&&!(0,r.SU)(e)}const ut=e=>"_"===e[0]||"$stable"===e,ht=e=>(0,r.cy)(e)?e.map(vn):[vn(e)],dt=(e,t,n)=>{if(t._n)return t;const i=C((...e)=>ht(t(...e)),n);return i._c=!1,i},ft=(e,t,n)=>{const i=e._ctx;for(const s in e){if(ut(s))continue;const n=e[s];if((0,r.Tn)(n))t[s]=dt(s,n,i);else if(null!=n){0;const e=ht(n);t[s]=()=>e}}},pt=(e,t)=>{const n=ht(t);e.slots.default=()=>n},gt=(e,t,n)=>{for(const i in t)!n&&ut(i)||(e[i]=t[i])},mt=(e,t,n)=>{const i=e.slots=tt();if(32&e.vnode.shapeFlag){const e=t.__;e&&(0,r.yQ)(i,"__",e,!0);const s=t._;s?(gt(i,t,n),n&&(0,r.yQ)(i,"_",s,!0)):ft(t,i)}else t&&pt(e,t)},vt=(e,t,n)=>{const{vnode:i,slots:s}=e;let o=!0,a=r.MZ;if(32&i.shapeFlag){const e=t._;e?n&&1===e?o=!1:gt(s,t,n):(o=!t.$stable,ft(t,s)),a=t}else t&&(pt(e,t),a={default:1});if(o)for(const r in s)ut(r)||null!=a[r]||delete s[r]};function yt(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,r.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const bt=qt;function wt(e){return _t(e)}function _t(e,t){yt();const n=(0,r.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:l,createText:c,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=r.tE,insertStaticContent:m}=e,v=(e,t,n,i=null,r=null,s=null,o=void 0,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!ln(e,t)&&(i=Q(e),W(e,r,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case Gt:b(e,t,n,i);break;case Xt:w(e,t,n,i);break;case Qt:null==e&&T(t,n,i,o);break;case Kt:L(e,t,n,i,r,s,o,a,l);break;default:1&h?$(e,t,n,i,r,s,o,a,l):6&h?D(e,t,n,i,r,s,o,a,l):(64&h||128&h)&&c.process(e,t,n,i,r,s,o,a,l,Z)}null!=u&&r?te(u,e&&e.ref,s,t||e,!t):null==u&&e&&null!=e.ref&&te(e.ref,null,s,e,!0)},b=(e,t,n,i)=>{if(null==e)s(t.el=c(t.children),n,i);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},w=(e,t,n,i)=>{null==e?s(t.el=u(t.children||""),n,i):t.el=e.el},T=(e,t,n,i)=>{[e.el,e.anchor]=m(e.children,t,n,i,e.el,e.anchor)},S=({el:e,anchor:t},n,i)=>{let r;while(e&&e!==t)r=p(e),s(e,n,i),e=r;s(t,n,i)},I=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},$=(e,t,n,i,r,s,o,a,l)=>{"svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e?k(t,n,i,r,s,o,a,l):O(e,t,r,s,o,a,l)},k=(e,t,n,i,o,c,u,h)=>{let f,p;const{props:g,shapeFlag:m,transition:v,dirs:y}=e;if(f=e.el=l(e.type,c,g&&g.is,g),8&m?d(f,e.children):16&m&&x(e.children,f,null,i,o,Et(e,c),u,h),y&&A(e,null,i,"created"),C(f,e,e.scopeId,u,i),g){for(const e in g)"value"===e||(0,r.SU)(e)||a(f,e,null,g[e],c,i);"value"in g&&a(f,"value",null,g.value,c),(p=g.onVnodeBeforeMount)&&_n(p,i,e)}y&&A(e,null,i,"beforeMount");const b=St(o,v);b&&v.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||b||y)&&bt(()=>{p&&_n(p,i,e),b&&v.enter(f),y&&A(e,null,i,"mounted")},o)},C=(e,t,n,i,r)=>{if(n&&g(e,n),i)for(let s=0;s<i.length;s++)g(e,i[s]);if(r){let n=r.subTree;if(t===n||Wt(n.type)&&(n.ssContent===t||n.ssFallback===t)){const t=r.vnode;C(e,t,t.scopeId,t.slotScopeIds,r.parent)}}},x=(e,t,n,i,r,s,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?yn(e[c]):vn(e[c]);v(null,l,t,n,i,r,s,o,a)}},O=(e,t,n,i,s,o,l)=>{const c=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||r.MZ,g=t.props||r.MZ;let m;if(n&&Tt(n,!1),(m=g.onVnodeBeforeUpdate)&&_n(m,n,t,e),f&&A(t,e,n,"beforeUpdate"),n&&Tt(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&d(c,""),h?R(e.dynamicChildren,h,c,n,i,Et(t,s),o):l||U(e,t,c,null,n,i,Et(t,s),o,!1),u>0){if(16&u)P(c,p,g,n,s);else if(2&u&&p.class!==g.class&&a(c,"class",null,g.class,s),4&u&&a(c,"style",p.style,g.style,s),8&u){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const i=e[t],r=p[i],o=g[i];o===r&&"value"!==i||a(c,i,r,o,s,n)}}1&u&&e.children!==t.children&&d(c,t.children)}else l||null!=h||P(c,p,g,n,s);((m=g.onVnodeUpdated)||f)&&bt(()=>{m&&_n(m,n,t,e),f&&A(t,e,n,"updated")},i)},R=(e,t,n,i,r,s,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===Kt||!ln(l,c)||198&l.shapeFlag)?f(l.el):n;v(l,c,u,null,i,r,s,o,!0)}},P=(e,t,n,i,s)=>{if(t!==n){if(t!==r.MZ)for(const o in t)(0,r.SU)(o)||o in n||a(e,o,t[o],null,s,i);for(const o in n){if((0,r.SU)(o))continue;const l=n[o],c=t[o];l!==c&&"value"!==o&&a(e,o,c,l,s,i)}"value"in n&&a(e,"value",t.value,n.value,s)}},L=(e,t,n,i,r,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(l=l?l.concat(g):g),null==e?(s(h,n,i),s(d,n,i),x(t.children||[],n,d,r,o,a,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(R(e.dynamicChildren,p,n,r,o,a,l),(null!=t.key||r&&t===r.subTree)&&It(e,t,!0)):U(e,t,n,d,r,o,a,l,u)},D=(e,t,n,i,r,s,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?r.ctx.activate(t,n,i,o,l):M(t,n,i,r,s,o,l):V(e,t,l)},M=(e,t,n,i,r,s,o)=>{const a=e.component=Sn(e,i,r);if(ie(e)&&(a.ctx.renderer=Z),Ln(a,!1,o),a.asyncDep){if(r&&r.registerDep(a,j,o),!e.el){const e=a.subTree=dn(Xt);w(null,e,t,n)}}else j(a,e,t,n,r,s,o)},V=(e,t,n)=>{const i=t.component=e.component;if(Bt(e,t,n)){if(i.asyncDep&&!i.asyncResolved)return void F(i,t,n);i.next=t,i.update()}else t.el=e.el,i.vnode=t},j=(e,t,n,s,o,a,l)=>{const c=()=>{if(e.isMounted){let{next:t,bu:n,u:i,parent:s,vnode:u}=e;{const n=kt(e);if(n)return t&&(t.el=u.el,F(e,t,l)),void n.asyncDep.then(()=>{e.isUnmounted||c()})}let h,d=t;0,Tt(e,!1),t?(t.el=u.el,F(e,t,l)):t=u,n&&(0,r.DY)(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&_n(h,s,t,u),Tt(e,!0);const p=jt(e);0;const g=e.subTree;e.subTree=p,v(g,p,f(g.el),Q(g),e,o,a),t.el=p.el,null===d&&Ht(e,p.el),i&&bt(i,o),(h=t.props&&t.props.onVnodeUpdated)&&bt(()=>_n(h,s,t,u),o)}else{let i;const{el:l,props:c}=t,{bm:u,m:h,parent:d,root:f,type:p}=e,g=ne(t);if(Tt(e,!1),u&&(0,r.DY)(u),!g&&(i=c&&c.onVnodeBeforeMount)&&_n(i,d,t),Tt(e,!0),l&&re){const t=()=>{e.subTree=jt(e),re(l,e.subTree,e,o,null)};g&&p.__asyncHydrate?p.__asyncHydrate(l,e,t):t()}else{f.ce&&!1!==f.ce._def.shadowRoot&&f.ce._injectChildStyle(p);const i=e.subTree=jt(e);0,v(null,i,n,s,e,o,a),t.el=i.el}if(h&&bt(h,o),!g&&(i=c&&c.onVnodeMounted)){const e=t;bt(()=>_n(i,d,e),o)}(256&t.shapeFlag||d&&ne(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&bt(e.a,o),e.isMounted=!0,t=n=s=null}};e.scope.on();const u=e.effect=new i.X2(c);e.scope.off();const h=e.update=u.run.bind(u),d=e.job=u.runIfDirty.bind(u);d.i=e,d.id=e.uid,u.scheduler=()=>y(d),Tt(e,!0),h()},F=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,rt(e,t.props,r,n),vt(e,t.children,n),(0,i.C4)(),_(e),(0,i.bl)()},U=(e,t,n,i,r,s,o,a,l=!1)=>{const c=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void z(c,h,n,i,r,s,o,a,l);if(256&f)return void B(c,h,n,i,r,s,o,a,l)}8&p?(16&u&&X(c,r,s),h!==c&&d(n,h)):16&u?16&p?z(c,h,n,i,r,s,o,a,l):X(c,r,s,!0):(8&u&&d(n,""),16&p&&x(h,n,i,r,s,o,a,l))},B=(e,t,n,i,s,o,a,l,c)=>{e=e||r.Oj,t=t||r.Oj;const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const i=t[f]=c?yn(t[f]):vn(t[f]);v(e[f],i,n,null,s,o,a,l,c)}u>h?X(e,s,o,!0,!1,d):x(t,n,i,s,o,a,l,c,d)},z=(e,t,n,i,s,o,a,l,c)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const i=e[u],r=t[u]=c?yn(t[u]):vn(t[u]);if(!ln(i,r))break;v(i,r,n,null,s,o,a,l,c),u++}while(u<=d&&u<=f){const i=e[d],r=t[f]=c?yn(t[f]):vn(t[f]);if(!ln(i,r))break;v(i,r,n,null,s,o,a,l,c),d--,f--}if(u>d){if(u<=f){const e=f+1,r=e<h?t[e].el:i;while(u<=f)v(null,t[u]=c?yn(t[u]):vn(t[u]),n,r,s,o,a,l,c),u++}}else if(u>f)while(u<=d)W(e[u],s,o,!0),u++;else{const p=u,g=u,m=new Map;for(u=g;u<=f;u++){const e=t[u]=c?yn(t[u]):vn(t[u]);null!=e.key&&m.set(e.key,u)}let y,b=0;const w=f-g+1;let _=!1,E=0;const T=new Array(w);for(u=0;u<w;u++)T[u]=0;for(u=p;u<=d;u++){const i=e[u];if(b>=w){W(i,s,o,!0);continue}let r;if(null!=i.key)r=m.get(i.key);else for(y=g;y<=f;y++)if(0===T[y-g]&&ln(i,t[y])){r=y;break}void 0===r?W(i,s,o,!0):(T[r-g]=u+1,r>=E?E=r:_=!0,v(i,t[r],n,null,s,o,a,l,c),b++)}const S=_?$t(T):r.Oj;for(y=S.length-1,u=w-1;u>=0;u--){const e=g+u,r=t[e],d=e+1<h?t[e+1].el:i;0===T[u]?v(null,r,n,d,s,o,a,l,c):_&&(y<0||u!==S[y]?H(r,n,d,2):y--)}}},H=(e,t,n,i,r=null)=>{const{el:a,type:l,transition:c,children:u,shapeFlag:h}=e;if(6&h)return void H(e.component.subTree,t,n,i);if(128&h)return void e.suspense.move(t,n,i);if(64&h)return void l.move(e,t,n,Z);if(l===Kt){s(a,t,n);for(let e=0;e<u.length;e++)H(u[e],t,n,i);return void s(e.anchor,t,n)}if(l===Qt)return void S(e,t,n);const d=2!==i&&1&h&&c;if(d)if(0===i)c.beforeEnter(a),s(a,t,n),bt(()=>c.enter(a),r);else{const{leave:i,delayLeave:r,afterLeave:l}=c,u=()=>{e.ctx.isUnmounted?o(a):s(a,t,n)},h=()=>{i(a,()=>{u(),l&&l()})};r?r(a,u,h):h()}else s(a,t,n)},W=(e,t,n,r=!1,s=!1)=>{const{type:o,props:a,ref:l,children:c,dynamicChildren:u,shapeFlag:h,patchFlag:d,dirs:f,cacheIndex:p}=e;if(-2===d&&(s=!1),null!=l&&((0,i.C4)(),te(l,null,n,e,!0),(0,i.bl)()),null!=p&&(t.renderCache[p]=void 0),256&h)return void t.ctx.deactivate(e);const g=1&h&&f,m=!ne(e);let v;if(m&&(v=a&&a.onVnodeBeforeUnmount)&&_n(v,t,e),6&h)G(e.component,n,r);else{if(128&h)return void e.suspense.unmount(n,r);g&&A(e,null,t,"beforeUnmount"),64&h?e.type.remove(e,t,n,Z,r):u&&!u.hasOnce&&(o!==Kt||d>0&&64&d)?X(u,t,n,!1,!0):(o===Kt&&384&d||!s&&16&h)&&X(c,t,n),r&&q(e)}(m&&(v=a&&a.onVnodeUnmounted)||g)&&bt(()=>{v&&_n(v,t,e),g&&A(e,null,t,"unmounted")},n)},q=e=>{const{type:t,el:n,anchor:i,transition:r}=e;if(t===Kt)return void K(n,i);if(t===Qt)return void I(e);const s=()=>{o(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&e.shapeFlag&&r&&!r.persisted){const{leave:t,delayLeave:i}=r,o=()=>t(n,s);i?i(e.el,s,o):o()}else s()},K=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},G=(e,t,n)=>{const{bum:i,scope:s,job:o,subTree:a,um:l,m:c,a:u,parent:h,slots:{__:d}}=e;Ct(c),Ct(u),i&&(0,r.DY)(i),h&&(0,r.cy)(d)&&d.forEach(e=>{h.renderCache[e]=void 0}),s.stop(),o&&(o.flags|=8,W(a,e,t,n)),l&&bt(l,t),bt(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,i=!1,r=!1,s=0)=>{for(let o=s;o<e.length;o++)W(e[o],t,n,i,r)},Q=e=>{if(6&e.shapeFlag)return Q(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=p(e.anchor||e.el),n=t&&t[N];return n?p(n):t};let J=!1;const Y=(e,t,n)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,J||(J=!0,_(),E(),J=!1)},Z={p:v,um:W,m:H,r:q,mt:M,mc:x,pc:U,pbc:R,n:Q,o:e};let ee,re;return t&&([ee,re]=t(Z)),{render:Y,hydrate:ee,createApp:Qe(Y,ee)}}function Et({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Tt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function St(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function It(e,t,n=!1){const i=e.children,s=t.children;if((0,r.cy)(i)&&(0,r.cy)(s))for(let r=0;r<i.length;r++){const e=i[r];let t=s[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[r]=yn(s[r]),t.el=e.el),n||-2===t.patchFlag||It(e,t)),t.type===Gt&&(t.el=e.el),t.type!==Xt||t.el||(t.el=e.el)}}function $t(e){const t=e.slice(),n=[0];let i,r,s,o,a;const l=e.length;for(i=0;i<l;i++){const l=e[i];if(0!==l){if(r=n[n.length-1],e[r]<l){t[i]=r,n.push(i);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}function kt(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:kt(t)}function Ct(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const xt=Symbol.for("v-scx"),At=()=>{{const e=Ze(xt);return e}};function Nt(e,t,n){return Ot(e,t,n)}function Ot(e,t,n=r.MZ){const{immediate:s,deep:a,flush:l,once:c}=n;const u=(0,r.X$)({},n);const h=t&&s||!t&&"post"!==l;let d;if(Pn)if("sync"===l){const e=At();d=e.__watcherHandles||(e.__watcherHandles=[])}else if(!h){const e=()=>{};return e.stop=r.tE,e.resume=r.tE,e.pause=r.tE,e}const f=In;u.call=(e,t,n)=>o(e,f,t,n);let p=!1;"post"===l?u.scheduler=e=>{bt(e,f&&f.suspense)}:"sync"!==l&&(p=!0,u.scheduler=(e,t)=>{t?e():y(e)}),u.augmentJob=e=>{t&&(e.flags|=4),p&&(e.flags|=2,f&&(e.id=f.uid,e.i=f))};const g=(0,i.wB)(e,t,u);return Pn&&(d?d.push(g):h&&g()),g}function Rt(e,t,n){const i=this.proxy,s=(0,r.Kg)(e)?e.includes(".")?Pt(i,e):()=>i[e]:e.bind(i,i);let o;(0,r.Tn)(t)?o=t:(o=t.handler,n=t);const a=xn(this),l=Ot(s,o.bind(i),n);return a(),l}function Pt(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const Lt=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,r.PT)(t)}Modifiers`]||e[`${(0,r.Tg)(t)}Modifiers`];function Dt(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||r.MZ;let s=n;const a=t.startsWith("update:"),l=a&&Lt(i,t.slice(7));let c;l&&(l.trim&&(s=n.map(e=>(0,r.Kg)(e)?e.trim():e)),l.number&&(s=n.map(r.bB)));let u=i[c=(0,r.rU)(t)]||i[c=(0,r.rU)((0,r.PT)(t))];!u&&a&&(u=i[c=(0,r.rU)((0,r.Tg)(t))]),u&&o(u,e,6,s);const h=i[c+"Once"];if(h){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,o(h,e,6,s)}}function Mt(e,t,n=!1){const i=t.emitsCache,s=i.get(e);if(void 0!==s)return s;const o=e.emits;let a={},l=!1;if(!(0,r.Tn)(e)){const i=e=>{const n=Mt(e,t,!0);n&&(l=!0,(0,r.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return o||l?((0,r.cy)(o)?o.forEach(e=>a[e]=null):(0,r.X$)(a,o),(0,r.Gv)(e)&&i.set(e,a),a):((0,r.Gv)(e)&&i.set(e,null),null)}function Vt(e,t){return!(!e||!(0,r.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,r.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,r.$3)(e,(0,r.Tg)(t))||(0,r.$3)(e,t))}function jt(e){const{type:t,vnode:n,proxy:i,withProxy:s,propsOptions:[o],slots:l,attrs:c,emit:u,render:h,renderCache:d,props:f,data:p,setupState:g,ctx:m,inheritAttrs:v}=e,y=k(e);let b,w;try{if(4&n.shapeFlag){const e=s||i,t=e;b=vn(h.call(t,e,d,f,g,p,m)),w=c}else{const e=t;0,b=vn(e.length>1?e(f,{attrs:c,slots:l,emit:u}):e(f,null)),w=t.props?c:Ft(c)}}catch(E){Jt.length=0,a(E,e,1),b=dn(Xt)}let _=b;if(w&&!1!==v){const e=Object.keys(w),{shapeFlag:t}=_;e.length&&7&t&&(o&&e.some(r.CP)&&(w=Ut(w,o)),_=gn(_,w,!1,!0))}return n.dirs&&(_=gn(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&J(_,n.transition),b=_,k(y),b}const Ft=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,r.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},Ut=(e,t)=>{const n={};for(const i in e)(0,r.CP)(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function Bt(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!r&&!a||a&&a.$stable)||i!==o&&(i?!o||zt(i,o,c):!!o);if(1024&l)return!0;if(16&l)return i?zt(i,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==i[n]&&!Vt(c,n))return!0}}return!1}function zt(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!Vt(n,s))return!0}return!1}function Ht({vnode:e,parent:t},n){while(t){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i!==e)break;(e=t.vnode).el=n,t=t.parent}}const Wt=e=>e.__isSuspense;function qt(e,t){t&&t.pendingBranch?(0,r.cy)(e)?t.effects.push(...e):t.effects.push(e):w(e)}const Kt=Symbol.for("v-fgt"),Gt=Symbol.for("v-txt"),Xt=Symbol.for("v-cmt"),Qt=Symbol.for("v-stc"),Jt=[];let Yt=null;function Zt(e=!1){Jt.push(Yt=e?null:[])}function en(){Jt.pop(),Yt=Jt[Jt.length-1]||null}let tn=1;function nn(e,t=!1){tn+=e,e<0&&Yt&&t&&(Yt.hasOnce=!0)}function rn(e){return e.dynamicChildren=tn>0?Yt||r.Oj:null,en(),tn>0&&Yt&&Yt.push(e),e}function sn(e,t,n,i,r,s){return rn(hn(e,t,n,i,r,s,!0))}function on(e,t,n,i,r){return rn(dn(e,t,n,i,r,!0))}function an(e){return!!e&&!0===e.__v_isVNode}function ln(e,t){return e.type===t.type&&e.key===t.key}const cn=({key:e})=>null!=e?e:null,un=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,r.Kg)(e)||(0,i.i9)(e)||(0,r.Tn)(e)?{i:I,r:e,k:t,f:!!n}:e:null);function hn(e,t=null,n=null,i=0,s=null,o=(e===Kt?0:1),a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&cn(t),ref:t&&un(t),scopeId:$,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:I};return l?(bn(c,n),128&o&&e.normalize(c)):n&&(c.shapeFlag|=(0,r.Kg)(n)?8:16),tn>0&&!a&&Yt&&(c.patchFlag>0||6&o)&&32!==c.patchFlag&&Yt.push(c),c}const dn=fn;function fn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Ie||(e=Xt),an(e)){const i=gn(e,t,!0);return n&&bn(i,n),tn>0&&!a&&Yt&&(6&i.shapeFlag?Yt[Yt.indexOf(e)]=i:Yt.push(i)),i.patchFlag=-2,i}if(zn(e)&&(e=e.__vccOpts),t){t=pn(t);let{class:e,style:n}=t;e&&!(0,r.Kg)(e)&&(t.class=(0,r.C4)(e)),(0,r.Gv)(n)&&((0,i.ju)(n)&&!(0,r.cy)(n)&&(n=(0,r.X$)({},n)),t.style=(0,r.Tr)(n))}const l=(0,r.Kg)(e)?1:Wt(e)?128:O(e)?64:(0,r.Gv)(e)?4:(0,r.Tn)(e)?2:0;return hn(e,t,n,s,o,l,a,!0)}function pn(e){return e?(0,i.ju)(e)||nt(e)?(0,r.X$)({},e):e:null}function gn(e,t,n=!1,i=!1){const{props:s,ref:o,patchFlag:a,children:l,transition:c}=e,u=t?wn(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&cn(u),ref:t&&t.ref?n&&o?(0,r.cy)(o)?o.concat(un(t)):[o,un(t)]:un(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Kt?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&gn(e.ssContent),ssFallback:e.ssFallback&&gn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&i&&J(h,c.clone(h)),h}function mn(e=" ",t=0){return dn(Gt,null,e,t)}function vn(e){return null==e||"boolean"===typeof e?dn(Xt):(0,r.cy)(e)?dn(Kt,null,e.slice()):an(e)?yn(e):dn(Gt,null,String(e))}function yn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:gn(e)}function bn(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if((0,r.cy)(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),bn(e,n()),n._c&&(n._d=!0)))}{n=32;const i=t._;i||nt(t)?3===i&&I&&(1===I.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=I}}else(0,r.Tn)(t)?(t={default:t,_ctx:I},n=32):(t=String(t),64&i?(n=16,t=[mn(t)]):n=8);e.children=t,e.shapeFlag|=n}function wn(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=(0,r.C4)([t.class,i.class]));else if("style"===e)t.style=(0,r.Tr)([t.style,i.style]);else if((0,r.Mp)(e)){const n=t[e],s=i[e];!s||n===s||(0,r.cy)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=i[e])}return t}function _n(e,t,n,i=null){o(e,t,7,[n,i])}const En=Ge();let Tn=0;function Sn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||En,a={uid:Tn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new i.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lt(s,o),emitsOptions:Mt(s,o),emit:null,emitted:null,propsDefaults:r.MZ,inheritAttrs:s.inheritAttrs,ctx:r.MZ,data:r.MZ,props:r.MZ,attrs:r.MZ,slots:r.MZ,refs:r.MZ,setupState:r.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Dt.bind(null,a),e.ce&&e.ce(a),a}let In=null;const $n=()=>In||I;let kn,Cn;{const e=(0,r.We)(),t=(t,n)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(n),e=>{i.length>1?i.forEach(t=>t(e)):i[0](e)}};kn=t("__VUE_INSTANCE_SETTERS__",e=>In=e),Cn=t("__VUE_SSR_SETTERS__",e=>Pn=e)}const xn=e=>{const t=In;return kn(e),e.scope.on(),()=>{e.scope.off(),kn(t)}},An=()=>{In&&In.scope.off(),kn(null)};function Nn(e){return 4&e.vnode.shapeFlag}let On,Rn,Pn=!1;function Ln(e,t=!1,n=!1){t&&Cn(t);const{props:i,children:r}=e.vnode,s=Nn(e);it(e,i,s,t),mt(e,r,n||t);const o=s?Dn(e,t):void 0;return t&&Cn(!1),o}function Dn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ne);const{setup:o}=n;if(o){(0,i.C4)();const n=e.setupContext=o.length>1?Fn(e):null,l=xn(e),c=s(o,e,0,[e.props,n]),u=(0,r.yL)(c);if((0,i.bl)(),l(),!u&&!e.sp||ne(e)||ee(e),u){if(c.then(An,An),t)return c.then(n=>{Mn(e,n,t)}).catch(t=>{a(t,e,0)});e.asyncDep=c}else Mn(e,c,t)}else Vn(e,t)}function Mn(e,t,n){(0,r.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,r.Gv)(t)&&(e.setupState=(0,i.Pr)(t)),Vn(e,n)}function Vn(e,t,n){const s=e.type;if(!e.render){if(!t&&On&&!s.render){const t=s.template||Ve(e).template;if(t){0;const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,l=(0,r.X$)((0,r.X$)({isCustomElement:n,delimiters:o},i),a);s.render=On(t,l)}}e.render=s.render||r.tE,Rn&&Rn(e)}{const t=xn(e);(0,i.C4)();try{Pe(e)}finally{(0,i.bl)(),t()}}}const jn={get(e,t){return(0,i.u4)(e,"get",""),e[t]}};function Fn(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,jn),slots:e.slots,emit:e.emit,expose:t}}function Un(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,i.Pr)((0,i.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in xe?xe[n](e):void 0},has(e,t){return t in e||t in xe}})):e.proxy}function Bn(e,t=!0){return(0,r.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function zn(e){return(0,r.Tn)(e)&&"__vccOpts"in e}const Hn=(e,t)=>{const n=(0,i.EW)(e,t,Pn);return n};function Wn(e,t,n){const i=arguments.length;return 2===i?(0,r.Gv)(t)&&!(0,r.cy)(t)?an(t)?dn(e,null,[t]):dn(e,t):dn(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&an(n)&&(n=[n]),dn(e,t,n))}const qn="3.5.17"},692:(e,t,n)=>{n.d(t,{L:()=>o,a:()=>a,b:()=>l,c:()=>c,d:()=>u,g:()=>P,l:()=>A,s:()=>O,t:()=>y});var i=n(362),r=n(993),s=n(185);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o="ionViewWillEnter",a="ionViewDidEnter",l="ionViewWillLeave",c="ionViewDidLeave",u="ionViewWillUnload",h=e=>{e.tabIndex=-1,e.focus()},d=e=>null!==e.offsetParent,f=()=>{const e=e=>{const t=i.c.get("focusManagerPriority",!1);if(t){const t=document.activeElement;null!==t&&(null===e||void 0===e?void 0:e.contains(t))&&t.setAttribute(p,"true")}},t=e=>{const t=i.c.get("focusManagerPriority",!1);if(Array.isArray(t)&&!e.contains(document.activeElement)){const n=e.querySelector(`[${p}]`);if(n&&d(n))return void h(n);for(const r of t)switch(r){case"content":const t=e.querySelector('main, [role="main"]');if(t&&d(t))return void h(t);break;case"heading":const n=e.querySelector('h1, [role="heading"][aria-level="1"]');if(n&&d(n))return void h(n);break;case"banner":const s=e.querySelector('header, [role="banner"]');if(s&&d(s))return void h(s);break;default:(0,i.p)(`Unrecognized focus manager priority value ${r}`);break}h(e)}};return{saveViewFocus:e,setViewFocus:t}},p="ion-last-focus",g=()=>Promise.all([n.e(746),n.e(692)]).then(n.bind(n,311)),m=()=>Promise.all([n.e(746),n.e(394)]).then(n.bind(n,394)),v=f(),y=e=>new Promise((t,n)=>{(0,r.bN)(()=>{b(e),w(e).then(n=>{n.animation&&n.animation.destroy(),_(e),t(n)},t=>{_(e),n(t)})})}),b=e=>{const t=e.enteringEl,n=e.leavingEl;v.saveViewFocus(n),R(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),O(t,!1),t.style.setProperty("pointer-events","none"),n&&(O(n,!1),n.style.setProperty("pointer-events","none"))},w=async e=>{const t=await E(e),n=t&&r.L2.isBrowser?T(t,e):S(e);return n},_=e=>{const t=e.enteringEl,n=e.leavingEl;t.classList.remove("ion-page-invisible"),t.style.removeProperty("pointer-events"),void 0!==n&&(n.classList.remove("ion-page-invisible"),n.style.removeProperty("pointer-events")),v.setViewFocus(t)},E=async e=>{if(!e.leavingEl||!e.animated||0===e.duration)return;if(e.animationBuilder)return e.animationBuilder;const t="ios"===e.mode?(await g()).iosTransitionAnimation:(await m()).mdTransitionAnimation;return t},T=async(e,t)=>{await I(t,!0);const n=e(t.baseEl,t);C(t.enteringEl,t.leavingEl);const i=await k(n,t);return t.progressCallback&&t.progressCallback(void 0),i&&x(t.enteringEl,t.leavingEl),{hasCompleted:i,animation:n}},S=async e=>{const t=e.enteringEl,n=e.leavingEl,r=i.c.get("focusManagerPriority",!1);return await I(e,r),C(t,n),x(t,n),{hasCompleted:!0}},I=async(e,t)=>{const n=void 0!==e.deepWait?e.deepWait:t;n&&await Promise.all([N(e.enteringEl),N(e.leavingEl)]),await $(e.viewIsReady,e.enteringEl)},$=async(e,t)=>{e&&await e(t)},k=(e,t)=>{const n=t.progressCallback,i=new Promise(t=>{e.onFinish(e=>t(1===e))});return n?(e.progressStart(!0),n(e)):e.play(),i},C=(e,t)=>{A(t,l),A(e,o)},x=(e,t)=>{A(e,a),A(t,c)},A=(e,t)=>{if(e){const n=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}},N=async e=>{const t=e;if(t){if(null!=t.componentOnReady){const e=await t.componentOnReady();if(null!=e)return}else if(null!=t.__registerHost){const e=new Promise(e=>(0,s.r)(e));return void await e}await Promise.all(Array.from(t.children).map(N))}},O=(e,t)=>{t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},R=(e,t,n)=>{void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")},P=e=>{if(e.classList.contains("ion-page"))return e;const t=e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return t||e}},705:()=>{},706:()=>{},725:(e,t,n)=>{n.d(t,{d:()=>r,w:()=>i});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const i="undefined"!==typeof window?window:void 0,r="undefined"!==typeof document?document:void 0},751:(e,t,n)=>{n.d(t,{Ef:()=>q});var i=n(641),r=n(33);n(953);
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let s;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{s=o.createPolicy("vue",{createHTML:e=>e})}catch(X){}const a=s?e=>s.createHTML(e):e=>e,l="http://www.w3.org/2000/svg",c="http://www.w3.org/1998/Math/MathML",u="undefined"!==typeof document?document:null,h=u&&u.createElement("template"),d={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r="svg"===t?u.createElementNS(l,e):"mathml"===t?u.createElementNS(c,e):n?u.createElement(e,{is:n}):u.createElement(e);return"select"===e&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:e=>u.createTextNode(e),createComment:e=>u.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>u.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling)){while(1)if(t.insertBefore(r.cloneNode(!0),n),r===s||!(r=r.nextSibling))break}else{h.innerHTML=a("svg"===i?`<svg>${e}</svg>`:"mathml"===i?`<math>${e}</math>`:e);const r=h.content;if("svg"===i||"mathml"===i){const e=r.firstChild;while(e.firstChild)r.appendChild(e.firstChild);r.removeChild(e)}t.insertBefore(r,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},f=Symbol("_vtc"),p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};i.QP;function g(e,t,n){const i=e[f];i&&(t=(t?[t,...i]:[...i]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const m=Symbol("_vod"),v=Symbol("_vsh");const y=Symbol("");const b=/(^|;)\s*display\s*:/;function w(e,t,n){const i=e.style,s=(0,r.Kg)(n);let o=!1;if(n&&!s){if(t)if((0,r.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&E(i,t,"")}else for(const e in t)null==n[e]&&E(i,e,"");for(const e in n)"display"===e&&(o=!0),E(i,e,n[e])}else if(s){if(t!==n){const e=i[y];e&&(n+=";"+e),i.cssText=n,o=b.test(n)}}else t&&e.removeAttribute("style");m in e&&(e[m]=o?i.display:"",e[v]&&(i.display="none"))}const _=/\s*!important$/;function E(e,t,n){if((0,r.cy)(n))n.forEach(n=>E(e,t,n));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=I(e,t);_.test(n)?e.setProperty((0,r.Tg)(i),n.replace(_,""),"important"):e[i]=n}}const T=["Webkit","Moz","ms"],S={};function I(e,t){const n=S[t];if(n)return n;let i=(0,r.PT)(t);if("filter"!==i&&i in e)return S[t]=i;i=(0,r.ZH)(i);for(let r=0;r<T.length;r++){const n=T[r]+i;if(n in e)return S[t]=n}return t}const $="http://www.w3.org/1999/xlink";function k(e,t,n,i,s,o=(0,r.J$)(t)){i&&t.startsWith("xlink:")?null==n?e.removeAttributeNS($,t.slice(6,t.length)):e.setAttributeNS($,t,n):null==n||o&&!(0,r.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,o?"":(0,r.Bm)(n)?String(n):n)}function C(e,t,n,i,s){if("innerHTML"===t||"textContent"===t)return void(null!=n&&(e[t]="innerHTML"===t?a(n):n));const o=e.tagName;if("value"===t&&"PROGRESS"!==o&&!o.includes("-")){const i="OPTION"===o?e.getAttribute("value")||"":e.value,r=null==n?"checkbox"===e.type?"on":"":String(n);return i===r&&"_value"in e||(e.value=r),null==n&&e.removeAttribute(t),void(e._value=n)}let l=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.Y2)(n):null==n&&"string"===i?(n="",l=!0):"number"===i&&(n=0,l=!0)}try{e[t]=n}catch(X){0}l&&e.removeAttribute(s||t)}function x(e,t,n,i){e.addEventListener(t,n,i)}function A(e,t,n,i){e.removeEventListener(t,n,i)}const N=Symbol("_vei");function O(e,t,n,i,r=null){const s=e[N]||(e[N]={}),o=s[t];if(i&&o)o.value=i;else{const[n,a]=P(t);if(i){const o=s[t]=V(i,r);x(e,n,o,a)}else o&&(A(e,n,o,a),s[t]=void 0)}}const R=/(?:Once|Passive|Capture)$/;function P(e){let t;if(R.test(e)){let n;t={};while(n=e.match(R))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.Tg)(e.slice(2));return[n,t]}let L=0;const D=Promise.resolve(),M=()=>L||(D.then(()=>L=0),L=Date.now());function V(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.qL)(j(e,n.value),t,5,[e])};return n.value=e,n.attached=M(),n}function j(e,t){if((0,r.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}return t}const F=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,U=(e,t,n,i,s,o)=>{const a="svg"===s;"class"===t?g(e,i,a):"style"===t?w(e,n,i):(0,r.Mp)(t)?(0,r.CP)(t)||O(e,t,n,i,o):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):B(e,t,i,a))?(C(e,t,i),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||k(e,t,i,a,o,"value"!==t)):!e._isVueCE||!/[A-Z]/.test(t)&&(0,r.Kg)(i)?("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),k(e,t,i,a)):C(e,(0,r.PT)(t),i,o,t)};function B(e,t,n,i){if(i)return"innerHTML"===t||"textContent"===t||!!(t in e&&F(t)&&(0,r.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t||"autocorrect"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!F(t)||!(0,r.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;Symbol("_moveCb"),Symbol("_enterCb");Symbol("_assign");const z=(0,r.X$)({patchProp:U},d);let H;function W(){return H||(H=(0,i.K9)(z))}const q=(...e)=>{const t=W().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=G(e);if(!i)return;const s=t._component;(0,r.Tn)(s)||s.render||s.template||(s.template=i.innerHTML),1===i.nodeType&&(i.textContent="");const o=n(i,!1,K(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function K(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function G(e){if((0,r.Kg)(e)){const t=document.querySelector(e);return t}return e}},789:(e,t,n)=>{n.r(t),n.d(t,{MENU_BACK_BUTTON_PRIORITY:()=>c,OVERLAY_BACK_BUTTON_PRIORITY:()=>l,blockHardwareBackButton:()=>o,shouldUseCloseWatcher:()=>s,startHardwareBackButton:()=>a});var i=n(725),r=n(362);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s=()=>r.c.get("experimentalCloseWatcher",!1)&&void 0!==i.w&&"CloseWatcher"in i.w,o=()=>{document.addEventListener("backbutton",()=>{})},a=()=>{const e=document;let t=!1;const n=()=>{if(t)return;let n=0,i=[];const s=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(e,t){i.push({priority:e,handler:t,id:n++})}}});e.dispatchEvent(s);const o=async e=>{try{if(null===e||void 0===e?void 0:e.handler){const t=e.handler(a);null!=t&&await t}}catch(t){(0,r.a)("[ion-app] - Exception in startHardwareBackButton:",t)}},a=()=>{if(i.length>0){let e={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};i.forEach(t=>{t.priority>=e.priority&&(e=t)}),t=!0,i=i.filter(t=>t.id!==e.id),o(e).then(()=>t=!1)}};a()};if(s()){let e;const t=()=>{null===e||void 0===e||e.destroy(),e=new i.w.CloseWatcher,e.onclose=()=>{n(),t()}};t()}else e.addEventListener("backbutton",n)},l=100,c=99},862:()=>{},884:(e,t,n)=>{n.d(t,{aU:()=>ls});var i,r=n(461),s=n(125),o=n(424),a=n(72),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},c={};(function(){var e;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function s(e,t,n){n||(n=0);var i=Array(16);if("string"===typeof t)for(var r=0;16>r;++r)i[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var s=e.g[3],o=t+(s^n&(r^s))+i[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(r^s&(n^r))+i[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(n^r^s)+i[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(r^(n|~s))+i[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+s&4294967295}function o(e,t){var n=l;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}function a(e,t){this.h=t;for(var n=[],i=!0,r=e.length-1;0<=r;r--){var s=0|e[r];i&&s==t||(n[r]=s,i=!1)}this.g=n}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},r.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=this.B,r=this.h,o=0;o<t;){if(0==r)for(;o<=n;)s(this,e,o),o+=this.blockSize;if("string"===typeof e){for(;o<t;)if(i[r++]=e.charCodeAt(o++),r==this.blockSize){s(this,i),r=0;break}}else for(;o<t;)if(i[r++]=e[o++],r==this.blockSize){s(this,i),r=0;break}}this.h=r,this.o+=t},r.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};var l={};function u(e){return-128<=e&&128>e?o(e,function(e){return new a([0|e],0>e?-1:0)}):new a([0|e],0>e?-1:0)}function h(e){if(isNaN(e)||!isFinite(e))return f;if(0>e)return y(h(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new a(t,0)}function d(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return y(d(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=h(Math.pow(t,8)),i=f,r=0;r<e.length;r+=8){var s=Math.min(8,e.length-r),o=parseInt(e.substring(r,r+s),t);8>s?(s=h(Math.pow(t,s)),i=i.j(s).add(h(o))):(i=i.j(n),i=i.add(h(o)))}return i}var f=u(0),p=u(1),g=u(16777216);function m(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function v(e){return-1==e.h}function y(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new a(n,~e.h).add(p)}function b(e,t){return e.add(y(t))}function w(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function _(e,t){this.g=e,this.h=t}function E(e,t){if(m(t))throw Error("division by zero");if(m(e))return new _(f,f);if(v(e))return t=E(y(e),t),new _(y(t.g),y(t.h));if(v(t))return t=E(e,y(t)),new _(y(t.g),t.h);if(30<e.g.length){if(v(e)||v(t))throw Error("slowDivide_ only works with positive integers.");for(var n=p,i=t;0>=i.l(e);)n=T(n),i=T(i);var r=S(n,1),s=S(i,1);for(i=S(i,2),n=S(n,2);!m(i);){var o=s.add(i);0>=o.l(e)&&(r=r.add(n),s=o),i=S(i,1),n=S(n,1)}return t=b(e,r.j(t)),new _(r,t)}for(r=f;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=h(n),o=s.j(t);v(o)||0<o.l(e);)n-=i,s=h(n),o=s.j(t);m(s)&&(s=p),r=r.add(s),e=b(e,o)}return new _(r,e)}function T(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new a(n,e.h)}function S(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,r=[],s=0;s<i;s++)r[s]=0<t?e.i(s+n)>>>t|e.i(s+n+1)<<32-t:e.i(s+n);return new a(r,e.h)}e=a.prototype,e.m=function(){if(v(this))return-y(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.i(n);e+=(0<=i?i:4294967296+i)*t,t*=4294967296}return e},e.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(m(this))return"0";if(v(this))return"-"+y(this).toString(e);for(var t=h(Math.pow(e,6)),n=this,i="";;){var r=E(n,t).g;n=b(n,r.j(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=r,m(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return e=b(this,e),v(e)?-1:m(e)?0:1},e.abs=function(){return v(this)?y(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,r=0;r<=t;r++){var s=i+(65535&this.i(r))+(65535&e.i(r)),o=(s>>>16)+(this.i(r)>>>16)+(e.i(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new a(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(m(this)||m(e))return f;if(v(this))return v(e)?y(this).j(y(e)):y(y(this).j(e));if(v(e))return y(this.j(y(e)));if(0>this.l(g)&&0>e.l(g))return h(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<e.g.length;r++){var s=this.i(i)>>>16,o=65535&this.i(i),l=e.i(r)>>>16,c=65535&e.i(r);n[2*i+2*r]+=o*c,w(n,2*i+2*r),n[2*i+2*r+1]+=s*c,w(n,2*i+2*r+1),n[2*i+2*r+1]+=o*l,w(n,2*i+2*r+1),n[2*i+2*r+2]+=s*l,w(n,2*i+2*r+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new a(n,0)},e.A=function(e){return E(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new a(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new a(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new a(n,this.h^e.h)},r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,c.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,i=c.Integer=a}).apply("undefined"!==typeof l?l:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var u,h,d,f,p,g,m,v,y="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},b={};(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};function n(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof y&&y];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var i=n(this);function r(e,n){if(n)e:{var r=i;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in r))break e;r=r[o]}e=e[e.length-1],s=r[e],n=n(s),n!=s&&null!=n&&t(r,e,{configurable:!0,writable:!0,value:n})}}function s(e,t){e instanceof String&&(e+="");var n=0,i=!1,r={next:function(){if(!i&&n<e.length){var r=n++;return{value:t(r,e[r]),done:!1}}return i=!0,{done:!0,value:void 0}}};return r[Symbol.iterator]=function(){return r},r}r("Array.prototype.values",function(e){return e||function(){return s(this,function(e,t){return t})}});
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var o=o||{},a=this||self;function l(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function c(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function w(e,t,n){return e.call.apply(e.bind,arguments)}function _(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function E(e,t,n){return E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:_,E.apply(null,arguments)}function T(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function S(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function I(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function $(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(l(t)){const n=e.length||0,i=t.length||0;e.length=n+i;for(let r=0;r<i;r++)e[n+r]=t[r]}else e.push(t)}}class k{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function C(e){return/^[\s\xa0]*$/.test(e)}function x(){var e=a.navigator;return e&&(e=e.userAgent)?e:""}function A(e){return A[" "](e),e}A[" "]=function(){};var N=-1!=x().indexOf("Gecko")&&!(-1!=x().toLowerCase().indexOf("webkit")&&-1==x().indexOf("Edge"))&&!(-1!=x().indexOf("Trident")||-1!=x().indexOf("MSIE"))&&-1==x().indexOf("Edge");function O(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function R(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function P(e){const t={};for(const n in e)t[n]=e[n];return t}const L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(e,t){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)e[n]=i[n];for(let t=0;t<L.length;t++)n=L[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function M(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function V(e){a.setTimeout(()=>{throw e},0)}function j(){var e=W;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class F{constructor(){this.h=this.g=null}add(e,t){const n=U.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var U=new k(()=>new B,e=>e.reset());class B{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let z,H=!1,W=new F,q=()=>{const e=a.Promise.resolve(void 0);z=()=>{e.then(K)}};var K=()=>{for(var e;e=j();){try{e.h.call(e.g)}catch(n){V(n)}var t=U;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}H=!1};function G(){this.s=this.s,this.C=this.C}function X(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},X.prototype.h=function(){this.defaultPrevented=!0};var Q=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};a.addEventListener("test",e,t),a.removeEventListener("test",e,t)}catch(n){}return e}();function J(e,t){if(X.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(N){e:{try{A(t.nodeName);var r=!0;break e}catch(s){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:Y[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&J.aa.h.call(this)}}S(J,X);var Y={2:"touch",3:"pen",4:"mouse"};J.prototype.h=function(){J.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Z="closure_listenable_"+(1e6*Math.random()|0),ee=0;function te(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=r,this.key=++ee,this.da=this.fa=!1}function ne(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ie(e){this.src=e,this.g={},this.h=0}function re(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=Array.prototype.indexOf.call(r,t,void 0);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ne(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function se(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==i)return r}return-1}ie.prototype.add=function(e,t,n,i,r){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=se(e,t,i,r);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new te(t,this.src,s,!!i,r),t.fa=n,e.push(t)),t};var oe="closure_lm_"+(1e6*Math.random()|0),ae={};function le(e,t,n,i,r){if(i&&i.once)return he(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)le(e,t[s],n,i,r);return null}return n=ye(n),e&&e[Z]?e.K(t,n,c(i)?!!i.capture:!!i,r):ce(e,t,n,!1,i,r)}function ce(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=c(r)?!!r.capture:!!r,a=me(e);if(a||(e[oe]=a=new ie(e)),n=a.add(t,n,i,o,s),n.proxy)return n;if(i=ue(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)Q||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(pe(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function ue(){function e(n){return t.call(e.src,e.listener,n)}const t=ge;return e}function he(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)he(e,t[s],n,i,r);return null}return n=ye(n),e&&e[Z]?e.L(t,n,c(i)?!!i.capture:!!i,r):ce(e,t,n,!0,i,r)}function de(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)de(e,t[s],n,i,r);else i=c(i)?!!i.capture:!!i,n=ye(n),e&&e[Z]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=se(s,n,i,r),-1<n&&(ne(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=me(e))&&(t=e.g[t.toString()],e=-1,t&&(e=se(t,n,i,r)),(n=-1<e?t[e]:null)&&fe(n))}function fe(e){if("number"!==typeof e&&e&&!e.da){var t=e.src;if(t&&t[Z])re(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(pe(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=me(t))?(re(n,e),0==n.h&&(n.src=null,t[oe]=null)):ne(e)}}}function pe(e){return e in ae?ae[e]:ae[e]="on"+e}function ge(e,t){if(e.da)e=!0;else{t=new J(t,this);var n=e.listener,i=e.ha||e.src;e.fa&&fe(e),e=n.call(i,t)}return e}function me(e){return e=e[oe],e instanceof ie?e:null}var ve="__closure_events_fn_"+(1e9*Math.random()>>>0);function ye(e){return"function"===typeof e?e:(e[ve]||(e[ve]=function(t){return e.handleEvent(t)}),e[ve])}function be(){G.call(this),this.i=new ie(this),this.M=this,this.F=null}function we(e,t){var n,i=e.F;if(i)for(n=[];i;i=i.F)n.push(i);if(e=e.M,i=t.type||t,"string"===typeof t)t=new X(t,e);else if(t instanceof X)t.target=t.target||e;else{var r=t;t=new X(i,e),D(t,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=_e(o,i,!0,t)&&r}if(o=t.g=e,r=_e(o,i,!0,t)&&r,r=_e(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)o=t.g=n[s],r=_e(o,i,!1,t)&&r}function _e(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.fa&&re(e.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}function Ee(e,t,n){if("function"===typeof e)n&&(e=E(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=E(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}function Te(e){e.g=Ee(()=>{e.g=null,e.i&&(e.i=!1,Te(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}S(be,G),be.prototype[Z]=!0,be.prototype.removeEventListener=function(e,t,n,i){de(this,e,t,n,i)},be.prototype.N=function(){if(be.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)ne(n[i]);delete t.g[e],t.h--}}this.F=null},be.prototype.K=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},be.prototype.L=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};class Se extends G{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:Te(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ie(e){G.call(this),this.h=e,this.g={}}S(Ie,G);var $e=[];function ke(e){O(e.g,function(e,t){this.g.hasOwnProperty(t)&&fe(e)},e),e.g={}}Ie.prototype.N=function(){Ie.aa.N.call(this),ke(this)},Ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ce=a.JSON.stringify,xe=a.JSON.parse,Ae=class{stringify(e){return a.JSON.stringify(e,void 0)}parse(e){return a.JSON.parse(e,void 0)}};function Ne(){}function Oe(e){return e.h||(e.h=e.i())}function Re(){}Ne.prototype.h=null;var Pe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Le(){X.call(this,"d")}function De(){X.call(this,"c")}S(Le,X),S(De,X);var Me={},Ve=null;function je(){return Ve=Ve||new be}function Fe(e){X.call(this,Me.La,e)}function Ue(e){const t=je();we(t,new Fe(t))}function Be(e,t){X.call(this,Me.STAT_EVENT,e),this.stat=t}function ze(e){const t=je();we(t,new Be(t,e))}function He(e,t){X.call(this,Me.Ma,e),this.size=t}function We(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){e()},t)}function qe(){this.g=!0}function Ke(e,t,n,i,r,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o})}function Ge(e,t,n,i,r,s,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o})}function Xe(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Je(e,n)+(i?" "+i:"")})}function Qe(e,t){e.info(function(){return"TIMEOUT: "+t})}function Je(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Ce(n)}catch(a){return t}}Me.La="serverreachability",S(Fe,X),Me.STAT_EVENT="statevent",S(Be,X),Me.Ma="timingevent",S(He,X),qe.prototype.xa=function(){this.g=!1},qe.prototype.info=function(){};var Ye,Ze={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},et={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function tt(){}function nt(e,t,n,i){this.j=e,this.i=t,this.l=n,this.R=i||1,this.U=new Ie(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new it}function it(){this.i=null,this.g="",this.h=!1}S(tt,Ne),tt.prototype.g=function(){return new XMLHttpRequest},tt.prototype.i=function(){return{}},Ye=new tt;var rt={},st={};function ot(e,t,n){e.L=1,e.v=Lt(At(t)),e.m=n,e.P=!0,at(e,null)}function at(e,t){e.F=Date.now(),ut(e),e.A=At(e.v);var n=e.A,i=e.R;Array.isArray(i)||(i=[String(i)]),Gt(n.i,"t",i),e.C=0,n=e.j.J,e.h=new it,e.g=Un(e.j,n?t:null,!e.m),0<e.O&&(e.M=new Se(E(e.Y,e,e.g),e.O)),t=e.U,n=e.g,i=e.ca;var r="readystatechange";Array.isArray(r)||(r&&($e[0]=r.toString()),r=$e);for(var s=0;s<r.length;s++){var o=le(n,r[s],i||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?P(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ue(),Ke(e.i,e.u,e.A,e.l,e.R,e.m)}function lt(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function ct(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?st:(n=Number(t.substring(n,i)),isNaN(n)?rt:(i+=1,i+n>t.length?st:(t=t.slice(i,i+n),e.C=i+n,t)))}function ut(e){e.S=Date.now()+e.I,ht(e,e.I)}function ht(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=We(E(e.ba,e),t)}function dt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function ft(e){0==e.j.G||e.J||Dn(e.j,e)}function pt(e){dt(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ke(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function gt(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||wt(n.h,e)))if(!e.K&&wt(n.h,e)&&3==n.G){try{var i=n.Da.g.parse(t)}catch(c){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Ln(n),Sn(n)}On(n),ze(18)}}else n.za=r[1],0<n.za-n.T&&37500>r[2]&&n.F&&0==n.v&&!n.C&&(n.C=We(E(n.Za,n),6e3));if(1>=bt(n.h)&&n.ca){try{n.ca()}catch(c){}n.ca=void 0}}else Vn(n,11)}else if((e.K||n.g==e)&&Ln(n),!C(t))for(r=n.Da.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.K=c[1],n.ia=c[2];const t=c[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const r=c[4];null!=r&&(n.Aa=r,n.j.info("SVER="+n.Aa));const u=c[5];null!=u&&"number"===typeof u&&0<u&&(i=1.5*u,n.L=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(_t(s,s.h),s.h=null))}if(i.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.ya=e,Pt(i.I,i.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms")),i=n;var o=e;if(i.qa=Fn(i,i.J?i.ia:null,i.W),o.K){Et(i.h,o);var a=o,l=i.L;l&&(a.I=l),a.B&&(dt(a),ut(a)),i.g=o}else Nn(i);0<n.i.length&&$n(n)}else"stop"!=c[0]&&"close"!=c[0]||Vn(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Vn(n,7):Tn(n):"noop"!=c[0]&&n.l&&n.l.ta(c),n.v=0)}Ue(4)}catch(c){}}nt.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==yn(e)?t.j():this.Y(e)},nt.prototype.Y=function(e){try{if(e==this.g)e:{const d=yn(this.g);var t=this.g.Ba();const f=this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||bn(this.g)))){this.J||4!=d||7==t||Ue(8==t||0>=f?3:2),dt(this);var n=this.g.Z();this.X=n;t:if(lt(this)){var i=bn(this.g);e="";var r=i.length,s=4==yn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){pt(this),ft(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:!(s&&t==r-1)});i.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,Ge(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,c=this.g;if((l=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(l)){var u=l;break t}}u=null}if(!(n=u)){this.o=!1,this.s=3,ze(12),pt(this),ft(this);break e}Xe(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gt(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<o.length;){if(e=ct(this,o),e==st){4==d&&(this.s=4,ze(14),n=!1),Xe(this.i,this.l,null,"[Incomplete Response]");break}if(e==rt){this.s=4,ze(15),Xe(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Xe(this.i,this.l,e,null),gt(this,e)}if(lt(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=o.length||this.h.h||(this.s=1,ze(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),Rn(h),h.M=!0,ze(11))}}else Xe(this.i,this.l,o,"[Invalid Chunked Response]"),pt(this),ft(this)}else Xe(this.i,this.l,o,null),gt(this,o);4==d&&pt(this),this.o&&!this.J&&(4==d?Dn(this.j,this):(this.o=!1,ut(this)))}else wn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,ze(12)):(this.s=0,ze(13)),pt(this),ft(this)}}}catch(d){}},nt.prototype.cancel=function(){this.J=!0,pt(this)},nt.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(Qe(this.i,this.A),2!=this.L&&(Ue(),ze(17)),pt(this),this.s=2,ft(this)):ht(this,this.S-e)};var mt=class{constructor(e,t){this.g=e,this.map=t}};function vt(e){this.l=e||10,a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function bt(e){return e.h?1:e.g?e.g.size:0}function wt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function _t(e,t){e.g?e.g.add(t):e.h=t}function Et(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Tt(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return I(e.i)}function St(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(l(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}function It(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(l(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function $t(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(l(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=It(e),i=St(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}vt.prototype.cancel=function(){if(this.i=Tt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var kt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ct(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function xt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof xt){this.h=e.h,Nt(this,e.j),this.o=e.o,this.g=e.g,Ot(this,e.s),this.l=e.l;var t=e.i,n=new Ht;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Rt(this,n),this.m=e.m}else e&&(t=String(e).match(kt))?(this.h=!1,Nt(this,t[1]||"",!0),this.o=Dt(t[2]||""),this.g=Dt(t[3]||"",!0),Ot(this,t[4]),this.l=Dt(t[5]||"",!0),Rt(this,t[6]||"",!0),this.m=Dt(t[7]||"")):(this.h=!1,this.i=new Ht(null,this.h))}function At(e){return new xt(e)}function Nt(e,t,n){e.j=n?Dt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ot(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function Rt(e,t,n){t instanceof Ht?(e.i=t,Qt(e.i,e.h)):(n||(t=Mt(t,Bt)),e.i=new Ht(t,e.h))}function Pt(e,t,n){e.i.set(t,n)}function Lt(e){return Pt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Dt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Mt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Vt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Vt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}xt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Mt(t,jt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(Mt(t,jt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Mt(n,"/"==n.charAt(0)?Ut:Ft,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",Mt(n,zt)),e.join("")};var jt=/[#\/\?@]/g,Ft=/[#\?:]/g,Ut=/[#\?]/g,Bt=/[#\?@]/g,zt=/#/g;function Ht(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Wt(e){e.g||(e.g=new Map,e.h=0,e.i&&Ct(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function qt(e,t){Wt(e),t=Xt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Kt(e,t){return Wt(e),t=Xt(e,t),e.g.has(t)}function Gt(e,t,n){qt(e,t),0<n.length&&(e.i=null,e.g.set(Xt(e,t),I(n)),e.h+=n.length)}function Xt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Qt(e,t){t&&!e.j&&(Wt(e),e.i=null,e.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(qt(this,t),Gt(this,n,e))},e)),e.j=t}function Jt(e,t){const n=new qe;if(a.Image){const i=new Image;i.onload=T(Zt,n,"TestLoadImage: loaded",!0,t,i),i.onerror=T(Zt,n,"TestLoadImage: error",!1,t,i),i.onabort=T(Zt,n,"TestLoadImage: abort",!1,t,i),i.ontimeout=T(Zt,n,"TestLoadImage: timeout",!1,t,i),a.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function Yt(e,t){const n=new qe,i=new AbortController,r=setTimeout(()=>{i.abort(),Zt(n,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:i.signal}).then(e=>{clearTimeout(r),e.ok?Zt(n,"TestPingServer: ok",!0,t):Zt(n,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(r),Zt(n,"TestPingServer: error",!1,t)})}function Zt(e,t,n,i,r){try{r&&(r.onload=null,r.onerror=null,r.onabort=null,r.ontimeout=null),i(n)}catch(s){}}function en(){this.g=new Ae}function tn(e,t,n){const i=n||"";try{$t(e,function(e,n){let r=e;c(e)&&(r=Ce(e)),t.push(i+n+"="+encodeURIComponent(r))})}catch(r){throw t.push(i+"type="+encodeURIComponent("_badmap")),r}}function nn(e){this.l=e.Ub||null,this.j=e.eb||!1}function rn(e,t){be.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function sn(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function on(e){e.readyState=4,e.l=null,e.j=null,e.v=null,an(e)}function an(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function ln(e){let t="";return O(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function cn(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=ln(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Pt(e,t,n))}function un(e){be.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}e=Ht.prototype,e.add=function(e,t){Wt(this),this.i=null,e=Xt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){Wt(this),this.g.forEach(function(n,i){n.forEach(function(n){e.call(t,n,i,this)},this)},this)},e.na=function(){Wt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const r=e[i];for(let e=0;e<r.length;e++)n.push(t[i])}return n},e.V=function(e){Wt(this);let t=[];if("string"===typeof e)Kt(this,e)&&(t=t.concat(this.g.get(Xt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return Wt(this),this.i=null,e=Xt(this,e),Kt(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e?(e=this.V(e),0<e.length?String(e[0]):t):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const s=encodeURIComponent(String(i)),o=this.V(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),e.push(r)}}return this.i=e.join("&")},S(nn,Ne),nn.prototype.g=function(){return new rn(this.l,this.j)},nn.prototype.i=function(e){return function(){return e}}({}),S(rn,be),e=rn.prototype,e.open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,an(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,on(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,an(this)),this.g&&(this.readyState=3,an(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sn(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?on(this):an(this),3==this.readyState&&sn(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,on(this))},e.Qa=function(e){this.g&&(this.response=e,on(this))},e.ga=function(){this.g&&on(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(rn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),S(un,be);var hn=/^https?$/i,dn=["POST","PUT"];function fn(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,pn(e),mn(e)}function pn(e){e.A||(e.A=!0,we(e,"complete"),we(e,"error"))}function gn(e){if(e.h&&"undefined"!=typeof o&&(!e.v[1]||4!=yn(e)||2!=e.Z()))if(e.u&&4==yn(e))Ee(e.Ea,0,e);else if(we(e,"readystatechange"),4==yn(e)){e.h=!1;try{const o=e.Z();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===o){var r=String(e.D).match(kt)[1]||null;!r&&a.self&&a.self.location&&(r=a.self.location.protocol.slice(0,-1)),i=!hn.test(r?r.toLowerCase():"")}n=i}if(n)we(e,"complete"),we(e,"success");else{e.m=6;try{var s=2<yn(e)?e.g.statusText:""}catch(l){s=""}e.l=s+" ["+e.Z()+"]",pn(e)}}finally{mn(e)}}}function mn(e,t){if(e.g){vn(e);const i=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||we(e,"ready");try{i.onreadystatechange=r}catch(n){}}}function vn(e){e.I&&(a.clearTimeout(e.I),e.I=null)}function yn(e){return e.g?e.g.readyState:0}function bn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function wn(e){const t={};e=(e.g&&2<=yn(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<e.length;i++){if(C(e[i]))continue;var n=M(e[i]);const r=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[r]||[];t[r]=s,s.push(n)}R(t,function(e){return e.join(", ")})}function _n(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function En(e){this.Aa=0,this.i=[],this.j=new qe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_n("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_n("baseRetryDelayMs",5e3,e),this.cb=_n("retryDelaySeedMs",1e4,e),this.Wa=_n("forwardChannelMaxRetries",2,e),this.wa=_n("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new vt(e&&e.concurrentRequestLimit),this.Da=new en,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Tn(e){if(In(e),3==e.G){var t=e.U++,n=At(e.I);if(Pt(n,"SID",e.K),Pt(n,"RID",t),Pt(n,"TYPE","terminate"),xn(e,n),t=new nt(e,e.j,t),t.L=2,t.v=Lt(At(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(t.v.toString(),"")}catch(i){}!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=Un(t.j,null),t.g.ea(t.v)),t.F=Date.now(),ut(t)}jn(e)}function Sn(e){e.g&&(Rn(e),e.g.cancel(),e.g=null)}function In(e){Sn(e),e.u&&(a.clearTimeout(e.u),e.u=null),Ln(e),e.h.cancel(),e.s&&("number"===typeof e.s&&a.clearTimeout(e.s),e.s=null)}function $n(e){if(!yt(e.h)&&!e.s){e.s=!0;var t=e.Ga;z||q(),H||(z(),H=!0),W.add(t,e),e.B=0}}function kn(e,t){return!(bt(e.h)>=e.h.j-(e.s?1:0))&&(e.s?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa))&&(e.s=We(E(e.Ga,e,t),Mn(e,e.B)),e.B++,!0))}function Cn(e,t){var n;n=t?t.l:e.U++;const i=At(e.I);Pt(i,"SID",e.K),Pt(i,"RID",n),Pt(i,"AID",e.T),xn(e,i),e.m&&e.o&&cn(i,e.m,e.o),n=new nt(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=An(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),_t(e.h,n),ot(n,i,t)}function xn(e,t){e.H&&O(e.H,function(e,n){Pt(t,n,e)}),e.l&&$t({},function(e,n){Pt(t,n,e)})}function An(e,t,n){n=Math.min(e.i.length,n);var i=e.l?E(e.l.Na,e.l,e):null;e:{var r=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=r[a].g;const l=r[a].map;if(n-=t,0>n)t=Math.max(0,r[a].g-100),o=!1;else try{tn(l,e,"req"+n+"_")}catch(s){i&&i(l)}}if(o){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,i}function Nn(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;z||q(),H||(z(),H=!0),W.add(t,e),e.v=0}}function On(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=We(E(e.Fa,e),Mn(e,e.v)),e.v++,!0)}function Rn(e){null!=e.A&&(a.clearTimeout(e.A),e.A=null)}function Pn(e){e.g=new nt(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=At(e.qa);Pt(t,"RID","rpc"),Pt(t,"SID",e.K),Pt(t,"AID",e.T),Pt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&Pt(t,"TO",e.ja),Pt(t,"TYPE","xmlhttp"),xn(e,t),e.m&&e.o&&cn(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=Lt(At(t)),n.m=null,n.P=!0,at(n,e)}function Ln(e){null!=e.C&&(a.clearTimeout(e.C),e.C=null)}function Dn(e,t){var n=null;if(e.g==t){Ln(e),Rn(e),e.g=null;var i=2}else{if(!wt(e.h,t))return;n=t.D,Et(e.h,t),i=1}if(0!=e.G)if(t.o)if(1==i){n=t.m?t.m.length:0,t=Date.now()-t.F;var r=e.B;i=je(),we(i,new He(i,n)),$n(e)}else Nn(e);else if(r=t.s,3==r||0==r&&0<t.X||!(1==i&&kn(e,t)||2==i&&On(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:Vn(e,5);break;case 4:Vn(e,10);break;case 3:Vn(e,6);break;default:Vn(e,2)}}function Mn(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function Vn(e,t){if(e.j.info("Error code "+t),2==t){var n=E(e.fb,e),i=e.Xa;const t=!i;i=new xt(i||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Nt(i,"https"),Lt(i),t?Jt(i.toString(),n):Yt(i.toString(),n)}else ze(2);e.G=0,e.l&&e.l.sa(t),jn(e),In(e)}function jn(e){if(e.G=0,e.ka=[],e.l){const t=Tt(e.h);0==t.length&&0==e.i.length||($(e.ka,t),$(e.ka,e.i),e.h.i.length=0,I(e.i),e.i.length=0),e.l.ra()}}function Fn(e,t,n){var i=n instanceof xt?At(n):new xt(n);if(""!=i.g)t&&(i.g=t+"."+i.g),Ot(i,i.s);else{var r=a.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new xt(null);i&&Nt(s,i),t&&(s.g=t),r&&Ot(s,r),n&&(s.l=n),i=s}return n=e.D,t=e.ya,n&&t&&Pt(i,n,t),Pt(i,"VER",e.la),xn(e,i),i}function Un(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ca&&!e.pa?new un(new nn({eb:n})):new un(e.pa),t.Ha(e.J),t}function Bn(){}function zn(){}function Hn(e,t){be.call(this),this.g=new En(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!C(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!C(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Kn(this)}function Wn(e){Le.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function qn(){De.call(this),this.status=1}function Kn(e){this.g=e}e=un.prototype,e.Ha=function(e){this.J=e},e.ea=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ye.g(),this.v=this.o?Oe(this.o):Oe(Ye),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(s){return void fn(this,s)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!==typeof i.keys||"function"!==typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),r=a.FormData&&e instanceof a.FormData,!(0<=Array.prototype.indexOf.call(dn,t,void 0))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vn(this),this.u=!0,this.g.send(e),this.u=!1}catch(s){fn(this,s)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,we(this,"complete"),we(this,"abort"),mn(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mn(this,!0)),un.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?gn(this):this.bb())},e.bb=function(){gn(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<yn(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),xe(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},e=En.prototype,e.la=8,e.G=1,e.connect=function(e,t,n,i){ze(0),this.W=e,this.H=t||{},n&&void 0!==i&&(this.H.OSID=n,this.H.OAID=i),this.F=this.X,this.I=Fn(this,null,this.W),$n(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new nt(this,this.j,e);let s=this.o;if(this.S&&(s?(s=P(s),D(s,this.S)):s=this.S),null!==this.m||this.O||(r.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var i=this.i[n];if(i="__data__"in i.map&&(i=i.map.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(t+=i,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=An(this,r,t),n=At(this.I),Pt(n,"RID",e),Pt(n,"CVER",22),this.D&&Pt(n,"X-HTTP-Session-Id",this.D),xn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(ln(s)))+"&"+t:this.m&&cn(n,this.m,s)),_t(this.h,r),this.Ua&&Pt(n,"TYPE","init"),this.P?(Pt(n,"$req",t),Pt(n,"SID","null"),r.T=!0,ot(r,n,null)):ot(r,n,t),this.G=2}}else 3==this.G&&(e?Cn(this,e):0==this.i.length||yt(this.h)||Cn(this))},e.Fa=function(){if(this.u=null,Pn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=We(E(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ze(10),Sn(this),Pn(this))},e.Za=function(){null!=this.C&&(this.C=null,Sn(this),On(this),ze(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},e=Bn.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},zn.prototype.g=function(e,t){return new Hn(e,t)},S(Hn,be),Hn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Hn.prototype.close=function(){Tn(this.g)},Hn.prototype.o=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.u&&(n={},n.__data__=Ce(e),e=n);t.i.push(new mt(t.Ya++,e)),3==t.G&&$n(t)},Hn.prototype.N=function(){this.g.l=null,delete this.j,Tn(this.g),delete this.g,Hn.aa.N.call(this)},S(Wn,Le),S(qn,De),S(Kn,Bn),Kn.prototype.ua=function(){we(this.g,"a")},Kn.prototype.ta=function(e){we(this.g,new Wn(e))},Kn.prototype.sa=function(e){we(this.g,new qn)},Kn.prototype.ra=function(){we(this.g,"b")},zn.prototype.createWebChannel=zn.prototype.g,Hn.prototype.send=Hn.prototype.o,Hn.prototype.open=Hn.prototype.m,Hn.prototype.close=Hn.prototype.close,v=b.createWebChannelTransport=function(){return new zn},m=b.getStatEventTarget=function(){return je()},g=b.Event=Me,p=b.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ze.NO_ERROR=0,Ze.TIMEOUT=8,Ze.HTTP_ERROR=6,f=b.ErrorCode=Ze,et.COMPLETE="complete",d=b.EventType=et,Re.EventType=Pe,Pe.OPEN="a",Pe.CLOSE="b",Pe.ERROR="c",Pe.MESSAGE="d",be.prototype.listen=be.prototype.K,h=b.WebChannel=Re,b.FetchXmlHttpFactory=nn,un.prototype.listenOnce=un.prototype.L,un.prototype.getLastError=un.prototype.Ka,un.prototype.getLastErrorCode=un.prototype.Ba,un.prototype.getStatus=un.prototype.Z,un.prototype.getResponseJson=un.prototype.Oa,un.prototype.getResponseText=un.prototype.oa,un.prototype.send=un.prototype.ea,un.prototype.setWithCredentials=un.prototype.Ha,u=b.XhrIo=un}).apply("undefined"!==typeof y?y:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const w="@firebase/firestore",_="4.8.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}E.UNAUTHENTICATED=new E(null),E.GOOGLE_CREDENTIALS=new E("google-credentials-uid"),E.FIRST_PARTY=new E("first-party-uid"),E.MOCK_USER=new E("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let T="11.10.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new o.Vy("@firebase/firestore");function I(){return S.logLevel}function $(e,...t){if(S.logLevel<=o.$b.DEBUG){const n=t.map(x);S.debug(`Firestore (${T}): ${e}`,...n)}}function k(e,...t){if(S.logLevel<=o.$b.ERROR){const n=t.map(x);S.error(`Firestore (${T}): ${e}`,...n)}}function C(e,...t){if(S.logLevel<=o.$b.WARN){const n=t.map(x);S.warn(`Firestore (${T}): ${e}`,...n)}}function x(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t,n){let i="Unexpected state";"string"==typeof t?i=t:n=t,N(e,i,n)}function N(e,t,n){let i=`FIRESTORE (${T}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{i+=" CONTEXT: "+JSON.stringify(n)}catch(e){i+=" CONTEXT: "+n}throw k(i),new Error(i)}function O(e,t,n,i){let r="Unexpected state";"string"==typeof n?r=n:i=n,e||N(t,r,i)}function R(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends a.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class V{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(E.UNAUTHENTICATED))}shutdown(){}}class j{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class F{constructor(e){this.t=e,this.currentUser=E.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){O(void 0===this.o,42304);let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new D;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new D,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const t=r;e.enqueueRetryable(async()=>{await t.promise,await i(this.currentUser)})},o=e=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new D)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(O("string"==typeof t.accessToken,31837,{l:t}),new M(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return O(null===e||"string"==typeof e,2055,{h:e}),new E(e)}}class U{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=E.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class B{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new U(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(E.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class z{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class H{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,r.xZ)(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){O(void 0===this.o,3512);const n=e=>{null!=e.error&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.m;return this.m=e.token,$("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const i=e=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>i(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?i(e):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new z(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(O("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new z(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(){return new TextEncoder}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const i=W(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%62))}return n}}function G(e,t){return e<t?-1:e>t?1:0}function X(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=e.codePointAt(n),r=t.codePointAt(n);if(i!==r){if(i<128&&r<128)return G(i,r);{const s=q(),o=J(s.encode(Q(e,n)),s.encode(Q(t,n)));return 0!==o?o:G(i,r)}}n+=i>65535?2:1}return G(e.length,t.length)}function Q(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function J(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return G(e[n],t[n]);return G(e.length,t.length)}function Y(e,t,n){return e.length===t.length&&e.every((e,i)=>n(e,t[i]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="__name__";class ee{constructor(e,t,n){void 0===t?t=0:t>e.length&&A(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&A(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ee.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ee?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=ee.compareSegments(e.get(i),t.get(i));if(0!==n)return n}return G(e.length,t.length)}static compareSegments(e,t){const n=ee.isNumericId(e),i=ee.isNumericId(t);return n&&!i?-1:!n&&i?1:n&&i?ee.extractNumericId(e).compare(ee.extractNumericId(t)):X(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return i.fromString(e.substring(4,e.length-2))}}class te extends ee{construct(e,t,n){return new te(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new L(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new te(t)}static emptyPath(){return new te([])}}const ne=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ie extends ee{construct(e,t,n){return new ie(e,t,n)}static isValidIdentifier(e){return ne.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Z}static keyField(){return new ie([Z])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new L(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new L(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new L(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new L(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ie(t)}static emptyPath(){return new ie([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(te.fromString(e))}static fromName(e){return new re(te.fromString(e).popFirst(5))}static empty(){return new re(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===te.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new te(e.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e,t,n,i){if(!0===t&&!0===i)throw new L(P.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function oe(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function ae(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":A(12329,{type:typeof e})}function le(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new L(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ae(e);throw new L(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ce(e,t){const n={typeString:e};return t&&(n.value=t),n}function ue(e,t){if(!oe(e))throw new L(P.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in t)if(t[i]){const r=t[i].typeString,s="value"in t[i]?{value:t[i].value}:void 0;if(!(i in e)){n=`JSON missing required field: '${i}'`;break}const o=e[i];if(r&&typeof o!==r){n=`JSON field '${i}' must be a ${r}.`;break}if(void 0!==s&&o!==s.value){n=`Expected '${i}' field to equal '${s.value}'`;break}}if(n)throw new L(P.INVALID_ARGUMENT,n);return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=-62135596800,de=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*de);return new fe(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<he)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/de}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ue(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-he;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:ce("string",fe._jsonSchemaVersion),seconds:ce("number"),nanoseconds:ce("number")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new fe(0,0))}static max(){return new pe(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=-1;class me{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}me.UNKNOWN_ID=-1;function ve(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=pe.fromTimestamp(1e9===i?new fe(n+1,0):new fe(n,i));return new be(r,re.empty(),t)}function ye(e){return new be(e.readTime,e.key,ge)}class be{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new be(pe.min(),re.empty(),ge)}static max(){return new be(pe.max(),re.empty(),ge)}}function we(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=re.comparator(e.documentKey,t.documentKey),0!==n?n:G(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class _e{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&A(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ee((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Ee?t:Ee.resolve(t)}catch(e){return Ee.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Ee.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Ee.reject(t)}static resolve(e){return new Ee((t,n)=>{t(e)})}static reject(e){return new Ee((t,n)=>{n(e)})}static waitFor(e){return new Ee((t,n)=>{let i=0,r=0,s=!1;e.forEach(e=>{++i,e.next(()=>{++r,s&&r===i&&t()},e=>n(e))}),s=!0,r===i&&t()})}static or(e){let t=Ee.resolve(!1);for(const n of e)t=t.next(e=>e?Ee.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,i)=>{n.push(t.call(this,e,i))}),this.waitFor(n)}static mapArray(e,t){return new Ee((n,i)=>{const r=e.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const l=a;t(e[l]).next(e=>{s[l]=e,++o,o===r&&n(s)},e=>i(e))}})}static doWhile(e,t){return new Ee((n,i)=>{const r=()=>{!0===e()?t().next(()=>{r()},i):n()};r()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Se(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this._e(e),this.ae=e=>t.writeSequenceNumber(e))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Ie.ue=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $e=-1;function ke(e){return null==e}function Ce(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xe="remoteDocuments",Ae="owner",Ne="mutationQueues",Oe="mutations";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="documentMutations",Pe="remoteDocumentsV14",Le="remoteDocumentGlobal",De="targets",Me="targetDocuments",Ve="targetGlobal",je="collectionParents",Fe="clientMetadata",Ue="bundles",Be="namedQueries",ze="indexConfiguration",He="indexState",We="indexEntries",qe="documentOverlays",Ke="globals",Ge=[Ne,Oe,Re,xe,De,Ae,Ve,Me,Fe,Le,je,Ue,Be],Xe=[Ne,Oe,Re,Pe,De,Ae,Ve,Me,Fe,Le,je,Ue,Be,qe],Qe=Xe,Je=[...Qe,ze,He,We];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ye(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ze(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function et(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.comparator=e,this.root=t||it.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nt(this.root,e,this.comparator,!1)}getReverseIterator(){return new nt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nt(this.root,e,this.comparator,!0)}}class nt{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:it.RED,this.left=null!=i?i:it.EMPTY,this.right=null!=r?r:it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new it(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return it.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw A(43730,{key:this.key,value:this.value});if(this.right.isRed())throw A(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw A(27949);return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1,it.EMPTY=new class{constructor(){this.size=0}get key(){throw A(57766)}get value(){throw A(16141)}get color(){throw A(16727)}get left(){throw A(29726)}get right(){throw A(36894)}copy(e,t,n,i,r){return this}insert(e,t,n){return new it(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new st(this.data.getIterator())}getIteratorFrom(e){return new st(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof rt))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new rt(this.comparator);return t.data=e,t}}class st{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot{constructor(e){this.fields=e,e.sort(ie.comparator)}static empty(){return new ot([])}unionWith(e){let t=new rt(ie.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ot(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Y(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new at("Invalid base64 string: "+e):e}}(e);return new lt(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new lt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const ct=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ut(e){if(O(!!e,39018),"string"==typeof e){let t=0;const n=ct.exec(e);if(O(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:ht(e.seconds),nanos:ht(e.nanos)}}function ht(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function dt(e){return"string"==typeof e?lt.fromBase64String(e):lt.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="server_timestamp",pt="__type__",gt="__previous_value__",mt="__local_write_time__";function vt(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[pt])||void 0===n?void 0:n.stringValue)===ft}function yt(e){const t=e.mapValue.fields[gt];return vt(t)?yt(t):t}function bt(e){const t=ut(e.mapValue.fields[mt].timestampValue);return new fe(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="(default)";class _t{constructor(e,t){this.projectId=e,this.database=t||wt}static empty(){return new _t("","")}get isDefaultDatabase(){return this.database===wt}isEqual(e){return e instanceof _t&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="__type__",Tt="__max__",St={mapValue:{fields:{__type__:{stringValue:Tt}}}},It="__vector__",$t="value";function kt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?vt(e)?4:Ft(e)?9007199254740991:Vt(e)?10:11:A(28295,{value:e})}function Ct(e,t){if(e===t)return!0;const n=kt(e);if(n!==kt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return bt(e).isEqual(bt(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=ut(e.timestampValue),i=ut(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return dt(e.bytesValue).isEqual(dt(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return ht(e.geoPointValue.latitude)===ht(t.geoPointValue.latitude)&&ht(e.geoPointValue.longitude)===ht(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ht(e.integerValue)===ht(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=ht(e.doubleValue),i=ht(t.doubleValue);return n===i?Ce(n)===Ce(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return Y(e.arrayValue.values||[],t.arrayValue.values||[],Ct);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(Ye(n)!==Ye(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!Ct(n[r],i[r])))return!1;return!0}(e,t);default:return A(52216,{left:e})}}function xt(e,t){return void 0!==(e.values||[]).find(e=>Ct(e,t))}function At(e,t){if(e===t)return 0;const n=kt(e),i=kt(t);if(n!==i)return G(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=ht(e.integerValue||e.doubleValue),i=ht(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return Nt(e.timestampValue,t.timestampValue);case 4:return Nt(bt(e),bt(t));case 5:return X(e.stringValue,t.stringValue);case 6:return function(e,t){const n=dt(e),i=dt(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let r=0;r<n.length&&r<i.length;r++){const e=G(n[r],i[r]);if(0!==e)return e}return G(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=G(ht(e.latitude),ht(t.latitude));return 0!==n?n:G(ht(e.longitude),ht(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Ot(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,i,r,s;const o=e.fields||{},a=t.fields||{},l=null===(n=o[$t])||void 0===n?void 0:n.arrayValue,c=null===(i=a[$t])||void 0===i?void 0:i.arrayValue,u=G((null===(r=null==l?void 0:l.values)||void 0===r?void 0:r.length)||0,(null===(s=null==c?void 0:c.values)||void 0===s?void 0:s.length)||0);return 0!==u?u:Ot(l,c)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===St.mapValue&&t===St.mapValue)return 0;if(e===St.mapValue)return 1;if(t===St.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const e=X(i[o],s[o]);if(0!==e)return e;const t=At(n[i[o]],r[s[o]]);if(0!==t)return t}return G(i.length,s.length)}(e.mapValue,t.mapValue);default:throw A(23264,{le:n})}}function Nt(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return G(e,t);const n=ut(e),i=ut(t),r=G(n.seconds,i.seconds);return 0!==r?r:G(n.nanos,i.nanos)}function Ot(e,t){const n=e.values||[],i=t.values||[];for(let r=0;r<n.length&&r<i.length;++r){const e=At(n[r],i[r]);if(e)return e}return G(n.length,i.length)}function Rt(e){return Pt(e)}function Pt(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=ut(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return dt(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return re.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=Pt(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const r of t)i?i=!1:n+=",",n+=`${r}:${Pt(e.fields[r])}`;return n+"}"}(e.mapValue):A(61005,{value:e})}function Lt(e){return!!e&&"integerValue"in e}function Dt(e){return!!e&&"arrayValue"in e}function Mt(e){return!!e&&"mapValue"in e}function Vt(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[Et])||void 0===n?void 0:n.stringValue)===It}function jt(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ze(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=jt(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=jt(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ft(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Tt}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Mt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=jt(t)}setAll(e){let t=ie.emptyPath(),n={},i=[];e.forEach((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=jt(e):i.push(r.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());Mt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ct(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Mt(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Ze(t,(t,n)=>e[t]=n);for(const i of n)delete e[i]}clone(){return new Ut(jt(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt{constructor(e,t,n,i,r,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Bt(e,0,pe.min(),pe.min(),pe.min(),Ut.empty(),0)}static newFoundDocument(e,t,n,i){return new Bt(e,1,t,pe.min(),n,i,0)}static newNoDocument(e,t){return new Bt(e,2,t,pe.min(),pe.min(),Ut.empty(),0)}static newUnknownDocument(e,t){return new Bt(e,3,t,pe.min(),pe.min(),Ut.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(pe.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t){this.position=e,this.inclusive=t}}function Ht(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(i=s.field.isKeyField()?re.comparator(re.fromName(o.referenceValue),n.key):At(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function Wt(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ct(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t="asc"){this.field=e,this.dir=t}}function Kt(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{}class Xt extends Gt{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new rn(e,t,n):"array-contains"===t?new ln(e,n):"in"===t?new cn(e,n):"not-in"===t?new un(e,n):"array-contains-any"===t?new hn(e,n):new Xt(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new sn(e,n):new on(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(At(t,this.value)):null!==t&&kt(this.value)===kt(t)&&this.matchesComparison(At(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return A(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qt extends Gt{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Qt(e,t)}matches(e){return Jt(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.he||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Jt(e){return"and"===e.op}function Yt(e){return Zt(e)&&Jt(e)}function Zt(e){for(const t of e.filters)if(t instanceof Qt)return!1;return!0}function en(e){if(e instanceof Xt)return e.field.canonicalString()+e.op.toString()+Rt(e.value);if(Yt(e))return e.filters.map(e=>en(e)).join(",");{const t=e.filters.map(e=>en(e)).join(",");return`${e.op}(${t})`}}function tn(e,t){return e instanceof Xt?function(e,t){return t instanceof Xt&&e.op===t.op&&e.field.isEqual(t.field)&&Ct(e.value,t.value)}(e,t):e instanceof Qt?function(e,t){return t instanceof Qt&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,i)=>e&&tn(n,t.filters[i]),!0)}(e,t):void A(19439)}function nn(e){return e instanceof Xt?function(e){return`${e.field.canonicalString()} ${e.op} ${Rt(e.value)}`}(e):e instanceof Qt?function(e){return e.op.toString()+" {"+e.getFilters().map(nn).join(" ,")+"}"}(e):"Filter"}class rn extends Xt{constructor(e,t,n){super(e,t,n),this.key=re.fromName(n.referenceValue)}matches(e){const t=re.comparator(e.key,this.key);return this.matchesComparison(t)}}class sn extends Xt{constructor(e,t){super(e,"in",t),this.keys=an("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class on extends Xt{constructor(e,t){super(e,"not-in",t),this.keys=an("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function an(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>re.fromName(e.referenceValue))}class ln extends Xt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Dt(t)&&xt(t.arrayValue,this.value)}}class cn extends Xt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&xt(this.value.arrayValue,t)}}class un extends Xt{constructor(e,t){super(e,"not-in",t)}matches(e){if(xt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!xt(this.value.arrayValue,t)}}class hn extends Xt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Dt(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>xt(this.value.arrayValue,e))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t=null,n=[],i=[],r=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.Pe=null}}function fn(e,t=null,n=[],i=[],r=null,s=null,o=null){return new dn(e,t,n,i,r,s,o)}function pn(e){const t=R(e);if(null===t.Pe){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>en(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),ke(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>Rt(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>Rt(e)).join(",")),t.Pe=e}return t.Pe}function gn(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Kt(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!tn(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Wt(e.startAt,t.startAt)&&Wt(e.endAt,t.endAt)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mn{constructor(e,t=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function vn(e,t,n,i,r,s,o,a){return new mn(e,t,n,i,r,s,o,a)}function yn(e){return new mn(e)}function bn(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function wn(e){return null!==e.collectionGroup}function _n(e){const t=R(e);if(null===t.Te){t.Te=[];const e=new Set;for(const r of t.explicitOrderBy)t.Te.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",i=function(e){let t=new rt(ie.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t}(t);i.forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.Te.push(new qt(i,n))}),e.has(ie.keyField().canonicalString())||t.Te.push(new qt(ie.keyField(),n))}return t.Te}function En(e){const t=R(e);return t.Ie||(t.Ie=Tn(t,_n(e))),t.Ie}function Tn(e,t){if("F"===e.limitType)return fn(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new qt(e.field,t)});const n=e.endAt?new zt(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new zt(e.startAt.position,e.startAt.inclusive):null;return fn(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function Sn(e,t,n){return new mn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function In(e,t){return gn(En(e),En(t))&&e.limitType===t.limitType}function $n(e){return`${pn(En(e))}|lt:${e.limitType}`}function kn(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>nn(e)).join(", ")}]`),ke(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>Rt(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>Rt(e)).join(",")),`Target(${t})`}(En(e))}; limitType=${e.limitType})`}function Cn(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):re.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of _n(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const i=Ht(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,_n(e),t))&&!(e.endAt&&!function(e,t,n){const i=Ht(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,_n(e),t))}(e,t)}function xn(e){return(t,n)=>{let i=!1;for(const r of _n(e)){const e=An(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}function An(e,t,n){const i=e.field.isKeyField()?re.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?At(i,r):A(42886)}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return A(19790,{direction:e.dir})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ze(this.inner,(t,n)=>{for(const[i,r]of n)e(i,r)})}isEmpty(){return et(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new tt(re.comparator);function Rn(){return On}const Pn=new tt(re.comparator);function Ln(...e){let t=Pn;for(const n of e)t=t.insert(n.key,n);return t}function Dn(e){let t=Pn;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Mn(){return jn()}function Vn(){return jn()}function jn(){return new Nn(e=>e.toString(),(e,t)=>e.isEqual(t))}new tt(re.comparator);const Fn=new rt(re.comparator);function Un(...e){let t=Fn;for(const n of e)t=t.add(n);return t}const Bn=new rt(G);function zn(){return Bn}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ce(t)?"-0":t}}function Wn(e){return{integerValue:""+e}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this._=void 0}}function Kn(e,t,n){return e instanceof Qn?function(e,t){const n={fields:{[pt]:{stringValue:ft},[mt]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&vt(t)&&(t=yt(t)),t&&(n.fields[gt]=t),{mapValue:n}}(n,t):e instanceof Jn?Yn(e,t):e instanceof Zn?ei(e,t):function(e,t){const n=Xn(e,t),i=ni(n)+ni(e.Ee);return Lt(n)&&Lt(e.Ee)?Wn(i):Hn(e.serializer,i)}(e,t)}function Gn(e,t,n){return e instanceof Jn?Yn(e,t):e instanceof Zn?ei(e,t):n}function Xn(e,t){return e instanceof ti?function(e){return Lt(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class Qn extends qn{}class Jn extends qn{constructor(e){super(),this.elements=e}}function Yn(e,t){const n=ii(t);for(const i of e.elements)n.some(e=>Ct(e,i))||n.push(i);return{arrayValue:{values:n}}}class Zn extends qn{constructor(e){super(),this.elements=e}}function ei(e,t){let n=ii(t);for(const i of e.elements)n=n.filter(e=>!Ct(e,i));return{arrayValue:{values:n}}}class ti extends qn{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function ni(e){return ht(e.integerValue||e.doubleValue)}function ii(e){return Dt(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Jn&&t instanceof Jn||e instanceof Zn&&t instanceof Zn?Y(e.elements,t.elements,Ct):e instanceof ti&&t instanceof ti?Ct(e.Ee,t.Ee):e instanceof Qn&&t instanceof Qn}(e.transform,t.transform)}class si{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new si}static exists(e){return new si(void 0,e)}static updateTime(e){return new si(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oi(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ai{}function li(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new vi(e.key,si.none()):new di(e.key,e.data,si.none());{const n=e.data,i=Ut.empty();let r=new rt(ie.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),r=r.add(e)}return new fi(e.key,i,new ot(r.toArray()),si.none())}}function ci(e,t,n){e instanceof di?function(e,t,n){const i=e.value.clone(),r=gi(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof fi?function(e,t,n){if(!oi(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=gi(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(pi(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function ui(e,t,n,i){return e instanceof di?function(e,t,n,i){if(!oi(e.precondition,t))return n;const r=e.value.clone(),s=mi(e.fieldTransforms,i,t);return r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,i):e instanceof fi?function(e,t,n,i){if(!oi(e.precondition,t))return n;const r=mi(e.fieldTransforms,i,t),s=t.data;return s.setAll(pi(e)),s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,i):function(e,t,n){return oi(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function hi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Y(e,t,(e,t)=>ri(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class di extends ai{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fi extends ai{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function pi(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function gi(e,t,n){const i=new Map;O(e.length===n.length,32656,{Ae:n.length,Re:e.length});for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,Gn(o,a,n[r]))}return i}function mi(e,t,n){const i=new Map;for(const r of e){const e=r.transform,s=n.data.field(r.field);i.set(r.field,Kn(e,s,t))}return i}class vi extends ai{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yi{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const t=this.mutations[i];t.key.isEqual(e.key)&&ci(t,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ui(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ui(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Vn();return this.mutations.forEach(i=>{const r=e.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=t.has(i.key)?null:o;const a=li(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(pe.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Un())}isEqual(e){return this.batchId===e.batchId&&Y(this.mutations,e.mutations,(e,t)=>hi(e,t))&&Y(this.baseMutations,e.baseMutations,(e,t)=>hi(e,t))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bi{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var wi,_i;function Ei(e){if(void 0===e)return k("GRPC error has no .code"),P.UNKNOWN;switch(e){case wi.OK:return P.OK;case wi.CANCELLED:return P.CANCELLED;case wi.UNKNOWN:return P.UNKNOWN;case wi.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case wi.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case wi.INTERNAL:return P.INTERNAL;case wi.UNAVAILABLE:return P.UNAVAILABLE;case wi.UNAUTHENTICATED:return P.UNAUTHENTICATED;case wi.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case wi.NOT_FOUND:return P.NOT_FOUND;case wi.ALREADY_EXISTS:return P.ALREADY_EXISTS;case wi.PERMISSION_DENIED:return P.PERMISSION_DENIED;case wi.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case wi.ABORTED:return P.ABORTED;case wi.OUT_OF_RANGE:return P.OUT_OF_RANGE;case wi.UNIMPLEMENTED:return P.UNIMPLEMENTED;case wi.DATA_LOSS:return P.DATA_LOSS;default:return A(39323,{code:e})}}(_i=wi||(wi={}))[_i.OK=0]="OK",_i[_i.CANCELLED=1]="CANCELLED",_i[_i.UNKNOWN=2]="UNKNOWN",_i[_i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_i[_i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_i[_i.NOT_FOUND=5]="NOT_FOUND",_i[_i.ALREADY_EXISTS=6]="ALREADY_EXISTS",_i[_i.PERMISSION_DENIED=7]="PERMISSION_DENIED",_i[_i.UNAUTHENTICATED=16]="UNAUTHENTICATED",_i[_i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_i[_i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_i[_i.ABORTED=10]="ABORTED",_i[_i.OUT_OF_RANGE=11]="OUT_OF_RANGE",_i[_i.UNIMPLEMENTED=12]="UNIMPLEMENTED",_i[_i.INTERNAL=13]="INTERNAL",_i[_i.UNAVAILABLE=14]="UNAVAILABLE",_i[_i.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new i([4294967295,4294967295],0);Error;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})(),(()=>{const e={and:"AND",or:"OR"}})();class Ti{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Si(e){return O(!!e,49232),pe.fromTimestamp(function(e){const t=ut(e);return new fe(t.seconds,t.nanos)}(e))}function Ii(e,t){const n=function(e){return new te(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function $i(e){const t=te.fromString(e);return O(Oi(t),10190,{key:t.toString()}),t}function ki(e){const t=$i(e);return 4===t.length?te.emptyPath():Ci(t)}function Ci(e){return O(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function xi(e){let t=ki(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){O(1===i,65062);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Ai(e);return t instanceof Qt&&Yt(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map(e=>function(e){return new qt(Ni(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ke(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new zt(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new zt(n,t)}(n.endAt)),vn(t,r,o,s,a,"F",l,c)}function Ai(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ni(e.unaryFilter.field);return Xt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ni(e.unaryFilter.field);return Xt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ni(e.unaryFilter.field);return Xt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ni(e.unaryFilter.field);return Xt.create(r,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return A(61313);default:return A(60726)}}(e):void 0!==e.fieldFilter?function(e){return Xt.create(Ni(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return A(58110);default:return A(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Qt.create(e.compositeFilter.filters.map(e=>Ai(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return A(1026)}}(e.compositeFilter.op))}(e):A(30097,{filter:e})}function Ni(e){return ie.fromServerFormat(e.fieldPath)}function Oi(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.gt=e}}function Pi(e){const t=xi({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Sn(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Li{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(ht(e.integerValue));else if("doubleValue"in e){const n=ht(e.doubleValue);isNaN(n)?this.Ct(t,13):(this.Ct(t,15),Ce(n)?t.Ft(0):t.Ft(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ct(t,20),"string"==typeof n&&(n=ut(n)),t.Mt(`${n.seconds||""}`),t.Ft(n.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(dt(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ct(t,45),t.Ft(n.latitude||0),t.Ft(n.longitude||0)}else"mapValue"in e?Ft(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):Vt(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):A(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){const n=e.fields||{};this.Ct(t,55);for(const i of Object.keys(n))this.xt(i,t),this.Dt(n[i],t)}Lt(e,t){var n,i;const r=e.fields||{};this.Ct(t,53);const s=$t,o=(null===(i=null===(n=r[s].arrayValue)||void 0===n?void 0:n.values)||void 0===i?void 0:i.length)||0;this.Ct(t,15),t.Ft(ht(o)),this.xt(s,t),this.Dt(r[s],t)}qt(e,t){const n=e.values||[];this.Ct(t,50);for(const i of n)this.Dt(i,t)}Bt(e,t){this.Ct(t,37),re.fromName(e).path.forEach(e=>{this.Ct(t,60),this.$t(e,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}Li.Ut=new Li;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Di{constructor(){this.Dn=new Mi}addToCollectionParentIndex(e,t){return this.Dn.add(t),Ee.resolve()}getCollectionParents(e,t){return Ee.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return Ee.resolve()}deleteFieldIndex(e,t){return Ee.resolve()}deleteAllFieldIndexes(e){return Ee.resolve()}createTargetIndexes(e,t){return Ee.resolve()}getDocumentsMatchingTarget(e,t){return Ee.resolve(null)}getIndexType(e,t){return Ee.resolve(0)}getFieldIndexes(e,t){return Ee.resolve([])}getNextCollectionGroupToUpdate(e){return Ee.resolve(null)}getMinOffset(e,t){return Ee.resolve(be.min())}getMinOffsetFromCollectionGroup(e,t){return Ee.resolve(be.min())}updateCollectionGroup(e,t,n){return Ee.resolve()}updateIndexEntries(e,t){return Ee.resolve()}}class Mi{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new rt(te.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new rt(te.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vi=41943040;class ji{static withCacheSize(e){return new ji(e,ji.DEFAULT_COLLECTION_PERCENTILE,ji.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ji.DEFAULT_COLLECTION_PERCENTILE=10,ji.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ji.DEFAULT=new ji(Vi,ji.DEFAULT_COLLECTION_PERCENTILE,ji.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ji.DISABLED=new ji(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fi{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Fi(0)}static ur(){return new Fi(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ui=1048576;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bi{constructor(){this.changes=new Nn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ee.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zi{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&ui(n.mutation,e,ot.empty(),fe.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,Un()).next(()=>t))}getLocalViewOfDocuments(e,t,n=Un()){const i=Mn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(e=>{let t=Ln();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=Mn();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Un()))}populateOverlays(e,t,n){const i=[];return n.forEach(e=>{t.has(e)||i.push(e)}),this.documentOverlayCache.getOverlays(e,i).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,i){let r=Rn();const s=jn(),o=function(){return jn()}();return t.forEach((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof fi)?r=r.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),ui(o.mutation,t,o.mutation.getFieldMask(),fe.now())):s.set(t.key,ot.empty())}),this.recalculateAndSaveOverlays(e,r).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new zi(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){const n=jn();let i=new tt((e,t)=>e-t),r=Un();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const r of e)r.keys().forEach(e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||ot.empty();o=r.applyToLocalView(s,o),n.set(e,o);const a=(i.get(r.batchId)||Un()).add(e);i=i.insert(r.batchId,a)})}).next(()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,c=Vn();l.forEach(e=>{if(!r.has(e)){const i=li(t.get(e),n.get(e));null!==i&&c.set(e,i),r=r.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,c))}return Ee.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,i){return function(e){return re.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):wn(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):Ee.resolve(Mn());let o=ge,a=r;return s.next(t=>Ee.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(t)?Ee.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,r)).next(()=>this.computeViews(e,a,t,Un())).next(e=>({batchId:o,changes:Dn(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new re(t)).next(e=>{let t=Ln();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const r=t.collectionGroup;let s=Ln();return this.indexManager.getCollectionParents(e,r).next(o=>Ee.forEach(o,o=>{const a=function(e,t){return new mn(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(r));return this.getDocumentsMatchingCollectionQuery(e,a,n,i).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r,i))).next(e=>{r.forEach((t,n)=>{const i=n.getKey();null===e.get(i)&&(e=e.insert(i,Bt.newInvalidDocument(i)))});let n=Ln();return e.forEach((e,i)=>{const s=r.get(e);void 0!==s&&ui(s.mutation,i,ot.empty(),fe.now()),Cn(t,i)&&(n=n.insert(e,i))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return Ee.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Si(e.createTime)}}(t)),Ee.resolve()}getNamedQuery(e,t){return Ee.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(e){return{name:e.name,query:Pi(e.bundledQuery),readTime:Si(e.readTime)}}(t)),Ee.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this.overlays=new tt(re.comparator),this.kr=new Map}getOverlay(e,t){return Ee.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Mn();return Ee.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,i)=>{this.wt(e,t,i)}),Ee.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.kr.get(n);return void 0!==i&&(i.forEach(e=>this.overlays=this.overlays.remove(e)),this.kr.delete(n)),Ee.resolve()}getOverlaysForCollection(e,t,n){const i=Mn(),r=t.length+1,s=new re(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return Ee.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new tt((e,t)=>e-t);const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=Mn(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Mn(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((e,t)=>o.set(e,t)),o.size()>=i)break;return Ee.resolve(o)}wt(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.kr.get(i.largestBatchId).delete(n.key);this.kr.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new bi(t,n));let r=this.kr.get(t);void 0===r&&(r=Un(),this.kr.set(t,r)),this.kr.set(t,r.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return Ee.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Ee.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.qr=new rt(Xi.Qr),this.$r=new rt(Xi.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const n=new Xi(e,t);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Wr(new Xi(e,t))}Gr(e,t){e.forEach(e=>this.removeReference(e,t))}zr(e){const t=new re(new te([])),n=new Xi(t,e),i=new Xi(t,e+1),r=[];return this.$r.forEachInRange([n,i],e=>{this.Wr(e),r.push(e.key)}),r}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new re(new te([])),n=new Xi(t,e),i=new Xi(t,e+1);let r=Un();return this.$r.forEachInRange([n,i],e=>{r=r.add(e.key)}),r}containsKey(e){const t=new Xi(e,0),n=this.qr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Xi{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return re.comparator(e.key,t.key)||G(e.Hr,t.Hr)}static Ur(e,t){return G(e.Hr,t.Hr)||re.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new rt(Xi.Qr)}checkEmpty(e){return Ee.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const r=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new yi(r,t,n,i);this.mutationQueue.push(s);for(const o of i)this.Yr=this.Yr.add(new Xi(o.key,r)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ee.resolve(s)}lookupMutationBatch(e,t){return Ee.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.Xr(n),r=i<0?0:i;return Ee.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Ee.resolve(0===this.mutationQueue.length?$e:this.er-1)}getAllMutationBatches(e){return Ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Xi(t,0),i=new Xi(t,Number.POSITIVE_INFINITY),r=[];return this.Yr.forEachInRange([n,i],e=>{const t=this.Zr(e.Hr);r.push(t)}),Ee.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new rt(G);return t.forEach(e=>{const t=new Xi(e,0),i=new Xi(e,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([t,i],e=>{n=n.add(e.Hr)})}),Ee.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;re.isDocumentKey(r)||(r=r.child(""));const s=new Xi(new re(r),0);let o=new rt(G);return this.Yr.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.Hr)),!0)},s),Ee.resolve(this.ei(o))}ei(e){const t=[];return e.forEach(e=>{const n=this.Zr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){O(0===this.ti(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Yr;return Ee.forEach(t.mutations,i=>{const r=new Xi(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=n})}rr(e){}containsKey(e,t){const n=new Xi(t,0),i=this.Yr.firstAfterOrEqual(n);return Ee.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ee.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.ni=e,this.docs=function(){return new tt(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),r=i?i.size:0,s=this.ni(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ee.resolve(n?n.document.mutableCopy():Bt.newInvalidDocument(t))}getEntries(e,t){let n=Rn();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Bt.newInvalidDocument(e))}),Ee.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let r=Rn();const s=t.path,o=new re(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||we(ye(o),n)<=0||(i.has(o.key)||Cn(t,o))&&(r=r.insert(o.key,o.mutableCopy()))}return Ee.resolve(r)}getAllFromCollectionGroup(e,t,n,i){A(9500)}ri(e,t){return Ee.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new Yi(this)}getSize(e){return Ee.resolve(this.size)}}class Yi extends Bi{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(n)}),Ee.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.persistence=e,this.ii=new Nn(e=>pn(e),gn),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.si=0,this.oi=new Gi,this.targetCount=0,this._i=Fi.ar()}forEachTarget(e,t){return this.ii.forEach((e,n)=>t(n)),Ee.resolve()}getLastRemoteSnapshotVersion(e){return Ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ee.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Ee.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.si&&(this.si=t),Ee.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Fi(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,Ee.resolve()}updateTargetData(e,t){return this.hr(t),Ee.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,Ee.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.ii.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.ii.delete(s),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)}),Ee.waitFor(r).next(()=>i)}getTargetCount(e){return Ee.resolve(this.targetCount)}getTargetData(e,t){const n=this.ii.get(t)||null;return Ee.resolve(n)}addMatchingKeys(e,t,n){return this.oi.Kr(t,n),Ee.resolve()}removeMatchingKeys(e,t,n){this.oi.Gr(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(t=>{r.push(i.markPotentiallyOrphaned(e,t))}),Ee.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),Ee.resolve()}getMatchingKeysForTargetId(e,t){const n=this.oi.Jr(t);return Ee.resolve(n)}containsKey(e,t){return Ee.resolve(this.oi.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t){this.ai={},this.overlays={},this.ui=new Ie(0),this.ci=!1,this.ci=!0,this.li=new Ki,this.referenceDelegate=e(this),this.hi=new Zi(this),this.indexManager=new Di,this.remoteDocumentCache=function(e){return new Ji(e)}(e=>this.referenceDelegate.Pi(e)),this.serializer=new Ri(t),this.Ti=new Wi(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qi,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ai[e.toKey()];return n||(n=new Qi(t,this.referenceDelegate),this.ai[e.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,n){$("MemoryPersistence","Starting transaction:",e);const i=new tr(this.ui.next());return this.referenceDelegate.Ii(),n(i).next(e=>this.referenceDelegate.di(i).next(()=>e)).toPromise().then(e=>(i.raiseOnCommittedEvent(),e))}Ei(e,t){return Ee.or(Object.values(this.ai).map(n=>()=>n.containsKey(e,t)))}}class tr extends _e{constructor(e){super(),this.currentSequenceNumber=e}}class nr{constructor(e){this.persistence=e,this.Ai=new Gi,this.Ri=null}static Vi(e){return new nr(e)}get mi(){if(this.Ri)return this.Ri;throw A(60996)}addReference(e,t,n){return this.Ai.addReference(n,t),this.mi.delete(n.toString()),Ee.resolve()}removeReference(e,t,n){return this.Ai.removeReference(n,t),this.mi.add(n.toString()),Ee.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),Ee.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(e=>this.mi.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.mi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ee.forEach(this.mi,n=>{const i=re.fromPath(n);return this.fi(e,i).next(e=>{e||t.removeEntry(i,pe.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(e=>{e?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return Ee.or([()=>Ee.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ir{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Is=n,this.ds=i}static Es(e,t){let n=Un(),i=Un();for(const r of t.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ir(e,t.fromCache,n,i)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return(0,a.nr)()?8:Te((0,a.ZQ)())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,n,i){const r={result:null};return this.ps(e,t).next(e=>{r.result=e}).next(()=>{if(!r.result)return this.ys(e,t,i,n).next(e=>{r.result=e})}).next(()=>{if(r.result)return;const n=new rr;return this.ws(e,t,n).next(i=>{if(r.result=i,this.Rs)return this.Ss(e,t,n,i.size)})}).next(()=>r.result)}Ss(e,t,n,i){return n.documentReadCount<this.Vs?(I()<=o.$b.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",kn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Ee.resolve()):(I()<=o.$b.DEBUG&&$("QueryEngine","Query:",kn(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.fs*i?(I()<=o.$b.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",kn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,En(t))):Ee.resolve())}ps(e,t){if(bn(t))return Ee.resolve(null);let n=En(t);return this.indexManager.getIndexType(e,n).next(i=>0===i?null:(null!==t.limit&&1===i&&(t=Sn(t,null,"F"),n=En(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const r=Un(...i);return this.gs.getDocuments(e,r).next(i=>this.indexManager.getMinOffset(e,n).next(n=>{const s=this.bs(t,i);return this.Ds(t,s,r,n.readTime)?this.ps(e,Sn(t,null,"F")):this.vs(e,s,t,n)}))})))}ys(e,t,n,i){return bn(t)||i.isEqual(pe.min())?Ee.resolve(null):this.gs.getDocuments(e,n).next(r=>{const s=this.bs(t,r);return this.Ds(t,s,n,i)?Ee.resolve(null):(I()<=o.$b.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),kn(t)),this.vs(e,s,t,ve(i,ge)).next(e=>e))})}bs(e,t){let n=new rt(xn(e));return t.forEach((t,i)=>{Cn(e,i)&&(n=n.add(i))}),n}Ds(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ws(e,t,n){return I()<=o.$b.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",kn(t)),this.gs.getDocumentsMatchingQuery(e,t,be.min(),n)}vs(e,t,n,i){return this.gs.getDocumentsMatchingQuery(e,n,i).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="LocalStore";class ar{constructor(e,t,n,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new tt(G),this.Ms=new Nn(e=>pn(e),gn),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(n)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Hi(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function lr(e,t,n,i){return new ar(e,t,n,i)}async function cr(e,t){const n=R(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next(r=>(i=r,n.Ns(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const r=[],s=[];let o=Un();for(const e of i){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({Bs:e,removedBatchIds:r,addedBatchIds:s}))})})}class ur{constructor(){this.activeTargetIds=zn()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hr{constructor(){this.Fo=new ur,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,n){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new ur,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{xo(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="ConnectivityMonitor";class pr{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){$(fr,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){$(fr,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gr=null;function mr(){return null===gr?gr=function(){return 268435456+Math.round(2147483648*Math.random())}():gr++,"0x"+gr.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const vr="RestConnection",yr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class br{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${n}/databases/${i}`,this.Ko=this.databaseId.database===wt?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Wo(e,t,n,i,r){const s=mr(),o=this.Go(e,t.toUriEncodedString());$(vr,`Sending RPC '${e}' ${s}:`,o,n);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,i,r);const{host:c}=new URL(o),u=(0,a.zJ)(c);return this.jo(e,o,l,n,u).then(t=>($(vr,`Received RPC '${e}' ${s}: `,t),t),t=>{throw C(vr,`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t})}Jo(e,t,n,i,r,s){return this.Wo(e,t,n,i,r)}zo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+T}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Go(e,t){const n=yr[e];return`${this.$o}/v1/${t}:${n}`}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="WebChannelConnection";class Er extends br{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,n,i,r){const s=mr();return new Promise((r,o)=>{const a=new u;a.setWithCredentials(!0),a.listenOnce(d.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case f.NO_ERROR:const t=a.getResponseJson();$(_r,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),r(t);break;case f.TIMEOUT:$(_r,`RPC '${e}' ${s} timed out`),o(new L(P.DEADLINE_EXCEEDED,"Request time out"));break;case f.HTTP_ERROR:const n=a.getStatus();if($(_r,`RPC '${e}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(t)>=0?t:P.UNKNOWN}(t.status);o(new L(e,t.message))}else o(new L(P.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(P.UNAVAILABLE,"Connection failed."));break;default:A(9055,{c_:e,streamId:s,l_:a.getLastErrorCode(),h_:a.getLastError()})}}finally{$(_r,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);$(_r,`RPC '${e}' ${s} sending request:`,i),a.send(t,"POST",l,n,15)})}P_(e,t,n){const i=mr(),r=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=v(),o=m(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.zo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=r.join("");$(_r,`Creating RPC '${e}' stream ${i}: ${c}`,a);const u=s.createWebChannel(c,a);this.T_(u);let d=!1,f=!1;const y=new wr({Ho:t=>{f?$(_r,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(d||($(_r,`Opening RPC '${e}' stream ${i} transport.`),u.open(),d=!0),$(_r,`RPC '${e}' stream ${i} sending:`,t),u.send(t))},Yo:()=>u.close()}),b=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return b(u,h.EventType.OPEN,()=>{f||($(_r,`RPC '${e}' stream ${i} transport opened.`),y.s_())}),b(u,h.EventType.CLOSE,()=>{f||(f=!0,$(_r,`RPC '${e}' stream ${i} transport closed`),y.__(),this.I_(u))}),b(u,h.EventType.ERROR,t=>{f||(f=!0,C(_r,`RPC '${e}' stream ${i} transport errored. Name:`,t.name,"Message:",t.message),y.__(new L(P.UNAVAILABLE,"The operation could not be completed")))}),b(u,h.EventType.MESSAGE,t=>{var n;if(!f){const r=t.data[0];O(!!r,16349);const s=r,o=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){$(_r,`RPC '${e}' stream ${i} received error:`,o);const t=o.status;let n=function(e){const t=wi[e];if(void 0!==t)return Ei(t)}(t),r=o.message;void 0===n&&(n=P.INTERNAL,r="Unknown error status: "+t+" with message "+o.message),f=!0,y.__(new L(n,r)),u.close()}else $(_r,`RPC '${e}' stream ${i} received:`,r),y.a_(r)}}),b(o,g.STAT_EVENT,t=>{t.stat===p.PROXY?$(_r,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===p.NOPROXY&&$(_r,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.o_()},0),y}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(e){return new Ti(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t,n=1e3,i=1.5,r=6e4){this.Fi=e,this.timerId=t,this.d_=n,this.E_=i,this.A_=r,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-n);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){null!==this.V_&&(this.V_.skipDelay(),this.V_=null)}cancel(){null!==this.V_&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $r{}class kr extends $r{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.Wo(e,Ii(t,n),i,r,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new L(P.UNKNOWN,e.toString())})}Jo(e,t,n,i,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Jo(e,Ii(t,n),i,s,o,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new L(P.UNKNOWN,e.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Cr{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){0===this.sa&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){"Online"===this.state?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,"Online"===e&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(k(t),this._a=!1):$("OnlineStateTracker",t)}ha(){null!==this.oa&&(this.oa.cancel(),this.oa=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="RemoteStore";class Ar{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=r,this.Ea.xo(e=>{n.enqueueAndForget(async()=>{Rr(this)&&($(xr,"Restarting streams for network reachability change."),await async function(e){const t=R(e);t.Ia.add(4),await Or(t),t.Aa.set("Unknown"),t.Ia.delete(4),await Nr(t)}(this))})}),this.Aa=new Cr(n,i)}}async function Nr(e){if(Rr(e))for(const t of e.da)await t(!0)}async function Or(e){for(const t of e.da)await t(!1)}function Rr(e){return 0===R(e).Ia.size}async function Pr(e,t){const n=R(e);t?(n.Ia.delete(2),await Nr(n)):t||(n.Ia.add(2),await Or(n),n.Aa.set("Unknown"))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lr{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new D,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new Lr(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new L(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}class Dr{constructor(){this.queries=Mr(),this.onlineState="Unknown",this.Da=new Set}terminate(){!function(e,t){const n=R(e),i=n.queries;n.queries=Mr(),i.forEach((e,n)=>{for(const i of n.wa)i.onError(t)})}(this,new L(P.ABORTED,"Firestore shutting down"))}}function Mr(){return new Nn(e=>$n(e),In)}function Vr(e){e.Da.forEach(e=>{e.next()})}var jr,Fr;(Fr=jr||(jr={})).Fa="default",Fr.Cache="cache";const Ur="SyncEngine";class Br{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.hu={},this.Pu=new Nn(e=>$n(e),In),this.Tu=new Map,this.Iu=new Set,this.du=new tt(re.comparator),this.Eu=new Map,this.Au=new Gi,this.Ru={},this.Vu=new Map,this.mu=Fi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return!0===this.fu}}function zr(e,t,n){const i=R(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.Pu.forEach((n,i)=>{const r=i.view.va(t);r.snapshot&&e.push(r.snapshot)}),function(e,t){const n=R(e);n.onlineState=t;let i=!1;n.queries.forEach((e,n)=>{for(const r of n.wa)r.va(t)&&(i=!0)}),i&&Vr(n)}(i.eventManager,t),e.length&&i.hu.J_(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Hr(e,t,n){const i=R(e),r=[],s=[],o=[];i.Pu.isEmpty()||(i.Pu.forEach((e,a)=>{o.push(i.gu(a,t,n).then(e=>{var t;if((e||n)&&i.isPrimaryClient){const r=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===t?void 0:t.current;i.sharedClientState.updateQueryState(a.targetId,r?"current":"not-current")}if(e){r.push(e);const t=ir.Es(a.targetId,e);s.push(t)}}))}),await Promise.all(o),i.hu.J_(r),await async function(e,t){const n=R(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Ee.forEach(t,t=>Ee.forEach(t.Is,i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i)).next(()=>Ee.forEach(t.ds,i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))}catch(e){if(!Se(e))throw e;$(or,"Failed to update sequence numbers: "+e)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.Fs.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.Fs=n.Fs.insert(e,r)}}}(i.localStore,s))}async function Wr(e,t){const n=R(e);if(!n.currentUser.isEqual(t)){$(Ur,"User change. New user:",t.toKey());const e=await cr(n.localStore,t);n.currentUser=t,function(e,t){e.Vu.forEach(e=>{e.forEach(e=>{e.reject(new L(P.CANCELLED,t))})}),e.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Hr(n,e.Bs)}}class qr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Sr(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return lr(this.persistence,new sr,e.initialUser,this.serializer)}Du(e){return new er(nr.Vi,this.serializer)}bu(e){return new hr}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qr.provider={build:()=>new qr};class Kr{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>zr(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wr.bind(null,this.syncEngine),await Pr(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Dr}()}createDatastore(e){const t=Sr(e.databaseInfo.databaseId),n=function(e){return new Er(e)}(e.databaseInfo);return function(e,t,n,i){return new kr(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,i,r){return new Ar(e,t,n,i,r)}(this.localStore,this.datastore,e.asyncQueue,e=>zr(this.syncEngine,e,0),function(){return pr.C()?new pr:new dr}())}createSyncEngine(e,t){return function(e,t,n,i,r,s,o){const a=new Br(e,t,n,i,r,s);return o&&(a.fu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=R(e);$(xr,"RemoteStore shutting down."),t.Ia.add(5),await Or(t),t.Ea.shutdown(),t.Aa.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}Kr.provider={build:()=>new Kr};
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gr(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Xr=new Map,Qr="firestore.googleapis.com",Jr=!0;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new L(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Qr,this.ssl=Jr}else this.host=e.host,this.ssl=null!==(t=e.ssl)&&void 0!==t?t:Jr;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=Vi;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<Ui)throw new L(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}se("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gr(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zr{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new L(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yr(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new V;switch(e.type){case"firstParty":return new B(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new L(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Xr.get(e);t&&($("ComponentProvider","Removing Datastore"),Xr.delete(e),t.terminate())}(this),Promise.resolve()}}function es(e,t,n,i={}){var r;e=le(e,Zr);const s=(0,a.zJ)(t),o=e._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:e._getEmulatorOptions()}),c=`${t}:${n}`;s&&((0,a.gE)(`https://${c}`),(0,a.P1)("Firestore",!0)),o.host!==Qr&&o.host!==c&&C("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:s,emulatorOptions:i});if(!(0,a.bD)(u,l)&&(e._setSettings(u),i.mockUserToken)){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=E.MOCK_USER;else{t=(0,a.Fy)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new L(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new E(s)}e._authCredentials=new j(new M(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ts(this.firestore,e,this._query)}}class ns{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new is(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ns(this.firestore,e,this._key)}toJSON(){return{type:ns._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(ue(t,ns._jsonSchema))return new ns(e,n||null,new re(te.fromString(t.referencePath)))}}ns._jsonSchemaVersion="firestore/documentReference/1.0",ns._jsonSchema={type:ce("string",ns._jsonSchemaVersion),referencePath:ce("string")};class is extends ts{constructor(e,t,n){super(e,t,yn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ns(this.firestore,null,new re(e))}withConverter(e){return new is(this.firestore,e,this._path)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rs="AsyncQueue";class ss{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Ir(this,"async_queue_retry"),this.oc=()=>{const e=Tr();e&&$(rs,"Visibility state changed to "+e.visibilityState),this.F_.y_()},this._c=e;const t=Tr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Tr();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new D;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(0!==this.Zu.length){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Se(e))throw e;$(rs,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(e=>{throw this.tc=e,this.nc=!1,k("INTERNAL UNHANDLED ERROR: ",os(e)),e}).then(e=>(this.nc=!1,e))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=Lr.createAndSchedule(this,e,t,n,e=>this.lc(e));return this.ec.push(i),i}ac(){this.tc&&A(47125,{hc:os(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do{e=this._c,await e}while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function os(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class as extends Zr{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new ss,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ss(e),this._firestoreClient=void 0,await e}}}function ls(e,t){const n="object"==typeof e?e:(0,r.Sx)(),i="string"==typeof e?e:t||wt,s=(0,r.j6)(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const e=(0,a.yU)("firestore");e&&es(s,...e)}return s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(lt.fromBase64String(e))}catch(e){throw new L(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new cs(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:cs._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ue(e,cs._jsonSchema))return cs.fromBase64String(e.bytes)}}cs._jsonSchemaVersion="firestore/bytes/1.0",cs._jsonSchema={type:ce("string",cs._jsonSchemaVersion),bytes:ce("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class us{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new L(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hs{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hs._jsonSchemaVersion}}static fromJSON(e){if(ue(e,hs._jsonSchema))return new hs(e.latitude,e.longitude)}}hs._jsonSchemaVersion="firestore/geoPoint/1.0",hs._jsonSchema={type:ce("string",hs._jsonSchemaVersion),latitude:ce("number"),longitude:ce("number")};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ds{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ds._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ue(e,ds._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new ds(e.vectorValues);throw new L(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ds._jsonSchemaVersion="firestore/vectorValue/1.0",ds._jsonSchema={type:ce("string",ds._jsonSchemaVersion),vectorValues:ce("object")};const fs=new RegExp("[~\\*/\\[\\]]");function ps(e,t,n){if(t.search(fs)>=0)throw gs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new us(...t.split("."))._internalPath}catch(i){throw gs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function gs(e,t,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new L(P.INVALID_ARGUMENT,a+e+l)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ms{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ns(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new vs(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ys("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class vs extends ms{data(){return super.data()}}function ys(e,t){return"string"==typeof t?ps(e,t):t instanceof us?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ws extends ms{constructor(e,t,n,i,r,s){super(e,t,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _s(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ys("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ws._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}ws._jsonSchemaVersion="firestore/documentSnapshot/1.0",ws._jsonSchema={type:ce("string",ws._jsonSchemaVersion),bundleSource:ce("string","DocumentSnapshot"),bundleName:ce("string"),bundle:ce("string")};class _s extends ws{data(e={}){return super.data(e)}}class Es{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new bs(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new _s(this._firestore,this._userDataWriter,n.key,n,new bs(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const i=new _s(e._firestore,e._userDataWriter,n.doc.key,n.doc,new bs(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const i=new _s(e._firestore,e._userDataWriter,t.doc.key,t.doc,new bs(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let r=-1,s=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Ts(t.type),doc:i,oldIndex:r,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Es._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=K.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],i=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),i.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ts(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A(61501,{type:e})}}Es._jsonSchemaVersion="firestore/querySnapshot/1.0",Es._jsonSchema={type:ce("string",Es._jsonSchemaVersion),bundleSource:ce("string","QuerySnapshot"),bundleName:ce("string"),bundle:ce("string")};new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){T=e}(r.MF),(0,r.om)(new s.uA("firestore",(e,{instanceIdentifier:n,options:i})=>{const r=e.getProvider("app").getImmediate(),s=new as(new F(e.getProvider("auth-internal")),new H(r,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new L(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _t(e.options.projectId,t)}(r,n),r);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(w,_,e),(0,r.KO)(w,_,"esm2017")}()},922:(e,t,n)=>{n.d(t,{P5:()=>wt});var i=n(461),r=n(424),s=n(72),o=n(125),a=n(297);const l="@firebase/installations",c="0.6.18",u=1e4,h=`w:${c}`,d="FIS_v2",f="https://firebaseinstallations.googleapis.com/v1",p=36e5,g="installations",m="Installations",v={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},y=new s.FA(g,m,v);function b(e){return e instanceof s.g&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w({projectId:e}){return`${f}/projects/${e}/installations`}function _(e){return{token:e.token,requestStatus:2,expiresIn:$(e.expiresIn),creationTime:Date.now()}}async function E(e,t){const n=await t.json(),i=n.error;return y.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function T({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function S(e,{refreshToken:t}){const n=T(e);return n.append("Authorization",k(t)),n}async function I(e){const t=await e();return t.status>=500&&t.status<600?e():t}function $(e){return Number(e.replace("s","000"))}function k(e){return`${d} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=w(e),r=T(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const o={fid:n,authVersion:d,appId:e.appId,sdkVersion:h},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await I(()=>fetch(i,a));if(l.ok){const e=await l.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:_(e.authToken)};return t}throw await E("Create Installation",l)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){return new Promise(t=>{setTimeout(t,e)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=/^[cdef][\w-]{21}$/,O="";function R(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=P(e);return N.test(n)?n:O}catch(e){return O}}function P(e){const t=A(e);return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=new Map;function M(e,t){const n=L(e);V(n,t),j(n,t)}function V(e,t){const n=D.get(e);if(n)for(const i of n)i(t)}function j(e,t){const n=U();n&&n.postMessage({key:e,fid:t}),B()}let F=null;function U(){return!F&&"BroadcastChannel"in self&&(F=new BroadcastChannel("[Firebase] FID Change"),F.onmessage=e=>{V(e.data.key,e.data.fid)}),F}function B(){0===D.size&&F&&(F.close(),F=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z="firebase-installations-database",H=1,W="firebase-installations-store";let q=null;function K(){return q||(q=(0,a.P2)(z,H,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(W)}}})),q}async function G(e,t){const n=L(e),i=await K(),r=i.transaction(W,"readwrite"),s=r.objectStore(W),o=await s.get(n);return await s.put(t,n),await r.done,o&&o.fid===t.fid||M(e,t.fid),t}async function X(e){const t=L(e),n=await K(),i=n.transaction(W,"readwrite");await i.objectStore(W).delete(t),await i.done}async function Q(e,t){const n=L(e),i=await K(),r=i.transaction(W,"readwrite"),s=r.objectStore(W),o=await s.get(n),a=t(o);return void 0===a?await s.delete(n):await s.put(a,n),await r.done,!a||o&&o.fid===a.fid||M(e,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e){let t;const n=await Q(e.appConfig,n=>{const i=Y(n),r=Z(e,i);return t=r.registrationPromise,r.installationEntry});return n.fid===O?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Y(e){const t=e||{fid:R(),registrationStatus:0};return ie(t)}function Z(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(y.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=ee(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:te(e)}:{installationEntry:t}}async function ee(e,t){try{const n=await C(e,t);return G(e.appConfig,n)}catch(n){throw b(n)&&409===n.customData.serverCode?await X(e.appConfig):await G(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function te(e){let t=await ne(e.appConfig);while(1===t.registrationStatus)await x(100),t=await ne(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await J(e);return n||t}return t}function ne(e){return Q(e,e=>{if(!e)throw y.create("installation-not-found");return ie(e)})}function ie(e){return re(e)?{fid:e.fid,registrationStatus:0}:e}function re(e){return 1===e.registrationStatus&&e.registrationTime+u<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se({appConfig:e,heartbeatServiceProvider:t},n){const i=oe(e,n),r=S(e,n),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const o={installation:{sdkVersion:h,appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await I(()=>fetch(i,a));if(l.ok){const e=await l.json(),t=_(e);return t}throw await E("Generate Auth Token",l)}function oe(e,{fid:t}){return`${w(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(e,t=!1){let n;const i=await Q(e.appConfig,i=>{if(!he(i))throw y.create("not-registered");const r=i.authToken;if(!t&&de(r))return i;if(1===r.requestStatus)return n=le(e,t),i;{if(!navigator.onLine)throw y.create("app-offline");const t=pe(i);return n=ue(e,t),t}}),r=n?await n:i.authToken;return r}async function le(e,t){let n=await ce(e.appConfig);while(1===n.authToken.requestStatus)await x(100),n=await ce(e.appConfig);const i=n.authToken;return 0===i.requestStatus?ae(e,t):i}function ce(e){return Q(e,e=>{if(!he(e))throw y.create("not-registered");const t=e.authToken;return ge(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ue(e,t){try{const n=await se(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await G(e.appConfig,i),n}catch(n){if(!b(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await G(e.appConfig,n)}else await X(e.appConfig);throw n}}function he(e){return void 0!==e&&2===e.registrationStatus}function de(e){return 2===e.requestStatus&&!fe(e)}function fe(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+p}function pe(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ge(e){return 1===e.requestStatus&&e.requestTime+u<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function me(e){const t=e,{installationEntry:n,registrationPromise:i}=await J(t);return i?i.catch(console.error):ae(t).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(e,t=!1){const n=e;await ye(n);const i=await ae(n,t);return i.token}async function ye(e){const{registrationPromise:t}=await J(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function be(e){if(!e||!e.options)throw we("App Configuration");if(!e.name)throw we("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw we(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function we(e){return y.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="installations",Ee="installations-internal",Te=e=>{const t=e.getProvider("app").getImmediate(),n=be(t),r=(0,i.j6)(t,"heartbeat"),s={app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()};return s},Se=e=>{const t=e.getProvider("app").getImmediate(),n=(0,i.j6)(t,_e).getImmediate(),r={getId:()=>me(n),getToken:e=>ve(n,e)};return r};function Ie(){(0,i.om)(new o.uA(_e,Te,"PUBLIC")),(0,i.om)(new o.uA(Ee,Se,"PRIVATE"))}Ie(),(0,i.KO)(l,c),(0,i.KO)(l,c,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $e="analytics",ke="firebase_id",Ce="origin",xe=6e4,Ae="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ne="https://www.googletagmanager.com/gtag/js",Oe=new r.Vy("@firebase/analytics"),Re={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Pe=new s.FA("analytics","Analytics",Re);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Le(e){if(!e.startsWith(Ne)){const t=Pe.create("invalid-gtag-resource",{gtagURL:e});return Oe.warn(t.message),""}return e}function De(e){return Promise.all(e.map(e=>e.catch(e=>e)))}function Me(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Ve(e,t){const n=Me("firebase-js-sdk-policy",{createScriptURL:Le}),i=document.createElement("script"),r=`${Ne}?l=${e}&id=${t}`;i.src=n?null===n||void 0===n?void 0:n.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function je(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Fe(e,t,n,i,r,s){const o=i[r];try{if(o)await t[o];else{const e=await De(n),i=e.find(e=>e.measurementId===r);i&&await t[i.appId]}}catch(a){Oe.error(a)}e("config",r,s)}async function Ue(e,t,n,i,r){try{let s=[];if(r&&r["send_to"]){let e=r["send_to"];Array.isArray(e)||(e=[e]);const i=await De(n);for(const n of e){const e=i.find(e=>e.measurementId===n),r=e&&t[e.appId];if(!r){s=[];break}s.push(r)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",i,r||{})}catch(s){Oe.error(s)}}function Be(e,t,n,i){async function r(r,...s){try{if("event"===r){const[i,r]=s;await Ue(e,t,n,i,r)}else if("config"===r){const[r,o]=s;await Fe(e,t,n,i,r,o)}else if("consent"===r){const[t,n]=s;e("consent",t,n)}else if("get"===r){const[t,n,i]=s;e("get",t,n,i)}else if("set"===r){const[t]=s;e("set",t)}else e(r,...s)}catch(o){Oe.error(o)}}return r}function ze(e,t,n,i,r){let s=function(...e){window[i].push(arguments)};return window[r]&&"function"===typeof window[r]&&(s=window[r]),window[r]=Be(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}function He(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Ne)&&n.src.includes(e))return n;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We=30,qe=1e3;class Ke{constructor(e={},t=qe){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ge=new Ke;function Xe(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Qe(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:Xe(i)},s=Ae.replace("{app-id}",n),o=await fetch(s,r);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw Pe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}async function Je(e,t=Ge,n){const{appId:i,apiKey:r,measurementId:s}=e.options;if(!i)throw Pe.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw Pe.create("no-api-key")}const o=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new tt;return setTimeout(async()=>{a.abort()},void 0!==n?n:xe),Ye({appId:i,apiKey:r,measurementId:s},o,a,t)}async function Ye(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=Ge){var o;const{appId:a,measurementId:l}=e;try{await Ze(i,t)}catch(c){if(l)return Oe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${null===c||void 0===c?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const t=await Qe(e);return r.deleteThrottleMetadata(a),t}catch(c){const t=c;if(!et(t)){if(r.deleteThrottleMetadata(a),l)return Oe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${null===t||void 0===t?void 0:t.message}]`),{appId:a,measurementId:l};throw c}const u=503===Number(null===(o=null===t||void 0===t?void 0:t.customData)||void 0===o?void 0:o.httpStatus)?(0,s.p9)(n,r.intervalMillis,We):(0,s.p9)(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(a,h),Oe.debug(`Calling attemptFetch again in ${u} millis`),Ye(e,h,i,r)}}function Ze(e,t){return new Promise((n,i)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(s),i(Pe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function et(e){if(!(e instanceof s.g)||!e.customData)return!1;const t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}class tt{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nt,it;async function rt(e,t,n,i,r){if(r&&r.global)e("event",n,i);else{const r=await t,s=Object.assign(Object.assign({},i),{send_to:r});e("event",n,s)}}function st(e){it=e}function ot(e){nt=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(){if(!(0,s.zW)())return Oe.warn(Pe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,s.eX)()}catch(e){return Oe.warn(Pe.create("indexeddb-unavailable",{errorInfo:null===e||void 0===e?void 0:e.toString()}).message),!1}return!0}async function lt(e,t,n,i,r,s,o){var a;const l=Je(e);l.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Oe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>Oe.error(e)),t.push(l);const c=at().then(e=>e?i.getId():void 0),[u,h]=await Promise.all([l,c]);He(s)||Ve(s,u.measurementId),it&&(r("consent","default",it),st(void 0)),r("js",new Date);const d=null!==(a=null===o||void 0===o?void 0:o.config)&&void 0!==a?a:{};return d[Ce]="firebase",d.update=!0,null!=h&&(d[ke]=h),r("config",u.measurementId,d),nt&&(r("set",nt),ot(void 0)),u.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.app=e}_delete(){return delete ut[this.app.options.appId],Promise.resolve()}}let ut={},ht=[];const dt={};let ft,pt,gt="dataLayer",mt="gtag",vt=!1;function yt(){const e=[];if((0,s.sr)()&&e.push("This is a browser extension environment."),(0,s.dM)()||e.push("Cookies are not available."),e.length>0){const t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=Pe.create("invalid-analytics-context",{errorInfo:t});Oe.warn(n.message)}}function bt(e,t,n){yt();const i=e.options.appId;if(!i)throw Pe.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Pe.create("no-api-key");Oe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=ut[i])throw Pe.create("already-exists",{id:i});if(!vt){je(gt);const{wrappedGtag:e,gtagCore:t}=ze(ut,ht,dt,gt,mt);pt=e,ft=t,vt=!0}ut[i]=lt(e,ht,dt,t,ft,gt,n);const r=new ct(e);return r}function wt(e=(0,i.Sx)()){e=(0,s.Ku)(e);const t=(0,i.j6)(e,$e);return t.isInitialized()?t.getImmediate():_t(e)}function _t(e,t={}){const n=(0,i.j6)(e,$e);if(n.isInitialized()){const e=n.getImmediate();if((0,s.bD)(t,n.getOptions()))return e;throw Pe.create("already-initialized")}const r=n.initialize({options:t});return r}function Et(e,t,n,i){e=(0,s.Ku)(e),rt(pt,ut[e.app.options.appId],t,n,i).catch(e=>Oe.error(e))}const Tt="@firebase/analytics",St="0.10.17";function It(){function e(e){try{const t=e.getProvider($e).getImmediate();return{logEvent:(e,n,i)=>Et(t,e,n,i)}}catch(t){throw Pe.create("interop-component-reg-failed",{reason:t})}}(0,i.om)(new o.uA($e,(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return bt(n,i,t)},"PUBLIC")),(0,i.om)(new o.uA("analytics-internal",e,"PRIVATE")),(0,i.KO)(Tt,St),(0,i.KO)(Tt,St,"esm2017")}It()},951:(e,t,n)=>{n.d(t,{hx:()=>Rt});var i=n(641),r=n(953),s=n(993);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o=(e,t,n,i,r)=>l(e[1],t[1],n[1],i[1],r).map(r=>a(e[0],t[0],n[0],i[0],r)),a=(e,t,n,i,r)=>{const s=3*t*Math.pow(r-1,2),o=-3*n*r+3*n+i*r,a=e*Math.pow(r-1,3);return r*(s+r*o)-a},l=(e,t,n,i,r)=>{e-=r,t-=r,n-=r,i-=r;const s=u(i-3*n+3*t-e,3*n-6*t+3*e,3*t-3*e,e);return s.filter(e=>e>=0&&e<=1)},c=(e,t,n)=>{const i=t*t-4*e*n;return i<0?[]:[(-t+Math.sqrt(i))/(2*e),(-t-Math.sqrt(i))/(2*e)]},u=(e,t,n,i)=>{if(0===e)return c(t,n,i);t/=e,n/=e,i/=e;const r=(3*n-t*t)/3,s=(2*t*t*t-9*t*n+27*i)/27;if(0===r)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-r),-Math.sqrt(-r)];const o=Math.pow(s/2,2)+Math.pow(r/3,3);if(0===o)return[Math.pow(s/2,.5)-t/3];if(o>0)return[Math.pow(-s/2+Math.sqrt(o),1/3)-Math.pow(s/2+Math.sqrt(o),1/3)-t/3];const a=Math.sqrt(Math.pow(-r/3,3)),l=Math.acos(-s/(2*Math.sqrt(Math.pow(-r/3,3)))),u=2*Math.pow(a,1/3);return[u*Math.cos(l/3)-t/3,u*Math.cos((l+2*Math.PI)/3)-t/3,u*Math.cos((l+4*Math.PI)/3)-t/3]};var h=n(185),d=n(362),f=n(692);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const p=e=>m(e),g=(e,t)=>("string"===typeof e&&(t=e,e=void 0),p(e).includes(t)),m=(e=window)=>{if("undefined"===typeof e)return[];e.Ionic=e.Ionic||{};let t=e.Ionic.platforms;return null==t&&(t=e.Ionic.platforms=v(e),t.forEach(t=>e.document.documentElement.classList.add(`plt-${t}`))),t},v=e=>{const t=d.c.get("platform");return Object.keys(L).filter(n=>{const i=null===t||void 0===t?void 0:t[n];return"function"===typeof i?i(e):L[n](e)})},y=e=>$(e)&&!C(e),b=e=>!!R(e,/iPad/i)||!(!R(e,/Macintosh/i)||!$(e)),w=e=>R(e,/iPhone/i),_=e=>R(e,/iPhone|iPod/i)||b(e),E=e=>R(e,/android|sink/i),T=e=>E(e)&&!R(e,/mobile/i),S=e=>{const t=e.innerWidth,n=e.innerHeight,i=Math.min(t,n),r=Math.max(t,n);return i>390&&i<520&&r>620&&r<800},I=e=>{const t=e.innerWidth,n=e.innerHeight,i=Math.min(t,n),r=Math.max(t,n);return b(e)||T(e)||i>460&&i<820&&r>780&&r<1400},$=e=>P(e,"(any-pointer:coarse)"),k=e=>!$(e),C=e=>x(e)||A(e),x=e=>!!(e["cordova"]||e["phonegap"]||e["PhoneGap"]),A=e=>{const t=e["Capacitor"];return!!((null===t||void 0===t?void 0:t.isNative)||(null===t||void 0===t?void 0:t.isNativePlatform)&&t.isNativePlatform())},N=e=>R(e,/electron/i),O=e=>{var t;return!(!(null===(t=e.matchMedia)||void 0===t?void 0:t.call(e,"(display-mode: standalone)").matches)&&!e.navigator.standalone)},R=(e,t)=>t.test(e.navigator.userAgent),P=(e,t)=>{var n;return null===(n=e.matchMedia)||void 0===n?void 0:n.call(e,t).matches},L={ipad:b,iphone:w,ios:_,android:E,phablet:S,tablet:I,cordova:x,capacitor:A,electron:N,pwa:O,mobile:$,mobileweb:y,desktop:k,hybrid:C};let D;const M=e=>e&&(0,s.Wi)(e)||D,V=(e={})=>{if("undefined"===typeof window)return;const t=window.document,n=window,i=n.Ionic=n.Ionic||{},r=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,d.b)(n)),{persistConfig:!1}),i.config),(0,d.d)(n)),e);d.c.reset(r),d.c.getBoolean("persistConfig")&&(0,d.s)(n,r),m(n),i.config=d.c,i.mode=D=d.c.get("mode",t.documentElement.getAttribute("mode")||(g(n,"ios")?"ios":"md")),d.c.set("mode",D),t.documentElement.setAttribute("mode",D),t.documentElement.classList.add(D),d.c.getBoolean("_testing")&&d.c.set("animated",!1);const o=e=>{var t;return null===(t=e.tagName)||void 0===t?void 0:t.startsWith("ION-")},a=e=>["ios","md"].includes(e);(0,s.iY)(e=>{while(e){const t=e.mode||e.getAttribute("mode");if(t){if(a(t))return t;o(e)&&(0,d.p)('Invalid ionic mode: "'+t+'", expected: "ios" or "md"')}e=e.parentElement}return D})},j=async(e,t,n,i,r,s)=>{var o;if(e)return e.attachViewToDom(t,n,r,i);if(!s&&"string"!==typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const a="string"===typeof n?null===(o=t.ownerDocument)||void 0===o?void 0:o.createElement(n):n;return i&&i.forEach(e=>a.classList.add(e)),r&&Object.assign(a,r),t.appendChild(a),await new Promise(e=>(0,h.c)(a,e)),a},F=(e,t)=>{if(t){if(e){const n=t.parentElement;return e.removeViewFromDom(n,t)}t.remove()}return Promise.resolve()},U=1,B=2,z=3;class H{constructor(e,t){this.component=e,this.params=t,this.state=U}async init(e){if(this.state=B,!this.element){const t=this.component;this.element=await j(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)}}_destroy(){(0,h.n)(this.state!==z,"view state must be ATTACHED");const e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=z}}const W=(e,t,n)=>!!e&&(e.component===t&&(0,h.s)(e.params,n)),q=(e,t)=>e?e instanceof H?e:new H(e,t):null,K=e=>e.map(e=>e instanceof H?e:"component"in e?q(e.component,null===e.componentProps?void 0:e.componentProps):q(e,void 0)).filter(e=>null!==e),G=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}",X=(0,s.w$)(class extends s.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.ionNavWillLoad=(0,s.lh)(this,"ionNavWillLoad",7),this.ionNavWillChange=(0,s.lh)(this,"ionNavWillChange",3),this.ionNavDidChange=(0,s.lh)(this,"ionNavDidChange",3),this.transInstr=[],this.gestureOrAnimationInProgress=!1,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.didLoad=!1,this.animated=!0}swipeGestureChanged(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}rootChanged(){const e=s.L2.isDev;void 0!==this.root&&!1!==this.didLoad&&(this.useRouter?e&&(0,d.p)("[ion-nav] - A root attribute is not supported when using ion-router.",this.el):void 0!==this.root&&this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=null!==document.querySelector("ion-router")&&null===this.el.closest("[no-router]"),void 0===this.swipeGesture){const e=M(this);this.swipeGesture=d.c.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}async componentDidLoad(){this.didLoad=!0,this.rootChanged(),this.gesture=(await n.e(19).then(n.bind(n,19))).createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged()}connectedCallback(){this.destroyed=!1}disconnectedCallback(){for(const e of this.views)(0,f.l)(e.element,f.d),e._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=0,this.views.length=0,this.destroyed=!0}push(e,t,n,i){return this.insert(-1,e,t,n,i)}insert(e,t,n,i,r){return this.insertPages(e,[{component:t,componentProps:n}],i,r)}insertPages(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)}pop(e,t){return this.removeIndex(-1,1,e,t)}popTo(e,t,n){const i={removeStart:-1,removeCount:-1,opts:t};return"object"===typeof e&&e.component?(i.removeView=e,i.removeStart=1):"number"===typeof e&&(i.removeStart=e+1),this.queueTrns(i,n)}popToRoot(e,t){return this.removeIndex(1,-1,e,t)}removeIndex(e,t=1,n,i){return this.queueTrns({removeStart:e,removeCount:t,opts:n},i)}setRoot(e,t,n,i){return this.setPages([{component:e,componentProps:t}],n,i)}setPages(e,t,n){return null!==t&&void 0!==t||(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)}setRouteId(e,t,n,i){const r=this.getActiveSync();if(W(r,e,t))return Promise.resolve({changed:!1,element:r.element});let s;const o=new Promise(e=>s=e);let a;const l={updateURL:!1,viewIsReady:e=>{let t;const n=new Promise(e=>t=e);return s({changed:!0,element:e,markVisible:async()=>{t(),await a}}),n}};if("root"===n)a=this.setRoot(e,t,l);else{const r=this.views.find(n=>W(n,e,t));r?a=this.popTo(r,Object.assign(Object.assign({},l),{direction:"back",animationBuilder:i})):"forward"===n?a=this.push(e,t,Object.assign(Object.assign({},l),{animationBuilder:i})):"back"===n&&(a=this.setRoot(e,t,Object.assign(Object.assign({},l),{direction:"back",animated:!0,animationBuilder:i})))}return o}async getRouteId(){const e=this.getActiveSync();if(e)return{id:e.element.tagName,params:e.params,element:e.element}}async getActive(){return this.getActiveSync()}async getByIndex(e){return this.views[e]}async canGoBack(e){return this.canGoBackSync(e)}async getPrevious(e){return this.getPreviousSync(e)}async getLength(){return Promise.resolve(this.views.length)}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(e=this.getActiveSync()){return!(!e||!this.getPreviousSync(e))}getPreviousSync(e=this.getActiveSync()){if(!e)return;const t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}async queueTrns(e,t){var n,i;if(this.isTransitioning&&(null===(n=e.opts)||void 0===n?void 0:n.skipIfBusy))return!1;const r=new Promise((t,n)=>{e.resolve=t,e.reject=n});if(e.done=t,e.opts&&!1!==e.opts.updateURL&&this.useRouter){const t=document.querySelector("ion-router");if(t){const n=await t.canTransition();if(!1===n)return!1;if("string"===typeof n)return t.push(n,e.opts.direction||"back"),!1}}return 0===(null===(i=e.insertViews)||void 0===i?void 0:i.length)&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),r}success(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){const t=document.querySelector("ion-router");if(t){const n="back"===e.direction?"back":"forward";t.navChanged(n)}}}failed(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}fireError(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}async runTransition(e){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e);const t=this.getActiveSync(),n=this.getEnteringView(e,t);if(!t&&!n)throw new Error("no views in the stack to be removed");n&&n.state===U&&await n.init(this.el),this.postViewInit(n,t,e);const i=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t;if(i&&e.opts&&t){const i="back"===e.opts.direction;i&&(e.opts.animationBuilder=e.opts.animationBuilder||(null===n||void 0===n?void 0:n.animationBuilder)),t.animationBuilder=e.opts.animationBuilder}let r;r=i?await this.transition(n,t,e):{hasCompleted:!0,requiresTransition:!1},this.success(r,e),this.ionNavDidChange.emit()}catch(t){this.failed(t,e)}this.isTransitioning=!1,this.nextTrns()}prepareTI(e){var t,n,i;const r=this.views.length;if(null!==(t=e.opts)&&void 0!==t||(e.opts={}),null!==(n=(i=e.opts).delegate)&&void 0!==n||(i.delegate=this.delegate),void 0!==e.removeView){(0,h.n)(void 0!==e.removeStart,"removeView needs removeStart"),(0,h.n)(void 0!==e.removeCount,"removeView needs removeCount");const t=this.views.indexOf(e.removeView);if(t<0)throw new Error("removeView was not found");e.removeStart+=t}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=r-1),e.removeCount<0&&(e.removeCount=r-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===r),e.insertViews&&((e.insertStart<0||e.insertStart>r)&&(e.insertStart=r),e.enteringRequiresTransition=e.insertStart===r);const s=e.insertViews;if(!s)return;(0,h.n)(s.length>0,"length can not be zero");const o=K(s);if(0===o.length)throw new Error("invalid views to insert");for(const a of o){a.delegate=e.opts.delegate;const t=a.nav;if(t&&t!==this)throw new Error("inserted view was already inserted");if(a.state===z)throw new Error("inserted view was already destroyed")}e.insertViews=o}getEnteringView(e,t){const n=e.insertViews;if(void 0!==n)return n[n.length-1];const i=e.removeStart;if(void 0!==i){const n=this.views,r=i+e.removeCount;for(let e=n.length-1;e>=0;e--){const s=n[e];if((e<i||e>=r)&&s!==t)return s}}}postViewInit(e,t,n){var i,r,s;(0,h.n)(t||e,"Both leavingView and enteringView are null"),(0,h.n)(n.resolve,"resolve must be valid"),(0,h.n)(n.reject,"reject must be valid");const o=n.opts,{insertViews:a,removeStart:l,removeCount:c}=n;let u;if(void 0!==l&&void 0!==c){(0,h.n)(l>=0,"removeStart can not be negative"),(0,h.n)(c>=0,"removeCount can not be negative"),u=[];for(let n=l;n<l+c;n++){const i=this.views[n];void 0!==i&&i!==e&&i!==t&&u.push(i)}null!==(i=o.direction)&&void 0!==i||(o.direction="back")}const p=this.views.length+(null!==(r=null===a||void 0===a?void 0:a.length)&&void 0!==r?r:0)-(null!==c&&void 0!==c?c:0);if((0,h.n)(p>=0,"final balance can not be negative"),0===p)throw(0,d.p)("[ion-nav] - You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(a){let e=n.insertStart;for(const t of a)this.insertViewAt(t,e),e++;n.enteringRequiresTransition&&(null!==(s=o.direction)&&void 0!==s||(o.direction="forward"))}if(u&&u.length>0){for(const e of u)(0,f.l)(e.element,f.b),(0,f.l)(e.element,f.c),(0,f.l)(e.element,f.d);for(const e of u)this.destroyView(e)}}async transition(e,t,n){const i=n.opts,r=i.progressAnimation?e=>{void 0===e||this.gestureOrAnimationInProgress?this.sbAni=e:(this.gestureOrAnimationInProgress=!0,e.onFinish(()=>{this.gestureOrAnimationInProgress=!1},{oneTimeCallback:!0}),e.progressEnd(0,0,0))}:void 0,s=M(this),o=e.element,a=t&&t.element,l=Object.assign(Object.assign({mode:s,showGoBack:this.canGoBackSync(e),baseEl:this.el,progressCallback:r,animated:this.animated&&d.c.getBoolean("animated",!0),enteringEl:o,leavingEl:a},i),{animationBuilder:i.animationBuilder||this.animation||d.c.get("navAnimation")}),{hasCompleted:c}=await(0,f.t)(l);return this.transitionFinish(c,e,t,i)}transitionFinish(e,t,n,i){const r=e?t:n;return r&&this.unmountInactiveViews(r),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:i.direction}}insertViewAt(e,t){const n=this.views,i=n.indexOf(e);i>-1?((0,h.n)(e.nav===this,"view is not part of the nav"),n.splice(i,1),n.splice(t,0,e)):((0,h.n)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))}removeView(e){(0,h.n)(e.state===B||e.state===z,"view state should be loaded or destroyed");const t=this.views,n=t.indexOf(e);(0,h.n)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)}destroyView(e){e._destroy(),this.removeView(e)}unmountInactiveViews(e){if(this.destroyed)return;const t=this.views,n=t.indexOf(e);for(let i=t.length-1;i>=0;i--){const e=t[i],r=e.element;r&&(i>n?((0,f.l)(r,f.d),this.destroyView(e)):i<n&&(0,f.s)(r,!0))}}canStart(){return!this.gestureOrAnimationInProgress&&!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.canGoBackSync()}onStart(){this.gestureOrAnimationInProgress=!0,this.pop({direction:"back",progressAnimation:!0})}onMove(e){this.sbAni&&this.sbAni.progressStep(e)}onEnd(e,t,n){if(this.sbAni){this.sbAni.onFinish(()=>{this.gestureOrAnimationInProgress=!1},{oneTimeCallback:!0});let i=e?-.001:.001;e?i+=o([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),i+=o([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,i,n)}else this.gestureOrAnimationInProgress=!1}render(){return(0,s.h)("slot",{key:"8067c9835d255daec61f33dba200fd3a6ff839a0"})}get el(){return this}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}static get style(){return G}},[1,"ion-nav",{delegate:[16],swipeGesture:[1028,"swipe-gesture"],animated:[4],animation:[16],rootParams:[16,"root-params"],root:[1],push:[64],insert:[64],insertPages:[64],pop:[64],popTo:[64],popToRoot:[64],removeIndex:[64],setRoot:[64],setPages:[64],setRouteId:[64],getRouteId:[64],getActive:[64],getByIndex:[64],canGoBack:[64],getPrevious:[64],getLength:[64]},void 0,{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}]);function Q(){if("undefined"===typeof customElements)return;const e=["ion-nav"];e.forEach(e=>{switch(e){case"ion-nav":customElements.get(e)||customElements.define(e,X);break}})}const J=Q,Y=":host(.tab-hidden){display:none !important}";s.wt;const Z=(e,t)=>null!==t.closest(e),ee=(e,t)=>"string"===typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},t):t,te=/^[a-z][a-z0-9+\-.]*:/,ne=async(e,t,n,i)=>{if(null!=e&&"#"!==e[0]&&!te.test(e)){const r=document.querySelector("ion-router");if(r)return null!=t&&t.preventDefault(),r.push(e,n,i)}return!1},ie="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",re="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
let se;const oe=()=>{if("undefined"===typeof window)return new Map;if(!se){const e=window;e.Ionicons=e.Ionicons||{},se=e.Ionicons.map=e.Ionicons.map||new Map}return se},ae=e=>{let t=ue(e.src);if(t)return t;if(t=ce(e.name,e.icon,e.mode,e.ios,e.md),t)return le(t,e);if(e.icon){if(t=ue(e.icon),t)return t;if(t=ue(e.icon[e.mode]),t)return t}return null},le=(e,t)=>{const n=oe().get(e);if(n)return n;try{return(0,s.OX)(`svg/${e}.svg`)}catch(i){console.warn(`[Ionicons Warning]: Could not load icon with name "${e}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`,t)}},ce=(e,t,n,i,r)=>{if(n="ios"===(n&&fe(n))?"ios":"md",i&&"ios"===n?e=fe(i):r&&"md"===n?e=fe(r):(e||!t||he(t)||(e=t),de(e)&&(e=fe(e))),!de(e)||""===e.trim())return null;const s=e.replace(/[a-z]|-|\d/gi,"");return""!==s?null:e},ue=e=>de(e)&&(e=e.trim(),he(e))?e:null,he=e=>e.length>0&&/(\/|\.)/.test(e),de=e=>"string"===typeof e,fe=e=>e.toLowerCase(),pe=(e,t=[])=>{const n={};return t.forEach(t=>{if(e.hasAttribute(t)){const i=e.getAttribute(t);null!==i&&(n[t]=e.getAttribute(t)),e.removeAttribute(t)}}),n},ge=e=>e&&""!==e.dir?"rtl"===e.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase()),me=e=>{const t=document.createElement("div");t.innerHTML=e;for(let i=t.childNodes.length-1;i>=0;i--)"svg"!==t.childNodes[i].nodeName.toLowerCase()&&t.removeChild(t.childNodes[i]);const n=t.firstElementChild;if(n&&"svg"===n.nodeName.toLowerCase()){const e=n.getAttribute("class")||"";if(n.setAttribute("class",(e+" s-ion-icon").trim()),ve(n))return t.innerHTML}return""},ve=e=>{if(1===e.nodeType){if("script"===e.nodeName.toLowerCase())return!1;for(let t=0;t<e.attributes.length;t++){const n=e.attributes[t].name;if(de(n)&&0===n.toLowerCase().indexOf("on"))return!1}for(let t=0;t<e.childNodes.length;t++)if(!ve(e.childNodes[t]))return!1}return!0},ye=e=>e.startsWith("data:image/svg+xml"),be=e=>-1!==e.indexOf(";utf8,"),we=new Map,_e=new Map;let Ee;const Te=(e,t)=>{let n=_e.get(e);if(!n){if("undefined"===typeof fetch||"undefined"===typeof document)return we.set(e,""),Promise.resolve();if(ye(e)&&be(e)){Ee||(Ee=new DOMParser);const t=Ee.parseFromString(e,"text/html"),n=t.querySelector("svg");return n&&we.set(e,n.outerHTML),Promise.resolve()}n=fetch(e).then(n=>{if(n.ok)return n.text().then(n=>{n&&!1!==t&&(n=me(n)),we.set(e,n||"")});we.set(e,"")}),_e.set(e,n)}return n},Se=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}",Ie=(s.wt,()=>s.L2.isBrowser&&"undefined"!==typeof document&&document.documentElement.getAttribute("mode")||"md"),$e=e=>e?{"ion-color":!0,[`ion-color-${e}`]:!0}:null;
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ke=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}",Ce=(0,s.w$)(class extends s.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.type="bounded"}async addRipple(e,t){return new Promise(n=>{(0,s.gv)(()=>{const i=this.el.getBoundingClientRect(),r=i.width,o=i.height,a=Math.sqrt(r*r+o*o),l=Math.max(o,r),c=this.unbounded?l:a+Ae,u=Math.floor(l*Ne),h=c/u;let d=e-i.left,f=t-i.top;this.unbounded&&(d=.5*r,f=.5*o);const p=d-.5*u,g=f-.5*u,m=.5*r-d,v=.5*o-f;(0,s.bN)(()=>{const e=document.createElement("div");e.classList.add("ripple-effect");const t=e.style;t.top=g+"px",t.left=p+"px",t.width=t.height=u+"px",t.setProperty("--final-scale",`${h}`),t.setProperty("--translate-end",`${m}px, ${v}px`);const i=this.el.shadowRoot||this.el;i.appendChild(e),setTimeout(()=>{n(()=>{xe(e)})},325)})})})}get unbounded(){return"unbounded"===this.type}render(){const e=M(this);return(0,s.h)(s.xr,{key:"ae9d3b1ed6773a9b9bb2267129f7e9af23b6c9fc",role:"presentation",class:{[e]:!0,unbounded:this.unbounded}})}get el(){return this}static get style(){return ke}},[1,"ion-ripple-effect",{type:[1],addRipple:[64]}]),xe=e=>{e.classList.add("fade-out"),setTimeout(()=>{e.remove()},200)},Ae=10,Ne=.5;function Oe(){if("undefined"===typeof customElements)return;const e=["ion-ripple-effect"];e.forEach(e=>{switch(e){case"ion-ripple-effect":customElements.get(e)||customElements.define(e,Ce);break}})}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Re=':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-hover:transparent;--background-hover-opacity:1;--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #0054e9);--icon-margin-end:1px;--icon-margin-start:-4px;--icon-font-size:1.6em;--min-height:32px;font-size:clamp(17px, 1.0625rem, 21.998px)}.button-native{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}:host(.ion-activated) .button-native{opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',Pe=':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--border-radius:4px;--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:0.04;--color:currentColor;--icon-margin-end:0;--icon-margin-start:0;--icon-font-size:1.5rem;--icon-font-weight:normal;--min-height:32px;--min-width:44px;--padding-start:12px;--padding-end:12px;font-size:0.875rem;font-weight:500;text-transform:uppercase}:host(.back-button-has-icon-only){--border-radius:50%;min-width:48px;min-height:48px;aspect-ratio:1/1}.button-native{-webkit-box-shadow:none;box-shadow:none}.button-text{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0}ion-icon{line-height:0.67;text-align:start}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}';s.wt;const Le=()=>{let e;const t=async()=>{const t=e;let n;return e=new Promise(e=>n=e),void 0!==t&&await t,n};return{lock:t}},De=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}";s.wt;n(220);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const Me=':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}::slotted(ion-badge){-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:1px;padding-bottom:1px;top:4px;height:auto;font-size:12px;line-height:16px}::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}::slotted(ion-icon){margin-top:2px;margin-bottom:2px;font-size:24px}::slotted(ion-icon::before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px;font-weight:500}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:calc(50% + 12px)}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:10px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:calc(50% + 35px)}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:calc(50% + 30px)}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){font-size:30px}',Ve=':host{--ripple-color:var(--color-selected);--background-focused-opacity:1;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;outline:none;background:var(--background);color:var(--color)}.button-native{border-radius:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;border:0;outline:none;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;height:100%;z-index:1}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none !important}:host(.tab-disabled){pointer-events:none;opacity:0.4}::slotted(ion-label),::slotted(ion-icon){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:12px;--padding-bottom:0;--padding-start:12px;max-width:168px;font-size:12px;font-weight:normal;letter-spacing:0.03em}::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;text-transform:none}::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;-webkit-transform-origin:center center;transform-origin:center center;font-size:22px}:host-context([dir=rtl]) ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] ::slotted(ion-icon){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){::slotted(ion-icon):dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}::slotted(ion-badge){border-radius:8px;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;padding-top:3px;padding-bottom:2px;top:8px;min-width:12px;font-size:8px;font-weight:normal}::slotted(ion-badge){inset-inline-start:calc(50% + 6px)}::slotted(ion-badge:empty){display:block;min-width:8px;height:8px}:host(.tab-layout-icon-top) ::slotted(ion-icon){margin-top:6px;margin-bottom:2px}:host(.tab-layout-icon-top) ::slotted(ion-label){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){top:8px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){inset-inline-start:70%}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:6px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:6px;margin-bottom:0}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){top:16px}:host(.tab-layout-icon-start) ::slotted(ion-badge),:host(.tab-layout-icon-end) ::slotted(ion-badge){inset-inline-start:80%}:host(.tab-layout-icon-start) ::slotted(ion-icon){-webkit-margin-end:6px;margin-inline-end:6px}:host(.tab-layout-icon-end) ::slotted(ion-icon){-webkit-margin-start:6px;margin-inline-start:6px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-icon-hide) ::slotted(ion-badge),:host(.tab-has-label-only) ::slotted(ion-badge){inset-inline-start:70%}:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-has-label-only) ::slotted(ion-label){margin-top:0;margin-bottom:0}:host(.tab-layout-label-hide) ::slotted(ion-badge),:host(.tab-has-icon-only) ::slotted(ion-badge){top:16px}:host(.tab-layout-label-hide) ::slotted(ion-icon),:host(.tab-has-icon-only) ::slotted(ion-icon){margin-top:0;margin-bottom:0;font-size:24px}',je=(0,s.w$)(class extends s.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.ionTabButtonClick=(0,s.lh)(this,"ionTabButtonClick",7),this.inheritedAttributes={},this.disabled=!1,this.selected=!1,this.onKeyUp=e=>{"Enter"!==e.key&&" "!==e.key||this.selectTab(e)},this.onClick=e=>{this.selectTab(e)}}onTabBarChanged(e){const t=e.target,n=this.el.parentElement;(e.composedPath().includes(n)||(null===t||void 0===t?void 0:t.contains(this.el)))&&(this.selected=this.tab===e.detail.tab)}componentWillLoad(){this.inheritedAttributes=Object.assign({},(0,h.d)(this.el,["aria-label"])),void 0===this.layout&&(this.layout=d.c.get("tabButtonLayout","icon-top"))}selectTab(e){void 0!==this.tab&&(this.disabled||this.ionTabButtonClick.emit({tab:this.tab,href:this.href,selected:this.selected}),e.preventDefault())}get hasLabel(){return!!this.el.querySelector("ion-label")}get hasIcon(){return!!this.el.querySelector("ion-icon")}render(){const{disabled:e,hasIcon:t,hasLabel:n,href:i,rel:r,target:o,layout:a,selected:l,tab:c,inheritedAttributes:u}=this,h=M(this),d={download:this.download,href:i,rel:r,target:o};return(0,s.h)(s.xr,{key:"ce9d29ced0c781d6b2fa62cd5feb801c11fc42e8",onClick:this.onClick,onKeyup:this.onKeyUp,id:void 0!==c?`tab-button-${c}`:null,class:{[h]:!0,"tab-selected":l,"tab-disabled":e,"tab-has-label":n,"tab-has-icon":t,"tab-has-label-only":n&&!t,"tab-has-icon-only":t&&!n,[`tab-layout-${a}`]:!0,"ion-activatable":!0,"ion-selectable":!0,"ion-focusable":!0}},(0,s.h)("a",Object.assign({key:"01cb0ed2e77c5c1a8abd48da1bb07ac1b305d0b6"},d,{class:"button-native",part:"native",role:"tab","aria-selected":l?"true":null,"aria-disabled":e?"true":null,tabindex:e?"-1":void 0},u),(0,s.h)("span",{key:"d0240c05f42217cfb186b86ff8a0c9cd70b9c8df",class:"button-inner"},(0,s.h)("slot",{key:"0a20b84925037dbaa8bb4a495b813d3f7c2e58ac"})),"md"===h&&(0,s.h)("ion-ripple-effect",{key:"4c92c27178cdac89d69cffef8d2c39c3644914e8",type:"unbounded"})))}get el(){return this}static get style(){return{ios:Me,md:Ve}}},[33,"ion-tab-button",{disabled:[4],download:[1],href:[1],rel:[1],layout:[1025],selected:[1028],tab:[1],target:[1]},[[8,"ionTabBarChanged","onTabBarChanged"]]]);function Fe(){if("undefined"===typeof customElements)return;const e=["ion-tab-button","ion-ripple-effect"];e.forEach(e=>{switch(e){case"ion-tab-button":customElements.get(e)||customElements.define(e,je);break;case"ion-ripple-effect":customElements.get(e)||Oe();break}})}const Ue=Fe,Be=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}",ze=(s.wt,(e,t)=>{const n="string"===typeof t?e.find(e=>e.tab===t):t;return n||(0,d.a)(`[ion-tabs] - Tab with id: "${n}" does not exist`),n});var He=n(725),We=n(496);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const qe=e=>{if(void 0===He.d||e===We.a.None||void 0===e)return null;const t=He.d.querySelector("ion-app");return null!==t&&void 0!==t?t:He.d.body},Ke=e=>{const t=qe(e);return null===t?0:t.clientHeight},Ge=async e=>{let t,n,i,r;const s=async()=>{const e=await We.K.getResizeMode(),s=void 0===e?void 0:e.mode;t=()=>{void 0===r&&(r=Ke(s)),i=!0,o(i,s)},n=()=>{i=!1,o(i,s)},null===He.w||void 0===He.w||He.w.addEventListener("keyboardWillShow",t),null===He.w||void 0===He.w||He.w.addEventListener("keyboardWillHide",n)},o=(t,n)=>{e&&e(t,a(n))},a=e=>{if(0===r||r===Ke(e))return;const t=qe(e);return null!==t?new Promise(e=>{const n=()=>{t.clientHeight===r&&(i.disconnect(),e())},i=new ResizeObserver(n);i.observe(t)}):void 0},l=()=>{null===He.w||void 0===He.w||He.w.removeEventListener("keyboardWillShow",t),null===He.w||void 0===He.w||He.w.removeEventListener("keyboardWillHide",n),t=n=void 0},c=()=>i;return await s(),{init:s,destroy:l,isKeyboardVisible:c}},Xe=":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-color-step-50, var(--ion-background-color-step-50, #f7f7f7)));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.2)))));--color:var(--ion-tab-bar-color, var(--ion-color-step-600, var(--ion-text-color-step-400, #666666)));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #0054e9));height:50px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb), 0.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.6)}}",Qe=":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-right:var(--ion-safe-area-right);padding-bottom:var(--ion-safe-area-bottom, 0);padding-left:var(--ion-safe-area-left);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb), 0.7)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-top:var(--ion-safe-area-top, 0);padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none !important}:host{--background:var(--ion-tab-bar-background, var(--ion-background-color, #fff));--background-focused:var(--ion-tab-bar-background-focused, #e0e0e0);--border:1px solid var(--ion-tab-bar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.07)))));--color:var(--ion-tab-bar-color, var(--ion-color-step-650, var(--ion-text-color-step-350, #595959)));--color-selected:var(--ion-tab-bar-color-selected, var(--ion-color-primary, #0054e9));height:56px}",Je=(0,s.w$)(class extends s.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.ionTabBarChanged=(0,s.lh)(this,"ionTabBarChanged",7),this.ionTabBarLoaded=(0,s.lh)(this,"ionTabBarLoaded",7),this.keyboardCtrl=null,this.keyboardVisible=!1,this.translucent=!1}selectedTabChanged(){void 0!==this.selectedTab&&this.ionTabBarChanged.emit({tab:this.selectedTab})}componentWillLoad(){this.selectedTabChanged()}async connectedCallback(){this.keyboardCtrl=await Ge(async(e,t)=>{!1===e&&void 0!==t&&await t,this.keyboardVisible=e})}disconnectedCallback(){this.keyboardCtrl&&this.keyboardCtrl.destroy()}componentDidLoad(){this.ionTabBarLoaded.emit()}render(){const{color:e,translucent:t,keyboardVisible:n}=this,i=M(this),r=n&&"top"!==this.el.getAttribute("slot");return(0,s.h)(s.xr,{key:"275dc6c1b30f6928ce9039b2f445208bb3500ddc",role:"tablist","aria-hidden":r?"true":null,class:ee(e,{[i]:!0,"tab-bar-translucent":t,"tab-bar-hidden":r})},(0,s.h)("slot",{key:"ceac20128d75c6a4a0f445f2df8deb8cc71fc4da"}))}get el(){return this}static get watchers(){return{selectedTab:["selectedTabChanged"]}}static get style(){return{ios:Xe,md:Qe}}},[33,"ion-tab-bar",{color:[513],selectedTab:[1,"selected-tab"],translucent:[4],keyboardVisible:[32]},void 0,{selectedTab:["selectedTabChanged"]}]);function Ye(){if("undefined"===typeof customElements)return;const e=["ion-tab-bar"];e.forEach(e=>{switch(e){case"ion-tab-bar":customElements.get(e)||customElements.define(e,Je);break}})}const Ze=Ye;var et=n(789);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const tt="html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}",nt=(s.wt,()=>{const e=g(window,"ios")&&g(window,"mobile");if(e)return!0;const t=g(window,"android")&&g(window,"mobileweb");return!!t}),it=e=>{"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,32)};let rt;const st=()=>{if("undefined"===typeof window)return new Map;if(!rt){const e=window;e.Ionicons=e.Ionicons||{},rt=e.Ionicons.map=e.Ionicons.map||new Map}return rt},ot=e=>{let t=ct(e.src);if(t)return t;if(t=lt(e.name,e.icon,e.mode,e.ios,e.md),t)return at(t,e);if(e.icon){if(t=ct(e.icon),t)return t;if(t=ct(e.icon[e.mode]),t)return t}return null},at=(e,t)=>{const n=st().get(e);if(n)return n;try{return(0,s.OX)(`svg/${e}.svg`)}catch(i){console.warn(`[Ionicons Warning]: Could not load icon with name "${e}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`,t)}},lt=(e,t,n,i,r)=>{if(n="ios"===(n&&dt(n))?"ios":"md",i&&"ios"===n?e=dt(i):r&&"md"===n?e=dt(r):(e||!t||ut(t)||(e=t),ht(e)&&(e=dt(e))),!ht(e)||""===e.trim())return null;const s=e.replace(/[a-z]|-|\d/gi,"");return""!==s?null:e},ct=e=>ht(e)&&(e=e.trim(),ut(e))?e:null,ut=e=>e.length>0&&/(\/|\.)/.test(e),ht=e=>"string"===typeof e,dt=e=>e.toLowerCase(),ft=(e,t=[])=>{const n={};return t.forEach(t=>{if(e.hasAttribute(t)){const i=e.getAttribute(t);null!==i&&(n[t]=e.getAttribute(t)),e.removeAttribute(t)}}),n},pt=e=>e&&""!==e.dir?"rtl"===e.dir.toLowerCase():"rtl"===(null===document||void 0===document?void 0:document.dir.toLowerCase()),gt=e=>{const t=document.createElement("div");t.innerHTML=e;for(let i=t.childNodes.length-1;i>=0;i--)"svg"!==t.childNodes[i].nodeName.toLowerCase()&&t.removeChild(t.childNodes[i]);const n=t.firstElementChild;if(n&&"svg"===n.nodeName.toLowerCase()){const e=n.getAttribute("class")||"";if(n.setAttribute("class",(e+" s-ion-icon").trim()),mt(n))return t.innerHTML}return""},mt=e=>{if(1===e.nodeType){if("script"===e.nodeName.toLowerCase())return!1;for(let t=0;t<e.attributes.length;t++){const n=e.attributes[t].name;if(ht(n)&&0===n.toLowerCase().indexOf("on"))return!1}for(let t=0;t<e.childNodes.length;t++)if(!mt(e.childNodes[t]))return!1}return!0},vt=e=>e.startsWith("data:image/svg+xml"),yt=e=>-1!==e.indexOf(";utf8,"),bt=new Map,wt=new Map;let _t;const Et=(e,t)=>{let n=wt.get(e);if(!n){if("undefined"===typeof fetch||"undefined"===typeof document)return bt.set(e,""),Promise.resolve();if(vt(e)&&yt(e)){_t||(_t=new DOMParser);const t=_t.parseFromString(e,"text/html"),n=t.querySelector("svg");return n&&bt.set(e,n.outerHTML),Promise.resolve()}n=fetch(e).then(n=>{if(n.ok)return n.text().then(n=>{n&&!1!==t&&(n=gt(n)),bt.set(e,n||"")});bt.set(e,"")}),wt.set(e,n)}return n},Tt=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}",St=(0,s.w$)(class extends s.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.iconName=null,this.inheritedAttributes={},this.didLoadIcon=!1,this.svgContent=void 0,this.isVisible=!1,this.mode=It(),this.color=void 0,this.ios=void 0,this.md=void 0,this.flipRtl=void 0,this.name=void 0,this.src=void 0,this.icon=void 0,this.size=void 0,this.lazy=!1,this.sanitize=!0}componentWillLoad(){this.inheritedAttributes=ft(this.el,["aria-label"])}connectedCallback(){this.waitUntilVisible(this.el,"50px",()=>{this.isVisible=!0,this.loadIcon()})}componentDidLoad(){this.didLoadIcon||this.loadIcon()}disconnectedCallback(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(e,t,n){if(s.L2.isBrowser&&this.lazy&&"undefined"!==typeof window&&window.IntersectionObserver){const i=this.io=new window.IntersectionObserver(e=>{e[0].isIntersecting&&(i.disconnect(),this.io=void 0,n())},{rootMargin:t});i.observe(e)}else n()}loadIcon(){if(s.L2.isBrowser&&this.isVisible){const e=ot(this);e&&(bt.has(e)?this.svgContent=bt.get(e):Et(e,this.sanitize).then(()=>this.svgContent=bt.get(e)),this.didLoadIcon=!0)}this.iconName=lt(this.name,this.icon,this.mode,this.ios,this.md)}render(){const{flipRtl:e,iconName:t,inheritedAttributes:n,el:i}=this,r=this.mode||"md",o=!!t&&((t.includes("arrow")||t.includes("chevron"))&&!1!==e),a=e||o;return(0,s.h)(s.xr,Object.assign({role:"img",class:Object.assign(Object.assign({[r]:!0},$t(this.color)),{[`icon-${this.size}`]:!!this.size,"flip-rtl":a,"icon-rtl":a&&pt(i)})},n),s.L2.isBrowser&&this.svgContent?(0,s.h)("div",{class:"icon-inner",innerHTML:this.svgContent}):(0,s.h)("div",{class:"icon-inner"}))}static get assetsDirs(){return["svg"]}get el(){return this}static get watchers(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"],ios:["loadIcon"],md:["loadIcon"]}}static get style(){return Tt}},[1,"ion-icon",{mode:[1025],color:[1],ios:[1],md:[1],flipRtl:[4,"flip-rtl"],name:[513],src:[1],icon:[8],size:[1],lazy:[4],sanitize:[4],svgContent:[32],isVisible:[32]}]),It=()=>s.L2.isBrowser&&"undefined"!==typeof document&&document.documentElement.getAttribute("mode")||"md",$t=e=>e?{"ion-color":!0,[`ion-color-${e}`]:!0}:null;function kt(){if("undefined"===typeof customElements)return;const e=["ion-icon"];e.forEach(e=>{switch(e){case"ion-icon":customElements.get(e)||customElements.define(e,St);break}})}const Ct=kt;Symbol();var xt;(function(e){e["WillEnter"]="onIonViewWillEnter",e["DidEnter"]="onIonViewDidEnter",e["WillLeave"]="onIonViewWillLeave",e["DidLeave"]="onIonViewDidLeave"})(xt||(xt={}));f.L,xt.WillEnter,f.a,xt.DidEnter,f.b,xt.WillLeave,f.c,xt.DidLeave;const At=()=>{if("undefined"!==typeof window){const e=window.Ionic;if(e&&e.config)return e.config}return null},Nt=(e,t,n)=>{if(n){const i=n,r=i.proxy[e]||(i.proxy[e]=[]);i.exposed&&(i.exposed[e]=r);const s=(...e)=>{if(!i.isUnmounted)return e?t(...e):t()};return r.push(s),s}console.warn("[@ionic/vue]: Ionic Lifecycle Hooks can only be used during execution of setup().")},Ot=e=>(t,n=(0,i.nI)())=>Nt(e,t,n),Rt=(Ot(xt.WillEnter),Ot(xt.DidEnter),Ot(xt.WillLeave),Ot(xt.DidLeave),{async install(e,t={}){"undefined"!==typeof document&&document.documentElement.classList.add("ion-ce"),V(t)}}),Pt=(Symbol(0),Boolean,Boolean,e=>{var t;return"IonTabButton"===(null===(t=e.type)||void 0===t?void 0:t.name)}),Lt=e=>{let t=[];return e.forEach(e=>{if(Pt(e))t.push(e);else if(Array.isArray(e.children)&&e.children.length>1){const n=Lt(e.children);t=[...t,...n]}}),t},Dt=((0,i.pM)({name:"IonTabBar",data(){return{tabState:{activeTab:void 0,tabs:{},hasRouterOutlet:!1},tabVnodes:[],_tabsWillChange:{type:Function,default:()=>{}},_tabsDidChange:{type:Function,default:()=>{}}}},updated(){this.setupTabState((0,i.WQ)("navManager",null))},methods:{setupTabState(e){const t=this.$data.tabState.hasRouterOutlet,n=this.$data.tabState,r=(0,i.nI)(),s=this.$data.tabVnodes=Lt(r.subTree.children||[]);s.forEach(e=>{n.tabs[e.props.tab]={originalHref:e.props.href,currentHref:e.props.href,ref:e},e.component.props._getTabState=()=>n,t||(e.component.props._onClick=e=>{this.handleIonTabButtonClick(e)})}),this.checkActiveTab(e)},checkActiveTab(e){const t=this.$data.tabState.hasRouterOutlet,n=null===e||void 0===e?void 0:e.getCurrentRouteInfo(),i=this.$data.tabVnodes,{tabs:r,activeTab:s}=this.$data.tabState,o=Object.keys(r);let a=o.find(e=>{const t=r[e].originalHref;return null===n||void 0===n?void 0:n.pathname.startsWith(t)});if(a||t||(a=o[0]),i.forEach(e=>{const t=r[e.props.tab];t&&t.originalHref===e.props.href||(r[e.props.tab]={originalHref:e.props.href,currentHref:e.props.href,ref:e})}),a&&s){const e=this.$data.tabState.tabs[s].currentHref;if(a!==s||e!==(null===n||void 0===n?void 0:n.pathname)){const e=(null===n||void 0===n?void 0:n.search)?`?${n.search}`:"";r[a]=Object.assign(Object.assign({},r[a]),{currentHref:(null===n||void 0===n?void 0:n.pathname)+e})}"pop"===(null===n||void 0===n?void 0:n.routerAction)&&a!==s&&(r[s]=Object.assign(Object.assign({},r[s]),{currentHref:r[s].originalHref}))}this.tabSwitch(a,e)},handleIonTabButtonClick(e){const t=e.detail.tab;this.tabSwitch(t)},tabSwitch(e,t){const n=this.$data.tabState.hasRouterOutlet,i=this.$data.tabVnodes,{activeTab:r}=this.$data.tabState,s=this.$data.tabState,o=i.find(t=>{var n;return Pt(t)&&(null===(n=t.props)||void 0===n?void 0:n.tab)===e}),a=this.$refs.ionTabBar,l=e!==r;a&&(o?(l&&this.$data._tabsWillChange(e),n&&null!==t&&t.handleSetCurrentTab(e),a.selectedTab=s.activeTab=e,l&&this.$data._tabsDidChange(e)):a.selectedTab=s.activeTab="")}},mounted(){const e=(0,i.WQ)("navManager",null),t=(0,i.WQ)("tabBarData");this.$data.tabState.hasRouterOutlet=t.value.hasRouterOutlet,this.$data._tabsWillChange=t.value._tabsWillChange,this.$data._tabsDidChange=t.value._tabsDidChange,this.setupTabState(e),null===e||void 0===e||e.registerHistoryChangeListener(()=>this.checkActiveTab(e))},setup(e,{slots:t}){return Ze(),()=>(0,i.h)("ion-tab-bar",{ref:"ionTabBar"},t.default&&t.default())}}),(0,r.IJ)([])),Mt=e=>{Dt.value=[...Dt.value,e]},Vt=e=>{Dt.value=Dt.value.filter(t=>t!==e)},jt=(e=Mt,t=Vt)=>{const n=new WeakMap,r=(t,r,s={},o)=>{const a=document.createElement("div");o&&a.classList.add(...o),t.appendChild(a);const l=(0,i.h)(i.Im,{to:a},(0,i.h)(r,Object.assign({},s)));return n.set(a,l),e(l),Promise.resolve(a)},s=(e,i)=>{const r=n.get(i);return r&&t(r),Promise.resolve()};return{attachViewToDom:r,removeViewFromDom:s}};Boolean,Boolean,Boolean,Boolean,Symbol()},953:(e,t,n)=>{n.d(t,{C4:()=>S,EW:()=>Me,Gc:()=>ve,IG:()=>Ie,IJ:()=>Ae,KR:()=>xe,Kh:()=>me,Pr:()=>Le,R1:()=>Re,X2:()=>c,bl:()=>I,hV:()=>ze,hZ:()=>D,i9:()=>Ce,ju:()=>Te,u4:()=>L,ux:()=>Se,wB:()=>Be,yC:()=>o});var i=n(33);
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let r,s;class o{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=r,!e&&r&&(this.index=(r.scopes||(r.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=r;try{return r=this,e()}finally{r=t}}else 0}on(){1===++this._on&&(this.prevScope=r,r=this)}off(){this._on>0&&0===--this._on&&(r=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){let t,n;for(this._active=!1,t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}}function a(){return r}const l=new WeakSet;class c{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,r&&r.active&&r.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,l.has(this)&&(l.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||f(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,$(this),m(this);const e=s,t=E;s=this,E=!0;try{return this.fn()}finally{0,v(this),s=e,E=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)w(e);this.deps=this.depsTail=void 0,$(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?l.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){y(this)&&this.run()}get dirty(){return y(this)}}let u,h,d=0;function f(e,t=!1){if(e.flags|=8,t)return e.next=h,void(h=e);e.next=u,u=e}function p(){d++}function g(){if(--d>0)return;if(h){let e=h;h=void 0;while(e){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;while(u){let n=u;u=void 0;while(n){const i=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(t){e||(e=t)}n=i}}if(e)throw e}function m(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function v(e){let t,n=e.depsTail,i=n;while(i){const e=i.prevDep;-1===i.version?(i===n&&(n=e),w(i),_(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=e}e.deps=t,e.depsTail=n}function y(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(b(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function b(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===k)return;if(e.globalVersion=k,!e.isSSR&&128&e.flags&&(!e.deps&&!e._dirty||!y(e)))return;e.flags|=2;const t=e.dep,n=s,r=E;s=e,E=!0;try{m(e);const n=e.fn(e._value);(0===t.version||(0,i.$H)(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(o){throw t.version++,o}finally{s=n,E=r,v(e),e.flags&=-3}}function w(e,t=!1){const{dep:n,prevSub:i,nextSub:r}=e;if(i&&(i.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)w(e,!0)}t||--n.sc||!n.map||n.map.delete(n.key)}function _(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let E=!0;const T=[];function S(){T.push(E),E=!1}function I(){const e=T.pop();E=void 0===e||e}function $(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=s;s=void 0;try{t()}finally{s=e}}}let k=0;class C{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class x{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!s||!E||s===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==s)t=this.activeLink=new C(s,this),s.deps?(t.prevDep=s.depsTail,s.depsTail.nextDep=t,s.depsTail=t):s.deps=s.depsTail=t,A(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=s.depsTail,t.nextDep=void 0,s.depsTail.nextDep=t,s.depsTail=t,s.deps===t&&(s.deps=e)}return t}trigger(e){this.version++,k++,this.notify(e)}notify(e){p();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{g()}}}function A(e){if(e.dep.sc++,4&e.sub.flags){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)A(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const N=new WeakMap,O=Symbol(""),R=Symbol(""),P=Symbol("");function L(e,t,n){if(E&&s){let t=N.get(e);t||N.set(e,t=new Map);let i=t.get(n);i||(t.set(n,i=new x),i.map=t,i.key=n),i.track()}}function D(e,t,n,r,s,o){const a=N.get(e);if(!a)return void k++;const l=e=>{e&&e.trigger()};if(p(),"clear"===t)a.forEach(l);else{const s=(0,i.cy)(e),o=s&&(0,i.yI)(n);if(s&&"length"===n){const e=Number(r);a.forEach((t,n)=>{("length"===n||n===P||!(0,i.Bm)(n)&&n>=e)&&l(t)})}else switch((void 0!==n||a.has(void 0))&&l(a.get(n)),o&&l(a.get(P)),t){case"add":s?o&&l(a.get("length")):(l(a.get(O)),(0,i.CE)(e)&&l(a.get(R)));break;case"delete":s||(l(a.get(O)),(0,i.CE)(e)&&l(a.get(R)));break;case"set":(0,i.CE)(e)&&l(a.get(O));break}}g()}function M(e){const t=Se(e);return t===e?t:(L(t,"iterate",P),Ee(e)?t:t.map($e))}function V(e){return L(e=Se(e),"iterate",P),e}const j={__proto__:null,[Symbol.iterator](){return F(this,Symbol.iterator,$e)},concat(...e){return M(this).concat(...e.map(e=>(0,i.cy)(e)?M(e):e))},entries(){return F(this,"entries",e=>(e[1]=$e(e[1]),e))},every(e,t){return B(this,"every",e,t,void 0,arguments)},filter(e,t){return B(this,"filter",e,t,e=>e.map($e),arguments)},find(e,t){return B(this,"find",e,t,$e,arguments)},findIndex(e,t){return B(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return B(this,"findLast",e,t,$e,arguments)},findLastIndex(e,t){return B(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return B(this,"forEach",e,t,void 0,arguments)},includes(...e){return H(this,"includes",e)},indexOf(...e){return H(this,"indexOf",e)},join(e){return M(this).join(e)},lastIndexOf(...e){return H(this,"lastIndexOf",e)},map(e,t){return B(this,"map",e,t,void 0,arguments)},pop(){return W(this,"pop")},push(...e){return W(this,"push",e)},reduce(e,...t){return z(this,"reduce",e,t)},reduceRight(e,...t){return z(this,"reduceRight",e,t)},shift(){return W(this,"shift")},some(e,t){return B(this,"some",e,t,void 0,arguments)},splice(...e){return W(this,"splice",e)},toReversed(){return M(this).toReversed()},toSorted(e){return M(this).toSorted(e)},toSpliced(...e){return M(this).toSpliced(...e)},unshift(...e){return W(this,"unshift",e)},values(){return F(this,"values",$e)}};function F(e,t,n){const i=V(e),r=i[t]();return i===e||Ee(e)||(r._next=r.next,r.next=()=>{const e=r._next();return e.value&&(e.value=n(e.value)),e}),r}const U=Array.prototype;function B(e,t,n,i,r,s){const o=V(e),a=o!==e&&!Ee(e),l=o[t];if(l!==U[t]){const t=l.apply(e,s);return a?$e(t):t}let c=n;o!==e&&(a?c=function(t,i){return n.call(this,$e(t),i,e)}:n.length>2&&(c=function(t,i){return n.call(this,t,i,e)}));const u=l.call(o,c,i);return a&&r?r(u):u}function z(e,t,n,i){const r=V(e);let s=n;return r!==e&&(Ee(e)?n.length>3&&(s=function(t,i,r){return n.call(this,t,i,r,e)}):s=function(t,i,r){return n.call(this,t,$e(i),r,e)}),r[t](s,...i)}function H(e,t,n){const i=Se(e);L(i,"iterate",P);const r=i[t](...n);return-1!==r&&!1!==r||!Te(n[0])?r:(n[0]=Se(n[0]),i[t](...n))}function W(e,t,n=[]){S(),p();const i=Se(e)[t].apply(e,n);return g(),I(),i}const q=(0,i.pD)("__proto__,__v_isRef,__isVue"),K=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>"arguments"!==e&&"caller"!==e).map(e=>Symbol[e]).filter(i.Bm));function G(e){(0,i.Bm)(e)||(e=String(e));const t=Se(this);return L(t,"has",e),t.hasOwnProperty(e)}class X{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if("__v_skip"===t)return e["__v_skip"];const r=this._isReadonly,s=this._isShallow;if("__v_isReactive"===t)return!r;if("__v_isReadonly"===t)return r;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(r?s?fe:de:s?he:ue).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=(0,i.cy)(e);if(!r){let e;if(o&&(e=j[t]))return e;if("hasOwnProperty"===t)return G}const a=Reflect.get(e,t,Ce(e)?e:n);return((0,i.Bm)(t)?K.has(t):q(t))?a:(r||L(e,"get",t),s?a:Ce(a)?o&&(0,i.yI)(t)?a:a.value:(0,i.Gv)(a)?r?ye(a):me(a):a)}}class Q extends X{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const t=_e(s);if(Ee(n)||_e(n)||(s=Se(s),n=Se(n)),!(0,i.cy)(e)&&Ce(s)&&!Ce(n))return!t&&(s.value=n,!0)}const o=(0,i.cy)(e)&&(0,i.yI)(t)?Number(t)<e.length:(0,i.$3)(e,t),a=Reflect.set(e,t,n,Ce(e)?e:r);return e===Se(r)&&(o?(0,i.$H)(n,s)&&D(e,"set",t,n,s):D(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,i.$3)(e,t),r=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&D(e,"delete",t,void 0,r),s}has(e,t){const n=Reflect.has(e,t);return(0,i.Bm)(t)&&K.has(t)||L(e,"has",t),n}ownKeys(e){return L(e,"iterate",(0,i.cy)(e)?"length":O),Reflect.ownKeys(e)}}class J extends X{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Y=new Q,Z=new J,ee=new Q(!0),te=e=>e,ne=e=>Reflect.getPrototypeOf(e);function ie(e,t,n){return function(...r){const s=this["__v_raw"],o=Se(s),a=(0,i.CE)(o),l="entries"===e||e===Symbol.iterator&&a,c="keys"===e&&a,u=s[e](...r),h=n?te:t?ke:$e;return!t&&L(o,"iterate",c?R:O),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:l?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function re(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function se(e,t){const n={get(n){const r=this["__v_raw"],s=Se(r),o=Se(n);e||((0,i.$H)(n,o)&&L(s,"get",n),L(s,"get",o));const{has:a}=ne(s),l=t?te:e?ke:$e;return a.call(s,n)?l(r.get(n)):a.call(s,o)?l(r.get(o)):void(r!==s&&r.get(n))},get size(){const t=this["__v_raw"];return!e&&L(Se(t),"iterate",O),Reflect.get(t,"size",t)},has(t){const n=this["__v_raw"],r=Se(n),s=Se(t);return e||((0,i.$H)(t,s)&&L(r,"has",t),L(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)},forEach(n,i){const r=this,s=r["__v_raw"],o=Se(s),a=t?te:e?ke:$e;return!e&&L(o,"iterate",O),s.forEach((e,t)=>n.call(i,a(e),a(t),r))}};(0,i.X$)(n,e?{add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear")}:{add(e){t||Ee(e)||_e(e)||(e=Se(e));const n=Se(this),i=ne(n),r=i.has.call(n,e);return r||(n.add(e),D(n,"add",e,e)),this},set(e,n){t||Ee(n)||_e(n)||(n=Se(n));const r=Se(this),{has:s,get:o}=ne(r);let a=s.call(r,e);a||(e=Se(e),a=s.call(r,e));const l=o.call(r,e);return r.set(e,n),a?(0,i.$H)(n,l)&&D(r,"set",e,n,l):D(r,"add",e,n),this},delete(e){const t=Se(this),{has:n,get:i}=ne(t);let r=n.call(t,e);r||(e=Se(e),r=n.call(t,e));const s=i?i.call(t,e):void 0,o=t.delete(e);return r&&D(t,"delete",e,void 0,s),o},clear(){const e=Se(this),t=0!==e.size,n=void 0,i=e.clear();return t&&D(e,"clear",void 0,void 0,n),i}});const r=["keys","values","entries",Symbol.iterator];return r.forEach(i=>{n[i]=ie(i,e,t)}),n}function oe(e,t){const n=se(e,t);return(t,r,s)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get((0,i.$3)(n,r)&&r in t?n:t,r,s)}const ae={get:oe(!1,!1)},le={get:oe(!1,!0)},ce={get:oe(!0,!1)};const ue=new WeakMap,he=new WeakMap,de=new WeakMap,fe=new WeakMap;function pe(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ge(e){return e["__v_skip"]||!Object.isExtensible(e)?0:pe((0,i.Zf)(e))}function me(e){return _e(e)?e:be(e,!1,Y,ae,ue)}function ve(e){return be(e,!1,ee,le,he)}function ye(e){return be(e,!0,Z,ce,de)}function be(e,t,n,r,s){if(!(0,i.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=ge(e);if(0===o)return e;const a=s.get(e);if(a)return a;const l=new Proxy(e,2===o?r:n);return s.set(e,l),l}function we(e){return _e(e)?we(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function _e(e){return!(!e||!e["__v_isReadonly"])}function Ee(e){return!(!e||!e["__v_isShallow"])}function Te(e){return!!e&&!!e["__v_raw"]}function Se(e){const t=e&&e["__v_raw"];return t?Se(t):e}function Ie(e){return!(0,i.$3)(e,"__v_skip")&&Object.isExtensible(e)&&(0,i.yQ)(e,"__v_skip",!0),e}const $e=e=>(0,i.Gv)(e)?me(e):e,ke=e=>(0,i.Gv)(e)?ye(e):e;function Ce(e){return!!e&&!0===e["__v_isRef"]}function xe(e){return Ne(e,!1)}function Ae(e){return Ne(e,!0)}function Ne(e,t){return Ce(e)?e:new Oe(e,t)}class Oe{constructor(e,t){this.dep=new x,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=t?e:Se(e),this._value=t?e:$e(e),this["__v_isShallow"]=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this["__v_isShallow"]||Ee(e)||_e(e);e=n?e:Se(e),(0,i.$H)(e,t)&&(this._rawValue=e,this._value=n?e:$e(e),this.dep.trigger())}}function Re(e){return Ce(e)?e.value:e}const Pe={get:(e,t,n)=>"__v_raw"===t?e:Re(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return Ce(r)&&!Ce(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function Le(e){return we(e)?e:new Proxy(e,Pe)}class De{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new x(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=k-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!t,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||s===this))return f(this,!0),!0}get value(){const e=this.dep.track();return b(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Me(e,t,n=!1){let r,s;(0,i.Tn)(e)?r=e:(r=e.get,s=e.set);const o=new De(r,s,n);return o}const Ve={},je=new WeakMap;let Fe;function Ue(e,t=!1,n=Fe){if(n){let t=je.get(n);t||je.set(n,t=[]),t.push(e)}else 0}function Be(e,t,n=i.MZ){const{immediate:r,deep:s,once:o,scheduler:l,augmentJob:u,call:h}=n,d=e=>s?e:Ee(e)||!1===s||0===s?ze(e,1):ze(e);let f,p,g,m,v=!1,y=!1;if(Ce(e)?(p=()=>e.value,v=Ee(e)):we(e)?(p=()=>d(e),v=!0):(0,i.cy)(e)?(y=!0,v=e.some(e=>we(e)||Ee(e)),p=()=>e.map(e=>Ce(e)?e.value:we(e)?d(e):(0,i.Tn)(e)?h?h(e,2):e():void 0)):p=(0,i.Tn)(e)?t?h?()=>h(e,2):e:()=>{if(g){S();try{g()}finally{I()}}const t=Fe;Fe=f;try{return h?h(e,3,[m]):e(m)}finally{Fe=t}}:i.tE,t&&s){const e=p,t=!0===s?1/0:s;p=()=>ze(e(),t)}const b=a(),w=()=>{f.stop(),b&&b.active&&(0,i.TF)(b.effects,f)};if(o&&t){const e=t;t=(...t)=>{e(...t),w()}}let _=y?new Array(e.length).fill(Ve):Ve;const E=e=>{if(1&f.flags&&(f.dirty||e))if(t){const e=f.run();if(s||v||(y?e.some((e,t)=>(0,i.$H)(e,_[t])):(0,i.$H)(e,_))){g&&g();const n=Fe;Fe=f;try{const n=[e,_===Ve?void 0:y&&_[0]===Ve?[]:_,m];_=e,h?h(t,3,n):t(...n)}finally{Fe=n}}}else f.run()};return u&&u(E),f=new c(p),f.scheduler=l?()=>l(E,!1):E,m=e=>Ue(e,!1,f),g=f.onStop=()=>{const e=je.get(f);if(e){if(h)h(e,4);else for(const t of e)t();je.delete(f)}},t?r?E(!0):_=f.run():l?l(E.bind(null,!0),!0):f.run(),w.pause=f.pause.bind(f),w.resume=f.resume.bind(f),w.stop=w,w}function ze(e,t=1/0,n){if(t<=0||!(0,i.Gv)(e)||e["__v_skip"])return e;if(n=n||new Set,n.has(e))return e;if(n.add(e),t--,Ce(e))ze(e.value,t,n);else if((0,i.cy)(e))for(let i=0;i<e.length;i++)ze(e[i],t,n);else if((0,i.vM)(e)||(0,i.CE)(e))e.forEach(e=>{ze(e,t,n)});else if((0,i.Qd)(e)){for(const i in e)ze(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&ze(e[i],t,n)}return e}},993:(e,t,n)=>{n.d(t,{L2:()=>c,wt:()=>U,xr:()=>rt,lh:()=>wn,OX:()=>se,Wi:()=>vn,h:()=>nt,w$:()=>Ii,gv:()=>ie,iY:()=>mn,bN:()=>re});var i,r={allRenderFn:!1,element:!0,event:!0,hasRenderFn:!0,hostListener:!0,hostListenerTargetWindow:!0,hostListenerTargetDocument:!0,hostListenerTargetBody:!0,hostListenerTargetParent:!1,hostListenerTarget:!0,member:!0,method:!0,mode:!0,observeAttribute:!0,prop:!0,propMutable:!0,reflect:!0,scoped:!0,shadowDom:!0,slot:!0,cssAnnotations:!0,state:!0,style:!0,formAssociated:!1,svg:!0,updatable:!0,vdomAttribute:!0,vdomXlink:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomRef:!0,vdomPropOrAttr:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,watchCallback:!0,taskQueue:!0,hotModuleReplacement:!1,isDebug:!1,isDev:!1,isTesting:!1,hydrateServerSide:!1,hydrateClientSide:!1,lifecycleDOMEvents:!1,lazyLoad:!1,profile:!1,slotRelocation:!0,appendChildSlotFix:!1,cloneNodeFix:!1,hydratedAttribute:!1,hydratedClass:!0,scriptDataOpts:!1,scopedSlotTextContentFix:!1,shadowDomShim:!1,slotChildNodesFix:!1,invisiblePrehydration:!0,propBoolean:!0,propNumber:!0,propString:!0,constructableCSS:!0,devTools:!1,shadowDelegatesFocus:!0,initializeNextTick:!1,asyncLoading:!0,asyncQueue:!1,transformTagName:!1,attachStyles:!0,experimentalSlotFixes:!1},s="app",o="",a=Object.defineProperty,l=(e,t)=>{for(var n in t)a(e,n,{get:t[n],enumerable:!0})},c={isDev:!!r.isDev,isBrowser:!0,isServer:!1,isTesting:!!r.isTesting},u="http://www.w3.org/2000/svg",h="http://www.w3.org/1999/xhtml",d=(e=>(e["Undefined"]="undefined",e["Null"]="null",e["String"]="string",e["Number"]="number",e["SpecialNumber"]="number",e["Boolean"]="boolean",e["BigInt"]="bigint",e))(d||{}),f=(e=>(e["Array"]="array",e["Date"]="date",e["Map"]="map",e["Object"]="object",e["RegularExpression"]="regexp",e["Set"]="set",e["Channel"]="channel",e["Symbol"]="symbol",e))(f||{}),p="type",g="value",m="serialized:",v=(e,t)=>{var n;const i=t.$cmpMeta$,s=Object.entries(null!=(n=i.$members$)?n:{});s.map(([n,[i]])=>{if((r.state||r.prop)&&(31&i||32&i)){const i=e[n],r=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),n);Object.defineProperty(e,n,{get(){return r.get.call(this)},set(e){r.set.call(this,e)},configurable:!0,enumerable:!0}),e[n]=t.$instanceValues$.has(n)?t.$instanceValues$.get(n):i}})},y=e=>{if(e.__stencil__getHostRef)return e.__stencil__getHostRef()},b=(e,t)=>{const n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};r.isDev&&(n.$renderCount$=0),r.method&&r.lazyLoad&&(n.$onInstancePromise$=new Promise(e=>n.$onInstanceResolve$=e)),r.asyncLoading&&(n.$onReadyPromise$=new Promise(e=>n.$onReadyResolve$=e),e["s-p"]=[],e["s-rc"]=[]);const i=n;return e.__stencil__getHostRef=()=>i,!r.lazyLoad&&r.modernPropertyDecls&&(r.state||r.prop)&&v(e,n),i},w=(e,t)=>t in e,_=(e,t)=>(i||console.error)(e,t),E=r.isTesting?["STENCIL:"]:["%cstencil","color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"],T=(...e)=>console.error(...E,...e),S=(...e)=>console.warn(...E,...e),I=new Map,$=(e,t,i)=>{const s=e.$tagName$.replace(/-/g,"_"),o=e.$lazyBundleId$;if(r.isDev&&"string"!==typeof o)return void T(`Trying to lazily load component <${e.$tagName$}> with style mode "${t.$modeName$}", but it does not exist.`);if(!o)return;const a=!r.hotModuleReplacement&&I.get(o);return a?a[s]:n(140)(`./${o}.entry.js${r.hotModuleReplacement&&i?"?s-hmr="+i:""}`).then(e=>(r.hotModuleReplacement||I.set(o,e),e[s]),e=>{_(e,t.$hostElement$)})
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},k=new Map,C=[],x="r",A="o",N="s",O="t",R="c",P="s-id",L="sty-id",D="c-id",M="slot-fb{display:contents}slot-fb[hidden]{display:none}",V="http://www.w3.org/1999/xlink",j=["formAssociatedCallback","formResetCallback","formDisabledCallback","formStateRestoreCallback"],F="undefined"!==typeof window?window:{},U=F.HTMLElement||class{},B={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,i)=>e.addEventListener(t,n,i),rel:(e,t,n,i)=>e.removeEventListener(t,n,i),ce:(e,t)=>new CustomEvent(e,t)},z=r.shadowDom,H=(()=>{var e;let t=!1;try{null==(e=F.document)||e.addEventListener("e",null,Object.defineProperty({},"passive",{get(){t=!0}}))}catch(n){}return t})(),W=e=>Promise.resolve(e),q=!!r.constructableCSS&&(()=>{try{return new CSSStyleSheet,"function"===typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),K=0,G=!1,X=[],Q=[],J=[],Y=(e,t)=>n=>{e.push(n),G||(G=!0,t&&4&B.$flags$?ne(te):B.raf(te))},Z=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){_(t)}e.length=0},ee=(e,t)=>{let n=0,i=0;while(n<e.length&&(i=performance.now())<t)try{e[n++](i)}catch(r){_(r)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},te=()=>{if(r.asyncQueue&&K++,Z(X),r.asyncQueue){const e=2===(6&B.$flags$)?performance.now()+14*Math.ceil(.1*K):1/0;ee(Q,e),ee(J,e),Q.length>0&&(J.push(...Q),Q.length=0),(G=X.length+Q.length+J.length>0)?B.raf(te):K=0}else Z(Q),(G=X.length>0)&&B.raf(te)},ne=e=>W().then(e),ie=Y(X,!1),re=Y(Q,!0),se=e=>{const t=new URL(e,B.$resourcesUrl$);return t.origin!==F.location.origin?t.href:t.pathname},oe=e=>null!=e&&void 0!==e,ae=e=>(e=typeof e,"object"===e||"function"===e);function le(e){var t,n,i;return null!=(i=null==(n=null==(t=e.head)?void 0:t.querySelector('meta[name="csp-nonce"]'))?void 0:n.getAttribute("content"))?i:void 0}var ce=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),ue=class e{static fromLocalValue(t){const n=t[p],i=g in t?t[g]:void 0;switch(n){case"string":return i;case"boolean":return i;case"bigint":return BigInt(i);case"undefined":return;case"null":return null;case"number":return"NaN"===i?NaN:"-0"===i?-0:"Infinity"===i?1/0:"-Infinity"===i?-1/0:i;case"array":return i.map(t=>e.fromLocalValue(t));case"date":return new Date(i);case"map":const t=new Map;for(const[n,l]of i){const i="object"===typeof n&&null!==n?e.fromLocalValue(n):n,r=e.fromLocalValue(l);t.set(i,r)}return t;case"object":const r={};for(const[n,l]of i)r[n]=e.fromLocalValue(l);return r;case"regexp":const{pattern:s,flags:o}=i;return new RegExp(s,o);case"set":const a=new Set;for(const n of i)a.add(e.fromLocalValue(n));return a;case"symbol":return Symbol(i);default:throw new Error(`Unsupported type: ${n}`)}}static fromLocalValueArray(t){return t.map(t=>e.fromLocalValue(t))}static isLocalValueObject(e){if("object"!==typeof e||null===e)return!1;if(!e.hasOwnProperty(p))return!1;const t=e[p],n=Object.values({...d,...f}).includes(t);return!!n&&("null"===t||"undefined"===t||e.hasOwnProperty(g))}},he={};l(he,{err:()=>fe,map:()=>pe,ok:()=>de,unwrap:()=>ge,unwrapErr:()=>me});var de=e=>({isOk:!0,isErr:!1,value:e}),fe=e=>({isOk:!1,isErr:!0,value:e});function pe(e,t){if(e.isOk){const n=t(e.value);return n instanceof Promise?n.then(e=>de(e)):de(n)}if(e.isErr){const t=e.value;return fe(t)}throw"should never get here"}var ge=e=>{if(e.isOk)return e.value;throw e.value},me=e=>{if(e.isErr)return e.value;throw e.value};function ve(e){return"string"===typeof e&&e.startsWith(m)?ue.fromLocalValue(JSON.parse(atob(e.slice(m.length)))):e}function ye(e){const t=r.shadowDelegatesFocus?this.attachShadow({mode:"open",delegatesFocus:!!(16&e.$flags$)}):this.attachShadow({mode:"open"});if(q){const e=new CSSStyleSheet;e.replaceSync(o),t.adoptedStyleSheets.push(e)}}var be=e=>t=>e(t.toLowerCase()),we=be(e=>e.endsWith(".d.ts")||e.endsWith(".d.mts")||e.endsWith(".d.cts")),_e=(be(e=>!we(e)&&(e.endsWith(".ts")||e.endsWith(".mts")||e.endsWith(".cts"))),be(e=>e.endsWith(".tsx")||e.endsWith(".mtsx")||e.endsWith(".ctsx")),be(e=>e.endsWith(".jsx")||e.endsWith(".mjsx")||e.endsWith(".cjsx")),be(e=>e.endsWith(".js")||e.endsWith(".mjs")||e.endsWith(".cjs")),e=>{const t=Ye(e,"childNodes");e.tagName&&e.tagName.includes("-")&&e["s-cr"]&&"SLOT-FB"!==e.tagName&&Te(t,e.tagName).forEach(e=>{1===e.nodeType&&"SLOT-FB"===e.tagName&&(Se(e,ke(e),!1).length?e.hidden=!0:e.hidden=!1)});let n=0;for(n=0;n<t.length;n++){const e=t[n];1===e.nodeType&&Ye(e,"childNodes").length&&_e(e)}}),Ee=e=>{const t=[];for(let n=0;n<e.length;n++){const i=e[n]["s-nr"]||void 0;i&&i.isConnected&&t.push(i)}return t};function Te(e,t,n){let i,r=0,s=[];for(;r<e.length;r++){if(i=e[r],i["s-sr"]&&(!t||i["s-hn"]===t)&&(void 0===n||ke(i)===n)&&(s.push(i),"undefined"!==typeof n))return s;s=[...s,...Te(i.childNodes,t,n)]}return s}var Se=(e,t,n=!0)=>{const i=[];(n&&e["s-sr"]||!e["s-sr"])&&i.push(e);let r=e;while(r=r.nextSibling)ke(r)!==t||!n&&r["s-sr"]||i.push(r);return i},Ie=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,$e=(e,t,n,i)=>{if(e["s-ol"]&&e["s-ol"].isConnected)return;const s=document.createTextNode("");if(s["s-nr"]=e,!t["s-cr"]||!t["s-cr"].parentNode)return;const o=t["s-cr"].parentNode,a=Ye(o,n?"prepend":"appendChild");if(r.hydrateClientSide&&"undefined"!==typeof i){s["s-oo"]=i;const e=Ye(o,"childNodes"),t=[s];e.forEach(e=>{e["s-nr"]&&t.push(e)}),t.sort((e,t)=>!e["s-oo"]||e["s-oo"]<(t["s-oo"]||0)?-1:!t["s-oo"]||t["s-oo"]<e["s-oo"]?1:0),t.forEach(e=>a.call(o,e))}else a.call(o,s);e["s-ol"]=s,e["s-sh"]=t["s-hn"]},ke=e=>"string"===typeof e["s-sn"]?e["s-sn"]:1===e.nodeType&&e.getAttribute("slot")||void 0;function Ce(e){if(e.assignedElements||e.assignedNodes||!e["s-sr"])return;const t=t=>function(e){const n=[],i=this["s-sn"];(null==e?void 0:e.flatten)&&console.error("\n          Flattening is not supported for Stencil non-shadow slots. \n          You can use `.childNodes` to nested slot fallback content.\n          If you have a particular use case, please open an issue on the Stencil repo.\n        ");const r=this["s-cr"].parentElement,s=r.__childNodes?r.childNodes:Ee(r.childNodes);return s.forEach(e=>{i===ke(e)&&n.push(e)}),t?n.filter(e=>1===e.nodeType):n}.bind(e);e.assignedElements=t(!0),e.assignedNodes=t(!1)}function xe(e){e.dispatchEvent(new CustomEvent("slotchange",{bubbles:!1,cancelable:!1,composed:!1}))}function Ae(e,t){var n;if(t=t||(null==(n=e["s-ol"])?void 0:n.parentElement),!t)return{slotNode:null,slotName:""};const i=e["s-sn"]=ke(e)||"",r=Ye(t,"childNodes"),s=Te(r,t.tagName,i)[0];return{slotNode:s,slotName:i}}var Ne=e=>{Oe(e),Re(e),De(e),Le(e),Fe(e),Me(e),Ve(e),je(e),Ue(e),Be(e),Pe(e)},Oe=e=>{const t=e.cloneNode;e.cloneNode=function(e){const n=this,i=!!r.shadowDom&&(n.shadowRoot&&z),s=t.call(n,!!i&&e);if(r.slot&&!i&&e){let e,t,n=0;const i=["s-id","s-cr","s-lr","s-rc","s-sc","s-p","s-cn","s-sr","s-sn","s-hn","s-ol","s-nr","s-si","s-rf","s-scs"],o=this.__childNodes||this.childNodes;for(;n<o.length;n++)e=o[n]["s-nr"],t=i.every(e=>!o[n][e]),e&&(r.appendChildSlotFix&&s.__appendChild?s.__appendChild(e.cloneNode(!0)):s.appendChild(e.cloneNode(!0))),t&&s.appendChild(o[n].cloneNode(!0))}return s}},Re=e=>{e.__appendChild=e.appendChild,e.appendChild=function(e){const{slotName:t,slotNode:n}=Ae(e,this);if(n){$e(e,n);const i=Se(n,t),r=i[i.length-1],s=Ye(r,"parentNode"),o=Ye(s,"insertBefore")(e,r.nextSibling);return xe(n),_e(this),o}return this.__appendChild(e)}},Pe=e=>{e.__removeChild=e.removeChild,e.removeChild=function(e){if(e&&"undefined"!==typeof e["s-sn"]){const t=this.__childNodes||this.childNodes,n=Te(t,this.tagName,e["s-sn"]);if(n&&e.isConnected)return e.remove(),void _e(this)}return this.__removeChild(e)}},Le=e=>{e.__prepend=e.prepend,e.prepend=function(...t){t.forEach(t=>{"string"===typeof t&&(t=this.ownerDocument.createTextNode(t));const n=(t["s-sn"]=ke(t))||"",i=Ye(this,"childNodes"),r=Te(i,this.tagName,n)[0];if(r){$e(t,r,!0);const e=Se(r,n),i=e[0],s=Ye(i,"parentNode"),o=Ye(s,"insertBefore")(t,Ye(i,"nextSibling"));return xe(r),o}return 1===t.nodeType&&t.getAttribute("slot")&&(t.hidden=!0),e.__prepend(t)})}},De=e=>{e.__append=e.append,e.append=function(...e){e.forEach(e=>{"string"===typeof e&&(e=this.ownerDocument.createTextNode(e)),this.appendChild(e)})}},Me=e=>{const t=e.insertAdjacentHTML;e.insertAdjacentHTML=function(e,n){if("afterbegin"!==e&&"beforeend"!==e)return t.call(this,e,n);const i=this.ownerDocument.createElement("_");let r;if(i.innerHTML=n,"afterbegin"===e)while(r=i.firstChild)this.prepend(r);else if("beforeend"===e)while(r=i.firstChild)this.append(r)}},Ve=e=>{e.insertAdjacentText=function(e,t){this.insertAdjacentHTML(e,t)}},je=e=>{const t=e;t.__insertBefore||(t.__insertBefore=e.insertBefore,e.insertBefore=function(e,t){const{slotName:n,slotNode:i}=Ae(e,this),r=this.__childNodes?this.childNodes:Ee(this.childNodes);if(i){let s=!1;if(r.forEach(r=>{if(r!==t&&null!==t);else{if(s=!0,null===t||n!==t["s-sn"])return void this.appendChild(e);if(n===t["s-sn"]){$e(e,i);const n=Ye(t,"parentNode");Ye(n,"insertBefore")(e,t),xe(i)}}}),s)return e}const s=null==t?void 0:t.__parentNode;return s&&!this.isSameNode(s)?this.appendChild(e):this.__insertBefore(e,t)})},Fe=e=>{const t=e.insertAdjacentElement;e.insertAdjacentElement=function(e,n){return"afterbegin"!==e&&"beforeend"!==e?t.call(this,e,n):"afterbegin"===e?(this.prepend(n),n):"beforeend"===e?(this.append(n),n):n}},Ue=e=>{Je("textContent",e),Object.defineProperty(e,"textContent",{get:function(){let e="";const t=this.__childNodes?this.childNodes:Ee(this.childNodes);return t.forEach(t=>e+=t.textContent||""),e},set:function(e){const t=this.__childNodes?this.childNodes:Ee(this.childNodes);t.forEach(e=>{e["s-ol"]&&e["s-ol"].remove(),e.remove()}),this.insertAdjacentHTML("beforeend",e)}})},Be=e=>{class t extends Array{item(e){return this[e]}}Je("children",e),Object.defineProperty(e,"children",{get(){return this.childNodes.filter(e=>1===e.nodeType)}}),Object.defineProperty(e,"childElementCount",{get(){return this.children.length}}),Je("firstChild",e),Object.defineProperty(e,"firstChild",{get(){return this.childNodes[0]}}),Je("lastChild",e),Object.defineProperty(e,"lastChild",{get(){return this.childNodes[this.childNodes.length-1]}}),Je("childNodes",e),Object.defineProperty(e,"childNodes",{get(){const e=new t;return e.push(...Ee(this.__childNodes)),e}})},ze=e=>{e&&void 0===e.__nextSibling&&globalThis.Node&&(He(e),qe(e),Ge(e),e.nodeType===Node.ELEMENT_NODE&&(We(e),Ke(e)))},He=e=>{e&&!e.__nextSibling&&(Je("nextSibling",e),Object.defineProperty(e,"nextSibling",{get:function(){var e;const t=null==(e=this["s-ol"])?void 0:e.parentNode.childNodes,n=null==t?void 0:t.indexOf(this);return t&&n>-1?t[n+1]:this.__nextSibling}}))},We=e=>{e&&!e.__nextElementSibling&&(Je("nextElementSibling",e),Object.defineProperty(e,"nextElementSibling",{get:function(){var e;const t=null==(e=this["s-ol"])?void 0:e.parentNode.children,n=null==t?void 0:t.indexOf(this);return t&&n>-1?t[n+1]:this.__nextElementSibling}}))},qe=e=>{e&&!e.__previousSibling&&(Je("previousSibling",e),Object.defineProperty(e,"previousSibling",{get:function(){var e;const t=null==(e=this["s-ol"])?void 0:e.parentNode.childNodes,n=null==t?void 0:t.indexOf(this);return t&&n>-1?t[n-1]:this.__previousSibling}}))},Ke=e=>{e&&!e.__previousElementSibling&&(Je("previousElementSibling",e),Object.defineProperty(e,"previousElementSibling",{get:function(){var e;const t=null==(e=this["s-ol"])?void 0:e.parentNode.children,n=null==t?void 0:t.indexOf(this);return t&&n>-1?t[n-1]:this.__previousElementSibling}}))},Ge=e=>{e&&!e.__parentNode&&(Je("parentNode",e),Object.defineProperty(e,"parentNode",{get:function(){var e;return(null==(e=this["s-ol"])?void 0:e.parentNode)||this.__parentNode},set:function(e){this.__parentNode=e}}))},Xe=["children","nextElementSibling","previousElementSibling"],Qe=["childNodes","firstChild","lastChild","nextSibling","previousSibling","textContent","parentNode"];function Je(e,t){let n;Xe.includes(e)?n=Object.getOwnPropertyDescriptor(Element.prototype,e):Qe.includes(e)&&(n=Object.getOwnPropertyDescriptor(Node.prototype,e)),n||(n=Object.getOwnPropertyDescriptor(t,e)),n&&Object.defineProperty(t,"__"+e,n)}function Ye(e,t){if("__"+t in e){const n=e["__"+t];return"function"!==typeof n?n:n.bind(e)}return"function"!==typeof e[t]?e[t]:e[t].bind(e)}var Ze=0,et=(e,t="")=>{if(r.profile&&performance.mark){const n=`st:${e}:${t}:${Ze++}`;return performance.mark(n),()=>performance.measure(`[Stencil] ${e}() <${t}>`,n)}return()=>{}},tt=(e,t)=>r.profile&&performance.mark?(0===performance.getEntriesByName(e,"mark").length&&performance.mark(e),()=>{0===performance.getEntriesByName(t,"measure").length&&performance.measure(t,e)}):()=>{},nt=(e,t,...n)=>{let i=null,s=null,o=null,a=!1,l=!1;const c=[],u=t=>{for(let n=0;n<t.length;n++)i=t[n],Array.isArray(i)?u(i):null!=i&&"boolean"!==typeof i&&((a="function"!==typeof e&&!ae(i))?i=String(i):r.isDev&&"function"!==typeof e&&void 0===i.$flags$&&T("vNode passed as children has unexpected type.\nMake sure it's using the correct h() function.\nEmpty objects can also be the cause, look for JSX comments that became objects."),a&&l?c[c.length-1].$text$+=i:c.push(a?it(null,i):i),l=a)};if(u(n),t&&(r.isDev&&"input"===e&&ct(t),r.vdomKey&&t.key&&(s=t.key),r.slotRelocation&&t.name&&(o=t.name),r.vdomClass)){const e=t.className||t.class;e&&(t.class="object"!==typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}if(r.isDev&&c.some(st)&&T("The <Host> must be the single root component. Make sure:\n- You are NOT using hostData() and <Host> in the same component.\n- <Host> is used once, and it's the single root component of the render() function."),r.vdomFunctional&&"function"===typeof e)return e(null===t?{}:t,c,ot);const h=it(e,null);return h.$attrs$=t,c.length>0&&(h.$children$=c),r.vdomKey&&(h.$key$=s),r.slotRelocation&&(h.$name$=o),h},it=(e,t)=>{const n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return r.vdomAttribute&&(n.$attrs$=null),r.vdomKey&&(n.$key$=null),r.slotRelocation&&(n.$name$=null),n},rt={},st=e=>e&&e.$tag$===rt,ot={forEach:(e,t)=>e.map(at).forEach(t),map:(e,t)=>e.map(at).map(t).map(lt)},at=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),lt=e=>{if("function"===typeof e.vtag){const t={...e.vattrs};return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),nt(e.vtag,t,...e.vchildren||[])}const t=it(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},ct=e=>{const t=Object.keys(e),n=t.indexOf("value");if(-1===n)return;const i=t.indexOf("type"),r=t.indexOf("min"),s=t.indexOf("max"),o=t.indexOf("step");(n<i||n<r||n<s||n<o)&&S('The "value" prop of <input> should be set after "min", "max", "type" and "step"')},ut=(e,t,n,i)=>{var s;const o=et("hydrateClient",t),a=e.shadowRoot,l=[],c=[],u=[],h=r.shadowDom&&a?[]:null,d=it(t,null);d.$elm$=e;const f=Object.entries((null==(s=i.$cmpMeta$)?void 0:s.$members$)||{});let p;if(f.forEach(([t,[n,r]])=>{var s;if(!(31&n))return;const o=r||t,a=e.getAttribute(o);if(null!==a){const e=yn(a,n);null==(s=null==i?void 0:i.$instanceValues$)||s.set(t,e)}}),r.scoped){const t=i.$cmpMeta$;t&&10&t.$flags$&&e["s-sc"]?(p=e["s-sc"],e.classList.add(p+"-h")):e["s-sc"]&&delete e["s-sc"]}!F.document||B.$orgLocNodes$&&B.$orgLocNodes$.size||dt(F.document.body,B.$orgLocNodes$=new Map),e[P]=n,e.removeAttribute(P),i.$vnode$=ht(d,l,c,h,e,e,n,u);let g=0;const m=l.length;let v;for(g;g<m;g++){v=l[g];const n=v.$hostId$+"."+v.$nodeId$,i=B.$orgLocNodes$.get(n),r=v.$elm$;a||(r["s-hn"]=t.toUpperCase(),"slot"===v.$tag$&&(r["s-cr"]=e["s-cr"])),"slot"===v.$tag$&&(v.$name$=v.$elm$["s-sn"]||v.$elm$["name"]||null,v.$children$?(v.$flags$|=2,v.$elm$.childNodes.length||v.$children$.forEach(e=>{v.$elm$.appendChild(e.$elm$)})):v.$flags$|=1),i&&i.isConnected&&(a&&""===i["s-en"]&&i.parentNode.insertBefore(r,i.nextSibling),i.parentNode.removeChild(i),a||(r["s-oo"]=parseInt(v.$nodeId$))),B.$orgLocNodes$.delete(n)}const y=[],b=u.length;let w,_,E,T,S=0;for(S;S<b;S++)if(w=u[S],w&&w.length)for(E=w.length,_=0,_;_<E;_++){if(T=w[_],y[T.hostId]||(y[T.hostId]=B.$orgLocNodes$.get(T.hostId)),!y[T.hostId])continue;const e=y[T.hostId];e.shadowRoot&&a||(T.slot["s-cr"]=e["s-cr"],!T.slot["s-cr"]&&e.shadowRoot?T.slot["s-cr"]=e:T.slot["s-cr"]=(e.__childNodes||e.childNodes)[0],$e(T.node,T.slot,!1,T.node["s-oo"]),r.experimentalSlotFixes&&ze(T.node)),e.shadowRoot&&T.node.parentElement!==e&&e.appendChild(T.node)}if(r.scoped&&p&&c.length&&c.forEach(e=>{e.$elm$.parentElement.classList.add(p+"-s")}),r.shadowDom&&a&&!a.childNodes.length){let t=0;const n=h.length;if(n){for(t;t<n;t++)a.appendChild(h[t]);Array.from(e.childNodes).forEach(e=>{"string"!==typeof e["s-sn"]&&(1===e.nodeType&&e.slot&&e.hidden?e.removeAttribute("hidden"):(8===e.nodeType||3===e.nodeType&&!e.wholeText.trim())&&e.parentNode.removeChild(e))})}}B.$orgLocNodes$.delete(e["s-id"]),i.$hostElement$=e,o()},ht=(e,t,n,i,s,o,a,l=[])=>{let c,u,h,d;const f=s["s-sc"];if(1===o.nodeType){if(c=o.getAttribute(D),c&&(u=c.split("."),u[0]===a||"0"===u[0])){h=ft({$flags$:0,$hostId$:u[0],$nodeId$:u[1],$depth$:u[2],$index$:u[3],$tag$:o.tagName.toLowerCase(),$elm$:o,$attrs$:{class:o.className||""}}),t.push(h),o.removeAttribute(D),e.$children$||(e.$children$=[]),r.scoped&&f&&(o["s-si"]=f,h.$attrs$.class+=" "+f);const s=h.$elm$.getAttribute("s-sn");"string"===typeof s&&("slot-fb"===h.$tag$&&(pt(s,u[2],h,o,e,t,n,i,l),r.scoped&&f&&o.classList.add(f)),h.$elm$["s-sn"]=s,h.$elm$.removeAttribute("s-sn")),void 0!==h.$index$&&(e.$children$[h.$index$]=h),e=h,i&&"0"===h.$depth$&&(i[h.$index$]=h.$elm$)}if(o.shadowRoot)for(d=o.shadowRoot.childNodes.length-1;d>=0;d--)ht(e,t,n,i,s,o.shadowRoot.childNodes[d],a,l);const p=o.__childNodes||o.childNodes;for(d=p.length-1;d>=0;d--)ht(e,t,n,i,s,p[d],a,l)}else if(8===o.nodeType){if(u=o.nodeValue.split("."),u[1]===a||"0"===u[1])if(c=u[0],h=ft({$hostId$:u[1],$nodeId$:u[2],$depth$:u[3],$index$:u[4]||"0",$elm$:o,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null}),c===O)h.$elm$=bt(o,3),h.$elm$&&3===h.$elm$.nodeType&&(h.$text$=h.$elm$.textContent,t.push(h),o.remove(),a===h.$hostId$&&(e.$children$||(e.$children$=[]),e.$children$[h.$index$]=h),i&&"0"===h.$depth$&&(i[h.$index$]=h.$elm$));else if(c===R)h.$elm$=bt(o,8),h.$elm$&&8===h.$elm$.nodeType&&(t.push(h),o.remove());else if(h.$hostId$===a)if(c===N){const r=o["s-sn"]=u[5]||"";pt(r,u[2],h,o,e,t,n,i,l)}else c===x&&(r.shadowDom&&i?o.remove():r.slotRelocation&&(s["s-cr"]=o,o["s-cn"]=!0))}else if(e&&"style"===e.$tag$){const t=it(null,o.textContent);t.$elm$=o,t.$index$="0",e.$children$=[t]}else 3!==o.nodeType||o.wholeText.trim()||o.remove();return e},dt=(e,t)=>{if(1===e.nodeType){const n=e[P]||e.getAttribute(P);n&&t.set(n,e);let i=0;if(e.shadowRoot)for(;i<e.shadowRoot.childNodes.length;i++)dt(e.shadowRoot.childNodes[i],t);const r=e.__childNodes||e.childNodes;for(i=0;i<r.length;i++)dt(r[i],t)}else if(8===e.nodeType){const n=e.nodeValue.split(".");n[0]===A&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-en"]=n[3])}},ft=e=>{const t={$flags$:0,$hostId$:null,$nodeId$:null,$depth$:null,$index$:"0",$elm$:null,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null};return{...t,...e}};function pt(e,t,n,i,s,o,a,l,c){i["s-sr"]=!0,n.$name$=e||null,n.$tag$="slot";const u=(null==s?void 0:s.$elm$)?s.$elm$["s-id"]||s.$elm$.getAttribute("s-id"):"";if(r.shadowDom&&l&&F.document){const r=n.$elm$=F.document.createElement(n.$tag$);n.$name$&&n.$elm$.setAttribute("name",e),u&&u!==n.$hostId$?s.$elm$.insertBefore(r,s.$elm$.children[0]):i.parentNode.insertBefore(n.$elm$,i),yt(c,t,e,i,n.$hostId$),i.remove(),"0"===n.$depth$&&(l[n.$index$]=n.$elm$)}else{const r=n.$elm$,a=u&&u!==n.$hostId$&&s.$elm$.shadowRoot;yt(c,t,e,i,a?u:n.$hostId$),Ce(i),a&&s.$elm$.insertBefore(r,s.$elm$.children[0]),o.push(n)}a.push(n),s.$children$||(s.$children$=[]),s.$children$[n.$index$]=n}var gt,mt,vt,yt=(e,t,n,i,r)=>{let s=i.nextSibling;e[t]=e[t]||[];while(s&&((s["getAttribute"]&&s.getAttribute("slot")||s["s-sn"])===n||""===n&&!s["s-sn"]&&(8===s.nodeType&&1!==s.nodeValue.indexOf(".")||3===s.nodeType)))s["s-sn"]=n,e[t].push({slot:i,node:s,hostId:r}),s=s.nextSibling},bt=(e,t)=>{let n=e;do{n=n.nextSibling}while(n&&(n.nodeType!==t||!n.nodeValue));return n},wt=e=>{const t=[];let n=0;e=e.replace(/(\[[^\]]*\])/g,(e,i)=>{const r=`__ph-${n}__`;return t.push(i),n++,r});const i=e.replace(/(:nth-[-\w]+)(\([^)]+\))/g,(e,i,r)=>{const s=`__ph-${n}__`;return t.push(r),n++,i+s}),r={content:i,placeholders:t};return r},_t=(e,t)=>t.replace(/__ph-(\d+)__/g,(t,n)=>e[+n]),Et="-shadowcsshost",Tt="-shadowcssslotted",St="-shadowcsscontext",It=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",$t=new RegExp("("+Et+It,"gim"),kt=new RegExp("("+St+It,"gim"),Ct=new RegExp("("+Tt+It,"gim"),xt=Et+"-no-combinator",At=/-shadowcsshost-no-combinator([^\s]*)/,Nt=[/::shadow/g,/::content/g],Ot="([>\\s~+[.,{:][\\s\\S]*)?$",Rt=/-shadowcsshost/gim,Pt=e=>{const t=ce(e);return new RegExp(`(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${t}))(${t}\\b)`,"g")},Lt=Pt("::slotted"),Dt=Pt(":host"),Mt=Pt(":host-context"),Vt=/\/\*\s*[\s\S]*?\*\//g,jt=e=>e.replace(Vt,""),Ft=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,Ut=e=>e.match(Ft)||[],Bt=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,zt=/([{}])/g,Ht=/(^.*?[^\\])??((:+)(.*)|$)/,Wt="{",qt="}",Kt="%BLOCK%",Gt=(e,t)=>{const n=Xt(e);let i=0;return n.escapedString.replace(Bt,(...e)=>{const r=e[2];let s="",o=e[4],a="";o&&o.startsWith("{"+Kt)&&(s=n.blocks[i++],o=o.substring(Kt.length+1),a="{");const l={selector:r,content:s},c=t(l);return`${e[1]}${c.selector}${e[3]}${a}${c.content}${o}`})},Xt=e=>{const t=e.split(zt),n=[],i=[];let r=0,s=[];for(let a=0;a<t.length;a++){const e=t[a];e===qt&&r--,r>0?s.push(e):(s.length>0&&(i.push(s.join("")),n.push(Kt),s=[]),n.push(e)),e===Wt&&r++}s.length>0&&(i.push(s.join("")),n.push(Kt));const o={escapedString:n.join(""),blocks:i};return o},Qt=e=>{const t=[];return e=e.replace(/@supports\s+selector\s*\(\s*([^)]*)\s*\)/g,(e,n)=>{const i=`__supports_${t.length}__`;return t.push(n),`@supports selector(${i})`}),e=e.replace(Mt,`$1${St}`).replace(Dt,`$1${Et}`).replace(Lt,`$1${Tt}`),t.forEach((t,n)=>{e=e.replace(`__supports_${n}__`,t)}),e},Jt=(e,t,n)=>e.replace(t,(...e)=>{if(e[2]){const t=e[2].split(","),i=[];for(let r=0;r<t.length;r++){const s=t[r].trim();if(!s)break;i.push(n(xt,s,e[3]))}return i.join(",")}return xt+e[3]}),Yt=(e,t,n)=>e+t.replace(Et,"")+n,Zt=e=>Jt(e,$t,Yt),en=(e,t,n)=>t.indexOf(Et)>-1?Yt(e,t,n):e+t+n+", "+t+" "+e+n,tn=(e,t)=>{const n="."+t+" > ",i=[];return e=e.replace(Ct,(...e)=>{if(e[2]){const t=e[2].trim(),r=e[3],s=n+t+r;let o="";for(let n=e[4]-1;n>=0;n--){const t=e[5][n];if("}"===t||","===t)break;o=t+o}const a=(o+s).trim(),l=`${o.trimEnd()}${s.trim()}`.trim();if(a!==l){const e=`${l}, ${a}`;i.push({orgSelector:a,updatedSelector:e})}return s}return xt+e[3]}),{selectors:i,cssText:e}},nn=e=>Jt(e,kt,en),rn=e=>Nt.reduce((e,t)=>e.replace(t," "),e),sn=e=>{const t=/\[/g,n=/\]/g;return e=e.replace(t,"\\[").replace(n,"\\]"),new RegExp("^("+e+")"+Ot,"m")},on=(e,t)=>{const n=sn(t);return!n.test(e)},an=(e,t)=>e.replace(Ht,(e,n="",i,r="",s="")=>n+t+r+s),ln=(e,t,n)=>{if(Rt.lastIndex=0,Rt.test(e)){const t=`.${n}`;return e.replace(At,(e,n)=>an(n,t)).replace(Rt,t+" ")}return t+" "+e},cn=(e,t,n)=>{const i=/\[is=([^\]]*)\]/g;t=t.replace(i,(e,...t)=>t[0]);const r="."+t,s=e=>{let i=e.trim();if(!i)return"";if(e.indexOf(xt)>-1)i=ln(e,t,n);else{const t=e.replace(Rt,"");t.length>0&&(i=an(t,r))}return i},o=wt(e);e=o.content;let a,l="",c=0;const u=/( |>|\+|~(?!=))\s*/g,h=e.indexOf(xt)>-1;let d=!h;while(null!==(a=u.exec(e))){const t=a[1],n=e.slice(c,a.index).trim();d=d||n.indexOf(xt)>-1;const i=d?s(n):n;l+=`${i} ${t} `,c=u.lastIndex}const f=e.substring(c);return d=d||f.indexOf(xt)>-1,l+=d?s(f):f,_t(o.placeholders,l)},un=(e,t,n,i)=>e.split(",").map(e=>i&&e.indexOf("."+i)>-1?e.trim():on(e,t)?cn(e,t,n).trim():e.trim()).join(", "),hn=(e,t,n,i,r)=>Gt(e,e=>{let s=e.selector,o=e.content;"@"!==e.selector[0]?s=un(e.selector,t,n,i):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=hn(e.content,t,n,i,r));const a={selector:s.replace(/\s{2,}/g," ").trim(),content:o};return a}),dn=(e,t,n,i,r)=>{e=Qt(e),e=Zt(e),e=nn(e);const s=tn(e,i);return e=s.cssText,e=rn(e),t&&(e=hn(e,t,n,i,r)),e=fn(e,n),e=e.replace(/>\s*\*\s+([^{, ]+)/gm," $1 "),{cssText:e.trim(),slottedSelectors:s.selectors.map(e=>({orgSelector:fn(e.orgSelector,n),updatedSelector:fn(e.updatedSelector,n)}))}},fn=(e,t)=>e.replace(/-shadowcsshost-no-combinator/g,`.${t}`),pn=(e,t,n)=>{const i=t+"-h",r=t+"-s",s=Ut(e);e=jt(e);const o=[];if(n){const t=e=>{const t=`/*!@___${o.length}___*/`,n=`/*!@${e.selector}*/`;return o.push({placeholder:t,comment:n}),e.selector=t+e.selector,e};e=Gt(e,e=>"@"!==e.selector[0]?t(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=Gt(e.content,t),e):e)}const a=dn(e,t,i,r,n);return e=[a.cssText,...s].join("\n"),n&&o.forEach(({placeholder:t,comment:n})=>{e=e.replace(t,n)}),a.slottedSelectors.forEach(t=>{const n=new RegExp(ce(t.orgSelector),"g");e=e.replace(n,t.updatedSelector)}),e},gn=e=>C.map(t=>t(e)).find(e=>!!e),mn=e=>C.push(e),vn=e=>y(e).$modeName$,yn=(e,t)=>{if((r.hydrateClientSide||r.hydrateServerSide)&&"string"===typeof e&&(e.startsWith("{")&&e.endsWith("}")||e.startsWith("[")&&e.endsWith("]")))try{return e=JSON.parse(e),e}catch(n){}return(r.hydrateClientSide||r.hydrateServerSide)&&"string"===typeof e&&e.startsWith(m)?(e=ve(e),e):null==e||ae(e)?e:r.propBoolean&&4&t?"false"!==e&&(""===e||!!e):r.propNumber&&2&t?"string"===typeof e?parseFloat(e):"number"===typeof e?e:NaN:r.propString&&1&t?String(e):e},bn=e=>r.lazyLoad?y(e).$hostElement$:e,wn=(e,t,n)=>{const i=bn(e);return{emit:e=>(r.isDev&&!i.isConnected&&S(`The "${t}" event was emitted, but the dispatcher node is no longer connected to the dom.`),_n(i,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}},_n=(e,t,n)=>{const i=B.ce(t,n);return e.dispatchEvent(i),i},En=new WeakMap,Tn=(e,t,n)=>{let i=k.get(e);q&&n?(i=i||new CSSStyleSheet,"string"===typeof i?i=t:i.replaceSync(t)):i=t,k.set(e,i)},Sn=(e,t,n)=>{var i;const s=$n(t,n),o=k.get(s);if(!r.attachStyles||!F.document)return s;if(e=11===e.nodeType?e:F.document,o)if("string"===typeof o){e=e.head||e;let n,a=En.get(e);if(a||En.set(e,a=new Set),!a.has(s)){if(r.hydrateClientSide&&e.host&&(n=e.querySelector(`[${L}="${s}"]`)))n.innerHTML=o;else{n=document.querySelector(`[${L}="${s}"]`)||F.document.createElement("style"),n.innerHTML=o;const a=null!=(i=B.$nonce$)?i:le(F.document);if(null!=a&&n.setAttribute("nonce",a),(r.hydrateServerSide||r.hotModuleReplacement)&&(2&t.$flags$||128&t.$flags$)&&n.setAttribute(L,s),!(1&t.$flags$))if("HEAD"===e.nodeName){const t=e.querySelectorAll("link[rel=preconnect]"),i=t.length>0?t[t.length-1].nextSibling:e.querySelector("style");e.insertBefore(n,(null==i?void 0:i.parentNode)===e?i:null)}else if("host"in e)if(q){const t=new CSSStyleSheet;t.replaceSync(o),e.adoptedStyleSheets=[t,...e.adoptedStyleSheets]}else{const t=e.querySelector("style");t?t.innerHTML=o+t.innerHTML:e.prepend(n)}else e.append(n);1&t.$flags$&&e.insertBefore(n,null)}4&t.$flags$&&(n.innerHTML+=M),a&&a.add(s)}}else r.constructableCSS&&!e.adoptedStyleSheets.includes(o)&&(e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]);return s},In=e=>{const t=e.$cmpMeta$,n=e.$hostElement$,i=t.$flags$,s=et("attachStyles",t.$tagName$),o=Sn(r.shadowDom&&z&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$);(r.shadowDom||r.scoped)&&r.cssAnnotations&&10&i&&(n["s-sc"]=o,n.classList.add(o+"-h")),s()},$n=(e,t)=>"sc-"+(r.mode&&t&&32&e.$flags$?e.$tagName$+"-"+t:e.$tagName$),kn=e=>e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),Cn=()=>{if(!F.document)return;const e=F.document.querySelectorAll(`[${L}]`);let t=0;for(;t<e.length;t++)Tn(e[t].getAttribute(L),kn(e[t].innerHTML),!0)},xn=(e,t,n,i,s,o,a)=>{if(n===i)return;let l=w(e,t),c=t.toLowerCase();if(r.vdomClass&&"class"===t){const t=e.classList,s=Nn(n);let o=Nn(i);r.hydrateClientSide&&e["s-si"]&&a?(o.push(e["s-si"]),s.forEach(t=>{t.startsWith(e["s-si"])&&o.push(t)}),o=[...new Set(o)],t.add(...o)):(t.remove(...s.filter(e=>e&&!o.includes(e))),t.add(...o.filter(e=>e&&!s.includes(e))))}else if(r.vdomStyle&&"style"===t){if(r.updatable)for(const t in n)i&&null!=i[t]||(!r.hydrateServerSide&&t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in i)n&&i[t]===n[t]||(!r.hydrateServerSide&&t.includes("-")?e.style.setProperty(t,i[t]):e.style[t]=i[t])}else if(r.vdomKey&&"key"===t);else if(r.vdomRef&&"ref"===t)i&&i(e);else if(!r.vdomListener||(r.lazyLoad?l:e.__lookupSetter__(t))||"o"!==t[0]||"n"!==t[1]){if(r.vdomPropOrAttr){const a=ae(i);if((l||a&&null!==i)&&!s)try{if(e.tagName.includes("-"))e[t]!==i&&(e[t]=i);else{const r=null==i?"":i;"list"===t?l=!1:null!=n&&e[t]==r||("function"===typeof e.__lookupSetter__(t)?e[t]=r:e.setAttribute(t,r))}}catch(u){}let h=!1;r.vdomXlink&&c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,h=!0),null==i||!1===i?!1===i&&""!==e.getAttribute(t)||(r.vdomXlink&&h?e.removeAttributeNS(V,t):e.removeAttribute(t)):(!l||4&o||s)&&!a&&1===e.nodeType&&(i=!0===i?"":i,r.vdomXlink&&h?e.setAttributeNS(V,t,i):e.setAttribute(t,i))}}else if(t="-"===t[2]?t.slice(3):w(F,c)?c.slice(2):c[2]+t.slice(3),n||i){const r=t.endsWith(On);t=t.replace(Rn,""),n&&B.rel(e,t,n,r),i&&B.ael(e,t,i,r)}},An=/\s/,Nn=e=>("object"===typeof e&&e&&"baseVal"in e&&(e=e.baseVal),e&&"string"===typeof e?e.split(An):[]),On="Capture",Rn=new RegExp(On+"$"),Pn=(e,t,n,i)=>{const s=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,o=e&&e.$attrs$||{},a=t.$attrs$||{};if(r.updatable)for(const r of Ln(Object.keys(o)))r in a||xn(s,r,o[r],void 0,n,t.$flags$,i);for(const r of Ln(Object.keys(a)))xn(s,r,o[r],a[r],n,t.$flags$,i)};function Ln(e){return e.includes("ref")?[...e.filter(e=>"ref"!==e),"ref"]:e}var Dn=!1,Mn=!1,Vn=!1,jn=!1,Fn=(e,t,n)=>{var i;const s=t.$children$[n];let o,a,l,c=0;if(r.slotRelocation&&!Dn&&(Vn=!0,"slot"===s.$tag$&&(s.$flags$|=s.$children$?2:1)),r.isDev&&s.$elm$&&T(`The JSX ${null!==s.$text$?`"${s.$text$}" text`:`"${s.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`),r.vdomText&&null!==s.$text$)o=s.$elm$=F.document.createTextNode(s.$text$);else if(r.slotRelocation&&1&s.$flags$)o=s.$elm$=r.isDebug||r.hydrateServerSide?ti(s):F.document.createTextNode(""),r.vdomAttribute&&Pn(null,s,jn);else{if(r.svg&&!jn&&(jn="svg"===s.$tag$),!F.document)throw new Error("You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component.");if(o=s.$elm$=r.svg?F.document.createElementNS(jn?u:h,!Dn&&r.slotRelocation&&2&s.$flags$?"slot-fb":s.$tag$):F.document.createElement(!Dn&&r.slotRelocation&&2&s.$flags$?"slot-fb":s.$tag$),r.svg&&jn&&"foreignObject"===s.$tag$&&(jn=!1),r.vdomAttribute&&Pn(null,s,jn),(r.scoped||r.hydrateServerSide)&&oe(gt)&&o["s-si"]!==gt&&o.classList.add(o["s-si"]=gt),s.$children$)for(c=0;c<s.$children$.length;++c)a=Fn(e,s,c),a&&o.appendChild(a);r.svg&&("svg"===s.$tag$?jn=!1:"foreignObject"===o.tagName&&(jn=!0))}return o["s-hn"]=vt,r.slotRelocation&&3&s.$flags$&&(o["s-sr"]=!0,o["s-cr"]=mt,o["s-sn"]=s.$name$||"",o["s-rf"]=null==(i=s.$attrs$)?void 0:i.ref,Ce(o),l=e&&e.$children$&&e.$children$[n],l&&l.$tag$===s.$tag$&&e.$elm$&&(r.experimentalSlotFixes?Un(e.$elm$):Bn(e.$elm$,!1)),(r.scoped||r.hydrateServerSide)&&Zn(mt,o,t.$elm$,null==e?void 0:e.$elm$)),o},Un=e=>{B.$flags$|=1;const t=e.closest(vt.toLowerCase());if(null!=t){const n=Array.from(t.__childNodes||t.childNodes).find(e=>e["s-cr"]),i=Array.from(e.__childNodes||e.childNodes);for(const e of n?i.reverse():i)null!=e["s-sh"]&&(Yn(t,e,null!=n?n:null),e["s-sh"]=void 0,Vn=!0)}B.$flags$&=-2},Bn=(e,t)=>{B.$flags$|=1;const n=Array.from(e.__childNodes||e.childNodes);if(e["s-sr"]&&r.experimentalSlotFixes){let t=e;while(t=t.nextSibling)t&&t["s-sn"]===e["s-sn"]&&t["s-sh"]===vt&&n.push(t)}for(let i=n.length-1;i>=0;i--){const e=n[i];e["s-hn"]!==vt&&e["s-ol"]&&(Yn(Kn(e).parentNode,e,Kn(e)),e["s-ol"].remove(),e["s-ol"]=void 0,e["s-sh"]=void 0,Vn=!0),t&&Bn(e,t)}B.$flags$&=-2},zn=(e,t,n,i,s,o)=>{let a,l=r.slotRelocation&&e["s-cr"]&&e["s-cr"].parentNode||e;for(r.shadowDom&&l.shadowRoot&&l.tagName===vt&&(l=l.shadowRoot);s<=o;++s)i[s]&&(a=Fn(null,n,s),a&&(i[s].$elm$=a,Yn(l,a,r.slotRelocation?Kn(t):t)))},Hn=(e,t,n)=>{for(let i=t;i<=n;++i){const t=e[i];if(t){const e=t.$elm$;Jn(t),e&&(r.slotRelocation&&(Mn=!0,e["s-ol"]?e["s-ol"].remove():Bn(e,!0)),e.remove())}}},Wn=(e,t,n,i,s=!1)=>{let o,a,l=0,c=0,u=0,h=0,d=t.length-1,f=t[0],p=t[d],g=i.length-1,m=i[0],v=i[g];while(l<=d&&c<=g)if(null==f)f=t[++l];else if(null==p)p=t[--d];else if(null==m)m=i[++c];else if(null==v)v=i[--g];else if(qn(f,m,s))Gn(f,m,s),f=t[++l],m=i[++c];else if(qn(p,v,s))Gn(p,v,s),p=t[--d],v=i[--g];else if(qn(f,v,s))!r.slotRelocation||"slot"!==f.$tag$&&"slot"!==v.$tag$||Bn(f.$elm$.parentNode,!1),Gn(f,v,s),Yn(e,f.$elm$,p.$elm$.nextSibling),f=t[++l],v=i[--g];else if(qn(p,m,s))!r.slotRelocation||"slot"!==f.$tag$&&"slot"!==v.$tag$||Bn(p.$elm$.parentNode,!1),Gn(p,m,s),Yn(e,p.$elm$,f.$elm$),p=t[--d],m=i[++c];else{if(u=-1,r.vdomKey)for(h=l;h<=d;++h)if(t[h]&&null!==t[h].$key$&&t[h].$key$===m.$key$){u=h;break}r.vdomKey&&u>=0?(a=t[u],a.$tag$!==m.$tag$?o=Fn(t&&t[c],n,u):(Gn(a,m,s),t[u]=void 0,o=a.$elm$),m=i[++c]):(o=Fn(t&&t[c],n,c),m=i[++c]),o&&(r.slotRelocation?Yn(Kn(f.$elm$).parentNode,o,Kn(f.$elm$)):Yn(f.$elm$.parentNode,o,f.$elm$))}l>d?zn(e,null==i[g+1]?null:i[g+1].$elm$,n,i,c,g):r.updatable&&c>g&&Hn(t,l,d)},qn=(e,t,n=!1)=>e.$tag$===t.$tag$&&(r.slotRelocation&&"slot"===e.$tag$?e.$name$===t.$name$:r.vdomKey&&!n?e.$key$===t.$key$:(n&&!e.$key$&&t.$key$&&(e.$key$=t.$key$),!0)),Kn=e=>e&&e["s-ol"]||e,Gn=(e,t,n=!1)=>{const i=t.$elm$=e.$elm$,s=e.$children$,o=t.$children$,a=t.$tag$,l=t.$text$;let c;r.vdomText&&null!==l?r.vdomText&&r.slotRelocation&&(c=i["s-cr"])?c.parentNode.textContent=l:r.vdomText&&e.$text$!==l&&(i.data=l):(r.svg&&(jn="svg"===a||"foreignObject"!==a&&jn),(r.vdomAttribute||r.reflect)&&(r.slot&&"slot"===a&&!Dn&&r.experimentalSlotFixes&&e.$name$!==t.$name$&&(t.$elm$["s-sn"]=t.$name$||"",Un(t.$elm$.parentElement)),Pn(e,t,jn,n)),r.updatable&&null!==s&&null!==o?Wn(i,s,t,o,n):null!==o?(r.updatable&&r.vdomText&&null!==e.$text$&&(i.textContent=""),zn(i,null,t,o,0,o.length-1)):!n&&r.updatable&&null!==s&&Hn(s,0,s.length-1),r.svg&&jn&&"svg"===a&&(jn=!1))},Xn=[],Qn=e=>{let t,n,i;const s=e.__childNodes||e.childNodes;for(const o of s){if(o["s-sr"]&&(t=o["s-cr"])&&t.parentNode){n=t.parentNode.__childNodes||t.parentNode.childNodes;const e=o["s-sn"];for(i=n.length-1;i>=0;i--)if(t=n[i],!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==o["s-hn"]&&(!r.experimentalSlotFixes||!t["s-sh"]||t["s-sh"]!==o["s-hn"]))if(Ie(t,e)){let n=Xn.find(e=>e.$nodeToRelocate$===t);Mn=!0,t["s-sn"]=t["s-sn"]||e,n?(n.$nodeToRelocate$["s-sh"]=o["s-hn"],n.$slotRefNode$=o):(t["s-sh"]=o["s-hn"],Xn.push({$slotRefNode$:o,$nodeToRelocate$:t})),t["s-sr"]&&Xn.map(e=>{Ie(e.$nodeToRelocate$,t["s-sn"])&&(n=Xn.find(e=>e.$nodeToRelocate$===t),n&&!e.$slotRefNode$&&(e.$slotRefNode$=n.$slotRefNode$))})}else Xn.some(e=>e.$nodeToRelocate$===t)||Xn.push({$nodeToRelocate$:t})}1===o.nodeType&&Qn(o)}},Jn=e=>{r.vdomRef&&(e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(Jn))},Yn=(e,t,n)=>{if(r.scoped&&"string"===typeof t["s-sn"]&&t["s-sr"]&&t["s-cr"])Zn(t["s-cr"],t,e,t.parentElement);else if(r.experimentalSlotFixes&&"string"===typeof t["s-sn"]){11!==e.getRootNode().nodeType&&Ge(t),e.insertBefore(t,n);const{slotNode:i}=Ae(t);return i&&xe(i),t}return r.experimentalSlotFixes&&e.__insertBefore?e.__insertBefore(t,n):null==e?void 0:e.insertBefore(t,n)};function Zn(e,t,n,i){var r,s;let o;if(e&&"string"===typeof t["s-sn"]&&t["s-sr"]&&e.parentNode&&e.parentNode["s-sc"]&&(o=t["s-si"]||e.parentNode["s-sc"])){const e=t["s-sn"],a=t["s-hn"];if(null==(r=n.classList)||r.add(o+"-s"),i&&(null==(s=i.classList)?void 0:s.contains(o+"-s"))){let t=(i.__childNodes||i.childNodes)[0],n=!1;while(t){if(t["s-sn"]!==e&&t["s-hn"]===a&&t["s-sr"]){n=!0;break}t=t.nextSibling}n||i.classList.remove(o+"-s")}}}var ei=(e,t,n=!1)=>{var i,s,o,a,l;const c=e.$hostElement$,u=e.$cmpMeta$,h=e.$vnode$||it(null,null),d=st(t),f=d?t:nt(null,null,t);if(vt=c.tagName,r.isDev&&Array.isArray(t)&&t.some(st))throw new Error(`The <Host> must be the single root component.\nLooks like the render() function of "${vt.toLowerCase()}" is returning an array that contains the <Host>.\n\nThe render() function should look like this instead:\n\nrender() {\n  // Do not return an array\n  return (\n    <Host>{content}</Host>\n  );\n}\n  `);if(r.reflect&&u.$attrsToReflect$&&(f.$attrs$=f.$attrs$||{},u.$attrsToReflect$.map(([e,t])=>f.$attrs$[t]=c[e])),n&&f.$attrs$)for(const r of Object.keys(f.$attrs$))c.hasAttribute(r)&&!["key","ref","style","class"].includes(r)&&(f.$attrs$[r]=c[r]);if(f.$tag$=null,f.$flags$|=4,e.$vnode$=f,f.$elm$=h.$elm$=r.shadowDom&&c.shadowRoot||c,(r.scoped||r.shadowDom)&&(gt=c["s-sc"]),Dn=z&&!!(1&u.$flags$)&&!(128&u.$flags$),r.slotRelocation&&(mt=c["s-cr"],Mn=!1),Gn(h,f,n),r.slotRelocation){if(B.$flags$|=1,Vn){Qn(f.$elm$);for(const e of Xn){const t=e.$nodeToRelocate$;if(!t["s-ol"]&&F.document){const e=r.isDebug||r.hydrateServerSide?ni(t):F.document.createTextNode("");e["s-nr"]=t,Yn(t.parentNode,t["s-ol"]=e,t)}}for(const e of Xn){const t=e.$nodeToRelocate$,l=e.$slotRefNode$;if(l){const e=l.parentNode;let n=l.nextSibling;if(!r.hydrateServerSide&&(!r.experimentalSlotFixes||n&&1===n.nodeType)){let r=null==(i=t["s-ol"])?void 0:i.previousSibling;while(r){let i=null!=(s=r["s-nr"])?s:null;if(i&&i["s-sn"]===t["s-sn"]&&e===(i.__parentNode||i.parentNode)){i=i.nextSibling;while(i===t||(null==i?void 0:i["s-sr"]))i=null==i?void 0:i.nextSibling;if(!i||!i["s-nr"]){n=i;break}}r=r.previousSibling}}const a=t.__parentNode||t.parentNode,c=t.__nextSibling||t.nextSibling;(!n&&e!==a||c!==n)&&t!==n&&(r.experimentalSlotFixes||t["s-hn"]||!t["s-ol"]||(t["s-hn"]=t["s-ol"].parentNode.nodeName),Yn(e,t,n),1===t.nodeType&&"SLOT-FB"!==t.tagName&&(t.hidden=null!=(o=t["s-ih"])&&o)),t&&"function"===typeof l["s-rf"]&&l["s-rf"](l)}else 1===t.nodeType&&(n&&(t["s-ih"]=null!=(a=t.hidden)&&a),t.hidden=!0)}}Mn&&_e(f.$elm$),B.$flags$&=-2,Xn.length=0}if(r.experimentalScopedSlotChanges&&2&u.$flags$){const e=f.$elm$.__childNodes||f.$elm$.childNodes;for(const t of e)t["s-hn"]===vt||t["s-sh"]||(n&&null==t["s-ih"]&&(t["s-ih"]=null!=(l=t.hidden)&&l),t.hidden=!0)}mt=void 0},ti=e=>{var t;return null==(t=F.document)?void 0:t.createComment(`<slot${e.$name$?' name="'+e.$name$+'"':""}> (host=${vt.toLowerCase()})`)},ni=e=>{var t;return null==(t=F.document)?void 0:t.createComment("org-location for "+(e.localName?`<${e.localName}> (host=${e["s-hn"]})`:`[${e.textContent}]`))},ii=(e,t)=>{if(r.asyncLoading&&t&&!e.$onRenderResolve$&&t["s-p"]){const n=t["s-p"].push(new Promise(i=>e.$onRenderResolve$=()=>{t["s-p"].splice(n-1,1),i()}))}},ri=(e,t)=>{if(r.taskQueue&&r.updatable&&(e.$flags$|=16),r.asyncLoading&&4&e.$flags$)return void(e.$flags$|=512);ii(e,e.$ancestorComponent$);const n=()=>si(e,t);return r.taskQueue?re(n):n()},si=(e,t)=>{const n=e.$hostElement$,i=et("scheduleUpdate",e.$cmpMeta$.$tagName$),s=r.lazyLoad?e.$lazyInstance$:n;if(!s)throw new Error(`Can't render component <${n.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);let o;return t?(r.lazyLoad&&r.hostListener&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map(([e,t])=>di(s,e,t,n)),e.$queuedListeners$=void 0)),fi(n,"componentWillLoad"),o=di(s,"componentWillLoad",void 0,n)):(fi(n,"componentWillUpdate"),o=di(s,"componentWillUpdate",void 0,n)),fi(n,"componentWillRender"),o=oi(o,()=>di(s,"componentWillRender",void 0,n)),i(),oi(o,()=>li(e,s,t))},oi=(e,t)=>ai(e)?e.then(t).catch(e=>{console.error(e),t()}):t(),ai=e=>e instanceof Promise||e&&e.then&&"function"===typeof e.then,li=async(e,t,n)=>{var i;const s=e.$hostElement$,o=et("update",e.$cmpMeta$.$tagName$),a=s["s-rc"];r.style&&n&&In(e);const l=et("render",e.$cmpMeta$.$tagName$);if(r.isDev&&(e.$flags$|=1024),r.hydrateServerSide?await ci(e,t,s,n):ci(e,t,s,n),r.isDev&&(e.$renderCount$=void 0===e.$renderCount$?1:e.$renderCount$+1,e.$flags$&=-1025),r.hydrateServerSide)try{gi(s),n&&(1&e.$cmpMeta$.$flags$?s["s-en"]="":2&e.$cmpMeta$.$flags$&&(s["s-en"]="c"))}catch(c){_(c,s)}if(r.asyncLoading&&a&&(a.map(e=>e()),s["s-rc"]=void 0),l(),o(),r.asyncLoading){const t=null!=(i=s["s-p"])?i:[],n=()=>ui(e);0===t.length?n():(Promise.all(t).then(n),e.$flags$|=4,t.length=0)}else ui(e)},ci=(e,t,n,i)=>{const s=!!r.allRenderFn,o=!!r.lazyLoad,a=!!r.taskQueue,l=!!r.updatable;try{if(t=(s||t.render)&&t.render(),l&&a&&(e.$flags$&=-17),(l||o)&&(e.$flags$|=2),r.hasRenderFn||r.reflect)if(r.vdomRender||r.reflect){if(r.hydrateServerSide)return Promise.resolve(t).then(t=>ei(e,t,i));ei(e,t,i)}else{const i=n.shadowRoot;1&e.$cmpMeta$.$flags$?i.textContent=t:n.textContent=t}}catch(c){_(c,e.$hostElement$)}return null},ui=e=>{const t=e.$cmpMeta$.$tagName$,n=e.$hostElement$,i=et("postUpdate",t),s=r.lazyLoad?e.$lazyInstance$:n,o=e.$ancestorComponent$;r.isDev&&(e.$flags$|=1024),di(s,"componentDidRender",void 0,n),r.isDev&&(e.$flags$&=-1025),fi(n,"componentDidRender"),64&e.$flags$?(r.isDev&&(e.$flags$|=1024),di(s,"componentDidUpdate",void 0,n),r.isDev&&(e.$flags$&=-1025),fi(n,"componentDidUpdate"),i()):(e.$flags$|=64,r.asyncLoading&&r.cssAnnotations&&pi(n),r.isDev&&(e.$flags$|=2048),di(s,"componentDidLoad",void 0,n),r.isDev&&(e.$flags$&=-2049),fi(n,"componentDidLoad"),i(),r.asyncLoading&&(e.$onReadyResolve$(n),o||hi(t))),r.method&&r.lazyLoad&&e.$onInstanceResolve$(n),r.asyncLoading&&(e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&ne(()=>ri(e,!1)),e.$flags$&=-517)},hi=e=>{r.asyncQueue&&(B.$flags$|=2),ne(()=>_n(F,"appload",{detail:{namespace:s}})),r.profile&&performance.measure&&performance.measure(`[Stencil] ${s} initial load (by ${e})`,"st:app:start")},di=(e,t,n,i)=>{if(e&&e[t])try{return e[t](n)}catch(r){_(r,i)}},fi=(e,t)=>{r.lifecycleDOMEvents&&_n(e,"stencil_"+t,{bubbles:!0,composed:!0,detail:{namespace:s}})},pi=e=>{var t,n;return r.hydratedClass?e.classList.add(null!=(t=r.hydratedSelectorName)?t:"hydrated"):r.hydratedAttribute?e.setAttribute(null!=(n=r.hydratedSelectorName)?n:"hydrated",""):void 0},gi=e=>{const t=e.children;if(null!=t)for(let n=0,i=t.length;n<i;n++){const e=t[n];"function"===typeof e.connectedCallback&&e.connectedCallback(),gi(e)}},mi=(e,t)=>y(e).$instanceValues$.get(t),vi=(e,t,n,i)=>{const s=y(e);if(r.lazyLoad&&!s)throw new Error(`Couldn't find host element for "${i.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`);const o=r.lazyLoad?s.$hostElement$:e,a=s.$instanceValues$.get(t),l=s.$flags$,c=r.lazyLoad?s.$lazyInstance$:o;n=yn(n,i.$members$[t][0]);const u=Number.isNaN(a)&&Number.isNaN(n),h=n!==a&&!u;if((!r.lazyLoad||!(8&l)||void 0===a)&&h&&(s.$instanceValues$.set(t,n),r.isDev&&(1024&s.$flags$?S(`The state/prop "${t}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`,"\nElement",o,"\nNew value",n,"\nOld value",a):2048&s.$flags$&&S(`The state/prop "${t}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`,"\nElement",o,"\nNew value",n,"\nOld value",a)),!r.lazyLoad||c)){if(r.watchCallback&&i.$watchers$&&128&l){const e=i.$watchers$[t];e&&e.map(e=>{try{c[e](n,a,t)}catch(i){_(i,o)}})}if(r.updatable&&2===(18&l)){if(c.componentShouldUpdate&&!1===c.componentShouldUpdate(n,a,t))return;ri(s,!1)}}},yi=(e,t,n)=>{var i,s;const o=e.prototype;if(r.isTesting){if(o.__stencilAugmented)return;o.__stencilAugmented=!0}if(r.formAssociated&&64&t.$flags$&&1&n&&j.forEach(e=>{const t=o[e];Object.defineProperty(o,e,{value(...n){const i=y(this),s=r.lazyLoad?i.$lazyInstance$:this;if(s){const i=r.lazyLoad?s[e]:t;"function"===typeof i&&i.call(s,...n)}else i.$onReadyPromise$.then(t=>{const i=t[e];"function"===typeof i&&i.call(t,...n)})}})}),r.member&&t.$members$||r.watchCallback&&(t.$watchers$||e.watchers)){r.watchCallback&&e.watchers&&!t.$watchers$&&(t.$watchers$=e.watchers);const a=Object.entries(null!=(i=t.$members$)?i:{});if(a.map(([e,[i]])=>{if((r.prop||r.state)&&(31&i||(!r.lazyLoad||2&n)&&32&i)){const{get:s,set:a}=Object.getOwnPropertyDescriptor(o,e)||{};s&&(t.$members$[e][0]|=2048),a&&(t.$members$[e][0]|=4096),(1&n||!s)&&Object.defineProperty(o,e,{get(){if(r.lazyLoad){if(0===(2048&t.$members$[e][0]))return mi(this,e);const n=y(this),i=n?n.$lazyInstance$:o;if(!i)return;return i[e]}if(!r.lazyLoad)return s?s.apply(this):mi(this,e)},configurable:!0,enumerable:!0}),Object.defineProperty(o,e,{set(s){const o=y(this);if(r.isDev&&0===(1&n)&&0===(4096&t.$members$[e][0])&&0===(o&&8&o.$flags$)&&0!==(31&i)&&0===(1024&i)&&S(`@Prop() "${e}" on <${t.$tagName$}> is immutable but was modified from within the component.\nMore information: https://stenciljs.com/docs/properties#prop-mutability`),a){const n=32&i?this[e]:o.$hostElement$[e];return"undefined"===typeof n&&o.$instanceValues$.get(e)?s=o.$instanceValues$.get(e):!o.$instanceValues$.get(e)&&n&&o.$instanceValues$.set(e,n),a.apply(this,[yn(s,i)]),s=32&i?this[e]:o.$hostElement$[e],void vi(this,e,s,t)}if(r.lazyLoad){if(r.lazyLoad){if(0===(1&n)||0===(4096&t.$members$[e][0]))return vi(this,e,s,t),void(1&n&&!o.$lazyInstance$&&o.$onReadyPromise$.then(()=>{4096&t.$members$[e][0]&&o.$lazyInstance$[e]!==o.$instanceValues$.get(e)&&(o.$lazyInstance$[e]=s)}));const r=()=>{const n=o.$lazyInstance$[e];!o.$instanceValues$.get(e)&&n&&o.$instanceValues$.set(e,n),o.$lazyInstance$[e]=yn(s,i),vi(this,e,o.$lazyInstance$[e],t)};o.$lazyInstance$?r():o.$onReadyPromise$.then(()=>r())}}else vi(this,e,s,t)}})}else r.lazyLoad&&r.method&&1&n&&64&i&&Object.defineProperty(o,e,{value(...t){var n;const i=y(this);return null==(n=null==i?void 0:i.$onInstancePromise$)?void 0:n.then(()=>{var n;return null==(n=i.$lazyInstance$)?void 0:n[e](...t)})}})}),r.observeAttribute&&(!r.lazyLoad||1&n)){const n=new Map;o.attributeChangedCallback=function(e,i,s){B.jmp(()=>{var a;const l=n.get(e);if(this.hasOwnProperty(l)&&r.lazyLoad)s=this[l],delete this[l];else{if(o.hasOwnProperty(l)&&"number"===typeof this[l]&&this[l]==s)return;if(null==l){const n=y(this),o=null==n?void 0:n.$flags$;if(o&&!(8&o)&&128&o&&s!==i){const o=r.lazyLoad?n.$hostElement$:this,l=r.lazyLoad?n.$lazyInstance$:o,c=null==(a=t.$watchers$)?void 0:a[e];null==c||c.forEach(t=>{null!=l[t]&&l[t].call(l,s,i,e)})}return}}const c=Object.getOwnPropertyDescriptor(o,l);s=(null!==s||"boolean"!==typeof this[l])&&s,s===this[l]||c.get&&!c.set||(this[l]=s)})},e.observedAttributes=Array.from(new Set([...Object.keys(null!=(s=t.$watchers$)?s:{}),...a.filter(([e,t])=>15&t[0]).map(([e,i])=>{var s;const o=i[1]||e;return n.set(o,e),r.reflect&&512&i[0]&&(null==(s=t.$attrsToReflect$)||s.push([e,o])),o})]))}}return e},bi=async(e,t,n,i)=>{let s;if(0===(32&t.$flags$)){t.$flags$|=32;const o=n.$lazyBundleId$;if(r.lazyLoad&&o){const o=$(n,t,i);if(o&&"then"in o){const e=tt(`st:load:${n.$tagName$}:${t.$modeName$}`,`[Stencil] Load module for <${n.$tagName$}>`);s=await o,e()}else s=o;if(!s)throw new Error(`Constructor for "${n.$tagName$}#${t.$modeName$}" was not found`);r.member&&!s.isProxied&&(r.watchCallback&&(n.$watchers$=s.watchers),yi(s,n,2),s.isProxied=!0);const a=et("createInstance",n.$tagName$);r.member&&(t.$flags$|=8);try{new s(t)}catch(l){_(l,e)}r.member&&(t.$flags$&=-9),r.watchCallback&&(t.$flags$|=128),a(),wi(t.$lazyInstance$,e)}else{s=e.constructor;const n=e.localName;customElements.whenDefined(n).then(()=>t.$flags$|=128)}if(r.style&&s&&s.style){let i;"string"===typeof s.style?i=s.style:r.mode&&"string"!==typeof s.style&&(t.$modeName$=gn(e),t.$modeName$&&(i=s.style[t.$modeName$]),r.hydrateServerSide&&t.$modeName$&&e.setAttribute("s-mode",t.$modeName$));const o=$n(n,t.$modeName$);if(!k.has(o)){const e=et("registerStyles",n.$tagName$);r.hydrateServerSide&&r.shadowDom&&128&n.$flags$&&(i=pn(i,o,!0)),Tn(o,i,!!(1&n.$flags$)),e()}}}const o=t.$ancestorComponent$,a=()=>ri(t,!0);r.asyncLoading&&o&&o["s-rc"]?o["s-rc"].push(a):a()},wi=(e,t)=>{r.lazyLoad&&di(e,"connectedCallback",void 0,t)},_i=e=>{if(0===(1&B.$flags$)){const t=y(e),n=t.$cmpMeta$,i=et("connectedCallback",n.$tagName$);if(r.hostListenerTargetParent&&$i(e,t,n.$listeners$,!0),1&t.$flags$)$i(e,t,n.$listeners$,!1),(null==t?void 0:t.$lazyInstance$)?wi(t.$lazyInstance$,e):(null==t?void 0:t.$onReadyPromise$)&&t.$onReadyPromise$.then(()=>wi(t.$lazyInstance$,e));else{let i;if(t.$flags$|=1,r.hydrateClientSide&&(i=e.getAttribute(P),i)){if(r.shadowDom&&z&&1&n.$flags$){const t=r.mode?Sn(e.shadowRoot,n,e.getAttribute("s-mode")):Sn(e.shadowRoot,n);e.classList.remove(t+"-h",t+"-s")}else if(r.scoped&&2&n.$flags$){const t=$n(n,r.mode?e.getAttribute("s-mode"):void 0);e["s-sc"]=t}ut(e,n.$tagName$,i,t)}if(r.slotRelocation&&!i&&(r.hydrateServerSide||(r.slot||r.shadowDom)&&12&n.$flags$)&&Ei(e),r.asyncLoading){let n=e;while(n=n.parentNode||n.host)if(r.hydrateClientSide&&1===n.nodeType&&n.hasAttribute("s-id")&&n["s-p"]||n["s-p"]){ii(t,t.$ancestorComponent$=n);break}}r.prop&&!r.hydrateServerSide&&n.$members$&&Object.entries(n.$members$).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),r.initializeNextTick?ne(()=>bi(e,t,n)):bi(e,t,n)}i()}},Ei=e=>{if(!F.document)return;const t=e["s-cr"]=F.document.createComment(r.isDebug?`content-ref (host=${e.localName})`:"");t["s-cn"]=!0,Yn(e,t,e.firstChild)},Ti=(e,t)=>{r.lazyLoad&&di(e,"disconnectedCallback",void 0,t||e)},Si=async e=>{if(0===(1&B.$flags$)){const t=y(e);r.hostListener&&t.$rmListeners$&&(t.$rmListeners$.map(e=>e()),t.$rmListeners$=void 0),r.lazyLoad?(null==t?void 0:t.$lazyInstance$)?Ti(t.$lazyInstance$,e):(null==t?void 0:t.$onReadyPromise$)&&t.$onReadyPromise$.then(()=>Ti(t.$lazyInstance$,e)):Ti(e)}En.has(e)&&En.delete(e),e.shadowRoot&&En.has(e.shadowRoot)&&En.delete(e.shadowRoot)},Ii=(e,t)=>{const n={$flags$:t[0],$tagName$:t[1]};r.member&&(n.$members$=t[2]),r.hostListener&&(n.$listeners$=t[3]),r.watchCallback&&(n.$watchers$=e.$watchers$),r.reflect&&(n.$attrsToReflect$=[]),r.shadowDom&&!z&&1&n.$flags$&&(n.$flags$|=8),r.experimentalSlotFixes?r.scoped&&2&n.$flags$&&Ne(e.prototype):(r.slotChildNodesFix&&Be(e.prototype),r.cloneNodeFix&&Oe(e.prototype),r.appendChildSlotFix&&Re(e.prototype),r.scopedSlotTextContentFix&&2&n.$flags$&&Ue(e.prototype)),r.hydrateClientSide&&r.shadowDom&&Cn();const i=e.prototype.connectedCallback,s=e.prototype.disconnectedCallback;return Object.assign(e.prototype,{__hasHostListenerAttached:!1,__registerHost(){b(this,n)},connectedCallback(){if(!this.__hasHostListenerAttached){const e=y(this);$i(this,e,n.$listeners$,!1),this.__hasHostListenerAttached=!0}_i(this),i&&i.call(this)},disconnectedCallback(){Si(this),s&&s.call(this)},__attachShadow(){if(z)if(this.shadowRoot){if("open"!==this.shadowRoot.mode)throw new Error(`Unable to re-use existing shadow root for ${n.$tagName$}! Mode is set to ${this.shadowRoot.mode} but Stencil only supports open shadow roots.`)}else ye.call(this,n);else this.shadowRoot=this}}),e.is=n.$tagName$,yi(e,n,3)},$i=(e,t,n,i)=>{r.hostListener&&n&&F.document&&(r.hostListenerTargetParent&&(n=i?n.filter(([e])=>32&e):n.filter(([e])=>!(32&e))),n.map(([n,i,s])=>{const o=r.hostListenerTarget?Ci(F.document,e,n):e,a=ki(t,s),l=xi(n);B.ael(o,i,a,l),(t.$rmListeners$=t.$rmListeners$||[]).push(()=>B.rel(o,i,a,l))}))},ki=(e,t)=>n=>{var i;try{r.lazyLoad?256&e.$flags$?null==(i=e.$lazyInstance$)||i[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n]):e.$hostElement$[t](n)}catch(s){_(s,e.$hostElement$)}},Ci=(e,t,n)=>r.hostListenerTargetDocument&&4&n?e:r.hostListenerTargetWindow&&8&n?F:r.hostListenerTargetBody&&16&n?e.body:r.hostListenerTargetParent&&32&n&&t.parentElement?t.parentElement:t,xi=e=>H?{passive:0!==(1&e),capture:0!==(2&e)}:0!==(2&e)}}]);
//# sourceMappingURL=chunk-vendors.e0e9e61d.js.map