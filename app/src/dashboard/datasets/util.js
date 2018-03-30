import Util from "adajs/src/util/util";

const PARENT = Symbol("parent");
const util = {
    activeLink(link, menu) {
        let result = null;
        let check = (list) => {
            list.forEach(item => {
                item.active = false;
                Util.setProp(item, PARENT, list);
                if (item.link === link) {
                    result = item;
                }
                if (item.list) {
                    check(item.list);
                }
            });
        };
        check(menu);
        if (result) {
            let a = result;
            while (a) {
                a.active = true;
                a = a[PARENT];
            }
        }
        return result;
    }
};

export default util;