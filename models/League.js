const { Schema } = require('mongoose')

const League = new Schema(
  {
    name: { type: String, required: true },
    creator_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    members_id: [{ type: Schema.Types.ObjectId, ref: 'User', required: false }],
    teams_id: [{ type: Schema.Types.ObjectId, ref: 'Team', required: false }],
    length: { type: Number, required: false }
  },
  { timestamps: true }
)

module.exports = League
