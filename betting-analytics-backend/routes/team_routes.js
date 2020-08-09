const express = require('express');
const router = express.Router();
const communication_helper = require('../helpers/communication_helper');
const team_controller = require('../controllers/team_controller');

/* FIND teams */
router.get('/', async(req, res, next) => {
    const teams = await team_controller.find(req.query)
    communication_helper.sendResponse(teams, res);
});

/* INSERT team */
router.post('/', async(req, res, next) => {
    const response = await team_controller.insertTeam(req.body);
    communication_helper.sendResponse(response, res);
});

/* UPDATE team */
router.put('/', async(req, res, next) => {
    const response = await team_controller.updateTeam(req.body);
    communication_helper.sendResponse(response, res);
});

/* DELETE team */
router.delete('/', async(req, res, next) => {
    const response = await team_controller.deleteTeam(req.body);
    communication_helper.sendResponse(response, res);
});


module.exports = router;