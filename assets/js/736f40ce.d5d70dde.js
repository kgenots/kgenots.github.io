"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[38813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},16529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Events",description:"Local user events guide.",sidebar_position:2,tags:["react-web-core","local-user","self","self events"]},s="Local User - Events",c={unversionedId:"react-web-core/local-user/events",id:"react-web-core/local-user/events",title:"Events",description:"Local user events guide.",source:"@site/docs/archive/react-web-core/local-user/events.mdx",sourceDirName:"react-web-core/local-user",slug:"/react-web-core/local-user/events",permalink:"/archive/react-web-core/local-user/events",draft:!1,tags:[{label:"react-web-core",permalink:"/archive/tags/react-web-core"},{label:"local-user",permalink:"/archive/tags/local-user"},{label:"self",permalink:"/archive/tags/self"},{label:"self events",permalink:"/archive/tags/self-events"}],version:"current",sidebarPosition:2,frontMatter:{title:"Events",description:"Local user events guide.",sidebar_position:2,tags:["react-web-core","local-user","self","self events"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/archive/react-web-core/local-user/introduction"},next:{title:"Manage Media Devices",permalink:"/archive/react-web-core/local-user/manage-media-devices"}},d={},u=[{value:"Room joined / leave",id:"room-joined--leave",level:2},{value:"Video update",id:"video-update",level:2},{value:"Audio update",id:"audio-update",level:2},{value:"Screenshare update",id:"screenshare-update",level:2},{value:"Device update",id:"device-update",level:2},{value:"Network quality score",id:"network-quality-score",level:2},{value:"Webinar Stage events",id:"webinar-stage-events",level:2}],p={toc:u};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"local-user---events"},"Local User - Events"),(0,r.kt)("h2",{id:"room-joined--leave"},"Room joined / leave"),(0,r.kt)("p",null,"Trigger an update when the local user joins / leave a room."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const roomJoined = useDyteSelector((meeting) => meeting.self.roomJoined);\n")),(0,r.kt)("h2",{id:"video-update"},"Video update"),(0,r.kt)("p",null,"Triggered when the user starts / stops the video using ",(0,r.kt)("inlineCode",{parentName:"p"},"enableVideo")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"disableVideo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"\nconst videoEnabled = useDyteSelector((meeting) => meeting.self.videoEnabled);\nconst videoTrack = useDyteSelector((meeting) => meeting.self.videoTrack);\n\nuseEffect(() => {\n  const videoElem = document.getElementById('my-video');\n  if(videoEnabled && videoTrack) {\n    const stream = new MediaStream();\n    stream.addTrack(videoTrack);\n    videoElem.srcObject = stream;\n    videoElem.play();\n  }\n}, [videoEnabled, videoTrack]);\n\n")),(0,r.kt)("h2",{id:"audio-update"},"Audio update"),(0,r.kt)("p",null,"Triggered when the user starts / stops the audio using ",(0,r.kt)("inlineCode",{parentName:"p"},"enableAudio")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"disableAudio")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"\nconst audioEnabled = useDyteSelector((meeting) => meeting.self.audioEnabled);\nconst audioTrack = useDyteSelector((meeting) => meeting.self.audioTrack);\n\nuseEffect(() => {\n  const audioElem = document.getElementById('my-audio');\n  if(audioEnabled && audioTrack) {\n    const stream = new MediaStream();\n    stream.addTrack(audioTrack);\n    audioElem.srcObject = stream;\n    audioElem.play();\n  } \n}, [audioEnabled, audioTrack]);\n\n")),(0,r.kt)("h2",{id:"screenshare-update"},"Screenshare update"),(0,r.kt)("p",null,"Triggered when the user starts / stops the screen share using\n",(0,r.kt)("inlineCode",{parentName:"p"},"enableScreenShare()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"disableScreenShare()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const screenShareEnabled = useDyteSelector((meeting) => meeting.self.screenShareEnabled);\nconst screenShareTrack = useDyteSelector((meeting) => meeting.self.screenShareTrack);\n")),(0,r.kt)("h2",{id:"device-update"},"Device update"),(0,r.kt)("p",null,"Subscribe to the ",(0,r.kt)("inlineCode",{parentName:"p"},"deviceUpdate")," event to handle the changing video, audio and\nspeaker devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.self.on('deviceUpdate', ({ device }) => {\n  // handle microphone device change\n  if (device.kind === 'audioinput') {\n    console.log('mic change', device);\n  }\n  // handle camera device change\n  if (device.kind === 'videoinput') {\n    console.log('camera change', device);\n  }\n  // handle speaker device change\n  if (device.kind === 'audiooutput') {\n    console.log('speaker change', device);\n  }\n});\n")),(0,r.kt)("h2",{id:"network-quality-score"},"Network quality score"),(0,r.kt)("p",null,"Subscribe to the ",(0,r.kt)("inlineCode",{parentName:"p"},"mediaScoreUpdate")," event to monitor network"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.self.on('mediaScoreUpdate', ({ kind, isScreenshare, score }) => {\n  if (kind === 'video') {\n    console.log(\n      `Your ${isScreenshare ? 'screenshare' : 'video'} quality score is `,\n      score\n    );\n  }\n\n  if (kind === 'audio') {\n    console.log('Your audio quality score is ', score);\n  }\n\n  if (score < 5) {\n    console.log('Your media quality is poor');\n  }\n});\n")),(0,r.kt)("h2",{id:"webinar-stage-events"},"Webinar Stage events"),(0,r.kt)("p",null,"In a ",(0,r.kt)("inlineCode",{parentName:"p"},"WEBINAR")," setup, below events can be used to bring a user on to stage"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Event")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"waitlisted")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the user has been added to the waitlist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"joinStageRequestAccepted")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted to all host users, when a host accepts a user's request to join webinar meeting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"joinStageRequestRejected")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted to all host users, when a host rejects a user's request to join webinar meeting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"removedFromStage")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the user has been kicked from the webinar meeting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stageJoined")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the user has joined the webinar meeting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stageLeft")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the user has left the webinar meeting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"peerRequestToJoinStage")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when a user has requested to join the webinar meeting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"peerRejectedToJoinStage")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the user's request to join the meeting has been rejected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"peerAcceptedToJoinStage")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when the user's request to join the meeting has been accepted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"peerStoppedPresenting")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when a participant stops presenting in the webinar meeting.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"peerStartedPresenting")),(0,r.kt)("td",{parentName:"tr",align:null},"Emitted when a participant starts presenting in the webinar meeting.")))))}m.isMDXComponent=!0}}]);