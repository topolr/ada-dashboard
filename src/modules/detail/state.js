import {Service} from "adajs";

class DetailService extends Service{
	defaultData(){
		return {
			fields: [],
			btns:[]
		};
	}

	onupdate(current,data){
		Object.assign(current,data);
	}
}

export default DetailService;