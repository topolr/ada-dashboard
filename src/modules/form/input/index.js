import { view } from "adajs";
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

    disabled() {
        return this.commit('disabled');
    }

    undisabled() {
        return this.commit('undisabled');
    }

    getName() {
        return this.getCurrentState().name;
    }

    check() {
        let { checkShowLoading } = this.getCurrentState();
        let ps = Promise.resolve();
        if (checkShowLoading) {
            ps = ps.then(() => this.commit('show-loading'));
        }
        return ps.then(() => {
            return this.commit('check', this.getValue()).then(() => this.getCurrentState()._error === false);
        });
    }
}

export default Input;