"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[7928],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=p,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:p,i[1]=a;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(665),p=(n(9496),n(9613));const o={sidebar_position:81,id:"Custom App"},i=void 0,a={unversionedId:"guide/Custom App",id:"guide/Custom App",title:"Custom App",description:"Create a src/app.js file to intervene shuvi app.",source:"@site/docs/guide/custom-app.md",sourceDirName:"guide",slug:"/guide/Custom App",permalink:"/shuvijs.org/docs/guide/Custom App",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/custom-app.md",tags:[],version:"current",sidebarPosition:81,frontMatter:{sidebar_position:81,id:"Custom App"},sidebar:"guideSidebar",previous:{title:"Fast Refresh",permalink:"/shuvijs.org/docs/guide/Fast Refresh"},next:{title:"Data Fetching",permalink:"/shuvijs.org/docs/guide/Data Fetching"}},s={},l=[{value:"init",id:"init",level:2},{value:"appContext",id:"appcontext",level:2},{value:"appComponent",id:"appcomponent",level:2},{value:"dispose",id:"dispose",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Create a ",(0,p.kt)("inlineCode",{parentName:"p"},"src/app.js")," file to intervene shuvi app."),(0,p.kt)("h2",{id:"init"},"init"),(0,p.kt)("p",null,"run on initialization"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"example:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"export const init = () => {\n  console.log('init');\n};\n")),(0,p.kt)("h2",{id:"appcontext"},"appContext"),(0,p.kt)("p",null,"Should return custom ctx data, mixin ",(0,p.kt)("inlineCode",{parentName:"p"},"ctx.appContext"),", fired after ",(0,p.kt)("inlineCode",{parentName:"p"},"init"),"."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"example"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"export const appContext = ctx => {\n  return {\n    ...ctx,\n    data: 1\n  };\n}\n")),(0,p.kt)("h2",{id:"appcomponent"},"appComponent"),(0,p.kt)("p",null,"'appComponent' is a function that should return a component that is the arrow at the top of the entire application."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"example"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"// src/app.js\n\nexport const appComponent = UserApp => {\n  function AppComponent(props) {\n    return (\n      <div>\n        <div>This is AppComponent</div>\n        <UserApp {...props} />\n      </div>\n    );\n  }\n  if (UserApp.getInitialProps)\n    AppComponent.getInitialProps = UserApp.getInitialProps;\n  return AppComponent;\n};\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"// src/routes/page.js\nexport default function Index(props) {\n  return <div>Index Page: {props.index}</div>;\n}\n\n")),(0,p.kt)("p",null,"The ",(0,p.kt)("strong",{parentName:"p"},"notes")," shown layers of HOC in result HTML."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-html"},'// render result\n<div id="__APP"> // container to render\n  // highlight-next-line\n  // getAppComponent HOC\n  <div>\n    <div>This is AppComponent</div>\n    <div>\n      // highlight-next-line\n      // user custom app\n      <div id="pathname">pathname: /</div>\n      // highlight-next-line\n      // getRootAppComponent HOC\n      <div>\n        <div>This is getRootAppComponent</div>\n        // highlight-next-line\n        // index page\n        <div>Index Page: index props</div>\n      </div>\n    </div>\n    </div>\n  </div>\n</div>\n')),(0,p.kt)("h2",{id:"dispose"},"dispose"),(0,p.kt)("p",null,"Will only run on the server side, when the page request is completed."),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"example:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"export const dispose = () => {\n  console.log('dispose');\n};\n")))}c.isMDXComponent=!0}}]);