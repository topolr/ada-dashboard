import { view, View, binder } from "adajs";
import SimpleService from "./state.js";

@view({
    className: "table-simple",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: SimpleService
    }
})
class Simple extends View {
    @binder('checkRow')
    checkRow({ row, index }) {
        this.dispatchEvent('checkRow', { row, index });
    }
}

export default Simple;