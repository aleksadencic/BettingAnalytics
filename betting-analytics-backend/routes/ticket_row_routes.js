const express = require('express');
const router = express.Router();
const communication_helper = require('../helpers/communication_helper');
const ticket_row_controller = require('../controllers/ticket_row_controller');

/* FIND ticket rows */
router.get('/', async(req, res, next) => {
    const ticket_rows = await ticket_row_controller.find(req.query)
    communication_helper.sendResponse(ticket_rows, res);
});

/* INSERT ticket row */
router.post('/', async(req, res, next) => {
    const response = await ticket_row_controller.insertTicketRow(req.body);
    communication_helper.sendResponse(response, res);
});

/* UPDATE ticket row */
router.put('/', async(req, res, next) => {
    const response = await ticket_row_controller.updateTicketRow(req.body);
    communication_helper.sendResponse(response, res);
});

/* DELETE ticket row */
router.delete('/', async(req, res, next) => {
    const response = await ticket_row_controller.deleteTicketRow(req.body);
    communication_helper.sendResponse(response, res);
});


module.exports = router;