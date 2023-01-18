"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[3981],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,v=m["".concat(s,".").concat(d)]||m[d]||u[d]||p;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,i=new Array(p);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<p;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>a,toc:()=>l});var r=n(2081),o=(n(9496),n(9613));const p={sidebar_position:1,id:"custom-app",title:"Custom App"},i=void 0,a={unversionedId:"guides/custom-behaviors/custom-app",id:"guides/custom-behaviors/custom-app",title:"Custom App",description:"Create a src/app.js or src/app.ts file to intervene shuvi app.",source:"@site/docs/guides/custom-behaviors/custom-app.md",sourceDirName:"guides/custom-behaviors",slug:"/guides/custom-behaviors/custom-app",permalink:"/shuvijs.org/docs/guides/custom-behaviors/custom-app",draft:!1,editUrl:"https://github.com/shuvijs/shuvijs.org/tree/master/docs/guides/custom-behaviors/custom-app.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"custom-app",title:"Custom App"},sidebar:"guides",previous:{title:"Store",permalink:"/shuvijs.org/docs/guides/Store"},next:{title:"Custom Error",permalink:"/shuvijs.org/docs/guides/custom-behaviors/custom-error"}},s={},l=[{value:"<code>init</code>",id:"init",level:2},{value:"<code>appContext</code>",id:"appcontext",level:2},{value:"<code>appComponent</code>",id:"appcomponent",level:2},{value:"<code>dispose</code>",id:"dispose",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app.js")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"src/app.ts")," file to intervene shuvi app."),(0,o.kt)("h2",{id:"init"},(0,o.kt)("inlineCode",{parentName:"h2"},"init")),(0,o.kt)("p",null,"run on initialization"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},"import { InitFunction } from '@shuvi/runtime/app'\n\nexport const init = () => {\n  console.log('init');\n};\n")),(0,o.kt)("h2",{id:"appcontext"},(0,o.kt)("inlineCode",{parentName:"h2"},"appContext")),(0,o.kt)("p",null,"Should return custom ctx data, mixin ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.appContext"),", fired after ",(0,o.kt)("inlineCode",{parentName:"p"},"init"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},"import { AppContextFunction } from '@shuvi/runtime/app'\n\nexport const appContext: AppContextFunction = ctx => {\n  return {\n    ...ctx,\n    data: 1\n  };\n}\n")),(0,o.kt)("h2",{id:"appcomponent"},(0,o.kt)("inlineCode",{parentName:"h2"},"appComponent")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"appComponent")," is a function that should return a component that is the arrow at the top of the entire application."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/app.ts"',title:'"src/app.ts"'},"import { AppComponentFunction } from '@shuvi/runtime/app'\n\nexport const appComponent: AppComponentFunction = async UserApp => {\n  function AppComponent() {\n    return (\n      <div>\n        <div>This is AppComponent</div>\n        <UserApp />\n      </div>\n    );\n  }\n  return AppComponent;\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/routes/page.js"',title:'"src/routes/page.js"'},"// src/routes/page.js\nexport default function Index() {\n  return <div>Index Page</div>;\n}\n\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"notes")," shown layers of HOC in result HTML."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'// render result\n<div id="__APP"> // container to render\n  // highlight-next-line\n  // appComponent HOC\n  <div>\n    <div>This is AppComponent</div>\n    // highlight-next-line\n    // index page\n    <div>Index Page</div>\n  </div>\n</div>\n')),(0,o.kt)("h2",{id:"dispose"},(0,o.kt)("inlineCode",{parentName:"h2"},"dispose")),(0,o.kt)("p",null,"Will only run on the server side, when the page request is completed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app.ts"',title:'"src/app.ts"'},"import { DisposeFunction } from '@shuvi/runtime/app';\n\nexport const dispose: DisposeFunction = () => {\n  console.log('dispose');\n};\n")))}u.isMDXComponent=!0}}]);