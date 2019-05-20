import {Service} from "adajs";

class ToolService extends Service{
	defaultData(){
		return {
			height:40,
			list:[]
		};
	}

	onupdate(current,data){
		Object.assign(current,data);
	}
}

export default ToolService;