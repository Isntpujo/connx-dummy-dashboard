export function cn(...cns) {
    return cns.join(' ');
}

export function variant(base, variants) {
    return function builder(props) {
        const classes = [];

        Object.entries(props).forEach(([key, value]) => {
            classes.push(variants[key][value]);
        });
        return cn(base, ...classes)
    };
}