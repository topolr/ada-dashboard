import { Service } from "adajs";

class TestService extends Service {
	defaultData() {
		return {
			table: {
				cols: [{ title: "Name", key: "name", width: 100 }, { title: "Age", key: "age", width: 100 }, { title: "BirthDay", key: "birthday", width: 100 }],
				data: [
					{ aa: "aaaa1", bb: "bbbbb1", cc: "ccccc1" },
					{ aa: "aaaa2", bb: "bbbbb2", cc: "ccccc2" },
					{ aa: "aaaa3", bb: "bbbbb3", cc: "ccccc3" },
					{ aa: "aaaa1", bb: "bbbbb1", cc: "ccccc1" },
					{ aa: "aaaa2", bb: "bbbbb2", cc: "ccccc2" },
					{ aa: "aaaa3", bb: "bbbbb3", cc: "ccccc3" },
					{ aa: "aaaa1", bb: "bbbbb1", cc: "ccccc1" },
					{ aa: "aaaa2", bb: "bbbbb2", cc: "ccccc2" },
					{ aa: "aaaa3", bb: "bbbbb3", cc: "ccccc3" },
					{ aa: "aaaa1", bb: "bbbbb1", cc: "ccccc1" },
					{ aa: "aaaa2", bb: "bbbbb2", cc: "ccccc2" },
					{ aa: "aaaa3", bb: "bbbbb3", cc: "ccccc3" },
					{ aa: "aaaa1", bb: "bbbbb1", cc: "ccccc1" },
					{ aa: "aaaa2", bb: "bbbbb2", cc: "ccccc2" },
					{ aa: "aaaa3", bb: "bbbbb3", cc: "ccccc3" },
					{ aa: "aaaa1", bb: "bbbbb1", cc: "ccccc1" },
					{ aa: "aaaa2", bb: "bbbbb2", cc: "ccccc2" },
					{ aa: "aaaa3", bb: "bbbbb3", cc: "ccccc3" },
					{ aa: "aaaa1", bb: "bbbbb1", cc: "ccccc1" },
					{ aa: "aaaa2", bb: "bbbbb2", cc: "ccccc2" },
					{ aa: "aaaa3", bb: "bbbbb3", cc: "ccccc3" },
					{ aa: "aaaa1", bb: "bbbbb1", cc: "ccccc1" },
					{ aa: "aaaa2", bb: "bbbbb2", cc: "ccccc2" },
					{ aa: "aaaa3", bb: "bbbbb3", cc: "ccccc3" }
				],
				toolPosition: 'right',
				tools: [
					{ title: 'aa', action: 'aa', icon: "ada-dashboard-add_circle" },
					{ title: 'bb', action: 'bb', icon: "ada-dashboard-adjust" }
				]
			}
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}
}

export default TestService;