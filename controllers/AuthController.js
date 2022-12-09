const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email
    })
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user._id,
        email: user.email
      }
      let token = middleware.createToken(payload)

      return res.status(201).json({ user: payload, token })
    }
    return res.status(401).send({ status: 'Error', msg: 'Unathorized!' })
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
