"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArmstrongNumbers {
    static isArmstrongNumber(value) {
        let origin = value;
        let result;
        const num = value.toString().split('');
        const length = num.length;
        result = num.reduce((total, i) => {
            let val = parseInt(i);
            return total + Math.pow(val, length);
        }, 0);
        if (result === origin) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.default = ArmstrongNumbers;
//# sourceMappingURL=armstrong-numbers.js.map