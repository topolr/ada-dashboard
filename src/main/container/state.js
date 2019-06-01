import { Service, action, util } from "adajs";
import Tabpage from './../tabpage';

class ContainerService extends Service {
	defaultData() {
		return {
			menuURL: '/menu.json',
			indexPage: 'test/table/index.js',
			_menuMap: {},
			_menuList: [],
			_crumbs: [],
			_open: false,
			_currentPageType: null,
			_currentPageOption: null
		};
	}

	onupdate(current, data) {
		this.assign(current, data);
		current._menuMap = {};
		return this.request.get(current.menuURL).then(({ data = [] }) => {
			data.unshift({
				name: 'HOME',
				icon: "ada-dashboard-directions",
				path: '/',
				page: current.indexPage
			});
			current._menuList = this.setMenu(current, data);
		});
	}

	setMenu(current, list, parent = '') {
		return list.map(item => {
			let id = util.randomid();
			item._id = id;
			item._parent = parent;
			item._open = false;
			item._active = false;
			current._menuMap[id] = item;
			if (item.list) {
				item.list = this.setMenu(current, item.list, id);
			}
			return id;
		});
	}

	@action('toggleWin')
	toggleWin(current) {
		current._open = !current._open;
	}

	@action('flip')
	flip(current, item) {
		Reflect.ownKeys(current._menuMap).forEach(a => {
			current._menuMap[a]._active = false;
			current._menuMap[a]._open = false;
		});
		let target = current._menuMap[item._id], crumbs = [];
		while (target) {
			target._open = true;
			target._active = true;
			crumbs.push(target);
			target = current._menuMap[target._parent];
		}
		if (crumbs.length > 2) {
			crumbs.shift();
		}
		current._crumbs = crumbs.reverse();
		let page = null;
		if (crumbs.length === 1) {
			if (!(crumbs[0].list && crumbs[0].list.length > 0)) {
				page = crumbs[0].page;
				current._currentPageOption = {};
			}
		} else if (crumbs.length === 2) {
			if (crumbs[1].list && crumbs[1].list.length > 0) {
				current._currentPageType = Tabpage;
				let tabs = crumbs[1].list.map(a => current._menuMap[a]);
				let target = tabs.find(tab => tab._active === true);
				if (!target) {
					tabs[0]._active = true;
				}
				current._currentPageOption = { tabs };
			} else {
				page = crumbs[1].page;
				current._currentPageOption = {};
			}
		}
		if (page) {
			return import(page).then(type => {
				current._currentPageType = type;
			});
		}
	}
}

export default ContainerService;