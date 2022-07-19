"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[421],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=o,m=c["".concat(s,".").concat(d)]||c[d]||k[d]||r;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9479:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(2081),o=(t(9496),t(9613));const r={id:"hook-api",title:"Hook API",sidebar_position:0},l=void 0,i={unversionedId:"api-reference/plugin/hook-api",id:"api-reference/plugin/hook-api",title:"Hook API",description:"Overview",source:"@site/docs/api-reference/plugin/hook-api.md",sourceDirName:"api-reference/plugin",slug:"/api-reference/plugin/hook-api",permalink:"/shuvijs.org/docs/api-reference/plugin/hook-api",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-reference/plugin/hook-api.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"hook-api",title:"Hook API",sidebar_position:0},sidebar:"apiReferenceSidebar",previous:{title:"shuvi.config.js",permalink:"/shuvijs.org/docs/api-reference/config"},next:{title:"CorePlugin API",permalink:"/shuvijs.org/docs/api-reference/plugin/corePlugin-api"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Hook",id:"hook",level:2},{value:"SyncHook",id:"synchook",level:3},{value:"SyncBailHook",id:"syncbailhook",level:3},{value:"SyncWaterfallHook",id:"syncwaterfallhook",level:3},{value:"AsyncParallelHook",id:"asyncparallelhook",level:3},{value:"AsyncSeriesWaterfallHook",id:"asyncserieswaterfallhook",level:3},{value:"HookManager",id:"hookmanager",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Context",id:"context",level:3},{value:"Extending Hooks",id:"extending-hooks",level:3},{value:"Plugin Name and Relationship between Plugins",id:"plugin-name-and-relationship-between-plugins",level:3}],u={toc:p};function k(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Shuvi has 3 types of plugin which are corePlugin, serverPlugin and runtimePlugin."),(0,o.kt)("p",null,"Each plugin consists of a series of hooks."),(0,o.kt)("p",null,"Before reading the document of the plugin api, it is necessary to understand the hook and the hook manager."),(0,o.kt)("h2",{id:"hook"},"Hook"),(0,o.kt)("p",null,"The basic unit of plugin."),(0,o.kt)("p",null,"There are 5 types of hook. Each of them is an pipline that constrains how a series of hook handlers work."),(0,o.kt)("p",null,"More detailed, every hook has a ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," method. The outside hook logic could be describe as a hook handler and could be added by ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," method."),(0,o.kt)("p",null,"After adding hook handlers, hook could be called to run these hook logic through ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," method and get the result."),(0,o.kt)("p",null,"The following is an easiest example of ",(0,o.kt)("inlineCode",{parentName:"p"},"SyncHook"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="easiest-example.ts"',title:'"easiest-example.ts"'},"import { createSyncHook } from '@shuvi/hook'\nconst hook = createSyncHook<void>();\nhook.use(() => {\n  console.log(1)\n})\nhook.use(() => {\n  console.log(2)\n})\nhook.run()\n// will log 1\n// will log 2\n")),(0,o.kt)("p",null,"Generally, every hook conceptually has 3 values: ",(0,o.kt)("inlineCode",{parentName:"p"},"initialValue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"extraArg")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"returnValue"),". For a hook handler, ",(0,o.kt)("inlineCode",{parentName:"p"},"initialValue")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"extraArg")," are first 2 parameters and ",(0,o.kt)("inlineCode",{parentName:"p"},"returnValue")," is the return value. The ",(0,o.kt)("inlineCode",{parentName:"p"},"extraArg")," is an assistant parameter. When a hook runs, ",(0,o.kt)("inlineCode",{parentName:"p"},"initialValue")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"extraArg")," shoule be passed as parameters. And ",(0,o.kt)("inlineCode",{parentName:"p"},"returnValue")," will be processed according to the type of hook."),(0,o.kt)("p",null,"In the following example, a ",(0,o.kt)("inlineCode",{parentName:"p"},"SyncHook")," that ",(0,o.kt)("inlineCode",{parentName:"p"},"initialValue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"extraArg")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"returnValue")," are all number type is defined. When this hook runs, each of return value of the handlers is collected as an array to be the final result."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="3-value-example.ts"',title:'"3-value-example.ts"'},"import { createSyncHook } from '@shuvi/hook'\nconst hook = createSyncHook<number, number, number>();\nhook.use((initialValue, extraArg) => {\n  return initialValue + extraArg\n})\nhook.use((initialValue, extraArg) => {\n  return initialValue + extraArg + 1\n})\nconst result = hook.run(1, 2)\nconsole.log(result)\n// log [3, 4]\n")),(0,o.kt)("h3",{id:"synchook"},"SyncHook"),(0,o.kt)("p",null,"The easiest hook. Every hook handler should be sync function. When a ",(0,o.kt)("inlineCode",{parentName:"p"},"SyncHook")," runs, every hook handler will be executed in turn and each of return value of the handlers is collected as an array to be the result."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"hook type: ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"SyncHook<I = void, E = void, R = void>\n"))),(0,o.kt)("li",{parentName:"ul"},"handler type: ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"RemoveVoidParameters<(initalValue: I, extraArg: E) => R>\n"))),(0,o.kt)("li",{parentName:"ul"},"runner type:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"RemoveVoidParameters<(initalValue: I, extraArg: E) => R[]>\n")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"About ",(0,o.kt)("inlineCode",{parentName:"h5"},"Remove Void Parameters"))),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The type ",(0,o.kt)("inlineCode",{parentName:"p"},"RemoveVoidParameters")," will remove void parameters of the passed-in type to optimize TypeScript writing experience."))))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="SyncHook-example.ts"',title:'"SyncHook-example.ts"'},"import { createSyncHook } from '@shuvi/hook'\nconst hook1 = createSyncHook<number, number, number>();\nconst hook2 = createSyncHook<number, void>();\n\nhook1.use((i, e) => {\n  return i + e + 1\n})\nhook1.use((i, e) => {\n  return i + e + 2\n})\nconst result = hook1.run(1, 2)\n// result will be [4, 5]\n\nhook2.use((i) => {\n  console.log(i + 1)\n})\nhook2.use((i) => {\n  console.log(i + 2)\n})\nhook2.run(1)\n// log 2\n// log 3\n")),(0,o.kt)("h3",{id:"syncbailhook"},"SyncBailHook"),(0,o.kt)("p",null,"When a syncBailHook runs, every hook handler will be executed in turn. If a hook handler returns a non-undefined value, the process will abort and the return value will be the result of the hook."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"hook type: ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"SyncBailHook<I = void, E = void, R = I>\n"))),(0,o.kt)("li",{parentName:"ul"},"handler type: ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"RemoveVoidParameters<(initalValue: I, extraArg: E) => R | void | undefined>\n"))),(0,o.kt)("li",{parentName:"ul"},"runner type:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"RemoveVoidParameters<(initalValue: I, extraArg: E) => R | void | undefined>\n")))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="SyncBailHook-example.ts"',title:'"SyncBailHook-example.ts"'},"import { createSyncHook } from '@shuvi/hook'\nconst hook = createSyncBailHook<number, void>();\nhook.use((i) => {\n  // do not return\n  console.log('1st handler')\n})\nhook.use((i, e) => {\n  console.log('2nd handler')\n  return i + 1\n})\nhook.use((i) => {\n  // do not return\n  console.log('3rd handler')\n})\nconst result = hook.run(1)\n// log '1st handler'\n// log '2nd handler'\n// result will be 2\n")),(0,o.kt)("h3",{id:"syncwaterfallhook"},"SyncWaterfallHook"),(0,o.kt)("p",null,"When a ",(0,o.kt)("inlineCode",{parentName:"p"},"SyncWaterfallHook")," runs, every hook handler will be executed in turn. The type of ",(0,o.kt)("inlineCode",{parentName:"p"},"initialValue")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"returnValue")," are the same. The return value of the previous hook handler will be the initial value of the next hook handler. And the return value of the last hook handler will be the result of the hook."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"hook type: ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"SyncWaterfallHook<I, E = void>\n"))),(0,o.kt)("li",{parentName:"ul"},"handler type: ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"RemoveVoidParameters<(initalValue: I, extraArg: E) => I>\n"))),(0,o.kt)("li",{parentName:"ul"},"runner type:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"RemoveVoidParameters<(initalValue: I, extraArg: E) => I>\n")))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="SyncWaterfallHook-example.ts"',title:'"SyncWaterfallHook-example.ts"'},"import { createSyncWaterfallHook } from '@shuvi/hook'\nconst hook = createSyncWaterfallHook<number, void>();\nhook.use((i) => i + 1)\nhook.use((i) => i + 2)\nhook.use((i) => i + 3)\n\nconst result = hook.run(1)\n// result will be 7\n")),(0,o.kt)("h3",{id:"asyncparallelhook"},"AsyncParallelHook"),(0,o.kt)("p",null,"Almost same as ",(0,o.kt)("inlineCode",{parentName:"p"},"SyncHook"),", but hook handler could be async function. When the hook runs, each of return value of the async handlers is collected as an array to be the result."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"hook type: ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"AsyncParallelHook<I = void, E = void, R = void>\n"))),(0,o.kt)("li",{parentName:"ul"},"handler type: ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"RemoveVoidParameters<(initalValue: I, extraArg: E) => R | Promise<R>>\n"))),(0,o.kt)("li",{parentName:"ul"},"runner type:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"RemoveVoidParameters<(initalValue: I, extraArg: E) => Promise<R[]>>\n")))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="AsyncParallelHook-example.ts"',title:'"AsyncParallelHook-example.ts"'},"import { createSyncHook } from '@shuvi/hook'\nconst hook1 = createAsyncParallelHook<number, number, number>();\nconst hook2 = createAsyncParallelHook<number, void>();\n\nhook1.use(async (i, e) => {\n  return i + e + 1\n})\nhook1.use((i, e) => {\n  return i + e + 2\n})\nconst result = await hook1.run(1, 2)\n// result will be [4, 5]\n\nhook2.use(async (i) => {\n  console.log(i + 1)\n})\nhook2.use((i) => {\n  console.log(i + 2)\n})\nawait hook2.run(1)\n// log 2\n// log 3\n")),(0,o.kt)("h3",{id:"asyncserieswaterfallhook"},"AsyncSeriesWaterfallHook"),(0,o.kt)("p",null,"Almost same as ",(0,o.kt)("inlineCode",{parentName:"p"},"SyncWaterfallHook"),", but hook handler could be async function."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"hook type: ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"AsyncSeriesWaterfallHook<I, E = void>\n"))),(0,o.kt)("li",{parentName:"ul"},"handler type: ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"RemoveVoidParameters<(initalValue: I, extraArg: E) => I | Promise<I>>\n"))),(0,o.kt)("li",{parentName:"ul"},"runner type:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"RemoveVoidParameters<(initalValue: I, extraArg: E) => Promise<I>>\n")))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="AsyncWaterfallHook-example.ts"',title:'"AsyncWaterfallHook-example.ts"'},"import { createAsyncWaterfallHook } from '@shuvi/hook'\nconst hook = createAsyncWaterfallHook<number, void>();\nhook.use((i) => i + 1)\nhook.use(async (i) => i + 2)\nhook.use((i) => i + 3)\n\nconst result = await hook.run(1)\n// result will be 7\n")),(0,o.kt)("h2",{id:"hookmanager"},"HookManager"),(0,o.kt)("h3",{id:"overview-1"},"Overview"),(0,o.kt)("p",null,"Hook manager can manage a series of hooks and provide more functions such as setting context and extending hooks. In this way, a plugin mechanism can be established based on the hook manager."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HookManager")," instance type:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type HookManager<HM extends HookMap, C, EHM extends HookMap> = {\n  createPlugin: (\n    pluginHandlers: IPluginHandlers<HM & EHM, C> & {\n      setup?: Setup<EHM>;\n    },\n    options?: PluginOptions\n  ) => IPluginInstance<HM & EHM, C>;\n  usePlugin: (...plugins: IPluginInstance<HM & EHM, C>[]) => void;\n  runner: RunnerType<HM, EHM>;\n  setContext: (context: C) => void;\n  clear: () => void;\n  addHooks: (hook: Partial<EHM>) => void;\n  hooks: HM | (HM & EHM);\n  getPlugins: () => IPluginInstance<HM & EHM, C>[];\n};\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"createHookManager")," type:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"<HM extends HookMap, C = void, EHM extends HookMap = {}>(\n  hookMap: HM, \n  hasContext: boolean = true\n) => HookManager<HM, C, EHM>\n")))),(0,o.kt)("p",null,"The function ",(0,o.kt)("inlineCode",{parentName:"p"},"createHookManager")," receives a hookMap which is an object containing a series of hooks, and returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"HookManager")," instance."),(0,o.kt)("p",null,"A single hook can ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," hook handlers and ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," to get result. A hook manger can also use collections of handlers of various hooks by ",(0,o.kt)("inlineCode",{parentName:"p"},"usePlugin"),", and run each hook to get result by ",(0,o.kt)("inlineCode",{parentName:"p"},"runner[hookName]"),"."),(0,o.kt)("p",null,"And the ",(0,o.kt)("inlineCode",{parentName:"p"},"collections of handlers of various hooks"),", is the so-called plugin."),(0,o.kt)("h3",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("p",null,"The following is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const hook1 = createSyncHook<void>();\nconst hook2 = createSyncHook<number>()\nconst hooks = { hook1, hook2 };\n\nconst manager = createHookManager<typeof hooks, Context>(hooks);\nconst { createPlugin, setContext, usePlugin, runner } = group;\n\nlet number = 1;\nconst plugin1 = createPlugin({\n  hook1: () => {\n    number++\n  },\n  hook2: (i) => {\n    console.log(i + 1)\n  }\n})\n\nconst plugin2 = createPlugin({\n  hook1: () => {\n    number++\n  },\n  hook2: (i) => {\n    console.log(i + 2)\n  }\n})\n\nusePlugin(plugin1, plugin2);\nrunner.hook1();\nconsole.log(number)\n// log 3\nrunner.hook2(1);\n// log 2\n// log 3\n")),(0,o.kt)("p",null,"In this example, a plugin can be created by ",(0,o.kt)("inlineCode",{parentName:"p"},"createPlugin")," method, and can be applied by ",(0,o.kt)("inlineCode",{parentName:"p"},"usePlugin")," method."),(0,o.kt)("p",null,"Specific hook can be executed by corresponding property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"runner"),". All plugins will be initialized as the first time ",(0,o.kt)("inlineCode",{parentName:"p"},"runner")," is executed."),(0,o.kt)("h3",{id:"context"},"Context"),(0,o.kt)("p",null,"Hook manager introduces an important concept, the context, which must be set before any ",(0,o.kt)("inlineCode",{parentName:"p"},"runner")," being executed and can be visit as the last parameter of the hook handler."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const hook = createSyncHook<number>()\nconst hooks = { hook };\n\ntype Context = {\n  hello: number\n}\n\nconst manager = createHookManager<typeof hooks, Context>(hooks);\nconst { createPlugin, setContext, usePlugin, runner } = group;\n\nlet number = 1;\nconst plugin2 = createPlugin({\n  hook: (i, context) => {\n    console.log(i + context.hello + 1)\n  }\n})\n\nusePlugin(plugin1, plugin2);\nsetContext({ hello: 1 });\nrunner.hook2(1);\n// log 3\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"About ",(0,o.kt)("inlineCode",{parentName:"h5"},"Remove Void Parameters"))),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"As well as single hooks, the type ",(0,o.kt)("inlineCode",{parentName:"p"},"RemoveVoidParameters")," will remove void parameters in the handlers of ",(0,o.kt)("inlineCode",{parentName:"p"},"hookManager"),", including the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," parameter."))),(0,o.kt)("h3",{id:"extending-hooks"},"Extending Hooks"),(0,o.kt)("p",null,"hooks can be extended by ",(0,o.kt)("inlineCode",{parentName:"p"},"addHooks")," method which can be visited through ",(0,o.kt)("inlineCode",{parentName:"p"},"setup")," method in the first parameter of ",(0,o.kt)("inlineCode",{parentName:"p"},"createPlugin"),". In this way, system functions can also be extended in plugins."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let hookNumber = 0;\nlet extraHookNumber = 1;\nconst hook = createSyncHook<number>();\nconst extraHook = createSyncHook<number>();\n\nconst baseHooks = { hook };\nconst extraHooks = { extraHook };\n\nconst group = createHookManager<typeof baseHooks, void, typeof extraHooks>(\n  baseHooks,\n  false\n);\nconst { createPlugin, usePlugin, runner, addHooks } = group;\nconst plugin = createPlugin({\n  setup: ({ addHooks } => {\n    addHooks(extraHooks)\n  })\n  hook: (i) => {\n    hookNumber += i;\n  },\n  extraHook: (i) => {\n    extraHookNumber *= i;\n  }\n});\nrunner.hook(1)\nconsole.log(hookNumber)\n// log 1\nrunner.extraHook(2)\nconsole.log(extraHookNumber)\n// log 2\n")),(0,o.kt)("h3",{id:"plugin-name-and-relationship-between-plugins"},"Plugin Name and Relationship between Plugins"),(0,o.kt)("p",null,"The second parameter of ",(0,o.kt)("inlineCode",{parentName:"p"},"createPlugin")," is an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"PluginOptions"),"."),(0,o.kt)("p",null,"With this option we can set the name of the plugin and its relationship with other plugins when using together."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," field defines the name and the identifier of the plugin, and other fields will affect the final order of applying plugins."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type PluginOptions = {\n  name?: string;\n  pre?: string[];\n  post?: string[];\n  rivals?: string[];\n  required?: string[];\n  order?: number;\n  [x: string]: any;\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"pre: these plugins will be applied before the current plugin."),(0,o.kt)("li",{parentName:"ul"},"post: these plugins will be applied after the current plugin."),(0,o.kt)("li",{parentName:"ul"},"rivals: these plugins will be conflict with the current plugin and will throw errors."),(0,o.kt)("li",{parentName:"ul"},"required: these plugins are necessary and will throw errors without them."),(0,o.kt)("li",{parentName:"ul"},"order: the smaller, the earlier the current plugin will be applied.")))}k.isMDXComponent=!0}}]);