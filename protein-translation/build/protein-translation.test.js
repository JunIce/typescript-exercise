"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protein_translation_1 = require("./protein-translation");
describe('Translate input RNA sequences into proteins', () => {
    it('Methionine RNA sequence', () => {
        const expected = ['Methionine'];
        expect(protein_translation_1.default.proteins('AUG')).toEqual(expected);
    });
    xit('Phenylalanine RNA sequence 1', () => {
        const expected = ['Phenylalanine'];
        expect(protein_translation_1.default.proteins('UUU')).toEqual(expected);
    });
    xit('Phenylalanine RNA sequence 2', () => {
        const expected = ['Phenylalanine'];
        expect(protein_translation_1.default.proteins('UUC')).toEqual(expected);
    });
    xit('Leucine RNA sequence 1', () => {
        const expected = ['Leucine'];
        expect(protein_translation_1.default.proteins('UUA')).toEqual(expected);
    });
    xit('Leucine RNA sequence 2', () => {
        const expected = ['Leucine'];
        expect(protein_translation_1.default.proteins('UUG')).toEqual(expected);
    });
    xit('Serine RNA sequence 1', () => {
        const expected = ['Serine'];
        expect(protein_translation_1.default.proteins('UCU')).toEqual(expected);
    });
    xit('Serine RNA sequence 2', () => {
        const expected = ['Serine'];
        expect(protein_translation_1.default.proteins('UCC')).toEqual(expected);
    });
    xit('Serine RNA sequence 3', () => {
        const expected = ['Serine'];
        expect(protein_translation_1.default.proteins('UCA')).toEqual(expected);
    });
    xit('Serine RNA sequence 4', () => {
        const expected = ['Serine'];
        expect(protein_translation_1.default.proteins('UCG')).toEqual(expected);
    });
    xit('Tyrosine RNA sequence 1', () => {
        const expected = ['Tyrosine'];
        expect(protein_translation_1.default.proteins('UAU')).toEqual(expected);
    });
    xit('Tyrosine RNA sequence 2', () => {
        const expected = ['Tyrosine'];
        expect(protein_translation_1.default.proteins('UAC')).toEqual(expected);
    });
    xit('Cysteine RNA sequence 1', () => {
        const expected = ['Cysteine'];
        expect(protein_translation_1.default.proteins('UGU')).toEqual(expected);
    });
    xit('Cysteine RNA sequence 2', () => {
        const expected = ['Cysteine'];
        expect(protein_translation_1.default.proteins('UGC')).toEqual(expected);
    });
    xit('Tryptophan RNA sequence', () => {
        const expected = ['Tryptophan'];
        expect(protein_translation_1.default.proteins('UGG')).toEqual(expected);
    });
    xit('STOP codon RNA sequence 1', () => {
        const expected = [];
        expect(protein_translation_1.default.proteins('UAA')).toEqual(expected);
    });
    xit('STOP codon RNA sequence 2', () => {
        const expected = [];
        expect(protein_translation_1.default.proteins('UAG')).toEqual(expected);
    });
    xit('STOP codon RNA sequence 3', () => {
        const expected = [];
        expect(protein_translation_1.default.proteins('UGA')).toEqual(expected);
    });
    xit('Translate RNA strand into correct protein list', () => {
        const expected = ['Methionine', 'Phenylalanine', 'Tryptophan'];
        expect(protein_translation_1.default.proteins('AUGUUUUGG')).toEqual(expected);
    });
    xit('Translation stops if STOP codon at beginning of sequence', () => {
        const expected = [];
        expect(protein_translation_1.default.proteins('UAGUGG')).toEqual(expected);
    });
    xit('Translation stops if STOP codon at end of two-codon sequence', () => {
        const expected = ['Tryptophan'];
        expect(protein_translation_1.default.proteins('UGGUAG')).toEqual(expected);
    });
    xit('Translation stops if STOP codon at end of three-codon sequence', () => {
        const expected = ['Methionine', 'Phenylalanine'];
        expect(protein_translation_1.default.proteins('AUGUUUUAA')).toEqual(expected);
    });
    xit('Translation stops if STOP codon in middle of three-codon sequence', () => {
        const expected = ['Tryptophan'];
        expect(protein_translation_1.default.proteins('UGGUAGUGG')).toEqual(expected);
    });
    xit('Translation stops if STOP codon in middle of six-codon sequence', () => {
        const expected = ['Tryptophan', 'Cysteine', 'Tyrosine'];
        expect(protein_translation_1.default.proteins('UGGUGUUAUUAAUGGUUU')).toEqual(expected);
    });
});
//# sourceMappingURL=protein-translation.test.js.map