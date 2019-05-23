import { Service, action } from "adajs";

class TreeService extends Service {
	defaultData() {
		return {
			url: '/tree.json',
			parameter: {},
			list: [],
			crumbs: []
		};
	}

	onupdate(current, data) {
		current.url = data.url;
		current.parameter = data.parameter || {};
		return this.request.get(current.url, current.parameter).then(({ data }) => {
			current.list = data;
		});
	}

	@action('setcurmbs')
	setcurmbs(current, crums) {
		current.crumbs = crums.map(a => a).reverse();
	}
}

export default TreeService;