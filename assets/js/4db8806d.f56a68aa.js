"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[4874],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(k,s(s({ref:t},u),{},{components:n})):o.createElement(k,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(2081),a=(n(9496),n(9613));const r={id:"tutorials",title:"Tutorials"},s=void 0,i={unversionedId:"tutorials",id:"tutorials",title:"Tutorials",description:"Introduction",source:"@site/docs/tutorials.md",sourceDirName:".",slug:"/tutorials",permalink:"/shuvijs.org/docs/tutorials",draft:!1,editUrl:"https://github.com/shuvijs/shuvijs.org/tree/master/docs/tutorials.md",tags:[],version:"current",frontMatter:{id:"tutorials",title:"Tutorials"},sidebar:"docs",previous:{title:"Introduction",permalink:"/shuvijs.org/docs/"},next:{title:"Tutorials",permalink:"/shuvijs.org/docs/tutorials"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Create your first app",id:"create-your-first-app",level:2},{value:"System Requirements",id:"system-requirements",level:3},{value:"Create a project",id:"create-a-project",level:3},{value:"Create a route",id:"create-a-route",level:3},{value:"Use loader data",id:"use-loader-data",level:3},{value:"Dynamic route",id:"dynamic-route",level:3},{value:"Layout route",id:"layout-route",level:3},{value:"Assets",id:"assets",level:3},{value:"CSS modules",id:"css-modules",level:3},{value:"Deploy",id:"deploy",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Shuvi.js")," is a front-end application development solution that integrates modern tool chains, focuses on improving development experience and efficiency."),(0,a.kt)("h2",{id:"create-your-first-app"},"Create your first app"),(0,a.kt)("p",null,"We are going to make a simple blog demo through a series of operations."),(0,a.kt)("p",null,"We will learn the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"init project"),(0,a.kt)("li",{parentName:"ul"},"use page route"),(0,a.kt)("li",{parentName:"ul"},"data fetching"),(0,a.kt)("li",{parentName:"ul"},"use dynamic route"),(0,a.kt)("li",{parentName:"ul"},"use layout route"),(0,a.kt)("li",{parentName:"ul"},"use css modules"),(0,a.kt)("li",{parentName:"ul"},"how to deploy")),(0,a.kt)("h3",{id:"system-requirements"},"System Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nodejs/Release"},"node ^16.x"))),(0,a.kt)("h3",{id:"create-a-project"},"Create a project"),(0,a.kt)("p",null,"Initialize a new Shuvi project. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm init shuvi@latest\n")),(0,a.kt)("p",null,"We'll call it \"blog-tutorial\" but you can call it something else if you'd like."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u2714 What is your project named? blog-tutorial\n")),(0,a.kt)("p",null,"Let's start the dev server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm run dev\n")),(0,a.kt)("h3",{id:"create-a-route"},"Create a route"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"notice: In the convention routing specification,\nall our routing endpoint files are placed in the src/routes directory.")),(0,a.kt)("p",null,"We want to create a component handle to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/posts")," path."),(0,a.kt)("p",null,"Create the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/routes/posts")," directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p src/routes/posts\n")),(0,a.kt)("p",null,"Create the ",(0,a.kt)("inlineCode",{parentName:"p"},"page.js")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/routes/posts")," directory."),(0,a.kt)("p",null,"The file content of page.js is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export default function PostsPage() {\n  return <div>posts</div>;\n}\n")),(0,a.kt)("p",null,"Now visit ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," and you will see the ",(0,a.kt)("inlineCode",{parentName:"p"},"PostsPage")," component."),(0,a.kt)("h3",{id:"use-loader-data"},"Use loader data"),(0,a.kt)("p",null,"Create the ",(0,a.kt)("inlineCode",{parentName:"p"},"posts-mock-data.js")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'export const postsMockData = [\n  {\n    id: "1",\n    title: "First-post",\n    content: "First-post-content",\n  },\n  {\n    id: "2",\n    title: "Second-post",\n    content: "Second-post-content",\n  },\n];\n')),(0,a.kt)("p",null,"Modify the content of the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/routes/posts/page.js")," file to\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Notice: Loaders can be synchronous or asynchronous")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useLoaderData, Link } from "@shuvi/runtime";\nimport { postsMockData } from "../../posts-mock-data";\n\nexport default function PostsPage() {\n  const data = useLoaderData();\n\n  return (\n    <div>\n      <ul>\n        {data.posts.map((post) => {\n          return (\n            <li key={post.id}>\n              <Link>{post.title}</Link>\n            </li>\n          );\n        })}\n      </ul>\n    </div>\n  );\n}\n\nexport const loader = () => {\n  return new Promise((res) => {\n    setTimeout(() => {\n      res({\n        posts: postsMockData,\n      });\n    }, 1000);\n  });\n};\n')),(0,a.kt)("h3",{id:"dynamic-route"},"Dynamic route"),(0,a.kt)("p",null,"Next, we need to access the details of a post."),(0,a.kt)("p",null,"Create the ",(0,a.kt)("inlineCode",{parentName:"p"},"page.js")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"blog/src/routes/posts/[id]")," directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useLoaderData } from "@shuvi/runtime";\nimport { postsMockData } from "../../../posts-mock-data";\n\nexport default function PostPage() {\n  const { id, title, content } = useLoaderData();\n  return (\n    <div>\n      <h1>{title}</h1>\n      <h2>ID:{id}</h2>\n      <p>{content}</p>\n    </div>\n  );\n}\n\nexport const loader = (ctx) => {\n  const { id } = ctx.params;\n  return postsMockData.find((item) => item.id === id);\n};\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Notice: When ",(0,a.kt)("inlineCode",{parentName:"p"},"[id]")," is used as a folder name, it will become a dynamic path rule.")),(0,a.kt)("p",null,"When we visit /posts/1 or /posts/2,\nwe will get the correct post content."),(0,a.kt)("h3",{id:"layout-route"},"Layout route"),(0,a.kt)("p",null,"We also need a component to control nested routes as a common layout\ncomponent to avoid repeated rendering."),(0,a.kt)("p",null,"Change src/routes/post/page.js to src/routes/post.layout.js,\nand modify the file content as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useLoaderData, Link, RouterView } from "@shuvi/runtime";\nimport { postsMockData } from "../../posts-mock-data";\n\nexport default function PostsLayout() {\n  const data = useLoaderData();\n\n  return (\n    <div>\n      <ul>\n        {data.posts?.map((post) => {\n          return (\n            <li key={post.id}>\n              <Link to={`/posts/${post.id}`}>{post.title}</Link>\n            </li>\n          );\n        })}\n      </ul>\n      <div>\n        <RouterView />\n      </div>\n    </div>\n  );\n}\n\nexport const loader = () => {\n  return new Promise((res) => {\n    setTimeout(() => {\n      res({\n        posts: postsMockData,\n      });\n    }, 1000);\n  });\n};\n')),(0,a.kt)("h3",{id:"assets"},"Assets"),(0,a.kt)("p",null,"Create the src/assets directory and place two image files at will."),(0,a.kt)("p",null,"Modify the content of the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/post-mock-data.js")," file to\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import img1 from "./assets/img1.png";\nimport img2 from "./assets/img2.png";\n\nexport const postsMockData = [\n  {\n    id: "1",\n    title: "First-post",\n    content: "First-post-content",\n    img: img1,\n  },\n  {\n    id: "2",\n    title: "Second-post",\n    content: "Second-post-content",\n    img: img2,\n  },\n];\n')),(0,a.kt)("p",null,"Modify the content of the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/routes/posts/[id]/page.js")," file to\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useLoaderData } from "@shuvi/runtime";\nimport { postsMockData } from "../../../posts-mock-data";\n\nexport default function PostPage() {\n  const { id, title, content, img } = useLoaderData();\n  return (\n    <div>\n      <h1>{title}</h1>\n      <h2>ID:{id}</h2>\n      <p>{content}</p>\n      <p>\n        <img src={img} alt="" />\n      </p>\n    </div>\n  );\n}\n\nexport const loader = (ctx) => {\n  const { id } = ctx.params;\n  return postsMockData.find((item) => item.id === id);\n};\n')),(0,a.kt)("p",null,"Revisit the post page and you can see that the image has been loaded."),(0,a.kt)("h3",{id:"css-modules"},"CSS modules"),(0,a.kt)("p",null,"Create the ",(0,a.kt)("inlineCode",{parentName:"p"},"style.css")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/routes/posts")," directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"* {\n  padding: 0;\n  margin: 0;\n}\n\n.headerNav {\n  display: flex;\n  color: yellow;\n  border-bottom: 1px solid #f1f1f1;\n}\n\n.headerNav li {\n  list-style: none;\n  cursor: pointer;\n  padding: 12px;\n  border-right: 1px solid #f1f1f1;\n}\n\n.headerNav li a {\n  text-decoration: none;\n  color: #00a4db;\n}\n\n.headerNav li:hover a {\n  color: #2d66c3;\n}\n\n.mainContent {\n  margin: 20px 40px;\n  padding: 20px;\n}\n\n.mainContent h1,\n.mainContent h2 {\n  text-align: center;\n  font-weight: 400;\n  border-bottom: 1px solid #f1f1f1;\n  margin-bottom: 20px;\n  padding-bottom: 12px;\n}\n\n.mainContent p:first-of-type img {\n  width: 100%;\n  object-fit: cover;\n  height: 200px;\n}\n\n.mainContent p:last-of-type {\n  padding: 20px;\n  border: 1px solid #f1f1f1;\n  font-size: 14px;\n  font-weight: 200;\n}\n")),(0,a.kt)("p",null,"Modify the content of the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/routes/posts/layout.js")," file to\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useLoaderData, Link, RouterView } from "@shuvi/runtime";\nimport { postsMockData } from "../../posts-mock-data";\nimport styles from "./style.css";\n\nexport default function PostsLayout() {\n  const data = useLoaderData();\n\n  return (\n    <div>\n      <ul className={styles.headerNav}>\n        {data.posts?.map((post) => {\n          return (\n            <li key={post.id}>\n              <Link to={`/posts/${post.id}`}>{post.title}</Link>\n            </li>\n          );\n        })}\n      </ul>\n      <div className={styles.mainContent}>\n        <RouterView />\n      </div>\n    </div>\n  );\n}\n\nexport const loader = () => {\n  return new Promise((res) => {\n    setTimeout(() => {\n      res({\n        posts: postsMockData,\n      });\n    }, 1000);\n  });\n};\n')),(0,a.kt)("h3",{id:"deploy"},"Deploy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm build\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm serve\n")))}c.isMDXComponent=!0}}]);