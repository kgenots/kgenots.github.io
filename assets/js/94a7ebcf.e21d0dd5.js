"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[62224],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,b=d["".concat(u,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(b,a(a({ref:t},l),{},{components:r})):n.createElement(b,a({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91263:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={title:"Verify Webhooks Using Dyte's Signature and Webhook ID",sidebar_position:4},u=void 0,c={unversionedId:"projects/webhooks/signatures",id:"projects/webhooks/signatures",title:"Verify Webhooks Using Dyte's Signature and Webhook ID",description:"You can verify webhooks using Dyte's signature and webhook IDs.",source:"@site/docs/develop/projects/webhooks/signatures.mdx",sourceDirName:"projects/webhooks",slug:"/projects/webhooks/signatures",permalink:"/develop/projects/webhooks/signatures",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/develop/projects/webhooks/signatures.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Verify Webhooks Using Dyte's Signature and Webhook ID",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Webhook Events List",permalink:"/develop/projects/webhooks/webhook-events"},next:{title:"Introduction to Dyte\u2019s Breakout Rooms",permalink:"/develop/projects/breakoutroom/introduction-breakout-rooms"}},l={},p=[{value:"Verify using Dyte&#39;s signature",id:"verify-using-dytes-signature",level:2},{value:"Obtain our public key",id:"obtain-our-public-key",level:3},{value:"Check for the signature header",id:"check-for-the-signature-header",level:3},{value:"Verify the signature",id:"verify-the-signature",level:3},{value:"Sample code",id:"sample-code",level:3},{value:"Verify using webhook IDs",id:"verify-using-webhook-ids",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},h=d("Tabs"),b=d("TabItem"),y={toc:p};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},y,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can verify webhooks using Dyte's signature and webhook IDs."),(0,n.kt)("h2",{id:"verify-using-dytes-signature"},"Verify using Dyte's signature"),(0,n.kt)("p",null,"Dyte verifies the webhook events it sends to your endpoints by including a\nsignature in the dyte-signature header of each event. This allows you to confirm\nthat the event came from Dyte and not a malicious server impersonating Dyte."),(0,n.kt)("p",null,"Perform the following steps to verify signatures."),(0,n.kt)("h3",{id:"obtain-our-public-key"},"Obtain our public key"),(0,n.kt)("p",null,"Our public key is available at\n",(0,n.kt)("inlineCode",{parentName:"p"},"https://api.dyte.io/.well-known/webhooks.json"),". You can obtain it by\nmaking a GET request to this endpoint."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl -X GET "https://api.dyte.io/.well-known/webhooks.json"\n')),(0,n.kt)("h3",{id:"check-for-the-signature-header"},"Check for the signature header"),(0,n.kt)("p",null,"Every incoming request will have a custom ",(0,n.kt)("inlineCode",{parentName:"p"},"dyte-signature")," header. This is the\nvalue that you should verify in the next step."),(0,n.kt)("h3",{id:"verify-the-signature"},"Verify the signature"),(0,n.kt)("p",null,"The signature is based on the ",(0,n.kt)("inlineCode",{parentName:"p"},"RSA-SHA256")," digest of the request payload. You\ncan calculate this on your end and compare it against the one supplied in the\nheader. If the two values are equal, you can safely consider that this request\nindeed originated from Dyte."),(0,n.kt)("h3",{id:"sample-code"},"Sample code"),(0,n.kt)(h,{mdxType:"Tabs"},(0,n.kt)(b,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const crypto = require('crypto');\n\napp.post('/webhook', express.json({ type: 'application/json' }), (req, res) => {\n  const signature = req.headers['dyte-signature'];\n  const payload = req.body;\n\n  const isVerified = crypto.verify(\n    'RSA-SHA256',\n    Buffer.from(JSON.stringify(payload)),\n    dytePublicKey,\n    Buffer.from(signature, 'base64')\n  );\n  // ... do further processing\n});\n")))),(0,n.kt)("h2",{id:"verify-using-webhook-ids"},"Verify using webhook IDs"),(0,n.kt)("p",null,"Webhook IDs are used to uniquely identify a specific webhook endpoint or events. When a webhook is created in a system, the system assigns it a unique ID that can be used to manage and track the webhook's activity. This ID is usually a string of characters or a number that is specific to the webhook and cannot be duplicated."),(0,n.kt)("img",{src:"/static/webhook/webhook_id.png",width:"600",height:"300",alt:"webhook-id",className:"webhook-id-use"}),(0,n.kt)("p",null,"Webhook IDs are commonly utilized for the following purposes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Manage the events"),": When a webhook is subscribed to a specific event or resource, the webhook ID is used to manage the subscription.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Enhanced security"),": Typically a signature is added to the request header of the webhook. To further add a security check, Dyte adds a webhook ID to the header. As mentioned earlier, this ID is unique to each webhook subscription and can be used to verify that the request corresponds to the correct subscription.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Error handling"),": If there is an issue with a webhook request, such as a failed delivery or invalid payload, the webhook ID can be used to identify which specific webhook endpoint caused the error. This can be useful for troubleshooting and resolving issues with webhook integrations."))))}f.isMDXComponent=!0}}]);