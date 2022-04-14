const {User} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  createUser(req, res){
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
      if(err){
        return res.status(400).send({
          message: err
        })
      } else {
        User.findOne({email: req.body.email}, (err, user) => {
          if(user){
            res.json({msg: "A user with that email already exists!"})
          }else{
            const user = {
              email: req.body.email,
              username: req.body.username,
              password: hash
            }
            User.create(user, (err, data) => {
              if(err) throw err;
              res.json({token: jwt.sign({email:user.email, username:user.username, _id:user._id}, secret, {expiresIn: expiration})})
            })
          }
        })
        
        // User.create(user).then(() => res.json({token: jwt.sign({email:user.email, username:user.username, _id:user._id}, secret, {expiresIn: expiration})})).catch(err => res.status(422).json(err))
      }
    })
  },
  loginUser(req, res){
    User.findOne({email: req.body.email}, (err, user) => {
      if(!user || !user.comparePassword(req.body.password)){
        return res.status(401).json({msg: 'Authentication Failed. Invalid Username or Password'})
      }else{
        return res.json({token: jwt.sign({email:user.email, username:user.username, _id:user._id}, secret, {expiresIn: expiration})})
      }
      
    })
  }
}