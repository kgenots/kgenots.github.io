"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[84683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"Events",description:"Local user events guide.",sidebar_position:2,tags:["web-core","local-user","self","self events"]},s="Local User - Events",d={unversionedId:"local-user/events",id:"local-user/events",title:"Events",description:"Local user events guide.",source:"@site/docs/web-core/local-user/events.mdx",sourceDirName:"local-user",slug:"/local-user/events",permalink:"/web-core/local-user/events",draft:!1,editUrl:"https://github.com/kgenots/kgenots-web/tree/main/docs/web-core/local-user/events.mdx",tags:[{label:"web-core",permalink:"/web-core/tags/web-core"},{label:"local-user",permalink:"/web-core/tags/local-user"},{label:"self",permalink:"/web-core/tags/self"},{label:"self events",permalink:"/web-core/tags/self-events"}],version:"current",lastUpdatedAt:1692164292,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 16\uc77c",sidebarPosition:2,frontMatter:{title:"Events",description:"Local user events guide.",sidebar_position:2,tags:["web-core","local-user","self","self events"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/web-core/local-user/introduction"},next:{title:"Manage Media Devices",permalink:"/web-core/local-user/manage-media-devices"}},c={},p=[{value:"Room joined",id:"room-joined",level:2},{value:"Room left",id:"room-left",level:2},{value:"Video update",id:"video-update",level:2},{value:"Audio update",id:"audio-update",level:2},{value:"Screenshare update",id:"screenshare-update",level:2},{value:"Device update",id:"device-update",level:2},{value:"Network quality score",id:"network-quality-score",level:2},{value:"Webinar Stage events",id:"webinar-stage-events",level:2}],u={toc:p};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"local-user---events"},"Local User - Events"),(0,a.kt)("p",null,"You can subscribe to various events on the local user by calling\n",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.self.on(EVENT_NAME)"),"."),(0,a.kt)("h2",{id:"room-joined"},"Room joined"),(0,a.kt)("p",null,"Triggered when the room join event completes and now the ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting")," is ready to\nproduce and consume media."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.self.on('roomJoined', () => {\n  console.log(\n    'User has joined the meeting and ready to produce and consume media'\n  );\n});\n")),(0,a.kt)("h2",{id:"room-left"},"Room left"),(0,a.kt)("p",null,"Triggered when the local user leaves the meeting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"meeting.self.on('roomLeft', ({ state }) => {\n  // state is a string whose values are explained below\n  if (state === 'left') {\n    console.log('User has left the meeting');\n  }\n});\n")),(0,a.kt)("p",null,"Here are all the possible values of the ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," variable."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Event"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"left")),(0,a.kt)("td",{parentName:"tr",align:null},"Participant has left the room.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"kicked")),(0,a.kt)("td",{parentName:"tr",align:null},"Participant is removed from the meeting.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ended")),(0,a.kt)("td",{parentName:"tr",align:null},"Everyone is removed from the meeting, and the session has ended.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"rejected")),(0,a.kt)("td",{parentName:"tr",align:null},"Participant's request to join the room is rejected (when you're in a waiting room).")))),(0,a.kt)("h2",{id:"video-update"},"Video update"),(0,a.kt)("p",null,"Triggered when the user starts / stops the video using ",(0,a.kt)("inlineCode",{parentName:"p"},"enableVideo")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"disableVideo")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const videoElem = document.getElementById('my-video');\n\nmeeting.self.on('videoUpdate', async ({ videoEnabled, videoTrack }) => {\n  if (videoEnabled) {\n    const stream = new MediaStream();\n    stream.addTrack(videoTrack);\n    videoElem.srcObject = stream;\n    videoElem.play();\n  } else {\n    videoElem.stop();\n  }\n});\n")),(0,a.kt)("h2",{id:"audio-update"},"Audio update"),(0,a.kt)("p",null,"Triggered when the user starts / stops the audio using ",(0,a.kt)("inlineCode",{parentName:"p"},"enableAudio")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"disableAudio")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const audioElem = document.getElementById('my-audio');\n\nmeeting.self.on('audioUpdate', async ({ audioEnabled, audioTrack }) => {\n  if (audioEnabled) {\n    const stream = new MediaStream();\n    stream.addTrack(audioTrack);\n    audioElem.srcObject = stream;\n    audioElem.play();\n  } else {\n    audioElem.stop();\n  }\n});\n")),(0,a.kt)("h2",{id:"screenshare-update"},"Screenshare update"),(0,a.kt)("p",null,"Triggered when the user starts / stops the screen share using\n",(0,a.kt)("inlineCode",{parentName:"p"},"enableScreenShare()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"disableScreenShare()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const screenElem = document.getElementById('my-screen-share');\n\nmeeting.self.on(\n  'screenShareUpdate',\n  async ({ screenShareEnabled, screenShareTracks }) => {\n    if (screenShareEnabled) {\n      const stream = new MediaStream();\n      stream.addTrack(screenShareTracks.video);\n      screenElem.srcObject(stream);\n      await screenElem.play();\n    } else {\n      await screenElem.stop();\n    }\n  }\n);\n")),(0,a.kt)("h2",{id:"device-update"},"Device update"),(0,a.kt)("p",null,"Subscribe to the ",(0,a.kt)("inlineCode",{parentName:"p"},"deviceUpdate")," event to handle the changing video, audio and\nspeaker devices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.self.on('deviceUpdate', ({ device }) => {\n  // handle microphone device change\n  if (device.kind === 'audioinput') {\n    console.log('mic change', device);\n  }\n  // handle camera device change\n  if (device.kind === 'videoinput') {\n    console.log('camera change', device);\n  }\n  // handle speaker device change\n  if (device.kind === 'audiooutput') {\n    console.log('speaker change', device);\n  }\n});\n")),(0,a.kt)("h2",{id:"network-quality-score"},"Network quality score"),(0,a.kt)("p",null,"Subscribe to the ",(0,a.kt)("inlineCode",{parentName:"p"},"mediaScoreUpdate")," event to monitor network"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.self.on('mediaScoreUpdate', ({ kind, isScreenshare, score }) => {\n  if (kind === 'video') {\n    console.log(\n      `Your ${isScreenshare ? 'screenshare' : 'video'} quality score is `,\n      score\n    );\n  }\n\n  if (kind === 'audio') {\n    console.log('Your audio quality score is ', score);\n  }\n\n  if (score < 5) {\n    console.log('Your media quality is poor');\n  }\n});\n")),(0,a.kt)("h2",{id:"webinar-stage-events"},"Webinar Stage events"),(0,a.kt)("p",null,"In a ",(0,a.kt)("inlineCode",{parentName:"p"},"WEBINAR")," setup, below events can be used to bring a user on to stage"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Event")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"waitlisted")),(0,a.kt)("td",{parentName:"tr",align:null},"Emitted when the user has been added to the waitlist.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"joinStageRequestAccepted")),(0,a.kt)("td",{parentName:"tr",align:null},"Emitted to all host users, when a host accepts a user's request to join webinar meeting.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"joinStageRequestRejected")),(0,a.kt)("td",{parentName:"tr",align:null},"Emitted to all host users, when a host rejects a user's request to join webinar meeting.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"removedFromStage")),(0,a.kt)("td",{parentName:"tr",align:null},"Emitted when the user has been kicked from the webinar meeting.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"stageJoined")),(0,a.kt)("td",{parentName:"tr",align:null},"Emitted when the user has joined the webinar meeting.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"stageLeft")),(0,a.kt)("td",{parentName:"tr",align:null},"Emitted when the user has left the webinar meeting.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"peerRequestToJoinStage")),(0,a.kt)("td",{parentName:"tr",align:null},"Emitted when a user has requested to join the webinar meeting.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"peerRejectedToJoinStage")),(0,a.kt)("td",{parentName:"tr",align:null},"Emitted when the user's request to join the meeting has been rejected.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"peerAcceptedToJoinStage")),(0,a.kt)("td",{parentName:"tr",align:null},"Emitted when the user's request to join the meeting has been accepted")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"peerStoppedPresenting")),(0,a.kt)("td",{parentName:"tr",align:null},"Emitted when a participant stops presenting in the webinar meeting.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"peerStartedPresenting")),(0,a.kt)("td",{parentName:"tr",align:null},"Emitted when a participant starts presenting in the webinar meeting.")))))}m.isMDXComponent=!0}}]);