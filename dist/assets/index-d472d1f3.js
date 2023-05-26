(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function n8(c,a){const e=Object.create(null),r=c.split(",");for(let i=0;i<r.length;i++)e[r[i]]=!0;return a?i=>!!e[i.toLowerCase()]:i=>!!e[i]}const X={},D2=[],k1=()=>{},vt=()=>!1,ht=/^on[^a-z]/,b4=c=>ht.test(c),l8=c=>c.startsWith("onUpdate:"),f1=Object.assign,f8=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},Ht=Object.prototype.hasOwnProperty,$=(c,a)=>Ht.call(c,a),_=Array.isArray,s3=c=>x4(c)==="[object Map]",ut=c=>x4(c)==="[object Set]",O=c=>typeof c=="function",o1=c=>typeof c=="string",o8=c=>typeof c=="symbol",r1=c=>c!==null&&typeof c=="object",x7=c=>r1(c)&&O(c.then)&&O(c.catch),pt=Object.prototype.toString,x4=c=>pt.call(c),Vt=c=>x4(c).slice(8,-1),Mt=c=>x4(c)==="[object Object]",t8=c=>o1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,i4=n8(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),N4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},Ct=/-(\w)/g,O1=N4(c=>c.replace(Ct,(a,e)=>e?e.toUpperCase():"")),dt=/\B([A-Z])/g,Z2=N4(c=>c.replace(dt,"-$1").toLowerCase()),S4=N4(c=>c.charAt(0).toUpperCase()+c.slice(1)),l6=N4(c=>c?`on${S4(c)}`:""),v3=(c,a)=>!Object.is(c,a),f6=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},v4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},Lt=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let e5;const N6=()=>e5||(e5=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function m8(c){if(_(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],i=o1(r)?Nt(r):m8(r);if(i)for(const s in i)a[s]=i[s]}return a}else{if(o1(c))return c;if(r1(c))return c}}const gt=/;(?![^(]*\))/g,bt=/:([^]+)/,xt=/\/\*[^]*?\*\//g;function Nt(c){const a={};return c.replace(xt,"").split(gt).forEach(e=>{if(e){const r=e.split(bt);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function C2(c){let a="";if(o1(c))a=c;else if(_(c))for(let e=0;e<c.length;e++){const r=C2(c[e]);r&&(a+=r+" ")}else if(r1(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const St="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yt=n8(St);function N7(c){return!!c||c===""}let g1;class wt{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=g1,!a&&g1&&(this.index=(g1.scopes||(g1.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=g1;try{return g1=this,a()}finally{g1=e}}}on(){g1=this}off(){g1=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function At(c,a=g1){a&&a.active&&a.effects.push(c)}function S7(){return g1}function kt(c){g1&&g1.cleanups.push(c)}const z8=c=>{const a=new Set(c);return a.w=0,a.n=0,a},y7=c=>(c.w&n2)>0,w7=c=>(c.n&n2)>0,Pt=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=n2},Tt=c=>{const{deps:a}=c;if(a.length){let e=0;for(let r=0;r<a.length;r++){const i=a[r];y7(i)&&!w7(i)?i.delete(c):a[e++]=i,i.w&=~n2,i.n&=~n2}a.length=e}},S6=new WeakMap;let e3=0,n2=1;const y6=30;let y1;const x2=Symbol(""),w6=Symbol("");class v8{constructor(a,e=null,r){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,At(this,r)}run(){if(!this.active)return this.fn();let a=y1,e=i2;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=y1,y1=this,i2=!0,n2=1<<++e3,e3<=y6?Pt(this):r5(this),this.fn()}finally{e3<=y6&&Tt(this),n2=1<<--e3,y1=this.parent,i2=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y1===this?this.deferStop=!0:this.active&&(r5(this),this.onStop&&this.onStop(),this.active=!1)}}function r5(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let i2=!0;const A7=[];function K2(){A7.push(i2),i2=!1}function Y2(){const c=A7.pop();i2=c===void 0?!0:c}function d1(c,a,e){if(i2&&y1){let r=S6.get(c);r||S6.set(c,r=new Map);let i=r.get(e);i||r.set(e,i=z8()),k7(i)}}function k7(c,a){let e=!1;e3<=y6?w7(c)||(c.n|=n2,e=!y7(c)):e=!c.has(y1),e&&(c.add(y1),y1.deps.push(c))}function Z1(c,a,e,r,i,s){const n=S6.get(c);if(!n)return;let l=[];if(a==="clear")l=[...n.values()];else if(e==="length"&&_(c)){const f=Number(r);n.forEach((o,t)=>{(t==="length"||t>=f)&&l.push(o)})}else switch(e!==void 0&&l.push(n.get(e)),a){case"add":_(c)?t8(e)&&l.push(n.get("length")):(l.push(n.get(x2)),s3(c)&&l.push(n.get(w6)));break;case"delete":_(c)||(l.push(n.get(x2)),s3(c)&&l.push(n.get(w6)));break;case"set":s3(c)&&l.push(n.get(x2));break}if(l.length===1)l[0]&&A6(l[0]);else{const f=[];for(const o of l)o&&f.push(...o);A6(z8(f))}}function A6(c,a){const e=_(c)?c:[...c];for(const r of e)r.computed&&i5(r);for(const r of e)r.computed||i5(r)}function i5(c,a){(c!==y1||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const Ft=n8("__proto__,__v_isRef,__isVue"),P7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(o8)),Bt=h8(),qt=h8(!1,!0),Rt=h8(!0),s5=Dt();function Dt(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=G(this);for(let s=0,n=this.length;s<n;s++)d1(r,"get",s+"");const i=r[a](...e);return i===-1||i===!1?r[a](...e.map(G)):i}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){K2();const r=G(this)[a].apply(this,e);return Y2(),r}}),c}function _t(c){const a=G(this);return d1(a,"has",c),a.hasOwnProperty(c)}function h8(c=!1,a=!1){return function(r,i,s){if(i==="__v_isReactive")return!c;if(i==="__v_isReadonly")return c;if(i==="__v_isShallow")return a;if(i==="__v_raw"&&s===(c?a?am:R7:a?q7:B7).get(r))return r;const n=_(r);if(!c){if(n&&$(s5,i))return Reflect.get(s5,i,s);if(i==="hasOwnProperty")return _t}const l=Reflect.get(r,i,s);return(o8(i)?P7.has(i):Ft(i))||(c||d1(r,"get",i),a)?l:z1(l)?n&&t8(i)?l:l.value:r1(l)?c?D7(l):X2(l):l}}const Et=T7(),Ot=T7(!0);function T7(c=!1){return function(e,r,i,s){let n=e[r];if(I2(n)&&z1(n)&&!z1(i))return!1;if(!c&&(!h4(i)&&!I2(i)&&(n=G(n),i=G(i)),!_(e)&&z1(n)&&!z1(i)))return n.value=i,!0;const l=_(e)&&t8(r)?Number(r)<e.length:$(e,r),f=Reflect.set(e,r,i,s);return e===G(s)&&(l?v3(i,n)&&Z1(e,"set",r,i):Z1(e,"add",r,i)),f}}function Ut(c,a){const e=$(c,a);c[a];const r=Reflect.deleteProperty(c,a);return r&&e&&Z1(c,"delete",a,void 0),r}function It(c,a){const e=Reflect.has(c,a);return(!o8(a)||!P7.has(a))&&d1(c,"has",a),e}function $t(c){return d1(c,"iterate",_(c)?"length":x2),Reflect.ownKeys(c)}const F7={get:Bt,set:Et,deleteProperty:Ut,has:It,ownKeys:$t},Wt={get:Rt,set(c,a){return!0},deleteProperty(c,a){return!0}},Gt=f1({},F7,{get:qt,set:Ot}),H8=c=>c,y4=c=>Reflect.getPrototypeOf(c);function O3(c,a,e=!1,r=!1){c=c.__v_raw;const i=G(c),s=G(a);e||(a!==s&&d1(i,"get",a),d1(i,"get",s));const{has:n}=y4(i),l=r?H8:e?V8:h3;if(n.call(i,a))return l(c.get(a));if(n.call(i,s))return l(c.get(s));c!==i&&c.get(a)}function U3(c,a=!1){const e=this.__v_raw,r=G(e),i=G(c);return a||(c!==i&&d1(r,"has",c),d1(r,"has",i)),c===i?e.has(c):e.has(c)||e.has(i)}function I3(c,a=!1){return c=c.__v_raw,!a&&d1(G(c),"iterate",x2),Reflect.get(c,"size",c)}function n5(c){c=G(c);const a=G(this);return y4(a).has.call(a,c)||(a.add(c),Z1(a,"add",c,c)),this}function l5(c,a){a=G(a);const e=G(this),{has:r,get:i}=y4(e);let s=r.call(e,c);s||(c=G(c),s=r.call(e,c));const n=i.call(e,c);return e.set(c,a),s?v3(a,n)&&Z1(e,"set",c,a):Z1(e,"add",c,a),this}function f5(c){const a=G(this),{has:e,get:r}=y4(a);let i=e.call(a,c);i||(c=G(c),i=e.call(a,c)),r&&r.call(a,c);const s=a.delete(c);return i&&Z1(a,"delete",c,void 0),s}function o5(){const c=G(this),a=c.size!==0,e=c.clear();return a&&Z1(c,"clear",void 0,void 0),e}function $3(c,a){return function(r,i){const s=this,n=s.__v_raw,l=G(n),f=a?H8:c?V8:h3;return!c&&d1(l,"iterate",x2),n.forEach((o,t)=>r.call(i,f(o),f(t),s))}}function W3(c,a,e){return function(...r){const i=this.__v_raw,s=G(i),n=s3(s),l=c==="entries"||c===Symbol.iterator&&n,f=c==="keys"&&n,o=i[c](...r),t=e?H8:a?V8:h3;return!a&&d1(s,"iterate",f?w6:x2),{next(){const{value:z,done:h}=o.next();return h?{value:z,done:h}:{value:l?[t(z[0]),t(z[1])]:t(z),done:h}},[Symbol.iterator](){return this}}}}function c2(c){return function(...a){return c==="delete"?!1:this}}function jt(){const c={get(s){return O3(this,s)},get size(){return I3(this)},has:U3,add:n5,set:l5,delete:f5,clear:o5,forEach:$3(!1,!1)},a={get(s){return O3(this,s,!1,!0)},get size(){return I3(this)},has:U3,add:n5,set:l5,delete:f5,clear:o5,forEach:$3(!1,!0)},e={get(s){return O3(this,s,!0)},get size(){return I3(this,!0)},has(s){return U3.call(this,s,!0)},add:c2("add"),set:c2("set"),delete:c2("delete"),clear:c2("clear"),forEach:$3(!0,!1)},r={get(s){return O3(this,s,!0,!0)},get size(){return I3(this,!0)},has(s){return U3.call(this,s,!0)},add:c2("add"),set:c2("set"),delete:c2("delete"),clear:c2("clear"),forEach:$3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{c[s]=W3(s,!1,!1),e[s]=W3(s,!0,!1),a[s]=W3(s,!1,!0),r[s]=W3(s,!0,!0)}),[c,e,a,r]}const[Zt,Kt,Yt,Xt]=jt();function u8(c,a){const e=a?c?Xt:Yt:c?Kt:Zt;return(r,i,s)=>i==="__v_isReactive"?!c:i==="__v_isReadonly"?c:i==="__v_raw"?r:Reflect.get($(e,i)&&i in r?e:r,i,s)}const Qt={get:u8(!1,!1)},Jt={get:u8(!1,!0)},cm={get:u8(!0,!1)},B7=new WeakMap,q7=new WeakMap,R7=new WeakMap,am=new WeakMap;function em(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rm(c){return c.__v_skip||!Object.isExtensible(c)?0:em(Vt(c))}function X2(c){return I2(c)?c:p8(c,!1,F7,Qt,B7)}function im(c){return p8(c,!1,Gt,Jt,q7)}function D7(c){return p8(c,!0,Wt,cm,R7)}function p8(c,a,e,r,i){if(!r1(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const s=i.get(c);if(s)return s;const n=rm(c);if(n===0)return c;const l=new Proxy(c,n===2?r:e);return i.set(c,l),l}function _2(c){return I2(c)?_2(c.__v_raw):!!(c&&c.__v_isReactive)}function I2(c){return!!(c&&c.__v_isReadonly)}function h4(c){return!!(c&&c.__v_isShallow)}function _7(c){return _2(c)||I2(c)}function G(c){const a=c&&c.__v_raw;return a?G(a):c}function E7(c){return v4(c,"__v_skip",!0),c}const h3=c=>r1(c)?X2(c):c,V8=c=>r1(c)?D7(c):c;function O7(c){i2&&y1&&(c=G(c),k7(c.dep||(c.dep=z8())))}function U7(c,a){c=G(c);const e=c.dep;e&&A6(e)}function z1(c){return!!(c&&c.__v_isRef===!0)}function C1(c){return sm(c,!1)}function sm(c,a){return z1(c)?c:new nm(c,a)}class nm{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:G(a),this._value=e?a:h3(a)}get value(){return O7(this),this._value}set value(a){const e=this.__v_isShallow||h4(a)||I2(a);a=e?a:G(a),v3(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:h3(a),U7(this))}}function I(c){return z1(c)?c.value:c}const lm={get:(c,a,e)=>I(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const i=c[a];return z1(i)&&!z1(e)?(i.value=e,!0):Reflect.set(c,a,e,r)}};function I7(c){return _2(c)?c:new Proxy(c,lm)}class fm{constructor(a,e,r,i){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new v8(a,()=>{this._dirty||(this._dirty=!0,U7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const a=G(this);return O7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function om(c,a,e=!1){let r,i;const s=O(c);return s?(r=c,i=k1):(r=c.get,i=c.set),new fm(r,i,s||!i,e)}function s2(c,a,e,r){let i;try{i=r?c(...r):c()}catch(s){w4(s,a,e)}return i}function P1(c,a,e,r){if(O(c)){const s=s2(c,a,e,r);return s&&x7(s)&&s.catch(n=>{w4(n,a,e)}),s}const i=[];for(let s=0;s<c.length;s++)i.push(P1(c[s],a,e,r));return i}function w4(c,a,e,r=!0){const i=a?a.vnode:null;if(a){let s=a.parent;const n=a.proxy,l=e;for(;s;){const o=s.ec;if(o){for(let t=0;t<o.length;t++)if(o[t](c,n,l)===!1)return}s=s.parent}const f=a.appContext.config.errorHandler;if(f){s2(f,null,10,[c,n,l]);return}}tm(c,e,i,r)}function tm(c,a,e,r=!0){console.error(c)}let H3=!1,k6=!1;const m1=[];let _1=0;const E2=[];let $1=null,V2=0;const $7=Promise.resolve();let M8=null;function mm(c){const a=M8||$7;return c?a.then(this?c.bind(this):c):a}function zm(c){let a=_1+1,e=m1.length;for(;a<e;){const r=a+e>>>1;u3(m1[r])<c?a=r+1:e=r}return a}function C8(c){(!m1.length||!m1.includes(c,H3&&c.allowRecurse?_1+1:_1))&&(c.id==null?m1.push(c):m1.splice(zm(c.id),0,c),W7())}function W7(){!H3&&!k6&&(k6=!0,M8=$7.then(j7))}function vm(c){const a=m1.indexOf(c);a>_1&&m1.splice(a,1)}function hm(c){_(c)?E2.push(...c):(!$1||!$1.includes(c,c.allowRecurse?V2+1:V2))&&E2.push(c),W7()}function t5(c,a=H3?_1+1:0){for(;a<m1.length;a++){const e=m1[a];e&&e.pre&&(m1.splice(a,1),a--,e())}}function G7(c){if(E2.length){const a=[...new Set(E2)];if(E2.length=0,$1){$1.push(...a);return}for($1=a,$1.sort((e,r)=>u3(e)-u3(r)),V2=0;V2<$1.length;V2++)$1[V2]();$1=null,V2=0}}const u3=c=>c.id==null?1/0:c.id,Hm=(c,a)=>{const e=u3(c)-u3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function j7(c){k6=!1,H3=!0,m1.sort(Hm);const a=k1;try{for(_1=0;_1<m1.length;_1++){const e=m1[_1];e&&e.active!==!1&&s2(e,null,14)}}finally{_1=0,m1.length=0,G7(),H3=!1,M8=null,(m1.length||E2.length)&&j7()}}function um(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||X;let i=e;const s=a.startsWith("update:"),n=s&&a.slice(7);if(n&&n in r){const t=`${n==="modelValue"?"model":n}Modifiers`,{number:z,trim:h}=r[t]||X;h&&(i=e.map(u=>o1(u)?u.trim():u)),z&&(i=e.map(Lt))}let l,f=r[l=l6(a)]||r[l=l6(O1(a))];!f&&s&&(f=r[l=l6(Z2(a))]),f&&P1(f,c,6,i);const o=r[l+"Once"];if(o){if(!c.emitted)c.emitted={};else if(c.emitted[l])return;c.emitted[l]=!0,P1(o,c,6,i)}}function Z7(c,a,e=!1){const r=a.emitsCache,i=r.get(c);if(i!==void 0)return i;const s=c.emits;let n={},l=!1;if(!O(c)){const f=o=>{const t=Z7(o,a,!0);t&&(l=!0,f1(n,t))};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}return!s&&!l?(r1(c)&&r.set(c,null),null):(_(s)?s.forEach(f=>n[f]=null):f1(n,s),r1(c)&&r.set(c,n),n)}function A4(c,a){return!c||!b4(a)?!1:(a=a.slice(2).replace(/Once$/,""),$(c,a[0].toLowerCase()+a.slice(1))||$(c,Z2(a))||$(c,a))}let b1=null,k4=null;function H4(c){const a=b1;return b1=c,k4=c&&c.type.__scopeId||null,a}function K7(c){k4=c}function Y7(){k4=null}function pm(c,a=b1,e){if(!a||c._n)return c;const r=(...i)=>{r._d&&L5(-1);const s=H4(a);let n;try{n=c(...i)}finally{H4(s),r._d&&L5(1)}return n};return r._n=!0,r._c=!0,r._d=!0,r}function o6(c){const{type:a,vnode:e,proxy:r,withProxy:i,props:s,propsOptions:[n],slots:l,attrs:f,emit:o,render:t,renderCache:z,data:h,setupState:u,ctx:g,inheritAttrs:y}=c;let q,C;const d=H4(c);try{if(e.shapeFlag&4){const L=i||r;q=R1(t.call(L,L,z,s,u,h,g)),C=f}else{const L=a;q=R1(L.length>1?L(s,{attrs:f,slots:l,emit:o}):L(s,null)),C=a.props?f:Vm(f)}}catch(L){l3.length=0,w4(L,c,1),q=v1(p3)}let b=q;if(C&&y!==!1){const L=Object.keys(C),{shapeFlag:T}=b;L.length&&T&7&&(n&&L.some(l8)&&(C=Mm(C,n)),b=$2(b,C))}return e.dirs&&(b=$2(b),b.dirs=b.dirs?b.dirs.concat(e.dirs):e.dirs),e.transition&&(b.transition=e.transition),q=b,H4(d),q}const Vm=c=>{let a;for(const e in c)(e==="class"||e==="style"||b4(e))&&((a||(a={}))[e]=c[e]);return a},Mm=(c,a)=>{const e={};for(const r in c)(!l8(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function Cm(c,a,e){const{props:r,children:i,component:s}=c,{props:n,children:l,patchFlag:f}=a,o=s.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&f>=0){if(f&1024)return!0;if(f&16)return r?m5(r,n,o):!!n;if(f&8){const t=a.dynamicProps;for(let z=0;z<t.length;z++){const h=t[z];if(n[h]!==r[h]&&!A4(o,h))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===n?!1:r?n?m5(r,n,o):!0:!!n;return!1}function m5(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(a[s]!==c[s]&&!A4(e,s))return!0}return!1}function dm({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const Lm=c=>c.__isSuspense;function gm(c,a){a&&a.pendingBranch?_(c)?a.effects.push(...c):a.effects.push(c):hm(c)}const G3={};function s1(c,a,e){return X7(c,a,e)}function X7(c,a,{immediate:e,deep:r,flush:i,onTrack:s,onTrigger:n}=X){var l;const f=S7()===((l=l1)==null?void 0:l.scope)?l1:null;let o,t=!1,z=!1;if(z1(c)?(o=()=>c.value,t=h4(c)):_2(c)?(o=()=>c,r=!0):_(c)?(z=!0,t=c.some(L=>_2(L)||h4(L)),o=()=>c.map(L=>{if(z1(L))return L.value;if(_2(L))return d2(L);if(O(L))return s2(L,f,2)})):O(c)?a?o=()=>s2(c,f,2):o=()=>{if(!(f&&f.isUnmounted))return h&&h(),P1(c,f,3,[u])}:o=k1,a&&r){const L=o;o=()=>d2(L())}let h,u=L=>{h=d.onStop=()=>{s2(L,f,4)}},g;if(M3)if(u=k1,a?e&&P1(a,f,3,[o(),z?[]:void 0,u]):o(),i==="sync"){const L=bz();g=L.__watcherHandles||(L.__watcherHandles=[])}else return k1;let y=z?new Array(c.length).fill(G3):G3;const q=()=>{if(d.active)if(a){const L=d.run();(r||t||(z?L.some((T,W)=>v3(T,y[W])):v3(L,y)))&&(h&&h(),P1(a,f,3,[L,y===G3?void 0:z&&y[0]===G3?[]:y,u]),y=L)}else d.run()};q.allowRecurse=!!a;let C;i==="sync"?C=q:i==="post"?C=()=>p1(q,f&&f.suspense):(q.pre=!0,f&&(q.id=f.uid),C=()=>C8(q));const d=new v8(o,C);a?e?q():y=d.run():i==="post"?p1(d.run.bind(d),f&&f.suspense):d.run();const b=()=>{d.stop(),f&&f.scope&&f8(f.scope.effects,d)};return g&&g.push(b),b}function bm(c,a,e){const r=this.proxy,i=o1(c)?c.includes(".")?Q7(r,c):()=>r[c]:c.bind(r,r);let s;O(a)?s=a:(s=a.handler,e=a);const n=l1;W2(this);const l=X7(i,s.bind(r),e);return n?W2(n):N2(),l}function Q7(c,a){const e=a.split(".");return()=>{let r=c;for(let i=0;i<e.length&&r;i++)r=r[e[i]];return r}}function d2(c,a){if(!r1(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),z1(c))d2(c.value,a);else if(_(c))for(let e=0;e<c.length;e++)d2(c[e],a);else if(ut(c)||s3(c))c.forEach(e=>{d2(e,a)});else if(Mt(c))for(const e in c)d2(c[e],a);return c}function F2(c,a){const e=b1;if(e===null)return c;const r=B4(e)||e.proxy,i=c.dirs||(c.dirs=[]);for(let s=0;s<a.length;s++){let[n,l,f,o=X]=a[s];n&&(O(n)&&(n={mounted:n,updated:n}),n.deep&&d2(l),i.push({dir:n,instance:r,value:l,oldValue:void 0,arg:f,modifiers:o}))}return c}function h2(c,a,e,r){const i=c.dirs,s=a&&a.dirs;for(let n=0;n<i.length;n++){const l=i[n];s&&(l.oldValue=s[n].value);let f=l.dir[r];f&&(K2(),P1(f,e,8,[c.el,l,c,a]),Y2())}}function xm(c,a){return O(c)?(()=>f1({name:c.name},a,{setup:c}))():c}const s4=c=>!!c.type.__asyncLoader,J7=c=>c.type.__isKeepAlive;function Nm(c,a){c9(c,"a",a)}function Sm(c,a){c9(c,"da",a)}function c9(c,a,e=l1){const r=c.__wdc||(c.__wdc=()=>{let i=e;for(;i;){if(i.isDeactivated)return;i=i.parent}return c()});if(P4(a,r,e),e){let i=e.parent;for(;i&&i.parent;)J7(i.parent.vnode)&&ym(r,a,e,i),i=i.parent}}function ym(c,a,e,r){const i=P4(a,c,r,!0);d8(()=>{f8(r[a],i)},e)}function P4(c,a,e=l1,r=!1){if(e){const i=e[c]||(e[c]=[]),s=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;K2(),W2(e);const l=P1(a,e,c,n);return N2(),Y2(),l});return r?i.unshift(s):i.push(s),s}}const Q1=c=>(a,e=l1)=>(!M3||c==="sp")&&P4(c,(...r)=>a(...r),e),wm=Q1("bm"),Am=Q1("m"),km=Q1("bu"),Pm=Q1("u"),Tm=Q1("bum"),d8=Q1("um"),Fm=Q1("sp"),Bm=Q1("rtg"),qm=Q1("rtc");function Rm(c,a=l1){P4("ec",c,a)}const a9="components",Dm="directives";function _m(c,a){return e9(a9,c,!0,a)||c}const Em=Symbol.for("v-ndc");function z5(c){return e9(Dm,c)}function e9(c,a,e=!0,r=!1){const i=b1||l1;if(i){const s=i.type;if(c===a9){const l=Cz(s,!1);if(l&&(l===a||l===O1(a)||l===S4(O1(a))))return s}const n=v5(i[c]||s[c],a)||v5(i.appContext[c],a);return!n&&r?s:n}}function v5(c,a){return c&&(c[a]||c[O1(a)]||c[S4(O1(a))])}const P6=c=>c?z9(c)?B4(c)||c.proxy:P6(c.parent):null,n3=f1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>P6(c.parent),$root:c=>P6(c.root),$emit:c=>c.emit,$options:c=>L8(c),$forceUpdate:c=>c.f||(c.f=()=>C8(c.update)),$nextTick:c=>c.n||(c.n=mm.bind(c.proxy)),$watch:c=>bm.bind(c)}),t6=(c,a)=>c!==X&&!c.__isScriptSetup&&$(c,a),Om={get({_:c},a){const{ctx:e,setupState:r,data:i,props:s,accessCache:n,type:l,appContext:f}=c;let o;if(a[0]!=="$"){const u=n[a];if(u!==void 0)switch(u){case 1:return r[a];case 2:return i[a];case 4:return e[a];case 3:return s[a]}else{if(t6(r,a))return n[a]=1,r[a];if(i!==X&&$(i,a))return n[a]=2,i[a];if((o=c.propsOptions[0])&&$(o,a))return n[a]=3,s[a];if(e!==X&&$(e,a))return n[a]=4,e[a];T6&&(n[a]=0)}}const t=n3[a];let z,h;if(t)return a==="$attrs"&&d1(c,"get",a),t(c);if((z=l.__cssModules)&&(z=z[a]))return z;if(e!==X&&$(e,a))return n[a]=4,e[a];if(h=f.config.globalProperties,$(h,a))return h[a]},set({_:c},a,e){const{data:r,setupState:i,ctx:s}=c;return t6(i,a)?(i[a]=e,!0):r!==X&&$(r,a)?(r[a]=e,!0):$(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(s[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:i,propsOptions:s}},n){let l;return!!e[n]||c!==X&&$(c,n)||t6(a,n)||(l=s[0])&&$(l,n)||$(r,n)||$(n3,n)||$(i.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:$(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function h5(c){return _(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let T6=!0;function Um(c){const a=L8(c),e=c.proxy,r=c.ctx;T6=!1,a.beforeCreate&&H5(a.beforeCreate,c,"bc");const{data:i,computed:s,methods:n,watch:l,provide:f,inject:o,created:t,beforeMount:z,mounted:h,beforeUpdate:u,updated:g,activated:y,deactivated:q,beforeDestroy:C,beforeUnmount:d,destroyed:b,unmounted:L,render:T,renderTracked:W,renderTriggered:Z,errorCaptured:t1,serverPrefetch:e1,expose:N1,inheritAttrs:t2,components:A2,directives:k2,filters:m2}=a;if(o&&Im(o,r,null),n)for(const c1 in n){const K=n[c1];O(K)&&(r[c1]=K.bind(e))}if(i){const c1=i.call(e,e);r1(c1)&&(c.data=X2(c1))}if(T6=!0,s)for(const c1 in s){const K=s[c1],z2=O(K)?K.bind(e,e):O(K.get)?K.get.bind(e,e):k1,_3=!O(K)&&O(K.set)?K.set.bind(e):k1,v2=D1({get:z2,set:_3});Object.defineProperty(r,c1,{enumerable:!0,configurable:!0,get:()=>v2.value,set:T1=>v2.value=T1})}if(l)for(const c1 in l)r9(l[c1],r,e,c1);if(f){const c1=O(f)?f.call(e):f;Reflect.ownKeys(c1).forEach(K=>{Km(K,c1[K])})}t&&H5(t,c,"c");function h1(c1,K){_(K)?K.forEach(z2=>c1(z2.bind(e))):K&&c1(K.bind(e))}if(h1(wm,z),h1(Am,h),h1(km,u),h1(Pm,g),h1(Nm,y),h1(Sm,q),h1(Rm,t1),h1(qm,W),h1(Bm,Z),h1(Tm,d),h1(d8,L),h1(Fm,e1),_(N1))if(N1.length){const c1=c.exposed||(c.exposed={});N1.forEach(K=>{Object.defineProperty(c1,K,{get:()=>e[K],set:z2=>e[K]=z2})})}else c.exposed||(c.exposed={});T&&c.render===k1&&(c.render=T),t2!=null&&(c.inheritAttrs=t2),A2&&(c.components=A2),k2&&(c.directives=k2)}function Im(c,a,e=k1){_(c)&&(c=F6(c));for(const r in c){const i=c[r];let s;r1(i)?"default"in i?s=n4(i.from||r,i.default,!0):s=n4(i.from||r):s=n4(i),z1(s)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:n=>s.value=n}):a[r]=s}}function H5(c,a,e){P1(_(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function r9(c,a,e,r){const i=r.includes(".")?Q7(e,r):()=>e[r];if(o1(c)){const s=a[c];O(s)&&s1(i,s)}else if(O(c))s1(i,c.bind(e));else if(r1(c))if(_(c))c.forEach(s=>r9(s,a,e,r));else{const s=O(c.handler)?c.handler.bind(e):a[c.handler];O(s)&&s1(i,s,c)}}function L8(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:i,optionsCache:s,config:{optionMergeStrategies:n}}=c.appContext,l=s.get(a);let f;return l?f=l:!i.length&&!e&&!r?f=a:(f={},i.length&&i.forEach(o=>u4(f,o,n,!0)),u4(f,a,n)),r1(a)&&s.set(a,f),f}function u4(c,a,e,r=!1){const{mixins:i,extends:s}=a;s&&u4(c,s,e,!0),i&&i.forEach(n=>u4(c,n,e,!0));for(const n in a)if(!(r&&n==="expose")){const l=$m[n]||e&&e[n];c[n]=l?l(c[n],a[n]):a[n]}return c}const $m={data:u5,props:p5,emits:p5,methods:r3,computed:r3,beforeCreate:H1,created:H1,beforeMount:H1,mounted:H1,beforeUpdate:H1,updated:H1,beforeDestroy:H1,beforeUnmount:H1,destroyed:H1,unmounted:H1,activated:H1,deactivated:H1,errorCaptured:H1,serverPrefetch:H1,components:r3,directives:r3,watch:Gm,provide:u5,inject:Wm};function u5(c,a){return a?c?function(){return f1(O(c)?c.call(this,this):c,O(a)?a.call(this,this):a)}:a:c}function Wm(c,a){return r3(F6(c),F6(a))}function F6(c){if(_(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function H1(c,a){return c?[...new Set([].concat(c,a))]:a}function r3(c,a){return c?f1(Object.create(null),c,a):a}function p5(c,a){return c?_(c)&&_(a)?[...new Set([...c,...a])]:f1(Object.create(null),h5(c),h5(a??{})):a}function Gm(c,a){if(!c)return a;if(!a)return c;const e=f1(Object.create(null),c);for(const r in a)e[r]=H1(c[r],a[r]);return e}function i9(){return{app:null,config:{isNativeTag:vt,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jm=0;function Zm(c,a){return function(r,i=null){O(r)||(r=f1({},r)),i!=null&&!r1(i)&&(i=null);const s=i9(),n=new Set;let l=!1;const f=s.app={_uid:jm++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:xz,get config(){return s.config},set config(o){},use(o,...t){return n.has(o)||(o&&O(o.install)?(n.add(o),o.install(f,...t)):O(o)&&(n.add(o),o(f,...t))),f},mixin(o){return s.mixins.includes(o)||s.mixins.push(o),f},component(o,t){return t?(s.components[o]=t,f):s.components[o]},directive(o,t){return t?(s.directives[o]=t,f):s.directives[o]},mount(o,t,z){if(!l){const h=v1(r,i);return h.appContext=s,t&&a?a(h,o):c(h,o,z),l=!0,f._container=o,o.__vue_app__=f,B4(h.component)||h.component.proxy}},unmount(){l&&(c(null,f._container),delete f._container.__vue_app__)},provide(o,t){return s.provides[o]=t,f},runWithContext(o){p4=f;try{return o()}finally{p4=null}}};return f}}let p4=null;function Km(c,a){if(l1){let e=l1.provides;const r=l1.parent&&l1.parent.provides;r===e&&(e=l1.provides=Object.create(r)),e[c]=a}}function n4(c,a,e=!1){const r=l1||b1;if(r||p4){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:p4._context.provides;if(i&&c in i)return i[c];if(arguments.length>1)return e&&O(a)?a.call(r&&r.proxy):a}}function Ym(c,a,e,r=!1){const i={},s={};v4(s,F4,1),c.propsDefaults=Object.create(null),s9(c,a,i,s);for(const n in c.propsOptions[0])n in i||(i[n]=void 0);e?c.props=r?i:im(i):c.type.props?c.props=i:c.props=s,c.attrs=s}function Xm(c,a,e,r){const{props:i,attrs:s,vnode:{patchFlag:n}}=c,l=G(i),[f]=c.propsOptions;let o=!1;if((r||n>0)&&!(n&16)){if(n&8){const t=c.vnode.dynamicProps;for(let z=0;z<t.length;z++){let h=t[z];if(A4(c.emitsOptions,h))continue;const u=a[h];if(f)if($(s,h))u!==s[h]&&(s[h]=u,o=!0);else{const g=O1(h);i[g]=B6(f,l,g,u,c,!1)}else u!==s[h]&&(s[h]=u,o=!0)}}}else{s9(c,a,i,s)&&(o=!0);let t;for(const z in l)(!a||!$(a,z)&&((t=Z2(z))===z||!$(a,t)))&&(f?e&&(e[z]!==void 0||e[t]!==void 0)&&(i[z]=B6(f,l,z,void 0,c,!0)):delete i[z]);if(s!==l)for(const z in s)(!a||!$(a,z))&&(delete s[z],o=!0)}o&&Z1(c,"set","$attrs")}function s9(c,a,e,r){const[i,s]=c.propsOptions;let n=!1,l;if(a)for(let f in a){if(i4(f))continue;const o=a[f];let t;i&&$(i,t=O1(f))?!s||!s.includes(t)?e[t]=o:(l||(l={}))[t]=o:A4(c.emitsOptions,f)||(!(f in r)||o!==r[f])&&(r[f]=o,n=!0)}if(s){const f=G(e),o=l||X;for(let t=0;t<s.length;t++){const z=s[t];e[z]=B6(i,f,z,o[z],c,!$(o,z))}}return n}function B6(c,a,e,r,i,s){const n=c[e];if(n!=null){const l=$(n,"default");if(l&&r===void 0){const f=n.default;if(n.type!==Function&&!n.skipFactory&&O(f)){const{propsDefaults:o}=i;e in o?r=o[e]:(W2(i),r=o[e]=f.call(null,a),N2())}else r=f}n[0]&&(s&&!l?r=!1:n[1]&&(r===""||r===Z2(e))&&(r=!0))}return r}function n9(c,a,e=!1){const r=a.propsCache,i=r.get(c);if(i)return i;const s=c.props,n={},l=[];let f=!1;if(!O(c)){const t=z=>{f=!0;const[h,u]=n9(z,a,!0);f1(n,h),u&&l.push(...u)};!e&&a.mixins.length&&a.mixins.forEach(t),c.extends&&t(c.extends),c.mixins&&c.mixins.forEach(t)}if(!s&&!f)return r1(c)&&r.set(c,D2),D2;if(_(s))for(let t=0;t<s.length;t++){const z=O1(s[t]);V5(z)&&(n[z]=X)}else if(s)for(const t in s){const z=O1(t);if(V5(z)){const h=s[t],u=n[z]=_(h)||O(h)?{type:h}:f1({},h);if(u){const g=d5(Boolean,u.type),y=d5(String,u.type);u[0]=g>-1,u[1]=y<0||g<y,(g>-1||$(u,"default"))&&l.push(z)}}}const o=[n,l];return r1(c)&&r.set(c,o),o}function V5(c){return c[0]!=="$"}function M5(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function C5(c,a){return M5(c)===M5(a)}function d5(c,a){return _(a)?a.findIndex(e=>C5(e,c)):O(a)&&C5(a,c)?0:-1}const l9=c=>c[0]==="_"||c==="$stable",g8=c=>_(c)?c.map(R1):[R1(c)],Qm=(c,a,e)=>{if(a._n)return a;const r=pm((...i)=>g8(a(...i)),e);return r._c=!1,r},f9=(c,a,e)=>{const r=c._ctx;for(const i in c){if(l9(i))continue;const s=c[i];if(O(s))a[i]=Qm(i,s,r);else if(s!=null){const n=g8(s);a[i]=()=>n}}},o9=(c,a)=>{const e=g8(a);c.slots.default=()=>e},Jm=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=G(a),v4(a,"_",e)):f9(a,c.slots={})}else c.slots={},a&&o9(c,a);v4(c.slots,F4,1)},cz=(c,a,e)=>{const{vnode:r,slots:i}=c;let s=!0,n=X;if(r.shapeFlag&32){const l=a._;l?e&&l===1?s=!1:(f1(i,a),!e&&l===1&&delete i._):(s=!a.$stable,f9(a,i)),n=a}else a&&(o9(c,a),n={default:1});if(s)for(const l in i)!l9(l)&&!(l in n)&&delete i[l]};function q6(c,a,e,r,i=!1){if(_(c)){c.forEach((h,u)=>q6(h,a&&(_(a)?a[u]:a),e,r,i));return}if(s4(r)&&!i)return;const s=r.shapeFlag&4?B4(r.component)||r.component.proxy:r.el,n=i?null:s,{i:l,r:f}=c,o=a&&a.r,t=l.refs===X?l.refs={}:l.refs,z=l.setupState;if(o!=null&&o!==f&&(o1(o)?(t[o]=null,$(z,o)&&(z[o]=null)):z1(o)&&(o.value=null)),O(f))s2(f,l,12,[n,t]);else{const h=o1(f),u=z1(f);if(h||u){const g=()=>{if(c.f){const y=h?$(z,f)?z[f]:t[f]:f.value;i?_(y)&&f8(y,s):_(y)?y.includes(s)||y.push(s):h?(t[f]=[s],$(z,f)&&(z[f]=t[f])):(f.value=[s],c.k&&(t[c.k]=f.value))}else h?(t[f]=n,$(z,f)&&(z[f]=n)):u&&(f.value=n,c.k&&(t[c.k]=n))};n?(g.id=-1,p1(g,e)):g()}}}const p1=gm;function az(c){return ez(c)}function ez(c,a){const e=N6();e.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:n,createText:l,createComment:f,setText:o,setElementText:t,parentNode:z,nextSibling:h,setScopeId:u=k1,insertStaticContent:g}=c,y=(m,v,H,V=null,p=null,N=null,w=!1,x=null,S=!!v.dynamicChildren)=>{if(m===v)return;m&&!a3(m,v)&&(V=E3(m),T1(m,p,N,!0),m=null),v.patchFlag===-2&&(S=!1,v.dynamicChildren=null);const{type:M,ref:F,shapeFlag:k}=v;switch(M){case T4:q(m,v,H,V);break;case p3:C(m,v,H,V);break;case l4:m==null&&d(v,H,V,w);break;case q1:A2(m,v,H,V,p,N,w,x,S);break;default:k&1?T(m,v,H,V,p,N,w,x,S):k&6?k2(m,v,H,V,p,N,w,x,S):(k&64||k&128)&&M.process(m,v,H,V,p,N,w,x,S,P2)}F!=null&&p&&q6(F,m&&m.ref,N,v||m,!v)},q=(m,v,H,V)=>{if(m==null)r(v.el=l(v.children),H,V);else{const p=v.el=m.el;v.children!==m.children&&o(p,v.children)}},C=(m,v,H,V)=>{m==null?r(v.el=f(v.children||""),H,V):v.el=m.el},d=(m,v,H,V)=>{[m.el,m.anchor]=g(m.children,v,H,V,m.el,m.anchor)},b=({el:m,anchor:v},H,V)=>{let p;for(;m&&m!==v;)p=h(m),r(m,H,V),m=p;r(v,H,V)},L=({el:m,anchor:v})=>{let H;for(;m&&m!==v;)H=h(m),i(m),m=H;i(v)},T=(m,v,H,V,p,N,w,x,S)=>{w=w||v.type==="svg",m==null?W(v,H,V,p,N,w,x,S):e1(m,v,p,N,w,x,S)},W=(m,v,H,V,p,N,w,x)=>{let S,M;const{type:F,props:k,shapeFlag:B,transition:D,dirs:U}=m;if(S=m.el=n(m.type,N,k&&k.is,k),B&8?t(S,m.children):B&16&&t1(m.children,S,null,V,p,N&&F!=="foreignObject",w,x),U&&h2(m,null,V,"created"),Z(S,m,m.scopeId,w,V),k){for(const j in k)j!=="value"&&!i4(j)&&s(S,j,null,k[j],N,m.children,V,p,I1);"value"in k&&s(S,"value",null,k.value),(M=k.onVnodeBeforeMount)&&B1(M,V,m)}U&&h2(m,null,V,"beforeMount");const Y=(!p||p&&!p.pendingBranch)&&D&&!D.persisted;Y&&D.beforeEnter(S),r(S,v,H),((M=k&&k.onVnodeMounted)||Y||U)&&p1(()=>{M&&B1(M,V,m),Y&&D.enter(S),U&&h2(m,null,V,"mounted")},p)},Z=(m,v,H,V,p)=>{if(H&&u(m,H),V)for(let N=0;N<V.length;N++)u(m,V[N]);if(p){let N=p.subTree;if(v===N){const w=p.vnode;Z(m,w,w.scopeId,w.slotScopeIds,p.parent)}}},t1=(m,v,H,V,p,N,w,x,S=0)=>{for(let M=S;M<m.length;M++){const F=m[M]=x?e2(m[M]):R1(m[M]);y(null,F,v,H,V,p,N,w,x)}},e1=(m,v,H,V,p,N,w)=>{const x=v.el=m.el;let{patchFlag:S,dynamicChildren:M,dirs:F}=v;S|=m.patchFlag&16;const k=m.props||X,B=v.props||X;let D;H&&H2(H,!1),(D=B.onVnodeBeforeUpdate)&&B1(D,H,v,m),F&&h2(v,m,H,"beforeUpdate"),H&&H2(H,!0);const U=p&&v.type!=="foreignObject";if(M?N1(m.dynamicChildren,M,x,H,V,U,N):w||K(m,v,x,null,H,V,U,N,!1),S>0){if(S&16)t2(x,v,k,B,H,V,p);else if(S&2&&k.class!==B.class&&s(x,"class",null,B.class,p),S&4&&s(x,"style",k.style,B.style,p),S&8){const Y=v.dynamicProps;for(let j=0;j<Y.length;j++){const i1=Y[j],S1=k[i1],T2=B[i1];(T2!==S1||i1==="value")&&s(x,i1,S1,T2,p,m.children,H,V,I1)}}S&1&&m.children!==v.children&&t(x,v.children)}else!w&&M==null&&t2(x,v,k,B,H,V,p);((D=B.onVnodeUpdated)||F)&&p1(()=>{D&&B1(D,H,v,m),F&&h2(v,m,H,"updated")},V)},N1=(m,v,H,V,p,N,w)=>{for(let x=0;x<v.length;x++){const S=m[x],M=v[x],F=S.el&&(S.type===q1||!a3(S,M)||S.shapeFlag&70)?z(S.el):H;y(S,M,F,null,V,p,N,w,!0)}},t2=(m,v,H,V,p,N,w)=>{if(H!==V){if(H!==X)for(const x in H)!i4(x)&&!(x in V)&&s(m,x,H[x],null,w,v.children,p,N,I1);for(const x in V){if(i4(x))continue;const S=V[x],M=H[x];S!==M&&x!=="value"&&s(m,x,M,S,w,v.children,p,N,I1)}"value"in V&&s(m,"value",H.value,V.value)}},A2=(m,v,H,V,p,N,w,x,S)=>{const M=v.el=m?m.el:l(""),F=v.anchor=m?m.anchor:l("");let{patchFlag:k,dynamicChildren:B,slotScopeIds:D}=v;D&&(x=x?x.concat(D):D),m==null?(r(M,H,V),r(F,H,V),t1(v.children,H,F,p,N,w,x,S)):k>0&&k&64&&B&&m.dynamicChildren?(N1(m.dynamicChildren,B,H,p,N,w,x),(v.key!=null||p&&v===p.subTree)&&t9(m,v,!0)):K(m,v,H,F,p,N,w,x,S)},k2=(m,v,H,V,p,N,w,x,S)=>{v.slotScopeIds=x,m==null?v.shapeFlag&512?p.ctx.activate(v,H,V,w,S):m2(v,H,V,p,N,w,S):J2(m,v,S)},m2=(m,v,H,V,p,N,w)=>{const x=m.component=hz(m,V,p);if(J7(m)&&(x.ctx.renderer=P2),uz(x),x.asyncDep){if(p&&p.registerDep(x,h1),!m.el){const S=x.subTree=v1(p3);C(null,S,v,H)}return}h1(x,m,v,H,p,N,w)},J2=(m,v,H)=>{const V=v.component=m.component;if(Cm(m,v,H))if(V.asyncDep&&!V.asyncResolved){c1(V,v,H);return}else V.next=v,vm(V.update),V.update();else v.el=m.el,V.vnode=v},h1=(m,v,H,V,p,N,w)=>{const x=()=>{if(m.isMounted){let{next:F,bu:k,u:B,parent:D,vnode:U}=m,Y=F,j;H2(m,!1),F?(F.el=U.el,c1(m,F,w)):F=U,k&&f6(k),(j=F.props&&F.props.onVnodeBeforeUpdate)&&B1(j,D,F,U),H2(m,!0);const i1=o6(m),S1=m.subTree;m.subTree=i1,y(S1,i1,z(S1.el),E3(S1),m,p,N),F.el=i1.el,Y===null&&dm(m,i1.el),B&&p1(B,p),(j=F.props&&F.props.onVnodeUpdated)&&p1(()=>B1(j,D,F,U),p)}else{let F;const{el:k,props:B}=v,{bm:D,m:U,parent:Y}=m,j=s4(v);if(H2(m,!1),D&&f6(D),!j&&(F=B&&B.onVnodeBeforeMount)&&B1(F,Y,v),H2(m,!0),k&&n6){const i1=()=>{m.subTree=o6(m),n6(k,m.subTree,m,p,null)};j?v.type.__asyncLoader().then(()=>!m.isUnmounted&&i1()):i1()}else{const i1=m.subTree=o6(m);y(null,i1,H,V,m,p,N),v.el=i1.el}if(U&&p1(U,p),!j&&(F=B&&B.onVnodeMounted)){const i1=v;p1(()=>B1(F,Y,i1),p)}(v.shapeFlag&256||Y&&s4(Y.vnode)&&Y.vnode.shapeFlag&256)&&m.a&&p1(m.a,p),m.isMounted=!0,v=H=V=null}},S=m.effect=new v8(x,()=>C8(M),m.scope),M=m.update=()=>S.run();M.id=m.uid,H2(m,!0),M()},c1=(m,v,H)=>{v.component=m;const V=m.vnode.props;m.vnode=v,m.next=null,Xm(m,v.props,V,H),cz(m,v.children,H),K2(),t5(),Y2()},K=(m,v,H,V,p,N,w,x,S=!1)=>{const M=m&&m.children,F=m?m.shapeFlag:0,k=v.children,{patchFlag:B,shapeFlag:D}=v;if(B>0){if(B&128){_3(M,k,H,V,p,N,w,x,S);return}else if(B&256){z2(M,k,H,V,p,N,w,x,S);return}}D&8?(F&16&&I1(M,p,N),k!==M&&t(H,k)):F&16?D&16?_3(M,k,H,V,p,N,w,x,S):I1(M,p,N,!0):(F&8&&t(H,""),D&16&&t1(k,H,V,p,N,w,x,S))},z2=(m,v,H,V,p,N,w,x,S)=>{m=m||D2,v=v||D2;const M=m.length,F=v.length,k=Math.min(M,F);let B;for(B=0;B<k;B++){const D=v[B]=S?e2(v[B]):R1(v[B]);y(m[B],D,H,null,p,N,w,x,S)}M>F?I1(m,p,N,!0,!1,k):t1(v,H,V,p,N,w,x,S,k)},_3=(m,v,H,V,p,N,w,x,S)=>{let M=0;const F=v.length;let k=m.length-1,B=F-1;for(;M<=k&&M<=B;){const D=m[M],U=v[M]=S?e2(v[M]):R1(v[M]);if(a3(D,U))y(D,U,H,null,p,N,w,x,S);else break;M++}for(;M<=k&&M<=B;){const D=m[k],U=v[B]=S?e2(v[B]):R1(v[B]);if(a3(D,U))y(D,U,H,null,p,N,w,x,S);else break;k--,B--}if(M>k){if(M<=B){const D=B+1,U=D<F?v[D].el:V;for(;M<=B;)y(null,v[M]=S?e2(v[M]):R1(v[M]),H,U,p,N,w,x,S),M++}}else if(M>B)for(;M<=k;)T1(m[M],p,N,!0),M++;else{const D=M,U=M,Y=new Map;for(M=U;M<=B;M++){const L1=v[M]=S?e2(v[M]):R1(v[M]);L1.key!=null&&Y.set(L1.key,M)}let j,i1=0;const S1=B-U+1;let T2=!1,J0=0;const c3=new Array(S1);for(M=0;M<S1;M++)c3[M]=0;for(M=D;M<=k;M++){const L1=m[M];if(i1>=S1){T1(L1,p,N,!0);continue}let F1;if(L1.key!=null)F1=Y.get(L1.key);else for(j=U;j<=B;j++)if(c3[j-U]===0&&a3(L1,v[j])){F1=j;break}F1===void 0?T1(L1,p,N,!0):(c3[F1-U]=M+1,F1>=J0?J0=F1:T2=!0,y(L1,v[F1],H,null,p,N,w,x,S),i1++)}const c5=T2?rz(c3):D2;for(j=c5.length-1,M=S1-1;M>=0;M--){const L1=U+M,F1=v[L1],a5=L1+1<F?v[L1+1].el:V;c3[M]===0?y(null,F1,H,a5,p,N,w,x,S):T2&&(j<0||M!==c5[j]?v2(F1,H,a5,2):j--)}}},v2=(m,v,H,V,p=null)=>{const{el:N,type:w,transition:x,children:S,shapeFlag:M}=m;if(M&6){v2(m.component.subTree,v,H,V);return}if(M&128){m.suspense.move(v,H,V);return}if(M&64){w.move(m,v,H,P2);return}if(w===q1){r(N,v,H);for(let k=0;k<S.length;k++)v2(S[k],v,H,V);r(m.anchor,v,H);return}if(w===l4){b(m,v,H);return}if(V!==2&&M&1&&x)if(V===0)x.beforeEnter(N),r(N,v,H),p1(()=>x.enter(N),p);else{const{leave:k,delayLeave:B,afterLeave:D}=x,U=()=>r(N,v,H),Y=()=>{k(N,()=>{U(),D&&D()})};B?B(N,U,Y):Y()}else r(N,v,H)},T1=(m,v,H,V=!1,p=!1)=>{const{type:N,props:w,ref:x,children:S,dynamicChildren:M,shapeFlag:F,patchFlag:k,dirs:B}=m;if(x!=null&&q6(x,null,H,m,!0),F&256){v.ctx.deactivate(m);return}const D=F&1&&B,U=!s4(m);let Y;if(U&&(Y=w&&w.onVnodeBeforeUnmount)&&B1(Y,v,m),F&6)zt(m.component,H,V);else{if(F&128){m.suspense.unmount(H,V);return}D&&h2(m,null,v,"beforeUnmount"),F&64?m.type.remove(m,v,H,p,P2,V):M&&(N!==q1||k>0&&k&64)?I1(M,v,H,!1,!0):(N===q1&&k&384||!p&&F&16)&&I1(S,v,H),V&&X0(m)}(U&&(Y=w&&w.onVnodeUnmounted)||D)&&p1(()=>{Y&&B1(Y,v,m),D&&h2(m,null,v,"unmounted")},H)},X0=m=>{const{type:v,el:H,anchor:V,transition:p}=m;if(v===q1){mt(H,V);return}if(v===l4){L(m);return}const N=()=>{i(H),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(m.shapeFlag&1&&p&&!p.persisted){const{leave:w,delayLeave:x}=p,S=()=>w(H,N);x?x(m.el,N,S):S()}else N()},mt=(m,v)=>{let H;for(;m!==v;)H=h(m),i(m),m=H;i(v)},zt=(m,v,H)=>{const{bum:V,scope:p,update:N,subTree:w,um:x}=m;V&&f6(V),p.stop(),N&&(N.active=!1,T1(w,m,v,H)),x&&p1(x,v),p1(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},I1=(m,v,H,V=!1,p=!1,N=0)=>{for(let w=N;w<m.length;w++)T1(m[w],v,H,V,p)},E3=m=>m.shapeFlag&6?E3(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el),Q0=(m,v,H)=>{m==null?v._vnode&&T1(v._vnode,null,null,!0):y(v._vnode||null,m,v,null,null,null,H),t5(),G7(),v._vnode=m},P2={p:y,um:T1,m:v2,r:X0,mt:m2,mc:t1,pc:K,pbc:N1,n:E3,o:c};let s6,n6;return a&&([s6,n6]=a(P2)),{render:Q0,hydrate:s6,createApp:Zm(Q0,s6)}}function H2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function t9(c,a,e=!1){const r=c.children,i=a.children;if(_(r)&&_(i))for(let s=0;s<r.length;s++){const n=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=e2(i[s]),l.el=n.el),e||t9(n,l)),l.type===T4&&(l.el=n.el)}}function rz(c){const a=c.slice(),e=[0];let r,i,s,n,l;const f=c.length;for(r=0;r<f;r++){const o=c[r];if(o!==0){if(i=e[e.length-1],c[i]<o){a[r]=i,e.push(r);continue}for(s=0,n=e.length-1;s<n;)l=s+n>>1,c[e[l]]<o?s=l+1:n=l;o<c[e[s]]&&(s>0&&(a[r]=e[s-1]),e[s]=r)}}for(s=e.length,n=e[s-1];s-- >0;)e[s]=n,n=a[n];return e}const iz=c=>c.__isTeleport,q1=Symbol.for("v-fgt"),T4=Symbol.for("v-txt"),p3=Symbol.for("v-cmt"),l4=Symbol.for("v-stc"),l3=[];let w1=null;function W1(c=!1){l3.push(w1=c?null:[])}function sz(){l3.pop(),w1=l3[l3.length-1]||null}let V3=1;function L5(c){V3+=c}function nz(c){return c.dynamicChildren=V3>0?w1||D2:null,sz(),V3>0&&w1&&w1.push(c),c}function G1(c,a,e,r,i,s){return nz(R(c,a,e,r,i,s,!0))}function R6(c){return c?c.__v_isVNode===!0:!1}function a3(c,a){return c.type===a.type&&c.key===a.key}const F4="__vInternal",m9=({key:c})=>c??null,f4=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?o1(c)||z1(c)||O(c)?{i:b1,r:c,k:a,f:!!e}:c:null);function R(c,a=null,e=null,r=0,i=null,s=c===q1?0:1,n=!1,l=!1){const f={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&m9(a),ref:a&&f4(a),scopeId:k4,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:b1};return l?(b8(f,e),s&128&&c.normalize(f)):e&&(f.shapeFlag|=o1(e)?8:16),V3>0&&!n&&w1&&(f.patchFlag>0||s&6)&&f.patchFlag!==32&&w1.push(f),f}const v1=lz;function lz(c,a=null,e=null,r=0,i=null,s=!1){if((!c||c===Em)&&(c=p3),R6(c)){const l=$2(c,a,!0);return e&&b8(l,e),V3>0&&!s&&w1&&(l.shapeFlag&6?w1[w1.indexOf(c)]=l:w1.push(l)),l.patchFlag|=-2,l}if(dz(c)&&(c=c.__vccOpts),a){a=fz(a);let{class:l,style:f}=a;l&&!o1(l)&&(a.class=C2(l)),r1(f)&&(_7(f)&&!_(f)&&(f=f1({},f)),a.style=m8(f))}const n=o1(c)?1:Lm(c)?128:iz(c)?64:r1(c)?4:O(c)?2:0;return R(c,a,e,r,i,n,s,!0)}function fz(c){return c?_7(c)||F4 in c?f1({},c):c:null}function $2(c,a,e=!1){const{props:r,ref:i,patchFlag:s,children:n}=c,l=a?mz(r||{},a):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:l,key:l&&m9(l),ref:a&&a.ref?e&&i?_(i)?i.concat(f4(a)):[i,f4(a)]:f4(a):i,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==q1?s===-1?16:s|16:s,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&$2(c.ssContent),ssFallback:c.ssFallback&&$2(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function oz(c=" ",a=0){return v1(T4,null,c,a)}function tz(c,a){const e=v1(l4,null,c);return e.staticCount=a,e}function R1(c){return c==null||typeof c=="boolean"?v1(p3):_(c)?v1(q1,null,c.slice()):typeof c=="object"?e2(c):v1(T4,null,String(c))}function e2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:$2(c)}function b8(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(_(a))e=16;else if(typeof a=="object")if(r&65){const i=a.default;i&&(i._c&&(i._d=!1),b8(c,i()),i._c&&(i._d=!0));return}else{e=32;const i=a._;!i&&!(F4 in a)?a._ctx=b1:i===3&&b1&&(b1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else O(a)?(a={default:a,_ctx:b1},e=32):(a=String(a),r&64?(e=16,a=[oz(a)]):e=8);c.children=a,c.shapeFlag|=e}function mz(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const i in r)if(i==="class")a.class!==r.class&&(a.class=C2([a.class,r.class]));else if(i==="style")a.style=m8([a.style,r.style]);else if(b4(i)){const s=a[i],n=r[i];n&&s!==n&&!(_(s)&&s.includes(n))&&(a[i]=s?[].concat(s,n):n)}else i!==""&&(a[i]=r[i])}return a}function B1(c,a,e,r=null){P1(c,a,7,[e,r])}const zz=i9();let vz=0;function hz(c,a,e){const r=c.type,i=(a?a.appContext:c.appContext)||zz,s={uid:vz++,vnode:c,type:r,parent:a,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new wt(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:n9(r,i),emitsOptions:Z7(r,i),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=a?a.root:s,s.emit=um.bind(null,s),c.ce&&c.ce(s),s}let l1=null;const Hz=()=>l1||b1;let x8,B2,g5="__VUE_INSTANCE_SETTERS__";(B2=N6()[g5])||(B2=N6()[g5]=[]),B2.push(c=>l1=c),x8=c=>{B2.length>1?B2.forEach(a=>a(c)):B2[0](c)};const W2=c=>{x8(c),c.scope.on()},N2=()=>{l1&&l1.scope.off(),x8(null)};function z9(c){return c.vnode.shapeFlag&4}let M3=!1;function uz(c,a=!1){M3=a;const{props:e,children:r}=c.vnode,i=z9(c);Ym(c,e,i,a),Jm(c,r);const s=i?pz(c,a):void 0;return M3=!1,s}function pz(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=E7(new Proxy(c.ctx,Om));const{setup:r}=e;if(r){const i=c.setupContext=r.length>1?Mz(c):null;W2(c),K2();const s=s2(r,c,0,[c.props,i]);if(Y2(),N2(),x7(s)){if(s.then(N2,N2),a)return s.then(n=>{b5(c,n,a)}).catch(n=>{w4(n,c,0)});c.asyncDep=s}else b5(c,s,a)}else v9(c,a)}function b5(c,a,e){O(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:r1(a)&&(c.setupState=I7(a)),v9(c,e)}let x5;function v9(c,a,e){const r=c.type;if(!c.render){if(!a&&x5&&!r.render){const i=r.template||L8(c).template;if(i){const{isCustomElement:s,compilerOptions:n}=c.appContext.config,{delimiters:l,compilerOptions:f}=r,o=f1(f1({isCustomElement:s,delimiters:l},n),f);r.render=x5(i,o)}}c.render=r.render||k1}W2(c),K2(),Um(c),Y2(),N2()}function Vz(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return d1(c,"get","$attrs"),a[e]}}))}function Mz(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return Vz(c)},slots:c.slots,emit:c.emit,expose:a}}function B4(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(I7(E7(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in n3)return n3[e](c)},has(a,e){return e in a||e in n3}}))}function Cz(c,a=!0){return O(c)?c.displayName||c.name:c.name||a&&c.__name}function dz(c){return O(c)&&"__vccOpts"in c}const D1=(c,a)=>om(c,a,M3);function Lz(c,a,e){const r=arguments.length;return r===2?r1(a)&&!_(a)?R6(a)?v1(c,null,[a]):v1(c,a):v1(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&R6(e)&&(e=[e]),v1(c,a,e))}const gz=Symbol.for("v-scx"),bz=()=>n4(gz),xz="3.3.4",Nz="http://www.w3.org/2000/svg",M2=typeof document<"u"?document:null,N5=M2&&M2.createElement("template"),Sz={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const i=a?M2.createElementNS(Nz,c):M2.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:c=>M2.createTextNode(c),createComment:c=>M2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>M2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,i,s){const n=e?e.previousSibling:a.lastChild;if(i&&(i===s||i.nextSibling))for(;a.insertBefore(i.cloneNode(!0),e),!(i===s||!(i=i.nextSibling)););else{N5.innerHTML=r?`<svg>${c}</svg>`:c;const l=N5.content;if(r){const f=l.firstChild;for(;f.firstChild;)l.appendChild(f.firstChild);l.removeChild(f)}a.insertBefore(l,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}};function yz(c,a,e){const r=c._vtc;r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}function wz(c,a,e){const r=c.style,i=o1(e);if(e&&!i){if(a&&!o1(a))for(const s in a)e[s]==null&&D6(r,s,"");for(const s in e)D6(r,s,e[s])}else{const s=r.display;i?a!==e&&(r.cssText=e):a&&c.removeAttribute("style"),"_vod"in c&&(r.display=s)}}const S5=/\s*!important$/;function D6(c,a,e){if(_(e))e.forEach(r=>D6(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=Az(c,a);S5.test(e)?c.setProperty(Z2(r),e.replace(S5,""),"important"):c[r]=e}}const y5=["Webkit","Moz","ms"],m6={};function Az(c,a){const e=m6[a];if(e)return e;let r=O1(a);if(r!=="filter"&&r in c)return m6[a]=r;r=S4(r);for(let i=0;i<y5.length;i++){const s=y5[i]+r;if(s in c)return m6[a]=s}return a}const w5="http://www.w3.org/1999/xlink";function kz(c,a,e,r,i){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(w5,a.slice(6,a.length)):c.setAttributeNS(w5,a,e);else{const s=yt(a);e==null||s&&!N7(e)?c.removeAttribute(a):c.setAttribute(a,s?"":e)}}function Pz(c,a,e,r,i,s,n){if(a==="innerHTML"||a==="textContent"){r&&n(r,i,s),c[a]=e??"";return}const l=c.tagName;if(a==="value"&&l!=="PROGRESS"&&!l.includes("-")){c._value=e;const o=l==="OPTION"?c.getAttribute("value"):c.value,t=e??"";o!==t&&(c.value=t),e==null&&c.removeAttribute(a);return}let f=!1;if(e===""||e==null){const o=typeof c[a];o==="boolean"?e=N7(e):e==null&&o==="string"?(e="",f=!0):o==="number"&&(e=0,f=!0)}try{c[a]=e}catch{}f&&c.removeAttribute(a)}function Tz(c,a,e,r){c.addEventListener(a,e,r)}function Fz(c,a,e,r){c.removeEventListener(a,e,r)}function Bz(c,a,e,r,i=null){const s=c._vei||(c._vei={}),n=s[a];if(r&&n)n.value=r;else{const[l,f]=qz(a);if(r){const o=s[a]=_z(r,i);Tz(c,l,o,f)}else n&&(Fz(c,l,n,f),s[a]=void 0)}}const A5=/(?:Once|Passive|Capture)$/;function qz(c){let a;if(A5.test(c)){a={};let r;for(;r=c.match(A5);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):Z2(c.slice(2)),a]}let z6=0;const Rz=Promise.resolve(),Dz=()=>z6||(Rz.then(()=>z6=0),z6=Date.now());function _z(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;P1(Ez(r,e.value),a,5,[r])};return e.value=c,e.attached=Dz(),e}function Ez(c,a){if(_(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>i=>!i._stopped&&r&&r(i))}else return a}const k5=/^on[a-z]/,Oz=(c,a,e,r,i=!1,s,n,l,f)=>{a==="class"?yz(c,r,i):a==="style"?wz(c,e,r):b4(a)?l8(a)||Bz(c,a,e,r,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Uz(c,a,r,i))?Pz(c,a,r,s,n,l,f):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),kz(c,a,r,i))};function Uz(c,a,e,r){return r?!!(a==="innerHTML"||a==="textContent"||a in c&&k5.test(a)&&O(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||k5.test(a)&&o1(e)?!1:a in c}const Iz=f1({patchProp:Oz},Sz);let P5;function $z(){return P5||(P5=az(Iz))}const Wz=(...c)=>{const a=$z().createApp(...c),{mount:e}=a;return a.mount=r=>{const i=Gz(r);if(!i)return;const s=a._component;!O(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const n=e(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),n},a};function Gz(c){return o1(c)?document.querySelector(c):c}function M1(c,a,e){return Array.isArray(c)?(c.length=Math.max(c.length,a),c.splice(a,1,e),e):(c[a]=e,e)}function jz(c,a){if(Array.isArray(c)){c.splice(a,1);return}delete c[a]}var T5;const h9=typeof window<"u",Zz=Object.prototype.toString,Kz=c=>typeof c=="number",Yz=c=>typeof c=="string",_6=c=>Zz.call(c)==="[object Object]",S2=()=>{};h9&&((T5=window==null?void 0:window.navigator)!=null&&T5.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function H9(c){return S7()?(kt(c),!0):!1}function N8(c){Hz()&&d8(c)}function G2(c){var a;const e=I(c);return(a=e==null?void 0:e.$el)!=null?a:e}const u9=h9?window:void 0;function Xz(...c){let a,e,r,i;if(Yz(c[0])?([e,r,i]=c,a=u9):[a,e,r,i]=c,!a)return S2;let s=S2;const n=s1(()=>G2(a),f=>{s(),f&&(f.addEventListener(e,r,i),s=()=>{f.removeEventListener(e,r,i),s=S2})},{immediate:!0,flush:"post"}),l=()=>{n(),s()};return H9(l),l}const F5=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},B5="__vueuse_ssr_handlers__";F5[B5]=F5[B5]||{};function Qz(c,a,e={}){const{root:r,rootMargin:i="0px",threshold:s=.1,window:n=u9}=e,l=n&&"IntersectionObserver"in n;let f=S2;const o=l?s1(()=>({el:G2(c),root:G2(r)}),({el:z,root:h})=>{if(f(),!z)return;const u=new IntersectionObserver(a,{root:h,rootMargin:i,threshold:s});u.observe(z),f=()=>{u.disconnect(),f=S2}},{immediate:!0,flush:"post"}):S2,t=()=>{f(),o()};return H9(t),{isSupported:l,stop:t}}var q5;(function(c){c.UP="UP",c.RIGHT="RIGHT",c.DOWN="DOWN",c.LEFT="LEFT",c.NONE="NONE"})(q5||(q5={}));const p9=1/60*1e3,Jz=typeof performance<"u"?()=>performance.now():()=>Date.now(),V9=typeof window<"u"?c=>window.requestAnimationFrame(c):c=>setTimeout(()=>c(Jz()),p9);function cv(c){let a=[],e=[],r=0,i=!1,s=!1;const n=new WeakSet,l={schedule:(f,o=!1,t=!1)=>{const z=t&&i,h=z?a:e;return o&&n.add(f),h.indexOf(f)===-1&&(h.push(f),z&&i&&(r=a.length)),f},cancel:f=>{const o=e.indexOf(f);o!==-1&&e.splice(o,1),n.delete(f)},process:f=>{if(i){s=!0;return}if(i=!0,[a,e]=[e,a],e.length=0,r=a.length,r)for(let o=0;o<r;o++){const t=a[o];t(f),n.has(t)&&(l.schedule(t),c())}i=!1,s&&(s=!1,l.process(f))}};return l}const av=40;let E6=!0,C3=!1,O6=!1;const O2={delta:0,timestamp:0},S3=["read","update","preRender","render","postRender"],q4=S3.reduce((c,a)=>(c[a]=cv(()=>C3=!0),c),{}),U6=S3.reduce((c,a)=>{const e=q4[a];return c[a]=(r,i=!1,s=!1)=>(C3||iv(),e.schedule(r,i,s)),c},{}),ev=S3.reduce((c,a)=>(c[a]=q4[a].cancel,c),{});S3.reduce((c,a)=>(c[a]=()=>q4[a].process(O2),c),{});const rv=c=>q4[c].process(O2),M9=c=>{C3=!1,O2.delta=E6?p9:Math.max(Math.min(c-O2.timestamp,av),1),O2.timestamp=c,O6=!0,S3.forEach(rv),O6=!1,C3&&(E6=!1,V9(M9))},iv=()=>{C3=!0,E6=!0,O6||V9(M9)},C9=()=>O2;function d9(c,a){var e={};for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&a.indexOf(r)<0&&(e[r]=c[r]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(c);i<r.length;i++)a.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(c,r[i])&&(e[r[i]]=c[r[i]]);return e}var sv=function(){},R5=function(){};const I6=(c,a,e)=>Math.min(Math.max(e,c),a),v6=.001,nv=.01,D5=10,lv=.05,fv=1;function ov({duration:c=800,bounce:a=.25,velocity:e=0,mass:r=1}){let i,s;sv(c<=D5*1e3);let n=1-a;n=I6(lv,fv,n),c=I6(nv,D5,c/1e3),n<1?(i=o=>{const t=o*n,z=t*c,h=t-e,u=$6(o,n),g=Math.exp(-z);return v6-h/u*g},s=o=>{const z=o*n*c,h=z*e+e,u=Math.pow(n,2)*Math.pow(o,2)*c,g=Math.exp(-z),y=$6(Math.pow(o,2),n);return(-i(o)+v6>0?-1:1)*((h-u)*g)/y}):(i=o=>{const t=Math.exp(-o*c),z=(o-e)*c+1;return-v6+t*z},s=o=>{const t=Math.exp(-o*c),z=(e-o)*(c*c);return t*z});const l=5/c,f=mv(i,s,l);if(c=c*1e3,isNaN(f))return{stiffness:100,damping:10,duration:c};{const o=Math.pow(f,2)*r;return{stiffness:o,damping:n*2*Math.sqrt(r*o),duration:c}}}const tv=12;function mv(c,a,e){let r=e;for(let i=1;i<tv;i++)r=r-c(r)/a(r);return r}function $6(c,a){return c*Math.sqrt(1-a*a)}const zv=["duration","bounce"],vv=["stiffness","damping","mass"];function _5(c,a){return a.some(e=>c[e]!==void 0)}function hv(c){let a=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},c);if(!_5(c,vv)&&_5(c,zv)){const e=ov(c);a=Object.assign(Object.assign(Object.assign({},a),e),{velocity:0,mass:1}),a.isResolvedFromDuration=!0}return a}function S8(c){var{from:a=0,to:e=1,restSpeed:r=2,restDelta:i}=c,s=d9(c,["from","to","restSpeed","restDelta"]);const n={done:!1,value:a};let{stiffness:l,damping:f,mass:o,velocity:t,duration:z,isResolvedFromDuration:h}=hv(s),u=E5,g=E5;function y(){const q=t?-(t/1e3):0,C=e-a,d=f/(2*Math.sqrt(l*o)),b=Math.sqrt(l/o)/1e3;if(i===void 0&&(i=Math.min(Math.abs(e-a)/100,.4)),d<1){const L=$6(b,d);u=T=>{const W=Math.exp(-d*b*T);return e-W*((q+d*b*C)/L*Math.sin(L*T)+C*Math.cos(L*T))},g=T=>{const W=Math.exp(-d*b*T);return d*b*W*(Math.sin(L*T)*(q+d*b*C)/L+C*Math.cos(L*T))-W*(Math.cos(L*T)*(q+d*b*C)-L*C*Math.sin(L*T))}}else if(d===1)u=L=>e-Math.exp(-b*L)*(C+(q+b*C)*L);else{const L=b*Math.sqrt(d*d-1);u=T=>{const W=Math.exp(-d*b*T),Z=Math.min(L*T,300);return e-W*((q+d*b*C)*Math.sinh(Z)+L*C*Math.cosh(Z))/L}}}return y(),{next:q=>{const C=u(q);if(h)n.done=q>=z;else{const d=g(q)*1e3,b=Math.abs(d)<=r,L=Math.abs(e-C)<=i;n.done=b&&L}return n.value=n.done?e:C,n},flipTarget:()=>{t=-t,[a,e]=[e,a],y()}}}S8.needsInterpolation=(c,a)=>typeof c=="string"||typeof a=="string";const E5=c=>0,L9=(c,a,e)=>{const r=a-c;return r===0?1:(e-c)/r},y8=(c,a,e)=>-e*c+e*a+c,g9=(c,a)=>e=>Math.max(Math.min(e,a),c),f3=c=>c%1?Number(c.toFixed(5)):c,d3=/(-)?([\d]*\.?[\d])+/g,W6=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Hv=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function y3(c){return typeof c=="string"}const w3={test:c=>typeof c=="number",parse:parseFloat,transform:c=>c},o3=Object.assign(Object.assign({},w3),{transform:g9(0,1)}),j3=Object.assign(Object.assign({},w3),{default:1}),w8=c=>({test:a=>y3(a)&&a.endsWith(c)&&a.split(" ").length===1,parse:parseFloat,transform:a=>`${a}${c}`}),u2=w8("deg"),t3=w8("%"),E=w8("px"),O5=Object.assign(Object.assign({},t3),{parse:c=>t3.parse(c)/100,transform:c=>t3.transform(c*100)}),A8=(c,a)=>e=>!!(y3(e)&&Hv.test(e)&&e.startsWith(c)||a&&Object.prototype.hasOwnProperty.call(e,a)),b9=(c,a,e)=>r=>{if(!y3(r))return r;const[i,s,n,l]=r.match(d3);return{[c]:parseFloat(i),[a]:parseFloat(s),[e]:parseFloat(n),alpha:l!==void 0?parseFloat(l):1}},L2={test:A8("hsl","hue"),parse:b9("hue","saturation","lightness"),transform:({hue:c,saturation:a,lightness:e,alpha:r=1})=>"hsla("+Math.round(c)+", "+t3.transform(f3(a))+", "+t3.transform(f3(e))+", "+f3(o3.transform(r))+")"},uv=g9(0,255),h6=Object.assign(Object.assign({},w3),{transform:c=>Math.round(uv(c))}),r2={test:A8("rgb","red"),parse:b9("red","green","blue"),transform:({red:c,green:a,blue:e,alpha:r=1})=>"rgba("+h6.transform(c)+", "+h6.transform(a)+", "+h6.transform(e)+", "+f3(o3.transform(r))+")"};function pv(c){let a="",e="",r="",i="";return c.length>5?(a=c.substr(1,2),e=c.substr(3,2),r=c.substr(5,2),i=c.substr(7,2)):(a=c.substr(1,1),e=c.substr(2,1),r=c.substr(3,1),i=c.substr(4,1),a+=a,e+=e,r+=r,i+=i),{red:parseInt(a,16),green:parseInt(e,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const G6={test:A8("#"),parse:pv,transform:r2.transform},V1={test:c=>r2.test(c)||G6.test(c)||L2.test(c),parse:c=>r2.test(c)?r2.parse(c):L2.test(c)?L2.parse(c):G6.parse(c),transform:c=>y3(c)?c:c.hasOwnProperty("red")?r2.transform(c):L2.transform(c)},x9="${c}",N9="${n}";function Vv(c){var a,e,r,i;return isNaN(c)&&y3(c)&&((e=(a=c.match(d3))===null||a===void 0?void 0:a.length)!==null&&e!==void 0?e:0)+((i=(r=c.match(W6))===null||r===void 0?void 0:r.length)!==null&&i!==void 0?i:0)>0}function S9(c){typeof c=="number"&&(c=`${c}`);const a=[];let e=0;const r=c.match(W6);r&&(e=r.length,c=c.replace(W6,x9),a.push(...r.map(V1.parse)));const i=c.match(d3);return i&&(c=c.replace(d3,N9),a.push(...i.map(w3.parse))),{values:a,numColors:e,tokenised:c}}function y9(c){return S9(c).values}function w9(c){const{values:a,numColors:e,tokenised:r}=S9(c),i=a.length;return s=>{let n=r;for(let l=0;l<i;l++)n=n.replace(l<e?x9:N9,l<e?V1.transform(s[l]):f3(s[l]));return n}}const Mv=c=>typeof c=="number"?0:c;function Cv(c){const a=y9(c);return w9(c)(a.map(Mv))}const A3={test:Vv,parse:y9,createTransformer:w9,getAnimatableNone:Cv},dv=new Set(["brightness","contrast","saturate","opacity"]);function Lv(c){let[a,e]=c.slice(0,-1).split("(");if(a==="drop-shadow")return c;const[r]=e.match(d3)||[];if(!r)return c;const i=e.replace(r,"");let s=dv.has(a)?1:0;return r!==e&&(s*=100),a+"("+s+i+")"}const gv=/([a-z-]*)\(.*?\)/g,j6=Object.assign(Object.assign({},A3),{getAnimatableNone:c=>{const a=c.match(gv);return a?a.map(Lv).join(" "):c}});function H6(c,a,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?c+(a-c)*6*e:e<1/2?a:e<2/3?c+(a-c)*(2/3-e)*6:c}function U5({hue:c,saturation:a,lightness:e,alpha:r}){c/=360,a/=100,e/=100;let i=0,s=0,n=0;if(!a)i=s=n=e;else{const l=e<.5?e*(1+a):e+a-e*a,f=2*e-l;i=H6(f,l,c+1/3),s=H6(f,l,c),n=H6(f,l,c-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(n*255),alpha:r}}const bv=(c,a,e)=>{const r=c*c,i=a*a;return Math.sqrt(Math.max(0,e*(i-r)+r))},xv=[G6,r2,L2],I5=c=>xv.find(a=>a.test(c)),A9=(c,a)=>{let e=I5(c),r=I5(a),i=e.parse(c),s=r.parse(a);e===L2&&(i=U5(i),e=r2),r===L2&&(s=U5(s),r=r2);const n=Object.assign({},i);return l=>{for(const f in n)f!=="alpha"&&(n[f]=bv(i[f],s[f],l));return n.alpha=y8(i.alpha,s.alpha,l),e.transform(n)}},Nv=c=>typeof c=="number",Sv=(c,a)=>e=>a(c(e)),k9=(...c)=>c.reduce(Sv);function P9(c,a){return Nv(c)?e=>y8(c,a,e):V1.test(c)?A9(c,a):F9(c,a)}const T9=(c,a)=>{const e=[...c],r=e.length,i=c.map((s,n)=>P9(s,a[n]));return s=>{for(let n=0;n<r;n++)e[n]=i[n](s);return e}},yv=(c,a)=>{const e=Object.assign(Object.assign({},c),a),r={};for(const i in e)c[i]!==void 0&&a[i]!==void 0&&(r[i]=P9(c[i],a[i]));return i=>{for(const s in r)e[s]=r[s](i);return e}};function $5(c){const a=A3.parse(c),e=a.length;let r=0,i=0,s=0;for(let n=0;n<e;n++)r||typeof a[n]=="number"?r++:a[n].hue!==void 0?s++:i++;return{parsed:a,numNumbers:r,numRGB:i,numHSL:s}}const F9=(c,a)=>{const e=A3.createTransformer(a),r=$5(c),i=$5(a);return r.numHSL===i.numHSL&&r.numRGB===i.numRGB&&r.numNumbers>=i.numNumbers?k9(T9(r.parsed,i.parsed),e):n=>`${n>0?a:c}`},wv=(c,a)=>e=>y8(c,a,e);function Av(c){if(typeof c=="number")return wv;if(typeof c=="string")return V1.test(c)?A9:F9;if(Array.isArray(c))return T9;if(typeof c=="object")return yv}function kv(c,a,e){const r=[],i=e||Av(c[0]),s=c.length-1;for(let n=0;n<s;n++){let l=i(c[n],c[n+1]);if(a){const f=Array.isArray(a)?a[n]:a;l=k9(f,l)}r.push(l)}return r}function Pv([c,a],[e]){return r=>e(L9(c,a,r))}function Tv(c,a){const e=c.length,r=e-1;return i=>{let s=0,n=!1;if(i<=c[0]?n=!0:i>=c[r]&&(s=r-1,n=!0),!n){let f=1;for(;f<e&&!(c[f]>i||f===r);f++);s=f-1}const l=L9(c[s],c[s+1],i);return a[s](l)}}function B9(c,a,{clamp:e=!0,ease:r,mixer:i}={}){const s=c.length;R5(s===a.length),R5(!r||!Array.isArray(r)||r.length===s-1),c[0]>c[s-1]&&(c=[].concat(c),a=[].concat(a),c.reverse(),a.reverse());const n=kv(a,r,i),l=s===2?Pv(c,n):Tv(c,n);return e?f=>l(I6(c[0],c[s-1],f)):l}const R4=c=>a=>1-c(1-a),k8=c=>a=>a<=.5?c(2*a)/2:(2-c(2*(1-a)))/2,Fv=c=>a=>Math.pow(a,c),q9=c=>a=>a*a*((c+1)*a-c),Bv=c=>{const a=q9(c);return e=>(e*=2)<1?.5*a(e):.5*(2-Math.pow(2,-10*(e-1)))},R9=1.525,qv=4/11,Rv=8/11,Dv=9/10,D9=c=>c,P8=Fv(2),_v=R4(P8),_9=k8(P8),E9=c=>1-Math.sin(Math.acos(c)),O9=R4(E9),Ev=k8(O9),T8=q9(R9),Ov=R4(T8),Uv=k8(T8),Iv=Bv(R9),$v=4356/361,Wv=35442/1805,Gv=16061/1805,V4=c=>{if(c===1||c===0)return c;const a=c*c;return c<qv?7.5625*a:c<Rv?9.075*a-9.9*c+3.4:c<Dv?$v*a-Wv*c+Gv:10.8*c*c-20.52*c+10.72},jv=R4(V4),Zv=c=>c<.5?.5*(1-V4(1-c*2)):.5*V4(c*2-1)+.5;function Kv(c,a){return c.map(()=>a||_9).splice(0,c.length-1)}function Yv(c){const a=c.length;return c.map((e,r)=>r!==0?r/(a-1):0)}function Xv(c,a){return c.map(e=>e*a)}function o4({from:c=0,to:a=1,ease:e,offset:r,duration:i=300}){const s={done:!1,value:c},n=Array.isArray(a)?a:[c,a],l=Xv(r&&r.length===n.length?r:Yv(n),i);function f(){return B9(l,n,{ease:Array.isArray(e)?e:Kv(n,e)})}let o=f();return{next:t=>(s.value=o(t),s.done=t>=i,s),flipTarget:()=>{n.reverse(),o=f()}}}function Qv({velocity:c=0,from:a=0,power:e=.8,timeConstant:r=350,restDelta:i=.5,modifyTarget:s}){const n={done:!1,value:a};let l=e*c;const f=a+l,o=s===void 0?f:s(f);return o!==f&&(l=o-a),{next:t=>{const z=-l*Math.exp(-t/r);return n.done=!(z>i||z<-i),n.value=n.done?o:o+z,n},flipTarget:()=>{}}}const W5={keyframes:o4,spring:S8,decay:Qv};function Jv(c){if(Array.isArray(c.to))return o4;if(W5[c.type])return W5[c.type];const a=new Set(Object.keys(c));return a.has("ease")||a.has("duration")&&!a.has("dampingRatio")?o4:a.has("dampingRatio")||a.has("stiffness")||a.has("mass")||a.has("damping")||a.has("restSpeed")||a.has("restDelta")?S8:o4}function U9(c,a,e=0){return c-a-e}function ch(c,a,e=0,r=!0){return r?U9(a+-c,a,e):a-(c-a)+e}function ah(c,a,e,r){return r?c>=a+e:c<=-e}const eh=c=>{const a=({delta:e})=>c(e);return{start:()=>U6.update(a,!0),stop:()=>ev.update(a)}};function I9(c){var a,e,{from:r,autoplay:i=!0,driver:s=eh,elapsed:n=0,repeat:l=0,repeatType:f="loop",repeatDelay:o=0,onPlay:t,onStop:z,onComplete:h,onRepeat:u,onUpdate:g}=c,y=d9(c,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:q}=y,C,d=0,b=y.duration,L,T=!1,W=!0,Z;const t1=Jv(y);!((e=(a=t1).needsInterpolation)===null||e===void 0)&&e.call(a,r,q)&&(Z=B9([0,100],[r,q],{clamp:!1}),r=0,q=100);const e1=t1(Object.assign(Object.assign({},y),{from:r,to:q}));function N1(){d++,f==="reverse"?(W=d%2===0,n=ch(n,b,o,W)):(n=U9(n,b,o),f==="mirror"&&e1.flipTarget()),T=!1,u&&u()}function t2(){C.stop(),h&&h()}function A2(m2){if(W||(m2=-m2),n+=m2,!T){const J2=e1.next(Math.max(0,n));L=J2.value,Z&&(L=Z(L)),T=W?J2.done:n<=0}g==null||g(L),T&&(d===0&&(b??(b=n)),d<l?ah(n,b,o,W)&&N1():t2())}function k2(){t==null||t(),C=s(A2),C.start()}return i&&k2(),{stop:()=>{z==null||z(),C.stop()}}}function $9(c,a){return a?c*(1e3/a):0}function rh({from:c=0,velocity:a=0,min:e,max:r,power:i=.8,timeConstant:s=750,bounceStiffness:n=500,bounceDamping:l=10,restDelta:f=1,modifyTarget:o,driver:t,onUpdate:z,onComplete:h,onStop:u}){let g;function y(b){return e!==void 0&&b<e||r!==void 0&&b>r}function q(b){return e===void 0?r:r===void 0||Math.abs(e-b)<Math.abs(r-b)?e:r}function C(b){g==null||g.stop(),g=I9(Object.assign(Object.assign({},b),{driver:t,onUpdate:L=>{var T;z==null||z(L),(T=b.onUpdate)===null||T===void 0||T.call(b,L)},onComplete:h,onStop:u}))}function d(b){C(Object.assign({type:"spring",stiffness:n,damping:l,restDelta:f},b))}if(y(c))d({from:c,velocity:a,to:q(c)});else{let b=i*a+c;typeof o<"u"&&(b=o(b));const L=q(b),T=L===e?-1:1;let W,Z;const t1=e1=>{W=Z,Z=e1,a=$9(e1-W,C9().delta),(T===1&&e1>L||T===-1&&e1<L)&&d({from:e1,to:L,velocity:a})};C({type:"decay",from:c,velocity:a,timeConstant:s,power:i,restDelta:f,modifyTarget:o,onUpdate:y(b)?t1:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const W9=(c,a)=>1-3*a+3*c,G9=(c,a)=>3*a-6*c,j9=c=>3*c,M4=(c,a,e)=>((W9(a,e)*c+G9(a,e))*c+j9(a))*c,Z9=(c,a,e)=>3*W9(a,e)*c*c+2*G9(a,e)*c+j9(a),ih=1e-7,sh=10;function nh(c,a,e,r,i){let s,n,l=0;do n=a+(e-a)/2,s=M4(n,r,i)-c,s>0?e=n:a=n;while(Math.abs(s)>ih&&++l<sh);return n}const lh=8,fh=.001;function oh(c,a,e,r){for(let i=0;i<lh;++i){const s=Z9(a,e,r);if(s===0)return a;const n=M4(a,e,r)-c;a-=n/s}return a}const t4=11,Z3=1/(t4-1);function th(c,a,e,r){if(c===a&&e===r)return D9;const i=new Float32Array(t4);for(let n=0;n<t4;++n)i[n]=M4(n*Z3,c,e);function s(n){let l=0,f=1;const o=t4-1;for(;f!==o&&i[f]<=n;++f)l+=Z3;--f;const t=(n-i[f])/(i[f+1]-i[f]),z=l+t*Z3,h=Z9(z,c,e);return h>=fh?oh(n,z,c,e):h===0?z:nh(n,l,l+Z3,c,e)}return n=>n===0||n===1?n:M4(s(n),a,r)}const u6={};class mh{constructor(){this.subscriptions=new Set}add(a){return this.subscriptions.add(a),()=>this.subscriptions.delete(a)}notify(a,e,r){if(this.subscriptions.size)for(const i of this.subscriptions)i(a,e,r)}clear(){this.subscriptions.clear()}}const G5=c=>!isNaN(parseFloat(c));class zh{constructor(a){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new mh,this.canTrackVelocity=!1,this.updateAndNotify=e=>{this.prev=this.current,this.current=e;const{delta:r,timestamp:i}=C9();this.lastUpdated!==i&&(this.timeDelta=r,this.lastUpdated=i),U6.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>U6.postRender(this.velocityCheck),this.velocityCheck=({timestamp:e})=>{this.canTrackVelocity||(this.canTrackVelocity=G5(this.current)),e!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=a,this.canTrackVelocity=G5(this.current)}onChange(a){return this.updateSubscribers.add(a)}clearListeners(){this.updateSubscribers.clear()}set(a){this.updateAndNotify(a)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?$9(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(a){return this.stop(),new Promise(e=>{const{stop:r}=a(e);this.stopAnimation=r}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function vh(c){return new zh(c)}const{isArray:hh}=Array;function Hh(){const c=C1({}),a=r=>{const i=s=>{c.value[s]&&(c.value[s].stop(),c.value[s].destroy(),jz(c.value,s))};r?hh(r)?r.forEach(i):i(r):Object.keys(c.value).forEach(i)},e=(r,i,s)=>{if(c.value[r])return c.value[r];const n=vh(i);return n.onChange(l=>{M1(s,r,l)}),M1(c.value,r,n),n};return N8(a),{motionValues:c,get:e,stop:a}}const uh=c=>Array.isArray(c),p2=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),p6=c=>({type:"spring",stiffness:550,damping:c===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),ph=c=>({type:"spring",stiffness:550,damping:c===0?100:30,restDelta:.01,restSpeed:10}),V6=()=>({type:"keyframes",ease:"linear",duration:300}),Vh=c=>({type:"keyframes",duration:800,values:c}),j5={default:ph,x:p2,y:p2,z:p2,rotate:p2,rotateX:p2,rotateY:p2,rotateZ:p2,scaleX:p6,scaleY:p6,scale:p6,backgroundColor:V6,color:V6,opacity:V6},K9=(c,a)=>{let e;return uh(a)?e=Vh:e=j5[c]||j5.default,{to:a,...e(a)}},Z5={...w3,transform:Math.round},Y9={color:V1,backgroundColor:V1,outlineColor:V1,fill:V1,stroke:V1,borderColor:V1,borderTopColor:V1,borderRightColor:V1,borderBottomColor:V1,borderLeftColor:V1,borderWidth:E,borderTopWidth:E,borderRightWidth:E,borderBottomWidth:E,borderLeftWidth:E,borderRadius:E,radius:E,borderTopLeftRadius:E,borderTopRightRadius:E,borderBottomRightRadius:E,borderBottomLeftRadius:E,width:E,maxWidth:E,height:E,maxHeight:E,size:E,top:E,right:E,bottom:E,left:E,padding:E,paddingTop:E,paddingRight:E,paddingBottom:E,paddingLeft:E,margin:E,marginTop:E,marginRight:E,marginBottom:E,marginLeft:E,rotate:u2,rotateX:u2,rotateY:u2,rotateZ:u2,scale:j3,scaleX:j3,scaleY:j3,scaleZ:j3,skew:u2,skewX:u2,skewY:u2,distance:E,translateX:E,translateY:E,translateZ:E,x:E,y:E,z:E,perspective:E,transformPerspective:E,opacity:o3,originX:O5,originY:O5,originZ:E,zIndex:Z5,filter:j6,WebkitFilter:j6,fillOpacity:o3,strokeOpacity:o3,numOctaves:Z5},F8=c=>Y9[c],X9=(c,a)=>a&&typeof c=="number"&&a.transform?a.transform(c):c;function Mh(c,a){let e=F8(c);return e!==j6&&(e=A3),e.getAnimatableNone?e.getAnimatableNone(a):void 0}const Ch={linear:D9,easeIn:P8,easeInOut:_9,easeOut:_v,circIn:E9,circInOut:Ev,circOut:O9,backIn:T8,backInOut:Uv,backOut:Ov,anticipate:Iv,bounceIn:jv,bounceInOut:Zv,bounceOut:V4},K5=c=>{if(Array.isArray(c)){const[a,e,r,i]=c;return th(a,e,r,i)}else if(typeof c=="string")return Ch[c];return c},dh=c=>Array.isArray(c)&&typeof c[0]!="number",Y5=(c,a)=>c==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&A3.test(a)&&!a.startsWith("url("));function Lh(c){return Array.isArray(c.to)&&c.to[0]===null&&(c.to=[...c.to],c.to[0]=c.from),c}function gh({ease:c,times:a,delay:e,...r}){const i={...r};return a&&(i.offset=a),c&&(i.ease=dh(c)?c.map(K5):K5(c)),e&&(i.elapsed=-e),i}function bh(c,a,e){return Array.isArray(a.to)&&(c.duration||(c.duration=800)),Lh(a),xh(c)||(c={...c,...K9(e,a.to)}),{...a,...gh(c)}}function xh({delay:c,repeat:a,repeatType:e,repeatDelay:r,from:i,...s}){return!!Object.keys(s).length}function Nh(c,a){return c[a]||c.default||c}function Sh(c,a,e,r,i){const s=Nh(r,c);let n=s.from===null||s.from===void 0?a.get():s.from;const l=Y5(c,e);n==="none"&&l&&typeof e=="string"&&(n=Mh(c,e));const f=Y5(c,n);function o(z){const h={from:n,to:e,velocity:r.velocity?r.velocity:a.getVelocity(),onUpdate:u=>a.set(u)};return s.type==="inertia"||s.type==="decay"?rh({...h,...s}):I9({...bh(s,h,c),onUpdate:u=>{h.onUpdate(u),s.onUpdate&&s.onUpdate(u)},onComplete:()=>{r.onComplete&&r.onComplete(),i&&i(),z&&z()}})}function t(z){return a.set(e),r.onComplete&&r.onComplete(),i&&i(),z&&z(),{stop:()=>{}}}return!f||!l||s.type===!1?t:o}function yh(){const{motionValues:c,stop:a,get:e}=Hh();return{motionValues:c,stop:a,push:(i,s,n,l={},f)=>{const o=n[i],t=e(i,o,n);if(l&&l.immediate){t.set(s);return}const z=Sh(i,t,s,l,f);t.start(z)}}}function wh(c,a={},{motionValues:e,push:r,stop:i}=yh()){const s=I(a),n=C1(!1),l=s1(e,h=>{n.value=Object.values(h).filter(u=>u.isAnimating()).length>0},{immediate:!0,deep:!0}),f=h=>{if(!s||!s[h])throw new Error(`The variant ${h} does not exist.`);return s[h]},o=h=>(typeof h=="string"&&(h=f(h)),Promise.all(Object.entries(h).map(([u,g])=>{if(u!=="transition")return new Promise(y=>{r(u,g,c,h.transition||K9(u,h[u]),y)})}).filter(Boolean)));return{isAnimating:n,apply:o,set:h=>{const u=_6(h)?h:f(h);Object.entries(u).forEach(([g,y])=>{g!=="transition"&&r(g,y,c,{immediate:!0})})},stopTransitions:()=>{l(),i()},leave:async h=>{let u;if(s&&(s.leave&&(u=s.leave),!s.leave&&s.initial&&(u=s.initial)),!u){h();return}await o(u),h()}}}const B8=typeof window<"u",Ah=()=>B8&&window.onpointerdown===null,kh=()=>B8&&window.ontouchstart===null,Ph=()=>B8&&window.onmousedown===null;function Th({target:c,state:a,variants:e,apply:r}){const i=I(e),s=[],n=(...g)=>{const y=Xz.apply(null,g);return s.push(y),y},l=C1(!1),f=C1(!1),o=C1(!1),t=D1(()=>{let g=[];return i&&(i.hovered&&(g=[...g,...Object.keys(i.hovered)]),i.tapped&&(g=[...g,...Object.keys(i.tapped)]),i.focused&&(g=[...g,...Object.keys(i.focused)])),g}),z=D1(()=>{const g={};Object.assign(g,a.value),l.value&&i.hovered&&Object.assign(g,i.hovered),f.value&&i.tapped&&Object.assign(g,i.tapped),o.value&&i.focused&&Object.assign(g,i.focused);for(const y in g)t.value.includes(y)||delete g[y];return g});i.hovered&&(n(c,"mouseenter",()=>{l.value=!0}),n(c,"mouseleave",()=>{l.value=!1,f.value=!1}),n(c,"mouseout",()=>{l.value=!1,f.value=!1})),i.tapped&&(Ph()&&(n(c,"mousedown",()=>{f.value=!0}),n(c,"mouseup",()=>{f.value=!1})),Ah()&&(n(c,"pointerdown",()=>{f.value=!0}),n(c,"pointerup",()=>{f.value=!1})),kh()&&(n(c,"touchstart",()=>{f.value=!0}),n(c,"touchend",()=>{f.value=!1}))),i.focused&&(n(c,"focus",()=>{o.value=!0}),n(c,"blur",()=>{o.value=!1}));const h=s1(z,r);return{stop:()=>{s.forEach(g=>g()),h()}}}function Fh({set:c,target:a,variants:e,variant:r}){const i=I(e);return{stop:s1(()=>a,()=>{i&&(i.initial&&c("initial"),i.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}}function Bh({state:c,apply:a}){return{stop:s1(c,r=>{r&&a(r)},{immediate:!0})}}function qh({target:c,variants:a,variant:e}){const r=I(a);let i=S2;if(r&&(r.visible||r.visibleOnce)){const{stop:s}=Qz(c,([{isIntersecting:n}])=>{r.visible?n?e.value="visible":e.value="initial":r.visibleOnce&&(n?e.value!=="visibleOnce"&&(e.value="visibleOnce"):e.value||(e.value="initial"))});i=s}return{stop:i}}function Rh(c,a={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const e=C1([]);if(a.lifeCycleHooks){const{stop:i}=Fh(c);e.value.push(i)}if(a.syncVariants){const{stop:i}=Bh(c);e.value.push(i)}if(a.visibilityHooks){const{stop:i}=qh(c);e.value.push(i)}if(a.eventListeners){const{stop:i}=Th(c);e.value.push(i)}const r=()=>e.value.forEach(i=>i());return N8(r),{stop:r}}function Q9(c={}){const a=X2({...c}),e=C1({});return s1(a,()=>{const r={};for(const[i,s]of Object.entries(a)){const n=F8(i),l=X9(s,n);r[i]=l}e.value=r},{immediate:!0,deep:!0}),{state:a,style:e}}const Dh=["","X","Y","Z"],_h=["perspective","translate","scale","rotate","skew"],J9=["transformPerspective","x","y","z"];_h.forEach(c=>{Dh.forEach(a=>{const e=c+a;J9.push(e)})});const Eh=new Set(J9);function q8(c){return Eh.has(c)}const Oh=new Set(["originX","originY","originZ"]);function cc(c){return Oh.has(c)}function Uh(c){const a={},e={};return Object.entries(c).forEach(([r,i])=>{q8(r)||cc(r)?a[r]=i:e[r]=i}),{transform:a,style:e}}function Ih(c,a){let e,r;const{state:i,style:s}=Q9(),n=s1(()=>G2(c),o=>{if(o){r=o;for(const t of Object.keys(Y9))o.style[t]===null||o.style[t]===""||q8(t)||cc(t)||M1(i,t,o.style[t]);e&&Object.entries(e).forEach(([t,z])=>M1(o.style,t,z)),a&&a(i)}},{immediate:!0}),l=s1(s,o=>{if(!r){e=o;return}for(const t in o)M1(r.style,t,o[t])},{immediate:!0});return{style:i,stop:()=>{r=void 0,e=void 0,n(),l()}}}const $h={x:"translateX",y:"translateY",z:"translateZ"};function ac(c={},a=!0){const e=X2({...c}),r=C1("");return s1(e,i=>{let s="",n=!1;if(a&&(i.x||i.y||i.z)){const l=[i.x||0,i.y||0,i.z||0].map(E.transform).join(",");s+=`translate3d(${l}) `,n=!0}for(const[l,f]of Object.entries(i)){if(a&&(l==="x"||l==="y"||l==="z"))continue;const o=F8(l),t=X9(f,o);s+=`${$h[l]||l}(${t}) `}a&&!n&&(s+="translateZ(0px) "),r.value=s.trim()},{immediate:!0,deep:!0}),{state:e,transform:r}}function Wh(c){const a=c.trim().split(/\) |\)/);if(a.length===1)return{};const e=r=>r.endsWith("px")||r.endsWith("deg")?parseFloat(r):isNaN(Number(r))?Number(r):r;return a.reduce((r,i)=>{if(!i)return r;const[s,n]=i.split("("),f=n.split(",").map(t=>e(t.endsWith(")")?t.replace(")",""):t.trim())),o=f.length===1?f[0]:f;return{...r,[s]:o}},{})}function Gh(c,a){Object.entries(Wh(a)).forEach(([e,r])=>{r=parseFloat(r);const i=["x","y","z"];if(e==="translate3d"){if(r===0){i.forEach(s=>{M1(c,s,0)});return}r.forEach((s,n)=>{M1(c,i[n],s)});return}if(e==="translateX"){M1(c,"x",r);return}if(e==="translateY"){M1(c,"y",r);return}if(e==="translateZ"){M1(c,"z",r);return}M1(c,e,r)})}function jh(c,a){let e,r;const{state:i,transform:s}=ac(),n=s1(()=>G2(c),o=>{o&&(r=o,o.style.transform&&Gh(i,o.style.transform),e&&(o.style.transform=e),a&&a(i))},{immediate:!0}),l=s1(s,o=>{if(!r){e=o;return}r.style.transform=o},{immediate:!0});return{transform:i,stop:()=>{e=void 0,r=void 0,n(),l()}}}function Zh(c,a){const e=X2({}),r=z=>{Object.entries(z).forEach(([h,u])=>{M1(e,h,u)})},{style:i,stop:s}=Ih(c,r),{transform:n,stop:l}=jh(c,r),f=s1(e,z=>{Object.entries(z).forEach(([h,u])=>{const g=q8(h)?n:i;g[h]&&g[h]===u||M1(g,h,u)})},{immediate:!0,deep:!0}),o=s1(()=>G2(c),z=>{z&&a&&r(a)},{immediate:!0});return{motionProperties:e,style:i,transform:n,stop:()=>{s(),l(),f(),o()}}}function Kh(c={}){const a=I(c),e=C1();return{state:D1(()=>{if(e.value)return a[e.value]}),variant:e}}function Yh(c,a={},e){const{motionProperties:r,stop:i}=Zh(c),{variant:s,state:n}=Kh(a),l=wh(r,a),f={target:c,variant:s,variants:a,state:n,motionProperties:r,...l,stop:(t=!1)=>{}},{stop:o}=Rh(f,e);return f.stop=(t=!1)=>{const z=()=>{f.stopTransitions(),i(),o()};if(!t&&a.value&&a.value.leave){const h=s1(f.isAnimating,u=>{u||(h(),z())})}else z()},N8(()=>f.stop()),f}const Xh=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],Qh=(c,a)=>{const e=c.props?c.props:c.data&&c.data.attrs?c.data.attrs:{};e&&(e.variants&&_6(e.variants)&&(a.value={...a.value,...e.variants}),Xh.forEach(r=>{if(r==="delay"){if(e&&e[r]&&Kz(e[r])){const i=e[r];a&&a.value&&(a.value.enter&&(a.value.enter.transition||(a.value.enter.transition={}),a.value.enter.transition={...a.value.enter.transition,delay:i}),a.value.visible&&(a.value.visible.transition||(a.value.visible.transition={}),a.value.visible.transition={...a.value.visible.transition,delay:i}),a.value.visibleOnce&&(a.value.visibleOnce.transition||(a.value.visibleOnce.transition={}),a.value.visibleOnce.transition={...a.value.visibleOnce.transition,delay:i}))}return}r==="visible-once"&&(r="visibleOnce"),e&&e[r]&&_6(e[r])&&(a.value[r]=e[r])}))},M6=c=>{const a=(r,i,s)=>{const n=i.value&&typeof i.value=="string"?i.value:s.key;n&&u6[n]&&u6[n].stop();const l=C1(c||{});typeof i.value=="object"&&(l.value=i.value),Qh(s,l);const f=Yh(r,l);r.motionInstance=f,n&&M1(u6,n,f)},e=r=>{r.motionInstance&&r.motionInstance.stop()};return{created:a,unmounted:e,bind:a,unbind:e,getSSRProps(r,i){const{initial:s}=r.value||i.props||{};if(!s||Object.keys(s).length===0)return;const{transform:n,style:l}=Uh(s),{transform:f}=ac(n),{style:o}=Q9(l);return f.value&&(o.value.transform=f.value),{style:o.value}}}},Jh={initial:{opacity:0},enter:{opacity:1}},cH={initial:{opacity:0},visible:{opacity:1}},aH={initial:{opacity:0},visibleOnce:{opacity:1}},eH={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},rH={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},iH={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},sH={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},nH={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},lH={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},fH={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},oH={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},tH={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},mH={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},zH={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},vH={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},hH={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},HH={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},uH={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},pH={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},VH={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},MH={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},CH={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},dH={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},LH={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},gH={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},bH={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},xH={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},NH={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},SH={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},yH={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},X5={__proto__:null,fade:Jh,fadeVisible:cH,fadeVisibleOnce:aH,pop:eH,popVisible:rH,popVisibleOnce:iH,rollBottom:hH,rollLeft:sH,rollRight:fH,rollTop:mH,rollVisibleBottom:HH,rollVisibleLeft:nH,rollVisibleRight:oH,rollVisibleTop:zH,rollVisibleOnceBottom:uH,rollVisibleOnceLeft:lH,rollVisibleOnceRight:tH,rollVisibleOnceTop:vH,slideBottom:NH,slideLeft:pH,slideRight:CH,slideTop:gH,slideVisibleBottom:SH,slideVisibleLeft:VH,slideVisibleRight:dH,slideVisibleTop:bH,slideVisibleOnceBottom:yH,slideVisibleOnceLeft:MH,slideVisibleOnceRight:LH,slideVisibleOnceTop:xH};function wH(c){const a="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",e="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",r=new RegExp(a.split("").join("|"),"g");return c.toString().replace(/[A-Z]/g,i=>`-${i}`).toLowerCase().replace(/\s+/g,"-").replace(r,i=>e.charAt(a.indexOf(i))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const AH={install(c,a){if(c.directive("motion",M6()),!a||a&&!a.excludePresets)for(const e in X5){const r=X5[e];c.directive(`motion-${wH(e)}`,M6(r))}if(a&&a.directives)for(const e in a.directives){const r=a.directives[e];!r.initial&&__DEV__&&console.warn(`Your directive v-motion-${e} is missing initial variant!`),c.directive(`motion-${e}`,M6(r))}}},kH="/website_cv/assets/github-mark-367d5cb2-367d5cb2-367d5cb2-367d5cb2.png",PH="/website_cv/assets/LI-In-Bug-3c0149f2-3c0149f2-3c0149f2-3c0149f2.png",TH="/website_cv/assets/0318_163000223-0-7b186212-7b186212-7b186212.jpg";const ec=(c,a)=>{const e=c.__vccOpts||c;for(const[r,i]of a)e[r]=i;return e},FH=c=>(K7("data-v-31c46e45"),c=c(),Y7(),c),BH={class:"main"},qH=FH(()=>R("div",{class:"row"},[R("h1",null,"秉中的家")],-1)),RH={class:"container-fluid"},DH={class:"row"},_H={id:"imgbox",class:"col-4"},EH=["src"],OH={class:"row rowLink"},UH={class:"col-1 linkTo"},IH=["src"],$H=["href"],WH={class:"col-1 linkTo"},GH=["src"],jH=["href"],ZH=tz('<div id="dialogue" class="col-6 border-start" data-v-31c46e45><div data-v-31c46e45><p id="name" class="text-start" data-v-31c46e45>張秉中</p><p id="title" class="text-end" data-v-31c46e45>全端工程師</p></div><div class="text-body" data-v-31c46e45><p class="lh-base" data-v-31c46e45> 您好，我是張秉中，國高中就讀於菲律賓國際學校，而後回台灣就讀成功大學政治學系。畢業後出於個人興趣和規劃，開始學習全端工程師相關知識，期望能夠在這個領域發揮自己的才能和熱情。 </p><br data-v-31c46e45><p class="lh-base" data-v-31c46e45> 我是一位負責任、自我要求高的人，更是一個勇於學習新技術的人。在全端工程師訓練班上課期間，除了學習課堂上的內容之外，我利用課餘時間自學，例如，觀看哈佛大學的CS50課程、在HackerRank上進行演算法相關的練習，來彌補程式基礎，同時提高解決問題的能力。為了更深入了解網路應用開發，我主動學習了WebSocket、WebRTC等技術，實現專案的即時通訊功能，為專題開發提供更多可能性。我相信不斷學習新技術能夠讓我在全端工程師的角色中保持競爭力，並為團隊帶來更多價值。 </p><br data-v-31c46e45><p class="lh-base" data-v-31c46e45> 雖然我非本科系畢業，但過去我在成功大學政治系的學習過程中，培養了扎實的研究、分析和溝通能力，我也擔任過社團活動總召與幹部，這些經驗使我能夠從多個角度看待問題並提供全面的解決方案，我相信這些能力也能應用在全端工程師的職位上，並將有助於我與團隊成員合作。 </p><br data-v-31c46e45><p class="lh-base" data-v-31c46e45>我期待有機會加入貴公司，並將我所學與我的責任感、自我要求和學習精神相結合，為團隊帶來價值。</p></div></div>',1),KH={__name:"head",setup(c){const a=C1("https://github.com/BNNCP"),e=C1("https://www.linkedin.com/in/ben-chang-a58409177/");return(r,i)=>(W1(),G1("section",BH,[qH,R("div",RH,[R("div",DH,[R("div",_H,[R("img",{class:"",src:I(TH),alt:"???"},null,8,EH),R("div",OH,[R("div",UH,[R("img",{src:I(kH),alt:"github"},null,8,IH),R("a",{href:a.value,target:"_blank"},"Github",8,$H)]),R("div",WH,[R("img",{src:I(PH),alt:"github"},null,8,GH),R("a",{href:e.value,target:"_blank"},"LinkedIn",8,jH)])])]),ZH])])]))}},YH=ec(KH,[["__scopeId","data-v-31c46e45"]]),XH="/website_cv/assets/channels4_profile-017e4b9a.jpg",C6="/website_cv/assets/National_Cheng_Kung_University_logo.svg-d3111759.png";const U1=c=>(K7("data-v-61bf437f"),c=c(),Y7(),c),QH={class:"container-fluid"},JH={class:"title"},cu=U1(()=>R("h1",null,"就學經歷",-1)),au={class:"target"},eu=U1(()=>R("div",{class:"col m-2"},[R("h2",null,"Southville International School and Colleges")],-1)),ru=U1(()=>R("div",{class:"col m-2 text-break lh-lg text-wrap"},[R("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus repudiandae doloribus laborum, voluptatibus quae id, ipsa enim sequi vitae accusantium voluptatem quasi laudantium similique, aperiam quisquam in! Molestiae corrupti quis vitae earum alias sint cum perspiciatis doloremque atque sapiente in, officiis quasi et facilis autem, ab molestias soluta error nobis voluptatem repellat reprehenderit! Iste quam repellendus quas repudiandae velit aliquid quis maxime, odit explicabo numquam esse voluptatem eligendi accusantium voluptates tempore quod dignissimos! Perferendis hic voluptatibus dicta aliquam aperiam libero necessitatibus voluptates! Molestiae laudantium quam in accusantium beatae, labore adipisci asperiores totam quaerat error nobis dolorum. Fugit rem veritatis doloribus.")],-1)),iu=[eu,ru],su={class:"row"},nu=["src"],lu={class:"target"},fu=U1(()=>R("div",{class:"col m-2"},[R("h2",null,"國立成功大學")],-1)),ou=U1(()=>R("div",{class:"col m-2 text-break lh-lg text-wrap"},[R("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus repudiandae doloribus laborum, voluptatibus quae id, ipsa enim sequi vitae accusantium voluptatem quasi laudantium similique, aperiam quisquam in! Molestiae corrupti quis vitae earum alias sint cum perspiciatis doloremque atque sapiente in, officiis quasi et facilis autem, ab molestias soluta error nobis voluptatem repellat reprehenderit! Iste quam repellendus quas repudiandae velit aliquid quis maxime, odit explicabo numquam esse voluptatem eligendi accusantium voluptates tempore quod dignissimos! Perferendis hic voluptatibus dicta aliquam aperiam libero necessitatibus voluptates! Molestiae laudantium quam in accusantium beatae, labore adipisci asperiores totam quaerat error nobis dolorum. Fugit rem veritatis doloribus.")],-1)),tu=[fu,ou],mu={class:"row"},zu=["src"],vu={class:"title"},hu=U1(()=>R("h1",null,"作品專案",-1)),Hu={class:"target"},uu=U1(()=>R("div",{class:"col m-2"},[R("h2")],-1)),pu=U1(()=>R("div",{class:"col m-2 text-break lh-lg text-wrap"},[R("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus repudiandae doloribus laborum, voluptatibus quae id, ipsa enim sequi vitae accusantium voluptatem quasi laudantium similique, aperiam quisquam in! Molestiae corrupti quis vitae earum alias sint cum perspiciatis doloremque atque sapiente in, officiis quasi et facilis autem, ab molestias soluta error nobis voluptatem repellat reprehenderit! Iste quam repellendus quas repudiandae velit aliquid quis maxime, odit explicabo numquam esse voluptatem eligendi accusantium voluptates tempore quod dignissimos! Perferendis hic voluptatibus dicta aliquam aperiam libero necessitatibus voluptates! Molestiae laudantium quam in accusantium beatae, labore adipisci asperiores totam quaerat error nobis dolorum. Fugit rem veritatis doloribus.")],-1)),Vu=[uu,pu],Mu={class:"row"},Cu=["src"],du={class:"target"},Lu=U1(()=>R("div",{class:"col m-2"},[R("h2")],-1)),gu=U1(()=>R("div",{class:"col m-2 text-break lh-lg text-wrap"},[R("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus repudiandae doloribus laborum, voluptatibus quae id, ipsa enim sequi vitae accusantium voluptatem quasi laudantium similique, aperiam quisquam in! Molestiae corrupti quis vitae earum alias sint cum perspiciatis doloremque atque sapiente in, officiis quasi et facilis autem, ab molestias soluta error nobis voluptatem repellat reprehenderit! Iste quam repellendus quas repudiandae velit aliquid quis maxime, odit explicabo numquam esse voluptatem eligendi accusantium voluptates tempore quod dignissimos! Perferendis hic voluptatibus dicta aliquam aperiam libero necessitatibus voluptates! Molestiae laudantium quam in accusantium beatae, labore adipisci asperiores totam quaerat error nobis dolorum. Fugit rem veritatis doloribus.")],-1)),bu=[Lu,gu],xu={class:"row"},Nu=["src"],Su={__name:"body",setup(c){var a=C1(["bg-primary","bg-success","bg-danger","bg-warning","bg-info"]),e=C1();function r(){setInterval(()=>{let i=Math.ceil(Math.random()*(a.value.length-1));e.value=a.value[i]},2e3)}return r(),(i,s)=>{const n=_m("font-awesome-icon"),l=z5("motion-slide-visible-once-top"),f=z5("motion-slide-visible-once-left");return W1(),G1("div",QH,[F2((W1(),G1("section",JH,[v1(n,{class:"fa-2x",icon:["fas","school"],flip:""}),cu])),[[l]]),F2((W1(),G1("div",au,[R("div",{class:C2(["row bg-primary rounded-3",{"bg-primary":I(e)=="bg-primary","bg-success":I(e)=="bg-success","bg-danger":I(e)=="bg-danger","bg-warning":I(e)=="bg-warning","bg-info":I(e)=="bg-info"}]),style:{"--bs-bg-opacity":".1"}},iu,2),R("div",su,[R("img",{class:"logo img-fluid",src:I(XH),alt:"Southville International School and Colleges"},null,8,nu)])])),[[f]]),F2((W1(),G1("div",lu,[R("div",{class:C2(["row bg-primary rounded-3",{"bg-primary":I(e)=="bg-primary","bg-success":I(e)=="bg-success","bg-danger":I(e)=="bg-danger","bg-warning":I(e)=="bg-warning","bg-info":I(e)=="bg-info"}]),style:{"--bs-bg-opacity":".1"}},tu,2),R("div",mu,[R("img",{class:"logo img-fluid",src:I(C6),alt:"National Cheng Kung University"},null,8,zu)])])),[[f]]),F2((W1(),G1("section",vu,[v1(n,{class:"fa-2x",icon:"fa-solid fa-star",flip:""}),hu])),[[l]]),F2((W1(),G1("div",Hu,[R("div",{class:C2(["row bg-primary rounded-3",{"bg-primary":I(e)=="bg-primary","bg-success":I(e)=="bg-success","bg-danger":I(e)=="bg-danger","bg-warning":I(e)=="bg-warning","bg-info":I(e)=="bg-info"}]),style:{"--bs-bg-opacity":".1"}},Vu,2),R("div",Mu,[R("img",{class:"logo img-fluid",src:I(C6),alt:"National Cheng Kung University"},null,8,Cu)])])),[[f]]),F2((W1(),G1("div",du,[R("div",{class:C2(["row bg-primary rounded-3",{"bg-primary":I(e)=="bg-primary","bg-success":I(e)=="bg-success","bg-danger":I(e)=="bg-danger","bg-warning":I(e)=="bg-warning","bg-info":I(e)=="bg-info"}]),style:{"--bs-bg-opacity":".1"}},bu,2),R("div",xu,[R("img",{class:"logo img-fluid",src:I(C6),alt:"National Cheng Kung University"},null,8,Nu)])])),[[f]])])}}},yu=ec(Su,[["__scopeId","data-v-61bf437f"]]),wu={__name:"App",setup(c){return(a,e)=>(W1(),G1(q1,null,[v1(YH),v1(yu)],64))}};function Q5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}function A(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?Q5(Object(e),!0).forEach(function(r){n1(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):Q5(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function C4(c){"@babel/helpers - typeof";return C4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},C4(c)}function Au(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function J5(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function ku(c,a,e){return a&&J5(c.prototype,a),e&&J5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function n1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function R8(c,a){return Tu(c)||Bu(c,a)||rc(c,a)||Ru()}function k3(c){return Pu(c)||Fu(c)||rc(c)||qu()}function Pu(c){if(Array.isArray(c))return Z6(c)}function Tu(c){if(Array.isArray(c))return c}function Fu(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Bu(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],i=!0,s=!1,n,l;try{for(e=e.call(c);!(i=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));i=!0);}catch(f){s=!0,l=f}finally{try{!i&&e.return!=null&&e.return()}finally{if(s)throw l}}return r}}function rc(c,a){if(c){if(typeof c=="string")return Z6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Z6(c,a)}}function Z6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function qu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ru(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c7=function(){},D8={},ic={},sc=null,nc={mark:c7,measure:c7};try{typeof window<"u"&&(D8=window),typeof document<"u"&&(ic=document),typeof MutationObserver<"u"&&(sc=MutationObserver),typeof performance<"u"&&(nc=performance)}catch{}var Du=D8.navigator||{},a7=Du.userAgent,e7=a7===void 0?"":a7,l2=D8,J=ic,r7=sc,K3=nc;l2.document;var J1=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",lc=~e7.indexOf("MSIE")||~e7.indexOf("Trident/"),Y3,X3,Q3,J3,c4,K1="___FONT_AWESOME___",K6=16,fc="fa",oc="svg-inline--fa",y2="data-fa-i2svg",Y6="data-fa-pseudo-element",_u="data-fa-pseudo-element-pending",_8="data-prefix",E8="data-icon",i7="fontawesome-i2svg",Eu="async",Ou=["HTML","HEAD","STYLE","SCRIPT"],tc=function(){try{return!0}catch{return!1}}(),Q="classic",a1="sharp",O8=[Q,a1];function P3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[Q]}})}var L3=P3((Y3={},n1(Y3,Q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),n1(Y3,a1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Y3)),g3=P3((X3={},n1(X3,Q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),n1(X3,a1,{solid:"fass",regular:"fasr",light:"fasl"}),X3)),b3=P3((Q3={},n1(Q3,Q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),n1(Q3,a1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Q3)),Uu=P3((J3={},n1(J3,Q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),n1(J3,a1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),J3)),Iu=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,mc="fa-layers-text",$u=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Wu=P3((c4={},n1(c4,Q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),n1(c4,a1,{900:"fass",400:"fasr",300:"fasl"}),c4)),zc=[1,2,3,4,5,6,7,8,9,10],Gu=zc.concat([11,12,13,14,15,16,17,18,19,20]),ju=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],g2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},x3=new Set;Object.keys(g3[Q]).map(x3.add.bind(x3));Object.keys(g3[a1]).map(x3.add.bind(x3));var Zu=[].concat(O8,k3(x3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",g2.GROUP,g2.SWAP_OPACITY,g2.PRIMARY,g2.SECONDARY]).concat(zc.map(function(c){return"".concat(c,"x")})).concat(Gu.map(function(c){return"w-".concat(c)})),m3=l2.FontAwesomeConfig||{};function Ku(c){var a=J.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Yu(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(J&&typeof J.querySelector=="function"){var Xu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Xu.forEach(function(c){var a=R8(c,2),e=a[0],r=a[1],i=Yu(Ku(e));i!=null&&(m3[r]=i)})}var vc={styleDefault:"solid",familyDefault:"classic",cssPrefix:fc,replacementClass:oc,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};m3.familyPrefix&&(m3.cssPrefix=m3.familyPrefix);var j2=A(A({},vc),m3);j2.autoReplaceSvg||(j2.observeMutations=!1);var P={};Object.keys(vc).forEach(function(c){Object.defineProperty(P,c,{enumerable:!0,set:function(e){j2[c]=e,z3.forEach(function(r){return r(P)})},get:function(){return j2[c]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(a){j2.cssPrefix=a,z3.forEach(function(e){return e(P)})},get:function(){return j2.cssPrefix}});l2.FontAwesomeConfig=P;var z3=[];function Qu(c){return z3.push(c),function(){z3.splice(z3.indexOf(c),1)}}var a2=K6,E1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ju(c){if(!(!c||!J1)){var a=J.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=J.head.childNodes,r=null,i=e.length-1;i>-1;i--){var s=e[i],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=s)}return J.head.insertBefore(a,r),c}}var cp="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function N3(){for(var c=12,a="";c-- >0;)a+=cp[Math.random()*62|0];return a}function Q2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function U8(c){return c.classList?Q2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function hc(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ap(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(hc(c[e]),'" ')},"").trim()}function D4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function I8(c){return c.size!==E1.size||c.x!==E1.x||c.y!==E1.y||c.rotate!==E1.rotate||c.flipX||c.flipY}function ep(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,i={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(s," ").concat(n," ").concat(l)},o={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:f,path:o}}function rp(c){var a=c.transform,e=c.width,r=e===void 0?K6:e,i=c.height,s=i===void 0?K6:i,n=c.startCentered,l=n===void 0?!1:n,f="";return l&&lc?f+="translate(".concat(a.x/a2-r/2,"em, ").concat(a.y/a2-s/2,"em) "):l?f+="translate(calc(-50% + ".concat(a.x/a2,"em), calc(-50% + ").concat(a.y/a2,"em)) "):f+="translate(".concat(a.x/a2,"em, ").concat(a.y/a2,"em) "),f+="scale(".concat(a.size/a2*(a.flipX?-1:1),", ").concat(a.size/a2*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var ip=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Hc(){var c=fc,a=oc,e=P.cssPrefix,r=P.replacementClass,i=ip;if(e!==c||r!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(l,".".concat(r))}return i}var s7=!1;function d6(){P.autoAddCss&&!s7&&(Ju(Hc()),s7=!0)}var sp={mixout:function(){return{dom:{css:Hc,insertCss:d6}}},hooks:function(){return{beforeDOMElementCreation:function(){d6()},beforeI2svg:function(){d6()}}}},Y1=l2||{};Y1[K1]||(Y1[K1]={});Y1[K1].styles||(Y1[K1].styles={});Y1[K1].hooks||(Y1[K1].hooks={});Y1[K1].shims||(Y1[K1].shims=[]);var A1=Y1[K1],uc=[],np=function c(){J.removeEventListener("DOMContentLoaded",c),d4=1,uc.map(function(a){return a()})},d4=!1;J1&&(d4=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),d4||J.addEventListener("DOMContentLoaded",np));function lp(c){J1&&(d4?setTimeout(c,0):uc.push(c))}function T3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?hc(c):"<".concat(a," ").concat(ap(r),">").concat(s.map(T3).join(""),"</").concat(a,">")}function n7(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var fp=function(a,e){return function(r,i,s,n){return a.call(e,r,i,s,n)}},L6=function(a,e,r,i){var s=Object.keys(a),n=s.length,l=i!==void 0?fp(e,i):e,f,o,t;for(r===void 0?(f=1,t=a[s[0]]):(f=0,t=r);f<n;f++)o=s[f],t=l(t,a[o],o,a);return t};function op(c){for(var a=[],e=0,r=c.length;e<r;){var i=c.charCodeAt(e++);if(i>=55296&&i<=56319&&e<r){var s=c.charCodeAt(e++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),e--)}else a.push(i)}return a}function X6(c){var a=op(c);return a.length===1?a[0].toString(16):null}function tp(c,a){var e=c.length,r=c.charCodeAt(a),i;return r>=55296&&r<=56319&&e>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function l7(c){return Object.keys(c).reduce(function(a,e){var r=c[e],i=!!r.icon;return i?a[r.iconName]=r.icon:a[e]=r,a},{})}function Q6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,i=r===void 0?!1:r,s=l7(a);typeof A1.hooks.addPack=="function"&&!i?A1.hooks.addPack(c,l7(a)):A1.styles[c]=A(A({},A1.styles[c]||{}),s),c==="fas"&&Q6("fa",a)}var a4,e4,r4,q2=A1.styles,mp=A1.shims,zp=(a4={},n1(a4,Q,Object.values(b3[Q])),n1(a4,a1,Object.values(b3[a1])),a4),$8=null,pc={},Vc={},Mc={},Cc={},dc={},vp=(e4={},n1(e4,Q,Object.keys(L3[Q])),n1(e4,a1,Object.keys(L3[a1])),e4);function hp(c){return~Zu.indexOf(c)}function Hp(c,a){var e=a.split("-"),r=e[0],i=e.slice(1).join("-");return r===c&&i!==""&&!hp(i)?i:null}var Lc=function(){var a=function(s){return L6(q2,function(n,l,f){return n[f]=L6(l,s,{}),n},{})};pc=a(function(i,s,n){if(s[3]&&(i[s[3]]=n),s[2]){var l=s[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){i[f.toString(16)]=n})}return i}),Vc=a(function(i,s,n){if(i[n]=n,s[2]){var l=s[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){i[f]=n})}return i}),dc=a(function(i,s,n){var l=s[2];return i[n]=n,l.forEach(function(f){i[f]=n}),i});var e="far"in q2||P.autoFetchSvg,r=L6(mp,function(i,s){var n=s[0],l=s[1],f=s[2];return l==="far"&&!e&&(l="fas"),typeof n=="string"&&(i.names[n]={prefix:l,iconName:f}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:l,iconName:f}),i},{names:{},unicodes:{}});Mc=r.names,Cc=r.unicodes,$8=_4(P.styleDefault,{family:P.familyDefault})};Qu(function(c){$8=_4(c.styleDefault,{family:P.familyDefault})});Lc();function W8(c,a){return(pc[c]||{})[a]}function up(c,a){return(Vc[c]||{})[a]}function b2(c,a){return(dc[c]||{})[a]}function gc(c){return Mc[c]||{prefix:null,iconName:null}}function pp(c){var a=Cc[c],e=W8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function f2(){return $8}var G8=function(){return{prefix:null,iconName:null,rest:[]}};function _4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?Q:e,i=L3[r][c],s=g3[r][c]||g3[r][i],n=c in A1.styles?c:null;return s||n||null}var f7=(r4={},n1(r4,Q,Object.keys(b3[Q])),n1(r4,a1,Object.keys(b3[a1])),r4);function E4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,i=r===void 0?!1:r,s=(a={},n1(a,Q,"".concat(P.cssPrefix,"-").concat(Q)),n1(a,a1,"".concat(P.cssPrefix,"-").concat(a1)),a),n=null,l=Q;(c.includes(s[Q])||c.some(function(o){return f7[Q].includes(o)}))&&(l=Q),(c.includes(s[a1])||c.some(function(o){return f7[a1].includes(o)}))&&(l=a1);var f=c.reduce(function(o,t){var z=Hp(P.cssPrefix,t);if(q2[t]?(t=zp[l].includes(t)?Uu[l][t]:t,n=t,o.prefix=t):vp[l].indexOf(t)>-1?(n=t,o.prefix=_4(t,{family:l})):z?o.iconName=z:t!==P.replacementClass&&t!==s[Q]&&t!==s[a1]&&o.rest.push(t),!i&&o.prefix&&o.iconName){var h=n==="fa"?gc(o.iconName):{},u=b2(o.prefix,o.iconName);h.prefix&&(n=null),o.iconName=h.iconName||u||o.iconName,o.prefix=h.prefix||o.prefix,o.prefix==="far"&&!q2.far&&q2.fas&&!P.autoFetchSvg&&(o.prefix="fas")}return o},G8());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===a1&&(q2.fass||P.autoFetchSvg)&&(f.prefix="fass",f.iconName=b2(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||n==="fa")&&(f.prefix=f2()||"fas"),f}var Vp=function(){function c(){Au(this,c),this.definitions={}}return ku(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(l){e.definitions[l]=A(A({},e.definitions[l]||{}),n[l]),Q6(l,n[l]);var f=b3[Q][l];f&&Q6(f,n[l]),Lc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var n=i[s],l=n.prefix,f=n.iconName,o=n.icon,t=o[2];e[l]||(e[l]={}),t.length>0&&t.forEach(function(z){typeof z=="string"&&(e[l][z]=o)}),e[l][f]=o}),e}}]),c}(),o7=[],R2={},U2={},Mp=Object.keys(U2);function Cp(c,a){var e=a.mixoutsTo;return o7=c,R2={},Object.keys(U2).forEach(function(r){Mp.indexOf(r)===-1&&delete U2[r]}),o7.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(e[n]=i[n]),C4(i[n])==="object"&&Object.keys(i[n]).forEach(function(l){e[n]||(e[n]={}),e[n][l]=i[n][l]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(n){R2[n]||(R2[n]=[]),R2[n].push(s[n])})}r.provides&&r.provides(U2)}),e}function J6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var s=R2[c]||[];return s.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function w2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var i=R2[c]||[];i.forEach(function(s){s.apply(null,e)})}function X1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return U2[c]?U2[c].apply(null,a):void 0}function c8(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||f2();if(a)return a=b2(e,a)||a,n7(bc.definitions,e,a)||n7(A1.styles,e,a)}var bc=new Vp,dp=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,w2("noAuto")},Lp={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return J1?(w2("beforeI2svg",a),X1("pseudoElements2svg",a),X1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,lp(function(){bp({autoReplaceSvgRoot:e}),w2("watch",a)})}},gp={icon:function(a){if(a===null)return null;if(C4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:b2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=_4(a[0]);return{prefix:r,iconName:b2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(P.cssPrefix,"-"))>-1||a.match(Iu))){var i=E4(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||f2(),iconName:b2(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=f2();return{prefix:s,iconName:b2(s,a)||a}}}},x1={noAuto:dp,config:P,dom:Lp,parse:gp,library:bc,findIconDefinition:c8,toHtml:T3},bp=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?J:e;(Object.keys(A1.styles).length>0||P.autoFetchSvg)&&J1&&P.autoReplaceSvg&&x1.dom.i2svg({node:r})};function O4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return T3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(J1){var r=J.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function xp(c){var a=c.children,e=c.main,r=c.mask,i=c.attributes,s=c.styles,n=c.transform;if(I8(n)&&e.found&&!r.found){var l=e.width,f=e.height,o={x:l/f/2,y:.5};i.style=D4(A(A({},s),{},{"transform-origin":"".concat(o.x+n.x/16,"em ").concat(o.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function Np(c){var a=c.prefix,e=c.iconName,r=c.children,i=c.attributes,s=c.symbol,n=s===!0?"".concat(a,"-").concat(P.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},i),{},{id:n}),children:r}]}]}function j8(c){var a=c.icons,e=a.main,r=a.mask,i=c.prefix,s=c.iconName,n=c.transform,l=c.symbol,f=c.title,o=c.maskId,t=c.titleId,z=c.extra,h=c.watchable,u=h===void 0?!1:h,g=r.found?r:e,y=g.width,q=g.height,C=i==="fak",d=[P.replacementClass,s?"".concat(P.cssPrefix,"-").concat(s):""].filter(function(e1){return z.classes.indexOf(e1)===-1}).filter(function(e1){return e1!==""||!!e1}).concat(z.classes).join(" "),b={children:[],attributes:A(A({},z.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(q)})},L=C&&!~z.classes.indexOf("fa-fw")?{width:"".concat(y/q*16*.0625,"em")}:{};u&&(b.attributes[y2]=""),f&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(t||N3())},children:[f]}),delete b.attributes.title);var T=A(A({},b),{},{prefix:i,iconName:s,main:e,mask:r,maskId:o,transform:n,symbol:l,styles:A(A({},L),z.styles)}),W=r.found&&e.found?X1("generateAbstractMask",T)||{children:[],attributes:{}}:X1("generateAbstractIcon",T)||{children:[],attributes:{}},Z=W.children,t1=W.attributes;return T.children=Z,T.attributes=t1,l?Np(T):xp(T)}function t7(c){var a=c.content,e=c.width,r=c.height,i=c.transform,s=c.title,n=c.extra,l=c.watchable,f=l===void 0?!1:l,o=A(A(A({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});f&&(o[y2]="");var t=A({},n.styles);I8(i)&&(t.transform=rp({transform:i,startCentered:!0,width:e,height:r}),t["-webkit-transform"]=t.transform);var z=D4(t);z.length>0&&(o.style=z);var h=[];return h.push({tag:"span",attributes:o,children:[a]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function Sp(c){var a=c.content,e=c.title,r=c.extra,i=A(A(A({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),s=D4(r.styles);s.length>0&&(i.style=s);var n=[];return n.push({tag:"span",attributes:i,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var g6=A1.styles;function a8(c){var a=c[0],e=c[1],r=c.slice(4),i=R8(r,1),s=i[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(g2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(g2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(g2.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:e,icon:n}}var yp={found:!1,width:512,height:512};function wp(c,a){!tc&&!P.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function e8(c,a){var e=a;return a==="fa"&&P.styleDefault!==null&&(a=f2()),new Promise(function(r,i){if(X1("missingIconAbstract"),e==="fa"){var s=gc(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&g6[a]&&g6[a][c]){var n=g6[a][c];return r(a8(n))}wp(c,a),r(A(A({},yp),{},{icon:P.showMissingIcons&&c?X1("missingIconAbstract")||{}:{}}))})}var m7=function(){},r8=P.measurePerformance&&K3&&K3.mark&&K3.measure?K3:{mark:m7,measure:m7},i3='FA "6.4.0"',Ap=function(a){return r8.mark("".concat(i3," ").concat(a," begins")),function(){return xc(a)}},xc=function(a){r8.mark("".concat(i3," ").concat(a," ends")),r8.measure("".concat(i3," ").concat(a),"".concat(i3," ").concat(a," begins"),"".concat(i3," ").concat(a," ends"))},Z8={begin:Ap,end:xc},m4=function(){};function z7(c){var a=c.getAttribute?c.getAttribute(y2):null;return typeof a=="string"}function kp(c){var a=c.getAttribute?c.getAttribute(_8):null,e=c.getAttribute?c.getAttribute(E8):null;return a&&e}function Pp(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(P.replacementClass)}function Tp(){if(P.autoReplaceSvg===!0)return z4.replace;var c=z4[P.autoReplaceSvg];return c||z4.replace}function Fp(c){return J.createElementNS("http://www.w3.org/2000/svg",c)}function Bp(c){return J.createElement(c)}function Nc(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?Fp:Bp:e;if(typeof c=="string")return J.createTextNode(c);var i=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){i.setAttribute(n,c.attributes[n])});var s=c.children||[];return s.forEach(function(n){i.appendChild(Nc(n,{ceFn:r}))}),i}function qp(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var z4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(i){e.parentNode.insertBefore(Nc(i),e)}),e.getAttribute(y2)===null&&P.keepOriginalSource){var r=J.createComment(qp(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~U8(e).indexOf(P.replacementClass))return z4.replace(a);var i=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(l,f){return f===P.replacementClass||f.match(i)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var n=r.map(function(l){return T3(l)}).join(`
`);e.setAttribute(y2,""),e.innerHTML=n}};function v7(c){c()}function Sc(c,a){var e=typeof a=="function"?a:m4;if(c.length===0)e();else{var r=v7;P.mutateApproach===Eu&&(r=l2.requestAnimationFrame||v7),r(function(){var i=Tp(),s=Z8.begin("mutate");c.map(i),s(),e()})}}var K8=!1;function yc(){K8=!0}function i8(){K8=!1}var L4=null;function h7(c){if(r7&&P.observeMutations){var a=c.treeCallback,e=a===void 0?m4:a,r=c.nodeCallback,i=r===void 0?m4:r,s=c.pseudoElementsCallback,n=s===void 0?m4:s,l=c.observeMutationsRoot,f=l===void 0?J:l;L4=new r7(function(o){if(!K8){var t=f2();Q2(o).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!z7(z.addedNodes[0])&&(P.searchPseudoElements&&n(z.target),e(z.target)),z.type==="attributes"&&z.target.parentNode&&P.searchPseudoElements&&n(z.target.parentNode),z.type==="attributes"&&z7(z.target)&&~ju.indexOf(z.attributeName))if(z.attributeName==="class"&&kp(z.target)){var h=E4(U8(z.target)),u=h.prefix,g=h.iconName;z.target.setAttribute(_8,u||t),g&&z.target.setAttribute(E8,g)}else Pp(z.target)&&i(z.target)})}}),J1&&L4.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Rp(){L4&&L4.disconnect()}function Dp(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,i){var s=i.split(":"),n=s[0],l=s.slice(1);return n&&l.length>0&&(r[n]=l.join(":").trim()),r},{})),e}function _p(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",i=E4(U8(c));return i.prefix||(i.prefix=f2()),a&&e&&(i.prefix=a,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=up(i.prefix,c.innerText)||W8(i.prefix,X6(c.innerText))),!i.iconName&&P.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function Ep(c){var a=Q2(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return P.autoA11y&&(e?a["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||N3()):(a["aria-hidden"]="true",a.focusable="false")),a}function Op(){return{iconName:null,title:null,titleId:null,prefix:null,transform:E1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function H7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=_p(c),r=e.iconName,i=e.prefix,s=e.rest,n=Ep(c),l=J6("parseNodeAttributes",{},c),f=a.styleParser?Dp(c):[];return A({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:E1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:f,attributes:n}},l)}var Up=A1.styles;function wc(c){var a=P.autoReplaceSvg==="nest"?H7(c,{styleParser:!1}):H7(c);return~a.extra.classes.indexOf(mc)?X1("generateLayersText",c,a):X1("generateSvgReplacementMutation",c,a)}var o2=new Set;O8.map(function(c){o2.add("fa-".concat(c))});Object.keys(L3[Q]).map(o2.add.bind(o2));Object.keys(L3[a1]).map(o2.add.bind(o2));o2=k3(o2);function u7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!J1)return Promise.resolve();var e=J.documentElement.classList,r=function(z){return e.add("".concat(i7,"-").concat(z))},i=function(z){return e.remove("".concat(i7,"-").concat(z))},s=P.autoFetchSvg?o2:O8.map(function(t){return"fa-".concat(t)}).concat(Object.keys(Up));s.includes("fa")||s.push("fa");var n=[".".concat(mc,":not([").concat(y2,"])")].concat(s.map(function(t){return".".concat(t,":not([").concat(y2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var l=[];try{l=Q2(c.querySelectorAll(n))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var f=Z8.begin("onTree"),o=l.reduce(function(t,z){try{var h=wc(z);h&&t.push(h)}catch(u){tc||u.name==="MissingIcon"&&console.error(u)}return t},[]);return new Promise(function(t,z){Promise.all(o).then(function(h){Sc(h,function(){r("active"),r("complete"),i("pending"),typeof a=="function"&&a(),f(),t()})}).catch(function(h){f(),z(h)})})}function Ip(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;wc(c).then(function(e){e&&Sc([e],a)})}function $p(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:c8(a||{}),i=e.mask;return i&&(i=(i||{}).icon?i:c8(i||{})),c(r,A(A({},e),{},{mask:i}))}}var Wp=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?E1:r,s=e.symbol,n=s===void 0?!1:s,l=e.mask,f=l===void 0?null:l,o=e.maskId,t=o===void 0?null:o,z=e.title,h=z===void 0?null:z,u=e.titleId,g=u===void 0?null:u,y=e.classes,q=y===void 0?[]:y,C=e.attributes,d=C===void 0?{}:C,b=e.styles,L=b===void 0?{}:b;if(a){var T=a.prefix,W=a.iconName,Z=a.icon;return O4(A({type:"icon"},a),function(){return w2("beforeDOMElementCreation",{iconDefinition:a,params:e}),P.autoA11y&&(h?d["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(g||N3()):(d["aria-hidden"]="true",d.focusable="false")),j8({icons:{main:a8(Z),mask:f?a8(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:W,transform:A(A({},E1),i),symbol:n,title:h,maskId:t,titleId:g,extra:{attributes:d,styles:L,classes:q}})})}},Gp={mixout:function(){return{icon:$p(Wp)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=u7,e.nodeCallback=Ip,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,i=r===void 0?J:r,s=e.callback,n=s===void 0?function(){}:s;return u7(i,n)},a.generateSvgReplacementMutation=function(e,r){var i=r.iconName,s=r.title,n=r.titleId,l=r.prefix,f=r.transform,o=r.symbol,t=r.mask,z=r.maskId,h=r.extra;return new Promise(function(u,g){Promise.all([e8(i,l),t.iconName?e8(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var q=R8(y,2),C=q[0],d=q[1];u([e,j8({icons:{main:C,mask:d},prefix:l,iconName:i,transform:f,symbol:o,maskId:z,title:s,titleId:n,extra:h,watchable:!0})])}).catch(g)})},a.generateAbstractIcon=function(e){var r=e.children,i=e.attributes,s=e.main,n=e.transform,l=e.styles,f=D4(l);f.length>0&&(i.style=f);var o;return I8(n)&&(o=X1("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),r.push(o||s.icon),{children:r,attributes:i}}}},jp={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return O4({type:"layer"},function(){w2("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(l){Array.isArray(l)?l.map(function(f){n=n.concat(f.abstract)}):n=n.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(k3(s)).join(" ")},children:n}]})}}}},Zp={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,n=r.classes,l=n===void 0?[]:n,f=r.attributes,o=f===void 0?{}:f,t=r.styles,z=t===void 0?{}:t;return O4({type:"counter",content:e},function(){return w2("beforeDOMElementCreation",{content:e,params:r}),Sp({content:e.toString(),title:s,extra:{attributes:o,styles:z,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(k3(l))}})})}}}},Kp={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?E1:i,n=r.title,l=n===void 0?null:n,f=r.classes,o=f===void 0?[]:f,t=r.attributes,z=t===void 0?{}:t,h=r.styles,u=h===void 0?{}:h;return O4({type:"text",content:e},function(){return w2("beforeDOMElementCreation",{content:e,params:r}),t7({content:e,transform:A(A({},E1),s),title:l,extra:{attributes:z,styles:u,classes:["".concat(P.cssPrefix,"-layers-text")].concat(k3(o))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var i=r.title,s=r.transform,n=r.extra,l=null,f=null;if(lc){var o=parseInt(getComputedStyle(e).fontSize,10),t=e.getBoundingClientRect();l=t.width/o,f=t.height/o}return P.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,t7({content:e.innerHTML,width:l,height:f,transform:s,title:i,extra:n,watchable:!0})])}}},Yp=new RegExp('"',"ug"),p7=[1105920,1112319];function Xp(c){var a=c.replace(Yp,""),e=tp(a,0),r=e>=p7[0]&&e<=p7[1],i=a.length===2?a[0]===a[1]:!1;return{value:X6(i?a[0]:a),isSecondary:r||i}}function V7(c,a){var e="".concat(_u).concat(a.replace(":","-"));return new Promise(function(r,i){if(c.getAttribute(e)!==null)return r();var s=Q2(c.children),n=s.filter(function(Z){return Z.getAttribute(Y6)===a})[0],l=l2.getComputedStyle(c,a),f=l.getPropertyValue("font-family").match($u),o=l.getPropertyValue("font-weight"),t=l.getPropertyValue("content");if(n&&!f)return c.removeChild(n),r();if(f&&t!=="none"&&t!==""){var z=l.getPropertyValue("content"),h=~["Sharp"].indexOf(f[2])?a1:Q,u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?g3[h][f[2].toLowerCase()]:Wu[h][o],g=Xp(z),y=g.value,q=g.isSecondary,C=f[0].startsWith("FontAwesome"),d=W8(u,y),b=d;if(C){var L=pp(y);L.iconName&&L.prefix&&(d=L.iconName,u=L.prefix)}if(d&&!q&&(!n||n.getAttribute(_8)!==u||n.getAttribute(E8)!==b)){c.setAttribute(e,b),n&&c.removeChild(n);var T=Op(),W=T.extra;W.attributes[Y6]=a,e8(d,u).then(function(Z){var t1=j8(A(A({},T),{},{icons:{main:Z,mask:G8()},prefix:u,iconName:b,extra:W,watchable:!0})),e1=J.createElement("svg");a==="::before"?c.insertBefore(e1,c.firstChild):c.appendChild(e1),e1.outerHTML=t1.map(function(N1){return T3(N1)}).join(`