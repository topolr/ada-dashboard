import { view, View } from "adajs";
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
}

export default Tool;