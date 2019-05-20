import { view, View, binder } from "adajs";
import HeadService from "./state.js";

@view({
    className: "table-head",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: HeadService
    }
})
class Head extends View {
    @binder('checkAll')
    checkAll() {
        this.dispatchEvent('checkAll');
    }

    scrollLeft(a) {
        this.getElement().scrollLeft = a;
    }
}

export default Head;