import { view, ViewGroup, binder } from "adajs";
import BoardService from "./state.js";
import Detail from './../detail';

@view({
    className: "modules-detailboard",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: BoardService
    }
})
class DetailBoard extends ViewGroup {
    tags() {
        return {
            detail: Detail
        };
    }

    @binder('close')
    close() {
        this.dispatchEvent('hide-detail');
    }
}

export default DetailBoard;