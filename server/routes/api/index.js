const router = require('express').Router();
const cardRoutes = require('./cardRoutes');
const userRoutes = require('./userRoutes')

router.use('/user', userRoutes)
router.use('/cards', cardRoutes);

module.exports = router;