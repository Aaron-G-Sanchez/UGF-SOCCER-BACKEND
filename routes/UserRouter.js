const { Router } = require('express')
const controllers = require('../controllers/UserController')
const middleware = require('../middleware')

const router = Router()

router.get(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.GetUser
)

module.exports = router
