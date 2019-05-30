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

    setValue(values) {
        Reflect.ownKeys(values).forEach(name => {
            let target = this.getFieldByName(name);
            target && (target.setValue(values[name]));
        });
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
                return Promise.resolve().then(() => field.check()).then(value => {
                    console.log('===>', value);
                    result && (result = value);
                });
            });
        }, Promise.resolve()).then(() => result);
    }

    @binder("action")
    action({ btn }) {
        let action = btn.action;
        if (this[action]) {
            this[action](btn);
        }
        this.dispatchEvent(btn.action, btn);
    }
}

export default Form;