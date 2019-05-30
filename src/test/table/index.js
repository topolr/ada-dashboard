import { view, ViewGroup } from "adajs";
import TableService from "./state.js";
import Table from './../../compose/curd';

@view({
    className: "test-table",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: TableService
    }
})
class TablePage extends ViewGroup {
    tags() {
        return {
            table: Table
        };
    }
}

export default TablePage;