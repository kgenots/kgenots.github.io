"use strict";(self.webpackChunkgithub_web=self.webpackChunkgithub_web||[]).push([[8209],{28057:(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var a=s(11855),i=s(51038),r=s(20281);const l=()=>(0,r.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var n=s(67754),c=s(71141),o=s(32030),d=s(11887),m=s(26742),u=s(53178),b=s(49243);function g(e){const{pathname:t}=(0,u.zy)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,b.ys)(e.permalink,t))}(e,t)))),[e,t])}const h={sidebar:"sidebar_CITy",sidebarItemTitle:"sidebarItemTitle_NsKq",sidebarItemList:"sidebarItemList_piQk",sidebarItem:"sidebarItem_fWdt",sidebarItemLink:"sidebarItemLink_nOva",sidebarItemLinkActive:"sidebarItemLinkActive_NLI9"};var j=s(63159);function p(e){let{sidebar:t}=e;const s=g(t.items);return(0,j.jsx)("aside",{className:"col col--3",children:(0,j.jsxs)("nav",{className:(0,i.A)(h.sidebar,"thin-scrollbar"),"aria-label":(0,r.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,j.jsx)("div",{className:(0,i.A)(h.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,j.jsx)("ul",{className:(0,i.A)(h.sidebarItemList,"clean-list"),children:s.map((e=>(0,j.jsx)("li",{className:h.sidebarItem,children:(0,j.jsx)(m.A,{isNavLink:!0,to:e.permalink,className:h.sidebarItemLink,activeClassName:h.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var x=s(32126);function v(e){let{sidebar:t}=e;const s=g(t.items);return(0,j.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,j.jsx)("li",{className:"menu__list-item",children:(0,j.jsx)(m.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function f(e){return(0,j.jsx)(x.GX,{component:v,props:e})}function N(e){let{sidebar:t}=e;const s=(0,d.l)();return t?.items.length?"mobile"===s?(0,j.jsx)(f,{sidebar:t}):(0,j.jsx)(p,{sidebar:t}):null}function k(e){const{sidebar:t,toc:s,children:a,...r}=e,l=t&&t.items.length>0;return(0,j.jsx)(o.A,{...r,children:(0,j.jsx)("div",{className:"container margin-vert--lg",children:(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)(N,{sidebar:t}),(0,j.jsx)("main",{className:(0,i.A)("col",{"col--7":l,"col--9 col--offset-1":!l}),children:a}),s&&(0,j.jsx)("div",{className:"col col--2",children:s})]})})})}var _=s(25385),A=s(19083);const I={tag:"tag_W8rx"};function L(e){let{letterEntry:t}=e;return(0,j.jsxs)("article",{children:[(0,j.jsx)(A.A,{as:"h2",id:t.letter,children:t.letter}),(0,j.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,j.jsx)("li",{className:I.tag,children:(0,j.jsx)(_.A,{...e})},e.permalink)))}),(0,j.jsx)("hr",{})]})}function T(e){let{tags:t}=e;const s=function(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,j.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,j.jsx)(L,{letterEntry:e},e.letter)))})}var C=s(96790);function w(e){let{tags:t,sidebar:s}=e;const a=l();return(0,j.jsxs)(n.e3,{className:(0,i.A)(c.G.wrapper.blogPages,c.G.page.blogTagsListPage),children:[(0,j.jsx)(n.be,{title:a}),(0,j.jsx)(C.A,{tag:"blog_tags_list"}),(0,j.jsxs)(k,{sidebar:s,children:[(0,j.jsx)(A.A,{as:"h1",children:a}),(0,j.jsx)(T,{tags:t})]})]})}},25385:(e,t,s)=>{s.d(t,{A:()=>n});s(11855);var a=s(51038),i=s(26742);const r={tag:"tag_yPEp",tagRegular:"tagRegular_gjTM",tagWithCount:"tagWithCount_fQDY"};var l=s(63159);function n(e){let{permalink:t,label:s,count:n}=e;return(0,l.jsxs)(i.A,{href:t,className:(0,a.A)(r.tag,n?r.tagWithCount:r.tagRegular),children:[s,n&&(0,l.jsx)("span",{children:n})]})}}}]);