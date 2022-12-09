const { Router } = require('express')
const controllers = require('../controllers/TeamController')

const router = Router()

router.put('/', controllers.AddPlayer)

router.get('/:id', controllers.GetTeam)

// When this id is inputed it needs to be the ID of the team rather than the league
router.delete('/:id', controllers.RemovePlayer)

router.get('/players/:id', controllers.GetTeamWithPlayers)

module.exports = router
