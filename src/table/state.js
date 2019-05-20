import { Service } from "adajs";
import Head from './head';
import Body from './body/simple';
import Tool from './tool';

class TableService extends Service {
	defaultData() {
		return {
			cols: [],
			headType: Head,
			bodyType: Body,
			toolType: Tool,
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
		current.headType = data.headType || Head;
		current.bodyType = data.bodyType || Body;
		current.data = _data;
		current.tools = tools;
		current.toolPosition = data.toolPosition || 'right';
		current.head = cols.map(({ title = '', key = '', width = 300, align = 'left' }) => {
			return { title, key, width, align, height: current.titleHeight };
		});
		current.body = _data.map(col => {
			return cols.map(({ key, width = 300, align = 'left' }) => {
				return { value: col[key], width, align, height: current.rowHeight };
			});
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
				current.bodyPosition = `right:${tools.length * current.rowHeight}px`;
			}
		} else {
			current.bodyPosition = `left:0;right:0`;
		}
	}
}

export default TableService;