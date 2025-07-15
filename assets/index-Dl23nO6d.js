(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ga(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Te={},ms=[],$t=()=>{},vp=()=>!1,kr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ma=t=>t.startsWith("onUpdate:"),Ue=Object.assign,va=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yp=Object.prototype.hasOwnProperty,ye=(t,e)=>yp.call(t,e),ne=Array.isArray,vs=t=>Pr(t)==="[object Map]",Qu=t=>Pr(t)==="[object Set]",re=t=>typeof t=="function",Ne=t=>typeof t=="string",On=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",Zu=t=>(Ce(t)||re(t))&&re(t.then)&&re(t.catch),eh=Object.prototype.toString,Pr=t=>eh.call(t),_p=t=>Pr(t).slice(8,-1),th=t=>Pr(t)==="[object Object]",ya=t=>Ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Js=ga(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Or=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},wp=/-(\w)/g,_t=Or(t=>t.replace(wp,(e,n)=>n?n.toUpperCase():"")),bp=/\B([A-Z])/g,Nn=Or(t=>t.replace(bp,"-$1").toLowerCase()),Nr=Or(t=>t.charAt(0).toUpperCase()+t.slice(1)),go=Or(t=>t?`on${Nr(t)}`:""),Sn=(t,e)=>!Object.is(t,e),tr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$o=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Bo=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Ip=t=>{const e=Ne(t)?Number(t):NaN;return isNaN(e)?t:e};let Xl;const Dr=()=>Xl||(Xl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _a(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ne(s)?Ap(s):_a(s);if(i)for(const o in i)e[o]=i[o]}return e}else if(Ne(t)||Ce(t))return t}const Ep=/;(?![^(]*\))/g,Tp=/:([^]+)/,Sp=/\/\*[^]*?\*\//g;function Ap(t){const e={};return t.replace(Sp,"").split(Ep).forEach(n=>{if(n){const s=n.split(Tp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function fi(t){let e="";if(Ne(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const s=fi(t[n]);s&&(e+=s+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Cp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rp=ga(Cp);function nh(t){return!!t||t===""}const sh=t=>!!(t&&t.__v_isRef===!0),ae=t=>Ne(t)?t:t==null?"":ne(t)||Ce(t)&&(t.toString===eh||!re(t.toString))?sh(t)?ae(t.value):JSON.stringify(t,ih,2):String(t),ih=(t,e)=>sh(e)?ih(t,e.value):vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],o)=>(n[mo(s,o)+" =>"]=i,n),{})}:Qu(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>mo(n))}:On(e)?mo(e):Ce(e)&&!ne(e)&&!th(e)?String(e):e,mo=(t,e="")=>{var n;return On(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let st;class kp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=st,!e&&st&&(this.index=(st.scopes||(st.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=st;try{return st=this,e()}finally{st=n}}}on(){++this._on===1&&(this.prevScope=st,st=this)}off(){this._on>0&&--this._on===0&&(st=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Pp(){return st}let Se;const vo=new WeakSet;class rh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,st&&st.active&&st.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vo.has(this)&&(vo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ah(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yl(this),lh(this);const e=Se,n=At;Se=this,At=!0;try{return this.fn()}finally{ch(this),Se=e,At=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ia(e);this.deps=this.depsTail=void 0,Yl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ho(this)&&this.run()}get dirty(){return Ho(this)}}let oh=0,Xs,Ys;function ah(t,e=!1){if(t.flags|=8,e){t.next=Ys,Ys=t;return}t.next=Xs,Xs=t}function wa(){oh++}function ba(){if(--oh>0)return;if(Ys){let e=Ys;for(Ys=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Xs;){let e=Xs;for(Xs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function lh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ch(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Ia(s),Op(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Ho(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(uh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function uh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===di)||(t.globalVersion=di,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ho(t))))return;t.flags|=2;const e=t.dep,n=Se,s=At;Se=t,At=!0;try{lh(t);const i=t.fn(t._value);(e.version===0||Sn(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Se=n,At=s,ch(t),t.flags&=-3}}function Ia(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Ia(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Op(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let At=!0;const hh=[];function sn(){hh.push(At),At=!1}function rn(){const t=hh.pop();At=t===void 0?!0:t}function Yl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Se;Se=void 0;try{e()}finally{Se=n}}}let di=0;class Np{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ea{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Se||!At||Se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Se)n=this.activeLink=new Np(Se,this),Se.deps?(n.prevDep=Se.depsTail,Se.depsTail.nextDep=n,Se.depsTail=n):Se.deps=Se.depsTail=n,fh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Se.depsTail,n.nextDep=void 0,Se.depsTail.nextDep=n,Se.depsTail=n,Se.deps===n&&(Se.deps=s)}return n}trigger(e){this.version++,di++,this.notify(e)}notify(e){wa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ba()}}}function fh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)fh(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Wo=new WeakMap,Jn=Symbol(""),Go=Symbol(""),pi=Symbol("");function Ke(t,e,n){if(At&&Se){let s=Wo.get(t);s||Wo.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Ea),i.map=s,i.key=n),i.track()}}function Yt(t,e,n,s,i,o){const a=Wo.get(t);if(!a){di++;return}const c=u=>{u&&u.trigger()};if(wa(),e==="clear")a.forEach(c);else{const u=ne(t),f=u&&ya(n);if(u&&n==="length"){const d=Number(s);a.forEach((g,y)=>{(y==="length"||y===pi||!On(y)&&y>=d)&&c(g)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),f&&c(a.get(pi)),e){case"add":u?f&&c(a.get("length")):(c(a.get(Jn)),vs(t)&&c(a.get(Go)));break;case"delete":u||(c(a.get(Jn)),vs(t)&&c(a.get(Go)));break;case"set":vs(t)&&c(a.get(Jn));break}}ba()}function fs(t){const e=me(t);return e===t?e:(Ke(e,"iterate",pi),vt(t)?e:e.map(Be))}function xr(t){return Ke(t=me(t),"iterate",pi),t}const Dp={__proto__:null,[Symbol.iterator](){return yo(this,Symbol.iterator,Be)},concat(...t){return fs(this).concat(...t.map(e=>ne(e)?fs(e):e))},entries(){return yo(this,"entries",t=>(t[1]=Be(t[1]),t))},every(t,e){return Kt(this,"every",t,e,void 0,arguments)},filter(t,e){return Kt(this,"filter",t,e,n=>n.map(Be),arguments)},find(t,e){return Kt(this,"find",t,e,Be,arguments)},findIndex(t,e){return Kt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Kt(this,"findLast",t,e,Be,arguments)},findLastIndex(t,e){return Kt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Kt(this,"forEach",t,e,void 0,arguments)},includes(...t){return _o(this,"includes",t)},indexOf(...t){return _o(this,"indexOf",t)},join(t){return fs(this).join(t)},lastIndexOf(...t){return _o(this,"lastIndexOf",t)},map(t,e){return Kt(this,"map",t,e,void 0,arguments)},pop(){return Gs(this,"pop")},push(...t){return Gs(this,"push",t)},reduce(t,...e){return Ql(this,"reduce",t,e)},reduceRight(t,...e){return Ql(this,"reduceRight",t,e)},shift(){return Gs(this,"shift")},some(t,e){return Kt(this,"some",t,e,void 0,arguments)},splice(...t){return Gs(this,"splice",t)},toReversed(){return fs(this).toReversed()},toSorted(t){return fs(this).toSorted(t)},toSpliced(...t){return fs(this).toSpliced(...t)},unshift(...t){return Gs(this,"unshift",t)},values(){return yo(this,"values",Be)}};function yo(t,e,n){const s=xr(t),i=s[e]();return s!==t&&!vt(t)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.value&&(o.value=n(o.value)),o}),i}const xp=Array.prototype;function Kt(t,e,n,s,i,o){const a=xr(t),c=a!==t&&!vt(t),u=a[e];if(u!==xp[e]){const g=u.apply(t,o);return c?Be(g):g}let f=n;a!==t&&(c?f=function(g,y){return n.call(this,Be(g),y,t)}:n.length>2&&(f=function(g,y){return n.call(this,g,y,t)}));const d=u.call(a,f,s);return c&&i?i(d):d}function Ql(t,e,n,s){const i=xr(t);let o=n;return i!==t&&(vt(t)?n.length>3&&(o=function(a,c,u){return n.call(this,a,c,u,t)}):o=function(a,c,u){return n.call(this,a,Be(c),u,t)}),i[e](o,...s)}function _o(t,e,n){const s=me(t);Ke(s,"iterate",pi);const i=s[e](...n);return(i===-1||i===!1)&&Aa(n[0])?(n[0]=me(n[0]),s[e](...n)):i}function Gs(t,e,n=[]){sn(),wa();const s=me(t)[e].apply(t,n);return ba(),rn(),s}const Lp=ga("__proto__,__v_isRef,__isVue"),dh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(On));function Mp(t){On(t)||(t=String(t));const e=me(this);return Ke(e,"has",t),e.hasOwnProperty(t)}class ph{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(i?o?zp:yh:o?vh:mh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const a=ne(e);if(!i){let u;if(a&&(u=Dp[n]))return u;if(n==="hasOwnProperty")return Mp}const c=Reflect.get(e,n,qe(e)?e:s);return(On(n)?dh.has(n):Lp(n))||(i||Ke(e,"get",n),o)?c:qe(c)?a&&ya(n)?c:c.value:Ce(c)?i?wh(c):Lr(c):c}}class gh extends ph{constructor(e=!1){super(!1,e)}set(e,n,s,i){let o=e[n];if(!this._isShallow){const u=Rn(o);if(!vt(s)&&!Rn(s)&&(o=me(o),s=me(s)),!ne(e)&&qe(o)&&!qe(s))return u?!1:(o.value=s,!0)}const a=ne(e)&&ya(n)?Number(n)<e.length:ye(e,n),c=Reflect.set(e,n,s,qe(e)?e:i);return e===me(i)&&(a?Sn(s,o)&&Yt(e,"set",n,s):Yt(e,"add",n,s)),c}deleteProperty(e,n){const s=ye(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Yt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!On(n)||!dh.has(n))&&Ke(e,"has",n),s}ownKeys(e){return Ke(e,"iterate",ne(e)?"length":Jn),Reflect.ownKeys(e)}}class Up extends ph{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Fp=new gh,jp=new Up,Vp=new gh(!0);const zo=t=>t,qi=t=>Reflect.getPrototypeOf(t);function $p(t,e,n){return function(...s){const i=this.__v_raw,o=me(i),a=vs(o),c=t==="entries"||t===Symbol.iterator&&a,u=t==="keys"&&a,f=i[t](...s),d=n?zo:e?hr:Be;return!e&&Ke(o,"iterate",u?Go:Jn),{next(){const{value:g,done:y}=f.next();return y?{value:g,done:y}:{value:c?[d(g[0]),d(g[1])]:d(g),done:y}},[Symbol.iterator](){return this}}}}function Ji(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Bp(t,e){const n={get(i){const o=this.__v_raw,a=me(o),c=me(i);t||(Sn(i,c)&&Ke(a,"get",i),Ke(a,"get",c));const{has:u}=qi(a),f=e?zo:t?hr:Be;if(u.call(a,i))return f(o.get(i));if(u.call(a,c))return f(o.get(c));o!==a&&o.get(i)},get size(){const i=this.__v_raw;return!t&&Ke(me(i),"iterate",Jn),Reflect.get(i,"size",i)},has(i){const o=this.__v_raw,a=me(o),c=me(i);return t||(Sn(i,c)&&Ke(a,"has",i),Ke(a,"has",c)),i===c?o.has(i):o.has(i)||o.has(c)},forEach(i,o){const a=this,c=a.__v_raw,u=me(c),f=e?zo:t?hr:Be;return!t&&Ke(u,"iterate",Jn),c.forEach((d,g)=>i.call(o,f(d),f(g),a))}};return Ue(n,t?{add:Ji("add"),set:Ji("set"),delete:Ji("delete"),clear:Ji("clear")}:{add(i){!e&&!vt(i)&&!Rn(i)&&(i=me(i));const o=me(this);return qi(o).has.call(o,i)||(o.add(i),Yt(o,"add",i,i)),this},set(i,o){!e&&!vt(o)&&!Rn(o)&&(o=me(o));const a=me(this),{has:c,get:u}=qi(a);let f=c.call(a,i);f||(i=me(i),f=c.call(a,i));const d=u.call(a,i);return a.set(i,o),f?Sn(o,d)&&Yt(a,"set",i,o):Yt(a,"add",i,o),this},delete(i){const o=me(this),{has:a,get:c}=qi(o);let u=a.call(o,i);u||(i=me(i),u=a.call(o,i)),c&&c.call(o,i);const f=o.delete(i);return u&&Yt(o,"delete",i,void 0),f},clear(){const i=me(this),o=i.size!==0,a=i.clear();return o&&Yt(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=$p(i,t,e)}),n}function Ta(t,e){const n=Bp(t,e);return(s,i,o)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ye(n,i)&&i in s?n:s,i,o)}const Hp={get:Ta(!1,!1)},Wp={get:Ta(!1,!0)},Gp={get:Ta(!0,!1)};const mh=new WeakMap,vh=new WeakMap,yh=new WeakMap,zp=new WeakMap;function Kp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qp(t){return t.__v_skip||!Object.isExtensible(t)?0:Kp(_p(t))}function Lr(t){return Rn(t)?t:Sa(t,!1,Fp,Hp,mh)}function _h(t){return Sa(t,!1,Vp,Wp,vh)}function wh(t){return Sa(t,!0,jp,Gp,yh)}function Sa(t,e,n,s,i){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=qp(t);if(o===0)return t;const a=i.get(t);if(a)return a;const c=new Proxy(t,o===2?s:n);return i.set(t,c),c}function ys(t){return Rn(t)?ys(t.__v_raw):!!(t&&t.__v_isReactive)}function Rn(t){return!!(t&&t.__v_isReadonly)}function vt(t){return!!(t&&t.__v_isShallow)}function Aa(t){return t?!!t.__v_raw:!1}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function Jp(t){return!ye(t,"__v_skip")&&Object.isExtensible(t)&&$o(t,"__v_skip",!0),t}const Be=t=>Ce(t)?Lr(t):t,hr=t=>Ce(t)?wh(t):t;function qe(t){return t?t.__v_isRef===!0:!1}function Le(t){return bh(t,!1)}function Xp(t){return bh(t,!0)}function bh(t,e){return qe(t)?t:new Yp(t,e)}class Yp{constructor(e,n){this.dep=new Ea,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:me(e),this._value=n?e:Be(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||vt(e)||Rn(e);e=s?e:me(e),Sn(e,n)&&(this._rawValue=e,this._value=s?e:Be(e),this.dep.trigger())}}function rt(t){return qe(t)?t.value:t}const Qp={get:(t,e,n)=>e==="__v_raw"?t:rt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return qe(i)&&!qe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Ih(t){return ys(t)?t:new Proxy(t,Qp)}class Zp{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ea(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=di-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Se!==this)return ah(this,!0),!0}get value(){const e=this.dep.track();return uh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function eg(t,e,n=!1){let s,i;return re(t)?s=t:(s=t.get,i=t.set),new Zp(s,i,n)}const Xi={},fr=new WeakMap;let $n;function tg(t,e=!1,n=$n){if(n){let s=fr.get(n);s||fr.set(n,s=[]),s.push(t)}}function ng(t,e,n=Te){const{immediate:s,deep:i,once:o,scheduler:a,augmentJob:c,call:u}=n,f=B=>i?B:vt(B)||i===!1||i===0?Qt(B,1):Qt(B);let d,g,y,T,P=!1,U=!1;if(qe(t)?(g=()=>t.value,P=vt(t)):ys(t)?(g=()=>f(t),P=!0):ne(t)?(U=!0,P=t.some(B=>ys(B)||vt(B)),g=()=>t.map(B=>{if(qe(B))return B.value;if(ys(B))return f(B);if(re(B))return u?u(B,2):B()})):re(t)?e?g=u?()=>u(t,2):t:g=()=>{if(y){sn();try{y()}finally{rn()}}const B=$n;$n=d;try{return u?u(t,3,[T]):t(T)}finally{$n=B}}:g=$t,e&&i){const B=g,Z=i===!0?1/0:i;g=()=>Qt(B(),Z)}const z=Pp(),q=()=>{d.stop(),z&&z.active&&va(z.effects,d)};if(o&&e){const B=e;e=(...Z)=>{B(...Z),q()}}let j=U?new Array(t.length).fill(Xi):Xi;const H=B=>{if(!(!(d.flags&1)||!d.dirty&&!B))if(e){const Z=d.run();if(i||P||(U?Z.some((J,S)=>Sn(J,j[S])):Sn(Z,j))){y&&y();const J=$n;$n=d;try{const S=[Z,j===Xi?void 0:U&&j[0]===Xi?[]:j,T];j=Z,u?u(e,3,S):e(...S)}finally{$n=J}}}else d.run()};return c&&c(H),d=new rh(g),d.scheduler=a?()=>a(H,!1):H,T=B=>tg(B,!1,d),y=d.onStop=()=>{const B=fr.get(d);if(B){if(u)u(B,4);else for(const Z of B)Z();fr.delete(d)}},e?s?H(!0):j=d.run():a?a(H.bind(null,!0),!0):d.run(),q.pause=d.pause.bind(d),q.resume=d.resume.bind(d),q.stop=q,q}function Qt(t,e=1/0,n){if(e<=0||!Ce(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,qe(t))Qt(t.value,e,n);else if(ne(t))for(let s=0;s<t.length;s++)Qt(t[s],e,n);else if(Qu(t)||vs(t))t.forEach(s=>{Qt(s,e,n)});else if(th(t)){for(const s in t)Qt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Qt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Si(t,e,n,s){try{return s?t(...s):t()}catch(i){Mr(i,e,n)}}function Pt(t,e,n,s){if(re(t)){const i=Si(t,e,n,s);return i&&Zu(i)&&i.catch(o=>{Mr(o,e,n)}),i}if(ne(t)){const i=[];for(let o=0;o<t.length;o++)i.push(Pt(t[o],e,n,s));return i}}function Mr(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Te;if(e){let c=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](t,u,f)===!1)return}c=c.parent}if(o){sn(),Si(o,null,10,[t,u,f]),rn();return}}sg(t,n,i,s,a)}function sg(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Qe=[];let Mt=-1;const _s=[];let yn=null,ds=0;const Eh=Promise.resolve();let dr=null;function Qs(t){const e=dr||Eh;return t?e.then(this?t.bind(this):t):e}function ig(t){let e=Mt+1,n=Qe.length;for(;e<n;){const s=e+n>>>1,i=Qe[s],o=gi(i);o<t||o===t&&i.flags&2?e=s+1:n=s}return e}function Ca(t){if(!(t.flags&1)){const e=gi(t),n=Qe[Qe.length-1];!n||!(t.flags&2)&&e>=gi(n)?Qe.push(t):Qe.splice(ig(e),0,t),t.flags|=1,Th()}}function Th(){dr||(dr=Eh.then(Ah))}function rg(t){ne(t)?_s.push(...t):yn&&t.id===-1?yn.splice(ds+1,0,t):t.flags&1||(_s.push(t),t.flags|=1),Th()}function Zl(t,e,n=Mt+1){for(;n<Qe.length;n++){const s=Qe[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Qe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Sh(t){if(_s.length){const e=[...new Set(_s)].sort((n,s)=>gi(n)-gi(s));if(_s.length=0,yn){yn.push(...e);return}for(yn=e,ds=0;ds<yn.length;ds++){const n=yn[ds];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}yn=null,ds=0}}const gi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ah(t){try{for(Mt=0;Mt<Qe.length;Mt++){const e=Qe[Mt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Si(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Mt<Qe.length;Mt++){const e=Qe[Mt];e&&(e.flags&=-2)}Mt=-1,Qe.length=0,Sh(),dr=null,(Qe.length||_s.length)&&Ah()}}let ot=null,Ch=null;function pr(t){const e=ot;return ot=t,Ch=t&&t.type.__scopeId||null,e}function Ra(t,e=ot,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&uc(-1);const o=pr(e);let a;try{a=t(...i)}finally{pr(o),s._d&&uc(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function og(t,e){if(ot===null)return t;const n=Br(ot),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=Te]=e[i];o&&(re(o)&&(o={mounted:o,updated:o}),o.deep&&Qt(a),s.push({dir:o,instance:n,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Un(t,e,n,s){const i=t.dirs,o=e&&e.dirs;for(let a=0;a<i.length;a++){const c=i[a];o&&(c.oldValue=o[a].value);let u=c.dir[s];u&&(sn(),Pt(u,n,8,[t.el,c,t,e]),rn())}}const ag=Symbol("_vte"),Rh=t=>t.__isTeleport,_n=Symbol("_leaveCb"),Yi=Symbol("_enterCb");function lg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ks(()=>{t.isMounted=!0}),Pa(()=>{t.isUnmounting=!0}),t}const mt=[Function,Array],kh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mt,onEnter:mt,onAfterEnter:mt,onEnterCancelled:mt,onBeforeLeave:mt,onLeave:mt,onAfterLeave:mt,onLeaveCancelled:mt,onBeforeAppear:mt,onAppear:mt,onAfterAppear:mt,onAppearCancelled:mt},Ph=t=>{const e=t.subTree;return e.component?Ph(e.component):e},cg={name:"BaseTransition",props:kh,setup(t,{slots:e}){const n=rm(),s=lg();return()=>{const i=e.default&&Dh(e.default(),!0);if(!i||!i.length)return;const o=Oh(i),a=me(t),{mode:c}=a;if(s.isLeaving)return wo(o);const u=ec(o);if(!u)return wo(o);let f=Ko(u,a,s,n,g=>f=g);u.type!==et&&mi(u,f);let d=n.subTree&&ec(n.subTree);if(d&&d.type!==et&&!Hn(u,d)&&Ph(n).type!==et){let g=Ko(d,a,s,n);if(mi(d,g),c==="out-in"&&u.type!==et)return s.isLeaving=!0,g.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete g.afterLeave,d=void 0},wo(o);c==="in-out"&&u.type!==et?g.delayLeave=(y,T,P)=>{const U=Nh(s,d);U[String(d.key)]=d,y[_n]=()=>{T(),y[_n]=void 0,delete f.delayedLeave,d=void 0},f.delayedLeave=()=>{P(),delete f.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return o}}};function Oh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==et){e=n;break}}return e}const ug=cg;function Nh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ko(t,e,n,s,i){const{appear:o,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:f,onAfterEnter:d,onEnterCancelled:g,onBeforeLeave:y,onLeave:T,onAfterLeave:P,onLeaveCancelled:U,onBeforeAppear:z,onAppear:q,onAfterAppear:j,onAppearCancelled:H}=e,B=String(t.key),Z=Nh(n,t),J=(m,E)=>{m&&Pt(m,s,9,E)},S=(m,E)=>{const A=E[1];J(m,E),ne(m)?m.every(I=>I.length<=1)&&A():m.length<=1&&A()},v={mode:a,persisted:c,beforeEnter(m){let E=u;if(!n.isMounted)if(o)E=z||u;else return;m[_n]&&m[_n](!0);const A=Z[B];A&&Hn(t,A)&&A.el[_n]&&A.el[_n](),J(E,[m])},enter(m){let E=f,A=d,I=g;if(!n.isMounted)if(o)E=q||f,A=j||d,I=H||g;else return;let w=!1;const Ie=m[Yi]=xe=>{w||(w=!0,xe?J(I,[m]):J(A,[m]),v.delayedLeave&&v.delayedLeave(),m[Yi]=void 0)};E?S(E,[m,Ie]):Ie()},leave(m,E){const A=String(t.key);if(m[Yi]&&m[Yi](!0),n.isUnmounting)return E();J(y,[m]);let I=!1;const w=m[_n]=Ie=>{I||(I=!0,E(),Ie?J(U,[m]):J(P,[m]),m[_n]=void 0,Z[A]===t&&delete Z[A])};Z[A]=t,T?S(T,[m,w]):w()},clone(m){const E=Ko(m,e,n,s,i);return i&&i(E),E}};return v}function wo(t){if(Ur(t))return t=kn(t),t.children=null,t}function ec(t){if(!Ur(t))return Rh(t.type)&&t.children?Oh(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&re(n.default))return n.default()}}function mi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,mi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Dh(t,e=!1,n){let s=[],i=0;for(let o=0;o<t.length;o++){let a=t[o];const c=n==null?a.key:String(n)+String(a.key!=null?a.key:o);a.type===Ze?(a.patchFlag&128&&i++,s=s.concat(Dh(a.children,e,c))):(e||a.type!==et)&&s.push(c!=null?kn(a,{key:c}):a)}if(i>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function ka(t,e){return re(t)?Ue({name:t.name},e,{setup:t}):t}function xh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Zs(t,e,n,s,i=!1){if(ne(t)){t.forEach((P,U)=>Zs(P,e&&(ne(e)?e[U]:e),n,s,i));return}if(ei(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Zs(t,e,n,s.component.subTree);return}const o=s.shapeFlag&4?Br(s.component):s.el,a=i?null:o,{i:c,r:u}=t,f=e&&e.r,d=c.refs===Te?c.refs={}:c.refs,g=c.setupState,y=me(g),T=g===Te?()=>!1:P=>ye(y,P);if(f!=null&&f!==u&&(Ne(f)?(d[f]=null,T(f)&&(g[f]=null)):qe(f)&&(f.value=null)),re(u))Si(u,c,12,[a,d]);else{const P=Ne(u),U=qe(u);if(P||U){const z=()=>{if(t.f){const q=P?T(u)?g[u]:d[u]:u.value;i?ne(q)&&va(q,o):ne(q)?q.includes(o)||q.push(o):P?(d[u]=[o],T(u)&&(g[u]=d[u])):(u.value=[o],t.k&&(d[t.k]=u.value))}else P?(d[u]=a,T(u)&&(g[u]=a)):U&&(u.value=a,t.k&&(d[t.k]=a))};a?(z.id=-1,ct(z,n)):z()}}}Dr().requestIdleCallback;Dr().cancelIdleCallback;const ei=t=>!!t.type.__asyncLoader,Ur=t=>t.type.__isKeepAlive;function Lh(t,e){Uh(t,"a",e)}function Mh(t,e){Uh(t,"da",e)}function Uh(t,e,n=He){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Fr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ur(i.parent.vnode)&&hg(s,e,n,i),i=i.parent}}function hg(t,e,n,s){const i=Fr(e,t,s,!0);jr(()=>{va(s[e],i)},n)}function Fr(t,e,n=He,s=!1){if(n){const i=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{sn();const c=Ai(n),u=Pt(e,n,t,a);return c(),rn(),u});return s?i.unshift(o):i.push(o),o}}const ln=t=>(e,n=He)=>{(!yi||t==="sp")&&Fr(t,(...s)=>e(...s),n)},fg=ln("bm"),ks=ln("m"),dg=ln("bu"),pg=ln("u"),Pa=ln("bum"),jr=ln("um"),gg=ln("sp"),mg=ln("rtg"),vg=ln("rtc");function yg(t,e=He){Fr("ec",t,e)}const _g="components";function Fh(t,e){return bg(_g,t,!0,e)||t}const wg=Symbol.for("v-ndc");function bg(t,e,n=!0,s=!1){const i=ot||He;if(i){const o=i.type;{const c=um(o,!1);if(c&&(c===e||c===_t(e)||c===Nr(_t(e))))return o}const a=tc(i[t]||o[t],e)||tc(i.appContext[t],e);return!a&&s?o:a}}function tc(t,e){return t&&(t[e]||t[_t(e)]||t[Nr(_t(e))])}function qo(t,e,n,s){let i;const o=n,a=ne(t);if(a||Ne(t)){const c=a&&ys(t);let u=!1,f=!1;c&&(u=!vt(t),f=Rn(t),t=xr(t)),i=new Array(t.length);for(let d=0,g=t.length;d<g;d++)i[d]=e(u?f?hr(Be(t[d])):Be(t[d]):t[d],d,void 0,o)}else if(typeof t=="number"){i=new Array(t);for(let c=0;c<t;c++)i[c]=e(c+1,c,void 0,o)}else if(Ce(t))if(t[Symbol.iterator])i=Array.from(t,(c,u)=>e(c,u,void 0,o));else{const c=Object.keys(t);i=new Array(c.length);for(let u=0,f=c.length;u<f;u++){const d=c[u];i[u]=e(t[d],d,u,o)}}else i=[];return i}const Jo=t=>t?rf(t)?Br(t):Jo(t.parent):null,ti=Ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Jo(t.parent),$root:t=>Jo(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vh(t),$forceUpdate:t=>t.f||(t.f=()=>{Ca(t.update)}),$nextTick:t=>t.n||(t.n=Qs.bind(t.proxy)),$watch:t=>Bg.bind(t)}),bo=(t,e)=>t!==Te&&!t.__isScriptSetup&&ye(t,e),Ig={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:o,accessCache:a,type:c,appContext:u}=t;let f;if(e[0]!=="$"){const T=a[e];if(T!==void 0)switch(T){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return o[e]}else{if(bo(s,e))return a[e]=1,s[e];if(i!==Te&&ye(i,e))return a[e]=2,i[e];if((f=t.propsOptions[0])&&ye(f,e))return a[e]=3,o[e];if(n!==Te&&ye(n,e))return a[e]=4,n[e];Xo&&(a[e]=0)}}const d=ti[e];let g,y;if(d)return e==="$attrs"&&Ke(t.attrs,"get",""),d(t);if((g=c.__cssModules)&&(g=g[e]))return g;if(n!==Te&&ye(n,e))return a[e]=4,n[e];if(y=u.config.globalProperties,ye(y,e))return y[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:o}=t;return bo(i,e)?(i[e]=n,!0):s!==Te&&ye(s,e)?(s[e]=n,!0):ye(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:o}},a){let c;return!!n[a]||t!==Te&&ye(t,a)||bo(e,a)||(c=o[0])&&ye(c,a)||ye(s,a)||ye(ti,a)||ye(i.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ye(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function nc(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xo=!0;function Eg(t){const e=Vh(t),n=t.proxy,s=t.ctx;Xo=!1,e.beforeCreate&&sc(e.beforeCreate,t,"bc");const{data:i,computed:o,methods:a,watch:c,provide:u,inject:f,created:d,beforeMount:g,mounted:y,beforeUpdate:T,updated:P,activated:U,deactivated:z,beforeDestroy:q,beforeUnmount:j,destroyed:H,unmounted:B,render:Z,renderTracked:J,renderTriggered:S,errorCaptured:v,serverPrefetch:m,expose:E,inheritAttrs:A,components:I,directives:w,filters:Ie}=e;if(f&&Tg(f,s,null),a)for(const ce in a){const le=a[ce];re(le)&&(s[ce]=le.bind(n))}if(i){const ce=i.call(n,n);Ce(ce)&&(t.data=Lr(ce))}if(Xo=!0,o)for(const ce in o){const le=o[ce],lt=re(le)?le.bind(n,n):re(le.get)?le.get.bind(n,n):$t,wt=!re(le)&&re(le.set)?le.set.bind(n):$t,ft=it({get:lt,set:wt});Object.defineProperty(s,ce,{enumerable:!0,configurable:!0,get:()=>ft.value,set:ke=>ft.value=ke})}if(c)for(const ce in c)jh(c[ce],s,n,ce);if(u){const ce=re(u)?u.call(n):u;Reflect.ownKeys(ce).forEach(le=>{nr(le,ce[le])})}d&&sc(d,t,"c");function Re(ce,le){ne(le)?le.forEach(lt=>ce(lt.bind(n))):le&&ce(le.bind(n))}if(Re(fg,g),Re(ks,y),Re(dg,T),Re(pg,P),Re(Lh,U),Re(Mh,z),Re(yg,v),Re(vg,J),Re(mg,S),Re(Pa,j),Re(jr,B),Re(gg,m),ne(E))if(E.length){const ce=t.exposed||(t.exposed={});E.forEach(le=>{Object.defineProperty(ce,le,{get:()=>n[le],set:lt=>n[le]=lt})})}else t.exposed||(t.exposed={});Z&&t.render===$t&&(t.render=Z),A!=null&&(t.inheritAttrs=A),I&&(t.components=I),w&&(t.directives=w),m&&xh(t)}function Tg(t,e,n=$t){ne(t)&&(t=Yo(t));for(const s in t){const i=t[s];let o;Ce(i)?"default"in i?o=Ct(i.from||s,i.default,!0):o=Ct(i.from||s):o=Ct(i),qe(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function sc(t,e,n){Pt(ne(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function jh(t,e,n,s){let i=s.includes(".")?Zh(n,s):()=>n[s];if(Ne(t)){const o=e[t];re(o)&&ni(i,o)}else if(re(t))ni(i,t.bind(n));else if(Ce(t))if(ne(t))t.forEach(o=>jh(o,e,n,s));else{const o=re(t.handler)?t.handler.bind(n):e[t.handler];re(o)&&ni(i,o,t)}}function Vh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:!i.length&&!n&&!s?u=e:(u={},i.length&&i.forEach(f=>gr(u,f,a,!0)),gr(u,e,a)),Ce(e)&&o.set(e,u),u}function gr(t,e,n,s=!1){const{mixins:i,extends:o}=e;o&&gr(t,o,n,!0),i&&i.forEach(a=>gr(t,a,n,!0));for(const a in e)if(!(s&&a==="expose")){const c=Sg[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const Sg={data:ic,props:rc,emits:rc,methods:qs,computed:qs,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:qs,directives:qs,watch:Cg,provide:ic,inject:Ag};function ic(t,e){return e?t?function(){return Ue(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function Ag(t,e){return qs(Yo(t),Yo(e))}function Yo(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xe(t,e){return t?[...new Set([].concat(t,e))]:e}function qs(t,e){return t?Ue(Object.create(null),t,e):e}function rc(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:Ue(Object.create(null),nc(t),nc(e??{})):e}function Cg(t,e){if(!t)return e;if(!e)return t;const n=Ue(Object.create(null),t);for(const s in e)n[s]=Xe(t[s],e[s]);return n}function $h(){return{app:null,config:{isNativeTag:vp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rg=0;function kg(t,e){return function(s,i=null){re(s)||(s=Ue({},s)),i!=null&&!Ce(i)&&(i=null);const o=$h(),a=new WeakSet,c=[];let u=!1;const f=o.app={_uid:Rg++,_component:s,_props:i,_container:null,_context:o,_instance:null,version:fm,get config(){return o.config},set config(d){},use(d,...g){return a.has(d)||(d&&re(d.install)?(a.add(d),d.install(f,...g)):re(d)&&(a.add(d),d(f,...g))),f},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),f},component(d,g){return g?(o.components[d]=g,f):o.components[d]},directive(d,g){return g?(o.directives[d]=g,f):o.directives[d]},mount(d,g,y){if(!u){const T=f._ceVNode||Me(s,i);return T.appContext=o,y===!0?y="svg":y===!1&&(y=void 0),t(T,d,y),u=!0,f._container=d,d.__vue_app__=f,Br(T.component)}},onUnmount(d){c.push(d)},unmount(){u&&(Pt(c,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(d,g){return o.provides[d]=g,f},runWithContext(d){const g=ws;ws=f;try{return d()}finally{ws=g}}};return f}}let ws=null;function nr(t,e){if(He){let n=He.provides;const s=He.parent&&He.parent.provides;s===n&&(n=He.provides=Object.create(s)),n[t]=e}}function Ct(t,e,n=!1){const s=He||ot;if(s||ws){let i=ws?ws._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&re(e)?e.call(s&&s.proxy):e}}const Bh={},Hh=()=>Object.create(Bh),Wh=t=>Object.getPrototypeOf(t)===Bh;function Pg(t,e,n,s=!1){const i={},o=Hh();t.propsDefaults=Object.create(null),Gh(t,e,i,o);for(const a in t.propsOptions[0])a in i||(i[a]=void 0);n?t.props=s?i:_h(i):t.type.props?t.props=i:t.props=o,t.attrs=o}function Og(t,e,n,s){const{props:i,attrs:o,vnode:{patchFlag:a}}=t,c=me(i),[u]=t.propsOptions;let f=!1;if((s||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let g=0;g<d.length;g++){let y=d[g];if(Vr(t.emitsOptions,y))continue;const T=e[y];if(u)if(ye(o,y))T!==o[y]&&(o[y]=T,f=!0);else{const P=_t(y);i[P]=Qo(u,c,P,T,t,!1)}else T!==o[y]&&(o[y]=T,f=!0)}}}else{Gh(t,e,i,o)&&(f=!0);let d;for(const g in c)(!e||!ye(e,g)&&((d=Nn(g))===g||!ye(e,d)))&&(u?n&&(n[g]!==void 0||n[d]!==void 0)&&(i[g]=Qo(u,c,g,void 0,t,!0)):delete i[g]);if(o!==c)for(const g in o)(!e||!ye(e,g))&&(delete o[g],f=!0)}f&&Yt(t.attrs,"set","")}function Gh(t,e,n,s){const[i,o]=t.propsOptions;let a=!1,c;if(e)for(let u in e){if(Js(u))continue;const f=e[u];let d;i&&ye(i,d=_t(u))?!o||!o.includes(d)?n[d]=f:(c||(c={}))[d]=f:Vr(t.emitsOptions,u)||(!(u in s)||f!==s[u])&&(s[u]=f,a=!0)}if(o){const u=me(n),f=c||Te;for(let d=0;d<o.length;d++){const g=o[d];n[g]=Qo(i,u,g,f[g],t,!ye(f,g))}}return a}function Qo(t,e,n,s,i,o){const a=t[n];if(a!=null){const c=ye(a,"default");if(c&&s===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&re(u)){const{propsDefaults:f}=i;if(n in f)s=f[n];else{const d=Ai(i);s=f[n]=u.call(null,e),d()}}else s=u;i.ce&&i.ce._setProp(n,s)}a[0]&&(o&&!c?s=!1:a[1]&&(s===""||s===Nn(n))&&(s=!0))}return s}const Ng=new WeakMap;function zh(t,e,n=!1){const s=n?Ng:e.propsCache,i=s.get(t);if(i)return i;const o=t.props,a={},c=[];let u=!1;if(!re(t)){const d=g=>{u=!0;const[y,T]=zh(g,e,!0);Ue(a,y),T&&c.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!o&&!u)return Ce(t)&&s.set(t,ms),ms;if(ne(o))for(let d=0;d<o.length;d++){const g=_t(o[d]);oc(g)&&(a[g]=Te)}else if(o)for(const d in o){const g=_t(d);if(oc(g)){const y=o[d],T=a[g]=ne(y)||re(y)?{type:y}:Ue({},y),P=T.type;let U=!1,z=!0;if(ne(P))for(let q=0;q<P.length;++q){const j=P[q],H=re(j)&&j.name;if(H==="Boolean"){U=!0;break}else H==="String"&&(z=!1)}else U=re(P)&&P.name==="Boolean";T[0]=U,T[1]=z,(U||ye(T,"default"))&&c.push(g)}}const f=[a,c];return Ce(t)&&s.set(t,f),f}function oc(t){return t[0]!=="$"&&!Js(t)}const Oa=t=>t[0]==="_"||t==="$stable",Na=t=>ne(t)?t.map(Ft):[Ft(t)],Dg=(t,e,n)=>{if(e._n)return e;const s=Ra((...i)=>Na(e(...i)),n);return s._c=!1,s},Kh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Oa(i))continue;const o=t[i];if(re(o))e[i]=Dg(i,o,s);else if(o!=null){const a=Na(o);e[i]=()=>a}}},qh=(t,e)=>{const n=Na(e);t.slots.default=()=>n},Jh=(t,e,n)=>{for(const s in e)(n||!Oa(s))&&(t[s]=e[s])},xg=(t,e,n)=>{const s=t.slots=Hh();if(t.vnode.shapeFlag&32){const i=e.__;i&&$o(s,"__",i,!0);const o=e._;o?(Jh(s,e,n),n&&$o(s,"_",o,!0)):Kh(e,s)}else e&&qh(t,e)},Lg=(t,e,n)=>{const{vnode:s,slots:i}=t;let o=!0,a=Te;if(s.shapeFlag&32){const c=e._;c?n&&c===1?o=!1:Jh(i,e,n):(o=!e.$stable,Kh(e,i)),a=e}else e&&(qh(t,e),a={default:1});if(o)for(const c in i)!Oa(c)&&a[c]==null&&delete i[c]},ct=Jg;function Mg(t){return Ug(t)}function Ug(t,e){const n=Dr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:o,createElement:a,createText:c,createComment:u,setText:f,setElementText:d,parentNode:g,nextSibling:y,setScopeId:T=$t,insertStaticContent:P}=t,U=(_,b,C,N=null,L=null,D=null,G=void 0,V=null,F=!!b.dynamicChildren)=>{if(_===b)return;_&&!Hn(_,b)&&(N=O(_),ke(_,L,D,!0),_=null),b.patchFlag===-2&&(F=!1,b.dynamicChildren=null);const{type:M,ref:ee,shapeFlag:W}=b;switch(M){case $r:z(_,b,C,N);break;case et:q(_,b,C,N);break;case sr:_==null&&j(b,C,N,G);break;case Ze:I(_,b,C,N,L,D,G,V,F);break;default:W&1?Z(_,b,C,N,L,D,G,V,F):W&6?w(_,b,C,N,L,D,G,V,F):(W&64||W&128)&&M.process(_,b,C,N,L,D,G,V,F,Y)}ee!=null&&L?Zs(ee,_&&_.ref,D,b||_,!b):ee==null&&_&&_.ref!=null&&Zs(_.ref,null,D,_,!0)},z=(_,b,C,N)=>{if(_==null)s(b.el=c(b.children),C,N);else{const L=b.el=_.el;b.children!==_.children&&f(L,b.children)}},q=(_,b,C,N)=>{_==null?s(b.el=u(b.children||""),C,N):b.el=_.el},j=(_,b,C,N)=>{[_.el,_.anchor]=P(_.children,b,C,N,_.el,_.anchor)},H=({el:_,anchor:b},C,N)=>{let L;for(;_&&_!==b;)L=y(_),s(_,C,N),_=L;s(b,C,N)},B=({el:_,anchor:b})=>{let C;for(;_&&_!==b;)C=y(_),i(_),_=C;i(b)},Z=(_,b,C,N,L,D,G,V,F)=>{b.type==="svg"?G="svg":b.type==="math"&&(G="mathml"),_==null?J(b,C,N,L,D,G,V,F):m(_,b,L,D,G,V,F)},J=(_,b,C,N,L,D,G,V)=>{let F,M;const{props:ee,shapeFlag:W,transition:Q,dirs:se}=_;if(F=_.el=a(_.type,D,ee&&ee.is,ee),W&8?d(F,_.children):W&16&&v(_.children,F,null,N,L,Io(_,D),G,V),se&&Un(_,null,N,"created"),S(F,_,_.scopeId,G,N),ee){for(const oe in ee)oe!=="value"&&!Js(oe)&&o(F,oe,null,ee[oe],D,N);"value"in ee&&o(F,"value",null,ee.value,D),(M=ee.onVnodeBeforeMount)&&Lt(M,N,_)}se&&Un(_,null,N,"beforeMount");const te=Fg(L,Q);te&&Q.beforeEnter(F),s(F,b,C),((M=ee&&ee.onVnodeMounted)||te||se)&&ct(()=>{M&&Lt(M,N,_),te&&Q.enter(F),se&&Un(_,null,N,"mounted")},L)},S=(_,b,C,N,L)=>{if(C&&T(_,C),N)for(let D=0;D<N.length;D++)T(_,N[D]);if(L){let D=L.subTree;if(b===D||tf(D.type)&&(D.ssContent===b||D.ssFallback===b)){const G=L.vnode;S(_,G,G.scopeId,G.slotScopeIds,L.parent)}}},v=(_,b,C,N,L,D,G,V,F=0)=>{for(let M=F;M<_.length;M++){const ee=_[M]=V?wn(_[M]):Ft(_[M]);U(null,ee,b,C,N,L,D,G,V)}},m=(_,b,C,N,L,D,G)=>{const V=b.el=_.el;let{patchFlag:F,dynamicChildren:M,dirs:ee}=b;F|=_.patchFlag&16;const W=_.props||Te,Q=b.props||Te;let se;if(C&&Fn(C,!1),(se=Q.onVnodeBeforeUpdate)&&Lt(se,C,b,_),ee&&Un(b,_,C,"beforeUpdate"),C&&Fn(C,!0),(W.innerHTML&&Q.innerHTML==null||W.textContent&&Q.textContent==null)&&d(V,""),M?E(_.dynamicChildren,M,V,C,N,Io(b,L),D):G||le(_,b,V,null,C,N,Io(b,L),D,!1),F>0){if(F&16)A(V,W,Q,C,L);else if(F&2&&W.class!==Q.class&&o(V,"class",null,Q.class,L),F&4&&o(V,"style",W.style,Q.style,L),F&8){const te=b.dynamicProps;for(let oe=0;oe<te.length;oe++){const ue=te[oe],Fe=W[ue],je=Q[ue];(je!==Fe||ue==="value")&&o(V,ue,Fe,je,L,C)}}F&1&&_.children!==b.children&&d(V,b.children)}else!G&&M==null&&A(V,W,Q,C,L);((se=Q.onVnodeUpdated)||ee)&&ct(()=>{se&&Lt(se,C,b,_),ee&&Un(b,_,C,"updated")},N)},E=(_,b,C,N,L,D,G)=>{for(let V=0;V<b.length;V++){const F=_[V],M=b[V],ee=F.el&&(F.type===Ze||!Hn(F,M)||F.shapeFlag&198)?g(F.el):C;U(F,M,ee,null,N,L,D,G,!0)}},A=(_,b,C,N,L)=>{if(b!==C){if(b!==Te)for(const D in b)!Js(D)&&!(D in C)&&o(_,D,b[D],null,L,N);for(const D in C){if(Js(D))continue;const G=C[D],V=b[D];G!==V&&D!=="value"&&o(_,D,V,G,L,N)}"value"in C&&o(_,"value",b.value,C.value,L)}},I=(_,b,C,N,L,D,G,V,F)=>{const M=b.el=_?_.el:c(""),ee=b.anchor=_?_.anchor:c("");let{patchFlag:W,dynamicChildren:Q,slotScopeIds:se}=b;se&&(V=V?V.concat(se):se),_==null?(s(M,C,N),s(ee,C,N),v(b.children||[],C,ee,L,D,G,V,F)):W>0&&W&64&&Q&&_.dynamicChildren?(E(_.dynamicChildren,Q,C,L,D,G,V),(b.key!=null||L&&b===L.subTree)&&Xh(_,b,!0)):le(_,b,C,ee,L,D,G,V,F)},w=(_,b,C,N,L,D,G,V,F)=>{b.slotScopeIds=V,_==null?b.shapeFlag&512?L.ctx.activate(b,C,N,G,F):Ie(b,C,N,L,D,G,F):xe(_,b,F)},Ie=(_,b,C,N,L,D,G)=>{const V=_.component=im(_,N,L);if(Ur(_)&&(V.ctx.renderer=Y),om(V,!1,G),V.asyncDep){if(L&&L.registerDep(V,Re,G),!_.el){const F=V.subTree=Me(et);q(null,F,b,C)}}else Re(V,_,b,C,L,D,G)},xe=(_,b,C)=>{const N=b.component=_.component;if(Kg(_,b,C))if(N.asyncDep&&!N.asyncResolved){ce(N,b,C);return}else N.next=b,N.update();else b.el=_.el,N.vnode=b},Re=(_,b,C,N,L,D,G)=>{const V=()=>{if(_.isMounted){let{next:W,bu:Q,u:se,parent:te,vnode:oe}=_;{const We=Yh(_);if(We){W&&(W.el=oe.el,ce(_,W,G)),We.asyncDep.then(()=>{_.isUnmounted||V()});return}}let ue=W,Fe;Fn(_,!1),W?(W.el=oe.el,ce(_,W,G)):W=oe,Q&&tr(Q),(Fe=W.props&&W.props.onVnodeBeforeUpdate)&&Lt(Fe,te,W,oe),Fn(_,!0);const je=lc(_),dt=_.subTree;_.subTree=je,U(dt,je,g(dt.el),O(dt),_,L,D),W.el=je.el,ue===null&&qg(_,je.el),se&&ct(se,L),(Fe=W.props&&W.props.onVnodeUpdated)&&ct(()=>Lt(Fe,te,W,oe),L)}else{let W;const{el:Q,props:se}=b,{bm:te,m:oe,parent:ue,root:Fe,type:je}=_,dt=ei(b);Fn(_,!1),te&&tr(te),!dt&&(W=se&&se.onVnodeBeforeMount)&&Lt(W,ue,b),Fn(_,!0);{Fe.ce&&Fe.ce._def.shadowRoot!==!1&&Fe.ce._injectChildStyle(je);const We=_.subTree=lc(_);U(null,We,C,N,_,L,D),b.el=We.el}if(oe&&ct(oe,L),!dt&&(W=se&&se.onVnodeMounted)){const We=b;ct(()=>Lt(W,ue,We),L)}(b.shapeFlag&256||ue&&ei(ue.vnode)&&ue.vnode.shapeFlag&256)&&_.a&&ct(_.a,L),_.isMounted=!0,b=C=N=null}};_.scope.on();const F=_.effect=new rh(V);_.scope.off();const M=_.update=F.run.bind(F),ee=_.job=F.runIfDirty.bind(F);ee.i=_,ee.id=_.uid,F.scheduler=()=>Ca(ee),Fn(_,!0),M()},ce=(_,b,C)=>{b.component=_;const N=_.vnode.props;_.vnode=b,_.next=null,Og(_,b.props,N,C),Lg(_,b.children,C),sn(),Zl(_),rn()},le=(_,b,C,N,L,D,G,V,F=!1)=>{const M=_&&_.children,ee=_?_.shapeFlag:0,W=b.children,{patchFlag:Q,shapeFlag:se}=b;if(Q>0){if(Q&128){wt(M,W,C,N,L,D,G,V,F);return}else if(Q&256){lt(M,W,C,N,L,D,G,V,F);return}}se&8?(ee&16&&nt(M,L,D),W!==M&&d(C,W)):ee&16?se&16?wt(M,W,C,N,L,D,G,V,F):nt(M,L,D,!0):(ee&8&&d(C,""),se&16&&v(W,C,N,L,D,G,V,F))},lt=(_,b,C,N,L,D,G,V,F)=>{_=_||ms,b=b||ms;const M=_.length,ee=b.length,W=Math.min(M,ee);let Q;for(Q=0;Q<W;Q++){const se=b[Q]=F?wn(b[Q]):Ft(b[Q]);U(_[Q],se,C,null,L,D,G,V,F)}M>ee?nt(_,L,D,!0,!1,W):v(b,C,N,L,D,G,V,F,W)},wt=(_,b,C,N,L,D,G,V,F)=>{let M=0;const ee=b.length;let W=_.length-1,Q=ee-1;for(;M<=W&&M<=Q;){const se=_[M],te=b[M]=F?wn(b[M]):Ft(b[M]);if(Hn(se,te))U(se,te,C,null,L,D,G,V,F);else break;M++}for(;M<=W&&M<=Q;){const se=_[W],te=b[Q]=F?wn(b[Q]):Ft(b[Q]);if(Hn(se,te))U(se,te,C,null,L,D,G,V,F);else break;W--,Q--}if(M>W){if(M<=Q){const se=Q+1,te=se<ee?b[se].el:N;for(;M<=Q;)U(null,b[M]=F?wn(b[M]):Ft(b[M]),C,te,L,D,G,V,F),M++}}else if(M>Q)for(;M<=W;)ke(_[M],L,D,!0),M++;else{const se=M,te=M,oe=new Map;for(M=te;M<=Q;M++){const Ve=b[M]=F?wn(b[M]):Ft(b[M]);Ve.key!=null&&oe.set(Ve.key,M)}let ue,Fe=0;const je=Q-te+1;let dt=!1,We=0;const hn=new Array(je);for(M=0;M<je;M++)hn[M]=0;for(M=se;M<=W;M++){const Ve=_[M];if(Fe>=je){ke(Ve,L,D,!0);continue}let pt;if(Ve.key!=null)pt=oe.get(Ve.key);else for(ue=te;ue<=Q;ue++)if(hn[ue-te]===0&&Hn(Ve,b[ue])){pt=ue;break}pt===void 0?ke(Ve,L,D,!0):(hn[pt-te]=M+1,pt>=We?We=pt:dt=!0,U(Ve,b[pt],C,null,L,D,G,V,F),Fe++)}const Ns=dt?jg(hn):ms;for(ue=Ns.length-1,M=je-1;M>=0;M--){const Ve=te+M,pt=b[Ve],Li=Ve+1<ee?b[Ve+1].el:N;hn[M]===0?U(null,pt,C,Li,L,D,G,V,F):dt&&(ue<0||M!==Ns[ue]?ft(pt,C,Li,2):ue--)}}},ft=(_,b,C,N,L=null)=>{const{el:D,type:G,transition:V,children:F,shapeFlag:M}=_;if(M&6){ft(_.component.subTree,b,C,N);return}if(M&128){_.suspense.move(b,C,N);return}if(M&64){G.move(_,b,C,Y);return}if(G===Ze){s(D,b,C);for(let W=0;W<F.length;W++)ft(F[W],b,C,N);s(_.anchor,b,C);return}if(G===sr){H(_,b,C);return}if(N!==2&&M&1&&V)if(N===0)V.beforeEnter(D),s(D,b,C),ct(()=>V.enter(D),L);else{const{leave:W,delayLeave:Q,afterLeave:se}=V,te=()=>{_.ctx.isUnmounted?i(D):s(D,b,C)},oe=()=>{W(D,()=>{te(),se&&se()})};Q?Q(D,te,oe):oe()}else s(D,b,C)},ke=(_,b,C,N=!1,L=!1)=>{const{type:D,props:G,ref:V,children:F,dynamicChildren:M,shapeFlag:ee,patchFlag:W,dirs:Q,cacheIndex:se}=_;if(W===-2&&(L=!1),V!=null&&(sn(),Zs(V,null,C,_,!0),rn()),se!=null&&(b.renderCache[se]=void 0),ee&256){b.ctx.deactivate(_);return}const te=ee&1&&Q,oe=!ei(_);let ue;if(oe&&(ue=G&&G.onVnodeBeforeUnmount)&&Lt(ue,b,_),ee&6)xt(_.component,C,N);else{if(ee&128){_.suspense.unmount(C,N);return}te&&Un(_,null,b,"beforeUnmount"),ee&64?_.type.remove(_,b,C,Y,N):M&&!M.hasOnce&&(D!==Ze||W>0&&W&64)?nt(M,b,C,!1,!0):(D===Ze&&W&384||!L&&ee&16)&&nt(F,b,C),N&&Pe(_)}(oe&&(ue=G&&G.onVnodeUnmounted)||te)&&ct(()=>{ue&&Lt(ue,b,_),te&&Un(_,null,b,"unmounted")},C)},Pe=_=>{const{type:b,el:C,anchor:N,transition:L}=_;if(b===Ze){un(C,N);return}if(b===sr){B(_);return}const D=()=>{i(C),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(_.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:V}=L,F=()=>G(C,D);V?V(_.el,D,F):F()}else D()},un=(_,b)=>{let C;for(;_!==b;)C=y(_),i(_),_=C;i(b)},xt=(_,b,C)=>{const{bum:N,scope:L,job:D,subTree:G,um:V,m:F,a:M,parent:ee,slots:{__:W}}=_;ac(F),ac(M),N&&tr(N),ee&&ne(W)&&W.forEach(Q=>{ee.renderCache[Q]=void 0}),L.stop(),D&&(D.flags|=8,ke(G,_,b,C)),V&&ct(V,b),ct(()=>{_.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},nt=(_,b,C,N=!1,L=!1,D=0)=>{for(let G=D;G<_.length;G++)ke(_[G],b,C,N,L)},O=_=>{if(_.shapeFlag&6)return O(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const b=y(_.anchor||_.el),C=b&&b[ag];return C?y(C):b};let X=!1;const K=(_,b,C)=>{_==null?b._vnode&&ke(b._vnode,null,null,!0):U(b._vnode||null,_,b,null,null,null,C),b._vnode=_,X||(X=!0,Zl(),Sh(),X=!1)},Y={p:U,um:ke,m:ft,r:Pe,mt:Ie,mc:v,pc:le,pbc:E,n:O,o:t};return{render:K,hydrate:void 0,createApp:kg(K)}}function Io({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Fn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Fg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Xh(t,e,n=!1){const s=t.children,i=e.children;if(ne(s)&&ne(i))for(let o=0;o<s.length;o++){const a=s[o];let c=i[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[o]=wn(i[o]),c.el=a.el),!n&&c.patchFlag!==-2&&Xh(a,c)),c.type===$r&&(c.el=a.el),c.type===et&&!c.el&&(c.el=a.el)}}function jg(t){const e=t.slice(),n=[0];let s,i,o,a,c;const u=t.length;for(s=0;s<u;s++){const f=t[s];if(f!==0){if(i=n[n.length-1],t[i]<f){e[s]=i,n.push(s);continue}for(o=0,a=n.length-1;o<a;)c=o+a>>1,t[n[c]]<f?o=c+1:a=c;f<t[n[o]]&&(o>0&&(e[s]=n[o-1]),n[o]=s)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function Yh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yh(e)}function ac(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Vg=Symbol.for("v-scx"),$g=()=>Ct(Vg);function ni(t,e,n){return Qh(t,e,n)}function Qh(t,e,n=Te){const{immediate:s,deep:i,flush:o,once:a}=n,c=Ue({},n),u=e&&s||!e&&o!=="post";let f;if(yi){if(o==="sync"){const T=$g();f=T.__watcherHandles||(T.__watcherHandles=[])}else if(!u){const T=()=>{};return T.stop=$t,T.resume=$t,T.pause=$t,T}}const d=He;c.call=(T,P,U)=>Pt(T,d,P,U);let g=!1;o==="post"?c.scheduler=T=>{ct(T,d&&d.suspense)}:o!=="sync"&&(g=!0,c.scheduler=(T,P)=>{P?T():Ca(T)}),c.augmentJob=T=>{e&&(T.flags|=4),g&&(T.flags|=2,d&&(T.id=d.uid,T.i=d))};const y=ng(t,e,c);return yi&&(f?f.push(y):u&&y()),y}function Bg(t,e,n){const s=this.proxy,i=Ne(t)?t.includes(".")?Zh(s,t):()=>s[t]:t.bind(s,s);let o;re(e)?o=e:(o=e.handler,n=e);const a=Ai(this),c=Qh(i,o.bind(s),n);return a(),c}function Zh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Hg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${_t(e)}Modifiers`]||t[`${Nn(e)}Modifiers`];function Wg(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Te;let i=n;const o=e.startsWith("update:"),a=o&&Hg(s,e.slice(7));a&&(a.trim&&(i=n.map(d=>Ne(d)?d.trim():d)),a.number&&(i=n.map(Bo)));let c,u=s[c=go(e)]||s[c=go(_t(e))];!u&&o&&(u=s[c=go(Nn(e))]),u&&Pt(u,t,6,i);const f=s[c+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Pt(f,t,6,i)}}function ef(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const o=t.emits;let a={},c=!1;if(!re(t)){const u=f=>{const d=ef(f,e,!0);d&&(c=!0,Ue(a,d))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!o&&!c?(Ce(t)&&s.set(t,null),null):(ne(o)?o.forEach(u=>a[u]=null):Ue(a,o),Ce(t)&&s.set(t,a),a)}function Vr(t,e){return!t||!kr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ye(t,e[0].toLowerCase()+e.slice(1))||ye(t,Nn(e))||ye(t,e))}function lc(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:f,renderCache:d,props:g,data:y,setupState:T,ctx:P,inheritAttrs:U}=t,z=pr(t);let q,j;try{if(n.shapeFlag&4){const B=i||s,Z=B;q=Ft(f.call(Z,B,d,g,T,y,P)),j=c}else{const B=e;q=Ft(B.length>1?B(g,{attrs:c,slots:a,emit:u}):B(g,null)),j=e.props?c:Gg(c)}}catch(B){si.length=0,Mr(B,t,1),q=Me(et)}let H=q;if(j&&U!==!1){const B=Object.keys(j),{shapeFlag:Z}=H;B.length&&Z&7&&(o&&B.some(ma)&&(j=zg(j,o)),H=kn(H,j,!1,!0))}return n.dirs&&(H=kn(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&mi(H,n.transition),q=H,pr(z),q}const Gg=t=>{let e;for(const n in t)(n==="class"||n==="style"||kr(n))&&((e||(e={}))[n]=t[n]);return e},zg=(t,e)=>{const n={};for(const s in t)(!ma(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Kg(t,e,n){const{props:s,children:i,component:o}=t,{props:a,children:c,patchFlag:u}=e,f=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?cc(s,a,f):!!a;if(u&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const y=d[g];if(a[y]!==s[y]&&!Vr(f,y))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:s===a?!1:s?a?cc(s,a,f):!0:!!a;return!1}function cc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const o=s[i];if(e[o]!==t[o]&&!Vr(n,o))return!0}return!1}function qg({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const tf=t=>t.__isSuspense;function Jg(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):rg(t)}const Ze=Symbol.for("v-fgt"),$r=Symbol.for("v-txt"),et=Symbol.for("v-cmt"),sr=Symbol.for("v-stc"),si=[];let ut=null;function _e(t=!1){si.push(ut=t?null:[])}function Xg(){si.pop(),ut=si[si.length-1]||null}let vi=1;function uc(t,e=!1){vi+=t,t<0&&ut&&e&&(ut.hasOnce=!0)}function nf(t){return t.dynamicChildren=vi>0?ut||ms:null,Xg(),vi>0&&ut&&ut.push(t),t}function be(t,e,n,s,i,o){return nf(x(t,e,n,s,i,o,!0))}function Yg(t,e,n,s,i){return nf(Me(t,e,n,s,i,!0))}function mr(t){return t?t.__v_isVNode===!0:!1}function Hn(t,e){return t.type===e.type&&t.key===e.key}const sf=({key:t})=>t??null,ir=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ne(t)||qe(t)||re(t)?{i:ot,r:t,k:e,f:!!n}:t:null);function x(t,e=null,n=null,s=0,i=null,o=t===Ze?0:1,a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sf(e),ref:e&&ir(e),scopeId:Ch,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ot};return c?(Da(u,n),o&128&&t.normalize(u)):n&&(u.shapeFlag|=Ne(n)?8:16),vi>0&&!a&&ut&&(u.patchFlag>0||o&6)&&u.patchFlag!==32&&ut.push(u),u}const Me=Qg;function Qg(t,e=null,n=null,s=0,i=null,o=!1){if((!t||t===wg)&&(t=et),mr(t)){const c=kn(t,e,!0);return n&&Da(c,n),vi>0&&!o&&ut&&(c.shapeFlag&6?ut[ut.indexOf(t)]=c:ut.push(c)),c.patchFlag=-2,c}if(hm(t)&&(t=t.__vccOpts),e){e=Zg(e);let{class:c,style:u}=e;c&&!Ne(c)&&(e.class=fi(c)),Ce(u)&&(Aa(u)&&!ne(u)&&(u=Ue({},u)),e.style=_a(u))}const a=Ne(t)?1:tf(t)?128:Rh(t)?64:Ce(t)?4:re(t)?2:0;return x(t,e,n,s,i,a,o,!0)}function Zg(t){return t?Aa(t)||Wh(t)?Ue({},t):t:null}function kn(t,e,n=!1,s=!1){const{props:i,ref:o,patchFlag:a,children:c,transition:u}=t,f=e?tm(i||{},e):i,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&sf(f),ref:e&&e.ref?n&&o?ne(o)?o.concat(ir(e)):[o,ir(e)]:ir(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ze?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kn(t.ssContent),ssFallback:t.ssFallback&&kn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&s&&mi(d,u.clone(d)),d}function Xn(t=" ",e=0){return Me($r,null,t,e)}function em(t,e){const n=Me(sr,null,t);return n.staticCount=e,n}function Wn(t="",e=!1){return e?(_e(),Yg(et,null,t)):Me(et,null,t)}function Ft(t){return t==null||typeof t=="boolean"?Me(et):ne(t)?Me(Ze,null,t.slice()):mr(t)?wn(t):Me($r,null,String(t))}function wn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:kn(t)}function Da(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Da(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Wh(e)?e._ctx=ot:i===3&&ot&&(ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:ot},n=32):(e=String(e),s&64?(n=16,e=[Xn(e)]):n=8);t.children=e,t.shapeFlag|=n}function tm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=fi([e.class,s.class]));else if(i==="style")e.style=_a([e.style,s.style]);else if(kr(i)){const o=e[i],a=s[i];a&&o!==a&&!(ne(o)&&o.includes(a))&&(e[i]=o?[].concat(o,a):a)}else i!==""&&(e[i]=s[i])}return e}function Lt(t,e,n,s=null){Pt(t,e,7,[n,s])}const nm=$h();let sm=0;function im(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||nm,o={uid:sm++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new kp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zh(s,i),emitsOptions:ef(s,i),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:s.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Wg.bind(null,o),t.ce&&t.ce(o),o}let He=null;const rm=()=>He||ot;let vr,Zo;{const t=Dr(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),o=>{i.length>1?i.forEach(a=>a(o)):i[0](o)}};vr=e("__VUE_INSTANCE_SETTERS__",n=>He=n),Zo=e("__VUE_SSR_SETTERS__",n=>yi=n)}const Ai=t=>{const e=He;return vr(t),t.scope.on(),()=>{t.scope.off(),vr(e)}},hc=()=>{He&&He.scope.off(),vr(null)};function rf(t){return t.vnode.shapeFlag&4}let yi=!1;function om(t,e=!1,n=!1){e&&Zo(e);const{props:s,children:i}=t.vnode,o=rf(t);Pg(t,s,o,e),xg(t,i,n||e);const a=o?am(t,e):void 0;return e&&Zo(!1),a}function am(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ig);const{setup:s}=n;if(s){sn();const i=t.setupContext=s.length>1?cm(t):null,o=Ai(t),a=Si(s,t,0,[t.props,i]),c=Zu(a);if(rn(),o(),(c||t.sp)&&!ei(t)&&xh(t),c){if(a.then(hc,hc),e)return a.then(u=>{fc(t,u)}).catch(u=>{Mr(u,t,0)});t.asyncDep=a}else fc(t,a)}else of(t)}function fc(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=Ih(e)),of(t)}function of(t,e,n){const s=t.type;t.render||(t.render=s.render||$t);{const i=Ai(t);sn();try{Eg(t)}finally{rn(),i()}}}const lm={get(t,e){return Ke(t,"get",""),t[e]}};function cm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,lm),slots:t.slots,emit:t.emit,expose:e}}function Br(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ih(Jp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ti)return ti[n](t)},has(e,n){return n in e||n in ti}})):t.proxy}function um(t,e=!0){return re(t)?t.displayName||t.name:t.name||e&&t.__name}function hm(t){return re(t)&&"__vccOpts"in t}const it=(t,e)=>eg(t,e,yi);function xa(t,e,n){const s=arguments.length;return s===2?Ce(e)&&!ne(e)?mr(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&mr(n)&&(n=[n]),Me(t,e,n))}const fm="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ea;const dc=typeof window<"u"&&window.trustedTypes;if(dc)try{ea=dc.createPolicy("vue",{createHTML:t=>t})}catch{}const af=ea?t=>ea.createHTML(t):t=>t,dm="http://www.w3.org/2000/svg",pm="http://www.w3.org/1998/Math/MathML",Xt=typeof document<"u"?document:null,pc=Xt&&Xt.createElement("template"),gm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Xt.createElementNS(dm,t):e==="mathml"?Xt.createElementNS(pm,t):n?Xt.createElement(t,{is:n}):Xt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Xt.createTextNode(t),createComment:t=>Xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,o){const a=n?n.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{pc.innerHTML=af(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const c=pc.content;if(s==="svg"||s==="mathml"){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},gn="transition",zs="animation",_i=Symbol("_vtc"),lf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},mm=Ue({},kh,lf),vm=t=>(t.displayName="Transition",t.props=mm,t),ym=vm((t,{slots:e})=>xa(ug,_m(t),e)),jn=(t,e=[])=>{ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},gc=t=>t?ne(t)?t.some(e=>e.length>1):t.length>1:!1;function _m(t){const e={};for(const I in t)I in lf||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:f=a,appearToClass:d=c,leaveFromClass:g=`${n}-leave-from`,leaveActiveClass:y=`${n}-leave-active`,leaveToClass:T=`${n}-leave-to`}=t,P=wm(i),U=P&&P[0],z=P&&P[1],{onBeforeEnter:q,onEnter:j,onEnterCancelled:H,onLeave:B,onLeaveCancelled:Z,onBeforeAppear:J=q,onAppear:S=j,onAppearCancelled:v=H}=e,m=(I,w,Ie,xe)=>{I._enterCancelled=xe,Vn(I,w?d:c),Vn(I,w?f:a),Ie&&Ie()},E=(I,w)=>{I._isLeaving=!1,Vn(I,g),Vn(I,T),Vn(I,y),w&&w()},A=I=>(w,Ie)=>{const xe=I?S:j,Re=()=>m(w,I,Ie);jn(xe,[w,Re]),mc(()=>{Vn(w,I?u:o),qt(w,I?d:c),gc(xe)||vc(w,s,U,Re)})};return Ue(e,{onBeforeEnter(I){jn(q,[I]),qt(I,o),qt(I,a)},onBeforeAppear(I){jn(J,[I]),qt(I,u),qt(I,f)},onEnter:A(!1),onAppear:A(!0),onLeave(I,w){I._isLeaving=!0;const Ie=()=>E(I,w);qt(I,g),I._enterCancelled?(qt(I,y),wc()):(wc(),qt(I,y)),mc(()=>{I._isLeaving&&(Vn(I,g),qt(I,T),gc(B)||vc(I,s,z,Ie))}),jn(B,[I,Ie])},onEnterCancelled(I){m(I,!1,void 0,!0),jn(H,[I])},onAppearCancelled(I){m(I,!0,void 0,!0),jn(v,[I])},onLeaveCancelled(I){E(I),jn(Z,[I])}})}function wm(t){if(t==null)return null;if(Ce(t))return[Eo(t.enter),Eo(t.leave)];{const e=Eo(t);return[e,e]}}function Eo(t){return Ip(t)}function qt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[_i]||(t[_i]=new Set)).add(e)}function Vn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[_i];n&&(n.delete(e),n.size||(t[_i]=void 0))}function mc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let bm=0;function vc(t,e,n,s){const i=t._endId=++bm,o=()=>{i===t._endId&&s()};if(n!=null)return setTimeout(o,n);const{type:a,timeout:c,propCount:u}=Im(t,e);if(!a)return s();const f=a+"end";let d=0;const g=()=>{t.removeEventListener(f,y),o()},y=T=>{T.target===t&&++d>=u&&g()};setTimeout(()=>{d<u&&g()},c+1),t.addEventListener(f,y)}function Im(t,e){const n=window.getComputedStyle(t),s=P=>(n[P]||"").split(", "),i=s(`${gn}Delay`),o=s(`${gn}Duration`),a=yc(i,o),c=s(`${zs}Delay`),u=s(`${zs}Duration`),f=yc(c,u);let d=null,g=0,y=0;e===gn?a>0&&(d=gn,g=a,y=o.length):e===zs?f>0&&(d=zs,g=f,y=u.length):(g=Math.max(a,f),d=g>0?a>f?gn:zs:null,y=d?d===gn?o.length:u.length:0);const T=d===gn&&/\b(transform|all)(,|$)/.test(s(`${gn}Property`).toString());return{type:d,timeout:g,propCount:y,hasTransform:T}}function yc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>_c(n)+_c(t[s])))}function _c(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function wc(){return document.body.offsetHeight}function Em(t,e,n){const s=t[_i];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const bc=Symbol("_vod"),Tm=Symbol("_vsh"),Sm=Symbol(""),Am=/(^|;)\s*display\s*:/;function Cm(t,e,n){const s=t.style,i=Ne(n);let o=!1;if(n&&!i){if(e)if(Ne(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&rr(s,c,"")}else for(const a in e)n[a]==null&&rr(s,a,"");for(const a in n)a==="display"&&(o=!0),rr(s,a,n[a])}else if(i){if(e!==n){const a=s[Sm];a&&(n+=";"+a),s.cssText=n,o=Am.test(n)}}else e&&t.removeAttribute("style");bc in t&&(t[bc]=o?s.display:"",t[Tm]&&(s.display="none"))}const Ic=/\s*!important$/;function rr(t,e,n){if(ne(n))n.forEach(s=>rr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Rm(t,e);Ic.test(n)?t.setProperty(Nn(s),n.replace(Ic,""),"important"):t[s]=n}}const Ec=["Webkit","Moz","ms"],To={};function Rm(t,e){const n=To[e];if(n)return n;let s=_t(e);if(s!=="filter"&&s in t)return To[e]=s;s=Nr(s);for(let i=0;i<Ec.length;i++){const o=Ec[i]+s;if(o in t)return To[e]=o}return e}const Tc="http://www.w3.org/1999/xlink";function Sc(t,e,n,s,i,o=Rp(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Tc,e.slice(6,e.length)):t.setAttributeNS(Tc,e,n):n==null||o&&!nh(n)?t.removeAttribute(e):t.setAttribute(e,o?"":On(n)?String(n):n)}function Ac(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?af(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=nh(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(i||e)}function ps(t,e,n,s){t.addEventListener(e,n,s)}function km(t,e,n,s){t.removeEventListener(e,n,s)}const Cc=Symbol("_vei");function Pm(t,e,n,s,i=null){const o=t[Cc]||(t[Cc]={}),a=o[e];if(s&&a)a.value=s;else{const[c,u]=Om(e);if(s){const f=o[e]=xm(s,i);ps(t,c,f,u)}else a&&(km(t,c,a,u),o[e]=void 0)}}const Rc=/(?:Once|Passive|Capture)$/;function Om(t){let e;if(Rc.test(t)){e={};let s;for(;s=t.match(Rc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Nn(t.slice(2)),e]}let So=0;const Nm=Promise.resolve(),Dm=()=>So||(Nm.then(()=>So=0),So=Date.now());function xm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Pt(Lm(s,n.value),e,5,[s])};return n.value=t,n.attached=Dm(),n}function Lm(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const kc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Mm=(t,e,n,s,i,o)=>{const a=i==="svg";e==="class"?Em(t,s,a):e==="style"?Cm(t,n,s):kr(e)?ma(e)||Pm(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Um(t,e,s,a))?(Ac(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Sc(t,e,s,a,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ne(s))?Ac(t,_t(e),s,o,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Sc(t,e,s,a))};function Um(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&kc(e)&&re(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return kc(e)&&Ne(n)?!1:e in t}const Pc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>tr(e,n):e};function Fm(t){t.target.composing=!0}function Oc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ao=Symbol("_assign"),jm={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Ao]=Pc(i);const o=s||i.props&&i.props.type==="number";ps(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),o&&(c=Bo(c)),t[Ao](c)}),n&&ps(t,"change",()=>{t.value=t.value.trim()}),e||(ps(t,"compositionstart",Fm),ps(t,"compositionend",Oc),ps(t,"change",Oc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:o}},a){if(t[Ao]=Pc(a),t.composing)return;const c=(o||t.type==="number")&&!/^0\d/.test(t.value)?Bo(t.value):t.value,u=e??"";c!==u&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===u)||(t.value=u))}},Vm=["ctrl","shift","alt","meta"],$m={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Vm.some(n=>t[`${n}Key`]&&!e.includes(n))},Bm=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...o)=>{for(let a=0;a<e.length;a++){const c=$m[e[a]];if(c&&c(i,e))return}return t(i,...o)})},Hm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Nc=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const o=Nn(i.key);if(e.some(a=>a===o||Hm[a]===o))return t(i)})},Wm=Ue({patchProp:Mm},gm);let Dc;function Gm(){return Dc||(Dc=Mg(Wm))}const zm=(...t)=>{const e=Gm().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=qm(s);if(!i)return;const o=e._component;!re(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=n(i,!1,Km(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},e};function Km(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qm(t){return Ne(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const gs=typeof document<"u";function cf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Jm(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&cf(t.default)}const ve=Object.assign;function Co(t,e){const n={};for(const s in e){const i=e[s];n[s]=Ot(i)?i.map(t):t(i)}return n}const ii=()=>{},Ot=Array.isArray,uf=/#/g,Xm=/&/g,Ym=/\//g,Qm=/=/g,Zm=/\?/g,hf=/\+/g,ev=/%5B/g,tv=/%5D/g,ff=/%5E/g,nv=/%60/g,df=/%7B/g,sv=/%7C/g,pf=/%7D/g,iv=/%20/g;function La(t){return encodeURI(""+t).replace(sv,"|").replace(ev,"[").replace(tv,"]")}function rv(t){return La(t).replace(df,"{").replace(pf,"}").replace(ff,"^")}function ta(t){return La(t).replace(hf,"%2B").replace(iv,"+").replace(uf,"%23").replace(Xm,"%26").replace(nv,"`").replace(df,"{").replace(pf,"}").replace(ff,"^")}function ov(t){return ta(t).replace(Qm,"%3D")}function av(t){return La(t).replace(uf,"%23").replace(Zm,"%3F")}function lv(t){return t==null?"":av(t).replace(Ym,"%2F")}function wi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const cv=/\/$/,uv=t=>t.replace(cv,"");function Ro(t,e,n="/"){let s,i={},o="",a="";const c=e.indexOf("#");let u=e.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(s=e.slice(0,u),o=e.slice(u+1,c>-1?c:e.length),i=t(o)),c>-1&&(s=s||e.slice(0,c),a=e.slice(c,e.length)),s=pv(s??e,n),{fullPath:s+(o&&"?")+o+a,path:s,query:i,hash:wi(a)}}function hv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function xc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function fv(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Ss(e.matched[s],n.matched[i])&&gf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function gf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!dv(t[n],e[n]))return!1;return!0}function dv(t,e){return Ot(t)?Lc(t,e):Ot(e)?Lc(e,t):t===e}function Lc(t,e){return Ot(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function pv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let o=n.length-1,a,c;for(a=0;a<s.length;a++)if(c=s[a],c!==".")if(c==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(a).join("/")}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var bi;(function(t){t.pop="pop",t.push="push"})(bi||(bi={}));var ri;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ri||(ri={}));function gv(t){if(!t)if(gs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),uv(t)}const mv=/^[^#]+#/;function vv(t,e){return t.replace(mv,"#")+e}function yv(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Hr=()=>({left:window.scrollX,top:window.scrollY});function _v(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=yv(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Mc(t,e){return(history.state?history.state.position-e:-1)+t}const na=new Map;function wv(t,e){na.set(t,e)}function bv(t){const e=na.get(t);return na.delete(t),e}let Iv=()=>location.protocol+"//"+location.host;function mf(t,e){const{pathname:n,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){let c=i.includes(t.slice(o))?t.slice(o).length:1,u=i.slice(c);return u[0]!=="/"&&(u="/"+u),xc(u,"")}return xc(n,t)+s+i}function Ev(t,e,n,s){let i=[],o=[],a=null;const c=({state:y})=>{const T=mf(t,location),P=n.value,U=e.value;let z=0;if(y){if(n.value=T,e.value=y,a&&a===P){a=null;return}z=U?y.position-U.position:0}else s(T);i.forEach(q=>{q(n.value,P,{delta:z,type:bi.pop,direction:z?z>0?ri.forward:ri.back:ri.unknown})})};function u(){a=n.value}function f(y){i.push(y);const T=()=>{const P=i.indexOf(y);P>-1&&i.splice(P,1)};return o.push(T),T}function d(){const{history:y}=window;y.state&&y.replaceState(ve({},y.state,{scroll:Hr()}),"")}function g(){for(const y of o)y();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:u,listen:f,destroy:g}}function Uc(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Hr():null}}function Tv(t){const{history:e,location:n}=window,s={value:mf(t,n)},i={value:e.state};i.value||o(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(u,f,d){const g=t.indexOf("#"),y=g>-1?(n.host&&document.querySelector("base")?t:t.slice(g))+u:Iv()+t+u;try{e[d?"replaceState":"pushState"](f,"",y),i.value=f}catch(T){console.error(T),n[d?"replace":"assign"](y)}}function a(u,f){const d=ve({},e.state,Uc(i.value.back,u,i.value.forward,!0),f,{position:i.value.position});o(u,d,!0),s.value=u}function c(u,f){const d=ve({},i.value,e.state,{forward:u,scroll:Hr()});o(d.current,d,!0);const g=ve({},Uc(s.value,u,null),{position:d.position+1},f);o(u,g,!1),s.value=u}return{location:s,state:i,push:c,replace:a}}function Sv(t){t=gv(t);const e=Tv(t),n=Ev(t,e.state,e.location,e.replace);function s(o,a=!0){a||n.pauseListeners(),history.go(o)}const i=ve({location:"",base:t,go:s,createHref:vv.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Av(t){return typeof t=="string"||t&&typeof t=="object"}function vf(t){return typeof t=="string"||typeof t=="symbol"}const yf=Symbol("");var Fc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Fc||(Fc={}));function As(t,e){return ve(new Error,{type:t,[yf]:!0},e)}function Jt(t,e){return t instanceof Error&&yf in t&&(e==null||!!(t.type&e))}const jc="[^/]+?",Cv={sensitive:!1,strict:!1,start:!0,end:!0},Rv=/[.+*?^${}()[\]/\\]/g;function kv(t,e){const n=ve({},Cv,e),s=[];let i=n.start?"^":"";const o=[];for(const f of t){const d=f.length?[]:[90];n.strict&&!f.length&&(i+="/");for(let g=0;g<f.length;g++){const y=f[g];let T=40+(n.sensitive?.25:0);if(y.type===0)g||(i+="/"),i+=y.value.replace(Rv,"\\$&"),T+=40;else if(y.type===1){const{value:P,repeatable:U,optional:z,regexp:q}=y;o.push({name:P,repeatable:U,optional:z});const j=q||jc;if(j!==jc){T+=10;try{new RegExp(`(${j})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${P}" (${j}): `+B.message)}}let H=U?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;g||(H=z&&f.length<2?`(?:/${H})`:"/"+H),z&&(H+="?"),i+=H,T+=20,z&&(T+=-8),U&&(T+=-20),j===".*"&&(T+=-50)}d.push(T)}s.push(d)}if(n.strict&&n.end){const f=s.length-1;s[f][s[f].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function c(f){const d=f.match(a),g={};if(!d)return null;for(let y=1;y<d.length;y++){const T=d[y]||"",P=o[y-1];g[P.name]=T&&P.repeatable?T.split("/"):T}return g}function u(f){let d="",g=!1;for(const y of t){(!g||!d.endsWith("/"))&&(d+="/"),g=!1;for(const T of y)if(T.type===0)d+=T.value;else if(T.type===1){const{value:P,repeatable:U,optional:z}=T,q=P in f?f[P]:"";if(Ot(q)&&!U)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const j=Ot(q)?q.join("/"):q;if(!j)if(z)y.length<2&&(d.endsWith("/")?d=d.slice(0,-1):g=!0);else throw new Error(`Missing required param "${P}"`);d+=j}}return d||"/"}return{re:a,score:s,keys:o,parse:c,stringify:u}}function Pv(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function _f(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const o=Pv(s[n],i[n]);if(o)return o;n++}if(Math.abs(i.length-s.length)===1){if(Vc(s))return 1;if(Vc(i))return-1}return i.length-s.length}function Vc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ov={type:0,value:""},Nv=/[a-zA-Z0-9_]/;function Dv(t){if(!t)return[[]];if(t==="/")return[[Ov]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(T){throw new Error(`ERR (${n})/"${f}": ${T}`)}let n=0,s=n;const i=[];let o;function a(){o&&i.push(o),o=[]}let c=0,u,f="",d="";function g(){f&&(n===0?o.push({type:0,value:f}):n===1||n===2||n===3?(o.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),f="")}function y(){f+=u}for(;c<t.length;){if(u=t[c++],u==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:u==="/"?(f&&g(),a()):u===":"?(g(),n=1):y();break;case 4:y(),n=s;break;case 1:u==="("?n=2:Nv.test(u)?y():(g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:n=3:d+=u;break;case 3:g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),g(),a(),i}function xv(t,e,n){const s=kv(Dv(t.path),n),i=ve(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Lv(t,e){const n=[],s=new Map;e=Wc({strict:!1,end:!0,sensitive:!1},e);function i(g){return s.get(g)}function o(g,y,T){const P=!T,U=Bc(g);U.aliasOf=T&&T.record;const z=Wc(e,g),q=[U];if("alias"in g){const B=typeof g.alias=="string"?[g.alias]:g.alias;for(const Z of B)q.push(Bc(ve({},U,{components:T?T.record.components:U.components,path:Z,aliasOf:T?T.record:U})))}let j,H;for(const B of q){const{path:Z}=B;if(y&&Z[0]!=="/"){const J=y.record.path,S=J[J.length-1]==="/"?"":"/";B.path=y.record.path+(Z&&S+Z)}if(j=xv(B,y,z),T?T.alias.push(j):(H=H||j,H!==j&&H.alias.push(j),P&&g.name&&!Hc(j)&&a(g.name)),wf(j)&&u(j),U.children){const J=U.children;for(let S=0;S<J.length;S++)o(J[S],j,T&&T.children[S])}T=T||j}return H?()=>{a(H)}:ii}function a(g){if(vf(g)){const y=s.get(g);y&&(s.delete(g),n.splice(n.indexOf(y),1),y.children.forEach(a),y.alias.forEach(a))}else{const y=n.indexOf(g);y>-1&&(n.splice(y,1),g.record.name&&s.delete(g.record.name),g.children.forEach(a),g.alias.forEach(a))}}function c(){return n}function u(g){const y=Fv(g,n);n.splice(y,0,g),g.record.name&&!Hc(g)&&s.set(g.record.name,g)}function f(g,y){let T,P={},U,z;if("name"in g&&g.name){if(T=s.get(g.name),!T)throw As(1,{location:g});z=T.record.name,P=ve($c(y.params,T.keys.filter(H=>!H.optional).concat(T.parent?T.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),g.params&&$c(g.params,T.keys.map(H=>H.name))),U=T.stringify(P)}else if(g.path!=null)U=g.path,T=n.find(H=>H.re.test(U)),T&&(P=T.parse(U),z=T.record.name);else{if(T=y.name?s.get(y.name):n.find(H=>H.re.test(y.path)),!T)throw As(1,{location:g,currentLocation:y});z=T.record.name,P=ve({},y.params,g.params),U=T.stringify(P)}const q=[];let j=T;for(;j;)q.unshift(j.record),j=j.parent;return{name:z,path:U,params:P,matched:q,meta:Uv(q)}}t.forEach(g=>o(g));function d(){n.length=0,s.clear()}return{addRoute:o,resolve:f,removeRoute:a,clearRoutes:d,getRoutes:c,getRecordMatcher:i}}function $c(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Bc(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Mv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Mv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Hc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Uv(t){return t.reduce((e,n)=>ve(e,n.meta),{})}function Wc(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Fv(t,e){let n=0,s=e.length;for(;n!==s;){const o=n+s>>1;_f(t,e[o])<0?s=o:n=o+1}const i=jv(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function jv(t){let e=t;for(;e=e.parent;)if(wf(e)&&_f(t,e)===0)return e}function wf({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Vv(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const o=s[i].replace(hf," "),a=o.indexOf("="),c=wi(a<0?o:o.slice(0,a)),u=a<0?null:wi(o.slice(a+1));if(c in e){let f=e[c];Ot(f)||(f=e[c]=[f]),f.push(u)}else e[c]=u}return e}function Gc(t){let e="";for(let n in t){const s=t[n];if(n=ov(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ot(s)?s.map(o=>o&&ta(o)):[s&&ta(s)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function $v(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ot(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const bf=Symbol(""),zc=Symbol(""),Wr=Symbol(""),If=Symbol(""),sa=Symbol("");function Ks(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Bv(t,e,n){const s=()=>{t[e].delete(n)};jr(s),Mh(s),Lh(()=>{t[e].add(n)}),t[e].add(n)}function Hv(t){const e=Ct(bf,{}).value;e&&Bv(e,"leaveGuards",t)}function bn(t,e,n,s,i,o=a=>a()){const a=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((c,u)=>{const f=y=>{y===!1?u(As(4,{from:n,to:e})):y instanceof Error?u(y):Av(y)?u(As(2,{from:e,to:y})):(a&&s.enterCallbacks[i]===a&&typeof y=="function"&&a.push(y),c())},d=o(()=>t.call(s&&s.instances[i],e,n,f));let g=Promise.resolve(d);t.length<3&&(g=g.then(f)),g.catch(y=>u(y))})}function ko(t,e,n,s,i=o=>o()){const o=[];for(const a of t)for(const c in a.components){let u=a.components[c];if(!(e!=="beforeRouteEnter"&&!a.instances[c]))if(cf(u)){const d=(u.__vccOpts||u)[e];d&&o.push(bn(d,n,s,a,c,i))}else{let f=u();o.push(()=>f.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${a.path}"`);const g=Jm(d)?d.default:d;a.mods[c]=d,a.components[c]=g;const T=(g.__vccOpts||g)[e];return T&&bn(T,n,s,a,c,i)()}))}}return o}function Kc(t){const e=Ct(Wr),n=Ct(If),s=it(()=>{const u=rt(t.to);return e.resolve(u)}),i=it(()=>{const{matched:u}=s.value,{length:f}=u,d=u[f-1],g=n.matched;if(!d||!g.length)return-1;const y=g.findIndex(Ss.bind(null,d));if(y>-1)return y;const T=qc(u[f-2]);return f>1&&qc(d)===T&&g[g.length-1].path!==T?g.findIndex(Ss.bind(null,u[f-2])):y}),o=it(()=>i.value>-1&&qv(n.params,s.value.params)),a=it(()=>i.value>-1&&i.value===n.matched.length-1&&gf(n.params,s.value.params));function c(u={}){if(Kv(u)){const f=e[rt(t.replace)?"replace":"push"](rt(t.to)).catch(ii);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:s,href:it(()=>s.value.href),isActive:o,isExactActive:a,navigate:c}}function Wv(t){return t.length===1?t[0]:t}const Gv=ka({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Kc,setup(t,{slots:e}){const n=Lr(Kc(t)),{options:s}=Ct(Wr),i=it(()=>({[Jc(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Jc(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&Wv(e.default(n));return t.custom?o:xa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),zv=Gv;function Kv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qv(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Ot(i)||i.length!==s.length||s.some((o,a)=>o!==i[a]))return!1}return!0}function qc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jc=(t,e,n)=>t??e??n,Jv=ka({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ct(sa),i=it(()=>t.route||s.value),o=Ct(zc,0),a=it(()=>{let f=rt(o);const{matched:d}=i.value;let g;for(;(g=d[f])&&!g.components;)f++;return f}),c=it(()=>i.value.matched[a.value]);nr(zc,it(()=>a.value+1)),nr(bf,c),nr(sa,i);const u=Le();return ni(()=>[u.value,c.value,t.name],([f,d,g],[y,T,P])=>{d&&(d.instances[g]=f,T&&T!==d&&f&&f===y&&(d.leaveGuards.size||(d.leaveGuards=T.leaveGuards),d.updateGuards.size||(d.updateGuards=T.updateGuards))),f&&d&&(!T||!Ss(d,T)||!y)&&(d.enterCallbacks[g]||[]).forEach(U=>U(f))},{flush:"post"}),()=>{const f=i.value,d=t.name,g=c.value,y=g&&g.components[d];if(!y)return Xc(n.default,{Component:y,route:f});const T=g.props[d],P=T?T===!0?f.params:typeof T=="function"?T(f):T:null,z=xa(y,ve({},P,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(g.instances[d]=null)},ref:u}));return Xc(n.default,{Component:z,route:f})||z}}});function Xc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Xv=Jv;function Yv(t){const e=Lv(t.routes,t),n=t.parseQuery||Vv,s=t.stringifyQuery||Gc,i=t.history,o=Ks(),a=Ks(),c=Ks(),u=Xp(mn);let f=mn;gs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Co.bind(null,O=>""+O),g=Co.bind(null,lv),y=Co.bind(null,wi);function T(O,X){let K,Y;return vf(O)?(K=e.getRecordMatcher(O),Y=X):Y=O,e.addRoute(Y,K)}function P(O){const X=e.getRecordMatcher(O);X&&e.removeRoute(X)}function U(){return e.getRoutes().map(O=>O.record)}function z(O){return!!e.getRecordMatcher(O)}function q(O,X){if(X=ve({},X||u.value),typeof O=="string"){const C=Ro(n,O,X.path),N=e.resolve({path:C.path},X),L=i.createHref(C.fullPath);return ve(C,N,{params:y(N.params),hash:wi(C.hash),redirectedFrom:void 0,href:L})}let K;if(O.path!=null)K=ve({},O,{path:Ro(n,O.path,X.path).path});else{const C=ve({},O.params);for(const N in C)C[N]==null&&delete C[N];K=ve({},O,{params:g(C)}),X.params=g(X.params)}const Y=e.resolve(K,X),pe=O.hash||"";Y.params=d(y(Y.params));const _=hv(s,ve({},O,{hash:rv(pe),path:Y.path})),b=i.createHref(_);return ve({fullPath:_,hash:pe,query:s===Gc?$v(O.query):O.query||{}},Y,{redirectedFrom:void 0,href:b})}function j(O){return typeof O=="string"?Ro(n,O,u.value.path):ve({},O)}function H(O,X){if(f!==O)return As(8,{from:X,to:O})}function B(O){return S(O)}function Z(O){return B(ve(j(O),{replace:!0}))}function J(O){const X=O.matched[O.matched.length-1];if(X&&X.redirect){const{redirect:K}=X;let Y=typeof K=="function"?K(O):K;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=j(Y):{path:Y},Y.params={}),ve({query:O.query,hash:O.hash,params:Y.path!=null?{}:O.params},Y)}}function S(O,X){const K=f=q(O),Y=u.value,pe=O.state,_=O.force,b=O.replace===!0,C=J(K);if(C)return S(ve(j(C),{state:typeof C=="object"?ve({},pe,C.state):pe,force:_,replace:b}),X||K);const N=K;N.redirectedFrom=X;let L;return!_&&fv(s,Y,K)&&(L=As(16,{to:N,from:Y}),ft(Y,Y,!0,!1)),(L?Promise.resolve(L):E(N,Y)).catch(D=>Jt(D)?Jt(D,2)?D:wt(D):le(D,N,Y)).then(D=>{if(D){if(Jt(D,2))return S(ve({replace:b},j(D.to),{state:typeof D.to=="object"?ve({},pe,D.to.state):pe,force:_}),X||N)}else D=I(N,Y,!0,b,pe);return A(N,Y,D),D})}function v(O,X){const K=H(O,X);return K?Promise.reject(K):Promise.resolve()}function m(O){const X=un.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(O):O()}function E(O,X){let K;const[Y,pe,_]=Qv(O,X);K=ko(Y.reverse(),"beforeRouteLeave",O,X);for(const C of Y)C.leaveGuards.forEach(N=>{K.push(bn(N,O,X))});const b=v.bind(null,O,X);return K.push(b),nt(K).then(()=>{K=[];for(const C of o.list())K.push(bn(C,O,X));return K.push(b),nt(K)}).then(()=>{K=ko(pe,"beforeRouteUpdate",O,X);for(const C of pe)C.updateGuards.forEach(N=>{K.push(bn(N,O,X))});return K.push(b),nt(K)}).then(()=>{K=[];for(const C of _)if(C.beforeEnter)if(Ot(C.beforeEnter))for(const N of C.beforeEnter)K.push(bn(N,O,X));else K.push(bn(C.beforeEnter,O,X));return K.push(b),nt(K)}).then(()=>(O.matched.forEach(C=>C.enterCallbacks={}),K=ko(_,"beforeRouteEnter",O,X,m),K.push(b),nt(K))).then(()=>{K=[];for(const C of a.list())K.push(bn(C,O,X));return K.push(b),nt(K)}).catch(C=>Jt(C,8)?C:Promise.reject(C))}function A(O,X,K){c.list().forEach(Y=>m(()=>Y(O,X,K)))}function I(O,X,K,Y,pe){const _=H(O,X);if(_)return _;const b=X===mn,C=gs?history.state:{};K&&(Y||b?i.replace(O.fullPath,ve({scroll:b&&C&&C.scroll},pe)):i.push(O.fullPath,pe)),u.value=O,ft(O,X,K,b),wt()}let w;function Ie(){w||(w=i.listen((O,X,K)=>{if(!xt.listening)return;const Y=q(O),pe=J(Y);if(pe){S(ve(pe,{replace:!0,force:!0}),Y).catch(ii);return}f=Y;const _=u.value;gs&&wv(Mc(_.fullPath,K.delta),Hr()),E(Y,_).catch(b=>Jt(b,12)?b:Jt(b,2)?(S(ve(j(b.to),{force:!0}),Y).then(C=>{Jt(C,20)&&!K.delta&&K.type===bi.pop&&i.go(-1,!1)}).catch(ii),Promise.reject()):(K.delta&&i.go(-K.delta,!1),le(b,Y,_))).then(b=>{b=b||I(Y,_,!1),b&&(K.delta&&!Jt(b,8)?i.go(-K.delta,!1):K.type===bi.pop&&Jt(b,20)&&i.go(-1,!1)),A(Y,_,b)}).catch(ii)}))}let xe=Ks(),Re=Ks(),ce;function le(O,X,K){wt(O);const Y=Re.list();return Y.length?Y.forEach(pe=>pe(O,X,K)):console.error(O),Promise.reject(O)}function lt(){return ce&&u.value!==mn?Promise.resolve():new Promise((O,X)=>{xe.add([O,X])})}function wt(O){return ce||(ce=!O,Ie(),xe.list().forEach(([X,K])=>O?K(O):X()),xe.reset()),O}function ft(O,X,K,Y){const{scrollBehavior:pe}=t;if(!gs||!pe)return Promise.resolve();const _=!K&&bv(Mc(O.fullPath,0))||(Y||!K)&&history.state&&history.state.scroll||null;return Qs().then(()=>pe(O,X,_)).then(b=>b&&_v(b)).catch(b=>le(b,O,X))}const ke=O=>i.go(O);let Pe;const un=new Set,xt={currentRoute:u,listening:!0,addRoute:T,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:z,getRoutes:U,resolve:q,options:t,push:B,replace:Z,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:o.add,beforeResolve:a.add,afterEach:c.add,onError:Re.add,isReady:lt,install(O){const X=this;O.component("RouterLink",zv),O.component("RouterView",Xv),O.config.globalProperties.$router=X,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>rt(u)}),gs&&!Pe&&u.value===mn&&(Pe=!0,B(i.location).catch(pe=>{}));const K={};for(const pe in mn)Object.defineProperty(K,pe,{get:()=>u.value[pe],enumerable:!0});O.provide(Wr,X),O.provide(If,_h(K)),O.provide(sa,u);const Y=O.unmount;un.add(O),O.unmount=function(){un.delete(O),un.size<1&&(f=mn,w&&w(),w=null,u.value=mn,Pe=!1,ce=!1),Y()}}};function nt(O){return O.reduce((X,K)=>X.then(()=>m(K)),Promise.resolve())}return xt}function Qv(t,e){const n=[],s=[],i=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const c=e.matched[a];c&&(t.matched.find(f=>Ss(f,c))?s.push(c):n.push(c));const u=t.matched[a];u&&(e.matched.find(f=>Ss(f,u))||i.push(u))}return[n,s,i]}function Ci(){return Ct(Wr)}const Zv=()=>{};var Yc={};/**
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
 */const Ef=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ey=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],a=t[n++],c=t[n++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],a=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Tf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const o=t[i],a=i+1<t.length,c=a?t[i+1]:0,u=i+2<t.length,f=u?t[i+2]:0,d=o>>2,g=(o&3)<<4|c>>4;let y=(c&15)<<2|f>>6,T=f&63;u||(T=64,a||(y=64)),s.push(n[d],n[g],n[y],n[T])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ef(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ey(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const f=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||c==null||f==null||g==null)throw new ty;const y=o<<2|c>>4;if(s.push(y),f!==64){const T=c<<4&240|f>>2;if(s.push(T),g!==64){const P=f<<6&192|g;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ty extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ny=function(t){const e=Ef(t);return Tf.encodeByteArray(e,!0)},yr=function(t){return ny(t).replace(/\./g,"")},Sf=function(t){try{return Tf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iy=()=>sy().__FIREBASE_DEFAULTS__,ry=()=>{if(typeof process>"u"||typeof Yc>"u")return;const t=Yc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sf(t[1]);return e&&JSON.parse(e)},Ma=()=>{try{return Zv()||iy()||ry()||oy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Af=t=>{var e,n;return(n=(e=Ma())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ay=t=>{const e=Af(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Cf=()=>{var t;return(t=Ma())===null||t===void 0?void 0:t.config},Rf=t=>{var e;return(e=Ma())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ly{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ri(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function kf(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function cy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[yr(JSON.stringify(n)),yr(JSON.stringify(a)),""].join(".")}const oi={};function uy(){const t={prod:[],emulator:[]};for(const e of Object.keys(oi))oi[e]?t.emulator.push(e):t.prod.push(e);return t}function hy(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Qc=!1;function Pf(t,e){if(typeof window>"u"||typeof document>"u"||!Ri(window.location.host)||oi[t]===e||oi[t]||Qc)return;oi[t]=e;function n(y){return`__firebase__banner__${y}`}const s="__firebase__banner",o=uy().prod.length>0;function a(){const y=document.getElementById(s);y&&y.remove()}function c(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,T){y.setAttribute("width","24"),y.setAttribute("id",T),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function f(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Qc=!0,a()},y}function d(y,T){y.setAttribute("id",T),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function g(){const y=hy(s),T=n("text"),P=document.getElementById(T)||document.createElement("span"),U=n("learnmore"),z=document.getElementById(U)||document.createElement("a"),q=n("preprendIcon"),j=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const H=y.element;c(H),d(z,U);const B=f();u(j,q),H.append(j,P,z,B),document.body.appendChild(H)}o?(P.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function dy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Of(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function py(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gy(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Nf(){try{return typeof indexedDB=="object"}catch{return!1}}function Df(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function my(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const vy="FirebaseError";class Dt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=vy,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rs.prototype.create)}}class rs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?yy(o,s):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Dt(i,c,s)}}function yy(t,e){return t.replace(_y,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const _y=/\{\$([^}]+)}/g;function wy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const o=t[i],a=e[i];if(Zc(o)&&Zc(a)){if(!Pn(o,a))return!1}else if(o!==a)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Zc(t){return t!==null&&typeof t=="object"}/**
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
 */function ki(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function by(t,e){const n=new Iy(t,e);return n.subscribe.bind(n)}class Iy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ey(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Po),i.error===void 0&&(i.error=Po),i.complete===void 0&&(i.complete=Po);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ey(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Po(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=1e3,Sy=2,Ay=4*60*60*1e3,Cy=.5;function eu(t,e=Ty,n=Sy){const s=e*Math.pow(n,t),i=Math.round(Cy*s*(Math.random()-.5)*2);return Math.min(Ay,s+i)}/**
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
 */function cn(t){return t&&t._delegate?t._delegate:t}class Nt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ry{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ly;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e?.identifier),i=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Py(e))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});s.resolve(o)}catch{}}}}clearInstance(e=Bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bn){return this.instances.has(e)}getOptions(e=Bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);s===c&&a.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),o=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ky(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bn){return this.component?this.component.multipleInstances?e:Bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ky(t){return t===Bn?void 0:t}function Py(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ry(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const Ny={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},Dy=we.INFO,xy={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},Ly=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=xy[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gr{constructor(e){this.name=e,this._logLevel=Dy,this._logHandler=Ly,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ny[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const My=(t,e)=>e.some(n=>t instanceof n);let tu,nu;function Uy(){return tu||(tu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fy(){return nu||(nu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xf=new WeakMap,ia=new WeakMap,Lf=new WeakMap,Oo=new WeakMap,Ua=new WeakMap;function jy(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(An(t.result)),i()},a=()=>{s(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&xf.set(n,t)}).catch(()=>{}),Ua.set(e,t),e}function Vy(t){if(ia.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});ia.set(t,e)}let ra={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ia.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $y(t){ra=t(ra)}function By(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(No(this),e,...n);return Lf.set(s,e.sort?e.sort():[e]),An(s)}:Fy().includes(t)?function(...e){return t.apply(No(this),e),An(xf.get(this))}:function(...e){return An(t.apply(No(this),e))}}function Hy(t){return typeof t=="function"?By(t):(t instanceof IDBTransaction&&Vy(t),My(t,Uy())?new Proxy(t,ra):t)}function An(t){if(t instanceof IDBRequest)return jy(t);if(Oo.has(t))return Oo.get(t);const e=Hy(t);return e!==t&&(Oo.set(t,e),Ua.set(e,t)),e}const No=t=>Ua.get(t);function Mf(t,e,{blocked:n,upgrade:s,blocking:i,terminated:o}={}){const a=indexedDB.open(t,e),c=An(a);return s&&a.addEventListener("upgradeneeded",u=>{s(An(a.result),u.oldVersion,u.newVersion,An(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Wy=["get","getKey","getAll","getAllKeys","count"],Gy=["put","add","delete","clear"],Do=new Map;function su(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Do.get(e))return Do.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Gy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Wy.includes(n)))return;const o=async function(a,...c){const u=this.transaction(a,i?"readwrite":"readonly");let f=u.store;return s&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),i&&u.done]))[0]};return Do.set(e,o),o}$y(t=>({...t,get:(e,n,s)=>su(e,n)||t.get(e,n,s),has:(e,n)=>!!su(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ky(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ky(t){const e=t.getComponent();return e?.type==="VERSION"}const oa="@firebase/app",iu="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new Gr("@firebase/app"),qy="@firebase/app-compat",Jy="@firebase/analytics-compat",Xy="@firebase/analytics",Yy="@firebase/app-check-compat",Qy="@firebase/app-check",Zy="@firebase/auth",e_="@firebase/auth-compat",t_="@firebase/database",n_="@firebase/data-connect",s_="@firebase/database-compat",i_="@firebase/functions",r_="@firebase/functions-compat",o_="@firebase/installations",a_="@firebase/installations-compat",l_="@firebase/messaging",c_="@firebase/messaging-compat",u_="@firebase/performance",h_="@firebase/performance-compat",f_="@firebase/remote-config",d_="@firebase/remote-config-compat",p_="@firebase/storage",g_="@firebase/storage-compat",m_="@firebase/firestore",v_="@firebase/ai",y_="@firebase/firestore-compat",__="firebase",w_="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="[DEFAULT]",b_={[oa]:"fire-core",[qy]:"fire-core-compat",[Xy]:"fire-analytics",[Jy]:"fire-analytics-compat",[Qy]:"fire-app-check",[Yy]:"fire-app-check-compat",[Zy]:"fire-auth",[e_]:"fire-auth-compat",[t_]:"fire-rtdb",[n_]:"fire-data-connect",[s_]:"fire-rtdb-compat",[i_]:"fire-fn",[r_]:"fire-fn-compat",[o_]:"fire-iid",[a_]:"fire-iid-compat",[l_]:"fire-fcm",[c_]:"fire-fcm-compat",[u_]:"fire-perf",[h_]:"fire-perf-compat",[f_]:"fire-rc",[d_]:"fire-rc-compat",[p_]:"fire-gcs",[g_]:"fire-gcs-compat",[m_]:"fire-fst",[y_]:"fire-fst-compat",[v_]:"fire-vertex","fire-js":"fire-js",[__]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Map,I_=new Map,la=new Map;function ru(t,e){try{t.container.addComponent(e)}catch(n){on.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ht(t){const e=t.name;if(la.has(e))return on.debug(`There were multiple attempts to register component ${e}.`),!1;la.set(e,t);for(const n of _r.values())ru(n,t);for(const n of I_.values())ru(n,t);return!0}function os(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Et(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cn=new rs("app","Firebase",E_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=w_;function Uf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:aa,automaticDataCollectionEnabled:!0},e),i=s.name;if(typeof i!="string"||!i)throw Cn.create("bad-app-name",{appName:String(i)});if(n||(n=Cf()),!n)throw Cn.create("no-options");const o=_r.get(i);if(o){if(Pn(n,o.options)&&Pn(s,o.config))return o;throw Cn.create("duplicate-app",{appName:i})}const a=new Oy(i);for(const u of la.values())a.addComponent(u);const c=new T_(n,s,a);return _r.set(i,c),c}function Fa(t=aa){const e=_r.get(t);if(!e&&t===aa&&Cf())return Uf();if(!e)throw Cn.create("no-app",{appName:t});return e}function yt(t,e,n){var s;let i=(s=b_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${i}" with version "${e}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),on.warn(c.join(" "));return}Ht(new Nt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const S_="firebase-heartbeat-database",A_=1,Ii="firebase-heartbeat-store";let xo=null;function Ff(){return xo||(xo=Mf(S_,A_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ii)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cn.create("idb-open",{originalErrorMessage:t.message})})),xo}async function C_(t){try{const n=(await Ff()).transaction(Ii),s=await n.objectStore(Ii).get(jf(t));return await n.done,s}catch(e){if(e instanceof Dt)on.warn(e.message);else{const n=Cn.create("idb-get",{originalErrorMessage:e?.message});on.warn(n.message)}}}async function ou(t,e){try{const s=(await Ff()).transaction(Ii,"readwrite");await s.objectStore(Ii).put(e,jf(t)),await s.done}catch(n){if(n instanceof Dt)on.warn(n.message);else{const s=Cn.create("idb-set",{originalErrorMessage:n?.message});on.warn(s.message)}}}function jf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const R_=1024,k_=30;class P_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new N_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=au();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>k_){const a=D_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){on.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=au(),{heartbeatsToSend:s,unsentEntries:i}=O_(this._heartbeatsCache.heartbeats),o=yr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return on.warn(n),""}}}function au(){return new Date().toISOString().substring(0,10)}function O_(t,e=R_){const n=[];let s=t.slice();for(const i of t){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),lu(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class N_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nf()?Df().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await C_(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ou(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ou(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function lu(t){return yr(JSON.stringify({version:2,heartbeats:t})).length}function D_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(t){Ht(new Nt("platform-logger",e=>new zy(e),"PRIVATE")),Ht(new Nt("heartbeat",e=>new P_(e),"PRIVATE")),yt(oa,iu,t),yt(oa,iu,"esm2017"),yt("fire-js","")}x_("");var L_="firebase",M_="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt(L_,M_,"app");const Vf="@firebase/installations",ja="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=1e4,Bf=`w:${ja}`,Hf="FIS_v2",U_="https://firebaseinstallations.googleapis.com/v1",F_=60*60*1e3,j_="installations",V_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ts=new rs(j_,V_,$_);function Wf(t){return t instanceof Dt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf({projectId:t}){return`${U_}/projects/${t}/installations`}function zf(t){return{token:t.token,requestStatus:2,expiresIn:H_(t.expiresIn),creationTime:Date.now()}}async function Kf(t,e){const s=(await e.json()).error;return ts.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function qf({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function B_(t,{refreshToken:e}){const n=qf(t);return n.append("Authorization",W_(e)),n}async function Jf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function H_(t){return Number(t.replace("s","000"))}function W_(t){return`${Hf} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Gf(t),i=qf(t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={fid:n,authVersion:Hf,appId:t.appId,sdkVersion:Bf},c={method:"POST",headers:i,body:JSON.stringify(a)},u=await Jf(()=>fetch(s,c));if(u.ok){const f=await u.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:zf(f.authToken)}}else throw await Kf("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=/^[cdef][\w-]{21}$/,ca="";function q_(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=J_(t);return K_.test(n)?n:ca}catch{return ca}}function J_(t){return z_(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Yf=new Map;function Qf(t,e){const n=zr(t);Zf(n,e),X_(n,e)}function Zf(t,e){const n=Yf.get(t);if(n)for(const s of n)s(e)}function X_(t,e){const n=Y_();n&&n.postMessage({key:t,fid:e}),Q_()}let zn=null;function Y_(){return!zn&&"BroadcastChannel"in self&&(zn=new BroadcastChannel("[Firebase] FID Change"),zn.onmessage=t=>{Zf(t.data.key,t.data.fid)}),zn}function Q_(){Yf.size===0&&zn&&(zn.close(),zn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="firebase-installations-database",e0=1,ns="firebase-installations-store";let Lo=null;function Va(){return Lo||(Lo=Mf(Z_,e0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ns)}}})),Lo}async function wr(t,e){const n=zr(t),i=(await Va()).transaction(ns,"readwrite"),o=i.objectStore(ns),a=await o.get(n);return await o.put(e,n),await i.done,(!a||a.fid!==e.fid)&&Qf(t,e.fid),e}async function ed(t){const e=zr(t),s=(await Va()).transaction(ns,"readwrite");await s.objectStore(ns).delete(e),await s.done}async function Kr(t,e){const n=zr(t),i=(await Va()).transaction(ns,"readwrite"),o=i.objectStore(ns),a=await o.get(n),c=e(a);return c===void 0?await o.delete(n):await o.put(c,n),await i.done,c&&(!a||a.fid!==c.fid)&&Qf(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(t){let e;const n=await Kr(t.appConfig,s=>{const i=t0(s),o=n0(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===ca?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function t0(t){const e=t||{fid:q_(),registrationStatus:0};return td(e)}function n0(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ts.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=s0(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:i0(t)}:{installationEntry:e}}async function s0(t,e){try{const n=await G_(t,e);return wr(t.appConfig,n)}catch(n){throw Wf(n)&&n.customData.serverCode===409?await ed(t.appConfig):await wr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function i0(t){let e=await cu(t.appConfig);for(;e.registrationStatus===1;)await Xf(100),e=await cu(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await $a(t);return s||n}return e}function cu(t){return Kr(t,e=>{if(!e)throw ts.create("installation-not-found");return td(e)})}function td(t){return r0(t)?{fid:t.fid,registrationStatus:0}:t}function r0(t){return t.registrationStatus===1&&t.registrationTime+$f<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0({appConfig:t,heartbeatServiceProvider:e},n){const s=a0(t,n),i=B_(t,n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const a={installation:{sdkVersion:Bf,appId:t.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},u=await Jf(()=>fetch(s,c));if(u.ok){const f=await u.json();return zf(f)}else throw await Kf("Generate Auth Token",u)}function a0(t,{fid:e}){return`${Gf(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ba(t,e=!1){let n;const s=await Kr(t.appConfig,o=>{if(!nd(o))throw ts.create("not-registered");const a=o.authToken;if(!e&&u0(a))return o;if(a.requestStatus===1)return n=l0(t,e),o;{if(!navigator.onLine)throw ts.create("app-offline");const c=f0(o);return n=c0(t,c),c}});return n?await n:s.authToken}async function l0(t,e){let n=await uu(t.appConfig);for(;n.authToken.requestStatus===1;)await Xf(100),n=await uu(t.appConfig);const s=n.authToken;return s.requestStatus===0?Ba(t,e):s}function uu(t){return Kr(t,e=>{if(!nd(e))throw ts.create("not-registered");const n=e.authToken;return d0(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function c0(t,e){try{const n=await o0(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await wr(t.appConfig,s),n}catch(n){if(Wf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ed(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await wr(t.appConfig,s)}throw n}}function nd(t){return t!==void 0&&t.registrationStatus===2}function u0(t){return t.requestStatus===2&&!h0(t)}function h0(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+F_}function f0(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function d0(t){return t.requestStatus===1&&t.requestTime+$f<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(t){const e=t,{installationEntry:n,registrationPromise:s}=await $a(e);return s?s.catch(console.error):Ba(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g0(t,e=!1){const n=t;return await m0(n),(await Ba(n,e)).token}async function m0(t){const{registrationPromise:e}=await $a(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t){if(!t||!t.options)throw Mo("App Configuration");if(!t.name)throw Mo("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Mo(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Mo(t){return ts.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="installations",y0="installations-internal",_0=t=>{const e=t.getProvider("app").getImmediate(),n=v0(e),s=os(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},w0=t=>{const e=t.getProvider("app").getImmediate(),n=os(e,sd).getImmediate();return{getId:()=>p0(n),getToken:i=>g0(n,i)}};function b0(){Ht(new Nt(sd,_0,"PUBLIC")),Ht(new Nt(y0,w0,"PRIVATE"))}b0();yt(Vf,ja);yt(Vf,ja,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="analytics",I0="firebase_id",E0="origin",T0=60*1e3,S0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ha="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new Gr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ht=new rs("analytics","Analytics",A0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t){if(!t.startsWith(Ha)){const e=ht.create("invalid-gtag-resource",{gtagURL:t});return at.warn(e.message),""}return t}function id(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function R0(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function k0(t,e){const n=R0("firebase-js-sdk-policy",{createScriptURL:C0}),s=document.createElement("script"),i=`${Ha}?l=${t}&id=${e}`;s.src=n?n?.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function P0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function O0(t,e,n,s,i,o){const a=s[i];try{if(a)await e[a];else{const u=(await id(n)).find(f=>f.measurementId===i);u&&await e[u.appId]}}catch(c){at.error(c)}t("config",i,o)}async function N0(t,e,n,s,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const c=await id(n);for(const u of a){const f=c.find(g=>g.measurementId===u),d=f&&e[f.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",s,i||{})}catch(o){at.error(o)}}function D0(t,e,n,s){async function i(o,...a){try{if(o==="event"){const[c,u]=a;await N0(t,e,n,c,u)}else if(o==="config"){const[c,u]=a;await O0(t,e,n,s,c,u)}else if(o==="consent"){const[c,u]=a;t("consent",c,u)}else if(o==="get"){const[c,u,f]=a;t("get",c,u,f)}else if(o==="set"){const[c]=a;t("set",c)}else t(o,...a)}catch(c){at.error(c)}}return i}function x0(t,e,n,s,i){let o=function(...a){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=D0(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function L0(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ha)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=30,U0=1e3;class F0{constructor(e={},n=U0){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const rd=new F0;function j0(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function V0(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:j0(s)},o=S0.replace("{app-id}",n),a=await fetch(o,i);if(a.status!==200&&a.status!==304){let c="";try{const u=await a.json();!((e=u.error)===null||e===void 0)&&e.message&&(c=u.error.message)}catch{}throw ht.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function $0(t,e=rd,n){const{appId:s,apiKey:i,measurementId:o}=t.options;if(!s)throw ht.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:s};throw ht.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new W0;return setTimeout(async()=>{c.abort()},T0),od({appId:s,apiKey:i,measurementId:o},a,c,e)}async function od(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=rd){var o;const{appId:a,measurementId:c}=t;try{await B0(s,e)}catch(u){if(c)return at.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u?.message}]`),{appId:a,measurementId:c};throw u}try{const u=await V0(t);return i.deleteThrottleMetadata(a),u}catch(u){const f=u;if(!H0(f)){if(i.deleteThrottleMetadata(a),c)return at.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f?.message}]`),{appId:a,measurementId:c};throw u}const d=Number((o=f?.customData)===null||o===void 0?void 0:o.httpStatus)===503?eu(n,i.intervalMillis,M0):eu(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(a,g),at.debug(`Calling attemptFetch again in ${d} millis`),od(t,g,s,i)}}function B0(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),s(ht.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function H0(t){if(!(t instanceof Dt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class W0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function G0(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const o=await e,a=Object.assign(Object.assign({},s),{send_to:o});t("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z0(){if(Nf())try{await Df()}catch(t){return at.warn(ht.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return at.warn(ht.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function K0(t,e,n,s,i,o,a){var c;const u=$0(t);u.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&at.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>at.error(T)),e.push(u);const f=z0().then(T=>{if(T)return s.getId()}),[d,g]=await Promise.all([u,f]);L0(o)||k0(o,d.measurementId),i("js",new Date);const y=(c=a?.config)!==null&&c!==void 0?c:{};return y[E0]="firebase",y.update=!0,g!=null&&(y[I0]=g),i("config",d.measurementId,y),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.app=e}_delete(){return delete ai[this.app.options.appId],Promise.resolve()}}let ai={},hu=[];const fu={};let Uo="dataLayer",J0="gtag",du,ad,pu=!1;function X0(){const t=[];if(Of()&&t.push("This is a browser extension environment."),my()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=ht.create("invalid-analytics-context",{errorInfo:e});at.warn(n.message)}}function Y0(t,e,n){X0();const s=t.options.appId;if(!s)throw ht.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)at.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ht.create("no-api-key");if(ai[s]!=null)throw ht.create("already-exists",{id:s});if(!pu){P0(Uo);const{wrappedGtag:o,gtagCore:a}=x0(ai,hu,fu,Uo,J0);ad=o,du=a,pu=!0}return ai[s]=K0(t,hu,fu,e,du,Uo,n),new q0(t)}function Q0(t=Fa()){t=cn(t);const e=os(t,br);return e.isInitialized()?e.getImmediate():Z0(t)}function Z0(t,e={}){const n=os(t,br);if(n.isInitialized()){const i=n.getImmediate();if(Pn(e,n.getOptions()))return i;throw ht.create("already-initialized")}return n.initialize({options:e})}function ew(t,e,n,s){t=cn(t),G0(ad,ai[t.app.options.appId],e,n,s).catch(i=>at.error(i))}const gu="@firebase/analytics",mu="0.10.17";function tw(){Ht(new Nt(br,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Y0(s,i,n)},"PUBLIC")),Ht(new Nt("analytics-internal",t,"PRIVATE")),yt(gu,mu),yt(gu,mu,"esm2017");function t(e){try{const n=e.getProvider(br).getImmediate();return{logEvent:(s,i,o)=>ew(n,s,i,o)}}catch(n){throw ht.create("interop-component-reg-failed",{reason:n})}}}tw();function Wa(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function ld(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nw=ld,cd=new rs("auth","Firebase",ld());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new Gr("@firebase/auth");function sw(t,...e){Ir.logLevel<=we.WARN&&Ir.warn(`Auth (${Ps}): ${t}`,...e)}function or(t,...e){Ir.logLevel<=we.ERROR&&Ir.error(`Auth (${Ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,...e){throw za(t,...e)}function Rt(t,...e){return za(t,...e)}function Ga(t,e,n){const s=Object.assign(Object.assign({},nw()),{[e]:n});return new rs("auth","Firebase",s).create(e,{appName:t.name})}function Yn(t){return Ga(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iw(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Wt(t,"argument-error"),Ga(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function za(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return cd.create(t,...e)}function ie(t,e,...n){if(!t)throw za(e,...n)}function tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw or(e),new Error(e)}function an(t,e){t||tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rw(){return vu()==="http:"||vu()==="https:"}function vu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rw()||Of()||"connection"in navigator)?navigator.onLine:!0}function aw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.shortDelay=e,this.longDelay=n,an(n>e,"Short delay should be less than long delay!"),this.isMobile=fy()||py()}get(){return ow()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t,e){an(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],uw=new Pi(3e4,6e4);function qa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Os(t,e,n,s,i={}){return hd(t,i,async()=>{let o={},a={};s&&(e==="GET"?a=s:o={body:JSON.stringify(s)});const c=ki(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const f=Object.assign({method:e,headers:u},o);return dy()||(f.referrerPolicy="no-referrer"),t.emulatorConfig&&Ri(t.emulatorConfig.host)&&(f.credentials="include"),ud.fetch()(await fd(t,t.config.apiHost,n,c),f)})}async function hd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},lw),e);try{const i=new fw(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Qi(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[u,f]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qi(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Qi(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Qi(t,"user-disabled",a);const d=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Ga(t,d,f);Wt(t,d)}}catch(i){if(i instanceof Dt)throw i;Wt(t,"network-request-failed",{message:String(i)})}}async function hw(t,e,n,s,i={}){const o=await Os(t,e,n,s,i);return"mfaPendingCredential"in o&&Wt(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function fd(t,e,n,s){const i=`${e}${n}?${s}`,o=t,a=o.config.emulator?Ka(t.config,i):`${t.config.apiScheme}://${i}`;return cw.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class fw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Rt(this.auth,"network-request-failed")),uw.get())})}}function Qi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Rt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dw(t,e){return Os(t,"POST","/v1/accounts:delete",e)}async function Er(t,e){return Os(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pw(t,e=!1){const n=cn(t),s=await n.getIdToken(e),i=Ja(s);ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o?.sign_in_provider;return{claims:i,token:s,authTime:li(Fo(i.auth_time)),issuedAtTime:li(Fo(i.iat)),expirationTime:li(Fo(i.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Fo(t){return Number(t)*1e3}function Ja(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return or("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sf(n);return i?JSON.parse(i):(or("Failed to decode base64 JWT payload"),null)}catch(i){return or("Caught error parsing JWT payload as JSON",i?.toString()),null}}function yu(t){const e=Ja(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Dt&&gw(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function gw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=li(this.lastLoginAt),this.creationTime=li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Ei(t,Er(n,{idToken:s}));ie(i?.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?dd(o.providerUserInfo):[],c=yw(t.providerData,a),u=t.isAnonymous,f=!(t.email&&o.passwordHash)&&!c?.length,d=u?f:!1,g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new ha(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,g)}async function vw(t){const e=cn(t);await Tr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yw(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function dd(t){return t.map(e=>{var{providerId:n}=e,s=Wa(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _w(t,e){const n=await hd(t,{},async()=>{const s=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,a=await fd(t,i,"/v1/token",`key=${o}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:s};return t.emulatorConfig&&Ri(t.emulatorConfig.host)&&(u.credentials="include"),ud.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ww(t,e){return Os(t,"POST","/v2/accounts:revokeToken",qa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=yu(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:o}=await _w(e,n);this.updateTokensAndExpiration(s,i,Number(o))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:o}=n,a=new bs;return s&&(ie(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),i&&(ie(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(ie(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bs,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,o=Wa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ha(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Ei(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pw(this,e)}reload(){return vw(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Tr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Et(this.auth.app))return Promise.reject(Yn(this.auth));const e=await this.getIdToken();return await Ei(this,dw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,o,a,c,u,f,d;const g=(s=n.displayName)!==null&&s!==void 0?s:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,T=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,P=(a=n.photoURL)!==null&&a!==void 0?a:void 0,U=(c=n.tenantId)!==null&&c!==void 0?c:void 0,z=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,q=(f=n.createdAt)!==null&&f!==void 0?f:void 0,j=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:H,emailVerified:B,isAnonymous:Z,providerData:J,stsTokenManager:S}=n;ie(H&&S,e,"internal-error");const v=bs.fromJSON(this.name,S);ie(typeof H=="string",e,"internal-error"),vn(g,e.name),vn(y,e.name),ie(typeof B=="boolean",e,"internal-error"),ie(typeof Z=="boolean",e,"internal-error"),vn(T,e.name),vn(P,e.name),vn(U,e.name),vn(z,e.name),vn(q,e.name),vn(j,e.name);const m=new Tt({uid:H,auth:e,email:y,emailVerified:B,displayName:g,isAnonymous:Z,photoURL:P,phoneNumber:T,tenantId:U,stsTokenManager:v,createdAt:q,lastLoginAt:j});return J&&Array.isArray(J)&&(m.providerData=J.map(E=>Object.assign({},E))),z&&(m._redirectEventId=z),m}static async _fromIdTokenResponse(e,n,s=!1){const i=new bs;i.updateFromServerResponse(n);const o=new Tt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Tr(o),o}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];ie(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?dd(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!o?.length,c=new bs;c.updateFromIdToken(s);const u=new Tt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ha(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!o?.length};return Object.assign(u,f),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=new Map;function nn(t){an(t instanceof Function,"Expected a class definition");let e=_u.get(t);return e?(an(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_u.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pd.type="NONE";const wu=pd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t,e,n){return`firebase:${t}:${e}:${n}`}class Is{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:o}=this.auth;this.fullUserKey=ar(this.userKey,i.apiKey,o),this.fullPersistenceKey=ar("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Er(this.auth,{idToken:e}).catch(()=>{});return n?Tt._fromGetAccountInfoResponse(this.auth,n,e):null}return Tt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Is(nn(wu),e,s);const i=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||nn(wu);const a=ar(s,e.config.apiKey,e.name);let c=null;for(const f of n)try{const d=await f._get(a);if(d){let g;if(typeof d=="string"){const y=await Er(e,{idToken:d}).catch(()=>{});if(!y)break;g=await Tt._fromGetAccountInfoResponse(e,y,d)}else g=Tt._fromJSON(e,d);f!==o&&(c=g),o=f;break}}catch{}const u=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new Is(o,e,s):(o=u[0],c&&await o._set(a,c.toJSON()),await Promise.all(n.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new Is(o,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wd(e))return"Blackberry";if(bd(e))return"Webos";if(md(e))return"Safari";if((e.includes("chrome/")||vd(e))&&!e.includes("edge/"))return"Chrome";if(_d(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function gd(t=tt()){return/firefox\//i.test(t)}function md(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vd(t=tt()){return/crios\//i.test(t)}function yd(t=tt()){return/iemobile/i.test(t)}function _d(t=tt()){return/android/i.test(t)}function wd(t=tt()){return/blackberry/i.test(t)}function bd(t=tt()){return/webos/i.test(t)}function Xa(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bw(t=tt()){var e;return Xa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Iw(){return gy()&&document.documentMode===10}function Id(t=tt()){return Xa(t)||_d(t)||bd(t)||wd(t)||/windows phone/i.test(t)||yd(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t,e=[]){let n;switch(t){case"Browser":n=bu(tt());break;case"Worker":n=`${bu(tt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ps}/${s}`}/**
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
 */class Ew{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=o=>new Promise((a,c)=>{try{const u=e(o);a(u)}catch(u){c(u)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function Tw(t,e={}){return Os(t,"GET","/v2/passwordPolicy",qa(t,e))}/**
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
 */const Sw=6;class Aw{constructor(e){var n,s,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Sw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,o,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(s=u.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Iu(this),this.idTokenSubscription=new Iu(this),this.beforeStateQueue=new Ew(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nn(n)),this._initializationPromise=this.queue(async()=>{var s,i,o;if(!this._deleted&&(this.persistenceManager=await Is.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Er(this,{idToken:e}),s=await Tt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Et(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&u?.user&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tr(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Et(this.app))return Promise.reject(Yn(this));const n=e?cn(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Et(this.app)?Promise.reject(Yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Et(this.app)?Promise.reject(Yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Tw(this),n=new Aw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new rs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await ww(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await Is.create(this,[nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,s,i);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ed(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&sw(`Error while retrieving App Check token: ${n.error}`),n?.token}}function qr(t){return cn(t)}class Iu{constructor(e){this.auth=e,this.observer=null,this.addObserver=by(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Rw(t){Ya=t}function kw(t){return Ya.loadJS(t)}function Pw(){return Ya.gapiScript}function Ow(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t,e){const n=os(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Pn(o,e??{}))return i;Wt(i,"already-initialized")}return n.initialize({options:e})}function Dw(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(nn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function xw(t,e,n){const s=qr(t);ie(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,o=Td(e),{host:a,port:c}=Lw(e),u=c===null?"":`:${c}`,f={url:`${o}//${a}${u}/`},d=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){ie(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ie(Pn(f,s.config.emulator)&&Pn(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=f,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,Ri(a)?(kf(`${o}//${a}${u}`),Pf("Auth",!0)):Mw()}function Td(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Lw(t){const e=Td(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const o=i[1];return{host:o,port:Eu(s.substr(o.length+1))}}else{const[o,a]=s.split(":");return{host:o,port:Eu(a)}}}function Eu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Mw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tn("not implemented")}_getIdTokenResponse(e){return tn("not implemented")}_linkToIdToken(e,n){return tn("not implemented")}_getReauthenticationResolver(e){return tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t,e){return hw(t,"POST","/v1/accounts:signInWithIdp",qa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="http://localhost";class ss extends Sd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,o=Wa(n,["providerId","signInMethod"]);if(!s||!i)return null;const a=new ss(s,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Es(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Es(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Es(e,n)}buildRequest(){const e={requestUri:Uw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ki(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends Qa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Oi{constructor(){super("facebook.com")}static credential(e){return ss._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.FACEBOOK_SIGN_IN_METHOD="facebook.com";In.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ss._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Zt.credential(n,s)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Oi{constructor(){super("github.com")}static credential(e){return ss._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Oi{constructor(){super("twitter.com")}static credential(e,n){return ss._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Tn.credential(n,s)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const o=await Tt._fromIdTokenResponse(e,s,i),a=Tu(s);return new Cs({user:o,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Tu(s);return new Cs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Tu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Dt{constructor(e,n,s,i){var o;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Sr.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Sr(e,n,s,i)}}function Ad(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Sr._fromErrorAndOperation(t,o,e,s):o})}async function Fw(t,e,n=!1){const s=await Ei(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cs._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jw(t,e,n=!1){const{auth:s}=t;if(Et(s.app))return Promise.reject(Yn(s));const i="reauthenticate";try{const o=await Ei(t,Ad(s,i,e,t),n);ie(o.idToken,s,"internal-error");const a=Ja(o.idToken);ie(a,s,"internal-error");const{sub:c}=a;return ie(t.uid===c,s,"user-mismatch"),Cs._forOperation(t,i,o)}catch(o){throw o?.code==="auth/user-not-found"&&Wt(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vw(t,e,n=!1){if(Et(t.app))return Promise.reject(Yn(t));const s="signIn",i=await Ad(t,s,e),o=await Cs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(o.user),o}function $w(t,e,n,s){return cn(t).onIdTokenChanged(e,n,s)}function Bw(t,e,n){return cn(t).beforeAuthStateChanged(e,n)}function Hw(t,e,n,s){return cn(t).onAuthStateChanged(e,n,s)}const Ar="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ar,"1"),this.storage.removeItem(Ar),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=1e3,Gw=10;class Rd extends Cd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Id(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},o=this.storage.getItem(s);Iw()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Gw):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Ww)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rd.type="LOCAL";const zw=Rd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd extends Cd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kd.type="SESSION";const Pd=kd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Jr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const c=Array.from(a).map(async f=>f(n.origin,o)),u=await Kw(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((c,u)=>{const f=Za("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:i,onMessage(g){const y=g;if(y.data.eventId===f)switch(y.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(y.data.response);break;default:clearTimeout(d),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return window}function Jw(t){Bt().location.href=t}/**
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
 */function Od(){return typeof Bt().WorkerGlobalScope<"u"&&typeof Bt().importScripts=="function"}async function Xw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yw(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Qw(){return Od()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="firebaseLocalStorageDb",Zw=1,Cr="firebaseLocalStorage",Dd="fbase_key";class Ni{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xr(t,e){return t.transaction([Cr],e?"readwrite":"readonly").objectStore(Cr)}function eb(){const t=indexedDB.deleteDatabase(Nd);return new Ni(t).toPromise()}function fa(){const t=indexedDB.open(Nd,Zw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Cr,{keyPath:Dd})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Cr)?e(s):(s.close(),await eb(),e(await fa()))})})}async function Su(t,e,n){const s=Xr(t,!0).put({[Dd]:e,value:n});return new Ni(s).toPromise()}async function tb(t,e){const n=Xr(t,!1).get(e),s=await new Ni(n).toPromise();return s===void 0?null:s.value}function Au(t,e){const n=Xr(t,!0).delete(e);return new Ni(n).toPromise()}const nb=800,sb=3;class xd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>sb)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Od()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jr._getInstance(Qw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Xw(),!this.activeServiceWorker)return;this.sender=new qw(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fa();return await Su(e,Ar,"1"),await Au(e,Ar),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Su(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>tb(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Au(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Xr(i,!1).getAll();return new Ni(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xd.type="LOCAL";const ib=xd;new Pi(3e4,6e4);/**
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
 */function Ld(t,e){return e?nn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends Sd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rb(t){return Vw(t.auth,new el(t),t.bypassAuthState)}function ob(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),jw(n,new el(t),t.bypassAuthState)}async function ab(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),Fw(n,new el(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,n,s,i,o=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:s,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rb;case"linkViaPopup":case"linkViaRedirect":return ab;case"reauthViaPopup":case"reauthViaRedirect":return ob;default:Wt(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=new Pi(2e3,1e4);async function cb(t,e,n){if(Et(t.app))return Promise.reject(Rt(t,"operation-not-supported-in-this-environment"));const s=qr(t);iw(t,e,Qa);const i=Ld(s,n);return new Kn(s,"signInViaPopup",e,i).executeNotNull()}class Kn extends Md{constructor(e,n,s,i,o){super(e,n,i,o),this.provider=s,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=Za();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lb.get())};e()}}Kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub="pendingRedirect",lr=new Map;class hb extends Md{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=lr.get(this.auth._key());if(!e){try{const s=await fb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}lr.set(this.auth._key(),e)}return this.bypassAuthState||lr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fb(t,e){const n=gb(e),s=pb(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function db(t,e){lr.set(t._key(),e)}function pb(t){return nn(t._redirectPersistence)}function gb(t){return ar(ub,t.config.apiKey,t.name)}async function mb(t,e,n=!1){if(Et(t.app))return Promise.reject(Yn(t));const s=qr(t),i=Ld(s,e),a=await new hb(s,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=10*60*1e3;class yb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_b(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ud(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cu(e))}saveEventToCache(e){this.cachedEventUids.add(Cu(e)),this.lastProcessedEventTime=Date.now()}}function Cu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ud({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function _b(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ud(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wb(t,e={}){return Os(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ib=/^https?/;async function Eb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wb(t);for(const n of e)try{if(Tb(n))return}catch{}Wt(t,"unauthorized-domain")}function Tb(t){const e=ua(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!Ib.test(n))return!1;if(bb.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const Sb=new Pi(3e4,6e4);function Ru(){const t=Bt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ab(t){return new Promise((e,n)=>{var s,i,o;function a(){Ru(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ru(),n(Rt(t,"network-request-failed"))},timeout:Sb.get()})}if(!((i=(s=Bt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Bt().gapi)===null||o===void 0)&&o.load)a();else{const c=Ow("iframefcb");return Bt()[c]=()=>{gapi.load?a():n(Rt(t,"network-request-failed"))},kw(`${Pw()}?onload=${c}`).catch(u=>n(u))}}).catch(e=>{throw cr=null,e})}let cr=null;function Cb(t){return cr=cr||Ab(t),cr}/**
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
 */const Rb=new Pi(5e3,15e3),kb="__/auth/iframe",Pb="emulator/auth/iframe",Ob={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Db(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ka(e,Pb):`https://${t.config.authDomain}/${kb}`,s={apiKey:e.apiKey,appName:t.name,v:Ps},i=Nb.get(t.config.apiHost);i&&(s.eid=i);const o=t._getFrameworks();return o.length&&(s.fw=o.join(",")),`${n}?${ki(s).slice(1)}`}async function xb(t){const e=await Cb(t),n=Bt().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:Db(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ob,dontclear:!0},s=>new Promise(async(i,o)=>{await s.restyle({setHideOnLeave:!1});const a=Rt(t,"network-request-failed"),c=Bt().setTimeout(()=>{o(a)},Rb.get());function u(){Bt().clearTimeout(c),i(s)}s.ping(u).then(u,()=>{o(a)})}))}/**
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
 */const Lb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mb=500,Ub=600,Fb="_blank",jb="http://localhost";class ku{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vb(t,e,n,s=Mb,i=Ub){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Lb),{width:s.toString(),height:i.toString(),top:o,left:a}),f=tt().toLowerCase();n&&(c=vd(f)?Fb:n),gd(f)&&(e=e||jb,u.scrollbars="yes");const d=Object.entries(u).reduce((y,[T,P])=>`${y}${T}=${P},`,"");if(bw(f)&&c!=="_self")return $b(e||"",c),new ku(null);const g=window.open(e||"",c,d);ie(g,t,"popup-blocked");try{g.focus()}catch{}return new ku(g)}function $b(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Bb="__/auth/handler",Hb="emulator/auth/handler",Wb=encodeURIComponent("fac");async function Pu(t,e,n,s,i,o){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ps,eventId:i};if(e instanceof Qa){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",wy(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof Oi){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const u=await t._getAppCheckToken(),f=u?`#${Wb}=${encodeURIComponent(u)}`:"";return`${Gb(t)}?${ki(c).slice(1)}${f}`}function Gb({config:t}){return t.emulator?Ka(t,Hb):`https://${t.authDomain}/${Bb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo="webStorageSupport";class zb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pd,this._completeRedirectFn=mb,this._overrideRedirectResult=db}async _openPopup(e,n,s,i){var o;an((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Pu(e,n,s,ua(),i);return Vb(e,a,Za())}async _openRedirect(e,n,s,i){await this._originValidation(e);const o=await Pu(e,n,s,ua(),i);return Jw(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(an(o,"If manager is not set, promise should be"),o)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await xb(e),s=new yb(e);return n.register("authEvent",i=>(ie(i?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jo,{type:jo},i=>{var o;const a=(o=i?.[0])===null||o===void 0?void 0:o[jo];a!==void 0&&n(!!a),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Eb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Id()||md()||Xa()}}const Kb=zb;var Ou="@firebase/auth",Nu="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Xb(t){Ht(new Nt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;ie(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ed(t)},f=new Cw(s,i,o,u);return Dw(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ht(new Nt("auth-internal",e=>{const n=qr(e.getProvider("auth").getImmediate());return(s=>new qb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yt(Ou,Nu,Jb(t)),yt(Ou,Nu,"esm2017")}/**
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
 */const Yb=5*60,Qb=Rf("authIdTokenMaxAge")||Yb;let Du=null;const Zb=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Qb)return;const i=n?.token;Du!==i&&(Du=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function e1(t=Fa()){const e=os(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Nw(t,{popupRedirectResolver:Kb,persistence:[ib,zw,Pd]}),s=Rf("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(s,location.origin);if(location.origin===o.origin){const a=Zb(o.toString());Bw(n,a,()=>a(n.currentUser)),$w(n,c=>a(c))}}const i=Af("auth");return i&&xw(n,`http://${i}`),n}function t1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Rw({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const o=Rt("internal-error");o.customData=i,n(o)},s.type="text/javascript",s.charset="UTF-8",t1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Xb("Browser");var xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tl;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,v){function m(){}m.prototype=v.prototype,S.D=v.prototype,S.prototype=new m,S.prototype.constructor=S,S.C=function(E,A,I){for(var w=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)w[Ie-2]=arguments[Ie];return v.prototype[A].apply(E,w)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,v,m){m||(m=0);var E=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)E[A]=v.charCodeAt(m++)|v.charCodeAt(m++)<<8|v.charCodeAt(m++)<<16|v.charCodeAt(m++)<<24;else for(A=0;16>A;++A)E[A]=v[m++]|v[m++]<<8|v[m++]<<16|v[m++]<<24;v=S.g[0],m=S.g[1],A=S.g[2];var I=S.g[3],w=v+(I^m&(A^I))+E[0]+3614090360&4294967295;v=m+(w<<7&4294967295|w>>>25),w=I+(A^v&(m^A))+E[1]+3905402710&4294967295,I=v+(w<<12&4294967295|w>>>20),w=A+(m^I&(v^m))+E[2]+606105819&4294967295,A=I+(w<<17&4294967295|w>>>15),w=m+(v^A&(I^v))+E[3]+3250441966&4294967295,m=A+(w<<22&4294967295|w>>>10),w=v+(I^m&(A^I))+E[4]+4118548399&4294967295,v=m+(w<<7&4294967295|w>>>25),w=I+(A^v&(m^A))+E[5]+1200080426&4294967295,I=v+(w<<12&4294967295|w>>>20),w=A+(m^I&(v^m))+E[6]+2821735955&4294967295,A=I+(w<<17&4294967295|w>>>15),w=m+(v^A&(I^v))+E[7]+4249261313&4294967295,m=A+(w<<22&4294967295|w>>>10),w=v+(I^m&(A^I))+E[8]+1770035416&4294967295,v=m+(w<<7&4294967295|w>>>25),w=I+(A^v&(m^A))+E[9]+2336552879&4294967295,I=v+(w<<12&4294967295|w>>>20),w=A+(m^I&(v^m))+E[10]+4294925233&4294967295,A=I+(w<<17&4294967295|w>>>15),w=m+(v^A&(I^v))+E[11]+2304563134&4294967295,m=A+(w<<22&4294967295|w>>>10),w=v+(I^m&(A^I))+E[12]+1804603682&4294967295,v=m+(w<<7&4294967295|w>>>25),w=I+(A^v&(m^A))+E[13]+4254626195&4294967295,I=v+(w<<12&4294967295|w>>>20),w=A+(m^I&(v^m))+E[14]+2792965006&4294967295,A=I+(w<<17&4294967295|w>>>15),w=m+(v^A&(I^v))+E[15]+1236535329&4294967295,m=A+(w<<22&4294967295|w>>>10),w=v+(A^I&(m^A))+E[1]+4129170786&4294967295,v=m+(w<<5&4294967295|w>>>27),w=I+(m^A&(v^m))+E[6]+3225465664&4294967295,I=v+(w<<9&4294967295|w>>>23),w=A+(v^m&(I^v))+E[11]+643717713&4294967295,A=I+(w<<14&4294967295|w>>>18),w=m+(I^v&(A^I))+E[0]+3921069994&4294967295,m=A+(w<<20&4294967295|w>>>12),w=v+(A^I&(m^A))+E[5]+3593408605&4294967295,v=m+(w<<5&4294967295|w>>>27),w=I+(m^A&(v^m))+E[10]+38016083&4294967295,I=v+(w<<9&4294967295|w>>>23),w=A+(v^m&(I^v))+E[15]+3634488961&4294967295,A=I+(w<<14&4294967295|w>>>18),w=m+(I^v&(A^I))+E[4]+3889429448&4294967295,m=A+(w<<20&4294967295|w>>>12),w=v+(A^I&(m^A))+E[9]+568446438&4294967295,v=m+(w<<5&4294967295|w>>>27),w=I+(m^A&(v^m))+E[14]+3275163606&4294967295,I=v+(w<<9&4294967295|w>>>23),w=A+(v^m&(I^v))+E[3]+4107603335&4294967295,A=I+(w<<14&4294967295|w>>>18),w=m+(I^v&(A^I))+E[8]+1163531501&4294967295,m=A+(w<<20&4294967295|w>>>12),w=v+(A^I&(m^A))+E[13]+2850285829&4294967295,v=m+(w<<5&4294967295|w>>>27),w=I+(m^A&(v^m))+E[2]+4243563512&4294967295,I=v+(w<<9&4294967295|w>>>23),w=A+(v^m&(I^v))+E[7]+1735328473&4294967295,A=I+(w<<14&4294967295|w>>>18),w=m+(I^v&(A^I))+E[12]+2368359562&4294967295,m=A+(w<<20&4294967295|w>>>12),w=v+(m^A^I)+E[5]+4294588738&4294967295,v=m+(w<<4&4294967295|w>>>28),w=I+(v^m^A)+E[8]+2272392833&4294967295,I=v+(w<<11&4294967295|w>>>21),w=A+(I^v^m)+E[11]+1839030562&4294967295,A=I+(w<<16&4294967295|w>>>16),w=m+(A^I^v)+E[14]+4259657740&4294967295,m=A+(w<<23&4294967295|w>>>9),w=v+(m^A^I)+E[1]+2763975236&4294967295,v=m+(w<<4&4294967295|w>>>28),w=I+(v^m^A)+E[4]+1272893353&4294967295,I=v+(w<<11&4294967295|w>>>21),w=A+(I^v^m)+E[7]+4139469664&4294967295,A=I+(w<<16&4294967295|w>>>16),w=m+(A^I^v)+E[10]+3200236656&4294967295,m=A+(w<<23&4294967295|w>>>9),w=v+(m^A^I)+E[13]+681279174&4294967295,v=m+(w<<4&4294967295|w>>>28),w=I+(v^m^A)+E[0]+3936430074&4294967295,I=v+(w<<11&4294967295|w>>>21),w=A+(I^v^m)+E[3]+3572445317&4294967295,A=I+(w<<16&4294967295|w>>>16),w=m+(A^I^v)+E[6]+76029189&4294967295,m=A+(w<<23&4294967295|w>>>9),w=v+(m^A^I)+E[9]+3654602809&4294967295,v=m+(w<<4&4294967295|w>>>28),w=I+(v^m^A)+E[12]+3873151461&4294967295,I=v+(w<<11&4294967295|w>>>21),w=A+(I^v^m)+E[15]+530742520&4294967295,A=I+(w<<16&4294967295|w>>>16),w=m+(A^I^v)+E[2]+3299628645&4294967295,m=A+(w<<23&4294967295|w>>>9),w=v+(A^(m|~I))+E[0]+4096336452&4294967295,v=m+(w<<6&4294967295|w>>>26),w=I+(m^(v|~A))+E[7]+1126891415&4294967295,I=v+(w<<10&4294967295|w>>>22),w=A+(v^(I|~m))+E[14]+2878612391&4294967295,A=I+(w<<15&4294967295|w>>>17),w=m+(I^(A|~v))+E[5]+4237533241&4294967295,m=A+(w<<21&4294967295|w>>>11),w=v+(A^(m|~I))+E[12]+1700485571&4294967295,v=m+(w<<6&4294967295|w>>>26),w=I+(m^(v|~A))+E[3]+2399980690&4294967295,I=v+(w<<10&4294967295|w>>>22),w=A+(v^(I|~m))+E[10]+4293915773&4294967295,A=I+(w<<15&4294967295|w>>>17),w=m+(I^(A|~v))+E[1]+2240044497&4294967295,m=A+(w<<21&4294967295|w>>>11),w=v+(A^(m|~I))+E[8]+1873313359&4294967295,v=m+(w<<6&4294967295|w>>>26),w=I+(m^(v|~A))+E[15]+4264355552&4294967295,I=v+(w<<10&4294967295|w>>>22),w=A+(v^(I|~m))+E[6]+2734768916&4294967295,A=I+(w<<15&4294967295|w>>>17),w=m+(I^(A|~v))+E[13]+1309151649&4294967295,m=A+(w<<21&4294967295|w>>>11),w=v+(A^(m|~I))+E[4]+4149444226&4294967295,v=m+(w<<6&4294967295|w>>>26),w=I+(m^(v|~A))+E[11]+3174756917&4294967295,I=v+(w<<10&4294967295|w>>>22),w=A+(v^(I|~m))+E[2]+718787259&4294967295,A=I+(w<<15&4294967295|w>>>17),w=m+(I^(A|~v))+E[9]+3951481745&4294967295,S.g[0]=S.g[0]+v&4294967295,S.g[1]=S.g[1]+(A+(w<<21&4294967295|w>>>11))&4294967295,S.g[2]=S.g[2]+A&4294967295,S.g[3]=S.g[3]+I&4294967295}s.prototype.u=function(S,v){v===void 0&&(v=S.length);for(var m=v-this.blockSize,E=this.B,A=this.h,I=0;I<v;){if(A==0)for(;I<=m;)i(this,S,I),I+=this.blockSize;if(typeof S=="string"){for(;I<v;)if(E[A++]=S.charCodeAt(I++),A==this.blockSize){i(this,E),A=0;break}}else for(;I<v;)if(E[A++]=S[I++],A==this.blockSize){i(this,E),A=0;break}}this.h=A,this.o+=v},s.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var v=1;v<S.length-8;++v)S[v]=0;var m=8*this.o;for(v=S.length-8;v<S.length;++v)S[v]=m&255,m/=256;for(this.u(S),S=Array(16),v=m=0;4>v;++v)for(var E=0;32>E;E+=8)S[m++]=this.g[v]>>>E&255;return S};function o(S,v){var m=c;return Object.prototype.hasOwnProperty.call(m,S)?m[S]:m[S]=v(S)}function a(S,v){this.h=v;for(var m=[],E=!0,A=S.length-1;0<=A;A--){var I=S[A]|0;E&&I==v||(m[A]=I,E=!1)}this.g=m}var c={};function u(S){return-128<=S&&128>S?o(S,function(v){return new a([v|0],0>v?-1:0)}):new a([S|0],0>S?-1:0)}function f(S){if(isNaN(S)||!isFinite(S))return g;if(0>S)return z(f(-S));for(var v=[],m=1,E=0;S>=m;E++)v[E]=S/m|0,m*=4294967296;return new a(v,0)}function d(S,v){if(S.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S.charAt(0)=="-")return z(d(S.substring(1),v));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(v,8)),E=g,A=0;A<S.length;A+=8){var I=Math.min(8,S.length-A),w=parseInt(S.substring(A,A+I),v);8>I?(I=f(Math.pow(v,I)),E=E.j(I).add(f(w))):(E=E.j(m),E=E.add(f(w)))}return E}var g=u(0),y=u(1),T=u(16777216);t=a.prototype,t.m=function(){if(U(this))return-z(this).m();for(var S=0,v=1,m=0;m<this.g.length;m++){var E=this.i(m);S+=(0<=E?E:4294967296+E)*v,v*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(P(this))return"0";if(U(this))return"-"+z(this).toString(S);for(var v=f(Math.pow(S,6)),m=this,E="";;){var A=B(m,v).g;m=q(m,A.j(v));var I=((0<m.g.length?m.g[0]:m.h)>>>0).toString(S);if(m=A,P(m))return I+E;for(;6>I.length;)I="0"+I;E=I+E}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function P(S){if(S.h!=0)return!1;for(var v=0;v<S.g.length;v++)if(S.g[v]!=0)return!1;return!0}function U(S){return S.h==-1}t.l=function(S){return S=q(this,S),U(S)?-1:P(S)?0:1};function z(S){for(var v=S.g.length,m=[],E=0;E<v;E++)m[E]=~S.g[E];return new a(m,~S.h).add(y)}t.abs=function(){return U(this)?z(this):this},t.add=function(S){for(var v=Math.max(this.g.length,S.g.length),m=[],E=0,A=0;A<=v;A++){var I=E+(this.i(A)&65535)+(S.i(A)&65535),w=(I>>>16)+(this.i(A)>>>16)+(S.i(A)>>>16);E=w>>>16,I&=65535,w&=65535,m[A]=w<<16|I}return new a(m,m[m.length-1]&-2147483648?-1:0)};function q(S,v){return S.add(z(v))}t.j=function(S){if(P(this)||P(S))return g;if(U(this))return U(S)?z(this).j(z(S)):z(z(this).j(S));if(U(S))return z(this.j(z(S)));if(0>this.l(T)&&0>S.l(T))return f(this.m()*S.m());for(var v=this.g.length+S.g.length,m=[],E=0;E<2*v;E++)m[E]=0;for(E=0;E<this.g.length;E++)for(var A=0;A<S.g.length;A++){var I=this.i(E)>>>16,w=this.i(E)&65535,Ie=S.i(A)>>>16,xe=S.i(A)&65535;m[2*E+2*A]+=w*xe,j(m,2*E+2*A),m[2*E+2*A+1]+=I*xe,j(m,2*E+2*A+1),m[2*E+2*A+1]+=w*Ie,j(m,2*E+2*A+1),m[2*E+2*A+2]+=I*Ie,j(m,2*E+2*A+2)}for(E=0;E<v;E++)m[E]=m[2*E+1]<<16|m[2*E];for(E=v;E<2*v;E++)m[E]=0;return new a(m,0)};function j(S,v){for(;(S[v]&65535)!=S[v];)S[v+1]+=S[v]>>>16,S[v]&=65535,v++}function H(S,v){this.g=S,this.h=v}function B(S,v){if(P(v))throw Error("division by zero");if(P(S))return new H(g,g);if(U(S))return v=B(z(S),v),new H(z(v.g),z(v.h));if(U(v))return v=B(S,z(v)),new H(z(v.g),v.h);if(30<S.g.length){if(U(S)||U(v))throw Error("slowDivide_ only works with positive integers.");for(var m=y,E=v;0>=E.l(S);)m=Z(m),E=Z(E);var A=J(m,1),I=J(E,1);for(E=J(E,2),m=J(m,2);!P(E);){var w=I.add(E);0>=w.l(S)&&(A=A.add(m),I=w),E=J(E,1),m=J(m,1)}return v=q(S,A.j(v)),new H(A,v)}for(A=g;0<=S.l(v);){for(m=Math.max(1,Math.floor(S.m()/v.m())),E=Math.ceil(Math.log(m)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),I=f(m),w=I.j(v);U(w)||0<w.l(S);)m-=E,I=f(m),w=I.j(v);P(I)&&(I=y),A=A.add(I),S=q(S,w)}return new H(A,S)}t.A=function(S){return B(this,S).h},t.and=function(S){for(var v=Math.max(this.g.length,S.g.length),m=[],E=0;E<v;E++)m[E]=this.i(E)&S.i(E);return new a(m,this.h&S.h)},t.or=function(S){for(var v=Math.max(this.g.length,S.g.length),m=[],E=0;E<v;E++)m[E]=this.i(E)|S.i(E);return new a(m,this.h|S.h)},t.xor=function(S){for(var v=Math.max(this.g.length,S.g.length),m=[],E=0;E<v;E++)m[E]=this.i(E)^S.i(E);return new a(m,this.h^S.h)};function Z(S){for(var v=S.g.length+1,m=[],E=0;E<v;E++)m[E]=S.i(E)<<1|S.i(E-1)>>>31;return new a(m,S.h)}function J(S,v){var m=v>>5;v%=32;for(var E=S.g.length-m,A=[],I=0;I<E;I++)A[I]=0<v?S.i(I+m)>>>v|S.i(I+m+1)<<32-v:S.i(I+m);return new a(A,S.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,tl=a}).apply(typeof xu<"u"?xu:typeof self<"u"?self:typeof window<"u"?window:{});var Zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,l,h){return r==Array.prototype||r==Object.prototype||(r[l]=h.value),r};function n(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zi=="object"&&Zi];for(var l=0;l<r.length;++l){var h=r[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=n(this);function i(r,l){if(l)e:{var h=s;r=r.split(".");for(var p=0;p<r.length-1;p++){var R=r[p];if(!(R in h))break e;h=h[R]}r=r[r.length-1],p=h[r],l=l(p),l!=p&&l!=null&&e(h,r,{configurable:!0,writable:!0,value:l})}}function o(r,l){r instanceof String&&(r+="");var h=0,p=!1,R={next:function(){if(!p&&h<r.length){var k=h++;return{value:l(k,r[k]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(r){return r||function(){return o(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(r){var l=typeof r;return l=l!="object"?l:r?Array.isArray(r)?"array":l:"null",l=="array"||l=="object"&&typeof r.length=="number"}function f(r){var l=typeof r;return l=="object"&&r!=null||l=="function"}function d(r,l,h){return r.call.apply(r.bind,arguments)}function g(r,l,h){if(!r)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),r.apply(l,R)}}return function(){return r.apply(l,arguments)}}function y(r,l,h){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,y.apply(null,arguments)}function T(r,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),r.apply(this,p)}}function P(r,l){function h(){}h.prototype=l.prototype,r.aa=l.prototype,r.prototype=new h,r.prototype.constructor=r,r.Qb=function(p,R,k){for(var $=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)$[Ee-2]=arguments[Ee];return l.prototype[R].apply(p,$)}}function U(r){const l=r.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=r[p];return h}return[]}function z(r,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const R=r.length||0,k=p.length||0;r.length=R+k;for(let $=0;$<k;$++)r[R+$]=p[$]}else r.push(p)}}class q{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function j(r){return/^[\s\xa0]*$/.test(r)}function H(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function B(r){return B[" "](r),r}B[" "]=function(){};var Z=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function J(r,l,h){for(const p in r)l.call(h,r[p],p,r)}function S(r,l){for(const h in r)l.call(void 0,r[h],h,r)}function v(r){const l={};for(const h in r)l[h]=r[h];return l}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(r,l){let h,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(h in p)r[h]=p[h];for(let k=0;k<m.length;k++)h=m[k],Object.prototype.hasOwnProperty.call(p,h)&&(r[h]=p[h])}}function A(r){var l=1;r=r.split(":");const h=[];for(;0<l&&r.length;)h.push(r.shift()),l--;return r.length&&h.push(r.join(":")),h}function I(r){c.setTimeout(()=>{throw r},0)}function w(){var r=lt;let l=null;return r.g&&(l=r.g,r.g=r.g.next,r.g||(r.h=null),l.next=null),l}class Ie{constructor(){this.h=this.g=null}add(l,h){const p=xe.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var xe=new q(()=>new Re,r=>r.reset());class Re{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,le=!1,lt=new Ie,wt=()=>{const r=c.Promise.resolve(void 0);ce=()=>{r.then(ft)}};var ft=()=>{for(var r;r=w();){try{r.h.call(r.g)}catch(h){I(h)}var l=xe;l.j(r),100>l.h&&(l.h++,r.next=l.g,l.g=r)}le=!1};function ke(){this.s=this.s,this.C=this.C}ke.prototype.s=!1,ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(r,l){this.type=r,this.g=this.target=l,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var un=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,l=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return r}();function xt(r,l){if(Pe.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var h=this.type=r.type,p=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=l,l=r.relatedTarget){if(Z){e:{try{B(l.nodeName);var R=!0;break e}catch{}R=!1}R||(l=null)}}else h=="mouseover"?l=r.fromElement:h=="mouseout"&&(l=r.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:nt[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&xt.aa.h.call(this)}}P(xt,Pe);var nt={2:"touch",3:"pen",4:"mouse"};xt.prototype.h=function(){xt.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),X=0;function K(r,l,h,p,R){this.listener=r,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=R,this.key=++X,this.da=this.fa=!1}function Y(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function pe(r){this.src=r,this.g={},this.h=0}pe.prototype.add=function(r,l,h,p,R){var k=r.toString();r=this.g[k],r||(r=this.g[k]=[],this.h++);var $=b(r,l,p,R);return-1<$?(l=r[$],h||(l.fa=!1)):(l=new K(l,this.src,k,!!p,R),l.fa=h,r.push(l)),l};function _(r,l){var h=l.type;if(h in r.g){var p=r.g[h],R=Array.prototype.indexOf.call(p,l,void 0),k;(k=0<=R)&&Array.prototype.splice.call(p,R,1),k&&(Y(l),r.g[h].length==0&&(delete r.g[h],r.h--))}}function b(r,l,h,p){for(var R=0;R<r.length;++R){var k=r[R];if(!k.da&&k.listener==l&&k.capture==!!h&&k.ha==p)return R}return-1}var C="closure_lm_"+(1e6*Math.random()|0),N={};function L(r,l,h,p,R){if(Array.isArray(l)){for(var k=0;k<l.length;k++)L(r,l[k],h,p,R);return null}return h=se(h),r&&r[O]?r.K(l,h,f(p)?!!p.capture:!1,R):D(r,l,h,!1,p,R)}function D(r,l,h,p,R,k){if(!l)throw Error("Invalid event type");var $=f(R)?!!R.capture:!!R,Ee=W(r);if(Ee||(r[C]=Ee=new pe(r)),h=Ee.add(l,h,p,$,k),h.proxy)return h;if(p=G(),h.proxy=p,p.src=r,p.listener=h,r.addEventListener)un||(R=$),R===void 0&&(R=!1),r.addEventListener(l.toString(),p,R);else if(r.attachEvent)r.attachEvent(M(l.toString()),p);else if(r.addListener&&r.removeListener)r.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function G(){function r(h){return l.call(r.src,r.listener,h)}const l=ee;return r}function V(r,l,h,p,R){if(Array.isArray(l))for(var k=0;k<l.length;k++)V(r,l[k],h,p,R);else p=f(p)?!!p.capture:!!p,h=se(h),r&&r[O]?(r=r.i,l=String(l).toString(),l in r.g&&(k=r.g[l],h=b(k,h,p,R),-1<h&&(Y(k[h]),Array.prototype.splice.call(k,h,1),k.length==0&&(delete r.g[l],r.h--)))):r&&(r=W(r))&&(l=r.g[l.toString()],r=-1,l&&(r=b(l,h,p,R)),(h=-1<r?l[r]:null)&&F(h))}function F(r){if(typeof r!="number"&&r&&!r.da){var l=r.src;if(l&&l[O])_(l.i,r);else{var h=r.type,p=r.proxy;l.removeEventListener?l.removeEventListener(h,p,r.capture):l.detachEvent?l.detachEvent(M(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=W(l))?(_(h,r),h.h==0&&(h.src=null,l[C]=null)):Y(r)}}}function M(r){return r in N?N[r]:N[r]="on"+r}function ee(r,l){if(r.da)r=!0;else{l=new xt(l,this);var h=r.listener,p=r.ha||r.src;r.fa&&F(r),r=h.call(p,l)}return r}function W(r){return r=r[C],r instanceof pe?r:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(r){return typeof r=="function"?r:(r[Q]||(r[Q]=function(l){return r.handleEvent(l)}),r[Q])}function te(){ke.call(this),this.i=new pe(this),this.M=this,this.F=null}P(te,ke),te.prototype[O]=!0,te.prototype.removeEventListener=function(r,l,h,p){V(this,r,l,h,p)};function oe(r,l){var h,p=r.F;if(p)for(h=[];p;p=p.F)h.push(p);if(r=r.M,p=l.type||l,typeof l=="string")l=new Pe(l,r);else if(l instanceof Pe)l.target=l.target||r;else{var R=l;l=new Pe(p,r),E(l,R)}if(R=!0,h)for(var k=h.length-1;0<=k;k--){var $=l.g=h[k];R=ue($,p,!0,l)&&R}if($=l.g=r,R=ue($,p,!0,l)&&R,R=ue($,p,!1,l)&&R,h)for(k=0;k<h.length;k++)$=l.g=h[k],R=ue($,p,!1,l)&&R}te.prototype.N=function(){if(te.aa.N.call(this),this.i){var r=this.i,l;for(l in r.g){for(var h=r.g[l],p=0;p<h.length;p++)Y(h[p]);delete r.g[l],r.h--}}this.F=null},te.prototype.K=function(r,l,h,p){return this.i.add(String(r),l,!1,h,p)},te.prototype.L=function(r,l,h,p){return this.i.add(String(r),l,!0,h,p)};function ue(r,l,h,p){if(l=r.i.g[String(l)],!l)return!0;l=l.concat();for(var R=!0,k=0;k<l.length;++k){var $=l[k];if($&&!$.da&&$.capture==h){var Ee=$.listener,$e=$.ha||$.src;$.fa&&_(r.i,$),R=Ee.call($e,p)!==!1&&R}}return R&&!p.defaultPrevented}function Fe(r,l,h){if(typeof r=="function")h&&(r=y(r,h));else if(r&&typeof r.handleEvent=="function")r=y(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(r,l||0)}function je(r){r.g=Fe(()=>{r.g=null,r.i&&(r.i=!1,je(r))},r.l);const l=r.h;r.h=null,r.m.apply(null,l)}class dt extends ke{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:je(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function We(r){ke.call(this),this.h=r,this.g={}}P(We,ke);var hn=[];function Ns(r){J(r.g,function(l,h){this.g.hasOwnProperty(h)&&F(l)},r),r.g={}}We.prototype.N=function(){We.aa.N.call(this),Ns(this)},We.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ve=c.JSON.stringify,pt=c.JSON.parse,Li=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function Yr(){}Yr.prototype.h=null;function al(r){return r.h||(r.h=r.i())}function zd(){}var Ds={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qr(){Pe.call(this,"d")}P(Qr,Pe);function Zr(){Pe.call(this,"c")}P(Zr,Pe);var as={},ll=null;function eo(){return ll=ll||new te}as.La="serverreachability";function cl(r){Pe.call(this,as.La,r)}P(cl,Pe);function xs(r){const l=eo();oe(l,new cl(l))}as.STAT_EVENT="statevent";function ul(r,l){Pe.call(this,as.STAT_EVENT,r),this.stat=l}P(ul,Pe);function Je(r){const l=eo();oe(l,new ul(l,r))}as.Ma="timingevent";function hl(r,l){Pe.call(this,as.Ma,r),this.size=l}P(hl,Pe);function Ls(r,l){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},l)}function Ms(){this.g=!0}Ms.prototype.xa=function(){this.g=!1};function Kd(r,l,h,p,R,k){r.info(function(){if(r.g)if(k)for(var $="",Ee=k.split("&"),$e=0;$e<Ee.length;$e++){var ge=Ee[$e].split("=");if(1<ge.length){var Ge=ge[0];ge=ge[1];var ze=Ge.split("_");$=2<=ze.length&&ze[1]=="type"?$+(Ge+"="+ge+"&"):$+(Ge+"=redacted&")}}else $=null;else $=k;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+l+`
`+h+`
`+$})}function qd(r,l,h,p,R,k,$){r.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+l+`
`+h+`
`+k+" "+$})}function ls(r,l,h,p){r.info(function(){return"XMLHTTP TEXT ("+l+"): "+Xd(r,h)+(p?" "+p:"")})}function Jd(r,l){r.info(function(){return"TIMEOUT: "+l})}Ms.prototype.info=function(){};function Xd(r,l){if(!r.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(r=0;r<h.length;r++)if(Array.isArray(h[r])){var p=h[r];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var k=R[0];if(k!="noop"&&k!="stop"&&k!="close")for(var $=1;$<R.length;$++)R[$]=""}}}}return Ve(h)}catch{return l}}var to={NO_ERROR:0,TIMEOUT:8},Yd={},no;function Mi(){}P(Mi,Yr),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},no=new Mi;function fn(r,l,h,p){this.j=r,this.i=l,this.l=h,this.R=p||1,this.U=new We(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fl}function fl(){this.i=null,this.g="",this.h=!1}var dl={},so={};function io(r,l,h){r.L=1,r.v=Vi(Gt(l)),r.m=h,r.P=!0,pl(r,null)}function pl(r,l){r.F=Date.now(),Ui(r),r.A=Gt(r.v);var h=r.A,p=r.R;Array.isArray(p)||(p=[String(p)]),Rl(h.i,"t",p),r.C=0,h=r.j.J,r.h=new fl,r.g=zl(r.j,h?l:null,!r.m),0<r.O&&(r.M=new dt(y(r.Y,r,r.g),r.O)),l=r.U,h=r.g,p=r.ca;var R="readystatechange";Array.isArray(R)||(R&&(hn[0]=R.toString()),R=hn);for(var k=0;k<R.length;k++){var $=L(h,R[k],p||l.handleEvent,!1,l.h||l);if(!$)break;l.g[$.key]=$}l=r.H?v(r.H):{},r.m?(r.u||(r.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,l)):(r.u="GET",r.g.ea(r.A,r.u,null,l)),xs(),Kd(r.i,r.u,r.A,r.l,r.R,r.m)}fn.prototype.ca=function(r){r=r.target;const l=this.M;l&&zt(r)==3?l.j():this.Y(r)},fn.prototype.Y=function(r){try{if(r==this.g)e:{const ze=zt(this.g);var l=this.g.Ba();const hs=this.g.Z();if(!(3>ze)&&(ze!=3||this.g&&(this.h.h||this.g.oa()||Ll(this.g)))){this.J||ze!=4||l==7||(l==8||0>=hs?xs(3):xs(2)),ro(this);var h=this.g.Z();this.X=h;t:if(gl(this)){var p=Ll(this.g);r="";var R=p.length,k=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xn(this),Us(this);var $="";break t}this.h.i=new c.TextDecoder}for(l=0;l<R;l++)this.h.h=!0,r+=this.h.i.decode(p[l],{stream:!(k&&l==R-1)});p.length=0,this.h.g+=r,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=h==200,qd(this.i,this.u,this.A,this.l,this.R,ze,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Ee,$e=this.g;if((Ee=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Ee)){var ge=Ee;break t}}ge=null}if(h=ge)ls(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oo(this,h);else{this.o=!1,this.s=3,Je(12),xn(this),Us(this);break e}}if(this.P){h=!0;let bt;for(;!this.J&&this.C<$.length;)if(bt=Qd(this,$),bt==so){ze==4&&(this.s=4,Je(14),h=!1),ls(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==dl){this.s=4,Je(15),ls(this.i,this.l,$,"[Invalid Chunk]"),h=!1;break}else ls(this.i,this.l,bt,null),oo(this,bt);if(gl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ze!=4||$.length!=0||this.h.h||(this.s=1,Je(16),h=!1),this.o=this.o&&h,!h)ls(this.i,this.l,$,"[Invalid Chunked Response]"),xn(this),Us(this);else if(0<$.length&&!this.W){this.W=!0;var Ge=this.j;Ge.g==this&&Ge.ba&&!Ge.M&&(Ge.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),fo(Ge),Ge.M=!0,Je(11))}}else ls(this.i,this.l,$,null),oo(this,$);ze==4&&xn(this),this.o&&!this.J&&(ze==4?Bl(this.j,this):(this.o=!1,Ui(this)))}else gp(this.g),h==400&&0<$.indexOf("Unknown SID")?(this.s=3,Je(12)):(this.s=0,Je(13)),xn(this),Us(this)}}}catch{}finally{}};function gl(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Qd(r,l){var h=r.C,p=l.indexOf(`
`,h);return p==-1?so:(h=Number(l.substring(h,p)),isNaN(h)?dl:(p+=1,p+h>l.length?so:(l=l.slice(p,p+h),r.C=p+h,l)))}fn.prototype.cancel=function(){this.J=!0,xn(this)};function Ui(r){r.S=Date.now()+r.I,ml(r,r.I)}function ml(r,l){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Ls(y(r.ba,r),l)}function ro(r){r.B&&(c.clearTimeout(r.B),r.B=null)}fn.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Jd(this.i,this.A),this.L!=2&&(xs(),Je(17)),xn(this),this.s=2,Us(this)):ml(this,this.S-r)};function Us(r){r.j.G==0||r.J||Bl(r.j,r)}function xn(r){ro(r);var l=r.M;l&&typeof l.ma=="function"&&l.ma(),r.M=null,Ns(r.U),r.g&&(l=r.g,r.g=null,l.abort(),l.ma())}function oo(r,l){try{var h=r.j;if(h.G!=0&&(h.g==r||ao(h.h,r))){if(!r.K&&ao(h.h,r)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<r.F)zi(h),Wi(h);else break e;ho(h),Je(18)}}else h.za=R[1],0<h.za-h.T&&37500>R[2]&&h.F&&h.v==0&&!h.C&&(h.C=Ls(y(h.Za,h),6e3));if(1>=_l(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Mn(h,11)}else if((r.K||h.g==r)&&zi(h),!j(l))for(R=h.Da.g.parse(l),l=0;l<R.length;l++){let ge=R[l];if(h.T=ge[0],ge=ge[1],h.G==2)if(ge[0]=="c"){h.K=ge[1],h.ia=ge[2];const Ge=ge[3];Ge!=null&&(h.la=Ge,h.j.info("VER="+h.la));const ze=ge[4];ze!=null&&(h.Aa=ze,h.j.info("SVER="+h.Aa));const hs=ge[5];hs!=null&&typeof hs=="number"&&0<hs&&(p=1.5*hs,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const bt=r.g;if(bt){const Ki=bt.g?bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ki){var k=p.h;k.g||Ki.indexOf("spdy")==-1&&Ki.indexOf("quic")==-1&&Ki.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(lo(k,k.h),k.h=null))}if(p.D){const po=bt.g?bt.g.getResponseHeader("X-HTTP-Session-Id"):null;po&&(p.ya=po,Ae(p.I,p.D,po))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-r.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var $=r;if(p.qa=Gl(p,p.J?p.ia:null,p.W),$.K){wl(p.h,$);var Ee=$,$e=p.L;$e&&(Ee.I=$e),Ee.B&&(ro(Ee),Ui(Ee)),p.g=$}else Vl(p);0<h.i.length&&Gi(h)}else ge[0]!="stop"&&ge[0]!="close"||Mn(h,7);else h.G==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?Mn(h,7):uo(h):ge[0]!="noop"&&h.l&&h.l.ta(ge),h.v=0)}}xs(4)}catch{}}var Zd=class{constructor(r,l){this.g=r,this.map=l}};function vl(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yl(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function _l(r){return r.h?1:r.g?r.g.size:0}function ao(r,l){return r.h?r.h==l:r.g?r.g.has(l):!1}function lo(r,l){r.g?r.g.add(l):r.h=l}function wl(r,l){r.h&&r.h==l?r.h=null:r.g&&r.g.has(l)&&r.g.delete(l)}vl.prototype.cancel=function(){if(this.i=bl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function bl(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let l=r.i;for(const h of r.g.values())l=l.concat(h.D);return l}return U(r.i)}function ep(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(u(r)){for(var l=[],h=r.length,p=0;p<h;p++)l.push(r[p]);return l}l=[],h=0;for(p in r)l[h++]=r[p];return l}function tp(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(u(r)||typeof r=="string"){var l=[];r=r.length;for(var h=0;h<r;h++)l.push(h);return l}l=[],h=0;for(const p in r)l[h++]=p;return l}}}function Il(r,l){if(r.forEach&&typeof r.forEach=="function")r.forEach(l,void 0);else if(u(r)||typeof r=="string")Array.prototype.forEach.call(r,l,void 0);else for(var h=tp(r),p=ep(r),R=p.length,k=0;k<R;k++)l.call(void 0,p[k],h&&h[k],r)}var El=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function np(r,l){if(r){r=r.split("&");for(var h=0;h<r.length;h++){var p=r[h].indexOf("="),R=null;if(0<=p){var k=r[h].substring(0,p);R=r[h].substring(p+1)}else k=r[h];l(k,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Ln(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Ln){this.h=r.h,Fi(this,r.j),this.o=r.o,this.g=r.g,ji(this,r.s),this.l=r.l;var l=r.i,h=new Vs;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Tl(this,h),this.m=r.m}else r&&(l=String(r).match(El))?(this.h=!1,Fi(this,l[1]||"",!0),this.o=Fs(l[2]||""),this.g=Fs(l[3]||"",!0),ji(this,l[4]),this.l=Fs(l[5]||"",!0),Tl(this,l[6]||"",!0),this.m=Fs(l[7]||"")):(this.h=!1,this.i=new Vs(null,this.h))}Ln.prototype.toString=function(){var r=[],l=this.j;l&&r.push(js(l,Sl,!0),":");var h=this.g;return(h||l=="file")&&(r.push("//"),(l=this.o)&&r.push(js(l,Sl,!0),"@"),r.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&r.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&r.push("/"),r.push(js(h,h.charAt(0)=="/"?rp:ip,!0))),(h=this.i.toString())&&r.push("?",h),(h=this.m)&&r.push("#",js(h,ap)),r.join("")};function Gt(r){return new Ln(r)}function Fi(r,l,h){r.j=h?Fs(l,!0):l,r.j&&(r.j=r.j.replace(/:$/,""))}function ji(r,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);r.s=l}else r.s=null}function Tl(r,l,h){l instanceof Vs?(r.i=l,lp(r.i,r.h)):(h||(l=js(l,op)),r.i=new Vs(l,r.h))}function Ae(r,l,h){r.i.set(l,h)}function Vi(r){return Ae(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Fs(r,l){return r?l?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function js(r,l,h){return typeof r=="string"?(r=encodeURI(r).replace(l,sp),h&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function sp(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Sl=/[#\/\?@]/g,ip=/[#\?:]/g,rp=/[#\?]/g,op=/[#\?@]/g,ap=/#/g;function Vs(r,l){this.h=this.g=null,this.i=r||null,this.j=!!l}function dn(r){r.g||(r.g=new Map,r.h=0,r.i&&np(r.i,function(l,h){r.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}t=Vs.prototype,t.add=function(r,l){dn(this),this.i=null,r=cs(this,r);var h=this.g.get(r);return h||this.g.set(r,h=[]),h.push(l),this.h+=1,this};function Al(r,l){dn(r),l=cs(r,l),r.g.has(l)&&(r.i=null,r.h-=r.g.get(l).length,r.g.delete(l))}function Cl(r,l){return dn(r),l=cs(r,l),r.g.has(l)}t.forEach=function(r,l){dn(this),this.g.forEach(function(h,p){h.forEach(function(R){r.call(l,R,p,this)},this)},this)},t.na=function(){dn(this);const r=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const R=r[p];for(let k=0;k<R.length;k++)h.push(l[p])}return h},t.V=function(r){dn(this);let l=[];if(typeof r=="string")Cl(this,r)&&(l=l.concat(this.g.get(cs(this,r))));else{r=Array.from(this.g.values());for(let h=0;h<r.length;h++)l=l.concat(r[h])}return l},t.set=function(r,l){return dn(this),this.i=null,r=cs(this,r),Cl(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[l]),this.h+=1,this},t.get=function(r,l){return r?(r=this.V(r),0<r.length?String(r[0]):l):l};function Rl(r,l,h){Al(r,l),0<h.length&&(r.i=null,r.g.set(cs(r,l),U(h)),r.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const k=encodeURIComponent(String(p)),$=this.V(p);for(p=0;p<$.length;p++){var R=k;$[p]!==""&&(R+="="+encodeURIComponent(String($[p]))),r.push(R)}}return this.i=r.join("&")};function cs(r,l){return l=String(l),r.j&&(l=l.toLowerCase()),l}function lp(r,l){l&&!r.j&&(dn(r),r.i=null,r.g.forEach(function(h,p){var R=p.toLowerCase();p!=R&&(Al(this,p),Rl(this,R,h))},r)),r.j=l}function cp(r,l){const h=new Ms;if(c.Image){const p=new Image;p.onload=T(pn,h,"TestLoadImage: loaded",!0,l,p),p.onerror=T(pn,h,"TestLoadImage: error",!1,l,p),p.onabort=T(pn,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=T(pn,h,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=r}else l(!1)}function up(r,l){const h=new Ms,p=new AbortController,R=setTimeout(()=>{p.abort(),pn(h,"TestPingServer: timeout",!1,l)},1e4);fetch(r,{signal:p.signal}).then(k=>{clearTimeout(R),k.ok?pn(h,"TestPingServer: ok",!0,l):pn(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(R),pn(h,"TestPingServer: error",!1,l)})}function pn(r,l,h,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(h)}catch{}}function hp(){this.g=new Li}function fp(r,l,h){const p=h||"";try{Il(r,function(R,k){let $=R;f(R)&&($=Ve(R)),l.push(p+k+"="+encodeURIComponent($))})}catch(R){throw l.push(p+"type="+encodeURIComponent("_badmap")),R}}function $i(r){this.l=r.Ub||null,this.j=r.eb||!1}P($i,Yr),$i.prototype.g=function(){return new Bi(this.l,this.j)},$i.prototype.i=function(r){return function(){return r}}({});function Bi(r,l){te.call(this),this.D=r,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Bi,te),t=Bi.prototype,t.open=function(r,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=l,this.readyState=1,Bs(this)},t.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(l.body=r),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$s(this)),this.readyState=0},t.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Bs(this)),this.g&&(this.readyState=3,Bs(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;kl(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function kl(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}t.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var l=r.value?r.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!r.done}))&&(this.response=this.responseText+=l)}r.done?$s(this):Bs(this),this.readyState==3&&kl(this)}},t.Ra=function(r){this.g&&(this.response=this.responseText=r,$s(this))},t.Qa=function(r){this.g&&(this.response=r,$s(this))},t.ga=function(){this.g&&$s(this)};function $s(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Bs(r)}t.setRequestHeader=function(r,l){this.u.append(r,l)},t.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,r.push(h[0]+": "+h[1]),h=l.next();return r.join(`\r
`)};function Bs(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Pl(r){let l="";return J(r,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function co(r,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Pl(h),typeof r=="string"?h!=null&&encodeURIComponent(String(h)):Ae(r,l,h))}function Oe(r){te.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Oe,te);var dp=/^https?$/i,pp=["POST","PUT"];t=Oe.prototype,t.Ha=function(r){this.J=r},t.ea=function(r,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);l=l?l.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():no.g(),this.v=this.o?al(this.o):al(no),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(l,String(r),!0),this.B=!1}catch(k){Ol(this,k);return}if(r=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)h.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const k of p.keys())h.set(k,p.get(k));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(k=>k.toLowerCase()=="content-type"),R=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(pp,l,void 0))||p||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,$]of h)this.g.setRequestHeader(k,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xl(this),this.u=!0,this.g.send(r),this.u=!1}catch(k){Ol(this,k)}};function Ol(r,l){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=l,r.m=5,Nl(r),Hi(r)}function Nl(r){r.A||(r.A=!0,oe(r,"complete"),oe(r,"error"))}t.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,oe(this,"complete"),oe(this,"abort"),Hi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hi(this,!0)),Oe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Dl(this):this.bb())},t.bb=function(){Dl(this)};function Dl(r){if(r.h&&typeof a<"u"&&(!r.v[1]||zt(r)!=4||r.Z()!=2)){if(r.u&&zt(r)==4)Fe(r.Ea,0,r);else if(oe(r,"readystatechange"),zt(r)==4){r.h=!1;try{const $=r.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=$===0){var R=String(r.D).match(El)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),p=!dp.test(R?R.toLowerCase():"")}h=p}if(h)oe(r,"complete"),oe(r,"success");else{r.m=6;try{var k=2<zt(r)?r.g.statusText:""}catch{k=""}r.l=k+" ["+r.Z()+"]",Nl(r)}}finally{Hi(r)}}}}function Hi(r,l){if(r.g){xl(r);const h=r.g,p=r.v[0]?()=>{}:null;r.g=null,r.v=null,l||oe(r,"ready");try{h.onreadystatechange=p}catch{}}}function xl(r){r.I&&(c.clearTimeout(r.I),r.I=null)}t.isActive=function(){return!!this.g};function zt(r){return r.g?r.g.readyState:0}t.Z=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(r){if(this.g){var l=this.g.responseText;return r&&l.indexOf(r)==0&&(l=l.substring(r.length)),pt(l)}};function Ll(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function gp(r){const l={};r=(r.g&&2<=zt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<r.length;p++){if(j(r[p]))continue;var h=A(r[p]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const k=l[R]||[];l[R]=k,k.push(h)}S(l,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hs(r,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[r]||l}function Ml(r){this.Aa=0,this.i=[],this.j=new Ms,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Hs("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Hs("baseRetryDelayMs",5e3,r),this.cb=Hs("retryDelaySeedMs",1e4,r),this.Wa=Hs("forwardChannelMaxRetries",2,r),this.wa=Hs("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new vl(r&&r.concurrentRequestLimit),this.Da=new hp,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ml.prototype,t.la=8,t.G=1,t.connect=function(r,l,h,p){Je(0),this.W=r,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Gl(this,null,this.W),Gi(this)};function uo(r){if(Ul(r),r.G==3){var l=r.U++,h=Gt(r.I);if(Ae(h,"SID",r.K),Ae(h,"RID",l),Ae(h,"TYPE","terminate"),Ws(r,h),l=new fn(r,r.j,l),l.L=2,l.v=Vi(Gt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=zl(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Ui(l)}Wl(r)}function Wi(r){r.g&&(fo(r),r.g.cancel(),r.g=null)}function Ul(r){Wi(r),r.u&&(c.clearTimeout(r.u),r.u=null),zi(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function Gi(r){if(!yl(r.h)&&!r.s){r.s=!0;var l=r.Ga;ce||wt(),le||(ce(),le=!0),lt.add(l,r),r.B=0}}function mp(r,l){return _l(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=l.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Ls(y(r.Ga,r,l),Hl(r,r.B)),r.B++,!0)}t.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const R=new fn(this,this.j,r);let k=this.o;if(this.S&&(k?(k=v(k),E(k,this.S)):k=this.S),this.m!==null||this.O||(R.H=k,k=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=jl(this,R,l),h=Gt(this.I),Ae(h,"RID",r),Ae(h,"CVER",22),this.D&&Ae(h,"X-HTTP-Session-Id",this.D),Ws(this,h),k&&(this.O?l="headers="+encodeURIComponent(String(Pl(k)))+"&"+l:this.m&&co(h,this.m,k)),lo(this.h,R),this.Ua&&Ae(h,"TYPE","init"),this.P?(Ae(h,"$req",l),Ae(h,"SID","null"),R.T=!0,io(R,h,null)):io(R,h,l),this.G=2}}else this.G==3&&(r?Fl(this,r):this.i.length==0||yl(this.h)||Fl(this))};function Fl(r,l){var h;l?h=l.l:h=r.U++;const p=Gt(r.I);Ae(p,"SID",r.K),Ae(p,"RID",h),Ae(p,"AID",r.T),Ws(r,p),r.m&&r.o&&co(p,r.m,r.o),h=new fn(r,r.j,h,r.B+1),r.m===null&&(h.H=r.o),l&&(r.i=l.D.concat(r.i)),l=jl(r,h,1e3),h.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),lo(r.h,h),io(h,p,l)}function Ws(r,l){r.H&&J(r.H,function(h,p){Ae(l,p,h)}),r.l&&Il({},function(h,p){Ae(l,p,h)})}function jl(r,l,h){h=Math.min(r.i.length,h);var p=r.l?y(r.l.Na,r.l,r):null;e:{var R=r.i;let k=-1;for(;;){const $=["count="+h];k==-1?0<h?(k=R[0].g,$.push("ofs="+k)):k=0:$.push("ofs="+k);let Ee=!0;for(let $e=0;$e<h;$e++){let ge=R[$e].g;const Ge=R[$e].map;if(ge-=k,0>ge)k=Math.max(0,R[$e].g-100),Ee=!1;else try{fp(Ge,$,"req"+ge+"_")}catch{p&&p(Ge)}}if(Ee){p=$.join("&");break e}}}return r=r.i.splice(0,h),l.D=r,p}function Vl(r){if(!r.g&&!r.u){r.Y=1;var l=r.Fa;ce||wt(),le||(ce(),le=!0),lt.add(l,r),r.v=0}}function ho(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Ls(y(r.Fa,r),Hl(r,r.v)),r.v++,!0)}t.Fa=function(){if(this.u=null,$l(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Ls(y(this.ab,this),r)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Je(10),Wi(this),$l(this))};function fo(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function $l(r){r.g=new fn(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var l=Gt(r.qa);Ae(l,"RID","rpc"),Ae(l,"SID",r.K),Ae(l,"AID",r.T),Ae(l,"CI",r.F?"0":"1"),!r.F&&r.ja&&Ae(l,"TO",r.ja),Ae(l,"TYPE","xmlhttp"),Ws(r,l),r.m&&r.o&&co(l,r.m,r.o),r.L&&(r.g.I=r.L);var h=r.g;r=r.ia,h.L=1,h.v=Vi(Gt(l)),h.m=null,h.P=!0,pl(h,r)}t.Za=function(){this.C!=null&&(this.C=null,Wi(this),ho(this),Je(19))};function zi(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function Bl(r,l){var h=null;if(r.g==l){zi(r),fo(r),r.g=null;var p=2}else if(ao(r.h,l))h=l.D,wl(r.h,l),p=1;else return;if(r.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var R=r.B;p=eo(),oe(p,new hl(p,h)),Gi(r)}else Vl(r);else if(R=l.s,R==3||R==0&&0<l.X||!(p==1&&mp(r,l)||p==2&&ho(r)))switch(h&&0<h.length&&(l=r.h,l.i=l.i.concat(h)),R){case 1:Mn(r,5);break;case 4:Mn(r,10);break;case 3:Mn(r,6);break;default:Mn(r,2)}}}function Hl(r,l){let h=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(h*=2),h*l}function Mn(r,l){if(r.j.info("Error code "+l),l==2){var h=y(r.fb,r),p=r.Xa;const R=!p;p=new Ln(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Fi(p,"https"),Vi(p),R?cp(p.toString(),h):up(p.toString(),h)}else Je(2);r.G=0,r.l&&r.l.sa(l),Wl(r),Ul(r)}t.fb=function(r){r?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function Wl(r){if(r.G=0,r.ka=[],r.l){const l=bl(r.h);(l.length!=0||r.i.length!=0)&&(z(r.ka,l),z(r.ka,r.i),r.h.i.length=0,U(r.i),r.i.length=0),r.l.ra()}}function Gl(r,l,h){var p=h instanceof Ln?Gt(h):new Ln(h);if(p.g!="")l&&(p.g=l+"."+p.g),ji(p,p.s);else{var R=c.location;p=R.protocol,l=l?l+"."+R.hostname:R.hostname,R=+R.port;var k=new Ln(null);p&&Fi(k,p),l&&(k.g=l),R&&ji(k,R),h&&(k.l=h),p=k}return h=r.D,l=r.ya,h&&l&&Ae(p,h,l),Ae(p,"VER",r.la),Ws(r,p),p}function zl(r,l,h){if(l&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=r.Ca&&!r.pa?new Oe(new $i({eb:h})):new Oe(r.pa),l.Ha(r.J),l}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kl(){}t=Kl.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function gt(r,l){te.call(this),this.g=new Ml(l),this.l=r,this.h=l&&l.messageUrlParams||null,r=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(r?r["X-WebChannel-Content-Type"]=l.messageContentType:r={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(r?r["X-WebChannel-Client-Profile"]=l.va:r={"X-WebChannel-Client-Profile":l.va}),this.g.S=r,(r=l&&l.Sb)&&!j(r)&&(this.g.m=r),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!j(l)&&(this.g.D=l,r=this.h,r!==null&&l in r&&(r=this.h,l in r&&delete r[l])),this.j=new us(this)}P(gt,te),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){uo(this.g)},gt.prototype.o=function(r){var l=this.g;if(typeof r=="string"){var h={};h.__data__=r,r=h}else this.u&&(h={},h.__data__=Ve(r),r=h);l.i.push(new Zd(l.Ya++,r)),l.G==3&&Gi(l)},gt.prototype.N=function(){this.g.l=null,delete this.j,uo(this.g),delete this.g,gt.aa.N.call(this)};function ql(r){Qr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var l=r.__sm__;if(l){e:{for(const h in l){r=h;break e}r=void 0}(this.i=r)&&(r=this.i,l=l!==null&&r in l?l[r]:void 0),this.data=l}else this.data=r}P(ql,Qr);function Jl(){Zr.call(this),this.status=1}P(Jl,Zr);function us(r){this.g=r}P(us,Kl),us.prototype.ua=function(){oe(this.g,"a")},us.prototype.ta=function(r){oe(this.g,new ql(r))},us.prototype.sa=function(r){oe(this.g,new Jl)},us.prototype.ra=function(){oe(this.g,"b")},gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,to.NO_ERROR=0,to.TIMEOUT=8,to.HTTP_ERROR=6,Yd.COMPLETE="complete",zd.EventType=Ds,Ds.OPEN="a",Ds.CLOSE="b",Ds.ERROR="c",Ds.MESSAGE="d",te.prototype.listen=te.prototype.K,Oe.prototype.listenOnce=Oe.prototype.L,Oe.prototype.getLastError=Oe.prototype.Ka,Oe.prototype.getLastErrorCode=Oe.prototype.Ba,Oe.prototype.getStatus=Oe.prototype.Z,Oe.prototype.getResponseJson=Oe.prototype.Oa,Oe.prototype.getResponseText=Oe.prototype.oa,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Ha}).apply(typeof Zi<"u"?Zi:typeof self<"u"?self:typeof window<"u"?window:{});const Lu="@firebase/firestore",Mu="4.8.0";/**
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
 */let Di="11.10.0";/**
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
 */const Rs=new Gr("@firebase/firestore");function St(t,...e){if(Rs.logLevel<=we.DEBUG){const n=e.map(nl);Rs.debug(`Firestore (${Di}): ${t}`,...n)}}function Fd(t,...e){if(Rs.logLevel<=we.ERROR){const n=e.map(nl);Rs.error(`Firestore (${Di}): ${t}`,...n)}}function n1(t,...e){if(Rs.logLevel<=we.WARN){const n=e.map(nl);Rs.warn(`Firestore (${Di}): ${t}`,...n)}}function nl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Ti(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,jd(t,s,n)}function jd(t,e,n){let s=`FIRESTORE (${Di}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Fd(s),new Error(s)}function ci(t,e,n,s){let i="Unexpected state";typeof n=="string"?i=n:s=n,t||jd(e,i,s)}/**
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
 */const fe={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class de extends Dt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ui{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Vd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class s1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class i1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class r1{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ci(this.o===void 0,42304);let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let o=new ui;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ui,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{St("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(St("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ui)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(St("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ci(typeof s.accessToken=="string",31837,{l:s}),new Vd(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ci(e===null||typeof e=="string",2055,{h:e}),new Ye(e)}}class o1{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class a1{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new o1(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Uu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class l1{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Et(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ci(this.o===void 0,3512);const s=o=>{o.error!=null&&St("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,St("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>s(o))};const i=o=>{St("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):St("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Uu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ci(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Uu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */function u1(){return new TextEncoder}/**
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
 */class h1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=c1(40);for(let o=0;o<i.length;++o)s.length<20&&i[o]<n&&(s+=e.charAt(i[o]%62))}return s}}function kt(t,e){return t<e?-1:t>e?1:0}function f1(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=t.codePointAt(n),i=e.codePointAt(n);if(s!==i){if(s<128&&i<128)return kt(s,i);{const o=u1(),a=d1(o.encode(Fu(t,n)),o.encode(Fu(e,n)));return a!==0?a:kt(s,i)}}n+=s>65535?2:1}return kt(t.length,e.length)}function Fu(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function d1(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return kt(t[n],e[n]);return kt(t.length,e.length)}/**
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
 */const ju="__name__";class Ut{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ti(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&Ti(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ut.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ut?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const o=Ut.compareSegments(e.get(i),n.get(i));if(o!==0)return o}return kt(e.length,n.length)}static compareSegments(e,n){const s=Ut.isNumericId(e),i=Ut.isNumericId(n);return s&&!i?-1:!s&&i?1:s&&i?Ut.extractNumericId(e).compare(Ut.extractNumericId(n)):f1(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return tl.fromString(e.substring(4,e.length-2))}}class It extends Ut{construct(e,n,s){return new It(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new de(fe.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new It(n)}static emptyPath(){return new It([])}}const p1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Gn extends Ut{construct(e,n,s){return new Gn(e,n,s)}static isValidIdentifier(e){return p1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Gn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ju}static keyField(){return new Gn([ju])}static fromServerFormat(e){const n=[];let s="",i=0;const o=()=>{if(s.length===0)throw new de(fe.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new de(fe.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new de(fe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(s+=c,i++):(o(),i++)}if(o(),a)throw new de(fe.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Gn(n)}static emptyPath(){return new Gn([])}}/**
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
 */class qn{constructor(e){this.path=e}static fromPath(e){return new qn(It.fromString(e))}static fromName(e){return new qn(It.fromString(e).popFirst(5))}static empty(){return new qn(It.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&It.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return It.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new qn(new It(e.slice()))}}function g1(t,e,n,s){if(e===!0&&s===!0)throw new de(fe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function m1(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function v1(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ti(12329,{type:typeof t})}function y1(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new de(fe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=v1(t);throw new de(fe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function De(t,e){const n={typeString:t};return e&&(n.value=e),n}function xi(t,e){if(!m1(t))throw new de(fe.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const i=e[s].typeString,o="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const a=t[s];if(i&&typeof a!==i){n=`JSON field '${s}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){n=`Expected '${s}' field to equal '${o.value}'`;break}}if(n)throw new de(fe.INVALID_ARGUMENT,n);return!0}/**
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
 */const Vu=-62135596800,$u=1e6;class jt{static now(){return jt.fromMillis(Date.now())}static fromDate(e){return jt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*$u);return new jt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new de(fe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new de(fe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Vu)throw new de(fe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(fe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$u}_compareTo(e){return this.seconds===e.seconds?kt(this.nanoseconds,e.nanoseconds):kt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:jt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xi(e,jt._jsonSchema))return new jt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Vu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}jt._jsonSchemaVersion="firestore/timestamp/1.0",jt._jsonSchema={type:De("string",jt._jsonSchemaVersion),seconds:De("number"),nanoseconds:De("number")};function _1(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class w1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new w1("Invalid base64 string: "+o):o}}(e);return new is(n)}static fromUint8Array(e){const n=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new is(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return kt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}is.EMPTY_BYTE_STRING=new is("");const da="(default)";class Rr{constructor(e,n){this.projectId=e,this.database=n||da}static empty(){return new Rr("","")}get isDefaultDatabase(){return this.database===da}isEqual(e){return e instanceof Rr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class b1{constructor(e,n=null,s=[],i=[],o=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function I1(t){return new b1(t)}/**
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
 */var Bu,he;(he=Bu||(Bu={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new tl([4294967295,4294967295],0);/**
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
 */const E1=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=1048576;function Vo(){return typeof document<"u"?document:null}/**
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
 */class S1{constructor(e,n,s=1e3,i=1.5,o=6e4){this.Fi=e,this.timerId=n,this.d_=s,this.E_=i,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-s);i>0&&St("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */class sl{constructor(e,n,s,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=o,this.deferred=new ui,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,o){const a=Date.now()+s,c=new sl(e,n,a,i,o);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(fe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Hu,Wu;(Wu=Hu||(Hu={})).Fa="default",Wu.Cache="cache";/**
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
 */function A1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="firestore.googleapis.com",zu=!0;class Ku{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new de(fe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$d,this.ssl=zu}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:zu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=E1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<T1)throw new de(fe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}g1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=A1((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new de(fe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new de(fe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new de(fe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bd{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ku({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(fe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(fe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ku(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new s1;switch(s.type){case"firstParty":return new a1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new de(fe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Gu.get(n);s&&(St("ComponentProvider","Removing Datastore"),Gu.delete(n),s.terminate())}(this),Promise.resolve()}}function C1(t,e,n,s={}){var i;t=y1(t,Bd);const o=Ri(e),a=t._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;o&&(kf(`https://${u}`),Pf("Firestore",!0)),a.host!==$d&&a.host!==u&&n1("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:u,ssl:o,emulatorOptions:s});if(!Pn(f,c)&&(t._setSettings(f),s.mockUserToken)){let d,g;if(typeof s.mockUserToken=="string")d=s.mockUserToken,g=Ye.MOCK_USER;else{d=cy(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const y=s.mockUserToken.sub||s.mockUserToken.user_id;if(!y)throw new de(fe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ye(y)}t._authCredentials=new i1(new Vd(d,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new il(this.firestore,e,this._query)}}class Vt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}toJSON(){return{type:Vt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(xi(n,Vt._jsonSchema))return new Vt(e,s||null,new qn(It.fromString(n.referencePath)))}}Vt._jsonSchemaVersion="firestore/documentReference/1.0",Vt._jsonSchema={type:De("string",Vt._jsonSchemaVersion),referencePath:De("string")};class rl extends il{constructor(e,n,s){super(e,n,I1(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new qn(e))}withConverter(e){return new rl(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="AsyncQueue";class Ju{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new S1(this,"async_queue_retry"),this.oc=()=>{const s=Vo();s&&St(qu,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const n=Vo();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Vo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new ui;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!_1(e))throw e;St(qu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,Fd("INTERNAL UNHANDLED ERROR: ",Xu(s)),s}).then(s=>(this.nc=!1,s))));return this._c=n,n}enqueueAfterDelay(e,n,s){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=sl.createAndSchedule(this,e,n,s,o=>this.lc(o));return this.ec.push(i),i}ac(){this.tc&&Ti(47125,{hc:Xu(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Xu(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class R1 extends Bd{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Ju,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ju(e),this._firestoreClient=void 0,await e}}}function k1(t,e){const n=typeof t=="object"?t:Fa(),s=typeof t=="string"?t:da,i=os(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const o=ay("firestore");o&&C1(i,...o)}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this._byteString=e}static fromBase64String(e){try{return new en(is.fromBase64String(e))}catch(n){throw new de(fe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new en(is.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:en._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xi(e,en._jsonSchema))return en.fromBase64String(e.bytes)}}en._jsonSchemaVersion="firestore/bytes/1.0",en._jsonSchema={type:De("string",en._jsonSchemaVersion),bytes:De("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new de(fe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Gn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new de(fe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new de(fe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return kt(this._lat,e._lat)||kt(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Qn._jsonSchemaVersion}}static fromJSON(e){if(xi(e,Qn._jsonSchema))return new Qn(e.latitude,e.longitude)}}Qn._jsonSchemaVersion="firestore/geoPoint/1.0",Qn._jsonSchema={type:De("string",Qn._jsonSchemaVersion),latitude:De("number"),longitude:De("number")};/**
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
 */class Zn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,i){if(s.length!==i.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==i[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Zn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xi(e,Zn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Zn(e.vectorValues);throw new de(fe.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Zn._jsonSchemaVersion="firestore/vectorValue/1.0",Zn._jsonSchema={type:De("string",Zn._jsonSchemaVersion),vectorValues:De("object")};const P1=new RegExp("[~\\*/\\[\\]]");function O1(t,e,n){if(e.search(P1)>=0)throw Yu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Hd(...e.split("."))._internalPath}catch{throw Yu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Yu(t,e,n,s,i){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new de(fe.INVALID_ARGUMENT,o+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n,s,i,o){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new N1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class N1 extends Wd{data(){return super.data()}}function Gd(t,e){return typeof e=="string"?O1(t,e):e instanceof Hd?e._internalPath:e._delegate._internalPath}class er{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ts extends Wd{constructor(e,n,s,i,o,a){super(e,n,s,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ur(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Gd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new de(fe.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ts._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ts._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ts._jsonSchema={type:De("string",Ts._jsonSchemaVersion),bundleSource:De("string","DocumentSnapshot"),bundleName:De("string"),bundle:De("string")};class ur extends Ts{data(e={}){return super.data(e)}}class hi{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new er(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ur(this._firestore,this._userDataWriter,s.key,s,new er(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new de(fe.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const u=new ur(i._firestore,i._userDataWriter,c.doc.key,c.doc,new er(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const u=new ur(i._firestore,i._userDataWriter,c.doc.key,c.doc,new er(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,d=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:D1(c.type),doc:u,oldIndex:f,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new de(fe.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=hi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=h1.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(n.push(o._document),s.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function D1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ti(61501,{type:t})}}hi._jsonSchemaVersion="firestore/querySnapshot/1.0",hi._jsonSchema={type:De("string",hi._jsonSchemaVersion),bundleSource:De("string","QuerySnapshot"),bundleName:De("string"),bundle:De("string")};(function(e,n=!0){(function(i){Di=i})(Ps),Ht(new Nt("firestore",(s,{instanceIdentifier:i,options:o})=>{const a=s.getProvider("app").getImmediate(),c=new R1(new r1(s.getProvider("auth-internal")),new l1(a,s.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new de(fe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rr(f.options.projectId,d)}(a,i),a);return o=Object.assign({useFetchStreams:n},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),yt(Lu,Mu,e),yt(Lu,Mu,"esm2017")})();const x1={apiKey:"AIzaSyBzR2w75nixO9H8zjUbxVajKx0npksSGrg",authDomain:"norsk-cafe.firebaseapp.com",projectId:"norsk-cafe",storageBucket:"norsk-cafe.firebasestorage.app",messagingSenderId:"123232580709",appId:"1:123232580709:web:c6e6dfed117db9d3b0028c",measurementId:void 0},ol=Uf(x1);Q0(ol);const es=e1(ol);k1(ol);const L1="/assets/coffee-cKRUD7yK.svg",pa="/assets/panda256-BLVgM0lT.png",Dn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},M1={class:"header"},U1=["src"],F1={class:"header-user"},j1=["src"],V1={key:0,class:"profile-menu"},$1={class:"profile-header"},B1=["src"],H1={class:"profile-info"},W1={class:"profile-name"},G1={__name:"Header",setup(t){const e=Ci(),n=Le(null),s=Le(!1),i=Le(null);ks(()=>{n.value=es.currentUser,es.onAuthStateChanged(d=>{n.value=d}),document.addEventListener("click",a)}),Pa(()=>{document.removeEventListener("click",a)});function o(){s.value=!s.value}function a(d){i.value&&!i.value.contains(d.target)&&(s.value=!1)}function c(){e.push("/login")}function u(){es.signOut(),e.push("/login"),s.value=!1}function f(){e.push("/dashboard")}return(d,g)=>(_e(),be("header",M1,[x("button",{class:"header-title-button",onClick:f},[g[1]||(g[1]=x("span",{class:"header-title-text"},"Norsk",-1)),x("img",{src:rt(L1),alt:"Logo",class:"header-logo"},null,8,U1),g[2]||(g[2]=x("span",{class:"header-title-text"},"Cafe",-1))]),x("div",F1,[n.value?(_e(),be("div",{key:1,class:"profile-menu-wrapper",ref_key:"menuRef",ref:i},[x("img",{src:n.value.photoURL||rt(pa),alt:"User Profile",class:"user-icon",onClick:o},null,8,j1),Me(ym,{name:"fade-slide"},{default:Ra(()=>[s.value?(_e(),be("div",V1,[x("div",$1,[x("img",{src:n.value.photoURL||rt(pa),alt:"Large profile",class:"profile-large"},null,8,B1),x("div",H1,[x("div",W1,ae(n.value.displayName||n.value.email),1),g[3]||(g[3]=x("div",{class:"profile-level"},"Level 18",-1))])]),g[4]||(g[4]=x("hr",{class:"profile-divider"},null,-1)),x("button",{class:"menu-item",onClick:g[0]||(g[0]=y=>rt(e).push("/account"))},"Konto Innstillinger"),x("button",{class:"menu-item",onClick:u},"Logg ut")])):Wn("",!0)]),_:1})],512)):(_e(),be("button",{key:0,class:"login-button",onClick:c}," Login "))])]))}},z1=Dn(G1,[["__scopeId","data-v-27ae3e17"]]),K1="data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%23fff'/%3e%3c/svg%3e",q1={class:"footer"},J1={class:"footer-start"},X1={class:"footer-end"},Y1={href:"https://github.com/fredrikofstad/norskcafe",target:"_blank",rel:"noopener noreferrer",class:"github-link"},Q1=["src"],Z1={__name:"Footer",setup(t){return(e,n)=>{const s=Fh("router-link");return _e(),be("footer",q1,[x("div",J1,[n[1]||(n[1]=x("span",{class:"copyright"},"© 2025 Fredrik Ofstad",-1)),Me(s,{to:"/privacy",class:"privacy-link"},{default:Ra(()=>n[0]||(n[0]=[Xn("Privacy Policy")])),_:1,__:[0]})]),x("div",X1,[x("a",Y1,[x("img",{src:rt(K1),alt:"GitHub",class:"github-icon"},null,8,Q1)])])])}}},eI=Dn(Z1,[["__scopeId","data-v-b36a3877"]]),tI={class:"page"},nI={class:"main-content"},sI={__name:"App",setup(t){return(e,n)=>{const s=Fh("router-view");return _e(),be("div",tI,[Me(z1),x("main",nI,[Me(s)]),Me(eI)])}}},iI={class:"home-page"},rI={__name:"Home",setup(t){const e=Ci();function n(){es.currentUser?e.push("/dashboard"):e.push("/login")}return(s,i)=>(_e(),be("div",iI,[x("main",{class:"welcome"},[i[0]||(i[0]=x("div",{class:"welcome"},null,-1)),i[1]||(i[1]=x("h1",null,"Velkommen!",-1)),i[2]||(i[2]=x("p",null,"Her på Norsk Cafe skal vi lære norsk på en morsom og effektiv måte!",-1)),x("button",{class:"start-button",onClick:n}," La oss komme i gang! ")])]))}},oI=Dn(rI,[["__scopeId","data-v-ac2fe9f3"]]),aI={class:"login-page"},lI={class:"login-content"},cI={class:"login-inner"},uI={class:"gsi-material-button"},hI={class:"gsi-material-button-content-wrapper"},fI={class:"gsi-material-button-icon"},dI={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",style:{width:"24px",height:"24px"}},pI={__name:"Login",setup(t){const e=Ci();async function n(){const s=new Zt;try{await cb(es,s),e.push("/dashboard")}catch(i){console.error("Google sign-in failed",i),alert("Google sign-in failed: "+i.message)}}return(s,i)=>(_e(),be("div",aI,[x("main",lI,[x("div",cI,[i[2]||(i[2]=x("h2",{class:"login-title"},"Velkommen tilbake!",-1)),i[3]||(i[3]=x("p",{class:"login-subtitle"}," Logg inn med Google for å fortsette å lære norsk. ",-1)),x("div",{class:"google-wrapper",onClick:n},[x("button",uI,[x("div",hI,[x("div",fI,[(_e(),be("svg",dI,i[0]||(i[0]=[em(`<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0\r
                    14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-e7300c23></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58\r
                    2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-e7300c23></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92\r
                    16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-e7300c23></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15\r
                    1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98\r
                    6.19C6.51 42.62 14.62 48 24 48z" data-v-e7300c23></path><path fill="none" d="M0 0h48v48H0z" data-v-e7300c23></path>`,5)])))]),i[1]||(i[1]=x("span",{class:"gsi-material-button-contents"},"Fortsett med Google",-1))])])])])])]))}},gI=Dn(pI,[["__scopeId","data-v-e7300c23"]]),mI="/assets/read-lc7uTVG8.png",vI="/assets/review-BO4Lya47.png",yI="/assets/listen-BRpUMTBZ.png",_I={class:"dashboard-page"},wI={class:"dashboard-content"},bI={class:"dashboard-welcome"},II={class:"cards-container"},EI={__name:"Dashboard",setup(t){const e=Ci(),n=Le("");ks(()=>{Hw(es,i=>{if(i){const o=i.displayName||i.email||"Bruker";n.value=o.split(" ")[0]}else e.push("/login")})});function s(){e.push("/review")}return(i,o)=>(_e(),be("div",_I,[x("main",wI,[x("div",bI,[x("h2",null,"Hei "+ae(n.value)+"!",1),o[2]||(o[2]=x("p",null,"Velkommen til ditt dashboard. Ta en titt rundt!",-1))]),x("div",II,[x("div",{class:"dashboard-card",onClick:o[0]||(o[0]=(...a)=>i.goToLearn&&i.goToLearn(...a))},o[3]||(o[3]=[x("div",{class:"card-text"},[x("h3",null,"Lær"),x("p",null,"Start en ny leksjon og lær nye ord.")],-1),x("img",{src:mI,alt:"Lær",class:"card-icon"},null,-1)])),x("div",{class:"dashboard-card",onClick:s},o[4]||(o[4]=[x("div",{class:"card-text"},[x("h3",null,"Repeter"),x("p",null,"Gå gjennom ordene du allerede kan.")],-1),x("img",{src:vI,alt:"Repeter",class:"card-icon"},null,-1)])),x("div",{class:"dashboard-card",onClick:o[1]||(o[1]=(...a)=>i.goToListen&&i.goToListen(...a))},o[5]||(o[5]=[x("div",{class:"card-text"},[x("h3",null,"Lytt"),x("p",null,"kommer snart.")],-1),x("img",{src:yI,alt:"Lytt",class:"card-icon"},null,-1)]))])])]))}},TI=Dn(EI,[["__scopeId","data-v-1dd9849e"]]),SI={title:"Personvernerklæring",updated:"Sist oppdatert: 6. juli 2025",who:{title:"Hvem er vi",text:"Norsk Cafe er utviklet og driftet av Fredrik Ofstad, som er behandlingsansvarlig for dine personopplysninger."},what:{title:"Hvilke data samles inn?",text:"Når du logger inn med Google, mottar vi følgende informasjon:",items:["Navn","E-postadresse","Profilbilde"],note:"Denne informasjonen brukes kun til å tilpasse din opplevelse i appen. Vi lagrer ikke passord."},where:{title:"Hvor lagres dataene?",text:"Dataene lagres i Google Firebase Authentication og Firestore-databasen. Selve appen hostes på GitHub Pages."},cookies:{title:"Informasjonskapsler og sporing",text:"Norsk Cafe bruker for øyeblikket ikke informasjonskapsler eller analyseverktøy. Google Analytics kan vurderes senere, men vil i så fall kreve samtykke."},sharing:{title:"Deling av data",text:"Vi deler ikke dine personopplysninger med tredjeparter, med unntak av bruk av Google Firebase som databehandler."},rights:{title:"Dine rettigheter",items:["Innsyn i egne personopplysninger","Sletting av data","Klage til Datatilsynet"]},deletion:{title:"Slette konto",text:"Du kan slette kontoen din direkte i appen. Dette sletter brukeren og tilhørende data fra Firebase."}},AI={title:"Privacy Policy",updated:"Last updated: 6 July 2025",who:{title:"Who we are",text:"Norsk Cafe is developed and operated by Fredrik Ofstad, who is the data controller responsible for your personal information."},what:{title:"What data do we collect?",text:"When you sign in with Google, we receive:",items:["Your name","Your email address","Your profile picture"],note:"This is used only to personalize your experience. We do not collect or store any passwords."},where:{title:"Where is the data stored?",text:"Your data is stored in Google Firebase Authentication and Firestore. The app is hosted on GitHub Pages."},cookies:{title:"Cookies and tracking",text:"Norsk Cafe does not currently use cookies or tracking tools. Google Analytics may be added in the future, but only with explicit consent."},sharing:{title:"Data sharing",text:"We do not share your data with third parties, except for Google Firebase, which acts as a data processor."},rights:{title:"Your rights",items:["Access your personal data","Request deletion","File a complaint with your data protection authority"]},deletion:{title:"Account deletion",text:"You can delete your account from the settings page. This will remove your user and data from Firebase."}},CI={no:SI,en:AI},RI={class:"privacy-page"},kI={class:"privacy-content"},PI={class:"title-bar"},OI={__name:"Privacy",setup(t){const e=Le("no");function n(){e.value=e.value==="no"?"en":"no"}const s=it(()=>CI[e.value]);return(i,o)=>(_e(),be("div",RI,[x("div",kI,[x("div",PI,[x("h1",null,ae(s.value.title),1),x("button",{class:"lang-switch",onClick:n},ae(e.value==="no"?"Switch to English":"Bytt til norsk"),1)]),x("p",null,[x("strong",null,ae(s.value.updated),1)]),x("h2",null,ae(s.value.who.title),1),x("p",null,ae(s.value.who.text),1),x("h2",null,ae(s.value.what.title),1),x("p",null,ae(s.value.what.text),1),x("ul",null,[(_e(!0),be(Ze,null,qo(s.value.what.items,a=>(_e(),be("li",{key:a},ae(a),1))),128))]),x("p",null,ae(s.value.what.note),1),x("h2",null,ae(s.value.where.title),1),x("p",null,ae(s.value.where.text),1),x("h2",null,ae(s.value.cookies.title),1),x("p",null,ae(s.value.cookies.text),1),x("h2",null,ae(s.value.sharing.title),1),x("p",null,ae(s.value.sharing.text),1),x("h2",null,ae(s.value.rights.title),1),x("ul",null,[(_e(!0),be(Ze,null,qo(s.value.rights.items,a=>(_e(),be("li",{key:a},ae(a),1))),128))]),x("h2",null,ae(s.value.deletion.title),1),x("p",null,ae(s.value.deletion.text),1)])]))}},NI=Dn(OI,[["__scopeId","data-v-117f989b"]]),DI={class:"account-settings"},xI={key:0,class:"user-info"},LI=["src"],MI={__name:"Account",setup(t){const e=Ci(),n=Le(es.currentUser);async function s(){if(confirm("Are you sure you want to delete your account? This action cannot be undone."))try{await n.value.delete(),alert("Your account has been deleted."),e.push("/login")}catch(o){o.code==="auth/requires-recent-login"?(alert("Please sign in again to delete your account."),e.push("/login")):(console.error("Account deletion failed:",o),alert("Something went wrong. Please try again."))}}return(i,o)=>(_e(),be("div",DI,[o[2]||(o[2]=x("h1",null,"Account Settings",-1)),n.value?(_e(),be("div",xI,[x("img",{src:n.value?.photoURL||rt(pa),alt:"Profile",class:"profile-pic"},null,8,LI),x("p",null,[o[0]||(o[0]=x("strong",null,"Name:",-1)),Xn(" "+ae(n.value.displayName),1)]),x("p",null,[o[1]||(o[1]=x("strong",null,"Email:",-1)),Xn(" "+ae(n.value.email),1)])])):Wn("",!0),o[3]||(o[3]=x("hr",null,null,-1)),x("button",{class:"delete-button",onClick:s},"Delete Account")]))}},UI=Dn(MI,[["__scopeId","data-v-ca588be0"]]);function FI(t){const e=[...t];for(let n=e.length-1;n>0;n--){const s=Math.floor(Math.random()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e}function jI(t,e,n){const s=t.filter(o=>{const a=o.id.slice(0,1);return e.includes(a)&&n.includes(o.id)}),i=[];for(const o of s)if(o.type==="noun"&&"gender"in o&&"article"in o){const c=`${o.gender} ${o.norwegian}`.toLowerCase(),u=`${o.article} ${o.english}`.toLowerCase();i.push({id:o.id,prompt:u,answer:c,direction:"toNorwegian",accept:[c],word:o}),i.push({id:o.id,prompt:c,answer:u,direction:"toEnglish",accept:[u,o.english.toLowerCase()],word:o})}else i.push({id:o.id,prompt:o.english.toLowerCase(),answer:o.norwegian.toLowerCase(),direction:"toNorwegian",accept:[o.norwegian.toLowerCase()],word:o}),i.push({id:o.id,prompt:o.norwegian.toLowerCase(),answer:o.english.toLowerCase(),direction:"toEnglish",accept:[o.english.toLowerCase()],word:o});return Le(FI(i))}function VI(t){let e=!1;async function n(){if(e)return;e=!0;const s=t();if(!(!s||s.length===0))try{console.log("Uploading review data:",s)}catch(i){console.error("Failed to upload review data:",i)}}Hv((s,i,o)=>{n(),o()}),ks(()=>{window.addEventListener("beforeunload",n)}),jr(()=>{window.removeEventListener("beforeunload",n)})}const $I=[{id:"0n1",type:"noun",norwegian:"substantiv",english:"noun",gender:"et",article:"a",plural:{indefinite:"substantiv",definite:"substantivene"},level:"A1",example:["Substantiv er navn på ting."]},{id:"0n2",type:"noun",norwegian:"verb",english:"verb",gender:"et",article:"a",plural:{indefinite:"verb",definite:"verbene"},level:"A1",example:["Verb forteller hva noen gjør."]},{id:"0n3",type:"noun",norwegian:"adjektiv",english:"adjective",gender:"et",article:"an",plural:{indefinite:"adjektiv",definite:"adjektivene"},level:"A1",example:["Adjektiv beskriver substantiv."]},{id:"0n4",type:"noun",norwegian:"adverb",english:"adverb",gender:"et",article:"an",plural:{indefinite:"adverb",definite:"adverbene"},level:"A1",example:["Adverb beskriver verb, adjektiv eller andre adverb."]},{id:"0n5",type:"noun",norwegian:"pronomen",english:"pronoun",gender:"et",article:"a",plural:{indefinite:"pronomen",definite:"pronomenene"},level:"A1",example:["Pronomen brukes i stedet for substantiv."]},{id:"0n6",type:"noun",norwegian:"preposisjon",english:"preposition",gender:"en",article:"a",plural:{indefinite:"preposisjoner",definite:"preposisjonene"},level:"A1",example:["Preposisjoner viser forhold."]},{id:"0v1",type:"verb",norwegian:"å forklare",english:"to explain",level:"A1",conjugation:{present:"forklarer",past:"forklarte",perfect:"har forklart"},example:["Kan du forklare regelen en gang til?","Læreren forklarer hva ordet betyr."]},{id:"0v2",type:"verb",norwegian:"å stave",english:"to spell",level:"A1",conjugation:{present:"staver",past:"stavet",perfect:"har stavet"},example:["Hvordan staver du navnet ditt?"]},{id:"0v3",type:"verb",norwegian:"å bøye",english:"to conjugate",level:"A1",conjugation:{present:"bøyer",past:"bøyde",perfect:"har bøyd"},example:["Du må bøye verbet riktig.","Vi lærer å bøye substantiv i flertall."]},{id:"0v4",type:"verb",norwegian:"å øve",english:"to practice",level:"A1",conjugation:{present:"øver",past:"øvde",perfect:"har øvd"},example:["Jeg øver på å snakke norsk.","Du bør øve litt hver dag."]},{id:"0v5",type:"verb",norwegian:"å uttale",english:"to pronounce",level:"A1",conjugation:{present:"uttaler",past:"uttalte",perfect:"har uttalt"},example:["Hvordan uttaler man dette ordet?","Han uttaler bokstavene tydelig."]},{id:"0a1",type:"adjective",norwegian:"bestemt",english:"definite",level:"A1",forms:{masculine_feminine:"bestemt",neuter:"bestemt",plural:"bestemte",definite:"bestemte"},example:["Vi bruker bestemt form når vi kjenner til noe.","Substantivet står i bestemt form."]},{id:"0a2",type:"adjective",norwegian:"ubestemt",english:"indefinite",level:"A1",forms:{masculine_feminine:"ubestemt",neuter:"ubestemt",plural:"ubestemte",definite:"ubestemte"},example:["Ubestemt form brukes når noe nevnes for første gang.","Et ubestemt substantiv har ikke bestemt artikkel."]},{id:"0a3",type:"adjective",norwegian:"sterk",english:"strong",level:"A1",forms:{masculine_feminine:"sterk",neuter:"sterkt",plural:"sterke",definite:"sterke"},comparison:{positive:"sterk",comparative:"sterkere",superlative:"sterkest"},example:["Noen verb er sterke og bøyes uregelmessig.","Han er en sterk student."]},{id:"0a4",type:"adjective",norwegian:"svak",english:"weak",level:"A1",forms:{masculine_feminine:"svak",neuter:"svakt",plural:"svake",definite:"svake"},comparison:{positive:"svak",comparative:"svakere",superlative:"svakest"},example:["De fleste norske verb er svake.","Det var et svakt argument."]}],BI="data:image/svg+xml,%3csvg%20fill='%23000000'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%2030.727%2030.727'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0%20l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z'/%3e%3c/g%3e%3c/svg%3e",HI={key:0,class:"card"},WI={class:"word-display"},GI={class:"big-word"},zI={class:"direction-hint"},KI={class:"input-group"},qI=["disabled"],JI=["disabled"],XI={class:"feedback-wrapper"},YI={key:0,class:"feedback visible"},QI={key:1,class:"feedback hidden"},ZI=["src"],eE={key:1,class:"word-details"},tE={class:"word-meta"},nE={key:0},sE={key:1},iE={key:2},rE=ka({__name:"Review",setup(t){const e=Le(["0"]),n=Le(["0n1","0n2","0n3","0n4","0n5","0v1","0a2"]),s=jI($I,e.value,n.value),i=Le([]);VI(()=>i.value);const o=Le(0),a=Le(""),c=Le(!1),u=Le(""),f=Le(!1),d=Le(!1),g=Le(null),y=it(()=>a.value.trim()===""),T=it(()=>s.value?.[o.value]??null),P=Le(!1);function U(){f.value&&(P.value=!P.value)}function z(Z){return Z.charAt(0).toUpperCase()+Z.slice(1)}function q(Z){return Z.trim().toLowerCase().replace(/^(a|an)\s+/,"")}function j(){const Z=T.value;if(!Z)return;const J=T.value?.accept.includes(q(a.value));d.value=J,J?u.value="✅ Riktig!":(u.value=`❌ Feil. Riktig svar er "${Z.answer}".`,s.value.push({...Z})),c.value=!0,f.value=!0,Qs(()=>{document.querySelector(".review-session")?.focus()})}function H(Z){const J=Z.target;J.tagName==="INPUT"||J.tagName==="TEXTAREA"||(Z.preventDefault(),f.value&&U())}function B(){c.value=!1,a.value="",f.value=!1,d.value=!1,P.value=!1,o.value<s.value.length-1?o.value++:(alert("Økten er ferdig!"),o.value=0),Qs(()=>g.value?.focus())}return ni(o,()=>{Qs(()=>g.value?.focus())}),ks(()=>{g.value?.focus()}),(Z,J)=>(_e(),be("div",{class:"review-session",onKeyup:J[2]||(J[2]=Nc(Bm(S=>!y.value&&!f.value?j():f.value?B():null,["prevent"]),["enter"])),onKeydown:Nc(H,["space"]),tabindex:"0"},[rt(s).length&&T.value?(_e(),be("div",HI,[x("div",WI,[x("p",GI,ae(z(T.value.prompt)),1),x("p",zI,ae(T.value.direction==="toEnglish"?"Oversett til engelsk":"Oversett til norsk"),1)]),x("div",KI,[og(x("input",{ref_key:"inputRef",ref:g,"onUpdate:modelValue":J[0]||(J[0]=S=>a.value=S),class:fi({correct:f.value&&d.value,incorrect:f.value&&!d.value}),disabled:f.value,placeholder:"Ditt svar"},null,10,qI),[[jm,a.value]]),x("button",{onClick:J[1]||(J[1]=S=>f.value?B():j()),disabled:y.value&&!f.value,class:"check-button"},ae(f.value?"Neste":"Sjekk"),9,JI)]),x("div",XI,[c.value?(_e(),be("div",YI,[x("p",null,ae(u.value),1)])):(_e(),be("div",QI,J[3]||(J[3]=[x("p",null," ",-1)])))])])):Wn("",!0),x("button",{class:fi(["details-toggle",{disabled:!f.value}]),onClick:U},[x("img",{src:rt(BI),alt:"Vis mer"},null,8,ZI)],2),P.value?(_e(),be("div",eE,[x("div",tE,[J[6]||(J[6]=x("h4",null,"Ordinfo:",-1)),x("p",null,[J[4]||(J[4]=x("strong",null,"Norsk:",-1)),Xn(" "+ae(T.value.word.gender)+" "+ae(T.value.word.norwegian),1)]),x("p",null,[J[5]||(J[5]=x("strong",null,"Engelsk: ",-1)),T.value.word.type==="noun"?(_e(),be(Ze,{key:0},[Xn(ae(T.value.word.article)+" "+ae(T.value.word.english),1)],64)):(_e(),be(Ze,{key:1},[Xn(ae(T.value.word.english),1)],64))])]),T.value.word.example?.length?(_e(),be("div",nE,[J[7]||(J[7]=x("h4",null,"Eksempelsetninger:",-1)),x("ul",null,[(_e(!0),be(Ze,null,qo(T.value.word.example,(S,v)=>(_e(),be("li",{key:v},ae(S),1))),128))])])):Wn("",!0),T.value.word.type==="verb"&&T.value.word.conjugation?(_e(),be("div",sE,[J[8]||(J[8]=x("h4",null,"Bøying:",-1)),x("p",null,"Nåtid: "+ae(T.value.word.conjugation.present),1),x("p",null,"Fortid: "+ae(T.value.word.conjugation.past),1),x("p",null,"Perfektum: "+ae(T.value.word.conjugation.perfect),1)])):Wn("",!0),T.value.word.type==="adjective"&&T.value.word.comparison?(_e(),be("div",iE,[J[9]||(J[9]=x("h4",null,"Gradbøying:",-1)),x("p",null,"Positiv: "+ae(T.value.word.comparison.positive),1),x("p",null,"Komparativ: "+ae(T.value.word.comparison.comparative),1),x("p",null,"Superlativ: "+ae(T.value.word.comparison.superlative),1)])):Wn("",!0)])):Wn("",!0)],32))}}),oE=Dn(rE,[["__scopeId","data-v-43fe9576"]]),aE=[{path:"/",component:oI},{path:"/login",component:gI},{path:"/dashboard",component:TI},{path:"/privacy",component:NI},{path:"/account",component:UI},{path:"/review",component:oE}],lE=Yv({history:Sv("/"),routes:aE});zm(sI).use(lE).mount("#app");
