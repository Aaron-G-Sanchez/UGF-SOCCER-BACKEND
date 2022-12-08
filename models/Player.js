const { Schema } = require('mongoose')

const Player = new Schema(
  {
    name: { type: String, require: true },
    position: { type: String, require: true },
    number: { type: Number, require: true },
    team: { type: String, require: true }
  },
  { timestamps: true }
)

module.exports = Player
