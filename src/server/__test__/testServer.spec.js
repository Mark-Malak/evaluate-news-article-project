import 'babel-polyfill'
const request = require('supertest')
const { app } = require('../index')

describe('API Test', () => {
  test('expecting an error for requesting wrong path', (done) => {
    request(app)
      .get('/kfhfgyhsshfj')
      .then((response) => {
        expect(response.statusCode).toBe(404)
        done()
      })
  })
})