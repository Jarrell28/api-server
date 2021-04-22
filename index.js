'use strict';

const mongoose = require('mongoose'); // pulls mongoose in application
const Food = require('./models/food-schema.js');
const GenericCollection = require('./models/generic-collection.js');
const food = new GenericCollection(Food);

const MONGODB_URI = 'mongodb://localhost:27017/food'; //if db-name exists it will connect you, if it doesn't it will create the database

const options = { useNewUrlParser: true, useUnifiedTopology: true } // Avoids URL parsing issues, required

mongoose.connect(MONGODB_URI, options);


const databaseInteractions = async () => {
    let pizza = {
        name: 'pizza',
        calories: 1200,
        type: 'VEG'
    }

    let newFood = await food.create(pizza);
    let oneFood = await food.read(newFood._id);
    let allFoods = await food.read();



    // console.log(`New Food: ` + newFood);
    // console.log(`One Food: ` + oneFood);
    // console.log(`All Foods: One ` + allFoods);

    // let food = new Food(pizza);
    // await food.save();

    // // console.log('New Food Item: ', food);

    // let oneItem = await Food.findById(food._id);

    // // console.log(oneItem);

    // let allFoodItems = await Food.find({});

    // console.log(allFoodItems);
}

databaseInteractions();