"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[9514,6614],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,h=u["".concat(i,".").concat(p)]||u[p]||m[p]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7917:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ce});var a=n(9496),r=n(9613),o=n(6294),l=n(5461),c=n(5924),i=n(8740),s=n(356),d=n(2081);function m(e){return a.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var u=n(6227),p=n(7047),h=n(2157),b=n(2225);const y="menuHtmlItem_NW1Y";var f=n(6572);function g(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(v,(0,d.Z)({item:t},n));case"html":return a.createElement(E,(0,d.Z)({item:t},n));default:return a.createElement(k,(0,d.Z)({item:t},n))}}function v(e){let{item:t,onItemClick:n,activePath:r,level:o,index:l,...s}=e;const{items:m,label:h,collapsible:b,className:y,href:g}=t,v=function(e){const t=(0,f.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),E=(0,i._F)(t,r),k=(0,i.Mg)(g,r),{collapsed:Z,setCollapsed:N}=(0,i.uR)({initialState:()=>!!b&&(!E&&t.collapsed)});!function(e){let{isActive:t,collapsed:n,setCollapsed:r}=e;const o=(0,i.D9)(t);(0,a.useEffect)((()=>{t&&!o&&n&&r(!1)}),[t,o,n,r])}({isActive:E,collapsed:Z,setCollapsed:N});const{expandedItem:T,setExpandedItem:C}=(0,i.fP)();function S(e){void 0===e&&(e=!Z),C(e?null:l),N(e)}const{autoCollapseSidebarCategories:I}=(0,i.LU)();return(0,a.useEffect)((()=>{b&&T&&T!==l&&I&&N(!0)}),[b,T,l,N,I]),a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":Z},y)},a.createElement("div",{className:(0,c.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},a.createElement(p.Z,(0,d.Z)({className:(0,c.Z)("menu__link",{"menu__link--sublist":b&&!g,"menu__link--active":E}),onClick:b?e=>{null==n||n(t),g?S(!1):(e.preventDefault(),S())}:()=>{null==n||n(t)},"aria-current":k?"page":void 0,href:b?null!=v?v:"#":v},s),h),g&&b&&a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:h}),type:"button",className:"clean-btn menu__caret",onClick:e=>{e.preventDefault(),S()}})),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:Z},a.createElement(_,{items:m,tabIndex:Z?-1:0,onItemClick:n,activePath:r,level:o+1})))}function E(e){let{item:t,level:n,index:r}=e;const{value:o,defaultStyle:l,className:s}=t;return a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(n),l&&y+" menu__list-item",s),key:r,dangerouslySetInnerHTML:{__html:o}})}function k(e){let{item:t,onItemClick:n,activePath:r,level:o,index:l,...s}=e;const{href:m,label:u,className:y}=t,f=(0,i._F)(t,r);return a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",y),key:u},a.createElement(p.Z,(0,d.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":f}),"aria-current":f?"page":void 0,to:m},(0,h.Z)(m)&&{onClick:n?()=>n(t):void 0},s),(0,h.Z)(m)?u:a.createElement("span",null,u,a.createElement(b.Z,null))))}function Z(e){let{items:t,...n}=e;return a.createElement(i.D_,null,t.map(((e,t)=>a.createElement(g,(0,d.Z)({key:t,item:e,index:t},n)))))}const _=(0,a.memo)(Z),N="sidebar_QEKm",T="sidebarWithHideableNavbar_kFG_",C="sidebarHidden_ioeN",S="sidebarLogo_sU_H",I="menu_YDfZ",O="menuWithAnnouncementBar_KLDL",P="collapseSidebarButton_oI61",x="collapseSidebarButtonIcon_F2tc";function L(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",P),onClick:t},a.createElement(m,{className:x}))}function w(e){let{path:t,sidebar:n,onCollapse:r,isHidden:o}=e;const l=function(){const{isActive:e}=(0,i.nT)(),[t,n]=(0,a.useState)(e);return(0,i.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}(),{navbar:{hideOnScroll:d},hideableSidebar:m}=(0,i.LU)();return a.createElement("div",{className:(0,c.Z)(N,{[T]:d,[C]:o})},d&&a.createElement(s.Z,{tabIndex:-1,className:S}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",I,{[O]:l})},a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(_,{items:n,activePath:t,level:1}))),m&&a.createElement(L,{onClick:r}))}const A=e=>{let{toggleSidebar:t,sidebar:n,path:r}=e;return a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(_,{items:n,activePath:r,onItemClick:e=>{"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function M(e){return a.createElement(i.Cv,{component:A,props:e})}const D=a.memo(w),j=a.memo(M);function B(e){const t=(0,i.iP)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(D,e),r&&a.createElement(j,e))}var F=n(2234),H=n(9649);const R="codeBlockContainer_wBFW",W="codeBlockContent_bA5z",z="codeBlockTitle_W1qZ",V="codeBlock_pemA",K="codeBlockStandalone_a6jo",U="copyButton_A02j",Y="codeBlockLines_bvlO";function G(e){var t;let{children:n,className:r="",metastring:o,title:l,language:s}=e;const{prism:m}=(0,i.LU)(),[p,h]=(0,a.useState)(!1),[b,y]=(0,a.useState)(!1);(0,a.useEffect)((()=>{y(!0)}),[]);const f=(0,i.bc)(o)||l,g=(0,i.pJ)();if(a.Children.toArray(n).some((e=>(0,a.isValidElement)(e))))return a.createElement(H.ZP,(0,d.Z)({},H.lG,{key:String(b),theme:g,code:"",language:"text"}),(e=>{let{className:t,style:o}=e;return a.createElement("pre",{tabIndex:0,className:(0,c.Z)(t,K,"thin-scrollbar",R,r,i.kM.common.codeBlock),style:o},a.createElement("code",{className:Y},n))}));const v=Array.isArray(n)?n.join(""):n,E=null!=(t=null!=s?s:(0,i.Vo)(r))?t:m.defaultLanguage,{highlightLines:k,code:Z}=(0,i.nZ)(v,o,E),_=()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),r=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const o=document.getSelection();let l=!1;o.rangeCount>0&&(l=o.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),l&&(o.removeAllRanges(),o.addRange(l)),r&&r.focus()}(Z),h(!0),setTimeout((()=>h(!1)),2e3)};return a.createElement(H.ZP,(0,d.Z)({},H.lG,{key:String(b),theme:g,code:Z,language:null!=E?E:"text"}),(e=>{let{className:t,style:n,tokens:o,getLineProps:l,getTokenProps:s}=e;return a.createElement("div",{className:(0,c.Z)(R,r,{["language-"+E]:E&&!r.includes("language-"+E)},i.kM.common.codeBlock)},f&&a.createElement("div",{style:n,className:z},f),a.createElement("div",{className:(0,c.Z)(W,E)},a.createElement("pre",{tabIndex:0,className:(0,c.Z)(t,V,"thin-scrollbar"),style:n},a.createElement("code",{className:Y},o.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const n=l({line:e,key:t});return k.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,d.Z)({key:t},n),e.map(((e,t)=>a.createElement("span",(0,d.Z)({key:t},s({token:e,key:t}))))),a.createElement("br",null))})))),a.createElement("button",{type:"button","aria-label":(0,u.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,c.Z)(U,"clean-btn"),onClick:_},p?a.createElement(u.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(u.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var q=n(2952);const J="details_fkJI";function Q(e){let{...t}=e;return a.createElement(i.PO,(0,d.Z)({},t,{className:(0,c.Z)("alert alert--info",J,t.className)}))}const X={head:e=>{const t=a.Children.map(e.children,(e=>function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e)));return a.createElement(F.Z,e,t)},code:e=>{const t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||a.isValidElement(e)&&t.includes(e.props.mdxType)))?a.createElement("code",e):a.createElement(G,e)},a:e=>a.createElement(p.Z,e),pre:e=>{var t;return a.createElement(G,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:{...e})},details:e=>{const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(Q,(0,d.Z)({},e,{summary:n}),r)},h1:e=>a.createElement(q.Z,(0,d.Z)({as:"h1"},e)),h2:e=>a.createElement(q.Z,(0,d.Z)({as:"h2"},e)),h3:e=>a.createElement(q.Z,(0,d.Z)({as:"h3"},e)),h4:e=>a.createElement(q.Z,(0,d.Z)({as:"h4"},e)),h5:e=>a.createElement(q.Z,(0,d.Z)({as:"h5"},e)),h6:e=>a.createElement(q.Z,(0,d.Z)({as:"h6"},e))};var $=n(6614);const ee="backToTopButton_rbcG",te="backToTopButtonShow_z3u4";function ne(){const e=(0,a.useRef)(null);return{smoothScrollTop:function(){e.current=function(){let e=null;return function t(){const n=document.documentElement.scrollTop;n>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*n)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>null==e.current?void 0:e.current()}}function ae(){const[e,t]=(0,a.useState)(!1),n=(0,a.useRef)(!1),{smoothScrollTop:r,cancelScrollToTop:o}=ne();return(0,i.RF)(((e,a)=>{let{scrollY:r}=e;const l=null==a?void 0:a.scrollY;if(!l)return;if(n.current)return void(n.current=!1);const c=r<l;if(c||o(),r<300)t(!1);else if(c){const e=document.documentElement.scrollHeight;r+window.innerHeight<e&&t(!0)}else t(!1)})),(0,i.SL)((e=>{e.location.hash&&(n.current=!0,t(!1))})),a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,ee,{[te]:e}),type:"button",onClick:()=>r()})}var re=n(5555);const oe={docPage:"docPage_XL_Q",docMainContainer:"docMainContainer_LVVH",docSidebarContainer:"docSidebarContainer_Q4TS",docMainContainerEnhanced:"docMainContainerEnhanced_ODHc",docSidebarContainerHidden:"docSidebarContainerHidden_JKTI",collapsedDocSidebar:"collapsedDocSidebar_jKK8",expandSidebarButtonIcon:"expandSidebarButtonIcon_DOus",docItemWrapperEnhanced:"docItemWrapperEnhanced_Vti0"};function le(e){let{currentDocRoute:t,versionMetadata:n,children:o,sidebarName:s}=e;const d=(0,i.Vq)(),{pluginId:p,version:h}=n,[b,y]=(0,a.useState)(!1),[f,g]=(0,a.useState)(!1),v=(0,a.useCallback)((()=>{f&&g(!1),y((e=>!e))}),[f]);return a.createElement(l.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:h,tag:(0,i.os)(p,h)}},a.createElement("div",{className:oe.docPage},a.createElement(ae,null),d&&a.createElement("aside",{className:(0,c.Z)(i.kM.docs.docSidebarContainer,oe.docSidebarContainer,{[oe.docSidebarContainerHidden]:b}),onTransitionEnd:e=>{e.currentTarget.classList.contains(oe.docSidebarContainer)&&b&&g(!0)}},a.createElement(B,{key:s,sidebar:d,path:t.path,onCollapse:v,isHidden:f}),f&&a.createElement("div",{className:oe.collapsedDocSidebar,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:v,onClick:v},a.createElement(m,{className:oe.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(oe.docMainContainer,{[oe.docMainContainerEnhanced]:b||!d})},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",oe.docItemWrapper,{[oe.docItemWrapperEnhanced]:b})},a.createElement(r.Zo,{components:X},o)))))}function ce(e){const{route:{routes:t},versionMetadata:n,location:r}=e,l=t.find((e=>(0,re.LX)(r.pathname,e)));if(!l)return a.createElement($.default,null);const c=l.sidebar,s=c?n.docsSidebars[c]:null;return a.createElement(a.Fragment,null,a.createElement(F.Z,null,a.createElement("html",{className:n.className})),a.createElement(i.qu,{version:n},a.createElement(i.bT,{sidebar:s},a.createElement(le,{currentDocRoute:l,versionMetadata:n,sidebarName:c},(0,o.H)(t,{versionMetadata:n})))))}},2952:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(2081),r=n(9496),o=n(5924),l=n(6227),c=n(8740);const i="anchorWithStickyNavbar_feHZ",s="anchorWithHideOnScrollNavbar_YAO2";function d(e){let{as:t,id:n,...d}=e;const{navbar:{hideOnScroll:m}}=(0,c.LU)();return n?r.createElement(t,(0,a.Z)({},d,{className:(0,o.Z)("anchor",{[s]:m,[i]:!m}),id:n}),d.children,r.createElement("a",{className:"hash-link",href:"#"+n,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,d)}function m(e){let{as:t,...n}=e;return"h1"===t?r.createElement("h1",(0,a.Z)({},n,{id:void 0}),n.children):r.createElement(d,(0,a.Z)({as:t},n))}},6614:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(9496),r=n(5461),o=n(6227);function l(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},9649:(e,t,n)=>{n.d(t,{ZP:()=>h,lG:()=>l});var a=n(999);const r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var o=n(9496),l={Prism:a.default,theme:r};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var s=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},u=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=i({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=i({},n,{backgroundColor:null}),r};function p(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const h=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?u(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=i({},p(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?i({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),c(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),c(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=i({},p(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?i({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),c(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=a[l]++)<r[l];){var u=void 0,p=t[l],h=n[l][o];if("string"==typeof h?(p=l>0?p:["plain"],u=h):(p=m(p,h.type),h.alias&&(p=m(p,h.alias)),u=h.content),"string"==typeof u){var b=u.split(s),y=b.length;c.push({types:p,content:b[0]});for(var f=1;f<y;f++)d(c),i.push(c=[]),c.push({types:p,content:b[f]})}else l++,t.push(p),n.push(u),a.push(0),r.push(u.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return d(c),i}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component)}}]);