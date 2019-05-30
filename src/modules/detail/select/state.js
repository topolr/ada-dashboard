import { Service } from "adajs";

class SelectService extends Service {
	defaultData() {
		return {
			label: '',
			value: ''
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}
}

export default SelectService;