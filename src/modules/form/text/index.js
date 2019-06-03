import { view } from "adajs";
import InputService from "./../input/state";
import Input from './../input';

@view({
    className: "modules-form-text",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: InputService
    }
})
class Text extends Input {
    onready(){
        window.text=this;
    }
}

export default Text;