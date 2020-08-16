var express = require('express');
var router = express.Router();

// Require controller modules
const financials_controller = require('../controllers_mongoose/financials_controller');

/* MEMBERS ROUTES */

// GET request for list of all members
router.get('/', financials_controller.find_financials);

// POST request for inserting new financials
// router.post('/insert', financials_controller.insert_financial);

// PUT request for updating financials with id
// router.put('/update/:id', financials_controller.update_financial);

// DELETE request for deleting financials with id
// router.delete('/delete/:id', financials_controller.delete_financial);


module.exports = router;