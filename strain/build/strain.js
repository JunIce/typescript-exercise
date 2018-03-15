"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keep = (arr, fn) => {
    return arr.filter(fn);
};
exports.discard = (arr, fn) => {
    return arr.reduce((p, a) => {
        if (!fn(a)) {
            p.push(a);
        }
        return p;
    }, []);
};
//# sourceMappingURL=strain.js.map