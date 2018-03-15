class SpaceAge {
    seconds: number

    constructor(sec: number) {
        this.seconds = sec
    }

    onEarth(): number {
        return this.convert(1)
    }
    onMercury(): number {
        return this.convert(0.2408467)
    }

    onVenus(): number {
        return this.convert(0.6151972)
    }

    onMars(): number {
        return this.convert(1.8808158)
    }

    onJupiter(): number {
        return this.convert(11.862615)
    }

    onSaturn(): number {
        return this.convert(29.447498)
    }

    onUranus(): number {
        return this.convert(84.016846)
    }

    onNeptune(): number {
        return this.convert(164.79132)
    }

    convert(ratio: number): number {
        return Math.round( this.seconds/(365.25 * ratio * 24 * 60 * 60) ) / 100
    }
}

export default SpaceAge
