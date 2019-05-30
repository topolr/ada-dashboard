import {Service, action} from "adajs";

class InputService extends Service {
	defaultData() {
		return {
			name: "",
			label: "",
			placeholder: "",
			inputType: "text",
			description: "",
			value: "",
			error: false,
			errorMsg: "",
			required: false,
			check: null
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}

	@action("setValue")
	setValue(current, value) {
		current.value = value;
	}

	@action("showError")
	showError(current, info) {
		current.error = true;
		current.errorMsg = info || "";
	}

	@action("hideError")
	hideError(current) {
		current.error = false;
	}

	@action("check")
	check(current, value) {
		if (current.required) {
			if (!value) {
				current.error = true;
				current.errorMsg = '字段不能为空';
			} else {
				current.error = false;
			}
		}
		if (!current.error && current.check) {
			return Promise.resolve().then(current.check(current, value));
		}
	}
}

export default InputService;