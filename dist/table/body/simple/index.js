"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adajs = require("adajs");

var _state = _interopRequireDefault(require("table/body/simple/state.js"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Simple = (_dec = (0, _adajs.view)({  className: "table-simple",  template:"table/body/simple/template.html",  style:"table/body/simple/style.scss",  dataset: {    service: _state.default  },module:"table/body/simple/index.js"}), _dec(_class = class Simple extends _adajs.View {}) || _class);
var _default = Simple;
exports.default = _default;
//# sourceMappingURL=table/body/simple/index.js.map