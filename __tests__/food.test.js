'use strict';

require('@code-fellows/supergoose'); // pulls in and configures and runs mongo memory server and supertest

const GenericCollection = require('../models/generic-collection.js');
const foodSchema = require('../models/food-schema.js');
const food = new GenericCollection(foodSchema);

describe('Food Actions', () => {

    it('can create() a new food item', () => {
        let testFood = { name: 'test food 1', calories: 9999, type: 'FRUIT' };
        let expected = { name: 'test food 1', calories: 9999, type: 'FRUIT' };

        return food.create(testFood).then(record => {
            Object.keys(testFood).forEach(item => {
                expect(record[item]).toEqual(expected[item]);
            })
        })
    });

    it('can read() all food items', () => {
        let testFood2 = { name: 'test food 2', calories: 9999, type: 'VEG' };
        let expected2 = { name: 'test food 2', calories: 9999, type: 'VEG' };

        return food.create(testFood2)
            .then(record => {
                return food.read(record._id)
                    .then(item => {
                        // console.log(item);
                    })
            })
    });

    it('can read() one food item', () => {

    });

    it('can delete() all food items', () => {

    });

    it('can update() all food items', () => {

    });

    it('should throw a validation error if property not given', () => {

    });
})