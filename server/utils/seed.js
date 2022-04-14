const connection = require('../config/connection');
const { Player } = require('../models');
const axios = require('axios')
connection.on('error', (err) => err);

connection.once('open', async () => {
   console.log('db connected')

   await Player.deleteMany({})

   const players = []

   let urls = []
  for(i=1;i<126;i++){
    let tempUrl = 'https://mlb22.theshow.com/apis/items?type=mlb_card&page=' + i
    urls.push(tempUrl)
  }
  await axios.all(urls.map((url) =>
    axios.get(url)
  )).then(async (data) => {
    try{
      data.map((item) => {
      item.data.items.map((player) => {
          players.push(player)
          return players
      })
    })
    }
    catch{
      if(err) throw (err)
    }

  })
  await Player.collection.insertMany(players)

  
  console.info('Seeding complete! 🌱');
  process.exit(0);
})