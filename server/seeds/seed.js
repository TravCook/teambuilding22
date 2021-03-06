const connection = require('../config/connection');
const { Player, Series } = require('../models');
const axios = require('axios')
connection.on('error', (err) => err);

connection.once('open', async () => {
   console.log('db connected')

   await Player.deleteMany({})
   await Series.deleteMany({})
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
          let secPos = player.display_secondary_positions.split(', ')
          player.display_secondary_positions = secPos
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
  console.info('Player Seeding complete! 🌱');
  

  await axios.get('https://mlb22.theshow.com/apis/meta_data').then(async (response) =>{
    await Series.collection.insertMany(response.data.series)
  })
  console.info('Series Seeding complete! 🌱');
  process.exit(0);
})