const express = require('express')
const mongoose = require('mongoose')
// const { response } = require('../../app')
const router = express.Router()
const Product = require('../model/products')

router.get('/', (req, res) => {
    Product.find()
    .then(result => res.status(200).json( {message: 'All Products', products: result} ))
    .catch(error => res.status(500).json( {message: 'Server error', products: error  }))
})

/* router.get('/productId', (req, res) => {
    // check if the productId = 'special'
    if(req.params.productId === 'special') {
        res.status(200).json( {message: 'You have a SPECIAL ID'} )
    } else {
        res.status(200).json( {message: 'You have an ORDINARY ID'} )
    }
}) */

router.get('./:productId', (req, res) => {
    const productId = req.params.productId
    Product.findById(productId)
        .then(response => res.status(200).json( {message: 'Object Found', dcoument: response}))
        .catch(error => res.status(500).json( { message: 'Not Found',document: error }))
})

router.post('/', (req, res) => {
    const product = new Product ({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    })
    
    //orm 
    product.save()
        .then(result => res.status(201).json( { message: 'POST SUCCESSFUL', createdPost: result} ))
        .catch(err => res.status(500).json( {message: 'SERVER ERROR', error: err} ))

})

/* router.put('/', (req, res) => {
    res.status(200).json( {message: 'PUT Request to /products'} )
})

router.delete('/', (req, res) => {
    res.status(200).json( {message: 'DELETE Request to /products'} )
})

module.exports = router; */


router.patch('/:poductID', (req, res) => {
    const productId = req.params.productID
    const updatedProduct ={
        _id: productId,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }
    Product.findByIDAndUpdate(productId, updatedProduct)
        .then(result => res.status(203).json( { messgae: 'Updated Successful', updatedDoc: {name: req.body.name, price: req.body.price} } ))
        .catch(err => res.status(500).json( { messgae: 'Server error', error: err}))
})

router.delete('/:productId', (req, res) => {
    const productID = req.params.productId  //filter
    Product.remove({_id: productID})
        .then(result => res.status(200).json( {message: 'Updated Successful',document: result} ))
        .catch(err => res.status(500).json( {message: 'Server Error', error: err} ))
})
module.exports = router;