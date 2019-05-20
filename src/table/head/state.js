import { Service } from "adajs";

class HeadService extends Service {
	defaultData() {
		return {
			list: []
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}
}

export default HeadService;