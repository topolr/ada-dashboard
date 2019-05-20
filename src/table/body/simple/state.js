import { Service } from "adajs";

class SimpleService extends Service {
	defaultData() {
		return {
			list: []
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}
}

export default SimpleService;