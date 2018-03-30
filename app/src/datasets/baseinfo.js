import {action, Service} from "adajs";

class BaseInfoService extends Service {
    defaultData() {
        return {
            user: {
                username: ""
            },
            menu: [
                {
                    name: "menu1", link: "menu1", type: "", list: [
                        {name: "menu11", link: "menu11", type: "", list: []}
                    ]
                }
            ],
            app: {
                logo: "",
                name: "",
                copyright: ""
            }
        }
    }

    @action("openlink")
    openLink(current, link) {

    }
}

export default BaseInfoService;