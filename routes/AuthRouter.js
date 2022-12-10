const { Router } = require('express')
const controllers = require('../controllers/AuthController')
const middleware = require('../middleware')

const router = Router()

router.post('/login', controllers.Login)
router.post('/register', controllers.Register)

router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.CheckSession
)

module.exports = router
