const router = require('express').Router();
const {saveTeam, getUsersTeams} = require('../../controllers/teamController')

router.route('/save').post(saveTeam)
router.route('/userTeams').post(getUsersTeams)

module.exports = router