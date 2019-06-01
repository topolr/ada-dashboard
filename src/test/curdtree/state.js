import {Service} from "adajs";

class CurdtreeService extends Service{
	defaultData(){
		return {
			treeOption:{}
		};
	}

	onupdate(current,data){
		Object.assign(current,data);
	}
}

export default CurdtreeService;