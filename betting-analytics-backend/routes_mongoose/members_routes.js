var express = require('express');
var router = express.Router();

// Require controller modules
const members_controller = require('../controllers_mongoose/members_controller');

/* MEMBERS ROUTES */

// GET request for list of all members
router.get('/', members_controller.find_members);

// POST request for inserting new member
router.post('/insert', members_controller.insert_member);

// PUT request for updating member with id
router.put('/update/:id', members_controller.update_member);

// DELETE request for deleting member with id
router.delete('/delete/:id', members_controller.delete_member);


module.exports = router;