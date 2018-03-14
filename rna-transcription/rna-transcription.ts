class Transcriptor {
    toRna( nucleotides: string ) {
        // Your code here
        const nus = nucleotides.split('')
        return nus.reduce( ( pre, aft) => {
            return pre + this.tranScribe(aft)
        }, '')
    }

    tranScribe( nucleotide: string ) {
        let transdNucleotid: string
        switch ( nucleotide ) {
            case "A" :
                transdNucleotid = "U"
                break

            case "T" :
                transdNucleotid = "A"
                break

            case "G" :
                transdNucleotid = "C"
                break

            case "C" :
                transdNucleotid = "G"
                break

            default:
                transdNucleotid = nucleotide
        }
        return transdNucleotid
    }
}

export default Transcriptor
