const mongoose = require('mongoose')

const productSchema = {
    _id: mongoose.Schema.Types.ObjectId, //defining the type
    name: mongoose.Schema.Types.String,
    price: mongoose.Schema.Types.String,
    description: mongoose.Schema.Types.String 
}
//want to use product schema use as "Product"
module.exports = mongoose.model('Product', productSchema)
