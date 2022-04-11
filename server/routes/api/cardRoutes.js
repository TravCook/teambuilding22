const router = require('express').Router();
const {getAllPlayers,getOnePlayer} = require('../../controllers/playerController')
const axios = require('axios')

router.route('/').get(getAllPlayers).post(getOnePlayer)
module.exports = router;

