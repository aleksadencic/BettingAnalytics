var express = require('express');
var router = express.Router();

// Require controller modules
const members_controller = require('../../routes_mongoose/members_routes');
const etl_controller = require('../controllers/etl_controllers');

/* ETLs */

// GET request for members segmentation ETL
router.get('/segmentation', async(req, res, next) => {
    await etl_controller.members_segmentation(req, res, next);
});

module.exports = router;