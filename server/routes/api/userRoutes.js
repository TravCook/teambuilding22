const router = require('express').Router();

router.route('/signup').post((req, res) => {
    return res.send('route hit')
})

module.exports = router