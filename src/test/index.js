import { view, BondViewGroup, binder } from "adajs";
import TestService from "./state.js";
import Table from '../compose/fliptable';
import Tree from '../compose/curdtree';
import Alert from '../modules/alert';
import Message from '../modules/messagebox';
import Loading from '../modules/loading';
import Picker from '../modules/datepicker';
import Listable from '../modules/listable';

@view({
    className: "test",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: TestService
    }
})
class Test extends BondViewGroup {
    tags() {
        return { xtable: Table, xtree: Tree, picker: Picker, listable: Listable };
    }

    @binder('alert')
    alert() {
        this.addChild(Alert, {
            parameter: {
                content: "test",
                btns: [
                    { name: "close", action: "close" },
                    { name: "closex", action: "closex" }
                ]
            }
        }).then(alert => {
            alert.on('closex', (a) => {
                alert.close();
            });
        });
    }

    @binder('message')
    message() {
        this.addChild(Message, {
            parameter: {
                title: "test",
                width: "360px",
                btns: [
                    { name: "close", action: "close" }
                ]
            }
        }).then(message => {
            message.on('close', () => message.close());
        });
    }

    @binder('loading')
    loading() {
        this.addChild(Loading);
    }
}

export default Test;