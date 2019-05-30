import {view} from "adajs";
import TextService from "./state.js";
import BaseField from "./../field";

@view({
    className: "field-text",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: TextService
    }
})
class Text extends BaseField {
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

export default Text;