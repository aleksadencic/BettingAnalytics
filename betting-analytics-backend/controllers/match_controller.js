const entity_controller = require('./entity_controller');
const communication_helper = require('../helpers/communication_helper');


/* METHODS FOR match ROUTES */
table_name = 'match';

// FIND matches
exports.find = async(parameters) => {
    parameters.table = table_name;
    return await entity_controller.find({
        parameters: communication_helper.getParameters(parameters)
    });
}

// INSERT match
exports.insertMatch = async(parameters) => {
    parameters.table = table_name;
    return await entity_controller.insert({
        parameters: communication_helper.getParameters(parameters)
    });
}

// UPDATE match
exports.updateMatch = async(parameters) => {
    parameters.table = table_name;
    return await entity_controller.update({
        parameters: communication_helper.getParameters(parameters)
    });
}

// DELETE match
exports.deleteMatch = async(parameters) => {
    parameters.table = table_name;
    return await entity_controller.delete({
        parameters: communication_helper.getParameters(parameters)
    });
}