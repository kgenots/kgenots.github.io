"use strict";(self.webpackChunkkgenots=self.webpackChunkkgenots||[]).push([[1731],{1356:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),a=r(6010),l=r(7158),o=r(4683),c=r(1984),s=r(2210);const i="sidebar_re4s",m="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",g="sidebarItem__DBe",d="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function f({sidebar:e}){return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,a.Z)(i,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,a.Z)(m,"margin-bottom--md")},e.title),n.createElement("ul",{className:(0,a.Z)(u,"clean-list")},e.items.map((e=>n.createElement("li",{key:e.permalink,className:g},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title)))))))}var b=r(6847);function h({sidebar:e}){return n.createElement("ul",{className:"menu__list"},e.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function E(e){return n.createElement(b.Zo,{component:h,props:e})}function v({sidebar:e}){const t=(0,o.i)();return(null==e?void 0:e.items.length)?"mobile"===t?n.createElement(E,{sidebar:e}):n.createElement(f,{sidebar:e}):null}function P(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function y(e){const{sidebar:t,toc:r,children:o}=e,c=P(e,["sidebar","toc","children"]),s=t&&t.items.length>0;return n.createElement(l.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(v,{sidebar:t}),n.createElement("main",{className:(0,a.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),r&&n.createElement("div",{className:"col col--2"},r))))}},164:(e,t,r)=>{r.d(t,{Z:()=>R});var n=r(7294),a=r(6010),l=r(4185),o=r(676);function c({children:e,className:t}){const{frontMatter:r,assets:a}=(0,l.C)(),{withBaseUrl:c}=(0,o.C)();var s;const i=null!==(s=a.image)&&void 0!==s?s:r.image;return n.createElement("article",{className:t,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},i&&n.createElement("meta",{itemProp:"image",content:c(i,{absolute:!0})}),e)}var s=r(1984);const i="title_f1Hy";function m({className:e}){const{metadata:t,isBlogPostPage:r}=(0,l.C)(),{permalink:o,title:c}=t,m=r?"h1":"h2";return n.createElement(m,{className:(0,a.Z)(i,e),itemProp:"headline"},r?c:n.createElement(s.Z,{itemProp:"url",to:o},c))}var u=r(2210),g=r(60);const d="container_mt6G";function p({readingTime:e}){const t=function(){const{selectMessage:e}=(0,g.c)();return t=>{const r=Math.ceil(t);return e(r,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:r}))}}();return n.createElement(n.Fragment,null,t(e))}function f({date:e,formattedDate:t}){return n.createElement("time",{dateTime:e,itemProp:"datePublished"},t)}function b(){return n.createElement(n.Fragment,null," \xb7 ")}function h({className:e}){const{metadata:t}=(0,l.C)(),{date:r,formattedDate:o,readingTime:c}=t;return n.createElement("div",{className:(0,a.Z)(d,"margin-vert--md",e)},n.createElement(f,{date:r,formattedDate:o}),void 0!==c&&n.createElement(n.Fragment,null,n.createElement(b,null),n.createElement(p,{readingTime:c})))}function E(e){return e.href?n.createElement(s.Z,e):n.createElement(n.Fragment,null,e.children)}function v({author:e,className:t}){const{name:r,title:l,url:o,imageURL:c,email:s}=e,i=o||s&&`mailto:${s}`||void 0;return n.createElement("div",{className:(0,a.Z)("avatar margin-bottom--sm",t)},c&&n.createElement(E,{href:i,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:c,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(E,{href:i,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}const P="authorCol_Hf19",y="imageOnlyAuthorRow_pa_O",O="imageOnlyAuthorCol_G86a";function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){N(e,t,r[t])}))}return e}function _(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function k({className:e}){const{metadata:{authors:t},assets:r}=(0,l.C)();if(0===t.length)return null;const o=t.every((({name:e})=>!e));var c;return n.createElement("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",o?y:"row",e)},t.map(((e,t)=>n.createElement("div",{className:(0,a.Z)(!o&&"col col--6",o?O:P),key:t},n.createElement(v,{author:_(w({},e),{imageURL:null!==(c=r.authorsImageUrls[t])&&void 0!==c?c:e.imageURL})})))))}function j(){return n.createElement("header",null,n.createElement(m,null),n.createElement(h,null),n.createElement(k,null))}var Z=r(5750),C=r(9387);function T({children:e,className:t}){const{isBlogPostPage:r}=(0,l.C)();return n.createElement("div",{id:r?Z.blogPostContainerID:void 0,className:(0,a.Z)("markdown",t),itemProp:"articleBody"},n.createElement(C.Z,null,e))}var I=r(5401),B=r(5845);function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function F(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function D(){return n.createElement("b",null,n.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function M(e){const{blogPostTitle:t}=e,r=F(e,["blogPostTitle"]);return n.createElement(s.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){x(e,t,r[t])}))}return e}({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},r),n.createElement(D,null))}const S="blogPostFooterDetailsFull_mRVl";function L(){const{metadata:e,isBlogPostPage:t}=(0,l.C)(),{tags:r,title:o,editUrl:c,hasTruncateMarker:s}=e,i=!t&&s,m=r.length>0;return m||i||c?n.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",t&&S)},m&&n.createElement("div",{className:(0,a.Z)("col",{"col--9":i})},n.createElement(B.Z,{tags:r})),t&&c&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(I.Z,{editUrl:c})),i&&n.createElement("div",{className:(0,a.Z)("col text--right",{"col--3":m})},n.createElement(M,{blogPostTitle:o,to:e.permalink}))):null}function R({children:e,className:t}){const r=function(){const{isBlogPostPage:e}=(0,l.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(c,{className:(0,a.Z)(r,t)},n.createElement(j,null),n.createElement(T,null,e),n.createElement(L,null))}},4185:(e,t,r)=>{r.d(t,{C:()=>c,n:()=>o});var n=r(7294),a=r(7806);const l=n.createContext(null);function o({children:e,content:t,isBlogPostPage:r=!1}){const a=function({content:e,isBlogPostPage:t}){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,toc:e.toc,isBlogPostPage:t})),[e,t])}({content:t,isBlogPostPage:r});return n.createElement(l.Provider,{value:a},e)}function c(){const e=(0,n.useContext)(l);if(null===e)throw new a.i6("BlogPostProvider");return e}},60:(e,t,r)=>{r.d(t,{c:()=>i});var n=r(7294),a=r(8241);const l=["zero","one","two","few","many","other"];function o(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function i(){const e=s();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const a=r.select(t),l=r.pluralForms.indexOf(a);return n[Math.min(l,n.length-1)]}(r,t,e)}}}}]);