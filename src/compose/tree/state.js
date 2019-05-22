import { Service, util, action } from "adajs";

class TreeService extends Service {

	defaultData() {
		return {
			list: [],
			map: {},
			check: true
		};
	}

	onupdate(current, { list }) {
		current.list = this.set(current, list);
	}

	@action('toggle')
	toggle(current, a) {
		current.map[a.id].open = !current.map[a.id].open;
	}

	@action('toggleselect')
	toggleSelect(current, a) {
		let target = current.map[a.id];
		target.selected = !target.selected;
		this.sub(current, target.list, target.selected);
		target = target.parent;
		while (target) {
			target = current.map[target];
			let has = target.list.map(a => current.map[a]).find(a => a.selected === true);
			target.selected = has !== undefined;
			target = current.map[target.id].parent;
		}
	}

	@action("active")
	active(current, a) {
		Reflect.ownKeys(current.map).forEach(a => current.map[a].actived = false);
		current.map[a.id].actived = !current.map[a.id].actived;
	}

	sub(current, list, selected) {
		list.map(a => current.map[a]).forEach(a => {
			a.selected = selected;
			this.sub(current, a.list, selected);
		});
	}

	set(current, list = [], parentId = null) {
		return list.map(item => {
			let id = util.randomid();
			let result = { id, parent: parentId, info: item, actived: false, open: false, selected: false, list: this.set(current, item.list, id) };
			current.map[id] = result;
			return id;
		});
	}
}

export default TreeService;