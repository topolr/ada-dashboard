import { Service, util, action } from "adajs";

class TreeService extends Service {

	defaultData() {
		return {
			list: [],
			map: {}
		};
	}

	onupdate(current, { list }) {
		current.list = this.set(current, list);
	}

	@action('toggle')
	toggle(current, a) {
		current.map[a.id].open = !current.map[a.id].open;
	}

	set(current, list = [], parentId = null) {
		return list.map(item => {
			let id = util.randomid();
			let result = { id, parent: parentId, info: item, open: false, list: this.set(current, item.list, id) };
			current.map[id] = result;
			return id;
		});
	}
}

export default TreeService;