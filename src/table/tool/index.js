import {view,View} from "adajs";
import ToolService from "./state.js";

@view({
    className:"table-tool",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:ToolService
    }
})
class Tool extends View{
}

export default Tool;