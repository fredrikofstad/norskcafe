(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ko(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ie={},ii=[],Nt=()=>{},Xd=()=>!1,fr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Jo=t=>t.startsWith("onUpdate:"),Ve=Object.assign,Xo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Yd=Object.prototype.hasOwnProperty,_e=(t,e)=>Yd.call(t,e),ne=Array.isArray,si=t=>dr(t)==="[object Map]",Cu=t=>dr(t)==="[object Set]",se=t=>typeof t=="function",Pe=t=>typeof t=="string",wn=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",Ru=t=>(Se(t)||se(t))&&se(t.then)&&se(t.catch),Pu=Object.prototype.toString,dr=t=>Pu.call(t),Qd=t=>dr(t).slice(8,-1),Ou=t=>dr(t)==="[object Object]",Yo=t=>Pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Li=Ko(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zd=/-(\w)/g,lt=pr(t=>t.replace(Zd,(e,n)=>n?n.toUpperCase():"")),ep=/\B([A-Z])/g,Gn=pr(t=>t.replace(ep,"-$1").toLowerCase()),gr=pr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Yr=pr(t=>t?`on${gr(t)}`:""),mn=(t,e)=>!Object.is(t,e),Qr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},bo=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},tp=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Nc;const mr=()=>Nc||(Nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qo(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Pe(i)?rp(i):Qo(i);if(s)for(const o in s)e[o]=s[o]}return e}else if(Pe(t)||Se(t))return t}const np=/;(?![^(]*\))/g,ip=/:([^]+)/,sp=/\/\*[^]*?\*\//g;function rp(t){const e={};return t.replace(sp,"").split(np).forEach(n=>{if(n){const i=n.split(ip);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Zo(t){let e="";if(Pe(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const i=Zo(t[n]);i&&(e+=i+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const op="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ap=Ko(op);function ku(t){return!!t||t===""}const Nu=t=>!!(t&&t.__v_isRef===!0),Du=t=>Pe(t)?t:t==null?"":ne(t)||Se(t)&&(t.toString===Pu||!se(t.toString))?Nu(t)?Du(t.value):JSON.stringify(t,xu,2):String(t),xu=(t,e)=>Nu(e)?xu(t,e.value):si(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],o)=>(n[Zr(i,o)+" =>"]=s,n),{})}:Cu(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Zr(n))}:wn(e)?Zr(e):Se(e)&&!ne(e)&&!Ou(e)?String(e):e,Zr=(t,e="")=>{var n;return wn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xe;class cp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Xe,!e&&Xe&&(this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Xe;try{return Xe=this,e()}finally{Xe=n}}}on(){++this._on===1&&(this.prevScope=Xe,Xe=this)}off(){this._on>0&&--this._on===0&&(Xe=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function lp(){return Xe}let we;const eo=new WeakSet;class Mu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xe&&Xe.active&&Xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,eo.has(this)&&(eo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Uu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Dc(this),Fu(this);const e=we,n=_t;we=this,_t=!0;try{return this.fn()}finally{ju(this),we=e,_t=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)na(e);this.deps=this.depsTail=void 0,Dc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?eo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Eo(this)&&this.run()}get dirty(){return Eo(this)}}let Lu=0,Ui,Fi;function Uu(t,e=!1){if(t.flags|=8,e){t.next=Fi,Fi=t;return}t.next=Ui,Ui=t}function ea(){Lu++}function ta(){if(--Lu>0)return;if(Fi){let e=Fi;for(Fi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ui;){let e=Ui;for(Ui=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Fu(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ju(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),na(i),up(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Eo(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Vu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Vu(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Qi)||(t.globalVersion=Qi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Eo(t))))return;t.flags|=2;const e=t.dep,n=we,i=_t;we=t,_t=!0;try{Fu(t);const s=t.fn(t._value);(e.version===0||mn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{we=n,_t=i,ju(t),t.flags&=-3}}function na(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)na(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function up(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let _t=!0;const $u=[];function Jt(){$u.push(_t),_t=!1}function Xt(){const t=$u.pop();_t=t===void 0?!0:t}function Dc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=we;we=void 0;try{e()}finally{we=n}}}let Qi=0;class hp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ia{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!we||!_t||we===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==we)n=this.activeLink=new hp(we,this),we.deps?(n.prevDep=we.depsTail,we.depsTail.nextDep=n,we.depsTail=n):we.deps=we.depsTail=n,Bu(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=we.depsTail,n.nextDep=void 0,we.depsTail.nextDep=n,we.depsTail=n,we.deps===n&&(we.deps=i)}return n}trigger(e){this.version++,Qi++,this.notify(e)}notify(e){ea();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ta()}}}function Bu(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Bu(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const To=new WeakMap,Dn=Symbol(""),So=Symbol(""),Zi=Symbol("");function Fe(t,e,n){if(_t&&we){let i=To.get(t);i||To.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new ia),s.map=i,s.key=n),s.track()}}function Wt(t,e,n,i,s,o){const a=To.get(t);if(!a){Qi++;return}const l=h=>{h&&h.trigger()};if(ea(),e==="clear")a.forEach(l);else{const h=ne(t),d=h&&Yo(n);if(h&&n==="length"){const p=Number(i);a.forEach((m,v)=>{(v==="length"||v===Zi||!wn(v)&&v>=p)&&l(m)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),d&&l(a.get(Zi)),e){case"add":h?d&&l(a.get("length")):(l(a.get(Dn)),si(t)&&l(a.get(So)));break;case"delete":h||(l(a.get(Dn)),si(t)&&l(a.get(So)));break;case"set":si(t)&&l(a.get(Dn));break}}ta()}function ei(t){const e=me(t);return e===t?e:(Fe(e,"iterate",Zi),yt(t)?e:e.map(ze))}function sa(t){return Fe(t=me(t),"iterate",Zi),t}const fp={__proto__:null,[Symbol.iterator](){return to(this,Symbol.iterator,ze)},concat(...t){return ei(this).concat(...t.map(e=>ne(e)?ei(e):e))},entries(){return to(this,"entries",t=>(t[1]=ze(t[1]),t))},every(t,e){return Vt(this,"every",t,e,void 0,arguments)},filter(t,e){return Vt(this,"filter",t,e,n=>n.map(ze),arguments)},find(t,e){return Vt(this,"find",t,e,ze,arguments)},findIndex(t,e){return Vt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Vt(this,"findLast",t,e,ze,arguments)},findLastIndex(t,e){return Vt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Vt(this,"forEach",t,e,void 0,arguments)},includes(...t){return no(this,"includes",t)},indexOf(...t){return no(this,"indexOf",t)},join(t){return ei(this).join(t)},lastIndexOf(...t){return no(this,"lastIndexOf",t)},map(t,e){return Vt(this,"map",t,e,void 0,arguments)},pop(){return Ni(this,"pop")},push(...t){return Ni(this,"push",t)},reduce(t,...e){return xc(this,"reduce",t,e)},reduceRight(t,...e){return xc(this,"reduceRight",t,e)},shift(){return Ni(this,"shift")},some(t,e){return Vt(this,"some",t,e,void 0,arguments)},splice(...t){return Ni(this,"splice",t)},toReversed(){return ei(this).toReversed()},toSorted(t){return ei(this).toSorted(t)},toSpliced(...t){return ei(this).toSpliced(...t)},unshift(...t){return Ni(this,"unshift",t)},values(){return to(this,"values",ze)}};function to(t,e,n){const i=sa(t),s=i[e]();return i!==t&&!yt(t)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=n(o.value)),o}),s}const dp=Array.prototype;function Vt(t,e,n,i,s,o){const a=sa(t),l=a!==t&&!yt(t),h=a[e];if(h!==dp[e]){const m=h.apply(t,o);return l?ze(m):m}let d=n;a!==t&&(l?d=function(m,v){return n.call(this,ze(m),v,t)}:n.length>2&&(d=function(m,v){return n.call(this,m,v,t)}));const p=h.call(a,d,i);return l&&s?s(p):p}function xc(t,e,n,i){const s=sa(t);let o=n;return s!==t&&(yt(t)?n.length>3&&(o=function(a,l,h){return n.call(this,a,l,h,t)}):o=function(a,l,h){return n.call(this,a,ze(l),h,t)}),s[e](o,...i)}function no(t,e,n){const i=me(t);Fe(i,"iterate",Zi);const s=i[e](...n);return(s===-1||s===!1)&&aa(n[0])?(n[0]=me(n[0]),i[e](...n)):s}function Ni(t,e,n=[]){Jt(),ea();const i=me(t)[e].apply(t,n);return ta(),Xt(),i}const pp=Ko("__proto__,__v_isRef,__isVue"),Hu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(wn));function gp(t){wn(t)||(t=String(t));const e=me(this);return Fe(e,"has",t),e.hasOwnProperty(t)}class Wu{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(s?o?Sp:Ku:o?qu:Gu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=ne(e);if(!s){let h;if(a&&(h=fp[n]))return h;if(n==="hasOwnProperty")return gp}const l=Reflect.get(e,n,je(e)?e:i);return(wn(n)?Hu.has(n):pp(n))||(s||Fe(e,"get",n),o)?l:je(l)?a&&Yo(n)?l:l.value:Se(l)?s?Xu(l):_r(l):l}}class zu extends Wu{constructor(e=!1){super(!1,e)}set(e,n,i,s){let o=e[n];if(!this._isShallow){const h=Fn(o);if(!yt(i)&&!Fn(i)&&(o=me(o),i=me(i)),!ne(e)&&je(o)&&!je(i))return h?!1:(o.value=i,!0)}const a=ne(e)&&Yo(n)?Number(n)<e.length:_e(e,n),l=Reflect.set(e,n,i,je(e)?e:s);return e===me(s)&&(a?mn(i,o)&&Wt(e,"set",n,i):Wt(e,"add",n,i)),l}deleteProperty(e,n){const i=_e(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Wt(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!wn(n)||!Hu.has(n))&&Fe(e,"has",n),i}ownKeys(e){return Fe(e,"iterate",ne(e)?"length":Dn),Reflect.ownKeys(e)}}class mp extends Wu{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const _p=new zu,yp=new mp,vp=new zu(!0);const Ao=t=>t,Os=t=>Reflect.getPrototypeOf(t);function wp(t,e,n){return function(...i){const s=this.__v_raw,o=me(s),a=si(o),l=t==="entries"||t===Symbol.iterator&&a,h=t==="keys"&&a,d=s[t](...i),p=n?Ao:e?Co:ze;return!e&&Fe(o,"iterate",h?So:Dn),{next(){const{value:m,done:v}=d.next();return v?{value:m,done:v}:{value:l?[p(m[0]),p(m[1])]:p(m),done:v}},[Symbol.iterator](){return this}}}}function ks(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ip(t,e){const n={get(s){const o=this.__v_raw,a=me(o),l=me(s);t||(mn(s,l)&&Fe(a,"get",s),Fe(a,"get",l));const{has:h}=Os(a),d=e?Ao:t?Co:ze;if(h.call(a,s))return d(o.get(s));if(h.call(a,l))return d(o.get(l));o!==a&&o.get(s)},get size(){const s=this.__v_raw;return!t&&Fe(me(s),"iterate",Dn),Reflect.get(s,"size",s)},has(s){const o=this.__v_raw,a=me(o),l=me(s);return t||(mn(s,l)&&Fe(a,"has",s),Fe(a,"has",l)),s===l?o.has(s):o.has(s)||o.has(l)},forEach(s,o){const a=this,l=a.__v_raw,h=me(l),d=e?Ao:t?Co:ze;return!t&&Fe(h,"iterate",Dn),l.forEach((p,m)=>s.call(o,d(p),d(m),a))}};return Ve(n,t?{add:ks("add"),set:ks("set"),delete:ks("delete"),clear:ks("clear")}:{add(s){!e&&!yt(s)&&!Fn(s)&&(s=me(s));const o=me(this);return Os(o).has.call(o,s)||(o.add(s),Wt(o,"add",s,s)),this},set(s,o){!e&&!yt(o)&&!Fn(o)&&(o=me(o));const a=me(this),{has:l,get:h}=Os(a);let d=l.call(a,s);d||(s=me(s),d=l.call(a,s));const p=h.call(a,s);return a.set(s,o),d?mn(o,p)&&Wt(a,"set",s,o):Wt(a,"add",s,o),this},delete(s){const o=me(this),{has:a,get:l}=Os(o);let h=a.call(o,s);h||(s=me(s),h=a.call(o,s)),l&&l.call(o,s);const d=o.delete(s);return h&&Wt(o,"delete",s,void 0),d},clear(){const s=me(this),o=s.size!==0,a=s.clear();return o&&Wt(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=wp(s,t,e)}),n}function ra(t,e){const n=Ip(t,e);return(i,s,o)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(_e(n,s)&&s in i?n:i,s,o)}const bp={get:ra(!1,!1)},Ep={get:ra(!1,!0)},Tp={get:ra(!0,!1)};const Gu=new WeakMap,qu=new WeakMap,Ku=new WeakMap,Sp=new WeakMap;function Ap(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cp(t){return t.__v_skip||!Object.isExtensible(t)?0:Ap(Qd(t))}function _r(t){return Fn(t)?t:oa(t,!1,_p,bp,Gu)}function Ju(t){return oa(t,!1,vp,Ep,qu)}function Xu(t){return oa(t,!0,yp,Tp,Ku)}function oa(t,e,n,i,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=Cp(t);if(o===0)return t;const a=s.get(t);if(a)return a;const l=new Proxy(t,o===2?i:n);return s.set(t,l),l}function ji(t){return Fn(t)?ji(t.__v_raw):!!(t&&t.__v_isReactive)}function Fn(t){return!!(t&&t.__v_isReadonly)}function yt(t){return!!(t&&t.__v_isShallow)}function aa(t){return t?!!t.__v_raw:!1}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function Rp(t){return!_e(t,"__v_skip")&&Object.isExtensible(t)&&bo(t,"__v_skip",!0),t}const ze=t=>Se(t)?_r(t):t,Co=t=>Se(t)?Xu(t):t;function je(t){return t?t.__v_isRef===!0:!1}function Yu(t){return Zu(t,!1)}function Qu(t){return Zu(t,!0)}function Zu(t,e){return je(t)?t:new Pp(t,e)}class Pp{constructor(e,n){this.dep=new ia,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:me(e),this._value=n?e:ze(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||yt(e)||Fn(e);e=i?e:me(e),mn(e,n)&&(this._rawValue=e,this._value=i?e:ze(e),this.dep.trigger())}}function xn(t){return je(t)?t.value:t}const Op={get:(t,e,n)=>e==="__v_raw"?t:xn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return je(s)&&!je(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function eh(t){return ji(t)?t:new Proxy(t,Op)}class kp{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ia(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&we!==this)return Uu(this,!0),!0}get value(){const e=this.dep.track();return Vu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Np(t,e,n=!1){let i,s;return se(t)?i=t:(i=t.get,s=t.set),new kp(i,s,n)}const Ns={},Ks=new WeakMap;let Cn;function Dp(t,e=!1,n=Cn){if(n){let i=Ks.get(n);i||Ks.set(n,i=[]),i.push(t)}}function xp(t,e,n=Ie){const{immediate:i,deep:s,once:o,scheduler:a,augmentJob:l,call:h}=n,d=z=>s?z:yt(z)||s===!1||s===0?fn(z,1):fn(z);let p,m,v,S,x=!1,L=!1;if(je(t)?(m=()=>t.value,x=yt(t)):ji(t)?(m=()=>d(t),x=!0):ne(t)?(L=!0,x=t.some(z=>ji(z)||yt(z)),m=()=>t.map(z=>{if(je(z))return z.value;if(ji(z))return d(z);if(se(z))return h?h(z,2):z()})):se(t)?e?m=h?()=>h(t,2):t:m=()=>{if(v){Jt();try{v()}finally{Xt()}}const z=Cn;Cn=p;try{return h?h(t,3,[S]):t(S)}finally{Cn=z}}:m=Nt,e&&s){const z=m,oe=s===!0?1/0:s;m=()=>fn(z(),oe)}const G=lp(),K=()=>{p.stop(),G&&G.active&&Xo(G.effects,p)};if(o&&e){const z=e;e=(...oe)=>{z(...oe),K()}}let B=L?new Array(t.length).fill(Ns):Ns;const W=z=>{if(!(!(p.flags&1)||!p.dirty&&!z))if(e){const oe=p.run();if(s||x||(L?oe.some((fe,b)=>mn(fe,B[b])):mn(oe,B))){v&&v();const fe=Cn;Cn=p;try{const b=[oe,B===Ns?void 0:L&&B[0]===Ns?[]:B,S];B=oe,h?h(e,3,b):e(...b)}finally{Cn=fe}}}else p.run()};return l&&l(W),p=new Mu(m),p.scheduler=a?()=>a(W,!1):W,S=z=>Dp(z,!1,p),v=p.onStop=()=>{const z=Ks.get(p);if(z){if(h)h(z,4);else for(const oe of z)oe();Ks.delete(p)}},e?i?W(!0):B=p.run():a?a(W.bind(null,!0),!0):p.run(),K.pause=p.pause.bind(p),K.resume=p.resume.bind(p),K.stop=K,K}function fn(t,e=1/0,n){if(e<=0||!Se(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,je(t))fn(t.value,e,n);else if(ne(t))for(let i=0;i<t.length;i++)fn(t[i],e,n);else if(Cu(t)||si(t))t.forEach(i=>{fn(i,e,n)});else if(Ou(t)){for(const i in t)fn(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&fn(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cs(t,e,n,i){try{return i?t(...i):t()}catch(s){yr(s,e,n)}}function Mt(t,e,n,i){if(se(t)){const s=cs(t,e,n,i);return s&&Ru(s)&&s.catch(o=>{yr(o,e,n)}),s}if(ne(t)){const s=[];for(let o=0;o<t.length;o++)s.push(Mt(t[o],e,n,i));return s}}function yr(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ie;if(e){let l=e.parent;const h=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const p=l.ec;if(p){for(let m=0;m<p.length;m++)if(p[m](t,h,d)===!1)return}l=l.parent}if(o){Jt(),cs(o,null,10,[t,h,d]),Xt();return}}Mp(t,n,s,i,a)}function Mp(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const Ge=[];let At=-1;const ri=[];let ln=null,ti=0;const th=Promise.resolve();let Js=null;function nh(t){const e=Js||th;return t?e.then(this?t.bind(this):t):e}function Lp(t){let e=At+1,n=Ge.length;for(;e<n;){const i=e+n>>>1,s=Ge[i],o=es(s);o<t||o===t&&s.flags&2?e=i+1:n=i}return e}function ca(t){if(!(t.flags&1)){const e=es(t),n=Ge[Ge.length-1];!n||!(t.flags&2)&&e>=es(n)?Ge.push(t):Ge.splice(Lp(e),0,t),t.flags|=1,ih()}}function ih(){Js||(Js=th.then(rh))}function Up(t){ne(t)?ri.push(...t):ln&&t.id===-1?ln.splice(ti+1,0,t):t.flags&1||(ri.push(t),t.flags|=1),ih()}function Mc(t,e,n=At+1){for(;n<Ge.length;n++){const i=Ge[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Ge.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function sh(t){if(ri.length){const e=[...new Set(ri)].sort((n,i)=>es(n)-es(i));if(ri.length=0,ln){ln.push(...e);return}for(ln=e,ti=0;ti<ln.length;ti++){const n=ln[ti];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ln=null,ti=0}}const es=t=>t.id==null?t.flags&2?-1:1/0:t.id;function rh(t){try{for(At=0;At<Ge.length;At++){const e=Ge[At];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),cs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;At<Ge.length;At++){const e=Ge[At];e&&(e.flags&=-2)}At=-1,Ge.length=0,sh(),Js=null,(Ge.length||ri.length)&&rh()}}let at=null,oh=null;function Xs(t){const e=at;return at=t,oh=t&&t.type.__scopeId||null,e}function Fp(t,e=at,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&zc(-1);const o=Xs(e);let a;try{a=t(...s)}finally{Xs(o),i._d&&zc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Sn(t,e,n,i){const s=t.dirs,o=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];o&&(l.oldValue=o[a].value);let h=l.dir[i];h&&(Jt(),Mt(h,n,8,[t.el,l,t,e]),Xt())}}const jp=Symbol("_vte"),Vp=t=>t.__isTeleport;function la(t,e){t.shapeFlag&6&&t.component?(t.transition=e,la(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ah(t,e){return se(t)?Ve({name:t.name},e,{setup:t}):t}function ch(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Vi(t,e,n,i,s=!1){if(ne(t)){t.forEach((x,L)=>Vi(x,e&&(ne(e)?e[L]:e),n,i,s));return}if($i(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Vi(t,e,n,i.component.subTree);return}const o=i.shapeFlag&4?pa(i.component):i.el,a=s?null:o,{i:l,r:h}=t,d=e&&e.r,p=l.refs===Ie?l.refs={}:l.refs,m=l.setupState,v=me(m),S=m===Ie?()=>!1:x=>_e(v,x);if(d!=null&&d!==h&&(Pe(d)?(p[d]=null,S(d)&&(m[d]=null)):je(d)&&(d.value=null)),se(h))cs(h,l,12,[a,p]);else{const x=Pe(h),L=je(h);if(x||L){const G=()=>{if(t.f){const K=x?S(h)?m[h]:p[h]:h.value;s?ne(K)&&Xo(K,o):ne(K)?K.includes(o)||K.push(o):x?(p[h]=[o],S(h)&&(m[h]=p[h])):(h.value=[o],t.k&&(p[t.k]=h.value))}else x?(p[h]=a,S(h)&&(m[h]=a)):L&&(h.value=a,t.k&&(p[t.k]=a))};a?(G.id=-1,Ze(G,n)):G()}}}mr().requestIdleCallback;mr().cancelIdleCallback;const $i=t=>!!t.type.__asyncLoader,lh=t=>t.type.__isKeepAlive;function $p(t,e){uh(t,"a",e)}function Bp(t,e){uh(t,"da",e)}function uh(t,e,n=xe){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(vr(e,i,n),n){let s=n.parent;for(;s&&s.parent;)lh(s.parent.vnode)&&Hp(i,e,n,s),s=s.parent}}function Hp(t,e,n,i){const s=vr(e,t,i,!0);hh(()=>{Xo(i[e],s)},n)}function vr(t,e,n=xe,i=!1){if(n){const s=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{Jt();const l=ls(n),h=Mt(e,n,t,a);return l(),Xt(),h});return i?s.unshift(o):s.push(o),o}}const Zt=t=>(e,n=xe)=>{(!ns||t==="sp")&&vr(t,(...i)=>e(...i),n)},Wp=Zt("bm"),ua=Zt("m"),zp=Zt("bu"),Gp=Zt("u"),qp=Zt("bum"),hh=Zt("um"),Kp=Zt("sp"),Jp=Zt("rtg"),Xp=Zt("rtc");function Yp(t,e=xe){vr("ec",t,e)}const Qp="components";function Zp(t,e){return tg(Qp,t,!0,e)||t}const eg=Symbol.for("v-ndc");function tg(t,e,n=!0,i=!1){const s=at||xe;if(s){const o=s.type;{const l=zg(o,!1);if(l&&(l===e||l===lt(e)||l===gr(lt(e))))return o}const a=Lc(s[t]||o[t],e)||Lc(s.appContext[t],e);return!a&&i?o:a}}function Lc(t,e){return t&&(t[e]||t[lt(e)]||t[gr(lt(e))])}const Ro=t=>t?Oh(t)?pa(t):Ro(t.parent):null,Bi=Ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ro(t.parent),$root:t=>Ro(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>dh(t),$forceUpdate:t=>t.f||(t.f=()=>{ca(t.update)}),$nextTick:t=>t.n||(t.n=nh.bind(t.proxy)),$watch:t=>bg.bind(t)}),io=(t,e)=>t!==Ie&&!t.__isScriptSetup&&_e(t,e),ng={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:o,accessCache:a,type:l,appContext:h}=t;let d;if(e[0]!=="$"){const S=a[e];if(S!==void 0)switch(S){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return o[e]}else{if(io(i,e))return a[e]=1,i[e];if(s!==Ie&&_e(s,e))return a[e]=2,s[e];if((d=t.propsOptions[0])&&_e(d,e))return a[e]=3,o[e];if(n!==Ie&&_e(n,e))return a[e]=4,n[e];Po&&(a[e]=0)}}const p=Bi[e];let m,v;if(p)return e==="$attrs"&&Fe(t.attrs,"get",""),p(t);if((m=l.__cssModules)&&(m=m[e]))return m;if(n!==Ie&&_e(n,e))return a[e]=4,n[e];if(v=h.config.globalProperties,_e(v,e))return v[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:o}=t;return io(s,e)?(s[e]=n,!0):i!==Ie&&_e(i,e)?(i[e]=n,!0):_e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let l;return!!n[a]||t!==Ie&&_e(t,a)||io(e,a)||(l=o[0])&&_e(l,a)||_e(i,a)||_e(Bi,a)||_e(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Uc(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Po=!0;function ig(t){const e=dh(t),n=t.proxy,i=t.ctx;Po=!1,e.beforeCreate&&Fc(e.beforeCreate,t,"bc");const{data:s,computed:o,methods:a,watch:l,provide:h,inject:d,created:p,beforeMount:m,mounted:v,beforeUpdate:S,updated:x,activated:L,deactivated:G,beforeDestroy:K,beforeUnmount:B,destroyed:W,unmounted:z,render:oe,renderTracked:fe,renderTriggered:b,errorCaptured:_,serverPrefetch:I,expose:E,inheritAttrs:T,components:C,directives:w,filters:$e}=e;if(d&&sg(d,i,null),a)for(const ae in a){const re=a[ae];se(re)&&(i[ae]=re.bind(n))}if(s){const ae=s.call(n,n);Se(ae)&&(t.data=_r(ae))}if(Po=!0,o)for(const ae in o){const re=o[ae],Qe=se(re)?re.bind(n,n):se(re.get)?re.get.bind(n,n):Nt,ut=!se(re)&&se(re.set)?re.set.bind(n):Nt,it=dt({get:Qe,set:ut});Object.defineProperty(i,ae,{enumerable:!0,configurable:!0,get:()=>it.value,set:Ee=>it.value=Ee})}if(l)for(const ae in l)fh(l[ae],i,n,ae);if(h){const ae=se(h)?h.call(n):h;Reflect.ownKeys(ae).forEach(re=>{Fs(re,ae[re])})}p&&Fc(p,t,"c");function Ce(ae,re){ne(re)?re.forEach(Qe=>ae(Qe.bind(n))):re&&ae(re.bind(n))}if(Ce(Wp,m),Ce(ua,v),Ce(zp,S),Ce(Gp,x),Ce($p,L),Ce(Bp,G),Ce(Yp,_),Ce(Xp,fe),Ce(Jp,b),Ce(qp,B),Ce(hh,z),Ce(Kp,I),ne(E))if(E.length){const ae=t.exposed||(t.exposed={});E.forEach(re=>{Object.defineProperty(ae,re,{get:()=>n[re],set:Qe=>n[re]=Qe})})}else t.exposed||(t.exposed={});oe&&t.render===Nt&&(t.render=oe),T!=null&&(t.inheritAttrs=T),C&&(t.components=C),w&&(t.directives=w),I&&ch(t)}function sg(t,e,n=Nt){ne(t)&&(t=Oo(t));for(const i in t){const s=t[i];let o;Se(s)?"default"in s?o=Dt(s.from||i,s.default,!0):o=Dt(s.from||i):o=Dt(s),je(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Fc(t,e,n){Mt(ne(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function fh(t,e,n,i){let s=i.includes(".")?Ah(n,i):()=>n[i];if(Pe(t)){const o=e[t];se(o)&&js(s,o)}else if(se(t))js(s,t.bind(n));else if(Se(t))if(ne(t))t.forEach(o=>fh(o,e,n,i));else{const o=se(t.handler)?t.handler.bind(n):e[t.handler];se(o)&&js(s,o,t)}}function dh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,l=o.get(e);let h;return l?h=l:!s.length&&!n&&!i?h=e:(h={},s.length&&s.forEach(d=>Ys(h,d,a,!0)),Ys(h,e,a)),Se(e)&&o.set(e,h),h}function Ys(t,e,n,i=!1){const{mixins:s,extends:o}=e;o&&Ys(t,o,n,!0),s&&s.forEach(a=>Ys(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const l=rg[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const rg={data:jc,props:Vc,emits:Vc,methods:Mi,computed:Mi,beforeCreate:He,created:He,beforeMount:He,mounted:He,beforeUpdate:He,updated:He,beforeDestroy:He,beforeUnmount:He,destroyed:He,unmounted:He,activated:He,deactivated:He,errorCaptured:He,serverPrefetch:He,components:Mi,directives:Mi,watch:ag,provide:jc,inject:og};function jc(t,e){return e?t?function(){return Ve(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function og(t,e){return Mi(Oo(t),Oo(e))}function Oo(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function He(t,e){return t?[...new Set([].concat(t,e))]:e}function Mi(t,e){return t?Ve(Object.create(null),t,e):e}function Vc(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:Ve(Object.create(null),Uc(t),Uc(e??{})):e}function ag(t,e){if(!t)return e;if(!e)return t;const n=Ve(Object.create(null),t);for(const i in e)n[i]=He(t[i],e[i]);return n}function ph(){return{app:null,config:{isNativeTag:Xd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cg=0;function lg(t,e){return function(i,s=null){se(i)||(i=Ve({},i)),s!=null&&!Se(s)&&(s=null);const o=ph(),a=new WeakSet,l=[];let h=!1;const d=o.app={_uid:cg++,_component:i,_props:s,_container:null,_context:o,_instance:null,version:qg,get config(){return o.config},set config(p){},use(p,...m){return a.has(p)||(p&&se(p.install)?(a.add(p),p.install(d,...m)):se(p)&&(a.add(p),p(d,...m))),d},mixin(p){return o.mixins.includes(p)||o.mixins.push(p),d},component(p,m){return m?(o.components[p]=m,d):o.components[p]},directive(p,m){return m?(o.directives[p]=m,d):o.directives[p]},mount(p,m,v){if(!h){const S=d._ceVNode||qe(i,s);return S.appContext=o,v===!0?v="svg":v===!1&&(v=void 0),t(S,p,v),h=!0,d._container=p,p.__vue_app__=d,pa(S.component)}},onUnmount(p){l.push(p)},unmount(){h&&(Mt(l,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(p,m){return o.provides[p]=m,d},runWithContext(p){const m=oi;oi=d;try{return p()}finally{oi=m}}};return d}}let oi=null;function Fs(t,e){if(xe){let n=xe.provides;const i=xe.parent&&xe.parent.provides;i===n&&(n=xe.provides=Object.create(i)),n[t]=e}}function Dt(t,e,n=!1){const i=xe||at;if(i||oi){let s=oi?oi._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&se(e)?e.call(i&&i.proxy):e}}const gh={},mh=()=>Object.create(gh),_h=t=>Object.getPrototypeOf(t)===gh;function ug(t,e,n,i=!1){const s={},o=mh();t.propsDefaults=Object.create(null),yh(t,e,s,o);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=i?s:Ju(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function hg(t,e,n,i){const{props:s,attrs:o,vnode:{patchFlag:a}}=t,l=me(s),[h]=t.propsOptions;let d=!1;if((i||a>0)&&!(a&16)){if(a&8){const p=t.vnode.dynamicProps;for(let m=0;m<p.length;m++){let v=p[m];if(wr(t.emitsOptions,v))continue;const S=e[v];if(h)if(_e(o,v))S!==o[v]&&(o[v]=S,d=!0);else{const x=lt(v);s[x]=ko(h,l,x,S,t,!1)}else S!==o[v]&&(o[v]=S,d=!0)}}}else{yh(t,e,s,o)&&(d=!0);let p;for(const m in l)(!e||!_e(e,m)&&((p=Gn(m))===m||!_e(e,p)))&&(h?n&&(n[m]!==void 0||n[p]!==void 0)&&(s[m]=ko(h,l,m,void 0,t,!0)):delete s[m]);if(o!==l)for(const m in o)(!e||!_e(e,m))&&(delete o[m],d=!0)}d&&Wt(t.attrs,"set","")}function yh(t,e,n,i){const[s,o]=t.propsOptions;let a=!1,l;if(e)for(let h in e){if(Li(h))continue;const d=e[h];let p;s&&_e(s,p=lt(h))?!o||!o.includes(p)?n[p]=d:(l||(l={}))[p]=d:wr(t.emitsOptions,h)||(!(h in i)||d!==i[h])&&(i[h]=d,a=!0)}if(o){const h=me(n),d=l||Ie;for(let p=0;p<o.length;p++){const m=o[p];n[m]=ko(s,h,m,d[m],t,!_e(d,m))}}return a}function ko(t,e,n,i,s,o){const a=t[n];if(a!=null){const l=_e(a,"default");if(l&&i===void 0){const h=a.default;if(a.type!==Function&&!a.skipFactory&&se(h)){const{propsDefaults:d}=s;if(n in d)i=d[n];else{const p=ls(s);i=d[n]=h.call(null,e),p()}}else i=h;s.ce&&s.ce._setProp(n,i)}a[0]&&(o&&!l?i=!1:a[1]&&(i===""||i===Gn(n))&&(i=!0))}return i}const fg=new WeakMap;function vh(t,e,n=!1){const i=n?fg:e.propsCache,s=i.get(t);if(s)return s;const o=t.props,a={},l=[];let h=!1;if(!se(t)){const p=m=>{h=!0;const[v,S]=vh(m,e,!0);Ve(a,v),S&&l.push(...S)};!n&&e.mixins.length&&e.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!o&&!h)return Se(t)&&i.set(t,ii),ii;if(ne(o))for(let p=0;p<o.length;p++){const m=lt(o[p]);$c(m)&&(a[m]=Ie)}else if(o)for(const p in o){const m=lt(p);if($c(m)){const v=o[p],S=a[m]=ne(v)||se(v)?{type:v}:Ve({},v),x=S.type;let L=!1,G=!0;if(ne(x))for(let K=0;K<x.length;++K){const B=x[K],W=se(B)&&B.name;if(W==="Boolean"){L=!0;break}else W==="String"&&(G=!1)}else L=se(x)&&x.name==="Boolean";S[0]=L,S[1]=G,(L||_e(S,"default"))&&l.push(m)}}const d=[a,l];return Se(t)&&i.set(t,d),d}function $c(t){return t[0]!=="$"&&!Li(t)}const ha=t=>t[0]==="_"||t==="$stable",fa=t=>ne(t)?t.map(Rt):[Rt(t)],dg=(t,e,n)=>{if(e._n)return e;const i=Fp((...s)=>fa(e(...s)),n);return i._c=!1,i},wh=(t,e,n)=>{const i=t._ctx;for(const s in t){if(ha(s))continue;const o=t[s];if(se(o))e[s]=dg(s,o,i);else if(o!=null){const a=fa(o);e[s]=()=>a}}},Ih=(t,e)=>{const n=fa(e);t.slots.default=()=>n},bh=(t,e,n)=>{for(const i in e)(n||!ha(i))&&(t[i]=e[i])},pg=(t,e,n)=>{const i=t.slots=mh();if(t.vnode.shapeFlag&32){const s=e.__;s&&bo(i,"__",s,!0);const o=e._;o?(bh(i,e,n),n&&bo(i,"_",o,!0)):wh(e,i)}else e&&Ih(t,e)},gg=(t,e,n)=>{const{vnode:i,slots:s}=t;let o=!0,a=Ie;if(i.shapeFlag&32){const l=e._;l?n&&l===1?o=!1:bh(s,e,n):(o=!e.$stable,wh(e,s)),a=e}else e&&(Ih(t,e),a={default:1});if(o)for(const l in s)!ha(l)&&a[l]==null&&delete s[l]},Ze=Pg;function mg(t){return _g(t)}function _g(t,e){const n=mr();n.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:a,createText:l,createComment:h,setText:d,setElementText:p,parentNode:m,nextSibling:v,setScopeId:S=Nt,insertStaticContent:x}=t,L=(g,y,A,k=null,D=null,N=null,$=void 0,F=null,U=!!y.dynamicChildren)=>{if(g===y)return;g&&!Di(g,y)&&(k=O(g),Ee(g,D,N,!0),g=null),y.patchFlag===-2&&(U=!1,y.dynamicChildren=null);const{type:M,ref:Y,shapeFlag:V}=y;switch(M){case Ir:G(g,y,A,k);break;case hi:K(g,y,A,k);break;case Vs:g==null&&B(y,A,k,$);break;case Ht:C(g,y,A,k,D,N,$,F,U);break;default:V&1?oe(g,y,A,k,D,N,$,F,U):V&6?w(g,y,A,k,D,N,$,F,U):(V&64||V&128)&&M.process(g,y,A,k,D,N,$,F,U,J)}Y!=null&&D?Vi(Y,g&&g.ref,N,y||g,!y):Y==null&&g&&g.ref!=null&&Vi(g.ref,null,N,g,!0)},G=(g,y,A,k)=>{if(g==null)i(y.el=l(y.children),A,k);else{const D=y.el=g.el;y.children!==g.children&&d(D,y.children)}},K=(g,y,A,k)=>{g==null?i(y.el=h(y.children||""),A,k):y.el=g.el},B=(g,y,A,k)=>{[g.el,g.anchor]=x(g.children,y,A,k,g.el,g.anchor)},W=({el:g,anchor:y},A,k)=>{let D;for(;g&&g!==y;)D=v(g),i(g,A,k),g=D;i(y,A,k)},z=({el:g,anchor:y})=>{let A;for(;g&&g!==y;)A=v(g),s(g),g=A;s(y)},oe=(g,y,A,k,D,N,$,F,U)=>{y.type==="svg"?$="svg":y.type==="math"&&($="mathml"),g==null?fe(y,A,k,D,N,$,F,U):I(g,y,D,N,$,F,U)},fe=(g,y,A,k,D,N,$,F)=>{let U,M;const{props:Y,shapeFlag:V,transition:X,dirs:ee}=g;if(U=g.el=a(g.type,N,Y&&Y.is,Y),V&8?p(U,g.children):V&16&&_(g.children,U,null,k,D,so(g,N),$,F),ee&&Sn(g,null,k,"created"),b(U,g,g.scopeId,$,k),Y){for(const ie in Y)ie!=="value"&&!Li(ie)&&o(U,ie,null,Y[ie],N,k);"value"in Y&&o(U,"value",null,Y.value,N),(M=Y.onVnodeBeforeMount)&&St(M,k,g)}ee&&Sn(g,null,k,"beforeMount");const Q=yg(D,X);Q&&X.beforeEnter(U),i(U,y,A),((M=Y&&Y.onVnodeMounted)||Q||ee)&&Ze(()=>{M&&St(M,k,g),Q&&X.enter(U),ee&&Sn(g,null,k,"mounted")},D)},b=(g,y,A,k,D)=>{if(A&&S(g,A),k)for(let N=0;N<k.length;N++)S(g,k[N]);if(D){let N=D.subTree;if(y===N||Rh(N.type)&&(N.ssContent===y||N.ssFallback===y)){const $=D.vnode;b(g,$,$.scopeId,$.slotScopeIds,D.parent)}}},_=(g,y,A,k,D,N,$,F,U=0)=>{for(let M=U;M<g.length;M++){const Y=g[M]=F?un(g[M]):Rt(g[M]);L(null,Y,y,A,k,D,N,$,F)}},I=(g,y,A,k,D,N,$)=>{const F=y.el=g.el;let{patchFlag:U,dynamicChildren:M,dirs:Y}=y;U|=g.patchFlag&16;const V=g.props||Ie,X=y.props||Ie;let ee;if(A&&An(A,!1),(ee=X.onVnodeBeforeUpdate)&&St(ee,A,y,g),Y&&Sn(y,g,A,"beforeUpdate"),A&&An(A,!0),(V.innerHTML&&X.innerHTML==null||V.textContent&&X.textContent==null)&&p(F,""),M?E(g.dynamicChildren,M,F,A,k,so(y,D),N):$||re(g,y,F,null,A,k,so(y,D),N,!1),U>0){if(U&16)T(F,V,X,A,D);else if(U&2&&V.class!==X.class&&o(F,"class",null,X.class,D),U&4&&o(F,"style",V.style,X.style,D),U&8){const Q=y.dynamicProps;for(let ie=0;ie<Q.length;ie++){const ce=Q[ie],Oe=V[ce],ke=X[ce];(ke!==Oe||ce==="value")&&o(F,ce,Oe,ke,D,A)}}U&1&&g.children!==y.children&&p(F,y.children)}else!$&&M==null&&T(F,V,X,A,D);((ee=X.onVnodeUpdated)||Y)&&Ze(()=>{ee&&St(ee,A,y,g),Y&&Sn(y,g,A,"updated")},k)},E=(g,y,A,k,D,N,$)=>{for(let F=0;F<y.length;F++){const U=g[F],M=y[F],Y=U.el&&(U.type===Ht||!Di(U,M)||U.shapeFlag&198)?m(U.el):A;L(U,M,Y,null,k,D,N,$,!0)}},T=(g,y,A,k,D)=>{if(y!==A){if(y!==Ie)for(const N in y)!Li(N)&&!(N in A)&&o(g,N,y[N],null,D,k);for(const N in A){if(Li(N))continue;const $=A[N],F=y[N];$!==F&&N!=="value"&&o(g,N,F,$,D,k)}"value"in A&&o(g,"value",y.value,A.value,D)}},C=(g,y,A,k,D,N,$,F,U)=>{const M=y.el=g?g.el:l(""),Y=y.anchor=g?g.anchor:l("");let{patchFlag:V,dynamicChildren:X,slotScopeIds:ee}=y;ee&&(F=F?F.concat(ee):ee),g==null?(i(M,A,k),i(Y,A,k),_(y.children||[],A,Y,D,N,$,F,U)):V>0&&V&64&&X&&g.dynamicChildren?(E(g.dynamicChildren,X,A,D,N,$,F),(y.key!=null||D&&y===D.subTree)&&Eh(g,y,!0)):re(g,y,A,Y,D,N,$,F,U)},w=(g,y,A,k,D,N,$,F,U)=>{y.slotScopeIds=F,g==null?y.shapeFlag&512?D.ctx.activate(y,A,k,$,U):$e(y,A,k,D,N,$,U):nt(g,y,U)},$e=(g,y,A,k,D,N,$)=>{const F=g.component=jg(g,k,D);if(lh(g)&&(F.ctx.renderer=J),$g(F,!1,$),F.asyncDep){if(D&&D.registerDep(F,Ce,$),!g.el){const U=F.subTree=qe(hi);K(null,U,y,A)}}else Ce(F,g,y,A,D,N,$)},nt=(g,y,A)=>{const k=y.component=g.component;if(Cg(g,y,A))if(k.asyncDep&&!k.asyncResolved){ae(k,y,A);return}else k.next=y,k.update();else y.el=g.el,k.vnode=y},Ce=(g,y,A,k,D,N,$)=>{const F=()=>{if(g.isMounted){let{next:V,bu:X,u:ee,parent:Q,vnode:ie}=g;{const Me=Th(g);if(Me){V&&(V.el=ie.el,ae(g,V,$)),Me.asyncDep.then(()=>{g.isUnmounted||F()});return}}let ce=V,Oe;An(g,!1),V?(V.el=ie.el,ae(g,V,$)):V=ie,X&&Qr(X),(Oe=V.props&&V.props.onVnodeBeforeUpdate)&&St(Oe,Q,V,ie),An(g,!0);const ke=Hc(g),st=g.subTree;g.subTree=ke,L(st,ke,m(st.el),O(st),g,D,N),V.el=ke.el,ce===null&&Rg(g,ke.el),ee&&Ze(ee,D),(Oe=V.props&&V.props.onVnodeUpdated)&&Ze(()=>St(Oe,Q,V,ie),D)}else{let V;const{el:X,props:ee}=y,{bm:Q,m:ie,parent:ce,root:Oe,type:ke}=g,st=$i(y);An(g,!1),Q&&Qr(Q),!st&&(V=ee&&ee.onVnodeBeforeMount)&&St(V,ce,y),An(g,!0);{Oe.ce&&Oe.ce._def.shadowRoot!==!1&&Oe.ce._injectChildStyle(ke);const Me=g.subTree=Hc(g);L(null,Me,A,k,g,D,N),y.el=Me.el}if(ie&&Ze(ie,D),!st&&(V=ee&&ee.onVnodeMounted)){const Me=y;Ze(()=>St(V,ce,Me),D)}(y.shapeFlag&256||ce&&$i(ce.vnode)&&ce.vnode.shapeFlag&256)&&g.a&&Ze(g.a,D),g.isMounted=!0,y=A=k=null}};g.scope.on();const U=g.effect=new Mu(F);g.scope.off();const M=g.update=U.run.bind(U),Y=g.job=U.runIfDirty.bind(U);Y.i=g,Y.id=g.uid,U.scheduler=()=>ca(Y),An(g,!0),M()},ae=(g,y,A)=>{y.component=g;const k=g.vnode.props;g.vnode=y,g.next=null,hg(g,y.props,k,A),gg(g,y.children,A),Jt(),Mc(g),Xt()},re=(g,y,A,k,D,N,$,F,U=!1)=>{const M=g&&g.children,Y=g?g.shapeFlag:0,V=y.children,{patchFlag:X,shapeFlag:ee}=y;if(X>0){if(X&128){ut(M,V,A,k,D,N,$,F,U);return}else if(X&256){Qe(M,V,A,k,D,N,$,F,U);return}}ee&8?(Y&16&&Je(M,D,N),V!==M&&p(A,V)):Y&16?ee&16?ut(M,V,A,k,D,N,$,F,U):Je(M,D,N,!0):(Y&8&&p(A,""),ee&16&&_(V,A,k,D,N,$,F,U))},Qe=(g,y,A,k,D,N,$,F,U)=>{g=g||ii,y=y||ii;const M=g.length,Y=y.length,V=Math.min(M,Y);let X;for(X=0;X<V;X++){const ee=y[X]=U?un(y[X]):Rt(y[X]);L(g[X],ee,A,null,D,N,$,F,U)}M>Y?Je(g,D,N,!0,!1,V):_(y,A,k,D,N,$,F,U,V)},ut=(g,y,A,k,D,N,$,F,U)=>{let M=0;const Y=y.length;let V=g.length-1,X=Y-1;for(;M<=V&&M<=X;){const ee=g[M],Q=y[M]=U?un(y[M]):Rt(y[M]);if(Di(ee,Q))L(ee,Q,A,null,D,N,$,F,U);else break;M++}for(;M<=V&&M<=X;){const ee=g[V],Q=y[X]=U?un(y[X]):Rt(y[X]);if(Di(ee,Q))L(ee,Q,A,null,D,N,$,F,U);else break;V--,X--}if(M>V){if(M<=X){const ee=X+1,Q=ee<Y?y[ee].el:k;for(;M<=X;)L(null,y[M]=U?un(y[M]):Rt(y[M]),A,Q,D,N,$,F,U),M++}}else if(M>X)for(;M<=V;)Ee(g[M],D,N,!0),M++;else{const ee=M,Q=M,ie=new Map;for(M=Q;M<=X;M++){const Ne=y[M]=U?un(y[M]):Rt(y[M]);Ne.key!=null&&ie.set(Ne.key,M)}let ce,Oe=0;const ke=X-Q+1;let st=!1,Me=0;const tn=new Array(ke);for(M=0;M<ke;M++)tn[M]=0;for(M=ee;M<=V;M++){const Ne=g[M];if(Oe>=ke){Ee(Ne,D,N,!0);continue}let rt;if(Ne.key!=null)rt=ie.get(Ne.key);else for(ce=Q;ce<=X;ce++)if(tn[ce-Q]===0&&Di(Ne,y[ce])){rt=ce;break}rt===void 0?Ee(Ne,D,N,!0):(tn[rt-Q]=M+1,rt>=Me?Me=rt:st=!0,L(Ne,y[rt],A,null,D,N,$,F,U),Oe++)}const vi=st?vg(tn):ii;for(ce=vi.length-1,M=ke-1;M>=0;M--){const Ne=Q+M,rt=y[Ne],_s=Ne+1<Y?y[Ne+1].el:k;tn[M]===0?L(null,rt,A,_s,D,N,$,F,U):st&&(ce<0||M!==vi[ce]?it(rt,A,_s,2):ce--)}}},it=(g,y,A,k,D=null)=>{const{el:N,type:$,transition:F,children:U,shapeFlag:M}=g;if(M&6){it(g.component.subTree,y,A,k);return}if(M&128){g.suspense.move(y,A,k);return}if(M&64){$.move(g,y,A,J);return}if($===Ht){i(N,y,A);for(let V=0;V<U.length;V++)it(U[V],y,A,k);i(g.anchor,y,A);return}if($===Vs){W(g,y,A);return}if(k!==2&&M&1&&F)if(k===0)F.beforeEnter(N),i(N,y,A),Ze(()=>F.enter(N),D);else{const{leave:V,delayLeave:X,afterLeave:ee}=F,Q=()=>{g.ctx.isUnmounted?s(N):i(N,y,A)},ie=()=>{V(N,()=>{Q(),ee&&ee()})};X?X(N,Q,ie):ie()}else i(N,y,A)},Ee=(g,y,A,k=!1,D=!1)=>{const{type:N,props:$,ref:F,children:U,dynamicChildren:M,shapeFlag:Y,patchFlag:V,dirs:X,cacheIndex:ee}=g;if(V===-2&&(D=!1),F!=null&&(Jt(),Vi(F,null,A,g,!0),Xt()),ee!=null&&(y.renderCache[ee]=void 0),Y&256){y.ctx.deactivate(g);return}const Q=Y&1&&X,ie=!$i(g);let ce;if(ie&&(ce=$&&$.onVnodeBeforeUnmount)&&St(ce,y,g),Y&6)Tt(g.component,A,k);else{if(Y&128){g.suspense.unmount(A,k);return}Q&&Sn(g,null,y,"beforeUnmount"),Y&64?g.type.remove(g,y,A,J,k):M&&!M.hasOnce&&(N!==Ht||V>0&&V&64)?Je(M,y,A,!1,!0):(N===Ht&&V&384||!D&&Y&16)&&Je(U,y,A),k&&Te(g)}(ie&&(ce=$&&$.onVnodeUnmounted)||Q)&&Ze(()=>{ce&&St(ce,y,g),Q&&Sn(g,null,y,"unmounted")},A)},Te=g=>{const{type:y,el:A,anchor:k,transition:D}=g;if(y===Ht){en(A,k);return}if(y===Vs){z(g);return}const N=()=>{s(A),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(g.shapeFlag&1&&D&&!D.persisted){const{leave:$,delayLeave:F}=D,U=()=>$(A,N);F?F(g.el,N,U):U()}else N()},en=(g,y)=>{let A;for(;g!==y;)A=v(g),s(g),g=A;s(y)},Tt=(g,y,A)=>{const{bum:k,scope:D,job:N,subTree:$,um:F,m:U,a:M,parent:Y,slots:{__:V}}=g;Bc(U),Bc(M),k&&Qr(k),Y&&ne(V)&&V.forEach(X=>{Y.renderCache[X]=void 0}),D.stop(),N&&(N.flags|=8,Ee($,g,y,A)),F&&Ze(F,y),Ze(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},Je=(g,y,A,k=!1,D=!1,N=0)=>{for(let $=N;$<g.length;$++)Ee(g[$],y,A,k,D)},O=g=>{if(g.shapeFlag&6)return O(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const y=v(g.anchor||g.el),A=y&&y[jp];return A?v(A):y};let q=!1;const H=(g,y,A)=>{g==null?y._vnode&&Ee(y._vnode,null,null,!0):L(y._vnode||null,g,y,null,null,null,A),y._vnode=g,q||(q=!0,Mc(),sh(),q=!1)},J={p:L,um:Ee,m:it,r:Te,mt:$e,mc:_,pc:re,pbc:E,n:O,o:t};return{render:H,hydrate:void 0,createApp:lg(H)}}function so({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function An({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function yg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Eh(t,e,n=!1){const i=t.children,s=e.children;if(ne(i)&&ne(s))for(let o=0;o<i.length;o++){const a=i[o];let l=s[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[o]=un(s[o]),l.el=a.el),!n&&l.patchFlag!==-2&&Eh(a,l)),l.type===Ir&&(l.el=a.el),l.type===hi&&!l.el&&(l.el=a.el)}}function vg(t){const e=t.slice(),n=[0];let i,s,o,a,l;const h=t.length;for(i=0;i<h;i++){const d=t[i];if(d!==0){if(s=n[n.length-1],t[s]<d){e[i]=s,n.push(i);continue}for(o=0,a=n.length-1;o<a;)l=o+a>>1,t[n[l]]<d?o=l+1:a=l;d<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function Th(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Th(e)}function Bc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const wg=Symbol.for("v-scx"),Ig=()=>Dt(wg);function js(t,e,n){return Sh(t,e,n)}function Sh(t,e,n=Ie){const{immediate:i,deep:s,flush:o,once:a}=n,l=Ve({},n),h=e&&i||!e&&o!=="post";let d;if(ns){if(o==="sync"){const S=Ig();d=S.__watcherHandles||(S.__watcherHandles=[])}else if(!h){const S=()=>{};return S.stop=Nt,S.resume=Nt,S.pause=Nt,S}}const p=xe;l.call=(S,x,L)=>Mt(S,p,x,L);let m=!1;o==="post"?l.scheduler=S=>{Ze(S,p&&p.suspense)}:o!=="sync"&&(m=!0,l.scheduler=(S,x)=>{x?S():ca(S)}),l.augmentJob=S=>{e&&(S.flags|=4),m&&(S.flags|=2,p&&(S.id=p.uid,S.i=p))};const v=xp(t,e,l);return ns&&(d?d.push(v):h&&v()),v}function bg(t,e,n){const i=this.proxy,s=Pe(t)?t.includes(".")?Ah(i,t):()=>i[t]:t.bind(i,i);let o;se(e)?o=e:(o=e.handler,n=e);const a=ls(this),l=Sh(s,o.bind(i),n);return a(),l}function Ah(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const Eg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${lt(e)}Modifiers`]||t[`${Gn(e)}Modifiers`];function Tg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ie;let s=n;const o=e.startsWith("update:"),a=o&&Eg(i,e.slice(7));a&&(a.trim&&(s=n.map(p=>Pe(p)?p.trim():p)),a.number&&(s=n.map(tp)));let l,h=i[l=Yr(e)]||i[l=Yr(lt(e))];!h&&o&&(h=i[l=Yr(Gn(e))]),h&&Mt(h,t,6,s);const d=i[l+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Mt(d,t,6,s)}}function Ch(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const o=t.emits;let a={},l=!1;if(!se(t)){const h=d=>{const p=Ch(d,e,!0);p&&(l=!0,Ve(a,p))};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}return!o&&!l?(Se(t)&&i.set(t,null),null):(ne(o)?o.forEach(h=>a[h]=null):Ve(a,o),Se(t)&&i.set(t,a),a)}function wr(t,e){return!t||!fr(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(t,e[0].toLowerCase()+e.slice(1))||_e(t,Gn(e))||_e(t,e))}function Hc(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[o],slots:a,attrs:l,emit:h,render:d,renderCache:p,props:m,data:v,setupState:S,ctx:x,inheritAttrs:L}=t,G=Xs(t);let K,B;try{if(n.shapeFlag&4){const z=s||i,oe=z;K=Rt(d.call(oe,z,p,m,S,v,x)),B=l}else{const z=e;K=Rt(z.length>1?z(m,{attrs:l,slots:a,emit:h}):z(m,null)),B=e.props?l:Sg(l)}}catch(z){Hi.length=0,yr(z,t,1),K=qe(hi)}let W=K;if(B&&L!==!1){const z=Object.keys(B),{shapeFlag:oe}=W;z.length&&oe&7&&(o&&z.some(Jo)&&(B=Ag(B,o)),W=fi(W,B,!1,!0))}return n.dirs&&(W=fi(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&la(W,n.transition),K=W,Xs(G),K}const Sg=t=>{let e;for(const n in t)(n==="class"||n==="style"||fr(n))&&((e||(e={}))[n]=t[n]);return e},Ag=(t,e)=>{const n={};for(const i in t)(!Jo(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Cg(t,e,n){const{props:i,children:s,component:o}=t,{props:a,children:l,patchFlag:h}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&h>=0){if(h&1024)return!0;if(h&16)return i?Wc(i,a,d):!!a;if(h&8){const p=e.dynamicProps;for(let m=0;m<p.length;m++){const v=p[m];if(a[v]!==i[v]&&!wr(d,v))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===a?!1:i?a?Wc(i,a,d):!0:!!a;return!1}function Wc(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const o=i[s];if(e[o]!==t[o]&&!wr(n,o))return!0}return!1}function Rg({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Rh=t=>t.__isSuspense;function Pg(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):Up(t)}const Ht=Symbol.for("v-fgt"),Ir=Symbol.for("v-txt"),hi=Symbol.for("v-cmt"),Vs=Symbol.for("v-stc"),Hi=[];let et=null;function jn(t=!1){Hi.push(et=t?null:[])}function Og(){Hi.pop(),et=Hi[Hi.length-1]||null}let ts=1;function zc(t,e=!1){ts+=t,t<0&&et&&e&&(et.hasOnce=!0)}function kg(t){return t.dynamicChildren=ts>0?et||ii:null,Og(),ts>0&&et&&et.push(t),t}function Vn(t,e,n,i,s,o){return kg(Z(t,e,n,i,s,o,!0))}function Qs(t){return t?t.__v_isVNode===!0:!1}function Di(t,e){return t.type===e.type&&t.key===e.key}const Ph=({key:t})=>t??null,$s=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Pe(t)||je(t)||se(t)?{i:at,r:t,k:e,f:!!n}:t:null);function Z(t,e=null,n=null,i=0,s=null,o=t===Ht?0:1,a=!1,l=!1){const h={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ph(e),ref:e&&$s(e),scopeId:oh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:at};return l?(da(h,n),o&128&&t.normalize(h)):n&&(h.shapeFlag|=Pe(n)?8:16),ts>0&&!a&&et&&(h.patchFlag>0||o&6)&&h.patchFlag!==32&&et.push(h),h}const qe=Ng;function Ng(t,e=null,n=null,i=0,s=null,o=!1){if((!t||t===eg)&&(t=hi),Qs(t)){const l=fi(t,e,!0);return n&&da(l,n),ts>0&&!o&&et&&(l.shapeFlag&6?et[et.indexOf(t)]=l:et.push(l)),l.patchFlag=-2,l}if(Gg(t)&&(t=t.__vccOpts),e){e=Dg(e);let{class:l,style:h}=e;l&&!Pe(l)&&(e.class=Zo(l)),Se(h)&&(aa(h)&&!ne(h)&&(h=Ve({},h)),e.style=Qo(h))}const a=Pe(t)?1:Rh(t)?128:Vp(t)?64:Se(t)?4:se(t)?2:0;return Z(t,e,n,i,s,a,o,!0)}function Dg(t){return t?aa(t)||_h(t)?Ve({},t):t:null}function fi(t,e,n=!1,i=!1){const{props:s,ref:o,patchFlag:a,children:l,transition:h}=t,d=e?Lg(s||{},e):s,p={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&Ph(d),ref:e&&e.ref?n&&o?ne(o)?o.concat($s(e)):[o,$s(e)]:$s(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ht?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:h,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fi(t.ssContent),ssFallback:t.ssFallback&&fi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return h&&i&&la(p,h.clone(p)),p}function xg(t=" ",e=0){return qe(Ir,null,t,e)}function Mg(t,e){const n=qe(Vs,null,t);return n.staticCount=e,n}function Rt(t){return t==null||typeof t=="boolean"?qe(hi):ne(t)?qe(Ht,null,t.slice()):Qs(t)?un(t):qe(Ir,null,String(t))}function un(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fi(t)}function da(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),da(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!_h(e)?e._ctx=at:s===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:at},n=32):(e=String(e),i&64?(n=16,e=[xg(e)]):n=8);t.children=e,t.shapeFlag|=n}function Lg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Zo([e.class,i.class]));else if(s==="style")e.style=Qo([e.style,i.style]);else if(fr(s)){const o=e[s],a=i[s];a&&o!==a&&!(ne(o)&&o.includes(a))&&(e[s]=o?[].concat(o,a):a)}else s!==""&&(e[s]=i[s])}return e}function St(t,e,n,i=null){Mt(t,e,7,[n,i])}const Ug=ph();let Fg=0;function jg(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Ug,o={uid:Fg++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vh(i,s),emitsOptions:Ch(i,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:i.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Tg.bind(null,o),t.ce&&t.ce(o),o}let xe=null;const Vg=()=>xe||at;let Zs,No;{const t=mr(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),o=>{s.length>1?s.forEach(a=>a(o)):s[0](o)}};Zs=e("__VUE_INSTANCE_SETTERS__",n=>xe=n),No=e("__VUE_SSR_SETTERS__",n=>ns=n)}const ls=t=>{const e=xe;return Zs(t),t.scope.on(),()=>{t.scope.off(),Zs(e)}},Gc=()=>{xe&&xe.scope.off(),Zs(null)};function Oh(t){return t.vnode.shapeFlag&4}let ns=!1;function $g(t,e=!1,n=!1){e&&No(e);const{props:i,children:s}=t.vnode,o=Oh(t);ug(t,i,o,e),pg(t,s,n||e);const a=o?Bg(t,e):void 0;return e&&No(!1),a}function Bg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ng);const{setup:i}=n;if(i){Jt();const s=t.setupContext=i.length>1?Wg(t):null,o=ls(t),a=cs(i,t,0,[t.props,s]),l=Ru(a);if(Xt(),o(),(l||t.sp)&&!$i(t)&&ch(t),l){if(a.then(Gc,Gc),e)return a.then(h=>{qc(t,h)}).catch(h=>{yr(h,t,0)});t.asyncDep=a}else qc(t,a)}else kh(t)}function qc(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=eh(e)),kh(t)}function kh(t,e,n){const i=t.type;t.render||(t.render=i.render||Nt);{const s=ls(t);Jt();try{ig(t)}finally{Xt(),s()}}}const Hg={get(t,e){return Fe(t,"get",""),t[e]}};function Wg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Hg),slots:t.slots,emit:t.emit,expose:e}}function pa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(eh(Rp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bi)return Bi[n](t)},has(e,n){return n in e||n in Bi}})):t.proxy}function zg(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function Gg(t){return se(t)&&"__vccOpts"in t}const dt=(t,e)=>Np(t,e,ns);function Nh(t,e,n){const i=arguments.length;return i===2?Se(e)&&!ne(e)?Qs(e)?qe(t,null,[e]):qe(t,e):qe(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Qs(n)&&(n=[n]),qe(t,e,n))}const qg="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Do;const Kc=typeof window<"u"&&window.trustedTypes;if(Kc)try{Do=Kc.createPolicy("vue",{createHTML:t=>t})}catch{}const Dh=Do?t=>Do.createHTML(t):t=>t,Kg="http://www.w3.org/2000/svg",Jg="http://www.w3.org/1998/Math/MathML",Bt=typeof document<"u"?document:null,Jc=Bt&&Bt.createElement("template"),Xg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Bt.createElementNS(Kg,t):e==="mathml"?Bt.createElementNS(Jg,t):n?Bt.createElement(t,{is:n}):Bt.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Bt.createTextNode(t),createComment:t=>Bt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,o){const a=n?n.previousSibling:e.lastChild;if(s&&(s===o||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{Jc.innerHTML=Dh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const l=Jc.content;if(i==="svg"||i==="mathml"){const h=l.firstChild;for(;h.firstChild;)l.appendChild(h.firstChild);l.removeChild(h)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Yg=Symbol("_vtc");function Qg(t,e,n){const i=t[Yg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Xc=Symbol("_vod"),Zg=Symbol("_vsh"),em=Symbol(""),tm=/(^|;)\s*display\s*:/;function nm(t,e,n){const i=t.style,s=Pe(n);let o=!1;if(n&&!s){if(e)if(Pe(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Bs(i,l,"")}else for(const a in e)n[a]==null&&Bs(i,a,"");for(const a in n)a==="display"&&(o=!0),Bs(i,a,n[a])}else if(s){if(e!==n){const a=i[em];a&&(n+=";"+a),i.cssText=n,o=tm.test(n)}}else e&&t.removeAttribute("style");Xc in t&&(t[Xc]=o?i.display:"",t[Zg]&&(i.display="none"))}const Yc=/\s*!important$/;function Bs(t,e,n){if(ne(n))n.forEach(i=>Bs(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=im(t,e);Yc.test(n)?t.setProperty(Gn(i),n.replace(Yc,""),"important"):t[i]=n}}const Qc=["Webkit","Moz","ms"],ro={};function im(t,e){const n=ro[e];if(n)return n;let i=lt(e);if(i!=="filter"&&i in t)return ro[e]=i;i=gr(i);for(let s=0;s<Qc.length;s++){const o=Qc[s]+i;if(o in t)return ro[e]=o}return e}const Zc="http://www.w3.org/1999/xlink";function el(t,e,n,i,s,o=ap(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Zc,e.slice(6,e.length)):t.setAttributeNS(Zc,e,n):n==null||o&&!ku(n)?t.removeAttribute(e):t.setAttribute(e,o?"":wn(n)?String(n):n)}function tl(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Dh(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?t.getAttribute("value")||"":t.value,h=n==null?t.type==="checkbox"?"on":"":String(n);(l!==h||!("_value"in t))&&(t.value=h),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ku(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function sm(t,e,n,i){t.addEventListener(e,n,i)}function rm(t,e,n,i){t.removeEventListener(e,n,i)}const nl=Symbol("_vei");function om(t,e,n,i,s=null){const o=t[nl]||(t[nl]={}),a=o[e];if(i&&a)a.value=i;else{const[l,h]=am(e);if(i){const d=o[e]=um(i,s);sm(t,l,d,h)}else a&&(rm(t,l,a,h),o[e]=void 0)}}const il=/(?:Once|Passive|Capture)$/;function am(t){let e;if(il.test(t)){e={};let i;for(;i=t.match(il);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Gn(t.slice(2)),e]}let oo=0;const cm=Promise.resolve(),lm=()=>oo||(cm.then(()=>oo=0),oo=Date.now());function um(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Mt(hm(i,n.value),e,5,[i])};return n.value=t,n.attached=lm(),n}function hm(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const sl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,fm=(t,e,n,i,s,o)=>{const a=s==="svg";e==="class"?Qg(t,i,a):e==="style"?nm(t,n,i):fr(e)?Jo(e)||om(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dm(t,e,i,a))?(tl(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&el(t,e,i,a,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Pe(i))?tl(t,lt(e),i,o,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),el(t,e,i,a))};function dm(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&sl(e)&&se(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return sl(e)&&Pe(n)?!1:e in t}const pm=Ve({patchProp:fm},Xg);let rl;function gm(){return rl||(rl=mg(pm))}const mm=(...t)=>{const e=gm().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=ym(i);if(!s)return;const o=e._component;!se(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,_m(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function _m(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ym(t){return Pe(t)?document.querySelector(t):t}var vm=Object.defineProperty,wm=(t,e)=>{for(var n in e)vm(t,n,{get:e[n],enumerable:!0})},Im=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),bm={};wm(bm,{err:()=>xh,map:()=>Em,ok:()=>xo,unwrap:()=>Tm,unwrapErr:()=>Sm});var xo=t=>({isOk:!0,isErr:!1,value:t}),xh=t=>({isOk:!1,isErr:!0,value:t});function Em(t,e){if(t.isOk){const n=e(t.value);return n instanceof Promise?n.then(i=>xo(i)):xo(n)}if(t.isErr){const n=t.value;return xh(n)}throw"should never get here"}var Tm=t=>{if(t.isOk)return t.value;throw t.value},Sm=t=>{if(t.isErr)return t.value;throw t.value},ga=t=>{const e=Im(t);return new RegExp(`(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${e}))(${e}\\b)`,"g")};ga("::slotted");ga(":host");ga(":host-context");/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */class Am{constructor(){this.m=new Map}reset(e){this.m=new Map(Object.entries(e))}get(e,n){const i=this.m.get(e);return i!==void 0?i:n}getBoolean(e,n=!1){const i=this.m.get(e);return i===void 0?n:typeof i=="string"?i==="true":!!i}getNumber(e,n){const i=parseFloat(this.m.get(e));return isNaN(i)?n!==void 0?n:NaN:i}set(e,n){this.m.set(e,n)}}const cn=new Am,Cm=t=>{try{const e=t.sessionStorage.getItem(Mh);return e!==null?JSON.parse(e):{}}catch{return{}}},Rm=(t,e)=>{try{t.sessionStorage.setItem(Mh,JSON.stringify(e))}catch{return}},Pm=t=>{const e={};return t.location.search.slice(1).split("&").map(n=>n.split("=")).map(([n,i])=>{try{return[decodeURIComponent(n),decodeURIComponent(i)]}catch{return["",""]}}).filter(([n])=>Om(n,ol)).map(([n,i])=>[n.slice(ol.length),i]).forEach(([n,i])=>{e[n]=i}),e},Om=(t,e)=>t.substr(0,e.length)===e,ol="ionic:",Mh="ionic-persist-config";var al;(function(t){t.OFF="OFF",t.ERROR="ERROR",t.WARN="WARN"})(al||(al={}));/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const km=t=>Lh(t),Nm=(t,e)=>(typeof t=="string"&&(e=t,t=void 0),km(t).includes(e)),Lh=(t=window)=>{if(typeof t>"u")return[];t.Ionic=t.Ionic||{};let e=t.Ionic.platforms;return e==null&&(e=t.Ionic.platforms=Dm(t),e.forEach(n=>t.document.documentElement.classList.add(`plt-${n}`))),e},Dm=t=>{const e=cn.get("platform");return Object.keys(cl).filter(n=>{const i=e?.[n];return typeof i=="function"?i(t):cl[n](t)})},xm=t=>br(t)&&!Fh(t),ma=t=>!!($n(t,/iPad/i)||$n(t,/Macintosh/i)&&br(t)),Mm=t=>$n(t,/iPhone/i),Lm=t=>$n(t,/iPhone|iPod/i)||ma(t),Uh=t=>$n(t,/android|sink/i),Um=t=>Uh(t)&&!$n(t,/mobile/i),Fm=t=>{const e=t.innerWidth,n=t.innerHeight,i=Math.min(e,n),s=Math.max(e,n);return i>390&&i<520&&s>620&&s<800},jm=t=>{const e=t.innerWidth,n=t.innerHeight,i=Math.min(e,n),s=Math.max(e,n);return ma(t)||Um(t)||i>460&&i<820&&s>780&&s<1400},br=t=>Hm(t,"(any-pointer:coarse)"),Vm=t=>!br(t),Fh=t=>jh(t)||Vh(t),jh=t=>!!(t.cordova||t.phonegap||t.PhoneGap),Vh=t=>{const e=t.Capacitor;return!!(e?.isNative||e?.isNativePlatform&&e.isNativePlatform())},$m=t=>$n(t,/electron/i),Bm=t=>{var e;return!!(!((e=t.matchMedia)===null||e===void 0)&&e.call(t,"(display-mode: standalone)").matches||t.navigator.standalone)},$n=(t,e)=>e.test(t.navigator.userAgent),Hm=(t,e)=>{var n;return(n=t.matchMedia)===null||n===void 0?void 0:n.call(t,e).matches},cl={ipad:ma,iphone:Mm,ios:Lm,android:Uh,phablet:Fm,tablet:jm,cordova:jh,capacitor:Vh,electron:$m,pwa:Bm,mobile:br,mobileweb:xm,desktop:Vm,hybrid:Fh};let Ds;const Wm=(t={})=>{if(typeof window>"u")return;const e=window.document,n=window,i=n.Ionic=n.Ionic||{},s=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Cm(n)),{persistConfig:!1}),i.config),Pm(n)),t);cn.reset(s),cn.getBoolean("persistConfig")&&Rm(n,s),Lh(n),i.config=cn,i.mode=Ds=cn.get("mode",e.documentElement.getAttribute("mode")||(Nm(n,"ios")?"ios":"md")),cn.set("mode",Ds),e.documentElement.setAttribute("mode",Ds),e.documentElement.classList.add(Ds),cn.getBoolean("_testing")&&cn.set("animated",!1)};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const xs=typeof window<"u"?window:void 0;xs&&(xs.CSS&&xs.CSS.supports&&xs.CSS.supports("--a: 0"));const zm="ionViewWillEnter",Gm="ionViewDidEnter",qm="ionViewWillLeave",Km="ionViewDidLeave";/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ni=typeof document<"u";function $h(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Jm(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&$h(t.default)}const ge=Object.assign;function ao(t,e){const n={};for(const i in e){const s=e[i];n[i]=It(s)?s.map(t):t(s)}return n}const Wi=()=>{},It=Array.isArray,Bh=/#/g,Xm=/&/g,Ym=/\//g,Qm=/=/g,Zm=/\?/g,Hh=/\+/g,e_=/%5B/g,t_=/%5D/g,Wh=/%5E/g,n_=/%60/g,zh=/%7B/g,i_=/%7C/g,Gh=/%7D/g,s_=/%20/g;function _a(t){return encodeURI(""+t).replace(i_,"|").replace(e_,"[").replace(t_,"]")}function r_(t){return _a(t).replace(zh,"{").replace(Gh,"}").replace(Wh,"^")}function Mo(t){return _a(t).replace(Hh,"%2B").replace(s_,"+").replace(Bh,"%23").replace(Xm,"%26").replace(n_,"`").replace(zh,"{").replace(Gh,"}").replace(Wh,"^")}function o_(t){return Mo(t).replace(Qm,"%3D")}function a_(t){return _a(t).replace(Bh,"%23").replace(Zm,"%3F")}function c_(t){return t==null?"":a_(t).replace(Ym,"%2F")}function is(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const l_=/\/$/,u_=t=>t.replace(l_,"");function co(t,e,n="/"){let i,s={},o="",a="";const l=e.indexOf("#");let h=e.indexOf("?");return l<h&&l>=0&&(h=-1),h>-1&&(i=e.slice(0,h),o=e.slice(h+1,l>-1?l:e.length),s=t(o)),l>-1&&(i=i||e.slice(0,l),a=e.slice(l,e.length)),i=p_(i??e,n),{fullPath:i+(o&&"?")+o+a,path:i,query:s,hash:is(a)}}function h_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ll(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function f_(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&di(e.matched[i],n.matched[s])&&qh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function di(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function qh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!d_(t[n],e[n]))return!1;return!0}function d_(t,e){return It(t)?ul(t,e):It(e)?ul(e,t):t===e}function ul(t,e){return It(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function p_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let o=n.length-1,a,l;for(a=0;a<i.length;a++)if(l=i[a],l!==".")if(l==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+i.slice(a).join("/")}const on={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ss;(function(t){t.pop="pop",t.push="push"})(ss||(ss={}));var zi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(zi||(zi={}));function g_(t){if(!t)if(ni){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),u_(t)}const m_=/^[^#]+#/;function __(t,e){return t.replace(m_,"#")+e}function y_(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Er=()=>({left:window.scrollX,top:window.scrollY});function v_(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=y_(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function hl(t,e){return(history.state?history.state.position-e:-1)+t}const Lo=new Map;function w_(t,e){Lo.set(t,e)}function I_(t){const e=Lo.get(t);return Lo.delete(t),e}let b_=()=>location.protocol+"//"+location.host;function Kh(t,e){const{pathname:n,search:i,hash:s}=e,o=t.indexOf("#");if(o>-1){let l=s.includes(t.slice(o))?t.slice(o).length:1,h=s.slice(l);return h[0]!=="/"&&(h="/"+h),ll(h,"")}return ll(n,t)+i+s}function E_(t,e,n,i){let s=[],o=[],a=null;const l=({state:v})=>{const S=Kh(t,location),x=n.value,L=e.value;let G=0;if(v){if(n.value=S,e.value=v,a&&a===x){a=null;return}G=L?v.position-L.position:0}else i(S);s.forEach(K=>{K(n.value,x,{delta:G,type:ss.pop,direction:G?G>0?zi.forward:zi.back:zi.unknown})})};function h(){a=n.value}function d(v){s.push(v);const S=()=>{const x=s.indexOf(v);x>-1&&s.splice(x,1)};return o.push(S),S}function p(){const{history:v}=window;v.state&&v.replaceState(ge({},v.state,{scroll:Er()}),"")}function m(){for(const v of o)v();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:h,listen:d,destroy:m}}function fl(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Er():null}}function T_(t){const{history:e,location:n}=window,i={value:Kh(t,n)},s={value:e.state};s.value||o(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(h,d,p){const m=t.indexOf("#"),v=m>-1?(n.host&&document.querySelector("base")?t:t.slice(m))+h:b_()+t+h;try{e[p?"replaceState":"pushState"](d,"",v),s.value=d}catch(S){console.error(S),n[p?"replace":"assign"](v)}}function a(h,d){const p=ge({},e.state,fl(s.value.back,h,s.value.forward,!0),d,{position:s.value.position});o(h,p,!0),i.value=h}function l(h,d){const p=ge({},s.value,e.state,{forward:h,scroll:Er()});o(p.current,p,!0);const m=ge({},fl(i.value,h,null),{position:p.position+1},d);o(h,m,!1),i.value=h}return{location:i,state:s,push:l,replace:a}}function S_(t){t=g_(t);const e=T_(t),n=E_(t,e.state,e.location,e.replace);function i(o,a=!0){a||n.pauseListeners(),history.go(o)}const s=ge({location:"",base:t,go:i,createHref:__.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function A_(t){return typeof t=="string"||t&&typeof t=="object"}function Jh(t){return typeof t=="string"||typeof t=="symbol"}const Xh=Symbol("");var dl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(dl||(dl={}));function pi(t,e){return ge(new Error,{type:t,[Xh]:!0},e)}function $t(t,e){return t instanceof Error&&Xh in t&&(e==null||!!(t.type&e))}const pl="[^/]+?",C_={sensitive:!1,strict:!1,start:!0,end:!0},R_=/[.+*?^${}()[\]/\\]/g;function P_(t,e){const n=ge({},C_,e),i=[];let s=n.start?"^":"";const o=[];for(const d of t){const p=d.length?[]:[90];n.strict&&!d.length&&(s+="/");for(let m=0;m<d.length;m++){const v=d[m];let S=40+(n.sensitive?.25:0);if(v.type===0)m||(s+="/"),s+=v.value.replace(R_,"\\$&"),S+=40;else if(v.type===1){const{value:x,repeatable:L,optional:G,regexp:K}=v;o.push({name:x,repeatable:L,optional:G});const B=K||pl;if(B!==pl){S+=10;try{new RegExp(`(${B})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${x}" (${B}): `+z.message)}}let W=L?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;m||(W=G&&d.length<2?`(?:/${W})`:"/"+W),G&&(W+="?"),s+=W,S+=20,G&&(S+=-8),L&&(S+=-20),B===".*"&&(S+=-50)}p.push(S)}i.push(p)}if(n.strict&&n.end){const d=i.length-1;i[d][i[d].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(d){const p=d.match(a),m={};if(!p)return null;for(let v=1;v<p.length;v++){const S=p[v]||"",x=o[v-1];m[x.name]=S&&x.repeatable?S.split("/"):S}return m}function h(d){let p="",m=!1;for(const v of t){(!m||!p.endsWith("/"))&&(p+="/"),m=!1;for(const S of v)if(S.type===0)p+=S.value;else if(S.type===1){const{value:x,repeatable:L,optional:G}=S,K=x in d?d[x]:"";if(It(K)&&!L)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const B=It(K)?K.join("/"):K;if(!B)if(G)v.length<2&&(p.endsWith("/")?p=p.slice(0,-1):m=!0);else throw new Error(`Missing required param "${x}"`);p+=B}}return p||"/"}return{re:a,score:i,keys:o,parse:l,stringify:h}}function O_(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Yh(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const o=O_(i[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-i.length)===1){if(gl(i))return 1;if(gl(s))return-1}return s.length-i.length}function gl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const k_={type:0,value:""},N_=/[a-zA-Z0-9_]/;function D_(t){if(!t)return[[]];if(t==="/")return[[k_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(S){throw new Error(`ERR (${n})/"${d}": ${S}`)}let n=0,i=n;const s=[];let o;function a(){o&&s.push(o),o=[]}let l=0,h,d="",p="";function m(){d&&(n===0?o.push({type:0,value:d}):n===1||n===2||n===3?(o.length>1&&(h==="*"||h==="+")&&e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:d,regexp:p,repeatable:h==="*"||h==="+",optional:h==="*"||h==="?"})):e("Invalid state to consume buffer"),d="")}function v(){d+=h}for(;l<t.length;){if(h=t[l++],h==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:h==="/"?(d&&m(),a()):h===":"?(m(),n=1):v();break;case 4:v(),n=i;break;case 1:h==="("?n=2:N_.test(h)?v():(m(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&l--);break;case 2:h===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+h:n=3:p+=h;break;case 3:m(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&l--,p="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${d}"`),m(),a(),s}function x_(t,e,n){const i=P_(D_(t.path),n),s=ge(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function M_(t,e){const n=[],i=new Map;e=vl({strict:!1,end:!0,sensitive:!1},e);function s(m){return i.get(m)}function o(m,v,S){const x=!S,L=_l(m);L.aliasOf=S&&S.record;const G=vl(e,m),K=[L];if("alias"in m){const z=typeof m.alias=="string"?[m.alias]:m.alias;for(const oe of z)K.push(_l(ge({},L,{components:S?S.record.components:L.components,path:oe,aliasOf:S?S.record:L})))}let B,W;for(const z of K){const{path:oe}=z;if(v&&oe[0]!=="/"){const fe=v.record.path,b=fe[fe.length-1]==="/"?"":"/";z.path=v.record.path+(oe&&b+oe)}if(B=x_(z,v,G),S?S.alias.push(B):(W=W||B,W!==B&&W.alias.push(B),x&&m.name&&!yl(B)&&a(m.name)),Qh(B)&&h(B),L.children){const fe=L.children;for(let b=0;b<fe.length;b++)o(fe[b],B,S&&S.children[b])}S=S||B}return W?()=>{a(W)}:Wi}function a(m){if(Jh(m)){const v=i.get(m);v&&(i.delete(m),n.splice(n.indexOf(v),1),v.children.forEach(a),v.alias.forEach(a))}else{const v=n.indexOf(m);v>-1&&(n.splice(v,1),m.record.name&&i.delete(m.record.name),m.children.forEach(a),m.alias.forEach(a))}}function l(){return n}function h(m){const v=F_(m,n);n.splice(v,0,m),m.record.name&&!yl(m)&&i.set(m.record.name,m)}function d(m,v){let S,x={},L,G;if("name"in m&&m.name){if(S=i.get(m.name),!S)throw pi(1,{location:m});G=S.record.name,x=ge(ml(v.params,S.keys.filter(W=>!W.optional).concat(S.parent?S.parent.keys.filter(W=>W.optional):[]).map(W=>W.name)),m.params&&ml(m.params,S.keys.map(W=>W.name))),L=S.stringify(x)}else if(m.path!=null)L=m.path,S=n.find(W=>W.re.test(L)),S&&(x=S.parse(L),G=S.record.name);else{if(S=v.name?i.get(v.name):n.find(W=>W.re.test(v.path)),!S)throw pi(1,{location:m,currentLocation:v});G=S.record.name,x=ge({},v.params,m.params),L=S.stringify(x)}const K=[];let B=S;for(;B;)K.unshift(B.record),B=B.parent;return{name:G,path:L,params:x,matched:K,meta:U_(K)}}t.forEach(m=>o(m));function p(){n.length=0,i.clear()}return{addRoute:o,resolve:d,removeRoute:a,clearRoutes:p,getRoutes:l,getRecordMatcher:s}}function ml(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function _l(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:L_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function L_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function yl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function U_(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function vl(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function F_(t,e){let n=0,i=e.length;for(;n!==i;){const o=n+i>>1;Yh(t,e[o])<0?i=o:n=o+1}const s=j_(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function j_(t){let e=t;for(;e=e.parent;)if(Qh(e)&&Yh(t,e)===0)return e}function Qh({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function V_(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const o=i[s].replace(Hh," "),a=o.indexOf("="),l=is(a<0?o:o.slice(0,a)),h=a<0?null:is(o.slice(a+1));if(l in e){let d=e[l];It(d)||(d=e[l]=[d]),d.push(h)}else e[l]=h}return e}function wl(t){let e="";for(let n in t){const i=t[n];if(n=o_(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(It(i)?i.map(o=>o&&Mo(o)):[i&&Mo(i)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function $_(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=It(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const B_=Symbol(""),Il=Symbol(""),Tr=Symbol(""),Zh=Symbol(""),Uo=Symbol("");function xi(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function hn(t,e,n,i,s,o=a=>a()){const a=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((l,h)=>{const d=v=>{v===!1?h(pi(4,{from:n,to:e})):v instanceof Error?h(v):A_(v)?h(pi(2,{from:e,to:v})):(a&&i.enterCallbacks[s]===a&&typeof v=="function"&&a.push(v),l())},p=o(()=>t.call(i&&i.instances[s],e,n,d));let m=Promise.resolve(p);t.length<3&&(m=m.then(d)),m.catch(v=>h(v))})}function lo(t,e,n,i,s=o=>o()){const o=[];for(const a of t)for(const l in a.components){let h=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if($h(h)){const p=(h.__vccOpts||h)[e];p&&o.push(hn(p,n,i,a,l,s))}else{let d=h();o.push(()=>d.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const m=Jm(p)?p.default:p;a.mods[l]=p,a.components[l]=m;const S=(m.__vccOpts||m)[e];return S&&hn(S,n,i,a,l,s)()}))}}return o}function bl(t){const e=Dt(Tr),n=Dt(Zh),i=dt(()=>{const h=xn(t.to);return e.resolve(h)}),s=dt(()=>{const{matched:h}=i.value,{length:d}=h,p=h[d-1],m=n.matched;if(!p||!m.length)return-1;const v=m.findIndex(di.bind(null,p));if(v>-1)return v;const S=El(h[d-2]);return d>1&&El(p)===S&&m[m.length-1].path!==S?m.findIndex(di.bind(null,h[d-2])):v}),o=dt(()=>s.value>-1&&q_(n.params,i.value.params)),a=dt(()=>s.value>-1&&s.value===n.matched.length-1&&qh(n.params,i.value.params));function l(h={}){if(G_(h)){const d=e[xn(t.replace)?"replace":"push"](xn(t.to)).catch(Wi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:i,href:dt(()=>i.value.href),isActive:o,isExactActive:a,navigate:l}}function H_(t){return t.length===1?t[0]:t}const W_=ah({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:bl,setup(t,{slots:e}){const n=_r(bl(t)),{options:i}=Dt(Tr),s=dt(()=>({[Tl(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Tl(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&H_(e.default(n));return t.custom?o:Nh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),z_=W_;function G_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function q_(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!It(s)||s.length!==i.length||i.some((o,a)=>o!==s[a]))return!1}return!0}function El(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Tl=(t,e,n)=>t??e??n,K_=ah({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Dt(Uo),s=dt(()=>t.route||i.value),o=Dt(Il,0),a=dt(()=>{let d=xn(o);const{matched:p}=s.value;let m;for(;(m=p[d])&&!m.components;)d++;return d}),l=dt(()=>s.value.matched[a.value]);Fs(Il,dt(()=>a.value+1)),Fs(B_,l),Fs(Uo,s);const h=Yu();return js(()=>[h.value,l.value,t.name],([d,p,m],[v,S,x])=>{p&&(p.instances[m]=d,S&&S!==p&&d&&d===v&&(p.leaveGuards.size||(p.leaveGuards=S.leaveGuards),p.updateGuards.size||(p.updateGuards=S.updateGuards))),d&&p&&(!S||!di(p,S)||!v)&&(p.enterCallbacks[m]||[]).forEach(L=>L(d))},{flush:"post"}),()=>{const d=s.value,p=t.name,m=l.value,v=m&&m.components[p];if(!v)return Sl(n.default,{Component:v,route:d});const S=m.props[p],x=S?S===!0?d.params:typeof S=="function"?S(d):S:null,G=Nh(v,ge({},x,e,{onVnodeUnmounted:K=>{K.component.isUnmounted&&(m.instances[p]=null)},ref:h}));return Sl(n.default,{Component:G,route:d})||G}}});function Sl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const J_=K_;function X_(t){const e=M_(t.routes,t),n=t.parseQuery||V_,i=t.stringifyQuery||wl,s=t.history,o=xi(),a=xi(),l=xi(),h=Qu(on);let d=on;ni&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=ao.bind(null,O=>""+O),m=ao.bind(null,c_),v=ao.bind(null,is);function S(O,q){let H,J;return Jh(O)?(H=e.getRecordMatcher(O),J=q):J=O,e.addRoute(J,H)}function x(O){const q=e.getRecordMatcher(O);q&&e.removeRoute(q)}function L(){return e.getRoutes().map(O=>O.record)}function G(O){return!!e.getRecordMatcher(O)}function K(O,q){if(q=ge({},q||h.value),typeof O=="string"){const A=co(n,O,q.path),k=e.resolve({path:A.path},q),D=s.createHref(A.fullPath);return ge(A,k,{params:v(k.params),hash:is(A.hash),redirectedFrom:void 0,href:D})}let H;if(O.path!=null)H=ge({},O,{path:co(n,O.path,q.path).path});else{const A=ge({},O.params);for(const k in A)A[k]==null&&delete A[k];H=ge({},O,{params:m(A)}),q.params=m(q.params)}const J=e.resolve(H,q),de=O.hash||"";J.params=p(v(J.params));const g=h_(i,ge({},O,{hash:r_(de),path:J.path})),y=s.createHref(g);return ge({fullPath:g,hash:de,query:i===wl?$_(O.query):O.query||{}},J,{redirectedFrom:void 0,href:y})}function B(O){return typeof O=="string"?co(n,O,h.value.path):ge({},O)}function W(O,q){if(d!==O)return pi(8,{from:q,to:O})}function z(O){return b(O)}function oe(O){return z(ge(B(O),{replace:!0}))}function fe(O){const q=O.matched[O.matched.length-1];if(q&&q.redirect){const{redirect:H}=q;let J=typeof H=="function"?H(O):H;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=B(J):{path:J},J.params={}),ge({query:O.query,hash:O.hash,params:J.path!=null?{}:O.params},J)}}function b(O,q){const H=d=K(O),J=h.value,de=O.state,g=O.force,y=O.replace===!0,A=fe(H);if(A)return b(ge(B(A),{state:typeof A=="object"?ge({},de,A.state):de,force:g,replace:y}),q||H);const k=H;k.redirectedFrom=q;let D;return!g&&f_(i,J,H)&&(D=pi(16,{to:k,from:J}),it(J,J,!0,!1)),(D?Promise.resolve(D):E(k,J)).catch(N=>$t(N)?$t(N,2)?N:ut(N):re(N,k,J)).then(N=>{if(N){if($t(N,2))return b(ge({replace:y},B(N.to),{state:typeof N.to=="object"?ge({},de,N.to.state):de,force:g}),q||k)}else N=C(k,J,!0,y,de);return T(k,J,N),N})}function _(O,q){const H=W(O,q);return H?Promise.reject(H):Promise.resolve()}function I(O){const q=en.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(O):O()}function E(O,q){let H;const[J,de,g]=Y_(O,q);H=lo(J.reverse(),"beforeRouteLeave",O,q);for(const A of J)A.leaveGuards.forEach(k=>{H.push(hn(k,O,q))});const y=_.bind(null,O,q);return H.push(y),Je(H).then(()=>{H=[];for(const A of o.list())H.push(hn(A,O,q));return H.push(y),Je(H)}).then(()=>{H=lo(de,"beforeRouteUpdate",O,q);for(const A of de)A.updateGuards.forEach(k=>{H.push(hn(k,O,q))});return H.push(y),Je(H)}).then(()=>{H=[];for(const A of g)if(A.beforeEnter)if(It(A.beforeEnter))for(const k of A.beforeEnter)H.push(hn(k,O,q));else H.push(hn(A.beforeEnter,O,q));return H.push(y),Je(H)}).then(()=>(O.matched.forEach(A=>A.enterCallbacks={}),H=lo(g,"beforeRouteEnter",O,q,I),H.push(y),Je(H))).then(()=>{H=[];for(const A of a.list())H.push(hn(A,O,q));return H.push(y),Je(H)}).catch(A=>$t(A,8)?A:Promise.reject(A))}function T(O,q,H){l.list().forEach(J=>I(()=>J(O,q,H)))}function C(O,q,H,J,de){const g=W(O,q);if(g)return g;const y=q===on,A=ni?history.state:{};H&&(J||y?s.replace(O.fullPath,ge({scroll:y&&A&&A.scroll},de)):s.push(O.fullPath,de)),h.value=O,it(O,q,H,y),ut()}let w;function $e(){w||(w=s.listen((O,q,H)=>{if(!Tt.listening)return;const J=K(O),de=fe(J);if(de){b(ge(de,{replace:!0,force:!0}),J).catch(Wi);return}d=J;const g=h.value;ni&&w_(hl(g.fullPath,H.delta),Er()),E(J,g).catch(y=>$t(y,12)?y:$t(y,2)?(b(ge(B(y.to),{force:!0}),J).then(A=>{$t(A,20)&&!H.delta&&H.type===ss.pop&&s.go(-1,!1)}).catch(Wi),Promise.reject()):(H.delta&&s.go(-H.delta,!1),re(y,J,g))).then(y=>{y=y||C(J,g,!1),y&&(H.delta&&!$t(y,8)?s.go(-H.delta,!1):H.type===ss.pop&&$t(y,20)&&s.go(-1,!1)),T(J,g,y)}).catch(Wi)}))}let nt=xi(),Ce=xi(),ae;function re(O,q,H){ut(O);const J=Ce.list();return J.length?J.forEach(de=>de(O,q,H)):console.error(O),Promise.reject(O)}function Qe(){return ae&&h.value!==on?Promise.resolve():new Promise((O,q)=>{nt.add([O,q])})}function ut(O){return ae||(ae=!O,$e(),nt.list().forEach(([q,H])=>O?H(O):q()),nt.reset()),O}function it(O,q,H,J){const{scrollBehavior:de}=t;if(!ni||!de)return Promise.resolve();const g=!H&&I_(hl(O.fullPath,0))||(J||!H)&&history.state&&history.state.scroll||null;return nh().then(()=>de(O,q,g)).then(y=>y&&v_(y)).catch(y=>re(y,O,q))}const Ee=O=>s.go(O);let Te;const en=new Set,Tt={currentRoute:h,listening:!0,addRoute:S,removeRoute:x,clearRoutes:e.clearRoutes,hasRoute:G,getRoutes:L,resolve:K,options:t,push:z,replace:oe,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:o.add,beforeResolve:a.add,afterEach:l.add,onError:Ce.add,isReady:Qe,install(O){const q=this;O.component("RouterLink",z_),O.component("RouterView",J_),O.config.globalProperties.$router=q,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>xn(h)}),ni&&!Te&&h.value===on&&(Te=!0,z(s.location).catch(de=>{}));const H={};for(const de in on)Object.defineProperty(H,de,{get:()=>h.value[de],enumerable:!0});O.provide(Tr,q),O.provide(Zh,Ju(H)),O.provide(Uo,h);const J=O.unmount;en.add(O),O.unmount=function(){en.delete(O),en.size<1&&(d=on,w&&w(),w=null,h.value=on,Te=!1,ae=!1),J()}}};function Je(O){return O.reduce((q,H)=>q.then(()=>I(H)),Promise.resolve())}return Tt}function Y_(t,e){const n=[],i=[],s=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const l=e.matched[a];l&&(t.matched.find(d=>di(d,l))?i.push(l):n.push(l));const h=t.matched[a];h&&(e.matched.find(d=>di(d,h))||s.push(h))}return[n,i,s]}function Sr(){return Dt(Tr)}var Ot;(function(t){t.WillEnter="onIonViewWillEnter",t.DidEnter="onIonViewDidEnter",t.WillLeave="onIonViewWillLeave",t.DidLeave="onIonViewDidLeave"})(Ot||(Ot={}));zm+"",Ot.WillEnter,Gm+"",Ot.DidEnter,qm+"",Ot.WillLeave,Km+"",Ot.DidLeave;const Q_=(t,e,n)=>{if(n){const i=n,s=i.proxy[t]||(i.proxy[t]=[]);i.exposed&&(i.exposed[t]=s);const o=(...a)=>{if(!i.isUnmounted)return a?e(...a):e()};return s.push(o),o}else console.warn("[@ionic/vue]: Ionic Lifecycle Hooks can only be used during execution of setup().")},Ar=t=>(e,n=Vg())=>Q_(t,e,n);Ar(Ot.WillEnter);Ar(Ot.DidEnter);Ar(Ot.WillLeave);Ar(Ot.DidLeave);const Z_={async install(t,e={}){typeof document<"u"&&document.documentElement.classList.add("ion-ce"),Wm(e)}};Qu([]);const ey="data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%23fff'/%3e%3c/svg%3e",Cr=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},ty={color:"coffee"},ny={slot:"end",class:"footer-end"},iy={href:"https://github.com/fredrikofstad/norskcafe",target:"_blank",rel:"noopener noreferrer",fill:"clear"},sy=["src"],ry={__name:"Footer",setup(t){return(e,n)=>(jn(),Vn("ion-footer",null,[Z("ion-toolbar",ty,[n[0]||(n[0]=Z("ion-buttons",{slot:"start",class:"footer-start"},[Z("ion-title",{size:"small"},"© 2025 Fredrik Ofstad")],-1)),Z("ion-buttons",ny,[Z("ion-button",iy,[Z("img",{src:xn(ey),alt:"GitHub",class:"github-icon"},null,8,sy)])])])]))}},oy=Cr(ry,[["__scopeId","data-v-d440ecb6"]]),ay={__name:"Header",setup(t){const e=Sr();function n(){e.push("/login")}return(i,s)=>(jn(),Vn("ion-header",null,[Z("ion-toolbar",{color:"coffee"},[s[0]||(s[0]=Z("div",{class:"header-content"},[Z("ion-title",{class:"header-title"},"Norsk Cafe")],-1)),Z("ion-buttons",{slot:"end"},[Z("div",{class:"footer-end"},[Z("ion-button",{color:"accent",fill:"solid",onClick:n}," Login ")])])])]))}},cy={__name:"App",setup(t){return(e,n)=>{const i=Zp("router-view");return jn(),Vn("ion-app",null,[qe(i),qe(oy)])}}},ly=()=>{};var Al={};/**
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
 */const ef=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},uy=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],a=t[n++],l=t[n++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(h&1023))}else{const o=t[n++],a=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},tf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const o=t[s],a=s+1<t.length,l=a?t[s+1]:0,h=s+2<t.length,d=h?t[s+2]:0,p=o>>2,m=(o&3)<<4|l>>4;let v=(l&15)<<2|d>>6,S=d&63;h||(S=64,a||(v=64)),i.push(n[p],n[m],n[v],n[S])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ef(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||l==null||d==null||m==null)throw new hy;const v=o<<2|l>>4;if(i.push(v),d!==64){const S=l<<4&240|d>>2;if(i.push(S),m!==64){const x=d<<6&192|m;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fy=function(t){const e=ef(t);return tf.encodeByteArray(e,!0)},er=function(t){return fy(t).replace(/\./g,"")},nf=function(t){try{return tf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const py=()=>dy().__FIREBASE_DEFAULTS__,gy=()=>{if(typeof process>"u"||typeof Al>"u")return;const t=Al.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},my=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nf(t[1]);return e&&JSON.parse(e)},ya=()=>{try{return ly()||py()||gy()||my()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sf=t=>{var e,n;return(n=(e=ya())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_y=t=>{const e=sf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},rf=()=>{var t;return(t=ya())===null||t===void 0?void 0:t.config},of=t=>{var e;return(e=ya())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class yy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function us(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function af(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function vy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[er(JSON.stringify(n)),er(JSON.stringify(a)),""].join(".")}const Gi={};function wy(){const t={prod:[],emulator:[]};for(const e of Object.keys(Gi))Gi[e]?t.emulator.push(e):t.prod.push(e);return t}function Iy(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Cl=!1;function cf(t,e){if(typeof window>"u"||typeof document>"u"||!us(window.location.host)||Gi[t]===e||Gi[t]||Cl)return;Gi[t]=e;function n(v){return`__firebase__banner__${v}`}const i="__firebase__banner",o=wy().prod.length>0;function a(){const v=document.getElementById(i);v&&v.remove()}function l(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function h(v,S){v.setAttribute("width","24"),v.setAttribute("id",S),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function d(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Cl=!0,a()},v}function p(v,S){v.setAttribute("id",S),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function m(){const v=Iy(i),S=n("text"),x=document.getElementById(S)||document.createElement("span"),L=n("learnmore"),G=document.getElementById(L)||document.createElement("a"),K=n("preprendIcon"),B=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const W=v.element;l(W),p(G,L);const z=d();h(B,K),W.append(B,x,G,z),document.body.appendChild(W)}o?(x.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function by(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function Ey(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ty(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sy(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uf(){try{return typeof indexedDB=="object"}catch{return!1}}function hf(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function Ay(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Cy="FirebaseError";class Et extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Cy,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qn.prototype.create)}}class qn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?Ry(o,i):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Et(s,l,i)}}function Ry(t,e){return t.replace(Py,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Py=/\{\$([^}]+)}/g;function Oy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const o=t[s],a=e[s];if(Rl(o)&&Rl(a)){if(!vn(o,a))return!1}else if(o!==a)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Rl(t){return t!==null&&typeof t=="object"}/**
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
 */function hs(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ky(t,e){const n=new Ny(t,e);return n.subscribe.bind(n)}class Ny{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Dy(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=uo),s.error===void 0&&(s.error=uo),s.complete===void 0&&(s.complete=uo);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uo(){}/**
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
 */const xy=1e3,My=2,Ly=4*60*60*1e3,Uy=.5;function Pl(t,e=xy,n=My){const i=e*Math.pow(n,t),s=Math.round(Uy*i*(Math.random()-.5)*2);return Math.min(Ly,i+s)}/**
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
 */function In(t){return t&&t._delegate?t._delegate:t}class bt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rn="[DEFAULT]";/**
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
 */class Fy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new yy;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vy(e))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=Rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rn){return this.instances.has(e)}getOptions(e=Rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);i===l&&a.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:jy(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Rn){return this.component?this.component.multipleInstances?e:Rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jy(t){return t===Rn?void 0:t}function Vy(t){return t.instantiationMode==="EAGER"}/**
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
 */class $y{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Fy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const By={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},Hy=ye.INFO,Wy={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},zy=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Wy[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rr{constructor(e){this.name=e,this._logLevel=Hy,this._logHandler=zy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?By[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const Gy=(t,e)=>e.some(n=>t instanceof n);let Ol,kl;function qy(){return Ol||(Ol=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ky(){return kl||(kl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ff=new WeakMap,Fo=new WeakMap,df=new WeakMap,ho=new WeakMap,va=new WeakMap;function Jy(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(_n(t.result)),s()},a=()=>{i(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&ff.set(n,t)}).catch(()=>{}),va.set(e,t),e}function Xy(t){if(Fo.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});Fo.set(t,e)}let jo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||df.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Yy(t){jo=t(jo)}function Qy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(fo(this),e,...n);return df.set(i,e.sort?e.sort():[e]),_n(i)}:Ky().includes(t)?function(...e){return t.apply(fo(this),e),_n(ff.get(this))}:function(...e){return _n(t.apply(fo(this),e))}}function Zy(t){return typeof t=="function"?Qy(t):(t instanceof IDBTransaction&&Xy(t),Gy(t,qy())?new Proxy(t,jo):t)}function _n(t){if(t instanceof IDBRequest)return Jy(t);if(ho.has(t))return ho.get(t);const e=Zy(t);return e!==t&&(ho.set(t,e),va.set(e,t)),e}const fo=t=>va.get(t);function pf(t,e,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),l=_n(a);return i&&a.addEventListener("upgradeneeded",h=>{i(_n(a.result),h.oldVersion,h.newVersion,_n(a.transaction),h)}),n&&a.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const ev=["get","getKey","getAll","getAllKeys","count"],tv=["put","add","delete","clear"],po=new Map;function Nl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(po.get(e))return po.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=tv.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||ev.includes(n)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return i&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),s&&h.done]))[0]};return po.set(e,o),o}Yy(t=>({...t,get:(e,n,i)=>Nl(e,n)||t.get(e,n,i),has:(e,n)=>!!Nl(e,n)||t.has(e,n)}));/**
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
 */class nv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iv(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function iv(t){const e=t.getComponent();return e?.type==="VERSION"}const Vo="@firebase/app",Dl="0.13.2";/**
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
 */const Yt=new Rr("@firebase/app"),sv="@firebase/app-compat",rv="@firebase/analytics-compat",ov="@firebase/analytics",av="@firebase/app-check-compat",cv="@firebase/app-check",lv="@firebase/auth",uv="@firebase/auth-compat",hv="@firebase/database",fv="@firebase/data-connect",dv="@firebase/database-compat",pv="@firebase/functions",gv="@firebase/functions-compat",mv="@firebase/installations",_v="@firebase/installations-compat",yv="@firebase/messaging",vv="@firebase/messaging-compat",wv="@firebase/performance",Iv="@firebase/performance-compat",bv="@firebase/remote-config",Ev="@firebase/remote-config-compat",Tv="@firebase/storage",Sv="@firebase/storage-compat",Av="@firebase/firestore",Cv="@firebase/ai",Rv="@firebase/firestore-compat",Pv="firebase",Ov="11.10.0";/**
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
 */const $o="[DEFAULT]",kv={[Vo]:"fire-core",[sv]:"fire-core-compat",[ov]:"fire-analytics",[rv]:"fire-analytics-compat",[cv]:"fire-app-check",[av]:"fire-app-check-compat",[lv]:"fire-auth",[uv]:"fire-auth-compat",[hv]:"fire-rtdb",[fv]:"fire-data-connect",[dv]:"fire-rtdb-compat",[pv]:"fire-fn",[gv]:"fire-fn-compat",[mv]:"fire-iid",[_v]:"fire-iid-compat",[yv]:"fire-fcm",[vv]:"fire-fcm-compat",[wv]:"fire-perf",[Iv]:"fire-perf-compat",[bv]:"fire-rc",[Ev]:"fire-rc-compat",[Tv]:"fire-gcs",[Sv]:"fire-gcs-compat",[Av]:"fire-fst",[Rv]:"fire-fst-compat",[Cv]:"fire-vertex","fire-js":"fire-js",[Pv]:"fire-js-all"};/**
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
 */const tr=new Map,Nv=new Map,Bo=new Map;function xl(t,e){try{t.container.addComponent(e)}catch(n){Yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Lt(t){const e=t.name;if(Bo.has(e))return Yt.debug(`There were multiple attempts to register component ${e}.`),!1;Bo.set(e,t);for(const n of tr.values())xl(n,t);for(const n of Nv.values())xl(n,t);return!0}function Kn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Dv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yn=new qn("app","Firebase",Dv);/**
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
 */class xv{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yn.create("app-deleted",{appName:this._name})}}/**
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
 */const _i=Ov;function gf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:$o,automaticDataCollectionEnabled:!0},e),s=i.name;if(typeof s!="string"||!s)throw yn.create("bad-app-name",{appName:String(s)});if(n||(n=rf()),!n)throw yn.create("no-options");const o=tr.get(s);if(o){if(vn(n,o.options)&&vn(i,o.config))return o;throw yn.create("duplicate-app",{appName:s})}const a=new $y(s);for(const h of Bo.values())a.addComponent(h);const l=new xv(n,i,a);return tr.set(s,l),l}function wa(t=$o){const e=tr.get(t);if(!e&&t===$o&&rf())return gf();if(!e)throw yn.create("no-app",{appName:t});return e}function ct(t,e,n){var i;let s=(i=kv[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${e}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yt.warn(l.join(" "));return}Lt(new bt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Mv="firebase-heartbeat-database",Lv=1,rs="firebase-heartbeat-store";let go=null;function mf(){return go||(go=pf(Mv,Lv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(rs)}catch(n){console.warn(n)}}}}).catch(t=>{throw yn.create("idb-open",{originalErrorMessage:t.message})})),go}async function Uv(t){try{const n=(await mf()).transaction(rs),i=await n.objectStore(rs).get(_f(t));return await n.done,i}catch(e){if(e instanceof Et)Yt.warn(e.message);else{const n=yn.create("idb-get",{originalErrorMessage:e?.message});Yt.warn(n.message)}}}async function Ml(t,e){try{const i=(await mf()).transaction(rs,"readwrite");await i.objectStore(rs).put(e,_f(t)),await i.done}catch(n){if(n instanceof Et)Yt.warn(n.message);else{const i=yn.create("idb-set",{originalErrorMessage:n?.message});Yt.warn(i.message)}}}function _f(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Fv=1024,jv=30;class Vv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bv(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ll();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>jv){const a=Hv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Yt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ll(),{heartbeatsToSend:i,unsentEntries:s}=$v(this._heartbeatsCache.heartbeats),o=er(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Yt.warn(n),""}}}function Ll(){return new Date().toISOString().substring(0,10)}function $v(t,e=Fv){const n=[];let i=t.slice();for(const s of t){const o=n.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Ul(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ul(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Bv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uf()?hf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Uv(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ml(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ml(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ul(t){return er(JSON.stringify({version:2,heartbeats:t})).length}function Hv(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function Wv(t){Lt(new bt("platform-logger",e=>new nv(e),"PRIVATE")),Lt(new bt("heartbeat",e=>new Vv(e),"PRIVATE")),ct(Vo,Dl,t),ct(Vo,Dl,"esm2017"),ct("fire-js","")}Wv("");var zv="firebase",Gv="11.10.0";/**
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
 */ct(zv,Gv,"app");const yf="@firebase/installations",Ia="0.6.18";/**
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
 */const vf=1e4,wf=`w:${Ia}`,If="FIS_v2",qv="https://firebaseinstallations.googleapis.com/v1",Kv=60*60*1e3,Jv="installations",Xv="Installations";/**
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
 */const Yv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Bn=new qn(Jv,Xv,Yv);function bf(t){return t instanceof Et&&t.code.includes("request-failed")}/**
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
 */function Ef({projectId:t}){return`${qv}/projects/${t}/installations`}function Tf(t){return{token:t.token,requestStatus:2,expiresIn:Zv(t.expiresIn),creationTime:Date.now()}}async function Sf(t,e){const i=(await e.json()).error;return Bn.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Af({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Qv(t,{refreshToken:e}){const n=Af(t);return n.append("Authorization",e0(e)),n}async function Cf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Zv(t){return Number(t.replace("s","000"))}function e0(t){return`${If} ${t}`}/**
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
 */async function t0({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=Ef(t),s=Af(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:n,authVersion:If,appId:t.appId,sdkVersion:wf},l={method:"POST",headers:s,body:JSON.stringify(a)},h=await Cf(()=>fetch(i,l));if(h.ok){const d=await h.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Tf(d.authToken)}}else throw await Sf("Create Installation",h)}/**
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
 */function Rf(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function n0(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const i0=/^[cdef][\w-]{21}$/,Ho="";function s0(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=r0(t);return i0.test(n)?n:Ho}catch{return Ho}}function r0(t){return n0(t).substr(0,22)}/**
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
 */function Pr(t){return`${t.appName}!${t.appId}`}/**
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
 */const Pf=new Map;function Of(t,e){const n=Pr(t);kf(n,e),o0(n,e)}function kf(t,e){const n=Pf.get(t);if(n)for(const i of n)i(e)}function o0(t,e){const n=a0();n&&n.postMessage({key:t,fid:e}),c0()}let On=null;function a0(){return!On&&"BroadcastChannel"in self&&(On=new BroadcastChannel("[Firebase] FID Change"),On.onmessage=t=>{kf(t.data.key,t.data.fid)}),On}function c0(){Pf.size===0&&On&&(On.close(),On=null)}/**
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
 */const l0="firebase-installations-database",u0=1,Hn="firebase-installations-store";let mo=null;function ba(){return mo||(mo=pf(l0,u0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Hn)}}})),mo}async function nr(t,e){const n=Pr(t),s=(await ba()).transaction(Hn,"readwrite"),o=s.objectStore(Hn),a=await o.get(n);return await o.put(e,n),await s.done,(!a||a.fid!==e.fid)&&Of(t,e.fid),e}async function Nf(t){const e=Pr(t),i=(await ba()).transaction(Hn,"readwrite");await i.objectStore(Hn).delete(e),await i.done}async function Or(t,e){const n=Pr(t),s=(await ba()).transaction(Hn,"readwrite"),o=s.objectStore(Hn),a=await o.get(n),l=e(a);return l===void 0?await o.delete(n):await o.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&Of(t,l.fid),l}/**
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
 */async function Ea(t){let e;const n=await Or(t.appConfig,i=>{const s=h0(i),o=f0(t,s);return e=o.registrationPromise,o.installationEntry});return n.fid===Ho?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function h0(t){const e=t||{fid:s0(),registrationStatus:0};return Df(e)}function f0(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Bn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=d0(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:p0(t)}:{installationEntry:e}}async function d0(t,e){try{const n=await t0(t,e);return nr(t.appConfig,n)}catch(n){throw bf(n)&&n.customData.serverCode===409?await Nf(t.appConfig):await nr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function p0(t){let e=await Fl(t.appConfig);for(;e.registrationStatus===1;)await Rf(100),e=await Fl(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Ea(t);return i||n}return e}function Fl(t){return Or(t,e=>{if(!e)throw Bn.create("installation-not-found");return Df(e)})}function Df(t){return g0(t)?{fid:t.fid,registrationStatus:0}:t}function g0(t){return t.registrationStatus===1&&t.registrationTime+vf<Date.now()}/**
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
 */async function m0({appConfig:t,heartbeatServiceProvider:e},n){const i=_0(t,n),s=Qv(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:wf,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},h=await Cf(()=>fetch(i,l));if(h.ok){const d=await h.json();return Tf(d)}else throw await Sf("Generate Auth Token",h)}function _0(t,{fid:e}){return`${Ef(t)}/${e}/authTokens:generate`}/**
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
 */async function Ta(t,e=!1){let n;const i=await Or(t.appConfig,o=>{if(!xf(o))throw Bn.create("not-registered");const a=o.authToken;if(!e&&w0(a))return o;if(a.requestStatus===1)return n=y0(t,e),o;{if(!navigator.onLine)throw Bn.create("app-offline");const l=b0(o);return n=v0(t,l),l}});return n?await n:i.authToken}async function y0(t,e){let n=await jl(t.appConfig);for(;n.authToken.requestStatus===1;)await Rf(100),n=await jl(t.appConfig);const i=n.authToken;return i.requestStatus===0?Ta(t,e):i}function jl(t){return Or(t,e=>{if(!xf(e))throw Bn.create("not-registered");const n=e.authToken;return E0(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function v0(t,e){try{const n=await m0(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await nr(t.appConfig,i),n}catch(n){if(bf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Nf(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await nr(t.appConfig,i)}throw n}}function xf(t){return t!==void 0&&t.registrationStatus===2}function w0(t){return t.requestStatus===2&&!I0(t)}function I0(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Kv}function b0(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function E0(t){return t.requestStatus===1&&t.requestTime+vf<Date.now()}/**
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
 */async function T0(t){const e=t,{installationEntry:n,registrationPromise:i}=await Ea(e);return i?i.catch(console.error):Ta(e).catch(console.error),n.fid}/**
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
 */async function S0(t,e=!1){const n=t;return await A0(n),(await Ta(n,e)).token}async function A0(t){const{registrationPromise:e}=await Ea(t);e&&await e}/**
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
 */function C0(t){if(!t||!t.options)throw _o("App Configuration");if(!t.name)throw _o("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw _o(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function _o(t){return Bn.create("missing-app-config-values",{valueName:t})}/**
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
 */const Mf="installations",R0="installations-internal",P0=t=>{const e=t.getProvider("app").getImmediate(),n=C0(e),i=Kn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},O0=t=>{const e=t.getProvider("app").getImmediate(),n=Kn(e,Mf).getImmediate();return{getId:()=>T0(n),getToken:s=>S0(n,s)}};function k0(){Lt(new bt(Mf,P0,"PUBLIC")),Lt(new bt(R0,O0,"PRIVATE"))}k0();ct(yf,Ia);ct(yf,Ia,"esm2017");/**
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
 */const ir="analytics",N0="firebase_id",D0="origin",x0=60*1e3,M0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Sa="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ye=new Rr("@firebase/analytics");/**
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
 */const L0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},tt=new qn("analytics","Analytics",L0);/**
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
 */function U0(t){if(!t.startsWith(Sa)){const e=tt.create("invalid-gtag-resource",{gtagURL:t});return Ye.warn(e.message),""}return t}function Lf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function F0(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function j0(t,e){const n=F0("firebase-js-sdk-policy",{createScriptURL:U0}),i=document.createElement("script"),s=`${Sa}?l=${t}&id=${e}`;i.src=n?n?.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function V0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function $0(t,e,n,i,s,o){const a=i[s];try{if(a)await e[a];else{const h=(await Lf(n)).find(d=>d.measurementId===s);h&&await e[h.appId]}}catch(l){Ye.error(l)}t("config",s,o)}async function B0(t,e,n,i,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Lf(n);for(const h of a){const d=l.find(m=>m.measurementId===h),p=d&&e[d.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",i,s||{})}catch(o){Ye.error(o)}}function H0(t,e,n,i){async function s(o,...a){try{if(o==="event"){const[l,h]=a;await B0(t,e,n,l,h)}else if(o==="config"){const[l,h]=a;await $0(t,e,n,i,l,h)}else if(o==="consent"){const[l,h]=a;t("consent",l,h)}else if(o==="get"){const[l,h,d]=a;t("get",l,h,d)}else if(o==="set"){const[l]=a;t("set",l)}else t(o,...a)}catch(l){Ye.error(l)}}return s}function W0(t,e,n,i,s){let o=function(...a){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=H0(o,t,e,n),{gtagCore:o,wrappedGtag:window[s]}}function z0(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Sa)&&n.src.includes(t))return n;return null}/**
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
 */const G0=30,q0=1e3;class K0{constructor(e={},n=q0){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Uf=new K0;function J0(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function X0(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:J0(i)},o=M0.replace("{app-id}",n),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let l="";try{const h=await a.json();!((e=h.error)===null||e===void 0)&&e.message&&(l=h.error.message)}catch{}throw tt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function Y0(t,e=Uf,n){const{appId:i,apiKey:s,measurementId:o}=t.options;if(!i)throw tt.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:i};throw tt.create("no-api-key")}const a=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new ew;return setTimeout(async()=>{l.abort()},x0),Ff({appId:i,apiKey:s,measurementId:o},a,l,e)}async function Ff(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=Uf){var o;const{appId:a,measurementId:l}=t;try{await Q0(i,e)}catch(h){if(l)return Ye.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h?.message}]`),{appId:a,measurementId:l};throw h}try{const h=await X0(t);return s.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!Z0(d)){if(s.deleteThrottleMetadata(a),l)return Ye.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d?.message}]`),{appId:a,measurementId:l};throw h}const p=Number((o=d?.customData)===null||o===void 0?void 0:o.httpStatus)===503?Pl(n,s.intervalMillis,G0):Pl(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return s.setThrottleMetadata(a,m),Ye.debug(`Calling attemptFetch again in ${p} millis`),Ff(t,m,i,s)}}function Q0(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),o=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(o),i(tt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Z0(t){if(!(t instanceof Et)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ew{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tw(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const o=await e,a=Object.assign(Object.assign({},i),{send_to:o});t("event",n,a)}}/**
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
 */async function nw(){if(uf())try{await hf()}catch(t){return Ye.warn(tt.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Ye.warn(tt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function iw(t,e,n,i,s,o,a){var l;const h=Y0(t);h.then(S=>{n[S.measurementId]=S.appId,t.options.measurementId&&S.measurementId!==t.options.measurementId&&Ye.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>Ye.error(S)),e.push(h);const d=nw().then(S=>{if(S)return i.getId()}),[p,m]=await Promise.all([h,d]);z0(o)||j0(o,p.measurementId),s("js",new Date);const v=(l=a?.config)!==null&&l!==void 0?l:{};return v[D0]="firebase",v.update=!0,m!=null&&(v[N0]=m),s("config",p.measurementId,v),p.measurementId}/**
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
 */class sw{constructor(e){this.app=e}_delete(){return delete qi[this.app.options.appId],Promise.resolve()}}let qi={},Vl=[];const $l={};let yo="dataLayer",rw="gtag",Bl,jf,Hl=!1;function ow(){const t=[];if(lf()&&t.push("This is a browser extension environment."),Ay()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=tt.create("invalid-analytics-context",{errorInfo:e});Ye.warn(n.message)}}function aw(t,e,n){ow();const i=t.options.appId;if(!i)throw tt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ye.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw tt.create("no-api-key");if(qi[i]!=null)throw tt.create("already-exists",{id:i});if(!Hl){V0(yo);const{wrappedGtag:o,gtagCore:a}=W0(qi,Vl,$l,yo,rw);jf=o,Bl=a,Hl=!0}return qi[i]=iw(t,Vl,$l,e,Bl,yo,n),new sw(t)}function cw(t=wa()){t=In(t);const e=Kn(t,ir);return e.isInitialized()?e.getImmediate():lw(t)}function lw(t,e={}){const n=Kn(t,ir);if(n.isInitialized()){const s=n.getImmediate();if(vn(e,n.getOptions()))return s;throw tt.create("already-initialized")}return n.initialize({options:e})}function uw(t,e,n,i){t=In(t),tw(jf,qi[t.app.options.appId],e,n,i).catch(s=>Ye.error(s))}const Wl="@firebase/analytics",zl="0.10.17";function hw(){Lt(new bt(ir,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return aw(i,s,n)},"PUBLIC")),Lt(new bt("analytics-internal",t,"PRIVATE")),ct(Wl,zl),ct(Wl,zl,"esm2017");function t(e){try{const n=e.getProvider(ir).getImmediate();return{logEvent:(i,s,o)=>uw(n,i,s,o)}}catch(n){throw tt.create("interop-component-reg-failed",{reason:n})}}}hw();function Aa(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Vf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fw=Vf,$f=new qn("auth","Firebase",Vf());/**
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
 */const sr=new Rr("@firebase/auth");function dw(t,...e){sr.logLevel<=ye.WARN&&sr.warn(`Auth (${_i}): ${t}`,...e)}function Hs(t,...e){sr.logLevel<=ye.ERROR&&sr.error(`Auth (${_i}): ${t}`,...e)}/**
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
 */function Ut(t,...e){throw Ra(t,...e)}function vt(t,...e){return Ra(t,...e)}function Ca(t,e,n){const i=Object.assign(Object.assign({},fw()),{[e]:n});return new qn("auth","Firebase",i).create(e,{appName:t.name})}function Mn(t){return Ca(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pw(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Ut(t,"argument-error"),Ca(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ra(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return $f.create(t,...e)}function te(t,e,...n){if(!t)throw Ra(e,...n)}function qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hs(e),new Error(e)}function Qt(t,e){t||qt(e)}/**
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
 */function Wo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gw(){return Gl()==="http:"||Gl()==="https:"}function Gl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function mw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gw()||lf()||"connection"in navigator)?navigator.onLine:!0}function _w(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class fs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qt(n>e,"Short delay should be less than long delay!"),this.isMobile=by()||Ty()}get(){return mw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pa(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Bf{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ww=new fs(3e4,6e4);function Oa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yi(t,e,n,i,s={}){return Hf(t,s,async()=>{let o={},a={};i&&(e==="GET"?a=i:o={body:JSON.stringify(i)});const l=hs(Object.assign({key:t.config.apiKey},a)).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:h},o);return Ey()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&us(t.emulatorConfig.host)&&(d.credentials="include"),Bf.fetch()(await Wf(t,t.config.apiHost,n,l),d)})}async function Hf(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},yw),e);try{const s=new bw(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Ms(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[h,d]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ms(t,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Ms(t,"email-already-in-use",a);if(h==="USER_DISABLED")throw Ms(t,"user-disabled",a);const p=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ca(t,p,d);Ut(t,p)}}catch(s){if(s instanceof Et)throw s;Ut(t,"network-request-failed",{message:String(s)})}}async function Iw(t,e,n,i,s={}){const o=await yi(t,e,n,i,s);return"mfaPendingCredential"in o&&Ut(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function Wf(t,e,n,i){const s=`${e}${n}?${i}`,o=t,a=o.config.emulator?Pa(t.config,s):`${t.config.apiScheme}://${s}`;return vw.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class bw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(vt(this.auth,"network-request-failed")),ww.get())})}}function Ms(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=vt(t,e,i);return s.customData._tokenResponse=n,s}/**
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
 */async function Ew(t,e){return yi(t,"POST","/v1/accounts:delete",e)}async function rr(t,e){return yi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ki(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Tw(t,e=!1){const n=In(t),i=await n.getIdToken(e),s=ka(i);te(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o?.sign_in_provider;return{claims:s,token:i,authTime:Ki(vo(s.auth_time)),issuedAtTime:Ki(vo(s.iat)),expirationTime:Ki(vo(s.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function vo(t){return Number(t)*1e3}function ka(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Hs("JWT malformed, contained fewer than 3 sections"),null;try{const s=nf(n);return s?JSON.parse(s):(Hs("Failed to decode base64 JWT payload"),null)}catch(s){return Hs("Caught error parsing JWT payload as JSON",s?.toString()),null}}function ql(t){const e=ka(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function os(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Et&&Sw(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Sw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Aw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ki(this.lastLoginAt),this.creationTime=Ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function or(t){var e;const n=t.auth,i=await t.getIdToken(),s=await os(t,rr(n,{idToken:i}));te(s?.users.length,n,"internal-error");const o=s.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?zf(o.providerUserInfo):[],l=Rw(t.providerData,a),h=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!l?.length,p=h?d:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new zo(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function Cw(t){const e=In(t);await or(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rw(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function zf(t){return t.map(e=>{var{providerId:n}=e,i=Aa(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Pw(t,e){const n=await Hf(t,{},async()=>{const i=hs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,a=await Wf(t,s,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:i};return t.emulatorConfig&&us(t.emulatorConfig.host)&&(h.credentials="include"),Bf.fetch()(a,h)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ow(t,e){return yi(t,"POST","/v2/accounts:revokeToken",Oa(t,e))}/**
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
 */class ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ql(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=ql(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:o}=await Pw(e,n);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:o}=n,a=new ai;return i&&(te(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(te(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(te(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ai,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
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
 */function an(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gt{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,o=Aa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Aw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new zo(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await os(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Tw(this,e)}reload(){return Cw(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await or(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pt(this.auth.app))return Promise.reject(Mn(this.auth));const e=await this.getIdToken();return await os(this,Ew(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,o,a,l,h,d,p;const m=(i=n.displayName)!==null&&i!==void 0?i:void 0,v=(s=n.email)!==null&&s!==void 0?s:void 0,S=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,x=(a=n.photoURL)!==null&&a!==void 0?a:void 0,L=(l=n.tenantId)!==null&&l!==void 0?l:void 0,G=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,K=(d=n.createdAt)!==null&&d!==void 0?d:void 0,B=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:W,emailVerified:z,isAnonymous:oe,providerData:fe,stsTokenManager:b}=n;te(W&&b,e,"internal-error");const _=ai.fromJSON(this.name,b);te(typeof W=="string",e,"internal-error"),an(m,e.name),an(v,e.name),te(typeof z=="boolean",e,"internal-error"),te(typeof oe=="boolean",e,"internal-error"),an(S,e.name),an(x,e.name),an(L,e.name),an(G,e.name),an(K,e.name),an(B,e.name);const I=new gt({uid:W,auth:e,email:v,emailVerified:z,displayName:m,isAnonymous:oe,photoURL:x,phoneNumber:S,tenantId:L,stsTokenManager:_,createdAt:K,lastLoginAt:B});return fe&&Array.isArray(fe)&&(I.providerData=fe.map(E=>Object.assign({},E))),G&&(I._redirectEventId=G),I}static async _fromIdTokenResponse(e,n,i=!1){const s=new ai;s.updateFromServerResponse(n);const o=new gt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await or(o),o}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];te(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?zf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!o?.length,l=new ai;l.updateFromIdToken(i);const h=new gt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new zo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!o?.length};return Object.assign(h,d),h}}/**
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
 */const Kl=new Map;function Kt(t){Qt(t instanceof Function,"Expected a class definition");let e=Kl.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kl.set(t,e),e)}/**
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
 */class Gf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gf.type="NONE";const Jl=Gf;/**
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
 */function Ws(t,e,n){return`firebase:${t}:${e}:${n}`}class ci{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:o}=this.auth;this.fullUserKey=Ws(this.userKey,s.apiKey,o),this.fullPersistenceKey=Ws("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await rr(this.auth,{idToken:e}).catch(()=>{});return n?gt._fromGetAccountInfoResponse(this.auth,n,e):null}return gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ci(Kt(Jl),e,i);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||Kt(Jl);const a=Ws(i,e.config.apiKey,e.name);let l=null;for(const d of n)try{const p=await d._get(a);if(p){let m;if(typeof p=="string"){const v=await rr(e,{idToken:p}).catch(()=>{});if(!v)break;m=await gt._fromGetAccountInfoResponse(e,v,p)}else m=gt._fromJSON(e,p);d!==o&&(l=m),o=d;break}}catch{}const h=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new ci(o,e,i):(o=h[0],l&&await o._set(a,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new ci(o,e,i))}}/**
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
 */function Xl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qf(e))return"Blackberry";if(Zf(e))return"Webos";if(Kf(e))return"Safari";if((e.includes("chrome/")||Jf(e))&&!e.includes("edge/"))return"Chrome";if(Yf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if(i?.length===2)return i[1]}return"Other"}function qf(t=Ke()){return/firefox\//i.test(t)}function Kf(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jf(t=Ke()){return/crios\//i.test(t)}function Xf(t=Ke()){return/iemobile/i.test(t)}function Yf(t=Ke()){return/android/i.test(t)}function Qf(t=Ke()){return/blackberry/i.test(t)}function Zf(t=Ke()){return/webos/i.test(t)}function Na(t=Ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kw(t=Ke()){var e;return Na(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Nw(){return Sy()&&document.documentMode===10}function ed(t=Ke()){return Na(t)||Yf(t)||Zf(t)||Qf(t)||/windows phone/i.test(t)||Xf(t)}/**
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
 */function td(t,e=[]){let n;switch(t){case"Browser":n=Xl(Ke());break;case"Worker":n=`${Xl(Ke())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_i}/${i}`}/**
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
 */class Dw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=o=>new Promise((a,l)=>{try{const h=e(o);a(h)}catch(h){l(h)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function xw(t,e={}){return yi(t,"GET","/v2/passwordPolicy",Oa(t,e))}/**
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
 */const Mw=6;class Lw{constructor(e){var n,i,s,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Mw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,o,a,l;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(i=h.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(s=h.containsLowercaseLetter)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(l=h.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),h}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class Uw{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yl(this),this.idTokenSubscription=new Yl(this),this.beforeStateQueue=new Dw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$f,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var i,s,o;if(!this._deleted&&(this.persistenceManager=await ci.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rr(this,{idToken:e}),i=await gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s?._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===l)&&h?.user&&(s=h.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await or(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_w()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pt(this.app))return Promise.reject(Mn(this));const n=e?In(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pt(this.app)?Promise.reject(Mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pt(this.app)?Promise.reject(Mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xw(this),n=new Lw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qn("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Ow(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kt(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await ci.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,i,s);return()=>{a=!0,h()}}else{const h=e.addObserver(n);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=td(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&dw(`Error while retrieving App Check token: ${n.error}`),n?.token}}function kr(t){return In(t)}class Yl{constructor(e){this.auth=e,this.observer=null,this.addObserver=ky(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Da={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fw(t){Da=t}function jw(t){return Da.loadJS(t)}function Vw(){return Da.gapiScript}function $w(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Bw(t,e){const n=Kn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(vn(o,e??{}))return s;Ut(s,"already-initialized")}return n.initialize({options:e})}function Hw(t,e){const n=e?.persistence||[],i=(Array.isArray(n)?n:[n]).map(Kt);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e?.popupRedirectResolver)}function Ww(t,e,n){const i=kr(t);te(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,o=nd(e),{host:a,port:l}=zw(e),h=l===null?"":`:${l}`,d={url:`${o}//${a}${h}/`},p=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){te(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),te(vn(d,i.config.emulator)&&vn(p,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=d,i.emulatorConfig=p,i.settings.appVerificationDisabledForTesting=!0,us(a)?(af(`${o}//${a}${h}`),cf("Auth",!0)):Gw()}function nd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zw(t){const e=nd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const o=s[1];return{host:o,port:Ql(i.substr(o.length+1))}}else{const[o,a]=i.split(":");return{host:o,port:Ql(a)}}}function Ql(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class id{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,n){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}/**
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
 */async function li(t,e){return Iw(t,"POST","/v1/accounts:signInWithIdp",Oa(t,e))}/**
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
 */const qw="http://localhost";class Wn extends id{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,o=Aa(n,["providerId","signInMethod"]);if(!i||!s)return null;const a=new Wn(i,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return li(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,li(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,li(e,n)}buildRequest(){const e={requestUri:qw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hs(n)}return e}}/**
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
 */class xa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ds extends xa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dn extends ds{constructor(){super("facebook.com")}static credential(e){return Wn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
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
 */class zt extends ds{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return zt.credential(n,i)}catch{return null}}}zt.GOOGLE_SIGN_IN_METHOD="google.com";zt.PROVIDER_ID="google.com";/**
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
 */class pn extends ds{constructor(){super("github.com")}static credential(e){return Wn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
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
 */class gn extends ds{constructor(){super("twitter.com")}static credential(e,n){return Wn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return gn.credential(n,i)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
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
 */class gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const o=await gt._fromIdTokenResponse(e,i,s),a=Zl(i);return new gi({user:o,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Zl(i);return new gi({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Zl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ar extends Et{constructor(e,n,i,s){var o;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,ar.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new ar(e,n,i,s)}}function sd(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ar._fromErrorAndOperation(t,o,e,i):o})}async function Kw(t,e,n=!1){const i=await os(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gi._forOperation(t,"link",i)}/**
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
 */async function Jw(t,e,n=!1){const{auth:i}=t;if(pt(i.app))return Promise.reject(Mn(i));const s="reauthenticate";try{const o=await os(t,sd(i,s,e,t),n);te(o.idToken,i,"internal-error");const a=ka(o.idToken);te(a,i,"internal-error");const{sub:l}=a;return te(t.uid===l,i,"user-mismatch"),gi._forOperation(t,s,o)}catch(o){throw o?.code==="auth/user-not-found"&&Ut(i,"user-mismatch"),o}}/**
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
 */async function Xw(t,e,n=!1){if(pt(t.app))return Promise.reject(Mn(t));const i="signIn",s=await sd(t,i,e),o=await gi._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(o.user),o}function Yw(t,e,n,i){return In(t).onIdTokenChanged(e,n,i)}function Qw(t,e,n){return In(t).beforeAuthStateChanged(e,n)}const cr="__sak";/**
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
 */class rd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cr,"1"),this.storage.removeItem(cr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Zw=1e3,eI=10;class od extends rd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ed(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},o=this.storage.getItem(i);Nw()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,eI):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Zw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}od.type="LOCAL";const tI=od;/**
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
 */class ad extends rd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ad.type="SESSION";const cd=ad;/**
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
 */function nI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Nr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Nr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:o}=n.data,a=this.handlersMap[s];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(a).map(async d=>d(n.origin,o)),h=await nI(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nr.receivers=[];/**
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
 */function Ma(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class iI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((l,h)=>{const d=Ma("",20);s.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(m){const v=m;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(v.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function xt(){return window}function sI(t){xt().location.href=t}/**
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
 */function ld(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function rI(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oI(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aI(){return ld()?self:null}/**
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
 */const ud="firebaseLocalStorageDb",cI=1,lr="firebaseLocalStorage",hd="fbase_key";class ps{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dr(t,e){return t.transaction([lr],e?"readwrite":"readonly").objectStore(lr)}function lI(){const t=indexedDB.deleteDatabase(ud);return new ps(t).toPromise()}function Go(){const t=indexedDB.open(ud,cI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(lr,{keyPath:hd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(lr)?e(i):(i.close(),await lI(),e(await Go()))})})}async function eu(t,e,n){const i=Dr(t,!0).put({[hd]:e,value:n});return new ps(i).toPromise()}async function uI(t,e){const n=Dr(t,!1).get(e),i=await new ps(n).toPromise();return i===void 0?null:i.value}function tu(t,e){const n=Dr(t,!0).delete(e);return new ps(n).toPromise()}const hI=800,fI=3;class fd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Go(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>fI)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ld()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nr._getInstance(aI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rI(),!this.activeServiceWorker)return;this.sender=new iI(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Go();return await eu(e,cr,"1"),await tu(e,cr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>eu(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>uI(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Dr(s,!1).getAll();return new ps(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fd.type="LOCAL";const dI=fd;new fs(3e4,6e4);/**
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
 */function dd(t,e){return e?Kt(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class La extends id{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pI(t){return Xw(t.auth,new La(t),t.bypassAuthState)}function gI(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),Jw(n,new La(t),t.bypassAuthState)}async function mI(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),Kw(n,new La(t),t.bypassAuthState)}/**
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
 */class pd{constructor(e,n,i,s,o=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:n,sessionId:i,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pI;case"linkViaPopup":case"linkViaRedirect":return mI;case"reauthViaPopup":case"reauthViaRedirect":return gI;default:Ut(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _I=new fs(2e3,1e4);async function yI(t,e,n){if(pt(t.app))return Promise.reject(vt(t,"operation-not-supported-in-this-environment"));const i=kr(t);pw(t,e,xa);const s=dd(i,n);return new kn(i,"signInViaPopup",e,s).executeNotNull()}class kn extends pd{constructor(e,n,i,s,o){super(e,n,s,o),this.provider=i,this.authWindow=null,this.pollId=null,kn.currentPopupAction&&kn.currentPopupAction.cancel(),kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=Ma();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_I.get())};e()}}kn.currentPopupAction=null;/**
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
 */const vI="pendingRedirect",zs=new Map;class wI extends pd{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=zs.get(this.auth._key());if(!e){try{const i=await II(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}zs.set(this.auth._key(),e)}return this.bypassAuthState||zs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function II(t,e){const n=TI(e),i=EI(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function bI(t,e){zs.set(t._key(),e)}function EI(t){return Kt(t._redirectPersistence)}function TI(t){return Ws(vI,t.config.apiKey,t.name)}async function SI(t,e,n=!1){if(pt(t.app))return Promise.reject(Mn(t));const i=kr(t),s=dd(i,e),a=await new wI(i,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
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
 */const AI=10*60*1e3;class CI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!gd(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(vt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AI&&this.cachedEventUids.clear(),this.cachedEventUids.has(nu(e))}saveEventToCache(e){this.cachedEventUids.add(nu(e)),this.lastProcessedEventTime=Date.now()}}function nu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gd({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function RI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gd(t);default:return!1}}/**
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
 */async function PI(t,e={}){return yi(t,"GET","/v1/projects",e)}/**
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
 */const OI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kI=/^https?/;async function NI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PI(t);for(const n of e)try{if(DI(n))return}catch{}Ut(t,"unauthorized-domain")}function DI(t){const e=Wo(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!kI.test(n))return!1;if(OI.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const xI=new fs(3e4,6e4);function iu(){const t=xt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MI(t){return new Promise((e,n)=>{var i,s,o;function a(){iu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iu(),n(vt(t,"network-request-failed"))},timeout:xI.get()})}if(!((s=(i=xt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=xt().gapi)===null||o===void 0)&&o.load)a();else{const l=$w("iframefcb");return xt()[l]=()=>{gapi.load?a():n(vt(t,"network-request-failed"))},jw(`${Vw()}?onload=${l}`).catch(h=>n(h))}}).catch(e=>{throw Gs=null,e})}let Gs=null;function LI(t){return Gs=Gs||MI(t),Gs}/**
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
 */const UI=new fs(5e3,15e3),FI="__/auth/iframe",jI="emulator/auth/iframe",VI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$I=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BI(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pa(e,jI):`https://${t.config.authDomain}/${FI}`,i={apiKey:e.apiKey,appName:t.name,v:_i},s=$I.get(t.config.apiHost);s&&(i.eid=s);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${hs(i).slice(1)}`}async function HI(t){const e=await LI(t),n=xt().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:BI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VI,dontclear:!0},i=>new Promise(async(s,o)=>{await i.restyle({setHideOnLeave:!1});const a=vt(t,"network-request-failed"),l=xt().setTimeout(()=>{o(a)},UI.get());function h(){xt().clearTimeout(l),s(i)}i.ping(h).then(h,()=>{o(a)})}))}/**
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
 */const WI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zI=500,GI=600,qI="_blank",KI="http://localhost";class su{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JI(t,e,n,i=zI,s=GI){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const h=Object.assign(Object.assign({},WI),{width:i.toString(),height:s.toString(),top:o,left:a}),d=Ke().toLowerCase();n&&(l=Jf(d)?qI:n),qf(d)&&(e=e||KI,h.scrollbars="yes");const p=Object.entries(h).reduce((v,[S,x])=>`${v}${S}=${x},`,"");if(kw(d)&&l!=="_self")return XI(e||"",l),new su(null);const m=window.open(e||"",l,p);te(m,t,"popup-blocked");try{m.focus()}catch{}return new su(m)}function XI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const YI="__/auth/handler",QI="emulator/auth/handler",ZI=encodeURIComponent("fac");async function ru(t,e,n,i,s,o){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:_i,eventId:s};if(e instanceof xa){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Oy(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))a[p]=m}if(e instanceof ds){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const h=await t._getAppCheckToken(),d=h?`#${ZI}=${encodeURIComponent(h)}`:"";return`${eb(t)}?${hs(l).slice(1)}${d}`}function eb({config:t}){return t.emulator?Pa(t,QI):`https://${t.authDomain}/${YI}`}/**
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
 */const wo="webStorageSupport";class tb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cd,this._completeRedirectFn=SI,this._overrideRedirectResult=bI}async _openPopup(e,n,i,s){var o;Qt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await ru(e,n,i,Wo(),s);return JI(e,a,Ma())}async _openRedirect(e,n,i,s){await this._originValidation(e);const o=await ru(e,n,i,Wo(),s);return sI(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(Qt(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await HI(e),i=new CI(e);return n.register("authEvent",s=>(te(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wo,{type:wo},s=>{var o;const a=(o=s?.[0])===null||o===void 0?void 0:o[wo];a!==void 0&&n(!!a),Ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ed()||Kf()||Na()}}const nb=tb;var ou="@firebase/auth",au="1.10.8";/**
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
 */class ib{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function sb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rb(t){Lt(new bt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=i.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const h={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:td(t)},d=new Uw(i,s,o,h);return Hw(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Lt(new bt("auth-internal",e=>{const n=kr(e.getProvider("auth").getImmediate());return(i=>new ib(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ct(ou,au,sb(t)),ct(ou,au,"esm2017")}/**
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
 */const ob=5*60,ab=of("authIdTokenMaxAge")||ob;let cu=null;const cb=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>ab)return;const s=n?.token;cu!==s&&(cu=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lb(t=wa()){const e=Kn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bw(t,{popupRedirectResolver:nb,persistence:[dI,tI,cd]}),i=of("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const a=cb(o.toString());Qw(n,a,()=>a(n.currentUser)),Yw(n,l=>a(l))}}const s=sf("auth");return s&&Ww(n,`http://${s}`),n}function ub(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Fw({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const o=vt("internal-error");o.customData=s,n(o)},i.type="text/javascript",i.charset="UTF-8",ub().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rb("Browser");var lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ua;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,_){function I(){}I.prototype=_.prototype,b.D=_.prototype,b.prototype=new I,b.prototype.constructor=b,b.C=function(E,T,C){for(var w=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)w[$e-2]=arguments[$e];return _.prototype[T].apply(E,w)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,_,I){I||(I=0);var E=Array(16);if(typeof _=="string")for(var T=0;16>T;++T)E[T]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(T=0;16>T;++T)E[T]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=b.g[0],I=b.g[1],T=b.g[2];var C=b.g[3],w=_+(C^I&(T^C))+E[0]+3614090360&4294967295;_=I+(w<<7&4294967295|w>>>25),w=C+(T^_&(I^T))+E[1]+3905402710&4294967295,C=_+(w<<12&4294967295|w>>>20),w=T+(I^C&(_^I))+E[2]+606105819&4294967295,T=C+(w<<17&4294967295|w>>>15),w=I+(_^T&(C^_))+E[3]+3250441966&4294967295,I=T+(w<<22&4294967295|w>>>10),w=_+(C^I&(T^C))+E[4]+4118548399&4294967295,_=I+(w<<7&4294967295|w>>>25),w=C+(T^_&(I^T))+E[5]+1200080426&4294967295,C=_+(w<<12&4294967295|w>>>20),w=T+(I^C&(_^I))+E[6]+2821735955&4294967295,T=C+(w<<17&4294967295|w>>>15),w=I+(_^T&(C^_))+E[7]+4249261313&4294967295,I=T+(w<<22&4294967295|w>>>10),w=_+(C^I&(T^C))+E[8]+1770035416&4294967295,_=I+(w<<7&4294967295|w>>>25),w=C+(T^_&(I^T))+E[9]+2336552879&4294967295,C=_+(w<<12&4294967295|w>>>20),w=T+(I^C&(_^I))+E[10]+4294925233&4294967295,T=C+(w<<17&4294967295|w>>>15),w=I+(_^T&(C^_))+E[11]+2304563134&4294967295,I=T+(w<<22&4294967295|w>>>10),w=_+(C^I&(T^C))+E[12]+1804603682&4294967295,_=I+(w<<7&4294967295|w>>>25),w=C+(T^_&(I^T))+E[13]+4254626195&4294967295,C=_+(w<<12&4294967295|w>>>20),w=T+(I^C&(_^I))+E[14]+2792965006&4294967295,T=C+(w<<17&4294967295|w>>>15),w=I+(_^T&(C^_))+E[15]+1236535329&4294967295,I=T+(w<<22&4294967295|w>>>10),w=_+(T^C&(I^T))+E[1]+4129170786&4294967295,_=I+(w<<5&4294967295|w>>>27),w=C+(I^T&(_^I))+E[6]+3225465664&4294967295,C=_+(w<<9&4294967295|w>>>23),w=T+(_^I&(C^_))+E[11]+643717713&4294967295,T=C+(w<<14&4294967295|w>>>18),w=I+(C^_&(T^C))+E[0]+3921069994&4294967295,I=T+(w<<20&4294967295|w>>>12),w=_+(T^C&(I^T))+E[5]+3593408605&4294967295,_=I+(w<<5&4294967295|w>>>27),w=C+(I^T&(_^I))+E[10]+38016083&4294967295,C=_+(w<<9&4294967295|w>>>23),w=T+(_^I&(C^_))+E[15]+3634488961&4294967295,T=C+(w<<14&4294967295|w>>>18),w=I+(C^_&(T^C))+E[4]+3889429448&4294967295,I=T+(w<<20&4294967295|w>>>12),w=_+(T^C&(I^T))+E[9]+568446438&4294967295,_=I+(w<<5&4294967295|w>>>27),w=C+(I^T&(_^I))+E[14]+3275163606&4294967295,C=_+(w<<9&4294967295|w>>>23),w=T+(_^I&(C^_))+E[3]+4107603335&4294967295,T=C+(w<<14&4294967295|w>>>18),w=I+(C^_&(T^C))+E[8]+1163531501&4294967295,I=T+(w<<20&4294967295|w>>>12),w=_+(T^C&(I^T))+E[13]+2850285829&4294967295,_=I+(w<<5&4294967295|w>>>27),w=C+(I^T&(_^I))+E[2]+4243563512&4294967295,C=_+(w<<9&4294967295|w>>>23),w=T+(_^I&(C^_))+E[7]+1735328473&4294967295,T=C+(w<<14&4294967295|w>>>18),w=I+(C^_&(T^C))+E[12]+2368359562&4294967295,I=T+(w<<20&4294967295|w>>>12),w=_+(I^T^C)+E[5]+4294588738&4294967295,_=I+(w<<4&4294967295|w>>>28),w=C+(_^I^T)+E[8]+2272392833&4294967295,C=_+(w<<11&4294967295|w>>>21),w=T+(C^_^I)+E[11]+1839030562&4294967295,T=C+(w<<16&4294967295|w>>>16),w=I+(T^C^_)+E[14]+4259657740&4294967295,I=T+(w<<23&4294967295|w>>>9),w=_+(I^T^C)+E[1]+2763975236&4294967295,_=I+(w<<4&4294967295|w>>>28),w=C+(_^I^T)+E[4]+1272893353&4294967295,C=_+(w<<11&4294967295|w>>>21),w=T+(C^_^I)+E[7]+4139469664&4294967295,T=C+(w<<16&4294967295|w>>>16),w=I+(T^C^_)+E[10]+3200236656&4294967295,I=T+(w<<23&4294967295|w>>>9),w=_+(I^T^C)+E[13]+681279174&4294967295,_=I+(w<<4&4294967295|w>>>28),w=C+(_^I^T)+E[0]+3936430074&4294967295,C=_+(w<<11&4294967295|w>>>21),w=T+(C^_^I)+E[3]+3572445317&4294967295,T=C+(w<<16&4294967295|w>>>16),w=I+(T^C^_)+E[6]+76029189&4294967295,I=T+(w<<23&4294967295|w>>>9),w=_+(I^T^C)+E[9]+3654602809&4294967295,_=I+(w<<4&4294967295|w>>>28),w=C+(_^I^T)+E[12]+3873151461&4294967295,C=_+(w<<11&4294967295|w>>>21),w=T+(C^_^I)+E[15]+530742520&4294967295,T=C+(w<<16&4294967295|w>>>16),w=I+(T^C^_)+E[2]+3299628645&4294967295,I=T+(w<<23&4294967295|w>>>9),w=_+(T^(I|~C))+E[0]+4096336452&4294967295,_=I+(w<<6&4294967295|w>>>26),w=C+(I^(_|~T))+E[7]+1126891415&4294967295,C=_+(w<<10&4294967295|w>>>22),w=T+(_^(C|~I))+E[14]+2878612391&4294967295,T=C+(w<<15&4294967295|w>>>17),w=I+(C^(T|~_))+E[5]+4237533241&4294967295,I=T+(w<<21&4294967295|w>>>11),w=_+(T^(I|~C))+E[12]+1700485571&4294967295,_=I+(w<<6&4294967295|w>>>26),w=C+(I^(_|~T))+E[3]+2399980690&4294967295,C=_+(w<<10&4294967295|w>>>22),w=T+(_^(C|~I))+E[10]+4293915773&4294967295,T=C+(w<<15&4294967295|w>>>17),w=I+(C^(T|~_))+E[1]+2240044497&4294967295,I=T+(w<<21&4294967295|w>>>11),w=_+(T^(I|~C))+E[8]+1873313359&4294967295,_=I+(w<<6&4294967295|w>>>26),w=C+(I^(_|~T))+E[15]+4264355552&4294967295,C=_+(w<<10&4294967295|w>>>22),w=T+(_^(C|~I))+E[6]+2734768916&4294967295,T=C+(w<<15&4294967295|w>>>17),w=I+(C^(T|~_))+E[13]+1309151649&4294967295,I=T+(w<<21&4294967295|w>>>11),w=_+(T^(I|~C))+E[4]+4149444226&4294967295,_=I+(w<<6&4294967295|w>>>26),w=C+(I^(_|~T))+E[11]+3174756917&4294967295,C=_+(w<<10&4294967295|w>>>22),w=T+(_^(C|~I))+E[2]+718787259&4294967295,T=C+(w<<15&4294967295|w>>>17),w=I+(C^(T|~_))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+_&4294967295,b.g[1]=b.g[1]+(T+(w<<21&4294967295|w>>>11))&4294967295,b.g[2]=b.g[2]+T&4294967295,b.g[3]=b.g[3]+C&4294967295}i.prototype.u=function(b,_){_===void 0&&(_=b.length);for(var I=_-this.blockSize,E=this.B,T=this.h,C=0;C<_;){if(T==0)for(;C<=I;)s(this,b,C),C+=this.blockSize;if(typeof b=="string"){for(;C<_;)if(E[T++]=b.charCodeAt(C++),T==this.blockSize){s(this,E),T=0;break}}else for(;C<_;)if(E[T++]=b[C++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=_},i.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var _=1;_<b.length-8;++_)b[_]=0;var I=8*this.o;for(_=b.length-8;_<b.length;++_)b[_]=I&255,I/=256;for(this.u(b),b=Array(16),_=I=0;4>_;++_)for(var E=0;32>E;E+=8)b[I++]=this.g[_]>>>E&255;return b};function o(b,_){var I=l;return Object.prototype.hasOwnProperty.call(I,b)?I[b]:I[b]=_(b)}function a(b,_){this.h=_;for(var I=[],E=!0,T=b.length-1;0<=T;T--){var C=b[T]|0;E&&C==_||(I[T]=C,E=!1)}this.g=I}var l={};function h(b){return-128<=b&&128>b?o(b,function(_){return new a([_|0],0>_?-1:0)}):new a([b|0],0>b?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return m;if(0>b)return G(d(-b));for(var _=[],I=1,E=0;b>=I;E++)_[E]=b/I|0,I*=4294967296;return new a(_,0)}function p(b,_){if(b.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(b.charAt(0)=="-")return G(p(b.substring(1),_));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=d(Math.pow(_,8)),E=m,T=0;T<b.length;T+=8){var C=Math.min(8,b.length-T),w=parseInt(b.substring(T,T+C),_);8>C?(C=d(Math.pow(_,C)),E=E.j(C).add(d(w))):(E=E.j(I),E=E.add(d(w)))}return E}var m=h(0),v=h(1),S=h(16777216);t=a.prototype,t.m=function(){if(L(this))return-G(this).m();for(var b=0,_=1,I=0;I<this.g.length;I++){var E=this.i(I);b+=(0<=E?E:4294967296+E)*_,_*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(x(this))return"0";if(L(this))return"-"+G(this).toString(b);for(var _=d(Math.pow(b,6)),I=this,E="";;){var T=z(I,_).g;I=K(I,T.j(_));var C=((0<I.g.length?I.g[0]:I.h)>>>0).toString(b);if(I=T,x(I))return C+E;for(;6>C.length;)C="0"+C;E=C+E}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function x(b){if(b.h!=0)return!1;for(var _=0;_<b.g.length;_++)if(b.g[_]!=0)return!1;return!0}function L(b){return b.h==-1}t.l=function(b){return b=K(this,b),L(b)?-1:x(b)?0:1};function G(b){for(var _=b.g.length,I=[],E=0;E<_;E++)I[E]=~b.g[E];return new a(I,~b.h).add(v)}t.abs=function(){return L(this)?G(this):this},t.add=function(b){for(var _=Math.max(this.g.length,b.g.length),I=[],E=0,T=0;T<=_;T++){var C=E+(this.i(T)&65535)+(b.i(T)&65535),w=(C>>>16)+(this.i(T)>>>16)+(b.i(T)>>>16);E=w>>>16,C&=65535,w&=65535,I[T]=w<<16|C}return new a(I,I[I.length-1]&-2147483648?-1:0)};function K(b,_){return b.add(G(_))}t.j=function(b){if(x(this)||x(b))return m;if(L(this))return L(b)?G(this).j(G(b)):G(G(this).j(b));if(L(b))return G(this.j(G(b)));if(0>this.l(S)&&0>b.l(S))return d(this.m()*b.m());for(var _=this.g.length+b.g.length,I=[],E=0;E<2*_;E++)I[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<b.g.length;T++){var C=this.i(E)>>>16,w=this.i(E)&65535,$e=b.i(T)>>>16,nt=b.i(T)&65535;I[2*E+2*T]+=w*nt,B(I,2*E+2*T),I[2*E+2*T+1]+=C*nt,B(I,2*E+2*T+1),I[2*E+2*T+1]+=w*$e,B(I,2*E+2*T+1),I[2*E+2*T+2]+=C*$e,B(I,2*E+2*T+2)}for(E=0;E<_;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=_;E<2*_;E++)I[E]=0;return new a(I,0)};function B(b,_){for(;(b[_]&65535)!=b[_];)b[_+1]+=b[_]>>>16,b[_]&=65535,_++}function W(b,_){this.g=b,this.h=_}function z(b,_){if(x(_))throw Error("division by zero");if(x(b))return new W(m,m);if(L(b))return _=z(G(b),_),new W(G(_.g),G(_.h));if(L(_))return _=z(b,G(_)),new W(G(_.g),_.h);if(30<b.g.length){if(L(b)||L(_))throw Error("slowDivide_ only works with positive integers.");for(var I=v,E=_;0>=E.l(b);)I=oe(I),E=oe(E);var T=fe(I,1),C=fe(E,1);for(E=fe(E,2),I=fe(I,2);!x(E);){var w=C.add(E);0>=w.l(b)&&(T=T.add(I),C=w),E=fe(E,1),I=fe(I,1)}return _=K(b,T.j(_)),new W(T,_)}for(T=m;0<=b.l(_);){for(I=Math.max(1,Math.floor(b.m()/_.m())),E=Math.ceil(Math.log(I)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),C=d(I),w=C.j(_);L(w)||0<w.l(b);)I-=E,C=d(I),w=C.j(_);x(C)&&(C=v),T=T.add(C),b=K(b,w)}return new W(T,b)}t.A=function(b){return z(this,b).h},t.and=function(b){for(var _=Math.max(this.g.length,b.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)&b.i(E);return new a(I,this.h&b.h)},t.or=function(b){for(var _=Math.max(this.g.length,b.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)|b.i(E);return new a(I,this.h|b.h)},t.xor=function(b){for(var _=Math.max(this.g.length,b.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)^b.i(E);return new a(I,this.h^b.h)};function oe(b){for(var _=b.g.length+1,I=[],E=0;E<_;E++)I[E]=b.i(E)<<1|b.i(E-1)>>>31;return new a(I,b.h)}function fe(b,_){var I=_>>5;_%=32;for(var E=b.g.length-I,T=[],C=0;C<E;C++)T[C]=0<_?b.i(C+I)>>>_|b.i(C+I+1)<<32-_:b.i(C+I);return new a(T,b.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Ua=a}).apply(typeof lu<"u"?lu:typeof self<"u"?self:typeof window<"u"?window:{});var Ls=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,c,u){return r==Array.prototype||r==Object.prototype||(r[c]=u.value),r};function n(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ls=="object"&&Ls];for(var c=0;c<r.length;++c){var u=r[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var i=n(this);function s(r,c){if(c)e:{var u=i;r=r.split(".");for(var f=0;f<r.length-1;f++){var R=r[f];if(!(R in u))break e;u=u[R]}r=r[r.length-1],f=u[r],c=c(f),c!=f&&c!=null&&e(u,r,{configurable:!0,writable:!0,value:c})}}function o(r,c){r instanceof String&&(r+="");var u=0,f=!1,R={next:function(){if(!f&&u<r.length){var P=u++;return{value:c(P,r[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(r){return r||function(){return o(this,function(c,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(r){var c=typeof r;return c=c!="object"?c:r?Array.isArray(r)?"array":c:"null",c=="array"||c=="object"&&typeof r.length=="number"}function d(r){var c=typeof r;return c=="object"&&r!=null||c=="function"}function p(r,c,u){return r.call.apply(r.bind,arguments)}function m(r,c,u){if(!r)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,f),r.apply(c,R)}}return function(){return r.apply(c,arguments)}}function v(r,c,u){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,v.apply(null,arguments)}function S(r,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),r.apply(this,f)}}function x(r,c){function u(){}u.prototype=c.prototype,r.aa=c.prototype,r.prototype=new u,r.prototype.constructor=r,r.Qb=function(f,R,P){for(var j=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)j[ve-2]=arguments[ve];return c.prototype[R].apply(f,j)}}function L(r){const c=r.length;if(0<c){const u=Array(c);for(let f=0;f<c;f++)u[f]=r[f];return u}return[]}function G(r,c){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const R=r.length||0,P=f.length||0;r.length=R+P;for(let j=0;j<P;j++)r[R+j]=f[j]}else r.push(f)}}class K{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function B(r){return/^[\s\xa0]*$/.test(r)}function W(){var r=l.navigator;return r&&(r=r.userAgent)?r:""}function z(r){return z[" "](r),r}z[" "]=function(){};var oe=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function fe(r,c,u){for(const f in r)c.call(u,r[f],f,r)}function b(r,c){for(const u in r)c.call(void 0,r[u],u,r)}function _(r){const c={};for(const u in r)c[u]=r[u];return c}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(r,c){let u,f;for(let R=1;R<arguments.length;R++){f=arguments[R];for(u in f)r[u]=f[u];for(let P=0;P<I.length;P++)u=I[P],Object.prototype.hasOwnProperty.call(f,u)&&(r[u]=f[u])}}function T(r){var c=1;r=r.split(":");const u=[];for(;0<c&&r.length;)u.push(r.shift()),c--;return r.length&&u.push(r.join(":")),u}function C(r){l.setTimeout(()=>{throw r},0)}function w(){var r=Qe;let c=null;return r.g&&(c=r.g,r.g=r.g.next,r.g||(r.h=null),c.next=null),c}class $e{constructor(){this.h=this.g=null}add(c,u){const f=nt.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var nt=new K(()=>new Ce,r=>r.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,re=!1,Qe=new $e,ut=()=>{const r=l.Promise.resolve(void 0);ae=()=>{r.then(it)}};var it=()=>{for(var r;r=w();){try{r.h.call(r.g)}catch(u){C(u)}var c=nt;c.j(r),100>c.h&&(c.h++,r.next=c.g,c.g=r)}re=!1};function Ee(){this.s=this.s,this.C=this.C}Ee.prototype.s=!1,Ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(r,c){this.type=r,this.g=this.target=c,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var en=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var r=!1,c=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const u=()=>{};l.addEventListener("test",u,c),l.removeEventListener("test",u,c)}catch{}return r}();function Tt(r,c){if(Te.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var u=this.type=r.type,f=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=c,c=r.relatedTarget){if(oe){e:{try{z(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else u=="mouseover"?c=r.fromElement:u=="mouseout"&&(c=r.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:Je[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Tt.aa.h.call(this)}}x(Tt,Te);var Je={2:"touch",3:"pen",4:"mouse"};Tt.prototype.h=function(){Tt.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),q=0;function H(r,c,u,f,R){this.listener=r,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=R,this.key=++q,this.da=this.fa=!1}function J(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function de(r){this.src=r,this.g={},this.h=0}de.prototype.add=function(r,c,u,f,R){var P=r.toString();r=this.g[P],r||(r=this.g[P]=[],this.h++);var j=y(r,c,f,R);return-1<j?(c=r[j],u||(c.fa=!1)):(c=new H(c,this.src,P,!!f,R),c.fa=u,r.push(c)),c};function g(r,c){var u=c.type;if(u in r.g){var f=r.g[u],R=Array.prototype.indexOf.call(f,c,void 0),P;(P=0<=R)&&Array.prototype.splice.call(f,R,1),P&&(J(c),r.g[u].length==0&&(delete r.g[u],r.h--))}}function y(r,c,u,f){for(var R=0;R<r.length;++R){var P=r[R];if(!P.da&&P.listener==c&&P.capture==!!u&&P.ha==f)return R}return-1}var A="closure_lm_"+(1e6*Math.random()|0),k={};function D(r,c,u,f,R){if(Array.isArray(c)){for(var P=0;P<c.length;P++)D(r,c[P],u,f,R);return null}return u=ee(u),r&&r[O]?r.K(c,u,d(f)?!!f.capture:!1,R):N(r,c,u,!1,f,R)}function N(r,c,u,f,R,P){if(!c)throw Error("Invalid event type");var j=d(R)?!!R.capture:!!R,ve=V(r);if(ve||(r[A]=ve=new de(r)),u=ve.add(c,u,f,j,P),u.proxy)return u;if(f=$(),u.proxy=f,f.src=r,f.listener=u,r.addEventListener)en||(R=j),R===void 0&&(R=!1),r.addEventListener(c.toString(),f,R);else if(r.attachEvent)r.attachEvent(M(c.toString()),f);else if(r.addListener&&r.removeListener)r.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function $(){function r(u){return c.call(r.src,r.listener,u)}const c=Y;return r}function F(r,c,u,f,R){if(Array.isArray(c))for(var P=0;P<c.length;P++)F(r,c[P],u,f,R);else f=d(f)?!!f.capture:!!f,u=ee(u),r&&r[O]?(r=r.i,c=String(c).toString(),c in r.g&&(P=r.g[c],u=y(P,u,f,R),-1<u&&(J(P[u]),Array.prototype.splice.call(P,u,1),P.length==0&&(delete r.g[c],r.h--)))):r&&(r=V(r))&&(c=r.g[c.toString()],r=-1,c&&(r=y(c,u,f,R)),(u=-1<r?c[r]:null)&&U(u))}function U(r){if(typeof r!="number"&&r&&!r.da){var c=r.src;if(c&&c[O])g(c.i,r);else{var u=r.type,f=r.proxy;c.removeEventListener?c.removeEventListener(u,f,r.capture):c.detachEvent?c.detachEvent(M(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=V(c))?(g(u,r),u.h==0&&(u.src=null,c[A]=null)):J(r)}}}function M(r){return r in k?k[r]:k[r]="on"+r}function Y(r,c){if(r.da)r=!0;else{c=new Tt(c,this);var u=r.listener,f=r.ha||r.src;r.fa&&U(r),r=u.call(f,c)}return r}function V(r){return r=r[A],r instanceof de?r:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function ee(r){return typeof r=="function"?r:(r[X]||(r[X]=function(c){return r.handleEvent(c)}),r[X])}function Q(){Ee.call(this),this.i=new de(this),this.M=this,this.F=null}x(Q,Ee),Q.prototype[O]=!0,Q.prototype.removeEventListener=function(r,c,u,f){F(this,r,c,u,f)};function ie(r,c){var u,f=r.F;if(f)for(u=[];f;f=f.F)u.push(f);if(r=r.M,f=c.type||c,typeof c=="string")c=new Te(c,r);else if(c instanceof Te)c.target=c.target||r;else{var R=c;c=new Te(f,r),E(c,R)}if(R=!0,u)for(var P=u.length-1;0<=P;P--){var j=c.g=u[P];R=ce(j,f,!0,c)&&R}if(j=c.g=r,R=ce(j,f,!0,c)&&R,R=ce(j,f,!1,c)&&R,u)for(P=0;P<u.length;P++)j=c.g=u[P],R=ce(j,f,!1,c)&&R}Q.prototype.N=function(){if(Q.aa.N.call(this),this.i){var r=this.i,c;for(c in r.g){for(var u=r.g[c],f=0;f<u.length;f++)J(u[f]);delete r.g[c],r.h--}}this.F=null},Q.prototype.K=function(r,c,u,f){return this.i.add(String(r),c,!1,u,f)},Q.prototype.L=function(r,c,u,f){return this.i.add(String(r),c,!0,u,f)};function ce(r,c,u,f){if(c=r.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,P=0;P<c.length;++P){var j=c[P];if(j&&!j.da&&j.capture==u){var ve=j.listener,De=j.ha||j.src;j.fa&&g(r.i,j),R=ve.call(De,f)!==!1&&R}}return R&&!f.defaultPrevented}function Oe(r,c,u){if(typeof r=="function")u&&(r=v(r,u));else if(r&&typeof r.handleEvent=="function")r=v(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(r,c||0)}function ke(r){r.g=Oe(()=>{r.g=null,r.i&&(r.i=!1,ke(r))},r.l);const c=r.h;r.h=null,r.m.apply(null,c)}class st extends Ee{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ke(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Me(r){Ee.call(this),this.h=r,this.g={}}x(Me,Ee);var tn=[];function vi(r){fe(r.g,function(c,u){this.g.hasOwnProperty(u)&&U(c)},r),r.g={}}Me.prototype.N=function(){Me.aa.N.call(this),vi(this)},Me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ne=l.JSON.stringify,rt=l.JSON.parse,_s=class{stringify(r){return l.JSON.stringify(r,void 0)}parse(r){return l.JSON.parse(r,void 0)}};function xr(){}xr.prototype.h=null;function Ha(r){return r.h||(r.h=r.i())}function Sd(){}var wi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mr(){Te.call(this,"d")}x(Mr,Te);function Lr(){Te.call(this,"c")}x(Lr,Te);var Jn={},Wa=null;function Ur(){return Wa=Wa||new Q}Jn.La="serverreachability";function za(r){Te.call(this,Jn.La,r)}x(za,Te);function Ii(r){const c=Ur();ie(c,new za(c))}Jn.STAT_EVENT="statevent";function Ga(r,c){Te.call(this,Jn.STAT_EVENT,r),this.stat=c}x(Ga,Te);function Be(r){const c=Ur();ie(c,new Ga(c,r))}Jn.Ma="timingevent";function qa(r,c){Te.call(this,Jn.Ma,r),this.size=c}x(qa,Te);function bi(r,c){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){r()},c)}function Ei(){this.g=!0}Ei.prototype.xa=function(){this.g=!1};function Ad(r,c,u,f,R,P){r.info(function(){if(r.g)if(P)for(var j="",ve=P.split("&"),De=0;De<ve.length;De++){var pe=ve[De].split("=");if(1<pe.length){var Le=pe[0];pe=pe[1];var Ue=Le.split("_");j=2<=Ue.length&&Ue[1]=="type"?j+(Le+"="+pe+"&"):j+(Le+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+f+") [attempt "+R+"]: "+c+`
`+u+`
`+j})}function Cd(r,c,u,f,R,P,j){r.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+R+"]: "+c+`
`+u+`
`+P+" "+j})}function Xn(r,c,u,f){r.info(function(){return"XMLHTTP TEXT ("+c+"): "+Pd(r,u)+(f?" "+f:"")})}function Rd(r,c){r.info(function(){return"TIMEOUT: "+c})}Ei.prototype.info=function(){};function Pd(r,c){if(!r.g)return c;if(!c)return null;try{var u=JSON.parse(c);if(u){for(r=0;r<u.length;r++)if(Array.isArray(u[r])){var f=u[r];if(!(2>f.length)){var R=f[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return Ne(u)}catch{return c}}var Fr={NO_ERROR:0,TIMEOUT:8},Od={},jr;function ys(){}x(ys,xr),ys.prototype.g=function(){return new XMLHttpRequest},ys.prototype.i=function(){return{}},jr=new ys;function nn(r,c,u,f){this.j=r,this.i=c,this.l=u,this.R=f||1,this.U=new Me(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ka}function Ka(){this.i=null,this.g="",this.h=!1}var Ja={},Vr={};function $r(r,c,u){r.L=1,r.v=bs(Ft(c)),r.m=u,r.P=!0,Xa(r,null)}function Xa(r,c){r.F=Date.now(),vs(r),r.A=Ft(r.v);var u=r.A,f=r.R;Array.isArray(f)||(f=[String(f)]),uc(u.i,"t",f),r.C=0,u=r.j.J,r.h=new Ka,r.g=Rc(r.j,u?c:null,!r.m),0<r.O&&(r.M=new st(v(r.Y,r,r.g),r.O)),c=r.U,u=r.g,f=r.ca;var R="readystatechange";Array.isArray(R)||(R&&(tn[0]=R.toString()),R=tn);for(var P=0;P<R.length;P++){var j=D(u,R[P],f||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=r.H?_(r.H):{},r.m?(r.u||(r.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,c)):(r.u="GET",r.g.ea(r.A,r.u,null,c)),Ii(),Ad(r.i,r.u,r.A,r.l,r.R,r.m)}nn.prototype.ca=function(r){r=r.target;const c=this.M;c&&jt(r)==3?c.j():this.Y(r)},nn.prototype.Y=function(r){try{if(r==this.g)e:{const Ue=jt(this.g);var c=this.g.Ba();const Zn=this.g.Z();if(!(3>Ue)&&(Ue!=3||this.g&&(this.h.h||this.g.oa()||_c(this.g)))){this.J||Ue!=4||c==7||(c==8||0>=Zn?Ii(3):Ii(2)),Br(this);var u=this.g.Z();this.X=u;t:if(Ya(this)){var f=_c(this.g);r="";var R=f.length,P=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bn(this),Ti(this);var j="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,r+=this.h.i.decode(f[c],{stream:!(P&&c==R-1)});f.length=0,this.h.g+=r,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=u==200,Cd(this.i,this.u,this.A,this.l,this.R,Ue,u),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,De=this.g;if((ve=De.g?De.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(ve)){var pe=ve;break t}}pe=null}if(u=pe)Xn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hr(this,u);else{this.o=!1,this.s=3,Be(12),bn(this),Ti(this);break e}}if(this.P){u=!0;let ht;for(;!this.J&&this.C<j.length;)if(ht=kd(this,j),ht==Vr){Ue==4&&(this.s=4,Be(14),u=!1),Xn(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==Ja){this.s=4,Be(15),Xn(this.i,this.l,j,"[Invalid Chunk]"),u=!1;break}else Xn(this.i,this.l,ht,null),Hr(this,ht);if(Ya(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ue!=4||j.length!=0||this.h.h||(this.s=1,Be(16),u=!1),this.o=this.o&&u,!u)Xn(this.i,this.l,j,"[Invalid Chunked Response]"),bn(this),Ti(this);else if(0<j.length&&!this.W){this.W=!0;var Le=this.j;Le.g==this&&Le.ba&&!Le.M&&(Le.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Jr(Le),Le.M=!0,Be(11))}}else Xn(this.i,this.l,j,null),Hr(this,j);Ue==4&&bn(this),this.o&&!this.J&&(Ue==4?Tc(this.j,this):(this.o=!1,vs(this)))}else Kd(this.g),u==400&&0<j.indexOf("Unknown SID")?(this.s=3,Be(12)):(this.s=0,Be(13)),bn(this),Ti(this)}}}catch{}finally{}};function Ya(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function kd(r,c){var u=r.C,f=c.indexOf(`
`,u);return f==-1?Vr:(u=Number(c.substring(u,f)),isNaN(u)?Ja:(f+=1,f+u>c.length?Vr:(c=c.slice(f,f+u),r.C=f+u,c)))}nn.prototype.cancel=function(){this.J=!0,bn(this)};function vs(r){r.S=Date.now()+r.I,Qa(r,r.I)}function Qa(r,c){if(r.B!=null)throw Error("WatchDog timer not null");r.B=bi(v(r.ba,r),c)}function Br(r){r.B&&(l.clearTimeout(r.B),r.B=null)}nn.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Rd(this.i,this.A),this.L!=2&&(Ii(),Be(17)),bn(this),this.s=2,Ti(this)):Qa(this,this.S-r)};function Ti(r){r.j.G==0||r.J||Tc(r.j,r)}function bn(r){Br(r);var c=r.M;c&&typeof c.ma=="function"&&c.ma(),r.M=null,vi(r.U),r.g&&(c=r.g,r.g=null,c.abort(),c.ma())}function Hr(r,c){try{var u=r.j;if(u.G!=0&&(u.g==r||Wr(u.h,r))){if(!r.K&&Wr(u.h,r)&&u.G==3){try{var f=u.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var R=f;if(R[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<r.F)Rs(u),As(u);else break e;Kr(u),Be(18)}}else u.za=R[1],0<u.za-u.T&&37500>R[2]&&u.F&&u.v==0&&!u.C&&(u.C=bi(v(u.Za,u),6e3));if(1>=tc(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Tn(u,11)}else if((r.K||u.g==r)&&Rs(u),!B(c))for(R=u.Da.g.parse(c),c=0;c<R.length;c++){let pe=R[c];if(u.T=pe[0],pe=pe[1],u.G==2)if(pe[0]=="c"){u.K=pe[1],u.ia=pe[2];const Le=pe[3];Le!=null&&(u.la=Le,u.j.info("VER="+u.la));const Ue=pe[4];Ue!=null&&(u.Aa=Ue,u.j.info("SVER="+u.Aa));const Zn=pe[5];Zn!=null&&typeof Zn=="number"&&0<Zn&&(f=1.5*Zn,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const ht=r.g;if(ht){const Ps=ht.g?ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ps){var P=f.h;P.g||Ps.indexOf("spdy")==-1&&Ps.indexOf("quic")==-1&&Ps.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(zr(P,P.h),P.h=null))}if(f.D){const Xr=ht.g?ht.g.getResponseHeader("X-HTTP-Session-Id"):null;Xr&&(f.ya=Xr,be(f.I,f.D,Xr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-r.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var j=r;if(f.qa=Cc(f,f.J?f.ia:null,f.W),j.K){nc(f.h,j);var ve=j,De=f.L;De&&(ve.I=De),ve.B&&(Br(ve),vs(ve)),f.g=j}else bc(f);0<u.i.length&&Cs(u)}else pe[0]!="stop"&&pe[0]!="close"||Tn(u,7);else u.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?Tn(u,7):qr(u):pe[0]!="noop"&&u.l&&u.l.ta(pe),u.v=0)}}Ii(4)}catch{}}var Nd=class{constructor(r,c){this.g=r,this.map=c}};function Za(r){this.l=r||10,l.PerformanceNavigationTiming?(r=l.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ec(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function tc(r){return r.h?1:r.g?r.g.size:0}function Wr(r,c){return r.h?r.h==c:r.g?r.g.has(c):!1}function zr(r,c){r.g?r.g.add(c):r.h=c}function nc(r,c){r.h&&r.h==c?r.h=null:r.g&&r.g.has(c)&&r.g.delete(c)}Za.prototype.cancel=function(){if(this.i=ic(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function ic(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let c=r.i;for(const u of r.g.values())c=c.concat(u.D);return c}return L(r.i)}function Dd(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(h(r)){for(var c=[],u=r.length,f=0;f<u;f++)c.push(r[f]);return c}c=[],u=0;for(f in r)c[u++]=r[f];return c}function xd(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(h(r)||typeof r=="string"){var c=[];r=r.length;for(var u=0;u<r;u++)c.push(u);return c}c=[],u=0;for(const f in r)c[u++]=f;return c}}}function sc(r,c){if(r.forEach&&typeof r.forEach=="function")r.forEach(c,void 0);else if(h(r)||typeof r=="string")Array.prototype.forEach.call(r,c,void 0);else for(var u=xd(r),f=Dd(r),R=f.length,P=0;P<R;P++)c.call(void 0,f[P],u&&u[P],r)}var rc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Md(r,c){if(r){r=r.split("&");for(var u=0;u<r.length;u++){var f=r[u].indexOf("="),R=null;if(0<=f){var P=r[u].substring(0,f);R=r[u].substring(f+1)}else P=r[u];c(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function En(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof En){this.h=r.h,ws(this,r.j),this.o=r.o,this.g=r.g,Is(this,r.s),this.l=r.l;var c=r.i,u=new Ci;u.i=c.i,c.g&&(u.g=new Map(c.g),u.h=c.h),oc(this,u),this.m=r.m}else r&&(c=String(r).match(rc))?(this.h=!1,ws(this,c[1]||"",!0),this.o=Si(c[2]||""),this.g=Si(c[3]||"",!0),Is(this,c[4]),this.l=Si(c[5]||"",!0),oc(this,c[6]||"",!0),this.m=Si(c[7]||"")):(this.h=!1,this.i=new Ci(null,this.h))}En.prototype.toString=function(){var r=[],c=this.j;c&&r.push(Ai(c,ac,!0),":");var u=this.g;return(u||c=="file")&&(r.push("//"),(c=this.o)&&r.push(Ai(c,ac,!0),"@"),r.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&r.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&r.push("/"),r.push(Ai(u,u.charAt(0)=="/"?Fd:Ud,!0))),(u=this.i.toString())&&r.push("?",u),(u=this.m)&&r.push("#",Ai(u,Vd)),r.join("")};function Ft(r){return new En(r)}function ws(r,c,u){r.j=u?Si(c,!0):c,r.j&&(r.j=r.j.replace(/:$/,""))}function Is(r,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);r.s=c}else r.s=null}function oc(r,c,u){c instanceof Ci?(r.i=c,$d(r.i,r.h)):(u||(c=Ai(c,jd)),r.i=new Ci(c,r.h))}function be(r,c,u){r.i.set(c,u)}function bs(r){return be(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Si(r,c){return r?c?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Ai(r,c,u){return typeof r=="string"?(r=encodeURI(r).replace(c,Ld),u&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Ld(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var ac=/[#\/\?@]/g,Ud=/[#\?:]/g,Fd=/[#\?]/g,jd=/[#\?@]/g,Vd=/#/g;function Ci(r,c){this.h=this.g=null,this.i=r||null,this.j=!!c}function sn(r){r.g||(r.g=new Map,r.h=0,r.i&&Md(r.i,function(c,u){r.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}t=Ci.prototype,t.add=function(r,c){sn(this),this.i=null,r=Yn(this,r);var u=this.g.get(r);return u||this.g.set(r,u=[]),u.push(c),this.h+=1,this};function cc(r,c){sn(r),c=Yn(r,c),r.g.has(c)&&(r.i=null,r.h-=r.g.get(c).length,r.g.delete(c))}function lc(r,c){return sn(r),c=Yn(r,c),r.g.has(c)}t.forEach=function(r,c){sn(this),this.g.forEach(function(u,f){u.forEach(function(R){r.call(c,R,f,this)},this)},this)},t.na=function(){sn(this);const r=Array.from(this.g.values()),c=Array.from(this.g.keys()),u=[];for(let f=0;f<c.length;f++){const R=r[f];for(let P=0;P<R.length;P++)u.push(c[f])}return u},t.V=function(r){sn(this);let c=[];if(typeof r=="string")lc(this,r)&&(c=c.concat(this.g.get(Yn(this,r))));else{r=Array.from(this.g.values());for(let u=0;u<r.length;u++)c=c.concat(r[u])}return c},t.set=function(r,c){return sn(this),this.i=null,r=Yn(this,r),lc(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[c]),this.h+=1,this},t.get=function(r,c){return r?(r=this.V(r),0<r.length?String(r[0]):c):c};function uc(r,c,u){cc(r,c),0<u.length&&(r.i=null,r.g.set(Yn(r,c),L(u)),r.h+=u.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],c=Array.from(this.g.keys());for(var u=0;u<c.length;u++){var f=c[u];const P=encodeURIComponent(String(f)),j=this.V(f);for(f=0;f<j.length;f++){var R=P;j[f]!==""&&(R+="="+encodeURIComponent(String(j[f]))),r.push(R)}}return this.i=r.join("&")};function Yn(r,c){return c=String(c),r.j&&(c=c.toLowerCase()),c}function $d(r,c){c&&!r.j&&(sn(r),r.i=null,r.g.forEach(function(u,f){var R=f.toLowerCase();f!=R&&(cc(this,f),uc(this,R,u))},r)),r.j=c}function Bd(r,c){const u=new Ei;if(l.Image){const f=new Image;f.onload=S(rn,u,"TestLoadImage: loaded",!0,c,f),f.onerror=S(rn,u,"TestLoadImage: error",!1,c,f),f.onabort=S(rn,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=S(rn,u,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=r}else c(!1)}function Hd(r,c){const u=new Ei,f=new AbortController,R=setTimeout(()=>{f.abort(),rn(u,"TestPingServer: timeout",!1,c)},1e4);fetch(r,{signal:f.signal}).then(P=>{clearTimeout(R),P.ok?rn(u,"TestPingServer: ok",!0,c):rn(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),rn(u,"TestPingServer: error",!1,c)})}function rn(r,c,u,f,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),f(u)}catch{}}function Wd(){this.g=new _s}function zd(r,c,u){const f=u||"";try{sc(r,function(R,P){let j=R;d(R)&&(j=Ne(R)),c.push(f+P+"="+encodeURIComponent(j))})}catch(R){throw c.push(f+"type="+encodeURIComponent("_badmap")),R}}function Es(r){this.l=r.Ub||null,this.j=r.eb||!1}x(Es,xr),Es.prototype.g=function(){return new Ts(this.l,this.j)},Es.prototype.i=function(r){return function(){return r}}({});function Ts(r,c){Q.call(this),this.D=r,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Ts,Q),t=Ts.prototype,t.open=function(r,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=c,this.readyState=1,Pi(this)},t.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(c.body=r),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ri(this)),this.readyState=0},t.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Pi(this)),this.g&&(this.readyState=3,Pi(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hc(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function hc(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}t.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var c=r.value?r.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!r.done}))&&(this.response=this.responseText+=c)}r.done?Ri(this):Pi(this),this.readyState==3&&hc(this)}},t.Ra=function(r){this.g&&(this.response=this.responseText=r,Ri(this))},t.Qa=function(r){this.g&&(this.response=r,Ri(this))},t.ga=function(){this.g&&Ri(this)};function Ri(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Pi(r)}t.setRequestHeader=function(r,c){this.u.append(r,c)},t.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,r.push(u[0]+": "+u[1]),u=c.next();return r.join(`\r
`)};function Pi(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function fc(r){let c="";return fe(r,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function Gr(r,c,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=fc(u),typeof r=="string"?u!=null&&encodeURIComponent(String(u)):be(r,c,u))}function Ae(r){Q.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Ae,Q);var Gd=/^https?$/i,qd=["POST","PUT"];t=Ae.prototype,t.Ha=function(r){this.J=r},t.ea=function(r,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);c=c?c.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():jr.g(),this.v=this.o?Ha(this.o):Ha(jr),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(r),!0),this.B=!1}catch(P){dc(this,P);return}if(r=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var R in f)u.set(R,f[R]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())u.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(P=>P.toLowerCase()=="content-type"),R=l.FormData&&r instanceof l.FormData,!(0<=Array.prototype.indexOf.call(qd,c,void 0))||f||R||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of u)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mc(this),this.u=!0,this.g.send(r),this.u=!1}catch(P){dc(this,P)}};function dc(r,c){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=c,r.m=5,pc(r),Ss(r)}function pc(r){r.A||(r.A=!0,ie(r,"complete"),ie(r,"error"))}t.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,ie(this,"complete"),ie(this,"abort"),Ss(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ss(this,!0)),Ae.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?gc(this):this.bb())},t.bb=function(){gc(this)};function gc(r){if(r.h&&typeof a<"u"&&(!r.v[1]||jt(r)!=4||r.Z()!=2)){if(r.u&&jt(r)==4)Oe(r.Ea,0,r);else if(ie(r,"readystatechange"),jt(r)==4){r.h=!1;try{const j=r.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var f;if(f=j===0){var R=String(r.D).match(rc)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),f=!Gd.test(R?R.toLowerCase():"")}u=f}if(u)ie(r,"complete"),ie(r,"success");else{r.m=6;try{var P=2<jt(r)?r.g.statusText:""}catch{P=""}r.l=P+" ["+r.Z()+"]",pc(r)}}finally{Ss(r)}}}}function Ss(r,c){if(r.g){mc(r);const u=r.g,f=r.v[0]?()=>{}:null;r.g=null,r.v=null,c||ie(r,"ready");try{u.onreadystatechange=f}catch{}}}function mc(r){r.I&&(l.clearTimeout(r.I),r.I=null)}t.isActive=function(){return!!this.g};function jt(r){return r.g?r.g.readyState:0}t.Z=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(r){if(this.g){var c=this.g.responseText;return r&&c.indexOf(r)==0&&(c=c.substring(r.length)),rt(c)}};function _c(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Kd(r){const c={};r=(r.g&&2<=jt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<r.length;f++){if(B(r[f]))continue;var u=T(r[f]);const R=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const P=c[R]||[];c[R]=P,P.push(u)}b(c,function(f){return f.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oi(r,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[r]||c}function yc(r){this.Aa=0,this.i=[],this.j=new Ei,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Oi("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Oi("baseRetryDelayMs",5e3,r),this.cb=Oi("retryDelaySeedMs",1e4,r),this.Wa=Oi("forwardChannelMaxRetries",2,r),this.wa=Oi("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Za(r&&r.concurrentRequestLimit),this.Da=new Wd,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=yc.prototype,t.la=8,t.G=1,t.connect=function(r,c,u,f){Be(0),this.W=r,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Cc(this,null,this.W),Cs(this)};function qr(r){if(vc(r),r.G==3){var c=r.U++,u=Ft(r.I);if(be(u,"SID",r.K),be(u,"RID",c),be(u,"TYPE","terminate"),ki(r,u),c=new nn(r,r.j,c),c.L=2,c.v=bs(Ft(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=c.v,u=!0),u||(c.g=Rc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),vs(c)}Ac(r)}function As(r){r.g&&(Jr(r),r.g.cancel(),r.g=null)}function vc(r){As(r),r.u&&(l.clearTimeout(r.u),r.u=null),Rs(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&l.clearTimeout(r.s),r.s=null)}function Cs(r){if(!ec(r.h)&&!r.s){r.s=!0;var c=r.Ga;ae||ut(),re||(ae(),re=!0),Qe.add(c,r),r.B=0}}function Jd(r,c){return tc(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=c.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=bi(v(r.Ga,r,c),Sc(r,r.B)),r.B++,!0)}t.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const R=new nn(this,this.j,r);let P=this.o;if(this.S&&(P?(P=_(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=Ic(this,R,c),u=Ft(this.I),be(u,"RID",r),be(u,"CVER",22),this.D&&be(u,"X-HTTP-Session-Id",this.D),ki(this,u),P&&(this.O?c="headers="+encodeURIComponent(String(fc(P)))+"&"+c:this.m&&Gr(u,this.m,P)),zr(this.h,R),this.Ua&&be(u,"TYPE","init"),this.P?(be(u,"$req",c),be(u,"SID","null"),R.T=!0,$r(R,u,null)):$r(R,u,c),this.G=2}}else this.G==3&&(r?wc(this,r):this.i.length==0||ec(this.h)||wc(this))};function wc(r,c){var u;c?u=c.l:u=r.U++;const f=Ft(r.I);be(f,"SID",r.K),be(f,"RID",u),be(f,"AID",r.T),ki(r,f),r.m&&r.o&&Gr(f,r.m,r.o),u=new nn(r,r.j,u,r.B+1),r.m===null&&(u.H=r.o),c&&(r.i=c.D.concat(r.i)),c=Ic(r,u,1e3),u.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),zr(r.h,u),$r(u,f,c)}function ki(r,c){r.H&&fe(r.H,function(u,f){be(c,f,u)}),r.l&&sc({},function(u,f){be(c,f,u)})}function Ic(r,c,u){u=Math.min(r.i.length,u);var f=r.l?v(r.l.Na,r.l,r):null;e:{var R=r.i;let P=-1;for(;;){const j=["count="+u];P==-1?0<u?(P=R[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let ve=!0;for(let De=0;De<u;De++){let pe=R[De].g;const Le=R[De].map;if(pe-=P,0>pe)P=Math.max(0,R[De].g-100),ve=!1;else try{zd(Le,j,"req"+pe+"_")}catch{f&&f(Le)}}if(ve){f=j.join("&");break e}}}return r=r.i.splice(0,u),c.D=r,f}function bc(r){if(!r.g&&!r.u){r.Y=1;var c=r.Fa;ae||ut(),re||(ae(),re=!0),Qe.add(c,r),r.v=0}}function Kr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=bi(v(r.Fa,r),Sc(r,r.v)),r.v++,!0)}t.Fa=function(){if(this.u=null,Ec(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=bi(v(this.ab,this),r)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Be(10),As(this),Ec(this))};function Jr(r){r.A!=null&&(l.clearTimeout(r.A),r.A=null)}function Ec(r){r.g=new nn(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var c=Ft(r.qa);be(c,"RID","rpc"),be(c,"SID",r.K),be(c,"AID",r.T),be(c,"CI",r.F?"0":"1"),!r.F&&r.ja&&be(c,"TO",r.ja),be(c,"TYPE","xmlhttp"),ki(r,c),r.m&&r.o&&Gr(c,r.m,r.o),r.L&&(r.g.I=r.L);var u=r.g;r=r.ia,u.L=1,u.v=bs(Ft(c)),u.m=null,u.P=!0,Xa(u,r)}t.Za=function(){this.C!=null&&(this.C=null,As(this),Kr(this),Be(19))};function Rs(r){r.C!=null&&(l.clearTimeout(r.C),r.C=null)}function Tc(r,c){var u=null;if(r.g==c){Rs(r),Jr(r),r.g=null;var f=2}else if(Wr(r.h,c))u=c.D,nc(r.h,c),f=1;else return;if(r.G!=0){if(c.o)if(f==1){u=c.m?c.m.length:0,c=Date.now()-c.F;var R=r.B;f=Ur(),ie(f,new qa(f,u)),Cs(r)}else bc(r);else if(R=c.s,R==3||R==0&&0<c.X||!(f==1&&Jd(r,c)||f==2&&Kr(r)))switch(u&&0<u.length&&(c=r.h,c.i=c.i.concat(u)),R){case 1:Tn(r,5);break;case 4:Tn(r,10);break;case 3:Tn(r,6);break;default:Tn(r,2)}}}function Sc(r,c){let u=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(u*=2),u*c}function Tn(r,c){if(r.j.info("Error code "+c),c==2){var u=v(r.fb,r),f=r.Xa;const R=!f;f=new En(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ws(f,"https"),bs(f),R?Bd(f.toString(),u):Hd(f.toString(),u)}else Be(2);r.G=0,r.l&&r.l.sa(c),Ac(r),vc(r)}t.fb=function(r){r?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function Ac(r){if(r.G=0,r.ka=[],r.l){const c=ic(r.h);(c.length!=0||r.i.length!=0)&&(G(r.ka,c),G(r.ka,r.i),r.h.i.length=0,L(r.i),r.i.length=0),r.l.ra()}}function Cc(r,c,u){var f=u instanceof En?Ft(u):new En(u);if(f.g!="")c&&(f.g=c+"."+f.g),Is(f,f.s);else{var R=l.location;f=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var P=new En(null);f&&ws(P,f),c&&(P.g=c),R&&Is(P,R),u&&(P.l=u),f=P}return u=r.D,c=r.ya,u&&c&&be(f,u,c),be(f,"VER",r.la),ki(r,f),f}function Rc(r,c,u){if(c&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=r.Ca&&!r.pa?new Ae(new Es({eb:u})):new Ae(r.pa),c.Ha(r.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pc(){}t=Pc.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ot(r,c){Q.call(this),this.g=new yc(c),this.l=r,this.h=c&&c.messageUrlParams||null,r=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(r?r["X-WebChannel-Content-Type"]=c.messageContentType:r={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(r?r["X-WebChannel-Client-Profile"]=c.va:r={"X-WebChannel-Client-Profile":c.va}),this.g.S=r,(r=c&&c.Sb)&&!B(r)&&(this.g.m=r),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!B(c)&&(this.g.D=c,r=this.h,r!==null&&c in r&&(r=this.h,c in r&&delete r[c])),this.j=new Qn(this)}x(ot,Q),ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ot.prototype.close=function(){qr(this.g)},ot.prototype.o=function(r){var c=this.g;if(typeof r=="string"){var u={};u.__data__=r,r=u}else this.u&&(u={},u.__data__=Ne(r),r=u);c.i.push(new Nd(c.Ya++,r)),c.G==3&&Cs(c)},ot.prototype.N=function(){this.g.l=null,delete this.j,qr(this.g),delete this.g,ot.aa.N.call(this)};function Oc(r){Mr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var c=r.__sm__;if(c){e:{for(const u in c){r=u;break e}r=void 0}(this.i=r)&&(r=this.i,c=c!==null&&r in c?c[r]:void 0),this.data=c}else this.data=r}x(Oc,Mr);function kc(){Lr.call(this),this.status=1}x(kc,Lr);function Qn(r){this.g=r}x(Qn,Pc),Qn.prototype.ua=function(){ie(this.g,"a")},Qn.prototype.ta=function(r){ie(this.g,new Oc(r))},Qn.prototype.sa=function(r){ie(this.g,new kc)},Qn.prototype.ra=function(){ie(this.g,"b")},ot.prototype.send=ot.prototype.o,ot.prototype.open=ot.prototype.m,ot.prototype.close=ot.prototype.close,Fr.NO_ERROR=0,Fr.TIMEOUT=8,Fr.HTTP_ERROR=6,Od.COMPLETE="complete",Sd.EventType=wi,wi.OPEN="a",wi.CLOSE="b",wi.ERROR="c",wi.MESSAGE="d",Q.prototype.listen=Q.prototype.K,Ae.prototype.listenOnce=Ae.prototype.L,Ae.prototype.getLastError=Ae.prototype.Ka,Ae.prototype.getLastErrorCode=Ae.prototype.Ba,Ae.prototype.getStatus=Ae.prototype.Z,Ae.prototype.getResponseJson=Ae.prototype.Oa,Ae.prototype.getResponseText=Ae.prototype.oa,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Ha}).apply(typeof Ls<"u"?Ls:typeof self<"u"?self:typeof window<"u"?window:{});const uu="@firebase/firestore",hu="4.8.0";/**
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
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
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
 */let gs="11.10.0";/**
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
 */const mi=new Rr("@firebase/firestore");function mt(t,...e){if(mi.logLevel<=ye.DEBUG){const n=e.map(Fa);mi.debug(`Firestore (${gs}): ${t}`,...n)}}function md(t,...e){if(mi.logLevel<=ye.ERROR){const n=e.map(Fa);mi.error(`Firestore (${gs}): ${t}`,...n)}}function hb(t,...e){if(mi.logLevel<=ye.WARN){const n=e.map(Fa);mi.warn(`Firestore (${gs}): ${t}`,...n)}}function Fa(t){if(typeof t=="string")return t;try{/**
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
 */function as(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,_d(t,i,n)}function _d(t,e,n){let i=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw md(i),new Error(i)}function Ji(t,e,n,i){let s="Unexpected state";typeof n=="string"?s=n:i=n,t||_d(e,s,i)}/**
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
 */const ue={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class he extends Et{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class yd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(We.UNAUTHENTICATED))}shutdown(){}}class db{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pb{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ji(this.o===void 0,42304);let i=this.i;const s=h=>this.i!==i?(i=this.i,n(h)):Promise.resolve();let o=new Xi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Xi,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},l=h=>{mt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(mt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Xi)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(mt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ji(typeof i.accessToken=="string",31837,{l:i}),new yd(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ji(e===null||typeof e=="string",2055,{h:e}),new We(e)}}class gb{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=We.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class mb{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new gb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _b{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,pt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ji(this.o===void 0,3512);const i=o=>{o.error!=null&&mt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,mt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const s=o=>{mt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):mt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new fu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ji(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new fu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function yb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */function vb(){return new TextEncoder}/**
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
 */class wb{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=yb(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<n&&(i+=e.charAt(s[o]%62))}return i}}function wt(t,e){return t<e?-1:t>e?1:0}function Ib(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=t.codePointAt(n),s=e.codePointAt(n);if(i!==s){if(i<128&&s<128)return wt(i,s);{const o=vb(),a=bb(o.encode(du(t,n)),o.encode(du(e,n)));return a!==0?a:wt(i,s)}}n+=i>65535?2:1}return wt(t.length,e.length)}function du(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function bb(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return wt(t[n],e[n]);return wt(t.length,e.length)}/**
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
 */const pu="__name__";class Ct{constructor(e,n,i){n===void 0?n=0:n>e.length&&as(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&as(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Ct.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ct?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const o=Ct.compareSegments(e.get(s),n.get(s));if(o!==0)return o}return wt(e.length,n.length)}static compareSegments(e,n){const i=Ct.isNumericId(e),s=Ct.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?Ct.extractNumericId(e).compare(Ct.extractNumericId(n)):Ib(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ua.fromString(e.substring(4,e.length-2))}}class ft extends Ct{construct(e,n,i){return new ft(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new he(ue.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new ft(n)}static emptyPath(){return new ft([])}}const Eb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pn extends Ct{construct(e,n,i){return new Pn(e,n,i)}static isValidIdentifier(e){return Eb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pu}static keyField(){return new Pn([pu])}static fromServerFormat(e){const n=[];let i="",s=0;const o=()=>{if(i.length===0)throw new he(ue.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new he(ue.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new he(ue.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(i+=l,s++):(o(),s++)}if(o(),a)throw new he(ue.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pn(n)}static emptyPath(){return new Pn([])}}/**
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
 */class Nn{constructor(e){this.path=e}static fromPath(e){return new Nn(ft.fromString(e))}static fromName(e){return new Nn(ft.fromString(e).popFirst(5))}static empty(){return new Nn(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ft.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ft.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Nn(new ft(e.slice()))}}function Tb(t,e,n,i){if(e===!0&&i===!0)throw new he(ue.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sb(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ab(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":as(12329,{type:typeof t})}function Cb(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new he(ue.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ab(t);throw new he(ue.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Re(t,e){const n={typeString:t};return e&&(n.value=e),n}function ms(t,e){if(!Sb(t))throw new he(ue.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const s=e[i].typeString,o="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const a=t[i];if(s&&typeof a!==s){n=`JSON field '${i}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){n=`Expected '${i}' field to equal '${o.value}'`;break}}if(n)throw new he(ue.INVALID_ARGUMENT,n);return!0}/**
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
 */const gu=-62135596800,mu=1e6;class Pt{static now(){return Pt.fromMillis(Date.now())}static fromDate(e){return Pt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*mu);return new Pt(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new he(ue.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new he(ue.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<gu)throw new he(ue.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(ue.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mu}_compareTo(e){return this.seconds===e.seconds?wt(this.nanoseconds,e.nanoseconds):wt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Pt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ms(e,Pt._jsonSchema))return new Pt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-gu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Pt._jsonSchemaVersion="firestore/timestamp/1.0",Pt._jsonSchema={type:Re("string",Pt._jsonSchemaVersion),seconds:Re("number"),nanoseconds:Re("number")};function Rb(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Pb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class zn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Pb("Invalid base64 string: "+o):o}}(e);return new zn(n)}static fromUint8Array(e){const n=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new zn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return wt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}zn.EMPTY_BYTE_STRING=new zn("");const qo="(default)";class ur{constructor(e,n){this.projectId=e,this.database=n||qo}static empty(){return new ur("","")}get isDefaultDatabase(){return this.database===qo}isEqual(e){return e instanceof ur&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class Ob{constructor(e,n=null,i=[],s=[],o=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function kb(t){return new Ob(t)}/**
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
 */var _u,le;(le=_u||(_u={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Ua([4294967295,4294967295],0);/**
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
 */const Nb=41943040;/**
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
 */const Db=1048576;function Io(){return typeof document<"u"?document:null}/**
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
 */class xb{constructor(e,n,i=1e3,s=1.5,o=6e4){this.Fi=e,this.timerId=n,this.d_=i,this.E_=s,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-i);s>0&&mt("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */class ja{constructor(e,n,i,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Xi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,o){const a=Date.now()+i,l=new ja(e,n,a,s,o);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(ue.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var yu,vu;(vu=yu||(yu={})).Fa="default",vu.Cache="cache";/**
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
 */function Mb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const wu=new Map;/**
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
 */const vd="firestore.googleapis.com",Iu=!0;class bu{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new he(ue.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=vd,this.ssl=Iu}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Iu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Nb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Db)throw new he(ue.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Tb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mb((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new he(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new he(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new he(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wd{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(ue.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(ue.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new fb;switch(i.type){case"firstParty":return new mb(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new he(ue.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=wu.get(n);i&&(mt("ComponentProvider","Removing Datastore"),wu.delete(n),i.terminate())}(this),Promise.resolve()}}function Lb(t,e,n,i={}){var s;t=Cb(t,wd);const o=us(e),a=t._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),h=`${e}:${n}`;o&&(af(`https://${h}`),cf("Firestore",!0)),a.host!==vd&&a.host!==h&&hb("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:i});if(!vn(d,l)&&(t._setSettings(d),i.mockUserToken)){let p,m;if(typeof i.mockUserToken=="string")p=i.mockUserToken,m=We.MOCK_USER;else{p=vy(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const v=i.mockUserToken.sub||i.mockUserToken.user_id;if(!v)throw new he(ue.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new We(v)}t._authCredentials=new db(new yd(p,m))}}/**
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
 */class Va{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Va(this.firestore,e,this._query)}}class kt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $a(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}toJSON(){return{type:kt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(ms(n,kt._jsonSchema))return new kt(e,i||null,new Nn(ft.fromString(n.referencePath)))}}kt._jsonSchemaVersion="firestore/documentReference/1.0",kt._jsonSchema={type:Re("string",kt._jsonSchemaVersion),referencePath:Re("string")};class $a extends Va{constructor(e,n,i){super(e,n,kb(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new Nn(e))}withConverter(e){return new $a(this.firestore,e,this._path)}}/**
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
 */const Eu="AsyncQueue";class Tu{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new xb(this,"async_queue_retry"),this.oc=()=>{const i=Io();i&&mt(Eu,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const n=Io();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Io();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Xi;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Rb(e))throw e;mt(Eu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(i=>{throw this.tc=i,this.nc=!1,md("INTERNAL UNHANDLED ERROR: ",Su(i)),i}).then(i=>(this.nc=!1,i))));return this._c=n,n}enqueueAfterDelay(e,n,i){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=ja.createAndSchedule(this,e,n,i,o=>this.lc(o));return this.ec.push(s),s}ac(){this.tc&&as(47125,{hc:Su(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Su(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ub extends wd{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new Tu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tu(e),this._firestoreClient=void 0,await e}}}function Fb(t,e){const n=typeof t=="object"?t:wa(),i=typeof t=="string"?t:qo,s=Kn(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=_y("firestore");o&&Lb(s,...o)}return s}/**
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
 */class Gt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gt(zn.fromBase64String(e))}catch(n){throw new he(ue.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gt(zn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Gt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ms(e,Gt._jsonSchema))return Gt.fromBase64String(e.bytes)}}Gt._jsonSchemaVersion="firestore/bytes/1.0",Gt._jsonSchema={type:Re("string",Gt._jsonSchemaVersion),bytes:Re("string")};/**
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
 */class Id{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new he(ue.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ln{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new he(ue.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new he(ue.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return wt(this._lat,e._lat)||wt(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ln._jsonSchemaVersion}}static fromJSON(e){if(ms(e,Ln._jsonSchema))return new Ln(e.latitude,e.longitude)}}Ln._jsonSchemaVersion="firestore/geoPoint/1.0",Ln._jsonSchema={type:Re("string",Ln._jsonSchemaVersion),latitude:Re("number"),longitude:Re("number")};/**
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
 */class Un{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Un._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ms(e,Un._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Un(e.vectorValues);throw new he(ue.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Un._jsonSchemaVersion="firestore/vectorValue/1.0",Un._jsonSchema={type:Re("string",Un._jsonSchemaVersion),vectorValues:Re("object")};const jb=new RegExp("[~\\*/\\[\\]]");function Vb(t,e,n){if(e.search(jb)>=0)throw Au(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Id(...e.split("."))._internalPath}catch{throw Au(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Au(t,e,n,i,s){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new he(ue.INVALID_ARGUMENT,o+t+a)}/**
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
 */class bd{constructor(e,n,i,s,o){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $b(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ed("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $b extends bd{data(){return super.data()}}function Ed(t,e){return typeof e=="string"?Vb(t,e):e instanceof Id?e._internalPath:e._delegate._internalPath}class Us{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ui extends bd{constructor(e,n,i,s,o,a){super(e,n,i,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Ed("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(ue.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ui._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ui._jsonSchemaVersion="firestore/documentSnapshot/1.0",ui._jsonSchema={type:Re("string",ui._jsonSchemaVersion),bundleSource:Re("string","DocumentSnapshot"),bundleName:Re("string"),bundle:Re("string")};class qs extends ui{data(e={}){return super.data(e)}}class Yi{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Us(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new qs(this._firestore,this._userDataWriter,i.key,i,new Us(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new he(ue.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const h=new qs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Us(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new qs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Us(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:Bb(l.type),doc:h,oldIndex:d,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(ue.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Yi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=wb.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(n.push(o._document),i.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Bb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return as(61501,{type:t})}}Yi._jsonSchemaVersion="firestore/querySnapshot/1.0",Yi._jsonSchema={type:Re("string",Yi._jsonSchemaVersion),bundleSource:Re("string","QuerySnapshot"),bundleName:Re("string"),bundle:Re("string")};(function(e,n=!0){(function(s){gs=s})(_i),Lt(new bt("firestore",(i,{instanceIdentifier:s,options:o})=>{const a=i.getProvider("app").getImmediate(),l=new Ub(new pb(i.getProvider("auth-internal")),new _b(a,i.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new he(ue.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ur(d.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),ct(uu,hu,e),ct(uu,hu,"esm2017")})();const Hb={apiKey:"AIzaSyBzR2w75nixO9H8zjUbxVajKx0npksSGrg",authDomain:"norsk-cafe.firebaseapp.com",projectId:"norsk-cafe",storageBucket:"norsk-cafe.firebasestorage.app",messagingSenderId:"123232580709",appId:"1:123232580709:web:c6e6dfed117db9d3b0028c",measurementId:void 0},Ba=gf(Hb);cw(Ba);const hr=lb(Ba);Fb(Ba);const Wb={__name:"Home",setup(t){const e=Sr();ua(()=>{hr.currentUser&&e.push("/dashboard")});function n(){e.push("/login")}return(i,s)=>(jn(),Vn("ion-page",null,[qe(ay),Z("ion-content",{class:"ion-padding",color:"cream"},[Z("div",{class:"welcome"},[s[0]||(s[0]=Z("h1",null,"Velkommen!",-1)),s[1]||(s[1]=Z("p",null,"Her på Norsk Cafe skal vi lære norsk på en morsom og effektiv måte!",-1)),Z("ion-button",{onClick:n,color:"accent"}," La oss komme i gang! ")])])]))}},zb=Cr(Wb,[["__scopeId","data-v-709f6d9b"]]),Gb={color:"cream"},qb={class:"login-wrapper"},Kb={class:"login-inner"},Jb={class:"gsi-material-button"},Xb={class:"gsi-material-button-content-wrapper"},Yb={class:"gsi-material-button-icon"},Qb={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",style:{width:"24px",height:"24px"}},Zb={__name:"Login",setup(t){const e=Sr();async function n(){const i=new zt;try{await yI(hr,i),e.push("/dashboard")}catch(s){console.error("Google sign-in failed",s),alert("Google sign-in failed: "+s.message)}}return(i,s)=>(jn(),Vn("ion-page",null,[s[5]||(s[5]=Z("ion-header",null,[Z("ion-toolbar",{color:"coffee"},[Z("div",{class:"header-content"},[Z("ion-title",null,"Login")])])],-1)),Z("ion-content",Gb,[Z("div",qb,[Z("div",Kb,[s[3]||(s[3]=Z("h1",{class:"login-title"},"Velkommen tilbake!",-1)),s[4]||(s[4]=Z("p",{class:"login-subtitle"}," Logg inn med Google for å fortsette å lære norsk. ",-1)),Z("div",{class:"google-wrapper",onClick:n},[Z("button",Jb,[s[2]||(s[2]=Z("div",{class:"gsi-material-button-state"},null,-1)),Z("div",Xb,[Z("div",Yb,[(jn(),Vn("svg",Qb,s[0]||(s[0]=[Mg(`<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0\r
                      14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-dc791e9a></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58\r
                      2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-dc791e9a></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92\r
                      16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-dc791e9a></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15\r
                      1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98\r
                      6.19C6.51 42.62 14.62 48 24 48z" data-v-dc791e9a></path><path fill="none" d="M0 0h48v48H0z" data-v-dc791e9a></path>`,5)])))]),s[1]||(s[1]=Z("span",{class:"gsi-material-button-contents"},"Fortsett med Google",-1))])])])])])])]))}},eE=Cr(Zb,[["__scopeId","data-v-dc791e9a"]]),tE={color:"cream",class:"ion-padding"},nE={__name:"Dashboard",setup(t){const e=Sr(),n=Yu("");ua(()=>{const s=hr.currentUser;s?n.value=s.displayName||s.email||"Bruker":e.push("/login")});function i(){hr.signOut(),e.push("/login")}return(s,o)=>(jn(),Vn("ion-page",null,[Z("ion-header",null,[Z("ion-toolbar",{color:"coffee"},[o[0]||(o[0]=Z("ion-title",null,"Dashboard",-1)),Z("ion-buttons",{slot:"end"},[Z("ion-button",{color:"accent",fill:"solid",onClick:i}," Logg ut ")])])]),Z("ion-content",tE,[Z("h2",null,"Hei "+Du(n.value)+"!",1),o[1]||(o[1]=Z("p",null,"Velkommen til Norsk Cafe sin læringsplattform.",-1)),o[2]||(o[2]=Z("ion-card",null,[Z("ion-card-header",null,[Z("ion-card-title",null,"Dine kurs")]),Z("ion-card-content",null,[Z("ion-list",null,[Z("ion-item",null,[Z("ion-label",null,"Grunnleggende norsk")]),Z("ion-item",null,[Z("ion-label",null,"Norsk samtalepraksis")])])])],-1))])]))}},iE=Cr(nE,[["__scopeId","data-v-eb00965b"]]),sE=[{path:"/",name:"Home",component:zb},{path:"/login",name:"Login",component:eE},{path:"/dashboard",name:"Dashboard",component:iE}],Td=X_({history:S_("./"),routes:sE}),rE=mm(cy).use(Z_).use(Td);Td.isReady().then(()=>{rE.mount("#app")});
