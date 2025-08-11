const { error } = require("console")
const Veggies = require("../models/VegetableClass")

const index = async (req, res) => {
    try {
        const veggies = await Veggies.showAll()
        res.status(200).send(veggies)
    } catch(err) {
        res.status(500).send({error: "server error"})
    }
}

const create = async (req, res) => {
    try {
        const newVeggie = await Veggies.create(req.body)
        res.status(201).send(newVeggie)
    } catch(err) {
        res.status(409).send({error:err})
    }
}

module.exports = {
    index,
    create
}