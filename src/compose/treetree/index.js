import {view,ViewGroup} from "adajs";
import TreetreeService from "./state.js";

@view({
    className:"compose-treetree",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:TreetreeService
    }
})
class Treetree extends ViewGroup{
}

export default Treetree;