const express = require('express');
const router = express.Router();
const communication_helper = require('../helpers/communication_helper');
const street_controller = require('../controllers/street_controller');

/* FIND streets */
router.get('/', async(req, res, next) => {
    const streets = await street_controller.find(req.query)
    communication_helper.sendResponse(streets, res);
});

/* INSERT street */
router.post('/', async(req, res, next) => {
    const response = await street_controller.insertStreet(req.body);
    communication_helper.sendResponse(response, res);
});

/* UPDATE street */
router.put('/', async(req, res, next) => {
    const response = await street_controller.updateStreet(req.body);
    communication_helper.sendResponse(response, res);
});

/* DELETE street */
router.delete('/', async(req, res, next) => {
    const response = await street_controller.deleteStreet(req.body);
    communication_helper.sendResponse(response, res);
});


module.exports = router;