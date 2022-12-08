const db = require('../db')
const { Player } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
