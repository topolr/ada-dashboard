"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adajs = require("adajs");

var _table = _interopRequireDefault(require("table/index.js"));

require("style/index.css");

require("style/style.css");

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Root = (_dec = (0, _adajs.root)({root:true,module:"root.js"}), _dec(_class = class Root extends _adajs.StaticViewGroup {
  onready() {
    this.addChild(_table.default, {
      parameter: {
        cols: [{
          title: "AA",
          key: "aa",
          width: 100
        }, {
          title: "BB",
          key: "bb",
          width: 100
        }, {
          title: "CC",
          key: "cc",
          width: 100
        }],
        data: [{
          aa: "aaaa1",
          bb: "bbbbb1",
          cc: "ccccc1"
        }, {
          aa: "aaaa2",
          bb: "bbbbb2",
          cc: "ccccc2"
        }, {
          aa: "aaaa3",
          bb: "bbbbb3",
          cc: "ccccc3"
        }, {
          aa: "aaaa1",
          bb: "bbbbb1",
          cc: "ccccc1"
        }, {
          aa: "aaaa2",
          bb: "bbbbb2",
          cc: "ccccc2"
        }, {
          aa: "aaaa3",
          bb: "bbbbb3",
          cc: "ccccc3"
        }, {
          aa: "aaaa1",
          bb: "bbbbb1",
          cc: "ccccc1"
        }, {
          aa: "aaaa2",
          bb: "bbbbb2",
          cc: "ccccc2"
        }, {
          aa: "aaaa3",
          bb: "bbbbb3",
          cc: "ccccc3"
        }, {
          aa: "aaaa1",
          bb: "bbbbb1",
          cc: "ccccc1"
        }, {
          aa: "aaaa2",
          bb: "bbbbb2",
          cc: "ccccc2"
        }, {
          aa: "aaaa3",
          bb: "bbbbb3",
          cc: "ccccc3"
        }, {
          aa: "aaaa1",
          bb: "bbbbb1",
          cc: "ccccc1"
        }, {
          aa: "aaaa2",
          bb: "bbbbb2",
          cc: "ccccc2"
        }, {
          aa: "aaaa3",
          bb: "bbbbb3",
          cc: "ccccc3"
        }, {
          aa: "aaaa1",
          bb: "bbbbb1",
          cc: "ccccc1"
        }, {
          aa: "aaaa2",
          bb: "bbbbb2",
          cc: "ccccc2"
        }, {
          aa: "aaaa3",
          bb: "bbbbb3",
          cc: "ccccc3"
        }, {
          aa: "aaaa1",
          bb: "bbbbb1",
          cc: "ccccc1"
        }, {
          aa: "aaaa2",
          bb: "bbbbb2",
          cc: "ccccc2"
        }, {
          aa: "aaaa3",
          bb: "bbbbb3",
          cc: "ccccc3"
        }, {
          aa: "aaaa1",
          bb: "bbbbb1",
          cc: "ccccc1"
        }, {
          aa: "aaaa2",
          bb: "bbbbb2",
          cc: "ccccc2"
        }, {
          aa: "aaaa3",
          bb: "bbbbb3",
          cc: "ccccc3"
        }],
        toolPosition: 'left',
        tools: [{
          title: 'aa',
          action: 'aa',
          icon: "ada-dashboard-add_circle"
        }, {
          title: 'bb',
          action: 'bb',
          icon: "ada-dashboard-adjust"
        }]
      }
    });
  }

}) || _class);
var _default = Root;
exports.default = _default;
//# sourceMappingURL=root.js.map