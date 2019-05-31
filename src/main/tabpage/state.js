import { Service } from "adajs";
import Table from './../../compose/fliptable';

class TabpageService extends Service {
	defaultData() {
		return {
			_tabs: [],
			_map: {}
		};
	}

	onupdate(current, data) {
		current._tabs = data.tabs.map(tab => {
			return {
				name: tab.name,
				page: tab.page,
				path: tab.path,
				active: tab._active,
				id: tab._id,
				type: current._map[tab._id]
			};
		});
		let target = current._tabs.find(a => a.active === true);
		if (target && !target.type) {
			return import(target.page).then(type => {
				target.type = type;
				current._map[target.id] = type;
			}).then(() => current);
		}
	}
}

export default TabpageService;