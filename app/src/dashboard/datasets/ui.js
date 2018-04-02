import {Service, action} from "adajs";

class UIService extends Service {
    defaultData() {
        return {
            isclose: true
        }
    }

    @action("toggle")
    toggle(current) {
        current.isclose = current.isclose ? false : true;
        return current;
    }
}

export default UIService;