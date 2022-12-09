const { League } = require('../models')

const CreateLeague = async (req, res) => {
  try {
    const { name, creator_id, length } = req.body
    const newLeague = new League({
      name,
      creator_id,
      length
    })
    await newLeague.save()
    return res.status(201).json({ newLeague })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateLeague
}
