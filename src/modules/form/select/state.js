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
            showLoading: false,
            _value: '',
            _current: null,
            _loading: false,
            _error: false,
            _errorMsg: "",
            _open: false
        };
    }

    onupdate(current, data) {
        this.assign(current, data);
        current._current = current.options.find(a => a.value === current.value) || {};
    }

    @action('open')
    open(current) {
        current._open = true;
    }

    @action('close')
    close(current) {
        current._open = false;
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

    @action('select')
    select(current, option) {
        current._current = option;
        current._open = false;
    }
}

export default SelectService;