import {view, StaticViewGroup, pipe, binder} from "adajs";
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
        if(data.active._level===3){
            data.list=data.active._parent.list;
        }else {
            data.list = data.active.list;
        }
        return data;
    }

    @binder("open")
    open({e, item}) {
        this.dispatchEvent("open", item.link);
        e.preventDefault();
    }
}

export default MenuPage;