(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function pa(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ie={},ps=[],Vt=()=>{},pp=()=>!1,Rr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ga=t=>t.startsWith("onUpdate:"),Me=Object.assign,ma=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gp=Object.prototype.hasOwnProperty,ve=(t,e)=>gp.call(t,e),ee=Array.isArray,gs=t=>Pr(t)==="[object Map]",Xu=t=>Pr(t)==="[object Set]",se=t=>typeof t=="function",Oe=t=>typeof t=="string",On=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",Yu=t=>(Se(t)||se(t))&&se(t.then)&&se(t.catch),Qu=Object.prototype.toString,Pr=t=>Qu.call(t),mp=t=>Pr(t).slice(8,-1),Zu=t=>Pr(t)==="[object Object]",va=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zs=pa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),kr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vp=/-(\w)/g,yt=kr(t=>t.replace(vp,(e,n)=>n?n.toUpperCase():"")),_p=/\B([A-Z])/g,Nn=kr(t=>t.replace(_p,"-$1").toLowerCase()),Or=kr(t=>t.charAt(0).toUpperCase()+t.slice(1)),go=kr(t=>t?`on${Or(t)}`:""),Sn=(t,e)=>!Object.is(t,e),Zi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$o=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Bo=t=>{const e=parseFloat(t);return isNaN(e)?t:e},yp=t=>{const e=Oe(t)?Number(t):NaN;return isNaN(e)?t:e};let Kl;const Nr=()=>Kl||(Kl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _a(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Oe(s)?Ep(s):_a(s);if(i)for(const o in i)e[o]=i[o]}return e}else if(Oe(t)||Se(t))return t}const wp=/;(?![^(]*\))/g,bp=/:([^]+)/,Ip=/\/\*[^]*?\*\//g;function Ep(t){const e={};return t.replace(Ip,"").split(wp).forEach(n=>{if(n){const s=n.split(bp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Dr(t){let e="";if(Oe(t))e=t;else if(ee(t))for(let n=0;n<t.length;n++){const s=Dr(t[n]);s&&(e+=s+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Tp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sp=pa(Tp);function eh(t){return!!t||t===""}const th=t=>!!(t&&t.__v_isRef===!0),be=t=>Oe(t)?t:t==null?"":ee(t)||Se(t)&&(t.toString===Qu||!se(t.toString))?th(t)?be(t.value):JSON.stringify(t,nh,2):String(t),nh=(t,e)=>th(e)?nh(t,e.value):gs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],o)=>(n[mo(s,o)+" =>"]=i,n),{})}:Xu(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>mo(n))}:On(e)?mo(e):Se(e)&&!ee(e)&&!Zu(e)?String(e):e,mo=(t,e="")=>{var n;return On(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nt;class Ap{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=nt,!e&&nt&&(this.index=(nt.scopes||(nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=nt;try{return nt=this,e()}finally{nt=n}}}on(){++this._on===1&&(this.prevScope=nt,nt=this)}off(){this._on>0&&--this._on===0&&(nt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Cp(){return nt}let Ee;const vo=new WeakSet;class sh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nt&&nt.active&&nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vo.has(this)&&(vo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||rh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jl(this),oh(this);const e=Ee,n=At;Ee=this,At=!0;try{return this.fn()}finally{ah(this),Ee=e,At=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ba(e);this.deps=this.depsTail=void 0,Jl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ho(this)&&this.run()}get dirty(){return Ho(this)}}let ih=0,qs,Ks;function rh(t,e=!1){if(t.flags|=8,e){t.next=Ks,Ks=t;return}t.next=qs,qs=t}function ya(){ih++}function wa(){if(--ih>0)return;if(Ks){let e=Ks;for(Ks=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;qs;){let e=qs;for(qs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function oh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ah(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),ba(s),Rp(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Ho(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(lh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function lh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ci)||(t.globalVersion=ci,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ho(t))))return;t.flags|=2;const e=t.dep,n=Ee,s=At;Ee=t,At=!0;try{oh(t);const i=t.fn(t._value);(e.version===0||Sn(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Ee=n,At=s,ah(t),t.flags&=-3}}function ba(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)ba(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Rp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let At=!0;const ch=[];function sn(){ch.push(At),At=!1}function rn(){const t=ch.pop();At=t===void 0?!0:t}function Jl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ee;Ee=void 0;try{e()}finally{Ee=n}}}let ci=0;class Pp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ia{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ee||!At||Ee===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ee)n=this.activeLink=new Pp(Ee,this),Ee.deps?(n.prevDep=Ee.depsTail,Ee.depsTail.nextDep=n,Ee.depsTail=n):Ee.deps=Ee.depsTail=n,uh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Ee.depsTail,n.nextDep=void 0,Ee.depsTail.nextDep=n,Ee.depsTail=n,Ee.deps===n&&(Ee.deps=s)}return n}trigger(e){this.version++,ci++,this.notify(e)}notify(e){ya();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{wa()}}}function uh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)uh(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Wo=new WeakMap,Kn=Symbol(""),Go=Symbol(""),ui=Symbol("");function qe(t,e,n){if(At&&Ee){let s=Wo.get(t);s||Wo.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Ia),i.map=s,i.key=n),i.track()}}function Yt(t,e,n,s,i,o){const a=Wo.get(t);if(!a){ci++;return}const c=u=>{u&&u.trigger()};if(ya(),e==="clear")a.forEach(c);else{const u=ee(t),f=u&&va(n);if(u&&n==="length"){const d=Number(s);a.forEach((g,v)=>{(v==="length"||v===ui||!On(v)&&v>=d)&&c(g)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),f&&c(a.get(ui)),e){case"add":u?f&&c(a.get("length")):(c(a.get(Kn)),gs(t)&&c(a.get(Go)));break;case"delete":u||(c(a.get(Kn)),gs(t)&&c(a.get(Go)));break;case"set":gs(t)&&c(a.get(Kn));break}}wa()}function us(t){const e=ge(t);return e===t?e:(qe(e,"iterate",ui),vt(t)?e:e.map(Be))}function xr(t){return qe(t=ge(t),"iterate",ui),t}const kp={__proto__:null,[Symbol.iterator](){return _o(this,Symbol.iterator,Be)},concat(...t){return us(this).concat(...t.map(e=>ee(e)?us(e):e))},entries(){return _o(this,"entries",t=>(t[1]=Be(t[1]),t))},every(t,e){return qt(this,"every",t,e,void 0,arguments)},filter(t,e){return qt(this,"filter",t,e,n=>n.map(Be),arguments)},find(t,e){return qt(this,"find",t,e,Be,arguments)},findIndex(t,e){return qt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return qt(this,"findLast",t,e,Be,arguments)},findLastIndex(t,e){return qt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return qt(this,"forEach",t,e,void 0,arguments)},includes(...t){return yo(this,"includes",t)},indexOf(...t){return yo(this,"indexOf",t)},join(t){return us(this).join(t)},lastIndexOf(...t){return yo(this,"lastIndexOf",t)},map(t,e){return qt(this,"map",t,e,void 0,arguments)},pop(){return Bs(this,"pop")},push(...t){return Bs(this,"push",t)},reduce(t,...e){return Xl(this,"reduce",t,e)},reduceRight(t,...e){return Xl(this,"reduceRight",t,e)},shift(){return Bs(this,"shift")},some(t,e){return qt(this,"some",t,e,void 0,arguments)},splice(...t){return Bs(this,"splice",t)},toReversed(){return us(this).toReversed()},toSorted(t){return us(this).toSorted(t)},toSpliced(...t){return us(this).toSpliced(...t)},unshift(...t){return Bs(this,"unshift",t)},values(){return _o(this,"values",Be)}};function _o(t,e,n){const s=xr(t),i=s[e]();return s!==t&&!vt(t)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.value&&(o.value=n(o.value)),o}),i}const Op=Array.prototype;function qt(t,e,n,s,i,o){const a=xr(t),c=a!==t&&!vt(t),u=a[e];if(u!==Op[e]){const g=u.apply(t,o);return c?Be(g):g}let f=n;a!==t&&(c?f=function(g,v){return n.call(this,Be(g),v,t)}:n.length>2&&(f=function(g,v){return n.call(this,g,v,t)}));const d=u.call(a,f,s);return c&&i?i(d):d}function Xl(t,e,n,s){const i=xr(t);let o=n;return i!==t&&(vt(t)?n.length>3&&(o=function(a,c,u){return n.call(this,a,c,u,t)}):o=function(a,c,u){return n.call(this,a,Be(c),u,t)}),i[e](o,...s)}function yo(t,e,n){const s=ge(t);qe(s,"iterate",ui);const i=s[e](...n);return(i===-1||i===!1)&&Sa(n[0])?(n[0]=ge(n[0]),s[e](...n)):i}function Bs(t,e,n=[]){sn(),ya();const s=ge(t)[e].apply(t,n);return wa(),rn(),s}const Np=pa("__proto__,__v_isRef,__isVue"),hh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(On));function Dp(t){On(t)||(t=String(t));const e=ge(this);return qe(e,"has",t),e.hasOwnProperty(t)}class fh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(i?o?Hp:mh:o?gh:ph).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const a=ee(e);if(!i){let u;if(a&&(u=kp[n]))return u;if(n==="hasOwnProperty")return Dp}const c=Reflect.get(e,n,Ke(e)?e:s);return(On(n)?hh.has(n):Np(n))||(i||qe(e,"get",n),o)?c:Ke(c)?a&&va(n)?c:c.value:Se(c)?i?_h(c):Lr(c):c}}class dh extends fh{constructor(e=!1){super(!1,e)}set(e,n,s,i){let o=e[n];if(!this._isShallow){const u=Rn(o);if(!vt(s)&&!Rn(s)&&(o=ge(o),s=ge(s)),!ee(e)&&Ke(o)&&!Ke(s))return u?!1:(o.value=s,!0)}const a=ee(e)&&va(n)?Number(n)<e.length:ve(e,n),c=Reflect.set(e,n,s,Ke(e)?e:i);return e===ge(i)&&(a?Sn(s,o)&&Yt(e,"set",n,s):Yt(e,"add",n,s)),c}deleteProperty(e,n){const s=ve(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Yt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!On(n)||!hh.has(n))&&qe(e,"has",n),s}ownKeys(e){return qe(e,"iterate",ee(e)?"length":Kn),Reflect.ownKeys(e)}}class xp extends fh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Lp=new dh,Mp=new xp,Up=new dh(!0);const zo=t=>t,zi=t=>Reflect.getPrototypeOf(t);function Fp(t,e,n){return function(...s){const i=this.__v_raw,o=ge(i),a=gs(o),c=t==="entries"||t===Symbol.iterator&&a,u=t==="keys"&&a,f=i[t](...s),d=n?zo:e?cr:Be;return!e&&qe(o,"iterate",u?Go:Kn),{next(){const{value:g,done:v}=f.next();return v?{value:g,done:v}:{value:c?[d(g[0]),d(g[1])]:d(g),done:v}},[Symbol.iterator](){return this}}}}function qi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jp(t,e){const n={get(i){const o=this.__v_raw,a=ge(o),c=ge(i);t||(Sn(i,c)&&qe(a,"get",i),qe(a,"get",c));const{has:u}=zi(a),f=e?zo:t?cr:Be;if(u.call(a,i))return f(o.get(i));if(u.call(a,c))return f(o.get(c));o!==a&&o.get(i)},get size(){const i=this.__v_raw;return!t&&qe(ge(i),"iterate",Kn),Reflect.get(i,"size",i)},has(i){const o=this.__v_raw,a=ge(o),c=ge(i);return t||(Sn(i,c)&&qe(a,"has",i),qe(a,"has",c)),i===c?o.has(i):o.has(i)||o.has(c)},forEach(i,o){const a=this,c=a.__v_raw,u=ge(c),f=e?zo:t?cr:Be;return!t&&qe(u,"iterate",Kn),c.forEach((d,g)=>i.call(o,f(d),f(g),a))}};return Me(n,t?{add:qi("add"),set:qi("set"),delete:qi("delete"),clear:qi("clear")}:{add(i){!e&&!vt(i)&&!Rn(i)&&(i=ge(i));const o=ge(this);return zi(o).has.call(o,i)||(o.add(i),Yt(o,"add",i,i)),this},set(i,o){!e&&!vt(o)&&!Rn(o)&&(o=ge(o));const a=ge(this),{has:c,get:u}=zi(a);let f=c.call(a,i);f||(i=ge(i),f=c.call(a,i));const d=u.call(a,i);return a.set(i,o),f?Sn(o,d)&&Yt(a,"set",i,o):Yt(a,"add",i,o),this},delete(i){const o=ge(this),{has:a,get:c}=zi(o);let u=a.call(o,i);u||(i=ge(i),u=a.call(o,i)),c&&c.call(o,i);const f=o.delete(i);return u&&Yt(o,"delete",i,void 0),f},clear(){const i=ge(this),o=i.size!==0,a=i.clear();return o&&Yt(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Fp(i,t,e)}),n}function Ea(t,e){const n=jp(t,e);return(s,i,o)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ve(n,i)&&i in s?n:s,i,o)}const Vp={get:Ea(!1,!1)},$p={get:Ea(!1,!0)},Bp={get:Ea(!0,!1)};const ph=new WeakMap,gh=new WeakMap,mh=new WeakMap,Hp=new WeakMap;function Wp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gp(t){return t.__v_skip||!Object.isExtensible(t)?0:Wp(mp(t))}function Lr(t){return Rn(t)?t:Ta(t,!1,Lp,Vp,ph)}function vh(t){return Ta(t,!1,Up,$p,gh)}function _h(t){return Ta(t,!0,Mp,Bp,mh)}function Ta(t,e,n,s,i){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=Gp(t);if(o===0)return t;const a=i.get(t);if(a)return a;const c=new Proxy(t,o===2?s:n);return i.set(t,c),c}function ms(t){return Rn(t)?ms(t.__v_raw):!!(t&&t.__v_isReactive)}function Rn(t){return!!(t&&t.__v_isReadonly)}function vt(t){return!!(t&&t.__v_isShallow)}function Sa(t){return t?!!t.__v_raw:!1}function ge(t){const e=t&&t.__v_raw;return e?ge(e):t}function zp(t){return!ve(t,"__v_skip")&&Object.isExtensible(t)&&$o(t,"__v_skip",!0),t}const Be=t=>Se(t)?Lr(t):t,cr=t=>Se(t)?_h(t):t;function Ke(t){return t?t.__v_isRef===!0:!1}function $e(t){return yh(t,!1)}function qp(t){return yh(t,!0)}function yh(t,e){return Ke(t)?t:new Kp(t,e)}class Kp{constructor(e,n){this.dep=new Ia,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ge(e),this._value=n?e:Be(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||vt(e)||Rn(e);e=s?e:ge(e),Sn(e,n)&&(this._rawValue=e,this._value=s?e:Be(e),this.dep.trigger())}}function lt(t){return Ke(t)?t.value:t}const Jp={get:(t,e,n)=>e==="__v_raw"?t:lt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ke(i)&&!Ke(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function wh(t){return ms(t)?t:new Proxy(t,Jp)}class Xp{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ia(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ci-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ee!==this)return rh(this,!0),!0}get value(){const e=this.dep.track();return lh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Yp(t,e,n=!1){let s,i;return se(t)?s=t:(s=t.get,i=t.set),new Xp(s,i,n)}const Ki={},ur=new WeakMap;let $n;function Qp(t,e=!1,n=$n){if(n){let s=ur.get(n);s||ur.set(n,s=[]),s.push(t)}}function Zp(t,e,n=Ie){const{immediate:s,deep:i,once:o,scheduler:a,augmentJob:c,call:u}=n,f=W=>i?W:vt(W)||i===!1||i===0?Qt(W,1):Qt(W);let d,g,v,A,k=!1,L=!1;if(Ke(t)?(g=()=>t.value,k=vt(t)):ms(t)?(g=()=>f(t),k=!0):ee(t)?(L=!0,k=t.some(W=>ms(W)||vt(W)),g=()=>t.map(W=>{if(Ke(W))return W.value;if(ms(W))return f(W);if(se(W))return u?u(W,2):W()})):se(t)?e?g=u?()=>u(t,2):t:g=()=>{if(v){sn();try{v()}finally{rn()}}const W=$n;$n=d;try{return u?u(t,3,[A]):t(A)}finally{$n=W}}:g=Vt,e&&i){const W=g,ie=i===!0?1/0:i;g=()=>Qt(W(),ie)}const B=Cp(),K=()=>{d.stop(),B&&B.active&&ma(B.effects,d)};if(o&&e){const W=e;e=(...ie)=>{W(...ie),K()}}let $=L?new Array(t.length).fill(Ki):Ki;const H=W=>{if(!(!(d.flags&1)||!d.dirty&&!W))if(e){const ie=d.run();if(i||k||(L?ie.some((re,S)=>Sn(re,$[S])):Sn(ie,$))){v&&v();const re=$n;$n=d;try{const S=[ie,$===Ki?void 0:L&&$[0]===Ki?[]:$,A];$=ie,u?u(e,3,S):e(...S)}finally{$n=re}}}else d.run()};return c&&c(H),d=new sh(g),d.scheduler=a?()=>a(H,!1):H,A=W=>Qp(W,!1,d),v=d.onStop=()=>{const W=ur.get(d);if(W){if(u)u(W,4);else for(const ie of W)ie();ur.delete(d)}},e?s?H(!0):$=d.run():a?a(H.bind(null,!0),!0):d.run(),K.pause=d.pause.bind(d),K.resume=d.resume.bind(d),K.stop=K,K}function Qt(t,e=1/0,n){if(e<=0||!Se(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ke(t))Qt(t.value,e,n);else if(ee(t))for(let s=0;s<t.length;s++)Qt(t[s],e,n);else if(Xu(t)||gs(t))t.forEach(s=>{Qt(s,e,n)});else if(Zu(t)){for(const s in t)Qt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Qt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ii(t,e,n,s){try{return s?t(...s):t()}catch(i){Mr(i,e,n)}}function Pt(t,e,n,s){if(se(t)){const i=Ii(t,e,n,s);return i&&Yu(i)&&i.catch(o=>{Mr(o,e,n)}),i}if(ee(t)){const i=[];for(let o=0;o<t.length;o++)i.push(Pt(t[o],e,n,s));return i}}function Mr(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ie;if(e){let c=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](t,u,f)===!1)return}c=c.parent}if(o){sn(),Ii(o,null,10,[t,u,f]),rn();return}}eg(t,n,i,s,a)}function eg(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Qe=[];let Lt=-1;const vs=[];let _n=null,hs=0;const bh=Promise.resolve();let hr=null;function Js(t){const e=hr||bh;return t?e.then(this?t.bind(this):t):e}function tg(t){let e=Lt+1,n=Qe.length;for(;e<n;){const s=e+n>>>1,i=Qe[s],o=hi(i);o<t||o===t&&i.flags&2?e=s+1:n=s}return e}function Aa(t){if(!(t.flags&1)){const e=hi(t),n=Qe[Qe.length-1];!n||!(t.flags&2)&&e>=hi(n)?Qe.push(t):Qe.splice(tg(e),0,t),t.flags|=1,Ih()}}function Ih(){hr||(hr=bh.then(Th))}function ng(t){ee(t)?vs.push(...t):_n&&t.id===-1?_n.splice(hs+1,0,t):t.flags&1||(vs.push(t),t.flags|=1),Ih()}function Yl(t,e,n=Lt+1){for(;n<Qe.length;n++){const s=Qe[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Qe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Eh(t){if(vs.length){const e=[...new Set(vs)].sort((n,s)=>hi(n)-hi(s));if(vs.length=0,_n){_n.push(...e);return}for(_n=e,hs=0;hs<_n.length;hs++){const n=_n[hs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}_n=null,hs=0}}const hi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Th(t){try{for(Lt=0;Lt<Qe.length;Lt++){const e=Qe[Lt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ii(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Lt<Qe.length;Lt++){const e=Qe[Lt];e&&(e.flags&=-2)}Lt=-1,Qe.length=0,Eh(),hr=null,(Qe.length||vs.length)&&Th()}}let st=null,Sh=null;function fr(t){const e=st;return st=t,Sh=t&&t.type.__scopeId||null,e}function Ur(t,e=st,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&cc(-1);const o=fr(e);let a;try{a=t(...i)}finally{fr(o),s._d&&cc(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function sg(t,e){if(st===null)return t;const n=Br(st),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=Ie]=e[i];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&Qt(a),s.push({dir:o,instance:n,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Un(t,e,n,s){const i=t.dirs,o=e&&e.dirs;for(let a=0;a<i.length;a++){const c=i[a];o&&(c.oldValue=o[a].value);let u=c.dir[s];u&&(sn(),Pt(u,n,8,[t.el,c,t,e]),rn())}}const ig=Symbol("_vte"),Ah=t=>t.__isTeleport,yn=Symbol("_leaveCb"),Ji=Symbol("_enterCb");function rg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ei(()=>{t.isMounted=!0}),Ra(()=>{t.isUnmounting=!0}),t}const gt=[Function,Array],Ch={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gt,onEnter:gt,onAfterEnter:gt,onEnterCancelled:gt,onBeforeLeave:gt,onLeave:gt,onAfterLeave:gt,onLeaveCancelled:gt,onBeforeAppear:gt,onAppear:gt,onAfterAppear:gt,onAppearCancelled:gt},Rh=t=>{const e=t.subTree;return e.component?Rh(e.component):e},og={name:"BaseTransition",props:Ch,setup(t,{slots:e}){const n=im(),s=rg();return()=>{const i=e.default&&Oh(e.default(),!0);if(!i||!i.length)return;const o=Ph(i),a=ge(t),{mode:c}=a;if(s.isLeaving)return wo(o);const u=Ql(o);if(!u)return wo(o);let f=qo(u,a,s,n,g=>f=g);u.type!==Ze&&fi(u,f);let d=n.subTree&&Ql(n.subTree);if(d&&d.type!==Ze&&!Hn(u,d)&&Rh(n).type!==Ze){let g=qo(d,a,s,n);if(fi(d,g),c==="out-in"&&u.type!==Ze)return s.isLeaving=!0,g.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete g.afterLeave,d=void 0},wo(o);c==="in-out"&&u.type!==Ze?g.delayLeave=(v,A,k)=>{const L=kh(s,d);L[String(d.key)]=d,v[yn]=()=>{A(),v[yn]=void 0,delete f.delayedLeave,d=void 0},f.delayedLeave=()=>{k(),delete f.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return o}}};function Ph(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Ze){e=n;break}}return e}const ag=og;function kh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function qo(t,e,n,s,i){const{appear:o,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:f,onAfterEnter:d,onEnterCancelled:g,onBeforeLeave:v,onLeave:A,onAfterLeave:k,onLeaveCancelled:L,onBeforeAppear:B,onAppear:K,onAfterAppear:$,onAppearCancelled:H}=e,W=String(t.key),ie=kh(n,t),re=(m,E)=>{m&&Pt(m,s,9,E)},S=(m,E)=>{const T=E[1];re(m,E),ee(m)?m.every(I=>I.length<=1)&&T():m.length<=1&&T()},_={mode:a,persisted:c,beforeEnter(m){let E=u;if(!n.isMounted)if(o)E=B||u;else return;m[yn]&&m[yn](!0);const T=ie[W];T&&Hn(t,T)&&T.el[yn]&&T.el[yn](),re(E,[m])},enter(m){let E=f,T=d,I=g;if(!n.isMounted)if(o)E=K||f,T=$||d,I=H||g;else return;let w=!1;const ye=m[Ji]=Le=>{w||(w=!0,Le?re(I,[m]):re(T,[m]),_.delayedLeave&&_.delayedLeave(),m[Ji]=void 0)};E?S(E,[m,ye]):ye()},leave(m,E){const T=String(t.key);if(m[Ji]&&m[Ji](!0),n.isUnmounting)return E();re(v,[m]);let I=!1;const w=m[yn]=ye=>{I||(I=!0,E(),ye?re(L,[m]):re(k,[m]),m[yn]=void 0,ie[T]===t&&delete ie[T])};ie[T]=t,A?S(A,[m,w]):w()},clone(m){const E=qo(m,e,n,s,i);return i&&i(E),E}};return _}function wo(t){if(Fr(t))return t=Pn(t),t.children=null,t}function Ql(t){if(!Fr(t))return Ah(t.type)&&t.children?Ph(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&se(n.default))return n.default()}}function fi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,fi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Oh(t,e=!1,n){let s=[],i=0;for(let o=0;o<t.length;o++){let a=t[o];const c=n==null?a.key:String(n)+String(a.key!=null?a.key:o);a.type===mt?(a.patchFlag&128&&i++,s=s.concat(Oh(a.children,e,c))):(e||a.type!==Ze)&&s.push(c!=null?Pn(a,{key:c}):a)}if(i>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function Ca(t,e){return se(t)?Me({name:t.name},e,{setup:t}):t}function Nh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Xs(t,e,n,s,i=!1){if(ee(t)){t.forEach((k,L)=>Xs(k,e&&(ee(e)?e[L]:e),n,s,i));return}if(Ys(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Xs(t,e,n,s.component.subTree);return}const o=s.shapeFlag&4?Br(s.component):s.el,a=i?null:o,{i:c,r:u}=t,f=e&&e.r,d=c.refs===Ie?c.refs={}:c.refs,g=c.setupState,v=ge(g),A=g===Ie?()=>!1:k=>ve(v,k);if(f!=null&&f!==u&&(Oe(f)?(d[f]=null,A(f)&&(g[f]=null)):Ke(f)&&(f.value=null)),se(u))Ii(u,c,12,[a,d]);else{const k=Oe(u),L=Ke(u);if(k||L){const B=()=>{if(t.f){const K=k?A(u)?g[u]:d[u]:u.value;i?ee(K)&&ma(K,o):ee(K)?K.includes(o)||K.push(o):k?(d[u]=[o],A(u)&&(g[u]=d[u])):(u.value=[o],t.k&&(d[t.k]=u.value))}else k?(d[u]=a,A(u)&&(g[u]=a)):L&&(u.value=a,t.k&&(d[t.k]=a))};a?(B.id=-1,ot(B,n)):B()}}}Nr().requestIdleCallback;Nr().cancelIdleCallback;const Ys=t=>!!t.type.__asyncLoader,Fr=t=>t.type.__isKeepAlive;function lg(t,e){Dh(t,"a",e)}function cg(t,e){Dh(t,"da",e)}function Dh(t,e,n=He){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(jr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Fr(i.parent.vnode)&&ug(s,e,n,i),i=i.parent}}function ug(t,e,n,s){const i=jr(e,t,s,!0);xh(()=>{ma(s[e],i)},n)}function jr(t,e,n=He,s=!1){if(n){const i=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{sn();const c=Ti(n),u=Pt(e,n,t,a);return c(),rn(),u});return s?i.unshift(o):i.push(o),o}}const ln=t=>(e,n=He)=>{(!gi||t==="sp")&&jr(t,(...s)=>e(...s),n)},hg=ln("bm"),Ei=ln("m"),fg=ln("bu"),dg=ln("u"),Ra=ln("bum"),xh=ln("um"),pg=ln("sp"),gg=ln("rtg"),mg=ln("rtc");function vg(t,e=He){jr("ec",t,e)}const _g="components";function Lh(t,e){return wg(_g,t,!0,e)||t}const yg=Symbol.for("v-ndc");function wg(t,e,n=!0,s=!1){const i=st||He;if(i){const o=i.type;{const c=cm(o,!1);if(c&&(c===e||c===yt(e)||c===Or(yt(e))))return o}const a=Zl(i[t]||o[t],e)||Zl(i.appContext[t],e);return!a&&s?o:a}}function Zl(t,e){return t&&(t[e]||t[yt(e)]||t[Or(yt(e))])}function ec(t,e,n,s){let i;const o=n,a=ee(t);if(a||Oe(t)){const c=a&&ms(t);let u=!1,f=!1;c&&(u=!vt(t),f=Rn(t),t=xr(t)),i=new Array(t.length);for(let d=0,g=t.length;d<g;d++)i[d]=e(u?f?cr(Be(t[d])):Be(t[d]):t[d],d,void 0,o)}else if(typeof t=="number"){i=new Array(t);for(let c=0;c<t;c++)i[c]=e(c+1,c,void 0,o)}else if(Se(t))if(t[Symbol.iterator])i=Array.from(t,(c,u)=>e(c,u,void 0,o));else{const c=Object.keys(t);i=new Array(c.length);for(let u=0,f=c.length;u<f;u++){const d=c[u];i[u]=e(t[d],d,u,o)}}else i=[];return i}const Ko=t=>t?tf(t)?Br(t):Ko(t.parent):null,Qs=Me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ko(t.parent),$root:t=>Ko(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Uh(t),$forceUpdate:t=>t.f||(t.f=()=>{Aa(t.update)}),$nextTick:t=>t.n||(t.n=Js.bind(t.proxy)),$watch:t=>$g.bind(t)}),bo=(t,e)=>t!==Ie&&!t.__isScriptSetup&&ve(t,e),bg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:o,accessCache:a,type:c,appContext:u}=t;let f;if(e[0]!=="$"){const A=a[e];if(A!==void 0)switch(A){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return o[e]}else{if(bo(s,e))return a[e]=1,s[e];if(i!==Ie&&ve(i,e))return a[e]=2,i[e];if((f=t.propsOptions[0])&&ve(f,e))return a[e]=3,o[e];if(n!==Ie&&ve(n,e))return a[e]=4,n[e];Jo&&(a[e]=0)}}const d=Qs[e];let g,v;if(d)return e==="$attrs"&&qe(t.attrs,"get",""),d(t);if((g=c.__cssModules)&&(g=g[e]))return g;if(n!==Ie&&ve(n,e))return a[e]=4,n[e];if(v=u.config.globalProperties,ve(v,e))return v[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:o}=t;return bo(i,e)?(i[e]=n,!0):s!==Ie&&ve(s,e)?(s[e]=n,!0):ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:o}},a){let c;return!!n[a]||t!==Ie&&ve(t,a)||bo(e,a)||(c=o[0])&&ve(c,a)||ve(s,a)||ve(Qs,a)||ve(i.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function tc(t){return ee(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Jo=!0;function Ig(t){const e=Uh(t),n=t.proxy,s=t.ctx;Jo=!1,e.beforeCreate&&nc(e.beforeCreate,t,"bc");const{data:i,computed:o,methods:a,watch:c,provide:u,inject:f,created:d,beforeMount:g,mounted:v,beforeUpdate:A,updated:k,activated:L,deactivated:B,beforeDestroy:K,beforeUnmount:$,destroyed:H,unmounted:W,render:ie,renderTracked:re,renderTriggered:S,errorCaptured:_,serverPrefetch:m,expose:E,inheritAttrs:T,components:I,directives:w,filters:ye}=e;if(f&&Eg(f,s,null),a)for(const le in a){const ae=a[le];se(ae)&&(s[le]=ae.bind(n))}if(i){const le=i.call(n,n);Se(le)&&(t.data=Lr(le))}if(Jo=!0,o)for(const le in o){const ae=o[le],rt=se(ae)?ae.bind(n,n):se(ae.get)?ae.get.bind(n,n):Vt,wt=!se(ae)&&se(ae.set)?ae.set.bind(n):Vt,ht=at({get:rt,set:wt});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>ht.value,set:Ce=>ht.value=Ce})}if(c)for(const le in c)Mh(c[le],s,n,le);if(u){const le=se(u)?u.call(n):u;Reflect.ownKeys(le).forEach(ae=>{er(ae,le[ae])})}d&&nc(d,t,"c");function Ae(le,ae){ee(ae)?ae.forEach(rt=>le(rt.bind(n))):ae&&le(ae.bind(n))}if(Ae(hg,g),Ae(Ei,v),Ae(fg,A),Ae(dg,k),Ae(lg,L),Ae(cg,B),Ae(vg,_),Ae(mg,re),Ae(gg,S),Ae(Ra,$),Ae(xh,W),Ae(pg,m),ee(E))if(E.length){const le=t.exposed||(t.exposed={});E.forEach(ae=>{Object.defineProperty(le,ae,{get:()=>n[ae],set:rt=>n[ae]=rt})})}else t.exposed||(t.exposed={});ie&&t.render===Vt&&(t.render=ie),T!=null&&(t.inheritAttrs=T),I&&(t.components=I),w&&(t.directives=w),m&&Nh(t)}function Eg(t,e,n=Vt){ee(t)&&(t=Xo(t));for(const s in t){const i=t[s];let o;Se(i)?"default"in i?o=$t(i.from||s,i.default,!0):o=$t(i.from||s):o=$t(i),Ke(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function nc(t,e,n){Pt(ee(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Mh(t,e,n,s){let i=s.includes(".")?Xh(n,s):()=>n[s];if(Oe(t)){const o=e[t];se(o)&&Zs(i,o)}else if(se(t))Zs(i,t.bind(n));else if(Se(t))if(ee(t))t.forEach(o=>Mh(o,e,n,s));else{const o=se(t.handler)?t.handler.bind(n):e[t.handler];se(o)&&Zs(i,o,t)}}function Uh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:!i.length&&!n&&!s?u=e:(u={},i.length&&i.forEach(f=>dr(u,f,a,!0)),dr(u,e,a)),Se(e)&&o.set(e,u),u}function dr(t,e,n,s=!1){const{mixins:i,extends:o}=e;o&&dr(t,o,n,!0),i&&i.forEach(a=>dr(t,a,n,!0));for(const a in e)if(!(s&&a==="expose")){const c=Tg[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const Tg={data:sc,props:ic,emits:ic,methods:Gs,computed:Gs,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:Gs,directives:Gs,watch:Ag,provide:sc,inject:Sg};function sc(t,e){return e?t?function(){return Me(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function Sg(t,e){return Gs(Xo(t),Xo(e))}function Xo(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xe(t,e){return t?[...new Set([].concat(t,e))]:e}function Gs(t,e){return t?Me(Object.create(null),t,e):e}function ic(t,e){return t?ee(t)&&ee(e)?[...new Set([...t,...e])]:Me(Object.create(null),tc(t),tc(e??{})):e}function Ag(t,e){if(!t)return e;if(!e)return t;const n=Me(Object.create(null),t);for(const s in e)n[s]=Xe(t[s],e[s]);return n}function Fh(){return{app:null,config:{isNativeTag:pp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cg=0;function Rg(t,e){return function(s,i=null){se(s)||(s=Me({},s)),i!=null&&!Se(i)&&(i=null);const o=Fh(),a=new WeakSet,c=[];let u=!1;const f=o.app={_uid:Cg++,_component:s,_props:i,_container:null,_context:o,_instance:null,version:hm,get config(){return o.config},set config(d){},use(d,...g){return a.has(d)||(d&&se(d.install)?(a.add(d),d.install(f,...g)):se(d)&&(a.add(d),d(f,...g))),f},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),f},component(d,g){return g?(o.components[d]=g,f):o.components[d]},directive(d,g){return g?(o.directives[d]=g,f):o.directives[d]},mount(d,g,v){if(!u){const A=f._ceVNode||De(s,i);return A.appContext=o,v===!0?v="svg":v===!1&&(v=void 0),t(A,d,v),u=!0,f._container=d,d.__vue_app__=f,Br(A.component)}},onUnmount(d){c.push(d)},unmount(){u&&(Pt(c,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(d,g){return o.provides[d]=g,f},runWithContext(d){const g=_s;_s=f;try{return d()}finally{_s=g}}};return f}}let _s=null;function er(t,e){if(He){let n=He.provides;const s=He.parent&&He.parent.provides;s===n&&(n=He.provides=Object.create(s)),n[t]=e}}function $t(t,e,n=!1){const s=He||st;if(s||_s){let i=_s?_s._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&se(e)?e.call(s&&s.proxy):e}}const jh={},Vh=()=>Object.create(jh),$h=t=>Object.getPrototypeOf(t)===jh;function Pg(t,e,n,s=!1){const i={},o=Vh();t.propsDefaults=Object.create(null),Bh(t,e,i,o);for(const a in t.propsOptions[0])a in i||(i[a]=void 0);n?t.props=s?i:vh(i):t.type.props?t.props=i:t.props=o,t.attrs=o}function kg(t,e,n,s){const{props:i,attrs:o,vnode:{patchFlag:a}}=t,c=ge(i),[u]=t.propsOptions;let f=!1;if((s||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let g=0;g<d.length;g++){let v=d[g];if(Vr(t.emitsOptions,v))continue;const A=e[v];if(u)if(ve(o,v))A!==o[v]&&(o[v]=A,f=!0);else{const k=yt(v);i[k]=Yo(u,c,k,A,t,!1)}else A!==o[v]&&(o[v]=A,f=!0)}}}else{Bh(t,e,i,o)&&(f=!0);let d;for(const g in c)(!e||!ve(e,g)&&((d=Nn(g))===g||!ve(e,d)))&&(u?n&&(n[g]!==void 0||n[d]!==void 0)&&(i[g]=Yo(u,c,g,void 0,t,!0)):delete i[g]);if(o!==c)for(const g in o)(!e||!ve(e,g))&&(delete o[g],f=!0)}f&&Yt(t.attrs,"set","")}function Bh(t,e,n,s){const[i,o]=t.propsOptions;let a=!1,c;if(e)for(let u in e){if(zs(u))continue;const f=e[u];let d;i&&ve(i,d=yt(u))?!o||!o.includes(d)?n[d]=f:(c||(c={}))[d]=f:Vr(t.emitsOptions,u)||(!(u in s)||f!==s[u])&&(s[u]=f,a=!0)}if(o){const u=ge(n),f=c||Ie;for(let d=0;d<o.length;d++){const g=o[d];n[g]=Yo(i,u,g,f[g],t,!ve(f,g))}}return a}function Yo(t,e,n,s,i,o){const a=t[n];if(a!=null){const c=ve(a,"default");if(c&&s===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&se(u)){const{propsDefaults:f}=i;if(n in f)s=f[n];else{const d=Ti(i);s=f[n]=u.call(null,e),d()}}else s=u;i.ce&&i.ce._setProp(n,s)}a[0]&&(o&&!c?s=!1:a[1]&&(s===""||s===Nn(n))&&(s=!0))}return s}const Og=new WeakMap;function Hh(t,e,n=!1){const s=n?Og:e.propsCache,i=s.get(t);if(i)return i;const o=t.props,a={},c=[];let u=!1;if(!se(t)){const d=g=>{u=!0;const[v,A]=Hh(g,e,!0);Me(a,v),A&&c.push(...A)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!o&&!u)return Se(t)&&s.set(t,ps),ps;if(ee(o))for(let d=0;d<o.length;d++){const g=yt(o[d]);rc(g)&&(a[g]=Ie)}else if(o)for(const d in o){const g=yt(d);if(rc(g)){const v=o[d],A=a[g]=ee(v)||se(v)?{type:v}:Me({},v),k=A.type;let L=!1,B=!0;if(ee(k))for(let K=0;K<k.length;++K){const $=k[K],H=se($)&&$.name;if(H==="Boolean"){L=!0;break}else H==="String"&&(B=!1)}else L=se(k)&&k.name==="Boolean";A[0]=L,A[1]=B,(L||ve(A,"default"))&&c.push(g)}}const f=[a,c];return Se(t)&&s.set(t,f),f}function rc(t){return t[0]!=="$"&&!zs(t)}const Pa=t=>t[0]==="_"||t==="$stable",ka=t=>ee(t)?t.map(Ut):[Ut(t)],Ng=(t,e,n)=>{if(e._n)return e;const s=Ur((...i)=>ka(e(...i)),n);return s._c=!1,s},Wh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Pa(i))continue;const o=t[i];if(se(o))e[i]=Ng(i,o,s);else if(o!=null){const a=ka(o);e[i]=()=>a}}},Gh=(t,e)=>{const n=ka(e);t.slots.default=()=>n},zh=(t,e,n)=>{for(const s in e)(n||!Pa(s))&&(t[s]=e[s])},Dg=(t,e,n)=>{const s=t.slots=Vh();if(t.vnode.shapeFlag&32){const i=e.__;i&&$o(s,"__",i,!0);const o=e._;o?(zh(s,e,n),n&&$o(s,"_",o,!0)):Wh(e,s)}else e&&Gh(t,e)},xg=(t,e,n)=>{const{vnode:s,slots:i}=t;let o=!0,a=Ie;if(s.shapeFlag&32){const c=e._;c?n&&c===1?o=!1:zh(i,e,n):(o=!e.$stable,Wh(e,i)),a=e}else e&&(Gh(t,e),a={default:1});if(o)for(const c in i)!Pa(c)&&a[c]==null&&delete i[c]},ot=Kg;function Lg(t){return Mg(t)}function Mg(t,e){const n=Nr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:o,createElement:a,createText:c,createComment:u,setText:f,setElementText:d,parentNode:g,nextSibling:v,setScopeId:A=Vt,insertStaticContent:k}=t,L=(y,b,C,N=null,x=null,D=null,z=void 0,j=null,F=!!b.dynamicChildren)=>{if(y===b)return;y&&!Hn(y,b)&&(N=O(y),Ce(y,x,D,!0),y=null),b.patchFlag===-2&&(F=!1,b.dynamicChildren=null);const{type:M,ref:Q,shapeFlag:G}=b;switch(M){case $r:B(y,b,C,N);break;case Ze:K(y,b,C,N);break;case tr:y==null&&$(b,C,N,z);break;case mt:I(y,b,C,N,x,D,z,j,F);break;default:G&1?ie(y,b,C,N,x,D,z,j,F):G&6?w(y,b,C,N,x,D,z,j,F):(G&64||G&128)&&M.process(y,b,C,N,x,D,z,j,F,X)}Q!=null&&x?Xs(Q,y&&y.ref,D,b||y,!b):Q==null&&y&&y.ref!=null&&Xs(y.ref,null,D,y,!0)},B=(y,b,C,N)=>{if(y==null)s(b.el=c(b.children),C,N);else{const x=b.el=y.el;b.children!==y.children&&f(x,b.children)}},K=(y,b,C,N)=>{y==null?s(b.el=u(b.children||""),C,N):b.el=y.el},$=(y,b,C,N)=>{[y.el,y.anchor]=k(y.children,b,C,N,y.el,y.anchor)},H=({el:y,anchor:b},C,N)=>{let x;for(;y&&y!==b;)x=v(y),s(y,C,N),y=x;s(b,C,N)},W=({el:y,anchor:b})=>{let C;for(;y&&y!==b;)C=v(y),i(y),y=C;i(b)},ie=(y,b,C,N,x,D,z,j,F)=>{b.type==="svg"?z="svg":b.type==="math"&&(z="mathml"),y==null?re(b,C,N,x,D,z,j,F):m(y,b,x,D,z,j,F)},re=(y,b,C,N,x,D,z,j)=>{let F,M;const{props:Q,shapeFlag:G,transition:Y,dirs:te}=y;if(F=y.el=a(y.type,D,Q&&Q.is,Q),G&8?d(F,y.children):G&16&&_(y.children,F,null,N,x,Io(y,D),z,j),te&&Un(y,null,N,"created"),S(F,y,y.scopeId,z,N),Q){for(const oe in Q)oe!=="value"&&!zs(oe)&&o(F,oe,null,Q[oe],D,N);"value"in Q&&o(F,"value",null,Q.value,D),(M=Q.onVnodeBeforeMount)&&xt(M,N,y)}te&&Un(y,null,N,"beforeMount");const Z=Ug(x,Y);Z&&Y.beforeEnter(F),s(F,b,C),((M=Q&&Q.onVnodeMounted)||Z||te)&&ot(()=>{M&&xt(M,N,y),Z&&Y.enter(F),te&&Un(y,null,N,"mounted")},x)},S=(y,b,C,N,x)=>{if(C&&A(y,C),N)for(let D=0;D<N.length;D++)A(y,N[D]);if(x){let D=x.subTree;if(b===D||Qh(D.type)&&(D.ssContent===b||D.ssFallback===b)){const z=x.vnode;S(y,z,z.scopeId,z.slotScopeIds,x.parent)}}},_=(y,b,C,N,x,D,z,j,F=0)=>{for(let M=F;M<y.length;M++){const Q=y[M]=j?wn(y[M]):Ut(y[M]);L(null,Q,b,C,N,x,D,z,j)}},m=(y,b,C,N,x,D,z)=>{const j=b.el=y.el;let{patchFlag:F,dynamicChildren:M,dirs:Q}=b;F|=y.patchFlag&16;const G=y.props||Ie,Y=b.props||Ie;let te;if(C&&Fn(C,!1),(te=Y.onVnodeBeforeUpdate)&&xt(te,C,b,y),Q&&Un(b,y,C,"beforeUpdate"),C&&Fn(C,!0),(G.innerHTML&&Y.innerHTML==null||G.textContent&&Y.textContent==null)&&d(j,""),M?E(y.dynamicChildren,M,j,C,N,Io(b,x),D):z||ae(y,b,j,null,C,N,Io(b,x),D,!1),F>0){if(F&16)T(j,G,Y,C,x);else if(F&2&&G.class!==Y.class&&o(j,"class",null,Y.class,x),F&4&&o(j,"style",G.style,Y.style,x),F&8){const Z=b.dynamicProps;for(let oe=0;oe<Z.length;oe++){const ce=Z[oe],Ue=G[ce],Fe=Y[ce];(Fe!==Ue||ce==="value")&&o(j,ce,Ue,Fe,x,C)}}F&1&&y.children!==b.children&&d(j,b.children)}else!z&&M==null&&T(j,G,Y,C,x);((te=Y.onVnodeUpdated)||Q)&&ot(()=>{te&&xt(te,C,b,y),Q&&Un(b,y,C,"updated")},N)},E=(y,b,C,N,x,D,z)=>{for(let j=0;j<b.length;j++){const F=y[j],M=b[j],Q=F.el&&(F.type===mt||!Hn(F,M)||F.shapeFlag&198)?g(F.el):C;L(F,M,Q,null,N,x,D,z,!0)}},T=(y,b,C,N,x)=>{if(b!==C){if(b!==Ie)for(const D in b)!zs(D)&&!(D in C)&&o(y,D,b[D],null,x,N);for(const D in C){if(zs(D))continue;const z=C[D],j=b[D];z!==j&&D!=="value"&&o(y,D,j,z,x,N)}"value"in C&&o(y,"value",b.value,C.value,x)}},I=(y,b,C,N,x,D,z,j,F)=>{const M=b.el=y?y.el:c(""),Q=b.anchor=y?y.anchor:c("");let{patchFlag:G,dynamicChildren:Y,slotScopeIds:te}=b;te&&(j=j?j.concat(te):te),y==null?(s(M,C,N),s(Q,C,N),_(b.children||[],C,Q,x,D,z,j,F)):G>0&&G&64&&Y&&y.dynamicChildren?(E(y.dynamicChildren,Y,C,x,D,z,j),(b.key!=null||x&&b===x.subTree)&&qh(y,b,!0)):ae(y,b,C,Q,x,D,z,j,F)},w=(y,b,C,N,x,D,z,j,F)=>{b.slotScopeIds=j,y==null?b.shapeFlag&512?x.ctx.activate(b,C,N,z,F):ye(b,C,N,x,D,z,F):Le(y,b,F)},ye=(y,b,C,N,x,D,z)=>{const j=y.component=sm(y,N,x);if(Fr(y)&&(j.ctx.renderer=X),rm(j,!1,z),j.asyncDep){if(x&&x.registerDep(j,Ae,z),!y.el){const F=j.subTree=De(Ze);K(null,F,b,C)}}else Ae(j,y,b,C,x,D,z)},Le=(y,b,C)=>{const N=b.component=y.component;if(zg(y,b,C))if(N.asyncDep&&!N.asyncResolved){le(N,b,C);return}else N.next=b,N.update();else b.el=y.el,N.vnode=b},Ae=(y,b,C,N,x,D,z)=>{const j=()=>{if(y.isMounted){let{next:G,bu:Y,u:te,parent:Z,vnode:oe}=y;{const We=Kh(y);if(We){G&&(G.el=oe.el,le(y,G,z)),We.asyncDep.then(()=>{y.isUnmounted||j()});return}}let ce=G,Ue;Fn(y,!1),G?(G.el=oe.el,le(y,G,z)):G=oe,Y&&Zi(Y),(Ue=G.props&&G.props.onVnodeBeforeUpdate)&&xt(Ue,Z,G,oe),Fn(y,!0);const Fe=ac(y),ft=y.subTree;y.subTree=Fe,L(ft,Fe,g(ft.el),O(ft),y,x,D),G.el=Fe.el,ce===null&&qg(y,Fe.el),te&&ot(te,x),(Ue=G.props&&G.props.onVnodeUpdated)&&ot(()=>xt(Ue,Z,G,oe),x)}else{let G;const{el:Y,props:te}=b,{bm:Z,m:oe,parent:ce,root:Ue,type:Fe}=y,ft=Ys(b);Fn(y,!1),Z&&Zi(Z),!ft&&(G=te&&te.onVnodeBeforeMount)&&xt(G,ce,b),Fn(y,!0);{Ue.ce&&Ue.ce._def.shadowRoot!==!1&&Ue.ce._injectChildStyle(Fe);const We=y.subTree=ac(y);L(null,We,C,N,y,x,D),b.el=We.el}if(oe&&ot(oe,x),!ft&&(G=te&&te.onVnodeMounted)){const We=b;ot(()=>xt(G,ce,We),x)}(b.shapeFlag&256||ce&&Ys(ce.vnode)&&ce.vnode.shapeFlag&256)&&y.a&&ot(y.a,x),y.isMounted=!0,b=C=N=null}};y.scope.on();const F=y.effect=new sh(j);y.scope.off();const M=y.update=F.run.bind(F),Q=y.job=F.runIfDirty.bind(F);Q.i=y,Q.id=y.uid,F.scheduler=()=>Aa(Q),Fn(y,!0),M()},le=(y,b,C)=>{b.component=y;const N=y.vnode.props;y.vnode=b,y.next=null,kg(y,b.props,N,C),xg(y,b.children,C),sn(),Yl(y),rn()},ae=(y,b,C,N,x,D,z,j,F=!1)=>{const M=y&&y.children,Q=y?y.shapeFlag:0,G=b.children,{patchFlag:Y,shapeFlag:te}=b;if(Y>0){if(Y&128){wt(M,G,C,N,x,D,z,j,F);return}else if(Y&256){rt(M,G,C,N,x,D,z,j,F);return}}te&8?(Q&16&&tt(M,x,D),G!==M&&d(C,G)):Q&16?te&16?wt(M,G,C,N,x,D,z,j,F):tt(M,x,D,!0):(Q&8&&d(C,""),te&16&&_(G,C,N,x,D,z,j,F))},rt=(y,b,C,N,x,D,z,j,F)=>{y=y||ps,b=b||ps;const M=y.length,Q=b.length,G=Math.min(M,Q);let Y;for(Y=0;Y<G;Y++){const te=b[Y]=F?wn(b[Y]):Ut(b[Y]);L(y[Y],te,C,null,x,D,z,j,F)}M>Q?tt(y,x,D,!0,!1,G):_(b,C,N,x,D,z,j,F,G)},wt=(y,b,C,N,x,D,z,j,F)=>{let M=0;const Q=b.length;let G=y.length-1,Y=Q-1;for(;M<=G&&M<=Y;){const te=y[M],Z=b[M]=F?wn(b[M]):Ut(b[M]);if(Hn(te,Z))L(te,Z,C,null,x,D,z,j,F);else break;M++}for(;M<=G&&M<=Y;){const te=y[G],Z=b[Y]=F?wn(b[Y]):Ut(b[Y]);if(Hn(te,Z))L(te,Z,C,null,x,D,z,j,F);else break;G--,Y--}if(M>G){if(M<=Y){const te=Y+1,Z=te<Q?b[te].el:N;for(;M<=Y;)L(null,b[M]=F?wn(b[M]):Ut(b[M]),C,Z,x,D,z,j,F),M++}}else if(M>Y)for(;M<=G;)Ce(y[M],x,D,!0),M++;else{const te=M,Z=M,oe=new Map;for(M=Z;M<=Y;M++){const je=b[M]=F?wn(b[M]):Ut(b[M]);je.key!=null&&oe.set(je.key,M)}let ce,Ue=0;const Fe=Y-Z+1;let ft=!1,We=0;const hn=new Array(Fe);for(M=0;M<Fe;M++)hn[M]=0;for(M=te;M<=G;M++){const je=y[M];if(Ue>=Fe){Ce(je,x,D,!0);continue}let dt;if(je.key!=null)dt=oe.get(je.key);else for(ce=Z;ce<=Y;ce++)if(hn[ce-Z]===0&&Hn(je,b[ce])){dt=ce;break}dt===void 0?Ce(je,x,D,!0):(hn[dt-Z]=M+1,dt>=We?We=dt:ft=!0,L(je,b[dt],C,null,x,D,z,j,F),Ue++)}const Ps=ft?Fg(hn):ps;for(ce=Ps.length-1,M=Fe-1;M>=0;M--){const je=Z+M,dt=b[je],Di=je+1<Q?b[je+1].el:N;hn[M]===0?L(null,dt,C,Di,x,D,z,j,F):ft&&(ce<0||M!==Ps[ce]?ht(dt,C,Di,2):ce--)}}},ht=(y,b,C,N,x=null)=>{const{el:D,type:z,transition:j,children:F,shapeFlag:M}=y;if(M&6){ht(y.component.subTree,b,C,N);return}if(M&128){y.suspense.move(b,C,N);return}if(M&64){z.move(y,b,C,X);return}if(z===mt){s(D,b,C);for(let G=0;G<F.length;G++)ht(F[G],b,C,N);s(y.anchor,b,C);return}if(z===tr){H(y,b,C);return}if(N!==2&&M&1&&j)if(N===0)j.beforeEnter(D),s(D,b,C),ot(()=>j.enter(D),x);else{const{leave:G,delayLeave:Y,afterLeave:te}=j,Z=()=>{y.ctx.isUnmounted?i(D):s(D,b,C)},oe=()=>{G(D,()=>{Z(),te&&te()})};Y?Y(D,Z,oe):oe()}else s(D,b,C)},Ce=(y,b,C,N=!1,x=!1)=>{const{type:D,props:z,ref:j,children:F,dynamicChildren:M,shapeFlag:Q,patchFlag:G,dirs:Y,cacheIndex:te}=y;if(G===-2&&(x=!1),j!=null&&(sn(),Xs(j,null,C,y,!0),rn()),te!=null&&(b.renderCache[te]=void 0),Q&256){b.ctx.deactivate(y);return}const Z=Q&1&&Y,oe=!Ys(y);let ce;if(oe&&(ce=z&&z.onVnodeBeforeUnmount)&&xt(ce,b,y),Q&6)Dt(y.component,C,N);else{if(Q&128){y.suspense.unmount(C,N);return}Z&&Un(y,null,b,"beforeUnmount"),Q&64?y.type.remove(y,b,C,X,N):M&&!M.hasOnce&&(D!==mt||G>0&&G&64)?tt(M,b,C,!1,!0):(D===mt&&G&384||!x&&Q&16)&&tt(F,b,C),N&&Re(y)}(oe&&(ce=z&&z.onVnodeUnmounted)||Z)&&ot(()=>{ce&&xt(ce,b,y),Z&&Un(y,null,b,"unmounted")},C)},Re=y=>{const{type:b,el:C,anchor:N,transition:x}=y;if(b===mt){un(C,N);return}if(b===tr){W(y);return}const D=()=>{i(C),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(y.shapeFlag&1&&x&&!x.persisted){const{leave:z,delayLeave:j}=x,F=()=>z(C,D);j?j(y.el,D,F):F()}else D()},un=(y,b)=>{let C;for(;y!==b;)C=v(y),i(y),y=C;i(b)},Dt=(y,b,C)=>{const{bum:N,scope:x,job:D,subTree:z,um:j,m:F,a:M,parent:Q,slots:{__:G}}=y;oc(F),oc(M),N&&Zi(N),Q&&ee(G)&&G.forEach(Y=>{Q.renderCache[Y]=void 0}),x.stop(),D&&(D.flags|=8,Ce(z,y,b,C)),j&&ot(j,b),ot(()=>{y.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},tt=(y,b,C,N=!1,x=!1,D=0)=>{for(let z=D;z<y.length;z++)Ce(y[z],b,C,N,x)},O=y=>{if(y.shapeFlag&6)return O(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const b=v(y.anchor||y.el),C=b&&b[ig];return C?v(C):b};let J=!1;const q=(y,b,C)=>{y==null?b._vnode&&Ce(b._vnode,null,null,!0):L(b._vnode||null,y,b,null,null,null,C),b._vnode=y,J||(J=!0,Yl(),Eh(),J=!1)},X={p:L,um:Ce,m:ht,r:Re,mt:ye,mc:_,pc:ae,pbc:E,n:O,o:t};return{render:q,hydrate:void 0,createApp:Rg(q)}}function Io({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Fn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ug(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function qh(t,e,n=!1){const s=t.children,i=e.children;if(ee(s)&&ee(i))for(let o=0;o<s.length;o++){const a=s[o];let c=i[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[o]=wn(i[o]),c.el=a.el),!n&&c.patchFlag!==-2&&qh(a,c)),c.type===$r&&(c.el=a.el),c.type===Ze&&!c.el&&(c.el=a.el)}}function Fg(t){const e=t.slice(),n=[0];let s,i,o,a,c;const u=t.length;for(s=0;s<u;s++){const f=t[s];if(f!==0){if(i=n[n.length-1],t[i]<f){e[s]=i,n.push(s);continue}for(o=0,a=n.length-1;o<a;)c=o+a>>1,t[n[c]]<f?o=c+1:a=c;f<t[n[o]]&&(o>0&&(e[s]=n[o-1]),n[o]=s)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function Kh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Kh(e)}function oc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const jg=Symbol.for("v-scx"),Vg=()=>$t(jg);function Zs(t,e,n){return Jh(t,e,n)}function Jh(t,e,n=Ie){const{immediate:s,deep:i,flush:o,once:a}=n,c=Me({},n),u=e&&s||!e&&o!=="post";let f;if(gi){if(o==="sync"){const A=Vg();f=A.__watcherHandles||(A.__watcherHandles=[])}else if(!u){const A=()=>{};return A.stop=Vt,A.resume=Vt,A.pause=Vt,A}}const d=He;c.call=(A,k,L)=>Pt(A,d,k,L);let g=!1;o==="post"?c.scheduler=A=>{ot(A,d&&d.suspense)}:o!=="sync"&&(g=!0,c.scheduler=(A,k)=>{k?A():Aa(A)}),c.augmentJob=A=>{e&&(A.flags|=4),g&&(A.flags|=2,d&&(A.id=d.uid,A.i=d))};const v=Zp(t,e,c);return gi&&(f?f.push(v):u&&v()),v}function $g(t,e,n){const s=this.proxy,i=Oe(t)?t.includes(".")?Xh(s,t):()=>s[t]:t.bind(s,s);let o;se(e)?o=e:(o=e.handler,n=e);const a=Ti(this),c=Jh(i,o.bind(s),n);return a(),c}function Xh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Bg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${yt(e)}Modifiers`]||t[`${Nn(e)}Modifiers`];function Hg(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ie;let i=n;const o=e.startsWith("update:"),a=o&&Bg(s,e.slice(7));a&&(a.trim&&(i=n.map(d=>Oe(d)?d.trim():d)),a.number&&(i=n.map(Bo)));let c,u=s[c=go(e)]||s[c=go(yt(e))];!u&&o&&(u=s[c=go(Nn(e))]),u&&Pt(u,t,6,i);const f=s[c+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Pt(f,t,6,i)}}function Yh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const o=t.emits;let a={},c=!1;if(!se(t)){const u=f=>{const d=Yh(f,e,!0);d&&(c=!0,Me(a,d))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!o&&!c?(Se(t)&&s.set(t,null),null):(ee(o)?o.forEach(u=>a[u]=null):Me(a,o),Se(t)&&s.set(t,a),a)}function Vr(t,e){return!t||!Rr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(t,e[0].toLowerCase()+e.slice(1))||ve(t,Nn(e))||ve(t,e))}function ac(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:f,renderCache:d,props:g,data:v,setupState:A,ctx:k,inheritAttrs:L}=t,B=fr(t);let K,$;try{if(n.shapeFlag&4){const W=i||s,ie=W;K=Ut(f.call(ie,W,d,g,A,v,k)),$=c}else{const W=e;K=Ut(W.length>1?W(g,{attrs:c,slots:a,emit:u}):W(g,null)),$=e.props?c:Wg(c)}}catch(W){ei.length=0,Mr(W,t,1),K=De(Ze)}let H=K;if($&&L!==!1){const W=Object.keys($),{shapeFlag:ie}=H;W.length&&ie&7&&(o&&W.some(ga)&&($=Gg($,o)),H=Pn(H,$,!1,!0))}return n.dirs&&(H=Pn(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&fi(H,n.transition),K=H,fr(B),K}const Wg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Rr(n))&&((e||(e={}))[n]=t[n]);return e},Gg=(t,e)=>{const n={};for(const s in t)(!ga(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function zg(t,e,n){const{props:s,children:i,component:o}=t,{props:a,children:c,patchFlag:u}=e,f=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?lc(s,a,f):!!a;if(u&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const v=d[g];if(a[v]!==s[v]&&!Vr(f,v))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:s===a?!1:s?a?lc(s,a,f):!0:!!a;return!1}function lc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const o=s[i];if(e[o]!==t[o]&&!Vr(n,o))return!0}return!1}function qg({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Qh=t=>t.__isSuspense;function Kg(t,e){e&&e.pendingBranch?ee(t)?e.effects.push(...t):e.effects.push(t):ng(t)}const mt=Symbol.for("v-fgt"),$r=Symbol.for("v-txt"),Ze=Symbol.for("v-cmt"),tr=Symbol.for("v-stc"),ei=[];let ct=null;function ke(t=!1){ei.push(ct=t?null:[])}function Jg(){ei.pop(),ct=ei[ei.length-1]||null}let di=1;function cc(t,e=!1){di+=t,t<0&&ct&&e&&(ct.hasOnce=!0)}function Zh(t){return t.dynamicChildren=di>0?ct||ps:null,Jg(),di>0&&ct&&ct.push(t),t}function Ne(t,e,n,s,i,o){return Zh(U(t,e,n,s,i,o,!0))}function Xg(t,e,n,s,i){return Zh(De(t,e,n,s,i,!0))}function pr(t){return t?t.__v_isVNode===!0:!1}function Hn(t,e){return t.type===e.type&&t.key===e.key}const ef=({key:t})=>t??null,nr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Oe(t)||Ke(t)||se(t)?{i:st,r:t,k:e,f:!!n}:t:null);function U(t,e=null,n=null,s=0,i=null,o=t===mt?0:1,a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ef(e),ref:e&&nr(e),scopeId:Sh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:st};return c?(Oa(u,n),o&128&&t.normalize(u)):n&&(u.shapeFlag|=Oe(n)?8:16),di>0&&!a&&ct&&(u.patchFlag>0||o&6)&&u.patchFlag!==32&&ct.push(u),u}const De=Yg;function Yg(t,e=null,n=null,s=0,i=null,o=!1){if((!t||t===yg)&&(t=Ze),pr(t)){const c=Pn(t,e,!0);return n&&Oa(c,n),di>0&&!o&&ct&&(c.shapeFlag&6?ct[ct.indexOf(t)]=c:ct.push(c)),c.patchFlag=-2,c}if(um(t)&&(t=t.__vccOpts),e){e=Qg(e);let{class:c,style:u}=e;c&&!Oe(c)&&(e.class=Dr(c)),Se(u)&&(Sa(u)&&!ee(u)&&(u=Me({},u)),e.style=_a(u))}const a=Oe(t)?1:Qh(t)?128:Ah(t)?64:Se(t)?4:se(t)?2:0;return U(t,e,n,s,i,a,o,!0)}function Qg(t){return t?Sa(t)||$h(t)?Me({},t):t:null}function Pn(t,e,n=!1,s=!1){const{props:i,ref:o,patchFlag:a,children:c,transition:u}=t,f=e?em(i||{},e):i,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&ef(f),ref:e&&e.ref?n&&o?ee(o)?o.concat(nr(e)):[o,nr(e)]:nr(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pn(t.ssContent),ssFallback:t.ssFallback&&Pn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&s&&fi(d,u.clone(d)),d}function pi(t=" ",e=0){return De($r,null,t,e)}function Zg(t,e){const n=De(tr,null,t);return n.staticCount=e,n}function gr(t="",e=!1){return e?(ke(),Xg(Ze,null,t)):De(Ze,null,t)}function Ut(t){return t==null||typeof t=="boolean"?De(Ze):ee(t)?De(mt,null,t.slice()):pr(t)?wn(t):De($r,null,String(t))}function wn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pn(t)}function Oa(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ee(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Oa(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!$h(e)?e._ctx=st:i===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:st},n=32):(e=String(e),s&64?(n=16,e=[pi(e)]):n=8);t.children=e,t.shapeFlag|=n}function em(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Dr([e.class,s.class]));else if(i==="style")e.style=_a([e.style,s.style]);else if(Rr(i)){const o=e[i],a=s[i];a&&o!==a&&!(ee(o)&&o.includes(a))&&(e[i]=o?[].concat(o,a):a)}else i!==""&&(e[i]=s[i])}return e}function xt(t,e,n,s=null){Pt(t,e,7,[n,s])}const tm=Fh();let nm=0;function sm(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||tm,o={uid:nm++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ap(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hh(s,i),emitsOptions:Yh(s,i),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:s.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Hg.bind(null,o),t.ce&&t.ce(o),o}let He=null;const im=()=>He||st;let mr,Qo;{const t=Nr(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),o=>{i.length>1?i.forEach(a=>a(o)):i[0](o)}};mr=e("__VUE_INSTANCE_SETTERS__",n=>He=n),Qo=e("__VUE_SSR_SETTERS__",n=>gi=n)}const Ti=t=>{const e=He;return mr(t),t.scope.on(),()=>{t.scope.off(),mr(e)}},uc=()=>{He&&He.scope.off(),mr(null)};function tf(t){return t.vnode.shapeFlag&4}let gi=!1;function rm(t,e=!1,n=!1){e&&Qo(e);const{props:s,children:i}=t.vnode,o=tf(t);Pg(t,s,o,e),Dg(t,i,n||e);const a=o?om(t,e):void 0;return e&&Qo(!1),a}function om(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,bg);const{setup:s}=n;if(s){sn();const i=t.setupContext=s.length>1?lm(t):null,o=Ti(t),a=Ii(s,t,0,[t.props,i]),c=Yu(a);if(rn(),o(),(c||t.sp)&&!Ys(t)&&Nh(t),c){if(a.then(uc,uc),e)return a.then(u=>{hc(t,u)}).catch(u=>{Mr(u,t,0)});t.asyncDep=a}else hc(t,a)}else nf(t)}function hc(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=wh(e)),nf(t)}function nf(t,e,n){const s=t.type;t.render||(t.render=s.render||Vt);{const i=Ti(t);sn();try{Ig(t)}finally{rn(),i()}}}const am={get(t,e){return qe(t,"get",""),t[e]}};function lm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,am),slots:t.slots,emit:t.emit,expose:e}}function Br(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(wh(zp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qs)return Qs[n](t)},has(e,n){return n in e||n in Qs}})):t.proxy}function cm(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function um(t){return se(t)&&"__vccOpts"in t}const at=(t,e)=>Yp(t,e,gi);function Na(t,e,n){const s=arguments.length;return s===2?Se(e)&&!ee(e)?pr(e)?De(t,null,[e]):De(t,e):De(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&pr(n)&&(n=[n]),De(t,e,n))}const hm="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zo;const fc=typeof window<"u"&&window.trustedTypes;if(fc)try{Zo=fc.createPolicy("vue",{createHTML:t=>t})}catch{}const sf=Zo?t=>Zo.createHTML(t):t=>t,fm="http://www.w3.org/2000/svg",dm="http://www.w3.org/1998/Math/MathML",Xt=typeof document<"u"?document:null,dc=Xt&&Xt.createElement("template"),pm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Xt.createElementNS(fm,t):e==="mathml"?Xt.createElementNS(dm,t):n?Xt.createElement(t,{is:n}):Xt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Xt.createTextNode(t),createComment:t=>Xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,o){const a=n?n.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{dc.innerHTML=sf(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const c=dc.content;if(s==="svg"||s==="mathml"){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},gn="transition",Hs="animation",mi=Symbol("_vtc"),rf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},gm=Me({},Ch,rf),mm=t=>(t.displayName="Transition",t.props=gm,t),of=mm((t,{slots:e})=>Na(ag,vm(t),e)),jn=(t,e=[])=>{ee(t)?t.forEach(n=>n(...e)):t&&t(...e)},pc=t=>t?ee(t)?t.some(e=>e.length>1):t.length>1:!1;function vm(t){const e={};for(const I in t)I in rf||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:f=a,appearToClass:d=c,leaveFromClass:g=`${n}-leave-from`,leaveActiveClass:v=`${n}-leave-active`,leaveToClass:A=`${n}-leave-to`}=t,k=_m(i),L=k&&k[0],B=k&&k[1],{onBeforeEnter:K,onEnter:$,onEnterCancelled:H,onLeave:W,onLeaveCancelled:ie,onBeforeAppear:re=K,onAppear:S=$,onAppearCancelled:_=H}=e,m=(I,w,ye,Le)=>{I._enterCancelled=Le,Vn(I,w?d:c),Vn(I,w?f:a),ye&&ye()},E=(I,w)=>{I._isLeaving=!1,Vn(I,g),Vn(I,A),Vn(I,v),w&&w()},T=I=>(w,ye)=>{const Le=I?S:$,Ae=()=>m(w,I,ye);jn(Le,[w,Ae]),gc(()=>{Vn(w,I?u:o),Kt(w,I?d:c),pc(Le)||mc(w,s,L,Ae)})};return Me(e,{onBeforeEnter(I){jn(K,[I]),Kt(I,o),Kt(I,a)},onBeforeAppear(I){jn(re,[I]),Kt(I,u),Kt(I,f)},onEnter:T(!1),onAppear:T(!0),onLeave(I,w){I._isLeaving=!0;const ye=()=>E(I,w);Kt(I,g),I._enterCancelled?(Kt(I,v),yc()):(yc(),Kt(I,v)),gc(()=>{I._isLeaving&&(Vn(I,g),Kt(I,A),pc(W)||mc(I,s,B,ye))}),jn(W,[I,ye])},onEnterCancelled(I){m(I,!1,void 0,!0),jn(H,[I])},onAppearCancelled(I){m(I,!0,void 0,!0),jn(_,[I])},onLeaveCancelled(I){E(I),jn(ie,[I])}})}function _m(t){if(t==null)return null;if(Se(t))return[Eo(t.enter),Eo(t.leave)];{const e=Eo(t);return[e,e]}}function Eo(t){return yp(t)}function Kt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[mi]||(t[mi]=new Set)).add(e)}function Vn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[mi];n&&(n.delete(e),n.size||(t[mi]=void 0))}function gc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ym=0;function mc(t,e,n,s){const i=t._endId=++ym,o=()=>{i===t._endId&&s()};if(n!=null)return setTimeout(o,n);const{type:a,timeout:c,propCount:u}=wm(t,e);if(!a)return s();const f=a+"end";let d=0;const g=()=>{t.removeEventListener(f,v),o()},v=A=>{A.target===t&&++d>=u&&g()};setTimeout(()=>{d<u&&g()},c+1),t.addEventListener(f,v)}function wm(t,e){const n=window.getComputedStyle(t),s=k=>(n[k]||"").split(", "),i=s(`${gn}Delay`),o=s(`${gn}Duration`),a=vc(i,o),c=s(`${Hs}Delay`),u=s(`${Hs}Duration`),f=vc(c,u);let d=null,g=0,v=0;e===gn?a>0&&(d=gn,g=a,v=o.length):e===Hs?f>0&&(d=Hs,g=f,v=u.length):(g=Math.max(a,f),d=g>0?a>f?gn:Hs:null,v=d?d===gn?o.length:u.length:0);const A=d===gn&&/\b(transform|all)(,|$)/.test(s(`${gn}Property`).toString());return{type:d,timeout:g,propCount:v,hasTransform:A}}function vc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>_c(n)+_c(t[s])))}function _c(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function yc(){return document.body.offsetHeight}function bm(t,e,n){const s=t[mi];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wc=Symbol("_vod"),Im=Symbol("_vsh"),Em=Symbol(""),Tm=/(^|;)\s*display\s*:/;function Sm(t,e,n){const s=t.style,i=Oe(n);let o=!1;if(n&&!i){if(e)if(Oe(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&sr(s,c,"")}else for(const a in e)n[a]==null&&sr(s,a,"");for(const a in n)a==="display"&&(o=!0),sr(s,a,n[a])}else if(i){if(e!==n){const a=s[Em];a&&(n+=";"+a),s.cssText=n,o=Tm.test(n)}}else e&&t.removeAttribute("style");wc in t&&(t[wc]=o?s.display:"",t[Im]&&(s.display="none"))}const bc=/\s*!important$/;function sr(t,e,n){if(ee(n))n.forEach(s=>sr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Am(t,e);bc.test(n)?t.setProperty(Nn(s),n.replace(bc,""),"important"):t[s]=n}}const Ic=["Webkit","Moz","ms"],To={};function Am(t,e){const n=To[e];if(n)return n;let s=yt(e);if(s!=="filter"&&s in t)return To[e]=s;s=Or(s);for(let i=0;i<Ic.length;i++){const o=Ic[i]+s;if(o in t)return To[e]=o}return e}const Ec="http://www.w3.org/1999/xlink";function Tc(t,e,n,s,i,o=Sp(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ec,e.slice(6,e.length)):t.setAttributeNS(Ec,e,n):n==null||o&&!eh(n)?t.removeAttribute(e):t.setAttribute(e,o?"":On(n)?String(n):n)}function Sc(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?sf(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=eh(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(i||e)}function fs(t,e,n,s){t.addEventListener(e,n,s)}function Cm(t,e,n,s){t.removeEventListener(e,n,s)}const Ac=Symbol("_vei");function Rm(t,e,n,s,i=null){const o=t[Ac]||(t[Ac]={}),a=o[e];if(s&&a)a.value=s;else{const[c,u]=Pm(e);if(s){const f=o[e]=Nm(s,i);fs(t,c,f,u)}else a&&(Cm(t,c,a,u),o[e]=void 0)}}const Cc=/(?:Once|Passive|Capture)$/;function Pm(t){let e;if(Cc.test(t)){e={};let s;for(;s=t.match(Cc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Nn(t.slice(2)),e]}let So=0;const km=Promise.resolve(),Om=()=>So||(km.then(()=>So=0),So=Date.now());function Nm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Pt(Dm(s,n.value),e,5,[s])};return n.value=t,n.attached=Om(),n}function Dm(t,e){if(ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Rc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,xm=(t,e,n,s,i,o)=>{const a=i==="svg";e==="class"?bm(t,s,a):e==="style"?Sm(t,n,s):Rr(e)?ga(e)||Rm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Lm(t,e,s,a))?(Sc(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Tc(t,e,s,a,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Oe(s))?Sc(t,yt(e),s,o,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Tc(t,e,s,a))};function Lm(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Rc(e)&&se(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Rc(e)&&Oe(n)?!1:e in t}const Pc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ee(e)?n=>Zi(e,n):e};function Mm(t){t.target.composing=!0}function kc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ao=Symbol("_assign"),Um={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Ao]=Pc(i);const o=s||i.props&&i.props.type==="number";fs(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),o&&(c=Bo(c)),t[Ao](c)}),n&&fs(t,"change",()=>{t.value=t.value.trim()}),e||(fs(t,"compositionstart",Mm),fs(t,"compositionend",kc),fs(t,"change",kc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:o}},a){if(t[Ao]=Pc(a),t.composing)return;const c=(o||t.type==="number")&&!/^0\d/.test(t.value)?Bo(t.value):t.value,u=e??"";c!==u&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===u)||(t.value=u))}},Fm=["ctrl","shift","alt","meta"],jm={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Fm.some(n=>t[`${n}Key`]&&!e.includes(n))},Vm=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...o)=>{for(let a=0;a<e.length;a++){const c=jm[e[a]];if(c&&c(i,e))return}return t(i,...o)})},$m={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Bm=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const o=Nn(i.key);if(e.some(a=>a===o||$m[a]===o))return t(i)})},Hm=Me({patchProp:xm},pm);let Oc;function Wm(){return Oc||(Oc=Lg(Hm))}const Gm=(...t)=>{const e=Wm().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=qm(s);if(!i)return;const o=e._component;!se(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=n(i,!1,zm(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},e};function zm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qm(t){return Oe(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ds=typeof document<"u";function af(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Km(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&af(t.default)}const me=Object.assign;function Co(t,e){const n={};for(const s in e){const i=e[s];n[s]=kt(i)?i.map(t):t(i)}return n}const ti=()=>{},kt=Array.isArray,lf=/#/g,Jm=/&/g,Xm=/\//g,Ym=/=/g,Qm=/\?/g,cf=/\+/g,Zm=/%5B/g,ev=/%5D/g,uf=/%5E/g,tv=/%60/g,hf=/%7B/g,nv=/%7C/g,ff=/%7D/g,sv=/%20/g;function Da(t){return encodeURI(""+t).replace(nv,"|").replace(Zm,"[").replace(ev,"]")}function iv(t){return Da(t).replace(hf,"{").replace(ff,"}").replace(uf,"^")}function ea(t){return Da(t).replace(cf,"%2B").replace(sv,"+").replace(lf,"%23").replace(Jm,"%26").replace(tv,"`").replace(hf,"{").replace(ff,"}").replace(uf,"^")}function rv(t){return ea(t).replace(Ym,"%3D")}function ov(t){return Da(t).replace(lf,"%23").replace(Qm,"%3F")}function av(t){return t==null?"":ov(t).replace(Xm,"%2F")}function vi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const lv=/\/$/,cv=t=>t.replace(lv,"");function Ro(t,e,n="/"){let s,i={},o="",a="";const c=e.indexOf("#");let u=e.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(s=e.slice(0,u),o=e.slice(u+1,c>-1?c:e.length),i=t(o)),c>-1&&(s=s||e.slice(0,c),a=e.slice(c,e.length)),s=dv(s??e,n),{fullPath:s+(o&&"?")+o+a,path:s,query:i,hash:vi(a)}}function uv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Nc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function hv(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Es(e.matched[s],n.matched[i])&&df(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function df(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!fv(t[n],e[n]))return!1;return!0}function fv(t,e){return kt(t)?Dc(t,e):kt(e)?Dc(e,t):t===e}function Dc(t,e){return kt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function dv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let o=n.length-1,a,c;for(a=0;a<s.length;a++)if(c=s[a],c!==".")if(c==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(a).join("/")}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var _i;(function(t){t.pop="pop",t.push="push"})(_i||(_i={}));var ni;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ni||(ni={}));function pv(t){if(!t)if(ds){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cv(t)}const gv=/^[^#]+#/;function mv(t,e){return t.replace(gv,"#")+e}function vv(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Hr=()=>({left:window.scrollX,top:window.scrollY});function _v(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=vv(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function xc(t,e){return(history.state?history.state.position-e:-1)+t}const ta=new Map;function yv(t,e){ta.set(t,e)}function wv(t){const e=ta.get(t);return ta.delete(t),e}let bv=()=>location.protocol+"//"+location.host;function pf(t,e){const{pathname:n,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){let c=i.includes(t.slice(o))?t.slice(o).length:1,u=i.slice(c);return u[0]!=="/"&&(u="/"+u),Nc(u,"")}return Nc(n,t)+s+i}function Iv(t,e,n,s){let i=[],o=[],a=null;const c=({state:v})=>{const A=pf(t,location),k=n.value,L=e.value;let B=0;if(v){if(n.value=A,e.value=v,a&&a===k){a=null;return}B=L?v.position-L.position:0}else s(A);i.forEach(K=>{K(n.value,k,{delta:B,type:_i.pop,direction:B?B>0?ni.forward:ni.back:ni.unknown})})};function u(){a=n.value}function f(v){i.push(v);const A=()=>{const k=i.indexOf(v);k>-1&&i.splice(k,1)};return o.push(A),A}function d(){const{history:v}=window;v.state&&v.replaceState(me({},v.state,{scroll:Hr()}),"")}function g(){for(const v of o)v();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:u,listen:f,destroy:g}}function Lc(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Hr():null}}function Ev(t){const{history:e,location:n}=window,s={value:pf(t,n)},i={value:e.state};i.value||o(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(u,f,d){const g=t.indexOf("#"),v=g>-1?(n.host&&document.querySelector("base")?t:t.slice(g))+u:bv()+t+u;try{e[d?"replaceState":"pushState"](f,"",v),i.value=f}catch(A){console.error(A),n[d?"replace":"assign"](v)}}function a(u,f){const d=me({},e.state,Lc(i.value.back,u,i.value.forward,!0),f,{position:i.value.position});o(u,d,!0),s.value=u}function c(u,f){const d=me({},i.value,e.state,{forward:u,scroll:Hr()});o(d.current,d,!0);const g=me({},Lc(s.value,u,null),{position:d.position+1},f);o(u,g,!1),s.value=u}return{location:s,state:i,push:c,replace:a}}function Tv(t){t=pv(t);const e=Ev(t),n=Iv(t,e.state,e.location,e.replace);function s(o,a=!0){a||n.pauseListeners(),history.go(o)}const i=me({location:"",base:t,go:s,createHref:mv.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Sv(t){return typeof t=="string"||t&&typeof t=="object"}function gf(t){return typeof t=="string"||typeof t=="symbol"}const mf=Symbol("");var Mc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Mc||(Mc={}));function Ts(t,e){return me(new Error,{type:t,[mf]:!0},e)}function Jt(t,e){return t instanceof Error&&mf in t&&(e==null||!!(t.type&e))}const Uc="[^/]+?",Av={sensitive:!1,strict:!1,start:!0,end:!0},Cv=/[.+*?^${}()[\]/\\]/g;function Rv(t,e){const n=me({},Av,e),s=[];let i=n.start?"^":"";const o=[];for(const f of t){const d=f.length?[]:[90];n.strict&&!f.length&&(i+="/");for(let g=0;g<f.length;g++){const v=f[g];let A=40+(n.sensitive?.25:0);if(v.type===0)g||(i+="/"),i+=v.value.replace(Cv,"\\$&"),A+=40;else if(v.type===1){const{value:k,repeatable:L,optional:B,regexp:K}=v;o.push({name:k,repeatable:L,optional:B});const $=K||Uc;if($!==Uc){A+=10;try{new RegExp(`(${$})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${k}" (${$}): `+W.message)}}let H=L?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;g||(H=B&&f.length<2?`(?:/${H})`:"/"+H),B&&(H+="?"),i+=H,A+=20,B&&(A+=-8),L&&(A+=-20),$===".*"&&(A+=-50)}d.push(A)}s.push(d)}if(n.strict&&n.end){const f=s.length-1;s[f][s[f].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function c(f){const d=f.match(a),g={};if(!d)return null;for(let v=1;v<d.length;v++){const A=d[v]||"",k=o[v-1];g[k.name]=A&&k.repeatable?A.split("/"):A}return g}function u(f){let d="",g=!1;for(const v of t){(!g||!d.endsWith("/"))&&(d+="/"),g=!1;for(const A of v)if(A.type===0)d+=A.value;else if(A.type===1){const{value:k,repeatable:L,optional:B}=A,K=k in f?f[k]:"";if(kt(K)&&!L)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const $=kt(K)?K.join("/"):K;if(!$)if(B)v.length<2&&(d.endsWith("/")?d=d.slice(0,-1):g=!0);else throw new Error(`Missing required param "${k}"`);d+=$}}return d||"/"}return{re:a,score:s,keys:o,parse:c,stringify:u}}function Pv(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function vf(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const o=Pv(s[n],i[n]);if(o)return o;n++}if(Math.abs(i.length-s.length)===1){if(Fc(s))return 1;if(Fc(i))return-1}return i.length-s.length}function Fc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const kv={type:0,value:""},Ov=/[a-zA-Z0-9_]/;function Nv(t){if(!t)return[[]];if(t==="/")return[[kv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(A){throw new Error(`ERR (${n})/"${f}": ${A}`)}let n=0,s=n;const i=[];let o;function a(){o&&i.push(o),o=[]}let c=0,u,f="",d="";function g(){f&&(n===0?o.push({type:0,value:f}):n===1||n===2||n===3?(o.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),f="")}function v(){f+=u}for(;c<t.length;){if(u=t[c++],u==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:u==="/"?(f&&g(),a()):u===":"?(g(),n=1):v();break;case 4:v(),n=s;break;case 1:u==="("?n=2:Ov.test(u)?v():(g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:n=3:d+=u;break;case 3:g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),g(),a(),i}function Dv(t,e,n){const s=Rv(Nv(t.path),n),i=me(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function xv(t,e){const n=[],s=new Map;e=Bc({strict:!1,end:!0,sensitive:!1},e);function i(g){return s.get(g)}function o(g,v,A){const k=!A,L=Vc(g);L.aliasOf=A&&A.record;const B=Bc(e,g),K=[L];if("alias"in g){const W=typeof g.alias=="string"?[g.alias]:g.alias;for(const ie of W)K.push(Vc(me({},L,{components:A?A.record.components:L.components,path:ie,aliasOf:A?A.record:L})))}let $,H;for(const W of K){const{path:ie}=W;if(v&&ie[0]!=="/"){const re=v.record.path,S=re[re.length-1]==="/"?"":"/";W.path=v.record.path+(ie&&S+ie)}if($=Dv(W,v,B),A?A.alias.push($):(H=H||$,H!==$&&H.alias.push($),k&&g.name&&!$c($)&&a(g.name)),_f($)&&u($),L.children){const re=L.children;for(let S=0;S<re.length;S++)o(re[S],$,A&&A.children[S])}A=A||$}return H?()=>{a(H)}:ti}function a(g){if(gf(g)){const v=s.get(g);v&&(s.delete(g),n.splice(n.indexOf(v),1),v.children.forEach(a),v.alias.forEach(a))}else{const v=n.indexOf(g);v>-1&&(n.splice(v,1),g.record.name&&s.delete(g.record.name),g.children.forEach(a),g.alias.forEach(a))}}function c(){return n}function u(g){const v=Uv(g,n);n.splice(v,0,g),g.record.name&&!$c(g)&&s.set(g.record.name,g)}function f(g,v){let A,k={},L,B;if("name"in g&&g.name){if(A=s.get(g.name),!A)throw Ts(1,{location:g});B=A.record.name,k=me(jc(v.params,A.keys.filter(H=>!H.optional).concat(A.parent?A.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),g.params&&jc(g.params,A.keys.map(H=>H.name))),L=A.stringify(k)}else if(g.path!=null)L=g.path,A=n.find(H=>H.re.test(L)),A&&(k=A.parse(L),B=A.record.name);else{if(A=v.name?s.get(v.name):n.find(H=>H.re.test(v.path)),!A)throw Ts(1,{location:g,currentLocation:v});B=A.record.name,k=me({},v.params,g.params),L=A.stringify(k)}const K=[];let $=A;for(;$;)K.unshift($.record),$=$.parent;return{name:B,path:L,params:k,matched:K,meta:Mv(K)}}t.forEach(g=>o(g));function d(){n.length=0,s.clear()}return{addRoute:o,resolve:f,removeRoute:a,clearRoutes:d,getRoutes:c,getRecordMatcher:i}}function jc(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Vc(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Lv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Lv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function $c(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Mv(t){return t.reduce((e,n)=>me(e,n.meta),{})}function Bc(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Uv(t,e){let n=0,s=e.length;for(;n!==s;){const o=n+s>>1;vf(t,e[o])<0?s=o:n=o+1}const i=Fv(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function Fv(t){let e=t;for(;e=e.parent;)if(_f(e)&&vf(t,e)===0)return e}function _f({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function jv(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const o=s[i].replace(cf," "),a=o.indexOf("="),c=vi(a<0?o:o.slice(0,a)),u=a<0?null:vi(o.slice(a+1));if(c in e){let f=e[c];kt(f)||(f=e[c]=[f]),f.push(u)}else e[c]=u}return e}function Hc(t){let e="";for(let n in t){const s=t[n];if(n=rv(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(kt(s)?s.map(o=>o&&ea(o)):[s&&ea(s)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function Vv(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=kt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const $v=Symbol(""),Wc=Symbol(""),Wr=Symbol(""),yf=Symbol(""),na=Symbol("");function Ws(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function bn(t,e,n,s,i,o=a=>a()){const a=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((c,u)=>{const f=v=>{v===!1?u(Ts(4,{from:n,to:e})):v instanceof Error?u(v):Sv(v)?u(Ts(2,{from:e,to:v})):(a&&s.enterCallbacks[i]===a&&typeof v=="function"&&a.push(v),c())},d=o(()=>t.call(s&&s.instances[i],e,n,f));let g=Promise.resolve(d);t.length<3&&(g=g.then(f)),g.catch(v=>u(v))})}function Po(t,e,n,s,i=o=>o()){const o=[];for(const a of t)for(const c in a.components){let u=a.components[c];if(!(e!=="beforeRouteEnter"&&!a.instances[c]))if(af(u)){const d=(u.__vccOpts||u)[e];d&&o.push(bn(d,n,s,a,c,i))}else{let f=u();o.push(()=>f.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${a.path}"`);const g=Km(d)?d.default:d;a.mods[c]=d,a.components[c]=g;const A=(g.__vccOpts||g)[e];return A&&bn(A,n,s,a,c,i)()}))}}return o}function Gc(t){const e=$t(Wr),n=$t(yf),s=at(()=>{const u=lt(t.to);return e.resolve(u)}),i=at(()=>{const{matched:u}=s.value,{length:f}=u,d=u[f-1],g=n.matched;if(!d||!g.length)return-1;const v=g.findIndex(Es.bind(null,d));if(v>-1)return v;const A=zc(u[f-2]);return f>1&&zc(d)===A&&g[g.length-1].path!==A?g.findIndex(Es.bind(null,u[f-2])):v}),o=at(()=>i.value>-1&&zv(n.params,s.value.params)),a=at(()=>i.value>-1&&i.value===n.matched.length-1&&df(n.params,s.value.params));function c(u={}){if(Gv(u)){const f=e[lt(t.replace)?"replace":"push"](lt(t.to)).catch(ti);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:s,href:at(()=>s.value.href),isActive:o,isExactActive:a,navigate:c}}function Bv(t){return t.length===1?t[0]:t}const Hv=Ca({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Gc,setup(t,{slots:e}){const n=Lr(Gc(t)),{options:s}=$t(Wr),i=at(()=>({[qc(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[qc(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&Bv(e.default(n));return t.custom?o:Na("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),Wv=Hv;function Gv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function zv(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!kt(i)||i.length!==s.length||s.some((o,a)=>o!==i[a]))return!1}return!0}function zc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const qc=(t,e,n)=>t??e??n,qv=Ca({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=$t(na),i=at(()=>t.route||s.value),o=$t(Wc,0),a=at(()=>{let f=lt(o);const{matched:d}=i.value;let g;for(;(g=d[f])&&!g.components;)f++;return f}),c=at(()=>i.value.matched[a.value]);er(Wc,at(()=>a.value+1)),er($v,c),er(na,i);const u=$e();return Zs(()=>[u.value,c.value,t.name],([f,d,g],[v,A,k])=>{d&&(d.instances[g]=f,A&&A!==d&&f&&f===v&&(d.leaveGuards.size||(d.leaveGuards=A.leaveGuards),d.updateGuards.size||(d.updateGuards=A.updateGuards))),f&&d&&(!A||!Es(d,A)||!v)&&(d.enterCallbacks[g]||[]).forEach(L=>L(f))},{flush:"post"}),()=>{const f=i.value,d=t.name,g=c.value,v=g&&g.components[d];if(!v)return Kc(n.default,{Component:v,route:f});const A=g.props[d],k=A?A===!0?f.params:typeof A=="function"?A(f):A:null,B=Na(v,me({},k,e,{onVnodeUnmounted:K=>{K.component.isUnmounted&&(g.instances[d]=null)},ref:u}));return Kc(n.default,{Component:B,route:f})||B}}});function Kc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Kv=qv;function Jv(t){const e=xv(t.routes,t),n=t.parseQuery||jv,s=t.stringifyQuery||Hc,i=t.history,o=Ws(),a=Ws(),c=Ws(),u=qp(mn);let f=mn;ds&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Co.bind(null,O=>""+O),g=Co.bind(null,av),v=Co.bind(null,vi);function A(O,J){let q,X;return gf(O)?(q=e.getRecordMatcher(O),X=J):X=O,e.addRoute(X,q)}function k(O){const J=e.getRecordMatcher(O);J&&e.removeRoute(J)}function L(){return e.getRoutes().map(O=>O.record)}function B(O){return!!e.getRecordMatcher(O)}function K(O,J){if(J=me({},J||u.value),typeof O=="string"){const C=Ro(n,O,J.path),N=e.resolve({path:C.path},J),x=i.createHref(C.fullPath);return me(C,N,{params:v(N.params),hash:vi(C.hash),redirectedFrom:void 0,href:x})}let q;if(O.path!=null)q=me({},O,{path:Ro(n,O.path,J.path).path});else{const C=me({},O.params);for(const N in C)C[N]==null&&delete C[N];q=me({},O,{params:g(C)}),J.params=g(J.params)}const X=e.resolve(q,J),de=O.hash||"";X.params=d(v(X.params));const y=uv(s,me({},O,{hash:iv(de),path:X.path})),b=i.createHref(y);return me({fullPath:y,hash:de,query:s===Hc?Vv(O.query):O.query||{}},X,{redirectedFrom:void 0,href:b})}function $(O){return typeof O=="string"?Ro(n,O,u.value.path):me({},O)}function H(O,J){if(f!==O)return Ts(8,{from:J,to:O})}function W(O){return S(O)}function ie(O){return W(me($(O),{replace:!0}))}function re(O){const J=O.matched[O.matched.length-1];if(J&&J.redirect){const{redirect:q}=J;let X=typeof q=="function"?q(O):q;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=$(X):{path:X},X.params={}),me({query:O.query,hash:O.hash,params:X.path!=null?{}:O.params},X)}}function S(O,J){const q=f=K(O),X=u.value,de=O.state,y=O.force,b=O.replace===!0,C=re(q);if(C)return S(me($(C),{state:typeof C=="object"?me({},de,C.state):de,force:y,replace:b}),J||q);const N=q;N.redirectedFrom=J;let x;return!y&&hv(s,X,q)&&(x=Ts(16,{to:N,from:X}),ht(X,X,!0,!1)),(x?Promise.resolve(x):E(N,X)).catch(D=>Jt(D)?Jt(D,2)?D:wt(D):ae(D,N,X)).then(D=>{if(D){if(Jt(D,2))return S(me({replace:b},$(D.to),{state:typeof D.to=="object"?me({},de,D.to.state):de,force:y}),J||N)}else D=I(N,X,!0,b,de);return T(N,X,D),D})}function _(O,J){const q=H(O,J);return q?Promise.reject(q):Promise.resolve()}function m(O){const J=un.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(O):O()}function E(O,J){let q;const[X,de,y]=Xv(O,J);q=Po(X.reverse(),"beforeRouteLeave",O,J);for(const C of X)C.leaveGuards.forEach(N=>{q.push(bn(N,O,J))});const b=_.bind(null,O,J);return q.push(b),tt(q).then(()=>{q=[];for(const C of o.list())q.push(bn(C,O,J));return q.push(b),tt(q)}).then(()=>{q=Po(de,"beforeRouteUpdate",O,J);for(const C of de)C.updateGuards.forEach(N=>{q.push(bn(N,O,J))});return q.push(b),tt(q)}).then(()=>{q=[];for(const C of y)if(C.beforeEnter)if(kt(C.beforeEnter))for(const N of C.beforeEnter)q.push(bn(N,O,J));else q.push(bn(C.beforeEnter,O,J));return q.push(b),tt(q)}).then(()=>(O.matched.forEach(C=>C.enterCallbacks={}),q=Po(y,"beforeRouteEnter",O,J,m),q.push(b),tt(q))).then(()=>{q=[];for(const C of a.list())q.push(bn(C,O,J));return q.push(b),tt(q)}).catch(C=>Jt(C,8)?C:Promise.reject(C))}function T(O,J,q){c.list().forEach(X=>m(()=>X(O,J,q)))}function I(O,J,q,X,de){const y=H(O,J);if(y)return y;const b=J===mn,C=ds?history.state:{};q&&(X||b?i.replace(O.fullPath,me({scroll:b&&C&&C.scroll},de)):i.push(O.fullPath,de)),u.value=O,ht(O,J,q,b),wt()}let w;function ye(){w||(w=i.listen((O,J,q)=>{if(!Dt.listening)return;const X=K(O),de=re(X);if(de){S(me(de,{replace:!0,force:!0}),X).catch(ti);return}f=X;const y=u.value;ds&&yv(xc(y.fullPath,q.delta),Hr()),E(X,y).catch(b=>Jt(b,12)?b:Jt(b,2)?(S(me($(b.to),{force:!0}),X).then(C=>{Jt(C,20)&&!q.delta&&q.type===_i.pop&&i.go(-1,!1)}).catch(ti),Promise.reject()):(q.delta&&i.go(-q.delta,!1),ae(b,X,y))).then(b=>{b=b||I(X,y,!1),b&&(q.delta&&!Jt(b,8)?i.go(-q.delta,!1):q.type===_i.pop&&Jt(b,20)&&i.go(-1,!1)),T(X,y,b)}).catch(ti)}))}let Le=Ws(),Ae=Ws(),le;function ae(O,J,q){wt(O);const X=Ae.list();return X.length?X.forEach(de=>de(O,J,q)):console.error(O),Promise.reject(O)}function rt(){return le&&u.value!==mn?Promise.resolve():new Promise((O,J)=>{Le.add([O,J])})}function wt(O){return le||(le=!O,ye(),Le.list().forEach(([J,q])=>O?q(O):J()),Le.reset()),O}function ht(O,J,q,X){const{scrollBehavior:de}=t;if(!ds||!de)return Promise.resolve();const y=!q&&wv(xc(O.fullPath,0))||(X||!q)&&history.state&&history.state.scroll||null;return Js().then(()=>de(O,J,y)).then(b=>b&&_v(b)).catch(b=>ae(b,O,J))}const Ce=O=>i.go(O);let Re;const un=new Set,Dt={currentRoute:u,listening:!0,addRoute:A,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:B,getRoutes:L,resolve:K,options:t,push:W,replace:ie,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:o.add,beforeResolve:a.add,afterEach:c.add,onError:Ae.add,isReady:rt,install(O){const J=this;O.component("RouterLink",Wv),O.component("RouterView",Kv),O.config.globalProperties.$router=J,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>lt(u)}),ds&&!Re&&u.value===mn&&(Re=!0,W(i.location).catch(de=>{}));const q={};for(const de in mn)Object.defineProperty(q,de,{get:()=>u.value[de],enumerable:!0});O.provide(Wr,J),O.provide(yf,vh(q)),O.provide(na,u);const X=O.unmount;un.add(O),O.unmount=function(){un.delete(O),un.size<1&&(f=mn,w&&w(),w=null,u.value=mn,Re=!1,le=!1),X()}}};function tt(O){return O.reduce((J,q)=>J.then(()=>m(q)),Promise.resolve())}return Dt}function Xv(t,e){const n=[],s=[],i=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const c=e.matched[a];c&&(t.matched.find(f=>Es(f,c))?s.push(c):n.push(c));const u=t.matched[a];u&&(e.matched.find(f=>Es(f,u))||i.push(u))}return[n,s,i]}function Si(){return $t(Wr)}const Yv=()=>{};var Jc={};/**
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
 */const wf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qv=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],a=t[n++],c=t[n++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],a=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},bf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const o=t[i],a=i+1<t.length,c=a?t[i+1]:0,u=i+2<t.length,f=u?t[i+2]:0,d=o>>2,g=(o&3)<<4|c>>4;let v=(c&15)<<2|f>>6,A=f&63;u||(A=64,a||(v=64)),s.push(n[d],n[g],n[v],n[A])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const f=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||c==null||f==null||g==null)throw new Zv;const v=o<<2|c>>4;if(s.push(v),f!==64){const A=c<<4&240|f>>2;if(s.push(A),g!==64){const k=f<<6&192|g;s.push(k)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Zv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const e_=function(t){const e=wf(t);return bf.encodeByteArray(e,!0)},vr=function(t){return e_(t).replace(/\./g,"")},If=function(t){try{return bf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function t_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const n_=()=>t_().__FIREBASE_DEFAULTS__,s_=()=>{if(typeof process>"u"||typeof Jc>"u")return;const t=Jc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},i_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&If(t[1]);return e&&JSON.parse(e)},xa=()=>{try{return Yv()||n_()||s_()||i_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ef=t=>{var e,n;return(n=(e=xa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},r_=t=>{const e=Ef(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Tf=()=>{var t;return(t=xa())===null||t===void 0?void 0:t.config},Sf=t=>{var e;return(e=xa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class o_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ai(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Af(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function a_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vr(JSON.stringify(n)),vr(JSON.stringify(a)),""].join(".")}const si={};function l_(){const t={prod:[],emulator:[]};for(const e of Object.keys(si))si[e]?t.emulator.push(e):t.prod.push(e);return t}function c_(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Xc=!1;function Cf(t,e){if(typeof window>"u"||typeof document>"u"||!Ai(window.location.host)||si[t]===e||si[t]||Xc)return;si[t]=e;function n(v){return`__firebase__banner__${v}`}const s="__firebase__banner",o=l_().prod.length>0;function a(){const v=document.getElementById(s);v&&v.remove()}function c(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function u(v,A){v.setAttribute("width","24"),v.setAttribute("id",A),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function f(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Xc=!0,a()},v}function d(v,A){v.setAttribute("id",A),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function g(){const v=c_(s),A=n("text"),k=document.getElementById(A)||document.createElement("span"),L=n("learnmore"),B=document.getElementById(L)||document.createElement("a"),K=n("preprendIcon"),$=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const H=v.element;c(H),d(B,L);const W=f();u($,K),H.append($,k,B,W),document.body.appendChild(H)}o?(k.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function u_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function h_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Rf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function f_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function d_(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Pf(){try{return typeof indexedDB=="object"}catch{return!1}}function kf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function p_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const g_="FirebaseError";class Nt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=g_,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ss.prototype.create)}}class ss{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?m_(o,s):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Nt(i,c,s)}}function m_(t,e){return t.replace(v_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const v_=/\{\$([^}]+)}/g;function __(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function kn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const o=t[i],a=e[i];if(Yc(o)&&Yc(a)){if(!kn(o,a))return!1}else if(o!==a)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Yc(t){return t!==null&&typeof t=="object"}/**
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
 */function Ci(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function y_(t,e){const n=new w_(t,e);return n.subscribe.bind(n)}class w_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");b_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ko),i.error===void 0&&(i.error=ko),i.complete===void 0&&(i.complete=ko);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function b_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ko(){}/**
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
 */const I_=1e3,E_=2,T_=4*60*60*1e3,S_=.5;function Qc(t,e=I_,n=E_){const s=e*Math.pow(n,t),i=Math.round(S_*s*(Math.random()-.5)*2);return Math.min(T_,s+i)}/**
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
 */function cn(t){return t&&t._delegate?t._delegate:t}class Ot{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bn="[DEFAULT]";/**
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
 */class A_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new o_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e?.identifier),i=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(R_(e))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});s.resolve(o)}catch{}}}}clearInstance(e=Bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bn){return this.instances.has(e)}getOptions(e=Bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);s===c&&a.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),o=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:C_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bn){return this.component?this.component.multipleInstances?e:Bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function C_(t){return t===Bn?void 0:t}function R_(t){return t.instantiationMode==="EAGER"}/**
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
 */class P_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new A_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const k_={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},O_=_e.INFO,N_={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},D_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=N_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gr{constructor(e){this.name=e,this._logLevel=O_,this._logHandler=D_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?k_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const x_=(t,e)=>e.some(n=>t instanceof n);let Zc,eu;function L_(){return Zc||(Zc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function M_(){return eu||(eu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Of=new WeakMap,sa=new WeakMap,Nf=new WeakMap,Oo=new WeakMap,La=new WeakMap;function U_(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(An(t.result)),i()},a=()=>{s(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Of.set(n,t)}).catch(()=>{}),La.set(e,t),e}function F_(t){if(sa.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});sa.set(t,e)}let ia={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function j_(t){ia=t(ia)}function V_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(No(this),e,...n);return Nf.set(s,e.sort?e.sort():[e]),An(s)}:M_().includes(t)?function(...e){return t.apply(No(this),e),An(Of.get(this))}:function(...e){return An(t.apply(No(this),e))}}function $_(t){return typeof t=="function"?V_(t):(t instanceof IDBTransaction&&F_(t),x_(t,L_())?new Proxy(t,ia):t)}function An(t){if(t instanceof IDBRequest)return U_(t);if(Oo.has(t))return Oo.get(t);const e=$_(t);return e!==t&&(Oo.set(t,e),La.set(e,t)),e}const No=t=>La.get(t);function Df(t,e,{blocked:n,upgrade:s,blocking:i,terminated:o}={}){const a=indexedDB.open(t,e),c=An(a);return s&&a.addEventListener("upgradeneeded",u=>{s(An(a.result),u.oldVersion,u.newVersion,An(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const B_=["get","getKey","getAll","getAllKeys","count"],H_=["put","add","delete","clear"],Do=new Map;function tu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Do.get(e))return Do.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=H_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||B_.includes(n)))return;const o=async function(a,...c){const u=this.transaction(a,i?"readwrite":"readonly");let f=u.store;return s&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),i&&u.done]))[0]};return Do.set(e,o),o}j_(t=>({...t,get:(e,n,s)=>tu(e,n)||t.get(e,n,s),has:(e,n)=>!!tu(e,n)||t.has(e,n)}));/**
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
 */class W_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(G_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function G_(t){const e=t.getComponent();return e?.type==="VERSION"}const ra="@firebase/app",nu="0.13.2";/**
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
 */const on=new Gr("@firebase/app"),z_="@firebase/app-compat",q_="@firebase/analytics-compat",K_="@firebase/analytics",J_="@firebase/app-check-compat",X_="@firebase/app-check",Y_="@firebase/auth",Q_="@firebase/auth-compat",Z_="@firebase/database",ey="@firebase/data-connect",ty="@firebase/database-compat",ny="@firebase/functions",sy="@firebase/functions-compat",iy="@firebase/installations",ry="@firebase/installations-compat",oy="@firebase/messaging",ay="@firebase/messaging-compat",ly="@firebase/performance",cy="@firebase/performance-compat",uy="@firebase/remote-config",hy="@firebase/remote-config-compat",fy="@firebase/storage",dy="@firebase/storage-compat",py="@firebase/firestore",gy="@firebase/ai",my="@firebase/firestore-compat",vy="firebase",_y="11.10.0";/**
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
 */const oa="[DEFAULT]",yy={[ra]:"fire-core",[z_]:"fire-core-compat",[K_]:"fire-analytics",[q_]:"fire-analytics-compat",[X_]:"fire-app-check",[J_]:"fire-app-check-compat",[Y_]:"fire-auth",[Q_]:"fire-auth-compat",[Z_]:"fire-rtdb",[ey]:"fire-data-connect",[ty]:"fire-rtdb-compat",[ny]:"fire-fn",[sy]:"fire-fn-compat",[iy]:"fire-iid",[ry]:"fire-iid-compat",[oy]:"fire-fcm",[ay]:"fire-fcm-compat",[ly]:"fire-perf",[cy]:"fire-perf-compat",[uy]:"fire-rc",[hy]:"fire-rc-compat",[fy]:"fire-gcs",[dy]:"fire-gcs-compat",[py]:"fire-fst",[my]:"fire-fst-compat",[gy]:"fire-vertex","fire-js":"fire-js",[vy]:"fire-js-all"};/**
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
 */const _r=new Map,wy=new Map,aa=new Map;function su(t,e){try{t.container.addComponent(e)}catch(n){on.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ht(t){const e=t.name;if(aa.has(e))return on.debug(`There were multiple attempts to register component ${e}.`),!1;aa.set(e,t);for(const n of _r.values())su(n,t);for(const n of wy.values())su(n,t);return!0}function is(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Et(t){return t==null?!1:t.settings!==void 0}/**
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
 */const by={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cn=new ss("app","Firebase",by);/**
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
 */class Iy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
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
 */const Cs=_y;function xf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:oa,automaticDataCollectionEnabled:!0},e),i=s.name;if(typeof i!="string"||!i)throw Cn.create("bad-app-name",{appName:String(i)});if(n||(n=Tf()),!n)throw Cn.create("no-options");const o=_r.get(i);if(o){if(kn(n,o.options)&&kn(s,o.config))return o;throw Cn.create("duplicate-app",{appName:i})}const a=new P_(i);for(const u of aa.values())a.addComponent(u);const c=new Iy(n,s,a);return _r.set(i,c),c}function Ma(t=oa){const e=_r.get(t);if(!e&&t===oa&&Tf())return xf();if(!e)throw Cn.create("no-app",{appName:t});return e}function _t(t,e,n){var s;let i=(s=yy[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${i}" with version "${e}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),on.warn(c.join(" "));return}Ht(new Ot(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ey="firebase-heartbeat-database",Ty=1,yi="firebase-heartbeat-store";let xo=null;function Lf(){return xo||(xo=Df(Ey,Ty,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cn.create("idb-open",{originalErrorMessage:t.message})})),xo}async function Sy(t){try{const n=(await Lf()).transaction(yi),s=await n.objectStore(yi).get(Mf(t));return await n.done,s}catch(e){if(e instanceof Nt)on.warn(e.message);else{const n=Cn.create("idb-get",{originalErrorMessage:e?.message});on.warn(n.message)}}}async function iu(t,e){try{const s=(await Lf()).transaction(yi,"readwrite");await s.objectStore(yi).put(e,Mf(t)),await s.done}catch(n){if(n instanceof Nt)on.warn(n.message);else{const s=Cn.create("idb-set",{originalErrorMessage:n?.message});on.warn(s.message)}}}function Mf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ay=1024,Cy=30;class Ry{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ky(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ru();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Cy){const a=Oy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){on.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ru(),{heartbeatsToSend:s,unsentEntries:i}=Py(this._heartbeatsCache.heartbeats),o=vr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return on.warn(n),""}}}function ru(){return new Date().toISOString().substring(0,10)}function Py(t,e=Ay){const n=[];let s=t.slice();for(const i of t){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),ou(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ou(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ky{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pf()?kf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Sy(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ou(t){return vr(JSON.stringify({version:2,heartbeats:t})).length}function Oy(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function Ny(t){Ht(new Ot("platform-logger",e=>new W_(e),"PRIVATE")),Ht(new Ot("heartbeat",e=>new Ry(e),"PRIVATE")),_t(ra,nu,t),_t(ra,nu,"esm2017"),_t("fire-js","")}Ny("");var Dy="firebase",xy="11.10.0";/**
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
 */_t(Dy,xy,"app");const Uf="@firebase/installations",Ua="0.6.18";/**
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
 */const Ff=1e4,jf=`w:${Ua}`,Vf="FIS_v2",Ly="https://firebaseinstallations.googleapis.com/v1",My=60*60*1e3,Uy="installations",Fy="Installations";/**
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
 */const jy={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Zn=new ss(Uy,Fy,jy);function $f(t){return t instanceof Nt&&t.code.includes("request-failed")}/**
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
 */function Bf({projectId:t}){return`${Ly}/projects/${t}/installations`}function Hf(t){return{token:t.token,requestStatus:2,expiresIn:$y(t.expiresIn),creationTime:Date.now()}}async function Wf(t,e){const s=(await e.json()).error;return Zn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Gf({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Vy(t,{refreshToken:e}){const n=Gf(t);return n.append("Authorization",By(e)),n}async function zf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function $y(t){return Number(t.replace("s","000"))}function By(t){return`${Vf} ${t}`}/**
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
 */async function Hy({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Bf(t),i=Gf(t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={fid:n,authVersion:Vf,appId:t.appId,sdkVersion:jf},c={method:"POST",headers:i,body:JSON.stringify(a)},u=await zf(()=>fetch(s,c));if(u.ok){const f=await u.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:Hf(f.authToken)}}else throw await Wf("Create Installation",u)}/**
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
 */function qf(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Wy(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Gy=/^[cdef][\w-]{21}$/,la="";function zy(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=qy(t);return Gy.test(n)?n:la}catch{return la}}function qy(t){return Wy(t).substr(0,22)}/**
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
 */function zr(t){return`${t.appName}!${t.appId}`}/**
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
 */const Kf=new Map;function Jf(t,e){const n=zr(t);Xf(n,e),Ky(n,e)}function Xf(t,e){const n=Kf.get(t);if(n)for(const s of n)s(e)}function Ky(t,e){const n=Jy();n&&n.postMessage({key:t,fid:e}),Xy()}let Gn=null;function Jy(){return!Gn&&"BroadcastChannel"in self&&(Gn=new BroadcastChannel("[Firebase] FID Change"),Gn.onmessage=t=>{Xf(t.data.key,t.data.fid)}),Gn}function Xy(){Kf.size===0&&Gn&&(Gn.close(),Gn=null)}/**
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
 */const Yy="firebase-installations-database",Qy=1,es="firebase-installations-store";let Lo=null;function Fa(){return Lo||(Lo=Df(Yy,Qy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(es)}}})),Lo}async function yr(t,e){const n=zr(t),i=(await Fa()).transaction(es,"readwrite"),o=i.objectStore(es),a=await o.get(n);return await o.put(e,n),await i.done,(!a||a.fid!==e.fid)&&Jf(t,e.fid),e}async function Yf(t){const e=zr(t),s=(await Fa()).transaction(es,"readwrite");await s.objectStore(es).delete(e),await s.done}async function qr(t,e){const n=zr(t),i=(await Fa()).transaction(es,"readwrite"),o=i.objectStore(es),a=await o.get(n),c=e(a);return c===void 0?await o.delete(n):await o.put(c,n),await i.done,c&&(!a||a.fid!==c.fid)&&Jf(t,c.fid),c}/**
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
 */async function ja(t){let e;const n=await qr(t.appConfig,s=>{const i=Zy(s),o=e0(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===la?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Zy(t){const e=t||{fid:zy(),registrationStatus:0};return Qf(e)}function e0(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Zn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=t0(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:n0(t)}:{installationEntry:e}}async function t0(t,e){try{const n=await Hy(t,e);return yr(t.appConfig,n)}catch(n){throw $f(n)&&n.customData.serverCode===409?await Yf(t.appConfig):await yr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function n0(t){let e=await au(t.appConfig);for(;e.registrationStatus===1;)await qf(100),e=await au(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await ja(t);return s||n}return e}function au(t){return qr(t,e=>{if(!e)throw Zn.create("installation-not-found");return Qf(e)})}function Qf(t){return s0(t)?{fid:t.fid,registrationStatus:0}:t}function s0(t){return t.registrationStatus===1&&t.registrationTime+Ff<Date.now()}/**
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
 */async function i0({appConfig:t,heartbeatServiceProvider:e},n){const s=r0(t,n),i=Vy(t,n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={installation:{sdkVersion:jf,appId:t.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},u=await zf(()=>fetch(s,c));if(u.ok){const f=await u.json();return Hf(f)}else throw await Wf("Generate Auth Token",u)}function r0(t,{fid:e}){return`${Bf(t)}/${e}/authTokens:generate`}/**
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
 */async function Va(t,e=!1){let n;const s=await qr(t.appConfig,o=>{if(!Zf(o))throw Zn.create("not-registered");const a=o.authToken;if(!e&&l0(a))return o;if(a.requestStatus===1)return n=o0(t,e),o;{if(!navigator.onLine)throw Zn.create("app-offline");const c=u0(o);return n=a0(t,c),c}});return n?await n:s.authToken}async function o0(t,e){let n=await lu(t.appConfig);for(;n.authToken.requestStatus===1;)await qf(100),n=await lu(t.appConfig);const s=n.authToken;return s.requestStatus===0?Va(t,e):s}function lu(t){return qr(t,e=>{if(!Zf(e))throw Zn.create("not-registered");const n=e.authToken;return h0(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function a0(t,e){try{const n=await i0(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await yr(t.appConfig,s),n}catch(n){if($f(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Yf(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await yr(t.appConfig,s)}throw n}}function Zf(t){return t!==void 0&&t.registrationStatus===2}function l0(t){return t.requestStatus===2&&!c0(t)}function c0(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+My}function u0(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function h0(t){return t.requestStatus===1&&t.requestTime+Ff<Date.now()}/**
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
 */async function f0(t){const e=t,{installationEntry:n,registrationPromise:s}=await ja(e);return s?s.catch(console.error):Va(e).catch(console.error),n.fid}/**
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
 */async function d0(t,e=!1){const n=t;return await p0(n),(await Va(n,e)).token}async function p0(t){const{registrationPromise:e}=await ja(t);e&&await e}/**
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
 */function g0(t){if(!t||!t.options)throw Mo("App Configuration");if(!t.name)throw Mo("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Mo(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Mo(t){return Zn.create("missing-app-config-values",{valueName:t})}/**
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
 */const ed="installations",m0="installations-internal",v0=t=>{const e=t.getProvider("app").getImmediate(),n=g0(e),s=is(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},_0=t=>{const e=t.getProvider("app").getImmediate(),n=is(e,ed).getImmediate();return{getId:()=>f0(n),getToken:i=>d0(n,i)}};function y0(){Ht(new Ot(ed,v0,"PUBLIC")),Ht(new Ot(m0,_0,"PRIVATE"))}y0();_t(Uf,Ua);_t(Uf,Ua,"esm2017");/**
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
 */const wr="analytics",w0="firebase_id",b0="origin",I0=60*1e3,E0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$a="https://www.googletagmanager.com/gtag/js";/**
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
 */const it=new Gr("@firebase/analytics");/**
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
 */const T0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ut=new ss("analytics","Analytics",T0);/**
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
 */function S0(t){if(!t.startsWith($a)){const e=ut.create("invalid-gtag-resource",{gtagURL:t});return it.warn(e.message),""}return t}function td(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function A0(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function C0(t,e){const n=A0("firebase-js-sdk-policy",{createScriptURL:S0}),s=document.createElement("script"),i=`${$a}?l=${t}&id=${e}`;s.src=n?n?.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function R0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function P0(t,e,n,s,i,o){const a=s[i];try{if(a)await e[a];else{const u=(await td(n)).find(f=>f.measurementId===i);u&&await e[u.appId]}}catch(c){it.error(c)}t("config",i,o)}async function k0(t,e,n,s,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const c=await td(n);for(const u of a){const f=c.find(g=>g.measurementId===u),d=f&&e[f.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",s,i||{})}catch(o){it.error(o)}}function O0(t,e,n,s){async function i(o,...a){try{if(o==="event"){const[c,u]=a;await k0(t,e,n,c,u)}else if(o==="config"){const[c,u]=a;await P0(t,e,n,s,c,u)}else if(o==="consent"){const[c,u]=a;t("consent",c,u)}else if(o==="get"){const[c,u,f]=a;t("get",c,u,f)}else if(o==="set"){const[c]=a;t("set",c)}else t(o,...a)}catch(c){it.error(c)}}return i}function N0(t,e,n,s,i){let o=function(...a){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=O0(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function D0(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes($a)&&n.src.includes(t))return n;return null}/**
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
 */const x0=30,L0=1e3;class M0{constructor(e={},n=L0){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const nd=new M0;function U0(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function F0(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:U0(s)},o=E0.replace("{app-id}",n),a=await fetch(o,i);if(a.status!==200&&a.status!==304){let c="";try{const u=await a.json();!((e=u.error)===null||e===void 0)&&e.message&&(c=u.error.message)}catch{}throw ut.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function j0(t,e=nd,n){const{appId:s,apiKey:i,measurementId:o}=t.options;if(!s)throw ut.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:s};throw ut.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new B0;return setTimeout(async()=>{c.abort()},I0),sd({appId:s,apiKey:i,measurementId:o},a,c,e)}async function sd(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=nd){var o;const{appId:a,measurementId:c}=t;try{await V0(s,e)}catch(u){if(c)return it.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u?.message}]`),{appId:a,measurementId:c};throw u}try{const u=await F0(t);return i.deleteThrottleMetadata(a),u}catch(u){const f=u;if(!$0(f)){if(i.deleteThrottleMetadata(a),c)return it.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f?.message}]`),{appId:a,measurementId:c};throw u}const d=Number((o=f?.customData)===null||o===void 0?void 0:o.httpStatus)===503?Qc(n,i.intervalMillis,x0):Qc(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(a,g),it.debug(`Calling attemptFetch again in ${d} millis`),sd(t,g,s,i)}}function V0(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),s(ut.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function $0(t){if(!(t instanceof Nt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class B0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function H0(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const o=await e,a=Object.assign(Object.assign({},s),{send_to:o});t("event",n,a)}}/**
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
 */async function W0(){if(Pf())try{await kf()}catch(t){return it.warn(ut.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return it.warn(ut.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function G0(t,e,n,s,i,o,a){var c;const u=j0(t);u.then(A=>{n[A.measurementId]=A.appId,t.options.measurementId&&A.measurementId!==t.options.measurementId&&it.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>it.error(A)),e.push(u);const f=W0().then(A=>{if(A)return s.getId()}),[d,g]=await Promise.all([u,f]);D0(o)||C0(o,d.measurementId),i("js",new Date);const v=(c=a?.config)!==null&&c!==void 0?c:{};return v[b0]="firebase",v.update=!0,g!=null&&(v[w0]=g),i("config",d.measurementId,v),d.measurementId}/**
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
 */class z0{constructor(e){this.app=e}_delete(){return delete ii[this.app.options.appId],Promise.resolve()}}let ii={},cu=[];const uu={};let Uo="dataLayer",q0="gtag",hu,id,fu=!1;function K0(){const t=[];if(Rf()&&t.push("This is a browser extension environment."),p_()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=ut.create("invalid-analytics-context",{errorInfo:e});it.warn(n.message)}}function J0(t,e,n){K0();const s=t.options.appId;if(!s)throw ut.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)it.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ut.create("no-api-key");if(ii[s]!=null)throw ut.create("already-exists",{id:s});if(!fu){R0(Uo);const{wrappedGtag:o,gtagCore:a}=N0(ii,cu,uu,Uo,q0);id=o,hu=a,fu=!0}return ii[s]=G0(t,cu,uu,e,hu,Uo,n),new z0(t)}function X0(t=Ma()){t=cn(t);const e=is(t,wr);return e.isInitialized()?e.getImmediate():Y0(t)}function Y0(t,e={}){const n=is(t,wr);if(n.isInitialized()){const i=n.getImmediate();if(kn(e,n.getOptions()))return i;throw ut.create("already-initialized")}return n.initialize({options:e})}function Q0(t,e,n,s){t=cn(t),H0(id,ii[t.app.options.appId],e,n,s).catch(i=>it.error(i))}const du="@firebase/analytics",pu="0.10.17";function Z0(){Ht(new Ot(wr,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return J0(s,i,n)},"PUBLIC")),Ht(new Ot("analytics-internal",t,"PRIVATE")),_t(du,pu),_t(du,pu,"esm2017");function t(e){try{const n=e.getProvider(wr).getImmediate();return{logEvent:(s,i,o)=>Q0(n,s,i,o)}}catch(n){throw ut.create("interop-component-reg-failed",{reason:n})}}}Z0();function Ba(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function rd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ew=rd,od=new ss("auth","Firebase",rd());/**
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
 */const br=new Gr("@firebase/auth");function tw(t,...e){br.logLevel<=_e.WARN&&br.warn(`Auth (${Cs}): ${t}`,...e)}function ir(t,...e){br.logLevel<=_e.ERROR&&br.error(`Auth (${Cs}): ${t}`,...e)}/**
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
 */function Wt(t,...e){throw Wa(t,...e)}function Ct(t,...e){return Wa(t,...e)}function Ha(t,e,n){const s=Object.assign(Object.assign({},ew()),{[e]:n});return new ss("auth","Firebase",s).create(e,{appName:t.name})}function Jn(t){return Ha(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nw(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Wt(t,"argument-error"),Ha(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wa(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return od.create(t,...e)}function ne(t,e,...n){if(!t)throw Wa(e,...n)}function tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ir(e),new Error(e)}function an(t,e){t||tn(e)}/**
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
 */function ca(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sw(){return gu()==="http:"||gu()==="https:"}function gu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function iw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sw()||Rf()||"connection"in navigator)?navigator.onLine:!0}function rw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ri{constructor(e,n){this.shortDelay=e,this.longDelay=n,an(n>e,"Short delay should be less than long delay!"),this.isMobile=u_()||f_()}get(){return iw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ga(t,e){an(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ad{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ow={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const aw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lw=new Ri(3e4,6e4);function za(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rs(t,e,n,s,i={}){return ld(t,i,async()=>{let o={},a={};s&&(e==="GET"?a=s:o={body:JSON.stringify(s)});const c=Ci(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const f=Object.assign({method:e,headers:u},o);return h_()||(f.referrerPolicy="no-referrer"),t.emulatorConfig&&Ai(t.emulatorConfig.host)&&(f.credentials="include"),ad.fetch()(await cd(t,t.config.apiHost,n,c),f)})}async function ld(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},ow),e);try{const i=new uw(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Xi(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[u,f]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xi(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Xi(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Xi(t,"user-disabled",a);const d=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Ha(t,d,f);Wt(t,d)}}catch(i){if(i instanceof Nt)throw i;Wt(t,"network-request-failed",{message:String(i)})}}async function cw(t,e,n,s,i={}){const o=await Rs(t,e,n,s,i);return"mfaPendingCredential"in o&&Wt(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function cd(t,e,n,s){const i=`${e}${n}?${s}`,o=t,a=o.config.emulator?Ga(t.config,i):`${t.config.apiScheme}://${i}`;return aw.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class uw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ct(this.auth,"network-request-failed")),lw.get())})}}function Xi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ct(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function hw(t,e){return Rs(t,"POST","/v1/accounts:delete",e)}async function Ir(t,e){return Rs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fw(t,e=!1){const n=cn(t),s=await n.getIdToken(e),i=qa(s);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o?.sign_in_provider;return{claims:i,token:s,authTime:ri(Fo(i.auth_time)),issuedAtTime:ri(Fo(i.iat)),expirationTime:ri(Fo(i.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Fo(t){return Number(t)*1e3}function qa(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ir("JWT malformed, contained fewer than 3 sections"),null;try{const i=If(n);return i?JSON.parse(i):(ir("Failed to decode base64 JWT payload"),null)}catch(i){return ir("Caught error parsing JWT payload as JSON",i?.toString()),null}}function mu(t){const e=qa(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Nt&&dw(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function dw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class pw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ua{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ri(this.lastLoginAt),this.creationTime=ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Er(t){var e;const n=t.auth,s=await t.getIdToken(),i=await wi(t,Ir(n,{idToken:s}));ne(i?.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?ud(o.providerUserInfo):[],c=mw(t.providerData,a),u=t.isAnonymous,f=!(t.email&&o.passwordHash)&&!c?.length,d=u?f:!1,g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new ua(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,g)}async function gw(t){const e=cn(t);await Er(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mw(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function ud(t){return t.map(e=>{var{providerId:n}=e,s=Ba(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function vw(t,e){const n=await ld(t,{},async()=>{const s=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,a=await cd(t,i,"/v1/token",`key=${o}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:s};return t.emulatorConfig&&Ai(t.emulatorConfig.host)&&(u.credentials="include"),ad.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _w(t,e){return Rs(t,"POST","/v2/accounts:revokeToken",za(t,e))}/**
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
 */class ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=mu(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:o}=await vw(e,n);this.updateTokensAndExpiration(s,i,Number(o))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:o}=n,a=new ys;return s&&(ne(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),i&&(ne(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(ne(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ys,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
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
 */function vn(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,o=Ba(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ua(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await wi(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fw(this,e)}reload(){return gw(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Er(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Et(this.auth.app))return Promise.reject(Jn(this.auth));const e=await this.getIdToken();return await wi(this,hw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,o,a,c,u,f,d;const g=(s=n.displayName)!==null&&s!==void 0?s:void 0,v=(i=n.email)!==null&&i!==void 0?i:void 0,A=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,k=(a=n.photoURL)!==null&&a!==void 0?a:void 0,L=(c=n.tenantId)!==null&&c!==void 0?c:void 0,B=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,K=(f=n.createdAt)!==null&&f!==void 0?f:void 0,$=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:H,emailVerified:W,isAnonymous:ie,providerData:re,stsTokenManager:S}=n;ne(H&&S,e,"internal-error");const _=ys.fromJSON(this.name,S);ne(typeof H=="string",e,"internal-error"),vn(g,e.name),vn(v,e.name),ne(typeof W=="boolean",e,"internal-error"),ne(typeof ie=="boolean",e,"internal-error"),vn(A,e.name),vn(k,e.name),vn(L,e.name),vn(B,e.name),vn(K,e.name),vn($,e.name);const m=new Tt({uid:H,auth:e,email:v,emailVerified:W,displayName:g,isAnonymous:ie,photoURL:k,phoneNumber:A,tenantId:L,stsTokenManager:_,createdAt:K,lastLoginAt:$});return re&&Array.isArray(re)&&(m.providerData=re.map(E=>Object.assign({},E))),B&&(m._redirectEventId=B),m}static async _fromIdTokenResponse(e,n,s=!1){const i=new ys;i.updateFromServerResponse(n);const o=new Tt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Er(o),o}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];ne(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?ud(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!o?.length,c=new ys;c.updateFromIdToken(s);const u=new Tt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ua(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!o?.length};return Object.assign(u,f),u}}/**
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
 */const vu=new Map;function nn(t){an(t instanceof Function,"Expected a class definition");let e=vu.get(t);return e?(an(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vu.set(t,e),e)}/**
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
 */class hd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hd.type="NONE";const _u=hd;/**
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
 */function rr(t,e,n){return`firebase:${t}:${e}:${n}`}class ws{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:o}=this.auth;this.fullUserKey=rr(this.userKey,i.apiKey,o),this.fullPersistenceKey=rr("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ir(this.auth,{idToken:e}).catch(()=>{});return n?Tt._fromGetAccountInfoResponse(this.auth,n,e):null}return Tt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ws(nn(_u),e,s);const i=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||nn(_u);const a=rr(s,e.config.apiKey,e.name);let c=null;for(const f of n)try{const d=await f._get(a);if(d){let g;if(typeof d=="string"){const v=await Ir(e,{idToken:d}).catch(()=>{});if(!v)break;g=await Tt._fromGetAccountInfoResponse(e,v,d)}else g=Tt._fromJSON(e,d);f!==o&&(c=g),o=f;break}}catch{}const u=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new ws(o,e,s):(o=u[0],c&&await o._set(a,c.toJSON()),await Promise.all(n.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new ws(o,e,s))}}/**
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
 */function yu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vd(e))return"Blackberry";if(_d(e))return"Webos";if(dd(e))return"Safari";if((e.includes("chrome/")||pd(e))&&!e.includes("edge/"))return"Chrome";if(md(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function fd(t=et()){return/firefox\//i.test(t)}function dd(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pd(t=et()){return/crios\//i.test(t)}function gd(t=et()){return/iemobile/i.test(t)}function md(t=et()){return/android/i.test(t)}function vd(t=et()){return/blackberry/i.test(t)}function _d(t=et()){return/webos/i.test(t)}function Ka(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yw(t=et()){var e;return Ka(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ww(){return d_()&&document.documentMode===10}function yd(t=et()){return Ka(t)||md(t)||_d(t)||vd(t)||/windows phone/i.test(t)||gd(t)}/**
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
 */function wd(t,e=[]){let n;switch(t){case"Browser":n=yu(et());break;case"Worker":n=`${yu(et())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cs}/${s}`}/**
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
 */class bw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=o=>new Promise((a,c)=>{try{const u=e(o);a(u)}catch(u){c(u)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function Iw(t,e={}){return Rs(t,"GET","/v2/passwordPolicy",za(t,e))}/**
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
 */const Ew=6;class Tw{constructor(e){var n,s,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Ew,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,o,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(s=u.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class Sw{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wu(this),this.idTokenSubscription=new wu(this),this.beforeStateQueue=new bw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=od,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nn(n)),this._initializationPromise=this.queue(async()=>{var s,i,o;if(!this._deleted&&(this.persistenceManager=await ws.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ir(this,{idToken:e}),s=await Tt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Et(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&u?.user&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Er(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Et(this.app))return Promise.reject(Jn(this));const n=e?cn(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Et(this.app)?Promise.reject(Jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Et(this.app)?Promise.reject(Jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Iw(this),n=new Tw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ss("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await _w(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await ws.create(this,[nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,s,i);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&tw(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Kr(t){return cn(t)}class wu{constructor(e){this.auth=e,this.observer=null,this.addObserver=y_(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ja={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Aw(t){Ja=t}function Cw(t){return Ja.loadJS(t)}function Rw(){return Ja.gapiScript}function Pw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function kw(t,e){const n=is(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(kn(o,e??{}))return i;Wt(i,"already-initialized")}return n.initialize({options:e})}function Ow(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(nn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function Nw(t,e,n){const s=Kr(t);ne(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,o=bd(e),{host:a,port:c}=Dw(e),u=c===null?"":`:${c}`,f={url:`${o}//${a}${u}/`},d=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){ne(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ne(kn(f,s.config.emulator)&&kn(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=f,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,Ai(a)?(Af(`${o}//${a}${u}`),Cf("Auth",!0)):xw()}function bd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Dw(t){const e=bd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const o=i[1];return{host:o,port:bu(s.substr(o.length+1))}}else{const[o,a]=s.split(":");return{host:o,port:bu(a)}}}function bu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Id{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tn("not implemented")}_getIdTokenResponse(e){return tn("not implemented")}_linkToIdToken(e,n){return tn("not implemented")}_getReauthenticationResolver(e){return tn("not implemented")}}/**
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
 */async function bs(t,e){return cw(t,"POST","/v1/accounts:signInWithIdp",za(t,e))}/**
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
 */const Lw="http://localhost";class ts extends Id{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,o=Ba(n,["providerId","signInMethod"]);if(!s||!i)return null;const a=new ts(s,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return bs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,bs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bs(e,n)}buildRequest(){const e={requestUri:Lw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ci(n)}return e}}/**
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
 */class Xa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pi extends Xa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class In extends Pi{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.FACEBOOK_SIGN_IN_METHOD="facebook.com";In.PROVIDER_ID="facebook.com";/**
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
 */class Zt extends Pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Zt.credential(n,s)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
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
 */class En extends Pi{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
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
 */class Tn extends Pi{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Tn.credential(n,s)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
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
 */class Ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const o=await Tt._fromIdTokenResponse(e,s,i),a=Iu(s);return new Ss({user:o,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Iu(s);return new Ss({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Iu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Tr extends Nt{constructor(e,n,s,i){var o;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Tr.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Tr(e,n,s,i)}}function Ed(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Tr._fromErrorAndOperation(t,o,e,s):o})}async function Mw(t,e,n=!1){const s=await wi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ss._forOperation(t,"link",s)}/**
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
 */async function Uw(t,e,n=!1){const{auth:s}=t;if(Et(s.app))return Promise.reject(Jn(s));const i="reauthenticate";try{const o=await wi(t,Ed(s,i,e,t),n);ne(o.idToken,s,"internal-error");const a=qa(o.idToken);ne(a,s,"internal-error");const{sub:c}=a;return ne(t.uid===c,s,"user-mismatch"),Ss._forOperation(t,i,o)}catch(o){throw o?.code==="auth/user-not-found"&&Wt(s,"user-mismatch"),o}}/**
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
 */async function Fw(t,e,n=!1){if(Et(t.app))return Promise.reject(Jn(t));const s="signIn",i=await Ed(t,s,e),o=await Ss._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(o.user),o}function jw(t,e,n,s){return cn(t).onIdTokenChanged(e,n,s)}function Vw(t,e,n){return cn(t).beforeAuthStateChanged(e,n)}function $w(t,e,n,s){return cn(t).onAuthStateChanged(e,n,s)}const Sr="__sak";/**
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
 */class Td{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sr,"1"),this.storage.removeItem(Sr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Bw=1e3,Hw=10;class Sd extends Td{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},o=this.storage.getItem(s);ww()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Hw):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Bw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sd.type="LOCAL";const Ww=Sd;/**
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
 */class Ad extends Td{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ad.type="SESSION";const Cd=Ad;/**
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
 */function Gw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Jr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const c=Array.from(a).map(async f=>f(n.origin,o)),u=await Gw(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jr.receivers=[];/**
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
 */function Ya(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((c,u)=>{const f=Ya("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:i,onMessage(g){const v=g;if(v.data.eventId===f)switch(v.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(v.data.response);break;default:clearTimeout(d),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Bt(){return window}function qw(t){Bt().location.href=t}/**
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
 */function Rd(){return typeof Bt().WorkerGlobalScope<"u"&&typeof Bt().importScripts=="function"}async function Kw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jw(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Xw(){return Rd()?self:null}/**
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
 */const Pd="firebaseLocalStorageDb",Yw=1,Ar="firebaseLocalStorage",kd="fbase_key";class ki{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xr(t,e){return t.transaction([Ar],e?"readwrite":"readonly").objectStore(Ar)}function Qw(){const t=indexedDB.deleteDatabase(Pd);return new ki(t).toPromise()}function ha(){const t=indexedDB.open(Pd,Yw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ar,{keyPath:kd})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ar)?e(s):(s.close(),await Qw(),e(await ha()))})})}async function Eu(t,e,n){const s=Xr(t,!0).put({[kd]:e,value:n});return new ki(s).toPromise()}async function Zw(t,e){const n=Xr(t,!1).get(e),s=await new ki(n).toPromise();return s===void 0?null:s.value}function Tu(t,e){const n=Xr(t,!0).delete(e);return new ki(n).toPromise()}const eb=800,tb=3;class Od{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ha(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>tb)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jr._getInstance(Xw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Kw(),!this.activeServiceWorker)return;this.sender=new zw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ha();return await Eu(e,Sr,"1"),await Tu(e,Sr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Eu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Zw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Xr(i,!1).getAll();return new ki(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Od.type="LOCAL";const nb=Od;new Ri(3e4,6e4);/**
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
 */function Nd(t,e){return e?nn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Qa extends Id{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sb(t){return Fw(t.auth,new Qa(t),t.bypassAuthState)}function ib(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),Uw(n,new Qa(t),t.bypassAuthState)}async function rb(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),Mw(n,new Qa(t),t.bypassAuthState)}/**
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
 */class Dd{constructor(e,n,s,i,o=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:s,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sb;case"linkViaPopup":case"linkViaRedirect":return rb;case"reauthViaPopup":case"reauthViaRedirect":return ib;default:Wt(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ob=new Ri(2e3,1e4);async function ab(t,e,n){if(Et(t.app))return Promise.reject(Ct(t,"operation-not-supported-in-this-environment"));const s=Kr(t);nw(t,e,Xa);const i=Nd(s,n);return new zn(s,"signInViaPopup",e,i).executeNotNull()}class zn extends Dd{constructor(e,n,s,i,o){super(e,n,i,o),this.provider=s,this.authWindow=null,this.pollId=null,zn.currentPopupAction&&zn.currentPopupAction.cancel(),zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=Ya();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ob.get())};e()}}zn.currentPopupAction=null;/**
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
 */const lb="pendingRedirect",or=new Map;class cb extends Dd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=or.get(this.auth._key());if(!e){try{const s=await ub(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}or.set(this.auth._key(),e)}return this.bypassAuthState||or.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ub(t,e){const n=db(e),s=fb(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function hb(t,e){or.set(t._key(),e)}function fb(t){return nn(t._redirectPersistence)}function db(t){return rr(lb,t.config.apiKey,t.name)}async function pb(t,e,n=!1){if(Et(t.app))return Promise.reject(Jn(t));const s=Kr(t),i=Nd(s,e),a=await new cb(s,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const gb=10*60*1e3;class mb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!xd(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ct(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Su(e))}saveEventToCache(e){this.cachedEventUids.add(Su(e)),this.lastProcessedEventTime=Date.now()}}function Su(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xd({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function vb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xd(t);default:return!1}}/**
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
 */async function _b(t,e={}){return Rs(t,"GET","/v1/projects",e)}/**
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
 */const yb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wb=/^https?/;async function bb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _b(t);for(const n of e)try{if(Ib(n))return}catch{}Wt(t,"unauthorized-domain")}function Ib(t){const e=ca(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!wb.test(n))return!1;if(yb.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Eb=new Ri(3e4,6e4);function Au(){const t=Bt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Tb(t){return new Promise((e,n)=>{var s,i,o;function a(){Au(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Au(),n(Ct(t,"network-request-failed"))},timeout:Eb.get()})}if(!((i=(s=Bt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Bt().gapi)===null||o===void 0)&&o.load)a();else{const c=Pw("iframefcb");return Bt()[c]=()=>{gapi.load?a():n(Ct(t,"network-request-failed"))},Cw(`${Rw()}?onload=${c}`).catch(u=>n(u))}}).catch(e=>{throw ar=null,e})}let ar=null;function Sb(t){return ar=ar||Tb(t),ar}/**
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
 */const Ab=new Ri(5e3,15e3),Cb="__/auth/iframe",Rb="emulator/auth/iframe",Pb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ob(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ga(e,Rb):`https://${t.config.authDomain}/${Cb}`,s={apiKey:e.apiKey,appName:t.name,v:Cs},i=kb.get(t.config.apiHost);i&&(s.eid=i);const o=t._getFrameworks();return o.length&&(s.fw=o.join(",")),`${n}?${Ci(s).slice(1)}`}async function Nb(t){const e=await Sb(t),n=Bt().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:Ob(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pb,dontclear:!0},s=>new Promise(async(i,o)=>{await s.restyle({setHideOnLeave:!1});const a=Ct(t,"network-request-failed"),c=Bt().setTimeout(()=>{o(a)},Ab.get());function u(){Bt().clearTimeout(c),i(s)}s.ping(u).then(u,()=>{o(a)})}))}/**
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
 */const Db={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xb=500,Lb=600,Mb="_blank",Ub="http://localhost";class Cu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fb(t,e,n,s=xb,i=Lb){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Db),{width:s.toString(),height:i.toString(),top:o,left:a}),f=et().toLowerCase();n&&(c=pd(f)?Mb:n),fd(f)&&(e=e||Ub,u.scrollbars="yes");const d=Object.entries(u).reduce((v,[A,k])=>`${v}${A}=${k},`,"");if(yw(f)&&c!=="_self")return jb(e||"",c),new Cu(null);const g=window.open(e||"",c,d);ne(g,t,"popup-blocked");try{g.focus()}catch{}return new Cu(g)}function jb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Vb="__/auth/handler",$b="emulator/auth/handler",Bb=encodeURIComponent("fac");async function Ru(t,e,n,s,i,o){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Cs,eventId:i};if(e instanceof Xa){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",__(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof Pi){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const u=await t._getAppCheckToken(),f=u?`#${Bb}=${encodeURIComponent(u)}`:"";return`${Hb(t)}?${Ci(c).slice(1)}${f}`}function Hb({config:t}){return t.emulator?Ga(t,$b):`https://${t.authDomain}/${Vb}`}/**
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
 */const jo="webStorageSupport";class Wb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cd,this._completeRedirectFn=pb,this._overrideRedirectResult=hb}async _openPopup(e,n,s,i){var o;an((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Ru(e,n,s,ca(),i);return Fb(e,a,Ya())}async _openRedirect(e,n,s,i){await this._originValidation(e);const o=await Ru(e,n,s,ca(),i);return qw(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(an(o,"If manager is not set, promise should be"),o)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Nb(e),s=new mb(e);return n.register("authEvent",i=>(ne(i?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jo,{type:jo},i=>{var o;const a=(o=i?.[0])===null||o===void 0?void 0:o[jo];a!==void 0&&n(!!a),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yd()||dd()||Ka()}}const Gb=Wb;var Pu="@firebase/auth",ku="1.10.8";/**
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
 */class zb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Kb(t){Ht(new Ot("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wd(t)},f=new Sw(s,i,o,u);return Ow(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ht(new Ot("auth-internal",e=>{const n=Kr(e.getProvider("auth").getImmediate());return(s=>new zb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_t(Pu,ku,qb(t)),_t(Pu,ku,"esm2017")}/**
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
 */const Jb=5*60,Xb=Sf("authIdTokenMaxAge")||Jb;let Ou=null;const Yb=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Xb)return;const i=n?.token;Ou!==i&&(Ou=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Qb(t=Ma()){const e=is(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kw(t,{popupRedirectResolver:Gb,persistence:[nb,Ww,Cd]}),s=Sf("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(s,location.origin);if(location.origin===o.origin){const a=Yb(o.toString());Vw(n,a,()=>a(n.currentUser)),jw(n,c=>a(c))}}const i=Ef("auth");return i&&Nw(n,`http://${i}`),n}function Zb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Aw({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const o=Ct("internal-error");o.customData=i,n(o)},s.type="text/javascript",s.charset="UTF-8",Zb().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Kb("Browser");var Nu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Za;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,_){function m(){}m.prototype=_.prototype,S.D=_.prototype,S.prototype=new m,S.prototype.constructor=S,S.C=function(E,T,I){for(var w=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)w[ye-2]=arguments[ye];return _.prototype[T].apply(E,w)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,_,m){m||(m=0);var E=Array(16);if(typeof _=="string")for(var T=0;16>T;++T)E[T]=_.charCodeAt(m++)|_.charCodeAt(m++)<<8|_.charCodeAt(m++)<<16|_.charCodeAt(m++)<<24;else for(T=0;16>T;++T)E[T]=_[m++]|_[m++]<<8|_[m++]<<16|_[m++]<<24;_=S.g[0],m=S.g[1],T=S.g[2];var I=S.g[3],w=_+(I^m&(T^I))+E[0]+3614090360&4294967295;_=m+(w<<7&4294967295|w>>>25),w=I+(T^_&(m^T))+E[1]+3905402710&4294967295,I=_+(w<<12&4294967295|w>>>20),w=T+(m^I&(_^m))+E[2]+606105819&4294967295,T=I+(w<<17&4294967295|w>>>15),w=m+(_^T&(I^_))+E[3]+3250441966&4294967295,m=T+(w<<22&4294967295|w>>>10),w=_+(I^m&(T^I))+E[4]+4118548399&4294967295,_=m+(w<<7&4294967295|w>>>25),w=I+(T^_&(m^T))+E[5]+1200080426&4294967295,I=_+(w<<12&4294967295|w>>>20),w=T+(m^I&(_^m))+E[6]+2821735955&4294967295,T=I+(w<<17&4294967295|w>>>15),w=m+(_^T&(I^_))+E[7]+4249261313&4294967295,m=T+(w<<22&4294967295|w>>>10),w=_+(I^m&(T^I))+E[8]+1770035416&4294967295,_=m+(w<<7&4294967295|w>>>25),w=I+(T^_&(m^T))+E[9]+2336552879&4294967295,I=_+(w<<12&4294967295|w>>>20),w=T+(m^I&(_^m))+E[10]+4294925233&4294967295,T=I+(w<<17&4294967295|w>>>15),w=m+(_^T&(I^_))+E[11]+2304563134&4294967295,m=T+(w<<22&4294967295|w>>>10),w=_+(I^m&(T^I))+E[12]+1804603682&4294967295,_=m+(w<<7&4294967295|w>>>25),w=I+(T^_&(m^T))+E[13]+4254626195&4294967295,I=_+(w<<12&4294967295|w>>>20),w=T+(m^I&(_^m))+E[14]+2792965006&4294967295,T=I+(w<<17&4294967295|w>>>15),w=m+(_^T&(I^_))+E[15]+1236535329&4294967295,m=T+(w<<22&4294967295|w>>>10),w=_+(T^I&(m^T))+E[1]+4129170786&4294967295,_=m+(w<<5&4294967295|w>>>27),w=I+(m^T&(_^m))+E[6]+3225465664&4294967295,I=_+(w<<9&4294967295|w>>>23),w=T+(_^m&(I^_))+E[11]+643717713&4294967295,T=I+(w<<14&4294967295|w>>>18),w=m+(I^_&(T^I))+E[0]+3921069994&4294967295,m=T+(w<<20&4294967295|w>>>12),w=_+(T^I&(m^T))+E[5]+3593408605&4294967295,_=m+(w<<5&4294967295|w>>>27),w=I+(m^T&(_^m))+E[10]+38016083&4294967295,I=_+(w<<9&4294967295|w>>>23),w=T+(_^m&(I^_))+E[15]+3634488961&4294967295,T=I+(w<<14&4294967295|w>>>18),w=m+(I^_&(T^I))+E[4]+3889429448&4294967295,m=T+(w<<20&4294967295|w>>>12),w=_+(T^I&(m^T))+E[9]+568446438&4294967295,_=m+(w<<5&4294967295|w>>>27),w=I+(m^T&(_^m))+E[14]+3275163606&4294967295,I=_+(w<<9&4294967295|w>>>23),w=T+(_^m&(I^_))+E[3]+4107603335&4294967295,T=I+(w<<14&4294967295|w>>>18),w=m+(I^_&(T^I))+E[8]+1163531501&4294967295,m=T+(w<<20&4294967295|w>>>12),w=_+(T^I&(m^T))+E[13]+2850285829&4294967295,_=m+(w<<5&4294967295|w>>>27),w=I+(m^T&(_^m))+E[2]+4243563512&4294967295,I=_+(w<<9&4294967295|w>>>23),w=T+(_^m&(I^_))+E[7]+1735328473&4294967295,T=I+(w<<14&4294967295|w>>>18),w=m+(I^_&(T^I))+E[12]+2368359562&4294967295,m=T+(w<<20&4294967295|w>>>12),w=_+(m^T^I)+E[5]+4294588738&4294967295,_=m+(w<<4&4294967295|w>>>28),w=I+(_^m^T)+E[8]+2272392833&4294967295,I=_+(w<<11&4294967295|w>>>21),w=T+(I^_^m)+E[11]+1839030562&4294967295,T=I+(w<<16&4294967295|w>>>16),w=m+(T^I^_)+E[14]+4259657740&4294967295,m=T+(w<<23&4294967295|w>>>9),w=_+(m^T^I)+E[1]+2763975236&4294967295,_=m+(w<<4&4294967295|w>>>28),w=I+(_^m^T)+E[4]+1272893353&4294967295,I=_+(w<<11&4294967295|w>>>21),w=T+(I^_^m)+E[7]+4139469664&4294967295,T=I+(w<<16&4294967295|w>>>16),w=m+(T^I^_)+E[10]+3200236656&4294967295,m=T+(w<<23&4294967295|w>>>9),w=_+(m^T^I)+E[13]+681279174&4294967295,_=m+(w<<4&4294967295|w>>>28),w=I+(_^m^T)+E[0]+3936430074&4294967295,I=_+(w<<11&4294967295|w>>>21),w=T+(I^_^m)+E[3]+3572445317&4294967295,T=I+(w<<16&4294967295|w>>>16),w=m+(T^I^_)+E[6]+76029189&4294967295,m=T+(w<<23&4294967295|w>>>9),w=_+(m^T^I)+E[9]+3654602809&4294967295,_=m+(w<<4&4294967295|w>>>28),w=I+(_^m^T)+E[12]+3873151461&4294967295,I=_+(w<<11&4294967295|w>>>21),w=T+(I^_^m)+E[15]+530742520&4294967295,T=I+(w<<16&4294967295|w>>>16),w=m+(T^I^_)+E[2]+3299628645&4294967295,m=T+(w<<23&4294967295|w>>>9),w=_+(T^(m|~I))+E[0]+4096336452&4294967295,_=m+(w<<6&4294967295|w>>>26),w=I+(m^(_|~T))+E[7]+1126891415&4294967295,I=_+(w<<10&4294967295|w>>>22),w=T+(_^(I|~m))+E[14]+2878612391&4294967295,T=I+(w<<15&4294967295|w>>>17),w=m+(I^(T|~_))+E[5]+4237533241&4294967295,m=T+(w<<21&4294967295|w>>>11),w=_+(T^(m|~I))+E[12]+1700485571&4294967295,_=m+(w<<6&4294967295|w>>>26),w=I+(m^(_|~T))+E[3]+2399980690&4294967295,I=_+(w<<10&4294967295|w>>>22),w=T+(_^(I|~m))+E[10]+4293915773&4294967295,T=I+(w<<15&4294967295|w>>>17),w=m+(I^(T|~_))+E[1]+2240044497&4294967295,m=T+(w<<21&4294967295|w>>>11),w=_+(T^(m|~I))+E[8]+1873313359&4294967295,_=m+(w<<6&4294967295|w>>>26),w=I+(m^(_|~T))+E[15]+4264355552&4294967295,I=_+(w<<10&4294967295|w>>>22),w=T+(_^(I|~m))+E[6]+2734768916&4294967295,T=I+(w<<15&4294967295|w>>>17),w=m+(I^(T|~_))+E[13]+1309151649&4294967295,m=T+(w<<21&4294967295|w>>>11),w=_+(T^(m|~I))+E[4]+4149444226&4294967295,_=m+(w<<6&4294967295|w>>>26),w=I+(m^(_|~T))+E[11]+3174756917&4294967295,I=_+(w<<10&4294967295|w>>>22),w=T+(_^(I|~m))+E[2]+718787259&4294967295,T=I+(w<<15&4294967295|w>>>17),w=m+(I^(T|~_))+E[9]+3951481745&4294967295,S.g[0]=S.g[0]+_&4294967295,S.g[1]=S.g[1]+(T+(w<<21&4294967295|w>>>11))&4294967295,S.g[2]=S.g[2]+T&4294967295,S.g[3]=S.g[3]+I&4294967295}s.prototype.u=function(S,_){_===void 0&&(_=S.length);for(var m=_-this.blockSize,E=this.B,T=this.h,I=0;I<_;){if(T==0)for(;I<=m;)i(this,S,I),I+=this.blockSize;if(typeof S=="string"){for(;I<_;)if(E[T++]=S.charCodeAt(I++),T==this.blockSize){i(this,E),T=0;break}}else for(;I<_;)if(E[T++]=S[I++],T==this.blockSize){i(this,E),T=0;break}}this.h=T,this.o+=_},s.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var _=1;_<S.length-8;++_)S[_]=0;var m=8*this.o;for(_=S.length-8;_<S.length;++_)S[_]=m&255,m/=256;for(this.u(S),S=Array(16),_=m=0;4>_;++_)for(var E=0;32>E;E+=8)S[m++]=this.g[_]>>>E&255;return S};function o(S,_){var m=c;return Object.prototype.hasOwnProperty.call(m,S)?m[S]:m[S]=_(S)}function a(S,_){this.h=_;for(var m=[],E=!0,T=S.length-1;0<=T;T--){var I=S[T]|0;E&&I==_||(m[T]=I,E=!1)}this.g=m}var c={};function u(S){return-128<=S&&128>S?o(S,function(_){return new a([_|0],0>_?-1:0)}):new a([S|0],0>S?-1:0)}function f(S){if(isNaN(S)||!isFinite(S))return g;if(0>S)return B(f(-S));for(var _=[],m=1,E=0;S>=m;E++)_[E]=S/m|0,m*=4294967296;return new a(_,0)}function d(S,_){if(S.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(S.charAt(0)=="-")return B(d(S.substring(1),_));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(_,8)),E=g,T=0;T<S.length;T+=8){var I=Math.min(8,S.length-T),w=parseInt(S.substring(T,T+I),_);8>I?(I=f(Math.pow(_,I)),E=E.j(I).add(f(w))):(E=E.j(m),E=E.add(f(w)))}return E}var g=u(0),v=u(1),A=u(16777216);t=a.prototype,t.m=function(){if(L(this))return-B(this).m();for(var S=0,_=1,m=0;m<this.g.length;m++){var E=this.i(m);S+=(0<=E?E:4294967296+E)*_,_*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(k(this))return"0";if(L(this))return"-"+B(this).toString(S);for(var _=f(Math.pow(S,6)),m=this,E="";;){var T=W(m,_).g;m=K(m,T.j(_));var I=((0<m.g.length?m.g[0]:m.h)>>>0).toString(S);if(m=T,k(m))return I+E;for(;6>I.length;)I="0"+I;E=I+E}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function k(S){if(S.h!=0)return!1;for(var _=0;_<S.g.length;_++)if(S.g[_]!=0)return!1;return!0}function L(S){return S.h==-1}t.l=function(S){return S=K(this,S),L(S)?-1:k(S)?0:1};function B(S){for(var _=S.g.length,m=[],E=0;E<_;E++)m[E]=~S.g[E];return new a(m,~S.h).add(v)}t.abs=function(){return L(this)?B(this):this},t.add=function(S){for(var _=Math.max(this.g.length,S.g.length),m=[],E=0,T=0;T<=_;T++){var I=E+(this.i(T)&65535)+(S.i(T)&65535),w=(I>>>16)+(this.i(T)>>>16)+(S.i(T)>>>16);E=w>>>16,I&=65535,w&=65535,m[T]=w<<16|I}return new a(m,m[m.length-1]&-2147483648?-1:0)};function K(S,_){return S.add(B(_))}t.j=function(S){if(k(this)||k(S))return g;if(L(this))return L(S)?B(this).j(B(S)):B(B(this).j(S));if(L(S))return B(this.j(B(S)));if(0>this.l(A)&&0>S.l(A))return f(this.m()*S.m());for(var _=this.g.length+S.g.length,m=[],E=0;E<2*_;E++)m[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<S.g.length;T++){var I=this.i(E)>>>16,w=this.i(E)&65535,ye=S.i(T)>>>16,Le=S.i(T)&65535;m[2*E+2*T]+=w*Le,$(m,2*E+2*T),m[2*E+2*T+1]+=I*Le,$(m,2*E+2*T+1),m[2*E+2*T+1]+=w*ye,$(m,2*E+2*T+1),m[2*E+2*T+2]+=I*ye,$(m,2*E+2*T+2)}for(E=0;E<_;E++)m[E]=m[2*E+1]<<16|m[2*E];for(E=_;E<2*_;E++)m[E]=0;return new a(m,0)};function $(S,_){for(;(S[_]&65535)!=S[_];)S[_+1]+=S[_]>>>16,S[_]&=65535,_++}function H(S,_){this.g=S,this.h=_}function W(S,_){if(k(_))throw Error("division by zero");if(k(S))return new H(g,g);if(L(S))return _=W(B(S),_),new H(B(_.g),B(_.h));if(L(_))return _=W(S,B(_)),new H(B(_.g),_.h);if(30<S.g.length){if(L(S)||L(_))throw Error("slowDivide_ only works with positive integers.");for(var m=v,E=_;0>=E.l(S);)m=ie(m),E=ie(E);var T=re(m,1),I=re(E,1);for(E=re(E,2),m=re(m,2);!k(E);){var w=I.add(E);0>=w.l(S)&&(T=T.add(m),I=w),E=re(E,1),m=re(m,1)}return _=K(S,T.j(_)),new H(T,_)}for(T=g;0<=S.l(_);){for(m=Math.max(1,Math.floor(S.m()/_.m())),E=Math.ceil(Math.log(m)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),I=f(m),w=I.j(_);L(w)||0<w.l(S);)m-=E,I=f(m),w=I.j(_);k(I)&&(I=v),T=T.add(I),S=K(S,w)}return new H(T,S)}t.A=function(S){return W(this,S).h},t.and=function(S){for(var _=Math.max(this.g.length,S.g.length),m=[],E=0;E<_;E++)m[E]=this.i(E)&S.i(E);return new a(m,this.h&S.h)},t.or=function(S){for(var _=Math.max(this.g.length,S.g.length),m=[],E=0;E<_;E++)m[E]=this.i(E)|S.i(E);return new a(m,this.h|S.h)},t.xor=function(S){for(var _=Math.max(this.g.length,S.g.length),m=[],E=0;E<_;E++)m[E]=this.i(E)^S.i(E);return new a(m,this.h^S.h)};function ie(S){for(var _=S.g.length+1,m=[],E=0;E<_;E++)m[E]=S.i(E)<<1|S.i(E-1)>>>31;return new a(m,S.h)}function re(S,_){var m=_>>5;_%=32;for(var E=S.g.length-m,T=[],I=0;I<E;I++)T[I]=0<_?S.i(I+m)>>>_|S.i(I+m+1)<<32-_:S.i(I+m);return new a(T,S.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,Za=a}).apply(typeof Nu<"u"?Nu:typeof self<"u"?self:typeof window<"u"?window:{});var Yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,l,h){return r==Array.prototype||r==Object.prototype||(r[l]=h.value),r};function n(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yi=="object"&&Yi];for(var l=0;l<r.length;++l){var h=r[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=n(this);function i(r,l){if(l)e:{var h=s;r=r.split(".");for(var p=0;p<r.length-1;p++){var R=r[p];if(!(R in h))break e;h=h[R]}r=r[r.length-1],p=h[r],l=l(p),l!=p&&l!=null&&e(h,r,{configurable:!0,writable:!0,value:l})}}function o(r,l){r instanceof String&&(r+="");var h=0,p=!1,R={next:function(){if(!p&&h<r.length){var P=h++;return{value:l(P,r[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(r){return r||function(){return o(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(r){var l=typeof r;return l=l!="object"?l:r?Array.isArray(r)?"array":l:"null",l=="array"||l=="object"&&typeof r.length=="number"}function f(r){var l=typeof r;return l=="object"&&r!=null||l=="function"}function d(r,l,h){return r.call.apply(r.bind,arguments)}function g(r,l,h){if(!r)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),r.apply(l,R)}}return function(){return r.apply(l,arguments)}}function v(r,l,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,v.apply(null,arguments)}function A(r,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),r.apply(this,p)}}function k(r,l){function h(){}h.prototype=l.prototype,r.aa=l.prototype,r.prototype=new h,r.prototype.constructor=r,r.Qb=function(p,R,P){for(var V=Array(arguments.length-2),we=2;we<arguments.length;we++)V[we-2]=arguments[we];return l.prototype[R].apply(p,V)}}function L(r){const l=r.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=r[p];return h}return[]}function B(r,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const R=r.length||0,P=p.length||0;r.length=R+P;for(let V=0;V<P;V++)r[R+V]=p[V]}else r.push(p)}}class K{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function $(r){return/^[\s\xa0]*$/.test(r)}function H(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function W(r){return W[" "](r),r}W[" "]=function(){};var ie=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function re(r,l,h){for(const p in r)l.call(h,r[p],p,r)}function S(r,l){for(const h in r)l.call(void 0,r[h],h,r)}function _(r){const l={};for(const h in r)l[h]=r[h];return l}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(r,l){let h,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(h in p)r[h]=p[h];for(let P=0;P<m.length;P++)h=m[P],Object.prototype.hasOwnProperty.call(p,h)&&(r[h]=p[h])}}function T(r){var l=1;r=r.split(":");const h=[];for(;0<l&&r.length;)h.push(r.shift()),l--;return r.length&&h.push(r.join(":")),h}function I(r){c.setTimeout(()=>{throw r},0)}function w(){var r=rt;let l=null;return r.g&&(l=r.g,r.g=r.g.next,r.g||(r.h=null),l.next=null),l}class ye{constructor(){this.h=this.g=null}add(l,h){const p=Le.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Le=new K(()=>new Ae,r=>r.reset());class Ae{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let le,ae=!1,rt=new ye,wt=()=>{const r=c.Promise.resolve(void 0);le=()=>{r.then(ht)}};var ht=()=>{for(var r;r=w();){try{r.h.call(r.g)}catch(h){I(h)}var l=Le;l.j(r),100>l.h&&(l.h++,r.next=l.g,l.g=r)}ae=!1};function Ce(){this.s=this.s,this.C=this.C}Ce.prototype.s=!1,Ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(r,l){this.type=r,this.g=this.target=l,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var un=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,l=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return r}();function Dt(r,l){if(Re.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var h=this.type=r.type,p=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=l,l=r.relatedTarget){if(ie){e:{try{W(l.nodeName);var R=!0;break e}catch{}R=!1}R||(l=null)}}else h=="mouseover"?l=r.fromElement:h=="mouseout"&&(l=r.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:tt[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Dt.aa.h.call(this)}}k(Dt,Re);var tt={2:"touch",3:"pen",4:"mouse"};Dt.prototype.h=function(){Dt.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),J=0;function q(r,l,h,p,R){this.listener=r,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=R,this.key=++J,this.da=this.fa=!1}function X(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function de(r){this.src=r,this.g={},this.h=0}de.prototype.add=function(r,l,h,p,R){var P=r.toString();r=this.g[P],r||(r=this.g[P]=[],this.h++);var V=b(r,l,p,R);return-1<V?(l=r[V],h||(l.fa=!1)):(l=new q(l,this.src,P,!!p,R),l.fa=h,r.push(l)),l};function y(r,l){var h=l.type;if(h in r.g){var p=r.g[h],R=Array.prototype.indexOf.call(p,l,void 0),P;(P=0<=R)&&Array.prototype.splice.call(p,R,1),P&&(X(l),r.g[h].length==0&&(delete r.g[h],r.h--))}}function b(r,l,h,p){for(var R=0;R<r.length;++R){var P=r[R];if(!P.da&&P.listener==l&&P.capture==!!h&&P.ha==p)return R}return-1}var C="closure_lm_"+(1e6*Math.random()|0),N={};function x(r,l,h,p,R){if(Array.isArray(l)){for(var P=0;P<l.length;P++)x(r,l[P],h,p,R);return null}return h=te(h),r&&r[O]?r.K(l,h,f(p)?!!p.capture:!1,R):D(r,l,h,!1,p,R)}function D(r,l,h,p,R,P){if(!l)throw Error("Invalid event type");var V=f(R)?!!R.capture:!!R,we=G(r);if(we||(r[C]=we=new de(r)),h=we.add(l,h,p,V,P),h.proxy)return h;if(p=z(),h.proxy=p,p.src=r,p.listener=h,r.addEventListener)un||(R=V),R===void 0&&(R=!1),r.addEventListener(l.toString(),p,R);else if(r.attachEvent)r.attachEvent(M(l.toString()),p);else if(r.addListener&&r.removeListener)r.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function z(){function r(h){return l.call(r.src,r.listener,h)}const l=Q;return r}function j(r,l,h,p,R){if(Array.isArray(l))for(var P=0;P<l.length;P++)j(r,l[P],h,p,R);else p=f(p)?!!p.capture:!!p,h=te(h),r&&r[O]?(r=r.i,l=String(l).toString(),l in r.g&&(P=r.g[l],h=b(P,h,p,R),-1<h&&(X(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete r.g[l],r.h--)))):r&&(r=G(r))&&(l=r.g[l.toString()],r=-1,l&&(r=b(l,h,p,R)),(h=-1<r?l[r]:null)&&F(h))}function F(r){if(typeof r!="number"&&r&&!r.da){var l=r.src;if(l&&l[O])y(l.i,r);else{var h=r.type,p=r.proxy;l.removeEventListener?l.removeEventListener(h,p,r.capture):l.detachEvent?l.detachEvent(M(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=G(l))?(y(h,r),h.h==0&&(h.src=null,l[C]=null)):X(r)}}}function M(r){return r in N?N[r]:N[r]="on"+r}function Q(r,l){if(r.da)r=!0;else{l=new Dt(l,this);var h=r.listener,p=r.ha||r.src;r.fa&&F(r),r=h.call(p,l)}return r}function G(r){return r=r[C],r instanceof de?r:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(r){return typeof r=="function"?r:(r[Y]||(r[Y]=function(l){return r.handleEvent(l)}),r[Y])}function Z(){Ce.call(this),this.i=new de(this),this.M=this,this.F=null}k(Z,Ce),Z.prototype[O]=!0,Z.prototype.removeEventListener=function(r,l,h,p){j(this,r,l,h,p)};function oe(r,l){var h,p=r.F;if(p)for(h=[];p;p=p.F)h.push(p);if(r=r.M,p=l.type||l,typeof l=="string")l=new Re(l,r);else if(l instanceof Re)l.target=l.target||r;else{var R=l;l=new Re(p,r),E(l,R)}if(R=!0,h)for(var P=h.length-1;0<=P;P--){var V=l.g=h[P];R=ce(V,p,!0,l)&&R}if(V=l.g=r,R=ce(V,p,!0,l)&&R,R=ce(V,p,!1,l)&&R,h)for(P=0;P<h.length;P++)V=l.g=h[P],R=ce(V,p,!1,l)&&R}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var r=this.i,l;for(l in r.g){for(var h=r.g[l],p=0;p<h.length;p++)X(h[p]);delete r.g[l],r.h--}}this.F=null},Z.prototype.K=function(r,l,h,p){return this.i.add(String(r),l,!1,h,p)},Z.prototype.L=function(r,l,h,p){return this.i.add(String(r),l,!0,h,p)};function ce(r,l,h,p){if(l=r.i.g[String(l)],!l)return!0;l=l.concat();for(var R=!0,P=0;P<l.length;++P){var V=l[P];if(V&&!V.da&&V.capture==h){var we=V.listener,Ve=V.ha||V.src;V.fa&&y(r.i,V),R=we.call(Ve,p)!==!1&&R}}return R&&!p.defaultPrevented}function Ue(r,l,h){if(typeof r=="function")h&&(r=v(r,h));else if(r&&typeof r.handleEvent=="function")r=v(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(r,l||0)}function Fe(r){r.g=Ue(()=>{r.g=null,r.i&&(r.i=!1,Fe(r))},r.l);const l=r.h;r.h=null,r.m.apply(null,l)}class ft extends Ce{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Fe(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function We(r){Ce.call(this),this.h=r,this.g={}}k(We,Ce);var hn=[];function Ps(r){re(r.g,function(l,h){this.g.hasOwnProperty(h)&&F(l)},r),r.g={}}We.prototype.N=function(){We.aa.N.call(this),Ps(this)},We.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var je=c.JSON.stringify,dt=c.JSON.parse,Di=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function Yr(){}Yr.prototype.h=null;function rl(r){return r.h||(r.h=r.i())}function Hd(){}var ks={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qr(){Re.call(this,"d")}k(Qr,Re);function Zr(){Re.call(this,"c")}k(Zr,Re);var rs={},ol=null;function eo(){return ol=ol||new Z}rs.La="serverreachability";function al(r){Re.call(this,rs.La,r)}k(al,Re);function Os(r){const l=eo();oe(l,new al(l))}rs.STAT_EVENT="statevent";function ll(r,l){Re.call(this,rs.STAT_EVENT,r),this.stat=l}k(ll,Re);function Je(r){const l=eo();oe(l,new ll(l,r))}rs.Ma="timingevent";function cl(r,l){Re.call(this,rs.Ma,r),this.size=l}k(cl,Re);function Ns(r,l){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},l)}function Ds(){this.g=!0}Ds.prototype.xa=function(){this.g=!1};function Wd(r,l,h,p,R,P){r.info(function(){if(r.g)if(P)for(var V="",we=P.split("&"),Ve=0;Ve<we.length;Ve++){var pe=we[Ve].split("=");if(1<pe.length){var Ge=pe[0];pe=pe[1];var ze=Ge.split("_");V=2<=ze.length&&ze[1]=="type"?V+(Ge+"="+pe+"&"):V+(Ge+"=redacted&")}}else V=null;else V=P;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+l+`
`+h+`
`+V})}function Gd(r,l,h,p,R,P,V){r.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+l+`
`+h+`
`+P+" "+V})}function os(r,l,h,p){r.info(function(){return"XMLHTTP TEXT ("+l+"): "+qd(r,h)+(p?" "+p:"")})}function zd(r,l){r.info(function(){return"TIMEOUT: "+l})}Ds.prototype.info=function(){};function qd(r,l){if(!r.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(r=0;r<h.length;r++)if(Array.isArray(h[r])){var p=h[r];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var V=1;V<R.length;V++)R[V]=""}}}}return je(h)}catch{return l}}var to={NO_ERROR:0,TIMEOUT:8},Kd={},no;function xi(){}k(xi,Yr),xi.prototype.g=function(){return new XMLHttpRequest},xi.prototype.i=function(){return{}},no=new xi;function fn(r,l,h,p){this.j=r,this.i=l,this.l=h,this.R=p||1,this.U=new We(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ul}function ul(){this.i=null,this.g="",this.h=!1}var hl={},so={};function io(r,l,h){r.L=1,r.v=Fi(Gt(l)),r.m=h,r.P=!0,fl(r,null)}function fl(r,l){r.F=Date.now(),Li(r),r.A=Gt(r.v);var h=r.A,p=r.R;Array.isArray(p)||(p=[String(p)]),Al(h.i,"t",p),r.C=0,h=r.j.J,r.h=new ul,r.g=Wl(r.j,h?l:null,!r.m),0<r.O&&(r.M=new ft(v(r.Y,r,r.g),r.O)),l=r.U,h=r.g,p=r.ca;var R="readystatechange";Array.isArray(R)||(R&&(hn[0]=R.toString()),R=hn);for(var P=0;P<R.length;P++){var V=x(h,R[P],p||l.handleEvent,!1,l.h||l);if(!V)break;l.g[V.key]=V}l=r.H?_(r.H):{},r.m?(r.u||(r.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,l)):(r.u="GET",r.g.ea(r.A,r.u,null,l)),Os(),Wd(r.i,r.u,r.A,r.l,r.R,r.m)}fn.prototype.ca=function(r){r=r.target;const l=this.M;l&&zt(r)==3?l.j():this.Y(r)},fn.prototype.Y=function(r){try{if(r==this.g)e:{const ze=zt(this.g);var l=this.g.Ba();const cs=this.g.Z();if(!(3>ze)&&(ze!=3||this.g&&(this.h.h||this.g.oa()||Dl(this.g)))){this.J||ze!=4||l==7||(l==8||0>=cs?Os(3):Os(2)),ro(this);var h=this.g.Z();this.X=h;t:if(dl(this)){var p=Dl(this.g);r="";var R=p.length,P=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xn(this),xs(this);var V="";break t}this.h.i=new c.TextDecoder}for(l=0;l<R;l++)this.h.h=!0,r+=this.h.i.decode(p[l],{stream:!(P&&l==R-1)});p.length=0,this.h.g+=r,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=h==200,Gd(this.i,this.u,this.A,this.l,this.R,ze,h),this.o){if(this.T&&!this.K){t:{if(this.g){var we,Ve=this.g;if((we=Ve.g?Ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(we)){var pe=we;break t}}pe=null}if(h=pe)os(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oo(this,h);else{this.o=!1,this.s=3,Je(12),xn(this),xs(this);break e}}if(this.P){h=!0;let bt;for(;!this.J&&this.C<V.length;)if(bt=Jd(this,V),bt==so){ze==4&&(this.s=4,Je(14),h=!1),os(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==hl){this.s=4,Je(15),os(this.i,this.l,V,"[Invalid Chunk]"),h=!1;break}else os(this.i,this.l,bt,null),oo(this,bt);if(dl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ze!=4||V.length!=0||this.h.h||(this.s=1,Je(16),h=!1),this.o=this.o&&h,!h)os(this.i,this.l,V,"[Invalid Chunked Response]"),xn(this),xs(this);else if(0<V.length&&!this.W){this.W=!0;var Ge=this.j;Ge.g==this&&Ge.ba&&!Ge.M&&(Ge.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),fo(Ge),Ge.M=!0,Je(11))}}else os(this.i,this.l,V,null),oo(this,V);ze==4&&xn(this),this.o&&!this.J&&(ze==4?Vl(this.j,this):(this.o=!1,Li(this)))}else fp(this.g),h==400&&0<V.indexOf("Unknown SID")?(this.s=3,Je(12)):(this.s=0,Je(13)),xn(this),xs(this)}}}catch{}finally{}};function dl(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Jd(r,l){var h=r.C,p=l.indexOf(`
`,h);return p==-1?so:(h=Number(l.substring(h,p)),isNaN(h)?hl:(p+=1,p+h>l.length?so:(l=l.slice(p,p+h),r.C=p+h,l)))}fn.prototype.cancel=function(){this.J=!0,xn(this)};function Li(r){r.S=Date.now()+r.I,pl(r,r.I)}function pl(r,l){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Ns(v(r.ba,r),l)}function ro(r){r.B&&(c.clearTimeout(r.B),r.B=null)}fn.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(zd(this.i,this.A),this.L!=2&&(Os(),Je(17)),xn(this),this.s=2,xs(this)):pl(this,this.S-r)};function xs(r){r.j.G==0||r.J||Vl(r.j,r)}function xn(r){ro(r);var l=r.M;l&&typeof l.ma=="function"&&l.ma(),r.M=null,Ps(r.U),r.g&&(l=r.g,r.g=null,l.abort(),l.ma())}function oo(r,l){try{var h=r.j;if(h.G!=0&&(h.g==r||ao(h.h,r))){if(!r.K&&ao(h.h,r)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<r.F)Wi(h),Bi(h);else break e;ho(h),Je(18)}}else h.za=R[1],0<h.za-h.T&&37500>R[2]&&h.F&&h.v==0&&!h.C&&(h.C=Ns(v(h.Za,h),6e3));if(1>=vl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Mn(h,11)}else if((r.K||h.g==r)&&Wi(h),!$(l))for(R=h.Da.g.parse(l),l=0;l<R.length;l++){let pe=R[l];if(h.T=pe[0],pe=pe[1],h.G==2)if(pe[0]=="c"){h.K=pe[1],h.ia=pe[2];const Ge=pe[3];Ge!=null&&(h.la=Ge,h.j.info("VER="+h.la));const ze=pe[4];ze!=null&&(h.Aa=ze,h.j.info("SVER="+h.Aa));const cs=pe[5];cs!=null&&typeof cs=="number"&&0<cs&&(p=1.5*cs,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const bt=r.g;if(bt){const Gi=bt.g?bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var P=p.h;P.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(lo(P,P.h),P.h=null))}if(p.D){const po=bt.g?bt.g.getResponseHeader("X-HTTP-Session-Id"):null;po&&(p.ya=po,Te(p.I,p.D,po))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-r.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var V=r;if(p.qa=Hl(p,p.J?p.ia:null,p.W),V.K){_l(p.h,V);var we=V,Ve=p.L;Ve&&(we.I=Ve),we.B&&(ro(we),Li(we)),p.g=V}else Fl(p);0<h.i.length&&Hi(h)}else pe[0]!="stop"&&pe[0]!="close"||Mn(h,7);else h.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?Mn(h,7):uo(h):pe[0]!="noop"&&h.l&&h.l.ta(pe),h.v=0)}}Os(4)}catch{}}var Xd=class{constructor(r,l){this.g=r,this.map=l}};function gl(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ml(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function vl(r){return r.h?1:r.g?r.g.size:0}function ao(r,l){return r.h?r.h==l:r.g?r.g.has(l):!1}function lo(r,l){r.g?r.g.add(l):r.h=l}function _l(r,l){r.h&&r.h==l?r.h=null:r.g&&r.g.has(l)&&r.g.delete(l)}gl.prototype.cancel=function(){if(this.i=yl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function yl(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let l=r.i;for(const h of r.g.values())l=l.concat(h.D);return l}return L(r.i)}function Yd(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(u(r)){for(var l=[],h=r.length,p=0;p<h;p++)l.push(r[p]);return l}l=[],h=0;for(p in r)l[h++]=r[p];return l}function Qd(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(u(r)||typeof r=="string"){var l=[];r=r.length;for(var h=0;h<r;h++)l.push(h);return l}l=[],h=0;for(const p in r)l[h++]=p;return l}}}function wl(r,l){if(r.forEach&&typeof r.forEach=="function")r.forEach(l,void 0);else if(u(r)||typeof r=="string")Array.prototype.forEach.call(r,l,void 0);else for(var h=Qd(r),p=Yd(r),R=p.length,P=0;P<R;P++)l.call(void 0,p[P],h&&h[P],r)}var bl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zd(r,l){if(r){r=r.split("&");for(var h=0;h<r.length;h++){var p=r[h].indexOf("="),R=null;if(0<=p){var P=r[h].substring(0,p);R=r[h].substring(p+1)}else P=r[h];l(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Ln(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Ln){this.h=r.h,Mi(this,r.j),this.o=r.o,this.g=r.g,Ui(this,r.s),this.l=r.l;var l=r.i,h=new Us;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Il(this,h),this.m=r.m}else r&&(l=String(r).match(bl))?(this.h=!1,Mi(this,l[1]||"",!0),this.o=Ls(l[2]||""),this.g=Ls(l[3]||"",!0),Ui(this,l[4]),this.l=Ls(l[5]||"",!0),Il(this,l[6]||"",!0),this.m=Ls(l[7]||"")):(this.h=!1,this.i=new Us(null,this.h))}Ln.prototype.toString=function(){var r=[],l=this.j;l&&r.push(Ms(l,El,!0),":");var h=this.g;return(h||l=="file")&&(r.push("//"),(l=this.o)&&r.push(Ms(l,El,!0),"@"),r.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&r.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&r.push("/"),r.push(Ms(h,h.charAt(0)=="/"?np:tp,!0))),(h=this.i.toString())&&r.push("?",h),(h=this.m)&&r.push("#",Ms(h,ip)),r.join("")};function Gt(r){return new Ln(r)}function Mi(r,l,h){r.j=h?Ls(l,!0):l,r.j&&(r.j=r.j.replace(/:$/,""))}function Ui(r,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);r.s=l}else r.s=null}function Il(r,l,h){l instanceof Us?(r.i=l,rp(r.i,r.h)):(h||(l=Ms(l,sp)),r.i=new Us(l,r.h))}function Te(r,l,h){r.i.set(l,h)}function Fi(r){return Te(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Ls(r,l){return r?l?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Ms(r,l,h){return typeof r=="string"?(r=encodeURI(r).replace(l,ep),h&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function ep(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var El=/[#\/\?@]/g,tp=/[#\?:]/g,np=/[#\?]/g,sp=/[#\?@]/g,ip=/#/g;function Us(r,l){this.h=this.g=null,this.i=r||null,this.j=!!l}function dn(r){r.g||(r.g=new Map,r.h=0,r.i&&Zd(r.i,function(l,h){r.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}t=Us.prototype,t.add=function(r,l){dn(this),this.i=null,r=as(this,r);var h=this.g.get(r);return h||this.g.set(r,h=[]),h.push(l),this.h+=1,this};function Tl(r,l){dn(r),l=as(r,l),r.g.has(l)&&(r.i=null,r.h-=r.g.get(l).length,r.g.delete(l))}function Sl(r,l){return dn(r),l=as(r,l),r.g.has(l)}t.forEach=function(r,l){dn(this),this.g.forEach(function(h,p){h.forEach(function(R){r.call(l,R,p,this)},this)},this)},t.na=function(){dn(this);const r=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const R=r[p];for(let P=0;P<R.length;P++)h.push(l[p])}return h},t.V=function(r){dn(this);let l=[];if(typeof r=="string")Sl(this,r)&&(l=l.concat(this.g.get(as(this,r))));else{r=Array.from(this.g.values());for(let h=0;h<r.length;h++)l=l.concat(r[h])}return l},t.set=function(r,l){return dn(this),this.i=null,r=as(this,r),Sl(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[l]),this.h+=1,this},t.get=function(r,l){return r?(r=this.V(r),0<r.length?String(r[0]):l):l};function Al(r,l,h){Tl(r,l),0<h.length&&(r.i=null,r.g.set(as(r,l),L(h)),r.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const P=encodeURIComponent(String(p)),V=this.V(p);for(p=0;p<V.length;p++){var R=P;V[p]!==""&&(R+="="+encodeURIComponent(String(V[p]))),r.push(R)}}return this.i=r.join("&")};function as(r,l){return l=String(l),r.j&&(l=l.toLowerCase()),l}function rp(r,l){l&&!r.j&&(dn(r),r.i=null,r.g.forEach(function(h,p){var R=p.toLowerCase();p!=R&&(Tl(this,p),Al(this,R,h))},r)),r.j=l}function op(r,l){const h=new Ds;if(c.Image){const p=new Image;p.onload=A(pn,h,"TestLoadImage: loaded",!0,l,p),p.onerror=A(pn,h,"TestLoadImage: error",!1,l,p),p.onabort=A(pn,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=A(pn,h,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=r}else l(!1)}function ap(r,l){const h=new Ds,p=new AbortController,R=setTimeout(()=>{p.abort(),pn(h,"TestPingServer: timeout",!1,l)},1e4);fetch(r,{signal:p.signal}).then(P=>{clearTimeout(R),P.ok?pn(h,"TestPingServer: ok",!0,l):pn(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(R),pn(h,"TestPingServer: error",!1,l)})}function pn(r,l,h,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(h)}catch{}}function lp(){this.g=new Di}function cp(r,l,h){const p=h||"";try{wl(r,function(R,P){let V=R;f(R)&&(V=je(R)),l.push(p+P+"="+encodeURIComponent(V))})}catch(R){throw l.push(p+"type="+encodeURIComponent("_badmap")),R}}function ji(r){this.l=r.Ub||null,this.j=r.eb||!1}k(ji,Yr),ji.prototype.g=function(){return new Vi(this.l,this.j)},ji.prototype.i=function(r){return function(){return r}}({});function Vi(r,l){Z.call(this),this.D=r,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Vi,Z),t=Vi.prototype,t.open=function(r,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=l,this.readyState=1,js(this)},t.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(l.body=r),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fs(this)),this.readyState=0},t.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,js(this)),this.g&&(this.readyState=3,js(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Cl(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Cl(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}t.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var l=r.value?r.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!r.done}))&&(this.response=this.responseText+=l)}r.done?Fs(this):js(this),this.readyState==3&&Cl(this)}},t.Ra=function(r){this.g&&(this.response=this.responseText=r,Fs(this))},t.Qa=function(r){this.g&&(this.response=r,Fs(this))},t.ga=function(){this.g&&Fs(this)};function Fs(r){r.readyState=4,r.l=null,r.j=null,r.v=null,js(r)}t.setRequestHeader=function(r,l){this.u.append(r,l)},t.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,r.push(h[0]+": "+h[1]),h=l.next();return r.join(`\r
`)};function js(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Rl(r){let l="";return re(r,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function co(r,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Rl(h),typeof r=="string"?h!=null&&encodeURIComponent(String(h)):Te(r,l,h))}function Pe(r){Z.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Pe,Z);var up=/^https?$/i,hp=["POST","PUT"];t=Pe.prototype,t.Ha=function(r){this.J=r},t.ea=function(r,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);l=l?l.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():no.g(),this.v=this.o?rl(this.o):rl(no),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(l,String(r),!0),this.B=!1}catch(P){Pl(this,P);return}if(r=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)h.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())h.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),R=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(hp,l,void 0))||p||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,V]of h)this.g.setRequestHeader(P,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Nl(this),this.u=!0,this.g.send(r),this.u=!1}catch(P){Pl(this,P)}};function Pl(r,l){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=l,r.m=5,kl(r),$i(r)}function kl(r){r.A||(r.A=!0,oe(r,"complete"),oe(r,"error"))}t.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,oe(this,"complete"),oe(this,"abort"),$i(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$i(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ol(this):this.bb())},t.bb=function(){Ol(this)};function Ol(r){if(r.h&&typeof a<"u"&&(!r.v[1]||zt(r)!=4||r.Z()!=2)){if(r.u&&zt(r)==4)Ue(r.Ea,0,r);else if(oe(r,"readystatechange"),zt(r)==4){r.h=!1;try{const V=r.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=V===0){var R=String(r.D).match(bl)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),p=!up.test(R?R.toLowerCase():"")}h=p}if(h)oe(r,"complete"),oe(r,"success");else{r.m=6;try{var P=2<zt(r)?r.g.statusText:""}catch{P=""}r.l=P+" ["+r.Z()+"]",kl(r)}}finally{$i(r)}}}}function $i(r,l){if(r.g){Nl(r);const h=r.g,p=r.v[0]?()=>{}:null;r.g=null,r.v=null,l||oe(r,"ready");try{h.onreadystatechange=p}catch{}}}function Nl(r){r.I&&(c.clearTimeout(r.I),r.I=null)}t.isActive=function(){return!!this.g};function zt(r){return r.g?r.g.readyState:0}t.Z=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(r){if(this.g){var l=this.g.responseText;return r&&l.indexOf(r)==0&&(l=l.substring(r.length)),dt(l)}};function Dl(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function fp(r){const l={};r=(r.g&&2<=zt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<r.length;p++){if($(r[p]))continue;var h=T(r[p]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=l[R]||[];l[R]=P,P.push(h)}S(l,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vs(r,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[r]||l}function xl(r){this.Aa=0,this.i=[],this.j=new Ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vs("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vs("baseRetryDelayMs",5e3,r),this.cb=Vs("retryDelaySeedMs",1e4,r),this.Wa=Vs("forwardChannelMaxRetries",2,r),this.wa=Vs("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new gl(r&&r.concurrentRequestLimit),this.Da=new lp,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=xl.prototype,t.la=8,t.G=1,t.connect=function(r,l,h,p){Je(0),this.W=r,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Hl(this,null,this.W),Hi(this)};function uo(r){if(Ll(r),r.G==3){var l=r.U++,h=Gt(r.I);if(Te(h,"SID",r.K),Te(h,"RID",l),Te(h,"TYPE","terminate"),$s(r,h),l=new fn(r,r.j,l),l.L=2,l.v=Fi(Gt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=Wl(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Li(l)}Bl(r)}function Bi(r){r.g&&(fo(r),r.g.cancel(),r.g=null)}function Ll(r){Bi(r),r.u&&(c.clearTimeout(r.u),r.u=null),Wi(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function Hi(r){if(!ml(r.h)&&!r.s){r.s=!0;var l=r.Ga;le||wt(),ae||(le(),ae=!0),rt.add(l,r),r.B=0}}function dp(r,l){return vl(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=l.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Ns(v(r.Ga,r,l),$l(r,r.B)),r.B++,!0)}t.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const R=new fn(this,this.j,r);let P=this.o;if(this.S&&(P?(P=_(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Ul(this,R,l),h=Gt(this.I),Te(h,"RID",r),Te(h,"CVER",22),this.D&&Te(h,"X-HTTP-Session-Id",this.D),$s(this,h),P&&(this.O?l="headers="+encodeURIComponent(String(Rl(P)))+"&"+l:this.m&&co(h,this.m,P)),lo(this.h,R),this.Ua&&Te(h,"TYPE","init"),this.P?(Te(h,"$req",l),Te(h,"SID","null"),R.T=!0,io(R,h,null)):io(R,h,l),this.G=2}}else this.G==3&&(r?Ml(this,r):this.i.length==0||ml(this.h)||Ml(this))};function Ml(r,l){var h;l?h=l.l:h=r.U++;const p=Gt(r.I);Te(p,"SID",r.K),Te(p,"RID",h),Te(p,"AID",r.T),$s(r,p),r.m&&r.o&&co(p,r.m,r.o),h=new fn(r,r.j,h,r.B+1),r.m===null&&(h.H=r.o),l&&(r.i=l.D.concat(r.i)),l=Ul(r,h,1e3),h.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),lo(r.h,h),io(h,p,l)}function $s(r,l){r.H&&re(r.H,function(h,p){Te(l,p,h)}),r.l&&wl({},function(h,p){Te(l,p,h)})}function Ul(r,l,h){h=Math.min(r.i.length,h);var p=r.l?v(r.l.Na,r.l,r):null;e:{var R=r.i;let P=-1;for(;;){const V=["count="+h];P==-1?0<h?(P=R[0].g,V.push("ofs="+P)):P=0:V.push("ofs="+P);let we=!0;for(let Ve=0;Ve<h;Ve++){let pe=R[Ve].g;const Ge=R[Ve].map;if(pe-=P,0>pe)P=Math.max(0,R[Ve].g-100),we=!1;else try{cp(Ge,V,"req"+pe+"_")}catch{p&&p(Ge)}}if(we){p=V.join("&");break e}}}return r=r.i.splice(0,h),l.D=r,p}function Fl(r){if(!r.g&&!r.u){r.Y=1;var l=r.Fa;le||wt(),ae||(le(),ae=!0),rt.add(l,r),r.v=0}}function ho(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Ns(v(r.Fa,r),$l(r,r.v)),r.v++,!0)}t.Fa=function(){if(this.u=null,jl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Ns(v(this.ab,this),r)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Je(10),Bi(this),jl(this))};function fo(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function jl(r){r.g=new fn(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var l=Gt(r.qa);Te(l,"RID","rpc"),Te(l,"SID",r.K),Te(l,"AID",r.T),Te(l,"CI",r.F?"0":"1"),!r.F&&r.ja&&Te(l,"TO",r.ja),Te(l,"TYPE","xmlhttp"),$s(r,l),r.m&&r.o&&co(l,r.m,r.o),r.L&&(r.g.I=r.L);var h=r.g;r=r.ia,h.L=1,h.v=Fi(Gt(l)),h.m=null,h.P=!0,fl(h,r)}t.Za=function(){this.C!=null&&(this.C=null,Bi(this),ho(this),Je(19))};function Wi(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function Vl(r,l){var h=null;if(r.g==l){Wi(r),fo(r),r.g=null;var p=2}else if(ao(r.h,l))h=l.D,_l(r.h,l),p=1;else return;if(r.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var R=r.B;p=eo(),oe(p,new cl(p,h)),Hi(r)}else Fl(r);else if(R=l.s,R==3||R==0&&0<l.X||!(p==1&&dp(r,l)||p==2&&ho(r)))switch(h&&0<h.length&&(l=r.h,l.i=l.i.concat(h)),R){case 1:Mn(r,5);break;case 4:Mn(r,10);break;case 3:Mn(r,6);break;default:Mn(r,2)}}}function $l(r,l){let h=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(h*=2),h*l}function Mn(r,l){if(r.j.info("Error code "+l),l==2){var h=v(r.fb,r),p=r.Xa;const R=!p;p=new Ln(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Mi(p,"https"),Fi(p),R?op(p.toString(),h):ap(p.toString(),h)}else Je(2);r.G=0,r.l&&r.l.sa(l),Bl(r),Ll(r)}t.fb=function(r){r?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function Bl(r){if(r.G=0,r.ka=[],r.l){const l=yl(r.h);(l.length!=0||r.i.length!=0)&&(B(r.ka,l),B(r.ka,r.i),r.h.i.length=0,L(r.i),r.i.length=0),r.l.ra()}}function Hl(r,l,h){var p=h instanceof Ln?Gt(h):new Ln(h);if(p.g!="")l&&(p.g=l+"."+p.g),Ui(p,p.s);else{var R=c.location;p=R.protocol,l=l?l+"."+R.hostname:R.hostname,R=+R.port;var P=new Ln(null);p&&Mi(P,p),l&&(P.g=l),R&&Ui(P,R),h&&(P.l=h),p=P}return h=r.D,l=r.ya,h&&l&&Te(p,h,l),Te(p,"VER",r.la),$s(r,p),p}function Wl(r,l,h){if(l&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=r.Ca&&!r.pa?new Pe(new ji({eb:h})):new Pe(r.pa),l.Ha(r.J),l}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gl(){}t=Gl.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function pt(r,l){Z.call(this),this.g=new xl(l),this.l=r,this.h=l&&l.messageUrlParams||null,r=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(r?r["X-WebChannel-Content-Type"]=l.messageContentType:r={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(r?r["X-WebChannel-Client-Profile"]=l.va:r={"X-WebChannel-Client-Profile":l.va}),this.g.S=r,(r=l&&l.Sb)&&!$(r)&&(this.g.m=r),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!$(l)&&(this.g.D=l,r=this.h,r!==null&&l in r&&(r=this.h,l in r&&delete r[l])),this.j=new ls(this)}k(pt,Z),pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){uo(this.g)},pt.prototype.o=function(r){var l=this.g;if(typeof r=="string"){var h={};h.__data__=r,r=h}else this.u&&(h={},h.__data__=je(r),r=h);l.i.push(new Xd(l.Ya++,r)),l.G==3&&Hi(l)},pt.prototype.N=function(){this.g.l=null,delete this.j,uo(this.g),delete this.g,pt.aa.N.call(this)};function zl(r){Qr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var l=r.__sm__;if(l){e:{for(const h in l){r=h;break e}r=void 0}(this.i=r)&&(r=this.i,l=l!==null&&r in l?l[r]:void 0),this.data=l}else this.data=r}k(zl,Qr);function ql(){Zr.call(this),this.status=1}k(ql,Zr);function ls(r){this.g=r}k(ls,Gl),ls.prototype.ua=function(){oe(this.g,"a")},ls.prototype.ta=function(r){oe(this.g,new zl(r))},ls.prototype.sa=function(r){oe(this.g,new ql)},ls.prototype.ra=function(){oe(this.g,"b")},pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,to.NO_ERROR=0,to.TIMEOUT=8,to.HTTP_ERROR=6,Kd.COMPLETE="complete",Hd.EventType=ks,ks.OPEN="a",ks.CLOSE="b",ks.ERROR="c",ks.MESSAGE="d",Z.prototype.listen=Z.prototype.K,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha}).apply(typeof Yi<"u"?Yi:typeof self<"u"?self:typeof window<"u"?window:{});const Du="@firebase/firestore",xu="4.8.0";/**
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
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
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
 */let Oi="11.10.0";/**
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
 */const As=new Gr("@firebase/firestore");function St(t,...e){if(As.logLevel<=_e.DEBUG){const n=e.map(el);As.debug(`Firestore (${Oi}): ${t}`,...n)}}function Ld(t,...e){if(As.logLevel<=_e.ERROR){const n=e.map(el);As.error(`Firestore (${Oi}): ${t}`,...n)}}function eI(t,...e){if(As.logLevel<=_e.WARN){const n=e.map(el);As.warn(`Firestore (${Oi}): ${t}`,...n)}}function el(t){if(typeof t=="string")return t;try{/**
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
 */function bi(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,Md(t,s,n)}function Md(t,e,n){let s=`FIRESTORE (${Oi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Ld(s),new Error(s)}function oi(t,e,n,s){let i="Unexpected state";typeof n=="string"?i=n:s=n,t||Md(e,i,s)}/**
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
 */const he={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class fe extends Nt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ai{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ud{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class nI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sI{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oi(this.o===void 0,42304);let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let o=new ai;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ai,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{St("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(St("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ai)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(St("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(oi(typeof s.accessToken=="string",31837,{l:s}),new Ud(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oi(e===null||typeof e=="string",2055,{h:e}),new Ye(e)}}class iI{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class rI{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new iI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Et(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oi(this.o===void 0,3512);const s=o=>{o.error!=null&&St("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,St("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>s(o))};const i=o=>{St("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):St("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Lu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oi(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Lu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function aI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */function lI(){return new TextEncoder}/**
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
 */class cI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=aI(40);for(let o=0;o<i.length;++o)s.length<20&&i[o]<n&&(s+=e.charAt(i[o]%62))}return s}}function Rt(t,e){return t<e?-1:t>e?1:0}function uI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=t.codePointAt(n),i=e.codePointAt(n);if(s!==i){if(s<128&&i<128)return Rt(s,i);{const o=lI(),a=hI(o.encode(Mu(t,n)),o.encode(Mu(e,n)));return a!==0?a:Rt(s,i)}}n+=s>65535?2:1}return Rt(t.length,e.length)}function Mu(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function hI(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Rt(t[n],e[n]);return Rt(t.length,e.length)}/**
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
 */const Uu="__name__";class Mt{constructor(e,n,s){n===void 0?n=0:n>e.length&&bi(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&bi(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Mt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mt?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const o=Mt.compareSegments(e.get(i),n.get(i));if(o!==0)return o}return Rt(e.length,n.length)}static compareSegments(e,n){const s=Mt.isNumericId(e),i=Mt.isNumericId(n);return s&&!i?-1:!s&&i?1:s&&i?Mt.extractNumericId(e).compare(Mt.extractNumericId(n)):uI(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Za.fromString(e.substring(4,e.length-2))}}class It extends Mt{construct(e,n,s){return new It(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new fe(he.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new It(n)}static emptyPath(){return new It([])}}const fI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Wn extends Mt{construct(e,n,s){return new Wn(e,n,s)}static isValidIdentifier(e){return fI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Wn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Uu}static keyField(){return new Wn([Uu])}static fromServerFormat(e){const n=[];let s="",i=0;const o=()=>{if(s.length===0)throw new fe(he.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new fe(he.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new fe(he.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(s+=c,i++):(o(),i++)}if(o(),a)throw new fe(he.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Wn(n)}static emptyPath(){return new Wn([])}}/**
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
 */class qn{constructor(e){this.path=e}static fromPath(e){return new qn(It.fromString(e))}static fromName(e){return new qn(It.fromString(e).popFirst(5))}static empty(){return new qn(It.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&It.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return It.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new qn(new It(e.slice()))}}function dI(t,e,n,s){if(e===!0&&s===!0)throw new fe(he.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function gI(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":bi(12329,{type:typeof t})}function mI(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new fe(he.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gI(t);throw new fe(he.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function xe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ni(t,e){if(!pI(t))throw new fe(he.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const i=e[s].typeString,o="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const a=t[s];if(i&&typeof a!==i){n=`JSON field '${s}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){n=`Expected '${s}' field to equal '${o.value}'`;break}}if(n)throw new fe(he.INVALID_ARGUMENT,n);return!0}/**
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
 */const Fu=-62135596800,ju=1e6;class Ft{static now(){return Ft.fromMillis(Date.now())}static fromDate(e){return Ft.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*ju);return new Ft(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new fe(he.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new fe(he.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Fu)throw new fe(he.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(he.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ju}_compareTo(e){return this.seconds===e.seconds?Rt(this.nanoseconds,e.nanoseconds):Rt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ft._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ni(e,Ft._jsonSchema))return new Ft(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ft._jsonSchemaVersion="firestore/timestamp/1.0",Ft._jsonSchema={type:xe("string",Ft._jsonSchemaVersion),seconds:xe("number"),nanoseconds:xe("number")};function vI(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class _I extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ns{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new _I("Invalid base64 string: "+o):o}}(e);return new ns(n)}static fromUint8Array(e){const n=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new ns(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Rt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ns.EMPTY_BYTE_STRING=new ns("");const fa="(default)";class Cr{constructor(e,n){this.projectId=e,this.database=n||fa}static empty(){return new Cr("","")}get isDefaultDatabase(){return this.database===fa}isEqual(e){return e instanceof Cr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class yI{constructor(e,n=null,s=[],i=[],o=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function wI(t){return new yI(t)}/**
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
 */var Vu,ue;(ue=Vu||(Vu={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Za([4294967295,4294967295],0);/**
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
 */const bI=41943040;/**
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
 */const II=1048576;function Vo(){return typeof document<"u"?document:null}/**
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
 */class EI{constructor(e,n,s=1e3,i=1.5,o=6e4){this.Fi=e,this.timerId=n,this.d_=s,this.E_=i,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-s);i>0&&St("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */class tl{constructor(e,n,s,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=o,this.deferred=new ai,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,o){const a=Date.now()+s,c=new tl(e,n,a,i,o);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(he.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var $u,Bu;(Bu=$u||($u={})).Fa="default",Bu.Cache="cache";/**
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
 */function TI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Hu=new Map;/**
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
 */const Fd="firestore.googleapis.com",Wu=!0;class Gu{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new fe(he.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Fd,this.ssl=Wu}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Wu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=bI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<II)throw new fe(he.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=TI((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new fe(he.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new fe(he.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new fe(he.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jd{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(he.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(he.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new tI;switch(s.type){case"firstParty":return new rI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new fe(he.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Hu.get(n);s&&(St("ComponentProvider","Removing Datastore"),Hu.delete(n),s.terminate())}(this),Promise.resolve()}}function SI(t,e,n,s={}){var i;t=mI(t,jd);const o=Ai(e),a=t._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;o&&(Af(`https://${u}`),Cf("Firestore",!0)),a.host!==Fd&&a.host!==u&&eI("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:u,ssl:o,emulatorOptions:s});if(!kn(f,c)&&(t._setSettings(f),s.mockUserToken)){let d,g;if(typeof s.mockUserToken=="string")d=s.mockUserToken,g=Ye.MOCK_USER;else{d=a_(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new fe(he.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ye(v)}t._authCredentials=new nI(new Ud(d,g))}}/**
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
 */class nl{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new nl(this.firestore,e,this._query)}}class jt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jt(this.firestore,e,this._key)}toJSON(){return{type:jt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Ni(n,jt._jsonSchema))return new jt(e,s||null,new qn(It.fromString(n.referencePath)))}}jt._jsonSchemaVersion="firestore/documentReference/1.0",jt._jsonSchema={type:xe("string",jt._jsonSchemaVersion),referencePath:xe("string")};class sl extends nl{constructor(e,n,s){super(e,n,wI(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jt(this.firestore,null,new qn(e))}withConverter(e){return new sl(this.firestore,e,this._path)}}/**
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
 */const zu="AsyncQueue";class qu{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new EI(this,"async_queue_retry"),this.oc=()=>{const s=Vo();s&&St(zu,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const n=Vo();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Vo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new ai;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!vI(e))throw e;St(zu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,Ld("INTERNAL UNHANDLED ERROR: ",Ku(s)),s}).then(s=>(this.nc=!1,s))));return this._c=n,n}enqueueAfterDelay(e,n,s){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=tl.createAndSchedule(this,e,n,s,o=>this.lc(o));return this.ec.push(i),i}ac(){this.tc&&bi(47125,{hc:Ku(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Ku(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class AI extends jd{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new qu,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new qu(e),this._firestoreClient=void 0,await e}}}function CI(t,e){const n=typeof t=="object"?t:Ma(),s=typeof t=="string"?t:fa,i=is(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const o=r_("firestore");o&&SI(i,...o)}return i}/**
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
 */class en{constructor(e){this._byteString=e}static fromBase64String(e){try{return new en(ns.fromBase64String(e))}catch(n){throw new fe(he.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new en(ns.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:en._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ni(e,en._jsonSchema))return en.fromBase64String(e.bytes)}}en._jsonSchemaVersion="firestore/bytes/1.0",en._jsonSchema={type:xe("string",en._jsonSchemaVersion),bytes:xe("string")};/**
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
 */class Vd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new fe(he.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Wn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Xn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new fe(he.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new fe(he.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Rt(this._lat,e._lat)||Rt(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xn._jsonSchemaVersion}}static fromJSON(e){if(Ni(e,Xn._jsonSchema))return new Xn(e.latitude,e.longitude)}}Xn._jsonSchemaVersion="firestore/geoPoint/1.0",Xn._jsonSchema={type:xe("string",Xn._jsonSchemaVersion),latitude:xe("number"),longitude:xe("number")};/**
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
 */class Yn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,i){if(s.length!==i.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==i[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Yn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ni(e,Yn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Yn(e.vectorValues);throw new fe(he.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Yn._jsonSchemaVersion="firestore/vectorValue/1.0",Yn._jsonSchema={type:xe("string",Yn._jsonSchemaVersion),vectorValues:xe("object")};const RI=new RegExp("[~\\*/\\[\\]]");function PI(t,e,n){if(e.search(RI)>=0)throw Ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Vd(...e.split("."))._internalPath}catch{throw Ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Ju(t,e,n,s,i){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new fe(he.INVALID_ARGUMENT,o+t+a)}/**
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
 */class $d{constructor(e,n,s,i,o){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Bd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kI extends $d{data(){return super.data()}}function Bd(t,e){return typeof e=="string"?PI(t,e):e instanceof Vd?e._internalPath:e._delegate._internalPath}class Qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Is extends $d{constructor(e,n,s,i,o,a){super(e,n,s,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Bd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(he.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Is._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Is._jsonSchemaVersion="firestore/documentSnapshot/1.0",Is._jsonSchema={type:xe("string",Is._jsonSchemaVersion),bundleSource:xe("string","DocumentSnapshot"),bundleName:xe("string"),bundle:xe("string")};class lr extends Is{data(e={}){return super.data(e)}}class li{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Qi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new lr(this._firestore,this._userDataWriter,s.key,s,new Qi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new fe(he.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const u=new lr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Qi(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const u=new lr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Qi(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,d=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:OI(c.type),doc:u,oldIndex:f,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(he.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=li._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=cI.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(n.push(o._document),s.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function OI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return bi(61501,{type:t})}}li._jsonSchemaVersion="firestore/querySnapshot/1.0",li._jsonSchema={type:xe("string",li._jsonSchemaVersion),bundleSource:xe("string","QuerySnapshot"),bundleName:xe("string"),bundle:xe("string")};(function(e,n=!0){(function(i){Oi=i})(Cs),Ht(new Ot("firestore",(s,{instanceIdentifier:i,options:o})=>{const a=s.getProvider("app").getImmediate(),c=new AI(new sI(s.getProvider("auth-internal")),new oI(a,s.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new fe(he.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cr(f.options.projectId,d)}(a,i),a);return o=Object.assign({useFetchStreams:n},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),_t(Du,xu,e),_t(Du,xu,"esm2017")})();const NI={apiKey:"AIzaSyBzR2w75nixO9H8zjUbxVajKx0npksSGrg",authDomain:"norsk-cafe.firebaseapp.com",projectId:"norsk-cafe",storageBucket:"norsk-cafe.firebasestorage.app",messagingSenderId:"123232580709",appId:"1:123232580709:web:c6e6dfed117db9d3b0028c",measurementId:void 0},il=xf(NI);X0(il);const Qn=Qb(il);CI(il);const DI="/assets/coffee-cKRUD7yK.svg",da="/assets/panda256-BLVgM0lT.png",Dn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},xI={class:"header"},LI=["src"],MI={class:"header-user"},UI=["src"],FI={key:0,class:"profile-menu"},jI={class:"profile-header"},VI=["src"],$I={class:"profile-info"},BI={class:"profile-name"},HI={__name:"Header",setup(t){const e=Si(),n=$e(null),s=$e(!1),i=$e(null);Ei(()=>{n.value=Qn.currentUser,Qn.onAuthStateChanged(d=>{n.value=d}),document.addEventListener("click",a)}),Ra(()=>{document.removeEventListener("click",a)});function o(){s.value=!s.value}function a(d){i.value&&!i.value.contains(d.target)&&(s.value=!1)}function c(){e.push("/login")}function u(){Qn.signOut(),e.push("/login"),s.value=!1}function f(){e.push("/")}return(d,g)=>(ke(),Ne("header",xI,[U("button",{class:"header-title-button",onClick:f},[g[1]||(g[1]=U("span",{class:"header-title-text"},"Norsk",-1)),U("img",{src:lt(DI),alt:"Logo",class:"header-logo"},null,8,LI),g[2]||(g[2]=U("span",{class:"header-title-text"},"Cafe",-1))]),U("div",MI,[n.value?(ke(),Ne("div",{key:1,class:"profile-menu-wrapper",ref_key:"menuRef",ref:i},[U("img",{src:n.value.photoURL||lt(da),alt:"User Profile",class:"user-icon",onClick:o},null,8,UI),De(of,{name:"fade-slide"},{default:Ur(()=>[s.value?(ke(),Ne("div",FI,[U("div",jI,[U("img",{src:n.value.photoURL||lt(da),alt:"Large profile",class:"profile-large"},null,8,VI),U("div",$I,[U("div",BI,be(n.value.displayName||n.value.email),1),g[3]||(g[3]=U("div",{class:"profile-level"},"Level 18",-1))])]),g[4]||(g[4]=U("hr",{class:"profile-divider"},null,-1)),U("button",{class:"menu-item",onClick:g[0]||(g[0]=v=>lt(e).push("/account"))},"Konto Innstillinger"),U("button",{class:"menu-item",onClick:u},"Logg ut")])):gr("",!0)]),_:1})],512)):(ke(),Ne("button",{key:0,class:"login-button",onClick:c}," Login "))])]))}},WI=Dn(HI,[["__scopeId","data-v-afab0fe0"]]),GI="data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%23fff'/%3e%3c/svg%3e",zI={class:"footer"},qI={class:"footer-start"},KI={class:"footer-end"},JI={href:"https://github.com/fredrikofstad/norskcafe",target:"_blank",rel:"noopener noreferrer",class:"github-link"},XI=["src"],YI={__name:"Footer",setup(t){return(e,n)=>{const s=Lh("router-link");return ke(),Ne("footer",zI,[U("div",qI,[n[1]||(n[1]=U("span",{class:"copyright"},"© 2025 Fredrik Ofstad",-1)),De(s,{to:"/privacy",class:"privacy-link"},{default:Ur(()=>n[0]||(n[0]=[pi("Privacy Policy")])),_:1,__:[0]})]),U("div",KI,[U("a",JI,[U("img",{src:lt(GI),alt:"GitHub",class:"github-icon"},null,8,XI)])])])}}},QI=Dn(YI,[["__scopeId","data-v-b36a3877"]]),ZI={class:"page"},e1={class:"main-content"},t1={__name:"App",setup(t){return(e,n)=>{const s=Lh("router-view");return ke(),Ne("div",ZI,[De(WI),U("main",e1,[De(s)]),De(QI)])}}},n1={class:"home-page"},s1={__name:"Home",setup(t){const e=Si();function n(){Qn.currentUser?e.push("/dashboard"):e.push("/login")}return(s,i)=>(ke(),Ne("div",n1,[U("main",{class:"welcome"},[i[0]||(i[0]=U("div",{class:"welcome"},null,-1)),i[1]||(i[1]=U("h1",null,"Velkommen!",-1)),i[2]||(i[2]=U("p",null,"Her på Norsk Cafe skal vi lære norsk på en morsom og effektiv måte!",-1)),U("button",{class:"start-button",onClick:n}," La oss komme i gang! ")])]))}},i1=Dn(s1,[["__scopeId","data-v-ac2fe9f3"]]),r1={class:"login-page"},o1={class:"login-content"},a1={class:"login-inner"},l1={class:"gsi-material-button"},c1={class:"gsi-material-button-content-wrapper"},u1={class:"gsi-material-button-icon"},h1={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",style:{width:"24px",height:"24px"}},f1={__name:"Login",setup(t){const e=Si();async function n(){const s=new Zt;try{await ab(Qn,s),e.push("/dashboard")}catch(i){console.error("Google sign-in failed",i),alert("Google sign-in failed: "+i.message)}}return(s,i)=>(ke(),Ne("div",r1,[U("main",o1,[U("div",a1,[i[2]||(i[2]=U("h2",{class:"login-title"},"Velkommen tilbake!",-1)),i[3]||(i[3]=U("p",{class:"login-subtitle"}," Logg inn med Google for å fortsette å lære norsk. ",-1)),U("div",{class:"google-wrapper",onClick:n},[U("button",l1,[U("div",c1,[U("div",u1,[(ke(),Ne("svg",h1,i[0]||(i[0]=[Zg(`<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0\r
                    14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-e7300c23></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58\r
                    2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-e7300c23></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92\r
                    16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-e7300c23></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15\r
                    1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98\r
                    6.19C6.51 42.62 14.62 48 24 48z" data-v-e7300c23></path><path fill="none" d="M0 0h48v48H0z" data-v-e7300c23></path>`,5)])))]),i[1]||(i[1]=U("span",{class:"gsi-material-button-contents"},"Fortsett med Google",-1))])])])])])]))}},d1=Dn(f1,[["__scopeId","data-v-e7300c23"]]),p1="/assets/read-lc7uTVG8.png",g1="/assets/review-BO4Lya47.png",m1="/assets/listen-BRpUMTBZ.png",v1={class:"dashboard-page"},_1={class:"dashboard-content"},y1={class:"dashboard-welcome"},w1={class:"cards-container"},b1={__name:"Dashboard",setup(t){const e=Si(),n=$e("");Ei(()=>{$w(Qn,i=>{if(i){const o=i.displayName||i.email||"Bruker";n.value=o.split(" ")[0]}else e.push("/login")})});function s(){e.push("/review")}return(i,o)=>(ke(),Ne("div",v1,[U("main",_1,[U("div",y1,[U("h2",null,"Hei "+be(n.value)+"!",1),o[2]||(o[2]=U("p",null,"Velkommen til ditt dashboard. Ta en titt rundt!",-1))]),U("div",w1,[U("div",{class:"dashboard-card",onClick:o[0]||(o[0]=(...a)=>i.goToLearn&&i.goToLearn(...a))},o[3]||(o[3]=[U("div",{class:"card-text"},[U("h3",null,"Lær"),U("p",null,"Start en ny leksjon og lær nye ord.")],-1),U("img",{src:p1,alt:"Lær",class:"card-icon"},null,-1)])),U("div",{class:"dashboard-card",onClick:s},o[4]||(o[4]=[U("div",{class:"card-text"},[U("h3",null,"Repeter"),U("p",null,"Gå gjennom ordene du allerede kan.")],-1),U("img",{src:g1,alt:"Repeter",class:"card-icon"},null,-1)])),U("div",{class:"dashboard-card",onClick:o[1]||(o[1]=(...a)=>i.goToListen&&i.goToListen(...a))},o[5]||(o[5]=[U("div",{class:"card-text"},[U("h3",null,"Lytt"),U("p",null,"kommer snart.")],-1),U("img",{src:m1,alt:"Lytt",class:"card-icon"},null,-1)]))])])]))}},I1=Dn(b1,[["__scopeId","data-v-183e072c"]]),E1={title:"Personvernerklæring",updated:"Sist oppdatert: 6. juli 2025",who:{title:"Hvem er vi",text:"Norsk Cafe er utviklet og driftet av Fredrik Ofstad, som er behandlingsansvarlig for dine personopplysninger."},what:{title:"Hvilke data samles inn?",text:"Når du logger inn med Google, mottar vi følgende informasjon:",items:["Navn","E-postadresse","Profilbilde"],note:"Denne informasjonen brukes kun til å tilpasse din opplevelse i appen. Vi lagrer ikke passord."},where:{title:"Hvor lagres dataene?",text:"Dataene lagres i Google Firebase Authentication og Firestore-databasen. Selve appen hostes på GitHub Pages."},cookies:{title:"Informasjonskapsler og sporing",text:"Norsk Cafe bruker for øyeblikket ikke informasjonskapsler eller analyseverktøy. Google Analytics kan vurderes senere, men vil i så fall kreve samtykke."},sharing:{title:"Deling av data",text:"Vi deler ikke dine personopplysninger med tredjeparter, med unntak av bruk av Google Firebase som databehandler."},rights:{title:"Dine rettigheter",items:["Innsyn i egne personopplysninger","Sletting av data","Klage til Datatilsynet"]},deletion:{title:"Slette konto",text:"Du kan slette kontoen din direkte i appen. Dette sletter brukeren og tilhørende data fra Firebase."}},T1={title:"Privacy Policy",updated:"Last updated: 6 July 2025",who:{title:"Who we are",text:"Norsk Cafe is developed and operated by Fredrik Ofstad, who is the data controller responsible for your personal information."},what:{title:"What data do we collect?",text:"When you sign in with Google, we receive:",items:["Your name","Your email address","Your profile picture"],note:"This is used only to personalize your experience. We do not collect or store any passwords."},where:{title:"Where is the data stored?",text:"Your data is stored in Google Firebase Authentication and Firestore. The app is hosted on GitHub Pages."},cookies:{title:"Cookies and tracking",text:"Norsk Cafe does not currently use cookies or tracking tools. Google Analytics may be added in the future, but only with explicit consent."},sharing:{title:"Data sharing",text:"We do not share your data with third parties, except for Google Firebase, which acts as a data processor."},rights:{title:"Your rights",items:["Access your personal data","Request deletion","File a complaint with your data protection authority"]},deletion:{title:"Account deletion",text:"You can delete your account from the settings page. This will remove your user and data from Firebase."}},S1={no:E1,en:T1},A1={class:"privacy-page"},C1={class:"privacy-content"},R1={class:"title-bar"},P1={__name:"Privacy",setup(t){const e=$e("no");function n(){e.value=e.value==="no"?"en":"no"}const s=at(()=>S1[e.value]);return(i,o)=>(ke(),Ne("div",A1,[U("div",C1,[U("div",R1,[U("h1",null,be(s.value.title),1),U("button",{class:"lang-switch",onClick:n},be(e.value==="no"?"Switch to English":"Bytt til norsk"),1)]),U("p",null,[U("strong",null,be(s.value.updated),1)]),U("h2",null,be(s.value.who.title),1),U("p",null,be(s.value.who.text),1),U("h2",null,be(s.value.what.title),1),U("p",null,be(s.value.what.text),1),U("ul",null,[(ke(!0),Ne(mt,null,ec(s.value.what.items,a=>(ke(),Ne("li",{key:a},be(a),1))),128))]),U("p",null,be(s.value.what.note),1),U("h2",null,be(s.value.where.title),1),U("p",null,be(s.value.where.text),1),U("h2",null,be(s.value.cookies.title),1),U("p",null,be(s.value.cookies.text),1),U("h2",null,be(s.value.sharing.title),1),U("p",null,be(s.value.sharing.text),1),U("h2",null,be(s.value.rights.title),1),U("ul",null,[(ke(!0),Ne(mt,null,ec(s.value.rights.items,a=>(ke(),Ne("li",{key:a},be(a),1))),128))]),U("h2",null,be(s.value.deletion.title),1),U("p",null,be(s.value.deletion.text),1)])]))}},k1=Dn(P1,[["__scopeId","data-v-117f989b"]]),O1={class:"account-settings"},N1={key:0,class:"user-info"},D1=["src"],x1={__name:"Account",setup(t){const e=Si(),n=$e(Qn.currentUser);async function s(){if(confirm("Are you sure you want to delete your account? This action cannot be undone."))try{await n.value.delete(),alert("Your account has been deleted."),e.push("/login")}catch(o){o.code==="auth/requires-recent-login"?(alert("Please sign in again to delete your account."),e.push("/login")):(console.error("Account deletion failed:",o),alert("Something went wrong. Please try again."))}}return(i,o)=>(ke(),Ne("div",O1,[o[2]||(o[2]=U("h1",null,"Account Settings",-1)),n.value?(ke(),Ne("div",N1,[U("img",{src:n.value?.photoURL||lt(da),alt:"Profile",class:"profile-pic"},null,8,D1),U("p",null,[o[0]||(o[0]=U("strong",null,"Name:",-1)),pi(" "+be(n.value.displayName),1)]),U("p",null,[o[1]||(o[1]=U("strong",null,"Email:",-1)),pi(" "+be(n.value.email),1)])])):gr("",!0),o[3]||(o[3]=U("hr",null,null,-1)),U("button",{class:"delete-button",onClick:s},"Delete Account")]))}},L1=Dn(x1,[["__scopeId","data-v-ca588be0"]]);function M1(t,e,n){const s=t.filter(i=>{const o=i.id.slice(0,1);return e.includes(o)&&n.includes(i.id)}).flatMap(i=>[{id:`${i.id}-toEn`,baseId:i.id,prompt:i.norwegian,answer:i.english},{id:`${i.id}-toNo`,baseId:i.id,prompt:i.english,answer:i.norwegian}]);for(let i=s.length-1;i>0;i--){const o=Math.floor(Math.random()*(i+1));[s[i],s[o]]=[s[o],s[i]]}return $e(s)}const U1=[{type:"noun",norwegian:"substantiv",english:"noun",gender:"et",plural:{indefinite:"substantiv",definite:"substantivene"},level:"A1",pronunciation:"audio/substantiv.mp3",example:{no:"Substantiv er navn på ting.",en:"Nouns are names of things."},id:"0n1"},{type:"noun",norwegian:"verb",english:"verb",gender:"et",plural:{indefinite:"verb",definite:"verbene"},level:"A1",pronunciation:"audio/verb.mp3",example:{no:"Verb forteller hva noen gjør.",en:"Verbs describe what someone does."},id:"0n2"},{type:"noun",norwegian:"adjektiv",english:"adjective",gender:"et",plural:{indefinite:"adjektiv",definite:"adjektivene"},level:"A1",pronunciation:"audio/adjektiv.mp3",example:{no:"Adjektiv beskriver substantiv.",en:"Adjectives describe nouns."},id:"0n3"},{type:"noun",norwegian:"adverb",english:"adverb",gender:"et",plural:{indefinite:"adverb",definite:"adverbene"},level:"A1",pronunciation:"audio/adverb.mp3",example:{no:"Adverb beskriver verb, adjektiv eller andre adverb.",en:"Adverbs describe verbs, adjectives, or other adverbs."},id:"0n4"},{type:"noun",norwegian:"pronomen",english:"pronoun",gender:"et",plural:{indefinite:"pronomen",definite:"pronomenene"},level:"A1",pronunciation:"audio/pronomen.mp3",example:{no:"Pronomen brukes i stedet for substantiv.",en:"Pronouns are used instead of nouns."},id:"0n5"},{type:"noun",norwegian:"preposisjon",english:"preposition",gender:"en",plural:{indefinite:"preposisjoner",definite:"preposisjonene"},level:"A1",pronunciation:"audio/preposisjon.mp3",example:{no:"Preposisjoner viser forhold.",en:"Prepositions show relationships."},id:"0n6"}],F1={key:0},j1={class:"input-group"},V1=["disabled"],$1={key:0,class:"feedback"},B1=Ca({__name:"Review",setup(t){const e=$e(["0"]),n=$e(["0n1","0n2","0n3","0n4","0n5"]),s=M1(U1,e.value,n.value),i=$e(0),o=$e(""),a=$e(!1),c=$e(""),u=$e(!1),f=$e(!1),d=$e(null),g=at(()=>s.value?.[i.value]??null);function v(){const k=g.value;if(!k)return;const L=o.value.trim().toLowerCase()===k.answer.toLowerCase();f.value=L,L?c.value="✅ Riktig!":(c.value=`❌ Feil. Riktig svar er "${k.answer}".`,s.value.push({...k})),a.value=!0,u.value=!0,Js(()=>{document.querySelector(".review-session")?.focus()})}function A(){a.value=!1,o.value="",u.value=!1,f.value=!1,i.value<s.value.length-1?i.value++:(alert("Økten er ferdig!"),i.value=0),Js(()=>d.value?.focus())}return Zs(i,()=>{Js(()=>d.value?.focus())}),Ei(()=>{d.value?.focus()}),(k,L)=>(ke(),Ne("div",{class:"review-session",onKeyup:L[2]||(L[2]=Bm(Vm(B=>u.value?A():v(),["prevent"]),["enter"])),tabindex:"0"},[L[4]||(L[4]=U("h2",null,"Gjennomgang",-1)),lt(s).length&&g.value?(ke(),Ne("div",F1,[U("p",null,[L[3]||(L[3]=U("strong",null,"Oversett:",-1)),pi(" "+be(g.value.prompt),1)]),U("div",j1,[sg(U("input",{ref_key:"inputRef",ref:d,"onUpdate:modelValue":L[0]||(L[0]=B=>o.value=B),class:Dr({correct:u.value&&f.value,incorrect:u.value&&!f.value}),disabled:u.value,placeholder:"Ditt svar"},null,10,V1),[[Um,o.value]]),U("button",{onClick:L[1]||(L[1]=B=>u.value?A():v())},be(u.value?"Neste":"Sjekk"),1)]),De(of,{name:"fade"},{default:Ur(()=>[a.value?(ke(),Ne("div",$1,[U("p",null,be(c.value),1)])):gr("",!0)]),_:1})])):gr("",!0)],32))}}),H1=Dn(B1,[["__scopeId","data-v-a291bebe"]]),W1=[{path:"/",component:i1},{path:"/login",component:d1},{path:"/dashboard",component:I1},{path:"/privacy",component:k1},{path:"/account",component:L1},{path:"/review",component:H1}],G1=Jv({history:Tv("/"),routes:W1});Gm(t1).use(G1).mount("#app");
