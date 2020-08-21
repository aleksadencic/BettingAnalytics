var express = require('express');
var router = express.Router();

// Require controller modules
const financials_controller = require('../controllers_mongoose/financials_controller');

/* FINANCIALS ROUTES */

// GET request for list of all financials
router.get('/', financials_controller.find_financials);

// POST request for list of all financials with parameters
router.post('/find', financials_controller.find_financials_with_parameters);

// POST request for data analytics by products 
router.post('/products', financials_controller.products_analytics);

// POST request for data analytics by countries 
router.post('/countries', financials_controller.countries_analytics);

// POST request for data analytics by countries 
router.post('/countries', financials_controller.countries_analytics);

// POST request for sport betting by countries
router.get('/sport-betting', financials_controller.sport_betting_analytics);

// POST request for pr by time period
router.post('/pr', financials_controller.pr_analytics);

// PUT request for updating financials with id
// router.put('/update/:id', financials_controller.update_financial);

// DELETE request for deleting financials with id
// router.delete('/delete/:id', financials_controller.delete_financial);


module.exports = router;