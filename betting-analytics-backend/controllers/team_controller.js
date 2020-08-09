const entity_controller = require('./entity_controller');
const communication_helper = require('../helpers/communication_helper');


/* METHODS FOR TEAM ROUTES */
table_name = 'team';

// FIND teams
exports.find = async(parameters) => {
    parameters.table = table_name;
    return await entity_controller.find({
        parameters: communication_helper.getParameters(parameters)
    });
}

// INSERT team
exports.insertTeam = async(parameters) => {
    parameters.table = table_name;
    return await entity_controller.insert({
        parameters: communication_helper.getParameters(parameters)
    });
}

// UPDATE team
exports.updateTeam = async(parameters) => {
    parameters.table = table_name;
    return await entity_controller.update({
        parameters: communication_helper.getParameters(parameters)
    });
}

// DELETE team
exports.deleteTeam = async(parameters) => {
    parameters.table = table_name;
    return await entity_controller.delete({
        parameters: communication_helper.getParameters(parameters)
    });
}