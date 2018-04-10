import {binder, BondViewGroup, refer, StaticViewGroup, view} from "adajs";
import BaseInfoService from "./datasets/baseinfo";
import util from "./util/base";
import Page from "./page";

@view({
    className: "pagecontainer",
    style: "./style/pagecontainer.scss",
    template: "./template/pagecontainer.html"
})
class PageContainer extends BondViewGroup {

    @refer(BaseInfoService)
    baseInfoDataSet;

    defaultState() {
        return {
            list: [],
            current: null
        };
    }

    onserviceupdate() {
        return this.state.current !== util.getCurrentLink(this.baseInfoDataSet.getData().active);
    }

    computed(data) {
        let link = util.getCurrentLink(data.active);
        if (this.state.list.filter(item => {
                item.active = item.link === link;
                return item.active;
            }).length === 0) {
            this.state.list.push({link, active: true, before: false, name: "inpage"});
        }
        this.state.list.forEach(item => {
            item.before = item.link === this.state.current;
        });
        this.state.list.forEach(item => {
            let _name = ["inpage"];
            if (item.active) {
                _name.push("in");
            } else if (item.before) {
                _name.push("out");
            }
            item.name = _name.join(" ");
        });
        this.state.current = link;
        return this.state;
    }

    tags() {
        return {page: Page};
    }
}

export default PageContainer;