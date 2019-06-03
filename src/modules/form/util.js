export function formatDate(date, format) {
    if (arguments.length === 1) {
        format = date;
        date = new Date();
    }
    let map = {
        y: date.getFullYear(),
        M: (date.getMonth() + 1),
        d: date.getDate(),
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds()
    };
    return Reflect.ownKeys(map).reduce((a, b) => {
        return a.replace(new RegExp(`[${b}]+`, "g"), (str) => {
            let value = map[b] + "";
            if (str.length !== value.length) {
                return str.length > value.length ? (Array.apply(null, Array(str.length - value.length)).map(() => "0").join("") + value) : value.substring(str.length);
            } else {
                return value;
            }
        });
    }, format);
}

export function isRemoved(node) {
    let r = false, target = node;
    while (target && target !== document) {
        if (!target.parentNode) {
            r = true;
            break;
        } else {
            target = target.parentNode;
        }
    }
    return r;
}