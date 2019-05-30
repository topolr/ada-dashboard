import {view} from "adajs";
import InputService from "./state.js";
import BaseField from "./../field";

@view({
    className: "field-input",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: InputService
    }
})
class Input extends BaseField {
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

export default Input;