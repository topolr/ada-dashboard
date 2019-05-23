import { Service } from "adajs";

class ListableService extends Service {
	defaultData() {
		return {
			cols: [],
			list: [],
			tools: [],
			_header: [],
			_body: []
		};
	}

	onupdate(current, data) {
		super.onupdate(current, data);
		this.getTableData(current);
	}

	getTableData(current) {
		current._header = current.cols.map(({ width, title }) => {
			return { title, width };
		});
		current._body = current.list.map(item => {
			return current.cols.map(({ key, width }) => {
				return { value: item[key], width, item };
			});
		});
	}
}

export default ListableService;