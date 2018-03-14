class SimpleCipher {
    readonly key: string;
    private CHAR_CODE_A: number = 'a'.charCodeAt(0);
    private CHAR_CODE_Z: number = 'z'.charCodeAt(0);

    constructor(key?: string) {
        if(key === undefined) {
            this.key = this.randomKey()
        } else {
            if (!/^[a-z]+$/.test(key)) {
                throw 'Bad key';
            }
            this.key = key.toLowerCase()
        }
    }

    randomKey(): any {
        const keys = new Array(100);
        keys.map( (key) => {
            let keyNum: number = Math.floor(Math.random() * (this.CHAR_CODE_Z - this.CHAR_CODE_A) + this.CHAR_CODE_A);
            key = String.fromCharCode(keyNum)
        })
        return keys.join('')
    }

    encode( str: string ): any {
        // Your code here
        const chars = str.split('');
        chars.map((char,index) => {
            const diff = this.key.charCodeAt(index % this.key.length) - this.CHAR_CODE_A;

            const newChar = char.charCodeAt(0) + diff;

            return String.fromCharCode(newChar > this.CHAR_CODE_Z ? newChar - this.CHAR_CODE_Z - 1 + this.CHAR_CODE_A : newChar);

        }).join("")
    }

    decode( str: string ): any {
        const chars = str.split('');
        chars.map((char,index) => {
            const diff = this.key.charCodeAt(index % this.key.length) - this.CHAR_CODE_A;

            const newChar = char.charCodeAt(0) + diff;

            return String.fromCharCode(newChar < this.CHAR_CODE_A ? newChar + this.CHAR_CODE_Z + 1 - this.CHAR_CODE_A : newChar);

        }).join("")
    }
}

export default SimpleCipher
