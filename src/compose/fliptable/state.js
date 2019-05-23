import { Service, action } from "adajs";
import Table from '../../modules/table';

class FliptableService extends Service {
	defaultData() {
		return {
			tableType: Table,
			url: '/table.json',
			parameter: {},
			currentPage: 1,
			totalPage: 1,
			pageSize: 10,
			cols: [],
			titleHeight: 40,
			rowHeight: 30,
			toolPosition: 'right',
			checkbox: true,
			tools: [],
			data: [],
			checkPropName: 'check',
			pagers: []
		};
	}

	onupdate(current, data) {
		Object.assign(current, data);
		return this.gotoPage(current, 1);
	}

	@action('gotopage')
	gotoPage(current, page) {
		if (page > 0 && page <= current.totalPage) {
			current.currentPage = page;
			return this.request.get(current.url, Object.assign(current.parameter, {
				page: current.currentPage,
				size: current.pageSize
			})).then(({ data }) => {
				let { total, list } = data;
				current.data = list;
				current.totalPage = total;
				current.pagers = this.getPagesData(current.currentPage, total);
			});
		}
	}

	@action('prev')
	prev(current) {
		return this.gotoPage(current, current.currentPage + 1);
	}

	@action('next')
	next(current) {
		return this.gotoPage(current, current.currentPage - 1);
	}

	getPagesData(current, total) {
		let r = [];
		let prevpage = { name: "prev" },
			nextpage = { name: "next" },
			dots1 = { name: "dot", none: false },
			dots2 = { name: "dot", none: false };
		let btns = {
			page0: { name: "btn", num: 1 },
			page1: { name: "btn", num: 2 },
			page2: { name: "btn", num: 3 },
			page3: { name: "btn", num: 4 },
			page4: { name: "btn", num: 5 }
		};
		let num = current / 1;
		if (total <= 5) {
			dots1.none = true;
			dots2.none = true;
			for (let i = 0; i < 5; i++) {
				if (i < total) {
					btns["page" + i].none = false;
					btns["page" + i].num = (i + 1);
				} else {
					btns["page" + i].none = true;
				}
			}
		} else {
			btns.page4.num = total;
		}
		for (let i = 0; i < 5; i++) {
			btns["page" + i].iscurrent = false;
		}
		if (num < 4) {
			if (total > 5) {
				dots1.none = true;
				dots2.none = false;
			}
			btns["page" + (num - 1)].iscurrent = true;
			btns.page1.num = 2;
			btns.page2.num = 3;
			btns.page3.num = 4;
		} else {
			if (num <= total - 3) {
				dots1.none = false;
				dots2.none = false;
				btns.page1.num = (num - 1);
				btns.page2.num = (num);
				btns.page3.num = (num + 1);
				btns.page2.iscurrent = true;
			} else {
				if (total > 5) {
					dots1.none = false;
					dots2.none = true;
				}
				btns.page1.num = (total - 3);
				btns.page2.num = (total - 2);
				btns.page3.num = (total - 1);
				btns.page4.iscurrent = true;
			}
		}
		if (num === 1) {
			if (total === 1) {
				prevpage.disabled = true;
				nextpage.disabled = true;
			} else {
				prevpage.disabled = true;
				nextpage.disabled = false;
			}
		} else if (num === total) {
			prevpage.disabled = false;
			nextpage.disabled = true;
		} else {
			prevpage.disabled = false;
			nextpage.disabled = false
		}
		return [prevpage, btns.page0, dots1, btns.page1, btns.page2, btns.page3, dots2, btns.page4, nextpage];
	}
}

export default FliptableService;