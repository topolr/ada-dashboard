import { Service, action } from "adajs";
import Head from './head';
import Body from './body/simple';
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
		current.headType = data.headType || Head;
		current.bodyType = data.bodyType || Body;
		current.data = _data;
		current.tools = tools;
		current.toolPosition = data.toolPosition || 'right';
		let checks = [];
		current.body = _data.map((col, index) => {
			checks.push(col[current.checkPropName]);
			return cols.map(({ key, width = 300, align = 'left' }) => {
				return { value: col[key], width, align, height: current.rowHeight };
			});
		});
		current.checks = checks;
		current.isCheckAll = (current.checks.length === current.body.length);
		current.head = cols.map(({ title = '', key = '', width = 300, align = 'left' }) => {
			return { title, key, width, align, height: current.titleHeight };
		});
		if (tools.length > 0) {
			current.tool = _data.map(() => {
				return tools.map(a => {
					return Object.assign({}, a, { width: current.rowHeight, height: current.rowHeight });
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

	@action('checkRow')
	checkRow(current, index) {
		let _index = current.checks.indexOf(index);
		if (_index === -1) {
			current.checks.push(index);
		} else {
			current.checks.splice(_index, 1);
		}
		current.isCheckAll = (current.checks.length === current.body.length);
	}

	@action('checkAll')
	checkAll(current) {
		current.isCheckAll = !current.isCheckAll;
		if (current.isCheckAll) {
			current.checks = current.body.map((a, b) => b);
		} else {
			current.checks = [];
		}
	}
}

export default TableService;