// eslint-disable-next-line no-unused-vars
import mockMongoose from '../__mocks__/mongoose'
import isMutantStats from '../functions/isMutantStats'

test("isMutantStats-handler should status 200", async () => {
  const {statusCode} = await isMutantStats()
  expect(statusCode).toEqual(200);
})
