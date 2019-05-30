import { view } from "adajs";
import TextService from "./state.js";
import BaseDetail from './../base';

@view({
    className: "modules-detail-text",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: TextService
    }
})
class Text extends BaseDetail {
}

export default Text;