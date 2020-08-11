const mongo_db = require('../db/mongo_db');
const Member = require('../model/mongoose/member');
const mongoose = require('mongoose');

// Find all members
exports.find_members = async(req, res, next) => {
    await mongo_db.connectToMongoDB();
    await Member.find({ id: { $ne: 0 } })
        .exec(async(err, members) => {
            if (err) { return next(err); }
            mongo_db.disconnectFromMongoDB();
            await res.json(members);
        });
}

// Insert new member
exports.insert_member = async(req, res, next) => {
    await mongo_db.connectToMongoDB();
    await Member.findOne().sort({ id: -1 }).exec((err, last_member) => {
        if (err) { return next(err); }
        const new_member_id = last_member.member_id + 1;
        const member = new Member({
            _id: new mongoose.Types.ObjectId(),
            member_id: new_member_id,
            member_name: req.body.member_name,
            gender: req.body.gender,
            mail: req.body.mail,
            username: req.body.username,
            budget: req.body.budget,
            platform: req.body.platform,
            frequency: req.body.frequency,
            age_group: req.body.age_group,
            category: req.body.category,
            presence: req.body.presence,
            pr: req.body.performance_ratio,
            country: req.body.country,
            city: req.body.city
        });
        member.save((err, newMember) => {
            if (err) { return next(err); }
            mongo_db.disconnectFromMongoDB();
            res.json(newMember);
        });
    });
}

// Update member
exports.update_member = async(req, res, next) => {
    await mongo_db.connectToMongoDB();
    await Member.updateOne({
        member_id: Number(req.params.id)
    }, {
        $set: {
            member_name: req.body.member_name,
            gender: req.body.gender,
            mail: req.body.mail,
            username: req.body.username,
            budget: req.body.budget,
            platform: req.body.platform,
            frequency: req.body.frequency,
            age_group: req.body.age_group,
            category: req.body.category,
            presence: req.body.presence,
            pr: req.body.performance_ratio,
            country: req.body.country,
            city: req.body.city
        }
    }, (err, member) => {
        if (err) { return next(err); }
        mongo_db.disconnectFromMongoDB();
        res.send(`Member with id=${Number(req.params.id)} is updated!`);
    });
}

// Delete member
exports.delete_member = async(req, res, next) => {
    await mongo_db.connectToMongoDB();
    await Member.deleteOne({ member_id: Number(req.params.id) }, (err, member) => {
        if (err) return next(err);
        mongo_db.disconnectFromMongoDB();
        res.send(`Member with id=${Number(req.params.id)} is deleted!`);
    });
}