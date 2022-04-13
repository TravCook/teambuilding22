const {User} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
  createUser(req, res){
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
      if(err){
        return res.status(400).send({
          message: err
        })
      } else {
        const user = {
        email: req.body.email,
        username: req.body.username,
        password: hash
        }
        await User.create(user)
      }
    })
  },
  loginUser(req, res){
    User.findOne({email: req.body.email}, (err, user) => {
      if(!user || !user.comparePassword(req.body.password)){
        return res.status(401).json({message: 'Authentication Failed. Invalid Username or Password'})
      }
      return res.json({token: jwt.sign({email:user.email, username:user.username, _id:user._id}, 'TeamBuilding')})
    })
  }
}