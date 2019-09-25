/* eslint-env jest */

const mongoMock = {
  connect: jest.fn((url) =>
    Promise.resolve('url', url)),
  connection: {close: jest.fn((url) =>
    Promise.resolve('url', url)
  )},
  Schema: () => ({post: () => (null)}),
  model: () => ({findOneAndUpdate: () => (Promise.resolve('OK')), aggregate: () => (Promise.resolve([0, 1]))})
}

module.exports = mongoMock
