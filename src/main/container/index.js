import { view, BondViewGroup, handler, binder } from "adajs";
import ContainerService from "./state.js";
import Menu from './../../main/menu';
import Router from './../../lib/router';

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
        return { menu: Menu }
    }

    onready() {
        let _router = this.router = new Router(this.context);
        let map = this.getCurrentState()._menuMap;
        Reflect.ownKeys(map).forEach(key => {
            let item = map[key];
            _router.bind(item.path === "/" ? "/" : item.path, (e) => {
                this.commit("flip", item);
            });
        });
        this.router.run();
    }

    @binder('toggleWin')
    toggleWin() {
        this.commit('toggleWin');
    }

    @handler("gotoPage")
    gotoPage({ data }) {
        this.router.open(data.path);
    }
}

export default Container;