(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ra(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const be={},di=[],Ft=()=>{},ap=()=>!1,Er=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),oa=t=>t.startsWith("onUpdate:"),Le=Object.assign,aa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lp=Object.prototype.hasOwnProperty,_e=(t,e)=>lp.call(t,e),te=Array.isArray,pi=t=>Tr(t)==="[object Map]",$u=t=>Tr(t)==="[object Set]",ie=t=>typeof t=="function",ke=t=>typeof t=="string",kn=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",Bu=t=>(Te(t)||ie(t))&&ie(t.then)&&ie(t.catch),Hu=Object.prototype.toString,Tr=t=>Hu.call(t),cp=t=>Tr(t).slice(8,-1),Wu=t=>Tr(t)==="[object Object]",la=t=>ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gi=ra(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},up=/-(\w)/g,_t=Sr(t=>t.replace(up,(e,n)=>n?n.toUpperCase():"")),hp=/\B([A-Z])/g,ti=Sr(t=>t.replace(hp,"-$1").toLowerCase()),Ar=Sr(t=>t.charAt(0).toUpperCase()+t.slice(1)),ao=Sr(t=>t?`on${Ar(t)}`:""),Tn=(t,e)=>!Object.is(t,e),lo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},xo=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},fp=t=>{const e=parseFloat(t);return isNaN(e)?t:e},dp=t=>{const e=ke(t)?Number(t):NaN;return isNaN(e)?t:e};let $l;const Cr=()=>$l||($l=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ca(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=ke(i)?_p(i):ca(i);if(s)for(const o in s)e[o]=s[o]}return e}else if(ke(t)||Te(t))return t}const pp=/;(?![^(]*\))/g,gp=/:([^]+)/,mp=/\/\*[^]*?\*\//g;function _p(t){const e={};return t.replace(mp,"").split(pp).forEach(n=>{if(n){const i=n.split(gp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ua(t){let e="";if(ke(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const i=ua(t[n]);i&&(e+=i+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const vp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yp=ra(vp);function Gu(t){return!!t||t===""}const zu=t=>!!(t&&t.__v_isRef===!0),Se=t=>ke(t)?t:t==null?"":te(t)||Te(t)&&(t.toString===Hu||!ie(t.toString))?zu(t)?Se(t.value):JSON.stringify(t,qu,2):String(t),qu=(t,e)=>zu(e)?qu(t,e.value):pi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],o)=>(n[co(i,o)+" =>"]=s,n),{})}:$u(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>co(n))}:kn(e)?co(e):Te(e)&&!te(e)&&!Wu(e)?String(e):e,co=(t,e="")=>{var n;return kn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tt;class wp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=tt,!e&&tt&&(this.index=(tt.scopes||(tt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=tt;try{return tt=this,e()}finally{tt=n}}}on(){++this._on===1&&(this.prevScope=tt,tt=this)}off(){this._on>0&&--this._on===0&&(tt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ip(){return tt}let Ie;const uo=new WeakSet;class Ku{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,tt&&tt.active&&tt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,uo.has(this)&&(uo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bl(this),Yu(this);const e=Ie,n=Tt;Ie=this,Tt=!0;try{return this.fn()}finally{Qu(this),Ie=e,Tt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)da(e);this.deps=this.depsTail=void 0,Bl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?uo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Lo(this)&&this.run()}get dirty(){return Lo(this)}}let Ju=0,zi,qi;function Xu(t,e=!1){if(t.flags|=8,e){t.next=qi,qi=t;return}t.next=zi,zi=t}function ha(){Ju++}function fa(){if(--Ju>0)return;if(qi){let e=qi;for(qi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;zi;){let e=zi;for(zi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Yu(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Qu(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),da(i),bp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Lo(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Zu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Zu(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===os)||(t.globalVersion=os,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Lo(t))))return;t.flags|=2;const e=t.dep,n=Ie,i=Tt;Ie=t,Tt=!0;try{Yu(t);const s=t.fn(t._value);(e.version===0||Tn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ie=n,Tt=i,Qu(t),t.flags&=-3}}function da(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)da(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function bp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Tt=!0;const eh=[];function tn(){eh.push(Tt),Tt=!1}function nn(){const t=eh.pop();Tt=t===void 0?!0:t}function Bl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ie;Ie=void 0;try{e()}finally{Ie=n}}}let os=0;class Ep{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pa{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ie||!Tt||Ie===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ie)n=this.activeLink=new Ep(Ie,this),Ie.deps?(n.prevDep=Ie.depsTail,Ie.depsTail.nextDep=n,Ie.depsTail=n):Ie.deps=Ie.depsTail=n,th(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Ie.depsTail,n.nextDep=void 0,Ie.depsTail.nextDep=n,Ie.depsTail=n,Ie.deps===n&&(Ie.deps=i)}return n}trigger(e){this.version++,os++,this.notify(e)}notify(e){ha();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{fa()}}}function th(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)th(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Mo=new WeakMap,Gn=Symbol(""),Uo=Symbol(""),as=Symbol("");function ze(t,e,n){if(Tt&&Ie){let i=Mo.get(t);i||Mo.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new pa),s.map=i,s.key=n),s.track()}}function Jt(t,e,n,i,s,o){const a=Mo.get(t);if(!a){os++;return}const c=u=>{u&&u.trigger()};if(ha(),e==="clear")a.forEach(c);else{const u=te(t),f=u&&la(n);if(u&&n==="length"){const d=Number(i);a.forEach((g,w)=>{(w==="length"||w===as||!kn(w)&&w>=d)&&c(g)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),f&&c(a.get(as)),e){case"add":u?f&&c(a.get("length")):(c(a.get(Gn)),pi(t)&&c(a.get(Uo)));break;case"delete":u||(c(a.get(Gn)),pi(t)&&c(a.get(Uo)));break;case"set":pi(t)&&c(a.get(Gn));break}}fa()}function ui(t){const e=ge(t);return e===t?e:(ze(e,"iterate",as),gt(t)?e:e.map(Ve))}function Rr(t){return ze(t=ge(t),"iterate",as),t}const Tp={__proto__:null,[Symbol.iterator](){return ho(this,Symbol.iterator,Ve)},concat(...t){return ui(this).concat(...t.map(e=>te(e)?ui(e):e))},entries(){return ho(this,"entries",t=>(t[1]=Ve(t[1]),t))},every(t,e){return Gt(this,"every",t,e,void 0,arguments)},filter(t,e){return Gt(this,"filter",t,e,n=>n.map(Ve),arguments)},find(t,e){return Gt(this,"find",t,e,Ve,arguments)},findIndex(t,e){return Gt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Gt(this,"findLast",t,e,Ve,arguments)},findLastIndex(t,e){return Gt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Gt(this,"forEach",t,e,void 0,arguments)},includes(...t){return fo(this,"includes",t)},indexOf(...t){return fo(this,"indexOf",t)},join(t){return ui(this).join(t)},lastIndexOf(...t){return fo(this,"lastIndexOf",t)},map(t,e){return Gt(this,"map",t,e,void 0,arguments)},pop(){return $i(this,"pop")},push(...t){return $i(this,"push",t)},reduce(t,...e){return Hl(this,"reduce",t,e)},reduceRight(t,...e){return Hl(this,"reduceRight",t,e)},shift(){return $i(this,"shift")},some(t,e){return Gt(this,"some",t,e,void 0,arguments)},splice(...t){return $i(this,"splice",t)},toReversed(){return ui(this).toReversed()},toSorted(t){return ui(this).toSorted(t)},toSpliced(...t){return ui(this).toSpliced(...t)},unshift(...t){return $i(this,"unshift",t)},values(){return ho(this,"values",Ve)}};function ho(t,e,n){const i=Rr(t),s=i[e]();return i!==t&&!gt(t)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.value&&(o.value=n(o.value)),o}),s}const Sp=Array.prototype;function Gt(t,e,n,i,s,o){const a=Rr(t),c=a!==t&&!gt(t),u=a[e];if(u!==Sp[e]){const g=u.apply(t,o);return c?Ve(g):g}let f=n;a!==t&&(c?f=function(g,w){return n.call(this,Ve(g),w,t)}:n.length>2&&(f=function(g,w){return n.call(this,g,w,t)}));const d=u.call(a,f,i);return c&&s?s(d):d}function Hl(t,e,n,i){const s=Rr(t);let o=n;return s!==t&&(gt(t)?n.length>3&&(o=function(a,c,u){return n.call(this,a,c,u,t)}):o=function(a,c,u){return n.call(this,a,Ve(c),u,t)}),s[e](o,...i)}function fo(t,e,n){const i=ge(t);ze(i,"iterate",as);const s=i[e](...n);return(s===-1||s===!1)&&_a(n[0])?(n[0]=ge(n[0]),i[e](...n)):s}function $i(t,e,n=[]){tn(),ha();const i=ge(t)[e].apply(t,n);return fa(),nn(),i}const Ap=ra("__proto__,__v_isRef,__isVue"),nh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kn));function Cp(t){kn(t)||(t=String(t));const e=ge(this);return ze(e,"has",t),e.hasOwnProperty(t)}class ih{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(s?o?Up:ah:o?oh:rh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=te(e);if(!s){let u;if(a&&(u=Tp[n]))return u;if(n==="hasOwnProperty")return Cp}const c=Reflect.get(e,n,qe(e)?e:i);return(kn(n)?nh.has(n):Ap(n))||(s||ze(e,"get",n),o)?c:qe(c)?a&&la(n)?c:c.value:Te(c)?s?ch(c):Pr(c):c}}class sh extends ih{constructor(e=!1){super(!1,e)}set(e,n,i,s){let o=e[n];if(!this._isShallow){const u=Cn(o);if(!gt(i)&&!Cn(i)&&(o=ge(o),i=ge(i)),!te(e)&&qe(o)&&!qe(i))return u?!1:(o.value=i,!0)}const a=te(e)&&la(n)?Number(n)<e.length:_e(e,n),c=Reflect.set(e,n,i,qe(e)?e:s);return e===ge(s)&&(a?Tn(i,o)&&Jt(e,"set",n,i):Jt(e,"add",n,i)),c}deleteProperty(e,n){const i=_e(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Jt(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!kn(n)||!nh.has(n))&&ze(e,"has",n),i}ownKeys(e){return ze(e,"iterate",te(e)?"length":Gn),Reflect.ownKeys(e)}}class Rp extends ih{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Pp=new sh,kp=new Rp,Op=new sh(!0);const Fo=t=>t,$s=t=>Reflect.getPrototypeOf(t);function Np(t,e,n){return function(...i){const s=this.__v_raw,o=ge(s),a=pi(o),c=t==="entries"||t===Symbol.iterator&&a,u=t==="keys"&&a,f=s[t](...i),d=n?Fo:e?sr:Ve;return!e&&ze(o,"iterate",u?Uo:Gn),{next(){const{value:g,done:w}=f.next();return w?{value:g,done:w}:{value:c?[d(g[0]),d(g[1])]:d(g),done:w}},[Symbol.iterator](){return this}}}}function Bs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Dp(t,e){const n={get(s){const o=this.__v_raw,a=ge(o),c=ge(s);t||(Tn(s,c)&&ze(a,"get",s),ze(a,"get",c));const{has:u}=$s(a),f=e?Fo:t?sr:Ve;if(u.call(a,s))return f(o.get(s));if(u.call(a,c))return f(o.get(c));o!==a&&o.get(s)},get size(){const s=this.__v_raw;return!t&&ze(ge(s),"iterate",Gn),Reflect.get(s,"size",s)},has(s){const o=this.__v_raw,a=ge(o),c=ge(s);return t||(Tn(s,c)&&ze(a,"has",s),ze(a,"has",c)),s===c?o.has(s):o.has(s)||o.has(c)},forEach(s,o){const a=this,c=a.__v_raw,u=ge(c),f=e?Fo:t?sr:Ve;return!t&&ze(u,"iterate",Gn),c.forEach((d,g)=>s.call(o,f(d),f(g),a))}};return Le(n,t?{add:Bs("add"),set:Bs("set"),delete:Bs("delete"),clear:Bs("clear")}:{add(s){!e&&!gt(s)&&!Cn(s)&&(s=ge(s));const o=ge(this);return $s(o).has.call(o,s)||(o.add(s),Jt(o,"add",s,s)),this},set(s,o){!e&&!gt(o)&&!Cn(o)&&(o=ge(o));const a=ge(this),{has:c,get:u}=$s(a);let f=c.call(a,s);f||(s=ge(s),f=c.call(a,s));const d=u.call(a,s);return a.set(s,o),f?Tn(o,d)&&Jt(a,"set",s,o):Jt(a,"add",s,o),this},delete(s){const o=ge(this),{has:a,get:c}=$s(o);let u=a.call(o,s);u||(s=ge(s),u=a.call(o,s)),c&&c.call(o,s);const f=o.delete(s);return u&&Jt(o,"delete",s,void 0),f},clear(){const s=ge(this),o=s.size!==0,a=s.clear();return o&&Jt(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Np(s,t,e)}),n}function ga(t,e){const n=Dp(t,e);return(i,s,o)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(_e(n,s)&&s in i?n:i,s,o)}const xp={get:ga(!1,!1)},Lp={get:ga(!1,!0)},Mp={get:ga(!0,!1)};const rh=new WeakMap,oh=new WeakMap,ah=new WeakMap,Up=new WeakMap;function Fp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jp(t){return t.__v_skip||!Object.isExtensible(t)?0:Fp(cp(t))}function Pr(t){return Cn(t)?t:ma(t,!1,Pp,xp,rh)}function lh(t){return ma(t,!1,Op,Lp,oh)}function ch(t){return ma(t,!0,kp,Mp,ah)}function ma(t,e,n,i,s){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=jp(t);if(o===0)return t;const a=s.get(t);if(a)return a;const c=new Proxy(t,o===2?i:n);return s.set(t,c),c}function gi(t){return Cn(t)?gi(t.__v_raw):!!(t&&t.__v_isReactive)}function Cn(t){return!!(t&&t.__v_isReadonly)}function gt(t){return!!(t&&t.__v_isShallow)}function _a(t){return t?!!t.__v_raw:!1}function ge(t){const e=t&&t.__v_raw;return e?ge(e):t}function Vp(t){return!_e(t,"__v_skip")&&Object.isExtensible(t)&&xo(t,"__v_skip",!0),t}const Ve=t=>Te(t)?Pr(t):t,sr=t=>Te(t)?ch(t):t;function qe(t){return t?t.__v_isRef===!0:!1}function zn(t){return uh(t,!1)}function $p(t){return uh(t,!0)}function uh(t,e){return qe(t)?t:new Bp(t,e)}class Bp{constructor(e,n){this.dep=new pa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ge(e),this._value=n?e:Ve(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||gt(e)||Cn(e);e=i?e:ge(e),Tn(e,n)&&(this._rawValue=e,this._value=i?e:Ve(e),this.dep.trigger())}}function en(t){return qe(t)?t.value:t}const Hp={get:(t,e,n)=>e==="__v_raw"?t:en(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return qe(s)&&!qe(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function hh(t){return gi(t)?t:new Proxy(t,Hp)}class Wp{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new pa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=os-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ie!==this)return Xu(this,!0),!0}get value(){const e=this.dep.track();return Zu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Gp(t,e,n=!1){let i,s;return ie(t)?i=t:(i=t.get,s=t.set),new Wp(i,s,n)}const Hs={},rr=new WeakMap;let Fn;function zp(t,e=!1,n=Fn){if(n){let i=rr.get(n);i||rr.set(n,i=[]),i.push(t)}}function qp(t,e,n=be){const{immediate:i,deep:s,once:o,scheduler:a,augmentJob:c,call:u}=n,f=B=>s?B:gt(B)||s===!1||s===0?wn(B,1):wn(B);let d,g,w,A,N=!1,M=!1;if(qe(t)?(g=()=>t.value,N=gt(t)):gi(t)?(g=()=>f(t),N=!0):te(t)?(M=!0,N=t.some(B=>gi(B)||gt(B)),g=()=>t.map(B=>{if(qe(B))return B.value;if(gi(B))return f(B);if(ie(B))return u?u(B,2):B()})):ie(t)?e?g=u?()=>u(t,2):t:g=()=>{if(w){tn();try{w()}finally{nn()}}const B=Fn;Fn=d;try{return u?u(t,3,[A]):t(A)}finally{Fn=B}}:g=Ft,e&&s){const B=g,se=s===!0?1/0:s;g=()=>wn(B(),se)}const q=Ip(),K=()=>{d.stop(),q&&q.active&&aa(q.effects,d)};if(o&&e){const B=e;e=(...se)=>{B(...se),K()}}let V=M?new Array(t.length).fill(Hs):Hs;const $=B=>{if(!(!(d.flags&1)||!d.dirty&&!B))if(e){const se=d.run();if(s||N||(M?se.some((re,S)=>Tn(re,V[S])):Tn(se,V))){w&&w();const re=Fn;Fn=d;try{const S=[se,V===Hs?void 0:M&&V[0]===Hs?[]:V,A];V=se,u?u(e,3,S):e(...S)}finally{Fn=re}}}else d.run()};return c&&c($),d=new Ku(g),d.scheduler=a?()=>a($,!1):$,A=B=>zp(B,!1,d),w=d.onStop=()=>{const B=rr.get(d);if(B){if(u)u(B,4);else for(const se of B)se();rr.delete(d)}},e?i?$(!0):V=d.run():a?a($.bind(null,!0),!0):d.run(),K.pause=d.pause.bind(d),K.resume=d.resume.bind(d),K.stop=K,K}function wn(t,e=1/0,n){if(e<=0||!Te(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,qe(t))wn(t.value,e,n);else if(te(t))for(let i=0;i<t.length;i++)wn(t[i],e,n);else if($u(t)||pi(t))t.forEach(i=>{wn(i,e,n)});else if(Wu(t)){for(const i in t)wn(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&wn(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vs(t,e,n,i){try{return i?t(...i):t()}catch(s){kr(s,e,n)}}function Ct(t,e,n,i){if(ie(t)){const s=vs(t,e,n,i);return s&&Bu(s)&&s.catch(o=>{kr(o,e,n)}),s}if(te(t)){const s=[];for(let o=0;o<t.length;o++)s.push(Ct(t[o],e,n,i));return s}}function kr(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||be;if(e){let c=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](t,u,f)===!1)return}c=c.parent}if(o){tn(),vs(o,null,10,[t,u,f]),nn();return}}Kp(t,n,s,i,a)}function Kp(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const Ye=[];let Dt=-1;const mi=[];let mn=null,hi=0;const fh=Promise.resolve();let or=null;function dh(t){const e=or||fh;return t?e.then(this?t.bind(this):t):e}function Jp(t){let e=Dt+1,n=Ye.length;for(;e<n;){const i=e+n>>>1,s=Ye[i],o=ls(s);o<t||o===t&&s.flags&2?e=i+1:n=i}return e}function va(t){if(!(t.flags&1)){const e=ls(t),n=Ye[Ye.length-1];!n||!(t.flags&2)&&e>=ls(n)?Ye.push(t):Ye.splice(Jp(e),0,t),t.flags|=1,ph()}}function ph(){or||(or=fh.then(mh))}function Xp(t){te(t)?mi.push(...t):mn&&t.id===-1?mn.splice(hi+1,0,t):t.flags&1||(mi.push(t),t.flags|=1),ph()}function Wl(t,e,n=Dt+1){for(;n<Ye.length;n++){const i=Ye[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Ye.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function gh(t){if(mi.length){const e=[...new Set(mi)].sort((n,i)=>ls(n)-ls(i));if(mi.length=0,mn){mn.push(...e);return}for(mn=e,hi=0;hi<mn.length;hi++){const n=mn[hi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}mn=null,hi=0}}const ls=t=>t.id==null?t.flags&2?-1:1/0:t.id;function mh(t){try{for(Dt=0;Dt<Ye.length;Dt++){const e=Ye[Dt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Dt<Ye.length;Dt++){const e=Ye[Dt];e&&(e.flags&=-2)}Dt=-1,Ye.length=0,gh(),or=null,(Ye.length||mi.length)&&mh()}}let pt=null,_h=null;function ar(t){const e=pt;return pt=t,_h=t&&t.type.__scopeId||null,e}function ya(t,e=pt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&nc(-1);const o=ar(e);let a;try{a=t(...s)}finally{ar(o),i._d&&nc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function xn(t,e,n,i){const s=t.dirs,o=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];o&&(c.oldValue=o[a].value);let u=c.dir[i];u&&(tn(),Ct(u,n,8,[t.el,c,t,e]),nn())}}const Yp=Symbol("_vte"),vh=t=>t.__isTeleport,_n=Symbol("_leaveCb"),Ws=Symbol("_enterCb");function Qp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Dr(()=>{t.isMounted=!0}),wa(()=>{t.isUnmounting=!0}),t}const ht=[Function,Array],yh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ht,onEnter:ht,onAfterEnter:ht,onEnterCancelled:ht,onBeforeLeave:ht,onLeave:ht,onAfterLeave:ht,onLeaveCancelled:ht,onBeforeAppear:ht,onAppear:ht,onAfterAppear:ht,onAppearCancelled:ht},wh=t=>{const e=t.subTree;return e.component?wh(e.component):e},Zp={name:"BaseTransition",props:yh,setup(t,{slots:e}){const n=Yg(),i=Qp();return()=>{const s=e.default&&Eh(e.default(),!0);if(!s||!s.length)return;const o=Ih(s),a=ge(t),{mode:c}=a;if(i.isLeaving)return po(o);const u=Gl(o);if(!u)return po(o);let f=jo(u,a,i,n,g=>f=g);u.type!==Qe&&cs(u,f);let d=n.subTree&&Gl(n.subTree);if(d&&d.type!==Qe&&!Vn(u,d)&&wh(n).type!==Qe){let g=jo(d,a,i,n);if(cs(d,g),c==="out-in"&&u.type!==Qe)return i.isLeaving=!0,g.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete g.afterLeave,d=void 0},po(o);c==="in-out"&&u.type!==Qe?g.delayLeave=(w,A,N)=>{const M=bh(i,d);M[String(d.key)]=d,w[_n]=()=>{A(),w[_n]=void 0,delete f.delayedLeave,d=void 0},f.delayedLeave=()=>{N(),delete f.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return o}}};function Ih(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Qe){e=n;break}}return e}const eg=Zp;function bh(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function jo(t,e,n,i,s){const{appear:o,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:f,onAfterEnter:d,onEnterCancelled:g,onBeforeLeave:w,onLeave:A,onAfterLeave:N,onLeaveCancelled:M,onBeforeAppear:q,onAppear:K,onAfterAppear:V,onAppearCancelled:$}=e,B=String(t.key),se=bh(n,t),re=(m,E)=>{m&&Ct(m,i,9,E)},S=(m,E)=>{const T=E[1];re(m,E),te(m)?m.every(b=>b.length<=1)&&T():m.length<=1&&T()},_={mode:a,persisted:c,beforeEnter(m){let E=u;if(!n.isMounted)if(o)E=q||u;else return;m[_n]&&m[_n](!0);const T=se[B];T&&Vn(t,T)&&T.el[_n]&&T.el[_n](),re(E,[m])},enter(m){let E=f,T=d,b=g;if(!n.isMounted)if(o)E=K||f,T=V||d,b=$||g;else return;let y=!1;const ye=m[Ws]=Ne=>{y||(y=!0,Ne?re(b,[m]):re(T,[m]),_.delayedLeave&&_.delayedLeave(),m[Ws]=void 0)};E?S(E,[m,ye]):ye()},leave(m,E){const T=String(t.key);if(m[Ws]&&m[Ws](!0),n.isUnmounting)return E();re(w,[m]);let b=!1;const y=m[_n]=ye=>{b||(b=!0,E(),ye?re(M,[m]):re(N,[m]),m[_n]=void 0,se[T]===t&&delete se[T])};se[T]=t,A?S(A,[m,y]):y()},clone(m){const E=jo(m,e,n,i,s);return s&&s(E),E}};return _}function po(t){if(Or(t))return t=Rn(t),t.children=null,t}function Gl(t){if(!Or(t))return vh(t.type)&&t.children?Ih(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ie(n.default))return n.default()}}function cs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,cs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Eh(t,e=!1,n){let i=[],s=0;for(let o=0;o<t.length;o++){let a=t[o];const c=n==null?a.key:String(n)+String(a.key!=null?a.key:o);a.type===ft?(a.patchFlag&128&&s++,i=i.concat(Eh(a.children,e,c))):(e||a.type!==Qe)&&i.push(c!=null?Rn(a,{key:c}):a)}if(s>1)for(let o=0;o<i.length;o++)i[o].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Th(t,e){return ie(t)?Le({name:t.name},e,{setup:t}):t}function Sh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ki(t,e,n,i,s=!1){if(te(t)){t.forEach((N,M)=>Ki(N,e&&(te(e)?e[M]:e),n,i,s));return}if(Ji(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ki(t,e,n,i.component.subTree);return}const o=i.shapeFlag&4?Ta(i.component):i.el,a=s?null:o,{i:c,r:u}=t,f=e&&e.r,d=c.refs===be?c.refs={}:c.refs,g=c.setupState,w=ge(g),A=g===be?()=>!1:N=>_e(w,N);if(f!=null&&f!==u&&(ke(f)?(d[f]=null,A(f)&&(g[f]=null)):qe(f)&&(f.value=null)),ie(u))vs(u,c,12,[a,d]);else{const N=ke(u),M=qe(u);if(N||M){const q=()=>{if(t.f){const K=N?A(u)?g[u]:d[u]:u.value;s?te(K)&&aa(K,o):te(K)?K.includes(o)||K.push(o):N?(d[u]=[o],A(u)&&(g[u]=d[u])):(u.value=[o],t.k&&(d[t.k]=u.value))}else N?(d[u]=a,A(u)&&(g[u]=a)):M&&(u.value=a,t.k&&(d[t.k]=a))};a?(q.id=-1,st(q,n)):q()}}}Cr().requestIdleCallback;Cr().cancelIdleCallback;const Ji=t=>!!t.type.__asyncLoader,Or=t=>t.type.__isKeepAlive;function tg(t,e){Ah(t,"a",e)}function ng(t,e){Ah(t,"da",e)}function Ah(t,e,n=Be){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Nr(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Or(s.parent.vnode)&&ig(i,e,n,s),s=s.parent}}function ig(t,e,n,i){const s=Nr(e,t,i,!0);Ch(()=>{aa(i[e],s)},n)}function Nr(t,e,n=Be,i=!1){if(n){const s=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...a)=>{tn();const c=ys(n),u=Ct(e,n,t,a);return c(),nn(),u});return i?s.unshift(o):s.push(o),o}}const on=t=>(e,n=Be)=>{(!hs||t==="sp")&&Nr(t,(...i)=>e(...i),n)},sg=on("bm"),Dr=on("m"),rg=on("bu"),og=on("u"),wa=on("bum"),Ch=on("um"),ag=on("sp"),lg=on("rtg"),cg=on("rtc");function ug(t,e=Be){Nr("ec",t,e)}const hg="components";function Rh(t,e){return dg(hg,t,!0,e)||t}const fg=Symbol.for("v-ndc");function dg(t,e,n=!0,i=!1){const s=pt||Be;if(s){const o=s.type;{const c=nm(o,!1);if(c&&(c===e||c===_t(e)||c===Ar(_t(e))))return o}const a=zl(s[t]||o[t],e)||zl(s.appContext[t],e);return!a&&i?o:a}}function zl(t,e){return t&&(t[e]||t[_t(e)]||t[Ar(_t(e))])}function ql(t,e,n,i){let s;const o=n,a=te(t);if(a||ke(t)){const c=a&&gi(t);let u=!1,f=!1;c&&(u=!gt(t),f=Cn(t),t=Rr(t)),s=new Array(t.length);for(let d=0,g=t.length;d<g;d++)s[d]=e(u?f?sr(Ve(t[d])):Ve(t[d]):t[d],d,void 0,o)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,o)}else if(Te(t))if(t[Symbol.iterator])s=Array.from(t,(c,u)=>e(c,u,void 0,o));else{const c=Object.keys(t);s=new Array(c.length);for(let u=0,f=c.length;u<f;u++){const d=c[u];s[u]=e(t[d],d,u,o)}}else s=[];return s}const Vo=t=>t?Jh(t)?Ta(t):Vo(t.parent):null,Xi=Le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Vo(t.parent),$root:t=>Vo(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>kh(t),$forceUpdate:t=>t.f||(t.f=()=>{va(t.update)}),$nextTick:t=>t.n||(t.n=dh.bind(t.proxy)),$watch:t=>xg.bind(t)}),go=(t,e)=>t!==be&&!t.__isScriptSetup&&_e(t,e),pg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:o,accessCache:a,type:c,appContext:u}=t;let f;if(e[0]!=="$"){const A=a[e];if(A!==void 0)switch(A){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return o[e]}else{if(go(i,e))return a[e]=1,i[e];if(s!==be&&_e(s,e))return a[e]=2,s[e];if((f=t.propsOptions[0])&&_e(f,e))return a[e]=3,o[e];if(n!==be&&_e(n,e))return a[e]=4,n[e];$o&&(a[e]=0)}}const d=Xi[e];let g,w;if(d)return e==="$attrs"&&ze(t.attrs,"get",""),d(t);if((g=c.__cssModules)&&(g=g[e]))return g;if(n!==be&&_e(n,e))return a[e]=4,n[e];if(w=u.config.globalProperties,_e(w,e))return w[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:o}=t;return go(s,e)?(s[e]=n,!0):i!==be&&_e(i,e)?(i[e]=n,!0):_e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==be&&_e(t,a)||go(e,a)||(c=o[0])&&_e(c,a)||_e(i,a)||_e(Xi,a)||_e(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Kl(t){return te(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let $o=!0;function gg(t){const e=kh(t),n=t.proxy,i=t.ctx;$o=!1,e.beforeCreate&&Jl(e.beforeCreate,t,"bc");const{data:s,computed:o,methods:a,watch:c,provide:u,inject:f,created:d,beforeMount:g,mounted:w,beforeUpdate:A,updated:N,activated:M,deactivated:q,beforeDestroy:K,beforeUnmount:V,destroyed:$,unmounted:B,render:se,renderTracked:re,renderTriggered:S,errorCaptured:_,serverPrefetch:m,expose:E,inheritAttrs:T,components:b,directives:y,filters:ye}=e;if(f&&mg(f,i,null),a)for(const le in a){const ae=a[le];ie(ae)&&(i[le]=ae.bind(n))}if(s){const le=s.call(n,n);Te(le)&&(t.data=Pr(le))}if($o=!0,o)for(const le in o){const ae=o[le],it=ie(ae)?ae.bind(n,n):ie(ae.get)?ae.get.bind(n,n):Ft,vt=!ie(ae)&&ie(ae.set)?ae.set.bind(n):Ft,at=dt({get:it,set:vt});Object.defineProperty(i,le,{enumerable:!0,configurable:!0,get:()=>at.value,set:Ce=>at.value=Ce})}if(c)for(const le in c)Ph(c[le],i,n,le);if(u){const le=ie(u)?u.call(n):u;Reflect.ownKeys(le).forEach(ae=>{Ks(ae,le[ae])})}d&&Jl(d,t,"c");function Ae(le,ae){te(ae)?ae.forEach(it=>le(it.bind(n))):ae&&le(ae.bind(n))}if(Ae(sg,g),Ae(Dr,w),Ae(rg,A),Ae(og,N),Ae(tg,M),Ae(ng,q),Ae(ug,_),Ae(cg,re),Ae(lg,S),Ae(wa,V),Ae(Ch,B),Ae(ag,m),te(E))if(E.length){const le=t.exposed||(t.exposed={});E.forEach(ae=>{Object.defineProperty(le,ae,{get:()=>n[ae],set:it=>n[ae]=it})})}else t.exposed||(t.exposed={});se&&t.render===Ft&&(t.render=se),T!=null&&(t.inheritAttrs=T),b&&(t.components=b),y&&(t.directives=y),m&&Sh(t)}function mg(t,e,n=Ft){te(t)&&(t=Bo(t));for(const i in t){const s=t[i];let o;Te(s)?"default"in s?o=jt(s.from||i,s.default,!0):o=jt(s.from||i):o=jt(s),qe(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Jl(t,e,n){Ct(te(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ph(t,e,n,i){let s=i.includes(".")?Hh(n,i):()=>n[i];if(ke(t)){const o=e[t];ie(o)&&Js(s,o)}else if(ie(t))Js(s,t.bind(n));else if(Te(t))if(te(t))t.forEach(o=>Ph(o,e,n,i));else{const o=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(o)&&Js(s,o,t)}}function kh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:!s.length&&!n&&!i?u=e:(u={},s.length&&s.forEach(f=>lr(u,f,a,!0)),lr(u,e,a)),Te(e)&&o.set(e,u),u}function lr(t,e,n,i=!1){const{mixins:s,extends:o}=e;o&&lr(t,o,n,!0),s&&s.forEach(a=>lr(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const c=_g[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const _g={data:Xl,props:Yl,emits:Yl,methods:Wi,computed:Wi,beforeCreate:Je,created:Je,beforeMount:Je,mounted:Je,beforeUpdate:Je,updated:Je,beforeDestroy:Je,beforeUnmount:Je,destroyed:Je,unmounted:Je,activated:Je,deactivated:Je,errorCaptured:Je,serverPrefetch:Je,components:Wi,directives:Wi,watch:yg,provide:Xl,inject:vg};function Xl(t,e){return e?t?function(){return Le(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function vg(t,e){return Wi(Bo(t),Bo(e))}function Bo(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Je(t,e){return t?[...new Set([].concat(t,e))]:e}function Wi(t,e){return t?Le(Object.create(null),t,e):e}function Yl(t,e){return t?te(t)&&te(e)?[...new Set([...t,...e])]:Le(Object.create(null),Kl(t),Kl(e??{})):e}function yg(t,e){if(!t)return e;if(!e)return t;const n=Le(Object.create(null),t);for(const i in e)n[i]=Je(t[i],e[i]);return n}function Oh(){return{app:null,config:{isNativeTag:ap,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wg=0;function Ig(t,e){return function(i,s=null){ie(i)||(i=Le({},i)),s!=null&&!Te(s)&&(s=null);const o=Oh(),a=new WeakSet,c=[];let u=!1;const f=o.app={_uid:wg++,_component:i,_props:s,_container:null,_context:o,_instance:null,version:sm,get config(){return o.config},set config(d){},use(d,...g){return a.has(d)||(d&&ie(d.install)?(a.add(d),d.install(f,...g)):ie(d)&&(a.add(d),d(f,...g))),f},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),f},component(d,g){return g?(o.components[d]=g,f):o.components[d]},directive(d,g){return g?(o.directives[d]=g,f):o.directives[d]},mount(d,g,w){if(!u){const A=f._ceVNode||De(i,s);return A.appContext=o,w===!0?w="svg":w===!1&&(w=void 0),t(A,d,w),u=!0,f._container=d,d.__vue_app__=f,Ta(A.component)}},onUnmount(d){c.push(d)},unmount(){u&&(Ct(c,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(d,g){return o.provides[d]=g,f},runWithContext(d){const g=_i;_i=f;try{return d()}finally{_i=g}}};return f}}let _i=null;function Ks(t,e){if(Be){let n=Be.provides;const i=Be.parent&&Be.parent.provides;i===n&&(n=Be.provides=Object.create(i)),n[t]=e}}function jt(t,e,n=!1){const i=Be||pt;if(i||_i){let s=_i?_i._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(i&&i.proxy):e}}const Nh={},Dh=()=>Object.create(Nh),xh=t=>Object.getPrototypeOf(t)===Nh;function bg(t,e,n,i=!1){const s={},o=Dh();t.propsDefaults=Object.create(null),Lh(t,e,s,o);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=i?s:lh(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function Eg(t,e,n,i){const{props:s,attrs:o,vnode:{patchFlag:a}}=t,c=ge(s),[u]=t.propsOptions;let f=!1;if((i||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let g=0;g<d.length;g++){let w=d[g];if(xr(t.emitsOptions,w))continue;const A=e[w];if(u)if(_e(o,w))A!==o[w]&&(o[w]=A,f=!0);else{const N=_t(w);s[N]=Ho(u,c,N,A,t,!1)}else A!==o[w]&&(o[w]=A,f=!0)}}}else{Lh(t,e,s,o)&&(f=!0);let d;for(const g in c)(!e||!_e(e,g)&&((d=ti(g))===g||!_e(e,d)))&&(u?n&&(n[g]!==void 0||n[d]!==void 0)&&(s[g]=Ho(u,c,g,void 0,t,!0)):delete s[g]);if(o!==c)for(const g in o)(!e||!_e(e,g))&&(delete o[g],f=!0)}f&&Jt(t.attrs,"set","")}function Lh(t,e,n,i){const[s,o]=t.propsOptions;let a=!1,c;if(e)for(let u in e){if(Gi(u))continue;const f=e[u];let d;s&&_e(s,d=_t(u))?!o||!o.includes(d)?n[d]=f:(c||(c={}))[d]=f:xr(t.emitsOptions,u)||(!(u in i)||f!==i[u])&&(i[u]=f,a=!0)}if(o){const u=ge(n),f=c||be;for(let d=0;d<o.length;d++){const g=o[d];n[g]=Ho(s,u,g,f[g],t,!_e(f,g))}}return a}function Ho(t,e,n,i,s,o){const a=t[n];if(a!=null){const c=_e(a,"default");if(c&&i===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&ie(u)){const{propsDefaults:f}=s;if(n in f)i=f[n];else{const d=ys(s);i=f[n]=u.call(null,e),d()}}else i=u;s.ce&&s.ce._setProp(n,i)}a[0]&&(o&&!c?i=!1:a[1]&&(i===""||i===ti(n))&&(i=!0))}return i}const Tg=new WeakMap;function Mh(t,e,n=!1){const i=n?Tg:e.propsCache,s=i.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!ie(t)){const d=g=>{u=!0;const[w,A]=Mh(g,e,!0);Le(a,w),A&&c.push(...A)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!o&&!u)return Te(t)&&i.set(t,di),di;if(te(o))for(let d=0;d<o.length;d++){const g=_t(o[d]);Ql(g)&&(a[g]=be)}else if(o)for(const d in o){const g=_t(d);if(Ql(g)){const w=o[d],A=a[g]=te(w)||ie(w)?{type:w}:Le({},w),N=A.type;let M=!1,q=!0;if(te(N))for(let K=0;K<N.length;++K){const V=N[K],$=ie(V)&&V.name;if($==="Boolean"){M=!0;break}else $==="String"&&(q=!1)}else M=ie(N)&&N.name==="Boolean";A[0]=M,A[1]=q,(M||_e(A,"default"))&&c.push(g)}}const f=[a,c];return Te(t)&&i.set(t,f),f}function Ql(t){return t[0]!=="$"&&!Gi(t)}const Ia=t=>t[0]==="_"||t==="$stable",ba=t=>te(t)?t.map(Lt):[Lt(t)],Sg=(t,e,n)=>{if(e._n)return e;const i=ya((...s)=>ba(e(...s)),n);return i._c=!1,i},Uh=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Ia(s))continue;const o=t[s];if(ie(o))e[s]=Sg(s,o,i);else if(o!=null){const a=ba(o);e[s]=()=>a}}},Fh=(t,e)=>{const n=ba(e);t.slots.default=()=>n},jh=(t,e,n)=>{for(const i in e)(n||!Ia(i))&&(t[i]=e[i])},Ag=(t,e,n)=>{const i=t.slots=Dh();if(t.vnode.shapeFlag&32){const s=e.__;s&&xo(i,"__",s,!0);const o=e._;o?(jh(i,e,n),n&&xo(i,"_",o,!0)):Uh(e,i)}else e&&Fh(t,e)},Cg=(t,e,n)=>{const{vnode:i,slots:s}=t;let o=!0,a=be;if(i.shapeFlag&32){const c=e._;c?n&&c===1?o=!1:jh(s,e,n):(o=!e.$stable,Uh(e,s)),a=e}else e&&(Fh(t,e),a={default:1});if(o)for(const c in s)!Ia(c)&&a[c]==null&&delete s[c]},st=$g;function Rg(t){return Pg(t)}function Pg(t,e){const n=Cr();n.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:a,createText:c,createComment:u,setText:f,setElementText:d,parentNode:g,nextSibling:w,setScopeId:A=Ft,insertStaticContent:N}=t,M=(v,I,C,O=null,x=null,D=null,G=void 0,F=null,U=!!I.dynamicChildren)=>{if(v===I)return;v&&!Vn(v,I)&&(O=k(v),Ce(v,x,D,!0),v=null),I.patchFlag===-2&&(U=!1,I.dynamicChildren=null);const{type:L,ref:Q,shapeFlag:H}=I;switch(L){case Lr:q(v,I,C,O);break;case Qe:K(v,I,C,O);break;case Xs:v==null&&V(I,C,O,G);break;case ft:b(v,I,C,O,x,D,G,F,U);break;default:H&1?se(v,I,C,O,x,D,G,F,U):H&6?y(v,I,C,O,x,D,G,F,U):(H&64||H&128)&&L.process(v,I,C,O,x,D,G,F,U,X)}Q!=null&&x?Ki(Q,v&&v.ref,D,I||v,!I):Q==null&&v&&v.ref!=null&&Ki(v.ref,null,D,v,!0)},q=(v,I,C,O)=>{if(v==null)i(I.el=c(I.children),C,O);else{const x=I.el=v.el;I.children!==v.children&&f(x,I.children)}},K=(v,I,C,O)=>{v==null?i(I.el=u(I.children||""),C,O):I.el=v.el},V=(v,I,C,O)=>{[v.el,v.anchor]=N(v.children,I,C,O,v.el,v.anchor)},$=({el:v,anchor:I},C,O)=>{let x;for(;v&&v!==I;)x=w(v),i(v,C,O),v=x;i(I,C,O)},B=({el:v,anchor:I})=>{let C;for(;v&&v!==I;)C=w(v),s(v),v=C;s(I)},se=(v,I,C,O,x,D,G,F,U)=>{I.type==="svg"?G="svg":I.type==="math"&&(G="mathml"),v==null?re(I,C,O,x,D,G,F,U):m(v,I,x,D,G,F,U)},re=(v,I,C,O,x,D,G,F)=>{let U,L;const{props:Q,shapeFlag:H,transition:Y,dirs:ee}=v;if(U=v.el=a(v.type,D,Q&&Q.is,Q),H&8?d(U,v.children):H&16&&_(v.children,U,null,O,x,mo(v,D),G,F),ee&&xn(v,null,O,"created"),S(U,v,v.scopeId,G,O),Q){for(const oe in Q)oe!=="value"&&!Gi(oe)&&o(U,oe,null,Q[oe],D,O);"value"in Q&&o(U,"value",null,Q.value,D),(L=Q.onVnodeBeforeMount)&&Nt(L,O,v)}ee&&xn(v,null,O,"beforeMount");const Z=kg(x,Y);Z&&Y.beforeEnter(U),i(U,I,C),((L=Q&&Q.onVnodeMounted)||Z||ee)&&st(()=>{L&&Nt(L,O,v),Z&&Y.enter(U),ee&&xn(v,null,O,"mounted")},x)},S=(v,I,C,O,x)=>{if(C&&A(v,C),O)for(let D=0;D<O.length;D++)A(v,O[D]);if(x){let D=x.subTree;if(I===D||Gh(D.type)&&(D.ssContent===I||D.ssFallback===I)){const G=x.vnode;S(v,G,G.scopeId,G.slotScopeIds,x.parent)}}},_=(v,I,C,O,x,D,G,F,U=0)=>{for(let L=U;L<v.length;L++){const Q=v[L]=F?vn(v[L]):Lt(v[L]);M(null,Q,I,C,O,x,D,G,F)}},m=(v,I,C,O,x,D,G)=>{const F=I.el=v.el;let{patchFlag:U,dynamicChildren:L,dirs:Q}=I;U|=v.patchFlag&16;const H=v.props||be,Y=I.props||be;let ee;if(C&&Ln(C,!1),(ee=Y.onVnodeBeforeUpdate)&&Nt(ee,C,I,v),Q&&xn(I,v,C,"beforeUpdate"),C&&Ln(C,!0),(H.innerHTML&&Y.innerHTML==null||H.textContent&&Y.textContent==null)&&d(F,""),L?E(v.dynamicChildren,L,F,C,O,mo(I,x),D):G||ae(v,I,F,null,C,O,mo(I,x),D,!1),U>0){if(U&16)T(F,H,Y,C,x);else if(U&2&&H.class!==Y.class&&o(F,"class",null,Y.class,x),U&4&&o(F,"style",H.style,Y.style,x),U&8){const Z=I.dynamicProps;for(let oe=0;oe<Z.length;oe++){const ce=Z[oe],Me=H[ce],Ue=Y[ce];(Ue!==Me||ce==="value")&&o(F,ce,Me,Ue,x,C)}}U&1&&v.children!==I.children&&d(F,I.children)}else!G&&L==null&&T(F,H,Y,C,x);((ee=Y.onVnodeUpdated)||Q)&&st(()=>{ee&&Nt(ee,C,I,v),Q&&xn(I,v,C,"updated")},O)},E=(v,I,C,O,x,D,G)=>{for(let F=0;F<I.length;F++){const U=v[F],L=I[F],Q=U.el&&(U.type===ft||!Vn(U,L)||U.shapeFlag&198)?g(U.el):C;M(U,L,Q,null,O,x,D,G,!0)}},T=(v,I,C,O,x)=>{if(I!==C){if(I!==be)for(const D in I)!Gi(D)&&!(D in C)&&o(v,D,I[D],null,x,O);for(const D in C){if(Gi(D))continue;const G=C[D],F=I[D];G!==F&&D!=="value"&&o(v,D,F,G,x,O)}"value"in C&&o(v,"value",I.value,C.value,x)}},b=(v,I,C,O,x,D,G,F,U)=>{const L=I.el=v?v.el:c(""),Q=I.anchor=v?v.anchor:c("");let{patchFlag:H,dynamicChildren:Y,slotScopeIds:ee}=I;ee&&(F=F?F.concat(ee):ee),v==null?(i(L,C,O),i(Q,C,O),_(I.children||[],C,Q,x,D,G,F,U)):H>0&&H&64&&Y&&v.dynamicChildren?(E(v.dynamicChildren,Y,C,x,D,G,F),(I.key!=null||x&&I===x.subTree)&&Vh(v,I,!0)):ae(v,I,C,Q,x,D,G,F,U)},y=(v,I,C,O,x,D,G,F,U)=>{I.slotScopeIds=F,v==null?I.shapeFlag&512?x.ctx.activate(I,C,O,G,U):ye(I,C,O,x,D,G,U):Ne(v,I,U)},ye=(v,I,C,O,x,D,G)=>{const F=v.component=Xg(v,O,x);if(Or(v)&&(F.ctx.renderer=X),Qg(F,!1,G),F.asyncDep){if(x&&x.registerDep(F,Ae,G),!v.el){const U=F.subTree=De(Qe);K(null,U,I,C)}}else Ae(F,v,I,C,x,D,G)},Ne=(v,I,C)=>{const O=I.component=v.component;if(jg(v,I,C))if(O.asyncDep&&!O.asyncResolved){le(O,I,C);return}else O.next=I,O.update();else I.el=v.el,O.vnode=I},Ae=(v,I,C,O,x,D,G)=>{const F=()=>{if(v.isMounted){let{next:H,bu:Y,u:ee,parent:Z,vnode:oe}=v;{const He=$h(v);if(He){H&&(H.el=oe.el,le(v,H,G)),He.asyncDep.then(()=>{v.isUnmounted||F()});return}}let ce=H,Me;Ln(v,!1),H?(H.el=oe.el,le(v,H,G)):H=oe,Y&&lo(Y),(Me=H.props&&H.props.onVnodeBeforeUpdate)&&Nt(Me,Z,H,oe),Ln(v,!0);const Ue=ec(v),lt=v.subTree;v.subTree=Ue,M(lt,Ue,g(lt.el),k(lt),v,x,D),H.el=Ue.el,ce===null&&Vg(v,Ue.el),ee&&st(ee,x),(Me=H.props&&H.props.onVnodeUpdated)&&st(()=>Nt(Me,Z,H,oe),x)}else{let H;const{el:Y,props:ee}=I,{bm:Z,m:oe,parent:ce,root:Me,type:Ue}=v,lt=Ji(I);Ln(v,!1),Z&&lo(Z),!lt&&(H=ee&&ee.onVnodeBeforeMount)&&Nt(H,ce,I),Ln(v,!0);{Me.ce&&Me.ce._def.shadowRoot!==!1&&Me.ce._injectChildStyle(Ue);const He=v.subTree=ec(v);M(null,He,C,O,v,x,D),I.el=He.el}if(oe&&st(oe,x),!lt&&(H=ee&&ee.onVnodeMounted)){const He=I;st(()=>Nt(H,ce,He),x)}(I.shapeFlag&256||ce&&Ji(ce.vnode)&&ce.vnode.shapeFlag&256)&&v.a&&st(v.a,x),v.isMounted=!0,I=C=O=null}};v.scope.on();const U=v.effect=new Ku(F);v.scope.off();const L=v.update=U.run.bind(U),Q=v.job=U.runIfDirty.bind(U);Q.i=v,Q.id=v.uid,U.scheduler=()=>va(Q),Ln(v,!0),L()},le=(v,I,C)=>{I.component=v;const O=v.vnode.props;v.vnode=I,v.next=null,Eg(v,I.props,O,C),Cg(v,I.children,C),tn(),Wl(v),nn()},ae=(v,I,C,O,x,D,G,F,U=!1)=>{const L=v&&v.children,Q=v?v.shapeFlag:0,H=I.children,{patchFlag:Y,shapeFlag:ee}=I;if(Y>0){if(Y&128){vt(L,H,C,O,x,D,G,F,U);return}else if(Y&256){it(L,H,C,O,x,D,G,F,U);return}}ee&8?(Q&16&&et(L,x,D),H!==L&&d(C,H)):Q&16?ee&16?vt(L,H,C,O,x,D,G,F,U):et(L,x,D,!0):(Q&8&&d(C,""),ee&16&&_(H,C,O,x,D,G,F,U))},it=(v,I,C,O,x,D,G,F,U)=>{v=v||di,I=I||di;const L=v.length,Q=I.length,H=Math.min(L,Q);let Y;for(Y=0;Y<H;Y++){const ee=I[Y]=U?vn(I[Y]):Lt(I[Y]);M(v[Y],ee,C,null,x,D,G,F,U)}L>Q?et(v,x,D,!0,!1,H):_(I,C,O,x,D,G,F,U,H)},vt=(v,I,C,O,x,D,G,F,U)=>{let L=0;const Q=I.length;let H=v.length-1,Y=Q-1;for(;L<=H&&L<=Y;){const ee=v[L],Z=I[L]=U?vn(I[L]):Lt(I[L]);if(Vn(ee,Z))M(ee,Z,C,null,x,D,G,F,U);else break;L++}for(;L<=H&&L<=Y;){const ee=v[H],Z=I[Y]=U?vn(I[Y]):Lt(I[Y]);if(Vn(ee,Z))M(ee,Z,C,null,x,D,G,F,U);else break;H--,Y--}if(L>H){if(L<=Y){const ee=Y+1,Z=ee<Q?I[ee].el:O;for(;L<=Y;)M(null,I[L]=U?vn(I[L]):Lt(I[L]),C,Z,x,D,G,F,U),L++}}else if(L>Y)for(;L<=H;)Ce(v[L],x,D,!0),L++;else{const ee=L,Z=L,oe=new Map;for(L=Z;L<=Y;L++){const Fe=I[L]=U?vn(I[L]):Lt(I[L]);Fe.key!=null&&oe.set(Fe.key,L)}let ce,Me=0;const Ue=Y-Z+1;let lt=!1,He=0;const cn=new Array(Ue);for(L=0;L<Ue;L++)cn[L]=0;for(L=ee;L<=H;L++){const Fe=v[L];if(Me>=Ue){Ce(Fe,x,D,!0);continue}let ct;if(Fe.key!=null)ct=oe.get(Fe.key);else for(ce=Z;ce<=Y;ce++)if(cn[ce-Z]===0&&Vn(Fe,I[ce])){ct=ce;break}ct===void 0?Ce(Fe,x,D,!0):(cn[ct-Z]=L+1,ct>=He?He=ct:lt=!0,M(Fe,I[ct],C,null,x,D,G,F,U),Me++)}const Ri=lt?Og(cn):di;for(ce=Ri.length-1,L=Ue-1;L>=0;L--){const Fe=Z+L,ct=I[Fe],Rs=Fe+1<Q?I[Fe+1].el:O;cn[L]===0?M(null,ct,C,Rs,x,D,G,F,U):lt&&(ce<0||L!==Ri[ce]?at(ct,C,Rs,2):ce--)}}},at=(v,I,C,O,x=null)=>{const{el:D,type:G,transition:F,children:U,shapeFlag:L}=v;if(L&6){at(v.component.subTree,I,C,O);return}if(L&128){v.suspense.move(I,C,O);return}if(L&64){G.move(v,I,C,X);return}if(G===ft){i(D,I,C);for(let H=0;H<U.length;H++)at(U[H],I,C,O);i(v.anchor,I,C);return}if(G===Xs){$(v,I,C);return}if(O!==2&&L&1&&F)if(O===0)F.beforeEnter(D),i(D,I,C),st(()=>F.enter(D),x);else{const{leave:H,delayLeave:Y,afterLeave:ee}=F,Z=()=>{v.ctx.isUnmounted?s(D):i(D,I,C)},oe=()=>{H(D,()=>{Z(),ee&&ee()})};Y?Y(D,Z,oe):oe()}else i(D,I,C)},Ce=(v,I,C,O=!1,x=!1)=>{const{type:D,props:G,ref:F,children:U,dynamicChildren:L,shapeFlag:Q,patchFlag:H,dirs:Y,cacheIndex:ee}=v;if(H===-2&&(x=!1),F!=null&&(tn(),Ki(F,null,C,v,!0),nn()),ee!=null&&(I.renderCache[ee]=void 0),Q&256){I.ctx.deactivate(v);return}const Z=Q&1&&Y,oe=!Ji(v);let ce;if(oe&&(ce=G&&G.onVnodeBeforeUnmount)&&Nt(ce,I,v),Q&6)Ot(v.component,C,O);else{if(Q&128){v.suspense.unmount(C,O);return}Z&&xn(v,null,I,"beforeUnmount"),Q&64?v.type.remove(v,I,C,X,O):L&&!L.hasOnce&&(D!==ft||H>0&&H&64)?et(L,I,C,!1,!0):(D===ft&&H&384||!x&&Q&16)&&et(U,I,C),O&&Re(v)}(oe&&(ce=G&&G.onVnodeUnmounted)||Z)&&st(()=>{ce&&Nt(ce,I,v),Z&&xn(v,null,I,"unmounted")},C)},Re=v=>{const{type:I,el:C,anchor:O,transition:x}=v;if(I===ft){ln(C,O);return}if(I===Xs){B(v);return}const D=()=>{s(C),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(v.shapeFlag&1&&x&&!x.persisted){const{leave:G,delayLeave:F}=x,U=()=>G(C,D);F?F(v.el,D,U):U()}else D()},ln=(v,I)=>{let C;for(;v!==I;)C=w(v),s(v),v=C;s(I)},Ot=(v,I,C)=>{const{bum:O,scope:x,job:D,subTree:G,um:F,m:U,a:L,parent:Q,slots:{__:H}}=v;Zl(U),Zl(L),O&&lo(O),Q&&te(H)&&H.forEach(Y=>{Q.renderCache[Y]=void 0}),x.stop(),D&&(D.flags|=8,Ce(G,v,I,C)),F&&st(F,I),st(()=>{v.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},et=(v,I,C,O=!1,x=!1,D=0)=>{for(let G=D;G<v.length;G++)Ce(v[G],I,C,O,x)},k=v=>{if(v.shapeFlag&6)return k(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const I=w(v.anchor||v.el),C=I&&I[Yp];return C?w(C):I};let J=!1;const z=(v,I,C)=>{v==null?I._vnode&&Ce(I._vnode,null,null,!0):M(I._vnode||null,v,I,null,null,null,C),I._vnode=v,J||(J=!0,Wl(),gh(),J=!1)},X={p:M,um:Ce,m:at,r:Re,mt:ye,mc:_,pc:ae,pbc:E,n:k,o:t};return{render:z,hydrate:void 0,createApp:Ig(z)}}function mo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ln({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function kg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Vh(t,e,n=!1){const i=t.children,s=e.children;if(te(i)&&te(s))for(let o=0;o<i.length;o++){const a=i[o];let c=s[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[o]=vn(s[o]),c.el=a.el),!n&&c.patchFlag!==-2&&Vh(a,c)),c.type===Lr&&(c.el=a.el),c.type===Qe&&!c.el&&(c.el=a.el)}}function Og(t){const e=t.slice(),n=[0];let i,s,o,a,c;const u=t.length;for(i=0;i<u;i++){const f=t[i];if(f!==0){if(s=n[n.length-1],t[s]<f){e[i]=s,n.push(i);continue}for(o=0,a=n.length-1;o<a;)c=o+a>>1,t[n[c]]<f?o=c+1:a=c;f<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=e[a];return n}function $h(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$h(e)}function Zl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Ng=Symbol.for("v-scx"),Dg=()=>jt(Ng);function Js(t,e,n){return Bh(t,e,n)}function Bh(t,e,n=be){const{immediate:i,deep:s,flush:o,once:a}=n,c=Le({},n),u=e&&i||!e&&o!=="post";let f;if(hs){if(o==="sync"){const A=Dg();f=A.__watcherHandles||(A.__watcherHandles=[])}else if(!u){const A=()=>{};return A.stop=Ft,A.resume=Ft,A.pause=Ft,A}}const d=Be;c.call=(A,N,M)=>Ct(A,d,N,M);let g=!1;o==="post"?c.scheduler=A=>{st(A,d&&d.suspense)}:o!=="sync"&&(g=!0,c.scheduler=(A,N)=>{N?A():va(A)}),c.augmentJob=A=>{e&&(A.flags|=4),g&&(A.flags|=2,d&&(A.id=d.uid,A.i=d))};const w=qp(t,e,c);return hs&&(f?f.push(w):u&&w()),w}function xg(t,e,n){const i=this.proxy,s=ke(t)?t.includes(".")?Hh(i,t):()=>i[t]:t.bind(i,i);let o;ie(e)?o=e:(o=e.handler,n=e);const a=ys(this),c=Bh(s,o.bind(i),n);return a(),c}function Hh(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const Lg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${_t(e)}Modifiers`]||t[`${ti(e)}Modifiers`];function Mg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||be;let s=n;const o=e.startsWith("update:"),a=o&&Lg(i,e.slice(7));a&&(a.trim&&(s=n.map(d=>ke(d)?d.trim():d)),a.number&&(s=n.map(fp)));let c,u=i[c=ao(e)]||i[c=ao(_t(e))];!u&&o&&(u=i[c=ao(ti(e))]),u&&Ct(u,t,6,s);const f=i[c+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ct(f,t,6,s)}}function Wh(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const o=t.emits;let a={},c=!1;if(!ie(t)){const u=f=>{const d=Wh(f,e,!0);d&&(c=!0,Le(a,d))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!o&&!c?(Te(t)&&i.set(t,null),null):(te(o)?o.forEach(u=>a[u]=null):Le(a,o),Te(t)&&i.set(t,a),a)}function xr(t,e){return!t||!Er(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(t,e[0].toLowerCase()+e.slice(1))||_e(t,ti(e))||_e(t,e))}function ec(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:f,renderCache:d,props:g,data:w,setupState:A,ctx:N,inheritAttrs:M}=t,q=ar(t);let K,V;try{if(n.shapeFlag&4){const B=s||i,se=B;K=Lt(f.call(se,B,d,g,A,w,N)),V=c}else{const B=e;K=Lt(B.length>1?B(g,{attrs:c,slots:a,emit:u}):B(g,null)),V=e.props?c:Ug(c)}}catch(B){Yi.length=0,kr(B,t,1),K=De(Qe)}let $=K;if(V&&M!==!1){const B=Object.keys(V),{shapeFlag:se}=$;B.length&&se&7&&(o&&B.some(oa)&&(V=Fg(V,o)),$=Rn($,V,!1,!0))}return n.dirs&&($=Rn($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&cs($,n.transition),K=$,ar(q),K}const Ug=t=>{let e;for(const n in t)(n==="class"||n==="style"||Er(n))&&((e||(e={}))[n]=t[n]);return e},Fg=(t,e)=>{const n={};for(const i in t)(!oa(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function jg(t,e,n){const{props:i,children:s,component:o}=t,{props:a,children:c,patchFlag:u}=e,f=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return i?tc(i,a,f):!!a;if(u&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const w=d[g];if(a[w]!==i[w]&&!xr(f,w))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:i===a?!1:i?a?tc(i,a,f):!0:!!a;return!1}function tc(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const o=i[s];if(e[o]!==t[o]&&!xr(n,o))return!0}return!1}function Vg({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Gh=t=>t.__isSuspense;function $g(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):Xp(t)}const ft=Symbol.for("v-fgt"),Lr=Symbol.for("v-txt"),Qe=Symbol.for("v-cmt"),Xs=Symbol.for("v-stc"),Yi=[];let rt=null;function xe(t=!1){Yi.push(rt=t?null:[])}function Bg(){Yi.pop(),rt=Yi[Yi.length-1]||null}let us=1;function nc(t,e=!1){us+=t,t<0&&rt&&e&&(rt.hasOnce=!0)}function zh(t){return t.dynamicChildren=us>0?rt||di:null,Bg(),us>0&&rt&&rt.push(t),t}function $e(t,e,n,i,s,o){return zh(W(t,e,n,i,s,o,!0))}function Hg(t,e,n,i,s){return zh(De(t,e,n,i,s,!0))}function cr(t){return t?t.__v_isVNode===!0:!1}function Vn(t,e){return t.type===e.type&&t.key===e.key}const qh=({key:t})=>t??null,Ys=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ke(t)||qe(t)||ie(t)?{i:pt,r:t,k:e,f:!!n}:t:null);function W(t,e=null,n=null,i=0,s=null,o=t===ft?0:1,a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qh(e),ref:e&&Ys(e),scopeId:_h,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:pt};return c?(Ea(u,n),o&128&&t.normalize(u)):n&&(u.shapeFlag|=ke(n)?8:16),us>0&&!a&&rt&&(u.patchFlag>0||o&6)&&u.patchFlag!==32&&rt.push(u),u}const De=Wg;function Wg(t,e=null,n=null,i=0,s=null,o=!1){if((!t||t===fg)&&(t=Qe),cr(t)){const c=Rn(t,e,!0);return n&&Ea(c,n),us>0&&!o&&rt&&(c.shapeFlag&6?rt[rt.indexOf(t)]=c:rt.push(c)),c.patchFlag=-2,c}if(im(t)&&(t=t.__vccOpts),e){e=Gg(e);let{class:c,style:u}=e;c&&!ke(c)&&(e.class=ua(c)),Te(u)&&(_a(u)&&!te(u)&&(u=Le({},u)),e.style=ca(u))}const a=ke(t)?1:Gh(t)?128:vh(t)?64:Te(t)?4:ie(t)?2:0;return W(t,e,n,i,s,a,o,!0)}function Gg(t){return t?_a(t)||xh(t)?Le({},t):t:null}function Rn(t,e,n=!1,i=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:u}=t,f=e?qg(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&qh(f),ref:e&&e.ref?n&&o?te(o)?o.concat(Ys(e)):[o,Ys(e)]:Ys(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ft?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rn(t.ssContent),ssFallback:t.ssFallback&&Rn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&i&&cs(d,u.clone(d)),d}function ur(t=" ",e=0){return De(Lr,null,t,e)}function zg(t,e){const n=De(Xs,null,t);return n.staticCount=e,n}function Kh(t="",e=!1){return e?(xe(),Hg(Qe,null,t)):De(Qe,null,t)}function Lt(t){return t==null||typeof t=="boolean"?De(Qe):te(t)?De(ft,null,t.slice()):cr(t)?vn(t):De(Lr,null,String(t))}function vn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Rn(t)}function Ea(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Ea(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!xh(e)?e._ctx=pt:s===3&&pt&&(pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:pt},n=32):(e=String(e),i&64?(n=16,e=[ur(e)]):n=8);t.children=e,t.shapeFlag|=n}function qg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ua([e.class,i.class]));else if(s==="style")e.style=ca([e.style,i.style]);else if(Er(s)){const o=e[s],a=i[s];a&&o!==a&&!(te(o)&&o.includes(a))&&(e[s]=o?[].concat(o,a):a)}else s!==""&&(e[s]=i[s])}return e}function Nt(t,e,n,i=null){Ct(t,e,7,[n,i])}const Kg=Oh();let Jg=0;function Xg(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Kg,o={uid:Jg++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mh(i,s),emitsOptions:Wh(i,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:i.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Mg.bind(null,o),t.ce&&t.ce(o),o}let Be=null;const Yg=()=>Be||pt;let hr,Wo;{const t=Cr(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),o=>{s.length>1?s.forEach(a=>a(o)):s[0](o)}};hr=e("__VUE_INSTANCE_SETTERS__",n=>Be=n),Wo=e("__VUE_SSR_SETTERS__",n=>hs=n)}const ys=t=>{const e=Be;return hr(t),t.scope.on(),()=>{t.scope.off(),hr(e)}},ic=()=>{Be&&Be.scope.off(),hr(null)};function Jh(t){return t.vnode.shapeFlag&4}let hs=!1;function Qg(t,e=!1,n=!1){e&&Wo(e);const{props:i,children:s}=t.vnode,o=Jh(t);bg(t,i,o,e),Ag(t,s,n||e);const a=o?Zg(t,e):void 0;return e&&Wo(!1),a}function Zg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,pg);const{setup:i}=n;if(i){tn();const s=t.setupContext=i.length>1?tm(t):null,o=ys(t),a=vs(i,t,0,[t.props,s]),c=Bu(a);if(nn(),o(),(c||t.sp)&&!Ji(t)&&Sh(t),c){if(a.then(ic,ic),e)return a.then(u=>{sc(t,u)}).catch(u=>{kr(u,t,0)});t.asyncDep=a}else sc(t,a)}else Xh(t)}function sc(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=hh(e)),Xh(t)}function Xh(t,e,n){const i=t.type;t.render||(t.render=i.render||Ft);{const s=ys(t);tn();try{gg(t)}finally{nn(),s()}}}const em={get(t,e){return ze(t,"get",""),t[e]}};function tm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,em),slots:t.slots,emit:t.emit,expose:e}}function Ta(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(hh(Vp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xi)return Xi[n](t)},has(e,n){return n in e||n in Xi}})):t.proxy}function nm(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function im(t){return ie(t)&&"__vccOpts"in t}const dt=(t,e)=>Gp(t,e,hs);function Sa(t,e,n){const i=arguments.length;return i===2?Te(e)&&!te(e)?cr(e)?De(t,null,[e]):De(t,e):De(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&cr(n)&&(n=[n]),De(t,e,n))}const sm="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Go;const rc=typeof window<"u"&&window.trustedTypes;if(rc)try{Go=rc.createPolicy("vue",{createHTML:t=>t})}catch{}const Yh=Go?t=>Go.createHTML(t):t=>t,rm="http://www.w3.org/2000/svg",om="http://www.w3.org/1998/Math/MathML",Kt=typeof document<"u"?document:null,oc=Kt&&Kt.createElement("template"),am={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Kt.createElementNS(rm,t):e==="mathml"?Kt.createElementNS(om,t):n?Kt.createElement(t,{is:n}):Kt.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Kt.createTextNode(t),createComment:t=>Kt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,o){const a=n?n.previousSibling:e.lastChild;if(s&&(s===o||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{oc.innerHTML=Yh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const c=oc.content;if(i==="svg"||i==="mathml"){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},dn="transition",Bi="animation",fs=Symbol("_vtc"),Qh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},lm=Le({},yh,Qh),cm=t=>(t.displayName="Transition",t.props=lm,t),um=cm((t,{slots:e})=>Sa(eg,hm(t),e)),Mn=(t,e=[])=>{te(t)?t.forEach(n=>n(...e)):t&&t(...e)},ac=t=>t?te(t)?t.some(e=>e.length>1):t.length>1:!1;function hm(t){const e={};for(const b in t)b in Qh||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:f=a,appearToClass:d=c,leaveFromClass:g=`${n}-leave-from`,leaveActiveClass:w=`${n}-leave-active`,leaveToClass:A=`${n}-leave-to`}=t,N=fm(s),M=N&&N[0],q=N&&N[1],{onBeforeEnter:K,onEnter:V,onEnterCancelled:$,onLeave:B,onLeaveCancelled:se,onBeforeAppear:re=K,onAppear:S=V,onAppearCancelled:_=$}=e,m=(b,y,ye,Ne)=>{b._enterCancelled=Ne,Un(b,y?d:c),Un(b,y?f:a),ye&&ye()},E=(b,y)=>{b._isLeaving=!1,Un(b,g),Un(b,A),Un(b,w),y&&y()},T=b=>(y,ye)=>{const Ne=b?S:V,Ae=()=>m(y,b,ye);Mn(Ne,[y,Ae]),lc(()=>{Un(y,b?u:o),zt(y,b?d:c),ac(Ne)||cc(y,i,M,Ae)})};return Le(e,{onBeforeEnter(b){Mn(K,[b]),zt(b,o),zt(b,a)},onBeforeAppear(b){Mn(re,[b]),zt(b,u),zt(b,f)},onEnter:T(!1),onAppear:T(!0),onLeave(b,y){b._isLeaving=!0;const ye=()=>E(b,y);zt(b,g),b._enterCancelled?(zt(b,w),fc()):(fc(),zt(b,w)),lc(()=>{b._isLeaving&&(Un(b,g),zt(b,A),ac(B)||cc(b,i,q,ye))}),Mn(B,[b,ye])},onEnterCancelled(b){m(b,!1,void 0,!0),Mn($,[b])},onAppearCancelled(b){m(b,!0,void 0,!0),Mn(_,[b])},onLeaveCancelled(b){E(b),Mn(se,[b])}})}function fm(t){if(t==null)return null;if(Te(t))return[_o(t.enter),_o(t.leave)];{const e=_o(t);return[e,e]}}function _o(t){return dp(t)}function zt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[fs]||(t[fs]=new Set)).add(e)}function Un(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[fs];n&&(n.delete(e),n.size||(t[fs]=void 0))}function lc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let dm=0;function cc(t,e,n,i){const s=t._endId=++dm,o=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(o,n);const{type:a,timeout:c,propCount:u}=pm(t,e);if(!a)return i();const f=a+"end";let d=0;const g=()=>{t.removeEventListener(f,w),o()},w=A=>{A.target===t&&++d>=u&&g()};setTimeout(()=>{d<u&&g()},c+1),t.addEventListener(f,w)}function pm(t,e){const n=window.getComputedStyle(t),i=N=>(n[N]||"").split(", "),s=i(`${dn}Delay`),o=i(`${dn}Duration`),a=uc(s,o),c=i(`${Bi}Delay`),u=i(`${Bi}Duration`),f=uc(c,u);let d=null,g=0,w=0;e===dn?a>0&&(d=dn,g=a,w=o.length):e===Bi?f>0&&(d=Bi,g=f,w=u.length):(g=Math.max(a,f),d=g>0?a>f?dn:Bi:null,w=d?d===dn?o.length:u.length:0);const A=d===dn&&/\b(transform|all)(,|$)/.test(i(`${dn}Property`).toString());return{type:d,timeout:g,propCount:w,hasTransform:A}}function uc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>hc(n)+hc(t[i])))}function hc(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function fc(){return document.body.offsetHeight}function gm(t,e,n){const i=t[fs];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const dc=Symbol("_vod"),mm=Symbol("_vsh"),_m=Symbol(""),vm=/(^|;)\s*display\s*:/;function ym(t,e,n){const i=t.style,s=ke(n);let o=!1;if(n&&!s){if(e)if(ke(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&Qs(i,c,"")}else for(const a in e)n[a]==null&&Qs(i,a,"");for(const a in n)a==="display"&&(o=!0),Qs(i,a,n[a])}else if(s){if(e!==n){const a=i[_m];a&&(n+=";"+a),i.cssText=n,o=vm.test(n)}}else e&&t.removeAttribute("style");dc in t&&(t[dc]=o?i.display:"",t[mm]&&(i.display="none"))}const pc=/\s*!important$/;function Qs(t,e,n){if(te(n))n.forEach(i=>Qs(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=wm(t,e);pc.test(n)?t.setProperty(ti(i),n.replace(pc,""),"important"):t[i]=n}}const gc=["Webkit","Moz","ms"],vo={};function wm(t,e){const n=vo[e];if(n)return n;let i=_t(e);if(i!=="filter"&&i in t)return vo[e]=i;i=Ar(i);for(let s=0;s<gc.length;s++){const o=gc[s]+i;if(o in t)return vo[e]=o}return e}const mc="http://www.w3.org/1999/xlink";function _c(t,e,n,i,s,o=yp(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(mc,e.slice(6,e.length)):t.setAttributeNS(mc,e,n):n==null||o&&!Gu(n)?t.removeAttribute(e):t.setAttribute(e,o?"":kn(n)?String(n):n)}function vc(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Yh(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?t.getAttribute("value")||"":t.value,u=n==null?t.type==="checkbox"?"on":"":String(n);(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Gu(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Im(t,e,n,i){t.addEventListener(e,n,i)}function bm(t,e,n,i){t.removeEventListener(e,n,i)}const yc=Symbol("_vei");function Em(t,e,n,i,s=null){const o=t[yc]||(t[yc]={}),a=o[e];if(i&&a)a.value=i;else{const[c,u]=Tm(e);if(i){const f=o[e]=Cm(i,s);Im(t,c,f,u)}else a&&(bm(t,c,a,u),o[e]=void 0)}}const wc=/(?:Once|Passive|Capture)$/;function Tm(t){let e;if(wc.test(t)){e={};let i;for(;i=t.match(wc);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ti(t.slice(2)),e]}let yo=0;const Sm=Promise.resolve(),Am=()=>yo||(Sm.then(()=>yo=0),yo=Date.now());function Cm(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Ct(Rm(i,n.value),e,5,[i])};return n.value=t,n.attached=Am(),n}function Rm(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Ic=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Pm=(t,e,n,i,s,o)=>{const a=s==="svg";e==="class"?gm(t,i,a):e==="style"?ym(t,n,i):Er(e)?oa(e)||Em(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):km(t,e,i,a))?(vc(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&_c(t,e,i,a,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ke(i))?vc(t,_t(e),i,o,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),_c(t,e,i,a))};function km(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ic(e)&&ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ic(e)&&ke(n)?!1:e in t}const Om=Le({patchProp:Pm},am);let bc;function Nm(){return bc||(bc=Rg(Om))}const Dm=(...t)=>{const e=Nm().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Lm(i);if(!s)return;const o=e._component;!ie(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,xm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function xm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Lm(t){return ke(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const fi=typeof document<"u";function Zh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Mm(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Zh(t.default)}const me=Object.assign;function wo(t,e){const n={};for(const i in e){const s=e[i];n[i]=Rt(s)?s.map(t):t(s)}return n}const Qi=()=>{},Rt=Array.isArray,ef=/#/g,Um=/&/g,Fm=/\//g,jm=/=/g,Vm=/\?/g,tf=/\+/g,$m=/%5B/g,Bm=/%5D/g,nf=/%5E/g,Hm=/%60/g,sf=/%7B/g,Wm=/%7C/g,rf=/%7D/g,Gm=/%20/g;function Aa(t){return encodeURI(""+t).replace(Wm,"|").replace($m,"[").replace(Bm,"]")}function zm(t){return Aa(t).replace(sf,"{").replace(rf,"}").replace(nf,"^")}function zo(t){return Aa(t).replace(tf,"%2B").replace(Gm,"+").replace(ef,"%23").replace(Um,"%26").replace(Hm,"`").replace(sf,"{").replace(rf,"}").replace(nf,"^")}function qm(t){return zo(t).replace(jm,"%3D")}function Km(t){return Aa(t).replace(ef,"%23").replace(Vm,"%3F")}function Jm(t){return t==null?"":Km(t).replace(Fm,"%2F")}function ds(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Xm=/\/$/,Ym=t=>t.replace(Xm,"");function Io(t,e,n="/"){let i,s={},o="",a="";const c=e.indexOf("#");let u=e.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(i=e.slice(0,u),o=e.slice(u+1,c>-1?c:e.length),s=t(o)),c>-1&&(i=i||e.slice(0,c),a=e.slice(c,e.length)),i=t_(i??e,n),{fullPath:i+(o&&"?")+o+a,path:i,query:s,hash:ds(a)}}function Qm(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ec(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Zm(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&bi(e.matched[i],n.matched[s])&&of(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function of(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!e_(t[n],e[n]))return!1;return!0}function e_(t,e){return Rt(t)?Tc(t,e):Rt(e)?Tc(e,t):t===e}function Tc(t,e){return Rt(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function t_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let o=n.length-1,a,c;for(a=0;a<i.length;a++)if(c=i[a],c!==".")if(c==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+i.slice(a).join("/")}const pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ps;(function(t){t.pop="pop",t.push="push"})(ps||(ps={}));var Zi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Zi||(Zi={}));function n_(t){if(!t)if(fi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ym(t)}const i_=/^[^#]+#/;function s_(t,e){return t.replace(i_,"#")+e}function r_(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Mr=()=>({left:window.scrollX,top:window.scrollY});function o_(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=r_(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Sc(t,e){return(history.state?history.state.position-e:-1)+t}const qo=new Map;function a_(t,e){qo.set(t,e)}function l_(t){const e=qo.get(t);return qo.delete(t),e}let c_=()=>location.protocol+"//"+location.host;function af(t,e){const{pathname:n,search:i,hash:s}=e,o=t.indexOf("#");if(o>-1){let c=s.includes(t.slice(o))?t.slice(o).length:1,u=s.slice(c);return u[0]!=="/"&&(u="/"+u),Ec(u,"")}return Ec(n,t)+i+s}function u_(t,e,n,i){let s=[],o=[],a=null;const c=({state:w})=>{const A=af(t,location),N=n.value,M=e.value;let q=0;if(w){if(n.value=A,e.value=w,a&&a===N){a=null;return}q=M?w.position-M.position:0}else i(A);s.forEach(K=>{K(n.value,N,{delta:q,type:ps.pop,direction:q?q>0?Zi.forward:Zi.back:Zi.unknown})})};function u(){a=n.value}function f(w){s.push(w);const A=()=>{const N=s.indexOf(w);N>-1&&s.splice(N,1)};return o.push(A),A}function d(){const{history:w}=window;w.state&&w.replaceState(me({},w.state,{scroll:Mr()}),"")}function g(){for(const w of o)w();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:u,listen:f,destroy:g}}function Ac(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Mr():null}}function h_(t){const{history:e,location:n}=window,i={value:af(t,n)},s={value:e.state};s.value||o(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(u,f,d){const g=t.indexOf("#"),w=g>-1?(n.host&&document.querySelector("base")?t:t.slice(g))+u:c_()+t+u;try{e[d?"replaceState":"pushState"](f,"",w),s.value=f}catch(A){console.error(A),n[d?"replace":"assign"](w)}}function a(u,f){const d=me({},e.state,Ac(s.value.back,u,s.value.forward,!0),f,{position:s.value.position});o(u,d,!0),i.value=u}function c(u,f){const d=me({},s.value,e.state,{forward:u,scroll:Mr()});o(d.current,d,!0);const g=me({},Ac(i.value,u,null),{position:d.position+1},f);o(u,g,!1),i.value=u}return{location:i,state:s,push:c,replace:a}}function f_(t){t=n_(t);const e=h_(t),n=u_(t,e.state,e.location,e.replace);function i(o,a=!0){a||n.pauseListeners(),history.go(o)}const s=me({location:"",base:t,go:i,createHref:s_.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function d_(t){return typeof t=="string"||t&&typeof t=="object"}function lf(t){return typeof t=="string"||typeof t=="symbol"}const cf=Symbol("");var Cc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Cc||(Cc={}));function Ei(t,e){return me(new Error,{type:t,[cf]:!0},e)}function qt(t,e){return t instanceof Error&&cf in t&&(e==null||!!(t.type&e))}const Rc="[^/]+?",p_={sensitive:!1,strict:!1,start:!0,end:!0},g_=/[.+*?^${}()[\]/\\]/g;function m_(t,e){const n=me({},p_,e),i=[];let s=n.start?"^":"";const o=[];for(const f of t){const d=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let g=0;g<f.length;g++){const w=f[g];let A=40+(n.sensitive?.25:0);if(w.type===0)g||(s+="/"),s+=w.value.replace(g_,"\\$&"),A+=40;else if(w.type===1){const{value:N,repeatable:M,optional:q,regexp:K}=w;o.push({name:N,repeatable:M,optional:q});const V=K||Rc;if(V!==Rc){A+=10;try{new RegExp(`(${V})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${N}" (${V}): `+B.message)}}let $=M?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;g||($=q&&f.length<2?`(?:/${$})`:"/"+$),q&&($+="?"),s+=$,A+=20,q&&(A+=-8),M&&(A+=-20),V===".*"&&(A+=-50)}d.push(A)}i.push(d)}if(n.strict&&n.end){const f=i.length-1;i[f][i[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function c(f){const d=f.match(a),g={};if(!d)return null;for(let w=1;w<d.length;w++){const A=d[w]||"",N=o[w-1];g[N.name]=A&&N.repeatable?A.split("/"):A}return g}function u(f){let d="",g=!1;for(const w of t){(!g||!d.endsWith("/"))&&(d+="/"),g=!1;for(const A of w)if(A.type===0)d+=A.value;else if(A.type===1){const{value:N,repeatable:M,optional:q}=A,K=N in f?f[N]:"";if(Rt(K)&&!M)throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);const V=Rt(K)?K.join("/"):K;if(!V)if(q)w.length<2&&(d.endsWith("/")?d=d.slice(0,-1):g=!0);else throw new Error(`Missing required param "${N}"`);d+=V}}return d||"/"}return{re:a,score:i,keys:o,parse:c,stringify:u}}function __(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function uf(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const o=__(i[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-i.length)===1){if(Pc(i))return 1;if(Pc(s))return-1}return s.length-i.length}function Pc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const v_={type:0,value:""},y_=/[a-zA-Z0-9_]/;function w_(t){if(!t)return[[]];if(t==="/")return[[v_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(A){throw new Error(`ERR (${n})/"${f}": ${A}`)}let n=0,i=n;const s=[];let o;function a(){o&&s.push(o),o=[]}let c=0,u,f="",d="";function g(){f&&(n===0?o.push({type:0,value:f}):n===1||n===2||n===3?(o.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),f="")}function w(){f+=u}for(;c<t.length;){if(u=t[c++],u==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:u==="/"?(f&&g(),a()):u===":"?(g(),n=1):w();break;case 4:w(),n=i;break;case 1:u==="("?n=2:y_.test(u)?w():(g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:n=3:d+=u;break;case 3:g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${f}"`),g(),a(),s}function I_(t,e,n){const i=m_(w_(t.path),n),s=me(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function b_(t,e){const n=[],i=new Map;e=Dc({strict:!1,end:!0,sensitive:!1},e);function s(g){return i.get(g)}function o(g,w,A){const N=!A,M=Oc(g);M.aliasOf=A&&A.record;const q=Dc(e,g),K=[M];if("alias"in g){const B=typeof g.alias=="string"?[g.alias]:g.alias;for(const se of B)K.push(Oc(me({},M,{components:A?A.record.components:M.components,path:se,aliasOf:A?A.record:M})))}let V,$;for(const B of K){const{path:se}=B;if(w&&se[0]!=="/"){const re=w.record.path,S=re[re.length-1]==="/"?"":"/";B.path=w.record.path+(se&&S+se)}if(V=I_(B,w,q),A?A.alias.push(V):($=$||V,$!==V&&$.alias.push(V),N&&g.name&&!Nc(V)&&a(g.name)),hf(V)&&u(V),M.children){const re=M.children;for(let S=0;S<re.length;S++)o(re[S],V,A&&A.children[S])}A=A||V}return $?()=>{a($)}:Qi}function a(g){if(lf(g)){const w=i.get(g);w&&(i.delete(g),n.splice(n.indexOf(w),1),w.children.forEach(a),w.alias.forEach(a))}else{const w=n.indexOf(g);w>-1&&(n.splice(w,1),g.record.name&&i.delete(g.record.name),g.children.forEach(a),g.alias.forEach(a))}}function c(){return n}function u(g){const w=S_(g,n);n.splice(w,0,g),g.record.name&&!Nc(g)&&i.set(g.record.name,g)}function f(g,w){let A,N={},M,q;if("name"in g&&g.name){if(A=i.get(g.name),!A)throw Ei(1,{location:g});q=A.record.name,N=me(kc(w.params,A.keys.filter($=>!$.optional).concat(A.parent?A.parent.keys.filter($=>$.optional):[]).map($=>$.name)),g.params&&kc(g.params,A.keys.map($=>$.name))),M=A.stringify(N)}else if(g.path!=null)M=g.path,A=n.find($=>$.re.test(M)),A&&(N=A.parse(M),q=A.record.name);else{if(A=w.name?i.get(w.name):n.find($=>$.re.test(w.path)),!A)throw Ei(1,{location:g,currentLocation:w});q=A.record.name,N=me({},w.params,g.params),M=A.stringify(N)}const K=[];let V=A;for(;V;)K.unshift(V.record),V=V.parent;return{name:q,path:M,params:N,matched:K,meta:T_(K)}}t.forEach(g=>o(g));function d(){n.length=0,i.clear()}return{addRoute:o,resolve:f,removeRoute:a,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function kc(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Oc(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:E_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function E_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Nc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function T_(t){return t.reduce((e,n)=>me(e,n.meta),{})}function Dc(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function S_(t,e){let n=0,i=e.length;for(;n!==i;){const o=n+i>>1;uf(t,e[o])<0?i=o:n=o+1}const s=A_(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function A_(t){let e=t;for(;e=e.parent;)if(hf(e)&&uf(t,e)===0)return e}function hf({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function C_(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const o=i[s].replace(tf," "),a=o.indexOf("="),c=ds(a<0?o:o.slice(0,a)),u=a<0?null:ds(o.slice(a+1));if(c in e){let f=e[c];Rt(f)||(f=e[c]=[f]),f.push(u)}else e[c]=u}return e}function xc(t){let e="";for(let n in t){const i=t[n];if(n=qm(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Rt(i)?i.map(o=>o&&zo(o)):[i&&zo(i)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function R_(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Rt(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const P_=Symbol(""),Lc=Symbol(""),Ur=Symbol(""),ff=Symbol(""),Ko=Symbol("");function Hi(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function yn(t,e,n,i,s,o=a=>a()){const a=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((c,u)=>{const f=w=>{w===!1?u(Ei(4,{from:n,to:e})):w instanceof Error?u(w):d_(w)?u(Ei(2,{from:e,to:w})):(a&&i.enterCallbacks[s]===a&&typeof w=="function"&&a.push(w),c())},d=o(()=>t.call(i&&i.instances[s],e,n,f));let g=Promise.resolve(d);t.length<3&&(g=g.then(f)),g.catch(w=>u(w))})}function bo(t,e,n,i,s=o=>o()){const o=[];for(const a of t)for(const c in a.components){let u=a.components[c];if(!(e!=="beforeRouteEnter"&&!a.instances[c]))if(Zh(u)){const d=(u.__vccOpts||u)[e];d&&o.push(yn(d,n,i,a,c,s))}else{let f=u();o.push(()=>f.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${a.path}"`);const g=Mm(d)?d.default:d;a.mods[c]=d,a.components[c]=g;const A=(g.__vccOpts||g)[e];return A&&yn(A,n,i,a,c,s)()}))}}return o}function Mc(t){const e=jt(Ur),n=jt(ff),i=dt(()=>{const u=en(t.to);return e.resolve(u)}),s=dt(()=>{const{matched:u}=i.value,{length:f}=u,d=u[f-1],g=n.matched;if(!d||!g.length)return-1;const w=g.findIndex(bi.bind(null,d));if(w>-1)return w;const A=Uc(u[f-2]);return f>1&&Uc(d)===A&&g[g.length-1].path!==A?g.findIndex(bi.bind(null,u[f-2])):w}),o=dt(()=>s.value>-1&&x_(n.params,i.value.params)),a=dt(()=>s.value>-1&&s.value===n.matched.length-1&&of(n.params,i.value.params));function c(u={}){if(D_(u)){const f=e[en(t.replace)?"replace":"push"](en(t.to)).catch(Qi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:i,href:dt(()=>i.value.href),isActive:o,isExactActive:a,navigate:c}}function k_(t){return t.length===1?t[0]:t}const O_=Th({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Mc,setup(t,{slots:e}){const n=Pr(Mc(t)),{options:i}=jt(Ur),s=dt(()=>({[Fc(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Fc(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&k_(e.default(n));return t.custom?o:Sa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),N_=O_;function D_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function x_(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Rt(s)||s.length!==i.length||i.some((o,a)=>o!==s[a]))return!1}return!0}function Uc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Fc=(t,e,n)=>t??e??n,L_=Th({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=jt(Ko),s=dt(()=>t.route||i.value),o=jt(Lc,0),a=dt(()=>{let f=en(o);const{matched:d}=s.value;let g;for(;(g=d[f])&&!g.components;)f++;return f}),c=dt(()=>s.value.matched[a.value]);Ks(Lc,dt(()=>a.value+1)),Ks(P_,c),Ks(Ko,s);const u=zn();return Js(()=>[u.value,c.value,t.name],([f,d,g],[w,A,N])=>{d&&(d.instances[g]=f,A&&A!==d&&f&&f===w&&(d.leaveGuards.size||(d.leaveGuards=A.leaveGuards),d.updateGuards.size||(d.updateGuards=A.updateGuards))),f&&d&&(!A||!bi(d,A)||!w)&&(d.enterCallbacks[g]||[]).forEach(M=>M(f))},{flush:"post"}),()=>{const f=s.value,d=t.name,g=c.value,w=g&&g.components[d];if(!w)return jc(n.default,{Component:w,route:f});const A=g.props[d],N=A?A===!0?f.params:typeof A=="function"?A(f):A:null,q=Sa(w,me({},N,e,{onVnodeUnmounted:K=>{K.component.isUnmounted&&(g.instances[d]=null)},ref:u}));return jc(n.default,{Component:q,route:f})||q}}});function jc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const M_=L_;function U_(t){const e=b_(t.routes,t),n=t.parseQuery||C_,i=t.stringifyQuery||xc,s=t.history,o=Hi(),a=Hi(),c=Hi(),u=$p(pn);let f=pn;fi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=wo.bind(null,k=>""+k),g=wo.bind(null,Jm),w=wo.bind(null,ds);function A(k,J){let z,X;return lf(k)?(z=e.getRecordMatcher(k),X=J):X=k,e.addRoute(X,z)}function N(k){const J=e.getRecordMatcher(k);J&&e.removeRoute(J)}function M(){return e.getRoutes().map(k=>k.record)}function q(k){return!!e.getRecordMatcher(k)}function K(k,J){if(J=me({},J||u.value),typeof k=="string"){const C=Io(n,k,J.path),O=e.resolve({path:C.path},J),x=s.createHref(C.fullPath);return me(C,O,{params:w(O.params),hash:ds(C.hash),redirectedFrom:void 0,href:x})}let z;if(k.path!=null)z=me({},k,{path:Io(n,k.path,J.path).path});else{const C=me({},k.params);for(const O in C)C[O]==null&&delete C[O];z=me({},k,{params:g(C)}),J.params=g(J.params)}const X=e.resolve(z,J),de=k.hash||"";X.params=d(w(X.params));const v=Qm(i,me({},k,{hash:zm(de),path:X.path})),I=s.createHref(v);return me({fullPath:v,hash:de,query:i===xc?R_(k.query):k.query||{}},X,{redirectedFrom:void 0,href:I})}function V(k){return typeof k=="string"?Io(n,k,u.value.path):me({},k)}function $(k,J){if(f!==k)return Ei(8,{from:J,to:k})}function B(k){return S(k)}function se(k){return B(me(V(k),{replace:!0}))}function re(k){const J=k.matched[k.matched.length-1];if(J&&J.redirect){const{redirect:z}=J;let X=typeof z=="function"?z(k):z;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=V(X):{path:X},X.params={}),me({query:k.query,hash:k.hash,params:X.path!=null?{}:k.params},X)}}function S(k,J){const z=f=K(k),X=u.value,de=k.state,v=k.force,I=k.replace===!0,C=re(z);if(C)return S(me(V(C),{state:typeof C=="object"?me({},de,C.state):de,force:v,replace:I}),J||z);const O=z;O.redirectedFrom=J;let x;return!v&&Zm(i,X,z)&&(x=Ei(16,{to:O,from:X}),at(X,X,!0,!1)),(x?Promise.resolve(x):E(O,X)).catch(D=>qt(D)?qt(D,2)?D:vt(D):ae(D,O,X)).then(D=>{if(D){if(qt(D,2))return S(me({replace:I},V(D.to),{state:typeof D.to=="object"?me({},de,D.to.state):de,force:v}),J||O)}else D=b(O,X,!0,I,de);return T(O,X,D),D})}function _(k,J){const z=$(k,J);return z?Promise.reject(z):Promise.resolve()}function m(k){const J=ln.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(k):k()}function E(k,J){let z;const[X,de,v]=F_(k,J);z=bo(X.reverse(),"beforeRouteLeave",k,J);for(const C of X)C.leaveGuards.forEach(O=>{z.push(yn(O,k,J))});const I=_.bind(null,k,J);return z.push(I),et(z).then(()=>{z=[];for(const C of o.list())z.push(yn(C,k,J));return z.push(I),et(z)}).then(()=>{z=bo(de,"beforeRouteUpdate",k,J);for(const C of de)C.updateGuards.forEach(O=>{z.push(yn(O,k,J))});return z.push(I),et(z)}).then(()=>{z=[];for(const C of v)if(C.beforeEnter)if(Rt(C.beforeEnter))for(const O of C.beforeEnter)z.push(yn(O,k,J));else z.push(yn(C.beforeEnter,k,J));return z.push(I),et(z)}).then(()=>(k.matched.forEach(C=>C.enterCallbacks={}),z=bo(v,"beforeRouteEnter",k,J,m),z.push(I),et(z))).then(()=>{z=[];for(const C of a.list())z.push(yn(C,k,J));return z.push(I),et(z)}).catch(C=>qt(C,8)?C:Promise.reject(C))}function T(k,J,z){c.list().forEach(X=>m(()=>X(k,J,z)))}function b(k,J,z,X,de){const v=$(k,J);if(v)return v;const I=J===pn,C=fi?history.state:{};z&&(X||I?s.replace(k.fullPath,me({scroll:I&&C&&C.scroll},de)):s.push(k.fullPath,de)),u.value=k,at(k,J,z,I),vt()}let y;function ye(){y||(y=s.listen((k,J,z)=>{if(!Ot.listening)return;const X=K(k),de=re(X);if(de){S(me(de,{replace:!0,force:!0}),X).catch(Qi);return}f=X;const v=u.value;fi&&a_(Sc(v.fullPath,z.delta),Mr()),E(X,v).catch(I=>qt(I,12)?I:qt(I,2)?(S(me(V(I.to),{force:!0}),X).then(C=>{qt(C,20)&&!z.delta&&z.type===ps.pop&&s.go(-1,!1)}).catch(Qi),Promise.reject()):(z.delta&&s.go(-z.delta,!1),ae(I,X,v))).then(I=>{I=I||b(X,v,!1),I&&(z.delta&&!qt(I,8)?s.go(-z.delta,!1):z.type===ps.pop&&qt(I,20)&&s.go(-1,!1)),T(X,v,I)}).catch(Qi)}))}let Ne=Hi(),Ae=Hi(),le;function ae(k,J,z){vt(k);const X=Ae.list();return X.length?X.forEach(de=>de(k,J,z)):console.error(k),Promise.reject(k)}function it(){return le&&u.value!==pn?Promise.resolve():new Promise((k,J)=>{Ne.add([k,J])})}function vt(k){return le||(le=!k,ye(),Ne.list().forEach(([J,z])=>k?z(k):J()),Ne.reset()),k}function at(k,J,z,X){const{scrollBehavior:de}=t;if(!fi||!de)return Promise.resolve();const v=!z&&l_(Sc(k.fullPath,0))||(X||!z)&&history.state&&history.state.scroll||null;return dh().then(()=>de(k,J,v)).then(I=>I&&o_(I)).catch(I=>ae(I,k,J))}const Ce=k=>s.go(k);let Re;const ln=new Set,Ot={currentRoute:u,listening:!0,addRoute:A,removeRoute:N,clearRoutes:e.clearRoutes,hasRoute:q,getRoutes:M,resolve:K,options:t,push:B,replace:se,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:o.add,beforeResolve:a.add,afterEach:c.add,onError:Ae.add,isReady:it,install(k){const J=this;k.component("RouterLink",N_),k.component("RouterView",M_),k.config.globalProperties.$router=J,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>en(u)}),fi&&!Re&&u.value===pn&&(Re=!0,B(s.location).catch(de=>{}));const z={};for(const de in pn)Object.defineProperty(z,de,{get:()=>u.value[de],enumerable:!0});k.provide(Ur,J),k.provide(ff,lh(z)),k.provide(Ko,u);const X=k.unmount;ln.add(k),k.unmount=function(){ln.delete(k),ln.size<1&&(f=pn,y&&y(),y=null,u.value=pn,Re=!1,le=!1),X()}}};function et(k){return k.reduce((J,z)=>J.then(()=>m(z)),Promise.resolve())}return Ot}function F_(t,e){const n=[],i=[],s=[],o=Math.max(e.matched.length,t.matched.length);for(let a=0;a<o;a++){const c=e.matched[a];c&&(t.matched.find(f=>bi(f,c))?i.push(c):n.push(c));const u=t.matched[a];u&&(e.matched.find(f=>bi(f,u))||s.push(u))}return[n,i,s]}function ws(){return jt(Ur)}const j_=()=>{};var Vc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},V_=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],a=t[n++],c=t[n++],u=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(u>>10)),e[i++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],a=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},pf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const o=t[s],a=s+1<t.length,c=a?t[s+1]:0,u=s+2<t.length,f=u?t[s+2]:0,d=o>>2,g=(o&3)<<4|c>>4;let w=(c&15)<<2|f>>6,A=f&63;u||(A=64,a||(w=64)),i.push(n[d],n[g],n[w],n[A])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(df(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):V_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||c==null||f==null||g==null)throw new $_;const w=o<<2|c>>4;if(i.push(w),f!==64){const A=c<<4&240|f>>2;if(i.push(A),g!==64){const N=f<<6&192|g;i.push(N)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const B_=function(t){const e=df(t);return pf.encodeByteArray(e,!0)},fr=function(t){return B_(t).replace(/\./g,"")},gf=function(t){try{return pf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function H_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const W_=()=>H_().__FIREBASE_DEFAULTS__,G_=()=>{if(typeof process>"u"||typeof Vc>"u")return;const t=Vc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},z_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gf(t[1]);return e&&JSON.parse(e)},Ca=()=>{try{return j_()||W_()||G_()||z_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mf=t=>{var e,n;return(n=(e=Ca())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},q_=t=>{const e=mf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},_f=()=>{var t;return(t=Ca())===null||t===void 0?void 0:t.config},vf=t=>{var e;return(e=Ca())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Is(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yf(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function J_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fr(JSON.stringify(n)),fr(JSON.stringify(a)),""].join(".")}const es={};function X_(){const t={prod:[],emulator:[]};for(const e of Object.keys(es))es[e]?t.emulator.push(e):t.prod.push(e);return t}function Y_(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let $c=!1;function wf(t,e){if(typeof window>"u"||typeof document>"u"||!Is(window.location.host)||es[t]===e||es[t]||$c)return;es[t]=e;function n(w){return`__firebase__banner__${w}`}const i="__firebase__banner",o=X_().prod.length>0;function a(){const w=document.getElementById(i);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function u(w,A){w.setAttribute("width","24"),w.setAttribute("id",A),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function f(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{$c=!0,a()},w}function d(w,A){w.setAttribute("id",A),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function g(){const w=Y_(i),A=n("text"),N=document.getElementById(A)||document.createElement("span"),M=n("learnmore"),q=document.getElementById(M)||document.createElement("a"),K=n("preprendIcon"),V=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const $=w.element;c($),d(q,M);const B=f();u(V,K),$.append(V,N,q,B),document.body.appendChild($)}o?(N.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Q_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function Z_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function If(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ev(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tv(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bf(){try{return typeof indexedDB=="object"}catch{return!1}}function Ef(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function nv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv="FirebaseError";class kt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=iv,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ni.prototype.create)}}class ni{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?sv(o,i):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new kt(s,c,i)}}function sv(t,e){return t.replace(rv,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const rv=/\{\$([^}]+)}/g;function ov(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const o=t[s],a=e[s];if(Bc(o)&&Bc(a)){if(!Pn(o,a))return!1}else if(o!==a)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Bc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function av(t,e){const n=new lv(t,e);return n.subscribe.bind(n)}class lv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");cv(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Eo),s.error===void 0&&(s.error=Eo),s.complete===void 0&&(s.complete=Eo);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Eo(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=1e3,hv=2,fv=4*60*60*1e3,dv=.5;function Hc(t,e=uv,n=hv){const i=e*Math.pow(n,t),s=Math.round(dv*i*(Math.random()-.5)*2);return Math.min(fv,i+s)}/**
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
 */function an(t){return t&&t._delegate?t._delegate:t}class Pt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new K_;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mv(e))try{this.getOrInitializeService({instanceIdentifier:jn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jn){return this.instances.has(e)}getOptions(e=jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&a.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&e(a,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:gv(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=jn){return this.component?this.component.multipleInstances?e:jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gv(t){return t===jn?void 0:t}function mv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const vv={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},yv=ve.INFO,wv={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},Iv=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=wv[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fr{constructor(e){this.name=e,this._logLevel=yv,this._logHandler=Iv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const bv=(t,e)=>e.some(n=>t instanceof n);let Wc,Gc;function Ev(){return Wc||(Wc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tv(){return Gc||(Gc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tf=new WeakMap,Jo=new WeakMap,Sf=new WeakMap,To=new WeakMap,Ra=new WeakMap;function Sv(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(Sn(t.result)),s()},a=()=>{i(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Tf.set(n,t)}).catch(()=>{}),Ra.set(e,t),e}function Av(t){if(Jo.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});Jo.set(t,e)}let Xo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Cv(t){Xo=t(Xo)}function Rv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(So(this),e,...n);return Sf.set(i,e.sort?e.sort():[e]),Sn(i)}:Tv().includes(t)?function(...e){return t.apply(So(this),e),Sn(Tf.get(this))}:function(...e){return Sn(t.apply(So(this),e))}}function Pv(t){return typeof t=="function"?Rv(t):(t instanceof IDBTransaction&&Av(t),bv(t,Ev())?new Proxy(t,Xo):t)}function Sn(t){if(t instanceof IDBRequest)return Sv(t);if(To.has(t))return To.get(t);const e=Pv(t);return e!==t&&(To.set(t,e),Ra.set(e,t)),e}const So=t=>Ra.get(t);function Af(t,e,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),c=Sn(a);return i&&a.addEventListener("upgradeneeded",u=>{i(Sn(a.result),u.oldVersion,u.newVersion,Sn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{o&&u.addEventListener("close",()=>o()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const kv=["get","getKey","getAll","getAllKeys","count"],Ov=["put","add","delete","clear"],Ao=new Map;function zc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ao.get(e))return Ao.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Ov.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||kv.includes(n)))return;const o=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return i&&(f=f.index(c.shift())),(await Promise.all([f[n](...c),s&&u.done]))[0]};return Ao.set(e,o),o}Cv(t=>({...t,get:(e,n,i)=>zc(e,n)||t.get(e,n,i),has:(e,n)=>!!zc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Dv(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Dv(t){const e=t.getComponent();return e?.type==="VERSION"}const Yo="@firebase/app",qc="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new Fr("@firebase/app"),xv="@firebase/app-compat",Lv="@firebase/analytics-compat",Mv="@firebase/analytics",Uv="@firebase/app-check-compat",Fv="@firebase/app-check",jv="@firebase/auth",Vv="@firebase/auth-compat",$v="@firebase/database",Bv="@firebase/data-connect",Hv="@firebase/database-compat",Wv="@firebase/functions",Gv="@firebase/functions-compat",zv="@firebase/installations",qv="@firebase/installations-compat",Kv="@firebase/messaging",Jv="@firebase/messaging-compat",Xv="@firebase/performance",Yv="@firebase/performance-compat",Qv="@firebase/remote-config",Zv="@firebase/remote-config-compat",ey="@firebase/storage",ty="@firebase/storage-compat",ny="@firebase/firestore",iy="@firebase/ai",sy="@firebase/firestore-compat",ry="firebase",oy="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="[DEFAULT]",ay={[Yo]:"fire-core",[xv]:"fire-core-compat",[Mv]:"fire-analytics",[Lv]:"fire-analytics-compat",[Fv]:"fire-app-check",[Uv]:"fire-app-check-compat",[jv]:"fire-auth",[Vv]:"fire-auth-compat",[$v]:"fire-rtdb",[Bv]:"fire-data-connect",[Hv]:"fire-rtdb-compat",[Wv]:"fire-fn",[Gv]:"fire-fn-compat",[zv]:"fire-iid",[qv]:"fire-iid-compat",[Kv]:"fire-fcm",[Jv]:"fire-fcm-compat",[Xv]:"fire-perf",[Yv]:"fire-perf-compat",[Qv]:"fire-rc",[Zv]:"fire-rc-compat",[ey]:"fire-gcs",[ty]:"fire-gcs-compat",[ny]:"fire-fst",[sy]:"fire-fst-compat",[iy]:"fire-vertex","fire-js":"fire-js",[ry]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Map,ly=new Map,Zo=new Map;function Kc(t,e){try{t.container.addComponent(e)}catch(n){sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $t(t){const e=t.name;if(Zo.has(e))return sn.debug(`There were multiple attempts to register component ${e}.`),!1;Zo.set(e,t);for(const n of dr.values())Kc(n,t);for(const n of ly.values())Kc(n,t);return!0}function ii(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function It(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},An=new ni("app","Firebase",cy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=oy;function Cf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Qo,automaticDataCollectionEnabled:!0},e),s=i.name;if(typeof s!="string"||!s)throw An.create("bad-app-name",{appName:String(s)});if(n||(n=_f()),!n)throw An.create("no-options");const o=dr.get(s);if(o){if(Pn(n,o.options)&&Pn(i,o.config))return o;throw An.create("duplicate-app",{appName:s})}const a=new _v(s);for(const u of Zo.values())a.addComponent(u);const c=new uy(n,i,a);return dr.set(s,c),c}function Pa(t=Qo){const e=dr.get(t);if(!e&&t===Qo&&_f())return Cf();if(!e)throw An.create("no-app",{appName:t});return e}function mt(t,e,n){var i;let s=(i=ay[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sn.warn(c.join(" "));return}$t(new Pt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const hy="firebase-heartbeat-database",fy=1,gs="firebase-heartbeat-store";let Co=null;function Rf(){return Co||(Co=Af(hy,fy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gs)}catch(n){console.warn(n)}}}}).catch(t=>{throw An.create("idb-open",{originalErrorMessage:t.message})})),Co}async function dy(t){try{const n=(await Rf()).transaction(gs),i=await n.objectStore(gs).get(Pf(t));return await n.done,i}catch(e){if(e instanceof kt)sn.warn(e.message);else{const n=An.create("idb-get",{originalErrorMessage:e?.message});sn.warn(n.message)}}}async function Jc(t,e){try{const i=(await Rf()).transaction(gs,"readwrite");await i.objectStore(gs).put(e,Pf(t)),await i.done}catch(n){if(n instanceof kt)sn.warn(n.message);else{const i=An.create("idb-set",{originalErrorMessage:n?.message});sn.warn(i.message)}}}function Pf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const py=1024,gy=30;class my{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vy(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Xc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>gy){const a=yy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){sn.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xc(),{heartbeatsToSend:i,unsentEntries:s}=_y(this._heartbeatsCache.heartbeats),o=fr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return sn.warn(n),""}}}function Xc(){return new Date().toISOString().substring(0,10)}function _y(t,e=py){const n=[];let i=t.slice();for(const s of t){const o=n.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Yc(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Yc(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class vy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bf()?Ef().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dy(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Yc(t){return fr(JSON.stringify({version:2,heartbeats:t})).length}function yy(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t){$t(new Pt("platform-logger",e=>new Nv(e),"PRIVATE")),$t(new Pt("heartbeat",e=>new my(e),"PRIVATE")),mt(Yo,qc,t),mt(Yo,qc,"esm2017"),mt("fire-js","")}wy("");var Iy="firebase",by="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt(Iy,by,"app");const kf="@firebase/installations",ka="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=1e4,Nf=`w:${ka}`,Df="FIS_v2",Ey="https://firebaseinstallations.googleapis.com/v1",Ty=60*60*1e3,Sy="installations",Ay="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Yn=new ni(Sy,Ay,Cy);function xf(t){return t instanceof kt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf({projectId:t}){return`${Ey}/projects/${t}/installations`}function Mf(t){return{token:t.token,requestStatus:2,expiresIn:Py(t.expiresIn),creationTime:Date.now()}}async function Uf(t,e){const i=(await e.json()).error;return Yn.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Ff({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Ry(t,{refreshToken:e}){const n=Ff(t);return n.append("Authorization",ky(e)),n}async function jf(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Py(t){return Number(t.replace("s","000"))}function ky(t){return`${Df} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oy({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=Lf(t),s=Ff(t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={fid:n,authVersion:Df,appId:t.appId,sdkVersion:Nf},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await jf(()=>fetch(i,c));if(u.ok){const f=await u.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:Mf(f.authToken)}}else throw await Uf("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=/^[cdef][\w-]{21}$/,ea="";function xy(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Ly(t);return Dy.test(n)?n:ea}catch{return ea}}function Ly(t){return Ny(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $f=new Map;function Bf(t,e){const n=jr(t);Hf(n,e),My(n,e)}function Hf(t,e){const n=$f.get(t);if(n)for(const i of n)i(e)}function My(t,e){const n=Uy();n&&n.postMessage({key:t,fid:e}),Fy()}let Bn=null;function Uy(){return!Bn&&"BroadcastChannel"in self&&(Bn=new BroadcastChannel("[Firebase] FID Change"),Bn.onmessage=t=>{Hf(t.data.key,t.data.fid)}),Bn}function Fy(){$f.size===0&&Bn&&(Bn.close(),Bn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="firebase-installations-database",Vy=1,Qn="firebase-installations-store";let Ro=null;function Oa(){return Ro||(Ro=Af(jy,Vy,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qn)}}})),Ro}async function pr(t,e){const n=jr(t),s=(await Oa()).transaction(Qn,"readwrite"),o=s.objectStore(Qn),a=await o.get(n);return await o.put(e,n),await s.done,(!a||a.fid!==e.fid)&&Bf(t,e.fid),e}async function Wf(t){const e=jr(t),i=(await Oa()).transaction(Qn,"readwrite");await i.objectStore(Qn).delete(e),await i.done}async function Vr(t,e){const n=jr(t),s=(await Oa()).transaction(Qn,"readwrite"),o=s.objectStore(Qn),a=await o.get(n),c=e(a);return c===void 0?await o.delete(n):await o.put(c,n),await s.done,c&&(!a||a.fid!==c.fid)&&Bf(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Na(t){let e;const n=await Vr(t.appConfig,i=>{const s=$y(i),o=By(t,s);return e=o.registrationPromise,o.installationEntry});return n.fid===ea?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function $y(t){const e=t||{fid:xy(),registrationStatus:0};return Gf(e)}function By(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Yn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Hy(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Wy(t)}:{installationEntry:e}}async function Hy(t,e){try{const n=await Oy(t,e);return pr(t.appConfig,n)}catch(n){throw xf(n)&&n.customData.serverCode===409?await Wf(t.appConfig):await pr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Wy(t){let e=await Qc(t.appConfig);for(;e.registrationStatus===1;)await Vf(100),e=await Qc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Na(t);return i||n}return e}function Qc(t){return Vr(t,e=>{if(!e)throw Yn.create("installation-not-found");return Gf(e)})}function Gf(t){return Gy(t)?{fid:t.fid,registrationStatus:0}:t}function Gy(t){return t.registrationStatus===1&&t.registrationTime+Of<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zy({appConfig:t,heartbeatServiceProvider:e},n){const i=qy(t,n),s=Ry(t,n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const a={installation:{sdkVersion:Nf,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await jf(()=>fetch(i,c));if(u.ok){const f=await u.json();return Mf(f)}else throw await Uf("Generate Auth Token",u)}function qy(t,{fid:e}){return`${Lf(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Da(t,e=!1){let n;const i=await Vr(t.appConfig,o=>{if(!zf(o))throw Yn.create("not-registered");const a=o.authToken;if(!e&&Xy(a))return o;if(a.requestStatus===1)return n=Ky(t,e),o;{if(!navigator.onLine)throw Yn.create("app-offline");const c=Qy(o);return n=Jy(t,c),c}});return n?await n:i.authToken}async function Ky(t,e){let n=await Zc(t.appConfig);for(;n.authToken.requestStatus===1;)await Vf(100),n=await Zc(t.appConfig);const i=n.authToken;return i.requestStatus===0?Da(t,e):i}function Zc(t){return Vr(t,e=>{if(!zf(e))throw Yn.create("not-registered");const n=e.authToken;return Zy(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Jy(t,e){try{const n=await zy(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await pr(t.appConfig,i),n}catch(n){if(xf(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Wf(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await pr(t.appConfig,i)}throw n}}function zf(t){return t!==void 0&&t.registrationStatus===2}function Xy(t){return t.requestStatus===2&&!Yy(t)}function Yy(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ty}function Qy(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Zy(t){return t.requestStatus===1&&t.requestTime+Of<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(t){const e=t,{installationEntry:n,registrationPromise:i}=await Na(e);return i?i.catch(console.error):Da(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(t,e=!1){const n=t;return await n0(n),(await Da(n,e)).token}async function n0(t){const{registrationPromise:e}=await Na(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const qf="installations",s0="installations-internal",r0=t=>{const e=t.getProvider("app").getImmediate(),n=i0(e),i=ii(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},o0=t=>{const e=t.getProvider("app").getImmediate(),n=ii(e,qf).getImmediate();return{getId:()=>e0(n),getToken:s=>t0(n,s)}};function a0(){$t(new Pt(qf,r0,"PUBLIC")),$t(new Pt(s0,o0,"PRIVATE"))}a0();mt(kf,ka);mt(kf,ka,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr="analytics",l0="firebase_id",c0="origin",u0=60*1e3,h0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xa="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const f0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ot=new ni("analytics","Analytics",f0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t){if(!t.startsWith(xa)){const e=ot.create("invalid-gtag-resource",{gtagURL:t});return nt.warn(e.message),""}return t}function Kf(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function p0(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function g0(t,e){const n=p0("firebase-js-sdk-policy",{createScriptURL:d0}),i=document.createElement("script"),s=`${xa}?l=${t}&id=${e}`;i.src=n?n?.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function m0(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function _0(t,e,n,i,s,o){const a=i[s];try{if(a)await e[a];else{const u=(await Kf(n)).find(f=>f.measurementId===s);u&&await e[u.appId]}}catch(c){nt.error(c)}t("config",s,o)}async function v0(t,e,n,i,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await Kf(n);for(const u of a){const f=c.find(g=>g.measurementId===u),d=f&&e[f.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",i,s||{})}catch(o){nt.error(o)}}function y0(t,e,n,i){async function s(o,...a){try{if(o==="event"){const[c,u]=a;await v0(t,e,n,c,u)}else if(o==="config"){const[c,u]=a;await _0(t,e,n,i,c,u)}else if(o==="consent"){const[c,u]=a;t("consent",c,u)}else if(o==="get"){const[c,u,f]=a;t("get",c,u,f)}else if(o==="set"){const[c]=a;t("set",c)}else t(o,...a)}catch(c){nt.error(c)}}return s}function w0(t,e,n,i,s){let o=function(...a){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=y0(o,t,e,n),{gtagCore:o,wrappedGtag:window[s]}}function I0(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(xa)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=30,E0=1e3;class T0{constructor(e={},n=E0){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Jf=new T0;function S0(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function A0(t){var e;const{appId:n,apiKey:i}=t,s={method:"GET",headers:S0(i)},o=h0.replace("{app-id}",n),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let c="";try{const u=await a.json();!((e=u.error)===null||e===void 0)&&e.message&&(c=u.error.message)}catch{}throw ot.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function C0(t,e=Jf,n){const{appId:i,apiKey:s,measurementId:o}=t.options;if(!i)throw ot.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:i};throw ot.create("no-api-key")}const a=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new k0;return setTimeout(async()=>{c.abort()},u0),Xf({appId:i,apiKey:s,measurementId:o},a,c,e)}async function Xf(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=Jf){var o;const{appId:a,measurementId:c}=t;try{await R0(i,e)}catch(u){if(c)return nt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u?.message}]`),{appId:a,measurementId:c};throw u}try{const u=await A0(t);return s.deleteThrottleMetadata(a),u}catch(u){const f=u;if(!P0(f)){if(s.deleteThrottleMetadata(a),c)return nt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f?.message}]`),{appId:a,measurementId:c};throw u}const d=Number((o=f?.customData)===null||o===void 0?void 0:o.httpStatus)===503?Hc(n,s.intervalMillis,b0):Hc(n,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(a,g),nt.debug(`Calling attemptFetch again in ${d} millis`),Xf(t,g,i,s)}}function R0(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),o=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(o),i(ot.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function P0(t){if(!(t instanceof kt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class k0{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function O0(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const o=await e,a=Object.assign(Object.assign({},i),{send_to:o});t("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N0(){if(bf())try{await Ef()}catch(t){return nt.warn(ot.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return nt.warn(ot.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function D0(t,e,n,i,s,o,a){var c;const u=C0(t);u.then(A=>{n[A.measurementId]=A.appId,t.options.measurementId&&A.measurementId!==t.options.measurementId&&nt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>nt.error(A)),e.push(u);const f=N0().then(A=>{if(A)return i.getId()}),[d,g]=await Promise.all([u,f]);I0(o)||g0(o,d.measurementId),s("js",new Date);const w=(c=a?.config)!==null&&c!==void 0?c:{};return w[c0]="firebase",w.update=!0,g!=null&&(w[l0]=g),s("config",d.measurementId,w),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e){this.app=e}_delete(){return delete ts[this.app.options.appId],Promise.resolve()}}let ts={},eu=[];const tu={};let ko="dataLayer",L0="gtag",nu,Yf,iu=!1;function M0(){const t=[];if(If()&&t.push("This is a browser extension environment."),nv()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=ot.create("invalid-analytics-context",{errorInfo:e});nt.warn(n.message)}}function U0(t,e,n){M0();const i=t.options.appId;if(!i)throw ot.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)nt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ot.create("no-api-key");if(ts[i]!=null)throw ot.create("already-exists",{id:i});if(!iu){m0(ko);const{wrappedGtag:o,gtagCore:a}=w0(ts,eu,tu,ko,L0);Yf=o,nu=a,iu=!0}return ts[i]=D0(t,eu,tu,e,nu,ko,n),new x0(t)}function F0(t=Pa()){t=an(t);const e=ii(t,gr);return e.isInitialized()?e.getImmediate():j0(t)}function j0(t,e={}){const n=ii(t,gr);if(n.isInitialized()){const s=n.getImmediate();if(Pn(e,n.getOptions()))return s;throw ot.create("already-initialized")}return n.initialize({options:e})}function V0(t,e,n,i){t=an(t),O0(Yf,ts[t.app.options.appId],e,n,i).catch(s=>nt.error(s))}const su="@firebase/analytics",ru="0.10.17";function $0(){$t(new Pt(gr,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return U0(i,s,n)},"PUBLIC")),$t(new Pt("analytics-internal",t,"PRIVATE")),mt(su,ru),mt(su,ru,"esm2017");function t(e){try{const n=e.getProvider(gr).getImmediate();return{logEvent:(i,s,o)=>V0(n,i,s,o)}}catch(n){throw ot.create("interop-component-reg-failed",{reason:n})}}}$0();function La(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Qf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const B0=Qf,Zf=new ni("auth","Firebase",Qf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new Fr("@firebase/auth");function H0(t,...e){mr.logLevel<=ve.WARN&&mr.warn(`Auth (${Ai}): ${t}`,...e)}function Zs(t,...e){mr.logLevel<=ve.ERROR&&mr.error(`Auth (${Ai}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,...e){throw Ua(t,...e)}function St(t,...e){return Ua(t,...e)}function Ma(t,e,n){const i=Object.assign(Object.assign({},B0()),{[e]:n});return new ni("auth","Firebase",i).create(e,{appName:t.name})}function qn(t){return Ma(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function W0(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Bt(t,"argument-error"),Ma(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ua(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Zf.create(t,...e)}function ne(t,e,...n){if(!t)throw Ua(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zs(e),new Error(e)}function rn(t,e){t||Qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function G0(){return ou()==="http:"||ou()==="https:"}function ou(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(G0()||If()||"connection"in navigator)?navigator.onLine:!0}function q0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.shortDelay=e,this.longDelay=n,rn(n>e,"Short delay should be less than long delay!"),this.isMobile=Q_()||ev()}get(){return z0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t,e){rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],X0=new Es(3e4,6e4);function ja(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ci(t,e,n,i,s={}){return td(t,s,async()=>{let o={},a={};i&&(e==="GET"?a=i:o={body:JSON.stringify(i)});const c=bs(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const f=Object.assign({method:e,headers:u},o);return Z_()||(f.referrerPolicy="no-referrer"),t.emulatorConfig&&Is(t.emulatorConfig.host)&&(f.credentials="include"),ed.fetch()(await nd(t,t.config.apiHost,n,c),f)})}async function td(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},K0),e);try{const s=new Q0(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Gs(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[u,f]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gs(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Gs(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Gs(t,"user-disabled",a);const d=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Ma(t,d,f);Bt(t,d)}}catch(s){if(s instanceof kt)throw s;Bt(t,"network-request-failed",{message:String(s)})}}async function Y0(t,e,n,i,s={}){const o=await Ci(t,e,n,i,s);return"mfaPendingCredential"in o&&Bt(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function nd(t,e,n,i){const s=`${e}${n}?${i}`,o=t,a=o.config.emulator?Fa(t.config,s):`${t.config.apiScheme}://${s}`;return J0.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class Q0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(St(this.auth,"network-request-failed")),X0.get())})}}function Gs(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=St(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z0(t,e){return Ci(t,"POST","/v1/accounts:delete",e)}async function _r(t,e){return Ci(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ew(t,e=!1){const n=an(t),i=await n.getIdToken(e),s=Va(i);ne(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o?.sign_in_provider;return{claims:s,token:i,authTime:ns(Oo(s.auth_time)),issuedAtTime:ns(Oo(s.iat)),expirationTime:ns(Oo(s.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Oo(t){return Number(t)*1e3}function Va(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Zs("JWT malformed, contained fewer than 3 sections"),null;try{const s=gf(n);return s?JSON.parse(s):(Zs("Failed to decode base64 JWT payload"),null)}catch(s){return Zs("Caught error parsing JWT payload as JSON",s?.toString()),null}}function au(t){const e=Va(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof kt&&tw(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function tw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ns(this.lastLoginAt),this.creationTime=ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(t){var e;const n=t.auth,i=await t.getIdToken(),s=await ms(t,_r(n,{idToken:i}));ne(s?.users.length,n,"internal-error");const o=s.users[0];t._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?id(o.providerUserInfo):[],c=sw(t.providerData,a),u=t.isAnonymous,f=!(t.email&&o.passwordHash)&&!c?.length,d=u?f:!1,g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new na(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,g)}async function iw(t){const e=an(t);await vr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sw(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function id(t){return t.map(e=>{var{providerId:n}=e,i=La(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rw(t,e){const n=await td(t,{},async()=>{const i=bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,a=await nd(t,s,"/v1/token",`key=${o}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:i};return t.emulatorConfig&&Is(t.emulatorConfig.host)&&(u.credentials="include"),ed.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ow(t,e){return Ci(t,"POST","/v2/accounts:revokeToken",ja(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):au(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=au(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:o}=await rw(e,n);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:o}=n,a=new vi;return i&&(ne(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(ne(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bt{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,o=La(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new na(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await ms(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ew(this,e)}reload(){return iw(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await vr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(It(this.auth.app))return Promise.reject(qn(this.auth));const e=await this.getIdToken();return await ms(this,Z0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,o,a,c,u,f,d;const g=(i=n.displayName)!==null&&i!==void 0?i:void 0,w=(s=n.email)!==null&&s!==void 0?s:void 0,A=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,N=(a=n.photoURL)!==null&&a!==void 0?a:void 0,M=(c=n.tenantId)!==null&&c!==void 0?c:void 0,q=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,K=(f=n.createdAt)!==null&&f!==void 0?f:void 0,V=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:$,emailVerified:B,isAnonymous:se,providerData:re,stsTokenManager:S}=n;ne($&&S,e,"internal-error");const _=vi.fromJSON(this.name,S);ne(typeof $=="string",e,"internal-error"),gn(g,e.name),gn(w,e.name),ne(typeof B=="boolean",e,"internal-error"),ne(typeof se=="boolean",e,"internal-error"),gn(A,e.name),gn(N,e.name),gn(M,e.name),gn(q,e.name),gn(K,e.name),gn(V,e.name);const m=new bt({uid:$,auth:e,email:w,emailVerified:B,displayName:g,isAnonymous:se,photoURL:N,phoneNumber:A,tenantId:M,stsTokenManager:_,createdAt:K,lastLoginAt:V});return re&&Array.isArray(re)&&(m.providerData=re.map(E=>Object.assign({},E))),q&&(m._redirectEventId=q),m}static async _fromIdTokenResponse(e,n,i=!1){const s=new vi;s.updateFromServerResponse(n);const o=new bt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await vr(o),o}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];ne(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?id(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!o?.length,c=new vi;c.updateFromIdToken(i);const u=new bt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new na(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!o?.length};return Object.assign(u,f),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=new Map;function Zt(t){rn(t instanceof Function,"Expected a class definition");let e=lu.get(t);return e?(rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lu.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sd.type="NONE";const cu=sd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,e,n){return`firebase:${t}:${e}:${n}`}class yi{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:o}=this.auth;this.fullUserKey=er(this.userKey,s.apiKey,o),this.fullPersistenceKey=er("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await _r(this.auth,{idToken:e}).catch(()=>{});return n?bt._fromGetAccountInfoResponse(this.auth,n,e):null}return bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new yi(Zt(cu),e,i);const s=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=s[0]||Zt(cu);const a=er(i,e.config.apiKey,e.name);let c=null;for(const f of n)try{const d=await f._get(a);if(d){let g;if(typeof d=="string"){const w=await _r(e,{idToken:d}).catch(()=>{});if(!w)break;g=await bt._fromGetAccountInfoResponse(e,w,d)}else g=bt._fromJSON(e,d);f!==o&&(c=g),o=f;break}}catch{}const u=s.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new yi(o,e,i):(o=u[0],c&&await o._set(a,c.toJSON()),await Promise.all(n.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new yi(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ld(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ud(e))return"Blackberry";if(hd(e))return"Webos";if(od(e))return"Safari";if((e.includes("chrome/")||ad(e))&&!e.includes("edge/"))return"Chrome";if(cd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if(i?.length===2)return i[1]}return"Other"}function rd(t=Ze()){return/firefox\//i.test(t)}function od(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ad(t=Ze()){return/crios\//i.test(t)}function ld(t=Ze()){return/iemobile/i.test(t)}function cd(t=Ze()){return/android/i.test(t)}function ud(t=Ze()){return/blackberry/i.test(t)}function hd(t=Ze()){return/webos/i.test(t)}function $a(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function aw(t=Ze()){var e;return $a(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lw(){return tv()&&document.documentMode===10}function fd(t=Ze()){return $a(t)||cd(t)||hd(t)||ud(t)||/windows phone/i.test(t)||ld(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(t,e=[]){let n;switch(t){case"Browser":n=uu(Ze());break;case"Worker":n=`${uu(Ze())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ai}/${i}`}/**
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
 */class cw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=o=>new Promise((a,c)=>{try{const u=e(o);a(u)}catch(u){c(u)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function uw(t,e={}){return Ci(t,"GET","/v2/passwordPolicy",ja(t,e))}/**
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
 */const hw=6;class fw{constructor(e){var n,i,s,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:hw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,o,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(i=u.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hu(this),this.idTokenSubscription=new hu(this),this.beforeStateQueue=new cw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var i,s,o;if(!this._deleted&&(this.persistenceManager=await yi.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _r(this,{idToken:e}),i=await bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(It(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&u?.user&&(s=u.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vr(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=q0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(It(this.app))return Promise.reject(qn(this));const n=e?an(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return It(this.app)?Promise.reject(qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return It(this.app)?Promise.reject(qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uw(this),n=new fw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ni("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await ow(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await yi.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,i,s);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(It(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&H0(`Error while retrieving App Check token: ${n.error}`),n?.token}}function $r(t){return an(t)}class hu{constructor(e){this.auth=e,this.observer=null,this.addObserver=av(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pw(t){Ba=t}function gw(t){return Ba.loadJS(t)}function mw(){return Ba.gapiScript}function _w(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(t,e){const n=ii(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(Pn(o,e??{}))return s;Bt(s,"already-initialized")}return n.initialize({options:e})}function yw(t,e){const n=e?.persistence||[],i=(Array.isArray(n)?n:[n]).map(Zt);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e?.popupRedirectResolver)}function ww(t,e,n){const i=$r(t);ne(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,o=pd(e),{host:a,port:c}=Iw(e),u=c===null?"":`:${c}`,f={url:`${o}//${a}${u}/`},d=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){ne(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ne(Pn(f,i.config.emulator)&&Pn(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=f,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,Is(a)?(yf(`${o}//${a}${u}`),wf("Auth",!0)):bw()}function pd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Iw(t){const e=pd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const o=s[1];return{host:o,port:fu(i.substr(o.length+1))}}else{const[o,a]=i.split(":");return{host:o,port:fu(a)}}}function fu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(t,e){return Y0(t,"POST","/v1/accounts:signInWithIdp",ja(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="http://localhost";class Zn extends gd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,o=La(n,["providerId","signInMethod"]);if(!i||!s)return null;const a=new Zn(i,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return wi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,wi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,wi(e,n)}buildRequest(){const e={requestUri:Ew,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends Ha{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Ts{constructor(){super("facebook.com")}static credential(e){return Zn._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.FACEBOOK_SIGN_IN_METHOD="facebook.com";In.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Ts{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Xt.credential(n,i)}catch{return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com";Xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Ts{constructor(){super("github.com")}static credential(e){return Zn._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Ts{constructor(){super("twitter.com")}static credential(e,n){return Zn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return En.credential(n,i)}catch{return null}}}En.TWITTER_SIGN_IN_METHOD="twitter.com";En.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const o=await bt._fromIdTokenResponse(e,i,s),a=du(i);return new Ti({user:o,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=du(i);return new Ti({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function du(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends kt{constructor(e,n,i,s){var o;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,yr.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new yr(e,n,i,s)}}function md(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?yr._fromErrorAndOperation(t,o,e,i):o})}async function Tw(t,e,n=!1){const i=await ms(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ti._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sw(t,e,n=!1){const{auth:i}=t;if(It(i.app))return Promise.reject(qn(i));const s="reauthenticate";try{const o=await ms(t,md(i,s,e,t),n);ne(o.idToken,i,"internal-error");const a=Va(o.idToken);ne(a,i,"internal-error");const{sub:c}=a;return ne(t.uid===c,i,"user-mismatch"),Ti._forOperation(t,s,o)}catch(o){throw o?.code==="auth/user-not-found"&&Bt(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(t,e,n=!1){if(It(t.app))return Promise.reject(qn(t));const i="signIn",s=await md(t,i,e),o=await Ti._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(o.user),o}function Cw(t,e,n,i){return an(t).onIdTokenChanged(e,n,i)}function Rw(t,e,n){return an(t).beforeAuthStateChanged(e,n)}function Pw(t,e,n,i){return an(t).onAuthStateChanged(e,n,i)}const wr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wr,"1"),this.storage.removeItem(wr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=1e3,Ow=10;class vd extends _d{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},o=this.storage.getItem(i);lw()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ow):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},kw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vd.type="LOCAL";const Nw=vd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd extends _d{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yd.type="SESSION";const wd=yd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Br(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:o}=n.data,a=this.handlersMap[s];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(a).map(async f=>f(n.origin,o)),u=await Dw(c);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Br.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((c,u)=>{const f=Wa("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(g){const w=g;if(w.data.eventId===f)switch(w.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(w.data.response);break;default:clearTimeout(d),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return window}function Lw(t){Vt().location.href=t}/**
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
 */function Id(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function Mw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Uw(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Fw(){return Id()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="firebaseLocalStorageDb",jw=1,Ir="firebaseLocalStorage",Ed="fbase_key";class Ss{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hr(t,e){return t.transaction([Ir],e?"readwrite":"readonly").objectStore(Ir)}function Vw(){const t=indexedDB.deleteDatabase(bd);return new Ss(t).toPromise()}function ia(){const t=indexedDB.open(bd,jw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Ir,{keyPath:Ed})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Ir)?e(i):(i.close(),await Vw(),e(await ia()))})})}async function pu(t,e,n){const i=Hr(t,!0).put({[Ed]:e,value:n});return new Ss(i).toPromise()}async function $w(t,e){const n=Hr(t,!1).get(e),i=await new Ss(n).toPromise();return i===void 0?null:i.value}function gu(t,e){const n=Hr(t,!0).delete(e);return new Ss(n).toPromise()}const Bw=800,Hw=3;class Td{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ia(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Hw)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Id()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Br._getInstance(Fw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mw(),!this.activeServiceWorker)return;this.sender=new xw(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Uw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ia();return await pu(e,wr,"1"),await gu(e,wr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>pu(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>$w(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Hr(s,!1).getAll();return new Ss(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Td.type="LOCAL";const Ww=Td;new Es(3e4,6e4);/**
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
 */function Sd(t,e){return e?Zt(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends gd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Gw(t){return Aw(t.auth,new Ga(t),t.bypassAuthState)}function zw(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),Sw(n,new Ga(t),t.bypassAuthState)}async function qw(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),Tw(n,new Ga(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n,i,s,o=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:i,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gw;case"linkViaPopup":case"linkViaRedirect":return qw;case"reauthViaPopup":case"reauthViaRedirect":return zw;default:Bt(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=new Es(2e3,1e4);async function Jw(t,e,n){if(It(t.app))return Promise.reject(St(t,"operation-not-supported-in-this-environment"));const i=$r(t);W0(t,e,Ha);const s=Sd(i,n);return new Hn(i,"signInViaPopup",e,s).executeNotNull()}class Hn extends Ad{constructor(e,n,i,s,o){super(e,n,s,o),this.provider=i,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=Wa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Kw.get())};e()}}Hn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw="pendingRedirect",tr=new Map;class Yw extends Ad{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=tr.get(this.auth._key());if(!e){try{const i=await Qw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}tr.set(this.auth._key(),e)}return this.bypassAuthState||tr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qw(t,e){const n=tI(e),i=eI(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function Zw(t,e){tr.set(t._key(),e)}function eI(t){return Zt(t._redirectPersistence)}function tI(t){return er(Xw,t.config.apiKey,t.name)}async function nI(t,e,n=!1){if(It(t.app))return Promise.reject(qn(t));const i=$r(t),s=Sd(i,e),a=await new Yw(i,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=10*60*1e3;class sI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Cd(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(St(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iI&&this.cachedEventUids.clear(),this.cachedEventUids.has(mu(e))}saveEventToCache(e){this.cachedEventUids.add(mu(e)),this.lastProcessedEventTime=Date.now()}}function mu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Cd({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function rI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(t,e={}){return Ci(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lI=/^https?/;async function cI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oI(t);for(const n of e)try{if(uI(n))return}catch{}Bt(t,"unauthorized-domain")}function uI(t){const e=ta(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!lI.test(n))return!1;if(aI.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const hI=new Es(3e4,6e4);function _u(){const t=Vt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fI(t){return new Promise((e,n)=>{var i,s,o;function a(){_u(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_u(),n(St(t,"network-request-failed"))},timeout:hI.get()})}if(!((s=(i=Vt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((o=Vt().gapi)===null||o===void 0)&&o.load)a();else{const c=_w("iframefcb");return Vt()[c]=()=>{gapi.load?a():n(St(t,"network-request-failed"))},gw(`${mw()}?onload=${c}`).catch(u=>n(u))}}).catch(e=>{throw nr=null,e})}let nr=null;function dI(t){return nr=nr||fI(t),nr}/**
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
 */const pI=new Es(5e3,15e3),gI="__/auth/iframe",mI="emulator/auth/iframe",_I={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yI(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fa(e,mI):`https://${t.config.authDomain}/${gI}`,i={apiKey:e.apiKey,appName:t.name,v:Ai},s=vI.get(t.config.apiHost);s&&(i.eid=s);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${bs(i).slice(1)}`}async function wI(t){const e=await dI(t),n=Vt().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:yI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_I,dontclear:!0},i=>new Promise(async(s,o)=>{await i.restyle({setHideOnLeave:!1});const a=St(t,"network-request-failed"),c=Vt().setTimeout(()=>{o(a)},pI.get());function u(){Vt().clearTimeout(c),s(i)}i.ping(u).then(u,()=>{o(a)})}))}/**
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
 */const II={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bI=500,EI=600,TI="_blank",SI="http://localhost";class vu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AI(t,e,n,i=bI,s=EI){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},II),{width:i.toString(),height:s.toString(),top:o,left:a}),f=Ze().toLowerCase();n&&(c=ad(f)?TI:n),rd(f)&&(e=e||SI,u.scrollbars="yes");const d=Object.entries(u).reduce((w,[A,N])=>`${w}${A}=${N},`,"");if(aw(f)&&c!=="_self")return CI(e||"",c),new vu(null);const g=window.open(e||"",c,d);ne(g,t,"popup-blocked");try{g.focus()}catch{}return new vu(g)}function CI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const RI="__/auth/handler",PI="emulator/auth/handler",kI=encodeURIComponent("fac");async function yu(t,e,n,i,s,o){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ai,eventId:s};if(e instanceof Ha){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",ov(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof Ts){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const u=await t._getAppCheckToken(),f=u?`#${kI}=${encodeURIComponent(u)}`:"";return`${OI(t)}?${bs(c).slice(1)}${f}`}function OI({config:t}){return t.emulator?Fa(t,PI):`https://${t.authDomain}/${RI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="webStorageSupport";class NI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wd,this._completeRedirectFn=nI,this._overrideRedirectResult=Zw}async _openPopup(e,n,i,s){var o;rn((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await yu(e,n,i,ta(),s);return AI(e,a,Wa())}async _openRedirect(e,n,i,s){await this._originValidation(e);const o=await yu(e,n,i,ta(),s);return Lw(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(rn(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await wI(e),i=new sI(e);return n.register("authEvent",s=>(ne(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(No,{type:No},s=>{var o;const a=(o=s?.[0])===null||o===void 0?void 0:o[No];a!==void 0&&n(!!a),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fd()||od()||$a()}}const DI=NI;var wu="@firebase/auth",Iu="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MI(t){$t(new Pt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=i.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const u={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dd(t)},f=new dw(i,s,o,u);return yw(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),$t(new Pt("auth-internal",e=>{const n=$r(e.getProvider("auth").getImmediate());return(i=>new xI(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mt(wu,Iu,LI(t)),mt(wu,Iu,"esm2017")}/**
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
 */const UI=5*60,FI=vf("authIdTokenMaxAge")||UI;let bu=null;const jI=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>FI)return;const s=n?.token;bu!==s&&(bu=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function VI(t=Pa()){const e=ii(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vw(t,{popupRedirectResolver:DI,persistence:[Ww,Nw,wd]}),i=vf("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const a=jI(o.toString());Rw(n,a,()=>a(n.currentUser)),Cw(n,c=>a(c))}}const s=mf("auth");return s&&ww(n,`http://${s}`),n}function $I(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}pw({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const o=St("internal-error");o.customData=s,n(o)},i.type="text/javascript",i.charset="UTF-8",$I().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MI("Browser");var Eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var za;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,_){function m(){}m.prototype=_.prototype,S.D=_.prototype,S.prototype=new m,S.prototype.constructor=S,S.C=function(E,T,b){for(var y=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)y[ye-2]=arguments[ye];return _.prototype[T].apply(E,y)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(S,_,m){m||(m=0);var E=Array(16);if(typeof _=="string")for(var T=0;16>T;++T)E[T]=_.charCodeAt(m++)|_.charCodeAt(m++)<<8|_.charCodeAt(m++)<<16|_.charCodeAt(m++)<<24;else for(T=0;16>T;++T)E[T]=_[m++]|_[m++]<<8|_[m++]<<16|_[m++]<<24;_=S.g[0],m=S.g[1],T=S.g[2];var b=S.g[3],y=_+(b^m&(T^b))+E[0]+3614090360&4294967295;_=m+(y<<7&4294967295|y>>>25),y=b+(T^_&(m^T))+E[1]+3905402710&4294967295,b=_+(y<<12&4294967295|y>>>20),y=T+(m^b&(_^m))+E[2]+606105819&4294967295,T=b+(y<<17&4294967295|y>>>15),y=m+(_^T&(b^_))+E[3]+3250441966&4294967295,m=T+(y<<22&4294967295|y>>>10),y=_+(b^m&(T^b))+E[4]+4118548399&4294967295,_=m+(y<<7&4294967295|y>>>25),y=b+(T^_&(m^T))+E[5]+1200080426&4294967295,b=_+(y<<12&4294967295|y>>>20),y=T+(m^b&(_^m))+E[6]+2821735955&4294967295,T=b+(y<<17&4294967295|y>>>15),y=m+(_^T&(b^_))+E[7]+4249261313&4294967295,m=T+(y<<22&4294967295|y>>>10),y=_+(b^m&(T^b))+E[8]+1770035416&4294967295,_=m+(y<<7&4294967295|y>>>25),y=b+(T^_&(m^T))+E[9]+2336552879&4294967295,b=_+(y<<12&4294967295|y>>>20),y=T+(m^b&(_^m))+E[10]+4294925233&4294967295,T=b+(y<<17&4294967295|y>>>15),y=m+(_^T&(b^_))+E[11]+2304563134&4294967295,m=T+(y<<22&4294967295|y>>>10),y=_+(b^m&(T^b))+E[12]+1804603682&4294967295,_=m+(y<<7&4294967295|y>>>25),y=b+(T^_&(m^T))+E[13]+4254626195&4294967295,b=_+(y<<12&4294967295|y>>>20),y=T+(m^b&(_^m))+E[14]+2792965006&4294967295,T=b+(y<<17&4294967295|y>>>15),y=m+(_^T&(b^_))+E[15]+1236535329&4294967295,m=T+(y<<22&4294967295|y>>>10),y=_+(T^b&(m^T))+E[1]+4129170786&4294967295,_=m+(y<<5&4294967295|y>>>27),y=b+(m^T&(_^m))+E[6]+3225465664&4294967295,b=_+(y<<9&4294967295|y>>>23),y=T+(_^m&(b^_))+E[11]+643717713&4294967295,T=b+(y<<14&4294967295|y>>>18),y=m+(b^_&(T^b))+E[0]+3921069994&4294967295,m=T+(y<<20&4294967295|y>>>12),y=_+(T^b&(m^T))+E[5]+3593408605&4294967295,_=m+(y<<5&4294967295|y>>>27),y=b+(m^T&(_^m))+E[10]+38016083&4294967295,b=_+(y<<9&4294967295|y>>>23),y=T+(_^m&(b^_))+E[15]+3634488961&4294967295,T=b+(y<<14&4294967295|y>>>18),y=m+(b^_&(T^b))+E[4]+3889429448&4294967295,m=T+(y<<20&4294967295|y>>>12),y=_+(T^b&(m^T))+E[9]+568446438&4294967295,_=m+(y<<5&4294967295|y>>>27),y=b+(m^T&(_^m))+E[14]+3275163606&4294967295,b=_+(y<<9&4294967295|y>>>23),y=T+(_^m&(b^_))+E[3]+4107603335&4294967295,T=b+(y<<14&4294967295|y>>>18),y=m+(b^_&(T^b))+E[8]+1163531501&4294967295,m=T+(y<<20&4294967295|y>>>12),y=_+(T^b&(m^T))+E[13]+2850285829&4294967295,_=m+(y<<5&4294967295|y>>>27),y=b+(m^T&(_^m))+E[2]+4243563512&4294967295,b=_+(y<<9&4294967295|y>>>23),y=T+(_^m&(b^_))+E[7]+1735328473&4294967295,T=b+(y<<14&4294967295|y>>>18),y=m+(b^_&(T^b))+E[12]+2368359562&4294967295,m=T+(y<<20&4294967295|y>>>12),y=_+(m^T^b)+E[5]+4294588738&4294967295,_=m+(y<<4&4294967295|y>>>28),y=b+(_^m^T)+E[8]+2272392833&4294967295,b=_+(y<<11&4294967295|y>>>21),y=T+(b^_^m)+E[11]+1839030562&4294967295,T=b+(y<<16&4294967295|y>>>16),y=m+(T^b^_)+E[14]+4259657740&4294967295,m=T+(y<<23&4294967295|y>>>9),y=_+(m^T^b)+E[1]+2763975236&4294967295,_=m+(y<<4&4294967295|y>>>28),y=b+(_^m^T)+E[4]+1272893353&4294967295,b=_+(y<<11&4294967295|y>>>21),y=T+(b^_^m)+E[7]+4139469664&4294967295,T=b+(y<<16&4294967295|y>>>16),y=m+(T^b^_)+E[10]+3200236656&4294967295,m=T+(y<<23&4294967295|y>>>9),y=_+(m^T^b)+E[13]+681279174&4294967295,_=m+(y<<4&4294967295|y>>>28),y=b+(_^m^T)+E[0]+3936430074&4294967295,b=_+(y<<11&4294967295|y>>>21),y=T+(b^_^m)+E[3]+3572445317&4294967295,T=b+(y<<16&4294967295|y>>>16),y=m+(T^b^_)+E[6]+76029189&4294967295,m=T+(y<<23&4294967295|y>>>9),y=_+(m^T^b)+E[9]+3654602809&4294967295,_=m+(y<<4&4294967295|y>>>28),y=b+(_^m^T)+E[12]+3873151461&4294967295,b=_+(y<<11&4294967295|y>>>21),y=T+(b^_^m)+E[15]+530742520&4294967295,T=b+(y<<16&4294967295|y>>>16),y=m+(T^b^_)+E[2]+3299628645&4294967295,m=T+(y<<23&4294967295|y>>>9),y=_+(T^(m|~b))+E[0]+4096336452&4294967295,_=m+(y<<6&4294967295|y>>>26),y=b+(m^(_|~T))+E[7]+1126891415&4294967295,b=_+(y<<10&4294967295|y>>>22),y=T+(_^(b|~m))+E[14]+2878612391&4294967295,T=b+(y<<15&4294967295|y>>>17),y=m+(b^(T|~_))+E[5]+4237533241&4294967295,m=T+(y<<21&4294967295|y>>>11),y=_+(T^(m|~b))+E[12]+1700485571&4294967295,_=m+(y<<6&4294967295|y>>>26),y=b+(m^(_|~T))+E[3]+2399980690&4294967295,b=_+(y<<10&4294967295|y>>>22),y=T+(_^(b|~m))+E[10]+4293915773&4294967295,T=b+(y<<15&4294967295|y>>>17),y=m+(b^(T|~_))+E[1]+2240044497&4294967295,m=T+(y<<21&4294967295|y>>>11),y=_+(T^(m|~b))+E[8]+1873313359&4294967295,_=m+(y<<6&4294967295|y>>>26),y=b+(m^(_|~T))+E[15]+4264355552&4294967295,b=_+(y<<10&4294967295|y>>>22),y=T+(_^(b|~m))+E[6]+2734768916&4294967295,T=b+(y<<15&4294967295|y>>>17),y=m+(b^(T|~_))+E[13]+1309151649&4294967295,m=T+(y<<21&4294967295|y>>>11),y=_+(T^(m|~b))+E[4]+4149444226&4294967295,_=m+(y<<6&4294967295|y>>>26),y=b+(m^(_|~T))+E[11]+3174756917&4294967295,b=_+(y<<10&4294967295|y>>>22),y=T+(_^(b|~m))+E[2]+718787259&4294967295,T=b+(y<<15&4294967295|y>>>17),y=m+(b^(T|~_))+E[9]+3951481745&4294967295,S.g[0]=S.g[0]+_&4294967295,S.g[1]=S.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,S.g[2]=S.g[2]+T&4294967295,S.g[3]=S.g[3]+b&4294967295}i.prototype.u=function(S,_){_===void 0&&(_=S.length);for(var m=_-this.blockSize,E=this.B,T=this.h,b=0;b<_;){if(T==0)for(;b<=m;)s(this,S,b),b+=this.blockSize;if(typeof S=="string"){for(;b<_;)if(E[T++]=S.charCodeAt(b++),T==this.blockSize){s(this,E),T=0;break}}else for(;b<_;)if(E[T++]=S[b++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=_},i.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var _=1;_<S.length-8;++_)S[_]=0;var m=8*this.o;for(_=S.length-8;_<S.length;++_)S[_]=m&255,m/=256;for(this.u(S),S=Array(16),_=m=0;4>_;++_)for(var E=0;32>E;E+=8)S[m++]=this.g[_]>>>E&255;return S};function o(S,_){var m=c;return Object.prototype.hasOwnProperty.call(m,S)?m[S]:m[S]=_(S)}function a(S,_){this.h=_;for(var m=[],E=!0,T=S.length-1;0<=T;T--){var b=S[T]|0;E&&b==_||(m[T]=b,E=!1)}this.g=m}var c={};function u(S){return-128<=S&&128>S?o(S,function(_){return new a([_|0],0>_?-1:0)}):new a([S|0],0>S?-1:0)}function f(S){if(isNaN(S)||!isFinite(S))return g;if(0>S)return q(f(-S));for(var _=[],m=1,E=0;S>=m;E++)_[E]=S/m|0,m*=4294967296;return new a(_,0)}function d(S,_){if(S.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(S.charAt(0)=="-")return q(d(S.substring(1),_));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(_,8)),E=g,T=0;T<S.length;T+=8){var b=Math.min(8,S.length-T),y=parseInt(S.substring(T,T+b),_);8>b?(b=f(Math.pow(_,b)),E=E.j(b).add(f(y))):(E=E.j(m),E=E.add(f(y)))}return E}var g=u(0),w=u(1),A=u(16777216);t=a.prototype,t.m=function(){if(M(this))return-q(this).m();for(var S=0,_=1,m=0;m<this.g.length;m++){var E=this.i(m);S+=(0<=E?E:4294967296+E)*_,_*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(N(this))return"0";if(M(this))return"-"+q(this).toString(S);for(var _=f(Math.pow(S,6)),m=this,E="";;){var T=B(m,_).g;m=K(m,T.j(_));var b=((0<m.g.length?m.g[0]:m.h)>>>0).toString(S);if(m=T,N(m))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function N(S){if(S.h!=0)return!1;for(var _=0;_<S.g.length;_++)if(S.g[_]!=0)return!1;return!0}function M(S){return S.h==-1}t.l=function(S){return S=K(this,S),M(S)?-1:N(S)?0:1};function q(S){for(var _=S.g.length,m=[],E=0;E<_;E++)m[E]=~S.g[E];return new a(m,~S.h).add(w)}t.abs=function(){return M(this)?q(this):this},t.add=function(S){for(var _=Math.max(this.g.length,S.g.length),m=[],E=0,T=0;T<=_;T++){var b=E+(this.i(T)&65535)+(S.i(T)&65535),y=(b>>>16)+(this.i(T)>>>16)+(S.i(T)>>>16);E=y>>>16,b&=65535,y&=65535,m[T]=y<<16|b}return new a(m,m[m.length-1]&-2147483648?-1:0)};function K(S,_){return S.add(q(_))}t.j=function(S){if(N(this)||N(S))return g;if(M(this))return M(S)?q(this).j(q(S)):q(q(this).j(S));if(M(S))return q(this.j(q(S)));if(0>this.l(A)&&0>S.l(A))return f(this.m()*S.m());for(var _=this.g.length+S.g.length,m=[],E=0;E<2*_;E++)m[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<S.g.length;T++){var b=this.i(E)>>>16,y=this.i(E)&65535,ye=S.i(T)>>>16,Ne=S.i(T)&65535;m[2*E+2*T]+=y*Ne,V(m,2*E+2*T),m[2*E+2*T+1]+=b*Ne,V(m,2*E+2*T+1),m[2*E+2*T+1]+=y*ye,V(m,2*E+2*T+1),m[2*E+2*T+2]+=b*ye,V(m,2*E+2*T+2)}for(E=0;E<_;E++)m[E]=m[2*E+1]<<16|m[2*E];for(E=_;E<2*_;E++)m[E]=0;return new a(m,0)};function V(S,_){for(;(S[_]&65535)!=S[_];)S[_+1]+=S[_]>>>16,S[_]&=65535,_++}function $(S,_){this.g=S,this.h=_}function B(S,_){if(N(_))throw Error("division by zero");if(N(S))return new $(g,g);if(M(S))return _=B(q(S),_),new $(q(_.g),q(_.h));if(M(_))return _=B(S,q(_)),new $(q(_.g),_.h);if(30<S.g.length){if(M(S)||M(_))throw Error("slowDivide_ only works with positive integers.");for(var m=w,E=_;0>=E.l(S);)m=se(m),E=se(E);var T=re(m,1),b=re(E,1);for(E=re(E,2),m=re(m,2);!N(E);){var y=b.add(E);0>=y.l(S)&&(T=T.add(m),b=y),E=re(E,1),m=re(m,1)}return _=K(S,T.j(_)),new $(T,_)}for(T=g;0<=S.l(_);){for(m=Math.max(1,Math.floor(S.m()/_.m())),E=Math.ceil(Math.log(m)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=f(m),y=b.j(_);M(y)||0<y.l(S);)m-=E,b=f(m),y=b.j(_);N(b)&&(b=w),T=T.add(b),S=K(S,y)}return new $(T,S)}t.A=function(S){return B(this,S).h},t.and=function(S){for(var _=Math.max(this.g.length,S.g.length),m=[],E=0;E<_;E++)m[E]=this.i(E)&S.i(E);return new a(m,this.h&S.h)},t.or=function(S){for(var _=Math.max(this.g.length,S.g.length),m=[],E=0;E<_;E++)m[E]=this.i(E)|S.i(E);return new a(m,this.h|S.h)},t.xor=function(S){for(var _=Math.max(this.g.length,S.g.length),m=[],E=0;E<_;E++)m[E]=this.i(E)^S.i(E);return new a(m,this.h^S.h)};function se(S){for(var _=S.g.length+1,m=[],E=0;E<_;E++)m[E]=S.i(E)<<1|S.i(E-1)>>>31;return new a(m,S.h)}function re(S,_){var m=_>>5;_%=32;for(var E=S.g.length-m,T=[],b=0;b<E;b++)T[b]=0<_?S.i(b+m)>>>_|S.i(b+m+1)<<32-_:S.i(b+m);return new a(T,S.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,za=a}).apply(typeof Eu<"u"?Eu:typeof self<"u"?self:typeof window<"u"?window:{});var zs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,l,h){return r==Array.prototype||r==Object.prototype||(r[l]=h.value),r};function n(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof zs=="object"&&zs];for(var l=0;l<r.length;++l){var h=r[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var i=n(this);function s(r,l){if(l)e:{var h=i;r=r.split(".");for(var p=0;p<r.length-1;p++){var R=r[p];if(!(R in h))break e;h=h[R]}r=r[r.length-1],p=h[r],l=l(p),l!=p&&l!=null&&e(h,r,{configurable:!0,writable:!0,value:l})}}function o(r,l){r instanceof String&&(r+="");var h=0,p=!1,R={next:function(){if(!p&&h<r.length){var P=h++;return{value:l(P,r[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(r){return r||function(){return o(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(r){var l=typeof r;return l=l!="object"?l:r?Array.isArray(r)?"array":l:"null",l=="array"||l=="object"&&typeof r.length=="number"}function f(r){var l=typeof r;return l=="object"&&r!=null||l=="function"}function d(r,l,h){return r.call.apply(r.bind,arguments)}function g(r,l,h){if(!r)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),r.apply(l,R)}}return function(){return r.apply(l,arguments)}}function w(r,l,h){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,w.apply(null,arguments)}function A(r,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),r.apply(this,p)}}function N(r,l){function h(){}h.prototype=l.prototype,r.aa=l.prototype,r.prototype=new h,r.prototype.constructor=r,r.Qb=function(p,R,P){for(var j=Array(arguments.length-2),we=2;we<arguments.length;we++)j[we-2]=arguments[we];return l.prototype[R].apply(p,j)}}function M(r){const l=r.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=r[p];return h}return[]}function q(r,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const R=r.length||0,P=p.length||0;r.length=R+P;for(let j=0;j<P;j++)r[R+j]=p[j]}else r.push(p)}}class K{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function V(r){return/^[\s\xa0]*$/.test(r)}function $(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function B(r){return B[" "](r),r}B[" "]=function(){};var se=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function re(r,l,h){for(const p in r)l.call(h,r[p],p,r)}function S(r,l){for(const h in r)l.call(void 0,r[h],h,r)}function _(r){const l={};for(const h in r)l[h]=r[h];return l}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(r,l){let h,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(h in p)r[h]=p[h];for(let P=0;P<m.length;P++)h=m[P],Object.prototype.hasOwnProperty.call(p,h)&&(r[h]=p[h])}}function T(r){var l=1;r=r.split(":");const h=[];for(;0<l&&r.length;)h.push(r.shift()),l--;return r.length&&h.push(r.join(":")),h}function b(r){c.setTimeout(()=>{throw r},0)}function y(){var r=it;let l=null;return r.g&&(l=r.g,r.g=r.g.next,r.g||(r.h=null),l.next=null),l}class ye{constructor(){this.h=this.g=null}add(l,h){const p=Ne.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Ne=new K(()=>new Ae,r=>r.reset());class Ae{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let le,ae=!1,it=new ye,vt=()=>{const r=c.Promise.resolve(void 0);le=()=>{r.then(at)}};var at=()=>{for(var r;r=y();){try{r.h.call(r.g)}catch(h){b(h)}var l=Ne;l.j(r),100>l.h&&(l.h++,r.next=l.g,l.g=r)}ae=!1};function Ce(){this.s=this.s,this.C=this.C}Ce.prototype.s=!1,Ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(r,l){this.type=r,this.g=this.target=l,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var ln=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,l=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return r}();function Ot(r,l){if(Re.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var h=this.type=r.type,p=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=l,l=r.relatedTarget){if(se){e:{try{B(l.nodeName);var R=!0;break e}catch{}R=!1}R||(l=null)}}else h=="mouseover"?l=r.fromElement:h=="mouseout"&&(l=r.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:et[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Ot.aa.h.call(this)}}N(Ot,Re);var et={2:"touch",3:"pen",4:"mouse"};Ot.prototype.h=function(){Ot.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var k="closure_listenable_"+(1e6*Math.random()|0),J=0;function z(r,l,h,p,R){this.listener=r,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=R,this.key=++J,this.da=this.fa=!1}function X(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function de(r){this.src=r,this.g={},this.h=0}de.prototype.add=function(r,l,h,p,R){var P=r.toString();r=this.g[P],r||(r=this.g[P]=[],this.h++);var j=I(r,l,p,R);return-1<j?(l=r[j],h||(l.fa=!1)):(l=new z(l,this.src,P,!!p,R),l.fa=h,r.push(l)),l};function v(r,l){var h=l.type;if(h in r.g){var p=r.g[h],R=Array.prototype.indexOf.call(p,l,void 0),P;(P=0<=R)&&Array.prototype.splice.call(p,R,1),P&&(X(l),r.g[h].length==0&&(delete r.g[h],r.h--))}}function I(r,l,h,p){for(var R=0;R<r.length;++R){var P=r[R];if(!P.da&&P.listener==l&&P.capture==!!h&&P.ha==p)return R}return-1}var C="closure_lm_"+(1e6*Math.random()|0),O={};function x(r,l,h,p,R){if(Array.isArray(l)){for(var P=0;P<l.length;P++)x(r,l[P],h,p,R);return null}return h=ee(h),r&&r[k]?r.K(l,h,f(p)?!!p.capture:!1,R):D(r,l,h,!1,p,R)}function D(r,l,h,p,R,P){if(!l)throw Error("Invalid event type");var j=f(R)?!!R.capture:!!R,we=H(r);if(we||(r[C]=we=new de(r)),h=we.add(l,h,p,j,P),h.proxy)return h;if(p=G(),h.proxy=p,p.src=r,p.listener=h,r.addEventListener)ln||(R=j),R===void 0&&(R=!1),r.addEventListener(l.toString(),p,R);else if(r.attachEvent)r.attachEvent(L(l.toString()),p);else if(r.addListener&&r.removeListener)r.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function G(){function r(h){return l.call(r.src,r.listener,h)}const l=Q;return r}function F(r,l,h,p,R){if(Array.isArray(l))for(var P=0;P<l.length;P++)F(r,l[P],h,p,R);else p=f(p)?!!p.capture:!!p,h=ee(h),r&&r[k]?(r=r.i,l=String(l).toString(),l in r.g&&(P=r.g[l],h=I(P,h,p,R),-1<h&&(X(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete r.g[l],r.h--)))):r&&(r=H(r))&&(l=r.g[l.toString()],r=-1,l&&(r=I(l,h,p,R)),(h=-1<r?l[r]:null)&&U(h))}function U(r){if(typeof r!="number"&&r&&!r.da){var l=r.src;if(l&&l[k])v(l.i,r);else{var h=r.type,p=r.proxy;l.removeEventListener?l.removeEventListener(h,p,r.capture):l.detachEvent?l.detachEvent(L(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=H(l))?(v(h,r),h.h==0&&(h.src=null,l[C]=null)):X(r)}}}function L(r){return r in O?O[r]:O[r]="on"+r}function Q(r,l){if(r.da)r=!0;else{l=new Ot(l,this);var h=r.listener,p=r.ha||r.src;r.fa&&U(r),r=h.call(p,l)}return r}function H(r){return r=r[C],r instanceof de?r:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function ee(r){return typeof r=="function"?r:(r[Y]||(r[Y]=function(l){return r.handleEvent(l)}),r[Y])}function Z(){Ce.call(this),this.i=new de(this),this.M=this,this.F=null}N(Z,Ce),Z.prototype[k]=!0,Z.prototype.removeEventListener=function(r,l,h,p){F(this,r,l,h,p)};function oe(r,l){var h,p=r.F;if(p)for(h=[];p;p=p.F)h.push(p);if(r=r.M,p=l.type||l,typeof l=="string")l=new Re(l,r);else if(l instanceof Re)l.target=l.target||r;else{var R=l;l=new Re(p,r),E(l,R)}if(R=!0,h)for(var P=h.length-1;0<=P;P--){var j=l.g=h[P];R=ce(j,p,!0,l)&&R}if(j=l.g=r,R=ce(j,p,!0,l)&&R,R=ce(j,p,!1,l)&&R,h)for(P=0;P<h.length;P++)j=l.g=h[P],R=ce(j,p,!1,l)&&R}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var r=this.i,l;for(l in r.g){for(var h=r.g[l],p=0;p<h.length;p++)X(h[p]);delete r.g[l],r.h--}}this.F=null},Z.prototype.K=function(r,l,h,p){return this.i.add(String(r),l,!1,h,p)},Z.prototype.L=function(r,l,h,p){return this.i.add(String(r),l,!0,h,p)};function ce(r,l,h,p){if(l=r.i.g[String(l)],!l)return!0;l=l.concat();for(var R=!0,P=0;P<l.length;++P){var j=l[P];if(j&&!j.da&&j.capture==h){var we=j.listener,je=j.ha||j.src;j.fa&&v(r.i,j),R=we.call(je,p)!==!1&&R}}return R&&!p.defaultPrevented}function Me(r,l,h){if(typeof r=="function")h&&(r=w(r,h));else if(r&&typeof r.handleEvent=="function")r=w(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(r,l||0)}function Ue(r){r.g=Me(()=>{r.g=null,r.i&&(r.i=!1,Ue(r))},r.l);const l=r.h;r.h=null,r.m.apply(null,l)}class lt extends Ce{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ue(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(r){Ce.call(this),this.h=r,this.g={}}N(He,Ce);var cn=[];function Ri(r){re(r.g,function(l,h){this.g.hasOwnProperty(h)&&U(l)},r),r.g={}}He.prototype.N=function(){He.aa.N.call(this),Ri(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fe=c.JSON.stringify,ct=c.JSON.parse,Rs=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function Wr(){}Wr.prototype.h=null;function Qa(r){return r.h||(r.h=r.i())}function Md(){}var Pi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gr(){Re.call(this,"d")}N(Gr,Re);function zr(){Re.call(this,"c")}N(zr,Re);var ri={},Za=null;function qr(){return Za=Za||new Z}ri.La="serverreachability";function el(r){Re.call(this,ri.La,r)}N(el,Re);function ki(r){const l=qr();oe(l,new el(l))}ri.STAT_EVENT="statevent";function tl(r,l){Re.call(this,ri.STAT_EVENT,r),this.stat=l}N(tl,Re);function Ke(r){const l=qr();oe(l,new tl(l,r))}ri.Ma="timingevent";function nl(r,l){Re.call(this,ri.Ma,r),this.size=l}N(nl,Re);function Oi(r,l){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},l)}function Ni(){this.g=!0}Ni.prototype.xa=function(){this.g=!1};function Ud(r,l,h,p,R,P){r.info(function(){if(r.g)if(P)for(var j="",we=P.split("&"),je=0;je<we.length;je++){var pe=we[je].split("=");if(1<pe.length){var We=pe[0];pe=pe[1];var Ge=We.split("_");j=2<=Ge.length&&Ge[1]=="type"?j+(We+"="+pe+"&"):j+(We+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+l+`
`+h+`
`+j})}function Fd(r,l,h,p,R,P,j){r.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+l+`
`+h+`
`+P+" "+j})}function oi(r,l,h,p){r.info(function(){return"XMLHTTP TEXT ("+l+"): "+Vd(r,h)+(p?" "+p:"")})}function jd(r,l){r.info(function(){return"TIMEOUT: "+l})}Ni.prototype.info=function(){};function Vd(r,l){if(!r.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(r=0;r<h.length;r++)if(Array.isArray(h[r])){var p=h[r];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<R.length;j++)R[j]=""}}}}return Fe(h)}catch{return l}}var Kr={NO_ERROR:0,TIMEOUT:8},$d={},Jr;function Ps(){}N(Ps,Wr),Ps.prototype.g=function(){return new XMLHttpRequest},Ps.prototype.i=function(){return{}},Jr=new Ps;function un(r,l,h,p){this.j=r,this.i=l,this.l=h,this.R=p||1,this.U=new He(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new il}function il(){this.i=null,this.g="",this.h=!1}var sl={},Xr={};function Yr(r,l,h){r.L=1,r.v=Ds(Ht(l)),r.m=h,r.P=!0,rl(r,null)}function rl(r,l){r.F=Date.now(),ks(r),r.A=Ht(r.v);var h=r.A,p=r.R;Array.isArray(p)||(p=[String(p)]),yl(h.i,"t",p),r.C=0,h=r.j.J,r.h=new il,r.g=Ul(r.j,h?l:null,!r.m),0<r.O&&(r.M=new lt(w(r.Y,r,r.g),r.O)),l=r.U,h=r.g,p=r.ca;var R="readystatechange";Array.isArray(R)||(R&&(cn[0]=R.toString()),R=cn);for(var P=0;P<R.length;P++){var j=x(h,R[P],p||l.handleEvent,!1,l.h||l);if(!j)break;l.g[j.key]=j}l=r.H?_(r.H):{},r.m?(r.u||(r.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,l)):(r.u="GET",r.g.ea(r.A,r.u,null,l)),ki(),Ud(r.i,r.u,r.A,r.l,r.R,r.m)}un.prototype.ca=function(r){r=r.target;const l=this.M;l&&Wt(r)==3?l.j():this.Y(r)},un.prototype.Y=function(r){try{if(r==this.g)e:{const Ge=Wt(this.g);var l=this.g.Ba();const ci=this.g.Z();if(!(3>Ge)&&(Ge!=3||this.g&&(this.h.h||this.g.oa()||Al(this.g)))){this.J||Ge!=4||l==7||(l==8||0>=ci?ki(3):ki(2)),Qr(this);var h=this.g.Z();this.X=h;t:if(ol(this)){var p=Al(this.g);r="";var R=p.length,P=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){On(this),Di(this);var j="";break t}this.h.i=new c.TextDecoder}for(l=0;l<R;l++)this.h.h=!0,r+=this.h.i.decode(p[l],{stream:!(P&&l==R-1)});p.length=0,this.h.g+=r,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=h==200,Fd(this.i,this.u,this.A,this.l,this.R,Ge,h),this.o){if(this.T&&!this.K){t:{if(this.g){var we,je=this.g;if((we=je.g?je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(we)){var pe=we;break t}}pe=null}if(h=pe)oi(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zr(this,h);else{this.o=!1,this.s=3,Ke(12),On(this),Di(this);break e}}if(this.P){h=!0;let yt;for(;!this.J&&this.C<j.length;)if(yt=Bd(this,j),yt==Xr){Ge==4&&(this.s=4,Ke(14),h=!1),oi(this.i,this.l,null,"[Incomplete Response]");break}else if(yt==sl){this.s=4,Ke(15),oi(this.i,this.l,j,"[Invalid Chunk]"),h=!1;break}else oi(this.i,this.l,yt,null),Zr(this,yt);if(ol(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ge!=4||j.length!=0||this.h.h||(this.s=1,Ke(16),h=!1),this.o=this.o&&h,!h)oi(this.i,this.l,j,"[Invalid Chunked Response]"),On(this),Di(this);else if(0<j.length&&!this.W){this.W=!0;var We=this.j;We.g==this&&We.ba&&!We.M&&(We.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),ro(We),We.M=!0,Ke(11))}}else oi(this.i,this.l,j,null),Zr(this,j);Ge==4&&On(this),this.o&&!this.J&&(Ge==4?Dl(this.j,this):(this.o=!1,ks(this)))}else rp(this.g),h==400&&0<j.indexOf("Unknown SID")?(this.s=3,Ke(12)):(this.s=0,Ke(13)),On(this),Di(this)}}}catch{}finally{}};function ol(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Bd(r,l){var h=r.C,p=l.indexOf(`
`,h);return p==-1?Xr:(h=Number(l.substring(h,p)),isNaN(h)?sl:(p+=1,p+h>l.length?Xr:(l=l.slice(p,p+h),r.C=p+h,l)))}un.prototype.cancel=function(){this.J=!0,On(this)};function ks(r){r.S=Date.now()+r.I,al(r,r.I)}function al(r,l){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Oi(w(r.ba,r),l)}function Qr(r){r.B&&(c.clearTimeout(r.B),r.B=null)}un.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(jd(this.i,this.A),this.L!=2&&(ki(),Ke(17)),On(this),this.s=2,Di(this)):al(this,this.S-r)};function Di(r){r.j.G==0||r.J||Dl(r.j,r)}function On(r){Qr(r);var l=r.M;l&&typeof l.ma=="function"&&l.ma(),r.M=null,Ri(r.U),r.g&&(l=r.g,r.g=null,l.abort(),l.ma())}function Zr(r,l){try{var h=r.j;if(h.G!=0&&(h.g==r||eo(h.h,r))){if(!r.K&&eo(h.h,r)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<r.F)js(h),Us(h);else break e;so(h),Ke(18)}}else h.za=R[1],0<h.za-h.T&&37500>R[2]&&h.F&&h.v==0&&!h.C&&(h.C=Oi(w(h.Za,h),6e3));if(1>=ul(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Dn(h,11)}else if((r.K||h.g==r)&&js(h),!V(l))for(R=h.Da.g.parse(l),l=0;l<R.length;l++){let pe=R[l];if(h.T=pe[0],pe=pe[1],h.G==2)if(pe[0]=="c"){h.K=pe[1],h.ia=pe[2];const We=pe[3];We!=null&&(h.la=We,h.j.info("VER="+h.la));const Ge=pe[4];Ge!=null&&(h.Aa=Ge,h.j.info("SVER="+h.Aa));const ci=pe[5];ci!=null&&typeof ci=="number"&&0<ci&&(p=1.5*ci,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const yt=r.g;if(yt){const Vs=yt.g?yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vs){var P=p.h;P.g||Vs.indexOf("spdy")==-1&&Vs.indexOf("quic")==-1&&Vs.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(to(P,P.h),P.h=null))}if(p.D){const oo=yt.g?yt.g.getResponseHeader("X-HTTP-Session-Id"):null;oo&&(p.ya=oo,Ee(p.I,p.D,oo))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-r.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var j=r;if(p.qa=Ml(p,p.J?p.ia:null,p.W),j.K){hl(p.h,j);var we=j,je=p.L;je&&(we.I=je),we.B&&(Qr(we),ks(we)),p.g=j}else Ol(p);0<h.i.length&&Fs(h)}else pe[0]!="stop"&&pe[0]!="close"||Dn(h,7);else h.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?Dn(h,7):io(h):pe[0]!="noop"&&h.l&&h.l.ta(pe),h.v=0)}}ki(4)}catch{}}var Hd=class{constructor(r,l){this.g=r,this.map=l}};function ll(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cl(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function ul(r){return r.h?1:r.g?r.g.size:0}function eo(r,l){return r.h?r.h==l:r.g?r.g.has(l):!1}function to(r,l){r.g?r.g.add(l):r.h=l}function hl(r,l){r.h&&r.h==l?r.h=null:r.g&&r.g.has(l)&&r.g.delete(l)}ll.prototype.cancel=function(){if(this.i=fl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function fl(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let l=r.i;for(const h of r.g.values())l=l.concat(h.D);return l}return M(r.i)}function Wd(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(u(r)){for(var l=[],h=r.length,p=0;p<h;p++)l.push(r[p]);return l}l=[],h=0;for(p in r)l[h++]=r[p];return l}function Gd(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(u(r)||typeof r=="string"){var l=[];r=r.length;for(var h=0;h<r;h++)l.push(h);return l}l=[],h=0;for(const p in r)l[h++]=p;return l}}}function dl(r,l){if(r.forEach&&typeof r.forEach=="function")r.forEach(l,void 0);else if(u(r)||typeof r=="string")Array.prototype.forEach.call(r,l,void 0);else for(var h=Gd(r),p=Wd(r),R=p.length,P=0;P<R;P++)l.call(void 0,p[P],h&&h[P],r)}var pl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zd(r,l){if(r){r=r.split("&");for(var h=0;h<r.length;h++){var p=r[h].indexOf("="),R=null;if(0<=p){var P=r[h].substring(0,p);R=r[h].substring(p+1)}else P=r[h];l(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Nn(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Nn){this.h=r.h,Os(this,r.j),this.o=r.o,this.g=r.g,Ns(this,r.s),this.l=r.l;var l=r.i,h=new Mi;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),gl(this,h),this.m=r.m}else r&&(l=String(r).match(pl))?(this.h=!1,Os(this,l[1]||"",!0),this.o=xi(l[2]||""),this.g=xi(l[3]||"",!0),Ns(this,l[4]),this.l=xi(l[5]||"",!0),gl(this,l[6]||"",!0),this.m=xi(l[7]||"")):(this.h=!1,this.i=new Mi(null,this.h))}Nn.prototype.toString=function(){var r=[],l=this.j;l&&r.push(Li(l,ml,!0),":");var h=this.g;return(h||l=="file")&&(r.push("//"),(l=this.o)&&r.push(Li(l,ml,!0),"@"),r.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&r.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&r.push("/"),r.push(Li(h,h.charAt(0)=="/"?Jd:Kd,!0))),(h=this.i.toString())&&r.push("?",h),(h=this.m)&&r.push("#",Li(h,Yd)),r.join("")};function Ht(r){return new Nn(r)}function Os(r,l,h){r.j=h?xi(l,!0):l,r.j&&(r.j=r.j.replace(/:$/,""))}function Ns(r,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);r.s=l}else r.s=null}function gl(r,l,h){l instanceof Mi?(r.i=l,Qd(r.i,r.h)):(h||(l=Li(l,Xd)),r.i=new Mi(l,r.h))}function Ee(r,l,h){r.i.set(l,h)}function Ds(r){return Ee(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function xi(r,l){return r?l?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Li(r,l,h){return typeof r=="string"?(r=encodeURI(r).replace(l,qd),h&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function qd(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var ml=/[#\/\?@]/g,Kd=/[#\?:]/g,Jd=/[#\?]/g,Xd=/[#\?@]/g,Yd=/#/g;function Mi(r,l){this.h=this.g=null,this.i=r||null,this.j=!!l}function hn(r){r.g||(r.g=new Map,r.h=0,r.i&&zd(r.i,function(l,h){r.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}t=Mi.prototype,t.add=function(r,l){hn(this),this.i=null,r=ai(this,r);var h=this.g.get(r);return h||this.g.set(r,h=[]),h.push(l),this.h+=1,this};function _l(r,l){hn(r),l=ai(r,l),r.g.has(l)&&(r.i=null,r.h-=r.g.get(l).length,r.g.delete(l))}function vl(r,l){return hn(r),l=ai(r,l),r.g.has(l)}t.forEach=function(r,l){hn(this),this.g.forEach(function(h,p){h.forEach(function(R){r.call(l,R,p,this)},this)},this)},t.na=function(){hn(this);const r=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const R=r[p];for(let P=0;P<R.length;P++)h.push(l[p])}return h},t.V=function(r){hn(this);let l=[];if(typeof r=="string")vl(this,r)&&(l=l.concat(this.g.get(ai(this,r))));else{r=Array.from(this.g.values());for(let h=0;h<r.length;h++)l=l.concat(r[h])}return l},t.set=function(r,l){return hn(this),this.i=null,r=ai(this,r),vl(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[l]),this.h+=1,this},t.get=function(r,l){return r?(r=this.V(r),0<r.length?String(r[0]):l):l};function yl(r,l,h){_l(r,l),0<h.length&&(r.i=null,r.g.set(ai(r,l),M(h)),r.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const P=encodeURIComponent(String(p)),j=this.V(p);for(p=0;p<j.length;p++){var R=P;j[p]!==""&&(R+="="+encodeURIComponent(String(j[p]))),r.push(R)}}return this.i=r.join("&")};function ai(r,l){return l=String(l),r.j&&(l=l.toLowerCase()),l}function Qd(r,l){l&&!r.j&&(hn(r),r.i=null,r.g.forEach(function(h,p){var R=p.toLowerCase();p!=R&&(_l(this,p),yl(this,R,h))},r)),r.j=l}function Zd(r,l){const h=new Ni;if(c.Image){const p=new Image;p.onload=A(fn,h,"TestLoadImage: loaded",!0,l,p),p.onerror=A(fn,h,"TestLoadImage: error",!1,l,p),p.onabort=A(fn,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=A(fn,h,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=r}else l(!1)}function ep(r,l){const h=new Ni,p=new AbortController,R=setTimeout(()=>{p.abort(),fn(h,"TestPingServer: timeout",!1,l)},1e4);fetch(r,{signal:p.signal}).then(P=>{clearTimeout(R),P.ok?fn(h,"TestPingServer: ok",!0,l):fn(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(R),fn(h,"TestPingServer: error",!1,l)})}function fn(r,l,h,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(h)}catch{}}function tp(){this.g=new Rs}function np(r,l,h){const p=h||"";try{dl(r,function(R,P){let j=R;f(R)&&(j=Fe(R)),l.push(p+P+"="+encodeURIComponent(j))})}catch(R){throw l.push(p+"type="+encodeURIComponent("_badmap")),R}}function xs(r){this.l=r.Ub||null,this.j=r.eb||!1}N(xs,Wr),xs.prototype.g=function(){return new Ls(this.l,this.j)},xs.prototype.i=function(r){return function(){return r}}({});function Ls(r,l){Z.call(this),this.D=r,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Ls,Z),t=Ls.prototype,t.open=function(r,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=l,this.readyState=1,Fi(this)},t.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(l.body=r),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ui(this)),this.readyState=0},t.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Fi(this)),this.g&&(this.readyState=3,Fi(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wl(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function wl(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}t.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var l=r.value?r.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!r.done}))&&(this.response=this.responseText+=l)}r.done?Ui(this):Fi(this),this.readyState==3&&wl(this)}},t.Ra=function(r){this.g&&(this.response=this.responseText=r,Ui(this))},t.Qa=function(r){this.g&&(this.response=r,Ui(this))},t.ga=function(){this.g&&Ui(this)};function Ui(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Fi(r)}t.setRequestHeader=function(r,l){this.u.append(r,l)},t.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,r.push(h[0]+": "+h[1]),h=l.next();return r.join(`\r
`)};function Fi(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(Ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Il(r){let l="";return re(r,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function no(r,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Il(h),typeof r=="string"?h!=null&&encodeURIComponent(String(h)):Ee(r,l,h))}function Pe(r){Z.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Pe,Z);var ip=/^https?$/i,sp=["POST","PUT"];t=Pe.prototype,t.Ha=function(r){this.J=r},t.ea=function(r,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);l=l?l.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Jr.g(),this.v=this.o?Qa(this.o):Qa(Jr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(l,String(r),!0),this.B=!1}catch(P){bl(this,P);return}if(r=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)h.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())h.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),R=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call(sp,l,void 0))||p||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of h)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sl(this),this.u=!0,this.g.send(r),this.u=!1}catch(P){bl(this,P)}};function bl(r,l){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=l,r.m=5,El(r),Ms(r)}function El(r){r.A||(r.A=!0,oe(r,"complete"),oe(r,"error"))}t.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,oe(this,"complete"),oe(this,"abort"),Ms(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ms(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Tl(this):this.bb())},t.bb=function(){Tl(this)};function Tl(r){if(r.h&&typeof a<"u"&&(!r.v[1]||Wt(r)!=4||r.Z()!=2)){if(r.u&&Wt(r)==4)Me(r.Ea,0,r);else if(oe(r,"readystatechange"),Wt(r)==4){r.h=!1;try{const j=r.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=j===0){var R=String(r.D).match(pl)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),p=!ip.test(R?R.toLowerCase():"")}h=p}if(h)oe(r,"complete"),oe(r,"success");else{r.m=6;try{var P=2<Wt(r)?r.g.statusText:""}catch{P=""}r.l=P+" ["+r.Z()+"]",El(r)}}finally{Ms(r)}}}}function Ms(r,l){if(r.g){Sl(r);const h=r.g,p=r.v[0]?()=>{}:null;r.g=null,r.v=null,l||oe(r,"ready");try{h.onreadystatechange=p}catch{}}}function Sl(r){r.I&&(c.clearTimeout(r.I),r.I=null)}t.isActive=function(){return!!this.g};function Wt(r){return r.g?r.g.readyState:0}t.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(r){if(this.g){var l=this.g.responseText;return r&&l.indexOf(r)==0&&(l=l.substring(r.length)),ct(l)}};function Al(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function rp(r){const l={};r=(r.g&&2<=Wt(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<r.length;p++){if(V(r[p]))continue;var h=T(r[p]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=l[R]||[];l[R]=P,P.push(h)}S(l,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ji(r,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[r]||l}function Cl(r){this.Aa=0,this.i=[],this.j=new Ni,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ji("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ji("baseRetryDelayMs",5e3,r),this.cb=ji("retryDelaySeedMs",1e4,r),this.Wa=ji("forwardChannelMaxRetries",2,r),this.wa=ji("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new ll(r&&r.concurrentRequestLimit),this.Da=new tp,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Cl.prototype,t.la=8,t.G=1,t.connect=function(r,l,h,p){Ke(0),this.W=r,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Ml(this,null,this.W),Fs(this)};function io(r){if(Rl(r),r.G==3){var l=r.U++,h=Ht(r.I);if(Ee(h,"SID",r.K),Ee(h,"RID",l),Ee(h,"TYPE","terminate"),Vi(r,h),l=new un(r,r.j,l),l.L=2,l.v=Ds(Ht(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=Ul(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ks(l)}Ll(r)}function Us(r){r.g&&(ro(r),r.g.cancel(),r.g=null)}function Rl(r){Us(r),r.u&&(c.clearTimeout(r.u),r.u=null),js(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function Fs(r){if(!cl(r.h)&&!r.s){r.s=!0;var l=r.Ga;le||vt(),ae||(le(),ae=!0),it.add(l,r),r.B=0}}function op(r,l){return ul(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=l.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Oi(w(r.Ga,r,l),xl(r,r.B)),r.B++,!0)}t.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const R=new un(this,this.j,r);let P=this.o;if(this.S&&(P?(P=_(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=kl(this,R,l),h=Ht(this.I),Ee(h,"RID",r),Ee(h,"CVER",22),this.D&&Ee(h,"X-HTTP-Session-Id",this.D),Vi(this,h),P&&(this.O?l="headers="+encodeURIComponent(String(Il(P)))+"&"+l:this.m&&no(h,this.m,P)),to(this.h,R),this.Ua&&Ee(h,"TYPE","init"),this.P?(Ee(h,"$req",l),Ee(h,"SID","null"),R.T=!0,Yr(R,h,null)):Yr(R,h,l),this.G=2}}else this.G==3&&(r?Pl(this,r):this.i.length==0||cl(this.h)||Pl(this))};function Pl(r,l){var h;l?h=l.l:h=r.U++;const p=Ht(r.I);Ee(p,"SID",r.K),Ee(p,"RID",h),Ee(p,"AID",r.T),Vi(r,p),r.m&&r.o&&no(p,r.m,r.o),h=new un(r,r.j,h,r.B+1),r.m===null&&(h.H=r.o),l&&(r.i=l.D.concat(r.i)),l=kl(r,h,1e3),h.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),to(r.h,h),Yr(h,p,l)}function Vi(r,l){r.H&&re(r.H,function(h,p){Ee(l,p,h)}),r.l&&dl({},function(h,p){Ee(l,p,h)})}function kl(r,l,h){h=Math.min(r.i.length,h);var p=r.l?w(r.l.Na,r.l,r):null;e:{var R=r.i;let P=-1;for(;;){const j=["count="+h];P==-1?0<h?(P=R[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let we=!0;for(let je=0;je<h;je++){let pe=R[je].g;const We=R[je].map;if(pe-=P,0>pe)P=Math.max(0,R[je].g-100),we=!1;else try{np(We,j,"req"+pe+"_")}catch{p&&p(We)}}if(we){p=j.join("&");break e}}}return r=r.i.splice(0,h),l.D=r,p}function Ol(r){if(!r.g&&!r.u){r.Y=1;var l=r.Fa;le||vt(),ae||(le(),ae=!0),it.add(l,r),r.v=0}}function so(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Oi(w(r.Fa,r),xl(r,r.v)),r.v++,!0)}t.Fa=function(){if(this.u=null,Nl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Oi(w(this.ab,this),r)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ke(10),Us(this),Nl(this))};function ro(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function Nl(r){r.g=new un(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var l=Ht(r.qa);Ee(l,"RID","rpc"),Ee(l,"SID",r.K),Ee(l,"AID",r.T),Ee(l,"CI",r.F?"0":"1"),!r.F&&r.ja&&Ee(l,"TO",r.ja),Ee(l,"TYPE","xmlhttp"),Vi(r,l),r.m&&r.o&&no(l,r.m,r.o),r.L&&(r.g.I=r.L);var h=r.g;r=r.ia,h.L=1,h.v=Ds(Ht(l)),h.m=null,h.P=!0,rl(h,r)}t.Za=function(){this.C!=null&&(this.C=null,Us(this),so(this),Ke(19))};function js(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function Dl(r,l){var h=null;if(r.g==l){js(r),ro(r),r.g=null;var p=2}else if(eo(r.h,l))h=l.D,hl(r.h,l),p=1;else return;if(r.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var R=r.B;p=qr(),oe(p,new nl(p,h)),Fs(r)}else Ol(r);else if(R=l.s,R==3||R==0&&0<l.X||!(p==1&&op(r,l)||p==2&&so(r)))switch(h&&0<h.length&&(l=r.h,l.i=l.i.concat(h)),R){case 1:Dn(r,5);break;case 4:Dn(r,10);break;case 3:Dn(r,6);break;default:Dn(r,2)}}}function xl(r,l){let h=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(h*=2),h*l}function Dn(r,l){if(r.j.info("Error code "+l),l==2){var h=w(r.fb,r),p=r.Xa;const R=!p;p=new Nn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Os(p,"https"),Ds(p),R?Zd(p.toString(),h):ep(p.toString(),h)}else Ke(2);r.G=0,r.l&&r.l.sa(l),Ll(r),Rl(r)}t.fb=function(r){r?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function Ll(r){if(r.G=0,r.ka=[],r.l){const l=fl(r.h);(l.length!=0||r.i.length!=0)&&(q(r.ka,l),q(r.ka,r.i),r.h.i.length=0,M(r.i),r.i.length=0),r.l.ra()}}function Ml(r,l,h){var p=h instanceof Nn?Ht(h):new Nn(h);if(p.g!="")l&&(p.g=l+"."+p.g),Ns(p,p.s);else{var R=c.location;p=R.protocol,l=l?l+"."+R.hostname:R.hostname,R=+R.port;var P=new Nn(null);p&&Os(P,p),l&&(P.g=l),R&&Ns(P,R),h&&(P.l=h),p=P}return h=r.D,l=r.ya,h&&l&&Ee(p,h,l),Ee(p,"VER",r.la),Vi(r,p),p}function Ul(r,l,h){if(l&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=r.Ca&&!r.pa?new Pe(new xs({eb:h})):new Pe(r.pa),l.Ha(r.J),l}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fl(){}t=Fl.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ut(r,l){Z.call(this),this.g=new Cl(l),this.l=r,this.h=l&&l.messageUrlParams||null,r=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(r?r["X-WebChannel-Content-Type"]=l.messageContentType:r={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(r?r["X-WebChannel-Client-Profile"]=l.va:r={"X-WebChannel-Client-Profile":l.va}),this.g.S=r,(r=l&&l.Sb)&&!V(r)&&(this.g.m=r),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!V(l)&&(this.g.D=l,r=this.h,r!==null&&l in r&&(r=this.h,l in r&&delete r[l])),this.j=new li(this)}N(ut,Z),ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ut.prototype.close=function(){io(this.g)},ut.prototype.o=function(r){var l=this.g;if(typeof r=="string"){var h={};h.__data__=r,r=h}else this.u&&(h={},h.__data__=Fe(r),r=h);l.i.push(new Hd(l.Ya++,r)),l.G==3&&Fs(l)},ut.prototype.N=function(){this.g.l=null,delete this.j,io(this.g),delete this.g,ut.aa.N.call(this)};function jl(r){Gr.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var l=r.__sm__;if(l){e:{for(const h in l){r=h;break e}r=void 0}(this.i=r)&&(r=this.i,l=l!==null&&r in l?l[r]:void 0),this.data=l}else this.data=r}N(jl,Gr);function Vl(){zr.call(this),this.status=1}N(Vl,zr);function li(r){this.g=r}N(li,Fl),li.prototype.ua=function(){oe(this.g,"a")},li.prototype.ta=function(r){oe(this.g,new jl(r))},li.prototype.sa=function(r){oe(this.g,new Vl)},li.prototype.ra=function(){oe(this.g,"b")},ut.prototype.send=ut.prototype.o,ut.prototype.open=ut.prototype.m,ut.prototype.close=ut.prototype.close,Kr.NO_ERROR=0,Kr.TIMEOUT=8,Kr.HTTP_ERROR=6,$d.COMPLETE="complete",Md.EventType=Pi,Pi.OPEN="a",Pi.CLOSE="b",Pi.ERROR="c",Pi.MESSAGE="d",Z.prototype.listen=Z.prototype.K,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha}).apply(typeof zs<"u"?zs:typeof self<"u"?self:typeof window<"u"?window:{});const Tu="@firebase/firestore",Su="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let As="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new Fr("@firebase/firestore");function Et(t,...e){if(Si.logLevel<=ve.DEBUG){const n=e.map(qa);Si.debug(`Firestore (${As}): ${t}`,...n)}}function Rd(t,...e){if(Si.logLevel<=ve.ERROR){const n=e.map(qa);Si.error(`Firestore (${As}): ${t}`,...n)}}function BI(t,...e){if(Si.logLevel<=ve.WARN){const n=e.map(qa);Si.warn(`Firestore (${As}): ${t}`,...n)}}function qa(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function _s(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,Pd(t,i,n)}function Pd(t,e,n){let i=`FIRESTORE (${As}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw Rd(i),new Error(i)}function is(t,e,n,i){let s="Unexpected state";typeof n=="string"?s=n:i=n,t||Pd(e,s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class fe extends kt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class WI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GI{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){is(this.o===void 0,42304);let i=this.i;const s=u=>this.i!==i?(i=this.i,n(u)):Promise.resolve();let o=new ss;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ss,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{Et("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(Et("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ss)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(Et("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(is(typeof i.accessToken=="string",31837,{l:i}),new kd(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return is(e===null||typeof e=="string",2055,{h:e}),new Xe(e)}}class zI{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class qI{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new zI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Au{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,It(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){is(this.o===void 0,3512);const i=o=>{o.error!=null&&Et("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,Et("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const s=o=>{Et("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):Et("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Au(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(is(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Au(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */function XI(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=JI(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<n&&(i+=e.charAt(s[o]%62))}return i}}function At(t,e){return t<e?-1:t>e?1:0}function QI(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=t.codePointAt(n),s=e.codePointAt(n);if(i!==s){if(i<128&&s<128)return At(i,s);{const o=XI(),a=ZI(o.encode(Cu(t,n)),o.encode(Cu(e,n)));return a!==0?a:At(i,s)}}n+=i>65535?2:1}return At(t.length,e.length)}function Cu(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function ZI(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return At(t[n],e[n]);return At(t.length,e.length)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru="__name__";class xt{constructor(e,n,i){n===void 0?n=0:n>e.length&&_s(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&_s(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return xt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xt?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const o=xt.compareSegments(e.get(s),n.get(s));if(o!==0)return o}return At(e.length,n.length)}static compareSegments(e,n){const i=xt.isNumericId(e),s=xt.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?xt.extractNumericId(e).compare(xt.extractNumericId(n)):QI(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return za.fromString(e.substring(4,e.length-2))}}class wt extends xt{construct(e,n,i){return new wt(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new fe(he.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new wt(n)}static emptyPath(){return new wt([])}}const eb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $n extends xt{construct(e,n,i){return new $n(e,n,i)}static isValidIdentifier(e){return eb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$n.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ru}static keyField(){return new $n([Ru])}static fromServerFormat(e){const n=[];let i="",s=0;const o=()=>{if(i.length===0)throw new fe(he.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new fe(he.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new fe(he.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(i+=c,s++):(o(),s++)}if(o(),a)throw new fe(he.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $n(n)}static emptyPath(){return new $n([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.path=e}static fromPath(e){return new Wn(wt.fromString(e))}static fromName(e){return new Wn(wt.fromString(e).popFirst(5))}static empty(){return new Wn(wt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&wt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return wt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Wn(new wt(e.slice()))}}function tb(t,e,n,i){if(e===!0&&i===!0)throw new fe(he.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function nb(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ib(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_s(12329,{type:typeof t})}function sb(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new fe(he.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ib(t);throw new fe(he.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Oe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Cs(t,e){if(!nb(t))throw new fe(he.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const s=e[i].typeString,o="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const a=t[i];if(s&&typeof a!==s){n=`JSON field '${i}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){n=`Expected '${i}' field to equal '${o.value}'`;break}}if(n)throw new fe(he.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=-62135596800,ku=1e6;class Mt{static now(){return Mt.fromMillis(Date.now())}static fromDate(e){return Mt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*ku);return new Mt(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new fe(he.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new fe(he.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Pu)throw new fe(he.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(he.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ku}_compareTo(e){return this.seconds===e.seconds?At(this.nanoseconds,e.nanoseconds):At(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Mt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Cs(e,Mt._jsonSchema))return new Mt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Pu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Mt._jsonSchemaVersion="firestore/timestamp/1.0",Mt._jsonSchema={type:Oe("string",Mt._jsonSchemaVersion),seconds:Oe("number"),nanoseconds:Oe("number")};function rb(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ob extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ob("Invalid base64 string: "+o):o}}(e);return new ei(n)}static fromUint8Array(e){const n=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(e);return new ei(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return At(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ei.EMPTY_BYTE_STRING=new ei("");const sa="(default)";class br{constructor(e,n){this.projectId=e,this.database=n||sa}static empty(){return new br("","")}get isDefaultDatabase(){return this.database===sa}isEqual(e){return e instanceof br&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,n=null,i=[],s=[],o=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function lb(t){return new ab(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ou,ue;(ue=Ou||(Ou={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new za([4294967295,4294967295],0);/**
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
 */const ub=1048576;function Do(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,n,i=1e3,s=1.5,o=6e4){this.Fi=e,this.timerId=n,this.d_=i,this.E_=s,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-i);s>0&&Et("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,i,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new ss,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,o){const a=Date.now()+i,c=new Ka(e,n,a,s,o);return c.start(i),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(he.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Nu,Du;(Du=Nu||(Nu={})).Fa="default",Du.Cache="cache";/**
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
 */function fb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="firestore.googleapis.com",Lu=!0;class Mu{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new fe(he.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Od,this.ssl=Lu}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Lu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=cb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ub)throw new fe(he.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fb((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new fe(he.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new fe(he.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new fe(he.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nd{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(he.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(he.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new HI;switch(i.type){case"firstParty":return new qI(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new fe(he.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=xu.get(n);i&&(Et("ComponentProvider","Removing Datastore"),xu.delete(n),i.terminate())}(this),Promise.resolve()}}function db(t,e,n,i={}){var s;t=sb(t,Nd);const o=Is(e),a=t._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;o&&(yf(`https://${u}`),wf("Firestore",!0)),a.host!==Od&&a.host!==u&&BI("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:u,ssl:o,emulatorOptions:i});if(!Pn(f,c)&&(t._setSettings(f),i.mockUserToken)){let d,g;if(typeof i.mockUserToken=="string")d=i.mockUserToken,g=Xe.MOCK_USER;else{d=J_(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new fe(he.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Xe(w)}t._authCredentials=new WI(new kd(d,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ja(this.firestore,e,this._query)}}class Ut{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ut(this.firestore,e,this._key)}toJSON(){return{type:Ut._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(Cs(n,Ut._jsonSchema))return new Ut(e,i||null,new Wn(wt.fromString(n.referencePath)))}}Ut._jsonSchemaVersion="firestore/documentReference/1.0",Ut._jsonSchema={type:Oe("string",Ut._jsonSchemaVersion),referencePath:Oe("string")};class Xa extends Ja{constructor(e,n,i){super(e,n,lb(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ut(this.firestore,null,new Wn(e))}withConverter(e){return new Xa(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="AsyncQueue";class Fu{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new hb(this,"async_queue_retry"),this.oc=()=>{const i=Do();i&&Et(Uu,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const n=Do();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Do();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new ss;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!rb(e))throw e;Et(Uu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(i=>{throw this.tc=i,this.nc=!1,Rd("INTERNAL UNHANDLED ERROR: ",ju(i)),i}).then(i=>(this.nc=!1,i))));return this._c=n,n}enqueueAfterDelay(e,n,i){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=Ka.createAndSchedule(this,e,n,i,o=>this.lc(o));return this.ec.push(s),s}ac(){this.tc&&_s(47125,{hc:ju(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function ju(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class pb extends Nd{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new Fu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fu(e),this._firestoreClient=void 0,await e}}}function gb(t,e){const n=typeof t=="object"?t:Pa(),i=typeof t=="string"?t:sa,s=ii(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=q_("firestore");o&&db(s,...o)}return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yt(ei.fromBase64String(e))}catch(n){throw new fe(he.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yt(ei.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Yt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Cs(e,Yt._jsonSchema))return Yt.fromBase64String(e.bytes)}}Yt._jsonSchemaVersion="firestore/bytes/1.0",Yt._jsonSchema={type:Oe("string",Yt._jsonSchemaVersion),bytes:Oe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new fe(he.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $n(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new fe(he.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new fe(he.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return At(this._lat,e._lat)||At(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Kn._jsonSchemaVersion}}static fromJSON(e){if(Cs(e,Kn._jsonSchema))return new Kn(e.latitude,e.longitude)}}Kn._jsonSchemaVersion="firestore/geoPoint/1.0",Kn._jsonSchema={type:Oe("string",Kn._jsonSchemaVersion),latitude:Oe("number"),longitude:Oe("number")};/**
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
 */class Jn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Jn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Cs(e,Jn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Jn(e.vectorValues);throw new fe(he.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Jn._jsonSchemaVersion="firestore/vectorValue/1.0",Jn._jsonSchema={type:Oe("string",Jn._jsonSchemaVersion),vectorValues:Oe("object")};const mb=new RegExp("[~\\*/\\[\\]]");function _b(t,e,n){if(e.search(mb)>=0)throw Vu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Dd(...e.split("."))._internalPath}catch{throw Vu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Vu(t,e,n,i,s){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new fe(he.INVALID_ARGUMENT,o+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n,i,s,o){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ld("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vb extends xd{data(){return super.data()}}function Ld(t,e){return typeof e=="string"?_b(t,e):e instanceof Dd?e._internalPath:e._delegate._internalPath}class qs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ii extends xd{constructor(e,n,i,s,o,a){super(e,n,i,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ir(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Ld("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(he.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ii._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ii._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ii._jsonSchema={type:Oe("string",Ii._jsonSchemaVersion),bundleSource:Oe("string","DocumentSnapshot"),bundleName:Oe("string"),bundle:Oe("string")};class ir extends Ii{data(e={}){return super.data(e)}}class rs{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new qs(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new ir(this._firestore,this._userDataWriter,i.key,i,new qs(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new fe(he.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new ir(s._firestore,s._userDataWriter,c.doc.key,c.doc,new qs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const u=new ir(s._firestore,s._userDataWriter,c.doc.key,c.doc,new qs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:yb(c.type),doc:u,oldIndex:f,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(he.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=rs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=YI.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(n.push(o._document),i.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function yb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _s(61501,{type:t})}}rs._jsonSchemaVersion="firestore/querySnapshot/1.0",rs._jsonSchema={type:Oe("string",rs._jsonSchemaVersion),bundleSource:Oe("string","QuerySnapshot"),bundleName:Oe("string"),bundle:Oe("string")};(function(e,n=!0){(function(s){As=s})(Ai),$t(new Pt("firestore",(i,{instanceIdentifier:s,options:o})=>{const a=i.getProvider("app").getImmediate(),c=new pb(new GI(i.getProvider("auth-internal")),new KI(a,i.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new fe(he.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new br(f.options.projectId,d)}(a,s),a);return o=Object.assign({useFetchStreams:n},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),mt(Tu,Su,e),mt(Tu,Su,"esm2017")})();const wb={apiKey:"AIzaSyBzR2w75nixO9H8zjUbxVajKx0npksSGrg",authDomain:"norsk-cafe.firebaseapp.com",projectId:"norsk-cafe",storageBucket:"norsk-cafe.firebasestorage.app",messagingSenderId:"123232580709",appId:"1:123232580709:web:c6e6dfed117db9d3b0028c",measurementId:void 0},Ya=Cf(wb);F0(Ya);const Xn=VI(Ya);gb(Ya);const Ib="/assets/coffee-cKRUD7yK.svg",si=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},bb={class:"header"},Eb=["src"],Tb={class:"header-user"},Sb=["src"],Ab={key:0,class:"profile-menu"},Cb={class:"profile-header"},Rb=["src"],Pb={class:"profile-info"},kb={class:"profile-name"},Ob={__name:"Header",setup(t){const e=ws(),n=zn(null),i=zn(!1),s=zn(null);Dr(()=>{n.value=Xn.currentUser,Xn.onAuthStateChanged(d=>{n.value=d}),document.addEventListener("click",a)}),wa(()=>{document.removeEventListener("click",a)});function o(){i.value=!i.value}function a(d){s.value&&!s.value.contains(d.target)&&(i.value=!1)}function c(){e.push("/login")}function u(){Xn.signOut(),e.push("/login"),i.value=!1}function f(){e.push("/")}return(d,g)=>(xe(),$e("header",bb,[W("button",{class:"header-title-button",onClick:f},[g[1]||(g[1]=W("span",{class:"header-title-text"},"Norsk",-1)),W("img",{src:en(Ib),alt:"Logo",class:"header-logo"},null,8,Eb),g[2]||(g[2]=W("span",{class:"header-title-text"},"Cafe",-1))]),W("div",Tb,[n.value?(xe(),$e("div",{key:1,class:"profile-menu-wrapper",ref_key:"menuRef",ref:s},[W("img",{src:n.value.photoURL||"https://via.placeholder.com/40",alt:"User Profile",class:"user-icon",onClick:o},null,8,Sb),De(um,{name:"fade-slide"},{default:ya(()=>[i.value?(xe(),$e("div",Ab,[W("div",Cb,[W("img",{src:n.value.photoURL||"https://via.placeholder.com/80",alt:"Large profile",class:"profile-large"},null,8,Rb),W("div",Pb,[W("div",kb,Se(n.value.displayName||n.value.email),1),g[3]||(g[3]=W("div",{class:"profile-level"},"Level 18",-1))])]),g[4]||(g[4]=W("hr",{class:"profile-divider"},null,-1)),W("button",{class:"menu-item",onClick:g[0]||(g[0]=w=>en(e).push("/account"))},"Account Settings"),W("button",{class:"menu-item",onClick:u},"Logg ut")])):Kh("",!0)]),_:1})],512)):(xe(),$e("button",{key:0,class:"login-button",onClick:c}," Login "))])]))}},Nb=si(Ob,[["__scopeId","data-v-f436dc31"]]),Db="data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%23fff'/%3e%3c/svg%3e",xb={class:"footer"},Lb={class:"footer-start"},Mb={class:"footer-end"},Ub={href:"https://github.com/fredrikofstad/norskcafe",target:"_blank",rel:"noopener noreferrer",class:"github-link"},Fb=["src"],jb={__name:"Footer",setup(t){return(e,n)=>{const i=Rh("router-link");return xe(),$e("footer",xb,[W("div",Lb,[n[1]||(n[1]=W("span",{class:"copyright"},"© 2025 Fredrik Ofstad",-1)),De(i,{to:"/privacy",class:"privacy-link"},{default:ya(()=>n[0]||(n[0]=[ur("Privacy Policy")])),_:1,__:[0]})]),W("div",Mb,[W("a",Ub,[W("img",{src:en(Db),alt:"GitHub",class:"github-icon"},null,8,Fb)])])])}}},Vb=si(jb,[["__scopeId","data-v-b36a3877"]]),$b={class:"page"},Bb={class:"main-content"},Hb={__name:"App",setup(t){return(e,n)=>{const i=Rh("router-view");return xe(),$e("div",$b,[De(Nb),W("main",Bb,[De(i)]),De(Vb)])}}},Wb={class:"home-page"},Gb={__name:"Home",setup(t){const e=ws();function n(){Xn.currentUser?e.push("/dashboard"):e.push("/login")}return(i,s)=>(xe(),$e("div",Wb,[W("main",{class:"welcome"},[s[0]||(s[0]=W("h1",null,"Velkommen!",-1)),s[1]||(s[1]=W("p",null,"Her på Norsk Cafe skal vi lære norsk på en morsom og effektiv måte!",-1)),W("button",{class:"start-button",onClick:n}," La oss komme i gang! ")])]))}},zb=si(Gb,[["__scopeId","data-v-0ba52f48"]]),qb={class:"login-page"},Kb={class:"login-content"},Jb={class:"login-inner"},Xb={class:"gsi-material-button"},Yb={class:"gsi-material-button-content-wrapper"},Qb={class:"gsi-material-button-icon"},Zb={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",style:{width:"24px",height:"24px"}},e1={__name:"Login",setup(t){const e=ws();async function n(){const i=new Xt;try{await Jw(Xn,i),e.push("/dashboard")}catch(s){console.error("Google sign-in failed",s),alert("Google sign-in failed: "+s.message)}}return(i,s)=>(xe(),$e("div",qb,[W("main",Kb,[W("div",Jb,[s[2]||(s[2]=W("h2",{class:"login-title"},"Velkommen tilbake!",-1)),s[3]||(s[3]=W("p",{class:"login-subtitle"}," Logg inn med Google for å fortsette å lære norsk. ",-1)),W("div",{class:"google-wrapper",onClick:n},[W("button",Xb,[W("div",Yb,[W("div",Qb,[(xe(),$e("svg",Zb,s[0]||(s[0]=[zg(`<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0\r
                    14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" data-v-e7300c23></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58\r
                    2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" data-v-e7300c23></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92\r
                    16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" data-v-e7300c23></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15\r
                    1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98\r
                    6.19C6.51 42.62 14.62 48 24 48z" data-v-e7300c23></path><path fill="none" d="M0 0h48v48H0z" data-v-e7300c23></path>`,5)])))]),s[1]||(s[1]=W("span",{class:"gsi-material-button-contents"},"Fortsett med Google",-1))])])])])])]))}},t1=si(e1,[["__scopeId","data-v-e7300c23"]]),n1={class:"dashboard-page"},i1={class:"dashboard-content"},s1={__name:"Dashboard",setup(t){const e=ws(),n=zn("");return Dr(()=>{Pw(Xn,i=>{if(i){const s=i.displayName||i.email||"Bruker";n.value=s.split(" ")[0]}else e.push("/login")})}),(i,s)=>(xe(),$e("div",n1,[W("main",i1,[W("h2",null,"Hei "+Se(n.value)+"!",1),s[0]||(s[0]=W("p",null,"Velkommen til ditt dashboard. Ta en titt rundt!",-1)),s[1]||(s[1]=W("section",{class:"courses-card"},[W("h3",null,"Dine kurs"),W("ul",{class:"courses-list"},[W("li",null,"Lær nye ord"),W("li",null,"Øv"),W("li",null,"mer ting"),W("li",null,"hei her også"),W("li",null,"og litt her og")])],-1))])]))}},r1=si(s1,[["__scopeId","data-v-8000fa0f"]]),o1={title:"Personvernerklæring",updated:"Sist oppdatert: 6. juli 2025",who:{title:"Hvem er vi",text:"Norsk Cafe er utviklet og driftet av Fredrik Ofstad, som er behandlingsansvarlig for dine personopplysninger."},what:{title:"Hvilke data samles inn?",text:"Når du logger inn med Google, mottar vi følgende informasjon:",items:["Navn","E-postadresse","Profilbilde"],note:"Denne informasjonen brukes kun til å tilpasse din opplevelse i appen. Vi lagrer ikke passord."},where:{title:"Hvor lagres dataene?",text:"Dataene lagres i Google Firebase Authentication og Firestore-databasen. Selve appen hostes på GitHub Pages."},cookies:{title:"Informasjonskapsler og sporing",text:"Norsk Cafe bruker for øyeblikket ikke informasjonskapsler eller analyseverktøy. Google Analytics kan vurderes senere, men vil i så fall kreve samtykke."},sharing:{title:"Deling av data",text:"Vi deler ikke dine personopplysninger med tredjeparter, med unntak av bruk av Google Firebase som databehandler."},rights:{title:"Dine rettigheter",items:["Innsyn i egne personopplysninger","Sletting av data","Klage til Datatilsynet"]},deletion:{title:"Slette konto",text:"Du kan slette kontoen din direkte i appen. Dette sletter brukeren og tilhørende data fra Firebase."}},a1={title:"Privacy Policy",updated:"Last updated: 6 July 2025",who:{title:"Who we are",text:"Norsk Cafe is developed and operated by Fredrik Ofstad, who is the data controller responsible for your personal information."},what:{title:"What data do we collect?",text:"When you sign in with Google, we receive:",items:["Your name","Your email address","Your profile picture"],note:"This is used only to personalize your experience. We do not collect or store any passwords."},where:{title:"Where is the data stored?",text:"Your data is stored in Google Firebase Authentication and Firestore. The app is hosted on GitHub Pages."},cookies:{title:"Cookies and tracking",text:"Norsk Cafe does not currently use cookies or tracking tools. Google Analytics may be added in the future, but only with explicit consent."},sharing:{title:"Data sharing",text:"We do not share your data with third parties, except for Google Firebase, which acts as a data processor."},rights:{title:"Your rights",items:["Access your personal data","Request deletion","File a complaint with your data protection authority"]},deletion:{title:"Account deletion",text:"You can delete your account from the settings page. This will remove your user and data from Firebase."}},l1={no:o1,en:a1},c1={class:"privacy-page"},u1={class:"privacy-content"},h1={class:"title-bar"},f1={__name:"Privacy",setup(t){const e=zn("no");function n(){e.value=e.value==="no"?"en":"no"}const i=dt(()=>l1[e.value]);return(s,o)=>(xe(),$e("div",c1,[W("div",u1,[W("div",h1,[W("h1",null,Se(i.value.title),1),W("button",{class:"lang-switch",onClick:n},Se(e.value==="no"?"Switch to English":"Bytt til norsk"),1)]),W("p",null,[W("strong",null,Se(i.value.updated),1)]),W("h2",null,Se(i.value.who.title),1),W("p",null,Se(i.value.who.text),1),W("h2",null,Se(i.value.what.title),1),W("p",null,Se(i.value.what.text),1),W("ul",null,[(xe(!0),$e(ft,null,ql(i.value.what.items,a=>(xe(),$e("li",{key:a},Se(a),1))),128))]),W("p",null,Se(i.value.what.note),1),W("h2",null,Se(i.value.where.title),1),W("p",null,Se(i.value.where.text),1),W("h2",null,Se(i.value.cookies.title),1),W("p",null,Se(i.value.cookies.text),1),W("h2",null,Se(i.value.sharing.title),1),W("p",null,Se(i.value.sharing.text),1),W("h2",null,Se(i.value.rights.title),1),W("ul",null,[(xe(!0),$e(ft,null,ql(i.value.rights.items,a=>(xe(),$e("li",{key:a},Se(a),1))),128))]),W("h2",null,Se(i.value.deletion.title),1),W("p",null,Se(i.value.deletion.text),1)])]))}},d1=si(f1,[["__scopeId","data-v-117f989b"]]),p1={class:"account-settings"},g1={key:0,class:"user-info"},m1=["src"],_1={__name:"Account",setup(t){const e=ws(),n=zn(Xn.currentUser);async function i(){if(confirm("Are you sure you want to delete your account? This action cannot be undone."))try{await n.value.delete(),alert("Your account has been deleted."),e.push("/login")}catch(o){o.code==="auth/requires-recent-login"?(alert("Please sign in again to delete your account."),e.push("/login")):(console.error("Account deletion failed:",o),alert("Something went wrong. Please try again."))}}return(s,o)=>(xe(),$e("div",p1,[o[2]||(o[2]=W("h1",null,"Account Settings",-1)),n.value?(xe(),$e("div",g1,[W("img",{src:n.value.photoURL,alt:"Profile",class:"profile-pic"},null,8,m1),W("p",null,[o[0]||(o[0]=W("strong",null,"Name:",-1)),ur(" "+Se(n.value.displayName),1)]),W("p",null,[o[1]||(o[1]=W("strong",null,"Email:",-1)),ur(" "+Se(n.value.email),1)])])):Kh("",!0),o[3]||(o[3]=W("hr",null,null,-1)),W("button",{class:"delete-button",onClick:i},"Delete Account")]))}},v1=si(_1,[["__scopeId","data-v-6a031481"]]),y1=[{path:"/",component:zb},{path:"/login",component:t1},{path:"/dashboard",component:r1},{path:"/privacy",component:d1},{path:"/account",component:v1}],w1=U_({history:f_("/"),routes:y1});Dm(Hb).use(w1).mount("#app");
