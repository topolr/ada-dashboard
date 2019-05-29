import { Service, action, util } from "adajs";

class MenuService extends Service {
	defaultData() {
		return {
			map: {},
			list:[]
		};
	}

	onupdate(current, data) {
		this.assign(current,data);
	}
}

export default MenuService;