/* eslint-disable import/no-extraneous-dependencies */
const expect = require('chai').expect
const session = require('supertest-session')
const app = require('../src/app.js')

const agent = session(app)

describe('something', function () {
  this.timeout(5000)

  // tests...
  describe('Server texts transforms tests:', () => {

    describe('GET /iecho?text=tenochtitlan', () => {
      it('should get 200', () => agent.get('/iecho?text=tenochtitlan').expect(200))
    })

    describe('GET /iecho?text=acurruca', () => {
      it('should get 200', () => agent.get('/iecho?text=acurruca').expect(200))
      it('should return palindrome true', () =>
        agent
          .get('/iecho?text=acurruca')
          .then((res) => expect(res.body.palindrome).to.equal(true)))
      it('should return a the inverted text', () =>
        agent
          .get('/iecho?text=acurruca')
          .then((res) => expect(res.body.text).to.equal('acurruca')))
    })

    describe('GET /iecho?text=onomatopeya', () => {
      it('should get 200', () => agent.get('/iecho?text=onomatopeya').expect(200))
      it('should return a the inverted text', () =>
        agent
          .get('/iecho?text=onomatopeya')
          .then((res) => expect(res.body.text).to.equal('ayepotamono')))
    })
    describe('GET /iecho?text=', () => {
      it('should get 400', () => agent.get('/iecho?text=').expect(400))
      it('should return an error message', () =>
        agent
          .get('/iecho?text=')
          .then((res) => expect(res.body.error).to.equal('no text')))
    })
  })
})
