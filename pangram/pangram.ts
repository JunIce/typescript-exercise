class Pangram {
    private CHAR_CODE_A = ('a').charCodeAt(0)
    lettersArray: string[] = new Array(26)
    sentenceArray: string[]

    constructor( str: string ) {
        // Your code here
        this.sentenceArray = str.toLowerCase().split('')

        for( let i = 0; i < 26; i ++ ) {
            this.lettersArray.push(String.fromCharCode(this.CHAR_CODE_A + i))
        }
    }

    isPangram() {
        // Your code here
        if ( this.sentenceArray.length === 0 ) {
            return false
        }
        return this.lettersArray.every( (code) => {
            return this.sentenceArray.includes(code)
        })
    }
}

export default Pangram
