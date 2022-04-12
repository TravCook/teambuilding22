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
    }
}