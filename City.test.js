const Airport = require('./Airport')

const City = require('./City')

describe('City', function () {
    test('has a name', () => {
        const city = new City({cityName: "London"})
        expect(city.cityName).toEqual("London")
    })

    test('has an airport', () => {
        const city = new City({cityName: "Moscow"})
        const airport1 = new Airport({airportName: "Vnukovo"})
        const airport2 = new Airport({airportName: "Ostafyevo"})
        city.addAirport(airport1)
        city.addAirport(airport2)
        expect(city.airports.length).toBe(2)
    })

})

