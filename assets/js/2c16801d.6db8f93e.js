"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[88119],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),y=p(n),d=o,f=y["".concat(i,".").concat(d)]||y[d]||u[d]||l;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,c=new Array(l);c[0]=y;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<l;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},30504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={},i="DytePoll",p={unversionedId:"components/dyte-poll",id:"components/dyte-poll",title:"DytePoll",description:"A poll component.",source:"@site/docs/react-ui-kit/components/dyte-poll.mdx",sourceDirName:"components",slug:"/components/dyte-poll",permalink:"/react-ui-kit/components/dyte-poll",draft:!1,editUrl:"https://github.com/kgenots/kgenots-web/tree/main/docs/react-ui-kit/components/dyte-poll.mdx",tags:[],version:"current",lastUpdatedAt:1692164292,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 16\uc77c",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DytePollForm",permalink:"/react-ui-kit/components/dyte-poll-form"},next:{title:"DytePollsToggle",permalink:"/react-ui-kit/components/dyte-polls-toggle"}},s={},u=[{value:"Props",id:"props",level:2}],y=(d="PropsTable",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const f={toc:u};function m(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dytepoll"},"DytePoll"),(0,r.kt)("p",null,"A poll component."),(0,r.kt)("p",null,"Shows a poll where a user can vote."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<DytePoll\n  poll={{\n    id: 'poll-id',\n    question: 'Have you started using dyte yet?',\n    options: [\n      {\n        text: 'Yes',\n        votes: [{ id: 'vaibhavs-user-id', name: 'Vaibhav' }],\n        count: 0,\n      },\n      {\n        text: 'Nope',\n        votes: [],\n        count: 0,\n      },\n    ],\n    anonymous: false,\n    hideVotes: false,\n    createdBy: 'Vaibhav',\n    createdByUserId: 'vaibhavs-user-id',\n    voted: [],\n  }}\n  onDyteVotePoll={(e) => {\n    console.log('Voted', e.detail);\n  }}\n/>\n")),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)(y,{of:"dyte-poll",mdxType:"PropsTable"}))}m.isMDXComponent=!0}}]);