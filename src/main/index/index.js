import {view,View} from "adajs";
import IndexService from "./state.js";

@view({
    className:"main-index",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:IndexService
    }
})
class Index extends View{
}

export default Index;