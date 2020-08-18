const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DateSchema = new Schema({
    _id: Schema.Types.ObjectId,
    date: { type: String, required: true },
}, { versionKey: false }, { collection: 'dates' });

module.exports = mongoose.model('Date', DateSchema);