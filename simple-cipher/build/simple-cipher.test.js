"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simple_cipher_1 = require("./simple-cipher");
describe('Random key cipher', () => {
    const simpleCipher = new simple_cipher_1.default();
    it('has a key made of letters', () => {
        expect(simpleCipher.key).toMatch(/^[a-z]+$/);
    });
    // Here we take advantage of the fact that plaintext of "aaa..."
    // outputs the key. This is a critical problem with shift ciphers, some
    // characters will always output the key verbatim.
    xit('can encode', () => {
        expect(simpleCipher.encode('aaaaaaaaaa')).toEqual(simpleCipher.key.substr(0, 10));
    });
    xit('can decode', () => {
        expect(simpleCipher.decode(simpleCipher.key.substr(0, 10))).toEqual('aaaaaaaaaa');
    });
    xit('is reversible', () => {
        const plaintext = 'abcdefghij';
        expect(simpleCipher.decode(simpleCipher.encode(plaintext))).toEqual(plaintext);
    });
});
describe('Incorrect key cipher', () => {
    xit('throws an error with an all caps key', () => {
        expect(() => {
            new simple_cipher_1.default('ABCDEF');
        }).toThrowError('Bad key');
    });
    xit('throws an error with a numeric key', () => {
        expect(() => {
            new simple_cipher_1.default('12345');
        }).toThrow('Bad key');
    });
    xit('throws an error with an empty key', () => {
        expect(() => {
            new simple_cipher_1.default('');
        }).toThrow('Bad key');
    });
});
describe('Substitution cipher', () => {
    const key = 'abcdefghij';
    const simpleCipher = new simple_cipher_1.default(key);
    xit('keeps the submitted key', () => {
        expect(simpleCipher.key).toEqual(key);
    });
    xit('can encode', () => {
        expect(simpleCipher.encode('aaaaaaaaaa')).toEqual('abcdefghij');
    });
    xit('can decode', () => {
        expect(simpleCipher.decode('abcdefghij')).toEqual('aaaaaaaaaa');
    });
    xit('is reversible', () => {
        expect(simpleCipher.decode(simpleCipher.encode('abcdefghij'))).toEqual('abcdefghij');
    });
    xit(': double shift encode', () => {
        expect(new simple_cipher_1.default('iamapandabear').encode('iamapandabear'))
            .toEqual('qayaeaagaciai');
    });
    xit('can wrap on encode', () => {
        expect(simpleCipher.encode('zzzzzzzzzz')).toEqual('zabcdefghi');
    });
    xit('can wrap on decode', () => {
        expect(simpleCipher.decode('zabcdefghi')).toEqual('zzzzzzzzzz');
    });
    xit('can handle messages longer than the key', () => {
        expect(new simple_cipher_1.default('abc').encode('iamapandabear'))
            .toEqual('iboaqcnecbfcr');
    });
});
//# sourceMappingURL=simple-cipher.test.js.map