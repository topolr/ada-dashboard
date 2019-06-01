import { view, BondViewGroup, binder, handler, subscribe } from "adajs";
import CurdService from "./state.js";
import Form from './../../modules/form';
import Sidebox from './../../modules/sidebox';
import DetailBoard from './../../modules/detailboard';

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
            xform: Form,
            xdetail: DetailBoard
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
                    },
                    btns: [
                        { name: 'Add', action: 'add' }
                    ]
                }
            }).then(box => {
                box.on('add', () => {
                    let form = box.getChildAt(0);
                    form.check().then(result => {
                        if (result) {
                            form.getValue().then(info => {
                                console.log(info);
                            });
                        }
                    });
                });
            });
        } else if (action === 'search') {
            this.commit('show-search');
        }
    }

    @binder('hideSearch')
    hideSearch() {
        this.commit('hide-search');
    }

    @handler('table-tool-detail')
    tableToolDetail({ data }) {
        this.commit('show-detail', data.row);
    }

    @handler('table-tool-edit')
    tableToolEdit() {
        this.addChild(Sidebox, {
            container: this.getElement(),
            parameter: {
                title: 'Edit Row',
                innerType: Form,
                innerOption: {
                    fields: this.getCurrentState().editFields
                }
            }
        });
    }

    @handler('hide-detail')
    hideDetail() {
        this.commit('hide-detail');
    }
}

export default Curd;