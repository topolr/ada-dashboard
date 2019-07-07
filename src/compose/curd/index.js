import { view, binder, handler, subscribe } from "adajs";
import BaseCurd from './../basecurd';
import CurdService from "./state.js";
import Form from './../../modules/form';
import Sidebox from './../../modules/sidebox';
import DetailBoard from './../../modules/detailboard';
import Loading from './../../modules/loading';

@view({
    className: "compose-curd",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: CurdService
    }
})
class Curd extends BaseCurd {
    tags() {
        return {
            xform: Form,
            xdetail: DetailBoard
        }
    }

    @binder('action')
    action({ btn }) {
        let { addFields, addURL } = this.getCurrentState();
        let { action } = btn;
        if (action === 'add') {
            this.addChild(Sidebox, {
                container: this.getElement(),
                parameter: {
                    title: 'Add Row',
                    innerType: Form,
                    innerOption: {
                        fields: addFields
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
                            this.addChild(Loading).then(loading => {
                                form.getValue().then(info => {
                                    this.context.request.post(addURL, info).then(() => {
                                        loading.showSuccess();
                                        loading.close();
                                        box.close();
                                        this.refresh();
                                    }).catch((e) => {
                                        console.log(e);
                                        loading.showError();
                                        loading.close();
                                    });
                                });
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

    refresh() {
        this.getChildByName('table').refresh();
    }

    getSelectedRows() {
        return this.getChildByName('table').getAllSelectedRows();
    }

    setSelectIds(ids) {
        this.getChildByName('table').setSelectIds(ids);
    }
}

export default Curd;