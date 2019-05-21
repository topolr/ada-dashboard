import { view, binder, View } from "adajs";
import TreeService from "./state/simple";

@view({
	className: "simpletree",
	template: "./template/simple.html",
	style: "./style/simple.scss",
	dataset: {
		service: TreeService
	}
})
class SimpleTree extends View {
	@binder("toggle")
	toggle({ item }) {
		this.commit("toggle", item);
	}

	@binder("active")
	active({ item }) {
		this.commit("active", item);
	}
}


export default SimpleTree;