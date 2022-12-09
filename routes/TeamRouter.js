const { Router } = require('express')
const controllers = require('../controllers/TeamController')

const router = Router()

router.put('/', controllers.AddPlayer)

router.get('/:id', controllers.GetTeam)

module.exports = router
