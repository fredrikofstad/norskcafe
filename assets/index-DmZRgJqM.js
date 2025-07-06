(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yo(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Te={},ri=[],Mt=()=>{},ep=()=>!1,pr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qo=t=>t.startsWith("onUpdate:"),He=Object.assign,Zo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},tp=Object.prototype.hasOwnProperty,ve=(t,e)=>tp.call(t,e),ne=Array.isArray,oi=t=>gr(t)==="[object Map]",Ou=t=>gr(t)==="[object Set]",se=t=>typeof t=="function",Ne=t=>typeof t=="string",En=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",ku=t=>(Re(t)||se(t))&&se(t.then)&&se(t.catch),Nu=Object.prototype.toString,gr=t=>Nu.call(t),np=t=>gr(t).slice(8,-1),Du=t=>gr(t)==="[object Object]",ea=t=>Ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ji=Yo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ip=/-(\w)/g,ht=mr(t=>t.replace(ip,(e,n)=>n?n.toUpperCase():"")),sp=/\B([A-Z])/g,Kn=mr(t=>t.replace(sp,"-$1").toLowerCase()),_r=mr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Zr=mr(t=>t?`on${_r(t)}`:""),vn=(t,e)=>!Object.is(t,e),eo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},So=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},rp=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Mc;const yr=()=>Mc||(Mc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ta(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Ne(i)?lp(i):ta(i);if(s)for(const o in s)e[o]=s[o]}return e}else if(Ne(t)||Re(t))return t}const op=/;(?![^(]*\))/g,ap=/:([^]+)/,cp=/\/\*[^]*?\*\//g;function lp(t){const e={};return t.replace(cp,"").split(op).forEach(n=>{if(n){const i=n.split(ap);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function na(t){let e="";if(Ne(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const i=na(t[n]);i&&(e+=i+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const up="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hp=Yo(up);function xu(t){return!!t||t===""}const Mu=t=>!!(t&&t.__v_isRef===!0),Lu=t=>Ne(t)?t:t==null?"":ne(t)||Re(t)&&(t.toString===Nu||!se(t.toString))?Mu(t)?Lu(t.value):JSON.stringify(t,Uu,2):String(t),Uu=(t,e)=>Mu(e)?Uu(t,e.value):oi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],o)=>(n[to(i,o)+" =>"]=s,n),{})}:Ou(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>to(n))}:En(e)?to(e):Re(e)&&!ne(e)&&!Du(e)?String(e):e,to=(t,e="")=>{var n;return En(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qe;class fp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Qe,!e&&Qe&&(this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Qe;try{return Qe=this,e()}finally{Qe=n}}}on(){++this._on===1&&(this.prevScope=Qe,Qe=this)}off(){this._on>0&&--this._on===0&&(Qe=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function dp(){return Qe}let Ee;const no=new WeakSet;class Fu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qe&&Qe.active&&Qe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,no.has(this)&&(no.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lc(this),$u(this);const e=Ee,n=wt;Ee=this,wt=!0;try{return this.fn()}finally{Bu(this),Ee=e,wt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ra(e);this.deps=this.depsTail=void 0,Lc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?no.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ao(this)&&this.run()}get dirty(){return Ao(this)}}let ju=0,Vi,$i;function Vu(t,e=!1){if(t.flags|=8,e){t.next=$i,$i=t;return}t.next=Vi,Vi=t}function ia(){ju++}function sa(){if(--ju>0)return;if($i){let e=$i;for($i=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Vi;){let e=Vi;for(Vi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function $u(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Bu(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),ra(i),pp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Ao(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Hu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Hu(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ts)||(t.globalVersion=ts,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ao(t))))return;t.flags|=2;const e=t.dep,n=Ee,i=wt;Ee=t,wt=!0;try{$u(t);const s=t.fn(t._value);(e.version===0||vn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ee=n,wt=i,Bu(t),t.flags&=-3}}function ra(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)ra(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function pp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let wt=!0;const Wu=[];function Qt(){Wu.push(wt),wt=!1}function Zt(){const t=Wu.pop();wt=t===void 0?!0:t}function Lc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ee;Ee=void 0;try{e()}finally{Ee=n}}}let ts=0;class gp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class oa{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ee||!wt||Ee===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ee)n=this.activeLink=new gp(Ee,this),Ee.deps?(n.prevDep=Ee.depsTail,Ee.depsTail.nextDep=n,Ee.depsTail=n):Ee.deps=Ee.depsTail=n,zu(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Ee.depsTail,n.nextDep=void 0,Ee.depsTail.nextDep=n,Ee.depsTail=n,Ee.deps===n&&(Ee.deps=i)}return n}trigger(e){this.version++,ts++,this.notify(e)}notify(e){ia();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{sa()}}}function zu(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)zu(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Co=new WeakMap,Ln=Symbol(""),Ro=Symbol(""),ns=Symbol("");function $e(t,e,n){if(wt&&Ee){let i=Co.get(t);i||Co.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new oa),s.map=i,s.key=n),s.track()}}function qt(t,e,n,i,s,o){const a=Co.get(t);if(!a){ts++;return}const l=h=>{h&&h.trigger()};if(ia(),e==="clear")a.forEach(l);else{const h=ne(t),d=h&&ea(n);if(h&&n==="length"){const p=Number(i);a.forEach((m,y)=>{(y==="length"||y===ns||!En(y)&&y>=p)&&l(m)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),d&&l(a.get(ns)),e){case"add":h?d&&l(a.get("length")):(l(a.get(Ln)),oi(t)&&l(a.get(Ro)));break;case"delete":h||(l(a.get(Ln)),oi(t)&&l(a.get(Ro)));break;case"set":oi(t)&&l(a.get(Ln));break}}sa()}function ni(t){const e=ye(t);return e===t?e:($e(e,"iterate",ns),It(t)?e:e.map(Ke))}function aa(t){return $e(t=ye(t),"iterate",ns),t}const mp={__proto__:null,[Symbol.iterator](){return io(this,Symbol.iterator,Ke)},concat(...t){return ni(this).concat(...t.map(e=>ne(e)?ni(e):e))},entries(){return io(this,"entries",t=>(t[1]=Ke(t[1]),t))},every(t,e){return Ht(this,"every",t,e,void 0,arguments)},filter(t,e){return Ht(this,"filter",t,e,n=>n.map(Ke),arguments)},find(t,e){return Ht(this,"find",t,e,Ke,arguments)},findIndex(t,e){return Ht(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ht(this,"findLast",t,e,Ke,arguments)},findLastIndex(t,e){return Ht(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ht(this,"forEach",t,e,void 0,arguments)},includes(...t){return so(this,"includes",t)},indexOf(...t){return so(this,"indexOf",t)},join(t){return ni(this).join(t)},lastIndexOf(...t){return so(this,"lastIndexOf",t)},map(t,e){return Ht(this,"map",t,e,void 0,arguments)},pop(){return Mi(this,"pop")},push(...t){return Mi(this,"push",t)},reduce(t,...e){return Uc(this,"reduce",t,e)},reduceRight(t,...e){return Uc(this,"reduceRight",t,e)},shift(){return Mi(this,"shift")},some(t,e){return Ht(this,"some",t,e,void 0,arguments)},splice(...t){return Mi(this,"splice",t)},toReversed(){return ni(this).toReversed()},toSorted(t){return ni(this).toSorted(t)},toSpliced(...t){return ni(this).toSpliced(...t)},unshift(...t){return Mi(this,"unshift",t)},values(){return io(this,"values",Ke)}};function io(t,e,n){const i=aa(t),s=i[e]();return i!==t&&!It(t)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=n(o.value)),o}),s}const _p=Array.prototype;function Ht(t,e,n,i,s,o){const a=aa(t),l=a!==t&&!It(t),h=a[e];if(h!==_p[e]){const m=h.apply(t,o);return l?Ke(m):m}let d=n;a!==t&&(l?d=function(m,y){return n.call(this,Ke(m),y,t)}:n.length>2&&(d=function(m,y){return n.call(this,m,y,t)}));const p=h.call(a,d,i);return l&&s?s(p):p}function Uc(t,e,n,i){const s=aa(t);let o=n;return s!==t&&(It(t)?n.length>3&&(o=function(a,l,h){return n.call(this,a,l,h,t)}):o=function(a,l,h){return n.call(this,a,Ke(l),h,t)}),s[e](o,...i)}function so(t,e,n){const i=ye(t);$e(i,"iterate",ns);const s=i[e](...n);return(s===-1||s===!1)&&ua(n[0])?(n[0]=ye(n[0]),i[e](...n)):s}function Mi(t,e,n=[]){Qt(),ia();const i=ye(t)[e].apply(t,n);return sa(),Zt(),i}const yp=Yo("__proto__,__v_isRef,__isVue"),Gu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(En));function vp(t){En(t)||(t=String(t));const e=ye(this);return $e(e,"has",t),e.hasOwnProperty(t)}class qu{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(s?o?Pp:Yu:o?Xu:Ju).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=ne(e);if(!s){let h;if(a&&(h=mp[n]))return h;if(n==="hasOwnProperty")return vp}const l=Reflect.get(e,n,Be(e)?e:i);return(En(n)?Gu.has(n):yp(n))||(s||$e(e,"get",n),o)?l:Be(l)?a&&ea(n)?l:l.value:Re(l)?s?Zu(l):vr(l):l}}class Ku extends qu{constructor(e=!1){super(!1,e)}set(e,n,i,s){let o=e[n];if(!this._isShallow){const h=$n(o);if(!It(i)&&!$n(i)&&(o=ye(o),i=ye(i)),!ne(e)&&Be(o)&&!Be(i))return h?!1:(o.value=i,!0)}const a=ne(e)&&ea(n)?Number(n)<e.length:ve(e,n),l=Reflect.set(e,n,i,Be(e)?e:s);return e===ye(s)&&(a?vn(i,o)&&qt(e,"set",n,i):qt(e,"add",n,i)),l}deleteProperty(e,n){const i=ve(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&qt(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!En(n)||!Gu.has(n))&&$e(e,"has",n),i}ownKeys(e){return $e(e,"iterate",ne(e)?"length":Ln),Reflect.ownKeys(e)}}class wp extends qu{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ip=new Ku,bp=new wp,Ep=new Ku(!0);const Po=t=>t,Ds=t=>Reflect.getPrototypeOf(t);function Tp(t,e,n){return function(...i){const s=this.__v_raw,o=ye(s),a=oi(o),l=t==="entries"||t===Symbol.iterator&&a,h=t==="keys"&&a,d=s[t](...i),p=n?Po:e?Oo:Ke;return!e&&$e(o,"iterate",h?Ro:Ln),{next(){const{value:m,done:y}=d.next();return y?{value:m,done:y}:{value:l?[p(m[0]),p(m[1])]:p(m),done:y}},[Symbol.iterator](){return this}}}}function xs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Sp(t,e){const n={get(s){const o=this.__v_raw,a=ye(o),l=ye(s);t||(vn(s,l)&&$e(a,"get",s),$e(a,"get",l));const{has:h}=Ds(a),d=e?Po:t?Oo:Ke;if(h.call(a,s))return d(o.get(s));if(h.call(a,l))return d(o.get(l));o!==a&&o.get(s)},get size(){const s=this.__v_raw;return!t&&$e(ye(s),"iterate",Ln),Reflect.get(s,"size",s)},has(s){const o=this.__v_raw,a=ye(o),l=ye(s);return t||(vn(s,l)&&$e(a,"has",s),$e(a,"has",l)),s===l?o.has(s):o.has(s)||o.has(l)},forEach(s,o){const a=this,l=a.__v_raw,h=ye(l),d=e?Po:t?Oo:Ke;return!t&&$e(h,"iterate",Ln),l.forEach((p,m)=>s.call(o,d(p),d(m),a))}};return He(n,t?{add:xs("add"),set:xs("set"),delete:xs("delete"),clear:xs("clear")}:{add(s){!e&&!It(s)&&!$n(s)&&(s=ye(s));const o=ye(this);return Ds(o).has.call(o,s)||(o.add(s),qt(o,"add",s,s)),this},set(s,o){!e&&!It(o)&&!$n(o)&&(o=ye(o));const a=ye(this),{has:l,get:h}=Ds(a);let d=l.call(a,s);d||(s=ye(s),d=l.call(a,s));const p=h.call(a,s);return a.set(s,o),d?vn(o,p)&&qt(a,"set",s,o):qt(a,"add",s,o),this},delete(s){const o=ye(this),{has:a,get:l}=Ds(o);let h=a.call(o,s);h||(s=ye(s),h=a.call(o,s)),l&&l.call(o,s);const d=o.delete(s);return h&&qt(o,"delete",s,void 0),d},clear(){const s=ye(this),o=s.size!==0,a=s.clear();return o&&qt(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Tp(s,t,e)}),n}function ca(t,e){const n=Sp(t,e);return(i,s,o)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(ve(n,s)&&s in i?n:i,s,o)}const Ap={get:ca(!1,!1)},Cp={get:ca(!1,!0)},Rp={get:ca(!0,!1)};const Ju=new WeakMap,Xu=new WeakMap,Yu=new WeakMap,Pp=new WeakMap;function Op(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kp(t){return t.__v_skip||!Object.isExtensible(t)?0:Op(np(t))}function vr(t){return $n(t)?t:la(t,!1,Ip,Ap,Ju)}function Qu(t){return la(t,!1,Ep,Cp,Xu)}function Zu(t){return la(t,!0,bp,Rp,Yu)}function la(t,e,n,i,s){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=kp(t);if(o===0)return t;const a=s.get(t);if(a)return a;const l=new Proxy(t,o===2?i:n);return s.set(t,l),l}function Bi(t){return $n(t)?Bi(t.__v_raw):!!(t&&t.__v_isReactive)}function $n(t){return!!(t&&t.__v_isReadonly)}function It(t){return!!(t&&t.__v_isShallow)}function ua(t){return t?!!t.__v_raw:!1}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function Np(t){return!ve(t,"__v_skip")&&Object.isExtensible(t)&&So(t,"__v_skip",!0),t}const Ke=t=>Re(t)?vr(t):t,Oo=t=>Re(t)?Zu(t):t;function Be(t){return t?t.__v_isRef===!0:!1}function eh(t){return nh(t,!1)}function th(t){return nh(t,!0)}function nh(t,e){return Be(t)?t:new Dp(t,e)}class Dp{constructor(e,n){this.dep=new oa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ye(e),this._value=n?e:Ke(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||It(e)||$n(e);e=i?e:ye(e),vn(e,n)&&(this._rawValue=e,this._value=i?e:Ke(e),this.dep.trigger())}}function Un(t){return Be(t)?t.value:t}const xp={get:(t,e,n)=>e==="__v_raw"?t:Un(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Be(s)&&!Be(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function ih(t){return Bi(t)?t:new Proxy(t,xp)}class Mp{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new oa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ts-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ee!==this)return Vu(this,!0),!0}get value(){const e=this.dep.track();return Hu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Lp(t,e,n=!1){let i,s;return se(t)?i=t:(i=t.get,s=t.set),new Mp(i,s,n)}const Ms={},Xs=new WeakMap;let On;function Up(t,e=!1,n=On){if(n){let i=Xs.get(n);i||Xs.set(n,i=[]),i.push(t)}}function Fp(t,e,n=Te){const{immediate:i,deep:s,once:o,scheduler:a,augmentJob:l,call:h}=n,d=z=>s?z:It(z)||s===!1||s===0?gn(z,1):gn(z);let p,m,y,S,x=!1,L=!1;if(Be(t)?(m=()=>t.value,x=It(t)):Bi(t)?(m=()=>d(t),x=!0):ne(t)?(L=!0,x=t.some(z=>Bi(z)||It(z)),m=()=>t.map(z=>{if(Be(z))return z.value;if(Bi(z))return d(z);if(se(z))return h?h(z,2):z()})):se(t)?e?m=h?()=>h(t,2):t:m=()=>{if(y){Qt();try{y()}finally{Zt()}}const z=On;On=p;try{return h?h(t,3,[S]):t(S)}finally{On=z}}:m=Mt,e&&s){const z=m,ae=s===!0?1/0:s;m=()=>gn(z(),ae)}const G=dp(),K=()=>{p.stop(),G&&G.active&&Zo(G.effects,p)};if(o&&e){const z=e;e=(...ae)=>{z(...ae),K()}}let V=L?new Array(t.length).fill(Ms):Ms;const W=z=>{if(!(!(p.flags&1)||!p.dirty&&!z))if(e){const ae=p.run();if(s||x||(L?ae.some((pe,b)=>vn(pe,V[b])):vn(ae,V))){y&&y();const pe=On;On=p;try{const b=[ae,V===Ms?void 0:L&&V[0]===Ms?[]:V,S];V=ae,h?h(e,3,b):e(...b)}finally{On=pe}}}else p.run()};return l&&l(W),p=new Fu(m),p.scheduler=a?()=>a(W,!1):W,S=z=>Up(z,!1,p),y=p.onStop=()=>{const z=Xs.get(p);if(z){if(h)h(z,4);else for(const ae of z)ae();Xs.delete(p)}},e?i?W(!0):V=p.run():a?a(W.bind(null,!0),!0):p.run(),K.pause=p.pause.bind(p),K.resume=p.resume.bind(p),K.stop=K,K}function gn(t,e=1/0,n){if(e<=0||!Re(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Be(t))gn(t.value,e,n);else if(ne(t))for(let i=0;i<t.length;i++)gn(t[i],e,n);else if(Ou(t)||oi(t))t.forEach(i=>{gn(i,e,n)});else if(Du(t)){for(const i in t)gn(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&gn(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hs(t,e,n,i){try{return i?t(...i):t()}catch(s){wr(s,e,n)}}function Ft(t,e,n,i){if(se(t)){const s=hs(t,e,n,i);return s&&ku(s)&&s.catch(o=>{wr(o,e,n)}),s}if(ne(t)){const s=[];for(let o=0;o<t.length;o++)s.push(Ft(t[o],e,n,i));return s}}function wr(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Te;if(e){let l=e.parent;const h=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const p=l.ec;if(p){for(let m=0;m<p.length;m++)if(p[m](t,h,d)===!1)return}l=l.parent}if(o){Qt(),hs(o,null,10,[t,h,d]),Zt();return}}jp(t,n,s,i,a)}function jp(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const Je=[];let Pt=-1;const ai=[];let fn=null,ii=0;const sh=Promise.resolve();let Ys=null;function rh(t){const e=Ys||sh;return t?e.then(this?t.bind(this):t):e}function Vp(t){let e=Pt+1,n=Je.length;for(;e<n;){const i=e+n>>>1,s=Je[i],o=is(s);o<t||o===t&&s.flags&2?e=i+1:n=i}return e}function ha(t){if(!(t.flags&1)){const e=is(t),n=Je[Je.length-1];!n||!(t.flags&2)&&e>=is(n)?Je.push(t):Je.splice(Vp(e),0,t),t.flags|=1,oh()}}function oh(){Ys||(Ys=sh.then(ch))}function $p(t){ne(t)?ai.push(...t):fn&&t.id===-1?fn.splice(ii+1,0,t):t.flags&1||(ai.push(t),t.flags|=1),oh()}function Fc(t,e,n=Pt+1){for(;n<Je.length;n++){const i=Je[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Je.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ah(t){if(ai.length){const e=[...new Set(ai)].sort((n,i)=>is(n)-is(i));if(ai.length=0,fn){fn.push(...e);return}for(fn=e,ii=0;ii<fn.length;ii++){const n=fn[ii];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}fn=null,ii=0}}const is=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ch(t){try{for(Pt=0;Pt<Je.length;Pt++){const e=Je[Pt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),hs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pt<Je.length;Pt++){const e=Je[Pt];e&&(e.flags&=-2)}Pt=-1,Je.length=0,ah(),Ys=null,(Je.length||ai.length)&&ch()}}let lt=null,lh=null;function Qs(t){const e=lt;return lt=t,lh=t&&t.type.__scopeId||null,e}function re(t,e=lt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Kc(-1);const o=Qs(e);let a;try{a=t(...s)}finally{Qs(o),i._d&&Kc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Rn(t,e,n,i){const s=t.dirs,o=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];o&&(l.oldValue=o[a].value);let h=l.dir[i];h&&(Qt(),Ft(h,n,8,[t.el,l,t,e]),Zt())}}const Bp=Symbol("_vte"),Hp=t=>t.__isTeleport;function fa(t,e){t.shapeFlag&6&&t.component?(t.transition=e,fa(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function uh(t,e){return se(t)?He({name:t.name},e,{setup:t}):t}function hh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Hi(t,e,n,i,s=!1){if(ne(t)){t.forEach((x,L)=>Hi(x,e&&(ne(e)?e[L]:e),n,i,s));return}if(Wi(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Hi(t,e,n,i.component.subTree);return}const o=i.shapeFlag&4?_a(i.component):i.el,a=s?null:o,{i:l,r:h}=t,d=e&&e.r,p=l.refs===Te?l.refs={}:l.refs,m=l.setupState,y=ye(m),S=m===Te?()=>!1:x=>ve(y,x);if(d!=null&&d!==h&&(Ne(d)?(p[d]=null,S(d)&&(m[d]=null)):Be(d)&&(d.value=null)),se(h))hs(h,l,12,[a,p]);else{const x=Ne(h),L=Be(h);if(x||L){const G=()=>{if(t.f){const K=x?S(h)?m[h]:p[h]:h.value;s?ne(K)&&Zo(K,o):ne(K)?K.includes(o)||K.push(o):x?(p[h]=[o],S(h)&&(m[h]=p[h])):(h.value=[o],t.k&&(p[t.k]=h.value))}else x?(p[h]=a,S(h)&&(m[h]=a)):L&&(h.value=a,t.k&&(p[t.k]=a))};a?(G.id=-1,tt(G,n)):G()}}}yr().requestIdleCallback;yr().cancelIdleCallback;const Wi=t=>!!t.type.__asyncLoader,fh=t=>t.type.__isKeepAlive;function Wp(t,e){dh(t,"a",e)}function zp(t,e){dh(t,"da",e)}function dh(t,e,n=Ue){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ir(e,i,n),n){let s=n.parent;for(;s&&s.parent;)fh(s.parent.vnode)&&Gp(i,e,n,s),s=s.parent}}function Gp(t,e,n,i){const s=Ir(e,t,i,!0);ph(()=>{Zo(i[e],s)},n)}function Ir(t,e,n=Ue,i=!1){if(n){const s=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{Qt();const l=fs(n),h=Ft(e,n,t,a);return l(),Zt(),h});return i?s.unshift(o):s.push(o),o}}const nn=t=>(e,n=Ue)=>{(!rs||t==="sp")&&Ir(t,(...i)=>e(...i),n)},qp=nn("bm"),da=nn("m"),Kp=nn("bu"),Jp=nn("u"),Xp=nn("bum"),ph=nn("um"),Yp=nn("sp"),Qp=nn("rtg"),Zp=nn("rtc");function eg(t,e=Ue){Ir("ec",t,e)}const tg="components";function he(t,e){return ig(tg,t,!0,e)||t}const ng=Symbol.for("v-ndc");function ig(t,e,n=!0,i=!1){const s=lt||Ue;if(s){const o=s.type;{const l=zg(o,!1);if(l&&(l===e||l===ht(e)||l===_r(ht(e))))return o}const a=jc(s[t]||o[t],e)||jc(s.appContext[t],e);return!a&&i?o:a}}function jc(t,e){return t&&(t[e]||t[ht(e)]||t[_r(ht(e))])}const ko=t=>t?xh(t)?_a(t):ko(t.parent):null,zi=He(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ko(t.parent),$root:t=>ko(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>mh(t),$forceUpdate:t=>t.f||(t.f=()=>{ha(t.update)}),$nextTick:t=>t.n||(t.n=rh.bind(t.proxy)),$watch:t=>Tg.bind(t)}),ro=(t,e)=>t!==Te&&!t.__isScriptSetup&&ve(t,e),sg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:o,accessCache:a,type:l,appContext:h}=t;let d;if(e[0]!=="$"){const S=a[e];if(S!==void 0)switch(S){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return o[e]}else{if(ro(i,e))return a[e]=1,i[e];if(s!==Te&&ve(s,e))return a[e]=2,s[e];if((d=t.propsOptions[0])&&ve(d,e))return a[e]=3,o[e];if(n!==Te&&ve(n,e))return a[e]=4,n[e];No&&(a[e]=0)}}const p=zi[e];let m,y;if(p)return e==="$attrs"&&$e(t.attrs,"get",""),p(t);if((m=l.__cssModules)&&(m=m[e]))return m;if(n!==Te&&ve(n,e))return a[e]=4,n[e];if(y=h.config.globalProperties,ve(y,e))return y[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:o}=t;return ro(s,e)?(s[e]=n,!0):i!==Te&&ve(i,e)?(i[e]=n,!0):ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let l;return!!n[a]||t!==Te&&ve(t,a)||ro(e,a)||(l=o[0])&&ve(l,a)||ve(i,a)||ve(zi,a)||ve(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vc(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let No=!0;function rg(t){const e=mh(t),n=t.proxy,i=t.ctx;No=!1,e.beforeCreate&&$c(e.beforeCreate,t,"bc");const{data:s,computed:o,methods:a,watch:l,provide:h,inject:d,created:p,beforeMount:m,mounted:y,beforeUpdate:S,updated:x,activated:L,deactivated:G,beforeDestroy:K,beforeUnmount:V,destroyed:W,unmounted:z,render:ae,renderTracked:pe,renderTriggered:b,errorCaptured:_,serverPrefetch:I,expose:E,inheritAttrs:T,components:C,directives:w,filters:We}=e;if(d&&og(d,i,null),a)for(const ce in a){const oe=a[ce];se(oe)&&(i[ce]=oe.bind(n))}if(s){const ce=s.call(n,n);Re(ce)&&(t.data=vr(ce))}if(No=!0,o)for(const ce in o){const oe=o[ce],et=se(oe)?oe.bind(n,n):se(oe.get)?oe.get.bind(n,n):Mt,ft=!se(oe)&&se(oe.set)?oe.set.bind(n):Mt,rt=mt({get:et,set:ft});Object.defineProperty(i,ce,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Ae=>rt.value=Ae})}if(l)for(const ce in l)gh(l[ce],i,n,ce);if(h){const ce=se(h)?h.call(n):h;Reflect.ownKeys(ce).forEach(oe=>{$s(oe,ce[oe])})}p&&$c(p,t,"c");function Oe(ce,oe){ne(oe)?oe.forEach(et=>ce(et.bind(n))):oe&&ce(oe.bind(n))}if(Oe(qp,m),Oe(da,y),Oe(Kp,S),Oe(Jp,x),Oe(Wp,L),Oe(zp,G),Oe(eg,_),Oe(Zp,pe),Oe(Qp,b),Oe(Xp,V),Oe(ph,z),Oe(Yp,I),ne(E))if(E.length){const ce=t.exposed||(t.exposed={});E.forEach(oe=>{Object.defineProperty(ce,oe,{get:()=>n[oe],set:et=>n[oe]=et})})}else t.exposed||(t.exposed={});ae&&t.render===Mt&&(t.render=ae),T!=null&&(t.inheritAttrs=T),C&&(t.components=C),w&&(t.directives=w),I&&hh(t)}function og(t,e,n=Mt){ne(t)&&(t=Do(t));for(const i in t){const s=t[i];let o;Re(s)?"default"in s?o=Lt(s.from||i,s.default,!0):o=Lt(s.from||i):o=Lt(s),Be(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function $c(t,e,n){Ft(ne(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function gh(t,e,n,i){let s=i.includes(".")?Ph(n,i):()=>n[i];if(Ne(t)){const o=e[t];se(o)&&Bs(s,o)}else if(se(t))Bs(s,t.bind(n));else if(Re(t))if(ne(t))t.forEach(o=>gh(o,e,n,i));else{const o=se(t.handler)?t.handler.bind(n):e[t.handler];se(o)&&Bs(s,o,t)}}function mh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,l=o.get(e);let h;return l?h=l:!s.length&&!n&&!i?h=e:(h={},s.length&&s.forEach(d=>Zs(h,d,a,!0)),Zs(h,e,a)),Re(e)&&o.set(e,h),h}function Zs(t,e,n,i=!1){const{mixins:s,extends:o}=e;o&&Zs(t,o,n,!0),s&&s.forEach(a=>Zs(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const l=ag[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const ag={data:Bc,props:Hc,emits:Hc,methods:Fi,computed:Fi,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:Fi,directives:Fi,watch:lg,provide:Bc,inject:cg};function Bc(t,e){return e?t?function(){return He(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function cg(t,e){return Fi(Do(t),Do(e))}function Do(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ge(t,e){return t?[...new Set([].concat(t,e))]:e}function Fi(t,e){return t?He(Object.create(null),t,e):e}function Hc(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:He(Object.create(null),Vc(t),Vc(e??{})):e}function lg(t,e){if(!t)return e;if(!e)return t;const n=He(Object.create(null),t);for(const i in e)n[i]=Ge(t[i],e[i]);return n}function _h(){return{app:null,config:{isNativeTag:ep,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ug=0;function hg(t,e){return function(i,s=null){se(i)||(i=He({},i)),s!=null&&!Re(s)&&(s=null);const o=_h(),a=new WeakSet,l=[];let h=!1;const d=o.app={_uid:ug++,_component:i,_props:s,_container:null,_context:o,_instance:null,version:qg,get config(){return o.config},set config(p){},use(p,...m){return a.has(p)||(p&&se(p.install)?(a.add(p),p.install(d,...m)):se(p)&&(a.add(p),p(d,...m))),d},mixin(p){return o.mixins.includes(p)||o.mixins.push(p),d},component(p,m){return m?(o.components[p]=m,d):o.components[p]},directive(p,m){return m?(o.directives[p]=m,d):o.directives[p]},mount(p,m,y){if(!h){const S=d._ceVNode||te(i,s);return S.appContext=o,y===!0?y="svg":y===!1&&(y=void 0),t(S,p,y),h=!0,d._container=p,p.__vue_app__=d,_a(S.component)}},onUnmount(p){l.push(p)},unmount(){h&&(Ft(l,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(p,m){return o.provides[p]=m,d},runWithContext(p){const m=ci;ci=d;try{return p()}finally{ci=m}}};return d}}let ci=null;function $s(t,e){if(Ue){let n=Ue.provides;const i=Ue.parent&&Ue.parent.provides;i===n&&(n=Ue.provides=Object.create(i)),n[t]=e}}function Lt(t,e,n=!1){const i=Ue||lt;if(i||ci){let s=ci?ci._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&se(e)?e.call(i&&i.proxy):e}}const yh={},vh=()=>Object.create(yh),wh=t=>Object.getPrototypeOf(t)===yh;function fg(t,e,n,i=!1){const s={},o=vh();t.propsDefaults=Object.create(null),Ih(t,e,s,o);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=i?s:Qu(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function dg(t,e,n,i){const{props:s,attrs:o,vnode:{patchFlag:a}}=t,l=ye(s),[h]=t.propsOptions;let d=!1;if((i||a>0)&&!(a&16)){if(a&8){const p=t.vnode.dynamicProps;for(let m=0;m<p.length;m++){let y=p[m];if(br(t.emitsOptions,y))continue;const S=e[y];if(h)if(ve(o,y))S!==o[y]&&(o[y]=S,d=!0);else{const x=ht(y);s[x]=xo(h,l,x,S,t,!1)}else S!==o[y]&&(o[y]=S,d=!0)}}}else{Ih(t,e,s,o)&&(d=!0);let p;for(const m in l)(!e||!ve(e,m)&&((p=Kn(m))===m||!ve(e,p)))&&(h?n&&(n[m]!==void 0||n[p]!==void 0)&&(s[m]=xo(h,l,m,void 0,t,!0)):delete s[m]);if(o!==l)for(const m in o)(!e||!ve(e,m))&&(delete o[m],d=!0)}d&&qt(t.attrs,"set","")}function Ih(t,e,n,i){const[s,o]=t.propsOptions;let a=!1,l;if(e)for(let h in e){if(ji(h))continue;const d=e[h];let p;s&&ve(s,p=ht(h))?!o||!o.includes(p)?n[p]=d:(l||(l={}))[p]=d:br(t.emitsOptions,h)||(!(h in i)||d!==i[h])&&(i[h]=d,a=!0)}if(o){const h=ye(n),d=l||Te;for(let p=0;p<o.length;p++){const m=o[p];n[m]=xo(s,h,m,d[m],t,!ve(d,m))}}return a}function xo(t,e,n,i,s,o){const a=t[n];if(a!=null){const l=ve(a,"default");if(l&&i===void 0){const h=a.default;if(a.type!==Function&&!a.skipFactory&&se(h)){const{propsDefaults:d}=s;if(n in d)i=d[n];else{const p=fs(s);i=d[n]=h.call(null,e),p()}}else i=h;s.ce&&s.ce._setProp(n,i)}a[0]&&(o&&!l?i=!1:a[1]&&(i===""||i===Kn(n))&&(i=!0))}return i}const pg=new WeakMap;function bh(t,e,n=!1){const i=n?pg:e.propsCache,s=i.get(t);if(s)return s;const o=t.props,a={},l=[];let h=!1;if(!se(t)){const p=m=>{h=!0;const[y,S]=bh(m,e,!0);He(a,y),S&&l.push(...S)};!n&&e.mixins.length&&e.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!o&&!h)return Re(t)&&i.set(t,ri),ri;if(ne(o))for(let p=0;p<o.length;p++){const m=ht(o[p]);Wc(m)&&(a[m]=Te)}else if(o)for(const p in o){const m=ht(p);if(Wc(m)){const y=o[p],S=a[m]=ne(y)||se(y)?{type:y}:He({},y),x=S.type;let L=!1,G=!0;if(ne(x))for(let K=0;K<x.length;++K){const V=x[K],W=se(V)&&V.name;if(W==="Boolean"){L=!0;break}else W==="String"&&(G=!1)}else L=se(x)&&x.name==="Boolean";S[0]=L,S[1]=G,(L||ve(S,"default"))&&l.push(m)}}const d=[a,l];return Re(t)&&i.set(t,d),d}function Wc(t){return t[0]!=="$"&&!ji(t)}const pa=t=>t[0]==="_"||t==="$stable",ga=t=>ne(t)?t.map(kt):[kt(t)],gg=(t,e,n)=>{if(e._n)return e;const i=re((...s)=>ga(e(...s)),n);return i._c=!1,i},Eh=(t,e,n)=>{const i=t._ctx;for(const s in t){if(pa(s))continue;const o=t[s];if(se(o))e[s]=gg(s,o,i);else if(o!=null){const a=ga(o);e[s]=()=>a}}},Th=(t,e)=>{const n=ga(e);t.slots.default=()=>n},Sh=(t,e,n)=>{for(const i in e)(n||!pa(i))&&(t[i]=e[i])},mg=(t,e,n)=>{const i=t.slots=vh();if(t.vnode.shapeFlag&32){const s=e.__;s&&So(i,"__",s,!0);const o=e._;o?(Sh(i,e,n),n&&So(i,"_",o,!0)):Eh(e,i)}else e&&Th(t,e)},_g=(t,e,n)=>{const{vnode:i,slots:s}=t;let o=!0,a=Te;if(i.shapeFlag&32){const l=e._;l?n&&l===1?o=!1:Sh(s,e,n):(o=!e.$stable,Eh(e,s)),a=e}else e&&(Th(t,e),a={default:1});if(o)for(const l in s)!pa(l)&&a[l]==null&&delete s[l]},tt=kg;function yg(t){return vg(t)}function vg(t,e){const n=yr();n.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:a,createText:l,createComment:h,setText:d,setElementText:p,parentNode:m,nextSibling:y,setScopeId:S=Mt,insertStaticContent:x}=t,L=(g,v,A,k=null,D=null,N=null,B=void 0,F=null,U=!!v.dynamicChildren)=>{if(g===v)return;g&&!Li(g,v)&&(k=O(g),Ae(g,D,N,!0),g=null),v.patchFlag===-2&&(U=!1,v.dynamicChildren=null);const{type:M,ref:Y,shapeFlag:$}=v;switch(M){case Er:G(g,v,A,k);break;case di:K(g,v,A,k);break;case ao:g==null&&V(v,A,k,B);break;case Gt:C(g,v,A,k,D,N,B,F,U);break;default:$&1?ae(g,v,A,k,D,N,B,F,U):$&6?w(g,v,A,k,D,N,B,F,U):($&64||$&128)&&M.process(g,v,A,k,D,N,B,F,U,J)}Y!=null&&D?Hi(Y,g&&g.ref,N,v||g,!v):Y==null&&g&&g.ref!=null&&Hi(g.ref,null,N,g,!0)},G=(g,v,A,k)=>{if(g==null)i(v.el=l(v.children),A,k);else{const D=v.el=g.el;v.children!==g.children&&d(D,v.children)}},K=(g,v,A,k)=>{g==null?i(v.el=h(v.children||""),A,k):v.el=g.el},V=(g,v,A,k)=>{[g.el,g.anchor]=x(g.children,v,A,k,g.el,g.anchor)},W=({el:g,anchor:v},A,k)=>{let D;for(;g&&g!==v;)D=y(g),i(g,A,k),g=D;i(v,A,k)},z=({el:g,anchor:v})=>{let A;for(;g&&g!==v;)A=y(g),s(g),g=A;s(v)},ae=(g,v,A,k,D,N,B,F,U)=>{v.type==="svg"?B="svg":v.type==="math"&&(B="mathml"),g==null?pe(v,A,k,D,N,B,F,U):I(g,v,D,N,B,F,U)},pe=(g,v,A,k,D,N,B,F)=>{let U,M;const{props:Y,shapeFlag:$,transition:X,dirs:Z}=g;if(U=g.el=a(g.type,N,Y&&Y.is,Y),$&8?p(U,g.children):$&16&&_(g.children,U,null,k,D,oo(g,N),B,F),Z&&Rn(g,null,k,"created"),b(U,g,g.scopeId,B,k),Y){for(const ie in Y)ie!=="value"&&!ji(ie)&&o(U,ie,null,Y[ie],N,k);"value"in Y&&o(U,"value",null,Y.value,N),(M=Y.onVnodeBeforeMount)&&Rt(M,k,g)}Z&&Rn(g,null,k,"beforeMount");const Q=wg(D,X);Q&&X.beforeEnter(U),i(U,v,A),((M=Y&&Y.onVnodeMounted)||Q||Z)&&tt(()=>{M&&Rt(M,k,g),Q&&X.enter(U),Z&&Rn(g,null,k,"mounted")},D)},b=(g,v,A,k,D)=>{if(A&&S(g,A),k)for(let N=0;N<k.length;N++)S(g,k[N]);if(D){let N=D.subTree;if(v===N||kh(N.type)&&(N.ssContent===v||N.ssFallback===v)){const B=D.vnode;b(g,B,B.scopeId,B.slotScopeIds,D.parent)}}},_=(g,v,A,k,D,N,B,F,U=0)=>{for(let M=U;M<g.length;M++){const Y=g[M]=F?dn(g[M]):kt(g[M]);L(null,Y,v,A,k,D,N,B,F)}},I=(g,v,A,k,D,N,B)=>{const F=v.el=g.el;let{patchFlag:U,dynamicChildren:M,dirs:Y}=v;U|=g.patchFlag&16;const $=g.props||Te,X=v.props||Te;let Z;if(A&&Pn(A,!1),(Z=X.onVnodeBeforeUpdate)&&Rt(Z,A,v,g),Y&&Rn(v,g,A,"beforeUpdate"),A&&Pn(A,!0),($.innerHTML&&X.innerHTML==null||$.textContent&&X.textContent==null)&&p(F,""),M?E(g.dynamicChildren,M,F,A,k,oo(v,D),N):B||oe(g,v,F,null,A,k,oo(v,D),N,!1),U>0){if(U&16)T(F,$,X,A,D);else if(U&2&&$.class!==X.class&&o(F,"class",null,X.class,D),U&4&&o(F,"style",$.style,X.style,D),U&8){const Q=v.dynamicProps;for(let ie=0;ie<Q.length;ie++){const le=Q[ie],De=$[le],xe=X[le];(xe!==De||le==="value")&&o(F,le,De,xe,D,A)}}U&1&&g.children!==v.children&&p(F,v.children)}else!B&&M==null&&T(F,$,X,A,D);((Z=X.onVnodeUpdated)||Y)&&tt(()=>{Z&&Rt(Z,A,v,g),Y&&Rn(v,g,A,"updated")},k)},E=(g,v,A,k,D,N,B)=>{for(let F=0;F<v.length;F++){const U=g[F],M=v[F],Y=U.el&&(U.type===Gt||!Li(U,M)||U.shapeFlag&198)?m(U.el):A;L(U,M,Y,null,k,D,N,B,!0)}},T=(g,v,A,k,D)=>{if(v!==A){if(v!==Te)for(const N in v)!ji(N)&&!(N in A)&&o(g,N,v[N],null,D,k);for(const N in A){if(ji(N))continue;const B=A[N],F=v[N];B!==F&&N!=="value"&&o(g,N,F,B,D,k)}"value"in A&&o(g,"value",v.value,A.value,D)}},C=(g,v,A,k,D,N,B,F,U)=>{const M=v.el=g?g.el:l(""),Y=v.anchor=g?g.anchor:l("");let{patchFlag:$,dynamicChildren:X,slotScopeIds:Z}=v;Z&&(F=F?F.concat(Z):Z),g==null?(i(M,A,k),i(Y,A,k),_(v.children||[],A,Y,D,N,B,F,U)):$>0&&$&64&&X&&g.dynamicChildren?(E(g.dynamicChildren,X,A,D,N,B,F),(v.key!=null||D&&v===D.subTree)&&Ah(g,v,!0)):oe(g,v,A,Y,D,N,B,F,U)},w=(g,v,A,k,D,N,B,F,U)=>{v.slotScopeIds=F,g==null?v.shapeFlag&512?D.ctx.activate(v,A,k,B,U):We(v,A,k,D,N,B,U):st(g,v,U)},We=(g,v,A,k,D,N,B)=>{const F=g.component=jg(g,k,D);if(fh(g)&&(F.ctx.renderer=J),$g(F,!1,B),F.asyncDep){if(D&&D.registerDep(F,Oe,B),!g.el){const U=F.subTree=te(di);K(null,U,v,A)}}else Oe(F,g,v,A,D,N,B)},st=(g,v,A)=>{const k=v.component=g.component;if(Pg(g,v,A))if(k.asyncDep&&!k.asyncResolved){ce(k,v,A);return}else k.next=v,k.update();else v.el=g.el,k.vnode=v},Oe=(g,v,A,k,D,N,B)=>{const F=()=>{if(g.isMounted){let{next:$,bu:X,u:Z,parent:Q,vnode:ie}=g;{const Fe=Ch(g);if(Fe){$&&($.el=ie.el,ce(g,$,B)),Fe.asyncDep.then(()=>{g.isUnmounted||F()});return}}let le=$,De;Pn(g,!1),$?($.el=ie.el,ce(g,$,B)):$=ie,X&&eo(X),(De=$.props&&$.props.onVnodeBeforeUpdate)&&Rt(De,Q,$,ie),Pn(g,!0);const xe=Gc(g),ot=g.subTree;g.subTree=xe,L(ot,xe,m(ot.el),O(ot),g,D,N),$.el=xe.el,le===null&&Og(g,xe.el),Z&&tt(Z,D),(De=$.props&&$.props.onVnodeUpdated)&&tt(()=>Rt(De,Q,$,ie),D)}else{let $;const{el:X,props:Z}=v,{bm:Q,m:ie,parent:le,root:De,type:xe}=g,ot=Wi(v);Pn(g,!1),Q&&eo(Q),!ot&&($=Z&&Z.onVnodeBeforeMount)&&Rt($,le,v),Pn(g,!0);{De.ce&&De.ce._def.shadowRoot!==!1&&De.ce._injectChildStyle(xe);const Fe=g.subTree=Gc(g);L(null,Fe,A,k,g,D,N),v.el=Fe.el}if(ie&&tt(ie,D),!ot&&($=Z&&Z.onVnodeMounted)){const Fe=v;tt(()=>Rt($,le,Fe),D)}(v.shapeFlag&256||le&&Wi(le.vnode)&&le.vnode.shapeFlag&256)&&g.a&&tt(g.a,D),g.isMounted=!0,v=A=k=null}};g.scope.on();const U=g.effect=new Fu(F);g.scope.off();const M=g.update=U.run.bind(U),Y=g.job=U.runIfDirty.bind(U);Y.i=g,Y.id=g.uid,U.scheduler=()=>ha(Y),Pn(g,!0),M()},ce=(g,v,A)=>{v.component=g;const k=g.vnode.props;g.vnode=v,g.next=null,dg(g,v.props,k,A),_g(g,v.children,A),Qt(),Fc(g),Zt()},oe=(g,v,A,k,D,N,B,F,U=!1)=>{const M=g&&g.children,Y=g?g.shapeFlag:0,$=v.children,{patchFlag:X,shapeFlag:Z}=v;if(X>0){if(X&128){ft(M,$,A,k,D,N,B,F,U);return}else if(X&256){et(M,$,A,k,D,N,B,F,U);return}}Z&8?(Y&16&&Ye(M,D,N),$!==M&&p(A,$)):Y&16?Z&16?ft(M,$,A,k,D,N,B,F,U):Ye(M,D,N,!0):(Y&8&&p(A,""),Z&16&&_($,A,k,D,N,B,F,U))},et=(g,v,A,k,D,N,B,F,U)=>{g=g||ri,v=v||ri;const M=g.length,Y=v.length,$=Math.min(M,Y);let X;for(X=0;X<$;X++){const Z=v[X]=U?dn(v[X]):kt(v[X]);L(g[X],Z,A,null,D,N,B,F,U)}M>Y?Ye(g,D,N,!0,!1,$):_(v,A,k,D,N,B,F,U,$)},ft=(g,v,A,k,D,N,B,F,U)=>{let M=0;const Y=v.length;let $=g.length-1,X=Y-1;for(;M<=$&&M<=X;){const Z=g[M],Q=v[M]=U?dn(v[M]):kt(v[M]);if(Li(Z,Q))L(Z,Q,A,null,D,N,B,F,U);else break;M++}for(;M<=$&&M<=X;){const Z=g[$],Q=v[X]=U?dn(v[X]):kt(v[X]);if(Li(Z,Q))L(Z,Q,A,null,D,N,B,F,U);else break;$--,X--}if(M>$){if(M<=X){const Z=X+1,Q=Z<Y?v[Z].el:k;for(;M<=X;)L(null,v[M]=U?dn(v[M]):kt(v[M]),A,Q,D,N,B,F,U),M++}}else if(M>X)for(;M<=$;)Ae(g[M],D,N,!0),M++;else{const Z=M,Q=M,ie=new Map;for(M=Q;M<=X;M++){const Me=v[M]=U?dn(v[M]):kt(v[M]);Me.key!=null&&ie.set(Me.key,M)}let le,De=0;const xe=X-Q+1;let ot=!1,Fe=0;const rn=new Array(xe);for(M=0;M<xe;M++)rn[M]=0;for(M=Z;M<=$;M++){const Me=g[M];if(De>=xe){Ae(Me,D,N,!0);continue}let at;if(Me.key!=null)at=ie.get(Me.key);else for(le=Q;le<=X;le++)if(rn[le-Q]===0&&Li(Me,v[le])){at=le;break}at===void 0?Ae(Me,D,N,!0):(rn[at-Q]=M+1,at>=Fe?Fe=at:ot=!0,L(Me,v[at],A,null,D,N,B,F,U),De++)}const bi=ot?Ig(rn):ri;for(le=bi.length-1,M=xe-1;M>=0;M--){const Me=Q+M,at=v[Me],ws=Me+1<Y?v[Me+1].el:k;rn[M]===0?L(null,at,A,ws,D,N,B,F,U):ot&&(le<0||M!==bi[le]?rt(at,A,ws,2):le--)}}},rt=(g,v,A,k,D=null)=>{const{el:N,type:B,transition:F,children:U,shapeFlag:M}=g;if(M&6){rt(g.component.subTree,v,A,k);return}if(M&128){g.suspense.move(v,A,k);return}if(M&64){B.move(g,v,A,J);return}if(B===Gt){i(N,v,A);for(let $=0;$<U.length;$++)rt(U[$],v,A,k);i(g.anchor,v,A);return}if(B===ao){W(g,v,A);return}if(k!==2&&M&1&&F)if(k===0)F.beforeEnter(N),i(N,v,A),tt(()=>F.enter(N),D);else{const{leave:$,delayLeave:X,afterLeave:Z}=F,Q=()=>{g.ctx.isUnmounted?s(N):i(N,v,A)},ie=()=>{$(N,()=>{Q(),Z&&Z()})};X?X(N,Q,ie):ie()}else i(N,v,A)},Ae=(g,v,A,k=!1,D=!1)=>{const{type:N,props:B,ref:F,children:U,dynamicChildren:M,shapeFlag:Y,patchFlag:$,dirs:X,cacheIndex:Z}=g;if($===-2&&(D=!1),F!=null&&(Qt(),Hi(F,null,A,g,!0),Zt()),Z!=null&&(v.renderCache[Z]=void 0),Y&256){v.ctx.deactivate(g);return}const Q=Y&1&&X,ie=!Wi(g);let le;if(ie&&(le=B&&B.onVnodeBeforeUnmount)&&Rt(le,v,g),Y&6)Ct(g.component,A,k);else{if(Y&128){g.suspense.unmount(A,k);return}Q&&Rn(g,null,v,"beforeUnmount"),Y&64?g.type.remove(g,v,A,J,k):M&&!M.hasOnce&&(N!==Gt||$>0&&$&64)?Ye(M,v,A,!1,!0):(N===Gt&&$&384||!D&&Y&16)&&Ye(U,v,A),k&&Ce(g)}(ie&&(le=B&&B.onVnodeUnmounted)||Q)&&tt(()=>{le&&Rt(le,v,g),Q&&Rn(g,null,v,"unmounted")},A)},Ce=g=>{const{type:v,el:A,anchor:k,transition:D}=g;if(v===Gt){sn(A,k);return}if(v===ao){z(g);return}const N=()=>{s(A),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(g.shapeFlag&1&&D&&!D.persisted){const{leave:B,delayLeave:F}=D,U=()=>B(A,N);F?F(g.el,N,U):U()}else N()},sn=(g,v)=>{let A;for(;g!==v;)A=y(g),s(g),g=A;s(v)},Ct=(g,v,A)=>{const{bum:k,scope:D,job:N,subTree:B,um:F,m:U,a:M,parent:Y,slots:{__:$}}=g;zc(U),zc(M),k&&eo(k),Y&&ne($)&&$.forEach(X=>{Y.renderCache[X]=void 0}),D.stop(),N&&(N.flags|=8,Ae(B,g,v,A)),F&&tt(F,v),tt(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Ye=(g,v,A,k=!1,D=!1,N=0)=>{for(let B=N;B<g.length;B++)Ae(g[B],v,A,k,D)},O=g=>{if(g.shapeFlag&6)return O(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const v=y(g.anchor||g.el),A=v&&v[Bp];return A?y(A):v};let q=!1;const H=(g,v,A)=>{g==null?v._vnode&&Ae(v._vnode,null,null,!0):L(v._vnode||null,g,v,null,null,null,A),v._vnode=g,q||(q=!0,Fc(),ah(),q=!1)},J={p:L,um:Ae,m:rt,r:Ce,mt:We,mc:_,pc:oe,pbc:E,n:O,o:t};return{render:H,hydrate:void 0,createApp:hg(H)}}function oo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Pn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function wg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ah(t,e,n=!1){const i=t.children,s=e.children;if(ne(i)&&ne(s))for(let o=0;o<i.length;o++){const a=i[o];let l=s[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[o]=dn(s[o]),l.el=a.el),!n&&l.patchFlag!==-2&&Ah(a,l)),l.type===Er&&(l.el=a.el),l.type===di&&!l.el&&(l.el=a.el)}}function Ig(t){const e=t.slice(),n=[0];let i,s,o,a,l;const h=t.length;for(i=0;i<h;i++){const d=t[i];if(d!==0){if(s=n[n.length-1],t[s]<d){e[i]=s,n.push(i);continue}for(o=0,a=n.length-1;o<a;)l=o+a>>1,t[n[l]]<d?o=l+1:a=l;d<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function Ch(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ch(e)}function zc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const bg=Symbol.for("v-scx"),Eg=()=>Lt(bg);function Bs(t,e,n){return Rh(t,e,n)}function Rh(t,e,n=Te){const{immediate:i,deep:s,flush:o,once:a}=n,l=He({},n),h=e&&i||!e&&o!=="post";let d;if(rs){if(o==="sync"){const S=Eg();d=S.__watcherHandles||(S.__watcherHandles=[])}else if(!h){const S=()=>{};return S.stop=Mt,S.resume=Mt,S.pause=Mt,S}}const p=Ue;l.call=(S,x,L)=>Ft(S,p,x,L);let m=!1;o==="post"?l.scheduler=S=>{tt(S,p&&p.suspense)}:o!=="sync"&&(m=!0,l.scheduler=(S,x)=>{x?S():ha(S)}),l.augmentJob=S=>{e&&(S.flags|=4),m&&(S.flags|=2,p&&(S.id=p.uid,S.i=p))};const y=Fp(t,e,l);return rs&&(d?d.push(y):h&&y()),y}function Tg(t,e,n){const i=this.proxy,s=Ne(t)?t.includes(".")?Ph(i,t):()=>i[t]:t.bind(i,i);let o;se(e)?o=e:(o=e.handler,n=e);const a=fs(this),l=Rh(s,o.bind(i),n);return a(),l}function Ph(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const Sg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ht(e)}Modifiers`]||t[`${Kn(e)}Modifiers`];function Ag(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Te;let s=n;const o=e.startsWith("update:"),a=o&&Sg(i,e.slice(7));a&&(a.trim&&(s=n.map(p=>Ne(p)?p.trim():p)),a.number&&(s=n.map(rp)));let l,h=i[l=Zr(e)]||i[l=Zr(ht(e))];!h&&o&&(h=i[l=Zr(Kn(e))]),h&&Ft(h,t,6,s);const d=i[l+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ft(d,t,6,s)}}function Oh(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const o=t.emits;let a={},l=!1;if(!se(t)){const h=d=>{const p=Oh(d,e,!0);p&&(l=!0,He(a,p))};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}return!o&&!l?(Re(t)&&i.set(t,null),null):(ne(o)?o.forEach(h=>a[h]=null):He(a,o),Re(t)&&i.set(t,a),a)}function br(t,e){return!t||!pr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(t,e[0].toLowerCase()+e.slice(1))||ve(t,Kn(e))||ve(t,e))}function Gc(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[o],slots:a,attrs:l,emit:h,render:d,renderCache:p,props:m,data:y,setupState:S,ctx:x,inheritAttrs:L}=t,G=Qs(t);let K,V;try{if(n.shapeFlag&4){const z=s||i,ae=z;K=kt(d.call(ae,z,p,m,S,y,x)),V=l}else{const z=e;K=kt(z.length>1?z(m,{attrs:l,slots:a,emit:h}):z(m,null)),V=e.props?l:Cg(l)}}catch(z){Gi.length=0,wr(z,t,1),K=te(di)}let W=K;if(V&&L!==!1){const z=Object.keys(V),{shapeFlag:ae}=W;z.length&&ae&7&&(o&&z.some(Qo)&&(V=Rg(V,o)),W=pi(W,V,!1,!0))}return n.dirs&&(W=pi(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&fa(W,n.transition),K=W,Qs(G),K}const Cg=t=>{let e;for(const n in t)(n==="class"||n==="style"||pr(n))&&((e||(e={}))[n]=t[n]);return e},Rg=(t,e)=>{const n={};for(const i in t)(!Qo(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Pg(t,e,n){const{props:i,children:s,component:o}=t,{props:a,children:l,patchFlag:h}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&h>=0){if(h&1024)return!0;if(h&16)return i?qc(i,a,d):!!a;if(h&8){const p=e.dynamicProps;for(let m=0;m<p.length;m++){const y=p[m];if(a[y]!==i[y]&&!br(d,y))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===a?!1:i?a?qc(i,a,d):!0:!!a;return!1}function qc(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const o=i[s];if(e[o]!==t[o]&&!br(n,o))return!0}return!1}function Og({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const kh=t=>t.__isSuspense;function kg(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):$p(t)}const Gt=Symbol.for("v-fgt"),Er=Symbol.for("v-txt"),di=Symbol.for("v-cmt"),ao=Symbol.for("v-stc"),Gi=[];let nt=null;function Bn(t=!1){Gi.push(nt=t?null:[])}function Ng(){Gi.pop(),nt=Gi[Gi.length-1]||null}let ss=1;function Kc(t,e=!1){ss+=t,t<0&&nt&&e&&(nt.hasOnce=!0)}function Nh(t){return t.dynamicChildren=ss>0?nt||ri:null,Ng(),ss>0&&nt&&nt.push(t),t}function Dg(t,e,n,i,s,o){return Nh(be(t,e,n,i,s,o,!0))}function vi(t,e,n,i,s){return Nh(te(t,e,n,i,s,!0))}function er(t){return t?t.__v_isVNode===!0:!1}function Li(t,e){return t.type===e.type&&t.key===e.key}const Dh=({key:t})=>t??null,Hs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ne(t)||Be(t)||se(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function be(t,e=null,n=null,i=0,s=null,o=t===Gt?0:1,a=!1,l=!1){const h={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dh(e),ref:e&&Hs(e),scopeId:lh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return l?(ma(h,n),o&128&&t.normalize(h)):n&&(h.shapeFlag|=Ne(n)?8:16),ss>0&&!a&&nt&&(h.patchFlag>0||o&6)&&h.patchFlag!==32&&nt.push(h),h}const te=xg;function xg(t,e=null,n=null,i=0,s=null,o=!1){if((!t||t===ng)&&(t=di),er(t)){const l=pi(t,e,!0);return n&&ma(l,n),ss>0&&!o&&nt&&(l.shapeFlag&6?nt[nt.indexOf(t)]=l:nt.push(l)),l.patchFlag=-2,l}if(Gg(t)&&(t=t.__vccOpts),e){e=Mg(e);let{class:l,style:h}=e;l&&!Ne(l)&&(e.class=na(l)),Re(h)&&(ua(h)&&!ne(h)&&(h=He({},h)),e.style=ta(h))}const a=Ne(t)?1:kh(t)?128:Hp(t)?64:Re(t)?4:se(t)?2:0;return be(t,e,n,i,s,a,o,!0)}function Mg(t){return t?ua(t)||wh(t)?He({},t):t:null}function pi(t,e,n=!1,i=!1){const{props:s,ref:o,patchFlag:a,children:l,transition:h}=t,d=e?Lg(s||{},e):s,p={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&Dh(d),ref:e&&e.ref?n&&o?ne(o)?o.concat(Hs(e)):[o,Hs(e)]:Hs(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Gt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:h,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pi(t.ssContent),ssFallback:t.ssFallback&&pi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return h&&i&&fa(p,h.clone(p)),p}function gt(t=" ",e=0){return te(Er,null,t,e)}function kt(t){return t==null||typeof t=="boolean"?te(di):ne(t)?te(Gt,null,t.slice()):er(t)?dn(t):te(Er,null,String(t))}function dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:pi(t)}function ma(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ma(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!wh(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),i&64?(n=16,e=[gt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Lg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=na([e.class,i.class]));else if(s==="style")e.style=ta([e.style,i.style]);else if(pr(s)){const o=e[s],a=i[s];a&&o!==a&&!(ne(o)&&o.includes(a))&&(e[s]=o?[].concat(o,a):a)}else s!==""&&(e[s]=i[s])}return e}function Rt(t,e,n,i=null){Ft(t,e,7,[n,i])}const Ug=_h();let Fg=0;function jg(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Ug,o={uid:Fg++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bh(i,s),emitsOptions:Oh(i,s),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:i.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Ag.bind(null,o),t.ce&&t.ce(o),o}let Ue=null;const Vg=()=>Ue||lt;let tr,Mo;{const t=yr(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),o=>{s.length>1?s.forEach(a=>a(o)):s[0](o)}};tr=e("__VUE_INSTANCE_SETTERS__",n=>Ue=n),Mo=e("__VUE_SSR_SETTERS__",n=>rs=n)}const fs=t=>{const e=Ue;return tr(t),t.scope.on(),()=>{t.scope.off(),tr(e)}},Jc=()=>{Ue&&Ue.scope.off(),tr(null)};function xh(t){return t.vnode.shapeFlag&4}let rs=!1;function $g(t,e=!1,n=!1){e&&Mo(e);const{props:i,children:s}=t.vnode,o=xh(t);fg(t,i,o,e),mg(t,s,n||e);const a=o?Bg(t,e):void 0;return e&&Mo(!1),a}function Bg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,sg);const{setup:i}=n;if(i){Qt();const s=t.setupContext=i.length>1?Wg(t):null,o=fs(t),a=hs(i,t,0,[t.props,s]),l=ku(a);if(Zt(),o(),(l||t.sp)&&!Wi(t)&&hh(t),l){if(a.then(Jc,Jc),e)return a.then(h=>{Xc(t,h)}).catch(h=>{wr(h,t,0)});t.asyncDep=a}else Xc(t,a)}else Mh(t)}function Xc(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=ih(e)),Mh(t)}function Mh(t,e,n){const i=t.type;t.render||(t.render=i.render||Mt);{const s=fs(t);Qt();try{rg(t)}finally{Zt(),s()}}}const Hg={get(t,e){return $e(t,"get",""),t[e]}};function Wg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Hg),slots:t.slots,emit:t.emit,expose:e}}function _a(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ih(Np(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in zi)return zi[n](t)},has(e,n){return n in e||n in zi}})):t.proxy}function zg(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function Gg(t){return se(t)&&"__vccOpts"in t}const mt=(t,e)=>Lp(t,e,rs);function Lh(t,e,n){const i=arguments.length;return i===2?Re(e)&&!ne(e)?er(e)?te(t,null,[e]):te(t,e):te(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&er(n)&&(n=[n]),te(t,e,n))}const qg="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lo;const Yc=typeof window<"u"&&window.trustedTypes;if(Yc)try{Lo=Yc.createPolicy("vue",{createHTML:t=>t})}catch{}const Uh=Lo?t=>Lo.createHTML(t):t=>t,Kg="http://www.w3.org/2000/svg",Jg="http://www.w3.org/1998/Math/MathML",zt=typeof document<"u"?document:null,Qc=zt&&zt.createElement("template"),Xg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?zt.createElementNS(Kg,t):e==="mathml"?zt.createElementNS(Jg,t):n?zt.createElement(t,{is:n}):zt.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>zt.createTextNode(t),createComment:t=>zt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>zt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,o){const a=n?n.previousSibling:e.lastChild;if(s&&(s===o||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{Qc.innerHTML=Uh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const l=Qc.content;if(i==="svg"||i==="mathml"){const h=l.firstChild;for(;h.firstChild;)l.appendChild(h.firstChild);l.removeChild(h)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Yg=Symbol("_vtc");function Qg(t,e,n){const i=t[Yg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Zc=Symbol("_vod"),Zg=Symbol("_vsh"),em=Symbol(""),tm=/(^|;)\s*display\s*:/;function nm(t,e,n){const i=t.style,s=Ne(n);let o=!1;if(n&&!s){if(e)if(Ne(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Ws(i,l,"")}else for(const a in e)n[a]==null&&Ws(i,a,"");for(const a in n)a==="display"&&(o=!0),Ws(i,a,n[a])}else if(s){if(e!==n){const a=i[em];a&&(n+=";"+a),i.cssText=n,o=tm.test(n)}}else e&&t.removeAttribute("style");Zc in t&&(t[Zc]=o?i.display:"",t[Zg]&&(i.display="none"))}const el=/\s*!important$/;function Ws(t,e,n){if(ne(n))n.forEach(i=>Ws(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=im(t,e);el.test(n)?t.setProperty(Kn(i),n.replace(el,""),"important"):t[i]=n}}const tl=["Webkit","Moz","ms"],co={};function im(t,e){const n=co[e];if(n)return n;let i=ht(e);if(i!=="filter"&&i in t)return co[e]=i;i=_r(i);for(let s=0;s<tl.length;s++){const o=tl[s]+i;if(o in t)return co[e]=o}return e}const nl="http://www.w3.org/1999/xlink";function il(t,e,n,i,s,o=hp(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(nl,e.slice(6,e.length)):t.setAttributeNS(nl,e,n):n==null||o&&!xu(n)?t.removeAttribute(e):t.setAttribute(e,o?"":En(n)?String(n):n)}function sl(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Uh(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?t.getAttribute("value")||"":t.value,h=n==null?t.type==="checkbox"?"on":"":String(n);(l!==h||!("_value"in t))&&(t.value=h),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=xu(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function sm(t,e,n,i){t.addEventListener(e,n,i)}function rm(t,e,n,i){t.removeEventListener(e,n,i)}const rl=Symbol("_vei");function om(t,e,n,i,s=null){const o=t[rl]||(t[rl]={}),a=o[e];if(i&&a)a.value=i;else{const[l,h]=am(e);if(i){const d=o[e]=um(i,s);sm(t,l,d,h)}else a&&(rm(t,l,a,h),o[e]=void 0)}}const ol=/(?:Once|Passive|Capture)$/;function am(t){let e;if(ol.test(t)){e={};let i;for(;i=t.match(ol);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kn(t.slice(2)),e]}let lo=0;const cm=Promise.resolve(),lm=()=>lo||(cm.then(()=>lo=0),lo=Date.now());function um(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Ft(hm(i,n.value),e,5,[i])};return n.value=t,n.attached=lm(),n}function hm(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const al=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,fm=(t,e,n,i,s,o)=>{const a=s==="svg";e==="class"?Qg(t,i,a):e==="style"?nm(t,n,i):pr(e)?Qo(e)||om(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dm(t,e,i,a))?(sl(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&il(t,e,i,a,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ne(i))?sl(t,ht(e),i,o,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),il(t,e,i,a))};function dm(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&al(e)&&se(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return al(e)&&Ne(n)?!1:e in t}const pm=He({patchProp:fm},Xg);let cl;function gm(){return cl||(cl=yg(pm))}const mm=(...t)=>{const e=gm().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=ym(i);if(!s)return;const o=e._component;!se(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,_m(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function _m(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ym(t){return Ne(t)?document.querySelector(t):t}var vm=Object.defineProperty,wm=(t,e)=>{for(var n in e)vm(t,n,{get:e[n],enumerable:!0})},Im=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),bm={};wm(bm,{err:()=>Fh,map:()=>Em,ok:()=>Uo,unwrap:()=>Tm,unwrapErr:()=>Sm});var Uo=t=>({isOk:!0,isErr:!1,value:t}),Fh=t=>({isOk:!1,isErr:!0,value:t});function Em(t,e){if(t.isOk){const n=e(t.value);return n instanceof Promise?n.then(i=>Uo(i)):Uo(n)}if(t.isErr){const n=t.value;return Fh(n)}throw"should never get here"}var Tm=t=>{if(t.isOk)return t.value;throw t.value},Sm=t=>{if(t.isErr)return t.value;throw t.value},ya=t=>{const e=Im(t);return new RegExp(`(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${e}))(${e}\\b)`,"g")};ya("::slotted");ya(":host");ya(":host-context");/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */class Am{constructor(){this.m=new Map}reset(e){this.m=new Map(Object.entries(e))}get(e,n){const i=this.m.get(e);return i!==void 0?i:n}getBoolean(e,n=!1){const i=this.m.get(e);return i===void 0?n:typeof i=="string"?i==="true":!!i}getNumber(e,n){const i=parseFloat(this.m.get(e));return isNaN(i)?n!==void 0?n:NaN:i}set(e,n){this.m.set(e,n)}}const hn=new Am,Cm=t=>{try{const e=t.sessionStorage.getItem(jh);return e!==null?JSON.parse(e):{}}catch{return{}}},Rm=(t,e)=>{try{t.sessionStorage.setItem(jh,JSON.stringify(e))}catch{return}},Pm=t=>{const e={};return t.location.search.slice(1).split("&").map(n=>n.split("=")).map(([n,i])=>{try{return[decodeURIComponent(n),decodeURIComponent(i)]}catch{return["",""]}}).filter(([n])=>Om(n,ll)).map(([n,i])=>[n.slice(ll.length),i]).forEach(([n,i])=>{e[n]=i}),e},Om=(t,e)=>t.substr(0,e.length)===e,ll="ionic:",jh="ionic-persist-config";var ul;(function(t){t.OFF="OFF",t.ERROR="ERROR",t.WARN="WARN"})(ul||(ul={}));/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const km=t=>Vh(t),Nm=(t,e)=>(typeof t=="string"&&(e=t,t=void 0),km(t).includes(e)),Vh=(t=window)=>{if(typeof t>"u")return[];t.Ionic=t.Ionic||{};let e=t.Ionic.platforms;return e==null&&(e=t.Ionic.platforms=Dm(t),e.forEach(n=>t.document.documentElement.classList.add(`plt-${n}`))),e},Dm=t=>{const e=hn.get("platform");return Object.keys(hl).filter(n=>{const i=e?.[n];return typeof i=="function"?i(t):hl[n](t)})},xm=t=>Tr(t)&&!Bh(t),va=t=>!!(Hn(t,/iPad/i)||Hn(t,/Macintosh/i)&&Tr(t)),Mm=t=>Hn(t,/iPhone/i),Lm=t=>Hn(t,/iPhone|iPod/i)||va(t),$h=t=>Hn(t,/android|sink/i),Um=t=>$h(t)&&!Hn(t,/mobile/i),Fm=t=>{const e=t.innerWidth,n=t.innerHeight,i=Math.min(e,n),s=Math.max(e,n);return i>390&&i<520&&s>620&&s<800},jm=t=>{const e=t.innerWidth,n=t.innerHeight,i=Math.min(e,n),s=Math.max(e,n);return va(t)||Um(t)||i>460&&i<820&&s>780&&s<1400},Tr=t=>Hm(t,"(any-pointer:coarse)"),Vm=t=>!Tr(t),Bh=t=>Hh(t)||Wh(t),Hh=t=>!!(t.cordova||t.phonegap||t.PhoneGap),Wh=t=>{const e=t.Capacitor;return!!(e?.isNative||e?.isNativePlatform&&e.isNativePlatform())},$m=t=>Hn(t,/electron/i),Bm=t=>{var e;return!!(!((e=t.matchMedia)===null||e===void 0)&&e.call(t,"(display-mode: standalone)").matches||t.navigator.standalone)},Hn=(t,e)=>e.test(t.navigator.userAgent),Hm=(t,e)=>{var n;return(n=t.matchMedia)===null||n===void 0?void 0:n.call(t,e).matches},hl={ipad:va,iphone:Mm,ios:Lm,android:$h,phablet:Fm,tablet:jm,cordova:Hh,capacitor:Wh,electron:$m,pwa:Bm,mobile:Tr,mobileweb:xm,desktop:Vm,hybrid:Bh};let Ls;const Wm=(t={})=>{if(typeof window>"u")return;const e=window.document,n=window,i=n.Ionic=n.Ionic||{},s=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Cm(n)),{persistConfig:!1}),i.config),Pm(n)),t);hn.reset(s),hn.getBoolean("persistConfig")&&Rm(n,s),Vh(n),i.config=hn,i.mode=Ls=hn.get("mode",e.documentElement.getAttribute("mode")||(Nm(n,"ios")?"ios":"md")),hn.set("mode",Ls),e.documentElement.setAttribute("mode",Ls),e.documentElement.classList.add(Ls),hn.getBoolean("_testing")&&hn.set("animated",!1)};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const Us=typeof window<"u"?window:void 0;Us&&(Us.CSS&&Us.CSS.supports&&Us.CSS.supports("--a: 0"));const zm="ionViewWillEnter",Gm="ionViewDidEnter",qm="ionViewWillLeave",Km="ionViewDidLeave";/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const si=typeof document<"u";function zh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Jm(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&zh(t.default)}const _e=Object.assign;function uo(t,e){const n={};for(const i in e){const s=e[i];n[i]=Tt(s)?s.map(t):t(s)}return n}const qi=()=>{},Tt=Array.isArray,Gh=/#/g,Xm=/&/g,Ym=/\//g,Qm=/=/g,Zm=/\?/g,qh=/\+/g,e_=/%5B/g,t_=/%5D/g,Kh=/%5E/g,n_=/%60/g,Jh=/%7B/g,i_=/%7C/g,Xh=/%7D/g,s_=/%20/g;function wa(t){return encodeURI(""+t).replace(i_,"|").replace(e_,"[").replace(t_,"]")}function r_(t){return wa(t).replace(Jh,"{").replace(Xh,"}").replace(Kh,"^")}function Fo(t){return wa(t).replace(qh,"%2B").replace(s_,"+").replace(Gh,"%23").replace(Xm,"%26").replace(n_,"`").replace(Jh,"{").replace(Xh,"}").replace(Kh,"^")}function o_(t){return Fo(t).replace(Qm,"%3D")}function a_(t){return wa(t).replace(Gh,"%23").replace(Zm,"%3F")}function c_(t){return t==null?"":a_(t).replace(Ym,"%2F")}function os(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const l_=/\/$/,u_=t=>t.replace(l_,"");function ho(t,e,n="/"){let i,s={},o="",a="";const l=e.indexOf("#");let h=e.indexOf("?");return l<h&&l>=0&&(h=-1),h>-1&&(i=e.slice(0,h),o=e.slice(h+1,l>-1?l:e.length),s=t(o)),l>-1&&(i=i||e.slice(0,l),a=e.slice(l,e.length)),i=p_(i??e,n),{fullPath:i+(o&&"?")+o+a,path:i,query:s,hash:os(a)}}function h_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function fl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function f_(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&gi(e.matched[i],n.matched[s])&&Yh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Yh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!d_(t[n],e[n]))return!1;return!0}function d_(t,e){return Tt(t)?dl(t,e):Tt(e)?dl(e,t):t===e}function dl(t,e){return Tt(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function p_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let o=n.length-1,a,l;for(a=0;a<i.length;a++)if(l=i[a],l!==".")if(l==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+i.slice(a).join("/")}const ln={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var as;(function(t){t.pop="pop",t.push="push"})(as||(as={}));var Ki;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ki||(Ki={}));function g_(t){if(!t)if(si){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),u_(t)}const m_=/^[^#]+#/;function __(t,e){return t.replace(m_,"#")+e}function y_(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Sr=()=>({left:window.scrollX,top:window.scrollY});function v_(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=y_(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function pl(t,e){return(history.state?history.state.position-e:-1)+t}const jo=new Map;function w_(t,e){jo.set(t,e)}function I_(t){const e=jo.get(t);return jo.delete(t),e}let b_=()=>location.protocol+"//"+location.host;function Qh(t,e){const{pathname:n,search:i,hash:s}=e,o=t.indexOf("#");if(o>-1){let l=s.includes(t.slice(o))?t.slice(o).length:1,h=s.slice(l);return h[0]!=="/"&&(h="/"+h),fl(h,"")}return fl(n,t)+i+s}function E_(t,e,n,i){let s=[],o=[],a=null;const l=({state:y})=>{const S=Qh(t,location),x=n.value,L=e.value;let G=0;if(y){if(n.value=S,e.value=y,a&&a===x){a=null;return}G=L?y.position-L.position:0}else i(S);s.forEach(K=>{K(n.value,x,{delta:G,type:as.pop,direction:G?G>0?Ki.forward:Ki.back:Ki.unknown})})};function h(){a=n.value}function d(y){s.push(y);const S=()=>{const x=s.indexOf(y);x>-1&&s.splice(x,1)};return o.push(S),S}function p(){const{history:y}=window;y.state&&y.replaceState(_e({},y.state,{scroll:Sr()}),"")}function m(){for(const y of o)y();o=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:h,listen:d,destroy:m}}function gl(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Sr():null}}function T_(t){const{history:e,location:n}=window,i={value:Qh(t,n)},s={value:e.state};s.value||o(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(h,d,p){const m=t.indexOf("#"),y=m>-1?(n.host&&document.querySelector("base")?t:t.slice(m))+h:b_()+t+h;try{e[p?"replaceState":"pushState"](d,"",y),s.value=d}catch(S){console.error(S),n[p?"replace":"assign"](y)}}function a(h,d){const p=_e({},e.state,gl(s.value.back,h,s.value.forward,!0),d,{position:s.value.position});o(h,p,!0),i.value=h}function l(h,d){const p=_e({},s.value,e.state,{forward:h,scroll:Sr()});o(p.current,p,!0);const m=_e({},gl(i.value,h,null),{position:p.position+1},d);o(h,m,!1),i.value=h}return{location:i,state:s,push:l,replace:a}}function S_(t){t=g_(t);const e=T_(t),n=E_(t,e.state,e.location,e.replace);function i(o,a=!0){a||n.pauseListeners(),history.go(o)}const s=_e({location:"",base:t,go:i,createHref:__.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function A_(t){return typeof t=="string"||t&&typeof t=="object"}function Zh(t){return typeof t=="string"||typeof t=="symbol"}const ef=Symbol("");var ml;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ml||(ml={}));function mi(t,e){return _e(new Error,{type:t,[ef]:!0},e)}function Wt(t,e){return t instanceof Error&&ef in t&&(e==null||!!(t.type&e))}const _l="[^/]+?",C_={sensitive:!1,strict:!1,start:!0,end:!0},R_=/[.+*?^${}()[\]/\\]/g;function P_(t,e){const n=_e({},C_,e),i=[];let s=n.start?"^":"";const o=[];for(const d of t){const p=d.length?[]:[90];n.strict&&!d.length&&(s+="/");for(let m=0;m<d.length;m++){const y=d[m];let S=40+(n.sensitive?.25:0);if(y.type===0)m||(s+="/"),s+=y.value.replace(R_,"\\$&"),S+=40;else if(y.type===1){const{value:x,repeatable:L,optional:G,regexp:K}=y;o.push({name:x,repeatable:L,optional:G});const V=K||_l;if(V!==_l){S+=10;try{new RegExp(`(${V})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${x}" (${V}): `+z.message)}}let W=L?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;m||(W=G&&d.length<2?`(?:/${W})`:"/"+W),G&&(W+="?"),s+=W,S+=20,G&&(S+=-8),L&&(S+=-20),V===".*"&&(S+=-50)}p.push(S)}i.push(p)}if(n.strict&&n.end){const d=i.length-1;i[d][i[d].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(d){const p=d.match(a),m={};if(!p)return null;for(let y=1;y<p.length;y++){const S=p[y]||"",x=o[y-1];m[x.name]=S&&x.repeatable?S.split("/"):S}return m}function h(d){let p="",m=!1;for(const y of t){(!m||!p.endsWith("/"))&&(p+="/"),m=!1;for(const S of y)if(S.type===0)p+=S.value;else if(S.type===1){const{value:x,repeatable:L,optional:G}=S,K=x in d?d[x]:"";if(Tt(K)&&!L)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const V=Tt(K)?K.join("/"):K;if(!V)if(G)y.length<2&&(p.endsWith("/")?p=p.slice(0,-1):m=!0);else throw new Error(`Missing required param "${x}"`);p+=V}}return p||"/"}return{re:a,score:i,keys:o,parse:l,stringify:h}}function O_(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function tf(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const o=O_(i[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-i.length)===1){if(yl(i))return 1;if(yl(s))return-1}return s.length-i.length}function yl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const k_={type:0,value:""},N_=/[a-zA-Z0-9_]/;function D_(t){if(!t)return[[]];if(t==="/")return[[k_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(S){throw new Error(`ERR (${n})/"${d}": ${S}`)}let n=0,i=n;const s=[];let o;function a(){o&&s.push(o),o=[]}let l=0,h,d="",p="";function m(){d&&(n===0?o.push({type:0,value:d}):n===1||n===2||n===3?(o.length>1&&(h==="*"||h==="+")&&e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:d,regexp:p,repeatable:h==="*"||h==="+",optional:h==="*"||h==="?"})):e("Invalid state to consume buffer"),d="")}function y(){d+=h}for(;l<t.length;){if(h=t[l++],h==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:h==="/"?(d&&m(),a()):h===":"?(m(),n=1):y();break;case 4:y(),n=i;break;case 1:h==="("?n=2:N_.test(h)?y():(m(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&l--);break;case 2:h===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+h:n=3:p+=h;break;case 3:m(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&l--,p="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${d}"`),m(),a(),s}function x_(t,e,n){const i=P_(D_(t.path),n),s=_e(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function M_(t,e){const n=[],i=new Map;e=bl({strict:!1,end:!0,sensitive:!1},e);function s(m){return i.get(m)}function o(m,y,S){const x=!S,L=wl(m);L.aliasOf=S&&S.record;const G=bl(e,m),K=[L];if("alias"in m){const z=typeof m.alias=="string"?[m.alias]:m.alias;for(const ae of z)K.push(wl(_e({},L,{components:S?S.record.components:L.components,path:ae,aliasOf:S?S.record:L})))}let V,W;for(const z of K){const{path:ae}=z;if(y&&ae[0]!=="/"){const pe=y.record.path,b=pe[pe.length-1]==="/"?"":"/";z.path=y.record.path+(ae&&b+ae)}if(V=x_(z,y,G),S?S.alias.push(V):(W=W||V,W!==V&&W.alias.push(V),x&&m.name&&!Il(V)&&a(m.name)),nf(V)&&h(V),L.children){const pe=L.children;for(let b=0;b<pe.length;b++)o(pe[b],V,S&&S.children[b])}S=S||V}return W?()=>{a(W)}:qi}function a(m){if(Zh(m)){const y=i.get(m);y&&(i.delete(m),n.splice(n.indexOf(y),1),y.children.forEach(a),y.alias.forEach(a))}else{const y=n.indexOf(m);y>-1&&(n.splice(y,1),m.record.name&&i.delete(m.record.name),m.children.forEach(a),m.alias.forEach(a))}}function l(){return n}function h(m){const y=F_(m,n);n.splice(y,0,m),m.record.name&&!Il(m)&&i.set(m.record.name,m)}function d(m,y){let S,x={},L,G;if("name"in m&&m.name){if(S=i.get(m.name),!S)throw mi(1,{location:m});G=S.record.name,x=_e(vl(y.params,S.keys.filter(W=>!W.optional).concat(S.parent?S.parent.keys.filter(W=>W.optional):[]).map(W=>W.name)),m.params&&vl(m.params,S.keys.map(W=>W.name))),L=S.stringify(x)}else if(m.path!=null)L=m.path,S=n.find(W=>W.re.test(L)),S&&(x=S.parse(L),G=S.record.name);else{if(S=y.name?i.get(y.name):n.find(W=>W.re.test(y.path)),!S)throw mi(1,{location:m,currentLocation:y});G=S.record.name,x=_e({},y.params,m.params),L=S.stringify(x)}const K=[];let V=S;for(;V;)K.unshift(V.record),V=V.parent;return{name:G,path:L,params:x,matched:K,meta:U_(K)}}t.forEach(m=>o(m));function p(){n.length=0,i.clear()}return{addRoute:o,resolve:d,removeRoute:a,clearRoutes:p,getRoutes:l,getRecordMatcher:s}}function vl(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function wl(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:L_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function L_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Il(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function U_(t){return t.reduce((e,n)=>_e(e,n.meta),{})}function bl(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function F_(t,e){let n=0,i=e.length;for(;n!==i;){const o=n+i>>1;tf(t,e[o])<0?i=o:n=o+1}const s=j_(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function j_(t){let e=t;for(;e=e.parent;)if(nf(e)&&tf(t,e)===0)return e}function nf({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function V_(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const o=i[s].replace(qh," "),a=o.indexOf("="),l=os(a<0?o:o.slice(0,a)),h=a<0?null:os(o.slice(a+1));if(l in e){let d=e[l];Tt(d)||(d=e[l]=[d]),d.push(h)}else e[l]=h}return e}function El(t){let e="";for(let n in t){const i=t[n];if(n=o_(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Tt(i)?i.map(o=>o&&Fo(o)):[i&&Fo(i)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function $_(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Tt(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const B_=Symbol(""),Tl=Symbol(""),Ar=Symbol(""),sf=Symbol(""),Vo=Symbol("");function Ui(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function pn(t,e,n,i,s,o=a=>a()){const a=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((l,h)=>{const d=y=>{y===!1?h(mi(4,{from:n,to:e})):y instanceof Error?h(y):A_(y)?h(mi(2,{from:e,to:y})):(a&&i.enterCallbacks[s]===a&&typeof y=="function"&&a.push(y),l())},p=o(()=>t.call(i&&i.instances[s],e,n,d));let m=Promise.resolve(p);t.length<3&&(m=m.then(d)),m.catch(y=>h(y))})}function fo(t,e,n,i,s=o=>o()){const o=[];for(const a of t)for(const l in a.components){let h=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(zh(h)){const p=(h.__vccOpts||h)[e];p&&o.push(pn(p,n,i,a,l,s))}else{let d=h();o.push(()=>d.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const m=Jm(p)?p.default:p;a.mods[l]=p,a.components[l]=m;const S=(m.__vccOpts||m)[e];return S&&pn(S,n,i,a,l,s)()}))}}return o}function Sl(t){const e=Lt(Ar),n=Lt(sf),i=mt(()=>{const h=Un(t.to);return e.resolve(h)}),s=mt(()=>{const{matched:h}=i.value,{length:d}=h,p=h[d-1],m=n.matched;if(!p||!m.length)return-1;const y=m.findIndex(gi.bind(null,p));if(y>-1)return y;const S=Al(h[d-2]);return d>1&&Al(p)===S&&m[m.length-1].path!==S?m.findIndex(gi.bind(null,h[d-2])):y}),o=mt(()=>s.value>-1&&q_(n.params,i.value.params)),a=mt(()=>s.value>-1&&s.value===n.matched.length-1&&Yh(n.params,i.value.params));function l(h={}){if(G_(h)){const d=e[Un(t.replace)?"replace":"push"](Un(t.to)).catch(qi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:i,href:mt(()=>i.value.href),isActive:o,isExactActive:a,navigate:l}}function H_(t){return t.length===1?t[0]:t}const W_=uh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Sl,setup(t,{slots:e}){const n=vr(Sl(t)),{options:i}=Lt(Ar),s=mt(()=>({[Cl(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Cl(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&H_(e.default(n));return t.custom?o:Lh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),z_=W_;function G_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function q_(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Tt(s)||s.length!==i.length||i.some((o,a)=>o!==s[a]))return!1}return!0}function Al(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Cl=(t,e,n)=>t??e??n,K_=uh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Lt(Vo),s=mt(()=>t.route||i.value),o=Lt(Tl,0),a=mt(()=>{let d=Un(o);const{matched:p}=s.value;let m;for(;(m=p[d])&&!m.components;)d++;return d}),l=mt(()=>s.value.matched[a.value]);$s(Tl,mt(()=>a.value+1)),$s(B_,l),$s(Vo,s);const h=eh();return Bs(()=>[h.value,l.value,t.name],([d,p,m],[y,S,x])=>{p&&(p.instances[m]=d,S&&S!==p&&d&&d===y&&(p.leaveGuards.size||(p.leaveGuards=S.leaveGuards),p.updateGuards.size||(p.updateGuards=S.updateGuards))),d&&p&&(!S||!gi(p,S)||!y)&&(p.enterCallbacks[m]||[]).forEach(L=>L(d))},{flush:"post"}),()=>{const d=s.value,p=t.name,m=l.value,y=m&&m.components[p];if(!y)return Rl(n.default,{Component:y,route:d});const S=m.props[p],x=S?S===!0?d.params:typeof S=="function"?S(d):S:null,G=Lh(y,_e({},x,e,{onVnodeUnmounted:K=>{K.component.isUnmounted&&(m.instances[p]=null)},ref:h}));return Rl(n.default,{Component:G,route:d})||G}}});function Rl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const J_=K_;function X_(t){const e=M_(t.routes,t),n=t.parseQuery||V_,i=t.stringifyQuery||El,s=t.history,o=Ui(),a=Ui(),l=Ui(),h=th(ln);let d=ln;si&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=uo.bind(null,O=>""+O),m=uo.bind(null,c_),y=uo.bind(null,os);function S(O,q){let H,J;return Zh(O)?(H=e.getRecordMatcher(O),J=q):J=O,e.addRoute(J,H)}function x(O){const q=e.getRecordMatcher(O);q&&e.removeRoute(q)}function L(){return e.getRoutes().map(O=>O.record)}function G(O){return!!e.getRecordMatcher(O)}function K(O,q){if(q=_e({},q||h.value),typeof O=="string"){const A=ho(n,O,q.path),k=e.resolve({path:A.path},q),D=s.createHref(A.fullPath);return _e(A,k,{params:y(k.params),hash:os(A.hash),redirectedFrom:void 0,href:D})}let H;if(O.path!=null)H=_e({},O,{path:ho(n,O.path,q.path).path});else{const A=_e({},O.params);for(const k in A)A[k]==null&&delete A[k];H=_e({},O,{params:m(A)}),q.params=m(q.params)}const J=e.resolve(H,q),ge=O.hash||"";J.params=p(y(J.params));const g=h_(i,_e({},O,{hash:r_(ge),path:J.path})),v=s.createHref(g);return _e({fullPath:g,hash:ge,query:i===El?$_(O.query):O.query||{}},J,{redirectedFrom:void 0,href:v})}function V(O){return typeof O=="string"?ho(n,O,h.value.path):_e({},O)}function W(O,q){if(d!==O)return mi(8,{from:q,to:O})}function z(O){return b(O)}function ae(O){return z(_e(V(O),{replace:!0}))}function pe(O){const q=O.matched[O.matched.length-1];if(q&&q.redirect){const{redirect:H}=q;let J=typeof H=="function"?H(O):H;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=V(J):{path:J},J.params={}),_e({query:O.query,hash:O.hash,params:J.path!=null?{}:O.params},J)}}function b(O,q){const H=d=K(O),J=h.value,ge=O.state,g=O.force,v=O.replace===!0,A=pe(H);if(A)return b(_e(V(A),{state:typeof A=="object"?_e({},ge,A.state):ge,force:g,replace:v}),q||H);const k=H;k.redirectedFrom=q;let D;return!g&&f_(i,J,H)&&(D=mi(16,{to:k,from:J}),rt(J,J,!0,!1)),(D?Promise.resolve(D):E(k,J)).catch(N=>Wt(N)?Wt(N,2)?N:ft(N):oe(N,k,J)).then(N=>{if(N){if(Wt(N,2))return b(_e({replace:v},V(N.to),{state:typeof N.to=="object"?_e({},ge,N.to.state):ge,force:g}),q||k)}else N=C(k,J,!0,v,ge);return T(k,J,N),N})}function _(O,q){const H=W(O,q);return H?Promise.reject(H):Promise.resolve()}function I(O){const q=sn.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(O):O()}function E(O,q){let H;const[J,ge,g]=Y_(O,q);H=fo(J.reverse(),"beforeRouteLeave",O,q);for(const A of J)A.leaveGuards.forEach(k=>{H.push(pn(k,O,q))});const v=_.bind(null,O,q);return H.push(v),Ye(H).then(()=>{H=[];for(const A of o.list())H.push(pn(A,O,q));return H.push(v),Ye(H)}).then(()=>{H=fo(ge,"beforeRouteUpdate",O,q);for(const A of ge)A.updateGuards.forEach(k=>{H.push(pn(k,O,q))});return H.push(v),Ye(H)}).then(()=>{H=[];for(const A of g)if(A.beforeEnter)if(Tt(A.beforeEnter))for(const k of A.beforeEnter)H.push(pn(k,O,q));else H.push(pn(A.beforeEnter,O,q));return H.push(v),Ye(H)}).then(()=>(O.matched.forEach(A=>A.enterCallbacks={}),H=fo(g,"beforeRouteEnter",O,q,I),H.push(v),Ye(H))).then(()=>{H=[];for(const A of a.list())H.push(pn(A,O,q));return H.push(v),Ye(H)}).catch(A=>Wt(A,8)?A:Promise.reject(A))}function T(O,q,H){l.list().forEach(J=>I(()=>J(O,q,H)))}function C(O,q,H,J,ge){const g=W(O,q);if(g)return g;const v=q===ln,A=si?history.state:{};H&&(J||v?s.replace(O.fullPath,_e({scroll:v&&A&&A.scroll},ge)):s.push(O.fullPath,ge)),h.value=O,rt(O,q,H,v),ft()}let w;function We(){w||(w=s.listen((O,q,H)=>{if(!Ct.listening)return;const J=K(O),ge=pe(J);if(ge){b(_e(ge,{replace:!0,force:!0}),J).catch(qi);return}d=J;const g=h.value;si&&w_(pl(g.fullPath,H.delta),Sr()),E(J,g).catch(v=>Wt(v,12)?v:Wt(v,2)?(b(_e(V(v.to),{force:!0}),J).then(A=>{Wt(A,20)&&!H.delta&&H.type===as.pop&&s.go(-1,!1)}).catch(qi),Promise.reject()):(H.delta&&s.go(-H.delta,!1),oe(v,J,g))).then(v=>{v=v||C(J,g,!1),v&&(H.delta&&!Wt(v,8)?s.go(-H.delta,!1):H.type===as.pop&&Wt(v,20)&&s.go(-1,!1)),T(J,g,v)}).catch(qi)}))}let st=Ui(),Oe=Ui(),ce;function oe(O,q,H){ft(O);const J=Oe.list();return J.length?J.forEach(ge=>ge(O,q,H)):console.error(O),Promise.reject(O)}function et(){return ce&&h.value!==ln?Promise.resolve():new Promise((O,q)=>{st.add([O,q])})}function ft(O){return ce||(ce=!O,We(),st.list().forEach(([q,H])=>O?H(O):q()),st.reset()),O}function rt(O,q,H,J){const{scrollBehavior:ge}=t;if(!si||!ge)return Promise.resolve();const g=!H&&I_(pl(O.fullPath,0))||(J||!H)&&history.state&&history.state.scroll||null;return rh().then(()=>ge(O,q,g)).then(v=>v&&v_(v)).catch(v=>oe(v,O,q))}const Ae=O=>s.go(O);let Ce;const sn=new Set,Ct={currentRoute:h,listening:!0,addRoute:S,removeRoute:x,clearRoutes:e.clearRoutes,hasRoute:G,getRoutes:L,resolve:K,options:t,push:z,replace:ae,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:o.add,beforeResolve:a.add,afterEach:l.add,onError:Oe.add,isReady:et,install(O){const q=this;O.component("RouterLink",z_),O.component("RouterView",J_),O.config.globalProperties.$router=q,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Un(h)}),si&&!Ce&&h.value===ln&&(Ce=!0,z(s.location).catch(ge=>{}));const H={};for(const ge in ln)Object.defineProperty(H,ge,{get:()=>h.value[ge],enumerable:!0});O.provide(Ar,q),O.provide(sf,Qu(H)),O.provide(Vo,h);const J=O.unmount;sn.add(O),O.unmount=function(){sn.delete(O),sn.size<1&&(d=ln,w&&w(),w=null,h.value=ln,Ce=!1,ce=!1),J()}}};function Ye(O){return O.reduce((q,H)=>q.then(()=>I(H)),Promise.resolve())}return Ct}function Y_(t,e){const n=[],i=[],s=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const l=e.matched[a];l&&(t.matched.find(d=>gi(d,l))?i.push(l):n.push(l));const h=t.matched[a];h&&(e.matched.find(d=>gi(d,h))||s.push(h))}return[n,i,s]}function Cr(){return Lt(Ar)}var Dt;(function(t){t.WillEnter="onIonViewWillEnter",t.DidEnter="onIonViewDidEnter",t.WillLeave="onIonViewWillLeave",t.DidLeave="onIonViewDidLeave"})(Dt||(Dt={}));zm+"",Dt.WillEnter,Gm+"",Dt.DidEnter,qm+"",Dt.WillLeave,Km+"",Dt.DidLeave;const Q_=(t,e,n)=>{if(n){const i=n,s=i.proxy[t]||(i.proxy[t]=[]);i.exposed&&(i.exposed[t]=s);const o=(...a)=>{if(!i.isUnmounted)return a?e(...a):e()};return s.push(o),o}else console.warn("[@ionic/vue]: Ionic Lifecycle Hooks can only be used during execution of setup().")},Rr=t=>(e,n=Vg())=>Q_(t,e,n);Rr(Dt.WillEnter);Rr(Dt.DidEnter);Rr(Dt.WillLeave);Rr(Dt.DidLeave);const Z_={async install(t,e={}){typeof document<"u"&&document.documentElement.classList.add("ion-ce"),Wm(e)}};th([]);const ey="data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%23fff'/%3e%3c/svg%3e",Pr=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},ty=["src"],ny={__name:"Footer",setup(t){return(e,n)=>{const i=he("ion-title"),s=he("ion-buttons"),o=he("ion-button"),a=he("ion-toolbar"),l=he("ion-footer");return Bn(),vi(l,null,{default:re(()=>[te(a,{color:"coffee"},{default:re(()=>[te(s,{slot:"start",class:"footer-start"},{default:re(()=>[te(i,{size:"small"},{default:re(()=>n[0]||(n[0]=[gt("© 2025 Fredrik Ofstad")])),_:1,__:[0]})]),_:1}),te(s,{slot:"end",class:"footer-end"},{default:re(()=>[te(o,{href:"https://github.com/fredrikofstad/norskcafe",target:"_blank",rel:"noopener noreferrer",fill:"clear"},{default:re(()=>[be("img",{src:Un(ey),alt:"GitHub",class:"github-icon"},null,8,ty)]),_:1})]),_:1})]),_:1})]),_:1})}}},iy=Pr(ny,[["__scopeId","data-v-d440ecb6"]]),sy={__name:"App",setup(t){return(e,n)=>{const i=he("router-view"),s=he("ion-app");return Bn(),vi(s,null,{default:re(()=>[te(i),te(iy)]),_:1})}}},ry={class:"header-content"},oy={class:"footer-end"},ay={__name:"Header",setup(t){const e=Cr();function n(){e.push("/login")}return(i,s)=>{const o=he("ion-title"),a=he("ion-button"),l=he("ion-buttons"),h=he("ion-toolbar"),d=he("ion-header");return Bn(),vi(d,null,{default:re(()=>[te(h,{color:"coffee"},{default:re(()=>[be("div",ry,[te(o,{class:"header-title"},{default:re(()=>s[0]||(s[0]=[gt("Norsk Cafe")])),_:1,__:[0]})]),te(l,{slot:"end"},{default:re(()=>[be("div",oy,[te(a,{color:"accent",fill:"solid",onClick:n},{default:re(()=>s[1]||(s[1]=[gt(" Login ")])),_:1,__:[1]})])]),_:1})]),_:1})]),_:1})}}},cy=()=>{};var Pl={};/**
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
 */const rf=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ly=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],a=t[n++],l=t[n++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(h&1023))}else{const o=t[n++],a=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},of={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const o=t[s],a=s+1<t.length,l=a?t[s+1]:0,h=s+2<t.length,d=h?t[s+2]:0,p=o>>2,m=(o&3)<<4|l>>4;let y=(l&15)<<2|d>>6,S=d&63;h||(S=64,a||(y=64)),i.push(n[p],n[m],n[y],n[S])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ly(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||l==null||d==null||m==null)throw new uy;const y=o<<2|l>>4;if(i.push(y),d!==64){const S=l<<4&240|d>>2;if(i.push(S),m!==64){const x=d<<6&192|m;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hy=function(t){const e=rf(t);return of.encodeByteArray(e,!0)},nr=function(t){return hy(t).replace(/\./g,"")},af=function(t){try{return of.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dy=()=>fy().__FIREBASE_DEFAULTS__,py=()=>{if(typeof process>"u"||typeof Pl>"u")return;const t=Pl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&af(t[1]);return e&&JSON.parse(e)},Ia=()=>{try{return cy()||dy()||py()||gy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cf=t=>{var e,n;return(n=(e=Ia())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},my=t=>{const e=cf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},lf=()=>{var t;return(t=Ia())===null||t===void 0?void 0:t.config},uf=t=>{var e;return(e=Ia())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class _y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function ds(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hf(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function yy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[nr(JSON.stringify(n)),nr(JSON.stringify(a)),""].join(".")}const Ji={};function vy(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ji))Ji[e]?t.emulator.push(e):t.prod.push(e);return t}function wy(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ol=!1;function ff(t,e){if(typeof window>"u"||typeof document>"u"||!ds(window.location.host)||Ji[t]===e||Ji[t]||Ol)return;Ji[t]=e;function n(y){return`__firebase__banner__${y}`}const i="__firebase__banner",o=vy().prod.length>0;function a(){const y=document.getElementById(i);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function h(y,S){y.setAttribute("width","24"),y.setAttribute("id",S),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function d(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Ol=!0,a()},y}function p(y,S){y.setAttribute("id",S),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function m(){const y=wy(i),S=n("text"),x=document.getElementById(S)||document.createElement("span"),L=n("learnmore"),G=document.getElementById(L)||document.createElement("a"),K=n("preprendIcon"),V=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const W=y.element;l(W),p(G,L);const z=d();h(V,K),W.append(V,x,G,z),document.body.appendChild(W)}o?(x.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Iy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function by(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function df(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ey(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ty(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pf(){try{return typeof indexedDB=="object"}catch{return!1}}function gf(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function Sy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ay="FirebaseError";class At extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Ay,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jn.prototype.create)}}class Jn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?Cy(o,i):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new At(s,l,i)}}function Cy(t,e){return t.replace(Ry,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Ry=/\{\$([^}]+)}/g;function Py(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const o=t[s],a=e[s];if(kl(o)&&kl(a)){if(!bn(o,a))return!1}else if(o!==a)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function kl(t){return t!==null&&typeof t=="object"}/**
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
 */function ps(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Oy(t,e){const n=new ky(t,e);return n.subscribe.bind(n)}class ky{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Ny(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=po),s.error===void 0&&(s.error=po),s.complete===void 0&&(s.complete=po);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ny(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function po(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=1e3,xy=2,My=4*60*60*1e3,Ly=.5;function Nl(t,e=Dy,n=xy){const i=e*Math.pow(n,t),s=Math.round(Ly*i*(Math.random()-.5)*2);return Math.min(My,i+s)}/**
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
 */function Tn(t){return t&&t._delegate?t._delegate:t}class St{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new _y;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jy(e))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kn){return this.instances.has(e)}getOptions(e=kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);i===l&&a.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Fy(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=kn){return this.component?this.component.multipleInstances?e:kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fy(t){return t===kn?void 0:t}function jy(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Uy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const $y={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},By=we.INFO,Hy={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},Wy=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Hy[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Or{constructor(e){this.name=e,this._logLevel=By,this._logHandler=Wy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$y[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const zy=(t,e)=>e.some(n=>t instanceof n);let Dl,xl;function Gy(){return Dl||(Dl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qy(){return xl||(xl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mf=new WeakMap,$o=new WeakMap,_f=new WeakMap,go=new WeakMap,ba=new WeakMap;function Ky(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(wn(t.result)),s()},a=()=>{i(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&mf.set(n,t)}).catch(()=>{}),ba.set(e,t),e}function Jy(t){if($o.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});$o.set(t,e)}let Bo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $o.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_f.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Xy(t){Bo=t(Bo)}function Yy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(mo(this),e,...n);return _f.set(i,e.sort?e.sort():[e]),wn(i)}:qy().includes(t)?function(...e){return t.apply(mo(this),e),wn(mf.get(this))}:function(...e){return wn(t.apply(mo(this),e))}}function Qy(t){return typeof t=="function"?Yy(t):(t instanceof IDBTransaction&&Jy(t),zy(t,Gy())?new Proxy(t,Bo):t)}function wn(t){if(t instanceof IDBRequest)return Ky(t);if(go.has(t))return go.get(t);const e=Qy(t);return e!==t&&(go.set(t,e),ba.set(e,t)),e}const mo=t=>ba.get(t);function yf(t,e,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),l=wn(a);return i&&a.addEventListener("upgradeneeded",h=>{i(wn(a.result),h.oldVersion,h.newVersion,wn(a.transaction),h)}),n&&a.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Zy=["get","getKey","getAll","getAllKeys","count"],ev=["put","add","delete","clear"],_o=new Map;function Ml(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_o.get(e))return _o.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=ev.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Zy.includes(n)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return i&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),s&&h.done]))[0]};return _o.set(e,o),o}Xy(t=>({...t,get:(e,n,i)=>Ml(e,n)||t.get(e,n,i),has:(e,n)=>!!Ml(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nv(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function nv(t){const e=t.getComponent();return e?.type==="VERSION"}const Ho="@firebase/app",Ll="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new Or("@firebase/app"),iv="@firebase/app-compat",sv="@firebase/analytics-compat",rv="@firebase/analytics",ov="@firebase/app-check-compat",av="@firebase/app-check",cv="@firebase/auth",lv="@firebase/auth-compat",uv="@firebase/database",hv="@firebase/data-connect",fv="@firebase/database-compat",dv="@firebase/functions",pv="@firebase/functions-compat",gv="@firebase/installations",mv="@firebase/installations-compat",_v="@firebase/messaging",yv="@firebase/messaging-compat",vv="@firebase/performance",wv="@firebase/performance-compat",Iv="@firebase/remote-config",bv="@firebase/remote-config-compat",Ev="@firebase/storage",Tv="@firebase/storage-compat",Sv="@firebase/firestore",Av="@firebase/ai",Cv="@firebase/firestore-compat",Rv="firebase",Pv="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo="[DEFAULT]",Ov={[Ho]:"fire-core",[iv]:"fire-core-compat",[rv]:"fire-analytics",[sv]:"fire-analytics-compat",[av]:"fire-app-check",[ov]:"fire-app-check-compat",[cv]:"fire-auth",[lv]:"fire-auth-compat",[uv]:"fire-rtdb",[hv]:"fire-data-connect",[fv]:"fire-rtdb-compat",[dv]:"fire-fn",[pv]:"fire-fn-compat",[gv]:"fire-iid",[mv]:"fire-iid-compat",[_v]:"fire-fcm",[yv]:"fire-fcm-compat",[vv]:"fire-perf",[wv]:"fire-perf-compat",[Iv]:"fire-rc",[bv]:"fire-rc-compat",[Ev]:"fire-gcs",[Tv]:"fire-gcs-compat",[Sv]:"fire-fst",[Cv]:"fire-fst-compat",[Av]:"fire-vertex","fire-js":"fire-js",[Rv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new Map,kv=new Map,zo=new Map;function Ul(t,e){try{t.container.addComponent(e)}catch(n){en.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jt(t){const e=t.name;if(zo.has(e))return en.debug(`There were multiple attempts to register component ${e}.`),!1;zo.set(e,t);for(const n of ir.values())Ul(n,t);for(const n of kv.values())Ul(n,t);return!0}function Xn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _t(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},In=new Jn("app","Firebase",Nv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new St("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw In.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=Pv;function vf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Wo,automaticDataCollectionEnabled:!0},e),s=i.name;if(typeof s!="string"||!s)throw In.create("bad-app-name",{appName:String(s)});if(n||(n=lf()),!n)throw In.create("no-options");const o=ir.get(s);if(o){if(bn(n,o.options)&&bn(i,o.config))return o;throw In.create("duplicate-app",{appName:s})}const a=new Vy(s);for(const h of zo.values())a.addComponent(h);const l=new Dv(n,i,a);return ir.set(s,l),l}function Ea(t=Wo){const e=ir.get(t);if(!e&&t===Wo&&lf())return vf();if(!e)throw In.create("no-app",{appName:t});return e}function ut(t,e,n){var i;let s=(i=Ov[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${e}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),en.warn(l.join(" "));return}jt(new St(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const xv="firebase-heartbeat-database",Mv=1,cs="firebase-heartbeat-store";let yo=null;function wf(){return yo||(yo=yf(xv,Mv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(cs)}catch(n){console.warn(n)}}}}).catch(t=>{throw In.create("idb-open",{originalErrorMessage:t.message})})),yo}async function Lv(t){try{const n=(await wf()).transaction(cs),i=await n.objectStore(cs).get(If(t));return await n.done,i}catch(e){if(e instanceof At)en.warn(e.message);else{const n=In.create("idb-get",{originalErrorMessage:e?.message});en.warn(n.message)}}}async function Fl(t,e){try{const i=(await wf()).transaction(cs,"readwrite");await i.objectStore(cs).put(e,If(t)),await i.done}catch(n){if(n instanceof At)en.warn(n.message);else{const i=In.create("idb-set",{originalErrorMessage:n?.message});en.warn(i.message)}}}function If(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Uv=1024,Fv=30;class jv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $v(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=jl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Fv){const a=Bv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){en.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jl(),{heartbeatsToSend:i,unsentEntries:s}=Vv(this._heartbeatsCache.heartbeats),o=nr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return en.warn(n),""}}}function jl(){return new Date().toISOString().substring(0,10)}function Vv(t,e=Uv){const n=[];let i=t.slice();for(const s of t){const o=n.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Vl(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Vl(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class $v{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pf()?gf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Lv(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Vl(t){return nr(JSON.stringify({version:2,heartbeats:t})).length}function Bv(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(t){jt(new St("platform-logger",e=>new tv(e),"PRIVATE")),jt(new St("heartbeat",e=>new jv(e),"PRIVATE")),ut(Ho,Ll,t),ut(Ho,Ll,"esm2017"),ut("fire-js","")}Hv("");var Wv="firebase",zv="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ut(Wv,zv,"app");const bf="@firebase/installations",Ta="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=1e4,Tf=`w:${Ta}`,Sf="FIS_v2",Gv="https://firebaseinstallations.googleapis.com/v1",qv=60*60*1e3,Kv="installations",Jv="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Wn=new Jn(Kv,Jv,Xv);function Af(t){return t instanceof At&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf({projectId:t}){return`${Gv}/projects/${t}/installations`}function Rf(t){return{token:t.token,requestStatus:2,expiresIn:Qv(t.expiresIn),creationTime:Date.now()}}async function Pf(t,e){const i=(await e.json()).error;return Wn.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Of({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Yv(t,{refreshToken:e}){const n=Of(t);return n.append("Authorization",Zv(e)),n}async function kf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Qv(t){return Number(t.replace("s","000"))}function Zv(t){return`${Sf} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=Cf(t),s=Of(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:n,authVersion:Sf,appId:t.appId,sdkVersion:Tf},l={method:"POST",headers:s,body:JSON.stringify(a)},h=await kf(()=>fetch(i,l));if(h.ok){const d=await h.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Rf(d.authToken)}}else throw await Pf("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=/^[cdef][\w-]{21}$/,Go="";function i0(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=s0(t);return n0.test(n)?n:Go}catch{return Go}}function s0(t){return t0(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=new Map;function xf(t,e){const n=kr(t);Mf(n,e),r0(n,e)}function Mf(t,e){const n=Df.get(t);if(n)for(const i of n)i(e)}function r0(t,e){const n=o0();n&&n.postMessage({key:t,fid:e}),a0()}let Dn=null;function o0(){return!Dn&&"BroadcastChannel"in self&&(Dn=new BroadcastChannel("[Firebase] FID Change"),Dn.onmessage=t=>{Mf(t.data.key,t.data.fid)}),Dn}function a0(){Df.size===0&&Dn&&(Dn.close(),Dn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0="firebase-installations-database",l0=1,zn="firebase-installations-store";let vo=null;function Sa(){return vo||(vo=yf(c0,l0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zn)}}})),vo}async function sr(t,e){const n=kr(t),s=(await Sa()).transaction(zn,"readwrite"),o=s.objectStore(zn),a=await o.get(n);return await o.put(e,n),await s.done,(!a||a.fid!==e.fid)&&xf(t,e.fid),e}async function Lf(t){const e=kr(t),i=(await Sa()).transaction(zn,"readwrite");await i.objectStore(zn).delete(e),await i.done}async function Nr(t,e){const n=kr(t),s=(await Sa()).transaction(zn,"readwrite"),o=s.objectStore(zn),a=await o.get(n),l=e(a);return l===void 0?await o.delete(n):await o.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&xf(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(t){let e;const n=await Nr(t.appConfig,i=>{const s=u0(i),o=h0(t,s);return e=o.registrationPromise,o.installationEntry});return n.fid===Go?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function u0(t){const e=t||{fid:i0(),registrationStatus:0};return Uf(e)}function h0(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Wn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=f0(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:d0(t)}:{installationEntry:e}}async function f0(t,e){try{const n=await e0(t,e);return sr(t.appConfig,n)}catch(n){throw Af(n)&&n.customData.serverCode===409?await Lf(t.appConfig):await sr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function d0(t){let e=await $l(t.appConfig);for(;e.registrationStatus===1;)await Nf(100),e=await $l(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Aa(t);return i||n}return e}function $l(t){return Nr(t,e=>{if(!e)throw Wn.create("installation-not-found");return Uf(e)})}function Uf(t){return p0(t)?{fid:t.fid,registrationStatus:0}:t}function p0(t){return t.registrationStatus===1&&t.registrationTime+Ef<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g0({appConfig:t,heartbeatServiceProvider:e},n){const i=m0(t,n),s=Yv(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:Tf,appId:t.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},h=await kf(()=>fetch(i,l));if(h.ok){const d=await h.json();return Rf(d)}else throw await Pf("Generate Auth Token",h)}function m0(t,{fid:e}){return`${Cf(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ca(t,e=!1){let n;const i=await Nr(t.appConfig,o=>{if(!Ff(o))throw Wn.create("not-registered");const a=o.authToken;if(!e&&v0(a))return o;if(a.requestStatus===1)return n=_0(t,e),o;{if(!navigator.onLine)throw Wn.create("app-offline");const l=I0(o);return n=y0(t,l),l}});return n?await n:i.authToken}async function _0(t,e){let n=await Bl(t.appConfig);for(;n.authToken.requestStatus===1;)await Nf(100),n=await Bl(t.appConfig);const i=n.authToken;return i.requestStatus===0?Ca(t,e):i}function Bl(t){return Nr(t,e=>{if(!Ff(e))throw Wn.create("not-registered");const n=e.authToken;return b0(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function y0(t,e){try{const n=await g0(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await sr(t.appConfig,i),n}catch(n){if(Af(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Lf(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await sr(t.appConfig,i)}throw n}}function Ff(t){return t!==void 0&&t.registrationStatus===2}function v0(t){return t.requestStatus===2&&!w0(t)}function w0(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+qv}function I0(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function b0(t){return t.requestStatus===1&&t.requestTime+Ef<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E0(t){const e=t,{installationEntry:n,registrationPromise:i}=await Aa(e);return i?i.catch(console.error):Ca(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T0(t,e=!1){const n=t;return await S0(n),(await Ca(n,e)).token}async function S0(t){const{registrationPromise:e}=await Aa(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(t){if(!t||!t.options)throw wo("App Configuration");if(!t.name)throw wo("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw wo(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function wo(t){return Wn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="installations",C0="installations-internal",R0=t=>{const e=t.getProvider("app").getImmediate(),n=A0(e),i=Xn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},P0=t=>{const e=t.getProvider("app").getImmediate(),n=Xn(e,jf).getImmediate();return{getId:()=>E0(n),getToken:s=>T0(n,s)}};function O0(){jt(new St(jf,R0,"PUBLIC")),jt(new St(C0,P0,"PRIVATE"))}O0();ut(bf,Ta);ut(bf,Ta,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="analytics",k0="firebase_id",N0="origin",D0=60*1e3,x0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ra="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new Or("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},it=new Jn("analytics","Analytics",M0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(t){if(!t.startsWith(Ra)){const e=it.create("invalid-gtag-resource",{gtagURL:t});return Ze.warn(e.message),""}return t}function Vf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function U0(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function F0(t,e){const n=U0("firebase-js-sdk-policy",{createScriptURL:L0}),i=document.createElement("script"),s=`${Ra}?l=${t}&id=${e}`;i.src=n?n?.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function j0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function V0(t,e,n,i,s,o){const a=i[s];try{if(a)await e[a];else{const h=(await Vf(n)).find(d=>d.measurementId===s);h&&await e[h.appId]}}catch(l){Ze.error(l)}t("config",s,o)}async function $0(t,e,n,i,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Vf(n);for(const h of a){const d=l.find(m=>m.measurementId===h),p=d&&e[d.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",i,s||{})}catch(o){Ze.error(o)}}function B0(t,e,n,i){async function s(o,...a){try{if(o==="event"){const[l,h]=a;await $0(t,e,n,l,h)}else if(o==="config"){const[l,h]=a;await V0(t,e,n,i,l,h)}else if(o==="consent"){const[l,h]=a;t("consent",l,h)}else if(o==="get"){const[l,h,d]=a;t("get",l,h,d)}else if(o==="set"){const[l]=a;t("set",l)}else t(o,...a)}catch(l){Ze.error(l)}}return s}function H0(t,e,n,i,s){let o=function(...a){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=B0(o,t,e,n),{gtagCore:o,wrappedGtag:window[s]}}function W0(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ra)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=30,G0=1e3;class q0{constructor(e={},n=G0){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $f=new q0;function K0(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function J0(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:K0(i)},o=x0.replace("{app-id}",n),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let l="";try{const h=await a.json();!((e=h.error)===null||e===void 0)&&e.message&&(l=h.error.message)}catch{}throw it.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function X0(t,e=$f,n){const{appId:i,apiKey:s,measurementId:o}=t.options;if(!i)throw it.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:i};throw it.create("no-api-key")}const a=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Z0;return setTimeout(async()=>{l.abort()},D0),Bf({appId:i,apiKey:s,measurementId:o},a,l,e)}async function Bf(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=$f){var o;const{appId:a,measurementId:l}=t;try{await Y0(i,e)}catch(h){if(l)return Ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h?.message}]`),{appId:a,measurementId:l};throw h}try{const h=await J0(t);return s.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!Q0(d)){if(s.deleteThrottleMetadata(a),l)return Ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d?.message}]`),{appId:a,measurementId:l};throw h}const p=Number((o=d?.customData)===null||o===void 0?void 0:o.httpStatus)===503?Nl(n,s.intervalMillis,z0):Nl(n,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return s.setThrottleMetadata(a,m),Ze.debug(`Calling attemptFetch again in ${p} millis`),Bf(t,m,i,s)}}function Y0(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),o=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(o),i(it.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Q0(t){if(!(t instanceof At)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Z0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ew(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const o=await e,a=Object.assign(Object.assign({},i),{send_to:o});t("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tw(){if(pf())try{await gf()}catch(t){return Ze.warn(it.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Ze.warn(it.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function nw(t,e,n,i,s,o,a){var l;const h=X0(t);h.then(S=>{n[S.measurementId]=S.appId,t.options.measurementId&&S.measurementId!==t.options.measurementId&&Ze.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>Ze.error(S)),e.push(h);const d=tw().then(S=>{if(S)return i.getId()}),[p,m]=await Promise.all([h,d]);W0(o)||F0(o,p.measurementId),s("js",new Date);const y=(l=a?.config)!==null&&l!==void 0?l:{};return y[N0]="firebase",y.update=!0,m!=null&&(y[k0]=m),s("config",p.measurementId,y),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.app=e}_delete(){return delete Xi[this.app.options.appId],Promise.resolve()}}let Xi={},Hl=[];const Wl={};let Io="dataLayer",sw="gtag",zl,Hf,Gl=!1;function rw(){const t=[];if(df()&&t.push("This is a browser extension environment."),Sy()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=it.create("invalid-analytics-context",{errorInfo:e});Ze.warn(n.message)}}function ow(t,e,n){rw();const i=t.options.appId;if(!i)throw it.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw it.create("no-api-key");if(Xi[i]!=null)throw it.create("already-exists",{id:i});if(!Gl){j0(Io);const{wrappedGtag:o,gtagCore:a}=H0(Xi,Hl,Wl,Io,sw);Hf=o,zl=a,Gl=!0}return Xi[i]=nw(t,Hl,Wl,e,zl,Io,n),new iw(t)}function aw(t=Ea()){t=Tn(t);const e=Xn(t,rr);return e.isInitialized()?e.getImmediate():cw(t)}function cw(t,e={}){const n=Xn(t,rr);if(n.isInitialized()){const s=n.getImmediate();if(bn(e,n.getOptions()))return s;throw it.create("already-initialized")}return n.initialize({options:e})}function lw(t,e,n,i){t=Tn(t),ew(Hf,Xi[t.app.options.appId],e,n,i).catch(s=>Ze.error(s))}const ql="@firebase/analytics",Kl="0.10.17";function uw(){jt(new St(rr,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return ow(i,s,n)},"PUBLIC")),jt(new St("analytics-internal",t,"PRIVATE")),ut(ql,Kl),ut(ql,Kl,"esm2017");function t(e){try{const n=e.getProvider(rr).getImmediate();return{logEvent:(i,s,o)=>lw(n,i,s,o)}}catch(n){throw it.create("interop-component-reg-failed",{reason:n})}}}uw();function Pa(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Wf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hw=Wf,zf=new Jn("auth","Firebase",Wf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new Or("@firebase/auth");function fw(t,...e){or.logLevel<=we.WARN&&or.warn(`Auth (${wi}): ${t}`,...e)}function zs(t,...e){or.logLevel<=we.ERROR&&or.error(`Auth (${wi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,...e){throw ka(t,...e)}function bt(t,...e){return ka(t,...e)}function Oa(t,e,n){const i=Object.assign(Object.assign({},hw()),{[e]:n});return new Jn("auth","Firebase",i).create(e,{appName:t.name})}function Fn(t){return Oa(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dw(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Vt(t,"argument-error"),Oa(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ka(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return zf.create(t,...e)}function ee(t,e,...n){if(!t)throw ka(e,...n)}function Xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zs(e),new Error(e)}function tn(t,e){t||Xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pw(){return Jl()==="http:"||Jl()==="https:"}function Jl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pw()||df()||"connection"in navigator)?navigator.onLine:!0}function mw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=Iy()||Ey()}get(){return gw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vw=new gs(3e4,6e4);function Da(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ii(t,e,n,i,s={}){return qf(t,s,async()=>{let o={},a={};i&&(e==="GET"?a=i:o={body:JSON.stringify(i)});const l=ps(Object.assign({key:t.config.apiKey},a)).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:h},o);return by()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&ds(t.emulatorConfig.host)&&(d.credentials="include"),Gf.fetch()(await Kf(t,t.config.apiHost,n,l),d)})}async function qf(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},_w),e);try{const s=new Iw(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Fs(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[h,d]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fs(t,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Fs(t,"email-already-in-use",a);if(h==="USER_DISABLED")throw Fs(t,"user-disabled",a);const p=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Oa(t,p,d);Vt(t,p)}}catch(s){if(s instanceof At)throw s;Vt(t,"network-request-failed",{message:String(s)})}}async function ww(t,e,n,i,s={}){const o=await Ii(t,e,n,i,s);return"mfaPendingCredential"in o&&Vt(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function Kf(t,e,n,i){const s=`${e}${n}?${i}`,o=t,a=o.config.emulator?Na(t.config,s):`${t.config.apiScheme}://${s}`;return yw.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class Iw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(bt(this.auth,"network-request-failed")),vw.get())})}}function Fs(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=bt(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bw(t,e){return Ii(t,"POST","/v1/accounts:delete",e)}async function ar(t,e){return Ii(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ew(t,e=!1){const n=Tn(t),i=await n.getIdToken(e),s=xa(i);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o?.sign_in_provider;return{claims:s,token:i,authTime:Yi(bo(s.auth_time)),issuedAtTime:Yi(bo(s.iat)),expirationTime:Yi(bo(s.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function bo(t){return Number(t)*1e3}function xa(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return zs("JWT malformed, contained fewer than 3 sections"),null;try{const s=af(n);return s?JSON.parse(s):(zs("Failed to decode base64 JWT payload"),null)}catch(s){return zs("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Xl(t){const e=xa(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof At&&Tw(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Tw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yi(this.lastLoginAt),this.creationTime=Yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(t){var e;const n=t.auth,i=await t.getIdToken(),s=await ls(t,ar(n,{idToken:i}));ee(s?.users.length,n,"internal-error");const o=s.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Jf(o.providerUserInfo):[],l=Cw(t.providerData,a),h=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!l?.length,p=h?d:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Ko(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function Aw(t){const e=Tn(t);await cr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cw(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Jf(t){return t.map(e=>{var{providerId:n}=e,i=Pa(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(t,e){const n=await qf(t,{},async()=>{const i=ps({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,a=await Kf(t,s,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:l,body:i};return t.emulatorConfig&&ds(t.emulatorConfig.host)&&(h.credentials="include"),Gf.fetch()(a,h)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Pw(t,e){return Ii(t,"POST","/v2/accounts:revokeToken",Da(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Xl(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:o}=await Rw(e,n);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:o}=n,a=new li;return i&&(ee(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(ee(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(ee(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yt{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,o=Pa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ko(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await ls(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ew(this,e)}reload(){return Aw(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await cr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_t(this.auth.app))return Promise.reject(Fn(this.auth));const e=await this.getIdToken();return await ls(this,bw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,o,a,l,h,d,p;const m=(i=n.displayName)!==null&&i!==void 0?i:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,S=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,x=(a=n.photoURL)!==null&&a!==void 0?a:void 0,L=(l=n.tenantId)!==null&&l!==void 0?l:void 0,G=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,K=(d=n.createdAt)!==null&&d!==void 0?d:void 0,V=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:W,emailVerified:z,isAnonymous:ae,providerData:pe,stsTokenManager:b}=n;ee(W&&b,e,"internal-error");const _=li.fromJSON(this.name,b);ee(typeof W=="string",e,"internal-error"),un(m,e.name),un(y,e.name),ee(typeof z=="boolean",e,"internal-error"),ee(typeof ae=="boolean",e,"internal-error"),un(S,e.name),un(x,e.name),un(L,e.name),un(G,e.name),un(K,e.name),un(V,e.name);const I=new yt({uid:W,auth:e,email:y,emailVerified:z,displayName:m,isAnonymous:ae,photoURL:x,phoneNumber:S,tenantId:L,stsTokenManager:_,createdAt:K,lastLoginAt:V});return pe&&Array.isArray(pe)&&(I.providerData=pe.map(E=>Object.assign({},E))),G&&(I._redirectEventId=G),I}static async _fromIdTokenResponse(e,n,i=!1){const s=new li;s.updateFromServerResponse(n);const o=new yt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await cr(o),o}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];ee(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Jf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!o?.length,l=new li;l.updateFromIdToken(i);const h=new yt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ko(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!o?.length};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=new Map;function Yt(t){tn(t instanceof Function,"Expected a class definition");let e=Yl.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yl.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xf.type="NONE";const Ql=Xf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t,e,n){return`firebase:${t}:${e}:${n}`}class ui{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:o}=this.auth;this.fullUserKey=Gs(this.userKey,s.apiKey,o),this.fullPersistenceKey=Gs("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ar(this.auth,{idToken:e}).catch(()=>{});return n?yt._fromGetAccountInfoResponse(this.auth,n,e):null}return yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ui(Yt(Ql),e,i);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||Yt(Ql);const a=Gs(i,e.config.apiKey,e.name);let l=null;for(const d of n)try{const p=await d._get(a);if(p){let m;if(typeof p=="string"){const y=await ar(e,{idToken:p}).catch(()=>{});if(!y)break;m=await yt._fromGetAccountInfoResponse(e,y,p)}else m=yt._fromJSON(e,p);d!==o&&(l=m),o=d;break}}catch{}const h=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new ui(o,e,i):(o=h[0],l&&await o._set(a,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new ui(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ed(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nd(e))return"Blackberry";if(id(e))return"Webos";if(Qf(e))return"Safari";if((e.includes("chrome/")||Zf(e))&&!e.includes("edge/"))return"Chrome";if(td(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if(i?.length===2)return i[1]}return"Other"}function Yf(t=Xe()){return/firefox\//i.test(t)}function Qf(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zf(t=Xe()){return/crios\//i.test(t)}function ed(t=Xe()){return/iemobile/i.test(t)}function td(t=Xe()){return/android/i.test(t)}function nd(t=Xe()){return/blackberry/i.test(t)}function id(t=Xe()){return/webos/i.test(t)}function Ma(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ow(t=Xe()){var e;return Ma(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kw(){return Ty()&&document.documentMode===10}function sd(t=Xe()){return Ma(t)||td(t)||id(t)||nd(t)||/windows phone/i.test(t)||ed(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t,e=[]){let n;switch(t){case"Browser":n=Zl(Xe());break;case"Worker":n=`${Zl(Xe())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wi}/${i}`}/**
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
 */class Nw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=o=>new Promise((a,l)=>{try{const h=e(o);a(h)}catch(h){l(h)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function Dw(t,e={}){return Ii(t,"GET","/v2/passwordPolicy",Da(t,e))}/**
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
 */const xw=6;class Mw{constructor(e){var n,i,s,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:xw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,o,a,l;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(i=h.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(s=h.containsLowercaseLetter)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(l=h.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),h}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eu(this),this.idTokenSubscription=new eu(this),this.beforeStateQueue=new Nw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var i,s,o;if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ar(this,{idToken:e}),i=await yt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(_t(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s?._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===l)&&h?.user&&(s=h.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cr(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_t(this.app))return Promise.reject(Fn(this));const n=e?Tn(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _t(this.app)?Promise.reject(Fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _t(this.app)?Promise.reject(Fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Dw(this),n=new Mw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Jn("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Pw(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,i,s);return()=>{a=!0,h()}}else{const h=e.addObserver(n);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(_t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&fw(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Dr(t){return Tn(t)}class eu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Oy(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Uw(t){La=t}function Fw(t){return La.loadJS(t)}function jw(){return La.gapiScript}function Vw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(t,e){const n=Xn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(bn(o,e??{}))return s;Vt(s,"already-initialized")}return n.initialize({options:e})}function Bw(t,e){const n=e?.persistence||[],i=(Array.isArray(n)?n:[n]).map(Yt);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e?.popupRedirectResolver)}function Hw(t,e,n){const i=Dr(t);ee(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,o=od(e),{host:a,port:l}=Ww(e),h=l===null?"":`:${l}`,d={url:`${o}//${a}${h}/`},p=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){ee(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ee(bn(d,i.config.emulator)&&bn(p,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=d,i.emulatorConfig=p,i.settings.appVerificationDisabledForTesting=!0,ds(a)?(hf(`${o}//${a}${h}`),ff("Auth",!0)):zw()}function od(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ww(t){const e=od(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const o=s[1];return{host:o,port:tu(i.substr(o.length+1))}}else{const[o,a]=i.split(":");return{host:o,port:tu(a)}}}function tu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,n){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(t,e){return ww(t,"POST","/v1/accounts:signInWithIdp",Da(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw="http://localhost";class Gn extends ad{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,o=Pa(n,["providerId","signInMethod"]);if(!i||!s)return null;const a=new Gn(i,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return hi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,hi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hi(e,n)}buildRequest(){const e={requestUri:Gw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ps(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends Ua{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends ms{constructor(){super("facebook.com")}static credential(e){return Gn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Kt.credential(n,i)}catch{return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com";Kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends ms{constructor(){super("github.com")}static credential(e){return Gn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.GITHUB_SIGN_IN_METHOD="github.com";_n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends ms{constructor(){super("twitter.com")}static credential(e,n){return Gn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return yn.credential(n,i)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const o=await yt._fromIdTokenResponse(e,i,s),a=nu(i);return new _i({user:o,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=nu(i);return new _i({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function nu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends At{constructor(e,n,i,s){var o;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,lr.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new lr(e,n,i,s)}}function cd(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?lr._fromErrorAndOperation(t,o,e,i):o})}async function qw(t,e,n=!1){const i=await ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _i._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kw(t,e,n=!1){const{auth:i}=t;if(_t(i.app))return Promise.reject(Fn(i));const s="reauthenticate";try{const o=await ls(t,cd(i,s,e,t),n);ee(o.idToken,i,"internal-error");const a=xa(o.idToken);ee(a,i,"internal-error");const{sub:l}=a;return ee(t.uid===l,i,"user-mismatch"),_i._forOperation(t,s,o)}catch(o){throw o?.code==="auth/user-not-found"&&Vt(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(t,e,n=!1){if(_t(t.app))return Promise.reject(Fn(t));const i="signIn",s=await cd(t,i,e),o=await _i._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(o.user),o}function Xw(t,e,n,i){return Tn(t).onIdTokenChanged(e,n,i)}function Yw(t,e,n){return Tn(t).beforeAuthStateChanged(e,n)}const ur="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ur,"1"),this.storage.removeItem(ur),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=1e3,Zw=10;class ud extends ld{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},o=this.storage.getItem(i);kw()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Zw):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Qw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ud.type="LOCAL";const eI=ud;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd extends ld{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hd.type="SESSION";const fd=hd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new xr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:o}=n.data,a=this.handlersMap[s];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(a).map(async d=>d(n.origin,o)),h=await tI(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((l,h)=>{const d=Fa("",20);s.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(m){const y=m;if(y.data.eventId===d)switch(y.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(y.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return window}function iI(t){Ut().location.href=t}/**
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
 */function dd(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function sI(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rI(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oI(){return dd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="firebaseLocalStorageDb",aI=1,hr="firebaseLocalStorage",gd="fbase_key";class _s{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mr(t,e){return t.transaction([hr],e?"readwrite":"readonly").objectStore(hr)}function cI(){const t=indexedDB.deleteDatabase(pd);return new _s(t).toPromise()}function Jo(){const t=indexedDB.open(pd,aI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(hr,{keyPath:gd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(hr)?e(i):(i.close(),await cI(),e(await Jo()))})})}async function iu(t,e,n){const i=Mr(t,!0).put({[gd]:e,value:n});return new _s(i).toPromise()}async function lI(t,e){const n=Mr(t,!1).get(e),i=await new _s(n).toPromise();return i===void 0?null:i.value}function su(t,e){const n=Mr(t,!0).delete(e);return new _s(n).toPromise()}const uI=800,hI=3;class md{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>hI)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xr._getInstance(oI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sI(),!this.activeServiceWorker)return;this.sender=new nI(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jo();return await iu(e,ur,"1"),await su(e,ur),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>iu(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>lI(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>su(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Mr(s,!1).getAll();return new _s(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}md.type="LOCAL";const fI=md;new gs(3e4,6e4);/**
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
 */function _d(t,e){return e?Yt(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja extends ad{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dI(t){return Jw(t.auth,new ja(t),t.bypassAuthState)}function pI(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),Kw(n,new ja(t),t.bypassAuthState)}async function gI(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),qw(n,new ja(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,n,i,s,o=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:n,sessionId:i,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dI;case"linkViaPopup":case"linkViaRedirect":return gI;case"reauthViaPopup":case"reauthViaRedirect":return pI;default:Vt(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=new gs(2e3,1e4);async function _I(t,e,n){if(_t(t.app))return Promise.reject(bt(t,"operation-not-supported-in-this-environment"));const i=Dr(t);dw(t,e,Ua);const s=_d(i,n);return new xn(i,"signInViaPopup",e,s).executeNotNull()}class xn extends yd{constructor(e,n,i,s,o){super(e,n,s,o),this.provider=i,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=Fa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mI.get())};e()}}xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="pendingRedirect",qs=new Map;class vI extends yd{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=qs.get(this.auth._key());if(!e){try{const i=await wI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}qs.set(this.auth._key(),e)}return this.bypassAuthState||qs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wI(t,e){const n=EI(e),i=bI(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function II(t,e){qs.set(t._key(),e)}function bI(t){return Yt(t._redirectPersistence)}function EI(t){return Gs(yI,t.config.apiKey,t.name)}async function TI(t,e,n=!1){if(_t(t.app))return Promise.reject(Fn(t));const i=Dr(t),s=_d(i,e),a=await new vI(i,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=10*60*1e3;class AI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!vd(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(bt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SI&&this.cachedEventUids.clear(),this.cachedEventUids.has(ru(e))}saveEventToCache(e){this.cachedEventUids.add(ru(e)),this.lastProcessedEventTime=Date.now()}}function ru(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vd({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function CI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI(t,e={}){return Ii(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OI=/^https?/;async function kI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RI(t);for(const n of e)try{if(NI(n))return}catch{}Vt(t,"unauthorized-domain")}function NI(t){const e=qo(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!OI.test(n))return!1;if(PI.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const DI=new gs(3e4,6e4);function ou(){const t=Ut().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xI(t){return new Promise((e,n)=>{var i,s,o;function a(){ou(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ou(),n(bt(t,"network-request-failed"))},timeout:DI.get()})}if(!((s=(i=Ut().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=Ut().gapi)===null||o===void 0)&&o.load)a();else{const l=Vw("iframefcb");return Ut()[l]=()=>{gapi.load?a():n(bt(t,"network-request-failed"))},Fw(`${jw()}?onload=${l}`).catch(h=>n(h))}}).catch(e=>{throw Ks=null,e})}let Ks=null;function MI(t){return Ks=Ks||xI(t),Ks}/**
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
 */const LI=new gs(5e3,15e3),UI="__/auth/iframe",FI="emulator/auth/iframe",jI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $I(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Na(e,FI):`https://${t.config.authDomain}/${UI}`,i={apiKey:e.apiKey,appName:t.name,v:wi},s=VI.get(t.config.apiHost);s&&(i.eid=s);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${ps(i).slice(1)}`}async function BI(t){const e=await MI(t),n=Ut().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:$I(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jI,dontclear:!0},i=>new Promise(async(s,o)=>{await i.restyle({setHideOnLeave:!1});const a=bt(t,"network-request-failed"),l=Ut().setTimeout(()=>{o(a)},LI.get());function h(){Ut().clearTimeout(l),s(i)}i.ping(h).then(h,()=>{o(a)})}))}/**
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
 */const HI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WI=500,zI=600,GI="_blank",qI="http://localhost";class au{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KI(t,e,n,i=WI,s=zI){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const h=Object.assign(Object.assign({},HI),{width:i.toString(),height:s.toString(),top:o,left:a}),d=Xe().toLowerCase();n&&(l=Zf(d)?GI:n),Yf(d)&&(e=e||qI,h.scrollbars="yes");const p=Object.entries(h).reduce((y,[S,x])=>`${y}${S}=${x},`,"");if(Ow(d)&&l!=="_self")return JI(e||"",l),new au(null);const m=window.open(e||"",l,p);ee(m,t,"popup-blocked");try{m.focus()}catch{}return new au(m)}function JI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const XI="__/auth/handler",YI="emulator/auth/handler",QI=encodeURIComponent("fac");async function cu(t,e,n,i,s,o){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:wi,eventId:s};if(e instanceof Ua){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Py(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))a[p]=m}if(e instanceof ms){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const h=await t._getAppCheckToken(),d=h?`#${QI}=${encodeURIComponent(h)}`:"";return`${ZI(t)}?${ps(l).slice(1)}${d}`}function ZI({config:t}){return t.emulator?Na(t,YI):`https://${t.authDomain}/${XI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo="webStorageSupport";class eb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fd,this._completeRedirectFn=TI,this._overrideRedirectResult=II}async _openPopup(e,n,i,s){var o;tn((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await cu(e,n,i,qo(),s);return KI(e,a,Fa())}async _openRedirect(e,n,i,s){await this._originValidation(e);const o=await cu(e,n,i,qo(),s);return iI(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(tn(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await BI(e),i=new AI(e);return n.register("authEvent",s=>(ee(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Eo,{type:Eo},s=>{var o;const a=(o=s?.[0])===null||o===void 0?void 0:o[Eo];a!==void 0&&n(!!a),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sd()||Qf()||Ma()}}const tb=eb;var lu="@firebase/auth",uu="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sb(t){jt(new St("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=i.options;ee(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const h={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rd(t)},d=new Lw(i,s,o,h);return Bw(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),jt(new St("auth-internal",e=>{const n=Dr(e.getProvider("auth").getImmediate());return(i=>new nb(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ut(lu,uu,ib(t)),ut(lu,uu,"esm2017")}/**
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
 */const rb=5*60,ob=uf("authIdTokenMaxAge")||rb;let hu=null;const ab=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>ob)return;const s=n?.token;hu!==s&&(hu=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function cb(t=Ea()){const e=Xn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$w(t,{popupRedirectResolver:tb,persistence:[fI,eI,fd]}),i=uf("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const a=ab(o.toString());Yw(n,a,()=>a(n.currentUser)),Xw(n,l=>a(l))}}const s=cf("auth");return s&&Hw(n,`http://${s}`),n}function lb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Uw({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const o=bt("internal-error");o.customData=s,n(o)},i.type="text/javascript",i.charset="UTF-8",lb().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sb("Browser");var fu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Va;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,_){function I(){}I.prototype=_.prototype,b.D=_.prototype,b.prototype=new I,b.prototype.constructor=b,b.C=function(E,T,C){for(var w=Array(arguments.length-2),We=2;We<arguments.length;We++)w[We-2]=arguments[We];return _.prototype[T].apply(E,w)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,_,I){I||(I=0);var E=Array(16);if(typeof _=="string")for(var T=0;16>T;++T)E[T]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(T=0;16>T;++T)E[T]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=b.g[0],I=b.g[1],T=b.g[2];var C=b.g[3],w=_+(C^I&(T^C))+E[0]+3614090360&4294967295;_=I+(w<<7&4294967295|w>>>25),w=C+(T^_&(I^T))+E[1]+3905402710&4294967295,C=_+(w<<12&4294967295|w>>>20),w=T+(I^C&(_^I))+E[2]+606105819&4294967295,T=C+(w<<17&4294967295|w>>>15),w=I+(_^T&(C^_))+E[3]+3250441966&4294967295,I=T+(w<<22&4294967295|w>>>10),w=_+(C^I&(T^C))+E[4]+4118548399&4294967295,_=I+(w<<7&4294967295|w>>>25),w=C+(T^_&(I^T))+E[5]+1200080426&4294967295,C=_+(w<<12&4294967295|w>>>20),w=T+(I^C&(_^I))+E[6]+2821735955&4294967295,T=C+(w<<17&4294967295|w>>>15),w=I+(_^T&(C^_))+E[7]+4249261313&4294967295,I=T+(w<<22&4294967295|w>>>10),w=_+(C^I&(T^C))+E[8]+1770035416&4294967295,_=I+(w<<7&4294967295|w>>>25),w=C+(T^_&(I^T))+E[9]+2336552879&4294967295,C=_+(w<<12&4294967295|w>>>20),w=T+(I^C&(_^I))+E[10]+4294925233&4294967295,T=C+(w<<17&4294967295|w>>>15),w=I+(_^T&(C^_))+E[11]+2304563134&4294967295,I=T+(w<<22&4294967295|w>>>10),w=_+(C^I&(T^C))+E[12]+1804603682&4294967295,_=I+(w<<7&4294967295|w>>>25),w=C+(T^_&(I^T))+E[13]+4254626195&4294967295,C=_+(w<<12&4294967295|w>>>20),w=T+(I^C&(_^I))+E[14]+2792965006&4294967295,T=C+(w<<17&4294967295|w>>>15),w=I+(_^T&(C^_))+E[15]+1236535329&4294967295,I=T+(w<<22&4294967295|w>>>10),w=_+(T^C&(I^T))+E[1]+4129170786&4294967295,_=I+(w<<5&4294967295|w>>>27),w=C+(I^T&(_^I))+E[6]+3225465664&4294967295,C=_+(w<<9&4294967295|w>>>23),w=T+(_^I&(C^_))+E[11]+643717713&4294967295,T=C+(w<<14&4294967295|w>>>18),w=I+(C^_&(T^C))+E[0]+3921069994&4294967295,I=T+(w<<20&4294967295|w>>>12),w=_+(T^C&(I^T))+E[5]+3593408605&4294967295,_=I+(w<<5&4294967295|w>>>27),w=C+(I^T&(_^I))+E[10]+38016083&4294967295,C=_+(w<<9&4294967295|w>>>23),w=T+(_^I&(C^_))+E[15]+3634488961&4294967295,T=C+(w<<14&4294967295|w>>>18),w=I+(C^_&(T^C))+E[4]+3889429448&4294967295,I=T+(w<<20&4294967295|w>>>12),w=_+(T^C&(I^T))+E[9]+568446438&4294967295,_=I+(w<<5&4294967295|w>>>27),w=C+(I^T&(_^I))+E[14]+3275163606&4294967295,C=_+(w<<9&4294967295|w>>>23),w=T+(_^I&(C^_))+E[3]+4107603335&4294967295,T=C+(w<<14&4294967295|w>>>18),w=I+(C^_&(T^C))+E[8]+1163531501&4294967295,I=T+(w<<20&4294967295|w>>>12),w=_+(T^C&(I^T))+E[13]+2850285829&4294967295,_=I+(w<<5&4294967295|w>>>27),w=C+(I^T&(_^I))+E[2]+4243563512&4294967295,C=_+(w<<9&4294967295|w>>>23),w=T+(_^I&(C^_))+E[7]+1735328473&4294967295,T=C+(w<<14&4294967295|w>>>18),w=I+(C^_&(T^C))+E[12]+2368359562&4294967295,I=T+(w<<20&4294967295|w>>>12),w=_+(I^T^C)+E[5]+4294588738&4294967295,_=I+(w<<4&4294967295|w>>>28),w=C+(_^I^T)+E[8]+2272392833&4294967295,C=_+(w<<11&4294967295|w>>>21),w=T+(C^_^I)+E[11]+1839030562&4294967295,T=C+(w<<16&4294967295|w>>>16),w=I+(T^C^_)+E[14]+4259657740&4294967295,I=T+(w<<23&4294967295|w>>>9),w=_+(I^T^C)+E[1]+2763975236&4294967295,_=I+(w<<4&4294967295|w>>>28),w=C+(_^I^T)+E[4]+1272893353&4294967295,C=_+(w<<11&4294967295|w>>>21),w=T+(C^_^I)+E[7]+4139469664&4294967295,T=C+(w<<16&4294967295|w>>>16),w=I+(T^C^_)+E[10]+3200236656&4294967295,I=T+(w<<23&4294967295|w>>>9),w=_+(I^T^C)+E[13]+681279174&4294967295,_=I+(w<<4&4294967295|w>>>28),w=C+(_^I^T)+E[0]+3936430074&4294967295,C=_+(w<<11&4294967295|w>>>21),w=T+(C^_^I)+E[3]+3572445317&4294967295,T=C+(w<<16&4294967295|w>>>16),w=I+(T^C^_)+E[6]+76029189&4294967295,I=T+(w<<23&4294967295|w>>>9),w=_+(I^T^C)+E[9]+3654602809&4294967295,_=I+(w<<4&4294967295|w>>>28),w=C+(_^I^T)+E[12]+3873151461&4294967295,C=_+(w<<11&4294967295|w>>>21),w=T+(C^_^I)+E[15]+530742520&4294967295,T=C+(w<<16&4294967295|w>>>16),w=I+(T^C^_)+E[2]+3299628645&4294967295,I=T+(w<<23&4294967295|w>>>9),w=_+(T^(I|~C))+E[0]+4096336452&4294967295,_=I+(w<<6&4294967295|w>>>26),w=C+(I^(_|~T))+E[7]+1126891415&4294967295,C=_+(w<<10&4294967295|w>>>22),w=T+(_^(C|~I))+E[14]+2878612391&4294967295,T=C+(w<<15&4294967295|w>>>17),w=I+(C^(T|~_))+E[5]+4237533241&4294967295,I=T+(w<<21&4294967295|w>>>11),w=_+(T^(I|~C))+E[12]+1700485571&4294967295,_=I+(w<<6&4294967295|w>>>26),w=C+(I^(_|~T))+E[3]+2399980690&4294967295,C=_+(w<<10&4294967295|w>>>22),w=T+(_^(C|~I))+E[10]+4293915773&4294967295,T=C+(w<<15&4294967295|w>>>17),w=I+(C^(T|~_))+E[1]+2240044497&4294967295,I=T+(w<<21&4294967295|w>>>11),w=_+(T^(I|~C))+E[8]+1873313359&4294967295,_=I+(w<<6&4294967295|w>>>26),w=C+(I^(_|~T))+E[15]+4264355552&4294967295,C=_+(w<<10&4294967295|w>>>22),w=T+(_^(C|~I))+E[6]+2734768916&4294967295,T=C+(w<<15&4294967295|w>>>17),w=I+(C^(T|~_))+E[13]+1309151649&4294967295,I=T+(w<<21&4294967295|w>>>11),w=_+(T^(I|~C))+E[4]+4149444226&4294967295,_=I+(w<<6&4294967295|w>>>26),w=C+(I^(_|~T))+E[11]+3174756917&4294967295,C=_+(w<<10&4294967295|w>>>22),w=T+(_^(C|~I))+E[2]+718787259&4294967295,T=C+(w<<15&4294967295|w>>>17),w=I+(C^(T|~_))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+_&4294967295,b.g[1]=b.g[1]+(T+(w<<21&4294967295|w>>>11))&4294967295,b.g[2]=b.g[2]+T&4294967295,b.g[3]=b.g[3]+C&4294967295}i.prototype.u=function(b,_){_===void 0&&(_=b.length);for(var I=_-this.blockSize,E=this.B,T=this.h,C=0;C<_;){if(T==0)for(;C<=I;)s(this,b,C),C+=this.blockSize;if(typeof b=="string"){for(;C<_;)if(E[T++]=b.charCodeAt(C++),T==this.blockSize){s(this,E),T=0;break}}else for(;C<_;)if(E[T++]=b[C++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=_},i.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var _=1;_<b.length-8;++_)b[_]=0;var I=8*this.o;for(_=b.length-8;_<b.length;++_)b[_]=I&255,I/=256;for(this.u(b),b=Array(16),_=I=0;4>_;++_)for(var E=0;32>E;E+=8)b[I++]=this.g[_]>>>E&255;return b};function o(b,_){var I=l;return Object.prototype.hasOwnProperty.call(I,b)?I[b]:I[b]=_(b)}function a(b,_){this.h=_;for(var I=[],E=!0,T=b.length-1;0<=T;T--){var C=b[T]|0;E&&C==_||(I[T]=C,E=!1)}this.g=I}var l={};function h(b){return-128<=b&&128>b?o(b,function(_){return new a([_|0],0>_?-1:0)}):new a([b|0],0>b?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return m;if(0>b)return G(d(-b));for(var _=[],I=1,E=0;b>=I;E++)_[E]=b/I|0,I*=4294967296;return new a(_,0)}function p(b,_){if(b.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(b.charAt(0)=="-")return G(p(b.substring(1),_));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=d(Math.pow(_,8)),E=m,T=0;T<b.length;T+=8){var C=Math.min(8,b.length-T),w=parseInt(b.substring(T,T+C),_);8>C?(C=d(Math.pow(_,C)),E=E.j(C).add(d(w))):(E=E.j(I),E=E.add(d(w)))}return E}var m=h(0),y=h(1),S=h(16777216);t=a.prototype,t.m=function(){if(L(this))return-G(this).m();for(var b=0,_=1,I=0;I<this.g.length;I++){var E=this.i(I);b+=(0<=E?E:4294967296+E)*_,_*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(x(this))return"0";if(L(this))return"-"+G(this).toString(b);for(var _=d(Math.pow(b,6)),I=this,E="";;){var T=z(I,_).g;I=K(I,T.j(_));var C=((0<I.g.length?I.g[0]:I.h)>>>0).toString(b);if(I=T,x(I))return C+E;for(;6>C.length;)C="0"+C;E=C+E}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function x(b){if(b.h!=0)return!1;for(var _=0;_<b.g.length;_++)if(b.g[_]!=0)return!1;return!0}function L(b){return b.h==-1}t.l=function(b){return b=K(this,b),L(b)?-1:x(b)?0:1};function G(b){for(var _=b.g.length,I=[],E=0;E<_;E++)I[E]=~b.g[E];return new a(I,~b.h).add(y)}t.abs=function(){return L(this)?G(this):this},t.add=function(b){for(var _=Math.max(this.g.length,b.g.length),I=[],E=0,T=0;T<=_;T++){var C=E+(this.i(T)&65535)+(b.i(T)&65535),w=(C>>>16)+(this.i(T)>>>16)+(b.i(T)>>>16);E=w>>>16,C&=65535,w&=65535,I[T]=w<<16|C}return new a(I,I[I.length-1]&-2147483648?-1:0)};function K(b,_){return b.add(G(_))}t.j=function(b){if(x(this)||x(b))return m;if(L(this))return L(b)?G(this).j(G(b)):G(G(this).j(b));if(L(b))return G(this.j(G(b)));if(0>this.l(S)&&0>b.l(S))return d(this.m()*b.m());for(var _=this.g.length+b.g.length,I=[],E=0;E<2*_;E++)I[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<b.g.length;T++){var C=this.i(E)>>>16,w=this.i(E)&65535,We=b.i(T)>>>16,st=b.i(T)&65535;I[2*E+2*T]+=w*st,V(I,2*E+2*T),I[2*E+2*T+1]+=C*st,V(I,2*E+2*T+1),I[2*E+2*T+1]+=w*We,V(I,2*E+2*T+1),I[2*E+2*T+2]+=C*We,V(I,2*E+2*T+2)}for(E=0;E<_;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=_;E<2*_;E++)I[E]=0;return new a(I,0)};function V(b,_){for(;(b[_]&65535)!=b[_];)b[_+1]+=b[_]>>>16,b[_]&=65535,_++}function W(b,_){this.g=b,this.h=_}function z(b,_){if(x(_))throw Error("division by zero");if(x(b))return new W(m,m);if(L(b))return _=z(G(b),_),new W(G(_.g),G(_.h));if(L(_))return _=z(b,G(_)),new W(G(_.g),_.h);if(30<b.g.length){if(L(b)||L(_))throw Error("slowDivide_ only works with positive integers.");for(var I=y,E=_;0>=E.l(b);)I=ae(I),E=ae(E);var T=pe(I,1),C=pe(E,1);for(E=pe(E,2),I=pe(I,2);!x(E);){var w=C.add(E);0>=w.l(b)&&(T=T.add(I),C=w),E=pe(E,1),I=pe(I,1)}return _=K(b,T.j(_)),new W(T,_)}for(T=m;0<=b.l(_);){for(I=Math.max(1,Math.floor(b.m()/_.m())),E=Math.ceil(Math.log(I)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),C=d(I),w=C.j(_);L(w)||0<w.l(b);)I-=E,C=d(I),w=C.j(_);x(C)&&(C=y),T=T.add(C),b=K(b,w)}return new W(T,b)}t.A=function(b){return z(this,b).h},t.and=function(b){for(var _=Math.max(this.g.length,b.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)&b.i(E);return new a(I,this.h&b.h)},t.or=function(b){for(var _=Math.max(this.g.length,b.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)|b.i(E);return new a(I,this.h|b.h)},t.xor=function(b){for(var _=Math.max(this.g.length,b.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)^b.i(E);return new a(I,this.h^b.h)};function ae(b){for(var _=b.g.length+1,I=[],E=0;E<_;E++)I[E]=b.i(E)<<1|b.i(E-1)>>>31;return new a(I,b.h)}function pe(b,_){var I=_>>5;_%=32;for(var E=b.g.length-I,T=[],C=0;C<E;C++)T[C]=0<_?b.i(C+I)>>>_|b.i(C+I+1)<<32-_:b.i(C+I);return new a(T,b.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Va=a}).apply(typeof fu<"u"?fu:typeof self<"u"?self:typeof window<"u"?window:{});var js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,c,u){return r==Array.prototype||r==Object.prototype||(r[c]=u.value),r};function n(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof js=="object"&&js];for(var c=0;c<r.length;++c){var u=r[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var i=n(this);function s(r,c){if(c)e:{var u=i;r=r.split(".");for(var f=0;f<r.length-1;f++){var R=r[f];if(!(R in u))break e;u=u[R]}r=r[r.length-1],f=u[r],c=c(f),c!=f&&c!=null&&e(u,r,{configurable:!0,writable:!0,value:c})}}function o(r,c){r instanceof String&&(r+="");var u=0,f=!1,R={next:function(){if(!f&&u<r.length){var P=u++;return{value:c(P,r[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(r){return r||function(){return o(this,function(c,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(r){var c=typeof r;return c=c!="object"?c:r?Array.isArray(r)?"array":c:"null",c=="array"||c=="object"&&typeof r.length=="number"}function d(r){var c=typeof r;return c=="object"&&r!=null||c=="function"}function p(r,c,u){return r.call.apply(r.bind,arguments)}function m(r,c,u){if(!r)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,f),r.apply(c,R)}}return function(){return r.apply(c,arguments)}}function y(r,c,u){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,y.apply(null,arguments)}function S(r,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),r.apply(this,f)}}function x(r,c){function u(){}u.prototype=c.prototype,r.aa=c.prototype,r.prototype=new u,r.prototype.constructor=r,r.Qb=function(f,R,P){for(var j=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)j[Ie-2]=arguments[Ie];return c.prototype[R].apply(f,j)}}function L(r){const c=r.length;if(0<c){const u=Array(c);for(let f=0;f<c;f++)u[f]=r[f];return u}return[]}function G(r,c){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const R=r.length||0,P=f.length||0;r.length=R+P;for(let j=0;j<P;j++)r[R+j]=f[j]}else r.push(f)}}class K{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function V(r){return/^[\s\xa0]*$/.test(r)}function W(){var r=l.navigator;return r&&(r=r.userAgent)?r:""}function z(r){return z[" "](r),r}z[" "]=function(){};var ae=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function pe(r,c,u){for(const f in r)c.call(u,r[f],f,r)}function b(r,c){for(const u in r)c.call(void 0,r[u],u,r)}function _(r){const c={};for(const u in r)c[u]=r[u];return c}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(r,c){let u,f;for(let R=1;R<arguments.length;R++){f=arguments[R];for(u in f)r[u]=f[u];for(let P=0;P<I.length;P++)u=I[P],Object.prototype.hasOwnProperty.call(f,u)&&(r[u]=f[u])}}function T(r){var c=1;r=r.split(":");const u=[];for(;0<c&&r.length;)u.push(r.shift()),c--;return r.length&&u.push(r.join(":")),u}function C(r){l.setTimeout(()=>{throw r},0)}function w(){var r=et;let c=null;return r.g&&(c=r.g,r.g=r.g.next,r.g||(r.h=null),c.next=null),c}class We{constructor(){this.h=this.g=null}add(c,u){const f=st.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var st=new K(()=>new Oe,r=>r.reset());class Oe{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,oe=!1,et=new We,ft=()=>{const r=l.Promise.resolve(void 0);ce=()=>{r.then(rt)}};var rt=()=>{for(var r;r=w();){try{r.h.call(r.g)}catch(u){C(u)}var c=st;c.j(r),100>c.h&&(c.h++,r.next=c.g,c.g=r)}oe=!1};function Ae(){this.s=this.s,this.C=this.C}Ae.prototype.s=!1,Ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ce(r,c){this.type=r,this.g=this.target=c,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var sn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var r=!1,c=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const u=()=>{};l.addEventListener("test",u,c),l.removeEventListener("test",u,c)}catch{}return r}();function Ct(r,c){if(Ce.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var u=this.type=r.type,f=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=c,c=r.relatedTarget){if(ae){e:{try{z(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else u=="mouseover"?c=r.fromElement:u=="mouseout"&&(c=r.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:Ye[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Ct.aa.h.call(this)}}x(Ct,Ce);var Ye={2:"touch",3:"pen",4:"mouse"};Ct.prototype.h=function(){Ct.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),q=0;function H(r,c,u,f,R){this.listener=r,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=R,this.key=++q,this.da=this.fa=!1}function J(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function ge(r){this.src=r,this.g={},this.h=0}ge.prototype.add=function(r,c,u,f,R){var P=r.toString();r=this.g[P],r||(r=this.g[P]=[],this.h++);var j=v(r,c,f,R);return-1<j?(c=r[j],u||(c.fa=!1)):(c=new H(c,this.src,P,!!f,R),c.fa=u,r.push(c)),c};function g(r,c){var u=c.type;if(u in r.g){var f=r.g[u],R=Array.prototype.indexOf.call(f,c,void 0),P;(P=0<=R)&&Array.prototype.splice.call(f,R,1),P&&(J(c),r.g[u].length==0&&(delete r.g[u],r.h--))}}function v(r,c,u,f){for(var R=0;R<r.length;++R){var P=r[R];if(!P.da&&P.listener==c&&P.capture==!!u&&P.ha==f)return R}return-1}var A="closure_lm_"+(1e6*Math.random()|0),k={};function D(r,c,u,f,R){if(Array.isArray(c)){for(var P=0;P<c.length;P++)D(r,c[P],u,f,R);return null}return u=Z(u),r&&r[O]?r.K(c,u,d(f)?!!f.capture:!1,R):N(r,c,u,!1,f,R)}function N(r,c,u,f,R,P){if(!c)throw Error("Invalid event type");var j=d(R)?!!R.capture:!!R,Ie=$(r);if(Ie||(r[A]=Ie=new ge(r)),u=Ie.add(c,u,f,j,P),u.proxy)return u;if(f=B(),u.proxy=f,f.src=r,f.listener=u,r.addEventListener)sn||(R=j),R===void 0&&(R=!1),r.addEventListener(c.toString(),f,R);else if(r.attachEvent)r.attachEvent(M(c.toString()),f);else if(r.addListener&&r.removeListener)r.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function B(){function r(u){return c.call(r.src,r.listener,u)}const c=Y;return r}function F(r,c,u,f,R){if(Array.isArray(c))for(var P=0;P<c.length;P++)F(r,c[P],u,f,R);else f=d(f)?!!f.capture:!!f,u=Z(u),r&&r[O]?(r=r.i,c=String(c).toString(),c in r.g&&(P=r.g[c],u=v(P,u,f,R),-1<u&&(J(P[u]),Array.prototype.splice.call(P,u,1),P.length==0&&(delete r.g[c],r.h--)))):r&&(r=$(r))&&(c=r.g[c.toString()],r=-1,c&&(r=v(c,u,f,R)),(u=-1<r?c[r]:null)&&U(u))}function U(r){if(typeof r!="number"&&r&&!r.da){var c=r.src;if(c&&c[O])g(c.i,r);else{var u=r.type,f=r.proxy;c.removeEventListener?c.removeEventListener(u,f,r.capture):c.detachEvent?c.detachEvent(M(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=$(c))?(g(u,r),u.h==0&&(u.src=null,c[A]=null)):J(r)}}}function M(r){return r in k?k[r]:k[r]="on"+r}function Y(r,c){if(r.da)r=!0;else{c=new Ct(c,this);var u=r.listener,f=r.ha||r.src;r.fa&&U(r),r=u.call(f,c)}return r}function $(r){return r=r[A],r instanceof ge?r:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(r){return typeof r=="function"?r:(r[X]||(r[X]=function(c){return r.handleEvent(c)}),r[X])}function Q(){Ae.call(this),this.i=new ge(this),this.M=this,this.F=null}x(Q,Ae),Q.prototype[O]=!0,Q.prototype.removeEventListener=function(r,c,u,f){F(this,r,c,u,f)};function ie(r,c){var u,f=r.F;if(f)for(u=[];f;f=f.F)u.push(f);if(r=r.M,f=c.type||c,typeof c=="string")c=new Ce(c,r);else if(c instanceof Ce)c.target=c.target||r;else{var R=c;c=new Ce(f,r),E(c,R)}if(R=!0,u)for(var P=u.length-1;0<=P;P--){var j=c.g=u[P];R=le(j,f,!0,c)&&R}if(j=c.g=r,R=le(j,f,!0,c)&&R,R=le(j,f,!1,c)&&R,u)for(P=0;P<u.length;P++)j=c.g=u[P],R=le(j,f,!1,c)&&R}Q.prototype.N=function(){if(Q.aa.N.call(this),this.i){var r=this.i,c;for(c in r.g){for(var u=r.g[c],f=0;f<u.length;f++)J(u[f]);delete r.g[c],r.h--}}this.F=null},Q.prototype.K=function(r,c,u,f){return this.i.add(String(r),c,!1,u,f)},Q.prototype.L=function(r,c,u,f){return this.i.add(String(r),c,!0,u,f)};function le(r,c,u,f){if(c=r.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,P=0;P<c.length;++P){var j=c[P];if(j&&!j.da&&j.capture==u){var Ie=j.listener,Le=j.ha||j.src;j.fa&&g(r.i,j),R=Ie.call(Le,f)!==!1&&R}}return R&&!f.defaultPrevented}function De(r,c,u){if(typeof r=="function")u&&(r=y(r,u));else if(r&&typeof r.handleEvent=="function")r=y(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(r,c||0)}function xe(r){r.g=De(()=>{r.g=null,r.i&&(r.i=!1,xe(r))},r.l);const c=r.h;r.h=null,r.m.apply(null,c)}class ot extends Ae{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:xe(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fe(r){Ae.call(this),this.h=r,this.g={}}x(Fe,Ae);var rn=[];function bi(r){pe(r.g,function(c,u){this.g.hasOwnProperty(u)&&U(c)},r),r.g={}}Fe.prototype.N=function(){Fe.aa.N.call(this),bi(this)},Fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Me=l.JSON.stringify,at=l.JSON.parse,ws=class{stringify(r){return l.JSON.stringify(r,void 0)}parse(r){return l.JSON.parse(r,void 0)}};function Lr(){}Lr.prototype.h=null;function Ga(r){return r.h||(r.h=r.i())}function Pd(){}var Ei={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ur(){Ce.call(this,"d")}x(Ur,Ce);function Fr(){Ce.call(this,"c")}x(Fr,Ce);var Yn={},qa=null;function jr(){return qa=qa||new Q}Yn.La="serverreachability";function Ka(r){Ce.call(this,Yn.La,r)}x(Ka,Ce);function Ti(r){const c=jr();ie(c,new Ka(c))}Yn.STAT_EVENT="statevent";function Ja(r,c){Ce.call(this,Yn.STAT_EVENT,r),this.stat=c}x(Ja,Ce);function ze(r){const c=jr();ie(c,new Ja(c,r))}Yn.Ma="timingevent";function Xa(r,c){Ce.call(this,Yn.Ma,r),this.size=c}x(Xa,Ce);function Si(r,c){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){r()},c)}function Ai(){this.g=!0}Ai.prototype.xa=function(){this.g=!1};function Od(r,c,u,f,R,P){r.info(function(){if(r.g)if(P)for(var j="",Ie=P.split("&"),Le=0;Le<Ie.length;Le++){var me=Ie[Le].split("=");if(1<me.length){var je=me[0];me=me[1];var Ve=je.split("_");j=2<=Ve.length&&Ve[1]=="type"?j+(je+"="+me+"&"):j+(je+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+f+") [attempt "+R+"]: "+c+`
`+u+`
`+j})}function kd(r,c,u,f,R,P,j){r.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+R+"]: "+c+`
`+u+`
`+P+" "+j})}function Qn(r,c,u,f){r.info(function(){return"XMLHTTP TEXT ("+c+"): "+Dd(r,u)+(f?" "+f:"")})}function Nd(r,c){r.info(function(){return"TIMEOUT: "+c})}Ai.prototype.info=function(){};function Dd(r,c){if(!r.g)return c;if(!c)return null;try{var u=JSON.parse(c);if(u){for(r=0;r<u.length;r++)if(Array.isArray(u[r])){var f=u[r];if(!(2>f.length)){var R=f[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return Me(u)}catch{return c}}var Vr={NO_ERROR:0,TIMEOUT:8},xd={},$r;function Is(){}x(Is,Lr),Is.prototype.g=function(){return new XMLHttpRequest},Is.prototype.i=function(){return{}},$r=new Is;function on(r,c,u,f){this.j=r,this.i=c,this.l=u,this.R=f||1,this.U=new Fe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ya}function Ya(){this.i=null,this.g="",this.h=!1}var Qa={},Br={};function Hr(r,c,u){r.L=1,r.v=Ss($t(c)),r.m=u,r.P=!0,Za(r,null)}function Za(r,c){r.F=Date.now(),bs(r),r.A=$t(r.v);var u=r.A,f=r.R;Array.isArray(f)||(f=[String(f)]),dc(u.i,"t",f),r.C=0,u=r.j.J,r.h=new Ya,r.g=kc(r.j,u?c:null,!r.m),0<r.O&&(r.M=new ot(y(r.Y,r,r.g),r.O)),c=r.U,u=r.g,f=r.ca;var R="readystatechange";Array.isArray(R)||(R&&(rn[0]=R.toString()),R=rn);for(var P=0;P<R.length;P++){var j=D(u,R[P],f||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=r.H?_(r.H):{},r.m?(r.u||(r.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,c)):(r.u="GET",r.g.ea(r.A,r.u,null,c)),Ti(),Od(r.i,r.u,r.A,r.l,r.R,r.m)}on.prototype.ca=function(r){r=r.target;const c=this.M;c&&Bt(r)==3?c.j():this.Y(r)},on.prototype.Y=function(r){try{if(r==this.g)e:{const Ve=Bt(this.g);var c=this.g.Ba();const ti=this.g.Z();if(!(3>Ve)&&(Ve!=3||this.g&&(this.h.h||this.g.oa()||wc(this.g)))){this.J||Ve!=4||c==7||(c==8||0>=ti?Ti(3):Ti(2)),Wr(this);var u=this.g.Z();this.X=u;t:if(ec(this)){var f=wc(this.g);r="";var R=f.length,P=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Sn(this),Ci(this);var j="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,r+=this.h.i.decode(f[c],{stream:!(P&&c==R-1)});f.length=0,this.h.g+=r,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=u==200,kd(this.i,this.u,this.A,this.l,this.R,Ve,u),this.o){if(this.T&&!this.K){t:{if(this.g){var Ie,Le=this.g;if((Ie=Le.g?Le.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(Ie)){var me=Ie;break t}}me=null}if(u=me)Qn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zr(this,u);else{this.o=!1,this.s=3,ze(12),Sn(this),Ci(this);break e}}if(this.P){u=!0;let dt;for(;!this.J&&this.C<j.length;)if(dt=Md(this,j),dt==Br){Ve==4&&(this.s=4,ze(14),u=!1),Qn(this.i,this.l,null,"[Incomplete Response]");break}else if(dt==Qa){this.s=4,ze(15),Qn(this.i,this.l,j,"[Invalid Chunk]"),u=!1;break}else Qn(this.i,this.l,dt,null),zr(this,dt);if(ec(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ve!=4||j.length!=0||this.h.h||(this.s=1,ze(16),u=!1),this.o=this.o&&u,!u)Qn(this.i,this.l,j,"[Invalid Chunked Response]"),Sn(this),Ci(this);else if(0<j.length&&!this.W){this.W=!0;var je=this.j;je.g==this&&je.ba&&!je.M&&(je.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Yr(je),je.M=!0,ze(11))}}else Qn(this.i,this.l,j,null),zr(this,j);Ve==4&&Sn(this),this.o&&!this.J&&(Ve==4?Cc(this.j,this):(this.o=!1,bs(this)))}else Qd(this.g),u==400&&0<j.indexOf("Unknown SID")?(this.s=3,ze(12)):(this.s=0,ze(13)),Sn(this),Ci(this)}}}catch{}finally{}};function ec(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Md(r,c){var u=r.C,f=c.indexOf(`
`,u);return f==-1?Br:(u=Number(c.substring(u,f)),isNaN(u)?Qa:(f+=1,f+u>c.length?Br:(c=c.slice(f,f+u),r.C=f+u,c)))}on.prototype.cancel=function(){this.J=!0,Sn(this)};function bs(r){r.S=Date.now()+r.I,tc(r,r.I)}function tc(r,c){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Si(y(r.ba,r),c)}function Wr(r){r.B&&(l.clearTimeout(r.B),r.B=null)}on.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(Nd(this.i,this.A),this.L!=2&&(Ti(),ze(17)),Sn(this),this.s=2,Ci(this)):tc(this,this.S-r)};function Ci(r){r.j.G==0||r.J||Cc(r.j,r)}function Sn(r){Wr(r);var c=r.M;c&&typeof c.ma=="function"&&c.ma(),r.M=null,bi(r.U),r.g&&(c=r.g,r.g=null,c.abort(),c.ma())}function zr(r,c){try{var u=r.j;if(u.G!=0&&(u.g==r||Gr(u.h,r))){if(!r.K&&Gr(u.h,r)&&u.G==3){try{var f=u.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var R=f;if(R[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<r.F)ks(u),Ps(u);else break e;Xr(u),ze(18)}}else u.za=R[1],0<u.za-u.T&&37500>R[2]&&u.F&&u.v==0&&!u.C&&(u.C=Si(y(u.Za,u),6e3));if(1>=sc(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Cn(u,11)}else if((r.K||u.g==r)&&ks(u),!V(c))for(R=u.Da.g.parse(c),c=0;c<R.length;c++){let me=R[c];if(u.T=me[0],me=me[1],u.G==2)if(me[0]=="c"){u.K=me[1],u.ia=me[2];const je=me[3];je!=null&&(u.la=je,u.j.info("VER="+u.la));const Ve=me[4];Ve!=null&&(u.Aa=Ve,u.j.info("SVER="+u.Aa));const ti=me[5];ti!=null&&typeof ti=="number"&&0<ti&&(f=1.5*ti,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const dt=r.g;if(dt){const Ns=dt.g?dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ns){var P=f.h;P.g||Ns.indexOf("spdy")==-1&&Ns.indexOf("quic")==-1&&Ns.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(qr(P,P.h),P.h=null))}if(f.D){const Qr=dt.g?dt.g.getResponseHeader("X-HTTP-Session-Id"):null;Qr&&(f.ya=Qr,Se(f.I,f.D,Qr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-r.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var j=r;if(f.qa=Oc(f,f.J?f.ia:null,f.W),j.K){rc(f.h,j);var Ie=j,Le=f.L;Le&&(Ie.I=Le),Ie.B&&(Wr(Ie),bs(Ie)),f.g=j}else Sc(f);0<u.i.length&&Os(u)}else me[0]!="stop"&&me[0]!="close"||Cn(u,7);else u.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?Cn(u,7):Jr(u):me[0]!="noop"&&u.l&&u.l.ta(me),u.v=0)}}Ti(4)}catch{}}var Ld=class{constructor(r,c){this.g=r,this.map=c}};function nc(r){this.l=r||10,l.PerformanceNavigationTiming?(r=l.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ic(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function sc(r){return r.h?1:r.g?r.g.size:0}function Gr(r,c){return r.h?r.h==c:r.g?r.g.has(c):!1}function qr(r,c){r.g?r.g.add(c):r.h=c}function rc(r,c){r.h&&r.h==c?r.h=null:r.g&&r.g.has(c)&&r.g.delete(c)}nc.prototype.cancel=function(){if(this.i=oc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function oc(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let c=r.i;for(const u of r.g.values())c=c.concat(u.D);return c}return L(r.i)}function Ud(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(h(r)){for(var c=[],u=r.length,f=0;f<u;f++)c.push(r[f]);return c}c=[],u=0;for(f in r)c[u++]=r[f];return c}function Fd(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(h(r)||typeof r=="string"){var c=[];r=r.length;for(var u=0;u<r;u++)c.push(u);return c}c=[],u=0;for(const f in r)c[u++]=f;return c}}}function ac(r,c){if(r.forEach&&typeof r.forEach=="function")r.forEach(c,void 0);else if(h(r)||typeof r=="string")Array.prototype.forEach.call(r,c,void 0);else for(var u=Fd(r),f=Ud(r),R=f.length,P=0;P<R;P++)c.call(void 0,f[P],u&&u[P],r)}var cc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jd(r,c){if(r){r=r.split("&");for(var u=0;u<r.length;u++){var f=r[u].indexOf("="),R=null;if(0<=f){var P=r[u].substring(0,f);R=r[u].substring(f+1)}else P=r[u];c(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function An(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof An){this.h=r.h,Es(this,r.j),this.o=r.o,this.g=r.g,Ts(this,r.s),this.l=r.l;var c=r.i,u=new Oi;u.i=c.i,c.g&&(u.g=new Map(c.g),u.h=c.h),lc(this,u),this.m=r.m}else r&&(c=String(r).match(cc))?(this.h=!1,Es(this,c[1]||"",!0),this.o=Ri(c[2]||""),this.g=Ri(c[3]||"",!0),Ts(this,c[4]),this.l=Ri(c[5]||"",!0),lc(this,c[6]||"",!0),this.m=Ri(c[7]||"")):(this.h=!1,this.i=new Oi(null,this.h))}An.prototype.toString=function(){var r=[],c=this.j;c&&r.push(Pi(c,uc,!0),":");var u=this.g;return(u||c=="file")&&(r.push("//"),(c=this.o)&&r.push(Pi(c,uc,!0),"@"),r.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&r.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&r.push("/"),r.push(Pi(u,u.charAt(0)=="/"?Bd:$d,!0))),(u=this.i.toString())&&r.push("?",u),(u=this.m)&&r.push("#",Pi(u,Wd)),r.join("")};function $t(r){return new An(r)}function Es(r,c,u){r.j=u?Ri(c,!0):c,r.j&&(r.j=r.j.replace(/:$/,""))}function Ts(r,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);r.s=c}else r.s=null}function lc(r,c,u){c instanceof Oi?(r.i=c,zd(r.i,r.h)):(u||(c=Pi(c,Hd)),r.i=new Oi(c,r.h))}function Se(r,c,u){r.i.set(c,u)}function Ss(r){return Se(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Ri(r,c){return r?c?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Pi(r,c,u){return typeof r=="string"?(r=encodeURI(r).replace(c,Vd),u&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Vd(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var uc=/[#\/\?@]/g,$d=/[#\?:]/g,Bd=/[#\?]/g,Hd=/[#\?@]/g,Wd=/#/g;function Oi(r,c){this.h=this.g=null,this.i=r||null,this.j=!!c}function an(r){r.g||(r.g=new Map,r.h=0,r.i&&jd(r.i,function(c,u){r.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}t=Oi.prototype,t.add=function(r,c){an(this),this.i=null,r=Zn(this,r);var u=this.g.get(r);return u||this.g.set(r,u=[]),u.push(c),this.h+=1,this};function hc(r,c){an(r),c=Zn(r,c),r.g.has(c)&&(r.i=null,r.h-=r.g.get(c).length,r.g.delete(c))}function fc(r,c){return an(r),c=Zn(r,c),r.g.has(c)}t.forEach=function(r,c){an(this),this.g.forEach(function(u,f){u.forEach(function(R){r.call(c,R,f,this)},this)},this)},t.na=function(){an(this);const r=Array.from(this.g.values()),c=Array.from(this.g.keys()),u=[];for(let f=0;f<c.length;f++){const R=r[f];for(let P=0;P<R.length;P++)u.push(c[f])}return u},t.V=function(r){an(this);let c=[];if(typeof r=="string")fc(this,r)&&(c=c.concat(this.g.get(Zn(this,r))));else{r=Array.from(this.g.values());for(let u=0;u<r.length;u++)c=c.concat(r[u])}return c},t.set=function(r,c){return an(this),this.i=null,r=Zn(this,r),fc(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[c]),this.h+=1,this},t.get=function(r,c){return r?(r=this.V(r),0<r.length?String(r[0]):c):c};function dc(r,c,u){hc(r,c),0<u.length&&(r.i=null,r.g.set(Zn(r,c),L(u)),r.h+=u.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],c=Array.from(this.g.keys());for(var u=0;u<c.length;u++){var f=c[u];const P=encodeURIComponent(String(f)),j=this.V(f);for(f=0;f<j.length;f++){var R=P;j[f]!==""&&(R+="="+encodeURIComponent(String(j[f]))),r.push(R)}}return this.i=r.join("&")};function Zn(r,c){return c=String(c),r.j&&(c=c.toLowerCase()),c}function zd(r,c){c&&!r.j&&(an(r),r.i=null,r.g.forEach(function(u,f){var R=f.toLowerCase();f!=R&&(hc(this,f),dc(this,R,u))},r)),r.j=c}function Gd(r,c){const u=new Ai;if(l.Image){const f=new Image;f.onload=S(cn,u,"TestLoadImage: loaded",!0,c,f),f.onerror=S(cn,u,"TestLoadImage: error",!1,c,f),f.onabort=S(cn,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=S(cn,u,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=r}else c(!1)}function qd(r,c){const u=new Ai,f=new AbortController,R=setTimeout(()=>{f.abort(),cn(u,"TestPingServer: timeout",!1,c)},1e4);fetch(r,{signal:f.signal}).then(P=>{clearTimeout(R),P.ok?cn(u,"TestPingServer: ok",!0,c):cn(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),cn(u,"TestPingServer: error",!1,c)})}function cn(r,c,u,f,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),f(u)}catch{}}function Kd(){this.g=new ws}function Jd(r,c,u){const f=u||"";try{ac(r,function(R,P){let j=R;d(R)&&(j=Me(R)),c.push(f+P+"="+encodeURIComponent(j))})}catch(R){throw c.push(f+"type="+encodeURIComponent("_badmap")),R}}function As(r){this.l=r.Ub||null,this.j=r.eb||!1}x(As,Lr),As.prototype.g=function(){return new Cs(this.l,this.j)},As.prototype.i=function(r){return function(){return r}}({});function Cs(r,c){Q.call(this),this.D=r,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Cs,Q),t=Cs.prototype,t.open=function(r,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=c,this.readyState=1,Ni(this)},t.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(c.body=r),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ki(this)),this.readyState=0},t.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Ni(this)),this.g&&(this.readyState=3,Ni(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pc(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function pc(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}t.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var c=r.value?r.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!r.done}))&&(this.response=this.responseText+=c)}r.done?ki(this):Ni(this),this.readyState==3&&pc(this)}},t.Ra=function(r){this.g&&(this.response=this.responseText=r,ki(this))},t.Qa=function(r){this.g&&(this.response=r,ki(this))},t.ga=function(){this.g&&ki(this)};function ki(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Ni(r)}t.setRequestHeader=function(r,c){this.u.append(r,c)},t.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,r.push(u[0]+": "+u[1]),u=c.next();return r.join(`\r
`)};function Ni(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Cs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function gc(r){let c="";return pe(r,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function Kr(r,c,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=gc(u),typeof r=="string"?u!=null&&encodeURIComponent(String(u)):Se(r,c,u))}function Pe(r){Q.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Pe,Q);var Xd=/^https?$/i,Yd=["POST","PUT"];t=Pe.prototype,t.Ha=function(r){this.J=r},t.ea=function(r,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);c=c?c.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$r.g(),this.v=this.o?Ga(this.o):Ga($r),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(r),!0),this.B=!1}catch(P){mc(this,P);return}if(r=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var R in f)u.set(R,f[R]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())u.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(P=>P.toLowerCase()=="content-type"),R=l.FormData&&r instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Yd,c,void 0))||f||R||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of u)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vc(this),this.u=!0,this.g.send(r),this.u=!1}catch(P){mc(this,P)}};function mc(r,c){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=c,r.m=5,_c(r),Rs(r)}function _c(r){r.A||(r.A=!0,ie(r,"complete"),ie(r,"error"))}t.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,ie(this,"complete"),ie(this,"abort"),Rs(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rs(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?yc(this):this.bb())},t.bb=function(){yc(this)};function yc(r){if(r.h&&typeof a<"u"&&(!r.v[1]||Bt(r)!=4||r.Z()!=2)){if(r.u&&Bt(r)==4)De(r.Ea,0,r);else if(ie(r,"readystatechange"),Bt(r)==4){r.h=!1;try{const j=r.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var f;if(f=j===0){var R=String(r.D).match(cc)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),f=!Xd.test(R?R.toLowerCase():"")}u=f}if(u)ie(r,"complete"),ie(r,"success");else{r.m=6;try{var P=2<Bt(r)?r.g.statusText:""}catch{P=""}r.l=P+" ["+r.Z()+"]",_c(r)}}finally{Rs(r)}}}}function Rs(r,c){if(r.g){vc(r);const u=r.g,f=r.v[0]?()=>{}:null;r.g=null,r.v=null,c||ie(r,"ready");try{u.onreadystatechange=f}catch{}}}function vc(r){r.I&&(l.clearTimeout(r.I),r.I=null)}t.isActive=function(){return!!this.g};function Bt(r){return r.g?r.g.readyState:0}t.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(r){if(this.g){var c=this.g.responseText;return r&&c.indexOf(r)==0&&(c=c.substring(r.length)),at(c)}};function wc(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function Qd(r){const c={};r=(r.g&&2<=Bt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<r.length;f++){if(V(r[f]))continue;var u=T(r[f]);const R=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const P=c[R]||[];c[R]=P,P.push(u)}b(c,function(f){return f.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Di(r,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[r]||c}function Ic(r){this.Aa=0,this.i=[],this.j=new Ai,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Di("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Di("baseRetryDelayMs",5e3,r),this.cb=Di("retryDelaySeedMs",1e4,r),this.Wa=Di("forwardChannelMaxRetries",2,r),this.wa=Di("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new nc(r&&r.concurrentRequestLimit),this.Da=new Kd,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ic.prototype,t.la=8,t.G=1,t.connect=function(r,c,u,f){ze(0),this.W=r,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Oc(this,null,this.W),Os(this)};function Jr(r){if(bc(r),r.G==3){var c=r.U++,u=$t(r.I);if(Se(u,"SID",r.K),Se(u,"RID",c),Se(u,"TYPE","terminate"),xi(r,u),c=new on(r,r.j,c),c.L=2,c.v=Ss($t(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=c.v,u=!0),u||(c.g=kc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),bs(c)}Pc(r)}function Ps(r){r.g&&(Yr(r),r.g.cancel(),r.g=null)}function bc(r){Ps(r),r.u&&(l.clearTimeout(r.u),r.u=null),ks(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&l.clearTimeout(r.s),r.s=null)}function Os(r){if(!ic(r.h)&&!r.s){r.s=!0;var c=r.Ga;ce||ft(),oe||(ce(),oe=!0),et.add(c,r),r.B=0}}function Zd(r,c){return sc(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=c.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Si(y(r.Ga,r,c),Rc(r,r.B)),r.B++,!0)}t.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const R=new on(this,this.j,r);let P=this.o;if(this.S&&(P?(P=_(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=Tc(this,R,c),u=$t(this.I),Se(u,"RID",r),Se(u,"CVER",22),this.D&&Se(u,"X-HTTP-Session-Id",this.D),xi(this,u),P&&(this.O?c="headers="+encodeURIComponent(String(gc(P)))+"&"+c:this.m&&Kr(u,this.m,P)),qr(this.h,R),this.Ua&&Se(u,"TYPE","init"),this.P?(Se(u,"$req",c),Se(u,"SID","null"),R.T=!0,Hr(R,u,null)):Hr(R,u,c),this.G=2}}else this.G==3&&(r?Ec(this,r):this.i.length==0||ic(this.h)||Ec(this))};function Ec(r,c){var u;c?u=c.l:u=r.U++;const f=$t(r.I);Se(f,"SID",r.K),Se(f,"RID",u),Se(f,"AID",r.T),xi(r,f),r.m&&r.o&&Kr(f,r.m,r.o),u=new on(r,r.j,u,r.B+1),r.m===null&&(u.H=r.o),c&&(r.i=c.D.concat(r.i)),c=Tc(r,u,1e3),u.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),qr(r.h,u),Hr(u,f,c)}function xi(r,c){r.H&&pe(r.H,function(u,f){Se(c,f,u)}),r.l&&ac({},function(u,f){Se(c,f,u)})}function Tc(r,c,u){u=Math.min(r.i.length,u);var f=r.l?y(r.l.Na,r.l,r):null;e:{var R=r.i;let P=-1;for(;;){const j=["count="+u];P==-1?0<u?(P=R[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let Ie=!0;for(let Le=0;Le<u;Le++){let me=R[Le].g;const je=R[Le].map;if(me-=P,0>me)P=Math.max(0,R[Le].g-100),Ie=!1;else try{Jd(je,j,"req"+me+"_")}catch{f&&f(je)}}if(Ie){f=j.join("&");break e}}}return r=r.i.splice(0,u),c.D=r,f}function Sc(r){if(!r.g&&!r.u){r.Y=1;var c=r.Fa;ce||ft(),oe||(ce(),oe=!0),et.add(c,r),r.v=0}}function Xr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Si(y(r.Fa,r),Rc(r,r.v)),r.v++,!0)}t.Fa=function(){if(this.u=null,Ac(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Si(y(this.ab,this),r)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ze(10),Ps(this),Ac(this))};function Yr(r){r.A!=null&&(l.clearTimeout(r.A),r.A=null)}function Ac(r){r.g=new on(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var c=$t(r.qa);Se(c,"RID","rpc"),Se(c,"SID",r.K),Se(c,"AID",r.T),Se(c,"CI",r.F?"0":"1"),!r.F&&r.ja&&Se(c,"TO",r.ja),Se(c,"TYPE","xmlhttp"),xi(r,c),r.m&&r.o&&Kr(c,r.m,r.o),r.L&&(r.g.I=r.L);var u=r.g;r=r.ia,u.L=1,u.v=Ss($t(c)),u.m=null,u.P=!0,Za(u,r)}t.Za=function(){this.C!=null&&(this.C=null,Ps(this),Xr(this),ze(19))};function ks(r){r.C!=null&&(l.clearTimeout(r.C),r.C=null)}function Cc(r,c){var u=null;if(r.g==c){ks(r),Yr(r),r.g=null;var f=2}else if(Gr(r.h,c))u=c.D,rc(r.h,c),f=1;else return;if(r.G!=0){if(c.o)if(f==1){u=c.m?c.m.length:0,c=Date.now()-c.F;var R=r.B;f=jr(),ie(f,new Xa(f,u)),Os(r)}else Sc(r);else if(R=c.s,R==3||R==0&&0<c.X||!(f==1&&Zd(r,c)||f==2&&Xr(r)))switch(u&&0<u.length&&(c=r.h,c.i=c.i.concat(u)),R){case 1:Cn(r,5);break;case 4:Cn(r,10);break;case 3:Cn(r,6);break;default:Cn(r,2)}}}function Rc(r,c){let u=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(u*=2),u*c}function Cn(r,c){if(r.j.info("Error code "+c),c==2){var u=y(r.fb,r),f=r.Xa;const R=!f;f=new An(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Es(f,"https"),Ss(f),R?Gd(f.toString(),u):qd(f.toString(),u)}else ze(2);r.G=0,r.l&&r.l.sa(c),Pc(r),bc(r)}t.fb=function(r){r?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function Pc(r){if(r.G=0,r.ka=[],r.l){const c=oc(r.h);(c.length!=0||r.i.length!=0)&&(G(r.ka,c),G(r.ka,r.i),r.h.i.length=0,L(r.i),r.i.length=0),r.l.ra()}}function Oc(r,c,u){var f=u instanceof An?$t(u):new An(u);if(f.g!="")c&&(f.g=c+"."+f.g),Ts(f,f.s);else{var R=l.location;f=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var P=new An(null);f&&Es(P,f),c&&(P.g=c),R&&Ts(P,R),u&&(P.l=u),f=P}return u=r.D,c=r.ya,u&&c&&Se(f,u,c),Se(f,"VER",r.la),xi(r,f),f}function kc(r,c,u){if(c&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=r.Ca&&!r.pa?new Pe(new As({eb:u})):new Pe(r.pa),c.Ha(r.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nc(){}t=Nc.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ct(r,c){Q.call(this),this.g=new Ic(c),this.l=r,this.h=c&&c.messageUrlParams||null,r=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(r?r["X-WebChannel-Content-Type"]=c.messageContentType:r={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(r?r["X-WebChannel-Client-Profile"]=c.va:r={"X-WebChannel-Client-Profile":c.va}),this.g.S=r,(r=c&&c.Sb)&&!V(r)&&(this.g.m=r),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!V(c)&&(this.g.D=c,r=this.h,r!==null&&c in r&&(r=this.h,c in r&&delete r[c])),this.j=new ei(this)}x(ct,Q),ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ct.prototype.close=function(){Jr(this.g)},ct.prototype.o=function(r){var c=this.g;if(typeof r=="string"){var u={};u.__data__=r,r=u}else this.u&&(u={},u.__data__=Me(r),r=u);c.i.push(new Ld(c.Ya++,r)),c.G==3&&Os(c)},ct.prototype.N=function(){this.g.l=null,delete this.j,Jr(this.g),delete this.g,ct.aa.N.call(this)};function Dc(r){Ur.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var c=r.__sm__;if(c){e:{for(const u in c){r=u;break e}r=void 0}(this.i=r)&&(r=this.i,c=c!==null&&r in c?c[r]:void 0),this.data=c}else this.data=r}x(Dc,Ur);function xc(){Fr.call(this),this.status=1}x(xc,Fr);function ei(r){this.g=r}x(ei,Nc),ei.prototype.ua=function(){ie(this.g,"a")},ei.prototype.ta=function(r){ie(this.g,new Dc(r))},ei.prototype.sa=function(r){ie(this.g,new xc)},ei.prototype.ra=function(){ie(this.g,"b")},ct.prototype.send=ct.prototype.o,ct.prototype.open=ct.prototype.m,ct.prototype.close=ct.prototype.close,Vr.NO_ERROR=0,Vr.TIMEOUT=8,Vr.HTTP_ERROR=6,xd.COMPLETE="complete",Pd.EventType=Ei,Ei.OPEN="a",Ei.CLOSE="b",Ei.ERROR="c",Ei.MESSAGE="d",Q.prototype.listen=Q.prototype.K,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha}).apply(typeof js<"u"?js:typeof self<"u"?self:typeof window<"u"?window:{});const du="@firebase/firestore",pu="4.8.0";/**
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
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
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
 */let ys="11.10.0";/**
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
 */const yi=new Or("@firebase/firestore");function vt(t,...e){if(yi.logLevel<=we.DEBUG){const n=e.map($a);yi.debug(`Firestore (${ys}): ${t}`,...n)}}function wd(t,...e){if(yi.logLevel<=we.ERROR){const n=e.map($a);yi.error(`Firestore (${ys}): ${t}`,...n)}}function ub(t,...e){if(yi.logLevel<=we.WARN){const n=e.map($a);yi.warn(`Firestore (${ys}): ${t}`,...n)}}function $a(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function us(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,Id(t,i,n)}function Id(t,e,n){let i=`FIRESTORE (${ys}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw wd(i),new Error(i)}function Qi(t,e,n,i){let s="Unexpected state";typeof n=="string"?s=n:i=n,t||Id(e,s,i)}/**
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
 */const fe={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class de extends At{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class bd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class fb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class db{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Qi(this.o===void 0,42304);let i=this.i;const s=h=>this.i!==i?(i=this.i,n(h)):Promise.resolve();let o=new Zi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Zi,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},l=h=>{vt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(vt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Zi)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(vt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Qi(typeof i.accessToken=="string",31837,{l:i}),new bd(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Qi(e===null||typeof e=="string",2055,{h:e}),new qe(e)}}class pb{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class gb{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new pb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_t(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Qi(this.o===void 0,3512);const i=o=>{o.error!=null&&vt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,vt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const s=o=>{vt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):vt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new gu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Qi(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new gu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class vb{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=_b(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<n&&(i+=e.charAt(s[o]%62))}return i}}function Et(t,e){return t<e?-1:t>e?1:0}function wb(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=t.codePointAt(n),s=e.codePointAt(n);if(i!==s){if(i<128&&s<128)return Et(i,s);{const o=yb(),a=Ib(o.encode(mu(t,n)),o.encode(mu(e,n)));return a!==0?a:Et(i,s)}}n+=i>65535?2:1}return Et(t.length,e.length)}function mu(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function Ib(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Et(t[n],e[n]);return Et(t.length,e.length)}/**
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
 */const _u="__name__";class Ot{constructor(e,n,i){n===void 0?n=0:n>e.length&&us(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&us(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Ot.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ot?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const o=Ot.compareSegments(e.get(s),n.get(s));if(o!==0)return o}return Et(e.length,n.length)}static compareSegments(e,n){const i=Ot.isNumericId(e),s=Ot.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?Ot.extractNumericId(e).compare(Ot.extractNumericId(n)):wb(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Va.fromString(e.substring(4,e.length-2))}}class pt extends Ot{construct(e,n,i){return new pt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new de(fe.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new pt(n)}static emptyPath(){return new pt([])}}const bb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nn extends Ot{construct(e,n,i){return new Nn(e,n,i)}static isValidIdentifier(e){return bb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_u}static keyField(){return new Nn([_u])}static fromServerFormat(e){const n=[];let i="",s=0;const o=()=>{if(i.length===0)throw new de(fe.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new de(fe.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new de(fe.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(i+=l,s++):(o(),s++)}if(o(),a)throw new de(fe.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nn(n)}static emptyPath(){return new Nn([])}}/**
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
 */class Mn{constructor(e){this.path=e}static fromPath(e){return new Mn(pt.fromString(e))}static fromName(e){return new Mn(pt.fromString(e).popFirst(5))}static empty(){return new Mn(pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Mn(new pt(e.slice()))}}function Eb(t,e,n,i){if(e===!0&&i===!0)throw new de(fe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tb(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Sb(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":us(12329,{type:typeof t})}function Ab(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new de(fe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sb(t);throw new de(fe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function ke(t,e){const n={typeString:t};return e&&(n.value=e),n}function vs(t,e){if(!Tb(t))throw new de(fe.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const s=e[i].typeString,o="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const a=t[i];if(s&&typeof a!==s){n=`JSON field '${i}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){n=`Expected '${i}' field to equal '${o.value}'`;break}}if(n)throw new de(fe.INVALID_ARGUMENT,n);return!0}/**
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
 */const yu=-62135596800,vu=1e6;class Nt{static now(){return Nt.fromMillis(Date.now())}static fromDate(e){return Nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*vu);return new Nt(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new de(fe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new de(fe.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<yu)throw new de(fe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(fe.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vu}_compareTo(e){return this.seconds===e.seconds?Et(this.nanoseconds,e.nanoseconds):Et(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Nt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vs(e,Nt._jsonSchema))return new Nt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-yu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Nt._jsonSchemaVersion="firestore/timestamp/1.0",Nt._jsonSchema={type:ke("string",Nt._jsonSchemaVersion),seconds:ke("number"),nanoseconds:ke("number")};function Cb(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Rb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Rb("Invalid base64 string: "+o):o}}(e);return new qn(n)}static fromUint8Array(e){const n=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new qn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Et(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qn.EMPTY_BYTE_STRING=new qn("");const Xo="(default)";class fr{constructor(e,n){this.projectId=e,this.database=n||Xo}static empty(){return new fr("","")}get isDefaultDatabase(){return this.database===Xo}isEqual(e){return e instanceof fr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class Pb{constructor(e,n=null,i=[],s=[],o=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Ob(t){return new Pb(t)}/**
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
 */var wu,ue;(ue=wu||(wu={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Va([4294967295,4294967295],0);/**
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
 */const kb=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=1048576;function To(){return typeof document<"u"?document:null}/**
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
 */class Db{constructor(e,n,i=1e3,s=1.5,o=6e4){this.Fi=e,this.timerId=n,this.d_=i,this.E_=s,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-i);s>0&&vt("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */class Ba{constructor(e,n,i,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Zi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,o){const a=Date.now()+i,l=new Ba(e,n,a,s,o);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(fe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Iu,bu;(bu=Iu||(Iu={})).Fa="default",bu.Cache="cache";/**
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
 */const Eu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="firestore.googleapis.com",Tu=!0;class Su{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new de(fe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ed,this.ssl=Tu}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Tu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Nb)throw new de(fe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Eb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xb((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new de(fe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new de(fe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new de(fe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Td{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Su({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(fe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(fe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Su(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new hb;switch(i.type){case"firstParty":return new gb(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new de(fe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Eu.get(n);i&&(vt("ComponentProvider","Removing Datastore"),Eu.delete(n),i.terminate())}(this),Promise.resolve()}}function Mb(t,e,n,i={}){var s;t=Ab(t,Td);const o=ds(e),a=t._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),h=`${e}:${n}`;o&&(hf(`https://${h}`),ff("Firestore",!0)),a.host!==Ed&&a.host!==h&&ub("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:i});if(!bn(d,l)&&(t._setSettings(d),i.mockUserToken)){let p,m;if(typeof i.mockUserToken=="string")p=i.mockUserToken,m=qe.MOCK_USER;else{p=yy(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new de(fe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new qe(y)}t._authCredentials=new fb(new bd(p,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ha(this.firestore,e,this._query)}}class xt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}toJSON(){return{type:xt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(vs(n,xt._jsonSchema))return new xt(e,i||null,new Mn(pt.fromString(n.referencePath)))}}xt._jsonSchemaVersion="firestore/documentReference/1.0",xt._jsonSchema={type:ke("string",xt._jsonSchemaVersion),referencePath:ke("string")};class Wa extends Ha{constructor(e,n,i){super(e,n,Ob(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new Mn(e))}withConverter(e){return new Wa(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="AsyncQueue";class Cu{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Db(this,"async_queue_retry"),this.oc=()=>{const i=To();i&&vt(Au,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const n=To();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=To();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new Zi;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Cb(e))throw e;vt(Au,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(i=>{throw this.tc=i,this.nc=!1,wd("INTERNAL UNHANDLED ERROR: ",Ru(i)),i}).then(i=>(this.nc=!1,i))));return this._c=n,n}enqueueAfterDelay(e,n,i){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=Ba.createAndSchedule(this,e,n,i,o=>this.lc(o));return this.ec.push(s),s}ac(){this.tc&&us(47125,{hc:Ru(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Ru(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Lb extends Td{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new Cu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cu(e),this._firestoreClient=void 0,await e}}}function Ub(t,e){const n=typeof t=="object"?t:Ea(),i=typeof t=="string"?t:Xo,s=Xn(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=my("firestore");o&&Mb(s,...o)}return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jt(qn.fromBase64String(e))}catch(n){throw new de(fe.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Jt(qn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Jt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vs(e,Jt._jsonSchema))return Jt.fromBase64String(e.bytes)}}Jt._jsonSchemaVersion="firestore/bytes/1.0",Jt._jsonSchema={type:ke("string",Jt._jsonSchemaVersion),bytes:ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new de(fe.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new de(fe.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new de(fe.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Et(this._lat,e._lat)||Et(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:jn._jsonSchemaVersion}}static fromJSON(e){if(vs(e,jn._jsonSchema))return new jn(e.latitude,e.longitude)}}jn._jsonSchemaVersion="firestore/geoPoint/1.0",jn._jsonSchema={type:ke("string",jn._jsonSchemaVersion),latitude:ke("number"),longitude:ke("number")};/**
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
 */class Vn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Vn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vs(e,Vn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Vn(e.vectorValues);throw new de(fe.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Vn._jsonSchemaVersion="firestore/vectorValue/1.0",Vn._jsonSchema={type:ke("string",Vn._jsonSchemaVersion),vectorValues:ke("object")};const Fb=new RegExp("[~\\*/\\[\\]]");function jb(t,e,n){if(e.search(Fb)>=0)throw Pu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Sd(...e.split("."))._internalPath}catch{throw Pu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Pu(t,e,n,i,s){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new de(fe.INVALID_ARGUMENT,o+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n,i,s,o){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Vb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Cd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Vb extends Ad{data(){return super.data()}}function Cd(t,e){return typeof e=="string"?jb(t,e):e instanceof Sd?e._internalPath:e._delegate._internalPath}class Vs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fi extends Ad{constructor(e,n,i,s,o,a){super(e,n,i,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Js(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Cd("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new de(fe.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=fi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}fi._jsonSchemaVersion="firestore/documentSnapshot/1.0",fi._jsonSchema={type:ke("string",fi._jsonSchemaVersion),bundleSource:ke("string","DocumentSnapshot"),bundleName:ke("string"),bundle:ke("string")};class Js extends fi{data(e={}){return super.data(e)}}class es{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Vs(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Js(this._firestore,this._userDataWriter,i.key,i,new Vs(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new de(fe.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const h=new Js(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Vs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new Js(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Vs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:$b(l.type),doc:h,oldIndex:d,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new de(fe.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=es._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=vb.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(n.push(o._document),i.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $b(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return us(61501,{type:t})}}es._jsonSchemaVersion="firestore/querySnapshot/1.0",es._jsonSchema={type:ke("string",es._jsonSchemaVersion),bundleSource:ke("string","QuerySnapshot"),bundleName:ke("string"),bundle:ke("string")};(function(e,n=!0){(function(s){ys=s})(wi),jt(new St("firestore",(i,{instanceIdentifier:s,options:o})=>{const a=i.getProvider("app").getImmediate(),l=new Lb(new db(i.getProvider("auth-internal")),new mb(a,i.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new de(fe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fr(d.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),ut(du,pu,e),ut(du,pu,"esm2017")})();const Bb={apiKey:"AIzaSyBzR2w75nixO9H8zjUbxVajKx0npksSGrg",authDomain:"norsk-cafe.firebaseapp.com",projectId:"norsk-cafe",storageBucket:"norsk-cafe.firebasestorage.app",messagingSenderId:"123232580709",appId:"1:123232580709:web:c6e6dfed117db9d3b0028c",measurementId:void 0};console.log("API KEY IS","AIzaSyBzR2w75nixO9H8zjUbxVajKx0npksSGrg");const za=vf(Bb);aw(za);const dr=cb(za);Ub(za);const Hb={class:"welcome"},Wb={__name:"Home",setup(t){const e=Cr();da(()=>{dr.currentUser&&e.push("/dashboard")});function n(){e.push("/login")}return(i,s)=>{const o=he("ion-button"),a=he("ion-content"),l=he("ion-page");return Bn(),vi(l,null,{default:re(()=>[te(ay),te(a,{class:"ion-padding",color:"cream"},{default:re(()=>[be("div",Hb,[s[1]||(s[1]=be("h1",null,"Velkommen!",-1)),s[2]||(s[2]=be("p",null,"Her på Norsk Cafe skal vi lære norsk på en morsom og effektiv måte!",-1)),te(o,{onClick:n,color:"accent"},{default:re(()=>s[0]||(s[0]=[gt(" La oss komme i gang! ")])),_:1,__:[0]})])]),_:1})]),_:1})}}},zb=Pr(Wb,[["__scopeId","data-v-709f6d9b"]]),Gb={class:"header-content"},qb={class:"login-wrapper"},Kb={class:"login-inner"},Jb={class:"gsi-material-button"},Xb={class:"gsi-material-button-content-wrapper"},Yb={class:"gsi-material-button-icon"},Qb={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",style:{width:"24px",height:"24px"}},Zb={__name:"Login",setup(t){const e=Cr();async function n(){const i=new Kt;try{await _I(dr,i),e.push("/dashboard")}catch(s){console.error("Google sign-in failed",s),alert("Google sign-in failed: "+s.message)}}return(i,s)=>{const o=he("ion-title"),a=he("ion-toolbar"),l=he("ion-header"),h=he("ion-content"),d=he("ion-page");return Bn(),vi(d,null,{default:re(()=>[te(l,null,{default:re(()=>[te(a,{color:"coffee"},{default:re(()=>[be("div",Gb,[te(o,null,{default:re(()=>s[0]||(s[0]=[gt("Login")])),_:1,__:[0]})])]),_:1})]),_:1}),te(h,{color:"cream"},{default:re(()=>[be("div",qb,[be("div",Kb,[s[4]||(s[4]=be("h1",{class:"login-title"},"Velkommen tilbake!",-1)),s[5]||(s[5]=be("p",{class:"login-subtitle"}," Logg inn med Google for å fortsette å lære norsk. ",-1)),be("div",{class:"google-wrapper",onClick:n},[be("button",Jb,[s[3]||(s[3]=be("div",{class:"gsi-material-button-state"},null,-1)),be("div",Xb,[be("div",Yb,[(Bn(),Dg("svg",Qb,s[1]||(s[1]=[be("path",{fill:"#EA4335",d:`M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0\r
                      14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z`},null,-1),be("path",{fill:"#4285F4",d:`M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58\r
                      2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z`},null,-1),be("path",{fill:"#FBBC05",d:`M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92\r
                      16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z`},null,-1),be("path",{fill:"#34A853",d:`M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15\r
                      1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98\r
                      6.19C6.51 42.62 14.62 48 24 48z`},null,-1),be("path",{fill:"none",d:"M0 0h48v48H0z"},null,-1)])))]),s[2]||(s[2]=be("span",{class:"gsi-material-button-contents"},"Fortsett med Google",-1))])])])])])]),_:1})]),_:1})}}},eE=Pr(Zb,[["__scopeId","data-v-dc791e9a"]]),tE={__name:"Dashboard",setup(t){const e=Cr(),n=eh("");da(()=>{const s=dr.currentUser;s?n.value=s.displayName||s.email||"Bruker":e.push("/login")});function i(){dr.signOut(),e.push("/login")}return(s,o)=>{const a=he("ion-title"),l=he("ion-button"),h=he("ion-buttons"),d=he("ion-toolbar"),p=he("ion-header"),m=he("ion-card-title"),y=he("ion-card-header"),S=he("ion-label"),x=he("ion-item"),L=he("ion-list"),G=he("ion-card-content"),K=he("ion-card"),V=he("ion-content"),W=he("ion-page");return Bn(),vi(W,null,{default:re(()=>[te(p,null,{default:re(()=>[te(d,{color:"coffee"},{default:re(()=>[te(a,null,{default:re(()=>o[0]||(o[0]=[gt("Dashboard")])),_:1,__:[0]}),te(h,{slot:"end"},{default:re(()=>[te(l,{color:"accent",fill:"solid",onClick:i},{default:re(()=>o[1]||(o[1]=[gt(" Logg ut ")])),_:1,__:[1]})]),_:1})]),_:1})]),_:1}),te(V,{color:"cream",class:"ion-padding"},{default:re(()=>[be("h2",null,"Hei "+Lu(n.value)+"!",1),o[5]||(o[5]=be("p",null,"Velkommen til Norsk Cafe sin læringsplattform.",-1)),te(K,null,{default:re(()=>[te(y,null,{default:re(()=>[te(m,null,{default:re(()=>o[2]||(o[2]=[gt("Dine kurs")])),_:1,__:[2]})]),_:1}),te(G,null,{default:re(()=>[te(L,null,{default:re(()=>[te(x,null,{default:re(()=>[te(S,null,{default:re(()=>o[3]||(o[3]=[gt("Grunnleggende norsk")])),_:1,__:[3]})]),_:1}),te(x,null,{default:re(()=>[te(S,null,{default:re(()=>o[4]||(o[4]=[gt("Norsk samtalepraksis")])),_:1,__:[4]})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1,__:[5]})]),_:1})}}},nE=Pr(tE,[["__scopeId","data-v-eb00965b"]]),iE=[{path:"/",name:"Home",component:zb},{path:"/login",name:"Login",component:eE},{path:"/dashboard",name:"Dashboard",component:nE}],Rd=X_({history:S_("./"),routes:iE}),sE=mm(sy).use(Z_).use(Rd);Rd.isReady().then(()=>{sE.mount("#app")});
