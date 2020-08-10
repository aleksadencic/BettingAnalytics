const express = require('express');
const router = express.Router();
const communication_helper = require('../helpers/communication_helper');
const member_controller = require('../controllers/member_controller');

/* FIND members */
router.get('/', async(req, res, next) => {
    const members = await member_controller.find(req.query)
    communication_helper.sendResponse(members, res);
});

/* INSERT member */
router.post('/', async(req, res, next) => {
    const response = await member_controller.insertMember(req.body);
    communication_helper.sendResponse(response, res);
});

/* UPDATE member */
router.put('/', async(req, res, next) => {
    const response = await member_controller.updateMember(req.body);
    communication_helper.sendResponse(response, res);
});

/* DELETE member */
router.delete('/', async(req, res, next) => {
    const response = await member_controller.deleteMember(req.body);
    communication_helper.sendResponse(response, res);
});


module.exports = router;