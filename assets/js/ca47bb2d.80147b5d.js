"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[40925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),g=l(n),d=r,u=g["".concat(c,".").concat(d)]||g[d]||p[d]||s;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},69218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"Sending a chat message",description:"Send a chat message in a meeting.",sidebar_position:2,tags:["web-core","chat"]},c="Sending a chat message",l={unversionedId:"chat/sending-a-chat-message",id:"chat/sending-a-chat-message",title:"Sending a chat message",description:"Send a chat message in a meeting.",source:"@site/docs/web-core/chat/sending-a-chat-message.mdx",sourceDirName:"chat",slug:"/chat/sending-a-chat-message",permalink:"/web-core/chat/sending-a-chat-message",draft:!1,editUrl:"https://github.com/kgenots/kgenots-web/tree/main/docs/web-core/chat/sending-a-chat-message.mdx",tags:[{label:"web-core",permalink:"/web-core/tags/web-core"},{label:"chat",permalink:"/web-core/tags/chat"}],version:"current",lastUpdatedAt:1692164292,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 16\uc77c",sidebarPosition:2,frontMatter:{title:"Sending a chat message",description:"Send a chat message in a meeting.",sidebar_position:2,tags:["web-core","chat"]},sidebar:"tutorialSidebar",previous:{title:"Introducing chat",permalink:"/web-core/chat/introduction"},next:{title:"Receiving chat messages",permalink:"/web-core/chat/receiving-chat-messages"}},m={},p=[{value:"Send a text message",id:"send-a-text-message",level:2},{value:"Send an image",id:"send-an-image",level:2},{value:"Send a file",id:"send-a-file",level:2},{value:"Extra",id:"extra",level:2}],g={toc:p};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sending-a-chat-message"},"Sending a chat message"),(0,a.kt)("p",null,"As mentioned in ",(0,a.kt)("a",{parentName:"p",href:"./introduction"},"introduction"),", there are 3 types of chat\nmessages - text messages, images, and files. There is a method in ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.chat"),"\nto send a message of each type."),(0,a.kt)("h2",{id:"send-a-text-message"},"Send a text message"),(0,a.kt)("p",null,"To send a text message, the ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.chat.sendTextMessage()")," method can be used.\nThis accepts a string ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," and sends it to the room."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const message = 'Is this the real life?';\nawait meeting.chat.sendTextMessage(message);\n")),(0,a.kt)("h2",{id:"send-an-image"},"Send an image"),(0,a.kt)("p",null,"You can send an image with the help of ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.chat.sendImageMessage()"),". This\naccepts an image of type ",(0,a.kt)("inlineCode",{parentName:"p"},"File"),", and sends it to the participants in the\nmeeting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<label for="img">Select image:</label>\n<input type="file" id="img" name="img" accept="image/*" />\n<button onclick="onSendImage()">Send Image</button>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async function onSendImage() {\n  const image = document.getElementById('img');\n  await meeting.chat.sendImageMessage(image.files[0]);\n}\n")),(0,a.kt)("h2",{id:"send-a-file"},"Send a file"),(0,a.kt)("p",null,"Sending a file is quite similar to sending an image. The only difference is that\nwhen you send an image, a preview will be shown in the meeting chat, which is\nnot the case for sending files. That being said, an image can be sent as a file\ntoo using ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.chat.sendFileMessage()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<label for="file">Select file:</label>\n<input type="file" id="file" name="file" />\n<button onclick="onSendFile()">Send File</button>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async function onSendFile() {\n  const file = document.getElementById('file');\n  await meeting.chat.sendFileMessage(file.files[0]);\n}\n")),(0,a.kt)("h2",{id:"extra"},"Extra"),(0,a.kt)("p",null,"There is also a common method called ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.chat.sendMessage()")," that can be\nused to send any of the 3 types of messages displayed above. It essentially\ncalls one of the methods from above depending upon the type of payload you send\nto the method. The ",(0,a.kt)("inlineCode",{parentName:"p"},"sendMessage()")," method accepts a parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," of the\nfollowing type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async function sendMessage(\n    message: { type: 'text', message: string }\n        | { type: 'image', image: File }\n        | { type: 'file', file: File },\n) {...}\n")),(0,a.kt)("p",null,"Here's how you would use the ",(0,a.kt)("inlineCode",{parentName:"p"},"sendMessage()")," method to send a text message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const message = 'Is this just fantasy?';\nawait meeting.chat.sendMessage({ type: 'text', message });\n")))}d.isMDXComponent=!0}}]);