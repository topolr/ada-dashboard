import { ViewGroup } from "adajs";

class BaseField extends ViewGroup {
	getName() {
		return null;
	}

	getValue() {
	}

	setValue() {
		return null;
	}

	check() {
		return true;
	}

	showError(info) {
	}

	hideError() {
	}
}

export default BaseField;