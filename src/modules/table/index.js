import { view, ViewGroup, handler } from "adajs";
import TableService from "./state";
import { diffArray } from './util';

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
        let old = this.getAllSelectedIds();
        this.commit('checkRow', data.index).then(() => {
            let current = this.getAllSelectedIds();
            this.dispatchEvent('table-select-change', diffArray(old, current));
        });
    }

    @handler('checkAll')
    checkAll() {
        let old = this.getAllSelectedIds();
        this.commit('checkAll').then(() => {
            let current = this.getAllSelectedIds();
            this.dispatchEvent('table-select-change', diffArray(old, current));
        });
    }

    @handler('table-tool-action')
    tableToolAction({ data }) {
        this.dispatchEvent(`table-tool-${data.item.action}`, {
            index: data.index,
            action: data.item,
            row: this.getCurrentState().data[data.index]
        });
    }

    getAllSelectedIds() {
        return this.getDataSet().getComputeData('get-select-ids');
    }

    getAllSelectedRows() {
        let { _tableMap } = this.getCurrentState();
        return this.getAllSelectedIds().map(id => _tableMap[id]);
    }

    getSelectedRows() {
        let { data, selectIdName } = this.getCurrentState(), r = [];
        this.getAllSelectedIds().forEach(id => {
            let a = data.find(item => item[selectIdName] === id);
            if (a) {
                r.push(a);
            }
        });
        return r;
    }

    getSelectedIds() {
        let { selectIdName } = this.getCurrentState()
        return this.getSelectedRows().map(row => row[selectIdName]);
    }
}

export default Table;