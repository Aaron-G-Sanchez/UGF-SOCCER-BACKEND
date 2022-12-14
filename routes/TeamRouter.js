const { Router } = require('express')
const controllers = require('../controllers/TeamController')
const middleware = require('../middleware')

const router = Router()

router.put(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.AddPlayer
)

// When this link is hit, the param is refering to the league ID
router.get(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.GetTeam
)

// When this id is inputed it needs to be the ID of the team rather than the league
router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.RemovePlayer
)

router.get(
  '/players/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.GetTeamWithPlayers
)

module.exports = router
