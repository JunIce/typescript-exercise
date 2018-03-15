class Isogram {
    static isIsogram( str: string ) {
        // Your code here
        const strArr = str.split('').sort()
        return strArr.every((e, idx, arr) => {
            if(idx === 0) return true
            if(e === arr[idx-1]) return false
            return true
        })
    }
}

export default Isogram
