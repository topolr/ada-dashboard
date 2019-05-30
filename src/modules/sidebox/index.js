import {view,ViewGroup,binder} from "adajs";
import SideboxService from "./state.js";

@view({
    className:"modules-sidebox",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:SideboxService
    }
})
class Sidebox extends ViewGroup{
    @binder('close')
    close(){
        this.getParent().removeChild(this);
    }
}

export default Sidebox;