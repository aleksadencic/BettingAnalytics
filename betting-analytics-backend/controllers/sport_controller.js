const entity_controller = require('./entity_controller');
const communication_helper = require('../helpers/communication_helper');


/* METHODS FOR SPORT ROUTES */

// FIND sports
exports.find = async(parameters) => {
    return await entity_controller.find({
        parameters: communication_helper.getParameters(parameters)
    });
}

// INSERT sport
exports.insertSport = async(parameters) => {
    return await entity_controller.insert({
        parameters: communication_helper.getParameters(parameters)
    });
}

// UPDATE sport
exports.updateSport = async(parameters) => {
    return await entity_controller.update({
        parameters: communication_helper.getParameters(parameters)
    });
}

// DELETE sport
exports.deleteSport = async(parameters) => {
    return await entity_controller.delete({
        parameters: communication_helper.getParameters(parameters)
    });
}