import {binder, BondViewGroup, refer, StaticViewGroup, view} from "adajs";
import BaseInfoService from "./datasets/baseinfo";
import util from "./util/base";

@view({
    className: "page",
    template: "./template/page.html",
    style: "./style/page.scss"
})
class Page extends BondViewGroup {
    @refer(BaseInfoService)
    baseInfoService;

    defaultState() {
        return {link: null};
    }

    oncreated() {
        this.state.link = util.getCurrentLink(this.baseInfoService.getData().active);
    }

    onserviceupdate(updater) {
        let link = util.getCurrentLink(this.baseInfoService.getData().active);
        return this.state.link === link;
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