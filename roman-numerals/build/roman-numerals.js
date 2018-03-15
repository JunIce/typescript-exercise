"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RomanNumerals {
    static roman(param) {
        return this.nums.reduce((p, a, idx) => {
            if (a <= param) {
                param -= a;
                return p + this.romas[idx];
            }
            return p;
        }, '');
    }
}
RomanNumerals.nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
RomanNumerals.romas = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
exports.default = RomanNumerals;
//# sourceMappingURL=roman-numerals.js.map