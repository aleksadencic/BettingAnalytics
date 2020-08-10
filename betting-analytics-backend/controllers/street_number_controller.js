const entity_controller = require('./entity_controller');
const communication_helper = require('../helpers/communication_helper');


/* METHODS FOR STREET NUMBERS ROUTES */
table_name = 'street_number';

// FIND street numbers
exports.find = async(parameters) => {
    parameters.table = table_name;
    return await entity_controller.find({
        parameters: communication_helper.getParameters(parameters)
    });
}

// INSERT street number 
exports.insertStreetNumber = async(parameters) => {
    parameters.table = table_name;
    return await entity_controller.insert({
        parameters: communication_helper.getParameters(parameters)
    });
}

// UPDATE street number 
exports.updateStreetNumber = async(parameters) => {
    parameters.table = table_name;
    return await entity_controller.update({
        parameters: communication_helper.getParameters(parameters)
    });
}

// DELETE street number 
exports.deleteStreetNumber = async(parameters) => {
    parameters.table = table_name;
    return await entity_controller.delete({
        parameters: communication_helper.getParameters(parameters)
    });
}