const Vendor = require('../../db').Vendor
const route = require('express').Router()

route.get('/', (req, res) => {
    // We want to send an array of all vendors
    // From our database here

    Vendor.findAll()
        .then((vendors) => {
            res.status(200).send(vendors)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrive vendors"
            })
        })

})

route.post('/', (req, res) => {
    // We expect the req to have name in it
    // We will create a new vendor 

    Vendor.create({
        name: req.body.name
    }).then((vendor) => {
        res.status(201).send(vendor)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new vendor"
        })
    })
})

exports = module.exports = route