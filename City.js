class City {
    constructor({cityName}) {
        this.cityName = cityName
        this.airports = []
    }
    addAirport(airport){
        this.airports.push(airport)
    }
}

module.exports = City