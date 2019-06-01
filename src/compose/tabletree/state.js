import { Service } from "adajs";
import Tree from './../crumbtree';
import Table from './../curd';

class TabletreeService extends Service {
	defaultData() {
		return {
			tableType: Table,
			tableOption: {},
			treeType: Tree,
			treeOption: {}
		};
	}

	onupdate(current, data) {
		this.assign(current, data);
	}
}

export default TabletreeService;