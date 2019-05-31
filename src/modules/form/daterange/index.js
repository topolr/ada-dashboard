import { view, subscribe, binder, handler } from "adajs";
import DateService from "./state.js";
import BaseField from "../field";
import Date from '../../datepicker/rangegroup';
import dispatcher from '../../../lib/dispatcher';

@view({
    className: "modules-form-daterange",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: DateService
    }
})
class DateRangeField extends BaseField {
    oncreated() {
        dispatcher.observe(this);
    }

    onunload() {
        dispatcher.unobserve(this);
    }

    @subscribe('click')
    onclick(e) {
        if (!this.getElement().contains(e.target)) {
            this.commit('close');
        }
    }

    @binder('open')
    open() {
        this.commit('open');
    }

    @handler('date-selected')
    dateSelected({ data }) {
        if (data.length === 2) {
            this.commit('set-value', data);
        }
    }

    tags() {
        return { date: Date }
    }
}

export default DateRangeField;