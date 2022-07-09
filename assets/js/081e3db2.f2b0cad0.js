"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[2888],{9613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=a,m=c["".concat(d,".").concat(h)]||c[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5795:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(2848),a=n(9213),o=(n(9496),n(9613)),i=["components"],l={sidebar_position:81,id:"Data Fetching"},d=void 0,s={unversionedId:"guide/Data Fetching",id:"guide/Data Fetching",title:"Data Fetching",description:"What is Loader",source:"@site/docs/guide/data-fetching.md",sourceDirName:"guide",slug:"/guide/Data Fetching",permalink:"/shuvijs.org/docs/guide/Data Fetching",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/data-fetching.md",tags:[],version:"current",sidebarPosition:81,frontMatter:{sidebar_position:81,id:"Data Fetching"},sidebar:"guideSidebar",previous:{title:"Custom Runtime",permalink:"/shuvijs.org/docs/guide/Custom Runtime"},next:{title:"Custom Document",permalink:"/shuvijs.org/docs/guide/Custom Document"}},u={},p=[{value:"What is Loader",id:"what-is-loader",level:2},{value:"Timing of Executing Loader",id:"timing-of-executing-loader",level:2},{value:"Return Type of Loader",id:"return-type-of-loader",level:2},{value:"Serializable Object",id:"serializable-object",level:3},{value:"Redirecting Response",id:"redirecting-response",level:3},{value:"Error Response",id:"error-response",level:3},{value:"Exception of Running Loader",id:"exception-of-running-loader",level:2},{value:"Loader Type",id:"loader-type",level:2}],c={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-loader"},"What is Loader"),(0,o.kt)("p",null,"Shuvi provides a feature to fetch initial data when server-side rendering or route navigation for route component.",(0,o.kt)("br",{parentName:"p"}),"\n","Each route module can export a component and a ",(0,o.kt)("inlineCode",{parentName:"p"},"loader"),". "),(0,o.kt)("p",null,"The loader is a function that receives a content object parameter containing current url and request information and several methods and returns a data object, a redirecting response or an error response."),(0,o.kt)("p",null,"The hook ",(0,o.kt)("inlineCode",{parentName:"p"},"useLoaderData")," will provide the data that ",(0,o.kt)("inlineCode",{parentName:"p"},"loader")," returns."),(0,o.kt)("p",null,"Take a look at the simple example as the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useLoaderData, Loader } from '@shuvi/runtime';\n\nconst RouteComponent = () => {\n  // highlight-next-line\n  const data = useLoaderData<LoaderData>();\n  return (\n    <div>\n      <p>{data.hello}</p>\n    </div>\n  );\n};\n\ntype LoaderData = {\n  hello: string;\n};\n\nasync function doSomethingAsync () {\n  // do something async\n}\n\n// highlight-start\nexport const loader: Loader<LoaderData> = async ({\n  isServer, pathname, query, params, redirect, error, appContext, req\n}) => {\n  await doSomethingAsync()\n  return {\n    hello: 'world'\n  };\n};\n// highlight-end\n\n\nexport default RouteComponent;\n")),(0,o.kt)("h2",{id:"timing-of-executing-loader"},"Timing of Executing Loader"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"loader")," is isomorphic and it will run before every server-side or client-side initial rendering and every route navigation to make sure the returned data is ready when component renders."),(0,o.kt)("p",null,"By default, when using server-side rendering, all loaders will run at server-side and the result of loaders will be inserted to the HTML document, so that during hydrating, the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"loader")," can be reused and ",(0,o.kt)("inlineCode",{parentName:"p"},"loader")," will not run at client side."),(0,o.kt)("p",null,"On navigations in the browser, ",(0,o.kt)("inlineCode",{parentName:"p"},"loader")," will run at client side before route navigation complete."),(0,o.kt)("p",null,"Shuvi allows nested routes. All ",(0,o.kt)("inlineCode",{parentName:"p"},"loader"),"s of matched route modules will run in parallel."),(0,o.kt)("p",null,"When a route navigation is triggered, only the loader of the newly rendered route component, the loader of the route component that remains rendered but the params have changed, and the loader of the last matched route component will be executed."),(0,o.kt)("h2",{id:"return-type-of-loader"},"Return Type of Loader"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Loader")," should return a serializable object or a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"response")," indicating redirecting or throwing error."),(0,o.kt)("h3",{id:"serializable-object"},"Serializable Object"),(0,o.kt)("p",null,"It is the most common situation that ",(0,o.kt)("inlineCode",{parentName:"p"},"loader")," returns an object which is route component needed."),(0,o.kt)("p",null,"But please note the returned object must be serializable because the returned data will be serialized as string and will be inserted in the HTML that send to the browser so that the data can be reused while hydrating."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Loader } from '@shuvi/runtime';\n\ntype LoaderData = {\n  hello: string;\n};\n\nexport const loader: Loader<LoaderData> = async () => {\n  return {\n    hello: 'world'\n  };\n};\n\n")),(0,o.kt)("h3",{id:"redirecting-response"},"Redirecting Response"),(0,o.kt)("p",null,"It is allowed that ",(0,o.kt)("inlineCode",{parentName:"p"},"loader")," returns a response indicating redirecting to another path or url.",(0,o.kt)("br",{parentName:"p"}),"\n","A redirecting response can be created by ",(0,o.kt)("inlineCode",{parentName:"p"},"redirect")," method on ",(0,o.kt)("inlineCode",{parentName:"p"},"loader")," parameter object as the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Loader } from '@shuvi/runtime';\nexport const loader: Loader = async ({ redirect }) => {\n  return redirect('/target', 301)\n};\n")),(0,o.kt)("h3",{id:"error-response"},"Error Response"),(0,o.kt)("p",null,"It is also allowed that ",(0,o.kt)("inlineCode",{parentName:"p"},"loader")," returns a response that redirects to an error page with error statusCode.",(0,o.kt)("br",{parentName:"p"}),"\n","An error response can be created by ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," method on ",(0,o.kt)("inlineCode",{parentName:"p"},"loader")," parameter object as the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Loader } from '@shuvi/runtime';\nexport const loader: Loader = async ({ error }) => {\n  return error('error message', 404)\n};\n")),(0,o.kt)("h2",{id:"exception-of-running-loader"},"Exception of Running Loader"),(0,o.kt)("p",null,"If loader throws an error or causes an unhandled rejection, shuvi will handle this unexpected error."),(0,o.kt)("p",null,"On server side, shuvi will send a blank HTML and fallback to client-side rendering."),(0,o.kt)("p",null,"On client side, shuvi will automatically redirect to the error page."),(0,o.kt)("h2",{id:"loader-type"},"Loader Type"),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"../api-reference/loader"},"API-Reference / Loader")))}h.isMDXComponent=!0}}]);