var express = require('express');
var router = express.Router();

// Controllers
const country_controller = require('../controllers/country_controller');


/* FIND ALL countries */
router.get('/', async(req, res, next) => {
    const countries = await country_controller.findAllCountries();
    res.json(countries);
});

module.exports = router;