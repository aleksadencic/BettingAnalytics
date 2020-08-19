const mongo_db = require('../../db/mongo_db');
const Member = require('../../model/mongoose/member');
const Date = require('../../model/mongoose/dates');
const Financials = require('../../model/mongoose/financials');
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

exports.insertFinancials = async() => {
    let dates;
    let financials;
    await mongo_db.connectToMongoDB();
    await Date.find().exec((err, datesFromDB) => {
        if (err) {
            return {
                'error': {
                    type: 'error',
                    message: `Error occurred while members segmentation ETL is executing!`,
                    error: err
                }
            }
        } else {
            dates = datesFromDB;
            Financials.find().exec((err, financialsFromDB) => {
                if (err) {
                    return {
                        'error': {
                            type: 'error',
                            message: `Error occurred while members segmentation ETL is executing!`,
                            error: err
                        }
                    }
                } else {
                    financials = financialsFromDB;
                    dates.filter(dateObject => {
                        financials.filter(financialObject => {
                            let amount;
                            let payment;
                            let tickets;
                            if (financialObject.product === 'sport_classic') {
                                if (financialObject.country === 'Serbia') {
                                    amount = Math.floor(Math.random() * (150000 - 130000)) + 130000;
                                    payment = Math.floor(Math.random() * (150000 - 130000)) + 130000;
                                    tickets = Math.floor(Math.random() * (45000 - 30000)) + 30000;
                                } else if (financialObject.country === 'Montenegro') {
                                    amount = Math.floor(Math.random() * (45000 - 20000)) + 20000;
                                    payment = Math.floor(Math.random() * (45000 - 20000)) + 20000;
                                    tickets = Math.floor(Math.random() * (12000 - 8000)) + 8000;
                                } else if (financialObject.country === 'Bosnia') {
                                    amount = Math.floor(Math.random() * (60000 - 33000)) + 33000;
                                    payment = Math.floor(Math.random() * (60000 - 33000)) + 33000;
                                    tickets = Math.floor(Math.random() * (15000 - 8000)) + 8000;
                                }
                            } else if (financialObject.product === 'sport_live') {
                                if (financialObject.country === 'Serbia') {
                                    amount = Math.floor(Math.random() * (120000 - 80000)) + 80000;
                                    payment = Math.floor(Math.random() * (120000 - 80000)) + 80000;
                                    tickets = Math.floor(Math.random() * (35000 - 15000)) + 15000;
                                } else if (financialObject.country === 'Montenegro') {
                                    amount = Math.floor(Math.random() * (18000 - 7500)) + 7500;
                                    payment = Math.floor(Math.random() * (18000 - 7500)) + 7500;
                                    tickets = Math.floor(Math.random() * (12000 - 8000)) + 8000;
                                } else if (financialObject.country === 'Bosnia') {
                                    amount = Math.floor(Math.random() * (45000 - 30000)) + 30000;
                                    payment = Math.floor(Math.random() * (45000 - 30000)) + 30000;
                                    tickets = Math.floor(Math.random() * (15000 - 8000)) + 8000;
                                }
                            } else if (financialObject.product === 'virtual') {
                                if (financialObject.country === 'Serbia') {
                                    amount = Math.floor(Math.random() * (2200 - 880)) + 880;
                                    payment = Math.floor(Math.random() * (2200 - 880)) + 880;
                                    tickets = Math.floor(Math.random() * (18500 - 9000)) + 9000;
                                } else if (financialObject.country === 'Bosnia') {
                                    amount = Math.floor(Math.random() * (7500 - 4000)) + 4000;
                                    payment = Math.floor(Math.random() * (7500 - 4000)) + 4000;
                                    tickets = Math.floor(Math.random() * (25000 - 17500)) + 17500;
                                }
                            } else if (financialObject.product === 'casino') {
                                amount = Math.floor(Math.random() * (9000 - 3000)) + 3000;
                                payment = Math.floor(Math.random() * (9000 - 3000)) + 3000;
                                tickets = Math.floor(Math.random() * (999 - 100)) + 100;
                            } else if (financialObject.product === 'loto') {
                                amount = Math.floor(Math.random() * (7000 - 880)) + 880;
                                payment = Math.floor(Math.random() * (7000 - 880)) + 880;
                                tickets = Math.floor(Math.random() * (999 - 100)) + 100;
                            }
                            const financial = new Financials({
                                _id: new mongoose.Types.ObjectId(),
                                date: dateObject.date,
                                product: financialObject.product,
                                platform: financialObject.platform,
                                country: financialObject.country,
                                amount: amount,
                                payment: payment,
                                number_of_tickets: tickets,
                                pr: payment / amount,
                            });
                            // financial.save((err, financialObj) => {
                            //     if (err) {
                            //         return {
                            //             'error': {
                            //                 type: 'error',
                            //                 message: `Error occurred while members segmentation ETL is executing!`,
                            //                 error: err
                            //             }
                            //         }
                            //     } else {}
                            // });
                        });
                    })
                }
            });
        }
    });
    return dates;
}