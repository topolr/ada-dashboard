"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adajs = require("adajs");

var _state = _interopRequireDefault(require("table/tool/state.js"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Tool = (_dec = (0, _adajs.view)({  className: "table-tool",  template:"table/tool/template.html",  style:"table/tool/style.scss",  dataset: {    service: _state.default  },module:"table/tool/index.js"}), _dec(_class = class Tool extends _adajs.View {}) || _class);
var _default = Tool;
exports.default = _default;
//# sourceMappingURL=table/tool/index.js.map