import { Service, action, View, ViewConnector, util } from "adajs";

class TabService extends Service {
	defaultData() {
		return {
			tabs: []
		};
	}

	onupdate(current, data) {
		data.tabs.forEach(tab => {
			let target = current.tabs.find(_tab => _tab.name === tab.name);
			if (target) {
				target.option = tab.option;
			} else {
				if (tab.name) {
					current.tabs.push(Object.assign({ loaded: false }, tab));
				}
			}
		});
		let target = current.tabs.find(tab => tab.active === true);
		if (target) {
			target.loaded = true;
		}
	}

	@action("toggle")
	toggle(current, item) {
		current.tabs.forEach(_item => {
			if (_item.name === item.name) {
				_item.active = true;
				_item.loaded = true;
			} else {
				_item.active = false;
			}
		});
	}
}

export default TabService;
