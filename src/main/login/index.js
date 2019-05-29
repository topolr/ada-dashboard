import {view,BondViewGroup} from "adajs";
import LoginService from "./state.js";

@view({
    className:"main-login",
    template:"./template.html",
    style:"./style.scss",
    dataset:{
    	service:LoginService
    }
})
class Login extends BondViewGroup{
}

export default Login;