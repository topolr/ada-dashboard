import { view, View, binder, subscribe } from "adajs";
import TreeService from "./state";
import eventDispatcher from './../../lib/dispatcher';

@view({
    className: "tree",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: TreeService
    }
})
class Tree extends View {
    onready() {
        eventDispatcher.observe(this);
    }

    onunload() {
        eventDispatcher.unobserve(this);
    }

    @subscribe('click')
    clickTree(e) {
        if (e.target === this.getElement()) {
            this.commit('unselect');
            this.dispatchEvent('tree-active', []);
        }
    }

    @binder("toggle")
    toggle({ item }) {
        this.commit("toggle", item);
    }

    @binder("toggleselect")
    toggleSelect({ item }) {
        this.commit("toggleselect", item);
    }

    @binder("active")
    active({ item }) {
        this.commit('active', item).then(() => this.dispatchEvent('tree-active', this.getDataSet().getComputeData('crumb', item)));
    }

    getActiveNode() {
        return this.getDataSet().getComputeData('activeNode');
    }

    getSelectedNodes() {
        return this.getDataSet().getComputeData('selectedNodes');
    }

    closeAll() {
        this.commit('closeall');
    }

    openAll() {
        this.commit('openall');
    }

    fns() {
        return {
            getItems(list, map) {
                let t = list.map(a => map[a]);
                return t;
            }
        }
    }
}

export default Tree;