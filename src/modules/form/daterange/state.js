import { action } from "adajs";
import { formatDate } from './../util';
import BaseDateService from './../date/state';

class DateService extends BaseDateService {
	@action('set-value')
	setValue(current, dates) {
		current.value = `${formatDate(dates[0], current.format)} ~ ${formatDate(dates[1], current.format)}`;
		current._open = false;
	}
}

export default DateService;