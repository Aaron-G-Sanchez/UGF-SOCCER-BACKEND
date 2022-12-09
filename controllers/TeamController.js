const { Team } = require('../models')
const { League } = require('../models')

const GetTeam = async (req, res) => {
  const { id } = req.params
  const league = await League.findById(id).populate('teams_id')
  if (league) {
    return res.status(200).json({ league })
  }
  res.status(401).send({ status: 'Error', msg: 'No league with that id!' })
}

const AddPlayer = async (req, res) => {
  const { id } = req.body
  const team = await Team.findById(id)
  if (team) {
    return res.status(200).json({ team })
  }
  res.status(401).send({ status: 'Error', msg: 'No team with that id!' })
}

module.exports = {
  GetTeam,
  AddPlayer
}
