const {Player} = require('../models')

module.exports = {
    getAllPlayers(req, res) {
        Player.find().then(async(players) => {
            return res.json(players)
        }).catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        })
    },
    getOnePlayer(req,res){
      Player.findOne(req.body).then((player) => {
        return res.json(player)
      })
    },
    cardSearch(req, res) {
      let benchBats = ['B1', 'B2', 'B3', 'B4', 'B5']
      let rotation = ['SP1', 'SP2', 'SP3', 'SP4', 'SP5']
      let bullpen = ['RP', 'RP2', 'RP3', 'RP4', 'RP5', 'SU', 'CP']
      let or = [] 
      let search = {}
      if(req.body.name){
         search = {
          ...search,
          name: {$regex: new RegExp(req.body.name), $options: 'i'},
        }
      }
      if(req.body.searchTeams){
        search={
          ...search,
          team: {$in: req.body.searchTeams},
        }
      }
      if(req.body.Primary && req.body.position && !benchBats.includes(req.body.position) && !rotation.includes(req.body.position) && !bullpen.includes(req.body.position)){
        or.push({display_position: req.body.position})
        search = {
          ...search,
          $or: or,
        }
      }
      if(req.body.series){
        search = {
          ...search,
          series: req.body.series,
        }
      }
      if(req.body.Secondary && req.body.position && !benchBats.includes(req.body.position) && !rotation.includes(req.body.position) && !bullpen.includes(req.body.position)){
        or.push({display_secondary_positions: req.body.position})
        search = {
          ...search,
          $or: or,
        }
      }
      if(benchBats.includes(req.body.position)){
        search = {
          ...search,
          is_hitter: true
        }
      }
      if(rotation.includes(req.body.position)){
        search = {
          ...search,
          display_position: "SP"
        }
      }
      if(bullpen.includes(req.body.position)){
        search = {
          ...search,
          $or: [{display_position: "RP"}, {display_position: 'CP'}]
        }
      }
      console.log(search)
      Player.find(
        search
      ).sort({'ovr': -1}).then((players) => {
        return res.json(players)
      })
    }
}