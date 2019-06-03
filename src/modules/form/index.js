import { view, binder } from "adajs";
import FormService from "./state.js";
import BaseField from "./field";

@view({
    className: "form",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: FormService
    }
})
class Form extends BaseField {
    getFieldByName(name) {
        return this.getChildrenByType(BaseField).find(child => child.getName() === name);
    }

    disabled() {
        return this.getChildrenByType(BaseField).reduce((a, field) => {
            return a.then(() => {
                return Promise.resolve().then(() => field.disabled());
            });
        }, Promise.resolve());
    }

    undisabled() {
        return this.getChildrenByType(BaseField).reduce((a, field) => {
            return a.then(() => {
                return Promise.resolve().then(() => field.undisabled());
            });
        }, Promise.resolve());
    }

    setValue(values) {
        return Reflect.ownKeys(values || {}).reduce((a, name) => {
            return a.then(() => {
                let target = this.getFieldByName(name);
                if (target) {
                    return Promise.resolve().then(() => target.setValue(values[name]));
                }
            });
        }, Promise.resolve());
    }

    getValue() {
        let result = {};
        return this.getChildrenByType(BaseField).reduce((a, field) => {
            return a.then(() => {
                return Promise.resolve().then(() => field.getValue()).then(value => {
                    let name = field.getName();
                    result[name] = value;
                });
            });
        }, Promise.resolve()).then(() => result);
    }

    check() {
        let result = true;
        return this.getChildrenByType(BaseField).reduce((a, field) => {
            return a.then(() => {
                if (result) {
                    return Promise.resolve().then(() => field.check()).then(value => {
                        result = value;
                    });
                }
            });
        }, Promise.resolve()).then(() => result);
    }
}

export default Form;