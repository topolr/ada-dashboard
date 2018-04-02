import {view, BondViewGroup, pipe} from "adajs";
import BaseInfoService from "./datasets/baseinfo";

@view({
    className: "menupage",
    template: "./template/menupage.html",
    style: "./style/menupage.scss"
})
class MenuPage extends BondViewGroup {
    @pipe(BaseInfoService)
    baseInfoService;

    computed(data) {
        // let active = data.active;
        // let type = active.type;
        // return import(type).then(view => {
        //     return {
        //         list: active.list,
        //         type: view
        //     }
        // });
        return data;
    }
}

export default MenuPage;