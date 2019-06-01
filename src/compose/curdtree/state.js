import { Service } from "adajs";
import Tree from './../crumbtree';

class CurdtreeService extends Service {
	defaultData() {
		return {
			treeType: Tree,
			treeOption: {}
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}
}

export default CurdtreeService;