import {root, StaticViewGroup} from "adajs";
import Container from "./container";

@root()
class Root extends StaticViewGroup {
    oncreated() {
        this.addChild(Container);
    }
}

export default Root;