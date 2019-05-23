import {Service, action, util} from "adajs";

class LoadingService extends Service {
	defaultData() {
		return {
			icon: ':ada-dashboard-autorenew',
			circle: true,
			color: "black",
			content: "loading..."
		}
	}

	@action("set")
	set(current, info) {
		return util.extend(current, info);
	}
}

export default LoadingService;