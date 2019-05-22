import { Service } from "adajs";

class ToaseService extends Service {
	defaultData() {
		return {
			content: "this is toast"
		}
	}

	onupdate(current, info) {
		Object.assign(current, info);
	}
}

export default ToaseService;