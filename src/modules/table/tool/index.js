import { view, View, binder } from "adajs";
import ToolService from "./state";

@view({
    className: "table-tool",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: ToolService
    }
})
class Tool extends View {
    scrollTop(top) {
        this.finder("body").getElement().scrollTop = top;
    }

    @binder('action')
    action({ item, index }) {
        this.dispatchEvent(`table-tool-${item.action}`, { item, index });
    }
}

export default Tool;