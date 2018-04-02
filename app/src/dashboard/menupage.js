import {view, StaticViewGroup, pipe} from "adajs";
import BaseInfoService from "./datasets/baseinfo";

@view({
    className: "menupage",
    template: "./template/menupage.html",
    style: "./style/menupage.scss"
})
class MenuPage extends StaticViewGroup {
    @pipe(BaseInfoService)
    baseInfoService;

    computed(data) {
        data.list = data.active.list;
        return data;
    }
}

export default MenuPage;