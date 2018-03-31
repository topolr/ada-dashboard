import {pipe, StaticViewGroup, view} from "adajs";
import BaseInfoService from "./datasets/baseinfo";

@view({
    className: "pagecontainer",
    style:"./style/page.scss"
})
class PageContainer extends StaticViewGroup {

    @pipe(BaseInfoService)
    baseInfoDataSet;

    constructor(parameters) {
        super(parameters);
        this._pages = {};
    }

    render() {
        return super.render().then(() => {
            let active = this.baseInfoDataSet.getData().active;
            if (!this._pages[active.link]) {
                let element = document.createElement("div");
                element.setAttribute("class", this.getThisClassName("inpage"));
                this.getElement().appendChild(element);
                return import(active.type).then(type => {
                    this.addChild(type, {
                        container: element
                    })
                });
            }
        });
    }
}

export default PageContainer;