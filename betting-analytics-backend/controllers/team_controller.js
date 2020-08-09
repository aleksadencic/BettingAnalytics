const entity_controller = require('./entity_controller');
const communication_helper = require('../helpers/communication_helper');


/* METHODS FOR TEAM ROUTES */

// FIND teams
exports.find = async(parameters) => {
    return await entity_controller.find({
        parameters: communication_helper.getParameters(parameters)
    });
}

// INSERT team
exports.insertTeam = async(parameters) => {
    return await entity_controller.insert({
        parameters: communication_helper.getParameters(parameters)
    });
}

// UPDATE team
exports.updateTeam = async(parameters) => {
    return await entity_controller.update({
        parameters: communication_helper.getParameters(parameters)
    });
}

// DELETE team
exports.deleteTeam = async(parameters) => {
    return await entity_controller.delete({
        parameters: communication_helper.getParameters(parameters)
    });
}