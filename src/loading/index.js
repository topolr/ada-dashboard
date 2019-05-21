import { view, View } from "adajs";
import LoadingService from "./state";

@view({
	className: "loading",
	template: "./template.html",
	style: "./style.scss",
	dataset: {
		service: LoadingService
	}
})

class Loading extends View {
	oncreated() {
		setTimeout(() => {
			if (!this.isRemoved()) {
				this.className.add('in');
			}
		}, 100);
	}

	showLoading(content) {
		this.getDataSet().commit("set", {
			icon: ':ada-dashboard-autorenew',
			circle: true,
			color: "black",
			content: content || "loading..."
		});
	}

	showSuccess(content) {
		this.getDataSet().commit("set", {
			icon: ':ada-dashboard-check_circle',
			circle: false,
			color: "green",
			content: content || "Success done"
		});
	}

	showError(content) {
		this.getDataSet().commit("set", {
			icon: ':ada-dashboard-error',
			circle: false,
			color: "red",
			content: content || "Error occur"
		});
	}

	close(delay = 2000) {
		setTimeout(() => {
			if (!this.isRemoved()) {
				this.className.remove('in');
				setTimeout(() => {
					this.getParent() && this.getParent().removeChild(this);
				}, 400);
			}
		}, delay);
	}
}

export default Loading;