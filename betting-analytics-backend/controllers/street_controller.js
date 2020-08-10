const entity_controller = require('./entity_controller');
const communication_helper = require('../helpers/communication_helper');


/* METHODS FOR STREETS ROUTES */
table_name = 'street';

// FIND streets
exports.find = async(parameters) => {
    parameters.table = table_name;
    return await entity_controller.find({
        parameters: communication_helper.getParameters(parameters)
    });
}

// INSERT street
exports.insertStreet = async(parameters) => {
    parameters.table = table_name;
    return await entity_controller.insert({
        parameters: communication_helper.getParameters(parameters)
    });
}

// UPDATE street
exports.updateStreet = async(parameters) => {
    parameters.table = table_name;
    return await entity_controller.update({
        parameters: communication_helper.getParameters(parameters)
    });
}

// DELETE street
exports.deleteStreet = async(parameters) => {
    parameters.table = table_name;
    return await entity_controller.delete({
        parameters: communication_helper.getParameters(parameters)
    });
}