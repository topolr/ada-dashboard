import {view, dataset, View, binder} from "adajs";
import BaseInfoService from "./datasets/baseinfo";

@view({
    className: "pagemenu",
    template: "./template/menu.html",
    style: "./style/menu.scss"
})
class Menu extends View {

    @dataset(BaseInfoService)
    baseInfoDataSet;

    @binder("open")
    open({e, item}) {
        this.dispatchEvent("open", item.link);
        e.preventDefault();
    }
}

export default Menu;