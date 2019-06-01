import { Service } from "adajs";

class SimpleService extends Service {
	defaultData() {
		return {
			list: [],
			rowHeight: 30,
			titleHeight: 40,
			checks: [],
			loading: false
		};
	}

	onupdate(current, data) {
		this.assign(current, data);
	}
}

export default SimpleService;