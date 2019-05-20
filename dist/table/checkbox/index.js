"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adajs = require("adajs");

var _state = _interopRequireDefault(require("table/checkbox/state.js"));

var _dec, _dec2, _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

let Checkbox = (_dec = (0, _adajs.view)({  className: "table-checkbox",  template:"table/checkbox/template.html",  style:"table/checkbox/style.scss",  dataset: {    service: _state.default  },module:"table/checkbox/index.js"}), _dec2 = (0, _adajs.binder)('checkAll'), _dec(_class = (_class2 = class Checkbox extends _adajs.View {
  checkAll() {
    this.dispatchEvent('checkAll');
  }

  scrollTop(top) {
    this.finder("body").getElement().scrollTop = top;
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "checkAll", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "checkAll"), _class2.prototype)), _class2)) || _class);
var _default = Checkbox;
exports.default = _default;
//# sourceMappingURL=table/checkbox/index.js.map