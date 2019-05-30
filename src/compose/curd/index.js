import {view,BondViewGroup} from "adajs";
import CurdService from "./state.js";

@view({
    className:"compose-curd",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:CurdService
    }
})
class Curd extends BondViewGroup{
}

export default Curd;