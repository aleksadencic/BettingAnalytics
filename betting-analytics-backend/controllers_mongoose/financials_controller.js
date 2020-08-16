const mongo_db = require('../db/mongo_db');
const Financial = require('../model/mongoose/financials');
const mongoose = require('mongoose');

// Find all financials
exports.find_financials = async(req, res, next) => {
    await mongo_db.connectToMongoDB();
    await Financial.find({ id: { $ne: 0 } })
        .exec(async(err, financials) => {
            if (err) { return next(err); }
            mongo_db.disconnectFromMongoDB();
            await res.json(financials);
        });
}