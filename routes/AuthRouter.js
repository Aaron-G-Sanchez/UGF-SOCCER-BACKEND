const { Router } = require('express')
const controllers = require('../controllers/AuthController')

const router = Router()

router.get('/', (req, res) => {
  res.send('this is the auth router')
})

router.post('/register', controllers.Register)

router.get('/login', controllers.Login)

module.exports = router
