import { view, ViewGroup, binder } from "adajs";
import SideboxService from "./state.js";

@view({
    className: "modules-sidebox",
    template: "./template.html",
    style: "./style.scss",
    dataset: {
        service: SideboxService
    }
})
class Sidebox extends ViewGroup {
    onready() {
        setTimeout(() => {
            this.className.add('open');
        });
    }

    @binder('close')
    close() {
        this.className.remove('open');
        setTimeout(() => {
            this.getParent().removeChild(this);
        }, 300);
    }
}

export default Sidebox;