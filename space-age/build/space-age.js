"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SpaceAge {
    constructor(sec) {
        this.seconds = sec;
    }
    onEarth() {
        return this.convert(1);
    }
    onMercury() {
        return this.convert(0.2408467);
    }
    onVenus() {
        return this.convert(0.6151972);
    }
    onMars() {
        return this.convert(1.8808158);
    }
    onJupiter() {
        return this.convert(11.862615);
    }
    onSaturn() {
        return this.convert(29.447498);
    }
    onUranus() {
        return this.convert(84.016846);
    }
    onNeptune() {
        return this.convert(164.79132);
    }
    convert(ratio) {
        return Math.round(this.seconds / (365.25 * ratio * 24 * 60 * 60)) / 100;
    }
}
exports.default = SpaceAge;
//# sourceMappingURL=space-age.js.map