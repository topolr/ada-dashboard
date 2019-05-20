"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adajs = require("adajs");

class ToolService extends _adajs.Service {
  defaultData() {
    return {
      height: 40,
      position: 'right',
      list: []
    };
  }

  onupdate(current, data) {
    Object.assign(current, data);
  }

}

var _default = ToolService;
exports.default = _default;
//# sourceMappingURL=table/tool/state.js.map