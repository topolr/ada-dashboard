import { view, BondViewGroup, binder, handler } from "adajs";
import TreeService from "./state.js";
import Tree from './../../modules/tree';
import Form from './../../modules/form';
import Sidebox from './../../modules/sidebox';

@view({
    className: "compose-crumbtree",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: TreeService
    }
})
class ComposeTree extends BondViewGroup {
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
        this.addChild(Sidebox, {
            container: this.getElement(),
            parameter: {
                title: 'Add Node',
                innerType: Form,
                innerOption: {
                    fields: this.getCurrentState().addFields
                }
            }
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
}

export default ComposeTree;