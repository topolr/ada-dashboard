const util = {
    getCurrentLink(menuItem) {
        let link = menuItem.link;
        if (menuItem._level === 3) {
            link = menuItem._parent.link;
        }
        return link;
    },
    getCurrentLinkList(menuItem) {
        if (menuItem._level === 3) {
            return menuItem._parent.list;
        } else {
            return menuItem.list;
        }
    },
    getOpenLink(menuItem) {
        let link = menuItem.link;
        if (menuItem._level === 2 && menuItem.list.length > 0) {
            link = menuItem.list[0].link;
        }
        return link;
    }
};

export default util;