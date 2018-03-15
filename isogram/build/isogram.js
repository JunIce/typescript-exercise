"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Isogram {
    static isIsogram(str) {
        // Your code here
        const strArr = str.split('').sort();
        return strArr.every((e, idx, arr) => {
            if (idx === 0)
                return true;
            if (e === arr[idx - 1])
                return false;
            return true;
        });
    }
}
exports.default = Isogram;
//# sourceMappingURL=isogram.js.map