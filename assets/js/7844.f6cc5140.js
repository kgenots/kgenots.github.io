"use strict";(self.webpackChunkkgenots=self.webpackChunkkgenots||[]).push([[7844,4311],{4311:(i,t,e)=>{e.r(t),e.d(t,{dyte_participant:()=>r});var a=e(7176),n=e(8724),s=e(6677),c=e(7341),o=e(2906),d=e(9126),h=e(1783);e(8410),e(804),e(5114);const r=class{constructor(i){(0,a.r)(this,i),this.dyteSendNotification=(0,a.c)(this,"dyteSendNotification",7),this.pinnedListener=({isPinned:i})=>{this.isPinned=i},this.stageListener=({stageStatus:i})=>{this.isOnStage="ON_STAGE"===i},this.inviteToStageToggle=async()=>{const i=this.participant,{stage:t}=this.meeting;"ACCEPTED_TO_JOIN_STAGE"!==i.stageStatus?(this.isOnStage?(i.isPinned&&i.unpin(),await t.kick([i.userId])):(await t.grantAccess([i.userId]),this.dyteSendNotification.emit({message:`${i.name} ${this.t("stage.invited_notification")}`,trace:`join-stage-invite-${i.id}`})),this.isOnStage="ON_STAGE"===i.stageStatus):this.dyteSendNotification.emit({message:`${i.name} ${this.t("stage.invited_notification")}`,trace:`join-stage-${i.id}`})},this.meeting=void 0,this.view="sidebar",this.participant=void 0,this.iconPack=n.d,this.t=(0,s.u)(),this.config=h.d,this.audioEnabled=!1,this.videoEnabled=!1,this.isPinned=!1,this.isOnStage=!1,this.canDisableParticipantAudio=!1,this.canDisableParticipantVideo=!1,this.canKickParticipant=!1,this.canPinParticipant=!1,this.canAllowParticipantOnStage=!1}connectedCallback(){this.meetingChanged(this.meeting),this.participantChanged(this.participant)}disconnectedCallback(){null!=this.participant&&null!=this.participant.removeListener&&(this.audioUpdateListener&&this.participant.removeListener("audioUpdate",this.audioUpdateListener),this.videoUpdateListener&&this.participant.removeListener("videoUpdate",this.videoUpdateListener),this.participant.removeListener("pinned",this.pinnedListener),this.participant.removeListener("unpinned",this.pinnedListener),this.participant.removeListener("stageStatusUpdate",this.stageListener))}meetingChanged(i){if(null!=i){const{self:t}=i;this.canDisableParticipantAudio=t.permissions.canAllowParticipantAudio||t.permissions.canDisableParticipantAudio,this.canDisableParticipantVideo=t.permissions.canAllowParticipantVideo||t.permissions.canDisableParticipantVideo,this.canKickParticipant=t.permissions.kickParticipant,this.canPinParticipant=t.permissions.pinParticipant,this.canAllowParticipantOnStage=t.permissions.acceptPresentRequests}}participantChanged(i){if(null!=i){if(this.audioEnabled=i.audioEnabled,this.videoEnabled=i.videoEnabled,this.isPinned=i.isPinned,this.isOnStage="ON_STAGE"===i.stageStatus,this.audioUpdateListener=({audioEnabled:i})=>{this.audioEnabled=i},this.videoUpdateListener=({videoEnabled:i})=>{this.videoEnabled=i},null==i.addListener)return;i.addListener("audioUpdate",this.audioUpdateListener),i.addListener("videoUpdate",this.videoUpdateListener),i.addListener("pinned",this.pinnedListener),i.addListener("unpinned",this.pinnedListener),i.addListener("stageStatusUpdate",this.stageListener)}}render(){var i,t,e,n,s,h,r,p;const l="AUDIO_ROOM"===(null===(i=this.meeting)||void 0===i?void 0:i.meta.viewType),g=(null===(t=this.meeting)||void 0===t?void 0:t.self.id)===this.participant.id,P=this.canDisableParticipantAudio&&this.audioEnabled||this.canDisableParticipantVideo&&!l||this.canKickParticipant||this.canPinParticipant,v=(0,o.f)((null===(e=this.participant)||void 0===e?void 0:e.name)||""),u=this.isOnStage||["GROUP_CALL","AUDIO_ROOM"].includes(null===(n=this.meeting)||void 0===n?void 0:n.meta.viewType),m={meeting:this.meeting,size:"sm",states:d.s,config:this.config,iconPack:this.iconPack,t:this.t};return(0,a.h)(a.H,null,(0,a.h)("div",{class:"left"},(0,a.h)("dyte-avatar",{participant:this.participant,size:"sm",iconPack:this.iconPack,t:this.t}),(0,a.h)("p",{class:"name",title:v},(0,o.s)(v,16)," ",(null===(s=this.meeting)||void 0===s?void 0:s.self.id)===(null===(h=this.participant)||void 0===h?void 0:h.id)&&this.t("(you)"))),"sidebar"===this.view&&(0,a.h)("div",{class:"right"},u&&(0,a.h)("dyte-icon",{class:{red:!this.audioEnabled},iconPack:this.iconPack,t:this.t,icon:this.audioEnabled?this.iconPack.mic_on:this.iconPack.mic_off}),u&&!l&&(0,a.h)("dyte-icon",{class:{red:!this.videoEnabled},iconPack:this.iconPack,t:this.t,icon:this.videoEnabled?this.iconPack.video_on:this.iconPack.video_off}),(P||(0,c.l)({element:"dyte-participant",defaults:m,childProps:{participant:this.participant}})>0)&&(0,a.h)("dyte-menu",{iconPack:this.iconPack,t:this.t},(0,a.h)("dyte-button",{variant:"ghost",kind:"icon",slot:"trigger",iconPack:this.iconPack,t:this.t},(0,a.h)("dyte-icon",{class:"more",icon:this.iconPack.more_vertical})),(0,a.h)("dyte-menu-list",{iconPack:this.iconPack,t:this.t},this.canPinParticipant&&u&&(0,a.h)("dyte-menu-item",{onClick:()=>{this.isPinned?this.participant.unpin():this.participant.pin()},iconPack:this.iconPack,t:this.t},(0,a.h)("dyte-icon",{icon:this.isPinned?this.iconPack.pin_off:this.iconPack.pin,slot:"start",iconPack:this.iconPack,t:this.t}),this.isPinned?this.t("unpin"):this.t("pin")),this.canDisableParticipantAudio&&u&&this.audioEnabled&&(0,a.h)("dyte-menu-item",{iconPack:this.iconPack,t:this.t,onClick:()=>{this.participant.disableAudio()}},(0,a.h)("dyte-icon",{icon:this.iconPack.mic_off,slot:"start"}),this.t("mute")),this.canDisableParticipantVideo&&u&&this.videoEnabled&&(0,a.h)("dyte-menu-item",{iconPack:this.iconPack,t:this.t,onClick:()=>{this.participant.disableVideo()}},(0,a.h)("dyte-icon",{icon:this.iconPack.video_off,slot:"start",iconPack:this.iconPack,t:this.t}),this.t("participants.turn_off_video")),this.canAllowParticipantOnStage&&(null===(r=this.participant)||void 0===r?void 0:r.id)!==(null===(p=this.meeting)||void 0===p?void 0:p.self.id)&&(0,a.h)("dyte-menu-item",{iconPack:this.iconPack,t:this.t,class:this.isOnStage?"red":"",onClick:this.inviteToStageToggle},(0,a.h)("dyte-icon",{iconPack:this.iconPack,t:this.t,icon:this.isOnStage?this.iconPack.leave_stage:this.iconPack.join_stage,slot:"start"}),this.isOnStage?this.t("stage.remove_from_stage"):this.t("stage.add_to_stage")),!g&&this.canKickParticipant&&(0,a.h)("dyte-menu-item",{iconPack:this.iconPack,t:this.t,class:"red",onClick:()=>{var i,t;null===(i=this.meeting)||void 0===i||i.participants.kick(null===(t=this.participant)||void 0===t?void 0:t.id)}},(0,a.h)("dyte-icon",{icon:this.iconPack.dismiss,slot:"start",iconPack:this.iconPack,t:this.t}),this.t("kick")),(0,a.h)("slot",null,(0,a.h)(c.R,{element:"dyte-participant",defaults:m,childProps:{participant:this.participant},deepProps:!0,onlyChildren:!0}))))))}static get watchers(){return{meeting:["meetingChanged"],participant:["participantChanged"]}}};r.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:flex;height:var(--dyte-space-14, 56px);align-items:center;justify-content:space-between;cursor:pointer;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}:host dyte-avatar{height:var(--dyte-space-8, 32px);width:var(--dyte-space-8, 32px);font-size:14px}.left{display:flex;align-items:center}.left>*{margin-right:var(--dyte-space-2, 8px)}.left>*:last-child{margin-right:var(--dyte-space-0, 0px)}.right{display:flex;align-items:center;justify-content:flex-end}.right>*{margin-left:var(--dyte-space-2, 8px)}.right>*:first-child{margin-left:var(--dyte-space-0, 0px)}.name{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}dyte-icon{height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}dyte-icon.red{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}dyte-icon.more{cursor:pointer}"}}]);