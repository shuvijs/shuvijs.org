"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[5732],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7540:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(2081),o=(t(9496),t(9613));const i={id:"general",title:"General"},a=void 0,l={unversionedId:"reference/configuration/general",id:"reference/configuration/general",title:"General",description:"For custom configuration of Shuvi.js, you can create a shuvi.config.js or shuvi.config.ts file in the root of your project directory (next to package.json).",source:"@site/docs/reference/configuration/general.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/general",permalink:"/shuvijs.org/docs/reference/configuration/general",draft:!1,editUrl:"https://github.com/shuvijs/shuvijs.org/tree/master/docs/reference/configuration/general.md",tags:[],version:"current",frontMatter:{id:"general",title:"General"},sidebar:"reference",previous:{title:"Routes",permalink:"/shuvijs.org/docs/reference/conventions/routes"},next:{title:"Compiler",permalink:"/shuvijs.org/docs/reference/configuration/compiler"}},s={},u=[{value:"Environment Variables",id:"environment-variables",level:2},{value:"Runtime Configuration",id:"runtime-configuration",level:2},{value:"Pure Client Application",id:"pure-client-application",level:2},{value:"Router",id:"router",level:2},{value:"ConventionRoutes",id:"conventionroutes",level:2},{value:"Build directory",id:"build-directory",level:2},{value:"Asset Prefix",id:"asset-prefix",level:2},{value:"Proxying API Requests",id:"proxying-api-requests",level:2}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For custom configuration of Shuvi.js, you can create a ",(0,o.kt)("inlineCode",{parentName:"p"},"shuvi.config.js")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"shuvi.config.ts")," file in the root of your project directory (next to ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),")."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"shuvi.config.js")," is a regular Node.js module, not a JSON file. It gets used by the Shuvi.js server and build phases, and it's not included in the browser build."),(0,o.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,o.kt)("p",null,"Add environment variables to the JavaScript bundle"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// file: shuvi.config.js\nexport default {\n  env: {\n    customKey: "my-value",\n  },\n};\n\n// file: src/home/page.js\nfunction Page() {\n  return <h1>The value of customKey is: {process.env.customKey}</h1>;\n}\n\nexport default Page;\n')),(0,o.kt)("h2",{id:"runtime-configuration"},"Runtime Configuration"),(0,o.kt)("p",null,"Add runtime configuration to your app."),(0,o.kt)("p",null,"Place any server-only runtime config under ",(0,o.kt)("inlineCode",{parentName:"p"},"serverRuntimeConfig"),"."),(0,o.kt)("p",null,"Anything accessible to both client and server-side code should be under ",(0,o.kt)("inlineCode",{parentName:"p"},"publicRuntimeConfig"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export default {\n  serverRuntimeConfig: {\n    // Will only be available on the server side\n    mySecret: "secret",\n    secondSecret: process.env.SECOND_SECRET, // Pass through env variables\n  },\n  publicRuntimeConfig: {\n    // Will be available on both server and client\n    staticFolder: "/static",\n  },\n};\n')),(0,o.kt)("p",null,"To get access to the runtime configs in your app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { getRuntimeConfig } from "shuvi/runtime";\n\nconst { mySecret, staticFolder } = getRuntimeConfig();\n// Will only be available on the server-side\nconsole.log(mySecret);\n// Will be available on both server-side and client-side\nconsole.log(staticFolder);\n\nfunction MyImage() {\n  return (\n    <div>\n      <img src={`${staticFolder}/logo.png`} alt="logo" />\n    </div>\n  );\n}\n\nexport default MyImage;\n')),(0,o.kt)("h2",{id:"pure-client-application"},"Pure Client Application"),(0,o.kt)("p",null,"Whether to enable Server-Side Rendering. Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  ssr: false,\n};\n")),(0,o.kt)("h2",{id:"router"},"Router"),(0,o.kt)("p",null,"Whey you build applications without a backed server. You need to set ",(0,o.kt)("inlineCode",{parentName:"p"},"router.history")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"hash"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export default {\n  router: {\n    history: "hash", // hash or browser\n  },\n};\n')),(0,o.kt)("h2",{id:"conventionroutes"},"ConventionRoutes"),(0,o.kt)("p",null,"Shuvi.js exposes some options that give you some control over how convention routes will work."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export default {\n  conventionRoutes: {\n    // his is an array of globs (via minimatch) that Shuvi will match to files while reading your routes directory. If a file matches, it will be ignored.\n    exclude: ['**/components'];\n  };\n};\n")),(0,o.kt)("h2",{id:"build-directory"},"Build directory"),(0,o.kt)("p",null,"Defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},'"build"'),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export default {\n  outputPath: "dist",\n};\n')),(0,o.kt)("h2",{id:"asset-prefix"},"Asset Prefix"),(0,o.kt)("p",null,'The URL prefix of the browser build with a trailing slash. Defaults to "/". This is the path the browser will use to find assets.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export default {\n  publicPath: "https://cdn.com/",\n};\n')),(0,o.kt)("h2",{id:"proxying-api-requests"},"Proxying API Requests"),(0,o.kt)("p",null,"If your frontend app and the backend API server are not running on the same host, you will need to proxy API requests to the API server during development. This option will be ignored in production."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'export default {\n  proxy: {\n    "/api/*": {\n      target: "http://example.com/api/v1/*",\n      changeOrigin: true,\n    },\n  },\n};\n')))}p.isMDXComponent=!0}}]);