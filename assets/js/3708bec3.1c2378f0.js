"use strict";(self.webpackChunkkgenots=self.webpackChunkkgenots||[]).push([[6573],{57842:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={title:"Custom / RTMP Video Input",sidebar_position:2},l="Live Stream any Custom Video Input",p={unversionedId:"vscode/advanced/livestream-any-rtmp",id:"vscode/advanced/livestream-any-rtmp",title:"Custom / RTMP Video Input",description:"Dyte can livestream video from any applications like",source:"@site/docs/dev/vscode/advanced/livestream-any-rtmp.mdx",sourceDirName:"vscode/advanced",slug:"/vscode/advanced/livestream-any-rtmp",permalink:"/dev/vscode/advanced/livestream-any-rtmp",draft:!1,tags:[],version:"current",lastUpdatedAt:1694050895,formattedLastUpdatedAt:"2023\ub144 9\uc6d4 7\uc77c",sidebarPosition:2,frontMatter:{title:"Custom / RTMP Video Input",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configure Permissions",permalink:"/dev/vscode/advanced/configuring-permissions"},next:{title:"Overview",permalink:"/dev/git/intro-git"}},d={},u=[{value:"Step 1: Get your API Keys",id:"step-1-get-your-api-keys",level:2},{value:"Step 2: Generate credentials for a livestream",id:"step-2-generate-credentials-for-a-livestream",level:2},{value:"Request",id:"request",level:4},{value:"Response",id:"response",level:4},{value:"Step 3: Specify RTMP ingestion URL for live streaming",id:"step-3-specify-rtmp-ingestion-url-for-live-streaming",level:2},{value:"Fetch details of a livestream",id:"fetch-details-of-a-livestream",level:2},{value:"Request",id:"request-1",level:4},{value:"Response",id:"response-1",level:4}],c={toc:u};function m(e){var{components:t}=e,o=s(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},c,o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"live-stream-any-custom-video-input"},"Live Stream any Custom Video Input"),(0,n.kt)("p",null,"Dyte can livestream video from any applications like\n",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/OBS_Studio"},"OBS"),",\n",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/FFmpeg"},"ffmpeg")," that can stream via RTMP in a few\nsimple steps."),(0,n.kt)("h2",{id:"step-1-get-your-api-keys"},"Step 1: Get your API Keys"),(0,n.kt)("p",null,"Login to the ",(0,n.kt)("a",{parentName:"p",href:"https://dev.dyte.io/"},"Developer Portal")," and create an account. Copy the ",(0,n.kt)("a",{parentName:"p",href:"https://dev.dyte.io/apikeys"},"API Keys")," for your organization from the Developer portal. These API Keys are unique to your organization and are required to use Dyte REST APIs such as when instantiating a meeting."),(0,n.kt)("h2",{id:"step-2-generate-credentials-for-a-livestream"},"Step 2: Generate credentials for a livestream"),(0,n.kt)("p",null,"This step generates credentials and ingest URLs for the livestream."),(0,n.kt)("h4",{id:"request"},"Request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'https://api.dyte.io/v2/livestreams' \\\n     --header 'Content-Type: application/json' \\\n     --header 'Authorization: Basic ZGVtbzpwQDU1dzByZA==' \\\n     --data-raw '{\n    \"name\": \"test_livestream\"\n}'\n")),(0,n.kt)("h4",{id:"response"},"Response"),(0,n.kt)("p",null,"The response contains the ",(0,n.kt)("inlineCode",{parentName:"p"},"ingest_server"),", livestream ",(0,n.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"stream_key"),", and\n",(0,n.kt)("inlineCode",{parentName:"p"},"playback_url"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "data": {\n    "status": "OFFLINE",\n    "name": "test_livestream",\n    "meeting_id": null,\n    "ingest_server": "rtmps://2bd803bb7b1.global-contribute.live-video.net:443/app/",\n    "id": "9fb22eea-3392-42ad-b884-1129a4f517d2",\n    "stream_key": "sk_ap-south-2_JKLBQlfOE_eb14jL5zj3lbj58xHSb",\n    "playback_url": "https://2bd803bb7b1.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.944908621410.channel.e1lAS0BHpDxP.m3u8"\n  }\n}\n')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Parameters")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ingest_server"),(0,n.kt)("td",{parentName:"tr",align:null},"The ingest server URL in RTMP livestreaming is the server URL to which the RTMP encoder sends the video and audio data. The ingest server receives the RTMP stream and transcodes it into different video formats and bitrates, which can then be distributed to viewers through a content delivery network (CDN). It is essentially the address of the server where the video data is sent to be processed and distributed for live streaming. You need to enter the ",(0,n.kt)("inlineCode",{parentName:"td"},"ingest_server")," along with ",(0,n.kt)("inlineCode",{parentName:"td"},"stream_key")," in your application. See step 2.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"This is your livestream ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stream_key"),(0,n.kt)("td",{parentName:"tr",align:null},"The stream key in RTMP livestreaming is a unique identifier that is used to authorize and link the RTMP encoder to a specific live stream. The stream key is like a password that allows the encoder to access the specific live stream on the server and start sending data to it. It is an important security measure to prevent unauthorized access to the live stream, as the stream key is needed to begin streaming to a specific event or channel. It's important to keep the stream key safe and secure. You need to enter the ",(0,n.kt)("inlineCode",{parentName:"td"},"stream_key")," in your application. See step 2.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"playback_url"),(0,n.kt)("td",{parentName:"tr",align:null},"The playback URL is the web address that viewers can use to watch the live stream. Viewers can enter the playback URL into their web browser or use a media player that supports HLS or LHLS streaming to watch the live stream.")))),(0,n.kt)("h2",{id:"step-3-specify-rtmp-ingestion-url-for-live-streaming"},"Step 3: Specify RTMP ingestion URL for live streaming"),(0,n.kt)("p",null,"In your application, enter the ingestion URL you generated in the previous step."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you're using ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/OBS_Studio"},"OBS"),", then enter the ingest server URL and stream key separately.\n",(0,n.kt)("img",{alt:"obs-example",src:a(80514).Z,width:"1832",height:"1304"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"However, for ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/FFmpeg"},"ffmpeg"),", you must specify\nboth the ingest URL and the stream key together. For example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'ffmpeg -re -f lavfi -i "testsrc=size=1280x720 [out0]; sine=frequency=500 [out1]" \\\n-acodec aac -vcodec h264 -f flv \\\nrtmps://2ec802dd47b0.global-contribute.live-video.net:443/app/sk_ap-south-1_nDT9sbq3qZyf_SYSyPE7wnVGUQYNyejMe6Z3n\n')))),(0,n.kt)("h2",{id:"fetch-details-of-a-livestream"},"Fetch details of a livestream"),(0,n.kt)("p",null,"Using the livestream ID that you generated in the previous ",(0,n.kt)("a",{parentName:"p",href:"/dev/vscode/advanced/livestream-any-rtmp#step-2-generate-credentials-for-a-livestream"},"step"),", you can fetch details of\nlivestream."),(0,n.kt)("h4",{id:"request-1"},"Request"),(0,n.kt)("p",null,"This request returns the ",(0,n.kt)("inlineCode",{parentName:"p"},"ingest_seconds"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"viewer_seconds"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ingest_server"),",\n",(0,n.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"stream_key"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"playback_url"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location \\\n     --request GET 'https://api.dyte.io/v2/livestreams/9fb22eea-3392-42ad-b884-1129a4f517d2' \\\n     --header 'Authorization: Basic ZGVtbzpwQDU1dzByZA=='\n")),(0,n.kt)("admonition",{title:"note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The ingest and viewer seconds details are returned after 40-50 seconds; until then,\nthey default to 60.")),(0,n.kt)("h4",{id:"response-1"},"Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": true,\n  "data": {\n    "status": "OFFLINE",\n    "name": "test_livestream",\n    "meeting_id": null,\n    "ingest_seconds": 0,\n    "viewer_seconds": 0,\n    "ingest_server": "rtmps://2bd803bb7b1.global-contribute.live-video.net:443/app/",\n    "id": "9fb22eea-3392-42ad-b884-1129a4f517d2",\n    "stream_key": "sk_ap-south-2_JKLBQlfOE_eb14jL5zj3lbj58xHSb",\n    "playback_url": "https://2bd803bb7b1.ap-south-1.playback.live-video.net/api/video/v1/ap-south-1.944908621410.channel.e1lAS0BHpDxP.m3u8"\n  }\n}\n')))}m.isMDXComponent=!0},80514:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/obs-example-c441f3bb11d0512c1be78f4f241c9581.jpeg"}}]);