import { view, subscribe, binder, handler } from "adajs";
import DateService from "./state.js";
import BaseField from "../field";
import Date from '../../datepicker/pannel';
import dispatcher from '../../../lib/dispatcher';
import {isRemoved} from './../util';

@view({
    className: "modules-form-date",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: DateService
    }
})
class DateField extends BaseField {
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

    @handler('date-selected')
    dateSelected({ data }) {
        this.commit('set-value', data);
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

    tags() {
        return { date: Date }
    }

    check() {
        return this.commit('check').then(() => this.getCurrentState()._error === false);
    }
}

export default DateField;