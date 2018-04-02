import {binder, BondViewGroup, pipe, StaticViewGroup, view} from "adajs";
import BaseInfoService from "./datasets/baseinfo";

@view({
    className: "page",
    template: "./template/page.html",
    style: "./style/menupage.scss"
})
class Page extends BondViewGroup {
    @pipe(BaseInfoService)
    baseInfoService;

    computed(data) {
        let result = {};
        if (data.active._level === 3) {
            result.list = data.active._parent.list;
        } else {
            result.list = data.active.list;
        }
        return import(data.active.type).then(type => {
            result.type = type;
            return result;
        });
    }

    @binder("open")
    open({e, item}) {
        this.dispatchEvent("open", item.link);
        e.preventDefault();
    }
}

@view({
    className: "pagecontainer",
    style: "./style/page.scss",
    template: "./template/pagecontainer.html"
})
class PageContainer extends BondViewGroup {

    @pipe(BaseInfoService)
    baseInfoDataSet;

    defaultState() {
        return {
            list: [],
            current: null
        };
    }

    computed(data) {
        let active = data.active, link = active.link;
        if (active._level === 3) {
            link = active._parent.link;
        }
        let result = this.state.list.filter(item => {
            let r = false;
            if (item.link === link) {
                item.active = true;
                r = true;
            } else {
                item.active = false;
            }
            return r;
        });
        if (result.length === 0) {
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