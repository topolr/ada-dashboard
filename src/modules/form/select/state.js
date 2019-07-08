import { action, Service } from "adajs";

class SelectService extends Service {
    defaultData() {
        return {
            name: "",
            label: "",
            description: "",
            value: "",
            options: [],
            disabled: false,
            _current: {},
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
        current._current = current.options.find(a => a.value === current.value) || {};
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
        let error = false, errorMsg = "";
        if (current.required) {
            if (!value) {
                error = true;
                errorMsg = '字段不能为空';
            }
        }
        if (!error && current.check) {
            return Promise.resolve().then(() => current.check(current, value)).then(({ result, msg }) => {
                error = result;
                errorMsg = msg;
                if (!error) {
                    errorMsg = '';
                }
                current._loading = false;
                current._error = error;
                current._errorMsg = errorMsg;
            });
        } else {
            if (!error) {
                errorMsg = '';
            }
            current._loading = false;
            current._error = error;
            current._errorMsg = errorMsg;
        }
    }

    @action('select')
    select(current, option) {
        current._current = option;
        current._open = false;
    }
}

export default SelectService;