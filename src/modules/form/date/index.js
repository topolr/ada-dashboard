import { view } from "adajs";
import DateService from "./state.js";
import BaseField from "./../field";
import Date from './../../datepicker';

@view({
    className: "modules-form-date",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: DateService
    }
})
class DateField extends BaseField {
    tags() {
        return { date: Date }
    }
}

export default DateField;