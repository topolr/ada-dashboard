import { BondViewGroup } from "adajs";

class BaseField extends BondViewGroup {
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