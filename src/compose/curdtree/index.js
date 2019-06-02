import { view, BondViewGroup, binder, handler } from "adajs";
import TreeService from "./state.js";
import Tree from './../../modules/tree';
import Form from './../../modules/form';
import Sidebox from './../../modules/sidebox';
import Loading from './../../modules/loading';

@view({
    className: "compose-curdtree",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: TreeService
    }
})
class ComposeCurdTree extends BondViewGroup {
    tags() {
        return { tree: Tree };
    }

    @binder('closeAll')
    closeAll() {
        this.getChildAt(0).closeAll();
    }

    @handler('active')
    active({ data }) {
        this.commit('setcurmbs', data);
    }

    @binder('refresh')
    refresh() {
        this.commit('showloading').then(() => {
            this.commit('refresh');
        });
    }

    @binder('add')
    add() {
        let { addURL, parentNodeName } = this.getCurrentState();
        let tree = this.getChildByName('tree'), parentNodeId = '';
        if (tree) {
            let active = tree.getActiveNode();
            if (active) {
                parentNodeId = active.info.id;
            }
        }
        this.addChild(Sidebox, {
            container: this.getElement(),
            parameter: {
                title: 'Add Node',
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
                        this.addChild(Loading).then(loading => {
                            form.getValue().then(info => {
                                info[parentNodeName] = parentNodeId;
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
    }

    @binder('edit')
    edit() {
        this.addChild(Sidebox, {
            container: this.getElement(),
            parameter: {
                title: 'Edit Node',
                innerType: Form,
                innerOption: {
                    fields: this.getCurrentState().editFields
                }
            }
        });
    }

    setSelects(nodeIds) {
        this.getChildByName('tree').commit('set-selects', nodeIds);
    }

    getSelectedNodes() {
        return this.getChildByName('tree').getSelectedNodes();
    }
}

export default ComposeCurdTree;