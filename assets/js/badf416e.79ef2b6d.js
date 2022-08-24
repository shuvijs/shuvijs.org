"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[5193],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},p=Object.keys(e);for(i=0;i<p.length;i++)n=p[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(i=0;i<p.length;i++)n=p[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,k=d["".concat(l,".").concat(c)]||d[c]||m[c]||p;return n?i.createElement(k,a(a({ref:t},s),{},{components:n})):i.createElement(k,a({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,a=new Array(p);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var u=2;u<p;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var i=n(2081),r=(n(9496),n(9613));const p={id:"runtimePlugin-api",title:"RuntimePlugin API",sidebar_position:3},a=void 0,o={unversionedId:"api-reference/plugin/runtimePlugin-api",id:"api-reference/plugin/runtimePlugin-api",title:"RuntimePlugin API",description:"To create a runtimePlugin, use",source:"@site/docs/api-reference/plugin/runtimePlugin-api.md",sourceDirName:"api-reference/plugin",slug:"/api-reference/plugin/runtimePlugin-api",permalink:"/shuvijs.org/docs/api-reference/plugin/runtimePlugin-api",draft:!1,editUrl:"https://github.com/shuvijs/shuvijs.org/tree/master/docs/docs/api-reference/plugin/runtimePlugin-api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"runtimePlugin-api",title:"RuntimePlugin API",sidebar_position:3},sidebar:"apiReferenceSidebar",previous:{title:"ServerPlugin API",permalink:"/shuvijs.org/docs/api-reference/plugin/serverPlugin-api"},next:{title:"Loader",permalink:"/shuvijs.org/docs/api-reference/loader"}},l={},u=[{value:"Context",id:"context",level:2},{value:"Hooks",id:"hooks",level:2},{value:"<code>init</code>",id:"init",level:3},{value:"<code>getAppContext</code>",id:"getappcontext",level:3},{value:"<code>getAppComponent</code>",id:"getappcomponent",level:3},{value:"<code>getRootAppComponent</code>",id:"getrootappcomponent",level:3},{value:"<code>dispose</code>",id:"dispose",level:3},{value:"Extending types",id:"extending-types",level:2}],s={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To create a runtimePlugin, use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createRuntimePlugin } from '@shuvi/platform-shared/lib/runtime'\n")),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"Currently runtimePlugin has no context."),(0,r.kt)("h2",{id:"hooks"},"Hooks"),(0,r.kt)("h3",{id:"init"},(0,r.kt)("inlineCode",{parentName:"h3"},"init")),(0,r.kt)("p",null,"will be executed when runtime component inits."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hookType: ",(0,r.kt)("inlineCode",{parentName:"li"},"AsyncParallelHook")),(0,r.kt)("li",{parentName:"ul"},"initialValue: ",(0,r.kt)("inlineCode",{parentName:"li"},"void")),(0,r.kt)("li",{parentName:"ul"},"extraArg: ",(0,r.kt)("inlineCode",{parentName:"li"},"void")),(0,r.kt)("li",{parentName:"ul"},"returnType: ",(0,r.kt)("inlineCode",{parentName:"li"},"void"))),(0,r.kt)("h3",{id:"getappcontext"},(0,r.kt)("inlineCode",{parentName:"h3"},"getAppContext")),(0,r.kt)("p",null,"modify appContext"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"hookType: ",(0,r.kt)("inlineCode",{parentName:"p"},"AsyncSeriesWaterfallHook"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"initialValue: ",(0,r.kt)("inlineCode",{parentName:"p"},"AppContext")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface AppContext extends CustomAppContext {\n  store?: any;\n  pageData?: any;\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"extraArg: ",(0,r.kt)("inlineCode",{parentName:"p"},"void"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type extending: ",(0,r.kt)("inlineCode",{parentName:"p"},"AppContext")," can be extended. And its type shoule be extended as the following example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="runtime.ts"',title:'"runtime.ts"'},"export default createRuntimePlugin({\n  appContext: (appContext) => {\n    appContext.test = 'test'\n  }\n})\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="types.ts"',title:'"types.ts"'},"declare module '@shuvi/runtime' {\n  export interface CustomAppContext {\n    test: string\n  }\n}\n")))),(0,r.kt)("h3",{id:"getappcomponent"},(0,r.kt)("inlineCode",{parentName:"h3"},"getAppComponent")),(0,r.kt)("p",null,"modify user custom app component"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hookType: ",(0,r.kt)("inlineCode",{parentName:"li"},"AsyncSeriesWaterfallHook")),(0,r.kt)("li",{parentName:"ul"},"initialValue: ",(0,r.kt)("inlineCode",{parentName:"li"},"any")," (React root component)"),(0,r.kt)("li",{parentName:"ul"},"extraArg: ",(0,r.kt)("inlineCode",{parentName:"li"},"AppContext"))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export default createRuntimePlugin({\n  getAppComponent: UserApp => {\n    function AppComponent(props) {\n      return (\n        <div>\n          <div>This is getAppComponent</div>\n          <UserApp {...props} />\n        </div>\n      );\n    }\n    if (UserApp.getInitialProps)\n      AppComponent.getInitialProps = UserApp.getInitialProps;\n    return AppComponent;\n  }\n})\n")),(0,r.kt)("h3",{id:"getrootappcomponent"},(0,r.kt)("inlineCode",{parentName:"h3"},"getRootAppComponent")),(0,r.kt)("p",null,"modify original root app component"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hookType: ",(0,r.kt)("inlineCode",{parentName:"li"},"AsyncSeriesWaterfallHook")),(0,r.kt)("li",{parentName:"ul"},"initialValue: ",(0,r.kt)("inlineCode",{parentName:"li"},"any")," (React root component)"),(0,r.kt)("li",{parentName:"ul"},"extraArg: ",(0,r.kt)("inlineCode",{parentName:"li"},"AppContext"))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export default createRuntimePlugin({\n  getRootAppComponent: App => {\n    function RootAppComponent(props) {\n      return (\n        <div>\n          <div>This is getRootAppComponent</div>\n          <App {...props} />\n        </div>\n      );\n    }\n    if (App.getInitialProps)\n      RootAppComponent.getInitialProps = App.getInitialProps;\n    return RootAppComponent;\n  }\n})\n")),(0,r.kt)("admonition",{title:"Differences between the two hooks",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/guide/custom-behaviors/Custom%20App%20Context"},"Guide/Custom App"))),(0,r.kt)("h3",{id:"dispose"},(0,r.kt)("inlineCode",{parentName:"h3"},"dispose")),(0,r.kt)("p",null,"will be executed when runtime component disposes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hookType: ",(0,r.kt)("inlineCode",{parentName:"li"},"AsyncParallelHook")),(0,r.kt)("li",{parentName:"ul"},"initialValue: ",(0,r.kt)("inlineCode",{parentName:"li"},"void")),(0,r.kt)("li",{parentName:"ul"},"extraArg: ",(0,r.kt)("inlineCode",{parentName:"li"},"void")),(0,r.kt)("li",{parentName:"ul"},"returnType: ",(0,r.kt)("inlineCode",{parentName:"li"},"void"))),(0,r.kt)("h2",{id:"extending-types"},"Extending types"),(0,r.kt)("p",null,"The type of ",(0,r.kt)("inlineCode",{parentName:"p"},"AppContext")," can be extended as the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="types.d.ts"',title:'"types.d.ts"'},"declare module '@shuvi/runtime' {\n  export interface CustomAppContext {\n    someNewField: any\n  }\n}\n")))}m.isMDXComponent=!0}}]);