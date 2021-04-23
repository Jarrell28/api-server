'use strict';

const express = require('express');

const GenericCollection = require('../models/generic-collection.js');
const User = require('../models/user-schema.js');
const users = new GenericCollection(User);

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getOneUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

async function getAllUsers(req, res) {
    let getUsers = await users.read();
    console.log(getUsers);
    res.status(200).json(getUsers);
}

async function getOneUser(req, res) {
    const id = req.params.id;
    let getUser = await users.read(id);
    res.status(200).json(getUser);
}

async function createUser(req, res) {
    let newUser = await users.create(req.body);
    res.status(201).json(newUser);
}

async function updateUser(req, res) {
    const id = req.params.id;
    let updateUser = await users.update(id, req.body);

    res.status(200).json(updateUser);
}

async function deleteUser(req, res) {
    const id = req.params.id;
    let deleteUser = await users.delete(id, req.body);

    res.status(200).json(deleteUser);
}




module.exports = router;