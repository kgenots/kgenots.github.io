"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[37847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>s});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"Introduction",description:"Local user setup guide.",sidebar_position:1,tags:["flutter-core","local-user","self"]},c="Introduction - Local User",u={unversionedId:"local-user/introduction",id:"local-user/introduction",title:"Introduction",description:"Local user setup guide.",source:"@site/docs/flutter-core/local-user/introduction.mdx",sourceDirName:"local-user",slug:"/local-user/introduction",permalink:"/flutter-core/local-user/introduction",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/flutter-core/local-user/introduction.mdx",tags:[{label:"flutter-core",permalink:"/flutter-core/tags/flutter-core"},{label:"local-user",permalink:"/flutter-core/tags/local-user"},{label:"self",permalink:"/flutter-core/tags/self"}],version:"current",lastUpdatedAt:1692164292,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 16\uc77c",sidebarPosition:1,frontMatter:{title:"Introduction",description:"Local user setup guide.",sidebar_position:1,tags:["flutter-core","local-user","self"]},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/flutter-core/"},next:{title:"Events",permalink:"/flutter-core/local-user/events"}},d={},s=[{value:"Properties",id:"properties",level:2},{value:"Change default audio / video settings",id:"change-default-audio--video-settings",level:2},{value:"Turn audio/video tracks after joining the room",id:"turn-audiovideo-tracks-after-joining-the-room",level:2},{value:"Change the name of the local user",id:"change-the-name-of-the-local-user",level:2},{value:"Mute/Unmute microphone",id:"muteunmute-microphone",level:2},{value:"Enable/Disable camera",id:"enabledisable-camera",level:2},{value:"Switch camera between primary and secondary",id:"switch-camera-between-primary-and-secondary",level:2}],p={toc:s};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction---local-user"},"Introduction - Local User"),(0,r.kt)("p",null,"Local User object contain all the methods and properties about the local user\nmedia controls for the current room."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("p",null,"Here is a list of properties that local user provides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": ID of the participant pertaining to local user. (aka ",(0,r.kt)("inlineCode",{parentName:"li"},"peerId"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userId"),": The ",(0,r.kt)("inlineCode",{parentName:"li"},"userId")," of the participant."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": Contains Name of the local user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"picture"),": Link to the url of the participant"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isHost"),": Boolean value indicating whether this user is host of current\nmeeting or not."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clientSpecificId"),": Identifier provided by the developer while adding the\nparticipant."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flags"),": Type ",(0,r.kt)("inlineCode",{parentName:"li"},"ParticipantFlags")," and it contains two boolean values",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"recorder"),": if the participant is recorder"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hidden"),": if the participant is hidden"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"audioEnabled"),": Boolean value indicating if the audio currently enabled."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"videoEnabled"),": Boolean value indicating if the video currently enabled.")),(0,r.kt)("p",null,"Local user properties can be fetched via ",(0,r.kt)("inlineCode",{parentName:"p"},"localUser")," getter on the ",(0,r.kt)("inlineCode",{parentName:"p"},"dyteClient"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final localUserProperties = dyteClient.localUser;\n")),(0,r.kt)("h2",{id:"change-default-audio--video-settings"},"Change default audio / video settings"),(0,r.kt)("p",null,"By default as soon as you join the meeting, Dyte SDK will produce your video and\naudio streams. To change this behaviour, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"audioEnabled")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"videoEnabled"),"\nparameter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart",metastring:"{4,5}","{4,5}":!0},"final meetingInfo = DyteMeetingInfo(\n  roomName = MEETING_ROOM_NAME,\n  authToken = AUTH_TOKEN,\n  audioEnabled = false,\n  videoEnabled = true\n);\n")),(0,r.kt)("h2",{id:"turn-audiovideo-tracks-after-joining-the-room"},"Turn audio/video tracks after joining the room"),(0,r.kt)("p",null,"If audio and video tracks are disabled during the ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteMobileClient"),"\ninitialization process. You can setup the audio and video tracks by simply\ncalling ",(0,r.kt)("inlineCode",{parentName:"p"},"enableAudio()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"enableVideo()")," like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"dyteClient.localUser.enableAudio();\ndyteClient.localUser.enableVideo();\n")),(0,r.kt)("h2",{id:"change-the-name-of-the-local-user"},"Change the name of the local user"),(0,r.kt)("p",null,"Change the user's name by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"setDisplayName")," method. The changed name will\nreflect across all participants ONLY if the change happens before joining the\nmeeting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},'dyteClient.localUser.setDisplayName("New Name");\n')),(0,r.kt)("h2",{id:"muteunmute-microphone"},"Mute/Unmute microphone"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// Mute Audio\ndyteClient.localUser.disableAudio();\n\n// Unmute Audio\ndyteClient.localUser.enableAudio();\n\n// Get current status\nfinal isAudioEnabled = dyteClient.localUser.audioEnabled;\n")),(0,r.kt)("h2",{id:"enabledisable-camera"},"Enable/Disable camera"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// Disable Video\ndyteClient.localUser.disableVideo();\n\n// Enable Video\ndyteClient.localUser.enableVideo();\n\n// Get current status\nfinal isVideoEnabled = dyteClient.localUser.videoEnabled;\n")),(0,r.kt)("h2",{id:"switch-camera-between-primary-and-secondary"},"Switch camera between primary and secondary"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// switch camera\ndyteClient.localUser.switchCamera();\n")))}m.isMDXComponent=!0}}]);