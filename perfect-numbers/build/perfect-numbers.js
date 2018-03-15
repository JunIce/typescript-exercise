"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PerfectNumbers {
    static classify(num) {
        if (num <= 0) {
            throw 'Classification is only possible for natural numbers.';
        }
        for (let i = num; i > 0; i--) {
            if (i !== num && num % i === 0) {
                this.aliquot.push(i);
            }
        }
        let sum = this.aliquot.reduce((pre, aft) => {
            return pre + aft;
        }, 0);
        return this.getResult(sum, num);
    }
    static getResult(sum, normal) {
        if (sum === normal) {
            return 'perfect';
        }
        else if (sum > normal) {
            return 'abundant';
        }
        else if (sum < normal) {
            return 'deficient';
        }
    }
}
PerfectNumbers.aliquot = [];
exports.default = PerfectNumbers;
//# sourceMappingURL=perfect-numbers.js.map