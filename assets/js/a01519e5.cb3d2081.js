"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[32305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Events",description:"Local user events guide.",sidebar_position:2,tags:["mobile-core","local-user","self"]},l=void 0,d={unversionedId:"android-core/local-user/events",id:"android-core/local-user/events",title:"Events",description:"Local user events guide.",source:"@site/docs/archive/android-core/local-user/events.mdx",sourceDirName:"android-core/local-user",slug:"/android-core/local-user/events",permalink:"/archive/android-core/local-user/events",draft:!1,tags:[{label:"mobile-core",permalink:"/archive/tags/mobile-core"},{label:"local-user",permalink:"/archive/tags/local-user"},{label:"self",permalink:"/archive/tags/self"}],version:"current",lastUpdatedAt:1693223168,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 28\uc77c",sidebarPosition:2,frontMatter:{title:"Events",description:"Local user events guide.",sidebar_position:2,tags:["mobile-core","local-user","self"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/archive/android-core/local-user/introduction"},next:{title:"Manage Media Devices",permalink:"/archive/android-core/local-user/manage-media-devices"}},c={},u=[{value:"Local User - Events",id:"local-user---events",level:2},{value:"Room joined",id:"room-joined",level:3},{value:"Video update",id:"video-update",level:3},{value:"Audio update",id:"audio-update",level:3},{value:"Room disconnected update",id:"room-disconnected-update",level:3},{value:"Proximity changed",id:"proximity-changed",level:3},{value:"Waitlist status",id:"waitlist-status",level:3},{value:"Process message within a room",id:"process-message-within-a-room",level:3}],p={toc:u};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"local-user---events"},"Local User - Events"),(0,r.kt)("p",null,"You can subscribe to various events on the local user by implementing\n",(0,r.kt)("inlineCode",{parentName:"p"},"DyteSelfEventsListener")," and passing the object to\n",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.addSelfEventsListener(dyteSelfEventsListener)"),"."),(0,r.kt)("h3",{id:"room-joined"},"Room joined"),(0,r.kt)("p",null,"Triggered when the room join event completes and the meeting is ready to\nproduce and consume media."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\n    override fun onRoomJoined() {\n      super.onRoomJoined()\n    }\n});\n")),(0,r.kt)("h3",{id:"video-update"},"Video update"),(0,r.kt)("p",null,"Triggered when the user starts/stops the video using ",(0,r.kt)("inlineCode",{parentName:"p"},"enableVideo")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"disableVideo"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\n    override fun onVideoUpdate(videoEnabled: Boolean) {\n      super.onVideoUpdate(videoEnabled)\n      if (videoEnabled) {\n        // video is enabled, and other participants in room can see local user\n      } else {\n        // video is disabled, and other participants in room can not see local user.\n      }\n    }\n})\n")),(0,r.kt)("h3",{id:"audio-update"},"Audio update"),(0,r.kt)("p",null,"Triggered when the user starts/stops the audio using ",(0,r.kt)("inlineCode",{parentName:"p"},"enableAudio")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"disableAudio"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\n    override fun onAudioUpdate(audioEnabled: Boolean) {\n      super.onAudioUpdate(videoEnabled)\n      if (audioEnabled) {\n        // audio is enabled, and other participants in room can hear local user\n      } else {\n        // audio is disabled, and other participants in room can not hear local user.\n      }\n    }\n})\n")),(0,r.kt)("h3",{id:"room-disconnected-update"},"Room disconnected update"),(0,r.kt)("p",null,"Triggered when the user is disconnected due to media or network error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\n    override fun onMeetingRoomDisconnected() {\n      super.onMeetingRoomDisconnected()\n    }\n})\n")),(0,r.kt)("h3",{id:"proximity-changed"},"Proximity changed"),(0,r.kt)("p",null,"Triggered whenever there is a change in proximity, indicating if the device is near an earpiece, which subsequently causes the display to turn on or off."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\n    override fun onProximityChanged(isNear: Boolean) {\n      super.onProximityChanged(isNear)\n      // isNear\n      // if true, display should be turned off, as user might be speaking through earpiece\n      // if false, display should be turned on, as user might be looking at display and listening through speaker/earphones.\n    }\n})\n")),(0,r.kt)("h3",{id:"waitlist-status"},"Waitlist status"),(0,r.kt)("p",null,"For meetings whose waiting room is enabled:"),(0,r.kt)("p",null,"To get status of localUser in waiting room we can use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val waitListStatus = meeting.localUser.waitListStatus\n")),(0,r.kt)("p",null,"You can listen to those changes in ",(0,r.kt)("inlineCode",{parentName:"p"},"onWaitListStatusUpdate()")," callbacks"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\n    override fun onWaitListStatusUpdate(waitListStatus: WaitListStatus) {\n      super.onWaitListStatusUpdate(waitListStatus)\n    }\n});\n")),(0,r.kt)("h3",{id:"process-message-within-a-room"},"Process message within a room"),(0,r.kt)("p",null,"Manage messages among participants within a room."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"meeting.addSelfEventsListener(object : DyteSelfEventsListener {\n    override fun onRoomMessage(message: String) {\n      // handle the message here\n    }\n});\n")))}m.isMDXComponent=!0}}]);