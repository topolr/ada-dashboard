import { view, ViewGroup, handler } from "adajs";
import TableService from "./state";

@view({
    className: "table",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: TableService
    }
})
class Table extends ViewGroup {
    onready() {
        this.finder("body").getElement().addEventListener("scroll", (e) => {
            let target = e.target;
            this.getChildrenByType(this.getCurrentState().headType)[0].scrollLeft(target.scrollLeft);
            this.getChildrenByType(this.getCurrentState().toolType)[0].scrollTop(target.scrollTop);
            this.getChildrenByType(this.getCurrentState().checkboxType)[0].scrollTop(target.scrollTop);
        });
    }

    @handler('checkRow')
    checkRow({ data }) {
        this.commit('checkRow', data.index);
        this.dispatchEvent('rowClick', this.getCurrentState().data[data.index]);
    }

    @handler('checkAll')
    checkAll() {
        this.commit('checkAll');
    }
}

export default Table;