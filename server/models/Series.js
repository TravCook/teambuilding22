const mongoose = require('mongoose')

const {Schema} = mongoose

const seriesSchema = new Schema({
  series_id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const Series = mongoose.model('Series', seriesSchema)

module.exports = Series