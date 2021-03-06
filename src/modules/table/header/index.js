import { view, View, binder } from "adajs";
import HeadService from "./state";

@view({
    className: "table-header",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: HeadService
    }
})
class Head extends View {
    scrollLeft(a) {
        this.getElement().scrollLeft = a;
    }
}

export default Head;