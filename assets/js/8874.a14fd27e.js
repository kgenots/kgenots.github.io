"use strict";
exports.id = 8874;
exports.ids = [8874];
exports.modules = {

/***/ 58874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_waiting_screen: () => (/* binding */ DyteWaitingScreen)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44709);
/* harmony import */ var _index_7b89c939_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12844);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48152);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45177);
/* harmony import */ var _breakout_rooms_manager_7dc0174a_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35755);
/* harmony import */ var _default_ui_config_f87e0ba7_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53459);
/* harmony import */ var _livestream_1a40fc8d_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92337);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40548);
/* harmony import */ var _breakout_rooms_dea0806e_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91137);
/* harmony import */ var _flags_f14ed3df_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89050);











const dyteWaitingScreenCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.centered{display:flex;flex-direction:column;align-items:center}dyte-logo{margin-bottom:var(--dyte-space-8, 32px);height:var(--dyte-space-12, 48px)}p{font-size:16px;border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-8, 32px);padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}";

const DyteWaitingScreen = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.meeting = undefined;
    this.config = _default_ui_config_f87e0ba7_js__WEBPACK_IMPORTED_MODULE_5__.d;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_7b89c939_js__WEBPACK_IMPORTED_MODULE_1__.u)();
  }
  render() {
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "centered", part: "content" }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-logo", { meeting: this.meeting, config: this.config, part: "logo", t: this.t }), (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.t('waitlist.body_text'))))));
  }
};
DyteWaitingScreen.style = dyteWaitingScreenCss;




/***/ })

};
;