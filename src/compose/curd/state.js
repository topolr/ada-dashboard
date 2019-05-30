import { Service, action } from "adajs";
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
			tableOption: {},
			_currentRow: null
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}

	@action('show-detail')
	showDetail(current, row) {
		current._currentRow = current.detailFields.map(({ type, key, label }) => {
			return {
				type,
				key,
				label,
				value: row[key] || ''
			}
		});
	}
}

export default CurdService;