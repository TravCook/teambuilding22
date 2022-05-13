const {Series} = require('../models')

module.exports = {
    getAllSeries(req, res) {
        Series.find().then(async(players) => {
            return res.json(players)
        }).catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        })
    }
}