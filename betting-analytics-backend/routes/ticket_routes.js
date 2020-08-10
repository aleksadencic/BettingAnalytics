const express = require('express');
const router = express.Router();
const communication_helper = require('../helpers/communication_helper');
const ticket_controller = require('../controllers/ticket_controller');

/* FIND tickets */
router.get('/', async(req, res, next) => {
    const tickets = await ticket_controller.find(req.query)
    communication_helper.sendResponse(tickets, res);
});

/* INSERT ticket */
router.post('/', async(req, res, next) => {
    const response = await ticket_controller.insertTicket(req.body);
    communication_helper.sendResponse(response, res);
});

/* UPDATE ticket */
router.put('/', async(req, res, next) => {
    const response = await ticket_controller.updateTicket(req.body);
    communication_helper.sendResponse(response, res);
});

/* DELETE ticket */
router.delete('/', async(req, res, next) => {
    const response = await ticket_controller.deleteTicket(req.body);
    communication_helper.sendResponse(response, res);
});


module.exports = router;