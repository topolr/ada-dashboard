import {BondViewGroup, pipe, dataset, view, binder} from "adajs";
import BaseInfoService from "./datasets/baseinfo";
import UIService from "./datasets/ui";
import PageContainer from "./page";
import Menu from "./menu";
import router from "ada-uikit/src/router";
import appIcon from "./icons/apps.icon";

@view({
    className: "pagecontainer",
    template: "./template/container.html",
    style: "./style/container.scss"
})
class Container extends BondViewGroup {

    @pipe(BaseInfoService)
    baseInfoDataSet;

    @dataset(UIService)
    uiDataSet;

    defaultOption() {
        return {
            icons: {appIcon}
        }
    }

    oncreated() {
        let _router = this.router = router("/");
        let setRouter = (list) => {
            list.forEach(item => {
                _router.bind(item.link, (e) => {
                    this.baseInfoDataSet.commit("openlink", e.path);
                });
                if (item.list) {
                    setRouter(item.list);
                }
            });
        };
        setRouter(this.baseInfoDataSet.getData().menu);
        _router.run();
    }

    tags() {
        return {
            menu: Menu,
            page: PageContainer
        }
    }

    @binder("toggle")
    toggle() {
        this.uiDataSet.commit("toggle");
    }
}

export default Container;