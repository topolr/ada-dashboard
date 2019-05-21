import { Service } from "adajs";

class HeadService extends Service {
	defaultData() {
		return {
			list: [],
			checkbox:false,
			rowHeight:30,
			titleHeight:40,
			checks:[]
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}
}

export default HeadService;