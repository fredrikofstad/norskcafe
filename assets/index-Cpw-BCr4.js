(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function oa(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const be={},ds=[],jt=()=>{},lp=()=>!1,Er=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),aa=t=>t.startsWith("onUpdate:"),Le=Object.assign,la=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cp=Object.prototype.hasOwnProperty,_e=(t,e)=>cp.call(t,e),te=Array.isArray,ps=t=>Tr(t)==="[object Map]",Bu=t=>Tr(t)==="[object Set]",se=t=>typeof t=="function",ke=t=>typeof t=="string",kn=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",Hu=t=>(Te(t)||se(t))&&se(t.then)&&se(t.catch),Wu=Object.prototype.toString,Tr=t=>Wu.call(t),up=t=>Tr(t).slice(8,-1),Gu=t=>Tr(t)==="[object Object]",ca=t=>ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gs=oa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hp=/-(\w)/g,vt=Sr(t=>t.replace(hp,(e,n)=>n?n.toUpperCase():"")),fp=/\B([A-Z])/g,ts=Sr(t=>t.replace(fp,"-$1").toLowerCase()),Ar=Sr(t=>t.charAt(0).toUpperCase()+t.slice(1)),ao=Sr(t=>t?`on${Ar(t)}`:""),Tn=(t,e)=>!Object.is(t,e),lo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},xo=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},dp=t=>{const e=parseFloat(t);return isNaN(e)?t:e},pp=t=>{const e=ke(t)?Number(t):NaN;return isNaN(e)?t:e};let Bl;const Cr=()=>Bl||(Bl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ua(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ke(s)?vp(s):ua(s);if(i)for(const o in i)e[o]=i[o]}return e}else if(ke(t)||Te(t))return t}const gp=/;(?![^(]*\))/g,mp=/:([^]+)/,_p=/\/\*[^]*?\*\//g;function vp(t){const e={};return t.replace(_p,"").split(gp).forEach(n=>{if(n){const s=n.split(mp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ha(t){let e="";if(ke(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const s=ha(t[n]);s&&(e+=s+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const yp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wp=oa(yp);function zu(t){return!!t||t===""}const qu=t=>!!(t&&t.__v_isRef===!0),Se=t=>ke(t)?t:t==null?"":te(t)||Te(t)&&(t.toString===Wu||!se(t.toString))?qu(t)?Se(t.value):JSON.stringify(t,Ku,2):String(t),Ku=(t,e)=>qu(e)?Ku(t,e.value):ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],o)=>(n[co(s,o)+" =>"]=i,n),{})}:Bu(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>co(n))}:kn(e)?co(e):Te(e)&&!te(e)&&!Gu(e)?String(e):e,co=(t,e="")=>{var n;return kn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tt;class Ip{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=tt,!e&&tt&&(this.index=(tt.scopes||(tt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=tt;try{return tt=this,e()}finally{tt=n}}}on(){++this._on===1&&(this.prevScope=tt,tt=this)}off(){this._on>0&&--this._on===0&&(tt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function bp(){return tt}let Ie;const uo=new WeakSet;class Ju{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,tt&&tt.active&&tt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,uo.has(this)&&(uo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hl(this),Qu(this);const e=Ie,n=St;Ie=this,St=!0;try{return this.fn()}finally{Zu(this),Ie=e,St=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)pa(e);this.deps=this.depsTail=void 0,Hl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?uo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Lo(this)&&this.run()}get dirty(){return Lo(this)}}let Xu=0,zs,qs;function Yu(t,e=!1){if(t.flags|=8,e){t.next=qs,qs=t;return}t.next=zs,zs=t}function fa(){Xu++}function da(){if(--Xu>0)return;if(qs){let e=qs;for(qs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;zs;){let e=zs;for(zs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Qu(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zu(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),pa(s),Ep(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Lo(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(eh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function eh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===oi)||(t.globalVersion=oi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Lo(t))))return;t.flags|=2;const e=t.dep,n=Ie,s=St;Ie=t,St=!0;try{Qu(t);const i=t.fn(t._value);(e.version===0||Tn(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Ie=n,St=s,Zu(t),t.flags&=-3}}function pa(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)pa(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ep(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let St=!0;const th=[];function tn(){th.push(St),St=!1}function nn(){const t=th.pop();St=t===void 0?!0:t}function Hl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ie;Ie=void 0;try{e()}finally{Ie=n}}}let oi=0;class Tp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ga{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ie||!St||Ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ie)n=this.activeLink=new Tp(Ie,this),Ie.deps?(n.prevDep=Ie.depsTail,Ie.depsTail.nextDep=n,Ie.depsTail=n):Ie.deps=Ie.depsTail=n,nh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Ie.depsTail,n.nextDep=void 0,Ie.depsTail.nextDep=n,Ie.depsTail=n,Ie.deps===n&&(Ie.deps=s)}return n}trigger(e){this.version++,oi++,this.notify(e)}notify(e){fa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{da()}}}function nh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)nh(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Mo=new WeakMap,Gn=Symbol(""),Uo=Symbol(""),ai=Symbol("");function ze(t,e,n){if(St&&Ie){let s=Mo.get(t);s||Mo.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new ga),i.map=s,i.key=n),i.track()}}function Xt(t,e,n,s,i,o){const a=Mo.get(t);if(!a){oi++;return}const c=u=>{u&&u.trigger()};if(fa(),e==="clear")a.forEach(c);else{const u=te(t),f=u&&ca(n);if(u&&n==="length"){const d=Number(s);a.forEach((g,w)=>{(w==="length"||w===ai||!kn(w)&&w>=d)&&c(g)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),f&&c(a.get(ai)),e){case"add":u?f&&c(a.get("length")):(c(a.get(Gn)),ps(t)&&c(a.get(Uo)));break;case"delete":u||(c(a.get(Gn)),ps(t)&&c(a.get(Uo)));break;case"set":ps(t)&&c(a.get(Gn));break}}da()}function us(t){const e=ge(t);return e===t?e:(ze(e,"iterate",ai),mt(t)?e:e.map(Ve))}function Rr(t){return ze(t=ge(t),"iterate",ai),t}const Sp={__proto__:null,[Symbol.iterator](){return ho(this,Symbol.iterator,Ve)},concat(...t){return us(this).concat(...t.map(e=>te(e)?us(e):e))},entries(){return ho(this,"entries",t=>(t[1]=Ve(t[1]),t))},every(t,e){return zt(this,"every",t,e,void 0,arguments)},filter(t,e){return zt(this,"filter",t,e,n=>n.map(Ve),arguments)},find(t,e){return zt(this,"find",t,e,Ve,arguments)},findIndex(t,e){return zt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return zt(this,"findLast",t,e,Ve,arguments)},findLastIndex(t,e){return zt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return zt(this,"forEach",t,e,void 0,arguments)},includes(...t){return fo(this,"includes",t)},indexOf(...t){return fo(this,"indexOf",t)},join(t){return us(this).join(t)},lastIndexOf(...t){return fo(this,"lastIndexOf",t)},map(t,e){return zt(this,"map",t,e,void 0,arguments)},pop(){return $s(this,"pop")},push(...t){return $s(this,"push",t)},reduce(t,...e){return Wl(this,"reduce",t,e)},reduceRight(t,...e){return Wl(this,"reduceRight",t,e)},shift(){return $s(this,"shift")},some(t,e){return zt(this,"some",t,e,void 0,arguments)},splice(...t){return $s(this,"splice",t)},toReversed(){return us(this).toReversed()},toSorted(t){return us(this).toSorted(t)},toSpliced(...t){return us(this).toSpliced(...t)},unshift(...t){return $s(this,"unshift",t)},values(){return ho(this,"values",Ve)}};function ho(t,e,n){const s=Rr(t),i=s[e]();return s!==t&&!mt(t)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.value&&(o.value=n(o.value)),o}),i}const Ap=Array.prototype;function zt(t,e,n,s,i,o){const a=Rr(t),c=a!==t&&!mt(t),u=a[e];if(u!==Ap[e]){const g=u.apply(t,o);return c?Ve(g):g}let f=n;a!==t&&(c?f=function(g,w){return n.call(this,Ve(g),w,t)}:n.length>2&&(f=function(g,w){return n.call(this,g,w,t)}));const d=u.call(a,f,s);return c&&i?i(d):d}function Wl(t,e,n,s){const i=Rr(t);let o=n;return i!==t&&(mt(t)?n.length>3&&(o=function(a,c,u){return n.call(this,a,c,u,t)}):o=function(a,c,u){return n.call(this,a,Ve(c),u,t)}),i[e](o,...s)}function fo(t,e,n){const s=ge(t);ze(s,"iterate",ai);const i=s[e](...n);return(i===-1||i===!1)&&va(n[0])?(n[0]=ge(n[0]),s[e](...n)):i}function $s(t,e,n=[]){tn(),fa();const s=ge(t)[e].apply(t,n);return da(),nn(),s}const Cp=oa("__proto__,__v_isRef,__isVue"),sh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kn));function Rp(t){kn(t)||(t=String(t));const e=ge(this);return ze(e,"has",t),e.hasOwnProperty(t)}class ih{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(i?o?Fp:lh:o?ah:oh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const a=te(e);if(!i){let u;if(a&&(u=Sp[n]))return u;if(n==="hasOwnProperty")return Rp}const c=Reflect.get(e,n,qe(e)?e:s);return(kn(n)?sh.has(n):Cp(n))||(i||ze(e,"get",n),o)?c:qe(c)?a&&ca(n)?c:c.value:Te(c)?i?uh(c):Pr(c):c}}class rh extends ih{constructor(e=!1){super(!1,e)}set(e,n,s,i){let o=e[n];if(!this._isShallow){const u=Cn(o);if(!mt(s)&&!Cn(s)&&(o=ge(o),s=ge(s)),!te(e)&&qe(o)&&!qe(s))return u?!1:(o.value=s,!0)}const a=te(e)&&ca(n)?Number(n)<e.length:_e(e,n),c=Reflect.set(e,n,s,qe(e)?e:i);return e===ge(i)&&(a?Tn(s,o)&&Xt(e,"set",n,s):Xt(e,"add",n,s)),c}deleteProperty(e,n){const s=_e(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Xt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!kn(n)||!sh.has(n))&&ze(e,"has",n),s}ownKeys(e){return ze(e,"iterate",te(e)?"length":Gn),Reflect.ownKeys(e)}}class Pp extends ih{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const kp=new rh,Op=new Pp,Np=new rh(!0);const Fo=t=>t,$i=t=>Reflect.getPrototypeOf(t);function Dp(t,e,n){return function(...s){const i=this.__v_raw,o=ge(i),a=ps(o),c=t==="entries"||t===Symbol.iterator&&a,u=t==="keys"&&a,f=i[t](...s),d=n?Fo:e?ir:Ve;return!e&&ze(o,"iterate",u?Uo:Gn),{next(){const{value:g,done:w}=f.next();return w?{value:g,done:w}:{value:c?[d(g[0]),d(g[1])]:d(g),done:w}},[Symbol.iterator](){return this}}}}function Bi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function xp(t,e){const n={get(i){const o=this.__v_raw,a=ge(o),c=ge(i);t||(Tn(i,c)&&ze(a,"get",i),ze(a,"get",c));const{has:u}=$i(a),f=e?Fo:t?ir:Ve;if(u.call(a,i))return f(o.get(i));if(u.call(a,c))return f(o.get(c));o!==a&&o.get(i)},get size(){const i=this.__v_raw;return!t&&ze(ge(i),"iterate",Gn),Reflect.get(i,"size",i)},has(i){const o=this.__v_raw,a=ge(o),c=ge(i);return t||(Tn(i,c)&&ze(a,"has",i),ze(a,"has",c)),i===c?o.has(i):o.has(i)||o.has(c)},forEach(i,o){const a=this,c=a.__v_raw,u=ge(c),f=e?Fo:t?ir:Ve;return!t&&ze(u,"iterate",Gn),c.forEach((d,g)=>i.call(o,f(d),f(g),a))}};return Le(n,t?{add:Bi("add"),set:Bi("set"),delete:Bi("delete"),clear:Bi("clear")}:{add(i){!e&&!mt(i)&&!Cn(i)&&(i=ge(i));const o=ge(this);return $i(o).has.call(o,i)||(o.add(i),Xt(o,"add",i,i)),this},set(i,o){!e&&!mt(o)&&!Cn(o)&&(o=ge(o));const a=ge(this),{has:c,get:u}=$i(a);let f=c.call(a,i);f||(i=ge(i),f=c.call(a,i));const d=u.call(a,i);return a.set(i,o),f?Tn(o,d)&&Xt(a,"set",i,o):Xt(a,"add",i,o),this},delete(i){const o=ge(this),{has:a,get:c}=$i(o);let u=a.call(o,i);u||(i=ge(i),u=a.call(o,i)),c&&c.call(o,i);const f=o.delete(i);return u&&Xt(o,"delete",i,void 0),f},clear(){const i=ge(this),o=i.size!==0,a=i.clear();return o&&Xt(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Dp(i,t,e)}),n}function ma(t,e){const n=xp(t,e);return(s,i,o)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(_e(n,i)&&i in s?n:s,i,o)}const Lp={get:ma(!1,!1)},Mp={get:ma(!1,!0)},Up={get:ma(!0,!1)};const oh=new WeakMap,ah=new WeakMap,lh=new WeakMap,Fp=new WeakMap;function jp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vp(t){return t.__v_skip||!Object.isExtensible(t)?0:jp(up(t))}function Pr(t){return Cn(t)?t:_a(t,!1,kp,Lp,oh)}function ch(t){return _a(t,!1,Np,Mp,ah)}function uh(t){return _a(t,!0,Op,Up,lh)}function _a(t,e,n,s,i){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=Vp(t);if(o===0)return t;const a=i.get(t);if(a)return a;const c=new Proxy(t,o===2?s:n);return i.set(t,c),c}function gs(t){return Cn(t)?gs(t.__v_raw):!!(t&&t.__v_isReactive)}function Cn(t){return!!(t&&t.__v_isReadonly)}function mt(t){return!!(t&&t.__v_isShallow)}function va(t){return t?!!t.__v_raw:!1}function ge(t){const e=t&&t.__v_raw;return e?ge(e):t}function $p(t){return!_e(t,"__v_skip")&&Object.isExtensible(t)&&xo(t,"__v_skip",!0),t}const Ve=t=>Te(t)?Pr(t):t,ir=t=>Te(t)?uh(t):t;function qe(t){return t?t.__v_isRef===!0:!1}function zn(t){return hh(t,!1)}function Bp(t){return hh(t,!0)}function hh(t,e){return qe(t)?t:new Hp(t,e)}class Hp{constructor(e,n){this.dep=new ga,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ge(e),this._value=n?e:Ve(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||mt(e)||Cn(e);e=s?e:ge(e),Tn(e,n)&&(this._rawValue=e,this._value=s?e:Ve(e),this.dep.trigger())}}function pt(t){return qe(t)?t.value:t}const Wp={get:(t,e,n)=>e==="__v_raw"?t:pt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return qe(i)&&!qe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function fh(t){return gs(t)?t:new Proxy(t,Wp)}class Gp{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ga(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=oi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ie!==this)return Yu(this,!0),!0}get value(){const e=this.dep.track();return eh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function zp(t,e,n=!1){let s,i;return se(t)?s=t:(s=t.get,i=t.set),new Gp(s,i,n)}const Hi={},rr=new WeakMap;let Fn;function qp(t,e=!1,n=Fn){if(n){let s=rr.get(n);s||rr.set(n,s=[]),s.push(t)}}function Kp(t,e,n=be){const{immediate:s,deep:i,once:o,scheduler:a,augmentJob:c,call:u}=n,f=H=>i?H:mt(H)||i===!1||i===0?wn(H,1):wn(H);let d,g,w,A,N=!1,M=!1;if(qe(t)?(g=()=>t.value,N=mt(t)):gs(t)?(g=()=>f(t),N=!0):te(t)?(M=!0,N=t.some(H=>gs(H)||mt(H)),g=()=>t.map(H=>{if(qe(H))return H.value;if(gs(H))return f(H);if(se(H))return u?u(H,2):H()})):se(t)?e?g=u?()=>u(t,2):t:g=()=>{if(w){tn();try{w()}finally{nn()}}const H=Fn;Fn=d;try{return u?u(t,3,[A]):t(A)}finally{Fn=H}}:g=jt,e&&i){const H=g,ie=i===!0?1/0:i;g=()=>wn(H(),ie)}const q=bp(),K=()=>{d.stop(),q&&q.active&&la(q.effects,d)};if(o&&e){const H=e;e=(...ie)=>{H(...ie),K()}}let $=M?new Array(t.length).fill(Hi):Hi;const B=H=>{if(!(!(d.flags&1)||!d.dirty&&!H))if(e){const ie=d.run();if(i||N||(M?ie.some((re,S)=>Tn(re,$[S])):Tn(ie,$))){w&&w();const re=Fn;Fn=d;try{const S=[ie,$===Hi?void 0:M&&$[0]===Hi?[]:$,A];$=ie,u?u(e,3,S):e(...S)}finally{Fn=re}}}else d.run()};return c&&c(B),d=new Ju(g),d.scheduler=a?()=>a(B,!1):B,A=H=>qp(H,!1,d),w=d.onStop=()=>{const H=rr.get(d);if(H){if(u)u(H,4);else for(const ie of H)ie();rr.delete(d)}},e?s?B(!0):$=d.run():a?a(B.bind(null,!0),!0):d.run(),K.pause=d.pause.bind(d),K.resume=d.resume.bind(d),K.stop=K,K}function wn(t,e=1/0,n){if(e<=0||!Te(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,qe(t))wn(t.value,e,n);else if(te(t))for(let s=0;s<t.length;s++)wn(t[s],e,n);else if(Bu(t)||ps(t))t.forEach(s=>{wn(s,e,n)});else if(Gu(t)){for(const s in t)wn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&wn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vi(t,e,n,s){try{return s?t(...s):t()}catch(i){kr(i,e,n)}}function Rt(t,e,n,s){if(se(t)){const i=vi(t,e,n,s);return i&&Hu(i)&&i.catch(o=>{kr(o,e,n)}),i}if(te(t)){const i=[];for(let o=0;o<t.length;o++)i.push(Rt(t[o],e,n,s));return i}}function kr(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||be;if(e){let c=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](t,u,f)===!1)return}c=c.parent}if(o){tn(),vi(o,null,10,[t,u,f]),nn();return}}Jp(t,n,i,s,a)}function Jp(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Ye=[];let xt=-1;const ms=[];let mn=null,hs=0;const dh=Promise.resolve();let or=null;function ph(t){const e=or||dh;return t?e.then(this?t.bind(this):t):e}function Xp(t){let e=xt+1,n=Ye.length;for(;e<n;){const s=e+n>>>1,i=Ye[s],o=li(i);o<t||o===t&&i.flags&2?e=s+1:n=s}return e}function ya(t){if(!(t.flags&1)){const e=li(t),n=Ye[Ye.length-1];!n||!(t.flags&2)&&e>=li(n)?Ye.push(t):Ye.splice(Xp(e),0,t),t.flags|=1,gh()}}function gh(){or||(or=dh.then(_h))}function Yp(t){te(t)?ms.push(...t):mn&&t.id===-1?mn.splice(hs+1,0,t):t.flags&1||(ms.push(t),t.flags|=1),gh()}function Gl(t,e,n=xt+1){for(;n<Ye.length;n++){const s=Ye[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ye.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function mh(t){if(ms.length){const e=[...new Set(ms)].sort((n,s)=>li(n)-li(s));if(ms.length=0,mn){mn.push(...e);return}for(mn=e,hs=0;hs<mn.length;hs++){const n=mn[hs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}mn=null,hs=0}}const li=t=>t.id==null?t.flags&2?-1:1/0:t.id;function _h(t){try{for(xt=0;xt<Ye.length;xt++){const e=Ye[xt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;xt<Ye.length;xt++){const e=Ye[xt];e&&(e.flags&=-2)}xt=-1,Ye.length=0,mh(),or=null,(Ye.length||ms.length)&&_h()}}let gt=null,vh=null;function ar(t){const e=gt;return gt=t,vh=t&&t.type.__scopeId||null,e}function wa(t,e=gt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&sc(-1);const o=ar(e);let a;try{a=t(...i)}finally{ar(o),s._d&&sc(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function xn(t,e,n,s){const i=t.dirs,o=e&&e.dirs;for(let a=0;a<i.length;a++){const c=i[a];o&&(c.oldValue=o[a].value);let u=c.dir[s];u&&(tn(),Rt(u,n,8,[t.el,c,t,e]),nn())}}const Qp=Symbol("_vte"),yh=t=>t.__isTeleport,_n=Symbol("_leaveCb"),Wi=Symbol("_enterCb");function Zp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Dr(()=>{t.isMounted=!0}),Ia(()=>{t.isUnmounting=!0}),t}const ht=[Function,Array],wh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ht,onEnter:ht,onAfterEnter:ht,onEnterCancelled:ht,onBeforeLeave:ht,onLeave:ht,onAfterLeave:ht,onLeaveCancelled:ht,onBeforeAppear:ht,onAppear:ht,onAfterAppear:ht,onAppearCancelled:ht},Ih=t=>{const e=t.subTree;return e.component?Ih(e.component):e},eg={name:"BaseTransition",props:wh,setup(t,{slots:e}){const n=Qg(),s=Zp();return()=>{const i=e.default&&Th(e.default(),!0);if(!i||!i.length)return;const o=bh(i),a=ge(t),{mode:c}=a;if(s.isLeaving)return po(o);const u=zl(o);if(!u)return po(o);let f=jo(u,a,s,n,g=>f=g);u.type!==Qe&&ci(u,f);let d=n.subTree&&zl(n.subTree);if(d&&d.type!==Qe&&!Vn(u,d)&&Ih(n).type!==Qe){let g=jo(d,a,s,n);if(ci(d,g),c==="out-in"&&u.type!==Qe)return s.isLeaving=!0,g.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete g.afterLeave,d=void 0},po(o);c==="in-out"&&u.type!==Qe?g.delayLeave=(w,A,N)=>{const M=Eh(s,d);M[String(d.key)]=d,w[_n]=()=>{A(),w[_n]=void 0,delete f.delayedLeave,d=void 0},f.delayedLeave=()=>{N(),delete f.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return o}}};function bh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Qe){e=n;break}}return e}const tg=eg;function Eh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function jo(t,e,n,s,i){const{appear:o,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:f,onAfterEnter:d,onEnterCancelled:g,onBeforeLeave:w,onLeave:A,onAfterLeave:N,onLeaveCancelled:M,onBeforeAppear:q,onAppear:K,onAfterAppear:$,onAppearCancelled:B}=e,H=String(t.key),ie=Eh(n,t),re=(m,E)=>{m&&Rt(m,s,9,E)},S=(m,E)=>{const T=E[1];re(m,E),te(m)?m.every(b=>b.length<=1)&&T():m.length<=1&&T()},_={mode:a,persisted:c,beforeEnter(m){let E=u;if(!n.isMounted)if(o)E=q||u;else return;m[_n]&&m[_n](!0);const T=ie[H];T&&Vn(t,T)&&T.el[_n]&&T.el[_n](),re(E,[m])},enter(m){let E=f,T=d,b=g;if(!n.isMounted)if(o)E=K||f,T=$||d,b=B||g;else return;let y=!1;const ye=m[Wi]=Ne=>{y||(y=!0,Ne?re(b,[m]):re(T,[m]),_.delayedLeave&&_.delayedLeave(),m[Wi]=void 0)};E?S(E,[m,ye]):ye()},leave(m,E){const T=String(t.key);if(m[Wi]&&m[Wi](!0),n.isUnmounting)return E();re(w,[m]);let b=!1;const y=m[_n]=ye=>{b||(b=!0,E(),ye?re(M,[m]):re(N,[m]),m[_n]=void 0,ie[T]===t&&delete ie[T])};ie[T]=t,A?S(A,[m,y]):y()},clone(m){const E=jo(m,e,n,s,i);return i&&i(E),E}};return _}function po(t){if(Or(t))return t=Rn(t),t.children=null,t}function zl(t){if(!Or(t))return yh(t.type)&&t.children?bh(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&se(n.default))return n.default()}}function ci(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ci(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Th(t,e=!1,n){let s=[],i=0;for(let o=0;o<t.length;o++){let a=t[o];const c=n==null?a.key:String(n)+String(a.key!=null?a.key:o);a.type===ft?(a.patchFlag&128&&i++,s=s.concat(Th(a.children,e,c))):(e||a.type!==Qe)&&s.push(c!=null?Rn(a,{key:c}):a)}if(i>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function Sh(t,e){return se(t)?Le({name:t.name},e,{setup:t}):t}function Ah(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ks(t,e,n,s,i=!1){if(te(t)){t.forEach((N,M)=>Ks(N,e&&(te(e)?e[M]:e),n,s,i));return}if(Js(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ks(t,e,n,s.component.subTree);return}const o=s.shapeFlag&4?Sa(s.component):s.el,a=i?null:o,{i:c,r:u}=t,f=e&&e.r,d=c.refs===be?c.refs={}:c.refs,g=c.setupState,w=ge(g),A=g===be?()=>!1:N=>_e(w,N);if(f!=null&&f!==u&&(ke(f)?(d[f]=null,A(f)&&(g[f]=null)):qe(f)&&(f.value=null)),se(u))vi(u,c,12,[a,d]);else{const N=ke(u),M=qe(u);if(N||M){const q=()=>{if(t.f){const K=N?A(u)?g[u]:d[u]:u.value;i?te(K)&&la(K,o):te(K)?K.includes(o)||K.push(o):N?(d[u]=[o],A(u)&&(g[u]=d[u])):(u.value=[o],t.k&&(d[t.k]=u.value))}else N?(d[u]=a,A(u)&&(g[u]=a)):M&&(u.value=a,t.k&&(d[t.k]=a))};a?(q.id=-1,it(q,n)):q()}}}Cr().requestIdleCallback;Cr().cancelIdleCallback;const Js=t=>!!t.type.__asyncLoader,Or=t=>t.type.__isKeepAlive;function ng(t,e){Ch(t,"a",e)}function sg(t,e){Ch(t,"da",e)}function Ch(t,e,n=Be){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Nr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Or(i.parent.vnode)&&ig(s,e,n,i),i=i.parent}}function ig(t,e,n,s){const i=Nr(e,t,s,!0);Rh(()=>{la(s[e],i)},n)}function Nr(t,e,n=Be,s=!1){if(n){const i=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{tn();const c=yi(n),u=Rt(e,n,t,a);return c(),nn(),u});return s?i.unshift(o):i.push(o),o}}const on=t=>(e,n=Be)=>{(!hi||t==="sp")&&Nr(t,(...s)=>e(...s),n)},rg=on("bm"),Dr=on("m"),og=on("bu"),ag=on("u"),Ia=on("bum"),Rh=on("um"),lg=on("sp"),cg=on("rtg"),ug=on("rtc");function hg(t,e=Be){Nr("ec",t,e)}const fg="components";function Ph(t,e){return pg(fg,t,!0,e)||t}const dg=Symbol.for("v-ndc");function pg(t,e,n=!0,s=!1){const i=gt||Be;if(i){const o=i.type;{const c=sm(o,!1);if(c&&(c===e||c===vt(e)||c===Ar(vt(e))))return o}const a=ql(i[t]||o[t],e)||ql(i.appContext[t],e);return!a&&s?o:a}}function ql(t,e){return t&&(t[e]||t[vt(e)]||t[Ar(vt(e))])}function Kl(t,e,n,s){let i;const o=n,a=te(t);if(a||ke(t)){const c=a&&gs(t);let u=!1,f=!1;c&&(u=!mt(t),f=Cn(t),t=Rr(t)),i=new Array(t.length);for(let d=0,g=t.length;d<g;d++)i[d]=e(u?f?ir(Ve(t[d])):Ve(t[d]):t[d],d,void 0,o)}else if(typeof t=="number"){i=new Array(t);for(let c=0;c<t;c++)i[c]=e(c+1,c,void 0,o)}else if(Te(t))if(t[Symbol.iterator])i=Array.from(t,(c,u)=>e(c,u,void 0,o));else{const c=Object.keys(t);i=new Array(c.length);for(let u=0,f=c.length;u<f;u++){const d=c[u];i[u]=e(t[d],d,u,o)}}else i=[];return i}const Vo=t=>t?Xh(t)?Sa(t):Vo(t.parent):null,Xs=Le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Vo(t.parent),$root:t=>Vo(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Oh(t),$forceUpdate:t=>t.f||(t.f=()=>{ya(t.update)}),$nextTick:t=>t.n||(t.n=ph.bind(t.proxy)),$watch:t=>Lg.bind(t)}),go=(t,e)=>t!==be&&!t.__isScriptSetup&&_e(t,e),gg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:o,accessCache:a,type:c,appContext:u}=t;let f;if(e[0]!=="$"){const A=a[e];if(A!==void 0)switch(A){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return o[e]}else{if(go(s,e))return a[e]=1,s[e];if(i!==be&&_e(i,e))return a[e]=2,i[e];if((f=t.propsOptions[0])&&_e(f,e))return a[e]=3,o[e];if(n!==be&&_e(n,e))return a[e]=4,n[e];$o&&(a[e]=0)}}const d=Xs[e];let g,w;if(d)return e==="$attrs"&&ze(t.attrs,"get",""),d(t);if((g=c.__cssModules)&&(g=g[e]))return g;if(n!==be&&_e(n,e))return a[e]=4,n[e];if(w=u.config.globalProperties,_e(w,e))return w[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:o}=t;return go(i,e)?(i[e]=n,!0):s!==be&&_e(s,e)?(s[e]=n,!0):_e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:o}},a){let c;return!!n[a]||t!==be&&_e(t,a)||go(e,a)||(c=o[0])&&_e(c,a)||_e(s,a)||_e(Xs,a)||_e(i.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Jl(t){return te(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let $o=!0;function mg(t){const e=Oh(t),n=t.proxy,s=t.ctx;$o=!1,e.beforeCreate&&Xl(e.beforeCreate,t,"bc");const{data:i,computed:o,methods:a,watch:c,provide:u,inject:f,created:d,beforeMount:g,mounted:w,beforeUpdate:A,updated:N,activated:M,deactivated:q,beforeDestroy:K,beforeUnmount:$,destroyed:B,unmounted:H,render:ie,renderTracked:re,renderTriggered:S,errorCaptured:_,serverPrefetch:m,expose:E,inheritAttrs:T,components:b,directives:y,filters:ye}=e;if(f&&_g(f,s,null),a)for(const le in a){const ae=a[le];se(ae)&&(s[le]=ae.bind(n))}if(i){const le=i.call(n,n);Te(le)&&(t.data=Pr(le))}if($o=!0,o)for(const le in o){const ae=o[le],st=se(ae)?ae.bind(n,n):se(ae.get)?ae.get.bind(n,n):jt,yt=!se(ae)&&se(ae.set)?ae.set.bind(n):jt,at=dt({get:st,set:yt});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>at.value,set:Ce=>at.value=Ce})}if(c)for(const le in c)kh(c[le],s,n,le);if(u){const le=se(u)?u.call(n):u;Reflect.ownKeys(le).forEach(ae=>{Ki(ae,le[ae])})}d&&Xl(d,t,"c");function Ae(le,ae){te(ae)?ae.forEach(st=>le(st.bind(n))):ae&&le(ae.bind(n))}if(Ae(rg,g),Ae(Dr,w),Ae(og,A),Ae(ag,N),Ae(ng,M),Ae(sg,q),Ae(hg,_),Ae(ug,re),Ae(cg,S),Ae(Ia,$),Ae(Rh,H),Ae(lg,m),te(E))if(E.length){const le=t.exposed||(t.exposed={});E.forEach(ae=>{Object.defineProperty(le,ae,{get:()=>n[ae],set:st=>n[ae]=st})})}else t.exposed||(t.exposed={});ie&&t.render===jt&&(t.render=ie),T!=null&&(t.inheritAttrs=T),b&&(t.components=b),y&&(t.directives=y),m&&Ah(t)}function _g(t,e,n=jt){te(t)&&(t=Bo(t));for(const s in t){const i=t[s];let o;Te(i)?"default"in i?o=Vt(i.from||s,i.default,!0):o=Vt(i.from||s):o=Vt(i),qe(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Xl(t,e,n){Rt(te(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function kh(t,e,n,s){let i=s.includes(".")?Wh(n,s):()=>n[s];if(ke(t)){const o=e[t];se(o)&&Ji(i,o)}else if(se(t))Ji(i,t.bind(n));else if(Te(t))if(te(t))t.forEach(o=>kh(o,e,n,s));else{const o=se(t.handler)?t.handler.bind(n):e[t.handler];se(o)&&Ji(i,o,t)}}function Oh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:!i.length&&!n&&!s?u=e:(u={},i.length&&i.forEach(f=>lr(u,f,a,!0)),lr(u,e,a)),Te(e)&&o.set(e,u),u}function lr(t,e,n,s=!1){const{mixins:i,extends:o}=e;o&&lr(t,o,n,!0),i&&i.forEach(a=>lr(t,a,n,!0));for(const a in e)if(!(s&&a==="expose")){const c=vg[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const vg={data:Yl,props:Ql,emits:Ql,methods:Ws,computed:Ws,beforeCreate:Je,created:Je,beforeMount:Je,mounted:Je,beforeUpdate:Je,updated:Je,beforeDestroy:Je,beforeUnmount:Je,destroyed:Je,unmounted:Je,activated:Je,deactivated:Je,errorCaptured:Je,serverPrefetch:Je,components:Ws,directives:Ws,watch:wg,provide:Yl,inject:yg};function Yl(t,e){return e?t?function(){return Le(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function yg(t,e){return Ws(Bo(t),Bo(e))}function Bo(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Je(t,e){return t?[...new Set([].concat(t,e))]:e}function Ws(t,e){return t?Le(Object.create(null),t,e):e}function Ql(t,e){return t?te(t)&&te(e)?[...new Set([...t,...e])]:Le(Object.create(null),Jl(t),Jl(e??{})):e}function wg(t,e){if(!t)return e;if(!e)return t;const n=Le(Object.create(null),t);for(const s in e)n[s]=Je(t[s],e[s]);return n}function Nh(){return{app:null,config:{isNativeTag:lp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ig=0;function bg(t,e){return function(s,i=null){se(s)||(s=Le({},s)),i!=null&&!Te(i)&&(i=null);const o=Nh(),a=new WeakSet,c=[];let u=!1;const f=o.app={_uid:Ig++,_component:s,_props:i,_container:null,_context:o,_instance:null,version:rm,get config(){return o.config},set config(d){},use(d,...g){return a.has(d)||(d&&se(d.install)?(a.add(d),d.install(f,...g)):se(d)&&(a.add(d),d(f,...g))),f},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),f},component(d,g){return g?(o.components[d]=g,f):o.components[d]},directive(d,g){return g?(o.directives[d]=g,f):o.directives[d]},mount(d,g,w){if(!u){const A=f._ceVNode||De(s,i);return A.appContext=o,w===!0?w="svg":w===!1&&(w=void 0),t(A,d,w),u=!0,f._container=d,d.__vue_app__=f,Sa(A.component)}},onUnmount(d){c.push(d)},unmount(){u&&(Rt(c,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(d,g){return o.provides[d]=g,f},runWithContext(d){const g=_s;_s=f;try{return d()}finally{_s=g}}};return f}}let _s=null;function Ki(t,e){if(Be){let n=Be.provides;const s=Be.parent&&Be.parent.provides;s===n&&(n=Be.provides=Object.create(s)),n[t]=e}}function Vt(t,e,n=!1){const s=Be||gt;if(s||_s){let i=_s?_s._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&se(e)?e.call(s&&s.proxy):e}}const Dh={},xh=()=>Object.create(Dh),Lh=t=>Object.getPrototypeOf(t)===Dh;function Eg(t,e,n,s=!1){const i={},o=xh();t.propsDefaults=Object.create(null),Mh(t,e,i,o);for(const a in t.propsOptions[0])a in i||(i[a]=void 0);n?t.props=s?i:ch(i):t.type.props?t.props=i:t.props=o,t.attrs=o}function Tg(t,e,n,s){const{props:i,attrs:o,vnode:{patchFlag:a}}=t,c=ge(i),[u]=t.propsOptions;let f=!1;if((s||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let g=0;g<d.length;g++){let w=d[g];if(xr(t.emitsOptions,w))continue;const A=e[w];if(u)if(_e(o,w))A!==o[w]&&(o[w]=A,f=!0);else{const N=vt(w);i[N]=Ho(u,c,N,A,t,!1)}else A!==o[w]&&(o[w]=A,f=!0)}}}else{Mh(t,e,i,o)&&(f=!0);let d;for(const g in c)(!e||!_e(e,g)&&((d=ts(g))===g||!_e(e,d)))&&(u?n&&(n[g]!==void 0||n[d]!==void 0)&&(i[g]=Ho(u,c,g,void 0,t,!0)):delete i[g]);if(o!==c)for(const g in o)(!e||!_e(e,g))&&(delete o[g],f=!0)}f&&Xt(t.attrs,"set","")}function Mh(t,e,n,s){const[i,o]=t.propsOptions;let a=!1,c;if(e)for(let u in e){if(Gs(u))continue;const f=e[u];let d;i&&_e(i,d=vt(u))?!o||!o.includes(d)?n[d]=f:(c||(c={}))[d]=f:xr(t.emitsOptions,u)||(!(u in s)||f!==s[u])&&(s[u]=f,a=!0)}if(o){const u=ge(n),f=c||be;for(let d=0;d<o.length;d++){const g=o[d];n[g]=Ho(i,u,g,f[g],t,!_e(f,g))}}return a}function Ho(t,e,n,s,i,o){const a=t[n];if(a!=null){const c=_e(a,"default");if(c&&s===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&se(u)){const{propsDefaults:f}=i;if(n in f)s=f[n];else{const d=yi(i);s=f[n]=u.call(null,e),d()}}else s=u;i.ce&&i.ce._setProp(n,s)}a[0]&&(o&&!c?s=!1:a[1]&&(s===""||s===ts(n))&&(s=!0))}return s}const Sg=new WeakMap;function Uh(t,e,n=!1){const s=n?Sg:e.propsCache,i=s.get(t);if(i)return i;const o=t.props,a={},c=[];let u=!1;if(!se(t)){const d=g=>{u=!0;const[w,A]=Uh(g,e,!0);Le(a,w),A&&c.push(...A)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!o&&!u)return Te(t)&&s.set(t,ds),ds;if(te(o))for(let d=0;d<o.length;d++){const g=vt(o[d]);Zl(g)&&(a[g]=be)}else if(o)for(const d in o){const g=vt(d);if(Zl(g)){const w=o[d],A=a[g]=te(w)||se(w)?{type:w}:Le({},w),N=A.type;let M=!1,q=!0;if(te(N))for(let K=0;K<N.length;++K){const $=N[K],B=se($)&&$.name;if(B==="Boolean"){M=!0;break}else B==="String"&&(q=!1)}else M=se(N)&&N.name==="Boolean";A[0]=M,A[1]=q,(M||_e(A,"default"))&&c.push(g)}}const f=[a,c];return Te(t)&&s.set(t,f),f}function Zl(t){return t[0]!=="$"&&!Gs(t)}const ba=t=>t[0]==="_"||t==="$stable",Ea=t=>te(t)?t.map(Mt):[Mt(t)],Ag=(t,e,n)=>{if(e._n)return e;const s=wa((...i)=>Ea(e(...i)),n);return s._c=!1,s},Fh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ba(i))continue;const o=t[i];if(se(o))e[i]=Ag(i,o,s);else if(o!=null){const a=Ea(o);e[i]=()=>a}}},jh=(t,e)=>{const n=Ea(e);t.slots.default=()=>n},Vh=(t,e,n)=>{for(const s in e)(n||!ba(s))&&(t[s]=e[s])},Cg=(t,e,n)=>{const s=t.slots=xh();if(t.vnode.shapeFlag&32){const i=e.__;i&&xo(s,"__",i,!0);const o=e._;o?(Vh(s,e,n),n&&xo(s,"_",o,!0)):Fh(e,s)}else e&&jh(t,e)},Rg=(t,e,n)=>{const{vnode:s,slots:i}=t;let o=!0,a=be;if(s.shapeFlag&32){const c=e._;c?n&&c===1?o=!1:Vh(i,e,n):(o=!e.$stable,Fh(e,i)),a=e}else e&&(jh(t,e),a={default:1});if(o)for(const c in i)!ba(c)&&a[c]==null&&delete i[c]},it=Bg;function Pg(t){return kg(t)}function kg(t,e){const n=Cr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:o,createElement:a,createText:c,createComment:u,setText:f,setElementText:d,parentNode:g,nextSibling:w,setScopeId:A=jt,insertStaticContent:N}=t,M=(v,I,C,O=null,x=null,D=null,G=void 0,j=null,F=!!I.dynamicChildren)=>{if(v===I)return;v&&!Vn(v,I)&&(O=k(v),Ce(v,x,D,!0),v=null),I.patchFlag===-2&&(F=!1,I.dynamicChildren=null);const{type:L,ref:Q,shapeFlag:W}=I;switch(L){case Lr:q(v,I,C,O);break;case Qe:K(v,I,C,O);break;case Xi:v==null&&$(I,C,O,G);break;case ft:b(v,I,C,O,x,D,G,j,F);break;default:W&1?ie(v,I,C,O,x,D,G,j,F):W&6?y(v,I,C,O,x,D,G,j,F):(W&64||W&128)&&L.process(v,I,C,O,x,D,G,j,F,X)}Q!=null&&x?Ks(Q,v&&v.ref,D,I||v,!I):Q==null&&v&&v.ref!=null&&Ks(v.ref,null,D,v,!0)},q=(v,I,C,O)=>{if(v==null)s(I.el=c(I.children),C,O);else{const x=I.el=v.el;I.children!==v.children&&f(x,I.children)}},K=(v,I,C,O)=>{v==null?s(I.el=u(I.children||""),C,O):I.el=v.el},$=(v,I,C,O)=>{[v.el,v.anchor]=N(v.children,I,C,O,v.el,v.anchor)},B=({el:v,anchor:I},C,O)=>{let x;for(;v&&v!==I;)x=w(v),s(v,C,O),v=x;s(I,C,O)},H=({el:v,anchor:I})=>{let C;for(;v&&v!==I;)C=w(v),i(v),v=C;i(I)},ie=(v,I,C,O,x,D,G,j,F)=>{I.type==="svg"?G="svg":I.type==="math"&&(G="mathml"),v==null?re(I,C,O,x,D,G,j,F):m(v,I,x,D,G,j,F)},re=(v,I,C,O,x,D,G,j)=>{let F,L;const{props:Q,shapeFlag:W,transition:Y,dirs:ee}=v;if(F=v.el=a(v.type,D,Q&&Q.is,Q),W&8?d(F,v.children):W&16&&_(v.children,F,null,O,x,mo(v,D),G,j),ee&&xn(v,null,O,"created"),S(F,v,v.scopeId,G,O),Q){for(const oe in Q)oe!=="value"&&!Gs(oe)&&o(F,oe,null,Q[oe],D,O);"value"in Q&&o(F,"value",null,Q.value,D),(L=Q.onVnodeBeforeMount)&&Dt(L,O,v)}ee&&xn(v,null,O,"beforeMount");const Z=Og(x,Y);Z&&Y.beforeEnter(F),s(F,I,C),((L=Q&&Q.onVnodeMounted)||Z||ee)&&it(()=>{L&&Dt(L,O,v),Z&&Y.enter(F),ee&&xn(v,null,O,"mounted")},x)},S=(v,I,C,O,x)=>{if(C&&A(v,C),O)for(let D=0;D<O.length;D++)A(v,O[D]);if(x){let D=x.subTree;if(I===D||zh(D.type)&&(D.ssContent===I||D.ssFallback===I)){const G=x.vnode;S(v,G,G.scopeId,G.slotScopeIds,x.parent)}}},_=(v,I,C,O,x,D,G,j,F=0)=>{for(let L=F;L<v.length;L++){const Q=v[L]=j?vn(v[L]):Mt(v[L]);M(null,Q,I,C,O,x,D,G,j)}},m=(v,I,C,O,x,D,G)=>{const j=I.el=v.el;let{patchFlag:F,dynamicChildren:L,dirs:Q}=I;F|=v.patchFlag&16;const W=v.props||be,Y=I.props||be;let ee;if(C&&Ln(C,!1),(ee=Y.onVnodeBeforeUpdate)&&Dt(ee,C,I,v),Q&&xn(I,v,C,"beforeUpdate"),C&&Ln(C,!0),(W.innerHTML&&Y.innerHTML==null||W.textContent&&Y.textContent==null)&&d(j,""),L?E(v.dynamicChildren,L,j,C,O,mo(I,x),D):G||ae(v,I,j,null,C,O,mo(I,x),D,!1),F>0){if(F&16)T(j,W,Y,C,x);else if(F&2&&W.class!==Y.class&&o(j,"class",null,Y.class,x),F&4&&o(j,"style",W.style,Y.style,x),F&8){const Z=I.dynamicProps;for(let oe=0;oe<Z.length;oe++){const ce=Z[oe],Me=W[ce],Ue=Y[ce];(Ue!==Me||ce==="value")&&o(j,ce,Me,Ue,x,C)}}F&1&&v.children!==I.children&&d(j,I.children)}else!G&&L==null&&T(j,W,Y,C,x);((ee=Y.onVnodeUpdated)||Q)&&it(()=>{ee&&Dt(ee,C,I,v),Q&&xn(I,v,C,"updated")},O)},E=(v,I,C,O,x,D,G)=>{for(let j=0;j<I.length;j++){const F=v[j],L=I[j],Q=F.el&&(F.type===ft||!Vn(F,L)||F.shapeFlag&198)?g(F.el):C;M(F,L,Q,null,O,x,D,G,!0)}},T=(v,I,C,O,x)=>{if(I!==C){if(I!==be)for(const D in I)!Gs(D)&&!(D in C)&&o(v,D,I[D],null,x,O);for(const D in C){if(Gs(D))continue;const G=C[D],j=I[D];G!==j&&D!=="value"&&o(v,D,j,G,x,O)}"value"in C&&o(v,"value",I.value,C.value,x)}},b=(v,I,C,O,x,D,G,j,F)=>{const L=I.el=v?v.el:c(""),Q=I.anchor=v?v.anchor:c("");let{patchFlag:W,dynamicChildren:Y,slotScopeIds:ee}=I;ee&&(j=j?j.concat(ee):ee),v==null?(s(L,C,O),s(Q,C,O),_(I.children||[],C,Q,x,D,G,j,F)):W>0&&W&64&&Y&&v.dynamicChildren?(E(v.dynamicChildren,Y,C,x,D,G,j),(I.key!=null||x&&I===x.subTree)&&$h(v,I,!0)):ae(v,I,C,Q,x,D,G,j,F)},y=(v,I,C,O,x,D,G,j,F)=>{I.slotScopeIds=j,v==null?I.shapeFlag&512?x.ctx.activate(I,C,O,G,F):ye(I,C,O,x,D,G,F):Ne(v,I,F)},ye=(v,I,C,O,x,D,G)=>{const j=v.component=Yg(v,O,x);if(Or(v)&&(j.ctx.renderer=X),Zg(j,!1,G),j.asyncDep){if(x&&x.registerDep(j,Ae,G),!v.el){const F=j.subTree=De(Qe);K(null,F,I,C)}}else Ae(j,v,I,C,x,D,G)},Ne=(v,I,C)=>{const O=I.component=v.component;if(Vg(v,I,C))if(O.asyncDep&&!O.asyncResolved){le(O,I,C);return}else O.next=I,O.update();else I.el=v.el,O.vnode=I},Ae=(v,I,C,O,x,D,G)=>{const j=()=>{if(v.isMounted){let{next:W,bu:Y,u:ee,parent:Z,vnode:oe}=v;{const He=Bh(v);if(He){W&&(W.el=oe.el,le(v,W,G)),He.asyncDep.then(()=>{v.isUnmounted||j()});return}}let ce=W,Me;Ln(v,!1),W?(W.el=oe.el,le(v,W,G)):W=oe,Y&&lo(Y),(Me=W.props&&W.props.onVnodeBeforeUpdate)&&Dt(Me,Z,W,oe),Ln(v,!0);const Ue=tc(v),lt=v.subTree;v.subTree=Ue,M(lt,Ue,g(lt.el),k(lt),v,x,D),W.el=Ue.el,ce===null&&$g(v,Ue.el),ee&&it(ee,x),(Me=W.props&&W.props.onVnodeUpdated)&&it(()=>Dt(Me,Z,W,oe),x)}else{let W;const{el:Y,props:ee}=I,{bm:Z,m:oe,parent:ce,root:Me,type:Ue}=v,lt=Js(I);Ln(v,!1),Z&&lo(Z),!lt&&(W=ee&&ee.onVnodeBeforeMount)&&Dt(W,ce,I),Ln(v,!0);{Me.ce&&Me.ce._def.shadowRoot!==!1&&Me.ce._injectChildStyle(Ue);const He=v.subTree=tc(v);M(null,He,C,O,v,x,D),I.el=He.el}if(oe&&it(oe,x),!lt&&(W=ee&&ee.onVnodeMounted)){const He=I;it(()=>Dt(W,ce,He),x)}(I.shapeFlag&256||ce&&Js(ce.vnode)&&ce.vnode.shapeFlag&256)&&v.a&&it(v.a,x),v.isMounted=!0,I=C=O=null}};v.scope.on();const F=v.effect=new Ju(j);v.scope.off();const L=v.update=F.run.bind(F),Q=v.job=F.runIfDirty.bind(F);Q.i=v,Q.id=v.uid,F.scheduler=()=>ya(Q),Ln(v,!0),L()},le=(v,I,C)=>{I.component=v;const O=v.vnode.props;v.vnode=I,v.next=null,Tg(v,I.props,O,C),Rg(v,I.children,C),tn(),Gl(v),nn()},ae=(v,I,C,O,x,D,G,j,F=!1)=>{const L=v&&v.children,Q=v?v.shapeFlag:0,W=I.children,{patchFlag:Y,shapeFlag:ee}=I;if(Y>0){if(Y&128){yt(L,W,C,O,x,D,G,j,F);return}else if(Y&256){st(L,W,C,O,x,D,G,j,F);return}}ee&8?(Q&16&&et(L,x,D),W!==L&&d(C,W)):Q&16?ee&16?yt(L,W,C,O,x,D,G,j,F):et(L,x,D,!0):(Q&8&&d(C,""),ee&16&&_(W,C,O,x,D,G,j,F))},st=(v,I,C,O,x,D,G,j,F)=>{v=v||ds,I=I||ds;const L=v.length,Q=I.length,W=Math.min(L,Q);let Y;for(Y=0;Y<W;Y++){const ee=I[Y]=F?vn(I[Y]):Mt(I[Y]);M(v[Y],ee,C,null,x,D,G,j,F)}L>Q?et(v,x,D,!0,!1,W):_(I,C,O,x,D,G,j,F,W)},yt=(v,I,C,O,x,D,G,j,F)=>{let L=0;const Q=I.length;let W=v.length-1,Y=Q-1;for(;L<=W&&L<=Y;){const ee=v[L],Z=I[L]=F?vn(I[L]):Mt(I[L]);if(Vn(ee,Z))M(ee,Z,C,null,x,D,G,j,F);else break;L++}for(;L<=W&&L<=Y;){const ee=v[W],Z=I[Y]=F?vn(I[Y]):Mt(I[Y]);if(Vn(ee,Z))M(ee,Z,C,null,x,D,G,j,F);else break;W--,Y--}if(L>W){if(L<=Y){const ee=Y+1,Z=ee<Q?I[ee].el:O;for(;L<=Y;)M(null,I[L]=F?vn(I[L]):Mt(I[L]),C,Z,x,D,G,j,F),L++}}else if(L>Y)for(;L<=W;)Ce(v[L],x,D,!0),L++;else{const ee=L,Z=L,oe=new Map;for(L=Z;L<=Y;L++){const Fe=I[L]=F?vn(I[L]):Mt(I[L]);Fe.key!=null&&oe.set(Fe.key,L)}let ce,Me=0;const Ue=Y-Z+1;let lt=!1,He=0;const cn=new Array(Ue);for(L=0;L<Ue;L++)cn[L]=0;for(L=ee;L<=W;L++){const Fe=v[L];if(Me>=Ue){Ce(Fe,x,D,!0);continue}let ct;if(Fe.key!=null)ct=oe.get(Fe.key);else for(ce=Z;ce<=Y;ce++)if(cn[ce-Z]===0&&Vn(Fe,I[ce])){ct=ce;break}ct===void 0?Ce(Fe,x,D,!0):(cn[ct-Z]=L+1,ct>=He?He=ct:lt=!0,M(Fe,I[ct],C,null,x,D,G,j,F),Me++)}const Rs=lt?Ng(cn):ds;for(ce=Rs.length-1,L=Ue-1;L>=0;L--){const Fe=Z+L,ct=I[Fe],Ri=Fe+1<Q?I[Fe+1].el:O;cn[L]===0?M(null,ct,C,Ri,x,D,G,j,F):lt&&(ce<0||L!==Rs[ce]?at(ct,C,Ri,2):ce--)}}},at=(v,I,C,O,x=null)=>{const{el:D,type:G,transition:j,children:F,shapeFlag:L}=v;if(L&6){at(v.component.subTree,I,C,O);return}if(L&128){v.suspense.move(I,C,O);return}if(L&64){G.move(v,I,C,X);return}if(G===ft){s(D,I,C);for(let W=0;W<F.length;W++)at(F[W],I,C,O);s(v.anchor,I,C);return}if(G===Xi){B(v,I,C);return}if(O!==2&&L&1&&j)if(O===0)j.beforeEnter(D),s(D,I,C),it(()=>j.enter(D),x);else{const{leave:W,delayLeave:Y,afterLeave:ee}=j,Z=()=>{v.ctx.isUnmounted?i(D):s(D,I,C)},oe=()=>{W(D,()=>{Z(),ee&&ee()})};Y?Y(D,Z,oe):oe()}else s(D,I,C)},Ce=(v,I,C,O=!1,x=!1)=>{const{type:D,props:G,ref:j,children:F,dynamicChildren:L,shapeFlag:Q,patchFlag:W,dirs:Y,cacheIndex:ee}=v;if(W===-2&&(x=!1),j!=null&&(tn(),Ks(j,null,C,v,!0),nn()),ee!=null&&(I.renderCache[ee]=void 0),Q&256){I.ctx.deactivate(v);return}const Z=Q&1&&Y,oe=!Js(v);let ce;if(oe&&(ce=G&&G.onVnodeBeforeUnmount)&&Dt(ce,I,v),Q&6)Nt(v.component,C,O);else{if(Q&128){v.suspense.unmount(C,O);return}Z&&xn(v,null,I,"beforeUnmount"),Q&64?v.type.remove(v,I,C,X,O):L&&!L.hasOnce&&(D!==ft||W>0&&W&64)?et(L,I,C,!1,!0):(D===ft&&W&384||!x&&Q&16)&&et(F,I,C),O&&Re(v)}(oe&&(ce=G&&G.onVnodeUnmounted)||Z)&&it(()=>{ce&&Dt(ce,I,v),Z&&xn(v,null,I,"unmounted")},C)},Re=v=>{const{type:I,el:C,anchor:O,transition:x}=v;if(I===ft){ln(C,O);return}if(I===Xi){H(v);return}const D=()=>{i(C),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(v.shapeFlag&1&&x&&!x.persisted){const{leave:G,delayLeave:j}=x,F=()=>G(C,D);j?j(v.el,D,F):F()}else D()},ln=(v,I)=>{let C;for(;v!==I;)C=w(v),i(v),v=C;i(I)},Nt=(v,I,C)=>{const{bum:O,scope:x,job:D,subTree:G,um:j,m:F,a:L,parent:Q,slots:{__:W}}=v;ec(F),ec(L),O&&lo(O),Q&&te(W)&&W.forEach(Y=>{Q.renderCache[Y]=void 0}),x.stop(),D&&(D.flags|=8,Ce(G,v,I,C)),j&&it(j,I),it(()=>{v.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},et=(v,I,C,O=!1,x=!1,D=0)=>{for(let G=D;G<v.length;G++)Ce(v[G],I,C,O,x)},k=v=>{if(v.shapeFlag&6)return k(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const I=w(v.anchor||v.el),C=I&&I[Qp];return C?w(C):I};let J=!1;const z=(v,I,C)=>{v==null?I._vnode&&Ce(I._vnode,null,null,!0):M(I._vnode||null,v,I,null,null,null,C),I._vnode=v,J||(J=!0,Gl(),mh(),J=!1)},X={p:M,um:Ce,m:at,r:Re,mt:ye,mc:_,pc:ae,pbc:E,n:k,o:t};return{render:z,hydrate:void 0,createApp:bg(z)}}function mo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ln({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Og(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $h(t,e,n=!1){const s=t.children,i=e.children;if(te(s)&&te(i))for(let o=0;o<s.length;o++){const a=s[o];let c=i[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[o]=vn(i[o]),c.el=a.el),!n&&c.patchFlag!==-2&&$h(a,c)),c.type===Lr&&(c.el=a.el),c.type===Qe&&!c.el&&(c.el=a.el)}}function Ng(t){const e=t.slice(),n=[0];let s,i,o,a,c;const u=t.length;for(s=0;s<u;s++){const f=t[s];if(f!==0){if(i=n[n.length-1],t[i]<f){e[s]=i,n.push(s);continue}for(o=0,a=n.length-1;o<a;)c=o+a>>1,t[n[c]]<f?o=c+1:a=c;f<t[n[o]]&&(o>0&&(e[s]=n[o-1]),n[o]=s)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function Bh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bh(e)}function ec(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Dg=Symbol.for("v-scx"),xg=()=>Vt(Dg);function Ji(t,e,n){return Hh(t,e,n)}function Hh(t,e,n=be){const{immediate:s,deep:i,flush:o,once:a}=n,c=Le({},n),u=e&&s||!e&&o!=="post";let f;if(hi){if(o==="sync"){const A=xg();f=A.__watcherHandles||(A.__watcherHandles=[])}else if(!u){const A=()=>{};return A.stop=jt,A.resume=jt,A.pause=jt,A}}const d=Be;c.call=(A,N,M)=>Rt(A,d,N,M);let g=!1;o==="post"?c.scheduler=A=>{it(A,d&&d.suspense)}:o!=="sync"&&(g=!0,c.scheduler=(A,N)=>{N?A():ya(A)}),c.augmentJob=A=>{e&&(A.flags|=4),g&&(A.flags|=2,d&&(A.id=d.uid,A.i=d))};const w=Kp(t,e,c);return hi&&(f?f.push(w):u&&w()),w}function Lg(t,e,n){const s=this.proxy,i=ke(t)?t.includes(".")?Wh(s,t):()=>s[t]:t.bind(s,s);let o;se(e)?o=e:(o=e.handler,n=e);const a=yi(this),c=Hh(i,o.bind(s),n);return a(),c}function Wh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Mg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${vt(e)}Modifiers`]||t[`${ts(e)}Modifiers`];function Ug(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||be;let i=n;const o=e.startsWith("update:"),a=o&&Mg(s,e.slice(7));a&&(a.trim&&(i=n.map(d=>ke(d)?d.trim():d)),a.number&&(i=n.map(dp)));let c,u=s[c=ao(e)]||s[c=ao(vt(e))];!u&&o&&(u=s[c=ao(ts(e))]),u&&Rt(u,t,6,i);const f=s[c+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Rt(f,t,6,i)}}function Gh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const o=t.emits;let a={},c=!1;if(!se(t)){const u=f=>{const d=Gh(f,e,!0);d&&(c=!0,Le(a,d))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!o&&!c?(Te(t)&&s.set(t,null),null):(te(o)?o.forEach(u=>a[u]=null):Le(a,o),Te(t)&&s.set(t,a),a)}function xr(t,e){return!t||!Er(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(t,e[0].toLowerCase()+e.slice(1))||_e(t,ts(e))||_e(t,e))}function tc(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:f,renderCache:d,props:g,data:w,setupState:A,ctx:N,inheritAttrs:M}=t,q=ar(t);let K,$;try{if(n.shapeFlag&4){const H=i||s,ie=H;K=Mt(f.call(ie,H,d,g,A,w,N)),$=c}else{const H=e;K=Mt(H.length>1?H(g,{attrs:c,slots:a,emit:u}):H(g,null)),$=e.props?c:Fg(c)}}catch(H){Ys.length=0,kr(H,t,1),K=De(Qe)}let B=K;if($&&M!==!1){const H=Object.keys($),{shapeFlag:ie}=B;H.length&&ie&7&&(o&&H.some(aa)&&($=jg($,o)),B=Rn(B,$,!1,!0))}return n.dirs&&(B=Rn(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&ci(B,n.transition),K=B,ar(q),K}const Fg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Er(n))&&((e||(e={}))[n]=t[n]);return e},jg=(t,e)=>{const n={};for(const s in t)(!aa(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Vg(t,e,n){const{props:s,children:i,component:o}=t,{props:a,children:c,patchFlag:u}=e,f=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?nc(s,a,f):!!a;if(u&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const w=d[g];if(a[w]!==s[w]&&!xr(f,w))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:s===a?!1:s?a?nc(s,a,f):!0:!!a;return!1}function nc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const o=s[i];if(e[o]!==t[o]&&!xr(n,o))return!0}return!1}function $g({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const zh=t=>t.__isSuspense;function Bg(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):Yp(t)}const ft=Symbol.for("v-fgt"),Lr=Symbol.for("v-txt"),Qe=Symbol.for("v-cmt"),Xi=Symbol.for("v-stc"),Ys=[];let rt=null;function xe(t=!1){Ys.push(rt=t?null:[])}function Hg(){Ys.pop(),rt=Ys[Ys.length-1]||null}let ui=1;function sc(t,e=!1){ui+=t,t<0&&rt&&e&&(rt.hasOnce=!0)}function qh(t){return t.dynamicChildren=ui>0?rt||ds:null,Hg(),ui>0&&rt&&rt.push(t),t}function $e(t,e,n,s,i,o){return qh(U(t,e,n,s,i,o,!0))}function Wg(t,e,n,s,i){return qh(De(t,e,n,s,i,!0))}function cr(t){return t?t.__v_isVNode===!0:!1}function Vn(t,e){return t.type===e.type&&t.key===e.key}const Kh=({key:t})=>t??null,Yi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ke(t)||qe(t)||se(t)?{i:gt,r:t,k:e,f:!!n}:t:null);function U(t,e=null,n=null,s=0,i=null,o=t===ft?0:1,a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Kh(e),ref:e&&Yi(e),scopeId:vh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:gt};return c?(Ta(u,n),o&128&&t.normalize(u)):n&&(u.shapeFlag|=ke(n)?8:16),ui>0&&!a&&rt&&(u.patchFlag>0||o&6)&&u.patchFlag!==32&&rt.push(u),u}const De=Gg;function Gg(t,e=null,n=null,s=0,i=null,o=!1){if((!t||t===dg)&&(t=Qe),cr(t)){const c=Rn(t,e,!0);return n&&Ta(c,n),ui>0&&!o&&rt&&(c.shapeFlag&6?rt[rt.indexOf(t)]=c:rt.push(c)),c.patchFlag=-2,c}if(im(t)&&(t=t.__vccOpts),e){e=zg(e);let{class:c,style:u}=e;c&&!ke(c)&&(e.class=ha(c)),Te(u)&&(va(u)&&!te(u)&&(u=Le({},u)),e.style=ua(u))}const a=ke(t)?1:zh(t)?128:yh(t)?64:Te(t)?4:se(t)?2:0;return U(t,e,n,s,i,a,o,!0)}function zg(t){return t?va(t)||Lh(t)?Le({},t):t:null}function Rn(t,e,n=!1,s=!1){const{props:i,ref:o,patchFlag:a,children:c,transition:u}=t,f=e?Kg(i||{},e):i,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&Kh(f),ref:e&&e.ref?n&&o?te(o)?o.concat(Yi(e)):[o,Yi(e)]:Yi(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ft?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rn(t.ssContent),ssFallback:t.ssFallback&&Rn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&s&&ci(d,u.clone(d)),d}function ur(t=" ",e=0){return De(Lr,null,t,e)}function qg(t,e){const n=De(Xi,null,t);return n.staticCount=e,n}function Jh(t="",e=!1){return e?(xe(),Wg(Qe,null,t)):De(Qe,null,t)}function Mt(t){return t==null||typeof t=="boolean"?De(Qe):te(t)?De(ft,null,t.slice()):cr(t)?vn(t):De(Lr,null,String(t))}function vn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Rn(t)}function Ta(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ta(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Lh(e)?e._ctx=gt:i===3&&gt&&(gt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:gt},n=32):(e=String(e),s&64?(n=16,e=[ur(e)]):n=8);t.children=e,t.shapeFlag|=n}function Kg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ha([e.class,s.class]));else if(i==="style")e.style=ua([e.style,s.style]);else if(Er(i)){const o=e[i],a=s[i];a&&o!==a&&!(te(o)&&o.includes(a))&&(e[i]=o?[].concat(o,a):a)}else i!==""&&(e[i]=s[i])}return e}function Dt(t,e,n,s=null){Rt(t,e,7,[n,s])}const Jg=Nh();let Xg=0;function Yg(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Jg,o={uid:Xg++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ip(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uh(s,i),emitsOptions:Gh(s,i),emit:null,emitted:null,propsDefaults:be,inheritAttrs:s.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Ug.bind(null,o),t.ce&&t.ce(o),o}let Be=null;const Qg=()=>Be||gt;let hr,Wo;{const t=Cr(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),o=>{i.length>1?i.forEach(a=>a(o)):i[0](o)}};hr=e("__VUE_INSTANCE_SETTERS__",n=>Be=n),Wo=e("__VUE_SSR_SETTERS__",n=>hi=n)}const yi=t=>{const e=Be;return hr(t),t.scope.on(),()=>{t.scope.off(),hr(e)}},ic=()=>{Be&&Be.scope.off(),hr(null)};function Xh(t){return t.vnode.shapeFlag&4}let hi=!1;function Zg(t,e=!1,n=!1){e&&Wo(e);const{props:s,children:i}=t.vnode,o=Xh(t);Eg(t,s,o,e),Cg(t,i,n||e);const a=o?em(t,e):void 0;return e&&Wo(!1),a}function em(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,gg);const{setup:s}=n;if(s){tn();const i=t.setupContext=s.length>1?nm(t):null,o=yi(t),a=vi(s,t,0,[t.props,i]),c=Hu(a);if(nn(),o(),(c||t.sp)&&!Js(t)&&Ah(t),c){if(a.then(ic,ic),e)return a.then(u=>{rc(t,u)}).catch(u=>{kr(u,t,0)});t.asyncDep=a}else rc(t,a)}else Yh(t)}function rc(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=fh(e)),Yh(t)}function Yh(t,e,n){const s=t.type;t.render||(t.render=s.render||jt);{const i=yi(t);tn();try{mg(t)}finally{nn(),i()}}}const tm={get(t,e){return ze(t,"get",""),t[e]}};function nm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,tm),slots:t.slots,emit:t.emit,expose:e}}function Sa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(fh($p(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xs)return Xs[n](t)},has(e,n){return n in e||n in Xs}})):t.proxy}function sm(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function im(t){return se(t)&&"__vccOpts"in t}const dt=(t,e)=>zp(t,e,hi);function Aa(t,e,n){const s=arguments.length;return s===2?Te(e)&&!te(e)?cr(e)?De(t,null,[e]):De(t,e):De(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&cr(n)&&(n=[n]),De(t,e,n))}const rm="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Go;const oc=typeof window<"u"&&window.trustedTypes;if(oc)try{Go=oc.createPolicy("vue",{createHTML:t=>t})}catch{}const Qh=Go?t=>Go.createHTML(t):t=>t,om="http://www.w3.org/2000/svg",am="http://www.w3.org/1998/Math/MathML",Jt=typeof document<"u"?document:null,ac=Jt&&Jt.createElement("template"),lm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Jt.createElementNS(om,t):e==="mathml"?Jt.createElementNS(am,t):n?Jt.createElement(t,{is:n}):Jt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Jt.createTextNode(t),createComment:t=>Jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,o){const a=n?n.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{ac.innerHTML=Qh(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const c=ac.content;if(s==="svg"||s==="mathml"){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},dn="transition",Bs="animation",fi=Symbol("_vtc"),Zh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},cm=Le({},wh,Zh),um=t=>(t.displayName="Transition",t.props=cm,t),hm=um((t,{slots:e})=>Aa(tg,fm(t),e)),Mn=(t,e=[])=>{te(t)?t.forEach(n=>n(...e)):t&&t(...e)},lc=t=>t?te(t)?t.some(e=>e.length>1):t.length>1:!1;function fm(t){const e={};for(const b in t)b in Zh||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:f=a,appearToClass:d=c,leaveFromClass:g=`${n}-leave-from`,leaveActiveClass:w=`${n}-leave-active`,leaveToClass:A=`${n}-leave-to`}=t,N=dm(i),M=N&&N[0],q=N&&N[1],{onBeforeEnter:K,onEnter:$,onEnterCancelled:B,onLeave:H,onLeaveCancelled:ie,onBeforeAppear:re=K,onAppear:S=$,onAppearCancelled:_=B}=e,m=(b,y,ye,Ne)=>{b._enterCancelled=Ne,Un(b,y?d:c),Un(b,y?f:a),ye&&ye()},E=(b,y)=>{b._isLeaving=!1,Un(b,g),Un(b,A),Un(b,w),y&&y()},T=b=>(y,ye)=>{const Ne=b?S:$,Ae=()=>m(y,b,ye);Mn(Ne,[y,Ae]),cc(()=>{Un(y,b?u:o),qt(y,b?d:c),lc(Ne)||uc(y,s,M,Ae)})};return Le(e,{onBeforeEnter(b){Mn(K,[b]),qt(b,o),qt(b,a)},onBeforeAppear(b){Mn(re,[b]),qt(b,u),qt(b,f)},onEnter:T(!1),onAppear:T(!0),onLeave(b,y){b._isLeaving=!0;const ye=()=>E(b,y);qt(b,g),b._enterCancelled?(qt(b,w),dc()):(dc(),qt(b,w)),cc(()=>{b._isLeaving&&(Un(b,g),qt(b,A),lc(H)||uc(b,s,q,ye))}),Mn(H,[b,ye])},onEnterCancelled(b){m(b,!1,void 0,!0),Mn(B,[b])},onAppearCancelled(b){m(b,!0,void 0,!0),Mn(_,[b])},onLeaveCancelled(b){E(b),Mn(ie,[b])}})}function dm(t){if(t==null)return null;if(Te(t))return[_o(t.enter),_o(t.leave)];{const e=_o(t);return[e,e]}}function _o(t){return pp(t)}function qt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[fi]||(t[fi]=new Set)).add(e)}function Un(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[fi];n&&(n.delete(e),n.size||(t[fi]=void 0))}function cc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let pm=0;function uc(t,e,n,s){const i=t._endId=++pm,o=()=>{i===t._endId&&s()};if(n!=null)return setTimeout(o,n);const{type:a,timeout:c,propCount:u}=gm(t,e);if(!a)return s();const f=a+"end";let d=0;const g=()=>{t.removeEventListener(f,w),o()},w=A=>{A.target===t&&++d>=u&&g()};setTimeout(()=>{d<u&&g()},c+1),t.addEventListener(f,w)}function gm(t,e){const n=window.getComputedStyle(t),s=N=>(n[N]||"").split(", "),i=s(`${dn}Delay`),o=s(`${dn}Duration`),a=hc(i,o),c=s(`${Bs}Delay`),u=s(`${Bs}Duration`),f=hc(c,u);let d=null,g=0,w=0;e===dn?a>0&&(d=dn,g=a,w=o.length):e===Bs?f>0&&(d=Bs,g=f,w=u.length):(g=Math.max(a,f),d=g>0?a>f?dn:Bs:null,w=d?d===dn?o.length:u.length:0);const A=d===dn&&/\b(transform|all)(,|$)/.test(s(`${dn}Property`).toString());return{type:d,timeout:g,propCount:w,hasTransform:A}}function hc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>fc(n)+fc(t[s])))}function fc(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function dc(){return document.body.offsetHeight}function mm(t,e,n){const s=t[fi];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const pc=Symbol("_vod"),_m=Symbol("_vsh"),vm=Symbol(""),ym=/(^|;)\s*display\s*:/;function wm(t,e,n){const s=t.style,i=ke(n);let o=!1;if(n&&!i){if(e)if(ke(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&Qi(s,c,"")}else for(const a in e)n[a]==null&&Qi(s,a,"");for(const a in n)a==="display"&&(o=!0),Qi(s,a,n[a])}else if(i){if(e!==n){const a=s[vm];a&&(n+=";"+a),s.cssText=n,o=ym.test(n)}}else e&&t.removeAttribute("style");pc in t&&(t[pc]=o?s.display:"",t[_m]&&(s.display="none"))}const gc=/\s*!important$/;function Qi(t,e,n){if(te(n))n.forEach(s=>Qi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Im(t,e);gc.test(n)?t.setProperty(ts(s),n.replace(gc,""),"important"):t[s]=n}}const mc=["Webkit","Moz","ms"],vo={};function Im(t,e){const n=vo[e];if(n)return n;let s=vt(e);if(s!=="filter"&&s in t)return vo[e]=s;s=Ar(s);for(let i=0;i<mc.length;i++){const o=mc[i]+s;if(o in t)return vo[e]=o}return e}const _c="http://www.w3.org/1999/xlink";function vc(t,e,n,s,i,o=wp(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(_c,e.slice(6,e.length)):t.setAttributeNS(_c,e,n):n==null||o&&!zu(n)?t.removeAttribute(e):t.setAttribute(e,o?"":kn(n)?String(n):n)}function yc(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Qh(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=zu(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(i||e)}function bm(t,e,n,s){t.addEventListener(e,n,s)}function Em(t,e,n,s){t.removeEventListener(e,n,s)}const wc=Symbol("_vei");function Tm(t,e,n,s,i=null){const o=t[wc]||(t[wc]={}),a=o[e];if(s&&a)a.value=s;else{const[c,u]=Sm(e);if(s){const f=o[e]=Rm(s,i);bm(t,c,f,u)}else a&&(Em(t,c,a,u),o[e]=void 0)}}const Ic=/(?:Once|Passive|Capture)$/;function Sm(t){let e;if(Ic.test(t)){e={};let s;for(;s=t.match(Ic);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ts(t.slice(2)),e]}let yo=0;const Am=Promise.resolve(),Cm=()=>yo||(Am.then(()=>yo=0),yo=Date.now());function Rm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Rt(Pm(s,n.value),e,5,[s])};return n.value=t,n.attached=Cm(),n}function Pm(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const bc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,km=(t,e,n,s,i,o)=>{const a=i==="svg";e==="class"?mm(t,s,a):e==="style"?wm(t,n,s):Er(e)?aa(e)||Tm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Om(t,e,s,a))?(yc(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&vc(t,e,s,a,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ke(s))?yc(t,vt(e),s,o,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),vc(t,e,s,a))};function Om(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&bc(e)&&se(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return bc(e)&&ke(n)?!1:e in t}const Nm=Le({patchProp:km},lm);let Ec;function Dm(){return Ec||(Ec=Pg(Nm))}const xm=(...t)=>{const e=Dm().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Mm(s);if(!i)return;const o=e._component;!se(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=n(i,!1,Lm(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},e};function Lm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Mm(t){return ke(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const fs=typeof document<"u";function ef(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Um(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ef(t.default)}const me=Object.assign;function wo(t,e){const n={};for(const s in e){const i=e[s];n[s]=Pt(i)?i.map(t):t(i)}return n}const Qs=()=>{},Pt=Array.isArray,tf=/#/g,Fm=/&/g,jm=/\//g,Vm=/=/g,$m=/\?/g,nf=/\+/g,Bm=/%5B/g,Hm=/%5D/g,sf=/%5E/g,Wm=/%60/g,rf=/%7B/g,Gm=/%7C/g,of=/%7D/g,zm=/%20/g;function Ca(t){return encodeURI(""+t).replace(Gm,"|").replace(Bm,"[").replace(Hm,"]")}function qm(t){return Ca(t).replace(rf,"{").replace(of,"}").replace(sf,"^")}function zo(t){return Ca(t).replace(nf,"%2B").replace(zm,"+").replace(tf,"%23").replace(Fm,"%26").replace(Wm,"`").replace(rf,"{").replace(of,"}").replace(sf,"^")}function Km(t){return zo(t).replace(Vm,"%3D")}function Jm(t){return Ca(t).replace(tf,"%23").replace($m,"%3F")}function Xm(t){return t==null?"":Jm(t).replace(jm,"%2F")}function di(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ym=/\/$/,Qm=t=>t.replace(Ym,"");function Io(t,e,n="/"){let s,i={},o="",a="";const c=e.indexOf("#");let u=e.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(s=e.slice(0,u),o=e.slice(u+1,c>-1?c:e.length),i=t(o)),c>-1&&(s=s||e.slice(0,c),a=e.slice(c,e.length)),s=n_(s??e,n),{fullPath:s+(o&&"?")+o+a,path:s,query:i,hash:di(a)}}function Zm(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Tc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function e_(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&bs(e.matched[s],n.matched[i])&&af(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function af(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!t_(t[n],e[n]))return!1;return!0}function t_(t,e){return Pt(t)?Sc(t,e):Pt(e)?Sc(e,t):t===e}function Sc(t,e){return Pt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function n_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let o=n.length-1,a,c;for(a=0;a<s.length;a++)if(c=s[a],c!==".")if(c==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(a).join("/")}const pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var pi;(function(t){t.pop="pop",t.push="push"})(pi||(pi={}));var Zs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Zs||(Zs={}));function s_(t){if(!t)if(fs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Qm(t)}const i_=/^[^#]+#/;function r_(t,e){return t.replace(i_,"#")+e}function o_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Mr=()=>({left:window.scrollX,top:window.scrollY});function a_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=o_(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ac(t,e){return(history.state?history.state.position-e:-1)+t}const qo=new Map;function l_(t,e){qo.set(t,e)}function c_(t){const e=qo.get(t);return qo.delete(t),e}let u_=()=>location.protocol+"//"+location.host;function lf(t,e){const{pathname:n,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){let c=i.includes(t.slice(o))?t.slice(o).length:1,u=i.slice(c);return u[0]!=="/"&&(u="/"+u),Tc(u,"")}return Tc(n,t)+s+i}function h_(t,e,n,s){let i=[],o=[],a=null;const c=({state:w})=>{const A=lf(t,location),N=n.value,M=e.value;let q=0;if(w){if(n.value=A,e.value=w,a&&a===N){a=null;return}q=M?w.position-M.position:0}else s(A);i.forEach(K=>{K(n.value,N,{delta:q,type:pi.pop,direction:q?q>0?Zs.forward:Zs.back:Zs.unknown})})};function u(){a=n.value}function f(w){i.push(w);const A=()=>{const N=i.indexOf(w);N>-1&&i.splice(N,1)};return o.push(A),A}function d(){const{history:w}=window;w.state&&w.replaceState(me({},w.state,{scroll:Mr()}),"")}function g(){for(const w of o)w();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:u,listen:f,destroy:g}}function Cc(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Mr():null}}function f_(t){const{history:e,location:n}=window,s={value:lf(t,n)},i={value:e.state};i.value||o(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(u,f,d){const g=t.indexOf("#"),w=g>-1?(n.host&&document.querySelector("base")?t:t.slice(g))+u:u_()+t+u;try{e[d?"replaceState":"pushState"](f,"",w),i.value=f}catch(A){console.error(A),n[d?"replace":"assign"](w)}}function a(u,f){const d=me({},e.state,Cc(i.value.back,u,i.value.forward,!0),f,{position:i.value.position});o(u,d,!0),s.value=u}function c(u,f){const d=me({},i.value,e.state,{forward:u,scroll:Mr()});o(d.current,d,!0);const g=me({},Cc(s.value,u,null),{position:d.position+1},f);o(u,g,!1),s.value=u}return{location:s,state:i,push:c,replace:a}}function d_(t){t=s_(t);const e=f_(t),n=h_(t,e.state,e.location,e.replace);function s(o,a=!0){a||n.pauseListeners(),history.go(o)}const i=me({location:"",base:t,go:s,createHref:r_.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function p_(t){return typeof t=="string"||t&&typeof t=="object"}function cf(t){return typeof t=="string"||typeof t=="symbol"}const uf=Symbol("");var Rc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Rc||(Rc={}));function Es(t,e){return me(new Error,{type:t,[uf]:!0},e)}function Kt(t,e){return t instanceof Error&&uf in t&&(e==null||!!(t.type&e))}const Pc="[^/]+?",g_={sensitive:!1,strict:!1,start:!0,end:!0},m_=/[.+*?^${}()[\]/\\]/g;function __(t,e){const n=me({},g_,e),s=[];let i=n.start?"^":"";const o=[];for(const f of t){const d=f.length?[]:[90];n.strict&&!f.length&&(i+="/");for(let g=0;g<f.length;g++){const w=f[g];let A=40+(n.sensitive?.25:0);if(w.type===0)g||(i+="/"),i+=w.value.replace(m_,"\\$&"),A+=40;else if(w.type===1){const{value:N,repeatable:M,optional:q,regexp:K}=w;o.push({name:N,repeatable:M,optional:q});const $=K||Pc;if($!==Pc){A+=10;try{new RegExp(`(${$})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${N}" (${$}): `+H.message)}}let B=M?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;g||(B=q&&f.length<2?`(?:/${B})`:"/"+B),q&&(B+="?"),i+=B,A+=20,q&&(A+=-8),M&&(A+=-20),$===".*"&&(A+=-50)}d.push(A)}s.push(d)}if(n.strict&&n.end){const f=s.length-1;s[f][s[f].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function c(f){const d=f.match(a),g={};if(!d)return null;for(let w=1;w<d.length;w++){const A=d[w]||"",N=o[w-1];g[N.name]=A&&N.repeatable?A.split("/"):A}return g}function u(f){let d="",g=!1;for(const w of t){(!g||!d.endsWith("/"))&&(d+="/"),g=!1;for(const A of w)if(A.type===0)d+=A.value;else if(A.type===1){const{value:N,repeatable:M,optional:q}=A,K=N in f?f[N]:"";if(Pt(K)&&!M)throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);const $=Pt(K)?K.join("/"):K;if(!$)if(q)w.length<2&&(d.endsWith("/")?d=d.slice(0,-1):g=!0);else throw new Error(`Missing required param "${N}"`);d+=$}}return d||"/"}return{re:a,score:s,keys:o,parse:c,stringify:u}}function v_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function hf(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const o=v_(s[n],i[n]);if(o)return o;n++}if(Math.abs(i.length-s.length)===1){if(kc(s))return 1;if(kc(i))return-1}return i.length-s.length}function kc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const y_={type:0,value:""},w_=/[a-zA-Z0-9_]/;function I_(t){if(!t)return[[]];if(t==="/")return[[y_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(A){throw new Error(`ERR (${n})/"${f}": ${A}`)}let n=0,s=n;const i=[];let o;function a(){o&&i.push(o),o=[]}let c=0,u,f="",d="";function g(){f&&(n===0?o.push({type:0,value:f}):n===1||n===2||n===3?(o.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),f="")}function w(){f+=u}for(;c<t.length;){if(u=t[c++],u==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:u==="/"?(f&&g(),a()):u===":"?(g(),n=1):w();break;case 4:w(),n=s;break;case 1:u==="("?n=2:w_.test(u)?w():(g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:n=3:d+=u;break;case 3:g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),g(),a(),i}function b_(t,e,n){const s=__(I_(t.path),n),i=me(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function E_(t,e){const n=[],s=new Map;e=xc({strict:!1,end:!0,sensitive:!1},e);function i(g){return s.get(g)}function o(g,w,A){const N=!A,M=Nc(g);M.aliasOf=A&&A.record;const q=xc(e,g),K=[M];if("alias"in g){const H=typeof g.alias=="string"?[g.alias]:g.alias;for(const ie of H)K.push(Nc(me({},M,{components:A?A.record.components:M.components,path:ie,aliasOf:A?A.record:M})))}let $,B;for(const H of K){const{path:ie}=H;if(w&&ie[0]!=="/"){const re=w.record.path,S=re[re.length-1]==="/"?"":"/";H.path=w.record.path+(ie&&S+ie)}if($=b_(H,w,q),A?A.alias.push($):(B=B||$,B!==$&&B.alias.push($),N&&g.name&&!Dc($)&&a(g.name)),ff($)&&u($),M.children){const re=M.children;for(let S=0;S<re.length;S++)o(re[S],$,A&&A.children[S])}A=A||$}return B?()=>{a(B)}:Qs}function a(g){if(cf(g)){const w=s.get(g);w&&(s.delete(g),n.splice(n.indexOf(w),1),w.children.forEach(a),w.alias.forEach(a))}else{const w=n.indexOf(g);w>-1&&(n.splice(w,1),g.record.name&&s.delete(g.record.name),g.children.forEach(a),g.alias.forEach(a))}}function c(){return n}function u(g){const w=A_(g,n);n.splice(w,0,g),g.record.name&&!Dc(g)&&s.set(g.record.name,g)}function f(g,w){let A,N={},M,q;if("name"in g&&g.name){if(A=s.get(g.name),!A)throw Es(1,{location:g});q=A.record.name,N=me(Oc(w.params,A.keys.filter(B=>!B.optional).concat(A.parent?A.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),g.params&&Oc(g.params,A.keys.map(B=>B.name))),M=A.stringify(N)}else if(g.path!=null)M=g.path,A=n.find(B=>B.re.test(M)),A&&(N=A.parse(M),q=A.record.name);else{if(A=w.name?s.get(w.name):n.find(B=>B.re.test(w.path)),!A)throw Es(1,{location:g,currentLocation:w});q=A.record.name,N=me({},w.params,g.params),M=A.stringify(N)}const K=[];let $=A;for(;$;)K.unshift($.record),$=$.parent;return{name:q,path:M,params:N,matched:K,meta:S_(K)}}t.forEach(g=>o(g));function d(){n.length=0,s.clear()}return{addRoute:o,resolve:f,removeRoute:a,clearRoutes:d,getRoutes:c,getRecordMatcher:i}}function Oc(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Nc(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:T_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function T_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Dc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function S_(t){return t.reduce((e,n)=>me(e,n.meta),{})}function xc(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function A_(t,e){let n=0,s=e.length;for(;n!==s;){const o=n+s>>1;hf(t,e[o])<0?s=o:n=o+1}const i=C_(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function C_(t){let e=t;for(;e=e.parent;)if(ff(e)&&hf(t,e)===0)return e}function ff({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function R_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const o=s[i].replace(nf," "),a=o.indexOf("="),c=di(a<0?o:o.slice(0,a)),u=a<0?null:di(o.slice(a+1));if(c in e){let f=e[c];Pt(f)||(f=e[c]=[f]),f.push(u)}else e[c]=u}return e}function Lc(t){let e="";for(let n in t){const s=t[n];if(n=Km(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pt(s)?s.map(o=>o&&zo(o)):[s&&zo(s)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function P_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Pt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const k_=Symbol(""),Mc=Symbol(""),Ur=Symbol(""),df=Symbol(""),Ko=Symbol("");function Hs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function yn(t,e,n,s,i,o=a=>a()){const a=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((c,u)=>{const f=w=>{w===!1?u(Es(4,{from:n,to:e})):w instanceof Error?u(w):p_(w)?u(Es(2,{from:e,to:w})):(a&&s.enterCallbacks[i]===a&&typeof w=="function"&&a.push(w),c())},d=o(()=>t.call(s&&s.instances[i],e,n,f));let g=Promise.resolve(d);t.length<3&&(g=g.then(f)),g.catch(w=>u(w))})}function bo(t,e,n,s,i=o=>o()){const o=[];for(const a of t)for(const c in a.components){let u=a.components[c];if(!(e!=="beforeRouteEnter"&&!a.instances[c]))if(ef(u)){const d=(u.__vccOpts||u)[e];d&&o.push(yn(d,n,s,a,c,i))}else{let f=u();o.push(()=>f.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${a.path}"`);const g=Um(d)?d.default:d;a.mods[c]=d,a.components[c]=g;const A=(g.__vccOpts||g)[e];return A&&yn(A,n,s,a,c,i)()}))}}return o}function Uc(t){const e=Vt(Ur),n=Vt(df),s=dt(()=>{const u=pt(t.to);return e.resolve(u)}),i=dt(()=>{const{matched:u}=s.value,{length:f}=u,d=u[f-1],g=n.matched;if(!d||!g.length)return-1;const w=g.findIndex(bs.bind(null,d));if(w>-1)return w;const A=Fc(u[f-2]);return f>1&&Fc(d)===A&&g[g.length-1].path!==A?g.findIndex(bs.bind(null,u[f-2])):w}),o=dt(()=>i.value>-1&&L_(n.params,s.value.params)),a=dt(()=>i.value>-1&&i.value===n.matched.length-1&&af(n.params,s.value.params));function c(u={}){if(x_(u)){const f=e[pt(t.replace)?"replace":"push"](pt(t.to)).catch(Qs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:s,href:dt(()=>s.value.href),isActive:o,isExactActive:a,navigate:c}}function O_(t){return t.length===1?t[0]:t}const N_=Sh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Uc,setup(t,{slots:e}){const n=Pr(Uc(t)),{options:s}=Vt(Ur),i=dt(()=>({[jc(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[jc(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&O_(e.default(n));return t.custom?o:Aa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),D_=N_;function x_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function L_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Pt(i)||i.length!==s.length||s.some((o,a)=>o!==i[a]))return!1}return!0}function Fc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jc=(t,e,n)=>t??e??n,M_=Sh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Vt(Ko),i=dt(()=>t.route||s.value),o=Vt(Mc,0),a=dt(()=>{let f=pt(o);const{matched:d}=i.value;let g;for(;(g=d[f])&&!g.components;)f++;return f}),c=dt(()=>i.value.matched[a.value]);Ki(Mc,dt(()=>a.value+1)),Ki(k_,c),Ki(Ko,i);const u=zn();return Ji(()=>[u.value,c.value,t.name],([f,d,g],[w,A,N])=>{d&&(d.instances[g]=f,A&&A!==d&&f&&f===w&&(d.leaveGuards.size||(d.leaveGuards=A.leaveGuards),d.updateGuards.size||(d.updateGuards=A.updateGuards))),f&&d&&(!A||!bs(d,A)||!w)&&(d.enterCallbacks[g]||[]).forEach(M=>M(f))},{flush:"post"}),()=>{const f=i.value,d=t.name,g=c.value,w=g&&g.components[d];if(!w)return Vc(n.default,{Component:w,route:f});const A=g.props[d],N=A?A===!0?f.params:typeof A=="function"?A(f):A:null,q=Aa(w,me({},N,e,{onVnodeUnmounted:K=>{K.component.isUnmounted&&(g.instances[d]=null)},ref:u}));return Vc(n.default,{Component:q,route:f})||q}}});function Vc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const U_=M_;function F_(t){const e=E_(t.routes,t),n=t.parseQuery||R_,s=t.stringifyQuery||Lc,i=t.history,o=Hs(),a=Hs(),c=Hs(),u=Bp(pn);let f=pn;fs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=wo.bind(null,k=>""+k),g=wo.bind(null,Xm),w=wo.bind(null,di);function A(k,J){let z,X;return cf(k)?(z=e.getRecordMatcher(k),X=J):X=k,e.addRoute(X,z)}function N(k){const J=e.getRecordMatcher(k);J&&e.removeRoute(J)}function M(){return e.getRoutes().map(k=>k.record)}function q(k){return!!e.getRecordMatcher(k)}function K(k,J){if(J=me({},J||u.value),typeof k=="string"){const C=Io(n,k,J.path),O=e.resolve({path:C.path},J),x=i.createHref(C.fullPath);return me(C,O,{params:w(O.params),hash:di(C.hash),redirectedFrom:void 0,href:x})}let z;if(k.path!=null)z=me({},k,{path:Io(n,k.path,J.path).path});else{const C=me({},k.params);for(const O in C)C[O]==null&&delete C[O];z=me({},k,{params:g(C)}),J.params=g(J.params)}const X=e.resolve(z,J),de=k.hash||"";X.params=d(w(X.params));const v=Zm(s,me({},k,{hash:qm(de),path:X.path})),I=i.createHref(v);return me({fullPath:v,hash:de,query:s===Lc?P_(k.query):k.query||{}},X,{redirectedFrom:void 0,href:I})}function $(k){return typeof k=="string"?Io(n,k,u.value.path):me({},k)}function B(k,J){if(f!==k)return Es(8,{from:J,to:k})}function H(k){return S(k)}function ie(k){return H(me($(k),{replace:!0}))}function re(k){const J=k.matched[k.matched.length-1];if(J&&J.redirect){const{redirect:z}=J;let X=typeof z=="function"?z(k):z;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=$(X):{path:X},X.params={}),me({query:k.query,hash:k.hash,params:X.path!=null?{}:k.params},X)}}function S(k,J){const z=f=K(k),X=u.value,de=k.state,v=k.force,I=k.replace===!0,C=re(z);if(C)return S(me($(C),{state:typeof C=="object"?me({},de,C.state):de,force:v,replace:I}),J||z);const O=z;O.redirectedFrom=J;let x;return!v&&e_(s,X,z)&&(x=Es(16,{to:O,from:X}),at(X,X,!0,!1)),(x?Promise.resolve(x):E(O,X)).catch(D=>Kt(D)?Kt(D,2)?D:yt(D):ae(D,O,X)).then(D=>{if(D){if(Kt(D,2))return S(me({replace:I},$(D.to),{state:typeof D.to=="object"?me({},de,D.to.state):de,force:v}),J||O)}else D=b(O,X,!0,I,de);return T(O,X,D),D})}function _(k,J){const z=B(k,J);return z?Promise.reject(z):Promise.resolve()}function m(k){const J=ln.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(k):k()}function E(k,J){let z;const[X,de,v]=j_(k,J);z=bo(X.reverse(),"beforeRouteLeave",k,J);for(const C of X)C.leaveGuards.forEach(O=>{z.push(yn(O,k,J))});const I=_.bind(null,k,J);return z.push(I),et(z).then(()=>{z=[];for(const C of o.list())z.push(yn(C,k,J));return z.push(I),et(z)}).then(()=>{z=bo(de,"beforeRouteUpdate",k,J);for(const C of de)C.updateGuards.forEach(O=>{z.push(yn(O,k,J))});return z.push(I),et(z)}).then(()=>{z=[];for(const C of v)if(C.beforeEnter)if(Pt(C.beforeEnter))for(const O of C.beforeEnter)z.push(yn(O,k,J));else z.push(yn(C.beforeEnter,k,J));return z.push(I),et(z)}).then(()=>(k.matched.forEach(C=>C.enterCallbacks={}),z=bo(v,"beforeRouteEnter",k,J,m),z.push(I),et(z))).then(()=>{z=[];for(const C of a.list())z.push(yn(C,k,J));return z.push(I),et(z)}).catch(C=>Kt(C,8)?C:Promise.reject(C))}function T(k,J,z){c.list().forEach(X=>m(()=>X(k,J,z)))}function b(k,J,z,X,de){const v=B(k,J);if(v)return v;const I=J===pn,C=fs?history.state:{};z&&(X||I?i.replace(k.fullPath,me({scroll:I&&C&&C.scroll},de)):i.push(k.fullPath,de)),u.value=k,at(k,J,z,I),yt()}let y;function ye(){y||(y=i.listen((k,J,z)=>{if(!Nt.listening)return;const X=K(k),de=re(X);if(de){S(me(de,{replace:!0,force:!0}),X).catch(Qs);return}f=X;const v=u.value;fs&&l_(Ac(v.fullPath,z.delta),Mr()),E(X,v).catch(I=>Kt(I,12)?I:Kt(I,2)?(S(me($(I.to),{force:!0}),X).then(C=>{Kt(C,20)&&!z.delta&&z.type===pi.pop&&i.go(-1,!1)}).catch(Qs),Promise.reject()):(z.delta&&i.go(-z.delta,!1),ae(I,X,v))).then(I=>{I=I||b(X,v,!1),I&&(z.delta&&!Kt(I,8)?i.go(-z.delta,!1):z.type===pi.pop&&Kt(I,20)&&i.go(-1,!1)),T(X,v,I)}).catch(Qs)}))}let Ne=Hs(),Ae=Hs(),le;function ae(k,J,z){yt(k);const X=Ae.list();return X.length?X.forEach(de=>de(k,J,z)):console.error(k),Promise.reject(k)}function st(){return le&&u.value!==pn?Promise.resolve():new Promise((k,J)=>{Ne.add([k,J])})}function yt(k){return le||(le=!k,ye(),Ne.list().forEach(([J,z])=>k?z(k):J()),Ne.reset()),k}function at(k,J,z,X){const{scrollBehavior:de}=t;if(!fs||!de)return Promise.resolve();const v=!z&&c_(Ac(k.fullPath,0))||(X||!z)&&history.state&&history.state.scroll||null;return ph().then(()=>de(k,J,v)).then(I=>I&&a_(I)).catch(I=>ae(I,k,J))}const Ce=k=>i.go(k);let Re;const ln=new Set,Nt={currentRoute:u,listening:!0,addRoute:A,removeRoute:N,clearRoutes:e.clearRoutes,hasRoute:q,getRoutes:M,resolve:K,options:t,push:H,replace:ie,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:o.add,beforeResolve:a.add,afterEach:c.add,onError:Ae.add,isReady:st,install(k){const J=this;k.component("RouterLink",D_),k.component("RouterView",U_),k.config.globalProperties.$router=J,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>pt(u)}),fs&&!Re&&u.value===pn&&(Re=!0,H(i.location).catch(de=>{}));const z={};for(const de in pn)Object.defineProperty(z,de,{get:()=>u.value[de],enumerable:!0});k.provide(Ur,J),k.provide(df,ch(z)),k.provide(Ko,u);const X=k.unmount;ln.add(k),k.unmount=function(){ln.delete(k),ln.size<1&&(f=pn,y&&y(),y=null,u.value=pn,Re=!1,le=!1),X()}}};function et(k){return k.reduce((J,z)=>J.then(()=>m(z)),Promise.resolve())}return Nt}function j_(t,e){const n=[],s=[],i=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const c=e.matched[a];c&&(t.matched.find(f=>bs(f,c))?s.push(c):n.push(c));const u=t.matched[a];u&&(e.matched.find(f=>bs(f,u))||i.push(u))}return[n,s,i]}function wi(){return Vt(Ur)}const V_=()=>{};var $c={};/**
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
 */const pf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],a=t[n++],c=t[n++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],a=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},gf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const o=t[i],a=i+1<t.length,c=a?t[i+1]:0,u=i+2<t.length,f=u?t[i+2]:0,d=o>>2,g=(o&3)<<4|c>>4;let w=(c&15)<<2|f>>6,A=f&63;u||(A=64,a||(w=64)),s.push(n[d],n[g],n[w],n[A])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const f=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||c==null||f==null||g==null)throw new B_;const w=o<<2|c>>4;if(s.push(w),f!==64){const A=c<<4&240|f>>2;if(s.push(A),g!==64){const N=f<<6&192|g;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class B_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const H_=function(t){const e=pf(t);return gf.encodeByteArray(e,!0)},fr=function(t){return H_(t).replace(/\./g,"")},mf=function(t){try{return gf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function W_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const G_=()=>W_().__FIREBASE_DEFAULTS__,z_=()=>{if(typeof process>"u"||typeof $c>"u")return;const t=$c.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},q_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mf(t[1]);return e&&JSON.parse(e)},Ra=()=>{try{return V_()||G_()||z_()||q_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_f=t=>{var e,n;return(n=(e=Ra())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},K_=t=>{const e=_f(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},vf=()=>{var t;return(t=Ra())===null||t===void 0?void 0:t.config},yf=t=>{var e;return(e=Ra())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class J_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ii(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function wf(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function X_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fr(JSON.stringify(n)),fr(JSON.stringify(a)),""].join(".")}const ei={};function Y_(){const t={prod:[],emulator:[]};for(const e of Object.keys(ei))ei[e]?t.emulator.push(e):t.prod.push(e);return t}function Q_(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Bc=!1;function If(t,e){if(typeof window>"u"||typeof document>"u"||!Ii(window.location.host)||ei[t]===e||ei[t]||Bc)return;ei[t]=e;function n(w){return`__firebase__banner__${w}`}const s="__firebase__banner",o=Y_().prod.length>0;function a(){const w=document.getElementById(s);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function u(w,A){w.setAttribute("width","24"),w.setAttribute("id",A),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function f(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Bc=!0,a()},w}function d(w,A){w.setAttribute("id",A),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function g(){const w=Q_(s),A=n("text"),N=document.getElementById(A)||document.createElement("span"),M=n("learnmore"),q=document.getElementById(M)||document.createElement("a"),K=n("preprendIcon"),$=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const B=w.element;c(B),d(q,M);const H=f();u($,K),B.append($,N,q,H),document.body.appendChild(B)}o?(N.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Z_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function ev(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nv(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ef(){try{return typeof indexedDB=="object"}catch{return!1}}function Tf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function sv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const iv="FirebaseError";class Ot extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=iv,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?rv(o,s):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Ot(i,c,s)}}function rv(t,e){return t.replace(ov,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ov=/\{\$([^}]+)}/g;function av(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const o=t[i],a=e[i];if(Hc(o)&&Hc(a)){if(!Pn(o,a))return!1}else if(o!==a)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Hc(t){return t!==null&&typeof t=="object"}/**
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
 */function bi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function lv(t,e){const n=new cv(t,e);return n.subscribe.bind(n)}class cv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");uv(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Eo),i.error===void 0&&(i.error=Eo),i.complete===void 0&&(i.complete=Eo);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Eo(){}/**
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
 */const hv=1e3,fv=2,dv=4*60*60*1e3,pv=.5;function Wc(t,e=hv,n=fv){const s=e*Math.pow(n,t),i=Math.round(pv*s*(Math.random()-.5)*2);return Math.min(dv,s+i)}/**
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
 */function an(t){return t&&t._delegate?t._delegate:t}class kt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jn="[DEFAULT]";/**
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
 */class gv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new J_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e?.identifier),i=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_v(e))try{this.getOrInitializeService({instanceIdentifier:jn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});s.resolve(o)}catch{}}}}clearInstance(e=jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jn){return this.instances.has(e)}getOptions(e=jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);s===c&&a.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),o=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:mv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=jn){return this.component?this.component.multipleInstances?e:jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mv(t){return t===jn?void 0:t}function _v(t){return t.instantiationMode==="EAGER"}/**
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
 */class vv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const yv={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},wv=ve.INFO,Iv={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},bv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Iv[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fr{constructor(e){this.name=e,this._logLevel=wv,this._logHandler=bv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const Ev=(t,e)=>e.some(n=>t instanceof n);let Gc,zc;function Tv(){return Gc||(Gc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sv(){return zc||(zc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sf=new WeakMap,Jo=new WeakMap,Af=new WeakMap,To=new WeakMap,Pa=new WeakMap;function Av(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(Sn(t.result)),i()},a=()=>{s(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Sf.set(n,t)}).catch(()=>{}),Pa.set(e,t),e}function Cv(t){if(Jo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});Jo.set(t,e)}let Xo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Af.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rv(t){Xo=t(Xo)}function Pv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(So(this),e,...n);return Af.set(s,e.sort?e.sort():[e]),Sn(s)}:Sv().includes(t)?function(...e){return t.apply(So(this),e),Sn(Sf.get(this))}:function(...e){return Sn(t.apply(So(this),e))}}function kv(t){return typeof t=="function"?Pv(t):(t instanceof IDBTransaction&&Cv(t),Ev(t,Tv())?new Proxy(t,Xo):t)}function Sn(t){if(t instanceof IDBRequest)return Av(t);if(To.has(t))return To.get(t);const e=kv(t);return e!==t&&(To.set(t,e),Pa.set(e,t)),e}const So=t=>Pa.get(t);function Cf(t,e,{blocked:n,upgrade:s,blocking:i,terminated:o}={}){const a=indexedDB.open(t,e),c=Sn(a);return s&&a.addEventListener("upgradeneeded",u=>{s(Sn(a.result),u.oldVersion,u.newVersion,Sn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Ov=["get","getKey","getAll","getAllKeys","count"],Nv=["put","add","delete","clear"],Ao=new Map;function qc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ao.get(e))return Ao.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Nv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ov.includes(n)))return;const o=async function(a,...c){const u=this.transaction(a,i?"readwrite":"readonly");let f=u.store;return s&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),i&&u.done]))[0]};return Ao.set(e,o),o}Rv(t=>({...t,get:(e,n,s)=>qc(e,n)||t.get(e,n,s),has:(e,n)=>!!qc(e,n)||t.has(e,n)}));/**
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
 */class Dv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xv(t){const e=t.getComponent();return e?.type==="VERSION"}const Yo="@firebase/app",Kc="0.13.2";/**
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
 */const sn=new Fr("@firebase/app"),Lv="@firebase/app-compat",Mv="@firebase/analytics-compat",Uv="@firebase/analytics",Fv="@firebase/app-check-compat",jv="@firebase/app-check",Vv="@firebase/auth",$v="@firebase/auth-compat",Bv="@firebase/database",Hv="@firebase/data-connect",Wv="@firebase/database-compat",Gv="@firebase/functions",zv="@firebase/functions-compat",qv="@firebase/installations",Kv="@firebase/installations-compat",Jv="@firebase/messaging",Xv="@firebase/messaging-compat",Yv="@firebase/performance",Qv="@firebase/performance-compat",Zv="@firebase/remote-config",ey="@firebase/remote-config-compat",ty="@firebase/storage",ny="@firebase/storage-compat",sy="@firebase/firestore",iy="@firebase/ai",ry="@firebase/firestore-compat",oy="firebase",ay="11.10.0";/**
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
 */const Qo="[DEFAULT]",ly={[Yo]:"fire-core",[Lv]:"fire-core-compat",[Uv]:"fire-analytics",[Mv]:"fire-analytics-compat",[jv]:"fire-app-check",[Fv]:"fire-app-check-compat",[Vv]:"fire-auth",[$v]:"fire-auth-compat",[Bv]:"fire-rtdb",[Hv]:"fire-data-connect",[Wv]:"fire-rtdb-compat",[Gv]:"fire-fn",[zv]:"fire-fn-compat",[qv]:"fire-iid",[Kv]:"fire-iid-compat",[Jv]:"fire-fcm",[Xv]:"fire-fcm-compat",[Yv]:"fire-perf",[Qv]:"fire-perf-compat",[Zv]:"fire-rc",[ey]:"fire-rc-compat",[ty]:"fire-gcs",[ny]:"fire-gcs-compat",[sy]:"fire-fst",[ry]:"fire-fst-compat",[iy]:"fire-vertex","fire-js":"fire-js",[oy]:"fire-js-all"};/**
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
 */const dr=new Map,cy=new Map,Zo=new Map;function Jc(t,e){try{t.container.addComponent(e)}catch(n){sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bt(t){const e=t.name;if(Zo.has(e))return sn.debug(`There were multiple attempts to register component ${e}.`),!1;Zo.set(e,t);for(const n of dr.values())Jc(n,t);for(const n of cy.values())Jc(n,t);return!0}function ss(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const uy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},An=new ns("app","Firebase",uy);/**
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
 */class hy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}}/**
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
 */const As=ay;function Rf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Qo,automaticDataCollectionEnabled:!0},e),i=s.name;if(typeof i!="string"||!i)throw An.create("bad-app-name",{appName:String(i)});if(n||(n=vf()),!n)throw An.create("no-options");const o=dr.get(i);if(o){if(Pn(n,o.options)&&Pn(s,o.config))return o;throw An.create("duplicate-app",{appName:i})}const a=new vv(i);for(const u of Zo.values())a.addComponent(u);const c=new hy(n,s,a);return dr.set(i,c),c}function ka(t=Qo){const e=dr.get(t);if(!e&&t===Qo&&vf())return Rf();if(!e)throw An.create("no-app",{appName:t});return e}function _t(t,e,n){var s;let i=(s=ly[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${i}" with version "${e}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sn.warn(c.join(" "));return}Bt(new kt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const fy="firebase-heartbeat-database",dy=1,gi="firebase-heartbeat-store";let Co=null;function Pf(){return Co||(Co=Cf(fy,dy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gi)}catch(n){console.warn(n)}}}}).catch(t=>{throw An.create("idb-open",{originalErrorMessage:t.message})})),Co}async function py(t){try{const n=(await Pf()).transaction(gi),s=await n.objectStore(gi).get(kf(t));return await n.done,s}catch(e){if(e instanceof Ot)sn.warn(e.message);else{const n=An.create("idb-get",{originalErrorMessage:e?.message});sn.warn(n.message)}}}async function Xc(t,e){try{const s=(await Pf()).transaction(gi,"readwrite");await s.objectStore(gi).put(e,kf(t)),await s.done}catch(n){if(n instanceof Ot)sn.warn(n.message);else{const s=An.create("idb-set",{originalErrorMessage:n?.message});sn.warn(s.message)}}}function kf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gy=1024,my=30;class _y{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Yc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>my){const a=wy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){sn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Yc(),{heartbeatsToSend:s,unsentEntries:i}=vy(this._heartbeatsCache.heartbeats),o=fr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return sn.warn(n),""}}}function Yc(){return new Date().toISOString().substring(0,10)}function vy(t,e=gy){const n=[];let s=t.slice();for(const i of t){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Qc(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class yy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ef()?Tf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await py(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qc(t){return fr(JSON.stringify({version:2,heartbeats:t})).length}function wy(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function Iy(t){Bt(new kt("platform-logger",e=>new Dv(e),"PRIVATE")),Bt(new kt("heartbeat",e=>new _y(e),"PRIVATE")),_t(Yo,Kc,t),_t(Yo,Kc,"esm2017"),_t("fire-js","")}Iy("");var by="firebase",Ey="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t(by,Ey,"app");const Of="@firebase/installations",Oa="0.6.18";/**
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
 */const Nf=1e4,Df=`w:${Oa}`,xf="FIS_v2",Ty="https://firebaseinstallations.googleapis.com/v1",Sy=60*60*1e3,Ay="installations",Cy="Installations";/**
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
 */const Ry={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Yn=new ns(Ay,Cy,Ry);function Lf(t){return t instanceof Ot&&t.code.includes("request-failed")}/**
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
 */function Mf({projectId:t}){return`${Ty}/projects/${t}/installations`}function Uf(t){return{token:t.token,requestStatus:2,expiresIn:ky(t.expiresIn),creationTime:Date.now()}}async function Ff(t,e){const s=(await e.json()).error;return Yn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function jf({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Py(t,{refreshToken:e}){const n=jf(t);return n.append("Authorization",Oy(e)),n}async function Vf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function ky(t){return Number(t.replace("s","000"))}function Oy(t){return`${xf} ${t}`}/**
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
 */async function Ny({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Mf(t),i=jf(t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={fid:n,authVersion:xf,appId:t.appId,sdkVersion:Df},c={method:"POST",headers:i,body:JSON.stringify(a)},u=await Vf(()=>fetch(s,c));if(u.ok){const f=await u.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:Uf(f.authToken)}}else throw await Ff("Create Installation",u)}/**
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
 */function $f(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Dy(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const xy=/^[cdef][\w-]{21}$/,ea="";function Ly(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=My(t);return xy.test(n)?n:ea}catch{return ea}}function My(t){return Dy(t).substr(0,22)}/**
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
 */function jr(t){return`${t.appName}!${t.appId}`}/**
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
 */const Bf=new Map;function Hf(t,e){const n=jr(t);Wf(n,e),Uy(n,e)}function Wf(t,e){const n=Bf.get(t);if(n)for(const s of n)s(e)}function Uy(t,e){const n=Fy();n&&n.postMessage({key:t,fid:e}),jy()}let Bn=null;function Fy(){return!Bn&&"BroadcastChannel"in self&&(Bn=new BroadcastChannel("[Firebase] FID Change"),Bn.onmessage=t=>{Wf(t.data.key,t.data.fid)}),Bn}function jy(){Bf.size===0&&Bn&&(Bn.close(),Bn=null)}/**
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
 */const Vy="firebase-installations-database",$y=1,Qn="firebase-installations-store";let Ro=null;function Na(){return Ro||(Ro=Cf(Vy,$y,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qn)}}})),Ro}async function pr(t,e){const n=jr(t),i=(await Na()).transaction(Qn,"readwrite"),o=i.objectStore(Qn),a=await o.get(n);return await o.put(e,n),await i.done,(!a||a.fid!==e.fid)&&Hf(t,e.fid),e}async function Gf(t){const e=jr(t),s=(await Na()).transaction(Qn,"readwrite");await s.objectStore(Qn).delete(e),await s.done}async function Vr(t,e){const n=jr(t),i=(await Na()).transaction(Qn,"readwrite"),o=i.objectStore(Qn),a=await o.get(n),c=e(a);return c===void 0?await o.delete(n):await o.put(c,n),await i.done,c&&(!a||a.fid!==c.fid)&&Hf(t,c.fid),c}/**
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
 */async function Da(t){let e;const n=await Vr(t.appConfig,s=>{const i=By(s),o=Hy(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===ea?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function By(t){const e=t||{fid:Ly(),registrationStatus:0};return zf(e)}function Hy(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Yn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Wy(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Gy(t)}:{installationEntry:e}}async function Wy(t,e){try{const n=await Ny(t,e);return pr(t.appConfig,n)}catch(n){throw Lf(n)&&n.customData.serverCode===409?await Gf(t.appConfig):await pr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Gy(t){let e=await Zc(t.appConfig);for(;e.registrationStatus===1;)await $f(100),e=await Zc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Da(t);return s||n}return e}function Zc(t){return Vr(t,e=>{if(!e)throw Yn.create("installation-not-found");return zf(e)})}function zf(t){return zy(t)?{fid:t.fid,registrationStatus:0}:t}function zy(t){return t.registrationStatus===1&&t.registrationTime+Nf<Date.now()}/**
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
 */async function qy({appConfig:t,heartbeatServiceProvider:e},n){const s=Ky(t,n),i=Py(t,n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={installation:{sdkVersion:Df,appId:t.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},u=await Vf(()=>fetch(s,c));if(u.ok){const f=await u.json();return Uf(f)}else throw await Ff("Generate Auth Token",u)}function Ky(t,{fid:e}){return`${Mf(t)}/${e}/authTokens:generate`}/**
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
 */async function xa(t,e=!1){let n;const s=await Vr(t.appConfig,o=>{if(!qf(o))throw Yn.create("not-registered");const a=o.authToken;if(!e&&Yy(a))return o;if(a.requestStatus===1)return n=Jy(t,e),o;{if(!navigator.onLine)throw Yn.create("app-offline");const c=Zy(o);return n=Xy(t,c),c}});return n?await n:s.authToken}async function Jy(t,e){let n=await eu(t.appConfig);for(;n.authToken.requestStatus===1;)await $f(100),n=await eu(t.appConfig);const s=n.authToken;return s.requestStatus===0?xa(t,e):s}function eu(t){return Vr(t,e=>{if(!qf(e))throw Yn.create("not-registered");const n=e.authToken;return e0(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Xy(t,e){try{const n=await qy(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await pr(t.appConfig,s),n}catch(n){if(Lf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Gf(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await pr(t.appConfig,s)}throw n}}function qf(t){return t!==void 0&&t.registrationStatus===2}function Yy(t){return t.requestStatus===2&&!Qy(t)}function Qy(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Sy}function Zy(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function e0(t){return t.requestStatus===1&&t.requestTime+Nf<Date.now()}/**
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
 */async function t0(t){const e=t,{installationEntry:n,registrationPromise:s}=await Da(e);return s?s.catch(console.error):xa(e).catch(console.error),n.fid}/**
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
 */async function n0(t,e=!1){const n=t;return await s0(n),(await xa(n,e)).token}async function s0(t){const{registrationPromise:e}=await Da(t);e&&await e}/**
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
 */function i0(t){if(!t||!t.options)throw Po("App Configuration");if(!t.name)throw Po("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Po(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Po(t){return Yn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf="installations",r0="installations-internal",o0=t=>{const e=t.getProvider("app").getImmediate(),n=i0(e),s=ss(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},a0=t=>{const e=t.getProvider("app").getImmediate(),n=ss(e,Kf).getImmediate();return{getId:()=>t0(n),getToken:i=>n0(n,i)}};function l0(){Bt(new kt(Kf,o0,"PUBLIC")),Bt(new kt(r0,a0,"PRIVATE"))}l0();_t(Of,Oa);_t(Of,Oa,"esm2017");/**
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
 */const gr="analytics",c0="firebase_id",u0="origin",h0=60*1e3,f0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",La="https://www.googletagmanager.com/gtag/js";/**
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
 */const nt=new Fr("@firebase/analytics");/**
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
 */const d0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ot=new ns("analytics","Analytics",d0);/**
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
 */function p0(t){if(!t.startsWith(La)){const e=ot.create("invalid-gtag-resource",{gtagURL:t});return nt.warn(e.message),""}return t}function Jf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function g0(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function m0(t,e){const n=g0("firebase-js-sdk-policy",{createScriptURL:p0}),s=document.createElement("script"),i=`${La}?l=${t}&id=${e}`;s.src=n?n?.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function _0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function v0(t,e,n,s,i,o){const a=s[i];try{if(a)await e[a];else{const u=(await Jf(n)).find(f=>f.measurementId===i);u&&await e[u.appId]}}catch(c){nt.error(c)}t("config",i,o)}async function y0(t,e,n,s,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const c=await Jf(n);for(const u of a){const f=c.find(g=>g.measurementId===u),d=f&&e[f.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",s,i||{})}catch(o){nt.error(o)}}function w0(t,e,n,s){async function i(o,...a){try{if(o==="event"){const[c,u]=a;await y0(t,e,n,c,u)}else if(o==="config"){const[c,u]=a;await v0(t,e,n,s,c,u)}else if(o==="consent"){const[c,u]=a;t("consent",c,u)}else if(o==="get"){const[c,u,f]=a;t("get",c,u,f)}else if(o==="set"){const[c]=a;t("set",c)}else t(o,...a)}catch(c){nt.error(c)}}return i}function I0(t,e,n,s,i){let o=function(...a){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=w0(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function b0(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(La)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=30,T0=1e3;class S0{constructor(e={},n=T0){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Xf=new S0;function A0(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function C0(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:A0(s)},o=f0.replace("{app-id}",n),a=await fetch(o,i);if(a.status!==200&&a.status!==304){let c="";try{const u=await a.json();!((e=u.error)===null||e===void 0)&&e.message&&(c=u.error.message)}catch{}throw ot.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function R0(t,e=Xf,n){const{appId:s,apiKey:i,measurementId:o}=t.options;if(!s)throw ot.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:s};throw ot.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new O0;return setTimeout(async()=>{c.abort()},h0),Yf({appId:s,apiKey:i,measurementId:o},a,c,e)}async function Yf(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=Xf){var o;const{appId:a,measurementId:c}=t;try{await P0(s,e)}catch(u){if(c)return nt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u?.message}]`),{appId:a,measurementId:c};throw u}try{const u=await C0(t);return i.deleteThrottleMetadata(a),u}catch(u){const f=u;if(!k0(f)){if(i.deleteThrottleMetadata(a),c)return nt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f?.message}]`),{appId:a,measurementId:c};throw u}const d=Number((o=f?.customData)===null||o===void 0?void 0:o.httpStatus)===503?Wc(n,i.intervalMillis,E0):Wc(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(a,g),nt.debug(`Calling attemptFetch again in ${d} millis`),Yf(t,g,s,i)}}function P0(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),s(ot.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function k0(t){if(!(t instanceof Ot)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class O0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function N0(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const o=await e,a=Object.assign(Object.assign({},s),{send_to:o});t("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D0(){if(Ef())try{await Tf()}catch(t){return nt.warn(ot.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return nt.warn(ot.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function x0(t,e,n,s,i,o,a){var c;const u=R0(t);u.then(A=>{n[A.measurementId]=A.appId,t.options.measurementId&&A.measurementId!==t.options.measurementId&&nt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>nt.error(A)),e.push(u);const f=D0().then(A=>{if(A)return s.getId()}),[d,g]=await Promise.all([u,f]);b0(o)||m0(o,d.measurementId),i("js",new Date);const w=(c=a?.config)!==null&&c!==void 0?c:{};return w[u0]="firebase",w.update=!0,g!=null&&(w[c0]=g),i("config",d.measurementId,w),d.measurementId}/**
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
 */class L0{constructor(e){this.app=e}_delete(){return delete ti[this.app.options.appId],Promise.resolve()}}let ti={},tu=[];const nu={};let ko="dataLayer",M0="gtag",su,Qf,iu=!1;function U0(){const t=[];if(bf()&&t.push("This is a browser extension environment."),sv()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=ot.create("invalid-analytics-context",{errorInfo:e});nt.warn(n.message)}}function F0(t,e,n){U0();const s=t.options.appId;if(!s)throw ot.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)nt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ot.create("no-api-key");if(ti[s]!=null)throw ot.create("already-exists",{id:s});if(!iu){_0(ko);const{wrappedGtag:o,gtagCore:a}=I0(ti,tu,nu,ko,M0);Qf=o,su=a,iu=!0}return ti[s]=x0(t,tu,nu,e,su,ko,n),new L0(t)}function j0(t=ka()){t=an(t);const e=ss(t,gr);return e.isInitialized()?e.getImmediate():V0(t)}function V0(t,e={}){const n=ss(t,gr);if(n.isInitialized()){const i=n.getImmediate();if(Pn(e,n.getOptions()))return i;throw ot.create("already-initialized")}return n.initialize({options:e})}function $0(t,e,n,s){t=an(t),N0(Qf,ti[t.app.options.appId],e,n,s).catch(i=>nt.error(i))}const ru="@firebase/analytics",ou="0.10.17";function B0(){Bt(new kt(gr,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return F0(s,i,n)},"PUBLIC")),Bt(new kt("analytics-internal",t,"PRIVATE")),_t(ru,ou),_t(ru,ou,"esm2017");function t(e){try{const n=e.getProvider(gr).getImmediate();return{logEvent:(s,i,o)=>$0(n,s,i,o)}}catch(n){throw ot.create("interop-component-reg-failed",{reason:n})}}}B0();function Ma(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Zf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const H0=Zf,ed=new ns("auth","Firebase",Zf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new Fr("@firebase/auth");function W0(t,...e){mr.logLevel<=ve.WARN&&mr.warn(`Auth (${As}): ${t}`,...e)}function Zi(t,...e){mr.logLevel<=ve.ERROR&&mr.error(`Auth (${As}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,...e){throw Fa(t,...e)}function At(t,...e){return Fa(t,...e)}function Ua(t,e,n){const s=Object.assign(Object.assign({},H0()),{[e]:n});return new ns("auth","Firebase",s).create(e,{appName:t.name})}function qn(t){return Ua(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function G0(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ht(t,"argument-error"),Ua(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fa(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ed.create(t,...e)}function ne(t,e,...n){if(!t)throw Fa(e,...n)}function Zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zi(e),new Error(e)}function rn(t,e){t||Zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function z0(){return au()==="http:"||au()==="https:"}function au(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(z0()||bf()||"connection"in navigator)?navigator.onLine:!0}function K0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n){this.shortDelay=e,this.longDelay=n,rn(n>e,"Short delay should be less than long delay!"),this.isMobile=Z_()||tv()}get(){return q0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t,e){rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Y0=new Ei(3e4,6e4);function Va(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Cs(t,e,n,s,i={}){return nd(t,i,async()=>{let o={},a={};s&&(e==="GET"?a=s:o={body:JSON.stringify(s)});const c=bi(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const f=Object.assign({method:e,headers:u},o);return ev()||(f.referrerPolicy="no-referrer"),t.emulatorConfig&&Ii(t.emulatorConfig.host)&&(f.credentials="include"),td.fetch()(await sd(t,t.config.apiHost,n,c),f)})}async function nd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},J0),e);try{const i=new Z0(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Gi(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[u,f]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Gi(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Gi(t,"user-disabled",a);const d=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Ua(t,d,f);Ht(t,d)}}catch(i){if(i instanceof Ot)throw i;Ht(t,"network-request-failed",{message:String(i)})}}async function Q0(t,e,n,s,i={}){const o=await Cs(t,e,n,s,i);return"mfaPendingCredential"in o&&Ht(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function sd(t,e,n,s){const i=`${e}${n}?${s}`,o=t,a=o.config.emulator?ja(t.config,i):`${t.config.apiScheme}://${i}`;return X0.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class Z0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(At(this.auth,"network-request-failed")),Y0.get())})}}function Gi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=At(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ew(t,e){return Cs(t,"POST","/v1/accounts:delete",e)}async function _r(t,e){return Cs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tw(t,e=!1){const n=an(t),s=await n.getIdToken(e),i=$a(s);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o?.sign_in_provider;return{claims:i,token:s,authTime:ni(Oo(i.auth_time)),issuedAtTime:ni(Oo(i.iat)),expirationTime:ni(Oo(i.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Oo(t){return Number(t)*1e3}function $a(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Zi("JWT malformed, contained fewer than 3 sections"),null;try{const i=mf(n);return i?JSON.parse(i):(Zi("Failed to decode base64 JWT payload"),null)}catch(i){return Zi("Caught error parsing JWT payload as JSON",i?.toString()),null}}function lu(t){const e=$a(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ot&&nw(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function nw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ni(this.lastLoginAt),this.creationTime=ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await mi(t,_r(n,{idToken:s}));ne(i?.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?id(o.providerUserInfo):[],c=rw(t.providerData,a),u=t.isAnonymous,f=!(t.email&&o.passwordHash)&&!c?.length,d=u?f:!1,g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new na(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,g)}async function iw(t){const e=an(t);await vr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rw(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function id(t){return t.map(e=>{var{providerId:n}=e,s=Ma(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ow(t,e){const n=await nd(t,{},async()=>{const s=bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,a=await sd(t,i,"/v1/token",`key=${o}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:s};return t.emulatorConfig&&Ii(t.emulatorConfig.host)&&(u.credentials="include"),td.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aw(t,e){return Cs(t,"POST","/v2/accounts:revokeToken",Va(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=lu(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:o}=await ow(e,n);this.updateTokensAndExpiration(s,i,Number(o))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:o}=n,a=new vs;return s&&(ne(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),i&&(ne(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(ne(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vs,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Et{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,o=Ma(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new na(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await mi(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tw(this,e)}reload(){return iw(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Et(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await vr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bt(this.auth.app))return Promise.reject(qn(this.auth));const e=await this.getIdToken();return await mi(this,ew(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,o,a,c,u,f,d;const g=(s=n.displayName)!==null&&s!==void 0?s:void 0,w=(i=n.email)!==null&&i!==void 0?i:void 0,A=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,N=(a=n.photoURL)!==null&&a!==void 0?a:void 0,M=(c=n.tenantId)!==null&&c!==void 0?c:void 0,q=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,K=(f=n.createdAt)!==null&&f!==void 0?f:void 0,$=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:B,emailVerified:H,isAnonymous:ie,providerData:re,stsTokenManager:S}=n;ne(B&&S,e,"internal-error");const _=vs.fromJSON(this.name,S);ne(typeof B=="string",e,"internal-error"),gn(g,e.name),gn(w,e.name),ne(typeof H=="boolean",e,"internal-error"),ne(typeof ie=="boolean",e,"internal-error"),gn(A,e.name),gn(N,e.name),gn(M,e.name),gn(q,e.name),gn(K,e.name),gn($,e.name);const m=new Et({uid:B,auth:e,email:w,emailVerified:H,displayName:g,isAnonymous:ie,photoURL:N,phoneNumber:A,tenantId:M,stsTokenManager:_,createdAt:K,lastLoginAt:$});return re&&Array.isArray(re)&&(m.providerData=re.map(E=>Object.assign({},E))),q&&(m._redirectEventId=q),m}static async _fromIdTokenResponse(e,n,s=!1){const i=new vs;i.updateFromServerResponse(n);const o=new Et({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await vr(o),o}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];ne(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?id(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!o?.length,c=new vs;c.updateFromIdToken(s);const u=new Et({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new na(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!o?.length};return Object.assign(u,f),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=new Map;function en(t){rn(t instanceof Function,"Expected a class definition");let e=cu.get(t);return e?(rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cu.set(t,e),e)}/**
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
 */class rd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rd.type="NONE";const uu=rd;/**
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
 */function er(t,e,n){return`firebase:${t}:${e}:${n}`}class ys{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:o}=this.auth;this.fullUserKey=er(this.userKey,i.apiKey,o),this.fullPersistenceKey=er("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await _r(this.auth,{idToken:e}).catch(()=>{});return n?Et._fromGetAccountInfoResponse(this.auth,n,e):null}return Et._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ys(en(uu),e,s);const i=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||en(uu);const a=er(s,e.config.apiKey,e.name);let c=null;for(const f of n)try{const d=await f._get(a);if(d){let g;if(typeof d=="string"){const w=await _r(e,{idToken:d}).catch(()=>{});if(!w)break;g=await Et._fromGetAccountInfoResponse(e,w,d)}else g=Et._fromJSON(e,d);f!==o&&(c=g),o=f;break}}catch{}const u=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new ys(o,e,s):(o=u[0],c&&await o._set(a,c.toJSON()),await Promise.all(n.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new ys(o,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(od(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hd(e))return"Blackberry";if(fd(e))return"Webos";if(ad(e))return"Safari";if((e.includes("chrome/")||ld(e))&&!e.includes("edge/"))return"Chrome";if(ud(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function od(t=Ze()){return/firefox\//i.test(t)}function ad(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ld(t=Ze()){return/crios\//i.test(t)}function cd(t=Ze()){return/iemobile/i.test(t)}function ud(t=Ze()){return/android/i.test(t)}function hd(t=Ze()){return/blackberry/i.test(t)}function fd(t=Ze()){return/webos/i.test(t)}function Ba(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lw(t=Ze()){var e;return Ba(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cw(){return nv()&&document.documentMode===10}function dd(t=Ze()){return Ba(t)||ud(t)||fd(t)||hd(t)||/windows phone/i.test(t)||cd(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(t,e=[]){let n;switch(t){case"Browser":n=hu(Ze());break;case"Worker":n=`${hu(Ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${As}/${s}`}/**
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
 */class uw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=o=>new Promise((a,c)=>{try{const u=e(o);a(u)}catch(u){c(u)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function hw(t,e={}){return Cs(t,"GET","/v2/passwordPolicy",Va(t,e))}/**
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
 */const fw=6;class dw{constructor(e){var n,s,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:fw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,o,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(s=u.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fu(this),this.idTokenSubscription=new fu(this),this.beforeStateQueue=new uw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ed,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var s,i,o;if(!this._deleted&&(this.persistenceManager=await ys.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _r(this,{idToken:e}),s=await Et._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(bt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&u?.user&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vr(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=K0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bt(this.app))return Promise.reject(qn(this));const n=e?an(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bt(this.app)?Promise.reject(qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bt(this.app)?Promise.reject(qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hw(this),n=new dw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ns("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await aw(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await ys.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,s,i);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&W0(`Error while retrieving App Check token: ${n.error}`),n?.token}}function $r(t){return an(t)}class fu{constructor(e){this.auth=e,this.observer=null,this.addObserver=lv(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ha={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gw(t){Ha=t}function mw(t){return Ha.loadJS(t)}function _w(){return Ha.gapiScript}function vw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t,e){const n=ss(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Pn(o,e??{}))return i;Ht(i,"already-initialized")}return n.initialize({options:e})}function ww(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(en);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function Iw(t,e,n){const s=$r(t);ne(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,o=gd(e),{host:a,port:c}=bw(e),u=c===null?"":`:${c}`,f={url:`${o}//${a}${u}/`},d=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){ne(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ne(Pn(f,s.config.emulator)&&Pn(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=f,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,Ii(a)?(wf(`${o}//${a}${u}`),If("Auth",!0)):Ew()}function gd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bw(t){const e=gd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const o=i[1];return{host:o,port:du(s.substr(o.length+1))}}else{const[o,a]=s.split(":");return{host:o,port:du(a)}}}function du(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ew(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,n){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ws(t,e){return Q0(t,"POST","/v1/accounts:signInWithIdp",Va(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="http://localhost";class Zn extends md{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,o=Ma(n,["providerId","signInMethod"]);if(!s||!i)return null;const a=new Zn(s,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return ws(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ws(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ws(e,n)}buildRequest(){const e={requestUri:Tw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ti extends Wa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Ti{constructor(){super("facebook.com")}static credential(e){return Zn._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.FACEBOOK_SIGN_IN_METHOD="facebook.com";In.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Yt.credential(n,s)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Ti{constructor(){super("github.com")}static credential(e){return Zn._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Ti{constructor(){super("twitter.com")}static credential(e,n){return Zn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return En.credential(n,s)}catch{return null}}}En.TWITTER_SIGN_IN_METHOD="twitter.com";En.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const o=await Et._fromIdTokenResponse(e,s,i),a=pu(s);return new Ts({user:o,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=pu(s);return new Ts({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function pu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Ot{constructor(e,n,s,i){var o;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,yr.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new yr(e,n,s,i)}}function _d(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?yr._fromErrorAndOperation(t,o,e,s):o})}async function Sw(t,e,n=!1){const s=await mi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ts._forOperation(t,"link",s)}/**
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
 */async function Aw(t,e,n=!1){const{auth:s}=t;if(bt(s.app))return Promise.reject(qn(s));const i="reauthenticate";try{const o=await mi(t,_d(s,i,e,t),n);ne(o.idToken,s,"internal-error");const a=$a(o.idToken);ne(a,s,"internal-error");const{sub:c}=a;return ne(t.uid===c,s,"user-mismatch"),Ts._forOperation(t,i,o)}catch(o){throw o?.code==="auth/user-not-found"&&Ht(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(t,e,n=!1){if(bt(t.app))return Promise.reject(qn(t));const s="signIn",i=await _d(t,s,e),o=await Ts._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(o.user),o}function Rw(t,e,n,s){return an(t).onIdTokenChanged(e,n,s)}function Pw(t,e,n){return an(t).beforeAuthStateChanged(e,n)}function kw(t,e,n,s){return an(t).onAuthStateChanged(e,n,s)}const wr="__sak";/**
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
 */class vd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wr,"1"),this.storage.removeItem(wr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=1e3,Nw=10;class yd extends vd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},o=this.storage.getItem(s);cw()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Nw):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Ow)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yd.type="LOCAL";const Dw=yd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd extends vd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wd.type="SESSION";const Id=wd;/**
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
 */function xw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Br{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Br(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const c=Array.from(a).map(async f=>f(n.origin,o)),u=await xw(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Br.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Lw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((c,u)=>{const f=Ga("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:i,onMessage(g){const w=g;if(w.data.eventId===f)switch(w.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(w.data.response);break;default:clearTimeout(d),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return window}function Mw(t){$t().location.href=t}/**
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
 */function bd(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function Uw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fw(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jw(){return bd()?self:null}/**
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
 */const Ed="firebaseLocalStorageDb",Vw=1,Ir="firebaseLocalStorage",Td="fbase_key";class Si{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hr(t,e){return t.transaction([Ir],e?"readwrite":"readonly").objectStore(Ir)}function $w(){const t=indexedDB.deleteDatabase(Ed);return new Si(t).toPromise()}function sa(){const t=indexedDB.open(Ed,Vw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ir,{keyPath:Td})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ir)?e(s):(s.close(),await $w(),e(await sa()))})})}async function gu(t,e,n){const s=Hr(t,!0).put({[Td]:e,value:n});return new Si(s).toPromise()}async function Bw(t,e){const n=Hr(t,!1).get(e),s=await new Si(n).toPromise();return s===void 0?null:s.value}function mu(t,e){const n=Hr(t,!0).delete(e);return new Si(n).toPromise()}const Hw=800,Ww=3;class Sd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Ww)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Br._getInstance(jw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Uw(),!this.activeServiceWorker)return;this.sender=new Lw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sa();return await gu(e,wr,"1"),await mu(e,wr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>gu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Bw(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Hr(i,!1).getAll();return new Si(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sd.type="LOCAL";const Gw=Sd;new Ei(3e4,6e4);/**
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
 */function Ad(t,e){return e?en(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class za extends md{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zw(t){return Cw(t.auth,new za(t),t.bypassAuthState)}function qw(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),Aw(n,new za(t),t.bypassAuthState)}async function Kw(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),Sw(n,new za(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n,s,i,o=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:s,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zw;case"linkViaPopup":case"linkViaRedirect":return Kw;case"reauthViaPopup":case"reauthViaRedirect":return qw;default:Ht(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=new Ei(2e3,1e4);async function Xw(t,e,n){if(bt(t.app))return Promise.reject(At(t,"operation-not-supported-in-this-environment"));const s=$r(t);G0(t,e,Wa);const i=Ad(s,n);return new Hn(s,"signInViaPopup",e,i).executeNotNull()}class Hn extends Cd{constructor(e,n,s,i,o){super(e,n,i,o),this.provider=s,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=Ga();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Jw.get())};e()}}Hn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="pendingRedirect",tr=new Map;class Qw extends Cd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=tr.get(this.auth._key());if(!e){try{const s=await Zw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}tr.set(this.auth._key(),e)}return this.bypassAuthState||tr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zw(t,e){const n=nI(e),s=tI(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function eI(t,e){tr.set(t._key(),e)}function tI(t){return en(t._redirectPersistence)}function nI(t){return er(Yw,t.config.apiKey,t.name)}async function sI(t,e,n=!1){if(bt(t.app))return Promise.reject(qn(t));const s=$r(t),i=Ad(s,e),a=await new Qw(s,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=10*60*1e3;class rI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Rd(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(At(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iI&&this.cachedEventUids.clear(),this.cachedEventUids.has(_u(e))}saveEventToCache(e){this.cachedEventUids.add(_u(e)),this.lastProcessedEventTime=Date.now()}}function _u(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Rd({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function oI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(t,e={}){return Cs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cI=/^https?/;async function uI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aI(t);for(const n of e)try{if(hI(n))return}catch{}Ht(t,"unauthorized-domain")}function hI(t){const e=ta(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!cI.test(n))return!1;if(lI.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const fI=new Ei(3e4,6e4);function vu(){const t=$t().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dI(t){return new Promise((e,n)=>{var s,i,o;function a(){vu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vu(),n(At(t,"network-request-failed"))},timeout:fI.get()})}if(!((i=(s=$t().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=$t().gapi)===null||o===void 0)&&o.load)a();else{const c=vw("iframefcb");return $t()[c]=()=>{gapi.load?a():n(At(t,"network-request-failed"))},mw(`${_w()}?onload=${c}`).catch(u=>n(u))}}).catch(e=>{throw nr=null,e})}let nr=null;function pI(t){return nr=nr||dI(t),nr}/**
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
 */const gI=new Ei(5e3,15e3),mI="__/auth/iframe",_I="emulator/auth/iframe",vI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wI(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ja(e,_I):`https://${t.config.authDomain}/${mI}`,s={apiKey:e.apiKey,appName:t.name,v:As},i=yI.get(t.config.apiHost);i&&(s.eid=i);const o=t._getFrameworks();return o.length&&(s.fw=o.join(",")),`${n}?${bi(s).slice(1)}`}async function II(t){const e=await pI(t),n=$t().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:wI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vI,dontclear:!0},s=>new Promise(async(i,o)=>{await s.restyle({setHideOnLeave:!1});const a=At(t,"network-request-failed"),c=$t().setTimeout(()=>{o(a)},gI.get());function u(){$t().clearTimeout(c),i(s)}s.ping(u).then(u,()=>{o(a)})}))}/**
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
 */const bI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EI=500,TI=600,SI="_blank",AI="http://localhost";class yu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CI(t,e,n,s=EI,i=TI){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u=Object.assign(Object.assign({},bI),{width:s.toString(),height:i.toString(),top:o,left:a}),f=Ze().toLowerCase();n&&(c=ld(f)?SI:n),od(f)&&(e=e||AI,u.scrollbars="yes");const d=Object.entries(u).reduce((w,[A,N])=>`${w}${A}=${N},`,"");if(lw(f)&&c!=="_self")return RI(e||"",c),new yu(null);const g=window.open(e||"",c,d);ne(g,t,"popup-blocked");try{g.focus()}catch{}return new yu(g)}function RI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const PI="__/auth/handler",kI="emulator/auth/handler",OI=encodeURIComponent("fac");async function wu(t,e,n,s,i,o){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:As,eventId:i};if(e instanceof Wa){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",av(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof Ti){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const u=await t._getAppCheckToken(),f=u?`#${OI}=${encodeURIComponent(u)}`:"";return`${NI(t)}?${bi(c).slice(1)}${f}`}function NI({config:t}){return t.emulator?ja(t,kI):`https://${t.authDomain}/${PI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="webStorageSupport";class DI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Id,this._completeRedirectFn=sI,this._overrideRedirectResult=eI}async _openPopup(e,n,s,i){var o;rn((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await wu(e,n,s,ta(),i);return CI(e,a,Ga())}async _openRedirect(e,n,s,i){await this._originValidation(e);const o=await wu(e,n,s,ta(),i);return Mw(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(rn(o,"If manager is not set, promise should be"),o)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await II(e),s=new rI(e);return n.register("authEvent",i=>(ne(i?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(No,{type:No},i=>{var o;const a=(o=i?.[0])===null||o===void 0?void 0:o[No];a!==void 0&&n(!!a),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dd()||ad()||Ba()}}const xI=DI;var Iu="@firebase/auth",bu="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UI(t){Bt(new kt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pd(t)},f=new pw(s,i,o,u);return ww(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Bt(new kt("auth-internal",e=>{const n=$r(e.getProvider("auth").getImmediate());return(s=>new LI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_t(Iu,bu,MI(t)),_t(Iu,bu,"esm2017")}/**
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
 */const FI=5*60,jI=yf("authIdTokenMaxAge")||FI;let Eu=null;const VI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>jI)return;const i=n?.token;Eu!==i&&(Eu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $I(t=ka()){const e=ss(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yw(t,{popupRedirectResolver:xI,persistence:[Gw,Dw,Id]}),s=yf("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(s,location.origin);if(location.origin===o.origin){const a=VI(o.toString());Pw(n,a,()=>a(n.currentUser)),Rw(n,c=>a(c))}}const i=_f("auth");return i&&Iw(n,`http://${i}`),n}function BI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}gw({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const o=At("internal-error");o.customData=i,n(o)},s.type="text/javascript",s.charset="UTF-8",BI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UI("Browser");var Tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qa;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,_){function m(){}m.prototype=_.prototype,S.D=_.prototype,S.prototype=new m,S.prototype.constructor=S,S.C=function(E,T,b){for(var y=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)y[ye-2]=arguments[ye];return _.prototype[T].apply(E,y)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,_,m){m||(m=0);var E=Array(16);if(typeof _=="string")for(var T=0;16>T;++T)E[T]=_.charCodeAt(m++)|_.charCodeAt(m++)<<8|_.charCodeAt(m++)<<16|_.charCodeAt(m++)<<24;else for(T=0;16>T;++T)E[T]=_[m++]|_[m++]<<8|_[m++]<<16|_[m++]<<24;_=S.g[0],m=S.g[1],T=S.g[2];var b=S.g[3],y=_+(b^m&(T^b))+E[0]+3614090360&4294967295;_=m+(y<<7&4294967295|y>>>25),y=b+(T^_&(m^T))+E[1]+3905402710&4294967295,b=_+(y<<12&4294967295|y>>>20),y=T+(m^b&(_^m))+E[2]+606105819&4294967295,T=b+(y<<17&4294967295|y>>>15),y=m+(_^T&(b^_))+E[3]+3250441966&4294967295,m=T+(y<<22&4294967295|y>>>10),y=_+(b^m&(T^b))+E[4]+4118548399&4294967295,_=m+(y<<7&4294967295|y>>>25),y=b+(T^_&(m^T))+E[5]+1200080426&4294967295,b=_+(y<<12&4294967295|y>>>20),y=T+(m^b&(_^m))+E[6]+2821735955&4294967295,T=b+(y<<17&4294967295|y>>>15),y=m+(_^T&(b^_))+E[7]+4249261313&4294967295,m=T+(y<<22&4294967295|y>>>10),y=_+(b^m&(T^b))+E[8]+1770035416&4294967295,_=m+(y<<7&4294967295|y>>>25),y=b+(T^_&(m^T))+E[9]+2336552879&4294967295,b=_+(y<<12&4294967295|y>>>20),y=T+(m^b&(_^m))+E[10]+4294925233&4294967295,T=b+(y<<17&4294967295|y>>>15),y=m+(_^T&(b^_))+E[11]+2304563134&4294967295,m=T+(y<<22&4294967295|y>>>10),y=_+(b^m&(T^b))+E[12]+1804603682&4294967295,_=m+(y<<7&4294967295|y>>>25),y=b+(T^_&(m^T))+E[13]+4254626195&4294967295,b=_+(y<<12&4294967295|y>>>20),y=T+(m^b&(_^m))+E[14]+2792965006&4294967295,T=b+(y<<17&4294967295|y>>>15),y=m+(_^T&(b^_))+E[15]+1236535329&4294967295,m=T+(y<<22&4294967295|y>>>10),y=_+(T^b&(m^T))+E[1]+4129170786&4294967295,_=m+(y<<5&4294967295|y>>>27),y=b+(m^T&(_^m))+E[6]+3225465664&4294967295,b=_+(y<<9&4294967295|y>>>23),y=T+(_^m&(b^_))+E[11]+643717713&4294967295,T=b+(y<<14&4294967295|y>>>18),y=m+(b^_&(T^b))+E[0]+3921069994&4294967295,m=T+(y<<20&4294967295|y>>>12),y=_+(T^b&(m^T))+E[5]+3593408605&4294967295,_=m+(y<<5&4294967295|y>>>27),y=b+(m^T&(_^m))+E[10]+38016083&4294967295,b=_+(y<<9&4294967295|y>>>23),y=T+(_^m&(b^_))+E[15]+3634488961&4294967295,T=b+(y<<14&4294967295|y>>>18),y=m+(b^_&(T^b))+E[4]+3889429448&4294967295,m=T+(y<<20&4294967295|y>>>12),y=_+(T^b&(m^T))+E[9]+568446438&4294967295,_=m+(y<<5&4294967295|y>>>27),y=b+(m^T&(_^m))+E[14]+3275163606&4294967295,b=_+(y<<9&4294967295|y>>>23),y=T+(_^m&(b^_))+E[3]+4107603335&4294967295,T=b+(y<<14&4294967295|y>>>18),y=m+(b^_&(T^b))+E[8]+1163531501&4294967295,m=T+(y<<20&4294967295|y>>>12),y=_+(T^b&(m^T))+E[13]+2850285829&4294967295,_=m+(y<<5&4294967295|y>>>27),y=b+(m^T&(_^m))+E[2]+4243563512&4294967295,b=_+(y<<9&4294967295|y>>>23),y=T+(_^m&(b^_))+E[7]+1735328473&4294967295,T=b+(y<<14&4294967295|y>>>18),y=m+(b^_&(T^b))+E[12]+2368359562&4294967295,m=T+(y<<20&4294967295|y>>>12),y=_+(m^T^b)+E[5]+4294588738&4294967295,_=m+(y<<4&4294967295|y>>>28),y=b+(_^m^T)+E[8]+2272392833&4294967295,b=_+(y<<11&4294967295|y>>>21),y=T+(b^_^m)+E[11]+1839030562&4294967295,T=b+(y<<16&4294967295|y>>>16),y=m+(T^b^_)+E[14]+4259657740&4294967295,m=T+(y<<23&4294967295|y>>>9),y=_+(m^T^b)+E[1]+2763975236&4294967295,_=m+(y<<4&4294967295|y>>>28),y=b+(_^m^T)+E[4]+1272893353&4294967295,b=_+(y<<11&4294967295|y>>>21),y=T+(b^_^m)+E[7]+4139469664&4294967295,T=b+(y<<16&4294967295|y>>>16),y=m+(T^b^_)+E[10]+3200236656&4294967295,m=T+(y<<23&4294967295|y>>>9),y=_+(m^T^b)+E[13]+681279174&4294967295,_=m+(y<<4&4294967295|y>>>28),y=b+(_^m^T)+E[0]+3936430074&4294967295,b=_+(y<<11&4294967295|y>>>21),y=T+(b^_^m)+E[3]+3572445317&4294967295,T=b+(y<<16&4294967295|y>>>16),y=m+(T^b^_)+E[6]+76029189&4294967295,m=T+(y<<23&4294967295|y>>>9),y=_+(m^T^b)+E[9]+3654602809&4294967295,_=m+(y<<4&4294967295|y>>>28),y=b+(_^m^T)+E[12]+3873151461&4294967295,b=_+(y<<11&4294967295|y>>>21),y=T+(b^_^m)+E[15]+530742520&4294967295,T=b+(y<<16&4294967295|y>>>16),y=m+(T^b^_)+E[2]+3299628645&4294967295,m=T+(y<<23&4294967295|y>>>9),y=_+(T^(m|~b))+E[0]+4096336452&4294967295,_=m+(y<<6&4294967295|y>>>26),y=b+(m^(_|~T))+E[7]+1126891415&4294967295,b=_+(y<<10&4294967295|y>>>22),y=T+(_^(b|~m))+E[14]+2878612391&4294967295,T=b+(y<<15&4294967295|y>>>17),y=m+(b^(T|~_))+E[5]+4237533241&4294967295,m=T+(y<<21&4294967295|y>>>11),y=_+(T^(m|~b))+E[12]+1700485571&4294967295,_=m+(y<<6&4294967295|y>>>26),y=b+(m^(_|~T))+E[3]+2399980690&4294967295,b=_+(y<<10&4294967295|y>>>22),y=T+(_^(b|~m))+E[10]+4293915773&4294967295,T=b+(y<<15&4294967295|y>>>17),y=m+(b^(T|~_))+E[1]+2240044497&4294967295,m=T+(y<<21&4294967295|y>>>11),y=_+(T^(m|~b))+E[8]+1873313359&4294967295,_=m+(y<<6&4294967295|y>>>26),y=b+(m^(_|~T))+E[15]+4264355552&4294967295,b=_+(y<<10&4294967295|y>>>22),y=T+(_^(b|~m))+E[6]+2734768916&4294967295,T=b+(y<<15&4294967295|y>>>17),y=m+(b^(T|~_))+E[13]+1309151649&4294967295,m=T+(y<<21&4294967295|y>>>11),y=_+(T^(m|~b))+E[4]+4149444226&4294967295,_=m+(y<<6&4294967295|y>>>26),y=b+(m^(_|~T))+E[11]+3174756917&4294967295,b=_+(y<<10&4294967295|y>>>22),y=T+(_^(b|~m))+E[2]+718787259&4294967295,T=b+(y<<15&4294967295|y>>>17),y=m+(b^(T|~_))+E[9]+3951481745&4294967295,S.g[0]=S.g[0]+_&4294967295,S.g[1]=S.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,S.g[2]=S.g[2]+T&4294967295,S.g[3]=S.g[3]+b&4294967295}s.prototype.u=function(S,_){_===void 0&&(_=S.length);for(var m=_-this.blockSize,E=this.B,T=this.h,b=0;b<_;){if(T==0)for(;b<=m;)i(this,S,b),b+=this.blockSize;if(typeof S=="string"){for(;b<_;)if(E[T++]=S.charCodeAt(b++),T==this.blockSize){i(this,E),T=0;break}}else for(;b<_;)if(E[T++]=S[b++],T==this.blockSize){i(this,E),T=0;break}}this.h=T,this.o+=_},s.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var _=1;_<S.length-8;++_)S[_]=0;var m=8*this.o;for(_=S.length-8;_<S.length;++_)S[_]=m&255,m/=256;for(this.u(S),S=Array(16),_=m=0;4>_;++_)for(var E=0;32>E;E+=8)S[m++]=this.g[_]>>>E&255;return S};function o(S,_){var m=c;return Object.prototype.hasOwnProperty.call(m,S)?m[S]:m[S]=_(S)}function a(S,_){this.h=_;for(var m=[],E=!0,T=S.length-1;0<=T;T--){var b=S[T]|0;E&&b==_||(m[T]=b,E=!1)}this.g=m}var c={};function u(S){return-128<=S&&128>S?o(S,function(_){return new a([_|0],0>_?-1:0)}):new a([S|0],0>S?-1:0)}function f(S){if(isNaN(S)||!isFinite(S))return g;if(0>S)return q(f(-S));for(var _=[],m=1,E=0;S>=m;E++)_[E]=S/m|0,m*=4294967296;return new a(_,0)}function d(S,_){if(S.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(S.charAt(0)=="-")return q(d(S.substring(1),_));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(_,8)),E=g,T=0;T<S.length;T+=8){var b=Math.min(8,S.length-T),y=parseInt(S.substring(T,T+b),_);8>b?(b=f(Math.pow(_,b)),E=E.j(b).add(f(y))):(E=E.j(m),E=E.add(f(y)))}return E}var g=u(0),w=u(1),A=u(16777216);t=a.prototype,t.m=function(){if(M(this))return-q(this).m();for(var S=0,_=1,m=0;m<this.g.length;m++){var E=this.i(m);S+=(0<=E?E:4294967296+E)*_,_*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(N(this))return"0";if(M(this))return"-"+q(this).toString(S);for(var _=f(Math.pow(S,6)),m=this,E="";;){var T=H(m,_).g;m=K(m,T.j(_));var b=((0<m.g.length?m.g[0]:m.h)>>>0).toString(S);if(m=T,N(m))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function N(S){if(S.h!=0)return!1;for(var _=0;_<S.g.length;_++)if(S.g[_]!=0)return!1;return!0}function M(S){return S.h==-1}t.l=function(S){return S=K(this,S),M(S)?-1:N(S)?0:1};function q(S){for(var _=S.g.length,m=[],E=0;E<_;E++)m[E]=~S.g[E];return new a(m,~S.h).add(w)}t.abs=function(){return M(this)?q(this):this},t.add=function(S){for(var _=Math.max(this.g.length,S.g.length),m=[],E=0,T=0;T<=_;T++){var b=E+(this.i(T)&65535)+(S.i(T)&65535),y=(b>>>16)+(this.i(T)>>>16)+(S.i(T)>>>16);E=y>>>16,b&=65535,y&=65535,m[T]=y<<16|b}return new a(m,m[m.length-1]&-2147483648?-1:0)};function K(S,_){return S.add(q(_))}t.j=function(S){if(N(this)||N(S))return g;if(M(this))return M(S)?q(this).j(q(S)):q(q(this).j(S));if(M(S))return q(this.j(q(S)));if(0>this.l(A)&&0>S.l(A))return f(this.m()*S.m());for(var _=this.g.length+S.g.length,m=[],E=0;E<2*_;E++)m[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<S.g.length;T++){var b=this.i(E)>>>16,y=this.i(E)&65535,ye=S.i(T)>>>16,Ne=S.i(T)&65535;m[2*E+2*T]+=y*Ne,$(m,2*E+2*T),m[2*E+2*T+1]+=b*Ne,$(m,2*E+2*T+1),m[2*E+2*T+1]+=y*ye,$(m,2*E+2*T+1),m[2*E+2*T+2]+=b*ye,$(m,2*E+2*T+2)}for(E=0;E<_;E++)m[E]=m[2*E+1]<<16|m[2*E];for(E=_;E<2*_;E++)m[E]=0;return new a(m,0)};function $(S,_){for(;(S[_]&65535)!=S[_];)S[_+1]+=S[_]>>>16,S[_]&=65535,_++}function B(S,_){this.g=S,this.h=_}function H(S,_){if(N(_))throw Error("division by zero");if(N(S))return new B(g,g);if(M(S))return _=H(q(S),_),new B(q(_.g),q(_.h));if(M(_))return _=H(S,q(_)),new B(q(_.g),_.h);if(30<S.g.length){if(M(S)||M(_))throw Error("slowDivide_ only works with positive integers.");for(var m=w,E=_;0>=E.l(S);)m=ie(m),E=ie(E);var T=re(m,1),b=re(E,1);for(E=re(E,2),m=re(m,2);!N(E);){var y=b.add(E);0>=y.l(S)&&(T=T.add(m),b=y),E=re(E,1),m=re(m,1)}return _=K(S,T.j(_)),new B(T,_)}for(T=g;0<=S.l(_);){for(m=Math.max(1,Math.floor(S.m()/_.m())),E=Math.ceil(Math.log(m)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=f(m),y=b.j(_);M(y)||0<y.l(S);)m-=E,b=f(m),y=b.j(_);N(b)&&(b=w),T=T.add(b),S=K(S,y)}return new B(T,S)}t.A=function(S){return H(this,S).h},t.and=function(S){for(var _=Math.max(this.g.length,S.g.length),m=[],E=0;E<_;E++)m[E]=this.i(E)&S.i(E);return new a(m,this.h&S.h)},t.or=function(S){for(var _=Math.max(this.g.length,S.g.length),m=[],E=0;E<_;E++)m[E]=this.i(E)|S.i(E);return new a(m,this.h|S.h)},t.xor=function(S){for(var _=Math.max(this.g.length,S.g.length),m=[],E=0;E<_;E++)m[E]=this.i(E)^S.i(E);return new a(m,this.h^S.h)};function ie(S){for(var _=S.g.length+1,m=[],E=0;E<_;E++)m[E]=S.i(E)<<1|S.i(E-1)>>>31;return new a(m,S.h)}function re(S,_){var m=_>>5;_%=32;for(var E=S.g.length-m,T=[],b=0;b<E;b++)T[b]=0<_?S.i(b+m)>>>_|S.i(b+m+1)<<32-_:S.i(b+m);return new a(T,S.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,qa=a}).apply(typeof Tu<"u"?Tu:typeof self<"u"?self:typeof window<"u"?window:{});var zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,l,h){return r==Array.prototype||r==Object.prototype||(r[l]=h.value),r};function n(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof zi=="object"&&zi];for(var l=0;l<r.length;++l){var h=r[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=n(this);function i(r,l){if(l)e:{var h=s;r=r.split(".");for(var p=0;p<r.length-1;p++){var R=r[p];if(!(R in h))break e;h=h[R]}r=r[r.length-1],p=h[r],l=l(p),l!=p&&l!=null&&e(h,r,{configurable:!0,writable:!0,value:l})}}function o(r,l){r instanceof String&&(r+="");var h=0,p=!1,R={next:function(){if(!p&&h<r.length){var P=h++;return{value:l(P,r[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(r){return r||function(){return o(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(r){var l=typeof r;return l=l!="object"?l:r?Array.isArray(r)?"array":l:"null",l=="array"||l=="object"&&typeof r.length=="number"}function f(r){var l=typeof r;return l=="object"&&r!=null||l=="function"}function d(r,l,h){return r.call.apply(r.bind,arguments)}function g(r,l,h){if(!r)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),r.apply(l,R)}}return function(){return r.apply(l,arguments)}}function w(r,l,h){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,w.apply(null,arguments)}function A(r,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),r.apply(this,p)}}function N(r,l){function h(){}h.prototype=l.prototype,r.aa=l.prototype,r.prototype=new h,r.prototype.constructor=r,r.Qb=function(p,R,P){for(var V=Array(arguments.length-2),we=2;we<arguments.length;we++)V[we-2]=arguments[we];return l.prototype[R].apply(p,V)}}function M(r){const l=r.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=r[p];return h}return[]}function q(r,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const R=r.length||0,P=p.length||0;r.length=R+P;for(let V=0;V<P;V++)r[R+V]=p[V]}else r.push(p)}}class K{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function $(r){return/^[\s\xa0]*$/.test(r)}function B(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function H(r){return H[" "](r),r}H[" "]=function(){};var ie=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function re(r,l,h){for(const p in r)l.call(h,r[p],p,r)}function S(r,l){for(const h in r)l.call(void 0,r[h],h,r)}function _(r){const l={};for(const h in r)l[h]=r[h];return l}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(r,l){let h,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(h in p)r[h]=p[h];for(let P=0;P<m.length;P++)h=m[P],Object.prototype.hasOwnProperty.call(p,h)&&(r[h]=p[h])}}function T(r){var l=1;r=r.split(":");const h=[];for(;0<l&&r.length;)h.push(r.shift()),l--;return r.length&&h.push(r.join(":")),h}function b(r){c.setTimeout(()=>{throw r},0)}function y(){var r=st;let l=null;return r.g&&(l=r.g,r.g=r.g.next,r.g||(r.h=null),l.next=null),l}class ye{constructor(){this.h=this.g=null}add(l,h){const p=Ne.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Ne=new K(()=>new Ae,r=>r.reset());class Ae{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let le,ae=!1,st=new ye,yt=()=>{const r=c.Promise.resolve(void 0);le=()=>{r.then(at)}};var at=()=>{for(var r;r=y();){try{r.h.call(r.g)}catch(h){b(h)}var l=Ne;l.j(r),100>l.h&&(l.h++,r.next=l.g,l.g=r)}ae=!1};function Ce(){this.s=this.s,this.C=this.C}Ce.prototype.s=!1,Ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(r,l){this.type=r,this.g=this.target=l,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var ln=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,l=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return r}();function Nt(r,l){if(Re.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var h=this.type=r.type,p=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=l,l=r.relatedTarget){if(ie){e:{try{H(l.nodeName);var R=!0;break e}catch{}R=!1}R||(l=null)}}else h=="mouseover"?l=r.fromElement:h=="mouseout"&&(l=r.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:et[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Nt.aa.h.call(this)}}N(Nt,Re);var et={2:"touch",3:"pen",4:"mouse"};Nt.prototype.h=function(){Nt.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var k="closure_listenable_"+(1e6*Math.random()|0),J=0;function z(r,l,h,p,R){this.listener=r,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=R,this.key=++J,this.da=this.fa=!1}function X(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function de(r){this.src=r,this.g={},this.h=0}de.prototype.add=function(r,l,h,p,R){var P=r.toString();r=this.g[P],r||(r=this.g[P]=[],this.h++);var V=I(r,l,p,R);return-1<V?(l=r[V],h||(l.fa=!1)):(l=new z(l,this.src,P,!!p,R),l.fa=h,r.push(l)),l};function v(r,l){var h=l.type;if(h in r.g){var p=r.g[h],R=Array.prototype.indexOf.call(p,l,void 0),P;(P=0<=R)&&Array.prototype.splice.call(p,R,1),P&&(X(l),r.g[h].length==0&&(delete r.g[h],r.h--))}}function I(r,l,h,p){for(var R=0;R<r.length;++R){var P=r[R];if(!P.da&&P.listener==l&&P.capture==!!h&&P.ha==p)return R}return-1}var C="closure_lm_"+(1e6*Math.random()|0),O={};function x(r,l,h,p,R){if(Array.isArray(l)){for(var P=0;P<l.length;P++)x(r,l[P],h,p,R);return null}return h=ee(h),r&&r[k]?r.K(l,h,f(p)?!!p.capture:!1,R):D(r,l,h,!1,p,R)}function D(r,l,h,p,R,P){if(!l)throw Error("Invalid event type");var V=f(R)?!!R.capture:!!R,we=W(r);if(we||(r[C]=we=new de(r)),h=we.add(l,h,p,V,P),h.proxy)return h;if(p=G(),h.proxy=p,p.src=r,p.listener=h,r.addEventListener)ln||(R=V),R===void 0&&(R=!1),r.addEventListener(l.toString(),p,R);else if(r.attachEvent)r.attachEvent(L(l.toString()),p);else if(r.addListener&&r.removeListener)r.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function G(){function r(h){return l.call(r.src,r.listener,h)}const l=Q;return r}function j(r,l,h,p,R){if(Array.isArray(l))for(var P=0;P<l.length;P++)j(r,l[P],h,p,R);else p=f(p)?!!p.capture:!!p,h=ee(h),r&&r[k]?(r=r.i,l=String(l).toString(),l in r.g&&(P=r.g[l],h=I(P,h,p,R),-1<h&&(X(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete r.g[l],r.h--)))):r&&(r=W(r))&&(l=r.g[l.toString()],r=-1,l&&(r=I(l,h,p,R)),(h=-1<r?l[r]:null)&&F(h))}function F(r){if(typeof r!="number"&&r&&!r.da){var l=r.src;if(l&&l[k])v(l.i,r);else{var h=r.type,p=r.proxy;l.removeEventListener?l.removeEventListener(h,p,r.capture):l.detachEvent?l.detachEvent(L(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=W(l))?(v(h,r),h.h==0&&(h.src=null,l[C]=null)):X(r)}}}function L(r){return r in O?O[r]:O[r]="on"+r}function Q(r,l){if(r.da)r=!0;else{l=new Nt(l,this);var h=r.listener,p=r.ha||r.src;r.fa&&F(r),r=h.call(p,l)}return r}function W(r){return r=r[C],r instanceof de?r:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function ee(r){return typeof r=="function"?r:(r[Y]||(r[Y]=function(l){return r.handleEvent(l)}),r[Y])}function Z(){Ce.call(this),this.i=new de(this),this.M=this,this.F=null}N(Z,Ce),Z.prototype[k]=!0,Z.prototype.removeEventListener=function(r,l,h,p){j(this,r,l,h,p)};function oe(r,l){var h,p=r.F;if(p)for(h=[];p;p=p.F)h.push(p);if(r=r.M,p=l.type||l,typeof l=="string")l=new Re(l,r);else if(l instanceof Re)l.target=l.target||r;else{var R=l;l=new Re(p,r),E(l,R)}if(R=!0,h)for(var P=h.length-1;0<=P;P--){var V=l.g=h[P];R=ce(V,p,!0,l)&&R}if(V=l.g=r,R=ce(V,p,!0,l)&&R,R=ce(V,p,!1,l)&&R,h)for(P=0;P<h.length;P++)V=l.g=h[P],R=ce(V,p,!1,l)&&R}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var r=this.i,l;for(l in r.g){for(var h=r.g[l],p=0;p<h.length;p++)X(h[p]);delete r.g[l],r.h--}}this.F=null},Z.prototype.K=function(r,l,h,p){return this.i.add(String(r),l,!1,h,p)},Z.prototype.L=function(r,l,h,p){return this.i.add(String(r),l,!0,h,p)};function ce(r,l,h,p){if(l=r.i.g[String(l)],!l)return!0;l=l.concat();for(var R=!0,P=0;P<l.length;++P){var V=l[P];if(V&&!V.da&&V.capture==h){var we=V.listener,je=V.ha||V.src;V.fa&&v(r.i,V),R=we.call(je,p)!==!1&&R}}return R&&!p.defaultPrevented}function Me(r,l,h){if(typeof r=="function")h&&(r=w(r,h));else if(r&&typeof r.handleEvent=="function")r=w(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(r,l||0)}function Ue(r){r.g=Me(()=>{r.g=null,r.i&&(r.i=!1,Ue(r))},r.l);const l=r.h;r.h=null,r.m.apply(null,l)}class lt extends Ce{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ue(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(r){Ce.call(this),this.h=r,this.g={}}N(He,Ce);var cn=[];function Rs(r){re(r.g,function(l,h){this.g.hasOwnProperty(h)&&F(l)},r),r.g={}}He.prototype.N=function(){He.aa.N.call(this),Rs(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fe=c.JSON.stringify,ct=c.JSON.parse,Ri=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function Wr(){}Wr.prototype.h=null;function Za(r){return r.h||(r.h=r.i())}function Ud(){}var Ps={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gr(){Re.call(this,"d")}N(Gr,Re);function zr(){Re.call(this,"c")}N(zr,Re);var rs={},el=null;function qr(){return el=el||new Z}rs.La="serverreachability";function tl(r){Re.call(this,rs.La,r)}N(tl,Re);function ks(r){const l=qr();oe(l,new tl(l))}rs.STAT_EVENT="statevent";function nl(r,l){Re.call(this,rs.STAT_EVENT,r),this.stat=l}N(nl,Re);function Ke(r){const l=qr();oe(l,new nl(l,r))}rs.Ma="timingevent";function sl(r,l){Re.call(this,rs.Ma,r),this.size=l}N(sl,Re);function Os(r,l){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},l)}function Ns(){this.g=!0}Ns.prototype.xa=function(){this.g=!1};function Fd(r,l,h,p,R,P){r.info(function(){if(r.g)if(P)for(var V="",we=P.split("&"),je=0;je<we.length;je++){var pe=we[je].split("=");if(1<pe.length){var We=pe[0];pe=pe[1];var Ge=We.split("_");V=2<=Ge.length&&Ge[1]=="type"?V+(We+"="+pe+"&"):V+(We+"=redacted&")}}else V=null;else V=P;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+l+`
`+h+`
`+V})}function jd(r,l,h,p,R,P,V){r.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+l+`
`+h+`
`+P+" "+V})}function os(r,l,h,p){r.info(function(){return"XMLHTTP TEXT ("+l+"): "+$d(r,h)+(p?" "+p:"")})}function Vd(r,l){r.info(function(){return"TIMEOUT: "+l})}Ns.prototype.info=function(){};function $d(r,l){if(!r.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(r=0;r<h.length;r++)if(Array.isArray(h[r])){var p=h[r];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var V=1;V<R.length;V++)R[V]=""}}}}return Fe(h)}catch{return l}}var Kr={NO_ERROR:0,TIMEOUT:8},Bd={},Jr;function Pi(){}N(Pi,Wr),Pi.prototype.g=function(){return new XMLHttpRequest},Pi.prototype.i=function(){return{}},Jr=new Pi;function un(r,l,h,p){this.j=r,this.i=l,this.l=h,this.R=p||1,this.U=new He(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new il}function il(){this.i=null,this.g="",this.h=!1}var rl={},Xr={};function Yr(r,l,h){r.L=1,r.v=Di(Wt(l)),r.m=h,r.P=!0,ol(r,null)}function ol(r,l){r.F=Date.now(),ki(r),r.A=Wt(r.v);var h=r.A,p=r.R;Array.isArray(p)||(p=[String(p)]),wl(h.i,"t",p),r.C=0,h=r.j.J,r.h=new il,r.g=Fl(r.j,h?l:null,!r.m),0<r.O&&(r.M=new lt(w(r.Y,r,r.g),r.O)),l=r.U,h=r.g,p=r.ca;var R="readystatechange";Array.isArray(R)||(R&&(cn[0]=R.toString()),R=cn);for(var P=0;P<R.length;P++){var V=x(h,R[P],p||l.handleEvent,!1,l.h||l);if(!V)break;l.g[V.key]=V}l=r.H?_(r.H):{},r.m?(r.u||(r.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,l)):(r.u="GET",r.g.ea(r.A,r.u,null,l)),ks(),Fd(r.i,r.u,r.A,r.l,r.R,r.m)}un.prototype.ca=function(r){r=r.target;const l=this.M;l&&Gt(r)==3?l.j():this.Y(r)},un.prototype.Y=function(r){try{if(r==this.g)e:{const Ge=Gt(this.g);var l=this.g.Ba();const cs=this.g.Z();if(!(3>Ge)&&(Ge!=3||this.g&&(this.h.h||this.g.oa()||Cl(this.g)))){this.J||Ge!=4||l==7||(l==8||0>=cs?ks(3):ks(2)),Qr(this);var h=this.g.Z();this.X=h;t:if(al(this)){var p=Cl(this.g);r="";var R=p.length,P=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){On(this),Ds(this);var V="";break t}this.h.i=new c.TextDecoder}for(l=0;l<R;l++)this.h.h=!0,r+=this.h.i.decode(p[l],{stream:!(P&&l==R-1)});p.length=0,this.h.g+=r,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=h==200,jd(this.i,this.u,this.A,this.l,this.R,Ge,h),this.o){if(this.T&&!this.K){t:{if(this.g){var we,je=this.g;if((we=je.g?je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(we)){var pe=we;break t}}pe=null}if(h=pe)os(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zr(this,h);else{this.o=!1,this.s=3,Ke(12),On(this),Ds(this);break e}}if(this.P){h=!0;let wt;for(;!this.J&&this.C<V.length;)if(wt=Hd(this,V),wt==Xr){Ge==4&&(this.s=4,Ke(14),h=!1),os(this.i,this.l,null,"[Incomplete Response]");break}else if(wt==rl){this.s=4,Ke(15),os(this.i,this.l,V,"[Invalid Chunk]"),h=!1;break}else os(this.i,this.l,wt,null),Zr(this,wt);if(al(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ge!=4||V.length!=0||this.h.h||(this.s=1,Ke(16),h=!1),this.o=this.o&&h,!h)os(this.i,this.l,V,"[Invalid Chunked Response]"),On(this),Ds(this);else if(0<V.length&&!this.W){this.W=!0;var We=this.j;We.g==this&&We.ba&&!We.M&&(We.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),ro(We),We.M=!0,Ke(11))}}else os(this.i,this.l,V,null),Zr(this,V);Ge==4&&On(this),this.o&&!this.J&&(Ge==4?xl(this.j,this):(this.o=!1,ki(this)))}else op(this.g),h==400&&0<V.indexOf("Unknown SID")?(this.s=3,Ke(12)):(this.s=0,Ke(13)),On(this),Ds(this)}}}catch{}finally{}};function al(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Hd(r,l){var h=r.C,p=l.indexOf(`
`,h);return p==-1?Xr:(h=Number(l.substring(h,p)),isNaN(h)?rl:(p+=1,p+h>l.length?Xr:(l=l.slice(p,p+h),r.C=p+h,l)))}un.prototype.cancel=function(){this.J=!0,On(this)};function ki(r){r.S=Date.now()+r.I,ll(r,r.I)}function ll(r,l){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Os(w(r.ba,r),l)}function Qr(r){r.B&&(c.clearTimeout(r.B),r.B=null)}un.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Vd(this.i,this.A),this.L!=2&&(ks(),Ke(17)),On(this),this.s=2,Ds(this)):ll(this,this.S-r)};function Ds(r){r.j.G==0||r.J||xl(r.j,r)}function On(r){Qr(r);var l=r.M;l&&typeof l.ma=="function"&&l.ma(),r.M=null,Rs(r.U),r.g&&(l=r.g,r.g=null,l.abort(),l.ma())}function Zr(r,l){try{var h=r.j;if(h.G!=0&&(h.g==r||eo(h.h,r))){if(!r.K&&eo(h.h,r)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<r.F)ji(h),Ui(h);else break e;io(h),Ke(18)}}else h.za=R[1],0<h.za-h.T&&37500>R[2]&&h.F&&h.v==0&&!h.C&&(h.C=Os(w(h.Za,h),6e3));if(1>=hl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Dn(h,11)}else if((r.K||h.g==r)&&ji(h),!$(l))for(R=h.Da.g.parse(l),l=0;l<R.length;l++){let pe=R[l];if(h.T=pe[0],pe=pe[1],h.G==2)if(pe[0]=="c"){h.K=pe[1],h.ia=pe[2];const We=pe[3];We!=null&&(h.la=We,h.j.info("VER="+h.la));const Ge=pe[4];Ge!=null&&(h.Aa=Ge,h.j.info("SVER="+h.Aa));const cs=pe[5];cs!=null&&typeof cs=="number"&&0<cs&&(p=1.5*cs,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const wt=r.g;if(wt){const Vi=wt.g?wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vi){var P=p.h;P.g||Vi.indexOf("spdy")==-1&&Vi.indexOf("quic")==-1&&Vi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(to(P,P.h),P.h=null))}if(p.D){const oo=wt.g?wt.g.getResponseHeader("X-HTTP-Session-Id"):null;oo&&(p.ya=oo,Ee(p.I,p.D,oo))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-r.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var V=r;if(p.qa=Ul(p,p.J?p.ia:null,p.W),V.K){fl(p.h,V);var we=V,je=p.L;je&&(we.I=je),we.B&&(Qr(we),ki(we)),p.g=V}else Nl(p);0<h.i.length&&Fi(h)}else pe[0]!="stop"&&pe[0]!="close"||Dn(h,7);else h.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?Dn(h,7):so(h):pe[0]!="noop"&&h.l&&h.l.ta(pe),h.v=0)}}ks(4)}catch{}}var Wd=class{constructor(r,l){this.g=r,this.map=l}};function cl(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ul(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function hl(r){return r.h?1:r.g?r.g.size:0}function eo(r,l){return r.h?r.h==l:r.g?r.g.has(l):!1}function to(r,l){r.g?r.g.add(l):r.h=l}function fl(r,l){r.h&&r.h==l?r.h=null:r.g&&r.g.has(l)&&r.g.delete(l)}cl.prototype.cancel=function(){if(this.i=dl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function dl(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let l=r.i;for(const h of r.g.values())l=l.concat(h.D);return l}return M(r.i)}function Gd(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(u(r)){for(var l=[],h=r.length,p=0;p<h;p++)l.push(r[p]);return l}l=[],h=0;for(p in r)l[h++]=r[p];return l}function zd(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(u(r)||typeof r=="string"){var l=[];r=r.length;for(var h=0;h<r;h++)l.push(h);return l}l=[],h=0;for(const p in r)l[h++]=p;return l}}}function pl(r,l){if(r.forEach&&typeof r.forEach=="function")r.forEach(l,void 0);else if(u(r)||typeof r=="string")Array.prototype.forEach.call(r,l,void 0);else for(var h=zd(r),p=Gd(r),R=p.length,P=0;P<R;P++)l.call(void 0,p[P],h&&h[P],r)}var gl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qd(r,l){if(r){r=r.split("&");for(var h=0;h<r.length;h++){var p=r[h].indexOf("="),R=null;if(0<=p){var P=r[h].substring(0,p);R=r[h].substring(p+1)}else P=r[h];l(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Nn(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Nn){this.h=r.h,Oi(this,r.j),this.o=r.o,this.g=r.g,Ni(this,r.s),this.l=r.l;var l=r.i,h=new Ms;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),ml(this,h),this.m=r.m}else r&&(l=String(r).match(gl))?(this.h=!1,Oi(this,l[1]||"",!0),this.o=xs(l[2]||""),this.g=xs(l[3]||"",!0),Ni(this,l[4]),this.l=xs(l[5]||"",!0),ml(this,l[6]||"",!0),this.m=xs(l[7]||"")):(this.h=!1,this.i=new Ms(null,this.h))}Nn.prototype.toString=function(){var r=[],l=this.j;l&&r.push(Ls(l,_l,!0),":");var h=this.g;return(h||l=="file")&&(r.push("//"),(l=this.o)&&r.push(Ls(l,_l,!0),"@"),r.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&r.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&r.push("/"),r.push(Ls(h,h.charAt(0)=="/"?Xd:Jd,!0))),(h=this.i.toString())&&r.push("?",h),(h=this.m)&&r.push("#",Ls(h,Qd)),r.join("")};function Wt(r){return new Nn(r)}function Oi(r,l,h){r.j=h?xs(l,!0):l,r.j&&(r.j=r.j.replace(/:$/,""))}function Ni(r,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);r.s=l}else r.s=null}function ml(r,l,h){l instanceof Ms?(r.i=l,Zd(r.i,r.h)):(h||(l=Ls(l,Yd)),r.i=new Ms(l,r.h))}function Ee(r,l,h){r.i.set(l,h)}function Di(r){return Ee(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function xs(r,l){return r?l?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Ls(r,l,h){return typeof r=="string"?(r=encodeURI(r).replace(l,Kd),h&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Kd(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var _l=/[#\/\?@]/g,Jd=/[#\?:]/g,Xd=/[#\?]/g,Yd=/[#\?@]/g,Qd=/#/g;function Ms(r,l){this.h=this.g=null,this.i=r||null,this.j=!!l}function hn(r){r.g||(r.g=new Map,r.h=0,r.i&&qd(r.i,function(l,h){r.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}t=Ms.prototype,t.add=function(r,l){hn(this),this.i=null,r=as(this,r);var h=this.g.get(r);return h||this.g.set(r,h=[]),h.push(l),this.h+=1,this};function vl(r,l){hn(r),l=as(r,l),r.g.has(l)&&(r.i=null,r.h-=r.g.get(l).length,r.g.delete(l))}function yl(r,l){return hn(r),l=as(r,l),r.g.has(l)}t.forEach=function(r,l){hn(this),this.g.forEach(function(h,p){h.forEach(function(R){r.call(l,R,p,this)},this)},this)},t.na=function(){hn(this);const r=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const R=r[p];for(let P=0;P<R.length;P++)h.push(l[p])}return h},t.V=function(r){hn(this);let l=[];if(typeof r=="string")yl(this,r)&&(l=l.concat(this.g.get(as(this,r))));else{r=Array.from(this.g.values());for(let h=0;h<r.length;h++)l=l.concat(r[h])}return l},t.set=function(r,l){return hn(this),this.i=null,r=as(this,r),yl(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[l]),this.h+=1,this},t.get=function(r,l){return r?(r=this.V(r),0<r.length?String(r[0]):l):l};function wl(r,l,h){vl(r,l),0<h.length&&(r.i=null,r.g.set(as(r,l),M(h)),r.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const P=encodeURIComponent(String(p)),V=this.V(p);for(p=0;p<V.length;p++){var R=P;V[p]!==""&&(R+="="+encodeURIComponent(String(V[p]))),r.push(R)}}return this.i=r.join("&")};function as(r,l){return l=String(l),r.j&&(l=l.toLowerCase()),l}function Zd(r,l){l&&!r.j&&(hn(r),r.i=null,r.g.forEach(function(h,p){var R=p.toLowerCase();p!=R&&(vl(this,p),wl(this,R,h))},r)),r.j=l}function ep(r,l){const h=new Ns;if(c.Image){const p=new Image;p.onload=A(fn,h,"TestLoadImage: loaded",!0,l,p),p.onerror=A(fn,h,"TestLoadImage: error",!1,l,p),p.onabort=A(fn,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=A(fn,h,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=r}else l(!1)}function tp(r,l){const h=new Ns,p=new AbortController,R=setTimeout(()=>{p.abort(),fn(h,"TestPingServer: timeout",!1,l)},1e4);fetch(r,{signal:p.signal}).then(P=>{clearTimeout(R),P.ok?fn(h,"TestPingServer: ok",!0,l):fn(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(R),fn(h,"TestPingServer: error",!1,l)})}function fn(r,l,h,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(h)}catch{}}function np(){this.g=new Ri}function sp(r,l,h){const p=h||"";try{pl(r,function(R,P){let V=R;f(R)&&(V=Fe(R)),l.push(p+P+"="+encodeURIComponent(V))})}catch(R){throw l.push(p+"type="+encodeURIComponent("_badmap")),R}}function xi(r){this.l=r.Ub||null,this.j=r.eb||!1}N(xi,Wr),xi.prototype.g=function(){return new Li(this.l,this.j)},xi.prototype.i=function(r){return function(){return r}}({});function Li(r,l){Z.call(this),this.D=r,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Li,Z),t=Li.prototype,t.open=function(r,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=l,this.readyState=1,Fs(this)},t.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(l.body=r),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Us(this)),this.readyState=0},t.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Fs(this)),this.g&&(this.readyState=3,Fs(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Il(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Il(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}t.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var l=r.value?r.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!r.done}))&&(this.response=this.responseText+=l)}r.done?Us(this):Fs(this),this.readyState==3&&Il(this)}},t.Ra=function(r){this.g&&(this.response=this.responseText=r,Us(this))},t.Qa=function(r){this.g&&(this.response=r,Us(this))},t.ga=function(){this.g&&Us(this)};function Us(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Fs(r)}t.setRequestHeader=function(r,l){this.u.append(r,l)},t.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,r.push(h[0]+": "+h[1]),h=l.next();return r.join(`\r
`)};function Fs(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function bl(r){let l="";return re(r,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function no(r,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=bl(h),typeof r=="string"?h!=null&&encodeURIComponent(String(h)):Ee(r,l,h))}function Pe(r){Z.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Pe,Z);var ip=/^https?$/i,rp=["POST","PUT"];t=Pe.prototype,t.Ha=function(r){this.J=r},t.ea=function(r,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);l=l?l.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Jr.g(),this.v=this.o?Za(this.o):Za(Jr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(l,String(r),!0),this.B=!1}catch(P){El(this,P);return}if(r=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)h.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())h.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),R=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(rp,l,void 0))||p||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,V]of h)this.g.setRequestHeader(P,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Al(this),this.u=!0,this.g.send(r),this.u=!1}catch(P){El(this,P)}};function El(r,l){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=l,r.m=5,Tl(r),Mi(r)}function Tl(r){r.A||(r.A=!0,oe(r,"complete"),oe(r,"error"))}t.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,oe(this,"complete"),oe(this,"abort"),Mi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mi(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Sl(this):this.bb())},t.bb=function(){Sl(this)};function Sl(r){if(r.h&&typeof a<"u"&&(!r.v[1]||Gt(r)!=4||r.Z()!=2)){if(r.u&&Gt(r)==4)Me(r.Ea,0,r);else if(oe(r,"readystatechange"),Gt(r)==4){r.h=!1;try{const V=r.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=V===0){var R=String(r.D).match(gl)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),p=!ip.test(R?R.toLowerCase():"")}h=p}if(h)oe(r,"complete"),oe(r,"success");else{r.m=6;try{var P=2<Gt(r)?r.g.statusText:""}catch{P=""}r.l=P+" ["+r.Z()+"]",Tl(r)}}finally{Mi(r)}}}}function Mi(r,l){if(r.g){Al(r);const h=r.g,p=r.v[0]?()=>{}:null;r.g=null,r.v=null,l||oe(r,"ready");try{h.onreadystatechange=p}catch{}}}function Al(r){r.I&&(c.clearTimeout(r.I),r.I=null)}t.isActive=function(){return!!this.g};function Gt(r){return r.g?r.g.readyState:0}t.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(r){if(this.g){var l=this.g.responseText;return r&&l.indexOf(r)==0&&(l=l.substring(r.length)),ct(l)}};function Cl(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function op(r){const l={};r=(r.g&&2<=Gt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<r.length;p++){if($(r[p]))continue;var h=T(r[p]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=l[R]||[];l[R]=P,P.push(h)}S(l,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function js(r,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[r]||l}function Rl(r){this.Aa=0,this.i=[],this.j=new Ns,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=js("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=js("baseRetryDelayMs",5e3,r),this.cb=js("retryDelaySeedMs",1e4,r),this.Wa=js("forwardChannelMaxRetries",2,r),this.wa=js("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new cl(r&&r.concurrentRequestLimit),this.Da=new np,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Rl.prototype,t.la=8,t.G=1,t.connect=function(r,l,h,p){Ke(0),this.W=r,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Ul(this,null,this.W),Fi(this)};function so(r){if(Pl(r),r.G==3){var l=r.U++,h=Wt(r.I);if(Ee(h,"SID",r.K),Ee(h,"RID",l),Ee(h,"TYPE","terminate"),Vs(r,h),l=new un(r,r.j,l),l.L=2,l.v=Di(Wt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=Fl(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ki(l)}Ml(r)}function Ui(r){r.g&&(ro(r),r.g.cancel(),r.g=null)}function Pl(r){Ui(r),r.u&&(c.clearTimeout(r.u),r.u=null),ji(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function Fi(r){if(!ul(r.h)&&!r.s){r.s=!0;var l=r.Ga;le||yt(),ae||(le(),ae=!0),st.add(l,r),r.B=0}}function ap(r,l){return hl(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=l.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Os(w(r.Ga,r,l),Ll(r,r.B)),r.B++,!0)}t.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const R=new un(this,this.j,r);let P=this.o;if(this.S&&(P?(P=_(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Ol(this,R,l),h=Wt(this.I),Ee(h,"RID",r),Ee(h,"CVER",22),this.D&&Ee(h,"X-HTTP-Session-Id",this.D),Vs(this,h),P&&(this.O?l="headers="+encodeURIComponent(String(bl(P)))+"&"+l:this.m&&no(h,this.m,P)),to(this.h,R),this.Ua&&Ee(h,"TYPE","init"),this.P?(Ee(h,"$req",l),Ee(h,"SID","null"),R.T=!0,Yr(R,h,null)):Yr(R,h,l),this.G=2}}else this.G==3&&(r?kl(this,r):this.i.length==0||ul(this.h)||kl(this))};function kl(r,l){var h;l?h=l.l:h=r.U++;const p=Wt(r.I);Ee(p,"SID",r.K),Ee(p,"RID",h),Ee(p,"AID",r.T),Vs(r,p),r.m&&r.o&&no(p,r.m,r.o),h=new un(r,r.j,h,r.B+1),r.m===null&&(h.H=r.o),l&&(r.i=l.D.concat(r.i)),l=Ol(r,h,1e3),h.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),to(r.h,h),Yr(h,p,l)}function Vs(r,l){r.H&&re(r.H,function(h,p){Ee(l,p,h)}),r.l&&pl({},function(h,p){Ee(l,p,h)})}function Ol(r,l,h){h=Math.min(r.i.length,h);var p=r.l?w(r.l.Na,r.l,r):null;e:{var R=r.i;let P=-1;for(;;){const V=["count="+h];P==-1?0<h?(P=R[0].g,V.push("ofs="+P)):P=0:V.push("ofs="+P);let we=!0;for(let je=0;je<h;je++){let pe=R[je].g;const We=R[je].map;if(pe-=P,0>pe)P=Math.max(0,R[je].g-100),we=!1;else try{sp(We,V,"req"+pe+"_")}catch{p&&p(We)}}if(we){p=V.join("&");break e}}}return r=r.i.splice(0,h),l.D=r,p}function Nl(r){if(!r.g&&!r.u){r.Y=1;var l=r.Fa;le||yt(),ae||(le(),ae=!0),st.add(l,r),r.v=0}}function io(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Os(w(r.Fa,r),Ll(r,r.v)),r.v++,!0)}t.Fa=function(){if(this.u=null,Dl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Os(w(this.ab,this),r)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ke(10),Ui(this),Dl(this))};function ro(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function Dl(r){r.g=new un(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var l=Wt(r.qa);Ee(l,"RID","rpc"),Ee(l,"SID",r.K),Ee(l,"AID",r.T),Ee(l,"CI",r.F?"0":"1"),!r.F&&r.ja&&Ee(l,"TO",r.ja),Ee(l,"TYPE","xmlhttp"),Vs(r,l),r.m&&r.o&&no(l,r.m,r.o),r.L&&(r.g.I=r.L);var h=r.g;r=r.ia,h.L=1,h.v=Di(Wt(l)),h.m=null,h.P=!0,ol(h,r)}t.Za=function(){this.C!=null&&(this.C=null,Ui(this),io(this),Ke(19))};function ji(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function xl(r,l){var h=null;if(r.g==l){ji(r),ro(r),r.g=null;var p=2}else if(eo(r.h,l))h=l.D,fl(r.h,l),p=1;else return;if(r.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var R=r.B;p=qr(),oe(p,new sl(p,h)),Fi(r)}else Nl(r);else if(R=l.s,R==3||R==0&&0<l.X||!(p==1&&ap(r,l)||p==2&&io(r)))switch(h&&0<h.length&&(l=r.h,l.i=l.i.concat(h)),R){case 1:Dn(r,5);break;case 4:Dn(r,10);break;case 3:Dn(r,6);break;default:Dn(r,2)}}}function Ll(r,l){let h=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(h*=2),h*l}function Dn(r,l){if(r.j.info("Error code "+l),l==2){var h=w(r.fb,r),p=r.Xa;const R=!p;p=new Nn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Oi(p,"https"),Di(p),R?ep(p.toString(),h):tp(p.toString(),h)}else Ke(2);r.G=0,r.l&&r.l.sa(l),Ml(r),Pl(r)}t.fb=function(r){r?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function Ml(r){if(r.G=0,r.ka=[],r.l){const l=dl(r.h);(l.length!=0||r.i.length!=0)&&(q(r.ka,l),q(r.ka,r.i),r.h.i.length=0,M(r.i),r.i.length=0),r.l.ra()}}function Ul(r,l,h){var p=h instanceof Nn?Wt(h):new Nn(h);if(p.g!="")l&&(p.g=l+"."+p.g),Ni(p,p.s);else{var R=c.location;p=R.protocol,l=l?l+"."+R.hostname:R.hostname,R=+R.port;var P=new Nn(null);p&&Oi(P,p),l&&(P.g=l),R&&Ni(P,R),h&&(P.l=h),p=P}return h=r.D,l=r.ya,h&&l&&Ee(p,h,l),Ee(p,"VER",r.la),Vs(r,p),p}function Fl(r,l,h){if(l&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=r.Ca&&!r.pa?new Pe(new xi({eb:h})):new Pe(r.pa),l.Ha(r.J),l}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function jl(){}t=jl.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ut(r,l){Z.call(this),this.g=new Rl(l),this.l=r,this.h=l&&l.messageUrlParams||null,r=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(r?r["X-WebChannel-Content-Type"]=l.messageContentType:r={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(r?r["X-WebChannel-Client-Profile"]=l.va:r={"X-WebChannel-Client-Profile":l.va}),this.g.S=r,(r=l&&l.Sb)&&!$(r)&&(this.g.m=r),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!$(l)&&(this.g.D=l,r=this.h,r!==null&&l in r&&(r=this.h,l in r&&delete r[l])),this.j=new ls(this)}N(ut,Z),ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ut.prototype.close=function(){so(this.g)},ut.prototype.o=function(r){var l=this.g;if(typeof r=="string"){var h={};h.__data__=r,r=h}else this.u&&(h={},h.__data__=Fe(r),r=h);l.i.push(new Wd(l.Ya++,r)),l.G==3&&Fi(l)},ut.prototype.N=function(){this.g.l=null,delete this.j,so(this.g),delete this.g,ut.aa.N.call(this)};function Vl(r){Gr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var l=r.__sm__;if(l){e:{for(const h in l){r=h;break e}r=void 0}(this.i=r)&&(r=this.i,l=l!==null&&r in l?l[r]:void 0),this.data=l}else this.data=r}N(Vl,Gr);function $l(){zr.call(this),this.status=1}N($l,zr);function ls(r){this.g=r}N(ls,jl),ls.prototype.ua=function(){oe(this.g,"a")},ls.prototype.ta=function(r){oe(this.g,new Vl(r))},ls.prototype.sa=function(r){oe(this.g,new $l)},ls.prototype.ra=function(){oe(this.g,"b")},ut.prototype.send=ut.prototype.o,ut.prototype.open=ut.prototype.m,ut.prototype.close=ut.prototype.close,Kr.NO_ERROR=0,Kr.TIMEOUT=8,Kr.HTTP_ERROR=6,Bd.COMPLETE="complete",Ud.EventType=Ps,Ps.OPEN="a",Ps.CLOSE="b",Ps.ERROR="c",Ps.MESSAGE="d",Z.prototype.listen=Z.prototype.K,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha}).apply(typeof zi<"u"?zi:typeof self<"u"?self:typeof window<"u"?window:{});const Su="@firebase/firestore",Au="4.8.0";/**
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
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let Ai="11.10.0";/**
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
 */const Ss=new Fr("@firebase/firestore");function Tt(t,...e){if(Ss.logLevel<=ve.DEBUG){const n=e.map(Ka);Ss.debug(`Firestore (${Ai}): ${t}`,...n)}}function Pd(t,...e){if(Ss.logLevel<=ve.ERROR){const n=e.map(Ka);Ss.error(`Firestore (${Ai}): ${t}`,...n)}}function HI(t,...e){if(Ss.logLevel<=ve.WARN){const n=e.map(Ka);Ss.warn(`Firestore (${Ai}): ${t}`,...n)}}function Ka(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function _i(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,kd(t,s,n)}function kd(t,e,n){let s=`FIRESTORE (${Ai}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Pd(s),new Error(s)}function si(t,e,n,s){let i="Unexpected state";typeof n=="string"?i=n:s=n,t||kd(e,i,s)}/**
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
 */const he={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class fe extends Ot{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ii{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Od{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class GI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zI{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){si(this.o===void 0,42304);let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let o=new ii;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ii,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{Tt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(Tt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ii)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(Tt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(si(typeof s.accessToken=="string",31837,{l:s}),new Od(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return si(e===null||typeof e=="string",2055,{h:e}),new Xe(e)}}class qI{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class KI{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new qI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,bt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){si(this.o===void 0,3512);const s=o=>{o.error!=null&&Tt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,Tt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>s(o))};const i=o=>{Tt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):Tt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Cu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(si(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Cu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */function YI(){return new TextEncoder}/**
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
 */class QI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=XI(40);for(let o=0;o<i.length;++o)s.length<20&&i[o]<n&&(s+=e.charAt(i[o]%62))}return s}}function Ct(t,e){return t<e?-1:t>e?1:0}function ZI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=t.codePointAt(n),i=e.codePointAt(n);if(s!==i){if(s<128&&i<128)return Ct(s,i);{const o=YI(),a=eb(o.encode(Ru(t,n)),o.encode(Ru(e,n)));return a!==0?a:Ct(s,i)}}n+=s>65535?2:1}return Ct(t.length,e.length)}function Ru(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function eb(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Ct(t[n],e[n]);return Ct(t.length,e.length)}/**
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
 */const Pu="__name__";class Lt{constructor(e,n,s){n===void 0?n=0:n>e.length&&_i(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&_i(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Lt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Lt?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const o=Lt.compareSegments(e.get(i),n.get(i));if(o!==0)return o}return Ct(e.length,n.length)}static compareSegments(e,n){const s=Lt.isNumericId(e),i=Lt.isNumericId(n);return s&&!i?-1:!s&&i?1:s&&i?Lt.extractNumericId(e).compare(Lt.extractNumericId(n)):ZI(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qa.fromString(e.substring(4,e.length-2))}}class It extends Lt{construct(e,n,s){return new It(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new fe(he.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new It(n)}static emptyPath(){return new It([])}}const tb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $n extends Lt{construct(e,n,s){return new $n(e,n,s)}static isValidIdentifier(e){return tb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pu}static keyField(){return new $n([Pu])}static fromServerFormat(e){const n=[];let s="",i=0;const o=()=>{if(s.length===0)throw new fe(he.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new fe(he.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new fe(he.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(s+=c,i++):(o(),i++)}if(o(),a)throw new fe(he.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $n(n)}static emptyPath(){return new $n([])}}/**
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
 */class Wn{constructor(e){this.path=e}static fromPath(e){return new Wn(It.fromString(e))}static fromName(e){return new Wn(It.fromString(e).popFirst(5))}static empty(){return new Wn(It.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&It.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return It.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Wn(new It(e.slice()))}}function nb(t,e,n,s){if(e===!0&&s===!0)throw new fe(he.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sb(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ib(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_i(12329,{type:typeof t})}function rb(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new fe(he.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ib(t);throw new fe(he.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Oe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ci(t,e){if(!sb(t))throw new fe(he.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const i=e[s].typeString,o="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const a=t[s];if(i&&typeof a!==i){n=`JSON field '${s}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){n=`Expected '${s}' field to equal '${o.value}'`;break}}if(n)throw new fe(he.INVALID_ARGUMENT,n);return!0}/**
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
 */const ku=-62135596800,Ou=1e6;class Ut{static now(){return Ut.fromMillis(Date.now())}static fromDate(e){return Ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Ou);return new Ut(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new fe(he.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new fe(he.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ku)throw new fe(he.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(he.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ou}_compareTo(e){return this.seconds===e.seconds?Ct(this.nanoseconds,e.nanoseconds):Ct(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ut._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ci(e,Ut._jsonSchema))return new Ut(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ku;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ut._jsonSchemaVersion="firestore/timestamp/1.0",Ut._jsonSchema={type:Oe("string",Ut._jsonSchemaVersion),seconds:Oe("number"),nanoseconds:Oe("number")};function ob(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ab extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ab("Invalid base64 string: "+o):o}}(e);return new es(n)}static fromUint8Array(e){const n=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new es(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ct(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}es.EMPTY_BYTE_STRING=new es("");const ia="(default)";class br{constructor(e,n){this.projectId=e,this.database=n||ia}static empty(){return new br("","")}get isDefaultDatabase(){return this.database===ia}isEqual(e){return e instanceof br&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class lb{constructor(e,n=null,s=[],i=[],o=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function cb(t){return new lb(t)}/**
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
 */var Nu,ue;(ue=Nu||(Nu={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new qa([4294967295,4294967295],0);/**
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
 */const ub=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=1048576;function Do(){return typeof document<"u"?document:null}/**
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
 */class fb{constructor(e,n,s=1e3,i=1.5,o=6e4){this.Fi=e,this.timerId=n,this.d_=s,this.E_=i,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-s);i>0&&Tt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */class Ja{constructor(e,n,s,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=o,this.deferred=new ii,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,o){const a=Date.now()+s,c=new Ja(e,n,a,i,o);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(he.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Du,xu;(xu=Du||(Du={})).Fa="default",xu.Cache="cache";/**
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
 */function db(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="firestore.googleapis.com",Mu=!0;class Uu{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new fe(he.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Nd,this.ssl=Mu}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Mu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ub;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hb)throw new fe(he.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=db((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new fe(he.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new fe(he.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new fe(he.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dd{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(he.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(he.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new WI;switch(s.type){case"firstParty":return new KI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new fe(he.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Lu.get(n);s&&(Tt("ComponentProvider","Removing Datastore"),Lu.delete(n),s.terminate())}(this),Promise.resolve()}}function pb(t,e,n,s={}){var i;t=rb(t,Dd);const o=Ii(e),a=t._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;o&&(wf(`https://${u}`),If("Firestore",!0)),a.host!==Nd&&a.host!==u&&HI("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:u,ssl:o,emulatorOptions:s});if(!Pn(f,c)&&(t._setSettings(f),s.mockUserToken)){let d,g;if(typeof s.mockUserToken=="string")d=s.mockUserToken,g=Xe.MOCK_USER;else{d=X_(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new fe(he.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Xe(w)}t._authCredentials=new GI(new Od(d,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Xa(this.firestore,e,this._query)}}class Ft{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ya(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ft(this.firestore,e,this._key)}toJSON(){return{type:Ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Ci(n,Ft._jsonSchema))return new Ft(e,s||null,new Wn(It.fromString(n.referencePath)))}}Ft._jsonSchemaVersion="firestore/documentReference/1.0",Ft._jsonSchema={type:Oe("string",Ft._jsonSchemaVersion),referencePath:Oe("string")};class Ya extends Xa{constructor(e,n,s){super(e,n,cb(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ft(this.firestore,null,new Wn(e))}withConverter(e){return new Ya(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="AsyncQueue";class ju{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new fb(this,"async_queue_retry"),this.oc=()=>{const s=Do();s&&Tt(Fu,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const n=Do();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Do();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new ii;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ob(e))throw e;Tt(Fu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,Pd("INTERNAL UNHANDLED ERROR: ",Vu(s)),s}).then(s=>(this.nc=!1,s))));return this._c=n,n}enqueueAfterDelay(e,n,s){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=Ja.createAndSchedule(this,e,n,s,o=>this.lc(o));return this.ec.push(i),i}ac(){this.tc&&_i(47125,{hc:Vu(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Vu(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class gb extends Dd{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new ju,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ju(e),this._firestoreClient=void 0,await e}}}function mb(t,e){const n=typeof t=="object"?t:ka(),s=typeof t=="string"?t:ia,i=ss(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const o=K_("firestore");o&&pb(i,...o)}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qt(es.fromBase64String(e))}catch(n){throw new fe(he.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qt(es.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ci(e,Qt._jsonSchema))return Qt.fromBase64String(e.bytes)}}Qt._jsonSchemaVersion="firestore/bytes/1.0",Qt._jsonSchema={type:Oe("string",Qt._jsonSchemaVersion),bytes:Oe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new fe(he.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $n(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Kn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new fe(he.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new fe(he.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ct(this._lat,e._lat)||Ct(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Kn._jsonSchemaVersion}}static fromJSON(e){if(Ci(e,Kn._jsonSchema))return new Kn(e.latitude,e.longitude)}}Kn._jsonSchemaVersion="firestore/geoPoint/1.0",Kn._jsonSchema={type:Oe("string",Kn._jsonSchemaVersion),latitude:Oe("number"),longitude:Oe("number")};/**
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
 */class Jn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,i){if(s.length!==i.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==i[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Jn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ci(e,Jn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Jn(e.vectorValues);throw new fe(he.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Jn._jsonSchemaVersion="firestore/vectorValue/1.0",Jn._jsonSchema={type:Oe("string",Jn._jsonSchemaVersion),vectorValues:Oe("object")};const _b=new RegExp("[~\\*/\\[\\]]");function vb(t,e,n){if(e.search(_b)>=0)throw $u(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new xd(...e.split("."))._internalPath}catch{throw $u(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function $u(t,e,n,s,i){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new fe(he.INVALID_ARGUMENT,o+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n,s,i,o){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Md("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yb extends Ld{data(){return super.data()}}function Md(t,e){return typeof e=="string"?vb(t,e):e instanceof xd?e._internalPath:e._delegate._internalPath}class qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Is extends Ld{constructor(e,n,s,i,o,a){super(e,n,s,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new sr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Md("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(he.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Is._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Is._jsonSchemaVersion="firestore/documentSnapshot/1.0",Is._jsonSchema={type:Oe("string",Is._jsonSchemaVersion),bundleSource:Oe("string","DocumentSnapshot"),bundleName:Oe("string"),bundle:Oe("string")};class sr extends Is{data(e={}){return super.data(e)}}class ri{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new qi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new sr(this._firestore,this._userDataWriter,s.key,s,new qi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new fe(he.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const u=new sr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new qi(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const u=new sr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new qi(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,d=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:wb(c.type),doc:u,oldIndex:f,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(he.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ri._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=QI.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(n.push(o._document),s.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function wb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _i(61501,{type:t})}}ri._jsonSchemaVersion="firestore/querySnapshot/1.0",ri._jsonSchema={type:Oe("string",ri._jsonSchemaVersion),bundleSource:Oe("string","QuerySnapshot"),bundleName:Oe("string"),bundle:Oe("string")};(function(e,n=!0){(function(i){Ai=i})(As),Bt(new kt("firestore",(s,{instanceIdentifier:i,options:o})=>{const a=s.getProvider("app").getImmediate(),c=new gb(new zI(s.getProvider("auth-internal")),new JI(a,s.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new fe(he.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new br(f.options.projectId,d)}(a,i),a);return o=Object.assign({useFetchStreams:n},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),_t(Su,Au,e),_t(Su,Au,"esm2017")})();const Ib={apiKey:"AIzaSyBzR2w75nixO9H8zjUbxVajKx0npksSGrg",authDomain:"norsk-cafe.firebaseapp.com",projectId:"norsk-cafe",storageBucket:"norsk-cafe.firebasestorage.app",messagingSenderId:"123232580709",appId:"1:123232580709:web:c6e6dfed117db9d3b0028c",measurementId:void 0},Qa=Rf(Ib);j0(Qa);const Xn=$I(Qa);mb(Qa);const bb="/assets/coffee-cKRUD7yK.svg",ra="/assets/panda256-BLVgM0lT.png",is=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Eb={class:"header"},Tb=["src"],Sb={class:"header-user"},Ab=["src"],Cb={key:0,class:"profile-menu"},Rb={class:"profile-header"},Pb=["src"],kb={class:"profile-info"},Ob={class:"profile-name"},Nb={__name:"Header",setup(t){const e=wi(),n=zn(null),s=zn(!1),i=zn(null);Dr(()=>{n.value=Xn.currentUser,Xn.onAuthStateChanged(d=>{n.value=d}),document.addEventListener("click",a)}),Ia(()=>{document.removeEventListener("click",a)});function o(){s.value=!s.value}function a(d){i.value&&!i.value.contains(d.target)&&(s.value=!1)}function c(){e.push("/login")}function u(){Xn.signOut(),e.push("/login"),s.value=!1}function f(){e.push("/")}return(d,g)=>(xe(),$e("header",Eb,[U("button",{class:"header-title-button",onClick:f},[g[1]||(g[1]=U("span",{class:"header-title-text"},"Norsk",-1)),U("img",{src:pt(bb),alt:"Logo",class:"header-logo"},null,8,Tb),g[2]||(g[2]=U("span",{class:"header-title-text"},"Cafe",-1))]),U("div",Sb,[n.value?(xe(),$e("div",{key:1,class:"profile-menu-wrapper",ref_key:"menuRef",ref:i},[U("img",{src:n.value.photoURL||pt(ra),alt:"User Profile",class:"user-icon",onClick:o},null,8,Ab),De(hm,{name:"fade-slide"},{default:wa(()=>[s.value?(xe(),$e("div",Cb,[U("div",Rb,[U("img",{src:n.value.photoURL||pt(ra),alt:"Large profile",class:"profile-large"},null,8,Pb),U("div",kb,[U("div",Ob,Se(n.value.displayName||n.value.email),1),g[3]||(g[3]=U("div",{class:"profile-level"},"Level 18",-1))])]),g[4]||(g[4]=U("hr",{class:"profile-divider"},null,-1)),U("button",{class:"menu-item",onClick:g[0]||(g[0]=w=>pt(e).push("/account"))},"Konto Innstillinger"),U("button",{class:"menu-item",onClick:u},"Logg ut")])):Jh("",!0)]),_:1})],512)):(xe(),$e("button",{key:0,class:"login-button",onClick:c}," Login "))])]))}},Db=is(Nb,[["__scopeId","data-v-afab0fe0"]]),xb="data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%23fff'/%3e%3c/svg%3e",Lb={class:"footer"},Mb={class:"footer-start"},Ub={class:"footer-end"},Fb={href:"https://github.com/fredrikofstad/norskcafe",target:"_blank",rel:"noopener noreferrer",class:"github-link"},jb=["src"],Vb={__name:"Footer",setup(t){return(e,n)=>{const s=Ph("router-link");return xe(),$e("footer",Lb,[U("div",Mb,[n[1]||(n[1]=U("span",{class:"copyright"},"© 2025 Fredrik Ofstad",-1)),De(s,{to:"/privacy",class:"privacy-link"},{default:wa(()=>n[0]||(n[0]=[ur("Privacy Policy")])),_:1,__:[0]})]),U("div",Ub,[U("a",Fb,[U("img",{src:pt(xb),alt:"GitHub",class:"github-icon"},null,8,jb)])])])}}},$b=is(Vb,[["__scopeId","data-v-b36a3877"]]),Bb={class:"page"},Hb={class:"main-content"},Wb={__name:"App",setup(t){return(e,n)=>{const s=Ph("router-view");return xe(),$e("div",Bb,[De(Db),U("main",Hb,[De(s)]),De($b)])}}},Gb={class:"home-page"},zb={__name:"Home",setup(t){const e=wi();function n(){Xn.currentUser?e.push("/dashboard"):e.push("/login")}return(s,i)=>(xe(),$e("div",Gb,[U("main",{class:"welcome"},[i[0]||(i[0]=U("div",{class:"welcome"},null,-1)),i[1]||(i[1]=U("h1",null,"Velkommen!",-1)),i[2]||(i[2]=U("p",null,"Her på Norsk Cafe skal vi lære norsk på en morsom og effektiv måte!",-1)),U("button",{class:"start-button",onClick:n}," La oss komme i gang! ")])]))}},qb=is(zb,[["__scopeId","data-v-ac2fe9f3"]]),Kb={class:"login-page"},Jb={class:"login-content"},Xb={class:"login-inner"},Yb={class:"gsi-material-button"},Qb={class:"gsi-material-button-content-wrapper"},Zb={class:"gsi-material-button-icon"},e1={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",style:{width:"24px",height:"24px"}},t1={__name:"Login",setup(t){const e=wi();async function n(){const s=new Yt;try{await Xw(Xn,s),e.push("/dashboard")}catch(i){console.error("Google sign-in failed",i),alert("Google sign-in failed: "+i.message)}}return(s,i)=>(xe(),$e("div",Kb,[U("main",Jb,[U("div",Xb,[i[2]||(i[2]=U("h2",{class:"login-title"},"Velkommen tilbake!",-1)),i[3]||(i[3]=U("p",{class:"login-subtitle"}," Logg inn med Google for å fortsette å lære norsk. ",-1)),U("div",{class:"google-wrapper",onClick:n},[U("button",Yb,[U("div",Qb,[U("div",Zb,[(xe(),$e("svg",e1,i[0]||(i[0]=[qg(`<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0\r
                    14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-e7300c23></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58\r
                    2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-e7300c23></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92\r
                    16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-e7300c23></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15\r
                    1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98\r
                    6.19C6.51 42.62 14.62 48 24 48z" data-v-e7300c23></path><path fill="none" d="M0 0h48v48H0z" data-v-e7300c23></path>`,5)])))]),i[1]||(i[1]=U("span",{class:"gsi-material-button-contents"},"Fortsett med Google",-1))])])])])])]))}},n1=is(t1,[["__scopeId","data-v-e7300c23"]]),s1="/assets/read-lc7uTVG8.png",i1="/assets/review-BO4Lya47.png",r1="/assets/listen-BRpUMTBZ.png",o1={class:"dashboard-page"},a1={class:"dashboard-content"},l1={class:"dashboard-welcome"},c1={class:"cards-container"},u1={__name:"Dashboard",setup(t){const e=wi(),n=zn("");return Dr(()=>{kw(Xn,s=>{if(s){const i=s.displayName||s.email||"Bruker";n.value=i.split(" ")[0]}else e.push("/login")})}),(s,i)=>(xe(),$e("div",o1,[U("main",a1,[U("div",l1,[U("h2",null,"Hei "+Se(n.value)+"!",1),i[3]||(i[3]=U("p",null,"Velkommen til ditt dashboard. Ta en titt rundt!",-1))]),U("div",c1,[U("div",{class:"dashboard-card",onClick:i[0]||(i[0]=(...o)=>s.goToLearn&&s.goToLearn(...o))},i[4]||(i[4]=[U("div",{class:"card-text"},[U("h3",null,"Lær"),U("p",null,"Start en ny leksjon og lær nye ord.")],-1),U("img",{src:s1,alt:"Lær",class:"card-icon"},null,-1)])),U("div",{class:"dashboard-card",onClick:i[1]||(i[1]=(...o)=>s.goToReview&&s.goToReview(...o))},i[5]||(i[5]=[U("div",{class:"card-text"},[U("h3",null,"Repeter"),U("p",null,"Gå gjennom ordene du allerede kan.")],-1),U("img",{src:i1,alt:"Repeter",class:"card-icon"},null,-1)])),U("div",{class:"dashboard-card",onClick:i[2]||(i[2]=(...o)=>s.goToListen&&s.goToListen(...o))},i[6]||(i[6]=[U("div",{class:"card-text"},[U("h3",null,"Lytt"),U("p",null,"kommer snart.")],-1),U("img",{src:r1,alt:"Lytt",class:"card-icon"},null,-1)]))])])]))}},h1=is(u1,[["__scopeId","data-v-fcabb122"]]),f1={title:"Personvernerklæring",updated:"Sist oppdatert: 6. juli 2025",who:{title:"Hvem er vi",text:"Norsk Cafe er utviklet og driftet av Fredrik Ofstad, som er behandlingsansvarlig for dine personopplysninger."},what:{title:"Hvilke data samles inn?",text:"Når du logger inn med Google, mottar vi følgende informasjon:",items:["Navn","E-postadresse","Profilbilde"],note:"Denne informasjonen brukes kun til å tilpasse din opplevelse i appen. Vi lagrer ikke passord."},where:{title:"Hvor lagres dataene?",text:"Dataene lagres i Google Firebase Authentication og Firestore-databasen. Selve appen hostes på GitHub Pages."},cookies:{title:"Informasjonskapsler og sporing",text:"Norsk Cafe bruker for øyeblikket ikke informasjonskapsler eller analyseverktøy. Google Analytics kan vurderes senere, men vil i så fall kreve samtykke."},sharing:{title:"Deling av data",text:"Vi deler ikke dine personopplysninger med tredjeparter, med unntak av bruk av Google Firebase som databehandler."},rights:{title:"Dine rettigheter",items:["Innsyn i egne personopplysninger","Sletting av data","Klage til Datatilsynet"]},deletion:{title:"Slette konto",text:"Du kan slette kontoen din direkte i appen. Dette sletter brukeren og tilhørende data fra Firebase."}},d1={title:"Privacy Policy",updated:"Last updated: 6 July 2025",who:{title:"Who we are",text:"Norsk Cafe is developed and operated by Fredrik Ofstad, who is the data controller responsible for your personal information."},what:{title:"What data do we collect?",text:"When you sign in with Google, we receive:",items:["Your name","Your email address","Your profile picture"],note:"This is used only to personalize your experience. We do not collect or store any passwords."},where:{title:"Where is the data stored?",text:"Your data is stored in Google Firebase Authentication and Firestore. The app is hosted on GitHub Pages."},cookies:{title:"Cookies and tracking",text:"Norsk Cafe does not currently use cookies or tracking tools. Google Analytics may be added in the future, but only with explicit consent."},sharing:{title:"Data sharing",text:"We do not share your data with third parties, except for Google Firebase, which acts as a data processor."},rights:{title:"Your rights",items:["Access your personal data","Request deletion","File a complaint with your data protection authority"]},deletion:{title:"Account deletion",text:"You can delete your account from the settings page. This will remove your user and data from Firebase."}},p1={no:f1,en:d1},g1={class:"privacy-page"},m1={class:"privacy-content"},_1={class:"title-bar"},v1={__name:"Privacy",setup(t){const e=zn("no");function n(){e.value=e.value==="no"?"en":"no"}const s=dt(()=>p1[e.value]);return(i,o)=>(xe(),$e("div",g1,[U("div",m1,[U("div",_1,[U("h1",null,Se(s.value.title),1),U("button",{class:"lang-switch",onClick:n},Se(e.value==="no"?"Switch to English":"Bytt til norsk"),1)]),U("p",null,[U("strong",null,Se(s.value.updated),1)]),U("h2",null,Se(s.value.who.title),1),U("p",null,Se(s.value.who.text),1),U("h2",null,Se(s.value.what.title),1),U("p",null,Se(s.value.what.text),1),U("ul",null,[(xe(!0),$e(ft,null,Kl(s.value.what.items,a=>(xe(),$e("li",{key:a},Se(a),1))),128))]),U("p",null,Se(s.value.what.note),1),U("h2",null,Se(s.value.where.title),1),U("p",null,Se(s.value.where.text),1),U("h2",null,Se(s.value.cookies.title),1),U("p",null,Se(s.value.cookies.text),1),U("h2",null,Se(s.value.sharing.title),1),U("p",null,Se(s.value.sharing.text),1),U("h2",null,Se(s.value.rights.title),1),U("ul",null,[(xe(!0),$e(ft,null,Kl(s.value.rights.items,a=>(xe(),$e("li",{key:a},Se(a),1))),128))]),U("h2",null,Se(s.value.deletion.title),1),U("p",null,Se(s.value.deletion.text),1)])]))}},y1=is(v1,[["__scopeId","data-v-117f989b"]]),w1={class:"account-settings"},I1={key:0,class:"user-info"},b1=["src"],E1={__name:"Account",setup(t){const e=wi(),n=zn(Xn.currentUser);async function s(){if(confirm("Are you sure you want to delete your account? This action cannot be undone."))try{await n.value.delete(),alert("Your account has been deleted."),e.push("/login")}catch(o){o.code==="auth/requires-recent-login"?(alert("Please sign in again to delete your account."),e.push("/login")):(console.error("Account deletion failed:",o),alert("Something went wrong. Please try again."))}}return(i,o)=>(xe(),$e("div",w1,[o[2]||(o[2]=U("h1",null,"Account Settings",-1)),n.value?(xe(),$e("div",I1,[U("img",{src:n.value?.photoURL||pt(ra),alt:"Profile",class:"profile-pic"},null,8,b1),U("p",null,[o[0]||(o[0]=U("strong",null,"Name:",-1)),ur(" "+Se(n.value.displayName),1)]),U("p",null,[o[1]||(o[1]=U("strong",null,"Email:",-1)),ur(" "+Se(n.value.email),1)])])):Jh("",!0),o[3]||(o[3]=U("hr",null,null,-1)),U("button",{class:"delete-button",onClick:s},"Delete Account")]))}},T1=is(E1,[["__scopeId","data-v-ca588be0"]]),S1=[{path:"/",component:qb},{path:"/login",component:n1},{path:"/dashboard",component:h1},{path:"/privacy",component:y1},{path:"/account",component:T1}],A1=F_({history:d_("/"),routes:S1});xm(Wb).use(A1).mount("#app");
