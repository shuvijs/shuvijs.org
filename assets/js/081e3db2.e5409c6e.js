"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[2888],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),h=a,m=c["".concat(d,".").concat(h)]||c[h]||u[h]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3080:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(665),a=(r(9496),r(9613));const o={sidebar_position:81,id:"Data Fetching"},i=void 0,l={unversionedId:"guide/Data Fetching",id:"guide/Data Fetching",title:"Data Fetching",description:"What is Loader",source:"@site/docs/guide/data-fetching.md",sourceDirName:"guide",slug:"/guide/Data Fetching",permalink:"/shuvijs.org/docs/guide/Data Fetching",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/data-fetching.md",tags:[],version:"current",sidebarPosition:81,frontMatter:{sidebar_position:81,id:"Data Fetching"},sidebar:"guideSidebar",previous:{title:"Custom App",permalink:"/shuvijs.org/docs/guide/Custom App"},next:{title:"Custom Document",permalink:"/shuvijs.org/docs/guide/Custom Document"}},d={},s=[{value:"What is Loader",id:"what-is-loader",level:2},{value:"Timing of Executing Loader",id:"timing-of-executing-loader",level:2},{value:"Return Type of Loader",id:"return-type-of-loader",level:2},{value:"Serializable Object",id:"serializable-object",level:3},{value:"Redirecting Response",id:"redirecting-response",level:3},{value:"Error Response",id:"error-response",level:3},{value:"Exception of Running Loader",id:"exception-of-running-loader",level:2},{value:"Loader Type",id:"loader-type",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-loader"},"What is Loader"),(0,a.kt)("p",null,"Shuvi provides a feature to fetch initial data when server-side rendering or route navigation for route component.",(0,a.kt)("br",{parentName:"p"}),"\n","Each route module can export a component and a ",(0,a.kt)("inlineCode",{parentName:"p"},"loader"),". "),(0,a.kt)("p",null,"The loader is a function that receives a content object parameter containing current url and request information and several methods and returns a data object, a redirecting response or an error response."),(0,a.kt)("p",null,"The hook ",(0,a.kt)("inlineCode",{parentName:"p"},"useLoaderData")," will provide the data that ",(0,a.kt)("inlineCode",{parentName:"p"},"loader")," returns."),(0,a.kt)("p",null,"Take a look at the simple example as the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useLoaderData, Loader } from '@shuvi/runtime';\n\nconst RouteComponent = () => {\n  // highlight-next-line\n  const data = useLoaderData<LoaderData>();\n  return (\n    <div>\n      <p>{data.hello}</p>\n    </div>\n  );\n};\n\ntype LoaderData = {\n  hello: string;\n};\n\nasync function doSomethingAsync () {\n  // do something async\n}\n\n// highlight-start\nexport const loader: Loader<LoaderData> = async ({\n  isServer, pathname, query, params, redirect, error, appContext, req\n}) => {\n  await doSomethingAsync()\n  return {\n    hello: 'world'\n  };\n};\n// highlight-end\n\n\nexport default RouteComponent;\n")),(0,a.kt)("h2",{id:"timing-of-executing-loader"},"Timing of Executing Loader"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"loader")," is isomorphic and it will run before every server-side or client-side initial rendering and every route navigation to make sure the returned data is ready when component renders."),(0,a.kt)("p",null,"By default, when using server-side rendering, all loaders will run at server-side and the result of loaders will be inserted to the HTML document, so that during hydrating, the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"loader")," can be reused and ",(0,a.kt)("inlineCode",{parentName:"p"},"loader")," will not run at client side."),(0,a.kt)("p",null,"On navigations in the browser, ",(0,a.kt)("inlineCode",{parentName:"p"},"loader")," will run at client side before route navigation complete."),(0,a.kt)("p",null,"Shuvi allows nested routes. All ",(0,a.kt)("inlineCode",{parentName:"p"},"loader"),"s of matched route modules will run in parallel."),(0,a.kt)("p",null,"When a route navigation is triggered, only the loader of the newly rendered route component, the loader of the route component that remains rendered but the params have changed, and the loader of the last matched route component will be executed."),(0,a.kt)("h2",{id:"return-type-of-loader"},"Return Type of Loader"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Loader")," should return a serializable object or a specific ",(0,a.kt)("inlineCode",{parentName:"p"},"response")," indicating redirecting or throwing error."),(0,a.kt)("h3",{id:"serializable-object"},"Serializable Object"),(0,a.kt)("p",null,"It is the most common situation that ",(0,a.kt)("inlineCode",{parentName:"p"},"loader")," returns an object which is route component needed."),(0,a.kt)("p",null,"But please note the returned object must be serializable because the returned data will be serialized as string and will be inserted in the HTML that send to the browser so that the data can be reused while hydrating."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Loader } from '@shuvi/runtime';\n\ntype LoaderData = {\n  hello: string;\n};\n\nexport const loader: Loader<LoaderData> = async () => {\n  return {\n    hello: 'world'\n  };\n};\n\n")),(0,a.kt)("h3",{id:"redirecting-response"},"Redirecting Response"),(0,a.kt)("p",null,"It is allowed that ",(0,a.kt)("inlineCode",{parentName:"p"},"loader")," returns a response indicating redirecting to another path or url.",(0,a.kt)("br",{parentName:"p"}),"\n","A redirecting response can be created by ",(0,a.kt)("inlineCode",{parentName:"p"},"redirect")," method on ",(0,a.kt)("inlineCode",{parentName:"p"},"loader")," parameter object as the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Loader } from '@shuvi/runtime';\nexport const loader: Loader = async ({ redirect }) => {\n  return redirect('/target', 301)\n};\n")),(0,a.kt)("h3",{id:"error-response"},"Error Response"),(0,a.kt)("p",null,"It is also allowed that ",(0,a.kt)("inlineCode",{parentName:"p"},"loader")," returns a response that redirects to an error page with error statusCode.",(0,a.kt)("br",{parentName:"p"}),"\n","An error response can be created by ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," method on ",(0,a.kt)("inlineCode",{parentName:"p"},"loader")," parameter object as the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Loader } from '@shuvi/runtime';\nexport const loader: Loader = async ({ error }) => {\n  return error('error message', 404)\n};\n")),(0,a.kt)("h2",{id:"exception-of-running-loader"},"Exception of Running Loader"),(0,a.kt)("p",null,"If loader throws an error or causes an unhandled rejection, shuvi will handle this unexpected error."),(0,a.kt)("p",null,"On server side, shuvi will send a blank HTML and fallback to client-side rendering."),(0,a.kt)("p",null,"On client side, shuvi will automatically redirect to the error page."),(0,a.kt)("h2",{id:"loader-type"},"Loader Type"),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"../api-reference/loader"},"API-Reference / Loader")))}u.isMDXComponent=!0}}]);