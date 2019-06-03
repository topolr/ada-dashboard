import {Service, util} from "adajs";

class FormService extends Service {
	defaultData() {
		return {
			fields: []
		};
	}

	onupdate(current, data) {
		return util.extend(current, data);
	}
}

export default FormService;