const express = require('express');
const router = express.Router();
const communication_helper = require('../helpers/communication_helper');
const city_controller = require('../controllers/city_controller');

/* FIND cities */
router.get('/', async(req, res, next) => {
    const cities = await city_controller.find(req.query)
    communication_helper.sendResponse(cities, res);
});

/* INSERT city */
router.post('/', async(req, res, next) => {
    const response = await city_controller.insertCity(req.body);
    communication_helper.sendResponse(response, res);
});

/* UPDATE city */
router.put('/', async(req, res, next) => {
    const response = await city_controller.updateCity(req.body);
    communication_helper.sendResponse(response, res);
});

/* DELETE city */
router.delete('/', async(req, res, next) => {
    const response = await city_controller.deleteCity(req.body);
    communication_helper.sendResponse(response, res);
});


module.exports = router;