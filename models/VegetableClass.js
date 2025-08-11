const veggies = require("../vegetables.json")

class Veggies {
    constructor({ genus, name, id, family, order, nutritions }) {
        this.genus = genus
        this.name = name
        this.id = id
        this.family = family
        this.order = order
        this.nutritions = nutritions
    }

    static showAll() {
        return veggies.map( vegetable => new Veggies(vegetable))
    }

    static create(data) {
        const newVeggie = data
        const veggie = veggies.find((veggie) => veggie.name.toLowerCase() === newVeggie.name.toLowerCase())
        if (veggie) {
            throw Error('Vegetable already exists')
        } else {
            newVeggie.id = veggies.length + 1
            veggies.push(newVeggie)
            return new Veggies(newVeggie)
        }
    }
}


module.exports = Veggies