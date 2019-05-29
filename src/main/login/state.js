import {Service} from "adajs";

class LoginService extends Service{
	defaultData(){
		return {};
	}

	onupdate(current,data){
		Object.assign(current,data);
	}
}

export default LoginService;