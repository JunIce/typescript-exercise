"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AtbashCipher {
    constructor() {
        this.Plain = "abcdefghijklmnopqrstuvwxyz";
        this.Cipher = "zyxwvutsrqponmlkjihgfedcba";
    }
    encode(params) {
        let paramsToArr = this.convers(params);
        return paramsToArr.reduce((p, a) => {
            let idx = this.Plain.indexOf(a);
            if (idx > -1) {
                return p + this.Cipher.substr(idx, 1);
            }
            else {
                return p + a;
            }
        }, '');
    }
    decode(params) {
        let paramsToArr = this.convers(params);
        return paramsToArr.reduce((p, a) => {
            let idx = this.Cipher.indexOf(a);
            if (idx > -1) {
                return p + this.Plain.substr(idx, 1);
            }
            else {
                return p + a;
            }
        }, '');
    }
    convers(params) {
        let p = params.replace(/\s+/g, "").toLowerCase().split('');
        return p;
    }
}
exports.default = AtbashCipher;
//# sourceMappingURL=atbash-cipher.js.map