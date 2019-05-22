import { view, View, binder } from "adajs";
import SimpleService from "./state.js.js";

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
    checkRow({ index }) {
        this.dispatchEvent('checkRow', { index });
    }
}

export default Simple;