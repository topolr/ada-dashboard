import { view, binder, subscribe } from "adajs";
import SelectService from "./state.js";
import BaseField from "./../field";
import dispatcher from '../../../lib/dispatcher';
import { isRemoved } from './../util';

@view({
    className: "select",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: SelectService
    }
})
class Select extends BaseField {
    oncreated() {
        dispatcher.observe(this);
    }

    onunload() {
        dispatcher.unobserve(this);
    }

    @subscribe('click')
    onclick(e) {
        if (!this.getElement().contains(e.target)) {
            if (!isRemoved(e.target)) {
                this.commit('close');
            }
        }
    }

    @binder('open')
    open() {
        this.commit('open');
    }

    @binder('select')
    select({ option }) {
        this.commit('select', option);
    }

    getValue() {
        let { _current } = this.getCurrentState();
        return _current ? _current.value : '';
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
        return this.commit('check', this.getValue()).then(() => this.getCurrentState()._error === false);
    }
}

export default Select;