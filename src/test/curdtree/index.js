import { view, BondViewGroup } from "adajs";
import CurdtreeService from "./state.js";
import Crudtree from './../../compose/curdtree';

@view({
    className: "test-curdtree",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: CurdtreeService
    }
})
class CurdtreePage extends BondViewGroup {
    tags() {
        return { tree: Crudtree }
    }
}

export default CurdtreePage;