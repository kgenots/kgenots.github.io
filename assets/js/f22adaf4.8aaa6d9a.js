"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[78300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=l(n),m=r,h=g["".concat(c,".").concat(m)]||g[m]||u[m]||s;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},32346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"Other chat functions",description:"Other functionality associated with chat.",sidebar_position:5,tags:["web-core","chat"]},c="Other chat functions",l={unversionedId:"react-web-core/chat/other-chat-functions",id:"react-web-core/chat/other-chat-functions",title:"Other chat functions",description:"Other functionality associated with chat.",source:"@site/docs/archive/react-web-core/chat/other-chat-functions.mdx",sourceDirName:"react-web-core/chat",slug:"/react-web-core/chat/other-chat-functions",permalink:"/archive/react-web-core/chat/other-chat-functions",draft:!1,tags:[{label:"web-core",permalink:"/archive/tags/web-core"},{label:"chat",permalink:"/archive/tags/chat"}],version:"current",lastUpdatedAt:1693223168,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 28\uc77c",sidebarPosition:5,frontMatter:{title:"Other chat functions",description:"Other functionality associated with chat.",sidebar_position:5,tags:["web-core","chat"]},sidebar:"tutorialSidebar",previous:{title:"Editing Chat Messages",permalink:"/archive/react-web-core/chat/edit-chat-messages"},next:{title:"Introduction",permalink:"/archive/react-web-core/polls/introduction"}},p={},u=[{value:"Get messages by a user",id:"get-messages-by-a-user",level:2},{value:"Get messages of a particular type",id:"get-messages-of-a-particular-type",level:2},{value:"Pinning a chat message",id:"pinning-a-chat-message",level:2},{value:"Deleting a chat message",id:"deleting-a-chat-message",level:2}],g={toc:u};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"other-chat-functions"},"Other chat functions"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.chat")," object exposes certain other methods for convenience when\nworking with chat."),(0,a.kt)("h2",{id:"get-messages-by-a-user"},"Get messages by a user"),(0,a.kt)("p",null,"You can get messages by a particular user by passing the user's ID to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.chat.getMessagesByUser()")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Find the userId of the user with name \"Freddie\".\nconst { userId } = meeting.participants.joined\n  .toArray()\n  .find((p) => p.name === 'Freddie');\n\nconst messages = meeting.chat.getMessagesByUser(userId);\n")),(0,a.kt)("h2",{id:"get-messages-of-a-particular-type"},"Get messages of a particular type"),(0,a.kt)("p",null,"You can also get messages of a particular type using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.chat.getMessagesByType()")," method. For example, you can get all image\nmessages present in the chat using the following snippet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const imageMessages = meeting.chat.getMessagesByType('image');\n")),(0,a.kt)("h2",{id:"pinning-a-chat-message"},"Pinning a chat message"),(0,a.kt)("p",null,"You can ",(0,a.kt)("inlineCode",{parentName:"p"},"pin")," a number of messages to the chat. When you pin a message, the\nmessage object will have the attribute ",(0,a.kt)("inlineCode",{parentName:"p"},"pinned: true"),", using which you can\nidentify if a message is pinned."),(0,a.kt)("p",null,"To pin a message, run the following snippet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Let's say we want to pin the first message in the chat (could be a text, image, or file).\nconst { id } = meeting.chat.messages[0];\n\nawait meeting.chat.pin(id);\n")),(0,a.kt)("p",null,"Once you pin a message, it will be added to ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.chat.pinned"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const { id } = meeting.chat.messages[0];\n\nawait meeting.chat.pin(id);\n\nconsole.log(meeting.chat.pinned);\nconsole.log(meeting.chat.pinned.length > 0); // Should be true\n")),(0,a.kt)("p",null,"You can also unpin a pinned message, by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.chat.unpin()")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Unpin the first pinned message.\n\nconst { id } = meeting.chat.pinned[0];\nawait meeting.chat.unpin(id);\n")),(0,a.kt)("p",null,"You can listen for events to know when a message is pinned or unpinned."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.chat.on('pinMessage', ({ message }) => {\n  console.log('A message was pinned', JSON.stringify(message));\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.chat.on('unpinMessage', ({ message }) => {\n  console.log('A message was unpinned', JSON.stringify(message));\n});\n")),(0,a.kt)("h2",{id:"deleting-a-chat-message"},"Deleting a chat message"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.chat")," namespace exposes a method called ",(0,a.kt)("inlineCode",{parentName:"p"},"deleteMessage()"),". It takes\na parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"meesageId")," of type ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const messageId = '...';\nawait meeting.chat.deleteMessage(messageId);\n")))}m.isMDXComponent=!0}}]);