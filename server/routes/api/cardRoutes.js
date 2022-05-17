const router = require('express').Router();
const {getAllPlayers,getOnePlayer, cardSearch} = require('../../controllers/playerController')
const axios = require('axios')

router.route('/').get(getAllPlayers).post(getOnePlayer)
router.route('/search').post(cardSearch)
module.exports = router;

