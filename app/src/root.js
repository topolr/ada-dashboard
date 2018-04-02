import {root,dataset, StaticViewGroup} from "adajs";
import Container from "./dashboard/container";
import BaseInfoService from "./dashboard/datasets/baseinfo";
import "./style/reset.scss";
import "./icons/base";

@root()
class Root extends StaticViewGroup {
    @dataset(BaseInfoService)
    baseInfoDataSet;

    oncreated() {
        this.addChild(Container);
    }
}

export default Root;