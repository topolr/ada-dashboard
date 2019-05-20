"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adajs = require("adajs");

class SimpleService extends _adajs.Service {
  defaultData() {
    return {
      list: [],
      rowHeight: 30,
      titleHeight: 40,
      checks: []
    };
  }

  onupdate(current, data) {
    Object.assign(current, data);
  }

}

var _default = SimpleService;
exports.default = _default;
//# sourceMappingURL=table/body/simple/state.js.map