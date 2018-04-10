import {Service, action, refer} from "adajs";
import BaseInfoService from "./baseinfo";

class UIService extends Service {
    @refer.parent(BaseInfoService)
    baseInfoDataSet;

    defaultData() {
        return Object.assign({
            isclose: true
        }, this.baseInfoDataSet.getData());
    }

    @action("toggle")
    toggle(current) {
        current.isclose = current.isclose ? false : true;
        return current;
    }

    @action("openlink")
    openlink(current, a) {
        return this.baseInfoDataSet.commit("openlink", a).then(() => {
            return Object.assign({
                isclose: true
            }, this.baseInfoDataSet.getData());
        });
    }
}

export default UIService;