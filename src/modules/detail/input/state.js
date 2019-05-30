import { Service } from "adajs";

class InputService extends Service {
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

export default InputService;