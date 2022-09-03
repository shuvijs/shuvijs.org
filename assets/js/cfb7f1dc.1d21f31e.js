"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[4575],{9613:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(9496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(t),m=o,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5961:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(2081),o=(t(9496),t(9613));const a={},i=void 0,c={unversionedId:"reference/runtime/interfaces/IPageError",id:"reference/runtime/interfaces/IPageError",title:"IPageError",description:"runtime / IPageError",source:"@site/docs/reference/runtime/interfaces/IPageError.md",sourceDirName:"reference/runtime/interfaces",slug:"/reference/runtime/interfaces/IPageError",permalink:"/shuvijs.org/docs/reference/runtime/interfaces/IPageError",draft:!1,editUrl:"https://github.com/shuvijs/shuvijs.org/tree/master/docs/reference/runtime/interfaces/IPageError.md",tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"IHtmlTag",permalink:"/shuvijs.org/docs/reference/runtime/interfaces/IHtmlTag"},next:{title:"IRouteComponentContext",permalink:"/shuvijs.org/docs/reference/runtime/interfaces/IRouteComponentContext"}},s={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"errorCode",id:"errorcode",level:3},{value:"errorDesc",id:"errordesc",level:3},{value:"hasError",id:"haserror",level:3}],u={toc:l};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/reference/runtime/overview"},"runtime")," / IPageError"),(0,o.kt)("h1",{id:"interface-ipageerror"},"Interface: IPageError"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shuvijs.org/docs/reference/runtime/interfaces/IPageError#errorcode"},"errorCode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shuvijs.org/docs/reference/runtime/interfaces/IPageError#errordesc"},"errorDesc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shuvijs.org/docs/reference/runtime/interfaces/IPageError#haserror"},"hasError"))),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"errorcode"},"errorCode"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"errorCode"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/reference/runtime/enums/internal_.SHUVI_ERROR_CODE"},(0,o.kt)("inlineCode",{parentName:"a"},"SHUVI_ERROR_CODE"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"errordesc"},"errorDesc"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"errorDesc"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"haserror"},"hasError"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"hasError"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")))}p.isMDXComponent=!0}}]);