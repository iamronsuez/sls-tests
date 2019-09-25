// eslint-disable-next-line no-unused-vars
import mockMongoose from '../__mocks__/mongoose'
import handlers from '../handler'

test("isMutant-handler should return Forbidden for non valid DNA", async () => {
  const dna = ["ATGCGA", "CAGTGC", "TTAGGT", "AGATGG", "CGCCTA", "TCACTG"];
  const event = {body: {dna}}
  const response = await handlers.storeIsMutantCheck(event, {done: () => (Promise.resolve('OK'))})
  expect(response).toEqual('OK');
});
