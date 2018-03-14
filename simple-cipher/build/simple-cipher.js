"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleCipher {
    constructor(key) {
        this.CHAR_CODE_A = 'a'.charCodeAt(0);
        this.CHAR_CODE_Z = 'z'.charCodeAt(0);
        if (key === undefined) {
            this.key = this.randomKey();
        }
        else {
            if (!/^[a-z]+$/.test(key)) {
                throw 'Bad key';
            }
            this.key = key.toLowerCase();
        }
    }
    randomKey() {
        const keys = new Array(100);
        keys.map((key) => {
            let keyNum = Math.floor(Math.random() * (this.CHAR_CODE_Z - this.CHAR_CODE_A) + this.CHAR_CODE_A);
            key = String.fromCharCode(keyNum);
        });
        return keys.join('');
    }
    encode(str) {
        // Your code here
        const chars = str.split('');
        chars.map((char, index) => {
            const diff = this.key.charCodeAt(index % this.key.length) - this.CHAR_CODE_A;
            const newChar = char.charCodeAt(0) + diff;
            return String.fromCharCode(newChar > this.CHAR_CODE_Z ? newChar - this.CHAR_CODE_Z - 1 + this.CHAR_CODE_A : newChar);
        }).join("");
    }
    decode(str) {
        const chars = str.split('');
        chars.map((char, index) => {
            const diff = this.key.charCodeAt(index % this.key.length) - this.CHAR_CODE_A;
            const newChar = char.charCodeAt(0) + diff;
            return String.fromCharCode(newChar < this.CHAR_CODE_A ? newChar + this.CHAR_CODE_Z + 1 - this.CHAR_CODE_A : newChar);
        }).join("");
    }
}
exports.default = SimpleCipher;
//# sourceMappingURL=simple-cipher.js.map