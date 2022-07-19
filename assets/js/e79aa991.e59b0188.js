"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[9746],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1062:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(2081),o=(r(9496),r(9613));const a={sidebar_position:84,id:"Custom Server"},i=void 0,s={unversionedId:"guide/Custom Server",id:"guide/Custom Server",title:"Custom Server",description:"How to Custom Document",source:"@site/docs/guide/custom-server.md",sourceDirName:"guide",slug:"/guide/Custom Server",permalink:"/shuvijs.org/docs/guide/Custom Server",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/custom-server.md",tags:[],version:"current",sidebarPosition:84,frontMatter:{sidebar_position:84,id:"Custom Server"},sidebar:"guideSidebar",previous:{title:"Custom Error",permalink:"/shuvijs.org/docs/guide/Custom Error"},next:{title:"FaaS Suppport",permalink:"/shuvijs.org/docs/guide/FaaS Suppport"}},u={},l=[{value:"How to Custom Document",id:"how-to-custom-document",level:2}],p={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-custom-document"},"How to Custom Document"),(0,o.kt)("p",null,"To create a custom error page you can create a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/server.js")," file. ",(0,o.kt)("inlineCode",{parentName:"p"},"export")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"getPageData"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"modifyHtml"),",",(0,o.kt)("inlineCode",{parentName:"p"},"renderToHTML")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"middlewares"),", all that methods ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"only work in server side")),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"middlewares")," allow add custom middlewares to server for handler request and response."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getPageData")," add extra data to application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"modifyHtml")," modify document props."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"renderToHTML")," last chance to modify rendered html before it be sended to browser.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// src/server.js\nexport const middlewares = [\n  { path: "/health-check:other(.*)", handler: setCookie },\n  { path: "/users/:id", handler: user },\n  { path: "/profile/:id/setting:other(.*)", handler: setting },\n];\n\nexport const getPageData = () => {\n  return {\n    foo: "bar",\n  };\n};\n\nexport const handlePageRequest = (originalHandlePageRequest, appContext) => {\n  return async (req, res) => {\n    if (req.query.error) {\n      res.status(500).end();\n    } else {\n      await originalHandlePageRequest(req, res);\n    }\n  };\n};\n\nexport const modifyHtml = (documentProps, appContext) => {\n  documentProps.headTags.push({\n    tagName: "meta",\n    attrs: {\n      name: "testDocumentProps",\n    },\n  });\n};\n')))}c.isMDXComponent=!0}}]);