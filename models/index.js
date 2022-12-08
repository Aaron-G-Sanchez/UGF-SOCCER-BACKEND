const { model } = require('mongoose')
const PlayerSchema = require('./Player')
const UserSchema = require('./User')

const Player = model('Player', PlayerSchema)
const User = model('User', UserSchema)

module.exports = {
  Player,
  User
}
