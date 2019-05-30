import {action, Service, util} from "adajs";

class SelectService extends Service {
    defaultData() {
        return {
            name: "",
            label: "",
            description: "",
            value: "",
            error: false,
            errorMsg: "",
            options: []
        };
    }

    onupdate(current, data) {
        return util.extend(current, data);
    }

    @action("setValue")
    setValue(current, value) {
        current.value = value;
    }

    @action("showError")
    showError(current, info) {
        current.error = true;
        current.errorMsg = info || "";
    }

    @action("hideError")
    hideError(current) {
        current.error = false;
    }

    @action("check")
    check(current, value) {
        if (current.check) {
            return Promise.resolve().then(current.check(current, value));
        }
    }
}

export default SelectService;