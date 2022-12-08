const { Router } = require('express')
const controllers = require('../controllers/AuthController')

const router = Router()

router.get('/', (req, res) => {
  res.send('this is the auth router')
})

router.post('/', controllers.Register)

module.exports = router
