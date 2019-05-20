"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adajs = require("adajs");

class CheckboxService extends _adajs.Service {
  defaultData() {
    return {
      checks: [],
      isCheckAll: false,
      rowHeight: 30,
      titleHeight: 40
    };
  }

  onupdate(current, data) {
    Object.assign(current, data);
    current.isCheckAll = current.checks.find(a => a !== true);
  }

}

var _default = CheckboxService;
exports.default = _default;
//# sourceMappingURL=table/checkbox/state.js.map