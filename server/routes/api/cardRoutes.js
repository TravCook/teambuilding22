const router = require('express').Router();
const {getAllPlayers} = require('../../controllers/playerController')
const axios = require('axios')

router.route('/').get(getAllPlayers)

module.exports = router;

