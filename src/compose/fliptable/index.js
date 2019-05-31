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
}

export default Fliptable;