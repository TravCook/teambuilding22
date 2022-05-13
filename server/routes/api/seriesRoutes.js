const router = require('express').Router();
const {getAllSeries} = require('../../controllers/seriesController')
const axios = require('axios')

router.route('/').get(getAllSeries)
module.exports = router;