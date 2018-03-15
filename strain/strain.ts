

export const keep = <T>(arr: T[], fn ?: any): T[] => {
    return arr.filter(fn)
}

export const discard = <T>(arr: T[], fn ?: any): T[] => {
    return arr.reduce( (p: T[], a): any => {
        if(!fn(a)) {
            p.push(a)
        }
        return p
    },[])
}
