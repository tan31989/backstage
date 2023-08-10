/*! For license information please see 593645bc.ede5f528.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[503134],{549889:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var t=n(824246),o=n(511151);const i={id:"plugin-permission-node.permissionrule",title:"PermissionRule",description:"API reference for PermissionRule"},s=void 0,u={unversionedId:"reference/plugin-permission-node.permissionrule",id:"reference/plugin-permission-node.permissionrule",title:"PermissionRule",description:"API reference for PermissionRule",source:"@site/../docs/reference/plugin-permission-node.permissionrule.md",sourceDirName:"reference",slug:"/reference/plugin-permission-node.permissionrule",permalink:"/docs/reference/plugin-permission-node.permissionrule",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-node.permissionrule.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-node.permissionrule",title:"PermissionRule",description:"API reference for PermissionRule"}},a={},c=[{value:"Remarks",id:"remarks",level:2}];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-node",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-permission-node"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-node.permissionrule",children:(0,t.jsx)(r.code,{children:"PermissionRule"})})]}),"\n",(0,t.jsx)(r.p,{children:"A conditional rule that can be provided in an  response to an authorization request."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.b,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type PermissionRule<TResource, TQuery, TResourceType extends string, TParams extends PermissionRuleParams = PermissionRuleParams> = {\n    name: string;\n    description: string;\n    resourceType: TResourceType;\n    paramsSchema?: z.ZodSchema<TParams>;\n    apply(resource: TResource, params: NoInfer<TParams>): boolean;\n    toQuery(params: NoInfer<TParams>): PermissionCriteria<TQuery>;\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.b,{children:"References:"})," ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissionruleparams",children:"PermissionRuleParams"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissioncriteria",children:"PermissionCriteria"})]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["Rules can either be evaluated against a resource loaded in memory, or used as filters when loading a collection of resources from a data source. The ",(0,t.jsx)(r.code,{children:"apply"})," and ",(0,t.jsx)(r.code,{children:"toQuery"})," methods implement these two concepts."]}),"\n",(0,t.jsx)(r.p,{children:"The two operations should always have the same logical result. If they don\u2019t, the effective outcome of an authorization operation will sometimes differ depending on how the authorization check was performed."})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,s,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var c in i=Object(arguments[a]))n.call(i,c)&&(u[c]=i[c]);if(r){s=r(i);for(var l=0;l<s.length;l++)t.call(i,s[l])&&(u[s[l]]=i[s[l]])}}return u}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),r.Fragment=i("react.fragment")}var s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,i={},c=null,l=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)u.call(r,t)&&!a.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:o,type:e,key:c,ref:l,props:i,_owner:s.current}}r.jsx=c,r.jsxs=c},541535:(e,r,n)=>{var t=n(862525),o=60103,i=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var s=60109,u=60110,a=60112;r.Suspense=60113;var c=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),s=f("react.provider"),u=f("react.context"),a=f("react.forward_ref"),r.Suspense=f("react.suspense"),c=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,r,n){this.props=e,this.context=r,this.refs=y,this.updater=n||m}function v(){}function g(e,r,n){this.props=e,this.context=r,this.refs=y,this.updater=n||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var b=g.prototype=new v;b.constructor=g,t(b,h.prototype),b.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,n){var t,i={},s=null,u=null;if(null!=r)for(t in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(s=""+r.key),r)j.call(r,t)&&!P.hasOwnProperty(t)&&(i[t]=r[t]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];i.children=c}if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===i[t]&&(i[t]=a[t]);return{$$typeof:o,type:e,key:s,ref:u,props:i,_owner:_.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g;function x(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function O(e,r,n,t,s){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var a=!1;if(null===e)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case i:a=!0}}if(a)return s=s(a=e),e=""===t?"."+x(a,0):t,Array.isArray(s)?(n="",null!=e&&(n=e.replace(k,"$&/")+"/"),O(s,r,n,"",(function(e){return e}))):null!=s&&(R(s)&&(s=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(k,"$&/")+"/")+e)),r.push(s)),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var c=0;c<e.length;c++){var l=t+x(u=e[c],c);a+=O(u,r,n,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(u=e.next()).done;)a+=O(u=u.value,r,n,l=t+x(u,c++),s);else if("object"===u)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return a}function S(e,r,n){if(null==e)return e;var t=[],o=0;return O(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function $(){var e=E.current;if(null===e)throw Error(d(321));return e}var T={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:S,forEach:function(e,r,n){S(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return S(e,(function(){r++})),r},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error(d(143));return e}},r.Component=h,r.PureComponent=g,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,n){if(null==e)throw Error(d(267,e));var i=t({},e.props),s=e.key,u=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,a=_.current),void 0!==r.key&&(s=""+r.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in r)j.call(r,l)&&!P.hasOwnProperty(l)&&(i[l]=void 0===r[l]&&void 0!==c?c[l]:r[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){c=Array(l);for(var f=0;f<l;f++)c[f]=arguments[f+2];i.children=c}return{$$typeof:o,type:e.type,key:s,ref:u,props:i,_owner:a}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:u,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=w,r.createFactory=function(e){var r=w.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=R,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:c,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return $().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,n){return $().useReducer(e,r,n)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>u,ah:()=>i});var t=n(667294);const o=t.createContext({});function i(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const s={};function u({components:e,children:r,disableParentContext:n}){let u;return u=n?"function"==typeof e?e({}):e||s:i(e),t.createElement(o.Provider,{value:u},r)}}}]);