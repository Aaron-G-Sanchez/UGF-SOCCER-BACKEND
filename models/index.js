const { model } = require('mongoose')
const PlayerSchema = require('./Player')
const UserSchema = require('./User')
const LeagueSchema = require('./League')
const TeamSchema = require('./Team')

const Player = model('Player', PlayerSchema)
const User = model('User', UserSchema)
const League = model('League', LeagueSchema)
const Team = model('Team', TeamSchema)

module.exports = {
  Player,
  User,
  League,
  Team
}
