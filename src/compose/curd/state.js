import { Service } from "adajs";
import Table from './../fliptable';

class CurdService extends Service {
	defaultData() {
		return {
			btns: [],
			editURL: '',
			addURL: '',
			removeURL: '',
			findURL: '',
			editFields: [],
			detailFields: [],
			addFields: [],
			filterFields: [],
			tableType: Table,
			tableOption: {}
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}
}

export default CurdService;