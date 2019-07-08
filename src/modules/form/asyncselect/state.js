import { action } from "adajs";
import SelectService from './../select/state';

class AsyncselectService extends SelectService {
	defaultData() {
		return {
			name: "",
			label: "",
			description: "",
			value: "",
			options: [],
			url: "",
			parameter: {},
			disabled: false,
			valuePropName: 'id',
			namePropName: 'name',
			_current: [],
			_loading: false,
			_error: false,
			_errorMsg: "",
			_open: false
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}

	@action('show-loading')
	showLoading(current) {
		current._loading = true;
	}

	@action('hide-loading')
	hideLoading(current) {
		current._loading = false;
	}

	@action('get-list')
	getList(current) {
		let { url, parameter, valuePropName, namePropName } = current;
		return this.request.get(url, parameter).then(({ data }) => {
			current._loading = false;
			current.options = data.list.map(a => {
				return { name: a[namePropName], value: a[valuePropName] };
			});
		});
	}
}

export default AsyncselectService;