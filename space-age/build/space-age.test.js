"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const space_age_1 = require("./space-age");
describe('Space Age', () => {
    it('age in seconds', () => {
        const age = new space_age_1.default(1000000);
        expect(age.seconds).toEqual(1000000);
    });
    xit('age in earth years', () => {
        const age = new space_age_1.default(1000000000);
        expect(age.onEarth()).toEqual(31.69);
    });
    xit('age in mercury years', () => {
        const age = new space_age_1.default(2134835688);
        expect(age.onEarth()).toEqual(67.65);
        expect(age.onMercury()).toEqual(280.88);
    });
    xit('age in venus years', () => {
        const age = new space_age_1.default(189839836);
        expect(age.onEarth()).toEqual(6.02);
        expect(age.onVenus()).toEqual(9.78);
    });
    xit('age in mars years', () => {
        const age = new space_age_1.default(2329871239);
        expect(age.onEarth()).toEqual(73.83);
        expect(age.onMars()).toEqual(39.25);
    });
    xit('age in jupiter years', () => {
        const age = new space_age_1.default(901876382);
        expect(age.onEarth()).toEqual(28.58);
        expect(age.onJupiter()).toEqual(2.41);
    });
    xit('age in saturn years', () => {
        const age = new space_age_1.default(3000000000);
        expect(age.onEarth()).toEqual(95.06);
        expect(age.onSaturn()).toEqual(3.23);
    });
    xit('age in uranus years', () => {
        const age = new space_age_1.default(3210123456);
        expect(age.onEarth()).toEqual(101.72);
        expect(age.onUranus()).toEqual(1.21);
    });
    xit('age in neptune year', () => {
        const age = new space_age_1.default(8210123456);
        expect(age.onEarth()).toEqual(260.16);
        expect(age.onNeptune()).toEqual(1.58);
    });
});
//# sourceMappingURL=space-age.test.js.map