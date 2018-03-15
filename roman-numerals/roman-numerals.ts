class RomanNumerals {
    private static nums: number [] = [1000,900,500,400,100,90,50,40,10,9,5,4,1]

    private static romas: string [] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    static roman( param: number ) {
        return this.nums.reduce( (p, a, idx):any => {
            if( a <= param) {
                param -= a
                return p + this.romas[idx]
            }
            return p
        },'')
    }
}

export default RomanNumerals
