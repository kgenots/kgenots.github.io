"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[71279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,y=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={sidebar_position:1},s="TEMP1",c={unversionedId:"etc/temp1",id:"etc/temp1",title:"TEMP1",description:"Webhooks are",source:"@site/docs/projects/etc/temp1.mdx",sourceDirName:"etc",slug:"/etc/temp1",permalink:"/projects/etc/temp1",draft:!1,tags:[],version:"current",lastUpdatedAt:1693295137,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 29\uc77c",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Temp",permalink:"/projects/etc/"},next:{title:"TEMP2",permalink:"/projects/etc/temp2"}},u={},p=[{value:"How does Dyte use Webhooks?",id:"how-does-dyte-use-webhooks",level:2},{value:"Anatomy of a Webhook",id:"anatomy-of-a-webhook",level:2},{value:"Header",id:"header",level:3},{value:"Payload",id:"payload",level:3}],d={toc:p};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"temp1"},"TEMP1"),(0,r.kt)("p",null,"Webhooks are\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol"},"HTTP-based")," callback\nfunctions that can be defined by the user to allow lightweight, event-driven\ncommunication between two APIs."),(0,r.kt)("p",null,"Setting up a webhook involves the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The client provides a unique URL to the server API and specifies which event\nit wanted to be notified about."),(0,r.kt)("li",{parentName:"ol"},"Once the webhook is configured, the server automatically sends the relevant\npayload to the client's webhook URL when the specified event occurs.")),(0,r.kt)("p",null,"Dyte uses webhooks to notify your application when an event happens. Webhooks\nare particularly useful for asynchronous events, such as when a recording is\nuploaded or when a participant joins your meeting."),(0,r.kt)("h2",{id:"how-does-dyte-use-webhooks"},"How does Dyte use Webhooks?"),(0,r.kt)("p",null,"A webhook enables Dyte to push real-time updates to your applications. When the\nevent occurs, Dyte makes an HTTP request (usually a POST) to the URL you\nconfigured for the webhook and sends the updates to your application as a JSON\npayload. You can then use these events to perform actions in your backend\nsystems. To learn more, see Dyte webhook events overview."),(0,r.kt)("p",null,"Webhooks are particularly useful for asynchronous events, such as when a\nrecording is uploaded or when a participant joins the meeting."),(0,r.kt)("p",null,"Let\u2019s say you have a meeting that you want to record. You have registered to\nreceive the ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.started")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.ended")," event. A webhook notifies your\napp when the meeting starts and when it ends. After your webhook endpoint\nreceives the meeting.started event, your webhook function can then run backend\nactions to start recording the meeting and end the recording of the meeting when\n",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.ended")," event is received."),(0,r.kt)("h2",{id:"anatomy-of-a-webhook"},"Anatomy of a Webhook"),(0,r.kt)("p",null,"A webhook HTTP request generally consists of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Header"),(0,r.kt)("li",{parentName:"ul"},"Payload")),(0,r.kt)("h3",{id:"header"},"Header"),(0,r.kt)("p",null,"For each event that triggers the webhook, a header is included to describe the event. The header provides information about the request, such as content type, webhook ID, UUID, signature details, and so on."),(0,r.kt)("img",{src:"/static/webhook/webhook_id.png",width:"600",height:"300",alt:"webhook-id",className:"webhook-id-use"}),(0,r.kt)("p",null,"The following headers are of more importance for your security and reliability:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Header")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dyte-webhook-id")),(0,r.kt)("td",{parentName:"tr",align:null},"Webhook IDs are used to uniquely identify a specific webhook endpoint or events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dyte-uuid")),(0,r.kt)("td",{parentName:"tr",align:null},"This is a unique UUID identifying the event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dyte-signature")),(0,r.kt)("td",{parentName:"tr",align:null},"Dyte verifies the webhook events it sends to your endpoints by including a signature in the dyte-signature header of each event. This allows you to confirm that the event came from Dyte and not a malicious server impersonating Dyte.")))),(0,r.kt)("h3",{id:"payload"},"Payload"),(0,r.kt)("p",null,"Payload contains information about the event that triggered the webhook, such as user data or a change in state."),(0,r.kt)("p",null,"For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": "livestreaming.statusUpdate",\n  "streamId": "d231d346-c422-43a6-a324-c0d65b79c8a7",\n  "status": "OFFLINE"\n}\n')))}h.isMDXComponent=!0}}]);