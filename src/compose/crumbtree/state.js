import { Service, action } from "adajs";

class TreeService extends Service {
	defaultData() {
		return {
			url: '/tree.json',
			parameter: {},
			editURL:'',
			editFields:[],
			addURL:'',
			addFields:[],
			removeURL:'',
			_list: [],
			_crumbs: [],
			_loading: true
		};
	}

	onupdate(current, data) {
		this.assign(current, data);
		return this.request.get(current.url, current.parameter).then(({ data }) => {
			current._list = data;
			current._loading = false;
		});
	}

	@action('setcurmbs')
	setcurmbs(current, crums) {
		current._crumbs = crums.map(a => a).reverse();
	}

	@action('showloading')
	showLoading(current) {
		current._loading = true;
	}

	@action('refresh')
	refresh(current) {
		return this.request.get(current.url, current.parameter).then(({ data }) => {
			current._list = data;
			current._loading = false;
		});
	}
}

export default TreeService;