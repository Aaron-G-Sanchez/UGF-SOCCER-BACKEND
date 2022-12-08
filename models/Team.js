const { Schema } = require('mongoose')

const Team = new Schema(
  {
    name: { type: String, required: true },
    creator_id: { type: Schema.Types.ObjectId, ref: 'User' },
    players: [{ type: Schema.Typpes.ObjectId, ref: 'Player' }],
    score: { type: Numver, required: false }
  },
  { timestamps: true }
)

module.exports = Team
