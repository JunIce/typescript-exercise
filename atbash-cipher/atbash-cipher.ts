class AtbashCipher {
    private Plain: string = "abcdefghijklmnopqrstuvwxyz"
    private Cipher: string = "zyxwvutsrqponmlkjihgfedcba"

    encode(params: string): string {
        let paramsToArr = this.convers(params);

        return paramsToArr.reduce((p,a) => {
            let idx = this.Plain.indexOf(a)
            if(idx > -1) {
                return p + this.Cipher.substr(idx, 1)
            }else{
                return p + a
            }
        },'')
    }

    decode(params: string): string {
        let paramsToArr = this.convers(params);

        return paramsToArr.reduce((p,a) => {
            let idx = this.Cipher.indexOf(a)
            if(idx > -1) {
                return p + this.Plain.substr(idx, 1)
            }else{
                return p + a
            }
        },'')
    }

    private convers(params: string): string[] {
        let p = params.replace(/\s+/g,"").toLowerCase().split('');
        return p
    }
}

export default AtbashCipher
