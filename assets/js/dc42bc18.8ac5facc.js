"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[4711],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(2081),a=(n(9496),n(9613));const o={sidebar_position:4,id:"On Demand Transpilation"},i=void 0,s={unversionedId:"guide/Conventional-Routes/On Demand Transpilation",id:"guide/Conventional-Routes/On Demand Transpilation",title:"On Demand Transpilation",description:"Each route is a dynamic entry in shuvi. Some optimizations based on it.",source:"@site/docs/guide/Conventional-Routes/on-demand-transpilation.md",sourceDirName:"guide/Conventional-Routes",slug:"/guide/Conventional-Routes/On Demand Transpilation",permalink:"/shuvijs.org/docs/guide/Conventional-Routes/On Demand Transpilation",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/Conventional-Routes/on-demand-transpilation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"On Demand Transpilation"},sidebar:"guideSidebar",previous:{title:"Middleware",permalink:"/shuvijs.org/docs/guide/Conventional-Routes/Middleware"},next:{title:"Router Match Rules",permalink:"/shuvijs.org/docs/guide/Conventional-Routes/router-match-rules"}},u={},l=[],p={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Each route is a dynamic entry in shuvi. Some optimizations based on it."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On demand transpilation when Developer visit a route"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"not yet visit /about",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"//empty route\nexport default function(){\n  return null\n}\n"))),(0,a.kt)("li",{parentName:"ol"},"when visit /about",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"//about route is compiling...\n"))),(0,a.kt)("li",{parentName:"ol"},"after compiled, about route will be replace to empty route by ",(0,a.kt)("a",{parentName:"li",href:"/shuvijs.org/docs/guide/Fast%20Refresh"},"fast fresh"),".",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"//about route\nexport default function(){\n return <div>about</div>\n}\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Each route is lazy entry in production. it is on demand loaded when user visit a route."))))}c.isMDXComponent=!0}}]);