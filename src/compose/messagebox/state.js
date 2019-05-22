import { Service, View, view } from "adajs";

@view()
class Textt extends View {
    oncreated() {
        this.getElement().innerHTML = "this is content";
    }
}

class MessageboxService extends Service {
    defaultData() {
        return {
            title: "this is title",
            width: "360px",
            content: [
                { type: Textt, option: {} }
            ],
            btns: [
                { name: "close", action: "close" }
            ]
        }
    }

    onupdate(current, info) {
        Object.assign(current, info);
    };
}

export default MessageboxService;