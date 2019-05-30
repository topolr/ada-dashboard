import { view } from "adajs";
import InputService from "./state.js";
import BaseDetail from './../base';

@view({
    className: "modules-detail-input",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: InputService
    }
})
class Input extends BaseDetail {
}

export default Input;