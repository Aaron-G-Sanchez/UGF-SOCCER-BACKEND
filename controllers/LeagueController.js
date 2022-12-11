const { League } = require('../models')
const { Team } = require('../models')

const GetLeagues = async (req, res) => {
  try {
    const leagues = await League.find().populate('creator_id')
    return res.status(200).json({ leagues })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetLeagueById = async (req, res) => {
  try {
    const { id } = req.params
    const league = await League.findById(id)
      .populate('creator_id')
      .populate('members_id')
      .populate('teams_id')
      .populate({
        path: 'teams_id',
        populate: {
          path: 'players',
          model: 'Player'
        }
      })

    return res.status(200).json({ league })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const CreateLeague = async (req, res) => {
  try {
    const { name, creator_id, length } = req.body
    const newLeague = new League({
      name,
      creator_id,
      members_id: [creator_id],
      length
    })
    await newLeague.save()
    return res.status(201).json({ newLeague })
  } catch (error) {
    throw error
  }
}

const AddMembers = async (req, res) => {
  try {
    const { id } = req.params
    const { newMember } = req.body
    const league = await League.findByIdAndUpdate(
      id,
      { $push: { members_id: newMember } },
      { new: true }
    )
    if (league) {
      return res.status(201).json({ league })
    }
    res.status(401).send({ status: 'Error', msg: 'No league with that id!' })
  } catch (error) {
    throw error
  }
}

const AddTeam = async (req, res) => {
  try {
    const { id } = req.params
    const { name, creator_id } = req.body
    const newTeam = new Team({
      name,
      creator_id
    })
    await newTeam.save()
    const league = await League.findByIdAndUpdate(
      id,
      {
        $push: { teams_id: newTeam._id }
      },
      { new: true }
    ).populate('teams_id')
    if (league) {
      return res.status(201).json({ league })
    }
    await newTeam.save()
    return res.status(200).json({ newTeam })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetLeagues,
  GetLeagueById,
  CreateLeague,
  AddMembers,
  AddTeam
}
