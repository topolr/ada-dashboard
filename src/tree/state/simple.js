import { Service, action } from "adajs";
import util from "./util";

class TreeService extends Service {
	defaultData() {
		return {
			list: []
		};
	}

	onupdate(current, { list }) {
		current.list = util.initAll(list);
	}

	@action("toggle")
	toggle(current, item) {
		let _item = util.findItem(current, item);
		_item._opened = !_item._opened;
	}

	@action("active")
	active(current, item) {
		util.unactiveAll(current.list);
		item._actived = true;
	}
}

export default TreeService;