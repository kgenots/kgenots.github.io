"use strict";(self.webpackChunkkgenots=self.webpackChunkkgenots||[]).push([[378,8861],{8861:(t,e,o)=>{o.r(e),o.d(e,{dyte_menu:()=>n,dyte_menu_item:()=>l,dyte_menu_list:()=>d});var i=o(7176),s=o(7775),r=o(8724),a=o(6677);const n=class{constructor(t){(0,i.r)(this,t),this.clickedThis=!1,this.handleOutsideClick=()=>{this.clickedThis||(this.menuListEl.style.display="none"),this.clickedThis=!1},this.size=void 0,this.placement="bottom-end",this.offset=10,this.iconPack=r.d,this.t=(0,a.u)()}componentDidLoad(){document.addEventListener("click",this.handleOutsideClick),this.update()}disconnectedCallback(){document.removeEventListener("click",this.handleOutsideClick)}update(){(0,s.c)(this.triggerEl,this.menuListEl,{placement:this.placement,middleware:[(0,s.o)(this.offset),(0,s.f)(),(0,s.s)({padding:5})]}).then((({x:t,y:e})=>{Object.assign(this.menuListEl.style,{left:`${t}px`,top:`${e}px`})}))}render(){return(0,i.h)(i.H,null,(0,i.h)("span",{id:"trigger",ref:t=>this.triggerEl=t,onClick:()=>{this.clickedThis=!0,"block"!==this.menuListEl.style.display?(this.menuListEl.style.display="block",this.update()):this.menuListEl.style.display="none"}},(0,i.h)("slot",{name:"trigger"})),(0,i.h)("span",{part:"menu-list",id:"menu-list",ref:t=>this.menuListEl=t},(0,i.h)("slot",null)))}};n.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:inline-block;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}#menu-list{position:absolute;z-index:20;display:none}";const l=class{constructor(t){(0,i.r)(this,t),this.size=void 0,this.iconPack=r.d,this.t=(0,a.u)()}render(){return(0,i.h)(i.H,null,(0,i.h)("slot",{name:"start"}),(0,i.h)("slot",null),(0,i.h)("slot",{name:"end"}))}};l.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;align-items:center;padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);cursor:pointer;transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;color:rgb(var(--dyte-colors-text-1000, 255 255 255));font-size:14px}::slotted([slot='start']){margin-right:var(--dyte-space-2, 8px)}::slotted([slot='end']){margin-left:var(--dyte-space-2, 8px)}:host(:hover){--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}:host(.red){--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}";const d=class{constructor(t){(0,i.r)(this,t),this.iconPack=r.d,this.t=(0,a.u)()}render(){return(0,i.h)(i.H,null,(0,i.h)("slot",null))}};d.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:flex;width:-moz-max-content;width:max-content;flex-direction:column;padding-top:var(--dyte-space-2, 8px);padding-bottom:var(--dyte-space-2, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));overflow:hidden;border-radius:var(--dyte-border-radius-sm, 4px);--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}"}}]);