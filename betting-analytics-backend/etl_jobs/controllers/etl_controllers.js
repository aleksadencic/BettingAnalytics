const mongoose = require('mongoose');
const Member = require('../../model/mongoose/member');
const oracle_db_helper = require('../helpers/oracle_helper');
const mongo_db_helper = require('../helpers/mongo_helper');

// Members segmentation ETL process
exports.members_segmentation = async(req, res, next) => {
    const members = await oracle_db_helper.getMembersDataFromOracleDB();
    const results = await mongo_db_helper.setMembersDataToMongoDB(members);
    if (results && results.hasOwnProperty('error')) {
        res.status(500).json(results.error);
    } else {
        res.json('Segmentation ETL is finished successfully!');
    }
}