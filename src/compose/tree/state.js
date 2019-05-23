import { Service, action } from "adajs";

class TreeService extends Service {
	defaultData() {
		return {
			url: '/tree.json',
			parameter: {},
			list: [],
			crumbs: [],
			loading: true
		};
	}

	onupdate(current, data) {
		current.url = data.url;
		current.parameter = data.parameter || {};
		return this.request.get(current.url, current.parameter).then(({ data }) => {
			current.list = data;
			current.loading = false;
		});
	}

	@action('setcurmbs')
	setcurmbs(current, crums) {
		current.crumbs = crums.map(a => a).reverse();
	}

	@action('showloading')
	showLoading(current) {
		current.loading = true;
	}

	@action('refresh')
	refresh(current) {
		return this.request.get(current.url, current.parameter).then(({ data }) => {
			current.list = data;
			current.loading = false;
		});
	}
}

export default TreeService;