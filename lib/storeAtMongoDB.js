const AWS = require('aws-sdk')
const storeIsMutantCheckAtMongoDB = (event) => {
  const lambda = new AWS.Lambda({region: 'us-east-1'})
  const params = {
    FunctionName: 'is-mutant-dev-storeIsMutantCheck',
    InvocationType: 'Event',
    Payload: JSON.stringify(event),
  };
  
  return lambda
    .invoke(params)
    .promise()
}

export default storeIsMutantCheckAtMongoDB