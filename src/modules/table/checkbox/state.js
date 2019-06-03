import { Service } from "adajs";

class CheckboxService extends Service {
	defaultData() {
		return {
			checks: [],
			isCheckAll: false,
			rowHeight: 30,
			titleHeight: 40,
			multiCheck:true
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}
}

export default CheckboxService;