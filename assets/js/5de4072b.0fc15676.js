"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[9828],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(r),u=a,f=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var d=2;d<i;d++)p[d]=r[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(2081),a=(r(9496),r(9613));const i={},p=void 0,o={unversionedId:"api-reference/runtime/interfaces/IViewClient",id:"api-reference/runtime/interfaces/IViewClient",title:"IViewClient",description:"runtime / IViewClient",source:"@site/docs/api-reference/runtime/interfaces/IViewClient.md",sourceDirName:"api-reference/runtime/interfaces",slug:"/api-reference/runtime/interfaces/IViewClient",permalink:"/shuvijs.org/docs/api-reference/runtime/interfaces/IViewClient",draft:!1,editUrl:"https://github.com/shuvijs/shuvijs.org/tree/master/docs/docs/api-reference/runtime/interfaces/IViewClient.md",tags:[],version:"current",frontMatter:{},sidebar:"apiReferenceSidebar",previous:{title:"IServerRendererOptions",permalink:"/shuvijs.org/docs/api-reference/runtime/interfaces/IServerRendererOptions"},next:{title:"IViewServer",permalink:"/shuvijs.org/docs/api-reference/runtime/interfaces/IViewServer"}},l={},d=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Methods",id:"methods",level:3},{value:"Methods",id:"methods-1",level:2},{value:"renderApp",id:"renderapp",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from",level:4}],s={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api-reference/runtime/overview"},"runtime")," / IViewClient"),(0,a.kt)("h1",{id:"interface-iviewclientcomptype-data-router"},"Interface: IViewClient<CompType, Data, Router",">"),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"CompType")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Data")),(0,a.kt)("td",{parentName:"tr",align:"left"},"{}")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Router")),(0,a.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,a.kt)("a",{parentName:"td",href:"/shuvijs.org/docs/api-reference/runtime/interfaces/internal_.IRouter"},(0,a.kt)("inlineCode",{parentName:"a"},"IRouter"))," = ",(0,a.kt)("a",{parentName:"td",href:"/shuvijs.org/docs/api-reference/runtime/interfaces/internal_.IRouter"},(0,a.kt)("inlineCode",{parentName:"a"},"IRouter")))))),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api-reference/runtime/interfaces/internal_.IView"},(0,a.kt)("inlineCode",{parentName:"a"},"IView")),"<",(0,a.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api-reference/runtime/interfaces/internal_.IClientRendererOptions"},(0,a.kt)("inlineCode",{parentName:"a"},"IClientRendererOptions")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"CompType"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Data"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Router"),">",">"),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"IViewClient"))))),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shuvijs.org/docs/api-reference/runtime/interfaces/IViewClient#renderapp"},"renderApp"))),(0,a.kt)("h2",{id:"methods-1"},"Methods"),(0,a.kt)("h3",{id:"renderapp"},"renderApp"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"renderApp"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"options")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/shuvijs.org/docs/api-reference/runtime/interfaces/internal_.IClientRendererOptions"},(0,a.kt)("inlineCode",{parentName:"a"},"IClientRendererOptions")),"<",(0,a.kt)("inlineCode",{parentName:"td"},"CompType"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Data"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Router"),">")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api-reference/runtime/interfaces/internal_.IView"},"IView"),".",(0,a.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api-reference/runtime/interfaces/internal_.IView#renderapp"},"renderApp")))}m.isMDXComponent=!0}}]);