import { view, BondViewGroup, binder } from "adajs";
import TestService from "./state.js";
import Table from './../fliptable';
import Alert from './../alert';
import Message from './../messagebox';
import Loading from './../loading';

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
        return { xtable: Table };
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