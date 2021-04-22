'use strict';

const mongoose = require('mongoose');

//Database Architecture, Controls what data can enter database
const foodSchema = mongoose.Schema({
    name: { type: String, required: true },
    calories: { type: Number, required: true },
    type: { type: String, uppercase: true, enum: ['FRUIT', 'VEG', 'MEAT'] } //enum more constraints, the type can only match whats in enum
})

// mongoose.model('collection-name', 'schema architecture')
const foodModel = mongoose.model('food', foodSchema);

module.exports = foodModel;

