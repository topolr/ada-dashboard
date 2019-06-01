import {view,ViewGroup} from "adajs";
import CurdtreeService from "./state.js";

@view({
    className:"compose-curdtree",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:CurdtreeService
    }
})
class Curdtree extends ViewGroup{
}

export default Curdtree;