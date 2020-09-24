class Airport {
    constructor({airportName}) {
        this.airportName = airportName
        this.planes = []
    }
    addFlight(plane) {
        this.planes.push(plane)
    }
}

module.exports = Airport