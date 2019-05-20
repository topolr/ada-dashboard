import { Service } from "adajs";

class CheckboxService extends Service {
	defaultData() {
		return {
			checks: [],
			isCheckAll: false,
			rowHeight: 30,
			titleHeight: 40
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
		current.isCheckAll = current.checks.find(a => a !== true);
	}
}

export default CheckboxService;