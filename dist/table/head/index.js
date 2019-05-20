"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adajs = require("adajs");

var _state = _interopRequireDefault(require("table/head/state.js"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Head = (_dec = (0, _adajs.view)({  className: "table-head",  template:"table/head/template.html",  style:"table/head/style.scss",  dataset: {    service: _state.default  },module:"table/head/index.js"}), _dec(_class = class Head extends _adajs.View {}) || _class);
var _default = Head;
exports.default = _default;
//# sourceMappingURL=table/head/index.js.map