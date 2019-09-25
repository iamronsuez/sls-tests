const mongoose = require('mongoose')

const DNACheckSchema = new mongoose.Schema({
  dna: String,
  isMutant: Boolean,
  ts: String
})

DNACheckSchema.post('save', function(doc) {
  console.log('%s has been saved', doc._id, doc);
});

export default mongoose.model('DNACheck', DNACheckSchema)