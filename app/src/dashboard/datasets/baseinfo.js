import {action, Service} from "adajs";
import menu from "./../../menu.json";

class BaseInfoService extends Service {
    defaultData() {
        let info = {
            user: {
                username: ""
            },
            menu,
            app: {
                logo: "",
                name: "",
                copyright: ""
            }
        };
        info.active = info.menu[0];
        return info;
    }

    @action("openlink")
    openLink(current, link) {

    }
}

export default BaseInfoService;