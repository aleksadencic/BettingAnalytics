const express = require('express');
const router = express.Router();
const communication_helper = require('../helpers/communication_helper');
const match_controller = require('../controllers/match_controller');

/* FIND matches */
router.get('/', async(req, res, next) => {
    const matches = await match_controller.find(req.query)
    communication_helper.sendResponse(matches, res);
});

/* INSERT match */
router.post('/', async(req, res, next) => {
    const response = await match_controller.insertMatch(req.body);
    communication_helper.sendResponse(response, res);
});

/* UPDATE match */
router.put('/', async(req, res, next) => {
    const response = await match_controller.updateMatch(req.body);
    communication_helper.sendResponse(response, res);
});

/* DELETE match */
router.delete('/', async(req, res, next) => {
    const response = await match_controller.deleteMatch(req.body);
    communication_helper.sendResponse(response, res);
});


module.exports = router;