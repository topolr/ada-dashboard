const PARENT = "_parent";
const LEVEL = "_level";
const util = {
    setMenu(menu) {
        let set = (parent, list, level) => {
            list.forEach(item => {
                if (!item[LEVEL]) {
                    item.active = false;
                    item[PARENT] = parent;
                    item[LEVEL] = level;
                    item.link = `${(parent ? parent.link : "/")}/${item.link}`.replace(/[\/]+/g, "/");
                }
                if (item.list) {
                    set(item, item.list, level + 1);
                }
            });
        };
        set(null, menu, 1);
    },
    activeLink(link, menu) {
        link = link.substring(0, link.length - 1) || "/";
        let result = null;
        let check = (list) => {
            list.forEach(item => {
                item.active = false;
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