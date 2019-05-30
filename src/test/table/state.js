import { Service } from "adajs";
import Input from './../../modules/form/input';

class TableService extends Service {
	defaultData() {
		return {
			table: {
				btns: [
					{ name: "filter", icon: "ada-dashboard-filter_list", action: 'filter' },
					{ name: "add", icon: "ada-dashboard-add", action: 'add' }
				],
				editURL: '',
				addURL: '',
				removeURL: '',
				findURL: '',
				editFields: [],
				detailFields: [
					{ type: Input, key: 'name', label: 'name' },
					{ type: Input, key: 'age', label: 'age' }
				],
				addFields: [
					{ type: Input, label: 'username', name: 'username' },
					{ type: Input, label: 'password', name: 'password' }
				],
				filterFields: [],
				tableOption: {
					url: '/table.json',
					cols: [{ title: "Name", key: "name", width: 200 }, { title: "Age", key: "age", width: 300 }, { title: "BirthDay", key: "birthday", width: 300 }],
					toolPosition: 'right',
					tools: [
						{ title: 'aa', action: 'aa', icon: "ada-dashboard-add_circle" },
						{ title: 'bb', action: 'bb', icon: "ada-dashboard-adjust" }
					]
				}
			}
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}
}

export default TableService;