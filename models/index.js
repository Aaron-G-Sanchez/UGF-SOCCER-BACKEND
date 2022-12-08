const { model } = require('mongoose')
const PlayerSchema = require('./Player')

const Player = model('Player', PlayerSchema)

module.exports = {
  Player
}
