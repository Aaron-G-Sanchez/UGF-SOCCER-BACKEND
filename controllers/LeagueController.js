const { League } = require('../models')

const GetLeagues = async (req, res) => {
  try {
    const leagues = await League.find()
    return res.status(200).json({ leagues })
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

module.exports = {
  GetLeagues,
  CreateLeague,
  AddMembers
}
