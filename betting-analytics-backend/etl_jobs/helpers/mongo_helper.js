const mongo_db = require('../../db/mongo_db');
const Member = require('../../model/mongoose/member');
const mongoose = require('mongoose');

// Set segmentation to Mongo DB
exports.setMembersDataToMongoDB = async(members) => {
    await mongo_db.connectToMongoDB();
    await members.filter(member => {
        const new_member = new Member({
            _id: new mongoose.Types.ObjectId(),
            member_id: member.COUNTRY_ID,
            member_name: member.COUNTRY_NAME,
            gender: member.COUNTRY_NAME,
            mail: member.COUNTRY_NAME,
            username: member.COUNTRY_NAME,
            budget: member.COUNTRY_NAME,
            platform: member.COUNTRY_NAME,
            frequency: member.COUNTRY_NAME,
            age_group: member.COUNTRY_NAME,
            category: member.COUNTRY_NAME,
            presence: member.COUNTRY_NAME,
            pr: member.COUNTRY_ID,
            country: member.COUNTRY_NAME,
            city: member.COUNTRY_NAME
        });
        new_member.save((err, newMember) => {
            if (err) {
                return {
                    'error': {
                        type: 'error',
                        message: `Error occurred while members segmentation ETL is executing!`,
                        error: err
                    }
                }
            } else {}
        });
    });
    // mongo_db.disconnectFromMongoDB();
}