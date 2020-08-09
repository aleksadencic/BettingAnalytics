const express = require('express');
const router = express.Router();
const communication_helper = require('../helpers/communication_helper');
const team_player_controller = require('../controllers/team_player_controller');

/* FIND team players */
router.get('/', async(req, res, next) => {
    const team_players = await team_player_controller.find(req.query)
    communication_helper.sendResponse(team_players, res);
});

/* INSERT team player */
router.post('/', async(req, res, next) => {
    const response = await team_player_controller.insertTeamPlayer(req.body);
    communication_helper.sendResponse(response, res);
});

/* UPDATE team player */
router.put('/', async(req, res, next) => {
    const response = await team_player_controller.updateTeamPlayer(req.body);
    communication_helper.sendResponse(response, res);
});

/* DELETE team player */
router.delete('/', async(req, res, next) => {
    const response = await team_player_controller.deleteTeamPlayer(req.body);
    communication_helper.sendResponse(response, res);
});


module.exports = router;