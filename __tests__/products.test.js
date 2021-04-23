'use strict';

require('@code-fellows/supergoose'); // pulls in and configures and runs mongo memory server and supertest

const GenericCollection = require('../src/models/generic-collection.js');
const productSchema = require('../src/models/product-schema.js');
const product = new GenericCollection(productSchema);

describe('Product Actions', () => {

    it('can create() a new product object', () => {
        let testUser = { product: 'T Shirt', description: 'White Shirt' };
        let expected = { product: 'T Shirt', description: 'White Shirt' };

        return product.create(testUser).then(record => {

            expect(record['product']).toEqual('T Shirt');
            expect(typeof record).toBe('object');
            Object.keys(testUser).forEach(item => {
                expect(record[item]).toEqual(expected[item]);
            })
        })
    });

    it('can read() one product items', () => {
        let testUser = { product: 'T Shirt', description: 'White Shirt' };

        return product.create(testUser)
            .then(record => {
                return product.read(record._id)
                    .then(item => {
                        expect(item.product).toEqual(testUser.product);
                    })
            })
    });

    it('can read() all product items', () => {
        return product.read()
            .then(record => {
                expect(typeof record).toBe('object');
                expect(record.length).toBeGreaterThan(0);
            })
    });

    it('can delete() one product', () => {
        let testUser = { product: 'DeleteMe', description: 'White Shirt' };

        return product.create(testUser)
            .then(record => {
                return product.delete(record._id)
                    .then(item => {
                        expect(item.product).toEqual(testUser.product);
                    })
            })
    });

    it('can update() one product', () => {
        let testUser = { product: 'T Shirt', description: 'White Shirt' };
        let updatedUser = { product: 'Dress Shirt', description: 'White Shirt' };

        return product.create(testUser)
            .then(record => {
                return product.update(record._id, updatedUser)
                    .then(item => {
                        expect(item.product).toEqual(updatedUser.product);
                    })
            })

    });

    it('should throw a validation error if property not given', () => {
        // const Error = "ValidationError: product validation failed: name: Path `name` is required.";
        // let testUser = { email: 'mytest@email' };

        // expect(() => product.create(testUser)).toThrow(Error);

        // expect(() => {
        //     return product.create(testUser)
        //         .then(record => {
        //             console.log(record);
        //         })
        // }).toThrow(Error);


    });
})