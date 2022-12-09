const { Router } = require('express')
const controllers = require('../controllers/AuthController')

const router = Router()

router.post('/login', controllers.Login)
router.post('/register', controllers.Register)

module.exports = router
