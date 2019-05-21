import { view, binder, BondViewGroup } from "adajs";
import MessageboxService from "./state";

@view({
	className: "messagebox",
	template: "./template.html",
	style: "./style.scss",
	dataset: {
		service: MessageboxService
	}
})
class Messagebox extends BondViewGroup {
	oncreated() {
		setTimeout(() => this.className.add('in'), 100);
	}

	@binder("action")
	action({ item }) {
		this.emit(item.action, item);
	}

	close() {
		this.className.remove('in');
		setTimeout(() => {
			this.getParent() && this.getParent().removeChild(this);
		}, 400);
	}
}

export default Messagebox;