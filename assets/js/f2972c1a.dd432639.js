"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[53997],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>u});n(67294);var a=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={sidebar_position:5},s="Advanced usage",l={unversionedId:"react-native/advanced-usage",id:"react-native/advanced-usage",title:"Advanced usage",description:"Turn on the setup / preview screen",source:"@site/docs/archive/react-native/advanced-usage.mdx",sourceDirName:"react-native",slug:"/react-native/advanced-usage",permalink:"/archive/react-native/advanced-usage",draft:!1,tags:[],version:"current",lastUpdatedAt:1693223168,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 28\uc77c",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Customize the meeting UI",permalink:"/archive/react-native/customize-meeting-ui"},next:{title:"Events",permalink:"/archive/react-native/events"}},c={},u=[{value:"Turn on the setup / preview screen",id:"turn-on-the-setup--preview-screen",level:2},{value:"Dynamic codec switching",id:"dynamic-codec-switching",level:2},{value:"Get error details for meeting creation",id:"get-error-details-for-meeting-creation",level:2},{value:"Control the meeting, and take meeting &amp; participant actions",id:"control-the-meeting-and-take-meeting--participant-actions",level:2},{value:"Get info about meeting&#39;s connection configuration",id:"get-info-about-meetings-connection-configuration",level:2},{value:"Get info about the meeting&#39;s UI configuration",id:"get-info-about-the-meetings-ui-configuration",level:2},{value:"Get info about the plugins configured for the meeting",id:"get-info-about-the-plugins-configured-for-the-meeting",level:2},{value:"Replace the meeting control buttons with your own buttons",id:"replace-the-meeting-control-buttons-with-your-own-buttons",level:2},{value:"Mic control",id:"mic-control",level:3},{value:"Camera control",id:"camera-control",level:3},{value:"Screenshare control",id:"screenshare-control",level:3},{value:"Leave meeting",id:"leave-meeting",level:3},{value:"Send a custom message to other participants in the meeting (P2P message / data exchange)",id:"send-a-custom-message-to-other-participants-in-the-meeting-p2p-message--data-exchange",level:2},{value:"Get list of all participants in the meeting",id:"get-list-of-all-participants-in-the-meeting",level:2},{value:"Controlling individual participants and actions",id:"controlling-individual-participants-and-actions",level:2},{value:"Get participant list",id:"get-participant-list",level:3},{value:"Participant info and actions",id:"participant-info-and-actions",level:3},{value:"Peer ID",id:"peer-id",level:4},{value:"Client specific ID",id:"client-specific-id",level:4},{value:"Participant name",id:"participant-name",level:4},{value:"Participant thumbnail photo / avatar",id:"participant-thumbnail-photo--avatar",level:4},{value:"Participant metadata about the preset",id:"participant-metadata-about-the-preset",level:4},{value:"Participant metadata about the meeting view type",id:"participant-metadata-about-the-meeting-view-type",level:4},{value:"Check if participant&#39;s audio is on",id:"check-if-participants-audio-is-on",level:4},{value:"Get participant audio stream",id:"get-participant-audio-stream",level:4},{value:"Disable participant&#39;s audio stream",id:"disable-participants-audio-stream",level:4},{value:"Check if participant&#39;s video is on",id:"check-if-participants-video-is-on",level:4},{value:"Get participant video stream",id:"get-participant-video-stream",level:4},{value:"Disable participant&#39;s audio stream",id:"disable-participants-audio-stream-1",level:4},{value:"Check if the participant is pinned to the grid",id:"check-if-the-participant-is-pinned-to-the-grid",level:4},{value:"Pin a participant video to the grid",id:"pin-a-participant-video-to-the-grid",level:4},{value:"Unpin a participant video from the grid",id:"unpin-a-participant-video-from-the-grid",level:4},{value:"Zoom a participant&#39;s video using custom logic",id:"zoom-a-participants-video-using-custom-logic",level:4},{value:"Send a custom message to a participant (P2P message / data exchange)",id:"send-a-custom-message-to-a-participant-p2p-message--data-exchange",level:4},{value:"Check if the participant is current participant",id:"check-if-the-participant-is-current-participant",level:4},{value:"Errors",id:"errors",level:2}],d={toc:u};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-usage"},"Advanced usage"),(0,a.kt)("h2",{id:"turn-on-the-setup--preview-screen"},"Turn on the setup / preview screen"),(0,a.kt)("p",null,"The audio / video setup screen that appears for the participant right before\ngetting into the meeting is turned off by default. You can set ",(0,a.kt)("inlineCode",{parentName:"p"},"showSetupScreen"),"\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"meetingConfig")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to turn it on (default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{7}","{7}":!0},"<DyteMeeting\n  onInit={(meeting) => { }}\n  clientId=`yourClientID`\n  meetingConfig={{\n      roomName: `roomName`,\n      authToken: `authToken`,\n      showSetupScreen: true\n  }}\n>\n")),(0,a.kt)("h2",{id:"dynamic-codec-switching"},"Dynamic codec switching"),(0,a.kt)("p",null,"Dyte uses VP9 codec by default, but switches to H264/VP8 depending on\nparticipants' video codec support. VP9 is a superior codec but not all browsers\nsupport it. If you set ",(0,a.kt)("inlineCode",{parentName:"p"},"autoTune")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"meetingConfig")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", Dyte will use\nVP8 only for all participants (default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{7}","{7}":!0},"<DyteMeeting\n  onInit={(meeting) => { }}\n  clientId=`yourClientID`\n  meetingConfig={{\n      roomName: `roomName`,\n      authToken: `authToken`,\n      autoTune: false\n  }}\n>\n")),(0,a.kt)("h2",{id:"get-error-details-for-meeting-creation"},"Get error details for meeting creation"),(0,a.kt)("p",null,"You can optionally choose to subscribe to the error details, in case an error\noccurs while joining a meeting from the client app, by passing an ",(0,a.kt)("inlineCode",{parentName:"p"},"onError")," prop\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"DyteMeeting"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"onError")," expects a function which has a single param of type\n",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," and is not expected to return anything."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{8}","{8}":!0},"<DyteMeeting\n  onInit={(meeting) => { }}\n  clientId=`yourClientID`\n  meetingConfig={{\n      roomName: `roomName`,\n      authToken: `authToken`\n  }}\n  onError={(error) => { }}\n>\n")),(0,a.kt)("p",null,"You can refer to ",(0,a.kt)("a",{parentName:"p",href:"#errors"},"this section")," for info on errors."),(0,a.kt)("h2",{id:"control-the-meeting-and-take-meeting--participant-actions"},"Control the meeting, and take meeting & participant actions"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Meeting")," instance (referenced as ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting")," above) helps you interact with\nthe meeting. You can take actions on the meeting as well as the participants.\nYou can also setup custom controls to that interact with the meeting in certain\nways that help you send events and messages across to other participants in the\nmeeting. You can find the complete reference to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Meeting")," type\n",(0,a.kt)("a",{parentName:"p",href:"./reference/meeting"},"here"),". Read on to understand how to use these individual\ncontrols."),(0,a.kt)("h2",{id:"get-info-about-meetings-connection-configuration"},"Get info about meeting's connection configuration"),(0,a.kt)("p",null,"You can get the connection configuration of the meeting in progress using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"connectionConfig")," property of ",(0,a.kt)("inlineCode",{parentName:"p"},"Meeting"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let config = meeting.connectionConfig;\n")),(0,a.kt)("p",null,"sets the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  clientId: string,\n  roomName: string,\n  showSetupScreen: boolean,\n  autoTune: boolean,\n}\n")),(0,a.kt)("h2",{id:"get-info-about-the-meetings-ui-configuration"},"Get info about the meeting's UI configuration"),(0,a.kt)("p",null,"You can get the UI configuration of the meeting in progress using the ",(0,a.kt)("inlineCode",{parentName:"p"},"uiConfig"),"\nproperty of ",(0,a.kt)("inlineCode",{parentName:"p"},"Meeting"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let config = meeting.uiConfig;\n")),(0,a.kt)("p",null,"sets the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    controlBar: boolean,\n    controlBarElements: {\n        fullscreen:   boolean,\n        share:        boolean,\n        screenShare:  boolean,\n        layout:       boolean,\n        chat:         boolean,\n        polls:        boolean,\n        participants: boolean,\n        plugins:      boolean\n    },\n    header: boolean,\n    headerElements: {\n        logo:             boolean,\n        title:            boolean,\n        participantCount: boolean,\n        clock:            boolean\n    },\n    dimensions:{\n        width:  number,\n        height: number\n    },\n    logo: string_url,\n    colors: {\n        primary:         string_hexColor\n        secondary:       string_hexColor\n        textPrimary:     string_hexColor\n        videoBackground: string_hexColor\n    }\n}\n")),(0,a.kt)("h2",{id:"get-info-about-the-plugins-configured-for-the-meeting"},"Get info about the plugins configured for the meeting"),(0,a.kt)("p",null,"You can get info about the plugins configured for the meeting in progress using\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," property of ",(0,a.kt)("inlineCode",{parentName:"p"},"Meeting"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let plugins = meeting.plugins;\n")),(0,a.kt)("p",null,"sets the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins")," to an array of with elements that are instances of\ntype ",(0,a.kt)("inlineCode",{parentName:"p"},"DytePlugin"),", whose prototype is defined below in the reference section and\ncan be directly used as a type if you prefer using TypeScript bindings."),(0,a.kt)("h2",{id:"replace-the-meeting-control-buttons-with-your-own-buttons"},"Replace the meeting control buttons with your own buttons"),(0,a.kt)("p",null,"Let's say you don't want to give many options to the participants in a meeting,\nother than the basic audio and video turning on, or you don't like our buttons\nand control bar design (you really should give us feedback too, in this case),\nor for any other reason - you just want to build your own buttons for basic\nmeeting controls. This is possible with Dyte, with the minor caveat that you\nwill need to put some validations at your end."),(0,a.kt)("p",null,"First thing in such a scenario would be to do away with our control bar"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.updateUIConfig({ controlBar: false });\n")),(0,a.kt)("p",null,"Now you can perform the basic functions of a meeting, like below. These\nfunctions can be used as the ",(0,a.kt)("inlineCode",{parentName:"p"},"onClick")," handlers of your own buttons."),(0,a.kt)("h3",{id:"mic-control"},"Mic control"),(0,a.kt)("p",null,"To turn off the mic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.self.disableAudio();\n")),(0,a.kt)("p",null,"To turn on the mic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.self.enableAudio();\n")),(0,a.kt)("h3",{id:"camera-control"},"Camera control"),(0,a.kt)("p",null,"To turn off the camera"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.self.disableVideo();\n")),(0,a.kt)("p",null,"To turn on the camera"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.self.enableVideo();\n")),(0,a.kt)("h3",{id:"screenshare-control"},"Screenshare control"),(0,a.kt)("p",null,"To turn off screenshare"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.self.disableScreenshare();\n")),(0,a.kt)("p",null,"To turn on screenshare"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.self.enableScreenshare();\n")),(0,a.kt)("h3",{id:"leave-meeting"},"Leave meeting"),(0,a.kt)("p",null,"To leave the meeting"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.leaveRoom();\n")),(0,a.kt)("h2",{id:"send-a-custom-message-to-other-participants-in-the-meeting-p2p-message--data-exchange"},"Send a custom message to other participants in the meeting (P2P message / data exchange)"),(0,a.kt)("p",null,"You can send custom messages relevant to your app, JSON data, or any really any\nother data that is serializable, to other participants in the meeting. Think of\nit as a parallel data channel in the same P2P manner as the media streams. While\nthe pre-built chat function supports sending messages and files, you can do more\nusing this feature. Since these messages do not appear in the chat box, you can\nsend and receive data specific to your app and choose to take actions as well as\ndisplay them on the UI as you want."),(0,a.kt)("p",null,"To send such a message to all participants in the meeting room"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.sendRoomMessage(message);\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," can be of any type."),(0,a.kt)("p",null,"To send a targeted message to specific participant in the meeting room"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.sendMessage(peerId, message);\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," can be of any type and ",(0,a.kt)("inlineCode",{parentName:"p"},"peerId")," is a string representing the\nunique ID of the participant as obtained from the participant list."),(0,a.kt)("h2",{id:"get-list-of-all-participants-in-the-meeting"},"Get list of all participants in the meeting"),(0,a.kt)("p",null,"You can get a list of all participants in the meeting using the ",(0,a.kt)("inlineCode",{parentName:"p"},"participants"),"\nproperty of ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let participantList = meeting.participants;\n")),(0,a.kt)("p",null,"sets the ",(0,a.kt)("inlineCode",{parentName:"p"},"participantList")," to an array whose elements are instances of type\n",(0,a.kt)("inlineCode",{parentName:"p"},"DyteParticipant"),", whose prototype is defined below in the reference section and\ncan be directly used as a type if you prefer using TypeScript bindings. There\nwill be exactly one element of type ",(0,a.kt)("inlineCode",{parentName:"p"},"DyteSelfParticipant"),", which refers to the\ncurrent participant."),(0,a.kt)("h2",{id:"controlling-individual-participants-and-actions"},"Controlling individual participants and actions"),(0,a.kt)("p",null,"Dyte client SDK provide methods and properties to help you control participant\nactions and certain UI elements. This could include actions that affect the\nparticipant themselves as well as other participants (like a host with\nprivileged permissions may want to control the video of other participants).\nThis section defines all the possible properties and actions that can be taken."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Remember that despite the functions being available to every participant via the\nclient SDK, they will not take affect until coupled with the right permissions\nfor the participant who intends to use these.")),(0,a.kt)("h3",{id:"get-participant-list"},"Get participant list"),(0,a.kt)("p",null,"To get a list of all participants, use ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.participants"),": it returns\n",(0,a.kt)("inlineCode",{parentName:"p"},"Array[DyteParticipant|DyteSelfParticipant]")," where all meeting participants are\n",(0,a.kt)("a",{parentName:"p",href:"./reference/participant"},(0,a.kt)("inlineCode",{parentName:"a"},"DyteParticipant"))," and the current participant is\n",(0,a.kt)("a",{parentName:"p",href:"./reference/self-participant"},(0,a.kt)("inlineCode",{parentName:"a"},"DyteSelfParticipant")),"."),(0,a.kt)("h3",{id:"participant-info-and-actions"},"Participant info and actions"),(0,a.kt)("p",null,"Once you get the array of participants as mentioned above, you can iterate over\nthat and get certain info about every participant."),(0,a.kt)("p",null,"We will consider the following iterator for the next section."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.participants.forEach((p) => {\n  // participant specific code goes here\n});\n")),(0,a.kt)("h4",{id:"peer-id"},"Peer ID"),(0,a.kt)("p",null,"Get unique ID for every participant. This ID is generated by Dyte when a\nparticipant joins the meeting. This ID is used for referring to a participant\nwithin Dyte, such as for\n",(0,a.kt)("a",{parentName:"p",href:"#send-a-custom-message-to-other-participants-in-the-meeting-p2p-message--data-exchange"},"sending custom messages"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Even if the same participant, using the same auth token, rejoins the meeting,\nfor example by refreshing the page / app or due to connection drop, the peer ID\nwould be refreshed in that case.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let peerID = p.id;\n")),(0,a.kt)("p",null,"sets the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"peerID")," to a UUID string."),(0,a.kt)("h4",{id:"client-specific-id"},"Client specific ID"),(0,a.kt)("p",null,"Get the client specific ID as you have specified in the add participant API\ncall. You may want to decide exposing custom controls or build other business\nlogic based on this identifier, which helps you find the participant info in\nyour system."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let clientSpecificID = p.clientSpecificId;\n")),(0,a.kt)("h4",{id:"participant-name"},"Participant name"),(0,a.kt)("p",null,"Get the participant name as you have specified in the add participant API call.\nThe participant may have changed this name, if enabled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let name = p.name;\n")),(0,a.kt)("h4",{id:"participant-thumbnail-photo--avatar"},"Participant thumbnail photo / avatar"),(0,a.kt)("p",null,"Get the participant photo as you have specified in the add participant API call."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let name = p.picture;\n")),(0,a.kt)("h4",{id:"participant-metadata-about-the-preset"},"Participant metadata about the preset"),(0,a.kt)("p",null,"Get the preset that has been set for the participant either as a default or\nexplicitly as specified in the add participant API call."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let preset = p.metadata.preset_name;\n")),(0,a.kt)("h4",{id:"participant-metadata-about-the-meeting-view-type"},"Participant metadata about the meeting view type"),(0,a.kt)("p",null,"Get the view type that the participant is currently seeing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let preset = p.metadata.view_type;\n")),(0,a.kt)("h4",{id:"check-if-participants-audio-is-on"},"Check if participant's audio is on"),(0,a.kt)("p",null,"To check whether a participant's audio is on (mic is turned on), you can use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let audio = p.audioEnabled;\n")),(0,a.kt)("p",null,"which sets the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"audio")," to a boolean specifying if the mic is on or not."),(0,a.kt)("h4",{id:"get-participant-audio-stream"},"Get participant audio stream"),(0,a.kt)("p",null,"If the participant's audio is on, you can get the associated audio stream using"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let audioStream = p.audioTrack;\n")),(0,a.kt)("p",null,"which sets the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"audioStream")," to a ",(0,a.kt)("inlineCode",{parentName:"p"},"MediaStreamTrack")," that you can use\nelsewhere such as a custom recording."),(0,a.kt)("h4",{id:"disable-participants-audio-stream"},"Disable participant's audio stream"),(0,a.kt)("p",null,"To remotely turn the participant's mic off, you can do"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"p.disableAudio();\n")),(0,a.kt)("h4",{id:"check-if-participants-video-is-on"},"Check if participant's video is on"),(0,a.kt)("p",null,"To check whether a participant's video is on (camera is turned on), you can use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let video = p.videoEnabled;\n")),(0,a.kt)("p",null,"which sets the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"video")," to a boolean specifying if the camera is on or\nnot."),(0,a.kt)("h4",{id:"get-participant-video-stream"},"Get participant video stream"),(0,a.kt)("p",null,"If the participant's video is on, you can get the associated video stream using"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let videoStream = p.videoTrack;\n")),(0,a.kt)("p",null,"which sets the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"videoStream")," to a ",(0,a.kt)("inlineCode",{parentName:"p"},"MediaStreamTrack")," that you can use\nelsewhere such as a custom recording."),(0,a.kt)("h4",{id:"disable-participants-audio-stream-1"},"Disable participant's audio stream"),(0,a.kt)("p",null,"To remotely turn the participant's camera off, you can do"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"p.disableVideo();\n")),(0,a.kt)("h4",{id:"check-if-the-participant-is-pinned-to-the-grid"},"Check if the participant is pinned to the grid"),(0,a.kt)("p",null,"To check whether a participant's video is pinned to the meeting grid; by the\nhost, by the user, by the preset, or by any other mechanism; you can use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let pinned = p.isPinned;\n")),(0,a.kt)("p",null,"which sets the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"pinned")," to a boolean specifying whether the video is\npinned or not."),(0,a.kt)("h4",{id:"pin-a-participant-video-to-the-grid"},"Pin a participant video to the grid"),(0,a.kt)("p",null,"You can pin a participant's video to the grid using"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"p.pin();\n")),(0,a.kt)("h4",{id:"unpin-a-participant-video-from-the-grid"},"Unpin a participant video from the grid"),(0,a.kt)("p",null,"You can unpin a participant's video from the grid using"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"p.unpin();\n")),(0,a.kt)("h4",{id:"zoom-a-participants-video-using-custom-logic"},"Zoom a participant's video using custom logic"),(0,a.kt)("p",null,"You can zoom on to a participant's video for everyone in the meeting. You would\nneed to specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"scale"),", which represents the scale of zoom, as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," offsets, which represent the offset from center to reposition the video\ninside the container in the grid."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"p.zoom({ scale: , x: , y: });\n")),(0,a.kt)("h4",{id:"send-a-custom-message-to-a-participant-p2p-message--data-exchange"},"Send a custom message to a participant (P2P message / data exchange)"),(0,a.kt)("p",null,"Just like\n",(0,a.kt)("a",{parentName:"p",href:"#send-a-custom-message-to-other-participants-in-the-meeting-p2p-message--data-exchange"},"sending a custom message to the whole room"),",\nyou can target a particular participant to send a message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"p.sendMessage(message);\n")),(0,a.kt)("h4",{id:"check-if-the-participant-is-current-participant"},"Check if the participant is current participant"),(0,a.kt)("p",null,"You can check if the participant is the current participant by checking the\n",(0,a.kt)("inlineCode",{parentName:"p"},"isMe")," boolean property of the participant. If found to be ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", you can treat\nthat participant as an instance of type ",(0,a.kt)("inlineCode",{parentName:"p"},"DyteSelfParticipant"),", which is a\nsubclass of type ",(0,a.kt)("inlineCode",{parentName:"p"},"DyteParticipant"),". This unlocks a few additional actions that\nyou can take with that participant."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let currentParticipant = meeting.participants.find((p) => p.isMe);\n")),(0,a.kt)("p",null,"Now all the methods that you can call on ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.self")," (as described under\n",(0,a.kt)("a",{parentName:"p",href:"#replace-the-meeting-control-buttons-with-your-own-buttons"},"replace meeting control buttons"),")\ncan be called on ",(0,a.kt)("inlineCode",{parentName:"p"},"currentParticipant"),"."),(0,a.kt)("h2",{id:"errors"},"Errors"),(0,a.kt)("p",null,"There are 3 types of errors emitted when a meeting cannot be initialized. Read\nmore about these on the ",(0,a.kt)("a",{parentName:"p",href:"./reference/dyte-errors"},(0,a.kt)("inlineCode",{parentName:"a"},"DyteErrors"))," page in the\nreference section."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"enum DyteErrors {\n  CLIENTID_INVALID,\n  MEETING_UNAUTHORIZED,\n  MEETING_NOTFOUND,\n}\n")),(0,a.kt)("p",null,"An example of handling such errors:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DyteMeeting, DyteErrors } from "@dyte/client";\n\n// ...\n// ...\n\n<DyteMeeting\n    onInit={(meeting) => { }}\n    clientId=`yourClientID`\n    meetingConfig={{\n        roomName: `roomName`,\n        authToken: `authToken`\n    }}\n    onError={(error) => {\n        if (error = DyteErrors.CLIENTID_INVALID) {\n            // take appropriate action\n        }\n    }}\n>\n')))}m.isMDXComponent=!0}}]);