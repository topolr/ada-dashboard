import {view, pipe, View, binder} from "adajs";
import BaseInfoService from "./datasets/baseinfo";
import util from "./util/base";

@view({
    className: "pagemenu",
    template: "./template/menu.html",
    style: "./style/menu.scss"
})
class Menu extends View {

    @pipe(BaseInfoService)
    baseInfoDataSet;

    @binder("open")
    open({e, item}) {
        this.dispatchEvent("open", util.getOpenLink(item));
        e.preventDefault();
    }
}

export default Menu;