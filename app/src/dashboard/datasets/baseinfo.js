import {action, Service} from "adajs";
import menu from "./../../menu.json";
import util from "./util";

class BaseInfoService extends Service {
    defaultData() {
        util.setMenu(menu);
        let info = {
            user: {
                username: ""
            },
            app: {
                logo: "",
                name: "",
                copyright: ""
            },
            menu,
            active: null
        };
        info.active = info.menu[0];
        return info;
    }

    @action("openlink")
    openLink(current, link) {
        current.active = util.activeLink(link, current.menu);
        return current;
    }
}

export default BaseInfoService;