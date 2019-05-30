import { view } from "adajs";
import SelectService from "./state.js";
import BaseDetail from './../base';

@view({
    className: "modules-detail-select",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: SelectService
    }
})
class Select extends BaseDetail {
}

export default Select;