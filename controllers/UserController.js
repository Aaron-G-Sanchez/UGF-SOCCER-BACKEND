const { User } = require('../models')

const GetUser = async (req, res) => {
  const { id } = req.params
  const user = await User.findById(id)
  if (user) {
    return res.status(200).json({ user })
  }
  return res.status(401).send({ status: 'Error', msg: 'No user that id!' })
}

module.exports = {
  GetUser
}
