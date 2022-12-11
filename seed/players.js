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
    },
    {
      name: 'K. Acosta',
      position: 'Midfielder',
      number: 23,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'C. Arango',
      position: 'Forward',
      number: 9,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'G. Bale',
      position: 'Forward',
      number: 11,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'L. Blessing',
      position: 'Forward',
      number: 7,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'D. Bouanga',
      position: 'Forward',
      number: 99,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'G. Chiellini',
      position: 'Defender',
      number: 14,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'J. Cifuentes',
      position: 'Midfielder',
      number: 20,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'M. Crepeau',
      position: 'Goalkeeper',
      number: 16,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'F. Escobar',
      position: 'Defender',
      number: 2,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'M. Fall',
      position: 'Defender',
      number: 5,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'F. Ginella',
      position: 'Midfielder',
      number: 8,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'R. Hollingshead',
      position: 'Defender',
      number: 24,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'C. Jennings',
      position: 'Forward',
      number: 26,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'J. Murillo',
      position: 'Defender',
      number: 3,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'J. Mendez',
      position: 'Midfielder',
      number: 32,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'D. Palacios',
      position: 'Defender',
      number: 12,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'E. Segura',
      position: 'Defender',
      number: 4,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'I. Sanchez',
      position: 'Midfielder',
      number: 6,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'C. Tello',
      position: 'Forward',
      number: 37,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'M. Traore',
      position: 'Defender',
      number: 15,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'C. Vela',
      position: 'Forward',
      number: 10,
      team: 'Los Angeles F.C.'
    },
    {
      name: 'N. Allen',
      position: 'Defender',
      number: 32,
      team: 'Inter Miami F.C.'
    },
    {
      name: 'CJ Dos Santos',
      position: 'Goalkeeper',
      number: 29,
      team: 'Inter Miami F.C.'
    },
    {
      name: 'E. Azcona',
      position: 'Forward',
      number: 28,
      team: 'Inter Miami F.C.'
    },
    {
      name: 'L. Campana',
      position: 'Forward',
      number: 9,
      team: 'Inter Miami F.C.'
    },
    {
      name: 'A. Caputo',
      position: 'Midfielder',
      number: 36,
      team: 'Inter Miami F.C.'
    },
    {
      name: 'B. Duke',
      position: 'Midfielder',
      number: 36,
      team: 'Inter Miami F.C.'
    },
    {
      name: 'S. Hundal',
      position: 'Forward',
      number: 39,
      team: 'Inter Miami F.C.'
    },
    {
      name: 'J. Jones',
      position: 'Defender',
      number: 33,
      team: 'Inter Miami F.C.'
    },
    {
      name: 'A. Lassiter',
      position: 'Forward',
      number: 11,
      team: 'Inter Miami F.C.'
    },
    {
      name: 'D. Lowe',
      position: 'Defender',
      number: 31,
      team: 'Inter Miami F.C.'
    },
    {
      name: 'N. Marsman',
      position: 'Goalkeeper',
      number: 21,
      team: 'Inter Miami F.C.'
    },
    {
      name: 'C. McVey',
      position: 'Defender',
      number: 4,
      team: 'Inter Miami F.C.'
    },
    {
      name: 'M. Mendez',
      position: 'Midfielder',
      number: 44,
      team: 'Inter Miami F.C.'
    },
    {
      name: 'J. Mota',
      position: 'Midfielder',
      number: 7,
      team: 'Inter Miami F.C.'
    },
    {
      name: 'A. Pozuelo',
      position: 'Midfielder',
      number: 8,
      team: 'Inter Miami F.C.'
    },
    {
      name: 'B. Shea',
      position: 'Defender',
      number: 20,
      team: 'Inter Miami F.C.'
    },
    {
      name: 'R. Taylor',
      position: 'Midfielder',
      number: 16,
      team: 'Inter Miami F.C.'
    },
    {
      name: 'D. Yedlin',
      position: 'Midfielder',
      number: 16,
      team: 'Inter Miami F.C.'
    },
    {
      name: 'C. Benteke',
      position: 'Forward',
      number: 20,
      team: 'D.C. United'
    },
    {
      name: 'S. Birnbaum',
      position: 'Defender',
      number: 15,
      team: 'D.C. United'
    },
    {
      name: 'R. Canouse',
      position: 'Midfielder',
      number: 6,
      team: 'D.C. United'
    },
    {
      name: 'T. Fountas',
      position: 'Forward',
      number: 11,
      team: 'D.C. United'
    },
    {
      name: 'B. Hines-ike',
      position: 'Defender',
      number: 4,
      team: 'D.C. United'
    },
    {
      name: 'R. Morrison',
      position: 'Midfielder',
      number: 49,
      team: 'D.C. United'
    },
    {
      name: 'A. Najar',
      position: 'Defender',
      number: 14,
      team: 'D.C. United'
    },
    {
      name: 'V. Palsson',
      position: 'Midfielder',
      number: 44,
      team: 'D.C. United'
    },
    {
      name: 'N. Robertha',
      position: 'Forward',
      number: 19,
      team: 'D.C. United'
    },
    {
      name: 'M. Rodriguez',
      position: 'Midfielder',
      number: 77,
      team: 'D.C. United'
    },
    {
      name: 'G. Samake',
      position: 'Defender',
      number: 2,
      team: 'D.C. United'
    },
    {
      name: 'K. Smith',
      position: 'Forward',
      number: 17,
      team: 'D.C. United'
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
