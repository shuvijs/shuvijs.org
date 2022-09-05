"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[7541],{9613:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(r),u=a,f=s["".concat(l,".").concat(u)]||s[u]||c[u]||p;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<p;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3440:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>d});var n=r(2081),a=(r(9496),r(9613));const p={},i=void 0,o={unversionedId:"reference/runtime/interfaces/IAppRenderFn",id:"reference/runtime/interfaces/IAppRenderFn",title:"IAppRenderFn",description:"runtime / IAppRenderFn",source:"@site/docs/reference/runtime/interfaces/IAppRenderFn.md",sourceDirName:"reference/runtime/interfaces",slug:"/reference/runtime/interfaces/IAppRenderFn",permalink:"/shuvijs.org/docs/reference/runtime/interfaces/IAppRenderFn",draft:!1,editUrl:"https://github.com/shuvijs/shuvijs.org/tree/master/docs/reference/runtime/interfaces/IAppRenderFn.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"IAppComponentContext",permalink:"/shuvijs.org/docs/reference/runtime/interfaces/IAppComponentContext"},next:{title:"IAppRouteConfig",permalink:"/shuvijs.org/docs/reference/runtime/interfaces/IAppRouteConfig"}},l={},d=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Callable",id:"callable",level:2},{value:"IAppRenderFn",id:"iapprenderfn",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4}],m={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/reference/runtime/overview"},"runtime")," / IAppRenderFn"),(0,a.kt)("h1",{id:"interface-iapprenderfncontext-router-comptype"},"Interface: IAppRenderFn<Context, Router, CompType",">"),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Context")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Context"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Router")),(0,a.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,a.kt)("a",{parentName:"td",href:"/shuvijs.org/docs/reference/runtime/interfaces/internal_.IRouter"},(0,a.kt)("inlineCode",{parentName:"a"},"IRouter")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"CompType")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))))),(0,a.kt)("h2",{id:"callable"},"Callable"),(0,a.kt)("h3",{id:"iapprenderfn"},"IAppRenderFn"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"IAppRenderFn"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"options")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/shuvijs.org/docs/reference/runtime/interfaces/internal_.IRenderOptions"},(0,a.kt)("inlineCode",{parentName:"a"},"IRenderOptions")),"<",(0,a.kt)("inlineCode",{parentName:"td"},"Context"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Router"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"CompType"),">")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"))}c.isMDXComponent=!0}}]);