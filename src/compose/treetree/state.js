import {Service} from "adajs";

class TreetreeService extends Service{
	defaultData(){
		return {};
	}

	onupdate(current,data){
		Object.assign(current,data);
	}
}

export default TreetreeService;