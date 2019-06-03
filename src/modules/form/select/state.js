import { action, Service, util } from "adajs";

class SelectService extends Service {
    defaultData() {
        return {
            name: "",
            label: "",
            description: "",
            value: "",
            options: [],
            disabled: false,
            _error: false,
            _errorMsg: ""
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
        current._error = true;
        current._errorMsg = info || "";
    }

    @action("hideError")
    hideError(current) {
        current._error = false;
    }

    @action("check")
    check(current, value) {
        if (current.check) {
            return Promise.resolve().then(current.check(current, value));
        }
    }
}

export default SelectService;