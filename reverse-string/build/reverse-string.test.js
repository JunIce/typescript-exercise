"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reverse_string_1 = require("./reverse-string");
describe('Reverse String', () => {
    it('an empty string', () => {
        const expected = '';
        expect(reverse_string_1.default.reverse('')).toEqual(expected);
    });
    xit('a word', () => {
        const expected = 'tobor';
        expect(reverse_string_1.default.reverse('robot')).toEqual(expected);
    });
    xit('a capitalized word', () => {
        const expected = 'nemaR';
        expect(reverse_string_1.default.reverse('Ramen')).toEqual(expected);
    });
    xit('a sentence with punctuation', () => {
        const expected = `!yrgnuh m'I`;
        expect(reverse_string_1.default.reverse(`I'm hungry!`)).toEqual(expected);
    });
    xit('a palindrome', () => {
        const expected = 'racecar';
        expect(reverse_string_1.default.reverse('racecar')).toEqual(expected);
    });
});
//# sourceMappingURL=reverse-string.test.js.map