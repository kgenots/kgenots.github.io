"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[29755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"Live Stream APIs",sidebar_position:6},l=void 0,p={unversionedId:"playground/livestream-dyte-meeting",id:"playground/livestream-dyte-meeting",title:"Live Stream APIs",description:"This guide provides step-by-step instructions on starting and stopping livestreaming for your Dyte meetings using simple API calls.",source:"@site/docs/til/playground/livestream-dyte-meeting.mdx",sourceDirName:"playground",slug:"/playground/livestream-dyte-meeting",permalink:"/til/playground/livestream-dyte-meeting",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Live Stream APIs",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/til/playground/quickstart"},next:{title:"Migrate to v2 REST API",permalink:"/til/v2-migration-guide"}},u={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Start a livestream",id:"start-a-livestream",level:2},{value:"Step 1: Get your API Keys",id:"step-1-get-your-api-keys",level:3},{value:"Step 2: Create a live stream",id:"step-2-create-a-live-stream",level:3},{value:"Request",id:"request",level:4},{value:"Response",id:"response",level:4},{value:"Fetch details of an active livestream",id:"fetch-details-of-an-active-livestream",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Stop a livestream",id:"stop-a-livestream",level:2},{value:"Request",id:"request-2",level:3},{value:"Response",id:"response-2",level:3},{value:"Livestreaming Stage Management APIs",id:"livestreaming-stage-management-apis",level:2},{value:"Livestreaming Properties, Functions, and Events",id:"livestreaming-properties-functions-and-events",level:2}],c={toc:m};function d(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide provides step-by-step instructions on starting and stopping livestreaming for your Dyte meetings using simple API calls."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/?v=v2#/operations/create_meeting"},"Create a meeting")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api#/operations/add_participant"},"Add participants")," to the meeting with the required ",(0,a.kt)("a",{parentName:"li",href:"/til/vscode/build-livestream-app#step-5-add-participants"},"presets"))),(0,a.kt)("h2",{id:"start-a-livestream"},"Start a livestream"),(0,a.kt)("p",null,"To start livestreaming a meeting, do the following:"),(0,a.kt)("h3",{id:"step-1-get-your-api-keys"},"Step 1: Get your API Keys"),(0,a.kt)("p",null,"Login to the ",(0,a.kt)("a",{parentName:"p",href:"https://dev.dyte.io/"},"Developer Portal")," and create an account. Copy the ",(0,a.kt)("a",{parentName:"p",href:"https://dev.dyte.io/apikeys"},"API Keys")," for your organization from the Developer portal. These API Keys are unique to your organization and are required to use Dyte REST APIs such as when instantiating a meeting."),(0,a.kt)("h3",{id:"step-2-create-a-live-stream"},"Step 2: Create a live stream"),(0,a.kt)("p",null,"To start live streaming, specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting ID")," of the meeting that you want to live stream. You can obtain the meeting ID by doing the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you've already created the meeting, use the ",(0,a.kt)("a",{parentName:"li",href:"/api/?v=v2#/operations/get_all_meetings"},"Fetch all meetings")," API to view all the meetings for your organization."),(0,a.kt)("li",{parentName:"ul"},"If you've not created a meeting yet, use the ",(0,a.kt)("a",{parentName:"li",href:"/api/?v=v2#/operations/create_meeting"},"Create a meeting")," API to create the meeting that you want to live stream.")),(0,a.kt)("p",null,"These API returns a parameter called ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", which is your ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting ID"),"."),(0,a.kt)("admonition",{title:"note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can also start livestreaming as soon as the meeting starts, by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"live_stream_on_start: true")," in the\n",(0,a.kt)("a",{parentName:"p",href:"/api/?v=v2#/operations/create_meeting"},"Create a meeting")," API.")),(0,a.kt)("h4",{id:"request"},"Request"),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"/api#/paths/meetings-meeting_id--livestreams/post"},"Start livestreaming a meeting")," specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"ID")," of the meeting that you want to live stream as the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl --request POST \\\n  --url https://api.cluster.dyte.in/v2/meetings/{meetingId}/livestreams \\\n  --header 'Authorization: Basic <token>' \\\n  --header 'Content-Type: application/json'\n")),(0,a.kt)("h4",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "data": {\n    "status": "OFFLINE",\n    "name": null,\n    "meeting_id": "188566bc-8770-4ca0-9eb3-24b594ecaf7e",\n    "ingest_server": "rtmps://2ec802dd47b0.global-contribute.live-video.net:443/app/",\n    "id": "7088bba8-f522-49a8-b59b-3cd0e946bbb0",\n    "stream_key": "sk_ap-south-1_AfnVpeYZjidO_fBpWKody7sDUOEfy9Zc6XAZegkR0Va",\n    "playback_url": "https://2ec802dd47b0.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.9449086423410.channel.rVGDS2KM5Lnteh.m3u8"\n  }\n}\n')),(0,a.kt)("h2",{id:"fetch-details-of-an-active-livestream"},"Fetch details of an active livestream"),(0,a.kt)("p",null,"Fetching details of an active livestream is also an HTTP request away."),(0,a.kt)("h3",{id:"request-1"},"Request"),(0,a.kt)("p",null,"Specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting_id")," of the meeting for which you want to fetch the active livestream."),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"/api/?v=v2#/operations/get_all_meetings"},"Fetch all meetings")," or ",(0,a.kt)("a",{parentName:"p",href:"/api/?v=v2#/operations/create_meeting"},"Create a meeting")," API to\nget the ",(0,a.kt)("strong",{parentName:"p"},"meeting ID"),". The API returns a parameter called ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", which is your\n",(0,a.kt)("inlineCode",{parentName:"p"},"meeting ID"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request GET \\\n  --url https://api.cluster.dyte.in/v2/meetings/{meetingId}/active-livestream \\\n  --header 'Authorization: Basic <token>' \\\n  --header 'Content-Type: application/json'\n")),(0,a.kt)("h3",{id:"response-1"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "data": {\n    "status": "LIVE",\n    "name": null,\n    "meeting_id": "188566bc-8770-4ca0-9eb3-24b594ecaf7e",\n    "ingest_seconds": 0,\n    "viewer_seconds": 0,\n    "ingest_server": "rtmps://2ec802dd47b0.global-contribute.live-video.net:443/app/",\n    "id": "7088bba8-f522-49a8-b59b-3cd0e946bbb0",\n    "stream_key": "sk_ap-south-1_AfnVpeYZjidO_fBpWKody7sDUOEfy9Zc6XAZegkR0Va",\n    "playback_url": "https://2ec802dd47b0.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.944908621410.channel.rVKA2KM5Lunt.m3u8"\n  }\n}\n')),(0,a.kt)("p",null,"You can also use the ",(0,a.kt)("a",{parentName:"p",href:"/api#/paths/meetings-meeting_id--livestreams/get"},"Fetch all livestreams for a meeting")," API or ",(0,a.kt)("a",{parentName:"p",href:"/api#/operations/fetch_all_livestreams"},"Fetch all livestreams")," to get livestream details."),(0,a.kt)("h2",{id:"stop-a-livestream"},"Stop a livestream"),(0,a.kt)("p",null,"To stop live streaming of a meeting, provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of that meeting in the following request."),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"/api/?v=v2#/operations/get_all_meetings"},"Fetch all meetings")," or ",(0,a.kt)("a",{parentName:"p",href:"/api/?v=v2#/operations/create_meeting"},"Create a meeting")," API to\nget the ",(0,a.kt)("strong",{parentName:"p"},"meeting ID"),". The API returns a parameter called ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", which is your\n",(0,a.kt)("inlineCode",{parentName:"p"},"meeting ID"),"."),(0,a.kt)("h3",{id:"request-2"},"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request POST \\\n  --url https://api.cluster.dyte.in/v2/meetings/meetingId/active-livestream/stop \\\n  --header 'Authorization: Basic <token>' \\\n  --header 'Content-Type: application/json'\n")),(0,a.kt)("h3",{id:"response-2"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "data": {\n    "message": "livestream stopped"\n  }\n}\n')),(0,a.kt)("h2",{id:"livestreaming-stage-management-apis"},"Livestreaming Stage Management APIs"),(0,a.kt)("p",null,"Dyte's livestreaming stage management APIs allow you to manage stage requests, such as leave and join stage, manage permissions, kick participants and so on. For more information,"),(0,a.kt)("h2",{id:"livestreaming-properties-functions-and-events"},"Livestreaming Properties, Functions, and Events"),(0,a.kt)("p",null,"For the detailed information on livestreaming properties, events, and functions,"))}d.isMDXComponent=!0}}]);