"use strict";(self.webpackChunkshuvi_document=self.webpackChunkshuvi_document||[]).push([[7918],{3470:function(e,t,a){a.r(t),a.d(t,{default:function(){return ie}});var n=a(9496),l=a(1626),r=a(2848),s=a(8891),i=a(5583);function c(e){var t=e.permalink,a=e.title,l=e.subLabel;return n.createElement(i.Z,{className:"pagination-nav__link",to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}function o(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(c,(0,r.Z)({},t,{subLabel:n.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(c,(0,r.Z)({},a,{subLabel:n.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var d=a(6046),m=a(8359),u=a(4233);var v={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){var t=v[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:l},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function E(e){var t,a=e.className,r=e.versionMetadata,s=(0,d.Z)().siteConfig.title,i=(0,m.gA)({failfast:!0}).pluginId,c=(0,u.J)(i).savePreferredVersionName,o=(0,m.Jo)(i),v=o.latestDocSuggestion,E=o.latestVersionSuggestion,g=null!=v?v:(t=E).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:s,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:E.label,to:g.path,onClick:function(){return c(E.name)}})))}function g(e){var t=e.className,a=(0,u.E6)();return a.banner?n.createElement(E,{className:t,versionMetadata:a}):null}function p(e){var t=e.className,a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(s.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}var f=a(181);function N(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function k(e){var t=e.lastUpdatedBy;return n.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(k,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var L=a(9213),Z="iconEdit_PHsZ",C=["className"];function U(e){var t=e.className,a=(0,L.Z)(e,C);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(Z,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function T(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(U,null),n.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var y="tag_hEUI",w="tagRegular_VN8H",M="tagWithCount_hWDs";function A(e){var t,a=e.permalink,r=e.name,s=e.count;return n.createElement(i.Z,{href:a,className:(0,l.Z)(y,(t={},t[w]=!s,t[M]=s,t))},r,s&&n.createElement("span",null,s))}var H="tags_OV1e",x="tag_FSuo";function B(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(H,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:x},n.createElement(A,{name:t,permalink:a}))}))))}var S="lastUpdated_TfP6";function V(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(B,e)))}function I(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(T,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",S)},(a||r)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function D(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,s=t.formattedLastUpdatedAt,i=t.lastUpdatedBy,c=t.tags,o=c.length>0,d=!!(a||r||i);return o||d?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(V,{tags:c}),d&&n.createElement(I,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:i,formattedLastUpdatedAt:s})):null}var F=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function O(e){var t=e.toc,a=e.className,l=e.linkClassName,r=e.isChild;return t.length?n.createElement("ul",{className:r?void 0:a},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(O,{isChild:!0,toc:e.children,className:a,linkClassName:l}))}))):null}function z(e){var t=e.toc,a=e.className,l=void 0===a?"table-of-contents table-of-contents__left-border":a,s=e.linkClassName,i=void 0===s?"table-of-contents__link":s,c=e.linkActiveClassName,o=void 0===c?void 0:c,d=e.minHeadingLevel,m=e.maxHeadingLevel,v=(0,L.Z)(e,F),h=(0,u.LU)(),b=null!=d?d:h.tableOfContents.minHeadingLevel,E=null!=m?m:h.tableOfContents.maxHeadingLevel,g=(0,u.b9)({toc:t,minHeadingLevel:b,maxHeadingLevel:E}),p=(0,n.useMemo)((function(){if(i&&o)return{linkClassName:i,linkActiveClassName:o,minHeadingLevel:b,maxHeadingLevel:E}}),[i,o,b,E]);return(0,u.Si)(p),n.createElement(O,(0,r.Z)({toc:g,className:l,linkClassName:i},v))}var P="tableOfContents_lFHw",R=["className"];function W(e){var t=e.className,a=(0,L.Z)(e,R);return n.createElement("div",{className:(0,l.Z)(P,"thin-scrollbar",t)},n.createElement(z,(0,r.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var J="tocCollapsible_dIu4",q="tocCollapsibleButton_Fyb6",K="tocCollapsibleContent_eZFB",j="tocCollapsibleExpanded_CdKA";function Q(e){var t,a=e.toc,r=e.className,i=e.minHeadingLevel,c=e.maxHeadingLevel,o=(0,u.uR)({initialState:!0}),d=o.collapsed,m=o.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(J,(t={},t[j]=!d,t),r)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",q),onClick:m},n.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:K,collapsed:d},n.createElement(z,{toc:a,minHeadingLevel:i,maxHeadingLevel:c})))}var G=a(6367),X="docItemContainer_LNyH",Y="docItemCol_vDCS",$="tocMobile_RBzz",ee="breadcrumbsContainer_K2JL",te="breadcrumbsItemLink_NzC8",ae=a(2795);function ne(e){var t=e.children,a=e.href,r=(0,l.Z)("breadcrumbs__link",te);return a?n.createElement(i.Z,{className:r,href:a},t):n.createElement("span",{className:r},t)}function le(e){var t=e.children,a=e.active;return n.createElement("li",{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t)}function re(){var e=(0,ae.Z)("/");return n.createElement(le,null,n.createElement(ne,{href:e},"\ud83c\udfe0"))}function se(){var e=(0,u.s1)(),t=(0,u.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(u.kM.docs.docBreadcrumbs,ee),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs"},t&&n.createElement(re,null),e.map((function(t,a){return n.createElement(le,{key:a,active:a===e.length-1},n.createElement(ne,{href:t.href},t.label))})))):null}function ie(e){var t,a,r=e.content,s=r.metadata,i=r.frontMatter,c=r.assets,d=i.keywords,m=i.hide_title,v=i.hide_table_of_contents,h=i.toc_min_heading_level,b=i.toc_max_heading_level,E=s.description,N=s.title,k=null!=(t=c.image)?t:i.image,_=!m&&void 0===r.contentTitle,L=(0,u.iP)(),Z=!v&&r.toc&&r.toc.length>0,C=Z&&("desktop"===L||"ssr"===L);return n.createElement(n.Fragment,null,n.createElement(f.Z,{title:N,description:E,keywords:d,image:k}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(a={},a[Y]=!v,a))},n.createElement(g,null),n.createElement("div",{className:X},n.createElement("article",null,n.createElement(se,null),n.createElement(p,null),Z&&n.createElement(Q,{toc:r.toc,minHeadingLevel:h,maxHeadingLevel:b,className:(0,l.Z)(u.kM.docs.docTocMobile,$)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},_&&n.createElement("header",null,n.createElement(G.Z,{as:"h1"},N)),n.createElement(r,null)),n.createElement(D,e)),n.createElement(o,{previous:s.previous,next:s.next}))),C&&n.createElement("div",{className:"col col--3"},n.createElement(W,{toc:r.toc,minHeadingLevel:h,maxHeadingLevel:b,className:u.kM.docs.docTocDesktop}))))}},6367:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(2848),l=a(9213),r=a(9496),s=a(1626),i=a(8891),c=a(4233),o="anchorWithStickyNavbar_Qjm7",d="anchorWithHideOnScrollNavbar_w2kM",m=["as","id"],u=["as"];function v(e){var t,a=e.as,u=e.id,v=(0,l.Z)(e,m),h=(0,c.LU)().navbar.hideOnScroll;return u?r.createElement(a,(0,n.Z)({},v,{className:(0,s.Z)("anchor",(t={},t[d]=h,t[o]=!h,t)),id:u}),v.children,r.createElement("a",{className:"hash-link",href:"#"+u,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(a,v)}function h(e){var t=e.as,a=(0,l.Z)(e,u);return"h1"===t?r.createElement("h1",(0,n.Z)({},a,{id:void 0}),a.children):r.createElement(v,(0,n.Z)({as:t},a))}}}]);