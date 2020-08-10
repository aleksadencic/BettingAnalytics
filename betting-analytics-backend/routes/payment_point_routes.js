const express = require('express');
const router = express.Router();
const communication_helper = require('../helpers/communication_helper');
const payment_points_controller = require('../controllers/payment_point_controller');

/* FIND payment points */
router.get('/', async(req, res, next) => {
    const payment_points = await payment_points_controller.find(req.query)
    communication_helper.sendResponse(payment_points, res);
});

/* INSERT payment point */
router.post('/', async(req, res, next) => {
    const response = await payment_points_controller.insertPaymentPoint(req.body);
    communication_helper.sendResponse(response, res);
});

/* UPDATE payment point */
router.put('/', async(req, res, next) => {
    const response = await payment_points_controller.updatePaymentPoint(req.body);
    communication_helper.sendResponse(response, res);
});

/* DELETE payment point */
router.delete('/', async(req, res, next) => {
    const response = await payment_points_controller.deletePaymentPoint(req.body);
    communication_helper.sendResponse(response, res);
});


module.exports = router;