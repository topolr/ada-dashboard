import { view, ViewGroup, binder } from "adajs";
import FliptableService from "./state.js.js";

@view({
    className: "fliptable",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: FliptableService
    }
})
class Fliptable extends ViewGroup {
    @binder('prev')
    prev() {
        this.commit('prev');
    }

    @binder('next')
    next() {
        this.commit('next');
    }

    @binder('gotoPage')
    gotoPage({ page }) {
        this.commit('gotoPage');
    }
}

export default Fliptable;