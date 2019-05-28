import { Service, action, util } from "adajs";

class MenuService extends Service {
	defaultData() {
		return {
			url: '/menu.json',
			_list: []
		};
	}

	onupdate(current, data) {
		this.assign(current, data);
		return this.request.get(current.url).then(({ data }) => {
			data.forEach(a => {
				a._open = false;
				a._id = util.randomid();
			});
			current._list = data;
		});
	}

	@action('active')
	active(current, item) {
		current._list.forEach(_item => {
			if (_item._id === item._id) {
				_item._open = true;
			} else {
				_item._open = false;
			}
		});
	}
}

export default MenuService;