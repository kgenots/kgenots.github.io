(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[56615],{21374:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>u,metadata:()=>d,toc:()=>f});n(67294);var r=n(3905),a=n(93070),o=n(50551),l=n(12283);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={tags:["web-core","quickstart","setup"],slug:"/",sidebar_position:2},p="Quickstart",d={unversionedId:"quickstart",id:"quickstart",title:"Quickstart",description:"This quickstart shows how to use Dyte's core SDKs to add live video and audio to",source:"@site/docs/web-core/quickstart.mdx",sourceDirName:".",slug:"/",permalink:"/web-core/",draft:!1,editUrl:"https://github.com/kgenots/kgenots-web/tree/main/docs/web-core/quickstart.mdx",tags:[{label:"web-core",permalink:"/web-core/tags/web-core"},{label:"quickstart",permalink:"/web-core/tags/quickstart"},{label:"setup",permalink:"/web-core/tags/setup"}],version:"current",lastUpdatedAt:1692164292,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 16\uc77c",sidebarPosition:2,frontMatter:{tags:["web-core","quickstart","setup"],slug:"/",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/web-core/Introduction"},next:{title:"Introduction",permalink:"/web-core/local-user/introduction"}},m={},f=[{value:"Objective",id:"objective",level:2},{value:"Before Getting Started",id:"before-getting-started",level:2},{value:"Step 1: Install the SDK",id:"step-1-install-the-sdk",level:2},{value:"Step 2: Initialize the SDK",id:"step-2-initialize-the-sdk",level:2},{value:"Step 3: Connect to the meeting",id:"step-3-connect-to-the-meeting",level:2},{value:"Join the room",id:"join-the-room",level:3},{value:"Leave the room",id:"leave-the-room",level:3}],g={toc:f};function h(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)("wrapper",s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quickstart"},"Quickstart"),(0,r.kt)("p",null,"This quickstart shows how to use Dyte's core SDKs to add live video and audio to\nyour JavaScript based applications."),(0,r.kt)("h2",{id:"objective"},"Objective"),(0,r.kt)("p",null,"You'll learn how to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install the Dyte SDK"),(0,r.kt)("li",{parentName:"ul"},"Initialize Dyte Client"),(0,r.kt)("li",{parentName:"ul"},"Connect to the meeting"),(0,r.kt)("li",{parentName:"ul"},"Go live!")),(0,r.kt)("h2",{id:"before-getting-started"},"Before Getting Started"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure you've read the ",(0,r.kt)("a",{parentName:"li",href:"/getting-started"},"Getting Started with Dyte")," topic\nand completed the following steps:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("a",{parentName:"li",href:"https://dev.dyte.io/"},"Dyte Developer Account")),(0,r.kt)("li",{parentName:"ul"},"Create ",(0,r.kt)("a",{parentName:"li",href:"https://dev.dyte.io/roles-presets"},"Presets"),". Dyte also includes the\nfollowing pre-configured presets for group call and webinar. You can simply\nuse the default preset if you don't wish to create one.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"webinar_viewer"),(0,r.kt)("li",{parentName:"ul"},"webinar_presenter"),(0,r.kt)("li",{parentName:"ul"},"group_call_host"),(0,r.kt)("li",{parentName:"ul"},"group_call_participant"))),(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("a",{parentName:"li",href:"/api/?v=v2#/operations/create_meeting"},"Dyte Meeting")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/?v=v2#/operations/add_participant"},"Add Participant")," to the meeting")))),(0,r.kt)("h2",{id:"step-1-install-the-sdk"},"Step 1: Install the SDK"),(0,r.kt)("p",null,"You can install the package using CDN, npm or Yarn."),(0,r.kt)(a.Z,{groupId:"node-pm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"},{label:"CDN",value:"CDN"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},"Install the SDK using npm.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @dytesdk/web-core\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/@dytesdk%2Fweb-core"},(0,r.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/@dytesdk%2Fweb-core.svg",alt:"npm version"})))),(0,r.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},"Install the SDK using yarn.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @dytesdk/web-core\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/@dytesdk%2Fweb-core"},(0,r.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/@dytesdk%2Fweb-core.svg",alt:"npm version"})))),(0,r.kt)(o.Z,{value:"CDN",mdxType:"TabItem"},"Add the following script tag in the head of your HTML file.",(0,r.kt)(l.J$,{mdxType:"WebCoreCDNInstallation"}))),(0,r.kt)("h2",{id:"step-2-initialize-the-sdk"},"Step 2: Initialize the SDK"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Initialize the Dyte client."),(0,r.kt)("li",{parentName:"ol"},"Call the ",(0,r.kt)("inlineCode",{parentName:"li"},"init()")," method and pass the authToken.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"authToken")),(0,r.kt)("td",{parentName:"tr",align:null},"After you've created the meeting, add each participant to the meeting using the ",(0,r.kt)("a",{parentName:"td",href:"/api#/operations/add_participant"},"Add Participant API"),". The API response contains the authToken.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const meeting = await DyteClient.init({\n  authToken,\n});\n")),(0,r.kt)("h2",{id:"step-3-connect-to-the-meeting"},"Step 3: Connect to the meeting"),(0,r.kt)("p",null,"Now, you have established the connection with the Dyte meeting server\nsuccessfully. Next step is to join the room."),(0,r.kt)("h3",{id:"join-the-room"},"Join the room"),(0,r.kt)("p",null,"To join the meeting room, call joinRoom() method on the dyteClient instance as\nshown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await meeting.joinRoom();\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Once the join room process completes roomJoined event is emitted on meeting.self\nnamespace."),(0,r.kt)("p",{parentName:"admonition"},"If you want to perform any actions, such as enabling audio, video, or starting\nand stopping recording, you can do so after the roomJoined event is fired."),(0,r.kt)("p",{parentName:"admonition"},"For example:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"meeting.self.on('roomJoined', () => {\n  console.log('User has joined the room', meeting.self.roomJoined);\n  // run my actions.\n});\n\nawait meeting.joinRoom();\n"))),(0,r.kt)("h3",{id:"leave-the-room"},"Leave the room"),(0,r.kt)("p",null,"Once the meeting is over, you can leave the meeting room."),(0,r.kt)("p",null,"To leave the meeting room, call ",(0,r.kt)("inlineCode",{parentName:"p"},"leaveRoom()")," method on the dyteClient as shown\nbelow."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await meeting.leaveRoom();\n")))}h.isMDXComponent=!0},12283:(e,t,n)=>{"use strict";n.d(t,{r4:()=>i,_8:()=>c,SQ:()=>u,J$:()=>s});var r=n(67294),a=n(10353);const o={};async function l({pkg:e="ui-kit"}){if(void 0!==o[e])return o[e];const t=await fetch(`https://registry.npmjs.com/@dytesdk/${e}`),n=(await t.json())["dist-tags"].latest;return o[e]=n,n}const i=()=>{const[e,t]=(0,r.useState)("+");return(0,r.useEffect)((()=>{const e=JSON.stringify({androidCore:!0});var n;fetch("https://b72qj023g7.execute-api.ap-south-1.amazonaws.com/default/android-core-latest",{method:"POST",body:e}).then((e=>e.json())).then((e=>t(null!==(n=e.latestVersion)&&void 0!==n?n:"+")))}),[]),r.createElement("div",null,r.createElement(a.Z,{language:"groovy"},`dependencies {\n    // (other dependencies)\n    implementation 'io.dyte:core-android:${e}'\n}`))},s=()=>{const[e,t]=(0,r.useState)("");return(0,r.useEffect)((()=>{!async function(){const e=await l({pkg:"web-core"});t(`-${e}`)}()}),[]),r.createElement(a.Z,{language:"html"},`<script src="https://cdn.dyte.in/core/dyte${e}.js" />`)},c=()=>{const[e,t]=(0,r.useState)(""),[n,o]=(0,r.useState)("");return(0,r.useEffect)((()=>{!async function(){const e=await l({pkg:"web-core"});t(`-${e}`);const n=await l({pkg:"ui-kit"});o(`@${n}`)}()}),[]),r.createElement(a.Z,{language:"html"},`<head>\n  <script type="module">\n      import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit${n}/loader/index.es2017.js';\n      defineCustomElements();\n  <\/script>\n  \x3c!-- Import Web Core via CDN too --\x3e\n  <script src="https://cdn.dyte.in/core/dyte${e}.js"><\/script>\n</head>`)},u=({modules:e=["provideDyteDesignSystem","extendConfig,"]})=>{const[t,n]=(0,r.useState)("");return(0,r.useEffect)((()=>{!async function(){const e=await l({pkg:"ui-kit"});n(`@${e}`)}()}),[]),r.createElement(a.Z,{language:"html"},`<head>\n  <script type="module">\n    import {\n      ${e.join(",\n    ")}\n    } from 'https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit${t}/dist/esm/index.js';\n  <\/script>\n</head>`)}},74457:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(67294),a=n(86010),o=n(30358),l=n(17300),i=n(92210),s=n(8241),c=n(30950),u=n(13151);const p="playgroundContainer_TGbA",d="playgroundHeader_qwyd",m="playgroundEditor_PvJ1",f="playgroundPreview_bb8I";var g=n(5464);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function b({children:e}){return r.createElement("div",{className:(0,a.Z)(d)},e)}function k(){return r.createElement("div",null,"Loading...")}function v(){return r.createElement(r.Fragment,null,r.createElement(b,null,r.createElement(i.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Preview")),r.createElement("div",{className:f},r.createElement(c.Z,{fallback:r.createElement(k,null)},(()=>r.createElement(r.Fragment,null,r.createElement(l.i5,null),r.createElement(l.IF,null))))))}function w(){const e=(0,o.Z)();return r.createElement(l.uz,{key:String(e),className:m})}function j(){return r.createElement(r.Fragment,null,r.createElement(b,null,r.createElement(i.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),r.createElement(w,null))}function O(e){var{children:t,transformCode:n}=e,a=y(e,["children","transformCode"]);const{siteConfig:{themeConfig:o}}=(0,s.Z)(),{liveCodeBlock:{playgroundPosition:i}}=o,c=(0,u.p)(),[d,m]=(0,g.useDyteClient)();return(0,r.useEffect)((()=>{m({roomName:"qplrfc-uuujcj",authToken:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYzU0MGRjLWQ5MjUtNDVjMi1hZTFiLWM2NDc2YTUwNmM2NyIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2NjU2NDcxNjksImV4cCI6MTY3NDI4NzE2OX0.hJvo1PV1_jaxwiQbT8ft7Yi4lhIPgAsuEJHqohHYC_2XNef7kA4NhrYLvwrrxOo3AKh9_XTjnj_bsgzIDh35RRggawJniEjuE83ju2xhMXMVaa7TNDje2BsH5-VnFJ4y5hOwxGphrP5iHY_U4k_0qOQcEfVEJMymJvx0gq_Ueds",defaults:{audio:!1,video:!1}}).then((e=>{Object.defineProperty(e.self.permissions,"produceAudio",{value:"ALLOWED"}),Object.defineProperty(e.self.permissions.produceVideo,"allow",{value:"ALLOWED"}),Object.defineProperty(e,"connectedMeetings",{value:{supportsConnectedMeetings:!1}}),e.meta.meetingStartedTimestamp=new Date,e.participants.mockAddParticipants(5,5),e.recording.recordingState="RECORDING"}))}),[]),"undefined"!=typeof window&&(window.meeting=d||{}),r.createElement("div",{className:p},r.createElement(g.DyteProvider,{value:d},r.createElement(l.nu,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}({code:t.replace(/\n$/,""),transformCode:null!=n?n:e=>`${e};`,theme:c},a),"top"===i?r.createElement(r.Fragment,null,r.createElement(v,null),r.createElement(j,null)):r.createElement(r.Fragment,null,r.createElement(j,null),r.createElement(v,null)))))}},31732:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(67294),a=n(53538),o=n(5464);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}({React:r},r,a,o,{Row:function(e){var{children:t,style:n={}}=e,a=s(e,["children","style"]);return r.createElement("div",i({style:i({display:"flex",gap:8,flexWrap:"wrap"},n)},a),t)},Col:function(e){var{children:t,style:n={}}=e,a=s(e,["children","style"]);return r.createElement("div",i({style:i({display:"flex",flexDirection:"column",flexWrap:"wrap",gap:8},n)},a),t)},Center:function(e){var{children:t,style:n}=e,a=s(e,["children","style"]);return r.createElement("div",i({style:i({display:"flex",flexDirection:"column",alignItems:"center",flexWrap:"wrap",gap:8},n)},a),t)},airplaneSVG:'<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.989 11.946a1.991 1.991 0 0 1-2.05 1.99l-4.738-.139-3.454 7.143c-.277.574-.86.94-1.498.94a.926.926 0 0 1-.919-1.037l.862-7.193-3.765-.11-.49 1.341a1.29 1.29 0 0 1-1.211.847.901.901 0 0 1-.901-.902V13.35l-.81-.169a1.261 1.261 0 0 1 0-2.469l.81-.168V9.066c0-.46.343-.838.788-.894l.113-.007a1.29 1.29 0 0 1 1.21.846l.492 1.34 3.751-.11-.849-7.084a.93.93 0 0 1-.005-.055l-.002-.055c0-.511.415-.926.926-.926.585 0 1.123.307 1.423.8l.075.14 3.403 7.035 4.79-.14a1.991 1.991 0 0 1 2.048 1.932l.001.058Z" fill="currentColor"/></svg>',activePlugin:{}})},44535:()=>{}}]);