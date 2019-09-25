const mongoose = require('mongoose')

const DNACheckSchema = new mongoose.Schema({
  dna: String,
  isMutant: Boolean,
  ts: String
})

export default mongoose.model('DNACheck', DNACheckSchema)