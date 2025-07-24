(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Sa(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ae={},ws=[],Wt=()=>{},Rp=()=>!1,Di=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Aa=t=>t.startsWith("onUpdate:"),$e=Object.assign,Ca=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Pp=Object.prototype.hasOwnProperty,be=(t,e)=>Pp.call(t,e),ne=Array.isArray,bs=t=>xi(t)==="[object Map]",ch=t=>xi(t)==="[object Set]",le=t=>typeof t=="function",Le=t=>typeof t=="string",Mn=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",uh=t=>(Re(t)||le(t))&&le(t.then)&&le(t.catch),hh=Object.prototype.toString,xi=t=>hh.call(t),Op=t=>xi(t).slice(8,-1),fh=t=>xi(t)==="[object Object]",ka=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,er=Sa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Li=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Np=/-(\w)/g,It=Li(t=>t.replace(Np,(e,n)=>n?n.toUpperCase():"")),Dp=/\B([A-Z])/g,Un=Li(t=>t.replace(Dp,"-$1").toLowerCase()),Mi=Li(t=>t.charAt(0).toUpperCase()+t.slice(1)),wo=Li(t=>t?`on${Mi(t)}`:""),Pn=(t,e)=>!Object.is(t,e),si=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},qo=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Ko=t=>{const e=parseFloat(t);return isNaN(e)?t:e},xp=t=>{const e=Le(t)?Number(t):NaN;return isNaN(e)?t:e};let ic;const Ui=()=>ic||(ic=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ra(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Le(s)?Fp(s):Ra(s);if(r)for(const o in r)e[o]=r[o]}return e}else if(Le(t)||Re(t))return t}const Lp=/;(?![^(]*\))/g,Mp=/:([^]+)/,Up=/\/\*[^]*?\*\//g;function Fp(t){const e={};return t.replace(Up,"").split(Lp).forEach(n=>{if(n){const s=n.split(Mp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function an(t){let e="";if(Le(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const s=an(t[n]);s&&(e+=s+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$p=Sa(jp);function dh(t){return!!t||t===""}const ph=t=>!!(t&&t.__v_isRef===!0),Y=t=>Le(t)?t:t==null?"":ne(t)||Re(t)&&(t.toString===hh||!le(t.toString))?ph(t)?Y(t.value):JSON.stringify(t,gh,2):String(t),gh=(t,e)=>ph(e)?gh(t,e.value):bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],o)=>(n[bo(s,o)+" =>"]=r,n),{})}:ch(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>bo(n))}:Mn(e)?bo(e):Re(e)&&!ne(e)&&!fh(e)?String(e):e,bo=(t,e="")=>{var n;return Mn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let it;class Vp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=it,!e&&it&&(this.index=(it.scopes||(it.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=it;try{return it=this,e()}finally{it=n}}}on(){++this._on===1&&(this.prevScope=it,it=this)}off(){this._on>0&&--this._on===0&&(it=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Bp(){return it}let Ce;const Io=new WeakSet;class mh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,it&&it.active&&it.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Io.has(this)&&(Io.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||yh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,oc(this),_h(this);const e=Ce,n=Rt;Ce=this,Rt=!0;try{return this.fn()}finally{wh(this),Ce=e,Rt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Na(e);this.deps=this.depsTail=void 0,oc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Io.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Jo(this)&&this.run()}get dirty(){return Jo(this)}}let vh=0,tr,nr;function yh(t,e=!1){if(t.flags|=8,e){t.next=nr,nr=t;return}t.next=tr,tr=t}function Pa(){vh++}function Oa(){if(--vh>0)return;if(nr){let e=nr;for(nr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;tr;){let e=tr;for(tr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function _h(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function wh(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Na(s),Hp(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Jo(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(bh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function bh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===gr)||(t.globalVersion=gr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Jo(t))))return;t.flags|=2;const e=t.dep,n=Ce,s=Rt;Ce=t,Rt=!0;try{_h(t);const r=t.fn(t._value);(e.version===0||Pn(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ce=n,Rt=s,wh(t),t.flags&=-3}}function Na(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Na(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Hp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Rt=!0;const Ih=[];function ln(){Ih.push(Rt),Rt=!1}function cn(){const t=Ih.pop();Rt=t===void 0?!0:t}function oc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ce;Ce=void 0;try{e()}finally{Ce=n}}}let gr=0;class Wp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Da{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ce||!Rt||Ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ce)n=this.activeLink=new Wp(Ce,this),Ce.deps?(n.prevDep=Ce.depsTail,Ce.depsTail.nextDep=n,Ce.depsTail=n):Ce.deps=Ce.depsTail=n,Eh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Ce.depsTail,n.nextDep=void 0,Ce.depsTail.nextDep=n,Ce.depsTail=n,Ce.deps===n&&(Ce.deps=s)}return n}trigger(e){this.version++,gr++,this.notify(e)}notify(e){Pa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Oa()}}}function Eh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Eh(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Xo=new WeakMap,Qn=Symbol(""),Yo=Symbol(""),mr=Symbol("");function Xe(t,e,n){if(Rt&&Ce){let s=Xo.get(t);s||Xo.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Da),r.map=s,r.key=n),r.track()}}function en(t,e,n,s,r,o){const a=Xo.get(t);if(!a){gr++;return}const c=u=>{u&&u.trigger()};if(Pa(),e==="clear")a.forEach(c);else{const u=ne(t),f=u&&ka(n);if(u&&n==="length"){const d=Number(s);a.forEach((g,v)=>{(v==="length"||v===mr||!Mn(v)&&v>=d)&&c(g)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),f&&c(a.get(mr)),e){case"add":u?f&&c(a.get("length")):(c(a.get(Qn)),bs(t)&&c(a.get(Yo)));break;case"delete":u||(c(a.get(Qn)),bs(t)&&c(a.get(Yo)));break;case"set":bs(t)&&c(a.get(Qn));break}}Oa()}function ms(t){const e=_e(t);return e===t?e:(Xe(e,"iterate",mr),_t(t)?e:e.map(ze))}function Fi(t){return Xe(t=_e(t),"iterate",mr),t}const zp={__proto__:null,[Symbol.iterator](){return Eo(this,Symbol.iterator,ze)},concat(...t){return ms(this).concat(...t.map(e=>ne(e)?ms(e):e))},entries(){return Eo(this,"entries",t=>(t[1]=ze(t[1]),t))},every(t,e){return Xt(this,"every",t,e,void 0,arguments)},filter(t,e){return Xt(this,"filter",t,e,n=>n.map(ze),arguments)},find(t,e){return Xt(this,"find",t,e,ze,arguments)},findIndex(t,e){return Xt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Xt(this,"findLast",t,e,ze,arguments)},findLastIndex(t,e){return Xt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Xt(this,"forEach",t,e,void 0,arguments)},includes(...t){return To(this,"includes",t)},indexOf(...t){return To(this,"indexOf",t)},join(t){return ms(this).join(t)},lastIndexOf(...t){return To(this,"lastIndexOf",t)},map(t,e){return Xt(this,"map",t,e,void 0,arguments)},pop(){return Xs(this,"pop")},push(...t){return Xs(this,"push",t)},reduce(t,...e){return ac(this,"reduce",t,e)},reduceRight(t,...e){return ac(this,"reduceRight",t,e)},shift(){return Xs(this,"shift")},some(t,e){return Xt(this,"some",t,e,void 0,arguments)},splice(...t){return Xs(this,"splice",t)},toReversed(){return ms(this).toReversed()},toSorted(t){return ms(this).toSorted(t)},toSpliced(...t){return ms(this).toSpliced(...t)},unshift(...t){return Xs(this,"unshift",t)},values(){return Eo(this,"values",ze)}};function Eo(t,e,n){const s=Fi(t),r=s[e]();return s!==t&&!_t(t)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.value&&(o.value=n(o.value)),o}),r}const Gp=Array.prototype;function Xt(t,e,n,s,r,o){const a=Fi(t),c=a!==t&&!_t(t),u=a[e];if(u!==Gp[e]){const g=u.apply(t,o);return c?ze(g):g}let f=n;a!==t&&(c?f=function(g,v){return n.call(this,ze(g),v,t)}:n.length>2&&(f=function(g,v){return n.call(this,g,v,t)}));const d=u.call(a,f,s);return c&&r?r(d):d}function ac(t,e,n,s){const r=Fi(t);let o=n;return r!==t&&(_t(t)?n.length>3&&(o=function(a,c,u){return n.call(this,a,c,u,t)}):o=function(a,c,u){return n.call(this,a,ze(c),u,t)}),r[e](o,...s)}function To(t,e,n){const s=_e(t);Xe(s,"iterate",mr);const r=s[e](...n);return(r===-1||r===!1)&&Ma(n[0])?(n[0]=_e(n[0]),s[e](...n)):r}function Xs(t,e,n=[]){ln(),Pa();const s=_e(t)[e].apply(t,n);return Oa(),cn(),s}const qp=Sa("__proto__,__v_isRef,__isVue"),Th=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mn));function Kp(t){Mn(t)||(t=String(t));const e=_e(this);return Xe(e,"has",t),e.hasOwnProperty(t)}class Sh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(r?o?rg:Rh:o?kh:Ch).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const a=ne(e);if(!r){let u;if(a&&(u=zp[n]))return u;if(n==="hasOwnProperty")return Kp}const c=Reflect.get(e,n,Ye(e)?e:s);return(Mn(n)?Th.has(n):qp(n))||(r||Xe(e,"get",n),o)?c:Ye(c)?a&&ka(n)?c:c.value:Re(c)?r?Oh(c):ji(c):c}}class Ah extends Sh{constructor(e=!1){super(!1,e)}set(e,n,s,r){let o=e[n];if(!this._isShallow){const u=Dn(o);if(!_t(s)&&!Dn(s)&&(o=_e(o),s=_e(s)),!ne(e)&&Ye(o)&&!Ye(s))return u?!1:(o.value=s,!0)}const a=ne(e)&&ka(n)?Number(n)<e.length:be(e,n),c=Reflect.set(e,n,s,Ye(e)?e:r);return e===_e(r)&&(a?Pn(s,o)&&en(e,"set",n,s):en(e,"add",n,s)),c}deleteProperty(e,n){const s=be(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&en(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Mn(n)||!Th.has(n))&&Xe(e,"has",n),s}ownKeys(e){return Xe(e,"iterate",ne(e)?"length":Qn),Reflect.ownKeys(e)}}class Jp extends Sh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Xp=new Ah,Yp=new Jp,Qp=new Ah(!0);const Qo=t=>t,Xr=t=>Reflect.getPrototypeOf(t);function Zp(t,e,n){return function(...s){const r=this.__v_raw,o=_e(r),a=bs(o),c=t==="entries"||t===Symbol.iterator&&a,u=t==="keys"&&a,f=r[t](...s),d=n?Qo:e?di:ze;return!e&&Xe(o,"iterate",u?Yo:Qn),{next(){const{value:g,done:v}=f.next();return v?{value:g,done:v}:{value:c?[d(g[0]),d(g[1])]:d(g),done:v}},[Symbol.iterator](){return this}}}}function Yr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function eg(t,e){const n={get(r){const o=this.__v_raw,a=_e(o),c=_e(r);t||(Pn(r,c)&&Xe(a,"get",r),Xe(a,"get",c));const{has:u}=Xr(a),f=e?Qo:t?di:ze;if(u.call(a,r))return f(o.get(r));if(u.call(a,c))return f(o.get(c));o!==a&&o.get(r)},get size(){const r=this.__v_raw;return!t&&Xe(_e(r),"iterate",Qn),Reflect.get(r,"size",r)},has(r){const o=this.__v_raw,a=_e(o),c=_e(r);return t||(Pn(r,c)&&Xe(a,"has",r),Xe(a,"has",c)),r===c?o.has(r):o.has(r)||o.has(c)},forEach(r,o){const a=this,c=a.__v_raw,u=_e(c),f=e?Qo:t?di:ze;return!t&&Xe(u,"iterate",Qn),c.forEach((d,g)=>r.call(o,f(d),f(g),a))}};return $e(n,t?{add:Yr("add"),set:Yr("set"),delete:Yr("delete"),clear:Yr("clear")}:{add(r){!e&&!_t(r)&&!Dn(r)&&(r=_e(r));const o=_e(this);return Xr(o).has.call(o,r)||(o.add(r),en(o,"add",r,r)),this},set(r,o){!e&&!_t(o)&&!Dn(o)&&(o=_e(o));const a=_e(this),{has:c,get:u}=Xr(a);let f=c.call(a,r);f||(r=_e(r),f=c.call(a,r));const d=u.call(a,r);return a.set(r,o),f?Pn(o,d)&&en(a,"set",r,o):en(a,"add",r,o),this},delete(r){const o=_e(this),{has:a,get:c}=Xr(o);let u=a.call(o,r);u||(r=_e(r),u=a.call(o,r)),c&&c.call(o,r);const f=o.delete(r);return u&&en(o,"delete",r,void 0),f},clear(){const r=_e(this),o=r.size!==0,a=r.clear();return o&&en(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Zp(r,t,e)}),n}function xa(t,e){const n=eg(t,e);return(s,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(be(n,r)&&r in s?n:s,r,o)}const tg={get:xa(!1,!1)},ng={get:xa(!1,!0)},sg={get:xa(!0,!1)};const Ch=new WeakMap,kh=new WeakMap,Rh=new WeakMap,rg=new WeakMap;function ig(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function og(t){return t.__v_skip||!Object.isExtensible(t)?0:ig(Op(t))}function ji(t){return Dn(t)?t:La(t,!1,Xp,tg,Ch)}function Ph(t){return La(t,!1,Qp,ng,kh)}function Oh(t){return La(t,!0,Yp,sg,Rh)}function La(t,e,n,s,r){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=og(t);if(o===0)return t;const a=r.get(t);if(a)return a;const c=new Proxy(t,o===2?s:n);return r.set(t,c),c}function Is(t){return Dn(t)?Is(t.__v_raw):!!(t&&t.__v_isReactive)}function Dn(t){return!!(t&&t.__v_isReadonly)}function _t(t){return!!(t&&t.__v_isShallow)}function Ma(t){return t?!!t.__v_raw:!1}function _e(t){const e=t&&t.__v_raw;return e?_e(e):t}function ag(t){return!be(t,"__v_skip")&&Object.isExtensible(t)&&qo(t,"__v_skip",!0),t}const ze=t=>Re(t)?ji(t):t,di=t=>Re(t)?Oh(t):t;function Ye(t){return t?t.__v_isRef===!0:!1}function Ee(t){return Nh(t,!1)}function lg(t){return Nh(t,!0)}function Nh(t,e){return Ye(t)?t:new cg(t,e)}class cg{constructor(e,n){this.dep=new Da,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:_e(e),this._value=n?e:ze(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||_t(e)||Dn(e);e=s?e:_e(e),Pn(e,n)&&(this._rawValue=e,this._value=s?e:ze(e),this.dep.trigger())}}function me(t){return Ye(t)?t.value:t}const ug={get:(t,e,n)=>e==="__v_raw"?t:me(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ye(r)&&!Ye(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Dh(t){return Is(t)?t:new Proxy(t,ug)}class hg{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Da(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=gr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ce!==this)return yh(this,!0),!0}get value(){const e=this.dep.track();return bh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fg(t,e,n=!1){let s,r;return le(t)?s=t:(s=t.get,r=t.set),new hg(s,r,n)}const Qr={},pi=new WeakMap;let zn;function dg(t,e=!1,n=zn){if(n){let s=pi.get(n);s||pi.set(n,s=[]),s.push(t)}}function pg(t,e,n=Ae){const{immediate:s,deep:r,once:o,scheduler:a,augmentJob:c,call:u}=n,f=B=>r?B:_t(B)||r===!1||r===0?tn(B,1):tn(B);let d,g,v,T,P=!1,M=!1;if(Ye(t)?(g=()=>t.value,P=_t(t)):Is(t)?(g=()=>f(t),P=!0):ne(t)?(M=!0,P=t.some(B=>Is(B)||_t(B)),g=()=>t.map(B=>{if(Ye(B))return B.value;if(Is(B))return f(B);if(le(B))return u?u(B,2):B()})):le(t)?e?g=u?()=>u(t,2):t:g=()=>{if(v){ln();try{v()}finally{cn()}}const B=zn;zn=d;try{return u?u(t,3,[T]):t(T)}finally{zn=B}}:g=Wt,e&&r){const B=g,oe=r===!0?1/0:r;g=()=>tn(B(),oe)}const z=Bp(),$=()=>{d.stop(),z&&z.active&&Ca(z.effects,d)};if(o&&e){const B=e;e=(...oe)=>{B(...oe),$()}}let F=M?new Array(t.length).fill(Qr):Qr;const V=B=>{if(!(!(d.flags&1)||!d.dirty&&!B))if(e){const oe=d.run();if(r||P||(M?oe.some((te,A)=>Pn(te,F[A])):Pn(oe,F))){v&&v();const te=zn;zn=d;try{const A=[oe,F===Qr?void 0:M&&F[0]===Qr?[]:F,T];F=oe,u?u(e,3,A):e(...A)}finally{zn=te}}}else d.run()};return c&&c(V),d=new mh(g),d.scheduler=a?()=>a(V,!1):V,T=B=>dg(B,!1,d),v=d.onStop=()=>{const B=pi.get(d);if(B){if(u)u(B,4);else for(const oe of B)oe();pi.delete(d)}},e?s?V(!0):F=d.run():a?a(V.bind(null,!0),!0):d.run(),$.pause=d.pause.bind(d),$.resume=d.resume.bind(d),$.stop=$,$}function tn(t,e=1/0,n){if(e<=0||!Re(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ye(t))tn(t.value,e,n);else if(ne(t))for(let s=0;s<t.length;s++)tn(t[s],e,n);else if(ch(t)||bs(t))t.forEach(s=>{tn(s,e,n)});else if(fh(t)){for(const s in t)tn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&tn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cr(t,e,n,s){try{return s?t(...s):t()}catch(r){$i(r,e,n)}}function Nt(t,e,n,s){if(le(t)){const r=Cr(t,e,n,s);return r&&uh(r)&&r.catch(o=>{$i(o,e,n)}),r}if(ne(t)){const r=[];for(let o=0;o<t.length;o++)r.push(Nt(t[o],e,n,s));return r}}function $i(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ae;if(e){let c=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](t,u,f)===!1)return}c=c.parent}if(o){ln(),Cr(o,null,10,[t,u,f]),cn();return}}gg(t,n,r,s,a)}function gg(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const tt=[];let jt=-1;const Es=[];let En=null,vs=0;const xh=Promise.resolve();let gi=null;function Rs(t){const e=gi||xh;return t?e.then(this?t.bind(this):t):e}function mg(t){let e=jt+1,n=tt.length;for(;e<n;){const s=e+n>>>1,r=tt[s],o=vr(r);o<t||o===t&&r.flags&2?e=s+1:n=s}return e}function Ua(t){if(!(t.flags&1)){const e=vr(t),n=tt[tt.length-1];!n||!(t.flags&2)&&e>=vr(n)?tt.push(t):tt.splice(mg(e),0,t),t.flags|=1,Lh()}}function Lh(){gi||(gi=xh.then(Uh))}function vg(t){ne(t)?Es.push(...t):En&&t.id===-1?En.splice(vs+1,0,t):t.flags&1||(Es.push(t),t.flags|=1),Lh()}function lc(t,e,n=jt+1){for(;n<tt.length;n++){const s=tt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;tt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Mh(t){if(Es.length){const e=[...new Set(Es)].sort((n,s)=>vr(n)-vr(s));if(Es.length=0,En){En.push(...e);return}for(En=e,vs=0;vs<En.length;vs++){const n=En[vs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}En=null,vs=0}}const vr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Uh(t){try{for(jt=0;jt<tt.length;jt++){const e=tt[jt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Cr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;jt<tt.length;jt++){const e=tt[jt];e&&(e.flags&=-2)}jt=-1,tt.length=0,Mh(),gi=null,(tt.length||Es.length)&&Uh()}}let lt=null,Fh=null;function mi(t){const e=lt;return lt=t,Fh=t&&t.type.__scopeId||null,e}function Vi(t,e=lt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&_c(-1);const o=mi(e);let a;try{a=t(...r)}finally{mi(o),s._d&&_c(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function yg(t,e){if(lt===null)return t;const n=qi(lt),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,u=Ae]=e[r];o&&(le(o)&&(o={mounted:o,updated:o}),o.deep&&tn(a),s.push({dir:o,instance:n,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Vn(t,e,n,s){const r=t.dirs,o=e&&e.dirs;for(let a=0;a<r.length;a++){const c=r[a];o&&(c.oldValue=o[a].value);let u=c.dir[s];u&&(ln(),Nt(u,n,8,[t.el,c,t,e]),cn())}}const _g=Symbol("_vte"),jh=t=>t.__isTeleport,Tn=Symbol("_leaveCb"),Zr=Symbol("_enterCb");function wg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ls(()=>{t.isMounted=!0}),Fa(()=>{t.isUnmounting=!0}),t}const yt=[Function,Array],$h={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yt,onEnter:yt,onAfterEnter:yt,onEnterCancelled:yt,onBeforeLeave:yt,onLeave:yt,onAfterLeave:yt,onLeaveCancelled:yt,onBeforeAppear:yt,onAppear:yt,onAfterAppear:yt,onAppearCancelled:yt},Vh=t=>{const e=t.subTree;return e.component?Vh(e.component):e},bg={name:"BaseTransition",props:$h,setup(t,{slots:e}){const n=mm(),s=wg();return()=>{const r=e.default&&Wh(e.default(),!0);if(!r||!r.length)return;const o=Bh(r),a=_e(t),{mode:c}=a;if(s.isLeaving)return So(o);const u=cc(o);if(!u)return So(o);let f=Zo(u,a,s,n,g=>f=g);u.type!==nt&&yr(u,f);let d=n.subTree&&cc(n.subTree);if(d&&d.type!==nt&&!qn(u,d)&&Vh(n).type!==nt){let g=Zo(d,a,s,n);if(yr(d,g),c==="out-in"&&u.type!==nt)return s.isLeaving=!0,g.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete g.afterLeave,d=void 0},So(o);c==="in-out"&&u.type!==nt?g.delayLeave=(v,T,P)=>{const M=Hh(s,d);M[String(d.key)]=d,v[Tn]=()=>{T(),v[Tn]=void 0,delete f.delayedLeave,d=void 0},f.delayedLeave=()=>{P(),delete f.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return o}}};function Bh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==nt){e=n;break}}return e}const Ig=bg;function Hh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Zo(t,e,n,s,r){const{appear:o,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:f,onAfterEnter:d,onEnterCancelled:g,onBeforeLeave:v,onLeave:T,onAfterLeave:P,onLeaveCancelled:M,onBeforeAppear:z,onAppear:$,onAfterAppear:F,onAppearCancelled:V}=e,B=String(t.key),oe=Hh(n,t),te=(m,E)=>{m&&Nt(m,s,9,E)},A=(m,E)=>{const S=E[1];te(m,E),ne(m)?m.every(I=>I.length<=1)&&S():m.length<=1&&S()},y={mode:a,persisted:c,beforeEnter(m){let E=u;if(!n.isMounted)if(o)E=z||u;else return;m[Tn]&&m[Tn](!0);const S=oe[B];S&&qn(t,S)&&S.el[Tn]&&S.el[Tn](),te(E,[m])},enter(m){let E=f,S=d,I=g;if(!n.isMounted)if(o)E=$||f,S=F||d,I=V||g;else return;let w=!1;const Te=m[Zr]=Fe=>{w||(w=!0,Fe?te(I,[m]):te(S,[m]),y.delayedLeave&&y.delayedLeave(),m[Zr]=void 0)};E?A(E,[m,Te]):Te()},leave(m,E){const S=String(t.key);if(m[Zr]&&m[Zr](!0),n.isUnmounting)return E();te(v,[m]);let I=!1;const w=m[Tn]=Te=>{I||(I=!0,E(),Te?te(M,[m]):te(P,[m]),m[Tn]=void 0,oe[S]===t&&delete oe[S])};oe[S]=t,T?A(T,[m,w]):w()},clone(m){const E=Zo(m,e,n,s,r);return r&&r(E),E}};return y}function So(t){if(Bi(t))return t=xn(t),t.children=null,t}function cc(t){if(!Bi(t))return jh(t.type)&&t.children?Bh(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&le(n.default))return n.default()}}function yr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,yr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wh(t,e=!1,n){let s=[],r=0;for(let o=0;o<t.length;o++){let a=t[o];const c=n==null?a.key:String(n)+String(a.key!=null?a.key:o);a.type===je?(a.patchFlag&128&&r++,s=s.concat(Wh(a.children,e,c))):(e||a.type!==nt)&&s.push(c!=null?xn(a,{key:c}):a)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function kr(t,e){return le(t)?$e({name:t.name},e,{setup:t}):t}function zh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function sr(t,e,n,s,r=!1){if(ne(t)){t.forEach((P,M)=>sr(P,e&&(ne(e)?e[M]:e),n,s,r));return}if(rr(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&sr(t,e,n,s.component.subTree);return}const o=s.shapeFlag&4?qi(s.component):s.el,a=r?null:o,{i:c,r:u}=t,f=e&&e.r,d=c.refs===Ae?c.refs={}:c.refs,g=c.setupState,v=_e(g),T=g===Ae?()=>!1:P=>be(v,P);if(f!=null&&f!==u&&(Le(f)?(d[f]=null,T(f)&&(g[f]=null)):Ye(f)&&(f.value=null)),le(u))Cr(u,c,12,[a,d]);else{const P=Le(u),M=Ye(u);if(P||M){const z=()=>{if(t.f){const $=P?T(u)?g[u]:d[u]:u.value;r?ne($)&&Ca($,o):ne($)?$.includes(o)||$.push(o):P?(d[u]=[o],T(u)&&(g[u]=d[u])):(u.value=[o],t.k&&(d[t.k]=u.value))}else P?(d[u]=a,T(u)&&(g[u]=a)):M&&(u.value=a,t.k&&(d[t.k]=a))};a?(z.id=-1,ht(z,n)):z()}}}Ui().requestIdleCallback;Ui().cancelIdleCallback;const rr=t=>!!t.type.__asyncLoader,Bi=t=>t.type.__isKeepAlive;function Gh(t,e){Kh(t,"a",e)}function qh(t,e){Kh(t,"da",e)}function Kh(t,e,n=Ge){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Hi(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Bi(r.parent.vnode)&&Eg(s,e,n,r),r=r.parent}}function Eg(t,e,n,s){const r=Hi(e,t,s,!0);Wi(()=>{Ca(s[e],r)},n)}function Hi(t,e,n=Ge,s=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{ln();const c=Rr(n),u=Nt(e,n,t,a);return c(),cn(),u});return s?r.unshift(o):r.push(o),o}}const fn=t=>(e,n=Ge)=>{(!wr||t==="sp")&&Hi(t,(...s)=>e(...s),n)},Tg=fn("bm"),ls=fn("m"),Sg=fn("bu"),Ag=fn("u"),Fa=fn("bum"),Wi=fn("um"),Cg=fn("sp"),kg=fn("rtg"),Rg=fn("rtc");function Pg(t,e=Ge){Hi("ec",t,e)}const Og="components";function Jh(t,e){return Dg(Og,t,!0,e)||t}const Ng=Symbol.for("v-ndc");function Dg(t,e,n=!0,s=!1){const r=lt||Ge;if(r){const o=r.type;{const c=bm(o,!1);if(c&&(c===e||c===It(e)||c===Mi(It(e))))return o}const a=uc(r[t]||o[t],e)||uc(r.appContext[t],e);return!a&&s?o:a}}function uc(t,e){return t&&(t[e]||t[It(e)]||t[Mi(It(e))])}function vi(t,e,n,s){let r;const o=n,a=ne(t);if(a||Le(t)){const c=a&&Is(t);let u=!1,f=!1;c&&(u=!_t(t),f=Dn(t),t=Fi(t)),r=new Array(t.length);for(let d=0,g=t.length;d<g;d++)r[d]=e(u?f?di(ze(t[d])):ze(t[d]):t[d],d,void 0,o)}else if(typeof t=="number"){r=new Array(t);for(let c=0;c<t;c++)r[c]=e(c+1,c,void 0,o)}else if(Re(t))if(t[Symbol.iterator])r=Array.from(t,(c,u)=>e(c,u,void 0,o));else{const c=Object.keys(t);r=new Array(c.length);for(let u=0,f=c.length;u<f;u++){const d=c[u];r[u]=e(t[d],d,u,o)}}else r=[];return r}const ea=t=>t?mf(t)?qi(t):ea(t.parent):null,ir=$e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ea(t.parent),$root:t=>ea(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Yh(t),$forceUpdate:t=>t.f||(t.f=()=>{Ua(t.update)}),$nextTick:t=>t.n||(t.n=Rs.bind(t.proxy)),$watch:t=>em.bind(t)}),Ao=(t,e)=>t!==Ae&&!t.__isScriptSetup&&be(t,e),xg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:o,accessCache:a,type:c,appContext:u}=t;let f;if(e[0]!=="$"){const T=a[e];if(T!==void 0)switch(T){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(Ao(s,e))return a[e]=1,s[e];if(r!==Ae&&be(r,e))return a[e]=2,r[e];if((f=t.propsOptions[0])&&be(f,e))return a[e]=3,o[e];if(n!==Ae&&be(n,e))return a[e]=4,n[e];ta&&(a[e]=0)}}const d=ir[e];let g,v;if(d)return e==="$attrs"&&Xe(t.attrs,"get",""),d(t);if((g=c.__cssModules)&&(g=g[e]))return g;if(n!==Ae&&be(n,e))return a[e]=4,n[e];if(v=u.config.globalProperties,be(v,e))return v[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:o}=t;return Ao(r,e)?(r[e]=n,!0):s!==Ae&&be(s,e)?(s[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:o}},a){let c;return!!n[a]||t!==Ae&&be(t,a)||Ao(e,a)||(c=o[0])&&be(c,a)||be(s,a)||be(ir,a)||be(r.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function hc(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ta=!0;function Lg(t){const e=Yh(t),n=t.proxy,s=t.ctx;ta=!1,e.beforeCreate&&fc(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:a,watch:c,provide:u,inject:f,created:d,beforeMount:g,mounted:v,beforeUpdate:T,updated:P,activated:M,deactivated:z,beforeDestroy:$,beforeUnmount:F,destroyed:V,unmounted:B,render:oe,renderTracked:te,renderTriggered:A,errorCaptured:y,serverPrefetch:m,expose:E,inheritAttrs:S,components:I,directives:w,filters:Te}=e;if(f&&Mg(f,s,null),a)for(const he in a){const ue=a[he];le(ue)&&(s[he]=ue.bind(n))}if(r){const he=r.call(n,n);Re(he)&&(t.data=ji(he))}if(ta=!0,o)for(const he in o){const ue=o[he],ut=le(ue)?ue.bind(n,n):le(ue.get)?ue.get.bind(n,n):Wt,Et=!le(ue)&&le(ue.set)?ue.set.bind(n):Wt,pt=De({get:ut,set:Et});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>pt.value,set:Oe=>pt.value=Oe})}if(c)for(const he in c)Xh(c[he],s,n,he);if(u){const he=le(u)?u.call(n):u;Reflect.ownKeys(he).forEach(ue=>{ri(ue,he[ue])})}d&&fc(d,t,"c");function Pe(he,ue){ne(ue)?ue.forEach(ut=>he(ut.bind(n))):ue&&he(ue.bind(n))}if(Pe(Tg,g),Pe(ls,v),Pe(Sg,T),Pe(Ag,P),Pe(Gh,M),Pe(qh,z),Pe(Pg,y),Pe(Rg,te),Pe(kg,A),Pe(Fa,F),Pe(Wi,B),Pe(Cg,m),ne(E))if(E.length){const he=t.exposed||(t.exposed={});E.forEach(ue=>{Object.defineProperty(he,ue,{get:()=>n[ue],set:ut=>n[ue]=ut})})}else t.exposed||(t.exposed={});oe&&t.render===Wt&&(t.render=oe),S!=null&&(t.inheritAttrs=S),I&&(t.components=I),w&&(t.directives=w),m&&zh(t)}function Mg(t,e,n=Wt){ne(t)&&(t=na(t));for(const s in t){const r=t[s];let o;Re(r)?"default"in r?o=wt(r.from||s,r.default,!0):o=wt(r.from||s):o=wt(r),Ye(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function fc(t,e,n){Nt(ne(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xh(t,e,n,s){let r=s.includes(".")?hf(n,s):()=>n[s];if(Le(t)){const o=e[t];le(o)&&Zn(r,o)}else if(le(t))Zn(r,t.bind(n));else if(Re(t))if(ne(t))t.forEach(o=>Xh(o,e,n,s));else{const o=le(t.handler)?t.handler.bind(n):e[t.handler];le(o)&&Zn(r,o,t)}}function Yh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:!r.length&&!n&&!s?u=e:(u={},r.length&&r.forEach(f=>yi(u,f,a,!0)),yi(u,e,a)),Re(e)&&o.set(e,u),u}function yi(t,e,n,s=!1){const{mixins:r,extends:o}=e;o&&yi(t,o,n,!0),r&&r.forEach(a=>yi(t,a,n,!0));for(const a in e)if(!(s&&a==="expose")){const c=Ug[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const Ug={data:dc,props:pc,emits:pc,methods:Zs,computed:Zs,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:Zs,directives:Zs,watch:jg,provide:dc,inject:Fg};function dc(t,e){return e?t?function(){return $e(le(t)?t.call(this,this):t,le(e)?e.call(this,this):e)}:e:t}function Fg(t,e){return Zs(na(t),na(e))}function na(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ze(t,e){return t?[...new Set([].concat(t,e))]:e}function Zs(t,e){return t?$e(Object.create(null),t,e):e}function pc(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:$e(Object.create(null),hc(t),hc(e??{})):e}function jg(t,e){if(!t)return e;if(!e)return t;const n=$e(Object.create(null),t);for(const s in e)n[s]=Ze(t[s],e[s]);return n}function Qh(){return{app:null,config:{isNativeTag:Rp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $g=0;function Vg(t,e){return function(s,r=null){le(s)||(s=$e({},s)),r!=null&&!Re(r)&&(r=null);const o=Qh(),a=new WeakSet,c=[];let u=!1;const f=o.app={_uid:$g++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:Em,get config(){return o.config},set config(d){},use(d,...g){return a.has(d)||(d&&le(d.install)?(a.add(d),d.install(f,...g)):le(d)&&(a.add(d),d(f,...g))),f},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),f},component(d,g){return g?(o.components[d]=g,f):o.components[d]},directive(d,g){return g?(o.directives[d]=g,f):o.directives[d]},mount(d,g,v){if(!u){const T=f._ceVNode||Me(s,r);return T.appContext=o,v===!0?v="svg":v===!1&&(v=void 0),t(T,d,v),u=!0,f._container=d,d.__vue_app__=f,qi(T.component)}},onUnmount(d){c.push(d)},unmount(){u&&(Nt(c,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(d,g){return o.provides[d]=g,f},runWithContext(d){const g=Ts;Ts=f;try{return d()}finally{Ts=g}}};return f}}let Ts=null;function ri(t,e){if(Ge){let n=Ge.provides;const s=Ge.parent&&Ge.parent.provides;s===n&&(n=Ge.provides=Object.create(s)),n[t]=e}}function wt(t,e,n=!1){const s=Ge||lt;if(s||Ts){let r=Ts?Ts._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&le(e)?e.call(s&&s.proxy):e}}const Zh={},ef=()=>Object.create(Zh),tf=t=>Object.getPrototypeOf(t)===Zh;function Bg(t,e,n,s=!1){const r={},o=ef();t.propsDefaults=Object.create(null),nf(t,e,r,o);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=s?r:Ph(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function Hg(t,e,n,s){const{props:r,attrs:o,vnode:{patchFlag:a}}=t,c=_e(r),[u]=t.propsOptions;let f=!1;if((s||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let g=0;g<d.length;g++){let v=d[g];if(zi(t.emitsOptions,v))continue;const T=e[v];if(u)if(be(o,v))T!==o[v]&&(o[v]=T,f=!0);else{const P=It(v);r[P]=sa(u,c,P,T,t,!1)}else T!==o[v]&&(o[v]=T,f=!0)}}}else{nf(t,e,r,o)&&(f=!0);let d;for(const g in c)(!e||!be(e,g)&&((d=Un(g))===g||!be(e,d)))&&(u?n&&(n[g]!==void 0||n[d]!==void 0)&&(r[g]=sa(u,c,g,void 0,t,!0)):delete r[g]);if(o!==c)for(const g in o)(!e||!be(e,g))&&(delete o[g],f=!0)}f&&en(t.attrs,"set","")}function nf(t,e,n,s){const[r,o]=t.propsOptions;let a=!1,c;if(e)for(let u in e){if(er(u))continue;const f=e[u];let d;r&&be(r,d=It(u))?!o||!o.includes(d)?n[d]=f:(c||(c={}))[d]=f:zi(t.emitsOptions,u)||(!(u in s)||f!==s[u])&&(s[u]=f,a=!0)}if(o){const u=_e(n),f=c||Ae;for(let d=0;d<o.length;d++){const g=o[d];n[g]=sa(r,u,g,f[g],t,!be(f,g))}}return a}function sa(t,e,n,s,r,o){const a=t[n];if(a!=null){const c=be(a,"default");if(c&&s===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&le(u)){const{propsDefaults:f}=r;if(n in f)s=f[n];else{const d=Rr(r);s=f[n]=u.call(null,e),d()}}else s=u;r.ce&&r.ce._setProp(n,s)}a[0]&&(o&&!c?s=!1:a[1]&&(s===""||s===Un(n))&&(s=!0))}return s}const Wg=new WeakMap;function sf(t,e,n=!1){const s=n?Wg:e.propsCache,r=s.get(t);if(r)return r;const o=t.props,a={},c=[];let u=!1;if(!le(t)){const d=g=>{u=!0;const[v,T]=sf(g,e,!0);$e(a,v),T&&c.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!o&&!u)return Re(t)&&s.set(t,ws),ws;if(ne(o))for(let d=0;d<o.length;d++){const g=It(o[d]);gc(g)&&(a[g]=Ae)}else if(o)for(const d in o){const g=It(d);if(gc(g)){const v=o[d],T=a[g]=ne(v)||le(v)?{type:v}:$e({},v),P=T.type;let M=!1,z=!0;if(ne(P))for(let $=0;$<P.length;++$){const F=P[$],V=le(F)&&F.name;if(V==="Boolean"){M=!0;break}else V==="String"&&(z=!1)}else M=le(P)&&P.name==="Boolean";T[0]=M,T[1]=z,(M||be(T,"default"))&&c.push(g)}}const f=[a,c];return Re(t)&&s.set(t,f),f}function gc(t){return t[0]!=="$"&&!er(t)}const ja=t=>t[0]==="_"||t==="$stable",$a=t=>ne(t)?t.map(Vt):[Vt(t)],zg=(t,e,n)=>{if(e._n)return e;const s=Vi((...r)=>$a(e(...r)),n);return s._c=!1,s},rf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(ja(r))continue;const o=t[r];if(le(o))e[r]=zg(r,o,s);else if(o!=null){const a=$a(o);e[r]=()=>a}}},of=(t,e)=>{const n=$a(e);t.slots.default=()=>n},af=(t,e,n)=>{for(const s in e)(n||!ja(s))&&(t[s]=e[s])},Gg=(t,e,n)=>{const s=t.slots=ef();if(t.vnode.shapeFlag&32){const r=e.__;r&&qo(s,"__",r,!0);const o=e._;o?(af(s,e,n),n&&qo(s,"_",o,!0)):rf(e,s)}else e&&of(t,e)},qg=(t,e,n)=>{const{vnode:s,slots:r}=t;let o=!0,a=Ae;if(s.shapeFlag&32){const c=e._;c?n&&c===1?o=!1:af(r,e,n):(o=!e.$stable,rf(e,r)),a=e}else e&&(of(t,e),a={default:1});if(o)for(const c in r)!ja(c)&&a[c]==null&&delete r[c]},ht=am;function Kg(t){return Jg(t)}function Jg(t,e){const n=Ui();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:a,createText:c,createComment:u,setText:f,setElementText:d,parentNode:g,nextSibling:v,setScopeId:T=Wt,insertStaticContent:P}=t,M=(_,b,C,D=null,L=null,x=null,q=void 0,H=null,j=!!b.dynamicChildren)=>{if(_===b)return;_&&!qn(_,b)&&(D=N(_),Oe(_,L,x,!0),_=null),b.patchFlag===-2&&(j=!1,b.dynamicChildren=null);const{type:U,ref:Z,shapeFlag:G}=b;switch(U){case Gi:z(_,b,C,D);break;case nt:$(_,b,C,D);break;case ii:_==null&&F(b,C,D,q);break;case je:I(_,b,C,D,L,x,q,H,j);break;default:G&1?oe(_,b,C,D,L,x,q,H,j):G&6?w(_,b,C,D,L,x,q,H,j):(G&64||G&128)&&U.process(_,b,C,D,L,x,q,H,j,X)}Z!=null&&L?sr(Z,_&&_.ref,x,b||_,!b):Z==null&&_&&_.ref!=null&&sr(_.ref,null,x,_,!0)},z=(_,b,C,D)=>{if(_==null)s(b.el=c(b.children),C,D);else{const L=b.el=_.el;b.children!==_.children&&f(L,b.children)}},$=(_,b,C,D)=>{_==null?s(b.el=u(b.children||""),C,D):b.el=_.el},F=(_,b,C,D)=>{[_.el,_.anchor]=P(_.children,b,C,D,_.el,_.anchor)},V=({el:_,anchor:b},C,D)=>{let L;for(;_&&_!==b;)L=v(_),s(_,C,D),_=L;s(b,C,D)},B=({el:_,anchor:b})=>{let C;for(;_&&_!==b;)C=v(_),r(_),_=C;r(b)},oe=(_,b,C,D,L,x,q,H,j)=>{b.type==="svg"?q="svg":b.type==="math"&&(q="mathml"),_==null?te(b,C,D,L,x,q,H,j):m(_,b,L,x,q,H,j)},te=(_,b,C,D,L,x,q,H)=>{let j,U;const{props:Z,shapeFlag:G,transition:Q,dirs:se}=_;if(j=_.el=a(_.type,x,Z&&Z.is,Z),G&8?d(j,_.children):G&16&&y(_.children,j,null,D,L,Co(_,x),q,H),se&&Vn(_,null,D,"created"),A(j,_,_.scopeId,q,D),Z){for(const ce in Z)ce!=="value"&&!er(ce)&&o(j,ce,null,Z[ce],x,D);"value"in Z&&o(j,"value",null,Z.value,x),(U=Z.onVnodeBeforeMount)&&Ft(U,D,_)}se&&Vn(_,null,D,"beforeMount");const ee=Xg(L,Q);ee&&Q.beforeEnter(j),s(j,b,C),((U=Z&&Z.onVnodeMounted)||ee||se)&&ht(()=>{U&&Ft(U,D,_),ee&&Q.enter(j),se&&Vn(_,null,D,"mounted")},L)},A=(_,b,C,D,L)=>{if(C&&T(_,C),D)for(let x=0;x<D.length;x++)T(_,D[x]);if(L){let x=L.subTree;if(b===x||df(x.type)&&(x.ssContent===b||x.ssFallback===b)){const q=L.vnode;A(_,q,q.scopeId,q.slotScopeIds,L.parent)}}},y=(_,b,C,D,L,x,q,H,j=0)=>{for(let U=j;U<_.length;U++){const Z=_[U]=H?Sn(_[U]):Vt(_[U]);M(null,Z,b,C,D,L,x,q,H)}},m=(_,b,C,D,L,x,q)=>{const H=b.el=_.el;let{patchFlag:j,dynamicChildren:U,dirs:Z}=b;j|=_.patchFlag&16;const G=_.props||Ae,Q=b.props||Ae;let se;if(C&&Bn(C,!1),(se=Q.onVnodeBeforeUpdate)&&Ft(se,C,b,_),Z&&Vn(b,_,C,"beforeUpdate"),C&&Bn(C,!0),(G.innerHTML&&Q.innerHTML==null||G.textContent&&Q.textContent==null)&&d(H,""),U?E(_.dynamicChildren,U,H,C,D,Co(b,L),x):q||ue(_,b,H,null,C,D,Co(b,L),x,!1),j>0){if(j&16)S(H,G,Q,C,L);else if(j&2&&G.class!==Q.class&&o(H,"class",null,Q.class,L),j&4&&o(H,"style",G.style,Q.style,L),j&8){const ee=b.dynamicProps;for(let ce=0;ce<ee.length;ce++){const fe=ee[ce],Ve=G[fe],Be=Q[fe];(Be!==Ve||fe==="value")&&o(H,fe,Ve,Be,L,C)}}j&1&&_.children!==b.children&&d(H,b.children)}else!q&&U==null&&S(H,G,Q,C,L);((se=Q.onVnodeUpdated)||Z)&&ht(()=>{se&&Ft(se,C,b,_),Z&&Vn(b,_,C,"updated")},D)},E=(_,b,C,D,L,x,q)=>{for(let H=0;H<b.length;H++){const j=_[H],U=b[H],Z=j.el&&(j.type===je||!qn(j,U)||j.shapeFlag&198)?g(j.el):C;M(j,U,Z,null,D,L,x,q,!0)}},S=(_,b,C,D,L)=>{if(b!==C){if(b!==Ae)for(const x in b)!er(x)&&!(x in C)&&o(_,x,b[x],null,L,D);for(const x in C){if(er(x))continue;const q=C[x],H=b[x];q!==H&&x!=="value"&&o(_,x,H,q,L,D)}"value"in C&&o(_,"value",b.value,C.value,L)}},I=(_,b,C,D,L,x,q,H,j)=>{const U=b.el=_?_.el:c(""),Z=b.anchor=_?_.anchor:c("");let{patchFlag:G,dynamicChildren:Q,slotScopeIds:se}=b;se&&(H=H?H.concat(se):se),_==null?(s(U,C,D),s(Z,C,D),y(b.children||[],C,Z,L,x,q,H,j)):G>0&&G&64&&Q&&_.dynamicChildren?(E(_.dynamicChildren,Q,C,L,x,q,H),(b.key!=null||L&&b===L.subTree)&&lf(_,b,!0)):ue(_,b,C,Z,L,x,q,H,j)},w=(_,b,C,D,L,x,q,H,j)=>{b.slotScopeIds=H,_==null?b.shapeFlag&512?L.ctx.activate(b,C,D,q,j):Te(b,C,D,L,x,q,j):Fe(_,b,j)},Te=(_,b,C,D,L,x,q)=>{const H=_.component=gm(_,D,L);if(Bi(_)&&(H.ctx.renderer=X),vm(H,!1,q),H.asyncDep){if(L&&L.registerDep(H,Pe,q),!_.el){const j=H.subTree=Me(nt);$(null,j,b,C)}}else Pe(H,_,b,C,L,x,q)},Fe=(_,b,C)=>{const D=b.component=_.component;if(im(_,b,C))if(D.asyncDep&&!D.asyncResolved){he(D,b,C);return}else D.next=b,D.update();else b.el=_.el,D.vnode=b},Pe=(_,b,C,D,L,x,q)=>{const H=()=>{if(_.isMounted){let{next:G,bu:Q,u:se,parent:ee,vnode:ce}=_;{const qe=cf(_);if(qe){G&&(G.el=ce.el,he(_,G,q)),qe.asyncDep.then(()=>{_.isUnmounted||H()});return}}let fe=G,Ve;Bn(_,!1),G?(G.el=ce.el,he(_,G,q)):G=ce,Q&&si(Q),(Ve=G.props&&G.props.onVnodeBeforeUpdate)&&Ft(Ve,ee,G,ce),Bn(_,!0);const Be=vc(_),gt=_.subTree;_.subTree=Be,M(gt,Be,g(gt.el),N(gt),_,L,x),G.el=Be.el,fe===null&&om(_,Be.el),se&&ht(se,L),(Ve=G.props&&G.props.onVnodeUpdated)&&ht(()=>Ft(Ve,ee,G,ce),L)}else{let G;const{el:Q,props:se}=b,{bm:ee,m:ce,parent:fe,root:Ve,type:Be}=_,gt=rr(b);Bn(_,!1),ee&&si(ee),!gt&&(G=se&&se.onVnodeBeforeMount)&&Ft(G,fe,b),Bn(_,!0);{Ve.ce&&Ve.ce._def.shadowRoot!==!1&&Ve.ce._injectChildStyle(Be);const qe=_.subTree=vc(_);M(null,qe,C,D,_,L,x),b.el=qe.el}if(ce&&ht(ce,L),!gt&&(G=se&&se.onVnodeMounted)){const qe=b;ht(()=>Ft(G,fe,qe),L)}(b.shapeFlag&256||fe&&rr(fe.vnode)&&fe.vnode.shapeFlag&256)&&_.a&&ht(_.a,L),_.isMounted=!0,b=C=D=null}};_.scope.on();const j=_.effect=new mh(H);_.scope.off();const U=_.update=j.run.bind(j),Z=_.job=j.runIfDirty.bind(j);Z.i=_,Z.id=_.uid,j.scheduler=()=>Ua(Z),Bn(_,!0),U()},he=(_,b,C)=>{b.component=_;const D=_.vnode.props;_.vnode=b,_.next=null,Hg(_,b.props,D,C),qg(_,b.children,C),ln(),lc(_),cn()},ue=(_,b,C,D,L,x,q,H,j=!1)=>{const U=_&&_.children,Z=_?_.shapeFlag:0,G=b.children,{patchFlag:Q,shapeFlag:se}=b;if(Q>0){if(Q&128){Et(U,G,C,D,L,x,q,H,j);return}else if(Q&256){ut(U,G,C,D,L,x,q,H,j);return}}se&8?(Z&16&&rt(U,L,x),G!==U&&d(C,G)):Z&16?se&16?Et(U,G,C,D,L,x,q,H,j):rt(U,L,x,!0):(Z&8&&d(C,""),se&16&&y(G,C,D,L,x,q,H,j))},ut=(_,b,C,D,L,x,q,H,j)=>{_=_||ws,b=b||ws;const U=_.length,Z=b.length,G=Math.min(U,Z);let Q;for(Q=0;Q<G;Q++){const se=b[Q]=j?Sn(b[Q]):Vt(b[Q]);M(_[Q],se,C,null,L,x,q,H,j)}U>Z?rt(_,L,x,!0,!1,G):y(b,C,D,L,x,q,H,j,G)},Et=(_,b,C,D,L,x,q,H,j)=>{let U=0;const Z=b.length;let G=_.length-1,Q=Z-1;for(;U<=G&&U<=Q;){const se=_[U],ee=b[U]=j?Sn(b[U]):Vt(b[U]);if(qn(se,ee))M(se,ee,C,null,L,x,q,H,j);else break;U++}for(;U<=G&&U<=Q;){const se=_[G],ee=b[Q]=j?Sn(b[Q]):Vt(b[Q]);if(qn(se,ee))M(se,ee,C,null,L,x,q,H,j);else break;G--,Q--}if(U>G){if(U<=Q){const se=Q+1,ee=se<Z?b[se].el:D;for(;U<=Q;)M(null,b[U]=j?Sn(b[U]):Vt(b[U]),C,ee,L,x,q,H,j),U++}}else if(U>Q)for(;U<=G;)Oe(_[U],L,x,!0),U++;else{const se=U,ee=U,ce=new Map;for(U=ee;U<=Q;U++){const He=b[U]=j?Sn(b[U]):Vt(b[U]);He.key!=null&&ce.set(He.key,U)}let fe,Ve=0;const Be=Q-ee+1;let gt=!1,qe=0;const gn=new Array(Be);for(U=0;U<Be;U++)gn[U]=0;for(U=se;U<=G;U++){const He=_[U];if(Ve>=Be){Oe(He,L,x,!0);continue}let mt;if(He.key!=null)mt=ce.get(He.key);else for(fe=ee;fe<=Q;fe++)if(gn[fe-ee]===0&&qn(He,b[fe])){mt=fe;break}mt===void 0?Oe(He,L,x,!0):(gn[mt-ee]=U+1,mt>=qe?qe=mt:gt=!0,M(He,b[mt],C,null,L,x,q,H,j),Ve++)}const Us=gt?Yg(gn):ws;for(fe=Us.length-1,U=Be-1;U>=0;U--){const He=ee+U,mt=b[He],Ur=He+1<Z?b[He+1].el:D;gn[U]===0?M(null,mt,C,Ur,L,x,q,H,j):gt&&(fe<0||U!==Us[fe]?pt(mt,C,Ur,2):fe--)}}},pt=(_,b,C,D,L=null)=>{const{el:x,type:q,transition:H,children:j,shapeFlag:U}=_;if(U&6){pt(_.component.subTree,b,C,D);return}if(U&128){_.suspense.move(b,C,D);return}if(U&64){q.move(_,b,C,X);return}if(q===je){s(x,b,C);for(let G=0;G<j.length;G++)pt(j[G],b,C,D);s(_.anchor,b,C);return}if(q===ii){V(_,b,C);return}if(D!==2&&U&1&&H)if(D===0)H.beforeEnter(x),s(x,b,C),ht(()=>H.enter(x),L);else{const{leave:G,delayLeave:Q,afterLeave:se}=H,ee=()=>{_.ctx.isUnmounted?r(x):s(x,b,C)},ce=()=>{G(x,()=>{ee(),se&&se()})};Q?Q(x,ee,ce):ce()}else s(x,b,C)},Oe=(_,b,C,D=!1,L=!1)=>{const{type:x,props:q,ref:H,children:j,dynamicChildren:U,shapeFlag:Z,patchFlag:G,dirs:Q,cacheIndex:se}=_;if(G===-2&&(L=!1),H!=null&&(ln(),sr(H,null,C,_,!0),cn()),se!=null&&(b.renderCache[se]=void 0),Z&256){b.ctx.deactivate(_);return}const ee=Z&1&&Q,ce=!rr(_);let fe;if(ce&&(fe=q&&q.onVnodeBeforeUnmount)&&Ft(fe,b,_),Z&6)Ut(_.component,C,D);else{if(Z&128){_.suspense.unmount(C,D);return}ee&&Vn(_,null,b,"beforeUnmount"),Z&64?_.type.remove(_,b,C,X,D):U&&!U.hasOnce&&(x!==je||G>0&&G&64)?rt(U,b,C,!1,!0):(x===je&&G&384||!L&&Z&16)&&rt(j,b,C),D&&Ne(_)}(ce&&(fe=q&&q.onVnodeUnmounted)||ee)&&ht(()=>{fe&&Ft(fe,b,_),ee&&Vn(_,null,b,"unmounted")},C)},Ne=_=>{const{type:b,el:C,anchor:D,transition:L}=_;if(b===je){pn(C,D);return}if(b===ii){B(_);return}const x=()=>{r(C),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(_.shapeFlag&1&&L&&!L.persisted){const{leave:q,delayLeave:H}=L,j=()=>q(C,x);H?H(_.el,x,j):j()}else x()},pn=(_,b)=>{let C;for(;_!==b;)C=v(_),r(_),_=C;r(b)},Ut=(_,b,C)=>{const{bum:D,scope:L,job:x,subTree:q,um:H,m:j,a:U,parent:Z,slots:{__:G}}=_;mc(j),mc(U),D&&si(D),Z&&ne(G)&&G.forEach(Q=>{Z.renderCache[Q]=void 0}),L.stop(),x&&(x.flags|=8,Oe(q,_,b,C)),H&&ht(H,b),ht(()=>{_.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},rt=(_,b,C,D=!1,L=!1,x=0)=>{for(let q=x;q<_.length;q++)Oe(_[q],b,C,D,L)},N=_=>{if(_.shapeFlag&6)return N(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const b=v(_.anchor||_.el),C=b&&b[_g];return C?v(C):b};let J=!1;const K=(_,b,C)=>{_==null?b._vnode&&Oe(b._vnode,null,null,!0):M(b._vnode||null,_,b,null,null,null,C),b._vnode=_,J||(J=!0,lc(),Mh(),J=!1)},X={p:M,um:Oe,m:pt,r:Ne,mt:Te,mc:y,pc:ue,pbc:E,n:N,o:t};return{render:K,hydrate:void 0,createApp:Vg(K)}}function Co({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Bn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Xg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function lf(t,e,n=!1){const s=t.children,r=e.children;if(ne(s)&&ne(r))for(let o=0;o<s.length;o++){const a=s[o];let c=r[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[o]=Sn(r[o]),c.el=a.el),!n&&c.patchFlag!==-2&&lf(a,c)),c.type===Gi&&(c.el=a.el),c.type===nt&&!c.el&&(c.el=a.el)}}function Yg(t){const e=t.slice(),n=[0];let s,r,o,a,c;const u=t.length;for(s=0;s<u;s++){const f=t[s];if(f!==0){if(r=n[n.length-1],t[r]<f){e[s]=r,n.push(s);continue}for(o=0,a=n.length-1;o<a;)c=o+a>>1,t[n[c]]<f?o=c+1:a=c;f<t[n[o]]&&(o>0&&(e[s]=n[o-1]),n[o]=s)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function cf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cf(e)}function mc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Qg=Symbol.for("v-scx"),Zg=()=>wt(Qg);function Zn(t,e,n){return uf(t,e,n)}function uf(t,e,n=Ae){const{immediate:s,deep:r,flush:o,once:a}=n,c=$e({},n),u=e&&s||!e&&o!=="post";let f;if(wr){if(o==="sync"){const T=Zg();f=T.__watcherHandles||(T.__watcherHandles=[])}else if(!u){const T=()=>{};return T.stop=Wt,T.resume=Wt,T.pause=Wt,T}}const d=Ge;c.call=(T,P,M)=>Nt(T,d,P,M);let g=!1;o==="post"?c.scheduler=T=>{ht(T,d&&d.suspense)}:o!=="sync"&&(g=!0,c.scheduler=(T,P)=>{P?T():Ua(T)}),c.augmentJob=T=>{e&&(T.flags|=4),g&&(T.flags|=2,d&&(T.id=d.uid,T.i=d))};const v=pg(t,e,c);return wr&&(f?f.push(v):u&&v()),v}function em(t,e,n){const s=this.proxy,r=Le(t)?t.includes(".")?hf(s,t):()=>s[t]:t.bind(s,s);let o;le(e)?o=e:(o=e.handler,n=e);const a=Rr(this),c=uf(r,o.bind(s),n);return a(),c}function hf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const tm=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${It(e)}Modifiers`]||t[`${Un(e)}Modifiers`];function nm(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ae;let r=n;const o=e.startsWith("update:"),a=o&&tm(s,e.slice(7));a&&(a.trim&&(r=n.map(d=>Le(d)?d.trim():d)),a.number&&(r=n.map(Ko)));let c,u=s[c=wo(e)]||s[c=wo(It(e))];!u&&o&&(u=s[c=wo(Un(e))]),u&&Nt(u,t,6,r);const f=s[c+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Nt(f,t,6,r)}}function ff(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const o=t.emits;let a={},c=!1;if(!le(t)){const u=f=>{const d=ff(f,e,!0);d&&(c=!0,$e(a,d))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!o&&!c?(Re(t)&&s.set(t,null),null):(ne(o)?o.forEach(u=>a[u]=null):$e(a,o),Re(t)&&s.set(t,a),a)}function zi(t,e){return!t||!Di(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,Un(e))||be(t,e))}function vc(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[o],slots:a,attrs:c,emit:u,render:f,renderCache:d,props:g,data:v,setupState:T,ctx:P,inheritAttrs:M}=t,z=mi(t);let $,F;try{if(n.shapeFlag&4){const B=r||s,oe=B;$=Vt(f.call(oe,B,d,g,T,v,P)),F=c}else{const B=e;$=Vt(B.length>1?B(g,{attrs:c,slots:a,emit:u}):B(g,null)),F=e.props?c:sm(c)}}catch(B){or.length=0,$i(B,t,1),$=Me(nt)}let V=$;if(F&&M!==!1){const B=Object.keys(F),{shapeFlag:oe}=V;B.length&&oe&7&&(o&&B.some(Aa)&&(F=rm(F,o)),V=xn(V,F,!1,!0))}return n.dirs&&(V=xn(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&yr(V,n.transition),$=V,mi(z),$}const sm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Di(n))&&((e||(e={}))[n]=t[n]);return e},rm=(t,e)=>{const n={};for(const s in t)(!Aa(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function im(t,e,n){const{props:s,children:r,component:o}=t,{props:a,children:c,patchFlag:u}=e,f=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?yc(s,a,f):!!a;if(u&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const v=d[g];if(a[v]!==s[v]&&!zi(f,v))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:s===a?!1:s?a?yc(s,a,f):!0:!!a;return!1}function yc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(e[o]!==t[o]&&!zi(n,o))return!0}return!1}function om({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const df=t=>t.__isSuspense;function am(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):vg(t)}const je=Symbol.for("v-fgt"),Gi=Symbol.for("v-txt"),nt=Symbol.for("v-cmt"),ii=Symbol.for("v-stc"),or=[];let ft=null;function re(t=!1){or.push(ft=t?null:[])}function lm(){or.pop(),ft=or[or.length-1]||null}let _r=1;function _c(t,e=!1){_r+=t,t<0&&ft&&e&&(ft.hasOnce=!0)}function pf(t){return t.dynamicChildren=_r>0?ft||ws:null,lm(),_r>0&&ft&&ft.push(t),t}function ae(t,e,n,s,r,o){return pf(R(t,e,n,s,r,o,!0))}function _i(t,e,n,s,r){return pf(Me(t,e,n,s,r,!0))}function wi(t){return t?t.__v_isVNode===!0:!1}function qn(t,e){return t.type===e.type&&t.key===e.key}const gf=({key:t})=>t??null,oi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Le(t)||Ye(t)||le(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function R(t,e=null,n=null,s=0,r=null,o=t===je?0:1,a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gf(e),ref:e&&oi(e),scopeId:Fh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:lt};return c?(Va(u,n),o&128&&t.normalize(u)):n&&(u.shapeFlag|=Le(n)?8:16),_r>0&&!a&&ft&&(u.patchFlag>0||o&6)&&u.patchFlag!==32&&ft.push(u),u}const Me=cm;function cm(t,e=null,n=null,s=0,r=null,o=!1){if((!t||t===Ng)&&(t=nt),wi(t)){const c=xn(t,e,!0);return n&&Va(c,n),_r>0&&!o&&ft&&(c.shapeFlag&6?ft[ft.indexOf(t)]=c:ft.push(c)),c.patchFlag=-2,c}if(Im(t)&&(t=t.__vccOpts),e){e=um(e);let{class:c,style:u}=e;c&&!Le(c)&&(e.class=an(c)),Re(u)&&(Ma(u)&&!ne(u)&&(u=$e({},u)),e.style=Ra(u))}const a=Le(t)?1:df(t)?128:jh(t)?64:Re(t)?4:le(t)?2:0;return R(t,e,n,s,r,a,o,!0)}function um(t){return t?Ma(t)||tf(t)?$e({},t):t:null}function xn(t,e,n=!1,s=!1){const{props:r,ref:o,patchFlag:a,children:c,transition:u}=t,f=e?fm(r||{},e):r,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&gf(f),ref:e&&e.ref?n&&o?ne(o)?o.concat(oi(e)):[o,oi(e)]:oi(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xn(t.ssContent),ssFallback:t.ssFallback&&xn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&s&&yr(d,u.clone(d)),d}function ot(t=" ",e=0){return Me(Gi,null,t,e)}function hm(t,e){const n=Me(ii,null,t);return n.staticCount=e,n}function at(t="",e=!1){return e?(re(),_i(nt,null,t)):Me(nt,null,t)}function Vt(t){return t==null||typeof t=="boolean"?Me(nt):ne(t)?Me(je,null,t.slice()):wi(t)?Sn(t):Me(Gi,null,String(t))}function Sn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xn(t)}function Va(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Va(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!tf(e)?e._ctx=lt:r===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),s&64?(n=16,e=[ot(e)]):n=8);t.children=e,t.shapeFlag|=n}function fm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=an([e.class,s.class]));else if(r==="style")e.style=Ra([e.style,s.style]);else if(Di(r)){const o=e[r],a=s[r];a&&o!==a&&!(ne(o)&&o.includes(a))&&(e[r]=o?[].concat(o,a):a)}else r!==""&&(e[r]=s[r])}return e}function Ft(t,e,n,s=null){Nt(t,e,7,[n,s])}const dm=Qh();let pm=0;function gm(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||dm,o={uid:pm++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sf(s,r),emitsOptions:ff(s,r),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:s.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=nm.bind(null,o),t.ce&&t.ce(o),o}let Ge=null;const mm=()=>Ge||lt;let bi,ra;{const t=Ui(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),o=>{r.length>1?r.forEach(a=>a(o)):r[0](o)}};bi=e("__VUE_INSTANCE_SETTERS__",n=>Ge=n),ra=e("__VUE_SSR_SETTERS__",n=>wr=n)}const Rr=t=>{const e=Ge;return bi(t),t.scope.on(),()=>{t.scope.off(),bi(e)}},wc=()=>{Ge&&Ge.scope.off(),bi(null)};function mf(t){return t.vnode.shapeFlag&4}let wr=!1;function vm(t,e=!1,n=!1){e&&ra(e);const{props:s,children:r}=t.vnode,o=mf(t);Bg(t,s,o,e),Gg(t,r,n||e);const a=o?ym(t,e):void 0;return e&&ra(!1),a}function ym(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,xg);const{setup:s}=n;if(s){ln();const r=t.setupContext=s.length>1?wm(t):null,o=Rr(t),a=Cr(s,t,0,[t.props,r]),c=uh(a);if(cn(),o(),(c||t.sp)&&!rr(t)&&zh(t),c){if(a.then(wc,wc),e)return a.then(u=>{bc(t,u)}).catch(u=>{$i(u,t,0)});t.asyncDep=a}else bc(t,a)}else vf(t)}function bc(t,e,n){le(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=Dh(e)),vf(t)}function vf(t,e,n){const s=t.type;t.render||(t.render=s.render||Wt);{const r=Rr(t);ln();try{Lg(t)}finally{cn(),r()}}}const _m={get(t,e){return Xe(t,"get",""),t[e]}};function wm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,_m),slots:t.slots,emit:t.emit,expose:e}}function qi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Dh(ag(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ir)return ir[n](t)},has(e,n){return n in e||n in ir}})):t.proxy}function bm(t,e=!0){return le(t)?t.displayName||t.name:t.name||e&&t.__name}function Im(t){return le(t)&&"__vccOpts"in t}const De=(t,e)=>fg(t,e,wr);function Ba(t,e,n){const s=arguments.length;return s===2?Re(e)&&!ne(e)?wi(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&wi(n)&&(n=[n]),Me(t,e,n))}const Em="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ia;const Ic=typeof window<"u"&&window.trustedTypes;if(Ic)try{ia=Ic.createPolicy("vue",{createHTML:t=>t})}catch{}const yf=ia?t=>ia.createHTML(t):t=>t,Tm="http://www.w3.org/2000/svg",Sm="http://www.w3.org/1998/Math/MathML",Zt=typeof document<"u"?document:null,Ec=Zt&&Zt.createElement("template"),Am={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Zt.createElementNS(Tm,t):e==="mathml"?Zt.createElementNS(Sm,t):n?Zt.createElement(t,{is:n}):Zt.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Zt.createTextNode(t),createComment:t=>Zt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,o){const a=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Ec.innerHTML=yf(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const c=Ec.content;if(s==="svg"||s==="mathml"){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_n="transition",Ys="animation",br=Symbol("_vtc"),_f={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Cm=$e({},$h,_f),km=t=>(t.displayName="Transition",t.props=Cm,t),wf=km((t,{slots:e})=>Ba(Ig,Rm(t),e)),Hn=(t,e=[])=>{ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},Tc=t=>t?ne(t)?t.some(e=>e.length>1):t.length>1:!1;function Rm(t){const e={};for(const I in t)I in _f||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:f=a,appearToClass:d=c,leaveFromClass:g=`${n}-leave-from`,leaveActiveClass:v=`${n}-leave-active`,leaveToClass:T=`${n}-leave-to`}=t,P=Pm(r),M=P&&P[0],z=P&&P[1],{onBeforeEnter:$,onEnter:F,onEnterCancelled:V,onLeave:B,onLeaveCancelled:oe,onBeforeAppear:te=$,onAppear:A=F,onAppearCancelled:y=V}=e,m=(I,w,Te,Fe)=>{I._enterCancelled=Fe,Wn(I,w?d:c),Wn(I,w?f:a),Te&&Te()},E=(I,w)=>{I._isLeaving=!1,Wn(I,g),Wn(I,T),Wn(I,v),w&&w()},S=I=>(w,Te)=>{const Fe=I?A:F,Pe=()=>m(w,I,Te);Hn(Fe,[w,Pe]),Sc(()=>{Wn(w,I?u:o),Yt(w,I?d:c),Tc(Fe)||Ac(w,s,M,Pe)})};return $e(e,{onBeforeEnter(I){Hn($,[I]),Yt(I,o),Yt(I,a)},onBeforeAppear(I){Hn(te,[I]),Yt(I,u),Yt(I,f)},onEnter:S(!1),onAppear:S(!0),onLeave(I,w){I._isLeaving=!0;const Te=()=>E(I,w);Yt(I,g),I._enterCancelled?(Yt(I,v),Rc()):(Rc(),Yt(I,v)),Sc(()=>{I._isLeaving&&(Wn(I,g),Yt(I,T),Tc(B)||Ac(I,s,z,Te))}),Hn(B,[I,Te])},onEnterCancelled(I){m(I,!1,void 0,!0),Hn(V,[I])},onAppearCancelled(I){m(I,!0,void 0,!0),Hn(y,[I])},onLeaveCancelled(I){E(I),Hn(oe,[I])}})}function Pm(t){if(t==null)return null;if(Re(t))return[ko(t.enter),ko(t.leave)];{const e=ko(t);return[e,e]}}function ko(t){return xp(t)}function Yt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[br]||(t[br]=new Set)).add(e)}function Wn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[br];n&&(n.delete(e),n.size||(t[br]=void 0))}function Sc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Om=0;function Ac(t,e,n,s){const r=t._endId=++Om,o=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(o,n);const{type:a,timeout:c,propCount:u}=Nm(t,e);if(!a)return s();const f=a+"end";let d=0;const g=()=>{t.removeEventListener(f,v),o()},v=T=>{T.target===t&&++d>=u&&g()};setTimeout(()=>{d<u&&g()},c+1),t.addEventListener(f,v)}function Nm(t,e){const n=window.getComputedStyle(t),s=P=>(n[P]||"").split(", "),r=s(`${_n}Delay`),o=s(`${_n}Duration`),a=Cc(r,o),c=s(`${Ys}Delay`),u=s(`${Ys}Duration`),f=Cc(c,u);let d=null,g=0,v=0;e===_n?a>0&&(d=_n,g=a,v=o.length):e===Ys?f>0&&(d=Ys,g=f,v=u.length):(g=Math.max(a,f),d=g>0?a>f?_n:Ys:null,v=d?d===_n?o.length:u.length:0);const T=d===_n&&/\b(transform|all)(,|$)/.test(s(`${_n}Property`).toString());return{type:d,timeout:g,propCount:v,hasTransform:T}}function Cc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>kc(n)+kc(t[s])))}function kc(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Rc(){return document.body.offsetHeight}function Dm(t,e,n){const s=t[br];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Pc=Symbol("_vod"),xm=Symbol("_vsh"),Lm=Symbol(""),Mm=/(^|;)\s*display\s*:/;function Um(t,e,n){const s=t.style,r=Le(n);let o=!1;if(n&&!r){if(e)if(Le(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&ai(s,c,"")}else for(const a in e)n[a]==null&&ai(s,a,"");for(const a in n)a==="display"&&(o=!0),ai(s,a,n[a])}else if(r){if(e!==n){const a=s[Lm];a&&(n+=";"+a),s.cssText=n,o=Mm.test(n)}}else e&&t.removeAttribute("style");Pc in t&&(t[Pc]=o?s.display:"",t[xm]&&(s.display="none"))}const Oc=/\s*!important$/;function ai(t,e,n){if(ne(n))n.forEach(s=>ai(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Fm(t,e);Oc.test(n)?t.setProperty(Un(s),n.replace(Oc,""),"important"):t[s]=n}}const Nc=["Webkit","Moz","ms"],Ro={};function Fm(t,e){const n=Ro[e];if(n)return n;let s=It(e);if(s!=="filter"&&s in t)return Ro[e]=s;s=Mi(s);for(let r=0;r<Nc.length;r++){const o=Nc[r]+s;if(o in t)return Ro[e]=o}return e}const Dc="http://www.w3.org/1999/xlink";function xc(t,e,n,s,r,o=$p(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Dc,e.slice(6,e.length)):t.setAttributeNS(Dc,e,n):n==null||o&&!dh(n)?t.removeAttribute(e):t.setAttribute(e,o?"":Mn(n)?String(n):n)}function Lc(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?yf(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=dh(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function ys(t,e,n,s){t.addEventListener(e,n,s)}function jm(t,e,n,s){t.removeEventListener(e,n,s)}const Mc=Symbol("_vei");function $m(t,e,n,s,r=null){const o=t[Mc]||(t[Mc]={}),a=o[e];if(s&&a)a.value=s;else{const[c,u]=Vm(e);if(s){const f=o[e]=Wm(s,r);ys(t,c,f,u)}else a&&(jm(t,c,a,u),o[e]=void 0)}}const Uc=/(?:Once|Passive|Capture)$/;function Vm(t){let e;if(Uc.test(t)){e={};let s;for(;s=t.match(Uc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Un(t.slice(2)),e]}let Po=0;const Bm=Promise.resolve(),Hm=()=>Po||(Bm.then(()=>Po=0),Po=Date.now());function Wm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Nt(zm(s,n.value),e,5,[s])};return n.value=t,n.attached=Hm(),n}function zm(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Fc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Gm=(t,e,n,s,r,o)=>{const a=r==="svg";e==="class"?Dm(t,s,a):e==="style"?Um(t,n,s):Di(e)?Aa(e)||$m(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qm(t,e,s,a))?(Lc(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xc(t,e,s,a,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Le(s))?Lc(t,It(e),s,o,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),xc(t,e,s,a))};function qm(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Fc(e)&&le(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Fc(e)&&Le(n)?!1:e in t}const jc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>si(e,n):e};function Km(t){t.target.composing=!0}function $c(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Oo=Symbol("_assign"),Jm={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Oo]=jc(r);const o=s||r.props&&r.props.type==="number";ys(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),o&&(c=Ko(c)),t[Oo](c)}),n&&ys(t,"change",()=>{t.value=t.value.trim()}),e||(ys(t,"compositionstart",Km),ys(t,"compositionend",$c),ys(t,"change",$c))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:o}},a){if(t[Oo]=jc(a),t.composing)return;const c=(o||t.type==="number")&&!/^0\d/.test(t.value)?Ko(t.value):t.value,u=e??"";c!==u&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===u)||(t.value=u))}},Xm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Vc=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=r=>{if(!("key"in r))return;const o=Un(r.key);if(e.some(a=>a===o||Xm[a]===o))return t(r)})},Ym=$e({patchProp:Gm},Am);let Bc;function Qm(){return Bc||(Bc=Kg(Ym))}const Zm=(...t)=>{const e=Qm().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=tv(s);if(!r)return;const o=e._component;!le(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,ev(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function ev(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function tv(t){return Le(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const _s=typeof document<"u";function bf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function nv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&bf(t.default)}const we=Object.assign;function No(t,e){const n={};for(const s in e){const r=e[s];n[s]=Dt(r)?r.map(t):t(r)}return n}const ar=()=>{},Dt=Array.isArray,If=/#/g,sv=/&/g,rv=/\//g,iv=/=/g,ov=/\?/g,Ef=/\+/g,av=/%5B/g,lv=/%5D/g,Tf=/%5E/g,cv=/%60/g,Sf=/%7B/g,uv=/%7C/g,Af=/%7D/g,hv=/%20/g;function Ha(t){return encodeURI(""+t).replace(uv,"|").replace(av,"[").replace(lv,"]")}function fv(t){return Ha(t).replace(Sf,"{").replace(Af,"}").replace(Tf,"^")}function oa(t){return Ha(t).replace(Ef,"%2B").replace(hv,"+").replace(If,"%23").replace(sv,"%26").replace(cv,"`").replace(Sf,"{").replace(Af,"}").replace(Tf,"^")}function dv(t){return oa(t).replace(iv,"%3D")}function pv(t){return Ha(t).replace(If,"%23").replace(ov,"%3F")}function gv(t){return t==null?"":pv(t).replace(rv,"%2F")}function Ir(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const mv=/\/$/,vv=t=>t.replace(mv,"");function Do(t,e,n="/"){let s,r={},o="",a="";const c=e.indexOf("#");let u=e.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(s=e.slice(0,u),o=e.slice(u+1,c>-1?c:e.length),r=t(o)),c>-1&&(s=s||e.slice(0,c),a=e.slice(c,e.length)),s=bv(s??e,n),{fullPath:s+(o&&"?")+o+a,path:s,query:r,hash:Ir(a)}}function yv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Hc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function _v(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ps(e.matched[s],n.matched[r])&&Cf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ps(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Cf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!wv(t[n],e[n]))return!1;return!0}function wv(t,e){return Dt(t)?Wc(t,e):Dt(e)?Wc(e,t):t===e}function Wc(t,e){return Dt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function bv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let o=n.length-1,a,c;for(a=0;a<s.length;a++)if(c=s[a],c!==".")if(c==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(a).join("/")}const wn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Er;(function(t){t.pop="pop",t.push="push"})(Er||(Er={}));var lr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(lr||(lr={}));function Iv(t){if(!t)if(_s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),vv(t)}const Ev=/^[^#]+#/;function Tv(t,e){return t.replace(Ev,"#")+e}function Sv(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ki=()=>({left:window.scrollX,top:window.scrollY});function Av(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Sv(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function zc(t,e){return(history.state?history.state.position-e:-1)+t}const aa=new Map;function Cv(t,e){aa.set(t,e)}function kv(t){const e=aa.get(t);return aa.delete(t),e}let Rv=()=>location.protocol+"//"+location.host;function kf(t,e){const{pathname:n,search:s,hash:r}=e,o=t.indexOf("#");if(o>-1){let c=r.includes(t.slice(o))?t.slice(o).length:1,u=r.slice(c);return u[0]!=="/"&&(u="/"+u),Hc(u,"")}return Hc(n,t)+s+r}function Pv(t,e,n,s){let r=[],o=[],a=null;const c=({state:v})=>{const T=kf(t,location),P=n.value,M=e.value;let z=0;if(v){if(n.value=T,e.value=v,a&&a===P){a=null;return}z=M?v.position-M.position:0}else s(T);r.forEach($=>{$(n.value,P,{delta:z,type:Er.pop,direction:z?z>0?lr.forward:lr.back:lr.unknown})})};function u(){a=n.value}function f(v){r.push(v);const T=()=>{const P=r.indexOf(v);P>-1&&r.splice(P,1)};return o.push(T),T}function d(){const{history:v}=window;v.state&&v.replaceState(we({},v.state,{scroll:Ki()}),"")}function g(){for(const v of o)v();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:u,listen:f,destroy:g}}function Gc(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Ki():null}}function Ov(t){const{history:e,location:n}=window,s={value:kf(t,n)},r={value:e.state};r.value||o(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(u,f,d){const g=t.indexOf("#"),v=g>-1?(n.host&&document.querySelector("base")?t:t.slice(g))+u:Rv()+t+u;try{e[d?"replaceState":"pushState"](f,"",v),r.value=f}catch(T){console.error(T),n[d?"replace":"assign"](v)}}function a(u,f){const d=we({},e.state,Gc(r.value.back,u,r.value.forward,!0),f,{position:r.value.position});o(u,d,!0),s.value=u}function c(u,f){const d=we({},r.value,e.state,{forward:u,scroll:Ki()});o(d.current,d,!0);const g=we({},Gc(s.value,u,null),{position:d.position+1},f);o(u,g,!1),s.value=u}return{location:s,state:r,push:c,replace:a}}function Nv(t){t=Iv(t);const e=Ov(t),n=Pv(t,e.state,e.location,e.replace);function s(o,a=!0){a||n.pauseListeners(),history.go(o)}const r=we({location:"",base:t,go:s,createHref:Tv.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Dv(t){return typeof t=="string"||t&&typeof t=="object"}function Rf(t){return typeof t=="string"||typeof t=="symbol"}const Pf=Symbol("");var qc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(qc||(qc={}));function Os(t,e){return we(new Error,{type:t,[Pf]:!0},e)}function Qt(t,e){return t instanceof Error&&Pf in t&&(e==null||!!(t.type&e))}const Kc="[^/]+?",xv={sensitive:!1,strict:!1,start:!0,end:!0},Lv=/[.+*?^${}()[\]/\\]/g;function Mv(t,e){const n=we({},xv,e),s=[];let r=n.start?"^":"";const o=[];for(const f of t){const d=f.length?[]:[90];n.strict&&!f.length&&(r+="/");for(let g=0;g<f.length;g++){const v=f[g];let T=40+(n.sensitive?.25:0);if(v.type===0)g||(r+="/"),r+=v.value.replace(Lv,"\\$&"),T+=40;else if(v.type===1){const{value:P,repeatable:M,optional:z,regexp:$}=v;o.push({name:P,repeatable:M,optional:z});const F=$||Kc;if(F!==Kc){T+=10;try{new RegExp(`(${F})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${P}" (${F}): `+B.message)}}let V=M?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;g||(V=z&&f.length<2?`(?:/${V})`:"/"+V),z&&(V+="?"),r+=V,T+=20,z&&(T+=-8),M&&(T+=-20),F===".*"&&(T+=-50)}d.push(T)}s.push(d)}if(n.strict&&n.end){const f=s.length-1;s[f][s[f].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function c(f){const d=f.match(a),g={};if(!d)return null;for(let v=1;v<d.length;v++){const T=d[v]||"",P=o[v-1];g[P.name]=T&&P.repeatable?T.split("/"):T}return g}function u(f){let d="",g=!1;for(const v of t){(!g||!d.endsWith("/"))&&(d+="/"),g=!1;for(const T of v)if(T.type===0)d+=T.value;else if(T.type===1){const{value:P,repeatable:M,optional:z}=T,$=P in f?f[P]:"";if(Dt($)&&!M)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const F=Dt($)?$.join("/"):$;if(!F)if(z)v.length<2&&(d.endsWith("/")?d=d.slice(0,-1):g=!0);else throw new Error(`Missing required param "${P}"`);d+=F}}return d||"/"}return{re:a,score:s,keys:o,parse:c,stringify:u}}function Uv(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Of(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const o=Uv(s[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-s.length)===1){if(Jc(s))return 1;if(Jc(r))return-1}return r.length-s.length}function Jc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Fv={type:0,value:""},jv=/[a-zA-Z0-9_]/;function $v(t){if(!t)return[[]];if(t==="/")return[[Fv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(T){throw new Error(`ERR (${n})/"${f}": ${T}`)}let n=0,s=n;const r=[];let o;function a(){o&&r.push(o),o=[]}let c=0,u,f="",d="";function g(){f&&(n===0?o.push({type:0,value:f}):n===1||n===2||n===3?(o.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),f="")}function v(){f+=u}for(;c<t.length;){if(u=t[c++],u==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:u==="/"?(f&&g(),a()):u===":"?(g(),n=1):v();break;case 4:v(),n=s;break;case 1:u==="("?n=2:jv.test(u)?v():(g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:n=3:d+=u;break;case 3:g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),g(),a(),r}function Vv(t,e,n){const s=Mv($v(t.path),n),r=we(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Bv(t,e){const n=[],s=new Map;e=Zc({strict:!1,end:!0,sensitive:!1},e);function r(g){return s.get(g)}function o(g,v,T){const P=!T,M=Yc(g);M.aliasOf=T&&T.record;const z=Zc(e,g),$=[M];if("alias"in g){const B=typeof g.alias=="string"?[g.alias]:g.alias;for(const oe of B)$.push(Yc(we({},M,{components:T?T.record.components:M.components,path:oe,aliasOf:T?T.record:M})))}let F,V;for(const B of $){const{path:oe}=B;if(v&&oe[0]!=="/"){const te=v.record.path,A=te[te.length-1]==="/"?"":"/";B.path=v.record.path+(oe&&A+oe)}if(F=Vv(B,v,z),T?T.alias.push(F):(V=V||F,V!==F&&V.alias.push(F),P&&g.name&&!Qc(F)&&a(g.name)),Nf(F)&&u(F),M.children){const te=M.children;for(let A=0;A<te.length;A++)o(te[A],F,T&&T.children[A])}T=T||F}return V?()=>{a(V)}:ar}function a(g){if(Rf(g)){const v=s.get(g);v&&(s.delete(g),n.splice(n.indexOf(v),1),v.children.forEach(a),v.alias.forEach(a))}else{const v=n.indexOf(g);v>-1&&(n.splice(v,1),g.record.name&&s.delete(g.record.name),g.children.forEach(a),g.alias.forEach(a))}}function c(){return n}function u(g){const v=zv(g,n);n.splice(v,0,g),g.record.name&&!Qc(g)&&s.set(g.record.name,g)}function f(g,v){let T,P={},M,z;if("name"in g&&g.name){if(T=s.get(g.name),!T)throw Os(1,{location:g});z=T.record.name,P=we(Xc(v.params,T.keys.filter(V=>!V.optional).concat(T.parent?T.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),g.params&&Xc(g.params,T.keys.map(V=>V.name))),M=T.stringify(P)}else if(g.path!=null)M=g.path,T=n.find(V=>V.re.test(M)),T&&(P=T.parse(M),z=T.record.name);else{if(T=v.name?s.get(v.name):n.find(V=>V.re.test(v.path)),!T)throw Os(1,{location:g,currentLocation:v});z=T.record.name,P=we({},v.params,g.params),M=T.stringify(P)}const $=[];let F=T;for(;F;)$.unshift(F.record),F=F.parent;return{name:z,path:M,params:P,matched:$,meta:Wv($)}}t.forEach(g=>o(g));function d(){n.length=0,s.clear()}return{addRoute:o,resolve:f,removeRoute:a,clearRoutes:d,getRoutes:c,getRecordMatcher:r}}function Xc(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Yc(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Hv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Hv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Qc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Wv(t){return t.reduce((e,n)=>we(e,n.meta),{})}function Zc(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function zv(t,e){let n=0,s=e.length;for(;n!==s;){const o=n+s>>1;Of(t,e[o])<0?s=o:n=o+1}const r=Gv(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function Gv(t){let e=t;for(;e=e.parent;)if(Nf(e)&&Of(t,e)===0)return e}function Nf({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function qv(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const o=s[r].replace(Ef," "),a=o.indexOf("="),c=Ir(a<0?o:o.slice(0,a)),u=a<0?null:Ir(o.slice(a+1));if(c in e){let f=e[c];Dt(f)||(f=e[c]=[f]),f.push(u)}else e[c]=u}return e}function eu(t){let e="";for(let n in t){const s=t[n];if(n=dv(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Dt(s)?s.map(o=>o&&oa(o)):[s&&oa(s)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function Kv(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Dt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Df=Symbol(""),tu=Symbol(""),Ji=Symbol(""),Wa=Symbol(""),la=Symbol("");function Qs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Jv(t,e,n){const s=()=>{t[e].delete(n)};Wi(s),qh(s),Gh(()=>{t[e].add(n)}),t[e].add(n)}function Xv(t){const e=wt(Df,{}).value;e&&Jv(e,"leaveGuards",t)}function An(t,e,n,s,r,o=a=>a()){const a=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((c,u)=>{const f=v=>{v===!1?u(Os(4,{from:n,to:e})):v instanceof Error?u(v):Dv(v)?u(Os(2,{from:e,to:v})):(a&&s.enterCallbacks[r]===a&&typeof v=="function"&&a.push(v),c())},d=o(()=>t.call(s&&s.instances[r],e,n,f));let g=Promise.resolve(d);t.length<3&&(g=g.then(f)),g.catch(v=>u(v))})}function xo(t,e,n,s,r=o=>o()){const o=[];for(const a of t)for(const c in a.components){let u=a.components[c];if(!(e!=="beforeRouteEnter"&&!a.instances[c]))if(bf(u)){const d=(u.__vccOpts||u)[e];d&&o.push(An(d,n,s,a,c,r))}else{let f=u();o.push(()=>f.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${a.path}"`);const g=nv(d)?d.default:d;a.mods[c]=d,a.components[c]=g;const T=(g.__vccOpts||g)[e];return T&&An(T,n,s,a,c,r)()}))}}return o}function nu(t){const e=wt(Ji),n=wt(Wa),s=De(()=>{const u=me(t.to);return e.resolve(u)}),r=De(()=>{const{matched:u}=s.value,{length:f}=u,d=u[f-1],g=n.matched;if(!d||!g.length)return-1;const v=g.findIndex(Ps.bind(null,d));if(v>-1)return v;const T=su(u[f-2]);return f>1&&su(d)===T&&g[g.length-1].path!==T?g.findIndex(Ps.bind(null,u[f-2])):v}),o=De(()=>r.value>-1&&ty(n.params,s.value.params)),a=De(()=>r.value>-1&&r.value===n.matched.length-1&&Cf(n.params,s.value.params));function c(u={}){if(ey(u)){const f=e[me(t.replace)?"replace":"push"](me(t.to)).catch(ar);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:s,href:De(()=>s.value.href),isActive:o,isExactActive:a,navigate:c}}function Yv(t){return t.length===1?t[0]:t}const Qv=kr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:nu,setup(t,{slots:e}){const n=ji(nu(t)),{options:s}=wt(Ji),r=De(()=>({[ru(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ru(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&Yv(e.default(n));return t.custom?o:Ba("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),Zv=Qv;function ey(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ty(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Dt(r)||r.length!==s.length||s.some((o,a)=>o!==r[a]))return!1}return!0}function su(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ru=(t,e,n)=>t??e??n,ny=kr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=wt(la),r=De(()=>t.route||s.value),o=wt(tu,0),a=De(()=>{let f=me(o);const{matched:d}=r.value;let g;for(;(g=d[f])&&!g.components;)f++;return f}),c=De(()=>r.value.matched[a.value]);ri(tu,De(()=>a.value+1)),ri(Df,c),ri(la,r);const u=Ee();return Zn(()=>[u.value,c.value,t.name],([f,d,g],[v,T,P])=>{d&&(d.instances[g]=f,T&&T!==d&&f&&f===v&&(d.leaveGuards.size||(d.leaveGuards=T.leaveGuards),d.updateGuards.size||(d.updateGuards=T.updateGuards))),f&&d&&(!T||!Ps(d,T)||!v)&&(d.enterCallbacks[g]||[]).forEach(M=>M(f))},{flush:"post"}),()=>{const f=r.value,d=t.name,g=c.value,v=g&&g.components[d];if(!v)return iu(n.default,{Component:v,route:f});const T=g.props[d],P=T?T===!0?f.params:typeof T=="function"?T(f):T:null,z=Ba(v,we({},P,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(g.instances[d]=null)},ref:u}));return iu(n.default,{Component:z,route:f})||z}}});function iu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const sy=ny;function ry(t){const e=Bv(t.routes,t),n=t.parseQuery||qv,s=t.stringifyQuery||eu,r=t.history,o=Qs(),a=Qs(),c=Qs(),u=lg(wn);let f=wn;_s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=No.bind(null,N=>""+N),g=No.bind(null,gv),v=No.bind(null,Ir);function T(N,J){let K,X;return Rf(N)?(K=e.getRecordMatcher(N),X=J):X=N,e.addRoute(X,K)}function P(N){const J=e.getRecordMatcher(N);J&&e.removeRoute(J)}function M(){return e.getRoutes().map(N=>N.record)}function z(N){return!!e.getRecordMatcher(N)}function $(N,J){if(J=we({},J||u.value),typeof N=="string"){const C=Do(n,N,J.path),D=e.resolve({path:C.path},J),L=r.createHref(C.fullPath);return we(C,D,{params:v(D.params),hash:Ir(C.hash),redirectedFrom:void 0,href:L})}let K;if(N.path!=null)K=we({},N,{path:Do(n,N.path,J.path).path});else{const C=we({},N.params);for(const D in C)C[D]==null&&delete C[D];K=we({},N,{params:g(C)}),J.params=g(J.params)}const X=e.resolve(K,J),ve=N.hash||"";X.params=d(v(X.params));const _=yv(s,we({},N,{hash:fv(ve),path:X.path})),b=r.createHref(_);return we({fullPath:_,hash:ve,query:s===eu?Kv(N.query):N.query||{}},X,{redirectedFrom:void 0,href:b})}function F(N){return typeof N=="string"?Do(n,N,u.value.path):we({},N)}function V(N,J){if(f!==N)return Os(8,{from:J,to:N})}function B(N){return A(N)}function oe(N){return B(we(F(N),{replace:!0}))}function te(N){const J=N.matched[N.matched.length-1];if(J&&J.redirect){const{redirect:K}=J;let X=typeof K=="function"?K(N):K;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=F(X):{path:X},X.params={}),we({query:N.query,hash:N.hash,params:X.path!=null?{}:N.params},X)}}function A(N,J){const K=f=$(N),X=u.value,ve=N.state,_=N.force,b=N.replace===!0,C=te(K);if(C)return A(we(F(C),{state:typeof C=="object"?we({},ve,C.state):ve,force:_,replace:b}),J||K);const D=K;D.redirectedFrom=J;let L;return!_&&_v(s,X,K)&&(L=Os(16,{to:D,from:X}),pt(X,X,!0,!1)),(L?Promise.resolve(L):E(D,X)).catch(x=>Qt(x)?Qt(x,2)?x:Et(x):ue(x,D,X)).then(x=>{if(x){if(Qt(x,2))return A(we({replace:b},F(x.to),{state:typeof x.to=="object"?we({},ve,x.to.state):ve,force:_}),J||D)}else x=I(D,X,!0,b,ve);return S(D,X,x),x})}function y(N,J){const K=V(N,J);return K?Promise.reject(K):Promise.resolve()}function m(N){const J=pn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(N):N()}function E(N,J){let K;const[X,ve,_]=iy(N,J);K=xo(X.reverse(),"beforeRouteLeave",N,J);for(const C of X)C.leaveGuards.forEach(D=>{K.push(An(D,N,J))});const b=y.bind(null,N,J);return K.push(b),rt(K).then(()=>{K=[];for(const C of o.list())K.push(An(C,N,J));return K.push(b),rt(K)}).then(()=>{K=xo(ve,"beforeRouteUpdate",N,J);for(const C of ve)C.updateGuards.forEach(D=>{K.push(An(D,N,J))});return K.push(b),rt(K)}).then(()=>{K=[];for(const C of _)if(C.beforeEnter)if(Dt(C.beforeEnter))for(const D of C.beforeEnter)K.push(An(D,N,J));else K.push(An(C.beforeEnter,N,J));return K.push(b),rt(K)}).then(()=>(N.matched.forEach(C=>C.enterCallbacks={}),K=xo(_,"beforeRouteEnter",N,J,m),K.push(b),rt(K))).then(()=>{K=[];for(const C of a.list())K.push(An(C,N,J));return K.push(b),rt(K)}).catch(C=>Qt(C,8)?C:Promise.reject(C))}function S(N,J,K){c.list().forEach(X=>m(()=>X(N,J,K)))}function I(N,J,K,X,ve){const _=V(N,J);if(_)return _;const b=J===wn,C=_s?history.state:{};K&&(X||b?r.replace(N.fullPath,we({scroll:b&&C&&C.scroll},ve)):r.push(N.fullPath,ve)),u.value=N,pt(N,J,K,b),Et()}let w;function Te(){w||(w=r.listen((N,J,K)=>{if(!Ut.listening)return;const X=$(N),ve=te(X);if(ve){A(we(ve,{replace:!0,force:!0}),X).catch(ar);return}f=X;const _=u.value;_s&&Cv(zc(_.fullPath,K.delta),Ki()),E(X,_).catch(b=>Qt(b,12)?b:Qt(b,2)?(A(we(F(b.to),{force:!0}),X).then(C=>{Qt(C,20)&&!K.delta&&K.type===Er.pop&&r.go(-1,!1)}).catch(ar),Promise.reject()):(K.delta&&r.go(-K.delta,!1),ue(b,X,_))).then(b=>{b=b||I(X,_,!1),b&&(K.delta&&!Qt(b,8)?r.go(-K.delta,!1):K.type===Er.pop&&Qt(b,20)&&r.go(-1,!1)),S(X,_,b)}).catch(ar)}))}let Fe=Qs(),Pe=Qs(),he;function ue(N,J,K){Et(N);const X=Pe.list();return X.length?X.forEach(ve=>ve(N,J,K)):console.error(N),Promise.reject(N)}function ut(){return he&&u.value!==wn?Promise.resolve():new Promise((N,J)=>{Fe.add([N,J])})}function Et(N){return he||(he=!N,Te(),Fe.list().forEach(([J,K])=>N?K(N):J()),Fe.reset()),N}function pt(N,J,K,X){const{scrollBehavior:ve}=t;if(!_s||!ve)return Promise.resolve();const _=!K&&kv(zc(N.fullPath,0))||(X||!K)&&history.state&&history.state.scroll||null;return Rs().then(()=>ve(N,J,_)).then(b=>b&&Av(b)).catch(b=>ue(b,N,J))}const Oe=N=>r.go(N);let Ne;const pn=new Set,Ut={currentRoute:u,listening:!0,addRoute:T,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:z,getRoutes:M,resolve:$,options:t,push:B,replace:oe,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:o.add,beforeResolve:a.add,afterEach:c.add,onError:Pe.add,isReady:ut,install(N){const J=this;N.component("RouterLink",Zv),N.component("RouterView",sy),N.config.globalProperties.$router=J,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>me(u)}),_s&&!Ne&&u.value===wn&&(Ne=!0,B(r.location).catch(ve=>{}));const K={};for(const ve in wn)Object.defineProperty(K,ve,{get:()=>u.value[ve],enumerable:!0});N.provide(Ji,J),N.provide(Wa,Ph(K)),N.provide(la,u);const X=N.unmount;pn.add(N),N.unmount=function(){pn.delete(N),pn.size<1&&(f=wn,w&&w(),w=null,u.value=wn,Ne=!1,he=!1),X()}}};function rt(N){return N.reduce((J,K)=>J.then(()=>m(K)),Promise.resolve())}return Ut}function iy(t,e){const n=[],s=[],r=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const c=e.matched[a];c&&(t.matched.find(f=>Ps(f,c))?s.push(c):n.push(c));const u=t.matched[a];u&&(e.matched.find(f=>Ps(f,u))||r.push(u))}return[n,s,r]}function xs(){return wt(Ji)}function oy(t){return wt(Wa)}const ay=()=>{};var ou={};/**
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
 */const xf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ly=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[n++],a=t[n++],c=t[n++],u=((r&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],a=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Lf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const o=t[r],a=r+1<t.length,c=a?t[r+1]:0,u=r+2<t.length,f=u?t[r+2]:0,d=o>>2,g=(o&3)<<4|c>>4;let v=(c&15)<<2|f>>6,T=f&63;u||(T=64,a||(v=64)),s.push(n[d],n[g],n[v],n[T])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ly(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const o=n[t.charAt(r++)],c=r<t.length?n[t.charAt(r)]:0;++r;const f=r<t.length?n[t.charAt(r)]:64;++r;const g=r<t.length?n[t.charAt(r)]:64;if(++r,o==null||c==null||f==null||g==null)throw new cy;const v=o<<2|c>>4;if(s.push(v),f!==64){const T=c<<4&240|f>>2;if(s.push(T),g!==64){const P=f<<6&192|g;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uy=function(t){const e=xf(t);return Lf.encodeByteArray(e,!0)},Ii=function(t){return uy(t).replace(/\./g,"")},Mf=function(t){try{return Lf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fy=()=>hy().__FIREBASE_DEFAULTS__,dy=()=>{if(typeof process>"u"||typeof ou>"u")return;const t=ou.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},py=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Mf(t[1]);return e&&JSON.parse(e)},za=()=>{try{return ay()||fy()||dy()||py()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Uf=t=>{var e,n;return(n=(e=za())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gy=t=>{const e=Uf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ff=()=>{var t;return(t=za())===null||t===void 0?void 0:t.config},jf=t=>{var e;return(e=za())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class my{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Pr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $f(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function vy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ii(JSON.stringify(n)),Ii(JSON.stringify(a)),""].join(".")}const cr={};function yy(){const t={prod:[],emulator:[]};for(const e of Object.keys(cr))cr[e]?t.emulator.push(e):t.prod.push(e);return t}function _y(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let au=!1;function Vf(t,e){if(typeof window>"u"||typeof document>"u"||!Pr(window.location.host)||cr[t]===e||cr[t]||au)return;cr[t]=e;function n(v){return`__firebase__banner__${v}`}const s="__firebase__banner",o=yy().prod.length>0;function a(){const v=document.getElementById(s);v&&v.remove()}function c(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function u(v,T){v.setAttribute("width","24"),v.setAttribute("id",T),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function f(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{au=!0,a()},v}function d(v,T){v.setAttribute("id",T),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function g(){const v=_y(s),T=n("text"),P=document.getElementById(T)||document.createElement("span"),M=n("learnmore"),z=document.getElementById(M)||document.createElement("a"),$=n("preprendIcon"),F=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const V=v.element;c(V),d(z,M);const B=f();u(F,$),V.append(F,P,z,B),document.body.appendChild(V)}o?(P.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function by(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Iy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ey(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Hf(){try{return typeof indexedDB=="object"}catch{return!1}}function Wf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function Ty(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Sy="FirebaseError";class Lt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Sy,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cs.prototype.create)}}class cs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?Ay(o,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new Lt(r,c,s)}}function Ay(t,e){return t.replace(Cy,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Cy=/\{\$([^}]+)}/g;function ky(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ln(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const o=t[r],a=e[r];if(lu(o)&&lu(a)){if(!Ln(o,a))return!1}else if(o!==a)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function lu(t){return t!==null&&typeof t=="object"}/**
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
 */function Or(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ry(t,e){const n=new Py(t,e);return n.subscribe.bind(n)}class Py{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Oy(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Lo),r.error===void 0&&(r.error=Lo),r.complete===void 0&&(r.complete=Lo);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Oy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lo(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=1e3,Dy=2,xy=4*60*60*1e3,Ly=.5;function cu(t,e=Ny,n=Dy){const s=e*Math.pow(n,t),r=Math.round(Ly*s*(Math.random()-.5)*2);return Math.min(xy,s+r)}/**
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
 */function dn(t){return t&&t._delegate?t._delegate:t}class xt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class My{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new my;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e?.identifier),r=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fy(e))try{this.getOrInitializeService({instanceIdentifier:Gn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=Gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gn){return this.instances.has(e)}getOptions(e=Gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);s===c&&a.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),o=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;o.add(e),this.onInitCallbacks.set(r,o);const a=this.instances.get(r);return a&&e(a,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Uy(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gn){return this.component?this.component.multipleInstances?e:Gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uy(t){return t===Gn?void 0:t}function Fy(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new My(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const $y={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},Vy=Ie.INFO,By={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},Hy=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=By[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xi{constructor(e){this.name=e,this._logLevel=Vy,this._logHandler=Hy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$y[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const Wy=(t,e)=>e.some(n=>t instanceof n);let uu,hu;function zy(){return uu||(uu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gy(){return hu||(hu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zf=new WeakMap,ca=new WeakMap,Gf=new WeakMap,Mo=new WeakMap,Ga=new WeakMap;function qy(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(On(t.result)),r()},a=()=>{s(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&zf.set(n,t)}).catch(()=>{}),Ga.set(e,t),e}function Ky(t){if(ca.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),r()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});ca.set(t,e)}let ua={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ca.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return On(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Jy(t){ua=t(ua)}function Xy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Uo(this),e,...n);return Gf.set(s,e.sort?e.sort():[e]),On(s)}:Gy().includes(t)?function(...e){return t.apply(Uo(this),e),On(zf.get(this))}:function(...e){return On(t.apply(Uo(this),e))}}function Yy(t){return typeof t=="function"?Xy(t):(t instanceof IDBTransaction&&Ky(t),Wy(t,zy())?new Proxy(t,ua):t)}function On(t){if(t instanceof IDBRequest)return qy(t);if(Mo.has(t))return Mo.get(t);const e=Yy(t);return e!==t&&(Mo.set(t,e),Ga.set(e,t)),e}const Uo=t=>Ga.get(t);function qf(t,e,{blocked:n,upgrade:s,blocking:r,terminated:o}={}){const a=indexedDB.open(t,e),c=On(a);return s&&a.addEventListener("upgradeneeded",u=>{s(On(a.result),u.oldVersion,u.newVersion,On(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{o&&u.addEventListener("close",()=>o()),r&&u.addEventListener("versionchange",f=>r(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Qy=["get","getKey","getAll","getAllKeys","count"],Zy=["put","add","delete","clear"],Fo=new Map;function fu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fo.get(e))return Fo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Zy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Qy.includes(n)))return;const o=async function(a,...c){const u=this.transaction(a,r?"readwrite":"readonly");let f=u.store;return s&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),r&&u.done]))[0]};return Fo.set(e,o),o}Jy(t=>({...t,get:(e,n,s)=>fu(e,n)||t.get(e,n,s),has:(e,n)=>!!fu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(t_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function t_(t){const e=t.getComponent();return e?.type==="VERSION"}const ha="@firebase/app",du="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new Xi("@firebase/app"),n_="@firebase/app-compat",s_="@firebase/analytics-compat",r_="@firebase/analytics",i_="@firebase/app-check-compat",o_="@firebase/app-check",a_="@firebase/auth",l_="@firebase/auth-compat",c_="@firebase/database",u_="@firebase/data-connect",h_="@firebase/database-compat",f_="@firebase/functions",d_="@firebase/functions-compat",p_="@firebase/installations",g_="@firebase/installations-compat",m_="@firebase/messaging",v_="@firebase/messaging-compat",y_="@firebase/performance",__="@firebase/performance-compat",w_="@firebase/remote-config",b_="@firebase/remote-config-compat",I_="@firebase/storage",E_="@firebase/storage-compat",T_="@firebase/firestore",S_="@firebase/ai",A_="@firebase/firestore-compat",C_="firebase",k_="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="[DEFAULT]",R_={[ha]:"fire-core",[n_]:"fire-core-compat",[r_]:"fire-analytics",[s_]:"fire-analytics-compat",[o_]:"fire-app-check",[i_]:"fire-app-check-compat",[a_]:"fire-auth",[l_]:"fire-auth-compat",[c_]:"fire-rtdb",[u_]:"fire-data-connect",[h_]:"fire-rtdb-compat",[f_]:"fire-fn",[d_]:"fire-fn-compat",[p_]:"fire-iid",[g_]:"fire-iid-compat",[m_]:"fire-fcm",[v_]:"fire-fcm-compat",[y_]:"fire-perf",[__]:"fire-perf-compat",[w_]:"fire-rc",[b_]:"fire-rc-compat",[I_]:"fire-gcs",[E_]:"fire-gcs-compat",[T_]:"fire-fst",[A_]:"fire-fst-compat",[S_]:"fire-vertex","fire-js":"fire-js",[C_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new Map,P_=new Map,da=new Map;function pu(t,e){try{t.container.addComponent(e)}catch(n){un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gt(t){const e=t.name;if(da.has(e))return un.debug(`There were multiple attempts to register component ${e}.`),!1;da.set(e,t);for(const n of Ei.values())pu(n,t);for(const n of P_.values())pu(n,t);return!0}function us(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function At(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nn=new cs("app","Firebase",O_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=k_;function Kf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:fa,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw Nn.create("bad-app-name",{appName:String(r)});if(n||(n=Ff()),!n)throw Nn.create("no-options");const o=Ei.get(r);if(o){if(Ln(n,o.options)&&Ln(s,o.config))return o;throw Nn.create("duplicate-app",{appName:r})}const a=new jy(r);for(const u of da.values())a.addComponent(u);const c=new N_(n,s,a);return Ei.set(r,c),c}function qa(t=fa){const e=Ei.get(t);if(!e&&t===fa&&Ff())return Kf();if(!e)throw Nn.create("no-app",{appName:t});return e}function bt(t,e,n){var s;let r=(s=R_[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${r}" with version "${e}":`];o&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),un.warn(c.join(" "));return}Gt(new xt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const D_="firebase-heartbeat-database",x_=1,Tr="firebase-heartbeat-store";let jo=null;function Jf(){return jo||(jo=qf(D_,x_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Tr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nn.create("idb-open",{originalErrorMessage:t.message})})),jo}async function L_(t){try{const n=(await Jf()).transaction(Tr),s=await n.objectStore(Tr).get(Xf(t));return await n.done,s}catch(e){if(e instanceof Lt)un.warn(e.message);else{const n=Nn.create("idb-get",{originalErrorMessage:e?.message});un.warn(n.message)}}}async function gu(t,e){try{const s=(await Jf()).transaction(Tr,"readwrite");await s.objectStore(Tr).put(e,Xf(t)),await s.done}catch(n){if(n instanceof Lt)un.warn(n.message);else{const s=Nn.create("idb-set",{originalErrorMessage:n?.message});un.warn(s.message)}}}function Xf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const M_=1024,U_=30;class F_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=mu();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats.length>U_){const a=V_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){un.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mu(),{heartbeatsToSend:s,unsentEntries:r}=j_(this._heartbeatsCache.heartbeats),o=Ii(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return un.warn(n),""}}}function mu(){return new Date().toISOString().substring(0,10)}function j_(t,e=M_){const n=[];let s=t.slice();for(const r of t){const o=n.find(a=>a.agent===r.agent);if(o){if(o.dates.push(r.date),vu(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),vu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class $_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hf()?Wf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await L_(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return gu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return gu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function vu(t){return Ii(JSON.stringify({version:2,heartbeats:t})).length}function V_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(t){Gt(new xt("platform-logger",e=>new e_(e),"PRIVATE")),Gt(new xt("heartbeat",e=>new F_(e),"PRIVATE")),bt(ha,du,t),bt(ha,du,"esm2017"),bt("fire-js","")}B_("");var H_="firebase",W_="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt(H_,W_,"app");const Yf="@firebase/installations",Ka="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=1e4,Zf=`w:${Ka}`,ed="FIS_v2",z_="https://firebaseinstallations.googleapis.com/v1",G_=60*60*1e3,q_="installations",K_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ss=new cs(q_,K_,J_);function td(t){return t instanceof Lt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd({projectId:t}){return`${z_}/projects/${t}/installations`}function sd(t){return{token:t.token,requestStatus:2,expiresIn:Y_(t.expiresIn),creationTime:Date.now()}}async function rd(t,e){const s=(await e.json()).error;return ss.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function id({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function X_(t,{refreshToken:e}){const n=id(t);return n.append("Authorization",Q_(e)),n}async function od(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Y_(t){return Number(t.replace("s","000"))}function Q_(t){return`${ed} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=nd(t),r=id(t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&r.append("x-firebase-client",f)}const a={fid:n,authVersion:ed,appId:t.appId,sdkVersion:Zf},c={method:"POST",headers:r,body:JSON.stringify(a)},u=await od(()=>fetch(s,c));if(u.ok){const f=await u.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:sd(f.authToken)}}else throw await rd("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=/^[cdef][\w-]{21}$/,pa="";function nw(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=sw(t);return tw.test(n)?n:pa}catch{return pa}}function sw(t){return ew(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=new Map;function cd(t,e){const n=Yi(t);ud(n,e),rw(n,e)}function ud(t,e){const n=ld.get(t);if(n)for(const s of n)s(e)}function rw(t,e){const n=iw();n&&n.postMessage({key:t,fid:e}),ow()}let Jn=null;function iw(){return!Jn&&"BroadcastChannel"in self&&(Jn=new BroadcastChannel("[Firebase] FID Change"),Jn.onmessage=t=>{ud(t.data.key,t.data.fid)}),Jn}function ow(){ld.size===0&&Jn&&(Jn.close(),Jn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="firebase-installations-database",lw=1,rs="firebase-installations-store";let $o=null;function Ja(){return $o||($o=qf(aw,lw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rs)}}})),$o}async function Ti(t,e){const n=Yi(t),r=(await Ja()).transaction(rs,"readwrite"),o=r.objectStore(rs),a=await o.get(n);return await o.put(e,n),await r.done,(!a||a.fid!==e.fid)&&cd(t,e.fid),e}async function hd(t){const e=Yi(t),s=(await Ja()).transaction(rs,"readwrite");await s.objectStore(rs).delete(e),await s.done}async function Qi(t,e){const n=Yi(t),r=(await Ja()).transaction(rs,"readwrite"),o=r.objectStore(rs),a=await o.get(n),c=e(a);return c===void 0?await o.delete(n):await o.put(c,n),await r.done,c&&(!a||a.fid!==c.fid)&&cd(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(t){let e;const n=await Qi(t.appConfig,s=>{const r=cw(s),o=uw(t,r);return e=o.registrationPromise,o.installationEntry});return n.fid===pa?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function cw(t){const e=t||{fid:nw(),registrationStatus:0};return fd(e)}function uw(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(ss.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=hw(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:fw(t)}:{installationEntry:e}}async function hw(t,e){try{const n=await Z_(t,e);return Ti(t.appConfig,n)}catch(n){throw td(n)&&n.customData.serverCode===409?await hd(t.appConfig):await Ti(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function fw(t){let e=await yu(t.appConfig);for(;e.registrationStatus===1;)await ad(100),e=await yu(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Xa(t);return s||n}return e}function yu(t){return Qi(t,e=>{if(!e)throw ss.create("installation-not-found");return fd(e)})}function fd(t){return dw(t)?{fid:t.fid,registrationStatus:0}:t}function dw(t){return t.registrationStatus===1&&t.registrationTime+Qf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw({appConfig:t,heartbeatServiceProvider:e},n){const s=gw(t,n),r=X_(t,n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&r.append("x-firebase-client",f)}const a={installation:{sdkVersion:Zf,appId:t.appId}},c={method:"POST",headers:r,body:JSON.stringify(a)},u=await od(()=>fetch(s,c));if(u.ok){const f=await u.json();return sd(f)}else throw await rd("Generate Auth Token",u)}function gw(t,{fid:e}){return`${nd(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ya(t,e=!1){let n;const s=await Qi(t.appConfig,o=>{if(!dd(o))throw ss.create("not-registered");const a=o.authToken;if(!e&&yw(a))return o;if(a.requestStatus===1)return n=mw(t,e),o;{if(!navigator.onLine)throw ss.create("app-offline");const c=ww(o);return n=vw(t,c),c}});return n?await n:s.authToken}async function mw(t,e){let n=await _u(t.appConfig);for(;n.authToken.requestStatus===1;)await ad(100),n=await _u(t.appConfig);const s=n.authToken;return s.requestStatus===0?Ya(t,e):s}function _u(t){return Qi(t,e=>{if(!dd(e))throw ss.create("not-registered");const n=e.authToken;return bw(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function vw(t,e){try{const n=await pw(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Ti(t.appConfig,s),n}catch(n){if(td(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await hd(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ti(t.appConfig,s)}throw n}}function dd(t){return t!==void 0&&t.registrationStatus===2}function yw(t){return t.requestStatus===2&&!_w(t)}function _w(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+G_}function ww(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function bw(t){return t.requestStatus===1&&t.requestTime+Qf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iw(t){const e=t,{installationEntry:n,registrationPromise:s}=await Xa(e);return s?s.catch(console.error):Ya(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew(t,e=!1){const n=t;return await Tw(n),(await Ya(n,e)).token}async function Tw(t){const{registrationPromise:e}=await Xa(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t){if(!t||!t.options)throw Vo("App Configuration");if(!t.name)throw Vo("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Vo(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Vo(t){return ss.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="installations",Aw="installations-internal",Cw=t=>{const e=t.getProvider("app").getImmediate(),n=Sw(e),s=us(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},kw=t=>{const e=t.getProvider("app").getImmediate(),n=us(e,pd).getImmediate();return{getId:()=>Iw(n),getToken:r=>Ew(n,r)}};function Rw(){Gt(new xt(pd,Cw,"PUBLIC")),Gt(new xt(Aw,kw,"PRIVATE"))}Rw();bt(Yf,Ka);bt(Yf,Ka,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="analytics",Pw="firebase_id",Ow="origin",Nw=60*1e3,Dw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Qa="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new Xi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},dt=new cs("analytics","Analytics",xw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(t){if(!t.startsWith(Qa)){const e=dt.create("invalid-gtag-resource",{gtagURL:t});return ct.warn(e.message),""}return t}function gd(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Mw(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Uw(t,e){const n=Mw("firebase-js-sdk-policy",{createScriptURL:Lw}),s=document.createElement("script"),r=`${Qa}?l=${t}&id=${e}`;s.src=n?n?.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function Fw(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function jw(t,e,n,s,r,o){const a=s[r];try{if(a)await e[a];else{const u=(await gd(n)).find(f=>f.measurementId===r);u&&await e[u.appId]}}catch(c){ct.error(c)}t("config",r,o)}async function $w(t,e,n,s,r){try{let o=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const c=await gd(n);for(const u of a){const f=c.find(g=>g.measurementId===u),d=f&&e[f.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",s,r||{})}catch(o){ct.error(o)}}function Vw(t,e,n,s){async function r(o,...a){try{if(o==="event"){const[c,u]=a;await $w(t,e,n,c,u)}else if(o==="config"){const[c,u]=a;await jw(t,e,n,s,c,u)}else if(o==="consent"){const[c,u]=a;t("consent",c,u)}else if(o==="get"){const[c,u,f]=a;t("get",c,u,f)}else if(o==="set"){const[c]=a;t("set",c)}else t(o,...a)}catch(c){ct.error(c)}}return r}function Bw(t,e,n,s,r){let o=function(...a){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(o=window[r]),window[r]=Vw(o,t,e,n),{gtagCore:o,wrappedGtag:window[r]}}function Hw(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Qa)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=30,zw=1e3;class Gw{constructor(e={},n=zw){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const md=new Gw;function qw(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Kw(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:qw(s)},o=Dw.replace("{app-id}",n),a=await fetch(o,r);if(a.status!==200&&a.status!==304){let c="";try{const u=await a.json();!((e=u.error)===null||e===void 0)&&e.message&&(c=u.error.message)}catch{}throw dt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function Jw(t,e=md,n){const{appId:s,apiKey:r,measurementId:o}=t.options;if(!s)throw dt.create("no-app-id");if(!r){if(o)return{measurementId:o,appId:s};throw dt.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Qw;return setTimeout(async()=>{c.abort()},Nw),vd({appId:s,apiKey:r,measurementId:o},a,c,e)}async function vd(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=md){var o;const{appId:a,measurementId:c}=t;try{await Xw(s,e)}catch(u){if(c)return ct.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u?.message}]`),{appId:a,measurementId:c};throw u}try{const u=await Kw(t);return r.deleteThrottleMetadata(a),u}catch(u){const f=u;if(!Yw(f)){if(r.deleteThrottleMetadata(a),c)return ct.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f?.message}]`),{appId:a,measurementId:c};throw u}const d=Number((o=f?.customData)===null||o===void 0?void 0:o.httpStatus)===503?cu(n,r.intervalMillis,Ww):cu(n,r.intervalMillis),g={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return r.setThrottleMetadata(a,g),ct.debug(`Calling attemptFetch again in ${d} millis`),vd(t,g,s,r)}}function Xw(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),o=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(o),s(dt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Yw(t){if(!(t instanceof Lt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Qw{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Zw(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const o=await e,a=Object.assign(Object.assign({},s),{send_to:o});t("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(){if(Hf())try{await Wf()}catch(t){return ct.warn(dt.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return ct.warn(dt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function t0(t,e,n,s,r,o,a){var c;const u=Jw(t);u.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&ct.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>ct.error(T)),e.push(u);const f=e0().then(T=>{if(T)return s.getId()}),[d,g]=await Promise.all([u,f]);Hw(o)||Uw(o,d.measurementId),r("js",new Date);const v=(c=a?.config)!==null&&c!==void 0?c:{};return v[Ow]="firebase",v.update=!0,g!=null&&(v[Pw]=g),r("config",d.measurementId,v),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this.app=e}_delete(){return delete ur[this.app.options.appId],Promise.resolve()}}let ur={},wu=[];const bu={};let Bo="dataLayer",s0="gtag",Iu,yd,Eu=!1;function r0(){const t=[];if(Bf()&&t.push("This is a browser extension environment."),Ty()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=dt.create("invalid-analytics-context",{errorInfo:e});ct.warn(n.message)}}function i0(t,e,n){r0();const s=t.options.appId;if(!s)throw dt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ct.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw dt.create("no-api-key");if(ur[s]!=null)throw dt.create("already-exists",{id:s});if(!Eu){Fw(Bo);const{wrappedGtag:o,gtagCore:a}=Bw(ur,wu,bu,Bo,s0);yd=o,Iu=a,Eu=!0}return ur[s]=t0(t,wu,bu,e,Iu,Bo,n),new n0(t)}function o0(t=qa()){t=dn(t);const e=us(t,Si);return e.isInitialized()?e.getImmediate():a0(t)}function a0(t,e={}){const n=us(t,Si);if(n.isInitialized()){const r=n.getImmediate();if(Ln(e,n.getOptions()))return r;throw dt.create("already-initialized")}return n.initialize({options:e})}function l0(t,e,n,s){t=dn(t),Zw(yd,ur[t.app.options.appId],e,n,s).catch(r=>ct.error(r))}const Tu="@firebase/analytics",Su="0.10.17";function c0(){Gt(new xt(Si,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return i0(s,r,n)},"PUBLIC")),Gt(new xt("analytics-internal",t,"PRIVATE")),bt(Tu,Su),bt(Tu,Su,"esm2017");function t(e){try{const n=e.getProvider(Si).getImmediate();return{logEvent:(s,r,o)=>l0(n,s,r,o)}}catch(n){throw dt.create("interop-component-reg-failed",{reason:n})}}}c0();function Za(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function _d(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u0=_d,wd=new cs("auth","Firebase",_d());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new Xi("@firebase/auth");function h0(t,...e){Ai.logLevel<=Ie.WARN&&Ai.warn(`Auth (${Ls}): ${t}`,...e)}function li(t,...e){Ai.logLevel<=Ie.ERROR&&Ai.error(`Auth (${Ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,...e){throw tl(t,...e)}function Pt(t,...e){return tl(t,...e)}function el(t,e,n){const s=Object.assign(Object.assign({},u0()),{[e]:n});return new cs("auth","Firebase",s).create(e,{appName:t.name})}function es(t){return el(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function f0(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&qt(t,"argument-error"),el(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function tl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return wd.create(t,...e)}function ie(t,e,...n){if(!t)throw tl(e,...n)}function rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw li(e),new Error(e)}function hn(t,e){t||rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function d0(){return Au()==="http:"||Au()==="https:"}function Au(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(d0()||Bf()||"connection"in navigator)?navigator.onLine:!0}function g0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n){this.shortDelay=e,this.longDelay=n,hn(n>e,"Short delay should be less than long delay!"),this.isMobile=wy()||Iy()}get(){return p0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t,e){hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],y0=new Nr(3e4,6e4);function sl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ms(t,e,n,s,r={}){return Id(t,r,async()=>{let o={},a={};s&&(e==="GET"?a=s:o={body:JSON.stringify(s)});const c=Or(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const f=Object.assign({method:e,headers:u},o);return by()||(f.referrerPolicy="no-referrer"),t.emulatorConfig&&Pr(t.emulatorConfig.host)&&(f.credentials="include"),bd.fetch()(await Ed(t,t.config.apiHost,n,c),f)})}async function Id(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},m0),e);try{const r=new w0(t),o=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw ei(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[u,f]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ei(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ei(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw ei(t,"user-disabled",a);const d=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw el(t,d,f);qt(t,d)}}catch(r){if(r instanceof Lt)throw r;qt(t,"network-request-failed",{message:String(r)})}}async function _0(t,e,n,s,r={}){const o=await Ms(t,e,n,s,r);return"mfaPendingCredential"in o&&qt(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function Ed(t,e,n,s){const r=`${e}${n}?${s}`,o=t,a=o.config.emulator?nl(t.config,r):`${t.config.apiScheme}://${r}`;return v0.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class w0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Pt(this.auth,"network-request-failed")),y0.get())})}}function ei(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Pt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b0(t,e){return Ms(t,"POST","/v1/accounts:delete",e)}async function Ci(t,e){return Ms(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function I0(t,e=!1){const n=dn(t),s=await n.getIdToken(e),r=rl(s);ie(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,a=o?.sign_in_provider;return{claims:r,token:s,authTime:hr(Ho(r.auth_time)),issuedAtTime:hr(Ho(r.iat)),expirationTime:hr(Ho(r.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Ho(t){return Number(t)*1e3}function rl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return li("JWT malformed, contained fewer than 3 sections"),null;try{const r=Mf(n);return r?JSON.parse(r):(li("Failed to decode base64 JWT payload"),null)}catch(r){return li("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Cu(t){const e=rl(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Lt&&E0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function E0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hr(this.lastLoginAt),this.creationTime=hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Sr(t,Ci(n,{idToken:s}));ie(r?.users.length,n,"internal-error");const o=r.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Td(o.providerUserInfo):[],c=A0(t.providerData,a),u=t.isAnonymous,f=!(t.email&&o.passwordHash)&&!c?.length,d=u?f:!1,g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new ma(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,g)}async function S0(t){const e=dn(t);await ki(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function A0(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Td(t){return t.map(e=>{var{providerId:n}=e,s=Za(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C0(t,e){const n=await Id(t,{},async()=>{const s=Or({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=t.config,a=await Ed(t,r,"/v1/token",`key=${o}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:s};return t.emulatorConfig&&Pr(t.emulatorConfig.host)&&(u.credentials="include"),bd.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function k0(t,e){return Ms(t,"POST","/v2/accounts:revokeToken",sl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=Cu(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:o}=await C0(e,n);this.updateTokensAndExpiration(s,r,Number(o))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:o}=n,a=new Ss;return s&&(ie(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(ie(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),o&&(ie(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ss,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ct{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,o=Za(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new T0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ma(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Sr(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return I0(this,e)}reload(){return S0(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ct(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ki(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(At(this.auth.app))return Promise.reject(es(this.auth));const e=await this.getIdToken();return await Sr(this,b0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,o,a,c,u,f,d;const g=(s=n.displayName)!==null&&s!==void 0?s:void 0,v=(r=n.email)!==null&&r!==void 0?r:void 0,T=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,P=(a=n.photoURL)!==null&&a!==void 0?a:void 0,M=(c=n.tenantId)!==null&&c!==void 0?c:void 0,z=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,$=(f=n.createdAt)!==null&&f!==void 0?f:void 0,F=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:V,emailVerified:B,isAnonymous:oe,providerData:te,stsTokenManager:A}=n;ie(V&&A,e,"internal-error");const y=Ss.fromJSON(this.name,A);ie(typeof V=="string",e,"internal-error"),bn(g,e.name),bn(v,e.name),ie(typeof B=="boolean",e,"internal-error"),ie(typeof oe=="boolean",e,"internal-error"),bn(T,e.name),bn(P,e.name),bn(M,e.name),bn(z,e.name),bn($,e.name),bn(F,e.name);const m=new Ct({uid:V,auth:e,email:v,emailVerified:B,displayName:g,isAnonymous:oe,photoURL:P,phoneNumber:T,tenantId:M,stsTokenManager:y,createdAt:$,lastLoginAt:F});return te&&Array.isArray(te)&&(m.providerData=te.map(E=>Object.assign({},E))),z&&(m._redirectEventId=z),m}static async _fromIdTokenResponse(e,n,s=!1){const r=new Ss;r.updateFromServerResponse(n);const o=new Ct({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ki(o),o}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];ie(r.localId!==void 0,"internal-error");const o=r.providerUserInfo!==void 0?Td(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!o?.length,c=new Ss;c.updateFromIdToken(s);const u=new Ct({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new ma(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!o?.length};return Object.assign(u,f),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=new Map;function on(t){hn(t instanceof Function,"Expected a class definition");let e=ku.get(t);return e?(hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ku.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sd.type="NONE";const Ru=Sd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t,e,n){return`firebase:${t}:${e}:${n}`}class As{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:o}=this.auth;this.fullUserKey=ci(this.userKey,r.apiKey,o),this.fullPersistenceKey=ci("persistence",r.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ci(this.auth,{idToken:e}).catch(()=>{});return n?Ct._fromGetAccountInfoResponse(this.auth,n,e):null}return Ct._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new As(on(Ru),e,s);const r=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=r[0]||on(Ru);const a=ci(s,e.config.apiKey,e.name);let c=null;for(const f of n)try{const d=await f._get(a);if(d){let g;if(typeof d=="string"){const v=await Ci(e,{idToken:d}).catch(()=>{});if(!v)break;g=await Ct._fromGetAccountInfoResponse(e,v,d)}else g=Ct._fromJSON(e,d);f!==o&&(c=g),o=f;break}}catch{}const u=r.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new As(o,e,s):(o=u[0],c&&await o._set(a,c.toJSON()),await Promise.all(n.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new As(o,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ad(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Od(e))return"Blackberry";if(Nd(e))return"Webos";if(Cd(e))return"Safari";if((e.includes("chrome/")||kd(e))&&!e.includes("edge/"))return"Chrome";if(Pd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function Ad(t=st()){return/firefox\//i.test(t)}function Cd(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kd(t=st()){return/crios\//i.test(t)}function Rd(t=st()){return/iemobile/i.test(t)}function Pd(t=st()){return/android/i.test(t)}function Od(t=st()){return/blackberry/i.test(t)}function Nd(t=st()){return/webos/i.test(t)}function il(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function R0(t=st()){var e;return il(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function P0(){return Ey()&&document.documentMode===10}function Dd(t=st()){return il(t)||Pd(t)||Nd(t)||Od(t)||/windows phone/i.test(t)||Rd(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t,e=[]){let n;switch(t){case"Browser":n=Pu(st());break;case"Worker":n=`${Pu(st())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${s}`}/**
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
 */class O0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=o=>new Promise((a,c)=>{try{const u=e(o);a(u)}catch(u){c(u)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function N0(t,e={}){return Ms(t,"GET","/v2/passwordPolicy",sl(t,e))}/**
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
 */const D0=6;class x0{constructor(e){var n,s,r,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:D0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,o,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(s=u.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(r=u.containsLowercaseLetter)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ou(this),this.idTokenSubscription=new Ou(this),this.beforeStateQueue=new O0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=on(n)),this._initializationPromise=this.queue(async()=>{var s,r,o;if(!this._deleted&&(this.persistenceManager=await As.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ci(this,{idToken:e}),s=await Ct._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(At(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=r?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&u?.user&&(r=u.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ki(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=g0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(At(this.app))return Promise.reject(es(this));const n=e?dn(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return At(this.app)?Promise.reject(es(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return At(this.app)?Promise.reject(es(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await N0(this),n=new x0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new cs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await k0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&on(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await As.create(this,[on(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,s,r);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(At(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&h0(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Zi(t){return dn(t)}class Ou{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ry(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ol={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function M0(t){ol=t}function U0(t){return ol.loadJS(t)}function F0(){return ol.gapiScript}function j0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t,e){const n=us(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),o=n.getOptions();if(Ln(o,e??{}))return r;qt(r,"already-initialized")}return n.initialize({options:e})}function V0(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(on);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function B0(t,e,n){const s=Zi(t);ie(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,o=Ld(e),{host:a,port:c}=H0(e),u=c===null?"":`:${c}`,f={url:`${o}//${a}${u}/`},d=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){ie(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ie(Ln(f,s.config.emulator)&&Ln(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=f,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,Pr(a)?($f(`${o}//${a}${u}`),Vf("Auth",!0)):W0()}function Ld(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function H0(t){const e=Ld(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const o=r[1];return{host:o,port:Nu(s.substr(o.length+1))}}else{const[o,a]=s.split(":");return{host:o,port:Nu(a)}}}function Nu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function W0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,n){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(t,e){return _0(t,"POST","/v1/accounts:signInWithIdp",sl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="http://localhost";class is extends Md{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,o=Za(n,["providerId","signInMethod"]);if(!s||!r)return null;const a=new is(s,r);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Cs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Cs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cs(e,n)}buildRequest(){const e={requestUri:z0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Or(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends al{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Dr{constructor(){super("facebook.com")}static credential(e){return is._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Dr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return is._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return nn.credential(n,s)}catch{return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com";nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Dr{constructor(){super("github.com")}static credential(e){return is._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Dr{constructor(){super("twitter.com")}static credential(e,n){return is._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Rn.credential(n,s)}catch{return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com";Rn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const o=await Ct._fromIdTokenResponse(e,s,r),a=Du(s);return new Ns({user:o,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Du(s);return new Ns({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Du(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends Lt{constructor(e,n,s,r){var o;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ri.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ri(e,n,s,r)}}function Ud(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ri._fromErrorAndOperation(t,o,e,s):o})}async function G0(t,e,n=!1){const s=await Sr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ns._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q0(t,e,n=!1){const{auth:s}=t;if(At(s.app))return Promise.reject(es(s));const r="reauthenticate";try{const o=await Sr(t,Ud(s,r,e,t),n);ie(o.idToken,s,"internal-error");const a=rl(o.idToken);ie(a,s,"internal-error");const{sub:c}=a;return ie(t.uid===c,s,"user-mismatch"),Ns._forOperation(t,r,o)}catch(o){throw o?.code==="auth/user-not-found"&&qt(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K0(t,e,n=!1){if(At(t.app))return Promise.reject(es(t));const s="signIn",r=await Ud(t,s,e),o=await Ns._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(o.user),o}function J0(t,e,n,s){return dn(t).onIdTokenChanged(e,n,s)}function X0(t,e,n){return dn(t).beforeAuthStateChanged(e,n)}function Y0(t,e,n,s){return dn(t).onAuthStateChanged(e,n,s)}const Pi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pi,"1"),this.storage.removeItem(Pi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=1e3,Z0=10;class jd extends Fd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},o=this.storage.getItem(s);P0()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Z0):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Q0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jd.type="LOCAL";const e1=jd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d extends Fd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$d.type="SESSION";const Vd=$d;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new eo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:o}=n.data,a=this.handlersMap[r];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async f=>f(n.origin,o)),u=await t1(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}eo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,a;return new Promise((c,u)=>{const f=ll("",20);r.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(g){const v=g;if(v.data.eventId===f)switch(v.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(v.data.response);break;default:clearTimeout(d),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return window}function s1(t){zt().location.href=t}/**
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
 */function Bd(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function r1(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function i1(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function o1(){return Bd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="firebaseLocalStorageDb",a1=1,Oi="firebaseLocalStorage",Wd="fbase_key";class xr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function to(t,e){return t.transaction([Oi],e?"readwrite":"readonly").objectStore(Oi)}function l1(){const t=indexedDB.deleteDatabase(Hd);return new xr(t).toPromise()}function va(){const t=indexedDB.open(Hd,a1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Oi,{keyPath:Wd})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Oi)?e(s):(s.close(),await l1(),e(await va()))})})}async function xu(t,e,n){const s=to(t,!0).put({[Wd]:e,value:n});return new xr(s).toPromise()}async function c1(t,e){const n=to(t,!1).get(e),s=await new xr(n).toPromise();return s===void 0?null:s.value}function Lu(t,e){const n=to(t,!0).delete(e);return new xr(n).toPromise()}const u1=800,h1=3;class zd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await va(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>h1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=eo._getInstance(o1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await r1(),!this.activeServiceWorker)return;this.sender=new n1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||i1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await va();return await xu(e,Pi,"1"),await Lu(e,Pi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>xu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>c1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=to(r,!1).getAll();return new xr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:o}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),u1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zd.type="LOCAL";const f1=zd;new Nr(3e4,6e4);/**
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
 */function Gd(t,e){return e?on(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends Md{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function d1(t){return K0(t.auth,new cl(t),t.bypassAuthState)}function p1(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),q0(n,new cl(t),t.bypassAuthState)}async function g1(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),G0(n,new cl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n,s,r,o=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:s,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return d1;case"linkViaPopup":case"linkViaRedirect":return g1;case"reauthViaPopup":case"reauthViaRedirect":return p1;default:qt(this.auth,"internal-error")}}resolve(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=new Nr(2e3,1e4);async function v1(t,e,n){if(At(t.app))return Promise.reject(Pt(t,"operation-not-supported-in-this-environment"));const s=Zi(t);f0(t,e,al);const r=Gd(s,n);return new Xn(s,"signInViaPopup",e,r).executeNotNull()}class Xn extends qd{constructor(e,n,s,r,o){super(e,n,r,o),this.provider=s,this.authWindow=null,this.pollId=null,Xn.currentPopupAction&&Xn.currentPopupAction.cancel(),Xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){hn(this.filter.length===1,"Popup operations only handle one event");const e=ll();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,m1.get())};e()}}Xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1="pendingRedirect",ui=new Map;class _1 extends qd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ui.get(this.auth._key());if(!e){try{const s=await w1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ui.set(this.auth._key(),e)}return this.bypassAuthState||ui.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function w1(t,e){const n=E1(e),s=I1(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function b1(t,e){ui.set(t._key(),e)}function I1(t){return on(t._redirectPersistence)}function E1(t){return ci(y1,t.config.apiKey,t.name)}async function T1(t,e,n=!1){if(At(t.app))return Promise.reject(es(t));const s=Zi(t),r=Gd(s,e),a=await new _1(s,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1=10*60*1e3;class A1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!C1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Kd(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Pt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=S1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mu(e))}saveEventToCache(e){this.cachedEventUids.add(Mu(e)),this.lastProcessedEventTime=Date.now()}}function Mu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Kd({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function C1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k1(t,e={}){return Ms(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,P1=/^https?/;async function O1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await k1(t);for(const n of e)try{if(N1(n))return}catch{}qt(t,"unauthorized-domain")}function N1(t){const e=ga(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!P1.test(n))return!1;if(R1.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const D1=new Nr(3e4,6e4);function Uu(){const t=zt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function x1(t){return new Promise((e,n)=>{var s,r,o;function a(){Uu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uu(),n(Pt(t,"network-request-failed"))},timeout:D1.get()})}if(!((r=(s=zt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((o=zt().gapi)===null||o===void 0)&&o.load)a();else{const c=j0("iframefcb");return zt()[c]=()=>{gapi.load?a():n(Pt(t,"network-request-failed"))},U0(`${F0()}?onload=${c}`).catch(u=>n(u))}}).catch(e=>{throw hi=null,e})}let hi=null;function L1(t){return hi=hi||x1(t),hi}/**
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
 */const M1=new Nr(5e3,15e3),U1="__/auth/iframe",F1="emulator/auth/iframe",j1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function V1(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nl(e,F1):`https://${t.config.authDomain}/${U1}`,s={apiKey:e.apiKey,appName:t.name,v:Ls},r=$1.get(t.config.apiHost);r&&(s.eid=r);const o=t._getFrameworks();return o.length&&(s.fw=o.join(",")),`${n}?${Or(s).slice(1)}`}async function B1(t){const e=await L1(t),n=zt().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:V1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:j1,dontclear:!0},s=>new Promise(async(r,o)=>{await s.restyle({setHideOnLeave:!1});const a=Pt(t,"network-request-failed"),c=zt().setTimeout(()=>{o(a)},M1.get());function u(){zt().clearTimeout(c),r(s)}s.ping(u).then(u,()=>{o(a)})}))}/**
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
 */const H1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},W1=500,z1=600,G1="_blank",q1="http://localhost";class Fu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function K1(t,e,n,s=W1,r=z1){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u=Object.assign(Object.assign({},H1),{width:s.toString(),height:r.toString(),top:o,left:a}),f=st().toLowerCase();n&&(c=kd(f)?G1:n),Ad(f)&&(e=e||q1,u.scrollbars="yes");const d=Object.entries(u).reduce((v,[T,P])=>`${v}${T}=${P},`,"");if(R0(f)&&c!=="_self")return J1(e||"",c),new Fu(null);const g=window.open(e||"",c,d);ie(g,t,"popup-blocked");try{g.focus()}catch{}return new Fu(g)}function J1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const X1="__/auth/handler",Y1="emulator/auth/handler",Q1=encodeURIComponent("fac");async function ju(t,e,n,s,r,o){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ls,eventId:r};if(e instanceof al){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",ky(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof Dr){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const u=await t._getAppCheckToken(),f=u?`#${Q1}=${encodeURIComponent(u)}`:"";return`${Z1(t)}?${Or(c).slice(1)}${f}`}function Z1({config:t}){return t.emulator?nl(t,Y1):`https://${t.authDomain}/${X1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo="webStorageSupport";class eb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vd,this._completeRedirectFn=T1,this._overrideRedirectResult=b1}async _openPopup(e,n,s,r){var o;hn((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await ju(e,n,s,ga(),r);return K1(e,a,ll())}async _openRedirect(e,n,s,r){await this._originValidation(e);const o=await ju(e,n,s,ga(),r);return s1(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:o}=this.eventManagers[n];return r?Promise.resolve(r):(hn(o,"If manager is not set, promise should be"),o)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await B1(e),s=new A1(e);return n.register("authEvent",r=>(ie(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wo,{type:Wo},r=>{var o;const a=(o=r?.[0])===null||o===void 0?void 0:o[Wo];a!==void 0&&n(!!a),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=O1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dd()||Cd()||il()}}const tb=eb;var $u="@firebase/auth",Vu="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rb(t){Gt(new xt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;ie(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xd(t)},f=new L0(s,r,o,u);return V0(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Gt(new xt("auth-internal",e=>{const n=Zi(e.getProvider("auth").getImmediate());return(s=>new nb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt($u,Vu,sb(t)),bt($u,Vu,"esm2017")}/**
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
 */const ib=5*60,ob=jf("authIdTokenMaxAge")||ib;let Bu=null;const ab=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>ob)return;const r=n?.token;Bu!==r&&(Bu=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function lb(t=qa()){const e=us(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$0(t,{popupRedirectResolver:tb,persistence:[f1,e1,Vd]}),s=jf("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(s,location.origin);if(location.origin===o.origin){const a=ab(o.toString());X0(n,a,()=>a(n.currentUser)),J0(n,c=>a(c))}}const r=Uf("auth");return r&&B0(n,`http://${r}`),n}function cb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}M0({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const o=Pt("internal-error");o.customData=r,n(o)},s.type="text/javascript",s.charset="UTF-8",cb().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rb("Browser");var Hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ul;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function m(){}m.prototype=y.prototype,A.D=y.prototype,A.prototype=new m,A.prototype.constructor=A,A.C=function(E,S,I){for(var w=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)w[Te-2]=arguments[Te];return y.prototype[S].apply(E,w)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(A,y,m){m||(m=0);var E=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)E[S]=y.charCodeAt(m++)|y.charCodeAt(m++)<<8|y.charCodeAt(m++)<<16|y.charCodeAt(m++)<<24;else for(S=0;16>S;++S)E[S]=y[m++]|y[m++]<<8|y[m++]<<16|y[m++]<<24;y=A.g[0],m=A.g[1],S=A.g[2];var I=A.g[3],w=y+(I^m&(S^I))+E[0]+3614090360&4294967295;y=m+(w<<7&4294967295|w>>>25),w=I+(S^y&(m^S))+E[1]+3905402710&4294967295,I=y+(w<<12&4294967295|w>>>20),w=S+(m^I&(y^m))+E[2]+606105819&4294967295,S=I+(w<<17&4294967295|w>>>15),w=m+(y^S&(I^y))+E[3]+3250441966&4294967295,m=S+(w<<22&4294967295|w>>>10),w=y+(I^m&(S^I))+E[4]+4118548399&4294967295,y=m+(w<<7&4294967295|w>>>25),w=I+(S^y&(m^S))+E[5]+1200080426&4294967295,I=y+(w<<12&4294967295|w>>>20),w=S+(m^I&(y^m))+E[6]+2821735955&4294967295,S=I+(w<<17&4294967295|w>>>15),w=m+(y^S&(I^y))+E[7]+4249261313&4294967295,m=S+(w<<22&4294967295|w>>>10),w=y+(I^m&(S^I))+E[8]+1770035416&4294967295,y=m+(w<<7&4294967295|w>>>25),w=I+(S^y&(m^S))+E[9]+2336552879&4294967295,I=y+(w<<12&4294967295|w>>>20),w=S+(m^I&(y^m))+E[10]+4294925233&4294967295,S=I+(w<<17&4294967295|w>>>15),w=m+(y^S&(I^y))+E[11]+2304563134&4294967295,m=S+(w<<22&4294967295|w>>>10),w=y+(I^m&(S^I))+E[12]+1804603682&4294967295,y=m+(w<<7&4294967295|w>>>25),w=I+(S^y&(m^S))+E[13]+4254626195&4294967295,I=y+(w<<12&4294967295|w>>>20),w=S+(m^I&(y^m))+E[14]+2792965006&4294967295,S=I+(w<<17&4294967295|w>>>15),w=m+(y^S&(I^y))+E[15]+1236535329&4294967295,m=S+(w<<22&4294967295|w>>>10),w=y+(S^I&(m^S))+E[1]+4129170786&4294967295,y=m+(w<<5&4294967295|w>>>27),w=I+(m^S&(y^m))+E[6]+3225465664&4294967295,I=y+(w<<9&4294967295|w>>>23),w=S+(y^m&(I^y))+E[11]+643717713&4294967295,S=I+(w<<14&4294967295|w>>>18),w=m+(I^y&(S^I))+E[0]+3921069994&4294967295,m=S+(w<<20&4294967295|w>>>12),w=y+(S^I&(m^S))+E[5]+3593408605&4294967295,y=m+(w<<5&4294967295|w>>>27),w=I+(m^S&(y^m))+E[10]+38016083&4294967295,I=y+(w<<9&4294967295|w>>>23),w=S+(y^m&(I^y))+E[15]+3634488961&4294967295,S=I+(w<<14&4294967295|w>>>18),w=m+(I^y&(S^I))+E[4]+3889429448&4294967295,m=S+(w<<20&4294967295|w>>>12),w=y+(S^I&(m^S))+E[9]+568446438&4294967295,y=m+(w<<5&4294967295|w>>>27),w=I+(m^S&(y^m))+E[14]+3275163606&4294967295,I=y+(w<<9&4294967295|w>>>23),w=S+(y^m&(I^y))+E[3]+4107603335&4294967295,S=I+(w<<14&4294967295|w>>>18),w=m+(I^y&(S^I))+E[8]+1163531501&4294967295,m=S+(w<<20&4294967295|w>>>12),w=y+(S^I&(m^S))+E[13]+2850285829&4294967295,y=m+(w<<5&4294967295|w>>>27),w=I+(m^S&(y^m))+E[2]+4243563512&4294967295,I=y+(w<<9&4294967295|w>>>23),w=S+(y^m&(I^y))+E[7]+1735328473&4294967295,S=I+(w<<14&4294967295|w>>>18),w=m+(I^y&(S^I))+E[12]+2368359562&4294967295,m=S+(w<<20&4294967295|w>>>12),w=y+(m^S^I)+E[5]+4294588738&4294967295,y=m+(w<<4&4294967295|w>>>28),w=I+(y^m^S)+E[8]+2272392833&4294967295,I=y+(w<<11&4294967295|w>>>21),w=S+(I^y^m)+E[11]+1839030562&4294967295,S=I+(w<<16&4294967295|w>>>16),w=m+(S^I^y)+E[14]+4259657740&4294967295,m=S+(w<<23&4294967295|w>>>9),w=y+(m^S^I)+E[1]+2763975236&4294967295,y=m+(w<<4&4294967295|w>>>28),w=I+(y^m^S)+E[4]+1272893353&4294967295,I=y+(w<<11&4294967295|w>>>21),w=S+(I^y^m)+E[7]+4139469664&4294967295,S=I+(w<<16&4294967295|w>>>16),w=m+(S^I^y)+E[10]+3200236656&4294967295,m=S+(w<<23&4294967295|w>>>9),w=y+(m^S^I)+E[13]+681279174&4294967295,y=m+(w<<4&4294967295|w>>>28),w=I+(y^m^S)+E[0]+3936430074&4294967295,I=y+(w<<11&4294967295|w>>>21),w=S+(I^y^m)+E[3]+3572445317&4294967295,S=I+(w<<16&4294967295|w>>>16),w=m+(S^I^y)+E[6]+76029189&4294967295,m=S+(w<<23&4294967295|w>>>9),w=y+(m^S^I)+E[9]+3654602809&4294967295,y=m+(w<<4&4294967295|w>>>28),w=I+(y^m^S)+E[12]+3873151461&4294967295,I=y+(w<<11&4294967295|w>>>21),w=S+(I^y^m)+E[15]+530742520&4294967295,S=I+(w<<16&4294967295|w>>>16),w=m+(S^I^y)+E[2]+3299628645&4294967295,m=S+(w<<23&4294967295|w>>>9),w=y+(S^(m|~I))+E[0]+4096336452&4294967295,y=m+(w<<6&4294967295|w>>>26),w=I+(m^(y|~S))+E[7]+1126891415&4294967295,I=y+(w<<10&4294967295|w>>>22),w=S+(y^(I|~m))+E[14]+2878612391&4294967295,S=I+(w<<15&4294967295|w>>>17),w=m+(I^(S|~y))+E[5]+4237533241&4294967295,m=S+(w<<21&4294967295|w>>>11),w=y+(S^(m|~I))+E[12]+1700485571&4294967295,y=m+(w<<6&4294967295|w>>>26),w=I+(m^(y|~S))+E[3]+2399980690&4294967295,I=y+(w<<10&4294967295|w>>>22),w=S+(y^(I|~m))+E[10]+4293915773&4294967295,S=I+(w<<15&4294967295|w>>>17),w=m+(I^(S|~y))+E[1]+2240044497&4294967295,m=S+(w<<21&4294967295|w>>>11),w=y+(S^(m|~I))+E[8]+1873313359&4294967295,y=m+(w<<6&4294967295|w>>>26),w=I+(m^(y|~S))+E[15]+4264355552&4294967295,I=y+(w<<10&4294967295|w>>>22),w=S+(y^(I|~m))+E[6]+2734768916&4294967295,S=I+(w<<15&4294967295|w>>>17),w=m+(I^(S|~y))+E[13]+1309151649&4294967295,m=S+(w<<21&4294967295|w>>>11),w=y+(S^(m|~I))+E[4]+4149444226&4294967295,y=m+(w<<6&4294967295|w>>>26),w=I+(m^(y|~S))+E[11]+3174756917&4294967295,I=y+(w<<10&4294967295|w>>>22),w=S+(y^(I|~m))+E[2]+718787259&4294967295,S=I+(w<<15&4294967295|w>>>17),w=m+(I^(S|~y))+E[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(S+(w<<21&4294967295|w>>>11))&4294967295,A.g[2]=A.g[2]+S&4294967295,A.g[3]=A.g[3]+I&4294967295}s.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var m=y-this.blockSize,E=this.B,S=this.h,I=0;I<y;){if(S==0)for(;I<=m;)r(this,A,I),I+=this.blockSize;if(typeof A=="string"){for(;I<y;)if(E[S++]=A.charCodeAt(I++),S==this.blockSize){r(this,E),S=0;break}}else for(;I<y;)if(E[S++]=A[I++],S==this.blockSize){r(this,E),S=0;break}}this.h=S,this.o+=y},s.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var m=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=m&255,m/=256;for(this.u(A),A=Array(16),y=m=0;4>y;++y)for(var E=0;32>E;E+=8)A[m++]=this.g[y]>>>E&255;return A};function o(A,y){var m=c;return Object.prototype.hasOwnProperty.call(m,A)?m[A]:m[A]=y(A)}function a(A,y){this.h=y;for(var m=[],E=!0,S=A.length-1;0<=S;S--){var I=A[S]|0;E&&I==y||(m[S]=I,E=!1)}this.g=m}var c={};function u(A){return-128<=A&&128>A?o(A,function(y){return new a([y|0],0>y?-1:0)}):new a([A|0],0>A?-1:0)}function f(A){if(isNaN(A)||!isFinite(A))return g;if(0>A)return z(f(-A));for(var y=[],m=1,E=0;A>=m;E++)y[E]=A/m|0,m*=4294967296;return new a(y,0)}function d(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return z(d(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(y,8)),E=g,S=0;S<A.length;S+=8){var I=Math.min(8,A.length-S),w=parseInt(A.substring(S,S+I),y);8>I?(I=f(Math.pow(y,I)),E=E.j(I).add(f(w))):(E=E.j(m),E=E.add(f(w)))}return E}var g=u(0),v=u(1),T=u(16777216);t=a.prototype,t.m=function(){if(M(this))return-z(this).m();for(var A=0,y=1,m=0;m<this.g.length;m++){var E=this.i(m);A+=(0<=E?E:4294967296+E)*y,y*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(P(this))return"0";if(M(this))return"-"+z(this).toString(A);for(var y=f(Math.pow(A,6)),m=this,E="";;){var S=B(m,y).g;m=$(m,S.j(y));var I=((0<m.g.length?m.g[0]:m.h)>>>0).toString(A);if(m=S,P(m))return I+E;for(;6>I.length;)I="0"+I;E=I+E}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function P(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function M(A){return A.h==-1}t.l=function(A){return A=$(this,A),M(A)?-1:P(A)?0:1};function z(A){for(var y=A.g.length,m=[],E=0;E<y;E++)m[E]=~A.g[E];return new a(m,~A.h).add(v)}t.abs=function(){return M(this)?z(this):this},t.add=function(A){for(var y=Math.max(this.g.length,A.g.length),m=[],E=0,S=0;S<=y;S++){var I=E+(this.i(S)&65535)+(A.i(S)&65535),w=(I>>>16)+(this.i(S)>>>16)+(A.i(S)>>>16);E=w>>>16,I&=65535,w&=65535,m[S]=w<<16|I}return new a(m,m[m.length-1]&-2147483648?-1:0)};function $(A,y){return A.add(z(y))}t.j=function(A){if(P(this)||P(A))return g;if(M(this))return M(A)?z(this).j(z(A)):z(z(this).j(A));if(M(A))return z(this.j(z(A)));if(0>this.l(T)&&0>A.l(T))return f(this.m()*A.m());for(var y=this.g.length+A.g.length,m=[],E=0;E<2*y;E++)m[E]=0;for(E=0;E<this.g.length;E++)for(var S=0;S<A.g.length;S++){var I=this.i(E)>>>16,w=this.i(E)&65535,Te=A.i(S)>>>16,Fe=A.i(S)&65535;m[2*E+2*S]+=w*Fe,F(m,2*E+2*S),m[2*E+2*S+1]+=I*Fe,F(m,2*E+2*S+1),m[2*E+2*S+1]+=w*Te,F(m,2*E+2*S+1),m[2*E+2*S+2]+=I*Te,F(m,2*E+2*S+2)}for(E=0;E<y;E++)m[E]=m[2*E+1]<<16|m[2*E];for(E=y;E<2*y;E++)m[E]=0;return new a(m,0)};function F(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function V(A,y){this.g=A,this.h=y}function B(A,y){if(P(y))throw Error("division by zero");if(P(A))return new V(g,g);if(M(A))return y=B(z(A),y),new V(z(y.g),z(y.h));if(M(y))return y=B(A,z(y)),new V(z(y.g),y.h);if(30<A.g.length){if(M(A)||M(y))throw Error("slowDivide_ only works with positive integers.");for(var m=v,E=y;0>=E.l(A);)m=oe(m),E=oe(E);var S=te(m,1),I=te(E,1);for(E=te(E,2),m=te(m,2);!P(E);){var w=I.add(E);0>=w.l(A)&&(S=S.add(m),I=w),E=te(E,1),m=te(m,1)}return y=$(A,S.j(y)),new V(S,y)}for(S=g;0<=A.l(y);){for(m=Math.max(1,Math.floor(A.m()/y.m())),E=Math.ceil(Math.log(m)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),I=f(m),w=I.j(y);M(w)||0<w.l(A);)m-=E,I=f(m),w=I.j(y);P(I)&&(I=v),S=S.add(I),A=$(A,w)}return new V(S,A)}t.A=function(A){return B(this,A).h},t.and=function(A){for(var y=Math.max(this.g.length,A.g.length),m=[],E=0;E<y;E++)m[E]=this.i(E)&A.i(E);return new a(m,this.h&A.h)},t.or=function(A){for(var y=Math.max(this.g.length,A.g.length),m=[],E=0;E<y;E++)m[E]=this.i(E)|A.i(E);return new a(m,this.h|A.h)},t.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),m=[],E=0;E<y;E++)m[E]=this.i(E)^A.i(E);return new a(m,this.h^A.h)};function oe(A){for(var y=A.g.length+1,m=[],E=0;E<y;E++)m[E]=A.i(E)<<1|A.i(E-1)>>>31;return new a(m,A.h)}function te(A,y){var m=y>>5;y%=32;for(var E=A.g.length-m,S=[],I=0;I<E;I++)S[I]=0<y?A.i(I+m)>>>y|A.i(I+m+1)<<32-y:A.i(I+m);return new a(S,A.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,ul=a}).apply(typeof Hu<"u"?Hu:typeof self<"u"?self:typeof window<"u"?window:{});var ti=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,h){return i==Array.prototype||i==Object.prototype||(i[l]=h.value),i};function n(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof ti=="object"&&ti];for(var l=0;l<i.length;++l){var h=i[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=n(this);function r(i,l){if(l)e:{var h=s;i=i.split(".");for(var p=0;p<i.length-1;p++){var k=i[p];if(!(k in h))break e;h=h[k]}i=i[i.length-1],p=h[i],l=l(p),l!=p&&l!=null&&e(h,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var h=0,p=!1,k={next:function(){if(!p&&h<i.length){var O=h++;return{value:l(O,i[O]),done:!1}}return p=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}r("Array.prototype.values",function(i){return i||function(){return o(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function f(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function d(i,l,h){return i.call.apply(i.bind,arguments)}function g(i,l,h){if(!i)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,p),i.apply(l,k)}}return function(){return i.apply(l,arguments)}}function v(i,l,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,v.apply(null,arguments)}function T(i,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),i.apply(this,p)}}function P(i,l){function h(){}h.prototype=l.prototype,i.aa=l.prototype,i.prototype=new h,i.prototype.constructor=i,i.Qb=function(p,k,O){for(var W=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)W[Se-2]=arguments[Se];return l.prototype[k].apply(p,W)}}function M(i){const l=i.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=i[p];return h}return[]}function z(i,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const k=i.length||0,O=p.length||0;i.length=k+O;for(let W=0;W<O;W++)i[k+W]=p[W]}else i.push(p)}}class ${constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function F(i){return/^[\s\xa0]*$/.test(i)}function V(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function B(i){return B[" "](i),i}B[" "]=function(){};var oe=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function te(i,l,h){for(const p in i)l.call(h,i[p],p,i)}function A(i,l){for(const h in i)l.call(void 0,i[h],h,i)}function y(i){const l={};for(const h in i)l[h]=i[h];return l}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,l){let h,p;for(let k=1;k<arguments.length;k++){p=arguments[k];for(h in p)i[h]=p[h];for(let O=0;O<m.length;O++)h=m[O],Object.prototype.hasOwnProperty.call(p,h)&&(i[h]=p[h])}}function S(i){var l=1;i=i.split(":");const h=[];for(;0<l&&i.length;)h.push(i.shift()),l--;return i.length&&h.push(i.join(":")),h}function I(i){c.setTimeout(()=>{throw i},0)}function w(){var i=ut;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class Te{constructor(){this.h=this.g=null}add(l,h){const p=Fe.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Fe=new $(()=>new Pe,i=>i.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let he,ue=!1,ut=new Te,Et=()=>{const i=c.Promise.resolve(void 0);he=()=>{i.then(pt)}};var pt=()=>{for(var i;i=w();){try{i.h.call(i.g)}catch(h){I(h)}var l=Fe;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}ue=!1};function Oe(){this.s=this.s,this.C=this.C}Oe.prototype.s=!1,Oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var pn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return i}();function Ut(i,l){if(Ne.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var h=this.type=i.type,p=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(oe){e:{try{B(l.nodeName);var k=!0;break e}catch{}k=!1}k||(l=null)}}else h=="mouseover"?l=i.fromElement:h=="mouseout"&&(l=i.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:rt[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Ut.aa.h.call(this)}}P(Ut,Ne);var rt={2:"touch",3:"pen",4:"mouse"};Ut.prototype.h=function(){Ut.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var N="closure_listenable_"+(1e6*Math.random()|0),J=0;function K(i,l,h,p,k){this.listener=i,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=k,this.key=++J,this.da=this.fa=!1}function X(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function ve(i){this.src=i,this.g={},this.h=0}ve.prototype.add=function(i,l,h,p,k){var O=i.toString();i=this.g[O],i||(i=this.g[O]=[],this.h++);var W=b(i,l,p,k);return-1<W?(l=i[W],h||(l.fa=!1)):(l=new K(l,this.src,O,!!p,k),l.fa=h,i.push(l)),l};function _(i,l){var h=l.type;if(h in i.g){var p=i.g[h],k=Array.prototype.indexOf.call(p,l,void 0),O;(O=0<=k)&&Array.prototype.splice.call(p,k,1),O&&(X(l),i.g[h].length==0&&(delete i.g[h],i.h--))}}function b(i,l,h,p){for(var k=0;k<i.length;++k){var O=i[k];if(!O.da&&O.listener==l&&O.capture==!!h&&O.ha==p)return k}return-1}var C="closure_lm_"+(1e6*Math.random()|0),D={};function L(i,l,h,p,k){if(Array.isArray(l)){for(var O=0;O<l.length;O++)L(i,l[O],h,p,k);return null}return h=se(h),i&&i[N]?i.K(l,h,f(p)?!!p.capture:!1,k):x(i,l,h,!1,p,k)}function x(i,l,h,p,k,O){if(!l)throw Error("Invalid event type");var W=f(k)?!!k.capture:!!k,Se=G(i);if(Se||(i[C]=Se=new ve(i)),h=Se.add(l,h,p,W,O),h.proxy)return h;if(p=q(),h.proxy=p,p.src=i,p.listener=h,i.addEventListener)pn||(k=W),k===void 0&&(k=!1),i.addEventListener(l.toString(),p,k);else if(i.attachEvent)i.attachEvent(U(l.toString()),p);else if(i.addListener&&i.removeListener)i.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function q(){function i(h){return l.call(i.src,i.listener,h)}const l=Z;return i}function H(i,l,h,p,k){if(Array.isArray(l))for(var O=0;O<l.length;O++)H(i,l[O],h,p,k);else p=f(p)?!!p.capture:!!p,h=se(h),i&&i[N]?(i=i.i,l=String(l).toString(),l in i.g&&(O=i.g[l],h=b(O,h,p,k),-1<h&&(X(O[h]),Array.prototype.splice.call(O,h,1),O.length==0&&(delete i.g[l],i.h--)))):i&&(i=G(i))&&(l=i.g[l.toString()],i=-1,l&&(i=b(l,h,p,k)),(h=-1<i?l[i]:null)&&j(h))}function j(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[N])_(l.i,i);else{var h=i.type,p=i.proxy;l.removeEventListener?l.removeEventListener(h,p,i.capture):l.detachEvent?l.detachEvent(U(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=G(l))?(_(h,i),h.h==0&&(h.src=null,l[C]=null)):X(i)}}}function U(i){return i in D?D[i]:D[i]="on"+i}function Z(i,l){if(i.da)i=!0;else{l=new Ut(l,this);var h=i.listener,p=i.ha||i.src;i.fa&&j(i),i=h.call(p,l)}return i}function G(i){return i=i[C],i instanceof ve?i:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(i){return typeof i=="function"?i:(i[Q]||(i[Q]=function(l){return i.handleEvent(l)}),i[Q])}function ee(){Oe.call(this),this.i=new ve(this),this.M=this,this.F=null}P(ee,Oe),ee.prototype[N]=!0,ee.prototype.removeEventListener=function(i,l,h,p){H(this,i,l,h,p)};function ce(i,l){var h,p=i.F;if(p)for(h=[];p;p=p.F)h.push(p);if(i=i.M,p=l.type||l,typeof l=="string")l=new Ne(l,i);else if(l instanceof Ne)l.target=l.target||i;else{var k=l;l=new Ne(p,i),E(l,k)}if(k=!0,h)for(var O=h.length-1;0<=O;O--){var W=l.g=h[O];k=fe(W,p,!0,l)&&k}if(W=l.g=i,k=fe(W,p,!0,l)&&k,k=fe(W,p,!1,l)&&k,h)for(O=0;O<h.length;O++)W=l.g=h[O],k=fe(W,p,!1,l)&&k}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var h=i.g[l],p=0;p<h.length;p++)X(h[p]);delete i.g[l],i.h--}}this.F=null},ee.prototype.K=function(i,l,h,p){return this.i.add(String(i),l,!1,h,p)},ee.prototype.L=function(i,l,h,p){return this.i.add(String(i),l,!0,h,p)};function fe(i,l,h,p){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var k=!0,O=0;O<l.length;++O){var W=l[O];if(W&&!W.da&&W.capture==h){var Se=W.listener,We=W.ha||W.src;W.fa&&_(i.i,W),k=Se.call(We,p)!==!1&&k}}return k&&!p.defaultPrevented}function Ve(i,l,h){if(typeof i=="function")h&&(i=v(i,h));else if(i&&typeof i.handleEvent=="function")i=v(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(i,l||0)}function Be(i){i.g=Ve(()=>{i.g=null,i.i&&(i.i=!1,Be(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class gt extends Oe{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Be(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qe(i){Oe.call(this),this.h=i,this.g={}}P(qe,Oe);var gn=[];function Us(i){te(i.g,function(l,h){this.g.hasOwnProperty(h)&&j(l)},i),i.g={}}qe.prototype.N=function(){qe.aa.N.call(this),Us(this)},qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var He=c.JSON.stringify,mt=c.JSON.parse,Ur=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function no(){}no.prototype.h=null;function ml(i){return i.h||(i.h=i.i())}function rp(){}var Fs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function so(){Ne.call(this,"d")}P(so,Ne);function ro(){Ne.call(this,"c")}P(ro,Ne);var hs={},vl=null;function io(){return vl=vl||new ee}hs.La="serverreachability";function yl(i){Ne.call(this,hs.La,i)}P(yl,Ne);function js(i){const l=io();ce(l,new yl(l))}hs.STAT_EVENT="statevent";function _l(i,l){Ne.call(this,hs.STAT_EVENT,i),this.stat=l}P(_l,Ne);function Qe(i){const l=io();ce(l,new _l(l,i))}hs.Ma="timingevent";function wl(i,l){Ne.call(this,hs.Ma,i),this.size=l}P(wl,Ne);function $s(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},l)}function Vs(){this.g=!0}Vs.prototype.xa=function(){this.g=!1};function ip(i,l,h,p,k,O){i.info(function(){if(i.g)if(O)for(var W="",Se=O.split("&"),We=0;We<Se.length;We++){var ye=Se[We].split("=");if(1<ye.length){var Ke=ye[0];ye=ye[1];var Je=Ke.split("_");W=2<=Je.length&&Je[1]=="type"?W+(Ke+"="+ye+"&"):W+(Ke+"=redacted&")}}else W=null;else W=O;return"XMLHTTP REQ ("+p+") [attempt "+k+"]: "+l+`
`+h+`
`+W})}function op(i,l,h,p,k,O,W){i.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+k+"]: "+l+`
`+h+`
`+O+" "+W})}function fs(i,l,h,p){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+lp(i,h)+(p?" "+p:"")})}function ap(i,l){i.info(function(){return"TIMEOUT: "+l})}Vs.prototype.info=function(){};function lp(i,l){if(!i.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(i=0;i<h.length;i++)if(Array.isArray(h[i])){var p=h[i];if(!(2>p.length)){var k=p[1];if(Array.isArray(k)&&!(1>k.length)){var O=k[0];if(O!="noop"&&O!="stop"&&O!="close")for(var W=1;W<k.length;W++)k[W]=""}}}}return He(h)}catch{return l}}var oo={NO_ERROR:0,TIMEOUT:8},cp={},ao;function Fr(){}P(Fr,no),Fr.prototype.g=function(){return new XMLHttpRequest},Fr.prototype.i=function(){return{}},ao=new Fr;function mn(i,l,h,p){this.j=i,this.i=l,this.l=h,this.R=p||1,this.U=new qe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bl}function bl(){this.i=null,this.g="",this.h=!1}var Il={},lo={};function co(i,l,h){i.L=1,i.v=Br(Kt(l)),i.m=h,i.P=!0,El(i,null)}function El(i,l){i.F=Date.now(),jr(i),i.A=Kt(i.v);var h=i.A,p=i.R;Array.isArray(p)||(p=[String(p)]),Ul(h.i,"t",p),i.C=0,h=i.j.J,i.h=new bl,i.g=tc(i.j,h?l:null,!i.m),0<i.O&&(i.M=new gt(v(i.Y,i,i.g),i.O)),l=i.U,h=i.g,p=i.ca;var k="readystatechange";Array.isArray(k)||(k&&(gn[0]=k.toString()),k=gn);for(var O=0;O<k.length;O++){var W=L(h,k[O],p||l.handleEvent,!1,l.h||l);if(!W)break;l.g[W.key]=W}l=i.H?y(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),js(),ip(i.i,i.u,i.A,i.l,i.R,i.m)}mn.prototype.ca=function(i){i=i.target;const l=this.M;l&&Jt(i)==3?l.j():this.Y(i)},mn.prototype.Y=function(i){try{if(i==this.g)e:{const Je=Jt(this.g);var l=this.g.Ba();const gs=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||Wl(this.g)))){this.J||Je!=4||l==7||(l==8||0>=gs?js(3):js(2)),uo(this);var h=this.g.Z();this.X=h;t:if(Tl(this)){var p=Wl(this.g);i="";var k=p.length,O=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fn(this),Bs(this);var W="";break t}this.h.i=new c.TextDecoder}for(l=0;l<k;l++)this.h.h=!0,i+=this.h.i.decode(p[l],{stream:!(O&&l==k-1)});p.length=0,this.h.g+=i,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=h==200,op(this.i,this.u,this.A,this.l,this.R,Je,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,We=this.g;if((Se=We.g?We.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Se)){var ye=Se;break t}}ye=null}if(h=ye)fs(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ho(this,h);else{this.o=!1,this.s=3,Qe(12),Fn(this),Bs(this);break e}}if(this.P){h=!0;let Tt;for(;!this.J&&this.C<W.length;)if(Tt=up(this,W),Tt==lo){Je==4&&(this.s=4,Qe(14),h=!1),fs(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==Il){this.s=4,Qe(15),fs(this.i,this.l,W,"[Invalid Chunk]"),h=!1;break}else fs(this.i,this.l,Tt,null),ho(this,Tt);if(Tl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||W.length!=0||this.h.h||(this.s=1,Qe(16),h=!1),this.o=this.o&&h,!h)fs(this.i,this.l,W,"[Invalid Chunked Response]"),Fn(this),Bs(this);else if(0<W.length&&!this.W){this.W=!0;var Ke=this.j;Ke.g==this&&Ke.ba&&!Ke.M&&(Ke.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),yo(Ke),Ke.M=!0,Qe(11))}}else fs(this.i,this.l,W,null),ho(this,W);Je==4&&Fn(this),this.o&&!this.J&&(Je==4?Yl(this.j,this):(this.o=!1,jr(this)))}else Cp(this.g),h==400&&0<W.indexOf("Unknown SID")?(this.s=3,Qe(12)):(this.s=0,Qe(13)),Fn(this),Bs(this)}}}catch{}finally{}};function Tl(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function up(i,l){var h=i.C,p=l.indexOf(`
`,h);return p==-1?lo:(h=Number(l.substring(h,p)),isNaN(h)?Il:(p+=1,p+h>l.length?lo:(l=l.slice(p,p+h),i.C=p+h,l)))}mn.prototype.cancel=function(){this.J=!0,Fn(this)};function jr(i){i.S=Date.now()+i.I,Sl(i,i.I)}function Sl(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=$s(v(i.ba,i),l)}function uo(i){i.B&&(c.clearTimeout(i.B),i.B=null)}mn.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(ap(this.i,this.A),this.L!=2&&(js(),Qe(17)),Fn(this),this.s=2,Bs(this)):Sl(this,this.S-i)};function Bs(i){i.j.G==0||i.J||Yl(i.j,i)}function Fn(i){uo(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,Us(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function ho(i,l){try{var h=i.j;if(h.G!=0&&(h.g==i||fo(h.h,i))){if(!i.K&&fo(h.h,i)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var k=p;if(k[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<i.F)Kr(h),Gr(h);else break e;vo(h),Qe(18)}}else h.za=k[1],0<h.za-h.T&&37500>k[2]&&h.F&&h.v==0&&!h.C&&(h.C=$s(v(h.Za,h),6e3));if(1>=kl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else $n(h,11)}else if((i.K||h.g==i)&&Kr(h),!F(l))for(k=h.Da.g.parse(l),l=0;l<k.length;l++){let ye=k[l];if(h.T=ye[0],ye=ye[1],h.G==2)if(ye[0]=="c"){h.K=ye[1],h.ia=ye[2];const Ke=ye[3];Ke!=null&&(h.la=Ke,h.j.info("VER="+h.la));const Je=ye[4];Je!=null&&(h.Aa=Je,h.j.info("SVER="+h.Aa));const gs=ye[5];gs!=null&&typeof gs=="number"&&0<gs&&(p=1.5*gs,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Tt=i.g;if(Tt){const Jr=Tt.g?Tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jr){var O=p.h;O.g||Jr.indexOf("spdy")==-1&&Jr.indexOf("quic")==-1&&Jr.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(po(O,O.h),O.h=null))}if(p.D){const _o=Tt.g?Tt.g.getResponseHeader("X-HTTP-Session-Id"):null;_o&&(p.ya=_o,ke(p.I,p.D,_o))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-i.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var W=i;if(p.qa=ec(p,p.J?p.ia:null,p.W),W.K){Rl(p.h,W);var Se=W,We=p.L;We&&(Se.I=We),Se.B&&(uo(Se),jr(Se)),p.g=W}else Jl(p);0<h.i.length&&qr(h)}else ye[0]!="stop"&&ye[0]!="close"||$n(h,7);else h.G==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?$n(h,7):mo(h):ye[0]!="noop"&&h.l&&h.l.ta(ye),h.v=0)}}js(4)}catch{}}var hp=class{constructor(i,l){this.g=i,this.map=l}};function Al(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Cl(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function kl(i){return i.h?1:i.g?i.g.size:0}function fo(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function po(i,l){i.g?i.g.add(l):i.h=l}function Rl(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Al.prototype.cancel=function(){if(this.i=Pl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Pl(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const h of i.g.values())l=l.concat(h.D);return l}return M(i.i)}function fp(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(u(i)){for(var l=[],h=i.length,p=0;p<h;p++)l.push(i[p]);return l}l=[],h=0;for(p in i)l[h++]=i[p];return l}function dp(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(u(i)||typeof i=="string"){var l=[];i=i.length;for(var h=0;h<i;h++)l.push(h);return l}l=[],h=0;for(const p in i)l[h++]=p;return l}}}function Ol(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(u(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var h=dp(i),p=fp(i),k=p.length,O=0;O<k;O++)l.call(void 0,p[O],h&&h[O],i)}var Nl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pp(i,l){if(i){i=i.split("&");for(var h=0;h<i.length;h++){var p=i[h].indexOf("="),k=null;if(0<=p){var O=i[h].substring(0,p);k=i[h].substring(p+1)}else O=i[h];l(O,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function jn(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof jn){this.h=i.h,$r(this,i.j),this.o=i.o,this.g=i.g,Vr(this,i.s),this.l=i.l;var l=i.i,h=new zs;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Dl(this,h),this.m=i.m}else i&&(l=String(i).match(Nl))?(this.h=!1,$r(this,l[1]||"",!0),this.o=Hs(l[2]||""),this.g=Hs(l[3]||"",!0),Vr(this,l[4]),this.l=Hs(l[5]||"",!0),Dl(this,l[6]||"",!0),this.m=Hs(l[7]||"")):(this.h=!1,this.i=new zs(null,this.h))}jn.prototype.toString=function(){var i=[],l=this.j;l&&i.push(Ws(l,xl,!0),":");var h=this.g;return(h||l=="file")&&(i.push("//"),(l=this.o)&&i.push(Ws(l,xl,!0),"@"),i.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&i.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(Ws(h,h.charAt(0)=="/"?vp:mp,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",Ws(h,_p)),i.join("")};function Kt(i){return new jn(i)}function $r(i,l,h){i.j=h?Hs(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function Vr(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function Dl(i,l,h){l instanceof zs?(i.i=l,wp(i.i,i.h)):(h||(l=Ws(l,yp)),i.i=new zs(l,i.h))}function ke(i,l,h){i.i.set(l,h)}function Br(i){return ke(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Hs(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ws(i,l,h){return typeof i=="string"?(i=encodeURI(i).replace(l,gp),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function gp(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var xl=/[#\/\?@]/g,mp=/[#\?:]/g,vp=/[#\?]/g,yp=/[#\?@]/g,_p=/#/g;function zs(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function vn(i){i.g||(i.g=new Map,i.h=0,i.i&&pp(i.i,function(l,h){i.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}t=zs.prototype,t.add=function(i,l){vn(this),this.i=null,i=ds(this,i);var h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(l),this.h+=1,this};function Ll(i,l){vn(i),l=ds(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Ml(i,l){return vn(i),l=ds(i,l),i.g.has(l)}t.forEach=function(i,l){vn(this),this.g.forEach(function(h,p){h.forEach(function(k){i.call(l,k,p,this)},this)},this)},t.na=function(){vn(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const k=i[p];for(let O=0;O<k.length;O++)h.push(l[p])}return h},t.V=function(i){vn(this);let l=[];if(typeof i=="string")Ml(this,i)&&(l=l.concat(this.g.get(ds(this,i))));else{i=Array.from(this.g.values());for(let h=0;h<i.length;h++)l=l.concat(i[h])}return l},t.set=function(i,l){return vn(this),this.i=null,i=ds(this,i),Ml(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},t.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function Ul(i,l,h){Ll(i,l),0<h.length&&(i.i=null,i.g.set(ds(i,l),M(h)),i.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const O=encodeURIComponent(String(p)),W=this.V(p);for(p=0;p<W.length;p++){var k=O;W[p]!==""&&(k+="="+encodeURIComponent(String(W[p]))),i.push(k)}}return this.i=i.join("&")};function ds(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function wp(i,l){l&&!i.j&&(vn(i),i.i=null,i.g.forEach(function(h,p){var k=p.toLowerCase();p!=k&&(Ll(this,p),Ul(this,k,h))},i)),i.j=l}function bp(i,l){const h=new Vs;if(c.Image){const p=new Image;p.onload=T(yn,h,"TestLoadImage: loaded",!0,l,p),p.onerror=T(yn,h,"TestLoadImage: error",!1,l,p),p.onabort=T(yn,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=T(yn,h,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=i}else l(!1)}function Ip(i,l){const h=new Vs,p=new AbortController,k=setTimeout(()=>{p.abort(),yn(h,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:p.signal}).then(O=>{clearTimeout(k),O.ok?yn(h,"TestPingServer: ok",!0,l):yn(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(k),yn(h,"TestPingServer: error",!1,l)})}function yn(i,l,h,p,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),p(h)}catch{}}function Ep(){this.g=new Ur}function Tp(i,l,h){const p=h||"";try{Ol(i,function(k,O){let W=k;f(k)&&(W=He(k)),l.push(p+O+"="+encodeURIComponent(W))})}catch(k){throw l.push(p+"type="+encodeURIComponent("_badmap")),k}}function Hr(i){this.l=i.Ub||null,this.j=i.eb||!1}P(Hr,no),Hr.prototype.g=function(){return new Wr(this.l,this.j)},Hr.prototype.i=function(i){return function(){return i}}({});function Wr(i,l){ee.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Wr,ee),t=Wr.prototype,t.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,qs(this)},t.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gs(this)),this.readyState=0},t.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,qs(this)),this.g&&(this.readyState=3,qs(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fl(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fl(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}t.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?Gs(this):qs(this),this.readyState==3&&Fl(this)}},t.Ra=function(i){this.g&&(this.response=this.responseText=i,Gs(this))},t.Qa=function(i){this.g&&(this.response=i,Gs(this))},t.ga=function(){this.g&&Gs(this)};function Gs(i){i.readyState=4,i.l=null,i.j=null,i.v=null,qs(i)}t.setRequestHeader=function(i,l){this.u.append(i,l)},t.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=l.next();return i.join(`\r
`)};function qs(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Wr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function jl(i){let l="";return te(i,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function go(i,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=jl(h),typeof i=="string"?h!=null&&encodeURIComponent(String(h)):ke(i,l,h))}function xe(i){ee.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(xe,ee);var Sp=/^https?$/i,Ap=["POST","PUT"];t=xe.prototype,t.Ha=function(i){this.J=i},t.ea=function(i,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ao.g(),this.v=this.o?ml(this.o):ml(ao),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(O){$l(this,O);return}if(i=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var k in p)h.set(k,p[k]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const O of p.keys())h.set(O,p.get(O));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(O=>O.toLowerCase()=="content-type"),k=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ap,l,void 0))||p||k||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,W]of h)this.g.setRequestHeader(O,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hl(this),this.u=!0,this.g.send(i),this.u=!1}catch(O){$l(this,O)}};function $l(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,Vl(i),zr(i)}function Vl(i){i.A||(i.A=!0,ce(i,"complete"),ce(i,"error"))}t.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,ce(this,"complete"),ce(this,"abort"),zr(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zr(this,!0)),xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Bl(this):this.bb())},t.bb=function(){Bl(this)};function Bl(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Jt(i)!=4||i.Z()!=2)){if(i.u&&Jt(i)==4)Ve(i.Ea,0,i);else if(ce(i,"readystatechange"),Jt(i)==4){i.h=!1;try{const W=i.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=W===0){var k=String(i.D).match(Nl)[1]||null;!k&&c.self&&c.self.location&&(k=c.self.location.protocol.slice(0,-1)),p=!Sp.test(k?k.toLowerCase():"")}h=p}if(h)ce(i,"complete"),ce(i,"success");else{i.m=6;try{var O=2<Jt(i)?i.g.statusText:""}catch{O=""}i.l=O+" ["+i.Z()+"]",Vl(i)}}finally{zr(i)}}}}function zr(i,l){if(i.g){Hl(i);const h=i.g,p=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||ce(i,"ready");try{h.onreadystatechange=p}catch{}}}function Hl(i){i.I&&(c.clearTimeout(i.I),i.I=null)}t.isActive=function(){return!!this.g};function Jt(i){return i.g?i.g.readyState:0}t.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),mt(l)}};function Wl(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Cp(i){const l={};i=(i.g&&2<=Jt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<i.length;p++){if(F(i[p]))continue;var h=S(i[p]);const k=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const O=l[k]||[];l[k]=O,O.push(h)}A(l,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ks(i,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||l}function zl(i){this.Aa=0,this.i=[],this.j=new Vs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ks("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ks("baseRetryDelayMs",5e3,i),this.cb=Ks("retryDelaySeedMs",1e4,i),this.Wa=Ks("forwardChannelMaxRetries",2,i),this.wa=Ks("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Al(i&&i.concurrentRequestLimit),this.Da=new Ep,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zl.prototype,t.la=8,t.G=1,t.connect=function(i,l,h,p){Qe(0),this.W=i,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=ec(this,null,this.W),qr(this)};function mo(i){if(Gl(i),i.G==3){var l=i.U++,h=Kt(i.I);if(ke(h,"SID",i.K),ke(h,"RID",l),ke(h,"TYPE","terminate"),Js(i,h),l=new mn(i,i.j,l),l.L=2,l.v=Br(Kt(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=tc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),jr(l)}Zl(i)}function Gr(i){i.g&&(yo(i),i.g.cancel(),i.g=null)}function Gl(i){Gr(i),i.u&&(c.clearTimeout(i.u),i.u=null),Kr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function qr(i){if(!Cl(i.h)&&!i.s){i.s=!0;var l=i.Ga;he||Et(),ue||(he(),ue=!0),ut.add(l,i),i.B=0}}function kp(i,l){return kl(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=$s(v(i.Ga,i,l),Ql(i,i.B)),i.B++,!0)}t.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const k=new mn(this,this.j,i);let O=this.o;if(this.S&&(O?(O=y(O),E(O,this.S)):O=this.S),this.m!==null||this.O||(k.H=O,O=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Kl(this,k,l),h=Kt(this.I),ke(h,"RID",i),ke(h,"CVER",22),this.D&&ke(h,"X-HTTP-Session-Id",this.D),Js(this,h),O&&(this.O?l="headers="+encodeURIComponent(String(jl(O)))+"&"+l:this.m&&go(h,this.m,O)),po(this.h,k),this.Ua&&ke(h,"TYPE","init"),this.P?(ke(h,"$req",l),ke(h,"SID","null"),k.T=!0,co(k,h,null)):co(k,h,l),this.G=2}}else this.G==3&&(i?ql(this,i):this.i.length==0||Cl(this.h)||ql(this))};function ql(i,l){var h;l?h=l.l:h=i.U++;const p=Kt(i.I);ke(p,"SID",i.K),ke(p,"RID",h),ke(p,"AID",i.T),Js(i,p),i.m&&i.o&&go(p,i.m,i.o),h=new mn(i,i.j,h,i.B+1),i.m===null&&(h.H=i.o),l&&(i.i=l.D.concat(i.i)),l=Kl(i,h,1e3),h.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),po(i.h,h),co(h,p,l)}function Js(i,l){i.H&&te(i.H,function(h,p){ke(l,p,h)}),i.l&&Ol({},function(h,p){ke(l,p,h)})}function Kl(i,l,h){h=Math.min(i.i.length,h);var p=i.l?v(i.l.Na,i.l,i):null;e:{var k=i.i;let O=-1;for(;;){const W=["count="+h];O==-1?0<h?(O=k[0].g,W.push("ofs="+O)):O=0:W.push("ofs="+O);let Se=!0;for(let We=0;We<h;We++){let ye=k[We].g;const Ke=k[We].map;if(ye-=O,0>ye)O=Math.max(0,k[We].g-100),Se=!1;else try{Tp(Ke,W,"req"+ye+"_")}catch{p&&p(Ke)}}if(Se){p=W.join("&");break e}}}return i=i.i.splice(0,h),l.D=i,p}function Jl(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;he||Et(),ue||(he(),ue=!0),ut.add(l,i),i.v=0}}function vo(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=$s(v(i.Fa,i),Ql(i,i.v)),i.v++,!0)}t.Fa=function(){if(this.u=null,Xl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=$s(v(this.ab,this),i)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Qe(10),Gr(this),Xl(this))};function yo(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Xl(i){i.g=new mn(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=Kt(i.qa);ke(l,"RID","rpc"),ke(l,"SID",i.K),ke(l,"AID",i.T),ke(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&ke(l,"TO",i.ja),ke(l,"TYPE","xmlhttp"),Js(i,l),i.m&&i.o&&go(l,i.m,i.o),i.L&&(i.g.I=i.L);var h=i.g;i=i.ia,h.L=1,h.v=Br(Kt(l)),h.m=null,h.P=!0,El(h,i)}t.Za=function(){this.C!=null&&(this.C=null,Gr(this),vo(this),Qe(19))};function Kr(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Yl(i,l){var h=null;if(i.g==l){Kr(i),yo(i),i.g=null;var p=2}else if(fo(i.h,l))h=l.D,Rl(i.h,l),p=1;else return;if(i.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var k=i.B;p=io(),ce(p,new wl(p,h)),qr(i)}else Jl(i);else if(k=l.s,k==3||k==0&&0<l.X||!(p==1&&kp(i,l)||p==2&&vo(i)))switch(h&&0<h.length&&(l=i.h,l.i=l.i.concat(h)),k){case 1:$n(i,5);break;case 4:$n(i,10);break;case 3:$n(i,6);break;default:$n(i,2)}}}function Ql(i,l){let h=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(h*=2),h*l}function $n(i,l){if(i.j.info("Error code "+l),l==2){var h=v(i.fb,i),p=i.Xa;const k=!p;p=new jn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||$r(p,"https"),Br(p),k?bp(p.toString(),h):Ip(p.toString(),h)}else Qe(2);i.G=0,i.l&&i.l.sa(l),Zl(i),Gl(i)}t.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Qe(2)):(this.j.info("Failed to ping google.com"),Qe(1))};function Zl(i){if(i.G=0,i.ka=[],i.l){const l=Pl(i.h);(l.length!=0||i.i.length!=0)&&(z(i.ka,l),z(i.ka,i.i),i.h.i.length=0,M(i.i),i.i.length=0),i.l.ra()}}function ec(i,l,h){var p=h instanceof jn?Kt(h):new jn(h);if(p.g!="")l&&(p.g=l+"."+p.g),Vr(p,p.s);else{var k=c.location;p=k.protocol,l=l?l+"."+k.hostname:k.hostname,k=+k.port;var O=new jn(null);p&&$r(O,p),l&&(O.g=l),k&&Vr(O,k),h&&(O.l=h),p=O}return h=i.D,l=i.ya,h&&l&&ke(p,h,l),ke(p,"VER",i.la),Js(i,p),p}function tc(i,l,h){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new xe(new Hr({eb:h})):new xe(i.pa),l.Ha(i.J),l}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function nc(){}t=nc.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function vt(i,l){ee.call(this),this.g=new zl(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!F(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!F(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new ps(this)}P(vt,ee),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){mo(this.g)},vt.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.u&&(h={},h.__data__=He(i),i=h);l.i.push(new hp(l.Ya++,i)),l.G==3&&qr(l)},vt.prototype.N=function(){this.g.l=null,delete this.j,mo(this.g),delete this.g,vt.aa.N.call(this)};function sc(i){so.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const h in l){i=h;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}P(sc,so);function rc(){ro.call(this),this.status=1}P(rc,ro);function ps(i){this.g=i}P(ps,nc),ps.prototype.ua=function(){ce(this.g,"a")},ps.prototype.ta=function(i){ce(this.g,new sc(i))},ps.prototype.sa=function(i){ce(this.g,new rc)},ps.prototype.ra=function(){ce(this.g,"b")},vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,oo.NO_ERROR=0,oo.TIMEOUT=8,oo.HTTP_ERROR=6,cp.COMPLETE="complete",rp.EventType=Fs,Fs.OPEN="a",Fs.CLOSE="b",Fs.ERROR="c",Fs.MESSAGE="d",ee.prototype.listen=ee.prototype.K,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha}).apply(typeof ti<"u"?ti:typeof self<"u"?self:typeof window<"u"?window:{});const Wu="@firebase/firestore",zu="4.8.0";/**
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
 */let Lr="11.10.0";/**
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
 */const Ds=new Xi("@firebase/firestore");function kt(t,...e){if(Ds.logLevel<=Ie.DEBUG){const n=e.map(hl);Ds.debug(`Firestore (${Lr}): ${t}`,...n)}}function Jd(t,...e){if(Ds.logLevel<=Ie.ERROR){const n=e.map(hl);Ds.error(`Firestore (${Lr}): ${t}`,...n)}}function ub(t,...e){if(Ds.logLevel<=Ie.WARN){const n=e.map(hl);Ds.warn(`Firestore (${Lr}): ${t}`,...n)}}function hl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Ar(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,Xd(t,s,n)}function Xd(t,e,n){let s=`FIRESTORE (${Lr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Jd(s),new Error(s)}function fr(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||Xd(e,r,s)}/**
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
 */const pe={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class ge extends Lt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class dr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Yd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class fb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class db{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fr(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let o=new dr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new dr,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},c=u=>{kt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(kt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new dr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(kt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(fr(typeof s.accessToken=="string",31837,{l:s}),new Yd(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fr(e===null||typeof e=="string",2055,{h:e}),new et(e)}}class pb{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=et.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class gb{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new pb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,At(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){fr(this.o===void 0,3512);const s=o=>{o.error!=null&&kt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,kt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>s(o))};const r=o=>{kt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?r(o):kt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Gu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fr(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Gu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */function yb(){return new TextEncoder}/**
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
 */class _b{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=vb(40);for(let o=0;o<r.length;++o)s.length<20&&r[o]<n&&(s+=e.charAt(r[o]%62))}return s}}function Ot(t,e){return t<e?-1:t>e?1:0}function wb(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=t.codePointAt(n),r=e.codePointAt(n);if(s!==r){if(s<128&&r<128)return Ot(s,r);{const o=yb(),a=bb(o.encode(qu(t,n)),o.encode(qu(e,n)));return a!==0?a:Ot(s,r)}}n+=s>65535?2:1}return Ot(t.length,e.length)}function qu(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function bb(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Ot(t[n],e[n]);return Ot(t.length,e.length)}/**
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
 */const Ku="__name__";class $t{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ar(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&Ar(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return $t.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $t?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const o=$t.compareSegments(e.get(r),n.get(r));if(o!==0)return o}return Ot(e.length,n.length)}static compareSegments(e,n){const s=$t.isNumericId(e),r=$t.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?$t.extractNumericId(e).compare($t.extractNumericId(n)):wb(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ul.fromString(e.substring(4,e.length-2))}}class St extends $t{construct(e,n,s){return new St(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ge(pe.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new St(n)}static emptyPath(){return new St([])}}const Ib=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Kn extends $t{construct(e,n,s){return new Kn(e,n,s)}static isValidIdentifier(e){return Ib.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Kn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ku}static keyField(){return new Kn([Ku])}static fromServerFormat(e){const n=[];let s="",r=0;const o=()=>{if(s.length===0)throw new ge(pe.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new ge(pe.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ge(pe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(o(),r++)}if(o(),a)throw new ge(pe.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Kn(n)}static emptyPath(){return new Kn([])}}/**
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
 */class Yn{constructor(e){this.path=e}static fromPath(e){return new Yn(St.fromString(e))}static fromName(e){return new Yn(St.fromString(e).popFirst(5))}static empty(){return new Yn(St.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&St.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return St.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Yn(new St(e.slice()))}}function Eb(t,e,n,s){if(e===!0&&s===!0)throw new ge(pe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tb(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Sb(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ar(12329,{type:typeof t})}function Ab(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ge(pe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sb(t);throw new ge(pe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ue(t,e){const n={typeString:t};return e&&(n.value=e),n}function Mr(t,e){if(!Tb(t))throw new ge(pe.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const r=e[s].typeString,o="value"in e[s]?{value:e[s].value}:void 0;if(!(s in t)){n=`JSON missing required field: '${s}'`;break}const a=t[s];if(r&&typeof a!==r){n=`JSON field '${s}' must be a ${r}.`;break}if(o!==void 0&&a!==o.value){n=`Expected '${s}' field to equal '${o.value}'`;break}}if(n)throw new ge(pe.INVALID_ARGUMENT,n);return!0}/**
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
 */const Ju=-62135596800,Xu=1e6;class Bt{static now(){return Bt.fromMillis(Date.now())}static fromDate(e){return Bt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Xu);return new Bt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ge(pe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ge(pe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ju)throw new ge(pe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ge(pe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xu}_compareTo(e){return this.seconds===e.seconds?Ot(this.nanoseconds,e.nanoseconds):Ot(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Bt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Mr(e,Bt._jsonSchema))return new Bt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ju;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Bt._jsonSchemaVersion="firestore/timestamp/1.0",Bt._jsonSchema={type:Ue("string",Bt._jsonSchemaVersion),seconds:Ue("number"),nanoseconds:Ue("number")};function Cb(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class kb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new kb("Invalid base64 string: "+o):o}}(e);return new os(n)}static fromUint8Array(e){const n=function(r){let o="";for(let a=0;a<r.length;++a)o+=String.fromCharCode(r[a]);return o}(e);return new os(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ot(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}os.EMPTY_BYTE_STRING=new os("");const ya="(default)";class Ni{constructor(e,n){this.projectId=e,this.database=n||ya}static empty(){return new Ni("","")}get isDefaultDatabase(){return this.database===ya}isEqual(e){return e instanceof Ni&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class Rb{constructor(e,n=null,s=[],r=[],o=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Pb(t){return new Rb(t)}/**
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
 */var Yu,de;(de=Yu||(Yu={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ul([4294967295,4294967295],0);/**
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
 */const Ob=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=1048576;function zo(){return typeof document<"u"?document:null}/**
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
 */class Db{constructor(e,n,s=1e3,r=1.5,o=6e4){this.Fi=e,this.timerId=n,this.d_=s,this.E_=r,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),r=Math.max(0,n-s);r>0&&kt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,r,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */class fl{constructor(e,n,s,r,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=o,this.deferred=new dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,o){const a=Date.now()+s,c=new fl(e,n,a,r,o);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ge(pe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Qu,Zu;(Zu=Qu||(Qu={})).Fa="default",Zu.Cache="cache";/**
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
 */function xb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="firestore.googleapis.com",th=!0;class nh{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ge(pe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Qd,this.ssl=th}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:th;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ob;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Nb)throw new ge(pe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Eb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xb((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new ge(pe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new ge(pe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new ge(pe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zd{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ge(pe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ge(pe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new hb;switch(s.type){case"firstParty":return new gb(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ge(pe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=eh.get(n);s&&(kt("ComponentProvider","Removing Datastore"),eh.delete(n),s.terminate())}(this),Promise.resolve()}}function Lb(t,e,n,s={}){var r;t=Ab(t,Zd);const o=Pr(e),a=t._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;o&&($f(`https://${u}`),Vf("Firestore",!0)),a.host!==Qd&&a.host!==u&&ub("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:u,ssl:o,emulatorOptions:s});if(!Ln(f,c)&&(t._setSettings(f),s.mockUserToken)){let d,g;if(typeof s.mockUserToken=="string")d=s.mockUserToken,g=et.MOCK_USER;else{d=vy(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new ge(pe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new et(v)}t._authCredentials=new fb(new Yd(d,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new dl(this.firestore,e,this._query)}}class Ht{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ht(this.firestore,e,this._key)}toJSON(){return{type:Ht._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Mr(n,Ht._jsonSchema))return new Ht(e,s||null,new Yn(St.fromString(n.referencePath)))}}Ht._jsonSchemaVersion="firestore/documentReference/1.0",Ht._jsonSchema={type:Ue("string",Ht._jsonSchemaVersion),referencePath:Ue("string")};class pl extends dl{constructor(e,n,s){super(e,n,Pb(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ht(this.firestore,null,new Yn(e))}withConverter(e){return new pl(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="AsyncQueue";class rh{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Db(this,"async_queue_retry"),this.oc=()=>{const s=zo();s&&kt(sh,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const n=zo();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=zo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new dr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Cb(e))throw e;kt(sh,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,Jd("INTERNAL UNHANDLED ERROR: ",ih(s)),s}).then(s=>(this.nc=!1,s))));return this._c=n,n}enqueueAfterDelay(e,n,s){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const r=fl.createAndSchedule(this,e,n,s,o=>this.lc(o));return this.ec.push(r),r}ac(){this.tc&&Ar(47125,{hc:ih(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function ih(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Mb extends Zd{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new rh,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new rh(e),this._firestoreClient=void 0,await e}}}function Ub(t,e){const n=typeof t=="object"?t:qa(),s=typeof t=="string"?t:ya,r=us(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const o=gy("firestore");o&&Lb(r,...o)}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sn(os.fromBase64String(e))}catch(n){throw new ge(pe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new sn(os.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:sn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Mr(e,sn._jsonSchema))return sn.fromBase64String(e.bytes)}}sn._jsonSchemaVersion="firestore/bytes/1.0",sn._jsonSchema={type:Ue("string",sn._jsonSchemaVersion),bytes:Ue("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ge(pe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Kn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ts{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ge(pe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ge(pe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ot(this._lat,e._lat)||Ot(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ts._jsonSchemaVersion}}static fromJSON(e){if(Mr(e,ts._jsonSchema))return new ts(e.latitude,e.longitude)}}ts._jsonSchemaVersion="firestore/geoPoint/1.0",ts._jsonSchema={type:Ue("string",ts._jsonSchemaVersion),latitude:Ue("number"),longitude:Ue("number")};/**
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
 */class ns{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let o=0;o<s.length;++o)if(s[o]!==r[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ns._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Mr(e,ns._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new ns(e.vectorValues);throw new ge(pe.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ns._jsonSchemaVersion="firestore/vectorValue/1.0",ns._jsonSchema={type:Ue("string",ns._jsonSchemaVersion),vectorValues:Ue("object")};const Fb=new RegExp("[~\\*/\\[\\]]");function jb(t,e,n){if(e.search(Fb)>=0)throw oh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new ep(...e.split("."))._internalPath}catch{throw oh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function oh(t,e,n,s,r){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new ge(pe.INVALID_ARGUMENT,o+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n,s,r,o){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $b(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(np("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $b extends tp{data(){return super.data()}}function np(t,e){return typeof e=="string"?jb(t,e):e instanceof ep?e._internalPath:e._delegate._internalPath}class ni{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ks extends tp{constructor(e,n,s,r,o,a){super(e,n,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(np("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(pe.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ks._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ks._jsonSchemaVersion="firestore/documentSnapshot/1.0",ks._jsonSchema={type:Ue("string",ks._jsonSchemaVersion),bundleSource:Ue("string","DocumentSnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class fi extends ks{data(e={}){return super.data(e)}}class pr{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ni(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new fi(this._firestore,this._userDataWriter,s.key,s,new ni(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ge(pe.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,o){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(c=>{const u=new fi(r._firestore,r._userDataWriter,c.doc.key,c.doc,new ni(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const u=new fi(r._firestore,r._userDataWriter,c.doc.key,c.doc,new ni(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let f=-1,d=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:Vb(c.type),doc:u,oldIndex:f,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(pe.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=pr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=_b.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],r=[];return this.docs.forEach(o=>{o._document!==null&&(n.push(o._document),s.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),r.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Vb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ar(61501,{type:t})}}pr._jsonSchemaVersion="firestore/querySnapshot/1.0",pr._jsonSchema={type:Ue("string",pr._jsonSchemaVersion),bundleSource:Ue("string","QuerySnapshot"),bundleName:Ue("string"),bundle:Ue("string")};(function(e,n=!0){(function(r){Lr=r})(Ls),Gt(new xt("firestore",(s,{instanceIdentifier:r,options:o})=>{const a=s.getProvider("app").getImmediate(),c=new Mb(new db(s.getProvider("auth-internal")),new mb(a,s.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new ge(pe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ni(f.options.projectId,d)}(a,r),a);return o=Object.assign({useFetchStreams:n},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),bt(Wu,zu,e),bt(Wu,zu,"esm2017")})();const Bb={apiKey:"AIzaSyBzR2w75nixO9H8zjUbxVajKx0npksSGrg",authDomain:"norsk-cafe.firebaseapp.com",projectId:"norsk-cafe",storageBucket:"norsk-cafe.firebasestorage.app",messagingSenderId:"123232580709",appId:"1:123232580709:web:c6e6dfed117db9d3b0028c",measurementId:void 0},gl=Kf(Bb);o0(gl);const as=lb(gl);Ub(gl);const Hb="/assets/coffee-cKRUD7yK.svg",_a=Ee([]),Go=Ee(0),ah=Ee(0),Wb=De(()=>_a.value.filter(t=>t.correct).length);function sp(){return{reviewedWords:_a,reviewedCount:ah,correctCount:Wb,totalCount:Go,setTotalCount:t=>Go.value=t,resetStats:()=>{_a.value=[],ah.value=0,Go.value=0}}}const wa="/assets/panda256-BLVgM0lT.png",Mt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},zb=["src"],Gb={key:0,class:"profile-menu"},qb={class:"profile-header"},Kb=["src"],Jb={class:"profile-info"},Xb={class:"profile-name"},Yb={__name:"UserMenu",props:{user:Object},setup(t){const e=t,n=xs(),s=Ee(!1),r=Ee(null);ls(()=>{document.addEventListener("click",a)}),Fa(()=>{document.removeEventListener("click",a)});function o(){s.value=!s.value}function a(u){r.value&&!r.value.contains(u.target)&&(s.value=!1)}function c(){as.signOut(),n.push("/login"),s.value=!1}return(u,f)=>(re(),ae("div",{class:"profile-menu-wrapper",ref_key:"menuRef",ref:r},[R("img",{src:e.user.photoURL||me(wa),alt:"User Profile",class:"user-icon",onClick:o},null,8,zb),Me(wf,{name:"fade-slide"},{default:Vi(()=>[s.value?(re(),ae("div",Gb,[R("div",qb,[R("img",{src:e.user.photoURL||me(wa),alt:"Large profile",class:"profile-large"},null,8,Kb),R("div",Jb,[R("div",Xb,Y(e.user.displayName||e.user.email),1),f[1]||(f[1]=R("div",{class:"profile-level"},"Level 18",-1))])]),f[2]||(f[2]=R("hr",{class:"profile-divider"},null,-1)),R("button",{class:"menu-item",onClick:f[0]||(f[0]=d=>me(n).push("/account"))},"Konto Innstillinger"),R("button",{class:"menu-item",onClick:c},"Logg ut")])):at("",!0)]),_:1})],512))}},Qb=Mt(Yb,[["__scopeId","data-v-45a4e819"]]),Zb={class:"header"},eI={class:"header-left"},tI=["src"],nI={key:0,class:"review-stats"},sI={class:"accuracy"},rI={key:1},iI={class:"header-user"},oI={__name:"Header",setup(t){const{reviewedCount:e,correctCount:n,totalCount:s,reviewedWords:r}=sp(),o=xs(),a=oy(),c=Ee(null),u=De(()=>a.name==="review"),f=De(()=>!n.value||!e.value||e.value===0?100:Math.round(n.value/r.value.length*100));ls(()=>{c.value=as.currentUser,as.onAuthStateChanged(v=>{c.value=v})});function d(){o.push("/login")}function g(){o.push("/dashboard")}return(v,T)=>(re(),ae("header",Zb,[R("div",eI,[R("button",{class:"header-title-button",onClick:g},[T[0]||(T[0]=R("span",{class:"header-title-text"},"Norsk",-1)),R("img",{src:me(Hb),alt:"Logo",class:"header-logo"},null,8,tI),T[1]||(T[1]=R("span",{class:"header-title-text"},"Cafe",-1))])]),u.value?(re(),ae("div",nI,[R("span",null,Y(me(e))+" / "+Y(me(s)/2)+" ord",1),R("span",sI,Y(f.value)+"% riktige",1)])):(re(),ae("div",rI,[R("div",iI,[c.value?(re(),_i(Qb,{key:1,user:c.value},null,8,["user"])):(re(),ae("button",{key:0,class:"login-button",onClick:d}," Login "))])]))]))}},aI=Mt(oI,[["__scopeId","data-v-c035fc0b"]]),lI="data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%23fff'/%3e%3c/svg%3e",cI={class:"footer"},uI={class:"footer-start"},hI={class:"footer-end"},fI={href:"https://github.com/fredrikofstad/norskcafe",target:"_blank",rel:"noopener noreferrer",class:"github-link"},dI=["src"],pI={__name:"Footer",setup(t){return(e,n)=>{const s=Jh("router-link");return re(),ae("footer",cI,[R("div",uI,[n[1]||(n[1]=R("span",{class:"copyright"},"© 2025 Fredrik Ofstad",-1)),Me(s,{to:"/privacy",class:"privacy-link"},{default:Vi(()=>n[0]||(n[0]=[ot("Privacy Policy")])),_:1,__:[0]})]),R("div",hI,[R("a",fI,[R("img",{src:me(lI),alt:"GitHub",class:"github-icon"},null,8,dI)])])])}}},gI=Mt(pI,[["__scopeId","data-v-b36a3877"]]),mI={class:"page"},vI={class:"main-content"},yI={__name:"App",setup(t){return(e,n)=>{const s=Jh("router-view");return re(),ae("div",mI,[Me(aI),R("main",vI,[Me(s)]),Me(gI)])}}},_I={class:"home-page"},wI={__name:"Home",setup(t){const e=xs();function n(){as.currentUser?e.push("/dashboard"):e.push("/login")}return(s,r)=>(re(),ae("div",_I,[R("main",{class:"welcome"},[r[0]||(r[0]=R("div",{class:"welcome"},null,-1)),r[1]||(r[1]=R("h1",null,"Velkommen!",-1)),r[2]||(r[2]=R("p",null,"Her på Norsk Cafe skal vi lære norsk på en morsom og effektiv måte!",-1)),R("button",{class:"start-button",onClick:n}," La oss komme i gang! ")])]))}},bI=Mt(wI,[["__scopeId","data-v-ac2fe9f3"]]),II={class:"login-page"},EI={class:"login-content"},TI={class:"login-inner"},SI={class:"gsi-material-button"},AI={class:"gsi-material-button-content-wrapper"},CI={class:"gsi-material-button-icon"},kI={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",style:{width:"24px",height:"24px"}},RI={__name:"Login",setup(t){const e=xs();async function n(){const s=new nn;try{await v1(as,s),e.push("/dashboard")}catch(r){console.error("Google sign-in failed",r),alert("Google sign-in failed: "+r.message)}}return(s,r)=>(re(),ae("div",II,[R("main",EI,[R("div",TI,[r[2]||(r[2]=R("h2",{class:"login-title"},"Velkommen tilbake!",-1)),r[3]||(r[3]=R("p",{class:"login-subtitle"}," Logg inn med Google for å fortsette å lære norsk. ",-1)),R("div",{class:"google-wrapper",onClick:n},[R("button",SI,[R("div",AI,[R("div",CI,[(re(),ae("svg",kI,r[0]||(r[0]=[hm(`<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0\r
                    14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-e7300c23></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58\r
                    2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-e7300c23></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92\r
                    16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-e7300c23></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15\r
                    1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98\r
                    6.19C6.51 42.62 14.62 48 24 48z" data-v-e7300c23></path><path fill="none" d="M0 0h48v48H0z" data-v-e7300c23></path>`,5)])))]),r[1]||(r[1]=R("span",{class:"gsi-material-button-contents"},"Fortsett med Google",-1))])])])])])]))}},PI=Mt(RI,[["__scopeId","data-v-e7300c23"]]),OI="/assets/read-lc7uTVG8.png",NI="/assets/review-BO4Lya47.png",DI="/assets/listen-BRpUMTBZ.png",xI={class:"dashboard-page"},LI={class:"dashboard-content"},MI={class:"dashboard-welcome"},UI={class:"cards-container"},FI={__name:"Dashboard",setup(t){const e=xs(),n=Ee("");ls(()=>{Y0(as,r=>{if(r){const o=r.displayName||r.email||"Bruker";n.value=o.split(" ")[0]}else e.push("/login")})});function s(){e.push("/review")}return(r,o)=>(re(),ae("div",xI,[R("main",LI,[R("div",MI,[R("h2",null,"Hei "+Y(n.value)+"!",1),o[2]||(o[2]=R("p",null,"Velkommen til ditt dashboard. Ta en titt rundt!",-1))]),R("div",UI,[R("div",{class:"dashboard-card",onClick:o[0]||(o[0]=(...a)=>r.goToLearn&&r.goToLearn(...a))},o[3]||(o[3]=[R("div",{class:"card-text"},[R("h3",null,"Lær"),R("p",null,"Start en ny leksjon og lær nye ord.")],-1),R("img",{src:OI,alt:"Lær",class:"card-icon"},null,-1)])),R("div",{class:"dashboard-card",onClick:s},o[4]||(o[4]=[R("div",{class:"card-text"},[R("h3",null,"Repeter"),R("p",null,"Gå gjennom ordene du allerede kan.")],-1),R("img",{src:NI,alt:"Repeter",class:"card-icon"},null,-1)])),R("div",{class:"dashboard-card",onClick:o[1]||(o[1]=(...a)=>r.goToListen&&r.goToListen(...a))},o[5]||(o[5]=[R("div",{class:"card-text"},[R("h3",null,"Lytt"),R("p",null,"kommer snart.")],-1),R("img",{src:DI,alt:"Lytt",class:"card-icon"},null,-1)]))])])]))}},jI=Mt(FI,[["__scopeId","data-v-1dd9849e"]]),$I={title:"Personvernerklæring",updated:"Sist oppdatert: 6. juli 2025",who:{title:"Hvem er vi",text:"Norsk Cafe er utviklet og driftet av Fredrik Ofstad, som er behandlingsansvarlig for dine personopplysninger."},what:{title:"Hvilke data samles inn?",text:"Når du logger inn med Google, mottar vi følgende informasjon:",items:["Navn","E-postadresse","Profilbilde"],note:"Denne informasjonen brukes kun til å tilpasse din opplevelse i appen. Vi lagrer ikke passord."},where:{title:"Hvor lagres dataene?",text:"Dataene lagres i Google Firebase Authentication og Firestore-databasen. Selve appen hostes på GitHub Pages."},cookies:{title:"Informasjonskapsler og sporing",text:"Norsk Cafe bruker for øyeblikket ikke informasjonskapsler eller analyseverktøy. Google Analytics kan vurderes senere, men vil i så fall kreve samtykke."},sharing:{title:"Deling av data",text:"Vi deler ikke dine personopplysninger med tredjeparter, med unntak av bruk av Google Firebase som databehandler."},rights:{title:"Dine rettigheter",items:["Innsyn i egne personopplysninger","Sletting av data","Klage til Datatilsynet"]},deletion:{title:"Slette konto",text:"Du kan slette kontoen din direkte i appen. Dette sletter brukeren og tilhørende data fra Firebase."}},VI={title:"Privacy Policy",updated:"Last updated: 6 July 2025",who:{title:"Who we are",text:"Norsk Cafe is developed and operated by Fredrik Ofstad, who is the data controller responsible for your personal information."},what:{title:"What data do we collect?",text:"When you sign in with Google, we receive:",items:["Your name","Your email address","Your profile picture"],note:"This is used only to personalize your experience. We do not collect or store any passwords."},where:{title:"Where is the data stored?",text:"Your data is stored in Google Firebase Authentication and Firestore. The app is hosted on GitHub Pages."},cookies:{title:"Cookies and tracking",text:"Norsk Cafe does not currently use cookies or tracking tools. Google Analytics may be added in the future, but only with explicit consent."},sharing:{title:"Data sharing",text:"We do not share your data with third parties, except for Google Firebase, which acts as a data processor."},rights:{title:"Your rights",items:["Access your personal data","Request deletion","File a complaint with your data protection authority"]},deletion:{title:"Account deletion",text:"You can delete your account from the settings page. This will remove your user and data from Firebase."}},BI={no:$I,en:VI},HI={class:"privacy-page"},WI={class:"privacy-content"},zI={class:"title-bar"},GI={__name:"Privacy",setup(t){const e=Ee("no");function n(){e.value=e.value==="no"?"en":"no"}const s=De(()=>BI[e.value]);return(r,o)=>(re(),ae("div",HI,[R("div",WI,[R("div",zI,[R("h1",null,Y(s.value.title),1),R("button",{class:"lang-switch",onClick:n},Y(e.value==="no"?"Switch to English":"Bytt til norsk"),1)]),R("p",null,[R("strong",null,Y(s.value.updated),1)]),R("h2",null,Y(s.value.who.title),1),R("p",null,Y(s.value.who.text),1),R("h2",null,Y(s.value.what.title),1),R("p",null,Y(s.value.what.text),1),R("ul",null,[(re(!0),ae(je,null,vi(s.value.what.items,a=>(re(),ae("li",{key:a},Y(a),1))),128))]),R("p",null,Y(s.value.what.note),1),R("h2",null,Y(s.value.where.title),1),R("p",null,Y(s.value.where.text),1),R("h2",null,Y(s.value.cookies.title),1),R("p",null,Y(s.value.cookies.text),1),R("h2",null,Y(s.value.sharing.title),1),R("p",null,Y(s.value.sharing.text),1),R("h2",null,Y(s.value.rights.title),1),R("ul",null,[(re(!0),ae(je,null,vi(s.value.rights.items,a=>(re(),ae("li",{key:a},Y(a),1))),128))]),R("h2",null,Y(s.value.deletion.title),1),R("p",null,Y(s.value.deletion.text),1)])]))}},qI=Mt(GI,[["__scopeId","data-v-117f989b"]]),KI={class:"account-settings"},JI={key:0,class:"user-info"},XI=["src"],YI={__name:"Account",setup(t){const e=xs(),n=Ee(as.currentUser);async function s(){if(confirm("Are you sure you want to delete your account? This action cannot be undone."))try{await n.value.delete(),alert("Your account has been deleted."),e.push("/login")}catch(o){o.code==="auth/requires-recent-login"?(alert("Please sign in again to delete your account."),e.push("/login")):(console.error("Account deletion failed:",o),alert("Something went wrong. Please try again."))}}return(r,o)=>(re(),ae("div",KI,[o[2]||(o[2]=R("h1",null,"Account Settings",-1)),n.value?(re(),ae("div",JI,[R("img",{src:n.value?.photoURL||me(wa),alt:"Profile",class:"profile-pic"},null,8,XI),R("p",null,[o[0]||(o[0]=R("strong",null,"Name:",-1)),ot(" "+Y(n.value.displayName),1)]),R("p",null,[o[1]||(o[1]=R("strong",null,"Email:",-1)),ot(" "+Y(n.value.email),1)])])):at("",!0),o[3]||(o[3]=R("hr",null,null,-1)),R("button",{class:"delete-button",onClick:s},"Delete Account")]))}},QI=Mt(YI,[["__scopeId","data-v-ca588be0"]]),lh=Symbol.for("constructDateFrom");function ZI(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&lh in t?t[lh](e):t instanceof Date?new t.constructor(e):new Date(e)}function ba(t,e){return ZI(e||t,t)}function In(t,e){const n=t<0?"-":"",s=Math.abs(t).toString().padStart(e,"0");return n+s}function Ia(t,e){const n=ba(t,e?.in);if(isNaN(+n))throw new RangeError("Invalid time value");const s=e?.format??"extended",r=e?.representation??"complete";let o="",a="";const c=s==="extended"?"-":"",u=s==="extended"?":":"";if(r!=="time"){const f=In(n.getDate(),2),d=In(n.getMonth()+1,2);o=`${In(n.getFullYear(),4)}${c}${d}${c}${f}`}if(r!=="date"){const f=n.getTimezoneOffset();if(f!==0){const M=Math.abs(f),z=In(Math.trunc(M/60),2),$=In(M%60,2);a=`${f<0?"+":"-"}${z}:${$}`}else a="Z";const d=In(n.getHours(),2),g=In(n.getMinutes(),2),v=In(n.getSeconds(),2),T=o===""?"":"T",P=[d,g,v].join(u);o=`${o}${T}${P}${a}`}return o}function eE(t,e){return+ba(t)<+ba(e)}let Ea={"0n1":{wordId:"0n1",lastReviewed:"2025-07-10",nextReview:"2025-07-19",interval:3,easeFactor:2.5,repetitions:2}};function tE(t){return Object.values(Ea).filter(e=>eE(new Date(e.nextReview),t)||e.nextReview===Ia(t,{representation:"date"})).map(e=>({...e,correct:!0,pending:{toEnglish:!0,toNorwegian:!0}}))}function nE(t,e,n,s,r){const o=Ea[t],a=s[t];if(!o||!a||(a.pending[e]=!1,n||(a.correct=!1),a.pending.toEnglish||a.pending.toNorwegian))return;const c=new Date;let u=1,f=o.easeFactor,d=a.correct?o.repetitions+1:0;const g=o.repetitions;a.correct?(d===1?u=1:d===2?u=6:u=Math.round(o.interval*f),f=Math.max(1.3,f+.1)):(u=1,f=Math.max(1.3,f-.2));const v=new Date(c.getTime()+u*864e5);if(Ea[t]={wordId:t,lastReviewed:Ia(c,{representation:"date"}),nextReview:Ia(v,{representation:"date"}),interval:u,easeFactor:f,repetitions:d},r&&g!==d){const T=d>g;r(t,T)}}function sE(t){let e=!1;async function n(){if(e)return;e=!0;const s=t();if(!(!s||s.length===0))try{console.log("Uploading review data:",s)}catch(r){console.error("Failed to upload review data:",r)}}Xv((s,r,o)=>{n(),o()}),ls(()=>{window.addEventListener("beforeunload",n)}),Wi(()=>{window.removeEventListener("beforeunload",n)})}function rE(t){return t.type==="noun"&&"gender"in t&&"article"in t}function iE(t){const e=[...t];for(let n=e.length-1;n>0;n--){const s=Math.floor(Math.random()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e}function oE(t,e){const n=[];for(const s of e){const r=t.find(a=>a.id===s.wordId);if(!r)continue;const o=["toEnglish","toNorwegian"];for(const a of o){let c="",u="",f=[];if(rE(r)){const d=`${r.gender} ${r.norwegian}`.toLowerCase(),g=`${r.article} ${r.english}`.toLowerCase();a==="toNorwegian"?(c=g,u=d,f=[d]):(c=d,u=g,f=[g,r.english.toLowerCase()])}else a==="toNorwegian"?(c=r.english.toLowerCase(),u=r.norwegian.toLowerCase(),f=[r.norwegian.toLowerCase()]):(c=r.norwegian.toLowerCase(),u=r.english.toLowerCase(),f=[r.english.toLowerCase()]);n.push({id:`${s.wordId}-${a}`,prompt:c,answer:u,direction:a,accept:f,word:r})}}return Ee(iE(n))}function aE(t){const e=Ee({}),n=Ee([]),s=Ee(0),r=Ee(""),o=Ee(!1),{reviewedWords:a,reviewedCount:c,correctCount:u,totalCount:f,setTotalCount:d,resetStats:g}=sp(),v=()=>{const F=tE(new Date);e.value=Object.fromEntries(F.map(V=>[V.wordId,{...V}])),n.value=oE(t,F).value,s.value=0,r.value="",o.value=!1,g(),d(n.value.length)};v(),sE(()=>a.value);const T=De(()=>n.value?.[s.value]??null);function P($,F,V){nE($,F,V,e.value,(B,oe)=>{r.value=oe?"Level UP!":"Level Down",o.value=!0,setTimeout(()=>{o.value=!1},1500);const te=e.value[$];te&&!te.pending.toEnglish&&!te.pending.toNorwegian&&(c.value+=1)})}function M(){const $=T.value;return $&&$.correct===!1&&(n.value.push(JSON.parse(JSON.stringify($))),console.log(`Re-queued incorrect word: ${$.word.norwegian} (${$.direction})`)),s.value<n.value.length-1?(s.value++,!1):!0}return{reviewWords:n,currentIndex:s,currentWord:T,levelMessage:r,showLevelAnimation:o,processSrsUpdate:P,moveToNextSrsCard:M,reviewedWords:a,reviewedCount:c,correctCount:u,totalCount:f,sessionState:e,resetSession:()=>{v()}}}function lE(t){return t.trim().toLowerCase().replace(/^(a|an)\s+/,"")}function cE(t,e,n,s){const r=Ee(!1),o=Ee(""),a=Ee(!1);function c(){const u=t.value;if(!u)return;const f=u.accept.includes(lE(e.value));r.value=f,u.correct=f,f?o.value="✅ Riktig!":o.value=`❌ Feil. Riktig svar er "${u.answer}".`,a.value=!0,n.value.push(JSON.parse(JSON.stringify(u))),s&&s()}return{check:c,isCorrect:r,feedbackMessage:o,showFeedback:a}}const uE=[{id:"0n1",type:"noun",norwegian:"substantiv",english:"noun",gender:"et",article:"a",plural:{indefinite:"substantiv",definite:"substantivene"},level:"A1",example:["Substantiv er navn på ting."]},{id:"0n2",type:"noun",norwegian:"verb",english:"verb",gender:"et",article:"a",plural:{indefinite:"verb",definite:"verbene"},level:"A1",example:["Verb forteller hva noen gjør."]},{id:"0n3",type:"noun",norwegian:"adjektiv",english:"adjective",gender:"et",article:"an",plural:{indefinite:"adjektiv",definite:"adjektivene"},level:"A1",example:["Adjektiv beskriver substantiv."]},{id:"0n4",type:"noun",norwegian:"adverb",english:"adverb",gender:"et",article:"an",plural:{indefinite:"adverb",definite:"adverbene"},level:"A1",example:["Adverb beskriver verb, adjektiv eller andre adverb."]},{id:"0n5",type:"noun",norwegian:"pronomen",english:"pronoun",gender:"et",article:"a",plural:{indefinite:"pronomen",definite:"pronomenene"},level:"A1",example:["Pronomen brukes i stedet for substantiv."]},{id:"0n6",type:"noun",norwegian:"preposisjon",english:"preposition",gender:"en",article:"a",plural:{indefinite:"preposisjoner",definite:"preposisjonene"},level:"A1",example:["Preposisjoner viser forhold."]},{id:"0v1",type:"verb",norwegian:"å forklare",english:"to explain",level:"A1",conjugation:{present:"forklarer",past:"forklarte",perfect:"har forklart"},example:["Kan du forklare regelen en gang til?","Læreren forklarer hva ordet betyr."]},{id:"0v2",type:"verb",norwegian:"å stave",english:"to spell",level:"A1",conjugation:{present:"staver",past:"stavet",perfect:"har stavet"},example:["Hvordan staver du navnet ditt?"]},{id:"0v3",type:"verb",norwegian:"å bøye",english:"to conjugate",level:"A1",conjugation:{present:"bøyer",past:"bøyde",perfect:"har bøyd"},example:["Du må bøye verbet riktig.","Vi lærer å bøye substantiv i flertall."]},{id:"0v4",type:"verb",norwegian:"å øve",english:"to practice",level:"A1",conjugation:{present:"øver",past:"øvde",perfect:"har øvd"},example:["Jeg øver på å snakke norsk.","Du bør øve litt hver dag."]},{id:"0v5",type:"verb",norwegian:"å uttale",english:"to pronounce",level:"A1",conjugation:{present:"uttaler",past:"uttalte",perfect:"har uttalt"},example:["Hvordan uttaler man dette ordet?","Han uttaler bokstavene tydelig."]},{id:"0a1",type:"adjective",norwegian:"bestemt",english:"definite",level:"A1",forms:{masculine_feminine:"bestemt",neuter:"bestemt",plural:"bestemte",definite:"bestemte"},example:["Vi bruker bestemt form når vi kjenner til noe.","Substantivet står i bestemt form."]},{id:"0a2",type:"adjective",norwegian:"ubestemt",english:"indefinite",level:"A1",forms:{masculine_feminine:"ubestemt",neuter:"ubestemt",plural:"ubestemte",definite:"ubestemte"},example:["Ubestemt form brukes når noe nevnes for første gang.","Et ubestemt substantiv har ikke bestemt artikkel."]},{id:"0a3",type:"adjective",norwegian:"sterk",english:"strong",level:"A1",forms:{masculine_feminine:"sterk",neuter:"sterkt",plural:"sterke",definite:"sterke"},comparison:{positive:"sterk",comparative:"sterkere",superlative:"sterkest"},example:["Noen verb er sterke og bøyes uregelmessig.","Han er en sterk student."]},{id:"0a4",type:"adjective",norwegian:"svak",english:"weak",level:"A1",forms:{masculine_feminine:"svak",neuter:"svakt",plural:"svake",definite:"svake"},comparison:{positive:"svak",comparative:"svakere",superlative:"svakest"},example:["De fleste norske verb er svake.","Det var et svakt argument."]}],hE="data:image/svg+xml,%3csvg%20fill='%23000000'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%2030.727%2030.727'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0%20l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z'/%3e%3c/g%3e%3c/svg%3e";function Ta(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}const fE={key:0,class:"word-display"},dE={class:"big-word"},pE={class:"direction-hint"},gE={class:"input-group"},mE=["disabled"],vE=["disabled"],yE={class:"feedback-wrapper"},_E={key:0,class:"feedback visible"},wE={key:1,class:"feedback hidden"},bE=["src"],IE={key:1,class:"word-details"},EE={class:"word-meta"},TE={key:0},SE={key:1},AE={key:2},CE=kr({__name:"ReviewCard",props:{word:{},checked:{type:Boolean},isCorrect:{type:Boolean},feedbackMessage:{},showFeedback:{type:Boolean}},emits:["update:answer","check-answer","next-card","toggle-details"],setup(t,{emit:e}){const n=t,s=e,r=Ee(""),o=Ee(null),a=Ee(null),c=De({get:()=>r.value,set:T=>{r.value=T,s("update:answer",T)}}),u=De(()=>c.value.trim()===""),f=Ee(!1);function d(){n.checked&&(f.value=!f.value,s("toggle-details"))}function g(T){T.preventDefault(),n.checked?s("next-card"):u.value||s("check-answer")}function v(T){T.target!==o.value&&(T.preventDefault(),d())}return Zn(()=>n.word,()=>{c.value="",f.value=!1,Rs(()=>{o.value?.focus(),(!o.value||o.value.disabled||!n.word)&&a.value?.focus()})},{immediate:!0}),Zn(()=>n.checked,T=>{Rs(()=>{T?a.value?.focus():o.value?.focus()})}),(T,P)=>(re(),ae("div",{class:"card",ref_key:"cardRef",ref:a,onKeyup:Vc(g,["enter"]),onKeydown:Vc(v,["space"]),tabindex:"0"},[n.word?(re(),ae("div",fE,[R("p",dE,Y(me(Ta)(n.word.prompt)),1),R("p",pE,Y(n.word.direction==="toEnglish"?"Oversett til engelsk":"Oversett til norsk"),1)])):at("",!0),R("div",gE,[yg(R("input",{ref_key:"inputRef",ref:o,"onUpdate:modelValue":P[0]||(P[0]=M=>c.value=M),class:an({correct:n.checked&&n.isCorrect,incorrect:n.checked&&!n.isCorrect}),disabled:n.checked,placeholder:"Ditt svar",autocomplete:"off",autocapitalize:"off",spellcheck:"false"},null,10,mE),[[Jm,c.value]]),R("button",{onClick:P[1]||(P[1]=M=>n.checked?s("next-card"):s("check-answer")),disabled:u.value&&!n.checked,class:"check-button",type:"button"},Y(n.checked?"Neste":"Sjekk"),9,vE)]),R("div",yE,[n.showFeedback?(re(),ae("div",_E,[R("p",null,Y(n.feedbackMessage),1)])):(re(),ae("div",wE,P[2]||(P[2]=[R("p",null," ",-1)])))]),R("button",{class:an(["details-toggle",{disabled:!n.checked,active:f.value}]),onClick:d,"aria-label":"Toggle word details"},[R("img",{src:me(hE),alt:"Vis mer"},null,8,bE)],2),f.value&&n.word?(re(),ae("div",IE,[R("div",EE,[P[5]||(P[5]=R("h4",null,"Ordinfo:",-1)),R("p",null,[P[3]||(P[3]=R("strong",null,"Norsk: ",-1)),n.word.word.type==="noun"?(re(),ae(je,{key:0},[ot(Y(n.word.word.gender)+" "+Y(n.word.word.norwegian),1)],64)):(re(),ae(je,{key:1},[ot(Y(n.word.word.norwegian),1)],64))]),R("p",null,[P[4]||(P[4]=R("strong",null,"Engelsk: ",-1)),n.word.word.type==="noun"?(re(),ae(je,{key:0},[ot(Y(n.word.word.article)+" "+Y(n.word.word.english),1)],64)):(re(),ae(je,{key:1},[ot(Y(n.word.word.english),1)],64))])]),n.word.word.example?.length?(re(),ae("div",TE,[P[6]||(P[6]=R("h4",null,"Eksempelsetninger:",-1)),R("ul",null,[(re(!0),ae(je,null,vi(n.word.word.example,(M,z)=>(re(),ae("li",{key:z},Y(M),1))),128))])])):at("",!0),n.word.word.type==="verb"&&n.word.word.conjugation?(re(),ae("div",SE,[P[7]||(P[7]=R("h4",null,"Bøying:",-1)),R("p",null,"Nåtid: "+Y(n.word.word.conjugation.present),1),R("p",null,"Fortid: "+Y(n.word.word.conjugation.past),1),R("p",null,"Perfektum: "+Y(n.word.word.conjugation.perfect),1)])):at("",!0),n.word.word.type==="adjective"&&n.word.word.comparison?(re(),ae("div",AE,[P[8]||(P[8]=R("h4",null,"Gradbøying:",-1)),R("p",null,"Positiv: "+Y(n.word.word.comparison.positive),1),R("p",null,"Komparativ: "+Y(n.word.word.comparison.comparative),1),R("p",null,"Superlativ: "+Y(n.word.word.comparison.superlative),1)])):at("",!0)])):at("",!0)],544))}}),kE=Mt(CE,[["__scopeId","data-v-81d91fcc"]]),RE={class:"review-summary"},PE={class:"summary-section overall-stats"},OE={class:"summary-section word-levels"},NE={class:"word-list"},DE={class:"word-header"},xE={key:0,class:"srs-details"},LE={class:"review-results"},ME={key:0},UE={key:1},FE=kr({__name:"ReviewSummary",props:{reviewedItems:{},finalSrsState:{},initialTotalItems:{}},setup(t){const e=t,n=De(()=>e.reviewedItems.length),s=De(()=>e.reviewedItems.filter(a=>a.correct).length),r=De(()=>{const a=new Set;for(const c in e.finalSrsState){const u=e.finalSrsState[c];u&&!u.pending.toEnglish&&!u.pending.toNorwegian&&a.add(c)}return a.size}),o=De(()=>{const a={};return e.reviewedItems.forEach(c=>{a[c.word.id]||(a[c.word.id]={word:c.word,directions:{}}),a[c.word.id].directions[c.direction]=c}),a});return(a,c)=>(re(),ae("div",RE,[c[8]||(c[8]=R("h2",{class:"summary-title"},"Review Session Complete!",-1)),R("div",PE,[c[4]||(c[4]=R("h3",null,"Overall Session Statistics",-1)),R("p",null,[c[0]||(c[0]=R("strong",null,"Initial Items Due:",-1)),ot(" "+Y(a.initialTotalItems),1)]),R("p",null,[c[1]||(c[1]=R("strong",null,"Total Answers Given:",-1)),ot(" "+Y(n.value),1)]),R("p",null,[c[2]||(c[2]=R("strong",null,"Correct Answers:",-1)),ot(" "+Y(s.value)+" ("+Y(n.value>0?(s.value/n.value*100).toFixed(1):0)+"%)",1)]),R("p",null,[c[3]||(c[3]=R("strong",null,"Unique Words Fully Reviewed:",-1)),ot(" "+Y(r.value),1)])]),R("div",OE,[c[7]||(c[7]=R("h3",null,"Word Level Changes",-1)),R("div",NE,[(re(!0),ae(je,null,vi(o.value,(u,f)=>(re(),ae("div",{key:f,class:"word-item"},[R("div",DE,[R("strong",null,Y(me(Ta)(u.word.norwegian))+" / "+Y(me(Ta)(u.word.english)),1),e.finalSrsState[f]?(re(),ae("span",{key:0,class:an(["level-status",e.finalSrsState[f].repetitions>e.finalSrsState[f].repetitions-(u.directions.toEnglish?.correct===!1||u.directions.toNorwegian?.correct===!1?1:0)?"level-up":"level-down"])}," Level: "+Y(e.finalSrsState[f].repetitions),3)):at("",!0)]),e.finalSrsState[f]?(re(),ae("div",xE,[R("p",null,"Interval: "+Y(e.finalSrsState[f].interval)+" days",1),R("p",null,"Ease Factor: "+Y(e.finalSrsState[f].easeFactor.toFixed(2)),1),R("p",null,"Next Review: "+Y(e.finalSrsState[f].nextReview),1)])):at("",!0),R("div",LE,[u.directions.toEnglish?(re(),ae("p",ME,[c[5]||(c[5]=ot(" English: ")),R("span",{class:an(u.directions.toEnglish.correct?"correct-answer":"incorrect-answer")},Y(u.directions.toEnglish.correct?"Correct":"Incorrect"),3)])):at("",!0),u.directions.toNorwegian?(re(),ae("p",UE,[c[6]||(c[6]=ot(" Norwegian: ")),R("span",{class:an(u.directions.toNorwegian.correct?"correct-answer":"incorrect-answer")},Y(u.directions.toNorwegian.correct?"Correct":"Incorrect"),3)])):at("",!0)])]))),128))])])]))}}),jE=Mt(FE,[["__scopeId","data-v-89ed1fc6"]]),$E={class:"review-session"},VE={key:1,class:"review-stats"},BE=kr({__name:"Review",setup(t){const{reviewWords:e,currentWord:n,levelMessage:s,showLevelAnimation:r,processSrsUpdate:o,moveToNextSrsCard:a,reviewedWords:c,reviewedCount:u,correctCount:f,totalCount:d,sessionState:g}=aE(uE),v=Ee(""),T=Ee(!1),P=Ee(!1),M=Ee([]),z=Ee({}),$=Ee(0),F=Ee(!1),{check:V,isCorrect:B,feedbackMessage:oe,showFeedback:te}=cE(n,v,c,()=>{Rs(()=>{const m=document.querySelector(".card");m&&m.querySelector("input")?.focus()})});function A(){n.value&&(V(),T.value=!0)}function y(){if(!n.value)return;o(n.value.word.id,n.value.direction,n.value.correct),v.value="",T.value=!1,B.value=!1,te.value=!1,a()&&(M.value=[...c.value],z.value={...g.value},$.value=d.value,F.value=!0)}return Zn(n,()=>{v.value="",T.value=!1,B.value=!1,te.value=!1},{immediate:!0}),ls(()=>{e.value.length===0?(M.value=[],z.value={},$.value=0,F.value=!0):(F.value=!1,Rs(()=>{const m=document.querySelector(".card");m&&m.querySelector("input")?.focus()}))}),(m,E)=>(re(),ae("div",$E,[Me(wf,{name:"level-pop"},{default:Vi(()=>[me(r)?(re(),ae("div",{key:0,class:an(["level-animation",me(s).includes("UP")?"level-up":"level-down"])},Y(me(s)),3)):at("",!0)]),_:1}),F.value?(re(),_i(jE,{key:1,"reviewed-items":me(c),"final-srs-state":me(g),"initial-total-items":me(d)},null,8,["reviewed-items","final-srs-state","initial-total-items"])):(re(),ae(je,{key:0},[me(n)?(re(),_i(kE,{key:0,word:me(n),checked:T.value,"is-correct":me(B),"feedback-message":me(oe),"show-feedback":me(te),"onUpdate:answer":E[0]||(E[0]=S=>v.value=S),onCheckAnswer:A,onNextCard:y,onToggleDetails:()=>{}},null,8,["word","checked","is-correct","feedback-message","show-feedback"])):at("",!0),P.value?(re(),ae("div",VE,[R("p",null,"Reviewed words (both directions done): "+Y(me(u)),1),R("p",null,"Correct answers in session: "+Y(me(f)),1),R("p",null,"Total initial items in session: "+Y(me(d)),1),R("p",null,"Current queue size: "+Y(me(e).length),1)])):at("",!0)],64))]))}}),HE=Mt(BE,[["__scopeId","data-v-855cd511"]]),WE=[{path:"/",name:"home",component:bI},{path:"/login",name:"login",component:PI},{path:"/dashboard",name:"dashboard",component:jI},{path:"/privacy",name:"privacy",component:qI},{path:"/account",name:"account",component:QI},{path:"/review",name:"review",component:HE}],zE=ry({history:Nv("/"),routes:WE});Zm(yI).use(zE).mount("#app");
