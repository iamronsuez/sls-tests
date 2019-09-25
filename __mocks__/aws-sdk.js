/* eslint-env jest */

const awsSDKMock = {
  Lambda: () => ({invoke: () => ( {promise: () => (Promise.resolve())} )})
}

module.exports = awsSDKMock
