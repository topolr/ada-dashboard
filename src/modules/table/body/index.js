import { view, View, binder } from "adajs";
import SimpleService from "./state";

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
    checkRow({ index, row }) {
        this.dispatchEvent('checkRow', { index, row });
    }
}

export default Simple;