const express = require("express")
const app = express()

app.use(express.json())

const { veggieRouter } = require('./routes/vegetablesRoutes')

app.use('/vegetables', veggieRouter)

module.exports = {
    app
}