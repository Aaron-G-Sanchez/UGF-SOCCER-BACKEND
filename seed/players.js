const db = require('../db')
const { Player } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const players = [
    {
      name: 'J. Cascante',
      position: 'Defender',
      number: 18,
      team: 'Austin F.C.'
    },
    {
      name: 'M. Djitte',
      position: 'Forward',
      number: 2,
      team: 'Austin F.C.'
    },
    {
      name: 'S. Driussi',
      position: 'Forward',
      number: 7,
      team: 'Austin F.C.'
    },
    {
      name: 'D. Fagundez',
      position: 'Midfielder',
      number: 14,
      team: 'Austin F.C.'
    },
    {
      name: 'E. Finlay',
      position: 'Midfielder',
      number: 13,
      team: 'Austin F.C.'
    },
    {
      name: 'R. Gabrielson',
      position: 'Defender',
      number: 4,
      team: 'Austin F.C.'
    },
    {
      name: 'J. Gallagher',
      position: 'Defender',
      number: 17,
      team: 'Austin F.C.'
    },
    {
      name: 'K. Kolmanic',
      position: 'Defender',
      number: 23,
      team: 'Austin F.C.'
    },
    {
      name: 'N. Lima',
      position: 'Defender',
      number: 24,
      team: 'Austin F.C.'
    },
    {
      name: 'R. Redes',
      position: 'Forward',
      number: 11,
      team: 'Austin F.C.'
    },
    {
      name: 'E. Rigoni',
      position: 'Midfielder',
      number: 77,
      team: 'Austin F.C.'
    },
    {
      name: 'A. Ring',
      position: 'Midfielder',
      number: 8,
      team: 'Austin F.C.'
    },
    {
      name: 'J. Romana',
      position: 'Defender',
      number: 3,
      team: 'Austin F.C.'
    },
    {
      name: 'B. Stuver',
      position: 'Goalkeeper',
      number: 1,
      team: 'Austin F.C.'
    },
    {
      name: 'M. Urruti',
      position: 'Forward',
      number: 37,
      team: 'Austin F.C.'
    },
    {
      name: 'J. Valencia',
      position: 'Midfielder',
      number: 5,
      team: 'Austin F.C.'
    },
    {
      name: 'O. Wolff',
      position: 'Midfielder',
      number: 33,
      team: 'Austin F.C.'
    }
  ]

  await Player.insertMany(players)
  console.log('Austin FC added!')
}

const run = async () => {
  await main()
  db.close()
}

run()
