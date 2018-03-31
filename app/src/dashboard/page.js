import {pipe, StaticViewGroup, view} from "adajs";
import BaseInfoService from "./datasets/baseinfo";

@view({
    className: "pagecontainer"
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
            }
        });
    }
}

export default PageContainer;