const entity_controller = require('./entity_controller');
const communication_helper = require('../helpers/communication_helper');


/* METHODS FOR COUNTRY ROUTES */

// FIND counties
exports.find = async(parameters) => {
    return await entity_controller.find({
        parameters: communication_helper.getParameters(parameters)
    });
}

// INSERT county
exports.insertCountry = async(parameters) => {
    return await entity_controller.insert({
        parameters: communication_helper.getParameters(parameters)
    });
}

// UPDATE county
exports.updateCountry = async(parameters) => {
    return await entity_controller.update({
        parameters: communication_helper.getParameters(parameters)
    });
}

// DELETE county
exports.deleteCountry = async(parameters) => {
    return await entity_controller.delete({
        parameters: communication_helper.getParameters(parameters)
    });
}