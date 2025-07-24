(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ea(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Se={},_r=[],Vt=()=>{},kp=()=>!1,Pi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ta=t=>t.startsWith("onUpdate:"),je=Object.assign,Sa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Rp=Object.prototype.hasOwnProperty,we=(t,e)=>Rp.call(t,e),te=Array.isArray,yr=t=>Oi(t)==="[object Map]",lh=t=>Oi(t)==="[object Set]",oe=t=>typeof t=="function",xe=t=>typeof t=="string",Ln=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",ch=t=>(Re(t)||oe(t))&&oe(t.then)&&oe(t.catch),uh=Object.prototype.toString,Oi=t=>uh.call(t),Pp=t=>Oi(t).slice(8,-1),hh=t=>Oi(t)==="[object Object]",Aa=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zr=Ea(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ni=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Op=/-(\w)/g,wt=Ni(t=>t.replace(Op,(e,n)=>n?n.toUpperCase():"")),Np=/\B([A-Z])/g,Mn=Ni(t=>t.replace(Np,"-$1").toLowerCase()),Di=Ni(t=>t.charAt(0).toUpperCase()+t.slice(1)),_o=Ni(t=>t?`on${Di(t)}`:""),Rn=(t,e)=>!Object.is(t,e),ni=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Go=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},zo=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Dp=t=>{const e=xe(t)?Number(t):NaN;return isNaN(e)?t:e};let sc;const xi=()=>sc||(sc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ca(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=xe(r)?Up(r):Ca(r);if(s)for(const o in s)e[o]=s[o]}return e}else if(xe(t)||Re(t))return t}const xp=/;(?![^(]*\))/g,Lp=/:([^]+)/,Mp=/\/\*[^]*?\*\//g;function Up(t){const e={};return t.replace(Mp,"").split(xp).forEach(n=>{if(n){const r=n.split(Lp);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Cr(t){let e="";if(xe(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const r=Cr(t[n]);r&&(e+=r+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jp=Ea(Fp);function fh(t){return!!t||t===""}const dh=t=>!!(t&&t.__v_isRef===!0),ee=t=>xe(t)?t:t==null?"":te(t)||Re(t)&&(t.toString===uh||!oe(t.toString))?dh(t)?ee(t.value):JSON.stringify(t,ph,2):String(t),ph=(t,e)=>dh(e)?ph(t,e.value):yr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],o)=>(n[yo(r,o)+" =>"]=s,n),{})}:lh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>yo(n))}:Ln(e)?yo(e):Re(e)&&!te(e)&&!hh(e)?String(e):e,yo=(t,e="")=>{var n;return Ln(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let it;class $p{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=it,!e&&it&&(this.index=(it.scopes||(it.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=it;try{return it=this,e()}finally{it=n}}}on(){++this._on===1&&(this.prevScope=it,it=this)}off(){this._on>0&&--this._on===0&&(it=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Vp(){return it}let Ae;const wo=new WeakSet;class gh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,it&&it.active&&it.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wo.has(this)&&(wo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ic(this),_h(this);const e=Ae,n=Ct;Ae=this,Ct=!0;try{return this.fn()}finally{yh(this),Ae=e,Ct=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Pa(e);this.deps=this.depsTail=void 0,ic(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qo(this)&&this.run()}get dirty(){return qo(this)}}let mh=0,es,ts;function vh(t,e=!1){if(t.flags|=8,e){t.next=ts,ts=t;return}t.next=es,es=t}function ka(){mh++}function Ra(){if(--mh>0)return;if(ts){let e=ts;for(ts=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;es;){let e=es;for(es=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function _h(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function yh(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Pa(r),Bp(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function qo(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(wh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function wh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ps)||(t.globalVersion=ps,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!qo(t))))return;t.flags|=2;const e=t.dep,n=Ae,r=Ct;Ae=t,Ct=!0;try{_h(t);const s=t.fn(t._value);(e.version===0||Rn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ae=n,Ct=r,yh(t),t.flags&=-3}}function Pa(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Pa(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Bp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ct=!0;const bh=[];function on(){bh.push(Ct),Ct=!1}function an(){const t=bh.pop();Ct=t===void 0?!0:t}function ic(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ae;Ae=void 0;try{e()}finally{Ae=n}}}let ps=0;class Hp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Oa{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ae||!Ct||Ae===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ae)n=this.activeLink=new Hp(Ae,this),Ae.deps?(n.prevDep=Ae.depsTail,Ae.depsTail.nextDep=n,Ae.depsTail=n):Ae.deps=Ae.depsTail=n,Ih(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ae.depsTail,n.nextDep=void 0,Ae.depsTail.nextDep=n,Ae.depsTail=n,Ae.deps===n&&(Ae.deps=r)}return n}trigger(e){this.version++,ps++,this.notify(e)}notify(e){ka();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ra()}}}function Ih(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ih(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ko=new WeakMap,Yn=Symbol(""),Jo=Symbol(""),gs=Symbol("");function Xe(t,e,n){if(Ct&&Ae){let r=Ko.get(t);r||Ko.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Oa),s.map=r,s.key=n),s.track()}}function Qt(t,e,n,r,s,o){const a=Ko.get(t);if(!a){ps++;return}const c=u=>{u&&u.trigger()};if(ka(),e==="clear")a.forEach(c);else{const u=te(t),f=u&&Aa(n);if(u&&n==="length"){const d=Number(r);a.forEach((g,m)=>{(m==="length"||m===gs||!Ln(m)&&m>=d)&&c(g)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),f&&c(a.get(gs)),e){case"add":u?f&&c(a.get("length")):(c(a.get(Yn)),yr(t)&&c(a.get(Jo)));break;case"delete":u||(c(a.get(Yn)),yr(t)&&c(a.get(Jo)));break;case"set":yr(t)&&c(a.get(Yn));break}}Ra()}function pr(t){const e=_e(t);return e===t?e:(Xe(e,"iterate",gs),vt(t)?e:e.map(We))}function Li(t){return Xe(t=_e(t),"iterate",gs),t}const Wp={__proto__:null,[Symbol.iterator](){return bo(this,Symbol.iterator,We)},concat(...t){return pr(this).concat(...t.map(e=>te(e)?pr(e):e))},entries(){return bo(this,"entries",t=>(t[1]=We(t[1]),t))},every(t,e){return Kt(this,"every",t,e,void 0,arguments)},filter(t,e){return Kt(this,"filter",t,e,n=>n.map(We),arguments)},find(t,e){return Kt(this,"find",t,e,We,arguments)},findIndex(t,e){return Kt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Kt(this,"findLast",t,e,We,arguments)},findLastIndex(t,e){return Kt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Kt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Io(this,"includes",t)},indexOf(...t){return Io(this,"indexOf",t)},join(t){return pr(this).join(t)},lastIndexOf(...t){return Io(this,"lastIndexOf",t)},map(t,e){return Kt(this,"map",t,e,void 0,arguments)},pop(){return Jr(this,"pop")},push(...t){return Jr(this,"push",t)},reduce(t,...e){return oc(this,"reduce",t,e)},reduceRight(t,...e){return oc(this,"reduceRight",t,e)},shift(){return Jr(this,"shift")},some(t,e){return Kt(this,"some",t,e,void 0,arguments)},splice(...t){return Jr(this,"splice",t)},toReversed(){return pr(this).toReversed()},toSorted(t){return pr(this).toSorted(t)},toSpliced(...t){return pr(this).toSpliced(...t)},unshift(...t){return Jr(this,"unshift",t)},values(){return bo(this,"values",We)}};function bo(t,e,n){const r=Li(t),s=r[e]();return r!==t&&!vt(t)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=n(o.value)),o}),s}const Gp=Array.prototype;function Kt(t,e,n,r,s,o){const a=Li(t),c=a!==t&&!vt(t),u=a[e];if(u!==Gp[e]){const g=u.apply(t,o);return c?We(g):g}let f=n;a!==t&&(c?f=function(g,m){return n.call(this,We(g),m,t)}:n.length>2&&(f=function(g,m){return n.call(this,g,m,t)}));const d=u.call(a,f,r);return c&&s?s(d):d}function oc(t,e,n,r){const s=Li(t);let o=n;return s!==t&&(vt(t)?n.length>3&&(o=function(a,c,u){return n.call(this,a,c,u,t)}):o=function(a,c,u){return n.call(this,a,We(c),u,t)}),s[e](o,...r)}function Io(t,e,n){const r=_e(t);Xe(r,"iterate",gs);const s=r[e](...n);return(s===-1||s===!1)&&xa(n[0])?(n[0]=_e(n[0]),r[e](...n)):s}function Jr(t,e,n=[]){on(),ka();const r=_e(t)[e].apply(t,n);return Ra(),an(),r}const zp=Ea("__proto__,__v_isRef,__isVue"),Eh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ln));function qp(t){Ln(t)||(t=String(t));const e=_e(this);return Xe(e,"has",t),e.hasOwnProperty(t)}class Th{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(s?o?rg:kh:o?Ch:Ah).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=te(e);if(!s){let u;if(a&&(u=Wp[n]))return u;if(n==="hasOwnProperty")return qp}const c=Reflect.get(e,n,Ye(e)?e:r);return(Ln(n)?Eh.has(n):zp(n))||(s||Xe(e,"get",n),o)?c:Ye(c)?a&&Aa(n)?c:c.value:Re(c)?s?Ph(c):Mi(c):c}}class Sh extends Th{constructor(e=!1){super(!1,e)}set(e,n,r,s){let o=e[n];if(!this._isShallow){const u=Nn(o);if(!vt(r)&&!Nn(r)&&(o=_e(o),r=_e(r)),!te(e)&&Ye(o)&&!Ye(r))return u?!1:(o.value=r,!0)}const a=te(e)&&Aa(n)?Number(n)<e.length:we(e,n),c=Reflect.set(e,n,r,Ye(e)?e:s);return e===_e(s)&&(a?Rn(r,o)&&Qt(e,"set",n,r):Qt(e,"add",n,r)),c}deleteProperty(e,n){const r=we(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Qt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ln(n)||!Eh.has(n))&&Xe(e,"has",n),r}ownKeys(e){return Xe(e,"iterate",te(e)?"length":Yn),Reflect.ownKeys(e)}}class Kp extends Th{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Jp=new Sh,Xp=new Kp,Yp=new Sh(!0);const Xo=t=>t,Js=t=>Reflect.getPrototypeOf(t);function Qp(t,e,n){return function(...r){const s=this.__v_raw,o=_e(s),a=yr(o),c=t==="entries"||t===Symbol.iterator&&a,u=t==="keys"&&a,f=s[t](...r),d=n?Xo:e?fi:We;return!e&&Xe(o,"iterate",u?Jo:Yn),{next(){const{value:g,done:m}=f.next();return m?{value:g,done:m}:{value:c?[d(g[0]),d(g[1])]:d(g),done:m}},[Symbol.iterator](){return this}}}}function Xs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Zp(t,e){const n={get(s){const o=this.__v_raw,a=_e(o),c=_e(s);t||(Rn(s,c)&&Xe(a,"get",s),Xe(a,"get",c));const{has:u}=Js(a),f=e?Xo:t?fi:We;if(u.call(a,s))return f(o.get(s));if(u.call(a,c))return f(o.get(c));o!==a&&o.get(s)},get size(){const s=this.__v_raw;return!t&&Xe(_e(s),"iterate",Yn),Reflect.get(s,"size",s)},has(s){const o=this.__v_raw,a=_e(o),c=_e(s);return t||(Rn(s,c)&&Xe(a,"has",s),Xe(a,"has",c)),s===c?o.has(s):o.has(s)||o.has(c)},forEach(s,o){const a=this,c=a.__v_raw,u=_e(c),f=e?Xo:t?fi:We;return!t&&Xe(u,"iterate",Yn),c.forEach((d,g)=>s.call(o,f(d),f(g),a))}};return je(n,t?{add:Xs("add"),set:Xs("set"),delete:Xs("delete"),clear:Xs("clear")}:{add(s){!e&&!vt(s)&&!Nn(s)&&(s=_e(s));const o=_e(this);return Js(o).has.call(o,s)||(o.add(s),Qt(o,"add",s,s)),this},set(s,o){!e&&!vt(o)&&!Nn(o)&&(o=_e(o));const a=_e(this),{has:c,get:u}=Js(a);let f=c.call(a,s);f||(s=_e(s),f=c.call(a,s));const d=u.call(a,s);return a.set(s,o),f?Rn(o,d)&&Qt(a,"set",s,o):Qt(a,"add",s,o),this},delete(s){const o=_e(this),{has:a,get:c}=Js(o);let u=a.call(o,s);u||(s=_e(s),u=a.call(o,s)),c&&c.call(o,s);const f=o.delete(s);return u&&Qt(o,"delete",s,void 0),f},clear(){const s=_e(this),o=s.size!==0,a=s.clear();return o&&Qt(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Qp(s,t,e)}),n}function Na(t,e){const n=Zp(t,e);return(r,s,o)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(we(n,s)&&s in r?n:r,s,o)}const eg={get:Na(!1,!1)},tg={get:Na(!1,!0)},ng={get:Na(!0,!1)};const Ah=new WeakMap,Ch=new WeakMap,kh=new WeakMap,rg=new WeakMap;function sg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ig(t){return t.__v_skip||!Object.isExtensible(t)?0:sg(Pp(t))}function Mi(t){return Nn(t)?t:Da(t,!1,Jp,eg,Ah)}function Rh(t){return Da(t,!1,Yp,tg,Ch)}function Ph(t){return Da(t,!0,Xp,ng,kh)}function Da(t,e,n,r,s){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=ig(t);if(o===0)return t;const a=s.get(t);if(a)return a;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function wr(t){return Nn(t)?wr(t.__v_raw):!!(t&&t.__v_isReactive)}function Nn(t){return!!(t&&t.__v_isReadonly)}function vt(t){return!!(t&&t.__v_isShallow)}function xa(t){return t?!!t.__v_raw:!1}function _e(t){const e=t&&t.__v_raw;return e?_e(e):t}function og(t){return!we(t,"__v_skip")&&Object.isExtensible(t)&&Go(t,"__v_skip",!0),t}const We=t=>Re(t)?Mi(t):t,fi=t=>Re(t)?Ph(t):t;function Ye(t){return t?t.__v_isRef===!0:!1}function ke(t){return Oh(t,!1)}function ag(t){return Oh(t,!0)}function Oh(t,e){return Ye(t)?t:new lg(t,e)}class lg{constructor(e,n){this.dep=new Oa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:_e(e),this._value=n?e:We(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||vt(e)||Nn(e);e=r?e:_e(e),Rn(e,n)&&(this._rawValue=e,this._value=r?e:We(e),this.dep.trigger())}}function Te(t){return Ye(t)?t.value:t}const cg={get:(t,e,n)=>e==="__v_raw"?t:Te(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ye(s)&&!Ye(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Nh(t){return wr(t)?t:new Proxy(t,cg)}class ug{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Oa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ps-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ae!==this)return vh(this,!0),!0}get value(){const e=this.dep.track();return wh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function hg(t,e,n=!1){let r,s;return oe(t)?r=t:(r=t.get,s=t.set),new ug(r,s,n)}const Ys={},di=new WeakMap;let Wn;function fg(t,e=!1,n=Wn){if(n){let r=di.get(n);r||di.set(n,r=[]),r.push(t)}}function dg(t,e,n=Se){const{immediate:r,deep:s,once:o,scheduler:a,augmentJob:c,call:u}=n,f=B=>s?B:vt(B)||s===!1||s===0?Zt(B,1):Zt(B);let d,g,m,S,R=!1,O=!1;if(Ye(t)?(g=()=>t.value,R=vt(t)):wr(t)?(g=()=>f(t),R=!0):te(t)?(O=!0,R=t.some(B=>wr(B)||vt(B)),g=()=>t.map(B=>{if(Ye(B))return B.value;if(wr(B))return f(B);if(oe(B))return u?u(B,2):B()})):oe(t)?e?g=u?()=>u(t,2):t:g=()=>{if(m){on();try{m()}finally{an()}}const B=Wn;Wn=d;try{return u?u(t,3,[S]):t(S)}finally{Wn=B}}:g=Vt,e&&s){const B=g,ne=s===!0?1/0:s;g=()=>Zt(B(),ne)}const V=Vp(),F=()=>{d.stop(),V&&V.active&&Sa(V.effects,d)};if(o&&e){const B=e;e=(...ne)=>{B(...ne),F()}}let j=O?new Array(t.length).fill(Ys):Ys;const G=B=>{if(!(!(d.flags&1)||!d.dirty&&!B))if(e){const ne=d.run();if(s||R||(O?ne.some((re,A)=>Rn(re,j[A])):Rn(ne,j))){m&&m();const re=Wn;Wn=d;try{const A=[ne,j===Ys?void 0:O&&j[0]===Ys?[]:j,S];j=ne,u?u(e,3,A):e(...A)}finally{Wn=re}}}else d.run()};return c&&c(G),d=new gh(g),d.scheduler=a?()=>a(G,!1):G,S=B=>fg(B,!1,d),m=d.onStop=()=>{const B=di.get(d);if(B){if(u)u(B,4);else for(const ne of B)ne();di.delete(d)}},e?r?G(!0):j=d.run():a?a(G.bind(null,!0),!0):d.run(),F.pause=d.pause.bind(d),F.resume=d.resume.bind(d),F.stop=F,F}function Zt(t,e=1/0,n){if(e<=0||!Re(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ye(t))Zt(t.value,e,n);else if(te(t))for(let r=0;r<t.length;r++)Zt(t[r],e,n);else if(lh(t)||yr(t))t.forEach(r=>{Zt(r,e,n)});else if(hh(t)){for(const r in t)Zt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Zt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cs(t,e,n,r){try{return r?t(...r):t()}catch(s){Ui(s,e,n)}}function Pt(t,e,n,r){if(oe(t)){const s=Cs(t,e,n,r);return s&&ch(s)&&s.catch(o=>{Ui(o,e,n)}),s}if(te(t)){const s=[];for(let o=0;o<t.length;o++)s.push(Pt(t[o],e,n,r));return s}}function Ui(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Se;if(e){let c=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](t,u,f)===!1)return}c=c.parent}if(o){on(),Cs(o,null,10,[t,u,f]),an();return}}pg(t,n,s,r,a)}function pg(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const tt=[];let Mt=-1;const br=[];let bn=null,gr=0;const Dh=Promise.resolve();let pi=null;function ms(t){const e=pi||Dh;return t?e.then(this?t.bind(this):t):e}function gg(t){let e=Mt+1,n=tt.length;for(;e<n;){const r=e+n>>>1,s=tt[r],o=vs(s);o<t||o===t&&s.flags&2?e=r+1:n=r}return e}function La(t){if(!(t.flags&1)){const e=vs(t),n=tt[tt.length-1];!n||!(t.flags&2)&&e>=vs(n)?tt.push(t):tt.splice(gg(e),0,t),t.flags|=1,xh()}}function xh(){pi||(pi=Dh.then(Mh))}function mg(t){te(t)?br.push(...t):bn&&t.id===-1?bn.splice(gr+1,0,t):t.flags&1||(br.push(t),t.flags|=1),xh()}function ac(t,e,n=Mt+1){for(;n<tt.length;n++){const r=tt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;tt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Lh(t){if(br.length){const e=[...new Set(br)].sort((n,r)=>vs(n)-vs(r));if(br.length=0,bn){bn.push(...e);return}for(bn=e,gr=0;gr<bn.length;gr++){const n=bn[gr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}bn=null,gr=0}}const vs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Mh(t){try{for(Mt=0;Mt<tt.length;Mt++){const e=tt[Mt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Cs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Mt<tt.length;Mt++){const e=tt[Mt];e&&(e.flags&=-2)}Mt=-1,tt.length=0,Lh(),pi=null,(tt.length||br.length)&&Mh()}}let ot=null,Uh=null;function gi(t){const e=ot;return ot=t,Uh=t&&t.type.__scopeId||null,e}function Fi(t,e=ot,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&_c(-1);const o=gi(e);let a;try{a=t(...s)}finally{gi(o),r._d&&_c(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function vg(t,e){if(ot===null)return t;const n=Gi(ot),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,u=Se]=e[s];o&&(oe(o)&&(o={mounted:o,updated:o}),o.deep&&Zt(a),r.push({dir:o,instance:n,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function $n(t,e,n,r){const s=t.dirs,o=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];o&&(c.oldValue=o[a].value);let u=c.dir[r];u&&(on(),Pt(u,n,8,[t.el,c,t,e]),an())}}const _g=Symbol("_vte"),Fh=t=>t.__isTeleport,In=Symbol("_leaveCb"),Qs=Symbol("_enterCb");function yg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Nr(()=>{t.isMounted=!0}),Ma(()=>{t.isUnmounting=!0}),t}const mt=[Function,Array],jh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mt,onEnter:mt,onAfterEnter:mt,onEnterCancelled:mt,onBeforeLeave:mt,onLeave:mt,onAfterLeave:mt,onLeaveCancelled:mt,onBeforeAppear:mt,onAppear:mt,onAfterAppear:mt,onAppearCancelled:mt},$h=t=>{const e=t.subTree;return e.component?$h(e.component):e},wg={name:"BaseTransition",props:jh,setup(t,{slots:e}){const n=gm(),r=yg();return()=>{const s=e.default&&Hh(e.default(),!0);if(!s||!s.length)return;const o=Vh(s),a=_e(t),{mode:c}=a;if(r.isLeaving)return Eo(o);const u=lc(o);if(!u)return Eo(o);let f=Yo(u,a,r,n,g=>f=g);u.type!==nt&&_s(u,f);let d=n.subTree&&lc(n.subTree);if(d&&d.type!==nt&&!zn(u,d)&&$h(n).type!==nt){let g=Yo(d,a,r,n);if(_s(d,g),c==="out-in"&&u.type!==nt)return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete g.afterLeave,d=void 0},Eo(o);c==="in-out"&&u.type!==nt?g.delayLeave=(m,S,R)=>{const O=Bh(r,d);O[String(d.key)]=d,m[In]=()=>{S(),m[In]=void 0,delete f.delayedLeave,d=void 0},f.delayedLeave=()=>{R(),delete f.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return o}}};function Vh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==nt){e=n;break}}return e}const bg=wg;function Bh(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Yo(t,e,n,r,s){const{appear:o,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:f,onAfterEnter:d,onEnterCancelled:g,onBeforeLeave:m,onLeave:S,onAfterLeave:R,onLeaveCancelled:O,onBeforeAppear:V,onAppear:F,onAfterAppear:j,onAppearCancelled:G}=e,B=String(t.key),ne=Bh(n,t),re=(v,E)=>{v&&Pt(v,r,9,E)},A=(v,E)=>{const T=E[1];re(v,E),te(v)?v.every(I=>I.length<=1)&&T():v.length<=1&&T()},_={mode:a,persisted:c,beforeEnter(v){let E=u;if(!n.isMounted)if(o)E=V||u;else return;v[In]&&v[In](!0);const T=ne[B];T&&zn(t,T)&&T.el[In]&&T.el[In](),re(E,[v])},enter(v){let E=f,T=d,I=g;if(!n.isMounted)if(o)E=F||f,T=j||d,I=G||g;else return;let w=!1;const Ie=v[Qs]=Ue=>{w||(w=!0,Ue?re(I,[v]):re(T,[v]),_.delayedLeave&&_.delayedLeave(),v[Qs]=void 0)};E?A(E,[v,Ie]):Ie()},leave(v,E){const T=String(t.key);if(v[Qs]&&v[Qs](!0),n.isUnmounting)return E();re(m,[v]);let I=!1;const w=v[In]=Ie=>{I||(I=!0,E(),Ie?re(O,[v]):re(R,[v]),v[In]=void 0,ne[T]===t&&delete ne[T])};ne[T]=t,S?A(S,[v,w]):w()},clone(v){const E=Yo(v,e,n,r,s);return s&&s(E),E}};return _}function Eo(t){if($i(t))return t=Dn(t),t.children=null,t}function lc(t){if(!$i(t))return Fh(t.type)&&t.children?Vh(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&oe(n.default))return n.default()}}function _s(t,e){t.shapeFlag&6&&t.component?(t.transition=e,_s(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Hh(t,e=!1,n){let r=[],s=0;for(let o=0;o<t.length;o++){let a=t[o];const c=n==null?a.key:String(n)+String(a.key!=null?a.key:o);a.type===Ge?(a.patchFlag&128&&s++,r=r.concat(Hh(a.children,e,c))):(e||a.type!==nt)&&r.push(c!=null?Dn(a,{key:c}):a)}if(s>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function ji(t,e){return oe(t)?je({name:t.name},e,{setup:t}):t}function Wh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ns(t,e,n,r,s=!1){if(te(t)){t.forEach((R,O)=>ns(R,e&&(te(e)?e[O]:e),n,r,s));return}if(rs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ns(t,e,n,r.component.subTree);return}const o=r.shapeFlag&4?Gi(r.component):r.el,a=s?null:o,{i:c,r:u}=t,f=e&&e.r,d=c.refs===Se?c.refs={}:c.refs,g=c.setupState,m=_e(g),S=g===Se?()=>!1:R=>we(m,R);if(f!=null&&f!==u&&(xe(f)?(d[f]=null,S(f)&&(g[f]=null)):Ye(f)&&(f.value=null)),oe(u))Cs(u,c,12,[a,d]);else{const R=xe(u),O=Ye(u);if(R||O){const V=()=>{if(t.f){const F=R?S(u)?g[u]:d[u]:u.value;s?te(F)&&Sa(F,o):te(F)?F.includes(o)||F.push(o):R?(d[u]=[o],S(u)&&(g[u]=d[u])):(u.value=[o],t.k&&(d[t.k]=u.value))}else R?(d[u]=a,S(u)&&(g[u]=a)):O&&(u.value=a,t.k&&(d[t.k]=a))};a?(V.id=-1,ct(V,n)):V()}}}xi().requestIdleCallback;xi().cancelIdleCallback;const rs=t=>!!t.type.__asyncLoader,$i=t=>t.type.__isKeepAlive;function Gh(t,e){qh(t,"a",e)}function zh(t,e){qh(t,"da",e)}function qh(t,e,n=ze){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Vi(e,r,n),n){let s=n.parent;for(;s&&s.parent;)$i(s.parent.vnode)&&Ig(r,e,n,s),s=s.parent}}function Ig(t,e,n,r){const s=Vi(e,t,r,!0);Bi(()=>{Sa(r[e],s)},n)}function Vi(t,e,n=ze,r=!1){if(n){const s=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{on();const c=ks(n),u=Pt(e,n,t,a);return c(),an(),u});return r?s.unshift(o):s.push(o),o}}const un=t=>(e,n=ze)=>{(!ws||t==="sp")&&Vi(t,(...r)=>e(...r),n)},Eg=un("bm"),Nr=un("m"),Tg=un("bu"),Sg=un("u"),Ma=un("bum"),Bi=un("um"),Ag=un("sp"),Cg=un("rtg"),kg=un("rtc");function Rg(t,e=ze){Vi("ec",t,e)}const Pg="components";function Kh(t,e){return Ng(Pg,t,!0,e)||t}const Og=Symbol.for("v-ndc");function Ng(t,e,n=!0,r=!1){const s=ot||ze;if(s){const o=s.type;{const c=wm(o,!1);if(c&&(c===e||c===wt(e)||c===Di(wt(e))))return o}const a=cc(s[t]||o[t],e)||cc(s.appContext[t],e);return!a&&r?o:a}}function cc(t,e){return t&&(t[e]||t[wt(e)]||t[Di(wt(e))])}function Qo(t,e,n,r){let s;const o=n,a=te(t);if(a||xe(t)){const c=a&&wr(t);let u=!1,f=!1;c&&(u=!vt(t),f=Nn(t),t=Li(t)),s=new Array(t.length);for(let d=0,g=t.length;d<g;d++)s[d]=e(u?f?fi(We(t[d])):We(t[d]):t[d],d,void 0,o)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,o)}else if(Re(t))if(t[Symbol.iterator])s=Array.from(t,(c,u)=>e(c,u,void 0,o));else{const c=Object.keys(t);s=new Array(c.length);for(let u=0,f=c.length;u<f;u++){const d=c[u];s[u]=e(t[d],d,u,o)}}else s=[];return s}const Zo=t=>t?gf(t)?Gi(t):Zo(t.parent):null,ss=je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Zo(t.parent),$root:t=>Zo(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Xh(t),$forceUpdate:t=>t.f||(t.f=()=>{La(t.update)}),$nextTick:t=>t.n||(t.n=ms.bind(t.proxy)),$watch:t=>Zg.bind(t)}),To=(t,e)=>t!==Se&&!t.__isScriptSetup&&we(t,e),Dg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:o,accessCache:a,type:c,appContext:u}=t;let f;if(e[0]!=="$"){const S=a[e];if(S!==void 0)switch(S){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return o[e]}else{if(To(r,e))return a[e]=1,r[e];if(s!==Se&&we(s,e))return a[e]=2,s[e];if((f=t.propsOptions[0])&&we(f,e))return a[e]=3,o[e];if(n!==Se&&we(n,e))return a[e]=4,n[e];ea&&(a[e]=0)}}const d=ss[e];let g,m;if(d)return e==="$attrs"&&Xe(t.attrs,"get",""),d(t);if((g=c.__cssModules)&&(g=g[e]))return g;if(n!==Se&&we(n,e))return a[e]=4,n[e];if(m=u.config.globalProperties,we(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return To(s,e)?(s[e]=n,!0):r!==Se&&we(r,e)?(r[e]=n,!0):we(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==Se&&we(t,a)||To(e,a)||(c=o[0])&&we(c,a)||we(r,a)||we(ss,a)||we(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:we(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function uc(t){return te(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ea=!0;function xg(t){const e=Xh(t),n=t.proxy,r=t.ctx;ea=!1,e.beforeCreate&&hc(e.beforeCreate,t,"bc");const{data:s,computed:o,methods:a,watch:c,provide:u,inject:f,created:d,beforeMount:g,mounted:m,beforeUpdate:S,updated:R,activated:O,deactivated:V,beforeDestroy:F,beforeUnmount:j,destroyed:G,unmounted:B,render:ne,renderTracked:re,renderTriggered:A,errorCaptured:_,serverPrefetch:v,expose:E,inheritAttrs:T,components:I,directives:w,filters:Ie}=e;if(f&&Lg(f,r,null),a)for(const he in a){const ue=a[he];oe(ue)&&(r[he]=ue.bind(n))}if(s){const he=s.call(n,n);Re(he)&&(t.data=Mi(he))}if(ea=!0,o)for(const he in o){const ue=o[he],lt=oe(ue)?ue.bind(n,n):oe(ue.get)?ue.get.bind(n,n):Vt,bt=!oe(ue)&&oe(ue.set)?ue.set.bind(n):Vt,ft=Fe({get:lt,set:bt});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>ft.value,set:Oe=>ft.value=Oe})}if(c)for(const he in c)Jh(c[he],r,n,he);if(u){const he=oe(u)?u.call(n):u;Reflect.ownKeys(he).forEach(ue=>{ri(ue,he[ue])})}d&&hc(d,t,"c");function Pe(he,ue){te(ue)?ue.forEach(lt=>he(lt.bind(n))):ue&&he(ue.bind(n))}if(Pe(Eg,g),Pe(Nr,m),Pe(Tg,S),Pe(Sg,R),Pe(Gh,O),Pe(zh,V),Pe(Rg,_),Pe(kg,re),Pe(Cg,A),Pe(Ma,j),Pe(Bi,B),Pe(Ag,v),te(E))if(E.length){const he=t.exposed||(t.exposed={});E.forEach(ue=>{Object.defineProperty(he,ue,{get:()=>n[ue],set:lt=>n[ue]=lt})})}else t.exposed||(t.exposed={});ne&&t.render===Vt&&(t.render=ne),T!=null&&(t.inheritAttrs=T),I&&(t.components=I),w&&(t.directives=w),v&&Wh(t)}function Lg(t,e,n=Vt){te(t)&&(t=ta(t));for(const r in t){const s=t[r];let o;Re(s)?"default"in s?o=_t(s.from||r,s.default,!0):o=_t(s.from||r):o=_t(s),Ye(o)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function hc(t,e,n){Pt(te(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Jh(t,e,n,r){let s=r.includes(".")?uf(n,r):()=>n[r];if(xe(t)){const o=e[t];oe(o)&&Qn(s,o)}else if(oe(t))Qn(s,t.bind(n));else if(Re(t))if(te(t))t.forEach(o=>Jh(o,e,n,r));else{const o=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(o)&&Qn(s,o,t)}}function Xh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:!s.length&&!n&&!r?u=e:(u={},s.length&&s.forEach(f=>mi(u,f,a,!0)),mi(u,e,a)),Re(e)&&o.set(e,u),u}function mi(t,e,n,r=!1){const{mixins:s,extends:o}=e;o&&mi(t,o,n,!0),s&&s.forEach(a=>mi(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=Mg[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const Mg={data:fc,props:dc,emits:dc,methods:Qr,computed:Qr,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:Qr,directives:Qr,watch:Fg,provide:fc,inject:Ug};function fc(t,e){return e?t?function(){return je(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function Ug(t,e){return Qr(ta(t),ta(e))}function ta(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ze(t,e){return t?[...new Set([].concat(t,e))]:e}function Qr(t,e){return t?je(Object.create(null),t,e):e}function dc(t,e){return t?te(t)&&te(e)?[...new Set([...t,...e])]:je(Object.create(null),uc(t),uc(e??{})):e}function Fg(t,e){if(!t)return e;if(!e)return t;const n=je(Object.create(null),t);for(const r in e)n[r]=Ze(t[r],e[r]);return n}function Yh(){return{app:null,config:{isNativeTag:kp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jg=0;function $g(t,e){return function(r,s=null){oe(r)||(r=je({},r)),s!=null&&!Re(s)&&(s=null);const o=Yh(),a=new WeakSet,c=[];let u=!1;const f=o.app={_uid:jg++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:Im,get config(){return o.config},set config(d){},use(d,...g){return a.has(d)||(d&&oe(d.install)?(a.add(d),d.install(f,...g)):oe(d)&&(a.add(d),d(f,...g))),f},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),f},component(d,g){return g?(o.components[d]=g,f):o.components[d]},directive(d,g){return g?(o.directives[d]=g,f):o.directives[d]},mount(d,g,m){if(!u){const S=f._ceVNode||Le(r,s);return S.appContext=o,m===!0?m="svg":m===!1&&(m=void 0),t(S,d,m),u=!0,f._container=d,d.__vue_app__=f,Gi(S.component)}},onUnmount(d){c.push(d)},unmount(){u&&(Pt(c,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(d,g){return o.provides[d]=g,f},runWithContext(d){const g=Ir;Ir=f;try{return d()}finally{Ir=g}}};return f}}let Ir=null;function ri(t,e){if(ze){let n=ze.provides;const r=ze.parent&&ze.parent.provides;r===n&&(n=ze.provides=Object.create(r)),n[t]=e}}function _t(t,e,n=!1){const r=ze||ot;if(r||Ir){let s=Ir?Ir._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&oe(e)?e.call(r&&r.proxy):e}}const Qh={},Zh=()=>Object.create(Qh),ef=t=>Object.getPrototypeOf(t)===Qh;function Vg(t,e,n,r=!1){const s={},o=Zh();t.propsDefaults=Object.create(null),tf(t,e,s,o);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:Rh(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function Bg(t,e,n,r){const{props:s,attrs:o,vnode:{patchFlag:a}}=t,c=_e(s),[u]=t.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let g=0;g<d.length;g++){let m=d[g];if(Hi(t.emitsOptions,m))continue;const S=e[m];if(u)if(we(o,m))S!==o[m]&&(o[m]=S,f=!0);else{const R=wt(m);s[R]=na(u,c,R,S,t,!1)}else S!==o[m]&&(o[m]=S,f=!0)}}}else{tf(t,e,s,o)&&(f=!0);let d;for(const g in c)(!e||!we(e,g)&&((d=Mn(g))===g||!we(e,d)))&&(u?n&&(n[g]!==void 0||n[d]!==void 0)&&(s[g]=na(u,c,g,void 0,t,!0)):delete s[g]);if(o!==c)for(const g in o)(!e||!we(e,g))&&(delete o[g],f=!0)}f&&Qt(t.attrs,"set","")}function tf(t,e,n,r){const[s,o]=t.propsOptions;let a=!1,c;if(e)for(let u in e){if(Zr(u))continue;const f=e[u];let d;s&&we(s,d=wt(u))?!o||!o.includes(d)?n[d]=f:(c||(c={}))[d]=f:Hi(t.emitsOptions,u)||(!(u in r)||f!==r[u])&&(r[u]=f,a=!0)}if(o){const u=_e(n),f=c||Se;for(let d=0;d<o.length;d++){const g=o[d];n[g]=na(s,u,g,f[g],t,!we(f,g))}}return a}function na(t,e,n,r,s,o){const a=t[n];if(a!=null){const c=we(a,"default");if(c&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&oe(u)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const d=ks(s);r=f[n]=u.call(null,e),d()}}else r=u;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!c?r=!1:a[1]&&(r===""||r===Mn(n))&&(r=!0))}return r}const Hg=new WeakMap;function nf(t,e,n=!1){const r=n?Hg:e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!oe(t)){const d=g=>{u=!0;const[m,S]=nf(g,e,!0);je(a,m),S&&c.push(...S)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!o&&!u)return Re(t)&&r.set(t,_r),_r;if(te(o))for(let d=0;d<o.length;d++){const g=wt(o[d]);pc(g)&&(a[g]=Se)}else if(o)for(const d in o){const g=wt(d);if(pc(g)){const m=o[d],S=a[g]=te(m)||oe(m)?{type:m}:je({},m),R=S.type;let O=!1,V=!0;if(te(R))for(let F=0;F<R.length;++F){const j=R[F],G=oe(j)&&j.name;if(G==="Boolean"){O=!0;break}else G==="String"&&(V=!1)}else O=oe(R)&&R.name==="Boolean";S[0]=O,S[1]=V,(O||we(S,"default"))&&c.push(g)}}const f=[a,c];return Re(t)&&r.set(t,f),f}function pc(t){return t[0]!=="$"&&!Zr(t)}const Ua=t=>t[0]==="_"||t==="$stable",Fa=t=>te(t)?t.map(Ft):[Ft(t)],Wg=(t,e,n)=>{if(e._n)return e;const r=Fi((...s)=>Fa(e(...s)),n);return r._c=!1,r},rf=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ua(s))continue;const o=t[s];if(oe(o))e[s]=Wg(s,o,r);else if(o!=null){const a=Fa(o);e[s]=()=>a}}},sf=(t,e)=>{const n=Fa(e);t.slots.default=()=>n},of=(t,e,n)=>{for(const r in e)(n||!Ua(r))&&(t[r]=e[r])},Gg=(t,e,n)=>{const r=t.slots=Zh();if(t.vnode.shapeFlag&32){const s=e.__;s&&Go(r,"__",s,!0);const o=e._;o?(of(r,e,n),n&&Go(r,"_",o,!0)):rf(e,r)}else e&&sf(t,e)},zg=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=Se;if(r.shapeFlag&32){const c=e._;c?n&&c===1?o=!1:of(s,e,n):(o=!e.$stable,rf(e,s)),a=e}else e&&(sf(t,e),a={default:1});if(o)for(const c in s)!Ua(c)&&a[c]==null&&delete s[c]},ct=om;function qg(t){return Kg(t)}function Kg(t,e){const n=xi();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:a,createText:c,createComment:u,setText:f,setElementText:d,parentNode:g,nextSibling:m,setScopeId:S=Vt,insertStaticContent:R}=t,O=(y,b,C,x=null,M=null,L=null,q=void 0,H=null,$=!!b.dynamicChildren)=>{if(y===b)return;y&&!zn(y,b)&&(x=D(y),Oe(y,M,L,!0),y=null),b.patchFlag===-2&&($=!1,b.dynamicChildren=null);const{type:U,ref:Q,shapeFlag:z}=b;switch(U){case Wi:V(y,b,C,x);break;case nt:F(y,b,C,x);break;case si:y==null&&j(b,C,x,q);break;case Ge:I(y,b,C,x,M,L,q,H,$);break;default:z&1?ne(y,b,C,x,M,L,q,H,$):z&6?w(y,b,C,x,M,L,q,H,$):(z&64||z&128)&&U.process(y,b,C,x,M,L,q,H,$,X)}Q!=null&&M?ns(Q,y&&y.ref,L,b||y,!b):Q==null&&y&&y.ref!=null&&ns(y.ref,null,L,y,!0)},V=(y,b,C,x)=>{if(y==null)r(b.el=c(b.children),C,x);else{const M=b.el=y.el;b.children!==y.children&&f(M,b.children)}},F=(y,b,C,x)=>{y==null?r(b.el=u(b.children||""),C,x):b.el=y.el},j=(y,b,C,x)=>{[y.el,y.anchor]=R(y.children,b,C,x,y.el,y.anchor)},G=({el:y,anchor:b},C,x)=>{let M;for(;y&&y!==b;)M=m(y),r(y,C,x),y=M;r(b,C,x)},B=({el:y,anchor:b})=>{let C;for(;y&&y!==b;)C=m(y),s(y),y=C;s(b)},ne=(y,b,C,x,M,L,q,H,$)=>{b.type==="svg"?q="svg":b.type==="math"&&(q="mathml"),y==null?re(b,C,x,M,L,q,H,$):v(y,b,M,L,q,H,$)},re=(y,b,C,x,M,L,q,H)=>{let $,U;const{props:Q,shapeFlag:z,transition:Y,dirs:se}=y;if($=y.el=a(y.type,L,Q&&Q.is,Q),z&8?d($,y.children):z&16&&_(y.children,$,null,x,M,So(y,L),q,H),se&&$n(y,null,x,"created"),A($,y,y.scopeId,q,x),Q){for(const ae in Q)ae!=="value"&&!Zr(ae)&&o($,ae,null,Q[ae],L,x);"value"in Q&&o($,"value",null,Q.value,L),(U=Q.onVnodeBeforeMount)&&Lt(U,x,y)}se&&$n(y,null,x,"beforeMount");const Z=Jg(M,Y);Z&&Y.beforeEnter($),r($,b,C),((U=Q&&Q.onVnodeMounted)||Z||se)&&ct(()=>{U&&Lt(U,x,y),Z&&Y.enter($),se&&$n(y,null,x,"mounted")},M)},A=(y,b,C,x,M)=>{if(C&&S(y,C),x)for(let L=0;L<x.length;L++)S(y,x[L]);if(M){let L=M.subTree;if(b===L||ff(L.type)&&(L.ssContent===b||L.ssFallback===b)){const q=M.vnode;A(y,q,q.scopeId,q.slotScopeIds,M.parent)}}},_=(y,b,C,x,M,L,q,H,$=0)=>{for(let U=$;U<y.length;U++){const Q=y[U]=H?En(y[U]):Ft(y[U]);O(null,Q,b,C,x,M,L,q,H)}},v=(y,b,C,x,M,L,q)=>{const H=b.el=y.el;let{patchFlag:$,dynamicChildren:U,dirs:Q}=b;$|=y.patchFlag&16;const z=y.props||Se,Y=b.props||Se;let se;if(C&&Vn(C,!1),(se=Y.onVnodeBeforeUpdate)&&Lt(se,C,b,y),Q&&$n(b,y,C,"beforeUpdate"),C&&Vn(C,!0),(z.innerHTML&&Y.innerHTML==null||z.textContent&&Y.textContent==null)&&d(H,""),U?E(y.dynamicChildren,U,H,C,x,So(b,M),L):q||ue(y,b,H,null,C,x,So(b,M),L,!1),$>0){if($&16)T(H,z,Y,C,M);else if($&2&&z.class!==Y.class&&o(H,"class",null,Y.class,M),$&4&&o(H,"style",z.style,Y.style,M),$&8){const Z=b.dynamicProps;for(let ae=0;ae<Z.length;ae++){const fe=Z[ae],$e=z[fe],Ve=Y[fe];(Ve!==$e||fe==="value")&&o(H,fe,$e,Ve,M,C)}}$&1&&y.children!==b.children&&d(H,b.children)}else!q&&U==null&&T(H,z,Y,C,M);((se=Y.onVnodeUpdated)||Q)&&ct(()=>{se&&Lt(se,C,b,y),Q&&$n(b,y,C,"updated")},x)},E=(y,b,C,x,M,L,q)=>{for(let H=0;H<b.length;H++){const $=y[H],U=b[H],Q=$.el&&($.type===Ge||!zn($,U)||$.shapeFlag&198)?g($.el):C;O($,U,Q,null,x,M,L,q,!0)}},T=(y,b,C,x,M)=>{if(b!==C){if(b!==Se)for(const L in b)!Zr(L)&&!(L in C)&&o(y,L,b[L],null,M,x);for(const L in C){if(Zr(L))continue;const q=C[L],H=b[L];q!==H&&L!=="value"&&o(y,L,H,q,M,x)}"value"in C&&o(y,"value",b.value,C.value,M)}},I=(y,b,C,x,M,L,q,H,$)=>{const U=b.el=y?y.el:c(""),Q=b.anchor=y?y.anchor:c("");let{patchFlag:z,dynamicChildren:Y,slotScopeIds:se}=b;se&&(H=H?H.concat(se):se),y==null?(r(U,C,x),r(Q,C,x),_(b.children||[],C,Q,M,L,q,H,$)):z>0&&z&64&&Y&&y.dynamicChildren?(E(y.dynamicChildren,Y,C,M,L,q,H),(b.key!=null||M&&b===M.subTree)&&af(y,b,!0)):ue(y,b,C,Q,M,L,q,H,$)},w=(y,b,C,x,M,L,q,H,$)=>{b.slotScopeIds=H,y==null?b.shapeFlag&512?M.ctx.activate(b,C,x,q,$):Ie(b,C,x,M,L,q,$):Ue(y,b,$)},Ie=(y,b,C,x,M,L,q)=>{const H=y.component=pm(y,x,M);if($i(y)&&(H.ctx.renderer=X),mm(H,!1,q),H.asyncDep){if(M&&M.registerDep(H,Pe,q),!y.el){const $=H.subTree=Le(nt);F(null,$,b,C)}}else Pe(H,y,b,C,M,L,q)},Ue=(y,b,C)=>{const x=b.component=y.component;if(sm(y,b,C))if(x.asyncDep&&!x.asyncResolved){he(x,b,C);return}else x.next=b,x.update();else b.el=y.el,x.vnode=b},Pe=(y,b,C,x,M,L,q)=>{const H=()=>{if(y.isMounted){let{next:z,bu:Y,u:se,parent:Z,vnode:ae}=y;{const qe=lf(y);if(qe){z&&(z.el=ae.el,he(y,z,q)),qe.asyncDep.then(()=>{y.isUnmounted||H()});return}}let fe=z,$e;Vn(y,!1),z?(z.el=ae.el,he(y,z,q)):z=ae,Y&&ni(Y),($e=z.props&&z.props.onVnodeBeforeUpdate)&&Lt($e,Z,z,ae),Vn(y,!0);const Ve=mc(y),dt=y.subTree;y.subTree=Ve,O(dt,Ve,g(dt.el),D(dt),y,M,L),z.el=Ve.el,fe===null&&im(y,Ve.el),se&&ct(se,M),($e=z.props&&z.props.onVnodeUpdated)&&ct(()=>Lt($e,Z,z,ae),M)}else{let z;const{el:Y,props:se}=b,{bm:Z,m:ae,parent:fe,root:$e,type:Ve}=y,dt=rs(b);Vn(y,!1),Z&&ni(Z),!dt&&(z=se&&se.onVnodeBeforeMount)&&Lt(z,fe,b),Vn(y,!0);{$e.ce&&$e.ce._def.shadowRoot!==!1&&$e.ce._injectChildStyle(Ve);const qe=y.subTree=mc(y);O(null,qe,C,x,y,M,L),b.el=qe.el}if(ae&&ct(ae,M),!dt&&(z=se&&se.onVnodeMounted)){const qe=b;ct(()=>Lt(z,fe,qe),M)}(b.shapeFlag&256||fe&&rs(fe.vnode)&&fe.vnode.shapeFlag&256)&&y.a&&ct(y.a,M),y.isMounted=!0,b=C=x=null}};y.scope.on();const $=y.effect=new gh(H);y.scope.off();const U=y.update=$.run.bind($),Q=y.job=$.runIfDirty.bind($);Q.i=y,Q.id=y.uid,$.scheduler=()=>La(Q),Vn(y,!0),U()},he=(y,b,C)=>{b.component=y;const x=y.vnode.props;y.vnode=b,y.next=null,Bg(y,b.props,x,C),zg(y,b.children,C),on(),ac(y),an()},ue=(y,b,C,x,M,L,q,H,$=!1)=>{const U=y&&y.children,Q=y?y.shapeFlag:0,z=b.children,{patchFlag:Y,shapeFlag:se}=b;if(Y>0){if(Y&128){bt(U,z,C,x,M,L,q,H,$);return}else if(Y&256){lt(U,z,C,x,M,L,q,H,$);return}}se&8?(Q&16&&st(U,M,L),z!==U&&d(C,z)):Q&16?se&16?bt(U,z,C,x,M,L,q,H,$):st(U,M,L,!0):(Q&8&&d(C,""),se&16&&_(z,C,x,M,L,q,H,$))},lt=(y,b,C,x,M,L,q,H,$)=>{y=y||_r,b=b||_r;const U=y.length,Q=b.length,z=Math.min(U,Q);let Y;for(Y=0;Y<z;Y++){const se=b[Y]=$?En(b[Y]):Ft(b[Y]);O(y[Y],se,C,null,M,L,q,H,$)}U>Q?st(y,M,L,!0,!1,z):_(b,C,x,M,L,q,H,$,z)},bt=(y,b,C,x,M,L,q,H,$)=>{let U=0;const Q=b.length;let z=y.length-1,Y=Q-1;for(;U<=z&&U<=Y;){const se=y[U],Z=b[U]=$?En(b[U]):Ft(b[U]);if(zn(se,Z))O(se,Z,C,null,M,L,q,H,$);else break;U++}for(;U<=z&&U<=Y;){const se=y[z],Z=b[Y]=$?En(b[Y]):Ft(b[Y]);if(zn(se,Z))O(se,Z,C,null,M,L,q,H,$);else break;z--,Y--}if(U>z){if(U<=Y){const se=Y+1,Z=se<Q?b[se].el:x;for(;U<=Y;)O(null,b[U]=$?En(b[U]):Ft(b[U]),C,Z,M,L,q,H,$),U++}}else if(U>Y)for(;U<=z;)Oe(y[U],M,L,!0),U++;else{const se=U,Z=U,ae=new Map;for(U=Z;U<=Y;U++){const Be=b[U]=$?En(b[U]):Ft(b[U]);Be.key!=null&&ae.set(Be.key,U)}let fe,$e=0;const Ve=Y-Z+1;let dt=!1,qe=0;const dn=new Array(Ve);for(U=0;U<Ve;U++)dn[U]=0;for(U=se;U<=z;U++){const Be=y[U];if($e>=Ve){Oe(Be,M,L,!0);continue}let pt;if(Be.key!=null)pt=ae.get(Be.key);else for(fe=Z;fe<=Y;fe++)if(dn[fe-Z]===0&&zn(Be,b[fe])){pt=fe;break}pt===void 0?Oe(Be,M,L,!0):(dn[pt-Z]=U+1,pt>=qe?qe=pt:dt=!0,O(Be,b[pt],C,null,M,L,q,H,$),$e++)}const Mr=dt?Xg(dn):_r;for(fe=Mr.length-1,U=Ve-1;U>=0;U--){const Be=Z+U,pt=b[Be],Ms=Be+1<Q?b[Be+1].el:x;dn[U]===0?O(null,pt,C,Ms,M,L,q,H,$):dt&&(fe<0||U!==Mr[fe]?ft(pt,C,Ms,2):fe--)}}},ft=(y,b,C,x,M=null)=>{const{el:L,type:q,transition:H,children:$,shapeFlag:U}=y;if(U&6){ft(y.component.subTree,b,C,x);return}if(U&128){y.suspense.move(b,C,x);return}if(U&64){q.move(y,b,C,X);return}if(q===Ge){r(L,b,C);for(let z=0;z<$.length;z++)ft($[z],b,C,x);r(y.anchor,b,C);return}if(q===si){G(y,b,C);return}if(x!==2&&U&1&&H)if(x===0)H.beforeEnter(L),r(L,b,C),ct(()=>H.enter(L),M);else{const{leave:z,delayLeave:Y,afterLeave:se}=H,Z=()=>{y.ctx.isUnmounted?s(L):r(L,b,C)},ae=()=>{z(L,()=>{Z(),se&&se()})};Y?Y(L,Z,ae):ae()}else r(L,b,C)},Oe=(y,b,C,x=!1,M=!1)=>{const{type:L,props:q,ref:H,children:$,dynamicChildren:U,shapeFlag:Q,patchFlag:z,dirs:Y,cacheIndex:se}=y;if(z===-2&&(M=!1),H!=null&&(on(),ns(H,null,C,y,!0),an()),se!=null&&(b.renderCache[se]=void 0),Q&256){b.ctx.deactivate(y);return}const Z=Q&1&&Y,ae=!rs(y);let fe;if(ae&&(fe=q&&q.onVnodeBeforeUnmount)&&Lt(fe,b,y),Q&6)xt(y.component,C,x);else{if(Q&128){y.suspense.unmount(C,x);return}Z&&$n(y,null,b,"beforeUnmount"),Q&64?y.type.remove(y,b,C,X,x):U&&!U.hasOnce&&(L!==Ge||z>0&&z&64)?st(U,b,C,!1,!0):(L===Ge&&z&384||!M&&Q&16)&&st($,b,C),x&&Ne(y)}(ae&&(fe=q&&q.onVnodeUnmounted)||Z)&&ct(()=>{fe&&Lt(fe,b,y),Z&&$n(y,null,b,"unmounted")},C)},Ne=y=>{const{type:b,el:C,anchor:x,transition:M}=y;if(b===Ge){fn(C,x);return}if(b===si){B(y);return}const L=()=>{s(C),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(y.shapeFlag&1&&M&&!M.persisted){const{leave:q,delayLeave:H}=M,$=()=>q(C,L);H?H(y.el,L,$):$()}else L()},fn=(y,b)=>{let C;for(;y!==b;)C=m(y),s(y),y=C;s(b)},xt=(y,b,C)=>{const{bum:x,scope:M,job:L,subTree:q,um:H,m:$,a:U,parent:Q,slots:{__:z}}=y;gc($),gc(U),x&&ni(x),Q&&te(z)&&z.forEach(Y=>{Q.renderCache[Y]=void 0}),M.stop(),L&&(L.flags|=8,Oe(q,y,b,C)),H&&ct(H,b),ct(()=>{y.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},st=(y,b,C,x=!1,M=!1,L=0)=>{for(let q=L;q<y.length;q++)Oe(y[q],b,C,x,M)},D=y=>{if(y.shapeFlag&6)return D(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const b=m(y.anchor||y.el),C=b&&b[_g];return C?m(C):b};let J=!1;const K=(y,b,C)=>{y==null?b._vnode&&Oe(b._vnode,null,null,!0):O(b._vnode||null,y,b,null,null,null,C),b._vnode=y,J||(J=!0,ac(),Lh(),J=!1)},X={p:O,um:Oe,m:ft,r:Ne,mt:Ie,mc:_,pc:ue,pbc:E,n:D,o:t};return{render:K,hydrate:void 0,createApp:$g(K)}}function So({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Jg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function af(t,e,n=!1){const r=t.children,s=e.children;if(te(r)&&te(s))for(let o=0;o<r.length;o++){const a=r[o];let c=s[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[o]=En(s[o]),c.el=a.el),!n&&c.patchFlag!==-2&&af(a,c)),c.type===Wi&&(c.el=a.el),c.type===nt&&!c.el&&(c.el=a.el)}}function Xg(t){const e=t.slice(),n=[0];let r,s,o,a,c;const u=t.length;for(r=0;r<u;r++){const f=t[r];if(f!==0){if(s=n[n.length-1],t[s]<f){e[r]=s,n.push(r);continue}for(o=0,a=n.length-1;o<a;)c=o+a>>1,t[n[c]]<f?o=c+1:a=c;f<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function lf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:lf(e)}function gc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Yg=Symbol.for("v-scx"),Qg=()=>_t(Yg);function Qn(t,e,n){return cf(t,e,n)}function cf(t,e,n=Se){const{immediate:r,deep:s,flush:o,once:a}=n,c=je({},n),u=e&&r||!e&&o!=="post";let f;if(ws){if(o==="sync"){const S=Qg();f=S.__watcherHandles||(S.__watcherHandles=[])}else if(!u){const S=()=>{};return S.stop=Vt,S.resume=Vt,S.pause=Vt,S}}const d=ze;c.call=(S,R,O)=>Pt(S,d,R,O);let g=!1;o==="post"?c.scheduler=S=>{ct(S,d&&d.suspense)}:o!=="sync"&&(g=!0,c.scheduler=(S,R)=>{R?S():La(S)}),c.augmentJob=S=>{e&&(S.flags|=4),g&&(S.flags|=2,d&&(S.id=d.uid,S.i=d))};const m=dg(t,e,c);return ws&&(f?f.push(m):u&&m()),m}function Zg(t,e,n){const r=this.proxy,s=xe(t)?t.includes(".")?uf(r,t):()=>r[t]:t.bind(r,r);let o;oe(e)?o=e:(o=e.handler,n=e);const a=ks(this),c=cf(s,o.bind(r),n);return a(),c}function uf(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const em=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${wt(e)}Modifiers`]||t[`${Mn(e)}Modifiers`];function tm(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Se;let s=n;const o=e.startsWith("update:"),a=o&&em(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>xe(d)?d.trim():d)),a.number&&(s=n.map(zo)));let c,u=r[c=_o(e)]||r[c=_o(wt(e))];!u&&o&&(u=r[c=_o(Mn(e))]),u&&Pt(u,t,6,s);const f=r[c+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Pt(f,t,6,s)}}function hf(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const o=t.emits;let a={},c=!1;if(!oe(t)){const u=f=>{const d=hf(f,e,!0);d&&(c=!0,je(a,d))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!o&&!c?(Re(t)&&r.set(t,null),null):(te(o)?o.forEach(u=>a[u]=null):je(a,o),Re(t)&&r.set(t,a),a)}function Hi(t,e){return!t||!Pi(e)?!1:(e=e.slice(2).replace(/Once$/,""),we(t,e[0].toLowerCase()+e.slice(1))||we(t,Mn(e))||we(t,e))}function mc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:f,renderCache:d,props:g,data:m,setupState:S,ctx:R,inheritAttrs:O}=t,V=gi(t);let F,j;try{if(n.shapeFlag&4){const B=s||r,ne=B;F=Ft(f.call(ne,B,d,g,S,m,R)),j=c}else{const B=e;F=Ft(B.length>1?B(g,{attrs:c,slots:a,emit:u}):B(g,null)),j=e.props?c:nm(c)}}catch(B){is.length=0,Ui(B,t,1),F=Le(nt)}let G=F;if(j&&O!==!1){const B=Object.keys(j),{shapeFlag:ne}=G;B.length&&ne&7&&(o&&B.some(Ta)&&(j=rm(j,o)),G=Dn(G,j,!1,!0))}return n.dirs&&(G=Dn(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&_s(G,n.transition),F=G,gi(V),F}const nm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Pi(n))&&((e||(e={}))[n]=t[n]);return e},rm=(t,e)=>{const n={};for(const r in t)(!Ta(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function sm(t,e,n){const{props:r,children:s,component:o}=t,{props:a,children:c,patchFlag:u}=e,f=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?vc(r,a,f):!!a;if(u&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const m=d[g];if(a[m]!==r[m]&&!Hi(f,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?vc(r,a,f):!0:!!a;return!1}function vc(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(e[o]!==t[o]&&!Hi(n,o))return!0}return!1}function im({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ff=t=>t.__isSuspense;function om(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):mg(t)}const Ge=Symbol.for("v-fgt"),Wi=Symbol.for("v-txt"),nt=Symbol.for("v-cmt"),si=Symbol.for("v-stc"),is=[];let ut=null;function le(t=!1){is.push(ut=t?null:[])}function am(){is.pop(),ut=is[is.length-1]||null}let ys=1;function _c(t,e=!1){ys+=t,t<0&&ut&&e&&(ut.hasOnce=!0)}function df(t){return t.dynamicChildren=ys>0?ut||_r:null,am(),ys>0&&ut&&ut.push(t),t}function ce(t,e,n,r,s,o){return df(N(t,e,n,r,s,o,!0))}function ja(t,e,n,r,s){return df(Le(t,e,n,r,s,!0))}function vi(t){return t?t.__v_isVNode===!0:!1}function zn(t,e){return t.type===e.type&&t.key===e.key}const pf=({key:t})=>t??null,ii=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xe(t)||Ye(t)||oe(t)?{i:ot,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,r=0,s=null,o=t===Ge?0:1,a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&pf(e),ref:e&&ii(e),scopeId:Uh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ot};return c?($a(u,n),o&128&&t.normalize(u)):n&&(u.shapeFlag|=xe(n)?8:16),ys>0&&!a&&ut&&(u.patchFlag>0||o&6)&&u.patchFlag!==32&&ut.push(u),u}const Le=lm;function lm(t,e=null,n=null,r=0,s=null,o=!1){if((!t||t===Og)&&(t=nt),vi(t)){const c=Dn(t,e,!0);return n&&$a(c,n),ys>0&&!o&&ut&&(c.shapeFlag&6?ut[ut.indexOf(t)]=c:ut.push(c)),c.patchFlag=-2,c}if(bm(t)&&(t=t.__vccOpts),e){e=cm(e);let{class:c,style:u}=e;c&&!xe(c)&&(e.class=Cr(c)),Re(u)&&(xa(u)&&!te(u)&&(u=je({},u)),e.style=Ca(u))}const a=xe(t)?1:ff(t)?128:Fh(t)?64:Re(t)?4:oe(t)?2:0;return N(t,e,n,r,s,a,o,!0)}function cm(t){return t?xa(t)||ef(t)?je({},t):t:null}function Dn(t,e,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:u}=t,f=e?hm(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&pf(f),ref:e&&e.ref?n&&o?te(o)?o.concat(ii(e)):[o,ii(e)]:ii(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Dn(t.ssContent),ssFallback:t.ssFallback&&Dn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&r&&_s(d,u.clone(d)),d}function kn(t=" ",e=0){return Le(Wi,null,t,e)}function um(t,e){const n=Le(si,null,t);return n.staticCount=e,n}function en(t="",e=!1){return e?(le(),ja(nt,null,t)):Le(nt,null,t)}function Ft(t){return t==null||typeof t=="boolean"?Le(nt):te(t)?Le(Ge,null,t.slice()):vi(t)?En(t):Le(Wi,null,String(t))}function En(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Dn(t)}function $a(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),$a(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ef(e)?e._ctx=ot:s===3&&ot&&(ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:ot},n=32):(e=String(e),r&64?(n=16,e=[kn(e)]):n=8);t.children=e,t.shapeFlag|=n}function hm(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Cr([e.class,r.class]));else if(s==="style")e.style=Ca([e.style,r.style]);else if(Pi(s)){const o=e[s],a=r[s];a&&o!==a&&!(te(o)&&o.includes(a))&&(e[s]=o?[].concat(o,a):a)}else s!==""&&(e[s]=r[s])}return e}function Lt(t,e,n,r=null){Pt(t,e,7,[n,r])}const fm=Yh();let dm=0;function pm(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||fm,o={uid:dm++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $p(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nf(r,s),emitsOptions:hf(r,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:r.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=tm.bind(null,o),t.ce&&t.ce(o),o}let ze=null;const gm=()=>ze||ot;let _i,ra;{const t=xi(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),o=>{s.length>1?s.forEach(a=>a(o)):s[0](o)}};_i=e("__VUE_INSTANCE_SETTERS__",n=>ze=n),ra=e("__VUE_SSR_SETTERS__",n=>ws=n)}const ks=t=>{const e=ze;return _i(t),t.scope.on(),()=>{t.scope.off(),_i(e)}},yc=()=>{ze&&ze.scope.off(),_i(null)};function gf(t){return t.vnode.shapeFlag&4}let ws=!1;function mm(t,e=!1,n=!1){e&&ra(e);const{props:r,children:s}=t.vnode,o=gf(t);Vg(t,r,o,e),Gg(t,s,n||e);const a=o?vm(t,e):void 0;return e&&ra(!1),a}function vm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Dg);const{setup:r}=n;if(r){on();const s=t.setupContext=r.length>1?ym(t):null,o=ks(t),a=Cs(r,t,0,[t.props,s]),c=ch(a);if(an(),o(),(c||t.sp)&&!rs(t)&&Wh(t),c){if(a.then(yc,yc),e)return a.then(u=>{wc(t,u)}).catch(u=>{Ui(u,t,0)});t.asyncDep=a}else wc(t,a)}else mf(t)}function wc(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=Nh(e)),mf(t)}function mf(t,e,n){const r=t.type;t.render||(t.render=r.render||Vt);{const s=ks(t);on();try{xg(t)}finally{an(),s()}}}const _m={get(t,e){return Xe(t,"get",""),t[e]}};function ym(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,_m),slots:t.slots,emit:t.emit,expose:e}}function Gi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Nh(og(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ss)return ss[n](t)},has(e,n){return n in e||n in ss}})):t.proxy}function wm(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function bm(t){return oe(t)&&"__vccOpts"in t}const Fe=(t,e)=>hg(t,e,ws);function Va(t,e,n){const r=arguments.length;return r===2?Re(e)&&!te(e)?vi(e)?Le(t,null,[e]):Le(t,e):Le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&vi(n)&&(n=[n]),Le(t,e,n))}const Im="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sa;const bc=typeof window<"u"&&window.trustedTypes;if(bc)try{sa=bc.createPolicy("vue",{createHTML:t=>t})}catch{}const vf=sa?t=>sa.createHTML(t):t=>t,Em="http://www.w3.org/2000/svg",Tm="http://www.w3.org/1998/Math/MathML",Yt=typeof document<"u"?document:null,Ic=Yt&&Yt.createElement("template"),Sm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Yt.createElementNS(Em,t):e==="mathml"?Yt.createElementNS(Tm,t):n?Yt.createElement(t,{is:n}):Yt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Yt.createTextNode(t),createComment:t=>Yt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Yt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,o){const a=n?n.previousSibling:e.lastChild;if(s&&(s===o||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{Ic.innerHTML=vf(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Ic.content;if(r==="svg"||r==="mathml"){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},vn="transition",Xr="animation",bs=Symbol("_vtc"),_f={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Am=je({},jh,_f),Cm=t=>(t.displayName="Transition",t.props=Am,t),yf=Cm((t,{slots:e})=>Va(bg,km(t),e)),Bn=(t,e=[])=>{te(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ec=t=>t?te(t)?t.some(e=>e.length>1):t.length>1:!1;function km(t){const e={};for(const I in t)I in _f||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:f=a,appearToClass:d=c,leaveFromClass:g=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:S=`${n}-leave-to`}=t,R=Rm(s),O=R&&R[0],V=R&&R[1],{onBeforeEnter:F,onEnter:j,onEnterCancelled:G,onLeave:B,onLeaveCancelled:ne,onBeforeAppear:re=F,onAppear:A=j,onAppearCancelled:_=G}=e,v=(I,w,Ie,Ue)=>{I._enterCancelled=Ue,Hn(I,w?d:c),Hn(I,w?f:a),Ie&&Ie()},E=(I,w)=>{I._isLeaving=!1,Hn(I,g),Hn(I,S),Hn(I,m),w&&w()},T=I=>(w,Ie)=>{const Ue=I?A:j,Pe=()=>v(w,I,Ie);Bn(Ue,[w,Pe]),Tc(()=>{Hn(w,I?u:o),Jt(w,I?d:c),Ec(Ue)||Sc(w,r,O,Pe)})};return je(e,{onBeforeEnter(I){Bn(F,[I]),Jt(I,o),Jt(I,a)},onBeforeAppear(I){Bn(re,[I]),Jt(I,u),Jt(I,f)},onEnter:T(!1),onAppear:T(!0),onLeave(I,w){I._isLeaving=!0;const Ie=()=>E(I,w);Jt(I,g),I._enterCancelled?(Jt(I,m),kc()):(kc(),Jt(I,m)),Tc(()=>{I._isLeaving&&(Hn(I,g),Jt(I,S),Ec(B)||Sc(I,r,V,Ie))}),Bn(B,[I,Ie])},onEnterCancelled(I){v(I,!1,void 0,!0),Bn(G,[I])},onAppearCancelled(I){v(I,!0,void 0,!0),Bn(_,[I])},onLeaveCancelled(I){E(I),Bn(ne,[I])}})}function Rm(t){if(t==null)return null;if(Re(t))return[Ao(t.enter),Ao(t.leave)];{const e=Ao(t);return[e,e]}}function Ao(t){return Dp(t)}function Jt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[bs]||(t[bs]=new Set)).add(e)}function Hn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[bs];n&&(n.delete(e),n.size||(t[bs]=void 0))}function Tc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Pm=0;function Sc(t,e,n,r){const s=t._endId=++Pm,o=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(o,n);const{type:a,timeout:c,propCount:u}=Om(t,e);if(!a)return r();const f=a+"end";let d=0;const g=()=>{t.removeEventListener(f,m),o()},m=S=>{S.target===t&&++d>=u&&g()};setTimeout(()=>{d<u&&g()},c+1),t.addEventListener(f,m)}function Om(t,e){const n=window.getComputedStyle(t),r=R=>(n[R]||"").split(", "),s=r(`${vn}Delay`),o=r(`${vn}Duration`),a=Ac(s,o),c=r(`${Xr}Delay`),u=r(`${Xr}Duration`),f=Ac(c,u);let d=null,g=0,m=0;e===vn?a>0&&(d=vn,g=a,m=o.length):e===Xr?f>0&&(d=Xr,g=f,m=u.length):(g=Math.max(a,f),d=g>0?a>f?vn:Xr:null,m=d?d===vn?o.length:u.length:0);const S=d===vn&&/\b(transform|all)(,|$)/.test(r(`${vn}Property`).toString());return{type:d,timeout:g,propCount:m,hasTransform:S}}function Ac(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Cc(n)+Cc(t[r])))}function Cc(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function kc(){return document.body.offsetHeight}function Nm(t,e,n){const r=t[bs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Rc=Symbol("_vod"),Dm=Symbol("_vsh"),xm=Symbol(""),Lm=/(^|;)\s*display\s*:/;function Mm(t,e,n){const r=t.style,s=xe(n);let o=!1;if(n&&!s){if(e)if(xe(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&oi(r,c,"")}else for(const a in e)n[a]==null&&oi(r,a,"");for(const a in n)a==="display"&&(o=!0),oi(r,a,n[a])}else if(s){if(e!==n){const a=r[xm];a&&(n+=";"+a),r.cssText=n,o=Lm.test(n)}}else e&&t.removeAttribute("style");Rc in t&&(t[Rc]=o?r.display:"",t[Dm]&&(r.display="none"))}const Pc=/\s*!important$/;function oi(t,e,n){if(te(n))n.forEach(r=>oi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Um(t,e);Pc.test(n)?t.setProperty(Mn(r),n.replace(Pc,""),"important"):t[r]=n}}const Oc=["Webkit","Moz","ms"],Co={};function Um(t,e){const n=Co[e];if(n)return n;let r=wt(e);if(r!=="filter"&&r in t)return Co[e]=r;r=Di(r);for(let s=0;s<Oc.length;s++){const o=Oc[s]+r;if(o in t)return Co[e]=o}return e}const Nc="http://www.w3.org/1999/xlink";function Dc(t,e,n,r,s,o=jp(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Nc,e.slice(6,e.length)):t.setAttributeNS(Nc,e,n):n==null||o&&!fh(n)?t.removeAttribute(e):t.setAttribute(e,o?"":Ln(n)?String(n):n)}function xc(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?vf(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=fh(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function mr(t,e,n,r){t.addEventListener(e,n,r)}function Fm(t,e,n,r){t.removeEventListener(e,n,r)}const Lc=Symbol("_vei");function jm(t,e,n,r,s=null){const o=t[Lc]||(t[Lc]={}),a=o[e];if(r&&a)a.value=r;else{const[c,u]=$m(e);if(r){const f=o[e]=Hm(r,s);mr(t,c,f,u)}else a&&(Fm(t,c,a,u),o[e]=void 0)}}const Mc=/(?:Once|Passive|Capture)$/;function $m(t){let e;if(Mc.test(t)){e={};let r;for(;r=t.match(Mc);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mn(t.slice(2)),e]}let ko=0;const Vm=Promise.resolve(),Bm=()=>ko||(Vm.then(()=>ko=0),ko=Date.now());function Hm(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pt(Wm(r,n.value),e,5,[r])};return n.value=t,n.attached=Bm(),n}function Wm(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Uc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Gm=(t,e,n,r,s,o)=>{const a=s==="svg";e==="class"?Nm(t,r,a):e==="style"?Mm(t,n,r):Pi(e)?Ta(e)||jm(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zm(t,e,r,a))?(xc(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Dc(t,e,r,a,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!xe(r))?xc(t,wt(e),r,o,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Dc(t,e,r,a))};function zm(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Uc(e)&&oe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Uc(e)&&xe(n)?!1:e in t}const Fc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return te(e)?n=>ni(e,n):e};function qm(t){t.target.composing=!0}function jc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ro=Symbol("_assign"),Km={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ro]=Fc(s);const o=r||s.props&&s.props.type==="number";mr(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),o&&(c=zo(c)),t[Ro](c)}),n&&mr(t,"change",()=>{t.value=t.value.trim()}),e||(mr(t,"compositionstart",qm),mr(t,"compositionend",jc),mr(t,"change",jc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(t[Ro]=Fc(a),t.composing)return;const c=(o||t.type==="number")&&!/^0\d/.test(t.value)?zo(t.value):t.value,u=e??"";c!==u&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===u)||(t.value=u))}},Jm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},$c=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const o=Mn(s.key);if(e.some(a=>a===o||Jm[a]===o))return t(s)})},Xm=je({patchProp:Gm},Sm);let Vc;function Ym(){return Vc||(Vc=qg(Xm))}const Qm=(...t)=>{const e=Ym().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ev(r);if(!s)return;const o=e._component;!oe(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Zm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Zm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ev(t){return xe(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const vr=typeof document<"u";function wf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function tv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&wf(t.default)}const ye=Object.assign;function Po(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ot(s)?s.map(t):t(s)}return n}const os=()=>{},Ot=Array.isArray,bf=/#/g,nv=/&/g,rv=/\//g,sv=/=/g,iv=/\?/g,If=/\+/g,ov=/%5B/g,av=/%5D/g,Ef=/%5E/g,lv=/%60/g,Tf=/%7B/g,cv=/%7C/g,Sf=/%7D/g,uv=/%20/g;function Ba(t){return encodeURI(""+t).replace(cv,"|").replace(ov,"[").replace(av,"]")}function hv(t){return Ba(t).replace(Tf,"{").replace(Sf,"}").replace(Ef,"^")}function ia(t){return Ba(t).replace(If,"%2B").replace(uv,"+").replace(bf,"%23").replace(nv,"%26").replace(lv,"`").replace(Tf,"{").replace(Sf,"}").replace(Ef,"^")}function fv(t){return ia(t).replace(sv,"%3D")}function dv(t){return Ba(t).replace(bf,"%23").replace(iv,"%3F")}function pv(t){return t==null?"":dv(t).replace(rv,"%2F")}function Is(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const gv=/\/$/,mv=t=>t.replace(gv,"");function Oo(t,e,n="/"){let r,s={},o="",a="";const c=e.indexOf("#");let u=e.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(r=e.slice(0,u),o=e.slice(u+1,c>-1?c:e.length),s=t(o)),c>-1&&(r=r||e.slice(0,c),a=e.slice(c,e.length)),r=wv(r??e,n),{fullPath:r+(o&&"?")+o+a,path:r,query:s,hash:Is(a)}}function vv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function _v(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&kr(e.matched[r],n.matched[s])&&Af(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function kr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Af(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!yv(t[n],e[n]))return!1;return!0}function yv(t,e){return Ot(t)?Hc(t,e):Ot(e)?Hc(e,t):t===e}function Hc(t,e){return Ot(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function wv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let o=n.length-1,a,c;for(a=0;a<r.length;a++)if(c=r[a],c!==".")if(c==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(a).join("/")}const _n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Es;(function(t){t.pop="pop",t.push="push"})(Es||(Es={}));var as;(function(t){t.back="back",t.forward="forward",t.unknown=""})(as||(as={}));function bv(t){if(!t)if(vr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mv(t)}const Iv=/^[^#]+#/;function Ev(t,e){return t.replace(Iv,"#")+e}function Tv(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const zi=()=>({left:window.scrollX,top:window.scrollY});function Sv(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Tv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Wc(t,e){return(history.state?history.state.position-e:-1)+t}const oa=new Map;function Av(t,e){oa.set(t,e)}function Cv(t){const e=oa.get(t);return oa.delete(t),e}let kv=()=>location.protocol+"//"+location.host;function Cf(t,e){const{pathname:n,search:r,hash:s}=e,o=t.indexOf("#");if(o>-1){let c=s.includes(t.slice(o))?t.slice(o).length:1,u=s.slice(c);return u[0]!=="/"&&(u="/"+u),Bc(u,"")}return Bc(n,t)+r+s}function Rv(t,e,n,r){let s=[],o=[],a=null;const c=({state:m})=>{const S=Cf(t,location),R=n.value,O=e.value;let V=0;if(m){if(n.value=S,e.value=m,a&&a===R){a=null;return}V=O?m.position-O.position:0}else r(S);s.forEach(F=>{F(n.value,R,{delta:V,type:Es.pop,direction:V?V>0?as.forward:as.back:as.unknown})})};function u(){a=n.value}function f(m){s.push(m);const S=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return o.push(S),S}function d(){const{history:m}=window;m.state&&m.replaceState(ye({},m.state,{scroll:zi()}),"")}function g(){for(const m of o)m();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:u,listen:f,destroy:g}}function Gc(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?zi():null}}function Pv(t){const{history:e,location:n}=window,r={value:Cf(t,n)},s={value:e.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(u,f,d){const g=t.indexOf("#"),m=g>-1?(n.host&&document.querySelector("base")?t:t.slice(g))+u:kv()+t+u;try{e[d?"replaceState":"pushState"](f,"",m),s.value=f}catch(S){console.error(S),n[d?"replace":"assign"](m)}}function a(u,f){const d=ye({},e.state,Gc(s.value.back,u,s.value.forward,!0),f,{position:s.value.position});o(u,d,!0),r.value=u}function c(u,f){const d=ye({},s.value,e.state,{forward:u,scroll:zi()});o(d.current,d,!0);const g=ye({},Gc(r.value,u,null),{position:d.position+1},f);o(u,g,!1),r.value=u}return{location:r,state:s,push:c,replace:a}}function Ov(t){t=bv(t);const e=Pv(t),n=Rv(t,e.state,e.location,e.replace);function r(o,a=!0){a||n.pauseListeners(),history.go(o)}const s=ye({location:"",base:t,go:r,createHref:Ev.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Nv(t){return typeof t=="string"||t&&typeof t=="object"}function kf(t){return typeof t=="string"||typeof t=="symbol"}const Rf=Symbol("");var zc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(zc||(zc={}));function Rr(t,e){return ye(new Error,{type:t,[Rf]:!0},e)}function Xt(t,e){return t instanceof Error&&Rf in t&&(e==null||!!(t.type&e))}const qc="[^/]+?",Dv={sensitive:!1,strict:!1,start:!0,end:!0},xv=/[.+*?^${}()[\]/\\]/g;function Lv(t,e){const n=ye({},Dv,e),r=[];let s=n.start?"^":"";const o=[];for(const f of t){const d=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let g=0;g<f.length;g++){const m=f[g];let S=40+(n.sensitive?.25:0);if(m.type===0)g||(s+="/"),s+=m.value.replace(xv,"\\$&"),S+=40;else if(m.type===1){const{value:R,repeatable:O,optional:V,regexp:F}=m;o.push({name:R,repeatable:O,optional:V});const j=F||qc;if(j!==qc){S+=10;try{new RegExp(`(${j})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${R}" (${j}): `+B.message)}}let G=O?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;g||(G=V&&f.length<2?`(?:/${G})`:"/"+G),V&&(G+="?"),s+=G,S+=20,V&&(S+=-8),O&&(S+=-20),j===".*"&&(S+=-50)}d.push(S)}r.push(d)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function c(f){const d=f.match(a),g={};if(!d)return null;for(let m=1;m<d.length;m++){const S=d[m]||"",R=o[m-1];g[R.name]=S&&R.repeatable?S.split("/"):S}return g}function u(f){let d="",g=!1;for(const m of t){(!g||!d.endsWith("/"))&&(d+="/"),g=!1;for(const S of m)if(S.type===0)d+=S.value;else if(S.type===1){const{value:R,repeatable:O,optional:V}=S,F=R in f?f[R]:"";if(Ot(F)&&!O)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const j=Ot(F)?F.join("/"):F;if(!j)if(V)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):g=!0);else throw new Error(`Missing required param "${R}"`);d+=j}}return d||"/"}return{re:a,score:r,keys:o,parse:c,stringify:u}}function Mv(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Pf(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const o=Mv(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(Kc(r))return 1;if(Kc(s))return-1}return s.length-r.length}function Kc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Uv={type:0,value:""},Fv=/[a-zA-Z0-9_]/;function jv(t){if(!t)return[[]];if(t==="/")return[[Uv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(S){throw new Error(`ERR (${n})/"${f}": ${S}`)}let n=0,r=n;const s=[];let o;function a(){o&&s.push(o),o=[]}let c=0,u,f="",d="";function g(){f&&(n===0?o.push({type:0,value:f}):n===1||n===2||n===3?(o.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),f="")}function m(){f+=u}for(;c<t.length;){if(u=t[c++],u==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:u==="/"?(f&&g(),a()):u===":"?(g(),n=1):m();break;case 4:m(),n=r;break;case 1:u==="("?n=2:Fv.test(u)?m():(g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:n=3:d+=u;break;case 3:g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),g(),a(),s}function $v(t,e,n){const r=Lv(jv(t.path),n),s=ye(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Vv(t,e){const n=[],r=new Map;e=Qc({strict:!1,end:!0,sensitive:!1},e);function s(g){return r.get(g)}function o(g,m,S){const R=!S,O=Xc(g);O.aliasOf=S&&S.record;const V=Qc(e,g),F=[O];if("alias"in g){const B=typeof g.alias=="string"?[g.alias]:g.alias;for(const ne of B)F.push(Xc(ye({},O,{components:S?S.record.components:O.components,path:ne,aliasOf:S?S.record:O})))}let j,G;for(const B of F){const{path:ne}=B;if(m&&ne[0]!=="/"){const re=m.record.path,A=re[re.length-1]==="/"?"":"/";B.path=m.record.path+(ne&&A+ne)}if(j=$v(B,m,V),S?S.alias.push(j):(G=G||j,G!==j&&G.alias.push(j),R&&g.name&&!Yc(j)&&a(g.name)),Of(j)&&u(j),O.children){const re=O.children;for(let A=0;A<re.length;A++)o(re[A],j,S&&S.children[A])}S=S||j}return G?()=>{a(G)}:os}function a(g){if(kf(g)){const m=r.get(g);m&&(r.delete(g),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(g);m>-1&&(n.splice(m,1),g.record.name&&r.delete(g.record.name),g.children.forEach(a),g.alias.forEach(a))}}function c(){return n}function u(g){const m=Wv(g,n);n.splice(m,0,g),g.record.name&&!Yc(g)&&r.set(g.record.name,g)}function f(g,m){let S,R={},O,V;if("name"in g&&g.name){if(S=r.get(g.name),!S)throw Rr(1,{location:g});V=S.record.name,R=ye(Jc(m.params,S.keys.filter(G=>!G.optional).concat(S.parent?S.parent.keys.filter(G=>G.optional):[]).map(G=>G.name)),g.params&&Jc(g.params,S.keys.map(G=>G.name))),O=S.stringify(R)}else if(g.path!=null)O=g.path,S=n.find(G=>G.re.test(O)),S&&(R=S.parse(O),V=S.record.name);else{if(S=m.name?r.get(m.name):n.find(G=>G.re.test(m.path)),!S)throw Rr(1,{location:g,currentLocation:m});V=S.record.name,R=ye({},m.params,g.params),O=S.stringify(R)}const F=[];let j=S;for(;j;)F.unshift(j.record),j=j.parent;return{name:V,path:O,params:R,matched:F,meta:Hv(F)}}t.forEach(g=>o(g));function d(){n.length=0,r.clear()}return{addRoute:o,resolve:f,removeRoute:a,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function Jc(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Xc(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Bv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Bv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Yc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Hv(t){return t.reduce((e,n)=>ye(e,n.meta),{})}function Qc(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Wv(t,e){let n=0,r=e.length;for(;n!==r;){const o=n+r>>1;Pf(t,e[o])<0?r=o:n=o+1}const s=Gv(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Gv(t){let e=t;for(;e=e.parent;)if(Of(e)&&Pf(t,e)===0)return e}function Of({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function zv(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const o=r[s].replace(If," "),a=o.indexOf("="),c=Is(a<0?o:o.slice(0,a)),u=a<0?null:Is(o.slice(a+1));if(c in e){let f=e[c];Ot(f)||(f=e[c]=[f]),f.push(u)}else e[c]=u}return e}function Zc(t){let e="";for(let n in t){const r=t[n];if(n=fv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ot(r)?r.map(o=>o&&ia(o)):[r&&ia(r)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function qv(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ot(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Nf=Symbol(""),eu=Symbol(""),qi=Symbol(""),Ha=Symbol(""),aa=Symbol("");function Yr(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Kv(t,e,n){const r=()=>{t[e].delete(n)};Bi(r),zh(r),Gh(()=>{t[e].add(n)}),t[e].add(n)}function Jv(t){const e=_t(Nf,{}).value;e&&Kv(e,"leaveGuards",t)}function Tn(t,e,n,r,s,o=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,u)=>{const f=m=>{m===!1?u(Rr(4,{from:n,to:e})):m instanceof Error?u(m):Nv(m)?u(Rr(2,{from:e,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),c())},d=o(()=>t.call(r&&r.instances[s],e,n,f));let g=Promise.resolve(d);t.length<3&&(g=g.then(f)),g.catch(m=>u(m))})}function No(t,e,n,r,s=o=>o()){const o=[];for(const a of t)for(const c in a.components){let u=a.components[c];if(!(e!=="beforeRouteEnter"&&!a.instances[c]))if(wf(u)){const d=(u.__vccOpts||u)[e];d&&o.push(Tn(d,n,r,a,c,s))}else{let f=u();o.push(()=>f.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${a.path}"`);const g=tv(d)?d.default:d;a.mods[c]=d,a.components[c]=g;const S=(g.__vccOpts||g)[e];return S&&Tn(S,n,r,a,c,s)()}))}}return o}function tu(t){const e=_t(qi),n=_t(Ha),r=Fe(()=>{const u=Te(t.to);return e.resolve(u)}),s=Fe(()=>{const{matched:u}=r.value,{length:f}=u,d=u[f-1],g=n.matched;if(!d||!g.length)return-1;const m=g.findIndex(kr.bind(null,d));if(m>-1)return m;const S=nu(u[f-2]);return f>1&&nu(d)===S&&g[g.length-1].path!==S?g.findIndex(kr.bind(null,u[f-2])):m}),o=Fe(()=>s.value>-1&&e_(n.params,r.value.params)),a=Fe(()=>s.value>-1&&s.value===n.matched.length-1&&Af(n.params,r.value.params));function c(u={}){if(Zv(u)){const f=e[Te(t.replace)?"replace":"push"](Te(t.to)).catch(os);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:r,href:Fe(()=>r.value.href),isActive:o,isExactActive:a,navigate:c}}function Xv(t){return t.length===1?t[0]:t}const Yv=ji({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:tu,setup(t,{slots:e}){const n=Mi(tu(t)),{options:r}=_t(qi),s=Fe(()=>({[ru(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ru(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&Xv(e.default(n));return t.custom?o:Va("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),Qv=Yv;function Zv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function e_(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ot(s)||s.length!==r.length||r.some((o,a)=>o!==s[a]))return!1}return!0}function nu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ru=(t,e,n)=>t??e??n,t_=ji({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=_t(aa),s=Fe(()=>t.route||r.value),o=_t(eu,0),a=Fe(()=>{let f=Te(o);const{matched:d}=s.value;let g;for(;(g=d[f])&&!g.components;)f++;return f}),c=Fe(()=>s.value.matched[a.value]);ri(eu,Fe(()=>a.value+1)),ri(Nf,c),ri(aa,s);const u=ke();return Qn(()=>[u.value,c.value,t.name],([f,d,g],[m,S,R])=>{d&&(d.instances[g]=f,S&&S!==d&&f&&f===m&&(d.leaveGuards.size||(d.leaveGuards=S.leaveGuards),d.updateGuards.size||(d.updateGuards=S.updateGuards))),f&&d&&(!S||!kr(d,S)||!m)&&(d.enterCallbacks[g]||[]).forEach(O=>O(f))},{flush:"post"}),()=>{const f=s.value,d=t.name,g=c.value,m=g&&g.components[d];if(!m)return su(n.default,{Component:m,route:f});const S=g.props[d],R=S?S===!0?f.params:typeof S=="function"?S(f):S:null,V=Va(m,ye({},R,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(g.instances[d]=null)},ref:u}));return su(n.default,{Component:V,route:f})||V}}});function su(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const n_=t_;function r_(t){const e=Vv(t.routes,t),n=t.parseQuery||zv,r=t.stringifyQuery||Zc,s=t.history,o=Yr(),a=Yr(),c=Yr(),u=ag(_n);let f=_n;vr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Po.bind(null,D=>""+D),g=Po.bind(null,pv),m=Po.bind(null,Is);function S(D,J){let K,X;return kf(D)?(K=e.getRecordMatcher(D),X=J):X=D,e.addRoute(X,K)}function R(D){const J=e.getRecordMatcher(D);J&&e.removeRoute(J)}function O(){return e.getRoutes().map(D=>D.record)}function V(D){return!!e.getRecordMatcher(D)}function F(D,J){if(J=ye({},J||u.value),typeof D=="string"){const C=Oo(n,D,J.path),x=e.resolve({path:C.path},J),M=s.createHref(C.fullPath);return ye(C,x,{params:m(x.params),hash:Is(C.hash),redirectedFrom:void 0,href:M})}let K;if(D.path!=null)K=ye({},D,{path:Oo(n,D.path,J.path).path});else{const C=ye({},D.params);for(const x in C)C[x]==null&&delete C[x];K=ye({},D,{params:g(C)}),J.params=g(J.params)}const X=e.resolve(K,J),me=D.hash||"";X.params=d(m(X.params));const y=vv(r,ye({},D,{hash:hv(me),path:X.path})),b=s.createHref(y);return ye({fullPath:y,hash:me,query:r===Zc?qv(D.query):D.query||{}},X,{redirectedFrom:void 0,href:b})}function j(D){return typeof D=="string"?Oo(n,D,u.value.path):ye({},D)}function G(D,J){if(f!==D)return Rr(8,{from:J,to:D})}function B(D){return A(D)}function ne(D){return B(ye(j(D),{replace:!0}))}function re(D){const J=D.matched[D.matched.length-1];if(J&&J.redirect){const{redirect:K}=J;let X=typeof K=="function"?K(D):K;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=j(X):{path:X},X.params={}),ye({query:D.query,hash:D.hash,params:X.path!=null?{}:D.params},X)}}function A(D,J){const K=f=F(D),X=u.value,me=D.state,y=D.force,b=D.replace===!0,C=re(K);if(C)return A(ye(j(C),{state:typeof C=="object"?ye({},me,C.state):me,force:y,replace:b}),J||K);const x=K;x.redirectedFrom=J;let M;return!y&&_v(r,X,K)&&(M=Rr(16,{to:x,from:X}),ft(X,X,!0,!1)),(M?Promise.resolve(M):E(x,X)).catch(L=>Xt(L)?Xt(L,2)?L:bt(L):ue(L,x,X)).then(L=>{if(L){if(Xt(L,2))return A(ye({replace:b},j(L.to),{state:typeof L.to=="object"?ye({},me,L.to.state):me,force:y}),J||x)}else L=I(x,X,!0,b,me);return T(x,X,L),L})}function _(D,J){const K=G(D,J);return K?Promise.reject(K):Promise.resolve()}function v(D){const J=fn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(D):D()}function E(D,J){let K;const[X,me,y]=s_(D,J);K=No(X.reverse(),"beforeRouteLeave",D,J);for(const C of X)C.leaveGuards.forEach(x=>{K.push(Tn(x,D,J))});const b=_.bind(null,D,J);return K.push(b),st(K).then(()=>{K=[];for(const C of o.list())K.push(Tn(C,D,J));return K.push(b),st(K)}).then(()=>{K=No(me,"beforeRouteUpdate",D,J);for(const C of me)C.updateGuards.forEach(x=>{K.push(Tn(x,D,J))});return K.push(b),st(K)}).then(()=>{K=[];for(const C of y)if(C.beforeEnter)if(Ot(C.beforeEnter))for(const x of C.beforeEnter)K.push(Tn(x,D,J));else K.push(Tn(C.beforeEnter,D,J));return K.push(b),st(K)}).then(()=>(D.matched.forEach(C=>C.enterCallbacks={}),K=No(y,"beforeRouteEnter",D,J,v),K.push(b),st(K))).then(()=>{K=[];for(const C of a.list())K.push(Tn(C,D,J));return K.push(b),st(K)}).catch(C=>Xt(C,8)?C:Promise.reject(C))}function T(D,J,K){c.list().forEach(X=>v(()=>X(D,J,K)))}function I(D,J,K,X,me){const y=G(D,J);if(y)return y;const b=J===_n,C=vr?history.state:{};K&&(X||b?s.replace(D.fullPath,ye({scroll:b&&C&&C.scroll},me)):s.push(D.fullPath,me)),u.value=D,ft(D,J,K,b),bt()}let w;function Ie(){w||(w=s.listen((D,J,K)=>{if(!xt.listening)return;const X=F(D),me=re(X);if(me){A(ye(me,{replace:!0,force:!0}),X).catch(os);return}f=X;const y=u.value;vr&&Av(Wc(y.fullPath,K.delta),zi()),E(X,y).catch(b=>Xt(b,12)?b:Xt(b,2)?(A(ye(j(b.to),{force:!0}),X).then(C=>{Xt(C,20)&&!K.delta&&K.type===Es.pop&&s.go(-1,!1)}).catch(os),Promise.reject()):(K.delta&&s.go(-K.delta,!1),ue(b,X,y))).then(b=>{b=b||I(X,y,!1),b&&(K.delta&&!Xt(b,8)?s.go(-K.delta,!1):K.type===Es.pop&&Xt(b,20)&&s.go(-1,!1)),T(X,y,b)}).catch(os)}))}let Ue=Yr(),Pe=Yr(),he;function ue(D,J,K){bt(D);const X=Pe.list();return X.length?X.forEach(me=>me(D,J,K)):console.error(D),Promise.reject(D)}function lt(){return he&&u.value!==_n?Promise.resolve():new Promise((D,J)=>{Ue.add([D,J])})}function bt(D){return he||(he=!D,Ie(),Ue.list().forEach(([J,K])=>D?K(D):J()),Ue.reset()),D}function ft(D,J,K,X){const{scrollBehavior:me}=t;if(!vr||!me)return Promise.resolve();const y=!K&&Cv(Wc(D.fullPath,0))||(X||!K)&&history.state&&history.state.scroll||null;return ms().then(()=>me(D,J,y)).then(b=>b&&Sv(b)).catch(b=>ue(b,D,J))}const Oe=D=>s.go(D);let Ne;const fn=new Set,xt={currentRoute:u,listening:!0,addRoute:S,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:V,getRoutes:O,resolve:F,options:t,push:B,replace:ne,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:o.add,beforeResolve:a.add,afterEach:c.add,onError:Pe.add,isReady:lt,install(D){const J=this;D.component("RouterLink",Qv),D.component("RouterView",n_),D.config.globalProperties.$router=J,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>Te(u)}),vr&&!Ne&&u.value===_n&&(Ne=!0,B(s.location).catch(me=>{}));const K={};for(const me in _n)Object.defineProperty(K,me,{get:()=>u.value[me],enumerable:!0});D.provide(qi,J),D.provide(Ha,Rh(K)),D.provide(aa,u);const X=D.unmount;fn.add(D),D.unmount=function(){fn.delete(D),fn.size<1&&(f=_n,w&&w(),w=null,u.value=_n,Ne=!1,he=!1),X()}}};function st(D){return D.reduce((J,K)=>J.then(()=>v(K)),Promise.resolve())}return xt}function s_(t,e){const n=[],r=[],s=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const c=e.matched[a];c&&(t.matched.find(f=>kr(f,c))?r.push(c):n.push(c));const u=t.matched[a];u&&(e.matched.find(f=>kr(f,u))||s.push(u))}return[n,r,s]}function Dr(){return _t(qi)}function i_(t){return _t(Ha)}const o_=()=>{};var iu={};/**
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
 */const Df=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},a_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],a=t[n++],c=t[n++],u=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},xf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],a=s+1<t.length,c=a?t[s+1]:0,u=s+2<t.length,f=u?t[s+2]:0,d=o>>2,g=(o&3)<<4|c>>4;let m=(c&15)<<2|f>>6,S=f&63;u||(S=64,a||(m=64)),r.push(n[d],n[g],n[m],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Df(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):a_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||c==null||f==null||g==null)throw new l_;const m=o<<2|c>>4;if(r.push(m),f!==64){const S=c<<4&240|f>>2;if(r.push(S),g!==64){const R=f<<6&192|g;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class l_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c_=function(t){const e=Df(t);return xf.encodeByteArray(e,!0)},yi=function(t){return c_(t).replace(/\./g,"")},Lf=function(t){try{return xf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function u_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const h_=()=>u_().__FIREBASE_DEFAULTS__,f_=()=>{if(typeof process>"u"||typeof iu>"u")return;const t=iu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},d_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lf(t[1]);return e&&JSON.parse(e)},Wa=()=>{try{return o_()||h_()||f_()||d_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mf=t=>{var e,n;return(n=(e=Wa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},p_=t=>{const e=Mf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Uf=()=>{var t;return(t=Wa())===null||t===void 0?void 0:t.config},Ff=t=>{var e;return(e=Wa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class g_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Rs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jf(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function m_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[yi(JSON.stringify(n)),yi(JSON.stringify(a)),""].join(".")}const ls={};function v_(){const t={prod:[],emulator:[]};for(const e of Object.keys(ls))ls[e]?t.emulator.push(e):t.prod.push(e);return t}function __(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ou=!1;function $f(t,e){if(typeof window>"u"||typeof document>"u"||!Rs(window.location.host)||ls[t]===e||ls[t]||ou)return;ls[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",o=v_().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,S){m.setAttribute("width","24"),m.setAttribute("id",S),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function f(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{ou=!0,a()},m}function d(m,S){m.setAttribute("id",S),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function g(){const m=__(r),S=n("text"),R=document.getElementById(S)||document.createElement("span"),O=n("learnmore"),V=document.getElementById(O)||document.createElement("a"),F=n("preprendIcon"),j=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const G=m.element;c(G),d(V,O);const B=f();u(j,F),G.append(j,R,V,B),document.body.appendChild(G)}o?(R.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function y_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function w_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function b_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function I_(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bf(){try{return typeof indexedDB=="object"}catch{return!1}}function Hf(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function E_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const T_="FirebaseError";class Dt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=T_,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ar.prototype.create)}}class ar{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?S_(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Dt(s,c,r)}}function S_(t,e){return t.replace(A_,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const A_=/\{\$([^}]+)}/g;function C_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],a=e[s];if(au(o)&&au(a)){if(!xn(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function au(t){return t!==null&&typeof t=="object"}/**
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
 */function Ps(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function k_(t,e){const n=new R_(t,e);return n.subscribe.bind(n)}class R_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");P_(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Do),s.error===void 0&&(s.error=Do),s.complete===void 0&&(s.complete=Do);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function P_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Do(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=1e3,N_=2,D_=4*60*60*1e3,x_=.5;function lu(t,e=O_,n=N_){const r=e*Math.pow(n,t),s=Math.round(x_*r*(Math.random()-.5)*2);return Math.min(D_,r+s)}/**
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
 */function hn(t){return t&&t._delegate?t._delegate:t}class Nt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new g_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(U_(e))try{this.getOrInitializeService({instanceIdentifier:Gn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=Gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gn){return this.instances.has(e)}getOptions(e=Gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:M_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gn){return this.component?this.component.multipleInstances?e:Gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function M_(t){return t===Gn?void 0:t}function U_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new L_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const j_={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},$_=be.INFO,V_={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},B_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=V_[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ki{constructor(e){this.name=e,this._logLevel=$_,this._logHandler=B_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?j_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const H_=(t,e)=>e.some(n=>t instanceof n);let cu,uu;function W_(){return cu||(cu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function G_(){return uu||(uu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wf=new WeakMap,la=new WeakMap,Gf=new WeakMap,xo=new WeakMap,Ga=new WeakMap;function z_(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(Pn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Wf.set(n,t)}).catch(()=>{}),Ga.set(e,t),e}function q_(t){if(la.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});la.set(t,e)}let ca={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return la.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function K_(t){ca=t(ca)}function J_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Lo(this),e,...n);return Gf.set(r,e.sort?e.sort():[e]),Pn(r)}:G_().includes(t)?function(...e){return t.apply(Lo(this),e),Pn(Wf.get(this))}:function(...e){return Pn(t.apply(Lo(this),e))}}function X_(t){return typeof t=="function"?J_(t):(t instanceof IDBTransaction&&q_(t),H_(t,W_())?new Proxy(t,ca):t)}function Pn(t){if(t instanceof IDBRequest)return z_(t);if(xo.has(t))return xo.get(t);const e=X_(t);return e!==t&&(xo.set(t,e),Ga.set(e,t)),e}const Lo=t=>Ga.get(t);function zf(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),c=Pn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Pn(a.result),u.oldVersion,u.newVersion,Pn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{o&&u.addEventListener("close",()=>o()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Y_=["get","getKey","getAll","getAllKeys","count"],Q_=["put","add","delete","clear"],Mo=new Map;function hu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mo.get(e))return Mo.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Q_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Y_.includes(n)))return;const o=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),s&&u.done]))[0]};return Mo.set(e,o),o}K_(t=>({...t,get:(e,n,r)=>hu(e,n)||t.get(e,n,r),has:(e,n)=>!!hu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ey(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ey(t){const e=t.getComponent();return e?.type==="VERSION"}const ua="@firebase/app",fu="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new Ki("@firebase/app"),ty="@firebase/app-compat",ny="@firebase/analytics-compat",ry="@firebase/analytics",sy="@firebase/app-check-compat",iy="@firebase/app-check",oy="@firebase/auth",ay="@firebase/auth-compat",ly="@firebase/database",cy="@firebase/data-connect",uy="@firebase/database-compat",hy="@firebase/functions",fy="@firebase/functions-compat",dy="@firebase/installations",py="@firebase/installations-compat",gy="@firebase/messaging",my="@firebase/messaging-compat",vy="@firebase/performance",_y="@firebase/performance-compat",yy="@firebase/remote-config",wy="@firebase/remote-config-compat",by="@firebase/storage",Iy="@firebase/storage-compat",Ey="@firebase/firestore",Ty="@firebase/ai",Sy="@firebase/firestore-compat",Ay="firebase",Cy="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="[DEFAULT]",ky={[ua]:"fire-core",[ty]:"fire-core-compat",[ry]:"fire-analytics",[ny]:"fire-analytics-compat",[iy]:"fire-app-check",[sy]:"fire-app-check-compat",[oy]:"fire-auth",[ay]:"fire-auth-compat",[ly]:"fire-rtdb",[cy]:"fire-data-connect",[uy]:"fire-rtdb-compat",[hy]:"fire-fn",[fy]:"fire-fn-compat",[dy]:"fire-iid",[py]:"fire-iid-compat",[gy]:"fire-fcm",[my]:"fire-fcm-compat",[vy]:"fire-perf",[_y]:"fire-perf-compat",[yy]:"fire-rc",[wy]:"fire-rc-compat",[by]:"fire-gcs",[Iy]:"fire-gcs-compat",[Ey]:"fire-fst",[Sy]:"fire-fst-compat",[Ty]:"fire-vertex","fire-js":"fire-js",[Ay]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new Map,Ry=new Map,fa=new Map;function du(t,e){try{t.container.addComponent(e)}catch(n){ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ht(t){const e=t.name;if(fa.has(e))return ln.debug(`There were multiple attempts to register component ${e}.`),!1;fa.set(e,t);for(const n of wi.values())du(n,t);for(const n of Ry.values())du(n,t);return!0}function lr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},On=new ar("app","Firebase",Py);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=Cy;function qf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ha,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw On.create("bad-app-name",{appName:String(s)});if(n||(n=Uf()),!n)throw On.create("no-options");const o=wi.get(s);if(o){if(xn(n,o.options)&&xn(r,o.config))return o;throw On.create("duplicate-app",{appName:s})}const a=new F_(s);for(const u of fa.values())a.addComponent(u);const c=new Oy(n,r,a);return wi.set(s,c),c}function za(t=ha){const e=wi.get(t);if(!e&&t===ha&&Uf())return qf();if(!e)throw On.create("no-app",{appName:t});return e}function yt(t,e,n){var r;let s=(r=ky[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ln.warn(c.join(" "));return}Ht(new Nt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ny="firebase-heartbeat-database",Dy=1,Ts="firebase-heartbeat-store";let Uo=null;function Kf(){return Uo||(Uo=zf(Ny,Dy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ts)}catch(n){console.warn(n)}}}}).catch(t=>{throw On.create("idb-open",{originalErrorMessage:t.message})})),Uo}async function xy(t){try{const n=(await Kf()).transaction(Ts),r=await n.objectStore(Ts).get(Jf(t));return await n.done,r}catch(e){if(e instanceof Dt)ln.warn(e.message);else{const n=On.create("idb-get",{originalErrorMessage:e?.message});ln.warn(n.message)}}}async function pu(t,e){try{const r=(await Kf()).transaction(Ts,"readwrite");await r.objectStore(Ts).put(e,Jf(t)),await r.done}catch(n){if(n instanceof Dt)ln.warn(n.message);else{const r=On.create("idb-set",{originalErrorMessage:n?.message});ln.warn(r.message)}}}function Jf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ly=1024,My=30;class Uy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=gu();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>My){const a=$y(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gu(),{heartbeatsToSend:r,unsentEntries:s}=Fy(this._heartbeatsCache.heartbeats),o=yi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return ln.warn(n),""}}}function gu(){return new Date().toISOString().substring(0,10)}function Fy(t,e=Ly){const n=[];let r=t.slice();for(const s of t){const o=n.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),mu(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),mu(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bf()?Hf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xy(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function mu(t){return yi(JSON.stringify({version:2,heartbeats:t})).length}function $y(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t){Ht(new Nt("platform-logger",e=>new Z_(e),"PRIVATE")),Ht(new Nt("heartbeat",e=>new Uy(e),"PRIVATE")),yt(ua,fu,t),yt(ua,fu,"esm2017"),yt("fire-js","")}Vy("");var By="firebase",Hy="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt(By,Hy,"app");const Xf="@firebase/installations",qa="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=1e4,Qf=`w:${qa}`,Zf="FIS_v2",Wy="https://firebaseinstallations.googleapis.com/v1",Gy=60*60*1e3,zy="installations",qy="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},nr=new ar(zy,qy,Ky);function ed(t){return t instanceof Dt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td({projectId:t}){return`${Wy}/projects/${t}/installations`}function nd(t){return{token:t.token,requestStatus:2,expiresIn:Xy(t.expiresIn),creationTime:Date.now()}}async function rd(t,e){const r=(await e.json()).error;return nr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function sd({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Jy(t,{refreshToken:e}){const n=sd(t);return n.append("Authorization",Yy(e)),n}async function id(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Xy(t){return Number(t.replace("s","000"))}function Yy(t){return`${Zf} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qy({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=td(t),s=sd(t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={fid:n,authVersion:Zf,appId:t.appId,sdkVersion:Qf},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await id(()=>fetch(r,c));if(u.ok){const f=await u.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:nd(f.authToken)}}else throw await rd("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=/^[cdef][\w-]{21}$/,da="";function t0(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=n0(t);return e0.test(n)?n:da}catch{return da}}function n0(t){return Zy(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=new Map;function ld(t,e){const n=Ji(t);cd(n,e),r0(n,e)}function cd(t,e){const n=ad.get(t);if(n)for(const r of n)r(e)}function r0(t,e){const n=s0();n&&n.postMessage({key:t,fid:e}),i0()}let Kn=null;function s0(){return!Kn&&"BroadcastChannel"in self&&(Kn=new BroadcastChannel("[Firebase] FID Change"),Kn.onmessage=t=>{cd(t.data.key,t.data.fid)}),Kn}function i0(){ad.size===0&&Kn&&(Kn.close(),Kn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="firebase-installations-database",a0=1,rr="firebase-installations-store";let Fo=null;function Ka(){return Fo||(Fo=zf(o0,a0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rr)}}})),Fo}async function bi(t,e){const n=Ji(t),s=(await Ka()).transaction(rr,"readwrite"),o=s.objectStore(rr),a=await o.get(n);return await o.put(e,n),await s.done,(!a||a.fid!==e.fid)&&ld(t,e.fid),e}async function ud(t){const e=Ji(t),r=(await Ka()).transaction(rr,"readwrite");await r.objectStore(rr).delete(e),await r.done}async function Xi(t,e){const n=Ji(t),s=(await Ka()).transaction(rr,"readwrite"),o=s.objectStore(rr),a=await o.get(n),c=e(a);return c===void 0?await o.delete(n):await o.put(c,n),await s.done,c&&(!a||a.fid!==c.fid)&&ld(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ja(t){let e;const n=await Xi(t.appConfig,r=>{const s=l0(r),o=c0(t,s);return e=o.registrationPromise,o.installationEntry});return n.fid===da?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function l0(t){const e=t||{fid:t0(),registrationStatus:0};return hd(e)}function c0(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(nr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=u0(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:h0(t)}:{installationEntry:e}}async function u0(t,e){try{const n=await Qy(t,e);return bi(t.appConfig,n)}catch(n){throw ed(n)&&n.customData.serverCode===409?await ud(t.appConfig):await bi(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function h0(t){let e=await vu(t.appConfig);for(;e.registrationStatus===1;)await od(100),e=await vu(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ja(t);return r||n}return e}function vu(t){return Xi(t,e=>{if(!e)throw nr.create("installation-not-found");return hd(e)})}function hd(t){return f0(t)?{fid:t.fid,registrationStatus:0}:t}function f0(t){return t.registrationStatus===1&&t.registrationTime+Yf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0({appConfig:t,heartbeatServiceProvider:e},n){const r=p0(t,n),s=Jy(t,n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={installation:{sdkVersion:Qf,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await id(()=>fetch(r,c));if(u.ok){const f=await u.json();return nd(f)}else throw await rd("Generate Auth Token",u)}function p0(t,{fid:e}){return`${td(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(t,e=!1){let n;const r=await Xi(t.appConfig,o=>{if(!fd(o))throw nr.create("not-registered");const a=o.authToken;if(!e&&v0(a))return o;if(a.requestStatus===1)return n=g0(t,e),o;{if(!navigator.onLine)throw nr.create("app-offline");const c=y0(o);return n=m0(t,c),c}});return n?await n:r.authToken}async function g0(t,e){let n=await _u(t.appConfig);for(;n.authToken.requestStatus===1;)await od(100),n=await _u(t.appConfig);const r=n.authToken;return r.requestStatus===0?Xa(t,e):r}function _u(t){return Xi(t,e=>{if(!fd(e))throw nr.create("not-registered");const n=e.authToken;return w0(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function m0(t,e){try{const n=await d0(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await bi(t.appConfig,r),n}catch(n){if(ed(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ud(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await bi(t.appConfig,r)}throw n}}function fd(t){return t!==void 0&&t.registrationStatus===2}function v0(t){return t.requestStatus===2&&!_0(t)}function _0(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Gy}function y0(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function w0(t){return t.requestStatus===1&&t.requestTime+Yf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b0(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ja(e);return r?r.catch(console.error):Xa(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I0(t,e=!1){const n=t;return await E0(n),(await Xa(n,e)).token}async function E0(t){const{registrationPromise:e}=await Ja(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(t){if(!t||!t.options)throw jo("App Configuration");if(!t.name)throw jo("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw jo(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function jo(t){return nr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="installations",S0="installations-internal",A0=t=>{const e=t.getProvider("app").getImmediate(),n=T0(e),r=lr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},C0=t=>{const e=t.getProvider("app").getImmediate(),n=lr(e,dd).getImmediate();return{getId:()=>b0(n),getToken:s=>I0(n,s)}};function k0(){Ht(new Nt(dd,A0,"PUBLIC")),Ht(new Nt(S0,C0,"PRIVATE"))}k0();yt(Xf,qa);yt(Xf,qa,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii="analytics",R0="firebase_id",P0="origin",O0=60*1e3,N0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ya="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new Ki("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ht=new ar("analytics","Analytics",D0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(t){if(!t.startsWith(Ya)){const e=ht.create("invalid-gtag-resource",{gtagURL:t});return at.warn(e.message),""}return t}function pd(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function L0(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function M0(t,e){const n=L0("firebase-js-sdk-policy",{createScriptURL:x0}),r=document.createElement("script"),s=`${Ya}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function U0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function F0(t,e,n,r,s,o){const a=r[s];try{if(a)await e[a];else{const u=(await pd(n)).find(f=>f.measurementId===s);u&&await e[u.appId]}}catch(c){at.error(c)}t("config",s,o)}async function j0(t,e,n,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await pd(n);for(const u of a){const f=c.find(g=>g.measurementId===u),d=f&&e[f.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,s||{})}catch(o){at.error(o)}}function $0(t,e,n,r){async function s(o,...a){try{if(o==="event"){const[c,u]=a;await j0(t,e,n,c,u)}else if(o==="config"){const[c,u]=a;await F0(t,e,n,r,c,u)}else if(o==="consent"){const[c,u]=a;t("consent",c,u)}else if(o==="get"){const[c,u,f]=a;t("get",c,u,f)}else if(o==="set"){const[c]=a;t("set",c)}else t(o,...a)}catch(c){at.error(c)}}return s}function V0(t,e,n,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=$0(o,t,e,n),{gtagCore:o,wrappedGtag:window[s]}}function B0(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ya)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=30,W0=1e3;class G0{constructor(e={},n=W0){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gd=new G0;function z0(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function q0(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:z0(r)},o=N0.replace("{app-id}",n),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let c="";try{const u=await a.json();!((e=u.error)===null||e===void 0)&&e.message&&(c=u.error.message)}catch{}throw ht.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function K0(t,e=gd,n){const{appId:r,apiKey:s,measurementId:o}=t.options;if(!r)throw ht.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw ht.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Y0;return setTimeout(async()=>{c.abort()},O0),md({appId:r,apiKey:s,measurementId:o},a,c,e)}async function md(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=gd){var o;const{appId:a,measurementId:c}=t;try{await J0(r,e)}catch(u){if(c)return at.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u?.message}]`),{appId:a,measurementId:c};throw u}try{const u=await q0(t);return s.deleteThrottleMetadata(a),u}catch(u){const f=u;if(!X0(f)){if(s.deleteThrottleMetadata(a),c)return at.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f?.message}]`),{appId:a,measurementId:c};throw u}const d=Number((o=f?.customData)===null||o===void 0?void 0:o.httpStatus)===503?lu(n,s.intervalMillis,H0):lu(n,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(a,g),at.debug(`Calling attemptFetch again in ${d} millis`),md(t,g,r,s)}}function J0(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),o=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(o),r(ht.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function X0(t){if(!(t instanceof Dt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Y0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Q0(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const o=await e,a=Object.assign(Object.assign({},r),{send_to:o});t("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z0(){if(Bf())try{await Hf()}catch(t){return at.warn(ht.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return at.warn(ht.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ew(t,e,n,r,s,o,a){var c;const u=K0(t);u.then(S=>{n[S.measurementId]=S.appId,t.options.measurementId&&S.measurementId!==t.options.measurementId&&at.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>at.error(S)),e.push(u);const f=Z0().then(S=>{if(S)return r.getId()}),[d,g]=await Promise.all([u,f]);B0(o)||M0(o,d.measurementId),s("js",new Date);const m=(c=a?.config)!==null&&c!==void 0?c:{};return m[P0]="firebase",m.update=!0,g!=null&&(m[R0]=g),s("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.app=e}_delete(){return delete cs[this.app.options.appId],Promise.resolve()}}let cs={},yu=[];const wu={};let $o="dataLayer",nw="gtag",bu,vd,Iu=!1;function rw(){const t=[];if(Vf()&&t.push("This is a browser extension environment."),E_()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=ht.create("invalid-analytics-context",{errorInfo:e});at.warn(n.message)}}function sw(t,e,n){rw();const r=t.options.appId;if(!r)throw ht.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)at.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ht.create("no-api-key");if(cs[r]!=null)throw ht.create("already-exists",{id:r});if(!Iu){U0($o);const{wrappedGtag:o,gtagCore:a}=V0(cs,yu,wu,$o,nw);vd=o,bu=a,Iu=!0}return cs[r]=ew(t,yu,wu,e,bu,$o,n),new tw(t)}function iw(t=za()){t=hn(t);const e=lr(t,Ii);return e.isInitialized()?e.getImmediate():ow(t)}function ow(t,e={}){const n=lr(t,Ii);if(n.isInitialized()){const s=n.getImmediate();if(xn(e,n.getOptions()))return s;throw ht.create("already-initialized")}return n.initialize({options:e})}function aw(t,e,n,r){t=hn(t),Q0(vd,cs[t.app.options.appId],e,n,r).catch(s=>at.error(s))}const Eu="@firebase/analytics",Tu="0.10.17";function lw(){Ht(new Nt(Ii,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return sw(r,s,n)},"PUBLIC")),Ht(new Nt("analytics-internal",t,"PRIVATE")),yt(Eu,Tu),yt(Eu,Tu,"esm2017");function t(e){try{const n=e.getProvider(Ii).getImmediate();return{logEvent:(r,s,o)=>aw(n,r,s,o)}}catch(n){throw ht.create("interop-component-reg-failed",{reason:n})}}}lw();function Qa(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function _d(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cw=_d,yd=new ar("auth","Firebase",_d());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new Ki("@firebase/auth");function uw(t,...e){Ei.logLevel<=be.WARN&&Ei.warn(`Auth (${xr}): ${t}`,...e)}function ai(t,...e){Ei.logLevel<=be.ERROR&&Ei.error(`Auth (${xr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,...e){throw el(t,...e)}function kt(t,...e){return el(t,...e)}function Za(t,e,n){const r=Object.assign(Object.assign({},cw()),{[e]:n});return new ar("auth","Firebase",r).create(e,{appName:t.name})}function Zn(t){return Za(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hw(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Wt(t,"argument-error"),Za(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function el(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return yd.create(t,...e)}function ie(t,e,...n){if(!t)throw el(e,...n)}function rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ai(e),new Error(e)}function cn(t,e){t||rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fw(){return Su()==="http:"||Su()==="https:"}function Su(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fw()||Vf()||"connection"in navigator)?navigator.onLine:!0}function pw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.shortDelay=e,this.longDelay=n,cn(n>e,"Short delay should be less than long delay!"),this.isMobile=y_()||b_()}get(){return dw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(t,e){cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vw=new Os(3e4,6e4);function nl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Lr(t,e,n,r,s={}){return bd(t,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const c=Ps(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const f=Object.assign({method:e,headers:u},o);return w_()||(f.referrerPolicy="no-referrer"),t.emulatorConfig&&Rs(t.emulatorConfig.host)&&(f.credentials="include"),wd.fetch()(await Id(t,t.config.apiHost,n,c),f)})}async function bd(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gw),e);try{const s=new yw(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Zs(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[u,f]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zs(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Zs(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Zs(t,"user-disabled",a);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Za(t,d,f);Wt(t,d)}}catch(s){if(s instanceof Dt)throw s;Wt(t,"network-request-failed",{message:String(s)})}}async function _w(t,e,n,r,s={}){const o=await Lr(t,e,n,r,s);return"mfaPendingCredential"in o&&Wt(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function Id(t,e,n,r){const s=`${e}${n}?${r}`,o=t,a=o.config.emulator?tl(t.config,s):`${t.config.apiScheme}://${s}`;return mw.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class yw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kt(this.auth,"network-request-failed")),vw.get())})}}function Zs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=kt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ww(t,e){return Lr(t,"POST","/v1/accounts:delete",e)}async function Ti(t,e){return Lr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bw(t,e=!1){const n=hn(t),r=await n.getIdToken(e),s=rl(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o?.sign_in_provider;return{claims:s,token:r,authTime:us(Vo(s.auth_time)),issuedAtTime:us(Vo(s.iat)),expirationTime:us(Vo(s.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Vo(t){return Number(t)*1e3}function rl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ai("JWT malformed, contained fewer than 3 sections"),null;try{const s=Lf(n);return s?JSON.parse(s):(ai("Failed to decode base64 JWT payload"),null)}catch(s){return ai("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Au(t){const e=rl(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dt&&Iw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Iw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=us(this.lastLoginAt),this.creationTime=us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ss(t,Ti(n,{idToken:r}));ie(s?.users.length,n,"internal-error");const o=s.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Ed(o.providerUserInfo):[],c=Sw(t.providerData,a),u=t.isAnonymous,f=!(t.email&&o.passwordHash)&&!c?.length,d=u?f:!1,g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new ga(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,g)}async function Tw(t){const e=hn(t);await Si(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sw(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ed(t){return t.map(e=>{var{providerId:n}=e,r=Qa(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(t,e){const n=await bd(t,{},async()=>{const r=Ps({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,a=await Id(t,s,"/v1/token",`key=${o}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return t.emulatorConfig&&Rs(t.emulatorConfig.host)&&(u.credentials="include"),wd.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Cw(t,e){return Lr(t,"POST","/v2/accounts:revokeToken",nl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Au(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=Au(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:o}=await Aw(e,n);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:o}=n,a=new Er;return r&&(ie(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(ie(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Er,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class St{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,o=Qa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ew(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ga(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Ss(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bw(this,e)}reload(){return Tw(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new St(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Si(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tt(this.auth.app))return Promise.reject(Zn(this.auth));const e=await this.getIdToken();return await Ss(this,ww(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,o,a,c,u,f,d;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,S=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,R=(a=n.photoURL)!==null&&a!==void 0?a:void 0,O=(c=n.tenantId)!==null&&c!==void 0?c:void 0,V=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,F=(f=n.createdAt)!==null&&f!==void 0?f:void 0,j=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:G,emailVerified:B,isAnonymous:ne,providerData:re,stsTokenManager:A}=n;ie(G&&A,e,"internal-error");const _=Er.fromJSON(this.name,A);ie(typeof G=="string",e,"internal-error"),yn(g,e.name),yn(m,e.name),ie(typeof B=="boolean",e,"internal-error"),ie(typeof ne=="boolean",e,"internal-error"),yn(S,e.name),yn(R,e.name),yn(O,e.name),yn(V,e.name),yn(F,e.name),yn(j,e.name);const v=new St({uid:G,auth:e,email:m,emailVerified:B,displayName:g,isAnonymous:ne,photoURL:R,phoneNumber:S,tenantId:O,stsTokenManager:_,createdAt:F,lastLoginAt:j});return re&&Array.isArray(re)&&(v.providerData=re.map(E=>Object.assign({},E))),V&&(v._redirectEventId=V),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Er;s.updateFromServerResponse(n);const o=new St({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Si(o),o}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ie(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Ed(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!o?.length,c=new Er;c.updateFromIdToken(r);const u=new St({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ga(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!o?.length};return Object.assign(u,f),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=new Map;function sn(t){cn(t instanceof Function,"Expected a class definition");let e=Cu.get(t);return e?(cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cu.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Td.type="NONE";const ku=Td;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t,e,n){return`firebase:${t}:${e}:${n}`}class Tr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=li(this.userKey,s.apiKey,o),this.fullPersistenceKey=li("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ti(this.auth,{idToken:e}).catch(()=>{});return n?St._fromGetAccountInfoResponse(this.auth,n,e):null}return St._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Tr(sn(ku),e,r);const s=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=s[0]||sn(ku);const a=li(r,e.config.apiKey,e.name);let c=null;for(const f of n)try{const d=await f._get(a);if(d){let g;if(typeof d=="string"){const m=await Ti(e,{idToken:d}).catch(()=>{});if(!m)break;g=await St._fromGetAccountInfoResponse(e,m,d)}else g=St._fromJSON(e,d);f!==o&&(c=g),o=f;break}}catch{}const u=s.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new Tr(o,e,r):(o=u[0],c&&await o._set(a,c.toJSON()),await Promise.all(n.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new Tr(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pd(e))return"Blackberry";if(Od(e))return"Webos";if(Ad(e))return"Safari";if((e.includes("chrome/")||Cd(e))&&!e.includes("edge/"))return"Chrome";if(Rd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Sd(t=rt()){return/firefox\//i.test(t)}function Ad(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cd(t=rt()){return/crios\//i.test(t)}function kd(t=rt()){return/iemobile/i.test(t)}function Rd(t=rt()){return/android/i.test(t)}function Pd(t=rt()){return/blackberry/i.test(t)}function Od(t=rt()){return/webos/i.test(t)}function sl(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kw(t=rt()){var e;return sl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Rw(){return I_()&&document.documentMode===10}function Nd(t=rt()){return sl(t)||Rd(t)||Od(t)||Pd(t)||/windows phone/i.test(t)||kd(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t,e=[]){let n;switch(t){case"Browser":n=Ru(rt());break;case"Worker":n=`${Ru(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xr}/${r}`}/**
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
 */class Pw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((a,c)=>{try{const u=e(o);a(u)}catch(u){c(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Ow(t,e={}){return Lr(t,"GET","/v2/passwordPolicy",nl(t,e))}/**
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
 */const Nw=6;class Dw{constructor(e){var n,r,s,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Nw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,o,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pu(this),this.idTokenSubscription=new Pu(this),this.beforeStateQueue=new Pw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sn(n)),this._initializationPromise=this.queue(async()=>{var r,s,o;if(!this._deleted&&(this.persistenceManager=await Tr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ti(this,{idToken:e}),r=await St._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Tt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&u?.user&&(s=u.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Si(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tt(this.app))return Promise.reject(Zn(this));const n=e?hn(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tt(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tt(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ow(this),n=new Dw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ar("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Cw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await Tr.create(this,[sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&uw(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Yi(t){return hn(t)}class Pu{constructor(e){this.auth=e,this.observer=null,this.addObserver=k_(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lw(t){il=t}function Mw(t){return il.loadJS(t)}function Uw(){return il.gapiScript}function Fw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(t,e){const n=lr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(xn(o,e??{}))return s;Wt(s,"already-initialized")}return n.initialize({options:e})}function $w(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(sn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function Vw(t,e,n){const r=Yi(t);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=xd(e),{host:a,port:c}=Bw(e),u=c===null?"":`:${c}`,f={url:`${o}//${a}${u}/`},d=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie(xn(f,r.config.emulator)&&xn(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Rs(a)?(jf(`${o}//${a}${u}`),$f("Auth",!0)):Hw()}function xd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Bw(t){const e=xd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:Ou(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Ou(a)}}}function Ou(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Hw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,n){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(t,e){return _w(t,"POST","/v1/accounts:signInWithIdp",nl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww="http://localhost";class sr extends Ld{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,o=Qa(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new sr(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Sr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Sr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Sr(e,n)}buildRequest(){const e={requestUri:Ww,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ps(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends ol{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Ns{constructor(){super("facebook.com")}static credential(e){return sr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Ns{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return sr._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Ns{constructor(){super("github.com")}static credential(e){return sr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Ns{constructor(){super("twitter.com")}static credential(e,n){return sr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const o=await St._fromIdTokenResponse(e,r,s),a=Nu(r);return new Pr({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Nu(r);return new Pr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Nu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Dt{constructor(e,n,r,s){var o;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ai.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ai(e,n,r,s)}}function Md(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ai._fromErrorAndOperation(t,o,e,r):o})}async function Gw(t,e,n=!1){const r=await Ss(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zw(t,e,n=!1){const{auth:r}=t;if(Tt(r.app))return Promise.reject(Zn(r));const s="reauthenticate";try{const o=await Ss(t,Md(r,s,e,t),n);ie(o.idToken,r,"internal-error");const a=rl(o.idToken);ie(a,r,"internal-error");const{sub:c}=a;return ie(t.uid===c,r,"user-mismatch"),Pr._forOperation(t,s,o)}catch(o){throw o?.code==="auth/user-not-found"&&Wt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qw(t,e,n=!1){if(Tt(t.app))return Promise.reject(Zn(t));const r="signIn",s=await Md(t,r,e),o=await Pr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(o.user),o}function Kw(t,e,n,r){return hn(t).onIdTokenChanged(e,n,r)}function Jw(t,e,n){return hn(t).beforeAuthStateChanged(e,n)}function Xw(t,e,n,r){return hn(t).onAuthStateChanged(e,n,r)}const Ci="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ci,"1"),this.storage.removeItem(Ci),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=1e3,Qw=10;class Fd extends Ud{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);Rw()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Qw):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Yw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fd.type="LOCAL";const Zw=Fd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd extends Ud{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jd.type="SESSION";const $d=jd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Qi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:o}=n.data,a=this.handlersMap[s];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async f=>f(n.origin,o)),u=await eb(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((c,u)=>{const f=al("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const m=g;if(m.data.eventId===f)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(m.data.response);break;default:clearTimeout(d),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return window}function nb(t){Bt().location.href=t}/**
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
 */function Vd(){return typeof Bt().WorkerGlobalScope<"u"&&typeof Bt().importScripts=="function"}async function rb(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sb(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ib(){return Vd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="firebaseLocalStorageDb",ob=1,ki="firebaseLocalStorage",Hd="fbase_key";class Ds{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zi(t,e){return t.transaction([ki],e?"readwrite":"readonly").objectStore(ki)}function ab(){const t=indexedDB.deleteDatabase(Bd);return new Ds(t).toPromise()}function ma(){const t=indexedDB.open(Bd,ob);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ki,{keyPath:Hd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ki)?e(r):(r.close(),await ab(),e(await ma()))})})}async function Du(t,e,n){const r=Zi(t,!0).put({[Hd]:e,value:n});return new Ds(r).toPromise()}async function lb(t,e){const n=Zi(t,!1).get(e),r=await new Ds(n).toPromise();return r===void 0?null:r.value}function xu(t,e){const n=Zi(t,!0).delete(e);return new Ds(n).toPromise()}const cb=800,ub=3;class Wd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ma(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ub)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qi._getInstance(ib()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rb(),!this.activeServiceWorker)return;this.sender=new tb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ma();return await Du(e,Ci,"1"),await xu(e,Ci),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Du(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Zi(s,!1).getAll();return new Ds(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wd.type="LOCAL";const hb=Wd;new Os(3e4,6e4);/**
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
 */function Gd(t,e){return e?sn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends Ld{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Sr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fb(t){return qw(t.auth,new ll(t),t.bypassAuthState)}function db(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),zw(n,new ll(t),t.bypassAuthState)}async function pb(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),Gw(n,new ll(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fb;case"linkViaPopup":case"linkViaRedirect":return pb;case"reauthViaPopup":case"reauthViaRedirect":return db;default:Wt(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=new Os(2e3,1e4);async function mb(t,e,n){if(Tt(t.app))return Promise.reject(kt(t,"operation-not-supported-in-this-environment"));const r=Yi(t);hw(t,e,ol);const s=Gd(r,n);return new Jn(r,"signInViaPopup",e,s).executeNotNull()}class Jn extends zd{constructor(e,n,r,s,o){super(e,n,s,o),this.provider=r,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=al();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gb.get())};e()}}Jn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb="pendingRedirect",ci=new Map;class _b extends zd{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ci.get(this.auth._key());if(!e){try{const r=await yb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ci.set(this.auth._key(),e)}return this.bypassAuthState||ci.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yb(t,e){const n=Ib(e),r=bb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function wb(t,e){ci.set(t._key(),e)}function bb(t){return sn(t._redirectPersistence)}function Ib(t){return li(vb,t.config.apiKey,t.name)}async function Eb(t,e,n=!1){if(Tt(t.app))return Promise.reject(Zn(t));const r=Yi(t),s=Gd(r,e),a=await new _b(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=10*60*1e3;class Sb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ab(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Tb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lu(e))}saveEventToCache(e){this.cachedEventUids.add(Lu(e)),this.lastProcessedEventTime=Date.now()}}function Lu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qd({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Ab(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cb(t,e={}){return Lr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rb=/^https?/;async function Pb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Cb(t);for(const n of e)try{if(Ob(n))return}catch{}Wt(t,"unauthorized-domain")}function Ob(t){const e=pa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Rb.test(n))return!1;if(kb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Nb=new Os(3e4,6e4);function Mu(){const t=Bt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Db(t){return new Promise((e,n)=>{var r,s,o;function a(){Mu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mu(),n(kt(t,"network-request-failed"))},timeout:Nb.get()})}if(!((s=(r=Bt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=Bt().gapi)===null||o===void 0)&&o.load)a();else{const c=Fw("iframefcb");return Bt()[c]=()=>{gapi.load?a():n(kt(t,"network-request-failed"))},Mw(`${Uw()}?onload=${c}`).catch(u=>n(u))}}).catch(e=>{throw ui=null,e})}let ui=null;function xb(t){return ui=ui||Db(t),ui}/**
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
 */const Lb=new Os(5e3,15e3),Mb="__/auth/iframe",Ub="emulator/auth/iframe",Fb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $b(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tl(e,Ub):`https://${t.config.authDomain}/${Mb}`,r={apiKey:e.apiKey,appName:t.name,v:xr},s=jb.get(t.config.apiHost);s&&(r.eid=s);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ps(r).slice(1)}`}async function Vb(t){const e=await xb(t),n=Bt().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:$b(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fb,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=kt(t,"network-request-failed"),c=Bt().setTimeout(()=>{o(a)},Lb.get());function u(){Bt().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{o(a)})}))}/**
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
 */const Bb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hb=500,Wb=600,Gb="_blank",zb="http://localhost";class Uu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qb(t,e,n,r=Hb,s=Wb){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Bb),{width:r.toString(),height:s.toString(),top:o,left:a}),f=rt().toLowerCase();n&&(c=Cd(f)?Gb:n),Sd(f)&&(e=e||zb,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[S,R])=>`${m}${S}=${R},`,"");if(kw(f)&&c!=="_self")return Kb(e||"",c),new Uu(null);const g=window.open(e||"",c,d);ie(g,t,"popup-blocked");try{g.focus()}catch{}return new Uu(g)}function Kb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Jb="__/auth/handler",Xb="emulator/auth/handler",Yb=encodeURIComponent("fac");async function Fu(t,e,n,r,s,o){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xr,eventId:s};if(e instanceof ol){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",C_(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof Ns){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const u=await t._getAppCheckToken(),f=u?`#${Yb}=${encodeURIComponent(u)}`:"";return`${Qb(t)}?${Ps(c).slice(1)}${f}`}function Qb({config:t}){return t.emulator?tl(t,Xb):`https://${t.authDomain}/${Jb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="webStorageSupport";class Zb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$d,this._completeRedirectFn=Eb,this._overrideRedirectResult=wb}async _openPopup(e,n,r,s){var o;cn((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Fu(e,n,r,pa(),s);return qb(e,a,al())}async _openRedirect(e,n,r,s){await this._originValidation(e);const o=await Fu(e,n,r,pa(),s);return nb(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(cn(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Vb(e),r=new Sb(e);return n.register("authEvent",s=>(ie(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bo,{type:Bo},s=>{var o;const a=(o=s?.[0])===null||o===void 0?void 0:o[Bo];a!==void 0&&n(!!a),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Pb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Nd()||Ad()||sl()}}const e1=Zb;var ju="@firebase/auth",$u="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function r1(t){Ht(new Nt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ie(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dd(t)},f=new xw(r,s,o,u);return $w(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ht(new Nt("auth-internal",e=>{const n=Yi(e.getProvider("auth").getImmediate());return(r=>new t1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yt(ju,$u,n1(t)),yt(ju,$u,"esm2017")}/**
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
 */const s1=5*60,i1=Ff("authIdTokenMaxAge")||s1;let Vu=null;const o1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>i1)return;const s=n?.token;Vu!==s&&(Vu=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function a1(t=za()){const e=lr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jw(t,{popupRedirectResolver:e1,persistence:[hb,Zw,$d]}),r=Ff("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=o1(o.toString());Jw(n,a,()=>a(n.currentUser)),Kw(n,c=>a(c))}}const s=Mf("auth");return s&&Vw(n,`http://${s}`),n}function l1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Lw({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const o=kt("internal-error");o.customData=s,n(o)},r.type="text/javascript",r.charset="UTF-8",l1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});r1("Browser");var Bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cl;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function v(){}v.prototype=_.prototype,A.D=_.prototype,A.prototype=new v,A.prototype.constructor=A,A.C=function(E,T,I){for(var w=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)w[Ie-2]=arguments[Ie];return _.prototype[T].apply(E,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,_,v){v||(v=0);var E=Array(16);if(typeof _=="string")for(var T=0;16>T;++T)E[T]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(T=0;16>T;++T)E[T]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=A.g[0],v=A.g[1],T=A.g[2];var I=A.g[3],w=_+(I^v&(T^I))+E[0]+3614090360&4294967295;_=v+(w<<7&4294967295|w>>>25),w=I+(T^_&(v^T))+E[1]+3905402710&4294967295,I=_+(w<<12&4294967295|w>>>20),w=T+(v^I&(_^v))+E[2]+606105819&4294967295,T=I+(w<<17&4294967295|w>>>15),w=v+(_^T&(I^_))+E[3]+3250441966&4294967295,v=T+(w<<22&4294967295|w>>>10),w=_+(I^v&(T^I))+E[4]+4118548399&4294967295,_=v+(w<<7&4294967295|w>>>25),w=I+(T^_&(v^T))+E[5]+1200080426&4294967295,I=_+(w<<12&4294967295|w>>>20),w=T+(v^I&(_^v))+E[6]+2821735955&4294967295,T=I+(w<<17&4294967295|w>>>15),w=v+(_^T&(I^_))+E[7]+4249261313&4294967295,v=T+(w<<22&4294967295|w>>>10),w=_+(I^v&(T^I))+E[8]+1770035416&4294967295,_=v+(w<<7&4294967295|w>>>25),w=I+(T^_&(v^T))+E[9]+2336552879&4294967295,I=_+(w<<12&4294967295|w>>>20),w=T+(v^I&(_^v))+E[10]+4294925233&4294967295,T=I+(w<<17&4294967295|w>>>15),w=v+(_^T&(I^_))+E[11]+2304563134&4294967295,v=T+(w<<22&4294967295|w>>>10),w=_+(I^v&(T^I))+E[12]+1804603682&4294967295,_=v+(w<<7&4294967295|w>>>25),w=I+(T^_&(v^T))+E[13]+4254626195&4294967295,I=_+(w<<12&4294967295|w>>>20),w=T+(v^I&(_^v))+E[14]+2792965006&4294967295,T=I+(w<<17&4294967295|w>>>15),w=v+(_^T&(I^_))+E[15]+1236535329&4294967295,v=T+(w<<22&4294967295|w>>>10),w=_+(T^I&(v^T))+E[1]+4129170786&4294967295,_=v+(w<<5&4294967295|w>>>27),w=I+(v^T&(_^v))+E[6]+3225465664&4294967295,I=_+(w<<9&4294967295|w>>>23),w=T+(_^v&(I^_))+E[11]+643717713&4294967295,T=I+(w<<14&4294967295|w>>>18),w=v+(I^_&(T^I))+E[0]+3921069994&4294967295,v=T+(w<<20&4294967295|w>>>12),w=_+(T^I&(v^T))+E[5]+3593408605&4294967295,_=v+(w<<5&4294967295|w>>>27),w=I+(v^T&(_^v))+E[10]+38016083&4294967295,I=_+(w<<9&4294967295|w>>>23),w=T+(_^v&(I^_))+E[15]+3634488961&4294967295,T=I+(w<<14&4294967295|w>>>18),w=v+(I^_&(T^I))+E[4]+3889429448&4294967295,v=T+(w<<20&4294967295|w>>>12),w=_+(T^I&(v^T))+E[9]+568446438&4294967295,_=v+(w<<5&4294967295|w>>>27),w=I+(v^T&(_^v))+E[14]+3275163606&4294967295,I=_+(w<<9&4294967295|w>>>23),w=T+(_^v&(I^_))+E[3]+4107603335&4294967295,T=I+(w<<14&4294967295|w>>>18),w=v+(I^_&(T^I))+E[8]+1163531501&4294967295,v=T+(w<<20&4294967295|w>>>12),w=_+(T^I&(v^T))+E[13]+2850285829&4294967295,_=v+(w<<5&4294967295|w>>>27),w=I+(v^T&(_^v))+E[2]+4243563512&4294967295,I=_+(w<<9&4294967295|w>>>23),w=T+(_^v&(I^_))+E[7]+1735328473&4294967295,T=I+(w<<14&4294967295|w>>>18),w=v+(I^_&(T^I))+E[12]+2368359562&4294967295,v=T+(w<<20&4294967295|w>>>12),w=_+(v^T^I)+E[5]+4294588738&4294967295,_=v+(w<<4&4294967295|w>>>28),w=I+(_^v^T)+E[8]+2272392833&4294967295,I=_+(w<<11&4294967295|w>>>21),w=T+(I^_^v)+E[11]+1839030562&4294967295,T=I+(w<<16&4294967295|w>>>16),w=v+(T^I^_)+E[14]+4259657740&4294967295,v=T+(w<<23&4294967295|w>>>9),w=_+(v^T^I)+E[1]+2763975236&4294967295,_=v+(w<<4&4294967295|w>>>28),w=I+(_^v^T)+E[4]+1272893353&4294967295,I=_+(w<<11&4294967295|w>>>21),w=T+(I^_^v)+E[7]+4139469664&4294967295,T=I+(w<<16&4294967295|w>>>16),w=v+(T^I^_)+E[10]+3200236656&4294967295,v=T+(w<<23&4294967295|w>>>9),w=_+(v^T^I)+E[13]+681279174&4294967295,_=v+(w<<4&4294967295|w>>>28),w=I+(_^v^T)+E[0]+3936430074&4294967295,I=_+(w<<11&4294967295|w>>>21),w=T+(I^_^v)+E[3]+3572445317&4294967295,T=I+(w<<16&4294967295|w>>>16),w=v+(T^I^_)+E[6]+76029189&4294967295,v=T+(w<<23&4294967295|w>>>9),w=_+(v^T^I)+E[9]+3654602809&4294967295,_=v+(w<<4&4294967295|w>>>28),w=I+(_^v^T)+E[12]+3873151461&4294967295,I=_+(w<<11&4294967295|w>>>21),w=T+(I^_^v)+E[15]+530742520&4294967295,T=I+(w<<16&4294967295|w>>>16),w=v+(T^I^_)+E[2]+3299628645&4294967295,v=T+(w<<23&4294967295|w>>>9),w=_+(T^(v|~I))+E[0]+4096336452&4294967295,_=v+(w<<6&4294967295|w>>>26),w=I+(v^(_|~T))+E[7]+1126891415&4294967295,I=_+(w<<10&4294967295|w>>>22),w=T+(_^(I|~v))+E[14]+2878612391&4294967295,T=I+(w<<15&4294967295|w>>>17),w=v+(I^(T|~_))+E[5]+4237533241&4294967295,v=T+(w<<21&4294967295|w>>>11),w=_+(T^(v|~I))+E[12]+1700485571&4294967295,_=v+(w<<6&4294967295|w>>>26),w=I+(v^(_|~T))+E[3]+2399980690&4294967295,I=_+(w<<10&4294967295|w>>>22),w=T+(_^(I|~v))+E[10]+4293915773&4294967295,T=I+(w<<15&4294967295|w>>>17),w=v+(I^(T|~_))+E[1]+2240044497&4294967295,v=T+(w<<21&4294967295|w>>>11),w=_+(T^(v|~I))+E[8]+1873313359&4294967295,_=v+(w<<6&4294967295|w>>>26),w=I+(v^(_|~T))+E[15]+4264355552&4294967295,I=_+(w<<10&4294967295|w>>>22),w=T+(_^(I|~v))+E[6]+2734768916&4294967295,T=I+(w<<15&4294967295|w>>>17),w=v+(I^(T|~_))+E[13]+1309151649&4294967295,v=T+(w<<21&4294967295|w>>>11),w=_+(T^(v|~I))+E[4]+4149444226&4294967295,_=v+(w<<6&4294967295|w>>>26),w=I+(v^(_|~T))+E[11]+3174756917&4294967295,I=_+(w<<10&4294967295|w>>>22),w=T+(_^(I|~v))+E[2]+718787259&4294967295,T=I+(w<<15&4294967295|w>>>17),w=v+(I^(T|~_))+E[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(T+(w<<21&4294967295|w>>>11))&4294967295,A.g[2]=A.g[2]+T&4294967295,A.g[3]=A.g[3]+I&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var v=_-this.blockSize,E=this.B,T=this.h,I=0;I<_;){if(T==0)for(;I<=v;)s(this,A,I),I+=this.blockSize;if(typeof A=="string"){for(;I<_;)if(E[T++]=A.charCodeAt(I++),T==this.blockSize){s(this,E),T=0;break}}else for(;I<_;)if(E[T++]=A[I++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var v=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=v&255,v/=256;for(this.u(A),A=Array(16),_=v=0;4>_;++_)for(var E=0;32>E;E+=8)A[v++]=this.g[_]>>>E&255;return A};function o(A,_){var v=c;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=_(A)}function a(A,_){this.h=_;for(var v=[],E=!0,T=A.length-1;0<=T;T--){var I=A[T]|0;E&&I==_||(v[T]=I,E=!1)}this.g=v}var c={};function u(A){return-128<=A&&128>A?o(A,function(_){return new a([_|0],0>_?-1:0)}):new a([A|0],0>A?-1:0)}function f(A){if(isNaN(A)||!isFinite(A))return g;if(0>A)return V(f(-A));for(var _=[],v=1,E=0;A>=v;E++)_[E]=A/v|0,v*=4294967296;return new a(_,0)}function d(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return V(d(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=f(Math.pow(_,8)),E=g,T=0;T<A.length;T+=8){var I=Math.min(8,A.length-T),w=parseInt(A.substring(T,T+I),_);8>I?(I=f(Math.pow(_,I)),E=E.j(I).add(f(w))):(E=E.j(v),E=E.add(f(w)))}return E}var g=u(0),m=u(1),S=u(16777216);t=a.prototype,t.m=function(){if(O(this))return-V(this).m();for(var A=0,_=1,v=0;v<this.g.length;v++){var E=this.i(v);A+=(0<=E?E:4294967296+E)*_,_*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(R(this))return"0";if(O(this))return"-"+V(this).toString(A);for(var _=f(Math.pow(A,6)),v=this,E="";;){var T=B(v,_).g;v=F(v,T.j(_));var I=((0<v.g.length?v.g[0]:v.h)>>>0).toString(A);if(v=T,R(v))return I+E;for(;6>I.length;)I="0"+I;E=I+E}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function R(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function O(A){return A.h==-1}t.l=function(A){return A=F(this,A),O(A)?-1:R(A)?0:1};function V(A){for(var _=A.g.length,v=[],E=0;E<_;E++)v[E]=~A.g[E];return new a(v,~A.h).add(m)}t.abs=function(){return O(this)?V(this):this},t.add=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],E=0,T=0;T<=_;T++){var I=E+(this.i(T)&65535)+(A.i(T)&65535),w=(I>>>16)+(this.i(T)>>>16)+(A.i(T)>>>16);E=w>>>16,I&=65535,w&=65535,v[T]=w<<16|I}return new a(v,v[v.length-1]&-2147483648?-1:0)};function F(A,_){return A.add(V(_))}t.j=function(A){if(R(this)||R(A))return g;if(O(this))return O(A)?V(this).j(V(A)):V(V(this).j(A));if(O(A))return V(this.j(V(A)));if(0>this.l(S)&&0>A.l(S))return f(this.m()*A.m());for(var _=this.g.length+A.g.length,v=[],E=0;E<2*_;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<A.g.length;T++){var I=this.i(E)>>>16,w=this.i(E)&65535,Ie=A.i(T)>>>16,Ue=A.i(T)&65535;v[2*E+2*T]+=w*Ue,j(v,2*E+2*T),v[2*E+2*T+1]+=I*Ue,j(v,2*E+2*T+1),v[2*E+2*T+1]+=w*Ie,j(v,2*E+2*T+1),v[2*E+2*T+2]+=I*Ie,j(v,2*E+2*T+2)}for(E=0;E<_;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=_;E<2*_;E++)v[E]=0;return new a(v,0)};function j(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function G(A,_){this.g=A,this.h=_}function B(A,_){if(R(_))throw Error("division by zero");if(R(A))return new G(g,g);if(O(A))return _=B(V(A),_),new G(V(_.g),V(_.h));if(O(_))return _=B(A,V(_)),new G(V(_.g),_.h);if(30<A.g.length){if(O(A)||O(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,E=_;0>=E.l(A);)v=ne(v),E=ne(E);var T=re(v,1),I=re(E,1);for(E=re(E,2),v=re(v,2);!R(E);){var w=I.add(E);0>=w.l(A)&&(T=T.add(v),I=w),E=re(E,1),v=re(v,1)}return _=F(A,T.j(_)),new G(T,_)}for(T=g;0<=A.l(_);){for(v=Math.max(1,Math.floor(A.m()/_.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),I=f(v),w=I.j(_);O(w)||0<w.l(A);)v-=E,I=f(v),w=I.j(_);R(I)&&(I=m),T=T.add(I),A=F(A,w)}return new G(T,A)}t.A=function(A){return B(this,A).h},t.and=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)&A.i(E);return new a(v,this.h&A.h)},t.or=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)|A.i(E);return new a(v,this.h|A.h)},t.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)^A.i(E);return new a(v,this.h^A.h)};function ne(A){for(var _=A.g.length+1,v=[],E=0;E<_;E++)v[E]=A.i(E)<<1|A.i(E-1)>>>31;return new a(v,A.h)}function re(A,_){var v=_>>5;_%=32;for(var E=A.g.length-v,T=[],I=0;I<E;I++)T[I]=0<_?A.i(I+v)>>>_|A.i(I+v+1)<<32-_:A.i(I+v);return new a(T,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,cl=a}).apply(typeof Bu<"u"?Bu:typeof self<"u"?self:typeof window<"u"?window:{});var ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,h){return i==Array.prototype||i==Object.prototype||(i[l]=h.value),i};function n(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof ei=="object"&&ei];for(var l=0;l<i.length;++l){var h=i[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(i,l){if(l)e:{var h=r;i=i.split(".");for(var p=0;p<i.length-1;p++){var k=i[p];if(!(k in h))break e;h=h[k]}i=i[i.length-1],p=h[i],l=l(p),l!=p&&l!=null&&e(h,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var h=0,p=!1,k={next:function(){if(!p&&h<i.length){var P=h++;return{value:l(P,i[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function f(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function d(i,l,h){return i.call.apply(i.bind,arguments)}function g(i,l,h){if(!i)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,p),i.apply(l,k)}}return function(){return i.apply(l,arguments)}}function m(i,l,h){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,m.apply(null,arguments)}function S(i,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),i.apply(this,p)}}function R(i,l){function h(){}h.prototype=l.prototype,i.aa=l.prototype,i.prototype=new h,i.prototype.constructor=i,i.Qb=function(p,k,P){for(var W=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)W[Ee-2]=arguments[Ee];return l.prototype[k].apply(p,W)}}function O(i){const l=i.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=i[p];return h}return[]}function V(i,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const k=i.length||0,P=p.length||0;i.length=k+P;for(let W=0;W<P;W++)i[k+W]=p[W]}else i.push(p)}}class F{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function j(i){return/^[\s\xa0]*$/.test(i)}function G(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function B(i){return B[" "](i),i}B[" "]=function(){};var ne=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function re(i,l,h){for(const p in i)l.call(h,i[p],p,i)}function A(i,l){for(const h in i)l.call(void 0,i[h],h,i)}function _(i){const l={};for(const h in i)l[h]=i[h];return l}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,l){let h,p;for(let k=1;k<arguments.length;k++){p=arguments[k];for(h in p)i[h]=p[h];for(let P=0;P<v.length;P++)h=v[P],Object.prototype.hasOwnProperty.call(p,h)&&(i[h]=p[h])}}function T(i){var l=1;i=i.split(":");const h=[];for(;0<l&&i.length;)h.push(i.shift()),l--;return i.length&&h.push(i.join(":")),h}function I(i){c.setTimeout(()=>{throw i},0)}function w(){var i=lt;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class Ie{constructor(){this.h=this.g=null}add(l,h){const p=Ue.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Ue=new F(()=>new Pe,i=>i.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let he,ue=!1,lt=new Ie,bt=()=>{const i=c.Promise.resolve(void 0);he=()=>{i.then(ft)}};var ft=()=>{for(var i;i=w();){try{i.h.call(i.g)}catch(h){I(h)}var l=Ue;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}ue=!1};function Oe(){this.s=this.s,this.C=this.C}Oe.prototype.s=!1,Oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var fn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return i}();function xt(i,l){if(Ne.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var h=this.type=i.type,p=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(ne){e:{try{B(l.nodeName);var k=!0;break e}catch{}k=!1}k||(l=null)}}else h=="mouseover"?l=i.fromElement:h=="mouseout"&&(l=i.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:st[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&xt.aa.h.call(this)}}R(xt,Ne);var st={2:"touch",3:"pen",4:"mouse"};xt.prototype.h=function(){xt.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),J=0;function K(i,l,h,p,k){this.listener=i,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=k,this.key=++J,this.da=this.fa=!1}function X(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function me(i){this.src=i,this.g={},this.h=0}me.prototype.add=function(i,l,h,p,k){var P=i.toString();i=this.g[P],i||(i=this.g[P]=[],this.h++);var W=b(i,l,p,k);return-1<W?(l=i[W],h||(l.fa=!1)):(l=new K(l,this.src,P,!!p,k),l.fa=h,i.push(l)),l};function y(i,l){var h=l.type;if(h in i.g){var p=i.g[h],k=Array.prototype.indexOf.call(p,l,void 0),P;(P=0<=k)&&Array.prototype.splice.call(p,k,1),P&&(X(l),i.g[h].length==0&&(delete i.g[h],i.h--))}}function b(i,l,h,p){for(var k=0;k<i.length;++k){var P=i[k];if(!P.da&&P.listener==l&&P.capture==!!h&&P.ha==p)return k}return-1}var C="closure_lm_"+(1e6*Math.random()|0),x={};function M(i,l,h,p,k){if(Array.isArray(l)){for(var P=0;P<l.length;P++)M(i,l[P],h,p,k);return null}return h=se(h),i&&i[D]?i.K(l,h,f(p)?!!p.capture:!1,k):L(i,l,h,!1,p,k)}function L(i,l,h,p,k,P){if(!l)throw Error("Invalid event type");var W=f(k)?!!k.capture:!!k,Ee=z(i);if(Ee||(i[C]=Ee=new me(i)),h=Ee.add(l,h,p,W,P),h.proxy)return h;if(p=q(),h.proxy=p,p.src=i,p.listener=h,i.addEventListener)fn||(k=W),k===void 0&&(k=!1),i.addEventListener(l.toString(),p,k);else if(i.attachEvent)i.attachEvent(U(l.toString()),p);else if(i.addListener&&i.removeListener)i.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function q(){function i(h){return l.call(i.src,i.listener,h)}const l=Q;return i}function H(i,l,h,p,k){if(Array.isArray(l))for(var P=0;P<l.length;P++)H(i,l[P],h,p,k);else p=f(p)?!!p.capture:!!p,h=se(h),i&&i[D]?(i=i.i,l=String(l).toString(),l in i.g&&(P=i.g[l],h=b(P,h,p,k),-1<h&&(X(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete i.g[l],i.h--)))):i&&(i=z(i))&&(l=i.g[l.toString()],i=-1,l&&(i=b(l,h,p,k)),(h=-1<i?l[i]:null)&&$(h))}function $(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[D])y(l.i,i);else{var h=i.type,p=i.proxy;l.removeEventListener?l.removeEventListener(h,p,i.capture):l.detachEvent?l.detachEvent(U(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=z(l))?(y(h,i),h.h==0&&(h.src=null,l[C]=null)):X(i)}}}function U(i){return i in x?x[i]:x[i]="on"+i}function Q(i,l){if(i.da)i=!0;else{l=new xt(l,this);var h=i.listener,p=i.ha||i.src;i.fa&&$(i),i=h.call(p,l)}return i}function z(i){return i=i[C],i instanceof me?i:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(i){return typeof i=="function"?i:(i[Y]||(i[Y]=function(l){return i.handleEvent(l)}),i[Y])}function Z(){Oe.call(this),this.i=new me(this),this.M=this,this.F=null}R(Z,Oe),Z.prototype[D]=!0,Z.prototype.removeEventListener=function(i,l,h,p){H(this,i,l,h,p)};function ae(i,l){var h,p=i.F;if(p)for(h=[];p;p=p.F)h.push(p);if(i=i.M,p=l.type||l,typeof l=="string")l=new Ne(l,i);else if(l instanceof Ne)l.target=l.target||i;else{var k=l;l=new Ne(p,i),E(l,k)}if(k=!0,h)for(var P=h.length-1;0<=P;P--){var W=l.g=h[P];k=fe(W,p,!0,l)&&k}if(W=l.g=i,k=fe(W,p,!0,l)&&k,k=fe(W,p,!1,l)&&k,h)for(P=0;P<h.length;P++)W=l.g=h[P],k=fe(W,p,!1,l)&&k}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var h=i.g[l],p=0;p<h.length;p++)X(h[p]);delete i.g[l],i.h--}}this.F=null},Z.prototype.K=function(i,l,h,p){return this.i.add(String(i),l,!1,h,p)},Z.prototype.L=function(i,l,h,p){return this.i.add(String(i),l,!0,h,p)};function fe(i,l,h,p){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var k=!0,P=0;P<l.length;++P){var W=l[P];if(W&&!W.da&&W.capture==h){var Ee=W.listener,He=W.ha||W.src;W.fa&&y(i.i,W),k=Ee.call(He,p)!==!1&&k}}return k&&!p.defaultPrevented}function $e(i,l,h){if(typeof i=="function")h&&(i=m(i,h));else if(i&&typeof i.handleEvent=="function")i=m(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(i,l||0)}function Ve(i){i.g=$e(()=>{i.g=null,i.i&&(i.i=!1,Ve(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class dt extends Oe{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ve(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qe(i){Oe.call(this),this.h=i,this.g={}}R(qe,Oe);var dn=[];function Mr(i){re(i.g,function(l,h){this.g.hasOwnProperty(h)&&$(l)},i),i.g={}}qe.prototype.N=function(){qe.aa.N.call(this),Mr(this)},qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Be=c.JSON.stringify,pt=c.JSON.parse,Ms=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function eo(){}eo.prototype.h=null;function gl(i){return i.h||(i.h=i.i())}function rp(){}var Ur={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function to(){Ne.call(this,"d")}R(to,Ne);function no(){Ne.call(this,"c")}R(no,Ne);var cr={},ml=null;function ro(){return ml=ml||new Z}cr.La="serverreachability";function vl(i){Ne.call(this,cr.La,i)}R(vl,Ne);function Fr(i){const l=ro();ae(l,new vl(l))}cr.STAT_EVENT="statevent";function _l(i,l){Ne.call(this,cr.STAT_EVENT,i),this.stat=l}R(_l,Ne);function Qe(i){const l=ro();ae(l,new _l(l,i))}cr.Ma="timingevent";function yl(i,l){Ne.call(this,cr.Ma,i),this.size=l}R(yl,Ne);function jr(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},l)}function $r(){this.g=!0}$r.prototype.xa=function(){this.g=!1};function sp(i,l,h,p,k,P){i.info(function(){if(i.g)if(P)for(var W="",Ee=P.split("&"),He=0;He<Ee.length;He++){var ve=Ee[He].split("=");if(1<ve.length){var Ke=ve[0];ve=ve[1];var Je=Ke.split("_");W=2<=Je.length&&Je[1]=="type"?W+(Ke+"="+ve+"&"):W+(Ke+"=redacted&")}}else W=null;else W=P;return"XMLHTTP REQ ("+p+") [attempt "+k+"]: "+l+`
`+h+`
`+W})}function ip(i,l,h,p,k,P,W){i.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+k+"]: "+l+`
`+h+`
`+P+" "+W})}function ur(i,l,h,p){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+ap(i,h)+(p?" "+p:"")})}function op(i,l){i.info(function(){return"TIMEOUT: "+l})}$r.prototype.info=function(){};function ap(i,l){if(!i.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(i=0;i<h.length;i++)if(Array.isArray(h[i])){var p=h[i];if(!(2>p.length)){var k=p[1];if(Array.isArray(k)&&!(1>k.length)){var P=k[0];if(P!="noop"&&P!="stop"&&P!="close")for(var W=1;W<k.length;W++)k[W]=""}}}}return Be(h)}catch{return l}}var so={NO_ERROR:0,TIMEOUT:8},lp={},io;function Us(){}R(Us,eo),Us.prototype.g=function(){return new XMLHttpRequest},Us.prototype.i=function(){return{}},io=new Us;function pn(i,l,h,p){this.j=i,this.i=l,this.l=h,this.R=p||1,this.U=new qe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wl}function wl(){this.i=null,this.g="",this.h=!1}var bl={},oo={};function ao(i,l,h){i.L=1,i.v=Vs(zt(l)),i.m=h,i.P=!0,Il(i,null)}function Il(i,l){i.F=Date.now(),Fs(i),i.A=zt(i.v);var h=i.A,p=i.R;Array.isArray(p)||(p=[String(p)]),Ml(h.i,"t",p),i.C=0,h=i.j.J,i.h=new wl,i.g=ec(i.j,h?l:null,!i.m),0<i.O&&(i.M=new dt(m(i.Y,i,i.g),i.O)),l=i.U,h=i.g,p=i.ca;var k="readystatechange";Array.isArray(k)||(k&&(dn[0]=k.toString()),k=dn);for(var P=0;P<k.length;P++){var W=M(h,k[P],p||l.handleEvent,!1,l.h||l);if(!W)break;l.g[W.key]=W}l=i.H?_(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),Fr(),sp(i.i,i.u,i.A,i.l,i.R,i.m)}pn.prototype.ca=function(i){i=i.target;const l=this.M;l&&qt(i)==3?l.j():this.Y(i)},pn.prototype.Y=function(i){try{if(i==this.g)e:{const Je=qt(this.g);var l=this.g.Ba();const dr=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||Hl(this.g)))){this.J||Je!=4||l==7||(l==8||0>=dr?Fr(3):Fr(2)),lo(this);var h=this.g.Z();this.X=h;t:if(El(this)){var p=Hl(this.g);i="";var k=p.length,P=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Un(this),Vr(this);var W="";break t}this.h.i=new c.TextDecoder}for(l=0;l<k;l++)this.h.h=!0,i+=this.h.i.decode(p[l],{stream:!(P&&l==k-1)});p.length=0,this.h.g+=i,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=h==200,ip(this.i,this.u,this.A,this.l,this.R,Je,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Ee,He=this.g;if((Ee=He.g?He.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Ee)){var ve=Ee;break t}}ve=null}if(h=ve)ur(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,co(this,h);else{this.o=!1,this.s=3,Qe(12),Un(this),Vr(this);break e}}if(this.P){h=!0;let It;for(;!this.J&&this.C<W.length;)if(It=cp(this,W),It==oo){Je==4&&(this.s=4,Qe(14),h=!1),ur(this.i,this.l,null,"[Incomplete Response]");break}else if(It==bl){this.s=4,Qe(15),ur(this.i,this.l,W,"[Invalid Chunk]"),h=!1;break}else ur(this.i,this.l,It,null),co(this,It);if(El(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||W.length!=0||this.h.h||(this.s=1,Qe(16),h=!1),this.o=this.o&&h,!h)ur(this.i,this.l,W,"[Invalid Chunked Response]"),Un(this),Vr(this);else if(0<W.length&&!this.W){this.W=!0;var Ke=this.j;Ke.g==this&&Ke.ba&&!Ke.M&&(Ke.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),mo(Ke),Ke.M=!0,Qe(11))}}else ur(this.i,this.l,W,null),co(this,W);Je==4&&Un(this),this.o&&!this.J&&(Je==4?Xl(this.j,this):(this.o=!1,Fs(this)))}else Ap(this.g),h==400&&0<W.indexOf("Unknown SID")?(this.s=3,Qe(12)):(this.s=0,Qe(13)),Un(this),Vr(this)}}}catch{}finally{}};function El(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function cp(i,l){var h=i.C,p=l.indexOf(`
`,h);return p==-1?oo:(h=Number(l.substring(h,p)),isNaN(h)?bl:(p+=1,p+h>l.length?oo:(l=l.slice(p,p+h),i.C=p+h,l)))}pn.prototype.cancel=function(){this.J=!0,Un(this)};function Fs(i){i.S=Date.now()+i.I,Tl(i,i.I)}function Tl(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=jr(m(i.ba,i),l)}function lo(i){i.B&&(c.clearTimeout(i.B),i.B=null)}pn.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(op(this.i,this.A),this.L!=2&&(Fr(),Qe(17)),Un(this),this.s=2,Vr(this)):Tl(this,this.S-i)};function Vr(i){i.j.G==0||i.J||Xl(i.j,i)}function Un(i){lo(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,Mr(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function co(i,l){try{var h=i.j;if(h.G!=0&&(h.g==i||uo(h.h,i))){if(!i.K&&uo(h.h,i)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var k=p;if(k[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<i.F)qs(h),Gs(h);else break e;go(h),Qe(18)}}else h.za=k[1],0<h.za-h.T&&37500>k[2]&&h.F&&h.v==0&&!h.C&&(h.C=jr(m(h.Za,h),6e3));if(1>=Cl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else jn(h,11)}else if((i.K||h.g==i)&&qs(h),!j(l))for(k=h.Da.g.parse(l),l=0;l<k.length;l++){let ve=k[l];if(h.T=ve[0],ve=ve[1],h.G==2)if(ve[0]=="c"){h.K=ve[1],h.ia=ve[2];const Ke=ve[3];Ke!=null&&(h.la=Ke,h.j.info("VER="+h.la));const Je=ve[4];Je!=null&&(h.Aa=Je,h.j.info("SVER="+h.Aa));const dr=ve[5];dr!=null&&typeof dr=="number"&&0<dr&&(p=1.5*dr,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const It=i.g;if(It){const Ks=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ks){var P=p.h;P.g||Ks.indexOf("spdy")==-1&&Ks.indexOf("quic")==-1&&Ks.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ho(P,P.h),P.h=null))}if(p.D){const vo=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;vo&&(p.ya=vo,Ce(p.I,p.D,vo))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-i.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var W=i;if(p.qa=Zl(p,p.J?p.ia:null,p.W),W.K){kl(p.h,W);var Ee=W,He=p.L;He&&(Ee.I=He),Ee.B&&(lo(Ee),Fs(Ee)),p.g=W}else Kl(p);0<h.i.length&&zs(h)}else ve[0]!="stop"&&ve[0]!="close"||jn(h,7);else h.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?jn(h,7):po(h):ve[0]!="noop"&&h.l&&h.l.ta(ve),h.v=0)}}Fr(4)}catch{}}var up=class{constructor(i,l){this.g=i,this.map=l}};function Sl(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Al(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Cl(i){return i.h?1:i.g?i.g.size:0}function uo(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function ho(i,l){i.g?i.g.add(l):i.h=l}function kl(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Sl.prototype.cancel=function(){if(this.i=Rl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Rl(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const h of i.g.values())l=l.concat(h.D);return l}return O(i.i)}function hp(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(u(i)){for(var l=[],h=i.length,p=0;p<h;p++)l.push(i[p]);return l}l=[],h=0;for(p in i)l[h++]=i[p];return l}function fp(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(u(i)||typeof i=="string"){var l=[];i=i.length;for(var h=0;h<i;h++)l.push(h);return l}l=[],h=0;for(const p in i)l[h++]=p;return l}}}function Pl(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(u(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var h=fp(i),p=hp(i),k=p.length,P=0;P<k;P++)l.call(void 0,p[P],h&&h[P],i)}var Ol=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dp(i,l){if(i){i=i.split("&");for(var h=0;h<i.length;h++){var p=i[h].indexOf("="),k=null;if(0<=p){var P=i[h].substring(0,p);k=i[h].substring(p+1)}else P=i[h];l(P,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Fn(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Fn){this.h=i.h,js(this,i.j),this.o=i.o,this.g=i.g,$s(this,i.s),this.l=i.l;var l=i.i,h=new Wr;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Nl(this,h),this.m=i.m}else i&&(l=String(i).match(Ol))?(this.h=!1,js(this,l[1]||"",!0),this.o=Br(l[2]||""),this.g=Br(l[3]||"",!0),$s(this,l[4]),this.l=Br(l[5]||"",!0),Nl(this,l[6]||"",!0),this.m=Br(l[7]||"")):(this.h=!1,this.i=new Wr(null,this.h))}Fn.prototype.toString=function(){var i=[],l=this.j;l&&i.push(Hr(l,Dl,!0),":");var h=this.g;return(h||l=="file")&&(i.push("//"),(l=this.o)&&i.push(Hr(l,Dl,!0),"@"),i.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&i.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(Hr(h,h.charAt(0)=="/"?mp:gp,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",Hr(h,_p)),i.join("")};function zt(i){return new Fn(i)}function js(i,l,h){i.j=h?Br(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function $s(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function Nl(i,l,h){l instanceof Wr?(i.i=l,yp(i.i,i.h)):(h||(l=Hr(l,vp)),i.i=new Wr(l,i.h))}function Ce(i,l,h){i.i.set(l,h)}function Vs(i){return Ce(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Br(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Hr(i,l,h){return typeof i=="string"?(i=encodeURI(i).replace(l,pp),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function pp(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Dl=/[#\/\?@]/g,gp=/[#\?:]/g,mp=/[#\?]/g,vp=/[#\?@]/g,_p=/#/g;function Wr(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function gn(i){i.g||(i.g=new Map,i.h=0,i.i&&dp(i.i,function(l,h){i.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}t=Wr.prototype,t.add=function(i,l){gn(this),this.i=null,i=hr(this,i);var h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(l),this.h+=1,this};function xl(i,l){gn(i),l=hr(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Ll(i,l){return gn(i),l=hr(i,l),i.g.has(l)}t.forEach=function(i,l){gn(this),this.g.forEach(function(h,p){h.forEach(function(k){i.call(l,k,p,this)},this)},this)},t.na=function(){gn(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const k=i[p];for(let P=0;P<k.length;P++)h.push(l[p])}return h},t.V=function(i){gn(this);let l=[];if(typeof i=="string")Ll(this,i)&&(l=l.concat(this.g.get(hr(this,i))));else{i=Array.from(this.g.values());for(let h=0;h<i.length;h++)l=l.concat(i[h])}return l},t.set=function(i,l){return gn(this),this.i=null,i=hr(this,i),Ll(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},t.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function Ml(i,l,h){xl(i,l),0<h.length&&(i.i=null,i.g.set(hr(i,l),O(h)),i.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const P=encodeURIComponent(String(p)),W=this.V(p);for(p=0;p<W.length;p++){var k=P;W[p]!==""&&(k+="="+encodeURIComponent(String(W[p]))),i.push(k)}}return this.i=i.join("&")};function hr(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function yp(i,l){l&&!i.j&&(gn(i),i.i=null,i.g.forEach(function(h,p){var k=p.toLowerCase();p!=k&&(xl(this,p),Ml(this,k,h))},i)),i.j=l}function wp(i,l){const h=new $r;if(c.Image){const p=new Image;p.onload=S(mn,h,"TestLoadImage: loaded",!0,l,p),p.onerror=S(mn,h,"TestLoadImage: error",!1,l,p),p.onabort=S(mn,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=S(mn,h,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=i}else l(!1)}function bp(i,l){const h=new $r,p=new AbortController,k=setTimeout(()=>{p.abort(),mn(h,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:p.signal}).then(P=>{clearTimeout(k),P.ok?mn(h,"TestPingServer: ok",!0,l):mn(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(k),mn(h,"TestPingServer: error",!1,l)})}function mn(i,l,h,p,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),p(h)}catch{}}function Ip(){this.g=new Ms}function Ep(i,l,h){const p=h||"";try{Pl(i,function(k,P){let W=k;f(k)&&(W=Be(k)),l.push(p+P+"="+encodeURIComponent(W))})}catch(k){throw l.push(p+"type="+encodeURIComponent("_badmap")),k}}function Bs(i){this.l=i.Ub||null,this.j=i.eb||!1}R(Bs,eo),Bs.prototype.g=function(){return new Hs(this.l,this.j)},Bs.prototype.i=function(i){return function(){return i}}({});function Hs(i,l){Z.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Hs,Z),t=Hs.prototype,t.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,zr(this)},t.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gr(this)),this.readyState=0},t.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,zr(this)),this.g&&(this.readyState=3,zr(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ul(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ul(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}t.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?Gr(this):zr(this),this.readyState==3&&Ul(this)}},t.Ra=function(i){this.g&&(this.response=this.responseText=i,Gr(this))},t.Qa=function(i){this.g&&(this.response=i,Gr(this))},t.ga=function(){this.g&&Gr(this)};function Gr(i){i.readyState=4,i.l=null,i.j=null,i.v=null,zr(i)}t.setRequestHeader=function(i,l){this.u.append(i,l)},t.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=l.next();return i.join(`\r
`)};function zr(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Hs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Fl(i){let l="";return re(i,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function fo(i,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Fl(h),typeof i=="string"?h!=null&&encodeURIComponent(String(h)):Ce(i,l,h))}function De(i){Z.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(De,Z);var Tp=/^https?$/i,Sp=["POST","PUT"];t=De.prototype,t.Ha=function(i){this.J=i},t.ea=function(i,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():io.g(),this.v=this.o?gl(this.o):gl(io),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(P){jl(this,P);return}if(i=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var k in p)h.set(k,p[k]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())h.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),k=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Sp,l,void 0))||p||k||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,W]of h)this.g.setRequestHeader(P,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bl(this),this.u=!0,this.g.send(i),this.u=!1}catch(P){jl(this,P)}};function jl(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,$l(i),Ws(i)}function $l(i){i.A||(i.A=!0,ae(i,"complete"),ae(i,"error"))}t.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,ae(this,"complete"),ae(this,"abort"),Ws(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ws(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Vl(this):this.bb())},t.bb=function(){Vl(this)};function Vl(i){if(i.h&&typeof a<"u"&&(!i.v[1]||qt(i)!=4||i.Z()!=2)){if(i.u&&qt(i)==4)$e(i.Ea,0,i);else if(ae(i,"readystatechange"),qt(i)==4){i.h=!1;try{const W=i.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=W===0){var k=String(i.D).match(Ol)[1]||null;!k&&c.self&&c.self.location&&(k=c.self.location.protocol.slice(0,-1)),p=!Tp.test(k?k.toLowerCase():"")}h=p}if(h)ae(i,"complete"),ae(i,"success");else{i.m=6;try{var P=2<qt(i)?i.g.statusText:""}catch{P=""}i.l=P+" ["+i.Z()+"]",$l(i)}}finally{Ws(i)}}}}function Ws(i,l){if(i.g){Bl(i);const h=i.g,p=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||ae(i,"ready");try{h.onreadystatechange=p}catch{}}}function Bl(i){i.I&&(c.clearTimeout(i.I),i.I=null)}t.isActive=function(){return!!this.g};function qt(i){return i.g?i.g.readyState:0}t.Z=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),pt(l)}};function Hl(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Ap(i){const l={};i=(i.g&&2<=qt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<i.length;p++){if(j(i[p]))continue;var h=T(i[p]);const k=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=l[k]||[];l[k]=P,P.push(h)}A(l,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qr(i,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||l}function Wl(i){this.Aa=0,this.i=[],this.j=new $r,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qr("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qr("baseRetryDelayMs",5e3,i),this.cb=qr("retryDelaySeedMs",1e4,i),this.Wa=qr("forwardChannelMaxRetries",2,i),this.wa=qr("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Sl(i&&i.concurrentRequestLimit),this.Da=new Ip,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Wl.prototype,t.la=8,t.G=1,t.connect=function(i,l,h,p){Qe(0),this.W=i,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Zl(this,null,this.W),zs(this)};function po(i){if(Gl(i),i.G==3){var l=i.U++,h=zt(i.I);if(Ce(h,"SID",i.K),Ce(h,"RID",l),Ce(h,"TYPE","terminate"),Kr(i,h),l=new pn(i,i.j,l),l.L=2,l.v=Vs(zt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=ec(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Fs(l)}Ql(i)}function Gs(i){i.g&&(mo(i),i.g.cancel(),i.g=null)}function Gl(i){Gs(i),i.u&&(c.clearTimeout(i.u),i.u=null),qs(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function zs(i){if(!Al(i.h)&&!i.s){i.s=!0;var l=i.Ga;he||bt(),ue||(he(),ue=!0),lt.add(l,i),i.B=0}}function Cp(i,l){return Cl(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=jr(m(i.Ga,i,l),Yl(i,i.B)),i.B++,!0)}t.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const k=new pn(this,this.j,i);let P=this.o;if(this.S&&(P?(P=_(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(k.H=P,P=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=ql(this,k,l),h=zt(this.I),Ce(h,"RID",i),Ce(h,"CVER",22),this.D&&Ce(h,"X-HTTP-Session-Id",this.D),Kr(this,h),P&&(this.O?l="headers="+encodeURIComponent(String(Fl(P)))+"&"+l:this.m&&fo(h,this.m,P)),ho(this.h,k),this.Ua&&Ce(h,"TYPE","init"),this.P?(Ce(h,"$req",l),Ce(h,"SID","null"),k.T=!0,ao(k,h,null)):ao(k,h,l),this.G=2}}else this.G==3&&(i?zl(this,i):this.i.length==0||Al(this.h)||zl(this))};function zl(i,l){var h;l?h=l.l:h=i.U++;const p=zt(i.I);Ce(p,"SID",i.K),Ce(p,"RID",h),Ce(p,"AID",i.T),Kr(i,p),i.m&&i.o&&fo(p,i.m,i.o),h=new pn(i,i.j,h,i.B+1),i.m===null&&(h.H=i.o),l&&(i.i=l.D.concat(i.i)),l=ql(i,h,1e3),h.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ho(i.h,h),ao(h,p,l)}function Kr(i,l){i.H&&re(i.H,function(h,p){Ce(l,p,h)}),i.l&&Pl({},function(h,p){Ce(l,p,h)})}function ql(i,l,h){h=Math.min(i.i.length,h);var p=i.l?m(i.l.Na,i.l,i):null;e:{var k=i.i;let P=-1;for(;;){const W=["count="+h];P==-1?0<h?(P=k[0].g,W.push("ofs="+P)):P=0:W.push("ofs="+P);let Ee=!0;for(let He=0;He<h;He++){let ve=k[He].g;const Ke=k[He].map;if(ve-=P,0>ve)P=Math.max(0,k[He].g-100),Ee=!1;else try{Ep(Ke,W,"req"+ve+"_")}catch{p&&p(Ke)}}if(Ee){p=W.join("&");break e}}}return i=i.i.splice(0,h),l.D=i,p}function Kl(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;he||bt(),ue||(he(),ue=!0),lt.add(l,i),i.v=0}}function go(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=jr(m(i.Fa,i),Yl(i,i.v)),i.v++,!0)}t.Fa=function(){if(this.u=null,Jl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=jr(m(this.ab,this),i)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Qe(10),Gs(this),Jl(this))};function mo(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Jl(i){i.g=new pn(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=zt(i.qa);Ce(l,"RID","rpc"),Ce(l,"SID",i.K),Ce(l,"AID",i.T),Ce(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&Ce(l,"TO",i.ja),Ce(l,"TYPE","xmlhttp"),Kr(i,l),i.m&&i.o&&fo(l,i.m,i.o),i.L&&(i.g.I=i.L);var h=i.g;i=i.ia,h.L=1,h.v=Vs(zt(l)),h.m=null,h.P=!0,Il(h,i)}t.Za=function(){this.C!=null&&(this.C=null,Gs(this),go(this),Qe(19))};function qs(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Xl(i,l){var h=null;if(i.g==l){qs(i),mo(i),i.g=null;var p=2}else if(uo(i.h,l))h=l.D,kl(i.h,l),p=1;else return;if(i.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var k=i.B;p=ro(),ae(p,new yl(p,h)),zs(i)}else Kl(i);else if(k=l.s,k==3||k==0&&0<l.X||!(p==1&&Cp(i,l)||p==2&&go(i)))switch(h&&0<h.length&&(l=i.h,l.i=l.i.concat(h)),k){case 1:jn(i,5);break;case 4:jn(i,10);break;case 3:jn(i,6);break;default:jn(i,2)}}}function Yl(i,l){let h=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(h*=2),h*l}function jn(i,l){if(i.j.info("Error code "+l),l==2){var h=m(i.fb,i),p=i.Xa;const k=!p;p=new Fn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||js(p,"https"),Vs(p),k?wp(p.toString(),h):bp(p.toString(),h)}else Qe(2);i.G=0,i.l&&i.l.sa(l),Ql(i),Gl(i)}t.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Qe(2)):(this.j.info("Failed to ping google.com"),Qe(1))};function Ql(i){if(i.G=0,i.ka=[],i.l){const l=Rl(i.h);(l.length!=0||i.i.length!=0)&&(V(i.ka,l),V(i.ka,i.i),i.h.i.length=0,O(i.i),i.i.length=0),i.l.ra()}}function Zl(i,l,h){var p=h instanceof Fn?zt(h):new Fn(h);if(p.g!="")l&&(p.g=l+"."+p.g),$s(p,p.s);else{var k=c.location;p=k.protocol,l=l?l+"."+k.hostname:k.hostname,k=+k.port;var P=new Fn(null);p&&js(P,p),l&&(P.g=l),k&&$s(P,k),h&&(P.l=h),p=P}return h=i.D,l=i.ya,h&&l&&Ce(p,h,l),Ce(p,"VER",i.la),Kr(i,p),p}function ec(i,l,h){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new De(new Bs({eb:h})):new De(i.pa),l.Ha(i.J),l}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function tc(){}t=tc.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function gt(i,l){Z.call(this),this.g=new Wl(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!j(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!j(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new fr(this)}R(gt,Z),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){po(this.g)},gt.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.u&&(h={},h.__data__=Be(i),i=h);l.i.push(new up(l.Ya++,i)),l.G==3&&zs(l)},gt.prototype.N=function(){this.g.l=null,delete this.j,po(this.g),delete this.g,gt.aa.N.call(this)};function nc(i){to.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const h in l){i=h;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}R(nc,to);function rc(){no.call(this),this.status=1}R(rc,no);function fr(i){this.g=i}R(fr,tc),fr.prototype.ua=function(){ae(this.g,"a")},fr.prototype.ta=function(i){ae(this.g,new nc(i))},fr.prototype.sa=function(i){ae(this.g,new rc)},fr.prototype.ra=function(){ae(this.g,"b")},gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,so.NO_ERROR=0,so.TIMEOUT=8,so.HTTP_ERROR=6,lp.COMPLETE="complete",rp.EventType=Ur,Ur.OPEN="a",Ur.CLOSE="b",Ur.ERROR="c",Ur.MESSAGE="d",Z.prototype.listen=Z.prototype.K,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha}).apply(typeof ei<"u"?ei:typeof self<"u"?self:typeof window<"u"?window:{});const Hu="@firebase/firestore",Wu="4.8.0";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let xs="11.10.0";/**
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
 */const Or=new Ki("@firebase/firestore");function At(t,...e){if(Or.logLevel<=be.DEBUG){const n=e.map(ul);Or.debug(`Firestore (${xs}): ${t}`,...n)}}function Kd(t,...e){if(Or.logLevel<=be.ERROR){const n=e.map(ul);Or.error(`Firestore (${xs}): ${t}`,...n)}}function c1(t,...e){if(Or.logLevel<=be.WARN){const n=e.map(ul);Or.warn(`Firestore (${xs}): ${t}`,...n)}}function ul(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function As(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Jd(t,r,n)}function Jd(t,e,n){let r=`FIRESTORE (${xs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Kd(r),new Error(r)}function hs(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Jd(e,s,r)}/**
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
 */const pe={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class ge extends Dt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Xd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class u1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class h1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class f1{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){hs(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new fs;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new fs,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{At("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(At("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new fs)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(At("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(hs(typeof r.accessToken=="string",31837,{l:r}),new Xd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return hs(e===null||typeof e=="string",2055,{h:e}),new et(e)}}class d1{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class p1{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new d1(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class g1{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Tt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){hs(this.o===void 0,3512);const r=o=>{o.error!=null&&At("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,At("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const s=o=>{At("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):At("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Gu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(hs(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Gu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function v1(){return new TextEncoder}/**
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
 */class _1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=m1(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<n&&(r+=e.charAt(s[o]%62))}return r}}function Rt(t,e){return t<e?-1:t>e?1:0}function y1(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Rt(r,s);{const o=v1(),a=w1(o.encode(zu(t,n)),o.encode(zu(e,n)));return a!==0?a:Rt(r,s)}}n+=r>65535?2:1}return Rt(t.length,e.length)}function zu(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function w1(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Rt(t[n],e[n]);return Rt(t.length,e.length)}/**
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
 */const qu="__name__";class Ut{constructor(e,n,r){n===void 0?n=0:n>e.length&&As(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&As(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ut.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ut?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const o=Ut.compareSegments(e.get(s),n.get(s));if(o!==0)return o}return Rt(e.length,n.length)}static compareSegments(e,n){const r=Ut.isNumericId(e),s=Ut.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Ut.extractNumericId(e).compare(Ut.extractNumericId(n)):y1(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return cl.fromString(e.substring(4,e.length-2))}}class Et extends Ut{construct(e,n,r){return new Et(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ge(pe.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Et(n)}static emptyPath(){return new Et([])}}const b1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qn extends Ut{construct(e,n,r){return new qn(e,n,r)}static isValidIdentifier(e){return b1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qu}static keyField(){return new qn([qu])}static fromServerFormat(e){const n=[];let r="",s=0;const o=()=>{if(r.length===0)throw new ge(pe.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ge(pe.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ge(pe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new ge(pe.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qn(n)}static emptyPath(){return new qn([])}}/**
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
 */class Xn{constructor(e){this.path=e}static fromPath(e){return new Xn(Et.fromString(e))}static fromName(e){return new Xn(Et.fromString(e).popFirst(5))}static empty(){return new Xn(Et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Et.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Xn(new Et(e.slice()))}}function I1(t,e,n,r){if(e===!0&&r===!0)throw new ge(pe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function E1(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function T1(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":As(12329,{type:typeof t})}function S1(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ge(pe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=T1(t);throw new ge(pe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Me(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ls(t,e){if(!E1(t))throw new ge(pe.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){n=`Expected '${r}' field to equal '${o.value}'`;break}}if(n)throw new ge(pe.INVALID_ARGUMENT,n);return!0}/**
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
 */const Ku=-62135596800,Ju=1e6;class jt{static now(){return jt.fromMillis(Date.now())}static fromDate(e){return jt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Ju);return new jt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ge(pe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ge(pe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ku)throw new ge(pe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ge(pe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ju}_compareTo(e){return this.seconds===e.seconds?Rt(this.nanoseconds,e.nanoseconds):Rt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:jt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ls(e,jt._jsonSchema))return new jt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ku;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}jt._jsonSchemaVersion="firestore/timestamp/1.0",jt._jsonSchema={type:Me("string",jt._jsonSchemaVersion),seconds:Me("number"),nanoseconds:Me("number")};function A1(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class C1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new C1("Invalid base64 string: "+o):o}}(e);return new ir(n)}static fromUint8Array(e){const n=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new ir(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Rt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ir.EMPTY_BYTE_STRING=new ir("");const va="(default)";class Ri{constructor(e,n){this.projectId=e,this.database=n||va}static empty(){return new Ri("","")}get isDefaultDatabase(){return this.database===va}isEqual(e){return e instanceof Ri&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class k1{constructor(e,n=null,r=[],s=[],o=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function R1(t){return new k1(t)}/**
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
 */var Xu,de;(de=Xu||(Xu={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new cl([4294967295,4294967295],0);/**
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
 */const P1=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=1048576;function Ho(){return typeof document<"u"?document:null}/**
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
 */class N1{constructor(e,n,r=1e3,s=1.5,o=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&At("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */class hl{constructor(e,n,r,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new fs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,o){const a=Date.now()+r,c=new hl(e,n,a,s,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ge(pe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Yu,Qu;(Qu=Yu||(Yu={})).Fa="default",Qu.Cache="cache";/**
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
 */function D1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="firestore.googleapis.com",eh=!0;class th{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ge(pe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Yd,this.ssl=eh}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:eh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=P1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<O1)throw new ge(pe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}I1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=D1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new ge(pe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new ge(pe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new ge(pe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qd{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new th({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ge(pe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ge(pe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new th(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new u1;switch(r.type){case"firstParty":return new p1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ge(pe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Zu.get(n);r&&(At("ComponentProvider","Removing Datastore"),Zu.delete(n),r.terminate())}(this),Promise.resolve()}}function x1(t,e,n,r={}){var s;t=S1(t,Qd);const o=Rs(e),a=t._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;o&&(jf(`https://${u}`),$f("Firestore",!0)),a.host!==Yd&&a.host!==u&&c1("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:u,ssl:o,emulatorOptions:r});if(!xn(f,c)&&(t._setSettings(f),r.mockUserToken)){let d,g;if(typeof r.mockUserToken=="string")d=r.mockUserToken,g=et.MOCK_USER;else{d=m_(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new ge(pe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new et(m)}t._authCredentials=new h1(new Xd(d,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fl(this.firestore,e,this._query)}}class $t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}toJSON(){return{type:$t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ls(n,$t._jsonSchema))return new $t(e,r||null,new Xn(Et.fromString(n.referencePath)))}}$t._jsonSchemaVersion="firestore/documentReference/1.0",$t._jsonSchema={type:Me("string",$t._jsonSchemaVersion),referencePath:Me("string")};class dl extends fl{constructor(e,n,r){super(e,n,R1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new Xn(e))}withConverter(e){return new dl(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="AsyncQueue";class rh{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new N1(this,"async_queue_retry"),this.oc=()=>{const r=Ho();r&&At(nh,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Ho();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Ho();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new fs;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!A1(e))throw e;At(nh,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Kd("INTERNAL UNHANDLED ERROR: ",sh(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=hl.createAndSchedule(this,e,n,r,o=>this.lc(o));return this.ec.push(s),s}ac(){this.tc&&As(47125,{hc:sh(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function sh(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class L1 extends Qd{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new rh,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new rh(e),this._firestoreClient=void 0,await e}}}function M1(t,e){const n=typeof t=="object"?t:za(),r=typeof t=="string"?t:va,s=lr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=p_("firestore");o&&x1(s,...o)}return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nn(ir.fromBase64String(e))}catch(n){throw new ge(pe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new nn(ir.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:nn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ls(e,nn._jsonSchema))return nn.fromBase64String(e.bytes)}}nn._jsonSchemaVersion="firestore/bytes/1.0",nn._jsonSchema={type:Me("string",nn._jsonSchemaVersion),bytes:Me("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ge(pe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class er{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ge(pe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ge(pe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Rt(this._lat,e._lat)||Rt(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:er._jsonSchemaVersion}}static fromJSON(e){if(Ls(e,er._jsonSchema))return new er(e.latitude,e.longitude)}}er._jsonSchemaVersion="firestore/geoPoint/1.0",er._jsonSchema={type:Me("string",er._jsonSchemaVersion),latitude:Me("number"),longitude:Me("number")};/**
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
 */class tr{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:tr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ls(e,tr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new tr(e.vectorValues);throw new ge(pe.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}tr._jsonSchemaVersion="firestore/vectorValue/1.0",tr._jsonSchema={type:Me("string",tr._jsonSchemaVersion),vectorValues:Me("object")};const U1=new RegExp("[~\\*/\\[\\]]");function F1(t,e,n){if(e.search(U1)>=0)throw ih(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Zd(...e.split("."))._internalPath}catch{throw ih(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function ih(t,e,n,r,s){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new ge(pe.INVALID_ARGUMENT,o+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,n,r,s,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new j1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class j1 extends ep{data(){return super.data()}}function tp(t,e){return typeof e=="string"?F1(t,e):e instanceof Zd?e._internalPath:e._delegate._internalPath}class ti{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ar extends ep{constructor(e,n,r,s,o,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new hi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(tp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(pe.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ar._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ar._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ar._jsonSchema={type:Me("string",Ar._jsonSchemaVersion),bundleSource:Me("string","DocumentSnapshot"),bundleName:Me("string"),bundle:Me("string")};class hi extends Ar{data(e={}){return super.data(e)}}class ds{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ti(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new hi(this._firestore,this._userDataWriter,r.key,r,new ti(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ge(pe.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new hi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ti(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const u=new hi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ti(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:$1(c.type),doc:u,oldIndex:f,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(pe.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ds._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_1.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(n.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return As(61501,{type:t})}}ds._jsonSchemaVersion="firestore/querySnapshot/1.0",ds._jsonSchema={type:Me("string",ds._jsonSchemaVersion),bundleSource:Me("string","QuerySnapshot"),bundleName:Me("string"),bundle:Me("string")};(function(e,n=!0){(function(s){xs=s})(xr),Ht(new Nt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new L1(new f1(r.getProvider("auth-internal")),new g1(a,r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new ge(pe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ri(f.options.projectId,d)}(a,s),a);return o=Object.assign({useFetchStreams:n},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),yt(Hu,Wu,e),yt(Hu,Wu,"esm2017")})();const V1={apiKey:"AIzaSyBzR2w75nixO9H8zjUbxVajKx0npksSGrg",authDomain:"norsk-cafe.firebaseapp.com",projectId:"norsk-cafe",storageBucket:"norsk-cafe.firebasestorage.app",messagingSenderId:"123232580709",appId:"1:123232580709:web:c6e6dfed117db9d3b0028c",measurementId:void 0},pl=qf(V1);iw(pl);const or=a1(pl);M1(pl);const B1="/assets/coffee-cKRUD7yK.svg",_a=ke([]),Wo=ke(0),oh=ke(0),H1=Fe(()=>_a.value.filter(t=>t.correct).length);function np(){return{reviewedWords:_a,reviewedCount:oh,correctCount:H1,totalCount:Wo,setTotalCount:t=>Wo.value=t,resetStats:()=>{_a.value=[],oh.value=0,Wo.value=0}}}const ya="/assets/panda256-BLVgM0lT.png",Gt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},W1=["src"],G1={key:0,class:"profile-menu"},z1={class:"profile-header"},q1=["src"],K1={class:"profile-info"},J1={class:"profile-name"},X1={__name:"UserMenu",props:{user:Object},setup(t){const e=t,n=Dr(),r=ke(!1),s=ke(null);Nr(()=>{document.addEventListener("click",a)}),Ma(()=>{document.removeEventListener("click",a)});function o(){r.value=!r.value}function a(u){s.value&&!s.value.contains(u.target)&&(r.value=!1)}function c(){or.signOut(),n.push("/login"),r.value=!1}return(u,f)=>(le(),ce("div",{class:"profile-menu-wrapper",ref_key:"menuRef",ref:s},[N("img",{src:e.user.photoURL||Te(ya),alt:"User Profile",class:"user-icon",onClick:o},null,8,W1),Le(yf,{name:"fade-slide"},{default:Fi(()=>[r.value?(le(),ce("div",G1,[N("div",z1,[N("img",{src:e.user.photoURL||Te(ya),alt:"Large profile",class:"profile-large"},null,8,q1),N("div",K1,[N("div",J1,ee(e.user.displayName||e.user.email),1),f[1]||(f[1]=N("div",{class:"profile-level"},"Level 18",-1))])]),f[2]||(f[2]=N("hr",{class:"profile-divider"},null,-1)),N("button",{class:"menu-item",onClick:f[0]||(f[0]=d=>Te(n).push("/account"))},"Konto Innstillinger"),N("button",{class:"menu-item",onClick:c},"Logg ut")])):en("",!0)]),_:1})],512))}},Y1=Gt(X1,[["__scopeId","data-v-45a4e819"]]),Q1={class:"header"},Z1={class:"header-left"},eI=["src"],tI={key:0,class:"review-stats"},nI={class:"accuracy"},rI={key:1},sI={class:"header-user"},iI={__name:"Header",setup(t){const{reviewedCount:e,correctCount:n,totalCount:r,reviewedWords:s}=np(),o=Dr(),a=i_(),c=ke(null),u=Fe(()=>a.name==="review"),f=Fe(()=>!n.value||!e.value||e.value===0?100:Math.round(n.value/s.value.length*100));Nr(()=>{c.value=or.currentUser,or.onAuthStateChanged(m=>{c.value=m})});function d(){o.push("/login")}function g(){o.push("/dashboard")}return(m,S)=>(le(),ce("header",Q1,[N("div",Z1,[N("button",{class:"header-title-button",onClick:g},[S[0]||(S[0]=N("span",{class:"header-title-text"},"Norsk",-1)),N("img",{src:Te(B1),alt:"Logo",class:"header-logo"},null,8,eI),S[1]||(S[1]=N("span",{class:"header-title-text"},"Cafe",-1))])]),u.value?(le(),ce("div",tI,[N("span",null,ee(Te(e))+" / "+ee(Te(r)/2)+" ord",1),N("span",nI,ee(f.value)+"% riktige",1)])):(le(),ce("div",rI,[N("div",sI,[c.value?(le(),ja(Y1,{key:1,user:c.value},null,8,["user"])):(le(),ce("button",{key:0,class:"login-button",onClick:d}," Login "))])]))]))}},oI=Gt(iI,[["__scopeId","data-v-c035fc0b"]]),aI="data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%23fff'/%3e%3c/svg%3e",lI={class:"footer"},cI={class:"footer-start"},uI={class:"footer-end"},hI={href:"https://github.com/fredrikofstad/norskcafe",target:"_blank",rel:"noopener noreferrer",class:"github-link"},fI=["src"],dI={__name:"Footer",setup(t){return(e,n)=>{const r=Kh("router-link");return le(),ce("footer",lI,[N("div",cI,[n[1]||(n[1]=N("span",{class:"copyright"},"© 2025 Fredrik Ofstad",-1)),Le(r,{to:"/privacy",class:"privacy-link"},{default:Fi(()=>n[0]||(n[0]=[kn("Privacy Policy")])),_:1,__:[0]})]),N("div",uI,[N("a",hI,[N("img",{src:Te(aI),alt:"GitHub",class:"github-icon"},null,8,fI)])])])}}},pI=Gt(dI,[["__scopeId","data-v-b36a3877"]]),gI={class:"page"},mI={class:"main-content"},vI={__name:"App",setup(t){return(e,n)=>{const r=Kh("router-view");return le(),ce("div",gI,[Le(oI),N("main",mI,[Le(r)]),Le(pI)])}}},_I={class:"home-page"},yI={__name:"Home",setup(t){const e=Dr();function n(){or.currentUser?e.push("/dashboard"):e.push("/login")}return(r,s)=>(le(),ce("div",_I,[N("main",{class:"welcome"},[s[0]||(s[0]=N("div",{class:"welcome"},null,-1)),s[1]||(s[1]=N("h1",null,"Velkommen!",-1)),s[2]||(s[2]=N("p",null,"Her på Norsk Cafe skal vi lære norsk på en morsom og effektiv måte!",-1)),N("button",{class:"start-button",onClick:n}," La oss komme i gang! ")])]))}},wI=Gt(yI,[["__scopeId","data-v-ac2fe9f3"]]),bI={class:"login-page"},II={class:"login-content"},EI={class:"login-inner"},TI={class:"gsi-material-button"},SI={class:"gsi-material-button-content-wrapper"},AI={class:"gsi-material-button-icon"},CI={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",style:{width:"24px",height:"24px"}},kI={__name:"Login",setup(t){const e=Dr();async function n(){const r=new tn;try{await mb(or,r),e.push("/dashboard")}catch(s){console.error("Google sign-in failed",s),alert("Google sign-in failed: "+s.message)}}return(r,s)=>(le(),ce("div",bI,[N("main",II,[N("div",EI,[s[2]||(s[2]=N("h2",{class:"login-title"},"Velkommen tilbake!",-1)),s[3]||(s[3]=N("p",{class:"login-subtitle"}," Logg inn med Google for å fortsette å lære norsk. ",-1)),N("div",{class:"google-wrapper",onClick:n},[N("button",TI,[N("div",SI,[N("div",AI,[(le(),ce("svg",CI,s[0]||(s[0]=[um(`<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0\r
                    14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-e7300c23></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58\r
                    2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-e7300c23></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92\r
                    16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-e7300c23></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15\r
                    1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98\r
                    6.19C6.51 42.62 14.62 48 24 48z" data-v-e7300c23></path><path fill="none" d="M0 0h48v48H0z" data-v-e7300c23></path>`,5)])))]),s[1]||(s[1]=N("span",{class:"gsi-material-button-contents"},"Fortsett med Google",-1))])])])])])]))}},RI=Gt(kI,[["__scopeId","data-v-e7300c23"]]),PI="/assets/read-lc7uTVG8.png",OI="/assets/review-BO4Lya47.png",NI="/assets/listen-BRpUMTBZ.png",DI={class:"dashboard-page"},xI={class:"dashboard-content"},LI={class:"dashboard-welcome"},MI={class:"cards-container"},UI={__name:"Dashboard",setup(t){const e=Dr(),n=ke("");Nr(()=>{Xw(or,s=>{if(s){const o=s.displayName||s.email||"Bruker";n.value=o.split(" ")[0]}else e.push("/login")})});function r(){e.push("/review")}return(s,o)=>(le(),ce("div",DI,[N("main",xI,[N("div",LI,[N("h2",null,"Hei "+ee(n.value)+"!",1),o[2]||(o[2]=N("p",null,"Velkommen til ditt dashboard. Ta en titt rundt!",-1))]),N("div",MI,[N("div",{class:"dashboard-card",onClick:o[0]||(o[0]=(...a)=>s.goToLearn&&s.goToLearn(...a))},o[3]||(o[3]=[N("div",{class:"card-text"},[N("h3",null,"Lær"),N("p",null,"Start en ny leksjon og lær nye ord.")],-1),N("img",{src:PI,alt:"Lær",class:"card-icon"},null,-1)])),N("div",{class:"dashboard-card",onClick:r},o[4]||(o[4]=[N("div",{class:"card-text"},[N("h3",null,"Repeter"),N("p",null,"Gå gjennom ordene du allerede kan.")],-1),N("img",{src:OI,alt:"Repeter",class:"card-icon"},null,-1)])),N("div",{class:"dashboard-card",onClick:o[1]||(o[1]=(...a)=>s.goToListen&&s.goToListen(...a))},o[5]||(o[5]=[N("div",{class:"card-text"},[N("h3",null,"Lytt"),N("p",null,"kommer snart.")],-1),N("img",{src:NI,alt:"Lytt",class:"card-icon"},null,-1)]))])])]))}},FI=Gt(UI,[["__scopeId","data-v-1dd9849e"]]),jI={title:"Personvernerklæring",updated:"Sist oppdatert: 6. juli 2025",who:{title:"Hvem er vi",text:"Norsk Cafe er utviklet og driftet av Fredrik Ofstad, som er behandlingsansvarlig for dine personopplysninger."},what:{title:"Hvilke data samles inn?",text:"Når du logger inn med Google, mottar vi følgende informasjon:",items:["Navn","E-postadresse","Profilbilde"],note:"Denne informasjonen brukes kun til å tilpasse din opplevelse i appen. Vi lagrer ikke passord."},where:{title:"Hvor lagres dataene?",text:"Dataene lagres i Google Firebase Authentication og Firestore-databasen. Selve appen hostes på GitHub Pages."},cookies:{title:"Informasjonskapsler og sporing",text:"Norsk Cafe bruker for øyeblikket ikke informasjonskapsler eller analyseverktøy. Google Analytics kan vurderes senere, men vil i så fall kreve samtykke."},sharing:{title:"Deling av data",text:"Vi deler ikke dine personopplysninger med tredjeparter, med unntak av bruk av Google Firebase som databehandler."},rights:{title:"Dine rettigheter",items:["Innsyn i egne personopplysninger","Sletting av data","Klage til Datatilsynet"]},deletion:{title:"Slette konto",text:"Du kan slette kontoen din direkte i appen. Dette sletter brukeren og tilhørende data fra Firebase."}},$I={title:"Privacy Policy",updated:"Last updated: 6 July 2025",who:{title:"Who we are",text:"Norsk Cafe is developed and operated by Fredrik Ofstad, who is the data controller responsible for your personal information."},what:{title:"What data do we collect?",text:"When you sign in with Google, we receive:",items:["Your name","Your email address","Your profile picture"],note:"This is used only to personalize your experience. We do not collect or store any passwords."},where:{title:"Where is the data stored?",text:"Your data is stored in Google Firebase Authentication and Firestore. The app is hosted on GitHub Pages."},cookies:{title:"Cookies and tracking",text:"Norsk Cafe does not currently use cookies or tracking tools. Google Analytics may be added in the future, but only with explicit consent."},sharing:{title:"Data sharing",text:"We do not share your data with third parties, except for Google Firebase, which acts as a data processor."},rights:{title:"Your rights",items:["Access your personal data","Request deletion","File a complaint with your data protection authority"]},deletion:{title:"Account deletion",text:"You can delete your account from the settings page. This will remove your user and data from Firebase."}},VI={no:jI,en:$I},BI={class:"privacy-page"},HI={class:"privacy-content"},WI={class:"title-bar"},GI={__name:"Privacy",setup(t){const e=ke("no");function n(){e.value=e.value==="no"?"en":"no"}const r=Fe(()=>VI[e.value]);return(s,o)=>(le(),ce("div",BI,[N("div",HI,[N("div",WI,[N("h1",null,ee(r.value.title),1),N("button",{class:"lang-switch",onClick:n},ee(e.value==="no"?"Switch to English":"Bytt til norsk"),1)]),N("p",null,[N("strong",null,ee(r.value.updated),1)]),N("h2",null,ee(r.value.who.title),1),N("p",null,ee(r.value.who.text),1),N("h2",null,ee(r.value.what.title),1),N("p",null,ee(r.value.what.text),1),N("ul",null,[(le(!0),ce(Ge,null,Qo(r.value.what.items,a=>(le(),ce("li",{key:a},ee(a),1))),128))]),N("p",null,ee(r.value.what.note),1),N("h2",null,ee(r.value.where.title),1),N("p",null,ee(r.value.where.text),1),N("h2",null,ee(r.value.cookies.title),1),N("p",null,ee(r.value.cookies.text),1),N("h2",null,ee(r.value.sharing.title),1),N("p",null,ee(r.value.sharing.text),1),N("h2",null,ee(r.value.rights.title),1),N("ul",null,[(le(!0),ce(Ge,null,Qo(r.value.rights.items,a=>(le(),ce("li",{key:a},ee(a),1))),128))]),N("h2",null,ee(r.value.deletion.title),1),N("p",null,ee(r.value.deletion.text),1)])]))}},zI=Gt(GI,[["__scopeId","data-v-117f989b"]]),qI={class:"account-settings"},KI={key:0,class:"user-info"},JI=["src"],XI={__name:"Account",setup(t){const e=Dr(),n=ke(or.currentUser);async function r(){if(confirm("Are you sure you want to delete your account? This action cannot be undone."))try{await n.value.delete(),alert("Your account has been deleted."),e.push("/login")}catch(o){o.code==="auth/requires-recent-login"?(alert("Please sign in again to delete your account."),e.push("/login")):(console.error("Account deletion failed:",o),alert("Something went wrong. Please try again."))}}return(s,o)=>(le(),ce("div",qI,[o[2]||(o[2]=N("h1",null,"Account Settings",-1)),n.value?(le(),ce("div",KI,[N("img",{src:n.value?.photoURL||Te(ya),alt:"Profile",class:"profile-pic"},null,8,JI),N("p",null,[o[0]||(o[0]=N("strong",null,"Name:",-1)),kn(" "+ee(n.value.displayName),1)]),N("p",null,[o[1]||(o[1]=N("strong",null,"Email:",-1)),kn(" "+ee(n.value.email),1)])])):en("",!0),o[3]||(o[3]=N("hr",null,null,-1)),N("button",{class:"delete-button",onClick:r},"Delete Account")]))}},YI=Gt(XI,[["__scopeId","data-v-ca588be0"]]),ah=Symbol.for("constructDateFrom");function QI(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&ah in t?t[ah](e):t instanceof Date?new t.constructor(e):new Date(e)}function wa(t,e){return QI(e||t,t)}function wn(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}function ba(t,e){const n=wa(t,e?.in);if(isNaN(+n))throw new RangeError("Invalid time value");const r=e?.format??"extended",s=e?.representation??"complete";let o="",a="";const c=r==="extended"?"-":"",u=r==="extended"?":":"";if(s!=="time"){const f=wn(n.getDate(),2),d=wn(n.getMonth()+1,2);o=`${wn(n.getFullYear(),4)}${c}${d}${c}${f}`}if(s!=="date"){const f=n.getTimezoneOffset();if(f!==0){const O=Math.abs(f),V=wn(Math.trunc(O/60),2),F=wn(O%60,2);a=`${f<0?"+":"-"}${V}:${F}`}else a="Z";const d=wn(n.getHours(),2),g=wn(n.getMinutes(),2),m=wn(n.getSeconds(),2),S=o===""?"":"T",R=[d,g,m].join(u);o=`${o}${S}${R}${a}`}return o}function ZI(t,e){return+wa(t)<+wa(e)}let Ia={"0n1":{wordId:"0n1",lastReviewed:"2025-07-10",nextReview:"2025-07-19",interval:3,easeFactor:2.5,repetitions:2},"0n2":{wordId:"0n2",lastReviewed:"2025-07-10",nextReview:"2025-07-25",interval:5,easeFactor:2.3,repetitions:3},"0n3":{wordId:"0n3",lastReviewed:"2025-07-10",nextReview:"2025-07-19",interval:3,easeFactor:2.5,repetitions:2},"0a1":{wordId:"0a1",lastReviewed:"2025-07-10",nextReview:"2025-07-19",interval:3,easeFactor:2.5,repetitions:2},"0v1":{wordId:"0v1",lastReviewed:"2025-07-01",nextReview:"2025-07-05",interval:1,easeFactor:2,repetitions:0}};function eE(t){return Object.values(Ia).filter(e=>ZI(new Date(e.nextReview),t)||e.nextReview===ba(t,{representation:"date"})).map(e=>({...e,correct:!0,pending:{toEnglish:!0,toNorwegian:!0}}))}function tE(t,e,n,r,s){const o=Ia[t],a=r[t];if(!o||!a||(a.pending[e]=!1,n||(a.correct=!1),a.pending.toEnglish||a.pending.toNorwegian))return;const c=new Date;let u=1,f=o.easeFactor,d=a.correct?o.repetitions+1:0;const g=o.repetitions;a.correct?(d===1?u=1:d===2?u=6:u=Math.round(o.interval*f),f=Math.max(1.3,f+.1)):(u=1,f=Math.max(1.3,f-.2));const m=new Date(c.getTime()+u*864e5);if(Ia[t]={wordId:t,lastReviewed:ba(c,{representation:"date"}),nextReview:ba(m,{representation:"date"}),interval:u,easeFactor:f,repetitions:d},s&&g!==d){const S=d>g;s(t,S)}}function nE(t){let e=!1;async function n(){if(e)return;e=!0;const r=t();if(!(!r||r.length===0))try{console.log("Uploading review data:",r)}catch(s){console.error("Failed to upload review data:",s)}}Jv((r,s,o)=>{n(),o()}),Nr(()=>{window.addEventListener("beforeunload",n)}),Bi(()=>{window.removeEventListener("beforeunload",n)})}function rE(t){return t.type==="noun"&&"gender"in t&&"article"in t}function sE(t){const e=[...t];for(let n=e.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[e[n],e[r]]=[e[r],e[n]]}return e}function iE(t,e){const n=[];for(const r of e){const s=t.find(a=>a.id===r.wordId);if(!s)continue;const o=["toEnglish","toNorwegian"];for(const a of o){let c="",u="",f=[];if(rE(s)){const d=`${s.gender} ${s.norwegian}`.toLowerCase(),g=`${s.article} ${s.english}`.toLowerCase();a==="toNorwegian"?(c=g,u=d,f=[d]):(c=d,u=g,f=[g,s.english.toLowerCase()])}else a==="toNorwegian"?(c=s.english.toLowerCase(),u=s.norwegian.toLowerCase(),f=[s.norwegian.toLowerCase()]):(c=s.norwegian.toLowerCase(),u=s.english.toLowerCase(),f=[s.english.toLowerCase()]);n.push({id:`${r.wordId}-${a}`,prompt:c,answer:u,direction:a,accept:f,word:s})}}return ke(sE(n))}function oE(t){const n=eE(new Date),r=ke(Object.fromEntries(n.map(F=>[F.wordId,{...F}]))),s=iE(t,n),o=ke(0),a=ke(""),c=ke(!1),{reviewedWords:u,reviewedCount:f,correctCount:d,totalCount:g,setTotalCount:m,resetStats:S}=np();S(),m(s.value.length),nE(()=>u.value);const R=Fe(()=>s.value?.[o.value]??null);function O(F,j,G){tE(F,j,G,r.value,(B,ne)=>{a.value=ne?"Level UP!":"Level Down",c.value=!0,setTimeout(()=>{c.value=!1},1500);const re=r.value[F];re&&!re.pending.toEnglish&&!re.pending.toNorwegian&&(f.value+=1)})}function V(){const F=R.value;F&&F.correct===!1&&(s.value.push(JSON.parse(JSON.stringify(F))),console.log(`Re-queued incorrect word: ${F.word.norwegian} (${F.direction})`)),o.value<s.value.length-1?o.value++:alert(`Review session completed! You reviewed ${f.value} words out of ${g.value} initial due items.`)}return{reviewWords:s,currentIndex:o,currentWord:R,levelMessage:a,showLevelAnimation:c,processSrsUpdate:O,moveToNextSrsCard:V,reviewedWords:u,reviewedCount:f,correctCount:d,totalCount:g}}function aE(t){return t.trim().toLowerCase().replace(/^(a|an)\s+/,"")}function lE(t,e,n,r){const s=ke(!1),o=ke(""),a=ke(!1);function c(){const u=t.value;if(!u)return;const f=u.accept.includes(aE(e.value));s.value=f,u.correct=f,f?o.value="✅ Riktig!":o.value=`❌ Feil. Riktig svar er "${u.answer}".`,a.value=!0,n.value.push(JSON.parse(JSON.stringify(u))),r&&r()}return{check:c,isCorrect:s,feedbackMessage:o,showFeedback:a}}const cE=[{id:"0n1",type:"noun",norwegian:"substantiv",english:"noun",gender:"et",article:"a",plural:{indefinite:"substantiv",definite:"substantivene"},level:"A1",example:["Substantiv er navn på ting."]},{id:"0n2",type:"noun",norwegian:"verb",english:"verb",gender:"et",article:"a",plural:{indefinite:"verb",definite:"verbene"},level:"A1",example:["Verb forteller hva noen gjør."]},{id:"0n3",type:"noun",norwegian:"adjektiv",english:"adjective",gender:"et",article:"an",plural:{indefinite:"adjektiv",definite:"adjektivene"},level:"A1",example:["Adjektiv beskriver substantiv."]},{id:"0n4",type:"noun",norwegian:"adverb",english:"adverb",gender:"et",article:"an",plural:{indefinite:"adverb",definite:"adverbene"},level:"A1",example:["Adverb beskriver verb, adjektiv eller andre adverb."]},{id:"0n5",type:"noun",norwegian:"pronomen",english:"pronoun",gender:"et",article:"a",plural:{indefinite:"pronomen",definite:"pronomenene"},level:"A1",example:["Pronomen brukes i stedet for substantiv."]},{id:"0n6",type:"noun",norwegian:"preposisjon",english:"preposition",gender:"en",article:"a",plural:{indefinite:"preposisjoner",definite:"preposisjonene"},level:"A1",example:["Preposisjoner viser forhold."]},{id:"0v1",type:"verb",norwegian:"å forklare",english:"to explain",level:"A1",conjugation:{present:"forklarer",past:"forklarte",perfect:"har forklart"},example:["Kan du forklare regelen en gang til?","Læreren forklarer hva ordet betyr."]},{id:"0v2",type:"verb",norwegian:"å stave",english:"to spell",level:"A1",conjugation:{present:"staver",past:"stavet",perfect:"har stavet"},example:["Hvordan staver du navnet ditt?"]},{id:"0v3",type:"verb",norwegian:"å bøye",english:"to conjugate",level:"A1",conjugation:{present:"bøyer",past:"bøyde",perfect:"har bøyd"},example:["Du må bøye verbet riktig.","Vi lærer å bøye substantiv i flertall."]},{id:"0v4",type:"verb",norwegian:"å øve",english:"to practice",level:"A1",conjugation:{present:"øver",past:"øvde",perfect:"har øvd"},example:["Jeg øver på å snakke norsk.","Du bør øve litt hver dag."]},{id:"0v5",type:"verb",norwegian:"å uttale",english:"to pronounce",level:"A1",conjugation:{present:"uttaler",past:"uttalte",perfect:"har uttalt"},example:["Hvordan uttaler man dette ordet?","Han uttaler bokstavene tydelig."]},{id:"0a1",type:"adjective",norwegian:"bestemt",english:"definite",level:"A1",forms:{masculine_feminine:"bestemt",neuter:"bestemt",plural:"bestemte",definite:"bestemte"},example:["Vi bruker bestemt form når vi kjenner til noe.","Substantivet står i bestemt form."]},{id:"0a2",type:"adjective",norwegian:"ubestemt",english:"indefinite",level:"A1",forms:{masculine_feminine:"ubestemt",neuter:"ubestemt",plural:"ubestemte",definite:"ubestemte"},example:["Ubestemt form brukes når noe nevnes for første gang.","Et ubestemt substantiv har ikke bestemt artikkel."]},{id:"0a3",type:"adjective",norwegian:"sterk",english:"strong",level:"A1",forms:{masculine_feminine:"sterk",neuter:"sterkt",plural:"sterke",definite:"sterke"},comparison:{positive:"sterk",comparative:"sterkere",superlative:"sterkest"},example:["Noen verb er sterke og bøyes uregelmessig.","Han er en sterk student."]},{id:"0a4",type:"adjective",norwegian:"svak",english:"weak",level:"A1",forms:{masculine_feminine:"svak",neuter:"svakt",plural:"svake",definite:"svake"},comparison:{positive:"svak",comparative:"svakere",superlative:"svakest"},example:["De fleste norske verb er svake.","Det var et svakt argument."]}],uE="data:image/svg+xml,%3csvg%20fill='%23000000'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%2030.727%2030.727'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0%20l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z'/%3e%3c/g%3e%3c/svg%3e",hE={key:0,class:"word-display"},fE={class:"big-word"},dE={class:"direction-hint"},pE={class:"input-group"},gE=["disabled"],mE=["disabled"],vE={class:"feedback-wrapper"},_E={key:0,class:"feedback visible"},yE={key:1,class:"feedback hidden"},wE=["src"],bE={key:1,class:"word-details"},IE={class:"word-meta"},EE={key:0},TE={key:1},SE={key:2},AE=ji({__name:"ReviewCard",props:{word:{},checked:{type:Boolean},isCorrect:{type:Boolean},feedbackMessage:{},showFeedback:{type:Boolean}},emits:["update:answer","check-answer","next-card","toggle-details"],setup(t,{emit:e}){function n(R){return R?R.charAt(0).toUpperCase()+R.slice(1):""}const r=t,s=e,o=ke(""),a=ke(null),c=ke(null),u=Fe({get:()=>o.value,set:R=>{o.value=R,s("update:answer",R)}}),f=Fe(()=>u.value.trim()===""),d=ke(!1);function g(){r.checked&&(d.value=!d.value,s("toggle-details"))}function m(R){R.preventDefault(),r.checked?s("next-card"):f.value||s("check-answer")}function S(R){R.target!==a.value&&(R.preventDefault(),g())}return Qn(()=>r.word,()=>{u.value="",d.value=!1,ms(()=>{a.value?.focus(),(!a.value||a.value.disabled||!r.word)&&c.value?.focus()})},{immediate:!0}),Qn(()=>r.checked,R=>{ms(()=>{R?c.value?.focus():a.value?.focus()})}),(R,O)=>(le(),ce("div",{class:"card",ref_key:"cardRef",ref:c,onKeyup:$c(m,["enter"]),onKeydown:$c(S,["space"]),tabindex:"0"},[r.word?(le(),ce("div",hE,[N("p",fE,ee(n(r.word.prompt)),1),N("p",dE,ee(r.word.direction==="toEnglish"?"Oversett til engelsk":"Oversett til norsk"),1)])):en("",!0),N("div",pE,[vg(N("input",{ref_key:"inputRef",ref:a,"onUpdate:modelValue":O[0]||(O[0]=V=>u.value=V),class:Cr({correct:r.checked&&r.isCorrect,incorrect:r.checked&&!r.isCorrect}),disabled:r.checked,placeholder:"Ditt svar",autocomplete:"off",autocapitalize:"off",spellcheck:"false"},null,10,gE),[[Km,u.value]]),N("button",{onClick:O[1]||(O[1]=V=>r.checked?s("next-card"):s("check-answer")),disabled:f.value&&!r.checked,class:"check-button",type:"button"},ee(r.checked?"Neste":"Sjekk"),9,mE)]),N("div",vE,[r.showFeedback?(le(),ce("div",_E,[N("p",null,ee(r.feedbackMessage),1)])):(le(),ce("div",yE,O[2]||(O[2]=[N("p",null," ",-1)])))]),N("button",{class:Cr(["details-toggle",{disabled:!r.checked,active:d.value}]),onClick:g,"aria-label":"Toggle word details"},[N("img",{src:Te(uE),alt:"Vis mer"},null,8,wE)],2),d.value&&r.word?(le(),ce("div",bE,[N("div",IE,[O[5]||(O[5]=N("h4",null,"Ordinfo:",-1)),N("p",null,[O[3]||(O[3]=N("strong",null,"Norsk: ",-1)),r.word.word.type==="noun"?(le(),ce(Ge,{key:0},[kn(ee(r.word.word.gender)+" "+ee(r.word.word.norwegian),1)],64)):(le(),ce(Ge,{key:1},[kn(ee(r.word.word.norwegian),1)],64))]),N("p",null,[O[4]||(O[4]=N("strong",null,"Engelsk: ",-1)),r.word.word.type==="noun"?(le(),ce(Ge,{key:0},[kn(ee(r.word.word.article)+" "+ee(r.word.word.english),1)],64)):(le(),ce(Ge,{key:1},[kn(ee(r.word.word.english),1)],64))])]),r.word.word.example?.length?(le(),ce("div",EE,[O[6]||(O[6]=N("h4",null,"Eksempelsetninger:",-1)),N("ul",null,[(le(!0),ce(Ge,null,Qo(r.word.word.example,(V,F)=>(le(),ce("li",{key:F},ee(V),1))),128))])])):en("",!0),r.word.word.type==="verb"&&r.word.word.conjugation?(le(),ce("div",TE,[O[7]||(O[7]=N("h4",null,"Bøying:",-1)),N("p",null,"Nåtid: "+ee(r.word.word.conjugation.present),1),N("p",null,"Fortid: "+ee(r.word.word.conjugation.past),1),N("p",null,"Perfektum: "+ee(r.word.word.conjugation.perfect),1)])):en("",!0),r.word.word.type==="adjective"&&r.word.word.comparison?(le(),ce("div",SE,[O[8]||(O[8]=N("h4",null,"Gradbøying:",-1)),N("p",null,"Positiv: "+ee(r.word.word.comparison.positive),1),N("p",null,"Komparativ: "+ee(r.word.word.comparison.comparative),1),N("p",null,"Superlativ: "+ee(r.word.word.comparison.superlative),1)])):en("",!0)])):en("",!0)],544))}}),CE=Gt(AE,[["__scopeId","data-v-b224532b"]]),kE={class:"review-session"},RE={key:1},PE={key:2,class:"review-stats"},OE=ji({__name:"Review",setup(t){const{reviewWords:e,currentWord:n,levelMessage:r,showLevelAnimation:s,processSrsUpdate:o,moveToNextSrsCard:a,reviewedWords:c,reviewedCount:u,correctCount:f,totalCount:d}=oE(cE),g=ke(""),m=ke(!1),S=ke(!1),{check:R,isCorrect:O,feedbackMessage:V,showFeedback:F}=lE(n,g,c,()=>{ms(()=>{const B=document.querySelector(".card");B&&B.querySelector("input")?.focus()})});function j(){n.value&&(R(),m.value=!0)}function G(){n.value&&(o(n.value.word.id,n.value.direction,n.value.correct),g.value="",m.value=!1,O.value=!1,F.value=!1,a())}return Qn(n,()=>{g.value="",m.value=!1,O.value=!1,F.value=!1},{immediate:!0}),(B,ne)=>(le(),ce("div",kE,[Le(yf,{name:"level-pop"},{default:Fi(()=>[Te(s)?(le(),ce("div",{key:0,class:Cr(["level-animation",Te(r).includes("UP")?"level-up":"level-down"])},ee(Te(r)),3)):en("",!0)]),_:1}),Te(n)?(le(),ja(CE,{key:0,word:Te(n),checked:m.value,"is-correct":Te(O),"feedback-message":Te(V),"show-feedback":Te(F),"onUpdate:answer":ne[0]||(ne[0]=re=>g.value=re),onCheckAnswer:j,onNextCard:G,onToggleDetails:()=>{}},null,8,["word","checked","is-correct","feedback-message","show-feedback"])):(le(),ce("p",RE,"Du har ingen ord å repetere!")),S.value?(le(),ce("div",PE,[N("p",null,"Reviewed words (both directions done): "+ee(Te(u)),1),N("p",null,"Correct answers in session: "+ee(Te(f)),1),N("p",null,"Total initial items in session: "+ee(Te(d)),1),N("p",null,"Current queue size: "+ee(Te(e).length),1)])):en("",!0)]))}}),NE=Gt(OE,[["__scopeId","data-v-ffaa429b"]]),DE=[{path:"/",name:"home",component:wI},{path:"/login",name:"login",component:RI},{path:"/dashboard",name:"dashboard",component:FI},{path:"/privacy",name:"privacy",component:zI},{path:"/account",name:"account",component:YI},{path:"/review",name:"review",component:NE}],xE=r_({history:Ov("/"),routes:DE});Qm(vI).use(xE).mount("#app");
