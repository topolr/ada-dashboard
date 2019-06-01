import { view, BondViewGroup } from "adajs";
import TabletreeService from "./state.js";
import Tabletree from './../../compose/tabletree';

@view({
    className: "test-tabletree",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: TabletreeService
    }
})
class TabletreePage extends BondViewGroup {
    tags() {
        return { tabletree: Tabletree }
    }
}

export default TabletreePage;