import { Service, action, compute } from "adajs";
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
			selectIdName: 'id',
			checkbox: true,
			multiCheck: true,
			tools: [],
			data: [],
			loading: false,
			selectIds: [],
			_selectIds: new Set(),
			_bodyPositionStyle: '',
			_toolPostionStyle: '',
			_tool: [],
			_head: [],
			_body: [],
			_isCheckAll: false,
			_checks: [],
			_tableMap: {}
		};
	}

	onupdate(current, data) {
		this.assign(current, data);
		current.selectIds.forEach(a => current._selectIds.add(a));
		this.setTable(current);
	}

	setTable(current) {
		let checks = [];
		current._body = current.data.map(col => {
			checks.push(current._selectIds.has(col[current.selectIdName]));
			current._tableMap[col[current.selectIdName]] = col;
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
			_bodyPostion.left = _bodyPostion.left + current.rowHeight;
			if (current.toolPosition === 'left') {
				_toolPosition.left = current.rowHeight;
			}
		}
		current._checks = checks;
		current._isCheckAll = !(current._checks.findIndex(a => a !== true) !== -1);
		current._bodyPositionStyle = Reflect.ownKeys(_bodyPostion).map(key => `${key}:${_bodyPostion[key]}px`).join(";");
		current._toolPostionStyle = Reflect.ownKeys(_toolPosition).map(key => `${key}:${_toolPosition[key]}px`).join(";");
	}

	@action('checkRow')
	checkRow(current, index) {
		if (current.multiCheck) {
			let id = current.data[index][current.selectIdName];
			current._checks[index] = !current._checks[index];
			if (current._checks[index]) {
				current._selectIds.add(id);
			} else {
				current._selectIds.delete(id);
			}
			current._isCheckAll = !(current._checks.findIndex(a => a !== true) !== -1);
		} else {
			current._checks = current._checks.map((a, index) => {
				if (a) {
					current._selectIds.delete(current.data[index][current.selectIdName]);
				}
				return false;
			});
			current._isCheckAll = false;
			current._checks[index] = true;
			current._selectIds.add(current.data[index][current.selectIdName]);
		}
	}

	@action('checkAll')
	checkAll(current) {
		if (current.multiCheck) {
			current._isCheckAll = !current._isCheckAll;
			if (current._isCheckAll) {
				current._checks = current._body.map(() => true);
				current.data.forEach(item => {
					current._selectIds.add(item[current.selectIdName]);
				});
			} else {
				current._checks = current._body.map(() => false);
				current.data.forEach(item => {
					current._selectIds.delete(item[current.selectIdName]);
				});
			}
		}
	}

	@compute('get-select-ids')
	getSelectItems(current) {
		return [...current._selectIds];
	}
}

export default TableService;