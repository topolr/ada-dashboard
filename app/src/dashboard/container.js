import {BondViewGroup, pipe, view} from "adajs";
import BaseInfoService from "./datasets/baseinfo";
import PageContainer from "./page";
import Menu from "./menu";
import router from "ada-uikit/src/router";

@view({
    className: "pagecontainer",
    template: "./template/container.html",
    style: "./style/container.scss"
})
class Container extends BondViewGroup {

    @pipe(BaseInfoService)
    baseInfoDataSet;

    defaultOption() {
        return {
            types: {
                menu: Menu,
                page: PageContainer
            }
        }
    }

    oncreated() {
        let _router = this.router = router("/");
        let setRouter = (top, list) => {
            list.forEach(item => {
                let a = `${top}/${item.link}`;
                _router.bind(a, (e) => {
                    this.baseInfoDataSet.commit("openlink", e.path);
                });
                if (item.list) {
                    setRouter(a, item.list);
                }
            });
        };
        setRouter("", this.baseInfoDataSet.getData().menu);
        _router.run();
    }
}

export default Container;