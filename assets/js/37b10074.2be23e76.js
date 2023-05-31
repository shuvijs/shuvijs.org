"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[6439],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(2081),a=(n(9496),n(9613));const r={id:"ESLint",title:"ESLint",sidebar_position:4.9,description:"Shuvi.js provides an integrated ESLint experience by default. These conformance rules help you use Shuvi.js in the optimal way."},o="ESLint",l={unversionedId:"guides/ESLint",id:"guides/ESLint",title:"ESLint",description:"Shuvi.js provides an integrated ESLint experience by default. These conformance rules help you use Shuvi.js in the optimal way.",source:"@site/docs/guides/eslint.md",sourceDirName:"guides",slug:"/guides/ESLint",permalink:"/shuvijs.org/docs/guides/ESLint",draft:!1,editUrl:"https://github.com/shuvijs/shuvijs.org/tree/master/docs/guides/eslint.md",tags:[],version:"current",sidebarPosition:4.9,frontMatter:{id:"ESLint",title:"ESLint",sidebar_position:4.9,description:"Shuvi.js provides an integrated ESLint experience by default. These conformance rules help you use Shuvi.js in the optimal way."},sidebar:"guides",previous:{title:"Custom Document Template",permalink:"/shuvijs.org/docs/guides/custom-behaviors/custom-document-template"},next:{title:"Plugin",permalink:"/shuvijs.org/docs/guides/plugin"}},s={},p=[{value:"ESLint Config",id:"eslint-config",level:2},{value:"ESLint Plugin",id:"eslint-plugin",level:2},{value:"Linting Custom Directories and Files",id:"linting-custom-directories-and-files",level:2},{value:"Caching",id:"caching",level:2},{value:"Disabling Rules",id:"disabling-rules",level:2},{value:"Usage With Other Tools",id:"usage-with-other-tools",level:2},{value:"Prettier",id:"prettier",level:3},{value:"lint-staged",id:"lint-staged",level:3},{value:"Migrating Existing Config",id:"migrating-existing-config",level:2},{value:"Recommended Plugin Ruleset",id:"recommended-plugin-ruleset",level:3},{value:"Additional Configurations",id:"additional-configurations",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eslint"},"ESLint"),(0,a.kt)("p",null,"Shuvi.js provides an integrated ",(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," experience out of the box. Add ",(0,a.kt)("inlineCode",{parentName:"p"},"shuvi lint")," as a script to ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "lint": "shuvi lint"\n}\n')),(0,a.kt)("p",null,"Then run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run lint")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn lint"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn lint\n")),(0,a.kt)("p",null,"If you don't already have ESLint configured in your application, you will be guided through the installation and configuration process."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn lint\n\n# You'll see a prompt like this:\n#\n# ? How would you like to configure ESLint?\n#\n# \u276f   Base configuration (recommended)\n#     Cancel\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Base"),": Includes Shuvi.js' base ESLint configuration. This is the recommended configuration for developers setting up ESLint for the first time."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "shuvi"\n}\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Cancel"),": Does not include any ESLint configuration. Only select this option if you plan on setting up your own custom ESLint configuration."))),(0,a.kt)("p",null,"If the recommended configuration option is selected, Shuvi.js will automatically install ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint-config-shuvi")," as development dependencies in your application and create an ",(0,a.kt)("inlineCode",{parentName:"p"},".eslintrc.json")," file in the project root directory containing the recommended configuration."),(0,a.kt)("p",null,"You can now run ",(0,a.kt)("inlineCode",{parentName:"p"},"shuvi lint")," every time you want to run ESLint to catch errors."),(0,a.kt)("p",null,"We recommend using an appropriate ",(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/integrations#editors"},"integration")," to view warnings and errors directly in your code editor during development."),(0,a.kt)("h2",{id:"eslint-config"},"ESLint Config"),(0,a.kt)("p",null,"The default configuration (",(0,a.kt)("inlineCode",{parentName:"p"},"eslint-config-shuvi"),") includes everything you need to have an optimal out-of-the-box linting experience in Shuvi.js. If you do not have ESLint already configured in your application, we recommend using ",(0,a.kt)("inlineCode",{parentName:"p"},"shuvi lint")," to set up ESLint along with this configuration."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you would like to use ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint-config-shuvi")," along with other ESLint configurations, refer to the ",(0,a.kt)("a",{parentName:"p",href:"#additional-configurations"},"Additional Configurations")," section to learn how to do so without causing any conflicts.")),(0,a.kt)("p",null,"Recommended rule-sets from the following ESLint plugins are all used within ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint-config-shuvi"),":"),(0,a.kt)("p",null,"-"," ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react"},(0,a.kt)("inlineCode",{parentName:"a"},"eslint-plugin-react")),(0,a.kt)("br",{parentName:"p"}),"\n","-"," ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},(0,a.kt)("inlineCode",{parentName:"a"},"eslint-plugin-react-hooks")),(0,a.kt)("br",{parentName:"p"}),"\n","-"," ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@shuvi/eslint-plugin-shuvi"},(0,a.kt)("inlineCode",{parentName:"a"},"eslint-plugin-shuvi")),"  "),(0,a.kt)("h2",{id:"eslint-plugin"},"ESLint Plugin"),(0,a.kt)("p",null,"Shuvi.js provides an ESLint plugin, ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@shuvi/eslint-plugin-shuvi"},(0,a.kt)("inlineCode",{parentName:"a"},"eslint-plugin-shuvi")),", already bundled within the base configuration that makes it possible to catch common issues and problems in a Shuvi.js application. The full set of rules is as follows:"),(0,a.kt)("p",null,"-"," \u2714: Enabled in the recommended configuration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"}),(0,a.kt)("th",{parentName:"tr",align:null},"Rule"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/shuvijs.org/docs/guides/rules/no-head-element"},"@shuvi/shuvi/no-head-element")),(0,a.kt)("td",{parentName:"tr",align:null},"Prevent usage of ",(0,a.kt)("inlineCode",{parentName:"td"},"<head>")," element.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/shuvijs.org/docs/guides/rules/no-html-link-for-pages"},"@shuvi/shuvi/no-html-link-for-pages")),(0,a.kt)("td",{parentName:"tr",align:null},"Prevent usage of ",(0,a.kt)("inlineCode",{parentName:"td"},"<a>")," elements to navigate to internal Shuvi.js pages.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"@shuvi/shuvi/no-typos-page"),(0,a.kt)("td",{parentName:"tr",align:null},"Prevent common typos in ",(0,a.kt)("a",{parentName:"td",href:"/shuvijs.org/docs/guides/Data%20Fetching"},"Shuvi.js's data fetching functions"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"@shuvi/shuvi/no-typos-custom-app"),(0,a.kt)("td",{parentName:"tr",align:null},"Prevent common typos in ",(0,a.kt)("a",{parentName:"td",href:"/shuvijs.org/docs/guides/custom-behaviors/custom-app"},"Custom App"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:null},"@shuvi/shuvi/no-typos-custom-server"),(0,a.kt)("td",{parentName:"tr",align:null},"Prevent common typos in ",(0,a.kt)("a",{parentName:"td",href:"/shuvijs.org/docs/guides/custom-behaviors/custom-server"},"Custom Server"))))),(0,a.kt)("p",null,"If you already have ESLint configured in your application, we recommend extending from this plugin directly instead of including ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint-config-shuvi")," unless a few conditions are met. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"#recommended-plugin-ruleset"},"Recommended Plugin Ruleset")," to learn more."),(0,a.kt)("h2",{id:"linting-custom-directories-and-files"},"Linting Custom Directories and Files"),(0,a.kt)("p",null,"By default, Shuvi.js will run ESLint for all files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  eslint: {\n    dirs: ['utils']\n  },\n}\n")),(0,a.kt)("p",null,"Similarly, the ",(0,a.kt)("inlineCode",{parentName:"p"},"--dir")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--file")," flags can be used for ",(0,a.kt)("inlineCode",{parentName:"p"},"shuvi lint")," to lint specific directories and files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"shuvi lint --dir utils --file bar.js\n")),(0,a.kt)("h2",{id:"caching"},"Caching"),(0,a.kt)("p",null,"To improve performance, information of files processed by ESLint are cached by default. This is stored in ",(0,a.kt)("inlineCode",{parentName:"p"},".shuvi/cache"),". If you include any ESLint rules that depend on more than the contents of a single source file and need to disable the cache, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-cache")," flag with ",(0,a.kt)("inlineCode",{parentName:"p"},"shuvi lint"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"shuvi lint --no-cache\n")),(0,a.kt)("h2",{id:"disabling-rules"},"Disabling Rules"),(0,a.kt)("p",null,"If you would like to modify or disable any rules provided by the supported plugins (",(0,a.kt)("inlineCode",{parentName:"p"},"react"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"react-hooks"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"shuvi"),"), you can directly change them using the ",(0,a.kt)("inlineCode",{parentName:"p"},"rules")," property in your ",(0,a.kt)("inlineCode",{parentName:"p"},".eslintrc"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "shuvi",\n  "rules": {\n    "react/no-unescaped-entities": "off",\n    "@shuvi/shuvi/no-page-custom-font": "off"\n  }\n}\n')),(0,a.kt)("h2",{id:"usage-with-other-tools"},"Usage With Other Tools"),(0,a.kt)("h3",{id:"prettier"},"Prettier"),(0,a.kt)("p",null,"ESLint also contains code formatting rules, which can conflict with your existing ",(0,a.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," setup. We recommend including ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prettier/eslint-config-prettier"},"eslint-config-prettier")," in your ESLint config to make ESLint and Prettier work together."),(0,a.kt)("p",null,"First, install the dependency:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev eslint-config-prettier\n# or\nyarn add --dev eslint-config-prettier\n")),(0,a.kt)("p",null,"Then, add ",(0,a.kt)("inlineCode",{parentName:"p"},"prettier")," to your existing ESLint config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": ["shuvi", "prettier"]\n}\n')),(0,a.kt)("h3",{id:"lint-staged"},"lint-staged"),(0,a.kt)("p",null,"If you would like to use ",(0,a.kt)("inlineCode",{parentName:"p"},"shuvi lint")," with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/okonet/lint-staged"},"lint-staged")," to run the linter on staged git files, you'll have to add the following to the ",(0,a.kt)("inlineCode",{parentName:"p"},".lintstagedrc.js")," file in the root of your project in order to specify usage of the ",(0,a.kt)("inlineCode",{parentName:"p"},"--file")," flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path')\n\nconst buildEslintCommand = (filenames) =>\n  `shuvi lint --fix --file ${filenames\n    .map((f) => path.relative(process.cwd(), f))\n    .join(' --file ')}`\n\nmodule.exports = {\n  '*.{js,jsx,ts,tsx}': [buildEslintCommand],\n}\n")),(0,a.kt)("h2",{id:"migrating-existing-config"},"Migrating Existing Config"),(0,a.kt)("h3",{id:"recommended-plugin-ruleset"},"Recommended Plugin Ruleset"),(0,a.kt)("p",null,"If you already have ESLint configured in your application and any of the following conditions are true:"),(0,a.kt)("p",null,"-"," You have one or more of the following plugins already installed (either separately or through a different config such as ",(0,a.kt)("inlineCode",{parentName:"p"},"airbnb")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"react-app"),"):"),(0,a.kt)("p",null,"  ","-"," ",(0,a.kt)("inlineCode",{parentName:"p"},"react"),(0,a.kt)("br",{parentName:"p"}),"\n","","-"," ",(0,a.kt)("inlineCode",{parentName:"p"},"react-hooks"),(0,a.kt)("br",{parentName:"p"}),"\n","","-"," ",(0,a.kt)("inlineCode",{parentName:"p"},"jsx-a11y"),(0,a.kt)("br",{parentName:"p"}),"\n","","-"," ",(0,a.kt)("inlineCode",{parentName:"p"},"import"),"  "),(0,a.kt)("p",null,"-"," You've defined specific ",(0,a.kt)("inlineCode",{parentName:"p"},"parserOptions")," that are different from how Babel is configured within Shuvi.js (this is not recommended unless you have customized your Babel configuration)\n","-"," You have ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint-plugin-import")," installed with Node.js and/or TypeScript ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/benmosher/eslint-plugin-import#resolvers"},"resolvers")," defined to handle imports"),(0,a.kt)("p",null,"Then we recommend either removing these settings if you prefer how these properties have been configured within ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vercel/shuvi.js/blob/canary/packages/eslint-config-shuvi/index.js"},(0,a.kt)("inlineCode",{parentName:"a"},"eslint-config-shuvi"))," or extending directly from the Shuvi.js ESLint plugin instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  extends: [\n    //...\n    'plugin:@shuvi/shuvi/recommended',\n  ],\n}\n")),(0,a.kt)("p",null,"The plugin can be installed normally in your project without needing to run ",(0,a.kt)("inlineCode",{parentName:"p"},"shuvi lint"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @shuvi/eslint-plugin-shuvi\n# or\nyarn add --dev @shuvi/eslint-plugin-shuvi\n")),(0,a.kt)("p",null,"This eliminates the risk of collisions or errors that can occur due to importing the same plugin or parser across multiple configurations."),(0,a.kt)("h3",{id:"additional-configurations"},"Additional Configurations"),(0,a.kt)("p",null,"If you already use a separate ESLint configuration and want to include ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint-config-shuvi"),", ensure that it is extended last after other configurations. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "extends": ["eslint:recommended", "shuvi"]\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"shuvi")," configuration already handles setting default values for the ",(0,a.kt)("inlineCode",{parentName:"p"},"parser"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"settings")," properties. There is no need to manually re-declare any of these properties unless you need a different configuration for your use case. If you include any other shareable configurations, ",(0,a.kt)("strong",{parentName:"p"},"you will need to make sure that these properties are not overwritten or modified"),". Otherwise, we recommend removing any configurations that share behavior with the ",(0,a.kt)("inlineCode",{parentName:"p"},"shuvi")," configuration or extending directly from the Shuvi.js ESLint plugin as mentioned above."))}d.isMDXComponent=!0}}]);