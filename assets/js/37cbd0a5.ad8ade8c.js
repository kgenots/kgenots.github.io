"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[27295],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,b=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68428:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={title:"How to work with Plugin Stores",sidebar_position:1},l=void 0,c={unversionedId:"plugin-sdk/guides/how-to-work-with-plugin-stores",id:"plugin-sdk/guides/how-to-work-with-plugin-stores",title:"How to work with Plugin Stores",description:"The plugin SDK offers a realtime key-value database. This can be accessed under",source:"@site/docs/archive/plugin-sdk/guides/how-to-work-with-plugin-stores.mdx",sourceDirName:"plugin-sdk/guides",slug:"/plugin-sdk/guides/how-to-work-with-plugin-stores",permalink:"/archive/plugin-sdk/guides/how-to-work-with-plugin-stores",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How to work with Plugin Stores",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Operations on Store",permalink:"/archive/plugin-sdk/usage/stores-api/manage-stores"},next:{title:"Exchange data between plugin and meeting",permalink:"/archive/plugin-sdk/guides/exchange-data-between-plugin-and-meeting"}},u={},p=[{value:"Creating stores",id:"creating-stores",level:3},{value:"Subscribing to stores changes",id:"subscribing-to-stores-changes",level:3},{value:"Updating the store",id:"updating-the-store",level:3}],d={toc:p};function g(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The plugin SDK offers a realtime key-value database. This can be accessed under\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"plugin.stores")," modules"),(0,n.kt)("p",null,"There are a bunch of things you can do with plugin stores. Like\ncreating/deleting stores and basic CRUD operation on every store."),(0,n.kt)("h3",{id:"creating-stores"},"Creating stores"),(0,n.kt)("p",null,"Stores can be global or local. Local stores are available only to the user that\ncreated them while global stores are available to everyone."),(0,n.kt)("admonition",{title:"important",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Store creation is a local event. It is recommended that it occurs for all\nclients.")),(0,n.kt)("p",null,"Here's how you can create a store:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"    // create a global store\n    const videoStore = plugin.stores.create('youtube');\n\n    // create a local store\n    const my-playlist = plugin.stores.create('private-playlist', { local: true });\n")),(0,n.kt)("h3",{id:"subscribing-to-stores-changes"},"Subscribing to stores changes"),(0,n.kt)("p",null,"Once a store is created the next step would be to subscribe to changes. It is\nrecommended that you do this just after the store is created."),(0,n.kt)("p",null,"You can subscribe to a particular key in the store like so. Please note that you\ndo not need to define a key before subscribing to it."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"    const videoStore = plugin.stores.create('youtube');\n    videoStore.subscribe('video', (data) => {\n        ...\n    });\n")),(0,n.kt)("h3",{id:"updating-the-store"},"Updating the store"),(0,n.kt)("p",null,"Updating a key in the store is an asynchronous task. When a user updates the\nstore, it will be updated for all users."),(0,n.kt)("p",null,"All users subscribed to the store will receive a notification for it."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const button = document.getElementById('play-video');\nbutton.addEventListener('click', async () => {\n  await videoStore.set('video', {\n    url: 'https://www.youtube.com/watch?v=UGl4XZ_zr5w',\n  });\n  const vid = videoStore.get('video');\n});\n")))}g.isMDXComponent=!0}}]);