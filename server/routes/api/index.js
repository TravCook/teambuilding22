const router = require('express').Router();
const cardRoutes = require('./cardRoutes');
const userRoutes = require('./userRoutes')
const teamRoutes = require('./teamRoutes')

router.use('/user', userRoutes)
router.use('/cards', cardRoutes);
router.use('/team', teamRoutes)

module.exports = router;