import { view, ViewGroup } from "adajs";
import TestService from "./state.js";
import Table from './../fliptable';

@view({
    className: "test",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: TestService
    }
})
class Test extends ViewGroup {
    tags() {
        return { xtable: Table };
    }
}

export default Test;