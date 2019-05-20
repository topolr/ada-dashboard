import { view, View, binder } from "adajs";
import CheckboxService from "./state.js";

@view({
    className: "table-checkbox",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: CheckboxService
    }
})
class Checkbox extends View {
    @binder('checkAll')
    checkAll() {
        this.dispatchEvent('checkAll');
    }

    scrollTop(top) {
        this.finder("body").getElement().scrollTop = top;
    }
}

export default Checkbox;