"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isogram_1 = require("./isogram");
describe('Check if the given string is an isogram', () => {
    it('empty string', () => {
        const expected = true;
        expect(isogram_1.default.isIsogram('')).toEqual(expected);
    });
    xit('isogram with only lower case characters', () => {
        const expected = true;
        expect(isogram_1.default.isIsogram('isogram')).toEqual(expected);
    });
    xit('word with one duplicated character', () => {
        const expected = false;
        expect(isogram_1.default.isIsogram('eleven')).toEqual(expected);
    });
    xit('longest reported english isogram', () => {
        const expected = true;
        expect(isogram_1.default.isIsogram('subdermatoglyphic')).toEqual(expected);
    });
    xit('word with duplicated character in mixed case', () => {
        const expected = false;
        expect(isogram_1.default.isIsogram('Alphabet')).toEqual(expected);
    });
    xit('hypothetical isogrammic word with hyphen', () => {
        const expected = true;
        expect(isogram_1.default.isIsogram('thumbscrew-japingly')).toEqual(expected);
    });
    xit('isogram with duplicated hyphen', () => {
        const expected = true;
        expect(isogram_1.default.isIsogram('six-year-old')).toEqual(expected);
    });
    xit('made-up name that is an isogram', () => {
        const expected = true;
        expect(isogram_1.default.isIsogram('Emily Jung Schwartzkopf')).toEqual(expected);
    });
    xit('duplicated character in the middle', () => {
        const expected = false;
        expect(isogram_1.default.isIsogram('accentor')).toEqual(expected);
    });
});
//# sourceMappingURL=isogram.test.js.map