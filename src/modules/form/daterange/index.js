import { view, handler } from "adajs";
import DateService from "./state";
import Date from '../../datepicker/rangegroup';
import DateInput from './../date';

@view({
    className: "modules-form-daterange",
    template: "./../date/template.html",
    style: "./style.scss",
    dataset: {
        service: DateService
    }
})
class DateRangeField extends DateInput {
    tags() {
        return { date: Date }
    }

    @handler('date-selected')
    dateSelected({ data }) {
        if (data.length === 2) {
            this.commit('set-value', data);
        }
    }
}

export default DateRangeField;