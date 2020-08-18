const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FinancialSchema = new Schema({
    _id: Schema.Types.ObjectId,
    date: { type: String, required: true },
    product: { type: String, required: true },
    platform: { type: String, required: true },
    country: { type: String, required: true },
    amount: { type: Number, required: true },
    payment: { type: Number, required: true },
    number_of_tickets: { type: Number, required: true },
    pr: { type: Number, required: true },
}, { versionKey: false }, { collection: 'financials' });

module.exports = mongoose.model('Financial', FinancialSchema);