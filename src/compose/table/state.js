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
			bodyPositionStyle: '',
			toolPostionStyle: '',
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
		current.headType = data.headType || Head;
		current.bodyType = data.bodyType || Body;
		current.data = _data;
		current.tools = tools;
		current.toolPosition = data.toolPosition || 'right';
		let checks = [];
		current.body = _data.map(col => {
			checks.push(col[current.checkPropName]);
			return cols.map(({ key, width = 300, align = 'left' }) => {
				return { value: col[key], width, align, height: current.rowHeight };
			});
		});
		current.head = cols.map(({ title = '', key = '', width = 300, align = 'left' }) => {
			return { title, key, width, align, height: current.titleHeight };
		});
		let _bodyPostion = { left: 0, right: 0 }, _toolPosition = { width: 0 };
		if (tools.length > 0) {
			current.tool = _data.map(() => {
				return tools.map(a => {
					return Object.assign({}, a, { width: current.rowHeight, height: current.rowHeight });
				});
			});
			if (current.toolPosition === 'right') {
				_bodyPostion.right = tools.length * current.rowHeight;
				_toolPosition.right = 0;
			} else {
				_bodyPostion.left = tools.length * current.rowHeight;
				_toolPosition.left = 0;
			}
			_toolPosition.width = tools.length * current.rowHeight;
		}
		if (current.checkbox) {
			current.checks = checks;
			current.isCheckAll = !(current.checks.findIndex(a => a !== true) !== -1);
			_bodyPostion.left = _bodyPostion.left + current.rowHeight;
			if (current.toolPosition === 'left') {
				_toolPosition.left = current.rowHeight;
			}
		} else {
			current.checks = [];
			current.isCheckAll = false;
		}
		current.bodyPositionStyle = Reflect.ownKeys(_bodyPostion).map(key => `${key}:${_bodyPostion[key]}px`).join(";");
		current.toolPostionStyle = Reflect.ownKeys(_toolPosition).map(key => `${key}:${_toolPosition[key]}px`).join(";");
	}

	@action('checkRow')
	checkRow(current, index) {
		current.checks[index] = !current.checks[index];
		current.isCheckAll = !(current.checks.findIndex(a => a !== true) !== -1);
	}

	@action('checkAll')
	checkAll(current) {
		current.isCheckAll = !current.isCheckAll;
		if (current.isCheckAll) {
			current.checks = current.body.map(() => true);
		} else {
			current.checks = current.body.map(() => false);
		}
	}
}

export default TableService;