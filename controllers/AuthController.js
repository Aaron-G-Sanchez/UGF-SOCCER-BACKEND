const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { name, username, password, email } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = new User({
      name,
      username,
      passwordDigest,
      email
    })
    await user.save()
    return res.status(201).json({ user })
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  Register
}
