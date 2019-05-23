import { Service } from "adajs";

class TestService extends Service {
	defaultData() {
		return {
			table: {
				url: '/table.json',
				cols: [{ title: "Name", key: "name", width: 100 }, { title: "Age", key: "age", width: 100 }, { title: "BirthDay", key: "birthday", width: 100 }],
				toolPosition: 'right',
				tools: [
					{ title: 'aa', action: 'aa', icon: "ada-dashboard-add_circle" },
					{ title: 'bb', action: 'bb', icon: "ada-dashboard-adjust" }
				]
			},
			tree: {
				url: '/tree.json'
			}
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}
}

export default TestService;