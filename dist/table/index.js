"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adajs = require("adajs");

var _state = _interopRequireDefault(require("table/state.js"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Table = (_dec = (0, _adajs.view)({  className: "table",  template:"table/template.html",  style:"table/style.scss",  dataset: {    service: _state.default  },module:"table/index.js"}), _dec(_class = class Table extends _adajs.ViewGroup {}) || _class);
var _default = Table;
exports.default = _default;
//# sourceMappingURL=table/index.js.map