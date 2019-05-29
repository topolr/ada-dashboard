import { view, View, binder } from "adajs";
import MenuService from "./state.js";

@view({
    className: "main-menu",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: MenuService
    }
})
class Menu extends View {
    @binder("active")
    active({ item }) {
        this.dispatchEvent('gotoPage',item);
    }

    @binder('activesub')
    activesub({ sub }) {
        this.dispatchEvent('gotoPage',sub);
    }

    fns() {
        return {
            getItems(list, map) {
                return list.map(a => map[a]);
            }
        }
    }
}

export default Menu;