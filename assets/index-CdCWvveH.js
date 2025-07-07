(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function na(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const be={},ls=[],Ut=()=>{},sp=()=>!1,vr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),sa=t=>t.startsWith("onUpdate:"),De=Object.assign,ia=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ip=Object.prototype.hasOwnProperty,_e=(t,e)=>ip.call(t,e),te=Array.isArray,us=t=>wr(t)==="[object Map]",Uu=t=>wr(t)==="[object Set]",ne=t=>typeof t=="function",Oe=t=>typeof t=="string",Cn=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",Fu=t=>(Te(t)||ne(t))&&ne(t.then)&&ne(t.catch),ju=Object.prototype.toString,wr=t=>ju.call(t),rp=t=>wr(t).slice(8,-1),Vu=t=>wr(t)==="[object Object]",ra=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$s=na(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ir=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},op=/-(\w)/g,ht=Ir(t=>t.replace(op,(e,n)=>n?n.toUpperCase():"")),ap=/\B([A-Z])/g,Qn=Ir(t=>t.replace(ap,"-$1").toLowerCase()),br=Ir(t=>t.charAt(0).toUpperCase()+t.slice(1)),so=Ir(t=>t?`on${br(t)}`:""),bn=(t,e)=>!Object.is(t,e),io=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Oo=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},cp=t=>{const e=parseFloat(t);return isNaN(e)?t:e},lp=t=>{const e=Oe(t)?Number(t):NaN;return isNaN(e)?t:e};let Fc;const Er=()=>Fc||(Fc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function oa(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Oe(s)?dp(s):oa(s);if(i)for(const o in i)e[o]=i[o]}return e}else if(Oe(t)||Te(t))return t}const up=/;(?![^(]*\))/g,hp=/:([^]+)/,fp=/\/\*[^]*?\*\//g;function dp(t){const e={};return t.replace(fp,"").split(up).forEach(n=>{if(n){const s=n.split(hp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function aa(t){let e="";if(Oe(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const s=aa(t[n]);s&&(e+=s+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const pp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gp=na(pp);function $u(t){return!!t||t===""}const Bu=t=>!!(t&&t.__v_isRef===!0),Hu=t=>Oe(t)?t:t==null?"":te(t)||Te(t)&&(t.toString===ju||!ne(t.toString))?Bu(t)?Hu(t.value):JSON.stringify(t,Wu,2):String(t),Wu=(t,e)=>Bu(e)?Wu(t,e.value):us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],o)=>(n[ro(s,o)+" =>"]=i,n),{})}:Uu(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ro(n))}:Cn(e)?ro(e):Te(e)&&!te(e)&&!Vu(e)?String(e):e,ro=(t,e="")=>{var n;return Cn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qe;class mp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Qe,!e&&Qe&&(this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Qe;try{return Qe=this,e()}finally{Qe=n}}}on(){++this._on===1&&(this.prevScope=Qe,Qe=this)}off(){this._on>0&&--this._on===0&&(Qe=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function _p(){return Qe}let Ie;const oo=new WeakSet;class zu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qe&&Qe.active&&Qe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,oo.has(this)&&(oo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,jc(this),Ku(this);const e=Ie,n=wt;Ie=this,wt=!0;try{return this.fn()}finally{Ju(this),Ie=e,wt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ua(e);this.deps=this.depsTail=void 0,jc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?oo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ko(this)&&this.run()}get dirty(){return ko(this)}}let Gu=0,Bs,Hs;function qu(t,e=!1){if(t.flags|=8,e){t.next=Hs,Hs=t;return}t.next=Bs,Bs=t}function ca(){Gu++}function la(){if(--Gu>0)return;if(Hs){let e=Hs;for(Hs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Bs;){let e=Bs;for(Bs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Ku(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ju(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),ua(s),yp(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function ko(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Xu(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ii)||(t.globalVersion=ii,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ko(t))))return;t.flags|=2;const e=t.dep,n=Ie,s=wt;Ie=t,wt=!0;try{Ku(t);const i=t.fn(t._value);(e.version===0||bn(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Ie=n,wt=s,Ju(t),t.flags&=-3}}function ua(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)ua(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function yp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let wt=!0;const Yu=[];function Zt(){Yu.push(wt),wt=!1}function en(){const t=Yu.pop();wt=t===void 0?!0:t}function jc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ie;Ie=void 0;try{e()}finally{Ie=n}}}let ii=0;class vp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ha{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ie||!wt||Ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ie)n=this.activeLink=new vp(Ie,this),Ie.deps?(n.prevDep=Ie.depsTail,Ie.depsTail.nextDep=n,Ie.depsTail=n):Ie.deps=Ie.depsTail=n,Qu(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Ie.depsTail,n.nextDep=void 0,Ie.depsTail.nextDep=n,Ie.depsTail=n,Ie.deps===n&&(Ie.deps=s)}return n}trigger(e){this.version++,ii++,this.notify(e)}notify(e){ca();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{la()}}}function Qu(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Qu(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const No=new WeakMap,Bn=Symbol(""),Do=Symbol(""),ri=Symbol("");function Be(t,e,n){if(wt&&Ie){let s=No.get(t);s||No.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new ha),i.map=s,i.key=n),i.track()}}function Kt(t,e,n,s,i,o){const a=No.get(t);if(!a){ii++;return}const l=u=>{u&&u.trigger()};if(ca(),e==="clear")a.forEach(l);else{const u=te(t),f=u&&ra(n);if(u&&n==="length"){const p=Number(s);a.forEach((g,w)=>{(w==="length"||w===ri||!Cn(w)&&w>=p)&&l(g)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),f&&l(a.get(ri)),e){case"add":u?f&&l(a.get("length")):(l(a.get(Bn)),us(t)&&l(a.get(Do)));break;case"delete":u||(l(a.get(Bn)),us(t)&&l(a.get(Do)));break;case"set":us(t)&&l(a.get(Bn));break}}la()}function os(t){const e=ge(t);return e===t?e:(Be(e,"iterate",ri),It(t)?e:e.map(qe))}function fa(t){return Be(t=ge(t),"iterate",ri),t}const wp={__proto__:null,[Symbol.iterator](){return ao(this,Symbol.iterator,qe)},concat(...t){return os(this).concat(...t.map(e=>te(e)?os(e):e))},entries(){return ao(this,"entries",t=>(t[1]=qe(t[1]),t))},every(t,e){return Wt(this,"every",t,e,void 0,arguments)},filter(t,e){return Wt(this,"filter",t,e,n=>n.map(qe),arguments)},find(t,e){return Wt(this,"find",t,e,qe,arguments)},findIndex(t,e){return Wt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Wt(this,"findLast",t,e,qe,arguments)},findLastIndex(t,e){return Wt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Wt(this,"forEach",t,e,void 0,arguments)},includes(...t){return co(this,"includes",t)},indexOf(...t){return co(this,"indexOf",t)},join(t){return os(this).join(t)},lastIndexOf(...t){return co(this,"lastIndexOf",t)},map(t,e){return Wt(this,"map",t,e,void 0,arguments)},pop(){return Us(this,"pop")},push(...t){return Us(this,"push",t)},reduce(t,...e){return Vc(this,"reduce",t,e)},reduceRight(t,...e){return Vc(this,"reduceRight",t,e)},shift(){return Us(this,"shift")},some(t,e){return Wt(this,"some",t,e,void 0,arguments)},splice(...t){return Us(this,"splice",t)},toReversed(){return os(this).toReversed()},toSorted(t){return os(this).toSorted(t)},toSpliced(...t){return os(this).toSpliced(...t)},unshift(...t){return Us(this,"unshift",t)},values(){return ao(this,"values",qe)}};function ao(t,e,n){const s=fa(t),i=s[e]();return s!==t&&!It(t)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.value&&(o.value=n(o.value)),o}),i}const Ip=Array.prototype;function Wt(t,e,n,s,i,o){const a=fa(t),l=a!==t&&!It(t),u=a[e];if(u!==Ip[e]){const g=u.apply(t,o);return l?qe(g):g}let f=n;a!==t&&(l?f=function(g,w){return n.call(this,qe(g),w,t)}:n.length>2&&(f=function(g,w){return n.call(this,g,w,t)}));const p=u.call(a,f,s);return l&&i?i(p):p}function Vc(t,e,n,s){const i=fa(t);let o=n;return i!==t&&(It(t)?n.length>3&&(o=function(a,l,u){return n.call(this,a,l,u,t)}):o=function(a,l,u){return n.call(this,a,qe(l),u,t)}),i[e](o,...s)}function co(t,e,n){const s=ge(t);Be(s,"iterate",ri);const i=s[e](...n);return(i===-1||i===!1)&&ga(n[0])?(n[0]=ge(n[0]),s[e](...n)):i}function Us(t,e,n=[]){Zt(),ca();const s=ge(t)[e].apply(t,n);return la(),en(),s}const bp=na("__proto__,__v_isRef,__isVue"),Zu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Cn));function Ep(t){Cn(t)||(t=String(t));const e=ge(this);return Be(e,"has",t),e.hasOwnProperty(t)}class eh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(i?o?Dp:ih:o?sh:nh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const a=te(e);if(!i){let u;if(a&&(u=wp[n]))return u;if(n==="hasOwnProperty")return Ep}const l=Reflect.get(e,n,He(e)?e:s);return(Cn(n)?Zu.has(n):bp(n))||(i||Be(e,"get",n),o)?l:He(l)?a&&ra(n)?l:l.value:Te(l)?i?oh(l):Tr(l):l}}class th extends eh{constructor(e=!1){super(!1,e)}set(e,n,s,i){let o=e[n];if(!this._isShallow){const u=qn(o);if(!It(s)&&!qn(s)&&(o=ge(o),s=ge(s)),!te(e)&&He(o)&&!He(s))return u?!1:(o.value=s,!0)}const a=te(e)&&ra(n)?Number(n)<e.length:_e(e,n),l=Reflect.set(e,n,s,He(e)?e:i);return e===ge(i)&&(a?bn(s,o)&&Kt(e,"set",n,s):Kt(e,"add",n,s)),l}deleteProperty(e,n){const s=_e(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Kt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Cn(n)||!Zu.has(n))&&Be(e,"has",n),s}ownKeys(e){return Be(e,"iterate",te(e)?"length":Bn),Reflect.ownKeys(e)}}class Tp extends eh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Sp=new th,Ap=new Tp,Cp=new th(!0);const xo=t=>t,ji=t=>Reflect.getPrototypeOf(t);function Rp(t,e,n){return function(...s){const i=this.__v_raw,o=ge(i),a=us(o),l=t==="entries"||t===Symbol.iterator&&a,u=t==="keys"&&a,f=i[t](...s),p=n?xo:e?Mo:qe;return!e&&Be(o,"iterate",u?Do:Bn),{next(){const{value:g,done:w}=f.next();return w?{value:g,done:w}:{value:l?[p(g[0]),p(g[1])]:p(g),done:w}},[Symbol.iterator](){return this}}}}function Vi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Pp(t,e){const n={get(i){const o=this.__v_raw,a=ge(o),l=ge(i);t||(bn(i,l)&&Be(a,"get",i),Be(a,"get",l));const{has:u}=ji(a),f=e?xo:t?Mo:qe;if(u.call(a,i))return f(o.get(i));if(u.call(a,l))return f(o.get(l));o!==a&&o.get(i)},get size(){const i=this.__v_raw;return!t&&Be(ge(i),"iterate",Bn),Reflect.get(i,"size",i)},has(i){const o=this.__v_raw,a=ge(o),l=ge(i);return t||(bn(i,l)&&Be(a,"has",i),Be(a,"has",l)),i===l?o.has(i):o.has(i)||o.has(l)},forEach(i,o){const a=this,l=a.__v_raw,u=ge(l),f=e?xo:t?Mo:qe;return!t&&Be(u,"iterate",Bn),l.forEach((p,g)=>i.call(o,f(p),f(g),a))}};return De(n,t?{add:Vi("add"),set:Vi("set"),delete:Vi("delete"),clear:Vi("clear")}:{add(i){!e&&!It(i)&&!qn(i)&&(i=ge(i));const o=ge(this);return ji(o).has.call(o,i)||(o.add(i),Kt(o,"add",i,i)),this},set(i,o){!e&&!It(o)&&!qn(o)&&(o=ge(o));const a=ge(this),{has:l,get:u}=ji(a);let f=l.call(a,i);f||(i=ge(i),f=l.call(a,i));const p=u.call(a,i);return a.set(i,o),f?bn(o,p)&&Kt(a,"set",i,o):Kt(a,"add",i,o),this},delete(i){const o=ge(this),{has:a,get:l}=ji(o);let u=a.call(o,i);u||(i=ge(i),u=a.call(o,i)),l&&l.call(o,i);const f=o.delete(i);return u&&Kt(o,"delete",i,void 0),f},clear(){const i=ge(this),o=i.size!==0,a=i.clear();return o&&Kt(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Rp(i,t,e)}),n}function da(t,e){const n=Pp(t,e);return(s,i,o)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(_e(n,i)&&i in s?n:s,i,o)}const Op={get:da(!1,!1)},kp={get:da(!1,!0)},Np={get:da(!0,!1)};const nh=new WeakMap,sh=new WeakMap,ih=new WeakMap,Dp=new WeakMap;function xp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mp(t){return t.__v_skip||!Object.isExtensible(t)?0:xp(rp(t))}function Tr(t){return qn(t)?t:pa(t,!1,Sp,Op,nh)}function rh(t){return pa(t,!1,Cp,kp,sh)}function oh(t){return pa(t,!0,Ap,Np,ih)}function pa(t,e,n,s,i){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=Mp(t);if(o===0)return t;const a=i.get(t);if(a)return a;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Ws(t){return qn(t)?Ws(t.__v_raw):!!(t&&t.__v_isReactive)}function qn(t){return!!(t&&t.__v_isReadonly)}function It(t){return!!(t&&t.__v_isShallow)}function ga(t){return t?!!t.__v_raw:!1}function ge(t){const e=t&&t.__v_raw;return e?ge(e):t}function Lp(t){return!_e(t,"__v_skip")&&Object.isExtensible(t)&&Oo(t,"__v_skip",!0),t}const qe=t=>Te(t)?Tr(t):t,Mo=t=>Te(t)?oh(t):t;function He(t){return t?t.__v_isRef===!0:!1}function zs(t){return ah(t,!1)}function Up(t){return ah(t,!0)}function ah(t,e){return He(t)?t:new Fp(t,e)}class Fp{constructor(e,n){this.dep=new ha,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ge(e),this._value=n?e:qe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||It(e)||qn(e);e=s?e:ge(e),bn(e,n)&&(this._rawValue=e,this._value=s?e:qe(e),this.dep.trigger())}}function Hn(t){return He(t)?t.value:t}const jp={get:(t,e,n)=>e==="__v_raw"?t:Hn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return He(i)&&!He(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ch(t){return Ws(t)?t:new Proxy(t,jp)}class Vp{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ha(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ii-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ie!==this)return qu(this,!0),!0}get value(){const e=this.dep.track();return Xu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function $p(t,e,n=!1){let s,i;return ne(t)?s=t:(s=t.get,i=t.set),new Vp(s,i,n)}const $i={},nr=new WeakMap;let Mn;function Bp(t,e=!1,n=Mn){if(n){let s=nr.get(n);s||nr.set(n,s=[]),s.push(t)}}function Hp(t,e,n=be){const{immediate:s,deep:i,once:o,scheduler:a,augmentJob:l,call:u}=n,f=B=>i?B:It(B)||i===!1||i===0?yn(B,1):yn(B);let p,g,w,A,N=!1,L=!1;if(He(t)?(g=()=>t.value,N=It(t)):Ws(t)?(g=()=>f(t),N=!0):te(t)?(L=!0,N=t.some(B=>Ws(B)||It(B)),g=()=>t.map(B=>{if(He(B))return B.value;if(Ws(B))return f(B);if(ne(B))return u?u(B,2):B()})):ne(t)?e?g=u?()=>u(t,2):t:g=()=>{if(w){Zt();try{w()}finally{en()}}const B=Mn;Mn=p;try{return u?u(t,3,[A]):t(A)}finally{Mn=B}}:g=Ut,e&&i){const B=g,se=i===!0?1/0:i;g=()=>yn(B(),se)}const G=_p(),q=()=>{p.stop(),G&&G.active&&ia(G.effects,p)};if(o&&e){const B=e;e=(...se)=>{B(...se),q()}}let V=L?new Array(t.length).fill($i):$i;const $=B=>{if(!(!(p.flags&1)||!p.dirty&&!B))if(e){const se=p.run();if(i||N||(L?se.some((ie,S)=>bn(ie,V[S])):bn(se,V))){w&&w();const ie=Mn;Mn=p;try{const S=[se,V===$i?void 0:L&&V[0]===$i?[]:V,A];V=se,u?u(e,3,S):e(...S)}finally{Mn=ie}}}else p.run()};return l&&l($),p=new zu(g),p.scheduler=a?()=>a($,!1):$,A=B=>Bp(B,!1,p),w=p.onStop=()=>{const B=nr.get(p);if(B){if(u)u(B,4);else for(const se of B)se();nr.delete(p)}},e?s?$(!0):V=p.run():a?a($.bind(null,!0),!0):p.run(),q.pause=p.pause.bind(p),q.resume=p.resume.bind(p),q.stop=q,q}function yn(t,e=1/0,n){if(e<=0||!Te(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,He(t))yn(t.value,e,n);else if(te(t))for(let s=0;s<t.length;s++)yn(t[s],e,n);else if(Uu(t)||us(t))t.forEach(s=>{yn(s,e,n)});else if(Vu(t)){for(const s in t)yn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&yn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mi(t,e,n,s){try{return s?t(...s):t()}catch(i){Sr(i,e,n)}}function Tt(t,e,n,s){if(ne(t)){const i=mi(t,e,n,s);return i&&Fu(i)&&i.catch(o=>{Sr(o,e,n)}),i}if(te(t)){const i=[];for(let o=0;o<t.length;o++)i.push(Tt(t[o],e,n,s));return i}}function Sr(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||be;if(e){let l=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const p=l.ec;if(p){for(let g=0;g<p.length;g++)if(p[g](t,u,f)===!1)return}l=l.parent}if(o){Zt(),mi(o,null,10,[t,u,f]),en();return}}Wp(t,n,i,s,a)}function Wp(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Ke=[];let Ot=-1;const hs=[];let pn=null,as=0;const lh=Promise.resolve();let sr=null;function uh(t){const e=sr||lh;return t?e.then(this?t.bind(this):t):e}function zp(t){let e=Ot+1,n=Ke.length;for(;e<n;){const s=e+n>>>1,i=Ke[s],o=oi(i);o<t||o===t&&i.flags&2?e=s+1:n=s}return e}function ma(t){if(!(t.flags&1)){const e=oi(t),n=Ke[Ke.length-1];!n||!(t.flags&2)&&e>=oi(n)?Ke.push(t):Ke.splice(zp(e),0,t),t.flags|=1,hh()}}function hh(){sr||(sr=lh.then(dh))}function Gp(t){te(t)?hs.push(...t):pn&&t.id===-1?pn.splice(as+1,0,t):t.flags&1||(hs.push(t),t.flags|=1),hh()}function $c(t,e,n=Ot+1){for(;n<Ke.length;n++){const s=Ke[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ke.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function fh(t){if(hs.length){const e=[...new Set(hs)].sort((n,s)=>oi(n)-oi(s));if(hs.length=0,pn){pn.push(...e);return}for(pn=e,as=0;as<pn.length;as++){const n=pn[as];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}pn=null,as=0}}const oi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function dh(t){try{for(Ot=0;Ot<Ke.length;Ot++){const e=Ke[Ot];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),mi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ot<Ke.length;Ot++){const e=Ke[Ot];e&&(e.flags&=-2)}Ot=-1,Ke.length=0,fh(),sr=null,(Ke.length||hs.length)&&dh()}}let lt=null,ph=null;function ir(t){const e=lt;return lt=t,ph=t&&t.type.__scopeId||null,e}function gh(t,e=lt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Qc(-1);const o=ir(e);let a;try{a=t(...i)}finally{ir(o),s._d&&Qc(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function kn(t,e,n,s){const i=t.dirs,o=e&&e.dirs;for(let a=0;a<i.length;a++){const l=i[a];o&&(l.oldValue=o[a].value);let u=l.dir[s];u&&(Zt(),Tt(u,n,8,[t.el,l,t,e]),en())}}const qp=Symbol("_vte"),mh=t=>t.__isTeleport,gn=Symbol("_leaveCb"),Bi=Symbol("_enterCb");function Kp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Rr(()=>{t.isMounted=!0}),_a(()=>{t.isUnmounting=!0}),t}const ct=[Function,Array],_h={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ct,onEnter:ct,onAfterEnter:ct,onEnterCancelled:ct,onBeforeLeave:ct,onLeave:ct,onAfterLeave:ct,onLeaveCancelled:ct,onBeforeAppear:ct,onAppear:ct,onAfterAppear:ct,onAppearCancelled:ct},yh=t=>{const e=t.subTree;return e.component?yh(e.component):e},Jp={name:"BaseTransition",props:_h,setup(t,{slots:e}){const n=Xg(),s=Kp();return()=>{const i=e.default&&Ih(e.default(),!0);if(!i||!i.length)return;const o=vh(i),a=ge(t),{mode:l}=a;if(s.isLeaving)return lo(o);const u=Bc(o);if(!u)return lo(o);let f=Lo(u,a,s,n,g=>f=g);u.type!==Je&&ai(u,f);let p=n.subTree&&Bc(n.subTree);if(p&&p.type!==Je&&!Un(u,p)&&yh(n).type!==Je){let g=Lo(p,a,s,n);if(ai(p,g),l==="out-in"&&u.type!==Je)return s.isLeaving=!0,g.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete g.afterLeave,p=void 0},lo(o);l==="in-out"&&u.type!==Je?g.delayLeave=(w,A,N)=>{const L=wh(s,p);L[String(p.key)]=p,w[gn]=()=>{A(),w[gn]=void 0,delete f.delayedLeave,p=void 0},f.delayedLeave=()=>{N(),delete f.delayedLeave,p=void 0}}:p=void 0}else p&&(p=void 0);return o}}};function vh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Je){e=n;break}}return e}const Xp=Jp;function wh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Lo(t,e,n,s,i){const{appear:o,mode:a,persisted:l=!1,onBeforeEnter:u,onEnter:f,onAfterEnter:p,onEnterCancelled:g,onBeforeLeave:w,onLeave:A,onAfterLeave:N,onLeaveCancelled:L,onBeforeAppear:G,onAppear:q,onAfterAppear:V,onAppearCancelled:$}=e,B=String(t.key),se=wh(n,t),ie=(m,E)=>{m&&Tt(m,s,9,E)},S=(m,E)=>{const T=E[1];ie(m,E),te(m)?m.every(b=>b.length<=1)&&T():m.length<=1&&T()},_={mode:a,persisted:l,beforeEnter(m){let E=u;if(!n.isMounted)if(o)E=G||u;else return;m[gn]&&m[gn](!0);const T=se[B];T&&Un(t,T)&&T.el[gn]&&T.el[gn](),ie(E,[m])},enter(m){let E=f,T=p,b=g;if(!n.isMounted)if(o)E=q||f,T=V||p,b=$||g;else return;let v=!1;const ve=m[Bi]=ke=>{v||(v=!0,ke?ie(b,[m]):ie(T,[m]),_.delayedLeave&&_.delayedLeave(),m[Bi]=void 0)};E?S(E,[m,ve]):ve()},leave(m,E){const T=String(t.key);if(m[Bi]&&m[Bi](!0),n.isUnmounting)return E();ie(w,[m]);let b=!1;const v=m[gn]=ve=>{b||(b=!0,E(),ve?ie(L,[m]):ie(N,[m]),m[gn]=void 0,se[T]===t&&delete se[T])};se[T]=t,A?S(A,[m,v]):v()},clone(m){const E=Lo(m,e,n,s,i);return i&&i(E),E}};return _}function lo(t){if(Ar(t))return t=Sn(t),t.children=null,t}function Bc(t){if(!Ar(t))return mh(t.type)&&t.children?vh(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ne(n.default))return n.default()}}function ai(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ai(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ih(t,e=!1,n){let s=[],i=0;for(let o=0;o<t.length;o++){let a=t[o];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:o);a.type===Nt?(a.patchFlag&128&&i++,s=s.concat(Ih(a.children,e,l))):(e||a.type!==Je)&&s.push(l!=null?Sn(a,{key:l}):a)}if(i>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function bh(t,e){return ne(t)?De({name:t.name},e,{setup:t}):t}function Eh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Gs(t,e,n,s,i=!1){if(te(t)){t.forEach((N,L)=>Gs(N,e&&(te(e)?e[L]:e),n,s,i));return}if(qs(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Gs(t,e,n,s.component.subTree);return}const o=s.shapeFlag&4?Ia(s.component):s.el,a=i?null:o,{i:l,r:u}=t,f=e&&e.r,p=l.refs===be?l.refs={}:l.refs,g=l.setupState,w=ge(g),A=g===be?()=>!1:N=>_e(w,N);if(f!=null&&f!==u&&(Oe(f)?(p[f]=null,A(f)&&(g[f]=null)):He(f)&&(f.value=null)),ne(u))mi(u,l,12,[a,p]);else{const N=Oe(u),L=He(u);if(N||L){const G=()=>{if(t.f){const q=N?A(u)?g[u]:p[u]:u.value;i?te(q)&&ia(q,o):te(q)?q.includes(o)||q.push(o):N?(p[u]=[o],A(u)&&(g[u]=p[u])):(u.value=[o],t.k&&(p[t.k]=u.value))}else N?(p[u]=a,A(u)&&(g[u]=a)):L&&(u.value=a,t.k&&(p[t.k]=a))};a?(G.id=-1,tt(G,n)):G()}}}Er().requestIdleCallback;Er().cancelIdleCallback;const qs=t=>!!t.type.__asyncLoader,Ar=t=>t.type.__isKeepAlive;function Yp(t,e){Th(t,"a",e)}function Qp(t,e){Th(t,"da",e)}function Th(t,e,n=Fe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Cr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ar(i.parent.vnode)&&Zp(s,e,n,i),i=i.parent}}function Zp(t,e,n,s){const i=Cr(e,t,s,!0);Sh(()=>{ia(s[e],i)},n)}function Cr(t,e,n=Fe,s=!1){if(n){const i=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{Zt();const l=_i(n),u=Tt(e,n,t,a);return l(),en(),u});return s?i.unshift(o):i.push(o),o}}const sn=t=>(e,n=Fe)=>{(!li||t==="sp")&&Cr(t,(...s)=>e(...s),n)},eg=sn("bm"),Rr=sn("m"),tg=sn("bu"),ng=sn("u"),_a=sn("bum"),Sh=sn("um"),sg=sn("sp"),ig=sn("rtg"),rg=sn("rtc");function og(t,e=Fe){Cr("ec",t,e)}const ag="components";function cg(t,e){return ug(ag,t,!0,e)||t}const lg=Symbol.for("v-ndc");function ug(t,e,n=!0,s=!1){const i=lt||Fe;if(i){const o=i.type;{const l=tm(o,!1);if(l&&(l===e||l===ht(e)||l===br(ht(e))))return o}const a=Hc(i[t]||o[t],e)||Hc(i.appContext[t],e);return!a&&s?o:a}}function Hc(t,e){return t&&(t[e]||t[ht(e)]||t[br(ht(e))])}const Uo=t=>t?zh(t)?Ia(t):Uo(t.parent):null,Ks=De(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Uo(t.parent),$root:t=>Uo(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ch(t),$forceUpdate:t=>t.f||(t.f=()=>{ma(t.update)}),$nextTick:t=>t.n||(t.n=uh.bind(t.proxy)),$watch:t=>kg.bind(t)}),uo=(t,e)=>t!==be&&!t.__isScriptSetup&&_e(t,e),hg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:o,accessCache:a,type:l,appContext:u}=t;let f;if(e[0]!=="$"){const A=a[e];if(A!==void 0)switch(A){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return o[e]}else{if(uo(s,e))return a[e]=1,s[e];if(i!==be&&_e(i,e))return a[e]=2,i[e];if((f=t.propsOptions[0])&&_e(f,e))return a[e]=3,o[e];if(n!==be&&_e(n,e))return a[e]=4,n[e];Fo&&(a[e]=0)}}const p=Ks[e];let g,w;if(p)return e==="$attrs"&&Be(t.attrs,"get",""),p(t);if((g=l.__cssModules)&&(g=g[e]))return g;if(n!==be&&_e(n,e))return a[e]=4,n[e];if(w=u.config.globalProperties,_e(w,e))return w[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:o}=t;return uo(i,e)?(i[e]=n,!0):s!==be&&_e(s,e)?(s[e]=n,!0):_e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:o}},a){let l;return!!n[a]||t!==be&&_e(t,a)||uo(e,a)||(l=o[0])&&_e(l,a)||_e(s,a)||_e(Ks,a)||_e(i.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Wc(t){return te(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Fo=!0;function fg(t){const e=Ch(t),n=t.proxy,s=t.ctx;Fo=!1,e.beforeCreate&&zc(e.beforeCreate,t,"bc");const{data:i,computed:o,methods:a,watch:l,provide:u,inject:f,created:p,beforeMount:g,mounted:w,beforeUpdate:A,updated:N,activated:L,deactivated:G,beforeDestroy:q,beforeUnmount:V,destroyed:$,unmounted:B,render:se,renderTracked:ie,renderTriggered:S,errorCaptured:_,serverPrefetch:m,expose:E,inheritAttrs:T,components:b,directives:v,filters:ve}=e;if(f&&dg(f,s,null),a)for(const ce in a){const ae=a[ce];ne(ae)&&(s[ce]=ae.bind(n))}if(i){const ce=i.call(n,n);Te(ce)&&(t.data=Tr(ce))}if(Fo=!0,o)for(const ce in o){const ae=o[ce],et=ne(ae)?ae.bind(n,n):ne(ae.get)?ae.get.bind(n,n):Ut,ft=!ne(ae)&&ne(ae.set)?ae.set.bind(n):Ut,it=gt({get:et,set:ft});Object.defineProperty(s,ce,{enumerable:!0,configurable:!0,get:()=>it.value,set:Ae=>it.value=Ae})}if(l)for(const ce in l)Ah(l[ce],s,n,ce);if(u){const ce=ne(u)?u.call(n):u;Reflect.ownKeys(ce).forEach(ae=>{Gi(ae,ce[ae])})}p&&zc(p,t,"c");function Se(ce,ae){te(ae)?ae.forEach(et=>ce(et.bind(n))):ae&&ce(ae.bind(n))}if(Se(eg,g),Se(Rr,w),Se(tg,A),Se(ng,N),Se(Yp,L),Se(Qp,G),Se(og,_),Se(rg,ie),Se(ig,S),Se(_a,V),Se(Sh,B),Se(sg,m),te(E))if(E.length){const ce=t.exposed||(t.exposed={});E.forEach(ae=>{Object.defineProperty(ce,ae,{get:()=>n[ae],set:et=>n[ae]=et})})}else t.exposed||(t.exposed={});se&&t.render===Ut&&(t.render=se),T!=null&&(t.inheritAttrs=T),b&&(t.components=b),v&&(t.directives=v),m&&Eh(t)}function dg(t,e,n=Ut){te(t)&&(t=jo(t));for(const s in t){const i=t[s];let o;Te(i)?"default"in i?o=Ft(i.from||s,i.default,!0):o=Ft(i.from||s):o=Ft(i),He(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function zc(t,e,n){Tt(te(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ah(t,e,n,s){let i=s.includes(".")?Vh(n,s):()=>n[s];if(Oe(t)){const o=e[t];ne(o)&&qi(i,o)}else if(ne(t))qi(i,t.bind(n));else if(Te(t))if(te(t))t.forEach(o=>Ah(o,e,n,s));else{const o=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(o)&&qi(i,o,t)}}function Ch(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,l=o.get(e);let u;return l?u=l:!i.length&&!n&&!s?u=e:(u={},i.length&&i.forEach(f=>rr(u,f,a,!0)),rr(u,e,a)),Te(e)&&o.set(e,u),u}function rr(t,e,n,s=!1){const{mixins:i,extends:o}=e;o&&rr(t,o,n,!0),i&&i.forEach(a=>rr(t,a,n,!0));for(const a in e)if(!(s&&a==="expose")){const l=pg[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const pg={data:Gc,props:qc,emits:qc,methods:Vs,computed:Vs,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:Vs,directives:Vs,watch:mg,provide:Gc,inject:gg};function Gc(t,e){return e?t?function(){return De(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function gg(t,e){return Vs(jo(t),jo(e))}function jo(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ze(t,e){return t?[...new Set([].concat(t,e))]:e}function Vs(t,e){return t?De(Object.create(null),t,e):e}function qc(t,e){return t?te(t)&&te(e)?[...new Set([...t,...e])]:De(Object.create(null),Wc(t),Wc(e??{})):e}function mg(t,e){if(!t)return e;if(!e)return t;const n=De(Object.create(null),t);for(const s in e)n[s]=ze(t[s],e[s]);return n}function Rh(){return{app:null,config:{isNativeTag:sp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _g=0;function yg(t,e){return function(s,i=null){ne(s)||(s=De({},s)),i!=null&&!Te(i)&&(i=null);const o=Rh(),a=new WeakSet,l=[];let u=!1;const f=o.app={_uid:_g++,_component:s,_props:i,_container:null,_context:o,_instance:null,version:sm,get config(){return o.config},set config(p){},use(p,...g){return a.has(p)||(p&&ne(p.install)?(a.add(p),p.install(f,...g)):ne(p)&&(a.add(p),p(f,...g))),f},mixin(p){return o.mixins.includes(p)||o.mixins.push(p),f},component(p,g){return g?(o.components[p]=g,f):o.components[p]},directive(p,g){return g?(o.directives[p]=g,f):o.directives[p]},mount(p,g,w){if(!u){const A=f._ceVNode||Ne(s,i);return A.appContext=o,w===!0?w="svg":w===!1&&(w=void 0),t(A,p,w),u=!0,f._container=p,p.__vue_app__=f,Ia(A.component)}},onUnmount(p){l.push(p)},unmount(){u&&(Tt(l,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(p,g){return o.provides[p]=g,f},runWithContext(p){const g=fs;fs=f;try{return p()}finally{fs=g}}};return f}}let fs=null;function Gi(t,e){if(Fe){let n=Fe.provides;const s=Fe.parent&&Fe.parent.provides;s===n&&(n=Fe.provides=Object.create(s)),n[t]=e}}function Ft(t,e,n=!1){const s=Fe||lt;if(s||fs){let i=fs?fs._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ne(e)?e.call(s&&s.proxy):e}}const Ph={},Oh=()=>Object.create(Ph),kh=t=>Object.getPrototypeOf(t)===Ph;function vg(t,e,n,s=!1){const i={},o=Oh();t.propsDefaults=Object.create(null),Nh(t,e,i,o);for(const a in t.propsOptions[0])a in i||(i[a]=void 0);n?t.props=s?i:rh(i):t.type.props?t.props=i:t.props=o,t.attrs=o}function wg(t,e,n,s){const{props:i,attrs:o,vnode:{patchFlag:a}}=t,l=ge(i),[u]=t.propsOptions;let f=!1;if((s||a>0)&&!(a&16)){if(a&8){const p=t.vnode.dynamicProps;for(let g=0;g<p.length;g++){let w=p[g];if(Pr(t.emitsOptions,w))continue;const A=e[w];if(u)if(_e(o,w))A!==o[w]&&(o[w]=A,f=!0);else{const N=ht(w);i[N]=Vo(u,l,N,A,t,!1)}else A!==o[w]&&(o[w]=A,f=!0)}}}else{Nh(t,e,i,o)&&(f=!0);let p;for(const g in l)(!e||!_e(e,g)&&((p=Qn(g))===g||!_e(e,p)))&&(u?n&&(n[g]!==void 0||n[p]!==void 0)&&(i[g]=Vo(u,l,g,void 0,t,!0)):delete i[g]);if(o!==l)for(const g in o)(!e||!_e(e,g))&&(delete o[g],f=!0)}f&&Kt(t.attrs,"set","")}function Nh(t,e,n,s){const[i,o]=t.propsOptions;let a=!1,l;if(e)for(let u in e){if($s(u))continue;const f=e[u];let p;i&&_e(i,p=ht(u))?!o||!o.includes(p)?n[p]=f:(l||(l={}))[p]=f:Pr(t.emitsOptions,u)||(!(u in s)||f!==s[u])&&(s[u]=f,a=!0)}if(o){const u=ge(n),f=l||be;for(let p=0;p<o.length;p++){const g=o[p];n[g]=Vo(i,u,g,f[g],t,!_e(f,g))}}return a}function Vo(t,e,n,s,i,o){const a=t[n];if(a!=null){const l=_e(a,"default");if(l&&s===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&ne(u)){const{propsDefaults:f}=i;if(n in f)s=f[n];else{const p=_i(i);s=f[n]=u.call(null,e),p()}}else s=u;i.ce&&i.ce._setProp(n,s)}a[0]&&(o&&!l?s=!1:a[1]&&(s===""||s===Qn(n))&&(s=!0))}return s}const Ig=new WeakMap;function Dh(t,e,n=!1){const s=n?Ig:e.propsCache,i=s.get(t);if(i)return i;const o=t.props,a={},l=[];let u=!1;if(!ne(t)){const p=g=>{u=!0;const[w,A]=Dh(g,e,!0);De(a,w),A&&l.push(...A)};!n&&e.mixins.length&&e.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!o&&!u)return Te(t)&&s.set(t,ls),ls;if(te(o))for(let p=0;p<o.length;p++){const g=ht(o[p]);Kc(g)&&(a[g]=be)}else if(o)for(const p in o){const g=ht(p);if(Kc(g)){const w=o[p],A=a[g]=te(w)||ne(w)?{type:w}:De({},w),N=A.type;let L=!1,G=!0;if(te(N))for(let q=0;q<N.length;++q){const V=N[q],$=ne(V)&&V.name;if($==="Boolean"){L=!0;break}else $==="String"&&(G=!1)}else L=ne(N)&&N.name==="Boolean";A[0]=L,A[1]=G,(L||_e(A,"default"))&&l.push(g)}}const f=[a,l];return Te(t)&&s.set(t,f),f}function Kc(t){return t[0]!=="$"&&!$s(t)}const ya=t=>t[0]==="_"||t==="$stable",va=t=>te(t)?t.map(Dt):[Dt(t)],bg=(t,e,n)=>{if(e._n)return e;const s=gh((...i)=>va(e(...i)),n);return s._c=!1,s},xh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ya(i))continue;const o=t[i];if(ne(o))e[i]=bg(i,o,s);else if(o!=null){const a=va(o);e[i]=()=>a}}},Mh=(t,e)=>{const n=va(e);t.slots.default=()=>n},Lh=(t,e,n)=>{for(const s in e)(n||!ya(s))&&(t[s]=e[s])},Eg=(t,e,n)=>{const s=t.slots=Oh();if(t.vnode.shapeFlag&32){const i=e.__;i&&Oo(s,"__",i,!0);const o=e._;o?(Lh(s,e,n),n&&Oo(s,"_",o,!0)):xh(e,s)}else e&&Mh(t,e)},Tg=(t,e,n)=>{const{vnode:s,slots:i}=t;let o=!0,a=be;if(s.shapeFlag&32){const l=e._;l?n&&l===1?o=!1:Lh(i,e,n):(o=!e.$stable,xh(e,i)),a=e}else e&&(Mh(t,e),a={default:1});if(o)for(const l in i)!ya(l)&&a[l]==null&&delete i[l]},tt=Fg;function Sg(t){return Ag(t)}function Ag(t,e){const n=Er();n.__VUE__=!0;const{insert:s,remove:i,patchProp:o,createElement:a,createText:l,createComment:u,setText:f,setElementText:p,parentNode:g,nextSibling:w,setScopeId:A=Ut,insertStaticContent:N}=t,L=(y,I,C,k=null,x=null,D=null,W=void 0,F=null,U=!!I.dynamicChildren)=>{if(y===I)return;y&&!Un(y,I)&&(k=O(y),Ae(y,x,D,!0),y=null),I.patchFlag===-2&&(U=!1,I.dynamicChildren=null);const{type:M,ref:Y,shapeFlag:H}=I;switch(M){case Or:G(y,I,C,k);break;case Je:q(y,I,C,k);break;case Ki:y==null&&V(I,C,k,W);break;case Nt:b(y,I,C,k,x,D,W,F,U);break;default:H&1?se(y,I,C,k,x,D,W,F,U):H&6?v(y,I,C,k,x,D,W,F,U):(H&64||H&128)&&M.process(y,I,C,k,x,D,W,F,U,J)}Y!=null&&x?Gs(Y,y&&y.ref,D,I||y,!I):Y==null&&y&&y.ref!=null&&Gs(y.ref,null,D,y,!0)},G=(y,I,C,k)=>{if(y==null)s(I.el=l(I.children),C,k);else{const x=I.el=y.el;I.children!==y.children&&f(x,I.children)}},q=(y,I,C,k)=>{y==null?s(I.el=u(I.children||""),C,k):I.el=y.el},V=(y,I,C,k)=>{[y.el,y.anchor]=N(y.children,I,C,k,y.el,y.anchor)},$=({el:y,anchor:I},C,k)=>{let x;for(;y&&y!==I;)x=w(y),s(y,C,k),y=x;s(I,C,k)},B=({el:y,anchor:I})=>{let C;for(;y&&y!==I;)C=w(y),i(y),y=C;i(I)},se=(y,I,C,k,x,D,W,F,U)=>{I.type==="svg"?W="svg":I.type==="math"&&(W="mathml"),y==null?ie(I,C,k,x,D,W,F,U):m(y,I,x,D,W,F,U)},ie=(y,I,C,k,x,D,W,F)=>{let U,M;const{props:Y,shapeFlag:H,transition:X,dirs:Z}=y;if(U=y.el=a(y.type,D,Y&&Y.is,Y),H&8?p(U,y.children):H&16&&_(y.children,U,null,k,x,ho(y,D),W,F),Z&&kn(y,null,k,"created"),S(U,y,y.scopeId,W,k),Y){for(const re in Y)re!=="value"&&!$s(re)&&o(U,re,null,Y[re],D,k);"value"in Y&&o(U,"value",null,Y.value,D),(M=Y.onVnodeBeforeMount)&&Pt(M,k,y)}Z&&kn(y,null,k,"beforeMount");const Q=Cg(x,X);Q&&X.beforeEnter(U),s(U,I,C),((M=Y&&Y.onVnodeMounted)||Q||Z)&&tt(()=>{M&&Pt(M,k,y),Q&&X.enter(U),Z&&kn(y,null,k,"mounted")},x)},S=(y,I,C,k,x)=>{if(C&&A(y,C),k)for(let D=0;D<k.length;D++)A(y,k[D]);if(x){let D=x.subTree;if(I===D||Bh(D.type)&&(D.ssContent===I||D.ssFallback===I)){const W=x.vnode;S(y,W,W.scopeId,W.slotScopeIds,x.parent)}}},_=(y,I,C,k,x,D,W,F,U=0)=>{for(let M=U;M<y.length;M++){const Y=y[M]=F?mn(y[M]):Dt(y[M]);L(null,Y,I,C,k,x,D,W,F)}},m=(y,I,C,k,x,D,W)=>{const F=I.el=y.el;let{patchFlag:U,dynamicChildren:M,dirs:Y}=I;U|=y.patchFlag&16;const H=y.props||be,X=I.props||be;let Z;if(C&&Nn(C,!1),(Z=X.onVnodeBeforeUpdate)&&Pt(Z,C,I,y),Y&&kn(I,y,C,"beforeUpdate"),C&&Nn(C,!0),(H.innerHTML&&X.innerHTML==null||H.textContent&&X.textContent==null)&&p(F,""),M?E(y.dynamicChildren,M,F,C,k,ho(I,x),D):W||ae(y,I,F,null,C,k,ho(I,x),D,!1),U>0){if(U&16)T(F,H,X,C,x);else if(U&2&&H.class!==X.class&&o(F,"class",null,X.class,x),U&4&&o(F,"style",H.style,X.style,x),U&8){const Q=I.dynamicProps;for(let re=0;re<Q.length;re++){const le=Q[re],xe=H[le],Me=X[le];(Me!==xe||le==="value")&&o(F,le,xe,Me,x,C)}}U&1&&y.children!==I.children&&p(F,I.children)}else!W&&M==null&&T(F,H,X,C,x);((Z=X.onVnodeUpdated)||Y)&&tt(()=>{Z&&Pt(Z,C,I,y),Y&&kn(I,y,C,"updated")},k)},E=(y,I,C,k,x,D,W)=>{for(let F=0;F<I.length;F++){const U=y[F],M=I[F],Y=U.el&&(U.type===Nt||!Un(U,M)||U.shapeFlag&198)?g(U.el):C;L(U,M,Y,null,k,x,D,W,!0)}},T=(y,I,C,k,x)=>{if(I!==C){if(I!==be)for(const D in I)!$s(D)&&!(D in C)&&o(y,D,I[D],null,x,k);for(const D in C){if($s(D))continue;const W=C[D],F=I[D];W!==F&&D!=="value"&&o(y,D,F,W,x,k)}"value"in C&&o(y,"value",I.value,C.value,x)}},b=(y,I,C,k,x,D,W,F,U)=>{const M=I.el=y?y.el:l(""),Y=I.anchor=y?y.anchor:l("");let{patchFlag:H,dynamicChildren:X,slotScopeIds:Z}=I;Z&&(F=F?F.concat(Z):Z),y==null?(s(M,C,k),s(Y,C,k),_(I.children||[],C,Y,x,D,W,F,U)):H>0&&H&64&&X&&y.dynamicChildren?(E(y.dynamicChildren,X,C,x,D,W,F),(I.key!=null||x&&I===x.subTree)&&Uh(y,I,!0)):ae(y,I,C,Y,x,D,W,F,U)},v=(y,I,C,k,x,D,W,F,U)=>{I.slotScopeIds=F,y==null?I.shapeFlag&512?x.ctx.activate(I,C,k,W,U):ve(I,C,k,x,D,W,U):ke(y,I,U)},ve=(y,I,C,k,x,D,W)=>{const F=y.component=Jg(y,k,x);if(Ar(y)&&(F.ctx.renderer=J),Yg(F,!1,W),F.asyncDep){if(x&&x.registerDep(F,Se,W),!y.el){const U=F.subTree=Ne(Je);q(null,U,I,C)}}else Se(F,y,I,C,x,D,W)},ke=(y,I,C)=>{const k=I.component=y.component;if(Lg(y,I,C))if(k.asyncDep&&!k.asyncResolved){ce(k,I,C);return}else k.next=I,k.update();else I.el=y.el,k.vnode=I},Se=(y,I,C,k,x,D,W)=>{const F=()=>{if(y.isMounted){let{next:H,bu:X,u:Z,parent:Q,vnode:re}=y;{const je=Fh(y);if(je){H&&(H.el=re.el,ce(y,H,W)),je.asyncDep.then(()=>{y.isUnmounted||F()});return}}let le=H,xe;Nn(y,!1),H?(H.el=re.el,ce(y,H,W)):H=re,X&&io(X),(xe=H.props&&H.props.onVnodeBeforeUpdate)&&Pt(xe,Q,H,re),Nn(y,!0);const Me=Xc(y),rt=y.subTree;y.subTree=Me,L(rt,Me,g(rt.el),O(rt),y,x,D),H.el=Me.el,le===null&&Ug(y,Me.el),Z&&tt(Z,x),(xe=H.props&&H.props.onVnodeUpdated)&&tt(()=>Pt(xe,Q,H,re),x)}else{let H;const{el:X,props:Z}=I,{bm:Q,m:re,parent:le,root:xe,type:Me}=y,rt=qs(I);Nn(y,!1),Q&&io(Q),!rt&&(H=Z&&Z.onVnodeBeforeMount)&&Pt(H,le,I),Nn(y,!0);{xe.ce&&xe.ce._def.shadowRoot!==!1&&xe.ce._injectChildStyle(Me);const je=y.subTree=Xc(y);L(null,je,C,k,y,x,D),I.el=je.el}if(re&&tt(re,x),!rt&&(H=Z&&Z.onVnodeMounted)){const je=I;tt(()=>Pt(H,le,je),x)}(I.shapeFlag&256||le&&qs(le.vnode)&&le.vnode.shapeFlag&256)&&y.a&&tt(y.a,x),y.isMounted=!0,I=C=k=null}};y.scope.on();const U=y.effect=new zu(F);y.scope.off();const M=y.update=U.run.bind(U),Y=y.job=U.runIfDirty.bind(U);Y.i=y,Y.id=y.uid,U.scheduler=()=>ma(Y),Nn(y,!0),M()},ce=(y,I,C)=>{I.component=y;const k=y.vnode.props;y.vnode=I,y.next=null,wg(y,I.props,k,C),Tg(y,I.children,C),Zt(),$c(y),en()},ae=(y,I,C,k,x,D,W,F,U=!1)=>{const M=y&&y.children,Y=y?y.shapeFlag:0,H=I.children,{patchFlag:X,shapeFlag:Z}=I;if(X>0){if(X&128){ft(M,H,C,k,x,D,W,F,U);return}else if(X&256){et(M,H,C,k,x,D,W,F,U);return}}Z&8?(Y&16&&Ye(M,x,D),H!==M&&p(C,H)):Y&16?Z&16?ft(M,H,C,k,x,D,W,F,U):Ye(M,x,D,!0):(Y&8&&p(C,""),Z&16&&_(H,C,k,x,D,W,F,U))},et=(y,I,C,k,x,D,W,F,U)=>{y=y||ls,I=I||ls;const M=y.length,Y=I.length,H=Math.min(M,Y);let X;for(X=0;X<H;X++){const Z=I[X]=U?mn(I[X]):Dt(I[X]);L(y[X],Z,C,null,x,D,W,F,U)}M>Y?Ye(y,x,D,!0,!1,H):_(I,C,k,x,D,W,F,U,H)},ft=(y,I,C,k,x,D,W,F,U)=>{let M=0;const Y=I.length;let H=y.length-1,X=Y-1;for(;M<=H&&M<=X;){const Z=y[M],Q=I[M]=U?mn(I[M]):Dt(I[M]);if(Un(Z,Q))L(Z,Q,C,null,x,D,W,F,U);else break;M++}for(;M<=H&&M<=X;){const Z=y[H],Q=I[X]=U?mn(I[X]):Dt(I[X]);if(Un(Z,Q))L(Z,Q,C,null,x,D,W,F,U);else break;H--,X--}if(M>H){if(M<=X){const Z=X+1,Q=Z<Y?I[Z].el:k;for(;M<=X;)L(null,I[M]=U?mn(I[M]):Dt(I[M]),C,Q,x,D,W,F,U),M++}}else if(M>X)for(;M<=H;)Ae(y[M],x,D,!0),M++;else{const Z=M,Q=M,re=new Map;for(M=Q;M<=X;M++){const Le=I[M]=U?mn(I[M]):Dt(I[M]);Le.key!=null&&re.set(Le.key,M)}let le,xe=0;const Me=X-Q+1;let rt=!1,je=0;const an=new Array(Me);for(M=0;M<Me;M++)an[M]=0;for(M=Z;M<=H;M++){const Le=y[M];if(xe>=Me){Ae(Le,x,D,!0);continue}let ot;if(Le.key!=null)ot=re.get(Le.key);else for(le=Q;le<=X;le++)if(an[le-Q]===0&&Un(Le,I[le])){ot=le;break}ot===void 0?Ae(Le,x,D,!0):(an[ot-Q]=M+1,ot>=je?je=ot:rt=!0,L(Le,I[ot],C,null,x,D,W,F,U),xe++)}const Ts=rt?Rg(an):ls;for(le=Ts.length-1,M=Me-1;M>=0;M--){const Le=Q+M,ot=I[Le],Ai=Le+1<Y?I[Le+1].el:k;an[M]===0?L(null,ot,C,Ai,x,D,W,F,U):rt&&(le<0||M!==Ts[le]?it(ot,C,Ai,2):le--)}}},it=(y,I,C,k,x=null)=>{const{el:D,type:W,transition:F,children:U,shapeFlag:M}=y;if(M&6){it(y.component.subTree,I,C,k);return}if(M&128){y.suspense.move(I,C,k);return}if(M&64){W.move(y,I,C,J);return}if(W===Nt){s(D,I,C);for(let H=0;H<U.length;H++)it(U[H],I,C,k);s(y.anchor,I,C);return}if(W===Ki){$(y,I,C);return}if(k!==2&&M&1&&F)if(k===0)F.beforeEnter(D),s(D,I,C),tt(()=>F.enter(D),x);else{const{leave:H,delayLeave:X,afterLeave:Z}=F,Q=()=>{y.ctx.isUnmounted?i(D):s(D,I,C)},re=()=>{H(D,()=>{Q(),Z&&Z()})};X?X(D,Q,re):re()}else s(D,I,C)},Ae=(y,I,C,k=!1,x=!1)=>{const{type:D,props:W,ref:F,children:U,dynamicChildren:M,shapeFlag:Y,patchFlag:H,dirs:X,cacheIndex:Z}=y;if(H===-2&&(x=!1),F!=null&&(Zt(),Gs(F,null,C,y,!0),en()),Z!=null&&(I.renderCache[Z]=void 0),Y&256){I.ctx.deactivate(y);return}const Q=Y&1&&X,re=!qs(y);let le;if(re&&(le=W&&W.onVnodeBeforeUnmount)&&Pt(le,I,y),Y&6)Rt(y.component,C,k);else{if(Y&128){y.suspense.unmount(C,k);return}Q&&kn(y,null,I,"beforeUnmount"),Y&64?y.type.remove(y,I,C,J,k):M&&!M.hasOnce&&(D!==Nt||H>0&&H&64)?Ye(M,I,C,!1,!0):(D===Nt&&H&384||!x&&Y&16)&&Ye(U,I,C),k&&Ce(y)}(re&&(le=W&&W.onVnodeUnmounted)||Q)&&tt(()=>{le&&Pt(le,I,y),Q&&kn(y,null,I,"unmounted")},C)},Ce=y=>{const{type:I,el:C,anchor:k,transition:x}=y;if(I===Nt){on(C,k);return}if(I===Ki){B(y);return}const D=()=>{i(C),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(y.shapeFlag&1&&x&&!x.persisted){const{leave:W,delayLeave:F}=x,U=()=>W(C,D);F?F(y.el,D,U):U()}else D()},on=(y,I)=>{let C;for(;y!==I;)C=w(y),i(y),y=C;i(I)},Rt=(y,I,C)=>{const{bum:k,scope:x,job:D,subTree:W,um:F,m:U,a:M,parent:Y,slots:{__:H}}=y;Jc(U),Jc(M),k&&io(k),Y&&te(H)&&H.forEach(X=>{Y.renderCache[X]=void 0}),x.stop(),D&&(D.flags|=8,Ae(W,y,I,C)),F&&tt(F,I),tt(()=>{y.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Ye=(y,I,C,k=!1,x=!1,D=0)=>{for(let W=D;W<y.length;W++)Ae(y[W],I,C,k,x)},O=y=>{if(y.shapeFlag&6)return O(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const I=w(y.anchor||y.el),C=I&&I[qp];return C?w(C):I};let K=!1;const z=(y,I,C)=>{y==null?I._vnode&&Ae(I._vnode,null,null,!0):L(I._vnode||null,y,I,null,null,null,C),I._vnode=y,K||(K=!0,$c(),fh(),K=!1)},J={p:L,um:Ae,m:it,r:Ce,mt:ve,mc:_,pc:ae,pbc:E,n:O,o:t};return{render:z,hydrate:void 0,createApp:yg(z)}}function ho({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Nn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Cg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Uh(t,e,n=!1){const s=t.children,i=e.children;if(te(s)&&te(i))for(let o=0;o<s.length;o++){const a=s[o];let l=i[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[o]=mn(i[o]),l.el=a.el),!n&&l.patchFlag!==-2&&Uh(a,l)),l.type===Or&&(l.el=a.el),l.type===Je&&!l.el&&(l.el=a.el)}}function Rg(t){const e=t.slice(),n=[0];let s,i,o,a,l;const u=t.length;for(s=0;s<u;s++){const f=t[s];if(f!==0){if(i=n[n.length-1],t[i]<f){e[s]=i,n.push(s);continue}for(o=0,a=n.length-1;o<a;)l=o+a>>1,t[n[l]]<f?o=l+1:a=l;f<t[n[o]]&&(o>0&&(e[s]=n[o-1]),n[o]=s)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function Fh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Fh(e)}function Jc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Pg=Symbol.for("v-scx"),Og=()=>Ft(Pg);function qi(t,e,n){return jh(t,e,n)}function jh(t,e,n=be){const{immediate:s,deep:i,flush:o,once:a}=n,l=De({},n),u=e&&s||!e&&o!=="post";let f;if(li){if(o==="sync"){const A=Og();f=A.__watcherHandles||(A.__watcherHandles=[])}else if(!u){const A=()=>{};return A.stop=Ut,A.resume=Ut,A.pause=Ut,A}}const p=Fe;l.call=(A,N,L)=>Tt(A,p,N,L);let g=!1;o==="post"?l.scheduler=A=>{tt(A,p&&p.suspense)}:o!=="sync"&&(g=!0,l.scheduler=(A,N)=>{N?A():ma(A)}),l.augmentJob=A=>{e&&(A.flags|=4),g&&(A.flags|=2,p&&(A.id=p.uid,A.i=p))};const w=Hp(t,e,l);return li&&(f?f.push(w):u&&w()),w}function kg(t,e,n){const s=this.proxy,i=Oe(t)?t.includes(".")?Vh(s,t):()=>s[t]:t.bind(s,s);let o;ne(e)?o=e:(o=e.handler,n=e);const a=_i(this),l=jh(i,o.bind(s),n);return a(),l}function Vh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Ng=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ht(e)}Modifiers`]||t[`${Qn(e)}Modifiers`];function Dg(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||be;let i=n;const o=e.startsWith("update:"),a=o&&Ng(s,e.slice(7));a&&(a.trim&&(i=n.map(p=>Oe(p)?p.trim():p)),a.number&&(i=n.map(cp)));let l,u=s[l=so(e)]||s[l=so(ht(e))];!u&&o&&(u=s[l=so(Qn(e))]),u&&Tt(u,t,6,i);const f=s[l+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Tt(f,t,6,i)}}function $h(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const o=t.emits;let a={},l=!1;if(!ne(t)){const u=f=>{const p=$h(f,e,!0);p&&(l=!0,De(a,p))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!o&&!l?(Te(t)&&s.set(t,null),null):(te(o)?o.forEach(u=>a[u]=null):De(a,o),Te(t)&&s.set(t,a),a)}function Pr(t,e){return!t||!vr(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(t,e[0].toLowerCase()+e.slice(1))||_e(t,Qn(e))||_e(t,e))}function Xc(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[o],slots:a,attrs:l,emit:u,render:f,renderCache:p,props:g,data:w,setupState:A,ctx:N,inheritAttrs:L}=t,G=ir(t);let q,V;try{if(n.shapeFlag&4){const B=i||s,se=B;q=Dt(f.call(se,B,p,g,A,w,N)),V=l}else{const B=e;q=Dt(B.length>1?B(g,{attrs:l,slots:a,emit:u}):B(g,null)),V=e.props?l:xg(l)}}catch(B){Js.length=0,Sr(B,t,1),q=Ne(Je)}let $=q;if(V&&L!==!1){const B=Object.keys(V),{shapeFlag:se}=$;B.length&&se&7&&(o&&B.some(sa)&&(V=Mg(V,o)),$=Sn($,V,!1,!0))}return n.dirs&&($=Sn($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&ai($,n.transition),q=$,ir(G),q}const xg=t=>{let e;for(const n in t)(n==="class"||n==="style"||vr(n))&&((e||(e={}))[n]=t[n]);return e},Mg=(t,e)=>{const n={};for(const s in t)(!sa(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Lg(t,e,n){const{props:s,children:i,component:o}=t,{props:a,children:l,patchFlag:u}=e,f=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?Yc(s,a,f):!!a;if(u&8){const p=e.dynamicProps;for(let g=0;g<p.length;g++){const w=p[g];if(a[w]!==s[w]&&!Pr(f,w))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===a?!1:s?a?Yc(s,a,f):!0:!!a;return!1}function Yc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const o=s[i];if(e[o]!==t[o]&&!Pr(n,o))return!0}return!1}function Ug({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Bh=t=>t.__isSuspense;function Fg(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):Gp(t)}const Nt=Symbol.for("v-fgt"),Or=Symbol.for("v-txt"),Je=Symbol.for("v-cmt"),Ki=Symbol.for("v-stc"),Js=[];let nt=null;function _t(t=!1){Js.push(nt=t?null:[])}function jg(){Js.pop(),nt=Js[Js.length-1]||null}let ci=1;function Qc(t,e=!1){ci+=t,t<0&&nt&&e&&(nt.hasOnce=!0)}function Hh(t){return t.dynamicChildren=ci>0?nt||ls:null,jg(),ci>0&&nt&&nt.push(t),t}function Mt(t,e,n,s,i,o){return Hh(oe(t,e,n,s,i,o,!0))}function Vg(t,e,n,s,i){return Hh(Ne(t,e,n,s,i,!0))}function or(t){return t?t.__v_isVNode===!0:!1}function Un(t,e){return t.type===e.type&&t.key===e.key}const Wh=({key:t})=>t??null,Ji=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Oe(t)||He(t)||ne(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function oe(t,e=null,n=null,s=0,i=null,o=t===Nt?0:1,a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wh(e),ref:e&&Ji(e),scopeId:ph,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:lt};return l?(wa(u,n),o&128&&t.normalize(u)):n&&(u.shapeFlag|=Oe(n)?8:16),ci>0&&!a&&nt&&(u.patchFlag>0||o&6)&&u.patchFlag!==32&&nt.push(u),u}const Ne=$g;function $g(t,e=null,n=null,s=0,i=null,o=!1){if((!t||t===lg)&&(t=Je),or(t)){const l=Sn(t,e,!0);return n&&wa(l,n),ci>0&&!o&&nt&&(l.shapeFlag&6?nt[nt.indexOf(t)]=l:nt.push(l)),l.patchFlag=-2,l}if(nm(t)&&(t=t.__vccOpts),e){e=Bg(e);let{class:l,style:u}=e;l&&!Oe(l)&&(e.class=aa(l)),Te(u)&&(ga(u)&&!te(u)&&(u=De({},u)),e.style=oa(u))}const a=Oe(t)?1:Bh(t)?128:mh(t)?64:Te(t)?4:ne(t)?2:0;return oe(t,e,n,s,i,a,o,!0)}function Bg(t){return t?ga(t)||kh(t)?De({},t):t:null}function Sn(t,e,n=!1,s=!1){const{props:i,ref:o,patchFlag:a,children:l,transition:u}=t,f=e?Gg(i||{},e):i,p={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&Wh(f),ref:e&&e.ref?n&&o?te(o)?o.concat(Ji(e)):[o,Ji(e)]:Ji(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Nt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Sn(t.ssContent),ssFallback:t.ssFallback&&Sn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&s&&ai(p,u.clone(p)),p}function Hg(t=" ",e=0){return Ne(Or,null,t,e)}function Wg(t,e){const n=Ne(Ki,null,t);return n.staticCount=e,n}function zg(t="",e=!1){return e?(_t(),Vg(Je,null,t)):Ne(Je,null,t)}function Dt(t){return t==null||typeof t=="boolean"?Ne(Je):te(t)?Ne(Nt,null,t.slice()):or(t)?mn(t):Ne(Or,null,String(t))}function mn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Sn(t)}function wa(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),wa(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!kh(e)?e._ctx=lt:i===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),s&64?(n=16,e=[Hg(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=aa([e.class,s.class]));else if(i==="style")e.style=oa([e.style,s.style]);else if(vr(i)){const o=e[i],a=s[i];a&&o!==a&&!(te(o)&&o.includes(a))&&(e[i]=o?[].concat(o,a):a)}else i!==""&&(e[i]=s[i])}return e}function Pt(t,e,n,s=null){Tt(t,e,7,[n,s])}const qg=Rh();let Kg=0;function Jg(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||qg,o={uid:Kg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new mp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dh(s,i),emitsOptions:$h(s,i),emit:null,emitted:null,propsDefaults:be,inheritAttrs:s.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Dg.bind(null,o),t.ce&&t.ce(o),o}let Fe=null;const Xg=()=>Fe||lt;let ar,$o;{const t=Er(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),o=>{i.length>1?i.forEach(a=>a(o)):i[0](o)}};ar=e("__VUE_INSTANCE_SETTERS__",n=>Fe=n),$o=e("__VUE_SSR_SETTERS__",n=>li=n)}const _i=t=>{const e=Fe;return ar(t),t.scope.on(),()=>{t.scope.off(),ar(e)}},Zc=()=>{Fe&&Fe.scope.off(),ar(null)};function zh(t){return t.vnode.shapeFlag&4}let li=!1;function Yg(t,e=!1,n=!1){e&&$o(e);const{props:s,children:i}=t.vnode,o=zh(t);vg(t,s,o,e),Eg(t,i,n||e);const a=o?Qg(t,e):void 0;return e&&$o(!1),a}function Qg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,hg);const{setup:s}=n;if(s){Zt();const i=t.setupContext=s.length>1?em(t):null,o=_i(t),a=mi(s,t,0,[t.props,i]),l=Fu(a);if(en(),o(),(l||t.sp)&&!qs(t)&&Eh(t),l){if(a.then(Zc,Zc),e)return a.then(u=>{el(t,u)}).catch(u=>{Sr(u,t,0)});t.asyncDep=a}else el(t,a)}else Gh(t)}function el(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=ch(e)),Gh(t)}function Gh(t,e,n){const s=t.type;t.render||(t.render=s.render||Ut);{const i=_i(t);Zt();try{fg(t)}finally{en(),i()}}}const Zg={get(t,e){return Be(t,"get",""),t[e]}};function em(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Zg),slots:t.slots,emit:t.emit,expose:e}}function Ia(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ch(Lp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ks)return Ks[n](t)},has(e,n){return n in e||n in Ks}})):t.proxy}function tm(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function nm(t){return ne(t)&&"__vccOpts"in t}const gt=(t,e)=>$p(t,e,li);function ba(t,e,n){const s=arguments.length;return s===2?Te(e)&&!te(e)?or(e)?Ne(t,null,[e]):Ne(t,e):Ne(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&or(n)&&(n=[n]),Ne(t,e,n))}const sm="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bo;const tl=typeof window<"u"&&window.trustedTypes;if(tl)try{Bo=tl.createPolicy("vue",{createHTML:t=>t})}catch{}const qh=Bo?t=>Bo.createHTML(t):t=>t,im="http://www.w3.org/2000/svg",rm="http://www.w3.org/1998/Math/MathML",qt=typeof document<"u"?document:null,nl=qt&&qt.createElement("template"),om={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?qt.createElementNS(im,t):e==="mathml"?qt.createElementNS(rm,t):n?qt.createElement(t,{is:n}):qt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>qt.createTextNode(t),createComment:t=>qt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,o){const a=n?n.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{nl.innerHTML=qh(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=nl.content;if(s==="svg"||s==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},hn="transition",Fs="animation",ui=Symbol("_vtc"),Kh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},am=De({},_h,Kh),cm=t=>(t.displayName="Transition",t.props=am,t),lm=cm((t,{slots:e})=>ba(Xp,um(t),e)),Dn=(t,e=[])=>{te(t)?t.forEach(n=>n(...e)):t&&t(...e)},sl=t=>t?te(t)?t.some(e=>e.length>1):t.length>1:!1;function um(t){const e={};for(const b in t)b in Kh||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:f=a,appearToClass:p=l,leaveFromClass:g=`${n}-leave-from`,leaveActiveClass:w=`${n}-leave-active`,leaveToClass:A=`${n}-leave-to`}=t,N=hm(i),L=N&&N[0],G=N&&N[1],{onBeforeEnter:q,onEnter:V,onEnterCancelled:$,onLeave:B,onLeaveCancelled:se,onBeforeAppear:ie=q,onAppear:S=V,onAppearCancelled:_=$}=e,m=(b,v,ve,ke)=>{b._enterCancelled=ke,xn(b,v?p:l),xn(b,v?f:a),ve&&ve()},E=(b,v)=>{b._isLeaving=!1,xn(b,g),xn(b,A),xn(b,w),v&&v()},T=b=>(v,ve)=>{const ke=b?S:V,Se=()=>m(v,b,ve);Dn(ke,[v,Se]),il(()=>{xn(v,b?u:o),zt(v,b?p:l),sl(ke)||rl(v,s,L,Se)})};return De(e,{onBeforeEnter(b){Dn(q,[b]),zt(b,o),zt(b,a)},onBeforeAppear(b){Dn(ie,[b]),zt(b,u),zt(b,f)},onEnter:T(!1),onAppear:T(!0),onLeave(b,v){b._isLeaving=!0;const ve=()=>E(b,v);zt(b,g),b._enterCancelled?(zt(b,w),cl()):(cl(),zt(b,w)),il(()=>{b._isLeaving&&(xn(b,g),zt(b,A),sl(B)||rl(b,s,G,ve))}),Dn(B,[b,ve])},onEnterCancelled(b){m(b,!1,void 0,!0),Dn($,[b])},onAppearCancelled(b){m(b,!0,void 0,!0),Dn(_,[b])},onLeaveCancelled(b){E(b),Dn(se,[b])}})}function hm(t){if(t==null)return null;if(Te(t))return[fo(t.enter),fo(t.leave)];{const e=fo(t);return[e,e]}}function fo(t){return lp(t)}function zt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ui]||(t[ui]=new Set)).add(e)}function xn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[ui];n&&(n.delete(e),n.size||(t[ui]=void 0))}function il(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let fm=0;function rl(t,e,n,s){const i=t._endId=++fm,o=()=>{i===t._endId&&s()};if(n!=null)return setTimeout(o,n);const{type:a,timeout:l,propCount:u}=dm(t,e);if(!a)return s();const f=a+"end";let p=0;const g=()=>{t.removeEventListener(f,w),o()},w=A=>{A.target===t&&++p>=u&&g()};setTimeout(()=>{p<u&&g()},l+1),t.addEventListener(f,w)}function dm(t,e){const n=window.getComputedStyle(t),s=N=>(n[N]||"").split(", "),i=s(`${hn}Delay`),o=s(`${hn}Duration`),a=ol(i,o),l=s(`${Fs}Delay`),u=s(`${Fs}Duration`),f=ol(l,u);let p=null,g=0,w=0;e===hn?a>0&&(p=hn,g=a,w=o.length):e===Fs?f>0&&(p=Fs,g=f,w=u.length):(g=Math.max(a,f),p=g>0?a>f?hn:Fs:null,w=p?p===hn?o.length:u.length:0);const A=p===hn&&/\b(transform|all)(,|$)/.test(s(`${hn}Property`).toString());return{type:p,timeout:g,propCount:w,hasTransform:A}}function ol(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>al(n)+al(t[s])))}function al(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function cl(){return document.body.offsetHeight}function pm(t,e,n){const s=t[ui];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ll=Symbol("_vod"),gm=Symbol("_vsh"),mm=Symbol(""),_m=/(^|;)\s*display\s*:/;function ym(t,e,n){const s=t.style,i=Oe(n);let o=!1;if(n&&!i){if(e)if(Oe(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Xi(s,l,"")}else for(const a in e)n[a]==null&&Xi(s,a,"");for(const a in n)a==="display"&&(o=!0),Xi(s,a,n[a])}else if(i){if(e!==n){const a=s[mm];a&&(n+=";"+a),s.cssText=n,o=_m.test(n)}}else e&&t.removeAttribute("style");ll in t&&(t[ll]=o?s.display:"",t[gm]&&(s.display="none"))}const ul=/\s*!important$/;function Xi(t,e,n){if(te(n))n.forEach(s=>Xi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=vm(t,e);ul.test(n)?t.setProperty(Qn(s),n.replace(ul,""),"important"):t[s]=n}}const hl=["Webkit","Moz","ms"],po={};function vm(t,e){const n=po[e];if(n)return n;let s=ht(e);if(s!=="filter"&&s in t)return po[e]=s;s=br(s);for(let i=0;i<hl.length;i++){const o=hl[i]+s;if(o in t)return po[e]=o}return e}const fl="http://www.w3.org/1999/xlink";function dl(t,e,n,s,i,o=gp(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(fl,e.slice(6,e.length)):t.setAttributeNS(fl,e,n):n==null||o&&!$u(n)?t.removeAttribute(e):t.setAttribute(e,o?"":Cn(n)?String(n):n)}function pl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?qh(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=$u(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(i||e)}function wm(t,e,n,s){t.addEventListener(e,n,s)}function Im(t,e,n,s){t.removeEventListener(e,n,s)}const gl=Symbol("_vei");function bm(t,e,n,s,i=null){const o=t[gl]||(t[gl]={}),a=o[e];if(s&&a)a.value=s;else{const[l,u]=Em(e);if(s){const f=o[e]=Am(s,i);wm(t,l,f,u)}else a&&(Im(t,l,a,u),o[e]=void 0)}}const ml=/(?:Once|Passive|Capture)$/;function Em(t){let e;if(ml.test(t)){e={};let s;for(;s=t.match(ml);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qn(t.slice(2)),e]}let go=0;const Tm=Promise.resolve(),Sm=()=>go||(Tm.then(()=>go=0),go=Date.now());function Am(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Tt(Cm(s,n.value),e,5,[s])};return n.value=t,n.attached=Sm(),n}function Cm(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const _l=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Rm=(t,e,n,s,i,o)=>{const a=i==="svg";e==="class"?pm(t,s,a):e==="style"?ym(t,n,s):vr(e)?sa(e)||bm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pm(t,e,s,a))?(pl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&dl(t,e,s,a,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Oe(s))?pl(t,ht(e),s,o,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),dl(t,e,s,a))};function Pm(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&_l(e)&&ne(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return _l(e)&&Oe(n)?!1:e in t}const Om=De({patchProp:Rm},om);let yl;function km(){return yl||(yl=Sg(Om))}const Nm=(...t)=>{const e=km().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=xm(s);if(!i)return;const o=e._component;!ne(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=n(i,!1,Dm(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},e};function Dm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function xm(t){return Oe(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const cs=typeof document<"u";function Jh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Mm(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Jh(t.default)}const me=Object.assign;function mo(t,e){const n={};for(const s in e){const i=e[s];n[s]=St(i)?i.map(t):t(i)}return n}const Xs=()=>{},St=Array.isArray,Xh=/#/g,Lm=/&/g,Um=/\//g,Fm=/=/g,jm=/\?/g,Yh=/\+/g,Vm=/%5B/g,$m=/%5D/g,Qh=/%5E/g,Bm=/%60/g,Zh=/%7B/g,Hm=/%7C/g,ef=/%7D/g,Wm=/%20/g;function Ea(t){return encodeURI(""+t).replace(Hm,"|").replace(Vm,"[").replace($m,"]")}function zm(t){return Ea(t).replace(Zh,"{").replace(ef,"}").replace(Qh,"^")}function Ho(t){return Ea(t).replace(Yh,"%2B").replace(Wm,"+").replace(Xh,"%23").replace(Lm,"%26").replace(Bm,"`").replace(Zh,"{").replace(ef,"}").replace(Qh,"^")}function Gm(t){return Ho(t).replace(Fm,"%3D")}function qm(t){return Ea(t).replace(Xh,"%23").replace(jm,"%3F")}function Km(t){return t==null?"":qm(t).replace(Um,"%2F")}function hi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Jm=/\/$/,Xm=t=>t.replace(Jm,"");function _o(t,e,n="/"){let s,i={},o="",a="";const l=e.indexOf("#");let u=e.indexOf("?");return l<u&&l>=0&&(u=-1),u>-1&&(s=e.slice(0,u),o=e.slice(u+1,l>-1?l:e.length),i=t(o)),l>-1&&(s=s||e.slice(0,l),a=e.slice(l,e.length)),s=e_(s??e,n),{fullPath:s+(o&&"?")+o+a,path:s,query:i,hash:hi(a)}}function Ym(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Qm(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ys(e.matched[s],n.matched[i])&&tf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ys(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function tf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Zm(t[n],e[n]))return!1;return!0}function Zm(t,e){return St(t)?wl(t,e):St(e)?wl(e,t):t===e}function wl(t,e){return St(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function e_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let o=n.length-1,a,l;for(a=0;a<s.length;a++)if(l=s[a],l!==".")if(l==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(a).join("/")}const fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var fi;(function(t){t.pop="pop",t.push="push"})(fi||(fi={}));var Ys;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ys||(Ys={}));function t_(t){if(!t)if(cs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Xm(t)}const n_=/^[^#]+#/;function s_(t,e){return t.replace(n_,"#")+e}function i_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const kr=()=>({left:window.scrollX,top:window.scrollY});function r_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=i_(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Il(t,e){return(history.state?history.state.position-e:-1)+t}const Wo=new Map;function o_(t,e){Wo.set(t,e)}function a_(t){const e=Wo.get(t);return Wo.delete(t),e}let c_=()=>location.protocol+"//"+location.host;function nf(t,e){const{pathname:n,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){let l=i.includes(t.slice(o))?t.slice(o).length:1,u=i.slice(l);return u[0]!=="/"&&(u="/"+u),vl(u,"")}return vl(n,t)+s+i}function l_(t,e,n,s){let i=[],o=[],a=null;const l=({state:w})=>{const A=nf(t,location),N=n.value,L=e.value;let G=0;if(w){if(n.value=A,e.value=w,a&&a===N){a=null;return}G=L?w.position-L.position:0}else s(A);i.forEach(q=>{q(n.value,N,{delta:G,type:fi.pop,direction:G?G>0?Ys.forward:Ys.back:Ys.unknown})})};function u(){a=n.value}function f(w){i.push(w);const A=()=>{const N=i.indexOf(w);N>-1&&i.splice(N,1)};return o.push(A),A}function p(){const{history:w}=window;w.state&&w.replaceState(me({},w.state,{scroll:kr()}),"")}function g(){for(const w of o)w();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:u,listen:f,destroy:g}}function bl(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?kr():null}}function u_(t){const{history:e,location:n}=window,s={value:nf(t,n)},i={value:e.state};i.value||o(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(u,f,p){const g=t.indexOf("#"),w=g>-1?(n.host&&document.querySelector("base")?t:t.slice(g))+u:c_()+t+u;try{e[p?"replaceState":"pushState"](f,"",w),i.value=f}catch(A){console.error(A),n[p?"replace":"assign"](w)}}function a(u,f){const p=me({},e.state,bl(i.value.back,u,i.value.forward,!0),f,{position:i.value.position});o(u,p,!0),s.value=u}function l(u,f){const p=me({},i.value,e.state,{forward:u,scroll:kr()});o(p.current,p,!0);const g=me({},bl(s.value,u,null),{position:p.position+1},f);o(u,g,!1),s.value=u}return{location:s,state:i,push:l,replace:a}}function h_(t){t=t_(t);const e=u_(t),n=l_(t,e.state,e.location,e.replace);function s(o,a=!0){a||n.pauseListeners(),history.go(o)}const i=me({location:"",base:t,go:s,createHref:s_.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function f_(t){return typeof t=="string"||t&&typeof t=="object"}function sf(t){return typeof t=="string"||typeof t=="symbol"}const rf=Symbol("");var El;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(El||(El={}));function vs(t,e){return me(new Error,{type:t,[rf]:!0},e)}function Gt(t,e){return t instanceof Error&&rf in t&&(e==null||!!(t.type&e))}const Tl="[^/]+?",d_={sensitive:!1,strict:!1,start:!0,end:!0},p_=/[.+*?^${}()[\]/\\]/g;function g_(t,e){const n=me({},d_,e),s=[];let i=n.start?"^":"";const o=[];for(const f of t){const p=f.length?[]:[90];n.strict&&!f.length&&(i+="/");for(let g=0;g<f.length;g++){const w=f[g];let A=40+(n.sensitive?.25:0);if(w.type===0)g||(i+="/"),i+=w.value.replace(p_,"\\$&"),A+=40;else if(w.type===1){const{value:N,repeatable:L,optional:G,regexp:q}=w;o.push({name:N,repeatable:L,optional:G});const V=q||Tl;if(V!==Tl){A+=10;try{new RegExp(`(${V})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${N}" (${V}): `+B.message)}}let $=L?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;g||($=G&&f.length<2?`(?:/${$})`:"/"+$),G&&($+="?"),i+=$,A+=20,G&&(A+=-8),L&&(A+=-20),V===".*"&&(A+=-50)}p.push(A)}s.push(p)}if(n.strict&&n.end){const f=s.length-1;s[f][s[f].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function l(f){const p=f.match(a),g={};if(!p)return null;for(let w=1;w<p.length;w++){const A=p[w]||"",N=o[w-1];g[N.name]=A&&N.repeatable?A.split("/"):A}return g}function u(f){let p="",g=!1;for(const w of t){(!g||!p.endsWith("/"))&&(p+="/"),g=!1;for(const A of w)if(A.type===0)p+=A.value;else if(A.type===1){const{value:N,repeatable:L,optional:G}=A,q=N in f?f[N]:"";if(St(q)&&!L)throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);const V=St(q)?q.join("/"):q;if(!V)if(G)w.length<2&&(p.endsWith("/")?p=p.slice(0,-1):g=!0);else throw new Error(`Missing required param "${N}"`);p+=V}}return p||"/"}return{re:a,score:s,keys:o,parse:l,stringify:u}}function m_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function of(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const o=m_(s[n],i[n]);if(o)return o;n++}if(Math.abs(i.length-s.length)===1){if(Sl(s))return 1;if(Sl(i))return-1}return i.length-s.length}function Sl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const __={type:0,value:""},y_=/[a-zA-Z0-9_]/;function v_(t){if(!t)return[[]];if(t==="/")return[[__]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(A){throw new Error(`ERR (${n})/"${f}": ${A}`)}let n=0,s=n;const i=[];let o;function a(){o&&i.push(o),o=[]}let l=0,u,f="",p="";function g(){f&&(n===0?o.push({type:0,value:f}):n===1||n===2||n===3?(o.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:p,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),f="")}function w(){f+=u}for(;l<t.length;){if(u=t[l++],u==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:u==="/"?(f&&g(),a()):u===":"?(g(),n=1):w();break;case 4:w(),n=s;break;case 1:u==="("?n=2:y_.test(u)?w():(g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--);break;case 2:u===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+u:n=3:p+=u;break;case 3:g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--,p="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),g(),a(),i}function w_(t,e,n){const s=g_(v_(t.path),n),i=me(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function I_(t,e){const n=[],s=new Map;e=Pl({strict:!1,end:!0,sensitive:!1},e);function i(g){return s.get(g)}function o(g,w,A){const N=!A,L=Cl(g);L.aliasOf=A&&A.record;const G=Pl(e,g),q=[L];if("alias"in g){const B=typeof g.alias=="string"?[g.alias]:g.alias;for(const se of B)q.push(Cl(me({},L,{components:A?A.record.components:L.components,path:se,aliasOf:A?A.record:L})))}let V,$;for(const B of q){const{path:se}=B;if(w&&se[0]!=="/"){const ie=w.record.path,S=ie[ie.length-1]==="/"?"":"/";B.path=w.record.path+(se&&S+se)}if(V=w_(B,w,G),A?A.alias.push(V):($=$||V,$!==V&&$.alias.push(V),N&&g.name&&!Rl(V)&&a(g.name)),af(V)&&u(V),L.children){const ie=L.children;for(let S=0;S<ie.length;S++)o(ie[S],V,A&&A.children[S])}A=A||V}return $?()=>{a($)}:Xs}function a(g){if(sf(g)){const w=s.get(g);w&&(s.delete(g),n.splice(n.indexOf(w),1),w.children.forEach(a),w.alias.forEach(a))}else{const w=n.indexOf(g);w>-1&&(n.splice(w,1),g.record.name&&s.delete(g.record.name),g.children.forEach(a),g.alias.forEach(a))}}function l(){return n}function u(g){const w=T_(g,n);n.splice(w,0,g),g.record.name&&!Rl(g)&&s.set(g.record.name,g)}function f(g,w){let A,N={},L,G;if("name"in g&&g.name){if(A=s.get(g.name),!A)throw vs(1,{location:g});G=A.record.name,N=me(Al(w.params,A.keys.filter($=>!$.optional).concat(A.parent?A.parent.keys.filter($=>$.optional):[]).map($=>$.name)),g.params&&Al(g.params,A.keys.map($=>$.name))),L=A.stringify(N)}else if(g.path!=null)L=g.path,A=n.find($=>$.re.test(L)),A&&(N=A.parse(L),G=A.record.name);else{if(A=w.name?s.get(w.name):n.find($=>$.re.test(w.path)),!A)throw vs(1,{location:g,currentLocation:w});G=A.record.name,N=me({},w.params,g.params),L=A.stringify(N)}const q=[];let V=A;for(;V;)q.unshift(V.record),V=V.parent;return{name:G,path:L,params:N,matched:q,meta:E_(q)}}t.forEach(g=>o(g));function p(){n.length=0,s.clear()}return{addRoute:o,resolve:f,removeRoute:a,clearRoutes:p,getRoutes:l,getRecordMatcher:i}}function Al(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Cl(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:b_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function b_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Rl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function E_(t){return t.reduce((e,n)=>me(e,n.meta),{})}function Pl(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function T_(t,e){let n=0,s=e.length;for(;n!==s;){const o=n+s>>1;of(t,e[o])<0?s=o:n=o+1}const i=S_(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function S_(t){let e=t;for(;e=e.parent;)if(af(e)&&of(t,e)===0)return e}function af({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function A_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const o=s[i].replace(Yh," "),a=o.indexOf("="),l=hi(a<0?o:o.slice(0,a)),u=a<0?null:hi(o.slice(a+1));if(l in e){let f=e[l];St(f)||(f=e[l]=[f]),f.push(u)}else e[l]=u}return e}function Ol(t){let e="";for(let n in t){const s=t[n];if(n=Gm(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(St(s)?s.map(o=>o&&Ho(o)):[s&&Ho(s)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function C_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=St(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const R_=Symbol(""),kl=Symbol(""),Nr=Symbol(""),cf=Symbol(""),zo=Symbol("");function js(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function _n(t,e,n,s,i,o=a=>a()){const a=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,u)=>{const f=w=>{w===!1?u(vs(4,{from:n,to:e})):w instanceof Error?u(w):f_(w)?u(vs(2,{from:e,to:w})):(a&&s.enterCallbacks[i]===a&&typeof w=="function"&&a.push(w),l())},p=o(()=>t.call(s&&s.instances[i],e,n,f));let g=Promise.resolve(p);t.length<3&&(g=g.then(f)),g.catch(w=>u(w))})}function yo(t,e,n,s,i=o=>o()){const o=[];for(const a of t)for(const l in a.components){let u=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(Jh(u)){const p=(u.__vccOpts||u)[e];p&&o.push(_n(p,n,s,a,l,i))}else{let f=u();o.push(()=>f.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const g=Mm(p)?p.default:p;a.mods[l]=p,a.components[l]=g;const A=(g.__vccOpts||g)[e];return A&&_n(A,n,s,a,l,i)()}))}}return o}function Nl(t){const e=Ft(Nr),n=Ft(cf),s=gt(()=>{const u=Hn(t.to);return e.resolve(u)}),i=gt(()=>{const{matched:u}=s.value,{length:f}=u,p=u[f-1],g=n.matched;if(!p||!g.length)return-1;const w=g.findIndex(ys.bind(null,p));if(w>-1)return w;const A=Dl(u[f-2]);return f>1&&Dl(p)===A&&g[g.length-1].path!==A?g.findIndex(ys.bind(null,u[f-2])):w}),o=gt(()=>i.value>-1&&D_(n.params,s.value.params)),a=gt(()=>i.value>-1&&i.value===n.matched.length-1&&tf(n.params,s.value.params));function l(u={}){if(N_(u)){const f=e[Hn(t.replace)?"replace":"push"](Hn(t.to)).catch(Xs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:s,href:gt(()=>s.value.href),isActive:o,isExactActive:a,navigate:l}}function P_(t){return t.length===1?t[0]:t}const O_=bh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Nl,setup(t,{slots:e}){const n=Tr(Nl(t)),{options:s}=Ft(Nr),i=gt(()=>({[xl(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[xl(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&P_(e.default(n));return t.custom?o:ba("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),k_=O_;function N_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function D_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!St(i)||i.length!==s.length||s.some((o,a)=>o!==i[a]))return!1}return!0}function Dl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xl=(t,e,n)=>t??e??n,x_=bh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ft(zo),i=gt(()=>t.route||s.value),o=Ft(kl,0),a=gt(()=>{let f=Hn(o);const{matched:p}=i.value;let g;for(;(g=p[f])&&!g.components;)f++;return f}),l=gt(()=>i.value.matched[a.value]);Gi(kl,gt(()=>a.value+1)),Gi(R_,l),Gi(zo,i);const u=zs();return qi(()=>[u.value,l.value,t.name],([f,p,g],[w,A,N])=>{p&&(p.instances[g]=f,A&&A!==p&&f&&f===w&&(p.leaveGuards.size||(p.leaveGuards=A.leaveGuards),p.updateGuards.size||(p.updateGuards=A.updateGuards))),f&&p&&(!A||!ys(p,A)||!w)&&(p.enterCallbacks[g]||[]).forEach(L=>L(f))},{flush:"post"}),()=>{const f=i.value,p=t.name,g=l.value,w=g&&g.components[p];if(!w)return Ml(n.default,{Component:w,route:f});const A=g.props[p],N=A?A===!0?f.params:typeof A=="function"?A(f):A:null,G=ba(w,me({},N,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(g.instances[p]=null)},ref:u}));return Ml(n.default,{Component:G,route:f})||G}}});function Ml(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const M_=x_;function L_(t){const e=I_(t.routes,t),n=t.parseQuery||A_,s=t.stringifyQuery||Ol,i=t.history,o=js(),a=js(),l=js(),u=Up(fn);let f=fn;cs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=mo.bind(null,O=>""+O),g=mo.bind(null,Km),w=mo.bind(null,hi);function A(O,K){let z,J;return sf(O)?(z=e.getRecordMatcher(O),J=K):J=O,e.addRoute(J,z)}function N(O){const K=e.getRecordMatcher(O);K&&e.removeRoute(K)}function L(){return e.getRoutes().map(O=>O.record)}function G(O){return!!e.getRecordMatcher(O)}function q(O,K){if(K=me({},K||u.value),typeof O=="string"){const C=_o(n,O,K.path),k=e.resolve({path:C.path},K),x=i.createHref(C.fullPath);return me(C,k,{params:w(k.params),hash:hi(C.hash),redirectedFrom:void 0,href:x})}let z;if(O.path!=null)z=me({},O,{path:_o(n,O.path,K.path).path});else{const C=me({},O.params);for(const k in C)C[k]==null&&delete C[k];z=me({},O,{params:g(C)}),K.params=g(K.params)}const J=e.resolve(z,K),de=O.hash||"";J.params=p(w(J.params));const y=Ym(s,me({},O,{hash:zm(de),path:J.path})),I=i.createHref(y);return me({fullPath:y,hash:de,query:s===Ol?C_(O.query):O.query||{}},J,{redirectedFrom:void 0,href:I})}function V(O){return typeof O=="string"?_o(n,O,u.value.path):me({},O)}function $(O,K){if(f!==O)return vs(8,{from:K,to:O})}function B(O){return S(O)}function se(O){return B(me(V(O),{replace:!0}))}function ie(O){const K=O.matched[O.matched.length-1];if(K&&K.redirect){const{redirect:z}=K;let J=typeof z=="function"?z(O):z;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=V(J):{path:J},J.params={}),me({query:O.query,hash:O.hash,params:J.path!=null?{}:O.params},J)}}function S(O,K){const z=f=q(O),J=u.value,de=O.state,y=O.force,I=O.replace===!0,C=ie(z);if(C)return S(me(V(C),{state:typeof C=="object"?me({},de,C.state):de,force:y,replace:I}),K||z);const k=z;k.redirectedFrom=K;let x;return!y&&Qm(s,J,z)&&(x=vs(16,{to:k,from:J}),it(J,J,!0,!1)),(x?Promise.resolve(x):E(k,J)).catch(D=>Gt(D)?Gt(D,2)?D:ft(D):ae(D,k,J)).then(D=>{if(D){if(Gt(D,2))return S(me({replace:I},V(D.to),{state:typeof D.to=="object"?me({},de,D.to.state):de,force:y}),K||k)}else D=b(k,J,!0,I,de);return T(k,J,D),D})}function _(O,K){const z=$(O,K);return z?Promise.reject(z):Promise.resolve()}function m(O){const K=on.values().next().value;return K&&typeof K.runWithContext=="function"?K.runWithContext(O):O()}function E(O,K){let z;const[J,de,y]=U_(O,K);z=yo(J.reverse(),"beforeRouteLeave",O,K);for(const C of J)C.leaveGuards.forEach(k=>{z.push(_n(k,O,K))});const I=_.bind(null,O,K);return z.push(I),Ye(z).then(()=>{z=[];for(const C of o.list())z.push(_n(C,O,K));return z.push(I),Ye(z)}).then(()=>{z=yo(de,"beforeRouteUpdate",O,K);for(const C of de)C.updateGuards.forEach(k=>{z.push(_n(k,O,K))});return z.push(I),Ye(z)}).then(()=>{z=[];for(const C of y)if(C.beforeEnter)if(St(C.beforeEnter))for(const k of C.beforeEnter)z.push(_n(k,O,K));else z.push(_n(C.beforeEnter,O,K));return z.push(I),Ye(z)}).then(()=>(O.matched.forEach(C=>C.enterCallbacks={}),z=yo(y,"beforeRouteEnter",O,K,m),z.push(I),Ye(z))).then(()=>{z=[];for(const C of a.list())z.push(_n(C,O,K));return z.push(I),Ye(z)}).catch(C=>Gt(C,8)?C:Promise.reject(C))}function T(O,K,z){l.list().forEach(J=>m(()=>J(O,K,z)))}function b(O,K,z,J,de){const y=$(O,K);if(y)return y;const I=K===fn,C=cs?history.state:{};z&&(J||I?i.replace(O.fullPath,me({scroll:I&&C&&C.scroll},de)):i.push(O.fullPath,de)),u.value=O,it(O,K,z,I),ft()}let v;function ve(){v||(v=i.listen((O,K,z)=>{if(!Rt.listening)return;const J=q(O),de=ie(J);if(de){S(me(de,{replace:!0,force:!0}),J).catch(Xs);return}f=J;const y=u.value;cs&&o_(Il(y.fullPath,z.delta),kr()),E(J,y).catch(I=>Gt(I,12)?I:Gt(I,2)?(S(me(V(I.to),{force:!0}),J).then(C=>{Gt(C,20)&&!z.delta&&z.type===fi.pop&&i.go(-1,!1)}).catch(Xs),Promise.reject()):(z.delta&&i.go(-z.delta,!1),ae(I,J,y))).then(I=>{I=I||b(J,y,!1),I&&(z.delta&&!Gt(I,8)?i.go(-z.delta,!1):z.type===fi.pop&&Gt(I,20)&&i.go(-1,!1)),T(J,y,I)}).catch(Xs)}))}let ke=js(),Se=js(),ce;function ae(O,K,z){ft(O);const J=Se.list();return J.length?J.forEach(de=>de(O,K,z)):console.error(O),Promise.reject(O)}function et(){return ce&&u.value!==fn?Promise.resolve():new Promise((O,K)=>{ke.add([O,K])})}function ft(O){return ce||(ce=!O,ve(),ke.list().forEach(([K,z])=>O?z(O):K()),ke.reset()),O}function it(O,K,z,J){const{scrollBehavior:de}=t;if(!cs||!de)return Promise.resolve();const y=!z&&a_(Il(O.fullPath,0))||(J||!z)&&history.state&&history.state.scroll||null;return uh().then(()=>de(O,K,y)).then(I=>I&&r_(I)).catch(I=>ae(I,O,K))}const Ae=O=>i.go(O);let Ce;const on=new Set,Rt={currentRoute:u,listening:!0,addRoute:A,removeRoute:N,clearRoutes:e.clearRoutes,hasRoute:G,getRoutes:L,resolve:q,options:t,push:B,replace:se,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:o.add,beforeResolve:a.add,afterEach:l.add,onError:Se.add,isReady:et,install(O){const K=this;O.component("RouterLink",k_),O.component("RouterView",M_),O.config.globalProperties.$router=K,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Hn(u)}),cs&&!Ce&&u.value===fn&&(Ce=!0,B(i.location).catch(de=>{}));const z={};for(const de in fn)Object.defineProperty(z,de,{get:()=>u.value[de],enumerable:!0});O.provide(Nr,K),O.provide(cf,rh(z)),O.provide(zo,u);const J=O.unmount;on.add(O),O.unmount=function(){on.delete(O),on.size<1&&(f=fn,v&&v(),v=null,u.value=fn,Ce=!1,ce=!1),J()}}};function Ye(O){return O.reduce((K,z)=>K.then(()=>m(z)),Promise.resolve())}return Rt}function U_(t,e){const n=[],s=[],i=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const l=e.matched[a];l&&(t.matched.find(f=>ys(f,l))?s.push(l):n.push(l));const u=t.matched[a];u&&(e.matched.find(f=>ys(f,u))||i.push(u))}return[n,s,i]}function Dr(){return Ft(Nr)}const F_=()=>{};var Ll={};/**
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
 */const lf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},j_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],a=t[n++],l=t[n++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],a=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},uf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const o=t[i],a=i+1<t.length,l=a?t[i+1]:0,u=i+2<t.length,f=u?t[i+2]:0,p=o>>2,g=(o&3)<<4|l>>4;let w=(l&15)<<2|f>>6,A=f&63;u||(A=64,a||(w=64)),s.push(n[p],n[g],n[w],n[A])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):j_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const f=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||l==null||f==null||g==null)throw new V_;const w=o<<2|l>>4;if(s.push(w),f!==64){const A=l<<4&240|f>>2;if(s.push(A),g!==64){const N=f<<6&192|g;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class V_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $_=function(t){const e=lf(t);return uf.encodeByteArray(e,!0)},cr=function(t){return $_(t).replace(/\./g,"")},hf=function(t){try{return uf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function B_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const H_=()=>B_().__FIREBASE_DEFAULTS__,W_=()=>{if(typeof process>"u"||typeof Ll>"u")return;const t=Ll.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},z_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hf(t[1]);return e&&JSON.parse(e)},Ta=()=>{try{return F_()||H_()||W_()||z_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ff=t=>{var e,n;return(n=(e=Ta())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},G_=t=>{const e=ff(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},df=()=>{var t;return(t=Ta())===null||t===void 0?void 0:t.config},pf=t=>{var e;return(e=Ta())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class q_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function yi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function gf(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function K_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[cr(JSON.stringify(n)),cr(JSON.stringify(a)),""].join(".")}const Qs={};function J_(){const t={prod:[],emulator:[]};for(const e of Object.keys(Qs))Qs[e]?t.emulator.push(e):t.prod.push(e);return t}function X_(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ul=!1;function mf(t,e){if(typeof window>"u"||typeof document>"u"||!yi(window.location.host)||Qs[t]===e||Qs[t]||Ul)return;Qs[t]=e;function n(w){return`__firebase__banner__${w}`}const s="__firebase__banner",o=J_().prod.length>0;function a(){const w=document.getElementById(s);w&&w.remove()}function l(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function u(w,A){w.setAttribute("width","24"),w.setAttribute("id",A),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function f(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Ul=!0,a()},w}function p(w,A){w.setAttribute("id",A),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function g(){const w=X_(s),A=n("text"),N=document.getElementById(A)||document.createElement("span"),L=n("learnmore"),G=document.getElementById(L)||document.createElement("a"),q=n("preprendIcon"),V=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const $=w.element;l($),p(G,L);const B=f();u(V,q),$.append(V,N,G,B),document.body.appendChild($)}o?(N.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Y_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function Q_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _f(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Z_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ey(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yf(){try{return typeof indexedDB=="object"}catch{return!1}}function vf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function ty(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ny="FirebaseError";class Ct extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ny,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zn.prototype.create)}}class Zn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?sy(o,s):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Ct(i,l,s)}}function sy(t,e){return t.replace(iy,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const iy=/\{\$([^}]+)}/g;function ry(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function An(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const o=t[i],a=e[i];if(Fl(o)&&Fl(a)){if(!An(o,a))return!1}else if(o!==a)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Fl(t){return t!==null&&typeof t=="object"}/**
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
 */function vi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function oy(t,e){const n=new ay(t,e);return n.subscribe.bind(n)}class ay{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");cy(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=vo),i.error===void 0&&(i.error=vo),i.complete===void 0&&(i.complete=vo);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vo(){}/**
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
 */const ly=1e3,uy=2,hy=4*60*60*1e3,fy=.5;function jl(t,e=ly,n=uy){const s=e*Math.pow(n,t),i=Math.round(fy*s*(Math.random()-.5)*2);return Math.min(hy,s+i)}/**
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
 */function rn(t){return t&&t._delegate?t._delegate:t}class At{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ln="[DEFAULT]";/**
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
 */class dy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new q_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e?.identifier),i=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gy(e))try{this.getOrInitializeService({instanceIdentifier:Ln})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});s.resolve(o)}catch{}}}}clearInstance(e=Ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ln){return this.instances.has(e)}getOptions(e=Ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);s===l&&a.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),o=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:py(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ln){return this.component?this.component.multipleInstances?e:Ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function py(t){return t===Ln?void 0:t}function gy(t){return t.instantiationMode==="EAGER"}/**
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
 */class my{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const _y={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},yy=ye.INFO,vy={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},wy=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=vy[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xr{constructor(e){this.name=e,this._logLevel=yy,this._logHandler=wy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_y[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const Iy=(t,e)=>e.some(n=>t instanceof n);let Vl,$l;function by(){return Vl||(Vl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ey(){return $l||($l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wf=new WeakMap,Go=new WeakMap,If=new WeakMap,wo=new WeakMap,Sa=new WeakMap;function Ty(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(En(t.result)),i()},a=()=>{s(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&wf.set(n,t)}).catch(()=>{}),Sa.set(e,t),e}function Sy(t){if(Go.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});Go.set(t,e)}let qo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Go.get(t);if(e==="objectStoreNames")return t.objectStoreNames||If.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return En(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ay(t){qo=t(qo)}function Cy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Io(this),e,...n);return If.set(s,e.sort?e.sort():[e]),En(s)}:Ey().includes(t)?function(...e){return t.apply(Io(this),e),En(wf.get(this))}:function(...e){return En(t.apply(Io(this),e))}}function Ry(t){return typeof t=="function"?Cy(t):(t instanceof IDBTransaction&&Sy(t),Iy(t,by())?new Proxy(t,qo):t)}function En(t){if(t instanceof IDBRequest)return Ty(t);if(wo.has(t))return wo.get(t);const e=Ry(t);return e!==t&&(wo.set(t,e),Sa.set(e,t)),e}const Io=t=>Sa.get(t);function bf(t,e,{blocked:n,upgrade:s,blocking:i,terminated:o}={}){const a=indexedDB.open(t,e),l=En(a);return s&&a.addEventListener("upgradeneeded",u=>{s(En(a.result),u.oldVersion,u.newVersion,En(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Py=["get","getKey","getAll","getAllKeys","count"],Oy=["put","add","delete","clear"],bo=new Map;function Bl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bo.get(e))return bo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Oy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Py.includes(n)))return;const o=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let f=u.store;return s&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),i&&u.done]))[0]};return bo.set(e,o),o}Ay(t=>({...t,get:(e,n,s)=>Bl(e,n)||t.get(e,n,s),has:(e,n)=>!!Bl(e,n)||t.has(e,n)}));/**
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
 */class ky{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ny(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ny(t){const e=t.getComponent();return e?.type==="VERSION"}const Ko="@firebase/app",Hl="0.13.2";/**
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
 */const tn=new xr("@firebase/app"),Dy="@firebase/app-compat",xy="@firebase/analytics-compat",My="@firebase/analytics",Ly="@firebase/app-check-compat",Uy="@firebase/app-check",Fy="@firebase/auth",jy="@firebase/auth-compat",Vy="@firebase/database",$y="@firebase/data-connect",By="@firebase/database-compat",Hy="@firebase/functions",Wy="@firebase/functions-compat",zy="@firebase/installations",Gy="@firebase/installations-compat",qy="@firebase/messaging",Ky="@firebase/messaging-compat",Jy="@firebase/performance",Xy="@firebase/performance-compat",Yy="@firebase/remote-config",Qy="@firebase/remote-config-compat",Zy="@firebase/storage",ev="@firebase/storage-compat",tv="@firebase/firestore",nv="@firebase/ai",sv="@firebase/firestore-compat",iv="firebase",rv="11.10.0";/**
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
 */const Jo="[DEFAULT]",ov={[Ko]:"fire-core",[Dy]:"fire-core-compat",[My]:"fire-analytics",[xy]:"fire-analytics-compat",[Uy]:"fire-app-check",[Ly]:"fire-app-check-compat",[Fy]:"fire-auth",[jy]:"fire-auth-compat",[Vy]:"fire-rtdb",[$y]:"fire-data-connect",[By]:"fire-rtdb-compat",[Hy]:"fire-fn",[Wy]:"fire-fn-compat",[zy]:"fire-iid",[Gy]:"fire-iid-compat",[qy]:"fire-fcm",[Ky]:"fire-fcm-compat",[Jy]:"fire-perf",[Xy]:"fire-perf-compat",[Yy]:"fire-rc",[Qy]:"fire-rc-compat",[Zy]:"fire-gcs",[ev]:"fire-gcs-compat",[tv]:"fire-fst",[sv]:"fire-fst-compat",[nv]:"fire-vertex","fire-js":"fire-js",[iv]:"fire-js-all"};/**
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
 */const lr=new Map,av=new Map,Xo=new Map;function Wl(t,e){try{t.container.addComponent(e)}catch(n){tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vt(t){const e=t.name;if(Xo.has(e))return tn.debug(`There were multiple attempts to register component ${e}.`),!1;Xo.set(e,t);for(const n of lr.values())Wl(n,t);for(const n of av.values())Wl(n,t);return!0}function es(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const cv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tn=new Zn("app","Firebase",cv);/**
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
 */class lv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new At("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
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
 */const bs=rv;function Ef(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Jo,automaticDataCollectionEnabled:!0},e),i=s.name;if(typeof i!="string"||!i)throw Tn.create("bad-app-name",{appName:String(i)});if(n||(n=df()),!n)throw Tn.create("no-options");const o=lr.get(i);if(o){if(An(n,o.options)&&An(s,o.config))return o;throw Tn.create("duplicate-app",{appName:i})}const a=new my(i);for(const u of Xo.values())a.addComponent(u);const l=new lv(n,s,a);return lr.set(i,l),l}function Aa(t=Jo){const e=lr.get(t);if(!e&&t===Jo&&df())return Ef();if(!e)throw Tn.create("no-app",{appName:t});return e}function ut(t,e,n){var s;let i=(s=ov[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tn.warn(l.join(" "));return}Vt(new At(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const uv="firebase-heartbeat-database",hv=1,di="firebase-heartbeat-store";let Eo=null;function Tf(){return Eo||(Eo=bf(uv,hv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(di)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tn.create("idb-open",{originalErrorMessage:t.message})})),Eo}async function fv(t){try{const n=(await Tf()).transaction(di),s=await n.objectStore(di).get(Sf(t));return await n.done,s}catch(e){if(e instanceof Ct)tn.warn(e.message);else{const n=Tn.create("idb-get",{originalErrorMessage:e?.message});tn.warn(n.message)}}}async function zl(t,e){try{const s=(await Tf()).transaction(di,"readwrite");await s.objectStore(di).put(e,Sf(t)),await s.done}catch(n){if(n instanceof Ct)tn.warn(n.message);else{const s=Tn.create("idb-set",{originalErrorMessage:n?.message});tn.warn(s.message)}}}function Sf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dv=1024,pv=30;class gv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _v(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Gl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>pv){const a=yv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){tn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gl(),{heartbeatsToSend:s,unsentEntries:i}=mv(this._heartbeatsCache.heartbeats),o=cr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return tn.warn(n),""}}}function Gl(){return new Date().toISOString().substring(0,10)}function mv(t,e=dv){const n=[];let s=t.slice();for(const i of t){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),ql(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ql(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _v{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yf()?vf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fv(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ql(t){return cr(JSON.stringify({version:2,heartbeats:t})).length}function yv(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function vv(t){Vt(new At("platform-logger",e=>new ky(e),"PRIVATE")),Vt(new At("heartbeat",e=>new gv(e),"PRIVATE")),ut(Ko,Hl,t),ut(Ko,Hl,"esm2017"),ut("fire-js","")}vv("");var wv="firebase",Iv="11.10.0";/**
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
 */ut(wv,Iv,"app");const Af="@firebase/installations",Ca="0.6.18";/**
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
 */const Cf=1e4,Rf=`w:${Ca}`,Pf="FIS_v2",bv="https://firebaseinstallations.googleapis.com/v1",Ev=60*60*1e3,Tv="installations",Sv="Installations";/**
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
 */const Av={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Kn=new Zn(Tv,Sv,Av);function Of(t){return t instanceof Ct&&t.code.includes("request-failed")}/**
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
 */function kf({projectId:t}){return`${bv}/projects/${t}/installations`}function Nf(t){return{token:t.token,requestStatus:2,expiresIn:Rv(t.expiresIn),creationTime:Date.now()}}async function Df(t,e){const s=(await e.json()).error;return Kn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function xf({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Cv(t,{refreshToken:e}){const n=xf(t);return n.append("Authorization",Pv(e)),n}async function Mf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Rv(t){return Number(t.replace("s","000"))}function Pv(t){return`${Pf} ${t}`}/**
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
 */async function Ov({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=kf(t),i=xf(t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={fid:n,authVersion:Pf,appId:t.appId,sdkVersion:Rf},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await Mf(()=>fetch(s,l));if(u.ok){const f=await u.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:Nf(f.authToken)}}else throw await Df("Create Installation",u)}/**
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
 */function Lf(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function kv(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Nv=/^[cdef][\w-]{21}$/,Yo="";function Dv(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=xv(t);return Nv.test(n)?n:Yo}catch{return Yo}}function xv(t){return kv(t).substr(0,22)}/**
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
 */function Mr(t){return`${t.appName}!${t.appId}`}/**
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
 */const Uf=new Map;function Ff(t,e){const n=Mr(t);jf(n,e),Mv(n,e)}function jf(t,e){const n=Uf.get(t);if(n)for(const s of n)s(e)}function Mv(t,e){const n=Lv();n&&n.postMessage({key:t,fid:e}),Uv()}let jn=null;function Lv(){return!jn&&"BroadcastChannel"in self&&(jn=new BroadcastChannel("[Firebase] FID Change"),jn.onmessage=t=>{jf(t.data.key,t.data.fid)}),jn}function Uv(){Uf.size===0&&jn&&(jn.close(),jn=null)}/**
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
 */const Fv="firebase-installations-database",jv=1,Jn="firebase-installations-store";let To=null;function Ra(){return To||(To=bf(Fv,jv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jn)}}})),To}async function ur(t,e){const n=Mr(t),i=(await Ra()).transaction(Jn,"readwrite"),o=i.objectStore(Jn),a=await o.get(n);return await o.put(e,n),await i.done,(!a||a.fid!==e.fid)&&Ff(t,e.fid),e}async function Vf(t){const e=Mr(t),s=(await Ra()).transaction(Jn,"readwrite");await s.objectStore(Jn).delete(e),await s.done}async function Lr(t,e){const n=Mr(t),i=(await Ra()).transaction(Jn,"readwrite"),o=i.objectStore(Jn),a=await o.get(n),l=e(a);return l===void 0?await o.delete(n):await o.put(l,n),await i.done,l&&(!a||a.fid!==l.fid)&&Ff(t,l.fid),l}/**
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
 */async function Pa(t){let e;const n=await Lr(t.appConfig,s=>{const i=Vv(s),o=$v(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===Yo?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Vv(t){const e=t||{fid:Dv(),registrationStatus:0};return $f(e)}function $v(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Kn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Bv(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Hv(t)}:{installationEntry:e}}async function Bv(t,e){try{const n=await Ov(t,e);return ur(t.appConfig,n)}catch(n){throw Of(n)&&n.customData.serverCode===409?await Vf(t.appConfig):await ur(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Hv(t){let e=await Kl(t.appConfig);for(;e.registrationStatus===1;)await Lf(100),e=await Kl(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Pa(t);return s||n}return e}function Kl(t){return Lr(t,e=>{if(!e)throw Kn.create("installation-not-found");return $f(e)})}function $f(t){return Wv(t)?{fid:t.fid,registrationStatus:0}:t}function Wv(t){return t.registrationStatus===1&&t.registrationTime+Cf<Date.now()}/**
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
 */async function zv({appConfig:t,heartbeatServiceProvider:e},n){const s=Gv(t,n),i=Cv(t,n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={installation:{sdkVersion:Rf,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await Mf(()=>fetch(s,l));if(u.ok){const f=await u.json();return Nf(f)}else throw await Df("Generate Auth Token",u)}function Gv(t,{fid:e}){return`${kf(t)}/${e}/authTokens:generate`}/**
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
 */async function Oa(t,e=!1){let n;const s=await Lr(t.appConfig,o=>{if(!Bf(o))throw Kn.create("not-registered");const a=o.authToken;if(!e&&Jv(a))return o;if(a.requestStatus===1)return n=qv(t,e),o;{if(!navigator.onLine)throw Kn.create("app-offline");const l=Yv(o);return n=Kv(t,l),l}});return n?await n:s.authToken}async function qv(t,e){let n=await Jl(t.appConfig);for(;n.authToken.requestStatus===1;)await Lf(100),n=await Jl(t.appConfig);const s=n.authToken;return s.requestStatus===0?Oa(t,e):s}function Jl(t){return Lr(t,e=>{if(!Bf(e))throw Kn.create("not-registered");const n=e.authToken;return Qv(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Kv(t,e){try{const n=await zv(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await ur(t.appConfig,s),n}catch(n){if(Of(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Vf(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ur(t.appConfig,s)}throw n}}function Bf(t){return t!==void 0&&t.registrationStatus===2}function Jv(t){return t.requestStatus===2&&!Xv(t)}function Xv(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ev}function Yv(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Qv(t){return t.requestStatus===1&&t.requestTime+Cf<Date.now()}/**
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
 */async function Zv(t){const e=t,{installationEntry:n,registrationPromise:s}=await Pa(e);return s?s.catch(console.error):Oa(e).catch(console.error),n.fid}/**
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
 */async function e0(t,e=!1){const n=t;return await t0(n),(await Oa(n,e)).token}async function t0(t){const{registrationPromise:e}=await Pa(t);e&&await e}/**
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
 */function n0(t){if(!t||!t.options)throw So("App Configuration");if(!t.name)throw So("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw So(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function So(t){return Kn.create("missing-app-config-values",{valueName:t})}/**
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
 */const Hf="installations",s0="installations-internal",i0=t=>{const e=t.getProvider("app").getImmediate(),n=n0(e),s=es(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},r0=t=>{const e=t.getProvider("app").getImmediate(),n=es(e,Hf).getImmediate();return{getId:()=>Zv(n),getToken:i=>e0(n,i)}};function o0(){Vt(new At(Hf,i0,"PUBLIC")),Vt(new At(s0,r0,"PRIVATE"))}o0();ut(Af,Ca);ut(Af,Ca,"esm2017");/**
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
 */const hr="analytics",a0="firebase_id",c0="origin",l0=60*1e3,u0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ka="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ze=new xr("@firebase/analytics");/**
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
 */const h0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},st=new Zn("analytics","Analytics",h0);/**
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
 */function f0(t){if(!t.startsWith(ka)){const e=st.create("invalid-gtag-resource",{gtagURL:t});return Ze.warn(e.message),""}return t}function Wf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function d0(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function p0(t,e){const n=d0("firebase-js-sdk-policy",{createScriptURL:f0}),s=document.createElement("script"),i=`${ka}?l=${t}&id=${e}`;s.src=n?n?.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function g0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function m0(t,e,n,s,i,o){const a=s[i];try{if(a)await e[a];else{const u=(await Wf(n)).find(f=>f.measurementId===i);u&&await e[u.appId]}}catch(l){Ze.error(l)}t("config",i,o)}async function _0(t,e,n,s,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const l=await Wf(n);for(const u of a){const f=l.find(g=>g.measurementId===u),p=f&&e[f.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",s,i||{})}catch(o){Ze.error(o)}}function y0(t,e,n,s){async function i(o,...a){try{if(o==="event"){const[l,u]=a;await _0(t,e,n,l,u)}else if(o==="config"){const[l,u]=a;await m0(t,e,n,s,l,u)}else if(o==="consent"){const[l,u]=a;t("consent",l,u)}else if(o==="get"){const[l,u,f]=a;t("get",l,u,f)}else if(o==="set"){const[l]=a;t("set",l)}else t(o,...a)}catch(l){Ze.error(l)}}return i}function v0(t,e,n,s,i){let o=function(...a){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=y0(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function w0(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ka)&&n.src.includes(t))return n;return null}/**
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
 */const I0=30,b0=1e3;class E0{constructor(e={},n=b0){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const zf=new E0;function T0(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function S0(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:T0(s)},o=u0.replace("{app-id}",n),a=await fetch(o,i);if(a.status!==200&&a.status!==304){let l="";try{const u=await a.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw st.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function A0(t,e=zf,n){const{appId:s,apiKey:i,measurementId:o}=t.options;if(!s)throw st.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:s};throw st.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new P0;return setTimeout(async()=>{l.abort()},l0),Gf({appId:s,apiKey:i,measurementId:o},a,l,e)}async function Gf(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=zf){var o;const{appId:a,measurementId:l}=t;try{await C0(s,e)}catch(u){if(l)return Ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u?.message}]`),{appId:a,measurementId:l};throw u}try{const u=await S0(t);return i.deleteThrottleMetadata(a),u}catch(u){const f=u;if(!R0(f)){if(i.deleteThrottleMetadata(a),l)return Ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${f?.message}]`),{appId:a,measurementId:l};throw u}const p=Number((o=f?.customData)===null||o===void 0?void 0:o.httpStatus)===503?jl(n,i.intervalMillis,I0):jl(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return i.setThrottleMetadata(a,g),Ze.debug(`Calling attemptFetch again in ${p} millis`),Gf(t,g,s,i)}}function C0(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),s(st.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function R0(t){if(!(t instanceof Ct)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class P0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function O0(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const o=await e,a=Object.assign(Object.assign({},s),{send_to:o});t("event",n,a)}}/**
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
 */async function k0(){if(yf())try{await vf()}catch(t){return Ze.warn(st.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Ze.warn(st.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function N0(t,e,n,s,i,o,a){var l;const u=A0(t);u.then(A=>{n[A.measurementId]=A.appId,t.options.measurementId&&A.measurementId!==t.options.measurementId&&Ze.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>Ze.error(A)),e.push(u);const f=k0().then(A=>{if(A)return s.getId()}),[p,g]=await Promise.all([u,f]);w0(o)||p0(o,p.measurementId),i("js",new Date);const w=(l=a?.config)!==null&&l!==void 0?l:{};return w[c0]="firebase",w.update=!0,g!=null&&(w[a0]=g),i("config",p.measurementId,w),p.measurementId}/**
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
 */class D0{constructor(e){this.app=e}_delete(){return delete Zs[this.app.options.appId],Promise.resolve()}}let Zs={},Xl=[];const Yl={};let Ao="dataLayer",x0="gtag",Ql,qf,Zl=!1;function M0(){const t=[];if(_f()&&t.push("This is a browser extension environment."),ty()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=st.create("invalid-analytics-context",{errorInfo:e});Ze.warn(n.message)}}function L0(t,e,n){M0();const s=t.options.appId;if(!s)throw st.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw st.create("no-api-key");if(Zs[s]!=null)throw st.create("already-exists",{id:s});if(!Zl){g0(Ao);const{wrappedGtag:o,gtagCore:a}=v0(Zs,Xl,Yl,Ao,x0);qf=o,Ql=a,Zl=!0}return Zs[s]=N0(t,Xl,Yl,e,Ql,Ao,n),new D0(t)}function U0(t=Aa()){t=rn(t);const e=es(t,hr);return e.isInitialized()?e.getImmediate():F0(t)}function F0(t,e={}){const n=es(t,hr);if(n.isInitialized()){const i=n.getImmediate();if(An(e,n.getOptions()))return i;throw st.create("already-initialized")}return n.initialize({options:e})}function j0(t,e,n,s){t=rn(t),O0(qf,Zs[t.app.options.appId],e,n,s).catch(i=>Ze.error(i))}const eu="@firebase/analytics",tu="0.10.17";function V0(){Vt(new At(hr,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return L0(s,i,n)},"PUBLIC")),Vt(new At("analytics-internal",t,"PRIVATE")),ut(eu,tu),ut(eu,tu,"esm2017");function t(e){try{const n=e.getProvider(hr).getImmediate();return{logEvent:(s,i,o)=>j0(n,s,i,o)}}catch(n){throw st.create("interop-component-reg-failed",{reason:n})}}}V0();function Na(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Kf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $0=Kf,Jf=new Zn("auth","Firebase",Kf());/**
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
 */const fr=new xr("@firebase/auth");function B0(t,...e){fr.logLevel<=ye.WARN&&fr.warn(`Auth (${bs}): ${t}`,...e)}function Yi(t,...e){fr.logLevel<=ye.ERROR&&fr.error(`Auth (${bs}): ${t}`,...e)}/**
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
 */function $t(t,...e){throw xa(t,...e)}function bt(t,...e){return xa(t,...e)}function Da(t,e,n){const s=Object.assign(Object.assign({},$0()),{[e]:n});return new Zn("auth","Firebase",s).create(e,{appName:t.name})}function Wn(t){return Da(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function H0(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&$t(t,"argument-error"),Da(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xa(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Jf.create(t,...e)}function ee(t,e,...n){if(!t)throw xa(e,...n)}function Yt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yi(e),new Error(e)}function nn(t,e){t||Yt(e)}/**
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
 */function Qo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function W0(){return nu()==="http:"||nu()==="https:"}function nu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function z0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(W0()||_f()||"connection"in navigator)?navigator.onLine:!0}function G0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class wi{constructor(e,n){this.shortDelay=e,this.longDelay=n,nn(n>e,"Short delay should be less than long delay!"),this.isMobile=Y_()||Z_()}get(){return z0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ma(t,e){nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Xf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const q0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const K0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],J0=new wi(3e4,6e4);function La(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Es(t,e,n,s,i={}){return Yf(t,i,async()=>{let o={},a={};s&&(e==="GET"?a=s:o={body:JSON.stringify(s)});const l=vi(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const f=Object.assign({method:e,headers:u},o);return Q_()||(f.referrerPolicy="no-referrer"),t.emulatorConfig&&yi(t.emulatorConfig.host)&&(f.credentials="include"),Xf.fetch()(await Qf(t,t.config.apiHost,n,l),f)})}async function Yf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},q0),e);try{const i=new Y0(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Hi(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[u,f]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hi(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Hi(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Hi(t,"user-disabled",a);const p=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Da(t,p,f);$t(t,p)}}catch(i){if(i instanceof Ct)throw i;$t(t,"network-request-failed",{message:String(i)})}}async function X0(t,e,n,s,i={}){const o=await Es(t,e,n,s,i);return"mfaPendingCredential"in o&&$t(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function Qf(t,e,n,s){const i=`${e}${n}?${s}`,o=t,a=o.config.emulator?Ma(t.config,i):`${t.config.apiScheme}://${i}`;return K0.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class Y0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(bt(this.auth,"network-request-failed")),J0.get())})}}function Hi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=bt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function Q0(t,e){return Es(t,"POST","/v1/accounts:delete",e)}async function dr(t,e){return Es(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ei(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Z0(t,e=!1){const n=rn(t),s=await n.getIdToken(e),i=Ua(s);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o?.sign_in_provider;return{claims:i,token:s,authTime:ei(Co(i.auth_time)),issuedAtTime:ei(Co(i.iat)),expirationTime:ei(Co(i.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Co(t){return Number(t)*1e3}function Ua(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Yi("JWT malformed, contained fewer than 3 sections"),null;try{const i=hf(n);return i?JSON.parse(i):(Yi("Failed to decode base64 JWT payload"),null)}catch(i){return Yi("Caught error parsing JWT payload as JSON",i?.toString()),null}}function su(t){const e=Ua(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ct&&ew(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function ew({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class tw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ei(this.lastLoginAt),this.creationTime=ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await pi(t,dr(n,{idToken:s}));ee(i?.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Zf(o.providerUserInfo):[],l=sw(t.providerData,a),u=t.isAnonymous,f=!(t.email&&o.passwordHash)&&!l?.length,p=u?f:!1,g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Zo(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(t,g)}async function nw(t){const e=rn(t);await pr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sw(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Zf(t){return t.map(e=>{var{providerId:n}=e,s=Na(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function iw(t,e){const n=await Yf(t,{},async()=>{const s=vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,a=await Qf(t,i,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:s};return t.emulatorConfig&&yi(t.emulatorConfig.host)&&(u.credentials="include"),Xf.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rw(t,e){return Es(t,"POST","/v2/accounts:revokeToken",La(t,e))}/**
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
 */class ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):su(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=su(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:o}=await iw(e,n);this.updateTokensAndExpiration(s,i,Number(o))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:o}=n,a=new ds;return s&&(ee(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),i&&(ee(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(ee(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ds,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
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
 */function dn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,o=Na(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Zo(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await pi(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Z0(this,e)}reload(){return nw(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await pr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(Wn(this.auth));const e=await this.getIdToken();return await pi(this,Q0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,o,a,l,u,f,p;const g=(s=n.displayName)!==null&&s!==void 0?s:void 0,w=(i=n.email)!==null&&i!==void 0?i:void 0,A=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,N=(a=n.photoURL)!==null&&a!==void 0?a:void 0,L=(l=n.tenantId)!==null&&l!==void 0?l:void 0,G=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,q=(f=n.createdAt)!==null&&f!==void 0?f:void 0,V=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:$,emailVerified:B,isAnonymous:se,providerData:ie,stsTokenManager:S}=n;ee($&&S,e,"internal-error");const _=ds.fromJSON(this.name,S);ee(typeof $=="string",e,"internal-error"),dn(g,e.name),dn(w,e.name),ee(typeof B=="boolean",e,"internal-error"),ee(typeof se=="boolean",e,"internal-error"),dn(A,e.name),dn(N,e.name),dn(L,e.name),dn(G,e.name),dn(q,e.name),dn(V,e.name);const m=new yt({uid:$,auth:e,email:w,emailVerified:B,displayName:g,isAnonymous:se,photoURL:N,phoneNumber:A,tenantId:L,stsTokenManager:_,createdAt:q,lastLoginAt:V});return ie&&Array.isArray(ie)&&(m.providerData=ie.map(E=>Object.assign({},E))),G&&(m._redirectEventId=G),m}static async _fromIdTokenResponse(e,n,s=!1){const i=new ds;i.updateFromServerResponse(n);const o=new yt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await pr(o),o}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];ee(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Zf(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!o?.length,l=new ds;l.updateFromIdToken(s);const u=new yt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Zo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!o?.length};return Object.assign(u,f),u}}/**
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
 */const iu=new Map;function Qt(t){nn(t instanceof Function,"Expected a class definition");let e=iu.get(t);return e?(nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,iu.set(t,e),e)}/**
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
 */class ed{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ed.type="NONE";const ru=ed;/**
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
 */function Qi(t,e,n){return`firebase:${t}:${e}:${n}`}class ps{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:o}=this.auth;this.fullUserKey=Qi(this.userKey,i.apiKey,o),this.fullPersistenceKey=Qi("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await dr(this.auth,{idToken:e}).catch(()=>{});return n?yt._fromGetAccountInfoResponse(this.auth,n,e):null}return yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ps(Qt(ru),e,s);const i=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||Qt(ru);const a=Qi(s,e.config.apiKey,e.name);let l=null;for(const f of n)try{const p=await f._get(a);if(p){let g;if(typeof p=="string"){const w=await dr(e,{idToken:p}).catch(()=>{});if(!w)break;g=await yt._fromGetAccountInfoResponse(e,w,p)}else g=yt._fromJSON(e,p);f!==o&&(l=g),o=f;break}}catch{}const u=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new ps(o,e,s):(o=u[0],l&&await o._set(a,l.toJSON()),await Promise.all(n.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new ps(o,e,s))}}/**
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
 */function ou(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(id(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(td(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(od(e))return"Blackberry";if(ad(e))return"Webos";if(nd(e))return"Safari";if((e.includes("chrome/")||sd(e))&&!e.includes("edge/"))return"Chrome";if(rd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function td(t=Xe()){return/firefox\//i.test(t)}function nd(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sd(t=Xe()){return/crios\//i.test(t)}function id(t=Xe()){return/iemobile/i.test(t)}function rd(t=Xe()){return/android/i.test(t)}function od(t=Xe()){return/blackberry/i.test(t)}function ad(t=Xe()){return/webos/i.test(t)}function Fa(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ow(t=Xe()){var e;return Fa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function aw(){return ey()&&document.documentMode===10}function cd(t=Xe()){return Fa(t)||rd(t)||ad(t)||od(t)||/windows phone/i.test(t)||id(t)}/**
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
 */function ld(t,e=[]){let n;switch(t){case"Browser":n=ou(Xe());break;case"Worker":n=`${ou(Xe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${s}`}/**
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
 */class cw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=o=>new Promise((a,l)=>{try{const u=e(o);a(u)}catch(u){l(u)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function lw(t,e={}){return Es(t,"GET","/v2/passwordPolicy",La(t,e))}/**
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
 */const uw=6;class hw{constructor(e){var n,s,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:uw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,o,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(s=u.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class fw{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new au(this),this.idTokenSubscription=new au(this),this.beforeStateQueue=new cw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qt(n)),this._initializationPromise=this.queue(async()=>{var s,i,o;if(!this._deleted&&(this.persistenceManager=await ps.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dr(this,{idToken:e}),s=await yt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&u?.user&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pr(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=G0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(Wn(this));const n=e?rn(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(Wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(Wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lw(this),n=new hw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await rw(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qt(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await ps.create(this,[Qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,s,i);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ld(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&B0(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Ur(t){return rn(t)}class au{constructor(e){this.auth=e,this.observer=null,this.addObserver=oy(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ja={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dw(t){ja=t}function pw(t){return ja.loadJS(t)}function gw(){return ja.gapiScript}function mw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function _w(t,e){const n=es(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(An(o,e??{}))return i;$t(i,"already-initialized")}return n.initialize({options:e})}function yw(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Qt);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function vw(t,e,n){const s=Ur(t);ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,o=ud(e),{host:a,port:l}=ww(e),u=l===null?"":`:${l}`,f={url:`${o}//${a}${u}/`},p=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ee(An(f,s.config.emulator)&&An(p,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=f,s.emulatorConfig=p,s.settings.appVerificationDisabledForTesting=!0,yi(a)?(gf(`${o}//${a}${u}`),mf("Auth",!0)):Iw()}function ud(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ww(t){const e=ud(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const o=i[1];return{host:o,port:cu(s.substr(o.length+1))}}else{const[o,a]=s.split(":");return{host:o,port:cu(a)}}}function cu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Iw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class hd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yt("not implemented")}_getIdTokenResponse(e){return Yt("not implemented")}_linkToIdToken(e,n){return Yt("not implemented")}_getReauthenticationResolver(e){return Yt("not implemented")}}/**
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
 */async function gs(t,e){return X0(t,"POST","/v1/accounts:signInWithIdp",La(t,e))}/**
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
 */const bw="http://localhost";class Xn extends hd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,o=Na(n,["providerId","signInMethod"]);if(!s||!i)return null;const a=new Xn(s,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return gs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,gs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gs(e,n)}buildRequest(){const e={requestUri:bw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vi(n)}return e}}/**
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
 */class Va{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ii extends Va{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vn extends Ii{constructor(){super("facebook.com")}static credential(e){return Xn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
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
 */class Jt extends Ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Jt.credential(n,s)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
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
 */class wn extends Ii{constructor(){super("github.com")}static credential(e){return Xn._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.GITHUB_SIGN_IN_METHOD="github.com";wn.PROVIDER_ID="github.com";/**
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
 */class In extends Ii{constructor(){super("twitter.com")}static credential(e,n){return Xn._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return In.credential(n,s)}catch{return null}}}In.TWITTER_SIGN_IN_METHOD="twitter.com";In.PROVIDER_ID="twitter.com";/**
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
 */class ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const o=await yt._fromIdTokenResponse(e,s,i),a=lu(s);return new ws({user:o,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=lu(s);return new ws({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function lu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class gr extends Ct{constructor(e,n,s,i){var o;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,gr.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new gr(e,n,s,i)}}function fd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?gr._fromErrorAndOperation(t,o,e,s):o})}async function Ew(t,e,n=!1){const s=await pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ws._forOperation(t,"link",s)}/**
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
 */async function Tw(t,e,n=!1){const{auth:s}=t;if(mt(s.app))return Promise.reject(Wn(s));const i="reauthenticate";try{const o=await pi(t,fd(s,i,e,t),n);ee(o.idToken,s,"internal-error");const a=Ua(o.idToken);ee(a,s,"internal-error");const{sub:l}=a;return ee(t.uid===l,s,"user-mismatch"),ws._forOperation(t,i,o)}catch(o){throw o?.code==="auth/user-not-found"&&$t(s,"user-mismatch"),o}}/**
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
 */async function Sw(t,e,n=!1){if(mt(t.app))return Promise.reject(Wn(t));const s="signIn",i=await fd(t,s,e),o=await ws._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(o.user),o}function Aw(t,e,n,s){return rn(t).onIdTokenChanged(e,n,s)}function Cw(t,e,n){return rn(t).beforeAuthStateChanged(e,n)}function Rw(t,e,n,s){return rn(t).onAuthStateChanged(e,n,s)}const mr="__sak";/**
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
 */class dd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mr,"1"),this.storage.removeItem(mr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Pw=1e3,Ow=10;class pd extends dd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},o=this.storage.getItem(s);aw()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ow):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Pw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pd.type="LOCAL";const kw=pd;/**
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
 */class gd extends dd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gd.type="SESSION";const md=gd;/**
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
 */function Nw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Fr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Fr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const l=Array.from(a).map(async f=>f(n.origin,o)),u=await Nw(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fr.receivers=[];/**
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
 */function $a(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Dw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,u)=>{const f=$a("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:i,onMessage(g){const w=g;if(w.data.eventId===f)switch(w.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(w.data.response);break;default:clearTimeout(p),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function jt(){return window}function xw(t){jt().location.href=t}/**
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
 */function _d(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function Mw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lw(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Uw(){return _d()?self:null}/**
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
 */const yd="firebaseLocalStorageDb",Fw=1,_r="firebaseLocalStorage",vd="fbase_key";class bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jr(t,e){return t.transaction([_r],e?"readwrite":"readonly").objectStore(_r)}function jw(){const t=indexedDB.deleteDatabase(yd);return new bi(t).toPromise()}function ea(){const t=indexedDB.open(yd,Fw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(_r,{keyPath:vd})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(_r)?e(s):(s.close(),await jw(),e(await ea()))})})}async function uu(t,e,n){const s=jr(t,!0).put({[vd]:e,value:n});return new bi(s).toPromise()}async function Vw(t,e){const n=jr(t,!1).get(e),s=await new bi(n).toPromise();return s===void 0?null:s.value}function hu(t,e){const n=jr(t,!0).delete(e);return new bi(n).toPromise()}const $w=800,Bw=3;class wd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ea(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Bw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _d()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fr._getInstance(Uw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mw(),!this.activeServiceWorker)return;this.sender=new Dw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ea();return await uu(e,mr,"1"),await hu(e,mr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>uu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Vw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=jr(i,!1).getAll();return new bi(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$w)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wd.type="LOCAL";const Hw=wd;new wi(3e4,6e4);/**
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
 */function Id(t,e){return e?Qt(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ba extends hd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ww(t){return Sw(t.auth,new Ba(t),t.bypassAuthState)}function zw(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),Tw(n,new Ba(t),t.bypassAuthState)}async function Gw(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),Ew(n,new Ba(t),t.bypassAuthState)}/**
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
 */class bd{constructor(e,n,s,i,o=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:s,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ww;case"linkViaPopup":case"linkViaRedirect":return Gw;case"reauthViaPopup":case"reauthViaRedirect":return zw;default:$t(this.auth,"internal-error")}}resolve(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qw=new wi(2e3,1e4);async function Kw(t,e,n){if(mt(t.app))return Promise.reject(bt(t,"operation-not-supported-in-this-environment"));const s=Ur(t);H0(t,e,Va);const i=Id(s,n);return new Vn(s,"signInViaPopup",e,i).executeNotNull()}class Vn extends bd{constructor(e,n,s,i,o){super(e,n,i,o),this.provider=s,this.authWindow=null,this.pollId=null,Vn.currentPopupAction&&Vn.currentPopupAction.cancel(),Vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){nn(this.filter.length===1,"Popup operations only handle one event");const e=$a();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qw.get())};e()}}Vn.currentPopupAction=null;/**
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
 */const Jw="pendingRedirect",Zi=new Map;class Xw extends bd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Zi.get(this.auth._key());if(!e){try{const s=await Yw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Zi.set(this.auth._key(),e)}return this.bypassAuthState||Zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yw(t,e){const n=eI(e),s=Zw(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Qw(t,e){Zi.set(t._key(),e)}function Zw(t){return Qt(t._redirectPersistence)}function eI(t){return Qi(Jw,t.config.apiKey,t.name)}async function tI(t,e,n=!1){if(mt(t.app))return Promise.reject(Wn(t));const s=Ur(t),i=Id(s,e),a=await new Xw(s,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const nI=10*60*1e3;class sI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ed(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(bt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nI&&this.cachedEventUids.clear(),this.cachedEventUids.has(fu(e))}saveEventToCache(e){this.cachedEventUids.add(fu(e)),this.lastProcessedEventTime=Date.now()}}function fu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ed({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function iI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ed(t);default:return!1}}/**
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
 */async function rI(t,e={}){return Es(t,"GET","/v1/projects",e)}/**
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
 */const oI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aI=/^https?/;async function cI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rI(t);for(const n of e)try{if(lI(n))return}catch{}$t(t,"unauthorized-domain")}function lI(t){const e=Qo(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!aI.test(n))return!1;if(oI.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const uI=new wi(3e4,6e4);function du(){const t=jt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hI(t){return new Promise((e,n)=>{var s,i,o;function a(){du(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{du(),n(bt(t,"network-request-failed"))},timeout:uI.get()})}if(!((i=(s=jt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=jt().gapi)===null||o===void 0)&&o.load)a();else{const l=mw("iframefcb");return jt()[l]=()=>{gapi.load?a():n(bt(t,"network-request-failed"))},pw(`${gw()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw er=null,e})}let er=null;function fI(t){return er=er||hI(t),er}/**
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
 */const dI=new wi(5e3,15e3),pI="__/auth/iframe",gI="emulator/auth/iframe",mI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_I=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yI(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ma(e,gI):`https://${t.config.authDomain}/${pI}`,s={apiKey:e.apiKey,appName:t.name,v:bs},i=_I.get(t.config.apiHost);i&&(s.eid=i);const o=t._getFrameworks();return o.length&&(s.fw=o.join(",")),`${n}?${vi(s).slice(1)}`}async function vI(t){const e=await fI(t),n=jt().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:yI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mI,dontclear:!0},s=>new Promise(async(i,o)=>{await s.restyle({setHideOnLeave:!1});const a=bt(t,"network-request-failed"),l=jt().setTimeout(()=>{o(a)},dI.get());function u(){jt().clearTimeout(l),i(s)}s.ping(u).then(u,()=>{o(a)})}))}/**
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
 */const wI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},II=500,bI=600,EI="_blank",TI="http://localhost";class pu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SI(t,e,n,s=II,i=bI){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const u=Object.assign(Object.assign({},wI),{width:s.toString(),height:i.toString(),top:o,left:a}),f=Xe().toLowerCase();n&&(l=sd(f)?EI:n),td(f)&&(e=e||TI,u.scrollbars="yes");const p=Object.entries(u).reduce((w,[A,N])=>`${w}${A}=${N},`,"");if(ow(f)&&l!=="_self")return AI(e||"",l),new pu(null);const g=window.open(e||"",l,p);ee(g,t,"popup-blocked");try{g.focus()}catch{}return new pu(g)}function AI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const CI="__/auth/handler",RI="emulator/auth/handler",PI=encodeURIComponent("fac");async function gu(t,e,n,s,i,o){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:bs,eventId:i};if(e instanceof Va){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",ry(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof Ii){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),f=u?`#${PI}=${encodeURIComponent(u)}`:"";return`${OI(t)}?${vi(l).slice(1)}${f}`}function OI({config:t}){return t.emulator?Ma(t,RI):`https://${t.authDomain}/${CI}`}/**
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
 */const Ro="webStorageSupport";class kI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=md,this._completeRedirectFn=tI,this._overrideRedirectResult=Qw}async _openPopup(e,n,s,i){var o;nn((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await gu(e,n,s,Qo(),i);return SI(e,a,$a())}async _openRedirect(e,n,s,i){await this._originValidation(e);const o=await gu(e,n,s,Qo(),i);return xw(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(nn(o,"If manager is not set, promise should be"),o)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await vI(e),s=new sI(e);return n.register("authEvent",i=>(ee(i?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ro,{type:Ro},i=>{var o;const a=(o=i?.[0])===null||o===void 0?void 0:o[Ro];a!==void 0&&n(!!a),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cd()||nd()||Fa()}}const NI=kI;var mu="@firebase/auth",_u="1.10.8";/**
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
 */class DI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MI(t){Vt(new At("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=s.options;ee(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ld(t)},f=new fw(s,i,o,u);return yw(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Vt(new At("auth-internal",e=>{const n=Ur(e.getProvider("auth").getImmediate());return(s=>new DI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ut(mu,_u,xI(t)),ut(mu,_u,"esm2017")}/**
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
 */const LI=5*60,UI=pf("authIdTokenMaxAge")||LI;let yu=null;const FI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>UI)return;const i=n?.token;yu!==i&&(yu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function jI(t=Aa()){const e=es(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_w(t,{popupRedirectResolver:NI,persistence:[Hw,kw,md]}),s=pf("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(s,location.origin);if(location.origin===o.origin){const a=FI(o.toString());Cw(n,a,()=>a(n.currentUser)),Aw(n,l=>a(l))}}const i=ff("auth");return i&&vw(n,`http://${i}`),n}function VI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}dw({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const o=bt("internal-error");o.customData=i,n(o)},s.type="text/javascript",s.charset="UTF-8",VI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MI("Browser");var vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ha;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,_){function m(){}m.prototype=_.prototype,S.D=_.prototype,S.prototype=new m,S.prototype.constructor=S,S.C=function(E,T,b){for(var v=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)v[ve-2]=arguments[ve];return _.prototype[T].apply(E,v)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,_,m){m||(m=0);var E=Array(16);if(typeof _=="string")for(var T=0;16>T;++T)E[T]=_.charCodeAt(m++)|_.charCodeAt(m++)<<8|_.charCodeAt(m++)<<16|_.charCodeAt(m++)<<24;else for(T=0;16>T;++T)E[T]=_[m++]|_[m++]<<8|_[m++]<<16|_[m++]<<24;_=S.g[0],m=S.g[1],T=S.g[2];var b=S.g[3],v=_+(b^m&(T^b))+E[0]+3614090360&4294967295;_=m+(v<<7&4294967295|v>>>25),v=b+(T^_&(m^T))+E[1]+3905402710&4294967295,b=_+(v<<12&4294967295|v>>>20),v=T+(m^b&(_^m))+E[2]+606105819&4294967295,T=b+(v<<17&4294967295|v>>>15),v=m+(_^T&(b^_))+E[3]+3250441966&4294967295,m=T+(v<<22&4294967295|v>>>10),v=_+(b^m&(T^b))+E[4]+4118548399&4294967295,_=m+(v<<7&4294967295|v>>>25),v=b+(T^_&(m^T))+E[5]+1200080426&4294967295,b=_+(v<<12&4294967295|v>>>20),v=T+(m^b&(_^m))+E[6]+2821735955&4294967295,T=b+(v<<17&4294967295|v>>>15),v=m+(_^T&(b^_))+E[7]+4249261313&4294967295,m=T+(v<<22&4294967295|v>>>10),v=_+(b^m&(T^b))+E[8]+1770035416&4294967295,_=m+(v<<7&4294967295|v>>>25),v=b+(T^_&(m^T))+E[9]+2336552879&4294967295,b=_+(v<<12&4294967295|v>>>20),v=T+(m^b&(_^m))+E[10]+4294925233&4294967295,T=b+(v<<17&4294967295|v>>>15),v=m+(_^T&(b^_))+E[11]+2304563134&4294967295,m=T+(v<<22&4294967295|v>>>10),v=_+(b^m&(T^b))+E[12]+1804603682&4294967295,_=m+(v<<7&4294967295|v>>>25),v=b+(T^_&(m^T))+E[13]+4254626195&4294967295,b=_+(v<<12&4294967295|v>>>20),v=T+(m^b&(_^m))+E[14]+2792965006&4294967295,T=b+(v<<17&4294967295|v>>>15),v=m+(_^T&(b^_))+E[15]+1236535329&4294967295,m=T+(v<<22&4294967295|v>>>10),v=_+(T^b&(m^T))+E[1]+4129170786&4294967295,_=m+(v<<5&4294967295|v>>>27),v=b+(m^T&(_^m))+E[6]+3225465664&4294967295,b=_+(v<<9&4294967295|v>>>23),v=T+(_^m&(b^_))+E[11]+643717713&4294967295,T=b+(v<<14&4294967295|v>>>18),v=m+(b^_&(T^b))+E[0]+3921069994&4294967295,m=T+(v<<20&4294967295|v>>>12),v=_+(T^b&(m^T))+E[5]+3593408605&4294967295,_=m+(v<<5&4294967295|v>>>27),v=b+(m^T&(_^m))+E[10]+38016083&4294967295,b=_+(v<<9&4294967295|v>>>23),v=T+(_^m&(b^_))+E[15]+3634488961&4294967295,T=b+(v<<14&4294967295|v>>>18),v=m+(b^_&(T^b))+E[4]+3889429448&4294967295,m=T+(v<<20&4294967295|v>>>12),v=_+(T^b&(m^T))+E[9]+568446438&4294967295,_=m+(v<<5&4294967295|v>>>27),v=b+(m^T&(_^m))+E[14]+3275163606&4294967295,b=_+(v<<9&4294967295|v>>>23),v=T+(_^m&(b^_))+E[3]+4107603335&4294967295,T=b+(v<<14&4294967295|v>>>18),v=m+(b^_&(T^b))+E[8]+1163531501&4294967295,m=T+(v<<20&4294967295|v>>>12),v=_+(T^b&(m^T))+E[13]+2850285829&4294967295,_=m+(v<<5&4294967295|v>>>27),v=b+(m^T&(_^m))+E[2]+4243563512&4294967295,b=_+(v<<9&4294967295|v>>>23),v=T+(_^m&(b^_))+E[7]+1735328473&4294967295,T=b+(v<<14&4294967295|v>>>18),v=m+(b^_&(T^b))+E[12]+2368359562&4294967295,m=T+(v<<20&4294967295|v>>>12),v=_+(m^T^b)+E[5]+4294588738&4294967295,_=m+(v<<4&4294967295|v>>>28),v=b+(_^m^T)+E[8]+2272392833&4294967295,b=_+(v<<11&4294967295|v>>>21),v=T+(b^_^m)+E[11]+1839030562&4294967295,T=b+(v<<16&4294967295|v>>>16),v=m+(T^b^_)+E[14]+4259657740&4294967295,m=T+(v<<23&4294967295|v>>>9),v=_+(m^T^b)+E[1]+2763975236&4294967295,_=m+(v<<4&4294967295|v>>>28),v=b+(_^m^T)+E[4]+1272893353&4294967295,b=_+(v<<11&4294967295|v>>>21),v=T+(b^_^m)+E[7]+4139469664&4294967295,T=b+(v<<16&4294967295|v>>>16),v=m+(T^b^_)+E[10]+3200236656&4294967295,m=T+(v<<23&4294967295|v>>>9),v=_+(m^T^b)+E[13]+681279174&4294967295,_=m+(v<<4&4294967295|v>>>28),v=b+(_^m^T)+E[0]+3936430074&4294967295,b=_+(v<<11&4294967295|v>>>21),v=T+(b^_^m)+E[3]+3572445317&4294967295,T=b+(v<<16&4294967295|v>>>16),v=m+(T^b^_)+E[6]+76029189&4294967295,m=T+(v<<23&4294967295|v>>>9),v=_+(m^T^b)+E[9]+3654602809&4294967295,_=m+(v<<4&4294967295|v>>>28),v=b+(_^m^T)+E[12]+3873151461&4294967295,b=_+(v<<11&4294967295|v>>>21),v=T+(b^_^m)+E[15]+530742520&4294967295,T=b+(v<<16&4294967295|v>>>16),v=m+(T^b^_)+E[2]+3299628645&4294967295,m=T+(v<<23&4294967295|v>>>9),v=_+(T^(m|~b))+E[0]+4096336452&4294967295,_=m+(v<<6&4294967295|v>>>26),v=b+(m^(_|~T))+E[7]+1126891415&4294967295,b=_+(v<<10&4294967295|v>>>22),v=T+(_^(b|~m))+E[14]+2878612391&4294967295,T=b+(v<<15&4294967295|v>>>17),v=m+(b^(T|~_))+E[5]+4237533241&4294967295,m=T+(v<<21&4294967295|v>>>11),v=_+(T^(m|~b))+E[12]+1700485571&4294967295,_=m+(v<<6&4294967295|v>>>26),v=b+(m^(_|~T))+E[3]+2399980690&4294967295,b=_+(v<<10&4294967295|v>>>22),v=T+(_^(b|~m))+E[10]+4293915773&4294967295,T=b+(v<<15&4294967295|v>>>17),v=m+(b^(T|~_))+E[1]+2240044497&4294967295,m=T+(v<<21&4294967295|v>>>11),v=_+(T^(m|~b))+E[8]+1873313359&4294967295,_=m+(v<<6&4294967295|v>>>26),v=b+(m^(_|~T))+E[15]+4264355552&4294967295,b=_+(v<<10&4294967295|v>>>22),v=T+(_^(b|~m))+E[6]+2734768916&4294967295,T=b+(v<<15&4294967295|v>>>17),v=m+(b^(T|~_))+E[13]+1309151649&4294967295,m=T+(v<<21&4294967295|v>>>11),v=_+(T^(m|~b))+E[4]+4149444226&4294967295,_=m+(v<<6&4294967295|v>>>26),v=b+(m^(_|~T))+E[11]+3174756917&4294967295,b=_+(v<<10&4294967295|v>>>22),v=T+(_^(b|~m))+E[2]+718787259&4294967295,T=b+(v<<15&4294967295|v>>>17),v=m+(b^(T|~_))+E[9]+3951481745&4294967295,S.g[0]=S.g[0]+_&4294967295,S.g[1]=S.g[1]+(T+(v<<21&4294967295|v>>>11))&4294967295,S.g[2]=S.g[2]+T&4294967295,S.g[3]=S.g[3]+b&4294967295}s.prototype.u=function(S,_){_===void 0&&(_=S.length);for(var m=_-this.blockSize,E=this.B,T=this.h,b=0;b<_;){if(T==0)for(;b<=m;)i(this,S,b),b+=this.blockSize;if(typeof S=="string"){for(;b<_;)if(E[T++]=S.charCodeAt(b++),T==this.blockSize){i(this,E),T=0;break}}else for(;b<_;)if(E[T++]=S[b++],T==this.blockSize){i(this,E),T=0;break}}this.h=T,this.o+=_},s.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var _=1;_<S.length-8;++_)S[_]=0;var m=8*this.o;for(_=S.length-8;_<S.length;++_)S[_]=m&255,m/=256;for(this.u(S),S=Array(16),_=m=0;4>_;++_)for(var E=0;32>E;E+=8)S[m++]=this.g[_]>>>E&255;return S};function o(S,_){var m=l;return Object.prototype.hasOwnProperty.call(m,S)?m[S]:m[S]=_(S)}function a(S,_){this.h=_;for(var m=[],E=!0,T=S.length-1;0<=T;T--){var b=S[T]|0;E&&b==_||(m[T]=b,E=!1)}this.g=m}var l={};function u(S){return-128<=S&&128>S?o(S,function(_){return new a([_|0],0>_?-1:0)}):new a([S|0],0>S?-1:0)}function f(S){if(isNaN(S)||!isFinite(S))return g;if(0>S)return G(f(-S));for(var _=[],m=1,E=0;S>=m;E++)_[E]=S/m|0,m*=4294967296;return new a(_,0)}function p(S,_){if(S.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(S.charAt(0)=="-")return G(p(S.substring(1),_));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(_,8)),E=g,T=0;T<S.length;T+=8){var b=Math.min(8,S.length-T),v=parseInt(S.substring(T,T+b),_);8>b?(b=f(Math.pow(_,b)),E=E.j(b).add(f(v))):(E=E.j(m),E=E.add(f(v)))}return E}var g=u(0),w=u(1),A=u(16777216);t=a.prototype,t.m=function(){if(L(this))return-G(this).m();for(var S=0,_=1,m=0;m<this.g.length;m++){var E=this.i(m);S+=(0<=E?E:4294967296+E)*_,_*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(N(this))return"0";if(L(this))return"-"+G(this).toString(S);for(var _=f(Math.pow(S,6)),m=this,E="";;){var T=B(m,_).g;m=q(m,T.j(_));var b=((0<m.g.length?m.g[0]:m.h)>>>0).toString(S);if(m=T,N(m))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function N(S){if(S.h!=0)return!1;for(var _=0;_<S.g.length;_++)if(S.g[_]!=0)return!1;return!0}function L(S){return S.h==-1}t.l=function(S){return S=q(this,S),L(S)?-1:N(S)?0:1};function G(S){for(var _=S.g.length,m=[],E=0;E<_;E++)m[E]=~S.g[E];return new a(m,~S.h).add(w)}t.abs=function(){return L(this)?G(this):this},t.add=function(S){for(var _=Math.max(this.g.length,S.g.length),m=[],E=0,T=0;T<=_;T++){var b=E+(this.i(T)&65535)+(S.i(T)&65535),v=(b>>>16)+(this.i(T)>>>16)+(S.i(T)>>>16);E=v>>>16,b&=65535,v&=65535,m[T]=v<<16|b}return new a(m,m[m.length-1]&-2147483648?-1:0)};function q(S,_){return S.add(G(_))}t.j=function(S){if(N(this)||N(S))return g;if(L(this))return L(S)?G(this).j(G(S)):G(G(this).j(S));if(L(S))return G(this.j(G(S)));if(0>this.l(A)&&0>S.l(A))return f(this.m()*S.m());for(var _=this.g.length+S.g.length,m=[],E=0;E<2*_;E++)m[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<S.g.length;T++){var b=this.i(E)>>>16,v=this.i(E)&65535,ve=S.i(T)>>>16,ke=S.i(T)&65535;m[2*E+2*T]+=v*ke,V(m,2*E+2*T),m[2*E+2*T+1]+=b*ke,V(m,2*E+2*T+1),m[2*E+2*T+1]+=v*ve,V(m,2*E+2*T+1),m[2*E+2*T+2]+=b*ve,V(m,2*E+2*T+2)}for(E=0;E<_;E++)m[E]=m[2*E+1]<<16|m[2*E];for(E=_;E<2*_;E++)m[E]=0;return new a(m,0)};function V(S,_){for(;(S[_]&65535)!=S[_];)S[_+1]+=S[_]>>>16,S[_]&=65535,_++}function $(S,_){this.g=S,this.h=_}function B(S,_){if(N(_))throw Error("division by zero");if(N(S))return new $(g,g);if(L(S))return _=B(G(S),_),new $(G(_.g),G(_.h));if(L(_))return _=B(S,G(_)),new $(G(_.g),_.h);if(30<S.g.length){if(L(S)||L(_))throw Error("slowDivide_ only works with positive integers.");for(var m=w,E=_;0>=E.l(S);)m=se(m),E=se(E);var T=ie(m,1),b=ie(E,1);for(E=ie(E,2),m=ie(m,2);!N(E);){var v=b.add(E);0>=v.l(S)&&(T=T.add(m),b=v),E=ie(E,1),m=ie(m,1)}return _=q(S,T.j(_)),new $(T,_)}for(T=g;0<=S.l(_);){for(m=Math.max(1,Math.floor(S.m()/_.m())),E=Math.ceil(Math.log(m)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=f(m),v=b.j(_);L(v)||0<v.l(S);)m-=E,b=f(m),v=b.j(_);N(b)&&(b=w),T=T.add(b),S=q(S,v)}return new $(T,S)}t.A=function(S){return B(this,S).h},t.and=function(S){for(var _=Math.max(this.g.length,S.g.length),m=[],E=0;E<_;E++)m[E]=this.i(E)&S.i(E);return new a(m,this.h&S.h)},t.or=function(S){for(var _=Math.max(this.g.length,S.g.length),m=[],E=0;E<_;E++)m[E]=this.i(E)|S.i(E);return new a(m,this.h|S.h)},t.xor=function(S){for(var _=Math.max(this.g.length,S.g.length),m=[],E=0;E<_;E++)m[E]=this.i(E)^S.i(E);return new a(m,this.h^S.h)};function se(S){for(var _=S.g.length+1,m=[],E=0;E<_;E++)m[E]=S.i(E)<<1|S.i(E-1)>>>31;return new a(m,S.h)}function ie(S,_){var m=_>>5;_%=32;for(var E=S.g.length-m,T=[],b=0;b<E;b++)T[b]=0<_?S.i(b+m)>>>_|S.i(b+m+1)<<32-_:S.i(b+m);return new a(T,S.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,Ha=a}).apply(typeof vu<"u"?vu:typeof self<"u"?self:typeof window<"u"?window:{});var Wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,c,h){return r==Array.prototype||r==Object.prototype||(r[c]=h.value),r};function n(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wi=="object"&&Wi];for(var c=0;c<r.length;++c){var h=r[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=n(this);function i(r,c){if(c)e:{var h=s;r=r.split(".");for(var d=0;d<r.length-1;d++){var R=r[d];if(!(R in h))break e;h=h[R]}r=r[r.length-1],d=h[r],c=c(d),c!=d&&c!=null&&e(h,r,{configurable:!0,writable:!0,value:c})}}function o(r,c){r instanceof String&&(r+="");var h=0,d=!1,R={next:function(){if(!d&&h<r.length){var P=h++;return{value:c(P,r[P]),done:!1}}return d=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(r){return r||function(){return o(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(r){var c=typeof r;return c=c!="object"?c:r?Array.isArray(r)?"array":c:"null",c=="array"||c=="object"&&typeof r.length=="number"}function f(r){var c=typeof r;return c=="object"&&r!=null||c=="function"}function p(r,c,h){return r.call.apply(r.bind,arguments)}function g(r,c,h){if(!r)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,d),r.apply(c,R)}}return function(){return r.apply(c,arguments)}}function w(r,c,h){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,w.apply(null,arguments)}function A(r,c){var h=Array.prototype.slice.call(arguments,1);return function(){var d=h.slice();return d.push.apply(d,arguments),r.apply(this,d)}}function N(r,c){function h(){}h.prototype=c.prototype,r.aa=c.prototype,r.prototype=new h,r.prototype.constructor=r,r.Qb=function(d,R,P){for(var j=Array(arguments.length-2),we=2;we<arguments.length;we++)j[we-2]=arguments[we];return c.prototype[R].apply(d,j)}}function L(r){const c=r.length;if(0<c){const h=Array(c);for(let d=0;d<c;d++)h[d]=r[d];return h}return[]}function G(r,c){for(let h=1;h<arguments.length;h++){const d=arguments[h];if(u(d)){const R=r.length||0,P=d.length||0;r.length=R+P;for(let j=0;j<P;j++)r[R+j]=d[j]}else r.push(d)}}class q{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function V(r){return/^[\s\xa0]*$/.test(r)}function $(){var r=l.navigator;return r&&(r=r.userAgent)?r:""}function B(r){return B[" "](r),r}B[" "]=function(){};var se=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function ie(r,c,h){for(const d in r)c.call(h,r[d],d,r)}function S(r,c){for(const h in r)c.call(void 0,r[h],h,r)}function _(r){const c={};for(const h in r)c[h]=r[h];return c}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(r,c){let h,d;for(let R=1;R<arguments.length;R++){d=arguments[R];for(h in d)r[h]=d[h];for(let P=0;P<m.length;P++)h=m[P],Object.prototype.hasOwnProperty.call(d,h)&&(r[h]=d[h])}}function T(r){var c=1;r=r.split(":");const h=[];for(;0<c&&r.length;)h.push(r.shift()),c--;return r.length&&h.push(r.join(":")),h}function b(r){l.setTimeout(()=>{throw r},0)}function v(){var r=et;let c=null;return r.g&&(c=r.g,r.g=r.g.next,r.g||(r.h=null),c.next=null),c}class ve{constructor(){this.h=this.g=null}add(c,h){const d=ke.get();d.set(c,h),this.h?this.h.next=d:this.g=d,this.h=d}}var ke=new q(()=>new Se,r=>r.reset());class Se{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,ae=!1,et=new ve,ft=()=>{const r=l.Promise.resolve(void 0);ce=()=>{r.then(it)}};var it=()=>{for(var r;r=v();){try{r.h.call(r.g)}catch(h){b(h)}var c=ke;c.j(r),100>c.h&&(c.h++,r.next=c.g,c.g=r)}ae=!1};function Ae(){this.s=this.s,this.C=this.C}Ae.prototype.s=!1,Ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ce(r,c){this.type=r,this.g=this.target=c,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var on=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var r=!1,c=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return r}();function Rt(r,c){if(Ce.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var h=this.type=r.type,d=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=c,c=r.relatedTarget){if(se){e:{try{B(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else h=="mouseover"?c=r.fromElement:h=="mouseout"&&(c=r.toElement);this.relatedTarget=c,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:Ye[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Rt.aa.h.call(this)}}N(Rt,Ce);var Ye={2:"touch",3:"pen",4:"mouse"};Rt.prototype.h=function(){Rt.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),K=0;function z(r,c,h,d,R){this.listener=r,this.proxy=null,this.src=c,this.type=h,this.capture=!!d,this.ha=R,this.key=++K,this.da=this.fa=!1}function J(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function de(r){this.src=r,this.g={},this.h=0}de.prototype.add=function(r,c,h,d,R){var P=r.toString();r=this.g[P],r||(r=this.g[P]=[],this.h++);var j=I(r,c,d,R);return-1<j?(c=r[j],h||(c.fa=!1)):(c=new z(c,this.src,P,!!d,R),c.fa=h,r.push(c)),c};function y(r,c){var h=c.type;if(h in r.g){var d=r.g[h],R=Array.prototype.indexOf.call(d,c,void 0),P;(P=0<=R)&&Array.prototype.splice.call(d,R,1),P&&(J(c),r.g[h].length==0&&(delete r.g[h],r.h--))}}function I(r,c,h,d){for(var R=0;R<r.length;++R){var P=r[R];if(!P.da&&P.listener==c&&P.capture==!!h&&P.ha==d)return R}return-1}var C="closure_lm_"+(1e6*Math.random()|0),k={};function x(r,c,h,d,R){if(Array.isArray(c)){for(var P=0;P<c.length;P++)x(r,c[P],h,d,R);return null}return h=Z(h),r&&r[O]?r.K(c,h,f(d)?!!d.capture:!1,R):D(r,c,h,!1,d,R)}function D(r,c,h,d,R,P){if(!c)throw Error("Invalid event type");var j=f(R)?!!R.capture:!!R,we=H(r);if(we||(r[C]=we=new de(r)),h=we.add(c,h,d,j,P),h.proxy)return h;if(d=W(),h.proxy=d,d.src=r,d.listener=h,r.addEventListener)on||(R=j),R===void 0&&(R=!1),r.addEventListener(c.toString(),d,R);else if(r.attachEvent)r.attachEvent(M(c.toString()),d);else if(r.addListener&&r.removeListener)r.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return h}function W(){function r(h){return c.call(r.src,r.listener,h)}const c=Y;return r}function F(r,c,h,d,R){if(Array.isArray(c))for(var P=0;P<c.length;P++)F(r,c[P],h,d,R);else d=f(d)?!!d.capture:!!d,h=Z(h),r&&r[O]?(r=r.i,c=String(c).toString(),c in r.g&&(P=r.g[c],h=I(P,h,d,R),-1<h&&(J(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete r.g[c],r.h--)))):r&&(r=H(r))&&(c=r.g[c.toString()],r=-1,c&&(r=I(c,h,d,R)),(h=-1<r?c[r]:null)&&U(h))}function U(r){if(typeof r!="number"&&r&&!r.da){var c=r.src;if(c&&c[O])y(c.i,r);else{var h=r.type,d=r.proxy;c.removeEventListener?c.removeEventListener(h,d,r.capture):c.detachEvent?c.detachEvent(M(h),d):c.addListener&&c.removeListener&&c.removeListener(d),(h=H(c))?(y(h,r),h.h==0&&(h.src=null,c[C]=null)):J(r)}}}function M(r){return r in k?k[r]:k[r]="on"+r}function Y(r,c){if(r.da)r=!0;else{c=new Rt(c,this);var h=r.listener,d=r.ha||r.src;r.fa&&U(r),r=h.call(d,c)}return r}function H(r){return r=r[C],r instanceof de?r:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(r){return typeof r=="function"?r:(r[X]||(r[X]=function(c){return r.handleEvent(c)}),r[X])}function Q(){Ae.call(this),this.i=new de(this),this.M=this,this.F=null}N(Q,Ae),Q.prototype[O]=!0,Q.prototype.removeEventListener=function(r,c,h,d){F(this,r,c,h,d)};function re(r,c){var h,d=r.F;if(d)for(h=[];d;d=d.F)h.push(d);if(r=r.M,d=c.type||c,typeof c=="string")c=new Ce(c,r);else if(c instanceof Ce)c.target=c.target||r;else{var R=c;c=new Ce(d,r),E(c,R)}if(R=!0,h)for(var P=h.length-1;0<=P;P--){var j=c.g=h[P];R=le(j,d,!0,c)&&R}if(j=c.g=r,R=le(j,d,!0,c)&&R,R=le(j,d,!1,c)&&R,h)for(P=0;P<h.length;P++)j=c.g=h[P],R=le(j,d,!1,c)&&R}Q.prototype.N=function(){if(Q.aa.N.call(this),this.i){var r=this.i,c;for(c in r.g){for(var h=r.g[c],d=0;d<h.length;d++)J(h[d]);delete r.g[c],r.h--}}this.F=null},Q.prototype.K=function(r,c,h,d){return this.i.add(String(r),c,!1,h,d)},Q.prototype.L=function(r,c,h,d){return this.i.add(String(r),c,!0,h,d)};function le(r,c,h,d){if(c=r.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,P=0;P<c.length;++P){var j=c[P];if(j&&!j.da&&j.capture==h){var we=j.listener,Ue=j.ha||j.src;j.fa&&y(r.i,j),R=we.call(Ue,d)!==!1&&R}}return R&&!d.defaultPrevented}function xe(r,c,h){if(typeof r=="function")h&&(r=w(r,h));else if(r&&typeof r.handleEvent=="function")r=w(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(r,c||0)}function Me(r){r.g=xe(()=>{r.g=null,r.i&&(r.i=!1,Me(r))},r.l);const c=r.h;r.h=null,r.m.apply(null,c)}class rt extends Ae{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Me(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function je(r){Ae.call(this),this.h=r,this.g={}}N(je,Ae);var an=[];function Ts(r){ie(r.g,function(c,h){this.g.hasOwnProperty(h)&&U(c)},r),r.g={}}je.prototype.N=function(){je.aa.N.call(this),Ts(this)},je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Le=l.JSON.stringify,ot=l.JSON.parse,Ai=class{stringify(r){return l.JSON.stringify(r,void 0)}parse(r){return l.JSON.parse(r,void 0)}};function Vr(){}Vr.prototype.h=null;function Ja(r){return r.h||(r.h=r.i())}function Nd(){}var Ss={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $r(){Ce.call(this,"d")}N($r,Ce);function Br(){Ce.call(this,"c")}N(Br,Ce);var ts={},Xa=null;function Hr(){return Xa=Xa||new Q}ts.La="serverreachability";function Ya(r){Ce.call(this,ts.La,r)}N(Ya,Ce);function As(r){const c=Hr();re(c,new Ya(c))}ts.STAT_EVENT="statevent";function Qa(r,c){Ce.call(this,ts.STAT_EVENT,r),this.stat=c}N(Qa,Ce);function We(r){const c=Hr();re(c,new Qa(c,r))}ts.Ma="timingevent";function Za(r,c){Ce.call(this,ts.Ma,r),this.size=c}N(Za,Ce);function Cs(r,c){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){r()},c)}function Rs(){this.g=!0}Rs.prototype.xa=function(){this.g=!1};function Dd(r,c,h,d,R,P){r.info(function(){if(r.g)if(P)for(var j="",we=P.split("&"),Ue=0;Ue<we.length;Ue++){var pe=we[Ue].split("=");if(1<pe.length){var Ve=pe[0];pe=pe[1];var $e=Ve.split("_");j=2<=$e.length&&$e[1]=="type"?j+(Ve+"="+pe+"&"):j+(Ve+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+d+") [attempt "+R+"]: "+c+`
`+h+`
`+j})}function xd(r,c,h,d,R,P,j){r.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+R+"]: "+c+`
`+h+`
`+P+" "+j})}function ns(r,c,h,d){r.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ld(r,h)+(d?" "+d:"")})}function Md(r,c){r.info(function(){return"TIMEOUT: "+c})}Rs.prototype.info=function(){};function Ld(r,c){if(!r.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(r=0;r<h.length;r++)if(Array.isArray(h[r])){var d=h[r];if(!(2>d.length)){var R=d[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return Le(h)}catch{return c}}var Wr={NO_ERROR:0,TIMEOUT:8},Ud={},zr;function Ci(){}N(Ci,Vr),Ci.prototype.g=function(){return new XMLHttpRequest},Ci.prototype.i=function(){return{}},zr=new Ci;function cn(r,c,h,d){this.j=r,this.i=c,this.l=h,this.R=d||1,this.U=new je(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ec}function ec(){this.i=null,this.g="",this.h=!1}var tc={},Gr={};function qr(r,c,h){r.L=1,r.v=ki(Bt(c)),r.m=h,r.P=!0,nc(r,null)}function nc(r,c){r.F=Date.now(),Ri(r),r.A=Bt(r.v);var h=r.A,d=r.R;Array.isArray(d)||(d=[String(d)]),mc(h.i,"t",d),r.C=0,h=r.j.J,r.h=new ec,r.g=xc(r.j,h?c:null,!r.m),0<r.O&&(r.M=new rt(w(r.Y,r,r.g),r.O)),c=r.U,h=r.g,d=r.ca;var R="readystatechange";Array.isArray(R)||(R&&(an[0]=R.toString()),R=an);for(var P=0;P<R.length;P++){var j=x(h,R[P],d||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=r.H?_(r.H):{},r.m?(r.u||(r.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,c)):(r.u="GET",r.g.ea(r.A,r.u,null,c)),As(),Dd(r.i,r.u,r.A,r.l,r.R,r.m)}cn.prototype.ca=function(r){r=r.target;const c=this.M;c&&Ht(r)==3?c.j():this.Y(r)},cn.prototype.Y=function(r){try{if(r==this.g)e:{const $e=Ht(this.g);var c=this.g.Ba();const rs=this.g.Z();if(!(3>$e)&&($e!=3||this.g&&(this.h.h||this.g.oa()||Ec(this.g)))){this.J||$e!=4||c==7||(c==8||0>=rs?As(3):As(2)),Kr(this);var h=this.g.Z();this.X=h;t:if(sc(this)){var d=Ec(this.g);r="";var R=d.length,P=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rn(this),Ps(this);var j="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,r+=this.h.i.decode(d[c],{stream:!(P&&c==R-1)});d.length=0,this.h.g+=r,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=h==200,xd(this.i,this.u,this.A,this.l,this.R,$e,h),this.o){if(this.T&&!this.K){t:{if(this.g){var we,Ue=this.g;if((we=Ue.g?Ue.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(we)){var pe=we;break t}}pe=null}if(h=pe)ns(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jr(this,h);else{this.o=!1,this.s=3,We(12),Rn(this),Ps(this);break e}}if(this.P){h=!0;let dt;for(;!this.J&&this.C<j.length;)if(dt=Fd(this,j),dt==Gr){$e==4&&(this.s=4,We(14),h=!1),ns(this.i,this.l,null,"[Incomplete Response]");break}else if(dt==tc){this.s=4,We(15),ns(this.i,this.l,j,"[Invalid Chunk]"),h=!1;break}else ns(this.i,this.l,dt,null),Jr(this,dt);if(sc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$e!=4||j.length!=0||this.h.h||(this.s=1,We(16),h=!1),this.o=this.o&&h,!h)ns(this.i,this.l,j,"[Invalid Chunked Response]"),Rn(this),Ps(this);else if(0<j.length&&!this.W){this.W=!0;var Ve=this.j;Ve.g==this&&Ve.ba&&!Ve.M&&(Ve.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),to(Ve),Ve.M=!0,We(11))}}else ns(this.i,this.l,j,null),Jr(this,j);$e==4&&Rn(this),this.o&&!this.J&&($e==4?Oc(this.j,this):(this.o=!1,Ri(this)))}else tp(this.g),h==400&&0<j.indexOf("Unknown SID")?(this.s=3,We(12)):(this.s=0,We(13)),Rn(this),Ps(this)}}}catch{}finally{}};function sc(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Fd(r,c){var h=r.C,d=c.indexOf(`
`,h);return d==-1?Gr:(h=Number(c.substring(h,d)),isNaN(h)?tc:(d+=1,d+h>c.length?Gr:(c=c.slice(d,d+h),r.C=d+h,c)))}cn.prototype.cancel=function(){this.J=!0,Rn(this)};function Ri(r){r.S=Date.now()+r.I,ic(r,r.I)}function ic(r,c){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Cs(w(r.ba,r),c)}function Kr(r){r.B&&(l.clearTimeout(r.B),r.B=null)}cn.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Md(this.i,this.A),this.L!=2&&(As(),We(17)),Rn(this),this.s=2,Ps(this)):ic(this,this.S-r)};function Ps(r){r.j.G==0||r.J||Oc(r.j,r)}function Rn(r){Kr(r);var c=r.M;c&&typeof c.ma=="function"&&c.ma(),r.M=null,Ts(r.U),r.g&&(c=r.g,r.g=null,c.abort(),c.ma())}function Jr(r,c){try{var h=r.j;if(h.G!=0&&(h.g==r||Xr(h.h,r))){if(!r.K&&Xr(h.h,r)&&h.G==3){try{var d=h.Da.g.parse(c)}catch{d=null}if(Array.isArray(d)&&d.length==3){var R=d;if(R[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<r.F)Ui(h),Mi(h);else break e;eo(h),We(18)}}else h.za=R[1],0<h.za-h.T&&37500>R[2]&&h.F&&h.v==0&&!h.C&&(h.C=Cs(w(h.Za,h),6e3));if(1>=ac(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else On(h,11)}else if((r.K||h.g==r)&&Ui(h),!V(c))for(R=h.Da.g.parse(c),c=0;c<R.length;c++){let pe=R[c];if(h.T=pe[0],pe=pe[1],h.G==2)if(pe[0]=="c"){h.K=pe[1],h.ia=pe[2];const Ve=pe[3];Ve!=null&&(h.la=Ve,h.j.info("VER="+h.la));const $e=pe[4];$e!=null&&(h.Aa=$e,h.j.info("SVER="+h.Aa));const rs=pe[5];rs!=null&&typeof rs=="number"&&0<rs&&(d=1.5*rs,h.L=d,h.j.info("backChannelRequestTimeoutMs_="+d)),d=h;const dt=r.g;if(dt){const Fi=dt.g?dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fi){var P=d.h;P.g||Fi.indexOf("spdy")==-1&&Fi.indexOf("quic")==-1&&Fi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Yr(P,P.h),P.h=null))}if(d.D){const no=dt.g?dt.g.getResponseHeader("X-HTTP-Session-Id"):null;no&&(d.ya=no,Ee(d.I,d.D,no))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-r.F,h.j.info("Handshake RTT: "+h.R+"ms")),d=h;var j=r;if(d.qa=Dc(d,d.J?d.ia:null,d.W),j.K){cc(d.h,j);var we=j,Ue=d.L;Ue&&(we.I=Ue),we.B&&(Kr(we),Ri(we)),d.g=j}else Rc(d);0<h.i.length&&Li(h)}else pe[0]!="stop"&&pe[0]!="close"||On(h,7);else h.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?On(h,7):Zr(h):pe[0]!="noop"&&h.l&&h.l.ta(pe),h.v=0)}}As(4)}catch{}}var jd=class{constructor(r,c){this.g=r,this.map=c}};function rc(r){this.l=r||10,l.PerformanceNavigationTiming?(r=l.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function oc(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function ac(r){return r.h?1:r.g?r.g.size:0}function Xr(r,c){return r.h?r.h==c:r.g?r.g.has(c):!1}function Yr(r,c){r.g?r.g.add(c):r.h=c}function cc(r,c){r.h&&r.h==c?r.h=null:r.g&&r.g.has(c)&&r.g.delete(c)}rc.prototype.cancel=function(){if(this.i=lc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function lc(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let c=r.i;for(const h of r.g.values())c=c.concat(h.D);return c}return L(r.i)}function Vd(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(u(r)){for(var c=[],h=r.length,d=0;d<h;d++)c.push(r[d]);return c}c=[],h=0;for(d in r)c[h++]=r[d];return c}function $d(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(u(r)||typeof r=="string"){var c=[];r=r.length;for(var h=0;h<r;h++)c.push(h);return c}c=[],h=0;for(const d in r)c[h++]=d;return c}}}function uc(r,c){if(r.forEach&&typeof r.forEach=="function")r.forEach(c,void 0);else if(u(r)||typeof r=="string")Array.prototype.forEach.call(r,c,void 0);else for(var h=$d(r),d=Vd(r),R=d.length,P=0;P<R;P++)c.call(void 0,d[P],h&&h[P],r)}var hc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bd(r,c){if(r){r=r.split("&");for(var h=0;h<r.length;h++){var d=r[h].indexOf("="),R=null;if(0<=d){var P=r[h].substring(0,d);R=r[h].substring(d+1)}else P=r[h];c(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Pn(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Pn){this.h=r.h,Pi(this,r.j),this.o=r.o,this.g=r.g,Oi(this,r.s),this.l=r.l;var c=r.i,h=new Ns;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),fc(this,h),this.m=r.m}else r&&(c=String(r).match(hc))?(this.h=!1,Pi(this,c[1]||"",!0),this.o=Os(c[2]||""),this.g=Os(c[3]||"",!0),Oi(this,c[4]),this.l=Os(c[5]||"",!0),fc(this,c[6]||"",!0),this.m=Os(c[7]||"")):(this.h=!1,this.i=new Ns(null,this.h))}Pn.prototype.toString=function(){var r=[],c=this.j;c&&r.push(ks(c,dc,!0),":");var h=this.g;return(h||c=="file")&&(r.push("//"),(c=this.o)&&r.push(ks(c,dc,!0),"@"),r.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&r.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&r.push("/"),r.push(ks(h,h.charAt(0)=="/"?zd:Wd,!0))),(h=this.i.toString())&&r.push("?",h),(h=this.m)&&r.push("#",ks(h,qd)),r.join("")};function Bt(r){return new Pn(r)}function Pi(r,c,h){r.j=h?Os(c,!0):c,r.j&&(r.j=r.j.replace(/:$/,""))}function Oi(r,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);r.s=c}else r.s=null}function fc(r,c,h){c instanceof Ns?(r.i=c,Kd(r.i,r.h)):(h||(c=ks(c,Gd)),r.i=new Ns(c,r.h))}function Ee(r,c,h){r.i.set(c,h)}function ki(r){return Ee(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Os(r,c){return r?c?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function ks(r,c,h){return typeof r=="string"?(r=encodeURI(r).replace(c,Hd),h&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Hd(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var dc=/[#\/\?@]/g,Wd=/[#\?:]/g,zd=/[#\?]/g,Gd=/[#\?@]/g,qd=/#/g;function Ns(r,c){this.h=this.g=null,this.i=r||null,this.j=!!c}function ln(r){r.g||(r.g=new Map,r.h=0,r.i&&Bd(r.i,function(c,h){r.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=Ns.prototype,t.add=function(r,c){ln(this),this.i=null,r=ss(this,r);var h=this.g.get(r);return h||this.g.set(r,h=[]),h.push(c),this.h+=1,this};function pc(r,c){ln(r),c=ss(r,c),r.g.has(c)&&(r.i=null,r.h-=r.g.get(c).length,r.g.delete(c))}function gc(r,c){return ln(r),c=ss(r,c),r.g.has(c)}t.forEach=function(r,c){ln(this),this.g.forEach(function(h,d){h.forEach(function(R){r.call(c,R,d,this)},this)},this)},t.na=function(){ln(this);const r=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let d=0;d<c.length;d++){const R=r[d];for(let P=0;P<R.length;P++)h.push(c[d])}return h},t.V=function(r){ln(this);let c=[];if(typeof r=="string")gc(this,r)&&(c=c.concat(this.g.get(ss(this,r))));else{r=Array.from(this.g.values());for(let h=0;h<r.length;h++)c=c.concat(r[h])}return c},t.set=function(r,c){return ln(this),this.i=null,r=ss(this,r),gc(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[c]),this.h+=1,this},t.get=function(r,c){return r?(r=this.V(r),0<r.length?String(r[0]):c):c};function mc(r,c,h){pc(r,c),0<h.length&&(r.i=null,r.g.set(ss(r,c),L(h)),r.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var d=c[h];const P=encodeURIComponent(String(d)),j=this.V(d);for(d=0;d<j.length;d++){var R=P;j[d]!==""&&(R+="="+encodeURIComponent(String(j[d]))),r.push(R)}}return this.i=r.join("&")};function ss(r,c){return c=String(c),r.j&&(c=c.toLowerCase()),c}function Kd(r,c){c&&!r.j&&(ln(r),r.i=null,r.g.forEach(function(h,d){var R=d.toLowerCase();d!=R&&(pc(this,d),mc(this,R,h))},r)),r.j=c}function Jd(r,c){const h=new Rs;if(l.Image){const d=new Image;d.onload=A(un,h,"TestLoadImage: loaded",!0,c,d),d.onerror=A(un,h,"TestLoadImage: error",!1,c,d),d.onabort=A(un,h,"TestLoadImage: abort",!1,c,d),d.ontimeout=A(un,h,"TestLoadImage: timeout",!1,c,d),l.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=r}else c(!1)}function Xd(r,c){const h=new Rs,d=new AbortController,R=setTimeout(()=>{d.abort(),un(h,"TestPingServer: timeout",!1,c)},1e4);fetch(r,{signal:d.signal}).then(P=>{clearTimeout(R),P.ok?un(h,"TestPingServer: ok",!0,c):un(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),un(h,"TestPingServer: error",!1,c)})}function un(r,c,h,d,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),d(h)}catch{}}function Yd(){this.g=new Ai}function Qd(r,c,h){const d=h||"";try{uc(r,function(R,P){let j=R;f(R)&&(j=Le(R)),c.push(d+P+"="+encodeURIComponent(j))})}catch(R){throw c.push(d+"type="+encodeURIComponent("_badmap")),R}}function Ni(r){this.l=r.Ub||null,this.j=r.eb||!1}N(Ni,Vr),Ni.prototype.g=function(){return new Di(this.l,this.j)},Ni.prototype.i=function(r){return function(){return r}}({});function Di(r,c){Q.call(this),this.D=r,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Di,Q),t=Di.prototype,t.open=function(r,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=c,this.readyState=1,xs(this)},t.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(c.body=r),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ds(this)),this.readyState=0},t.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,xs(this)),this.g&&(this.readyState=3,xs(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_c(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function _c(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}t.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var c=r.value?r.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!r.done}))&&(this.response=this.responseText+=c)}r.done?Ds(this):xs(this),this.readyState==3&&_c(this)}},t.Ra=function(r){this.g&&(this.response=this.responseText=r,Ds(this))},t.Qa=function(r){this.g&&(this.response=r,Ds(this))},t.ga=function(){this.g&&Ds(this)};function Ds(r){r.readyState=4,r.l=null,r.j=null,r.v=null,xs(r)}t.setRequestHeader=function(r,c){this.u.append(r,c)},t.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,r.push(h[0]+": "+h[1]),h=c.next();return r.join(`\r
`)};function xs(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function yc(r){let c="";return ie(r,function(h,d){c+=d,c+=":",c+=h,c+=`\r
`}),c}function Qr(r,c,h){e:{for(d in h){var d=!1;break e}d=!0}d||(h=yc(h),typeof r=="string"?h!=null&&encodeURIComponent(String(h)):Ee(r,c,h))}function Re(r){Q.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Re,Q);var Zd=/^https?$/i,ep=["POST","PUT"];t=Re.prototype,t.Ha=function(r){this.J=r},t.ea=function(r,c,h,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);c=c?c.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zr.g(),this.v=this.o?Ja(this.o):Ja(zr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(c,String(r),!0),this.B=!1}catch(P){vc(this,P);return}if(r=h||"",h=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var R in d)h.set(R,d[R]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const P of d.keys())h.set(P,d.get(P));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),R=l.FormData&&r instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ep,c,void 0))||d||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of h)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bc(this),this.u=!0,this.g.send(r),this.u=!1}catch(P){vc(this,P)}};function vc(r,c){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=c,r.m=5,wc(r),xi(r)}function wc(r){r.A||(r.A=!0,re(r,"complete"),re(r,"error"))}t.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,re(this,"complete"),re(this,"abort"),xi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xi(this,!0)),Re.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ic(this):this.bb())},t.bb=function(){Ic(this)};function Ic(r){if(r.h&&typeof a<"u"&&(!r.v[1]||Ht(r)!=4||r.Z()!=2)){if(r.u&&Ht(r)==4)xe(r.Ea,0,r);else if(re(r,"readystatechange"),Ht(r)==4){r.h=!1;try{const j=r.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var d;if(d=j===0){var R=String(r.D).match(hc)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),d=!Zd.test(R?R.toLowerCase():"")}h=d}if(h)re(r,"complete"),re(r,"success");else{r.m=6;try{var P=2<Ht(r)?r.g.statusText:""}catch{P=""}r.l=P+" ["+r.Z()+"]",wc(r)}}finally{xi(r)}}}}function xi(r,c){if(r.g){bc(r);const h=r.g,d=r.v[0]?()=>{}:null;r.g=null,r.v=null,c||re(r,"ready");try{h.onreadystatechange=d}catch{}}}function bc(r){r.I&&(l.clearTimeout(r.I),r.I=null)}t.isActive=function(){return!!this.g};function Ht(r){return r.g?r.g.readyState:0}t.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(r){if(this.g){var c=this.g.responseText;return r&&c.indexOf(r)==0&&(c=c.substring(r.length)),ot(c)}};function Ec(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function tp(r){const c={};r=(r.g&&2<=Ht(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<r.length;d++){if(V(r[d]))continue;var h=T(r[d]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=c[R]||[];c[R]=P,P.push(h)}S(c,function(d){return d.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ms(r,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[r]||c}function Tc(r){this.Aa=0,this.i=[],this.j=new Rs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ms("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ms("baseRetryDelayMs",5e3,r),this.cb=Ms("retryDelaySeedMs",1e4,r),this.Wa=Ms("forwardChannelMaxRetries",2,r),this.wa=Ms("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new rc(r&&r.concurrentRequestLimit),this.Da=new Yd,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Tc.prototype,t.la=8,t.G=1,t.connect=function(r,c,h,d){We(0),this.W=r,this.H=c||{},h&&d!==void 0&&(this.H.OSID=h,this.H.OAID=d),this.F=this.X,this.I=Dc(this,null,this.W),Li(this)};function Zr(r){if(Sc(r),r.G==3){var c=r.U++,h=Bt(r.I);if(Ee(h,"SID",r.K),Ee(h,"RID",c),Ee(h,"TYPE","terminate"),Ls(r,h),c=new cn(r,r.j,c),c.L=2,c.v=ki(Bt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=xc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Ri(c)}Nc(r)}function Mi(r){r.g&&(to(r),r.g.cancel(),r.g=null)}function Sc(r){Mi(r),r.u&&(l.clearTimeout(r.u),r.u=null),Ui(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&l.clearTimeout(r.s),r.s=null)}function Li(r){if(!oc(r.h)&&!r.s){r.s=!0;var c=r.Ga;ce||ft(),ae||(ce(),ae=!0),et.add(c,r),r.B=0}}function np(r,c){return ac(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=c.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Cs(w(r.Ga,r,c),kc(r,r.B)),r.B++,!0)}t.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const R=new cn(this,this.j,r);let P=this.o;if(this.S&&(P?(P=_(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var d=this.i[h];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(c+=d,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Cc(this,R,c),h=Bt(this.I),Ee(h,"RID",r),Ee(h,"CVER",22),this.D&&Ee(h,"X-HTTP-Session-Id",this.D),Ls(this,h),P&&(this.O?c="headers="+encodeURIComponent(String(yc(P)))+"&"+c:this.m&&Qr(h,this.m,P)),Yr(this.h,R),this.Ua&&Ee(h,"TYPE","init"),this.P?(Ee(h,"$req",c),Ee(h,"SID","null"),R.T=!0,qr(R,h,null)):qr(R,h,c),this.G=2}}else this.G==3&&(r?Ac(this,r):this.i.length==0||oc(this.h)||Ac(this))};function Ac(r,c){var h;c?h=c.l:h=r.U++;const d=Bt(r.I);Ee(d,"SID",r.K),Ee(d,"RID",h),Ee(d,"AID",r.T),Ls(r,d),r.m&&r.o&&Qr(d,r.m,r.o),h=new cn(r,r.j,h,r.B+1),r.m===null&&(h.H=r.o),c&&(r.i=c.D.concat(r.i)),c=Cc(r,h,1e3),h.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Yr(r.h,h),qr(h,d,c)}function Ls(r,c){r.H&&ie(r.H,function(h,d){Ee(c,d,h)}),r.l&&uc({},function(h,d){Ee(c,d,h)})}function Cc(r,c,h){h=Math.min(r.i.length,h);var d=r.l?w(r.l.Na,r.l,r):null;e:{var R=r.i;let P=-1;for(;;){const j=["count="+h];P==-1?0<h?(P=R[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let we=!0;for(let Ue=0;Ue<h;Ue++){let pe=R[Ue].g;const Ve=R[Ue].map;if(pe-=P,0>pe)P=Math.max(0,R[Ue].g-100),we=!1;else try{Qd(Ve,j,"req"+pe+"_")}catch{d&&d(Ve)}}if(we){d=j.join("&");break e}}}return r=r.i.splice(0,h),c.D=r,d}function Rc(r){if(!r.g&&!r.u){r.Y=1;var c=r.Fa;ce||ft(),ae||(ce(),ae=!0),et.add(c,r),r.v=0}}function eo(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Cs(w(r.Fa,r),kc(r,r.v)),r.v++,!0)}t.Fa=function(){if(this.u=null,Pc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Cs(w(this.ab,this),r)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,We(10),Mi(this),Pc(this))};function to(r){r.A!=null&&(l.clearTimeout(r.A),r.A=null)}function Pc(r){r.g=new cn(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var c=Bt(r.qa);Ee(c,"RID","rpc"),Ee(c,"SID",r.K),Ee(c,"AID",r.T),Ee(c,"CI",r.F?"0":"1"),!r.F&&r.ja&&Ee(c,"TO",r.ja),Ee(c,"TYPE","xmlhttp"),Ls(r,c),r.m&&r.o&&Qr(c,r.m,r.o),r.L&&(r.g.I=r.L);var h=r.g;r=r.ia,h.L=1,h.v=ki(Bt(c)),h.m=null,h.P=!0,nc(h,r)}t.Za=function(){this.C!=null&&(this.C=null,Mi(this),eo(this),We(19))};function Ui(r){r.C!=null&&(l.clearTimeout(r.C),r.C=null)}function Oc(r,c){var h=null;if(r.g==c){Ui(r),to(r),r.g=null;var d=2}else if(Xr(r.h,c))h=c.D,cc(r.h,c),d=1;else return;if(r.G!=0){if(c.o)if(d==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var R=r.B;d=Hr(),re(d,new Za(d,h)),Li(r)}else Rc(r);else if(R=c.s,R==3||R==0&&0<c.X||!(d==1&&np(r,c)||d==2&&eo(r)))switch(h&&0<h.length&&(c=r.h,c.i=c.i.concat(h)),R){case 1:On(r,5);break;case 4:On(r,10);break;case 3:On(r,6);break;default:On(r,2)}}}function kc(r,c){let h=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(h*=2),h*c}function On(r,c){if(r.j.info("Error code "+c),c==2){var h=w(r.fb,r),d=r.Xa;const R=!d;d=new Pn(d||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Pi(d,"https"),ki(d),R?Jd(d.toString(),h):Xd(d.toString(),h)}else We(2);r.G=0,r.l&&r.l.sa(c),Nc(r),Sc(r)}t.fb=function(r){r?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function Nc(r){if(r.G=0,r.ka=[],r.l){const c=lc(r.h);(c.length!=0||r.i.length!=0)&&(G(r.ka,c),G(r.ka,r.i),r.h.i.length=0,L(r.i),r.i.length=0),r.l.ra()}}function Dc(r,c,h){var d=h instanceof Pn?Bt(h):new Pn(h);if(d.g!="")c&&(d.g=c+"."+d.g),Oi(d,d.s);else{var R=l.location;d=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var P=new Pn(null);d&&Pi(P,d),c&&(P.g=c),R&&Oi(P,R),h&&(P.l=h),d=P}return h=r.D,c=r.ya,h&&c&&Ee(d,h,c),Ee(d,"VER",r.la),Ls(r,d),d}function xc(r,c,h){if(c&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=r.Ca&&!r.pa?new Re(new Ni({eb:h})):new Re(r.pa),c.Ha(r.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mc(){}t=Mc.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function at(r,c){Q.call(this),this.g=new Tc(c),this.l=r,this.h=c&&c.messageUrlParams||null,r=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(r?r["X-WebChannel-Content-Type"]=c.messageContentType:r={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(r?r["X-WebChannel-Client-Profile"]=c.va:r={"X-WebChannel-Client-Profile":c.va}),this.g.S=r,(r=c&&c.Sb)&&!V(r)&&(this.g.m=r),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!V(c)&&(this.g.D=c,r=this.h,r!==null&&c in r&&(r=this.h,c in r&&delete r[c])),this.j=new is(this)}N(at,Q),at.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},at.prototype.close=function(){Zr(this.g)},at.prototype.o=function(r){var c=this.g;if(typeof r=="string"){var h={};h.__data__=r,r=h}else this.u&&(h={},h.__data__=Le(r),r=h);c.i.push(new jd(c.Ya++,r)),c.G==3&&Li(c)},at.prototype.N=function(){this.g.l=null,delete this.j,Zr(this.g),delete this.g,at.aa.N.call(this)};function Lc(r){$r.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var c=r.__sm__;if(c){e:{for(const h in c){r=h;break e}r=void 0}(this.i=r)&&(r=this.i,c=c!==null&&r in c?c[r]:void 0),this.data=c}else this.data=r}N(Lc,$r);function Uc(){Br.call(this),this.status=1}N(Uc,Br);function is(r){this.g=r}N(is,Mc),is.prototype.ua=function(){re(this.g,"a")},is.prototype.ta=function(r){re(this.g,new Lc(r))},is.prototype.sa=function(r){re(this.g,new Uc)},is.prototype.ra=function(){re(this.g,"b")},at.prototype.send=at.prototype.o,at.prototype.open=at.prototype.m,at.prototype.close=at.prototype.close,Wr.NO_ERROR=0,Wr.TIMEOUT=8,Wr.HTTP_ERROR=6,Ud.COMPLETE="complete",Nd.EventType=Ss,Ss.OPEN="a",Ss.CLOSE="b",Ss.ERROR="c",Ss.MESSAGE="d",Q.prototype.listen=Q.prototype.K,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha}).apply(typeof Wi<"u"?Wi:typeof self<"u"?self:typeof window<"u"?window:{});const wu="@firebase/firestore",Iu="4.8.0";/**
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
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
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
 */let Ei="11.10.0";/**
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
 */const Is=new xr("@firebase/firestore");function vt(t,...e){if(Is.logLevel<=ye.DEBUG){const n=e.map(Wa);Is.debug(`Firestore (${Ei}): ${t}`,...n)}}function Td(t,...e){if(Is.logLevel<=ye.ERROR){const n=e.map(Wa);Is.error(`Firestore (${Ei}): ${t}`,...n)}}function $I(t,...e){if(Is.logLevel<=ye.WARN){const n=e.map(Wa);Is.warn(`Firestore (${Ei}): ${t}`,...n)}}function Wa(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function gi(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,Sd(t,s,n)}function Sd(t,e,n){let s=`FIRESTORE (${Ei}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Td(s),new Error(s)}function ti(t,e,n,s){let i="Unexpected state";typeof n=="string"?i=n:s=n,t||Sd(e,i,s)}/**
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
 */const he={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class fe extends Ct{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ni{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ad{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class HI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class WI{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ti(this.o===void 0,42304);let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let o=new ni;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ni,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{vt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(vt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ni)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(vt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ti(typeof s.accessToken=="string",31837,{l:s}),new Ad(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ti(e===null||typeof e=="string",2055,{h:e}),new Ge(e)}}class zI{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class GI{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new zI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ti(this.o===void 0,3512);const s=o=>{o.error!=null&&vt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,vt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>s(o))};const i=o=>{vt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):vt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new bu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ti(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new bu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function KI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */function JI(){return new TextEncoder}/**
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
 */class XI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=KI(40);for(let o=0;o<i.length;++o)s.length<20&&i[o]<n&&(s+=e.charAt(i[o]%62))}return s}}function Et(t,e){return t<e?-1:t>e?1:0}function YI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=t.codePointAt(n),i=e.codePointAt(n);if(s!==i){if(s<128&&i<128)return Et(s,i);{const o=JI(),a=QI(o.encode(Eu(t,n)),o.encode(Eu(e,n)));return a!==0?a:Et(s,i)}}n+=s>65535?2:1}return Et(t.length,e.length)}function Eu(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function QI(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Et(t[n],e[n]);return Et(t.length,e.length)}/**
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
 */const Tu="__name__";class kt{constructor(e,n,s){n===void 0?n=0:n>e.length&&gi(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&gi(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return kt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kt?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const o=kt.compareSegments(e.get(i),n.get(i));if(o!==0)return o}return Et(e.length,n.length)}static compareSegments(e,n){const s=kt.isNumericId(e),i=kt.isNumericId(n);return s&&!i?-1:!s&&i?1:s&&i?kt.extractNumericId(e).compare(kt.extractNumericId(n)):YI(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ha.fromString(e.substring(4,e.length-2))}}class pt extends kt{construct(e,n,s){return new pt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new fe(he.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new pt(n)}static emptyPath(){return new pt([])}}const ZI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fn extends kt{construct(e,n,s){return new Fn(e,n,s)}static isValidIdentifier(e){return ZI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Tu}static keyField(){return new Fn([Tu])}static fromServerFormat(e){const n=[];let s="",i=0;const o=()=>{if(s.length===0)throw new fe(he.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new fe(he.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new fe(he.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(s+=l,i++):(o(),i++)}if(o(),a)throw new fe(he.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fn(n)}static emptyPath(){return new Fn([])}}/**
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
 */class $n{constructor(e){this.path=e}static fromPath(e){return new $n(pt.fromString(e))}static fromName(e){return new $n(pt.fromString(e).popFirst(5))}static empty(){return new $n(pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $n(new pt(e.slice()))}}function eb(t,e,n,s){if(e===!0&&s===!0)throw new fe(he.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function tb(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function nb(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":gi(12329,{type:typeof t})}function sb(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new fe(he.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nb(t);throw new fe(he.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Pe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ti(t,e){if(!tb(t))throw new fe(he.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const i=e[s].typeString,o="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const a=t[s];if(i&&typeof a!==i){n=`JSON field '${s}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){n=`Expected '${s}' field to equal '${o.value}'`;break}}if(n)throw new fe(he.INVALID_ARGUMENT,n);return!0}/**
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
 */const Su=-62135596800,Au=1e6;class xt{static now(){return xt.fromMillis(Date.now())}static fromDate(e){return xt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Au);return new xt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new fe(he.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new fe(he.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Su)throw new fe(he.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(he.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Au}_compareTo(e){return this.seconds===e.seconds?Et(this.nanoseconds,e.nanoseconds):Et(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:xt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ti(e,xt._jsonSchema))return new xt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Su;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}xt._jsonSchemaVersion="firestore/timestamp/1.0",xt._jsonSchema={type:Pe("string",xt._jsonSchemaVersion),seconds:Pe("number"),nanoseconds:Pe("number")};function ib(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class rb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Yn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new rb("Invalid base64 string: "+o):o}}(e);return new Yn(n)}static fromUint8Array(e){const n=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new Yn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Et(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Yn.EMPTY_BYTE_STRING=new Yn("");const ta="(default)";class yr{constructor(e,n){this.projectId=e,this.database=n||ta}static empty(){return new yr("","")}get isDefaultDatabase(){return this.database===ta}isEqual(e){return e instanceof yr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class ob{constructor(e,n=null,s=[],i=[],o=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function ab(t){return new ob(t)}/**
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
 */var Cu,ue;(ue=Cu||(Cu={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Ha([4294967295,4294967295],0);/**
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
 */const cb=41943040;/**
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
 */const lb=1048576;function Po(){return typeof document<"u"?document:null}/**
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
 */class ub{constructor(e,n,s=1e3,i=1.5,o=6e4){this.Fi=e,this.timerId=n,this.d_=s,this.E_=i,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-s);i>0&&vt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */class za{constructor(e,n,s,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=o,this.deferred=new ni,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,o){const a=Date.now()+s,l=new za(e,n,a,i,o);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(he.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ru,Pu;(Pu=Ru||(Ru={})).Fa="default",Pu.Cache="cache";/**
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
 */function hb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ou=new Map;/**
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
 */const Cd="firestore.googleapis.com",ku=!0;class Nu{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new fe(he.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Cd,this.ssl=ku}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:ku;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=cb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<lb)throw new fe(he.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hb((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new fe(he.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new fe(he.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new fe(he.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rd{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(he.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(he.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new BI;switch(s.type){case"firstParty":return new GI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new fe(he.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Ou.get(n);s&&(vt("ComponentProvider","Removing Datastore"),Ou.delete(n),s.terminate())}(this),Promise.resolve()}}function fb(t,e,n,s={}){var i;t=sb(t,Rd);const o=yi(e),a=t._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;o&&(gf(`https://${u}`),mf("Firestore",!0)),a.host!==Cd&&a.host!==u&&$I("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:u,ssl:o,emulatorOptions:s});if(!An(f,l)&&(t._setSettings(f),s.mockUserToken)){let p,g;if(typeof s.mockUserToken=="string")p=s.mockUserToken,g=Ge.MOCK_USER;else{p=K_(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new fe(he.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ge(w)}t._authCredentials=new HI(new Ad(p,g))}}/**
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
 */class Ga{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ga(this.firestore,e,this._query)}}class Lt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}toJSON(){return{type:Lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Ti(n,Lt._jsonSchema))return new Lt(e,s||null,new $n(pt.fromString(n.referencePath)))}}Lt._jsonSchemaVersion="firestore/documentReference/1.0",Lt._jsonSchema={type:Pe("string",Lt._jsonSchemaVersion),referencePath:Pe("string")};class qa extends Ga{constructor(e,n,s){super(e,n,ab(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new $n(e))}withConverter(e){return new qa(this.firestore,e,this._path)}}/**
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
 */const Du="AsyncQueue";class xu{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new ub(this,"async_queue_retry"),this.oc=()=>{const s=Po();s&&vt(Du,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const n=Po();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Po();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new ni;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ib(e))throw e;vt(Du,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,Td("INTERNAL UNHANDLED ERROR: ",Mu(s)),s}).then(s=>(this.nc=!1,s))));return this._c=n,n}enqueueAfterDelay(e,n,s){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=za.createAndSchedule(this,e,n,s,o=>this.lc(o));return this.ec.push(i),i}ac(){this.tc&&gi(47125,{hc:Mu(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Mu(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class db extends Rd{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new xu,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xu(e),this._firestoreClient=void 0,await e}}}function pb(t,e){const n=typeof t=="object"?t:Aa(),s=typeof t=="string"?t:ta,i=es(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const o=G_("firestore");o&&fb(i,...o)}return i}/**
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
 */class Xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xt(Yn.fromBase64String(e))}catch(n){throw new fe(he.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xt(Yn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ti(e,Xt._jsonSchema))return Xt.fromBase64String(e.bytes)}}Xt._jsonSchemaVersion="firestore/bytes/1.0",Xt._jsonSchema={type:Pe("string",Xt._jsonSchemaVersion),bytes:Pe("string")};/**
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
 */class Pd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new fe(he.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new fe(he.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new fe(he.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Et(this._lat,e._lat)||Et(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:zn._jsonSchemaVersion}}static fromJSON(e){if(Ti(e,zn._jsonSchema))return new zn(e.latitude,e.longitude)}}zn._jsonSchemaVersion="firestore/geoPoint/1.0",zn._jsonSchema={type:Pe("string",zn._jsonSchemaVersion),latitude:Pe("number"),longitude:Pe("number")};/**
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
 */class Gn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,i){if(s.length!==i.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==i[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Gn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ti(e,Gn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Gn(e.vectorValues);throw new fe(he.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Gn._jsonSchemaVersion="firestore/vectorValue/1.0",Gn._jsonSchema={type:Pe("string",Gn._jsonSchemaVersion),vectorValues:Pe("object")};const gb=new RegExp("[~\\*/\\[\\]]");function mb(t,e,n){if(e.search(gb)>=0)throw Lu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Pd(...e.split("."))._internalPath}catch{throw Lu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Lu(t,e,n,s,i){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new fe(he.INVALID_ARGUMENT,o+t+a)}/**
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
 */class Od{constructor(e,n,s,i,o){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _b(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(kd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _b extends Od{data(){return super.data()}}function kd(t,e){return typeof e=="string"?mb(t,e):e instanceof Pd?e._internalPath:e._delegate._internalPath}class zi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ms extends Od{constructor(e,n,s,i,o,a){super(e,n,s,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new tr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(kd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(he.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ms._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ms._jsonSchemaVersion="firestore/documentSnapshot/1.0",ms._jsonSchema={type:Pe("string",ms._jsonSchemaVersion),bundleSource:Pe("string","DocumentSnapshot"),bundleName:Pe("string"),bundle:Pe("string")};class tr extends ms{data(e={}){return super.data(e)}}class si{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new zi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new tr(this._firestore,this._userDataWriter,s.key,s,new zi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new fe(he.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new tr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new zi(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const u=new tr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new zi(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,p=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:yb(l.type),doc:u,oldIndex:f,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(he.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=si._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=XI.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(n.push(o._document),s.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function yb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return gi(61501,{type:t})}}si._jsonSchemaVersion="firestore/querySnapshot/1.0",si._jsonSchema={type:Pe("string",si._jsonSchemaVersion),bundleSource:Pe("string","QuerySnapshot"),bundleName:Pe("string"),bundle:Pe("string")};(function(e,n=!0){(function(i){Ei=i})(bs),Vt(new At("firestore",(s,{instanceIdentifier:i,options:o})=>{const a=s.getProvider("app").getImmediate(),l=new db(new WI(s.getProvider("auth-internal")),new qI(a,s.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new fe(he.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yr(f.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),ut(wu,Iu,e),ut(wu,Iu,"esm2017")})();const vb={apiKey:"AIzaSyBzR2w75nixO9H8zjUbxVajKx0npksSGrg",authDomain:"norsk-cafe.firebaseapp.com",projectId:"norsk-cafe",storageBucket:"norsk-cafe.firebasestorage.app",messagingSenderId:"123232580709",appId:"1:123232580709:web:c6e6dfed117db9d3b0028c",measurementId:void 0},Ka=Ef(vb);U0(Ka);const _s=jI(Ka);pb(Ka);const Si=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},wb={class:"header"},Ib={class:"header-user"},bb=["src"],Eb={key:0,class:"profile-menu"},Tb={__name:"Header",setup(t){const e=Dr(),n=zs(null),s=zs(!1),i=zs(null);Rr(()=>{n.value=_s.currentUser,_s.onAuthStateChanged(f=>{n.value=f}),document.addEventListener("click",a)}),_a(()=>{document.removeEventListener("click",a)});function o(){s.value=!s.value}function a(f){i.value&&!i.value.contains(f.target)&&(s.value=!1)}function l(){e.push("/login")}function u(){_s.signOut(),e.push("/login"),s.value=!1}return(f,p)=>(_t(),Mt("header",wb,[p[1]||(p[1]=oe("h1",{class:"header-title"},"Norsk Cafe",-1)),oe("div",Ib,[n.value?(_t(),Mt("div",{key:1,class:"profile-menu-wrapper",ref_key:"menuRef",ref:i},[oe("img",{src:n.value.photoURL||"https://via.placeholder.com/40",alt:"User Profile",class:"user-icon",onClick:o},null,8,bb),Ne(lm,{name:"fade-slide"},{default:gh(()=>[s.value?(_t(),Mt("div",Eb,[oe("button",{class:"menu-item",onClick:p[0]||(p[0]=()=>{})},"Acount"),oe("button",{class:"menu-item",onClick:u},"Logg ut")])):zg("",!0)]),_:1})],512)):(_t(),Mt("button",{key:0,class:"login-button",onClick:l}," Login "))])]))}},Sb=Si(Tb,[["__scopeId","data-v-a0378775"]]),Ab="data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%23fff'/%3e%3c/svg%3e",Cb={class:"footer"},Rb={class:"footer-end"},Pb={href:"https://github.com/fredrikofstad/norskcafe",target:"_blank",rel:"noopener noreferrer",class:"github-link"},Ob=["src"],kb={__name:"Footer",setup(t){return(e,n)=>(_t(),Mt("footer",Cb,[n[0]||(n[0]=oe("div",{class:"footer-start"},[oe("span",{class:"copyright"},"© 2025 Fredrik Ofstad")],-1)),oe("div",Rb,[oe("a",Pb,[oe("img",{src:Hn(Ab),alt:"GitHub",class:"github-icon"},null,8,Ob)])])]))}},Nb=Si(kb,[["__scopeId","data-v-3908bede"]]),Db={class:"page"},xb={class:"main-content"},Mb={__name:"App",setup(t){return(e,n)=>{const s=cg("router-view");return _t(),Mt("div",Db,[Ne(Sb),oe("main",xb,[Ne(s)]),Ne(Nb)])}}},Lb={class:"home-page"},Ub={__name:"Home",setup(t){const e=Dr();function n(){_s.currentUser?e.push("/dashboard"):e.push("/login")}return(s,i)=>(_t(),Mt("div",Lb,[oe("main",{class:"welcome"},[i[0]||(i[0]=oe("h1",null,"Velkommen!",-1)),i[1]||(i[1]=oe("p",null,"Her på Norsk Cafe skal vi lære norsk på en morsom og effektiv måte!",-1)),oe("button",{class:"start-button",onClick:n}," La oss komme i gang! ")])]))}},Fb=Si(Ub,[["__scopeId","data-v-0ba52f48"]]),jb={class:"login-page"},Vb={class:"login-content"},$b={class:"login-inner"},Bb={class:"gsi-material-button"},Hb={class:"gsi-material-button-content-wrapper"},Wb={class:"gsi-material-button-icon"},zb={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",style:{width:"24px",height:"24px"}},Gb={__name:"Login",setup(t){const e=Dr();async function n(){const s=new Jt;try{await Kw(_s,s),e.push("/dashboard")}catch(i){console.error("Google sign-in failed",i),alert("Google sign-in failed: "+i.message)}}return(s,i)=>(_t(),Mt("div",jb,[oe("main",Vb,[oe("div",$b,[i[2]||(i[2]=oe("h2",{class:"login-title"},"Velkommen tilbake!",-1)),i[3]||(i[3]=oe("p",{class:"login-subtitle"}," Logg inn med Google for å fortsette å lære norsk. ",-1)),oe("div",{class:"google-wrapper",onClick:n},[oe("button",Bb,[oe("div",Hb,[oe("div",Wb,[(_t(),Mt("svg",zb,i[0]||(i[0]=[Wg(`<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0\r
                    14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-e7300c23></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58\r
                    2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-e7300c23></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92\r
                    16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-e7300c23></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15\r
                    1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98\r
                    6.19C6.51 42.62 14.62 48 24 48z" data-v-e7300c23></path><path fill="none" d="M0 0h48v48H0z" data-v-e7300c23></path>`,5)])))]),i[1]||(i[1]=oe("span",{class:"gsi-material-button-contents"},"Fortsett med Google",-1))])])])])])]))}},qb=Si(Gb,[["__scopeId","data-v-e7300c23"]]),Kb={class:"dashboard-page"},Jb={class:"dashboard-content"},Xb={__name:"Dashboard",setup(t){const e=Dr(),n=zs("");return Rr(()=>{Rw(_s,s=>{if(s){const i=s.displayName||s.email||"Bruker";n.value=i.split(" ")[0]}else e.push("/login")})}),(s,i)=>(_t(),Mt("div",Kb,[oe("main",Jb,[oe("h2",null,"Hei "+Hu(n.value)+"!",1),i[0]||(i[0]=oe("p",null,"Velkommen til ditt dashboard. Ta en titt rundt!",-1)),i[1]||(i[1]=oe("section",{class:"courses-card"},[oe("h3",null,"Dine kurs"),oe("ul",{class:"courses-list"},[oe("li",null,"Lær nye ord"),oe("li",null,"Øv"),oe("li",null,"mer ting"),oe("li",null,"hei her også"),oe("li",null,"og litt her og")])],-1))])]))}},Yb=Si(Xb,[["__scopeId","data-v-8000fa0f"]]),Qb=[{path:"/",component:Fb},{path:"/login",component:qb},{path:"/dashboard",component:Yb}],Zb=L_({history:h_("/"),routes:Qb});Nm(Mb).use(Zb).mount("#app");
