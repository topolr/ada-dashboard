import { view, BondViewGroup } from "adajs";
import ContainerService from "./state.js";
import Tree from './../../compose/crumbtree';
import Menu from './../../main/menu';

@view({
    className: "main-container",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: ContainerService
    }
})
class Container extends BondViewGroup {
    tags() {
        return { tree: Tree, menu: Menu }
    }
}

export default Container;