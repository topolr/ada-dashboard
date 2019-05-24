import {Service} from "adajs";

class ContainerService extends Service{
	defaultData(){
		return {};
	}

	onupdate(current,data){
		Object.assign(current,data);
	}
}

export default ContainerService;