import { Service, action } from "adajs";
import Tree from './../../curdtree';

class SelectreeService extends Service {
	defaultData() {
		return {
			treeType: Tree,
			treeOption: {},
			name: "",
			label: "",
			value: [],
			placeholder: "",
			inputType: "text",
			description: "",
			required: false,
			disabled: false,
			queryDetailURL: '',
			_list: [],
			_loading: false
		};
	}

	onupdate(current, data) {
		this.assign(current, data);
	}

	@action('set-value')
	setValue(current, data = []) {
		current.value = data;
		current._loading = true;
	}

	@action('show-loading')
	showLoading(current) {
		current._loading = true;
	}

	@action('load-detail')
	loadDetail(current) {
		if (current.value.length > 0) {
			return this.request.get(current.queryDetailURL, { ids: current.value.join(',') }).then(({ data }) => {
				current._loading = false;
				current._list = data.map(a => {
					return { id: a.id, name: a.nodeName };
				});
			});
		} else {
			current._loading = false;
		}
	}
}

export default SelectreeService;