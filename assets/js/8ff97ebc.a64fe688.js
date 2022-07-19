"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[5148],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(2081),r=(n(9496),n(9613));const a={id:"plugin",title:"Plugin"},o=void 0,l={unversionedId:"guide/plugin",id:"guide/plugin",title:"Plugin",description:"What is plugin?",source:"@site/docs/guide/plugin.md",sourceDirName:"guide",slug:"/guide/plugin",permalink:"/shuvijs.org/docs/guide/plugin",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/plugin.md",tags:[],version:"current",frontMatter:{id:"plugin",title:"Plugin"},sidebar:"guideSidebar",previous:{title:"FaaS Suppport",permalink:"/shuvijs.org/docs/guide/FaaS Suppport"}},s={},p=[{value:"What is plugin?",id:"what-is-plugin",level:2},{value:"Write plugins",id:"write-plugins",level:2},{value:"CorePlugin",id:"coreplugin",level:3},{value:"ServerPlugin",id:"serverplugin",level:3},{value:"RuntimePlugin",id:"runtimeplugin",level:3},{value:"Extended Type Declaration &amp; TypeScript Support",id:"extended-type-declaration--typescript-support",level:3},{value:"Configure plugins",id:"configure-plugins",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-plugin"},"What is plugin?"),(0,r.kt)("p",null,"Shuvi has a built-in plugin system, which connects the running process of the entire framework through a series of lifecycle hooks, and allows developers and users to add custom behaviors to the hooks to add more functions."),(0,r.kt)("p",null,"There are 3 types of plugins which are corePlugin, serverPlugin and runtimePlugin."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"corePlugin: modify the process of building"),(0,r.kt)("li",{parentName:"ul"},"serverPlugin: modify bahavior of the server"),(0,r.kt)("li",{parentName:"ul"},"runtimePlugin: modify or extend runtime component and context")),(0,r.kt)("h2",{id:"write-plugins"},"Write plugins"),(0,r.kt)("p",null,"These plugins can be used alone or in combination to achieve certain functions."),(0,r.kt)("p",null,"For example, if we want to develop a plugin that automatically introduce redux store to the app, all these 3 plugins are needed together to make this feature work."),(0,r.kt)("p",null,"No matter which plugins are used in ",(0,r.kt)("strong",{parentName:"p"},"the final plugin"),", we hope that ",(0,r.kt)("strong",{parentName:"p"},"the final plugin")," can provide a unified and convenient way of exporting and configuring."),(0,r.kt)("p",null,"In this way, we stipulate a specification for writing ",(0,r.kt)("strong",{parentName:"p"},"the final plugins"),", that."),(0,r.kt)("p",null,"A plugin is a collection of files as the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pluginDirectory/\n\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 server.js\n\u251c\u2500\u2500 runtime.js\n\u2514\u2500\u2500 types.d.ts\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"server.js")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime.js")," represent corePlugin, serverPlugin and runtimePlugin."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"types.d.ts")," describes what types are extended by this plugin."),(0,r.kt)("p",null,"These files are not completely required, but are used as needed."),(0,r.kt)("p",null,"Each plugin file exports a plugin instance object which is created by corresponding creater."),(0,r.kt)("p",null,"The plugins could be also configured with options. In this way, each plugin exports a function that receives the passed options and returns plugin instance."),(0,r.kt)("p",null,"If a plugin is provided as an npm package, these 4 files should be listed on 'exports' field at ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," as the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "exports": {\n    ".": "./dist/index.js",\n    "./server": "./dist/server.js",,\n    "./runtime": "./dist/runtime.js",,\n    "./types": "./dist/types.js",\n  }\n}\n')),(0,r.kt)("h3",{id:"coreplugin"},"CorePlugin"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," exports corePlugin"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.js"',title:'"index.js"'},"const { createCorePlugin } = require('shuvi')\n\nmodule.exports = createCorePlugin({\n  afterInit: (context) => {\n    // do something\n  }\n}, {\n  name: 'corePlugin'\n})\n\n// or with options\nmodule.exports = (options) => createCorePlugin({\n  afterInit: (context) => {\n    // do something\n  }\n}, {\n  name: 'corePlugin'\n})\n")),(0,r.kt)("h3",{id:"serverplugin"},"ServerPlugin"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"server.js")," exports serverPlugin"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server.js"',title:'"server.js"'},"const { createServerPlugin } = require('shuvi')\n\nmodule.exports = createServerPlugin({\n  onListen: ({ port, hostname }, context) => {\n    // do something\n  }\n}, {\n  name: 'serverPlugin'\n})\n\n// or with options\n\nmodule.exports = (options) => createServerPlugin({\n  onListen: ({ port, hostname }, context) => {\n    // do something\n  }\n}, {\n  name: 'serverPlugin'\n})\n\n")),(0,r.kt)("h3",{id:"runtimeplugin"},"RuntimePlugin"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"runtime.js")," exports runtimePlugin"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="runtime.js"',title:'"runtime.js"'},"const { createPlugin } = require('@shuvi/platform-shared/lib/runtime')\n\nmodule.exports = createPlugin({\n  init: () => {\n    // do something\n  }\n}, {\n  name: 'runtimePlugin'\n})\n\n// or with options\nmodule.exports = (options) => createPlugin({\n  init: () => {\n    // do something\n  }\n}, {\n  name: 'runtimePlugin'\n})\n\n")),(0,r.kt)("h3",{id:"extended-type-declaration--typescript-support"},"Extended Type Declaration & TypeScript Support"),(0,r.kt)("p",null,"If plugin extends some of the plugin hooks or interface, a ",(0,r.kt)("inlineCode",{parentName:"p"},"types.d.ts")," is needed to ensure types correct elsewhere. It means that the extended types will also be useful for ",(0,r.kt)("inlineCode",{parentName:"p"},"custom-runtime"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"custom-server")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"custom-document"),"."),(0,r.kt)("p",null,"And we recommend you to write plugins with TypeScript to get a better writing experience."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="hooks.ts"',title:'"hooks.ts"'},"import { createSyncHook } from '@shuvi/hook'\nexport const extendedHook = createSyncHook<void>()\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server.ts"',title:'"server.ts"'},"import { createServerPlugin } from 'shuvi'\nimport { extendedHook } from './hooks'\n\nexport default createServerPlugin({\n  setup({ addHooks } => {\n    addHooks({ extendedHook })\n  }),\n  pageData: appContext => {\n    const { test } = appContext;\n    return {\n      test\n    };\n  }\n})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="runtime.ts"',title:'"runtime.ts"'},"import { createPlugin } from '@shuvi/platform-shared/lib/runtime'\nexport default createPlugin({\n  getAppContext: ctx => {\n    ctx.test = 'test'\n    return ctx;\n  }\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=\"types.ts (will be 'types.d.ts' after compiled)\"",title:'"types.ts',"(will":!0,be:!0,"'types.d.ts'":!0,after:!0,'compiled)"':!0},"import { extendedHook } from './hooks'\n\ndeclare module '@shuvi/runtime' {\n  export interface CustomServerPluginHooks {\n    extendedHook: typeof extendedHook\n  }\n\n  export interface CustomAppContext {\n    test: string\n  }\n}\n")),(0,r.kt)("p",null,"The above is a complete example with TypeScript. This plugin has a serverPlugin and a runtimePlugin. The serverPlugin extended a ",(0,r.kt)("inlineCode",{parentName:"p"},"extendedHook"),", and the runtimePlugin added a property to ",(0,r.kt)("inlineCode",{parentName:"p"},"appContext")," through the hook ",(0,r.kt)("inlineCode",{parentName:"p"},"getAppContext"),". And the relevant type extensions are also declared in ",(0,r.kt)("inlineCode",{parentName:"p"},"types.ts")," which will be compiled as ",(0,r.kt)("inlineCode",{parentName:"p"},"types.d.ts"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"About module formats")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"CorePlugin and serverPlugin is needed to be commonjs modules as they will be executed as shuvi starts without being compiling. While runtimePlugins could be whatever es module or commonjs modules because they will be compiled during building of the application."))),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"About options")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If plugin options are set, they will be passed into every plugin generator and get the actual plugin instance. But runtimePlugins runs on client side so that options must be serializable variable."))),(0,r.kt)("p",null,"For more detailed plugin api, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api-reference/plugin/hook-api"},"api/plugin"),"."),(0,r.kt)("h2",{id:"configure-plugins"},"Configure plugins"),(0,r.kt)("p",null,"As long as plugin is ready, those plugins could be configured at ",(0,r.kt)("inlineCode",{parentName:"p"},"shuvi.config.js"),"."),(0,r.kt)("p",null,"If the plugin is a package, please ensure it is installed in the project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="shuvi.config.js"',title:'"shuvi.config.js"'},"export default {\n  plugins: [\n    'path/to/pluginDirectory',\n    'plugin-package-name'\n  ]\n")),(0,r.kt)("p",null,"If plugins have options, they should be configured as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="shuvi.config.js"',title:'"shuvi.config.js"'},"export default {\n  plugins: [\n    ['path/to/pluginDirectory', 'options'],\n    ['plugin-package-name', { options: { someFields: 'someFields' } }]\n  ]\n}\n")),(0,r.kt)("p",null,"For more detailed plugin configuring api, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/shuvijs.org/docs/api-reference/config#plugins"},"api/shuvi.config.js/plugin"),"."))}d.isMDXComponent=!0}}]);