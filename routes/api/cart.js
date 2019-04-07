const Cart = require('../../db').Cart
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get all cart items
    Cart.findAll()
        .then((items) => {
            res.status(200).send(items)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve items"
            })
        })
})

route.post('/', (req, res) => {
    // Validate the values
    if (isNaN(req.body.price)) {
        return res.status(403).send({
            error: "Price is not valid number"
        })
    }
    // Add a new item
    Cart.create({
        quantity: parseInt(req.body.quantity)
    }).then((item) => {
        res.status(201).send(item)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding item"
        })
    })
})

exports = module.exports = route