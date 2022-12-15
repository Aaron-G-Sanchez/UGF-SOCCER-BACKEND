const { Team } = require('../models')
const { League } = require('../models')

const GetTeam = async (req, res) => {
  const { id } = req.params
  const league = await League.findById(id).populate('teams_id')
  if (league) {
    return res.status(200).json({ league })
  }
  return res
    .status(401)
    .send({ status: 'Error', msg: 'No league with that id!' })
}

const AddPlayer = async (req, res) => {
  const { id, newPlayers } = req.body
  const team = await Team.findByIdAndUpdate(
    id,
    {
      $push: { players: newPlayers }
    },
    { new: true }
  )
    .populate('players')
    .populate('creator_id')
  if (team) {
    return res.status(200).json({ team })
  }
  res.status(401).send({ status: 'Error', msg: 'No team with that id!' })
}

const GetTeamWithPlayers = async (req, res) => {
  const { id } = req.params
  const team = await Team.findById(id).populate('players')
  if (team) {
    return res.status(200).json({ team })
  }
  res.status(401).send({ status: 'Error', msg: 'No team with that id!' })
}

const RemovePlayer = async (req, res) => {
  const { id } = req.params
  const { player } = req.body
  const team = await Team.findByIdAndUpdate(
    id,
    { $pull: { players: player } },
    { new: true }
  )
    .populate('players')
    .populate('creator_id')
  if (team) {
    return res.status(200).json({ team })
  }
  res.status(401).send({ status: 'Error', msg: 'No team with that id!' })
}

const DeleteTeam = async (req, res) => {
  const { id } = req.params
  const response = await Team.findByIdAndDelete(id)
  if (response) {
    return res.status(201).json({ response })
  }
  res.status(401).send({ status: 'Error', msg: 'No team with that id!' })
}

module.exports = {
  GetTeam,
  AddPlayer,
  RemovePlayer,
  GetTeamWithPlayers,
  DeleteTeam
}
