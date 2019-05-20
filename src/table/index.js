import { view, ViewGroup } from "adajs";
import TableService from "./state.js";

@view({
    className: "table",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: TableService
    }
})
class Table extends ViewGroup {
}

export default Table;