import {view,BondViewGroup} from "adajs";
import DetailService from "./state.js";

@view({
    className:"modules-detail",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:DetailService
    }
})
class Detail extends BondViewGroup{
}

export default Detail;