"use strict";
exports.id = 5329;
exports.ids = [5329];
exports.modules = {

/***/ 35329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_camera_toggle: () => (/* binding */ DyteCameraToggle)
/* harmony export */ });
/* harmony import */ var _index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37176);
/* harmony import */ var _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48724);
/* harmony import */ var _index_a35e3c03_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46677);
/* harmony import */ var _store_01c79590_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99126);
/* harmony import */ var _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85114);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60804);







const dyteCameraToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}";

const DyteCameraToggle = class {
  constructor(hostRef) {
    (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.videoUpdateListener = ({ videoEnabled }) => {
      this.videoEnabled = videoEnabled;
    };
    this.stageStatusListener = () => {
      this.canProduceVideo = this.meeting.self.permissions.canProduceVideo === 'ALLOWED';
    };
    this.mediaPermissionUpdateListener = ({ kind, message }) => {
      if (kind === 'video') {
        this.cameraPermission = message;
      }
    };
    this.toggleCamera = () => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
      (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.__internals__.logger.info('dyteCameraToggle::toggleCamera', {
        media: {
          video: {
            enabled: Boolean((_c = (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self) === null || _c === void 0 ? void 0 : _c.videoEnabled),
            permission: this.cameraPermission,
            canProduce: (_f = (_e = (_d = this.meeting) === null || _d === void 0 ? void 0 : _d.self) === null || _e === void 0 ? void 0 : _e.permissions) === null || _f === void 0 ? void 0 : _f.canProduceVideo,
          },
        },
        webinar: {
          stageStatus: (_g = this.meeting) === null || _g === void 0 ? void 0 : _g.stage.status,
        },
        livestream: {
          stageStatus: (_j = (_h = this.meeting) === null || _h === void 0 ? void 0 : _h.stage) === null || _j === void 0 ? void 0 : _j.status,
        },
        moduleExists: {
          self: Boolean((_k = this.meeting) === null || _k === void 0 ? void 0 : _k.self),
        },
      });
      if (this.hasPermissionError()) {
        const permissionModalSettings = {
          enabled: true,
          kind: 'video',
        };
        this.stateUpdate.emit({ activePermissionsMessage: permissionModalSettings });
        _store_01c79590_js__WEBPACK_IMPORTED_MODULE_3__.s.activePermissionsMessage = permissionModalSettings;
        return false;
      }
      const self = (_l = this.meeting) === null || _l === void 0 ? void 0 : _l.self;
      if (self == null || !this.canProduceVideo) {
        return;
      }
      if (self.videoEnabled) {
        self.disableVideo();
      }
      else {
        self.enableVideo();
      }
    };
    this.variant = 'button';
    this.meeting = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_307ffa7c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_a35e3c03_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.videoEnabled = false;
    this.canProduceVideo = false;
    this.cameraPermission = 'NOT_REQUESTED';
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a, _b, _c, _d;
    (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.self.removeListener('videoUpdate', this.videoUpdateListener);
    (_b = this.meeting) === null || _b === void 0 ? void 0 : _b.self.removeListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener);
    (_d = (_c = this.meeting) === null || _c === void 0 ? void 0 : _c.stage) === null || _d === void 0 ? void 0 : _d.removeListener('stageStatusUpdate', this.stageStatusListener);
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      const { self, stage } = meeting;
      this.canProduceVideo = this.meeting.self.permissions.canProduceVideo === 'ALLOWED';
      this.cameraPermission = self.mediaPermissions.video || 'NOT_REQUESTED';
      this.videoEnabled = self.videoEnabled;
      self.addListener('videoUpdate', this.videoUpdateListener);
      self.addListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener);
      stage === null || stage === void 0 ? void 0 : stage.addListener('stageStatusUpdate', this.stageStatusListener);
    }
  }
  hasPermissionError() {
    return this.cameraPermission === 'DENIED' || this.cameraPermission === 'SYSTEM_DENIED';
  }
  getState() {
    let tooltipLabel = '';
    let label = '';
    let icon = '';
    let classList = {};
    let hasError = this.hasPermissionError();
    let couldNotStart = this.cameraPermission === 'COULD_NOT_START';
    if (this.videoEnabled && !hasError) {
      label = this.t('video_on');
      icon = this.iconPack.video_on;
    }
    else {
      label = this.t('video_off');
      icon = this.iconPack.video_off;
      classList['red-icon'] = true;
    }
    if (couldNotStart) {
      tooltipLabel = this.t('perm_could_not_start.video');
    }
    else if (this.cameraPermission === 'SYSTEM_DENIED') {
      tooltipLabel = this.t('perm_sys_denied.video');
    }
    else if (this.cameraPermission === 'DENIED') {
      tooltipLabel = this.t('perm_denied.video');
    }
    else {
      tooltipLabel = this.videoEnabled ? this.t('disable_video') : this.t('enable_video');
    }
    return {
      tooltipLabel,
      label,
      icon,
      classList,
      showWarning: hasError || couldNotStart,
      disable: hasError,
    };
  }
  render() {
    var _a;
    if (!this.canProduceVideo || ((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.meta.viewType) === 'AUDIO_ROOM') {
      return null;
    }
    const { tooltipLabel, label, icon, classList, showWarning, disable } = this.getState();
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: label }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { kind: "block", label: tooltipLabel, part: "tooltip", iconPack: this.iconPack, t: this.t }, (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, class: classList, variant: this.variant, label: label, icon: icon, onClick: this.toggleCamera, showWarning: showWarning, disabled: disable }))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteCameraToggle.style = dyteCameraToggleCss;




/***/ }),

/***/ 99126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ onChange),
/* harmony export */   s: () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37176);
/* harmony import */ var _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85114);



const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = () => {
    if (typeof _index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.a !== 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        return {};
    }
    const elmsToUpdate = new Map();
    return {
        dispose: () => elmsToUpdate.clear(),
        get: (propName) => {
            const elm = (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.a)();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        },
        set: (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.f));
            }
            cleanupElements(elmsToUpdate);
        },
        reset: () => {
            elmsToUpdate.forEach((elms) => elms.forEach(_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.f));
            cleanupElements(elmsToUpdate);
        },
    };
};

const unwrap = (val) => (typeof val === 'function' ? val() : val);
const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    const unwrappedState = unwrap(defaultState);
    let states = new Map(Object.entries(unwrappedState !== null && unwrappedState !== void 0 ? unwrappedState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        var _a;
        // When resetting the state, the default state may be a function - unwrap it to invoke it.
        // otherwise, the state won't be properly reset
        states = new Map(Object.entries((_a = unwrap(defaultState)) !== null && _a !== void 0 ? _a : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(unwrappedState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        // We need to unwrap the defaultState because it might be a function.
        // Otherwise we might not be sending the right reset value.
        const unReset = on('reset', () => cb(unwrap(defaultState)[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => {
        const unsubs = subscriptions.reduce((unsubs, subscription) => {
            if (subscription.set) {
                unsubs.push(on('set', subscription.set));
            }
            if (subscription.get) {
                unsubs.push(on('get', subscription.get));
            }
            if (subscription.reset) {
                unsubs.push(on('reset', subscription.reset));
            }
            if (subscription.dispose) {
                unsubs.push(on('dispose', subscription.dispose));
            }
            return unsubs;
        }, []);
        return () => unsubs.forEach((unsub) => unsub());
    };
    const forceUpdate = (key) => {
        const oldValue = states.get(key);
        handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    map.use(stencilSubscription());
    return map;
};

const { state, onChange } = createStore({
  prefs: (0,_user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_1__.g)(),
});




/***/ })

};
;