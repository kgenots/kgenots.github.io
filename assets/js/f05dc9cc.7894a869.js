"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[66215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"Quickstart",description:"Quickstart guide for android mobile core.",sidebar_position:1,tags:["flutter-core","quickstart"],slug:"/"},s="Flutter Core SDK Quickstart",p={unversionedId:"quickstart",id:"quickstart",title:"Quickstart",description:"Quickstart guide for android mobile core.",source:"@site/docs/flutter-core/quickstart.mdx",sourceDirName:".",slug:"/",permalink:"/flutter-core/",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/flutter-core/quickstart.mdx",tags:[{label:"flutter-core",permalink:"/flutter-core/tags/flutter-core"},{label:"quickstart",permalink:"/flutter-core/tags/quickstart"}],version:"current",lastUpdatedAt:1692164292,formattedLastUpdatedAt:"2023\ub144 8\uc6d4 16\uc77c",sidebarPosition:1,frontMatter:{title:"Quickstart",description:"Quickstart guide for android mobile core.",sidebar_position:1,tags:["flutter-core","quickstart"],slug:"/"},sidebar:"tutorialSidebar",next:{title:"Introduction",permalink:"/flutter-core/local-user/introduction"}},d={},u=[{value:"Objective",id:"objective",level:2},{value:"Before Getting Started",id:"before-getting-started",level:2},{value:"Step 1: Install the SDK",id:"step-1-install-the-sdk",level:2},{value:"For Android",id:"for-android",level:3},{value:"For iOS",id:"for-ios",level:3},{value:"Step 2: Initialize the SDK",id:"step-2-initialize-the-sdk",level:2},{value:"Step 3: Set the meeting properties",id:"step-3-set-the-meeting-properties",level:2},{value:"Step 4: Initialize the connection request",id:"step-4-initialize-the-connection-request",level:2},{value:"Step 5: Connect to the meeting",id:"step-5-connect-to-the-meeting",level:2},{value:"Join the room",id:"join-the-room",level:3},{value:"Leave the room",id:"leave-the-room",level:3},{value:"Release Builds",id:"release-builds",level:2},{value:"For Android release builds",id:"for-android-release-builds",level:3},{value:"For iOS release builds",id:"for-ios-release-builds",level:3}],c={toc:u};function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flutter-core-sdk-quickstart"},"Flutter Core SDK Quickstart"),(0,r.kt)("p",null,"This quickstart shows how to use Dyte's Flutter Core SDK to add live video and\naudio call to your Flutter applications."),(0,r.kt)("p",null,"For getting started quickly, you can use our sample code. You can clone and run\na sample application from the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dyte-io/mobile-samples/tree/main/flutter_core"},"Flutter Core SDK GitHub repository"),"."),(0,r.kt)("h2",{id:"objective"},"Objective"),(0,r.kt)("p",null,"You\u2019ll learn how to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install the Dyte SDK"),(0,r.kt)("li",{parentName:"ul"},"Initialize the SDK"),(0,r.kt)("li",{parentName:"ul"},"Configure a Dyte meeting"),(0,r.kt)("li",{parentName:"ul"},"Initialize the Dyte meeting"),(0,r.kt)("li",{parentName:"ul"},"And go live with your Dyte meeting")),(0,r.kt)("h2",{id:"before-getting-started"},"Before Getting Started"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure you've read the\n",(0,r.kt)("a",{parentName:"li",href:"https://kgenots.com/getting-started"},"Getting Started with Dyte")," topic and\ncompleted the steps in the\n",(0,r.kt)("a",{parentName:"li",href:"https://kgenots.com/getting-started#integrate-dyte"},"Integrate Dyte")," section.\nYou must complete the following steps:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("a",{parentName:"li",href:"https://dev.dyte.io/"},"Dyte Developer Account")),(0,r.kt)("li",{parentName:"ul"},"Create ",(0,r.kt)("a",{parentName:"li",href:"https://dev.dyte.io/roles-presets"},"Presets")),(0,r.kt)("li",{parentName:"ul"},"Create a\n",(0,r.kt)("a",{parentName:"li",href:"https://kgenots.com/api/?v=v2#/operations/create_meeting"},"Dyte Meeting")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kgenots.com/api/?v=v2#/operations/add_participant"},"Add Participant"),"\nto the meeting"))),(0,r.kt)("li",{parentName:"ul"},"Install Flutter on your device"),(0,r.kt)("li",{parentName:"ul"},"(For iOS apps) Install\n",(0,r.kt)("a",{parentName:"li",href:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwin55bqodH8AhUVQXwKHaR-DAsQFnoECA0QAQ&url=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2Fxcode%2Fid497799835%3Fmt%3D12&usg=AOvVaw2fEvMbfRtGhB4SPHYB54NX"},"Xcode")),(0,r.kt)("li",{parentName:"ul"},"Ensure that Rosetta is installed with Xcode on Mac computers with Apple\nsilicon."),(0,r.kt)("li",{parentName:"ul"},"Make sure your Mac computers are running macOS version 12.0 Monterey or\nhigher."),(0,r.kt)("li",{parentName:"ul"},"(For Android apps) Install\n",(0,r.kt)("a",{parentName:"li",href:"https://developer.android.com/studio"},"Android Studio"),", or install the Android\nSDK for Command-Line Interface (CLI) only.")),(0,r.kt)("h2",{id:"step-1-install-the-sdk"},"Step 1: Install the SDK"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To install the SDK, add the Dyte Core Flutter SDK dependency into the\n",(0,r.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"flutter pub add dyte_core\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then import the following package into your project:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dyte_core/dyte_core.dart';\n")))),(0,r.kt)("p",null,"After importing the package, perform the following steps for Android and iOS."),(0,r.kt)("h3",{id:"for-android"},"For Android"),(0,r.kt)("p",null,"Add the following permissions to the AndroidManifest.xml file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},'<uses-permission android:name="android.permission.RECORD_AUDIO" />\n<uses-permission android:name="android.permission.CAMERA" />\n<uses-permission android:name="android.permission.INTERNET" />\n<uses-permission android:name="android.permission.BLUETOOTH" />\n<uses-permission android:name="android.permission.WAKE_LOCK" />\n<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />\n<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />\n')),(0,r.kt)("h3",{id:"for-ios"},"For iOS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set your platform to iOS 13.0 or above in your Podfile.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"platform :ios, '13.0'\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Add the following entries to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Info.plist")," file. This gives permission to\nyour app to access the camera and microphone, access photos, install the\nrequired fonts and icons.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"<key>NSBluetoothPeripheralUsageDescription</key>\n<string>We will use your Bluetooth to access your Bluetooth headphones.</string>\n<key>NSBluetoothAlwaysUsageDescription</key>\n<string>We will use your Bluetooth to access your Bluetooth headphones.</string>\n<key>NSCameraUsageDescription</key>\n<string>For people to see you during meetings, we need access to your camera.</string>\n<key>NSMicrophoneUsageDescription</key>\n<string>For people to hear you during meetings, we need access to your microphone.</string>\n<key>NSPhotoLibraryUsageDescription</key>\n<string>For people to share, we need access to your photos.</string>\n")),(0,r.kt)("admonition",{title:"Note",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you intend to publish your app to the Google Play or App Store, you'll need\nto perform a few additional steps. So if you\u2019re working on release builds and\nnot debug builds, refer to the ",(0,r.kt)("a",{parentName:"p",href:"#release-builds"},"Release Builds")," section.")),(0,r.kt)("h2",{id:"step-2-initialize-the-sdk"},"Step 2: Initialize the SDK"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteMobileClient")," is the main class of the SDK. It is the entry point and\nthe only class required to initialize Dyte SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final dyteClient = DyteMobileClient();\n")),(0,r.kt)("h2",{id:"step-3-set-the-meeting-properties"},"Step 3: Set the meeting properties"),(0,r.kt)("p",null,"Set the properties in the ",(0,r.kt)("inlineCode",{parentName:"p"},"DyteMeetingInfo")," class. You just need to provide the\nparticipant's ",(0,r.kt)("inlineCode",{parentName:"p"},"authToken"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"authToken")),(0,r.kt)("td",{parentName:"tr",align:null},"After you've created the meeting, ",(0,r.kt)("br",null)," add each participant to the meeting ",(0,r.kt)("br",null)," using the ",(0,r.kt)("a",{parentName:"td",href:"https://kgenots.com/api?v=v2#/operations/add_participant"},"Add Participant API"),(0,r.kt)("br",null)," (The presetName created earlier ",(0,r.kt)("br",null)," must be passed in the body ",(0,r.kt)("br",null)," of the Add Participant API request) ",(0,r.kt)("br",null)," The API response contains the ",(0,r.kt)("inlineCode",{parentName:"td"},"authToken"),".")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final meetingInfo = DyteMeetingInfoV2(\n                    authToken: '<auth_token>',\n                  );\n")),(0,r.kt)("h2",{id:"step-4-initialize-the-connection-request"},"Step 4: Initialize the connection request"),(0,r.kt)("p",null,"To initialize the connection request, call the ",(0,r.kt)("inlineCode",{parentName:"p"},"init()")," method obtained on\n",(0,r.kt)("inlineCode",{parentName:"p"},"dyteClient")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"meetingInfo")," argument. This will establish the connection\nwith the Dyte meeting server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"dyteClient.init(meetingInfo);\n")),(0,r.kt)("p",null,"By registering state observers, you receive callbacks for this action on the\nmeeting object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"\nclass RoomStateNotifier implements DyteMeetingRoomEventsListener {\n\n  ...\n\n  @override\n  void onMeetingInitStarted() {\n    /// on meeting init started\n  }\n\n  override\n  void onMeetingInitCompleted() {\n    /// on meeting init completed\n  }\n\n  @override\n  void onMeetingInitFailed(Exception exception) {\n    /// on meeting init failed\n  }\n\n  ...\n}\n\n")),(0,r.kt)("h2",{id:"step-5-connect-to-the-meeting"},"Step 5: Connect to the meeting"),(0,r.kt)("p",null,"Now, you have established the connection with the Dyte meeting server\nsuccessfully. Next step is to join the room."),(0,r.kt)("h3",{id:"join-the-room"},"Join the room"),(0,r.kt)("p",null,"To join the meeting room, call ",(0,r.kt)("inlineCode",{parentName:"p"},"joinRoom()")," method on the ",(0,r.kt)("inlineCode",{parentName:"p"},"dyteClient")," instance\nas shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"dyteClient.joinRoom();\n")),(0,r.kt)("p",null,"By registering state observers, you receive callbacks for join related actions on the\nmeeting object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"class RoomStateNotifier implements DyteMeetingRoomEventsListener {\n\n  ...\n\n  @override\n  void onMeetingRoomJoinStarted() {\n    /// Handle join start state\n  }\n\n  @override\n  void onMeetingRoomJoined () {\n    /// Handle joining completion, ex: move to room screen\n  }\n\n  @override\n  void onMeetingRoomJoinFailed(exception){\n    /// Handle failure\n  }\n\n  ...\n}\n")),(0,r.kt)("h3",{id:"leave-the-room"},"Leave the room"),(0,r.kt)("p",null,"Once the meeting is over, you can leave the meeting room."),(0,r.kt)("p",null,"To leave the meeting room, call ",(0,r.kt)("inlineCode",{parentName:"p"},"leaveRoom()")," method on the ",(0,r.kt)("inlineCode",{parentName:"p"},"dyteClient")," as\nshown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"dyteClient.leaveRoom();\n")),(0,r.kt)("p",null,"By registering state observers, you receive callbacks for this action on the\nmeeting object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"class RoomStateNotifier implements DyteMeetingRoomEventsListener {\n\n  ...\n\n  @override\n  void onMeetingRoomLeaveStarted() {\n    /// on meeting room leave started\n  }\n\n  @override\n  void onMeetingRoomLeaveCompleted() {\n    /// on meeting room left\n  }\n\n  ...\n\n}\n")),(0,r.kt)("h2",{id:"release-builds"},"Release Builds"),(0,r.kt)("p",null,"If you intend to publish your app to the Google Play or App Store, perform the\nfollowing steps after installing the SDKs. So if you\u2019re working on release\nbuilds and not debug builds, do the following:"),(0,r.kt)("h3",{id:"for-android-release-builds"},"For Android release builds"),(0,r.kt)("p",null,"Perform the following steps, for Android release builds:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create ",(0,r.kt)("inlineCode",{parentName:"li"},"/android/app/proguard-rules.pro")," file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"# Keep `Companion` object fields of serializable classes.\n# This avoids serializer lookup through `getDeclaredClasses` as done for named companion objects.\n-if @kotlinx.serialization.Serializable class **\n-keepclassmembers class <1> {\n   static <1>$Companion Companion;\n}\n\n# Keep `serializer()` on companion objects (both default and named) of serializable classes.\n-if @kotlinx.serialization.Serializable class ** {\n   static **$* *;\n}\n-keepclassmembers class <2>$<3> {\n   kotlinx.serialization.KSerializer serializer(...);\n}\n\n# keep webrtc classes\n-keep class org.webrtc.** { *; }\n-dontwarn org.chromium.build.BuildHooksAndroid\n\n# keep ktor classes\n-keep class io.ktor.** { *; }\n\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Add the following to your ",(0,r.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle")," to import the proguard\nconfiguration.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"buildTypes {\n        release {\n            ...\n            ...\n            ...\n            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'\n        }\n    }\n")),(0,r.kt)("h3",{id:"for-ios-release-builds"},"For iOS release builds"),(0,r.kt)("p",null,"Disable ",(0,r.kt)("inlineCode",{parentName:"p"},"BITCODE")," in your Podfile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"post_install do |installer|\n   installer.pods_project.targets.each do |target|\n       target.build_configurations.each do |config|\n           config.build_settings['ENABLE_BITCODE'] = 'NO'\n       end\n   end\nend\n")))}m.isMDXComponent=!0}}]);