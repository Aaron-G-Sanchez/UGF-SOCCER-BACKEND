const { Router } = require('express')
const controllers = require('../controllers/LeagueController')

const router = Router()

router.get('/', controllers.GetLeagues)

router.post('/', controllers.CreateLeague)

router.put('/:id', controllers.AddMembers)

router.put('/team/:id', controllers.AddTeam)

module.exports = router
