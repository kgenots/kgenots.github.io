"use strict";
exports.id = 3213;
exports.ids = [3213];
exports.modules = {

/***/ 5172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ clone)
/* harmony export */ });
/* harmony import */ var _cloneDeep_6a74a147_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53001);


function clone(obj) {
  if (structuredClone) {
    return structuredClone(obj);
  }
  return (0,_cloneDeep_6a74a147_js__WEBPACK_IMPORTED_MODULE_0__.c)(obj);
}




/***/ }),

/***/ 63213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_transcripts: () => (/* binding */ DyteTranscripts)
/* harmony export */ });
/* harmony import */ var _index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37176);
/* harmony import */ var _index_a35e3c03_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46677);
/* harmony import */ var _default_ui_config_f87e0ba7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71783);
/* harmony import */ var _livestream_1a40fc8d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78410);
/* harmony import */ var _graceful_storage_33bc316d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60804);
/* harmony import */ var _store_01c79590_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99126);
/* harmony import */ var _clone_e2a39cf9_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5172);
/* harmony import */ var _user_prefs_f52d234f_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85114);
/* harmony import */ var _cloneDeep_6a74a147_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53001);
/* harmony import */ var _keysIn_8bf552ee_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34166);
/* harmony import */ var _isObjectLike_0d1a05d5_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9079);












const dyteTranscriptsCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:absolute;top:var(--dyte-space-4, 16px);right:var(--dyte-space-4, 16px);bottom:var(--dyte-space-4, 16px);left:var(--dyte-space-4, 16px);top:auto;display:flex;flex-direction:column;pointer-events:none;justify-content:center;width:100%;z-index:5}dyte-transcript{margin-top:var(--dyte-space-2, 8px)}";

const DyteTranscripts = class {
  constructor(hostRef) {
    (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.onTranscript = (transcript) => {
      if (transcript.transcript) {
        this.add(transcript);
      }
    };
    this.meeting = undefined;
    this.states = _store_01c79590_js__WEBPACK_IMPORTED_MODULE_5__.s;
    this.config = _default_ui_config_f87e0ba7_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_a35e3c03_js__WEBPACK_IMPORTED_MODULE_1__.u)();
    this.transcripts = [];
    this.listenerAttached = false;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  addListener(meeting) {
    var _a;
    (_a = meeting === null || meeting === void 0 ? void 0 : meeting.ai) === null || _a === void 0 ? void 0 : _a.addListener('transcript', this.onTranscript);
    this.listenerAttached = true;
  }
  clearListeners(meeting) {
    var _a;
    this.onTranscript && ((_a = meeting === null || meeting === void 0 ? void 0 : meeting.ai) === null || _a === void 0 ? void 0 : _a.removeListener('transcript', this.onTranscript));
    this.listenerAttached = false;
    clearTimeout(this.disconnectTimeout);
    this.transcripts = [];
  }
  disconnectedCallback() {
    if (this.meeting == null)
      return;
    this.clearListeners(this.meeting);
  }
  meetingChanged(meeting, oldMeeting) {
    clearTimeout(this.disconnectTimeout);
    if (oldMeeting !== undefined)
      this.clearListeners(oldMeeting);
    if (meeting == null)
      return;
    if (this.states.activeCaptions) {
      this.addListener(meeting);
    }
  }
  statesChanged(s) {
    const states = s || _store_01c79590_js__WEBPACK_IMPORTED_MODULE_5__.s;
    if (states.activeCaptions && !this.listenerAttached) {
      this.addListener(this.meeting);
    }
    else {
      this.clearListeners(this.meeting);
    }
  }
  transcriptionsReducer(acc, t) {
    if (!acc.length) {
      return [t];
    }
    let lastElement = acc[acc.length - 1];
    if (lastElement.peerId !== t.peerId) {
      return acc.concat(t);
    }
    const maxTranscriptLength = 400;
    if (lastElement.transcript.length + t.transcript.length > maxTranscriptLength) {
      return acc.concat(t);
    }
    lastElement.transcript += ' ' + t.transcript;
    acc.pop();
    return acc.concat((0,_clone_e2a39cf9_js__WEBPACK_IMPORTED_MODULE_6__.c)(lastElement));
  }
  add(transcript) {
    // show transcripts only if tab is in focus and a maximum of 3 at a time
    this.transcripts.splice(0, this.transcripts.length - 2);
    this.transcripts = this.transcriptionsReducer(this.transcripts, transcript);
  }
  remove(id) {
    this.transcripts = this.transcripts.filter((transcript) => transcript.id !== id);
  }
  handleDismiss(e) {
    e.stopPropagation();
    const id = e.detail;
    const el = this.host.shadowRoot.querySelector(`[data-id="${id}"]`);
    // exit animation
    el === null || el === void 0 ? void 0 : el.classList.add('exit');
    setTimeout(() => {
      (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => {
        this.remove(id);
      });
    }, 400);
  }
  render() {
    var _a;
    if (!this.states.activeCaptions)
      return;
    return ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (_a = this.transcripts) === null || _a === void 0 ? void 0 : _a.map((transcript) => ((0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-transcript", { key: transcript.id, "data-id": transcript.id, transcript: transcript, onDyteTranscriptDismiss: (e) => this.handleDismiss(e), t: this.t })))));
  }
  get host() { return (0,_index_861bcf4b_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "meeting": ["meetingChanged"],
    "states": ["statesChanged"]
  }; }
};
DyteTranscripts.style = dyteTranscriptsCss;




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