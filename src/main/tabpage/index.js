import { view, BondViewGroup, binder } from "adajs";
import TabpageService from "./state.js";

@view({
    className: "main-tabpage",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: TabpageService
    }
})
class Tabpage extends BondViewGroup {
    @binder('active')
    active({ tab }) {
        this.dispatchEvent('gotoPage', tab);
    }
}

export default Tabpage;