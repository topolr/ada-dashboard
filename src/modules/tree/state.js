import { Service, util, action, compute } from "adajs";

class TreeService extends Service {

	defaultData() {
		return {
			list: [],
			map: {},
			check: true
		};
	}

	onupdate(current, { list, check = true }) {
		current.list = this.set(current, list);
		current.check = check;
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

	@action('closeall')
	closeAll(current) {
		Reflect.ownKeys(current.map).forEach(a => current.map[a].open = false);
	}

	@action('unselect')
	unselect(current) {
		Reflect.ownKeys(current.map).forEach(a => current.map[a].actived = false);
	}

	@compute('crumb')
	getCrumb(current, item) {
		let r = [];
		let target = item.id;
		while (target) {
			target = current.map[target];
			r.push(target.info);
			target = target.parent;
		}
		return r;
	}

	@compute('activeNode')
	getActiveNode(current) {
		let id = Reflect.ownKeys(current.map).find(id => current.map[id].actived === true);
		return current.map[id];
	}

	sub(current, list, selected) {
		list.map(a => current.map[a]).forEach(a => {
			a.selected = selected;
			this.sub(current, a.list, selected);
		});
	}

	set(current, list = [], parentId = null) {
		return list.map(item => {
			let id = item.id || util.randomid();
			let cache = current.map[id];
			let result = null;
			if (cache) {
				result = {
					id,
					parent: parentId,
					info: item,
					actived: cache.actived,
					open: cache.open,
					selected: cache.selected,
					list: this.set(current, item.list, id)
				};
			} else {
				result = {
					id,
					parent: parentId,
					info: item,
					actived: false,
					open: false,
					selected: false,
					list: this.set(current, item.list, id)
				};
			}
			current.map[id] = Object.assign(cache || {}, result);
			return id;
		});
	}
}

export default TreeService;