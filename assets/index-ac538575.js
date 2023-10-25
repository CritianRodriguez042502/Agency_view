function gR(n,r){for(var l=0;l<r.length;l++){const d=r[l];if(typeof d!="string"&&!Array.isArray(d)){for(const h in d)if(h!=="default"&&!(h in n)){const p=Object.getOwnPropertyDescriptor(d,h);p&&Object.defineProperty(n,h,p.get?p:{enumerable:!0,get:()=>d[h]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))d(h);new MutationObserver(h=>{for(const p of h)if(p.type==="childList")for(const b of p.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&d(b)}).observe(document,{childList:!0,subtree:!0});function l(h){const p={};return h.integrity&&(p.integrity=h.integrity),h.referrerPolicy&&(p.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?p.credentials="include":h.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function d(h){if(h.ep)return;h.ep=!0;const p=l(h);fetch(h.href,p)}})();var ho=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ea(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var i5={exports:{}},Hp={},s5={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yh=Symbol.for("react.element"),mR=Symbol.for("react.portal"),bR=Symbol.for("react.fragment"),kR=Symbol.for("react.strict_mode"),wR=Symbol.for("react.profiler"),vR=Symbol.for("react.provider"),_R=Symbol.for("react.context"),yR=Symbol.for("react.forward_ref"),CR=Symbol.for("react.suspense"),AR=Symbol.for("react.memo"),xR=Symbol.for("react.lazy"),O2=Symbol.iterator;function ER(n){return n===null||typeof n!="object"?null:(n=O2&&n[O2]||n["@@iterator"],typeof n=="function"?n:null)}var a5={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},l5=Object.assign,c5={};function Md(n,r,l){this.props=n,this.context=r,this.refs=c5,this.updater=l||a5}Md.prototype.isReactComponent={};Md.prototype.setState=function(n,r){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,r,"setState")};Md.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function d5(){}d5.prototype=Md.prototype;function H0(n,r,l){this.props=n,this.context=r,this.refs=c5,this.updater=l||a5}var $0=H0.prototype=new d5;$0.constructor=H0;l5($0,Md.prototype);$0.isPureReactComponent=!0;var L2=Array.isArray,u5=Object.prototype.hasOwnProperty,W0={current:null},h5={key:!0,ref:!0,__self:!0,__source:!0};function f5(n,r,l){var d,h={},p=null,b=null;if(r!=null)for(d in r.ref!==void 0&&(b=r.ref),r.key!==void 0&&(p=""+r.key),r)u5.call(r,d)&&!h5.hasOwnProperty(d)&&(h[d]=r[d]);var k=arguments.length-2;if(k===1)h.children=l;else if(1<k){for(var g=Array(k),v=0;v<k;v++)g[v]=arguments[v+2];h.children=g}if(n&&n.defaultProps)for(d in k=n.defaultProps,k)h[d]===void 0&&(h[d]=k[d]);return{$$typeof:yh,type:n,key:p,ref:b,props:h,_owner:W0.current}}function SR(n,r){return{$$typeof:yh,type:n.type,key:r,ref:n.ref,props:n.props,_owner:n._owner}}function q0(n){return typeof n=="object"&&n!==null&&n.$$typeof===yh}function DR(n){var r={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(l){return r[l]})}var R2=/\/+/g;function Tb(n,r){return typeof n=="object"&&n!==null&&n.key!=null?DR(""+n.key):r.toString(36)}function Wf(n,r,l,d,h){var p=typeof n;(p==="undefined"||p==="boolean")&&(n=null);var b=!1;if(n===null)b=!0;else switch(p){case"string":case"number":b=!0;break;case"object":switch(n.$$typeof){case yh:case mR:b=!0}}if(b)return b=n,h=h(b),n=d===""?"."+Tb(b,0):d,L2(h)?(l="",n!=null&&(l=n.replace(R2,"$&/")+"/"),Wf(h,r,l,"",function(v){return v})):h!=null&&(q0(h)&&(h=SR(h,l+(!h.key||b&&b.key===h.key?"":(""+h.key).replace(R2,"$&/")+"/")+n)),r.push(h)),1;if(b=0,d=d===""?".":d+":",L2(n))for(var k=0;k<n.length;k++){p=n[k];var g=d+Tb(p,k);b+=Wf(p,r,l,g,h)}else if(g=ER(n),typeof g=="function")for(n=g.call(n),k=0;!(p=n.next()).done;)p=p.value,g=d+Tb(p,k++),b+=Wf(p,r,l,g,h);else if(p==="object")throw r=String(n),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return b}function xf(n,r,l){if(n==null)return n;var d=[],h=0;return Wf(n,d,"","",function(p){return r.call(l,p,h++)}),d}function TR(n){if(n._status===-1){var r=n._result;r=r(),r.then(function(l){(n._status===0||n._status===-1)&&(n._status=1,n._result=l)},function(l){(n._status===0||n._status===-1)&&(n._status=2,n._result=l)}),n._status===-1&&(n._status=0,n._result=r)}if(n._status===1)return n._result.default;throw n._result}var jo={current:null},qf={transition:null},IR={ReactCurrentDispatcher:jo,ReactCurrentBatchConfig:qf,ReactCurrentOwner:W0};at.Children={map:xf,forEach:function(n,r,l){xf(n,function(){r.apply(this,arguments)},l)},count:function(n){var r=0;return xf(n,function(){r++}),r},toArray:function(n){return xf(n,function(r){return r})||[]},only:function(n){if(!q0(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};at.Component=Md;at.Fragment=bR;at.Profiler=wR;at.PureComponent=H0;at.StrictMode=kR;at.Suspense=CR;at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IR;at.cloneElement=function(n,r,l){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var d=l5({},n.props),h=n.key,p=n.ref,b=n._owner;if(r!=null){if(r.ref!==void 0&&(p=r.ref,b=W0.current),r.key!==void 0&&(h=""+r.key),n.type&&n.type.defaultProps)var k=n.type.defaultProps;for(g in r)u5.call(r,g)&&!h5.hasOwnProperty(g)&&(d[g]=r[g]===void 0&&k!==void 0?k[g]:r[g])}var g=arguments.length-2;if(g===1)d.children=l;else if(1<g){k=Array(g);for(var v=0;v<g;v++)k[v]=arguments[v+2];d.children=k}return{$$typeof:yh,type:n.type,key:h,ref:p,props:d,_owner:b}};at.createContext=function(n){return n={$$typeof:_R,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:vR,_context:n},n.Consumer=n};at.createElement=f5;at.createFactory=function(n){var r=f5.bind(null,n);return r.type=n,r};at.createRef=function(){return{current:null}};at.forwardRef=function(n){return{$$typeof:yR,render:n}};at.isValidElement=q0;at.lazy=function(n){return{$$typeof:xR,_payload:{_status:-1,_result:n},_init:TR}};at.memo=function(n,r){return{$$typeof:AR,type:n,compare:r===void 0?null:r}};at.startTransition=function(n){var r=qf.transition;qf.transition={};try{n()}finally{qf.transition=r}};at.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};at.useCallback=function(n,r){return jo.current.useCallback(n,r)};at.useContext=function(n){return jo.current.useContext(n)};at.useDebugValue=function(){};at.useDeferredValue=function(n){return jo.current.useDeferredValue(n)};at.useEffect=function(n,r){return jo.current.useEffect(n,r)};at.useId=function(){return jo.current.useId()};at.useImperativeHandle=function(n,r,l){return jo.current.useImperativeHandle(n,r,l)};at.useInsertionEffect=function(n,r){return jo.current.useInsertionEffect(n,r)};at.useLayoutEffect=function(n,r){return jo.current.useLayoutEffect(n,r)};at.useMemo=function(n,r){return jo.current.useMemo(n,r)};at.useReducer=function(n,r,l){return jo.current.useReducer(n,r,l)};at.useRef=function(n){return jo.current.useRef(n)};at.useState=function(n){return jo.current.useState(n)};at.useSyncExternalStore=function(n,r,l){return jo.current.useSyncExternalStore(n,r,l)};at.useTransition=function(){return jo.current.useTransition()};at.version="18.2.0";s5.exports=at;var Z=s5.exports;const cr=Ea(Z),MR=gR({__proto__:null,default:cr},[Z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NR=Z,jR=Symbol.for("react.element"),PR=Symbol.for("react.fragment"),BR=Object.prototype.hasOwnProperty,OR=NR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LR={key:!0,ref:!0,__self:!0,__source:!0};function p5(n,r,l){var d,h={},p=null,b=null;l!==void 0&&(p=""+l),r.key!==void 0&&(p=""+r.key),r.ref!==void 0&&(b=r.ref);for(d in r)BR.call(r,d)&&!LR.hasOwnProperty(d)&&(h[d]=r[d]);if(n&&n.defaultProps)for(d in r=n.defaultProps,r)h[d]===void 0&&(h[d]=r[d]);return{$$typeof:jR,type:n,key:p,ref:b,props:h,_owner:OR.current}}Hp.Fragment=PR;Hp.jsx=p5;Hp.jsxs=p5;i5.exports=Hp;var D=i5.exports,jk={},g5={exports:{}},pr={},m5={exports:{}},b5={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function r(me,ae){var ue=me.length;me.push(ae);e:for(;0<ue;){var ve=ue-1>>>1,xe=me[ve];if(0<h(xe,ae))me[ve]=ae,me[ue]=xe,ue=ve;else break e}}function l(me){return me.length===0?null:me[0]}function d(me){if(me.length===0)return null;var ae=me[0],ue=me.pop();if(ue!==ae){me[0]=ue;e:for(var ve=0,xe=me.length,xt=xe>>>1;ve<xt;){var te=2*(ve+1)-1,Xt=me[te],Ae=te+1,je=me[Ae];if(0>h(Xt,ue))Ae<xe&&0>h(je,Xt)?(me[ve]=je,me[Ae]=ue,ve=Ae):(me[ve]=Xt,me[te]=ue,ve=te);else if(Ae<xe&&0>h(je,ue))me[ve]=je,me[Ae]=ue,ve=Ae;else break e}}return ae}function h(me,ae){var ue=me.sortIndex-ae.sortIndex;return ue!==0?ue:me.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var b=Date,k=b.now();n.unstable_now=function(){return b.now()-k}}var g=[],v=[],A=1,x=null,_=3,C=!1,M=!1,T=!1,L=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(me){for(var ae=l(v);ae!==null;){if(ae.callback===null)d(v);else if(ae.startTime<=me)d(v),ae.sortIndex=ae.expirationTime,r(g,ae);else break;ae=l(v)}}function R(me){if(T=!1,O(me),!M)if(l(g)!==null)M=!0,we(W);else{var ae=l(v);ae!==null&&Te(R,ae.startTime-me)}}function W(me,ae){M=!1,T&&(T=!1,P(V),V=-1),C=!0;var ue=_;try{for(O(ae),x=l(g);x!==null&&(!(x.expirationTime>ae)||me&&!ne());){var ve=x.callback;if(typeof ve=="function"){x.callback=null,_=x.priorityLevel;var xe=ve(x.expirationTime<=ae);ae=n.unstable_now(),typeof xe=="function"?x.callback=xe:x===l(g)&&d(g),O(ae)}else d(g);x=l(g)}if(x!==null)var xt=!0;else{var te=l(v);te!==null&&Te(R,te.startTime-ae),xt=!1}return xt}finally{x=null,_=ue,C=!1}}var Q=!1,Y=null,V=-1,ee=5,J=-1;function ne(){return!(n.unstable_now()-J<ee)}function fe(){if(Y!==null){var me=n.unstable_now();J=me;var ae=!0;try{ae=Y(!0,me)}finally{ae?ge():(Q=!1,Y=null)}}else Q=!1}var ge;if(typeof j=="function")ge=function(){j(fe)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,De=Be.port2;Be.port1.onmessage=fe,ge=function(){De.postMessage(null)}}else ge=function(){L(fe,0)};function we(me){Y=me,Q||(Q=!0,ge())}function Te(me,ae){V=L(function(){me(n.unstable_now())},ae)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(me){me.callback=null},n.unstable_continueExecution=function(){M||C||(M=!0,we(W))},n.unstable_forceFrameRate=function(me){0>me||125<me?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<me?Math.floor(1e3/me):5},n.unstable_getCurrentPriorityLevel=function(){return _},n.unstable_getFirstCallbackNode=function(){return l(g)},n.unstable_next=function(me){switch(_){case 1:case 2:case 3:var ae=3;break;default:ae=_}var ue=_;_=ae;try{return me()}finally{_=ue}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(me,ae){switch(me){case 1:case 2:case 3:case 4:case 5:break;default:me=3}var ue=_;_=me;try{return ae()}finally{_=ue}},n.unstable_scheduleCallback=function(me,ae,ue){var ve=n.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?ve+ue:ve):ue=ve,me){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=ue+xe,me={id:A++,callback:ae,priorityLevel:me,startTime:ue,expirationTime:xe,sortIndex:-1},ue>ve?(me.sortIndex=ue,r(v,me),l(g)===null&&me===l(v)&&(T?(P(V),V=-1):T=!0,Te(R,ue-ve))):(me.sortIndex=xe,r(g,me),M||C||(M=!0,we(W))),me},n.unstable_shouldYield=ne,n.unstable_wrapCallback=function(me){var ae=_;return function(){var ue=_;_=ae;try{return me.apply(this,arguments)}finally{_=ue}}}})(b5);m5.exports=b5;var RR=m5.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k5=Z,hr=RR;function ke(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var w5=new Set,Ju={};function Kl(n,r){vd(n,r),vd(n+"Capture",r)}function vd(n,r){for(Ju[n]=r,n=0;n<r.length;n++)w5.add(r[n])}var ms=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pk=Object.prototype.hasOwnProperty,zR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,z2={},F2={};function FR(n){return Pk.call(F2,n)?!0:Pk.call(z2,n)?!1:zR.test(n)?F2[n]=!0:(z2[n]=!0,!1)}function VR(n,r,l,d){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function UR(n,r,l,d){if(r===null||typeof r>"u"||VR(n,r,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Po(n,r,l,d,h,p,b){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=h,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=b}var po={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){po[n]=new Po(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];po[r]=new Po(r,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){po[n]=new Po(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){po[n]=new Po(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){po[n]=new Po(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){po[n]=new Po(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){po[n]=new Po(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){po[n]=new Po(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){po[n]=new Po(n,5,!1,n.toLowerCase(),null,!1,!1)});var G0=/[\-:]([a-z])/g;function K0(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(G0,K0);po[r]=new Po(r,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(G0,K0);po[r]=new Po(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(G0,K0);po[r]=new Po(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){po[n]=new Po(n,1,!1,n.toLowerCase(),null,!1,!1)});po.xlinkHref=new Po("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){po[n]=new Po(n,1,!1,n.toLowerCase(),null,!0,!0)});function Y0(n,r,l,d){var h=po.hasOwnProperty(r)?po[r]:null;(h!==null?h.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(UR(r,l,h,d)&&(l=null),d||h===null?FR(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):h.mustUseProperty?n[h.propertyName]=l===null?h.type===3?!1:"":l:(r=h.attributeName,d=h.attributeNamespace,l===null?n.removeAttribute(r):(h=h.type,l=h===3||h===4&&l===!0?"":""+l,d?n.setAttributeNS(d,r,l):n.setAttribute(r,l))))}var _s=k5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ef=Symbol.for("react.element"),Qc=Symbol.for("react.portal"),Zc=Symbol.for("react.fragment"),Q0=Symbol.for("react.strict_mode"),Bk=Symbol.for("react.profiler"),v5=Symbol.for("react.provider"),_5=Symbol.for("react.context"),Z0=Symbol.for("react.forward_ref"),Ok=Symbol.for("react.suspense"),Lk=Symbol.for("react.suspense_list"),J0=Symbol.for("react.memo"),oa=Symbol.for("react.lazy"),y5=Symbol.for("react.offscreen"),V2=Symbol.iterator;function _u(n){return n===null||typeof n!="object"?null:(n=V2&&n[V2]||n["@@iterator"],typeof n=="function"?n:null)}var bn=Object.assign,Ib;function Lu(n){if(Ib===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);Ib=r&&r[1]||""}return`
`+Ib+n}var Mb=!1;function Nb(n,r){if(!n||Mb)return"";Mb=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(v){var d=v}Reflect.construct(n,[],r)}else{try{r.call()}catch(v){d=v}n.call(r.prototype)}else{try{throw Error()}catch(v){d=v}n()}}catch(v){if(v&&d&&typeof v.stack=="string"){for(var h=v.stack.split(`
`),p=d.stack.split(`
`),b=h.length-1,k=p.length-1;1<=b&&0<=k&&h[b]!==p[k];)k--;for(;1<=b&&0<=k;b--,k--)if(h[b]!==p[k]){if(b!==1||k!==1)do if(b--,k--,0>k||h[b]!==p[k]){var g=`
`+h[b].replace(" at new "," at ");return n.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",n.displayName)),g}while(1<=b&&0<=k);break}}}finally{Mb=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?Lu(n):""}function HR(n){switch(n.tag){case 5:return Lu(n.type);case 16:return Lu("Lazy");case 13:return Lu("Suspense");case 19:return Lu("SuspenseList");case 0:case 2:case 15:return n=Nb(n.type,!1),n;case 11:return n=Nb(n.type.render,!1),n;case 1:return n=Nb(n.type,!0),n;default:return""}}function Rk(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Zc:return"Fragment";case Qc:return"Portal";case Bk:return"Profiler";case Q0:return"StrictMode";case Ok:return"Suspense";case Lk:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case _5:return(n.displayName||"Context")+".Consumer";case v5:return(n._context.displayName||"Context")+".Provider";case Z0:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case J0:return r=n.displayName||null,r!==null?r:Rk(n.type)||"Memo";case oa:r=n._payload,n=n._init;try{return Rk(n(r))}catch{}}return null}function $R(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rk(r);case 8:return r===Q0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function _a(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function C5(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function WR(n){var r=C5(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,p=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(b){d=""+b,p.call(this,b)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(b){d=""+b},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Sf(n){n._valueTracker||(n._valueTracker=WR(n))}function A5(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),d="";return n&&(d=C5(n)?n.checked?"true":"false":n.value),n=d,n!==l?(r.setValue(n),!0):!1}function lp(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function zk(n,r){var l=r.checked;return bn({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function U2(n,r){var l=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;l=_a(r.value!=null?r.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function x5(n,r){r=r.checked,r!=null&&Y0(n,"checked",r,!1)}function Fk(n,r){x5(n,r);var l=_a(r.value),d=r.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Vk(n,r.type,l):r.hasOwnProperty("defaultValue")&&Vk(n,r.type,_a(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function H2(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Vk(n,r,l){(r!=="number"||lp(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Ru=Array.isArray;function dd(n,r,l,d){if(n=n.options,r){r={};for(var h=0;h<l.length;h++)r["$"+l[h]]=!0;for(l=0;l<n.length;l++)h=r.hasOwnProperty("$"+n[l].value),n[l].selected!==h&&(n[l].selected=h),h&&d&&(n[l].defaultSelected=!0)}else{for(l=""+_a(l),r=null,h=0;h<n.length;h++){if(n[h].value===l){n[h].selected=!0,d&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function Uk(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(ke(91));return bn({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $2(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(ke(92));if(Ru(l)){if(1<l.length)throw Error(ke(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:_a(l)}}function E5(n,r){var l=_a(r.value),d=_a(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function W2(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function S5(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hk(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?S5(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Df,D5=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,d,h){MSApp.execUnsafeLocalFunction(function(){return n(r,l,d,h)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Df=Df||document.createElement("div"),Df.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Df.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Xu(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Uu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qR=["Webkit","ms","Moz","O"];Object.keys(Uu).forEach(function(n){qR.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Uu[r]=Uu[n]})});function T5(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Uu.hasOwnProperty(n)&&Uu[n]?(""+r).trim():r+"px"}function I5(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var d=l.indexOf("--")===0,h=T5(l,r[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,h):n[l]=h}}var GR=bn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $k(n,r){if(r){if(GR[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(ke(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(ke(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(ke(61))}if(r.style!=null&&typeof r.style!="object")throw Error(ke(62))}}function Wk(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qk=null;function X0(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Gk=null,ud=null,hd=null;function q2(n){if(n=xh(n)){if(typeof Gk!="function")throw Error(ke(280));var r=n.stateNode;r&&(r=Kp(r),Gk(n.stateNode,n.type,r))}}function M5(n){ud?hd?hd.push(n):hd=[n]:ud=n}function N5(){if(ud){var n=ud,r=hd;if(hd=ud=null,q2(n),r)for(n=0;n<r.length;n++)q2(r[n])}}function j5(n,r){return n(r)}function P5(){}var jb=!1;function B5(n,r,l){if(jb)return n(r,l);jb=!0;try{return j5(n,r,l)}finally{jb=!1,(ud!==null||hd!==null)&&(P5(),N5())}}function eh(n,r){var l=n.stateNode;if(l===null)return null;var d=Kp(l);if(d===null)return null;l=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(ke(231,r,typeof l));return l}var Kk=!1;if(ms)try{var yu={};Object.defineProperty(yu,"passive",{get:function(){Kk=!0}}),window.addEventListener("test",yu,yu),window.removeEventListener("test",yu,yu)}catch{Kk=!1}function KR(n,r,l,d,h,p,b,k,g){var v=Array.prototype.slice.call(arguments,3);try{r.apply(l,v)}catch(A){this.onError(A)}}var Hu=!1,cp=null,dp=!1,Yk=null,YR={onError:function(n){Hu=!0,cp=n}};function QR(n,r,l,d,h,p,b,k,g){Hu=!1,cp=null,KR.apply(YR,arguments)}function ZR(n,r,l,d,h,p,b,k,g){if(QR.apply(this,arguments),Hu){if(Hu){var v=cp;Hu=!1,cp=null}else throw Error(ke(198));dp||(dp=!0,Yk=v)}}function Yl(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function O5(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function G2(n){if(Yl(n)!==n)throw Error(ke(188))}function JR(n){var r=n.alternate;if(!r){if(r=Yl(n),r===null)throw Error(ke(188));return r!==n?null:n}for(var l=n,d=r;;){var h=l.return;if(h===null)break;var p=h.alternate;if(p===null){if(d=h.return,d!==null){l=d;continue}break}if(h.child===p.child){for(p=h.child;p;){if(p===l)return G2(h),n;if(p===d)return G2(h),r;p=p.sibling}throw Error(ke(188))}if(l.return!==d.return)l=h,d=p;else{for(var b=!1,k=h.child;k;){if(k===l){b=!0,l=h,d=p;break}if(k===d){b=!0,d=h,l=p;break}k=k.sibling}if(!b){for(k=p.child;k;){if(k===l){b=!0,l=p,d=h;break}if(k===d){b=!0,d=p,l=h;break}k=k.sibling}if(!b)throw Error(ke(189))}}if(l.alternate!==d)throw Error(ke(190))}if(l.tag!==3)throw Error(ke(188));return l.stateNode.current===l?n:r}function L5(n){return n=JR(n),n!==null?R5(n):null}function R5(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=R5(n);if(r!==null)return r;n=n.sibling}return null}var z5=hr.unstable_scheduleCallback,K2=hr.unstable_cancelCallback,XR=hr.unstable_shouldYield,ez=hr.unstable_requestPaint,Tn=hr.unstable_now,tz=hr.unstable_getCurrentPriorityLevel,ew=hr.unstable_ImmediatePriority,F5=hr.unstable_UserBlockingPriority,up=hr.unstable_NormalPriority,nz=hr.unstable_LowPriority,V5=hr.unstable_IdlePriority,$p=null,Hi=null;function oz(n){if(Hi&&typeof Hi.onCommitFiberRoot=="function")try{Hi.onCommitFiberRoot($p,n,void 0,(n.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:sz,rz=Math.log,iz=Math.LN2;function sz(n){return n>>>=0,n===0?32:31-(rz(n)/iz|0)|0}var Tf=64,If=4194304;function zu(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hp(n,r){var l=n.pendingLanes;if(l===0)return 0;var d=0,h=n.suspendedLanes,p=n.pingedLanes,b=l&268435455;if(b!==0){var k=b&~h;k!==0?d=zu(k):(p&=b,p!==0&&(d=zu(p)))}else b=l&~h,b!==0?d=zu(b):p!==0&&(d=zu(p));if(d===0)return 0;if(r!==0&&r!==d&&!(r&h)&&(h=d&-d,p=r&-r,h>=p||h===16&&(p&4194240)!==0))return r;if(d&4&&(d|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=d;0<r;)l=31-li(r),h=1<<l,d|=n[l],r&=~h;return d}function az(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lz(n,r){for(var l=n.suspendedLanes,d=n.pingedLanes,h=n.expirationTimes,p=n.pendingLanes;0<p;){var b=31-li(p),k=1<<b,g=h[b];g===-1?(!(k&l)||k&d)&&(h[b]=az(k,r)):g<=r&&(n.expiredLanes|=k),p&=~k}}function Qk(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function U5(){var n=Tf;return Tf<<=1,!(Tf&4194240)&&(Tf=64),n}function Pb(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Ch(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-li(r),n[r]=l}function cz(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var h=31-li(l),p=1<<h;r[h]=0,d[h]=-1,n[h]=-1,l&=~p}}function tw(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var d=31-li(l),h=1<<d;h&r|n[d]&r&&(n[d]|=r),l&=~h}}var Pt=0;function H5(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var $5,nw,W5,q5,G5,Zk=!1,Mf=[],da=null,ua=null,ha=null,th=new Map,nh=new Map,ia=[],dz="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Y2(n,r){switch(n){case"focusin":case"focusout":da=null;break;case"dragenter":case"dragleave":ua=null;break;case"mouseover":case"mouseout":ha=null;break;case"pointerover":case"pointerout":th.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":nh.delete(r.pointerId)}}function Cu(n,r,l,d,h,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:l,eventSystemFlags:d,nativeEvent:p,targetContainers:[h]},r!==null&&(r=xh(r),r!==null&&nw(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function uz(n,r,l,d,h){switch(r){case"focusin":return da=Cu(da,n,r,l,d,h),!0;case"dragenter":return ua=Cu(ua,n,r,l,d,h),!0;case"mouseover":return ha=Cu(ha,n,r,l,d,h),!0;case"pointerover":var p=h.pointerId;return th.set(p,Cu(th.get(p)||null,n,r,l,d,h)),!0;case"gotpointercapture":return p=h.pointerId,nh.set(p,Cu(nh.get(p)||null,n,r,l,d,h)),!0}return!1}function K5(n){var r=jl(n.target);if(r!==null){var l=Yl(r);if(l!==null){if(r=l.tag,r===13){if(r=O5(l),r!==null){n.blockedOn=r,G5(n.priority,function(){W5(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Gf(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Jk(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);qk=d,l.target.dispatchEvent(d),qk=null}else return r=xh(l),r!==null&&nw(r),n.blockedOn=l,!1;r.shift()}return!0}function Q2(n,r,l){Gf(n)&&l.delete(r)}function hz(){Zk=!1,da!==null&&Gf(da)&&(da=null),ua!==null&&Gf(ua)&&(ua=null),ha!==null&&Gf(ha)&&(ha=null),th.forEach(Q2),nh.forEach(Q2)}function Au(n,r){n.blockedOn===r&&(n.blockedOn=null,Zk||(Zk=!0,hr.unstable_scheduleCallback(hr.unstable_NormalPriority,hz)))}function oh(n){function r(h){return Au(h,n)}if(0<Mf.length){Au(Mf[0],n);for(var l=1;l<Mf.length;l++){var d=Mf[l];d.blockedOn===n&&(d.blockedOn=null)}}for(da!==null&&Au(da,n),ua!==null&&Au(ua,n),ha!==null&&Au(ha,n),th.forEach(r),nh.forEach(r),l=0;l<ia.length;l++)d=ia[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<ia.length&&(l=ia[0],l.blockedOn===null);)K5(l),l.blockedOn===null&&ia.shift()}var fd=_s.ReactCurrentBatchConfig,fp=!0;function fz(n,r,l,d){var h=Pt,p=fd.transition;fd.transition=null;try{Pt=1,ow(n,r,l,d)}finally{Pt=h,fd.transition=p}}function pz(n,r,l,d){var h=Pt,p=fd.transition;fd.transition=null;try{Pt=4,ow(n,r,l,d)}finally{Pt=h,fd.transition=p}}function ow(n,r,l,d){if(fp){var h=Jk(n,r,l,d);if(h===null)$b(n,r,d,pp,l),Y2(n,d);else if(uz(h,n,r,l,d))d.stopPropagation();else if(Y2(n,d),r&4&&-1<dz.indexOf(n)){for(;h!==null;){var p=xh(h);if(p!==null&&$5(p),p=Jk(n,r,l,d),p===null&&$b(n,r,d,pp,l),p===h)break;h=p}h!==null&&d.stopPropagation()}else $b(n,r,d,null,l)}}var pp=null;function Jk(n,r,l,d){if(pp=null,n=X0(d),n=jl(n),n!==null)if(r=Yl(n),r===null)n=null;else if(l=r.tag,l===13){if(n=O5(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return pp=n,null}function Y5(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tz()){case ew:return 1;case F5:return 4;case up:case nz:return 16;case V5:return 536870912;default:return 16}default:return 16}}var la=null,rw=null,Kf=null;function Q5(){if(Kf)return Kf;var n,r=rw,l=r.length,d,h="value"in la?la.value:la.textContent,p=h.length;for(n=0;n<l&&r[n]===h[n];n++);var b=l-n;for(d=1;d<=b&&r[l-d]===h[p-d];d++);return Kf=h.slice(n,1<d?1-d:void 0)}function Yf(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Nf(){return!0}function Z2(){return!1}function gr(n){function r(l,d,h,p,b){this._reactName=l,this._targetInst=h,this.type=d,this.nativeEvent=p,this.target=b,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(l=n[k],this[k]=l?l(p):p[k]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Nf:Z2,this.isPropagationStopped=Z2,this}return bn(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Nf)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Nf)},persist:function(){},isPersistent:Nf}),r}var Nd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iw=gr(Nd),Ah=bn({},Nd,{view:0,detail:0}),gz=gr(Ah),Bb,Ob,xu,Wp=bn({},Ah,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sw,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==xu&&(xu&&n.type==="mousemove"?(Bb=n.screenX-xu.screenX,Ob=n.screenY-xu.screenY):Ob=Bb=0,xu=n),Bb)},movementY:function(n){return"movementY"in n?n.movementY:Ob}}),J2=gr(Wp),mz=bn({},Wp,{dataTransfer:0}),bz=gr(mz),kz=bn({},Ah,{relatedTarget:0}),Lb=gr(kz),wz=bn({},Nd,{animationName:0,elapsedTime:0,pseudoElement:0}),vz=gr(wz),_z=bn({},Nd,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),yz=gr(_z),Cz=bn({},Nd,{data:0}),X2=gr(Cz),Az={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xz={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ez={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sz(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Ez[n])?!!r[n]:!1}function sw(){return Sz}var Dz=bn({},Ah,{key:function(n){if(n.key){var r=Az[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Yf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?xz[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sw,charCode:function(n){return n.type==="keypress"?Yf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Yf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Tz=gr(Dz),Iz=bn({},Wp,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eE=gr(Iz),Mz=bn({},Ah,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sw}),Nz=gr(Mz),jz=bn({},Nd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pz=gr(jz),Bz=bn({},Wp,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Oz=gr(Bz),Lz=[9,13,27,32],aw=ms&&"CompositionEvent"in window,$u=null;ms&&"documentMode"in document&&($u=document.documentMode);var Rz=ms&&"TextEvent"in window&&!$u,Z5=ms&&(!aw||$u&&8<$u&&11>=$u),tE=String.fromCharCode(32),nE=!1;function J5(n,r){switch(n){case"keyup":return Lz.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function X5(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Jc=!1;function zz(n,r){switch(n){case"compositionend":return X5(r);case"keypress":return r.which!==32?null:(nE=!0,tE);case"textInput":return n=r.data,n===tE&&nE?null:n;default:return null}}function Fz(n,r){if(Jc)return n==="compositionend"||!aw&&J5(n,r)?(n=Q5(),Kf=rw=la=null,Jc=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Z5&&r.locale!=="ko"?null:r.data;default:return null}}var Vz={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oE(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Vz[n.type]:r==="textarea"}function eD(n,r,l,d){M5(d),r=gp(r,"onChange"),0<r.length&&(l=new iw("onChange","change",null,l,d),n.push({event:l,listeners:r}))}var Wu=null,rh=null;function Uz(n){uD(n,0)}function qp(n){var r=td(n);if(A5(r))return n}function Hz(n,r){if(n==="change")return r}var tD=!1;if(ms){var Rb;if(ms){var zb="oninput"in document;if(!zb){var rE=document.createElement("div");rE.setAttribute("oninput","return;"),zb=typeof rE.oninput=="function"}Rb=zb}else Rb=!1;tD=Rb&&(!document.documentMode||9<document.documentMode)}function iE(){Wu&&(Wu.detachEvent("onpropertychange",nD),rh=Wu=null)}function nD(n){if(n.propertyName==="value"&&qp(rh)){var r=[];eD(r,rh,n,X0(n)),B5(Uz,r)}}function $z(n,r,l){n==="focusin"?(iE(),Wu=r,rh=l,Wu.attachEvent("onpropertychange",nD)):n==="focusout"&&iE()}function Wz(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return qp(rh)}function qz(n,r){if(n==="click")return qp(r)}function Gz(n,r){if(n==="input"||n==="change")return qp(r)}function Kz(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var di=typeof Object.is=="function"?Object.is:Kz;function ih(n,r){if(di(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),d=Object.keys(r);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var h=l[d];if(!Pk.call(r,h)||!di(n[h],r[h]))return!1}return!0}function sE(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function aE(n,r){var l=sE(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=r&&d>=r)return{node:l,offset:r-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=sE(l)}}function oD(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?oD(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function rD(){for(var n=window,r=lp();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=lp(n.document)}return r}function lw(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Yz(n){var r=rD(),l=n.focusedElem,d=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&oD(l.ownerDocument.documentElement,l)){if(d!==null&&lw(l)){if(r=d.start,n=d.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var h=l.textContent.length,p=Math.min(d.start,h);d=d.end===void 0?p:Math.min(d.end,h),!n.extend&&p>d&&(h=d,d=p,p=h),h=aE(l,p);var b=aE(l,d);h&&b&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),n.removeAllRanges(),p>d?(n.addRange(r),n.extend(b.node,b.offset)):(r.setEnd(b.node,b.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Qz=ms&&"documentMode"in document&&11>=document.documentMode,Xc=null,Xk=null,qu=null,e0=!1;function lE(n,r,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;e0||Xc==null||Xc!==lp(d)||(d=Xc,"selectionStart"in d&&lw(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),qu&&ih(qu,d)||(qu=d,d=gp(Xk,"onSelect"),0<d.length&&(r=new iw("onSelect","select",null,r,l),n.push({event:r,listeners:d}),r.target=Xc)))}function jf(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var ed={animationend:jf("Animation","AnimationEnd"),animationiteration:jf("Animation","AnimationIteration"),animationstart:jf("Animation","AnimationStart"),transitionend:jf("Transition","TransitionEnd")},Fb={},iD={};ms&&(iD=document.createElement("div").style,"AnimationEvent"in window||(delete ed.animationend.animation,delete ed.animationiteration.animation,delete ed.animationstart.animation),"TransitionEvent"in window||delete ed.transitionend.transition);function Gp(n){if(Fb[n])return Fb[n];if(!ed[n])return n;var r=ed[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in iD)return Fb[n]=r[l];return n}var sD=Gp("animationend"),aD=Gp("animationiteration"),lD=Gp("animationstart"),cD=Gp("transitionend"),dD=new Map,cE="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sa(n,r){dD.set(n,r),Kl(r,[n])}for(var Vb=0;Vb<cE.length;Vb++){var Ub=cE[Vb],Zz=Ub.toLowerCase(),Jz=Ub[0].toUpperCase()+Ub.slice(1);Sa(Zz,"on"+Jz)}Sa(sD,"onAnimationEnd");Sa(aD,"onAnimationIteration");Sa(lD,"onAnimationStart");Sa("dblclick","onDoubleClick");Sa("focusin","onFocus");Sa("focusout","onBlur");Sa(cD,"onTransitionEnd");vd("onMouseEnter",["mouseout","mouseover"]);vd("onMouseLeave",["mouseout","mouseover"]);vd("onPointerEnter",["pointerout","pointerover"]);vd("onPointerLeave",["pointerout","pointerover"]);Kl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kl("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xz=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fu));function dE(n,r,l){var d=n.type||"unknown-event";n.currentTarget=l,ZR(d,r,void 0,n),n.currentTarget=null}function uD(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],h=d.event;d=d.listeners;e:{var p=void 0;if(r)for(var b=d.length-1;0<=b;b--){var k=d[b],g=k.instance,v=k.currentTarget;if(k=k.listener,g!==p&&h.isPropagationStopped())break e;dE(h,k,v),p=g}else for(b=0;b<d.length;b++){if(k=d[b],g=k.instance,v=k.currentTarget,k=k.listener,g!==p&&h.isPropagationStopped())break e;dE(h,k,v),p=g}}}if(dp)throw n=Yk,dp=!1,Yk=null,n}function nn(n,r){var l=r[i0];l===void 0&&(l=r[i0]=new Set);var d=n+"__bubble";l.has(d)||(hD(r,n,2,!1),l.add(d))}function Hb(n,r,l){var d=0;r&&(d|=4),hD(l,n,d,r)}var Pf="_reactListening"+Math.random().toString(36).slice(2);function sh(n){if(!n[Pf]){n[Pf]=!0,w5.forEach(function(l){l!=="selectionchange"&&(Xz.has(l)||Hb(l,!1,n),Hb(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Pf]||(r[Pf]=!0,Hb("selectionchange",!1,r))}}function hD(n,r,l,d){switch(Y5(r)){case 1:var h=fz;break;case 4:h=pz;break;default:h=ow}l=h.bind(null,r,l,n),h=void 0,!Kk||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),d?h!==void 0?n.addEventListener(r,l,{capture:!0,passive:h}):n.addEventListener(r,l,!0):h!==void 0?n.addEventListener(r,l,{passive:h}):n.addEventListener(r,l,!1)}function $b(n,r,l,d,h){var p=d;if(!(r&1)&&!(r&2)&&d!==null)e:for(;;){if(d===null)return;var b=d.tag;if(b===3||b===4){var k=d.stateNode.containerInfo;if(k===h||k.nodeType===8&&k.parentNode===h)break;if(b===4)for(b=d.return;b!==null;){var g=b.tag;if((g===3||g===4)&&(g=b.stateNode.containerInfo,g===h||g.nodeType===8&&g.parentNode===h))return;b=b.return}for(;k!==null;){if(b=jl(k),b===null)return;if(g=b.tag,g===5||g===6){d=p=b;continue e}k=k.parentNode}}d=d.return}B5(function(){var v=p,A=X0(l),x=[];e:{var _=dD.get(n);if(_!==void 0){var C=iw,M=n;switch(n){case"keypress":if(Yf(l)===0)break e;case"keydown":case"keyup":C=Tz;break;case"focusin":M="focus",C=Lb;break;case"focusout":M="blur",C=Lb;break;case"beforeblur":case"afterblur":C=Lb;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=J2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=bz;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Nz;break;case sD:case aD:case lD:C=vz;break;case cD:C=Pz;break;case"scroll":C=gz;break;case"wheel":C=Oz;break;case"copy":case"cut":case"paste":C=yz;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=eE}var T=(r&4)!==0,L=!T&&n==="scroll",P=T?_!==null?_+"Capture":null:_;T=[];for(var j=v,O;j!==null;){O=j;var R=O.stateNode;if(O.tag===5&&R!==null&&(O=R,P!==null&&(R=eh(j,P),R!=null&&T.push(ah(j,R,O)))),L)break;j=j.return}0<T.length&&(_=new C(_,M,null,l,A),x.push({event:_,listeners:T}))}}if(!(r&7)){e:{if(_=n==="mouseover"||n==="pointerover",C=n==="mouseout"||n==="pointerout",_&&l!==qk&&(M=l.relatedTarget||l.fromElement)&&(jl(M)||M[bs]))break e;if((C||_)&&(_=A.window===A?A:(_=A.ownerDocument)?_.defaultView||_.parentWindow:window,C?(M=l.relatedTarget||l.toElement,C=v,M=M?jl(M):null,M!==null&&(L=Yl(M),M!==L||M.tag!==5&&M.tag!==6)&&(M=null)):(C=null,M=v),C!==M)){if(T=J2,R="onMouseLeave",P="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(T=eE,R="onPointerLeave",P="onPointerEnter",j="pointer"),L=C==null?_:td(C),O=M==null?_:td(M),_=new T(R,j+"leave",C,l,A),_.target=L,_.relatedTarget=O,R=null,jl(A)===v&&(T=new T(P,j+"enter",M,l,A),T.target=O,T.relatedTarget=L,R=T),L=R,C&&M)t:{for(T=C,P=M,j=0,O=T;O;O=qc(O))j++;for(O=0,R=P;R;R=qc(R))O++;for(;0<j-O;)T=qc(T),j--;for(;0<O-j;)P=qc(P),O--;for(;j--;){if(T===P||P!==null&&T===P.alternate)break t;T=qc(T),P=qc(P)}T=null}else T=null;C!==null&&uE(x,_,C,T,!1),M!==null&&L!==null&&uE(x,L,M,T,!0)}}e:{if(_=v?td(v):window,C=_.nodeName&&_.nodeName.toLowerCase(),C==="select"||C==="input"&&_.type==="file")var W=Hz;else if(oE(_))if(tD)W=Gz;else{W=Wz;var Q=$z}else(C=_.nodeName)&&C.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(W=qz);if(W&&(W=W(n,v))){eD(x,W,l,A);break e}Q&&Q(n,_,v),n==="focusout"&&(Q=_._wrapperState)&&Q.controlled&&_.type==="number"&&Vk(_,"number",_.value)}switch(Q=v?td(v):window,n){case"focusin":(oE(Q)||Q.contentEditable==="true")&&(Xc=Q,Xk=v,qu=null);break;case"focusout":qu=Xk=Xc=null;break;case"mousedown":e0=!0;break;case"contextmenu":case"mouseup":case"dragend":e0=!1,lE(x,l,A);break;case"selectionchange":if(Qz)break;case"keydown":case"keyup":lE(x,l,A)}var Y;if(aw)e:{switch(n){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else Jc?J5(n,l)&&(V="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(V="onCompositionStart");V&&(Z5&&l.locale!=="ko"&&(Jc||V!=="onCompositionStart"?V==="onCompositionEnd"&&Jc&&(Y=Q5()):(la=A,rw="value"in la?la.value:la.textContent,Jc=!0)),Q=gp(v,V),0<Q.length&&(V=new X2(V,n,null,l,A),x.push({event:V,listeners:Q}),Y?V.data=Y:(Y=X5(l),Y!==null&&(V.data=Y)))),(Y=Rz?zz(n,l):Fz(n,l))&&(v=gp(v,"onBeforeInput"),0<v.length&&(A=new X2("onBeforeInput","beforeinput",null,l,A),x.push({event:A,listeners:v}),A.data=Y))}uD(x,r)})}function ah(n,r,l){return{instance:n,listener:r,currentTarget:l}}function gp(n,r){for(var l=r+"Capture",d=[];n!==null;){var h=n,p=h.stateNode;h.tag===5&&p!==null&&(h=p,p=eh(n,l),p!=null&&d.unshift(ah(n,p,h)),p=eh(n,r),p!=null&&d.push(ah(n,p,h))),n=n.return}return d}function qc(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function uE(n,r,l,d,h){for(var p=r._reactName,b=[];l!==null&&l!==d;){var k=l,g=k.alternate,v=k.stateNode;if(g!==null&&g===d)break;k.tag===5&&v!==null&&(k=v,h?(g=eh(l,p),g!=null&&b.unshift(ah(l,g,k))):h||(g=eh(l,p),g!=null&&b.push(ah(l,g,k)))),l=l.return}b.length!==0&&n.push({event:r,listeners:b})}var e6=/\r\n?/g,t6=/\u0000|\uFFFD/g;function hE(n){return(typeof n=="string"?n:""+n).replace(e6,`
`).replace(t6,"")}function Bf(n,r,l){if(r=hE(r),hE(n)!==r&&l)throw Error(ke(425))}function mp(){}var t0=null,n0=null;function o0(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var r0=typeof setTimeout=="function"?setTimeout:void 0,n6=typeof clearTimeout=="function"?clearTimeout:void 0,fE=typeof Promise=="function"?Promise:void 0,o6=typeof queueMicrotask=="function"?queueMicrotask:typeof fE<"u"?function(n){return fE.resolve(null).then(n).catch(r6)}:r0;function r6(n){setTimeout(function(){throw n})}function Wb(n,r){var l=r,d=0;do{var h=l.nextSibling;if(n.removeChild(l),h&&h.nodeType===8)if(l=h.data,l==="/$"){if(d===0){n.removeChild(h),oh(r);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=h}while(l);oh(r)}function fa(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function pE(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var jd=Math.random().toString(36).slice(2),Ui="__reactFiber$"+jd,lh="__reactProps$"+jd,bs="__reactContainer$"+jd,i0="__reactEvents$"+jd,i6="__reactListeners$"+jd,s6="__reactHandles$"+jd;function jl(n){var r=n[Ui];if(r)return r;for(var l=n.parentNode;l;){if(r=l[bs]||l[Ui]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=pE(n);n!==null;){if(l=n[Ui])return l;n=pE(n)}return r}n=l,l=n.parentNode}return null}function xh(n){return n=n[Ui]||n[bs],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function td(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ke(33))}function Kp(n){return n[lh]||null}var s0=[],nd=-1;function Da(n){return{current:n}}function on(n){0>nd||(n.current=s0[nd],s0[nd]=null,nd--)}function Jt(n,r){nd++,s0[nd]=n.current,n.current=r}var ya={},xo=Da(ya),Ko=Da(!1),Fl=ya;function _d(n,r){var l=n.type.contextTypes;if(!l)return ya;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var h={},p;for(p in l)h[p]=r[p];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=h),h}function Yo(n){return n=n.childContextTypes,n!=null}function bp(){on(Ko),on(xo)}function gE(n,r,l){if(xo.current!==ya)throw Error(ke(168));Jt(xo,r),Jt(Ko,l)}function fD(n,r,l){var d=n.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var h in d)if(!(h in r))throw Error(ke(108,$R(n)||"Unknown",h));return bn({},l,d)}function kp(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ya,Fl=xo.current,Jt(xo,n),Jt(Ko,Ko.current),!0}function mE(n,r,l){var d=n.stateNode;if(!d)throw Error(ke(169));l?(n=fD(n,r,Fl),d.__reactInternalMemoizedMergedChildContext=n,on(Ko),on(xo),Jt(xo,n)):on(Ko),Jt(Ko,l)}var ds=null,Yp=!1,qb=!1;function pD(n){ds===null?ds=[n]:ds.push(n)}function a6(n){Yp=!0,pD(n)}function Ta(){if(!qb&&ds!==null){qb=!0;var n=0,r=Pt;try{var l=ds;for(Pt=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}ds=null,Yp=!1}catch(h){throw ds!==null&&(ds=ds.slice(n+1)),z5(ew,Ta),h}finally{Pt=r,qb=!1}}return null}var od=[],rd=0,wp=null,vp=0,jr=[],Pr=0,Vl=null,us=1,hs="";function Il(n,r){od[rd++]=vp,od[rd++]=wp,wp=n,vp=r}function gD(n,r,l){jr[Pr++]=us,jr[Pr++]=hs,jr[Pr++]=Vl,Vl=n;var d=us;n=hs;var h=32-li(d)-1;d&=~(1<<h),l+=1;var p=32-li(r)+h;if(30<p){var b=h-h%5;p=(d&(1<<b)-1).toString(32),d>>=b,h-=b,us=1<<32-li(r)+h|l<<h|d,hs=p+n}else us=1<<p|l<<h|d,hs=n}function cw(n){n.return!==null&&(Il(n,1),gD(n,1,0))}function dw(n){for(;n===wp;)wp=od[--rd],od[rd]=null,vp=od[--rd],od[rd]=null;for(;n===Vl;)Vl=jr[--Pr],jr[Pr]=null,hs=jr[--Pr],jr[Pr]=null,us=jr[--Pr],jr[Pr]=null}var dr=null,lr=null,un=!1,ri=null;function mD(n,r){var l=Br(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function bE(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,dr=n,lr=fa(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,dr=n,lr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Vl!==null?{id:us,overflow:hs}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=Br(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,dr=n,lr=null,!0):!1;default:return!1}}function a0(n){return(n.mode&1)!==0&&(n.flags&128)===0}function l0(n){if(un){var r=lr;if(r){var l=r;if(!bE(n,r)){if(a0(n))throw Error(ke(418));r=fa(l.nextSibling);var d=dr;r&&bE(n,r)?mD(d,l):(n.flags=n.flags&-4097|2,un=!1,dr=n)}}else{if(a0(n))throw Error(ke(418));n.flags=n.flags&-4097|2,un=!1,dr=n}}}function kE(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;dr=n}function Of(n){if(n!==dr)return!1;if(!un)return kE(n),un=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!o0(n.type,n.memoizedProps)),r&&(r=lr)){if(a0(n))throw bD(),Error(ke(418));for(;r;)mD(n,r),r=fa(r.nextSibling)}if(kE(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ke(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){lr=fa(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}lr=null}}else lr=dr?fa(n.stateNode.nextSibling):null;return!0}function bD(){for(var n=lr;n;)n=fa(n.nextSibling)}function yd(){lr=dr=null,un=!1}function uw(n){ri===null?ri=[n]:ri.push(n)}var l6=_s.ReactCurrentBatchConfig;function ti(n,r){if(n&&n.defaultProps){r=bn({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}var _p=Da(null),yp=null,id=null,hw=null;function fw(){hw=id=yp=null}function pw(n){var r=_p.current;on(_p),n._currentValue=r}function c0(n,r,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===l)break;n=n.return}}function pd(n,r){yp=n,hw=id=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Go=!0),n.firstContext=null)}function Rr(n){var r=n._currentValue;if(hw!==n)if(n={context:n,memoizedValue:r,next:null},id===null){if(yp===null)throw Error(ke(308));id=n,yp.dependencies={lanes:0,firstContext:n}}else id=id.next=n;return r}var Pl=null;function gw(n){Pl===null?Pl=[n]:Pl.push(n)}function kD(n,r,l,d){var h=r.interleaved;return h===null?(l.next=l,gw(r)):(l.next=h.next,h.next=l),r.interleaved=l,ks(n,d)}function ks(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var ra=!1;function mw(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wD(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function fs(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function pa(n,r,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,bt&2){var h=d.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),d.pending=r,ks(n,l)}return h=d.interleaved,h===null?(r.next=r,gw(d)):(r.next=h.next,h.next=r),d.interleaved=r,ks(n,l)}function Qf(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,tw(n,l)}}function wE(n,r){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var h=null,p=null;if(l=l.firstBaseUpdate,l!==null){do{var b={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};p===null?h=p=b:p=p.next=b,l=l.next}while(l!==null);p===null?h=p=r:p=p.next=r}else h=p=r;l={baseState:d.baseState,firstBaseUpdate:h,lastBaseUpdate:p,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function Cp(n,r,l,d){var h=n.updateQueue;ra=!1;var p=h.firstBaseUpdate,b=h.lastBaseUpdate,k=h.shared.pending;if(k!==null){h.shared.pending=null;var g=k,v=g.next;g.next=null,b===null?p=v:b.next=v,b=g;var A=n.alternate;A!==null&&(A=A.updateQueue,k=A.lastBaseUpdate,k!==b&&(k===null?A.firstBaseUpdate=v:k.next=v,A.lastBaseUpdate=g))}if(p!==null){var x=h.baseState;b=0,A=v=g=null,k=p;do{var _=k.lane,C=k.eventTime;if((d&_)===_){A!==null&&(A=A.next={eventTime:C,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var M=n,T=k;switch(_=r,C=l,T.tag){case 1:if(M=T.payload,typeof M=="function"){x=M.call(C,x,_);break e}x=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=T.payload,_=typeof M=="function"?M.call(C,x,_):M,_==null)break e;x=bn({},x,_);break e;case 2:ra=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,_=h.effects,_===null?h.effects=[k]:_.push(k))}else C={eventTime:C,lane:_,tag:k.tag,payload:k.payload,callback:k.callback,next:null},A===null?(v=A=C,g=x):A=A.next=C,b|=_;if(k=k.next,k===null){if(k=h.shared.pending,k===null)break;_=k,k=_.next,_.next=null,h.lastBaseUpdate=_,h.shared.pending=null}}while(1);if(A===null&&(g=x),h.baseState=g,h.firstBaseUpdate=v,h.lastBaseUpdate=A,r=h.shared.interleaved,r!==null){h=r;do b|=h.lane,h=h.next;while(h!==r)}else p===null&&(h.shared.lanes=0);Hl|=b,n.lanes=b,n.memoizedState=x}}function vE(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var d=n[r],h=d.callback;if(h!==null){if(d.callback=null,d=l,typeof h!="function")throw Error(ke(191,h));h.call(d)}}}var vD=new k5.Component().refs;function d0(n,r,l,d){r=n.memoizedState,l=l(d,r),l=l==null?r:bn({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Qp={isMounted:function(n){return(n=n._reactInternals)?Yl(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var d=No(),h=ma(n),p=fs(d,h);p.payload=r,l!=null&&(p.callback=l),r=pa(n,p,h),r!==null&&(ci(r,n,h,d),Qf(r,n,h))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var d=No(),h=ma(n),p=fs(d,h);p.tag=1,p.payload=r,l!=null&&(p.callback=l),r=pa(n,p,h),r!==null&&(ci(r,n,h,d),Qf(r,n,h))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=No(),d=ma(n),h=fs(l,d);h.tag=2,r!=null&&(h.callback=r),r=pa(n,h,d),r!==null&&(ci(r,n,d,l),Qf(r,n,d))}};function _E(n,r,l,d,h,p,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,p,b):r.prototype&&r.prototype.isPureReactComponent?!ih(l,d)||!ih(h,p):!0}function _D(n,r,l){var d=!1,h=ya,p=r.contextType;return typeof p=="object"&&p!==null?p=Rr(p):(h=Yo(r)?Fl:xo.current,d=r.contextTypes,p=(d=d!=null)?_d(n,h):ya),r=new r(l,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Qp,n.stateNode=r,r._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=p),r}function yE(n,r,l,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,d),r.state!==n&&Qp.enqueueReplaceState(r,r.state,null)}function u0(n,r,l,d){var h=n.stateNode;h.props=l,h.state=n.memoizedState,h.refs=vD,mw(n);var p=r.contextType;typeof p=="object"&&p!==null?h.context=Rr(p):(p=Yo(r)?Fl:xo.current,h.context=_d(n,p)),h.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(d0(n,r,p,l),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&Qp.enqueueReplaceState(h,h.state,null),Cp(n,l,h,d),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Eu(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(ke(309));var d=l.stateNode}if(!d)throw Error(ke(147,n));var h=d,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(b){var k=h.refs;k===vD&&(k=h.refs={}),b===null?delete k[p]:k[p]=b},r._stringRef=p,r)}if(typeof n!="string")throw Error(ke(284));if(!l._owner)throw Error(ke(290,n))}return n}function Lf(n,r){throw n=Object.prototype.toString.call(r),Error(ke(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function CE(n){var r=n._init;return r(n._payload)}function yD(n){function r(P,j){if(n){var O=P.deletions;O===null?(P.deletions=[j],P.flags|=16):O.push(j)}}function l(P,j){if(!n)return null;for(;j!==null;)r(P,j),j=j.sibling;return null}function d(P,j){for(P=new Map;j!==null;)j.key!==null?P.set(j.key,j):P.set(j.index,j),j=j.sibling;return P}function h(P,j){return P=ba(P,j),P.index=0,P.sibling=null,P}function p(P,j,O){return P.index=O,n?(O=P.alternate,O!==null?(O=O.index,O<j?(P.flags|=2,j):O):(P.flags|=2,j)):(P.flags|=1048576,j)}function b(P){return n&&P.alternate===null&&(P.flags|=2),P}function k(P,j,O,R){return j===null||j.tag!==6?(j=Xb(O,P.mode,R),j.return=P,j):(j=h(j,O),j.return=P,j)}function g(P,j,O,R){var W=O.type;return W===Zc?A(P,j,O.props.children,R,O.key):j!==null&&(j.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===oa&&CE(W)===j.type)?(R=h(j,O.props),R.ref=Eu(P,j,O),R.return=P,R):(R=np(O.type,O.key,O.props,null,P.mode,R),R.ref=Eu(P,j,O),R.return=P,R)}function v(P,j,O,R){return j===null||j.tag!==4||j.stateNode.containerInfo!==O.containerInfo||j.stateNode.implementation!==O.implementation?(j=ek(O,P.mode,R),j.return=P,j):(j=h(j,O.children||[]),j.return=P,j)}function A(P,j,O,R,W){return j===null||j.tag!==7?(j=Rl(O,P.mode,R,W),j.return=P,j):(j=h(j,O),j.return=P,j)}function x(P,j,O){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Xb(""+j,P.mode,O),j.return=P,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Ef:return O=np(j.type,j.key,j.props,null,P.mode,O),O.ref=Eu(P,null,j),O.return=P,O;case Qc:return j=ek(j,P.mode,O),j.return=P,j;case oa:var R=j._init;return x(P,R(j._payload),O)}if(Ru(j)||_u(j))return j=Rl(j,P.mode,O,null),j.return=P,j;Lf(P,j)}return null}function _(P,j,O,R){var W=j!==null?j.key:null;if(typeof O=="string"&&O!==""||typeof O=="number")return W!==null?null:k(P,j,""+O,R);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ef:return O.key===W?g(P,j,O,R):null;case Qc:return O.key===W?v(P,j,O,R):null;case oa:return W=O._init,_(P,j,W(O._payload),R)}if(Ru(O)||_u(O))return W!==null?null:A(P,j,O,R,null);Lf(P,O)}return null}function C(P,j,O,R,W){if(typeof R=="string"&&R!==""||typeof R=="number")return P=P.get(O)||null,k(j,P,""+R,W);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Ef:return P=P.get(R.key===null?O:R.key)||null,g(j,P,R,W);case Qc:return P=P.get(R.key===null?O:R.key)||null,v(j,P,R,W);case oa:var Q=R._init;return C(P,j,O,Q(R._payload),W)}if(Ru(R)||_u(R))return P=P.get(O)||null,A(j,P,R,W,null);Lf(j,R)}return null}function M(P,j,O,R){for(var W=null,Q=null,Y=j,V=j=0,ee=null;Y!==null&&V<O.length;V++){Y.index>V?(ee=Y,Y=null):ee=Y.sibling;var J=_(P,Y,O[V],R);if(J===null){Y===null&&(Y=ee);break}n&&Y&&J.alternate===null&&r(P,Y),j=p(J,j,V),Q===null?W=J:Q.sibling=J,Q=J,Y=ee}if(V===O.length)return l(P,Y),un&&Il(P,V),W;if(Y===null){for(;V<O.length;V++)Y=x(P,O[V],R),Y!==null&&(j=p(Y,j,V),Q===null?W=Y:Q.sibling=Y,Q=Y);return un&&Il(P,V),W}for(Y=d(P,Y);V<O.length;V++)ee=C(Y,P,V,O[V],R),ee!==null&&(n&&ee.alternate!==null&&Y.delete(ee.key===null?V:ee.key),j=p(ee,j,V),Q===null?W=ee:Q.sibling=ee,Q=ee);return n&&Y.forEach(function(ne){return r(P,ne)}),un&&Il(P,V),W}function T(P,j,O,R){var W=_u(O);if(typeof W!="function")throw Error(ke(150));if(O=W.call(O),O==null)throw Error(ke(151));for(var Q=W=null,Y=j,V=j=0,ee=null,J=O.next();Y!==null&&!J.done;V++,J=O.next()){Y.index>V?(ee=Y,Y=null):ee=Y.sibling;var ne=_(P,Y,J.value,R);if(ne===null){Y===null&&(Y=ee);break}n&&Y&&ne.alternate===null&&r(P,Y),j=p(ne,j,V),Q===null?W=ne:Q.sibling=ne,Q=ne,Y=ee}if(J.done)return l(P,Y),un&&Il(P,V),W;if(Y===null){for(;!J.done;V++,J=O.next())J=x(P,J.value,R),J!==null&&(j=p(J,j,V),Q===null?W=J:Q.sibling=J,Q=J);return un&&Il(P,V),W}for(Y=d(P,Y);!J.done;V++,J=O.next())J=C(Y,P,V,J.value,R),J!==null&&(n&&J.alternate!==null&&Y.delete(J.key===null?V:J.key),j=p(J,j,V),Q===null?W=J:Q.sibling=J,Q=J);return n&&Y.forEach(function(fe){return r(P,fe)}),un&&Il(P,V),W}function L(P,j,O,R){if(typeof O=="object"&&O!==null&&O.type===Zc&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case Ef:e:{for(var W=O.key,Q=j;Q!==null;){if(Q.key===W){if(W=O.type,W===Zc){if(Q.tag===7){l(P,Q.sibling),j=h(Q,O.props.children),j.return=P,P=j;break e}}else if(Q.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===oa&&CE(W)===Q.type){l(P,Q.sibling),j=h(Q,O.props),j.ref=Eu(P,Q,O),j.return=P,P=j;break e}l(P,Q);break}else r(P,Q);Q=Q.sibling}O.type===Zc?(j=Rl(O.props.children,P.mode,R,O.key),j.return=P,P=j):(R=np(O.type,O.key,O.props,null,P.mode,R),R.ref=Eu(P,j,O),R.return=P,P=R)}return b(P);case Qc:e:{for(Q=O.key;j!==null;){if(j.key===Q)if(j.tag===4&&j.stateNode.containerInfo===O.containerInfo&&j.stateNode.implementation===O.implementation){l(P,j.sibling),j=h(j,O.children||[]),j.return=P,P=j;break e}else{l(P,j);break}else r(P,j);j=j.sibling}j=ek(O,P.mode,R),j.return=P,P=j}return b(P);case oa:return Q=O._init,L(P,j,Q(O._payload),R)}if(Ru(O))return M(P,j,O,R);if(_u(O))return T(P,j,O,R);Lf(P,O)}return typeof O=="string"&&O!==""||typeof O=="number"?(O=""+O,j!==null&&j.tag===6?(l(P,j.sibling),j=h(j,O),j.return=P,P=j):(l(P,j),j=Xb(O,P.mode,R),j.return=P,P=j),b(P)):l(P,j)}return L}var Cd=yD(!0),CD=yD(!1),Eh={},$i=Da(Eh),ch=Da(Eh),dh=Da(Eh);function Bl(n){if(n===Eh)throw Error(ke(174));return n}function bw(n,r){switch(Jt(dh,r),Jt(ch,n),Jt($i,Eh),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Hk(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Hk(r,n)}on($i),Jt($i,r)}function Ad(){on($i),on(ch),on(dh)}function AD(n){Bl(dh.current);var r=Bl($i.current),l=Hk(r,n.type);r!==l&&(Jt(ch,n),Jt($i,l))}function kw(n){ch.current===n&&(on($i),on(ch))}var gn=Da(0);function Ap(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Gb=[];function ww(){for(var n=0;n<Gb.length;n++)Gb[n]._workInProgressVersionPrimary=null;Gb.length=0}var Zf=_s.ReactCurrentDispatcher,Kb=_s.ReactCurrentBatchConfig,Ul=0,mn=null,$n=null,oo=null,xp=!1,Gu=!1,uh=0,c6=0;function vo(){throw Error(ke(321))}function vw(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!di(n[l],r[l]))return!1;return!0}function _w(n,r,l,d,h,p){if(Ul=p,mn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Zf.current=n===null||n.memoizedState===null?f6:p6,n=l(d,h),Gu){p=0;do{if(Gu=!1,uh=0,25<=p)throw Error(ke(301));p+=1,oo=$n=null,r.updateQueue=null,Zf.current=g6,n=l(d,h)}while(Gu)}if(Zf.current=Ep,r=$n!==null&&$n.next!==null,Ul=0,oo=$n=mn=null,xp=!1,r)throw Error(ke(300));return n}function yw(){var n=uh!==0;return uh=0,n}function Vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oo===null?mn.memoizedState=oo=n:oo=oo.next=n,oo}function zr(){if($n===null){var n=mn.alternate;n=n!==null?n.memoizedState:null}else n=$n.next;var r=oo===null?mn.memoizedState:oo.next;if(r!==null)oo=r,$n=n;else{if(n===null)throw Error(ke(310));$n=n,n={memoizedState:$n.memoizedState,baseState:$n.baseState,baseQueue:$n.baseQueue,queue:$n.queue,next:null},oo===null?mn.memoizedState=oo=n:oo=oo.next=n}return oo}function hh(n,r){return typeof r=="function"?r(n):r}function Yb(n){var r=zr(),l=r.queue;if(l===null)throw Error(ke(311));l.lastRenderedReducer=n;var d=$n,h=d.baseQueue,p=l.pending;if(p!==null){if(h!==null){var b=h.next;h.next=p.next,p.next=b}d.baseQueue=h=p,l.pending=null}if(h!==null){p=h.next,d=d.baseState;var k=b=null,g=null,v=p;do{var A=v.lane;if((Ul&A)===A)g!==null&&(g=g.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),d=v.hasEagerState?v.eagerState:n(d,v.action);else{var x={lane:A,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};g===null?(k=g=x,b=d):g=g.next=x,mn.lanes|=A,Hl|=A}v=v.next}while(v!==null&&v!==p);g===null?b=d:g.next=k,di(d,r.memoizedState)||(Go=!0),r.memoizedState=d,r.baseState=b,r.baseQueue=g,l.lastRenderedState=d}if(n=l.interleaved,n!==null){h=n;do p=h.lane,mn.lanes|=p,Hl|=p,h=h.next;while(h!==n)}else h===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Qb(n){var r=zr(),l=r.queue;if(l===null)throw Error(ke(311));l.lastRenderedReducer=n;var d=l.dispatch,h=l.pending,p=r.memoizedState;if(h!==null){l.pending=null;var b=h=h.next;do p=n(p,b.action),b=b.next;while(b!==h);di(p,r.memoizedState)||(Go=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),l.lastRenderedState=p}return[p,d]}function xD(){}function ED(n,r){var l=mn,d=zr(),h=r(),p=!di(d.memoizedState,h);if(p&&(d.memoizedState=h,Go=!0),d=d.queue,Cw(TD.bind(null,l,d,n),[n]),d.getSnapshot!==r||p||oo!==null&&oo.memoizedState.tag&1){if(l.flags|=2048,fh(9,DD.bind(null,l,d,h,r),void 0,null),ro===null)throw Error(ke(349));Ul&30||SD(l,r,h)}return h}function SD(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=mn.updateQueue,r===null?(r={lastEffect:null,stores:null},mn.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function DD(n,r,l,d){r.value=l,r.getSnapshot=d,ID(r)&&MD(n)}function TD(n,r,l){return l(function(){ID(r)&&MD(n)})}function ID(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!di(n,l)}catch{return!0}}function MD(n){var r=ks(n,1);r!==null&&ci(r,n,1,-1)}function AE(n){var r=Vi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hh,lastRenderedState:n},r.queue=n,n=n.dispatch=h6.bind(null,mn,n),[r.memoizedState,n]}function fh(n,r,l,d){return n={tag:n,create:r,destroy:l,deps:d,next:null},r=mn.updateQueue,r===null?(r={lastEffect:null,stores:null},mn.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,r.lastEffect=n)),n}function ND(){return zr().memoizedState}function Jf(n,r,l,d){var h=Vi();mn.flags|=n,h.memoizedState=fh(1|r,l,void 0,d===void 0?null:d)}function Zp(n,r,l,d){var h=zr();d=d===void 0?null:d;var p=void 0;if($n!==null){var b=$n.memoizedState;if(p=b.destroy,d!==null&&vw(d,b.deps)){h.memoizedState=fh(r,l,p,d);return}}mn.flags|=n,h.memoizedState=fh(1|r,l,p,d)}function xE(n,r){return Jf(8390656,8,n,r)}function Cw(n,r){return Zp(2048,8,n,r)}function jD(n,r){return Zp(4,2,n,r)}function PD(n,r){return Zp(4,4,n,r)}function BD(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function OD(n,r,l){return l=l!=null?l.concat([n]):null,Zp(4,4,BD.bind(null,r,n),l)}function Aw(){}function LD(n,r){var l=zr();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&vw(r,d[1])?d[0]:(l.memoizedState=[n,r],n)}function RD(n,r){var l=zr();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&vw(r,d[1])?d[0]:(n=n(),l.memoizedState=[n,r],n)}function zD(n,r,l){return Ul&21?(di(l,r)||(l=U5(),mn.lanes|=l,Hl|=l,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Go=!0),n.memoizedState=l)}function d6(n,r){var l=Pt;Pt=l!==0&&4>l?l:4,n(!0);var d=Kb.transition;Kb.transition={};try{n(!1),r()}finally{Pt=l,Kb.transition=d}}function FD(){return zr().memoizedState}function u6(n,r,l){var d=ma(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},VD(n))UD(r,l);else if(l=kD(n,r,l,d),l!==null){var h=No();ci(l,n,d,h),HD(l,r,d)}}function h6(n,r,l){var d=ma(n),h={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(VD(n))UD(r,h);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var b=r.lastRenderedState,k=p(b,l);if(h.hasEagerState=!0,h.eagerState=k,di(k,b)){var g=r.interleaved;g===null?(h.next=h,gw(r)):(h.next=g.next,g.next=h),r.interleaved=h;return}}catch{}finally{}l=kD(n,r,h,d),l!==null&&(h=No(),ci(l,n,d,h),HD(l,r,d))}}function VD(n){var r=n.alternate;return n===mn||r!==null&&r===mn}function UD(n,r){Gu=xp=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function HD(n,r,l){if(l&4194240){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,tw(n,l)}}var Ep={readContext:Rr,useCallback:vo,useContext:vo,useEffect:vo,useImperativeHandle:vo,useInsertionEffect:vo,useLayoutEffect:vo,useMemo:vo,useReducer:vo,useRef:vo,useState:vo,useDebugValue:vo,useDeferredValue:vo,useTransition:vo,useMutableSource:vo,useSyncExternalStore:vo,useId:vo,unstable_isNewReconciler:!1},f6={readContext:Rr,useCallback:function(n,r){return Vi().memoizedState=[n,r===void 0?null:r],n},useContext:Rr,useEffect:xE,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Jf(4194308,4,BD.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Jf(4194308,4,n,r)},useInsertionEffect:function(n,r){return Jf(4,2,n,r)},useMemo:function(n,r){var l=Vi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var d=Vi();return r=l!==void 0?l(r):r,d.memoizedState=d.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},d.queue=n,n=n.dispatch=u6.bind(null,mn,n),[d.memoizedState,n]},useRef:function(n){var r=Vi();return n={current:n},r.memoizedState=n},useState:AE,useDebugValue:Aw,useDeferredValue:function(n){return Vi().memoizedState=n},useTransition:function(){var n=AE(!1),r=n[0];return n=d6.bind(null,n[1]),Vi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var d=mn,h=Vi();if(un){if(l===void 0)throw Error(ke(407));l=l()}else{if(l=r(),ro===null)throw Error(ke(349));Ul&30||SD(d,r,l)}h.memoizedState=l;var p={value:l,getSnapshot:r};return h.queue=p,xE(TD.bind(null,d,p,n),[n]),d.flags|=2048,fh(9,DD.bind(null,d,p,l,r),void 0,null),l},useId:function(){var n=Vi(),r=ro.identifierPrefix;if(un){var l=hs,d=us;l=(d&~(1<<32-li(d)-1)).toString(32)+l,r=":"+r+"R"+l,l=uh++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=c6++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},p6={readContext:Rr,useCallback:LD,useContext:Rr,useEffect:Cw,useImperativeHandle:OD,useInsertionEffect:jD,useLayoutEffect:PD,useMemo:RD,useReducer:Yb,useRef:ND,useState:function(){return Yb(hh)},useDebugValue:Aw,useDeferredValue:function(n){var r=zr();return zD(r,$n.memoizedState,n)},useTransition:function(){var n=Yb(hh)[0],r=zr().memoizedState;return[n,r]},useMutableSource:xD,useSyncExternalStore:ED,useId:FD,unstable_isNewReconciler:!1},g6={readContext:Rr,useCallback:LD,useContext:Rr,useEffect:Cw,useImperativeHandle:OD,useInsertionEffect:jD,useLayoutEffect:PD,useMemo:RD,useReducer:Qb,useRef:ND,useState:function(){return Qb(hh)},useDebugValue:Aw,useDeferredValue:function(n){var r=zr();return $n===null?r.memoizedState=n:zD(r,$n.memoizedState,n)},useTransition:function(){var n=Qb(hh)[0],r=zr().memoizedState;return[n,r]},useMutableSource:xD,useSyncExternalStore:ED,useId:FD,unstable_isNewReconciler:!1};function xd(n,r){try{var l="",d=r;do l+=HR(d),d=d.return;while(d);var h=l}catch(p){h=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:h,digest:null}}function Zb(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function h0(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var m6=typeof WeakMap=="function"?WeakMap:Map;function $D(n,r,l){l=fs(-1,l),l.tag=3,l.payload={element:null};var d=r.value;return l.callback=function(){Dp||(Dp=!0,y0=d),h0(n,r)},l}function WD(n,r,l){l=fs(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var h=r.value;l.payload=function(){return d(h)},l.callback=function(){h0(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(l.callback=function(){h0(n,r),typeof d!="function"&&(ga===null?ga=new Set([this]):ga.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})}),l}function EE(n,r,l){var d=n.pingCache;if(d===null){d=n.pingCache=new m6;var h=new Set;d.set(r,h)}else h=d.get(r),h===void 0&&(h=new Set,d.set(r,h));h.has(l)||(h.add(l),n=I6.bind(null,n,r,l),r.then(n,n))}function SE(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function DE(n,r,l,d,h){return n.mode&1?(n.flags|=65536,n.lanes=h,n):(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=fs(-1,1),r.tag=2,pa(l,r,1))),l.lanes|=1),n)}var b6=_s.ReactCurrentOwner,Go=!1;function Mo(n,r,l,d){r.child=n===null?CD(r,null,l,d):Cd(r,n.child,l,d)}function TE(n,r,l,d,h){l=l.render;var p=r.ref;return pd(r,h),d=_w(n,r,l,d,p,h),l=yw(),n!==null&&!Go?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,ws(n,r,h)):(un&&l&&cw(r),r.flags|=1,Mo(n,r,d,h),r.child)}function IE(n,r,l,d,h){if(n===null){var p=l.type;return typeof p=="function"&&!Nw(p)&&p.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=p,qD(n,r,p,d,h)):(n=np(l.type,null,d,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!(n.lanes&h)){var b=p.memoizedProps;if(l=l.compare,l=l!==null?l:ih,l(b,d)&&n.ref===r.ref)return ws(n,r,h)}return r.flags|=1,n=ba(p,d),n.ref=r.ref,n.return=r,r.child=n}function qD(n,r,l,d,h){if(n!==null){var p=n.memoizedProps;if(ih(p,d)&&n.ref===r.ref)if(Go=!1,r.pendingProps=d=p,(n.lanes&h)!==0)n.flags&131072&&(Go=!0);else return r.lanes=n.lanes,ws(n,r,h)}return f0(n,r,l,d,h)}function GD(n,r,l){var d=r.pendingProps,h=d.children,p=n!==null?n.memoizedState:null;if(d.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Jt(ad,ar),ar|=l;else{if(!(l&1073741824))return n=p!==null?p.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Jt(ad,ar),ar|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=p!==null?p.baseLanes:l,Jt(ad,ar),ar|=d}else p!==null?(d=p.baseLanes|l,r.memoizedState=null):d=l,Jt(ad,ar),ar|=d;return Mo(n,r,h,l),r.child}function KD(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function f0(n,r,l,d,h){var p=Yo(l)?Fl:xo.current;return p=_d(r,p),pd(r,h),l=_w(n,r,l,d,p,h),d=yw(),n!==null&&!Go?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~h,ws(n,r,h)):(un&&d&&cw(r),r.flags|=1,Mo(n,r,l,h),r.child)}function ME(n,r,l,d,h){if(Yo(l)){var p=!0;kp(r)}else p=!1;if(pd(r,h),r.stateNode===null)Xf(n,r),_D(r,l,d),u0(r,l,d,h),d=!0;else if(n===null){var b=r.stateNode,k=r.memoizedProps;b.props=k;var g=b.context,v=l.contextType;typeof v=="object"&&v!==null?v=Rr(v):(v=Yo(l)?Fl:xo.current,v=_d(r,v));var A=l.getDerivedStateFromProps,x=typeof A=="function"||typeof b.getSnapshotBeforeUpdate=="function";x||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(k!==d||g!==v)&&yE(r,b,d,v),ra=!1;var _=r.memoizedState;b.state=_,Cp(r,d,b,h),g=r.memoizedState,k!==d||_!==g||Ko.current||ra?(typeof A=="function"&&(d0(r,l,A,d),g=r.memoizedState),(k=ra||_E(r,l,k,d,_,g,v))?(x||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=g),b.props=d,b.state=g,b.context=v,d=k):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{b=r.stateNode,wD(n,r),k=r.memoizedProps,v=r.type===r.elementType?k:ti(r.type,k),b.props=v,x=r.pendingProps,_=b.context,g=l.contextType,typeof g=="object"&&g!==null?g=Rr(g):(g=Yo(l)?Fl:xo.current,g=_d(r,g));var C=l.getDerivedStateFromProps;(A=typeof C=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(k!==x||_!==g)&&yE(r,b,d,g),ra=!1,_=r.memoizedState,b.state=_,Cp(r,d,b,h);var M=r.memoizedState;k!==x||_!==M||Ko.current||ra?(typeof C=="function"&&(d0(r,l,C,d),M=r.memoizedState),(v=ra||_E(r,l,v,d,_,M,g)||!1)?(A||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(d,M,g),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(d,M,g)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||k===n.memoizedProps&&_===n.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&_===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=M),b.props=d,b.state=M,b.context=g,d=v):(typeof b.componentDidUpdate!="function"||k===n.memoizedProps&&_===n.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&_===n.memoizedState||(r.flags|=1024),d=!1)}return p0(n,r,l,d,p,h)}function p0(n,r,l,d,h,p){KD(n,r);var b=(r.flags&128)!==0;if(!d&&!b)return h&&mE(r,l,!1),ws(n,r,p);d=r.stateNode,b6.current=r;var k=b&&typeof l.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,n!==null&&b?(r.child=Cd(r,n.child,null,p),r.child=Cd(r,null,k,p)):Mo(n,r,k,p),r.memoizedState=d.state,h&&mE(r,l,!0),r.child}function YD(n){var r=n.stateNode;r.pendingContext?gE(n,r.pendingContext,r.pendingContext!==r.context):r.context&&gE(n,r.context,!1),bw(n,r.containerInfo)}function NE(n,r,l,d,h){return yd(),uw(h),r.flags|=256,Mo(n,r,l,d),r.child}var g0={dehydrated:null,treeContext:null,retryLane:0};function m0(n){return{baseLanes:n,cachePool:null,transitions:null}}function QD(n,r,l){var d=r.pendingProps,h=gn.current,p=!1,b=(r.flags&128)!==0,k;if((k=b)||(k=n!==null&&n.memoizedState===null?!1:(h&2)!==0),k?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Jt(gn,h&1),n===null)return l0(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(b=d.children,n=d.fallback,p?(d=r.mode,p=r.child,b={mode:"hidden",children:b},!(d&1)&&p!==null?(p.childLanes=0,p.pendingProps=b):p=eg(b,d,0,null),n=Rl(n,d,l,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=m0(l),r.memoizedState=g0,n):xw(r,b));if(h=n.memoizedState,h!==null&&(k=h.dehydrated,k!==null))return k6(n,r,b,d,k,h,l);if(p){p=d.fallback,b=r.mode,h=n.child,k=h.sibling;var g={mode:"hidden",children:d.children};return!(b&1)&&r.child!==h?(d=r.child,d.childLanes=0,d.pendingProps=g,r.deletions=null):(d=ba(h,g),d.subtreeFlags=h.subtreeFlags&14680064),k!==null?p=ba(k,p):(p=Rl(p,b,l,null),p.flags|=2),p.return=r,d.return=r,d.sibling=p,r.child=d,d=p,p=r.child,b=n.child.memoizedState,b=b===null?m0(l):{baseLanes:b.baseLanes|l,cachePool:null,transitions:b.transitions},p.memoizedState=b,p.childLanes=n.childLanes&~l,r.memoizedState=g0,d}return p=n.child,n=p.sibling,d=ba(p,{mode:"visible",children:d.children}),!(r.mode&1)&&(d.lanes=l),d.return=r,d.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=d,r.memoizedState=null,d}function xw(n,r){return r=eg({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Rf(n,r,l,d){return d!==null&&uw(d),Cd(r,n.child,null,l),n=xw(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function k6(n,r,l,d,h,p,b){if(l)return r.flags&256?(r.flags&=-257,d=Zb(Error(ke(422))),Rf(n,r,b,d)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=d.fallback,h=r.mode,d=eg({mode:"visible",children:d.children},h,0,null),p=Rl(p,h,b,null),p.flags|=2,d.return=r,p.return=r,d.sibling=p,r.child=d,r.mode&1&&Cd(r,n.child,null,b),r.child.memoizedState=m0(b),r.memoizedState=g0,p);if(!(r.mode&1))return Rf(n,r,b,null);if(h.data==="$!"){if(d=h.nextSibling&&h.nextSibling.dataset,d)var k=d.dgst;return d=k,p=Error(ke(419)),d=Zb(p,d,void 0),Rf(n,r,b,d)}if(k=(b&n.childLanes)!==0,Go||k){if(d=ro,d!==null){switch(b&-b){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=h&(d.suspendedLanes|b)?0:h,h!==0&&h!==p.retryLane&&(p.retryLane=h,ks(n,h),ci(d,n,h,-1))}return Mw(),d=Zb(Error(ke(421))),Rf(n,r,b,d)}return h.data==="$?"?(r.flags|=128,r.child=n.child,r=M6.bind(null,n),h._reactRetry=r,null):(n=p.treeContext,lr=fa(h.nextSibling),dr=r,un=!0,ri=null,n!==null&&(jr[Pr++]=us,jr[Pr++]=hs,jr[Pr++]=Vl,us=n.id,hs=n.overflow,Vl=r),r=xw(r,d.children),r.flags|=4096,r)}function jE(n,r,l){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),c0(n.return,r,l)}function Jb(n,r,l,d,h){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:h}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=d,p.tail=l,p.tailMode=h)}function ZD(n,r,l){var d=r.pendingProps,h=d.revealOrder,p=d.tail;if(Mo(n,r,d.children,l),d=gn.current,d&2)d=d&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&jE(n,l,r);else if(n.tag===19)jE(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(Jt(gn,d),!(r.mode&1))r.memoizedState=null;else switch(h){case"forwards":for(l=r.child,h=null;l!==null;)n=l.alternate,n!==null&&Ap(n)===null&&(h=l),l=l.sibling;l=h,l===null?(h=r.child,r.child=null):(h=l.sibling,l.sibling=null),Jb(r,!1,h,l,p);break;case"backwards":for(l=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&Ap(n)===null){r.child=h;break}n=h.sibling,h.sibling=l,l=h,h=n}Jb(r,!0,l,null,p);break;case"together":Jb(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Xf(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function ws(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Hl|=r.lanes,!(l&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(ke(153));if(r.child!==null){for(n=r.child,l=ba(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=ba(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function w6(n,r,l){switch(r.tag){case 3:YD(r),yd();break;case 5:AD(r);break;case 1:Yo(r.type)&&kp(r);break;case 4:bw(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,h=r.memoizedProps.value;Jt(_p,d._currentValue),d._currentValue=h;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(Jt(gn,gn.current&1),r.flags|=128,null):l&r.child.childLanes?QD(n,r,l):(Jt(gn,gn.current&1),n=ws(n,r,l),n!==null?n.sibling:null);Jt(gn,gn.current&1);break;case 19:if(d=(l&r.childLanes)!==0,n.flags&128){if(d)return ZD(n,r,l);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Jt(gn,gn.current),d)break;return null;case 22:case 23:return r.lanes=0,GD(n,r,l)}return ws(n,r,l)}var JD,b0,XD,eT;JD=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}};b0=function(){};XD=function(n,r,l,d){var h=n.memoizedProps;if(h!==d){n=r.stateNode,Bl($i.current);var p=null;switch(l){case"input":h=zk(n,h),d=zk(n,d),p=[];break;case"select":h=bn({},h,{value:void 0}),d=bn({},d,{value:void 0}),p=[];break;case"textarea":h=Uk(n,h),d=Uk(n,d),p=[];break;default:typeof h.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=mp)}$k(l,d);var b;l=null;for(v in h)if(!d.hasOwnProperty(v)&&h.hasOwnProperty(v)&&h[v]!=null)if(v==="style"){var k=h[v];for(b in k)k.hasOwnProperty(b)&&(l||(l={}),l[b]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(Ju.hasOwnProperty(v)?p||(p=[]):(p=p||[]).push(v,null));for(v in d){var g=d[v];if(k=h!=null?h[v]:void 0,d.hasOwnProperty(v)&&g!==k&&(g!=null||k!=null))if(v==="style")if(k){for(b in k)!k.hasOwnProperty(b)||g&&g.hasOwnProperty(b)||(l||(l={}),l[b]="");for(b in g)g.hasOwnProperty(b)&&k[b]!==g[b]&&(l||(l={}),l[b]=g[b])}else l||(p||(p=[]),p.push(v,l)),l=g;else v==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,k=k?k.__html:void 0,g!=null&&k!==g&&(p=p||[]).push(v,g)):v==="children"?typeof g!="string"&&typeof g!="number"||(p=p||[]).push(v,""+g):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(Ju.hasOwnProperty(v)?(g!=null&&v==="onScroll"&&nn("scroll",n),p||k===g||(p=[])):(p=p||[]).push(v,g))}l&&(p=p||[]).push("style",l);var v=p;(r.updateQueue=v)&&(r.flags|=4)}};eT=function(n,r,l,d){l!==d&&(r.flags|=4)};function Su(n,r){if(!un)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function _o(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(r)for(var h=n.child;h!==null;)l|=h.lanes|h.childLanes,d|=h.subtreeFlags&14680064,d|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)l|=h.lanes|h.childLanes,d|=h.subtreeFlags,d|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=d,n.childLanes=l,r}function v6(n,r,l){var d=r.pendingProps;switch(dw(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _o(r),null;case 1:return Yo(r.type)&&bp(),_o(r),null;case 3:return d=r.stateNode,Ad(),on(Ko),on(xo),ww(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(Of(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,ri!==null&&(x0(ri),ri=null))),b0(n,r),_o(r),null;case 5:kw(r);var h=Bl(dh.current);if(l=r.type,n!==null&&r.stateNode!=null)XD(n,r,l,d,h),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(ke(166));return _o(r),null}if(n=Bl($i.current),Of(r)){d=r.stateNode,l=r.type;var p=r.memoizedProps;switch(d[Ui]=r,d[lh]=p,n=(r.mode&1)!==0,l){case"dialog":nn("cancel",d),nn("close",d);break;case"iframe":case"object":case"embed":nn("load",d);break;case"video":case"audio":for(h=0;h<Fu.length;h++)nn(Fu[h],d);break;case"source":nn("error",d);break;case"img":case"image":case"link":nn("error",d),nn("load",d);break;case"details":nn("toggle",d);break;case"input":U2(d,p),nn("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!p.multiple},nn("invalid",d);break;case"textarea":$2(d,p),nn("invalid",d)}$k(l,p),h=null;for(var b in p)if(p.hasOwnProperty(b)){var k=p[b];b==="children"?typeof k=="string"?d.textContent!==k&&(p.suppressHydrationWarning!==!0&&Bf(d.textContent,k,n),h=["children",k]):typeof k=="number"&&d.textContent!==""+k&&(p.suppressHydrationWarning!==!0&&Bf(d.textContent,k,n),h=["children",""+k]):Ju.hasOwnProperty(b)&&k!=null&&b==="onScroll"&&nn("scroll",d)}switch(l){case"input":Sf(d),H2(d,p,!0);break;case"textarea":Sf(d),W2(d);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(d.onclick=mp)}d=h,r.updateQueue=d,d!==null&&(r.flags|=4)}else{b=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=S5(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=b.createElement(l,{is:d.is}):(n=b.createElement(l),l==="select"&&(b=n,d.multiple?b.multiple=!0:d.size&&(b.size=d.size))):n=b.createElementNS(n,l),n[Ui]=r,n[lh]=d,JD(n,r,!1,!1),r.stateNode=n;e:{switch(b=Wk(l,d),l){case"dialog":nn("cancel",n),nn("close",n),h=d;break;case"iframe":case"object":case"embed":nn("load",n),h=d;break;case"video":case"audio":for(h=0;h<Fu.length;h++)nn(Fu[h],n);h=d;break;case"source":nn("error",n),h=d;break;case"img":case"image":case"link":nn("error",n),nn("load",n),h=d;break;case"details":nn("toggle",n),h=d;break;case"input":U2(n,d),h=zk(n,d),nn("invalid",n);break;case"option":h=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},h=bn({},d,{value:void 0}),nn("invalid",n);break;case"textarea":$2(n,d),h=Uk(n,d),nn("invalid",n);break;default:h=d}$k(l,h),k=h;for(p in k)if(k.hasOwnProperty(p)){var g=k[p];p==="style"?I5(n,g):p==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&D5(n,g)):p==="children"?typeof g=="string"?(l!=="textarea"||g!=="")&&Xu(n,g):typeof g=="number"&&Xu(n,""+g):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Ju.hasOwnProperty(p)?g!=null&&p==="onScroll"&&nn("scroll",n):g!=null&&Y0(n,p,g,b))}switch(l){case"input":Sf(n),H2(n,d,!1);break;case"textarea":Sf(n),W2(n);break;case"option":d.value!=null&&n.setAttribute("value",""+_a(d.value));break;case"select":n.multiple=!!d.multiple,p=d.value,p!=null?dd(n,!!d.multiple,p,!1):d.defaultValue!=null&&dd(n,!!d.multiple,d.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=mp)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return _o(r),null;case 6:if(n&&r.stateNode!=null)eT(n,r,n.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(ke(166));if(l=Bl(dh.current),Bl($i.current),Of(r)){if(d=r.stateNode,l=r.memoizedProps,d[Ui]=r,(p=d.nodeValue!==l)&&(n=dr,n!==null))switch(n.tag){case 3:Bf(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Bf(d.nodeValue,l,(n.mode&1)!==0)}p&&(r.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Ui]=r,r.stateNode=d}return _o(r),null;case 13:if(on(gn),d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(un&&lr!==null&&r.mode&1&&!(r.flags&128))bD(),yd(),r.flags|=98560,p=!1;else if(p=Of(r),d!==null&&d.dehydrated!==null){if(n===null){if(!p)throw Error(ke(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(ke(317));p[Ui]=r}else yd(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;_o(r),p=!1}else ri!==null&&(x0(ri),ri=null),p=!0;if(!p)return r.flags&65536?r:null}return r.flags&128?(r.lanes=l,r):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(r.child.flags|=8192,r.mode&1&&(n===null||gn.current&1?Wn===0&&(Wn=3):Mw())),r.updateQueue!==null&&(r.flags|=4),_o(r),null);case 4:return Ad(),b0(n,r),n===null&&sh(r.stateNode.containerInfo),_o(r),null;case 10:return pw(r.type._context),_o(r),null;case 17:return Yo(r.type)&&bp(),_o(r),null;case 19:if(on(gn),p=r.memoizedState,p===null)return _o(r),null;if(d=(r.flags&128)!==0,b=p.rendering,b===null)if(d)Su(p,!1);else{if(Wn!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(b=Ap(n),b!==null){for(r.flags|=128,Su(p,!1),d=b.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=l,l=r.child;l!==null;)p=l,n=d,p.flags&=14680066,b=p.alternate,b===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=b.childLanes,p.lanes=b.lanes,p.child=b.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=b.memoizedProps,p.memoizedState=b.memoizedState,p.updateQueue=b.updateQueue,p.type=b.type,n=b.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Jt(gn,gn.current&1|2),r.child}n=n.sibling}p.tail!==null&&Tn()>Ed&&(r.flags|=128,d=!0,Su(p,!1),r.lanes=4194304)}else{if(!d)if(n=Ap(b),n!==null){if(r.flags|=128,d=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Su(p,!0),p.tail===null&&p.tailMode==="hidden"&&!b.alternate&&!un)return _o(r),null}else 2*Tn()-p.renderingStartTime>Ed&&l!==1073741824&&(r.flags|=128,d=!0,Su(p,!1),r.lanes=4194304);p.isBackwards?(b.sibling=r.child,r.child=b):(l=p.last,l!==null?l.sibling=b:r.child=b,p.last=b)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=Tn(),r.sibling=null,l=gn.current,Jt(gn,d?l&1|2:l&1),r):(_o(r),null);case 22:case 23:return Iw(),d=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(r.flags|=8192),d&&r.mode&1?ar&1073741824&&(_o(r),r.subtreeFlags&6&&(r.flags|=8192)):_o(r),null;case 24:return null;case 25:return null}throw Error(ke(156,r.tag))}function _6(n,r){switch(dw(r),r.tag){case 1:return Yo(r.type)&&bp(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ad(),on(Ko),on(xo),ww(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return kw(r),null;case 13:if(on(gn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(ke(340));yd()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return on(gn),null;case 4:return Ad(),null;case 10:return pw(r.type._context),null;case 22:case 23:return Iw(),null;case 24:return null;default:return null}}var zf=!1,Ao=!1,y6=typeof WeakSet=="function"?WeakSet:Set,Me=null;function sd(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){yn(n,r,d)}else l.current=null}function k0(n,r,l){try{l()}catch(d){yn(n,r,d)}}var PE=!1;function C6(n,r){if(t0=fp,n=rD(),lw(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var h=d.anchorOffset,p=d.focusNode;d=d.focusOffset;try{l.nodeType,p.nodeType}catch{l=null;break e}var b=0,k=-1,g=-1,v=0,A=0,x=n,_=null;t:for(;;){for(var C;x!==l||h!==0&&x.nodeType!==3||(k=b+h),x!==p||d!==0&&x.nodeType!==3||(g=b+d),x.nodeType===3&&(b+=x.nodeValue.length),(C=x.firstChild)!==null;)_=x,x=C;for(;;){if(x===n)break t;if(_===l&&++v===h&&(k=b),_===p&&++A===d&&(g=b),(C=x.nextSibling)!==null)break;x=_,_=x.parentNode}x=C}l=k===-1||g===-1?null:{start:k,end:g}}else l=null}l=l||{start:0,end:0}}else l=null;for(n0={focusedElem:n,selectionRange:l},fp=!1,Me=r;Me!==null;)if(r=Me,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Me=n;else for(;Me!==null;){r=Me;try{var M=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var T=M.memoizedProps,L=M.memoizedState,P=r.stateNode,j=P.getSnapshotBeforeUpdate(r.elementType===r.type?T:ti(r.type,T),L);P.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var O=r.stateNode.containerInfo;O.nodeType===1?O.textContent="":O.nodeType===9&&O.documentElement&&O.removeChild(O.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ke(163))}}catch(R){yn(r,r.return,R)}if(n=r.sibling,n!==null){n.return=r.return,Me=n;break}Me=r.return}return M=PE,PE=!1,M}function Ku(n,r,l){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var h=d=d.next;do{if((h.tag&n)===n){var p=h.destroy;h.destroy=void 0,p!==void 0&&k0(r,l,p)}h=h.next}while(h!==d)}}function Jp(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==r)}}function w0(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function tT(n){var r=n.alternate;r!==null&&(n.alternate=null,tT(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Ui],delete r[lh],delete r[i0],delete r[i6],delete r[s6])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function nT(n){return n.tag===5||n.tag===3||n.tag===4}function BE(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||nT(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function v0(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=mp));else if(d!==4&&(n=n.child,n!==null))for(v0(n,r,l),n=n.sibling;n!==null;)v0(n,r,l),n=n.sibling}function _0(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(_0(n,r,l),n=n.sibling;n!==null;)_0(n,r,l),n=n.sibling}var uo=null,ni=!1;function ta(n,r,l){for(l=l.child;l!==null;)oT(n,r,l),l=l.sibling}function oT(n,r,l){if(Hi&&typeof Hi.onCommitFiberUnmount=="function")try{Hi.onCommitFiberUnmount($p,l)}catch{}switch(l.tag){case 5:Ao||sd(l,r);case 6:var d=uo,h=ni;uo=null,ta(n,r,l),uo=d,ni=h,uo!==null&&(ni?(n=uo,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):uo.removeChild(l.stateNode));break;case 18:uo!==null&&(ni?(n=uo,l=l.stateNode,n.nodeType===8?Wb(n.parentNode,l):n.nodeType===1&&Wb(n,l),oh(n)):Wb(uo,l.stateNode));break;case 4:d=uo,h=ni,uo=l.stateNode.containerInfo,ni=!0,ta(n,r,l),uo=d,ni=h;break;case 0:case 11:case 14:case 15:if(!Ao&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){h=d=d.next;do{var p=h,b=p.destroy;p=p.tag,b!==void 0&&(p&2||p&4)&&k0(l,r,b),h=h.next}while(h!==d)}ta(n,r,l);break;case 1:if(!Ao&&(sd(l,r),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(k){yn(l,r,k)}ta(n,r,l);break;case 21:ta(n,r,l);break;case 22:l.mode&1?(Ao=(d=Ao)||l.memoizedState!==null,ta(n,r,l),Ao=d):ta(n,r,l);break;default:ta(n,r,l)}}function OE(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new y6),r.forEach(function(d){var h=N6.bind(null,n,d);l.has(d)||(l.add(d),d.then(h,h))})}}function ei(n,r){var l=r.deletions;if(l!==null)for(var d=0;d<l.length;d++){var h=l[d];try{var p=n,b=r,k=b;e:for(;k!==null;){switch(k.tag){case 5:uo=k.stateNode,ni=!1;break e;case 3:uo=k.stateNode.containerInfo,ni=!0;break e;case 4:uo=k.stateNode.containerInfo,ni=!0;break e}k=k.return}if(uo===null)throw Error(ke(160));oT(p,b,h),uo=null,ni=!1;var g=h.alternate;g!==null&&(g.return=null),h.return=null}catch(v){yn(h,r,v)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)rT(r,n),r=r.sibling}function rT(n,r){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ei(r,n),Ri(n),d&4){try{Ku(3,n,n.return),Jp(3,n)}catch(T){yn(n,n.return,T)}try{Ku(5,n,n.return)}catch(T){yn(n,n.return,T)}}break;case 1:ei(r,n),Ri(n),d&512&&l!==null&&sd(l,l.return);break;case 5:if(ei(r,n),Ri(n),d&512&&l!==null&&sd(l,l.return),n.flags&32){var h=n.stateNode;try{Xu(h,"")}catch(T){yn(n,n.return,T)}}if(d&4&&(h=n.stateNode,h!=null)){var p=n.memoizedProps,b=l!==null?l.memoizedProps:p,k=n.type,g=n.updateQueue;if(n.updateQueue=null,g!==null)try{k==="input"&&p.type==="radio"&&p.name!=null&&x5(h,p),Wk(k,b);var v=Wk(k,p);for(b=0;b<g.length;b+=2){var A=g[b],x=g[b+1];A==="style"?I5(h,x):A==="dangerouslySetInnerHTML"?D5(h,x):A==="children"?Xu(h,x):Y0(h,A,x,v)}switch(k){case"input":Fk(h,p);break;case"textarea":E5(h,p);break;case"select":var _=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!p.multiple;var C=p.value;C!=null?dd(h,!!p.multiple,C,!1):_!==!!p.multiple&&(p.defaultValue!=null?dd(h,!!p.multiple,p.defaultValue,!0):dd(h,!!p.multiple,p.multiple?[]:"",!1))}h[lh]=p}catch(T){yn(n,n.return,T)}}break;case 6:if(ei(r,n),Ri(n),d&4){if(n.stateNode===null)throw Error(ke(162));h=n.stateNode,p=n.memoizedProps;try{h.nodeValue=p}catch(T){yn(n,n.return,T)}}break;case 3:if(ei(r,n),Ri(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{oh(r.containerInfo)}catch(T){yn(n,n.return,T)}break;case 4:ei(r,n),Ri(n);break;case 13:ei(r,n),Ri(n),h=n.child,h.flags&8192&&(p=h.memoizedState!==null,h.stateNode.isHidden=p,!p||h.alternate!==null&&h.alternate.memoizedState!==null||(Dw=Tn())),d&4&&OE(n);break;case 22:if(A=l!==null&&l.memoizedState!==null,n.mode&1?(Ao=(v=Ao)||A,ei(r,n),Ao=v):ei(r,n),Ri(n),d&8192){if(v=n.memoizedState!==null,(n.stateNode.isHidden=v)&&!A&&n.mode&1)for(Me=n,A=n.child;A!==null;){for(x=Me=A;Me!==null;){switch(_=Me,C=_.child,_.tag){case 0:case 11:case 14:case 15:Ku(4,_,_.return);break;case 1:sd(_,_.return);var M=_.stateNode;if(typeof M.componentWillUnmount=="function"){d=_,l=_.return;try{r=d,M.props=r.memoizedProps,M.state=r.memoizedState,M.componentWillUnmount()}catch(T){yn(d,l,T)}}break;case 5:sd(_,_.return);break;case 22:if(_.memoizedState!==null){RE(x);continue}}C!==null?(C.return=_,Me=C):RE(x)}A=A.sibling}e:for(A=null,x=n;;){if(x.tag===5){if(A===null){A=x;try{h=x.stateNode,v?(p=h.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(k=x.stateNode,g=x.memoizedProps.style,b=g!=null&&g.hasOwnProperty("display")?g.display:null,k.style.display=T5("display",b))}catch(T){yn(n,n.return,T)}}}else if(x.tag===6){if(A===null)try{x.stateNode.nodeValue=v?"":x.memoizedProps}catch(T){yn(n,n.return,T)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===n)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;A===x&&(A=null),x=x.return}A===x&&(A=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:ei(r,n),Ri(n),d&4&&OE(n);break;case 21:break;default:ei(r,n),Ri(n)}}function Ri(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(nT(l)){var d=l;break e}l=l.return}throw Error(ke(160))}switch(d.tag){case 5:var h=d.stateNode;d.flags&32&&(Xu(h,""),d.flags&=-33);var p=BE(n);_0(n,p,h);break;case 3:case 4:var b=d.stateNode.containerInfo,k=BE(n);v0(n,k,b);break;default:throw Error(ke(161))}}catch(g){yn(n,n.return,g)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function A6(n,r,l){Me=n,iT(n)}function iT(n,r,l){for(var d=(n.mode&1)!==0;Me!==null;){var h=Me,p=h.child;if(h.tag===22&&d){var b=h.memoizedState!==null||zf;if(!b){var k=h.alternate,g=k!==null&&k.memoizedState!==null||Ao;k=zf;var v=Ao;if(zf=b,(Ao=g)&&!v)for(Me=h;Me!==null;)b=Me,g=b.child,b.tag===22&&b.memoizedState!==null?zE(h):g!==null?(g.return=b,Me=g):zE(h);for(;p!==null;)Me=p,iT(p),p=p.sibling;Me=h,zf=k,Ao=v}LE(n)}else h.subtreeFlags&8772&&p!==null?(p.return=h,Me=p):LE(n)}}function LE(n){for(;Me!==null;){var r=Me;if(r.flags&8772){var l=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Ao||Jp(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!Ao)if(l===null)d.componentDidMount();else{var h=r.elementType===r.type?l.memoizedProps:ti(r.type,l.memoizedProps);d.componentDidUpdate(h,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&vE(r,p,d);break;case 3:var b=r.updateQueue;if(b!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}vE(r,b,l)}break;case 5:var k=r.stateNode;if(l===null&&r.flags&4){l=k;var g=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&l.focus();break;case"img":g.src&&(l.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var v=r.alternate;if(v!==null){var A=v.memoizedState;if(A!==null){var x=A.dehydrated;x!==null&&oh(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ke(163))}Ao||r.flags&512&&w0(r)}catch(_){yn(r,r.return,_)}}if(r===n){Me=null;break}if(l=r.sibling,l!==null){l.return=r.return,Me=l;break}Me=r.return}}function RE(n){for(;Me!==null;){var r=Me;if(r===n){Me=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Me=l;break}Me=r.return}}function zE(n){for(;Me!==null;){var r=Me;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Jp(4,r)}catch(g){yn(r,l,g)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var h=r.return;try{d.componentDidMount()}catch(g){yn(r,h,g)}}var p=r.return;try{w0(r)}catch(g){yn(r,p,g)}break;case 5:var b=r.return;try{w0(r)}catch(g){yn(r,b,g)}}}catch(g){yn(r,r.return,g)}if(r===n){Me=null;break}var k=r.sibling;if(k!==null){k.return=r.return,Me=k;break}Me=r.return}}var x6=Math.ceil,Sp=_s.ReactCurrentDispatcher,Ew=_s.ReactCurrentOwner,Or=_s.ReactCurrentBatchConfig,bt=0,ro=null,Ln=null,fo=0,ar=0,ad=Da(0),Wn=0,ph=null,Hl=0,Xp=0,Sw=0,Yu=null,qo=null,Dw=0,Ed=1/0,cs=null,Dp=!1,y0=null,ga=null,Ff=!1,ca=null,Tp=0,Qu=0,C0=null,ep=-1,tp=0;function No(){return bt&6?Tn():ep!==-1?ep:ep=Tn()}function ma(n){return n.mode&1?bt&2&&fo!==0?fo&-fo:l6.transition!==null?(tp===0&&(tp=U5()),tp):(n=Pt,n!==0||(n=window.event,n=n===void 0?16:Y5(n.type)),n):1}function ci(n,r,l,d){if(50<Qu)throw Qu=0,C0=null,Error(ke(185));Ch(n,l,d),(!(bt&2)||n!==ro)&&(n===ro&&(!(bt&2)&&(Xp|=l),Wn===4&&sa(n,fo)),Qo(n,d),l===1&&bt===0&&!(r.mode&1)&&(Ed=Tn()+500,Yp&&Ta()))}function Qo(n,r){var l=n.callbackNode;lz(n,r);var d=hp(n,n===ro?fo:0);if(d===0)l!==null&&K2(l),n.callbackNode=null,n.callbackPriority=0;else if(r=d&-d,n.callbackPriority!==r){if(l!=null&&K2(l),r===1)n.tag===0?a6(FE.bind(null,n)):pD(FE.bind(null,n)),o6(function(){!(bt&6)&&Ta()}),l=null;else{switch(H5(d)){case 1:l=ew;break;case 4:l=F5;break;case 16:l=up;break;case 536870912:l=V5;break;default:l=up}l=fT(l,sT.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function sT(n,r){if(ep=-1,tp=0,bt&6)throw Error(ke(327));var l=n.callbackNode;if(gd()&&n.callbackNode!==l)return null;var d=hp(n,n===ro?fo:0);if(d===0)return null;if(d&30||d&n.expiredLanes||r)r=Ip(n,d);else{r=d;var h=bt;bt|=2;var p=lT();(ro!==n||fo!==r)&&(cs=null,Ed=Tn()+500,Ll(n,r));do try{D6();break}catch(k){aT(n,k)}while(1);fw(),Sp.current=p,bt=h,Ln!==null?r=0:(ro=null,fo=0,r=Wn)}if(r!==0){if(r===2&&(h=Qk(n),h!==0&&(d=h,r=A0(n,h))),r===1)throw l=ph,Ll(n,0),sa(n,d),Qo(n,Tn()),l;if(r===6)sa(n,d);else{if(h=n.current.alternate,!(d&30)&&!E6(h)&&(r=Ip(n,d),r===2&&(p=Qk(n),p!==0&&(d=p,r=A0(n,p))),r===1))throw l=ph,Ll(n,0),sa(n,d),Qo(n,Tn()),l;switch(n.finishedWork=h,n.finishedLanes=d,r){case 0:case 1:throw Error(ke(345));case 2:Ml(n,qo,cs);break;case 3:if(sa(n,d),(d&130023424)===d&&(r=Dw+500-Tn(),10<r)){if(hp(n,0)!==0)break;if(h=n.suspendedLanes,(h&d)!==d){No(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=r0(Ml.bind(null,n,qo,cs),r);break}Ml(n,qo,cs);break;case 4:if(sa(n,d),(d&4194240)===d)break;for(r=n.eventTimes,h=-1;0<d;){var b=31-li(d);p=1<<b,b=r[b],b>h&&(h=b),d&=~p}if(d=h,d=Tn()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*x6(d/1960))-d,10<d){n.timeoutHandle=r0(Ml.bind(null,n,qo,cs),d);break}Ml(n,qo,cs);break;case 5:Ml(n,qo,cs);break;default:throw Error(ke(329))}}}return Qo(n,Tn()),n.callbackNode===l?sT.bind(null,n):null}function A0(n,r){var l=Yu;return n.current.memoizedState.isDehydrated&&(Ll(n,r).flags|=256),n=Ip(n,r),n!==2&&(r=qo,qo=l,r!==null&&x0(r)),n}function x0(n){qo===null?qo=n:qo.push.apply(qo,n)}function E6(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var h=l[d],p=h.getSnapshot;h=h.value;try{if(!di(p(),h))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function sa(n,r){for(r&=~Sw,r&=~Xp,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-li(r),d=1<<l;n[l]=-1,r&=~d}}function FE(n){if(bt&6)throw Error(ke(327));gd();var r=hp(n,0);if(!(r&1))return Qo(n,Tn()),null;var l=Ip(n,r);if(n.tag!==0&&l===2){var d=Qk(n);d!==0&&(r=d,l=A0(n,d))}if(l===1)throw l=ph,Ll(n,0),sa(n,r),Qo(n,Tn()),l;if(l===6)throw Error(ke(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Ml(n,qo,cs),Qo(n,Tn()),null}function Tw(n,r){var l=bt;bt|=1;try{return n(r)}finally{bt=l,bt===0&&(Ed=Tn()+500,Yp&&Ta())}}function $l(n){ca!==null&&ca.tag===0&&!(bt&6)&&gd();var r=bt;bt|=1;var l=Or.transition,d=Pt;try{if(Or.transition=null,Pt=1,n)return n()}finally{Pt=d,Or.transition=l,bt=r,!(bt&6)&&Ta()}}function Iw(){ar=ad.current,on(ad)}function Ll(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,n6(l)),Ln!==null)for(l=Ln.return;l!==null;){var d=l;switch(dw(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&bp();break;case 3:Ad(),on(Ko),on(xo),ww();break;case 5:kw(d);break;case 4:Ad();break;case 13:on(gn);break;case 19:on(gn);break;case 10:pw(d.type._context);break;case 22:case 23:Iw()}l=l.return}if(ro=n,Ln=n=ba(n.current,null),fo=ar=r,Wn=0,ph=null,Sw=Xp=Hl=0,qo=Yu=null,Pl!==null){for(r=0;r<Pl.length;r++)if(l=Pl[r],d=l.interleaved,d!==null){l.interleaved=null;var h=d.next,p=l.pending;if(p!==null){var b=p.next;p.next=h,d.next=b}l.pending=d}Pl=null}return n}function aT(n,r){do{var l=Ln;try{if(fw(),Zf.current=Ep,xp){for(var d=mn.memoizedState;d!==null;){var h=d.queue;h!==null&&(h.pending=null),d=d.next}xp=!1}if(Ul=0,oo=$n=mn=null,Gu=!1,uh=0,Ew.current=null,l===null||l.return===null){Wn=1,ph=r,Ln=null;break}e:{var p=n,b=l.return,k=l,g=r;if(r=fo,k.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var v=g,A=k,x=A.tag;if(!(A.mode&1)&&(x===0||x===11||x===15)){var _=A.alternate;_?(A.updateQueue=_.updateQueue,A.memoizedState=_.memoizedState,A.lanes=_.lanes):(A.updateQueue=null,A.memoizedState=null)}var C=SE(b);if(C!==null){C.flags&=-257,DE(C,b,k,p,r),C.mode&1&&EE(p,v,r),r=C,g=v;var M=r.updateQueue;if(M===null){var T=new Set;T.add(g),r.updateQueue=T}else M.add(g);break e}else{if(!(r&1)){EE(p,v,r),Mw();break e}g=Error(ke(426))}}else if(un&&k.mode&1){var L=SE(b);if(L!==null){!(L.flags&65536)&&(L.flags|=256),DE(L,b,k,p,r),uw(xd(g,k));break e}}p=g=xd(g,k),Wn!==4&&(Wn=2),Yu===null?Yu=[p]:Yu.push(p),p=b;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var P=$D(p,g,r);wE(p,P);break e;case 1:k=g;var j=p.type,O=p.stateNode;if(!(p.flags&128)&&(typeof j.getDerivedStateFromError=="function"||O!==null&&typeof O.componentDidCatch=="function"&&(ga===null||!ga.has(O)))){p.flags|=65536,r&=-r,p.lanes|=r;var R=WD(p,k,r);wE(p,R);break e}}p=p.return}while(p!==null)}dT(l)}catch(W){r=W,Ln===l&&l!==null&&(Ln=l=l.return);continue}break}while(1)}function lT(){var n=Sp.current;return Sp.current=Ep,n===null?Ep:n}function Mw(){(Wn===0||Wn===3||Wn===2)&&(Wn=4),ro===null||!(Hl&268435455)&&!(Xp&268435455)||sa(ro,fo)}function Ip(n,r){var l=bt;bt|=2;var d=lT();(ro!==n||fo!==r)&&(cs=null,Ll(n,r));do try{S6();break}catch(h){aT(n,h)}while(1);if(fw(),bt=l,Sp.current=d,Ln!==null)throw Error(ke(261));return ro=null,fo=0,Wn}function S6(){for(;Ln!==null;)cT(Ln)}function D6(){for(;Ln!==null&&!XR();)cT(Ln)}function cT(n){var r=hT(n.alternate,n,ar);n.memoizedProps=n.pendingProps,r===null?dT(n):Ln=r,Ew.current=null}function dT(n){var r=n;do{var l=r.alternate;if(n=r.return,r.flags&32768){if(l=_6(l,r),l!==null){l.flags&=32767,Ln=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Wn=6,Ln=null;return}}else if(l=v6(l,r,ar),l!==null){Ln=l;return}if(r=r.sibling,r!==null){Ln=r;return}Ln=r=n}while(r!==null);Wn===0&&(Wn=5)}function Ml(n,r,l){var d=Pt,h=Or.transition;try{Or.transition=null,Pt=1,T6(n,r,l,d)}finally{Or.transition=h,Pt=d}return null}function T6(n,r,l,d){do gd();while(ca!==null);if(bt&6)throw Error(ke(327));l=n.finishedWork;var h=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(ke(177));n.callbackNode=null,n.callbackPriority=0;var p=l.lanes|l.childLanes;if(cz(n,p),n===ro&&(Ln=ro=null,fo=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Ff||(Ff=!0,fT(up,function(){return gd(),null})),p=(l.flags&15990)!==0,l.subtreeFlags&15990||p){p=Or.transition,Or.transition=null;var b=Pt;Pt=1;var k=bt;bt|=4,Ew.current=null,C6(n,l),rT(l,n),Yz(n0),fp=!!t0,n0=t0=null,n.current=l,A6(l),ez(),bt=k,Pt=b,Or.transition=p}else n.current=l;if(Ff&&(Ff=!1,ca=n,Tp=h),p=n.pendingLanes,p===0&&(ga=null),oz(l.stateNode),Qo(n,Tn()),r!==null)for(d=n.onRecoverableError,l=0;l<r.length;l++)h=r[l],d(h.value,{componentStack:h.stack,digest:h.digest});if(Dp)throw Dp=!1,n=y0,y0=null,n;return Tp&1&&n.tag!==0&&gd(),p=n.pendingLanes,p&1?n===C0?Qu++:(Qu=0,C0=n):Qu=0,Ta(),null}function gd(){if(ca!==null){var n=H5(Tp),r=Or.transition,l=Pt;try{if(Or.transition=null,Pt=16>n?16:n,ca===null)var d=!1;else{if(n=ca,ca=null,Tp=0,bt&6)throw Error(ke(331));var h=bt;for(bt|=4,Me=n.current;Me!==null;){var p=Me,b=p.child;if(Me.flags&16){var k=p.deletions;if(k!==null){for(var g=0;g<k.length;g++){var v=k[g];for(Me=v;Me!==null;){var A=Me;switch(A.tag){case 0:case 11:case 15:Ku(8,A,p)}var x=A.child;if(x!==null)x.return=A,Me=x;else for(;Me!==null;){A=Me;var _=A.sibling,C=A.return;if(tT(A),A===v){Me=null;break}if(_!==null){_.return=C,Me=_;break}Me=C}}}var M=p.alternate;if(M!==null){var T=M.child;if(T!==null){M.child=null;do{var L=T.sibling;T.sibling=null,T=L}while(T!==null)}}Me=p}}if(p.subtreeFlags&2064&&b!==null)b.return=p,Me=b;else e:for(;Me!==null;){if(p=Me,p.flags&2048)switch(p.tag){case 0:case 11:case 15:Ku(9,p,p.return)}var P=p.sibling;if(P!==null){P.return=p.return,Me=P;break e}Me=p.return}}var j=n.current;for(Me=j;Me!==null;){b=Me;var O=b.child;if(b.subtreeFlags&2064&&O!==null)O.return=b,Me=O;else e:for(b=j;Me!==null;){if(k=Me,k.flags&2048)try{switch(k.tag){case 0:case 11:case 15:Jp(9,k)}}catch(W){yn(k,k.return,W)}if(k===b){Me=null;break e}var R=k.sibling;if(R!==null){R.return=k.return,Me=R;break e}Me=k.return}}if(bt=h,Ta(),Hi&&typeof Hi.onPostCommitFiberRoot=="function")try{Hi.onPostCommitFiberRoot($p,n)}catch{}d=!0}return d}finally{Pt=l,Or.transition=r}}return!1}function VE(n,r,l){r=xd(l,r),r=$D(n,r,1),n=pa(n,r,1),r=No(),n!==null&&(Ch(n,1,r),Qo(n,r))}function yn(n,r,l){if(n.tag===3)VE(n,n,l);else for(;r!==null;){if(r.tag===3){VE(r,n,l);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(ga===null||!ga.has(d))){n=xd(l,n),n=WD(r,n,1),r=pa(r,n,1),n=No(),r!==null&&(Ch(r,1,n),Qo(r,n));break}}r=r.return}}function I6(n,r,l){var d=n.pingCache;d!==null&&d.delete(r),r=No(),n.pingedLanes|=n.suspendedLanes&l,ro===n&&(fo&l)===l&&(Wn===4||Wn===3&&(fo&130023424)===fo&&500>Tn()-Dw?Ll(n,0):Sw|=l),Qo(n,r)}function uT(n,r){r===0&&(n.mode&1?(r=If,If<<=1,!(If&130023424)&&(If=4194304)):r=1);var l=No();n=ks(n,r),n!==null&&(Ch(n,r,l),Qo(n,l))}function M6(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),uT(n,l)}function N6(n,r){var l=0;switch(n.tag){case 13:var d=n.stateNode,h=n.memoizedState;h!==null&&(l=h.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(ke(314))}d!==null&&d.delete(r),uT(n,l)}var hT;hT=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Ko.current)Go=!0;else{if(!(n.lanes&l)&&!(r.flags&128))return Go=!1,w6(n,r,l);Go=!!(n.flags&131072)}else Go=!1,un&&r.flags&1048576&&gD(r,vp,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;Xf(n,r),n=r.pendingProps;var h=_d(r,xo.current);pd(r,l),h=_w(null,r,d,n,h,l);var p=yw();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Yo(d)?(p=!0,kp(r)):p=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,mw(r),h.updater=Qp,r.stateNode=h,h._reactInternals=r,u0(r,d,n,l),r=p0(null,r,d,!0,p,l)):(r.tag=0,un&&p&&cw(r),Mo(null,r,h,l),r=r.child),r;case 16:d=r.elementType;e:{switch(Xf(n,r),n=r.pendingProps,h=d._init,d=h(d._payload),r.type=d,h=r.tag=P6(d),n=ti(d,n),h){case 0:r=f0(null,r,d,n,l);break e;case 1:r=ME(null,r,d,n,l);break e;case 11:r=TE(null,r,d,n,l);break e;case 14:r=IE(null,r,d,ti(d.type,n),l);break e}throw Error(ke(306,d,""))}return r;case 0:return d=r.type,h=r.pendingProps,h=r.elementType===d?h:ti(d,h),f0(n,r,d,h,l);case 1:return d=r.type,h=r.pendingProps,h=r.elementType===d?h:ti(d,h),ME(n,r,d,h,l);case 3:e:{if(YD(r),n===null)throw Error(ke(387));d=r.pendingProps,p=r.memoizedState,h=p.element,wD(n,r),Cp(r,d,null,l);var b=r.memoizedState;if(d=b.element,p.isDehydrated)if(p={element:d,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){h=xd(Error(ke(423)),r),r=NE(n,r,d,l,h);break e}else if(d!==h){h=xd(Error(ke(424)),r),r=NE(n,r,d,l,h);break e}else for(lr=fa(r.stateNode.containerInfo.firstChild),dr=r,un=!0,ri=null,l=CD(r,null,d,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(yd(),d===h){r=ws(n,r,l);break e}Mo(n,r,d,l)}r=r.child}return r;case 5:return AD(r),n===null&&l0(r),d=r.type,h=r.pendingProps,p=n!==null?n.memoizedProps:null,b=h.children,o0(d,h)?b=null:p!==null&&o0(d,p)&&(r.flags|=32),KD(n,r),Mo(n,r,b,l),r.child;case 6:return n===null&&l0(r),null;case 13:return QD(n,r,l);case 4:return bw(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=Cd(r,null,d,l):Mo(n,r,d,l),r.child;case 11:return d=r.type,h=r.pendingProps,h=r.elementType===d?h:ti(d,h),TE(n,r,d,h,l);case 7:return Mo(n,r,r.pendingProps,l),r.child;case 8:return Mo(n,r,r.pendingProps.children,l),r.child;case 12:return Mo(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(d=r.type._context,h=r.pendingProps,p=r.memoizedProps,b=h.value,Jt(_p,d._currentValue),d._currentValue=b,p!==null)if(di(p.value,b)){if(p.children===h.children&&!Ko.current){r=ws(n,r,l);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var k=p.dependencies;if(k!==null){b=p.child;for(var g=k.firstContext;g!==null;){if(g.context===d){if(p.tag===1){g=fs(-1,l&-l),g.tag=2;var v=p.updateQueue;if(v!==null){v=v.shared;var A=v.pending;A===null?g.next=g:(g.next=A.next,A.next=g),v.pending=g}}p.lanes|=l,g=p.alternate,g!==null&&(g.lanes|=l),c0(p.return,l,r),k.lanes|=l;break}g=g.next}}else if(p.tag===10)b=p.type===r.type?null:p.child;else if(p.tag===18){if(b=p.return,b===null)throw Error(ke(341));b.lanes|=l,k=b.alternate,k!==null&&(k.lanes|=l),c0(b,l,r),b=p.sibling}else b=p.child;if(b!==null)b.return=p;else for(b=p;b!==null;){if(b===r){b=null;break}if(p=b.sibling,p!==null){p.return=b.return,b=p;break}b=b.return}p=b}Mo(n,r,h.children,l),r=r.child}return r;case 9:return h=r.type,d=r.pendingProps.children,pd(r,l),h=Rr(h),d=d(h),r.flags|=1,Mo(n,r,d,l),r.child;case 14:return d=r.type,h=ti(d,r.pendingProps),h=ti(d.type,h),IE(n,r,d,h,l);case 15:return qD(n,r,r.type,r.pendingProps,l);case 17:return d=r.type,h=r.pendingProps,h=r.elementType===d?h:ti(d,h),Xf(n,r),r.tag=1,Yo(d)?(n=!0,kp(r)):n=!1,pd(r,l),_D(r,d,h),u0(r,d,h,l),p0(null,r,d,!0,n,l);case 19:return ZD(n,r,l);case 22:return GD(n,r,l)}throw Error(ke(156,r.tag))};function fT(n,r){return z5(n,r)}function j6(n,r,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Br(n,r,l,d){return new j6(n,r,l,d)}function Nw(n){return n=n.prototype,!(!n||!n.isReactComponent)}function P6(n){if(typeof n=="function")return Nw(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z0)return 11;if(n===J0)return 14}return 2}function ba(n,r){var l=n.alternate;return l===null?(l=Br(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function np(n,r,l,d,h,p){var b=2;if(d=n,typeof n=="function")Nw(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case Zc:return Rl(l.children,h,p,r);case Q0:b=8,h|=8;break;case Bk:return n=Br(12,l,r,h|2),n.elementType=Bk,n.lanes=p,n;case Ok:return n=Br(13,l,r,h),n.elementType=Ok,n.lanes=p,n;case Lk:return n=Br(19,l,r,h),n.elementType=Lk,n.lanes=p,n;case y5:return eg(l,h,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case v5:b=10;break e;case _5:b=9;break e;case Z0:b=11;break e;case J0:b=14;break e;case oa:b=16,d=null;break e}throw Error(ke(130,n==null?n:typeof n,""))}return r=Br(b,l,r,h),r.elementType=n,r.type=d,r.lanes=p,r}function Rl(n,r,l,d){return n=Br(7,n,d,r),n.lanes=l,n}function eg(n,r,l,d){return n=Br(22,n,d,r),n.elementType=y5,n.lanes=l,n.stateNode={isHidden:!1},n}function Xb(n,r,l){return n=Br(6,n,null,r),n.lanes=l,n}function ek(n,r,l){return r=Br(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function B6(n,r,l,d,h){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pb(0),this.expirationTimes=Pb(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pb(0),this.identifierPrefix=d,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function jw(n,r,l,d,h,p,b,k,g){return n=new B6(n,r,l,k,g),r===1?(r=1,p===!0&&(r|=8)):r=0,p=Br(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},mw(p),n}function O6(n,r,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qc,key:d==null?null:""+d,children:n,containerInfo:r,implementation:l}}function pT(n){if(!n)return ya;n=n._reactInternals;e:{if(Yl(n)!==n||n.tag!==1)throw Error(ke(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Yo(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(ke(171))}if(n.tag===1){var l=n.type;if(Yo(l))return fD(n,l,r)}return r}function gT(n,r,l,d,h,p,b,k,g){return n=jw(l,d,!0,n,h,p,b,k,g),n.context=pT(null),l=n.current,d=No(),h=ma(l),p=fs(d,h),p.callback=r??null,pa(l,p,h),n.current.lanes=h,Ch(n,h,d),Qo(n,d),n}function tg(n,r,l,d){var h=r.current,p=No(),b=ma(h);return l=pT(l),r.context===null?r.context=l:r.pendingContext=l,r=fs(p,b),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=pa(h,r,b),n!==null&&(ci(n,h,b,p),Qf(n,h,b)),b}function Mp(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function UE(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Pw(n,r){UE(n,r),(n=n.alternate)&&UE(n,r)}function L6(){return null}var mT=typeof reportError=="function"?reportError:function(n){console.error(n)};function Bw(n){this._internalRoot=n}ng.prototype.render=Bw.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(ke(409));tg(n,r,null,null)};ng.prototype.unmount=Bw.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;$l(function(){tg(null,n,null,null)}),r[bs]=null}};function ng(n){this._internalRoot=n}ng.prototype.unstable_scheduleHydration=function(n){if(n){var r=q5();n={blockedOn:null,target:n,priority:r};for(var l=0;l<ia.length&&r!==0&&r<ia[l].priority;l++);ia.splice(l,0,n),l===0&&K5(n)}};function Ow(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function og(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function HE(){}function R6(n,r,l,d,h){if(h){if(typeof d=="function"){var p=d;d=function(){var v=Mp(b);p.call(v)}}var b=gT(r,d,n,0,null,!1,!1,"",HE);return n._reactRootContainer=b,n[bs]=b.current,sh(n.nodeType===8?n.parentNode:n),$l(),b}for(;h=n.lastChild;)n.removeChild(h);if(typeof d=="function"){var k=d;d=function(){var v=Mp(g);k.call(v)}}var g=jw(n,0,!1,null,null,!1,!1,"",HE);return n._reactRootContainer=g,n[bs]=g.current,sh(n.nodeType===8?n.parentNode:n),$l(function(){tg(r,g,l,d)}),g}function rg(n,r,l,d,h){var p=l._reactRootContainer;if(p){var b=p;if(typeof h=="function"){var k=h;h=function(){var g=Mp(b);k.call(g)}}tg(r,b,n,h)}else b=R6(l,r,n,h,d);return Mp(b)}$5=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=zu(r.pendingLanes);l!==0&&(tw(r,l|1),Qo(r,Tn()),!(bt&6)&&(Ed=Tn()+500,Ta()))}break;case 13:$l(function(){var d=ks(n,1);if(d!==null){var h=No();ci(d,n,1,h)}}),Pw(n,1)}};nw=function(n){if(n.tag===13){var r=ks(n,134217728);if(r!==null){var l=No();ci(r,n,134217728,l)}Pw(n,134217728)}};W5=function(n){if(n.tag===13){var r=ma(n),l=ks(n,r);if(l!==null){var d=No();ci(l,n,r,d)}Pw(n,r)}};q5=function(){return Pt};G5=function(n,r){var l=Pt;try{return Pt=n,r()}finally{Pt=l}};Gk=function(n,r,l){switch(r){case"input":if(Fk(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var d=l[r];if(d!==n&&d.form===n.form){var h=Kp(d);if(!h)throw Error(ke(90));A5(d),Fk(d,h)}}}break;case"textarea":E5(n,l);break;case"select":r=l.value,r!=null&&dd(n,!!l.multiple,r,!1)}};j5=Tw;P5=$l;var z6={usingClientEntryPoint:!1,Events:[xh,td,Kp,M5,N5,Tw]},Du={findFiberByHostInstance:jl,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},F6={bundleType:Du.bundleType,version:Du.version,rendererPackageName:Du.rendererPackageName,rendererConfig:Du.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_s.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=L5(n),n===null?null:n.stateNode},findFiberByHostInstance:Du.findFiberByHostInstance||L6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vf.isDisabled&&Vf.supportsFiber)try{$p=Vf.inject(F6),Hi=Vf}catch{}}pr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z6;pr.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ow(r))throw Error(ke(200));return O6(n,r,null,l)};pr.createRoot=function(n,r){if(!Ow(n))throw Error(ke(299));var l=!1,d="",h=mT;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=jw(n,1,!1,null,null,l,!1,d,h),n[bs]=r.current,sh(n.nodeType===8?n.parentNode:n),new Bw(r)};pr.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(ke(188)):(n=Object.keys(n).join(","),Error(ke(268,n)));return n=L5(r),n=n===null?null:n.stateNode,n};pr.flushSync=function(n){return $l(n)};pr.hydrate=function(n,r,l){if(!og(r))throw Error(ke(200));return rg(null,n,r,!0,l)};pr.hydrateRoot=function(n,r,l){if(!Ow(n))throw Error(ke(405));var d=l!=null&&l.hydratedSources||null,h=!1,p="",b=mT;if(l!=null&&(l.unstable_strictMode===!0&&(h=!0),l.identifierPrefix!==void 0&&(p=l.identifierPrefix),l.onRecoverableError!==void 0&&(b=l.onRecoverableError)),r=gT(r,null,n,1,l??null,h,!1,p,b),n[bs]=r.current,sh(n),d)for(n=0;n<d.length;n++)l=d[n],h=l._getVersion,h=h(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,h]:r.mutableSourceEagerHydrationData.push(l,h);return new ng(r)};pr.render=function(n,r,l){if(!og(r))throw Error(ke(200));return rg(null,n,r,!1,l)};pr.unmountComponentAtNode=function(n){if(!og(n))throw Error(ke(40));return n._reactRootContainer?($l(function(){rg(null,null,n,!1,function(){n._reactRootContainer=null,n[bs]=null})}),!0):!1};pr.unstable_batchedUpdates=Tw;pr.unstable_renderSubtreeIntoContainer=function(n,r,l,d){if(!og(l))throw Error(ke(200));if(n==null||n._reactInternals===void 0)throw Error(ke(38));return rg(n,r,l,!1,d)};pr.version="18.2.0-next-9e3b772b8-20220608";function bT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bT)}catch(n){console.error(n)}}bT(),g5.exports=pr;var kT=g5.exports,$E=kT;jk.createRoot=$E.createRoot,jk.hydrateRoot=$E.hydrateRoot;var wT={exports:{}},vT={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sd=Z;function V6(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var U6=typeof Object.is=="function"?Object.is:V6,H6=Sd.useState,$6=Sd.useEffect,W6=Sd.useLayoutEffect,q6=Sd.useDebugValue;function G6(n,r){var l=r(),d=H6({inst:{value:l,getSnapshot:r}}),h=d[0].inst,p=d[1];return W6(function(){h.value=l,h.getSnapshot=r,tk(h)&&p({inst:h})},[n,l,r]),$6(function(){return tk(h)&&p({inst:h}),n(function(){tk(h)&&p({inst:h})})},[n]),q6(l),l}function tk(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!U6(n,l)}catch{return!0}}function K6(n,r){return r()}var Y6=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?K6:G6;vT.useSyncExternalStore=Sd.useSyncExternalStore!==void 0?Sd.useSyncExternalStore:Y6;wT.exports=vT;var Q6=wT.exports,_T={exports:{}},yT={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig=Z,Z6=Q6;function J6(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var X6=typeof Object.is=="function"?Object.is:J6,e7=Z6.useSyncExternalStore,t7=ig.useRef,n7=ig.useEffect,o7=ig.useMemo,r7=ig.useDebugValue;yT.useSyncExternalStoreWithSelector=function(n,r,l,d,h){var p=t7(null);if(p.current===null){var b={hasValue:!1,value:null};p.current=b}else b=p.current;p=o7(function(){function g(C){if(!v){if(v=!0,A=C,C=d(C),h!==void 0&&b.hasValue){var M=b.value;if(h(M,C))return x=M}return x=C}if(M=x,X6(A,C))return M;var T=d(C);return h!==void 0&&h(M,T)?M:(A=C,x=T)}var v=!1,A,x,_=l===void 0?null:l;return[function(){return g(r())},_===null?void 0:function(){return g(_())}]},[r,l,d,h]);var k=e7(n,p[0],p[1]);return n7(function(){b.hasValue=!0,b.value=k},[k]),r7(k),k};_T.exports=yT;var i7=_T.exports;function s7(n){n()}let CT=s7;const a7=n=>CT=n,l7=()=>CT,WE=Symbol.for("react-redux-context"),qE=typeof globalThis<"u"?globalThis:{};function c7(){var n;if(!Z.createContext)return{};const r=(n=qE[WE])!=null?n:qE[WE]=new Map;let l=r.get(Z.createContext);return l||(l=Z.createContext(null),r.set(Z.createContext,l)),l}const Ca=c7();function Lw(n=Ca){return function(){return Z.useContext(n)}}const AT=Lw(),d7=()=>{throw new Error("uSES not initialized!")};let xT=d7;const u7=n=>{xT=n},h7=(n,r)=>n===r;function f7(n=Ca){const r=n===Ca?AT:Lw(n);return function(d,h={}){const{equalityFn:p=h7,stabilityCheck:b=void 0,noopCheck:k=void 0}=typeof h=="function"?{equalityFn:h}:h,{store:g,subscription:v,getServerState:A,stabilityCheck:x,noopCheck:_}=r();Z.useRef(!0);const C=Z.useCallback({[d.name](T){return d(T)}}[d.name],[d,x,b]),M=xT(v.addNestedSub,g.getState,A||g.getState,C,p);return Z.useDebugValue(M),M}}const Ye=f7();var ET={exports:{}},Bt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var io=typeof Symbol=="function"&&Symbol.for,Rw=io?Symbol.for("react.element"):60103,zw=io?Symbol.for("react.portal"):60106,sg=io?Symbol.for("react.fragment"):60107,ag=io?Symbol.for("react.strict_mode"):60108,lg=io?Symbol.for("react.profiler"):60114,cg=io?Symbol.for("react.provider"):60109,dg=io?Symbol.for("react.context"):60110,Fw=io?Symbol.for("react.async_mode"):60111,ug=io?Symbol.for("react.concurrent_mode"):60111,hg=io?Symbol.for("react.forward_ref"):60112,fg=io?Symbol.for("react.suspense"):60113,p7=io?Symbol.for("react.suspense_list"):60120,pg=io?Symbol.for("react.memo"):60115,gg=io?Symbol.for("react.lazy"):60116,g7=io?Symbol.for("react.block"):60121,m7=io?Symbol.for("react.fundamental"):60117,b7=io?Symbol.for("react.responder"):60118,k7=io?Symbol.for("react.scope"):60119;function mr(n){if(typeof n=="object"&&n!==null){var r=n.$$typeof;switch(r){case Rw:switch(n=n.type,n){case Fw:case ug:case sg:case lg:case ag:case fg:return n;default:switch(n=n&&n.$$typeof,n){case dg:case hg:case gg:case pg:case cg:return n;default:return r}}case zw:return r}}}function ST(n){return mr(n)===ug}Bt.AsyncMode=Fw;Bt.ConcurrentMode=ug;Bt.ContextConsumer=dg;Bt.ContextProvider=cg;Bt.Element=Rw;Bt.ForwardRef=hg;Bt.Fragment=sg;Bt.Lazy=gg;Bt.Memo=pg;Bt.Portal=zw;Bt.Profiler=lg;Bt.StrictMode=ag;Bt.Suspense=fg;Bt.isAsyncMode=function(n){return ST(n)||mr(n)===Fw};Bt.isConcurrentMode=ST;Bt.isContextConsumer=function(n){return mr(n)===dg};Bt.isContextProvider=function(n){return mr(n)===cg};Bt.isElement=function(n){return typeof n=="object"&&n!==null&&n.$$typeof===Rw};Bt.isForwardRef=function(n){return mr(n)===hg};Bt.isFragment=function(n){return mr(n)===sg};Bt.isLazy=function(n){return mr(n)===gg};Bt.isMemo=function(n){return mr(n)===pg};Bt.isPortal=function(n){return mr(n)===zw};Bt.isProfiler=function(n){return mr(n)===lg};Bt.isStrictMode=function(n){return mr(n)===ag};Bt.isSuspense=function(n){return mr(n)===fg};Bt.isValidElementType=function(n){return typeof n=="string"||typeof n=="function"||n===sg||n===ug||n===lg||n===ag||n===fg||n===p7||typeof n=="object"&&n!==null&&(n.$$typeof===gg||n.$$typeof===pg||n.$$typeof===cg||n.$$typeof===dg||n.$$typeof===hg||n.$$typeof===m7||n.$$typeof===b7||n.$$typeof===k7||n.$$typeof===g7)};Bt.typeOf=mr;ET.exports=Bt;var w7=ET.exports,DT=w7,v7={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_7={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TT={};TT[DT.ForwardRef]=v7;TT[DT.Memo]=_7;var Ft={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vw=Symbol.for("react.element"),Uw=Symbol.for("react.portal"),mg=Symbol.for("react.fragment"),bg=Symbol.for("react.strict_mode"),kg=Symbol.for("react.profiler"),wg=Symbol.for("react.provider"),vg=Symbol.for("react.context"),y7=Symbol.for("react.server_context"),_g=Symbol.for("react.forward_ref"),yg=Symbol.for("react.suspense"),Cg=Symbol.for("react.suspense_list"),Ag=Symbol.for("react.memo"),xg=Symbol.for("react.lazy"),C7=Symbol.for("react.offscreen"),IT;IT=Symbol.for("react.module.reference");function Fr(n){if(typeof n=="object"&&n!==null){var r=n.$$typeof;switch(r){case Vw:switch(n=n.type,n){case mg:case kg:case bg:case yg:case Cg:return n;default:switch(n=n&&n.$$typeof,n){case y7:case vg:case _g:case xg:case Ag:case wg:return n;default:return r}}case Uw:return r}}}Ft.ContextConsumer=vg;Ft.ContextProvider=wg;Ft.Element=Vw;Ft.ForwardRef=_g;Ft.Fragment=mg;Ft.Lazy=xg;Ft.Memo=Ag;Ft.Portal=Uw;Ft.Profiler=kg;Ft.StrictMode=bg;Ft.Suspense=yg;Ft.SuspenseList=Cg;Ft.isAsyncMode=function(){return!1};Ft.isConcurrentMode=function(){return!1};Ft.isContextConsumer=function(n){return Fr(n)===vg};Ft.isContextProvider=function(n){return Fr(n)===wg};Ft.isElement=function(n){return typeof n=="object"&&n!==null&&n.$$typeof===Vw};Ft.isForwardRef=function(n){return Fr(n)===_g};Ft.isFragment=function(n){return Fr(n)===mg};Ft.isLazy=function(n){return Fr(n)===xg};Ft.isMemo=function(n){return Fr(n)===Ag};Ft.isPortal=function(n){return Fr(n)===Uw};Ft.isProfiler=function(n){return Fr(n)===kg};Ft.isStrictMode=function(n){return Fr(n)===bg};Ft.isSuspense=function(n){return Fr(n)===yg};Ft.isSuspenseList=function(n){return Fr(n)===Cg};Ft.isValidElementType=function(n){return typeof n=="string"||typeof n=="function"||n===mg||n===kg||n===bg||n===yg||n===Cg||n===C7||typeof n=="object"&&n!==null&&(n.$$typeof===xg||n.$$typeof===Ag||n.$$typeof===wg||n.$$typeof===vg||n.$$typeof===_g||n.$$typeof===IT||n.getModuleId!==void 0)};Ft.typeOf=Fr;function A7(){const n=l7();let r=null,l=null;return{clear(){r=null,l=null},notify(){n(()=>{let d=r;for(;d;)d.callback(),d=d.next})},get(){let d=[],h=r;for(;h;)d.push(h),h=h.next;return d},subscribe(d){let h=!0,p=l={callback:d,next:null,prev:l};return p.prev?p.prev.next=p:r=p,function(){!h||r===null||(h=!1,p.next?p.next.prev=p.prev:l=p.prev,p.prev?p.prev.next=p.next:r=p.next)}}}}const GE={notify(){},get:()=>[]};function x7(n,r){let l,d=GE;function h(x){return g(),d.subscribe(x)}function p(){d.notify()}function b(){A.onStateChange&&A.onStateChange()}function k(){return!!l}function g(){l||(l=r?r.addNestedSub(b):n.subscribe(b),d=A7())}function v(){l&&(l(),l=void 0,d.clear(),d=GE)}const A={addNestedSub:h,notifyNestedSubs:p,handleChangeWrapper:b,isSubscribed:k,trySubscribe:g,tryUnsubscribe:v,getListeners:()=>d};return A}const E7=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",S7=E7?Z.useLayoutEffect:Z.useEffect;function D7({store:n,context:r,children:l,serverState:d,stabilityCheck:h="once",noopCheck:p="once"}){const b=Z.useMemo(()=>{const v=x7(n);return{store:n,subscription:v,getServerState:d?()=>d:void 0,stabilityCheck:h,noopCheck:p}},[n,d,h,p]),k=Z.useMemo(()=>n.getState(),[n]);S7(()=>{const{subscription:v}=b;return v.onStateChange=v.notifyNestedSubs,v.trySubscribe(),k!==n.getState()&&v.notifyNestedSubs(),()=>{v.tryUnsubscribe(),v.onStateChange=void 0}},[b,k]);const g=r||Ca;return Z.createElement(g.Provider,{value:b},l)}function MT(n=Ca){const r=n===Ca?AT:Lw(n);return function(){const{store:d}=r();return d}}const T7=MT();function I7(n=Ca){const r=n===Ca?T7:MT(n);return function(){return r().dispatch}}const Eo=I7();u7(i7.useSyncExternalStoreWithSelector);a7(kT.unstable_batchedUpdates);function ii(n){for(var r=arguments.length,l=Array(r>1?r-1:0),d=1;d<r;d++)l[d-1]=arguments[d];throw Error("[Immer] minified error nr: "+n+(l.length?" "+l.map(function(h){return"'"+h+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Aa(n){return!!n&&!!n[cn]}function vs(n){var r;return!!n&&(function(l){if(!l||typeof l!="object")return!1;var d=Object.getPrototypeOf(l);if(d===null)return!0;var h=Object.hasOwnProperty.call(d,"constructor")&&d.constructor;return h===Object||typeof h=="function"&&Function.toString.call(h)===z7}(n)||Array.isArray(n)||!!n[eS]||!!(!((r=n.constructor)===null||r===void 0)&&r[eS])||Hw(n)||$w(n))}function Wl(n,r,l){l===void 0&&(l=!1),Pd(n)===0?(l?Object.keys:bd)(n).forEach(function(d){l&&typeof d=="symbol"||r(d,n[d],n)}):n.forEach(function(d,h){return r(h,d,n)})}function Pd(n){var r=n[cn];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:Hw(n)?2:$w(n)?3:0}function md(n,r){return Pd(n)===2?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function M7(n,r){return Pd(n)===2?n.get(r):n[r]}function NT(n,r,l){var d=Pd(n);d===2?n.set(r,l):d===3?n.add(l):n[r]=l}function jT(n,r){return n===r?n!==0||1/n==1/r:n!=n&&r!=r}function Hw(n){return L7&&n instanceof Map}function $w(n){return R7&&n instanceof Set}function Nl(n){return n.o||n.t}function Ww(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=BT(n);delete r[cn];for(var l=bd(r),d=0;d<l.length;d++){var h=l[d],p=r[h];p.writable===!1&&(p.writable=!0,p.configurable=!0),(p.get||p.set)&&(r[h]={configurable:!0,writable:!0,enumerable:p.enumerable,value:n[h]})}return Object.create(Object.getPrototypeOf(n),r)}function qw(n,r){return r===void 0&&(r=!1),Gw(n)||Aa(n)||!vs(n)||(Pd(n)>1&&(n.set=n.add=n.clear=n.delete=N7),Object.freeze(n),r&&Wl(n,function(l,d){return qw(d,!0)},!0)),n}function N7(){ii(2)}function Gw(n){return n==null||typeof n!="object"||Object.isFrozen(n)}function Wi(n){var r=T0[n];return r||ii(18,n),r}function j7(n,r){T0[n]||(T0[n]=r)}function E0(){return gh}function nk(n,r){r&&(Wi("Patches"),n.u=[],n.s=[],n.v=r)}function Np(n){S0(n),n.p.forEach(P7),n.p=null}function S0(n){n===gh&&(gh=n.l)}function KE(n){return gh={p:[],l:gh,h:n,m:!0,_:0}}function P7(n){var r=n[cn];r.i===0||r.i===1?r.j():r.g=!0}function ok(n,r){r._=r.p.length;var l=r.p[0],d=n!==void 0&&n!==l;return r.h.O||Wi("ES5").S(r,n,d),d?(l[cn].P&&(Np(r),ii(4)),vs(n)&&(n=jp(r,n),r.l||Pp(r,n)),r.u&&Wi("Patches").M(l[cn].t,n,r.u,r.s)):n=jp(r,l,[]),Np(r),r.u&&r.v(r.u,r.s),n!==PT?n:void 0}function jp(n,r,l){if(Gw(r))return r;var d=r[cn];if(!d)return Wl(r,function(k,g){return YE(n,d,r,k,g,l)},!0),r;if(d.A!==n)return r;if(!d.P)return Pp(n,d.t,!0),d.t;if(!d.I){d.I=!0,d.A._--;var h=d.i===4||d.i===5?d.o=Ww(d.k):d.o,p=h,b=!1;d.i===3&&(p=new Set(h),h.clear(),b=!0),Wl(p,function(k,g){return YE(n,d,h,k,g,l,b)}),Pp(n,h,!1),l&&n.u&&Wi("Patches").N(d,l,n.u,n.s)}return d.o}function YE(n,r,l,d,h,p,b){if(Aa(h)){var k=jp(n,h,p&&r&&r.i!==3&&!md(r.R,d)?p.concat(d):void 0);if(NT(l,d,k),!Aa(k))return;n.m=!1}else b&&l.add(h);if(vs(h)&&!Gw(h)){if(!n.h.D&&n._<1)return;jp(n,h),r&&r.A.l||Pp(n,h)}}function Pp(n,r,l){l===void 0&&(l=!1),!n.l&&n.h.D&&n.m&&qw(r,l)}function rk(n,r){var l=n[cn];return(l?Nl(l):n)[r]}function QE(n,r){if(r in n)for(var l=Object.getPrototypeOf(n);l;){var d=Object.getOwnPropertyDescriptor(l,r);if(d)return d;l=Object.getPrototypeOf(l)}}function aa(n){n.P||(n.P=!0,n.l&&aa(n.l))}function ik(n){n.o||(n.o=Ww(n.t))}function D0(n,r,l){var d=Hw(r)?Wi("MapSet").F(r,l):$w(r)?Wi("MapSet").T(r,l):n.O?function(h,p){var b=Array.isArray(h),k={i:b?1:0,A:p?p.A:E0(),P:!1,I:!1,R:{},l:p,t:h,k:null,o:null,j:null,C:!1},g=k,v=mh;b&&(g=[k],v=Vu);var A=Proxy.revocable(g,v),x=A.revoke,_=A.proxy;return k.k=_,k.j=x,_}(r,l):Wi("ES5").J(r,l);return(l?l.A:E0()).p.push(d),d}function B7(n){return Aa(n)||ii(22,n),function r(l){if(!vs(l))return l;var d,h=l[cn],p=Pd(l);if(h){if(!h.P&&(h.i<4||!Wi("ES5").K(h)))return h.t;h.I=!0,d=ZE(l,p),h.I=!1}else d=ZE(l,p);return Wl(d,function(b,k){h&&M7(h.t,b)===k||NT(d,b,r(k))}),p===3?new Set(d):d}(n)}function ZE(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return Ww(n)}function O7(){function n(p,b){var k=h[p];return k?k.enumerable=b:h[p]=k={configurable:!0,enumerable:b,get:function(){var g=this[cn];return mh.get(g,p)},set:function(g){var v=this[cn];mh.set(v,p,g)}},k}function r(p){for(var b=p.length-1;b>=0;b--){var k=p[b][cn];if(!k.P)switch(k.i){case 5:d(k)&&aa(k);break;case 4:l(k)&&aa(k)}}}function l(p){for(var b=p.t,k=p.k,g=bd(k),v=g.length-1;v>=0;v--){var A=g[v];if(A!==cn){var x=b[A];if(x===void 0&&!md(b,A))return!0;var _=k[A],C=_&&_[cn];if(C?C.t!==x:!jT(_,x))return!0}}var M=!!b[cn];return g.length!==bd(b).length+(M?0:1)}function d(p){var b=p.k;if(b.length!==p.t.length)return!0;var k=Object.getOwnPropertyDescriptor(b,b.length-1);if(k&&!k.get)return!0;for(var g=0;g<b.length;g++)if(!b.hasOwnProperty(g))return!0;return!1}var h={};j7("ES5",{J:function(p,b){var k=Array.isArray(p),g=function(A,x){if(A){for(var _=Array(x.length),C=0;C<x.length;C++)Object.defineProperty(_,""+C,n(C,!0));return _}var M=BT(x);delete M[cn];for(var T=bd(M),L=0;L<T.length;L++){var P=T[L];M[P]=n(P,A||!!M[P].enumerable)}return Object.create(Object.getPrototypeOf(x),M)}(k,p),v={i:k?5:4,A:b?b.A:E0(),P:!1,I:!1,R:{},l:b,t:p,k:g,o:null,g:!1,C:!1};return Object.defineProperty(g,cn,{value:v,writable:!0}),g},S:function(p,b,k){k?Aa(b)&&b[cn].A===p&&r(p.p):(p.u&&function g(v){if(v&&typeof v=="object"){var A=v[cn];if(A){var x=A.t,_=A.k,C=A.R,M=A.i;if(M===4)Wl(_,function(O){O!==cn&&(x[O]!==void 0||md(x,O)?C[O]||g(_[O]):(C[O]=!0,aa(A)))}),Wl(x,function(O){_[O]!==void 0||md(_,O)||(C[O]=!1,aa(A))});else if(M===5){if(d(A)&&(aa(A),C.length=!0),_.length<x.length)for(var T=_.length;T<x.length;T++)C[T]=!1;else for(var L=x.length;L<_.length;L++)C[L]=!0;for(var P=Math.min(_.length,x.length),j=0;j<P;j++)_.hasOwnProperty(j)||(C[j]=!0),C[j]===void 0&&g(_[j])}}}}(p.p[0]),r(p.p))},K:function(p){return p.i===4?l(p):d(p)}})}var JE,gh,Kw=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",L7=typeof Map<"u",R7=typeof Set<"u",XE=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",PT=Kw?Symbol.for("immer-nothing"):((JE={})["immer-nothing"]=!0,JE),eS=Kw?Symbol.for("immer-draftable"):"__$immer_draftable",cn=Kw?Symbol.for("immer-state"):"__$immer_state",z7=""+Object.prototype.constructor,bd=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,BT=Object.getOwnPropertyDescriptors||function(n){var r={};return bd(n).forEach(function(l){r[l]=Object.getOwnPropertyDescriptor(n,l)}),r},T0={},mh={get:function(n,r){if(r===cn)return n;var l=Nl(n);if(!md(l,r))return function(h,p,b){var k,g=QE(p,b);return g?"value"in g?g.value:(k=g.get)===null||k===void 0?void 0:k.call(h.k):void 0}(n,l,r);var d=l[r];return n.I||!vs(d)?d:d===rk(n.t,r)?(ik(n),n.o[r]=D0(n.A.h,d,n)):d},has:function(n,r){return r in Nl(n)},ownKeys:function(n){return Reflect.ownKeys(Nl(n))},set:function(n,r,l){var d=QE(Nl(n),r);if(d!=null&&d.set)return d.set.call(n.k,l),!0;if(!n.P){var h=rk(Nl(n),r),p=h==null?void 0:h[cn];if(p&&p.t===l)return n.o[r]=l,n.R[r]=!1,!0;if(jT(l,h)&&(l!==void 0||md(n.t,r)))return!0;ik(n),aa(n)}return n.o[r]===l&&(l!==void 0||r in n.o)||Number.isNaN(l)&&Number.isNaN(n.o[r])||(n.o[r]=l,n.R[r]=!0),!0},deleteProperty:function(n,r){return rk(n.t,r)!==void 0||r in n.t?(n.R[r]=!1,ik(n),aa(n)):delete n.R[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var l=Nl(n),d=Reflect.getOwnPropertyDescriptor(l,r);return d&&{writable:!0,configurable:n.i!==1||r!=="length",enumerable:d.enumerable,value:l[r]}},defineProperty:function(){ii(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){ii(12)}},Vu={};Wl(mh,function(n,r){Vu[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}}),Vu.deleteProperty=function(n,r){return Vu.set.call(this,n,r,void 0)},Vu.set=function(n,r,l){return mh.set.call(this,n[0],r,l,n[0])};var F7=function(){function n(l){var d=this;this.O=XE,this.D=!0,this.produce=function(h,p,b){if(typeof h=="function"&&typeof p!="function"){var k=p;p=h;var g=d;return function(T){var L=this;T===void 0&&(T=k);for(var P=arguments.length,j=Array(P>1?P-1:0),O=1;O<P;O++)j[O-1]=arguments[O];return g.produce(T,function(R){var W;return(W=p).call.apply(W,[L,R].concat(j))})}}var v;if(typeof p!="function"&&ii(6),b!==void 0&&typeof b!="function"&&ii(7),vs(h)){var A=KE(d),x=D0(d,h,void 0),_=!0;try{v=p(x),_=!1}finally{_?Np(A):S0(A)}return typeof Promise<"u"&&v instanceof Promise?v.then(function(T){return nk(A,b),ok(T,A)},function(T){throw Np(A),T}):(nk(A,b),ok(v,A))}if(!h||typeof h!="object"){if((v=p(h))===void 0&&(v=h),v===PT&&(v=void 0),d.D&&qw(v,!0),b){var C=[],M=[];Wi("Patches").M(h,v,C,M),b(C,M)}return v}ii(21,h)},this.produceWithPatches=function(h,p){if(typeof h=="function")return function(v){for(var A=arguments.length,x=Array(A>1?A-1:0),_=1;_<A;_++)x[_-1]=arguments[_];return d.produceWithPatches(v,function(C){return h.apply(void 0,[C].concat(x))})};var b,k,g=d.produce(h,p,function(v,A){b=v,k=A});return typeof Promise<"u"&&g instanceof Promise?g.then(function(v){return[v,b,k]}):[g,b,k]},typeof(l==null?void 0:l.useProxies)=="boolean"&&this.setUseProxies(l.useProxies),typeof(l==null?void 0:l.autoFreeze)=="boolean"&&this.setAutoFreeze(l.autoFreeze)}var r=n.prototype;return r.createDraft=function(l){vs(l)||ii(8),Aa(l)&&(l=B7(l));var d=KE(this),h=D0(this,l,void 0);return h[cn].C=!0,S0(d),h},r.finishDraft=function(l,d){var h=l&&l[cn],p=h.A;return nk(p,d),ok(void 0,p)},r.setAutoFreeze=function(l){this.D=l},r.setUseProxies=function(l){l&&!XE&&ii(20),this.O=l},r.applyPatches=function(l,d){var h;for(h=d.length-1;h>=0;h--){var p=d[h];if(p.path.length===0&&p.op==="replace"){l=p.value;break}}h>-1&&(d=d.slice(h+1));var b=Wi("Patches").$;return Aa(l)?b(l,d):this.produce(l,function(k){return b(k,d)})},n}(),fr=new F7,OT=fr.produce;fr.produceWithPatches.bind(fr);fr.setAutoFreeze.bind(fr);fr.setUseProxies.bind(fr);fr.applyPatches.bind(fr);fr.createDraft.bind(fr);fr.finishDraft.bind(fr);function bh(n){"@babel/helpers - typeof";return bh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},bh(n)}function V7(n,r){if(bh(n)!=="object"||n===null)return n;var l=n[Symbol.toPrimitive];if(l!==void 0){var d=l.call(n,r||"default");if(bh(d)!=="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function U7(n){var r=V7(n,"string");return bh(r)==="symbol"?r:String(r)}function H7(n,r,l){return r=U7(r),r in n?Object.defineProperty(n,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[r]=l,n}function tS(n,r){var l=Object.keys(n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(n);r&&(d=d.filter(function(h){return Object.getOwnPropertyDescriptor(n,h).enumerable})),l.push.apply(l,d)}return l}function nS(n){for(var r=1;r<arguments.length;r++){var l=arguments[r]!=null?arguments[r]:{};r%2?tS(Object(l),!0).forEach(function(d){H7(n,d,l[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(l)):tS(Object(l)).forEach(function(d){Object.defineProperty(n,d,Object.getOwnPropertyDescriptor(l,d))})}return n}function Co(n){return"Minified Redux error #"+n+"; visit https://redux.js.org/Errors?code="+n+" for the full message or use the non-minified dev environment for full errors. "}var oS=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),sk=function(){return Math.random().toString(36).substring(7).split("").join(".")},Bp={INIT:"@@redux/INIT"+sk(),REPLACE:"@@redux/REPLACE"+sk(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+sk()}};function $7(n){if(typeof n!="object"||n===null)return!1;for(var r=n;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return Object.getPrototypeOf(n)===r}function LT(n,r,l){var d;if(typeof r=="function"&&typeof l=="function"||typeof l=="function"&&typeof arguments[3]=="function")throw new Error(Co(0));if(typeof r=="function"&&typeof l>"u"&&(l=r,r=void 0),typeof l<"u"){if(typeof l!="function")throw new Error(Co(1));return l(LT)(n,r)}if(typeof n!="function")throw new Error(Co(2));var h=n,p=r,b=[],k=b,g=!1;function v(){k===b&&(k=b.slice())}function A(){if(g)throw new Error(Co(3));return p}function x(T){if(typeof T!="function")throw new Error(Co(4));if(g)throw new Error(Co(5));var L=!0;return v(),k.push(T),function(){if(L){if(g)throw new Error(Co(6));L=!1,v();var j=k.indexOf(T);k.splice(j,1),b=null}}}function _(T){if(!$7(T))throw new Error(Co(7));if(typeof T.type>"u")throw new Error(Co(8));if(g)throw new Error(Co(9));try{g=!0,p=h(p,T)}finally{g=!1}for(var L=b=k,P=0;P<L.length;P++){var j=L[P];j()}return T}function C(T){if(typeof T!="function")throw new Error(Co(10));h=T,_({type:Bp.REPLACE})}function M(){var T,L=x;return T={subscribe:function(j){if(typeof j!="object"||j===null)throw new Error(Co(11));function O(){j.next&&j.next(A())}O();var R=L(O);return{unsubscribe:R}}},T[oS]=function(){return this},T}return _({type:Bp.INIT}),d={dispatch:_,subscribe:x,getState:A,replaceReducer:C},d[oS]=M,d}function W7(n){Object.keys(n).forEach(function(r){var l=n[r],d=l(void 0,{type:Bp.INIT});if(typeof d>"u")throw new Error(Co(12));if(typeof l(void 0,{type:Bp.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Co(13))})}function q7(n){for(var r=Object.keys(n),l={},d=0;d<r.length;d++){var h=r[d];typeof n[h]=="function"&&(l[h]=n[h])}var p=Object.keys(l),b;try{W7(l)}catch(k){b=k}return function(g,v){if(g===void 0&&(g={}),b)throw b;for(var A=!1,x={},_=0;_<p.length;_++){var C=p[_],M=l[C],T=g[C],L=M(T,v);if(typeof L>"u")throw v&&v.type,new Error(Co(14));x[C]=L,A=A||L!==T}return A=A||p.length!==Object.keys(g).length,A?x:g}}function Op(){for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return r.length===0?function(d){return d}:r.length===1?r[0]:r.reduce(function(d,h){return function(){return d(h.apply(void 0,arguments))}})}function G7(){for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return function(d){return function(){var h=d.apply(void 0,arguments),p=function(){throw new Error(Co(15))},b={getState:h.getState,dispatch:function(){return p.apply(void 0,arguments)}},k=r.map(function(g){return g(b)});return p=Op.apply(void 0,k)(h.dispatch),nS(nS({},h),{},{dispatch:p})}}}function RT(n){var r=function(d){var h=d.dispatch,p=d.getState;return function(b){return function(k){return typeof k=="function"?k(h,p,n):b(k)}}};return r}var zT=RT();zT.withExtraArgument=RT;const rS=zT;var FT=globalThis&&globalThis.__extends||function(){var n=function(r,l){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,h){d.__proto__=h}||function(d,h){for(var p in h)Object.prototype.hasOwnProperty.call(h,p)&&(d[p]=h[p])},n(r,l)};return function(r,l){if(typeof l!="function"&&l!==null)throw new TypeError("Class extends value "+String(l)+" is not a constructor or null");n(r,l);function d(){this.constructor=r}r.prototype=l===null?Object.create(l):(d.prototype=l.prototype,new d)}}(),K7=globalThis&&globalThis.__generator||function(n,r){var l={label:0,sent:function(){if(p[0]&1)throw p[1];return p[1]},trys:[],ops:[]},d,h,p,b;return b={next:k(0),throw:k(1),return:k(2)},typeof Symbol=="function"&&(b[Symbol.iterator]=function(){return this}),b;function k(v){return function(A){return g([v,A])}}function g(v){if(d)throw new TypeError("Generator is already executing.");for(;l;)try{if(d=1,h&&(p=v[0]&2?h.return:v[0]?h.throw||((p=h.return)&&p.call(h),0):h.next)&&!(p=p.call(h,v[1])).done)return p;switch(h=0,p&&(v=[v[0]&2,p.value]),v[0]){case 0:case 1:p=v;break;case 4:return l.label++,{value:v[1],done:!1};case 5:l.label++,h=v[1],v=[0];continue;case 7:v=l.ops.pop(),l.trys.pop();continue;default:if(p=l.trys,!(p=p.length>0&&p[p.length-1])&&(v[0]===6||v[0]===2)){l=0;continue}if(v[0]===3&&(!p||v[1]>p[0]&&v[1]<p[3])){l.label=v[1];break}if(v[0]===6&&l.label<p[1]){l.label=p[1],p=v;break}if(p&&l.label<p[2]){l.label=p[2],l.ops.push(v);break}p[2]&&l.ops.pop(),l.trys.pop();continue}v=r.call(n,l)}catch(A){v=[6,A],h=0}finally{d=p=0}if(v[0]&5)throw v[1];return{value:v[0]?v[1]:void 0,done:!0}}},Dd=globalThis&&globalThis.__spreadArray||function(n,r){for(var l=0,d=r.length,h=n.length;l<d;l++,h++)n[h]=r[l];return n},Y7=Object.defineProperty,Q7=Object.defineProperties,Z7=Object.getOwnPropertyDescriptors,iS=Object.getOwnPropertySymbols,J7=Object.prototype.hasOwnProperty,X7=Object.prototype.propertyIsEnumerable,sS=function(n,r,l){return r in n?Y7(n,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[r]=l},ka=function(n,r){for(var l in r||(r={}))J7.call(r,l)&&sS(n,l,r[l]);if(iS)for(var d=0,h=iS(r);d<h.length;d++){var l=h[d];X7.call(r,l)&&sS(n,l,r[l])}return n},ak=function(n,r){return Q7(n,Z7(r))},e9=function(n,r,l){return new Promise(function(d,h){var p=function(g){try{k(l.next(g))}catch(v){h(v)}},b=function(g){try{k(l.throw(g))}catch(v){h(v)}},k=function(g){return g.done?d(g.value):Promise.resolve(g.value).then(p,b)};k((l=l.apply(n,r)).next())})},t9=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Op:Op.apply(null,arguments)};function n9(n){if(typeof n!="object"||n===null)return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;for(var l=r;Object.getPrototypeOf(l)!==null;)l=Object.getPrototypeOf(l);return r===l}var o9=function(n){FT(r,n);function r(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];var h=n.apply(this,l)||this;return Object.setPrototypeOf(h,r.prototype),h}return Object.defineProperty(r,Symbol.species,{get:function(){return r},enumerable:!1,configurable:!0}),r.prototype.concat=function(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return n.prototype.concat.apply(this,l)},r.prototype.prepend=function(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return l.length===1&&Array.isArray(l[0])?new(r.bind.apply(r,Dd([void 0],l[0].concat(this)))):new(r.bind.apply(r,Dd([void 0],l.concat(this))))},r}(Array),r9=function(n){FT(r,n);function r(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];var h=n.apply(this,l)||this;return Object.setPrototypeOf(h,r.prototype),h}return Object.defineProperty(r,Symbol.species,{get:function(){return r},enumerable:!1,configurable:!0}),r.prototype.concat=function(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return n.prototype.concat.apply(this,l)},r.prototype.prepend=function(){for(var l=[],d=0;d<arguments.length;d++)l[d]=arguments[d];return l.length===1&&Array.isArray(l[0])?new(r.bind.apply(r,Dd([void 0],l[0].concat(this)))):new(r.bind.apply(r,Dd([void 0],l.concat(this))))},r}(Array);function I0(n){return vs(n)?OT(n,function(){}):n}function i9(n){return typeof n=="boolean"}function s9(){return function(r){return a9(r)}}function a9(n){n===void 0&&(n={});var r=n.thunk,l=r===void 0?!0:r;n.immutableCheck,n.serializableCheck;var d=new o9;return l&&(i9(l)?d.push(rS):d.push(rS.withExtraArgument(l.extraArgument))),d}var l9=!0;function c9(n){var r=s9(),l=n||{},d=l.reducer,h=d===void 0?void 0:d,p=l.middleware,b=p===void 0?r():p,k=l.devTools,g=k===void 0?!0:k,v=l.preloadedState,A=v===void 0?void 0:v,x=l.enhancers,_=x===void 0?void 0:x,C;if(typeof h=="function")C=h;else if(n9(h))C=q7(h);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var M=b;typeof M=="function"&&(M=M(r));var T=G7.apply(void 0,M),L=Op;g&&(L=t9(ka({trace:!l9},typeof g=="object"&&g)));var P=new r9(T),j=P;Array.isArray(_)?j=Dd([T],_):typeof _=="function"&&(j=_(P));var O=L.apply(void 0,j);return LT(C,A,O)}function wa(n,r){function l(){for(var d=[],h=0;h<arguments.length;h++)d[h]=arguments[h];if(r){var p=r.apply(void 0,d);if(!p)throw new Error("prepareAction did not return an object");return ka(ka({type:n,payload:p.payload},"meta"in p&&{meta:p.meta}),"error"in p&&{error:p.error})}return{type:n,payload:d[0]}}return l.toString=function(){return""+n},l.type=n,l.match=function(d){return d.type===n},l}function VT(n){var r={},l=[],d,h={addCase:function(p,b){var k=typeof p=="string"?p:p.type;if(k in r)throw new Error("addCase cannot be called with two reducers for the same action type");return r[k]=b,h},addMatcher:function(p,b){return l.push({matcher:p,reducer:b}),h},addDefaultCase:function(p){return d=p,h}};return n(h),[r,l,d]}function d9(n){return typeof n=="function"}function u9(n,r,l,d){l===void 0&&(l=[]);var h=typeof r=="function"?VT(r):[r,l,d],p=h[0],b=h[1],k=h[2],g;if(d9(n))g=function(){return I0(n())};else{var v=I0(n);g=function(){return v}}function A(x,_){x===void 0&&(x=g());var C=Dd([p[_.type]],b.filter(function(M){var T=M.matcher;return T(_)}).map(function(M){var T=M.reducer;return T}));return C.filter(function(M){return!!M}).length===0&&(C=[k]),C.reduce(function(M,T){if(T)if(Aa(M)){var L=M,P=T(L,_);return P===void 0?M:P}else{if(vs(M))return OT(M,function(j){return T(j,_)});var P=T(M,_);if(P===void 0){if(M===null)return M;throw Error("A case reducer on a non-draftable value must not return undefined")}return P}return M},x)}return A.getInitialState=g,A}function h9(n,r){return n+"/"+r}function Vt(n){var r=n.name;if(!r)throw new Error("`name` is a required option for createSlice");typeof process<"u";var l=typeof n.initialState=="function"?n.initialState:I0(n.initialState),d=n.reducers||{},h=Object.keys(d),p={},b={},k={};h.forEach(function(A){var x=d[A],_=h9(r,A),C,M;"reducer"in x?(C=x.reducer,M=x.prepare):C=x,p[A]=C,b[_]=C,k[A]=M?wa(_,M):wa(_)});function g(){var A=typeof n.extraReducers=="function"?VT(n.extraReducers):[n.extraReducers],x=A[0],_=x===void 0?{}:x,C=A[1],M=C===void 0?[]:C,T=A[2],L=T===void 0?void 0:T,P=ka(ka({},_),b);return u9(l,function(j){for(var O in P)j.addCase(O,P[O]);for(var R=0,W=M;R<W.length;R++){var Q=W[R];j.addMatcher(Q.matcher,Q.reducer)}L&&j.addDefaultCase(L)})}var v;return{name:r,reducer:function(A,x){return v||(v=g()),v(A,x)},actions:k,caseReducers:p,getInitialState:function(){return v||(v=g()),v.getInitialState()}}}var f9="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",p9=function(n){n===void 0&&(n=21);for(var r="",l=n;l--;)r+=f9[Math.random()*64|0];return r},g9=["name","message","stack","code"],lk=function(){function n(r,l){this.payload=r,this.meta=l}return n}(),aS=function(){function n(r,l){this.payload=r,this.meta=l}return n}(),m9=function(n){if(typeof n=="object"&&n!==null){for(var r={},l=0,d=g9;l<d.length;l++){var h=d[l];typeof n[h]=="string"&&(r[h]=n[h])}return r}return{message:String(n)}},Ut=function(){function n(r,l,d){var h=wa(r+"/fulfilled",function(v,A,x,_){return{payload:v,meta:ak(ka({},_||{}),{arg:x,requestId:A,requestStatus:"fulfilled"})}}),p=wa(r+"/pending",function(v,A,x){return{payload:void 0,meta:ak(ka({},x||{}),{arg:A,requestId:v,requestStatus:"pending"})}}),b=wa(r+"/rejected",function(v,A,x,_,C){return{payload:_,error:(d&&d.serializeError||m9)(v||"Rejected"),meta:ak(ka({},C||{}),{arg:x,requestId:A,rejectedWithValue:!!_,requestStatus:"rejected",aborted:(v==null?void 0:v.name)==="AbortError",condition:(v==null?void 0:v.name)==="ConditionError"})}}),k=typeof AbortController<"u"?AbortController:function(){function v(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return v.prototype.abort=function(){},v}();function g(v){return function(A,x,_){var C=d!=null&&d.idGenerator?d.idGenerator(v):p9(),M=new k,T;function L(j){T=j,M.abort()}var P=function(){return e9(this,null,function(){var j,O,R,W,Q,Y,V;return K7(this,function(ee){switch(ee.label){case 0:return ee.trys.push([0,4,,5]),W=(j=d==null?void 0:d.condition)==null?void 0:j.call(d,v,{getState:x,extra:_}),k9(W)?[4,W]:[3,2];case 1:W=ee.sent(),ee.label=2;case 2:if(W===!1||M.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return Q=new Promise(function(J,ne){return M.signal.addEventListener("abort",function(){return ne({name:"AbortError",message:T||"Aborted"})})}),A(p(C,v,(O=d==null?void 0:d.getPendingMeta)==null?void 0:O.call(d,{requestId:C,arg:v},{getState:x,extra:_}))),[4,Promise.race([Q,Promise.resolve(l(v,{dispatch:A,getState:x,extra:_,requestId:C,signal:M.signal,abort:L,rejectWithValue:function(J,ne){return new lk(J,ne)},fulfillWithValue:function(J,ne){return new aS(J,ne)}})).then(function(J){if(J instanceof lk)throw J;return J instanceof aS?h(J.payload,C,v,J.meta):h(J,C,v)})])];case 3:return R=ee.sent(),[3,5];case 4:return Y=ee.sent(),R=Y instanceof lk?b(null,C,v,Y.payload,Y.meta):b(Y,C,v),[3,5];case 5:return V=d&&!d.dispatchConditionRejection&&b.match(R)&&R.meta.condition,V||A(R),[2,R]}})})}();return Object.assign(P,{abort:L,requestId:C,arg:v,unwrap:function(){return P.then(b9)}})}}return Object.assign(g,{pending:p,rejected:b,fulfilled:h,typePrefix:r})}return n.withTypes=function(){return n},n}();function b9(n){if(n.meta&&n.meta.rejectedWithValue)throw n.payload;if(n.error)throw n.error;return n.payload}function k9(n){return n!==null&&typeof n=="object"&&typeof n.then=="function"}var Yw="listenerMiddleware";wa(Yw+"/add");wa(Yw+"/removeAll");wa(Yw+"/remove");var lS;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);O7();function UT(n,r){return function(){return n.apply(r,arguments)}}const{toString:w9}=Object.prototype,{getPrototypeOf:Qw}=Object,Eg=(n=>r=>{const l=w9.call(r);return n[l]||(n[l]=l.slice(8,-1).toLowerCase())})(Object.create(null)),qi=n=>(n=n.toLowerCase(),r=>Eg(r)===n),Sg=n=>r=>typeof r===n,{isArray:Bd}=Array,kh=Sg("undefined");function v9(n){return n!==null&&!kh(n)&&n.constructor!==null&&!kh(n.constructor)&&Lr(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const HT=qi("ArrayBuffer");function _9(n){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(n):r=n&&n.buffer&&HT(n.buffer),r}const y9=Sg("string"),Lr=Sg("function"),$T=Sg("number"),Dg=n=>n!==null&&typeof n=="object",C9=n=>n===!0||n===!1,op=n=>{if(Eg(n)!=="object")return!1;const r=Qw(n);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},A9=qi("Date"),x9=qi("File"),E9=qi("Blob"),S9=qi("FileList"),D9=n=>Dg(n)&&Lr(n.pipe),T9=n=>{let r;return n&&(typeof FormData=="function"&&n instanceof FormData||Lr(n.append)&&((r=Eg(n))==="formdata"||r==="object"&&Lr(n.toString)&&n.toString()==="[object FormData]"))},I9=qi("URLSearchParams"),M9=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Sh(n,r,{allOwnKeys:l=!1}={}){if(n===null||typeof n>"u")return;let d,h;if(typeof n!="object"&&(n=[n]),Bd(n))for(d=0,h=n.length;d<h;d++)r.call(null,n[d],d,n);else{const p=l?Object.getOwnPropertyNames(n):Object.keys(n),b=p.length;let k;for(d=0;d<b;d++)k=p[d],r.call(null,n[k],k,n)}}function WT(n,r){r=r.toLowerCase();const l=Object.keys(n);let d=l.length,h;for(;d-- >0;)if(h=l[d],r===h.toLowerCase())return h;return null}const qT=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),GT=n=>!kh(n)&&n!==qT;function M0(){const{caseless:n}=GT(this)&&this||{},r={},l=(d,h)=>{const p=n&&WT(r,h)||h;op(r[p])&&op(d)?r[p]=M0(r[p],d):op(d)?r[p]=M0({},d):Bd(d)?r[p]=d.slice():r[p]=d};for(let d=0,h=arguments.length;d<h;d++)arguments[d]&&Sh(arguments[d],l);return r}const N9=(n,r,l,{allOwnKeys:d}={})=>(Sh(r,(h,p)=>{l&&Lr(h)?n[p]=UT(h,l):n[p]=h},{allOwnKeys:d}),n),j9=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),P9=(n,r,l,d)=>{n.prototype=Object.create(r.prototype,d),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:r.prototype}),l&&Object.assign(n.prototype,l)},B9=(n,r,l,d)=>{let h,p,b;const k={};if(r=r||{},n==null)return r;do{for(h=Object.getOwnPropertyNames(n),p=h.length;p-- >0;)b=h[p],(!d||d(b,n,r))&&!k[b]&&(r[b]=n[b],k[b]=!0);n=l!==!1&&Qw(n)}while(n&&(!l||l(n,r))&&n!==Object.prototype);return r},O9=(n,r,l)=>{n=String(n),(l===void 0||l>n.length)&&(l=n.length),l-=r.length;const d=n.indexOf(r,l);return d!==-1&&d===l},L9=n=>{if(!n)return null;if(Bd(n))return n;let r=n.length;if(!$T(r))return null;const l=new Array(r);for(;r-- >0;)l[r]=n[r];return l},R9=(n=>r=>n&&r instanceof n)(typeof Uint8Array<"u"&&Qw(Uint8Array)),z9=(n,r)=>{const d=(n&&n[Symbol.iterator]).call(n);let h;for(;(h=d.next())&&!h.done;){const p=h.value;r.call(n,p[0],p[1])}},F9=(n,r)=>{let l;const d=[];for(;(l=n.exec(r))!==null;)d.push(l);return d},V9=qi("HTMLFormElement"),U9=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(l,d,h){return d.toUpperCase()+h}),cS=(({hasOwnProperty:n})=>(r,l)=>n.call(r,l))(Object.prototype),H9=qi("RegExp"),KT=(n,r)=>{const l=Object.getOwnPropertyDescriptors(n),d={};Sh(l,(h,p)=>{let b;(b=r(h,p,n))!==!1&&(d[p]=b||h)}),Object.defineProperties(n,d)},$9=n=>{KT(n,(r,l)=>{if(Lr(n)&&["arguments","caller","callee"].indexOf(l)!==-1)return!1;const d=n[l];if(Lr(d)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+l+"'")})}})},W9=(n,r)=>{const l={},d=h=>{h.forEach(p=>{l[p]=!0})};return Bd(n)?d(n):d(String(n).split(r)),l},q9=()=>{},G9=(n,r)=>(n=+n,Number.isFinite(n)?n:r),ck="abcdefghijklmnopqrstuvwxyz",dS="0123456789",YT={DIGIT:dS,ALPHA:ck,ALPHA_DIGIT:ck+ck.toUpperCase()+dS},K9=(n=16,r=YT.ALPHA_DIGIT)=>{let l="";const{length:d}=r;for(;n--;)l+=r[Math.random()*d|0];return l};function Y9(n){return!!(n&&Lr(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const Q9=n=>{const r=new Array(10),l=(d,h)=>{if(Dg(d)){if(r.indexOf(d)>=0)return;if(!("toJSON"in d)){r[h]=d;const p=Bd(d)?[]:{};return Sh(d,(b,k)=>{const g=l(b,h+1);!kh(g)&&(p[k]=g)}),r[h]=void 0,p}}return d};return l(n,0)},Z9=qi("AsyncFunction"),J9=n=>n&&(Dg(n)||Lr(n))&&Lr(n.then)&&Lr(n.catch),de={isArray:Bd,isArrayBuffer:HT,isBuffer:v9,isFormData:T9,isArrayBufferView:_9,isString:y9,isNumber:$T,isBoolean:C9,isObject:Dg,isPlainObject:op,isUndefined:kh,isDate:A9,isFile:x9,isBlob:E9,isRegExp:H9,isFunction:Lr,isStream:D9,isURLSearchParams:I9,isTypedArray:R9,isFileList:S9,forEach:Sh,merge:M0,extend:N9,trim:M9,stripBOM:j9,inherits:P9,toFlatObject:B9,kindOf:Eg,kindOfTest:qi,endsWith:O9,toArray:L9,forEachEntry:z9,matchAll:F9,isHTMLForm:V9,hasOwnProperty:cS,hasOwnProp:cS,reduceDescriptors:KT,freezeMethods:$9,toObjectSet:W9,toCamelCase:U9,noop:q9,toFiniteNumber:G9,findKey:WT,global:qT,isContextDefined:GT,ALPHABET:YT,generateString:K9,isSpecCompliantForm:Y9,toJSONObject:Q9,isAsyncFn:Z9,isThenable:J9};function mt(n,r,l,d,h){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",r&&(this.code=r),l&&(this.config=l),d&&(this.request=d),h&&(this.response=h)}de.inherits(mt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:de.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const QT=mt.prototype,ZT={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{ZT[n]={value:n}});Object.defineProperties(mt,ZT);Object.defineProperty(QT,"isAxiosError",{value:!0});mt.from=(n,r,l,d,h,p)=>{const b=Object.create(QT);return de.toFlatObject(n,b,function(g){return g!==Error.prototype},k=>k!=="isAxiosError"),mt.call(b,n.message,r,l,d,h),b.cause=n,b.name=n.name,p&&Object.assign(b,p),b};const X9=null;function N0(n){return de.isPlainObject(n)||de.isArray(n)}function JT(n){return de.endsWith(n,"[]")?n.slice(0,-2):n}function uS(n,r,l){return n?n.concat(r).map(function(h,p){return h=JT(h),!l&&p?"["+h+"]":h}).join(l?".":""):r}function e8(n){return de.isArray(n)&&!n.some(N0)}const t8=de.toFlatObject(de,{},null,function(r){return/^is[A-Z]/.test(r)});function Tg(n,r,l){if(!de.isObject(n))throw new TypeError("target must be an object");r=r||new FormData,l=de.toFlatObject(l,{metaTokens:!0,dots:!1,indexes:!1},!1,function(T,L){return!de.isUndefined(L[T])});const d=l.metaTokens,h=l.visitor||A,p=l.dots,b=l.indexes,g=(l.Blob||typeof Blob<"u"&&Blob)&&de.isSpecCompliantForm(r);if(!de.isFunction(h))throw new TypeError("visitor must be a function");function v(M){if(M===null)return"";if(de.isDate(M))return M.toISOString();if(!g&&de.isBlob(M))throw new mt("Blob is not supported. Use a Buffer instead.");return de.isArrayBuffer(M)||de.isTypedArray(M)?g&&typeof Blob=="function"?new Blob([M]):Buffer.from(M):M}function A(M,T,L){let P=M;if(M&&!L&&typeof M=="object"){if(de.endsWith(T,"{}"))T=d?T:T.slice(0,-2),M=JSON.stringify(M);else if(de.isArray(M)&&e8(M)||(de.isFileList(M)||de.endsWith(T,"[]"))&&(P=de.toArray(M)))return T=JT(T),P.forEach(function(O,R){!(de.isUndefined(O)||O===null)&&r.append(b===!0?uS([T],R,p):b===null?T:T+"[]",v(O))}),!1}return N0(M)?!0:(r.append(uS(L,T,p),v(M)),!1)}const x=[],_=Object.assign(t8,{defaultVisitor:A,convertValue:v,isVisitable:N0});function C(M,T){if(!de.isUndefined(M)){if(x.indexOf(M)!==-1)throw Error("Circular reference detected in "+T.join("."));x.push(M),de.forEach(M,function(P,j){(!(de.isUndefined(P)||P===null)&&h.call(r,P,de.isString(j)?j.trim():j,T,_))===!0&&C(P,T?T.concat(j):[j])}),x.pop()}}if(!de.isObject(n))throw new TypeError("data must be an object");return C(n),r}function hS(n){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(d){return r[d]})}function Zw(n,r){this._pairs=[],n&&Tg(n,this,r)}const XT=Zw.prototype;XT.append=function(r,l){this._pairs.push([r,l])};XT.toString=function(r){const l=r?function(d){return r.call(this,d,hS)}:hS;return this._pairs.map(function(h){return l(h[0])+"="+l(h[1])},"").join("&")};function n8(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function eI(n,r,l){if(!r)return n;const d=l&&l.encode||n8,h=l&&l.serialize;let p;if(h?p=h(r,l):p=de.isURLSearchParams(r)?r.toString():new Zw(r,l).toString(d),p){const b=n.indexOf("#");b!==-1&&(n=n.slice(0,b)),n+=(n.indexOf("?")===-1?"?":"&")+p}return n}class o8{constructor(){this.handlers=[]}use(r,l,d){return this.handlers.push({fulfilled:r,rejected:l,synchronous:d?d.synchronous:!1,runWhen:d?d.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){de.forEach(this.handlers,function(d){d!==null&&r(d)})}}const fS=o8,tI={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},r8=typeof URLSearchParams<"u"?URLSearchParams:Zw,i8=typeof FormData<"u"?FormData:null,s8=typeof Blob<"u"?Blob:null,a8=(()=>{let n;return typeof navigator<"u"&&((n=navigator.product)==="ReactNative"||n==="NativeScript"||n==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),l8=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),si={isBrowser:!0,classes:{URLSearchParams:r8,FormData:i8,Blob:s8},isStandardBrowserEnv:a8,isStandardBrowserWebWorkerEnv:l8,protocols:["http","https","file","blob","url","data"]};function c8(n,r){return Tg(n,new si.classes.URLSearchParams,Object.assign({visitor:function(l,d,h,p){return si.isNode&&de.isBuffer(l)?(this.append(d,l.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)}},r))}function d8(n){return de.matchAll(/\w+|\[(\w*)]/g,n).map(r=>r[0]==="[]"?"":r[1]||r[0])}function u8(n){const r={},l=Object.keys(n);let d;const h=l.length;let p;for(d=0;d<h;d++)p=l[d],r[p]=n[p];return r}function nI(n){function r(l,d,h,p){let b=l[p++];const k=Number.isFinite(+b),g=p>=l.length;return b=!b&&de.isArray(h)?h.length:b,g?(de.hasOwnProp(h,b)?h[b]=[h[b],d]:h[b]=d,!k):((!h[b]||!de.isObject(h[b]))&&(h[b]=[]),r(l,d,h[b],p)&&de.isArray(h[b])&&(h[b]=u8(h[b])),!k)}if(de.isFormData(n)&&de.isFunction(n.entries)){const l={};return de.forEachEntry(n,(d,h)=>{r(d8(d),h,l,0)}),l}return null}function h8(n,r,l){if(de.isString(n))try{return(r||JSON.parse)(n),de.trim(n)}catch(d){if(d.name!=="SyntaxError")throw d}return(l||JSON.stringify)(n)}const Jw={transitional:tI,adapter:si.isNode?"http":"xhr",transformRequest:[function(r,l){const d=l.getContentType()||"",h=d.indexOf("application/json")>-1,p=de.isObject(r);if(p&&de.isHTMLForm(r)&&(r=new FormData(r)),de.isFormData(r))return h&&h?JSON.stringify(nI(r)):r;if(de.isArrayBuffer(r)||de.isBuffer(r)||de.isStream(r)||de.isFile(r)||de.isBlob(r))return r;if(de.isArrayBufferView(r))return r.buffer;if(de.isURLSearchParams(r))return l.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let k;if(p){if(d.indexOf("application/x-www-form-urlencoded")>-1)return c8(r,this.formSerializer).toString();if((k=de.isFileList(r))||d.indexOf("multipart/form-data")>-1){const g=this.env&&this.env.FormData;return Tg(k?{"files[]":r}:r,g&&new g,this.formSerializer)}}return p||h?(l.setContentType("application/json",!1),h8(r)):r}],transformResponse:[function(r){const l=this.transitional||Jw.transitional,d=l&&l.forcedJSONParsing,h=this.responseType==="json";if(r&&de.isString(r)&&(d&&!this.responseType||h)){const b=!(l&&l.silentJSONParsing)&&h;try{return JSON.parse(r)}catch(k){if(b)throw k.name==="SyntaxError"?mt.from(k,mt.ERR_BAD_RESPONSE,this,null,this.response):k}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:si.classes.FormData,Blob:si.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};de.forEach(["delete","get","head","post","put","patch"],n=>{Jw.headers[n]={}});const Xw=Jw,f8=de.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),p8=n=>{const r={};let l,d,h;return n&&n.split(`
`).forEach(function(b){h=b.indexOf(":"),l=b.substring(0,h).trim().toLowerCase(),d=b.substring(h+1).trim(),!(!l||r[l]&&f8[l])&&(l==="set-cookie"?r[l]?r[l].push(d):r[l]=[d]:r[l]=r[l]?r[l]+", "+d:d)}),r},pS=Symbol("internals");function Tu(n){return n&&String(n).trim().toLowerCase()}function rp(n){return n===!1||n==null?n:de.isArray(n)?n.map(rp):String(n)}function g8(n){const r=Object.create(null),l=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let d;for(;d=l.exec(n);)r[d[1]]=d[2];return r}const m8=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function dk(n,r,l,d,h){if(de.isFunction(d))return d.call(this,r,l);if(h&&(r=l),!!de.isString(r)){if(de.isString(d))return r.indexOf(d)!==-1;if(de.isRegExp(d))return d.test(r)}}function b8(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,l,d)=>l.toUpperCase()+d)}function k8(n,r){const l=de.toCamelCase(" "+r);["get","set","has"].forEach(d=>{Object.defineProperty(n,d+l,{value:function(h,p,b){return this[d].call(this,r,h,p,b)},configurable:!0})})}class Ig{constructor(r){r&&this.set(r)}set(r,l,d){const h=this;function p(k,g,v){const A=Tu(g);if(!A)throw new Error("header name must be a non-empty string");const x=de.findKey(h,A);(!x||h[x]===void 0||v===!0||v===void 0&&h[x]!==!1)&&(h[x||g]=rp(k))}const b=(k,g)=>de.forEach(k,(v,A)=>p(v,A,g));return de.isPlainObject(r)||r instanceof this.constructor?b(r,l):de.isString(r)&&(r=r.trim())&&!m8(r)?b(p8(r),l):r!=null&&p(l,r,d),this}get(r,l){if(r=Tu(r),r){const d=de.findKey(this,r);if(d){const h=this[d];if(!l)return h;if(l===!0)return g8(h);if(de.isFunction(l))return l.call(this,h,d);if(de.isRegExp(l))return l.exec(h);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,l){if(r=Tu(r),r){const d=de.findKey(this,r);return!!(d&&this[d]!==void 0&&(!l||dk(this,this[d],d,l)))}return!1}delete(r,l){const d=this;let h=!1;function p(b){if(b=Tu(b),b){const k=de.findKey(d,b);k&&(!l||dk(d,d[k],k,l))&&(delete d[k],h=!0)}}return de.isArray(r)?r.forEach(p):p(r),h}clear(r){const l=Object.keys(this);let d=l.length,h=!1;for(;d--;){const p=l[d];(!r||dk(this,this[p],p,r,!0))&&(delete this[p],h=!0)}return h}normalize(r){const l=this,d={};return de.forEach(this,(h,p)=>{const b=de.findKey(d,p);if(b){l[b]=rp(h),delete l[p];return}const k=r?b8(p):String(p).trim();k!==p&&delete l[p],l[k]=rp(h),d[k]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const l=Object.create(null);return de.forEach(this,(d,h)=>{d!=null&&d!==!1&&(l[h]=r&&de.isArray(d)?d.join(", "):d)}),l}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,l])=>r+": "+l).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...l){const d=new this(r);return l.forEach(h=>d.set(h)),d}static accessor(r){const d=(this[pS]=this[pS]={accessors:{}}).accessors,h=this.prototype;function p(b){const k=Tu(b);d[k]||(k8(h,b),d[k]=!0)}return de.isArray(r)?r.forEach(p):p(r),this}}Ig.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);de.reduceDescriptors(Ig.prototype,({value:n},r)=>{let l=r[0].toUpperCase()+r.slice(1);return{get:()=>n,set(d){this[l]=d}}});de.freezeMethods(Ig);const ps=Ig;function uk(n,r){const l=this||Xw,d=r||l,h=ps.from(d.headers);let p=d.data;return de.forEach(n,function(k){p=k.call(l,p,h.normalize(),r?r.status:void 0)}),h.normalize(),p}function oI(n){return!!(n&&n.__CANCEL__)}function Dh(n,r,l){mt.call(this,n??"canceled",mt.ERR_CANCELED,r,l),this.name="CanceledError"}de.inherits(Dh,mt,{__CANCEL__:!0});function w8(n,r,l){const d=l.config.validateStatus;!l.status||!d||d(l.status)?n(l):r(new mt("Request failed with status code "+l.status,[mt.ERR_BAD_REQUEST,mt.ERR_BAD_RESPONSE][Math.floor(l.status/100)-4],l.config,l.request,l))}const v8=si.isStandardBrowserEnv?function(){return{write:function(l,d,h,p,b,k){const g=[];g.push(l+"="+encodeURIComponent(d)),de.isNumber(h)&&g.push("expires="+new Date(h).toGMTString()),de.isString(p)&&g.push("path="+p),de.isString(b)&&g.push("domain="+b),k===!0&&g.push("secure"),document.cookie=g.join("; ")},read:function(l){const d=document.cookie.match(new RegExp("(^|;\\s*)("+l+")=([^;]*)"));return d?decodeURIComponent(d[3]):null},remove:function(l){this.write(l,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function _8(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function y8(n,r){return r?n.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):n}function rI(n,r){return n&&!_8(r)?y8(n,r):r}const C8=si.isStandardBrowserEnv?function(){const r=/(msie|trident)/i.test(navigator.userAgent),l=document.createElement("a");let d;function h(p){let b=p;return r&&(l.setAttribute("href",b),b=l.href),l.setAttribute("href",b),{href:l.href,protocol:l.protocol?l.protocol.replace(/:$/,""):"",host:l.host,search:l.search?l.search.replace(/^\?/,""):"",hash:l.hash?l.hash.replace(/^#/,""):"",hostname:l.hostname,port:l.port,pathname:l.pathname.charAt(0)==="/"?l.pathname:"/"+l.pathname}}return d=h(window.location.href),function(b){const k=de.isString(b)?h(b):b;return k.protocol===d.protocol&&k.host===d.host}}():function(){return function(){return!0}}();function A8(n){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return r&&r[1]||""}function x8(n,r){n=n||10;const l=new Array(n),d=new Array(n);let h=0,p=0,b;return r=r!==void 0?r:1e3,function(g){const v=Date.now(),A=d[p];b||(b=v),l[h]=g,d[h]=v;let x=p,_=0;for(;x!==h;)_+=l[x++],x=x%n;if(h=(h+1)%n,h===p&&(p=(p+1)%n),v-b<r)return;const C=A&&v-A;return C?Math.round(_*1e3/C):void 0}}function gS(n,r){let l=0;const d=x8(50,250);return h=>{const p=h.loaded,b=h.lengthComputable?h.total:void 0,k=p-l,g=d(k),v=p<=b;l=p;const A={loaded:p,total:b,progress:b?p/b:void 0,bytes:k,rate:g||void 0,estimated:g&&b&&v?(b-p)/g:void 0,event:h};A[r?"download":"upload"]=!0,n(A)}}const E8=typeof XMLHttpRequest<"u",S8=E8&&function(n){return new Promise(function(l,d){let h=n.data;const p=ps.from(n.headers).normalize(),b=n.responseType;let k;function g(){n.cancelToken&&n.cancelToken.unsubscribe(k),n.signal&&n.signal.removeEventListener("abort",k)}de.isFormData(h)&&(si.isStandardBrowserEnv||si.isStandardBrowserWebWorkerEnv?p.setContentType(!1):p.setContentType("multipart/form-data;",!1));let v=new XMLHttpRequest;if(n.auth){const C=n.auth.username||"",M=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";p.set("Authorization","Basic "+btoa(C+":"+M))}const A=rI(n.baseURL,n.url);v.open(n.method.toUpperCase(),eI(A,n.params,n.paramsSerializer),!0),v.timeout=n.timeout;function x(){if(!v)return;const C=ps.from("getAllResponseHeaders"in v&&v.getAllResponseHeaders()),T={data:!b||b==="text"||b==="json"?v.responseText:v.response,status:v.status,statusText:v.statusText,headers:C,config:n,request:v};w8(function(P){l(P),g()},function(P){d(P),g()},T),v=null}if("onloadend"in v?v.onloadend=x:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(x)},v.onabort=function(){v&&(d(new mt("Request aborted",mt.ECONNABORTED,n,v)),v=null)},v.onerror=function(){d(new mt("Network Error",mt.ERR_NETWORK,n,v)),v=null},v.ontimeout=function(){let M=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const T=n.transitional||tI;n.timeoutErrorMessage&&(M=n.timeoutErrorMessage),d(new mt(M,T.clarifyTimeoutError?mt.ETIMEDOUT:mt.ECONNABORTED,n,v)),v=null},si.isStandardBrowserEnv){const C=(n.withCredentials||C8(A))&&n.xsrfCookieName&&v8.read(n.xsrfCookieName);C&&p.set(n.xsrfHeaderName,C)}h===void 0&&p.setContentType(null),"setRequestHeader"in v&&de.forEach(p.toJSON(),function(M,T){v.setRequestHeader(T,M)}),de.isUndefined(n.withCredentials)||(v.withCredentials=!!n.withCredentials),b&&b!=="json"&&(v.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&v.addEventListener("progress",gS(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&v.upload&&v.upload.addEventListener("progress",gS(n.onUploadProgress)),(n.cancelToken||n.signal)&&(k=C=>{v&&(d(!C||C.type?new Dh(null,n,v):C),v.abort(),v=null)},n.cancelToken&&n.cancelToken.subscribe(k),n.signal&&(n.signal.aborted?k():n.signal.addEventListener("abort",k)));const _=A8(A);if(_&&si.protocols.indexOf(_)===-1){d(new mt("Unsupported protocol "+_+":",mt.ERR_BAD_REQUEST,n));return}v.send(h||null)})},ip={http:X9,xhr:S8};de.forEach(ip,(n,r)=>{if(n){try{Object.defineProperty(n,"name",{value:r})}catch{}Object.defineProperty(n,"adapterName",{value:r})}});const iI={getAdapter:n=>{n=de.isArray(n)?n:[n];const{length:r}=n;let l,d;for(let h=0;h<r&&(l=n[h],!(d=de.isString(l)?ip[l.toLowerCase()]:l));h++);if(!d)throw d===!1?new mt(`Adapter ${l} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(de.hasOwnProp(ip,l)?`Adapter '${l}' is not available in the build`:`Unknown adapter '${l}'`);if(!de.isFunction(d))throw new TypeError("adapter is not a function");return d},adapters:ip};function hk(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Dh(null,n)}function mS(n){return hk(n),n.headers=ps.from(n.headers),n.data=uk.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),iI.getAdapter(n.adapter||Xw.adapter)(n).then(function(d){return hk(n),d.data=uk.call(n,n.transformResponse,d),d.headers=ps.from(d.headers),d},function(d){return oI(d)||(hk(n),d&&d.response&&(d.response.data=uk.call(n,n.transformResponse,d.response),d.response.headers=ps.from(d.response.headers))),Promise.reject(d)})}const bS=n=>n instanceof ps?n.toJSON():n;function Td(n,r){r=r||{};const l={};function d(v,A,x){return de.isPlainObject(v)&&de.isPlainObject(A)?de.merge.call({caseless:x},v,A):de.isPlainObject(A)?de.merge({},A):de.isArray(A)?A.slice():A}function h(v,A,x){if(de.isUndefined(A)){if(!de.isUndefined(v))return d(void 0,v,x)}else return d(v,A,x)}function p(v,A){if(!de.isUndefined(A))return d(void 0,A)}function b(v,A){if(de.isUndefined(A)){if(!de.isUndefined(v))return d(void 0,v)}else return d(void 0,A)}function k(v,A,x){if(x in r)return d(v,A);if(x in n)return d(void 0,v)}const g={url:p,method:p,data:p,baseURL:b,transformRequest:b,transformResponse:b,paramsSerializer:b,timeout:b,timeoutMessage:b,withCredentials:b,adapter:b,responseType:b,xsrfCookieName:b,xsrfHeaderName:b,onUploadProgress:b,onDownloadProgress:b,decompress:b,maxContentLength:b,maxBodyLength:b,beforeRedirect:b,transport:b,httpAgent:b,httpsAgent:b,cancelToken:b,socketPath:b,responseEncoding:b,validateStatus:k,headers:(v,A)=>h(bS(v),bS(A),!0)};return de.forEach(Object.keys(Object.assign({},n,r)),function(A){const x=g[A]||h,_=x(n[A],r[A],A);de.isUndefined(_)&&x!==k||(l[A]=_)}),l}const sI="1.5.0",ev={};["object","boolean","number","function","string","symbol"].forEach((n,r)=>{ev[n]=function(d){return typeof d===n||"a"+(r<1?"n ":" ")+n}});const kS={};ev.transitional=function(r,l,d){function h(p,b){return"[Axios v"+sI+"] Transitional option '"+p+"'"+b+(d?". "+d:"")}return(p,b,k)=>{if(r===!1)throw new mt(h(b," has been removed"+(l?" in "+l:"")),mt.ERR_DEPRECATED);return l&&!kS[b]&&(kS[b]=!0,console.warn(h(b," has been deprecated since v"+l+" and will be removed in the near future"))),r?r(p,b,k):!0}};function D8(n,r,l){if(typeof n!="object")throw new mt("options must be an object",mt.ERR_BAD_OPTION_VALUE);const d=Object.keys(n);let h=d.length;for(;h-- >0;){const p=d[h],b=r[p];if(b){const k=n[p],g=k===void 0||b(k,p,n);if(g!==!0)throw new mt("option "+p+" must be "+g,mt.ERR_BAD_OPTION_VALUE);continue}if(l!==!0)throw new mt("Unknown option "+p,mt.ERR_BAD_OPTION)}}const j0={assertOptions:D8,validators:ev},na=j0.validators;class Lp{constructor(r){this.defaults=r,this.interceptors={request:new fS,response:new fS}}request(r,l){typeof r=="string"?(l=l||{},l.url=r):l=r||{},l=Td(this.defaults,l);const{transitional:d,paramsSerializer:h,headers:p}=l;d!==void 0&&j0.assertOptions(d,{silentJSONParsing:na.transitional(na.boolean),forcedJSONParsing:na.transitional(na.boolean),clarifyTimeoutError:na.transitional(na.boolean)},!1),h!=null&&(de.isFunction(h)?l.paramsSerializer={serialize:h}:j0.assertOptions(h,{encode:na.function,serialize:na.function},!0)),l.method=(l.method||this.defaults.method||"get").toLowerCase();let b=p&&de.merge(p.common,p[l.method]);p&&de.forEach(["delete","get","head","post","put","patch","common"],M=>{delete p[M]}),l.headers=ps.concat(b,p);const k=[];let g=!0;this.interceptors.request.forEach(function(T){typeof T.runWhen=="function"&&T.runWhen(l)===!1||(g=g&&T.synchronous,k.unshift(T.fulfilled,T.rejected))});const v=[];this.interceptors.response.forEach(function(T){v.push(T.fulfilled,T.rejected)});let A,x=0,_;if(!g){const M=[mS.bind(this),void 0];for(M.unshift.apply(M,k),M.push.apply(M,v),_=M.length,A=Promise.resolve(l);x<_;)A=A.then(M[x++],M[x++]);return A}_=k.length;let C=l;for(x=0;x<_;){const M=k[x++],T=k[x++];try{C=M(C)}catch(L){T.call(this,L);break}}try{A=mS.call(this,C)}catch(M){return Promise.reject(M)}for(x=0,_=v.length;x<_;)A=A.then(v[x++],v[x++]);return A}getUri(r){r=Td(this.defaults,r);const l=rI(r.baseURL,r.url);return eI(l,r.params,r.paramsSerializer)}}de.forEach(["delete","get","head","options"],function(r){Lp.prototype[r]=function(l,d){return this.request(Td(d||{},{method:r,url:l,data:(d||{}).data}))}});de.forEach(["post","put","patch"],function(r){function l(d){return function(p,b,k){return this.request(Td(k||{},{method:r,headers:d?{"Content-Type":"multipart/form-data"}:{},url:p,data:b}))}}Lp.prototype[r]=l(),Lp.prototype[r+"Form"]=l(!0)});const sp=Lp;class tv{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let l;this.promise=new Promise(function(p){l=p});const d=this;this.promise.then(h=>{if(!d._listeners)return;let p=d._listeners.length;for(;p-- >0;)d._listeners[p](h);d._listeners=null}),this.promise.then=h=>{let p;const b=new Promise(k=>{d.subscribe(k),p=k}).then(h);return b.cancel=function(){d.unsubscribe(p)},b},r(function(p,b,k){d.reason||(d.reason=new Dh(p,b,k),l(d.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const l=this._listeners.indexOf(r);l!==-1&&this._listeners.splice(l,1)}static source(){let r;return{token:new tv(function(h){r=h}),cancel:r}}}const T8=tv;function I8(n){return function(l){return n.apply(null,l)}}function M8(n){return de.isObject(n)&&n.isAxiosError===!0}const P0={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(P0).forEach(([n,r])=>{P0[r]=n});const N8=P0;function aI(n){const r=new sp(n),l=UT(sp.prototype.request,r);return de.extend(l,sp.prototype,r,{allOwnKeys:!0}),de.extend(l,r,null,{allOwnKeys:!0}),l.create=function(h){return aI(Td(n,h))},l}const Rn=aI(Xw);Rn.Axios=sp;Rn.CanceledError=Dh;Rn.CancelToken=T8;Rn.isCancel=oI;Rn.VERSION=sI;Rn.toFormData=Tg;Rn.AxiosError=mt;Rn.Cancel=Rn.CanceledError;Rn.all=function(r){return Promise.all(r)};Rn.spread=I8;Rn.isAxiosError=M8;Rn.mergeConfig=Td;Rn.AxiosHeaders=ps;Rn.formToJSON=n=>nI(de.isHTMLForm(n)?new FormData(n):n);Rn.getAdapter=iI.getAdapter;Rn.HttpStatusCode=N8;Rn.default=Rn;const rt=Rn,fk=Ut("categorys",async()=>{const n="https://server-agency-1203.onrender.com/blog/all_categoryes/";return(await rt.get(n)).data}),j8=Vt({name:"categorys",initialState:{info:null,status:null,error:null},reducers:{},extraReducers:function(n){n.addCase(fk.pending,function(r){r.status="pending"}),n.addCase(fk.fulfilled,function(r,l){r.status="fulfilled",r.info=l.payload}),n.addCase(fk.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),P8=j8.reducer,wS=Ut("allBlogs",async()=>{const n="https://server-agency-1203.onrender.com/blog/all_blog/";try{const r=await rt.get(n);return{status:r.status,data:r.data}}catch(r){return{status:r.response.status,data:r.response.data}}}),B8=Vt({name:"allBlogs",initialState:{info:null,status:null,error:null},reducers:{},extraReducers:function(n){n.addCase(wS.pending,function(r){r.status="pending"}),n.addCase(wS.fulfilled,function(r,l){l.payload.status===404?(r.status="rejected",r.info=l.payload.data):(r.status="fulfilled",r.info=l.payload.data)})}}),O8=B8.reducer,pk=Ut("blogTypeCategory",async n=>{const r=`https://server-agency-1203.onrender.com/blog/blog_by_category/?slug=${n}`;return(await rt.get(r)).data}),L8=Vt({name:"BlogTypeCategory",initialState:{info:null,status:null,error:null},reducers:{},extraReducers:function(n){n.addCase(pk.pending,function(r){r.status="pending"}),n.addCase(pk.fulfilled,function(r,l){r.status="fulfilled",r.info=l.payload}),n.addCase(pk.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),R8=L8.reducer,gk=Ut("blogDetail",async n=>{const r=`https://server-agency-1203.onrender.com/blog/blog_detail/?slug=${n}`;try{return(await rt.get(r)).data}catch{throw new Error("Este blog no existe")}}),z8=Vt({name:"blogDetail",initialState:{info:null,status:null,error:null},reducers:{},extraReducers:function(n){n.addCase(gk.pending,function(r){r.status="pending"}),n.addCase(gk.fulfilled,function(r,l){r.status="fulfilled",r.info=l.payload}),n.addCase(gk.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),F8=z8.reducer,mk=Ut("SearchBlogs",async n=>{const r=`https://server-agency-1203.onrender.com/blog/search_blogs/?slug=${n}`;return(await rt.get(r)).data}),V8=Vt({name:"searchBlogs",initialState:{info:null,status:null,error:null},reducers:{},extraReducers:function(n){n.addCase(mk.pending,function(r){r.status="pending"}),n.addCase(mk.fulfilled,function(r,l){r.status="fulfilled",r.info=l.payload}),n.addCase(mk.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),U8=V8.reducer,vS=Ut("create_user",async n=>{const r="https://server-agency-1203.onrender.com/user_system/auth/users/";try{const l=await rt.post(r,n);return{status:l.status,data:l.data}}catch(l){return{status:l.response.status,data:l.response.data}}}),H8={info:null,status:null,error:null},$8=Vt({name:"createUser",initialState:H8,reducers:{},extraReducers:function(n){n.addCase(vS.pending,function(r){r.status="pending"}),n.addCase(vS.fulfilled,function(r,l){l.payload.status===400?(r.status="rejected",r.info=l.payload.data):(r.status="fulfilled",r.info=l.payload.data)})}}),W8=$8.reducer,bk=Ut("resendEmail",async n=>{const r="https://server-agency-1203.onrender.com/user_system/auth/users/resend_activation/";return(await rt.post(r,n)).data}),q8={status:null,error:null},G8=Vt({name:"resendEmail",initialState:q8,reducers:{},extraReducers:function(n){n.addCase(bk.pending,function(r){r.status="pending"}),n.addCase(bk.fulfilled,function(r){r.status="fulfilled"}),n.addCase(bk.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),K8=G8.reducer,kk=Ut("activation",async n=>{const r="https://server-agency-1203.onrender.com/user_system/auth/users/activation/";return(await rt.post(r,n)).data}),Y8={status:null,error:null},Q8=Vt({name:"activationUser",initialState:Y8,reducers:{},extraReducers:function(n){n.addCase(kk.pending,function(r){r.status="pending"}),n.addCase(kk.fulfilled,function(r){r.status="fulfilled"}),n.addCase(kk.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),Z8=Q8.reducer,wk=Ut("JWTCreate",async n=>{const r="https://server-agency-1203.onrender.com/user_system/auth/jwt/create/";return(await rt.post(r,n)).data}),J8={info:null,status:null,error:null},X8=Vt({name:"signinUser",initialState:J8,reducers:{},extraReducers:function(n){n.addCase(wk.pending,function(r){r.status="pending"}),n.addCase(wk.fulfilled,function(r,l){r.status="fulfilled",r.info=l.payload.refresh}),n.addCase(wk.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),eF=X8.reducer,vk=Ut("JWTRefresh",async n=>{const r="https://server-agency-1203.onrender.com/user_system/auth/jwt/refresh/";return(await rt.post(r,n)).data}),tF={info:null,status:null,error:null},nF=Vt({name:"JWTRefresh",initialState:tF,reducers:{},extraReducers:function(n){n.addCase(vk.pending,function(r){r.status="pending"}),n.addCase(vk.fulfilled,function(r,l){r.status="fulfilled",r.info=l.payload,localStorage.setItem("access",JSON.stringify(l.payload.access))}),n.addCase(vk.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),oF=nF.reducer,B0=Ut("JWTVerify",async n=>{const r="https://server-agency-1203.onrender.com/user_system/auth/jwt/verify/";try{return(await rt.post(r,n)).status}catch(l){return l.response.status}}),rF={status:null,error:null},iF=Vt({name:"JWTVerify",initialState:rF,reducers:{},extraReducers:function(n){n.addCase(B0.pending,function(r){r.status="pending"}),n.addCase(B0.fulfilled,function(r,l){l.payload==200?r.status="fulfilled":r.status="rejected"})}}),sF=iF.reducer,_S=Ut("userData",async n=>{const r={Authorization:`JWT ${n.jwt}`};if(n.method==="get")try{const l="https://server-agency-1203.onrender.com/user_system/auth/users/me/",d=await rt.get(l,{headers:r});return{status:d.status,data:d.data}}catch(l){return{status:l.response.status,data:l.response.data}}else if(n.method==="put")try{const l="https://server-agency-1203.onrender.com/user_system/auth/users/me/",d=await rt.put(l,n.info,{headers:r});return{status:d.status,data:d.data}}catch(l){return{status:l.response.status,data:l.response.data}}else throw new Error("Error")}),aF={info:null,status:null,error:null},lF=Vt({name:"userData",initialState:aF,reducers:{},extraReducers:function(n){n.addCase(_S.pending,function(r){r.status="pending"}),n.addCase(_S.fulfilled,function(r,l){l.payload.status===200?(r.status="fulfilled",r.info=l.payload.data,localStorage.setItem("username",JSON.stringify(l.payload.data.username))):(r.status="rejected",r.info=l.payload.data)})}}),cF=lF.reducer,_k=Ut("restPassword",async n=>{const r="https://server-agency-1203.onrender.com/user_system/auth/users/reset_password/";try{return(await rt.post(r,n)).status}catch{throw new Error("El apartado de correo no puede ir vacio")}}),dF={status:null,error:null},uF=Vt({name:"resetPassword",initialState:dF,reducers:{},extraReducers:function(n){n.addCase(_k.pending,function(r){r.status="pending"}),n.addCase(_k.fulfilled,function(r,l){r.status="fulfilled"}),n.addCase(_k.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),hF=uF.reducer,yS=Ut("resetPasswordConfirm",async n=>{const r="https://server-agency-1203.onrender.com/user_system/auth/users/reset_password_confirm/";try{return(await rt.post(r,n)).status}catch(l){return{status:l.response.status,data:l.response.data}}}),fF={info:null,status:null,error:null},pF=Vt({name:"resetPasswordConfirm",initialState:fF,reducers:{},extraReducers:function(n){n.addCase(yS.pending,function(r){r.status="pending"}),n.addCase(yS.fulfilled,function(r,l){l.payload.status===204?r.status="fulfilled":(r.status="rejected",r.info=l.payload.data)})}}),gF=pF.reducer,yk=Ut("authGoogle",async()=>{const n="https://server-agency-1203.onrender.com/user_system/auth/o/google-oauth2/?redirect_uri=https://critianrodriguez042502.github.io/agency_view/#/access/signin";return(await rt.get(n)).data}),mF={url:null,status:null,error:null},bF=Vt({name:"authGoogle",initialState:mF,reducers:{},extraReducers:function(n){n.addCase(yk.pending,function(r){r.status="pending"}),n.addCase(yk.fulfilled,function(r,l){r.status="fulfilled",r.url=l.payload.authorization_url}),n.addCase(yk.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),kF=bF.reducer,CS=Ut("loginGoogle",async n=>{const r={headers:{"Content-Type":"application/x-www-form-urlencoded"}},l="https://server-agency-1203.onrender.com/user_system/auth/o/google-oauth2/";if(n.state&&n.code){const d=new URLSearchParams;d.append("state",d.state),d.append("code",d.code);try{const h=await rt.post(l,d.toString(),r);return{status:h.status,data:h.data}}catch(h){return{status:h.response.status,data:h.response.data}}}}),wF={info:null,status:null,error:null},vF=Vt({name:"loginGoogle",initialState:wF,reducers:{},extraReducers:function(n){n.addCase(CS.pending,function(r){r.status="pending"}),n.addCase(CS.fulfilled,function(r,l){l.payload.status===400?(r.status="rejected",r.info=l.payload.data):(r.status="fulfilled",r.info=l.payload.data)})}}),_F=vF.reducer,AS=Ut("AllUsernames",async n=>{const r={Authorization:`JWT ${n.jwt}`},l="https://server-agency-1203.onrender.com/dashboard/get_all_usernames/";try{const d=await rt.get(l,{headers:r});return{status:d.status,data:d.data}}catch(d){return{status:d.response.status,data:d.response.data}}}),yF=Vt({name:"allUsernames",initialState:{info:null,status:null,error:null},reducers:{},extraReducers:function(n){n.addCase(AS.pending,function(r){r.status="pending"}),n.addCase(AS.fulfilled,function(r,l){l.payload.status===200?(r.status="fulfilled",r.info=l.payload.data):(r.status="rejected",r.info=l.payload.data)})}}),CF=yF.reducer,Ck=Ut("blogByUser",async n=>{const r={Authorization:`JWT ${n}`},l="https://server-agency-1203.onrender.com/dashboard/blog_by_user/";return(await rt.get(l,{headers:r})).data}),AF={info:null,status:null,error:null},xF=Vt({name:"blogByUser",initialState:AF,reducers:{},extraReducers:function(n){n.addCase(Ck.pending,function(r){r.status="pending"}),n.addCase(Ck.fulfilled,function(r,l){r.status="fulfilled",r.info=l.payload}),n.addCase(Ck.rejected,function(r,l){r.status="rejected",r.error={name:l.error.name,message:l.error.message,code:l.error.code}})}}),EF=xF.reducer,Ak=Ut("detailedUserBlog",async n=>{const r={Authorization:`JWT ${n.jwt}`},l=`https://server-agency-1203.onrender.com/dashboard/blog_detail_by_user/?slug=${n.slug}`;return(await rt.get(l,{headers:r})).data}),SF={info:null,status:null,error:null},DF=Vt({name:"detailedUserBlog",initialState:SF,reducers:{},extraReducers:function(n){n.addCase(Ak.pending,function(r){r.status="pending"}),n.addCase(Ak.fulfilled,function(r,l){r.info=l.payload,r.status="fulfilled"}),n.addCase(Ak.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),TF=DF.reducer,xS=Ut("getUserBlogReactions",async n=>{const r={Authorization:`JWT ${n.jwt}`},l=`https://server-agency-1203.onrender.com/dashboard/get_user_blog_reactions/?slug=${n.slug}`;try{const d=await rt.get(l,{headers:r});return{status:d.status,data:d.data}}catch(d){return{status:d.response.status,data:d.response.data}}}),IF=Vt({name:"getUserBlogReactions",initialState:{info:null,status:null,error:null},reducers:{},extraReducers:function(n){n.addCase(xS.pending,function(r){r.status="pending"}),n.addCase(xS.fulfilled,function(r,l){l.payload.status===200?(r.status="fulfilled",r.info=l.payload.data):(r.status="rejected",r.info=l.payload.data)})}}),MF=IF.reducer,xk=Ut("updateBlogUser",async n=>{const r={Authorization:`JWT ${n.jwt}`},l=`https://server-agency-1203.onrender.com/dashboard/update_blogs_by_user/?slug=${n.slug}`,d=new FormData;return d.append("title",n.info.title),d.append("description",n.info.description),d.append("public",n.info.public),d.append("content",n.info.content),d.append("category",n.info.category),d.append("file",n.info.img),(await rt.put(l,d,{headers:r})).data}),NF={status:null,error:null},jF=Vt({name:"UpdateBlog",initialState:NF,reducers:{},extraReducers:function(n){n.addCase(xk.pending,function(r){r.status="pending"}),n.addCase(xk.fulfilled,function(r){r.status="fulfilled"}),n.addCase(xk.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),PF=jF.reducer,Ek=Ut("createBlog",async n=>{const r={Authorization:`JWT ${n.jwt}`},l="https://server-agency-1203.onrender.com/dashboard/create_blog_by_user/",d=new FormData;return d.append("title",n.info.title),d.append("description",n.info.description),d.append("content",n.info.content),d.append("public",n.info.public),d.append("category",n.info.category),d.append("file",n.info.img),(await rt.post(l,d,{headers:r})).data}),BF={status:null,error:null},OF=Vt({name:"CreateBlogUser",initialState:BF,reducers:{},extraReducers:function(n){n.addCase(Ek.pending,function(r){r.status="pending"}),n.addCase(Ek.fulfilled,function(r){r.status="fulfilled"}),n.addCase(Ek.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),LF=OF.reducer,Sk=Ut("deleteBlogUser",async n=>{const r={Authorization:`JWT ${n.jwt}`},l=`https://server-agency-1203.onrender.com/dashboard/delete_blog_by_user/?slug=${n.slug}`;return(await rt.delete(l,{headers:r})).data}),RF={status:null,error:null},zF=Vt({name:"deleteBlogUser",initialState:RF,reducers:{},extraReducers:function(n){n.addCase(Sk.pending,function(r){r.status="pending"}),n.addCase(Sk.fulfilled,function(r){r.status="fulfilled"}),n.addCase(Sk.rejected,function(r,l){r.status="rejected",r.error=l.error.message})}}),FF=zF.reducer,ES=Ut("LikeBlog",async n=>{const r={Authorization:`JWT ${n.jwt}`},l="https://server-agency-1203.onrender.com/blog_reactions/likes/";try{const d=await rt.patch(l,n,{headers:r});return{status:d.status,data:d.data}}catch(d){return{status:d.response.status,data:d.response.data}}}),VF={info:null,status:null,error:null},UF=Vt({name:"LikeBlogs",initialState:VF,reducers:{},extraReducers:function(n){n.addCase(ES.pending,function(r){r.status="pending"}),n.addCase(ES.fulfilled,function(r,l){l.payload.status==200?(r.status="fulfilled",r.info=l.payload):(r.status="rejected",r.info=l.payload)})}}),HF=UF.reducer,SS=Ut("comments",async n=>{const r={Authorization:`JWT ${n.jwt}`};if(n.method==="get"){const l=`https://server-agency-1203.onrender.com/blog_reactions/comments/?unique_brand=${n.unique_brand}`;try{const d=await rt.get(l,{headers:r});return{status:d.status,data:d.data}}catch(d){return{status:d.response.status,data:d.response.data}}}else if(n.method==="post")try{const l="https://server-agency-1203.onrender.com/blog_reactions/comments/",d=await rt.post(l,n,{headers:r});return{status:d.status,data:d.data}}catch(l){return{status:l.response.status,data:l.response.data}}else if(n.method==="patch")try{const l="https://server-agency-1203.onrender.com/blog_reactions/comments/",d=await rt.patch(l,n,{headers:r});return{status:d.status,data:d.data}}catch(l){return{status:l.response.status,data:l.response.data}}else if(n.method==="delete")try{const l=`https://server-agency-1203.onrender.com/blog_reactions/comments/?unique_key=${n.unique_key}`,d=await rt.delete(l,{headers:r});return{status:d.status,data:d.data}}catch(l){return{status:l.response.status,data:l.response.data}}else return{status:"Error"}}),$F=Vt({name:"CommentsBlog",initialState:{info:null,status:null,error:null},reducers:{},extraReducers:function(n){n.addCase(SS.pending,function(r){r.status="pending"}),n.addCase(SS.fulfilled,function(r,l){l.payload.status===200?(r.status="fulfilled",r.info=l.payload.data):(r.status="rejected",r.info=l.payload.data)})}}),WF=$F.reducer,DS=Ut("Detaildecomments",async n=>{const r={Authorization:`JWT ${n.jwt}`},l=`https://server-agency-1203.onrender.com/blog_reactions/comments/?unique_brand=${n.unique_brand}`;try{const d=await rt.get(l,{headers:r});return{status:d.status,data:d.data}}catch(d){return{status:d.response.status,data:d.response.data}}}),qF=Vt({name:"DetailedCommentsBlog",initialState:{info:null,status:null,error:null},reducers:{},extraReducers:function(n){n.addCase(DS.pending,function(r){r.status="pending"}),n.addCase(DS.fulfilled,function(r,l){l.payload.status===200?(r.status="fulfilled",r.info=l.payload.data):(r.status="rejected",r.info=l.payload.data)})}}),GF=qF.reducer,TS=Ut("GetLikesBlog",async n=>{const r=`https://server-agency-1203.onrender.com/blog/get_blog_likes/?slug=${n}`;try{const l=await rt.get(r);return{status:l.status,data:l.data}}catch(l){return{status:l.response.status,data:l.response.data}}}),KF={info:null,status:null,error:null},YF=Vt({name:"LikeBlogs",initialState:KF,reducers:{},extraReducers:function(n){n.addCase(TS.pending,function(r){r.status="pending"}),n.addCase(TS.fulfilled,function(r,l){l.payload.status==200?(r.status="fulfilled",r.info=l.payload):(r.status="rejected",r.info=l.payload)})}}),QF=YF.reducer,IS=Ut("getCommentsBlog",async n=>{const r=`https://server-agency-1203.onrender.com/blog/get_blog_comments/?slug=${n}`;try{const l=await rt.request({url:r,method:"get"});return{status:l.status,data:l.data}}catch(l){return{status:l.response.status,data:l.response.data}}}),ZF={info:null,status:null,error:null},JF=Vt({name:"GetComments",initialState:ZF,reducers:{},extraReducers:function(n){n.addCase(IS.pending,function(r){r.status="pending"}),n.addCase(IS.fulfilled,function(r,l){l.payload.status==200?(r.status="fulfilled",r.info=l.payload.data):(r.status="rejected",r.info=l.payload.data)})}}),XF=JF.reducer,eV=c9({reducer:{category:P8,allBlogs:O8,blogTypeCategory:R8,blogDetail:F8,searchBlog:U8,createUser:W8,resendEmail:K8,activate:Z8,JWTCreate:eF,JWTRefresh:oF,JWTVerify:sF,resetPasword:hF,resetPasswordConfirm:gF,userData:cF,authGoogle:kF,loginGoogle:_F,allUsernames:CF,blogsByUser:EF,detailedUserBlog:TF,getUserBlogReactions:MF,createBlogUser:LF,updateBlogUser:PF,deleteBlogUser:FF,getLikesBlog:QF,getComments:XF,likeBlog:HF,commentsBlog:WF,detailedCommentBlog:GF}});/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dn(){return dn=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(n[d]=l[d])}return n},dn.apply(this,arguments)}var On;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(On||(On={}));const MS="popstate";function tV(n){n===void 0&&(n={});function r(h,p){let{pathname:b="/",search:k="",hash:g=""}=Gi(h.location.hash.substr(1));return!b.startsWith("/")&&!b.startsWith(".")&&(b="/"+b),wh("",{pathname:b,search:k,hash:g},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function l(h,p){let b=h.document.querySelector("base"),k="";if(b&&b.getAttribute("href")){let g=h.location.href,v=g.indexOf("#");k=v===-1?g:g.slice(0,v)}return k+"#"+(typeof p=="string"?p:Gl(p))}function d(h,p){ql(h.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(p)+")")}return oV(r,l,d,n)}function ot(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function ql(n,r){if(!n){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function nV(){return Math.random().toString(36).substr(2,8)}function NS(n,r){return{usr:n.state,key:n.key,idx:r}}function wh(n,r,l,d){return l===void 0&&(l=null),dn({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof r=="string"?Gi(r):r,{state:l,key:r&&r.key||d||nV()})}function Gl(n){let{pathname:r="/",search:l="",hash:d=""}=n;return l&&l!=="?"&&(r+=l.charAt(0)==="?"?l:"?"+l),d&&d!=="#"&&(r+=d.charAt(0)==="#"?d:"#"+d),r}function Gi(n){let r={};if(n){let l=n.indexOf("#");l>=0&&(r.hash=n.substr(l),n=n.substr(0,l));let d=n.indexOf("?");d>=0&&(r.search=n.substr(d),n=n.substr(0,d)),n&&(r.pathname=n)}return r}function oV(n,r,l,d){d===void 0&&(d={});let{window:h=document.defaultView,v5Compat:p=!1}=d,b=h.history,k=On.Pop,g=null,v=A();v==null&&(v=0,b.replaceState(dn({},b.state,{idx:v}),""));function A(){return(b.state||{idx:null}).idx}function x(){k=On.Pop;let L=A(),P=L==null?null:L-v;v=L,g&&g({action:k,location:T.location,delta:P})}function _(L,P){k=On.Push;let j=wh(T.location,L,P);l&&l(j,L),v=A()+1;let O=NS(j,v),R=T.createHref(j);try{b.pushState(O,"",R)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;h.location.assign(R)}p&&g&&g({action:k,location:T.location,delta:1})}function C(L,P){k=On.Replace;let j=wh(T.location,L,P);l&&l(j,L),v=A();let O=NS(j,v),R=T.createHref(j);b.replaceState(O,"",R),p&&g&&g({action:k,location:T.location,delta:0})}function M(L){let P=h.location.origin!=="null"?h.location.origin:h.location.href,j=typeof L=="string"?L:Gl(L);return ot(P,"No window.location.(origin|href) available to create URL for href: "+j),new URL(j,P)}let T={get action(){return k},get location(){return n(h,b)},listen(L){if(g)throw new Error("A history only accepts one active listener");return h.addEventListener(MS,x),g=L,()=>{h.removeEventListener(MS,x),g=null}},createHref(L){return r(h,L)},createURL:M,encodeLocation(L){let P=M(L);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:_,replace:C,go(L){return b.go(L)}};return T}var Dn;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Dn||(Dn={}));const rV=new Set(["lazy","caseSensitive","path","id","index","children"]);function iV(n){return n.index===!0}function O0(n,r,l,d){return l===void 0&&(l=[]),d===void 0&&(d={}),n.map((h,p)=>{let b=[...l,p],k=typeof h.id=="string"?h.id:b.join("-");if(ot(h.index!==!0||!h.children,"Cannot specify children on an index route"),ot(!d[k],'Found a route id collision on id "'+k+`".  Route id's must be globally unique within Data Router usages`),iV(h)){let g=dn({},h,r(h),{id:k});return d[k]=g,g}else{let g=dn({},h,r(h),{id:k,children:void 0});return d[k]=g,h.children&&(g.children=O0(h.children,r,b,d)),g}})}function ld(n,r,l){l===void 0&&(l="/");let d=typeof r=="string"?Gi(r):r,h=Od(d.pathname||"/",l);if(h==null)return null;let p=lI(n);sV(p);let b=null;for(let k=0;b==null&&k<p.length;++k)b=gV(p[k],kV(h));return b}function lI(n,r,l,d){r===void 0&&(r=[]),l===void 0&&(l=[]),d===void 0&&(d="");let h=(p,b,k)=>{let g={relativePath:k===void 0?p.path||"":k,caseSensitive:p.caseSensitive===!0,childrenIndex:b,route:p};g.relativePath.startsWith("/")&&(ot(g.relativePath.startsWith(d),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(d.length));let v=gs([d,g.relativePath]),A=l.concat(g);p.children&&p.children.length>0&&(ot(p.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),lI(p.children,r,A,v)),!(p.path==null&&!p.index)&&r.push({path:v,score:fV(v,p.index),routesMeta:A})};return n.forEach((p,b)=>{var k;if(p.path===""||!((k=p.path)!=null&&k.includes("?")))h(p,b);else for(let g of cI(p.path))h(p,b,g)}),r}function cI(n){let r=n.split("/");if(r.length===0)return[];let[l,...d]=r,h=l.endsWith("?"),p=l.replace(/\?$/,"");if(d.length===0)return h?[p,""]:[p];let b=cI(d.join("/")),k=[];return k.push(...b.map(g=>g===""?p:[p,g].join("/"))),h&&k.push(...b),k.map(g=>n.startsWith("/")&&g===""?"/":g)}function sV(n){n.sort((r,l)=>r.score!==l.score?l.score-r.score:pV(r.routesMeta.map(d=>d.childrenIndex),l.routesMeta.map(d=>d.childrenIndex)))}const aV=/^:\w+$/,lV=3,cV=2,dV=1,uV=10,hV=-2,jS=n=>n==="*";function fV(n,r){let l=n.split("/"),d=l.length;return l.some(jS)&&(d+=hV),r&&(d+=cV),l.filter(h=>!jS(h)).reduce((h,p)=>h+(aV.test(p)?lV:p===""?dV:uV),d)}function pV(n,r){return n.length===r.length&&n.slice(0,-1).every((d,h)=>d===r[h])?n[n.length-1]-r[r.length-1]:0}function gV(n,r){let{routesMeta:l}=n,d={},h="/",p=[];for(let b=0;b<l.length;++b){let k=l[b],g=b===l.length-1,v=h==="/"?r:r.slice(h.length)||"/",A=mV({path:k.relativePath,caseSensitive:k.caseSensitive,end:g},v);if(!A)return null;Object.assign(d,A.params);let x=k.route;p.push({params:d,pathname:gs([h,A.pathname]),pathnameBase:yV(gs([h,A.pathnameBase])),route:x}),A.pathnameBase!=="/"&&(h=gs([h,A.pathnameBase]))}return p}function mV(n,r){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[l,d]=bV(n.path,n.caseSensitive,n.end),h=r.match(l);if(!h)return null;let p=h[0],b=p.replace(/(.)\/+$/,"$1"),k=h.slice(1);return{params:d.reduce((v,A,x)=>{if(A==="*"){let _=k[x]||"";b=p.slice(0,p.length-_.length).replace(/(.)\/+$/,"$1")}return v[A]=wV(k[x]||"",A),v},{}),pathname:p,pathnameBase:b,pattern:n}}function bV(n,r,l){r===void 0&&(r=!1),l===void 0&&(l=!0),ql(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let d=[],h="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(b,k)=>(d.push(k),"/([^\\/]+)"));return n.endsWith("*")?(d.push("*"),h+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?h+="\\/*$":n!==""&&n!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,r?void 0:"i"),d]}function kV(n){try{return decodeURI(n)}catch(r){return ql(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),n}}function wV(n,r){try{return decodeURIComponent(n)}catch(l){return ql(!1,'The value for the URL param "'+r+'" will not be decoded because'+(' the string "'+n+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+l+").")),n}}function Od(n,r){if(r==="/")return n;if(!n.toLowerCase().startsWith(r.toLowerCase()))return null;let l=r.endsWith("/")?r.length-1:r.length,d=n.charAt(l);return d&&d!=="/"?null:n.slice(l)||"/"}function vV(n,r){r===void 0&&(r="/");let{pathname:l,search:d="",hash:h=""}=typeof n=="string"?Gi(n):n;return{pathname:l?l.startsWith("/")?l:_V(l,r):r,search:CV(d),hash:AV(h)}}function _V(n,r){let l=r.replace(/\/+$/,"").split("/");return n.split("/").forEach(h=>{h===".."?l.length>1&&l.pop():h!=="."&&l.push(h)}),l.length>1?l.join("/"):"/"}function Dk(n,r,l,d){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+l+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Mg(n){return n.filter((r,l)=>l===0||r.route.path&&r.route.path.length>0)}function nv(n,r,l,d){d===void 0&&(d=!1);let h;typeof n=="string"?h=Gi(n):(h=dn({},n),ot(!h.pathname||!h.pathname.includes("?"),Dk("?","pathname","search",h)),ot(!h.pathname||!h.pathname.includes("#"),Dk("#","pathname","hash",h)),ot(!h.search||!h.search.includes("#"),Dk("#","search","hash",h)));let p=n===""||h.pathname==="",b=p?"/":h.pathname,k;if(d||b==null)k=l;else{let x=r.length-1;if(b.startsWith("..")){let _=b.split("/");for(;_[0]==="..";)_.shift(),x-=1;h.pathname=_.join("/")}k=x>=0?r[x]:"/"}let g=vV(h,k),v=b&&b!=="/"&&b.endsWith("/"),A=(p||b===".")&&l.endsWith("/");return!g.pathname.endsWith("/")&&(v||A)&&(g.pathname+="/"),g}const gs=n=>n.join("/").replace(/\/\/+/g,"/"),yV=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),CV=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,AV=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;class ov{constructor(r,l,d,h){h===void 0&&(h=!1),this.status=r,this.statusText=l||"",this.internal=h,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}}function dI(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const uI=["post","put","patch","delete"],xV=new Set(uI),EV=["get",...uI],SV=new Set(EV),DV=new Set([301,302,303,307,308]),TV=new Set([307,308]),Tk={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},IV={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Iu={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},hI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,MV=n=>({hasErrorBoundary:!!n.hasErrorBoundary});function NV(n){const r=n.window?n.window:typeof window<"u"?window:void 0,l=typeof r<"u"&&typeof r.document<"u"&&typeof r.document.createElement<"u",d=!l;ot(n.routes.length>0,"You must provide a non-empty routes array to createRouter");let h;if(n.mapRouteProperties)h=n.mapRouteProperties;else if(n.detectErrorBoundary){let re=n.detectErrorBoundary;h=se=>({hasErrorBoundary:re(se)})}else h=MV;let p={},b=O0(n.routes,h,void 0,p),k,g=n.basename||"/",v=dn({v7_normalizeFormMethod:!1,v7_prependBasename:!1},n.future),A=null,x=new Set,_=null,C=null,M=null,T=n.hydrationData!=null,L=ld(b,n.history.location,g),P=null;if(L==null){let re=Nr(404,{pathname:n.history.location.pathname}),{matches:se,route:he}=VS(b);L=se,P={[he.id]:re}}let j=!L.some(re=>re.route.lazy)&&(!L.some(re=>re.route.loader)||n.hydrationData!=null),O,R={historyAction:n.history.action,location:n.history.location,matches:L,initialized:j,navigation:Tk,restoreScrollPosition:n.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:n.hydrationData&&n.hydrationData.loaderData||{},actionData:n.hydrationData&&n.hydrationData.actionData||null,errors:n.hydrationData&&n.hydrationData.errors||P,fetchers:new Map,blockers:new Map},W=On.Pop,Q=!1,Y,V=!1,ee=!1,J=[],ne=[],fe=new Map,ge=0,Be=-1,De=new Map,we=new Set,Te=new Map,me=new Map,ae=new Map,ue=!1;function ve(){return A=n.history.listen(re=>{let{action:se,location:he,delta:ye}=re;if(ue){ue=!1;return}ql(ae.size===0||ye!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Ie=Ht({currentLocation:R.location,nextLocation:he,historyAction:se});if(Ie&&ye!=null){ue=!0,n.history.go(ye*-1),lt(Ie,{state:"blocked",location:he,proceed(){lt(Ie,{state:"proceeding",proceed:void 0,reset:void 0,location:he}),n.history.go(ye)},reset(){let Oe=new Map(R.blockers);Oe.set(Ie,Iu),te({blockers:Oe})}});return}return Xe(se,he)}),R.initialized||Xe(On.Pop,R.location),O}function xe(){A&&A(),x.clear(),Y&&Y.abort(),R.fetchers.forEach((re,se)=>hn(se)),R.blockers.forEach((re,se)=>He(se))}function xt(re){return x.add(re),()=>x.delete(re)}function te(re){R=dn({},R,re),x.forEach(se=>se(R))}function Xt(re,se){var he,ye;let Ie=R.actionData!=null&&R.navigation.formMethod!=null&&oi(R.navigation.formMethod)&&R.navigation.state==="loading"&&((he=re.state)==null?void 0:he._isRedirect)!==!0,Oe;se.actionData?Object.keys(se.actionData).length>0?Oe=se.actionData:Oe=null:Ie?Oe=R.actionData:Oe=null;let Re=se.loaderData?FS(R.loaderData,se.loaderData,se.matches||[],se.errors):R.loaderData,Le=R.blockers;Le.size>0&&(Le=new Map(Le),Le.forEach((pt,fn)=>Le.set(fn,Iu)));let Ee=Q===!0||R.navigation.formMethod!=null&&oi(R.navigation.formMethod)&&((ye=re.state)==null?void 0:ye._isRedirect)!==!0;k&&(b=k,k=void 0),V||W===On.Pop||(W===On.Push?n.history.push(re,re.state):W===On.Replace&&n.history.replace(re,re.state)),te(dn({},se,{actionData:Oe,loaderData:Re,historyAction:W,location:re,initialized:!0,navigation:Tk,revalidation:"idle",restoreScrollPosition:mo(re,se.matches||R.matches),preventScrollReset:Ee,blockers:Le})),W=On.Pop,Q=!1,V=!1,ee=!1,J=[],ne=[]}async function Ae(re,se){if(typeof re=="number"){n.history.go(re);return}let he=L0(R.location,R.matches,g,v.v7_prependBasename,re,se==null?void 0:se.fromRouteId,se==null?void 0:se.relative),{path:ye,submission:Ie,error:Oe}=PS(v.v7_normalizeFormMethod,!1,he,se),Re=R.location,Le=wh(R.location,ye,se&&se.state);Le=dn({},Le,n.history.encodeLocation(Le));let Ee=se&&se.replace!=null?se.replace:void 0,pt=On.Push;Ee===!0?pt=On.Replace:Ee===!1||Ie!=null&&oi(Ie.formMethod)&&Ie.formAction===R.location.pathname+R.location.search&&(pt=On.Replace);let fn=se&&"preventScrollReset"in se?se.preventScrollReset===!0:void 0,ct=Ht({currentLocation:Re,nextLocation:Le,historyAction:pt});if(ct){lt(ct,{state:"blocked",location:Le,proceed(){lt(ct,{state:"proceeding",proceed:void 0,reset:void 0,location:Le}),Ae(re,se)},reset(){let Wt=new Map(R.blockers);Wt.set(ct,Iu),te({blockers:Wt})}});return}return await Xe(pt,Le,{submission:Ie,pendingError:Oe,preventScrollReset:fn,replace:se&&se.replace})}function je(){if(Vr(),te({revalidation:"loading"}),R.navigation.state!=="submitting"){if(R.navigation.state==="idle"){Xe(R.historyAction,R.location,{startUninterruptedRevalidation:!0});return}Xe(W||R.historyAction,R.navigation.location,{overrideNavigation:R.navigation})}}async function Xe(re,se,he){Y&&Y.abort(),Y=null,W=re,V=(he&&he.startUninterruptedRevalidation)===!0,Oo(R.location,R.matches),Q=(he&&he.preventScrollReset)===!0;let ye=k||b,Ie=he&&he.overrideNavigation,Oe=ld(ye,se,g);if(!Oe){let Wt=Nr(404,{pathname:se.pathname}),{matches:sn,route:kt}=VS(ye);Kn(),Xt(se,{matches:sn,loaderData:{},errors:{[kt.id]:Wt}});return}if(R.initialized&&!ee&&LV(R.location,se)&&!(he&&he.submission&&oi(he.submission.formMethod))){Xt(se,{matches:Oe});return}Y=new AbortController;let Re=Nu(n.history,se,Y.signal,he&&he.submission),Le,Ee;if(he&&he.pendingError)Ee={[cd(Oe).route.id]:he.pendingError};else if(he&&he.submission&&oi(he.submission.formMethod)){let Wt=await _t(Re,se,he.submission,Oe,{replace:he.replace});if(Wt.shortCircuited)return;Le=Wt.pendingActionData,Ee=Wt.pendingActionError,Ie=Uf(se,he.submission),Re=new Request(Re.url,{signal:Re.signal})}let{shortCircuited:pt,loaderData:fn,errors:ct}=await it(Re,se,Oe,Ie,he&&he.submission,he&&he.fetcherSubmission,he&&he.replace,Le,Ee);pt||(Y=null,Xt(se,dn({matches:Oe},Le?{actionData:Le}:{},{loaderData:fn,errors:ct})))}async function _t(re,se,he,ye,Ie){Ie===void 0&&(Ie={}),Vr();let Oe=UV(se,he);te({navigation:Oe});let Re,Le=z0(ye,se);if(!Le.route.action&&!Le.route.lazy)Re={type:Dn.error,error:Nr(405,{method:re.method,pathname:se.pathname,routeId:Le.route.id})};else if(Re=await Mu("action",re,Le,ye,p,h,g),re.signal.aborted)return{shortCircuited:!0};if(kd(Re)){let Ee;return Ie&&Ie.replace!=null?Ee=Ie.replace:Ee=Re.location===R.location.pathname+R.location.search,await Gn(R,Re,{submission:he,replace:Ee}),{shortCircuited:!0}}if(Zu(Re)){let Ee=cd(ye,Le.route.id);return(Ie&&Ie.replace)!==!0&&(W=On.Push),{pendingActionData:{},pendingActionError:{[Ee.route.id]:Re.error}}}if(Ol(Re))throw Nr(400,{type:"defer-action"});return{pendingActionData:{[Le.route.id]:Re.data}}}async function it(re,se,he,ye,Ie,Oe,Re,Le,Ee){let pt=ye||Uf(se,Ie),fn=Ie||Oe||$S(pt),ct=k||b,[Wt,sn]=BS(n.history,R,he,fn,se,ee,J,ne,Te,we,ct,g,Le,Ee);if(Kn(tt=>!(he&&he.some(ao=>ao.route.id===tt))||Wt&&Wt.some(ao=>ao.route.id===tt)),Be=++ge,Wt.length===0&&sn.length===0){let tt=Dt();return Xt(se,dn({matches:he,loaderData:{},errors:Ee||null},Le?{actionData:Le}:{},tt?{fetchers:new Map(R.fetchers)}:{})),{shortCircuited:!0}}if(!V){sn.forEach(ao=>{let Fn=R.fetchers.get(ao.key),dt=ju(void 0,Fn?Fn.data:void 0);R.fetchers.set(ao.key,dt)});let tt=Le||R.actionData;te(dn({navigation:pt},tt?Object.keys(tt).length===0?{actionData:null}:{actionData:tt}:{},sn.length>0?{fetchers:new Map(R.fetchers)}:{}))}sn.forEach(tt=>{fe.has(tt.key)&&go(tt.key),tt.controller&&fe.set(tt.key,tt.controller)});let kt=()=>sn.forEach(tt=>go(tt.key));Y&&Y.signal.addEventListener("abort",kt);let{results:Lo,loaderResults:So,fetcherResults:Yn}=await so(R.matches,he,Wt,sn,re);if(re.signal.aborted)return{shortCircuited:!0};Y&&Y.signal.removeEventListener("abort",kt),sn.forEach(tt=>fe.delete(tt.key));let Qn=US(Lo);if(Qn){if(Qn.idx>=Wt.length){let tt=sn[Qn.idx-Wt.length].key;we.add(tt)}return await Gn(R,Qn.result,{replace:Re}),{shortCircuited:!0}}let{loaderData:Do,errors:pi}=zS(R,he,Wt,So,Ee,sn,Yn,me);me.forEach((tt,ao)=>{tt.subscribe(Fn=>{(Fn||tt.done)&&me.delete(ao)})});let Ur=Dt(),Ki=en(Be),zn=Ur||Ki||sn.length>0;return dn({loaderData:Do,errors:pi},zn?{fetchers:new Map(R.fetchers)}:{})}function Et(re){return R.fetchers.get(re)||IV}function In(re,se,he,ye){if(d)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");fe.has(re)&&go(re);let Ie=k||b,Oe=L0(R.location,R.matches,g,v.v7_prependBasename,he,se,ye==null?void 0:ye.relative),Re=ld(Ie,Oe,g);if(!Re){yt(re,se,Nr(404,{pathname:Oe}));return}let{path:Le,submission:Ee,error:pt}=PS(v.v7_normalizeFormMethod,!0,Oe,ye);if(pt){yt(re,se,pt);return}let fn=z0(Re,Le);if(Q=(ye&&ye.preventScrollReset)===!0,Ee&&oi(Ee.formMethod)){Bo(re,se,Le,fn,Re,Ee);return}Te.set(re,{routeId:se,path:Le}),Qe(re,se,Le,fn,Re,Ee)}async function Bo(re,se,he,ye,Ie,Oe){if(Vr(),Te.delete(re),!ye.route.action&&!ye.route.lazy){let tn=Nr(405,{method:Oe.formMethod,pathname:he,routeId:se});yt(re,se,tn);return}let Re=R.fetchers.get(re),Le=HV(Oe,Re);R.fetchers.set(re,Le),te({fetchers:new Map(R.fetchers)});let Ee=new AbortController,pt=Nu(n.history,he,Ee.signal,Oe);fe.set(re,Ee);let fn=ge,ct=await Mu("action",pt,ye,Ie,p,h,g);if(pt.signal.aborted){fe.get(re)===Ee&&fe.delete(re);return}if(kd(ct))if(fe.delete(re),Be>fn){let tn=Yc(void 0);R.fetchers.set(re,tn),te({fetchers:new Map(R.fetchers)});return}else{we.add(re);let tn=ju(Oe);return R.fetchers.set(re,tn),te({fetchers:new Map(R.fetchers)}),Gn(R,ct,{submission:Oe,isFetchActionRedirect:!0})}if(Zu(ct)){yt(re,se,ct.error);return}if(Ol(ct))throw Nr(400,{type:"defer-action"});let Wt=R.navigation.location||R.location,sn=Nu(n.history,Wt,Ee.signal),kt=k||b,Lo=R.navigation.state!=="idle"?ld(kt,R.navigation.location,g):R.matches;ot(Lo,"Didn't find any matches after fetcher action");let So=++ge;De.set(re,So);let Yn=ju(Oe,ct.data);R.fetchers.set(re,Yn);let[Qn,Do]=BS(n.history,R,Lo,Oe,Wt,ee,J,ne,Te,we,kt,g,{[ye.route.id]:ct.data},void 0);Do.filter(tn=>tn.key!==re).forEach(tn=>{let Zn=tn.key,Hr=R.fetchers.get(Zn),ys=ju(void 0,Hr?Hr.data:void 0);R.fetchers.set(Zn,ys),fe.has(Zn)&&go(Zn),tn.controller&&fe.set(Zn,tn.controller)}),te({fetchers:new Map(R.fetchers)});let pi=()=>Do.forEach(tn=>go(tn.key));Ee.signal.addEventListener("abort",pi);let{results:Ur,loaderResults:Ki,fetcherResults:zn}=await so(R.matches,Lo,Qn,Do,sn);if(Ee.signal.aborted)return;Ee.signal.removeEventListener("abort",pi),De.delete(re),fe.delete(re),Do.forEach(tn=>fe.delete(tn.key));let tt=US(Ur);if(tt){if(tt.idx>=Qn.length){let tn=Do[tt.idx-Qn.length].key;we.add(tn)}return Gn(R,tt.result)}let{loaderData:ao,errors:Fn}=zS(R,R.matches,Qn,Ki,void 0,Do,zn,me);if(R.fetchers.has(re)){let tn=Yc(ct.data);R.fetchers.set(re,tn)}let dt=en(So);R.navigation.state==="loading"&&So>Be?(ot(W,"Expected pending action"),Y&&Y.abort(),Xt(R.navigation.location,{matches:Lo,loaderData:ao,errors:Fn,fetchers:new Map(R.fetchers)})):(te(dn({errors:Fn,loaderData:FS(R.loaderData,ao,Lo,Fn)},dt||Do.length>0?{fetchers:new Map(R.fetchers)}:{})),ee=!1)}async function Qe(re,se,he,ye,Ie,Oe){let Re=R.fetchers.get(re),Le=ju(Oe,Re?Re.data:void 0);R.fetchers.set(re,Le),te({fetchers:new Map(R.fetchers)});let Ee=new AbortController,pt=Nu(n.history,he,Ee.signal);fe.set(re,Ee);let fn=ge,ct=await Mu("loader",pt,ye,Ie,p,h,g);if(Ol(ct)&&(ct=await gI(ct,pt.signal,!0)||ct),fe.get(re)===Ee&&fe.delete(re),pt.signal.aborted)return;if(kd(ct))if(Be>fn){let sn=Yc(void 0);R.fetchers.set(re,sn),te({fetchers:new Map(R.fetchers)});return}else{we.add(re),await Gn(R,ct);return}if(Zu(ct)){let sn=cd(R.matches,se);R.fetchers.delete(re),te({fetchers:new Map(R.fetchers),errors:{[sn.route.id]:ct.error}});return}ot(!Ol(ct),"Unhandled fetcher deferred data");let Wt=Yc(ct.data);R.fetchers.set(re,Wt),te({fetchers:new Map(R.fetchers)})}async function Gn(re,se,he){let{submission:ye,replace:Ie,isFetchActionRedirect:Oe}=he===void 0?{}:he;se.revalidate&&(ee=!0);let Re=wh(re.location,se.location,dn({_isRedirect:!0},Oe?{_isFetchActionRedirect:!0}:{}));if(ot(Re,"Expected a location on the redirect navigation"),l){let pt=!1;if(se.reloadDocument)pt=!0;else if(hI.test(se.location)){const fn=n.history.createURL(se.location);pt=fn.origin!==r.location.origin||Od(fn.pathname,g)==null}if(pt){Ie?r.location.replace(se.location):r.location.assign(se.location);return}}Y=null;let Le=Ie===!0?On.Replace:On.Push,Ee=ye||$S(re.navigation);if(TV.has(se.status)&&Ee&&oi(Ee.formMethod))await Xe(Le,Re,{submission:dn({},Ee,{formAction:se.location}),preventScrollReset:Q});else if(Oe)await Xe(Le,Re,{overrideNavigation:Uf(Re),fetcherSubmission:Ee,preventScrollReset:Q});else{let pt=Uf(Re,Ee);await Xe(Le,Re,{overrideNavigation:pt,preventScrollReset:Q})}}async function so(re,se,he,ye,Ie){let Oe=await Promise.all([...he.map(Ee=>Mu("loader",Ie,Ee,se,p,h,g)),...ye.map(Ee=>Ee.matches&&Ee.match&&Ee.controller?Mu("loader",Nu(n.history,Ee.path,Ee.controller.signal),Ee.match,Ee.matches,p,h,g):{type:Dn.error,error:Nr(404,{pathname:Ee.path})})]),Re=Oe.slice(0,he.length),Le=Oe.slice(he.length);return await Promise.all([HS(re,he,Re,Re.map(()=>Ie.signal),!1,R.loaderData),HS(re,ye.map(Ee=>Ee.match),Le,ye.map(Ee=>Ee.controller?Ee.controller.signal:null),!0)]),{results:Oe,loaderResults:Re,fetcherResults:Le}}function Vr(){ee=!0,J.push(...Kn()),Te.forEach((re,se)=>{fe.has(se)&&(ne.push(se),go(se))})}function yt(re,se,he){let ye=cd(R.matches,se);hn(re),te({errors:{[ye.route.id]:he},fetchers:new Map(R.fetchers)})}function hn(re){let se=R.fetchers.get(re);fe.has(re)&&!(se&&se.state==="loading"&&De.has(re))&&go(re),Te.delete(re),De.delete(re),we.delete(re),R.fetchers.delete(re)}function go(re){let se=fe.get(re);ot(se,"Expected fetch controller: "+re),se.abort(),fe.delete(re)}function rn(re){for(let se of re){let he=Et(se),ye=Yc(he.data);R.fetchers.set(se,ye)}}function Dt(){let re=[],se=!1;for(let he of we){let ye=R.fetchers.get(he);ot(ye,"Expected fetcher: "+he),ye.state==="loading"&&(we.delete(he),re.push(he),se=!0)}return rn(re),se}function en(re){let se=[];for(let[he,ye]of De)if(ye<re){let Ie=R.fetchers.get(he);ot(Ie,"Expected fetcher: "+he),Ie.state==="loading"&&(go(he),De.delete(he),se.push(he))}return rn(se),se.length>0}function br(re,se){let he=R.blockers.get(re)||Iu;return ae.get(re)!==se&&ae.set(re,se),he}function He(re){R.blockers.delete(re),ae.delete(re)}function lt(re,se){let he=R.blockers.get(re)||Iu;ot(he.state==="unblocked"&&se.state==="blocked"||he.state==="blocked"&&se.state==="blocked"||he.state==="blocked"&&se.state==="proceeding"||he.state==="blocked"&&se.state==="unblocked"||he.state==="proceeding"&&se.state==="unblocked","Invalid blocker state transition: "+he.state+" -> "+se.state);let ye=new Map(R.blockers);ye.set(re,se),te({blockers:ye})}function Ht(re){let{currentLocation:se,nextLocation:he,historyAction:ye}=re;if(ae.size===0)return;ae.size>1&&ql(!1,"A router only supports one blocker at a time");let Ie=Array.from(ae.entries()),[Oe,Re]=Ie[Ie.length-1],Le=R.blockers.get(Oe);if(!(Le&&Le.state==="proceeding")&&Re({currentLocation:se,nextLocation:he,historyAction:ye}))return Oe}function Kn(re){let se=[];return me.forEach((he,ye)=>{(!re||re(ye))&&(he.cancel(),se.push(ye),me.delete(ye))}),se}function Ct(re,se,he){if(_=re,M=se,C=he||null,!T&&R.navigation===Tk){T=!0;let ye=mo(R.location,R.matches);ye!=null&&te({restoreScrollPosition:ye})}return()=>{_=null,M=null,C=null}}function $t(re,se){return C&&C(re,se.map(ye=>VV(ye,R.loaderData)))||re.key}function Oo(re,se){if(_&&M){let he=$t(re,se);_[he]=M()}}function mo(re,se){if(_){let he=$t(re,se),ye=_[he];if(typeof ye=="number")return ye}return null}function Cn(re){p={},k=O0(re,h,void 0,p)}return O={get basename(){return g},get state(){return R},get routes(){return b},initialize:ve,subscribe:xt,enableScrollRestoration:Ct,navigate:Ae,fetch:In,revalidate:je,createHref:re=>n.history.createHref(re),encodeLocation:re=>n.history.encodeLocation(re),getFetcher:Et,deleteFetcher:hn,dispose:xe,getBlocker:br,deleteBlocker:He,_internalFetchControllers:fe,_internalActiveDeferreds:me,_internalSetRoutes:Cn},O}function jV(n){return n!=null&&("formData"in n&&n.formData!=null||"body"in n&&n.body!==void 0)}function L0(n,r,l,d,h,p,b){let k,g;if(p!=null&&b!=="path"){k=[];for(let A of r)if(k.push(A),A.route.id===p){g=A;break}}else k=r,g=r[r.length-1];let v=nv(h||".",Mg(k).map(A=>A.pathnameBase),Od(n.pathname,l)||n.pathname,b==="path");return h==null&&(v.search=n.search,v.hash=n.hash),(h==null||h===""||h===".")&&g&&g.route.index&&!rv(v.search)&&(v.search=v.search?v.search.replace(/^\?/,"?index&"):"?index"),d&&l!=="/"&&(v.pathname=v.pathname==="/"?l:gs([l,v.pathname])),Gl(v)}function PS(n,r,l,d){if(!d||!jV(d))return{path:l};if(d.formMethod&&!FV(d.formMethod))return{path:l,error:Nr(405,{method:d.formMethod})};let h=()=>({path:l,error:Nr(400,{type:"invalid-body"})}),p=d.formMethod||"get",b=n?p.toUpperCase():p.toLowerCase(),k=pI(l);if(d.body!==void 0){if(d.formEncType==="text/plain"){if(!oi(b))return h();let _=typeof d.body=="string"?d.body:d.body instanceof FormData||d.body instanceof URLSearchParams?Array.from(d.body.entries()).reduce((C,M)=>{let[T,L]=M;return""+C+T+"="+L+`
`},""):String(d.body);return{path:l,submission:{formMethod:b,formAction:k,formEncType:d.formEncType,formData:void 0,json:void 0,text:_}}}else if(d.formEncType==="application/json"){if(!oi(b))return h();try{let _=typeof d.body=="string"?JSON.parse(d.body):d.body;return{path:l,submission:{formMethod:b,formAction:k,formEncType:d.formEncType,formData:void 0,json:_,text:void 0}}}catch{return h()}}}ot(typeof FormData=="function","FormData is not available in this environment");let g,v;if(d.formData)g=R0(d.formData),v=d.formData;else if(d.body instanceof FormData)g=R0(d.body),v=d.body;else if(d.body instanceof URLSearchParams)g=d.body,v=RS(g);else if(d.body==null)g=new URLSearchParams,v=new FormData;else try{g=new URLSearchParams(d.body),v=RS(g)}catch{return h()}let A={formMethod:b,formAction:k,formEncType:d&&d.formEncType||"application/x-www-form-urlencoded",formData:v,json:void 0,text:void 0};if(oi(A.formMethod))return{path:l,submission:A};let x=Gi(l);return r&&x.search&&rv(x.search)&&g.append("index",""),x.search="?"+g,{path:Gl(x),submission:A}}function PV(n,r){let l=n;if(r){let d=n.findIndex(h=>h.route.id===r);d>=0&&(l=n.slice(0,d))}return l}function BS(n,r,l,d,h,p,b,k,g,v,A,x,_,C){let M=C?Object.values(C)[0]:_?Object.values(_)[0]:void 0,T=n.createURL(r.location),L=n.createURL(h),P=C?Object.keys(C)[0]:void 0,O=PV(l,P).filter((W,Q)=>{if(W.route.lazy)return!0;if(W.route.loader==null)return!1;if(BV(r.loaderData,r.matches[Q],W)||b.some(ee=>ee===W.route.id))return!0;let Y=r.matches[Q],V=W;return OS(W,dn({currentUrl:T,currentParams:Y.params,nextUrl:L,nextParams:V.params},d,{actionResult:M,defaultShouldRevalidate:p||T.pathname+T.search===L.pathname+L.search||T.search!==L.search||fI(Y,V)}))}),R=[];return g.forEach((W,Q)=>{if(!l.some(ne=>ne.route.id===W.routeId))return;let Y=ld(A,W.path,x);if(!Y){R.push({key:Q,routeId:W.routeId,path:W.path,matches:null,match:null,controller:null});return}let V=r.fetchers.get(Q),ee=z0(Y,W.path),J=!1;v.has(Q)?J=!1:k.includes(Q)?J=!0:V&&V.state!=="idle"&&V.data===void 0?J=p:J=OS(ee,dn({currentUrl:T,currentParams:r.matches[r.matches.length-1].params,nextUrl:L,nextParams:l[l.length-1].params},d,{actionResult:M,defaultShouldRevalidate:p})),J&&R.push({key:Q,routeId:W.routeId,path:W.path,matches:Y,match:ee,controller:new AbortController})}),[O,R]}function BV(n,r,l){let d=!r||l.route.id!==r.route.id,h=n[l.route.id]===void 0;return d||h}function fI(n,r){let l=n.route.path;return n.pathname!==r.pathname||l!=null&&l.endsWith("*")&&n.params["*"]!==r.params["*"]}function OS(n,r){if(n.route.shouldRevalidate){let l=n.route.shouldRevalidate(r);if(typeof l=="boolean")return l}return r.defaultShouldRevalidate}async function LS(n,r,l){if(!n.lazy)return;let d=await n.lazy();if(!n.lazy)return;let h=l[n.id];ot(h,"No route found in manifest");let p={};for(let b in d){let g=h[b]!==void 0&&b!=="hasErrorBoundary";ql(!g,'Route "'+h.id+'" has a static property "'+b+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+b+'" will be ignored.')),!g&&!rV.has(b)&&(p[b]=d[b])}Object.assign(h,p),Object.assign(h,dn({},r(h),{lazy:void 0}))}async function Mu(n,r,l,d,h,p,b,k){k===void 0&&(k={});let g,v,A,x=M=>{let T,L=new Promise((P,j)=>T=j);return A=()=>T(),r.signal.addEventListener("abort",A),Promise.race([M({request:r,params:l.params,context:k.requestContext}),L])};try{let M=l.route[n];if(l.route.lazy)if(M)v=(await Promise.all([x(M),LS(l.route,p,h)]))[0];else if(await LS(l.route,p,h),M=l.route[n],M)v=await x(M);else if(n==="action"){let T=new URL(r.url),L=T.pathname+T.search;throw Nr(405,{method:r.method,pathname:L,routeId:l.route.id})}else return{type:Dn.data,data:void 0};else if(M)v=await x(M);else{let T=new URL(r.url),L=T.pathname+T.search;throw Nr(404,{pathname:L})}ot(v!==void 0,"You defined "+(n==="action"?"an action":"a loader")+" for route "+('"'+l.route.id+"\" but didn't return anything from your `"+n+"` ")+"function. Please return a value or `null`.")}catch(M){g=Dn.error,v=M}finally{A&&r.signal.removeEventListener("abort",A)}if(zV(v)){let M=v.status;if(DV.has(M)){let P=v.headers.get("Location");if(ot(P,"Redirects returned/thrown from loaders/actions must have a Location header"),!hI.test(P))P=L0(new URL(r.url),d.slice(0,d.indexOf(l)+1),b,!0,P);else if(!k.isStaticRequest){let j=new URL(r.url),O=P.startsWith("//")?new URL(j.protocol+P):new URL(P),R=Od(O.pathname,b)!=null;O.origin===j.origin&&R&&(P=O.pathname+O.search+O.hash)}if(k.isStaticRequest)throw v.headers.set("Location",P),v;return{type:Dn.redirect,status:M,location:P,revalidate:v.headers.get("X-Remix-Revalidate")!==null,reloadDocument:v.headers.get("X-Remix-Reload-Document")!==null}}if(k.isRouteRequest)throw{type:g===Dn.error?Dn.error:Dn.data,response:v};let T,L=v.headers.get("Content-Type");return L&&/\bapplication\/json\b/.test(L)?T=await v.json():T=await v.text(),g===Dn.error?{type:g,error:new ov(M,v.statusText,T),headers:v.headers}:{type:Dn.data,data:T,statusCode:v.status,headers:v.headers}}if(g===Dn.error)return{type:g,error:v};if(RV(v)){var _,C;return{type:Dn.deferred,deferredData:v,statusCode:(_=v.init)==null?void 0:_.status,headers:((C=v.init)==null?void 0:C.headers)&&new Headers(v.init.headers)}}return{type:Dn.data,data:v}}function Nu(n,r,l,d){let h=n.createURL(pI(r)).toString(),p={signal:l};if(d&&oi(d.formMethod)){let{formMethod:b,formEncType:k}=d;p.method=b.toUpperCase(),k==="application/json"?(p.headers=new Headers({"Content-Type":k}),p.body=JSON.stringify(d.json)):k==="text/plain"?p.body=d.text:k==="application/x-www-form-urlencoded"&&d.formData?p.body=R0(d.formData):p.body=d.formData}return new Request(h,p)}function R0(n){let r=new URLSearchParams;for(let[l,d]of n.entries())r.append(l,typeof d=="string"?d:d.name);return r}function RS(n){let r=new FormData;for(let[l,d]of n.entries())r.append(l,d);return r}function OV(n,r,l,d,h){let p={},b=null,k,g=!1,v={};return l.forEach((A,x)=>{let _=r[x].route.id;if(ot(!kd(A),"Cannot handle redirect results in processLoaderData"),Zu(A)){let C=cd(n,_),M=A.error;d&&(M=Object.values(d)[0],d=void 0),b=b||{},b[C.route.id]==null&&(b[C.route.id]=M),p[_]=void 0,g||(g=!0,k=dI(A.error)?A.error.status:500),A.headers&&(v[_]=A.headers)}else Ol(A)?(h.set(_,A.deferredData),p[_]=A.deferredData.data):p[_]=A.data,A.statusCode!=null&&A.statusCode!==200&&!g&&(k=A.statusCode),A.headers&&(v[_]=A.headers)}),d&&(b=d,p[Object.keys(d)[0]]=void 0),{loaderData:p,errors:b,statusCode:k||200,loaderHeaders:v}}function zS(n,r,l,d,h,p,b,k){let{loaderData:g,errors:v}=OV(r,l,d,h,k);for(let A=0;A<p.length;A++){let{key:x,match:_,controller:C}=p[A];ot(b!==void 0&&b[A]!==void 0,"Did not find corresponding fetcher result");let M=b[A];if(!(C&&C.signal.aborted))if(Zu(M)){let T=cd(n.matches,_==null?void 0:_.route.id);v&&v[T.route.id]||(v=dn({},v,{[T.route.id]:M.error})),n.fetchers.delete(x)}else if(kd(M))ot(!1,"Unhandled fetcher revalidation redirect");else if(Ol(M))ot(!1,"Unhandled fetcher deferred data");else{let T=Yc(M.data);n.fetchers.set(x,T)}}return{loaderData:g,errors:v}}function FS(n,r,l,d){let h=dn({},r);for(let p of l){let b=p.route.id;if(r.hasOwnProperty(b)?r[b]!==void 0&&(h[b]=r[b]):n[b]!==void 0&&p.route.loader&&(h[b]=n[b]),d&&d.hasOwnProperty(b))break}return h}function cd(n,r){return(r?n.slice(0,n.findIndex(d=>d.route.id===r)+1):[...n]).reverse().find(d=>d.route.hasErrorBoundary===!0)||n[0]}function VS(n){let r=n.find(l=>l.index||!l.path||l.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:r}],route:r}}function Nr(n,r){let{pathname:l,routeId:d,method:h,type:p}=r===void 0?{}:r,b="Unknown Server Error",k="Unknown @remix-run/router error";return n===400?(b="Bad Request",h&&l&&d?k="You made a "+h+' request to "'+l+'" but '+('did not provide a `loader` for route "'+d+'", ')+"so there is no way to handle the request.":p==="defer-action"?k="defer() is not supported in actions":p==="invalid-body"&&(k="Unable to encode submission body")):n===403?(b="Forbidden",k='Route "'+d+'" does not match URL "'+l+'"'):n===404?(b="Not Found",k='No route matches URL "'+l+'"'):n===405&&(b="Method Not Allowed",h&&l&&d?k="You made a "+h.toUpperCase()+' request to "'+l+'" but '+('did not provide an `action` for route "'+d+'", ')+"so there is no way to handle the request.":h&&(k='Invalid request method "'+h.toUpperCase()+'"')),new ov(n||500,b,new Error(k),!0)}function US(n){for(let r=n.length-1;r>=0;r--){let l=n[r];if(kd(l))return{result:l,idx:r}}}function pI(n){let r=typeof n=="string"?Gi(n):n;return Gl(dn({},r,{hash:""}))}function LV(n,r){return n.pathname!==r.pathname||n.search!==r.search?!1:n.hash===""?r.hash!=="":n.hash===r.hash?!0:r.hash!==""}function Ol(n){return n.type===Dn.deferred}function Zu(n){return n.type===Dn.error}function kd(n){return(n&&n.type)===Dn.redirect}function RV(n){let r=n;return r&&typeof r=="object"&&typeof r.data=="object"&&typeof r.subscribe=="function"&&typeof r.cancel=="function"&&typeof r.resolveData=="function"}function zV(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.headers=="object"&&typeof n.body<"u"}function FV(n){return SV.has(n.toLowerCase())}function oi(n){return xV.has(n.toLowerCase())}async function HS(n,r,l,d,h,p){for(let b=0;b<l.length;b++){let k=l[b],g=r[b];if(!g)continue;let v=n.find(x=>x.route.id===g.route.id),A=v!=null&&!fI(v,g)&&(p&&p[g.route.id])!==void 0;if(Ol(k)&&(h||A)){let x=d[b];ot(x,"Expected an AbortSignal for revalidating fetcher deferred result"),await gI(k,x,h).then(_=>{_&&(l[b]=_||l[b])})}}}async function gI(n,r,l){if(l===void 0&&(l=!1),!await n.deferredData.resolveData(r)){if(l)try{return{type:Dn.data,data:n.deferredData.unwrappedData}}catch(h){return{type:Dn.error,error:h}}return{type:Dn.data,data:n.deferredData.data}}}function rv(n){return new URLSearchParams(n).getAll("index").some(r=>r==="")}function VV(n,r){let{route:l,pathname:d,params:h}=n;return{id:l.id,pathname:d,params:h,data:r[l.id],handle:l.handle}}function z0(n,r){let l=typeof r=="string"?Gi(r).search:r.search;if(n[n.length-1].route.index&&rv(l||""))return n[n.length-1];let d=Mg(n);return d[d.length-1]}function $S(n){let{formMethod:r,formAction:l,formEncType:d,text:h,formData:p,json:b}=n;if(!(!r||!l||!d)){if(h!=null)return{formMethod:r,formAction:l,formEncType:d,formData:void 0,json:void 0,text:h};if(p!=null)return{formMethod:r,formAction:l,formEncType:d,formData:p,json:void 0,text:void 0};if(b!==void 0)return{formMethod:r,formAction:l,formEncType:d,formData:void 0,json:b,text:void 0}}}function Uf(n,r){return r?{state:"loading",location:n,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}:{state:"loading",location:n,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function UV(n,r){return{state:"submitting",location:n,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}}function ju(n,r){return n?{state:"loading",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:r," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:r," _hasFetcherDoneAnything ":!0}}function HV(n,r){return{state:"submitting",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:r?r.data:void 0," _hasFetcherDoneAnything ":!0}}function Yc(n){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rp(){return Rp=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(n[d]=l[d])}return n},Rp.apply(this,arguments)}const Ng=Z.createContext(null),iv=Z.createContext(null),Ql=Z.createContext(null),jg=Z.createContext(null),Ia=Z.createContext({outlet:null,matches:[],isDataRoute:!1}),mI=Z.createContext(null);function $V(n,r){let{relative:l}=r===void 0?{}:r;Th()||ot(!1);let{basename:d,navigator:h}=Z.useContext(Ql),{hash:p,pathname:b,search:k}=sv(n,{relative:l}),g=b;return d!=="/"&&(g=b==="/"?d:gs([d,b])),h.createHref({pathname:g,search:k,hash:p})}function Th(){return Z.useContext(jg)!=null}function ui(){return Th()||ot(!1),Z.useContext(jg).location}function bI(n){Z.useContext(Ql).static||Z.useLayoutEffect(n)}function Zo(){let{isDataRoute:n}=Z.useContext(Ia);return n?nU():WV()}function WV(){Th()||ot(!1);let n=Z.useContext(Ng),{basename:r,navigator:l}=Z.useContext(Ql),{matches:d}=Z.useContext(Ia),{pathname:h}=ui(),p=JSON.stringify(Mg(d).map(g=>g.pathnameBase)),b=Z.useRef(!1);return bI(()=>{b.current=!0}),Z.useCallback(function(g,v){if(v===void 0&&(v={}),!b.current)return;if(typeof g=="number"){l.go(g);return}let A=nv(g,JSON.parse(p),h,v.relative==="path");n==null&&r!=="/"&&(A.pathname=A.pathname==="/"?r:gs([r,A.pathname])),(v.replace?l.replace:l.push)(A,v.state,v)},[r,l,p,h,n])}function Zl(){let{matches:n}=Z.useContext(Ia),r=n[n.length-1];return r?r.params:{}}function sv(n,r){let{relative:l}=r===void 0?{}:r,{matches:d}=Z.useContext(Ia),{pathname:h}=ui(),p=JSON.stringify(Mg(d).map(b=>b.pathnameBase));return Z.useMemo(()=>nv(n,JSON.parse(p),h,l==="path"),[n,p,h,l])}function qV(n,r,l){Th()||ot(!1);let{navigator:d}=Z.useContext(Ql),{matches:h}=Z.useContext(Ia),p=h[h.length-1],b=p?p.params:{};p&&p.pathname;let k=p?p.pathnameBase:"/";p&&p.route;let g=ui(),v;if(r){var A;let T=typeof r=="string"?Gi(r):r;k==="/"||(A=T.pathname)!=null&&A.startsWith(k)||ot(!1),v=T}else v=g;let x=v.pathname||"/",_=k==="/"?x:x.slice(k.length)||"/",C=ld(n,{pathname:_}),M=ZV(C&&C.map(T=>Object.assign({},T,{params:Object.assign({},b,T.params),pathname:gs([k,d.encodeLocation?d.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?k:gs([k,d.encodeLocation?d.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),h,l);return r&&M?Z.createElement(jg.Provider,{value:{location:Rp({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:On.Pop}},M):M}function GV(){let n=tU(),r=dI(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),l=n instanceof Error?n.stack:null,h={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},p=null;return Z.createElement(Z.Fragment,null,Z.createElement("h2",null,"Unexpected Application Error!"),Z.createElement("h3",{style:{fontStyle:"italic"}},r),l?Z.createElement("pre",{style:h},l):null,p)}const KV=Z.createElement(GV,null);class YV extends Z.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,l){return l.location!==r.location||l.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error||l.error,location:l.location,revalidation:r.revalidation||l.revalidation}}componentDidCatch(r,l){console.error("React Router caught the following error during render",r,l)}render(){return this.state.error?Z.createElement(Ia.Provider,{value:this.props.routeContext},Z.createElement(mI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function QV(n){let{routeContext:r,match:l,children:d}=n,h=Z.useContext(Ng);return h&&h.static&&h.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(h.staticContext._deepestRenderedBoundaryId=l.route.id),Z.createElement(Ia.Provider,{value:r},d)}function ZV(n,r,l){var d;if(r===void 0&&(r=[]),l===void 0&&(l=null),n==null){var h;if((h=l)!=null&&h.errors)n=l.matches;else return null}let p=n,b=(d=l)==null?void 0:d.errors;if(b!=null){let k=p.findIndex(g=>g.route.id&&(b==null?void 0:b[g.route.id]));k>=0||ot(!1),p=p.slice(0,Math.min(p.length,k+1))}return p.reduceRight((k,g,v)=>{let A=g.route.id?b==null?void 0:b[g.route.id]:null,x=null;l&&(x=g.route.errorElement||KV);let _=r.concat(p.slice(0,v+1)),C=()=>{let M;return A?M=x:g.route.Component?M=Z.createElement(g.route.Component,null):g.route.element?M=g.route.element:M=k,Z.createElement(QV,{match:g,routeContext:{outlet:k,matches:_,isDataRoute:l!=null},children:M})};return l&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?Z.createElement(YV,{location:l.location,revalidation:l.revalidation,component:x,error:A,children:C(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):C()},null)}var kI=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(kI||{}),zp=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(zp||{});function JV(n){let r=Z.useContext(Ng);return r||ot(!1),r}function XV(n){let r=Z.useContext(iv);return r||ot(!1),r}function eU(n){let r=Z.useContext(Ia);return r||ot(!1),r}function wI(n){let r=eU(),l=r.matches[r.matches.length-1];return l.route.id||ot(!1),l.route.id}function tU(){var n;let r=Z.useContext(mI),l=XV(zp.UseRouteError),d=wI(zp.UseRouteError);return r||((n=l.errors)==null?void 0:n[d])}function nU(){let{router:n}=JV(kI.UseNavigateStable),r=wI(zp.UseNavigateStable),l=Z.useRef(!1);return bI(()=>{l.current=!0}),Z.useCallback(function(h,p){p===void 0&&(p={}),l.current&&(typeof h=="number"?n.navigate(h):n.navigate(h,Rp({fromRouteId:r},p)))},[n,r])}const oU="startTransition",WS=MR[oU];function rU(n){let{fallbackElement:r,router:l,future:d}=n,[h,p]=Z.useState(l.state),{v7_startTransition:b}=d||{},k=Z.useCallback(x=>{b&&WS?WS(()=>p(x)):p(x)},[p,b]);Z.useLayoutEffect(()=>l.subscribe(k),[l,k]);let g=Z.useMemo(()=>({createHref:l.createHref,encodeLocation:l.encodeLocation,go:x=>l.navigate(x),push:(x,_,C)=>l.navigate(x,{state:_,preventScrollReset:C==null?void 0:C.preventScrollReset}),replace:(x,_,C)=>l.navigate(x,{replace:!0,state:_,preventScrollReset:C==null?void 0:C.preventScrollReset})}),[l]),v=l.basename||"/",A=Z.useMemo(()=>({router:l,navigator:g,static:!1,basename:v}),[l,g,v]);return Z.createElement(Z.Fragment,null,Z.createElement(Ng.Provider,{value:A},Z.createElement(iv.Provider,{value:h},Z.createElement(sU,{basename:v,location:h.location,navigationType:h.historyAction,navigator:g},h.initialized?Z.createElement(iU,{routes:l.routes,state:h}):r))),null)}function iU(n){let{routes:r,state:l}=n;return qV(r,void 0,l)}function sU(n){let{basename:r="/",children:l=null,location:d,navigationType:h=On.Pop,navigator:p,static:b=!1}=n;Th()&&ot(!1);let k=r.replace(/^\/*/,"/"),g=Z.useMemo(()=>({basename:k,navigator:p,static:b}),[k,p,b]);typeof d=="string"&&(d=Gi(d));let{pathname:v="/",search:A="",hash:x="",state:_=null,key:C="default"}=d,M=Z.useMemo(()=>{let T=Od(v,k);return T==null?null:{location:{pathname:T,search:A,hash:x,state:_,key:C},navigationType:h}},[k,v,A,x,_,C,h]);return M==null?null:Z.createElement(Ql.Provider,{value:g},Z.createElement(jg.Provider,{children:l,value:M}))}new Promise(()=>{});function aU(n){let r={hasErrorBoundary:n.ErrorBoundary!=null||n.errorElement!=null};return n.Component&&Object.assign(r,{element:Z.createElement(n.Component),Component:void 0}),n.ErrorBoundary&&Object.assign(r,{errorElement:Z.createElement(n.ErrorBoundary),ErrorBoundary:void 0}),r}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Id(){return Id=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(n[d]=l[d])}return n},Id.apply(this,arguments)}function vI(n,r){if(n==null)return{};var l={},d=Object.keys(n),h,p;for(p=0;p<d.length;p++)h=d[p],!(r.indexOf(h)>=0)&&(l[h]=n[h]);return l}function lU(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function cU(n,r){return n.button===0&&(!r||r==="_self")&&!lU(n)}const dU=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],uU=["aria-current","caseSensitive","className","end","style","to","children"];function hU(n,r){return NV({basename:r==null?void 0:r.basename,future:Id({},r==null?void 0:r.future,{v7_prependBasename:!0}),history:tV({window:r==null?void 0:r.window}),hydrationData:(r==null?void 0:r.hydrationData)||fU(),routes:n,mapRouteProperties:aU}).initialize()}function fU(){var n;let r=(n=window)==null?void 0:n.__staticRouterHydrationData;return r&&r.errors&&(r=Id({},r,{errors:pU(r.errors)})),r}function pU(n){if(!n)return null;let r=Object.entries(n),l={};for(let[d,h]of r)if(h&&h.__type==="RouteErrorResponse")l[d]=new ov(h.status,h.statusText,h.data,h.internal===!0);else if(h&&h.__type==="Error"){if(h.__subType){let p=window[h.__subType];if(typeof p=="function")try{let b=new p(h.message);b.stack="",l[d]=b}catch{}}if(l[d]==null){let p=new Error(h.message);p.stack="",l[d]=p}}else l[d]=h;return l}const gU=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mU=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ur=Z.forwardRef(function(r,l){let{onClick:d,relative:h,reloadDocument:p,replace:b,state:k,target:g,to:v,preventScrollReset:A}=r,x=vI(r,dU),{basename:_}=Z.useContext(Ql),C,M=!1;if(typeof v=="string"&&mU.test(v)&&(C=v,gU))try{let j=new URL(window.location.href),O=v.startsWith("//")?new URL(j.protocol+v):new URL(v),R=Od(O.pathname,_);O.origin===j.origin&&R!=null?v=R+O.search+O.hash:M=!0}catch{}let T=$V(v,{relative:h}),L=bU(v,{replace:b,state:k,target:g,preventScrollReset:A,relative:h});function P(j){d&&d(j),j.defaultPrevented||L(j)}return Z.createElement("a",Id({},x,{href:C||T,onClick:M||p?d:P,ref:l,target:g}))}),Sl=Z.forwardRef(function(r,l){let{"aria-current":d="page",caseSensitive:h=!1,className:p="",end:b=!1,style:k,to:g,children:v}=r,A=vI(r,uU),x=sv(g,{relative:A.relative}),_=ui(),C=Z.useContext(iv),{navigator:M}=Z.useContext(Ql),T=M.encodeLocation?M.encodeLocation(x).pathname:x.pathname,L=_.pathname,P=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;h||(L=L.toLowerCase(),P=P?P.toLowerCase():null,T=T.toLowerCase());let j=L===T||!b&&L.startsWith(T)&&L.charAt(T.length)==="/",O=P!=null&&(P===T||!b&&P.startsWith(T)&&P.charAt(T.length)==="/"),R=j?d:void 0,W;typeof p=="function"?W=p({isActive:j,isPending:O}):W=[p,j?"active":null,O?"pending":null].filter(Boolean).join(" ");let Q=typeof k=="function"?k({isActive:j,isPending:O}):k;return Z.createElement(ur,Id({},A,{"aria-current":R,className:W,ref:l,style:Q,to:g}),typeof v=="function"?v({isActive:j,isPending:O}):v)});var qS;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher"})(qS||(qS={}));var GS;(function(n){n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(GS||(GS={}));function bU(n,r){let{target:l,replace:d,state:h,preventScrollReset:p,relative:b}=r===void 0?{}:r,k=Zo(),g=ui(),v=sv(n,{relative:b});return Z.useCallback(A=>{if(cU(A,l)){A.preventDefault();let x=d!==void 0?d:Gl(g)===Gl(v);k(n,{replace:x,state:h,preventScrollReset:p,relative:b})}},[g,k,v,d,h,l,n,p,b])}const kU="modulepreload",wU=function(n){return"/agency_view/"+n},KS={},Je=function(r,l,d){if(!l||l.length===0)return r();const h=document.getElementsByTagName("link");return Promise.all(l.map(p=>{if(p=wU(p),p in KS)return;KS[p]=!0;const b=p.endsWith(".css"),k=b?'[rel="stylesheet"]':"";if(!!d)for(let A=h.length-1;A>=0;A--){const x=h[A];if(x.href===p&&(!b||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${k}`))return;const v=document.createElement("link");if(v.rel=b?"stylesheet":kU,b||(v.as="script",v.crossOrigin=""),v.href=p,document.head.appendChild(v),b)return new Promise((A,x)=>{v.addEventListener("load",A),v.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${p}`)))})})).then(()=>r()).catch(p=>{const b=new Event("vite:preloadError",{cancelable:!0});if(b.payload=p,window.dispatchEvent(b),!b.defaultPrevented)throw p})};var _I={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},YS=cr.createContext&&cr.createContext(_I),va=globalThis&&globalThis.__assign||function(){return va=Object.assign||function(n){for(var r,l=1,d=arguments.length;l<d;l++){r=arguments[l];for(var h in r)Object.prototype.hasOwnProperty.call(r,h)&&(n[h]=r[h])}return n},va.apply(this,arguments)},vU=globalThis&&globalThis.__rest||function(n,r){var l={};for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&r.indexOf(d)<0&&(l[d]=n[d]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,d=Object.getOwnPropertySymbols(n);h<d.length;h++)r.indexOf(d[h])<0&&Object.prototype.propertyIsEnumerable.call(n,d[h])&&(l[d[h]]=n[d[h]]);return l};function yI(n){return n&&n.map(function(r,l){return cr.createElement(r.tag,va({key:l},r.attr),yI(r.child))})}function hi(n){return function(r){return cr.createElement(_U,va({attr:va({},n.attr)},r),yI(n.child))}}function _U(n){var r=function(l){var d=n.attr,h=n.size,p=n.title,b=vU(n,["attr","size","title"]),k=h||l.size||"1em",g;return l.className&&(g=l.className),n.className&&(g=(g?g+" ":"")+n.className),cr.createElement("svg",va({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,d,b,{className:g,style:va(va({color:n.color||l.color},l.style),n.style),height:k,width:k,xmlns:"http://www.w3.org/2000/svg"}),p&&cr.createElement("title",null,p),n.children)};return YS!==void 0?cr.createElement(YS.Consumer,null,function(l){return r(l)}):r(_I)}function xa(n){return hi({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"}}]})(n)}function yU(n){return hi({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"}}]})(n)}function CU(n){return hi({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 0 0 188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 0 0 492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"}}]})(n)}function vh(n){return hi({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]})(n)}const AU="_parentContainer_1gaaw_33",xU="_navegation_1gaaw_65",EU="_navegationApparButton_1gaaw_93",SU="_navbarLink_1gaaw_143",DU="_buttonLogin_1gaaw_181",TU="_buttonDashboard_1gaaw_219",zi={parentContainer:AU,navegation:xU,navegationApparButton:EU,navbarLink:SU,buttonLogin:DU,buttonDashboard:TU};function IU(){const n=Eo(),r=Ye(g=>g.JWTVerify),l=Ye(g=>g.category),d=JSON.parse(localStorage.getItem("access")),[h,p]=Z.useState(!1),[b,k]=Z.useState(!1);return Z.useEffect(()=>{d||(p(!1),localStorage.clear()),r.status||n(B0({token:d})),r.status==="fulfilled"&&d&&p(!0),r.status==="rejected"&&(localStorage.clear(),p(!1))},[r.status]),Z.useEffect(()=>{(l.status===null||l.status==="rejected")&&setTimeout(()=>{Je(()=>import("./index-e09ecdba.js"),[]).then(g=>{n(g.axiosCategorys())})},4e3)},[l.status]),D.jsx("main",{children:D.jsxs("section",{className:zi.parentContainer,children:[D.jsx("div",{children:D.jsx("h1",{children:" 🧩 IMPACT X 🧩 "})}),D.jsx("div",{children:D.jsx("h1",{onClick:g=>{k(!0)},className:zi.navegationApparButton,children:D.jsx(vh,{})})}),D.jsxs("div",{style:{right:b?0:-300},className:zi.navegation,children:[D.jsx("div",{children:D.jsx("p",{onClick:g=>{k(!1)},children:D.jsx(xa,{})})}),D.jsxs("nav",{children:[D.jsx(Sl,{className:zi.navbarLink,to:"/home",children:"INICIO"}),D.jsx(Sl,{className:zi.navbarLink,to:"/services",children:"SERVICIOS"}),D.jsx(Sl,{className:zi.navbarLink,to:"/about",children:"SOBRE NOSOTROS"}),D.jsx(Sl,{className:zi.navbarLink,to:"/contact",children:"CONTACTOS"}),D.jsx(Sl,{className:zi.navbarLink,to:"/blogs",children:"BLOG"}),h===!0?D.jsx(Sl,{className:zi.buttonDashboard,to:"/dashboard",children:"DASHBOARD"}):h===!1?D.jsx("div",{children:D.jsx(Sl,{className:zi.buttonLogin,to:"/access",children:"UNETE..."})}):!1]})]})]})})}function fi({children:n}){return D.jsxs("div",{children:[D.jsx(IU,{}),n]})}var CI={exports:{}};/*!
* sweetalert2 v11.7.32
* Released under the MIT License.
*/(function(n,r){(function(l,d){n.exports=d()})(ho,function(){function l(E,I){var z=h(E,I,"get");return p(E,z)}function d(E,I,z){var G=h(E,I,"set");return b(E,G,z),z}function h(E,I,z){if(!I.has(E))throw new TypeError("attempted to "+z+" private field on non-instance");return I.get(E)}function p(E,I){return I.get?I.get.call(E):I.value}function b(E,I,z){if(I.set)I.set.call(E,z);else{if(!I.writable)throw new TypeError("attempted to set read only private field");I.value=z}}function k(E,I){if(I.has(E))throw new TypeError("Cannot initialize the same private elements twice on an object")}function g(E,I,z){k(E,I),I.set(E,z)}const v=100,A={},x=()=>{A.previousActiveElement instanceof HTMLElement?(A.previousActiveElement.focus(),A.previousActiveElement=null):document.body&&document.body.focus()},_=E=>new Promise(I=>{if(!E)return I();const z=window.scrollX,G=window.scrollY;A.restoreFocusTimeout=setTimeout(()=>{x(),I()},v),window.scrollTo(z,G)}),C="swal2-",T=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce((E,I)=>(E[I]=C+I,E),{}),P=["success","warning","info","question","error"].reduce((E,I)=>(E[I]=C+I,E),{}),j="SweetAlert2:",O=E=>E.charAt(0).toUpperCase()+E.slice(1),R=E=>{console.warn("".concat(j," ").concat(typeof E=="object"?E.join(" "):E))},W=E=>{console.error("".concat(j," ").concat(E))},Q=[],Y=E=>{Q.includes(E)||(Q.push(E),R(E))},V=(E,I)=>{Y('"'.concat(E,'" is deprecated and will be removed in the next major release. Please use "').concat(I,'" instead.'))},ee=E=>typeof E=="function"?E():E,J=E=>E&&typeof E.toPromise=="function",ne=E=>J(E)?E.toPromise():Promise.resolve(E),fe=E=>E&&Promise.resolve(E)===E,ge=()=>document.body.querySelector(".".concat(T.container)),Be=E=>{const I=ge();return I?I.querySelector(E):null},De=E=>Be(".".concat(E)),we=()=>De(T.popup),Te=()=>De(T.icon),me=()=>De(T["icon-content"]),ae=()=>De(T.title),ue=()=>De(T["html-container"]),ve=()=>De(T.image),xe=()=>De(T["progress-steps"]),xt=()=>De(T["validation-message"]),te=()=>Be(".".concat(T.actions," .").concat(T.confirm)),Xt=()=>Be(".".concat(T.actions," .").concat(T.cancel)),Ae=()=>Be(".".concat(T.actions," .").concat(T.deny)),je=()=>De(T["input-label"]),Xe=()=>Be(".".concat(T.loader)),_t=()=>De(T.actions),it=()=>De(T.footer),Et=()=>De(T["timer-progress-bar"]),In=()=>De(T.close),Bo=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Qe=()=>{const E=we();if(!E)return[];const I=E.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),z=Array.from(I).sort((Pe,ut)=>{const Ot=parseInt(Pe.getAttribute("tabindex")||"0"),Qt=parseInt(ut.getAttribute("tabindex")||"0");return Ot>Qt?1:Ot<Qt?-1:0}),G=E.querySelectorAll(Bo),le=Array.from(G).filter(Pe=>Pe.getAttribute("tabindex")!=="-1");return[...new Set(z.concat(le))].filter(Pe=>Cn(Pe))},Gn=()=>hn(document.body,T.shown)&&!hn(document.body,T["toast-shown"])&&!hn(document.body,T["no-backdrop"]),so=()=>{const E=we();return E?hn(E,T.toast):!1},Vr=()=>{const E=we();return E?E.hasAttribute("data-loading"):!1},yt=(E,I)=>{if(E.textContent="",I){const G=new DOMParser().parseFromString(I,"text/html"),le=G.querySelector("head");le&&Array.from(le.childNodes).forEach(ut=>{E.appendChild(ut)});const Pe=G.querySelector("body");Pe&&Array.from(Pe.childNodes).forEach(ut=>{ut instanceof HTMLVideoElement||ut instanceof HTMLAudioElement?E.appendChild(ut.cloneNode(!0)):E.appendChild(ut)})}},hn=(E,I)=>{if(!I)return!1;const z=I.split(/\s+/);for(let G=0;G<z.length;G++)if(!E.classList.contains(z[G]))return!1;return!0},go=(E,I)=>{Array.from(E.classList).forEach(z=>{!Object.values(T).includes(z)&&!Object.values(P).includes(z)&&!Object.values(I.showClass||{}).includes(z)&&E.classList.remove(z)})},rn=(E,I,z)=>{if(go(E,I),I.customClass&&I.customClass[z]){if(typeof I.customClass[z]!="string"&&!I.customClass[z].forEach){R("Invalid type of customClass.".concat(z,'! Expected string or iterable object, got "').concat(typeof I.customClass[z],'"'));return}He(E,I.customClass[z])}},Dt=(E,I)=>{if(!I)return null;switch(I){case"select":case"textarea":case"file":return E.querySelector(".".concat(T.popup," > .").concat(T[I]));case"checkbox":return E.querySelector(".".concat(T.popup," > .").concat(T.checkbox," input"));case"radio":return E.querySelector(".".concat(T.popup," > .").concat(T.radio," input:checked"))||E.querySelector(".".concat(T.popup," > .").concat(T.radio," input:first-child"));case"range":return E.querySelector(".".concat(T.popup," > .").concat(T.range," input"));default:return E.querySelector(".".concat(T.popup," > .").concat(T.input))}},en=E=>{if(E.focus(),E.type!=="file"){const I=E.value;E.value="",E.value=I}},br=(E,I,z)=>{!E||!I||(typeof I=="string"&&(I=I.split(/\s+/).filter(Boolean)),I.forEach(G=>{Array.isArray(E)?E.forEach(le=>{z?le.classList.add(G):le.classList.remove(G)}):z?E.classList.add(G):E.classList.remove(G)}))},He=(E,I)=>{br(E,I,!0)},lt=(E,I)=>{br(E,I,!1)},Ht=(E,I)=>{const z=Array.from(E.children);for(let G=0;G<z.length;G++){const le=z[G];if(le instanceof HTMLElement&&hn(le,I))return le}},Kn=(E,I,z)=>{z==="".concat(parseInt(z))&&(z=parseInt(z)),z||parseInt(z)===0?E.style[I]=typeof z=="number"?"".concat(z,"px"):z:E.style.removeProperty(I)},Ct=function(E){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";E&&(E.style.display=I)},$t=E=>{E&&(E.style.display="none")},Oo=(E,I,z,G)=>{const le=E.querySelector(I);le&&(le.style[z]=G)},mo=function(E,I){let z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";I?Ct(E,z):$t(E)},Cn=E=>!!(E&&(E.offsetWidth||E.offsetHeight||E.getClientRects().length)),re=()=>!Cn(te())&&!Cn(Ae())&&!Cn(Xt()),se=E=>E.scrollHeight>E.clientHeight,he=E=>{const I=window.getComputedStyle(E),z=parseFloat(I.getPropertyValue("animation-duration")||"0"),G=parseFloat(I.getPropertyValue("transition-duration")||"0");return z>0||G>0},ye=function(E){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const z=Et();z&&Cn(z)&&(I&&(z.style.transition="none",z.style.width="100%"),setTimeout(()=>{z.style.transition="width ".concat(E/1e3,"s linear"),z.style.width="0%"},10))},Ie=()=>{const E=Et();if(!E)return;const I=parseInt(window.getComputedStyle(E).width);E.style.removeProperty("transition"),E.style.width="100%";const z=parseInt(window.getComputedStyle(E).width),G=I/z*100;E.style.width="".concat(G,"%")},Oe=()=>typeof window>"u"||typeof document>"u",Re=`
 <div aria-labelledby="`.concat(T.title,'" aria-describedby="').concat(T["html-container"],'" class="').concat(T.popup,`" tabindex="-1">
   <button type="button" class="`).concat(T.close,`"></button>
   <ul class="`).concat(T["progress-steps"],`"></ul>
   <div class="`).concat(T.icon,`"></div>
   <img class="`).concat(T.image,`" />
   <h2 class="`).concat(T.title,'" id="').concat(T.title,`"></h2>
   <div class="`).concat(T["html-container"],'" id="').concat(T["html-container"],`"></div>
   <input class="`).concat(T.input,'" id="').concat(T.input,`" />
   <input type="file" class="`).concat(T.file,`" />
   <div class="`).concat(T.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(T.select,'" id="').concat(T.select,`"></select>
   <div class="`).concat(T.radio,`"></div>
   <label class="`).concat(T.checkbox,`">
     <input type="checkbox" id="`).concat(T.checkbox,`" />
     <span class="`).concat(T.label,`"></span>
   </label>
   <textarea class="`).concat(T.textarea,'" id="').concat(T.textarea,`"></textarea>
   <div class="`).concat(T["validation-message"],'" id="').concat(T["validation-message"],`"></div>
   <div class="`).concat(T.actions,`">
     <div class="`).concat(T.loader,`"></div>
     <button type="button" class="`).concat(T.confirm,`"></button>
     <button type="button" class="`).concat(T.deny,`"></button>
     <button type="button" class="`).concat(T.cancel,`"></button>
   </div>
   <div class="`).concat(T.footer,`"></div>
   <div class="`).concat(T["timer-progress-bar-container"],`">
     <div class="`).concat(T["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),Le=()=>{const E=ge();return E?(E.remove(),lt([document.documentElement,document.body],[T["no-backdrop"],T["toast-shown"],T["has-column"]]),!0):!1},Ee=()=>{A.currentInstance.resetValidationMessage()},pt=()=>{const E=we(),I=Ht(E,T.input),z=Ht(E,T.file),G=E.querySelector(".".concat(T.range," input")),le=E.querySelector(".".concat(T.range," output")),Pe=Ht(E,T.select),ut=E.querySelector(".".concat(T.checkbox," input")),Ot=Ht(E,T.textarea);I.oninput=Ee,z.onchange=Ee,Pe.onchange=Ee,ut.onchange=Ee,Ot.oninput=Ee,G.oninput=()=>{Ee(),le.value=G.value},G.onchange=()=>{Ee(),le.value=G.value}},fn=E=>typeof E=="string"?document.querySelector(E):E,ct=E=>{const I=we();I.setAttribute("role",E.toast?"alert":"dialog"),I.setAttribute("aria-live",E.toast?"polite":"assertive"),E.toast||I.setAttribute("aria-modal","true")},Wt=E=>{window.getComputedStyle(E).direction==="rtl"&&He(ge(),T.rtl)},sn=E=>{const I=Le();if(Oe()){W("SweetAlert2 requires document to initialize");return}const z=document.createElement("div");z.className=T.container,I&&He(z,T["no-transition"]),yt(z,Re);const G=fn(E.target);G.appendChild(z),ct(E),Wt(G),pt()},kt=(E,I)=>{E instanceof HTMLElement?I.appendChild(E):typeof E=="object"?Lo(E,I):E&&yt(I,E)},Lo=(E,I)=>{E.jquery?So(I,E):yt(I,E.toString())},So=(E,I)=>{if(E.textContent="",0 in I)for(let z=0;z in I;z++)E.appendChild(I[z].cloneNode(!0));else E.appendChild(I.cloneNode(!0))},Yn=(()=>{if(Oe())return!1;const E=document.createElement("div");return typeof E.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof E.style.animation<"u"?"animationend":!1})(),Qn=(E,I)=>{const z=_t(),G=Xe();!z||!G||(!I.showConfirmButton&&!I.showDenyButton&&!I.showCancelButton?$t(z):Ct(z),rn(z,I,"actions"),Do(z,G,I),yt(G,I.loaderHtml||""),rn(G,I,"loader"))};function Do(E,I,z){const G=te(),le=Ae(),Pe=Xt();!G||!le||!Pe||(Ur(G,"confirm",z),Ur(le,"deny",z),Ur(Pe,"cancel",z),pi(G,le,Pe,z),z.reverseButtons&&(z.toast?(E.insertBefore(Pe,G),E.insertBefore(le,G)):(E.insertBefore(Pe,I),E.insertBefore(le,I),E.insertBefore(G,I))))}function pi(E,I,z,G){if(!G.buttonsStyling){lt([E,I,z],T.styled);return}He([E,I,z],T.styled),G.confirmButtonColor&&(E.style.backgroundColor=G.confirmButtonColor,He(E,T["default-outline"])),G.denyButtonColor&&(I.style.backgroundColor=G.denyButtonColor,He(I,T["default-outline"])),G.cancelButtonColor&&(z.style.backgroundColor=G.cancelButtonColor,He(z,T["default-outline"]))}function Ur(E,I,z){const G=O(I);mo(E,z["show".concat(G,"Button")],"inline-block"),yt(E,z["".concat(I,"ButtonText")]||""),E.setAttribute("aria-label",z["".concat(I,"ButtonAriaLabel")]||""),E.className=T[I],rn(E,z,"".concat(I,"Button"))}const Ki=(E,I)=>{const z=In();z&&(yt(z,I.closeButtonHtml||""),rn(z,I,"closeButton"),mo(z,I.showCloseButton),z.setAttribute("aria-label",I.closeButtonAriaLabel||""))},zn=(E,I)=>{const z=ge();z&&(tt(z,I.backdrop),ao(z,I.position),Fn(z,I.grow),rn(z,I,"container"))};function tt(E,I){typeof I=="string"?E.style.background=I:I||He([document.documentElement,document.body],T["no-backdrop"])}function ao(E,I){I&&(I in T?He(E,T[I]):(R('The "position" parameter is not valid, defaulting to "center"'),He(E,T.center)))}function Fn(E,I){I&&He(E,T["grow-".concat(I)])}var dt={innerParams:new WeakMap,domCache:new WeakMap};const tn=["input","file","range","select","radio","checkbox","textarea"],Zn=(E,I)=>{const z=we();if(!z)return;const G=dt.innerParams.get(E),le=!G||I.input!==G.input;tn.forEach(Pe=>{const ut=Ht(z,T[Pe]);ut&&(Jl(Pe,I.inputAttributes),ut.className=T[Pe],le&&$t(ut))}),I.input&&(le&&Hr(I),Cs(I))},Hr=E=>{if(!E.input)return;if(!Jn[E.input]){W('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(E.input,'"'));return}const I=Ma(E.input),z=Jn[E.input](I,E);Ct(I),E.inputAutoFocus&&setTimeout(()=>{en(z)})},ys=E=>{for(let I=0;I<E.attributes.length;I++){const z=E.attributes[I].name;["id","type","value","style"].includes(z)||E.removeAttribute(z)}},Jl=(E,I)=>{const z=Dt(we(),E);if(z){ys(z);for(const G in I)z.setAttribute(G,I[G])}},Cs=E=>{const I=Ma(E.input);typeof E.customClass=="object"&&He(I,E.customClass.input)},Jo=(E,I)=>{(!E.placeholder||I.inputPlaceholder)&&(E.placeholder=I.inputPlaceholder)},gi=(E,I,z)=>{if(z.inputLabel){const G=document.createElement("label"),le=T["input-label"];G.setAttribute("for",E.id),G.className=le,typeof z.customClass=="object"&&He(G,z.customClass.inputLabel),G.innerText=z.inputLabel,I.insertAdjacentElement("beforebegin",G)}},Ma=E=>Ht(we(),T[E]||T.input),As=(E,I)=>{["string","number"].includes(typeof I)?E.value="".concat(I):fe(I)||R('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof I,'"'))},Jn={};Jn.text=Jn.email=Jn.password=Jn.number=Jn.tel=Jn.url=(E,I)=>(As(E,I.inputValue),gi(E,E,I),Jo(E,I),E.type=I.input,E),Jn.file=(E,I)=>(gi(E,E,I),Jo(E,I),E),Jn.range=(E,I)=>{const z=E.querySelector("input"),G=E.querySelector("output");return As(z,I.inputValue),z.type=I.input,As(G,I.inputValue),gi(z,E,I),E},Jn.select=(E,I)=>{if(E.textContent="",I.inputPlaceholder){const z=document.createElement("option");yt(z,I.inputPlaceholder),z.value="",z.disabled=!0,z.selected=!0,E.appendChild(z)}return gi(E,E,I),E},Jn.radio=E=>(E.textContent="",E),Jn.checkbox=(E,I)=>{const z=Dt(we(),"checkbox");z.value="1",z.checked=!!I.inputValue;const G=E.querySelector("span");return yt(G,I.inputPlaceholder),z},Jn.textarea=(E,I)=>{As(E,I.inputValue),Jo(E,I),gi(E,E,I);const z=G=>parseInt(window.getComputedStyle(G).marginLeft)+parseInt(window.getComputedStyle(G).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const G=parseInt(window.getComputedStyle(we()).width),le=()=>{if(!document.body.contains(E))return;const Pe=E.offsetWidth+z(E);Pe>G?we().style.width="".concat(Pe,"px"):Kn(we(),"width",I.width)};new MutationObserver(le).observe(E,{attributes:!0,attributeFilter:["style"]})}}),E};const Ld=(E,I)=>{const z=ue();z&&(rn(z,I,"htmlContainer"),I.html?(kt(I.html,z),Ct(z,"block")):I.text?(z.textContent=I.text,Ct(z,"block")):$t(z),Zn(E,I))},Na=(E,I)=>{const z=it();z&&(mo(z,I.footer,"block"),I.footer&&kt(I.footer,z),rn(z,I,"footer"))},Rd=(E,I)=>{const z=dt.innerParams.get(E),G=Te();if(G){if(z&&I.icon===z.icon){Xl(G,I),ja(G,I);return}if(!I.icon&&!I.iconHtml){$t(G);return}if(I.icon&&Object.keys(P).indexOf(I.icon)===-1){W('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(I.icon,'"')),$t(G);return}Ct(G),Xl(G,I),ja(G,I),He(G,I.showClass&&I.showClass.icon)}},ja=(E,I)=>{for(const[z,G]of Object.entries(P))I.icon!==z&&lt(E,G);He(E,I.icon&&P[I.icon]),zd(E,I),kr(),rn(E,I,"icon")},kr=()=>{const E=we();if(!E)return;const I=window.getComputedStyle(E).getPropertyValue("background-color"),z=E.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let G=0;G<z.length;G++)z[G].style.backgroundColor=I},mi=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,bi=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Xl=(E,I)=>{if(!I.icon&&!I.iconHtml)return;let z=E.innerHTML,G="";I.iconHtml?G=Pa(I.iconHtml):I.icon==="success"?(G=mi,z=z.replace(/ style=".*?"/g,"")):I.icon==="error"?G=bi:I.icon&&(G=Pa({question:"?",warning:"!",info:"i"}[I.icon])),z.trim()!==G.trim()&&yt(E,G)},zd=(E,I)=>{if(I.iconColor){E.style.color=I.iconColor,E.style.borderColor=I.iconColor;for(const z of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Oo(E,z,"backgroundColor",I.iconColor);Oo(E,".swal2-success-ring","borderColor",I.iconColor)}},Pa=E=>'<div class="'.concat(T["icon-content"],'">').concat(E,"</div>"),Tt=(E,I)=>{const z=ve();if(z){if(!I.imageUrl){$t(z);return}Ct(z,""),z.setAttribute("src",I.imageUrl),z.setAttribute("alt",I.imageAlt||""),Kn(z,"width",I.imageWidth),Kn(z,"height",I.imageHeight),z.className=T.image,rn(z,I,"image")}},Fd=(E,I)=>{const z=ge(),G=we();if(!(!z||!G)){if(I.toast){Kn(z,"width",I.width),G.style.width="100%";const le=Xe();le&&G.insertBefore(le,Te())}else Kn(G,"width",I.width);Kn(G,"padding",I.padding),I.color&&(G.style.color=I.color),I.background&&(G.style.background=I.background),$t(xt()),Ba(G,I)}},Ba=(E,I)=>{const z=I.showClass||{};E.className="".concat(T.popup," ").concat(Cn(E)?z.popup:""),I.toast?(He([document.documentElement,document.body],T["toast-shown"]),He(E,T.toast)):He(E,T.modal),rn(E,I,"popup"),typeof I.customClass=="string"&&He(E,I.customClass),I.icon&&He(E,T["icon-".concat(I.icon)])},ec=(E,I)=>{const z=xe();if(!z)return;const{progressSteps:G,currentProgressStep:le}=I;if(!G||G.length===0||le===void 0){$t(z);return}Ct(z),z.textContent="",le>=G.length&&R("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),G.forEach((Pe,ut)=>{const Ot=Ro(Pe);if(z.appendChild(Ot),ut===le&&He(Ot,T["active-progress-step"]),ut!==G.length-1){const Qt=xs(I);z.appendChild(Qt)}})},Ro=E=>{const I=document.createElement("li");return He(I,T["progress-step"]),yt(I,E),I},xs=E=>{const I=document.createElement("li");return He(I,T["progress-step-line"]),E.progressStepsDistance&&Kn(I,"width",E.progressStepsDistance),I},ki=(E,I)=>{const z=ae();z&&(mo(z,I.title||I.titleText,"block"),I.title&&kt(I.title,z),I.titleText&&(z.innerText=I.titleText),rn(z,I,"title"))},Oa=(E,I)=>{Fd(E,I),zn(E,I),ec(E,I),Rd(E,I),Tt(E,I),ki(E,I),Ki(E,I),Ld(E,I),Qn(E,I),Na(E,I);const z=we();typeof I.didRender=="function"&&z&&I.didRender(z)},Es=()=>Cn(we()),tc=()=>{var E;return(E=te())===null||E===void 0?void 0:E.click()},nc=()=>{var E;return(E=Ae())===null||E===void 0?void 0:E.click()},Vd=()=>{var E;return(E=Xt())===null||E===void 0?void 0:E.click()},wr=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),vr=E=>{E.keydownTarget&&E.keydownHandlerAdded&&(E.keydownTarget.removeEventListener("keydown",E.keydownHandler,{capture:E.keydownListenerCapture}),E.keydownHandlerAdded=!1)},Ss=(E,I,z)=>{vr(E),I.toast||(E.keydownHandler=G=>Ra(I,G,z),E.keydownTarget=I.keydownListenerCapture?window:we(),E.keydownListenerCapture=I.keydownListenerCapture,E.keydownTarget.addEventListener("keydown",E.keydownHandler,{capture:E.keydownListenerCapture}),E.keydownHandlerAdded=!0)},La=(E,I)=>{var z;const G=Qe();if(G.length){E=E+I,E===G.length?E=0:E===-1&&(E=G.length-1),G[E].focus();return}(z=we())===null||z===void 0||z.focus()},$r=["ArrowRight","ArrowDown"],wi=["ArrowLeft","ArrowUp"],Ra=(E,I,z)=>{E&&(I.isComposing||I.keyCode===229||(E.stopKeydownPropagation&&I.stopPropagation(),I.key==="Enter"?Ds(I,E):I.key==="Tab"?za(I):[...$r,...wi].includes(I.key)?Ud(I.key):I.key==="Escape"&&Fa(I,E,z)))},Ds=(E,I)=>{if(!ee(I.allowEnterKey))return;const z=Dt(we(),I.input);if(E.target&&z&&E.target instanceof HTMLElement&&E.target.outerHTML===z.outerHTML){if(["textarea","file"].includes(I.input))return;tc(),E.preventDefault()}},za=E=>{const I=E.target,z=Qe();let G=-1;for(let le=0;le<z.length;le++)if(I===z[le]){G=le;break}E.shiftKey?La(G,-1):La(G,1),E.stopPropagation(),E.preventDefault()},Ud=E=>{const I=_t(),z=te(),G=Ae(),le=Xt();if(!I||!z||!G||!le)return;const Pe=[z,G,le];if(document.activeElement instanceof HTMLElement&&!Pe.includes(document.activeElement))return;const ut=$r.includes(E)?"nextElementSibling":"previousElementSibling";let Ot=document.activeElement;if(Ot){for(let Qt=0;Qt<I.children.length;Qt++){if(Ot=Ot[ut],!Ot)return;if(Ot instanceof HTMLButtonElement&&Cn(Ot))break}Ot instanceof HTMLButtonElement&&Ot.focus()}},Fa=(E,I,z)=>{ee(I.allowEscapeKey)&&(E.preventDefault(),z(wr.esc))};var bo={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Hd=()=>{Array.from(document.body.children).forEach(I=>{I===ge()||I.contains(ge())||(I.hasAttribute("aria-hidden")&&I.setAttribute("data-previous-aria-hidden",I.getAttribute("aria-hidden")||""),I.setAttribute("aria-hidden","true"))})},Ts=()=>{Array.from(document.body.children).forEach(I=>{I.hasAttribute("data-previous-aria-hidden")?(I.setAttribute("aria-hidden",I.getAttribute("data-previous-aria-hidden")||""),I.removeAttribute("data-previous-aria-hidden")):I.removeAttribute("aria-hidden")})},Is=typeof window<"u"&&!!window.GestureEvent,oc=()=>{if(Is&&!hn(document.body,T.iosfix)){const E=document.body.scrollTop;document.body.style.top="".concat(E*-1,"px"),He(document.body,T.iosfix),rc()}},rc=()=>{const E=ge();if(!E)return;let I;E.ontouchstart=z=>{I=Va(z)},E.ontouchmove=z=>{I&&(z.preventDefault(),z.stopPropagation())}},Va=E=>{const I=E.target,z=ge(),G=ue();return!z||!G||$d(E)||ic(E)?!1:I===z||!se(z)&&I instanceof HTMLElement&&I.tagName!=="INPUT"&&I.tagName!=="TEXTAREA"&&!(se(G)&&G.contains(I))},$d=E=>E.touches&&E.touches.length&&E.touches[0].touchType==="stylus",ic=E=>E.touches&&E.touches.length>1,Ua=()=>{if(hn(document.body,T.iosfix)){const E=parseInt(document.body.style.top,10);lt(document.body,T.iosfix),document.body.style.top="",document.body.scrollTop=E*-1}},sc=()=>{const E=document.createElement("div");E.className=T["scrollbar-measure"],document.body.appendChild(E);const I=E.getBoundingClientRect().width-E.clientWidth;return document.body.removeChild(E),I};let To=null;const Ha=E=>{To===null&&(document.body.scrollHeight>window.innerHeight||E==="scroll")&&(To=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(To+sc(),"px"))},$a=()=>{To!==null&&(document.body.style.paddingRight="".concat(To,"px"),To=null)};function Ms(E,I,z,G){so()?vi(E,G):(_(z).then(()=>vi(E,G)),vr(A)),Is?(I.setAttribute("style","display:none !important"),I.removeAttribute("class"),I.innerHTML=""):I.remove(),Gn()&&($a(),Ua(),Ts()),At()}function At(){lt([document.documentElement,document.body],[T.shown,T["height-auto"],T["no-backdrop"],T["toast-shown"]])}function Xo(E){E=qa(E);const I=bo.swalPromiseResolve.get(this),z=Wa(this);this.isAwaitingPromise?E.isDismissed||(er(this),I(E)):z&&I(E)}const Wa=E=>{const I=we();if(!I)return!1;const z=dt.innerParams.get(E);if(!z||hn(I,z.hideClass.popup))return!1;lt(I,z.showClass.popup),He(I,z.hideClass.popup);const G=ge();return lt(G,z.showClass.backdrop),He(G,z.hideClass.backdrop),_r(E,I,z),!0};function Ns(E){const I=bo.swalPromiseReject.get(this);er(this),I&&I(E)}const er=E=>{E.isAwaitingPromise&&(delete E.isAwaitingPromise,dt.innerParams.get(E)||E._destroy())},qa=E=>typeof E>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},E),_r=(E,I,z)=>{const G=ge(),le=Yn&&he(I);typeof z.willClose=="function"&&z.willClose(I),le?js(E,I,G,z.returnFocus,z.didClose):Ms(E,G,z.returnFocus,z.didClose)},js=(E,I,z,G,le)=>{Yn&&(A.swalCloseEventFinishedCallback=Ms.bind(null,E,z,G,le),I.addEventListener(Yn,function(Pe){Pe.target===I&&(A.swalCloseEventFinishedCallback(),delete A.swalCloseEventFinishedCallback)}))},vi=(E,I)=>{setTimeout(()=>{typeof I=="function"&&I.bind(E.params)(),E._destroy&&E._destroy()})},yr=E=>{let I=we();if(I||new ll,I=we(),!I)return;const z=Xe();so()?$t(Te()):Ga(I,E),Ct(z),I.setAttribute("data-loading","true"),I.setAttribute("aria-busy","true"),I.focus()},Ga=(E,I)=>{const z=_t(),G=Xe();!z||!G||(!I&&Cn(te())&&(I=te()),Ct(z),I&&($t(I),G.setAttribute("data-button-to-replace",I.className),z.insertBefore(G,I)),He([E,z],T.loading))},ac=(E,I)=>{I.input==="select"||I.input==="radio"?Bs(E,I):["text","email","number","tel","textarea"].some(z=>z===I.input)&&(J(I.inputValue)||fe(I.inputValue))&&(yr(te()),Ka(E,I))},Ps=(E,I)=>{const z=E.getInput();if(!z)return null;switch(I.input){case"checkbox":return lc(z);case"radio":return cc(z);case"file":return Wd(z);default:return I.inputAutoTrim?z.value.trim():z.value}},lc=E=>E.checked?1:0,cc=E=>E.checked?E.value:null,Wd=E=>E.files&&E.files.length?E.getAttribute("multiple")!==null?E.files:E.files[0]:null,Bs=(E,I)=>{const z=we();if(!z)return;const G=le=>{I.input==="select"?qd(z,zo(le),I):I.input==="radio"&&Gd(z,zo(le),I)};J(I.inputOptions)||fe(I.inputOptions)?(yr(te()),ne(I.inputOptions).then(le=>{E.hideLoading(),G(le)})):typeof I.inputOptions=="object"?G(I.inputOptions):W("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof I.inputOptions))},Ka=(E,I)=>{const z=E.getInput();z&&($t(z),ne(I.inputValue).then(G=>{z.value=I.input==="number"?"".concat(parseFloat(G)||0):"".concat(G),Ct(z),z.focus(),E.hideLoading()}).catch(G=>{W("Error in inputValue promise: ".concat(G)),z.value="",Ct(z),z.focus(),E.hideLoading()}))};function qd(E,I,z){const G=Ht(E,T.select);if(!G)return;const le=(Pe,ut,Ot)=>{const Qt=document.createElement("option");Qt.value=Ot,yt(Qt,ut),Qt.selected=Os(Ot,z.inputValue),Pe.appendChild(Qt)};I.forEach(Pe=>{const ut=Pe[0],Ot=Pe[1];if(Array.isArray(Ot)){const Qt=document.createElement("optgroup");Qt.label=ut,Qt.disabled=!1,G.appendChild(Qt),Ot.forEach(es=>le(Qt,es[1],es[0]))}else le(G,Ot,ut)}),G.focus()}function Gd(E,I,z){const G=Ht(E,T.radio);if(!G)return;I.forEach(Pe=>{const ut=Pe[0],Ot=Pe[1],Qt=document.createElement("input"),es=document.createElement("label");Qt.type="radio",Qt.name=T.radio,Qt.value=ut,Os(ut,z.inputValue)&&(Qt.checked=!0);const cl=document.createElement("span");yt(cl,Ot),cl.className=T.label,es.appendChild(Qt),es.appendChild(cl),G.appendChild(es)});const le=G.querySelectorAll("input");le.length&&le[0].focus()}const zo=E=>{const I=[];return E instanceof Map?E.forEach((z,G)=>{let le=z;typeof le=="object"&&(le=zo(le)),I.push([G,le])}):Object.keys(E).forEach(z=>{let G=E[z];typeof G=="object"&&(G=zo(G)),I.push([z,G])}),I},Os=(E,I)=>!!I&&I.toString()===E.toString(),_i=E=>{const I=dt.innerParams.get(E);E.disableButtons(),I.input?Yi(E,"confirm"):zs(E,!0)},Kd=E=>{const I=dt.innerParams.get(E);E.disableButtons(),I.returnInputValueOnDeny?Yi(E,"deny"):Ls(E,!1)},Ya=(E,I)=>{E.disableButtons(),I(wr.cancel)},Yi=(E,I)=>{const z=dt.innerParams.get(E);if(!z.input){W('The "input" parameter is needed to be set when using returnInputValueOn'.concat(O(I)));return}const G=E.getInput(),le=Ps(E,z);z.inputValidator?dc(E,le,I):G&&!G.checkValidity()?(E.enableButtons(),E.showValidationMessage(z.validationMessage)):I==="deny"?Ls(E,le):zs(E,le)},dc=(E,I,z)=>{const G=dt.innerParams.get(E);E.disableInput(),Promise.resolve().then(()=>ne(G.inputValidator(I,G.validationMessage))).then(Pe=>{E.enableButtons(),E.enableInput(),Pe?E.showValidationMessage(Pe):z==="deny"?Ls(E,I):zs(E,I)})},Ls=(E,I)=>{const z=dt.innerParams.get(E||void 0);z.showLoaderOnDeny&&yr(Ae()),z.preDeny?(E.isAwaitingPromise=!0,Promise.resolve().then(()=>ne(z.preDeny(I,z.validationMessage))).then(le=>{le===!1?(E.hideLoading(),er(E)):E.close({isDenied:!0,value:typeof le>"u"?I:le})}).catch(le=>Rs(E||void 0,le))):E.close({isDenied:!0,value:I})},Qa=(E,I)=>{E.close({isConfirmed:!0,value:I})},Rs=(E,I)=>{E.rejectPromise(I)},zs=(E,I)=>{const z=dt.innerParams.get(E||void 0);z.showLoaderOnConfirm&&yr(),z.preConfirm?(E.resetValidationMessage(),E.isAwaitingPromise=!0,Promise.resolve().then(()=>ne(z.preConfirm(I,z.validationMessage))).then(le=>{Cn(xt())||le===!1?(E.hideLoading(),er(E)):Qa(E,typeof le>"u"?I:le)}).catch(le=>Rs(E||void 0,le))):Qa(E,I)};function Qi(){const E=dt.innerParams.get(this);if(!E)return;const I=dt.domCache.get(this);$t(I.loader),so()?E.icon&&Ct(Te()):Yd(I),lt([I.popup,I.actions],T.loading),I.popup.removeAttribute("aria-busy"),I.popup.removeAttribute("data-loading"),I.confirmButton.disabled=!1,I.denyButton.disabled=!1,I.cancelButton.disabled=!1}const Yd=E=>{const I=E.popup.getElementsByClassName(E.loader.getAttribute("data-button-to-replace"));I.length?Ct(I[0],"inline-block"):re()&&$t(E.actions)};function Za(){const E=dt.innerParams.get(this),I=dt.domCache.get(this);return I?Dt(I.popup,E.input):null}function Zi(E,I,z){const G=dt.domCache.get(E);I.forEach(le=>{G[le].disabled=z})}function uc(E,I){const z=we();if(!(!z||!E))if(E.type==="radio"){const G=z.querySelectorAll('[name="'.concat(T.radio,'"]'));for(let le=0;le<G.length;le++)G[le].disabled=I}else E.disabled=I}function Ja(){Zi(this,["confirmButton","denyButton","cancelButton"],!1)}function Xa(){Zi(this,["confirmButton","denyButton","cancelButton"],!0)}function el(){uc(this.getInput(),!1)}function tl(){uc(this.getInput(),!0)}function Fs(E){const I=dt.domCache.get(this),z=dt.innerParams.get(this);yt(I.validationMessage,E),I.validationMessage.className=T["validation-message"],z.customClass&&z.customClass.validationMessage&&He(I.validationMessage,z.customClass.validationMessage),Ct(I.validationMessage);const G=this.getInput();G&&(G.setAttribute("aria-invalid","true"),G.setAttribute("aria-describedby",T["validation-message"]),en(G),He(G,T.inputerror))}function nl(){const E=dt.domCache.get(this);E.validationMessage&&$t(E.validationMessage);const I=this.getInput();I&&(I.removeAttribute("aria-invalid"),I.removeAttribute("aria-describedby"),lt(I,T.inputerror))}const Cr={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Vs=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Us={},Hs=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],wt=E=>Object.prototype.hasOwnProperty.call(Cr,E),ol=E=>Vs.indexOf(E)!==-1,rl=E=>Us[E],hc=E=>{wt(E)||R('Unknown parameter "'.concat(E,'"'))},fc=E=>{Hs.includes(E)&&R('The parameter "'.concat(E,'" is incompatible with toasts'))},pc=E=>{const I=rl(E);I&&V(E,I)},Qd=E=>{E.backdrop===!1&&E.allowOutsideClick&&R('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const I in E)hc(I),E.toast&&fc(I),pc(I)};function gc(E){const I=we(),z=dt.innerParams.get(this);if(!I||hn(I,z.hideClass.popup)){R("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const G=Zd(E),le=Object.assign({},z,G);Oa(this,le),dt.innerParams.set(this,le),Object.defineProperties(this,{params:{value:Object.assign({},this.params,E),writable:!1,enumerable:!0}})}const Zd=E=>{const I={};return Object.keys(E).forEach(z=>{ol(z)?I[z]=E[z]:R("Invalid parameter to update: ".concat(z))}),I};function mc(){const E=dt.domCache.get(this),I=dt.innerParams.get(this);if(!I){Fo(this);return}E.popup&&A.swalCloseEventFinishedCallback&&(A.swalCloseEventFinishedCallback(),delete A.swalCloseEventFinishedCallback),typeof I.didDestroy=="function"&&I.didDestroy(),Ar(this)}const Ar=E=>{Fo(E),delete E.params,delete A.keydownHandler,delete A.keydownTarget,delete A.currentInstance},Fo=E=>{E.isAwaitingPromise?($s(dt,E),E.isAwaitingPromise=!0):($s(bo,E),$s(dt,E),delete E.isAwaitingPromise,delete E.disableButtons,delete E.enableButtons,delete E.getInput,delete E.disableInput,delete E.enableInput,delete E.hideLoading,delete E.disableLoading,delete E.showValidationMessage,delete E.resetValidationMessage,delete E.close,delete E.closePopup,delete E.closeModal,delete E.closeToast,delete E.rejectPromise,delete E.update,delete E._destroy)},$s=(E,I)=>{for(const z in E)E[z].delete(I)};var Jd=Object.freeze({__proto__:null,_destroy:mc,close:Xo,closeModal:Xo,closePopup:Xo,closeToast:Xo,disableButtons:Xa,disableInput:tl,disableLoading:Qi,enableButtons:Ja,enableInput:el,getInput:Za,handleAwaitingPromise:er,hideLoading:Qi,rejectPromise:Ns,resetValidationMessage:nl,showValidationMessage:Fs,update:gc});const Ji=(E,I,z)=>{E.toast?Ws(E,I,z):(Ci(I),bc(I),U(E,I,z))},Ws=(E,I,z)=>{I.popup.onclick=()=>{E&&(il(E)||E.timer||E.input)||z(wr.close)}},il=E=>!!(E.showConfirmButton||E.showDenyButton||E.showCancelButton||E.showCloseButton);let yi=!1;const Ci=E=>{E.popup.onmousedown=()=>{E.container.onmouseup=function(I){E.container.onmouseup=()=>{},I.target===E.container&&(yi=!0)}}},bc=E=>{E.container.onmousedown=()=>{E.popup.onmouseup=function(I){E.popup.onmouseup=()=>{},(I.target===E.popup||I.target instanceof HTMLElement&&E.popup.contains(I.target))&&(yi=!0)}}},U=(E,I,z)=>{I.container.onclick=G=>{if(yi){yi=!1;return}G.target===I.container&&ee(E.allowOutsideClick)&&z(wr.backdrop)}},H=E=>typeof E=="object"&&E.jquery,K=E=>E instanceof Element||H(E),oe=E=>{const I={};return typeof E[0]=="object"&&!K(E[0])?Object.assign(I,E[0]):["title","html","icon"].forEach((z,G)=>{const le=E[G];typeof le=="string"||K(le)?I[z]=le:le!==void 0&&W("Unexpected type of ".concat(z,'! Expected "string" or "Element", got ').concat(typeof le))}),I};function Ne(){const E=this;for(var I=arguments.length,z=new Array(I),G=0;G<I;G++)z[G]=arguments[G];return new E(...z)}function Ue(E){class I extends this{_main(G,le){return super._main(G,Object.assign({},E,le))}}return I}const $e=()=>A.timeout&&A.timeout.getTimerLeft(),We=()=>{if(A.timeout)return Ie(),A.timeout.stop()},qt=()=>{if(A.timeout){const E=A.timeout.start();return ye(E),E}},Gt=()=>{const E=A.timeout;return E&&(E.running?We():qt())},qs=E=>{if(A.timeout){const I=A.timeout.increase(E);return ye(I,!0),I}},xr=()=>!!(A.timeout&&A.timeout.isRunning());let Io=!1;const tr={};function Ai(){let E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";tr[E]=this,Io||(document.body.addEventListener("click",Er),Io=!0)}const Er=E=>{for(let I=E.target;I&&I!==document;I=I.parentNode)for(const z in tr){const G=I.getAttribute(z);if(G){tr[z].fire({template:G});return}}};var Ze=Object.freeze({__proto__:null,argsToParams:oe,bindClickHandler:Ai,clickCancel:Vd,clickConfirm:tc,clickDeny:nc,enableLoading:yr,fire:Ne,getActions:_t,getCancelButton:Xt,getCloseButton:In,getConfirmButton:te,getContainer:ge,getDenyButton:Ae,getFocusableElements:Qe,getFooter:it,getHtmlContainer:ue,getIcon:Te,getIconContent:me,getImage:ve,getInputLabel:je,getLoader:Xe,getPopup:we,getProgressSteps:xe,getTimerLeft:$e,getTimerProgressBar:Et,getTitle:ae,getValidationMessage:xt,increaseTimer:qs,isDeprecatedParameter:rl,isLoading:Vr,isTimerRunning:xr,isUpdatableParameter:ol,isValidParameter:wt,isVisible:Es,mixin:Ue,resumeTimer:qt,showLoading:yr,stopTimer:We,toggleTimer:Gt});class ko{constructor(I,z){this.callback=I,this.remaining=z,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(I){const z=this.running;return z&&this.stop(),this.remaining+=I,z&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Mn=["swal-title","swal-html","swal-footer"],Vn=E=>{const I=typeof E.template=="string"?document.querySelector(E.template):E.template;if(!I)return{};const z=I.content;return Og(z),Object.assign(Sr(z),Ih(z),Bg(z),xi(z),kc(z),Mh(z),Ei(z,Mn))},Sr=E=>{const I={};return Array.from(E.querySelectorAll("swal-param")).forEach(G=>{Si(G,["name","value"]);const le=G.getAttribute("name"),Pe=G.getAttribute("value");typeof Cr[le]=="boolean"?I[le]=Pe!=="false":typeof Cr[le]=="object"?I[le]=JSON.parse(Pe):I[le]=Pe}),I},Ih=E=>{const I={};return Array.from(E.querySelectorAll("swal-function-param")).forEach(G=>{const le=G.getAttribute("name"),Pe=G.getAttribute("value");I[le]=new Function("return ".concat(Pe))()}),I},Bg=E=>{const I={};return Array.from(E.querySelectorAll("swal-button")).forEach(G=>{Si(G,["type","color","aria-label"]);const le=G.getAttribute("type");I["".concat(le,"ButtonText")]=G.innerHTML,I["show".concat(O(le),"Button")]=!0,G.hasAttribute("color")&&(I["".concat(le,"ButtonColor")]=G.getAttribute("color")),G.hasAttribute("aria-label")&&(I["".concat(le,"ButtonAriaLabel")]=G.getAttribute("aria-label"))}),I},xi=E=>{const I={},z=E.querySelector("swal-image");return z&&(Si(z,["src","width","height","alt"]),z.hasAttribute("src")&&(I.imageUrl=z.getAttribute("src")),z.hasAttribute("width")&&(I.imageWidth=z.getAttribute("width")),z.hasAttribute("height")&&(I.imageHeight=z.getAttribute("height")),z.hasAttribute("alt")&&(I.imageAlt=z.getAttribute("alt"))),I},kc=E=>{const I={},z=E.querySelector("swal-icon");return z&&(Si(z,["type","color"]),z.hasAttribute("type")&&(I.icon=z.getAttribute("type")),z.hasAttribute("color")&&(I.iconColor=z.getAttribute("color")),I.iconHtml=z.innerHTML),I},Mh=E=>{const I={},z=E.querySelector("swal-input");z&&(Si(z,["type","label","placeholder","value"]),I.input=z.getAttribute("type")||"text",z.hasAttribute("label")&&(I.inputLabel=z.getAttribute("label")),z.hasAttribute("placeholder")&&(I.inputPlaceholder=z.getAttribute("placeholder")),z.hasAttribute("value")&&(I.inputValue=z.getAttribute("value")));const G=Array.from(E.querySelectorAll("swal-input-option"));return G.length&&(I.inputOptions={},G.forEach(le=>{Si(le,["value"]);const Pe=le.getAttribute("value"),ut=le.innerHTML;I.inputOptions[Pe]=ut})),I},Ei=(E,I)=>{const z={};for(const G in I){const le=I[G],Pe=E.querySelector(le);Pe&&(Si(Pe,[]),z[le.replace(/^swal-/,"")]=Pe.innerHTML.trim())}return z},Og=E=>{const I=Mn.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(E.children).forEach(z=>{const G=z.tagName.toLowerCase();I.includes(G)||R("Unrecognized element <".concat(G,">"))})},Si=(E,I)=>{Array.from(E.attributes).forEach(z=>{I.indexOf(z.name)===-1&&R(['Unrecognized attribute "'.concat(z.name,'" on <').concat(E.tagName.toLowerCase(),">."),"".concat(I.length?"Allowed attributes are: ".concat(I.join(", ")):"To set the value, use HTML within the element.")])})},wc=10,qe=E=>{const I=ge(),z=we();typeof E.willOpen=="function"&&E.willOpen(z);const le=window.getComputedStyle(document.body).overflowY;kn(I,z,E),setTimeout(()=>{_c(I,z)},wc),Gn()&&(Nh(I,E.scrollbarPadding,le),Hd()),!so()&&!A.previousActiveElement&&(A.previousActiveElement=document.activeElement),typeof E.didOpen=="function"&&setTimeout(()=>E.didOpen(z)),lt(I,T["no-transition"])},vc=E=>{const I=we();if(E.target!==I||!Yn)return;const z=ge();I.removeEventListener(Yn,vc),z.style.overflowY="auto"},_c=(E,I)=>{Yn&&he(I)?(E.style.overflowY="hidden",I.addEventListener(Yn,vc)):E.style.overflowY="auto"},Nh=(E,I,z)=>{oc(),I&&z!=="hidden"&&Ha(z),setTimeout(()=>{E.scrollTop=0})},kn=(E,I,z)=>{He(E,z.showClass.backdrop),I.style.setProperty("opacity","0","important"),Ct(I,"grid"),setTimeout(()=>{He(I,z.showClass.popup),I.style.removeProperty("opacity")},wc),He([document.documentElement,document.body],T.shown),z.heightAuto&&z.backdrop&&!z.toast&&He([document.documentElement,document.body],T["height-auto"])};var Xd={email:(E,I)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(E)?Promise.resolve():Promise.resolve(I||"Invalid email address"),url:(E,I)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(E)?Promise.resolve():Promise.resolve(I||"Invalid URL")};function St(E){E.inputValidator||(E.input==="email"&&(E.inputValidator=Xd.email),E.input==="url"&&(E.inputValidator=Xd.url))}function yc(E){(!E.target||typeof E.target=="string"&&!document.querySelector(E.target)||typeof E.target!="string"&&!E.target.appendChild)&&(R('Target parameter is not valid, defaulting to "body"'),E.target="body")}function jh(E){St(E),E.showLoaderOnConfirm&&!E.preConfirm&&R(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),yc(E),typeof E.title=="string"&&(E.title=E.title.split(`
`).join("<br />")),sn(E)}let nr;var sl=new WeakMap;class Ge{constructor(){if(g(this,sl,{writable:!0,value:void 0}),typeof window>"u")return;nr=this;for(var I=arguments.length,z=new Array(I),G=0;G<I;G++)z[G]=arguments[G];const le=Object.freeze(this.constructor.argsToParams(z));this.params=le,this.isAwaitingPromise=!1,d(this,sl,this._main(nr.params))}_main(I){let z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Qd(Object.assign({},z,I)),A.currentInstance&&(A.currentInstance._destroy(),Gn()&&Ts()),A.currentInstance=nr;const G=Lg(I,z);jh(G),Object.freeze(G),A.timeout&&(A.timeout.stop(),delete A.timeout),clearTimeout(A.restoreFocusTimeout);const le=eu(nr);return Oa(nr,G),dt.innerParams.set(nr,G),Cc(nr,le,G)}then(I){return l(this,sl).then(I)}finally(I){return l(this,sl).finally(I)}}const Cc=(E,I,z)=>new Promise((G,le)=>{const Pe=ut=>{E.close({isDismissed:!0,dismiss:ut})};bo.swalPromiseResolve.set(E,G),bo.swalPromiseReject.set(E,le),I.confirmButton.onclick=()=>{_i(E)},I.denyButton.onclick=()=>{Kd(E)},I.cancelButton.onclick=()=>{Ya(E,Pe)},I.closeButton.onclick=()=>{Pe(wr.close)},Ji(z,I,Pe),Ss(A,z,Pe),ac(E,z),qe(z),Ac(A,z,Pe),Ph(I,z),setTimeout(()=>{I.container.scrollTop=0})}),Lg=(E,I)=>{const z=Vn(E),G=Object.assign({},Cr,I,z,E);return G.showClass=Object.assign({},Cr.showClass,G.showClass),G.hideClass=Object.assign({},Cr.hideClass,G.hideClass),G},eu=E=>{const I={popup:we(),container:ge(),actions:_t(),confirmButton:te(),denyButton:Ae(),cancelButton:Xt(),loader:Xe(),closeButton:In(),validationMessage:xt(),progressSteps:xe()};return dt.domCache.set(E,I),I},Ac=(E,I,z)=>{const G=Et();$t(G),I.timer&&(E.timeout=new ko(()=>{z("timer"),delete E.timeout},I.timer),I.timerProgressBar&&(Ct(G),rn(G,I,"timerProgressBar"),setTimeout(()=>{E.timeout&&E.timeout.running&&ye(I.timer)})))},Ph=(E,I)=>{if(!I.toast){if(!ee(I.allowEnterKey)){Xi();return}al(E,I)||La(-1,1)}},al=(E,I)=>I.focusDeny&&Cn(E.denyButton)?(E.denyButton.focus(),!0):I.focusCancel&&Cn(E.cancelButton)?(E.cancelButton.focus(),!0):I.focusConfirm&&Cn(E.confirmButton)?(E.confirmButton.focus(),!0):!1,Xi=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const E=new Date,I=localStorage.getItem("swal-initiation");I?(E.getTime()-Date.parse(I))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const z=document.createElement("audio");z.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",z.loop=!0,document.body.appendChild(z),setTimeout(()=>{z.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation","".concat(E))}Ge.prototype.disableButtons=Xa,Ge.prototype.enableButtons=Ja,Ge.prototype.getInput=Za,Ge.prototype.disableInput=tl,Ge.prototype.enableInput=el,Ge.prototype.hideLoading=Qi,Ge.prototype.disableLoading=Qi,Ge.prototype.showValidationMessage=Fs,Ge.prototype.resetValidationMessage=nl,Ge.prototype.close=Xo,Ge.prototype.closePopup=Xo,Ge.prototype.closeModal=Xo,Ge.prototype.closeToast=Xo,Ge.prototype.rejectPromise=Ns,Ge.prototype.update=gc,Ge.prototype._destroy=mc,Object.assign(Ge,Ze),Object.keys(Jd).forEach(E=>{Ge[E]=function(){return nr&&nr[E]?nr[E](...arguments):null}}),Ge.DismissReason=wr,Ge.version="11.7.32";const ll=Ge;return ll.default=ll,ll}),typeof ho<"u"&&ho.Sweetalert2&&(ho.swal=ho.sweetAlert=ho.Swal=ho.SweetAlert=ho.Sweetalert2),typeof document<"u"&&function(l,d){var h=l.createElement("style");if(l.getElementsByTagName("head")[0].appendChild(h),h.styleSheet)h.styleSheet.disabled||(h.styleSheet.cssText=d);else try{h.innerHTML=d}catch{h.innerText=d}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(CI);var MU=CI.exports;const ze=Ea(MU),NU="_parentContainer_d9pva_7",jU="_sidebarNavegation_d9pva_35",PU="_navbarLink_d9pva_81",BU="_fixedSettingsContainer_d9pva_129",OU="_formUpdateDataUser_d9pva_189",as={parentContainer:NU,sidebarNavegation:jU,navbarLink:PU,fixedSettingsContainer:BU,formUpdateDataUser:OU};function Pg({appearance:n}){const r=Eo(),l=Ye(J=>J.JWTVerify),d=Ye(J=>J.userData),h=Ye(J=>J.allUsernames),p=Ye(J=>J.blogsByUser),[b,k]=Z.useState({}),[g,v]=Z.useState(void 0),[A,x]=Z.useState(void 0),[_,C]=Z.useState([]),[M,T]=Z.useState("none"),L=JSON.parse(localStorage.getItem("access")),P=JSON.parse(localStorage.getItem("username"));let j=window.innerWidth;Z.useEffect(()=>{L||(localStorage.clear(),location.href="https://critianrodriguez042502.github.io/agency_view/#/access/signin"),l.status||Je(()=>import("./index-e09ecdba.js"),[]).then(J=>{r(J.axiosJWTVerify({token:L}))}),l.status==="rejected"&&(location.href="https://critianrodriguez042502.github.io/agency_view/#/access/signin")},[l.status,P]),Z.useEffect(()=>{d.status==="rejected"&&(l.status==="rejected"||!L)&&(location.href="https://critianrodriguez042502.github.io/agency_view/#/access/signin",localStorage.clear())},[d.status,P]),Z.useEffect(()=>{l.status==="fulfilled"&&L&&!h.info&&Je(()=>import("./index-e09ecdba.js"),[]).then(J=>{r(J.axiosAllUsernames({jwt:L}))}),(l.status==="fulfilled"&&!d.info&&L||!P)&&Je(()=>import("./index-e09ecdba.js"),[]).then(J=>{r(J.axiosUserData({method:"get",jwt:L}))}),l.status==="fulfilled"&&!p.info&&L&&P&&Je(()=>import("./index-e09ecdba.js"),[]).then(J=>{r(J.axiosBlogsByUser(L))})},[l.status,P]),Z.useEffect(()=>{d.status==="fulfilled"&&(k({first_name:d.info.first_name,last_name:d.info.last_name,username:d.info.username}),x(d.info.img_url)),h.status==="fulfilled"&&C(h.info.data)},[d.info,h.info]);function O(J){ze.fire({text:"Estas seguro que deseas cerrar sesion?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Cerrar!"}).then(ne=>{ne.isConfirmed&&(localStorage.clear(),setTimeout(()=>{location.href="https://critianrodriguez042502.github.io/agency_view/#/access/signin"},2e3))})}function R(J){k({...b,[J.target.name]:J.target.value})}function W(J){v(J.target.files[0])}function Q(J){const ne={Authorization:`JWT ${L}`},fe="https://server-agency-1203.onrender.com/user_system/upload_img_user/",ge=new FormData;ge.append("file",J),fetch(fe,{method:"POST",headers:ne,body:ge}).then(Be=>{if(Be.ok)ze.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:we=>{we.addEventListener("mouseenter",ze.stopTimer),we.addEventListener("mouseleave",ze.resumeTimer)}}).fire({icon:"success",title:"imagen cargada correctamente"}),setTimeout(()=>{Je(()=>import("./index-e09ecdba.js"),[]).then(we=>{r(we.axiosUserData({method:"get",jwt:L}))})},200);else throw new Error("Hubo algun error al tratar de hacer la solicitud")}).catch(Be=>{console.log(Be)})}function Y(J){if(J.preventDefault(),b.first_name&&b.last_name&&b.username){const ne=_.filter(ge=>ge!==d.info.username),fe=[];for(let ge=0;ge<ne.length;ge++)ne[ge]===b.username&&fe.unshift(ne[ge]);fe.length===0?g!==void 0?(Je(()=>import("./index-e09ecdba.js"),[]).then(ge=>{r(ge.axiosUserData({method:"put",jwt:L,info:b}))}),setTimeout(()=>{Q(g)},100),T("none")):(Je(()=>import("./index-e09ecdba.js"),[]).then(ge=>{r(ge.axiosUserData({method:"put",jwt:L,info:b}))}),T("none")):ze.fire({icon:"warning",title:"Oops...",text:"Este nombre de usuario ya existe"})}else ze.fire({icon:"info",title:"Oops...",text:"Estas tratando de enviar datos vacios"})}function V(){T("initial")}function ee(){T("none")}return D.jsxs("main",{className:as.parentContainer,style:n===!0||j>=750?{left:"0px"}:{left:"-300px"},children:[D.jsxs("section",{className:as.sidebarNavegation,children:[D.jsxs("nav",{children:[D.jsx(ur,{className:as.navbarLink,to:"/home",children:"IMPACT X"}),D.jsx(ur,{className:as.navbarLink,to:"/dashboard",children:"INICIO"}),D.jsx(ur,{className:as.navbarLink,to:"/dashboard/blogs_user",children:"BLOGS"}),D.jsx("p",{className:as.navbarLink,onClick:V,children:"AJUSTES"}),D.jsx("p",{className:as.navbarLink,onClick:O,children:"CERRAR SESION"})]}),D.jsx("article",{children:A==null?D.jsx("div",{children:D.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/17/17004.png",alt:"img",width:140})}):D.jsx("div",{children:D.jsx("img",{src:A,alt:"img",width:140})})})]}),D.jsx("section",{children:D.jsxs("div",{className:as.fixedSettingsContainer,style:{display:M},children:[D.jsx("h1",{onClick:ee,children:D.jsx(xa,{})}),A==null?D.jsx("h3",{children:" Modificar datos y agregar imagen de perfil "}):D.jsx("h3",{children:" Modificar datos de usuario o cambiar imagen de perfil "}),D.jsx("form",{className:as.formUpdateDataUser,onSubmit:Y,children:Object.keys(b).length!==0?D.jsxs("div",{children:[D.jsx("label",{htmlFor:"first_name",children:" Primer nombre "}),D.jsx("input",{type:"text",name:"first_name",id:"first_name",value:b.first_name,onChange:R,required:!0}),D.jsx("label",{htmlFor:"last_name",children:" Segundo nombre"}),D.jsx("input",{type:"text",name:"last_name",id:"last_name",value:b.last_name,onChange:R,required:!0}),D.jsx("label",{htmlFor:"username",children:" nombre de usuario "}),D.jsx("input",{type:"text",name:"username",id:"username",value:b.username,onChange:R,required:!0}),D.jsx("label",{htmlFor:"image",children:" Imagen de perfil "}),D.jsx("input",{type:"file",name:"file",id:"file",accept:"image/*",onChange:W}),D.jsx("button",{type:"submit",children:" Actualizar "})]}):D.jsx("p",{children:" Error "})})]})})]})}const LU="_messageError_9mqb1_3",RU="_mainButton_9mqb1_25",zU="_counter_9mqb1_43",FU="_loader_9mqb1_57",VU="_rotation_9mqb1_1",Hf={messageError:LU,mainButton:RU,counter:zU,loader:FU,rotation:VU};function UU({params:n}){const r=Eo(),l=Zo(),d=Ye(T=>T.JWTVerify),h=Ye(T=>T.getLikesBlog),p=Ye(T=>T.likeBlog),[b,k]=Z.useState(!1),[g,v]=Z.useState("none"),[A,x]=Z.useState("initial"),_=JSON.parse(localStorage.getItem("access")),C=JSON.parse(localStorage.getItem("username"));Z.useEffect(()=>{Je(()=>import("./index-e09ecdba.js"),[]).then(T=>{r(T.axiosGetLikesBlog(n))})},[p.info]),Z.useEffect(()=>{var T;if(h.status=="fulfilled"){const L=(T=h.info.data.likes_details)==null?void 0:T.filter(P=>P.user.username===C);L.length==0?k(!1):L[0].selected==!0?k(!0):k(!1)}},[h.info]),Z.useEffect(()=>{setTimeout(()=>{v("none"),x("initial")},3e3)},[g]);function M(T){if(p.status!=="pending")if(T.target.type==="checkbox"&&d.status==="fulfilled"&&_&&C){const L={like:!b,slug:n,jwt:_};Je(()=>import("./index-e09ecdba.js"),[]).then(P=>{r(P.axiosLikeBlog(L)),v("inline-block"),x("none")}),k(!b)}else if(d.status==="fulfilled"&&_&&C){const L={like:!1,slug:n,jwt:_};Je(()=>import("./index-e09ecdba.js"),[]).then(P=>{v("inline-block"),x("none"),r(P.axiosLikeBlog(L))}),k(!1)}else d.status==="fulfilled"&&_?(T.target.checked=!1,l("/dashboard")):(T.target.checked=!1,ze.fire({icon:"warning",title:"Oops...",text:"Tienes que estar registrado!",footer:`<a class=${Hf.messageError} href="https://critianrodriguez042502.github.io/agency_view/#/access/signin"> Ingresa a tu cuenta </a>`}))}return D.jsx("main",{children:D.jsxs("div",{children:[D.jsx("span",{style:{display:g},className:Hf.loader}),D.jsx("input",{style:{display:A},className:Hf.mainButton,type:"checkbox",name:"like",checked:b,onChange:M}),h.status==="fulfilled"?D.jsx("b",{className:Hf.counter,children:h.info.data.all_likes}):!1]})})}const HU="_messageError_h79mk_3",$U="_containerFixed_h79mk_27",WU="_mainButton_h79mk_65",qU="_topSection_h79mk_111",GU="_containerInputCreateComment_h79mk_149",KU="_buttonCreateNewComment_h79mk_185",YU="_containerComment_h79mk_217",QU="_userImage_h79mk_235",ZU="_commentContent_h79mk_257",JU="_commentUsername_h79mk_265",XU="_commentText_h79mk_279",eH="_commentDate_h79mk_297",tH="_updateAndDeleteButtonContainer_h79mk_313",nH="_buttonUpdate_h79mk_333",oH="_buttonDelete_h79mk_365",rH="_commentsUpdateVisibility_h79mk_399",iH="_buttonClose_h79mk_435",sH="_containerUpdateComment_h79mk_447",aH="_textTarea_h79mk_461",lH="_buttonFormUpdate_h79mk_481",Kt={messageError:HU,containerFixed:$U,mainButton:WU,topSection:qU,containerInputCreateComment:GU,buttonCreateNewComment:KU,containerComment:YU,userImage:QU,commentContent:ZU,commentUsername:JU,commentText:XU,commentDate:eH,updateAndDeleteButtonContainer:tH,buttonUpdate:nH,buttonDelete:oH,commentsUpdateVisibility:rH,buttonClose:iH,containerUpdateComment:sH,textTarea:aH,buttonFormUpdate:lH};function cH({params:n}){const r=Eo(),l=Zo(),d=Zl(),h=ui(),p=Ye(Te=>Te.JWTVerify),b=Ye(Te=>Te.getComments),k=Ye(Te=>Te.commentsBlog),g=Ye(Te=>Te.detailedCommentBlog),[v,A]=Z.useState(""),[x,_]=Z.useState(""),[C,M]=Z.useState("none"),[T,L]=Z.useState("none"),[P,j]=Z.useState("1"),O=JSON.parse(localStorage.getItem("access")),R=JSON.parse(localStorage.getItem("username")),W=h.search,[Q,Y]=Z.useState("0");Z.useEffect(()=>{Je(()=>import("./index-e09ecdba.js"),[]).then(Te=>{r(Te.axiosGetCommentsBlog(n))})},[n,k.info]),Z.useEffect(()=>{W&&Je(()=>import("./index-e09ecdba.js"),[]).then(Te=>{r(Te.axiosDetailedCommentsBlog({method:"get",jwt:O,unique_brand:W.split("=")[1]}))})},[W]),Z.useEffect(()=>{g.info&&_(g.info.comment)},[g.info]);function V(Te){A(Te.target.value)}function ee(Te){Te.preventDefault(),v?p.status==="fulfilled"&&O&&R?(j("0"),Je(()=>import("./index-e09ecdba.js"),[]).then(me=>{r(me.axiosCommentsBlog({method:"post",jwt:O,slug:d.slug,content:v}))}),A("")):ze.fire({icon:"warning",title:"Oops...",text:"Tienes que estar registrado!",footer:`<a class=${Kt.messageError} href="https://critianrodriguez042502.github.io/agency_view/#/access/signin"> Ingresa a tu cuenta </a>`}):ze.fire({icon:"error",title:"Oops...",text:"No puedes enviar datos vacios!"})}function J(){setTimeout(()=>{j("1")},350)}setTimeout(()=>{Y("1")},350);function ne(Te){_(Te.target.value)}function fe(Te){Te.preventDefault(),x?(j("0"),Je(()=>import("./index-e09ecdba.js"),[]).then(me=>{r(me.axiosCommentsBlog({method:"patch",jwt:O,unique_key:W.split("=")[1],content:x}))}),L("none"),l(`/blogs/blog_detail/${d.slug}`)):ze.fire({icon:"error",title:"Oops...",text:"No puedes enviar datos vacios!"})}function ge(Te){M("initial")}function Be(Te){M("none")}function De(Te){L("none")}function we(){var ae,ue;J();const Te=(ae=b.info.results.data)==null?void 0:ae.filter(ve=>ve.user.username===R),me=(ue=b.info.results.data)==null?void 0:ue.filter(ve=>ve.user.username!==R);return D.jsxs("div",{children:[Te==null?void 0:Te.map(function(ve){return D.jsxs("div",{className:Kt.containerComment,children:[D.jsx("div",{className:Kt.userImage,children:ve.user.img===null?D.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/17/17004.png",alt:"img"}):D.jsx("img",{src:ve.user.img_url,alt:"img"})}),D.jsxs("div",{className:Kt.commentContent,children:[D.jsx("h2",{className:Kt.commentUsername,children:ve.user.username}),D.jsxs("p",{className:Kt.commentText,children:[" ",ve.comments," "]}),D.jsx("hr",{style:{border:"2px solid gray"}}),D.jsxs("div",{className:Kt.updateAndDeleteButtonContainer,children:[D.jsxs("aside",{children:[D.jsx("button",{className:Kt.buttonUpdate,onClick:xe=>{L("initial"),l(`/blogs/blog_detail/${d.slug}?unique_brand=${ve.unique_brand}`),Y("0")},children:"Modificar"}),D.jsx("button",{className:Kt.buttonDelete,onClick:xe=>{j("0"),Je(()=>import("./index-e09ecdba.js"),[]).then(xt=>{r(xt.axiosCommentsBlog({method:"delete",jwt:O,unique_key:ve.unique_brand}))})},children:"Eliminar"})]}),D.jsx("aside",{children:D.jsxs("b",{className:Kt.commentDate,children:[" ",ve.creation," "]})})]})]})]},ve.id)}),me==null?void 0:me.map(function(ve){return D.jsxs("div",{className:Kt.containerComment,children:[D.jsx("div",{className:Kt.userImage,children:ve.user.img===null?D.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/17/17004.png",alt:"img"}):D.jsx("img",{src:ve.user.img_url,alt:"img"})}),D.jsxs("div",{className:Kt.commentContent,children:[D.jsx("h2",{className:Kt.commentUsername,children:ve.user.username}),D.jsxs("p",{className:Kt.commentText,children:[" ",ve.comments," "]}),D.jsx("hr",{style:{border:"2px solid gray"}}),D.jsxs("b",{className:Kt.commentDate,children:[" ",ve.creation," "]})]})]},ve.id)})]})}return D.jsxs("main",{children:[D.jsx("div",{children:D.jsx("b",{className:Kt.mainButton,onClick:ge,children:"Comentarios"})}),D.jsxs("article",{style:{display:C},className:Kt.containerFixed,children:[D.jsx("section",{children:D.jsxs("div",{className:Kt.topSection,children:[b.status==="fulfilled"?D.jsx("div",{children:b.info.results.all===1?D.jsx("p",{children:" 1 comentario "}):b.info.results.all===0?D.jsx("p",{children:" No hay comentarios "}):D.jsxs("p",{children:[" ",b.info.results.all," comentarios "]})}):!1,D.jsx("h1",{onClick:Be,children:D.jsx(xa,{})})]})}),D.jsx("section",{children:D.jsxs("form",{className:Kt.containerInputCreateComment,onSubmit:ee,children:[D.jsx("input",{type:"text",name:"new_comment",id:"new_comment",value:v,onChange:V,placeholder:"nuevo comentario",required:!0}),D.jsx("button",{className:Kt.buttonCreateNewComment,type:"sumbit",children:"Crear"})]})}),D.jsx("section",{style:{opacity:P},children:b.status==="fulfilled"?we():!1}),D.jsx("section",{style:{display:T},className:Kt.commentsUpdateVisibility,children:D.jsx("div",{style:{opacity:Q},className:Kt.inputUpdateComment,children:D.jsxs("aside",{children:[D.jsx("h1",{className:Kt.buttonClose,onClick:De,children:D.jsx(xa,{})}),D.jsxs("form",{className:Kt.containerUpdateComment,onSubmit:fe,children:[D.jsx("textarea",{onChange:ne,value:x,className:Kt.textTarea,name:"updateComment",id:"updateComment",cols:"30",rows:"10",required:!0}),D.jsx("button",{className:Kt.buttonFormUpdate,type:"submit",children:"Actualizar"})]})]})})})]})]})}function QS(n){return hi({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"}}]})(n)}const dH="_containerFixed_18dyc_5",uH="_containerButtonReactions_18dyc_41",hH="_buttonReactions_18dyc_69",fH="_bottonWithoutVisibilityComments_18dyc_109",pH="_moveToLikes_18dyc_121",gH="_buttonToMoveToLikes_18dyc_137",mH="_containerComment_18dyc_147",bH="_userImage_18dyc_165",kH="_commentContent_18dyc_197",wH="_commentUsername_18dyc_205",vH="_commentText_18dyc_219",_H="_commentDate_18dyc_239",yH="_likesContainer_18dyc_259",CH="_moveToComents_18dyc_279",AH="_buttonToMoveToComment_18dyc_295",xH="_likesList_18dyc_327",EH="_likeUser_18dyc_339",SH="_likeItem_18dyc_349",Bn={containerFixed:dH,containerButtonReactions:uH,buttonReactions:hH,bottonWithoutVisibilityComments:fH,moveToLikes:pH,buttonToMoveToLikes:gH,containerComment:mH,userImage:bH,commentContent:kH,commentUsername:wH,commentText:vH,commentDate:_H,likesContainer:yH,moveToComents:CH,buttonToMoveToComment:AH,likesList:xH,likeUser:EH,likeItem:SH};function DH({params:n}){var _;const r=Eo(),l=JSON.parse(localStorage.getItem("access")),d=Ye(C=>C.getUserBlogReactions),[h,p]=Z.useState("none"),[b,k]=Z.useState("none");Z.useEffect(()=>{Je(()=>import("./index-e09ecdba.js"),[]).then(C=>{r(C.axiosGetUserBlogReactions({jwt:l,slug:n}))})},[]);function g(C){p("initial"),k("none")}function v(C){p("none")}function A(C){k("initial"),p("none")}function x(C){k("none")}return D.jsxs("main",{children:[D.jsx("div",{className:Bn.containerButtonReactions,children:D.jsxs("p",{className:Bn.buttonReactions,onClick:g,children:[D.jsx("span",{style:{margin:"5px"},children:D.jsx(QS,{})}),"Likes y comentarios",D.jsx("span",{style:{margin:"5px"},children:D.jsx(QS,{})})]})}),D.jsxs("section",{className:Bn.containerFixed,style:{display:h},children:[D.jsx("div",{className:Bn.bottonWithoutVisibilityComments,children:D.jsx("b",{onClick:v,children:D.jsx(xa,{})})}),D.jsxs("div",{className:Bn.moveToLikes,children:[D.jsx("div",{children:d.status==="fulfilled"&&d.info.comments.length===1?D.jsx("b",{children:" 1 Comentario "}):d.status==="fulfilled"&&d.info.comments.length>=1?D.jsxs("b",{children:[d.info.comments.length," Comentarios"]}):D.jsx("b",{children:" Sin comentarios "})}),D.jsx("h1",{className:Bn.buttonToMoveToLikes,onClick:A,children:D.jsx(CU,{})})]}),D.jsx("div",{children:d.status==="fulfilled"&&d.info.comments.length!==0?(_=d.info.comments)==null?void 0:_.map(C=>D.jsxs("div",{className:Bn.containerComment,children:[D.jsx("div",{className:Bn.userImage,children:C.user.img===null?D.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/17/17004.png",alt:"img"}):D.jsx("img",{src:C.user.img_url,alt:"img"})}),D.jsxs("div",{className:Bn.commentContent,children:[D.jsx("h2",{className:Bn.commentUsername,children:C.user.username}),D.jsxs("p",{className:Bn.commentText,children:[" ",C.comments," "]}),D.jsx("hr",{style:{border:"2px solid gray"}}),D.jsxs("b",{className:Bn.commentDate,children:[" ",C.creation," "]})]})]},C.id)):d.status==="fulfilled"&&d.info.comments.length===0?D.jsx("p",{children:" No hay comentarios "}):D.jsx("p",{children:" Hubo algún error "})})]}),D.jsxs("section",{style:{display:b},className:Bn.containerFixed,children:[D.jsx("div",{className:Bn.bottonWithoutVisibilityComments,children:D.jsx("b",{onClick:x,children:D.jsx(xa,{})})}),D.jsxs("div",{className:Bn.moveToComents,children:[D.jsx("div",{children:d.status==="fulfilled"&&d.info.likes.length===1?D.jsx("b",{children:" 1 like "}):d.status==="fulfilled"&&d.info.likes.length>=1?D.jsxs("b",{children:[" ",d.info.likes.length," likes "]}):D.jsx("b",{children:" Sin Likes "})}),D.jsx("h1",{className:Bn.buttonToMoveToComment,onClick:g,children:D.jsx(yU,{})})]}),D.jsx("div",{className:Bn.likesContainer,children:d.status==="fulfilled"&&d.info.likes.length>0?D.jsx("div",{children:D.jsx("ul",{className:Bn.likesList,children:d.info.likes.map(C=>D.jsx("li",{className:Bn.likeItem,children:D.jsxs("div",{className:Bn.likeUser,children:[C.user.img===null?D.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/17/17004.png",alt:"img",width:70}):D.jsx("img",{src:C.user.img_url,alt:"img",width:70}),D.jsx("h2",{children:C.user.username})]})},C.id))})}):D.jsx("p",{children:"No hay likes."})})]})]})}function TH(){return D.jsx("div",{children:D.jsx("h1",{children:" No existe la pagina '404' "})})}var AI={exports:{}},IH="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",MH=IH,NH=MH;function xI(){}function EI(){}EI.resetWarningCache=xI;var jH=function(){function n(d,h,p,b,k,g){if(g!==NH){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}n.isRequired=n;function r(){return n}var l={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:r,element:n,elementType:n,instanceOf:r,node:n,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:EI,resetWarningCache:xI};return l.PropTypes=l,l};AI.exports=jH();var PH=AI.exports;const an=Ea(PH);function BH(n){return n&&typeof n=="object"&&"default"in n?n.default:n}var SI=Z,OH=BH(SI);function ZS(n,r,l){return r in n?Object.defineProperty(n,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[r]=l,n}function LH(n,r){n.prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r}var RH=!!(typeof window<"u"&&window.document&&window.document.createElement);function zH(n,r,l){if(typeof n!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof r!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof l<"u"&&typeof l!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function d(h){return h.displayName||h.name||"Component"}return function(p){if(typeof p!="function")throw new Error("Expected WrappedComponent to be a React component.");var b=[],k;function g(){k=n(b.map(function(A){return A.props})),v.canUseDOM?r(k):l&&(k=l(k))}var v=function(A){LH(x,A);function x(){return A.apply(this,arguments)||this}x.peek=function(){return k},x.rewind=function(){if(x.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var M=k;return k=void 0,b=[],M};var _=x.prototype;return _.UNSAFE_componentWillMount=function(){b.push(this),g()},_.componentDidUpdate=function(){g()},_.componentWillUnmount=function(){var M=b.indexOf(this);b.splice(M,1),g()},_.render=function(){return OH.createElement(p,this.props)},x}(SI.PureComponent);return ZS(v,"displayName","SideEffect("+d(p)+")"),ZS(v,"canUseDOM",RH),v}}var FH=zH;const VH=Ea(FH);var UH=typeof Element<"u",HH=typeof Map=="function",$H=typeof Set=="function",WH=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ap(n,r){if(n===r)return!0;if(n&&r&&typeof n=="object"&&typeof r=="object"){if(n.constructor!==r.constructor)return!1;var l,d,h;if(Array.isArray(n)){if(l=n.length,l!=r.length)return!1;for(d=l;d--!==0;)if(!ap(n[d],r[d]))return!1;return!0}var p;if(HH&&n instanceof Map&&r instanceof Map){if(n.size!==r.size)return!1;for(p=n.entries();!(d=p.next()).done;)if(!r.has(d.value[0]))return!1;for(p=n.entries();!(d=p.next()).done;)if(!ap(d.value[1],r.get(d.value[0])))return!1;return!0}if($H&&n instanceof Set&&r instanceof Set){if(n.size!==r.size)return!1;for(p=n.entries();!(d=p.next()).done;)if(!r.has(d.value[0]))return!1;return!0}if(WH&&ArrayBuffer.isView(n)&&ArrayBuffer.isView(r)){if(l=n.length,l!=r.length)return!1;for(d=l;d--!==0;)if(n[d]!==r[d])return!1;return!0}if(n.constructor===RegExp)return n.source===r.source&&n.flags===r.flags;if(n.valueOf!==Object.prototype.valueOf&&typeof n.valueOf=="function"&&typeof r.valueOf=="function")return n.valueOf()===r.valueOf();if(n.toString!==Object.prototype.toString&&typeof n.toString=="function"&&typeof r.toString=="function")return n.toString()===r.toString();if(h=Object.keys(n),l=h.length,l!==Object.keys(r).length)return!1;for(d=l;d--!==0;)if(!Object.prototype.hasOwnProperty.call(r,h[d]))return!1;if(UH&&n instanceof Element)return!1;for(d=l;d--!==0;)if(!((h[d]==="_owner"||h[d]==="__v"||h[d]==="__o")&&n.$$typeof)&&!ap(n[h[d]],r[h[d]]))return!1;return!0}return n!==n&&r!==r}var qH=function(r,l){try{return ap(r,l)}catch(d){if((d.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw d}};const GH=Ea(qH);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var JS=Object.getOwnPropertySymbols,KH=Object.prototype.hasOwnProperty,YH=Object.prototype.propertyIsEnumerable;function QH(n){if(n==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}function ZH(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de",Object.getOwnPropertyNames(n)[0]==="5")return!1;for(var r={},l=0;l<10;l++)r["_"+String.fromCharCode(l)]=l;var d=Object.getOwnPropertyNames(r).map(function(p){return r[p]});if(d.join("")!=="0123456789")return!1;var h={};return"abcdefghijklmnopqrst".split("").forEach(function(p){h[p]=p}),Object.keys(Object.assign({},h)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var JH=ZH()?Object.assign:function(n,r){for(var l,d=QH(n),h,p=1;p<arguments.length;p++){l=Object(arguments[p]);for(var b in l)KH.call(l,b)&&(d[b]=l[b]);if(JS){h=JS(l);for(var k=0;k<h.length;k++)YH.call(l,h[k])&&(d[h[k]]=l[h[k]])}}return d};const XH=Ea(JH);var zl={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},Ke={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(Ke).map(function(n){return Ke[n]});var ln={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},Fp={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_h={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e$=Object.keys(Fp).reduce(function(n,r){return n[Fp[r]]=r,n},{}),t$=[Ke.NOSCRIPT,Ke.SCRIPT,Ke.STYLE],ai="data-react-helmet",n$=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},o$=function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")},r$=function(){function n(r,l){for(var d=0;d<l.length;d++){var h=l[d];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(r,h.key,h)}}return function(r,l,d){return l&&n(r.prototype,l),d&&n(r,d),r}}(),Wo=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(n[d]=l[d])}return n},i$=function(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(n,r):n.__proto__=r)},XS=function(n,r){var l={};for(var d in n)r.indexOf(d)>=0||Object.prototype.hasOwnProperty.call(n,d)&&(l[d]=n[d]);return l},s$=function(n,r){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r&&(typeof r=="object"||typeof r=="function")?r:n},F0=function(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return l===!1?String(r):String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},a$=function(r){var l=wd(r,Ke.TITLE),d=wd(r,_h.TITLE_TEMPLATE);if(d&&l)return d.replace(/%s/g,function(){return Array.isArray(l)?l.join(""):l});var h=wd(r,_h.DEFAULT_TITLE);return l||h||void 0},l$=function(r){return wd(r,_h.ON_CHANGE_CLIENT_STATE)||function(){}},Ik=function(r,l){return l.filter(function(d){return typeof d[r]<"u"}).map(function(d){return d[r]}).reduce(function(d,h){return Wo({},d,h)},{})},c$=function(r,l){return l.filter(function(d){return typeof d[Ke.BASE]<"u"}).map(function(d){return d[Ke.BASE]}).reverse().reduce(function(d,h){if(!d.length)for(var p=Object.keys(h),b=0;b<p.length;b++){var k=p[b],g=k.toLowerCase();if(r.indexOf(g)!==-1&&h[g])return d.concat(h)}return d},[])},Pu=function(r,l,d){var h={};return d.filter(function(p){return Array.isArray(p[r])?!0:(typeof p[r]<"u"&&f$("Helmet: "+r+' should be of type "Array". Instead found type "'+n$(p[r])+'"'),!1)}).map(function(p){return p[r]}).reverse().reduce(function(p,b){var k={};b.filter(function(_){for(var C=void 0,M=Object.keys(_),T=0;T<M.length;T++){var L=M[T],P=L.toLowerCase();l.indexOf(P)!==-1&&!(C===ln.REL&&_[C].toLowerCase()==="canonical")&&!(P===ln.REL&&_[P].toLowerCase()==="stylesheet")&&(C=P),l.indexOf(L)!==-1&&(L===ln.INNER_HTML||L===ln.CSS_TEXT||L===ln.ITEM_PROP)&&(C=L)}if(!C||!_[C])return!1;var j=_[C].toLowerCase();return h[C]||(h[C]={}),k[C]||(k[C]={}),h[C][j]?!1:(k[C][j]=!0,!0)}).reverse().forEach(function(_){return p.push(_)});for(var g=Object.keys(k),v=0;v<g.length;v++){var A=g[v],x=XH({},h[A],k[A]);h[A]=x}return p},[]).reverse()},wd=function(r,l){for(var d=r.length-1;d>=0;d--){var h=r[d];if(h.hasOwnProperty(l))return h[l]}return null},d$=function(r){return{baseTag:c$([ln.HREF,ln.TARGET],r),bodyAttributes:Ik(zl.BODY,r),defer:wd(r,_h.DEFER),encode:wd(r,_h.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Ik(zl.HTML,r),linkTags:Pu(Ke.LINK,[ln.REL,ln.HREF],r),metaTags:Pu(Ke.META,[ln.NAME,ln.CHARSET,ln.HTTPEQUIV,ln.PROPERTY,ln.ITEM_PROP],r),noscriptTags:Pu(Ke.NOSCRIPT,[ln.INNER_HTML],r),onChangeClientState:l$(r),scriptTags:Pu(Ke.SCRIPT,[ln.SRC,ln.INNER_HTML],r),styleTags:Pu(Ke.STYLE,[ln.CSS_TEXT],r),title:a$(r),titleAttributes:Ik(zl.TITLE,r)}},V0=function(){var n=Date.now();return function(r){var l=Date.now();l-n>16?(n=l,r(l)):setTimeout(function(){V0(r)},0)}}(),e5=function(r){return clearTimeout(r)},u$=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||V0:global.requestAnimationFrame||V0,h$=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||e5:global.cancelAnimationFrame||e5,f$=function(r){return console&&typeof console.warn=="function"&&console.warn(r)},Bu=null,p$=function(r){Bu&&h$(Bu),r.defer?Bu=u$(function(){t5(r,function(){Bu=null})}):(t5(r),Bu=null)},t5=function(r,l){var d=r.baseTag,h=r.bodyAttributes,p=r.htmlAttributes,b=r.linkTags,k=r.metaTags,g=r.noscriptTags,v=r.onChangeClientState,A=r.scriptTags,x=r.styleTags,_=r.title,C=r.titleAttributes;U0(Ke.BODY,h),U0(Ke.HTML,p),g$(_,C);var M={baseTag:Gc(Ke.BASE,d),linkTags:Gc(Ke.LINK,b),metaTags:Gc(Ke.META,k),noscriptTags:Gc(Ke.NOSCRIPT,g),scriptTags:Gc(Ke.SCRIPT,A),styleTags:Gc(Ke.STYLE,x)},T={},L={};Object.keys(M).forEach(function(P){var j=M[P],O=j.newTags,R=j.oldTags;O.length&&(T[P]=O),R.length&&(L[P]=M[P].oldTags)}),l&&l(),v(r,T,L)},DI=function(r){return Array.isArray(r)?r.join(""):r},g$=function(r,l){typeof r<"u"&&document.title!==r&&(document.title=DI(r)),U0(Ke.TITLE,l)},U0=function(r,l){var d=document.getElementsByTagName(r)[0];if(d){for(var h=d.getAttribute(ai),p=h?h.split(","):[],b=[].concat(p),k=Object.keys(l),g=0;g<k.length;g++){var v=k[g],A=l[v]||"";d.getAttribute(v)!==A&&d.setAttribute(v,A),p.indexOf(v)===-1&&p.push(v);var x=b.indexOf(v);x!==-1&&b.splice(x,1)}for(var _=b.length-1;_>=0;_--)d.removeAttribute(b[_]);p.length===b.length?d.removeAttribute(ai):d.getAttribute(ai)!==k.join(",")&&d.setAttribute(ai,k.join(","))}},Gc=function(r,l){var d=document.head||document.querySelector(Ke.HEAD),h=d.querySelectorAll(r+"["+ai+"]"),p=Array.prototype.slice.call(h),b=[],k=void 0;return l&&l.length&&l.forEach(function(g){var v=document.createElement(r);for(var A in g)if(g.hasOwnProperty(A))if(A===ln.INNER_HTML)v.innerHTML=g.innerHTML;else if(A===ln.CSS_TEXT)v.styleSheet?v.styleSheet.cssText=g.cssText:v.appendChild(document.createTextNode(g.cssText));else{var x=typeof g[A]>"u"?"":g[A];v.setAttribute(A,x)}v.setAttribute(ai,"true"),p.some(function(_,C){return k=C,v.isEqualNode(_)})?p.splice(k,1):b.push(v)}),p.forEach(function(g){return g.parentNode.removeChild(g)}),b.forEach(function(g){return d.appendChild(g)}),{oldTags:p,newTags:b}},TI=function(r){return Object.keys(r).reduce(function(l,d){var h=typeof r[d]<"u"?d+'="'+r[d]+'"':""+d;return l?l+" "+h:h},"")},m$=function(r,l,d,h){var p=TI(d),b=DI(l);return p?"<"+r+" "+ai+'="true" '+p+">"+F0(b,h)+"</"+r+">":"<"+r+" "+ai+'="true">'+F0(b,h)+"</"+r+">"},b$=function(r,l,d){return l.reduce(function(h,p){var b=Object.keys(p).filter(function(v){return!(v===ln.INNER_HTML||v===ln.CSS_TEXT)}).reduce(function(v,A){var x=typeof p[A]>"u"?A:A+'="'+F0(p[A],d)+'"';return v?v+" "+x:x},""),k=p.innerHTML||p.cssText||"",g=t$.indexOf(r)===-1;return h+"<"+r+" "+ai+'="true" '+b+(g?"/>":">"+k+"</"+r+">")},"")},II=function(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(r).reduce(function(d,h){return d[Fp[h]||h]=r[h],d},l)},k$=function(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(r).reduce(function(d,h){return d[e$[h]||h]=r[h],d},l)},w$=function(r,l,d){var h,p=(h={key:l},h[ai]=!0,h),b=II(d,p);return[cr.createElement(Ke.TITLE,b,l)]},v$=function(r,l){return l.map(function(d,h){var p,b=(p={key:h},p[ai]=!0,p);return Object.keys(d).forEach(function(k){var g=Fp[k]||k;if(g===ln.INNER_HTML||g===ln.CSS_TEXT){var v=d.innerHTML||d.cssText;b.dangerouslySetInnerHTML={__html:v}}else b[g]=d[k]}),cr.createElement(r,b)})},ls=function(r,l,d){switch(r){case Ke.TITLE:return{toComponent:function(){return w$(r,l.title,l.titleAttributes)},toString:function(){return m$(r,l.title,l.titleAttributes,d)}};case zl.BODY:case zl.HTML:return{toComponent:function(){return II(l)},toString:function(){return TI(l)}};default:return{toComponent:function(){return v$(r,l)},toString:function(){return b$(r,l,d)}}}},MI=function(r){var l=r.baseTag,d=r.bodyAttributes,h=r.encode,p=r.htmlAttributes,b=r.linkTags,k=r.metaTags,g=r.noscriptTags,v=r.scriptTags,A=r.styleTags,x=r.title,_=x===void 0?"":x,C=r.titleAttributes;return{base:ls(Ke.BASE,l,h),bodyAttributes:ls(zl.BODY,d,h),htmlAttributes:ls(zl.HTML,p,h),link:ls(Ke.LINK,b,h),meta:ls(Ke.META,k,h),noscript:ls(Ke.NOSCRIPT,g,h),script:ls(Ke.SCRIPT,v,h),style:ls(Ke.STYLE,A,h),title:ls(Ke.TITLE,{title:_,titleAttributes:C},h)}},_$=function(r){var l,d;return d=l=function(h){i$(p,h);function p(){return o$(this,p),s$(this,h.apply(this,arguments))}return p.prototype.shouldComponentUpdate=function(k){return!GH(this.props,k)},p.prototype.mapNestedChildrenToProps=function(k,g){if(!g)return null;switch(k.type){case Ke.SCRIPT:case Ke.NOSCRIPT:return{innerHTML:g};case Ke.STYLE:return{cssText:g}}throw new Error("<"+k.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},p.prototype.flattenArrayTypeChildren=function(k){var g,v=k.child,A=k.arrayTypeChildren,x=k.newChildProps,_=k.nestedChildren;return Wo({},A,(g={},g[v.type]=[].concat(A[v.type]||[],[Wo({},x,this.mapNestedChildrenToProps(v,_))]),g))},p.prototype.mapObjectTypeChildren=function(k){var g,v,A=k.child,x=k.newProps,_=k.newChildProps,C=k.nestedChildren;switch(A.type){case Ke.TITLE:return Wo({},x,(g={},g[A.type]=C,g.titleAttributes=Wo({},_),g));case Ke.BODY:return Wo({},x,{bodyAttributes:Wo({},_)});case Ke.HTML:return Wo({},x,{htmlAttributes:Wo({},_)})}return Wo({},x,(v={},v[A.type]=Wo({},_),v))},p.prototype.mapArrayTypeChildrenToProps=function(k,g){var v=Wo({},g);return Object.keys(k).forEach(function(A){var x;v=Wo({},v,(x={},x[A]=k[A],x))}),v},p.prototype.warnOnInvalidChildren=function(k,g){return!0},p.prototype.mapChildrenToProps=function(k,g){var v=this,A={};return cr.Children.forEach(k,function(x){if(!(!x||!x.props)){var _=x.props,C=_.children,M=XS(_,["children"]),T=k$(M);switch(v.warnOnInvalidChildren(x,C),x.type){case Ke.LINK:case Ke.META:case Ke.NOSCRIPT:case Ke.SCRIPT:case Ke.STYLE:A=v.flattenArrayTypeChildren({child:x,arrayTypeChildren:A,newChildProps:T,nestedChildren:C});break;default:g=v.mapObjectTypeChildren({child:x,newProps:g,newChildProps:T,nestedChildren:C});break}}}),g=this.mapArrayTypeChildrenToProps(A,g),g},p.prototype.render=function(){var k=this.props,g=k.children,v=XS(k,["children"]),A=Wo({},v);return g&&(A=this.mapChildrenToProps(g,A)),cr.createElement(r,A)},r$(p,null,[{key:"canUseDOM",set:function(k){r.canUseDOM=k}}]),p}(cr.Component),l.propTypes={base:an.object,bodyAttributes:an.object,children:an.oneOfType([an.arrayOf(an.node),an.node]),defaultTitle:an.string,defer:an.bool,encodeSpecialCharacters:an.bool,htmlAttributes:an.object,link:an.arrayOf(an.object),meta:an.arrayOf(an.object),noscript:an.arrayOf(an.object),onChangeClientState:an.func,script:an.arrayOf(an.object),style:an.arrayOf(an.object),title:an.string,titleAttributes:an.object,titleTemplate:an.string},l.defaultProps={defer:!0,encodeSpecialCharacters:!0},l.peek=r.peek,l.rewind=function(){var h=r.rewind();return h||(h=MI({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),h},d},y$=function(){return null},C$=VH(d$,p$,MI)(y$),qn=_$(C$);qn.renderStatic=qn.rewind;var NI={exports:{}};(function(n,r){(function(l,d){n.exports=d(Z)})(typeof self<"u"?self:ho,l=>(()=>{var d={7403:(k,g,v)=>{v.d(g,{default:()=>me});var A=v(4087),x=v.n(A);const _=function(ae){return new RegExp(/<[a-z][\s\S]*>/i).test(ae)},C=function(ae,ue){return Math.floor(Math.random()*(ue-ae+1))+ae};var M="TYPE_CHARACTER",T="REMOVE_CHARACTER",L="REMOVE_ALL",P="REMOVE_LAST_VISIBLE_NODE",j="PAUSE_FOR",O="CALL_FUNCTION",R="ADD_HTML_TAG_ELEMENT",W="CHANGE_DELETE_SPEED",Q="CHANGE_DELAY",Y="CHANGE_CURSOR",V="PASTE_STRING",ee="HTML_TAG";function J(ae){return J=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(ue){return typeof ue}:function(ue){return ue&&typeof Symbol=="function"&&ue.constructor===Symbol&&ue!==Symbol.prototype?"symbol":typeof ue},J(ae)}function ne(ae,ue){var ve=Object.keys(ae);if(Object.getOwnPropertySymbols){var xe=Object.getOwnPropertySymbols(ae);ue&&(xe=xe.filter(function(xt){return Object.getOwnPropertyDescriptor(ae,xt).enumerable})),ve.push.apply(ve,xe)}return ve}function fe(ae){for(var ue=1;ue<arguments.length;ue++){var ve=arguments[ue]!=null?arguments[ue]:{};ue%2?ne(Object(ve),!0).forEach(function(xe){we(ae,xe,ve[xe])}):Object.getOwnPropertyDescriptors?Object.defineProperties(ae,Object.getOwnPropertyDescriptors(ve)):ne(Object(ve)).forEach(function(xe){Object.defineProperty(ae,xe,Object.getOwnPropertyDescriptor(ve,xe))})}return ae}function ge(ae){return function(ue){if(Array.isArray(ue))return Be(ue)}(ae)||function(ue){if(typeof Symbol<"u"&&ue[Symbol.iterator]!=null||ue["@@iterator"]!=null)return Array.from(ue)}(ae)||function(ue,ve){if(ue){if(typeof ue=="string")return Be(ue,ve);var xe=Object.prototype.toString.call(ue).slice(8,-1);return xe==="Object"&&ue.constructor&&(xe=ue.constructor.name),xe==="Map"||xe==="Set"?Array.from(ue):xe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(xe)?Be(ue,ve):void 0}}(ae)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Be(ae,ue){(ue==null||ue>ae.length)&&(ue=ae.length);for(var ve=0,xe=new Array(ue);ve<ue;ve++)xe[ve]=ae[ve];return xe}function De(ae,ue){for(var ve=0;ve<ue.length;ve++){var xe=ue[ve];xe.enumerable=xe.enumerable||!1,xe.configurable=!0,"value"in xe&&(xe.writable=!0),Object.defineProperty(ae,Te(xe.key),xe)}}function we(ae,ue,ve){return(ue=Te(ue))in ae?Object.defineProperty(ae,ue,{value:ve,enumerable:!0,configurable:!0,writable:!0}):ae[ue]=ve,ae}function Te(ae){var ue=function(ve,xe){if(J(ve)!=="object"||ve===null)return ve;var xt=ve[Symbol.toPrimitive];if(xt!==void 0){var te=xt.call(ve,"string");if(J(te)!=="object")return te;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(ve)}(ae);return J(ue)==="symbol"?ue:String(ue)}const me=function(){function ae(xe,xt){var te=this;if(function(Ae,je){if(!(Ae instanceof je))throw new TypeError("Cannot call a class as a function")}(this,ae),we(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),we(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),we(this,"setupWrapperElement",function(){te.state.elements.container&&(te.state.elements.wrapper.className=te.options.wrapperClassName,te.state.elements.cursor.className=te.options.cursorClassName,te.state.elements.cursor.innerHTML=te.options.cursor,te.state.elements.container.innerHTML="",te.state.elements.container.appendChild(te.state.elements.wrapper),te.state.elements.container.appendChild(te.state.elements.cursor))}),we(this,"start",function(){return te.state.eventLoopPaused=!1,te.runEventLoop(),te}),we(this,"pause",function(){return te.state.eventLoopPaused=!0,te}),we(this,"stop",function(){return te.state.eventLoop&&((0,A.cancel)(te.state.eventLoop),te.state.eventLoop=null),te}),we(this,"pauseFor",function(Ae){return te.addEventToQueue(j,{ms:Ae}),te}),we(this,"typeOutAllStrings",function(){return typeof te.options.strings=="string"?(te.typeString(te.options.strings).pauseFor(te.options.pauseFor),te):(te.options.strings.forEach(function(Ae){te.typeString(Ae).pauseFor(te.options.pauseFor).deleteAll(te.options.deleteSpeed)}),te)}),we(this,"typeString",function(Ae){var je=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(_(Ae))return te.typeOutHTMLString(Ae,je);if(Ae){var Xe=(te.options||{}).stringSplitter,_t=typeof Xe=="function"?Xe(Ae):Ae.split("");te.typeCharacters(_t,je)}return te}),we(this,"pasteString",function(Ae){var je=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return _(Ae)?te.typeOutHTMLString(Ae,je,!0):(Ae&&te.addEventToQueue(V,{character:Ae,node:je}),te)}),we(this,"typeOutHTMLString",function(Ae){var je=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,Xe=arguments.length>2?arguments[2]:void 0,_t=function(Bo){var Qe=document.createElement("div");return Qe.innerHTML=Bo,Qe.childNodes}(Ae);if(_t.length>0)for(var it=0;it<_t.length;it++){var Et=_t[it],In=Et.innerHTML;Et&&Et.nodeType!==3?(Et.innerHTML="",te.addEventToQueue(R,{node:Et,parentNode:je}),Xe?te.pasteString(In,Et):te.typeString(In,Et)):Et.textContent&&(Xe?te.pasteString(Et.textContent,je):te.typeString(Et.textContent,je))}return te}),we(this,"deleteAll",function(){var Ae=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return te.addEventToQueue(L,{speed:Ae}),te}),we(this,"changeDeleteSpeed",function(Ae){if(!Ae)throw new Error("Must provide new delete speed");return te.addEventToQueue(W,{speed:Ae}),te}),we(this,"changeDelay",function(Ae){if(!Ae)throw new Error("Must provide new delay");return te.addEventToQueue(Q,{delay:Ae}),te}),we(this,"changeCursor",function(Ae){if(!Ae)throw new Error("Must provide new cursor");return te.addEventToQueue(Y,{cursor:Ae}),te}),we(this,"deleteChars",function(Ae){if(!Ae)throw new Error("Must provide amount of characters to delete");for(var je=0;je<Ae;je++)te.addEventToQueue(T);return te}),we(this,"callFunction",function(Ae,je){if(!Ae||typeof Ae!="function")throw new Error("Callback must be a function");return te.addEventToQueue(O,{cb:Ae,thisArg:je}),te}),we(this,"typeCharacters",function(Ae){var je=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ae||!Array.isArray(Ae))throw new Error("Characters must be an array");return Ae.forEach(function(Xe){te.addEventToQueue(M,{character:Xe,node:je})}),te}),we(this,"removeCharacters",function(Ae){if(!Ae||!Array.isArray(Ae))throw new Error("Characters must be an array");return Ae.forEach(function(){te.addEventToQueue(T)}),te}),we(this,"addEventToQueue",function(Ae,je){var Xe=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return te.addEventToStateProperty(Ae,je,Xe,"eventQueue")}),we(this,"addReverseCalledEvent",function(Ae,je){var Xe=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return te.options.loop?te.addEventToStateProperty(Ae,je,Xe,"reverseCalledEvents"):te}),we(this,"addEventToStateProperty",function(Ae,je){var Xe=arguments.length>2&&arguments[2]!==void 0&&arguments[2],_t=arguments.length>3?arguments[3]:void 0,it={eventName:Ae,eventArgs:je||{}};return te.state[_t]=Xe?[it].concat(ge(te.state[_t])):[].concat(ge(te.state[_t]),[it]),te}),we(this,"runEventLoop",function(){te.state.lastFrameTime||(te.state.lastFrameTime=Date.now());var Ae=Date.now(),je=Ae-te.state.lastFrameTime;if(!te.state.eventQueue.length){if(!te.options.loop)return;te.state.eventQueue=ge(te.state.calledEvents),te.state.calledEvents=[],te.options=fe({},te.state.initialOptions)}if(te.state.eventLoop=x()(te.runEventLoop),!te.state.eventLoopPaused){if(te.state.pauseUntil){if(Ae<te.state.pauseUntil)return;te.state.pauseUntil=null}var Xe,_t=ge(te.state.eventQueue),it=_t.shift();if(!(je<=(Xe=it.eventName===P||it.eventName===T?te.options.deleteSpeed==="natural"?C(40,80):te.options.deleteSpeed:te.options.delay==="natural"?C(120,160):te.options.delay))){var Et=it.eventName,In=it.eventArgs;switch(te.logInDevMode({currentEvent:it,state:te.state,delay:Xe}),Et){case V:case M:var Bo=In.character,Qe=In.node,Gn=document.createTextNode(Bo),so=Gn;te.options.onCreateTextNode&&typeof te.options.onCreateTextNode=="function"&&(so=te.options.onCreateTextNode(Bo,Gn)),so&&(Qe?Qe.appendChild(so):te.state.elements.wrapper.appendChild(so)),te.state.visibleNodes=[].concat(ge(te.state.visibleNodes),[{type:"TEXT_NODE",character:Bo,node:so}]);break;case T:_t.unshift({eventName:P,eventArgs:{removingCharacterNode:!0}});break;case j:var Vr=it.eventArgs.ms;te.state.pauseUntil=Date.now()+parseInt(Vr);break;case O:var yt=it.eventArgs,hn=yt.cb,go=yt.thisArg;hn.call(go,{elements:te.state.elements});break;case R:var rn=it.eventArgs,Dt=rn.node,en=rn.parentNode;en?en.appendChild(Dt):te.state.elements.wrapper.appendChild(Dt),te.state.visibleNodes=[].concat(ge(te.state.visibleNodes),[{type:ee,node:Dt,parentNode:en||te.state.elements.wrapper}]);break;case L:var br=te.state.visibleNodes,He=In.speed,lt=[];He&&lt.push({eventName:W,eventArgs:{speed:He,temp:!0}});for(var Ht=0,Kn=br.length;Ht<Kn;Ht++)lt.push({eventName:P,eventArgs:{removingCharacterNode:!1}});He&&lt.push({eventName:W,eventArgs:{speed:te.options.deleteSpeed,temp:!0}}),_t.unshift.apply(_t,lt);break;case P:var Ct=it.eventArgs.removingCharacterNode;if(te.state.visibleNodes.length){var $t=te.state.visibleNodes.pop(),Oo=$t.type,mo=$t.node,Cn=$t.character;te.options.onRemoveNode&&typeof te.options.onRemoveNode=="function"&&te.options.onRemoveNode({node:mo,character:Cn}),mo&&mo.parentNode.removeChild(mo),Oo===ee&&Ct&&_t.unshift({eventName:P,eventArgs:{}})}break;case W:te.options.deleteSpeed=it.eventArgs.speed;break;case Q:te.options.delay=it.eventArgs.delay;break;case Y:te.options.cursor=it.eventArgs.cursor,te.state.elements.cursor.innerHTML=it.eventArgs.cursor}te.options.loop&&(it.eventName===P||it.eventArgs&&it.eventArgs.temp||(te.state.calledEvents=[].concat(ge(te.state.calledEvents),[it]))),te.state.eventQueue=_t,te.state.lastFrameTime=Ae}}}),xe)if(typeof xe=="string"){var Xt=document.querySelector(xe);if(!Xt)throw new Error("Could not find container element");this.state.elements.container=Xt}else this.state.elements.container=xe;xt&&(this.options=fe(fe({},this.options),xt)),this.state.initialOptions=fe({},this.options),this.init()}var ue,ve;return ue=ae,(ve=[{key:"init",value:function(){var xe,xt;this.setupWrapperElement(),this.addEventToQueue(Y,{cursor:this.options.cursor},!0),this.addEventToQueue(L,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(xe=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(xt=document.createElement("style")).appendChild(document.createTextNode(xe)),document.head.appendChild(xt),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(xe){this.options.devMode&&console.log(xe)}}])&&De(ue.prototype,ve),Object.defineProperty(ue,"prototype",{writable:!1}),ae}()},8552:(k,g,v)=>{var A=v(852)(v(5639),"DataView");k.exports=A},1989:(k,g,v)=>{var A=v(1789),x=v(401),_=v(7667),C=v(1327),M=v(1866);function T(L){var P=-1,j=L==null?0:L.length;for(this.clear();++P<j;){var O=L[P];this.set(O[0],O[1])}}T.prototype.clear=A,T.prototype.delete=x,T.prototype.get=_,T.prototype.has=C,T.prototype.set=M,k.exports=T},8407:(k,g,v)=>{var A=v(7040),x=v(4125),_=v(2117),C=v(7518),M=v(4705);function T(L){var P=-1,j=L==null?0:L.length;for(this.clear();++P<j;){var O=L[P];this.set(O[0],O[1])}}T.prototype.clear=A,T.prototype.delete=x,T.prototype.get=_,T.prototype.has=C,T.prototype.set=M,k.exports=T},7071:(k,g,v)=>{var A=v(852)(v(5639),"Map");k.exports=A},3369:(k,g,v)=>{var A=v(4785),x=v(1285),_=v(6e3),C=v(9916),M=v(5265);function T(L){var P=-1,j=L==null?0:L.length;for(this.clear();++P<j;){var O=L[P];this.set(O[0],O[1])}}T.prototype.clear=A,T.prototype.delete=x,T.prototype.get=_,T.prototype.has=C,T.prototype.set=M,k.exports=T},3818:(k,g,v)=>{var A=v(852)(v(5639),"Promise");k.exports=A},8525:(k,g,v)=>{var A=v(852)(v(5639),"Set");k.exports=A},8668:(k,g,v)=>{var A=v(3369),x=v(619),_=v(2385);function C(M){var T=-1,L=M==null?0:M.length;for(this.__data__=new A;++T<L;)this.add(M[T])}C.prototype.add=C.prototype.push=x,C.prototype.has=_,k.exports=C},6384:(k,g,v)=>{var A=v(8407),x=v(7465),_=v(3779),C=v(7599),M=v(4758),T=v(4309);function L(P){var j=this.__data__=new A(P);this.size=j.size}L.prototype.clear=x,L.prototype.delete=_,L.prototype.get=C,L.prototype.has=M,L.prototype.set=T,k.exports=L},2705:(k,g,v)=>{var A=v(5639).Symbol;k.exports=A},1149:(k,g,v)=>{var A=v(5639).Uint8Array;k.exports=A},577:(k,g,v)=>{var A=v(852)(v(5639),"WeakMap");k.exports=A},4963:k=>{k.exports=function(g,v){for(var A=-1,x=g==null?0:g.length,_=0,C=[];++A<x;){var M=g[A];v(M,A,g)&&(C[_++]=M)}return C}},4636:(k,g,v)=>{var A=v(2545),x=v(5694),_=v(1469),C=v(4144),M=v(5776),T=v(6719),L=Object.prototype.hasOwnProperty;k.exports=function(P,j){var O=_(P),R=!O&&x(P),W=!O&&!R&&C(P),Q=!O&&!R&&!W&&T(P),Y=O||R||W||Q,V=Y?A(P.length,String):[],ee=V.length;for(var J in P)!j&&!L.call(P,J)||Y&&(J=="length"||W&&(J=="offset"||J=="parent")||Q&&(J=="buffer"||J=="byteLength"||J=="byteOffset")||M(J,ee))||V.push(J);return V}},2488:k=>{k.exports=function(g,v){for(var A=-1,x=v.length,_=g.length;++A<x;)g[_+A]=v[A];return g}},2908:k=>{k.exports=function(g,v){for(var A=-1,x=g==null?0:g.length;++A<x;)if(v(g[A],A,g))return!0;return!1}},8470:(k,g,v)=>{var A=v(7813);k.exports=function(x,_){for(var C=x.length;C--;)if(A(x[C][0],_))return C;return-1}},8866:(k,g,v)=>{var A=v(2488),x=v(1469);k.exports=function(_,C,M){var T=C(_);return x(_)?T:A(T,M(_))}},4239:(k,g,v)=>{var A=v(2705),x=v(9607),_=v(2333),C=A?A.toStringTag:void 0;k.exports=function(M){return M==null?M===void 0?"[object Undefined]":"[object Null]":C&&C in Object(M)?x(M):_(M)}},9454:(k,g,v)=>{var A=v(4239),x=v(7005);k.exports=function(_){return x(_)&&A(_)=="[object Arguments]"}},939:(k,g,v)=>{var A=v(2492),x=v(7005);k.exports=function _(C,M,T,L,P){return C===M||(C==null||M==null||!x(C)&&!x(M)?C!=C&&M!=M:A(C,M,T,L,_,P))}},2492:(k,g,v)=>{var A=v(6384),x=v(7114),_=v(8351),C=v(6096),M=v(4160),T=v(1469),L=v(4144),P=v(6719),j="[object Arguments]",O="[object Array]",R="[object Object]",W=Object.prototype.hasOwnProperty;k.exports=function(Q,Y,V,ee,J,ne){var fe=T(Q),ge=T(Y),Be=fe?O:M(Q),De=ge?O:M(Y),we=(Be=Be==j?R:Be)==R,Te=(De=De==j?R:De)==R,me=Be==De;if(me&&L(Q)){if(!L(Y))return!1;fe=!0,we=!1}if(me&&!we)return ne||(ne=new A),fe||P(Q)?x(Q,Y,V,ee,J,ne):_(Q,Y,Be,V,ee,J,ne);if(!(1&V)){var ae=we&&W.call(Q,"__wrapped__"),ue=Te&&W.call(Y,"__wrapped__");if(ae||ue){var ve=ae?Q.value():Q,xe=ue?Y.value():Y;return ne||(ne=new A),J(ve,xe,V,ee,ne)}}return!!me&&(ne||(ne=new A),C(Q,Y,V,ee,J,ne))}},8458:(k,g,v)=>{var A=v(3560),x=v(5346),_=v(3218),C=v(346),M=/^\[object .+?Constructor\]$/,T=Function.prototype,L=Object.prototype,P=T.toString,j=L.hasOwnProperty,O=RegExp("^"+P.call(j).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");k.exports=function(R){return!(!_(R)||x(R))&&(A(R)?O:M).test(C(R))}},8749:(k,g,v)=>{var A=v(4239),x=v(1780),_=v(7005),C={};C["[object Float32Array]"]=C["[object Float64Array]"]=C["[object Int8Array]"]=C["[object Int16Array]"]=C["[object Int32Array]"]=C["[object Uint8Array]"]=C["[object Uint8ClampedArray]"]=C["[object Uint16Array]"]=C["[object Uint32Array]"]=!0,C["[object Arguments]"]=C["[object Array]"]=C["[object ArrayBuffer]"]=C["[object Boolean]"]=C["[object DataView]"]=C["[object Date]"]=C["[object Error]"]=C["[object Function]"]=C["[object Map]"]=C["[object Number]"]=C["[object Object]"]=C["[object RegExp]"]=C["[object Set]"]=C["[object String]"]=C["[object WeakMap]"]=!1,k.exports=function(M){return _(M)&&x(M.length)&&!!C[A(M)]}},280:(k,g,v)=>{var A=v(5726),x=v(6916),_=Object.prototype.hasOwnProperty;k.exports=function(C){if(!A(C))return x(C);var M=[];for(var T in Object(C))_.call(C,T)&&T!="constructor"&&M.push(T);return M}},2545:k=>{k.exports=function(g,v){for(var A=-1,x=Array(g);++A<g;)x[A]=v(A);return x}},1717:k=>{k.exports=function(g){return function(v){return g(v)}}},4757:k=>{k.exports=function(g,v){return g.has(v)}},4429:(k,g,v)=>{var A=v(5639)["__core-js_shared__"];k.exports=A},7114:(k,g,v)=>{var A=v(8668),x=v(2908),_=v(4757);k.exports=function(C,M,T,L,P,j){var O=1&T,R=C.length,W=M.length;if(R!=W&&!(O&&W>R))return!1;var Q=j.get(C),Y=j.get(M);if(Q&&Y)return Q==M&&Y==C;var V=-1,ee=!0,J=2&T?new A:void 0;for(j.set(C,M),j.set(M,C);++V<R;){var ne=C[V],fe=M[V];if(L)var ge=O?L(fe,ne,V,M,C,j):L(ne,fe,V,C,M,j);if(ge!==void 0){if(ge)continue;ee=!1;break}if(J){if(!x(M,function(Be,De){if(!_(J,De)&&(ne===Be||P(ne,Be,T,L,j)))return J.push(De)})){ee=!1;break}}else if(ne!==fe&&!P(ne,fe,T,L,j)){ee=!1;break}}return j.delete(C),j.delete(M),ee}},8351:(k,g,v)=>{var A=v(2705),x=v(1149),_=v(7813),C=v(7114),M=v(8776),T=v(1814),L=A?A.prototype:void 0,P=L?L.valueOf:void 0;k.exports=function(j,O,R,W,Q,Y,V){switch(R){case"[object DataView]":if(j.byteLength!=O.byteLength||j.byteOffset!=O.byteOffset)return!1;j=j.buffer,O=O.buffer;case"[object ArrayBuffer]":return!(j.byteLength!=O.byteLength||!Y(new x(j),new x(O)));case"[object Boolean]":case"[object Date]":case"[object Number]":return _(+j,+O);case"[object Error]":return j.name==O.name&&j.message==O.message;case"[object RegExp]":case"[object String]":return j==O+"";case"[object Map]":var ee=M;case"[object Set]":var J=1&W;if(ee||(ee=T),j.size!=O.size&&!J)return!1;var ne=V.get(j);if(ne)return ne==O;W|=2,V.set(j,O);var fe=C(ee(j),ee(O),W,Q,Y,V);return V.delete(j),fe;case"[object Symbol]":if(P)return P.call(j)==P.call(O)}return!1}},6096:(k,g,v)=>{var A=v(8234),x=Object.prototype.hasOwnProperty;k.exports=function(_,C,M,T,L,P){var j=1&M,O=A(_),R=O.length;if(R!=A(C).length&&!j)return!1;for(var W=R;W--;){var Q=O[W];if(!(j?Q in C:x.call(C,Q)))return!1}var Y=P.get(_),V=P.get(C);if(Y&&V)return Y==C&&V==_;var ee=!0;P.set(_,C),P.set(C,_);for(var J=j;++W<R;){var ne=_[Q=O[W]],fe=C[Q];if(T)var ge=j?T(fe,ne,Q,C,_,P):T(ne,fe,Q,_,C,P);if(!(ge===void 0?ne===fe||L(ne,fe,M,T,P):ge)){ee=!1;break}J||(J=Q=="constructor")}if(ee&&!J){var Be=_.constructor,De=C.constructor;Be==De||!("constructor"in _)||!("constructor"in C)||typeof Be=="function"&&Be instanceof Be&&typeof De=="function"&&De instanceof De||(ee=!1)}return P.delete(_),P.delete(C),ee}},1957:(k,g,v)=>{var A=typeof v.g=="object"&&v.g&&v.g.Object===Object&&v.g;k.exports=A},8234:(k,g,v)=>{var A=v(8866),x=v(9551),_=v(3674);k.exports=function(C){return A(C,_,x)}},5050:(k,g,v)=>{var A=v(7019);k.exports=function(x,_){var C=x.__data__;return A(_)?C[typeof _=="string"?"string":"hash"]:C.map}},852:(k,g,v)=>{var A=v(8458),x=v(7801);k.exports=function(_,C){var M=x(_,C);return A(M)?M:void 0}},9607:(k,g,v)=>{var A=v(2705),x=Object.prototype,_=x.hasOwnProperty,C=x.toString,M=A?A.toStringTag:void 0;k.exports=function(T){var L=_.call(T,M),P=T[M];try{T[M]=void 0;var j=!0}catch{}var O=C.call(T);return j&&(L?T[M]=P:delete T[M]),O}},9551:(k,g,v)=>{var A=v(4963),x=v(479),_=Object.prototype.propertyIsEnumerable,C=Object.getOwnPropertySymbols,M=C?function(T){return T==null?[]:(T=Object(T),A(C(T),function(L){return _.call(T,L)}))}:x;k.exports=M},4160:(k,g,v)=>{var A=v(8552),x=v(7071),_=v(3818),C=v(8525),M=v(577),T=v(4239),L=v(346),P="[object Map]",j="[object Promise]",O="[object Set]",R="[object WeakMap]",W="[object DataView]",Q=L(A),Y=L(x),V=L(_),ee=L(C),J=L(M),ne=T;(A&&ne(new A(new ArrayBuffer(1)))!=W||x&&ne(new x)!=P||_&&ne(_.resolve())!=j||C&&ne(new C)!=O||M&&ne(new M)!=R)&&(ne=function(fe){var ge=T(fe),Be=ge=="[object Object]"?fe.constructor:void 0,De=Be?L(Be):"";if(De)switch(De){case Q:return W;case Y:return P;case V:return j;case ee:return O;case J:return R}return ge}),k.exports=ne},7801:k=>{k.exports=function(g,v){return g==null?void 0:g[v]}},1789:(k,g,v)=>{var A=v(4536);k.exports=function(){this.__data__=A?A(null):{},this.size=0}},401:k=>{k.exports=function(g){var v=this.has(g)&&delete this.__data__[g];return this.size-=v?1:0,v}},7667:(k,g,v)=>{var A=v(4536),x=Object.prototype.hasOwnProperty;k.exports=function(_){var C=this.__data__;if(A){var M=C[_];return M==="__lodash_hash_undefined__"?void 0:M}return x.call(C,_)?C[_]:void 0}},1327:(k,g,v)=>{var A=v(4536),x=Object.prototype.hasOwnProperty;k.exports=function(_){var C=this.__data__;return A?C[_]!==void 0:x.call(C,_)}},1866:(k,g,v)=>{var A=v(4536);k.exports=function(x,_){var C=this.__data__;return this.size+=this.has(x)?0:1,C[x]=A&&_===void 0?"__lodash_hash_undefined__":_,this}},5776:k=>{var g=/^(?:0|[1-9]\d*)$/;k.exports=function(v,A){var x=typeof v;return!!(A=A??9007199254740991)&&(x=="number"||x!="symbol"&&g.test(v))&&v>-1&&v%1==0&&v<A}},7019:k=>{k.exports=function(g){var v=typeof g;return v=="string"||v=="number"||v=="symbol"||v=="boolean"?g!=="__proto__":g===null}},5346:(k,g,v)=>{var A,x=v(4429),_=(A=/[^.]+$/.exec(x&&x.keys&&x.keys.IE_PROTO||""))?"Symbol(src)_1."+A:"";k.exports=function(C){return!!_&&_ in C}},5726:k=>{var g=Object.prototype;k.exports=function(v){var A=v&&v.constructor;return v===(typeof A=="function"&&A.prototype||g)}},7040:k=>{k.exports=function(){this.__data__=[],this.size=0}},4125:(k,g,v)=>{var A=v(8470),x=Array.prototype.splice;k.exports=function(_){var C=this.__data__,M=A(C,_);return!(M<0||(M==C.length-1?C.pop():x.call(C,M,1),--this.size,0))}},2117:(k,g,v)=>{var A=v(8470);k.exports=function(x){var _=this.__data__,C=A(_,x);return C<0?void 0:_[C][1]}},7518:(k,g,v)=>{var A=v(8470);k.exports=function(x){return A(this.__data__,x)>-1}},4705:(k,g,v)=>{var A=v(8470);k.exports=function(x,_){var C=this.__data__,M=A(C,x);return M<0?(++this.size,C.push([x,_])):C[M][1]=_,this}},4785:(k,g,v)=>{var A=v(1989),x=v(8407),_=v(7071);k.exports=function(){this.size=0,this.__data__={hash:new A,map:new(_||x),string:new A}}},1285:(k,g,v)=>{var A=v(5050);k.exports=function(x){var _=A(this,x).delete(x);return this.size-=_?1:0,_}},6e3:(k,g,v)=>{var A=v(5050);k.exports=function(x){return A(this,x).get(x)}},9916:(k,g,v)=>{var A=v(5050);k.exports=function(x){return A(this,x).has(x)}},5265:(k,g,v)=>{var A=v(5050);k.exports=function(x,_){var C=A(this,x),M=C.size;return C.set(x,_),this.size+=C.size==M?0:1,this}},8776:k=>{k.exports=function(g){var v=-1,A=Array(g.size);return g.forEach(function(x,_){A[++v]=[_,x]}),A}},4536:(k,g,v)=>{var A=v(852)(Object,"create");k.exports=A},6916:(k,g,v)=>{var A=v(5569)(Object.keys,Object);k.exports=A},1167:(k,g,v)=>{k=v.nmd(k);var A=v(1957),x=g&&!g.nodeType&&g,_=x&&k&&!k.nodeType&&k,C=_&&_.exports===x&&A.process,M=function(){try{return _&&_.require&&_.require("util").types||C&&C.binding&&C.binding("util")}catch{}}();k.exports=M},2333:k=>{var g=Object.prototype.toString;k.exports=function(v){return g.call(v)}},5569:k=>{k.exports=function(g,v){return function(A){return g(v(A))}}},5639:(k,g,v)=>{var A=v(1957),x=typeof self=="object"&&self&&self.Object===Object&&self,_=A||x||Function("return this")();k.exports=_},619:k=>{k.exports=function(g){return this.__data__.set(g,"__lodash_hash_undefined__"),this}},2385:k=>{k.exports=function(g){return this.__data__.has(g)}},1814:k=>{k.exports=function(g){var v=-1,A=Array(g.size);return g.forEach(function(x){A[++v]=x}),A}},7465:(k,g,v)=>{var A=v(8407);k.exports=function(){this.__data__=new A,this.size=0}},3779:k=>{k.exports=function(g){var v=this.__data__,A=v.delete(g);return this.size=v.size,A}},7599:k=>{k.exports=function(g){return this.__data__.get(g)}},4758:k=>{k.exports=function(g){return this.__data__.has(g)}},4309:(k,g,v)=>{var A=v(8407),x=v(7071),_=v(3369);k.exports=function(C,M){var T=this.__data__;if(T instanceof A){var L=T.__data__;if(!x||L.length<199)return L.push([C,M]),this.size=++T.size,this;T=this.__data__=new _(L)}return T.set(C,M),this.size=T.size,this}},346:k=>{var g=Function.prototype.toString;k.exports=function(v){if(v!=null){try{return g.call(v)}catch{}try{return v+""}catch{}}return""}},7813:k=>{k.exports=function(g,v){return g===v||g!=g&&v!=v}},5694:(k,g,v)=>{var A=v(9454),x=v(7005),_=Object.prototype,C=_.hasOwnProperty,M=_.propertyIsEnumerable,T=A(function(){return arguments}())?A:function(L){return x(L)&&C.call(L,"callee")&&!M.call(L,"callee")};k.exports=T},1469:k=>{var g=Array.isArray;k.exports=g},8612:(k,g,v)=>{var A=v(3560),x=v(1780);k.exports=function(_){return _!=null&&x(_.length)&&!A(_)}},4144:(k,g,v)=>{k=v.nmd(k);var A=v(5639),x=v(5062),_=g&&!g.nodeType&&g,C=_&&k&&!k.nodeType&&k,M=C&&C.exports===_?A.Buffer:void 0,T=(M?M.isBuffer:void 0)||x;k.exports=T},8446:(k,g,v)=>{var A=v(939);k.exports=function(x,_){return A(x,_)}},3560:(k,g,v)=>{var A=v(4239),x=v(3218);k.exports=function(_){if(!x(_))return!1;var C=A(_);return C=="[object Function]"||C=="[object GeneratorFunction]"||C=="[object AsyncFunction]"||C=="[object Proxy]"}},1780:k=>{k.exports=function(g){return typeof g=="number"&&g>-1&&g%1==0&&g<=9007199254740991}},3218:k=>{k.exports=function(g){var v=typeof g;return g!=null&&(v=="object"||v=="function")}},7005:k=>{k.exports=function(g){return g!=null&&typeof g=="object"}},6719:(k,g,v)=>{var A=v(8749),x=v(1717),_=v(1167),C=_&&_.isTypedArray,M=C?x(C):A;k.exports=M},3674:(k,g,v)=>{var A=v(4636),x=v(280),_=v(8612);k.exports=function(C){return _(C)?A(C):x(C)}},479:k=>{k.exports=function(){return[]}},5062:k=>{k.exports=function(){return!1}},75:function(k){(function(){var g,v,A,x,_,C;typeof performance<"u"&&performance!==null&&performance.now?k.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(k.exports=function(){return(g()-_)/1e6},v=process.hrtime,x=(g=function(){var M;return 1e9*(M=v())[0]+M[1]})(),C=1e9*process.uptime(),_=x-C):Date.now?(k.exports=function(){return Date.now()-A},A=Date.now()):(k.exports=function(){return new Date().getTime()-A},A=new Date().getTime())}).call(this)},4087:(k,g,v)=>{for(var A=v(75),x=typeof window>"u"?v.g:window,_=["moz","webkit"],C="AnimationFrame",M=x["request"+C],T=x["cancel"+C]||x["cancelRequest"+C],L=0;!M&&L<_.length;L++)M=x[_[L]+"Request"+C],T=x[_[L]+"Cancel"+C]||x[_[L]+"CancelRequest"+C];if(!M||!T){var P=0,j=0,O=[];M=function(R){if(O.length===0){var W=A(),Q=Math.max(0,16.666666666666668-(W-P));P=Q+W,setTimeout(function(){var Y=O.slice(0);O.length=0;for(var V=0;V<Y.length;V++)if(!Y[V].cancelled)try{Y[V].callback(P)}catch(ee){setTimeout(function(){throw ee},0)}},Math.round(Q))}return O.push({handle:++j,callback:R,cancelled:!1}),j},T=function(R){for(var W=0;W<O.length;W++)O[W].handle===R&&(O[W].cancelled=!0)}}k.exports=function(R){return M.call(x,R)},k.exports.cancel=function(){T.apply(x,arguments)},k.exports.polyfill=function(R){R||(R=x),R.requestAnimationFrame=M,R.cancelAnimationFrame=T}},8156:k=>{k.exports=l}},h={};function p(k){var g=h[k];if(g!==void 0)return g.exports;var v=h[k]={id:k,loaded:!1,exports:{}};return d[k].call(v.exports,v,v.exports,p),v.loaded=!0,v.exports}p.n=k=>{var g=k&&k.__esModule?()=>k.default:()=>k;return p.d(g,{a:g}),g},p.d=(k,g)=>{for(var v in g)p.o(g,v)&&!p.o(k,v)&&Object.defineProperty(k,v,{enumerable:!0,get:g[v]})},p.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),p.o=(k,g)=>Object.prototype.hasOwnProperty.call(k,g),p.nmd=k=>(k.paths=[],k.children||(k.children=[]),k);var b={};return(()=>{p.d(b,{default:()=>O});var k=p(8156),g=p.n(k),v=p(7403),A=p(8446),x=p.n(A);function _(R){return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(W){return typeof W}:function(W){return W&&typeof Symbol=="function"&&W.constructor===Symbol&&W!==Symbol.prototype?"symbol":typeof W},_(R)}function C(R,W){for(var Q=0;Q<W.length;Q++){var Y=W[Q];Y.enumerable=Y.enumerable||!1,Y.configurable=!0,"value"in Y&&(Y.writable=!0),Object.defineProperty(R,P(Y.key),Y)}}function M(R,W){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(Q,Y){return Q.__proto__=Y,Q},M(R,W)}function T(R){if(R===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return R}function L(R){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(W){return W.__proto__||Object.getPrototypeOf(W)},L(R)}function P(R){var W=function(Q,Y){if(_(Q)!=="object"||Q===null)return Q;var V=Q[Symbol.toPrimitive];if(V!==void 0){var ee=V.call(Q,"string");if(_(ee)!=="object")return ee;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(Q)}(R);return _(W)==="symbol"?W:String(W)}var j=function(R){(function(ne,fe){if(typeof fe!="function"&&fe!==null)throw new TypeError("Super expression must either be null or a function");ne.prototype=Object.create(fe&&fe.prototype,{constructor:{value:ne,writable:!0,configurable:!0}}),Object.defineProperty(ne,"prototype",{writable:!1}),fe&&M(ne,fe)})(J,R);var W,Q,Y,V,ee=(Y=J,V=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var ne,fe=L(Y);if(V){var ge=L(this).constructor;ne=Reflect.construct(fe,arguments,ge)}else ne=fe.apply(this,arguments);return function(Be,De){if(De&&(_(De)==="object"||typeof De=="function"))return De;if(De!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return T(Be)}(this,ne)});function J(){var ne,fe,ge,Be;(function(me,ae){if(!(me instanceof ae))throw new TypeError("Cannot call a class as a function")})(this,J);for(var De=arguments.length,we=new Array(De),Te=0;Te<De;Te++)we[Te]=arguments[Te];return fe=T(ne=ee.call.apply(ee,[this].concat(we))),Be={instance:null},(ge=P(ge="state"))in fe?Object.defineProperty(fe,ge,{value:Be,enumerable:!0,configurable:!0,writable:!0}):fe[ge]=Be,ne}return W=J,(Q=[{key:"componentDidMount",value:function(){var ne=this,fe=new v.default(this.typewriter,this.props.options);this.setState({instance:fe},function(){var ge=ne.props.onInit;ge&&ge(fe)})}},{key:"componentDidUpdate",value:function(ne){x()(this.props.options,ne.options)||this.setState({instance:new v.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var ne=this,fe=this.props.component;return g().createElement(fe,{ref:function(ge){return ne.typewriter=ge},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&C(W.prototype,Q),Object.defineProperty(W,"prototype",{writable:!1}),J}(k.Component);j.defaultProps={component:"div"};const O=j})(),b.default})())})(NI);var A$=NI.exports;const x$=Ea(A$),E$="_containerInitial1_o0r63_7",S$="_containerContent1_o0r63_23",D$="_tecnologyAndDesignContainer_o0r63_47",T$="_containerImg1_o0r63_93",I$="_containerInitial2_o0r63_117",M$="_containerContent2_o0r63_147",N$="_containerOfAdvantagesItem_o0r63_169",j$="_containerInitial3_o0r63_237",P$="_containerContent3_o0r63_255",B$="_containerImg2_o0r63_297",O$="_containerInitial4_o0r63_321",L$="_containerContent4_o0r63_339",R$="_containerImg3_o0r63_357",z$="_AdvantagesItemTitle_o0r63_601",Hn={containerInitial1:E$,containerContent1:S$,tecnologyAndDesignContainer:D$,containerImg1:T$,containerInitial2:I$,containerContent2:M$,containerOfAdvantagesItem:N$,containerInitial3:j$,containerContent3:P$,containerImg2:B$,containerInitial4:O$,containerContent4:L$,containerImg3:R$,AdvantagesItemTitle:z$};function n5(){return D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Inicio ... "})]}),D.jsxs(fi,{children:[D.jsxs("section",{className:Hn.containerInitial1,children:[D.jsxs("aside",{className:Hn.containerContent1,children:[D.jsx("h1",{children:D.jsx(x$,{options:{strings:["Sistemas personalizados para tu exito empresarial ...","Software y soluciones digitales adaptadas a tu necesidades ...","Diseño a la altura de tus expectativas ...","Convierte tus ideas en software de calidad ...","Software que se ajusta a tus Requisitos ..."],autoStart:!0,loop:!0,delay:25}})}),D.jsxs("div",{className:Hn.tecnologyAndDesignContainer,children:[D.jsx("b",{children:" Desarrollo web "}),D.jsx("b",{children:" Diseño "})]})]}),D.jsx("aside",{className:Hn.containerImg1,children:D.jsx("img",{src:"https://i.pinimg.com/originals/3f/4c/b0/3f4cb0a7ad7ddc1ffebe3c244595ca67.png",alt:"img"})})]}),D.jsxs("section",{className:Hn.containerInitial2,children:[D.jsxs("h1",{children:["¿Porque elegir nuestra ",D.jsx("br",{}),"agencia?"]}),D.jsxs("div",{className:Hn.containerContent2,children:[D.jsx("h2",{children:" Ventajas de la plataforma"}),D.jsxs("div",{className:Hn.containerOfAdvantages,children:[D.jsxs("article",{className:Hn.containerOfAdvantagesItem,children:[D.jsx("h1",{children:" 01 "}),D.jsxs("div",{children:[D.jsx("h3",{className:Hn.AdvantagesItemTitle,children:"Agil desarrollo"}),D.jsx("p",{children:"Los productos digitales se trabajan con metodologiias agiles por lo tanto podemos garantizar un desarrollo fluido y eficiente"})]})]}),D.jsxs("article",{className:Hn.containerOfAdvantagesItem,children:[D.jsx("h1",{children:" 02 "}),D.jsxs("div",{children:[D.jsx("h3",{className:Hn.AdvantagesItemTitle,children:"Diseños atractivos"}),D.jsx("p",{children:"En nuestra agencia de desarrollo de productos de IMPACT X desarrollamos interfaces de usuario funcionales y atractivas."})]})]}),D.jsxs("article",{className:Hn.containerOfAdvantagesItem,children:[D.jsx("h1",{children:" 03 "}),D.jsxs("div",{children:[D.jsx("h3",{className:Hn.AdvantagesItemTitle,children:" Optimizacion "}),D.jsx("p",{children:"Optimizamos continuamente nuestros procesos para ofrecer productos de gran calidad mientras reducimos los costos y tiempos de desarrollo"})]})]})]})]})]}),D.jsxs("section",{className:Hn.containerInitial3,children:[D.jsxs("aside",{className:Hn.containerContent3,children:[D.jsx("h1",{children:"Construimos mas que solo aplicaciones"}),D.jsx("p",{children:"IMPACT X es una agencia de diseño, desarrollo y mantenimiento de productos digitales. cuenta con expertos de mas de 5 años de experiencia que utilizan de forma eficiente y eficaz las herramientas de punta en el desarrollo y diseño para la creacion de proyectos desde cero."})]}),D.jsx("aside",{className:Hn.containerImg2,children:D.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/1995/1995515.png",alt:"img"})})]}),D.jsx("section",{className:Hn.containerInitial4,children:D.jsxs("aside",{className:Hn.containerContent4,children:[D.jsx("div",{className:Hn.containerImg3,children:D.jsx("img",{src:"https://femcet.com/wp-content/uploads/2021/05/atencion-al-cliente-jpg-800.jpg",alt:"img"})}),D.jsxs("div",{children:[D.jsx("h1",{children:" ¿Tienes dudas?"}),D.jsx("p",{children:"Solicita una demostración con nuestro equipo, totalmente gratis y sin compromiso."}),D.jsx("button",{type:"button",children:" Solicitar demostracion "})]})]})})]})]})}const F$="_containerContent_1317g_5",V$="_containerInputs_1317g_57",U$="_containerButton_1317g_117",H$="_containerImg_1317g_157",$$="_containerContact_1317g_171",Ou={containerContent:F$,containerInputs:V$,containerButton:U$,containerImg:H$,containerContact:$$};function W$(){const n=r=>{r.preventDefault(),ze.showLoading(),setTimeout(()=>{ze.fire("Proceso completado","El correo ha sido enviado satisfactoriamente. Pronto, recibirá una respuesta por parte del equipo.","success")},3e3)};return D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Contacto ... "})]}),D.jsx(fi,{children:D.jsxs("section",{className:Ou.containerContact,children:[D.jsxs("aside",{className:Ou.containerContent,children:[D.jsx("h1",{children:"Quieres hacer un proyecto?"}),D.jsx("p",{children:"Solo cuéntanos que tienes en mente, cuáles son tus objetivos y comencemos"}),D.jsxs("form",{onSubmit:n,className:Ou.containerInputs,children:[D.jsx("label",{htmlFor:"first_name",children:" Nombre y apellido "}),D.jsx("input",{type:"text",id:"first_name",name:"first_name",required:!0}),D.jsx("label",{htmlFor:"last_name",children:" Correo "}),D.jsx("input",{type:"email",id:"email",name:"email",required:!0}),D.jsx("label",{htmlFor:"content",children:" Mensaje "}),D.jsx("textarea",{name:"content",id:"content",cols:"30",rows:"3",required:!0}),D.jsx("div",{className:Ou.containerButton,children:D.jsx("button",{type:"submit",children:" Enviar "})})]})]}),D.jsx("aside",{className:Ou.containerImg,children:D.jsx("img",{src:"https://cdn.icon-icons.com/icons2/1603/PNG/512/message-mail-envelope-email-personal-user_108507.png",alt:"img"})})]})})]})}function o5(n){return hi({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#00A344",d:"M24,13c-7.2,0-13,5.8-13,13s5.8,13,13,13s13-5.8,13-13S31.2,13,24,13z M24,35c-5,0-9-4-9-9s4-9,9-9s9,4,9,9 S29,35,24,35z"}},{tag:"path",attr:{fill:"#00C853",d:"M8.5,25.4c4-2.2,9-1.1,11.5,2.5c0.1,0.1,0.2,0.1,0.3,0.1l1.2-0.7c0.1-0.1,0.2-0.2,0.1-0.3 c0-0.2-0.1-0.4-0.1-0.6c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2l0,0 c0-0.1,0-0.1,0.1-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0.1-0.2c0,0,0,0,0,0c0,0,0-0.1,0.1-0.1c0,0,0-0.1,0.1-0.1c0,0,0-0.1,0.1-0.1 c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1 c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0.1,0c0.2-0.1,0.4-0.2,0.5-0.2c0.1,0,0.2-0.1,0.2-0.3v-1.3c0-0.1-0.1-0.2-0.2-0.2 c-4.5-0.4-8-4.1-8-8.6c0-4.1,3-7.6,6.9-8.4c0.1,0,0.2-0.1,0.2-0.3V4.8c0-0.1-0.1-0.2-0.2-0.2C16.4,5.5,12,10.4,12,16.3 c0,1.3,0.2,2.6,0.6,3.8c-1.2,0.2-2.5,0.7-3.6,1.3c-5.2,3-7.3,9.2-5.2,14.5C3.9,36,4,36,4.1,36l0.3-0.2c0.1-0.1,0.2-0.2,0.1-0.3 C3.3,31.7,4.8,27.4,8.5,25.4L8.5,25.4z M39,21.4c-1.2-0.7-2.4-1.1-3.6-1.3c0.4-1.2,0.6-2.4,0.6-3.8c0-5.9-4.4-10.8-10.2-11.7 c-0.1,0-0.2,0.1-0.2,0.2v0.4c0,0.1,0.1,0.2,0.2,0.3c4,0.8,6.9,4.3,6.9,8.4c0,4.5-3.5,8.2-8,8.6c-0.1,0-0.2,0.1-0.2,0.2v1.3 c0,0.1,0.1,0.2,0.2,0.3c0.2,0.1,0.4,0.1,0.6,0.2c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0c0.1,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0 c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1 c0,0,0,0.1,0.1,0.1c0,0,0,0,0,0c0,0.1,0,0.1,0.1,0.2c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1 c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0.2,0,0.4-0.1,0.6c0,0.1,0,0.2,0.1,0.3l1.2,0.7c0.1,0.1,0.2,0,0.3-0.1c2.6-3.6,7.6-4.8,11.5-2.5 c3.6,2.1,5.2,6.3,3.9,10.1c0,0.1,0,0.2,0.1,0.3l0.3,0.2c0.1,0.1,0.2,0,0.3-0.1C46.3,30.5,44.2,24.3,39,21.4L39,21.4z M30.8,40.3 c-4-2.2-5.5-7.1-3.5-11.1c0.1-0.1,0-0.2-0.1-0.3L26,28.2c-0.1-0.1-0.2,0-0.3,0c-0.2,0.1-0.3,0.3-0.5,0.3c0,0,0,0,0,0 c-0.1,0-0.1,0.1-0.2,0.1c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0.1c0,0,0,0,0,0c-0.1,0-0.3,0.1-0.4,0.1c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0 c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0 c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0c-0.1,0-0.1,0-0.2-0.1c0,0,0,0,0,0c0,0-0.1,0-0.1-0.1c0,0,0,0-0.1,0c-0.2-0.1-0.3-0.2-0.5-0.3 c-0.1-0.1-0.2-0.1-0.3,0l-1.2,0.7c-0.1,0.1-0.1,0.2-0.1,0.3c1.9,4,0.4,8.8-3.5,11.1c-3.6,2.1-8.2,1.3-10.9-1.7 c-0.1-0.1-0.2-0.1-0.3-0.1l-0.3,0.2c-0.1,0.1-0.1,0.2-0.1,0.3c3.6,4.5,10.2,5.8,15.4,2.8c1.2-0.7,2.2-1.5,3-2.4 c0.8,0.9,1.8,1.8,3,2.4c5.2,3,11.7,1.6,15.4-2.8c0.1-0.1,0-0.2-0.1-0.3L42,38.5c-0.1-0.1-0.2,0-0.3,0.1C39,41.5,34.4,42.3,30.8,40.3 L30.8,40.3z"}}]})(n)}function q$(n){return hi({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFB74D",d:"M10,12c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,12,10,12z"}},{tag:"path",attr:{fill:"#607D8B",d:"M2,22v8l3,2l1,14h8l1-14l3-2v-8c0-4.4-3.6-8-8-8h0C5.6,14,2,17.6,2,22z"}},{tag:"g",attr:{fill:"#263238"},child:[{tag:"path",attr:{d:"M22.4,40.4c-0.6,2.5-1,3.6-2.4,3.6c-0.6,0-1.2-0.5-1.9-1.1c-1-0.8-2.2-1.9-4.1-1.9v2c1.1,0,1.9,0.7,2.8,1.4 c0.9,0.7,1.9,1.6,3.2,1.6c3.1,0,3.8-2.9,4.4-5.2C25,38.2,25.4,37,27,37v-2C23.7,35,22.9,38.1,22.4,40.4z"}},{tag:"polygon",attr:{points:"14.4,40 10,40 10,44 14.1,44"}}]},{tag:"circle",attr:{fill:"#4CAF50",cx:"36",cy:"36",r:"10"}},{tag:"path",attr:{fill:"#fff",d:"M35,34c0.1,0.2,0.1,0.3,0.3,0.4c0.1,0.1,0.3,0.2,0.5,0.4c0.2,0.1,0.5,0.2,0.8,0.3c0.5,0.2,0.9,0.4,1.3,0.6 c0.4,0.2,0.7,0.4,1,0.7c0.3,0.3,0.5,0.6,0.7,0.9c0.2,0.4,0.2,0.8,0.2,1.3c0,0.4-0.1,0.8-0.2,1.2c-0.1,0.4-0.3,0.7-0.6,0.9 c-0.3,0.3-0.6,0.5-0.9,0.6c-0.4,0.2-0.8,0.3-1.2,0.3v1.5h-1.2v-1.5c-0.4,0-0.8-0.1-1.2-0.3c-0.4-0.2-0.7-0.4-1-0.6 c-0.3-0.3-0.5-0.6-0.7-1.1c-0.2-0.4-0.3-0.9-0.3-1.5h2.2c0,0.4,0,0.7,0.1,0.9c0.1,0.2,0.2,0.4,0.4,0.6c0.2,0.1,0.3,0.2,0.5,0.3 c0.2,0.1,0.4,0.1,0.6,0.1c0.2,0,0.4,0,0.6-0.1c0.2-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.2,0.1-0.3,0.1-0.5 c0-0.2,0-0.4-0.1-0.6c-0.1-0.2-0.1-0.3-0.3-0.4c-0.1-0.1-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.2-0.7-0.3c-0.5-0.2-0.9-0.4-1.3-0.6 c-0.4-0.2-0.7-0.4-1-0.7c-0.3-0.3-0.5-0.6-0.7-0.9c-0.2-0.4-0.2-0.8-0.2-1.3c0-0.4,0.1-0.8,0.2-1.2c0.1-0.3,0.3-0.7,0.6-0.9 c0.3-0.3,0.6-0.5,0.9-0.6c0.4-0.2,0.8-0.3,1.2-0.3v-1.6h1.2v1.6c0.4,0.1,0.8,0.2,1.2,0.4c0.4,0.2,0.6,0.4,0.9,0.7 c0.2,0.3,0.4,0.6,0.6,1c0.1,0.4,0.2,0.9,0.2,1.4h-2.2c0-0.6-0.1-1-0.4-1.3c-0.2-0.3-0.6-0.4-1-0.4c-0.2,0-0.4,0-0.6,0.1 c-0.2,0.1-0.3,0.2-0.4,0.3C35.1,32.7,35,32.8,35,33s-0.1,0.3-0.1,0.5C34.9,33.7,34.9,33.9,35,34z"}}]})(n)}function Dl(n){return hi({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"}},{tag:"path",attr:{d:"M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"}}]})(n)}function G$(n){return hi({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3.102 20.898c.698.699 1.696 1.068 2.887 1.068 1.742 0 3.855-.778 6.012-2.127 2.156 1.35 4.27 2.127 6.012 2.127 1.19 0 2.188-.369 2.887-1.068 1.269-1.269 1.411-3.413.401-6.039-.358-.932-.854-1.895-1.457-2.859a16.792 16.792 0 0 0 1.457-2.859c1.01-2.626.867-4.771-.401-6.039-.698-.699-1.696-1.068-2.887-1.068-1.742 0-3.855.778-6.012 2.127-2.156-1.35-4.27-2.127-6.012-2.127-1.19 0-2.188.369-2.887 1.068C1.833 4.371 1.69 6.515 2.7 9.141c.359.932.854 1.895 1.457 2.859A16.792 16.792 0 0 0 2.7 14.859c-1.01 2.626-.867 4.77.402 6.039zm16.331-5.321c.689 1.79.708 3.251.052 3.907-.32.32-.815.482-1.473.482-1.167 0-2.646-.503-4.208-1.38a26.611 26.611 0 0 0 4.783-4.784c.336.601.623 1.196.846 1.775zM12 17.417a23.568 23.568 0 0 1-2.934-2.483A23.998 23.998 0 0 1 6.566 12 23.74 23.74 0 0 1 12 6.583a23.568 23.568 0 0 1 2.934 2.483 23.998 23.998 0 0 1 2.5 2.934A23.74 23.74 0 0 1 12 17.417zm6.012-13.383c.657 0 1.152.162 1.473.482.656.656.638 2.117-.052 3.907-.223.579-.51 1.174-.846 1.775a26.448 26.448 0 0 0-4.783-4.784c1.562-.876 3.041-1.38 4.208-1.38zM4.567 8.423c-.689-1.79-.708-3.251-.052-3.907.32-.32.815-.482 1.473-.482 1.167 0 2.646.503 4.208 1.38a26.448 26.448 0 0 0-4.783 4.784 13.934 13.934 0 0 1-.846-1.775zm0 7.154c.223-.579.51-1.174.846-1.775a26.448 26.448 0 0 0 4.783 4.784c-1.563.877-3.041 1.38-4.208 1.38-.657 0-1.152-.162-1.473-.482-.656-.656-.637-2.117.052-3.907z"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"2.574"}}]})(n)}function K$(n){return hi({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9 9h6v2H9zm0 4h6v2H9z"}},{tag:"path",attr:{d:"m18 5.414 1.707-1.707-1.414-1.414-1.563 1.562C15.483 2.708 13.824 2 12 2s-3.483.708-4.73 1.855L5.707 2.293 4.293 3.707 6 5.414A6.937 6.937 0 0 0 5 9H3v2h2v2H3v2h2c0 3.86 3.141 7 7 7s7-3.14 7-7h2v-2h-2v-2h2V9h-2a6.937 6.937 0 0 0-1-3.586zM17 13v2c0 2.757-2.243 5-5 5s-5-2.243-5-5V9c0-2.757 2.243-5 5-5s5 2.243 5 5v4z"}}]})(n)}function Y$(n){return hi({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.219 3.375 8 7.399 4.781 3.375A1.002 1.002 0 0 0 3 4v15c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4a1.002 1.002 0 0 0-1.781-.625L16 7.399l-3.219-4.024c-.381-.474-1.181-.474-1.562 0zM5 19v-2h14.001v2H5zm10.219-9.375c.381.475 1.182.475 1.563 0L19 6.851 19.001 15H5V6.851l2.219 2.774c.381.475 1.182.475 1.563 0L12 5.601l3.219 4.024z"}}]})(n)}const Q$="_containerAbout1_12y0h_7",Z$="_text_12y0h_45",J$="_iconContainer_12y0h_57",X$="_icon_12y0h_57",eW="_containerAbout2_12y0h_85",tW="_manager_12y0h_97",nW="_iconManager_12y0h_109",oW="_photoManager_12y0h_127",rW="_containerAbout3_12y0h_149",iW="_description_12y0h_167",sW="_containerImagesLaptops_12y0h_183",aW="_containerAbout4_12y0h_227",lW="_title_12y0h_247",cW="_containerImageTeam_12y0h_285",dW="_containerTitleAndText_12y0h_319",uW="_containerContentAbout4_12y0h_475",En={containerAbout1:Q$,text:Z$,iconContainer:J$,icon:X$,containerAbout2:eW,manager:tW,iconManager:nW,photoManager:oW,containerAbout3:rW,description:iW,containerImagesLaptops:sW,containerAbout4:aW,title:lW,containerImageTeam:cW,containerTitleAndText:dW,containerContentAbout4:uW};function hW(){return D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Sobre nosotros ... "})]}),D.jsxs(fi,{children:[D.jsxs("section",{className:En.containerAbout1,children:[D.jsxs("aside",{className:En.containerTitleAndText,children:[D.jsx("h1",{className:En.title,children:"SOBRE NOSOTROS"}),D.jsx("p",{className:En.text,children:"Los productos digitales se han convertido en una parte fundamental de nuestro mundo actual, y su desarrollo ha evolucionado significativamente en los últimos años. Para afrontar los desafíos de este entorno dinámico y competitivo, es esencial adoptar metodologías ágiles."})]}),D.jsxs("div",{className:En.iconContainer,children:[D.jsx("h4",{className:En.icon,children:D.jsx(o5,{})}),D.jsx("h4",{className:En.icon,children:D.jsx(q$,{})}),D.jsx("h4",{className:En.icon,children:D.jsx(o5,{})})]})]}),D.jsxs("section",{className:En.containerAbout2,children:[D.jsxs("aside",{className:En.manager,children:[D.jsx("h1",{children:" GERENTE "}),D.jsx("h4",{className:En.iconManager,children:D.jsx(Y$,{})})]}),D.jsx("aside",{className:En.photoManager,children:D.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/1995/1995446.png",alt:"img"})})]}),D.jsxs("section",{className:En.containerAbout3,children:[D.jsx("p",{className:En.description,children:"Nuestro equipo altamente capacitado en diseño y desarrollo en JavaScript está comprometido en ofrecer soluciones digitales excepcionales para empresas y startups innovadoras en todo el mundo. Más allá de nuestra sede central en Colombia, en el distrito de Bogotá, tenemos una presencia global que nos permite brindar servicios personalizados y de calidad a clientes en diversos continentes"}),D.jsxs("div",{className:En.containerImagesLaptops,children:[D.jsx("img",{src:"https://img.freepik.com/fotos-premium/experiencia-programacion-persona-que-trabaja-codigos-computadora_23-2150010151.jpg",alt:"Imagen de desarrollador programando en una computadora"}),D.jsx("img",{src:"https://hireline.io/blog/wp-content/uploads/2019/12/Aprender-a-programar-Java.jpg",alt:"Imagen de un teclado y código Java"})]})]}),D.jsxs("section",{className:En.containerAbout4,children:[D.jsxs("div",{className:En.containerContentAbout4,children:[D.jsx("h1",{className:En.title,children:"NUESTROS ENFOQUES"}),D.jsx("p",{className:En.paragraph,children:"- Creemos firmemente que emprender el desarrollo de un producto sin una investigación exhaustiva del negocio y la audiencia objetivo es como disparar al azar en la oscuridad mientras cruzamos los dedos. Nuestro competente equipo utiliza un enfoque metódico para crear experiencias digitales que conducen paso a paso a los negocios hacia resultados exitosos."}),D.jsx("p",{className:En.paragraph,children:"- Pensamos que la usabilidad del producto es como el amor. Debes preocuparte, escuchar y tienes que estar dispuesto a cambiar y arreglar tus infelicidades. Por lo tanto, prestamos especial atención a las pruebas de los usuarios y nuestro objetivo es ofrecer mejores productos que sean rápidamente apreciados por las personas."})]}),D.jsx("div",{className:En.containerImageTeam,children:D.jsx("img",{src:"https://2.bp.blogspot.com/-KwRFJBvUo38/XIJu0Vn82tI/AAAAAAAA9AA/MW5Ej9UIt2YS8zfqXlISB1bpC0FqeDzRgCLcBGAs/s1600/workteam.jpg",alt:"Imagen de un equipo de trabajo"})})]})]})]})}const fW="_containerServices1_1vjt6_7",pW="_servicesContent1_1vjt6_21",gW="_containerImg_1vjt6_101",mW="_containerServices2_1vjt6_113",bW="_servicesContent2_1vjt6_139",kW="_icon_1vjt6_169",wW="_containerServices3_1vjt6_225",vW="_circule_1vjt6_471",Fi={containerServices1:fW,servicesContent1:pW,containerImg:gW,containerServices2:mW,servicesContent2:bW,icon:kW,containerServices3:wW,circule:vW};function _W(){const[n,r]=Z.useState(1),[l,d]=Z.useState(1),[h,p]=Z.useState(1);Z.useEffect(()=>{n<=5630&&setTimeout(()=>{r(n+140)},20),l<=2300&&setTimeout(()=>{d(l+94)},20),h<=3500&&setTimeout(()=>{p(h+94)},20)},[n,l,h]);function b(){const k="https://server-agency-1203.onrender.com/blog/create/",g={name:"Software"},v={name:"Marketing"},A={name:"Robotica"},x={name:"Videojuegos"},_={name:"Ciberseguridad"};setTimeout(()=>{rt.post(k,g).then(C=>{C.status==200&&console.log(".")}).catch(C=>{console.log(C)})},1e3),setTimeout(()=>{rt.post(k,v).then(C=>{C.status==200&&console.log(".")}).catch(C=>{console.log(C)})},2e3),setTimeout(()=>{rt.post(k,A).then(C=>{C.status==200&&console.log(".")}).catch(C=>{console.log(C)})},3e3),setTimeout(()=>{rt.post(k,x).then(C=>{C.status==200&&console.log(".")}).catch(C=>{console.log(C)})},4e3),setTimeout(()=>{rt.post(k,_).then(C=>{C.status==200&&console.log(".")}).catch(C=>{console.log(C)})},5e3)}return D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Servicios ... "})]}),D.jsxs(fi,{children:[D.jsxs("section",{className:Fi.containerServices1,children:[D.jsxs("aside",{className:Fi.servicesContent1,children:[D.jsx("h1",{children:" PROGRAMACION DE SOFTWARE "}),D.jsx("p",{children:"Nos fascina transformar los modelos de pensamiento convencionales y generar lo que nunca antes se había ensayado. Tomamos ideas iniciales y desarrollamos entornos exuberantes."}),D.jsxs("div",{children:[D.jsxs("h3",{children:[n," ",D.jsx("span",{children:" + "})]}),D.jsxs("h3",{children:[l," ",D.jsx("span",{children:" + "})]}),D.jsxs("h3",{children:[h," ",D.jsx("span",{children:" + "})]})]})]}),D.jsx("aside",{className:Fi.containerImg,children:D.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/8415/8415599.png",alt:"img"})})]}),D.jsxs("section",{className:Fi.containerServices2,children:[D.jsx("h1",{children:" PRODUCTOS DE DESARROLLO DE SOFTWARE"}),D.jsxs("aside",{className:Fi.servicesContent2,children:[D.jsxs("div",{children:[D.jsx("h4",{className:Fi.icon,children:D.jsx(Dl,{})}),D.jsx("h1",{children:" Equipo de programacion de software "}),D.jsx("p",{children:"Los productos digitales se trabajan con metodologiias agiles por lo tanto podemos garantizar un desarrollo fluido y eficiente"})]}),D.jsxs("div",{children:[D.jsx("h4",{className:Fi.icon,children:D.jsx(G$,{})}),D.jsx("h1",{children:" Equipo de programacion de software "}),D.jsx("p",{children:"Los productos digitales se trabajan con metodologiias agiles por lo tanto podemos garantizar un desarrollo fluido y eficiente"})]}),D.jsxs("div",{children:[D.jsx("h4",{className:Fi.icon,children:D.jsx(K$,{})}),D.jsx("h1",{children:" Equipo de programacion de software "}),D.jsx("p",{children:"Los productos digitales se trabajan con metodologiias agiles por lo tanto podemos garantizar un desarrollo fluido y eficiente"})]})]})]}),D.jsxs("section",{className:Fi.containerServices3,children:[D.jsxs("aside",{children:[D.jsx("h1",{children:" NUESTROS CLIENTES "}),D.jsx("p",{children:"Pensamos que las marcas son el vínculo cultural entre las compañías y sus comunidades."}),D.jsxs("div",{children:[D.jsx("p",{children:D.jsx(Dl,{})}),D.jsx("p",{children:D.jsx(Dl,{})}),D.jsx("p",{children:D.jsx(Dl,{})}),D.jsx("p",{children:D.jsx(Dl,{})}),D.jsx("p",{children:D.jsx(Dl,{})}),D.jsx("p",{onClick:b,children:D.jsx(Dl,{})})]})]}),D.jsx("aside",{className:Fi.circule,children:" "})]})]})]})}const yW="_overlay_1is03_7",CW="_loaderContainer_1is03_25",AW="_loader_1is03_25",xW="_rotation_1is03_1",EW="_containerAllBlogs1_1is03_89",SW="_categories_1is03_99",DW="_link_1is03_111",TW="_searchForm_1is03_137",IW="_blogContentContainer_1is03_201",MW="_containerImg_1is03_239",NW="_blogImage_1is03_267",jW="_title_1is03_275",PW="_description_1is03_289",BW="_creation_1is03_303",OW="_pagination_1is03_323",LW="_pageButton_1is03_337",RW="_containerAllBlogs2_1is03_413",zW="_blogInfo_1is03_443",Yt={overlay:yW,loaderContainer:CW,loader:AW,rotation:xW,containerAllBlogs1:EW,categories:SW,link:DW,searchForm:TW,blogContentContainer:IW,containerImg:MW,blogImage:NW,title:jW,description:PW,creation:BW,pagination:OW,pageButton:LW,containerAllBlogs2:RW,blogInfo:zW};function FW(){var L,P,j;const n=Eo(),r=Zo(),l=ui(),d=Ye(O=>O.category),h=Ye(O=>O.allBlogs),[p,b]=Z.useState("initial"),[k,g]=Z.useState("0"),[v,A]=Z.useState("0"),[x,_]=Z.useState({}),C=l.search;Z.useEffect(()=>{d.info||Je(()=>import("./index-e09ecdba.js"),[]).then(O=>{n(O.axiosCategorys())}),d.info&&h.info&&b("none")},[h.info,d.info]),Z.useEffect(()=>{Je(()=>import("./index-e09ecdba.js"),[]).then(O=>{n(O.axiosAllBlogs())})},[]),Z.useEffect(()=>{if(C){const O=`https://server-agency-1203.onrender.com/blog/all_blog/?page=${C.split("=")[1]}`;fetch(O,{method:"GET"}).then(R=>{if(!R.ok)throw new Error("Hubo algun error");return R.json()}).then(R=>{_(R),setTimeout(()=>{A("1")},350)})}},[C]),setTimeout(()=>{g("1")},350);function M(O){O.preventDefault();const R=O.target.search.value;R?r(`/blogs/search/${R}`):alert("Estas tratando de enviar datos vacios")}function T(){const R=(h.info.count/5).toString().split(".");if(R.length===1){const W=[];for(let Q=1;Q<=Number(R[0]);Q++)W.push(Q);if(W.length>1)return D.jsx("div",{className:Yt.pagination,children:W.map(Q=>D.jsx("button",{onClick:Y=>{r(`/blogs?page=${Q}`),A("0")},className:Yt.pageButton,children:Q},Q))})}else{const W=[];for(let Q=1;Q<=Number(R[0])+1;Q++)W.push(Q);if(W.length>1)return D.jsx("div",{className:Yt.pagination,children:W.map(Q=>D.jsx("button",{onClick:Y=>{r(`/blogs?page=${Q}`),A("0")},className:Yt.pageButton,children:Q},Q))})}}return D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Blogs "})]}),D.jsx(fi,{children:D.jsxs("article",{style:{position:"relative"},children:[D.jsx("div",{style:{display:p},class:Yt.overlay,children:D.jsx("div",{class:Yt.loaderContainer,children:D.jsx("span",{class:Yt.loader})})}),D.jsxs("section",{className:Yt.containerAllBlogs1,children:[D.jsxs("nav",{className:Yt.categories,children:[location.pathname=="/blogs"?D.jsx(ur,{style:{color:"green",textDecoration:"underline"},className:Yt.link,to:"/blogs",children:"Todos"}):D.jsx(ur,{className:Yt.link,to:"/blogs",children:"Todos"}),d.status==="fulfilled"?(L=d.info)==null?void 0:L.map(O=>D.jsx(ur,{className:Yt.link,to:`/blogs/category/${O.slug}`,children:O.name},O.id)):(d.status==="pending",!1)]}),D.jsxs("form",{onSubmit:M,className:Yt.searchForm,children:[D.jsx("input",{type:"text",name:"search",id:"search",placeholder:"Buscar",required:!0}),D.jsx("button",{type:"submit",children:"Buscar"})]})]}),D.jsx("section",{className:Yt.containerAllBlogs2,style:{opacity:k},children:h.status==="fulfilled"&&!l.search?D.jsxs("article",{children:[(P=h.info.results)==null?void 0:P.map(O=>D.jsx("div",{onClick:R=>{r(`/blogs/blog_detail/${O.slug}`)},children:D.jsxs("aside",{className:Yt.blogContentContainer,children:[D.jsx("div",{className:Yt.containerImg,children:D.jsx("img",{src:O.img_url,alt:"img"})}),D.jsxs("div",{className:Yt.blogInfo,children:[D.jsxs("h1",{className:Yt.title,children:[" ",O.title," "]}),D.jsx("p",{className:Yt.description,children:O.description}),D.jsxs("p",{className:Yt.creation,children:[" ",O.creation," "]})]})]})},O.id)),h.status==="fulfilled"?T():!1]}):Object.keys(x).length!==0?D.jsx("section",{className:Yt.containerAllBlogs2,style:{opacity:v},children:D.jsxs("article",{children:[(j=x.results)==null?void 0:j.map(O=>D.jsx("div",{onClick:R=>{r(`/blogs/blog_detail/${O.slug}`)},children:D.jsxs("aside",{className:Yt.blogContentContainer,children:[D.jsx("div",{className:Yt.containerImg,children:D.jsx("img",{src:O.img_url,alt:"img"})}),D.jsxs("div",{className:Yt.blogInfo,children:[D.jsxs("h1",{className:Yt.title,children:[" ",O.title," "]}),D.jsx("p",{className:Yt.description,children:O.description}),D.jsxs("p",{className:Yt.creation,children:[" ",O.creation," "]})]})]})},O.id)),h.status==="fulfilled"?T():!1]})}):h.status==="rejected"?D.jsx("h1",{children:" No hay blogs "}):!1})]})})]})}const VW="_containerAllBlogs1_a0yek_9",UW="_categories_a0yek_19",HW="_link_a0yek_31",$W="_searchForm_a0yek_57",WW="_blogContentContainer_a0yek_121",qW="_containerImg_a0yek_159",GW="_blogImage_a0yek_187",KW="_title_a0yek_195",YW="_description_a0yek_209",QW="_creation_a0yek_223",ZW="_pagination_a0yek_243",JW="_pageButton_a0yek_257",XW="_containerAllBlogs2_a0yek_331",eq="_blogInfo_a0yek_359",_n={containerAllBlogs1:VW,categories:UW,link:HW,searchForm:$W,blogContentContainer:WW,containerImg:qW,blogImage:GW,title:KW,description:YW,creation:QW,pagination:ZW,pageButton:JW,containerAllBlogs2:XW,blogInfo:eq};function tq(){var T,L,P;const n=Eo(),r=Zo(),l=Zl(),d=ui(),h=Ye(j=>j.blogTypeCategory),p=Ye(j=>j.category),[b,k]=Z.useState("0"),[g,v]=Z.useState("0"),[A,x]=Z.useState({}),_=d.search;Z.useEffect(function(){p.info||Je(()=>import("./index-e09ecdba.js"),[]).then(j=>{n(j.axiosCategorys())}),Je(()=>import("./index-e09ecdba.js"),[]).then(j=>{n(j.axiosBlogTypeCategory(l.slug))})},[l.slug]),Z.useEffect(()=>{k("0")},[l.slug]),Z.useEffect(()=>{if(_){const j=`https://server-agency-1203.onrender.com/blog/blog_by_category/?page=${_.split("=")[1]}&slug=${l.slug}`;fetch(j,{method:"GET"}).then(O=>{if(!O.ok)throw new Error("Hubo algun error");return O.json()}).then(O=>{x(O),setTimeout(()=>{v("1")},350)})}},[_]),setTimeout(function(){k("1")},350);function C(j){j.preventDefault();const O=j.target.search.value;O?r(`/blogs/search/${O}`):alert("Estas tratando de enviar datos vacios")}function M(){const O=(h.info.count/5).toString().split(".");if(O.length===1){const R=[];for(let W=1;W<=Number(O[0]);W++)R.push(W);if(R.length>1)return D.jsx("div",{className:_n.pagination,children:R.map(W=>D.jsx("button",{onClick:Q=>{r(`/blogs/category/${l.slug}?page=${W}`),v("0")},className:_n.pageButton,children:W},W))})}else{const R=[];for(let W=1;W<=Number(O[0])+1;W++)R.push(W);if(R.length>1)return D.jsx("div",{className:_n.pagination,children:R.map(W=>D.jsx("button",{onClick:Q=>{r(`/blogs/category/${l.slug}?page=${W}`),v("0")},className:_n.pageButton,children:W},W))})}}return D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Blogs / categorya "})]}),D.jsxs(fi,{children:[D.jsxs("section",{className:_n.containerAllBlogs1,children:[D.jsxs("nav",{className:_n.categories,children:[D.jsx(ur,{className:_n.link,to:"/blogs",children:"Todos"}),p.status==="fulfilled"?(T=p.info)==null?void 0:T.map(j=>D.jsx(ur,{style:l.slug===j.slug?{color:"green",textDecoration:"underline"}:{color:"#333"},className:_n.link,to:`/blogs/category/${j.slug}`,children:j.name},j.id)):(p.status==="pending",!1)]}),D.jsxs("form",{onSubmit:C,className:_n.searchForm,children:[D.jsx("input",{type:"text",name:"search",id:"search",placeholder:"Buscar",required:!0}),D.jsx("button",{type:"submit",children:"Buscar"})]})]}),D.jsx("section",{className:_n.containerAllBlogs2,style:{opacity:b},children:h.status==="fulfilled"&&!d.search?D.jsxs("article",{children:[(L=h.info.results)==null?void 0:L.map(j=>D.jsx("div",{onClick:O=>{r(`/blogs/blog_detail/${j.slug}`)},children:D.jsxs("aside",{className:_n.blogContentContainer,children:[D.jsx("div",{className:_n.containerImg,children:D.jsx("img",{src:j.img_url,alt:"img"})}),D.jsxs("div",{className:_n.blogInfo,children:[D.jsxs("h1",{className:_n.title,children:[" ",j.title," "]}),D.jsx("p",{className:_n.description,children:j.description}),D.jsxs("p",{className:_n.creation,children:[" ",j.creation," "]})]})]})},j.id)),h.status==="fulfilled"?M():!1]}):Object.keys(A).length!==0?D.jsxs("div",{style:{opacity:g},children:[(P=A.results)==null?void 0:P.map(j=>D.jsx("div",{onClick:O=>{r(`/blogs/blog_detail/${j.slug}`)},children:D.jsxs("aside",{className:_n.blogContentContainer,children:[D.jsx("div",{className:_n.containerImg,children:D.jsx("img",{src:j.img_url,alt:"img"})}),D.jsxs("div",{className:_n.blogInfo,children:[D.jsxs("h1",{className:_n.title,children:[" ",j.title," "]}),D.jsx("p",{className:_n.description,children:j.description}),D.jsxs("p",{className:_n.creation,children:[" ",j.creation," "]})]})]})},j.id)),h.status==="fulfilled"?M():!1]}):h.status==="rejected"?D.jsx("h1",{children:" No hay blogs "}):!1})]})]})}const nq="_blogDetailContainer_1dlpd_3",oq="_title_1dlpd_17",rq="_infoBar_1dlpd_33",iq="_info_1dlpd_33",sq="_infoLabel_1dlpd_61",aq="_infoDato_1dlpd_79",lq="_content_1dlpd_87",to={blogDetailContainer:nq,title:oq,infoBar:rq,info:iq,infoLabel:sq,infoDato:aq,content:lq};function cq(){var p;const n=Eo(),r=Zl(),l=Ye(b=>b.blogDetail),[d,h]=Z.useState("0");return Z.useEffect(function(){Je(()=>import("./index-e09ecdba.js"),[]).then(b=>{n(b.axiosBlogDetail(r.slug))})},[r.slug]),setTimeout(()=>{h("1")},350),D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Blog / name "})]}),D.jsx(fi,{children:D.jsx("section",{className:to.containerBlogDetail,style:{opacity:d},children:l.status==="fulfilled"?(p=l.info)==null?void 0:p.map(b=>D.jsxs("aside",{className:to.blogDetailContainer,children:[D.jsxs("h1",{className:to.title,children:[" ",b.title," "]}),D.jsxs("div",{className:to.infoBar,children:[D.jsxs("div",{className:to.info,children:[D.jsx("p",{className:to.infoLabel,children:"Likes:"}),D.jsx(UU,{params:r.slug})]}),D.jsxs("div",{className:to.info,children:[D.jsx("p",{className:to.infoLabel,children:"Comentarios:"}),D.jsx(cH,{params:r.slug})]}),D.jsxs("div",{className:to.info,children:[D.jsx("p",{className:to.infoLabel,children:"Categoría:"}),D.jsx("p",{className:to.infoDato,children:b.category.name})]}),D.jsxs("div",{className:to.info,children:[D.jsx("p",{className:to.infoLabel,children:"Fecha:"}),D.jsxs("p",{className:to.infoDato,children:[" ",b.creation]})]}),D.jsxs("div",{className:to.info,children:[D.jsx("p",{className:to.infoLabel,children:"Autor:"}),D.jsxs("p",{className:to.infoDato,children:[" ",b.user.username," "]})]})]}),D.jsx("article",{className:to.content,dangerouslySetInnerHTML:{__html:b.content}})]},b.id)):l.status==="pending"?!1:l.status==="rejected"?D.jsx("h1",{children:" Este blog no existe"}):!1})})]})}const dq="_overlay_17d86_3",uq="_loaderContainer_17d86_19",hq="_loader_17d86_19",fq="_rotation_17d86_1",pq="_containerContent_17d86_79",gq="_containerButtons_17d86_147",mq="_containerImg_17d86_187",bq="_containerAccess_17d86_213",Kc={overlay:dq,loaderContainer:uq,loader:hq,rotation:fq,containerContent:pq,containerButtons:gq,containerImg:mq,containerAccess:bq};function kq(){const n=Zo(),r=Ye(g=>g.JWTVerify),l=Ye(g=>g.category),d=JSON.parse(localStorage.getItem("access")),[h,p]=Z.useState("initial"),[b,k]=Z.useState("none");return Z.useEffect(()=>{r.status==="fulfilled"&&d&&n("/dashboard")},[r.status]),Z.useEffect(()=>{l.status==="fulfilled"&&(p("none"),k("initial")),l.status!=="fulfilled"&&(p("initial"),k("none"))},[l.status]),D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Accede al blog ... "})]}),D.jsx(fi,{children:D.jsxs("article",{style:{position:"relative"},children:[D.jsx("div",{style:{display:h},class:Kc.overlay,children:D.jsx("div",{class:Kc.loaderContainer,children:D.jsx("span",{class:Kc.loader})})}),D.jsx("section",{style:{display:b},className:Kc.containerAccess,children:D.jsxs("aside",{className:Kc.containerContent,children:[D.jsxs("h1",{children:[D.jsx("span",{style:{color:"green",fontSize:"30px"},children:"A"}),"ccede a nuestro blog"]}),D.jsx("p",{children:"Explora nuestro blog y desbloquea una experiencia enriquecedora al registrarte. Únete a nuestra comunidad y comparte tus pasiones a través de publicaciones que te permitirán expresarte en temas que realmente te interesan. ¡Regístrate ahora para comenzar a ser parte de la conversación y aprovechar al máximo tu membresía!"}),D.jsxs("div",{className:Kc.containerButtons,children:[D.jsx("button",{onClick:g=>{n("/access/signup")},type:"button",children:"Registrarse"}),D.jsx("button",{onClick:g=>{n("/access/signin")},type:"button",children:"Ingresar"})]})]})})]})})]})}const wq="_containerLogin_8se5n_3",vq="_containerInputs_8se5n_41",_q="_messageError_8se5n_153",$f={containerLogin:wq,containerInputs:vq,messageError:_q};function yq(){const n=Eo(),r=Zo(),l=ui(),d=Ye(P=>P.JWTCreate),h=Ye(P=>P.JWTRefresh),p=Ye(P=>P.JWTVerify),b=Ye(P=>P.resetPasword),[k,g]=Z.useState({}),v=JSON.parse(localStorage.getItem("access")),A=Ye(P=>P.authGoogle),x=new URLSearchParams(l.search),_=x.get("state"),C=x.get("code");Z.useEffect(()=>{if(A.url&&(location.href=A.url),_&&C&&!A.info){const P={state:_,code:C};Je(()=>import("./index-e09ecdba.js"),[]).then(j=>{n(j.axiosLoginGoogle(P))})}},[A,_,C]),Z.useEffect(()=>{d.status==="rejected"&&ze.fire({icon:"error",title:"Oops...",text:"Combinacion de credenciales incorrecta!",footer:`<a class=${$f.messageError} href="https://critianrodriguez042502.github.io/access/signup">Ya te registraste? Crea tu cuenta...</a>`}),d.info&&d.status==="fulfilled"&&!h.info&&Je(()=>import("./index-e09ecdba.js"),[]).then(P=>{n(P.axiosJWTRefresh({refresh:d.info}))}),h.info&&(p.status==="rejected"||!v)&&Je(()=>import("./index-e09ecdba.js"),[]).then(P=>{n(P.axiosJWTVerify({token:h.info.access}))}),p.status==="fulfilled"&&v&&(ze.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:j=>{j.addEventListener("mouseenter",ze.stopTimer),j.addEventListener("mouseleave",ze.resumeTimer)}}).fire({icon:"success",title:"Acceso permitido"}),setTimeout(()=>{r("/dashboard")},2e3))},[d.status,d.info,h.info,p.status]);function M(P){g({...k,[P.target.name]:P.target.value})}function T(P){P.preventDefault(),k.email&&k.password&&(ze.showLoading(),Je(()=>import("./index-e09ecdba.js"),[]).then(j=>{n(j.axiosJWTCreate(k))}))}Z.useEffect(()=>{b.status==="fulfilled"&&ze.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2500,timerProgressBar:!0,didOpen:j=>{j.addEventListener("mouseenter",ze.stopTimer),j.addEventListener("mouseleave",ze.resumeTimer)}}).fire({icon:"success",title:"Email enviado"}),b.status==="rejected"&&ze.fire({icon:"error",title:"Oops...",text:"Esta cuenta existe!",footer:`<a class=${$f.messageError} href="https://critianrodriguez042502.github.io/access/signup">Ya te registraste? Crea tu cuenta...</a>`})},[b.status]);async function L(){const{value:P}=await ze.fire({title:"Recuperar contraseña",input:"email",inputLabel:"Escribe tu correo electronico",inputPlaceholder:"Email"});P&&(ze.fire(`Verifica tu email: ${P}`),Je(()=>import("./index-e09ecdba.js"),[]).then(j=>{n(j.axiosResetPassword({email:P}))}))}return D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Iniciar sesion ... "})]}),D.jsx(fi,{children:D.jsxs("section",{className:$f.containerLogin,children:[D.jsx("h1",{children:" Iniciar sesion "}),D.jsxs("form",{className:$f.containerInputs,onSubmit:T,children:[D.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Correo",onChange:M,required:!0}),D.jsx("input",{type:"password",id:"password",name:"password",autoComplete:"current-password",placeholder:"Contraseña",onChange:M,required:!0}),D.jsx("button",{type:"submit",children:" Acceder "}),D.jsx("p",{onClick:L,children:" Olvidaste tu contraseña ? "})]})]})})]})}const Cq="_container_1pcy7_3",Aq="_containerInputs_1pcy7_39",r5={container:Cq,containerInputs:Aq};function xq(){const n=Zo(),r=Eo(),l=Ye(L=>L.authGoogle),d=Ye(L=>L.createUser),h=Ye(L=>L.resendEmail),[p,b]=Z.useState({}),[k,g]=Z.useState("none"),[v,A]=Z.useState(""),x=Ye(L=>L.JWTVerify),_=JSON.parse(localStorage.getItem("access"));Z.useEffect(()=>{l.url&&(location.href=l.url)},[l.url]),Z.useEffect(()=>{if(x.status==="fulfilled"&&_&&n("/dashboard"),d.status==="fulfilled"&&(g("initial"),ze.fire({icon:"success",title:"Registro completado!",text:"Se le a enviado un email a su correo para la activacion de su cuenta"})),d.status==="rejected"){const L=[],P=Object.values(d.info);for(let j=0;j<P.length;j++)L.push(P[j]);ze.fire("Opss?",`${L[0]}`,"warning")}},[d.status,x.status]),Z.useEffect(()=>{h.status==="fulfilled"&&ze.fire({position:"top-end",icon:"success",title:"Correo reenviado",showConfirmButton:!1,timer:2e3}),h.status==="rejected"&&ze.fire({position:"top-end",icon:"info",title:"Su cuenta ya se encuentra activa",showConfirmButton:!1,timer:2e3})},[h.status]);function C(L){b({...p,[L.target.name]:L.target.value})}function M(L){L.preventDefault();const P=L.target.first_name.value,j=L.target.last_name.value,O=L.target.username.value,R=L.target.email.value,W=L.target.password.value,Q=L.target.re_password.value;A(R),P&&j&&O&&R&&W&&Q?W===Q?W.length>=8?Je(()=>import("./index-e09ecdba.js"),[]).then(Y=>{r(Y.axiosCreateUser(p))}):ze.fire({icon:"warning",title:"Oops...",text:"Contraseña demasiado corta"}):ze.fire({icon:"info",title:"Oops...",text:"Las contraseñas no coinciden"}):ze.fire({icon:"info",title:"Oops...",text:"Estas tratando de enviar datos vacios"})}function T(){Je(()=>import("./index-e09ecdba.js"),[]).then(L=>{r(L.axiosResendEmail({email:v}))})}return D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Registrarse ... "})]}),D.jsxs(fi,{children:[D.jsxs("section",{className:r5.container,children:[D.jsx("h1",{children:" Registro "}),D.jsxs("form",{className:r5.containerInputs,onSubmit:M,children:[D.jsx("input",{type:"text",id:"first_name",name:"first_name",onChange:C,placeholder:"Nombre",required:!0}),D.jsx("input",{type:"text",id:"last_name",name:"last_name",onChange:C,placeholder:"Apellido",required:!0}),D.jsx("input",{type:"text",id:"username",name:"username",onChange:C,placeholder:"Nombre de usuario",required:!0}),D.jsx("input",{type:"email",id:"email",name:"email",onChange:C,placeholder:"Correo",required:!0}),D.jsx("input",{type:"password",id:"password",name:"password",onChange:C,placeholder:"Contraseña",required:!0}),D.jsx("input",{type:"password",id:"re_password",name:"re_password",onChange:C,placeholder:"Repetir contraseña",required:!0}),D.jsx("button",{type:"submit",children:" Registrarse "})]})]}),D.jsxs("div",{style:{display:k},children:[D.jsx("p",{children:" Volver a enviar correo "}),D.jsx("button",{onClick:T,children:" Reenviar correo "})]})]})]})}const Eq="_containerAllBlogs1_5lvpg_7",Sq="_link_5lvpg_17",Dq="_searchForm_5lvpg_49",Tq="_blogContentContainer_5lvpg_113",Iq="_containerImg_5lvpg_151",Mq="_blogImage_5lvpg_179",Nq="_title_5lvpg_187",jq="_description_5lvpg_201",Pq="_creation_5lvpg_215",Bq="_pagination_5lvpg_235",Oq="_pageButton_5lvpg_249",Lq="_containerAllBlogs2_5lvpg_319",Rq="_blogInfo_5lvpg_349",Sn={containerAllBlogs1:Eq,link:Sq,searchForm:Dq,blogContentContainer:Tq,containerImg:Iq,blogImage:Mq,title:Nq,description:jq,creation:Pq,pagination:Bq,pageButton:Oq,containerAllBlogs2:Lq,blogInfo:Rq};function zq(){var P,j;const n=Eo(),r=Zo(),l=Zl(),d=ui(),h=Ye(O=>O.searchBlog),[p,b]=Z.useState(l.slug),[k,g]=Z.useState({}),[v,A]=Z.useState("0"),[x,_]=Z.useState("0"),C=d.search;Z.useEffect(()=>{Je(()=>import("./index-e09ecdba.js"),[]).then(O=>{n(O.axiosSearchBlogs(l.slug))})},[l.slug]),Z.useEffect(()=>{if(C){const O=`https://server-agency-1203.onrender.com/blog/search_blogs/?page=${C.split("=")[1]}&slug=${l.slug}`;fetch(O,{method:"GET"}).then(R=>{if(!R.ok)throw new Error("Hubo algun error");return R.json()}).then(R=>{g(R),setTimeout(()=>{_("1")},350)})}},[C]);function M(O){b(O.target.value)}function T(O){O.preventDefault(),p?r(`/blogs/search/${p}`):alert("No puedes enviar datos vacios")}setTimeout(()=>{A("1")},350);function L(){const R=(h.info.count/8).toString().split(".");if(R.length===1){const W=[];for(let Q=1;Q<=Number(R[0]);Q++)W.push(Q);if(W.length>1)return D.jsx("div",{className:Sn.pagination,children:W.map(Q=>D.jsx("button",{onClick:Y=>{_("0"),r(`/blogs/search/${l.slug}?page=${Q}`)},className:Sn.pageButton,children:Q},Q))})}else{const W=[];for(let Q=1;Q<=Number(R[0])+1;Q++)W.push(Q);if(W.length>1)return D.jsx("div",{className:Sn.pagination,children:W.map(Q=>D.jsx("button",{onClick:Y=>{_("0"),r(`/blogs/search/${l.slug}?page=${Q}`)},className:Sn.pageButton,children:Q},Q))})}}return D.jsxs("main",{children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Busqueda "})]}),D.jsxs(fi,{children:[D.jsxs("section",{className:Sn.containerAllBlogs1,children:[D.jsxs(ur,{className:Sn.link,to:"/blogs",children:[" ","Volver"," "]}),D.jsxs("form",{className:Sn.searchForm,onSubmit:T,children:[D.jsx("input",{type:"text",name:"search",value:p,id:"search",placeholder:"Buscar blogs",onChange:M,required:!0}),D.jsx("button",{type:"submit",children:" Buscar "})]})]}),D.jsx("section",{className:Sn.containerAllBlogs2,style:{opacity:v},children:h.status==="fulfilled"&&!d.search?D.jsxs("article",{style:{opacity:v},children:[(P=h.info.results)==null?void 0:P.map(O=>D.jsx("div",{onClick:R=>{r(`/blogs/blog_detail/${O.slug}`)},children:D.jsxs("aside",{className:Sn.blogContentContainer,children:[D.jsx("div",{className:Sn.containerImg,children:D.jsx("img",{src:O.img_url,alt:"img"})}),D.jsxs("div",{className:Sn.blogInfo,children:[D.jsxs("h1",{className:Sn.title,children:[" ",O.title," "]}),D.jsx("p",{className:Sn.description,children:O.description}),D.jsxs("p",{className:Sn.creation,children:[" ",O.creation," "]})]})]})},O.id)),h.status==="fulfilled"?L():!1]}):Object.keys(k).length!==0?D.jsxs("section",{className:Sn.containerAllBlogs2,style:{opacity:x},children:[(j=k.results)==null?void 0:j.map(O=>D.jsx("div",{onClick:R=>{r(`/blogs/blog_detail/${O.slug}`)},children:D.jsxs("aside",{className:Sn.blogContentContainer,children:[D.jsx("div",{className:Sn.containerImg,children:D.jsx("img",{src:O.img_url,alt:"img"})}),D.jsxs("div",{className:Sn.blogInfo,children:[D.jsxs("h1",{className:Sn.title,children:[" ",O.title," "]}),D.jsx("p",{className:Sn.description,children:O.description}),D.jsxs("p",{className:Sn.creation,children:[" ",O.creation," "]})]})]})},O.id)),h.status==="fulfilled"?L():!1]}):h.status==="rejected"?D.jsx("h1",{children:" No hay blogs "}):!1})]})]})}const Fq="_containerActivation_1ga6b_1",Vq="_container_1ga6b_1",Uq="_loader_1ga6b_79",Hq="_rotation_1ga6b_1",Mk={containerActivation:Fq,container:Vq,loader:Uq,rotation:Hq};function $q(){const n=Eo(),r=Zl(),l=Zo(),d=Ye(b=>b.activate),[h,p]=Z.useState("none");return Z.useEffect(()=>{Je(()=>import("./index-e09ecdba.js"),[]).then(b=>{n(b.axiosActivationUser({uid:r.uid,token:r.token}))})},[]),Z.useEffect(()=>{d.status==="pending"&&p("initial"),d.status==="fulfilled"&&(p("none"),ze.fire({position:"top-end",icon:"success",title:"Proceso completa",text:"Su cuenta a sido activada correctamente",showConfirmButton:!1,timer:3e3}),setTimeout(()=>{l("/access/signin")},4e3)),d.status==="rejected"&&(p("none"),ze.fire({position:"top-end",icon:"error",title:"Opss...",text:"Parece que algo salio mal",showConfirmButton:!1,timer:3e3}),setTimeout(()=>{l("/access/signup")},4e3))},[d.status]),D.jsxs("main",{className:Mk.container,children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Activacion "})]}),D.jsxs("section",{className:Mk.containerActivation,children:[D.jsx("h1",{children:" Activacion de cuenta "}),D.jsx("div",{style:{display:h},children:D.jsx("span",{className:Mk.loader,children:" "})})]})]})}const Wq="_container_jvhvr_3",qq="_containerResetPassword_jvhvr_27",Gq="_containerInput_jvhvr_53",Nk={container:Wq,containerResetPassword:qq,containerInput:Gq};function Kq(){const n=Eo(),r=Zo(),l=Zl(),d=Ye(g=>g.resetPasswordConfirm),[h,p]=Z.useState({});Z.useEffect(()=>{if(d.status==="fulfilled"&&(ze.fire({position:"top-end",icon:"success",title:"Proceso completado",text:"Contraseña cambiada exitosamente",showConfirmButton:!1,timer:3500}),setTimeout(()=>{r("/access/signin")},4e3)),d.status==="rejected"){const g=d.info.new_password;ze.fire({icon:"warning",title:"Oops...",text:`${g[0]}`})}},[d.status]);function b(g){p({uid:l.uid,token:l.token,...h,[g.target.name]:g.target.value})}function k(g){g.preventDefault(),h.new_password&&h.re_new_password?h.new_password===h.re_new_password?Je(()=>import("./index-e09ecdba.js"),[]).then(v=>{n(v.axiosResetPasswordConfirm(h))}):ze.fire({icon:"info",title:"Oops...",text:"Las contraseñas no coinciden"}):ze.fire({icon:"info",title:"Oops...",text:"Estas tratando de enviar datos vacios"})}return D.jsxs("main",{className:Nk.container,children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Cambiar contraseña "})]}),D.jsxs("section",{className:Nk.containerResetPassword,children:[D.jsx("h1",{children:" Cambiar contraseña"}),D.jsxs("form",{className:Nk.containerInput,onSubmit:k,children:[D.jsx("input",{type:"password",id:"new_password",name:"new_password",placeholder:"Nueva contraseña",onChange:b,required:!0}),D.jsx("input",{type:"password",id:"re_new_password",name:"re_new_password",placeholder:"Repetir contraseña",onChange:b,required:!0}),D.jsx("button",{type:"submit",children:" Cambiar "})]})]})]})}const Yq="_bottomNavegationScrollAppearance_1f0ut_7",Qq="_containerInitialDashboard_1f0ut_35",Zq="_staticContainer_1f0ut_59",Jq="_containerImg_1f0ut_99",Xq="_img2_1f0ut_111",eG="_img1_1f0ut_185",tG="_circule1_1f0ut_205",nG="_circule2_1f0ut_233",Tl={bottomNavegationScrollAppearance:Yq,containerInitialDashboard:Qq,staticContainer:Zq,containerImg:Jq,img2:Xq,img1:eG,circule1:tG,circule2:nG};function oG(){const n=Ye(k=>k.userData),[r,l]=Z.useState(null),[d,h]=Z.useState(!1),[p,b]=Z.useState(D.jsx(vh,{}));return Z.useEffect(()=>{n.status==="fulfilled"&&l([n.info])},[n.status]),D.jsxs("main",{className:Tl.containerInitialDashboard,children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Dashboard "})]}),D.jsx(Pg,{appearance:d}),D.jsx("section",{children:D.jsx("div",{className:Tl.bottomNavegationScrollAppearance,children:D.jsx("h1",{onClick:()=>{d===!1?(h(!0),b(D.jsx(xa,{}))):(h(!1),b(D.jsx(vh,{})))},children:p})})}),D.jsx("div",{className:Tl.circule1}),D.jsxs("section",{className:Tl.staticContainer,children:[n.status==="fulfilled"?D.jsxs("h1",{children:["// BIENVENIDO // ",D.jsx("br",{})," ",n.info.username]}):!1,D.jsx("p",{children:"En IMPACT X, creemos en el poder de las palabras y las ideas. Te damos la bienvenida a un lugar donde la creatividad fluye libremente y las voces se unen para formar una comunidad vibrante y diversa. ¡Este es tu espacio para inspirar, aprender y conectarte!"}),D.jsxs("aside",{className:Tl.containerImg,children:[D.jsx("div",{children:D.jsx("img",{className:Tl.img1,src:"https://geeksui.codescandy.com/geeks/assets/images/background/acedamy-img/frame-1.svg",alt:"img",width:200,height:200})}),D.jsx("div",{children:D.jsx("img",{className:Tl.img2,src:"https://geeksui.codescandy.com/geeks/assets/images/background/acedamy-img/frame-1.svg",alt:"img",width:200,height:200})})]})]})]})}const rG="_viewInitalBlogByUser_e4p5x_3",iG="_bottomNavegationScrollAppearance_e4p5x_17",sG="_containerBlogsUser_e4p5x_45",aG="_linkNavbar_e4p5x_71",lG="_titleMajor_e4p5x_99",cG="_separateBlogContainer_e4p5x_117",dG="_containerImg_e4p5x_133",uG="_containerContent_e4p5x_149",hG="_containerTitleAndPublic_e4p5x_173",fG="_publicCase_e4p5x_185",pG="_privateCase_e4p5x_199",gG="_containerButtons_e4p5x_227",mG="_buttonDelete_e4p5x_235",bG="_buttonUpdate_e4p5x_265",kG="_containerButtonsAndDate_e4p5x_297",wG="_pagination_e4p5x_307",vG="_pageButton_e4p5x_321",jt={viewInitalBlogByUser:rG,bottomNavegationScrollAppearance:iG,containerBlogsUser:sG,linkNavbar:aG,titleMajor:lG,separateBlogContainer:cG,containerImg:dG,containerContent:uG,containerTitleAndPublic:hG,publicCase:fG,privateCase:pG,containerButtons:gG,buttonDelete:mG,buttonUpdate:bG,containerButtonsAndDate:kG,pagination:wG,pageButton:vG};function _G(){var Q,Y;const n=Eo(),r=Zo(),l=ui(),d=Ye(V=>V.blogsByUser),h=Ye(V=>V.createBlogUser),p=Ye(V=>V.updateBlogUser),b=Ye(V=>V.deleteBlogUser),k=JSON.parse(localStorage.getItem("access")),[g,v]=Z.useState("0"),[A,x]=Z.useState("0"),[_,C]=Z.useState({}),M=l.search,[T,L]=Z.useState(!1),[P,j]=Z.useState(D.jsx(vh,{}));Z.useEffect(()=>{(h.status==="fulfilled"||p.status==="fulfilled"||b.status==="fulfilled")&&(Je(()=>import("./index-e09ecdba.js"),[]).then(V=>{n(V.axiosBlogsByUser(k))}),v("0"))},[b.status,h.status,p.status]),Z.useEffect(()=>{if(M){const V={Authorization:`JWT ${k}`},ee=`https://server-agency-1203.onrender.com/dashboard/blog_by_user/?page=${M.split("=")[1]}`;fetch(ee,{method:"GET",headers:V}).then(J=>(J.ok||(M>1?r(`/dashboard/blogs_user?page=${M-1}`):r("/dashboard/blogs_user")),J.json())).then(J=>{C(J),setTimeout(()=>{x("1")},350)}).catch(J=>console.log(J))}},[M]),setTimeout(function(){v("1")},350);function O(){setTimeout(()=>{const V={Authorization:`JWT ${k}`},ee=`https://server-agency-1203.onrender.com/dashboard/blog_by_user/?page=${M}`;fetch(ee,{method:"GET",headers:V}).then(J=>(J.ok||(M>1?r(`/dashboard/blogs_user?page=${M-1}`):r("/dashboard/blogs_user")),J.json())).then(J=>C(J))},200)}function R(){const ee=(d.info.count/5).toString().split(".");if(ee.length===1){const J=[];for(let ne=1;ne<=Number(ee[0]);ne++)J.push(ne);if(J.length>1)return D.jsx("div",{className:jt.pagination,children:J.map(ne=>D.jsx("button",{className:jt.pageButton,onClick:fe=>{x("0"),r(`/dashboard/blogs_user?page=${ne}`)},children:ne},ne))})}else{const J=[];for(let ne=1;ne<=Number(ee[0])+1;ne++)J.push(ne);if(J.length>1)return D.jsx("div",{className:jt.pagination,children:J.map(ne=>D.jsx("button",{className:jt.pageButton,onClick:fe=>{x("0"),r(`/dashboard/blogs_user?page=${ne}`)},children:ne},ne))})}}function W(V){ze.fire({title:"Eliminar",text:"Estas seguro que deseas eliminar este blog?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Si, eliminar!"}).then(ee=>{ee.isConfirmed&&(M?(Je(()=>import("./index-e09ecdba.js"),[]).then(ne=>{n(ne.axiosDeleteBlogUser(V))}),v("0"),O(),ze.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:ne=>{ne.addEventListener("mouseenter",ze.stopTimer),ne.addEventListener("mouseleave",ze.resumeTimer)}}).fire({icon:"error",title:"Blog eliminado"})):(Je(()=>import("./index-e09ecdba.js"),[]).then(ne=>{n(ne.axiosDeleteBlogUser(V))}),v("0"),ze.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:ne=>{ne.addEventListener("mouseenter",ze.stopTimer),ne.addEventListener("mouseleave",ze.resumeTimer)}}).fire({icon:"error",title:"Blog eliminado"})))})}return D.jsxs("main",{className:jt.viewInitalBlogByUser,children:[D.jsxs(qn,{children:[D.jsx("meta",{charset:"UTF-8"}),D.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),D.jsx("title",{children:" Dashboard "})]}),D.jsx(Pg,{appearance:T}),D.jsxs("article",{className:jt.containerBlogsUser,children:[D.jsx("nav",{children:D.jsx(ur,{className:jt.linkNavbar,to:"/dashboard/create_blog",children:"Crear blog"})}),D.jsx("h1",{className:jt.titleMajor,children:" Blogs registrados "}),D.jsx("div",{className:jt.bottomNavegationScrollAppearance,children:D.jsx("h1",{onClick:V=>{T===!1?(L(!0),j(D.jsx(xa,{}))):(L(!1),j(D.jsx(vh,{})))},children:P})}),D.jsx("div",{style:{opacity:g},children:D.jsx("div",{children:d.status==="pending"?D.jsx("h1",{children:" Cargando... "}):d.status==="fulfilled"&&!l.search?D.jsxs("div",{children:[(Q=d.info.results)==null?void 0:Q.map(V=>D.jsxs("aside",{className:jt.separateBlogContainer,children:[D.jsx("div",{className:jt.containerImg,children:D.jsx("img",{src:V.img_url,alt:"img"})}),D.jsxs("div",{className:jt.containerContent,children:[D.jsxs("div",{className:jt.containerTitleAndPublic,children:[D.jsxs("h1",{children:[" ",V.title," "]}),V.public===!0?D.jsx("b",{className:jt.publicCase,children:" Publico "}):D.jsx("b",{className:jt.privateCase,children:" Privado "})]}),D.jsx("div",{children:D.jsxs("p",{children:[" ",V.description," "]})}),D.jsx("hr",{style:{border:"2px solid gray"}}),D.jsxs("div",{className:jt.containerButtonsAndDate,children:[D.jsxs("div",{className:jt.containerButtons,children:[D.jsx("button",{className:jt.buttonDelete,onClick:()=>{const ee={jwt:k,slug:`${V.slug}`};W(ee)},children:"Eliminar"}),D.jsx("button",{className:jt.buttonUpdate,onClick:ee=>{r(`/dashboard/blog_user_detail/${V.slug}`)},children:"Detalles"})]}),D.jsxs("b",{children:[" ",V.creation," "]})]})]})]},V.id)),D.jsx("div",{children:d.status==="fulfilled"?R():!1})]}):Object.keys(_).length!==0?D.jsxs("div",{style:{opacity:A},children:[(Y=_.results)==null?void 0:Y.map(V=>D.jsxs("aside",{className:jt.separateBlogContainer,children:[D.jsx("div",{className:jt.containerImg,children:D.jsx("img",{src:V.img_url,alt:"img"})}),D.jsxs("div",{className:jt.containerContent,children:[D.jsxs("div",{className:jt.containerTitleAndPublic,children:[D.jsxs("h1",{children:[" ",V.title," "]}),V.public===!0?D.jsx("b",{className:jt.publicCase,children:" Publico "}):D.jsx("b",{className:jt.privateCase,children:" Privado "})]}),D.jsx("div",{children:D.jsxs("p",{children:[" ",V.description," "]})}),D.jsx("hr",{style:{border:"2px solid gray"}}),D.jsxs("div",{className:jt.containerButtonsAndDate,children:[D.jsxs("div",{className:jt.containerButtons,children:[D.jsx("button",{className:jt.buttonDelete,onClick:()=>{const ee={jwt:k,slug:`${V.slug}`};W(ee)},children:"Eliminar"}),D.jsx("button",{className:jt.buttonUpdate,onClick:ee=>{r(`/dashboard/blog_user_detail/${V.slug}`)},children:"Detalles"})]}),D.jsxs("b",{children:[" ",V.creation," "]})]})]})]},V.id)),D.jsx("div",{children:d.status==="fulfilled"?R():!1})]}):d.status==="rejected"?D.jsx("p",{children:" No hay blogs"}):!1})})]})]})}var Vp={exports:{}};/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */Vp.exports;(function(n,r){(function(l,d){n.exports=d(Z)})(self,l=>(()=>{var d={703:(k,g,v)=>{var A=v(414);function x(){}function _(){}_.resetWarningCache=x,k.exports=function(){function C(L,P,j,O,R,W){if(W!==A){var Q=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw Q.name="Invariant Violation",Q}}function M(){return C}C.isRequired=C;var T={array:C,bigint:C,bool:C,func:C,number:C,object:C,string:C,symbol:C,any:C,arrayOf:M,element:C,elementType:C,instanceOf:M,node:C,objectOf:M,oneOf:M,oneOfType:M,shape:M,exact:M,checkPropTypes:_,resetWarningCache:x};return T.PropTypes=T,T}},697:(k,g,v)=>{k.exports=v(703)()},414:k=>{k.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:k=>{k.exports=l}},h={};function p(k){var g=h[k];if(g!==void 0)return g.exports;var v=h[k]={exports:{}};return d[k](v,v.exports,p),v.exports}p.n=k=>{var g=k&&k.__esModule?()=>k.default:()=>k;return p.d(g,{a:g}),g},p.d=(k,g)=>{for(var v in g)p.o(g,v)&&!p.o(k,v)&&Object.defineProperty(k,v,{enumerable:!0,get:g[v]})},p.o=(k,g)=>Object.prototype.hasOwnProperty.call(k,g),p.r=k=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(k,"__esModule",{value:!0})};var b={};return(()=>{p.r(b),p.d(b,{CKEditor:()=>Ci,CKEditorContext:()=>il});var k=p(787),g=p.n(k),v=p(697),A=p.n(v);const x=new Array(256).fill("").map((U,H)=>("0"+H.toString(16)).slice(-2));class _{constructor(H){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof H.crashNumberLimit=="number"?H.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof H.minimumNonErrorTimePeriod=="number"?H.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=K=>{const oe="error"in K?K.error:K.reason;oe instanceof Error&&this._handleError(oe,K)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(H,K){this._listeners[H]||(this._listeners[H]=[]),this._listeners[H].push(K)}off(H,K){this._listeners[H]=this._listeners[H].filter(oe=>oe!==K)}_fire(H,...K){const oe=this._listeners[H]||[];for(const Ne of oe)Ne.apply(this,[null,...K])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(H,K){if(this._shouldReactToError(H)){this.crashes.push({message:H.message,stack:H.stack,filename:K instanceof ErrorEvent?K.filename:void 0,lineno:K instanceof ErrorEvent?K.lineno:void 0,colno:K instanceof ErrorEvent?K.colno:void 0,date:this._now()});const oe=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:H,causesRestart:oe}),oe?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(H){return H.is&&H.is("CKEditorError")&&H.context!==void 0&&H.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(H)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function C(U,H=new Set){const K=[U],oe=new Set;let Ne=0;for(;K.length>Ne;){const Ue=K[Ne++];if(!oe.has(Ue)&&M(Ue)&&!H.has(Ue))if(oe.add(Ue),Symbol.iterator in Ue)try{for(const $e of Ue)K.push($e)}catch{}else for(const $e in Ue)$e!=="defaultValue"&&K.push(Ue[$e])}return oe}function M(U){const H=Object.prototype.toString.call(U),K=typeof U;return!(K==="number"||K==="boolean"||K==="string"||K==="symbol"||K==="function"||H==="[object Date]"||H==="[object RegExp]"||H==="[object Module]"||U==null||U._watchdogExcluded||U instanceof EventTarget||U instanceof Event)}function T(U,H,K=new Set){if(U===H&&typeof(oe=U)=="object"&&oe!==null)return!0;var oe;const Ne=C(U,K),Ue=C(H,K);for(const $e of Ne)if(Ue.has($e))return!0;return!1}const L=function(U){var H=typeof U;return U!=null&&(H=="object"||H=="function")},P=typeof ho=="object"&&ho&&ho.Object===Object&&ho;var j=typeof self=="object"&&self&&self.Object===Object&&self;const O=P||j||Function("return this")(),R=function(){return O.Date.now()};var W=/\s/;const Q=function(U){for(var H=U.length;H--&&W.test(U.charAt(H)););return H};var Y=/^\s+/;const V=function(U){return U&&U.slice(0,Q(U)+1).replace(Y,"")},ee=O.Symbol;var J=Object.prototype,ne=J.hasOwnProperty,fe=J.toString,ge=ee?ee.toStringTag:void 0;const Be=function(U){var H=ne.call(U,ge),K=U[ge];try{U[ge]=void 0;var oe=!0}catch{}var Ne=fe.call(U);return oe&&(H?U[ge]=K:delete U[ge]),Ne};var De=Object.prototype.toString;const we=function(U){return De.call(U)};var Te=ee?ee.toStringTag:void 0;const me=function(U){return U==null?U===void 0?"[object Undefined]":"[object Null]":Te&&Te in Object(U)?Be(U):we(U)},ae=function(U){return U!=null&&typeof U=="object"},ue=function(U){return typeof U=="symbol"||ae(U)&&me(U)=="[object Symbol]"};var ve=/^[-+]0x[0-9a-f]+$/i,xe=/^0b[01]+$/i,xt=/^0o[0-7]+$/i,te=parseInt;const Xt=function(U){if(typeof U=="number")return U;if(ue(U))return NaN;if(L(U)){var H=typeof U.valueOf=="function"?U.valueOf():U;U=L(H)?H+"":H}if(typeof U!="string")return U===0?U:+U;U=V(U);var K=xe.test(U);return K||xt.test(U)?te(U.slice(2),K?2:8):ve.test(U)?NaN:+U};var Ae=Math.max,je=Math.min;const Xe=function(U,H,K){var oe,Ne,Ue,$e,We,qt,Gt=0,qs=!1,xr=!1,Io=!0;if(typeof U!="function")throw new TypeError("Expected a function");function tr(Mn){var Vn=oe,Sr=Ne;return oe=Ne=void 0,Gt=Mn,$e=U.apply(Sr,Vn)}function Ai(Mn){var Vn=Mn-qt;return qt===void 0||Vn>=H||Vn<0||xr&&Mn-Gt>=Ue}function Er(){var Mn=R();if(Ai(Mn))return Ze(Mn);We=setTimeout(Er,function(Vn){var Sr=H-(Vn-qt);return xr?je(Sr,Ue-(Vn-Gt)):Sr}(Mn))}function Ze(Mn){return We=void 0,Io&&oe?tr(Mn):(oe=Ne=void 0,$e)}function ko(){var Mn=R(),Vn=Ai(Mn);if(oe=arguments,Ne=this,qt=Mn,Vn){if(We===void 0)return function(Sr){return Gt=Sr,We=setTimeout(Er,H),qs?tr(Sr):$e}(qt);if(xr)return clearTimeout(We),We=setTimeout(Er,H),tr(qt)}return We===void 0&&(We=setTimeout(Er,H)),$e}return H=Xt(H)||0,L(K)&&(qs=!!K.leading,Ue=(xr="maxWait"in K)?Ae(Xt(K.maxWait)||0,H):Ue,Io="trailing"in K?!!K.trailing:Io),ko.cancel=function(){We!==void 0&&clearTimeout(We),Gt=0,oe=qt=Ne=We=void 0},ko.flush=function(){return We===void 0?$e:Ze(R())},ko},_t=function(U,H,K){var oe=!0,Ne=!0;if(typeof U!="function")throw new TypeError("Expected a function");return L(K)&&(oe="leading"in K?!!K.leading:oe,Ne="trailing"in K?!!K.trailing:Ne),Xe(U,H,{leading:oe,maxWait:H,trailing:Ne})},it=function(){this.__data__=[],this.size=0},Et=function(U,H){return U===H||U!=U&&H!=H},In=function(U,H){for(var K=U.length;K--;)if(Et(U[K][0],H))return K;return-1};var Bo=Array.prototype.splice;const Qe=function(U){var H=this.__data__,K=In(H,U);return!(K<0)&&(K==H.length-1?H.pop():Bo.call(H,K,1),--this.size,!0)},Gn=function(U){var H=this.__data__,K=In(H,U);return K<0?void 0:H[K][1]},so=function(U){return In(this.__data__,U)>-1},Vr=function(U,H){var K=this.__data__,oe=In(K,U);return oe<0?(++this.size,K.push([U,H])):K[oe][1]=H,this};function yt(U){var H=-1,K=U==null?0:U.length;for(this.clear();++H<K;){var oe=U[H];this.set(oe[0],oe[1])}}yt.prototype.clear=it,yt.prototype.delete=Qe,yt.prototype.get=Gn,yt.prototype.has=so,yt.prototype.set=Vr;const hn=yt,go=function(){this.__data__=new hn,this.size=0},rn=function(U){var H=this.__data__,K=H.delete(U);return this.size=H.size,K},Dt=function(U){return this.__data__.get(U)},en=function(U){return this.__data__.has(U)},br=function(U){if(!L(U))return!1;var H=me(U);return H=="[object Function]"||H=="[object GeneratorFunction]"||H=="[object AsyncFunction]"||H=="[object Proxy]"},He=O["__core-js_shared__"];var lt=function(){var U=/[^.]+$/.exec(He&&He.keys&&He.keys.IE_PROTO||"");return U?"Symbol(src)_1."+U:""}();const Ht=function(U){return!!lt&&lt in U};var Kn=Function.prototype.toString;const Ct=function(U){if(U!=null){try{return Kn.call(U)}catch{}try{return U+""}catch{}}return""};var $t=/^\[object .+?Constructor\]$/,Oo=Function.prototype,mo=Object.prototype,Cn=Oo.toString,re=mo.hasOwnProperty,se=RegExp("^"+Cn.call(re).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const he=function(U){return!(!L(U)||Ht(U))&&(br(U)?se:$t).test(Ct(U))},ye=function(U,H){return U==null?void 0:U[H]},Ie=function(U,H){var K=ye(U,H);return he(K)?K:void 0},Oe=Ie(O,"Map"),Re=Ie(Object,"create"),Le=function(){this.__data__=Re?Re(null):{},this.size=0},Ee=function(U){var H=this.has(U)&&delete this.__data__[U];return this.size-=H?1:0,H};var pt=Object.prototype.hasOwnProperty;const fn=function(U){var H=this.__data__;if(Re){var K=H[U];return K==="__lodash_hash_undefined__"?void 0:K}return pt.call(H,U)?H[U]:void 0};var ct=Object.prototype.hasOwnProperty;const Wt=function(U){var H=this.__data__;return Re?H[U]!==void 0:ct.call(H,U)},sn=function(U,H){var K=this.__data__;return this.size+=this.has(U)?0:1,K[U]=Re&&H===void 0?"__lodash_hash_undefined__":H,this};function kt(U){var H=-1,K=U==null?0:U.length;for(this.clear();++H<K;){var oe=U[H];this.set(oe[0],oe[1])}}kt.prototype.clear=Le,kt.prototype.delete=Ee,kt.prototype.get=fn,kt.prototype.has=Wt,kt.prototype.set=sn;const Lo=kt,So=function(){this.size=0,this.__data__={hash:new Lo,map:new(Oe||hn),string:new Lo}},Yn=function(U){var H=typeof U;return H=="string"||H=="number"||H=="symbol"||H=="boolean"?U!=="__proto__":U===null},Qn=function(U,H){var K=U.__data__;return Yn(H)?K[typeof H=="string"?"string":"hash"]:K.map},Do=function(U){var H=Qn(this,U).delete(U);return this.size-=H?1:0,H},pi=function(U){return Qn(this,U).get(U)},Ur=function(U){return Qn(this,U).has(U)},Ki=function(U,H){var K=Qn(this,U),oe=K.size;return K.set(U,H),this.size+=K.size==oe?0:1,this};function zn(U){var H=-1,K=U==null?0:U.length;for(this.clear();++H<K;){var oe=U[H];this.set(oe[0],oe[1])}}zn.prototype.clear=So,zn.prototype.delete=Do,zn.prototype.get=pi,zn.prototype.has=Ur,zn.prototype.set=Ki;const tt=zn,ao=function(U,H){var K=this.__data__;if(K instanceof hn){var oe=K.__data__;if(!Oe||oe.length<199)return oe.push([U,H]),this.size=++K.size,this;K=this.__data__=new tt(oe)}return K.set(U,H),this.size=K.size,this};function Fn(U){var H=this.__data__=new hn(U);this.size=H.size}Fn.prototype.clear=go,Fn.prototype.delete=rn,Fn.prototype.get=Dt,Fn.prototype.has=en,Fn.prototype.set=ao;const dt=Fn,tn=function(U,H){for(var K=-1,oe=U==null?0:U.length;++K<oe&&H(U[K],K,U)!==!1;);return U},Zn=function(){try{var U=Ie(Object,"defineProperty");return U({},"",{}),U}catch{}}(),Hr=function(U,H,K){H=="__proto__"&&Zn?Zn(U,H,{configurable:!0,enumerable:!0,value:K,writable:!0}):U[H]=K};var ys=Object.prototype.hasOwnProperty;const Jl=function(U,H,K){var oe=U[H];ys.call(U,H)&&Et(oe,K)&&(K!==void 0||H in U)||Hr(U,H,K)},Cs=function(U,H,K,oe){var Ne=!K;K||(K={});for(var Ue=-1,$e=H.length;++Ue<$e;){var We=H[Ue],qt=oe?oe(K[We],U[We],We,K,U):void 0;qt===void 0&&(qt=U[We]),Ne?Hr(K,We,qt):Jl(K,We,qt)}return K},Jo=function(U,H){for(var K=-1,oe=Array(U);++K<U;)oe[K]=H(K);return oe},gi=function(U){return ae(U)&&me(U)=="[object Arguments]"};var Ma=Object.prototype,As=Ma.hasOwnProperty,Jn=Ma.propertyIsEnumerable;const Ld=gi(function(){return arguments}())?gi:function(U){return ae(U)&&As.call(U,"callee")&&!Jn.call(U,"callee")},Na=Array.isArray,Rd=function(){return!1};var ja=r&&!r.nodeType&&r,kr=ja&&!0&&n&&!n.nodeType&&n,mi=kr&&kr.exports===ja?O.Buffer:void 0;const bi=(mi?mi.isBuffer:void 0)||Rd;var Xl=/^(?:0|[1-9]\d*)$/;const zd=function(U,H){var K=typeof U;return!!(H=H??9007199254740991)&&(K=="number"||K!="symbol"&&Xl.test(U))&&U>-1&&U%1==0&&U<H},Pa=function(U){return typeof U=="number"&&U>-1&&U%1==0&&U<=9007199254740991};var Tt={};Tt["[object Float32Array]"]=Tt["[object Float64Array]"]=Tt["[object Int8Array]"]=Tt["[object Int16Array]"]=Tt["[object Int32Array]"]=Tt["[object Uint8Array]"]=Tt["[object Uint8ClampedArray]"]=Tt["[object Uint16Array]"]=Tt["[object Uint32Array]"]=!0,Tt["[object Arguments]"]=Tt["[object Array]"]=Tt["[object ArrayBuffer]"]=Tt["[object Boolean]"]=Tt["[object DataView]"]=Tt["[object Date]"]=Tt["[object Error]"]=Tt["[object Function]"]=Tt["[object Map]"]=Tt["[object Number]"]=Tt["[object Object]"]=Tt["[object RegExp]"]=Tt["[object Set]"]=Tt["[object String]"]=Tt["[object WeakMap]"]=!1;const Fd=function(U){return ae(U)&&Pa(U.length)&&!!Tt[me(U)]},Ba=function(U){return function(H){return U(H)}};var ec=r&&!r.nodeType&&r,Ro=ec&&!0&&n&&!n.nodeType&&n,xs=Ro&&Ro.exports===ec&&P.process;const ki=function(){try{var U=Ro&&Ro.require&&Ro.require("util").types;return U||xs&&xs.binding&&xs.binding("util")}catch{}}();var Oa=ki&&ki.isTypedArray;const Es=Oa?Ba(Oa):Fd;var tc=Object.prototype.hasOwnProperty;const nc=function(U,H){var K=Na(U),oe=!K&&Ld(U),Ne=!K&&!oe&&bi(U),Ue=!K&&!oe&&!Ne&&Es(U),$e=K||oe||Ne||Ue,We=$e?Jo(U.length,String):[],qt=We.length;for(var Gt in U)!H&&!tc.call(U,Gt)||$e&&(Gt=="length"||Ne&&(Gt=="offset"||Gt=="parent")||Ue&&(Gt=="buffer"||Gt=="byteLength"||Gt=="byteOffset")||zd(Gt,qt))||We.push(Gt);return We};var Vd=Object.prototype;const wr=function(U){var H=U&&U.constructor;return U===(typeof H=="function"&&H.prototype||Vd)},vr=function(U,H){return function(K){return U(H(K))}},Ss=vr(Object.keys,Object);var La=Object.prototype.hasOwnProperty;const $r=function(U){if(!wr(U))return Ss(U);var H=[];for(var K in Object(U))La.call(U,K)&&K!="constructor"&&H.push(K);return H},wi=function(U){return U!=null&&Pa(U.length)&&!br(U)},Ra=function(U){return wi(U)?nc(U):$r(U)},Ds=function(U,H){return U&&Cs(H,Ra(H),U)},za=function(U){var H=[];if(U!=null)for(var K in Object(U))H.push(K);return H};var Ud=Object.prototype.hasOwnProperty;const Fa=function(U){if(!L(U))return za(U);var H=wr(U),K=[];for(var oe in U)(oe!="constructor"||!H&&Ud.call(U,oe))&&K.push(oe);return K},bo=function(U){return wi(U)?nc(U,!0):Fa(U)},Hd=function(U,H){return U&&Cs(H,bo(H),U)};var Ts=r&&!r.nodeType&&r,Is=Ts&&!0&&n&&!n.nodeType&&n,oc=Is&&Is.exports===Ts?O.Buffer:void 0,rc=oc?oc.allocUnsafe:void 0;const Va=function(U,H){if(H)return U.slice();var K=U.length,oe=rc?rc(K):new U.constructor(K);return U.copy(oe),oe},$d=function(U,H){var K=-1,oe=U.length;for(H||(H=Array(oe));++K<oe;)H[K]=U[K];return H},ic=function(U,H){for(var K=-1,oe=U==null?0:U.length,Ne=0,Ue=[];++K<oe;){var $e=U[K];H($e,K,U)&&(Ue[Ne++]=$e)}return Ue},Ua=function(){return[]};var sc=Object.prototype.propertyIsEnumerable,To=Object.getOwnPropertySymbols;const Ha=To?function(U){return U==null?[]:(U=Object(U),ic(To(U),function(H){return sc.call(U,H)}))}:Ua,$a=function(U,H){return Cs(U,Ha(U),H)},Ms=function(U,H){for(var K=-1,oe=H.length,Ne=U.length;++K<oe;)U[Ne+K]=H[K];return U},At=vr(Object.getPrototypeOf,Object),Xo=Object.getOwnPropertySymbols?function(U){for(var H=[];U;)Ms(H,Ha(U)),U=At(U);return H}:Ua,Wa=function(U,H){return Cs(U,Xo(U),H)},Ns=function(U,H,K){var oe=H(U);return Na(U)?oe:Ms(oe,K(U))},er=function(U){return Ns(U,Ra,Ha)},qa=function(U){return Ns(U,bo,Xo)},_r=Ie(O,"DataView"),js=Ie(O,"Promise"),vi=Ie(O,"Set"),yr=Ie(O,"WeakMap");var Ga="[object Map]",ac="[object Promise]",Ps="[object Set]",lc="[object WeakMap]",cc="[object DataView]",Wd=Ct(_r),Bs=Ct(Oe),Ka=Ct(js),qd=Ct(vi),Gd=Ct(yr),zo=me;(_r&&zo(new _r(new ArrayBuffer(1)))!=cc||Oe&&zo(new Oe)!=Ga||js&&zo(js.resolve())!=ac||vi&&zo(new vi)!=Ps||yr&&zo(new yr)!=lc)&&(zo=function(U){var H=me(U),K=H=="[object Object]"?U.constructor:void 0,oe=K?Ct(K):"";if(oe)switch(oe){case Wd:return cc;case Bs:return Ga;case Ka:return ac;case qd:return Ps;case Gd:return lc}return H});const Os=zo;var _i=Object.prototype.hasOwnProperty;const Kd=function(U){var H=U.length,K=new U.constructor(H);return H&&typeof U[0]=="string"&&_i.call(U,"index")&&(K.index=U.index,K.input=U.input),K},Ya=O.Uint8Array,Yi=function(U){var H=new U.constructor(U.byteLength);return new Ya(H).set(new Ya(U)),H},dc=function(U,H){var K=H?Yi(U.buffer):U.buffer;return new U.constructor(K,U.byteOffset,U.byteLength)};var Ls=/\w*$/;const Qa=function(U){var H=new U.constructor(U.source,Ls.exec(U));return H.lastIndex=U.lastIndex,H};var Rs=ee?ee.prototype:void 0,zs=Rs?Rs.valueOf:void 0;const Qi=function(U){return zs?Object(zs.call(U)):{}},Yd=function(U,H){var K=H?Yi(U.buffer):U.buffer;return new U.constructor(K,U.byteOffset,U.length)},Za=function(U,H,K){var oe=U.constructor;switch(H){case"[object ArrayBuffer]":return Yi(U);case"[object Boolean]":case"[object Date]":return new oe(+U);case"[object DataView]":return dc(U,K);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Yd(U,K);case"[object Map]":case"[object Set]":return new oe;case"[object Number]":case"[object String]":return new oe(U);case"[object RegExp]":return Qa(U);case"[object Symbol]":return Qi(U)}};var Zi=Object.create;const uc=function(){function U(){}return function(H){if(!L(H))return{};if(Zi)return Zi(H);U.prototype=H;var K=new U;return U.prototype=void 0,K}}(),Ja=function(U){return typeof U.constructor!="function"||wr(U)?{}:uc(At(U))},Xa=function(U){return ae(U)&&Os(U)=="[object Map]"};var el=ki&&ki.isMap;const tl=el?Ba(el):Xa,Fs=function(U){return ae(U)&&Os(U)=="[object Set]"};var nl=ki&&ki.isSet;const Cr=nl?Ba(nl):Fs;var Vs="[object Arguments]",Us="[object Function]",Hs="[object Object]",wt={};wt[Vs]=wt["[object Array]"]=wt["[object ArrayBuffer]"]=wt["[object DataView]"]=wt["[object Boolean]"]=wt["[object Date]"]=wt["[object Float32Array]"]=wt["[object Float64Array]"]=wt["[object Int8Array]"]=wt["[object Int16Array]"]=wt["[object Int32Array]"]=wt["[object Map]"]=wt["[object Number]"]=wt[Hs]=wt["[object RegExp]"]=wt["[object Set]"]=wt["[object String]"]=wt["[object Symbol]"]=wt["[object Uint8Array]"]=wt["[object Uint8ClampedArray]"]=wt["[object Uint16Array]"]=wt["[object Uint32Array]"]=!0,wt["[object Error]"]=wt[Us]=wt["[object WeakMap]"]=!1;const ol=function U(H,K,oe,Ne,Ue,$e){var We,qt=1&K,Gt=2&K,qs=4&K;if(oe&&(We=Ue?oe(H,Ne,Ue,$e):oe(H)),We!==void 0)return We;if(!L(H))return H;var xr=Na(H);if(xr){if(We=Kd(H),!qt)return $d(H,We)}else{var Io=Os(H),tr=Io==Us||Io=="[object GeneratorFunction]";if(bi(H))return Va(H,qt);if(Io==Hs||Io==Vs||tr&&!Ue){if(We=Gt||tr?{}:Ja(H),!qt)return Gt?Wa(H,Hd(We,H)):$a(H,Ds(We,H))}else{if(!wt[Io])return Ue?H:{};We=Za(H,Io,qt)}}$e||($e=new dt);var Ai=$e.get(H);if(Ai)return Ai;$e.set(H,We),Cr(H)?H.forEach(function(Ze){We.add(U(Ze,K,oe,Ze,H,$e))}):tl(H)&&H.forEach(function(Ze,ko){We.set(ko,U(Ze,K,oe,ko,H,$e))});var Er=xr?void 0:(qs?Gt?qa:er:Gt?bo:Ra)(H);return tn(Er||H,function(Ze,ko){Er&&(Ze=H[ko=Ze]),Jl(We,ko,U(Ze,K,oe,ko,H,$e))}),We},rl=function(U,H){return ol(U,5,H=typeof H=="function"?H:void 0)};var hc=Function.prototype,fc=Object.prototype,pc=hc.toString,Qd=fc.hasOwnProperty,gc=pc.call(Object);const Zd=function(U){if(!ae(U)||me(U)!="[object Object]")return!1;var H=At(U);if(H===null)return!0;var K=Qd.call(H,"constructor")&&H.constructor;return typeof K=="function"&&K instanceof K&&pc.call(K)==gc},mc=function(U){return ae(U)&&U.nodeType===1&&!Zd(U)};class Ar extends _{constructor(H,K={}){super(K),this._editor=null,this._throttledSave=_t(this._save.bind(this),typeof K.saveInterval=="number"?K.saveInterval:5e3),H&&(this._creator=(oe,Ne)=>H.create(oe,Ne)),this._destructor=oe=>oe.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(H){this._creator=H}setDestructor(H){this._destructor=H}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(H=>{console.error("An error happened during the editor destroying.",H)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const H=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,H,H.context)}}).then(()=>{this._fire("restart")})}create(H=this._elementOrData,K=this._config,oe){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=H,this._config=this._cloneEditorConfiguration(K)||{},this._config.context=oe,this._creator(H,this._config))).then(Ne=>{this._editor=Ne,Ne.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=Ne.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const H=this._editor;return this._editor=null,H.model.document.off("change:data",this._throttledSave),this._destructor(H)})}_save(){const H=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=H}catch(K){console.error(K,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(H){this._excludedProps=H}_getData(){const H={};for(const K of this._editor.model.document.getRootNames())H[K]=this._editor.data.get({rootName:K});return H}_isErrorComingFromThisItem(H){return T(this._editor,H.context,this._excludedProps)}_cloneEditorConfiguration(H){return rl(H,(K,oe)=>mc(K)||oe==="context"?K:void 0)}}const Fo=Symbol("MainQueueId");class $s extends _{constructor(H,K={}){super(K),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new Jd,this._watchdogConfig=K,this._creator=oe=>H.create(oe),this._destructor=oe=>oe.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(H){this._creator=H}setDestructor(H){this._destructor=H}get context(){return this._context}create(H={}){return this._actionQueues.enqueue(Fo,()=>(this._contextConfig=H,this._create()))}getItem(H){return this._getWatchdog(H)._item}getItemState(H){return this._getWatchdog(H).state}add(H){const K=Ji(H);return Promise.all(K.map(oe=>this._actionQueues.enqueue(oe.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let Ne;if(this._watchdogs.has(oe.id))throw new Error(`Item with the given id is already added: '${oe.id}'.`);if(oe.type==="editor")return Ne=new Ar(null,this._watchdogConfig),Ne.setCreator(oe.creator),Ne._setExcludedProperties(this._contextProps),oe.destructor&&Ne.setDestructor(oe.destructor),this._watchdogs.set(oe.id,Ne),Ne.on("error",(Ue,{error:$e,causesRestart:We})=>{this._fire("itemError",{itemId:oe.id,error:$e}),We&&this._actionQueues.enqueue(oe.id,()=>new Promise(qt=>{const Gt=()=>{Ne.off("restart",Gt),this._fire("itemRestart",{itemId:oe.id}),qt()};Ne.on("restart",Gt)}))}),Ne.create(oe.sourceElementOrData,oe.config,this._context);throw new Error(`Not supported item type: '${oe.type}'.`)})))}remove(H){const K=Ji(H);return Promise.all(K.map(oe=>this._actionQueues.enqueue(oe,()=>{const Ne=this._getWatchdog(oe);return this._watchdogs.delete(oe),Ne.destroy()})))}destroy(){return this._actionQueues.enqueue(Fo,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Fo,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(H=>{console.error("An error happened during destroying the context or items.",H)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(H=>(this._context=H,this._contextProps=C(this._context),Promise.all(Array.from(this._watchdogs.values()).map(K=>(K._setExcludedProperties(this._contextProps),K.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const H=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(K=>K.destroy())).then(()=>this._destructor(H))})}_getWatchdog(H){const K=this._watchdogs.get(H);if(!K)throw new Error(`Item with the given id was not registered: ${H}.`);return K}_isErrorComingFromThisItem(H){for(const K of this._watchdogs.values())if(K._isErrorComingFromThisItem(H))return!1;return T(this._context,H.context)}}class Jd{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(H){this._onEmptyCallbacks.push(H)}enqueue(H,K){const oe=H===Fo;this._activeActions++,this._queues.get(H)||this._queues.set(H,Promise.resolve());const Ne=(oe?Promise.all(this._queues.values()):Promise.all([this._queues.get(Fo),this._queues.get(H)])).then(K),Ue=Ne.catch(()=>{});return this._queues.set(H,Ue),Ne.finally(()=>{this._activeActions--,this._queues.get(H)===Ue&&this._activeActions===0&&this._onEmptyCallbacks.forEach($e=>$e())})}}function Ji(U){return Array.isArray(U)?U:[U]}const Ws=g().createContext("contextWatchdog");class il extends g().Component{constructor(H,K){super(H,K),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(H){return this._shouldComponentUpdate(H)}async _shouldComponentUpdate(H){return H.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(H.config)),H.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(H.config),!0):this.props.children!==H.children}render(){return g().createElement(Ws.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(H){this.contextWatchdog=new $s(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(K,oe)=>{this.props.onError(oe.error,{phase:"runtime",willContextRestart:oe.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(H).catch(K=>{this.props.onError(K,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}il.defaultProps={isLayoutReady:!0,onError:(U,H)=>console.error(U,H)},il.propTypes={id:A().string,isLayoutReady:A().bool,context:A().func,watchdogConfig:A().object,config:A().object,onReady:A().func,onError:A().func};const yi="Lock from React integration (@ckeditor/ckeditor5-react)";class Ci extends g().Component{constructor(H){super(H),this.editorDestructionInProgress=null,this.domContainer=g().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:K}=window;if(K){const[oe]=K.split(".").map(Number);oe<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.props.disableWatchdog?this.instance:this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(H){return!!this.editor&&(H.id!==this.props.id||H.disableWatchdog!==this.props.disableWatchdog||(this._shouldUpdateEditor(H)&&this.editor.data.set(H.data),"disabled"in H&&(H.disabled?this.editor.enableReadOnlyMode(yi):this.editor.disableReadOnlyMode(yi)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return g().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.props.disableWatchdog?this.instance=await this._createEditor(this.domContainer.current,this._getConfig()):this.watchdog||(this.context instanceof $s?this.watchdog=new bc(this.context):this.watchdog=new Ci._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((H,K)=>this._createEditor(H,K)),this.watchdog.on("error",(H,{error:K,causesRestart:oe})=>{(this.props.onError||console.error)(K,{phase:"runtime",willEditorRestart:oe})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(H=>{(this.props.onError||console.error)(H,{phase:"initialization",willEditorRestart:!1})}))}_createEditor(H,K){return this.props.editor.create(H,K).then(oe=>{"disabled"in this.props&&this.props.disabled&&oe.enableReadOnlyMode(yi);const Ne=oe.model.document,Ue=oe.editing.view.document;return Ne.on("change:data",$e=>{this.props.onChange&&this.props.onChange($e,oe)}),Ue.on("focus",$e=>{this.props.onFocus&&this.props.onFocus($e,oe)}),Ue.on("blur",$e=>{this.props.onBlur&&this.props.onBlur($e,oe)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(oe)}),oe})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(H=>{setTimeout(async()=>this.watchdog?(await this.watchdog.destroy(),this.watchdog=null,H()):this.instance?(await this.instance.destroy(),this.instance=null,H()):void H())})}_shouldUpdateEditor(H){return this.props.data!==H.data&&this.editor.data.get()!==H.data}_getConfig(){const H=this.props.config||{};return this.props.data&&H.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...H,initialData:H.initialData||this.props.data||""}}}Ci.contextType=Ws,Ci.propTypes={editor:A().func.isRequired,data:A().string,config:A().object,disableWatchdog:A().bool,watchdogConfig:A().object,onChange:A().func,onReady:A().func,onFocus:A().func,onBlur:A().func,onError:A().func,disabled:A().bool,id:A().any},Ci._EditorWatchdog=Ar;class bc{constructor(H){this._contextWatchdog=H,this._id=function(){const K=4294967296*Math.random()>>>0,oe=4294967296*Math.random()>>>0,Ne=4294967296*Math.random()>>>0,Ue=4294967296*Math.random()>>>0;return"e"+x[K>>0&255]+x[K>>8&255]+x[K>>16&255]+x[K>>24&255]+x[oe>>0&255]+x[oe>>8&255]+x[oe>>16&255]+x[oe>>24&255]+x[Ne>>0&255]+x[Ne>>8&255]+x[Ne>>16&255]+x[Ne>>24&255]+x[Ue>>0&255]+x[Ue>>8&255]+x[Ue>>16&255]+x[Ue>>24&255]}()}setCreator(H){this._creator=H}create(H,K){return this._contextWatchdog.add({sourceElementOrData:H,config:K,creator:this._creator,id:this._id,type:"editor"})}on(H,K){this._contextWatchdog.on("itemError",(oe,{itemId:Ne,error:Ue})=>{Ne===this._id&&K(null,{error:Ue,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}})(),b})())})(Vp,Vp.exports);var jI=Vp.exports,Up={exports:{}};Up.exports;(function(n,r){(function(l){const d=l.en=l.en||{};d.dictionary=Object.assign(d.dictionary||{},{"%0 of %1":"%0 of %1",Accept:"Accept","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent",Insert:"Insert","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert image via URL":"Insert image via URL","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Inset:"Inset",Italic:"Italic","Justify cell text":"Justify cell text","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough",Style:"Style",Subscript:"Subscript",Superscript:"Superscript","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(l,d){n.exports=d()}(self,()=>(()=>{var l={4959:(b,k,g)=>{const v=g(1103),A={};for(const _ of Object.keys(v))A[v[_]]=_;const x={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};b.exports=x;for(const _ of Object.keys(x)){if(!("channels"in x[_]))throw new Error("missing channels property: "+_);if(!("labels"in x[_]))throw new Error("missing channel labels property: "+_);if(x[_].labels.length!==x[_].channels)throw new Error("channel and label counts mismatch: "+_);const{channels:C,labels:M}=x[_];delete x[_].channels,delete x[_].labels,Object.defineProperty(x[_],"channels",{value:C}),Object.defineProperty(x[_],"labels",{value:M})}x.rgb.hsl=function(_){const C=_[0]/255,M=_[1]/255,T=_[2]/255,L=Math.min(C,M,T),P=Math.max(C,M,T),j=P-L;let O,R;P===L?O=0:C===P?O=(M-T)/j:M===P?O=2+(T-C)/j:T===P&&(O=4+(C-M)/j),O=Math.min(60*O,360),O<0&&(O+=360);const W=(L+P)/2;return R=P===L?0:W<=.5?j/(P+L):j/(2-P-L),[O,100*R,100*W]},x.rgb.hsv=function(_){let C,M,T,L,P;const j=_[0]/255,O=_[1]/255,R=_[2]/255,W=Math.max(j,O,R),Q=W-Math.min(j,O,R),Y=function(V){return(W-V)/6/Q+.5};return Q===0?(L=0,P=0):(P=Q/W,C=Y(j),M=Y(O),T=Y(R),j===W?L=T-M:O===W?L=.3333333333333333+C-T:R===W&&(L=.6666666666666666+M-C),L<0?L+=1:L>1&&(L-=1)),[360*L,100*P,100*W]},x.rgb.hwb=function(_){const C=_[0],M=_[1];let T=_[2];const L=x.rgb.hsl(_)[0],P=1/255*Math.min(C,Math.min(M,T));return T=1-.00392156862745098*Math.max(C,Math.max(M,T)),[L,100*P,100*T]},x.rgb.cmyk=function(_){const C=_[0]/255,M=_[1]/255,T=_[2]/255,L=Math.min(1-C,1-M,1-T);return[100*((1-C-L)/(1-L)||0),100*((1-M-L)/(1-L)||0),100*((1-T-L)/(1-L)||0),100*L]},x.rgb.keyword=function(_){const C=A[_];if(C)return C;let M,T=1/0;for(const j of Object.keys(v)){const O=v[j],R=(P=O,((L=_)[0]-P[0])**2+(L[1]-P[1])**2+(L[2]-P[2])**2);R<T&&(T=R,M=j)}var L,P;return M},x.keyword.rgb=function(_){return v[_]},x.rgb.xyz=function(_){let C=_[0]/255,M=_[1]/255,T=_[2]/255;return C=C>.04045?((C+.055)/1.055)**2.4:C/12.92,M=M>.04045?((M+.055)/1.055)**2.4:M/12.92,T=T>.04045?((T+.055)/1.055)**2.4:T/12.92,[100*(.4124*C+.3576*M+.1805*T),100*(.2126*C+.7152*M+.0722*T),100*(.0193*C+.1192*M+.9505*T)]},x.rgb.lab=function(_){const C=x.rgb.xyz(_);let M=C[0],T=C[1],L=C[2];return M/=95.047,T/=100,L/=108.883,M=M>.008856?M**.3333333333333333:7.787*M+.13793103448275862,T=T>.008856?T**.3333333333333333:7.787*T+.13793103448275862,L=L>.008856?L**.3333333333333333:7.787*L+.13793103448275862,[116*T-16,500*(M-T),200*(T-L)]},x.hsl.rgb=function(_){const C=_[0]/360,M=_[1]/100,T=_[2]/100;let L,P,j;if(M===0)return j=255*T,[j,j,j];L=T<.5?T*(1+M):T+M-T*M;const O=2*T-L,R=[0,0,0];for(let W=0;W<3;W++)P=C+.3333333333333333*-(W-1),P<0&&P++,P>1&&P--,j=6*P<1?O+6*(L-O)*P:2*P<1?L:3*P<2?O+(L-O)*(.6666666666666666-P)*6:O,R[W]=255*j;return R},x.hsl.hsv=function(_){const C=_[0];let M=_[1]/100,T=_[2]/100,L=M;const P=Math.max(T,.01);return T*=2,M*=T<=1?T:2-T,L*=P<=1?P:2-P,[C,100*(T===0?2*L/(P+L):2*M/(T+M)),100*((T+M)/2)]},x.hsv.rgb=function(_){const C=_[0]/60,M=_[1]/100;let T=_[2]/100;const L=Math.floor(C)%6,P=C-Math.floor(C),j=255*T*(1-M),O=255*T*(1-M*P),R=255*T*(1-M*(1-P));switch(T*=255,L){case 0:return[T,R,j];case 1:return[O,T,j];case 2:return[j,T,R];case 3:return[j,O,T];case 4:return[R,j,T];case 5:return[T,j,O]}},x.hsv.hsl=function(_){const C=_[0],M=_[1]/100,T=_[2]/100,L=Math.max(T,.01);let P,j;j=(2-M)*T;const O=(2-M)*L;return P=M*L,P/=O<=1?O:2-O,P=P||0,j/=2,[C,100*P,100*j]},x.hwb.rgb=function(_){const C=_[0]/360;let M=_[1]/100,T=_[2]/100;const L=M+T;let P;L>1&&(M/=L,T/=L);const j=Math.floor(6*C),O=1-T;P=6*C-j,1&j&&(P=1-P);const R=M+P*(O-M);let W,Q,Y;switch(j){default:case 6:case 0:W=O,Q=R,Y=M;break;case 1:W=R,Q=O,Y=M;break;case 2:W=M,Q=O,Y=R;break;case 3:W=M,Q=R,Y=O;break;case 4:W=R,Q=M,Y=O;break;case 5:W=O,Q=M,Y=R}return[255*W,255*Q,255*Y]},x.cmyk.rgb=function(_){const C=_[0]/100,M=_[1]/100,T=_[2]/100,L=_[3]/100;return[255*(1-Math.min(1,C*(1-L)+L)),255*(1-Math.min(1,M*(1-L)+L)),255*(1-Math.min(1,T*(1-L)+L))]},x.xyz.rgb=function(_){const C=_[0]/100,M=_[1]/100,T=_[2]/100;let L,P,j;return L=3.2406*C+-1.5372*M+-.4986*T,P=-.9689*C+1.8758*M+.0415*T,j=.0557*C+-.204*M+1.057*T,L=L>.0031308?1.055*L**.4166666666666667-.055:12.92*L,P=P>.0031308?1.055*P**.4166666666666667-.055:12.92*P,j=j>.0031308?1.055*j**.4166666666666667-.055:12.92*j,L=Math.min(Math.max(0,L),1),P=Math.min(Math.max(0,P),1),j=Math.min(Math.max(0,j),1),[255*L,255*P,255*j]},x.xyz.lab=function(_){let C=_[0],M=_[1],T=_[2];return C/=95.047,M/=100,T/=108.883,C=C>.008856?C**.3333333333333333:7.787*C+.13793103448275862,M=M>.008856?M**.3333333333333333:7.787*M+.13793103448275862,T=T>.008856?T**.3333333333333333:7.787*T+.13793103448275862,[116*M-16,500*(C-M),200*(M-T)]},x.lab.xyz=function(_){let C,M,T;M=(_[0]+16)/116,C=_[1]/500+M,T=M-_[2]/200;const L=M**3,P=C**3,j=T**3;return M=L>.008856?L:(M-.13793103448275862)/7.787,C=P>.008856?P:(C-.13793103448275862)/7.787,T=j>.008856?j:(T-.13793103448275862)/7.787,C*=95.047,M*=100,T*=108.883,[C,M,T]},x.lab.lch=function(_){const C=_[0],M=_[1],T=_[2];let L;return L=360*Math.atan2(T,M)/2/Math.PI,L<0&&(L+=360),[C,Math.sqrt(M*M+T*T),L]},x.lch.lab=function(_){const C=_[0],M=_[1],T=_[2]/360*2*Math.PI;return[C,M*Math.cos(T),M*Math.sin(T)]},x.rgb.ansi16=function(_,C=null){const[M,T,L]=_;let P=C===null?x.rgb.hsv(_)[2]:C;if(P=Math.round(P/50),P===0)return 30;let j=30+(Math.round(L/255)<<2|Math.round(T/255)<<1|Math.round(M/255));return P===2&&(j+=60),j},x.hsv.ansi16=function(_){return x.rgb.ansi16(x.hsv.rgb(_),_[2])},x.rgb.ansi256=function(_){const C=_[0],M=_[1],T=_[2];return C===M&&M===T?C<8?16:C>248?231:Math.round((C-8)/247*24)+232:16+36*Math.round(C/255*5)+6*Math.round(M/255*5)+Math.round(T/255*5)},x.ansi16.rgb=function(_){let C=_%10;if(C===0||C===7)return _>50&&(C+=3.5),C=C/10.5*255,[C,C,C];const M=.5*(1+~~(_>50));return[(1&C)*M*255,(C>>1&1)*M*255,(C>>2&1)*M*255]},x.ansi256.rgb=function(_){if(_>=232){const M=10*(_-232)+8;return[M,M,M]}let C;return _-=16,[Math.floor(_/36)/5*255,Math.floor((C=_%36)/6)/5*255,C%6/5*255]},x.rgb.hex=function(_){const C=(((255&Math.round(_[0]))<<16)+((255&Math.round(_[1]))<<8)+(255&Math.round(_[2]))).toString(16).toUpperCase();return"000000".substring(C.length)+C},x.hex.rgb=function(_){const C=_.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!C)return[0,0,0];let M=C[0];C[0].length===3&&(M=M.split("").map(L=>L+L).join(""));const T=parseInt(M,16);return[T>>16&255,T>>8&255,255&T]},x.rgb.hcg=function(_){const C=_[0]/255,M=_[1]/255,T=_[2]/255,L=Math.max(Math.max(C,M),T),P=Math.min(Math.min(C,M),T),j=L-P;let O,R;return O=j<1?P/(1-j):0,R=j<=0?0:L===C?(M-T)/j%6:L===M?2+(T-C)/j:4+(C-M)/j,R/=6,R%=1,[360*R,100*j,100*O]},x.hsl.hcg=function(_){const C=_[1]/100,M=_[2]/100,T=M<.5?2*C*M:2*C*(1-M);let L=0;return T<1&&(L=(M-.5*T)/(1-T)),[_[0],100*T,100*L]},x.hsv.hcg=function(_){const C=_[1]/100,M=_[2]/100,T=C*M;let L=0;return T<1&&(L=(M-T)/(1-T)),[_[0],100*T,100*L]},x.hcg.rgb=function(_){const C=_[0]/360,M=_[1]/100,T=_[2]/100;if(M===0)return[255*T,255*T,255*T];const L=[0,0,0],P=C%1*6,j=P%1,O=1-j;let R=0;switch(Math.floor(P)){case 0:L[0]=1,L[1]=j,L[2]=0;break;case 1:L[0]=O,L[1]=1,L[2]=0;break;case 2:L[0]=0,L[1]=1,L[2]=j;break;case 3:L[0]=0,L[1]=O,L[2]=1;break;case 4:L[0]=j,L[1]=0,L[2]=1;break;default:L[0]=1,L[1]=0,L[2]=O}return R=(1-M)*T,[255*(M*L[0]+R),255*(M*L[1]+R),255*(M*L[2]+R)]},x.hcg.hsv=function(_){const C=_[1]/100,M=C+_[2]/100*(1-C);let T=0;return M>0&&(T=C/M),[_[0],100*T,100*M]},x.hcg.hsl=function(_){const C=_[1]/100,M=_[2]/100*(1-C)+.5*C;let T=0;return M>0&&M<.5?T=C/(2*M):M>=.5&&M<1&&(T=C/(2*(1-M))),[_[0],100*T,100*M]},x.hcg.hwb=function(_){const C=_[1]/100,M=C+_[2]/100*(1-C);return[_[0],100*(M-C),100*(1-M)]},x.hwb.hcg=function(_){const C=_[1]/100,M=1-_[2]/100,T=M-C;let L=0;return T<1&&(L=(M-T)/(1-T)),[_[0],100*T,100*L]},x.apple.rgb=function(_){return[_[0]/65535*255,_[1]/65535*255,_[2]/65535*255]},x.rgb.apple=function(_){return[_[0]/255*65535,_[1]/255*65535,_[2]/255*65535]},x.gray.rgb=function(_){return[_[0]/100*255,_[0]/100*255,_[0]/100*255]},x.gray.hsl=function(_){return[0,0,_[0]]},x.gray.hsv=x.gray.hsl,x.gray.hwb=function(_){return[0,100,_[0]]},x.gray.cmyk=function(_){return[0,0,0,_[0]]},x.gray.lab=function(_){return[_[0],0,0]},x.gray.hex=function(_){const C=255&Math.round(_[0]/100*255),M=((C<<16)+(C<<8)+C).toString(16).toUpperCase();return"000000".substring(M.length)+M},x.rgb.gray=function(_){return[(_[0]+_[1]+_[2])/3/255*100]}},841:(b,k,g)=>{const v=g(4959),A=g(9325),x={};Object.keys(v).forEach(_=>{x[_]={},Object.defineProperty(x[_],"channels",{value:v[_].channels}),Object.defineProperty(x[_],"labels",{value:v[_].labels});const C=A(_);Object.keys(C).forEach(M=>{const T=C[M];x[_][M]=function(L){const P=function(...j){const O=j[0];if(O==null)return O;O.length>1&&(j=O);const R=L(j);if(typeof R=="object")for(let W=R.length,Q=0;Q<W;Q++)R[Q]=Math.round(R[Q]);return R};return"conversion"in L&&(P.conversion=L.conversion),P}(T),x[_][M].raw=function(L){const P=function(...j){const O=j[0];return O==null?O:(O.length>1&&(j=O),L(j))};return"conversion"in L&&(P.conversion=L.conversion),P}(T)})}),b.exports=x},9325:(b,k,g)=>{const v=g(4959);function A(C){const M=function(){const L={},P=Object.keys(v);for(let j=P.length,O=0;O<j;O++)L[P[O]]={distance:-1,parent:null};return L}(),T=[C];for(M[C].distance=0;T.length;){const L=T.pop(),P=Object.keys(v[L]);for(let j=P.length,O=0;O<j;O++){const R=P[O],W=M[R];W.distance===-1&&(W.distance=M[L].distance+1,W.parent=L,T.unshift(R))}}return M}function x(C,M){return function(T){return M(C(T))}}function _(C,M){const T=[M[C].parent,C];let L=v[M[C].parent][C],P=M[C].parent;for(;M[P].parent;)T.unshift(M[P].parent),L=x(v[M[P].parent][P],L),P=M[P].parent;return L.conversion=T,L}b.exports=function(C){const M=A(C),T={},L=Object.keys(M);for(let P=L.length,j=0;j<P;j++){const O=L[j];M[O].parent!==null&&(T[O]=_(O,M))}return T}},1103:b=>{b.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},8603:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const C=_},3062:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const C=_},903:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CChCA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;
}
`],sourceRoot:""}]);const C=_},3143:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},4717:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const C=_},9315:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const C=_},8733:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const C=_},3508:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const C=_},2640:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const C=_},3535:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-image-insert__panel{padding:var(--ck-spacing-large)}.ck.ck-image-insert__ck-finder-button{border:1px solid #ccc;border-radius:var(--ck-border-radius);display:block;margin:var(--ck-spacing-standard) auto;width:100%}.ck.ck-splitbutton>.ck-file-dialog-button.ck-button{border:none;margin:0;padding:0}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css"],names:[],mappings:"AAKA,2BACC,+BACD,CAEA,sCAIC,qBAAiC,CACjC,qCAAsC,CAJtC,aAAc,CAEd,sCAAuC,CADvC,UAID,CAGA,oDAGC,WAAY,CADZ,QAAS,CADT,SAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert__panel {
	padding: var(--ck-spacing-large);
}

.ck.ck-image-insert__ck-finder-button {
	display: block;
	width: 100%;
	margin: var(--ck-spacing-standard) auto;
	border: 1px solid hsl(0, 0%, 80%);
	border-radius: var(--ck-border-radius);
}

/* https://github.com/ckeditor/ckeditor5/issues/7986 */
.ck.ck-splitbutton > .ck-file-dialog-button.ck-button {
	padding: 0;
	margin: 0;
	border: none;
}
`],sourceRoot:""}]);const C=_},1568:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-image-insert-form:focus{outline:none}.ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-image-insert-form__action-row{margin-top:var(--ck-spacing-standard)}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsertformrowview.css"],names:[],mappings:"AAMC,+BAEC,YACD,CAGD,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAmBD,CAhBC,iCACC,WACD,CAEA,kDACC,qCAUD,CARC,sIAEC,sBACD,CAEA,+EACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-form {
	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}
}

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-image-insert-form__action-row {
		margin-top: var(--ck-spacing-standard);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const C=_},6270:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAKA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const C=_},5083:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},4036:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const C=_},3773:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const C=_},3689:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const C=_},1905:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},9773:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const C=_},2347:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},7754:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},111:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const C=_},4721:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,wDAAyD,CAFzD,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,yDACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-large);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: 0 var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const C=_},5730:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const C=_},4564:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},6082:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const C=_},2417:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const C=_},1199:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out,background .25s ease-in-out,border .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable .todo-list .todo-list__label>input{cursor:pointer}.ck-editor__editable .todo-list .todo-list__label>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAEA,uBACC,eA0ED,CAxEC,0BACC,iBAKD,CAHC,qCACC,cACD,CAIA,+CACC,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqDD,CAxCC,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,0FAAgG,CAJhG,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAIF,wEACC,qBACD,CAKF,6CACC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAED,CAMA,wDACC,cAKD,CAHC,qEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

.ck-content .todo-list {
	list-style: none;

	& li {
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			-webkit-appearance: none;
			display: inline-block;
			position: relative;
			width: var(--ck-todo-list-checkmark-size);
			height: var(--ck-todo-list-checkmark-size);
			vertical-align: middle;

			/* Needed on iOS */
			border: 0;

			/* LTR styles */
			left: -25px;
			margin-right: -15px;
			right: 0;
			margin-left: 0;

			&::before {
				display: block;
				position: absolute;
				box-sizing: border-box;
				content: '';
				width: 100%;
				height: 100%;
				border: 1px solid hsl(0, 0%, 20%);
				border-radius: 2px;
				transition: 250ms ease-in-out box-shadow, 250ms ease-in-out background, 250ms ease-in-out border;
			}

			&::after {
				display: block;
				position: absolute;
				box-sizing: content-box;
				pointer-events: none;
				content: '';

				/* Calculate tick position, size and border-width proportional to the checkmark size. */
				left: calc( var(--ck-todo-list-checkmark-size) / 3 );
				top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
				width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
				height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
				border-style: solid;
				border-color: transparent;
				border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
				transform: rotate(45deg);
			}

			&[checked] {
				&::before {
					background: hsl(126, 64%, 41%);
					border-color: hsl(126, 64%, 41%);
				}

				&::after {
					border-color: hsl(0, 0%, 100%);
				}
			}
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}
	}
}

/* RTL styles */
[dir="rtl"] .todo-list .todo-list__label > input {
	left: 0;
	margin-right: 0;
	right: -25px;
	margin-left: -15px;
}

/*
 * To-do list should be interactive only during the editing
 * (https://github.com/ckeditor/ckeditor5/issues/2090).
 */
.ck-editor__editable .todo-list .todo-list__label > input {
	cursor: pointer;

	&:hover::before {
		box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
	}
}
`],sourceRoot:""}]);const C=_},4652:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const C=_},7442:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},9292:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},7368:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},4070:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},9247:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const C=_},1613:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const C=_},6306:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const C=_},2128:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`],sourceRoot:""}]);const C=_},5087:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},4101:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const C=_},3881:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const C=_},6237:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},7341:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},6945:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},4906:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const C=_},5332:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const C=_},6781:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,+DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-selector__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const C=_},3398:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const C=_},4157:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const C=_},5485:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},3949:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},7686:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},7339:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const C=_},9688:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const C=_},8847:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const C=_},6574:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},4879:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const C=_},3662:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const C=_},2577:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},1046:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},8793:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const C=_},4650:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const C=_},7676:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const C=_},5868:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const C=_},6764:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const C=_},9695:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const C=_},5542:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const C=_},3332:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const C=_},4793:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-modal) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-modal) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const C=_},3488:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const C=_},8506:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const C=_},4921:(b,k,g)=>{g.d(k,{Z:()=>C});var v=g(1799),A=g.n(v),x=g(2609),_=g.n(x)()(A());_.push([b.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const C=_},2609:b=>{b.exports=function(k){var g=[];return g.toString=function(){return this.map(function(v){var A=k(v);return v[2]?"@media ".concat(v[2]," {").concat(A,"}"):A}).join("")},g.i=function(v,A,x){typeof v=="string"&&(v=[[null,v,""]]);var _={};if(x)for(var C=0;C<this.length;C++){var M=this[C][0];M!=null&&(_[M]=!0)}for(var T=0;T<v.length;T++){var L=[].concat(v[T]);x&&_[L[0]]||(A&&(L[2]?L[2]="".concat(A," and ").concat(L[2]):L[2]=A),g.push(L))}},g}},1799:b=>{function k(v,A){return function(x){if(Array.isArray(x))return x}(v)||function(x,_){var C=x&&(typeof Symbol<"u"&&x[Symbol.iterator]||x["@@iterator"]);if(C!=null){var M,T,L=[],P=!0,j=!1;try{for(C=C.call(x);!(P=(M=C.next()).done)&&(L.push(M.value),!_||L.length!==_);P=!0);}catch(O){j=!0,T=O}finally{try{P||C.return==null||C.return()}finally{if(j)throw T}}return L}}(v,A)||function(x,_){if(x){if(typeof x=="string")return g(x,_);var C=Object.prototype.toString.call(x).slice(8,-1);if(C==="Object"&&x.constructor&&(C=x.constructor.name),C==="Map"||C==="Set")return Array.from(x);if(C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return g(x,_)}}(v,A)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function g(v,A){(A==null||A>v.length)&&(A=v.length);for(var x=0,_=new Array(A);x<A;x++)_[x]=v[x];return _}b.exports=function(v){var A=k(v,4),x=A[1],_=A[3];if(!_)return x;if(typeof btoa=="function"){var C=btoa(unescape(encodeURIComponent(JSON.stringify(_)))),M="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(C),T="/*# ".concat(M," */"),L=_.sources.map(function(P){return"/*# sourceURL=".concat(_.sourceRoot||"").concat(P," */")});return[x].concat(L).concat([T]).join(`
`)}return[x].join(`
`)}},6062:(b,k,g)=>{var v,A=function(){return v===void 0&&(v=!!(window&&document&&document.all&&!window.atob)),v},x=function(){var Y={};return function(V){if(Y[V]===void 0){var ee=document.querySelector(V);if(window.HTMLIFrameElement&&ee instanceof window.HTMLIFrameElement)try{ee=ee.contentDocument.head}catch{ee=null}Y[V]=ee}return Y[V]}}(),_=[];function C(Y){for(var V=-1,ee=0;ee<_.length;ee++)if(_[ee].identifier===Y){V=ee;break}return V}function M(Y,V){for(var ee={},J=[],ne=0;ne<Y.length;ne++){var fe=Y[ne],ge=V.base?fe[0]+V.base:fe[0],Be=ee[ge]||0,De="".concat(ge," ").concat(Be);ee[ge]=Be+1;var we=C(De),Te={css:fe[1],media:fe[2],sourceMap:fe[3]};we!==-1?(_[we].references++,_[we].updater(Te)):_.push({identifier:De,updater:Q(Te,V),references:1}),J.push(De)}return J}function T(Y){var V=document.createElement("style"),ee=Y.attributes||{};if(ee.nonce===void 0){var J=g.nc;J&&(ee.nonce=J)}if(Object.keys(ee).forEach(function(fe){V.setAttribute(fe,ee[fe])}),typeof Y.insert=="function")Y.insert(V);else{var ne=x(Y.insert||"head");if(!ne)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");ne.appendChild(V)}return V}var L,P=(L=[],function(Y,V){return L[Y]=V,L.filter(Boolean).join(`
`)});function j(Y,V,ee,J){var ne=ee?"":J.media?"@media ".concat(J.media," {").concat(J.css,"}"):J.css;if(Y.styleSheet)Y.styleSheet.cssText=P(V,ne);else{var fe=document.createTextNode(ne),ge=Y.childNodes;ge[V]&&Y.removeChild(ge[V]),ge.length?Y.insertBefore(fe,ge[V]):Y.appendChild(fe)}}function O(Y,V,ee){var J=ee.css,ne=ee.media,fe=ee.sourceMap;if(ne?Y.setAttribute("media",ne):Y.removeAttribute("media"),fe&&typeof btoa<"u"&&(J+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(fe))))," */")),Y.styleSheet)Y.styleSheet.cssText=J;else{for(;Y.firstChild;)Y.removeChild(Y.firstChild);Y.appendChild(document.createTextNode(J))}}var R=null,W=0;function Q(Y,V){var ee,J,ne;if(V.singleton){var fe=W++;ee=R||(R=T(V)),J=j.bind(null,ee,fe,!1),ne=j.bind(null,ee,fe,!0)}else ee=T(V),J=O.bind(null,ee,V),ne=function(){(function(ge){if(ge.parentNode===null)return!1;ge.parentNode.removeChild(ge)})(ee)};return J(Y),function(ge){if(ge){if(ge.css===Y.css&&ge.media===Y.media&&ge.sourceMap===Y.sourceMap)return;J(Y=ge)}else ne()}}b.exports=function(Y,V){(V=V||{}).singleton||typeof V.singleton=="boolean"||(V.singleton=A());var ee=M(Y=Y||[],V);return function(J){if(J=J||[],Object.prototype.toString.call(J)==="[object Array]"){for(var ne=0;ne<ee.length;ne++){var fe=C(ee[ne]);_[fe].references--}for(var ge=M(J,V),Be=0;Be<ee.length;Be++){var De=C(ee[Be]);_[De].references===0&&(_[De].updater(),_.splice(De,1))}ee=ge}}}}},d={};function h(b){var k=d[b];if(k!==void 0)return k.exports;var g=d[b]={id:b,exports:{}};return l[b](g,g.exports,h),g.exports}h.n=b=>{var k=b&&b.__esModule?()=>b.default:()=>b;return h.d(k,{a:k}),k},h.d=(b,k)=>{for(var g in k)h.o(k,g)&&!h.o(b,g)&&Object.defineProperty(b,g,{enumerable:!0,get:k[g]})},h.o=(b,k)=>Object.prototype.hasOwnProperty.call(b,k),h.nc=void 0;var p={};return(()=>{function b({emitter:i,activator:e,callback:t,contextElements:o}){i.listenTo(document,"mousedown",(s,a)=>{if(!e())return;const c=typeof a.composedPath=="function"?a.composedPath():[],u=typeof o=="function"?o():o;for(const f of u)if(f.contains(a.target)||c.includes(f))return;t()})}function k(i){return class extends i{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...e){super(...e),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function g({view:i}){i.listenTo(i.element,"submit",(e,t)=>{t.preventDefault(),i.fire("submit")},{useCapture:!0})}h.d(p,{default:()=>Db});const v=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var A;const x={isMac:_(v),isWindows:(A=v,A.indexOf("windows")>-1),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(v),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(v),isiOS:function(i){return!!i.match(/iphone|ipad/i)||_(i)&&navigator.maxTouchPoints>0}(v),isAndroid:function(i){return i.indexOf("android")>-1}(v),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(v),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}};function _(i){return i.indexOf("macintosh")>-1}function C(i,e,t,o){t=t||function(f,m){return f===m};const s=Array.isArray(i)?i:Array.prototype.slice.call(i),a=Array.isArray(e)?e:Array.prototype.slice.call(e),c=function(f,m,w){const y=M(f,m,w);if(y===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const S=T(f,y),N=T(m,y),B=M(S,N,w),F=f.length-B,$=m.length-B;return{firstIndex:y,lastIndexOld:F,lastIndexNew:$}}(s,a,t);return o?function(f,m){const{firstIndex:w,lastIndexOld:y,lastIndexNew:S}=f;if(w===-1)return Array(m).fill("equal");let N=[];return w>0&&(N=N.concat(Array(w).fill("equal"))),S-w>0&&(N=N.concat(Array(S-w).fill("insert"))),y-w>0&&(N=N.concat(Array(y-w).fill("delete"))),S<m&&(N=N.concat(Array(m-S).fill("equal"))),N}(c,a.length):function(f,m){const w=[],{firstIndex:y,lastIndexOld:S,lastIndexNew:N}=m;return N-y>0&&w.push({index:y,type:"insert",values:f.slice(y,N)}),S-y>0&&w.push({index:y+(N-y),type:"delete",howMany:S-y}),w}(a,c)}function M(i,e,t){for(let o=0;o<Math.max(i.length,e.length);o++)if(i[o]===void 0||e[o]===void 0||!t(i[o],e[o]))return o;return-1}function T(i,e){return i.slice(e).reverse()}function L(i,e,t){t=t||function(F,$){return F===$};const o=i.length,s=e.length;if(o>200||s>200||o+s>300)return L.fastDiff(i,e,t,!0);let a,c;if(s<o){const F=i;i=e,e=F,a="delete",c="insert"}else a="insert",c="delete";const u=i.length,f=e.length,m=f-u,w={},y={};function S(F){const $=(y[F-1]!==void 0?y[F-1]:-1)+1,q=y[F+1]!==void 0?y[F+1]:-1,X=$>q?-1:1;w[F+X]&&(w[F]=w[F+X].slice(0)),w[F]||(w[F]=[]),w[F].push($>q?a:c);let ce=Math.max($,q),Ce=ce-F;for(;Ce<u&&ce<f&&t(i[Ce],e[ce]);)Ce++,ce++,w[F].push("equal");return ce}let N,B=0;do{for(N=-B;N<m;N++)y[N]=S(N);for(N=m+B;N>m;N--)y[N]=S(N);y[m]=S(m),B++}while(y[m]!==f);return w[m].slice(1)}L.fastDiff=C;const P=function(){return function i(){i.called=!0}};class j{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=P(),this.off=P()}}const O=new Array(256).fill("").map((i,e)=>("0"+e.toString(16)).slice(-2));function R(){const i=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,o=4294967296*Math.random()>>>0;return"e"+O[i>>0&255]+O[i>>8&255]+O[i>>16&255]+O[i>>24&255]+O[e>>0&255]+O[e>>8&255]+O[e>>16&255]+O[e>>24&255]+O[t>>0&255]+O[t>>8&255]+O[t>>16&255]+O[t>>24&255]+O[o>>0&255]+O[o>>8&255]+O[o>>16&255]+O[o>>24&255]}const W={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function Q(i,e){const t=W.get(e.priority);for(let o=0;o<i.length;o++)if(W.get(i[o].priority)<t)return void i.splice(o,0,e);i.push(e)}const Y="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class V extends Error{constructor(e,t,o){super(function(s,a){const c=new WeakSet,u=(w,y)=>{if(typeof y=="object"&&y!==null){if(c.has(y))return`[object ${y.constructor.name}]`;c.add(y)}return y},f=a?` ${JSON.stringify(a,u)}`:"",m=ne(s);return s+f+m}(e,o)),this.name="CKEditorError",this.context=t,this.data=o}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const o=new V(e.message,t);throw o.stack=e.stack,o}}function ee(i,e){console.warn(...fe(i,e))}function J(i,e){console.error(...fe(i,e))}function ne(i){return`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[o.createRange(u[0].end)]});else if(e.inputType=="insertText"&&c&&c.includes(`
`,isColorInherited:!1}),o.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],o],on:{dragstart:s.to(a=>a.preventDefault())}}]})}}function yC(i,e,t){return(o,s)=>{const a=o.getVisible();if(!a||o.width<XN||o.height<JN)return af;let c;c=e.position==="inside"?o.bottom-s.height:o.bottom-s.height/2,c-=e.verticalOffset;const u=t(o,s);if(e.position==="inside"){const f=s.clone().moveTo(u,c);if(f.getIntersectionArea(a)<f.getArea())return af}else{const f=vc(i);if(f){const m=new St(f),w=a.bottom+s.height/2>m.bottom,y=e.side==="left"?o.left<m.left:o.right>m.right;if(w||y)return af}}return{top:c,left:u,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function CC(i){const e=i.config.get("ui.poweredBy"),t=e&&e.position||"border";return ZN({position:t,label:ej,verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:i.locale.contentLanguageDirection==="ltr"?"right":"left"},e)}var oj=Object.defineProperty,AC=Object.getOwnPropertySymbols,rj=Object.prototype.hasOwnProperty,ij=Object.prototype.propertyIsEnumerable,xC=(i,e,t)=>e in i?oj(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;class sj extends Qe(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const t=e.editing.view;this.editor=e,this.componentFactory=new UN(e),this.focusTracker=new Dr,this.tooltipManager=new sf(e),this.poweredBy=new tj(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(t.document,"layoutChanged",this.update.bind(this)),this.listenTo(t,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const o=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?o():this.once("ready",o)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const o=e.config.get("toolbar.viewportTopOffset");return o?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:o}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let o,s;e.keystrokes.set("Alt+F10",(a,c)=>{const u=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(u)&&!Array.from(t.domRoots.values()).includes(u)&&(o=u);const f=this._getCurrentFocusedToolbarDefinition();f&&s||(s=this._getFocusableCandidateToolbarDefinitions());for(let m=0;m<s.length;m++){const w=s.shift();if(s.push(w),w!==f&&this._focusFocusableCandidateToolbar(w)){f&&f.options.afterBlur&&f.options.afterBlur();break}}c()}),e.keystrokes.set("Esc",(a,c)=>{const u=this._getCurrentFocusedToolbarDefinition();u&&(o?(o.focus(),o=null):e.editing.view.focus(),u.options.afterBlur&&u.options.afterBlur(),c())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:o,options:s}=t;(Xi(o.element)||s.beforeFocus)&&e.push(t)}return e.sort((t,o)=>EC(t)-EC(o)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:o}}=e;return o&&o(),!!Xi(t.element)&&(t.focus(),!0)}_handleScrollToTheSelection(e,t){const o=((s,a)=>{for(var c in a||(a={}))rj.call(a,c)&&xC(s,c,a[c]);if(AC)for(var c of AC(a))ij.call(a,c)&&xC(s,c,a[c]);return s})({top:0,bottom:0,left:0,right:0},this.viewportOffset);t.viewportOffset.top+=o.top,t.viewportOffset.bottom+=o.bottom,t.viewportOffset.left+=o.left,t.viewportOffset.right+=o.right}}function EC(i){const{toolbarView:e,options:t}=i;let o=10;return Xi(e.element)&&o--,t.isContextual&&o--,o}var SC=h(9688),aj={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(SC.Z,aj),SC.Z.locals;class lj extends nt{constructor(e){super(e),this.body=new YI(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class cj extends lj{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new Dv;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class dj extends nt{constructor(e,t,o){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=o,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function t(o){e.change(s=>{const a=e.document.getRoot(o.name);s.addClass(o.isFocused?"ck-focused":"ck-blurred",a),s.removeClass(o.isFocused?"ck-blurred":"ck-focused",a)})}e.isRenderingInProgress?function o(s){e.once("change:isRenderingInProgress",(a,c,u)=>{u?o(s):t(s)})}(this):t(this)}}class uj extends dj{constructor(e,t,o,s={}){super(e,t,o);const a=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=s.label||(()=>a("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const o=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),o)})}}var DC=h(8847),hj={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(DC.Z,hj),DC.Z.locals;class $m extends zh{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class TC extends Qe(){constructor(e,t){super(),t&&v_(this,t),e&&this.set(e)}}var IC=h(4650),fj={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(IC.Z,fj),IC.Z.locals;var MC=h(7676),pj={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(MC.Z,pj),MC.Z.locals;const lf=eu("px");class cf extends be{constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,o=t.document.selection.editableElement;return o?t.domConverter.mapViewToDom(o.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new V("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const o=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),o.set(e.view,e),this._viewToStack.set(e.view,o),o===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new V("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new V("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new Ho(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new gj(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(o,s)=>!s&&o>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(o,s)=>{if(s<2)return"";const a=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[a,s])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new mj(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,o)=>!o&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:o=!0,singleViewMode:s=!1}){this.view.class=t,this.view.withArrow=o,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),s&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class gj extends nt{constructor(e){super(e);const t=e.t,o=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Dr,this.buttonPrevView=this._createButtonView(t("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",o.to("isNavigationVisible",s=>s?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:o.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const o=new Zt(this.locale);return o.set({label:e,icon:t,tooltip:!0}),o}}class mj extends nt{constructor(e,t){super(e);const o=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",o.to("numberOfPanels",s=>s?"":"ck-hidden")],style:{top:o.to("top",lf),left:o.to("left",lf),width:o.to("width",lf),height:o.to("height",lf)}},children:this.content}),this.on("change:numberOfPanels",(s,a,c,u)=>{c>u?this._addPanels(c-u):this._removePanels(u-c),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new nt;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:o,height:s}=new St(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:o,height:s})}}}var NC=h(5868),bj={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(NC.Z,bj),NC.Z.locals;const Oc=eu("px");class kj extends nt{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new qr({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",o=>o?"block":"none"),height:t.to("isSticky",o=>o?Oc(this._contentPanelRect.height):null)}}}).render(),this._contentPanel=new qr({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",o=>o?Oc(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_stickyTopOffset",o=>o&&Oc(o)),bottom:t.to("_stickyBottomOffset",o=>o&&Oc(o)),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(qe.document,"scroll",(e,t)=>{this.checkIfShouldBeSticky(t.target)},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(e){if(!this.limiterElement||!this.isActive)return void this._unstick();const t=function(a){const c=[];let u=vc(a);for(;u&&u!==qe.document.body;)c.push(u),u=vc(u);return c.push(qe.document),c}(this.limiterElement);if(e&&!t.includes(e))return;const o=function(a,c=0){const u=a.map(m=>{if(m instanceof Document){const w=new St(qe.window);return w.top+=c,w.height-=c,w}return new St(m)});let f=u[0];for(const m of u.slice(1))f&&(f=f.getIntersection(m));return f}(t,this.viewportTopOffset),s=new St(this.limiterElement);if(o&&s.top<o.top){const a=s.getIntersection(o);if(a){const c=o.top;if(c+this._contentPanelRect.height+this.limiterBottomOffset>a.bottom){const u=Math.max(s.bottom-o.bottom,0)+this.limiterBottomOffset;s.bottom-u>s.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(u):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<s.height?this._stickToTopOfAncestors(c):this._unstick()}else this._unstick()}else this._unstick()}_stickToTopOfAncestors(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=e,this._stickyBottomOffset=null,this._marginLeft=Oc(-qe.window.scrollX)}_stickToBottomOfLimiter(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=e,this._marginLeft=Oc(-qe.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new St(this._contentPanel)}}var jC=h(9695),wj={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(jC.Z,wj),jC.Z.locals;class vj extends sj{constructor(e,t){super(e),this.view=t,this._toolbarConfig=Pv(e.config.get("toolbar")),this._elementReplacer=new go,this.listenTo(e.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(e){const t=this.editor,o=this.view,s=t.editing.view,a=o.editable,c=s.document.getRoot();a.name=c.rootName,o.render();const u=a.element;this.setEditableElement(a.name,u),o.editable.bind("isFocused").to(this.focusTracker),s.attachDomRoot(u),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t||0),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,o=t.document.getRoot(),s=e.sourceElement;let a;const c=e.config.get("placeholder");c&&(a=typeof c=="string"?c:c[this.view.editable.name]),!a&&s&&s.tagName.toLowerCase()==="textarea"&&(a=s.getAttribute("placeholder")),a&&(o.placeholder=a),Uv({view:t,element:o,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(e,t,o){const s=this.view.stickyPanel;if(s.isSticky){const a=new St(s.element).height;t.viewportOffset.top+=a}else{const a=()=>{this.editor.editing.view.scrollToTheSelection(o)};this.listenTo(s,"change:isSticky",a),setTimeout(()=>{this.stopListening(s,"change:isSticky",a)},20)}}}var PC=h(3143),_j={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Se()(PC.Z,_j),PC.Z.locals;class yj extends cj{constructor(e,t,o={}){super(e),this.stickyPanel=new kj(e),this.toolbar=new Tm(e,{shouldGroupWhenFull:o.shouldToolbarGroupWhenFull}),this.editable=new uj(e,t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class BC{constructor(e){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const o="error"in t?t.error:t.reason;o instanceof Error&&this._handleError(o,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)}off(e,t){this._listeners[e]=this._listeners[e].filter(o=>o!==t)}_fire(e,...t){const o=this._listeners[e]||[];for(const s of o)s.apply(this,[null,...t])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,t){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:t instanceof ErrorEvent?t.filename:void 0,lineno:t instanceof ErrorEvent?t.lineno:void 0,colno:t instanceof ErrorEvent?t.colno:void 0,date:this._now()});const o=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:o}),o?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function Wm(i,e=new Set){const t=[i],o=new Set;let s=0;for(;t.length>s;){const a=t[s++];if(!o.has(a)&&Cj(a)&&!e.has(a))if(o.add(a),Symbol.iterator in a)try{for(const c of a)t.push(c)}catch{}else for(const c in a)c!=="defaultValue"&&t.push(a[c])}return o}function Cj(i){const e=Object.prototype.toString.call(i),t=typeof i;return!(t==="number"||t==="boolean"||t==="string"||t==="symbol"||t==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||i==null||i._watchdogExcluded||i instanceof EventTarget||i instanceof Event)}function OC(i,e,t=new Set){if(i===e&&typeof(o=i)=="object"&&o!==null)return!0;var o;const s=Wm(i,t),a=Wm(e,t);for(const c of s)if(a.has(c))return!0;return!1}var Aj=Object.defineProperty,xj=Object.defineProperties,Ej=Object.getOwnPropertyDescriptors,df=Object.getOwnPropertySymbols,LC=Object.prototype.hasOwnProperty,RC=Object.prototype.propertyIsEnumerable,zC=(i,e,t)=>e in i?Aj(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,qm=(i,e)=>{for(var t in e||(e={}))LC.call(e,t)&&zC(i,t,e[t]);if(df)for(var t of df(e))RC.call(e,t)&&zC(i,t,e[t]);return i};class FC extends BC{constructor(e,t={}){super(t),this._editor=null,this._initUsingData=!0,this._editables={},this._throttledSave=Hm(this._save.bind(this),typeof t.saveInterval=="number"?t.saveInterval:5e3),e&&(this._creator=(o,s)=>e.create(o,s)),this._destructor=o=>o.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{const e={},t=[],o=this._config.rootsAttributes||{},s={};for(const[f,m]of Object.entries(this._data.roots))m.isLoaded?(e[f]="",s[f]=o[f]||{}):t.push(f);const a=(c=qm({},this._config),u={extraPlugins:this._config.extraPlugins||[],lazyRoots:t,rootsAttributes:s,_watchdogInitialData:this._data},xj(c,Ej(u)));var c,u;return delete a.initialData,a.extraPlugins.push(Sj),this._initUsingData?this.create(e,a,a.context):Vn(this._elementOrData)?this.create(this._elementOrData,a,a.context):this.create(this._editables,a,a.context)}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,t=this._config,o){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=e,this._initUsingData=typeof e=="string"||Object.keys(e).length>0&&typeof Object.values(e)[0]=="string",this._config=this._cloneEditorConfiguration(t)||{},this._config.context=o,this._creator(e,this._config))).then(s=>{this._editor=s,s.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=s.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=e}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e=this._editor,t=e.model.document.roots.filter(u=>u.isAttached()&&u.rootName!="$graveyard"),{plugins:o}=e,s=o.has("CommentsRepository")&&o.get("CommentsRepository"),a=o.has("TrackChanges")&&o.get("TrackChanges"),c={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};t.forEach(u=>{c.roots[u.rootName]={content:JSON.stringify(Array.from(u.getChildren())),attributes:JSON.stringify(Array.from(u.getAttributes())),isLoaded:u._isLoaded}});for(const u of e.model.markers)u._affectsData&&(c.markers[u.name]={rangeJSON:u.getRange().toJSON(),usingOperation:u._managedUsingOperations,affectsData:u._affectsData});return s&&(c.commentThreads=JSON.stringify(s.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),a&&(c.suggestions=JSON.stringify(a.getSuggestions({toJSON:!0,skipNotAttached:!0}))),c}_getEditables(){const e={};for(const t of this.editor.model.document.getRootNames()){const o=this.editor.ui.getEditableElement(t);o&&(e[t]=o)}return e}_isErrorComingFromThisItem(e){return OC(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return Mn(e,(t,o)=>Vn(t)||o==="context"?t:void 0)}}class Sj{constructor(e){this.editor=e,this._data=e.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",e=>{e.stop(),this.editor.model.enqueueChange({isUndoable:!1},t=>{this._restoreCollaborationData(),this._restoreEditorData(t)}),this.editor.data.fire("ready")},{priority:999})}_createNode(e,t){if("name"in t){const o=e.createElement(t.name,t.attributes);if(t.children)for(const s of t.children)o._appendChild(this._createNode(e,s));return o}return e.createText(t.data,t.attributes)}_restoreEditorData(e){const t=this.editor;Object.entries(this._data.roots).forEach(([o,{content:s,attributes:a}])=>{const c=JSON.parse(s),u=JSON.parse(a),f=t.model.document.getRoot(o);for(const[m,w]of u)e.setAttribute(m,w,f);for(const m of c){const w=this._createNode(e,m);e.insert(w,f,"end")}}),Object.entries(this._data.markers).forEach(([o,s])=>{const{document:a}=t.model,c=s,{rangeJSON:{start:u,end:f}}=c,m=((B,F)=>{var $={};for(var q in B)LC.call(B,q)&&F.indexOf(q)<0&&($[q]=B[q]);if(B!=null&&df)for(var q of df(B))F.indexOf(q)<0&&RC.call(B,q)&&($[q]=B[q]);return $})(c,["rangeJSON"]),w=a.getRoot(u.root),y=e.createPositionFromPath(w,u.path,u.stickiness),S=e.createPositionFromPath(w,f.path,f.stickiness),N=e.createRange(y,S);e.addMarker(o,qm({range:N},m))})}_restoreCollaborationData(){const e=JSON.parse(this._data.commentThreads),t=JSON.parse(this._data.suggestions);e.forEach(o=>{const s=this.editor.config.get("collaboration.channelId"),a=this.editor.plugins.get("CommentsRepository");a.hasCommentThread(o.threadId)&&a.getCommentThread(o.threadId).remove(),a.addCommentThread(qm({channelId:s},o))}),t.forEach(o=>{const s=this.editor.plugins.get("TrackChangesEditing");s.hasSuggestion(o.id)?s.getSuggestion(o.id).attributes=o.attributes:s.addSuggestionData(o)})}}const ku=Symbol("MainQueueId");class Dj{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,t){const o=e===ku;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const s=(o?Promise.all(this._queues.values()):Promise.all([this._queues.get(ku),this._queues.get(e)])).then(t),a=s.catch(()=>{});return this._queues.set(e,a),s.finally(()=>{this._activeActions--,this._queues.get(e)===a&&this._activeActions===0&&this._onEmptyCallbacks.forEach(c=>c())})}}function VC(i){return Array.isArray(i)?i:[i]}class uf extends nf(Dm(wN)){constructor(e,t={}){if(!hf(e)&&t.initialData!==void 0)throw new V("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(a){return hf(a)?(c=a,c instanceof HTMLTextAreaElement?c.value:c.innerHTML):a;var c}(e)),hf(e)&&(this.sourceElement=e),this.model.document.createRoot();const o=!this.config.get("toolbar.shouldNotGroupWhenFull"),s=new yj(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:o});this.ui=new vj(this,s),function(a){if(!Zn(a.updateSourceElement))throw new V("attachtoform-missing-elementapi-interface",a);const c=a.sourceElement;if(function(u){return!!u&&u.tagName.toLowerCase()==="textarea"}(c)&&c.form){let u;const f=c.form,m=()=>a.updateSourceElement();Zn(f.submit)&&(u=f.submit,f.submit=()=>{m(),u.apply(f)}),f.addEventListener("submit",m),a.on("destroy",()=>{f.removeEventListener("submit",m),u&&(f.submit=u)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(o=>{const s=new this(e,t);o(s.initPlugins().then(()=>s.ui.init(hf(e)?e:null)).then(()=>s.data.init(s.config.get("initialData"))).then(()=>s.fire("ready")).then(()=>s))})}}function hf(i){return Vn(i)}uf.Context=zv,uf.EditorWatchdog=FC,uf.ContextWatchdog=class extends BC{constructor(i,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new Dj,this._watchdogConfig=e,this._creator=t=>i.create(t),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(i){this._creator=i}setDestructor(i){this._destructor=i}get context(){return this._context}create(i={}){return this._actionQueues.enqueue(ku,()=>(this._contextConfig=i,this._create()))}getItem(i){return this._getWatchdog(i)._item}getItemState(i){return this._getWatchdog(i).state}add(i){const e=VC(i);return Promise.all(e.map(t=>this._actionQueues.enqueue(t.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let o;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if(t.type==="editor")return o=new FC(null,this._watchdogConfig),o.setCreator(t.creator),o._setExcludedProperties(this._contextProps),t.destructor&&o.setDestructor(t.destructor),this._watchdogs.set(t.id,o),o.on("error",(s,{error:a,causesRestart:c})=>{this._fire("itemError",{itemId:t.id,error:a}),c&&this._actionQueues.enqueue(t.id,()=>new Promise(u=>{const f=()=>{o.off("restart",f),this._fire("itemRestart",{itemId:t.id}),u()};o.on("restart",f)}))}),o.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))}remove(i){const e=VC(i);return Promise.all(e.map(t=>this._actionQueues.enqueue(t,()=>{const o=this._getWatchdog(t);return this._watchdogs.delete(t),o.destroy()})))}destroy(){return this._actionQueues.enqueue(ku,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(ku,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(i=>{console.error("An error happened during destroying the context or items.",i)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(i=>(this._context=i,this._contextProps=Wm(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const i=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(i))})}_getWatchdog(i){const e=this._watchdogs.get(i);if(!e)throw new Error(`Item with the given id was not registered: ${i}.`);return e}_isErrorComingFromThisItem(i){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(i))return!1;return OC(this._context,i.context)}};class Gm extends Ks{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;function o(s){return(a,c)=>{c.preventDefault();const u=c.dropRange?[c.dropRange]:null,f=new j(t,s);t.fire(f,{dataTransfer:c.dataTransfer,method:a.name,targetRanges:u,target:c.target,domEvent:c.domEvent}),f.stop.called&&c.stopPropagation()}}this.listenTo(t,"paste",o("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",o("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",o("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,o=e.type=="drop"||e.type=="paste",s={dataTransfer:new T_(t,{cacheFiles:o})};e.type!="drop"&&e.type!="dragover"||(s.dropRange=function(a,c){const u=c.target.ownerDocument,f=c.clientX,m=c.clientY;let w;return u.caretRangeFromPoint&&u.caretRangeFromPoint(f,m)?w=u.caretRangeFromPoint(f,m):c.rangeParent&&(w=u.createRange(),w.setStart(c.rangeParent,c.rangeOffset),w.collapse(!0)),w?a.domConverter.domRangeToView(w):null}(this.view,e)),this.fire(e.type,e,s)}}const UC=["figcaption","li"];function HC(i){let e="";if(i.is("$text")||i.is("$textProxy"))e=i.data;else if(i.is("element","img")&&i.hasAttribute("alt"))e=i.getAttribute("alt");else if(i.is("element","br"))e=`
`;else{let t=null;for(const o of i.getChildren()){const s=HC(o);t&&(t.is("containerElement")||o.is("containerElement"))&&(UC.includes(t.name)||UC.includes(o.name)?e+=`
`:e+=`
