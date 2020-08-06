const express = require('express');
const router = express.Router();
const communication_helper = require('../helpers/communication_helper');
const country_controller = require('../controllers/country_controller');

/* FIND ALL countries, FIND ONE country */
router.get('/', async(req, res, next) => {
    const countries =
        req.query.id ? await country_controller.findAllCountryById(req.query.id) :
        req.query.name ? await country_controller.findAllCountryByName(req.query.name) :
        await country_controller.findAllCountries();
    communication_helper.sendResults(countries, res);
});


module.exports = router;