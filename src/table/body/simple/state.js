import { Service } from "adajs";

class SimpleService extends Service {
	defaultData() {
		return {
			list: [],
			checkbox:false,
			rowHeight:30,
			titleHeight:40
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}
}

export default SimpleService;