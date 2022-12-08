const { Schema } = require('mongoose')

const League = new Schema(
  {
    name: { type: String, required: true },
    creator_id: { type: Schema.Types.ObjectId, ref: 'User' },
    members_id: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    teams_id: [{ type: Schema.Types.ObjectId, ref: 'Team' }]
  },
  { timestamps: true }
)

module.exports = League
