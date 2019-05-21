import { Service } from "adajs";

class SimpleService extends Service {
	defaultData() {
		return {
			list: [],
			rowHeight:30,
			titleHeight:40,
			checks:[]
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}
}

export default SimpleService;