import {isMutant} from '../lib/isMutant'
import storeIsMutantCheckAtMongoDB from '../lib/storeAtMongoDB'
const response = (status, body) => {
  return {
    statusCode: status,
    body: JSON.stringify(body, null, 2),
  };
}

const isMutantFn =  async (event) => {
  try {
    const body = JSON.parse(event.body)
    const dna = body.dna
    if (!Array.isArray(dna)) {
      return response(400, {message: 'Only arrays allowed'})
    }
    let isMutantADN = isMutant(dna)
    // log request
    await storeIsMutantCheckAtMongoDB({body: {dna, isMutantADN}})
    return response(isMutantADN ? 200 : 403, isMutantADN ? 'OK': 'Forbidden')
  } catch (error) {
    return response(500, error)
  }
};

export default isMutantFn

