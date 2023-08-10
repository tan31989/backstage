/*! For license information please see dd2a4ddd.b60f553f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[351005],{956015:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(824246),s=r(511151);const a={id:"plugin-catalog-backend.catalogbuilder",title:"CatalogBuilder",description:"API reference for CatalogBuilder"},o=void 0,i={unversionedId:"reference/plugin-catalog-backend.catalogbuilder",id:"reference/plugin-catalog-backend.catalogbuilder",title:"CatalogBuilder",description:"API reference for CatalogBuilder",source:"@site/../docs/reference/plugin-catalog-backend.catalogbuilder.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend.catalogbuilder",permalink:"/docs/reference/plugin-catalog-backend.catalogbuilder",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend.catalogbuilder.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend.catalogbuilder",title:"CatalogBuilder",description:"API reference for CatalogBuilder"}},c={},l=[{value:"Methods",id:"methods",level:2}];function d(e){const t=Object.assign({p:"p",a:"a",code:"code",ul:"ul",li:"li",b:"b",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder",children:(0,n.jsx)(t.code,{children:"CatalogBuilder"})})]}),"\n",(0,n.jsx)(t.p,{children:"A builder that helps wire up all of the component parts of the catalog."}),"\n",(0,n.jsx)(t.p,{children:"The touch points where you can replace or extend behavior are as follows:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Entity policies can be added or replaced. These are automatically run after the processors' pre-processing steps. All policies are given the chance to inspect the entity, and all of them have to pass in order for the entity to be considered valid from an overall point of view. - Location analyzers can be added. These are responsible for analyzing repositories when onboarding them into the catalog, by finding catalog-info.yaml files and other artifacts that can help automatically register or create catalog data on the user's behalf. - Placeholder resolvers can be replaced or added. These run on the raw structured data between the parsing and pre-processing steps, to replace dollar-prefixed entries with their actual values (like $file). - Field format validators can be replaced. These check the format of individual core fields such as metadata.name, to ensure that they adhere to certain rules. - Processors can be added or replaced. These implement the functionality of reading, parsing, validating, and processing the entity data before it is persisted in the catalog."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.b,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class CatalogBuilder \n"})}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Method"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.addentitypolicy",children:"addEntityPolicy(policies)"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.p,{children:"Adds policies that are used to validate entities between the pre- processing and post-processing stages. All such policies must pass for the entity to be considered valid."}),(0,n.jsx)(t.p,{children:"If what you want to do is to replace the rules for what format is allowed in various core entity fields (such as metadata.name), you may want to use  instead."})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.addentityprovider",children:"addEntityProvider(providers)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Adds or replaces entity providers. These are responsible for bootstrapping the list of entities out of original data sources. For example, there is one entity source for the config locations, and one for the database stored locations. If you ingest entities out of a third party system, you may want to implement that in terms of an entity provider as well."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.addlocationanalyzers",children:"addLocationAnalyzers(analyzers)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Adds Location Analyzers. These are responsible for analyzing repositories when onboarding them into the catalog, by finding catalog-info.yaml files and other artifacts that can help automatically register or create catalog data on the user's behalf."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.addpermissionrules",children:"addPermissionRules(permissionRules)"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:["Adds additional permission rules. Permission rules are used to evaluate catalog resources against queries. See ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-permission-node.permissionrule",children:"PermissionRule"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.addprocessor",children:"addProcessor(processors)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Adds entity processors. These are responsible for reading, parsing, and processing entities before they are persisted in the catalog."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.build",children:"build()"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Wires up and returns all of the component parts of the catalog"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.create",children:"create(env)"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"static"})}),(0,n.jsx)(t.td,{children:"Creates a catalog builder."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.getdefaultprocessors",children:"getDefaultProcessors()"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.p,{children:"Returns the default list of entity processors. These are responsible for reading, parsing, and processing entities before they are persisted in the catalog. Changing the order of processing can give more control to custom processors."}),(0,n.jsx)(t.p,{children:"Consider using with "})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.replaceentitypolicies",children:"replaceEntityPolicies(policies)"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.p,{children:"Sets what policies to use for validation of entities between the pre- processing and post-processing stages. All such policies must pass for the entity to be considered valid."}),(0,n.jsx)(t.p,{children:"If what you want to do is to replace the rules for what format is allowed in various core entity fields (such as metadata.name), you may want to use  instead."}),(0,n.jsx)(t.p,{children:"This function replaces the default set of policies; use with care."})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.replaceprocessors",children:"replaceProcessors(processors)"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.p,{children:"Sets what entity processors to use. These are responsible for reading, parsing, and processing entities before they are persisted in the catalog."}),(0,n.jsx)(t.p,{children:"This function replaces the default set of processors, consider using with ; use with care."})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setallowedlocationtypes",children:"setAllowedLocationTypes(allowedLocationTypes)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Sets up the allowed location types from being registered via the location service."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setentitydataparser",children:"setEntityDataParser(parser)"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.p,{children:"Sets up the catalog to use a custom parser for entity data."}),(0,n.jsx)(t.p,{children:"This is the function that gets called immediately after some raw entity specification data has been read from a remote source, and needs to be parsed and emitted as structured data."})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.seteventbroker",children:"setEventBroker(broker)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Enables the publishing of events for cloflicts in the DefaultProcessingDatabase"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setfieldformatvalidators",children:"setFieldFormatValidators(validators)"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.p,{children:"Sets the validator function to use for one or more special fields of an entity. This is useful if the default rules for formatting of fields are not sufficient."}),(0,n.jsx)(t.p,{children:"This function has no effect if used together with ."})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setlocationanalyzer",children:"setLocationAnalyzer(locationAnalyzer)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Overwrites the default location analyzer."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setplaceholderresolver",children:"setPlaceholderResolver(key, resolver)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Adds, or overwrites, a handler for placeholders (e.g. $file) in entity definition files."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setprocessinginterval",children:"setProcessingInterval(processingInterval)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Overwrites the default processing interval function used to spread entity updates in the catalog."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.setprocessingintervalseconds",children:"setProcessingIntervalSeconds(seconds)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Processing interval determines how often entities should be processed. Seconds provided will be multiplied by 1.5 The default processing interval is 100-150 seconds. setting this too low will potentially deplete request quotas to upstream services."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.subscribe",children:"subscribe(options)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.uselegacysingleprocessorvalidation",children:"useLegacySingleProcessorValidation()"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Enables the legacy behaviour of canceling validation early whenever only a single processor declares an entity kind to be valid."})]})]})]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(s){return!1}}()?Object.assign:function(e,s){for(var a,o,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in a=Object(arguments[c]))r.call(a,l)&&(i[l]=a[l]);if(t){o=t(a);for(var d=0;d<o.length;d++)n.call(a,o[d])&&(i[o[d]]=a[o[d]])}}return i}},371426:(e,t,r)=>{r(862525);var n=r(827378),s=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;s=a("react.element"),t.Fragment=a("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,a={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:d,props:a,_owner:o.current}}t.jsx=l,t.jsxs=l},541535:(e,t,r)=>{var n=r(862525),s=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,i=60110,c=60112;t.Suspense=60113;var l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;s=u("react.element"),a=u("react.portal"),t.Fragment=u("react.fragment"),t.StrictMode=u("react.strict_mode"),t.Profiler=u("react.profiler"),o=u("react.provider"),i=u("react.context"),c=u("react.forward_ref"),t.Suspense=u("react.suspense"),l=u("react.memo"),d=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||p}function b(){}function j(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||p}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var x=j.prototype=new b;x.constructor=j,n(x,y.prototype),x.isPureReactComponent=!0;var m={current:null},v=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,a={},o=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)v.call(t,n)&&!w.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:s,type:e,key:o,ref:i,props:a,_owner:m.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var P=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case s:case a:c=!0}}if(c)return o=o(c=e),e=""===n?"."+S(c,0):n,Array.isArray(o)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),C(o,t,r,"",(function(e){return e}))):null!=o&&(_(o)&&(o=function(e,t){return{$$typeof:s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+e)),t.push(o)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var d=n+S(i=e[l],l);c+=C(i,t,r,d,o)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(i=e.next()).done;)c+=C(i=i.value,t,r,d=n+S(i,l++),o);else if("object"===i)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function O(e,t,r){if(null==e)return e;var n=[],s=0;return C(e,n,"","",(function(e){return t.call(r,e,s++)})),n}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function A(){var e=R.current;if(null===e)throw Error(h(321));return e}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:m,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(h(143));return e}},t.Component=y,t.PureComponent=j,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var a=n({},e.props),o=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=m.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)v.call(t,d)&&!w.hasOwnProperty(d)&&(a[d]=void 0===t[d]&&void 0!==l?l[d]:t[d])}var d=arguments.length-2;if(1===d)a.children=r;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];a.children=l}return{$$typeof:s,type:e.type,key:o,ref:i,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return A().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useReducer=function(e,t,r){return A().useReducer(e,t,r)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>i,ah:()=>a});var n=r(667294);const s=n.createContext({});function a(e){const t=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||o:a(e),n.createElement(s.Provider,{value:i},t)}}}]);