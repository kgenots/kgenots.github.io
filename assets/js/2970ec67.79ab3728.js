"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[47056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Quickstart",sidebar_position:1},p="Dyte REST API Quickstart",l={unversionedId:"playground/quickstart",id:"playground/quickstart",title:"Quickstart",description:"Dyte\u2019s API follows the",source:"@site/docs/develop/playground/quickstart.mdx",sourceDirName:"playground",slug:"/playground/quickstart",permalink:"/develop/playground/quickstart",draft:!1,editUrl:"https://github.com/kgenots/kgenots-web/tree/main/docs/develop/playground/quickstart.mdx",tags:[],version:"current",lastUpdatedAt:1692269291,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 17\uc77c",sidebarPosition:1,frontMatter:{title:"Quickstart",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Export Chat Dump of a Session",permalink:"/develop/projects/export-chat-dump"},next:{title:"Live Stream APIs",permalink:"/develop/playground/livestream-dyte-meeting"}},c={},d=[{value:"Objectives",id:"objectives",level:2},{value:"Initial Setup",id:"initial-setup",level:2},{value:"Step 1: Access APIs",id:"step-1-access-apis",level:3},{value:"Step 2: Authenticate using your API Keys",id:"step-2-authenticate-using-your-api-keys",level:3},{value:"Step 3: Create Presets",id:"step-3-create-presets",level:3},{value:"Add Video Calls to your Application using Dyte APIs",id:"add-video-calls-to-your-application-using-dyte-apis",level:2},{value:"Step 1: Create a Meeting",id:"step-1-create-a-meeting",level:3},{value:"Request",id:"request",level:4},{value:"Response",id:"response",level:4},{value:"Step 2: Add Participants",id:"step-2-add-participants",level:3},{value:"Request",id:"request-1",level:4},{value:"Response",id:"response-1",level:4},{value:"Step 3: Record the Meeting",id:"step-3-record-the-meeting",level:3},{value:"Start recording",id:"start-recording",level:4},{value:"Request",id:"request-2",level:5},{value:"Response",id:"response-2",level:5},{value:"Stop recording",id:"stop-recording",level:4},{value:"Request",id:"request-3",level:5},{value:"Response",id:"response-3",level:5},{value:"Step 4: Add a Webhook",id:"step-4-add-a-webhook",level:3},{value:"Request",id:"request-4",level:4},{value:"Response",id:"response-4",level:4}],u={toc:d};function h(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dyte-rest-api-quickstart"},"Dyte REST API Quickstart"),(0,a.kt)("p",null,"Dyte\u2019s API follows the\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"REST"),"\nprinciples. It has predictable resource-oriented URLs, accepts\n",(0,a.kt)("a",{parentName:"p",href:"http://www.json.org/"},"JSON-encoded")," request bodies, returns\n",(0,a.kt)("a",{parentName:"p",href:"http://www.json.org/"},"JSON-encoded")," responses, and uses standard HTTP response\ncodes, authentication, and verbs."),(0,a.kt)("p",null,"This topic describes how to get started with Dyte v2 REST APIs."),(0,a.kt)("p",null,"Before getting started with this quickstart guide, we recommend that you read\n",(0,a.kt)("a",{parentName:"p",href:"/getting-started"},"Getting Started with Dyte")," to familiarize yourself with Dyte."),(0,a.kt)("h2",{id:"objectives"},"Objectives"),(0,a.kt)("p",null,"In this quickstart you\u2019ll learn:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to access Dyte APIs"),(0,a.kt)("li",{parentName:"ul"},"How to authenticate the requests"),(0,a.kt)("li",{parentName:"ul"},"How to create presets"),(0,a.kt)("li",{parentName:"ul"},"How to add voice and video calls to your applications using Dyte APIs")),(0,a.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,a.kt)("p",null,"Perform the following steps to get started with Dyte APIs:"),(0,a.kt)("h3",{id:"step-1-access-apis"},"Step 1: Access APIs"),(0,a.kt)("p",null,"You can access all of our v2 API endpoints at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.dyte.io/v2/"),".\nFor the complete list of routes, see ",(0,a.kt)("a",{parentName:"p",href:"/api/?v=v2"},"API documentation"),"."),(0,a.kt)("h3",{id:"step-2-authenticate-using-your-api-keys"},"Step 2: Authenticate using your API Keys"),(0,a.kt)("p",null,"Dyte's APIs use API Keys to authenticate requests via\n",(0,a.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Basic_access_authentication"},"HTTP Basic Auth"),". To\nperform the authentication, an HTTP request is sent with an Authorization header\nthat contains the word Basic followed by a space and a base64-encoded string\n",(0,a.kt)("inlineCode",{parentName:"p"},"organizationId:apiKey"),"."),(0,a.kt)("p",null,"For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization: Basic ZGVtbzpwQDU1dzByZA==")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First, register on our ",(0,a.kt)("a",{parentName:"li",href:"https://dev.dyte.io"},"Developer Portal"),"."),(0,a.kt)("li",{parentName:"ol"},"Copy the API Key for your organization. This API Key is unique to your\norganization. The organization ID acts as the username, and the API Key is\nyour password.")),(0,a.kt)("h3",{id:"step-3-create-presets"},"Step 3: Create Presets"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://dev.dyte.io/roles-presets"},"Create presets")," using the Developer portal.\nA preset is a set of permissions and UI configurations that is applied to a\nparticipant."),(0,a.kt)("h2",{id:"add-video-calls-to-your-application-using-dyte-apis"},"Add Video Calls to your Application using Dyte APIs"),(0,a.kt)("p",null,"This section focuses on how to add voice and video calls to your applications\nusing Dyte APIs. A typical workflow includes the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a meeting"),(0,a.kt)("li",{parentName:"ol"},"Add participants to the meeting"),(0,a.kt)("li",{parentName:"ol"},"Record the meeting"),(0,a.kt)("li",{parentName:"ol"},"Receive events using webhooks")),(0,a.kt)("h3",{id:"step-1-create-a-meeting"},"Step 1: Create a Meeting"),(0,a.kt)("p",null,"You must first create a meeting in order to begin using Dyte for voice and video\ncalls."),(0,a.kt)("h4",{id:"request"},"Request"),(0,a.kt)("p",null,"This request returns a parameter called ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", which is your ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting ID"),". The\nmeeting ID is required for subsequent operations like adding participants."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --request POST \\\n  --url https://api.dyte.io/v2/meetings \\\n  --header \'Authorization: Basic ZGV2QGR5dGUuaW46MTIzNDU2Nzg5YXNkaGZnaGo=\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "title": "Sample meeting",\n  "preferred_region": "ap-south-1",\n  "record_on_start": false\n}\'\n')),(0,a.kt)("h4",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "data": {\n    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",\n    "preferred_region": "ap-south-1",\n    "waiting_room": true,\n    "record_on_start": true,\n    "created_at": "2019-08-24T14:15:22Z",\n    "updated_at": "2019-08-24T14:15:22Z"\n  }\n}\n')),(0,a.kt)("h3",{id:"step-2-add-participants"},"Step 2: Add Participants"),(0,a.kt)("p",null,"Once you\u2019ve created a meeting, you can add participants to the meeting."),(0,a.kt)("h4",{id:"request-1"},"Request"),(0,a.kt)("p",null,"This request returns a token, which is required to initialize the frontend SDKs."),(0,a.kt)("admonition",{title:"Note",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The preset name created earlier must be passed in the request.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --request POST \\\n  --url https://api.dyte.io/v2/meetings/<meetingId>/participants \\\n  --header \'Authorization: Basic ZGV2QGR5dGUuaW46MTIzNDU2Nzg5YXNkaGZnaGo=\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "name": "Mary Sue",\n  "picture": "https://i.imgur.com/test.jpg",\n  "preset_name": "string",\n  "client_specific_id": "string"\n}\'\n')),(0,a.kt)("h4",{id:"response-1"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "data": {\n    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",\n    "name": "string",\n    "picture": "http://example.com",\n    "client_specific_id": "string",\n    "preset_name": "string",\n    "created_at": "2019-08-24T14:15:22Z",\n    "updated_at": "2019-08-24T14:15:22Z",\n    "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjM5MGJmMjc0LTQxMzMtNDI2ZC04NDkxLWVhN2ExYTE5MDQ4YiIsIm1lZXRpbmdJZCI6ImY5MTMzODM0LWE4MmYtNGNhYi05OTRiLWY3M2RiMmQwNmY4OCIsInBhcnRpY2lwYW50SWQiOiIxZDVhNTkyMy1iYzY5LTQ5ZDAtODJhNy1lZDIzZmE0ZTUyZWYiLCJwcmVzZXRJZCI6Ijg3NzNiZDAzLTkzNjItNDdjNy1hNzlkLThmNTQxMWMyNDc2NiIsImlhdCI6MTY2OTgzMDE5OCwiZXhwIjoxNjc4NDcwMTk4fQ.ngSKuI24JHtPxiimrGT1Vkk7_AdvrMRwkbltvlWpyWmmm14-Kl4OUVw2nm7q0S2uEgw7xXRz8faxzzJTMogkKlUSXGXOpUc_lXYH9h7u29MCFf3nJDy_FZIsSgPmULLoF3p4OlU9wNSwEnO0h856PdB4MfAuXxa24vkgI1tplzBPOS4NcW9x8pfE7J98ixVZKcPvqNig_pLOypy0j5Pd3CHdi25EFml1Fr0iyui4hDrjE-mzMnYwvojkXSb47MSxVoOLGvWn__dL2qrPSho4C3fhb_HEupWAzCHMDBpl1IGhazN1-mZ40WNYsKFFcch89qOsr0dA2C_d0PHVzCVP3A"\n  }\n}\n')),(0,a.kt)("h3",{id:"step-3-record-the-meeting"},"Step 3: Record the Meeting"),(0,a.kt)("p",null,"You can manage your recordings in Dyte using ",(0,a.kt)("inlineCode",{parentName:"p"},"Basic")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Bearer")," authentication\nmethods. If you\u2019re using ",(0,a.kt)("inlineCode",{parentName:"p"},"Bearer")," authentication, then you need to use the\n",(0,a.kt)("inlineCode",{parentName:"p"},"token")," returned by the ",(0,a.kt)("a",{parentName:"p",href:"/api#/operations/add_participant"},"Add Participants")," API\nrequest."),(0,a.kt)("h4",{id:"start-recording"},"Start recording"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"storage_config")," is an optional parameter. If you specify the storage\nconfiguration, the recording will be stored in your S3 bucket as well."),(0,a.kt)("h5",{id:"request-2"},"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --request POST \\\n  --url https://api.dyte.io/v2/recordings \\\n  --header \'Authorization: Basic MzkwYmYyNzQtNDEzMy00MjZkLTg0OTEtZWE3YTFhMTkwNDhiOjdmYTQzNjAwZjk3ZTVkZGI5NmIw\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "meeting_id": "97440c6a-140b-40a9-9499-b23fd7a3868a",\n  "storage_config": {\n    "type": "aws",\n    "access_key": "string",\n    "secret_key": "string",\n    "region": "us-east-1",\n    "bucket": "string",\n    "path": "string"\n  }\n}\'\n')),(0,a.kt)("h5",{id:"response-2"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "data": {\n    "id": "a776cc7e-54b8-4915-a748-8afc6bf98140",\n    "download_url": null,\n    "download_url_expiry": null,\n    "file_size": null,\n    "session_id": null,\n    "output_file_name": "d9fc4d6a-a5a0-4430-9a73-d4ba14e597f9_1669882270392.mp4",\n    "status": "INVOKED",\n    "invoked_time": "2022-12-01T08:11:10.430Z",\n    "started_time": null,\n    "stopped_time": null,\n    "storage_config": {\n      "id": "5f48f84c-4628-44b8-8953-64c67c714de7",\n      "type": "aws",\n      "region": "ap-south-1",\n      "bucket": "dyte",\n      "path": "/"\n    }\n  }\n}\n')),(0,a.kt)("h4",{id:"stop-recording"},"Stop recording"),(0,a.kt)("h5",{id:"request-3"},"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request PUT \\\n  --url https://api.staging.dyte.in/v2/recordings/<recordingId> \\\n  --header 'Authorization: Basic NzBjNWQzOTEtNGJhYy00Y2YzLTk5MDctYmVjMjA1Nzk4YWRiOmQyNzBmYjJmOGNiNGUzZWY1MGI1' \\\n  --header 'Content-Type: application/json' \\\n  --data '{\n  \"action\": \"stop\"\n}'\n")),(0,a.kt)("h5",{id:"response-3"},"Response"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"UPLOADING")," status indicates that the recording is still being uploaded to\nthe server asynchronously. The upload process may take longer depending on the\nsize of the file."),(0,a.kt)("p",null,"To monitor the status of recordings, you can listen to the\n",(0,a.kt)("a",{parentName:"p",href:"./develop/projects/webhooks/webhook-events#recordingstatusupdate"},(0,a.kt)("inlineCode",{parentName:"a"},"recording.statusUpdate"))," events using webhooks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "data": {\n    "id": "a776cc7e-54b8-4915-a748-8afc6bf98140",\n    "download_url": null,\n    "download_url_expiry": null,\n    "file_size": null,\n    "session_id": "622dfa7b-ae00-4ba1-bba0-d6d0cc9e6c7d",\n    "output_file_name": "d9fc4d6a-a5a0-4430-9a73-d4ba14e597f9_1669882270392.mp4",\n    "status": "UPLOADING",\n    "invoked_time": "2022-12-01T08:11:10.430Z",\n    "started_time": "2022-12-01T08:11:12.023Z",\n    "meeting": {\n      "waiting_room": false,\n      "id": "d9fc4d6a-a5a0-4430-9a73-d4ba14e597f9",\n      "title": "Backend Standup",\n      "record_on_start": false,\n      "created_at": "2022-12-01T07:01:23.990Z",\n      "updated_at": "2022-12-01T07:01:23.990Z"\n    },\n    "storage_config": {\n      "id": "5f38f84c-4628-44b8-8953-64c67c714de7",\n      "type": "aws",\n      "region": "ap-south-1",\n      "bucket": "dyte",\n      "path": "/"\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"step-4-add-a-webhook"},"Step 4: Add a Webhook"),(0,a.kt)("p",null,"Dyte uses webhooks to notify your application when an event occurs. Webhooks are\nespecially useful for asynchronous events like when a recording is uploaded or a\nnew participant joins the meeting."),(0,a.kt)("p",null,"Dyte can push real-time updates to your application via a webhook. Events are\nsent to your webhook endpoint as a JSON payload over HTTPS. These events can\nthen be used to perform actions in your backend systems."),(0,a.kt)("p",null,"For example, here is how to create a webhook that listens for all participant\njoining/leaving events."),(0,a.kt)("h4",{id:"request-4"},"Request"),(0,a.kt)("p",null,"When a participant joins or leaves a meeting, this will trigger the webhook and\nsend the event."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --request POST \\\n  --url https://api.dyte.io/v2/webhooks \\\n  --header \'Authorization: Basic NzBjNWQzOTEtNGJhYy00Y2YzLTk5MDctYmVjMjA1Nzk4YWRiOmQyNzBmYjJmOGNiNGUzZWY1MGI1\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n  "name": "Attendance",\n  "url": "https://webhook.site/#!/b23a5bbd-c8b0-4ced-a9e2-78ae7889897e",\n  "events": [\n    "meeting.participantJoined",\n    "meeting.participantLeft"\n  ]\n}\'\n')),(0,a.kt)("h4",{id:"response-4"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": "meeting.participantJoined",\n  "meeting": {\n    "id": "d9fc4d6a-a5a0-4430-9a73-d4ba14e597f9",\n    "title": "Backend Standup",\n    "roomName": "d9fc4d6a-a5a0-4430-9a73-d4ba14e597f9",\n    "status": "LIVE",\n    "createdAt": "2022-12-01T08:08:36.593Z",\n    "startedAt": "2022-12-01T08:08:36.593Z",\n    "organizedBy": {\n      "id": "70c5d391-4bac-4cf3-9907-bec205798adb",\n      "name": "Test Org"\n    }\n  },\n  "participant": {\n    "peerId": "1087822b-0673-47c9-abc9-582ccc8b4057",\n    "userDisplayName": "Participant nfiu92xa1jd",\n    "clientSpecificId": "anrxl1m34a4"\n  }\n}\n')),(0,a.kt)("p",null,"For more information on how to create webhook endpoints, see\n",(0,a.kt)("a",{parentName:"p",href:"/api#/operations/addWebhook"},"Creating webhook endpoints"),"."))}h.isMDXComponent=!0}}]);