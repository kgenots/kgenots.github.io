"use strict";
exports.id = 7089;
exports.ids = [7089];
exports.modules = {

/***/ 67089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_breakout_rooms_toggle: () => (/* binding */ DyteBreakoutRoomsToggle)
/* harmony export */ });
/* harmony import */ var _index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44709);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48152);
/* harmony import */ var _index_7b89c939_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12844);
/* harmony import */ var _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45177);
/* harmony import */ var _breakout_rooms_dea0806e_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91137);
/* harmony import */ var _user_prefs_47572e95_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40548);
/* harmony import */ var _flags_f14ed3df_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89050);
/* harmony import */ var _livestream_1a40fc8d_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92337);









const dyteBreakoutRoomsToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}";

const DyteBreakoutRoomsToggle = class {
  constructor(hostRef) {
    (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.breakoutRoomToggle = () => {
      var _a, _b, _c;
      const mode = this.meeting.connectedMeetings.isActive ? 'view' : 'create';
      this.stateUpdate.emit({
        activeBreakoutRoomsManager: {
          active: !((_b = (_a = this.states) === null || _a === void 0 ? void 0 : _a.activeBreakoutRoomsManager) === null || _b === void 0 ? void 0 : _b.active),
          mode,
        },
      });
      _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeBreakoutRoomsManager = {
        active: !((_c = _store_8f4d7acc_js__WEBPACK_IMPORTED_MODULE_3__.s.activeBreakoutRoomsManager) === null || _c === void 0 ? void 0 : _c.active),
        mode,
      };
    };
    this.variant = 'button';
    this.meeting = undefined;
    this.states = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_7b89c939_js__WEBPACK_IMPORTED_MODULE_2__.u)();
  }
  render() {
    if (!(0,_breakout_rooms_dea0806e_js__WEBPACK_IMPORTED_MODULE_4__.a)(this.meeting))
      return;
    return ((0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: this.t('breakout_rooms') }, (0,_index_926e26e8_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, onClick: this.breakoutRoomToggle, icon: this.iconPack.breakout_rooms, label: this.t('breakout_rooms'), variant: this.variant })));
  }
};
DyteBreakoutRoomsToggle.style = dyteBreakoutRoomsToggleCss;




/***/ })

};
;