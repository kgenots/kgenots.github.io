"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[40108],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=o.createContext({}),p=function(e){var t=o.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,f=b["".concat(a,".").concat(d)]||b[d]||u[d]||i;return r?o.createElement(f,c(c({ref:t},l),{},{components:r})):o.createElement(f,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=b;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<i;p++)c[p]=r[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},41605:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>v,frontMatter:()=>s,metadata:()=>p,toc:()=>u});r(67294);var o=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={},a="Webhooks and Events",p={unversionedId:"projects/webhooks/index",id:"projects/webhooks/index",title:"Webhooks and Events",description:"Learn how Dyte uses webhooks to push real-time updates to your applications.",source:"@site/docs/develop/projects/webhooks/index.mdx",sourceDirName:"projects/webhooks",slug:"/projects/webhooks/",permalink:"/develop/projects/webhooks/",draft:!1,editUrl:"https://github.com/kgenots/kgenots-web/tree/main/docs/develop/projects/webhooks/index.mdx",tags:[],version:"current",lastUpdatedAt:1692269291,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 17\uc77c",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction to Dyte\u2019s Webinar",permalink:"/develop/projects/webinar/intro-webinar"},next:{title:"Webhooks Overview",permalink:"/develop/projects/webhooks/webhooks-overview"}},l={},u=[],b=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=b("CardSection"),f=b("Card"),y={toc:u};function v(e){var{components:t}=e,r=c(e,["components"]);return(0,o.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}({},y,r),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webhooks-and-events"},"Webhooks and Events"),(0,o.kt)("p",null,"Learn how Dyte uses webhooks to push real-time updates to your applications."),(0,o.kt)(d,{id:"Webhooks",mdxType:"CardSection"},(0,o.kt)(f,{title:"Webhooks Overview",to:"/develop/projects/webhooks/webhooks-overview",mdxType:"Card"}),(0,o.kt)(f,{title:"Set Up Webhooks to Receive Real-time Updates",to:"/develop/projects/webhooks/webhooks-and-events",mdxType:"Card"}),(0,o.kt)(f,{title:"View Webhook Events List",to:"/develop/projects/webhooks/webhook-events",mdxType:"Card"}),(0,o.kt)(f,{title:"Verify Webhooks",to:"/develop/projects/webhooks/signatures",mdxType:"Card"})))}v.isMDXComponent=!0}}]);