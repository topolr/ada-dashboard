"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adajs = require("adajs");

var _state = _interopRequireDefault(require("table/state.js"));

var _dec, _dec2, _dec3, _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

let Table = (_dec = (0, _adajs.view)({  className: "table",  template:"table/template.html",  style:"table/style.scss",  dataset: {    service: _state.default  },module:"table/index.js"}), _dec2 = (0, _adajs.handler)('checkRow'), _dec3 = (0, _adajs.handler)('checkAll'), _dec(_class = (_class2 = class Table extends _adajs.ViewGroup {
  onready() {
    this.finder("body").getElement().addEventListener("scroll", e => {
      let target = e.target;
      this.getChildrenByType(this.getCurrentState().headType)[0].scrollLeft(target.scrollLeft);
      this.getChildrenByType(this.getCurrentState().toolType)[0].scrollTop(target.scrollTop);
      this.getChildrenByType(this.getCurrentState().checkboxType)[0].scrollTop(target.scrollTop);
    });
  }

  checkRow({
    data
  }) {
    this.commit('checkRow', data.index);
  }

  checkAll() {
    this.commit('checkAll');
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "checkRow", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "checkRow"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "checkAll", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "checkAll"), _class2.prototype)), _class2)) || _class);
var _default = Table;
exports.default = _default;
//# sourceMappingURL=table/index.js.map