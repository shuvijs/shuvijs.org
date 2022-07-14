"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[5193],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var i=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,k=d["".concat(l,".").concat(c)]||d[c]||m[c]||r;return n?i.createElement(k,p(p({ref:t},s),{},{components:n})):i.createElement(k,p({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var u=2;u<r;u++)p[u]=n[u];return i.createElement.apply(null,p)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var i=n(665),a=(n(9496),n(9613));const r={id:"runtimePlugin-api",title:"RuntimePlugin API",sidebar_position:3},p=void 0,o={unversionedId:"api-reference/plugin/runtimePlugin-api",id:"api-reference/plugin/runtimePlugin-api",title:"RuntimePlugin API",description:"To create a runtimePlugin, use",source:"@site/docs/api-reference/plugin/runtimePlugin-api.md",sourceDirName:"api-reference/plugin",slug:"/api-reference/plugin/runtimePlugin-api",permalink:"/shuvijs.org/docs/api-reference/plugin/runtimePlugin-api",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/plugin/runtimePlugin-api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"runtimePlugin-api",title:"RuntimePlugin API",sidebar_position:3},sidebar:"apiReferenceSidebar",previous:{title:"ServerPlugin API",permalink:"/shuvijs.org/docs/api-reference/plugin/serverPlugin-api"},next:{title:"Loader",permalink:"/shuvijs.org/docs/api-reference/loader"}},l={},u=[{value:"Context",id:"context",level:2},{value:"Hooks",id:"hooks",level:2},{value:"<code>init</code>",id:"init",level:3},{value:"<code>getAppContext</code>",id:"getappcontext",level:3},{value:"<code>getAppComponent</code>",id:"getappcomponent",level:3},{value:"<code>getRootAppComponent</code>",id:"getrootappcomponent",level:3},{value:"<code>dispose</code>",id:"dispose",level:3},{value:"Extending types",id:"extending-types",level:2}],s={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To create a runtimePlugin, use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createRuntimePlugin } from '@shuvi/platform-shared/lib/runtime'\n")),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"Currently runtimePlugin has no context."),(0,a.kt)("h2",{id:"hooks"},"Hooks"),(0,a.kt)("h3",{id:"init"},(0,a.kt)("inlineCode",{parentName:"h3"},"init")),(0,a.kt)("p",null,"will be executed when runtime component inits."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"hookType: ",(0,a.kt)("inlineCode",{parentName:"li"},"AsyncParallelHook")),(0,a.kt)("li",{parentName:"ul"},"initialValue: ",(0,a.kt)("inlineCode",{parentName:"li"},"void")),(0,a.kt)("li",{parentName:"ul"},"extraArg: ",(0,a.kt)("inlineCode",{parentName:"li"},"void")),(0,a.kt)("li",{parentName:"ul"},"returnType: ",(0,a.kt)("inlineCode",{parentName:"li"},"void"))),(0,a.kt)("h3",{id:"getappcontext"},(0,a.kt)("inlineCode",{parentName:"h3"},"getAppContext")),(0,a.kt)("p",null,"modify appContext"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"hookType: ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncSeriesWaterfallHook"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"initialValue: ",(0,a.kt)("inlineCode",{parentName:"p"},"AppContext")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface AppContext extends CustomAppContext {\n  store?: any;\n  pageData?: any;\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"extraArg: ",(0,a.kt)("inlineCode",{parentName:"p"},"void"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type extending: ",(0,a.kt)("inlineCode",{parentName:"p"},"AppContext")," can be extended. And its type shoule be extended as the following example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="runtime.ts"',title:'"runtime.ts"'},"export default createRuntimePlugin({\n  appContext: (appContext) => {\n    appContext.test = 'test'\n  }\n})\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="types.ts"',title:'"types.ts"'},"declare module '@shuvi/runtime' {\n  export interface CustomAppContext {\n    test: string\n  }\n}\n")))),(0,a.kt)("h3",{id:"getappcomponent"},(0,a.kt)("inlineCode",{parentName:"h3"},"getAppComponent")),(0,a.kt)("p",null,"modify user custom app component"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"hookType: ",(0,a.kt)("inlineCode",{parentName:"li"},"AsyncSeriesWaterfallHook")),(0,a.kt)("li",{parentName:"ul"},"initialValue: ",(0,a.kt)("inlineCode",{parentName:"li"},"any")," (React root component)"),(0,a.kt)("li",{parentName:"ul"},"extraArg: ",(0,a.kt)("inlineCode",{parentName:"li"},"AppContext"))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export default createRuntimePlugin({\n  getAppComponent: UserApp => {\n    function AppComponent(props) {\n      return (\n        <div>\n          <div>This is getAppComponent</div>\n          <UserApp {...props} />\n        </div>\n      );\n    }\n    if (UserApp.getInitialProps)\n      AppComponent.getInitialProps = UserApp.getInitialProps;\n    return AppComponent;\n  }\n})\n")),(0,a.kt)("h3",{id:"getrootappcomponent"},(0,a.kt)("inlineCode",{parentName:"h3"},"getRootAppComponent")),(0,a.kt)("p",null,"modify original root app component"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"hookType: ",(0,a.kt)("inlineCode",{parentName:"li"},"AsyncSeriesWaterfallHook")),(0,a.kt)("li",{parentName:"ul"},"initialValue: ",(0,a.kt)("inlineCode",{parentName:"li"},"any")," (React root component)"),(0,a.kt)("li",{parentName:"ul"},"extraArg: ",(0,a.kt)("inlineCode",{parentName:"li"},"AppContext"))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export default createRuntimePlugin({\n  getRootAppComponent: App => {\n    function RootAppComponent(props) {\n      return (\n        <div>\n          <div>This is getRootAppComponent</div>\n          <App {...props} />\n        </div>\n      );\n    }\n    if (App.getInitialProps)\n      RootAppComponent.getInitialProps = App.getInitialProps;\n    return RootAppComponent;\n  }\n})\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Differences between the two hooks")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/guide/Custom%20App"},"Guide/Custom App")))),(0,a.kt)("h3",{id:"dispose"},(0,a.kt)("inlineCode",{parentName:"h3"},"dispose")),(0,a.kt)("p",null,"will be executed when runtime component disposes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"hookType: ",(0,a.kt)("inlineCode",{parentName:"li"},"AsyncParallelHook")),(0,a.kt)("li",{parentName:"ul"},"initialValue: ",(0,a.kt)("inlineCode",{parentName:"li"},"void")),(0,a.kt)("li",{parentName:"ul"},"extraArg: ",(0,a.kt)("inlineCode",{parentName:"li"},"void")),(0,a.kt)("li",{parentName:"ul"},"returnType: ",(0,a.kt)("inlineCode",{parentName:"li"},"void"))),(0,a.kt)("h2",{id:"extending-types"},"Extending types"),(0,a.kt)("p",null,"The type of ",(0,a.kt)("inlineCode",{parentName:"p"},"AppContext")," can be extended as the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="types.d.ts"',title:'"types.d.ts"'},"declare module '@shuvi/runtime' {\n  export interface CustomAppContext {\n    someNewField: any\n  }\n}\n")))}m.isMDXComponent=!0}}]);