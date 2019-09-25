import handlers from '../handler'
import mockAwsSdk from '../__mocks__/aws-sdk'

test("isMutant-handler should return Forbidden for non valid DNA", async () => {
  const dna = ["ATGCGA", "CAGTGC", "TTAGGT", "AGATGG", "CGCCTA", "TCACTG"];
  const event = {body: JSON.stringify({dna})}
  const {statusCode, body } = await handlers.isMutant(event)
  expect(statusCode).toEqual(403);
  expect(body).toEqual("\"Forbidden\"");
});



test("isMutant-handler should return OK for  valid DNA", async () => {
  const dna = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"];
  const event = {body: JSON.stringify({dna})}
  const {statusCode, body } = await  handlers.isMutant(event)
  expect(statusCode).toEqual(200);
  expect(body).toEqual("\"OK\"");

});

test("isMutant-handler should return BAD-Request for non valid DNA payload", async () => {
  const dna = 1;
  const event = {body: JSON.stringify({dna})}
  const {statusCode, body } = await  handlers.isMutant(event)
  expect(statusCode).toEqual(400);
});

test("isMutant-handler should return Internal-Server-Error for non valid DNA payload", async () => {
  try {
    const dna = 1;
    const event = {body: {dna}}
    const {statusCode, body } = await  handlers.isMutant(event)
    expect(statusCode).toEqual(500);
  } catch (error) {
    console.log(error)
  }
});