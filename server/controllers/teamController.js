const {Team, User} = require('../models')

module.exports ={
  saveTeam(req, res){
    User.findOne({email: req.body.owner}).then((user) => {
      console.log(req.body)
      const teamtobeSaved = {
        ...req.body,
        owner: user._id
      }
      try{
        Team.create(teamtobeSaved).then(() => {
        res.json({msg: "Team Saved"})
      })
      }
      catch{
        if(err) res.send(err)
      }
    })
  },
  getUsersTeams(req, res){
    User.findOne({owner: req.body.owner}, (err, user) => {
      Team.find({owner: user._id}, (err, teams) => {
        res.json(teams)
      })
    })
  }
}