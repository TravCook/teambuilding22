const router = require('express').Router();
const axios = require('axios')

router.route('/').get((req, res) => {
  let urls = []
  for(i=1;i<126;i++){
    let tempUrl = 'https://mlb22.theshow.com/apis/items?type=mlb_card&page=' + i
    urls.push(tempUrl)
  }
  let players = []
  const diamonds = []
  const golds = []
  const silvers = []
  const bronzes = []
  const commons = []
  axios.all(urls.map((url) => 
    axios.get(url)
  )).then((data) => {
    data.map((item) => {
      item.data.items.map((player) => {
        players.push(player)
        if(player.rarity === 'Diamond'){
          diamonds.push(player)
        }else if (player.rarity === 'Gold'){
          golds.push(player)
        }else if (player.rarity === 'Silver'){
          silvers.push(player)
        }else if (player.rarity === 'Bronze'){
          bronzes.push(player)
        }else {
          commons.push(player)
        }
      })
    })
      const playerData = {
      diamonds: diamonds,
      golds: golds,
      silvers: silvers,
      bronze: bronzes,
      commons: commons,
      allPlayers: players
    }
     res.send(playerData)
  })
})

module.exports = router;