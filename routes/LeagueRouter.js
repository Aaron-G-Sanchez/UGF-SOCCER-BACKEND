const { Router } = require('express')
const controllers = require('../controllers/LeagueController')

const router = Router()

router.get('/', (req, res) => {
  res.send('This is the league router')
})

router.post('/', controllers.CreateLeague)

module.exports = router
