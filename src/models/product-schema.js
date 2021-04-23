'use strict';

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    product: { type: String, required: true },
    description: { type: String }
})

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;