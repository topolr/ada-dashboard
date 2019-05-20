import {view,View} from "adajs";
import SimpleService from "./state.js";

@view({
    className:"table-simple",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:SimpleService
    }
})
class Simple extends View{
}

export default Simple;