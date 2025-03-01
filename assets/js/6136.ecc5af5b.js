"use strict";
exports.id = 6136;
exports.ids = [6136];
exports.modules = {

/***/ 76136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_pip_toggle: () => (/* binding */ DytePipToggle)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44709);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45177);
/* harmony import */ var _breakout_rooms_manager_7dc0174a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35755);
/* harmony import */ var _default_ui_config_f87e0ba7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53459);
/* harmony import */ var _livestream_1a40fc8d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92337);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48152);
/* harmony import */ var _index_7b89c939_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12844);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40548);
/* harmony import */ var _breakout_rooms_dea0806e_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91137);
/* harmony import */ var _flags_f14ed3df_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89050);











const dytePipToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}";

const DytePipToggle = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.variant = 'button';
    this.meeting = undefined;
    this.states = undefined;
    this.config = _default_ui_config_f87e0ba7_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_5__.d;
    this.size = undefined;
    this.t = (0,_index_7b89c939_js__WEBPACK_IMPORTED_MODULE_6__.u)();
    this.pipSupported = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  meetingChanged(meeting) {
    var _a, _b, _c;
    if (meeting === null)
      return;
    // Check if PiP is supported and enabled
    this.pipSupported =
      ((_a = meeting.participants.pip) === null || _a === void 0 ? void 0 : _a.isSupported()) &&
        ((_b = meeting.self.config) === null || _b === void 0 ? void 0 : _b.pipMode) &&
        ((_c = meeting.self.config) === null || _c === void 0 ? void 0 : _c.viewType) !== 'LIVESTREAM';
  }
  togglePip() {
    if (!this.meeting.participants.pip)
      return;
    // Not active, activate
    if (this.meeting.participants.pip.isActive) {
      this.meeting.participants.pip.disable();
    }
    else {
      this.meeting.participants.pip.enable();
    }
    this.stateUpdate.emit({ activeMoreMenu: false });
    _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_1__.s.activeMoreMenu = false;
  }
  render() {
    if (!this.pipSupported)
      return;
    const pipEnabled = this.meeting.participants.pip.isActive;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { tabIndex: 0, role: "log", "aria-label": `Picture-in-Picture mode` }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, onClick: () => this.togglePip(), icon: pipEnabled ? this.iconPack.pip_on : this.iconPack.pip_off, label: pipEnabled ? this.t('pip_off') : this.t('pip_on'), variant: this.variant })));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DytePipToggle.style = dytePipToggleCss;




/***/ })

};
;