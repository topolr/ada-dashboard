import {view} from "adajs";
import SelectService from "./state.js";
import BaseField from "./../field";

@view({
    className: "select",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: SelectService
    }
})
class Select extends BaseField {
    getValue() {
        return this.finder('input').getElement().value;
    }

    setValue(value) {
        return this.commit('setValue', value);
    }

    showError(info) {
        return this.commit("showError", info);
    }

    hideError() {
        return this.commit("hideError");
    }

    getName() {
        return this.getCurrentState().name;
    }

    check() {
        return this.commit('check', this.getValue()).then(() => this.getCurrentState().error === false);
    }
}

export default Select;