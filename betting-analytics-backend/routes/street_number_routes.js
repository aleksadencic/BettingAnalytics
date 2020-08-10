const express = require('express');
const router = express.Router();
const communication_helper = require('../helpers/communication_helper');
const street_number_controller = require('../controllers/street_number_controller');

/* FIND street_numbers */
router.get('/', async(req, res, next) => {
    const street_numbers = await street_number_controller.find(req.query)
    communication_helper.sendResponse(street_numbers, res);
});

/* INSERT street_number */
router.post('/', async(req, res, next) => {
    const response = await street_number_controller.insertStreetNumber(req.body);
    communication_helper.sendResponse(response, res);
});

/* UPDATE street_number */
router.put('/', async(req, res, next) => {
    const response = await street_number_controller.updateStreetNumber(req.body);
    communication_helper.sendResponse(response, res);
});

/* DELETE street_number */
router.delete('/', async(req, res, next) => {
    const response = await street_number_controller.deleteStreetNumber(req.body);
    communication_helper.sendResponse(response, res);
});


module.exports = router;