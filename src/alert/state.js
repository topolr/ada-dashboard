import { Service } from "adajs";

class AlertService extends Service {
	defaultData() {
		return {
			content: "this is alert",
			btns: [
				{ name: "close", action: "close" }
			]
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}
}

export default AlertService;