import {Service, util} from "adajs";

class FormService extends Service {
	defaultData() {
		return {
			fields: [],
			btns:[]
		};
	}

	onupdate(current, data) {
		return util.extend(current, data);
	}
}

export default FormService;