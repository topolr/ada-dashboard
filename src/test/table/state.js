import { Service } from "adajs";
import Input from './../../modules/form/input';
import Date from './../../modules/form/date';
import Daterange from './../../modules/form/daterange';
import Text from './../../modules/form/text';
import Select from './../../modules/form/select';

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
				detailURL: '/detail.json',
				editFields: [
					{ type: Input, label: 'username', name: 'username' }
				],
				detailFields: [
					{ type: Input, key: 'name', label: 'name' },
					{ type: Input, key: 'age', label: 'age' }
				],
				addFields: [
					{ type: Input, label: 'username', name: 'username', required: true },
					{ type: Date, label: 'password', name: 'password', required: true },
					{ type: Daterange, label: 'password', name: 'password', required: true },
					{ type: Text, label: 'password', name: 'password', required: true },
					{ type: Select, label: 'password', name: 'password', required: true,options:[
						{name:'aa',value:'1'},
						{name:'bb',value:'2'},
						{name:'cc',value:'3'},
						{name:'dd',value:'4'}
					]}
				],
				filterFields: [
					{ type: Input, label: 'username', name: 'username' },
					{ type: Input, label: 'password', name: 'password' }
				],
				tableOption: {
					url: '/table.json',
					cols: [{ title: "Name", key: "name", width: 200 }, { title: "Age", key: "age", width: 300 }, { title: "BirthDay", key: "birthday", width: 300 }],
					toolPosition: 'right',
					multiCheck:false,
					tools: [
						{ title: 'detail', action: 'detail', icon: "ada-dashboard-description" },
						{ title: 'edit', action: 'edit', icon: 'ada-dashboard-mode_edit' },
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