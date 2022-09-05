"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[5081],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1017:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(2081),a=(t(9496),t(9613));const i={id:"general",title:"General"},o=void 0,l={unversionedId:"api/runtime/general",id:"api/runtime/general",title:"General",description:"getRuntimeConfig",source:"@site/docs/api/runtime/general.md",sourceDirName:"api/runtime",slug:"/api/runtime/general",permalink:"/shuvijs.org/docs/api/runtime/general",draft:!1,editUrl:"https://github.com/shuvijs/shuvijs.org/tree/master/docs/api/runtime/general.md",tags:[],version:"current",frontMatter:{id:"general",title:"General"},sidebar:"api",next:{title:"Components",permalink:"/shuvijs.org/docs/api/runtime/components"}},p={},c=[{value:"getRuntimeConfig",id:"getruntimeconfig",level:2},{value:"Type",id:"type",level:3},{value:"Example",id:"example",level:3},{value:"dynamic",id:"dynamic",level:2},{value:"Type",id:"type-1",level:3},{value:"Example",id:"example-1",level:3}],s={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"getruntimeconfig"},"getRuntimeConfig"),(0,a.kt)("p",null,"To get access to the runtime configs in your app."),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function getRuntimeConfig(): Record<string, string>;\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"To add runtime configuration to your app open shuvi.config.js and add the ",(0,a.kt)("inlineCode",{parentName:"p"},"publicRuntimeConfig")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"serverRuntimeConfig")," configs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"exports default {\n  serverRuntimeConfig: {\n    // Will only be available on the server side\n    mySecret: 'secret',\n    secondSecret: process.env.SECOND_SECRET, // Pass through env variables\n  },\n  publicRuntimeConfig: {\n    // Will be available on both server and client\n    staticFolder: '/static',\n  },\n}\n")),(0,a.kt)("p",null,"To get access to the runtime configs in your app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { getRuntimeConfig } from "@shuvi/runtime";\n\nconst runtimeConfig = getRuntimeConfig();\n// Will only be available on the server-side\nconsole.log(runtimeConfig.mySecret);\n// Will be available on both server-side and client-side\nconsole.log(runtimeConfig.staticFolder);\n\nfunction MyImage() {\n  return (\n    <div>\n      <image src={`${runtimeConfig.staticFolder}/logo.png`} alt="logo" />\n    </div>\n  );\n}\n\nexport default MyImage``;\n')),(0,a.kt)("h2",{id:"dynamic"},"dynamic"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamic()")," to lazy loading external libraries with ",(0,a.kt)("inlineCode",{parentName:"p"},"import()")," and React components.\nDeferred loading helps improve the initial loading performance by decreasing the amount of JavaScript necessary to render the page. Components or libraries are only imported and included in the JavaScript bundle when they're used."),(0,a.kt)("h3",{id:"type-1"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type Loader<P> = Promise<React.ComponentType<P>>\n\ninterface DynamicOptions {\n  loading?: ({ error, isLoading, pastDelay }: {\n      error?: Error | null;\n      isLoading?: boolean;\n      pastDelay?: boolean;\n      timedOut?: boolean;\n  }) => JSX.Element | null;\n  loader?: Loader<P>;\n  ssr?: boolean;\n}\n\nfunction dynamic<Props = {}>(\n  loader: () => Loader<Props>\n  options?: DynamicOptions<Props>\n): React.ComponentType<Props>;\n")),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import dynamic from "@shuvi/runtime";\nimport { Suspense } from "react";\n\nconst DynamicHeader = dynamic(() => import("../components/header"), {\n  loading: () => <div>Loading...</div>,\n});\n\nexport default function Home() {\n  return <DynamicHeader />;\n}\n')))}u.isMDXComponent=!0}}]);