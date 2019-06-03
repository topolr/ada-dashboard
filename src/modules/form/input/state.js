import { Service, action } from "adajs";

class InputService extends Service {
	defaultData() {
		return {
			name: "",
			label: "",
			value: "",
			placeholder: "",
			inputType: "text",
			description: "",
			required: false,
			disabled: false,
			maxLength: Infinity,
			minLength: 0,
			regexp: '',
			check: null,
			icon: "",
			checkShowLoading: false,
			_loading: false,
			_error: false,
			_errorMsg: ""
		};
	}

	onupdate(current, data) {
		this.assign(current, data);
	}

	@action("setValue")
	setValue(current, value) {
		current.value = value;
	}

	@action('disabled')
	disabled(current) {
		current.disabled = true;
	}

	@action('undisabled')
	undisabled(current) {
		current.disabled = false;
	}

	@action("showError")
	showError(current, info) {
		current._error = true;
		current._errorMsg = info || "";
	}

	@action("hideError")
	hideError(current) {
		current._error = false;
	}

	@action('show-loading')
	showLoading(current) {
		current._loading = true;
	}

	@action("check")
	check(current, value) {
		let error = false, errorMsg = "";
		if (current.required) {
			if (!value) {
				error = true;
				errorMsg = '字段不能为空';
			}
		}
		if (!error) {
			error = !(value.length >= current.minLength && value.length <= current.maxLength);
			if (error) {
				errorMsg = `长度应该在${current.minLength}-${current.maxLength}之间`;
			}
		}
		if (!error && current.regexp) {
			error = new RegExp(current.regexp).test(value);
			if (error) {
				errorMsg = '格式错误';
			}
		}
		if (!error && current.check) {
			return Promise.resolve().then(() => current.check(current, value)).then(({ result, msg }) => {
				error = result;
				errorMsg = msg;
				if (!error) {
					errorMsg = '';
				}
				current._loading = false;
				current._error = error;
				current._errorMsg = errorMsg;
			});
		} else {
			if (!error) {
				errorMsg = '';
			}
			current._loading = false;
			current._error = error;
			current._errorMsg = errorMsg;
		}
	}
}

export default InputService;