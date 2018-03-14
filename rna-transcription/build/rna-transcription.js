"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transcriptor {
    toRna(nucleotides) {
        // Your code here
        const nus = nucleotides.split('');
        return nus.reduce((pre, aft) => {
            return pre + this.tranScribe(aft);
        }, '');
    }
    tranScribe(nucleotide) {
        let transdNucleotid;
        switch (nucleotide) {
            case "A":
                transdNucleotid = "U";
                break;
            case "T":
                transdNucleotid = "A";
                break;
            case "G":
                transdNucleotid = "C";
                break;
            case "C":
                transdNucleotid = "G";
                break;
            default:
                transdNucleotid = nucleotide;
        }
        return transdNucleotid;
    }
}
exports.default = Transcriptor;
//# sourceMappingURL=rna-transcription.js.map