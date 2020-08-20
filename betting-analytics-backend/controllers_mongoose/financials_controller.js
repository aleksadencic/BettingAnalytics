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
    // Products analytics
exports.products_analytics = async(req, res, next) => {
    const countries = req.body;
    await mongo_db.connectToMongoDB();
    await Financial.aggregate([{
            $match: {
                country: { $in: countries },
            }
        }, {
            $group: {
                _id: { product: '$product', platform: '$platform' },
                amount: { $sum: '$amount' },
                payment: { $sum: '$payment' },
                number_of_tickets: { $sum: '$number_of_tickets' },
            }
        }],
        (err, financials) => {
            res.json(financials);
        });
}

// Countries analytics
exports.countries_analytics = async(req, res, next) => {
    const products = req.body;
    await mongo_db.connectToMongoDB();
    await Financial.aggregate([{
            $match: {
                product: { $in: products },
            }
        }, {
            $group: {
                _id: { country: '$country' },
                amount: { $sum: '$amount' },
                payment: { $sum: '$payment' },
                number_of_tickets: { $sum: '$number_of_tickets' },
            }
        }],
        (err, financials) => {
            res.json(financials);
        });
}

// Find financials with parameters
exports.find_financials_with_parameters = async(req, res, next) => {
    const reportType = req.body.reportType;
    const country = req.body.country;
    const product = req.body.product;
    const platform = req.body.platform;

    await mongo_db.connectToMongoDB();
    // await Financial.find({
    //         country: { $in: country },
    //         product: { $in: product },
    //         platform: { $in: platform }
    //     })
    //     .select('date amount payment number_of_tickets pr')
    //     .exec(async(err, financials) => {
    //         if (err) { return next(err); }
    //         mongo_db.disconnectFromMongoDB();
    //         await res.json(financials);
    //     })

    let from = reportType === 'year' ? 0 :
        reportType === 'month' ? 0 :
        reportType === 'day' ? 0 :
        null;
    let to = reportType === 'year' ? 4 :
        reportType === 'month' ? 7 :
        reportType === 'day' ? 10 :
        null;
    await Financial.aggregate([{
            $match: {
                country: { $in: country },
                product: { $in: product },
                platform: { $in: platform }
            }
        }, {
            $group: {
                _id: { date: { $substr: ['$date', from, to] } },
                amount: { $sum: '$amount' },
                payment: { $sum: '$payment' },
                number_of_tickets: { $sum: '$number_of_tickets' },
            }
        }, {
            $sort: { "_id.date": 1 }
        }],
        (err, financials) => {
            res.json(financials);
        });


}