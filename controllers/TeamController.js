const { Team } = require('../models')

const CreateTeam = async (req, res) => {
  try {
    const { name, creator_id } = req.body
    const newTeam = new Team({
      name,
      creator_id
    })
    await newTeam.save()
    return res.status(200).json({ newTeam })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  CreateTeam
}
