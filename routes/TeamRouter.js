const { Router } = require('express')
const controllers = require('../controllers/TeamController')

const router = Router()

router.get('/:id', controllers.GetTeams)

module.exports = router
