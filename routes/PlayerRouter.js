const { Router } = require('express')
const controllers = require('../controllers/PlayerController')
const middleware = require('../middleware')

const router = Router()

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.GetAllPlayers
)

module.exports = router
