import {view,View} from "adajs";
import CheckboxService from "./state.js";

@view({
    className:"table-checkbox",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:CheckboxService
    }
})
class Checkbox extends View{
}

export default Checkbox;