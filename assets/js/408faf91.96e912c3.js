"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[3992],{9613:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>v});var t=n(9496);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),i=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=i(e.components);return t.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=i(n),v=o,f=d["".concat(c,".").concat(v)]||d[v]||l[v]||s;return n?t.createElement(f,a(a({ref:r},u),{},{components:n})):t.createElement(f,a({ref:r},u))}));function v(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var i=2;i<s;i++)a[i]=n[i];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9909:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var t=n(2081),o=(n(9496),n(9613));const s={sidebar_position:90,id:"FaaS Suppport"},a=void 0,p={unversionedId:"guides/FaaS Suppport",id:"guides/FaaS Suppport",title:"FaaS Suppport",description:"shuvi can be Functions as a Service for other server or even docker to handle request and response.",source:"@site/docs/guides/FaaS.md",sourceDirName:"guides",slug:"/guides/FaaS Suppport",permalink:"/shuvijs.org/docs/guides/FaaS Suppport",draft:!1,editUrl:"https://github.com/shuvijs/shuvijs.org/tree/master/docs/guides/FaaS.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90,id:"FaaS Suppport"},sidebar:"guides",previous:{title:"Fast Refresh",permalink:"/shuvijs.org/docs/guides/Fast Refresh"}},c={},i=[],u={toc:i};function l(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"shuvi can be Functions as a Service for other server or even docker to handle ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html#class-httpclientrequest"},"request")," and ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/http.html#class-httpserverresponse"},"response"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"work with koa server"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Koa = require('koa');\nconst { shuvi } = require('shuvi');\n\nconst port = parseInt(process.env.PORT, 10) || 3000;\nconst dev = process.env.NODE_ENV !== 'production';\nconst config = process.env.CONFIGOVERRIDES\n  ? JSON.parse(process.env.CONFIGOVERRIDES)\n  : {};\nconst app = shuvi({\n  dev,\n  cwd: __dirname,\n  config\n});\n\napp.prepare().then(() => {\n  const server = new Koa();\n  const handle = app.getRequestHandler();\n\n  server.use(async (ctx, next) => {\n    ctx.res.statusCode = 200;\n    await handle(ctx.req, ctx.res);\n    ctx.respond = false;\n    next();\n  });\n\n  server.listen(port, () => {\n    console.log(`> Koa server Ready on http://localhost:${port}`);\n  });\n});\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"work with express server"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const express = require('express');\nconst { shuvi } = require('shuvi');\n\nconst port = parseInt(process.env.PORT, 10) || 3000;\nconst dev = process.env.NODE_ENV !== 'production';\nconst config = process.env.CONFIGOVERRIDES\n  ? JSON.parse(process.env.CONFIGOVERRIDES)\n  : {};\nconst app = shuvi({\n  dev,\n  cwd: __dirname,\n  config\n});\n\napp.prepare().then(() => {\n  const handle = app.getRequestHandler();\n  const server = express();\n\n  server.all('*', (req, res) => {\n    return handle(req, res);\n  });\n\n  server.listen(port, err => {\n    if (err) throw err;\n    console.log(`> Express server Ready on http://localhost:${port}`);\n  });\n});\n")))))}l.isMDXComponent=!0}}]);