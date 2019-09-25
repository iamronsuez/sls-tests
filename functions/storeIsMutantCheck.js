const mongoose = require('mongoose')
import DNACheckModel from '../lib/DnaCheckModel'
const storeIsMutantCheck  = async (event) => {
  try {
  const payload = event.body
  const {dna, isMutantADN} = payload
  const dnaChain = dna.join('')
  await mongoose.connect(process.env.DB)
  const record = await DNACheckModel.findOneAndUpdate(
    {dna: dnaChain},
    {dna: dnaChain, isMutant: isMutantADN, ts: new Date().toISOString()},
    {upsert: true, new: true}
  )
  await mongoose.connection.close()
  return record
  } catch (error) {
      console.log({event})
      throw error
  }
}

export default storeIsMutantCheck