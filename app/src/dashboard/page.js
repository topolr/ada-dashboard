import {pipe, StaticViewGroup, view} from "adajs";
import BaseInfoService from "./datasets/baseinfo";

@view({
    className: "pagecontainer",
    style: "./style/page.scss"
})
class PageContainer extends StaticViewGroup {

    @pipe(BaseInfoService)
    baseInfoDataSet;

    constructor(parameters) {
        super(parameters);
        this._pages = {};
        this._current = null;
    }

    togglePage(_link) {
        Reflect.ownKeys(this._pages).forEach(link => {
            if (link === _link) {
                this._pages[link].classList.add(this.getThisClassName("in"));
                this._pages[link].classList.remove(this.getThisClassName("out"));
            } else if (link === this._current) {
                this._pages[link].classList.add(this.getThisClassName("out"));
                this._pages[link].classList.remove(this.getThisClassName("in"));
            } else {
                this._pages[link].classList.remove(this.getThisClassName("in"));
                this._pages[link].classList.remove(this.getThisClassName("out"));
            }
        });
        this._current = _link;
    }

    render() {
        return super.render().then(() => {
            let active = this.baseInfoDataSet.getData().active;
            let link = active.link;
            if (active._level === 3) {
                let parent = active._parent;
                link = parent.link;
            }
            if (!this._pages[link]) {
                let element = document.createElement("div");
                element.setAttribute("class", this.getThisClassName("inpage"));
                this.getElement().appendChild(element);
                this._pages[link] = element;
                return import(active.type).then(type => {
                    return this.addChild(type, {
                        container: element
                    })
                }).then(() => {
                    this.togglePage(link);
                });
            } else {
                this.togglePage(link);
            }
        });
    }
}

export default PageContainer;