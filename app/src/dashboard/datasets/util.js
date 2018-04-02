const PARENT = "_parent";
const LEVEL = "_level";
const util = {
    activeLink(link, menu) {
        link = link.substring(0, link.length - 1) || "/";
        let result = null;
        let check = (list, level, parent) => {
            list.forEach(item => {
                item.active = false;
                item[PARENT] = parent;
                item[LEVEL] = level;
                if (item.link === link) {
                    result = item;
                }
                if (item.list) {
                    check(item.list, level + 1, item);
                }
            });
        };
        check(menu, 1, null);
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