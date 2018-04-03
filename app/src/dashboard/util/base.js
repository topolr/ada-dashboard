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
    }
};

export default util;