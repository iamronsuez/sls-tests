const mongoose = require('mongoose')
import DNACheckModel from '../lib/DnaCheckModel'
import get from 'lodash.get'

const response = (status, body) => {
  return {
    statusCode: status,
    body: JSON.stringify(body, null, 2),
  };
}

const getMutantStatsAPI  = async () => {
  try {
  await mongoose.connect(process.env.DB)
  const [isHuman, isMutant] = await DNACheckModel.aggregate(
   [
    { $group: { _id: '$isMutant', count: { $sum: 1 } } },
    { $project: { _id: 0 } }
   ]
  )
  const countMutantDNA = get(isMutant, 'count', 0)
  const countHumanDNA = get(isHuman, 'count', 0)
  const ratio = countMutantDNA === 0 ? parseFloat(parseFloat(countHumanDNA) / parseFloat(countMutantDNA)).toFixed(2) : 0
  await mongoose.connection.close()
  return response(200, {countMutantDNA: countMutantDNA, countMutantHuman: countHumanDNA, ratio})
  } catch (error) {
      return response(500, error)
  }
}

export default getMutantStatsAPI

