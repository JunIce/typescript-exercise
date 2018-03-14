class ArmstrongNumbers {
    static isArmstrongNumber (value: number) {
        let origin = value;
        let result: number;
        const num = value.toString().split('');
        const length = num.length;

        result = num.reduce((total,i):any => {
            let val = parseInt(i);
            return total + Math.pow(val, length);
        }, 0)

        if(result === origin) {
            return true
        }else{
            return false
        }
    }
}

export default ArmstrongNumbers
