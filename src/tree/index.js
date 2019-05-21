import { view, View, binder } from "adajs";
import TreeService from "./state.js";

@view({
    className: "tree",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: TreeService
    }
})
class Tree extends View {
    @binder("toggle")
    toggle({ item }) {
        this.commit("toggle", item);
    }

    @binder("active")
    active({ item }) {
        this.commit("active", item);
    }

    @binder("toggleselect")
    toggleSelect({ item }) {
        this.commit("toggleselect", item);
    }

    @binder("active")
    active({ item }) {
        this.commit('active', item);
    }

    fns() {
        return {
            getItems: (list, map) => {
                let t = list.map(a => map[a]);
                return t;
            }
        }
    }

    directives() {
        return {
            test(a) {
                return '<span>' + a + '</span>';
            }
        }
    }
}

export default Tree;