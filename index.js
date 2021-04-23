'use strict';

const server = require('./src/server.js');
const PORT = process.env.PORT || 3333;


// const databaseInteractions = async () => {
//     let pizza = {
//         name: 'pizza',
//         calories: 1200,
//         type: 'VEG'
//     }

//     let newFood = await food.create(pizza);
//     let oneFood = await food.read(newFood._id);
//     let allFoods = await food.read();



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
// }

// databaseInteractions();

server.start(PORT);