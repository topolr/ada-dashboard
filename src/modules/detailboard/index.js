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
    onready() {
        this.commit('show-loading').then(() => this.commit('get-detail'));
    }

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