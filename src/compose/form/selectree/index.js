import { view, binder } from "adajs";
import SelectreeService from "./state.js";
import BaseField from './../../../modules/form/field';

@view({
    className: "compose-form-selectree",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: SelectreeService
    }
})
class Selectree extends BaseField {
    onready() {
        if (this.getCurrentState().value.length > 0) {
            this.commit('show-loading').then(() => {
                this.commit('load-detail');
            });
        }
    }

    @binder('openTreePannel')
    openTreePannel() {
        let { treeType, treeOption, label, value } = this.getCurrentState();
        this.dispatchEvent('open-tree-pannel', { treeType, treeOption, label, selects: value });
    }

    setValue(value) {
        return this.commit('set-value', value).then(() => {
            return this.commit('load-detail').then(() => {
                this.dispatchEvent('select-tree-selected', this.getValue());
            });
        });
    }

    getValue() {
        return this.getCurrentState().value;
    }
}

export default Selectree;