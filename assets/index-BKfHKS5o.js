(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Bo(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ie={},ts=[],Dt=()=>{},Pd=()=>!1,lr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ho=t=>t.startsWith("onUpdate:"),$e=Object.assign,Wo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Od=Object.prototype.hasOwnProperty,_e=(t,e)=>Od.call(t,e),te=Array.isArray,ns=t=>ur(t)==="[object Map]",gu=t=>ur(t)==="[object Set]",se=t=>typeof t=="function",Pe=t=>typeof t=="string",In=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",mu=t=>(Se(t)||se(t))&&se(t.then)&&se(t.catch),_u=Object.prototype.toString,ur=t=>_u.call(t),kd=t=>ur(t).slice(8,-1),yu=t=>ur(t)==="[object Object]",zo=t=>Pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xs=Bo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Nd=/-(\w)/g,ct=hr(t=>t.replace(Nd,(e,n)=>n?n.toUpperCase():"")),Dd=/\B([A-Z])/g,Wn=hr(t=>t.replace(Dd,"-$1").toLowerCase()),fr=hr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Gr=hr(t=>t?`on${fr(t)}`:""),mn=(t,e)=>!Object.is(t,e),qr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},_o=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},xd=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ec;const dr=()=>Ec||(Ec=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Go(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Pe(s)?Fd(s):Go(s);if(i)for(const o in i)e[o]=i[o]}return e}else if(Pe(t)||Se(t))return t}const Md=/;(?![^(]*\))/g,Ld=/:([^]+)/,Ud=/\/\*[^]*?\*\//g;function Fd(t){const e={};return t.replace(Ud,"").split(Md).forEach(n=>{if(n){const s=n.split(Ld);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function qo(t){let e="";if(Pe(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const s=qo(t[n]);s&&(e+=s+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vd=Bo(jd);function vu(t){return!!t||t===""}const wu=t=>!!(t&&t.__v_isRef===!0),Iu=t=>Pe(t)?t:t==null?"":te(t)||Se(t)&&(t.toString===_u||!se(t.toString))?wu(t)?Iu(t.value):JSON.stringify(t,bu,2):String(t),bu=(t,e)=>wu(e)?bu(t,e.value):ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],o)=>(n[Kr(s,o)+" =>"]=i,n),{})}:gu(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Kr(n))}:In(e)?Kr(e):Se(e)&&!te(e)&&!yu(e)?String(e):e,Kr=(t,e="")=>{var n;return In(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xe;class $d{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Xe,!e&&Xe&&(this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Xe;try{return Xe=this,e()}finally{Xe=n}}}on(){++this._on===1&&(this.prevScope=Xe,Xe=this)}off(){this._on>0&&--this._on===0&&(Xe=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Bd(){return Xe}let we;const Jr=new WeakSet;class Eu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xe&&Xe.active&&Xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Jr.has(this)&&(Jr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Su(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Tc(this),Au(this);const e=we,n=yt;we=this,yt=!0;try{return this.fn()}finally{Cu(this),we=e,yt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xo(e);this.deps=this.depsTail=void 0,Tc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Jr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yo(this)&&this.run()}get dirty(){return yo(this)}}let Tu=0,Ms,Ls;function Su(t,e=!1){if(t.flags|=8,e){t.next=Ls,Ls=t;return}t.next=Ms,Ms=t}function Ko(){Tu++}function Jo(){if(--Tu>0)return;if(Ls){let e=Ls;for(Ls=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ms;){let e=Ms;for(Ms=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Au(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Cu(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Xo(s),Hd(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function yo(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ru(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ru(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Xs)||(t.globalVersion=Xs,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!yo(t))))return;t.flags|=2;const e=t.dep,n=we,s=yt;we=t,yt=!0;try{Au(t);const i=t.fn(t._value);(e.version===0||mn(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{we=n,yt=s,Cu(t),t.flags&=-3}}function Xo(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Xo(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Hd(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let yt=!0;const Pu=[];function Xt(){Pu.push(yt),yt=!1}function Yt(){const t=Pu.pop();yt=t===void 0?!0:t}function Tc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=we;we=void 0;try{e()}finally{we=n}}}let Xs=0;class Wd{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!we||!yt||we===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==we)n=this.activeLink=new Wd(we,this),we.deps?(n.prevDep=we.depsTail,we.depsTail.nextDep=n,we.depsTail=n):we.deps=we.depsTail=n,Ou(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=we.depsTail,n.nextDep=void 0,we.depsTail.nextDep=n,we.depsTail=n,we.deps===n&&(we.deps=s)}return n}trigger(e){this.version++,Xs++,this.notify(e)}notify(e){Ko();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Jo()}}}function Ou(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Ou(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const vo=new WeakMap,xn=Symbol(""),wo=Symbol(""),Ys=Symbol("");function Fe(t,e,n){if(yt&&we){let s=vo.get(t);s||vo.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Yo),i.map=s,i.key=n),i.track()}}function zt(t,e,n,s,i,o){const a=vo.get(t);if(!a){Xs++;return}const l=h=>{h&&h.trigger()};if(Ko(),e==="clear")a.forEach(l);else{const h=te(t),d=h&&zo(n);if(h&&n==="length"){const p=Number(s);a.forEach((m,v)=>{(v==="length"||v===Ys||!In(v)&&v>=p)&&l(m)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),d&&l(a.get(Ys)),e){case"add":h?d&&l(a.get("length")):(l(a.get(xn)),ns(t)&&l(a.get(wo)));break;case"delete":h||(l(a.get(xn)),ns(t)&&l(a.get(wo)));break;case"set":ns(t)&&l(a.get(xn));break}}Jo()}function Qn(t){const e=me(t);return e===t?e:(Fe(e,"iterate",Ys),vt(t)?e:e.map(Ge))}function Qo(t){return Fe(t=me(t),"iterate",Ys),t}const zd={__proto__:null,[Symbol.iterator](){return Xr(this,Symbol.iterator,Ge)},concat(...t){return Qn(this).concat(...t.map(e=>te(e)?Qn(e):e))},entries(){return Xr(this,"entries",t=>(t[1]=Ge(t[1]),t))},every(t,e){return $t(this,"every",t,e,void 0,arguments)},filter(t,e){return $t(this,"filter",t,e,n=>n.map(Ge),arguments)},find(t,e){return $t(this,"find",t,e,Ge,arguments)},findIndex(t,e){return $t(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return $t(this,"findLast",t,e,Ge,arguments)},findLastIndex(t,e){return $t(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return $t(this,"forEach",t,e,void 0,arguments)},includes(...t){return Yr(this,"includes",t)},indexOf(...t){return Yr(this,"indexOf",t)},join(t){return Qn(this).join(t)},lastIndexOf(...t){return Yr(this,"lastIndexOf",t)},map(t,e){return $t(this,"map",t,e,void 0,arguments)},pop(){return Os(this,"pop")},push(...t){return Os(this,"push",t)},reduce(t,...e){return Sc(this,"reduce",t,e)},reduceRight(t,...e){return Sc(this,"reduceRight",t,e)},shift(){return Os(this,"shift")},some(t,e){return $t(this,"some",t,e,void 0,arguments)},splice(...t){return Os(this,"splice",t)},toReversed(){return Qn(this).toReversed()},toSorted(t){return Qn(this).toSorted(t)},toSpliced(...t){return Qn(this).toSpliced(...t)},unshift(...t){return Os(this,"unshift",t)},values(){return Xr(this,"values",Ge)}};function Xr(t,e,n){const s=Qo(t),i=s[e]();return s!==t&&!vt(t)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.value&&(o.value=n(o.value)),o}),i}const Gd=Array.prototype;function $t(t,e,n,s,i,o){const a=Qo(t),l=a!==t&&!vt(t),h=a[e];if(h!==Gd[e]){const m=h.apply(t,o);return l?Ge(m):m}let d=n;a!==t&&(l?d=function(m,v){return n.call(this,Ge(m),v,t)}:n.length>2&&(d=function(m,v){return n.call(this,m,v,t)}));const p=h.call(a,d,s);return l&&i?i(p):p}function Sc(t,e,n,s){const i=Qo(t);let o=n;return i!==t&&(vt(t)?n.length>3&&(o=function(a,l,h){return n.call(this,a,l,h,t)}):o=function(a,l,h){return n.call(this,a,Ge(l),h,t)}),i[e](o,...s)}function Yr(t,e,n){const s=me(t);Fe(s,"iterate",Ys);const i=s[e](...n);return(i===-1||i===!1)&&ta(n[0])?(n[0]=me(n[0]),s[e](...n)):i}function Os(t,e,n=[]){Xt(),Ko();const s=me(t)[e].apply(t,n);return Jo(),Yt(),s}const qd=Bo("__proto__,__v_isRef,__isVue"),ku=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(In));function Kd(t){In(t)||(t=String(t));const e=me(this);return Fe(e,"has",t),e.hasOwnProperty(t)}class Nu{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(i?o?ip:Lu:o?Mu:xu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const a=te(e);if(!i){let h;if(a&&(h=zd[n]))return h;if(n==="hasOwnProperty")return Kd}const l=Reflect.get(e,n,Ve(e)?e:s);return(In(n)?ku.has(n):qd(n))||(i||Fe(e,"get",n),o)?l:Ve(l)?a&&zo(n)?l:l.value:Se(l)?i?Fu(l):pr(l):l}}class Du extends Nu{constructor(e=!1){super(!1,e)}set(e,n,s,i){let o=e[n];if(!this._isShallow){const h=jn(o);if(!vt(s)&&!jn(s)&&(o=me(o),s=me(s)),!te(e)&&Ve(o)&&!Ve(s))return h?!1:(o.value=s,!0)}const a=te(e)&&zo(n)?Number(n)<e.length:_e(e,n),l=Reflect.set(e,n,s,Ve(e)?e:i);return e===me(i)&&(a?mn(s,o)&&zt(e,"set",n,s):zt(e,"add",n,s)),l}deleteProperty(e,n){const s=_e(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&zt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!In(n)||!ku.has(n))&&Fe(e,"has",n),s}ownKeys(e){return Fe(e,"iterate",te(e)?"length":xn),Reflect.ownKeys(e)}}class Jd extends Nu{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Xd=new Du,Yd=new Jd,Qd=new Du(!0);const Io=t=>t,Pi=t=>Reflect.getPrototypeOf(t);function Zd(t,e,n){return function(...s){const i=this.__v_raw,o=me(i),a=ns(o),l=t==="entries"||t===Symbol.iterator&&a,h=t==="keys"&&a,d=i[t](...s),p=n?Io:e?bo:Ge;return!e&&Fe(o,"iterate",h?wo:xn),{next(){const{value:m,done:v}=d.next();return v?{value:m,done:v}:{value:l?[p(m[0]),p(m[1])]:p(m),done:v}},[Symbol.iterator](){return this}}}}function Oi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ep(t,e){const n={get(i){const o=this.__v_raw,a=me(o),l=me(i);t||(mn(i,l)&&Fe(a,"get",i),Fe(a,"get",l));const{has:h}=Pi(a),d=e?Io:t?bo:Ge;if(h.call(a,i))return d(o.get(i));if(h.call(a,l))return d(o.get(l));o!==a&&o.get(i)},get size(){const i=this.__v_raw;return!t&&Fe(me(i),"iterate",xn),Reflect.get(i,"size",i)},has(i){const o=this.__v_raw,a=me(o),l=me(i);return t||(mn(i,l)&&Fe(a,"has",i),Fe(a,"has",l)),i===l?o.has(i):o.has(i)||o.has(l)},forEach(i,o){const a=this,l=a.__v_raw,h=me(l),d=e?Io:t?bo:Ge;return!t&&Fe(h,"iterate",xn),l.forEach((p,m)=>i.call(o,d(p),d(m),a))}};return $e(n,t?{add:Oi("add"),set:Oi("set"),delete:Oi("delete"),clear:Oi("clear")}:{add(i){!e&&!vt(i)&&!jn(i)&&(i=me(i));const o=me(this);return Pi(o).has.call(o,i)||(o.add(i),zt(o,"add",i,i)),this},set(i,o){!e&&!vt(o)&&!jn(o)&&(o=me(o));const a=me(this),{has:l,get:h}=Pi(a);let d=l.call(a,i);d||(i=me(i),d=l.call(a,i));const p=h.call(a,i);return a.set(i,o),d?mn(o,p)&&zt(a,"set",i,o):zt(a,"add",i,o),this},delete(i){const o=me(this),{has:a,get:l}=Pi(o);let h=a.call(o,i);h||(i=me(i),h=a.call(o,i)),l&&l.call(o,i);const d=o.delete(i);return h&&zt(o,"delete",i,void 0),d},clear(){const i=me(this),o=i.size!==0,a=i.clear();return o&&zt(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Zd(i,t,e)}),n}function Zo(t,e){const n=ep(t,e);return(s,i,o)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(_e(n,i)&&i in s?n:s,i,o)}const tp={get:Zo(!1,!1)},np={get:Zo(!1,!0)},sp={get:Zo(!0,!1)};const xu=new WeakMap,Mu=new WeakMap,Lu=new WeakMap,ip=new WeakMap;function rp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function op(t){return t.__v_skip||!Object.isExtensible(t)?0:rp(kd(t))}function pr(t){return jn(t)?t:ea(t,!1,Xd,tp,xu)}function Uu(t){return ea(t,!1,Qd,np,Mu)}function Fu(t){return ea(t,!0,Yd,sp,Lu)}function ea(t,e,n,s,i){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=op(t);if(o===0)return t;const a=i.get(t);if(a)return a;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Us(t){return jn(t)?Us(t.__v_raw):!!(t&&t.__v_isReactive)}function jn(t){return!!(t&&t.__v_isReadonly)}function vt(t){return!!(t&&t.__v_isShallow)}function ta(t){return t?!!t.__v_raw:!1}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function ap(t){return!_e(t,"__v_skip")&&Object.isExtensible(t)&&_o(t,"__v_skip",!0),t}const Ge=t=>Se(t)?pr(t):t,bo=t=>Se(t)?Fu(t):t;function Ve(t){return t?t.__v_isRef===!0:!1}function zi(t){return ju(t,!1)}function cp(t){return ju(t,!0)}function ju(t,e){return Ve(t)?t:new lp(t,e)}class lp{constructor(e,n){this.dep=new Yo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:me(e),this._value=n?e:Ge(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||vt(e)||jn(e);e=s?e:me(e),mn(e,n)&&(this._rawValue=e,this._value=s?e:Ge(e),this.dep.trigger())}}function Mn(t){return Ve(t)?t.value:t}const up={get:(t,e,n)=>e==="__v_raw"?t:Mn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ve(i)&&!Ve(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Vu(t){return Us(t)?t:new Proxy(t,up)}class hp{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Yo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&we!==this)return Su(this,!0),!0}get value(){const e=this.dep.track();return Ru(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fp(t,e,n=!1){let s,i;return se(t)?s=t:(s=t.get,i=t.set),new hp(s,i,n)}const ki={},Gi=new WeakMap;let Rn;function dp(t,e=!1,n=Rn){if(n){let s=Gi.get(n);s||Gi.set(n,s=[]),s.push(t)}}function pp(t,e,n=Ie){const{immediate:s,deep:i,once:o,scheduler:a,augmentJob:l,call:h}=n,d=z=>i?z:vt(z)||i===!1||i===0?fn(z,1):fn(z);let p,m,v,S,x=!1,L=!1;if(Ve(t)?(m=()=>t.value,x=vt(t)):Us(t)?(m=()=>d(t),x=!0):te(t)?(L=!0,x=t.some(z=>Us(z)||vt(z)),m=()=>t.map(z=>{if(Ve(z))return z.value;if(Us(z))return d(z);if(se(z))return h?h(z,2):z()})):se(t)?e?m=h?()=>h(t,2):t:m=()=>{if(v){Xt();try{v()}finally{Yt()}}const z=Rn;Rn=p;try{return h?h(t,3,[S]):t(S)}finally{Rn=z}}:m=Dt,e&&i){const z=m,re=i===!0?1/0:i;m=()=>fn(z(),re)}const G=Bd(),K=()=>{p.stop(),G&&G.active&&Wo(G.effects,p)};if(o&&e){const z=e;e=(...re)=>{z(...re),K()}}let B=L?new Array(t.length).fill(ki):ki;const W=z=>{if(!(!(p.flags&1)||!p.dirty&&!z))if(e){const re=p.run();if(i||x||(L?re.some((fe,b)=>mn(fe,B[b])):mn(re,B))){v&&v();const fe=Rn;Rn=p;try{const b=[re,B===ki?void 0:L&&B[0]===ki?[]:B,S];B=re,h?h(e,3,b):e(...b)}finally{Rn=fe}}}else p.run()};return l&&l(W),p=new Eu(m),p.scheduler=a?()=>a(W,!1):W,S=z=>dp(z,!1,p),v=p.onStop=()=>{const z=Gi.get(p);if(z){if(h)h(z,4);else for(const re of z)re();Gi.delete(p)}},e?s?W(!0):B=p.run():a?a(W.bind(null,!0),!0):p.run(),K.pause=p.pause.bind(p),K.resume=p.resume.bind(p),K.stop=K,K}function fn(t,e=1/0,n){if(e<=0||!Se(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ve(t))fn(t.value,e,n);else if(te(t))for(let s=0;s<t.length;s++)fn(t[s],e,n);else if(gu(t)||ns(t))t.forEach(s=>{fn(s,e,n)});else if(yu(t)){for(const s in t)fn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&fn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function oi(t,e,n,s){try{return s?t(...s):t()}catch(i){gr(i,e,n)}}function Lt(t,e,n,s){if(se(t)){const i=oi(t,e,n,s);return i&&mu(i)&&i.catch(o=>{gr(o,e,n)}),i}if(te(t)){const i=[];for(let o=0;o<t.length;o++)i.push(Lt(t[o],e,n,s));return i}}function gr(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ie;if(e){let l=e.parent;const h=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const p=l.ec;if(p){for(let m=0;m<p.length;m++)if(p[m](t,h,d)===!1)return}l=l.parent}if(o){Xt(),oi(o,null,10,[t,h,d]),Yt();return}}gp(t,n,i,s,a)}function gp(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const qe=[];let Ct=-1;const ss=[];let ln=null,Zn=0;const $u=Promise.resolve();let qi=null;function Bu(t){const e=qi||$u;return t?e.then(this?t.bind(this):t):e}function mp(t){let e=Ct+1,n=qe.length;for(;e<n;){const s=e+n>>>1,i=qe[s],o=Qs(i);o<t||o===t&&i.flags&2?e=s+1:n=s}return e}function na(t){if(!(t.flags&1)){const e=Qs(t),n=qe[qe.length-1];!n||!(t.flags&2)&&e>=Qs(n)?qe.push(t):qe.splice(mp(e),0,t),t.flags|=1,Hu()}}function Hu(){qi||(qi=$u.then(zu))}function _p(t){te(t)?ss.push(...t):ln&&t.id===-1?ln.splice(Zn+1,0,t):t.flags&1||(ss.push(t),t.flags|=1),Hu()}function Ac(t,e,n=Ct+1){for(;n<qe.length;n++){const s=qe[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;qe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Wu(t){if(ss.length){const e=[...new Set(ss)].sort((n,s)=>Qs(n)-Qs(s));if(ss.length=0,ln){ln.push(...e);return}for(ln=e,Zn=0;Zn<ln.length;Zn++){const n=ln[Zn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ln=null,Zn=0}}const Qs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function zu(t){try{for(Ct=0;Ct<qe.length;Ct++){const e=qe[Ct];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),oi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ct<qe.length;Ct++){const e=qe[Ct];e&&(e.flags&=-2)}Ct=-1,qe.length=0,Wu(),qi=null,(qe.length||ss.length)&&zu()}}let pt=null,Gu=null;function Ki(t){const e=pt;return pt=t,Gu=t&&t.type.__scopeId||null,e}function yp(t,e=pt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Lc(-1);const o=Ki(e);let a;try{a=t(...i)}finally{Ki(o),s._d&&Lc(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function An(t,e,n,s){const i=t.dirs,o=e&&e.dirs;for(let a=0;a<i.length;a++){const l=i[a];o&&(l.oldValue=o[a].value);let h=l.dir[s];h&&(Xt(),Lt(h,n,8,[t.el,l,t,e]),Yt())}}const vp=Symbol("_vte"),wp=t=>t.__isTeleport;function sa(t,e){t.shapeFlag&6&&t.component?(t.transition=e,sa(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function qu(t,e){return se(t)?$e({name:t.name},e,{setup:t}):t}function Ku(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Fs(t,e,n,s,i=!1){if(te(t)){t.forEach((x,L)=>Fs(x,e&&(te(e)?e[L]:e),n,s,i));return}if(js(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Fs(t,e,n,s.component.subTree);return}const o=s.shapeFlag&4?aa(s.component):s.el,a=i?null:o,{i:l,r:h}=t,d=e&&e.r,p=l.refs===Ie?l.refs={}:l.refs,m=l.setupState,v=me(m),S=m===Ie?()=>!1:x=>_e(v,x);if(d!=null&&d!==h&&(Pe(d)?(p[d]=null,S(d)&&(m[d]=null)):Ve(d)&&(d.value=null)),se(h))oi(h,l,12,[a,p]);else{const x=Pe(h),L=Ve(h);if(x||L){const G=()=>{if(t.f){const K=x?S(h)?m[h]:p[h]:h.value;i?te(K)&&Wo(K,o):te(K)?K.includes(o)||K.push(o):x?(p[h]=[o],S(h)&&(m[h]=p[h])):(h.value=[o],t.k&&(p[t.k]=h.value))}else x?(p[h]=a,S(h)&&(m[h]=a)):L&&(h.value=a,t.k&&(p[t.k]=a))};a?(G.id=-1,Ze(G,n)):G()}}}dr().requestIdleCallback;dr().cancelIdleCallback;const js=t=>!!t.type.__asyncLoader,Ju=t=>t.type.__isKeepAlive;function Ip(t,e){Xu(t,"a",e)}function bp(t,e){Xu(t,"da",e)}function Xu(t,e,n=je){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(mr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ju(i.parent.vnode)&&Ep(s,e,n,i),i=i.parent}}function Ep(t,e,n,s){const i=mr(e,t,s,!0);Yu(()=>{Wo(s[e],i)},n)}function mr(t,e,n=je,s=!1){if(n){const i=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{Xt();const l=ai(n),h=Lt(e,n,t,a);return l(),Yt(),h});return s?i.unshift(o):i.push(o),o}}const en=t=>(e,n=je)=>{(!ei||t==="sp")&&mr(t,(...s)=>e(...s),n)},Tp=en("bm"),_r=en("m"),Sp=en("bu"),Ap=en("u"),Cp=en("bum"),Yu=en("um"),Rp=en("sp"),Pp=en("rtg"),Op=en("rtc");function kp(t,e=je){mr("ec",t,e)}const Np="components";function Dp(t,e){return Mp(Np,t,!0,e)||t}const xp=Symbol.for("v-ndc");function Mp(t,e,n=!0,s=!1){const i=pt||je;if(i){const o=i.type;{const l=Sg(o,!1);if(l&&(l===e||l===ct(e)||l===fr(ct(e))))return o}const a=Cc(i[t]||o[t],e)||Cc(i.appContext[t],e);return!a&&s?o:a}}function Cc(t,e){return t&&(t[e]||t[ct(e)]||t[fr(ct(e))])}const Eo=t=>t?_h(t)?aa(t):Eo(t.parent):null,Vs=$e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Eo(t.parent),$root:t=>Eo(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Zu(t),$forceUpdate:t=>t.f||(t.f=()=>{na(t.update)}),$nextTick:t=>t.n||(t.n=Bu.bind(t.proxy)),$watch:t=>ng.bind(t)}),Qr=(t,e)=>t!==Ie&&!t.__isScriptSetup&&_e(t,e),Lp={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:o,accessCache:a,type:l,appContext:h}=t;let d;if(e[0]!=="$"){const S=a[e];if(S!==void 0)switch(S){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return o[e]}else{if(Qr(s,e))return a[e]=1,s[e];if(i!==Ie&&_e(i,e))return a[e]=2,i[e];if((d=t.propsOptions[0])&&_e(d,e))return a[e]=3,o[e];if(n!==Ie&&_e(n,e))return a[e]=4,n[e];To&&(a[e]=0)}}const p=Vs[e];let m,v;if(p)return e==="$attrs"&&Fe(t.attrs,"get",""),p(t);if((m=l.__cssModules)&&(m=m[e]))return m;if(n!==Ie&&_e(n,e))return a[e]=4,n[e];if(v=h.config.globalProperties,_e(v,e))return v[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:o}=t;return Qr(i,e)?(i[e]=n,!0):s!==Ie&&_e(s,e)?(s[e]=n,!0):_e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:o}},a){let l;return!!n[a]||t!==Ie&&_e(t,a)||Qr(e,a)||(l=o[0])&&_e(l,a)||_e(s,a)||_e(Vs,a)||_e(i.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Rc(t){return te(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let To=!0;function Up(t){const e=Zu(t),n=t.proxy,s=t.ctx;To=!1,e.beforeCreate&&Pc(e.beforeCreate,t,"bc");const{data:i,computed:o,methods:a,watch:l,provide:h,inject:d,created:p,beforeMount:m,mounted:v,beforeUpdate:S,updated:x,activated:L,deactivated:G,beforeDestroy:K,beforeUnmount:B,destroyed:W,unmounted:z,render:re,renderTracked:fe,renderTriggered:b,errorCaptured:_,serverPrefetch:I,expose:E,inheritAttrs:T,components:C,directives:w,filters:Be}=e;if(d&&Fp(d,s,null),a)for(const oe in a){const ie=a[oe];se(ie)&&(s[oe]=ie.bind(n))}if(i){const oe=i.call(n,n);Se(oe)&&(t.data=pr(oe))}if(To=!0,o)for(const oe in o){const ie=o[oe],Qe=se(ie)?ie.bind(n,n):se(ie.get)?ie.get.bind(n,n):Dt,lt=!se(ie)&&se(ie.set)?ie.set.bind(n):Dt,st=ft({get:Qe,set:lt});Object.defineProperty(s,oe,{enumerable:!0,configurable:!0,get:()=>st.value,set:Ee=>st.value=Ee})}if(l)for(const oe in l)Qu(l[oe],s,n,oe);if(h){const oe=se(h)?h.call(n):h;Reflect.ownKeys(oe).forEach(ie=>{Mi(ie,oe[ie])})}p&&Pc(p,t,"c");function Ce(oe,ie){te(ie)?ie.forEach(Qe=>oe(Qe.bind(n))):ie&&oe(ie.bind(n))}if(Ce(Tp,m),Ce(_r,v),Ce(Sp,S),Ce(Ap,x),Ce(Ip,L),Ce(bp,G),Ce(kp,_),Ce(Op,fe),Ce(Pp,b),Ce(Cp,B),Ce(Yu,z),Ce(Rp,I),te(E))if(E.length){const oe=t.exposed||(t.exposed={});E.forEach(ie=>{Object.defineProperty(oe,ie,{get:()=>n[ie],set:Qe=>n[ie]=Qe})})}else t.exposed||(t.exposed={});re&&t.render===Dt&&(t.render=re),T!=null&&(t.inheritAttrs=T),C&&(t.components=C),w&&(t.directives=w),I&&Ku(t)}function Fp(t,e,n=Dt){te(t)&&(t=So(t));for(const s in t){const i=t[s];let o;Se(i)?"default"in i?o=xt(i.from||s,i.default,!0):o=xt(i.from||s):o=xt(i),Ve(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Pc(t,e,n){Lt(te(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qu(t,e,n,s){let i=s.includes(".")?fh(n,s):()=>n[s];if(Pe(t)){const o=e[t];se(o)&&Li(i,o)}else if(se(t))Li(i,t.bind(n));else if(Se(t))if(te(t))t.forEach(o=>Qu(o,e,n,s));else{const o=se(t.handler)?t.handler.bind(n):e[t.handler];se(o)&&Li(i,o,t)}}function Zu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,l=o.get(e);let h;return l?h=l:!i.length&&!n&&!s?h=e:(h={},i.length&&i.forEach(d=>Ji(h,d,a,!0)),Ji(h,e,a)),Se(e)&&o.set(e,h),h}function Ji(t,e,n,s=!1){const{mixins:i,extends:o}=e;o&&Ji(t,o,n,!0),i&&i.forEach(a=>Ji(t,a,n,!0));for(const a in e)if(!(s&&a==="expose")){const l=jp[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const jp={data:Oc,props:kc,emits:kc,methods:Ds,computed:Ds,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:Ds,directives:Ds,watch:$p,provide:Oc,inject:Vp};function Oc(t,e){return e?t?function(){return $e(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function Vp(t,e){return Ds(So(t),So(e))}function So(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function We(t,e){return t?[...new Set([].concat(t,e))]:e}function Ds(t,e){return t?$e(Object.create(null),t,e):e}function kc(t,e){return t?te(t)&&te(e)?[...new Set([...t,...e])]:$e(Object.create(null),Rc(t),Rc(e??{})):e}function $p(t,e){if(!t)return e;if(!e)return t;const n=$e(Object.create(null),t);for(const s in e)n[s]=We(t[s],e[s]);return n}function eh(){return{app:null,config:{isNativeTag:Pd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bp=0;function Hp(t,e){return function(s,i=null){se(s)||(s=$e({},s)),i!=null&&!Se(i)&&(i=null);const o=eh(),a=new WeakSet,l=[];let h=!1;const d=o.app={_uid:Bp++,_component:s,_props:i,_container:null,_context:o,_instance:null,version:Cg,get config(){return o.config},set config(p){},use(p,...m){return a.has(p)||(p&&se(p.install)?(a.add(p),p.install(d,...m)):se(p)&&(a.add(p),p(d,...m))),d},mixin(p){return o.mixins.includes(p)||o.mixins.push(p),d},component(p,m){return m?(o.components[p]=m,d):o.components[p]},directive(p,m){return m?(o.directives[p]=m,d):o.directives[p]},mount(p,m,v){if(!h){const S=d._ceVNode||xe(s,i);return S.appContext=o,v===!0?v="svg":v===!1&&(v=void 0),t(S,p,v),h=!0,d._container=p,p.__vue_app__=d,aa(S.component)}},onUnmount(p){l.push(p)},unmount(){h&&(Lt(l,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(p,m){return o.provides[p]=m,d},runWithContext(p){const m=is;is=d;try{return p()}finally{is=m}}};return d}}let is=null;function Mi(t,e){if(je){let n=je.provides;const s=je.parent&&je.parent.provides;s===n&&(n=je.provides=Object.create(s)),n[t]=e}}function xt(t,e,n=!1){const s=je||pt;if(s||is){let i=is?is._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&se(e)?e.call(s&&s.proxy):e}}const th={},nh=()=>Object.create(th),sh=t=>Object.getPrototypeOf(t)===th;function Wp(t,e,n,s=!1){const i={},o=nh();t.propsDefaults=Object.create(null),ih(t,e,i,o);for(const a in t.propsOptions[0])a in i||(i[a]=void 0);n?t.props=s?i:Uu(i):t.type.props?t.props=i:t.props=o,t.attrs=o}function zp(t,e,n,s){const{props:i,attrs:o,vnode:{patchFlag:a}}=t,l=me(i),[h]=t.propsOptions;let d=!1;if((s||a>0)&&!(a&16)){if(a&8){const p=t.vnode.dynamicProps;for(let m=0;m<p.length;m++){let v=p[m];if(yr(t.emitsOptions,v))continue;const S=e[v];if(h)if(_e(o,v))S!==o[v]&&(o[v]=S,d=!0);else{const x=ct(v);i[x]=Ao(h,l,x,S,t,!1)}else S!==o[v]&&(o[v]=S,d=!0)}}}else{ih(t,e,i,o)&&(d=!0);let p;for(const m in l)(!e||!_e(e,m)&&((p=Wn(m))===m||!_e(e,p)))&&(h?n&&(n[m]!==void 0||n[p]!==void 0)&&(i[m]=Ao(h,l,m,void 0,t,!0)):delete i[m]);if(o!==l)for(const m in o)(!e||!_e(e,m))&&(delete o[m],d=!0)}d&&zt(t.attrs,"set","")}function ih(t,e,n,s){const[i,o]=t.propsOptions;let a=!1,l;if(e)for(let h in e){if(xs(h))continue;const d=e[h];let p;i&&_e(i,p=ct(h))?!o||!o.includes(p)?n[p]=d:(l||(l={}))[p]=d:yr(t.emitsOptions,h)||(!(h in s)||d!==s[h])&&(s[h]=d,a=!0)}if(o){const h=me(n),d=l||Ie;for(let p=0;p<o.length;p++){const m=o[p];n[m]=Ao(i,h,m,d[m],t,!_e(d,m))}}return a}function Ao(t,e,n,s,i,o){const a=t[n];if(a!=null){const l=_e(a,"default");if(l&&s===void 0){const h=a.default;if(a.type!==Function&&!a.skipFactory&&se(h)){const{propsDefaults:d}=i;if(n in d)s=d[n];else{const p=ai(i);s=d[n]=h.call(null,e),p()}}else s=h;i.ce&&i.ce._setProp(n,s)}a[0]&&(o&&!l?s=!1:a[1]&&(s===""||s===Wn(n))&&(s=!0))}return s}const Gp=new WeakMap;function rh(t,e,n=!1){const s=n?Gp:e.propsCache,i=s.get(t);if(i)return i;const o=t.props,a={},l=[];let h=!1;if(!se(t)){const p=m=>{h=!0;const[v,S]=rh(m,e,!0);$e(a,v),S&&l.push(...S)};!n&&e.mixins.length&&e.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!o&&!h)return Se(t)&&s.set(t,ts),ts;if(te(o))for(let p=0;p<o.length;p++){const m=ct(o[p]);Nc(m)&&(a[m]=Ie)}else if(o)for(const p in o){const m=ct(p);if(Nc(m)){const v=o[p],S=a[m]=te(v)||se(v)?{type:v}:$e({},v),x=S.type;let L=!1,G=!0;if(te(x))for(let K=0;K<x.length;++K){const B=x[K],W=se(B)&&B.name;if(W==="Boolean"){L=!0;break}else W==="String"&&(G=!1)}else L=se(x)&&x.name==="Boolean";S[0]=L,S[1]=G,(L||_e(S,"default"))&&l.push(m)}}const d=[a,l];return Se(t)&&s.set(t,d),d}function Nc(t){return t[0]!=="$"&&!xs(t)}const ia=t=>t[0]==="_"||t==="$stable",ra=t=>te(t)?t.map(Pt):[Pt(t)],qp=(t,e,n)=>{if(e._n)return e;const s=yp((...i)=>ra(e(...i)),n);return s._c=!1,s},oh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ia(i))continue;const o=t[i];if(se(o))e[i]=qp(i,o,s);else if(o!=null){const a=ra(o);e[i]=()=>a}}},ah=(t,e)=>{const n=ra(e);t.slots.default=()=>n},ch=(t,e,n)=>{for(const s in e)(n||!ia(s))&&(t[s]=e[s])},Kp=(t,e,n)=>{const s=t.slots=nh();if(t.vnode.shapeFlag&32){const i=e.__;i&&_o(s,"__",i,!0);const o=e._;o?(ch(s,e,n),n&&_o(s,"_",o,!0)):oh(e,s)}else e&&ah(t,e)},Jp=(t,e,n)=>{const{vnode:s,slots:i}=t;let o=!0,a=Ie;if(s.shapeFlag&32){const l=e._;l?n&&l===1?o=!1:ch(i,e,n):(o=!e.$stable,oh(e,i)),a=e}else e&&(ah(t,e),a={default:1});if(o)for(const l in i)!ia(l)&&a[l]==null&&delete i[l]},Ze=lg;function Xp(t){return Yp(t)}function Yp(t,e){const n=dr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:o,createElement:a,createText:l,createComment:h,setText:d,setElementText:p,parentNode:m,nextSibling:v,setScopeId:S=Dt,insertStaticContent:x}=t,L=(g,y,A,k=null,D=null,N=null,$=void 0,F=null,U=!!y.dynamicChildren)=>{if(g===y)return;g&&!ks(g,y)&&(k=O(g),Ee(g,D,N,!0),g=null),y.patchFlag===-2&&(U=!1,y.dynamicChildren=null);const{type:M,ref:Y,shapeFlag:V}=y;switch(M){case vr:G(g,y,A,k);break;case vn:K(g,y,A,k);break;case Ui:g==null&&B(y,A,k,$);break;case Wt:C(g,y,A,k,D,N,$,F,U);break;default:V&1?re(g,y,A,k,D,N,$,F,U):V&6?w(g,y,A,k,D,N,$,F,U):(V&64||V&128)&&M.process(g,y,A,k,D,N,$,F,U,J)}Y!=null&&D?Fs(Y,g&&g.ref,N,y||g,!y):Y==null&&g&&g.ref!=null&&Fs(g.ref,null,N,g,!0)},G=(g,y,A,k)=>{if(g==null)s(y.el=l(y.children),A,k);else{const D=y.el=g.el;y.children!==g.children&&d(D,y.children)}},K=(g,y,A,k)=>{g==null?s(y.el=h(y.children||""),A,k):y.el=g.el},B=(g,y,A,k)=>{[g.el,g.anchor]=x(g.children,y,A,k,g.el,g.anchor)},W=({el:g,anchor:y},A,k)=>{let D;for(;g&&g!==y;)D=v(g),s(g,A,k),g=D;s(y,A,k)},z=({el:g,anchor:y})=>{let A;for(;g&&g!==y;)A=v(g),i(g),g=A;i(y)},re=(g,y,A,k,D,N,$,F,U)=>{y.type==="svg"?$="svg":y.type==="math"&&($="mathml"),g==null?fe(y,A,k,D,N,$,F,U):I(g,y,D,N,$,F,U)},fe=(g,y,A,k,D,N,$,F)=>{let U,M;const{props:Y,shapeFlag:V,transition:X,dirs:Z}=g;if(U=g.el=a(g.type,N,Y&&Y.is,Y),V&8?p(U,g.children):V&16&&_(g.children,U,null,k,D,Zr(g,N),$,F),Z&&An(g,null,k,"created"),b(U,g,g.scopeId,$,k),Y){for(const ne in Y)ne!=="value"&&!xs(ne)&&o(U,ne,null,Y[ne],N,k);"value"in Y&&o(U,"value",null,Y.value,N),(M=Y.onVnodeBeforeMount)&&At(M,k,g)}Z&&An(g,null,k,"beforeMount");const Q=Qp(D,X);Q&&X.beforeEnter(U),s(U,y,A),((M=Y&&Y.onVnodeMounted)||Q||Z)&&Ze(()=>{M&&At(M,k,g),Q&&X.enter(U),Z&&An(g,null,k,"mounted")},D)},b=(g,y,A,k,D)=>{if(A&&S(g,A),k)for(let N=0;N<k.length;N++)S(g,k[N]);if(D){let N=D.subTree;if(y===N||ph(N.type)&&(N.ssContent===y||N.ssFallback===y)){const $=D.vnode;b(g,$,$.scopeId,$.slotScopeIds,D.parent)}}},_=(g,y,A,k,D,N,$,F,U=0)=>{for(let M=U;M<g.length;M++){const Y=g[M]=F?un(g[M]):Pt(g[M]);L(null,Y,y,A,k,D,N,$,F)}},I=(g,y,A,k,D,N,$)=>{const F=y.el=g.el;let{patchFlag:U,dynamicChildren:M,dirs:Y}=y;U|=g.patchFlag&16;const V=g.props||Ie,X=y.props||Ie;let Z;if(A&&Cn(A,!1),(Z=X.onVnodeBeforeUpdate)&&At(Z,A,y,g),Y&&An(y,g,A,"beforeUpdate"),A&&Cn(A,!0),(V.innerHTML&&X.innerHTML==null||V.textContent&&X.textContent==null)&&p(F,""),M?E(g.dynamicChildren,M,F,A,k,Zr(y,D),N):$||ie(g,y,F,null,A,k,Zr(y,D),N,!1),U>0){if(U&16)T(F,V,X,A,D);else if(U&2&&V.class!==X.class&&o(F,"class",null,X.class,D),U&4&&o(F,"style",V.style,X.style,D),U&8){const Q=y.dynamicProps;for(let ne=0;ne<Q.length;ne++){const ae=Q[ne],Oe=V[ae],ke=X[ae];(ke!==Oe||ae==="value")&&o(F,ae,Oe,ke,D,A)}}U&1&&g.children!==y.children&&p(F,y.children)}else!$&&M==null&&T(F,V,X,A,D);((Z=X.onVnodeUpdated)||Y)&&Ze(()=>{Z&&At(Z,A,y,g),Y&&An(y,g,A,"updated")},k)},E=(g,y,A,k,D,N,$)=>{for(let F=0;F<y.length;F++){const U=g[F],M=y[F],Y=U.el&&(U.type===Wt||!ks(U,M)||U.shapeFlag&198)?m(U.el):A;L(U,M,Y,null,k,D,N,$,!0)}},T=(g,y,A,k,D)=>{if(y!==A){if(y!==Ie)for(const N in y)!xs(N)&&!(N in A)&&o(g,N,y[N],null,D,k);for(const N in A){if(xs(N))continue;const $=A[N],F=y[N];$!==F&&N!=="value"&&o(g,N,F,$,D,k)}"value"in A&&o(g,"value",y.value,A.value,D)}},C=(g,y,A,k,D,N,$,F,U)=>{const M=y.el=g?g.el:l(""),Y=y.anchor=g?g.anchor:l("");let{patchFlag:V,dynamicChildren:X,slotScopeIds:Z}=y;Z&&(F=F?F.concat(Z):Z),g==null?(s(M,A,k),s(Y,A,k),_(y.children||[],A,Y,D,N,$,F,U)):V>0&&V&64&&X&&g.dynamicChildren?(E(g.dynamicChildren,X,A,D,N,$,F),(y.key!=null||D&&y===D.subTree)&&lh(g,y,!0)):ie(g,y,A,Y,D,N,$,F,U)},w=(g,y,A,k,D,N,$,F,U)=>{y.slotScopeIds=F,g==null?y.shapeFlag&512?D.ctx.activate(y,A,k,$,U):Be(y,A,k,D,N,$,U):nt(g,y,U)},Be=(g,y,A,k,D,N,$)=>{const F=g.component=wg(g,k,D);if(Ju(g)&&(F.ctx.renderer=J),Ig(F,!1,$),F.asyncDep){if(D&&D.registerDep(F,Ce,$),!g.el){const U=F.subTree=xe(vn);K(null,U,y,A)}}else Ce(F,g,y,A,D,N,$)},nt=(g,y,A)=>{const k=y.component=g.component;if(ag(g,y,A))if(k.asyncDep&&!k.asyncResolved){oe(k,y,A);return}else k.next=y,k.update();else y.el=g.el,k.vnode=y},Ce=(g,y,A,k,D,N,$)=>{const F=()=>{if(g.isMounted){let{next:V,bu:X,u:Z,parent:Q,vnode:ne}=g;{const Me=uh(g);if(Me){V&&(V.el=ne.el,oe(g,V,$)),Me.asyncDep.then(()=>{g.isUnmounted||F()});return}}let ae=V,Oe;Cn(g,!1),V?(V.el=ne.el,oe(g,V,$)):V=ne,X&&qr(X),(Oe=V.props&&V.props.onVnodeBeforeUpdate)&&At(Oe,Q,V,ne),Cn(g,!0);const ke=xc(g),it=g.subTree;g.subTree=ke,L(it,ke,m(it.el),O(it),g,D,N),V.el=ke.el,ae===null&&cg(g,ke.el),Z&&Ze(Z,D),(Oe=V.props&&V.props.onVnodeUpdated)&&Ze(()=>At(Oe,Q,V,ne),D)}else{let V;const{el:X,props:Z}=y,{bm:Q,m:ne,parent:ae,root:Oe,type:ke}=g,it=js(y);Cn(g,!1),Q&&qr(Q),!it&&(V=Z&&Z.onVnodeBeforeMount)&&At(V,ae,y),Cn(g,!0);{Oe.ce&&Oe.ce._def.shadowRoot!==!1&&Oe.ce._injectChildStyle(ke);const Me=g.subTree=xc(g);L(null,Me,A,k,g,D,N),y.el=Me.el}if(ne&&Ze(ne,D),!it&&(V=Z&&Z.onVnodeMounted)){const Me=y;Ze(()=>At(V,ae,Me),D)}(y.shapeFlag&256||ae&&js(ae.vnode)&&ae.vnode.shapeFlag&256)&&g.a&&Ze(g.a,D),g.isMounted=!0,y=A=k=null}};g.scope.on();const U=g.effect=new Eu(F);g.scope.off();const M=g.update=U.run.bind(U),Y=g.job=U.runIfDirty.bind(U);Y.i=g,Y.id=g.uid,U.scheduler=()=>na(Y),Cn(g,!0),M()},oe=(g,y,A)=>{y.component=g;const k=g.vnode.props;g.vnode=y,g.next=null,zp(g,y.props,k,A),Jp(g,y.children,A),Xt(),Ac(g),Yt()},ie=(g,y,A,k,D,N,$,F,U=!1)=>{const M=g&&g.children,Y=g?g.shapeFlag:0,V=y.children,{patchFlag:X,shapeFlag:Z}=y;if(X>0){if(X&128){lt(M,V,A,k,D,N,$,F,U);return}else if(X&256){Qe(M,V,A,k,D,N,$,F,U);return}}Z&8?(Y&16&&Je(M,D,N),V!==M&&p(A,V)):Y&16?Z&16?lt(M,V,A,k,D,N,$,F,U):Je(M,D,N,!0):(Y&8&&p(A,""),Z&16&&_(V,A,k,D,N,$,F,U))},Qe=(g,y,A,k,D,N,$,F,U)=>{g=g||ts,y=y||ts;const M=g.length,Y=y.length,V=Math.min(M,Y);let X;for(X=0;X<V;X++){const Z=y[X]=U?un(y[X]):Pt(y[X]);L(g[X],Z,A,null,D,N,$,F,U)}M>Y?Je(g,D,N,!0,!1,V):_(y,A,k,D,N,$,F,U,V)},lt=(g,y,A,k,D,N,$,F,U)=>{let M=0;const Y=y.length;let V=g.length-1,X=Y-1;for(;M<=V&&M<=X;){const Z=g[M],Q=y[M]=U?un(y[M]):Pt(y[M]);if(ks(Z,Q))L(Z,Q,A,null,D,N,$,F,U);else break;M++}for(;M<=V&&M<=X;){const Z=g[V],Q=y[X]=U?un(y[X]):Pt(y[X]);if(ks(Z,Q))L(Z,Q,A,null,D,N,$,F,U);else break;V--,X--}if(M>V){if(M<=X){const Z=X+1,Q=Z<Y?y[Z].el:k;for(;M<=X;)L(null,y[M]=U?un(y[M]):Pt(y[M]),A,Q,D,N,$,F,U),M++}}else if(M>X)for(;M<=V;)Ee(g[M],D,N,!0),M++;else{const Z=M,Q=M,ne=new Map;for(M=Q;M<=X;M++){const Ne=y[M]=U?un(y[M]):Pt(y[M]);Ne.key!=null&&ne.set(Ne.key,M)}let ae,Oe=0;const ke=X-Q+1;let it=!1,Me=0;const nn=new Array(ke);for(M=0;M<ke;M++)nn[M]=0;for(M=Z;M<=V;M++){const Ne=g[M];if(Oe>=ke){Ee(Ne,D,N,!0);continue}let rt;if(Ne.key!=null)rt=ne.get(Ne.key);else for(ae=Q;ae<=X;ae++)if(nn[ae-Q]===0&&ks(Ne,y[ae])){rt=ae;break}rt===void 0?Ee(Ne,D,N,!0):(nn[rt-Q]=M+1,rt>=Me?Me=rt:it=!0,L(Ne,y[rt],A,null,D,N,$,F,U),Oe++)}const _s=it?Zp(nn):ts;for(ae=_s.length-1,M=ke-1;M>=0;M--){const Ne=Q+M,rt=y[Ne],mi=Ne+1<Y?y[Ne+1].el:k;nn[M]===0?L(null,rt,A,mi,D,N,$,F,U):it&&(ae<0||M!==_s[ae]?st(rt,A,mi,2):ae--)}}},st=(g,y,A,k,D=null)=>{const{el:N,type:$,transition:F,children:U,shapeFlag:M}=g;if(M&6){st(g.component.subTree,y,A,k);return}if(M&128){g.suspense.move(y,A,k);return}if(M&64){$.move(g,y,A,J);return}if($===Wt){s(N,y,A);for(let V=0;V<U.length;V++)st(U[V],y,A,k);s(g.anchor,y,A);return}if($===Ui){W(g,y,A);return}if(k!==2&&M&1&&F)if(k===0)F.beforeEnter(N),s(N,y,A),Ze(()=>F.enter(N),D);else{const{leave:V,delayLeave:X,afterLeave:Z}=F,Q=()=>{g.ctx.isUnmounted?i(N):s(N,y,A)},ne=()=>{V(N,()=>{Q(),Z&&Z()})};X?X(N,Q,ne):ne()}else s(N,y,A)},Ee=(g,y,A,k=!1,D=!1)=>{const{type:N,props:$,ref:F,children:U,dynamicChildren:M,shapeFlag:Y,patchFlag:V,dirs:X,cacheIndex:Z}=g;if(V===-2&&(D=!1),F!=null&&(Xt(),Fs(F,null,A,g,!0),Yt()),Z!=null&&(y.renderCache[Z]=void 0),Y&256){y.ctx.deactivate(g);return}const Q=Y&1&&X,ne=!js(g);let ae;if(ne&&(ae=$&&$.onVnodeBeforeUnmount)&&At(ae,y,g),Y&6)St(g.component,A,k);else{if(Y&128){g.suspense.unmount(A,k);return}Q&&An(g,null,y,"beforeUnmount"),Y&64?g.type.remove(g,y,A,J,k):M&&!M.hasOnce&&(N!==Wt||V>0&&V&64)?Je(M,y,A,!1,!0):(N===Wt&&V&384||!D&&Y&16)&&Je(U,y,A),k&&Te(g)}(ne&&(ae=$&&$.onVnodeUnmounted)||Q)&&Ze(()=>{ae&&At(ae,y,g),Q&&An(g,null,y,"unmounted")},A)},Te=g=>{const{type:y,el:A,anchor:k,transition:D}=g;if(y===Wt){tn(A,k);return}if(y===Ui){z(g);return}const N=()=>{i(A),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(g.shapeFlag&1&&D&&!D.persisted){const{leave:$,delayLeave:F}=D,U=()=>$(A,N);F?F(g.el,N,U):U()}else N()},tn=(g,y)=>{let A;for(;g!==y;)A=v(g),i(g),g=A;i(y)},St=(g,y,A)=>{const{bum:k,scope:D,job:N,subTree:$,um:F,m:U,a:M,parent:Y,slots:{__:V}}=g;Dc(U),Dc(M),k&&qr(k),Y&&te(V)&&V.forEach(X=>{Y.renderCache[X]=void 0}),D.stop(),N&&(N.flags|=8,Ee($,g,y,A)),F&&Ze(F,y),Ze(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},Je=(g,y,A,k=!1,D=!1,N=0)=>{for(let $=N;$<g.length;$++)Ee(g[$],y,A,k,D)},O=g=>{if(g.shapeFlag&6)return O(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const y=v(g.anchor||g.el),A=y&&y[vp];return A?v(A):y};let q=!1;const H=(g,y,A)=>{g==null?y._vnode&&Ee(y._vnode,null,null,!0):L(y._vnode||null,g,y,null,null,null,A),y._vnode=g,q||(q=!0,Ac(),Wu(),q=!1)},J={p:L,um:Ee,m:st,r:Te,mt:Be,mc:_,pc:ie,pbc:E,n:O,o:t};return{render:H,hydrate:void 0,createApp:Hp(H)}}function Zr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Cn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Qp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function lh(t,e,n=!1){const s=t.children,i=e.children;if(te(s)&&te(i))for(let o=0;o<s.length;o++){const a=s[o];let l=i[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[o]=un(i[o]),l.el=a.el),!n&&l.patchFlag!==-2&&lh(a,l)),l.type===vr&&(l.el=a.el),l.type===vn&&!l.el&&(l.el=a.el)}}function Zp(t){const e=t.slice(),n=[0];let s,i,o,a,l;const h=t.length;for(s=0;s<h;s++){const d=t[s];if(d!==0){if(i=n[n.length-1],t[i]<d){e[s]=i,n.push(s);continue}for(o=0,a=n.length-1;o<a;)l=o+a>>1,t[n[l]]<d?o=l+1:a=l;d<t[n[o]]&&(o>0&&(e[s]=n[o-1]),n[o]=s)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function uh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:uh(e)}function Dc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const eg=Symbol.for("v-scx"),tg=()=>xt(eg);function Li(t,e,n){return hh(t,e,n)}function hh(t,e,n=Ie){const{immediate:s,deep:i,flush:o,once:a}=n,l=$e({},n),h=e&&s||!e&&o!=="post";let d;if(ei){if(o==="sync"){const S=tg();d=S.__watcherHandles||(S.__watcherHandles=[])}else if(!h){const S=()=>{};return S.stop=Dt,S.resume=Dt,S.pause=Dt,S}}const p=je;l.call=(S,x,L)=>Lt(S,p,x,L);let m=!1;o==="post"?l.scheduler=S=>{Ze(S,p&&p.suspense)}:o!=="sync"&&(m=!0,l.scheduler=(S,x)=>{x?S():na(S)}),l.augmentJob=S=>{e&&(S.flags|=4),m&&(S.flags|=2,p&&(S.id=p.uid,S.i=p))};const v=pp(t,e,l);return ei&&(d?d.push(v):h&&v()),v}function ng(t,e,n){const s=this.proxy,i=Pe(t)?t.includes(".")?fh(s,t):()=>s[t]:t.bind(s,s);let o;se(e)?o=e:(o=e.handler,n=e);const a=ai(this),l=hh(i,o.bind(s),n);return a(),l}function fh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const sg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ct(e)}Modifiers`]||t[`${Wn(e)}Modifiers`];function ig(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ie;let i=n;const o=e.startsWith("update:"),a=o&&sg(s,e.slice(7));a&&(a.trim&&(i=n.map(p=>Pe(p)?p.trim():p)),a.number&&(i=n.map(xd)));let l,h=s[l=Gr(e)]||s[l=Gr(ct(e))];!h&&o&&(h=s[l=Gr(Wn(e))]),h&&Lt(h,t,6,i);const d=s[l+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Lt(d,t,6,i)}}function dh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const o=t.emits;let a={},l=!1;if(!se(t)){const h=d=>{const p=dh(d,e,!0);p&&(l=!0,$e(a,p))};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}return!o&&!l?(Se(t)&&s.set(t,null),null):(te(o)?o.forEach(h=>a[h]=null):$e(a,o),Se(t)&&s.set(t,a),a)}function yr(t,e){return!t||!lr(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(t,e[0].toLowerCase()+e.slice(1))||_e(t,Wn(e))||_e(t,e))}function xc(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[o],slots:a,attrs:l,emit:h,render:d,renderCache:p,props:m,data:v,setupState:S,ctx:x,inheritAttrs:L}=t,G=Ki(t);let K,B;try{if(n.shapeFlag&4){const z=i||s,re=z;K=Pt(d.call(re,z,p,m,S,v,x)),B=l}else{const z=e;K=Pt(z.length>1?z(m,{attrs:l,slots:a,emit:h}):z(m,null)),B=e.props?l:rg(l)}}catch(z){$s.length=0,gr(z,t,1),K=xe(vn)}let W=K;if(B&&L!==!1){const z=Object.keys(B),{shapeFlag:re}=W;z.length&&re&7&&(o&&z.some(Ho)&&(B=og(B,o)),W=us(W,B,!1,!0))}return n.dirs&&(W=us(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&sa(W,n.transition),K=W,Ki(G),K}const rg=t=>{let e;for(const n in t)(n==="class"||n==="style"||lr(n))&&((e||(e={}))[n]=t[n]);return e},og=(t,e)=>{const n={};for(const s in t)(!Ho(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ag(t,e,n){const{props:s,children:i,component:o}=t,{props:a,children:l,patchFlag:h}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&h>=0){if(h&1024)return!0;if(h&16)return s?Mc(s,a,d):!!a;if(h&8){const p=e.dynamicProps;for(let m=0;m<p.length;m++){const v=p[m];if(a[v]!==s[v]&&!yr(d,v))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===a?!1:s?a?Mc(s,a,d):!0:!!a;return!1}function Mc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const o=s[i];if(e[o]!==t[o]&&!yr(n,o))return!0}return!1}function cg({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const ph=t=>t.__isSuspense;function lg(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):_p(t)}const Wt=Symbol.for("v-fgt"),vr=Symbol.for("v-txt"),vn=Symbol.for("v-cmt"),Ui=Symbol.for("v-stc"),$s=[];let et=null;function gt(t=!1){$s.push(et=t?null:[])}function ug(){$s.pop(),et=$s[$s.length-1]||null}let Zs=1;function Lc(t,e=!1){Zs+=t,t<0&&et&&e&&(et.hasOnce=!0)}function gh(t){return t.dynamicChildren=Zs>0?et||ts:null,ug(),Zs>0&&et&&et.push(t),t}function kt(t,e,n,s,i,o){return gh(he(t,e,n,s,i,o,!0))}function hg(t,e,n,s,i){return gh(xe(t,e,n,s,i,!0))}function Xi(t){return t?t.__v_isVNode===!0:!1}function ks(t,e){return t.type===e.type&&t.key===e.key}const mh=({key:t})=>t??null,Fi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Pe(t)||Ve(t)||se(t)?{i:pt,r:t,k:e,f:!!n}:t:null);function he(t,e=null,n=null,s=0,i=null,o=t===Wt?0:1,a=!1,l=!1){const h={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&mh(e),ref:e&&Fi(e),scopeId:Gu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:pt};return l?(oa(h,n),o&128&&t.normalize(h)):n&&(h.shapeFlag|=Pe(n)?8:16),Zs>0&&!a&&et&&(h.patchFlag>0||o&6)&&h.patchFlag!==32&&et.push(h),h}const xe=fg;function fg(t,e=null,n=null,s=0,i=null,o=!1){if((!t||t===xp)&&(t=vn),Xi(t)){const l=us(t,e,!0);return n&&oa(l,n),Zs>0&&!o&&et&&(l.shapeFlag&6?et[et.indexOf(t)]=l:et.push(l)),l.patchFlag=-2,l}if(Ag(t)&&(t=t.__vccOpts),e){e=dg(e);let{class:l,style:h}=e;l&&!Pe(l)&&(e.class=qo(l)),Se(h)&&(ta(h)&&!te(h)&&(h=$e({},h)),e.style=Go(h))}const a=Pe(t)?1:ph(t)?128:wp(t)?64:Se(t)?4:se(t)?2:0;return he(t,e,n,s,i,a,o,!0)}function dg(t){return t?ta(t)||sh(t)?$e({},t):t:null}function us(t,e,n=!1,s=!1){const{props:i,ref:o,patchFlag:a,children:l,transition:h}=t,d=e?_g(i||{},e):i,p={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&mh(d),ref:e&&e.ref?n&&o?te(o)?o.concat(Fi(e)):[o,Fi(e)]:Fi(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Wt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:h,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&us(t.ssContent),ssFallback:t.ssFallback&&us(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return h&&s&&sa(p,h.clone(p)),p}function pg(t=" ",e=0){return xe(vr,null,t,e)}function gg(t,e){const n=xe(Ui,null,t);return n.staticCount=e,n}function mg(t="",e=!1){return e?(gt(),hg(vn,null,t)):xe(vn,null,t)}function Pt(t){return t==null||typeof t=="boolean"?xe(vn):te(t)?xe(Wt,null,t.slice()):Xi(t)?un(t):xe(vr,null,String(t))}function un(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:us(t)}function oa(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),oa(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!sh(e)?e._ctx=pt:i===3&&pt&&(pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:pt},n=32):(e=String(e),s&64?(n=16,e=[pg(e)]):n=8);t.children=e,t.shapeFlag|=n}function _g(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=qo([e.class,s.class]));else if(i==="style")e.style=Go([e.style,s.style]);else if(lr(i)){const o=e[i],a=s[i];a&&o!==a&&!(te(o)&&o.includes(a))&&(e[i]=o?[].concat(o,a):a)}else i!==""&&(e[i]=s[i])}return e}function At(t,e,n,s=null){Lt(t,e,7,[n,s])}const yg=eh();let vg=0;function wg(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||yg,o={uid:vg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $d(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rh(s,i),emitsOptions:dh(s,i),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:s.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=ig.bind(null,o),t.ce&&t.ce(o),o}let je=null,Yi,Co;{const t=dr(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),o=>{i.length>1?i.forEach(a=>a(o)):i[0](o)}};Yi=e("__VUE_INSTANCE_SETTERS__",n=>je=n),Co=e("__VUE_SSR_SETTERS__",n=>ei=n)}const ai=t=>{const e=je;return Yi(t),t.scope.on(),()=>{t.scope.off(),Yi(e)}},Uc=()=>{je&&je.scope.off(),Yi(null)};function _h(t){return t.vnode.shapeFlag&4}let ei=!1;function Ig(t,e=!1,n=!1){e&&Co(e);const{props:s,children:i}=t.vnode,o=_h(t);Wp(t,s,o,e),Kp(t,i,n||e);const a=o?bg(t,e):void 0;return e&&Co(!1),a}function bg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Lp);const{setup:s}=n;if(s){Xt();const i=t.setupContext=s.length>1?Tg(t):null,o=ai(t),a=oi(s,t,0,[t.props,i]),l=mu(a);if(Yt(),o(),(l||t.sp)&&!js(t)&&Ku(t),l){if(a.then(Uc,Uc),e)return a.then(h=>{Fc(t,h)}).catch(h=>{gr(h,t,0)});t.asyncDep=a}else Fc(t,a)}else yh(t)}function Fc(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=Vu(e)),yh(t)}function yh(t,e,n){const s=t.type;t.render||(t.render=s.render||Dt);{const i=ai(t);Xt();try{Up(t)}finally{Yt(),i()}}}const Eg={get(t,e){return Fe(t,"get",""),t[e]}};function Tg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Eg),slots:t.slots,emit:t.emit,expose:e}}function aa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Vu(ap(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vs)return Vs[n](t)},has(e,n){return n in e||n in Vs}})):t.proxy}function Sg(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function Ag(t){return se(t)&&"__vccOpts"in t}const ft=(t,e)=>fp(t,e,ei);function vh(t,e,n){const s=arguments.length;return s===2?Se(e)&&!te(e)?Xi(e)?xe(t,null,[e]):xe(t,e):xe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Xi(n)&&(n=[n]),xe(t,e,n))}const Cg="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ro;const jc=typeof window<"u"&&window.trustedTypes;if(jc)try{Ro=jc.createPolicy("vue",{createHTML:t=>t})}catch{}const wh=Ro?t=>Ro.createHTML(t):t=>t,Rg="http://www.w3.org/2000/svg",Pg="http://www.w3.org/1998/Math/MathML",Ht=typeof document<"u"?document:null,Vc=Ht&&Ht.createElement("template"),Og={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Ht.createElementNS(Rg,t):e==="mathml"?Ht.createElementNS(Pg,t):n?Ht.createElement(t,{is:n}):Ht.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ht.createTextNode(t),createComment:t=>Ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,o){const a=n?n.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{Vc.innerHTML=wh(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Vc.content;if(s==="svg"||s==="mathml"){const h=l.firstChild;for(;h.firstChild;)l.appendChild(h.firstChild);l.removeChild(h)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},kg=Symbol("_vtc");function Ng(t,e,n){const s=t[kg];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const $c=Symbol("_vod"),Dg=Symbol("_vsh"),xg=Symbol(""),Mg=/(^|;)\s*display\s*:/;function Lg(t,e,n){const s=t.style,i=Pe(n);let o=!1;if(n&&!i){if(e)if(Pe(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&ji(s,l,"")}else for(const a in e)n[a]==null&&ji(s,a,"");for(const a in n)a==="display"&&(o=!0),ji(s,a,n[a])}else if(i){if(e!==n){const a=s[xg];a&&(n+=";"+a),s.cssText=n,o=Mg.test(n)}}else e&&t.removeAttribute("style");$c in t&&(t[$c]=o?s.display:"",t[Dg]&&(s.display="none"))}const Bc=/\s*!important$/;function ji(t,e,n){if(te(n))n.forEach(s=>ji(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Ug(t,e);Bc.test(n)?t.setProperty(Wn(s),n.replace(Bc,""),"important"):t[s]=n}}const Hc=["Webkit","Moz","ms"],eo={};function Ug(t,e){const n=eo[e];if(n)return n;let s=ct(e);if(s!=="filter"&&s in t)return eo[e]=s;s=fr(s);for(let i=0;i<Hc.length;i++){const o=Hc[i]+s;if(o in t)return eo[e]=o}return e}const Wc="http://www.w3.org/1999/xlink";function zc(t,e,n,s,i,o=Vd(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Wc,e.slice(6,e.length)):t.setAttributeNS(Wc,e,n):n==null||o&&!vu(n)?t.removeAttribute(e):t.setAttribute(e,o?"":In(n)?String(n):n)}function Gc(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?wh(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?t.getAttribute("value")||"":t.value,h=n==null?t.type==="checkbox"?"on":"":String(n);(l!==h||!("_value"in t))&&(t.value=h),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=vu(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(i||e)}function Fg(t,e,n,s){t.addEventListener(e,n,s)}function jg(t,e,n,s){t.removeEventListener(e,n,s)}const qc=Symbol("_vei");function Vg(t,e,n,s,i=null){const o=t[qc]||(t[qc]={}),a=o[e];if(s&&a)a.value=s;else{const[l,h]=$g(e);if(s){const d=o[e]=Wg(s,i);Fg(t,l,d,h)}else a&&(jg(t,l,a,h),o[e]=void 0)}}const Kc=/(?:Once|Passive|Capture)$/;function $g(t){let e;if(Kc.test(t)){e={};let s;for(;s=t.match(Kc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Wn(t.slice(2)),e]}let to=0;const Bg=Promise.resolve(),Hg=()=>to||(Bg.then(()=>to=0),to=Date.now());function Wg(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Lt(zg(s,n.value),e,5,[s])};return n.value=t,n.attached=Hg(),n}function zg(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Jc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Gg=(t,e,n,s,i,o)=>{const a=i==="svg";e==="class"?Ng(t,s,a):e==="style"?Lg(t,n,s):lr(e)?Ho(e)||Vg(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qg(t,e,s,a))?(Gc(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zc(t,e,s,a,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Pe(s))?Gc(t,ct(e),s,o,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),zc(t,e,s,a))};function qg(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Jc(e)&&se(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Jc(e)&&Pe(n)?!1:e in t}const Kg=$e({patchProp:Gg},Og);let Xc;function Jg(){return Xc||(Xc=Xp(Kg))}const Xg=(...t)=>{const e=Jg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Qg(s);if(!i)return;const o=e._component;!se(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=n(i,!1,Yg(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},e};function Yg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Qg(t){return Pe(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const es=typeof document<"u";function Ih(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Zg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ih(t.default)}const ge=Object.assign;function no(t,e){const n={};for(const s in e){const i=e[s];n[s]=bt(i)?i.map(t):t(i)}return n}const Bs=()=>{},bt=Array.isArray,bh=/#/g,em=/&/g,tm=/\//g,nm=/=/g,sm=/\?/g,Eh=/\+/g,im=/%5B/g,rm=/%5D/g,Th=/%5E/g,om=/%60/g,Sh=/%7B/g,am=/%7C/g,Ah=/%7D/g,cm=/%20/g;function ca(t){return encodeURI(""+t).replace(am,"|").replace(im,"[").replace(rm,"]")}function lm(t){return ca(t).replace(Sh,"{").replace(Ah,"}").replace(Th,"^")}function Po(t){return ca(t).replace(Eh,"%2B").replace(cm,"+").replace(bh,"%23").replace(em,"%26").replace(om,"`").replace(Sh,"{").replace(Ah,"}").replace(Th,"^")}function um(t){return Po(t).replace(nm,"%3D")}function hm(t){return ca(t).replace(bh,"%23").replace(sm,"%3F")}function fm(t){return t==null?"":hm(t).replace(tm,"%2F")}function ti(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const dm=/\/$/,pm=t=>t.replace(dm,"");function so(t,e,n="/"){let s,i={},o="",a="";const l=e.indexOf("#");let h=e.indexOf("?");return l<h&&l>=0&&(h=-1),h>-1&&(s=e.slice(0,h),o=e.slice(h+1,l>-1?l:e.length),i=t(o)),l>-1&&(s=s||e.slice(0,l),a=e.slice(l,e.length)),s=ym(s??e,n),{fullPath:s+(o&&"?")+o+a,path:s,query:i,hash:ti(a)}}function gm(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Yc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function mm(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&hs(e.matched[s],n.matched[i])&&Ch(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ch(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!_m(t[n],e[n]))return!1;return!0}function _m(t,e){return bt(t)?Qc(t,e):bt(e)?Qc(e,t):t===e}function Qc(t,e){return bt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function ym(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let o=n.length-1,a,l;for(a=0;a<s.length;a++)if(l=s[a],l!==".")if(l==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(a).join("/")}const an={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ni;(function(t){t.pop="pop",t.push="push"})(ni||(ni={}));var Hs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Hs||(Hs={}));function vm(t){if(!t)if(es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pm(t)}const wm=/^[^#]+#/;function Im(t,e){return t.replace(wm,"#")+e}function bm(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const wr=()=>({left:window.scrollX,top:window.scrollY});function Em(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=bm(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Zc(t,e){return(history.state?history.state.position-e:-1)+t}const Oo=new Map;function Tm(t,e){Oo.set(t,e)}function Sm(t){const e=Oo.get(t);return Oo.delete(t),e}let Am=()=>location.protocol+"//"+location.host;function Rh(t,e){const{pathname:n,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){let l=i.includes(t.slice(o))?t.slice(o).length:1,h=i.slice(l);return h[0]!=="/"&&(h="/"+h),Yc(h,"")}return Yc(n,t)+s+i}function Cm(t,e,n,s){let i=[],o=[],a=null;const l=({state:v})=>{const S=Rh(t,location),x=n.value,L=e.value;let G=0;if(v){if(n.value=S,e.value=v,a&&a===x){a=null;return}G=L?v.position-L.position:0}else s(S);i.forEach(K=>{K(n.value,x,{delta:G,type:ni.pop,direction:G?G>0?Hs.forward:Hs.back:Hs.unknown})})};function h(){a=n.value}function d(v){i.push(v);const S=()=>{const x=i.indexOf(v);x>-1&&i.splice(x,1)};return o.push(S),S}function p(){const{history:v}=window;v.state&&v.replaceState(ge({},v.state,{scroll:wr()}),"")}function m(){for(const v of o)v();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:h,listen:d,destroy:m}}function el(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?wr():null}}function Rm(t){const{history:e,location:n}=window,s={value:Rh(t,n)},i={value:e.state};i.value||o(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(h,d,p){const m=t.indexOf("#"),v=m>-1?(n.host&&document.querySelector("base")?t:t.slice(m))+h:Am()+t+h;try{e[p?"replaceState":"pushState"](d,"",v),i.value=d}catch(S){console.error(S),n[p?"replace":"assign"](v)}}function a(h,d){const p=ge({},e.state,el(i.value.back,h,i.value.forward,!0),d,{position:i.value.position});o(h,p,!0),s.value=h}function l(h,d){const p=ge({},i.value,e.state,{forward:h,scroll:wr()});o(p.current,p,!0);const m=ge({},el(s.value,h,null),{position:p.position+1},d);o(h,m,!1),s.value=h}return{location:s,state:i,push:l,replace:a}}function Pm(t){t=vm(t);const e=Rm(t),n=Cm(t,e.state,e.location,e.replace);function s(o,a=!0){a||n.pauseListeners(),history.go(o)}const i=ge({location:"",base:t,go:s,createHref:Im.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Om(t){return typeof t=="string"||t&&typeof t=="object"}function Ph(t){return typeof t=="string"||typeof t=="symbol"}const Oh=Symbol("");var tl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(tl||(tl={}));function fs(t,e){return ge(new Error,{type:t,[Oh]:!0},e)}function Bt(t,e){return t instanceof Error&&Oh in t&&(e==null||!!(t.type&e))}const nl="[^/]+?",km={sensitive:!1,strict:!1,start:!0,end:!0},Nm=/[.+*?^${}()[\]/\\]/g;function Dm(t,e){const n=ge({},km,e),s=[];let i=n.start?"^":"";const o=[];for(const d of t){const p=d.length?[]:[90];n.strict&&!d.length&&(i+="/");for(let m=0;m<d.length;m++){const v=d[m];let S=40+(n.sensitive?.25:0);if(v.type===0)m||(i+="/"),i+=v.value.replace(Nm,"\\$&"),S+=40;else if(v.type===1){const{value:x,repeatable:L,optional:G,regexp:K}=v;o.push({name:x,repeatable:L,optional:G});const B=K||nl;if(B!==nl){S+=10;try{new RegExp(`(${B})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${x}" (${B}): `+z.message)}}let W=L?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;m||(W=G&&d.length<2?`(?:/${W})`:"/"+W),G&&(W+="?"),i+=W,S+=20,G&&(S+=-8),L&&(S+=-20),B===".*"&&(S+=-50)}p.push(S)}s.push(p)}if(n.strict&&n.end){const d=s.length-1;s[d][s[d].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function l(d){const p=d.match(a),m={};if(!p)return null;for(let v=1;v<p.length;v++){const S=p[v]||"",x=o[v-1];m[x.name]=S&&x.repeatable?S.split("/"):S}return m}function h(d){let p="",m=!1;for(const v of t){(!m||!p.endsWith("/"))&&(p+="/"),m=!1;for(const S of v)if(S.type===0)p+=S.value;else if(S.type===1){const{value:x,repeatable:L,optional:G}=S,K=x in d?d[x]:"";if(bt(K)&&!L)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const B=bt(K)?K.join("/"):K;if(!B)if(G)v.length<2&&(p.endsWith("/")?p=p.slice(0,-1):m=!0);else throw new Error(`Missing required param "${x}"`);p+=B}}return p||"/"}return{re:a,score:s,keys:o,parse:l,stringify:h}}function xm(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function kh(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const o=xm(s[n],i[n]);if(o)return o;n++}if(Math.abs(i.length-s.length)===1){if(sl(s))return 1;if(sl(i))return-1}return i.length-s.length}function sl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Mm={type:0,value:""},Lm=/[a-zA-Z0-9_]/;function Um(t){if(!t)return[[]];if(t==="/")return[[Mm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(S){throw new Error(`ERR (${n})/"${d}": ${S}`)}let n=0,s=n;const i=[];let o;function a(){o&&i.push(o),o=[]}let l=0,h,d="",p="";function m(){d&&(n===0?o.push({type:0,value:d}):n===1||n===2||n===3?(o.length>1&&(h==="*"||h==="+")&&e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:d,regexp:p,repeatable:h==="*"||h==="+",optional:h==="*"||h==="?"})):e("Invalid state to consume buffer"),d="")}function v(){d+=h}for(;l<t.length;){if(h=t[l++],h==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:h==="/"?(d&&m(),a()):h===":"?(m(),n=1):v();break;case 4:v(),n=s;break;case 1:h==="("?n=2:Lm.test(h)?v():(m(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&l--);break;case 2:h===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+h:n=3:p+=h;break;case 3:m(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&l--,p="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${d}"`),m(),a(),i}function Fm(t,e,n){const s=Dm(Um(t.path),n),i=ge(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function jm(t,e){const n=[],s=new Map;e=al({strict:!1,end:!0,sensitive:!1},e);function i(m){return s.get(m)}function o(m,v,S){const x=!S,L=rl(m);L.aliasOf=S&&S.record;const G=al(e,m),K=[L];if("alias"in m){const z=typeof m.alias=="string"?[m.alias]:m.alias;for(const re of z)K.push(rl(ge({},L,{components:S?S.record.components:L.components,path:re,aliasOf:S?S.record:L})))}let B,W;for(const z of K){const{path:re}=z;if(v&&re[0]!=="/"){const fe=v.record.path,b=fe[fe.length-1]==="/"?"":"/";z.path=v.record.path+(re&&b+re)}if(B=Fm(z,v,G),S?S.alias.push(B):(W=W||B,W!==B&&W.alias.push(B),x&&m.name&&!ol(B)&&a(m.name)),Nh(B)&&h(B),L.children){const fe=L.children;for(let b=0;b<fe.length;b++)o(fe[b],B,S&&S.children[b])}S=S||B}return W?()=>{a(W)}:Bs}function a(m){if(Ph(m)){const v=s.get(m);v&&(s.delete(m),n.splice(n.indexOf(v),1),v.children.forEach(a),v.alias.forEach(a))}else{const v=n.indexOf(m);v>-1&&(n.splice(v,1),m.record.name&&s.delete(m.record.name),m.children.forEach(a),m.alias.forEach(a))}}function l(){return n}function h(m){const v=Bm(m,n);n.splice(v,0,m),m.record.name&&!ol(m)&&s.set(m.record.name,m)}function d(m,v){let S,x={},L,G;if("name"in m&&m.name){if(S=s.get(m.name),!S)throw fs(1,{location:m});G=S.record.name,x=ge(il(v.params,S.keys.filter(W=>!W.optional).concat(S.parent?S.parent.keys.filter(W=>W.optional):[]).map(W=>W.name)),m.params&&il(m.params,S.keys.map(W=>W.name))),L=S.stringify(x)}else if(m.path!=null)L=m.path,S=n.find(W=>W.re.test(L)),S&&(x=S.parse(L),G=S.record.name);else{if(S=v.name?s.get(v.name):n.find(W=>W.re.test(v.path)),!S)throw fs(1,{location:m,currentLocation:v});G=S.record.name,x=ge({},v.params,m.params),L=S.stringify(x)}const K=[];let B=S;for(;B;)K.unshift(B.record),B=B.parent;return{name:G,path:L,params:x,matched:K,meta:$m(K)}}t.forEach(m=>o(m));function p(){n.length=0,s.clear()}return{addRoute:o,resolve:d,removeRoute:a,clearRoutes:p,getRoutes:l,getRecordMatcher:i}}function il(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function rl(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Vm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Vm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function ol(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $m(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function al(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Bm(t,e){let n=0,s=e.length;for(;n!==s;){const o=n+s>>1;kh(t,e[o])<0?s=o:n=o+1}const i=Hm(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function Hm(t){let e=t;for(;e=e.parent;)if(Nh(e)&&kh(t,e)===0)return e}function Nh({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Wm(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const o=s[i].replace(Eh," "),a=o.indexOf("="),l=ti(a<0?o:o.slice(0,a)),h=a<0?null:ti(o.slice(a+1));if(l in e){let d=e[l];bt(d)||(d=e[l]=[d]),d.push(h)}else e[l]=h}return e}function cl(t){let e="";for(let n in t){const s=t[n];if(n=um(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(bt(s)?s.map(o=>o&&Po(o)):[s&&Po(s)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function zm(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=bt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Gm=Symbol(""),ll=Symbol(""),Ir=Symbol(""),Dh=Symbol(""),ko=Symbol("");function Ns(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function hn(t,e,n,s,i,o=a=>a()){const a=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,h)=>{const d=v=>{v===!1?h(fs(4,{from:n,to:e})):v instanceof Error?h(v):Om(v)?h(fs(2,{from:e,to:v})):(a&&s.enterCallbacks[i]===a&&typeof v=="function"&&a.push(v),l())},p=o(()=>t.call(s&&s.instances[i],e,n,d));let m=Promise.resolve(p);t.length<3&&(m=m.then(d)),m.catch(v=>h(v))})}function io(t,e,n,s,i=o=>o()){const o=[];for(const a of t)for(const l in a.components){let h=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(Ih(h)){const p=(h.__vccOpts||h)[e];p&&o.push(hn(p,n,s,a,l,i))}else{let d=h();o.push(()=>d.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const m=Zg(p)?p.default:p;a.mods[l]=p,a.components[l]=m;const S=(m.__vccOpts||m)[e];return S&&hn(S,n,s,a,l,i)()}))}}return o}function ul(t){const e=xt(Ir),n=xt(Dh),s=ft(()=>{const h=Mn(t.to);return e.resolve(h)}),i=ft(()=>{const{matched:h}=s.value,{length:d}=h,p=h[d-1],m=n.matched;if(!p||!m.length)return-1;const v=m.findIndex(hs.bind(null,p));if(v>-1)return v;const S=hl(h[d-2]);return d>1&&hl(p)===S&&m[m.length-1].path!==S?m.findIndex(hs.bind(null,h[d-2])):v}),o=ft(()=>i.value>-1&&Ym(n.params,s.value.params)),a=ft(()=>i.value>-1&&i.value===n.matched.length-1&&Ch(n.params,s.value.params));function l(h={}){if(Xm(h)){const d=e[Mn(t.replace)?"replace":"push"](Mn(t.to)).catch(Bs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:s,href:ft(()=>s.value.href),isActive:o,isExactActive:a,navigate:l}}function qm(t){return t.length===1?t[0]:t}const Km=qu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ul,setup(t,{slots:e}){const n=pr(ul(t)),{options:s}=xt(Ir),i=ft(()=>({[fl(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[fl(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&qm(e.default(n));return t.custom?o:vh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),Jm=Km;function Xm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ym(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!bt(i)||i.length!==s.length||s.some((o,a)=>o!==i[a]))return!1}return!0}function hl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fl=(t,e,n)=>t??e??n,Qm=qu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=xt(ko),i=ft(()=>t.route||s.value),o=xt(ll,0),a=ft(()=>{let d=Mn(o);const{matched:p}=i.value;let m;for(;(m=p[d])&&!m.components;)d++;return d}),l=ft(()=>i.value.matched[a.value]);Mi(ll,ft(()=>a.value+1)),Mi(Gm,l),Mi(ko,i);const h=zi();return Li(()=>[h.value,l.value,t.name],([d,p,m],[v,S,x])=>{p&&(p.instances[m]=d,S&&S!==p&&d&&d===v&&(p.leaveGuards.size||(p.leaveGuards=S.leaveGuards),p.updateGuards.size||(p.updateGuards=S.updateGuards))),d&&p&&(!S||!hs(p,S)||!v)&&(p.enterCallbacks[m]||[]).forEach(L=>L(d))},{flush:"post"}),()=>{const d=i.value,p=t.name,m=l.value,v=m&&m.components[p];if(!v)return dl(n.default,{Component:v,route:d});const S=m.props[p],x=S?S===!0?d.params:typeof S=="function"?S(d):S:null,G=vh(v,ge({},x,e,{onVnodeUnmounted:K=>{K.component.isUnmounted&&(m.instances[p]=null)},ref:h}));return dl(n.default,{Component:G,route:d})||G}}});function dl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Zm=Qm;function e_(t){const e=jm(t.routes,t),n=t.parseQuery||Wm,s=t.stringifyQuery||cl,i=t.history,o=Ns(),a=Ns(),l=Ns(),h=cp(an);let d=an;es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=no.bind(null,O=>""+O),m=no.bind(null,fm),v=no.bind(null,ti);function S(O,q){let H,J;return Ph(O)?(H=e.getRecordMatcher(O),J=q):J=O,e.addRoute(J,H)}function x(O){const q=e.getRecordMatcher(O);q&&e.removeRoute(q)}function L(){return e.getRoutes().map(O=>O.record)}function G(O){return!!e.getRecordMatcher(O)}function K(O,q){if(q=ge({},q||h.value),typeof O=="string"){const A=so(n,O,q.path),k=e.resolve({path:A.path},q),D=i.createHref(A.fullPath);return ge(A,k,{params:v(k.params),hash:ti(A.hash),redirectedFrom:void 0,href:D})}let H;if(O.path!=null)H=ge({},O,{path:so(n,O.path,q.path).path});else{const A=ge({},O.params);for(const k in A)A[k]==null&&delete A[k];H=ge({},O,{params:m(A)}),q.params=m(q.params)}const J=e.resolve(H,q),de=O.hash||"";J.params=p(v(J.params));const g=gm(s,ge({},O,{hash:lm(de),path:J.path})),y=i.createHref(g);return ge({fullPath:g,hash:de,query:s===cl?zm(O.query):O.query||{}},J,{redirectedFrom:void 0,href:y})}function B(O){return typeof O=="string"?so(n,O,h.value.path):ge({},O)}function W(O,q){if(d!==O)return fs(8,{from:q,to:O})}function z(O){return b(O)}function re(O){return z(ge(B(O),{replace:!0}))}function fe(O){const q=O.matched[O.matched.length-1];if(q&&q.redirect){const{redirect:H}=q;let J=typeof H=="function"?H(O):H;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=B(J):{path:J},J.params={}),ge({query:O.query,hash:O.hash,params:J.path!=null?{}:O.params},J)}}function b(O,q){const H=d=K(O),J=h.value,de=O.state,g=O.force,y=O.replace===!0,A=fe(H);if(A)return b(ge(B(A),{state:typeof A=="object"?ge({},de,A.state):de,force:g,replace:y}),q||H);const k=H;k.redirectedFrom=q;let D;return!g&&mm(s,J,H)&&(D=fs(16,{to:k,from:J}),st(J,J,!0,!1)),(D?Promise.resolve(D):E(k,J)).catch(N=>Bt(N)?Bt(N,2)?N:lt(N):ie(N,k,J)).then(N=>{if(N){if(Bt(N,2))return b(ge({replace:y},B(N.to),{state:typeof N.to=="object"?ge({},de,N.to.state):de,force:g}),q||k)}else N=C(k,J,!0,y,de);return T(k,J,N),N})}function _(O,q){const H=W(O,q);return H?Promise.reject(H):Promise.resolve()}function I(O){const q=tn.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(O):O()}function E(O,q){let H;const[J,de,g]=t_(O,q);H=io(J.reverse(),"beforeRouteLeave",O,q);for(const A of J)A.leaveGuards.forEach(k=>{H.push(hn(k,O,q))});const y=_.bind(null,O,q);return H.push(y),Je(H).then(()=>{H=[];for(const A of o.list())H.push(hn(A,O,q));return H.push(y),Je(H)}).then(()=>{H=io(de,"beforeRouteUpdate",O,q);for(const A of de)A.updateGuards.forEach(k=>{H.push(hn(k,O,q))});return H.push(y),Je(H)}).then(()=>{H=[];for(const A of g)if(A.beforeEnter)if(bt(A.beforeEnter))for(const k of A.beforeEnter)H.push(hn(k,O,q));else H.push(hn(A.beforeEnter,O,q));return H.push(y),Je(H)}).then(()=>(O.matched.forEach(A=>A.enterCallbacks={}),H=io(g,"beforeRouteEnter",O,q,I),H.push(y),Je(H))).then(()=>{H=[];for(const A of a.list())H.push(hn(A,O,q));return H.push(y),Je(H)}).catch(A=>Bt(A,8)?A:Promise.reject(A))}function T(O,q,H){l.list().forEach(J=>I(()=>J(O,q,H)))}function C(O,q,H,J,de){const g=W(O,q);if(g)return g;const y=q===an,A=es?history.state:{};H&&(J||y?i.replace(O.fullPath,ge({scroll:y&&A&&A.scroll},de)):i.push(O.fullPath,de)),h.value=O,st(O,q,H,y),lt()}let w;function Be(){w||(w=i.listen((O,q,H)=>{if(!St.listening)return;const J=K(O),de=fe(J);if(de){b(ge(de,{replace:!0,force:!0}),J).catch(Bs);return}d=J;const g=h.value;es&&Tm(Zc(g.fullPath,H.delta),wr()),E(J,g).catch(y=>Bt(y,12)?y:Bt(y,2)?(b(ge(B(y.to),{force:!0}),J).then(A=>{Bt(A,20)&&!H.delta&&H.type===ni.pop&&i.go(-1,!1)}).catch(Bs),Promise.reject()):(H.delta&&i.go(-H.delta,!1),ie(y,J,g))).then(y=>{y=y||C(J,g,!1),y&&(H.delta&&!Bt(y,8)?i.go(-H.delta,!1):H.type===ni.pop&&Bt(y,20)&&i.go(-1,!1)),T(J,g,y)}).catch(Bs)}))}let nt=Ns(),Ce=Ns(),oe;function ie(O,q,H){lt(O);const J=Ce.list();return J.length?J.forEach(de=>de(O,q,H)):console.error(O),Promise.reject(O)}function Qe(){return oe&&h.value!==an?Promise.resolve():new Promise((O,q)=>{nt.add([O,q])})}function lt(O){return oe||(oe=!O,Be(),nt.list().forEach(([q,H])=>O?H(O):q()),nt.reset()),O}function st(O,q,H,J){const{scrollBehavior:de}=t;if(!es||!de)return Promise.resolve();const g=!H&&Sm(Zc(O.fullPath,0))||(J||!H)&&history.state&&history.state.scroll||null;return Bu().then(()=>de(O,q,g)).then(y=>y&&Em(y)).catch(y=>ie(y,O,q))}const Ee=O=>i.go(O);let Te;const tn=new Set,St={currentRoute:h,listening:!0,addRoute:S,removeRoute:x,clearRoutes:e.clearRoutes,hasRoute:G,getRoutes:L,resolve:K,options:t,push:z,replace:re,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:o.add,beforeResolve:a.add,afterEach:l.add,onError:Ce.add,isReady:Qe,install(O){const q=this;O.component("RouterLink",Jm),O.component("RouterView",Zm),O.config.globalProperties.$router=q,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Mn(h)}),es&&!Te&&h.value===an&&(Te=!0,z(i.location).catch(de=>{}));const H={};for(const de in an)Object.defineProperty(H,de,{get:()=>h.value[de],enumerable:!0});O.provide(Ir,q),O.provide(Dh,Uu(H)),O.provide(ko,h);const J=O.unmount;tn.add(O),O.unmount=function(){tn.delete(O),tn.size<1&&(d=an,w&&w(),w=null,h.value=an,Te=!1,oe=!1),J()}}};function Je(O){return O.reduce((q,H)=>q.then(()=>I(H)),Promise.resolve())}return St}function t_(t,e){const n=[],s=[],i=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const l=e.matched[a];l&&(t.matched.find(d=>hs(d,l))?s.push(l):n.push(l));const h=t.matched[a];h&&(e.matched.find(d=>hs(d,h))||i.push(h))}return[n,s,i]}function br(){return xt(Ir)}const n_=()=>{};var pl={};/**
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
 */const xh=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},s_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],a=t[n++],l=t[n++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const o=t[n++],a=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Mh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const o=t[i],a=i+1<t.length,l=a?t[i+1]:0,h=i+2<t.length,d=h?t[i+2]:0,p=o>>2,m=(o&3)<<4|l>>4;let v=(l&15)<<2|d>>6,S=d&63;h||(S=64,a||(v=64)),s.push(n[p],n[m],n[v],n[S])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||l==null||d==null||m==null)throw new i_;const v=o<<2|l>>4;if(s.push(v),d!==64){const S=l<<4&240|d>>2;if(s.push(S),m!==64){const x=d<<6&192|m;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class i_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r_=function(t){const e=xh(t);return Mh.encodeByteArray(e,!0)},Qi=function(t){return r_(t).replace(/\./g,"")},Lh=function(t){try{return Mh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function o_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const a_=()=>o_().__FIREBASE_DEFAULTS__,c_=()=>{if(typeof process>"u"||typeof pl>"u")return;const t=pl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},l_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lh(t[1]);return e&&JSON.parse(e)},la=()=>{try{return n_()||a_()||c_()||l_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Uh=t=>{var e,n;return(n=(e=la())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},u_=t=>{const e=Uh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Fh=()=>{var t;return(t=la())===null||t===void 0?void 0:t.config},jh=t=>{var e;return(e=la())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class h_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ci(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vh(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function f_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Qi(JSON.stringify(n)),Qi(JSON.stringify(a)),""].join(".")}const Ws={};function d_(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ws))Ws[e]?t.emulator.push(e):t.prod.push(e);return t}function p_(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let gl=!1;function $h(t,e){if(typeof window>"u"||typeof document>"u"||!ci(window.location.host)||Ws[t]===e||Ws[t]||gl)return;Ws[t]=e;function n(v){return`__firebase__banner__${v}`}const s="__firebase__banner",o=d_().prod.length>0;function a(){const v=document.getElementById(s);v&&v.remove()}function l(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function h(v,S){v.setAttribute("width","24"),v.setAttribute("id",S),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function d(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{gl=!0,a()},v}function p(v,S){v.setAttribute("id",S),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function m(){const v=p_(s),S=n("text"),x=document.getElementById(S)||document.createElement("span"),L=n("learnmore"),G=document.getElementById(L)||document.createElement("a"),K=n("preprendIcon"),B=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const W=v.element;l(W),p(G,L);const z=d();h(B,K),W.append(B,x,G,z),document.body.appendChild(W)}o?(x.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function g_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function m_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function __(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function y_(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Hh(){try{return typeof indexedDB=="object"}catch{return!1}}function Wh(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function v_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const w_="FirebaseError";class Tt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=w_,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zn.prototype.create)}}class zn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?I_(o,s):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Tt(i,l,s)}}function I_(t,e){return t.replace(b_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const b_=/\{\$([^}]+)}/g;function E_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const o=t[i],a=e[i];if(ml(o)&&ml(a)){if(!wn(o,a))return!1}else if(o!==a)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ml(t){return t!==null&&typeof t=="object"}/**
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
 */function li(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function T_(t,e){const n=new S_(t,e);return n.subscribe.bind(n)}class S_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");A_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ro),i.error===void 0&&(i.error=ro),i.complete===void 0&&(i.complete=ro);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function A_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ro(){}/**
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
 */const C_=1e3,R_=2,P_=4*60*60*1e3,O_=.5;function _l(t,e=C_,n=R_){const s=e*Math.pow(n,t),i=Math.round(O_*s*(Math.random()-.5)*2);return Math.min(P_,s+i)}/**
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
 */function bn(t){return t&&t._delegate?t._delegate:t}class Et{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pn="[DEFAULT]";/**
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
 */class k_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new h_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e?.identifier),i=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(D_(e))try{this.getOrInitializeService({instanceIdentifier:Pn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});s.resolve(o)}catch{}}}}clearInstance(e=Pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pn){return this.instances.has(e)}getOptions(e=Pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);s===l&&a.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),o=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:N_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Pn){return this.component?this.component.multipleInstances?e:Pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function N_(t){return t===Pn?void 0:t}function D_(t){return t.instantiationMode==="EAGER"}/**
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
 */class x_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new k_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const M_={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},L_=ye.INFO,U_={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},F_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=U_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Er{constructor(e){this.name=e,this._logLevel=L_,this._logHandler=F_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?M_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const j_=(t,e)=>e.some(n=>t instanceof n);let yl,vl;function V_(){return yl||(yl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $_(){return vl||(vl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zh=new WeakMap,No=new WeakMap,Gh=new WeakMap,oo=new WeakMap,ua=new WeakMap;function B_(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(_n(t.result)),i()},a=()=>{s(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&zh.set(n,t)}).catch(()=>{}),ua.set(e,t),e}function H_(t){if(No.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});No.set(t,e)}let Do={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return No.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function W_(t){Do=t(Do)}function z_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ao(this),e,...n);return Gh.set(s,e.sort?e.sort():[e]),_n(s)}:$_().includes(t)?function(...e){return t.apply(ao(this),e),_n(zh.get(this))}:function(...e){return _n(t.apply(ao(this),e))}}function G_(t){return typeof t=="function"?z_(t):(t instanceof IDBTransaction&&H_(t),j_(t,V_())?new Proxy(t,Do):t)}function _n(t){if(t instanceof IDBRequest)return B_(t);if(oo.has(t))return oo.get(t);const e=G_(t);return e!==t&&(oo.set(t,e),ua.set(e,t)),e}const ao=t=>ua.get(t);function qh(t,e,{blocked:n,upgrade:s,blocking:i,terminated:o}={}){const a=indexedDB.open(t,e),l=_n(a);return s&&a.addEventListener("upgradeneeded",h=>{s(_n(a.result),h.oldVersion,h.newVersion,_n(a.transaction),h)}),n&&a.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const q_=["get","getKey","getAll","getAllKeys","count"],K_=["put","add","delete","clear"],co=new Map;function wl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(co.get(e))return co.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=K_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||q_.includes(n)))return;const o=async function(a,...l){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return s&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&h.done]))[0]};return co.set(e,o),o}W_(t=>({...t,get:(e,n,s)=>wl(e,n)||t.get(e,n,s),has:(e,n)=>!!wl(e,n)||t.has(e,n)}));/**
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
 */class J_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(X_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function X_(t){const e=t.getComponent();return e?.type==="VERSION"}const xo="@firebase/app",Il="0.13.2";/**
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
 */const Qt=new Er("@firebase/app"),Y_="@firebase/app-compat",Q_="@firebase/analytics-compat",Z_="@firebase/analytics",ey="@firebase/app-check-compat",ty="@firebase/app-check",ny="@firebase/auth",sy="@firebase/auth-compat",iy="@firebase/database",ry="@firebase/data-connect",oy="@firebase/database-compat",ay="@firebase/functions",cy="@firebase/functions-compat",ly="@firebase/installations",uy="@firebase/installations-compat",hy="@firebase/messaging",fy="@firebase/messaging-compat",dy="@firebase/performance",py="@firebase/performance-compat",gy="@firebase/remote-config",my="@firebase/remote-config-compat",_y="@firebase/storage",yy="@firebase/storage-compat",vy="@firebase/firestore",wy="@firebase/ai",Iy="@firebase/firestore-compat",by="firebase",Ey="11.10.0";/**
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
 */const Mo="[DEFAULT]",Ty={[xo]:"fire-core",[Y_]:"fire-core-compat",[Z_]:"fire-analytics",[Q_]:"fire-analytics-compat",[ty]:"fire-app-check",[ey]:"fire-app-check-compat",[ny]:"fire-auth",[sy]:"fire-auth-compat",[iy]:"fire-rtdb",[ry]:"fire-data-connect",[oy]:"fire-rtdb-compat",[ay]:"fire-fn",[cy]:"fire-fn-compat",[ly]:"fire-iid",[uy]:"fire-iid-compat",[hy]:"fire-fcm",[fy]:"fire-fcm-compat",[dy]:"fire-perf",[py]:"fire-perf-compat",[gy]:"fire-rc",[my]:"fire-rc-compat",[_y]:"fire-gcs",[yy]:"fire-gcs-compat",[vy]:"fire-fst",[Iy]:"fire-fst-compat",[wy]:"fire-vertex","fire-js":"fire-js",[by]:"fire-js-all"};/**
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
 */const Zi=new Map,Sy=new Map,Lo=new Map;function bl(t,e){try{t.container.addComponent(e)}catch(n){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ut(t){const e=t.name;if(Lo.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;Lo.set(e,t);for(const n of Zi.values())bl(n,t);for(const n of Sy.values())bl(n,t);return!0}function Gn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Ay={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yn=new zn("app","Firebase",Ay);/**
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
 */class Cy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yn.create("app-deleted",{appName:this._name})}}/**
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
 */const gs=Ey;function Kh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Mo,automaticDataCollectionEnabled:!0},e),i=s.name;if(typeof i!="string"||!i)throw yn.create("bad-app-name",{appName:String(i)});if(n||(n=Fh()),!n)throw yn.create("no-options");const o=Zi.get(i);if(o){if(wn(n,o.options)&&wn(s,o.config))return o;throw yn.create("duplicate-app",{appName:i})}const a=new x_(i);for(const h of Lo.values())a.addComponent(h);const l=new Cy(n,s,a);return Zi.set(i,l),l}function ha(t=Mo){const e=Zi.get(t);if(!e&&t===Mo&&Fh())return Kh();if(!e)throw yn.create("no-app",{appName:t});return e}function at(t,e,n){var s;let i=(s=Ty[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(l.join(" "));return}Ut(new Et(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ry="firebase-heartbeat-database",Py=1,si="firebase-heartbeat-store";let lo=null;function Jh(){return lo||(lo=qh(Ry,Py,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(si)}catch(n){console.warn(n)}}}}).catch(t=>{throw yn.create("idb-open",{originalErrorMessage:t.message})})),lo}async function Oy(t){try{const n=(await Jh()).transaction(si),s=await n.objectStore(si).get(Xh(t));return await n.done,s}catch(e){if(e instanceof Tt)Qt.warn(e.message);else{const n=yn.create("idb-get",{originalErrorMessage:e?.message});Qt.warn(n.message)}}}async function El(t,e){try{const s=(await Jh()).transaction(si,"readwrite");await s.objectStore(si).put(e,Xh(t)),await s.done}catch(n){if(n instanceof Tt)Qt.warn(n.message);else{const s=yn.create("idb-set",{originalErrorMessage:n?.message});Qt.warn(s.message)}}}function Xh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ky=1024,Ny=30;class Dy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new My(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Tl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Ny){const a=Ly(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Qt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tl(),{heartbeatsToSend:s,unsentEntries:i}=xy(this._heartbeatsCache.heartbeats),o=Qi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Qt.warn(n),""}}}function Tl(){return new Date().toISOString().substring(0,10)}function xy(t,e=ky){const n=[];let s=t.slice();for(const i of t){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Sl(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class My{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hh()?Wh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Oy(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return El(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return El(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sl(t){return Qi(JSON.stringify({version:2,heartbeats:t})).length}function Ly(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function Uy(t){Ut(new Et("platform-logger",e=>new J_(e),"PRIVATE")),Ut(new Et("heartbeat",e=>new Dy(e),"PRIVATE")),at(xo,Il,t),at(xo,Il,"esm2017"),at("fire-js","")}Uy("");var Fy="firebase",jy="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */at(Fy,jy,"app");const Yh="@firebase/installations",fa="0.6.18";/**
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
 */const Qh=1e4,Zh=`w:${fa}`,ef="FIS_v2",Vy="https://firebaseinstallations.googleapis.com/v1",$y=60*60*1e3,By="installations",Hy="Installations";/**
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
 */const Wy={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Vn=new zn(By,Hy,Wy);function tf(t){return t instanceof Tt&&t.code.includes("request-failed")}/**
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
 */function nf({projectId:t}){return`${Vy}/projects/${t}/installations`}function sf(t){return{token:t.token,requestStatus:2,expiresIn:Gy(t.expiresIn),creationTime:Date.now()}}async function rf(t,e){const s=(await e.json()).error;return Vn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function of({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function zy(t,{refreshToken:e}){const n=of(t);return n.append("Authorization",qy(e)),n}async function af(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Gy(t){return Number(t.replace("s","000"))}function qy(t){return`${ef} ${t}`}/**
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
 */async function Ky({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=nf(t),i=of(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={fid:n,authVersion:ef,appId:t.appId,sdkVersion:Zh},l={method:"POST",headers:i,body:JSON.stringify(a)},h=await af(()=>fetch(s,l));if(h.ok){const d=await h.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:sf(d.authToken)}}else throw await rf("Create Installation",h)}/**
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
 */function cf(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Jy(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Xy=/^[cdef][\w-]{21}$/,Uo="";function Yy(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Qy(t);return Xy.test(n)?n:Uo}catch{return Uo}}function Qy(t){return Jy(t).substr(0,22)}/**
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
 */function Tr(t){return`${t.appName}!${t.appId}`}/**
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
 */const lf=new Map;function uf(t,e){const n=Tr(t);hf(n,e),Zy(n,e)}function hf(t,e){const n=lf.get(t);if(n)for(const s of n)s(e)}function Zy(t,e){const n=ev();n&&n.postMessage({key:t,fid:e}),tv()}let kn=null;function ev(){return!kn&&"BroadcastChannel"in self&&(kn=new BroadcastChannel("[Firebase] FID Change"),kn.onmessage=t=>{hf(t.data.key,t.data.fid)}),kn}function tv(){lf.size===0&&kn&&(kn.close(),kn=null)}/**
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
 */const nv="firebase-installations-database",sv=1,$n="firebase-installations-store";let uo=null;function da(){return uo||(uo=qh(nv,sv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($n)}}})),uo}async function er(t,e){const n=Tr(t),i=(await da()).transaction($n,"readwrite"),o=i.objectStore($n),a=await o.get(n);return await o.put(e,n),await i.done,(!a||a.fid!==e.fid)&&uf(t,e.fid),e}async function ff(t){const e=Tr(t),s=(await da()).transaction($n,"readwrite");await s.objectStore($n).delete(e),await s.done}async function Sr(t,e){const n=Tr(t),i=(await da()).transaction($n,"readwrite"),o=i.objectStore($n),a=await o.get(n),l=e(a);return l===void 0?await o.delete(n):await o.put(l,n),await i.done,l&&(!a||a.fid!==l.fid)&&uf(t,l.fid),l}/**
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
 */async function pa(t){let e;const n=await Sr(t.appConfig,s=>{const i=iv(s),o=rv(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===Uo?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function iv(t){const e=t||{fid:Yy(),registrationStatus:0};return df(e)}function rv(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Vn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=ov(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:av(t)}:{installationEntry:e}}async function ov(t,e){try{const n=await Ky(t,e);return er(t.appConfig,n)}catch(n){throw tf(n)&&n.customData.serverCode===409?await ff(t.appConfig):await er(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function av(t){let e=await Al(t.appConfig);for(;e.registrationStatus===1;)await cf(100),e=await Al(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await pa(t);return s||n}return e}function Al(t){return Sr(t,e=>{if(!e)throw Vn.create("installation-not-found");return df(e)})}function df(t){return cv(t)?{fid:t.fid,registrationStatus:0}:t}function cv(t){return t.registrationStatus===1&&t.registrationTime+Qh<Date.now()}/**
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
 */async function lv({appConfig:t,heartbeatServiceProvider:e},n){const s=uv(t,n),i=zy(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={installation:{sdkVersion:Zh,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},h=await af(()=>fetch(s,l));if(h.ok){const d=await h.json();return sf(d)}else throw await rf("Generate Auth Token",h)}function uv(t,{fid:e}){return`${nf(t)}/${e}/authTokens:generate`}/**
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
 */async function ga(t,e=!1){let n;const s=await Sr(t.appConfig,o=>{if(!pf(o))throw Vn.create("not-registered");const a=o.authToken;if(!e&&dv(a))return o;if(a.requestStatus===1)return n=hv(t,e),o;{if(!navigator.onLine)throw Vn.create("app-offline");const l=gv(o);return n=fv(t,l),l}});return n?await n:s.authToken}async function hv(t,e){let n=await Cl(t.appConfig);for(;n.authToken.requestStatus===1;)await cf(100),n=await Cl(t.appConfig);const s=n.authToken;return s.requestStatus===0?ga(t,e):s}function Cl(t){return Sr(t,e=>{if(!pf(e))throw Vn.create("not-registered");const n=e.authToken;return mv(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function fv(t,e){try{const n=await lv(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await er(t.appConfig,s),n}catch(n){if(tf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ff(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await er(t.appConfig,s)}throw n}}function pf(t){return t!==void 0&&t.registrationStatus===2}function dv(t){return t.requestStatus===2&&!pv(t)}function pv(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+$y}function gv(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function mv(t){return t.requestStatus===1&&t.requestTime+Qh<Date.now()}/**
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
 */async function _v(t){const e=t,{installationEntry:n,registrationPromise:s}=await pa(e);return s?s.catch(console.error):ga(e).catch(console.error),n.fid}/**
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
 */async function yv(t,e=!1){const n=t;return await vv(n),(await ga(n,e)).token}async function vv(t){const{registrationPromise:e}=await pa(t);e&&await e}/**
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
 */function wv(t){if(!t||!t.options)throw ho("App Configuration");if(!t.name)throw ho("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ho(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ho(t){return Vn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="installations",Iv="installations-internal",bv=t=>{const e=t.getProvider("app").getImmediate(),n=wv(e),s=Gn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Ev=t=>{const e=t.getProvider("app").getImmediate(),n=Gn(e,gf).getImmediate();return{getId:()=>_v(n),getToken:i=>yv(n,i)}};function Tv(){Ut(new Et(gf,bv,"PUBLIC")),Ut(new Et(Iv,Ev,"PRIVATE"))}Tv();at(Yh,fa);at(Yh,fa,"esm2017");/**
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
 */const tr="analytics",Sv="firebase_id",Av="origin",Cv=60*1e3,Rv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ma="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ye=new Er("@firebase/analytics");/**
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
 */const Pv={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},tt=new zn("analytics","Analytics",Pv);/**
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
 */function Ov(t){if(!t.startsWith(ma)){const e=tt.create("invalid-gtag-resource",{gtagURL:t});return Ye.warn(e.message),""}return t}function mf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function kv(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Nv(t,e){const n=kv("firebase-js-sdk-policy",{createScriptURL:Ov}),s=document.createElement("script"),i=`${ma}?l=${t}&id=${e}`;s.src=n?n?.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function Dv(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function xv(t,e,n,s,i,o){const a=s[i];try{if(a)await e[a];else{const h=(await mf(n)).find(d=>d.measurementId===i);h&&await e[h.appId]}}catch(l){Ye.error(l)}t("config",i,o)}async function Mv(t,e,n,s,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const l=await mf(n);for(const h of a){const d=l.find(m=>m.measurementId===h),p=d&&e[d.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",s,i||{})}catch(o){Ye.error(o)}}function Lv(t,e,n,s){async function i(o,...a){try{if(o==="event"){const[l,h]=a;await Mv(t,e,n,l,h)}else if(o==="config"){const[l,h]=a;await xv(t,e,n,s,l,h)}else if(o==="consent"){const[l,h]=a;t("consent",l,h)}else if(o==="get"){const[l,h,d]=a;t("get",l,h,d)}else if(o==="set"){const[l]=a;t("set",l)}else t(o,...a)}catch(l){Ye.error(l)}}return i}function Uv(t,e,n,s,i){let o=function(...a){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Lv(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function Fv(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ma)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=30,Vv=1e3;class $v{constructor(e={},n=Vv){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const _f=new $v;function Bv(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Hv(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:Bv(s)},o=Rv.replace("{app-id}",n),a=await fetch(o,i);if(a.status!==200&&a.status!==304){let l="";try{const h=await a.json();!((e=h.error)===null||e===void 0)&&e.message&&(l=h.error.message)}catch{}throw tt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function Wv(t,e=_f,n){const{appId:s,apiKey:i,measurementId:o}=t.options;if(!s)throw tt.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:s};throw tt.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new qv;return setTimeout(async()=>{l.abort()},Cv),yf({appId:s,apiKey:i,measurementId:o},a,l,e)}async function yf(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=_f){var o;const{appId:a,measurementId:l}=t;try{await zv(s,e)}catch(h){if(l)return Ye.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h?.message}]`),{appId:a,measurementId:l};throw h}try{const h=await Hv(t);return i.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!Gv(d)){if(i.deleteThrottleMetadata(a),l)return Ye.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d?.message}]`),{appId:a,measurementId:l};throw h}const p=Number((o=d?.customData)===null||o===void 0?void 0:o.httpStatus)===503?_l(n,i.intervalMillis,jv):_l(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return i.setThrottleMetadata(a,m),Ye.debug(`Calling attemptFetch again in ${p} millis`),yf(t,m,s,i)}}function zv(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),s(tt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Gv(t){if(!(t instanceof Tt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class qv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Kv(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const o=await e,a=Object.assign(Object.assign({},s),{send_to:o});t("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv(){if(Hh())try{await Wh()}catch(t){return Ye.warn(tt.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Ye.warn(tt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Xv(t,e,n,s,i,o,a){var l;const h=Wv(t);h.then(S=>{n[S.measurementId]=S.appId,t.options.measurementId&&S.measurementId!==t.options.measurementId&&Ye.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>Ye.error(S)),e.push(h);const d=Jv().then(S=>{if(S)return s.getId()}),[p,m]=await Promise.all([h,d]);Fv(o)||Nv(o,p.measurementId),i("js",new Date);const v=(l=a?.config)!==null&&l!==void 0?l:{};return v[Av]="firebase",v.update=!0,m!=null&&(v[Sv]=m),i("config",p.measurementId,v),p.measurementId}/**
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
 */class Yv{constructor(e){this.app=e}_delete(){return delete zs[this.app.options.appId],Promise.resolve()}}let zs={},Rl=[];const Pl={};let fo="dataLayer",Qv="gtag",Ol,vf,kl=!1;function Zv(){const t=[];if(Bh()&&t.push("This is a browser extension environment."),v_()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=tt.create("invalid-analytics-context",{errorInfo:e});Ye.warn(n.message)}}function e0(t,e,n){Zv();const s=t.options.appId;if(!s)throw tt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ye.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw tt.create("no-api-key");if(zs[s]!=null)throw tt.create("already-exists",{id:s});if(!kl){Dv(fo);const{wrappedGtag:o,gtagCore:a}=Uv(zs,Rl,Pl,fo,Qv);vf=o,Ol=a,kl=!0}return zs[s]=Xv(t,Rl,Pl,e,Ol,fo,n),new Yv(t)}function t0(t=ha()){t=bn(t);const e=Gn(t,tr);return e.isInitialized()?e.getImmediate():n0(t)}function n0(t,e={}){const n=Gn(t,tr);if(n.isInitialized()){const i=n.getImmediate();if(wn(e,n.getOptions()))return i;throw tt.create("already-initialized")}return n.initialize({options:e})}function s0(t,e,n,s){t=bn(t),Kv(vf,zs[t.app.options.appId],e,n,s).catch(i=>Ye.error(i))}const Nl="@firebase/analytics",Dl="0.10.17";function i0(){Ut(new Et(tr,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return e0(s,i,n)},"PUBLIC")),Ut(new Et("analytics-internal",t,"PRIVATE")),at(Nl,Dl),at(Nl,Dl,"esm2017");function t(e){try{const n=e.getProvider(tr).getImmediate();return{logEvent:(s,i,o)=>s0(n,s,i,o)}}catch(n){throw tt.create("interop-component-reg-failed",{reason:n})}}}i0();function _a(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function wf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const r0=wf,If=new zn("auth","Firebase",wf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new Er("@firebase/auth");function o0(t,...e){nr.logLevel<=ye.WARN&&nr.warn(`Auth (${gs}): ${t}`,...e)}function Vi(t,...e){nr.logLevel<=ye.ERROR&&nr.error(`Auth (${gs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,...e){throw va(t,...e)}function wt(t,...e){return va(t,...e)}function ya(t,e,n){const s=Object.assign(Object.assign({},r0()),{[e]:n});return new zn("auth","Firebase",s).create(e,{appName:t.name})}function Ln(t){return ya(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function a0(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ft(t,"argument-error"),ya(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function va(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return If.create(t,...e)}function ee(t,e,...n){if(!t)throw va(e,...n)}function Kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vi(e),new Error(e)}function Zt(t,e){t||Kt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function c0(){return xl()==="http:"||xl()==="https:"}function xl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(c0()||Bh()||"connection"in navigator)?navigator.onLine:!0}function u0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zt(n>e,"Short delay should be less than long delay!"),this.isMobile=g_()||__()}get(){return l0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t,e){Zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],d0=new ui(3e4,6e4);function Ia(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ms(t,e,n,s,i={}){return Ef(t,i,async()=>{let o={},a={};s&&(e==="GET"?a=s:o={body:JSON.stringify(s)});const l=li(Object.assign({key:t.config.apiKey},a)).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:h},o);return m_()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&ci(t.emulatorConfig.host)&&(d.credentials="include"),bf.fetch()(await Tf(t,t.config.apiHost,n,l),d)})}async function Ef(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},h0),e);try{const i=new g0(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Ni(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[h,d]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ni(t,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Ni(t,"email-already-in-use",a);if(h==="USER_DISABLED")throw Ni(t,"user-disabled",a);const p=s[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ya(t,p,d);Ft(t,p)}}catch(i){if(i instanceof Tt)throw i;Ft(t,"network-request-failed",{message:String(i)})}}async function p0(t,e,n,s,i={}){const o=await ms(t,e,n,s,i);return"mfaPendingCredential"in o&&Ft(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function Tf(t,e,n,s){const i=`${e}${n}?${s}`,o=t,a=o.config.emulator?wa(t.config,i):`${t.config.apiScheme}://${i}`;return f0.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class g0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(wt(this.auth,"network-request-failed")),d0.get())})}}function Ni(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=wt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m0(t,e){return ms(t,"POST","/v1/accounts:delete",e)}async function sr(t,e){return ms(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _0(t,e=!1){const n=bn(t),s=await n.getIdToken(e),i=ba(s);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o?.sign_in_provider;return{claims:i,token:s,authTime:Gs(po(i.auth_time)),issuedAtTime:Gs(po(i.iat)),expirationTime:Gs(po(i.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function po(t){return Number(t)*1e3}function ba(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Vi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Lh(n);return i?JSON.parse(i):(Vi("Failed to decode base64 JWT payload"),null)}catch(i){return Vi("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Ml(t){const e=ba(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Tt&&y0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function y0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gs(this.lastLoginAt),this.creationTime=Gs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ir(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ii(t,sr(n,{idToken:s}));ee(i?.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Sf(o.providerUserInfo):[],l=I0(t.providerData,a),h=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!l?.length,p=h?d:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new jo(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function w0(t){const e=bn(t);await ir(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function I0(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Sf(t){return t.map(e=>{var{providerId:n}=e,s=_a(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b0(t,e){const n=await Ef(t,{},async()=>{const s=li({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,a=await Tf(t,i,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:s};return t.emulatorConfig&&ci(t.emulatorConfig.host)&&(h.credentials="include"),bf.fetch()(a,h)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function E0(t,e){return ms(t,"POST","/v2/accounts:revokeToken",Ia(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ml(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Ml(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:o}=await b0(e,n);this.updateTokensAndExpiration(s,i,Number(o))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:o}=n,a=new rs;return s&&(ee(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),i&&(ee(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(ee(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rs,this.toJSON())}_performRefresh(){return Kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,o=_a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new v0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new jo(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await ii(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _0(this,e)}reload(){return w0(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ir(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dt(this.auth.app))return Promise.reject(Ln(this.auth));const e=await this.getIdToken();return await ii(this,m0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,o,a,l,h,d,p;const m=(s=n.displayName)!==null&&s!==void 0?s:void 0,v=(i=n.email)!==null&&i!==void 0?i:void 0,S=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,x=(a=n.photoURL)!==null&&a!==void 0?a:void 0,L=(l=n.tenantId)!==null&&l!==void 0?l:void 0,G=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,K=(d=n.createdAt)!==null&&d!==void 0?d:void 0,B=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:W,emailVerified:z,isAnonymous:re,providerData:fe,stsTokenManager:b}=n;ee(W&&b,e,"internal-error");const _=rs.fromJSON(this.name,b);ee(typeof W=="string",e,"internal-error"),cn(m,e.name),cn(v,e.name),ee(typeof z=="boolean",e,"internal-error"),ee(typeof re=="boolean",e,"internal-error"),cn(S,e.name),cn(x,e.name),cn(L,e.name),cn(G,e.name),cn(K,e.name),cn(B,e.name);const I=new mt({uid:W,auth:e,email:v,emailVerified:z,displayName:m,isAnonymous:re,photoURL:x,phoneNumber:S,tenantId:L,stsTokenManager:_,createdAt:K,lastLoginAt:B});return fe&&Array.isArray(fe)&&(I.providerData=fe.map(E=>Object.assign({},E))),G&&(I._redirectEventId=G),I}static async _fromIdTokenResponse(e,n,s=!1){const i=new rs;i.updateFromServerResponse(n);const o=new mt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ir(o),o}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];ee(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Sf(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!o?.length,l=new rs;l.updateFromIdToken(s);const h=new mt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new jo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!o?.length};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=new Map;function Jt(t){Zt(t instanceof Function,"Expected a class definition");let e=Ll.get(t);return e?(Zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ll.set(t,e),e)}/**
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
 */class Af{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Af.type="NONE";const Ul=Af;/**
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
 */function $i(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:o}=this.auth;this.fullUserKey=$i(this.userKey,i.apiKey,o),this.fullPersistenceKey=$i("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await sr(this.auth,{idToken:e}).catch(()=>{});return n?mt._fromGetAccountInfoResponse(this.auth,n,e):null}return mt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new os(Jt(Ul),e,s);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||Jt(Ul);const a=$i(s,e.config.apiKey,e.name);let l=null;for(const d of n)try{const p=await d._get(a);if(p){let m;if(typeof p=="string"){const v=await sr(e,{idToken:p}).catch(()=>{});if(!v)break;m=await mt._fromGetAccountInfoResponse(e,v,p)}else m=mt._fromJSON(e,p);d!==o&&(l=m),o=d;break}}catch{}const h=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new os(o,e,s):(o=h[0],l&&await o._set(a,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new os(o,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Of(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nf(e))return"Blackberry";if(Df(e))return"Webos";if(Rf(e))return"Safari";if((e.includes("chrome/")||Pf(e))&&!e.includes("edge/"))return"Chrome";if(kf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function Cf(t=Ke()){return/firefox\//i.test(t)}function Rf(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pf(t=Ke()){return/crios\//i.test(t)}function Of(t=Ke()){return/iemobile/i.test(t)}function kf(t=Ke()){return/android/i.test(t)}function Nf(t=Ke()){return/blackberry/i.test(t)}function Df(t=Ke()){return/webos/i.test(t)}function Ea(t=Ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function T0(t=Ke()){var e;return Ea(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function S0(){return y_()&&document.documentMode===10}function xf(t=Ke()){return Ea(t)||kf(t)||Df(t)||Nf(t)||/windows phone/i.test(t)||Of(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t,e=[]){let n;switch(t){case"Browser":n=Fl(Ke());break;case"Worker":n=`${Fl(Ke())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gs}/${s}`}/**
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
 */class A0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=o=>new Promise((a,l)=>{try{const h=e(o);a(h)}catch(h){l(h)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function C0(t,e={}){return ms(t,"GET","/v2/passwordPolicy",Ia(t,e))}/**
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
 */const R0=6;class P0{constructor(e){var n,s,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:R0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,o,a,l;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(s=h.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(l=h.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),h}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jl(this),this.idTokenSubscription=new jl(this),this.beforeStateQueue=new A0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=If,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jt(n)),this._initializationPromise=this.queue(async()=>{var s,i,o;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sr(this,{idToken:e}),s=await mt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(dt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i?._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===l)&&h?.user&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ir(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=u0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dt(this.app))return Promise.reject(Ln(this));const n=e?bn(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dt(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dt(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await C0(this),n=new P0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new zn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await E0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jt(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[Jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,s,i);return()=>{a=!0,h()}}else{const h=e.addObserver(n);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&o0(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Ar(t){return bn(t)}class jl{constructor(e){this.auth=e,this.observer=null,this.addObserver=T_(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function k0(t){Ta=t}function N0(t){return Ta.loadJS(t)}function D0(){return Ta.gapiScript}function x0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(t,e){const n=Gn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(wn(o,e??{}))return i;Ft(i,"already-initialized")}return n.initialize({options:e})}function L0(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Jt);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function U0(t,e,n){const s=Ar(t);ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,o=Lf(e),{host:a,port:l}=F0(e),h=l===null?"":`:${l}`,d={url:`${o}//${a}${h}/`},p=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ee(wn(d,s.config.emulator)&&wn(p,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=p,s.settings.appVerificationDisabledForTesting=!0,ci(a)?(Vh(`${o}//${a}${h}`),$h("Auth",!0)):j0()}function Lf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function F0(t){const e=Lf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const o=i[1];return{host:o,port:Vl(s.substr(o.length+1))}}else{const[o,a]=s.split(":");return{host:o,port:Vl(a)}}}function Vl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function j0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kt("not implemented")}_getIdTokenResponse(e){return Kt("not implemented")}_linkToIdToken(e,n){return Kt("not implemented")}_getReauthenticationResolver(e){return Kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e){return p0(t,"POST","/v1/accounts:signInWithIdp",Ia(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0="http://localhost";class Bn extends Uf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,o=_a(n,["providerId","signInMethod"]);if(!s||!i)return null;const a=new Bn(s,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,as(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:V0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=li(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hi extends Sa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends hi{constructor(){super("facebook.com")}static credential(e){return Bn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends hi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Bn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Gt.credential(n,s)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends hi{constructor(){super("github.com")}static credential(e){return Bn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends hi{constructor(){super("twitter.com")}static credential(e,n){return Bn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return gn.credential(n,s)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const o=await mt._fromIdTokenResponse(e,s,i),a=$l(s);return new ds({user:o,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=$l(s);return new ds({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function $l(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Tt{constructor(e,n,s,i){var o;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,rr.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new rr(e,n,s,i)}}function Ff(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?rr._fromErrorAndOperation(t,o,e,s):o})}async function $0(t,e,n=!1){const s=await ii(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ds._forOperation(t,"link",s)}/**
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
 */async function B0(t,e,n=!1){const{auth:s}=t;if(dt(s.app))return Promise.reject(Ln(s));const i="reauthenticate";try{const o=await ii(t,Ff(s,i,e,t),n);ee(o.idToken,s,"internal-error");const a=ba(o.idToken);ee(a,s,"internal-error");const{sub:l}=a;return ee(t.uid===l,s,"user-mismatch"),ds._forOperation(t,i,o)}catch(o){throw o?.code==="auth/user-not-found"&&Ft(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H0(t,e,n=!1){if(dt(t.app))return Promise.reject(Ln(t));const s="signIn",i=await Ff(t,s,e),o=await ds._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(o.user),o}function W0(t,e,n,s){return bn(t).onIdTokenChanged(e,n,s)}function z0(t,e,n){return bn(t).beforeAuthStateChanged(e,n)}const or="__sak";/**
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
 */class jf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(or,"1"),this.storage.removeItem(or),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=1e3,q0=10;class Vf extends jf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},o=this.storage.getItem(s);S0()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,q0):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},G0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vf.type="LOCAL";const K0=Vf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f extends jf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$f.type="SESSION";const Bf=$f;/**
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
 */function J0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Cr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const l=Array.from(a).map(async d=>d(n.origin,o)),h=await J0(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class X0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,h)=>{const d=Aa("",20);i.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},s);a={messageChannel:i,onMessage(m){const v=m;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(v.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return window}function Y0(t){Mt().location.href=t}/**
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
 */function Hf(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function Q0(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z0(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ew(){return Hf()?self:null}/**
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
 */const Wf="firebaseLocalStorageDb",tw=1,ar="firebaseLocalStorage",zf="fbase_key";class fi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rr(t,e){return t.transaction([ar],e?"readwrite":"readonly").objectStore(ar)}function nw(){const t=indexedDB.deleteDatabase(Wf);return new fi(t).toPromise()}function Vo(){const t=indexedDB.open(Wf,tw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ar,{keyPath:zf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ar)?e(s):(s.close(),await nw(),e(await Vo()))})})}async function Bl(t,e,n){const s=Rr(t,!0).put({[zf]:e,value:n});return new fi(s).toPromise()}async function sw(t,e){const n=Rr(t,!1).get(e),s=await new fi(n).toPromise();return s===void 0?null:s.value}function Hl(t,e){const n=Rr(t,!0).delete(e);return new fi(n).toPromise()}const iw=800,rw=3;class Gf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>rw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cr._getInstance(ew()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Q0(),!this.activeServiceWorker)return;this.sender=new X0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Z0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vo();return await Bl(e,or,"1"),await Hl(e,or),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Bl(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>sw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Rr(i,!1).getAll();return new fi(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Gf.type="LOCAL";const ow=Gf;new ui(3e4,6e4);/**
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
 */function qf(t,e){return e?Jt(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ca extends Uf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aw(t){return H0(t.auth,new Ca(t),t.bypassAuthState)}function cw(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),B0(n,new Ca(t),t.bypassAuthState)}async function lw(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),$0(n,new Ca(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n,s,i,o=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:n,sessionId:s,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aw;case"linkViaPopup":case"linkViaRedirect":return lw;case"reauthViaPopup":case"reauthViaRedirect":return cw;default:Ft(this.auth,"internal-error")}}resolve(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=new ui(2e3,1e4);async function hw(t,e,n){if(dt(t.app))return Promise.reject(wt(t,"operation-not-supported-in-this-environment"));const s=Ar(t);a0(t,e,Sa);const i=qf(s,n);return new Nn(s,"signInViaPopup",e,i).executeNotNull()}class Nn extends Kf{constructor(e,n,s,i,o){super(e,n,i,o),this.provider=s,this.authWindow=null,this.pollId=null,Nn.currentPopupAction&&Nn.currentPopupAction.cancel(),Nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const e=Aa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uw.get())};e()}}Nn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="pendingRedirect",Bi=new Map;class dw extends Kf{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Bi.get(this.auth._key());if(!e){try{const s=await pw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Bi.set(this.auth._key(),e)}return this.bypassAuthState||Bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pw(t,e){const n=_w(e),s=mw(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function gw(t,e){Bi.set(t._key(),e)}function mw(t){return Jt(t._redirectPersistence)}function _w(t){return $i(fw,t.config.apiKey,t.name)}async function yw(t,e,n=!1){if(dt(t.app))return Promise.reject(Ln(t));const s=Ar(t),i=qf(s,e),a=await new dw(s,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=10*60*1e3;class ww{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Iw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Jf(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(wt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wl(e))}saveEventToCache(e){this.cachedEventUids.add(Wl(e)),this.lastProcessedEventTime=Date.now()}}function Wl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jf({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Iw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jf(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bw(t,e={}){return ms(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tw=/^https?/;async function Sw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bw(t);for(const n of e)try{if(Aw(n))return}catch{}Ft(t,"unauthorized-domain")}function Aw(t){const e=Fo(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!Tw.test(n))return!1;if(Ew.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Cw=new ui(3e4,6e4);function zl(){const t=Mt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Rw(t){return new Promise((e,n)=>{var s,i,o;function a(){zl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zl(),n(wt(t,"network-request-failed"))},timeout:Cw.get()})}if(!((i=(s=Mt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Mt().gapi)===null||o===void 0)&&o.load)a();else{const l=x0("iframefcb");return Mt()[l]=()=>{gapi.load?a():n(wt(t,"network-request-failed"))},N0(`${D0()}?onload=${l}`).catch(h=>n(h))}}).catch(e=>{throw Hi=null,e})}let Hi=null;function Pw(t){return Hi=Hi||Rw(t),Hi}/**
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
 */const Ow=new ui(5e3,15e3),kw="__/auth/iframe",Nw="emulator/auth/iframe",Dw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mw(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wa(e,Nw):`https://${t.config.authDomain}/${kw}`,s={apiKey:e.apiKey,appName:t.name,v:gs},i=xw.get(t.config.apiHost);i&&(s.eid=i);const o=t._getFrameworks();return o.length&&(s.fw=o.join(",")),`${n}?${li(s).slice(1)}`}async function Lw(t){const e=await Pw(t),n=Mt().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:Mw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dw,dontclear:!0},s=>new Promise(async(i,o)=>{await s.restyle({setHideOnLeave:!1});const a=wt(t,"network-request-failed"),l=Mt().setTimeout(()=>{o(a)},Ow.get());function h(){Mt().clearTimeout(l),i(s)}s.ping(h).then(h,()=>{o(a)})}))}/**
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
 */const Uw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fw=500,jw=600,Vw="_blank",$w="http://localhost";class Gl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bw(t,e,n,s=Fw,i=jw){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const h=Object.assign(Object.assign({},Uw),{width:s.toString(),height:i.toString(),top:o,left:a}),d=Ke().toLowerCase();n&&(l=Pf(d)?Vw:n),Cf(d)&&(e=e||$w,h.scrollbars="yes");const p=Object.entries(h).reduce((v,[S,x])=>`${v}${S}=${x},`,"");if(T0(d)&&l!=="_self")return Hw(e||"",l),new Gl(null);const m=window.open(e||"",l,p);ee(m,t,"popup-blocked");try{m.focus()}catch{}return new Gl(m)}function Hw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Ww="__/auth/handler",zw="emulator/auth/handler",Gw=encodeURIComponent("fac");async function ql(t,e,n,s,i,o){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:gs,eventId:i};if(e instanceof Sa){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",E_(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))a[p]=m}if(e instanceof hi){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const h=await t._getAppCheckToken(),d=h?`#${Gw}=${encodeURIComponent(h)}`:"";return`${qw(t)}?${li(l).slice(1)}${d}`}function qw({config:t}){return t.emulator?wa(t,zw):`https://${t.authDomain}/${Ww}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go="webStorageSupport";class Kw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bf,this._completeRedirectFn=yw,this._overrideRedirectResult=gw}async _openPopup(e,n,s,i){var o;Zt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await ql(e,n,s,Fo(),i);return Bw(e,a,Aa())}async _openRedirect(e,n,s,i){await this._originValidation(e);const o=await ql(e,n,s,Fo(),i);return Y0(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Zt(o,"If manager is not set, promise should be"),o)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Lw(e),s=new ww(e);return n.register("authEvent",i=>(ee(i?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(go,{type:go},i=>{var o;const a=(o=i?.[0])===null||o===void 0?void 0:o[go];a!==void 0&&n(!!a),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Sw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xf()||Rf()||Ea()}}const Jw=Kw;var Kl="@firebase/auth",Jl="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qw(t){Ut(new Et("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=s.options;ee(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const h={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mf(t)},d=new O0(s,i,o,h);return L0(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ut(new Et("auth-internal",e=>{const n=Ar(e.getProvider("auth").getImmediate());return(s=>new Xw(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),at(Kl,Jl,Yw(t)),at(Kl,Jl,"esm2017")}/**
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
 */const Zw=5*60,eI=jh("authIdTokenMaxAge")||Zw;let Xl=null;const tI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>eI)return;const i=n?.token;Xl!==i&&(Xl=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nI(t=ha()){const e=Gn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=M0(t,{popupRedirectResolver:Jw,persistence:[ow,K0,Bf]}),s=jh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(s,location.origin);if(location.origin===o.origin){const a=tI(o.toString());z0(n,a,()=>a(n.currentUser)),W0(n,l=>a(l))}}const i=Uh("auth");return i&&U0(n,`http://${i}`),n}function sI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}k0({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const o=wt("internal-error");o.customData=i,n(o)},s.type="text/javascript",s.charset="UTF-8",sI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Qw("Browser");var Yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ra;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,_){function I(){}I.prototype=_.prototype,b.D=_.prototype,b.prototype=new I,b.prototype.constructor=b,b.C=function(E,T,C){for(var w=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)w[Be-2]=arguments[Be];return _.prototype[T].apply(E,w)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,_,I){I||(I=0);var E=Array(16);if(typeof _=="string")for(var T=0;16>T;++T)E[T]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(T=0;16>T;++T)E[T]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=b.g[0],I=b.g[1],T=b.g[2];var C=b.g[3],w=_+(C^I&(T^C))+E[0]+3614090360&4294967295;_=I+(w<<7&4294967295|w>>>25),w=C+(T^_&(I^T))+E[1]+3905402710&4294967295,C=_+(w<<12&4294967295|w>>>20),w=T+(I^C&(_^I))+E[2]+606105819&4294967295,T=C+(w<<17&4294967295|w>>>15),w=I+(_^T&(C^_))+E[3]+3250441966&4294967295,I=T+(w<<22&4294967295|w>>>10),w=_+(C^I&(T^C))+E[4]+4118548399&4294967295,_=I+(w<<7&4294967295|w>>>25),w=C+(T^_&(I^T))+E[5]+1200080426&4294967295,C=_+(w<<12&4294967295|w>>>20),w=T+(I^C&(_^I))+E[6]+2821735955&4294967295,T=C+(w<<17&4294967295|w>>>15),w=I+(_^T&(C^_))+E[7]+4249261313&4294967295,I=T+(w<<22&4294967295|w>>>10),w=_+(C^I&(T^C))+E[8]+1770035416&4294967295,_=I+(w<<7&4294967295|w>>>25),w=C+(T^_&(I^T))+E[9]+2336552879&4294967295,C=_+(w<<12&4294967295|w>>>20),w=T+(I^C&(_^I))+E[10]+4294925233&4294967295,T=C+(w<<17&4294967295|w>>>15),w=I+(_^T&(C^_))+E[11]+2304563134&4294967295,I=T+(w<<22&4294967295|w>>>10),w=_+(C^I&(T^C))+E[12]+1804603682&4294967295,_=I+(w<<7&4294967295|w>>>25),w=C+(T^_&(I^T))+E[13]+4254626195&4294967295,C=_+(w<<12&4294967295|w>>>20),w=T+(I^C&(_^I))+E[14]+2792965006&4294967295,T=C+(w<<17&4294967295|w>>>15),w=I+(_^T&(C^_))+E[15]+1236535329&4294967295,I=T+(w<<22&4294967295|w>>>10),w=_+(T^C&(I^T))+E[1]+4129170786&4294967295,_=I+(w<<5&4294967295|w>>>27),w=C+(I^T&(_^I))+E[6]+3225465664&4294967295,C=_+(w<<9&4294967295|w>>>23),w=T+(_^I&(C^_))+E[11]+643717713&4294967295,T=C+(w<<14&4294967295|w>>>18),w=I+(C^_&(T^C))+E[0]+3921069994&4294967295,I=T+(w<<20&4294967295|w>>>12),w=_+(T^C&(I^T))+E[5]+3593408605&4294967295,_=I+(w<<5&4294967295|w>>>27),w=C+(I^T&(_^I))+E[10]+38016083&4294967295,C=_+(w<<9&4294967295|w>>>23),w=T+(_^I&(C^_))+E[15]+3634488961&4294967295,T=C+(w<<14&4294967295|w>>>18),w=I+(C^_&(T^C))+E[4]+3889429448&4294967295,I=T+(w<<20&4294967295|w>>>12),w=_+(T^C&(I^T))+E[9]+568446438&4294967295,_=I+(w<<5&4294967295|w>>>27),w=C+(I^T&(_^I))+E[14]+3275163606&4294967295,C=_+(w<<9&4294967295|w>>>23),w=T+(_^I&(C^_))+E[3]+4107603335&4294967295,T=C+(w<<14&4294967295|w>>>18),w=I+(C^_&(T^C))+E[8]+1163531501&4294967295,I=T+(w<<20&4294967295|w>>>12),w=_+(T^C&(I^T))+E[13]+2850285829&4294967295,_=I+(w<<5&4294967295|w>>>27),w=C+(I^T&(_^I))+E[2]+4243563512&4294967295,C=_+(w<<9&4294967295|w>>>23),w=T+(_^I&(C^_))+E[7]+1735328473&4294967295,T=C+(w<<14&4294967295|w>>>18),w=I+(C^_&(T^C))+E[12]+2368359562&4294967295,I=T+(w<<20&4294967295|w>>>12),w=_+(I^T^C)+E[5]+4294588738&4294967295,_=I+(w<<4&4294967295|w>>>28),w=C+(_^I^T)+E[8]+2272392833&4294967295,C=_+(w<<11&4294967295|w>>>21),w=T+(C^_^I)+E[11]+1839030562&4294967295,T=C+(w<<16&4294967295|w>>>16),w=I+(T^C^_)+E[14]+4259657740&4294967295,I=T+(w<<23&4294967295|w>>>9),w=_+(I^T^C)+E[1]+2763975236&4294967295,_=I+(w<<4&4294967295|w>>>28),w=C+(_^I^T)+E[4]+1272893353&4294967295,C=_+(w<<11&4294967295|w>>>21),w=T+(C^_^I)+E[7]+4139469664&4294967295,T=C+(w<<16&4294967295|w>>>16),w=I+(T^C^_)+E[10]+3200236656&4294967295,I=T+(w<<23&4294967295|w>>>9),w=_+(I^T^C)+E[13]+681279174&4294967295,_=I+(w<<4&4294967295|w>>>28),w=C+(_^I^T)+E[0]+3936430074&4294967295,C=_+(w<<11&4294967295|w>>>21),w=T+(C^_^I)+E[3]+3572445317&4294967295,T=C+(w<<16&4294967295|w>>>16),w=I+(T^C^_)+E[6]+76029189&4294967295,I=T+(w<<23&4294967295|w>>>9),w=_+(I^T^C)+E[9]+3654602809&4294967295,_=I+(w<<4&4294967295|w>>>28),w=C+(_^I^T)+E[12]+3873151461&4294967295,C=_+(w<<11&4294967295|w>>>21),w=T+(C^_^I)+E[15]+530742520&4294967295,T=C+(w<<16&4294967295|w>>>16),w=I+(T^C^_)+E[2]+3299628645&4294967295,I=T+(w<<23&4294967295|w>>>9),w=_+(T^(I|~C))+E[0]+4096336452&4294967295,_=I+(w<<6&4294967295|w>>>26),w=C+(I^(_|~T))+E[7]+1126891415&4294967295,C=_+(w<<10&4294967295|w>>>22),w=T+(_^(C|~I))+E[14]+2878612391&4294967295,T=C+(w<<15&4294967295|w>>>17),w=I+(C^(T|~_))+E[5]+4237533241&4294967295,I=T+(w<<21&4294967295|w>>>11),w=_+(T^(I|~C))+E[12]+1700485571&4294967295,_=I+(w<<6&4294967295|w>>>26),w=C+(I^(_|~T))+E[3]+2399980690&4294967295,C=_+(w<<10&4294967295|w>>>22),w=T+(_^(C|~I))+E[10]+4293915773&4294967295,T=C+(w<<15&4294967295|w>>>17),w=I+(C^(T|~_))+E[1]+2240044497&4294967295,I=T+(w<<21&4294967295|w>>>11),w=_+(T^(I|~C))+E[8]+1873313359&4294967295,_=I+(w<<6&4294967295|w>>>26),w=C+(I^(_|~T))+E[15]+4264355552&4294967295,C=_+(w<<10&4294967295|w>>>22),w=T+(_^(C|~I))+E[6]+2734768916&4294967295,T=C+(w<<15&4294967295|w>>>17),w=I+(C^(T|~_))+E[13]+1309151649&4294967295,I=T+(w<<21&4294967295|w>>>11),w=_+(T^(I|~C))+E[4]+4149444226&4294967295,_=I+(w<<6&4294967295|w>>>26),w=C+(I^(_|~T))+E[11]+3174756917&4294967295,C=_+(w<<10&4294967295|w>>>22),w=T+(_^(C|~I))+E[2]+718787259&4294967295,T=C+(w<<15&4294967295|w>>>17),w=I+(C^(T|~_))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+_&4294967295,b.g[1]=b.g[1]+(T+(w<<21&4294967295|w>>>11))&4294967295,b.g[2]=b.g[2]+T&4294967295,b.g[3]=b.g[3]+C&4294967295}s.prototype.u=function(b,_){_===void 0&&(_=b.length);for(var I=_-this.blockSize,E=this.B,T=this.h,C=0;C<_;){if(T==0)for(;C<=I;)i(this,b,C),C+=this.blockSize;if(typeof b=="string"){for(;C<_;)if(E[T++]=b.charCodeAt(C++),T==this.blockSize){i(this,E),T=0;break}}else for(;C<_;)if(E[T++]=b[C++],T==this.blockSize){i(this,E),T=0;break}}this.h=T,this.o+=_},s.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var _=1;_<b.length-8;++_)b[_]=0;var I=8*this.o;for(_=b.length-8;_<b.length;++_)b[_]=I&255,I/=256;for(this.u(b),b=Array(16),_=I=0;4>_;++_)for(var E=0;32>E;E+=8)b[I++]=this.g[_]>>>E&255;return b};function o(b,_){var I=l;return Object.prototype.hasOwnProperty.call(I,b)?I[b]:I[b]=_(b)}function a(b,_){this.h=_;for(var I=[],E=!0,T=b.length-1;0<=T;T--){var C=b[T]|0;E&&C==_||(I[T]=C,E=!1)}this.g=I}var l={};function h(b){return-128<=b&&128>b?o(b,function(_){return new a([_|0],0>_?-1:0)}):new a([b|0],0>b?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return m;if(0>b)return G(d(-b));for(var _=[],I=1,E=0;b>=I;E++)_[E]=b/I|0,I*=4294967296;return new a(_,0)}function p(b,_){if(b.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(b.charAt(0)=="-")return G(p(b.substring(1),_));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=d(Math.pow(_,8)),E=m,T=0;T<b.length;T+=8){var C=Math.min(8,b.length-T),w=parseInt(b.substring(T,T+C),_);8>C?(C=d(Math.pow(_,C)),E=E.j(C).add(d(w))):(E=E.j(I),E=E.add(d(w)))}return E}var m=h(0),v=h(1),S=h(16777216);t=a.prototype,t.m=function(){if(L(this))return-G(this).m();for(var b=0,_=1,I=0;I<this.g.length;I++){var E=this.i(I);b+=(0<=E?E:4294967296+E)*_,_*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(x(this))return"0";if(L(this))return"-"+G(this).toString(b);for(var _=d(Math.pow(b,6)),I=this,E="";;){var T=z(I,_).g;I=K(I,T.j(_));var C=((0<I.g.length?I.g[0]:I.h)>>>0).toString(b);if(I=T,x(I))return C+E;for(;6>C.length;)C="0"+C;E=C+E}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function x(b){if(b.h!=0)return!1;for(var _=0;_<b.g.length;_++)if(b.g[_]!=0)return!1;return!0}function L(b){return b.h==-1}t.l=function(b){return b=K(this,b),L(b)?-1:x(b)?0:1};function G(b){for(var _=b.g.length,I=[],E=0;E<_;E++)I[E]=~b.g[E];return new a(I,~b.h).add(v)}t.abs=function(){return L(this)?G(this):this},t.add=function(b){for(var _=Math.max(this.g.length,b.g.length),I=[],E=0,T=0;T<=_;T++){var C=E+(this.i(T)&65535)+(b.i(T)&65535),w=(C>>>16)+(this.i(T)>>>16)+(b.i(T)>>>16);E=w>>>16,C&=65535,w&=65535,I[T]=w<<16|C}return new a(I,I[I.length-1]&-2147483648?-1:0)};function K(b,_){return b.add(G(_))}t.j=function(b){if(x(this)||x(b))return m;if(L(this))return L(b)?G(this).j(G(b)):G(G(this).j(b));if(L(b))return G(this.j(G(b)));if(0>this.l(S)&&0>b.l(S))return d(this.m()*b.m());for(var _=this.g.length+b.g.length,I=[],E=0;E<2*_;E++)I[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<b.g.length;T++){var C=this.i(E)>>>16,w=this.i(E)&65535,Be=b.i(T)>>>16,nt=b.i(T)&65535;I[2*E+2*T]+=w*nt,B(I,2*E+2*T),I[2*E+2*T+1]+=C*nt,B(I,2*E+2*T+1),I[2*E+2*T+1]+=w*Be,B(I,2*E+2*T+1),I[2*E+2*T+2]+=C*Be,B(I,2*E+2*T+2)}for(E=0;E<_;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=_;E<2*_;E++)I[E]=0;return new a(I,0)};function B(b,_){for(;(b[_]&65535)!=b[_];)b[_+1]+=b[_]>>>16,b[_]&=65535,_++}function W(b,_){this.g=b,this.h=_}function z(b,_){if(x(_))throw Error("division by zero");if(x(b))return new W(m,m);if(L(b))return _=z(G(b),_),new W(G(_.g),G(_.h));if(L(_))return _=z(b,G(_)),new W(G(_.g),_.h);if(30<b.g.length){if(L(b)||L(_))throw Error("slowDivide_ only works with positive integers.");for(var I=v,E=_;0>=E.l(b);)I=re(I),E=re(E);var T=fe(I,1),C=fe(E,1);for(E=fe(E,2),I=fe(I,2);!x(E);){var w=C.add(E);0>=w.l(b)&&(T=T.add(I),C=w),E=fe(E,1),I=fe(I,1)}return _=K(b,T.j(_)),new W(T,_)}for(T=m;0<=b.l(_);){for(I=Math.max(1,Math.floor(b.m()/_.m())),E=Math.ceil(Math.log(I)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),C=d(I),w=C.j(_);L(w)||0<w.l(b);)I-=E,C=d(I),w=C.j(_);x(C)&&(C=v),T=T.add(C),b=K(b,w)}return new W(T,b)}t.A=function(b){return z(this,b).h},t.and=function(b){for(var _=Math.max(this.g.length,b.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)&b.i(E);return new a(I,this.h&b.h)},t.or=function(b){for(var _=Math.max(this.g.length,b.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)|b.i(E);return new a(I,this.h|b.h)},t.xor=function(b){for(var _=Math.max(this.g.length,b.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)^b.i(E);return new a(I,this.h^b.h)};function re(b){for(var _=b.g.length+1,I=[],E=0;E<_;E++)I[E]=b.i(E)<<1|b.i(E-1)>>>31;return new a(I,b.h)}function fe(b,_){var I=_>>5;_%=32;for(var E=b.g.length-I,T=[],C=0;C<E;C++)T[C]=0<_?b.i(C+I)>>>_|b.i(C+I+1)<<32-_:b.i(C+I);return new a(T,b.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Ra=a}).apply(typeof Yl<"u"?Yl:typeof self<"u"?self:typeof window<"u"?window:{});var Di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,c,u){return r==Array.prototype||r==Object.prototype||(r[c]=u.value),r};function n(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Di=="object"&&Di];for(var c=0;c<r.length;++c){var u=r[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var s=n(this);function i(r,c){if(c)e:{var u=s;r=r.split(".");for(var f=0;f<r.length-1;f++){var R=r[f];if(!(R in u))break e;u=u[R]}r=r[r.length-1],f=u[r],c=c(f),c!=f&&c!=null&&e(u,r,{configurable:!0,writable:!0,value:c})}}function o(r,c){r instanceof String&&(r+="");var u=0,f=!1,R={next:function(){if(!f&&u<r.length){var P=u++;return{value:c(P,r[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(r){return r||function(){return o(this,function(c,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(r){var c=typeof r;return c=c!="object"?c:r?Array.isArray(r)?"array":c:"null",c=="array"||c=="object"&&typeof r.length=="number"}function d(r){var c=typeof r;return c=="object"&&r!=null||c=="function"}function p(r,c,u){return r.call.apply(r.bind,arguments)}function m(r,c,u){if(!r)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,f),r.apply(c,R)}}return function(){return r.apply(c,arguments)}}function v(r,c,u){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,v.apply(null,arguments)}function S(r,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),r.apply(this,f)}}function x(r,c){function u(){}u.prototype=c.prototype,r.aa=c.prototype,r.prototype=new u,r.prototype.constructor=r,r.Qb=function(f,R,P){for(var j=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)j[ve-2]=arguments[ve];return c.prototype[R].apply(f,j)}}function L(r){const c=r.length;if(0<c){const u=Array(c);for(let f=0;f<c;f++)u[f]=r[f];return u}return[]}function G(r,c){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const R=r.length||0,P=f.length||0;r.length=R+P;for(let j=0;j<P;j++)r[R+j]=f[j]}else r.push(f)}}class K{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function B(r){return/^[\s\xa0]*$/.test(r)}function W(){var r=l.navigator;return r&&(r=r.userAgent)?r:""}function z(r){return z[" "](r),r}z[" "]=function(){};var re=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function fe(r,c,u){for(const f in r)c.call(u,r[f],f,r)}function b(r,c){for(const u in r)c.call(void 0,r[u],u,r)}function _(r){const c={};for(const u in r)c[u]=r[u];return c}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(r,c){let u,f;for(let R=1;R<arguments.length;R++){f=arguments[R];for(u in f)r[u]=f[u];for(let P=0;P<I.length;P++)u=I[P],Object.prototype.hasOwnProperty.call(f,u)&&(r[u]=f[u])}}function T(r){var c=1;r=r.split(":");const u=[];for(;0<c&&r.length;)u.push(r.shift()),c--;return r.length&&u.push(r.join(":")),u}function C(r){l.setTimeout(()=>{throw r},0)}function w(){var r=Qe;let c=null;return r.g&&(c=r.g,r.g=r.g.next,r.g||(r.h=null),c.next=null),c}class Be{constructor(){this.h=this.g=null}add(c,u){const f=nt.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var nt=new K(()=>new Ce,r=>r.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,ie=!1,Qe=new Be,lt=()=>{const r=l.Promise.resolve(void 0);oe=()=>{r.then(st)}};var st=()=>{for(var r;r=w();){try{r.h.call(r.g)}catch(u){C(u)}var c=nt;c.j(r),100>c.h&&(c.h++,r.next=c.g,c.g=r)}ie=!1};function Ee(){this.s=this.s,this.C=this.C}Ee.prototype.s=!1,Ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(r,c){this.type=r,this.g=this.target=c,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var tn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var r=!1,c=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const u=()=>{};l.addEventListener("test",u,c),l.removeEventListener("test",u,c)}catch{}return r}();function St(r,c){if(Te.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var u=this.type=r.type,f=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=c,c=r.relatedTarget){if(re){e:{try{z(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else u=="mouseover"?c=r.fromElement:u=="mouseout"&&(c=r.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:Je[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&St.aa.h.call(this)}}x(St,Te);var Je={2:"touch",3:"pen",4:"mouse"};St.prototype.h=function(){St.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),q=0;function H(r,c,u,f,R){this.listener=r,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=R,this.key=++q,this.da=this.fa=!1}function J(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function de(r){this.src=r,this.g={},this.h=0}de.prototype.add=function(r,c,u,f,R){var P=r.toString();r=this.g[P],r||(r=this.g[P]=[],this.h++);var j=y(r,c,f,R);return-1<j?(c=r[j],u||(c.fa=!1)):(c=new H(c,this.src,P,!!f,R),c.fa=u,r.push(c)),c};function g(r,c){var u=c.type;if(u in r.g){var f=r.g[u],R=Array.prototype.indexOf.call(f,c,void 0),P;(P=0<=R)&&Array.prototype.splice.call(f,R,1),P&&(J(c),r.g[u].length==0&&(delete r.g[u],r.h--))}}function y(r,c,u,f){for(var R=0;R<r.length;++R){var P=r[R];if(!P.da&&P.listener==c&&P.capture==!!u&&P.ha==f)return R}return-1}var A="closure_lm_"+(1e6*Math.random()|0),k={};function D(r,c,u,f,R){if(Array.isArray(c)){for(var P=0;P<c.length;P++)D(r,c[P],u,f,R);return null}return u=Z(u),r&&r[O]?r.K(c,u,d(f)?!!f.capture:!1,R):N(r,c,u,!1,f,R)}function N(r,c,u,f,R,P){if(!c)throw Error("Invalid event type");var j=d(R)?!!R.capture:!!R,ve=V(r);if(ve||(r[A]=ve=new de(r)),u=ve.add(c,u,f,j,P),u.proxy)return u;if(f=$(),u.proxy=f,f.src=r,f.listener=u,r.addEventListener)tn||(R=j),R===void 0&&(R=!1),r.addEventListener(c.toString(),f,R);else if(r.attachEvent)r.attachEvent(M(c.toString()),f);else if(r.addListener&&r.removeListener)r.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function $(){function r(u){return c.call(r.src,r.listener,u)}const c=Y;return r}function F(r,c,u,f,R){if(Array.isArray(c))for(var P=0;P<c.length;P++)F(r,c[P],u,f,R);else f=d(f)?!!f.capture:!!f,u=Z(u),r&&r[O]?(r=r.i,c=String(c).toString(),c in r.g&&(P=r.g[c],u=y(P,u,f,R),-1<u&&(J(P[u]),Array.prototype.splice.call(P,u,1),P.length==0&&(delete r.g[c],r.h--)))):r&&(r=V(r))&&(c=r.g[c.toString()],r=-1,c&&(r=y(c,u,f,R)),(u=-1<r?c[r]:null)&&U(u))}function U(r){if(typeof r!="number"&&r&&!r.da){var c=r.src;if(c&&c[O])g(c.i,r);else{var u=r.type,f=r.proxy;c.removeEventListener?c.removeEventListener(u,f,r.capture):c.detachEvent?c.detachEvent(M(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=V(c))?(g(u,r),u.h==0&&(u.src=null,c[A]=null)):J(r)}}}function M(r){return r in k?k[r]:k[r]="on"+r}function Y(r,c){if(r.da)r=!0;else{c=new St(c,this);var u=r.listener,f=r.ha||r.src;r.fa&&U(r),r=u.call(f,c)}return r}function V(r){return r=r[A],r instanceof de?r:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(r){return typeof r=="function"?r:(r[X]||(r[X]=function(c){return r.handleEvent(c)}),r[X])}function Q(){Ee.call(this),this.i=new de(this),this.M=this,this.F=null}x(Q,Ee),Q.prototype[O]=!0,Q.prototype.removeEventListener=function(r,c,u,f){F(this,r,c,u,f)};function ne(r,c){var u,f=r.F;if(f)for(u=[];f;f=f.F)u.push(f);if(r=r.M,f=c.type||c,typeof c=="string")c=new Te(c,r);else if(c instanceof Te)c.target=c.target||r;else{var R=c;c=new Te(f,r),E(c,R)}if(R=!0,u)for(var P=u.length-1;0<=P;P--){var j=c.g=u[P];R=ae(j,f,!0,c)&&R}if(j=c.g=r,R=ae(j,f,!0,c)&&R,R=ae(j,f,!1,c)&&R,u)for(P=0;P<u.length;P++)j=c.g=u[P],R=ae(j,f,!1,c)&&R}Q.prototype.N=function(){if(Q.aa.N.call(this),this.i){var r=this.i,c;for(c in r.g){for(var u=r.g[c],f=0;f<u.length;f++)J(u[f]);delete r.g[c],r.h--}}this.F=null},Q.prototype.K=function(r,c,u,f){return this.i.add(String(r),c,!1,u,f)},Q.prototype.L=function(r,c,u,f){return this.i.add(String(r),c,!0,u,f)};function ae(r,c,u,f){if(c=r.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,P=0;P<c.length;++P){var j=c[P];if(j&&!j.da&&j.capture==u){var ve=j.listener,De=j.ha||j.src;j.fa&&g(r.i,j),R=ve.call(De,f)!==!1&&R}}return R&&!f.defaultPrevented}function Oe(r,c,u){if(typeof r=="function")u&&(r=v(r,u));else if(r&&typeof r.handleEvent=="function")r=v(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(r,c||0)}function ke(r){r.g=Oe(()=>{r.g=null,r.i&&(r.i=!1,ke(r))},r.l);const c=r.h;r.h=null,r.m.apply(null,c)}class it extends Ee{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ke(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Me(r){Ee.call(this),this.h=r,this.g={}}x(Me,Ee);var nn=[];function _s(r){fe(r.g,function(c,u){this.g.hasOwnProperty(u)&&U(c)},r),r.g={}}Me.prototype.N=function(){Me.aa.N.call(this),_s(this)},Me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ne=l.JSON.stringify,rt=l.JSON.parse,mi=class{stringify(r){return l.JSON.stringify(r,void 0)}parse(r){return l.JSON.parse(r,void 0)}};function Pr(){}Pr.prototype.h=null;function xa(r){return r.h||(r.h=r.i())}function id(){}var ys={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Or(){Te.call(this,"d")}x(Or,Te);function kr(){Te.call(this,"c")}x(kr,Te);var qn={},Ma=null;function Nr(){return Ma=Ma||new Q}qn.La="serverreachability";function La(r){Te.call(this,qn.La,r)}x(La,Te);function vs(r){const c=Nr();ne(c,new La(c))}qn.STAT_EVENT="statevent";function Ua(r,c){Te.call(this,qn.STAT_EVENT,r),this.stat=c}x(Ua,Te);function He(r){const c=Nr();ne(c,new Ua(c,r))}qn.Ma="timingevent";function Fa(r,c){Te.call(this,qn.Ma,r),this.size=c}x(Fa,Te);function ws(r,c){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){r()},c)}function Is(){this.g=!0}Is.prototype.xa=function(){this.g=!1};function rd(r,c,u,f,R,P){r.info(function(){if(r.g)if(P)for(var j="",ve=P.split("&"),De=0;De<ve.length;De++){var pe=ve[De].split("=");if(1<pe.length){var Le=pe[0];pe=pe[1];var Ue=Le.split("_");j=2<=Ue.length&&Ue[1]=="type"?j+(Le+"="+pe+"&"):j+(Le+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+f+") [attempt "+R+"]: "+c+`
`+u+`
`+j})}function od(r,c,u,f,R,P,j){r.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+R+"]: "+c+`
`+u+`
`+P+" "+j})}function Kn(r,c,u,f){r.info(function(){return"XMLHTTP TEXT ("+c+"): "+cd(r,u)+(f?" "+f:"")})}function ad(r,c){r.info(function(){return"TIMEOUT: "+c})}Is.prototype.info=function(){};function cd(r,c){if(!r.g)return c;if(!c)return null;try{var u=JSON.parse(c);if(u){for(r=0;r<u.length;r++)if(Array.isArray(u[r])){var f=u[r];if(!(2>f.length)){var R=f[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return Ne(u)}catch{return c}}var Dr={NO_ERROR:0,TIMEOUT:8},ld={},xr;function _i(){}x(_i,Pr),_i.prototype.g=function(){return new XMLHttpRequest},_i.prototype.i=function(){return{}},xr=new _i;function sn(r,c,u,f){this.j=r,this.i=c,this.l=u,this.R=f||1,this.U=new Me(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ja}function ja(){this.i=null,this.g="",this.h=!1}var Va={},Mr={};function Lr(r,c,u){r.L=1,r.v=Ii(jt(c)),r.m=u,r.P=!0,$a(r,null)}function $a(r,c){r.F=Date.now(),yi(r),r.A=jt(r.v);var u=r.A,f=r.R;Array.isArray(f)||(f=[String(f)]),tc(u.i,"t",f),r.C=0,u=r.j.J,r.h=new ja,r.g=vc(r.j,u?c:null,!r.m),0<r.O&&(r.M=new it(v(r.Y,r,r.g),r.O)),c=r.U,u=r.g,f=r.ca;var R="readystatechange";Array.isArray(R)||(R&&(nn[0]=R.toString()),R=nn);for(var P=0;P<R.length;P++){var j=D(u,R[P],f||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=r.H?_(r.H):{},r.m?(r.u||(r.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,c)):(r.u="GET",r.g.ea(r.A,r.u,null,c)),vs(),rd(r.i,r.u,r.A,r.l,r.R,r.m)}sn.prototype.ca=function(r){r=r.target;const c=this.M;c&&Vt(r)==3?c.j():this.Y(r)},sn.prototype.Y=function(r){try{if(r==this.g)e:{const Ue=Vt(this.g);var c=this.g.Ba();const Yn=this.g.Z();if(!(3>Ue)&&(Ue!=3||this.g&&(this.h.h||this.g.oa()||cc(this.g)))){this.J||Ue!=4||c==7||(c==8||0>=Yn?vs(3):vs(2)),Ur(this);var u=this.g.Z();this.X=u;t:if(Ba(this)){var f=cc(this.g);r="";var R=f.length,P=Vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),bs(this);var j="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,r+=this.h.i.decode(f[c],{stream:!(P&&c==R-1)});f.length=0,this.h.g+=r,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=u==200,od(this.i,this.u,this.A,this.l,this.R,Ue,u),this.o){if(this.T&&!this.K){t:{if(this.g){var ve,De=this.g;if((ve=De.g?De.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(ve)){var pe=ve;break t}}pe=null}if(u=pe)Kn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fr(this,u);else{this.o=!1,this.s=3,He(12),En(this),bs(this);break e}}if(this.P){u=!0;let ut;for(;!this.J&&this.C<j.length;)if(ut=ud(this,j),ut==Mr){Ue==4&&(this.s=4,He(14),u=!1),Kn(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==Va){this.s=4,He(15),Kn(this.i,this.l,j,"[Invalid Chunk]"),u=!1;break}else Kn(this.i,this.l,ut,null),Fr(this,ut);if(Ba(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ue!=4||j.length!=0||this.h.h||(this.s=1,He(16),u=!1),this.o=this.o&&u,!u)Kn(this.i,this.l,j,"[Invalid Chunked Response]"),En(this),bs(this);else if(0<j.length&&!this.W){this.W=!0;var Le=this.j;Le.g==this&&Le.ba&&!Le.M&&(Le.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Wr(Le),Le.M=!0,He(11))}}else Kn(this.i,this.l,j,null),Fr(this,j);Ue==4&&En(this),this.o&&!this.J&&(Ue==4?gc(this.j,this):(this.o=!1,yi(this)))}else Cd(this.g),u==400&&0<j.indexOf("Unknown SID")?(this.s=3,He(12)):(this.s=0,He(13)),En(this),bs(this)}}}catch{}finally{}};function Ba(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function ud(r,c){var u=r.C,f=c.indexOf(`
`,u);return f==-1?Mr:(u=Number(c.substring(u,f)),isNaN(u)?Va:(f+=1,f+u>c.length?Mr:(c=c.slice(f,f+u),r.C=f+u,c)))}sn.prototype.cancel=function(){this.J=!0,En(this)};function yi(r){r.S=Date.now()+r.I,Ha(r,r.I)}function Ha(r,c){if(r.B!=null)throw Error("WatchDog timer not null");r.B=ws(v(r.ba,r),c)}function Ur(r){r.B&&(l.clearTimeout(r.B),r.B=null)}sn.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(ad(this.i,this.A),this.L!=2&&(vs(),He(17)),En(this),this.s=2,bs(this)):Ha(this,this.S-r)};function bs(r){r.j.G==0||r.J||gc(r.j,r)}function En(r){Ur(r);var c=r.M;c&&typeof c.ma=="function"&&c.ma(),r.M=null,_s(r.U),r.g&&(c=r.g,r.g=null,c.abort(),c.ma())}function Fr(r,c){try{var u=r.j;if(u.G!=0&&(u.g==r||jr(u.h,r))){if(!r.K&&jr(u.h,r)&&u.G==3){try{var f=u.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var R=f;if(R[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<r.F)Ci(u),Si(u);else break e;Hr(u),He(18)}}else u.za=R[1],0<u.za-u.T&&37500>R[2]&&u.F&&u.v==0&&!u.C&&(u.C=ws(v(u.Za,u),6e3));if(1>=Ga(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Sn(u,11)}else if((r.K||u.g==r)&&Ci(u),!B(c))for(R=u.Da.g.parse(c),c=0;c<R.length;c++){let pe=R[c];if(u.T=pe[0],pe=pe[1],u.G==2)if(pe[0]=="c"){u.K=pe[1],u.ia=pe[2];const Le=pe[3];Le!=null&&(u.la=Le,u.j.info("VER="+u.la));const Ue=pe[4];Ue!=null&&(u.Aa=Ue,u.j.info("SVER="+u.Aa));const Yn=pe[5];Yn!=null&&typeof Yn=="number"&&0<Yn&&(f=1.5*Yn,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const ut=r.g;if(ut){const Ri=ut.g?ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ri){var P=f.h;P.g||Ri.indexOf("spdy")==-1&&Ri.indexOf("quic")==-1&&Ri.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Vr(P,P.h),P.h=null))}if(f.D){const zr=ut.g?ut.g.getResponseHeader("X-HTTP-Session-Id"):null;zr&&(f.ya=zr,be(f.I,f.D,zr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-r.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var j=r;if(f.qa=yc(f,f.J?f.ia:null,f.W),j.K){qa(f.h,j);var ve=j,De=f.L;De&&(ve.I=De),ve.B&&(Ur(ve),yi(ve)),f.g=j}else dc(f);0<u.i.length&&Ai(u)}else pe[0]!="stop"&&pe[0]!="close"||Sn(u,7);else u.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?Sn(u,7):Br(u):pe[0]!="noop"&&u.l&&u.l.ta(pe),u.v=0)}}vs(4)}catch{}}var hd=class{constructor(r,c){this.g=r,this.map=c}};function Wa(r){this.l=r||10,l.PerformanceNavigationTiming?(r=l.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function za(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Ga(r){return r.h?1:r.g?r.g.size:0}function jr(r,c){return r.h?r.h==c:r.g?r.g.has(c):!1}function Vr(r,c){r.g?r.g.add(c):r.h=c}function qa(r,c){r.h&&r.h==c?r.h=null:r.g&&r.g.has(c)&&r.g.delete(c)}Wa.prototype.cancel=function(){if(this.i=Ka(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function Ka(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let c=r.i;for(const u of r.g.values())c=c.concat(u.D);return c}return L(r.i)}function fd(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(h(r)){for(var c=[],u=r.length,f=0;f<u;f++)c.push(r[f]);return c}c=[],u=0;for(f in r)c[u++]=r[f];return c}function dd(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(h(r)||typeof r=="string"){var c=[];r=r.length;for(var u=0;u<r;u++)c.push(u);return c}c=[],u=0;for(const f in r)c[u++]=f;return c}}}function Ja(r,c){if(r.forEach&&typeof r.forEach=="function")r.forEach(c,void 0);else if(h(r)||typeof r=="string")Array.prototype.forEach.call(r,c,void 0);else for(var u=dd(r),f=fd(r),R=f.length,P=0;P<R;P++)c.call(void 0,f[P],u&&u[P],r)}var Xa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pd(r,c){if(r){r=r.split("&");for(var u=0;u<r.length;u++){var f=r[u].indexOf("="),R=null;if(0<=f){var P=r[u].substring(0,f);R=r[u].substring(f+1)}else P=r[u];c(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Tn(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Tn){this.h=r.h,vi(this,r.j),this.o=r.o,this.g=r.g,wi(this,r.s),this.l=r.l;var c=r.i,u=new Ss;u.i=c.i,c.g&&(u.g=new Map(c.g),u.h=c.h),Ya(this,u),this.m=r.m}else r&&(c=String(r).match(Xa))?(this.h=!1,vi(this,c[1]||"",!0),this.o=Es(c[2]||""),this.g=Es(c[3]||"",!0),wi(this,c[4]),this.l=Es(c[5]||"",!0),Ya(this,c[6]||"",!0),this.m=Es(c[7]||"")):(this.h=!1,this.i=new Ss(null,this.h))}Tn.prototype.toString=function(){var r=[],c=this.j;c&&r.push(Ts(c,Qa,!0),":");var u=this.g;return(u||c=="file")&&(r.push("//"),(c=this.o)&&r.push(Ts(c,Qa,!0),"@"),r.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&r.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&r.push("/"),r.push(Ts(u,u.charAt(0)=="/"?_d:md,!0))),(u=this.i.toString())&&r.push("?",u),(u=this.m)&&r.push("#",Ts(u,vd)),r.join("")};function jt(r){return new Tn(r)}function vi(r,c,u){r.j=u?Es(c,!0):c,r.j&&(r.j=r.j.replace(/:$/,""))}function wi(r,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);r.s=c}else r.s=null}function Ya(r,c,u){c instanceof Ss?(r.i=c,wd(r.i,r.h)):(u||(c=Ts(c,yd)),r.i=new Ss(c,r.h))}function be(r,c,u){r.i.set(c,u)}function Ii(r){return be(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Es(r,c){return r?c?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Ts(r,c,u){return typeof r=="string"?(r=encodeURI(r).replace(c,gd),u&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function gd(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Qa=/[#\/\?@]/g,md=/[#\?:]/g,_d=/[#\?]/g,yd=/[#\?@]/g,vd=/#/g;function Ss(r,c){this.h=this.g=null,this.i=r||null,this.j=!!c}function rn(r){r.g||(r.g=new Map,r.h=0,r.i&&pd(r.i,function(c,u){r.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}t=Ss.prototype,t.add=function(r,c){rn(this),this.i=null,r=Jn(this,r);var u=this.g.get(r);return u||this.g.set(r,u=[]),u.push(c),this.h+=1,this};function Za(r,c){rn(r),c=Jn(r,c),r.g.has(c)&&(r.i=null,r.h-=r.g.get(c).length,r.g.delete(c))}function ec(r,c){return rn(r),c=Jn(r,c),r.g.has(c)}t.forEach=function(r,c){rn(this),this.g.forEach(function(u,f){u.forEach(function(R){r.call(c,R,f,this)},this)},this)},t.na=function(){rn(this);const r=Array.from(this.g.values()),c=Array.from(this.g.keys()),u=[];for(let f=0;f<c.length;f++){const R=r[f];for(let P=0;P<R.length;P++)u.push(c[f])}return u},t.V=function(r){rn(this);let c=[];if(typeof r=="string")ec(this,r)&&(c=c.concat(this.g.get(Jn(this,r))));else{r=Array.from(this.g.values());for(let u=0;u<r.length;u++)c=c.concat(r[u])}return c},t.set=function(r,c){return rn(this),this.i=null,r=Jn(this,r),ec(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[c]),this.h+=1,this},t.get=function(r,c){return r?(r=this.V(r),0<r.length?String(r[0]):c):c};function tc(r,c,u){Za(r,c),0<u.length&&(r.i=null,r.g.set(Jn(r,c),L(u)),r.h+=u.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],c=Array.from(this.g.keys());for(var u=0;u<c.length;u++){var f=c[u];const P=encodeURIComponent(String(f)),j=this.V(f);for(f=0;f<j.length;f++){var R=P;j[f]!==""&&(R+="="+encodeURIComponent(String(j[f]))),r.push(R)}}return this.i=r.join("&")};function Jn(r,c){return c=String(c),r.j&&(c=c.toLowerCase()),c}function wd(r,c){c&&!r.j&&(rn(r),r.i=null,r.g.forEach(function(u,f){var R=f.toLowerCase();f!=R&&(Za(this,f),tc(this,R,u))},r)),r.j=c}function Id(r,c){const u=new Is;if(l.Image){const f=new Image;f.onload=S(on,u,"TestLoadImage: loaded",!0,c,f),f.onerror=S(on,u,"TestLoadImage: error",!1,c,f),f.onabort=S(on,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=S(on,u,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=r}else c(!1)}function bd(r,c){const u=new Is,f=new AbortController,R=setTimeout(()=>{f.abort(),on(u,"TestPingServer: timeout",!1,c)},1e4);fetch(r,{signal:f.signal}).then(P=>{clearTimeout(R),P.ok?on(u,"TestPingServer: ok",!0,c):on(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),on(u,"TestPingServer: error",!1,c)})}function on(r,c,u,f,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),f(u)}catch{}}function Ed(){this.g=new mi}function Td(r,c,u){const f=u||"";try{Ja(r,function(R,P){let j=R;d(R)&&(j=Ne(R)),c.push(f+P+"="+encodeURIComponent(j))})}catch(R){throw c.push(f+"type="+encodeURIComponent("_badmap")),R}}function bi(r){this.l=r.Ub||null,this.j=r.eb||!1}x(bi,Pr),bi.prototype.g=function(){return new Ei(this.l,this.j)},bi.prototype.i=function(r){return function(){return r}}({});function Ei(r,c){Q.call(this),this.D=r,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Ei,Q),t=Ei.prototype,t.open=function(r,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=c,this.readyState=1,Cs(this)},t.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(c.body=r),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,As(this)),this.readyState=0},t.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nc(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function nc(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}t.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var c=r.value?r.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!r.done}))&&(this.response=this.responseText+=c)}r.done?As(this):Cs(this),this.readyState==3&&nc(this)}},t.Ra=function(r){this.g&&(this.response=this.responseText=r,As(this))},t.Qa=function(r){this.g&&(this.response=r,As(this))},t.ga=function(){this.g&&As(this)};function As(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Cs(r)}t.setRequestHeader=function(r,c){this.u.append(r,c)},t.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,r.push(u[0]+": "+u[1]),u=c.next();return r.join(`\r
`)};function Cs(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function sc(r){let c="";return fe(r,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function $r(r,c,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=sc(u),typeof r=="string"?u!=null&&encodeURIComponent(String(u)):be(r,c,u))}function Ae(r){Q.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Ae,Q);var Sd=/^https?$/i,Ad=["POST","PUT"];t=Ae.prototype,t.Ha=function(r){this.J=r},t.ea=function(r,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);c=c?c.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xr.g(),this.v=this.o?xa(this.o):xa(xr),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(r),!0),this.B=!1}catch(P){ic(this,P);return}if(r=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var R in f)u.set(R,f[R]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())u.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(P=>P.toLowerCase()=="content-type"),R=l.FormData&&r instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ad,c,void 0))||f||R||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of u)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ac(this),this.u=!0,this.g.send(r),this.u=!1}catch(P){ic(this,P)}};function ic(r,c){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=c,r.m=5,rc(r),Ti(r)}function rc(r){r.A||(r.A=!0,ne(r,"complete"),ne(r,"error"))}t.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,ne(this,"complete"),ne(this,"abort"),Ti(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ti(this,!0)),Ae.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?oc(this):this.bb())},t.bb=function(){oc(this)};function oc(r){if(r.h&&typeof a<"u"&&(!r.v[1]||Vt(r)!=4||r.Z()!=2)){if(r.u&&Vt(r)==4)Oe(r.Ea,0,r);else if(ne(r,"readystatechange"),Vt(r)==4){r.h=!1;try{const j=r.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var f;if(f=j===0){var R=String(r.D).match(Xa)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),f=!Sd.test(R?R.toLowerCase():"")}u=f}if(u)ne(r,"complete"),ne(r,"success");else{r.m=6;try{var P=2<Vt(r)?r.g.statusText:""}catch{P=""}r.l=P+" ["+r.Z()+"]",rc(r)}}finally{Ti(r)}}}}function Ti(r,c){if(r.g){ac(r);const u=r.g,f=r.v[0]?()=>{}:null;r.g=null,r.v=null,c||ne(r,"ready");try{u.onreadystatechange=f}catch{}}}function ac(r){r.I&&(l.clearTimeout(r.I),r.I=null)}t.isActive=function(){return!!this.g};function Vt(r){return r.g?r.g.readyState:0}t.Z=function(){try{return 2<Vt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(r){if(this.g){var c=this.g.responseText;return r&&c.indexOf(r)==0&&(c=c.substring(r.length)),rt(c)}};function cc(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Cd(r){const c={};r=(r.g&&2<=Vt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<r.length;f++){if(B(r[f]))continue;var u=T(r[f]);const R=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const P=c[R]||[];c[R]=P,P.push(u)}b(c,function(f){return f.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rs(r,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[r]||c}function lc(r){this.Aa=0,this.i=[],this.j=new Is,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Rs("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Rs("baseRetryDelayMs",5e3,r),this.cb=Rs("retryDelaySeedMs",1e4,r),this.Wa=Rs("forwardChannelMaxRetries",2,r),this.wa=Rs("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Wa(r&&r.concurrentRequestLimit),this.Da=new Ed,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=lc.prototype,t.la=8,t.G=1,t.connect=function(r,c,u,f){He(0),this.W=r,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=yc(this,null,this.W),Ai(this)};function Br(r){if(uc(r),r.G==3){var c=r.U++,u=jt(r.I);if(be(u,"SID",r.K),be(u,"RID",c),be(u,"TYPE","terminate"),Ps(r,u),c=new sn(r,r.j,c),c.L=2,c.v=Ii(jt(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=c.v,u=!0),u||(c.g=vc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),yi(c)}_c(r)}function Si(r){r.g&&(Wr(r),r.g.cancel(),r.g=null)}function uc(r){Si(r),r.u&&(l.clearTimeout(r.u),r.u=null),Ci(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&l.clearTimeout(r.s),r.s=null)}function Ai(r){if(!za(r.h)&&!r.s){r.s=!0;var c=r.Ga;oe||lt(),ie||(oe(),ie=!0),Qe.add(c,r),r.B=0}}function Rd(r,c){return Ga(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=c.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=ws(v(r.Ga,r,c),mc(r,r.B)),r.B++,!0)}t.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const R=new sn(this,this.j,r);let P=this.o;if(this.S&&(P?(P=_(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=fc(this,R,c),u=jt(this.I),be(u,"RID",r),be(u,"CVER",22),this.D&&be(u,"X-HTTP-Session-Id",this.D),Ps(this,u),P&&(this.O?c="headers="+encodeURIComponent(String(sc(P)))+"&"+c:this.m&&$r(u,this.m,P)),Vr(this.h,R),this.Ua&&be(u,"TYPE","init"),this.P?(be(u,"$req",c),be(u,"SID","null"),R.T=!0,Lr(R,u,null)):Lr(R,u,c),this.G=2}}else this.G==3&&(r?hc(this,r):this.i.length==0||za(this.h)||hc(this))};function hc(r,c){var u;c?u=c.l:u=r.U++;const f=jt(r.I);be(f,"SID",r.K),be(f,"RID",u),be(f,"AID",r.T),Ps(r,f),r.m&&r.o&&$r(f,r.m,r.o),u=new sn(r,r.j,u,r.B+1),r.m===null&&(u.H=r.o),c&&(r.i=c.D.concat(r.i)),c=fc(r,u,1e3),u.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),Vr(r.h,u),Lr(u,f,c)}function Ps(r,c){r.H&&fe(r.H,function(u,f){be(c,f,u)}),r.l&&Ja({},function(u,f){be(c,f,u)})}function fc(r,c,u){u=Math.min(r.i.length,u);var f=r.l?v(r.l.Na,r.l,r):null;e:{var R=r.i;let P=-1;for(;;){const j=["count="+u];P==-1?0<u?(P=R[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let ve=!0;for(let De=0;De<u;De++){let pe=R[De].g;const Le=R[De].map;if(pe-=P,0>pe)P=Math.max(0,R[De].g-100),ve=!1;else try{Td(Le,j,"req"+pe+"_")}catch{f&&f(Le)}}if(ve){f=j.join("&");break e}}}return r=r.i.splice(0,u),c.D=r,f}function dc(r){if(!r.g&&!r.u){r.Y=1;var c=r.Fa;oe||lt(),ie||(oe(),ie=!0),Qe.add(c,r),r.v=0}}function Hr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=ws(v(r.Fa,r),mc(r,r.v)),r.v++,!0)}t.Fa=function(){if(this.u=null,pc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=ws(v(this.ab,this),r)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,He(10),Si(this),pc(this))};function Wr(r){r.A!=null&&(l.clearTimeout(r.A),r.A=null)}function pc(r){r.g=new sn(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var c=jt(r.qa);be(c,"RID","rpc"),be(c,"SID",r.K),be(c,"AID",r.T),be(c,"CI",r.F?"0":"1"),!r.F&&r.ja&&be(c,"TO",r.ja),be(c,"TYPE","xmlhttp"),Ps(r,c),r.m&&r.o&&$r(c,r.m,r.o),r.L&&(r.g.I=r.L);var u=r.g;r=r.ia,u.L=1,u.v=Ii(jt(c)),u.m=null,u.P=!0,$a(u,r)}t.Za=function(){this.C!=null&&(this.C=null,Si(this),Hr(this),He(19))};function Ci(r){r.C!=null&&(l.clearTimeout(r.C),r.C=null)}function gc(r,c){var u=null;if(r.g==c){Ci(r),Wr(r),r.g=null;var f=2}else if(jr(r.h,c))u=c.D,qa(r.h,c),f=1;else return;if(r.G!=0){if(c.o)if(f==1){u=c.m?c.m.length:0,c=Date.now()-c.F;var R=r.B;f=Nr(),ne(f,new Fa(f,u)),Ai(r)}else dc(r);else if(R=c.s,R==3||R==0&&0<c.X||!(f==1&&Rd(r,c)||f==2&&Hr(r)))switch(u&&0<u.length&&(c=r.h,c.i=c.i.concat(u)),R){case 1:Sn(r,5);break;case 4:Sn(r,10);break;case 3:Sn(r,6);break;default:Sn(r,2)}}}function mc(r,c){let u=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(u*=2),u*c}function Sn(r,c){if(r.j.info("Error code "+c),c==2){var u=v(r.fb,r),f=r.Xa;const R=!f;f=new Tn(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||vi(f,"https"),Ii(f),R?Id(f.toString(),u):bd(f.toString(),u)}else He(2);r.G=0,r.l&&r.l.sa(c),_c(r),uc(r)}t.fb=function(r){r?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function _c(r){if(r.G=0,r.ka=[],r.l){const c=Ka(r.h);(c.length!=0||r.i.length!=0)&&(G(r.ka,c),G(r.ka,r.i),r.h.i.length=0,L(r.i),r.i.length=0),r.l.ra()}}function yc(r,c,u){var f=u instanceof Tn?jt(u):new Tn(u);if(f.g!="")c&&(f.g=c+"."+f.g),wi(f,f.s);else{var R=l.location;f=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var P=new Tn(null);f&&vi(P,f),c&&(P.g=c),R&&wi(P,R),u&&(P.l=u),f=P}return u=r.D,c=r.ya,u&&c&&be(f,u,c),be(f,"VER",r.la),Ps(r,f),f}function vc(r,c,u){if(c&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=r.Ca&&!r.pa?new Ae(new bi({eb:u})):new Ae(r.pa),c.Ha(r.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wc(){}t=wc.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ot(r,c){Q.call(this),this.g=new lc(c),this.l=r,this.h=c&&c.messageUrlParams||null,r=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(r?r["X-WebChannel-Content-Type"]=c.messageContentType:r={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(r?r["X-WebChannel-Client-Profile"]=c.va:r={"X-WebChannel-Client-Profile":c.va}),this.g.S=r,(r=c&&c.Sb)&&!B(r)&&(this.g.m=r),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!B(c)&&(this.g.D=c,r=this.h,r!==null&&c in r&&(r=this.h,c in r&&delete r[c])),this.j=new Xn(this)}x(ot,Q),ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ot.prototype.close=function(){Br(this.g)},ot.prototype.o=function(r){var c=this.g;if(typeof r=="string"){var u={};u.__data__=r,r=u}else this.u&&(u={},u.__data__=Ne(r),r=u);c.i.push(new hd(c.Ya++,r)),c.G==3&&Ai(c)},ot.prototype.N=function(){this.g.l=null,delete this.j,Br(this.g),delete this.g,ot.aa.N.call(this)};function Ic(r){Or.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var c=r.__sm__;if(c){e:{for(const u in c){r=u;break e}r=void 0}(this.i=r)&&(r=this.i,c=c!==null&&r in c?c[r]:void 0),this.data=c}else this.data=r}x(Ic,Or);function bc(){kr.call(this),this.status=1}x(bc,kr);function Xn(r){this.g=r}x(Xn,wc),Xn.prototype.ua=function(){ne(this.g,"a")},Xn.prototype.ta=function(r){ne(this.g,new Ic(r))},Xn.prototype.sa=function(r){ne(this.g,new bc)},Xn.prototype.ra=function(){ne(this.g,"b")},ot.prototype.send=ot.prototype.o,ot.prototype.open=ot.prototype.m,ot.prototype.close=ot.prototype.close,Dr.NO_ERROR=0,Dr.TIMEOUT=8,Dr.HTTP_ERROR=6,ld.COMPLETE="complete",id.EventType=ys,ys.OPEN="a",ys.CLOSE="b",ys.ERROR="c",ys.MESSAGE="d",Q.prototype.listen=Q.prototype.K,Ae.prototype.listenOnce=Ae.prototype.L,Ae.prototype.getLastError=Ae.prototype.Ka,Ae.prototype.getLastErrorCode=Ae.prototype.Ba,Ae.prototype.getStatus=Ae.prototype.Z,Ae.prototype.getResponseJson=Ae.prototype.Oa,Ae.prototype.getResponseText=Ae.prototype.oa,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Ha}).apply(typeof Di<"u"?Di:typeof self<"u"?self:typeof window<"u"?window:{});const Ql="@firebase/firestore",Zl="4.8.0";/**
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
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
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
 */let di="11.10.0";/**
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
 */const ps=new Er("@firebase/firestore");function _t(t,...e){if(ps.logLevel<=ye.DEBUG){const n=e.map(Pa);ps.debug(`Firestore (${di}): ${t}`,...n)}}function Xf(t,...e){if(ps.logLevel<=ye.ERROR){const n=e.map(Pa);ps.error(`Firestore (${di}): ${t}`,...n)}}function iI(t,...e){if(ps.logLevel<=ye.WARN){const n=e.map(Pa);ps.warn(`Firestore (${di}): ${t}`,...n)}}function Pa(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ri(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,Yf(t,s,n)}function Yf(t,e,n){let s=`FIRESTORE (${di}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Xf(s),new Error(s)}function qs(t,e,n,s){let i="Unexpected state";typeof n=="string"?i=n:s=n,t||Yf(e,i,s)}/**
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
 */const le={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class ue extends Tt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ks{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Qf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ze.UNAUTHENTICATED))}shutdown(){}}class oI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aI{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){qs(this.o===void 0,42304);let s=this.i;const i=h=>this.i!==s?(s=this.i,n(h)):Promise.resolve();let o=new Ks;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ks,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},l=h=>{_t("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(_t("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ks)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(_t("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(qs(typeof s.accessToken=="string",31837,{l:s}),new Qf(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qs(e===null||typeof e=="string",2055,{h:e}),new ze(e)}}class cI{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class lI{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new cI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){qs(this.o===void 0,3512);const s=o=>{o.error!=null&&_t("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,_t("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>s(o))};const i=o=>{_t("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):_t("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new eu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(qs(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new eu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */function fI(){return new TextEncoder}/**
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
 */class dI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=hI(40);for(let o=0;o<i.length;++o)s.length<20&&i[o]<n&&(s+=e.charAt(i[o]%62))}return s}}function It(t,e){return t<e?-1:t>e?1:0}function pI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=t.codePointAt(n),i=e.codePointAt(n);if(s!==i){if(s<128&&i<128)return It(s,i);{const o=fI(),a=gI(o.encode(tu(t,n)),o.encode(tu(e,n)));return a!==0?a:It(s,i)}}n+=s>65535?2:1}return It(t.length,e.length)}function tu(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function gI(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return It(t[n],e[n]);return It(t.length,e.length)}/**
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
 */const nu="__name__";class Rt{constructor(e,n,s){n===void 0?n=0:n>e.length&&ri(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&ri(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Rt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rt?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const o=Rt.compareSegments(e.get(i),n.get(i));if(o!==0)return o}return It(e.length,n.length)}static compareSegments(e,n){const s=Rt.isNumericId(e),i=Rt.isNumericId(n);return s&&!i?-1:!s&&i?1:s&&i?Rt.extractNumericId(e).compare(Rt.extractNumericId(n)):pI(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ra.fromString(e.substring(4,e.length-2))}}class ht extends Rt{construct(e,n,s){return new ht(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ue(le.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new ht(n)}static emptyPath(){return new ht([])}}const mI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class On extends Rt{construct(e,n,s){return new On(e,n,s)}static isValidIdentifier(e){return mI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),On.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===nu}static keyField(){return new On([nu])}static fromServerFormat(e){const n=[];let s="",i=0;const o=()=>{if(s.length===0)throw new ue(le.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new ue(le.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new ue(le.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(s+=l,i++):(o(),i++)}if(o(),a)throw new ue(le.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new On(n)}static emptyPath(){return new On([])}}/**
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
 */class Dn{constructor(e){this.path=e}static fromPath(e){return new Dn(ht.fromString(e))}static fromName(e){return new Dn(ht.fromString(e).popFirst(5))}static empty(){return new Dn(ht.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ht.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ht.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Dn(new ht(e.slice()))}}function _I(t,e,n,s){if(e===!0&&s===!0)throw new ue(le.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function vI(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ri(12329,{type:typeof t})}function wI(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ue(le.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vI(t);throw new ue(le.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Re(t,e){const n={typeString:t};return e&&(n.value=e),n}function pi(t,e){if(!yI(t))throw new ue(le.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const i=e[s].typeString,o="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const a=t[s];if(i&&typeof a!==i){n=`JSON field '${s}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){n=`Expected '${s}' field to equal '${o.value}'`;break}}if(n)throw new ue(le.INVALID_ARGUMENT,n);return!0}/**
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
 */const su=-62135596800,iu=1e6;class Ot{static now(){return Ot.fromMillis(Date.now())}static fromDate(e){return Ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*iu);return new Ot(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ue(le.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ue(le.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<su)throw new ue(le.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(le.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/iu}_compareTo(e){return this.seconds===e.seconds?It(this.nanoseconds,e.nanoseconds):It(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ot._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(pi(e,Ot._jsonSchema))return new Ot(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-su;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ot._jsonSchemaVersion="firestore/timestamp/1.0",Ot._jsonSchema={type:Re("string",Ot._jsonSchemaVersion),seconds:Re("number"),nanoseconds:Re("number")};function II(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new bI("Invalid base64 string: "+o):o}}(e);return new Hn(n)}static fromUint8Array(e){const n=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new Hn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return It(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Hn.EMPTY_BYTE_STRING=new Hn("");const $o="(default)";class cr{constructor(e,n){this.projectId=e,this.database=n||$o}static empty(){return new cr("","")}get isDefaultDatabase(){return this.database===$o}isEqual(e){return e instanceof cr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class EI{constructor(e,n=null,s=[],i=[],o=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function TI(t){return new EI(t)}/**
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
 */var ru,ce;(ce=ru||(ru={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Ra([4294967295,4294967295],0);/**
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
 */const SI=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=1048576;function mo(){return typeof document<"u"?document:null}/**
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
 */class CI{constructor(e,n,s=1e3,i=1.5,o=6e4){this.Fi=e,this.timerId=n,this.d_=s,this.E_=i,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-s);i>0&&_t("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */class Oa{constructor(e,n,s,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=o,this.deferred=new Ks,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,o){const a=Date.now()+s,l=new Oa(e,n,a,i,o);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(le.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var ou,au;(au=ou||(ou={})).Fa="default",au.Cache="cache";/**
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
 */function RI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="firestore.googleapis.com",lu=!0;class uu{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(le.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zf,this.ssl=lu}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:lu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=SI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<AI)throw new ue(le.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_I("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=RI((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new ue(le.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new ue(le.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new ue(le.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ed{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(le.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(le.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new rI;switch(s.type){case"firstParty":return new lI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ue(le.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=cu.get(n);s&&(_t("ComponentProvider","Removing Datastore"),cu.delete(n),s.terminate())}(this),Promise.resolve()}}function PI(t,e,n,s={}){var i;t=wI(t,ed);const o=ci(e),a=t._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),h=`${e}:${n}`;o&&(Vh(`https://${h}`),$h("Firestore",!0)),a.host!==Zf&&a.host!==h&&iI("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:s});if(!wn(d,l)&&(t._setSettings(d),s.mockUserToken)){let p,m;if(typeof s.mockUserToken=="string")p=s.mockUserToken,m=ze.MOCK_USER;else{p=f_(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new ue(le.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new ze(v)}t._authCredentials=new oI(new Qf(p,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ka(this.firestore,e,this._query)}}class Nt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Na(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}toJSON(){return{type:Nt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(pi(n,Nt._jsonSchema))return new Nt(e,s||null,new Dn(ht.fromString(n.referencePath)))}}Nt._jsonSchemaVersion="firestore/documentReference/1.0",Nt._jsonSchema={type:Re("string",Nt._jsonSchemaVersion),referencePath:Re("string")};class Na extends ka{constructor(e,n,s){super(e,n,TI(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new Dn(e))}withConverter(e){return new Na(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="AsyncQueue";class fu{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new CI(this,"async_queue_retry"),this.oc=()=>{const s=mo();s&&_t(hu,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const n=mo();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=mo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Ks;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!II(e))throw e;_t(hu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,Xf("INTERNAL UNHANDLED ERROR: ",du(s)),s}).then(s=>(this.nc=!1,s))));return this._c=n,n}enqueueAfterDelay(e,n,s){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=Oa.createAndSchedule(this,e,n,s,o=>this.lc(o));return this.ec.push(i),i}ac(){this.tc&&ri(47125,{hc:du(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function du(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class OI extends ed{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new fu,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fu(e),this._firestoreClient=void 0,await e}}}function kI(t,e){const n=typeof t=="object"?t:ha(),s=typeof t=="string"?t:$o,i=Gn(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const o=u_("firestore");o&&PI(i,...o)}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qt(Hn.fromBase64String(e))}catch(n){throw new ue(le.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qt(Hn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(pi(e,qt._jsonSchema))return qt.fromBase64String(e.bytes)}}qt._jsonSchemaVersion="firestore/bytes/1.0",qt._jsonSchema={type:Re("string",qt._jsonSchemaVersion),bytes:Re("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ue(le.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new On(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Un{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ue(le.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ue(le.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return It(this._lat,e._lat)||It(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Un._jsonSchemaVersion}}static fromJSON(e){if(pi(e,Un._jsonSchema))return new Un(e.latitude,e.longitude)}}Un._jsonSchemaVersion="firestore/geoPoint/1.0",Un._jsonSchema={type:Re("string",Un._jsonSchemaVersion),latitude:Re("number"),longitude:Re("number")};/**
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
 */class Fn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,i){if(s.length!==i.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==i[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Fn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(pi(e,Fn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Fn(e.vectorValues);throw new ue(le.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Fn._jsonSchemaVersion="firestore/vectorValue/1.0",Fn._jsonSchema={type:Re("string",Fn._jsonSchemaVersion),vectorValues:Re("object")};const NI=new RegExp("[~\\*/\\[\\]]");function DI(t,e,n){if(e.search(NI)>=0)throw pu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new td(...e.split("."))._internalPath}catch{throw pu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function pu(t,e,n,s,i){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new ue(le.INVALID_ARGUMENT,o+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,n,s,i,o){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xI extends nd{data(){return super.data()}}function sd(t,e){return typeof e=="string"?DI(t,e):e instanceof td?e._internalPath:e._delegate._internalPath}class xi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cs extends nd{constructor(e,n,s,i,o,a){super(e,n,s,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(sd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(le.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=cs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}cs._jsonSchemaVersion="firestore/documentSnapshot/1.0",cs._jsonSchema={type:Re("string",cs._jsonSchemaVersion),bundleSource:Re("string","DocumentSnapshot"),bundleName:Re("string"),bundle:Re("string")};class Wi extends cs{data(e={}){return super.data(e)}}class Js{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new xi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Wi(this._firestore,this._userDataWriter,s.key,s,new xi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ue(le.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const h=new Wi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new xi(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new Wi(i._firestore,i._userDataWriter,l.doc.key,l.doc,new xi(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:MI(l.type),doc:h,oldIndex:d,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(le.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Js._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=dI.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(n.push(o._document),s.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function MI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ri(61501,{type:t})}}Js._jsonSchemaVersion="firestore/querySnapshot/1.0",Js._jsonSchema={type:Re("string",Js._jsonSchemaVersion),bundleSource:Re("string","QuerySnapshot"),bundleName:Re("string"),bundle:Re("string")};(function(e,n=!0){(function(i){di=i})(gs),Ut(new Et("firestore",(s,{instanceIdentifier:i,options:o})=>{const a=s.getProvider("app").getImmediate(),l=new OI(new aI(s.getProvider("auth-internal")),new uI(a,s.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new ue(le.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cr(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),at(Ql,Zl,e),at(Ql,Zl,"esm2017")})();const LI={apiKey:"AIzaSyBzR2w75nixO9H8zjUbxVajKx0npksSGrg",authDomain:"norsk-cafe.firebaseapp.com",projectId:"norsk-cafe",storageBucket:"norsk-cafe.firebasestorage.app",messagingSenderId:"123232580709",appId:"1:123232580709:web:c6e6dfed117db9d3b0028c",measurementId:void 0},Da=Kh(LI);t0(Da);const ls=nI(Da);kI(Da);const gi=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},UI={class:"header"},FI={class:"header-user"},jI={key:1,class:"profile-menu-wrapper"},VI=["src"],$I={key:0,class:"profile-menu"},BI={__name:"Header",setup(t){const e=br(),n=zi(null),s=zi(!1);_r(()=>{n.value=ls.currentUser,ls.onAuthStateChanged(l=>{n.value=l})});function i(){e.push("/login")}function o(){s.value=!s.value}function a(){ls.signOut(),e.push("/"),s.value=!1}return(l,h)=>(gt(),kt("header",UI,[h[0]||(h[0]=he("h1",{class:"header-title"},"Norsk Cafe",-1)),he("div",FI,[n.value?(gt(),kt("div",jI,[he("img",{src:n.value.photoURL||"https://via.placeholder.com/40",alt:"User Profile",class:"user-icon",onClick:o},null,8,VI),s.value?(gt(),kt("div",$I,[he("button",{class:"menu-item",onClick:a},"Logg ut")])):mg("",!0)])):(gt(),kt("button",{key:0,class:"login-button",onClick:i}," Login "))])]))}},HI=gi(BI,[["__scopeId","data-v-eafe4ad7"]]),WI="data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%23fff'/%3e%3c/svg%3e",zI={class:"footer"},GI={class:"footer-end"},qI={href:"https://github.com/fredrikofstad/norskcafe",target:"_blank",rel:"noopener noreferrer",class:"github-link"},KI=["src"],JI={__name:"Footer",setup(t){return(e,n)=>(gt(),kt("footer",zI,[n[0]||(n[0]=he("div",{class:"footer-start"},[he("span",{class:"copyright"},"© 2025 Fredrik Ofstad")],-1)),he("div",GI,[he("a",qI,[he("img",{src:Mn(WI),alt:"GitHub",class:"github-icon"},null,8,KI)])])]))}},XI=gi(JI,[["__scopeId","data-v-3908bede"]]),YI={class:"page"},QI={class:"main-content"},ZI={__name:"App",setup(t){return(e,n)=>{const s=Dp("router-view");return gt(),kt("div",YI,[xe(HI),he("main",QI,[xe(s)]),xe(XI)])}}},eb={class:"home-page"},tb={__name:"Home",setup(t){const e=br();_r(()=>{ls.currentUser&&e.push("/dashboard")});function n(){e.push("/login")}return(s,i)=>(gt(),kt("div",eb,[he("main",{class:"welcome"},[i[0]||(i[0]=he("h1",null,"Velkommen!",-1)),i[1]||(i[1]=he("p",null,"Her på Norsk Cafe skal vi lære norsk på en morsom og effektiv måte!",-1)),he("button",{class:"start-button",onClick:n}," La oss komme i gang! ")])]))}},nb=gi(tb,[["__scopeId","data-v-966864dd"]]),sb={class:"login-page"},ib={class:"login-content"},rb={class:"login-inner"},ob={class:"gsi-material-button"},ab={class:"gsi-material-button-content-wrapper"},cb={class:"gsi-material-button-icon"},lb={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",style:{width:"24px",height:"24px"}},ub={__name:"Login",setup(t){const e=br();async function n(){const s=new Gt;try{await hw(ls,s),e.push("/dashboard")}catch(i){console.error("Google sign-in failed",i),alert("Google sign-in failed: "+i.message)}}return(s,i)=>(gt(),kt("div",sb,[he("main",ib,[he("div",rb,[i[2]||(i[2]=he("h2",{class:"login-title"},"Velkommen tilbake!",-1)),i[3]||(i[3]=he("p",{class:"login-subtitle"}," Logg inn med Google for å fortsette å lære norsk. ",-1)),he("div",{class:"google-wrapper",onClick:n},[he("button",ob,[he("div",ab,[he("div",cb,[(gt(),kt("svg",lb,i[0]||(i[0]=[gg(`<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0\r
                    14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-6ea9753f></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58\r
                    2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-6ea9753f></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92\r
                    16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-6ea9753f></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15\r
                    1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98\r
                    6.19C6.51 42.62 14.62 48 24 48z" data-v-6ea9753f></path><path fill="none" d="M0 0h48v48H0z" data-v-6ea9753f></path>`,5)])))]),i[1]||(i[1]=he("span",{class:"gsi-material-button-contents"},"Fortsett med Google",-1))])])])])])]))}},hb=gi(ub,[["__scopeId","data-v-6ea9753f"]]),fb={class:"dashboard-page"},db={class:"dashboard-content"},pb={__name:"Dashboard",setup(t){const e=br(),n=zi("");return _r(()=>{const s=ls.currentUser;s?n.value=s.displayName||s.email||"Bruker":e.push("/login")}),(s,i)=>(gt(),kt("div",fb,[he("main",db,[he("h2",null,"Hei "+Iu(n.value)+"!",1),i[0]||(i[0]=he("p",null,"Velkommen til Norsk Cafe sin læringsplattform.",-1)),i[1]||(i[1]=he("section",{class:"courses-card"},[he("h3",null,"Dine kurs"),he("ul",{class:"courses-list"},[he("li",null,"Grunnleggende norsk"),he("li",null,"Norsk samtalepraksis")])],-1))])]))}},gb=gi(pb,[["__scopeId","data-v-5d64056c"]]),mb=[{path:"/",component:nb},{path:"/login",component:hb},{path:"/dashboard",component:gb}],_b=e_({history:Pm("/"),routes:mb});Xg(ZI).use(_b).mount("#app");
