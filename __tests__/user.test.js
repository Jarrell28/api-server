'use strict';

require('@code-fellows/supergoose'); // pulls in and configures and runs mongo memory server and supertest

const GenericCollection = require('../src/models/generic-collection.js');
const userSchema = require('../src/models/user-schema.js');
const user = new GenericCollection(userSchema);

describe('User Actions', () => {

    it('can create() a new user object', () => {
        let testUser = { name: 'Jarrell', email: 'mytest@email.com' };
        let expected = { name: 'Jarrell', email: 'mytest@email.com' };

        return user.create(testUser).then(record => {

            expect(record['name']).toEqual('Jarrell');
            expect(typeof record).toBe('object');
            Object.keys(testUser).forEach(item => {
                expect(record[item]).toEqual(expected[item]);
            })
        })
    });

    it('can read() one user items', () => {
        let testUser = { name: 'Jarrell', email: 'mytest@email.com' };

        return user.create(testUser)
            .then(record => {
                return user.read(record._id)
                    .then(item => {
                        expect(item.name).toEqual(testUser.name);
                    })
            })
    });

    it('can read() all user items', () => {
        return user.read()
            .then(record => {
                expect(typeof record).toBe('object');
                expect(record.length).toBeGreaterThan(0);
            })
    });

    it('can delete() one user', () => {
        let testUser = { name: 'DeleteMe', email: 'mytest@email.com' };

        return user.create(testUser)
            .then(record => {
                return user.delete(record._id)
                    .then(item => {
                        expect(item.name).toEqual(testUser.name);
                    })
            })
    });

    it('can update() one user', () => {
        let testUser = { name: 'Jarrell', email: 'mytest@email.com' };
        let updatedUser = { name: 'Houston', email: 'mytest@email.com' };

        return user.create(testUser)
            .then(record => {
                return user.update(record._id, updatedUser)
                    .then(item => {
                        expect(item.name).toEqual(updatedUser.name);
                    })
            })

    });

    it('should throw a validation error if property not given', () => {
        // const Error = "ValidationError: user validation failed: name: Path `name` is required.";
        // let testUser = { email: 'mytest@email' };

        // expect(() => user.create(testUser)).toThrow(Error);

        // expect(() => {
        //     return user.create(testUser)
        //         .then(record => {
        //             console.log(record);
        //         })
        // }).toThrow(Error);


    });
})