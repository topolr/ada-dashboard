"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adajs = require("adajs");

class HeadService extends _adajs.Service {
  defaultData() {
    return {
      list: [],
      checkbox: false,
      rowHeight: 30,
      titleHeight: 40
    };
  }

  onupdate(current, data) {
    Object.assign(current, data);
  }

}

var _default = HeadService;
exports.default = _default;
//# sourceMappingURL=table/head/state.js.map