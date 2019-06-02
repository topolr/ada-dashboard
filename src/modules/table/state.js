import { Service, action } from "adajs";
import Head from './header';
import Body from './body';
import Tool from './tool';
import Checkbox from './checkbox';

class TableService extends Service {
	defaultData() {
		return {
			cols: [],
			headType: Head,
			bodyType: Body,
			toolType: Tool,
			checkboxType: Checkbox,
			titleHeight: 40,
			rowHeight: 30,
			toolPosition: 'right',
			checkPropName: 'check',
			checkbox: true,
			tools: [],
			data: [],
			loading: false,
			_bodyPositionStyle: '',
			_toolPostionStyle: '',
			_tool: [],
			_head: [],
			_body: [],
			_isCheckAll: false,
			_checks: []
		};
	}

	onupdate(current, data) {
		this.assign(current, data);
		this.setTable(current);
	}

	setTable(current) {
		let checks = [];
		current._body = current.data.map(col => {
			checks.push(col[current.checkPropName]);
			return current.cols.map(({ key, width = 300, align = 'left' }) => {
				return { value: col[key], width, align, height: current.rowHeight };
			});
		});
		current._head = current.cols.map(({ title = '', key = '', width = 300, align = 'left' }) => {
			return { title, key, width, align, height: current.titleHeight };
		});
		let _bodyPostion = { left: 0, right: 0 }, _toolPosition = { width: 0 };
		if (current.tools.length > 0) {
			current._tool = current.data.map(() => {
				return current.tools.map(a => {
					return Object.assign({}, a, { width: current.rowHeight, height: current.rowHeight });
				});
			});
			if (current.toolPosition === 'right') {
				_bodyPostion.right = current.tools.length * current.rowHeight;
				_toolPosition.right = 0;
			} else {
				_bodyPostion.left = current.tools.length * current.rowHeight;
				_toolPosition.left = 0;
			}
			_toolPosition.width = current.tools.length * current.rowHeight;
		}
		if (current.checkbox) {
			current._checks = checks;
			current._isCheckAll = !(current._checks.findIndex(a => a !== true) !== -1);
			_bodyPostion.left = _bodyPostion.left + current.rowHeight;
			if (current.toolPosition === 'left') {
				_toolPosition.left = current.rowHeight;
			}
		} else {
			current._checks = [];
			current._isCheckAll = false;
		}
		if (current._checks.length === 0) {
			current._isCheckAll = false;
		}
		current._bodyPositionStyle = Reflect.ownKeys(_bodyPostion).map(key => `${key}:${_bodyPostion[key]}px`).join(";");
		current._toolPostionStyle = Reflect.ownKeys(_toolPosition).map(key => `${key}:${_toolPosition[key]}px`).join(";");
	}

	@action('checkRow')
	checkRow(current, index) {
		current._checks[index] = !current._checks[index];
		current._isCheckAll = !(current._checks.findIndex(a => a !== true) !== -1);
	}

	@action('checkAll')
	checkAll(current) {
		current._isCheckAll = !current._isCheckAll;
		if (current._isCheckAll) {
			current._checks = current._body.map(() => true);
		} else {
			current._checks = current._body.map(() => false);
		}
	}
}

export default TableService;