export function diffArray(old, current) {
    let add = new Set(), remove = new Set();
    if (current.length === 0) {
        old.forEach(a => remove.add(a));
    } else {
        current.forEach(a => {
            if (old.indexOf(a) === -1) {
                add.add(a);
            }
        });
    }
    if (old.length === 0) {
        current.forEach(a => add.add(a));
    } else {
        old.forEach(a => {
            if (current.indexOf(a) === -1) {
                remove.add(a);
            }
        });
    }
    return { add: [...add], remove: [...remove] };
}