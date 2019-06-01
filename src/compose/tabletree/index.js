import {view,ViewGroup} from "adajs";
import TabletreeService from "./state.js";

@view({
    className:"compose-tabletree",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:TabletreeService
    }
})
class Tabletree extends ViewGroup{
}

export default Tabletree;