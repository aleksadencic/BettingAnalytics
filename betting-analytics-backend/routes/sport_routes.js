const express = require('express');
const router = express.Router();
const communication_helper = require('../helpers/communication_helper');
const sport_controller = require('../controllers/sport_controller');

/* FIND sports */
router.get('/', async(req, res, next) => {
    const sports = await sport_controller.find(req.query)
    communication_helper.sendResponse(sports, res);
});

/* INSERT sport */
router.post('/', async(req, res, next) => {
    const response = await sport_controller.insertSport(req.body);
    communication_helper.sendResponse(response, res);
});

/* UPDATE sport */
router.put('/', async(req, res, next) => {
    const response = await sport_controller.updateSport(req.body);
    communication_helper.sendResponse(response, res);
});

/* DELETE sport */
router.delete('/', async(req, res, next) => {
    const response = await sport_controller.deleteSport(req.body);
    communication_helper.sendResponse(response, res);
});


module.exports = router;