'use strict';

const express = require('express');

const GenericCollection = require('../models/generic-collection.js');
const Product = require('../models/product-schema.js');
const products = new GenericCollection(Product);

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getOneProduct);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

async function getAllProducts(req, res) {
    let getProducts = await products.read();
    res.status(200).json(getProducts);
}

async function getOneProduct(req, res) {
    const id = req.params.id;
    let getProduct = await products.read(id);
    res.status(200).json(getProduct);
}

async function createProduct(req, res) {
    let newProduct = await products.create(req.body);
    res.status(201).json(newProduct);
}

async function updateProduct(req, res) {
    const id = req.params.id;
    let updateProduct = await products.update(id, req.body);

    res.status(200).json(updateProduct);
}

async function deleteProduct(req, res) {
    const id = req.params.id;
    let deleteProduct = await products.delete(id, req.body);

    res.status(200).json(deleteProduct);
}




module.exports = router;