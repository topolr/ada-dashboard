import { Service, action } from "adajs";

function format(date, format) {
	if (arguments.length === 1) {
		format = date;
		date = new Date();
	}
	let map = {
		y: date.getFullYear(),
		M: (date.getMonth() + 1),
		d: date.getDate(),
		h: date.getHours(),
		m: date.getMinutes(),
		s: date.getSeconds()
	};
	return Reflect.ownKeys(map).reduce((a, b) => {
		return a.replace(new RegExp(`[${b}]+`, "g"), (str) => {
			let value = map[b] + "";
			if (str.length !== value.length) {
				return str.length > value.length ? (Array.apply(null, Array(str.length - value.length)).map(() => "0").join("") + value) : value.substring(str.length);
			} else {
				return value;
			}
		});
	}, format);
}

class DateService extends Service {
	defaultData() {
		return {
			name: "",
			label: "",
			placeholder: "",
			description: "",
			error: false,
			errorMsg: "",
			required: false,
			check: null,
			value: '',
			format: 'yyyy-MM-dd',
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

	@action('set-value')
	setValue(current, dates) {
		current.value = `${format(dates[0], current.format)} ~ ${format(dates[1], current.format)}`;
		current._open = false;
	}
}

export default DateService;