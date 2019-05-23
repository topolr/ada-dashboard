import { Service } from "adajs";

class ListableService extends Service {
	defaultData() {
		return {
			cols: [],
			list: [],
			tools: [],
			header: [],
			body: []
		};
	}

	primeKeys() {
		return ['cols', 'list', 'tools'];
	}

	onupdate(current, data) {
		this.assignState(current, data);
		this.getTableData(current);
	}

	getTableData(current) {
		current.header = current.cols.map(({ width, title }) => {
			return { title, width };
		});
		current.body = current.list.map(item => {
			return current.cols.map(({ key, width }) => {
				return { value: item[key], width, item };
			});
		});
	}
}

export default ListableService;