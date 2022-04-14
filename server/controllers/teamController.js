const { default: mongoose } = require('mongoose')
const {Team, User} = require('../models')

module.exports ={
  saveTeam(req, res){
    User.findOne({email: req.body.owner}).then((user) => {
      const teamtobeSaved = {
        ...req.body,
        owner: user._id
      }
      Team.findOne({owner: user._id, name:req.body.name}, (err, team) => {
        if(team){
          Team.findOneAndUpdate({owner: user._id, name: req.body.name},{...teamtobeSaved}, (err, team) => {
          })
        }else{
          Team.create({...teamtobeSaved,  _id: mongoose.Types.ObjectId()}, (err, team) => {
          })
        }
      })
      
    })
  },
  getUsersTeams(req, res){
    User.findOne({email: req.body.owner}, (err, user) => {
      Team.find({owner: user._id}, (err, teams) => {
        res.json(teams)
      })
    })
  }
}