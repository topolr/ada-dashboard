import { view, binder, handler, View } from "adajs";
import AlertService from "./state";

@view({
	className: "alert",
	template: "./template.html",
	style: "./style.scss",
	dataset: {
		service: AlertService
	}
})
class Alert extends View {
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

export default Alert;