const mongoose = require("mongoose")

const recordSchema = new mongoose.Schema({
  timestamp: {
    type: Number,
  },
  upperRange: {
    type: Number,
  },
  lowerRange: {
    type: Number,
  },
  primeNumbers: {
    type: [Number],
  },
  algorithm: {
    type: String,
  },
})

module.exports = mongoose.model("record", recordSchema)
