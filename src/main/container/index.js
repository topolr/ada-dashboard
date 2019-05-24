import {view,BondViewGroup} from "adajs";
import ContainerService from "./state.js";

@view({
    className:"main-container",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:ContainerService
    }
})
class Container extends BondViewGroup{
}

export default Container;