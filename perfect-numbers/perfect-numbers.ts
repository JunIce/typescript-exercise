class PerfectNumbers {
    private static aliquot: number[] = []
    static classify(num: number) {
        
        if(num <= 0) {
            throw 'Classification is only possible for natural numbers.'
        }

        for(let i = num; i > 0; i--) {
            if(i !== num && num%i === 0) {
                this.aliquot.push(i)
            }
        }

        let sum = this.aliquot.reduce( (pre, aft): number => {
            return pre + aft
        },0)

        return this.getResult(sum, num)
    }

    static getResult(sum: number, normal: number): any {
        if(sum === normal) {
            return 'perfect'
        }
        else if(sum > normal ) {
            return 'abundant'
        }
        else if(sum < normal) {
            return 'deficient'
        }
    }

}

export default PerfectNumbers
