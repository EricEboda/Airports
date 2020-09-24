const Plane = require('./Plane')

const Airport = require('./Airport')

describe('Airport', function() {
    test('has a name', function () {
        const airport = new Airport({airportName: "Gatwick"})
        expect(airport.airportName).toEqual("Gatwick")
    })

    test('has planes', function () {
        const airport = new Airport({airportName: "Luton"})
        const flight1 = new Plane({destination: "Ibiza"})
        const flight2 = new Plane({destination: "Berlin"})
        airport.addFlight(flight1)
        airport.addFlight(flight2)
        expect(airport.planes.length).toBe(2)
    })
})