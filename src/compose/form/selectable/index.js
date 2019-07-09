import { view, binder } from "adajs";
import SelectableService from "./state.js";
import BaseField from './../../../modules/form/field';

@view({
    className: "compose-form-selectable",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: SelectableService
    }
})
class Selectable extends BaseField {
    @binder('openTablePannel')
    openTablePannel() {
        let { tableType, tableOption, label, value } = this.getCurrentState();
        this.dispatchEvent('open-table-pannel', { tableType, tableOption, label, selects: value });
    }

    setValue(value) {
        return this.commit('set-value', value).then(() => {
            return this.commit('load-detail').then(() => {
                this.dispatchEvent('select-table-selected', this.getValue());
            });
        });
    }

    getValue() {
        let { value } = this.getCurrentState();
        return value ? value.join(",") : '';
    }

    getName() {
        return this.getCurrentState().name;
    }
}

export default Selectable;