import { Service, action } from "adajs";

class DetailBoardService extends Service {
	defaultData() {
		return {
			title: '',
			btns: [],
			url: '',
			fields: [],
			parameter: {},
			_fields: [],
			_loading: true
		};
	}

	onupdate(current, data) {
		this.assign(current, data);
	}

	@action('show-loading')
	showLoading(current) {
		current._loading = true;
	}

	@action('get-detail')
	getDetail(current) {
		return this.request.get(current.url).then(({ data }) => {
			current._loading = false;
			current._fields = current.fields.map(({ type, key, label }) => {
				return { type, key, label, value: data[key] };
			});
		});
	}
}

export default DetailBoardService;