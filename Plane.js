class Plane {
    constructor({destination}) {
        this.destination = destination
        this.passengers = []
    }
    addPassenger(passenger) {
        this.passengers.push(passenger)
    }
}

module.exports = Plane