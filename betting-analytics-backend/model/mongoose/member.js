const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    _id: Schema.Types.ObjectId,
    member_id: { type: Number, required: true },
    member_name: { type: String, required: true },
    gender: { type: String, required: true },
    mail: { type: String, required: true },
    username: { type: String, required: true },
    budget: { type: String, required: true },
    platform: { type: String, required: true },
    frequency: { type: String, required: true },
    age_group: { type: String, required: true },
    category: { type: String, required: true },
    presence: { type: String, required: true },
    pr: { type: Number, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true }
}, { versionKey: false }, { collection: 'members' });

module.exports = mongoose.model('Member', MemberSchema);