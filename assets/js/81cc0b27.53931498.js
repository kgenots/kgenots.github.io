"use strict";(self.webpackChunkkgenots=self.webpackChunkkgenots||[]).push([[1597],{8651:(e,t,n)=>{n.d(t,{ZP:()=>p});n(67294);var o=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={toc:[{value:"Quickstart",id:"quickstart",level:2},{value:"Objective",id:"objective",level:2},{value:"Before Getting Started",id:"before-getting-started",level:2},{value:"Step 1: Install",id:"step-1-install",level:2},{value:"Version",id:"version",level:3},{value:"Step 2: Prepare meeting object",id:"step-2-prepare-meeting-object",level:2},{value:"Step 3: Bring up the UI",id:"step-3-bring-up-the-ui",level:2},{value:"UI Kit",id:"ui-kit",level:3},{value:"Load the <code>DyteComponentsModule</code> into your App Module",id:"load-the-dytecomponentsmodule-into-your-app-module",level:4},{value:"(Optional) Step 3: Allow Synthetic Default Imports",id:"optional-step-3-allow-synthetic-default-imports",level:4},{value:"Add Dyte Meeting to the Template File",id:"add-dyte-meeting-to-the-template-file",level:4},{value:"Pass meeting object to the component",id:"pass-meeting-object-to-the-component",level:4},{value:"Build your own UI",id:"build-your-own-ui",level:3},{value:"Add Dyte Meeting to the Template File",id:"add-dyte-meeting-to-the-template-file-1",level:4},{value:"Pass the meeting object to component",id:"pass-the-meeting-object-to-component",level:4}]};function p(e){var{components:t}=e,n=r(e,["components"]);return(0,o.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){i(e,t,n[t])}))}return e}({},l,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"quickstart"},"Quickstart"),(0,o.kt)("span",{className:"mb-2 block"},"This quickstart shows how to add Dyte's ",n.product," SDK to your"," ",(0,o.kt)("a",{href:"https://angular.io/"},"Angular")," applications"),(0,o.kt)("span",{className:"mb-2 block"},"Further down this guide we also explain how Dyte's UI component library can help to build your UI faster with components specially made for"," ",n.product," applications."),(0,o.kt)("p",null,"You can also checkout our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dyte-io/angular-samples#samples"},"sample code")," for Angular. You can clone\nand run a sample application from the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dyte-io/angular-samples"},"Angular Samples GitHub repository"),"."),(0,o.kt)("h2",{id:"objective"},"Objective"),(0,o.kt)("p",null,"You'll learn how to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install the Dyte client side SDKs"),(0,o.kt)("li",{parentName:"ul"},"Initialize Dyte Client"),(0,o.kt)("li",{parentName:"ul"},"Bringing up a UI"),(0,o.kt)("li",{parentName:"ul"},"Go live!")),(0,o.kt)("h2",{id:"before-getting-started"},"Before Getting Started"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure you've a mechanism to get ",(0,o.kt)("inlineCode",{parentName:"li"},"authToken")," from your server side which you would have received as part of ",(0,o.kt)("a",{parentName:"li",href:"/dev/reactjs/build-live-video-app#step-5-add-participants"},"Add Participant")," call.")),(0,o.kt)("h2",{id:"step-1-install"},"Step 1: Install"),(0,o.kt)("p",null,"We are going to install 2 packages."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@dytesdk/web-core"),": This core package powers video, voice, livestream and chat SDKs. This is a required package."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@dytesdk/ui-kit"),": Contains Dyte UI components which can be used with core to easily build your own UI, including a prebuilt UI component. If you want to build your own UI you can skip installing this package.")),(0,o.kt)("p",null,"You can install the SDKs using CDN, npm, or Yarn."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install @dytesdk/angular-ui-kit @dytesdk/web-core\n")),(0,o.kt)("h3",{id:"version"},"Version"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@dytesdk/web-core"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://badge.fury.io/js/@dytesdk%2Fweb-core"},(0,o.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/@dytesdk%2Fweb-core.svg",alt:"npm version"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"@dytesdk/ui-kit"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://badge.fury.io/js/@dytesdk%2Fui-kit"},(0,o.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/@dytesdk%2Fui-kit.svg",alt:"npm version"})))))),(0,o.kt)("h2",{id:"step-2-prepare-meeting-object"},"Step 2: Prepare meeting object"),(0,o.kt)("p",null,"Here's a series of steps that you need to perform:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fetch the ",(0,o.kt)("inlineCode",{parentName:"li"},"authToken")," from your server side."),(0,o.kt)("li",{parentName:"ol"},"Call the ",(0,o.kt)("inlineCode",{parentName:"li"},"DyteClient.init()")," method from the ",(0,o.kt)("inlineCode",{parentName:"li"},"web-core")," package and pass the ",(0,o.kt)("inlineCode",{parentName:"li"},"authToken"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class AppComponent {\n  title = 'MyProject';\n  dyteMeeting: DyteClient;\n\n  async ngAfterViewInit() {\n    const meeting = await DyteClient.init({\n      authToken: '<auth-token>',\n    });\n    this.dyteMeeting = meeting;\n  }\n}\n")),(0,o.kt)("p",null,"Now, you have established the connection with the Dyte meeting server successfully."),(0,o.kt)("h2",{id:"step-3-bring-up-the-ui"},"Step 3: Bring up the UI"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"meeting")," object serves as the link between web-core and UI Kit, allowing them to communicate with one another. Once the UI Kit has the meeting object, it can join and leave meetings, and so on.\nDyte offers a UI Kit that is highly customizatble and uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"meeting")," instance that you just created."),(0,o.kt)("h3",{id:"ui-kit"},"UI Kit"),(0,o.kt)("p",null,"A single ",(0,o.kt)("inlineCode",{parentName:"p"},"<dyte-meeting />")," component that is feature rich and renders a complete meeting UI and handles all events."),(0,o.kt)("h4",{id:"load-the-dytecomponentsmodule-into-your-app-module"},"Load the ",(0,o.kt)("inlineCode",{parentName:"h4"},"DyteComponentsModule")," into your App Module"),(0,o.kt)("p",null,"This is typically the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.module.ts")," file. This allows you to use Dyte's UI components in your component HTML files. For\nmore information on the components, see\n",(0,o.kt)("a",{parentName:"p",href:"https://angular.io/guide/component-overview"},"Angular components"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3,8}","{3,8}":!0},"import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { DyteComponentsModule } from '@dytesdk/angular-ui-kit';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule, DyteComponentsModule],\n  providers: [],\n  bootstrap: [AppComponent],\n})\nexport class AppModule {}\n")),(0,o.kt)("h4",{id:"optional-step-3-allow-synthetic-default-imports"},"(Optional) Step 3: Allow Synthetic Default Imports"),(0,o.kt)("p",null,"If you are using TypeScript, set ",(0,o.kt)("inlineCode",{parentName:"p"},"allowSyntheticDefaultImports")," as true in your\n",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "allowSyntheticDefaultImports": true\n  }\n}\n')),(0,o.kt)("h4",{id:"add-dyte-meeting-to-the-template-file"},"Add Dyte Meeting to the Template File"),(0,o.kt)("p",null,"Load the Dyte component to your template file (",(0,o.kt)("inlineCode",{parentName:"p"},"component.html"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<dyte-meeting #myid></dyte-meeting>\n")),(0,o.kt)("h4",{id:"pass-meeting-object-to-the-component"},"Pass meeting object to the component"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get a reference to the meeting component using ",(0,o.kt)("inlineCode",{parentName:"li"},"@ViewChild()"),"."),(0,o.kt)("li",{parentName:"ol"},"Pass the meeting object to the UI Kit component.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3,13}","{3,13}":!0},"class AppComponent {\n  title = 'MyProject';\n  @ViewChild('myid') meetingComponent: DyteMeeting;\n  dyteMeeting: DyteClient;\n\n  async ngAfterViewInit() {\n    const meeting = await DyteClient.init({\n      authToken: '<auth-token>',\n    });\n    meeting.joinRoom();\n    this.dyteMeeting = meeting;\n\n    if (this.meetingComponent) this.meetingComponent.meeting = meeting;\n  }\n}\n")),(0,o.kt)("h3",{id:"build-your-own-ui"},"Build your own UI"),(0,o.kt)("h4",{id:"add-dyte-meeting-to-the-template-file-1"},"Add Dyte Meeting to the Template File"),(0,o.kt)("p",null,"Load the Dyte component to your template file (",(0,o.kt)("inlineCode",{parentName:"p"},"component.html"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"{5}","{5}":!0},'<div>\n  <dyte-grid class="dyte-el"></dyte-grid>\n  <div class="controlbar">\n    \x3c!-- Your own components --\x3e\n    <button #mic (click)="onMicToggle">Toggle Mic</button>\n  </div>\n</div>\n')),(0,o.kt)("h4",{id:"pass-the-meeting-object-to-component"},"Pass the meeting object to component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{3,12-15,19-25}","{3,12-15,19-25}":!0},"class AppComponent {\n  title = 'MyProject';\n  dyteMeeting: DyteClient;\n  @ViewChild('mic') micButton: HTMLButton;\n\n  async ngAfterViewInit() {\n    const meeting = await DyteClient.init({\n      authToken: '<auth-token>',\n    });\n\n    meeting.joinRoom();\n    this.dyteMeeting = meeting;\n    const elements = document.getElementsByClassName('dyte-el');\n    for (i = 0; i < elements.length; i++) {\n      elements[i].meeting = meeting;\n    }\n  }\n\n  onMicToggle() {\n    if (this.dyteMeeting.self.audioEnabled) {\n      this.dyteMeeting.self.disableAudio();\n    } else {\n      this.dyteMeeting.self.enableAudio();\n    }\n  }\n}\n")))}p.isMDXComponent=!0},56058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>m});n(67294);var o=n(3905),i=n(8651);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={title:"Angular",sidebar_position:2},s=void 0,u={unversionedId:"reactjs/client-setup/angular",id:"reactjs/client-setup/angular",title:"Angular",description:"",source:"@site/docs/dev/reactjs/client-setup/angular.mdx",sourceDirName:"reactjs/client-setup",slug:"/reactjs/client-setup/angular",permalink:"/dev/reactjs/client-setup/angular",draft:!1,tags:[],version:"current",lastUpdatedAt:1694050895,formattedLastUpdatedAt:"2023\ub144 9\uc6d4 7\uc77c",sidebarPosition:2,frontMatter:{title:"Angular",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/dev/reactjs/client-setup/react"},next:{title:"Javascript",permalink:"/dev/reactjs/client-setup/javascript"}},c={},m=[],d={toc:m};function g(e){var{components:t}=e,n=l(e,["components"]);return(0,o.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.ZP,{product:"Live Video",mdxType:"Quickstart"}))}g.isMDXComponent=!0}}]);