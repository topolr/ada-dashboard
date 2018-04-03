import {binder, BondViewGroup, pipe, StaticViewGroup, view} from "adajs";
import BaseInfoService from "./datasets/baseinfo";
import util from "./util/base";

@view({
    className: "page",
    template: "./template/page.html",
    style: "./style/page.scss"
})
class Page extends BondViewGroup {
    @pipe(BaseInfoService)
    baseInfoService;

    defaultState() {
        return {link: null};
    }

    oncreated(){
        this.state.link=util.getCurrentLink(this.baseInfoService.getData().active);
    }

    onupdate(updater) {
        if (updater.isDataSet()) {
            let link = util.getCurrentLink(this.baseInfoService.getData().active);
            return this.state.link === link;
        }
    }

    computed(data) {
        let list = util.getCurrentLinkList(data.active);
        return import(data.active.type).then(type => {
            return {list, type};
        });
    }

    @binder("open")
    open({e, item}) {
        this.dispatchEvent("open", item.link);
        e.preventDefault();
    }
}

export default Page;