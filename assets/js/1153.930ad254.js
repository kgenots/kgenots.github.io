"use strict";(self.webpackChunkgithub_web=self.webpackChunkgithub_web||[]).push([[1153,3534],{83534:(t,e,i)=>{i.r(e),i.d(e,{dyte_sidebar:()=>c});var s=i(44709),a=i(48152),n=i(12844),o=i(53459),r=i(45177),l=i(82248),d=i(30656);i(40548),i(92337),i(89050);const c=class{constructor(t){(0,s.r)(this,t),this.stateUpdate=(0,s.c)(this,"dyteStateUpdate",7),this.getTabs=()=>this.meeting.self.config?this.enabledSections.filter((t=>this.meeting.self.config.controlBar.elements[t.id])):this.enabledSections,this.close=()=>{this.stateUpdate.emit({activeSidebar:!1,sidebar:this.defaultSection}),r.s.sidebar=this.currentTab,r.s.activeSidebar=!1},this.toggleFloating=()=>{this.isFloating=!this.isFloating,r.s.sidebarFloating=this.isFloating},this.enabledSections=[],this.defaultSection="chat",this.meeting=void 0,this.states=void 0,this.config=o.d,this.iconPack=a.d,this.t=(0,n.u)(),this.size=void 0,this.view="sidebar",this.currentTab=this.defaultSection,this.isFloating=!1,this.enablePinning=!0}connectedCallback(){this.viewChanged(this.view),this.statesChanged(this.states),this.meetingChanged(this.meeting),this.isFloating=(null===r.s||void 0===r.s?void 0:r.s.sidebarFloating)||!1}disconnectedCallback(){var t,e;document.removeEventListener("keydown",this.keydownListener),null===(e=null===(t=this.meeting)||void 0===t?void 0:t.stage)||void 0===e||e.removeListener("stageStatusUpdate",this.onStageStatusUpdate),this.onStageStatusUpdate=null}meetingChanged(t){var e,i;this.updateEnabledSections(t),this.onStageStatusUpdate=t=>{this.updateEnabledSections(this.meeting)},null===(i=null===(e=this.meeting)||void 0===e?void 0:e.stage)||void 0===i||i.on("stageStatusUpdate",this.onStageStatusUpdate)}statesChanged(t){const e=t||r.s;(null==e?void 0:e.sidebar)&&(this.currentTab=e.sidebar)}viewChanged(t){"full-screen"===t?(this.enablePinning=!1,this.keydownListener=t=>{"Escape"===t.key&&this.close()},document.addEventListener("keydown",this.keydownListener)):this.enablePinning=!0}viewSection(t){this.currentTab=t,this.stateUpdate.emit({activeSidebar:!0,sidebar:this.currentTab}),r.s.activeSidebar=!0,r.s.sidebar=this.currentTab}updateEnabledSections(t=this.meeting){const e=[];(0,l.c)(t)&&e.push({id:"chat",name:this.t("chat")}),(0,l.d)(t)&&e.push({id:"polls",name:this.t("polls")}),(0,l.a)(t)&&e.push({id:"participants",name:this.t("participants")}),(0,l.b)(t)&&e.push({id:"plugins",name:this.t("plugins")}),this.enabledSections=e}render(){var t;const e={meeting:this.meeting,config:this.config,states:this.states||r.s,size:this.size,t:this.t,iconPack:this.iconPack};return!1!==(null===(t=e.states)||void 0===t?void 0:t.activeSidebar)&&this.currentTab?(0,s.h)(s.H,{class:this.enablePinning?this.isFloating?"floating":"":"floating"},(0,s.h)("dyte-sidebar-ui",{tabs:this.getTabs(),currentTab:this.currentTab,view:this.view,onTabChange:t=>{this.viewSection(t.detail)},onSidebarClose:this.close},this.enablePinning&&(0,s.h)("div",{class:"pinned-state",slot:"pinned-state"},(0,s.h)("dyte-button",{variant:"ghost",kind:"icon",onClick:this.toggleFloating,"aria-label":this.isFloating?this.t("pin"):this.t("unpin")},(0,s.h)("dyte-icon",{icon:this.isFloating?this.iconPack.pin:this.iconPack.pin_off}))),"chat"===e.states.sidebar&&(0,s.h)(d.R,{element:"dyte-chat",defaults:e,props:{slot:"chat"}}),"polls"===e.states.sidebar&&(0,s.h)(d.R,{element:"dyte-polls",defaults:e,props:{slot:"polls"}}),"participants"===e.states.sidebar&&(0,s.h)(d.R,{element:"dyte-participants",defaults:e,props:{slot:"participants"}}),"plugins"===e.states.sidebar&&(0,s.h)(d.R,{element:"dyte-plugins",defaults:e,props:{slot:"plugins"}}))):null}static get watchers(){return{meeting:["meetingChanged"],states:["statesChanged"],view:["viewChanged"]}}};c.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{height:100%;width:100%;max-width:var(--dyte-space-80, 320px);box-sizing:border-box;display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));border-width:var(--dyte-border-width-sm, 1px);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-border-opacity))}:host([view='sidebar']){right:var(--dyte-space-2, 8px);overflow:clip;border-radius:var(--dyte-border-radius-lg, 12px);--tw-shadow:0 25px 50px -12px rgb(0 0 0 / 0.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);--tw-shadow-color:rgb(var(--dyte-colors-background-900, 26 26 26));--tw-shadow:var(--tw-shadow-colored)}:host([view='full-screen']){top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);max-width:100%}:host(.floating){position:absolute !important;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);left:auto;z-index:50}.pinned-state{position:absolute;right:var(--dyte-space-1, 4px);display:inline-flex;width:var(--dyte-space-2, 8px);justify-content:flex-end}"},82248:(t,e,i)=>{i.d(e,{a:()=>r,b:()=>l,c:()=>n,d:()=>o});var s=i(92337),a=i(89050);const n=t=>{if(t&&!t.chat)return!1;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.chat)return!1;const{chatPublic:i,chatPrivate:s}=t.self.permissions;return i.canSend||i.text||i.files||s.canSend||s.canReceive||s.files||s.text},o=t=>{if(t&&!t.polls)return!1;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.polls)return!1;const{polls:i}=t.self.permissions;return i.canCreate||i.canView||i.canVote},r=t=>{var e,i,n,o;if((null===(e=null==t?void 0:t.__internals__)||void 0===e?void 0:e.features.hasFeature(a.F.FEAT_PARTICIPANT_LIST))&&!(null===(i=t.self.permissions)||void 0===i?void 0:i.showParticipantList))return!1;if((0,s.s)(t)&&!(null===(n=t.self.permissions)||void 0===n?void 0:n.acceptStageRequests))return!1;if(t&&!t.participants)return!1;if("LIVESTREAM"===t.meta.viewType)return t.self.permissions.acceptStageRequests||"ON_STAGE"===(null===(o=null==t?void 0:t.stage)||void 0===o?void 0:o.status);const r=null==t?void 0:t.self.config;return!(r&&!r.controlBar.elements.participants)},l=t=>{if((0,s.a)(t))return!1;if(t&&!t.plugins)return!1;if("LIVESTREAM"===t.meta.viewType)return"ON_STAGE"===t.stage.status;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.plugins)return!1;const{plugins:i}=t.self.permissions;return i.canClose||i.canStart}}}]);