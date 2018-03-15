"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProteinTranslation {
    static proteins(rna) {
        // Your code here
        const rnas = rna.split('');
        let str = '';
        let newArr = [];
        rnas.map((n, idx) => {
            str += n;
            if ((idx + 1) % 3 == 0 && this.pipe(str) !== undefined) {
                newArr.push(this.pipe(str));
                str = '';
            }
        });
        return newArr;
    }
    static pipe(codon) {
        if ((/AUG/g).test(codon)) {
            return 'Methionine';
        }
        else if ((/UGG/g).test(codon)) {
            return 'Tryptophan';
        }
        else if ((/UU(U|C)/g).test(codon)) {
            return 'Phenylalanine';
        }
        else if ((/UU(A|G)/g).test(codon)) {
            return 'Leucine';
        }
        else if ((/UC(A|G|U|C)/g).test(codon)) {
            return 'Serine';
        }
        else if ((/UA(U|C)/g).test(codon)) {
            return 'Tyrosine';
        }
        else if ((/UG(U|C)/g).test(codon)) {
            return 'Cysteine';
        }
        else if ((/UG(U|C)/g).test(codon)) {
            return 'Cysteine';
        }
        else if ((/(UAA|UAG|UGA)/g).test(codon)) {
            return;
        }
    }
}
exports.default = ProteinTranslation;
//# sourceMappingURL=protein-translation.js.map