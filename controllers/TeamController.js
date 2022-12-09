const { Team } = require('../models')
const { League } = require('../models')

const GetTeams = async (req, res) => {
  const { id } = req.params
  const league = await League.findById(id).populate('teams_id')
  if (league) {
    return res.status(200).json({ league })
  }
  res.status(401).send({ status: 'Error', msg: 'No league with that id!' })
}

module.exports = {
  GetTeams
}
