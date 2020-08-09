const express = require('express');
const router = express.Router();
const communication_helper = require('../helpers/communication_helper');
const country_controller = require('../controllers/country_controller');

/* FIND countries */
router.get('/', async(req, res, next) => {
    const countries = await country_controller.find(req.query)
    communication_helper.sendResponse(countries, res);
});

/* INSERT country */
router.post('/', async(req, res, next) => {
    const response = await country_controller.insertCountry(req.body);
    communication_helper.sendResponse(response, res);
});

/* UPDATE country */
router.put('/', async(req, res, next) => {
    const response = await country_controller.updateCountry(req.body);
    communication_helper.sendResponse(response, res);
});

/* DELETE country */
router.delete('/', async(req, res, next) => {
    const response = await country_controller.deleteCountry(req.body);
    communication_helper.sendResponse(response, res);
});


module.exports = router;