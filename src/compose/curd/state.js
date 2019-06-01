import { Service, action } from "adajs";
import Table from './../fliptable';

class CurdService extends Service {
	defaultData() {
		return {
			title: 'Table Curd',
			btns: [],
			editURL: '',
			addURL: '',
			removeURL: '',
			searchURL: '',
			detailURL: '',
			editFields: [],
			detailFields: [],
			addFields: [],
			filterFields: [],
			tableType: Table,
			tableOption: {},
			borderLeft:true,
			borderTop:true,
			borderRight:true,
			borderBottom:true,
			_detail_open: false,
			_detail_row: null,
			_search_open: false
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
	}

	@action('show-detail')
	showDetail(current, row) {
		current._detail_open = true;
		current._detail_row = row;
	}

	@action('hide-detail')
	hideDetail(current) {
		current._detail_open = false;
	}

	@action('hide-search')
	hideSearch(current) {
		current._search_open = false;
	}

	@action('show-search')
	showSearch(current) {
		current._search_open = true;
	}
}

export default CurdService;