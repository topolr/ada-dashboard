"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adajs = require("adajs");

var _head = _interopRequireDefault(require("table/head/index.js"));

var _simple = _interopRequireDefault(require("table/body/simple/index.js"));

var _tool = _interopRequireDefault(require("table/tool/index.js"));

var _checkbox = _interopRequireDefault(require("table/checkbox/index.js"));

var _dec, _dec2, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

let TableService = (_dec = (0, _adajs.action)('checkRow'), _dec2 = (0, _adajs.action)('checkAll'), (_class = class TableService extends _adajs.Service {
  defaultData() {
    return {
      cols: [],
      headType: _head.default,
      bodyType: _simple.default,
      toolType: _tool.default,
      checkboxType: _checkbox.default,
      titleHeight: 40,
      rowHeight: 30,
      toolPosition: 'right',
      bodyPosition: 'left:0',
      checkbox: true,
      tools: [],
      tool: [],
      head: [],
      body: [],
      data: [],
      checkPropName: 'check',
      isCheckAll: false,
      checks: []
    };
  }

  onupdate(current, data) {
    this.setTable(current, data);
  }

  setTable(current, data) {
    let cols = data.cols || current.cols,
        tools = data.tools || current.tools,
        _data = data.data || current.data;

    current.headType = data.headType || _head.default;
    current.bodyType = data.bodyType || _simple.default;
    current.data = _data;
    current.tools = tools;
    current.toolPosition = data.toolPosition || 'right';
    let checks = [];
    current.body = _data.map(col => {
      checks.push(col[current.checkPropName]);
      return cols.map(({
        key,
        width = 300,
        align = 'left'
      }) => {
        return {
          value: col[key],
          width,
          align,
          height: current.rowHeight
        };
      });
    });
    current.checks = checks;
    current.isCheckAll = current.checks.find(a => a !== true) !== undefined;
    current.head = cols.map(({
      title = '',
      key = '',
      width = 300,
      align = 'left'
    }) => {
      return {
        title,
        key,
        width,
        align,
        height: current.titleHeight
      };
    });

    if (tools.length > 0) {
      current.tool = _data.map(() => {
        return tools.map(a => {
          return Object.assign({}, a, {
            width: current.rowHeight,
            height: current.rowHeight
          });
        });
      });

      if (current.toolPosition === 'right') {
        current.bodyPosition = `left:${tools.length * current.rowHeight}px`;
      } else {
        current.bodyPosition = `right:${tools.length * current.rowHeight}px;left:${current.rowHeight}px`;
      }
    } else {
      current.bodyPosition = `left:0;right:0`;
    }
  }

  checkRow(current, index) {
    current.checks[index] = !current.checks[index];
    current.isCheckAll = !(current.checks.find(a => a !== true) !== undefined);
  }

  checkAll(current) {
    current.isCheckAll = !current.isCheckAll;

    if (current.isCheckAll) {
      current.checks = current.body.map(() => true);
    } else {
      current.checks = current.body.map(() => false);
    }
  }

}, (_applyDecoratedDescriptor(_class.prototype, "checkRow", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "checkRow"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "checkAll", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "checkAll"), _class.prototype)), _class));
var _default = TableService;
exports.default = _default;
//# sourceMappingURL=table/state.js.map