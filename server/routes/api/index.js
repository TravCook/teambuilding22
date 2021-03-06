const router = require('express').Router();
const cardRoutes = require('./cardRoutes');
const userRoutes = require('./userRoutes')
const teamRoutes = require('./teamRoutes')
const seriesRoutes = require('./seriesRoutes')

router.use('/user', userRoutes)
router.use('/cards', cardRoutes);
router.use('/team', teamRoutes)
router.use('/series', seriesRoutes)

module.exports = router;