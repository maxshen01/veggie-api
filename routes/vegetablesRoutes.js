const express = require('express')
const veggieRouter = express.Router()
const veggieController = require('../controllers/vegetablesFunctions')

veggieRouter.get('/', veggieController.index)
veggieRouter.post('/', veggieController.create)

module.exports = { 
    veggieRouter
}