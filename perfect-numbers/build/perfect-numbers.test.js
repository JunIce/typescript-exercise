"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const perfect_numbers_1 = require("./perfect-numbers");
describe('Perfect numbers', () => {
    it('Smallest perfect number is classified correctly', () => {
        const expected = 'perfect';
        expect(perfect_numbers_1.default.classify(6)).toEqual(expected);
    });
    xit('Smallest perfect number is classified correctly', () => {
        const expected = 'perfect';
        expect(perfect_numbers_1.default.classify(28)).toEqual(expected);
    });
    xit('Smallest perfect number is classified correctly', () => {
        const expected = 'perfect';
        expect(perfect_numbers_1.default.classify(33550336)).toEqual(expected);
    });
});
describe('Abundant numbers', () => {
    xit('Smallest abundant number is classified correctly', () => {
        const expected = 'abundant';
        expect(perfect_numbers_1.default.classify(12)).toEqual(expected);
    });
    xit('Medium abundant number is classified correctly', () => {
        const expected = 'abundant';
        expect(perfect_numbers_1.default.classify(30)).toEqual(expected);
    });
    xit('Large abundant number is classified correctly', () => {
        const expected = 'abundant';
        expect(perfect_numbers_1.default.classify(33550335)).toEqual(expected);
    });
});
describe('Deficient numbers', () => {
    xit('Smallest prime deficient number is classified correctly', () => {
        const expected = 'deficient';
        expect(perfect_numbers_1.default.classify(2)).toEqual(expected);
    });
    xit('Smallest non-prime deficient number is classified correctly', () => {
        const expected = 'deficient';
        expect(perfect_numbers_1.default.classify(4)).toEqual(expected);
    });
    xit('Medium deficient number is classified correctly', () => {
        const expected = 'deficient';
        expect(perfect_numbers_1.default.classify(32)).toEqual(expected);
    });
    xit('Large deficient number is classified correctly', () => {
        const expected = 'deficient';
        expect(perfect_numbers_1.default.classify(33550337)).toEqual(expected);
    });
    xit('Edge case (no factors other than itself) is classified correctly', () => {
        const expected = 'deficient';
        expect(perfect_numbers_1.default.classify(1)).toEqual(expected);
    });
});
describe('Invalid inputs', () => {
    xit('Zero is rejected (not a natural number', () => {
        expect(() => { perfect_numbers_1.default.classify(0); }).toThrowError('Classification is only possible for natural numbers.');
    });
    xit('Negative integer is rejected (not a natural number', () => {
        expect(() => { perfect_numbers_1.default.classify(-1); }).toThrowError('Classification is only possible for natural numbers.');
    });
});
//# sourceMappingURL=perfect-numbers.test.js.map