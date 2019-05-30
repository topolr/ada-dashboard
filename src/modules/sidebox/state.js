import { Service } from "adajs";

class SideboxService extends Service {
	defaultData() {
		return {
			title: '',
			btns: [],
			innerType: null,
			innerOption: {}
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}
}

export default SideboxService;