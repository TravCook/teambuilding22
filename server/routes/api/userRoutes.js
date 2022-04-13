const router = require('express').Router();
const {createUser,loginUser} = require('../../controllers/userController')

router.route('/signup').post(createUser)
router.route('/login').post(loginUser)
module.exports = router