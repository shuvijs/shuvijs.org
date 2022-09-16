"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[8204],{9613:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,v=p["".concat(u,".").concat(d)]||p[d]||l[d]||a;return r?n.createElement(v,s(s({ref:t},m),{},{components:r})):n.createElement(v,s({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6700:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(2081),o=(r(9496),r(9613));const a={sidebar_position:3,id:"custom-server",title:"Custom Server"},s=void 0,i={unversionedId:"guides/custom-behaviors/custom-server",id:"guides/custom-behaviors/custom-server",title:"Custom Server",description:"How to Custom Document",source:"@site/docs/guides/custom-behaviors/custom-server.md",sourceDirName:"guides/custom-behaviors",slug:"/guides/custom-behaviors/custom-server",permalink:"/shuvijs.org/docs/guides/custom-behaviors/custom-server",draft:!1,editUrl:"https://github.com/shuvijs/shuvijs.org/tree/master/docs/guides/custom-behaviors/custom-server.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"custom-server",title:"Custom Server"},sidebar:"guides",previous:{title:"Custom Error",permalink:"/shuvijs.org/docs/guides/custom-behaviors/custom-error"},next:{title:"Custom Document Template",permalink:"/shuvijs.org/docs/guides/custom-behaviors/custom-document-template"}},u={},c=[{value:"How to Custom Document",id:"how-to-custom-document",level:2}],m={toc:c};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-custom-document"},"How to Custom Document"),(0,o.kt)("p",null,"To create a custom error page you can create a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/server.js")," file. ",(0,o.kt)("inlineCode",{parentName:"p"},"export")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"getPageData"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"modifyHtml"),",",(0,o.kt)("inlineCode",{parentName:"p"},"renderToHTML")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"middlewares"),", all that methods ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"only work in server side")),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getPageData")," add extra data to application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"modifyHtml")," modify document props."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"renderToHTML")," last chance to modify rendered html before it be sended to browser.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// src/server.js\nexport const getPageData = () => {\n  return {\n    foo: "bar",\n  };\n};\n\nexport const handlePageRequest = (originalHandlePageRequest, appContext) => {\n  return async (req, res) => {\n    if (req.query.error) {\n      res.status(500).end();\n    } else {\n      await originalHandlePageRequest(req, res);\n    }\n  };\n};\n\nexport const modifyHtml = (documentProps, appContext) => {\n  documentProps.headTags.push({\n    tagName: "meta",\n    attrs: {\n      name: "testDocumentProps",\n    },\n  });\n};\n')))}l.isMDXComponent=!0}}]);