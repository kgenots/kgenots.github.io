"use strict";(self.webpackChunkkgenots=self.webpackChunkkgenots||[]).push([[3762,8229],{6154:(t,e,a)=>{a.r(e),a.d(e,{dyte_join_stage:()=>d,dyte_overlay_modal:()=>l});var i=a(7176),s=a(1783),o=a(8724),r=a(6677),n=a(7341),c=a(9126);a(5114),a(804);const d=class{constructor(t){(0,i.r)(this,t),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.joinStage=(0,i.c)(this,"dyteJoinStage",7),this.leaveStage=(0,i.c)(this,"dyteLeaveStage",7),this.meeting=void 0,this.config=s.d,this.states=void 0,this.size=void 0,this.iconPack=o.d,this.t=(0,r.u)(),this.dataConfig={title:this.t("stage.join_title"),label:{accept:this.t("stage.join_confirm"),reject:this.t("stage.join_cancel")},description:this.t("stage.join_summary")},this.isLoading=!1}render(){var t,e;const a={meeting:this.meeting,size:this.size,states:this.states||c.s,config:this.config,iconPack:this.iconPack,t:this.t};return(0,i.h)(i.H,{class:{stage:!0}},(0,i.h)("header",null,(0,i.h)("h2",null,this.dataConfig.title)),(0,i.h)(n.R,{element:"dyte-participant-setup",defaults:a,props:{participant:null===(t=this.meeting)||void 0===t?void 0:t.self,size:"md"},childProps:{participant:null===(e=this.meeting)||void 0===e?void 0:e.self,size:"md"},deepProps:!0}),(0,i.h)("div",{class:"summary"},this.dataConfig.description),(0,i.h)("div",{class:"container"},(0,i.h)("dyte-button",{variant:"secondary",onClick:()=>this.leaveStage.emit(),title:this.dataConfig.label.reject,iconPack:this.iconPack,t:this.t},this.dataConfig.label.reject),(0,i.h)("dyte-button",{onClick:()=>{this.isLoading||(this.isLoading=!0,this.joinStage.emit())},title:this.dataConfig.label.accept,iconPack:this.iconPack,t:this.t},this.isLoading?(0,i.h)("dyte-icon",{icon:this.iconPack.spinner}):this.dataConfig.label.accept)))}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}.scrollbar{scrollbar-width:thin;scrollbar-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))\n    var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar{height:var(--dyte-space-1\\.5, 6px);width:var(--dyte-space-1\\.5, 6px);border-radius:9999px;background-color:var(--dyte-scrollbar-background, transparent)}.scrollbar::-webkit-scrollbar-thumb{border-radius:9999px;background-color:var(--dyte-scrollbar-color, rgb(var(--dyte-colors-background-600, 60 60 60)))}:host::-webkit-scrollbar{width:var(--dyte-space-1\\.5, 6px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}:host::-webkit-scrollbar-thumb{border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}:host(.stage){box-sizing:border-box;display:block;width:512px;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding:var(--dyte-space-6, 24px);-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:auto;border-radius:var(--dyte-border-radius-md, 8px);line-height:1.25}:host(.stage) dyte-participant-setup{display:flex;flex:1 1 0%;align-items:center;justify-content:space-around;margin-left:auto;margin-right:auto}:host(.stage) .container dyte-button{flex-grow:1;padding:var(--dyte-space-1, 4px);width:50%}:host(.stage) .container dyte-button:nth-child(1){margin-right:var(--dyte-space-1\\.5, 6px)}:host(.stage) .container dyte-button:nth-child(2){margin-left:var(--dyte-space-1\\.5, 6px)}:host(.stage) h2{font-size:24px;font-weight:500;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}:host(.stage) header{padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px)}:host(.stage) .summary{padding:var(--dyte-space-4, 16px)}.deny-access{--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity))}.container{width:100%;max-width:1080px;display:flex;flex:1 1 0%;align-items:center;justify-content:space-around}header{display:flex;align-items:center;justify-content:space-between}";const l=class{constructor(t){(0,i.r)(this,t),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.meeting=void 0,this.states=void 0,this.iconPack=o.d,this.t=(0,r.u)()}connectedCallback(){this.states.activeOverlayModal.timeout&&setTimeout((()=>{this.stateUpdate.emit({activeOverlayModal:{active:!1}}),c.s.activeOverlayModal={active:!1}}),this.states.activeOverlayModal.timeout)}componentDidLoad(){}disconnectedCallback(){}render(){return(0,i.h)(i.H,null,(0,i.h)("dyte-icon",{icon:this.states.activeOverlayModal.icon,iconPack:this.iconPack,t:this.t}),(0,i.h)("h2",null,this.states.activeOverlayModal.title),(0,i.h)("p",null,this.states.activeOverlayModal.description))}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;height:100%;width:100%;flex-direction:column;align-items:center;justify-content:center;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / 0.6);position:fixed;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);z-index:50}dyte-icon{height:var(--dyte-space-20, 80px)}h2{margin:var(--dyte-space-2, 8px);font-weight:500}p{margin:var(--dyte-space-0, 0px);font-size:16px}"}}]);