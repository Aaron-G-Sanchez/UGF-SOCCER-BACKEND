const db = require('./db')
const express = require('express')
const PlayerRouter = require('./routes/PlayerRouter')
const AuthRouter = require('./routes/AuthRouter')
const LeagueRouter = require('./routes/LeagueRouter')
const TeamRouter = require('./routes/TeamRouter')
const UserRouter = require('./routes/UserRouter')
const cors = require('cors')
const logger = require('morgan')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('This is the root')
})

app.use('/auth', AuthRouter)
app.use('/user', UserRouter)
app.use('/players', PlayerRouter)
app.use('/league', LeagueRouter)
app.use('/team', TeamRouter)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(express.static(`${__dirname}/client/build`))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`Express server listending on ${PORT}`)
})
