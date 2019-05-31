import { Service } from "adajs";
import Input from './../../modules/form/input';

class TableService extends Service {
	defaultData() {
		return {
			table: {
				btns: [
					{ name: "search", icon: "ada-dashboard-filter_list", action: 'search' },
					{ name: "add", icon: "ada-dashboard-add", action: 'add' },
					{ name: "remove", icon: "ada-dashboard-close", action: 'remove' }
				],
				editURL: '',
				addURL: '',
				removeURL: '',
				searchURL: '',
				detailURL:'/detail.json',
				editFields: [],
				detailFields: [
					{ type: Input, key: 'name', label: 'name' },
					{ type: Input, key: 'age', label: 'age' }
				],
				addFields: [
					{ type: Input, label: 'username', name: 'username' },
					{ type: Input, label: 'password', name: 'password' }
				],
				filterFields: [
					{ type: Input, label: 'username', name: 'username' },
					{ type: Input, label: 'password', name: 'password' }
				],
				tableOption: {
					url: '/table.json',
					cols: [{ title: "Name", key: "name", width: 200 }, { title: "Age", key: "age", width: 300 }, { title: "BirthDay", key: "birthday", width: 300 }],
					toolPosition: 'right',
					tools: [
						{ title: 'detail', action: 'detail', icon: "ada-dashboard-description" },
						{ title: 'remove', action: 'remove', icon: "ada-dashboard-close" }
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