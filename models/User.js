const { Schema } = require('mongoose')

const User = new Schema(
  {
    name: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, require: true }
  },
  { timestamps: true }
)

module.exports = User
