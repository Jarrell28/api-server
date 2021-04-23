'use strict';

const { server } = require('../src/server.js'); // bring in your server for testing (because it is a module)
const supertest = require('supertest'); // pull in npm package of supertest for making requests and mocking a server env
const mockRequest = supertest(server); // mock the server for us

describe('API SERVER:', () => {

  it('should return 404 on a bad route', async () => {
    const response = await mockRequest.get('/badRoute');
    expect(response.status).toBe(404);
  })

  it('should return 404 on a bad method', async () => {
    const response = await mockRequest.put('/users');
    expect(response.status).toBe(404);
  })

});