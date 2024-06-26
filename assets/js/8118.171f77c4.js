"use strict";
exports.id = 8118;
exports.ids = [8118];
exports.modules = {

/***/ 28118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_leave_button: () => (/* binding */ DyteLeaveButton)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44709);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48152);
/* harmony import */ var _index_7b89c939_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12844);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45177);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40548);






const dyteLeaveButtonCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}";

const DyteLeaveButton = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.leave = () => {
      this.stateUpdate.emit({ activeLeaveConfirmation: true });
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeLeaveConfirmation = true;
    };
    this.variant = 'button';
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7b89c939_js__WEBPACK_IMPORTED_MODULE_2__.u)();
  }
  render() {
    const text = this.t('leave');
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { label: text }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { size: this.size, iconPack: this.iconPack, t: this.t, class: "leave", onClick: this.leave, icon: this.iconPack.call_end, label: text, variant: this.variant, part: "controlbar-button" })));
  }
};
DyteLeaveButton.style = dyteLeaveButtonCss;




/***/ })

};
;