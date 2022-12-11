const { Router } = require('express')
const controllers = require('../controllers/LeagueController')
const middleware = require('../middleware')
const router = Router()

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.GetLeagues
)

router.get(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.GetLeagueById
)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.CreateLeague
)

router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.AddMembers
)

router.put(
  '/team/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controllers.AddTeam
)

module.exports = router
