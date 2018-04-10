import {BondViewGroup, refer, dataset, view, binder, handler} from "adajs";
import UIService from "./datasets/ui";
import PageContainer from "./pagecontainer";
import Menu from "./menu";
import router from "ada-uikit/src/router";
import appIcon from "./icons/apps.icon";

@view({
    className: "pagecontainer",
    template: "./template/container.html",
    style: "./style/container.scss"
})
class Container extends BondViewGroup {

    @dataset(UIService)
    uiDataSet;

    defaultOption() {
        return {
            icons: {appIcon}
        }
    }

    oncreated() {
        let _router = this.router = router("http://localhost:8080");
        let setRouter = (list) => {
            list && list.forEach(item => {
                _router.bind(`${item.link}`, (e) => {
                    this.uiDataSet.commit("openlink", e.path);
                });
                setRouter(item.list);
            });
        };
        setRouter(this.uiDataSet.getData().menu);
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

    @handler("open")
    openPage(e) {
        this.router.open(e.data);
    }
}

export default Container;