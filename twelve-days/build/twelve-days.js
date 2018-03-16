"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TwelveDays {
    static recite(beginning, ending) {
        let key = Object.keys(this.NumToCode[beginning - 1])[0];
        let end = this.NumToCode.reduce((pre, aft, idx) => {
            if ((beginning - 1) >= idx || idx <= (ending - 1)) {
                for (let k in aft) {
                    let n = aft[k];
                    pre.push(n);
                }
            }
            return pre;
        }, []).join(',');
        return `On the ${key} day of Christmas my true love gave to me, ${end}.\n`;
    }
}
TwelveDays.NumToCode = [
    { "first": "a Partridge in a Pear Tree" },
    { "second": "two Turtle Doves" },
    { "third": "three French Hens" },
    { "fourth": "four Calling Birds" },
    { "fifth": "five Gold Rings" },
    { "sixth": "six Geese-a-Laying" },
    { "seventh": "seven Swans-a-Swimming" },
    { "eighth": "eight Maids-a-Milking" },
    { "ninth": "nine Ladies Dancing" },
    { "tenth": "ten Lords-a-Leaping" },
    { "eleventh": "eleven Pipers Piping" },
    { "twelfth": "twelve Drummers Drumming" },
];
exports.default = TwelveDays;
//# sourceMappingURL=twelve-days.js.map