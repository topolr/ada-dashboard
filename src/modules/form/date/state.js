import { Service, action } from "adajs";
import { formatDate } from './../util';

class DateService extends Service {
	defaultData() {
		return {
			name: "",
			label: "",
			placeholder: "",
			description: "",
			required: false,
			disabled: false,
			value: '',
			format: 'yyyy-MM-dd',
			check: null,
			_error: false,
			_errorMsg: "",
			_open: false
		};
	}

	onupdate(current, data) {
		this.assign(current, data);
	}

	@action('open')
	open(current) {
		current._open = true;
	}

	@action('close')
	close(current) {
		current._open = false;
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

	@action('set-value')
	setValue(current, dates) {
		current.value = `${formatDate(dates[0], current.format)}`;
		current._open = false;
	}

	@action('check')
	check(current) {
		let error = false, errorMsg = "", value = current.value;
		if (current.required) {
			if (!value) {
				error = true;
				errorMsg = '字段不能为空';
			}
		}
		if (!error) {
			errorMsg = '';
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

export default DateService;