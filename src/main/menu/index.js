import {view,View,binder} from "adajs";
import MenuService from "./state.js";

@view({
    className:"main-menu",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:MenuService
    }
})
class Menu extends View{
    @binder("active")
    active({item}){
        this.commit('active',item);
    }
}

export default Menu;