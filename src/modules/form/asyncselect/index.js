import { view } from "adajs";
import AsyncselectService from "./state.js";
import Select from './../select';

@view({
    className: "select",
    template: "./../select/template.html",
    style: "./../select/style.scss",
    dataset: {
        service: AsyncselectService
    }
})
class Asyncselect extends Select {
    onready() {
        this.commit('show-loading').then(() => this.commit('get-list'));
    }
}

export default Asyncselect;