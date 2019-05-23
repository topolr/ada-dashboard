import {view,View} from "adajs";
import ListableService from "./state.js";

@view({
    className:"modules-listable",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:ListableService
    }
})
class Listable extends View{
}

export default Listable;