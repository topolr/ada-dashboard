import { view, BondViewGroup, binder, handler } from "adajs";
import CurdService from "./state.js";
import Form from './../../modules/form';
import Sidebox from './../../modules/sidebox';

@view({
    className: "compose-curd",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: CurdService
    }
})
class Curd extends BondViewGroup {
    tags() {
        return {
            xform: Form
        }
    }

    @binder('action')
    action({ btn }) {
        let { action } = btn;
        if (action === 'add') {
            this.addChild(Sidebox, {
                container: this.getElement(),
                parameter: {
                    title: 'Add Row',
                    innerType: Form,
                    innerOption: {
                        fields: this.getCurrentState().addFields
                    }
                }
            });
        }
    }

    @handler('rowClick')
    rowClick({ data }) {
        this.commit('show-detail', data);
    }
}

export default Curd;