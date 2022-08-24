"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[1048],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),k=i,m=c["".concat(o,".").concat(k)]||c[k]||d[k]||l;return n?a.createElement(m,r(r({ref:t},s),{},{components:n})):a.createElement(m,r({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(2081),i=(n(9496),n(9613));const l={id:"corePlugin-api",title:"CorePlugin API",sidebar_position:1},r=void 0,p={unversionedId:"api-reference/plugin/corePlugin-api",id:"api-reference/plugin/corePlugin-api",title:"CorePlugin API",description:"To create a corePlugin, use",source:"@site/docs/api-reference/plugin/corePlugin-api.md",sourceDirName:"api-reference/plugin",slug:"/api-reference/plugin/corePlugin-api",permalink:"/shuvijs.org/docs/api-reference/plugin/corePlugin-api",draft:!1,editUrl:"https://github.com/shuvijs/shuvijs.org/tree/master/docs/docs/api-reference/plugin/corePlugin-api.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"corePlugin-api",title:"CorePlugin API",sidebar_position:1},sidebar:"apiReferenceSidebar",previous:{title:"Hook API",permalink:"/shuvijs.org/docs/api-reference/plugin/hook-api"},next:{title:"ServerPlugin API",permalink:"/shuvijs.org/docs/api-reference/plugin/serverPlugin-api"}},o={},u=[{value:"Context",id:"context",level:2},{value:"<code>mode</code>",id:"mode",level:4},{value:"<code>paths</code>",id:"paths",level:4},{value:"<code>config</code>",id:"config",level:4},{value:"<code>phase</code>",id:"phase",level:4},{value:"assetPublicPath",id:"assetpublicpath",level:3},{value:"<code>pluginRunner</code>",id:"pluginrunner",level:4},{value:"<code>resolveAppFile</code>",id:"resolveappfile",level:4},{value:"<code>resolveUserFile</code>",id:"resolveuserfile",level:4},{value:"<code>resolveBuildFile</code>",id:"resolvebuildfile",level:4},{value:"<code>resolvePublicFile</code>",id:"resolvepublicfile",level:4},{value:"<code>getAssetPublicUrl</code>",id:"getassetpublicurl",level:4},{value:"Hooks",id:"hooks",level:2},{value:"<code>afterInit</code>",id:"afterinit",level:3},{value:"<code>afterBuild</code>",id:"afterbuild",level:3},{value:"<code>afterDestroy</code>",id:"afterdestroy",level:3},{value:"<code>afterBundlerDone</code>",id:"afterbundlerdone",level:3},{value:"<code>afterBundlerTargetDone</code>",id:"afterbundlertargetdone",level:3},{value:"<code>configWebpack</code>",id:"configwebpack",level:3},{value:"<code>addExtraTarget</code>",id:"addextratarget",level:3},{value:"<code>addResource</code>",id:"addresource",level:3},{value:"<code>addRuntimeFile</code>",id:"addruntimefile",level:3},{value:"<code>addRuntimeService</code>",id:"addruntimeservice",level:3},{value:"<code>appRoutes</code>",id:"approutes",level:3},{value:"Extending types",id:"extending-types",level:2}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To create a corePlugin, use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createCorePlugin } from 'shuvi'\n")),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"The context stores a series of useful data and utils and can be visit in the last parameter of every hook handler. "),(0,i.kt)("h4",{id:"mode"},(0,i.kt)("inlineCode",{parentName:"h4"},"mode")),(0,i.kt)("p",null,"Current NodeEnv mode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ",(0,i.kt)("inlineCode",{parentName:"li"},"'development' | 'production'"))),(0,i.kt)("h4",{id:"paths"},(0,i.kt)("inlineCode",{parentName:"h4"},"paths")),(0,i.kt)("p",null,"A series of path viriables."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ",(0,i.kt)("inlineCode",{parentName:"li"},"IPaths"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface IPaths {\n  rootDir: string;\n  buildDir: string;\n  // dir to store shuvi's artifacts\n  privateDir: string;\n  // dir to store shuvi generated src files\n  appDir: string;\n  // dir to runtime libraries\n  runtimeDir: string;\n  //resources file\n  resources: string;\n  // user src dir\n  srcDir: string;\n  // functional dirs\n  pagesDir: string;\n  // api dirs\n  apisDir: string;\n  publicDir: string;\n}\n")))),(0,i.kt)("h4",{id:"config"},(0,i.kt)("inlineCode",{parentName:"h4"},"config")),(0,i.kt)("p",null,"Current shuvi config"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ",(0,i.kt)("a",{parentName:"li",href:"/shuvijs.org/docs/api-reference/config"},"API Reference / shuvi.config.js"))),(0,i.kt)("h4",{id:"phase"},(0,i.kt)("inlineCode",{parentName:"h4"},"phase")),(0,i.kt)("p",null,"Current working phase"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type IPhase =\n| 'PHASE_PRODUCTION_BUILD'\n| 'PHASE_PRODUCTION_SERVER'\n| 'PHASE_DEVELOPMENT_SERVER'\n| 'PHASE_INSPECT_WEBPACK'\n")))),(0,i.kt)("h3",{id:"assetpublicpath"},"assetPublicPath"),(0,i.kt)("p",null,"publicPath"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ",(0,i.kt)("inlineCode",{parentName:"li"},"string"))),(0,i.kt)("h4",{id:"pluginrunner"},(0,i.kt)("inlineCode",{parentName:"h4"},"pluginRunner")),(0,i.kt)("p",null,"An object containing every hook runner."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"context.pluginRunner[hookName]()              // if initialValue and extraArg are void\ncontext.pluginRunner[hookName](extraArg)      // if initialValue is void\ncontext.pluginRunner[hookName](initialValue)  // if extraArg is void\n")),(0,i.kt)("h4",{id:"resolveappfile"},(0,i.kt)("inlineCode",{parentName:"h4"},"resolveAppFile")),(0,i.kt)("p",null,"A util method a resolve files under ",(0,i.kt)("inlineCode",{parentName:"p"},"paths.appDir"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"(...paths: string[]) => string\n")))),(0,i.kt)("h4",{id:"resolveuserfile"},(0,i.kt)("inlineCode",{parentName:"h4"},"resolveUserFile")),(0,i.kt)("p",null,"A util method a resolve files under ",(0,i.kt)("inlineCode",{parentName:"p"},"paths.srcDir"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"(...paths: string[]) => string\n")))),(0,i.kt)("h4",{id:"resolvebuildfile"},(0,i.kt)("inlineCode",{parentName:"h4"},"resolveBuildFile")),(0,i.kt)("p",null,"A util method a resolve files under ",(0,i.kt)("inlineCode",{parentName:"p"},"paths.buildDir"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"(...paths: string[]) => string\n")))),(0,i.kt)("h4",{id:"resolvepublicfile"},(0,i.kt)("inlineCode",{parentName:"h4"},"resolvePublicFile")),(0,i.kt)("p",null,"A util method a resolve files under ",(0,i.kt)("inlineCode",{parentName:"p"},"paths.publicDir"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"(...paths: string[]) => string\n")))),(0,i.kt)("h4",{id:"getassetpublicurl"},(0,i.kt)("inlineCode",{parentName:"h4"},"getAssetPublicUrl")),(0,i.kt)("p",null,"A util method a resolve files under ",(0,i.kt)("inlineCode",{parentName:"p"},"assetPublicPath"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"(...paths: string[]) => string\n")))),(0,i.kt)("h2",{id:"hooks"},"Hooks"),(0,i.kt)("h3",{id:"afterinit"},(0,i.kt)("inlineCode",{parentName:"h3"},"afterInit")),(0,i.kt)("p",null,"will be executed after internal api initializes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"hookType: ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncParallelHook")),(0,i.kt)("li",{parentName:"ul"},"initialValue: ",(0,i.kt)("inlineCode",{parentName:"li"},"void")),(0,i.kt)("li",{parentName:"ul"},"extraArg: ",(0,i.kt)("inlineCode",{parentName:"li"},"void"))),(0,i.kt)("h3",{id:"afterbuild"},(0,i.kt)("inlineCode",{parentName:"h3"},"afterBuild")),(0,i.kt)("p",null,"will be executed after ",(0,i.kt)("inlineCode",{parentName:"p"},"shuvi build")," is done."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"hookType: ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncParallelHook")),(0,i.kt)("li",{parentName:"ul"},"initialValue: ",(0,i.kt)("inlineCode",{parentName:"li"},"void")),(0,i.kt)("li",{parentName:"ul"},"extraArg: ",(0,i.kt)("inlineCode",{parentName:"li"},"void")),(0,i.kt)("li",{parentName:"ul"})),(0,i.kt)("h3",{id:"afterdestroy"},(0,i.kt)("inlineCode",{parentName:"h3"},"afterDestroy")),(0,i.kt)("p",null,"will be executed after shuvi process ends."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"hookType: ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncParallelHook")),(0,i.kt)("li",{parentName:"ul"},"initialValue: ",(0,i.kt)("inlineCode",{parentName:"li"},"void")),(0,i.kt)("li",{parentName:"ul"},"extraArg: ",(0,i.kt)("inlineCode",{parentName:"li"},"void")),(0,i.kt)("li",{parentName:"ul"})),(0,i.kt)("h3",{id:"afterbundlerdone"},(0,i.kt)("inlineCode",{parentName:"h3"},"afterBundlerDone")),(0,i.kt)("p",null,"will be executed after all webpack bundler target are done."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"hookType: ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncParallelHook")),(0,i.kt)("li",{parentName:"ul"},"initialValue: ",(0,i.kt)("inlineCode",{parentName:"li"},"BundlerDoneExtra"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type BundlerDoneExtra = {\n  first: boolean;\n  stats: webpack.MultiStats;\n};\n"))),(0,i.kt)("li",{parentName:"ul"},"extraArg: ",(0,i.kt)("inlineCode",{parentName:"li"},"void"))),(0,i.kt)("h3",{id:"afterbundlertargetdone"},(0,i.kt)("inlineCode",{parentName:"h3"},"afterBundlerTargetDone")),(0,i.kt)("p",null,"will be executed after each webpack bundler target is done."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"hookType: ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncParallelHook")),(0,i.kt)("li",{parentName:"ul"},"initialValue: ",(0,i.kt)("inlineCode",{parentName:"li"},"BundlerTargetDoneExtra"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type BundlerTargetDoneExtra = {\n  first: boolean;\n  name: string;\n  stats: webpack.Stats;\n};\n"))),(0,i.kt)("li",{parentName:"ul"},"extraArg: ",(0,i.kt)("inlineCode",{parentName:"li"},"void"))),(0,i.kt)("h3",{id:"configwebpack"},(0,i.kt)("inlineCode",{parentName:"h3"},"configWebpack")),(0,i.kt)("p",null,"Will be executed at bundler initializing to config every webpack bundler target. Different targets can be identified by ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"hookType: ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncSeriesWaterfallHook"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"initialValue: ",(0,i.kt)("inlineCode",{parentName:"p"},"WebpackChain"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"extraArg: ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigWebpackAssistant")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type ConfigWebpackAssistant = {\n  name: string;\n  mode: 'development' | 'production';\n  webpack: Webpack;\n  helpers: {\n    addExternals: (chain: WebpackChain, externalsFn: ExternalsFunction) => void;\n  };\n};\n\ntype ExternalsFunction = (\n  data: { context: string; request: string },\n  callback: (err: Error | null, result: string | undefined) => void\n) => void;\n")))),(0,i.kt)("h3",{id:"addextratarget"},(0,i.kt)("inlineCode",{parentName:"h3"},"addExtraTarget")),(0,i.kt)("p",null,"Add extra webpack bundler target."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"hookType: ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncParallelHook"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"initialValue: ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtraTargetAssistant")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type ExtraTargetAssistant = {\n  createConfig(options: IWebpackConfigOptions): WebpackChain;\n  mode: 'development' | 'production';\n  webpack: Webpack;\n};\n\ninterface IWebpackConfigOptions {\n  name: string;\n  node: boolean;\n  entry: {\n    [x: string]: string | string[];\n  };\n  include?: string[];\n  outputDir: string;\n  webpackHelpers: {\n    addExternals: (chain: WebpackChain, externalsFn: ExternalsFunction) => void;\n  };;\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"extraArg: ",(0,i.kt)("inlineCode",{parentName:"p"},"void"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"returnType: ",(0,i.kt)("inlineCode",{parentName:"p"},"Target")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Target {\n  name: string;\n  chain: WebpackChain;\n}\n")))),(0,i.kt)("h3",{id:"addresource"},(0,i.kt)("inlineCode",{parentName:"h3"},"addResource")),(0,i.kt)("p",null,"To add runtime resources. Usually, these resources can be visit by server through ",(0,i.kt)("inlineCode",{parentName:"p"},"'@shuvi/service/lib/resources'"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"hookType: ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncParallelHook")),(0,i.kt)("li",{parentName:"ul"},"initialValue: ",(0,i.kt)("inlineCode",{parentName:"li"},"void")),(0,i.kt)("li",{parentName:"ul"},"extraArg: ",(0,i.kt)("inlineCode",{parentName:"li"},"void")),(0,i.kt)("li",{parentName:"ul"},"returnType: ",(0,i.kt)("inlineCode",{parentName:"li"},"Resources | Resources[]"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type Resources = [string, string | undefined]\n")))),(0,i.kt)("h3",{id:"addruntimefile"},(0,i.kt)("inlineCode",{parentName:"h3"},"addRuntimeFile")),(0,i.kt)("p",null,"To add runtime files before bundler starts. Usually, these files will be placed under participate in the compiling. These files will be added to ",(0,i.kt)("inlineCode",{parentName:"p"},"./shuvi/app/files")," and could be visited through ",(0,i.kt)("inlineCode",{parentName:"p"},"'@shuvi/app/files/${name}'")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"hookType: ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncParallelHook"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"initialValue: ",(0,i.kt)("inlineCode",{parentName:"p"},"void"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"extraArg: ",(0,i.kt)("inlineCode",{parentName:"p"},"AddRuntimeFileUtils")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type AddRuntimeFileUtils = {\n  createFile: (options: CreateFileOption) => FileOptions;\n  getAllFiles: (dependencies: string | string[]) => string[];\n};\n\ntype CreateFileOption = {\n  name: string;\n  content: () => string;\n  dependencies?: string | string[];\n};\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"returnType: ",(0,i.kt)("inlineCode",{parentName:"p"},"FileOptions | FileOptions[]")))),(0,i.kt)("h3",{id:"addruntimeservice"},(0,i.kt)("inlineCode",{parentName:"h3"},"addRuntimeService")),(0,i.kt)("p",null,"To add runtime services or library for user. These services can be used through ",(0,i.kt)("inlineCode",{parentName:"p"},"'@shuvi/runtime'")," or  ",(0,i.kt)("inlineCode",{parentName:"p"},"'@shuvi/runtime/${filepath}'")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"hookType: ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncParallelHook")),(0,i.kt)("li",{parentName:"ul"},"initialValue: ",(0,i.kt)("inlineCode",{parentName:"li"},"void")),(0,i.kt)("li",{parentName:"ul"},"extraArg: ",(0,i.kt)("inlineCode",{parentName:"li"},"void")),(0,i.kt)("li",{parentName:"ul"},"returnType: ",(0,i.kt)("inlineCode",{parentName:"li"},"RuntimeService | RuntimeService[]"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type RuntimeService = {\n  source: string;\n  exported: string;\n  filepath?: string;\n};\n")))),(0,i.kt)("h3",{id:"approutes"},(0,i.kt)("inlineCode",{parentName:"h3"},"appRoutes")),(0,i.kt)("p",null,"To modify app routes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"hookType: ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncSeriesWaterfallHook"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"initialValue: ",(0,i.kt)("inlineCode",{parentName:"p"},"IUserRouteConfig"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"extraArg: ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface IUserRouteConfig {\n  children?: IUserRouteConfig[];\n  name?: string;\n  component?: string;\n  middlewares?: string[];\n  redirect?: string;\n  path: string;\n  id?: string;\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"extraArg: ",(0,i.kt)("inlineCode",{parentName:"p"},"void")))),(0,i.kt)("h2",{id:"extending-types"},"Extending types"),(0,i.kt)("p",null,"The type of corePlugin hooks can be extended as the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="types.d.ts"',title:'"types.d.ts"'},"declare module '@shuvi/runtime' {\n  export interface CustomCorePluginHooks {\n    extendedHookExample: typeof extendedHookExample\n  }\n}\n")))}d.isMDXComponent=!0}}]);