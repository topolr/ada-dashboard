"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adajs = require("adajs");

var _state = _interopRequireDefault(require("table/checkbox/state.js"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Checkbox = (_dec = (0, _adajs.view)({  className: "table-checkbox",  template:"table/checkbox/template.html",  style:"table/checkbox/style.scss",  dataset: {    service: _state.default  },module:"table/checkbox/index.js"}), _dec(_class = class Checkbox extends _adajs.View {}) || _class);
var _default = Checkbox;
exports.default = _default;
//# sourceMappingURL=table/checkbox/index.js.map