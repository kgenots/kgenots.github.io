"use strict";
exports.id = 6406;
exports.ids = [6406];
exports.modules = {

/***/ 16406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_stage_toggle: () => (/* binding */ DyteStageToggle)
/* harmony export */ });
/* harmony import */ var _index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37176);
/* harmony import */ var _livestream_1a40fc8d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78410);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48724);
/* harmony import */ var _index_a35e3c03_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46677);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60804);






const canJoinStage = (meeting) => {
  var _a, _b;
  return (((_a = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _a === void 0 ? void 0 : _a.permissions.stageEnabled) && ((_b = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _b === void 0 ? void 0 : _b.permissions.stageAccess) === 'ALLOWED');
};
const canRequestToJoinStage = (meeting) => {
  var _a, _b;
  return (((_a = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _a === void 0 ? void 0 : _a.permissions.stageEnabled) &&
    ((_b = meeting === null || meeting === void 0 ? void 0 : meeting.self) === null || _b === void 0 ? void 0 : _b.permissions.stageAccess) !== 'NOT_ALLOWED');
};

const dyteStageToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}";

const DyteStageToggle = class {
  constructor(hostRef) {
    (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.stageCallback = async () => {
      var _a, _b, _c, _d, _e, _f, _g;
      const stageStatus = (_a = this.meeting.stage) === null || _a === void 0 ? void 0 : _a.status;
      if (stageStatus === 'ON_STAGE') {
        await ((_c = (_b = this === null || this === void 0 ? void 0 : this.meeting) === null || _b === void 0 ? void 0 : _b.stage) === null || _c === void 0 ? void 0 : _c.leave());
      }
      if (stageStatus === 'OFF_STAGE') {
        (_e = (_d = this === null || this === void 0 ? void 0 : this.meeting) === null || _d === void 0 ? void 0 : _d.stage) === null || _e === void 0 ? void 0 : _e.requestAccess();
        if (canJoinStage(this.meeting)) {
          this.stateUpdate.emit({ activeJoinStage: true });
        }
      }
      if (stageStatus === 'REQUESTED_TO_JOIN_STAGE') {
        (_g = (_f = this === null || this === void 0 ? void 0 : this.meeting) === null || _f === void 0 ? void 0 : _f.stage) === null || _g === void 0 ? void 0 : _g.cancelRequestAccess();
      }
    };
    this.variant = 'button';
    this.meeting = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.stageStatus = 'OFF_STAGE';
    this.state = {
      label: '',
      disabled: false,
      icon: '',
    };
    this.t = (0,_index_a35e3c03_js__WEBPACK_IMPORTED_MODULE_3__.u)();
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  stageStatusHandler(meeting, status) {
    this.stageStatus = status;
    if (status === 'ACCEPTED_TO_JOIN_STAGE') {
      meeting.self.setupTracks({ audio: false, video: false });
      this.stateUpdate.emit({ activeJoinStage: true });
    }
    this.state = this.getState();
  }
  disconnectedCallback() {
    var _a, _b;
    (_b = (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.stage) === null || _b === void 0 ? void 0 : _b.removeListener('stageStatusUpdate', (status) => this.stageStatusHandler(this.meeting, status));
  }
  meetingChanged(meeting) {
    var _a, _b, _c, _d;
    if (meeting == null)
      return;
    this.stageStatus = (_a = meeting.stage) === null || _a === void 0 ? void 0 : _a.status;
    this.stageStatusHandler(meeting, (_b = meeting.stage) === null || _b === void 0 ? void 0 : _b.status);
    (_d = (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.stage) === null || _d === void 0 ? void 0 : _d.on('stageStatusUpdate', (status) => this.stageStatusHandler(meeting, status));
  }
  getState() {
    let label = '';
    let icon = '';
    let disabled = false;
    switch (this.stageStatus) {
      case 'ON_STAGE': {
        icon = this.iconPack.leave_stage;
        label = 'Leave Stage';
        disabled = false;
        break;
      }
      case 'ACCEPTED_TO_JOIN_STAGE': {
        icon = this.iconPack.join_stage;
        label = 'Join Stage';
        disabled = true;
        break;
      }
      case 'REQUESTED_TO_JOIN_STAGE': {
        icon = this.iconPack.join_stage;
        label = 'Requested';
        disabled = false;
        break;
      }
      default: {
        icon = this.iconPack.join_stage;
        label = 'Join Stage';
        disabled = false;
        break;
      }
    }
    return { label, disabled, icon };
  }
  render() {
    if (!canRequestToJoinStage(this.meeting))
      return;
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: this.state.label }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { placement: "top", kind: "block", label: this.state.label, delay: 600, part: "tooltip", iconPack: this.iconPack, t: this.t }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, variant: this.variant, label: this.state.label, icon: this.state.icon, onClick: this.stageCallback, disabled: this.state.disabled, showWarning: false }))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteStageToggle.style = dyteStageToggleCss;




/***/ })

};
;