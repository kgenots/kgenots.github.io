"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[97235],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(r),d=o,f=b["".concat(s,".").concat(d)]||b[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},53594:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={title:"Livestream the Recording to an External RTMP Endpoint",sidebar_position:6,sidebar_class_name:"hidden"},s=void 0,p={unversionedId:"urbanbase/livestream-recording",id:"urbanbase/livestream-recording",title:"Livestream the Recording to an External RTMP Endpoint",description:"You can stream Dyte recordings in real-time to any external RTMP endpoint (such as YouTube, Facebook, LinkedIn, Restream, Twitch, etc.) while the meeting is in progress.",source:"@site/docs/projects/urbanbase/livestream-recording.mdx",sourceDirName:"urbanbase",slug:"/urbanbase/livestream-recording",permalink:"/projects/urbanbase/livestream-recording",draft:!1,tags:[],version:"current",lastUpdatedAt:1693223168,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 28\uc77c",sidebarPosition:6,frontMatter:{title:"Livestream the Recording to an External RTMP Endpoint",sidebar_position:6,sidebar_class_name:"hidden"},sidebar:"tutorialSidebar",previous:{title:"[Batch] BluePrint",permalink:"/projects/urbanbase/batch-blueprint"},next:{title:"Stop Recording a Meeting",permalink:"/projects/urbanbase/stop-recording"}},l={},u=[],b={toc:u};function d(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},b,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can stream Dyte recordings in real-time to any external RTMP endpoint (such as YouTube, Facebook, LinkedIn, Restream, Twitch, etc.) while the meeting is in progress."),(0,n.kt)("p",null,"Dyte sends 1280px ","*"," 720px video using the FLV codec, and AAC audio codec to the\nconfigured RTMP endpoint. The external endpoint can be passed using the\n",(0,n.kt)("inlineCode",{parentName:"p"},"live_streaming_config")," parameter in the\n",(0,n.kt)("a",{parentName:"p",href:"/api/?v=v2#/operations/start_recording"},"Start Recording")," API:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "live_streaming_config": {\n    "rtmpUrl": "rtmp://your.rtmp.url/live/stream/your-stream-key"\n  }\n}\n')))}d.isMDXComponent=!0}}]);