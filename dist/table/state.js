"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adajs = require("adajs");

var _head = _interopRequireDefault(require("table/head/index.js"));

var _simple = _interopRequireDefault(require("table/body/simple/index.js"));

var _tool = _interopRequireDefault(require("table/tool/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TableService extends _adajs.Service {
  defaultData() {
    return {
      cols: [],
      headType: _head.default,
      bodyType: _simple.default,
      toolType: _tool.default,
      titleHeight: 40,
      rowHeight: 30,
      toolPosition: 'right',
      bodyPosition: 'left:0',
      checkbox: true,
      tools: [],
      tool: [],
      head: [],
      body: [],
      data: []
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
    current.body = _data.map(col => {
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
        current.bodyPosition = `right:${tools.length * current.rowHeight}px`;
      }
    } else {
      current.bodyPosition = `left:0;right:0`;
    }
  }

}

var _default = TableService;
exports.default = _default;
//# sourceMappingURL=table/state.js.map