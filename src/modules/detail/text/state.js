import { Service } from "adajs";

class TextService extends Service {
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

export default TextService;