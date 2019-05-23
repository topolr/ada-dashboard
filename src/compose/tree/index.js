import { view, ViewGroup, binder, handler } from "adajs";
import TreeService from "./state.js";
import Tree from './../../modules/tree';

@view({
    className: "compose-tree",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: TreeService
    }
})
class ComposeTree extends ViewGroup {
    tags() {
        return { tree: Tree };
    }

    @binder('closeAll')
    closeAll() {
        this.getChildAt(0).closeAll();
    }

    @handler('active')
    active({ data }) {
        this.commit('setcurmbs', data);
    }
}

export default ComposeTree;