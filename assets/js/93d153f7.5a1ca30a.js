/*! For license information please see 93d153f7.5a1ca30a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[475065],{538748:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>a});var t=n(824246),o=n(511151);const c={id:"plugin-search-common.searchengine.query",title:"SearchEngine.query()",description:"API reference for SearchEngine.query()"},i=void 0,u={unversionedId:"reference/plugin-search-common.searchengine.query",id:"reference/plugin-search-common.searchengine.query",title:"SearchEngine.query()",description:"API reference for SearchEngine.query()",source:"@site/../docs/reference/plugin-search-common.searchengine.query.md",sourceDirName:"reference",slug:"/reference/plugin-search-common.searchengine.query",permalink:"/docs/reference/plugin-search-common.searchengine.query",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-common.searchengine.query.md",tags:[],version:"current",frontMatter:{id:"plugin-search-common.searchengine.query",title:"SearchEngine.query()",description:"API reference for SearchEngine.query()"}},s={},a=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",i:"i"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-common",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-search-common"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-common.searchengine",children:(0,t.jsx)(r.code,{children:"SearchEngine"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-common.searchengine.query",children:(0,t.jsx)(r.code,{children:"query"})})]}),"\n",(0,t.jsx)(r.p,{children:"Perform a search query against the SearchEngine."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.b,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"query(query: SearchQuery, options?: QueryRequestOptions): Promise<IndexableResultSet>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"query"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-common.searchquery",children:"SearchQuery"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"options"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-common.queryrequestoptions",children:"QueryRequestOptions"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.i,{children:"(Optional)"})})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.b,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:["Promise<",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-search-common.indexableresultset",children:"IndexableResultSet"}),">"]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,i,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var a in c=Object(arguments[s]))n.call(c,a)&&(u[a]=c[a]);if(r){i=r(c);for(var l=0;l<i.length;l++)t.call(c,i[l])&&(u[i[l]]=c[i[l]])}}return u}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var t,c={},a=null,l=null;for(t in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)u.call(r,t)&&!s.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:o,type:e,key:a,ref:l,props:c,_owner:i.current}}r.jsx=a,r.jsxs=a},541535:(e,r,n)=>{var t=n(862525),o=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var i=60109,u=60110,s=60112;r.Suspense=60113;var a=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),c=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),i=f("react.provider"),u=f("react.context"),s=f("react.forward_ref"),r.Suspense=f("react.suspense"),a=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,r,n){this.props=e,this.context=r,this.refs=y,this.updater=n||h}function g(){}function j(e,r,n){this.props=e,this.context=r,this.refs=y,this.updater=n||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var v=j.prototype=new g;v.constructor=j,t(v,m.prototype),v.isPureReactComponent=!0;var b={current:null},_=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function S(e,r,n){var t,c={},i=null,u=null;if(null!=r)for(t in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(i=""+r.key),r)_.call(r,t)&&!x.hasOwnProperty(t)&&(c[t]=r[t]);var s=arguments.length-2;if(1===s)c.children=n;else if(1<s){for(var a=Array(s),l=0;l<s;l++)a[l]=arguments[l+2];c.children=a}if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===c[t]&&(c[t]=s[t]);return{$$typeof:o,type:e,key:i,ref:u,props:c,_owner:b.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function E(e,r,n,t,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case c:s=!0}}if(s)return i=i(s=e),e=""===t?"."+w(s,0):t,Array.isArray(i)?(n="",null!=e&&(n=e.replace(k,"$&/")+"/"),E(i,r,n,"",(function(e){return e}))):null!=i&&(O(i)&&(i=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(k,"$&/")+"/")+e)),r.push(i)),1;if(s=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var l=t+w(u=e[a],a);s+=E(u,r,n,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(u=e.next()).done;)s+=E(u=u.value,r,n,l=t+w(u,a++),i);else if("object"===u)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return s}function q(e,r,n){if(null==e)return e;var t=[],o=0;return E(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function P(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function R(){var e=C.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:q,forEach:function(e,r,n){q(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return q(e,(function(){r++})),r},toArray:function(e){return q(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},r.Component=m,r.PureComponent=j,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,r.cloneElement=function(e,r,n){if(null==e)throw Error(d(267,e));var c=t({},e.props),i=e.key,u=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,s=b.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in r)_.call(r,l)&&!x.hasOwnProperty(l)&&(c[l]=void 0===r[l]&&void 0!==a?a[l]:r[l])}var l=arguments.length-2;if(1===l)c.children=n;else if(1<l){a=Array(l);for(var f=0;f<l;f++)a[f]=arguments[f+2];c.children=a}return{$$typeof:o,type:e.type,key:i,ref:u,props:c,_owner:s}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:u,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=S,r.createFactory=function(e){var r=S.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:a,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return R().useCallback(e,r)},r.useContext=function(e,r){return R().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return R().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return R().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return R().useLayoutEffect(e,r)},r.useMemo=function(e,r){return R().useMemo(e,r)},r.useReducer=function(e,r,n){return R().useReducer(e,r,n)},r.useRef=function(e){return R().useRef(e)},r.useState=function(e){return R().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>u,ah:()=>c});var t=n(667294);const o=t.createContext({});function c(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function u({components:e,children:r,disableParentContext:n}){let u;return u=n?"function"==typeof e?e({}):e||i:c(e),t.createElement(o.Provider,{value:u},r)}}}]);