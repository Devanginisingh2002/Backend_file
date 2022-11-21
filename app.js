// handle requests and responses 
const express = require('express')
// const mongoose = require('mongoose')
const app = express()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')

app.use(cors())
// Make a MongoDB conncectivity using mongoose as ORM 
mongoose.connect(`mongodb+srv://Devangini:devang_123@cluster0.bri1x.mongodb.net/?retryWrites=true&w=majority`)
    .then( ()=> console.log('Connection successful!') )
    .catch( err => console.error(err))

// MIDDLEWARES
// Adding body parser as a middleware
app.use(bodyparser.urlencoded( {extended:false}))
app.use(bodyparser.json())


/* app.use('/products',(req,res)=>{
    res.status(200).json( {message: ' This is a Product Route'} )

}) */


// Managing our routes
const productRoutes = require('./api/routes/products')
app.use('/products', productRoutes)

/* app.use( (request, response) => {
    response.status(200).json ({message: 'IT WORKS!!'})
}) */

// Error Handling
app.use( (request, response) => {
    response.status(404).json ({message: '404, Request Not found!'})
})

module.exports = app;