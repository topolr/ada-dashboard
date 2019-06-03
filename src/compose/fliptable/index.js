import { view, ViewGroup, binder } from "adajs";
import FliptableService from "./state";

@view({
    className: "compose-fliptable",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: FliptableService
    }
})
class Fliptable extends ViewGroup {
    onready() {
        this.commit('show-loading').then(() => this.commit('gotoPage', 1));
    }

    @binder('prev')
    prev() {
        this.commit('show-loading').then(() => this.commit('prev'));
    }

    @binder('next')
    next() {
        this.commit('show-loading').then(() => this.commit('next'));
    }

    @binder('gotoPage')
    gotoPage({ page }) {
        this.commit('show-loading').then(() => this.commit('gotoPage', page.num));
    }

    setSelectIds(ids) {
        this.commit('set-select-ids', ids);
    }

    getSelectedRows() {
        return this.getChildByName('table').getSelectedRows();
    }

    getAllSelectedIds() {
        return this.getChildByName('table').getAllSelectedIds();
    }

    getAllSelectedRows() {
        return this.getChildByName('table').getAllSelectedRows();
    }

    getSelectedIds() {
        return this.getChildByName('table').getSelectedIds();
    }

    refresh() {
        this.commit('show-loading').then(() => this.commit('refresh'));
    }
}

export default Fliptable;