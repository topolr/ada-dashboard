import { Service } from "adajs";
import Input from './../../modules/form/input';
import Date from './../../modules/form/date';
import Daterange from './../../modules/form/daterange';

class TabletreeService extends Service {
	defaultData() {
		return {
			tableOption: {
				btns: [
					{ name: "search", icon: "ada-dashboard-filter_list", action: 'search' },
					{ name: "add", icon: "ada-dashboard-add", action: 'add' },
					{ name: "remove", icon: "ada-dashboard-close", action: 'remove' }
				],
				editURL: '',
				addURL: '',
				removeURL: '',
				searchURL: '',
				detailURL: '/detail.json',
				editFields: [
					{ type: Input, label: 'username', name: 'username' }
				],
				detailFields: [
					{ type: Input, key: 'name', label: 'name' },
					{ type: Input, key: 'age', label: 'age' }
				],
				addFields: [
					{ type: Input, label: 'username', name: 'username' },
					{ type: Input, label: 'password', name: 'password' },
					{ type: Date, label: 'password', name: 'password' },
					{ type: Daterange, label: 'password', name: 'password' }
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
						{ title: 'edit', action: 'edit', icon: 'ada-dashboard-mode_edit' },
						{ title: 'remove', action: 'remove', icon: "ada-dashboard-close" }
					]
				}
			},
			treeOption: {
				editURL: '',
				editFields: [
					{ type: Input, label: 'username', name: 'username' }
				],
				addURL: '',
				addFields: [
					{ type: Input, label: 'username', name: 'username' },
					{ type: Input, label: 'password', name: 'password' },
					{ type: Date, label: 'password', name: 'password' },
					{ type: Daterange, label: 'password', name: 'password' }
				],
				removeURL: ''
			}
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}
}

export default TabletreeService;