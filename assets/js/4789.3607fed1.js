"use strict";(self.webpackChunkkgenots=self.webpackChunkkgenots||[]).push([[4789,9319],{9319:(e,t,i)=>{i.r(t),i.d(t,{dyte_meeting:()=>m});var s=i(7176),n=i(7492),o=i(9245),a=i(6677),d=i(1783),r=i(7341),c=(i(8410),i(5114)),h=i(9126),g=i(5599),l=i(8724);i(4166),i(9079),i(2732),i(2079),i(804);const m=class{constructor(e){(0,s.r)(this,e),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.roomJoinedListener=()=>{this.setStates({meeting:"joined"}),h.s.meeting="joined"},this.socketServiceRoomJoinedListener=()=>{"ON_STAGE"!==this.meeting.stage.status&&void 0!==this.meeting.stage.status&&(this.setStates({meeting:"joined"}),h.s.meeting="joined")},this.waitlistedListener=()=>{this.setStates({meeting:"waiting"}),h.s.meeting="waiting"},this.roomLeftListener=({state:e})=>{const t=this.states||h.s;if("disconnected"===(null==t?void 0:t.roomLeftState))return this.setStates({meeting:"ended",roomLeftState:e}),void(h.s.meeting="ended");this.setStates({meeting:"ended",roomLeftState:e}),h.s.meeting="ended",h.s.roomLeftState=e},this.mediaPermissionUpdateListener=({kind:e,message:t})=>{if(["audio","video"].includes(e)){if("ACCEPTED"===t||h.s.activeDebugger)return;const i={enabled:!0,kind:e};this.setStates({activePermissionsMessage:i}),h.s.activePermissionsMessage=i}},this.joinStateAcceptedListener=()=>{this.setStates({activeJoinStage:!0}),this.stateUpdate.emit({activeJoinStage:!0}),h.s.activeJoinStage=!0},this.loadConfigFromPreset=!0,this.applyDesignSystem=!0,this.mode="fixed",this.leaveOnUnmount=!1,this.meeting=void 0,this.showSetupScreen=void 0,this.t=(0,a.u)(),this.config=d.d,this.iconPackUrl=void 0,this.size=void 0,this.gridLayout="row",this.states={meeting:"idle",prefs:(0,c.g)()},this.newMeeting=void 0,this.iconPack=l.d}connectedCallback(){var e;this.resizeObserver=new g.i((()=>this.handleResize())),this.resizeObserver.observe(this.host),this.applyDesignSystem&&null!=(null===(e=this.config)||void 0===e?void 0:e.designTokens)&&"undefined"!=typeof document&&(0,n.p)(document.documentElement,this.config.designTokens),this.meetingChanged(this.meeting),this.iconPackUrlChanged(this.iconPackUrl)}clearListeners(e){null!=e&&(e.self.removeListener("roomJoined",this.roomJoinedListener),e.self.removeListener("socketServiceRoomJoined",this.roomJoinedListener),e.meta.removeListener("socketReconnected",this.roomJoinedListener),e.self.removeListener("roomLeft",this.roomLeftListener),e.self.removeListener("mediaPermissionUpdate",this.mediaPermissionUpdateListener),e.self.removeListener("waitlisted",this.waitlistedListener),e.self.removeListener("joinStageRequestAccepted",this.joinStateAcceptedListener))}disconnectedCallback(){var e;this.leaveOnUnmount&&(null===(e=this.meeting)||void 0===e||e.leaveRoom()),this.resizeObserver.disconnect(),this.clearListeners(this.meeting)}meetingChanged(e){var t,i;if(null!=e){if(this.setStates({viewType:e.meta.viewType}),this.loadConfigFromPreset&&null!=e.self.config){const i=e.self.config,{config:s,data:o}=(0,n.g)(i,e);this.config===d.d&&(this.config=s),null==this.showSetupScreen&&(this.showSetupScreen=o.showSetupScreen),e.connectedMeetings.supportsConnectedMeetings&&(null===(t=h.s.activeBreakoutRoomsManager)||void 0===t?void 0:t.destinationMeetingId)&&(this.showSetupScreen=!1)}this.applyDesignSystem&&null!=(null===(i=this.config)||void 0===i?void 0:i.designTokens)&&"undefined"!=typeof document&&(0,n.p)(document.documentElement,this.config.designTokens),"LIVESTREAM"===e.meta.viewType&&e.self.addListener("socketServiceRoomJoined",this.socketServiceRoomJoinedListener),e.self.addListener("roomJoined",this.roomJoinedListener),e.self.addListener("waitlisted",this.waitlistedListener),e.self.addListener("roomLeft",this.roomLeftListener),e.self.addListener("mediaPermissionUpdate",this.mediaPermissionUpdateListener),e.self.addListener("joinStageRequestAccepted",this.joinStateAcceptedListener),e.connectedMeetings.supportsConnectedMeetings&&e.connectedMeetings.once("changingMeeting",this.handleChangingMeeting),e.self.roomJoined?(this.states=Object.assign(Object.assign({},this.states),{meeting:"joined"}),h.s.meeting="joined"):this.showSetupScreen&&null==this.newMeeting?(this.states=Object.assign(Object.assign({},this.states),{meeting:"setup"}),h.s.meeting="setup"):e.joinRoom()}}async iconPackUrlChanged(e){this.iconPack=await(0,o.g)(e)}listenState(e){e.stopPropagation(),this.setStates(e.detail)}handleChangingMeeting(e){h.s.activeBreakoutRoomsManager=Object.assign(Object.assign({},h.s.activeBreakoutRoomsManager),{destinationMeetingId:e})}handleResize(){this.size=(0,o.a)(this.host.clientWidth)}setStates(e){const t=Object.assign({},this.states);(0,n.m)(t,e),this.states=t}render(){var e,t,i;const n={meeting:null!==(e=this.newMeeting)&&void 0!==e?e:this.meeting,size:this.size,states:this.states||h.s,config:this.config,iconPack:this.iconPack,t:this.t},o={"dyte-grid":{layout:this.gridLayout}};return"CHAT"===(null===(i=null===(t=this.meeting)||void 0===t?void 0:t.meta)||void 0===i?void 0:i.viewType)?(0,s.h)(r.R,{element:"dyte-chat",defaults:n}):(0,s.h)(r.R,{element:"dyte-meeting",defaults:n,asHost:!0,elementProps:o})}get host(){return(0,s.g)(this)}static get watchers(){return{meeting:["meetingChanged"],iconPackUrl:["iconPackUrlChanged"]}}};m.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{box-sizing:border-box;display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88));overflow:hidden;position:fixed;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);height:100%;width:100%}:host([mode='fill']){position:relative}"},9245:(e,t,i)=>{i.d(t,{a:()=>d,g:()=>n});var s=i(8724);const n=async e=>{if(null==e)return s.d;try{const t=await fetch(e);return t.ok?Object.assign({},s.d,await t.json()):s.d}catch(t){return s.d}},o=768,a=1080,d=e=>e>=a?"lg":e>=o?"md":"sm"}}]);