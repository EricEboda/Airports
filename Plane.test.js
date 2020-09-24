const Passenger = require('./Passenger')

const Plane = require('./Plane')

describe('Plane', function () {
    test('has a destination', function () {
        const plane = new Plane({destination: "Stanstead"})
        expect(plane.destination).toEqual("Stanstead")
    })

    test('has passengers', function () {
        const plane = new Plane({destination: 'Heathrow'})
        const passenger1 = new Passenger({name: "Jonas"})
        const passenger2 = new Passenger({name: "Martha"})
        plane.addPassenger(passenger1)
        plane.addPassenger(passenger2)
        expect(plane.passengers.length).toBe(2)
    })

})